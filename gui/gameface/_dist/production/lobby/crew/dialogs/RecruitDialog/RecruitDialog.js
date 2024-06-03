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
            527: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, { mouse: () => c, off: () => i, on: () => s, onResize: () => a, onScaleUpdated: () => o });
                var n = u(2472),
                    r = u(1176);
                const a = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        o = l[t]((e) => u([e, 'outside']));
                                    function s(e) {
                                        u([e, 'inside']);
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
                            })(u)),
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
                            e.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => o,
                    });
                var n = u(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2472: (e, t, u) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => r });
                var n = u(5959);
                const r = { view: u(7641), client: n };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => r });
                var n = u(2472);
                const r = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => B,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => h,
                        getSize: () => _,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => C,
                        isFocused: () => D,
                        pxToRem: () => g,
                        remToPx: () => p,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var n = u(3722),
                    r = u(6112),
                    a = u(6538),
                    o = u(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    o = 32,
                    s = 64,
                    i = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? r : o);
                        },
                        minimize() {
                            i(s);
                        },
                        move(e) {
                            i(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, u) => {
                'use strict';
                let n, r;
                u.d(t, { n: () => n }),
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
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(3138);
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
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, u, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(a) : (this._views[u] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
            9916: (e, t, u) => {
                'use strict';
                u.d(t, { c1: () => b, Sw: () => a.Z, B0: () => s, ry: () => g, Eu: () => p });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
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
                        const u = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                var a = u(1358);
                var o = u(8613);
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(5521),
                    m = u(3138);
                const E = ['args'];
                function A(e, t, u, n, r, a, o) {
                    try {
                        var s = e[a](o),
                            i = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(n, r);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        u = arguments;
                                    return new Promise(function (n, r) {
                                        var a = e.apply(t, u);
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
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    F = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    D = () => F(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var C = u(7572);
                const b = r.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: C.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => F(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => F(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            F(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), a) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                _ = i.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            F(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: h(E),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, D);
                        },
                        handleViewEvent: F,
                        onBindingsReady: g,
                        onLayoutReady: p,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < r.length; t++) u[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    a = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            1722: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => Vu,
                        Bar: () => Hu,
                        DefaultScroll: () => Wu,
                        Direction: () => Cu,
                        defaultSettings: () => bu,
                        useHorizontalScrollApi: () => Bu,
                    });
                var r = {};
                u.r(r), u.d(r, { Area: () => an, Bar: () => un, Default: () => rn, useVerticalScrollApi: () => zu });
                var a = u(6179),
                    o = u.n(a);
                const s = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var i = u(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, t, u) {
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
                        })(e, u),
                        r = (function (e, t) {
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
                        })(t, u),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === u.extraLarge.weight,
                        large: a === u.large.weight,
                        medium: a === u.medium.weight,
                        small: a === u.small.weight,
                        extraSmall: a === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
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
                })(c || (c = {}));
                const _ = i.O.client.getSize('rem'),
                    m = _.width,
                    E = _.height,
                    A = Object.assign({ width: m, height: E }, d(m, E, l)),
                    h = (0, a.createContext)(A),
                    g = ['children'];
                const p = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, g);
                    const n = (0, a.useContext)(h),
                        r = n.extraLarge,
                        o = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        _ = n.largeWidth,
                        m = n.mediumWidth,
                        E = n.smallWidth,
                        A = n.extraSmallWidth,
                        p = n.extraLargeHeight,
                        F = n.largeHeight,
                        D = n.mediumHeight,
                        f = n.smallHeight,
                        C = n.extraSmallHeight,
                        b = { extraLarge: p, large: F, medium: D, small: f, extraSmall: C };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && r) return t;
                        if (u.large && o) return t;
                        if (u.medium && i) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && d) return s(t, u, b);
                        if (u.largeWidth && _) return s(t, u, b);
                        if (u.mediumWidth && m) return s(t, u, b);
                        if (u.smallWidth && E) return s(t, u, b);
                        if (u.extraSmallWidth && A) return s(t, u, b);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && p) return t;
                            if (u.largeHeight && F) return t;
                            if (u.mediumHeight && D) return t;
                            if (u.smallHeight && f) return t;
                            if (u.extraSmallHeight && C) return t;
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
                (0, a.memo)(p);
                const F = (e) => {
                        const t = (0, a.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    D = ({ children: e }) => {
                        const t = (0, a.useContext)(h),
                            u = (0, a.useState)(t),
                            n = u[0],
                            r = u[1],
                            s = (0, a.useCallback)((e, t) => {
                                const u = i.O.view.pxToRem(e),
                                    n = i.O.view.pxToRem(t);
                                r(Object.assign({ width: u, height: n }, d(u, n, l)));
                            }, []),
                            c = (0, a.useCallback)(() => {
                                const e = i.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        F(() => {
                            i.O.client.events.on('clientResized', s), i.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', s),
                                        i.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [s, c],
                            );
                        const _ = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return o().createElement(h.Provider, { value: _ }, e);
                    };
                var f = u(6483),
                    C = u.n(f),
                    b = u(926),
                    v = u.n(b);
                let B, w, y;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(B || (B = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(y || (y = {}));
                const k = () => {
                        const e = (0, a.useContext)(h),
                            t = e.width,
                            u = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return B.ExtraLarge;
                                    case e.large:
                                        return B.Large;
                                    case e.medium:
                                        return B.Medium;
                                    case e.small:
                                        return B.Small;
                                    case e.extraSmall:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return y.ExtraLarge;
                                    case e.largeHeight:
                                        return y.Large;
                                    case e.mediumHeight:
                                        return y.Medium;
                                    case e.smallHeight:
                                        return y.Small;
                                    case e.extraSmallHeight:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: o, remScreenWidth: t, remScreenHeight: u };
                    },
                    x = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const T = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_WIDTH,
                        [w.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [w.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [y.ExtraSmall]: '',
                        [y.Small]: v().SMALL_HEIGHT,
                        [y.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [y.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [B.ExtraSmall]: '',
                        [B.Small]: v().SMALL,
                        [B.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [B.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [B.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    N = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, x);
                        const r = k(),
                            a = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return o().createElement('div', S({ className: C()(u, T[a], L[s], M[i]) }, n), t);
                    },
                    O = ['children'];
                const I = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, O);
                    return o().createElement(D, null, o().createElement(N, u, t));
                };
                var H = u(493),
                    P = u.n(H);
                const W = (e, t) => {
                    const u = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            (t && !t(e)) || (u.current = e);
                        }, [t, e]),
                        u.current
                    );
                };
                u(1281);
                let V;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(V || (V = {}));
                const z = (e) => e.replace(/&nbsp;/g, ' ');
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
                var $ = u(9916),
                    j = u(8613);
                Date.now(), j.Ew.getRegionalDateTime, j.Ew.getFormattedDateTime;
                const U = (e = 1) => {
                        const t = new Error().stack;
                        let u,
                            n = R.invalid('resId');
                        return (
                            t &&
                                ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== u &&
                                    window.subViews[u] &&
                                    (n = window.subViews[u].id)),
                            { caller: u, stack: t, resId: n }
                        );
                    },
                    G = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    q = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    K = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    Y = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = G(`${e}.${u}`, window);
                                return q(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    X = (e) => {
                        const t = ((e) => {
                                const t = U(),
                                    u = t.caller,
                                    n = t.resId,
                                    r = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: r, modelPath: K(r, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const r = G(K(u, `${t}.${n}`), window);
                                    return q(r) ? (e.push(r.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    Z = $.Sw.instance;
                let Q;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Q || (Q = {}));
                const J = (e = 'model', t = Q.Deep) => {
                        const u = (0, a.useState)(0),
                            n = (u[0], u[1]),
                            r = (0, a.useMemo)(() => U(), []),
                            o = r.caller,
                            s = r.resId,
                            i = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                                [o, e],
                            ),
                            l = (0, a.useState)(() =>
                                ((e) => {
                                    const t = G(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return q(t) ? t.value : t;
                                })(Y(i)),
                            ),
                            c = l[0],
                            d = l[1],
                            _ = (0, a.useRef)(-1);
                        return (
                            F(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? Q.Deep : Q.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== Q.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === Q.Deep
                                                ? (e === c && n((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        r = X(e);
                                    _.current = Z.addCallback(r, u, s, t === Q.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (t !== Q.None)
                                    return () => {
                                        Z.removeCallback(_.current, s);
                                    };
                            }, [s, t]),
                            c
                        );
                    },
                    ee = ($.Sw.instance, W);
                var te = u(5521);
                const ue = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ne(e = te.n.NONE, t = ue, u = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== te.n.NONE)
                            return (
                                window.addEventListener('keydown', r, u),
                                () => {
                                    window.removeEventListener('keydown', r, u);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), t(r), u && r.stopPropagation();
                            }
                        }
                    }, [t, e, u, n]);
                }
                const re = /<link.*?>/g,
                    ae = /\.\.\//g,
                    oe = /<script.*?>/g,
                    se = 'default.css',
                    ie = (e) => {
                        const t = e.match(ae);
                        return t && t.join('');
                    },
                    le = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const u = t[e];
                            if (!u.href.includes(se)) return u.href;
                        }
                        return '';
                    },
                    ce = (e) => {
                        const t = le(),
                            u = ie(t);
                        let n,
                            r = e;
                        for (; null !== (n = oe.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = u + e[2].replace(ae, '');
                                r = r.replace(e[2], t);
                            }
                        }
                        return r;
                    },
                    de = 'SubView_base_df',
                    _e = 'subViews.onChanged',
                    me = (() => {
                        const e = [];
                        let t = !1;
                        const u = () => {
                            if (!e.length) return void (t = !1);
                            const n = e.shift();
                            n && ((t = !0), n().then(() => u()));
                        };
                        return {
                            add: (n) => {
                                e.push(n), t || u();
                            },
                        };
                    })(),
                    Ee = (0, a.memo)(({ id: e, fallback: t, onLoadCallback: u, mixClass: n }) => {
                        const r = (0, a.useState)(''),
                            s = r[0],
                            i = r[1],
                            l = (0, a.useMemo)(() => ({ __html: ce(s) }), [s]),
                            c = (0, a.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            d = (0, a.useState)(!1),
                            _ = d[0],
                            m = d[1],
                            E = (0, a.useCallback)(
                                (e) => {
                                    e.includes(c) &&
                                        (m(!0), engine.off(_e, E), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            A = (0, a.useCallback)((e) => {
                                me.add(
                                    () =>
                                        new Promise((t) => {
                                            i(e);
                                            const u = new MutationObserver(() => {
                                                    u.disconnect(), t();
                                                }),
                                                n = document.getElementById('root');
                                            n && u.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, a.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    u = t.path;
                                let n;
                                if ((n = u.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, t)),
                                        engine.on(`subView:inject->${n}`, A),
                                        (({ path: e, name: t }) => {
                                            const u = new XMLHttpRequest();
                                            (u.onreadystatechange = () => {
                                                4 === u.readyState &&
                                                    (200 === u.status
                                                        ? (0, $.Eu)().then(() => {
                                                              console.info(`Sub view ${t} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${t}`,
                                                                      u.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${u.status} - can't get bundle`,
                                                          ));
                                            }),
                                                u.open('GET', e),
                                                u.send();
                                        })({ name: n, path: u }),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${n}`, A),
                                                console.info(`Sub view ${n} is destroyed: ${u}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(_e, E);
                        }, [E, A, e, _]),
                            (0, a.useEffect)(
                                () => () => {
                                    s &&
                                        ((e) => {
                                            const t = ie(le());
                                            let u;
                                            for (; null !== (u = re.exec(e)); ) {
                                                const e = u[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const u = t + e[1].replace(ae, ''),
                                                        n = document.head.querySelector(`[href="${u}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(s);
                                },
                                [s],
                            );
                        const h = C()(de, n);
                        if (s) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const u = le(),
                                        n = ie(u);
                                    for (; null !== (t = re.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(se) && n) {
                                            const t = n + e[1].replace(ae, ''),
                                                u = document.createElement('link');
                                            (u.href = t), (u.rel = 'stylesheet'), document.head.appendChild(u);
                                        }
                                    }
                                })(s),
                                u && u(e),
                                o().createElement('div', { className: h, dangerouslySetInnerHTML: l })
                            );
                        }
                        return t ? o().createElement('div', { className: h }, o().createElement(t, null)) : null;
                    });
                function Ae(e) {
                    engine.call('PlaySound', e);
                }
                const he = {
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
                    base__firstHover: 'CButton_base__firstHover_d5',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
                let ge, pe;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ge || (ge = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(pe || (pe = {}));
                const Fe = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: r,
                    mixClass: s,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: E,
                    onClick: A,
                }) => {
                    const h = (0, a.useRef)(null),
                        g = (0, a.useState)(u),
                        p = g[0],
                        F = g[1],
                        D = (0, a.useState)(!1),
                        f = D[0],
                        b = D[1],
                        v = (0, a.useState)(!1),
                        B = v[0],
                        w = v[1],
                        y = (0, a.useCallback)(() => {
                            r || (h.current && (h.current.focus(), F(!0)));
                        }, [r]),
                        k = (0, a.useCallback)(
                            (e) => {
                                p && null !== h.current && !h.current.contains(e.target) && F(!1);
                            },
                            [p],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                r || (A && A(e));
                            },
                            [r, A],
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                r || (null !== i && Ae(i), c && c(e), w(!0));
                            },
                            [r, i, c],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                r || (m && m(e), b(!1));
                            },
                            [r, m],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                r || (null !== l && Ae(l), _ && _(e), u && y(), b(!0));
                            },
                            [r, l, _, y, u],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                r || (E && E(e), b(!1));
                            },
                            [r, E],
                        ),
                        O = C()(
                            he.base,
                            he[`base__${n}`],
                            {
                                [he.base__disabled]: r,
                                [he[`base__${t}`]]: t,
                                [he.base__focus]: p,
                                [he.base__highlightActive]: f,
                                [he.base__firstHover]: B,
                            },
                            s,
                        ),
                        I = C()(he.state, he.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', k),
                                () => {
                                    document.removeEventListener('mousedown', k);
                                }
                            ),
                            [k],
                        ),
                        (0, a.useEffect)(() => {
                            F(u);
                        }, [u]),
                        o().createElement(
                            'div',
                            {
                                ref: h,
                                className: O,
                                onMouseEnter: S,
                                onMouseMove: T,
                                onMouseUp: L,
                                onMouseDown: M,
                                onMouseLeave: N,
                                onClick: x,
                            },
                            n !== ge.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: he.back }),
                                    o().createElement('span', { className: he.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: I },
                                o().createElement('span', { className: he.stateDisabled }),
                                o().createElement('span', { className: he.stateHighlightHover }),
                                o().createElement('span', { className: he.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: he.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Fe.defaultProps = { type: ge.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const De = (0, a.memo)(Fe),
                    fe = [
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
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const be = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: $.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    ve = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            m = e.decoratorId,
                            E = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            h = void 0 === A || A,
                            g = e.targetId,
                            p = void 0 === g ? 0 : g,
                            F = e.onShow,
                            D = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, fe);
                        const C = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(() => p || U().resId, [p]),
                            v = (0, a.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (be(u, E, { isMouseEvent: !0, on: !0, arguments: Ce(n) }, b),
                                    F && F(),
                                    (C.current.isVisible = !0));
                            }, [u, E, n, b, F]),
                            B = (0, a.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        be(u, E, { on: !1 }, b),
                                        C.current.isVisible && D && D(),
                                        (C.current.isVisible = !1);
                                }
                            }, [u, E, b, D]),
                            w = (0, a.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === h && B();
                            }, [h, B]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        window.removeEventListener('mouseleave', B), B();
                                    }
                                ),
                                [B],
                            );
                        return h
                            ? (0, a.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((C.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              B(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === _ && B(), null == i || i(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === _ && B(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var y;
                    },
                    Be = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const ye = R.views.common.tooltip_window.simple_tooltip_content,
                    ke = (e) => {
                        let t = e.children,
                            u = e.body,
                            n = e.header,
                            r = e.note,
                            s = e.alert,
                            i = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Be);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: u, header: n, note: r, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, u, n, r, i]);
                        return o().createElement(
                            ve,
                            we(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? ye.SimpleTooltipHtmlContent('resId') : ye.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    },
                    xe = (e) => {
                        let t,
                            u = null;
                        return (
                            (u = requestAnimationFrame(() => {
                                u = requestAnimationFrame(() => {
                                    (u = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== u && cancelAnimationFrame(u);
                            }
                        );
                    },
                    Se = 'TextOverflow_base_3b',
                    Te = ({ content: e, classMix: t }) => {
                        const u = (0, a.useRef)(null),
                            n = (0, a.useState)(!0),
                            r = n[0],
                            s = n[1];
                        return (
                            (0, a.useEffect)(() =>
                                xe(() => {
                                    const e = u.current;
                                    e && e.offsetWidth >= e.scrollWidth && s(!1);
                                }),
                            ),
                            o().createElement(
                                ke,
                                { isEnabled: r, body: e },
                                o().createElement('div', { ref: u, className: C()(Se, t) }, e),
                            )
                        );
                    };
                let Le;
                !(function (e) {
                    (e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent');
                })(Le || (Le = {}));
                const Me = 'DialogTemplateButton_base_0b',
                    Re = 'DialogTemplateButton_label_83',
                    Ne = 'DialogTemplateButton_label__noTooltip_14',
                    Oe = (0, a.memo)(
                        ({ onClick: e, isFocused: t, buttonID: u, isDisabled: n, label: r, tooltip: s, type: i }) => {
                            const l = (0, a.useCallback)(() => {
                                    e({ buttonID: u });
                                }, [e, u]),
                                c = (0, a.useMemo)(() => {
                                    return (
                                        (e = s.type),
                                        (t = { buttonID: u }),
                                        {
                                            isEnabled: e !== Le.absent,
                                            args: t,
                                            contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                            decoratorId:
                                                e === Le.normal
                                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                          'resId',
                                                      )
                                                    : void 0,
                                            ignoreShowDelay: e === Le.backport,
                                            ignoreMouseClick: !0,
                                        }
                                    );
                                    var e, t;
                                }, [s.type, u]),
                                d = C()(Re, s.type !== Le.absent && Ne);
                            return o().createElement(
                                ve,
                                c,
                                o().createElement(
                                    'div',
                                    { className: Me },
                                    o().createElement(
                                        De,
                                        { size: pe.medium, type: i, disabled: n, onClick: l, isFocused: t },
                                        o().createElement(Te, { classMix: d, content: r || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ie = 'DialogTemplateButtonList_base_8e';
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const Pe = (0, a.memo)(() => {
                        const e = J('model').onButtonClicked,
                            t = J('model.focus'),
                            u = t.focusedIndex,
                            n = t.onTabPressed,
                            r = J('model.buttons'),
                            s = (0, a.useCallback)(
                                (e) => {
                                    n({ shift: e.shiftKey });
                                },
                                [n],
                            );
                        ne(te.n.TAB, s);
                        const i = (0, a.useCallback)(
                            (t) => {
                                if (u < 0 || u >= r.length) return;
                                const n = r[u].value;
                                t.altKey || n.isDisabled || e({ buttonID: n.buttonID });
                            },
                            [r, u, e],
                        );
                        return (
                            ne(te.n.ENTER, i),
                            o().createElement(
                                'div',
                                { className: Ie },
                                r.map(({ value: t }, n) =>
                                    o().createElement(Oe, He({ key: t.buttonID, isFocused: n === u, onClick: e }, t)),
                                ),
                            )
                        );
                    }),
                    We = 'DialogTemplateWrapper_base_f7',
                    Ve = 'DialogTemplateWrapper_base__hidden_5f',
                    ze = 'DialogTemplateWrapper_subView_30';
                function $e() {
                    return (
                        ($e =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        $e.apply(this, arguments)
                    );
                }
                const je = (0, a.memo)(({ Template: e }) => {
                    const t = J('model', Q.None),
                        u = t.onCloseClicked,
                        n = t.placeHolders,
                        r = t.background,
                        s = t.dimmerAlpha,
                        i = t.displayFlags;
                    (0, a.useEffect)(() => {
                        const e = document.getElementById('root');
                        e && e.setAttribute('id', 'stubDialogTemplate');
                    }, []);
                    const l = i.map(({ value: e }) => e),
                        c = (0, a.useRef)(n.map(({ value: e }) => e.resourceID)),
                        d = (0, a.useState)(0 !== c.current.length),
                        _ = d[0],
                        m = d[1],
                        E = (0, a.useCallback)(
                            (e = 'default') => {
                                u({ reason: e });
                            },
                            [u],
                        ),
                        A = (0, a.useCallback)(() => {
                            E('escape');
                        }, [E]);
                    var h;
                    (h = A), ne(te.n.ESCAPE, h);
                    const g = (0, a.useCallback)((e) => {
                            const t = c.current,
                                u = t.indexOf(e);
                            u > -1 && (t.splice(u, 1), 0 === t.length && m(!1));
                        }, []),
                        p = (0, a.useMemo)(() => {
                            const e = { backgroundColor: `rgba(19, 18, 16, ${s})` };
                            return r && (e.backgroundImage = `url(${r})`), e;
                        }, [r, s]),
                        F = (0, a.useMemo)(
                            () =>
                                n.reduce(
                                    (e, { value: t }) => (
                                        (e[t.placeHolder] = o().createElement(Ee, {
                                            key: t.placeHolder,
                                            id: t.resourceID,
                                            mixClass: ze,
                                            onLoadCallback: g,
                                        })),
                                        e
                                    ),
                                    {},
                                ),
                            [g, n],
                        ),
                        f = C()(We, _ && Ve);
                    return o().createElement(
                        D,
                        null,
                        o().createElement(
                            'div',
                            { className: f, style: p },
                            o().createElement(
                                e,
                                $e(
                                    { onClose: E, buttons: o().createElement(Pe, null), displayFlags: l, isShown: !_ },
                                    F,
                                ),
                            ),
                        ),
                    );
                });
                var Ue = u(3403);
                const Ge = ['children'];
                function qe() {
                    return (
                        (qe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        qe.apply(this, arguments)
                    );
                }
                const Ke = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, Ge);
                    return o().createElement(
                        ve,
                        qe(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            u,
                        ),
                        t,
                    );
                };
                function Ye() {
                    return (
                        (Ye =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ye.apply(this, arguments)
                    );
                }
                const Xe = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = o().createElement('div', { className: u }, e);
                    if (t.header || t.body) return o().createElement(ke, t, n);
                    const r = t.contentId;
                    return r ? o().createElement(ve, Ye({}, t, { contentId: r }), n) : o().createElement(Ke, t, n);
                };
                var Ze = u(8045);
                const Qe = 'ExtendedText_base_71',
                    Je = 'ExtendedText_base__zeroPadding_25',
                    et = 'ExtendedText_base__isTruncationAvailable_5b',
                    tt = 'ExtendedText_truncated_97',
                    ut = 'ExtendedText_truncated__hide_31',
                    nt = 'ExtendedText_unTruncated_b8';
                let rt, at, ot;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(rt || (rt = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(at || (at = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(ot || (ot = {}));
                const st = { [ot.NBSP]: rt.NoBreakSymbol, [ot.ZWNBSP]: rt.NoBreakSymbol, [ot.NEW_LINE]: rt.LineBreak },
                    it = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    lt = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    ct = 'renderers_noBreakWrapper_10',
                    dt = 'renderers_lineBreak_b5',
                    _t = 'renderers_newLine_bd',
                    mt = 'renderers_word_f3',
                    Et = (e) => ({ color: `#${e}` }),
                    At = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? lt[n]
                                ? o().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: C()(mt, lt[n]) },
                                      e,
                                  )
                                : o().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: mt, style: Et(n) },
                                      e,
                                  )
                            : o().createElement('span', { key: u, 'data-block-type': t.blockType, className: mt }, e);
                    },
                    ht = {
                        [rt.Word]: At,
                        [rt.NoBreakSymbol]: At,
                        [rt.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            o().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => o().createElement(o().Fragment, { key: u }, e)),
                            ),
                        [rt.LineBreak]: ({ key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': rt.LineBreak, className: dt }),
                        [rt.NewLine]: ({ elementList: e, key: t }) =>
                            o().createElement('span', { key: t, 'data-block-type': rt.NewLine, className: _t }, e),
                        [rt.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': rt.NoBreakWrapper, className: ct },
                                e,
                            ),
                    },
                    gt = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, a) => {
                                const o = `${u}_${a}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        u = gt(e, ht[t], o);
                                    n.push(...u);
                                } else n.push(t({ elementList: [r], textBlock: e, key: o }));
                            }),
                            n
                        );
                    },
                    pt = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            n = e.blockType,
                                            r = ht[n],
                                            a = gt(e, r, t);
                                        return (
                                            n === rt.NoBreakWrapper
                                                ? u.push(r({ elementList: a, textBlock: e, key: `${t}` }))
                                                : u.push(...a),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    },
                    Ft = (e, t, u, n) => {
                        let r = t.exec(e),
                            a = 0;
                        for (; r; ) a !== r.index && u(e.slice(a, r.index)), n(r), (a = t.lastIndex), (r = t.exec(e));
                        a !== e.length && u(e.slice(a));
                    },
                    Dt = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    ft = (e) => {
                        const t = [];
                        return (
                            Ft(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var u;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((u = e), u.match(Dt) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    Ct = it
                        ? (e) => {
                              const t = [];
                              return (
                                  Ft(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...ft(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e) => {
                              const t = /[\s\u002d]/g;
                              let u = t.exec(e);
                              if (!u) return [e];
                              const n = [];
                              let r = 0;
                              for (; u; ) n.push(e.slice(r, t.lastIndex)), (r = t.lastIndex), (u = t.exec(e));
                              return r !== e.length && n.push(e.slice(r)), n;
                          },
                    bt = (e, t = '') => {
                        const u = [];
                        return (
                            Ft(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    u.push({ blockType: rt.Word, colorTag: t, childList: Ct(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = st[n.charAt(0)];
                                    r === rt.LineBreak
                                        ? u.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: rt.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: rt.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : u.push({ blockType: r, colorTag: t, childList: [n] });
                                },
                            ),
                            u
                        );
                    },
                    vt = (e, t, u = '') => {
                        const n = [];
                        return (
                            Ft(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...bt(e, u));
                                },
                                (e) => {
                                    const r = e[1],
                                        a = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof a || 'number' == typeof a
                                        ? n.push(...bt(String(a), u))
                                        : n.push({ blockType: rt.Binding, colorTag: u, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    Bt = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === rt.NoBreakWrapper) e.childList.push(n), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: rt.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    wt = (e, t = {}) => {
                        if (!e) return [];
                        const u = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === rt.NoBreakSymbol
                                        ? ((u = !0), t.push(...Bt(t.pop(), e)))
                                        : (u ? t.push(...Bt(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const u = [];
                                return (
                                    Ft(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            u.push(...vt(e, t));
                                        },
                                        (e) => {
                                            u.push(...vt(e[2], t, e[1]));
                                        },
                                    ),
                                    u
                                );
                            })(z(e).replace(/&zwnbsp;/g, '\ufeff'), t),
                        );
                        return pt(u);
                    },
                    yt = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    kt = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    xt = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = kt(e, t),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            o = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / a);
                            return n >= u ? [!0, u + o] : [!1, n];
                        }
                        const s = Math.max(u + o, 0);
                        return r < s ? [!1, 0] : [!0, s];
                    },
                    St = (e, t, u, n, r, a) => {
                        let s = -1,
                            i = null;
                        for (let l = u; l >= 0; l--) {
                            const u = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === rt.LineBreak || c === rt.NewLine || c === rt.Binding) continue;
                            const d = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = xt(u, n, r),
                                    c = e[0],
                                    _ = e[1];
                                if (!c) {
                                    _ > 0 && (r -= _);
                                    continue;
                                }
                                const m = d.slice(0, d.length - _) + a,
                                    E = t[l];
                                (i = o().cloneElement(E, E.props, m)), (s = l);
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[l],
                                    _ = c.props.children,
                                    m = St(e, _, e.length - 1, n, r, a),
                                    E = m[0],
                                    A = m[1];
                                if (!(E < 0)) {
                                    const e = _.slice(0, E);
                                    (i = o().cloneElement(c, c.props, e, A)), (s = l);
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [s, i];
                    },
                    Tt = (e, t, u, n = '...') => {
                        const r = [...t],
                            a = e.current;
                        if (!a) return [r, !1];
                        const o = u.height,
                            s = u.width,
                            i = a.lastElementChild;
                        if (!yt(i, o) && kt(i, s) <= 0) return [r, !1];
                        const l = a.children,
                            c = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const r = u + Math.ceil(0.5 * (n - u));
                                    yt(e[r], t) ? (n = r - 1) : (u = r + 1);
                                }
                                return u - 1;
                            })(l, o);
                        if (c < 0) return [r, !1];
                        const d = St(l, r, c, s, n.length, n),
                            _ = d[0],
                            m = d[1];
                        return m && (r.splice(_, 1, m), r.splice(_ + 1)), [r, !0];
                    },
                    Lt = o().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: n,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: s = !1,
                            targetId: i,
                            justifyContent: l = at.FlexStart,
                            alignContent: c = at.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const _ = (0, a.useRef)(null),
                                m = (0, a.useRef)({ height: 0, width: 0 }),
                                E = (0, a.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = E[0],
                                h = E[1],
                                g = (0, a.useMemo)(() => wt(e, n), [n, e]),
                                p = (0, a.useMemo)(() => {
                                    if (
                                        r &&
                                        A.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: { text: e, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: i,
                                        };
                                }, [n, r, i, e, A.isTruncated]),
                                F = (0, a.useCallback)(
                                    (e) => {
                                        (m.current.width = e.contentRect.width),
                                            (m.current.height = e.contentRect.height);
                                        const t = Tt(_, g, m.current, d),
                                            n = t[0],
                                            r = t[1];
                                        h({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), u && u(r);
                                    },
                                    [u, d, g],
                                ),
                                D = (0, a.useMemo)(() => ({ justifyContent: l, alignContent: c }), [c, l]);
                            return (
                                ((e, t, u = !0) => {
                                    const n = (0, a.useCallback)(
                                        (e) => {
                                            const u = e[0];
                                            t && t(u);
                                        },
                                        [t],
                                    );
                                    (0, a.useEffect)(() => {
                                        if (!e.current || !u) return;
                                        const t = new Ze.Z((e) => n(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [n, u, e]);
                                })(_, F, s),
                                o().createElement(
                                    'div',
                                    { className: C()(Qe, t, Je, s && et), style: D },
                                    o().createElement('div', { className: nt, ref: _ }, g),
                                    o().createElement(
                                        Xe,
                                        { tooltipArgs: p },
                                        o().createElement(
                                            'div',
                                            { className: C()(tt, !A.isTruncateFinished && s && ut), style: D },
                                            A.isTruncateFinished && s ? A.elementList : g,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Mt = {
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
                    Rt = [
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
                function Nt() {
                    return (
                        (Nt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Nt.apply(this, arguments)
                    );
                }
                class Ot extends o().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Ae(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Ae(this.props.soundClick);
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
                            u = e.onClick,
                            n = e.goto,
                            r = e.side,
                            a = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(e, Rt)),
                            m = C()(Mt.base, Mt[`base__${a}`], Mt[`base__${r}`], null == s ? void 0 : s.base),
                            E = C()(Mt.icon, Mt[`icon__${a}`], Mt[`icon__${r}`], null == s ? void 0 : s.icon),
                            A = C()(Mt.glow, null == s ? void 0 : s.glow),
                            h = C()(Mt.caption, Mt[`caption__${a}`], null == s ? void 0 : s.caption),
                            g = C()(Mt.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            Nt(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== a && o().createElement('div', { className: Mt.shine }),
                            o().createElement('div', { className: E }, o().createElement('div', { className: A })),
                            o().createElement('div', { className: h }, t),
                            n && o().createElement('div', { className: g }, n),
                        );
                    }
                }
                let It;
                (Ot.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.responsiveHeader = 'responsiveHeader'),
                            (e.responsiveClosePosition = 'responsiveClosePosition'),
                            (e.disableResponsiveContentPosition = 'disableResponsiveContentPosition');
                    })(It || (It = {}));
                const Ht = {
                        base: 'DefaultDialogTemplate_base_d2',
                        topRight: 'DefaultDialogTemplate_topRight_eb',
                        center: 'DefaultDialogTemplate_center_b4',
                        center__shown: 'DefaultDialogTemplate_center__shown_e1',
                        windowIn: 'DefaultDialogTemplate_windowIn_3b',
                        center__withIcon: 'DefaultDialogTemplate_center__withIcon_f9',
                        base__extraSmallHeight: 'DefaultDialogTemplate_base__extraSmallHeight_f5',
                        center__responsive: 'DefaultDialogTemplate_center__responsive_21',
                        base__smallHeight: 'DefaultDialogTemplate_base__smallHeight_52',
                        icon: 'DefaultDialogTemplate_icon_36',
                        icon__responsive: 'DefaultDialogTemplate_icon__responsive_e0',
                        title: 'DefaultDialogTemplate_title_c6',
                        title__responsive: 'DefaultDialogTemplate_title__responsive_6e',
                        content: 'DefaultDialogTemplate_content_22',
                        footer: 'DefaultDialogTemplate_footer_4e',
                        buttons: 'DefaultDialogTemplate_buttons_f7',
                        divider: 'DefaultDialogTemplate_divider_d5',
                        divider__noContent: 'DefaultDialogTemplate_divider__noContent_3f',
                        divider__noFooter: 'DefaultDialogTemplate_divider__noFooter_10',
                        closeBtn: 'DefaultDialogTemplate_closeBtn_5e',
                        closeBtn__responsive: 'DefaultDialogTemplate_closeBtn__responsive_49',
                    },
                    Pt = (0, a.memo)(
                        ({
                            isShown: e = !0,
                            classMix: t,
                            onClose: u,
                            icon: n,
                            topRight: r,
                            title: s,
                            content: i,
                            buttons: l,
                            footer: d,
                            displayFlags: _,
                            classNames: m,
                        }) => {
                            const E = ((e, t) => Object.keys(t).reduce((t, u) => ((t[u] = e.includes(u)), t), {}))(
                                    _,
                                    It,
                                ),
                                A = E.responsiveHeader,
                                g = E.responsiveClosePosition,
                                p = E.disableResponsiveContentPosition,
                                F = (function (e, t, u) {
                                    const n = (0, a.useContext)(h);
                                    let r = Object.entries(n).filter(([e, t]) => !0 === t && e in c);
                                    return (
                                        u && (r = r.filter((e) => u.includes(e[0]))),
                                        e.reduce((e, u) => {
                                            const n = r.map((e) =>
                                                C()(
                                                    t[((e, t) => e + '__' + t)(u, e[0])],
                                                    t[
                                                        ((e, t) => {
                                                            return e + ((u = t)[0].toUpperCase() + u.slice(1));
                                                            var u;
                                                        })(u, e[0])
                                                    ],
                                                ),
                                            );
                                            return (e[u] = C()(t[u], ...n)), e;
                                        }, {})
                                    );
                                })(['base'], Ht),
                                D = (0, a.useCallback)(() => {
                                    u && u();
                                }, [u]),
                                f = C()(F.base, t),
                                b = C()(
                                    Ht.center,
                                    n && Ht.center__withIcon,
                                    e && Ht.center__shown,
                                    !p && Ht.center__responsive,
                                    null == m ? void 0 : m.center,
                                ),
                                v = C()(Ht.icon, A && Ht.icon__responsive, null == m ? void 0 : m.icon),
                                B = C()(Ht.title, A && Ht.title__responsive),
                                w = C()(Ht.closeBtn, g && Ht.closeBtn__responsive),
                                y = C()(
                                    Ht.divider,
                                    !i && Ht.divider__noContent,
                                    !d && Ht.divider__noFooter,
                                    null == m ? void 0 : m.divider,
                                );
                            return o().createElement(
                                'div',
                                { className: f },
                                o().createElement(
                                    'div',
                                    { className: Ht.topRight },
                                    r,
                                    o().createElement(
                                        'div',
                                        { className: w },
                                        o().createElement(Ot, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: D,
                                        }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: b },
                                    n && o().createElement('div', { className: v }, n),
                                    s && o().createElement('div', { className: B }, s),
                                    i && o().createElement('div', { className: Ht.content }, i),
                                    o().createElement('div', { className: y }),
                                    d && o().createElement('div', { className: Ht.footer }, d),
                                    l && o().createElement('div', { className: Ht.buttons }, l),
                                ),
                            );
                        },
                    );
                function Wt() {
                    return !1;
                }
                console.log;
                var Vt = u(9174);
                function zt(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return $t(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return $t(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function $t(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const jt = (e) => (0 === e ? window : window.subViews.get(e));
                function Ut(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Gt(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                const qt = '-1',
                    Kt = ['commander'],
                    Yt = { id: qt, label: R.strings.dialogs.recruitWindow.menuEmptyRow() },
                    Xt = ((e, t) => {
                        const u = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: s, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    d = (u, n, r) => {
                                        var a;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = jt,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = r.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const r = u(t),
                                                        a = n.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (u, a) => {
                                                        const s = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = i.O.view.addModelObserver(s, t, !0);
                                                        return r.set(l, u), e && u(o(a)), l;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const u = o(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = zt(r.keys()); !(e = u()).done; ) a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            s =
                                                'real' === u
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === u ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            _ = e({
                                                mode: u,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = Vt.LO.box(n, { equals: Wt });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, Vt.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = Vt.LO.box(n, { equals: Wt });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, Vt.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = l(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = Vt.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, Vt.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                a = Object.entries(r),
                                                                o = a.reduce(
                                                                    (e, [t, u]) => ((e[u] = Vt.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, Vt.aD)((e) => {
                                                                            a.forEach(([t, u]) => {
                                                                                o[u].set(e[t]);
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
                                            m = { mode: u, model: _, externalModel: s, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === u && r ? r.controls(m) : t(m),
                                            externalModel: s,
                                            mode: u,
                                        };
                                    },
                                    _ = (0, a.useRef)(!1),
                                    m = (0, a.useState)(n),
                                    E = m[0],
                                    A = m[1],
                                    h = (0, a.useState)(() => d(n, r, l)),
                                    g = h[0],
                                    p = h[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        _.current ? p(d(E, r, l)) : (_.current = !0);
                                    }, [l, E, r]),
                                    (0, a.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            g.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [g],
                                    ),
                                    o().createElement(u.Provider, { value: g }, s)
                                );
                            },
                            () => (0, a.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = Object.assign({}, e.primitives(['text', 'hasVoiceover']), {
                                iconModel: e.object('iconModel.icon'),
                                bgIconModel: e.object('iconModel.bgIcon'),
                                recruitContent: e.object('recruitContent'),
                                nations: e.array('recruitContent.nations'),
                                vehTypes: e.array('recruitContent.vehTypes'),
                                vehicles: e.array('recruitContent.vehicles'),
                                specializations: e.array('recruitContent.specializations'),
                            });
                            return Object.assign({}, t, {
                                computes: {
                                    prepareItems: (e, t) => {
                                        const u = [];
                                        u.push(Yt);
                                        const n = Gt(e, (e) => ({ id: e.id, label: e.label, isDisabled: t }));
                                        return u.push(...n), u;
                                    },
                                    vehicleItems: (e = !1) => {
                                        const u = [];
                                        u.push(Yt);
                                        const n = Gt(t.vehicles.get(), (t) => ({
                                            id: `${t.id}`,
                                            label: t.name,
                                            isDisabled: e,
                                            meta: { type: t.type, isElite: t.isElite, isIGR: t.isIGR },
                                        }));
                                        return u.push(...n), u;
                                    },
                                    isSelectedVehiclePremium: () => {
                                        const e = (function (e, t) {
                                            for (let u = 0; u < e.length; u++) {
                                                const n = Ut(e[u]);
                                                if (t(n, u, e)) return n;
                                            }
                                        })(
                                            t.vehicles.get(),
                                            (e) => e.id === Number(t.recruitContent.get().selectedVehicle),
                                        );
                                        return !!e && e.isElite;
                                    },
                                    hasVisibledVoiceoverText: () =>
                                        t.hasVoiceover.get() &&
                                        !Kt.includes(t.recruitContent.get().selectedSpecialization),
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onNationChange: e.createCallback((e) => e || {}, 'recruitContent.onNationChange'),
                            onVehTypeChange: e.createCallback((e) => e || {}, 'recruitContent.onVehTypeChange'),
                            onVehicleChange: e.createCallback((e) => e || {}, 'recruitContent.onVehicleChange'),
                            onSpecializationChange: e.createCallback(
                                (e) => e || {},
                                'recruitContent.onSpecializationChange',
                            ),
                        }),
                    ),
                    Zt = Xt[0],
                    Qt = Xt[1],
                    Jt = 'Icon_base_e1',
                    eu = 'Icon_block_1d',
                    tu = 'Icon_block__backgroundIcon_79',
                    uu = 'Icon_icon_70',
                    nu = 'Icon_icon__standartIcon_54',
                    ru = 'Icon_voiceoverIcon_ef',
                    au = 'Icon_separator_27',
                    ou = 'Icon_separator__small_51',
                    su = (e) => (e ? { backgroundImage: `url(${e})` } : void 0),
                    iu = (0, Ue.Pi)(() => {
                        const e = Qt().model,
                            t = e.iconModel.get().path,
                            u = e.bgIconModel.get().path;
                        return o().createElement(
                            'div',
                            { className: Jt },
                            o().createElement(
                                'div',
                                { className: C()(eu, u && tu), style: su(u) },
                                o().createElement('div', { className: C()(uu, u && nu), style: su(t) }),
                            ),
                            o().createElement('div', { className: C()(au, u && ou) }),
                            e.hasVoiceover.get() && o().createElement('div', { className: ru }),
                        );
                    });
                let lu, cu;
                !(function (e) {
                    (e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected');
                })(lu || (lu = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium');
                    })(cu || (cu = {}));
                const du = {
                    base: 'DropDownControl_base_46',
                    base__small: 'DropDownControl_base__small_22',
                    base__medium: 'DropDownControl_base__medium_09',
                    base__over: 'DropDownControl_base__over_e7',
                    base__down: 'DropDownControl_base__down_1c',
                    base__open: 'DropDownControl_base__open_e3',
                    base__focused: 'DropDownControl_base__focused_63',
                    base__selected: 'DropDownControl_base__selected_46',
                    base__disabled: 'DropDownControl_base__disabled_37',
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
                let _u;
                !(function (e) {
                    (e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down');
                })(_u || (_u = {}));
                const mu = (0, a.memo)(
                        ({
                            parentId: e,
                            variant: t = lu.Basic,
                            size: u = cu.Medium,
                            isOpen: n,
                            placeholder: r = R.strings.common.dropdown.placeholder.select(),
                            label: s = '',
                            classMix: i,
                            onClick: l,
                            soundHover: c,
                            soundClick: d,
                            customControl: _,
                        }) => {
                            const m = (0, a.useState)(_u.Out),
                                E = m[0],
                                A = m[1],
                                h = (0, a.useState)(!1),
                                g = h[0],
                                p = h[1],
                                F = t === lu.Disabled,
                                D = F || t === lu.Basic,
                                f = (0, a.useCallback)(() => {
                                    F || (A(_u.Over), c && Ae(c));
                                }, [F, c]),
                                b = (0, a.useCallback)(() => {
                                    F || (A(_u.Down), d && Ae(d));
                                }, [F, d]),
                                v = (0, a.useCallback)(() => {
                                    !F && A(_u.Over), !D && p(!0);
                                }, [F, D]),
                                B = (0, a.useCallback)((e) => l && l(e), [l]),
                                w = (0, a.useCallback)(() => A(_u.Out), []);
                            (0, a.useEffect)(() => {
                                D || p(!1);
                            }, [t, D]),
                                (0, a.useEffect)(() => {
                                    F && w();
                                }, [F, w]);
                            const y = C()(
                                du.base,
                                n && du.base__open,
                                du[`base__${E}`],
                                (D || !g) && du[`base__${t}`],
                                i,
                            );
                            return o().createElement(
                                'div',
                                {
                                    id: e ? `${e}_control` : void 0,
                                    className: y,
                                    onMouseEnter: f,
                                    onMouseUp: v,
                                    onMouseDown: b,
                                    onMouseLeave: w,
                                    onClick: B,
                                },
                                !g && t === lu.Alert && o().createElement('div', { className: du.alert }),
                                o().createElement(
                                    'div',
                                    { className: C()(du.label, du[`label__${u}`], !s && du.label__placeholder) },
                                    _ || o().createElement(Te, { content: s || r }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: C()(du.button, du[`button__${u}`]) },
                                    o().createElement('div', { className: C()(du.arrow, du[`arrow__${u}`]) }),
                                    E === _u.Over && o().createElement('div', { className: du.gradient }),
                                    F && o().createElement('div', { className: du.disabled }),
                                ),
                            );
                        },
                    ),
                    Eu = (e, t, u) => (u < e ? e : u > t ? t : u),
                    Au = [];
                function hu(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), Au)
                    );
                }
                function gu(e, t, u = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, a.useEffect)(() => r, [r]);
                    const o = (null != u ? u : []).concat([t]);
                    return [
                        (0, a.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, o),
                        r,
                    ];
                }
                function pu(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Fu(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Fu(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Fu(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                function Du(e, t, u) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (e, t, u, n) {
                                let r,
                                    a = !1,
                                    o = 0;
                                function s() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function d() {
                                        (o = Date.now()), u.apply(l, i);
                                    }
                                    a ||
                                        (n && !r && d(),
                                        s(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : d,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                    (i.cancel = function () {
                                        s(), (a = !0);
                                    }),
                                    i
                                );
                            })(u, e),
                        t,
                    );
                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                }
                var fu = u(7030);
                let Cu;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Cu || (Cu = {}));
                const bu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    vu = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const s = (e, u) => {
                            const n = t(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : Eu(r, a, u);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? bu : c,
                                _ = (0, a.useRef)(null),
                                m = (0, a.useRef)(null),
                                E = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        r = (e, ...u) => {
                                            for (var n, r = pu(t(e).values()); !(n = r()).done; ) (0, n.value)(...u);
                                        };
                                    return (0, a.useMemo)(() => ({ on: u, off: n, trigger: r }), []);
                                })(),
                                A = Du(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                h = (0, fu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (u(t, e), E.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                g = h[0],
                                p = h[1],
                                F = (0, a.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = g.scrollPosition.get(),
                                            a = (null != (n = g.scrollPosition.goal) ? n : 0) - r;
                                        return s(e, t * u + a + r);
                                    },
                                    [g.scrollPosition],
                                ),
                                D = (0, a.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = _.current;
                                        n &&
                                            p.start({
                                                scrollPosition: s(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: d.animationConfig,
                                                from: { scrollPosition: s(n, g.scrollPosition.get()) },
                                            });
                                    },
                                    [p, d.animationConfig, g.scrollPosition],
                                ),
                                f = (0, a.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            u = m.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, d.step),
                                            a = F(t, e, n);
                                        D(a);
                                    },
                                    [D, F, d.step],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && f(n(e)),
                                            _.current && E.trigger('mouseWheel', e, g.scrollPosition, t(_.current));
                                    },
                                    [g.scrollPosition, f, E],
                                ),
                                b = ((e, t = []) => {
                                    const u = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        xe(() => {
                                            const e = _.current;
                                            e &&
                                                (D(s(e, g.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [D, g.scrollPosition.goal],
                                ),
                                v = hu(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = s(e, g.scrollPosition.goal);
                                    t !== g.scrollPosition.goal && D(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', b),
                                    () => {
                                        window.removeEventListener('resize', b);
                                    }
                                ),
                                [b],
                            );
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: C,
                                    applyScroll: D,
                                    applyStepTo: f,
                                    contentRef: _,
                                    wrapperRef: m,
                                    scrollPosition: p,
                                    animationScroll: g,
                                    recalculateContent: v,
                                    events: { on: E.on, off: E.off },
                                }),
                                [g.scrollPosition, D, f, E.off, E.on, v, C, p, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Bu = vu({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Cu.Next : Cu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    wu = 'HorizontalBar_base_49',
                    yu = 'HorizontalBar_base__nonActive_82',
                    ku = 'HorizontalBar_leftButton_5f',
                    xu = 'HorizontalBar_rightButton_03',
                    Su = 'HorizontalBar_track_0d',
                    Tu = 'HorizontalBar_thumb_fd',
                    Lu = 'HorizontalBar_rail_32',
                    Mu = 'disable',
                    Ru = { pending: !1, offset: 0 },
                    Nu = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ou = () => {},
                    Iu = (e, t) => Math.max(20, e.offsetWidth * t),
                    Hu = (0, a.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Nu, onDrag: n = Ou }) => {
                        const r = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, a.useState)(Ru),
                            E = m[0],
                            A = m[1],
                            h = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            g = () => {
                                const t = c.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = Eu(0, 1, a / (r - n)),
                                    _ = (t.offsetWidth - Iu(t, o)) * i;
                                (u.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Mu), void l.current.classList.remove(Mu);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(Mu), void l.current.classList.add(Mu);
                                            var t, u;
                                            s.current.classList.remove(Mu), l.current.classList.remove(Mu);
                                        }
                                    })(_);
                            },
                            p = hu(() => {
                                (() => {
                                    const t = d.current,
                                        u = c.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && t && n && u)) return;
                                    const o = Math.min(1, n / a);
                                    (t.style.width = `${Iu(u, o)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(yu) : r.current.classList.remove(yu));
                                })(),
                                    g();
                            });
                        (0, a.useEffect)(() => xe(p)),
                            (0, a.useEffect)(
                                () =>
                                    xe(() => {
                                        const t = () => {
                                            g();
                                        };
                                        let u = Ou;
                                        const n = () => {
                                            u(), (u = xe(p));
                                        };
                                        return (
                                            e.events.on('recalculateContent', p),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', p),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!E.pending) return;
                                const t = i.O.client.events.mouse.move(([t, u]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const s = c.current,
                                            i = d.current;
                                        if (!s || !i) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - E.offset - s.getBoundingClientRect().x,
                                            _ = (l / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: _ });
                                    }),
                                    u = i.O.client.events.mouse.up(() => {
                                        t(), h(Ru);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, n, h]);
                        const F = gu((t) => e.applyStepTo(t), _, [e]),
                            D = F[0],
                            f = F[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const b = (e) => {
                            e.target.classList.contains(Mu) || Ae('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: C()(wu, t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: C()(ku, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Mu) || 0 !== e.button || (Ae('play'), D(Cu.Next));
                                },
                                onMouseUp: f,
                                ref: s,
                                onMouseEnter: b,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: C()(Su, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if ((Ae('play'), t.target === n))
                                                h({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = d.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? Cu.Prev : Cu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                o().createElement('div', { ref: d, className: C()(Tu, t.thumb) }),
                                o().createElement('div', { className: C()(Lu, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: C()(xu, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Mu) || 0 !== e.button || (Ae('play'), D(Cu.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    Pu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Wu = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: C()(Pu.base, e.base) });
                            }, [n]),
                            _ = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: C()(Pu.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: C()(Pu.defaultScrollArea, r) },
                                o().createElement(Vu, { className: i, api: _, classNames: s }, e),
                            ),
                            o().createElement(Hu, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Vu = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, a.useEffect)(() => xe(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: C()(Pu.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: C()(Pu.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: C()(Pu.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (Vu.Bar = Hu), (Vu.Default = Wu);
                const zu = vu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Cu.Next : Cu.Prev),
                    }),
                    $u = 'VerticalBar_base_f3',
                    ju = 'VerticalBar_base__nonActive_42',
                    Uu = 'VerticalBar_topButton_d7',
                    Gu = 'VerticalBar_bottomButton_06',
                    qu = 'VerticalBar_track_df',
                    Ku = 'VerticalBar_thumb_32',
                    Yu = 'VerticalBar_rail_43',
                    Xu = 'disable',
                    Zu = () => {},
                    Qu = { pending: !1, offset: 0 },
                    Ju = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    en = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    tn = (e, t) => Math.max(20, e.offsetHeight * t),
                    un = (0, a.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Ju, onDrag: n = Zu }) => {
                        const r = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, a.useState)(Qu),
                            E = m[0],
                            A = m[1],
                            h = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            g = hu(() => {
                                const t = d.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && t && u)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (t.style.height = `${tn(u, o)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(ju) : r.current.classList.remove(ju)),
                                    o
                                );
                            }),
                            p = hu(() => {
                                const t = c.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = Eu(0, 1, a / (r - n)),
                                    _ = (t.offsetHeight - tn(t, o)) * i;
                                (u.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(Xu), void l.current.classList.remove(Xu);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(Xu), void l.current.classList.add(Xu);
                                            var t, u;
                                            s.current.classList.remove(Xu), l.current.classList.remove(Xu);
                                        }
                                    })(_);
                            }),
                            F = hu(() => {
                                en(e, () => {
                                    g(), p();
                                });
                            });
                        (0, a.useEffect)(() => xe(F)),
                            (0, a.useEffect)(() => {
                                const t = () => {
                                    en(e, () => {
                                        p();
                                    });
                                };
                                let u = Zu;
                                const n = () => {
                                    u(), (u = xe(F));
                                };
                                return (
                                    e.events.on('recalculateContent', F),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', F),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!E.pending) return;
                                const t = i.O.client.events.mouse.up(() => {
                                        h(Qu);
                                    }),
                                    u = i.O.client.events.mouse.move(([t]) => {
                                        en(e, (u) => {
                                            const r = c.current,
                                                a = d.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const s = t.screenY - E.offset - r.getBoundingClientRect().y,
                                                i = (s / r.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, n, h]);
                        const D = gu((t) => e.applyStepTo(t), _, [e]),
                            f = D[0],
                            b = D[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Xu) || Ae('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: C()($u, t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: C()(Uu, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Xu) || 0 !== e.button || (Ae('play'), f(Cu.Next));
                                },
                                ref: s,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: C()(qu, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if ((Ae('play'), t.target === n))
                                                h({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        en(e, (n) => {
                                                            if (!n) return;
                                                            const r = u(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(a);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? Cu.Prev : Cu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: d, className: C()(Ku, t.thumb) }),
                                o().createElement('div', { className: C()(Yu, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: C()(Gu, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Xu) || 0 !== e.button || (Ae('play'), f(Cu.Prev));
                                },
                                onMouseUp: b,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    nn = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    rn = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: C()(nn.base, e.base) });
                            }, [n]),
                            _ = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: C()(nn.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: C()(nn.area, r) },
                                o().createElement(an, { className: s, classNames: i, api: _ }, e),
                            ),
                            o().createElement(un, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    an = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, a.useEffect)(() => xe(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: C()(nn.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: C()(nn.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                an.Default = rn;
                const on = { Vertical: r, Horizontal: n },
                    sn = 'VerticalAutoScroll_base_db',
                    ln = { base: 'VerticalAutoScroll_barBase_93' },
                    cn = { content: 'VerticalAutoScroll_content_47' },
                    dn = ({
                        children: e,
                        isEnabled: t = !0,
                        selectedItemId: u,
                        scrollAreaKey: n = 'scrollArea',
                        withCompleteTrigger: r = !1,
                        containerClasses: s,
                    }) => {
                        const i = (0, a.useState)(!1),
                            l = i[0],
                            c = i[1],
                            d = (0, a.useState)(!1),
                            _ = d[0],
                            m = d[1],
                            E = (0, a.useRef)(null),
                            A = (0, a.useRef)(null),
                            h = zu(),
                            g = hu(() => {
                                c(!0);
                            }),
                            p = (0, a.useCallback)(() => {
                                c(!1);
                            }, []),
                            F = (0, a.useCallback)(() => {
                                const e = A.current,
                                    t = E.current;
                                if (e && h && t) {
                                    const u = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    r && h.events.on('rest', g), h.applyScroll(u);
                                }
                            }, [g, h, r]);
                        (0, a.useEffect)(
                            () => () => {
                                h.events.off('rest', g);
                            },
                            [g, h.events, r],
                        ),
                            (0, a.useEffect)(() => {
                                if (t && null !== u) return xe(F);
                            }, [n, F, u, t]),
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    const e = h.getContainerSize(),
                                        t = h.getWrapperSize();
                                    e && t && m(e > t);
                                };
                                return (
                                    h.events.on('recalculateContent', e),
                                    () => {
                                        h.events.off('recalculateContent', e);
                                    }
                                );
                            }, [_, h]);
                        const D = {
                                scrollContainerRef: E,
                                selectedItemRef: A,
                                selectedItemId: u,
                                isScrollComplete: l,
                                scrollbarActive: _,
                                onScrollAnimationComplete: p,
                            },
                            f = (0, a.cloneElement)(e, D);
                        return o().createElement(
                            'div',
                            { className: C()(sn, s), ref: E },
                            o().createElement(on.Vertical.Area, { api: h, key: n, classNames: cn }, f),
                            o().createElement(on.Vertical.Bar, { api: h, classNames: ln }),
                        );
                    },
                    _n = {
                        base: 'DropDownItem_base_5e',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    mn = ['size', 'classMix', 'onClick', 'itemRenderer'];
                const En = (0, a.memo)((e) => {
                        let t = e.size,
                            u = e.classMix,
                            n = e.onClick,
                            r = e.itemRenderer,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, mn);
                        const i = s.id,
                            l = s.isSelected,
                            c = s.isDisabled,
                            d = s.label,
                            _ = s.soundHover,
                            m = s.soundClick,
                            E = (0, a.useCallback)(
                                (e) => {
                                    c || (n && n(e, i));
                                },
                                [i, c, n],
                            ),
                            A = (0, a.useCallback)(() => {
                                c || (_ && Ae(_));
                            }, [c, _]),
                            h = (0, a.useCallback)(() => {
                                c || (m && Ae(m));
                            }, [c, m]),
                            g = C()(_n.base, t && _n[`base__${t}`], l && _n.base__selected, c && _n.base__disabled, u);
                        return o().createElement(
                            'div',
                            { className: g, onMouseEnter: A, onMouseDown: h, onClick: E },
                            r ? r(s) : d,
                        );
                    }),
                    An = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function hn() {
                    return (
                        (hn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        hn.apply(this, arguments)
                    );
                }
                const gn = ({
                        size: e,
                        items: t,
                        selectedIds: u,
                        selectedItemId: n,
                        selectedItemRef: r,
                        onClick: a,
                        parentId: s,
                        soundHover: i,
                        soundClick: l,
                        itemClassMix: c,
                        itemRenderer: d,
                        scrollbarActive: _,
                    }) =>
                        o().createElement(
                            'div',
                            { className: C()(An.base, _ && An.base__withScroll) },
                            t.map((t) => {
                                const _ = `${s}_${t.id}`;
                                return o().createElement(
                                    'div',
                                    { id: s ? _ : void 0, key: _, ref: t.id === n ? r : null },
                                    o().createElement(
                                        En,
                                        hn({ size: e, soundHover: i, soundClick: l, classMix: c, itemRenderer: d }, t, {
                                            onClick: a,
                                            isSelected: u.includes(t.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    pn = {
                        base: 'DropDownList_base_62',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                    },
                    Fn = ({
                        parentId: e,
                        size: t = cu.Medium,
                        items: u,
                        selectedIds: n,
                        isOpen: r,
                        autoScroll: s,
                        classMix: i,
                        itemClassMix: l,
                        itemRenderer: c,
                        onClick: d,
                        soundHover: _,
                        soundClick: m,
                    }) => {
                        const E = (0, a.useState)(null),
                            A = E[0],
                            h = E[1],
                            g = ee(r);
                        (0, a.useEffect)(() => {
                            if (r && !g) {
                                const e = ((e, t) => {
                                    if (!t.length) return null;
                                    const u = e.find((e) => t.includes(e.id));
                                    return u ? u.id : null;
                                })(u, n);
                                null !== e && h(e);
                            }
                            r || h(null);
                        }, [r, u, n, g]);
                        const p = e ? `${e}_list` : void 0;
                        return o().createElement(
                            'div',
                            { id: p, className: C()(pn.base, pn[`base__${t}`], i) },
                            o().createElement(
                                dn,
                                { selectedItemId: A, isEnabled: s },
                                o().createElement(gn, {
                                    parentId: e,
                                    items: u,
                                    size: t,
                                    selectedIds: n,
                                    onClick: d,
                                    soundHover: _,
                                    soundClick: m,
                                    itemClassMix: l,
                                    itemRenderer: c,
                                }),
                            ),
                        );
                    },
                    Dn = {
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
                    fn = (0, a.memo)(
                        ({
                            componentId: e,
                            containerRef: t,
                            items: u,
                            selected: n = [],
                            variant: r = lu.Basic,
                            size: s = cu.Medium,
                            multiple: i = !1,
                            autoScroll: l = !0,
                            placeholder: c,
                            classMix: d,
                            controlRenderer: _,
                            itemRenderer: m,
                            open: E,
                            tooltipArgs: A,
                            onChanges: h,
                            onOpen: g,
                            onClose: p,
                            onClick: F,
                            onClickOutside: D,
                            onMouseEnter: f,
                            onMouseDown: b,
                            onMouseUp: v,
                            onMouseLeave: B,
                            soundHover: w = 'highlight',
                            soundClick: y = 'play',
                            soundItemHover: k,
                            soundItemClick: x,
                        }) => {
                            const S = (0, a.useRef)(null),
                                T = (0, a.useRef)(null),
                                L = (0, a.useRef)({ open: !1, listAbove: !1 }),
                                M = (0, a.useState)(!1),
                                R = M[0],
                                N = M[1],
                                O = (0, a.useState)(!1),
                                I = O[0],
                                H = O[1],
                                P = ((e, t) => {
                                    const u = Array.isArray(e) ? e : [e];
                                    return !t && u.length > 1 ? u.slice(0, 1) : u;
                                })(n, i),
                                W = r !== lu.Disabled,
                                V = void 0 === E,
                                z = Boolean(V ? R : E),
                                j = (0, a.useCallback)(() => {
                                    L.current.open && ((L.current.open = !1), N(!1), p && p());
                                }, [p]);
                            ne(z ? te.n.ESCAPE : te.n.NONE, j, z);
                            const U = (0, a.useCallback)(() => {
                                D && D(), V && (N(!1), (L.current.open = !1), p && p());
                            }, [D, p, V]);
                            (0, a.useEffect)(() => {
                                const e = S.current;
                                if (e && z)
                                    return (
                                        $.c1.register(e, U),
                                        () => {
                                            $.c1.unregister(e, U);
                                        }
                                    );
                            }, [z, U]),
                                (0, a.useEffect)(() => {
                                    void 0 !== E && (L.current.open = E);
                                }, [E]);
                            const G = (0, a.useCallback)(() => {
                                if (!S.current || !T.current) return;
                                const e = t && t.current,
                                    u = e ? e.getBoundingClientRect().bottom : window.innerHeight,
                                    n =
                                        S.current.getBoundingClientRect().bottom +
                                            T.current.getBoundingClientRect().height >
                                        u;
                                n !== L.current.listAbove && ((L.current.listAbove = n), H(n));
                            }, [t]);
                            (0, a.useEffect)(() => xe(() => xe(G)), [G, s, u.length]);
                            const q = (0, a.useCallback)(
                                    (e) => {
                                        const t = P.findIndex((t) => t === e) > -1;
                                        let u = [];
                                        (u = i ? (t ? P.filter((t) => t !== e) : [e, ...P]) : t ? [] : [e]), h && h(u);
                                    },
                                    [i, h, P],
                                ),
                                K = (0, a.useCallback)(() => {
                                    V &&
                                        ((L.current.open = !L.current.open),
                                        N(L.current.open),
                                        L.current.open ? g && g() : p && p());
                                }, [V, g, p]),
                                Y = (0, a.useCallback)(
                                    (e) => {
                                        W && K(), F && F(e);
                                    },
                                    [W, F, K],
                                ),
                                X = (0, a.useCallback)(
                                    (e, t) => {
                                        F && F(e, t), q(t), !i && K();
                                    },
                                    [F, i, K, q],
                                ),
                                Z = (0, a.useCallback)((e) => f && f(e), [f]),
                                Q = (0, a.useCallback)((e) => v && v(e), [v]),
                                J = (0, a.useCallback)((e) => b && b(e), [b]),
                                ee = (0, a.useCallback)((e) => B && B(e), [B]),
                                ue = (0, a.useMemo)(
                                    () =>
                                        u
                                            .filter((e) => P.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [u, P],
                                ),
                                re = (0, a.useMemo)(() => u.filter((e) => P.includes(e.id)), [u, P]),
                                ae = _ ? _(re) : void 0;
                            return o().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: S,
                                    className: C()(Dn.base, Dn[`base__${s}`], d && d.base),
                                    onMouseEnter: Z,
                                    onMouseUp: Q,
                                    onMouseDown: J,
                                    onMouseLeave: ee,
                                },
                                o().createElement(
                                    'div',
                                    { className: C()(Dn.control, z && Dn.control__down) },
                                    o().createElement(
                                        Xe,
                                        { tooltipArgs: A },
                                        o().createElement(mu, {
                                            parentId: e,
                                            size: s,
                                            variant: r,
                                            isOpen: z,
                                            placeholder: c,
                                            label: ue,
                                            classMix: d && d.control,
                                            onClick: Y,
                                            soundHover: w,
                                            soundClick: y,
                                            customControl: ae,
                                        }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    {
                                        ref: T,
                                        className: C()(
                                            Dn.list,
                                            z ? Dn.list__down : Dn.list__up,
                                            I ? Dn.list__above : Dn.list__under,
                                        ),
                                    },
                                    o().createElement(Fn, {
                                        parentId: e,
                                        size: s,
                                        items: u,
                                        selectedIds: P,
                                        isOpen: z,
                                        autoScroll: l,
                                        classMix: d && d.list,
                                        itemClassMix: d && d.item,
                                        itemRenderer: m,
                                        onClick: X,
                                        soundHover: k || w,
                                        soundClick: x || y,
                                    }),
                                ),
                            );
                        },
                    );
                let Cn;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Disabled = 'disabled'), (e.Locked = 'locked');
                })(Cn || (Cn = {}));
                const bn = 'WarningText_base_10',
                    vn = 'WarningText_alertIcon_8f',
                    Bn = (0, a.memo)(({ className: e, children: t }) =>
                        o().createElement(
                            'div',
                            { className: C()(bn, e) },
                            o().createElement('div', { className: vn }),
                            t,
                        ),
                    ),
                    wn = 'DropDownHeader_base_2c',
                    yn = 'DropDownHeader_lock_59',
                    kn = (0, a.memo)(({ label: e, state: t }) =>
                        o().createElement(
                            'div',
                            { className: wn },
                            e,
                            t === Cn.Locked && o().createElement('div', { className: yn }),
                        ),
                    ),
                    xn = 'NationRender_text_e6',
                    Sn = 'NationRender_base_14',
                    Tn = 'NationRender_base__header_e7',
                    Ln = 'NationRender_base__disabled_07',
                    Mn = 'NationRender_icon_90',
                    Rn = (e) => {
                        if (0 === e.length) return;
                        const t = e[0];
                        return Nn(t, !0);
                    },
                    Nn = ({ id: e, label: t, isDisabled: u }, n = !1) => {
                        const r = (0, a.useMemo)(
                            () => ({ backgroundImage: `url(${R.images.gui.maps.icons.filters.nations.$dyn(e)})` }),
                            [e],
                        );
                        if (e === qt) return R.strings.dialogs.recruitWindow.menuEmptyRow();
                        const s = C()(Sn, n && Tn, u && Ln);
                        return o().createElement(
                            'div',
                            { className: s },
                            o().createElement('div', { className: Mn, style: r }),
                            o().createElement('div', { className: xn }, n ? o().createElement(Te, { content: t }) : t),
                        );
                    },
                    On = 'SpecializationRender_text_c3',
                    In = 'SpecializationRender_base_16',
                    Hn = 'SpecializationRender_base__header_6f',
                    Pn = 'SpecializationRender_base__disabled_c7',
                    Wn = 'SpecializationRender_icon_49',
                    Vn = (e) => {
                        if (0 === e.length) return;
                        const t = e[0];
                        return zn(t, !0);
                    },
                    zn = ({ id: e, label: t, isDisabled: u }, n = !1) => {
                        const r = (0, a.useMemo)(
                            () => ({
                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_24x24.$dyn(e)})`,
                            }),
                            [e],
                        );
                        if (e === qt) return R.strings.dialogs.recruitWindow.menuEmptyRow();
                        const s = C()(In, n && Hn, u && Pn);
                        return o().createElement(
                            'div',
                            { className: s },
                            o().createElement('div', { className: Wn, style: r }),
                            o().createElement('div', { className: On }, t),
                        );
                    },
                    $n = 'VehicleRender_base_49',
                    jn = 'VehicleRender_base__header_cb',
                    Un = 'VehicleRender_base__disabled_25',
                    Gn = 'VehicleRender_icon_5e',
                    qn = 'VehicleRender_text_52',
                    Kn = 'VehicleRender_text__default_50',
                    Yn = 'VehicleRender_igr_ba',
                    Xn = (e) => {
                        if (0 === e.length) return;
                        const t = e[0];
                        return Zn(t, !0);
                    },
                    Zn = ({ id: e, label: t, isDisabled: u, meta: n }, r = !1) => {
                        const s = n ? n.type : '',
                            i = n && n.isElite,
                            l = n && n.isIGR,
                            c = e === qt,
                            d = (0, a.useMemo)(() => {
                                if (!c)
                                    return i
                                        ? {
                                              backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.elite.$dyn(s)})`,
                                          }
                                        : {
                                              backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.c_24x24.$dyn(s)})`,
                                          };
                            }, [c, i, s]);
                        if (c) return R.strings.dialogs.recruitWindow.menuEmptyRow();
                        const _ = C()(qn, e === qt && Kn),
                            m = C()($n, r && jn, u && Un);
                        return o().createElement(
                            'div',
                            { className: m },
                            o().createElement('div', { className: Gn, style: d }),
                            l && o().createElement('div', { className: Yn }),
                            o().createElement('div', { className: _ }, r ? o().createElement(Te, { content: t }) : t),
                        );
                    },
                    Qn = 'VehTypeRender_text_a1',
                    Jn = 'VehTypeRender_base_ec',
                    er = 'VehTypeRender_base__header_a0',
                    tr = 'VehTypeRender_base__disabled_b8',
                    ur = 'VehTypeRender_icon_93',
                    nr = (e) => {
                        if (0 === e.length) return;
                        const t = e[0];
                        return rr(t, !0);
                    },
                    rr = ({ id: e, label: t, isDisabled: u }, n = !1) => {
                        const r = e.toString().replace('-', '_'),
                            s = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.c_24x24_flat.$dyn(r)})`,
                                }),
                                [r],
                            );
                        if (e === qt) return R.strings.dialogs.recruitWindow.menuEmptyRow();
                        const i = C()(Jn, n && er, u && tr);
                        return o().createElement(
                            'div',
                            { className: i },
                            o().createElement('div', { className: ur, style: s }),
                            o().createElement('div', { className: Qn }, t),
                        );
                    },
                    ar = 'RecruitContent_base_f3',
                    or = 'RecruitContent_content_ab',
                    sr = 'RecruitContent_column_28',
                    ir = 'RecruitContent_column__last_c7',
                    lr = 'RecruitContent_dropDown_dc',
                    cr = 'RecruitContent_warning_ac',
                    dr = 'RecruitContent_voiceoverText_07',
                    _r = 'RecruitContent_microphoneIcon_22',
                    mr = (0, Ue.Pi)(() => {
                        const e = Qt(),
                            t = e.model,
                            u = e.controls,
                            n = t.recruitContent.get(),
                            r = n.nationState,
                            s = n.vehTypeState,
                            i = n.vehicleState,
                            l = n.specializationState,
                            c = n.selectedNation,
                            d = n.selectedVehType,
                            _ = n.selectedVehicle,
                            m = n.selectedSpecialization,
                            E = t.nations.get(),
                            A = t.vehTypes.get(),
                            h = t.specializations.get(),
                            g = u.onNationChange,
                            p = u.onVehTypeChange,
                            F = u.onVehicleChange,
                            D = u.onSpecializationChange,
                            f = r !== Cn.Normal,
                            b = s !== Cn.Normal,
                            v = i !== Cn.Normal,
                            B = l !== Cn.Normal,
                            w = (0, a.useCallback)(
                                (e) => {
                                    if (e) {
                                        const t = e[0];
                                        t && g({ id: t });
                                    }
                                },
                                [g],
                            ),
                            y = (0, a.useCallback)(
                                (e) => {
                                    if (e) {
                                        const t = e[0];
                                        t && p({ id: t });
                                    }
                                },
                                [p],
                            ),
                            k = (0, a.useCallback)(
                                (e) => {
                                    if (e) {
                                        const t = e[0];
                                        t && F({ id: t });
                                    }
                                },
                                [F],
                            ),
                            x = (0, a.useCallback)(
                                (e) => {
                                    if (e) {
                                        const t = e[0];
                                        t && D({ id: t });
                                    }
                                },
                                [D],
                            );
                        return o().createElement(
                            'div',
                            { className: ar },
                            t.computes.isSelectedVehiclePremium() &&
                                o().createElement(
                                    Bn,
                                    { className: cr },
                                    R.strings.dialogs.recruit.warning.premiumVehicle(),
                                ),
                            o().createElement(
                                'div',
                                { className: or },
                                o().createElement(
                                    'div',
                                    { className: sr },
                                    o().createElement(kn, {
                                        label: R.strings.dialogs.recruitWindow.nation(),
                                        state: r,
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: lr },
                                        o().createElement(fn, {
                                            key: `nationDdl${c}`,
                                            items: t.computes.prepareItems(E, f),
                                            variant: f ? lu.Disabled : lu.Basic,
                                            selected: c,
                                            itemRenderer: Nn,
                                            controlRenderer: Rn,
                                            onChanges: w,
                                        }),
                                    ),
                                    o().createElement(kn, {
                                        label: R.strings.dialogs.recruitWindow.vehicleType(),
                                        state: i,
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: lr },
                                        o().createElement(fn, {
                                            key: `vehDdl${_}`,
                                            items: t.computes.vehicleItems(v),
                                            selected: _,
                                            variant: v ? lu.Disabled : lu.Basic,
                                            itemRenderer: Zn,
                                            controlRenderer: Xn,
                                            onChanges: k,
                                        }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: C()(sr, ir) },
                                    o().createElement(kn, {
                                        label: R.strings.dialogs.recruitWindow.vehicleClass(),
                                        state: s,
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: lr },
                                        o().createElement(fn, {
                                            key: `vehTypeDdl${d}`,
                                            items: t.computes.prepareItems(A, b),
                                            selected: d,
                                            variant: b ? lu.Disabled : lu.Basic,
                                            itemRenderer: rr,
                                            controlRenderer: nr,
                                            onChanges: y,
                                        }),
                                    ),
                                    o().createElement(kn, {
                                        label: R.strings.dialogs.recruitWindow.specialization(),
                                        state: l,
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: lr },
                                        o().createElement(fn, {
                                            key: `specializationDdl${m}`,
                                            items: t.computes.prepareItems(h, B),
                                            selected: m,
                                            variant: B ? lu.Disabled : lu.Basic,
                                            itemRenderer: zn,
                                            controlRenderer: Vn,
                                            onChanges: x,
                                        }),
                                    ),
                                ),
                            ),
                            t.computes.hasVisibledVoiceoverText() &&
                                o().createElement(
                                    'div',
                                    { className: dr },
                                    o().createElement('div', { className: _r }),
                                    R.strings.dialogs.recruit.voiceoverText(),
                                ),
                        );
                    }),
                    Er = ['onClose', 'buttons', 'isShown', 'displayFlags'];
                function Ar() {
                    return (
                        (Ar =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ar.apply(this, arguments)
                    );
                }
                const hr = (0, Ue.Pi)((e) => {
                    let t = e.onClose,
                        u = e.buttons,
                        n = e.isShown,
                        r = e.displayFlags,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, Er);
                    const s = Qt().model;
                    return o().createElement(
                        Pt,
                        Ar({ onClose: t, buttons: u, displayFlags: r, isShown: n }, a, {
                            title: o().createElement(Lt, { text: s.text.get(), justifyContent: at.Center }),
                            icon: o().createElement(iu, null),
                            content: o().createElement(mr, null),
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    P().render(
                        o().createElement(
                            Zt,
                            null,
                            o().createElement(I, null, o().createElement(je, { Template: hr })),
                        ),
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
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](u, u.exports, __webpack_require__), u.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, n] = deferred[i], a = !0, o = 0; o < t.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (__webpack_require__.j = 882),
        (() => {
            var e = { 882: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [a, o, s] = u,
                        i = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(u); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(1722));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
