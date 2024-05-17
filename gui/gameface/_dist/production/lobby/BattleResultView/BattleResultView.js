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
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => r, onScaleUpdated: () => i });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, n.R)(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, n.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${u}`,
                                            i = l[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            a(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(r, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (n = !1));
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
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
                            },
                            enableOutside() {
                                e.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => i,
                    });
                var a = t(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2472: (e, u, t) => {
                'use strict';
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => n });
                var a = t(5959);
                const n = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var a = t(2472);
                const n = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => v,
                        events: () => r.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => F,
                        getSize: () => d,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => C,
                        isFocused: () => p,
                        pxToRem: () => g,
                        remToPx: () => B,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => w,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const a = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    r = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let a, n;
                t.d(u, { n: () => a }),
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
                    })(a || (a = {})),
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
                    })(n || (n = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(3138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, t, n);
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => l, Z5: () => i.Z5, B0: () => s, ry: () => B });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                a.__instance = void 0;
                const n = a;
                var r = t(1358),
                    i = t(8613);
                let s;
                var o;
                ((o = s || (s = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    m = t(3138);
                const A = ['args'];
                function F(e, u, t, a, n, r, i) {
                    try {
                        var s = e[r](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(a, n);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            F(r, a, n, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(r, a, n, i, s, 'throw', e);
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
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, A);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, u]) => {
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
                        var a;
                    },
                    p = () => D(s.CLOSE),
                    h = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var C = t(7572);
                const f = n.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => D(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => D(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                d = o.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(E),
                                    height: m.O.view.pxToRem(d),
                                };
                            D(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: g(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, p);
                        },
                        handleViewEvent: D,
                        onBindingsReady: B,
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
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            6345: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    n = t.n(a);
                const r = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function l(e, u, t) {
                    const a = (function (e, u) {
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
                        n = (function (e, u) {
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
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
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
                })(o || (o = {}));
                const c = i.O.client.getSize('rem'),
                    E = c.width,
                    d = c.height,
                    _ = Object.assign({ width: E, height: d }, l(E, d, s)),
                    m = (0, a.createContext)(_),
                    A = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, A);
                        const n = (0, a.useContext)(m),
                            i = n.extraLarge,
                            s = n.large,
                            o = n.medium,
                            l = n.small,
                            c = n.extraSmall,
                            E = n.extraLargeWidth,
                            d = n.largeWidth,
                            _ = n.mediumWidth,
                            F = n.smallWidth,
                            g = n.extraSmallWidth,
                            B = n.extraLargeHeight,
                            D = n.largeHeight,
                            p = n.mediumHeight,
                            h = n.smallHeight,
                            C = n.extraSmallHeight,
                            f = { extraLarge: B, large: D, medium: p, small: h, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && s) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return r(u, t, f);
                            if (t.largeWidth && d) return r(u, t, f);
                            if (t.mediumWidth && _) return r(u, t, f);
                            if (t.smallWidth && F) return r(u, t, f);
                            if (t.extraSmallWidth && g) return r(u, t, f);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return u;
                                if (t.largeHeight && D) return u;
                                if (t.mediumHeight && p) return u;
                                if (t.smallHeight && h) return u;
                                if (t.extraSmallHeight && C) return u;
                            }
                        }
                        return null;
                    };
                (F.defaultProps = {
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
                }),
                    (0, a.memo)(F);
                const g = ({ children: e }) => {
                    const u = (0, a.useContext)(m),
                        t = (0, a.useState)(u),
                        r = t[0],
                        o = t[1],
                        c = (0, a.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                a = i.O.view.pxToRem(u);
                            o(Object.assign({ width: t, height: a }, l(t, a, s)));
                        }, []),
                        E = (0, a.useCallback)(() => {
                            const e = i.O.client.getSize('px');
                            c(e.width, e.height);
                        }, [c]);
                    ((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', E);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                i.O.client.events.off('clientResized', c),
                                    i.O.client.events.off('self.onScaleUpdated', E);
                            },
                            [c, E],
                        );
                    const d = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return n().createElement(m.Provider, { value: d }, e);
                };
                var B = t(6483),
                    D = t.n(B),
                    p = t(926),
                    h = t.n(p);
                let C, f, b;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(C || (C = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(b || (b = {}));
                const v = () => {
                        const e = (0, a.useContext)(m),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return C.ExtraLarge;
                                    case e.large:
                                        return C.Large;
                                    case e.medium:
                                        return C.Medium;
                                    case e.small:
                                        return C.Small;
                                    case e.extraSmall:
                                        return C.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), C.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case e.largeWidth:
                                        return f.Large;
                                    case e.mediumWidth:
                                        return f.Medium;
                                    case e.smallWidth:
                                        return f.Small;
                                    case e.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return b.ExtraLarge;
                                    case e.largeHeight:
                                        return b.Large;
                                    case e.mediumHeight:
                                        return b.Medium;
                                    case e.smallHeight:
                                        return b.Small;
                                    case e.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function w() {
                    return (
                        (w =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        w.apply(this, arguments)
                    );
                }
                const T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: h().SMALL_WIDTH,
                        [f.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [f.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL_HEIGHT,
                        [b.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [b.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [C.ExtraSmall]: '',
                        [C.Small]: h().SMALL,
                        [C.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [C.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [C.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, y);
                        const r = v(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return n().createElement('div', w({ className: D()(t, T[i], S[s], O[o]) }, a), u);
                    },
                    x = ['children'],
                    k = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, x);
                        return n().createElement(g, null, n().createElement(L, t, u));
                    };
                var I = t(493),
                    N = t.n(I);
                const M = (0, a.memo)(
                    ({ className: e, backgroundPath: u, onLoaded: t, showVignette: a = !0, showBlur: r = !1 }) =>
                        n().createElement(
                            'div',
                            {
                                className: D()('Background_base_94', r && 'Background_base__blur_69', e),
                                style: { backgroundImage: `url(${u})` },
                            },
                            a && n().createElement('div', { className: 'Background_vignette_79' }),
                            t &&
                                n().createElement('img', {
                                    className: 'Background_preloader_7d',
                                    onLoad: () => t(),
                                    onError: () => t(),
                                    src: u,
                                    alt: u,
                                }),
                        ),
                );
                var P = t(7030);
                const U = { x: 0, y: 0, opacity: 0, transform: 'scale(1) rotate(0deg)' },
                    H = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' };
                let G;
                !(function (e) {
                    (e.Linear = 'linear'),
                        (e.EaseIn = 'easeIn'),
                        (e.EaseOut = 'easeOut'),
                        (e.EaseInOut = 'easeInOut'),
                        (e.EaseOutBack = 'easeOutBack'),
                        (e.EaseOutQuint = 'easeOutQuint'),
                        (e.EaseOutExpo = 'easeOutExpo');
                })(G || (G = {}));
                const W = {
                        [G.Linear]: (e) => e,
                        [G.EaseIn]: (e) => e * e * e,
                        [G.EaseOut]: (e) => --e * e * e + 1,
                        [G.EaseInOut]: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        [G.EaseOutBack]: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                        [G.EaseOutQuint]: (e) => 1 - Math.pow(1 - e, 5),
                        [G.EaseOutExpo]: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
                    },
                    j = (0, a.memo)(function ({
                        children: e,
                        from: u = U,
                        to: t = H,
                        config: r,
                        isCanceled: i = !1,
                        isDisabled: s = !1,
                        duration: o = 250,
                        delay: l = 0,
                        transformOrigin: c = '50% 50%',
                        easingType: E = G.EaseInOut,
                        onRest: d,
                        onStart: _,
                        trigger: m,
                        className: A,
                        isReverse: F = !1,
                        playSoundOnStart: g,
                        playSoundOnFinish: B,
                    }) {
                        const D = W[E],
                            p = (0, P.useSpring)(() => u),
                            h = p[0],
                            C = p[1],
                            f = i && !s ? t : Object.assign({}, h, { transformOrigin: c });
                        return (
                            (0, a.useEffect)(() => {
                                C.start({
                                    from: u,
                                    to: t,
                                    delay: l,
                                    immediate: i,
                                    config: r ? Object.assign({}, r) : { duration: o, easing: D },
                                    cancel: i || s,
                                    reverse: F,
                                    onRest: (e) => {
                                        !0 === e.finished && (B && B(), d && d());
                                    },
                                    onStart: () => {
                                        g && g(), _ && _();
                                    },
                                });
                            }, [C, l, o, D, u, i, d, t, m, s, F, B, g, _, r]),
                            n().createElement(P.animated.div, { className: A, style: f }, e)
                        );
                    });
                function V(e) {
                    engine.call('PlaySound', e);
                }
                const $ = {
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
                let Y, z;
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
                    })(z || (z = {}));
                const q = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: s,
                    soundHover: o,
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
                        B = g[0],
                        p = g[1],
                        h = (0, a.useState)(!1),
                        C = h[0],
                        f = h[1],
                        b = (0, a.useState)(!1),
                        v = b[0],
                        y = b[1],
                        w = (0, a.useCallback)(() => {
                            i || (F.current && (F.current.focus(), p(!0)));
                        }, [i]),
                        T = (0, a.useCallback)(
                            (e) => {
                                B && null !== F.current && !F.current.contains(e.target) && p(!1);
                            },
                            [B],
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                i || (A && A(e));
                            },
                            [i, A],
                        ),
                        O = (0, a.useCallback)(
                            (e) => {
                                i || (null !== o && V(o), c && c(e), y(!0));
                            },
                            [i, o, c],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                i || (_ && _(e), f(!1));
                            },
                            [i, _],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                i || (null !== l && V(l), d && d(e), t && w(), f(!0));
                            },
                            [i, l, d, w, t],
                        ),
                        I = (0, a.useCallback)(
                            (e) => {
                                i || (m && m(e), f(!1));
                            },
                            [i, m],
                        ),
                        N = D()(
                            $.base,
                            $[`base__${r}`],
                            {
                                [$.base__disabled]: i,
                                [$[`base__${u}`]]: u,
                                [$.base__focus]: B,
                                [$.base__highlightActive]: C,
                                [$.base__firstHover]: v,
                            },
                            s,
                        ),
                        M = D()($.state, $.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, a.useEffect)(() => {
                            p(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: F,
                                className: N,
                                onMouseEnter: O,
                                onMouseMove: L,
                                onMouseUp: x,
                                onMouseDown: k,
                                onMouseLeave: I,
                                onClick: S,
                            },
                            r !== Y.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: $.back }),
                                    n().createElement('span', { className: $.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: M },
                                n().createElement('span', { className: $.stateDisabled }),
                                n().createElement('span', { className: $.stateHighlightHover }),
                                n().createElement('span', { className: $.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: $.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                q.defaultProps = { type: Y.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const X = (0, a.memo)(q),
                    K = {
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
                    Q = [
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
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                class J extends n().PureComponent {
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
                            a = e.goto,
                            r = e.side,
                            i = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, Q)),
                            _ = D()(K.base, K[`base__${i}`], K[`base__${r}`], null == s ? void 0 : s.base),
                            m = D()(K.icon, K[`icon__${i}`], K[`icon__${r}`], null == s ? void 0 : s.icon),
                            A = D()(K.glow, null == s ? void 0 : s.glow),
                            F = D()(K.caption, K[`caption__${i}`], null == s ? void 0 : s.caption),
                            g = D()(K.goto, null == s ? void 0 : s.goto);
                        return n().createElement(
                            'div',
                            Z(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== i && n().createElement('div', { className: K.shine }),
                            n().createElement('div', { className: m }, n().createElement('div', { className: A })),
                            n().createElement('div', { className: F }, u),
                            a && n().createElement('div', { className: g }, a),
                        );
                    }
                }
                J.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var ee = t(5521),
                    ue = t(9916);
                const te = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ae(e = ee.n.NONE, u = te, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== ee.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                const ne = [
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
                function re(e) {
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
                const ie = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ue.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    se = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            g = e.targetId,
                            B = void 0 === g ? 0 : g,
                            D = e.onShow,
                            p = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ne);
                        const C = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    B ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            a = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (a = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: a }
                                        );
                                    })().resId,
                                [B],
                            ),
                            b = (0, a.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (ie(t, m, { isMouseEvent: !0, on: !0, arguments: re(n) }, f),
                                    D && D(),
                                    (C.current.isVisible = !0));
                            }, [t, m, n, f, D]),
                            v = (0, a.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        ie(t, m, { on: !1 }, f),
                                        C.current.isVisible && p && p(),
                                        (C.current.isVisible = !1);
                                }
                            }, [t, m, f, p]),
                            y = (0, a.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(C.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = C.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((C.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          r && r(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  v(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === d && v(), null == o || o(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === d && v(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var w;
                    },
                    oe = ['children'];
                function le() {
                    return (
                        (le =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        le.apply(this, arguments)
                    );
                }
                const ce = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, oe);
                        return n().createElement(
                            se,
                            le(
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
                    Ee = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                const _e = R.views.common.tooltip_window.simple_tooltip_content,
                    me = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            i = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Ee);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: r, note: i, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, i, o]);
                        return n().createElement(
                            se,
                            de(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? _e.SimpleTooltipHtmlContent('resId') : _e.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function Ae() {
                    return (
                        (Ae =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ae.apply(this, arguments)
                    );
                }
                const Fe = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const a = n().createElement('div', { className: t }, e);
                    if (u.header || u.body) return n().createElement(me, u, a);
                    const r = u.contentId;
                    return r ? n().createElement(se, Ae({}, u, { contentId: r }), a) : n().createElement(ce, u, a);
                };
                var ge = t(8045);
                let Be;
                t(1281),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(Be || (Be = {}));
                let De, pe, he;
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
                ),
                    (function (e) {
                        (e[(e.Word = 0)] = 'Word'),
                            (e[(e.LineBreak = 1)] = 'LineBreak'),
                            (e[(e.NewLine = 2)] = 'NewLine'),
                            (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (e[(e.Binding = 5)] = 'Binding');
                    })(De || (De = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(pe || (pe = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(he || (he = {}));
                const Ce = { [he.NBSP]: De.NoBreakSymbol, [he.ZWNBSP]: De.NoBreakSymbol, [he.NEW_LINE]: De.LineBreak },
                    fe = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    be = {
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
                    ve = 'renderers_word_f3',
                    ye = (e) => ({ color: `#${e}` }),
                    we = ({ elementList: e, textBlock: u, key: t }) => {
                        const a = u.colorTag;
                        return a
                            ? be[a]
                                ? n().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: D()(ve, be[a]) },
                                      e,
                                  )
                                : n().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: ve, style: ye(a) },
                                      e,
                                  )
                            : n().createElement('span', { key: t, 'data-block-type': u.blockType, className: ve }, e);
                    },
                    Re = {
                        [De.Word]: we,
                        [De.NoBreakSymbol]: we,
                        [De.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            n().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => n().createElement(n().Fragment, { key: t }, e)),
                            ),
                        [De.LineBreak]: ({ key: e }) =>
                            n().createElement('span', {
                                key: e,
                                'data-block-type': De.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [De.NewLine]: ({ elementList: e, key: u }) =>
                            n().createElement(
                                'span',
                                { key: u, 'data-block-type': De.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [De.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            n().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': De.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    Te = (e, u, t) => {
                        const a = [];
                        return (
                            e.childList.forEach((n, r) => {
                                const i = `${t}_${r}`;
                                if (((e) => void 0 !== e.childList)(n)) {
                                    const e = n,
                                        u = e.blockType,
                                        t = Te(e, Re[u], i);
                                    a.push(...t);
                                } else a.push(u({ elementList: [n], textBlock: e, key: i }));
                            }),
                            a
                        );
                    },
                    Se = (e, u, t, a) => {
                        let n = u.exec(e),
                            r = 0;
                        for (; n; ) r !== n.index && t(e.slice(r, n.index)), a(n), (r = u.lastIndex), (n = u.exec(e));
                        r !== e.length && t(e.slice(r));
                    },
                    Oe = fe
                        ? (e) => {
                              const u = [];
                              return (
                                  Se(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(
                                              ...((e) => {
                                                  const u = [];
                                                  return (
                                                      Se(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              u.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              u.push(e[0]);
                                                          },
                                                      ),
                                                      u
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e) => {
                              const u = /[\s\u002d]/g;
                              let t = u.exec(e);
                              if (!t) return [e];
                              const a = [];
                              let n = 0;
                              for (; t; ) a.push(e.slice(n, u.lastIndex)), (n = u.lastIndex), (t = u.exec(e));
                              return n !== e.length && a.push(e.slice(n)), a;
                          },
                    Le = (e, u = '') => {
                        const t = [];
                        return (
                            Se(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    t.push({ blockType: De.Word, colorTag: u, childList: Oe(e) });
                                },
                                (e) => {
                                    const a = e[0],
                                        n = Ce[a.charAt(0)];
                                    n === De.LineBreak
                                        ? t.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: De.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: De.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(a),
                                          )
                                        : t.push({ blockType: n, colorTag: u, childList: [a] });
                                },
                            ),
                            t
                        );
                    },
                    xe = (e, u, t = '') => {
                        const a = [];
                        return (
                            Se(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...Le(e, t));
                                },
                                (e) => {
                                    const n = e[1],
                                        r = void 0 === u[n] ? e[0] : u[n];
                                    'string' == typeof r || 'number' == typeof r
                                        ? a.push(...Le(String(r), t))
                                        : a.push({ blockType: De.Binding, colorTag: t, childList: [r] });
                                },
                            ),
                            a
                        );
                    },
                    ke = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            a = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === De.NoBreakWrapper) e.childList.push(a), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: De.NoBreakWrapper, colorTag: '', childList: [u, a] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    Ie = (e, u = {}) => {
                        if (!e) return [];
                        const t = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === De.NoBreakSymbol
                                        ? ((t = !0), u.push(...ke(u.pop(), e)))
                                        : (t ? u.push(...ke(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u) => {
                                const t = [];
                                return (
                                    Se(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            t.push(...xe(e, u));
                                        },
                                        (e) => {
                                            t.push(...xe(e[2], u, e[1]));
                                        },
                                    ),
                                    t
                                );
                            })(((a = e), a.replace(/&nbsp;/g, ' ')).replace(/&zwnbsp;/g, '\ufeff'), u),
                        );
                        var a;
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                a = e.blockType,
                                                n = Re[a],
                                                r = Te(e, n, u);
                                            return (
                                                a === De.NoBreakWrapper
                                                    ? t.push(n({ elementList: r, textBlock: e, key: `${u}` }))
                                                    : t.push(...r),
                                                t
                                            );
                                        })(e, t),
                                    );
                                }),
                                u
                            );
                        })(t);
                    },
                    Ne = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    Me = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    Pe = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const a = Me(e, u),
                            n = e.textContent.length,
                            r = e.offsetWidth / n,
                            i = Math.ceil(a / r);
                        if (a > 0) {
                            const a = Math.floor((u - e.offsetLeft) / r);
                            return a >= t ? [!0, t + i] : [!1, a];
                        }
                        const s = Math.max(t + i, 0);
                        return n < s ? [!1, 0] : [!0, s];
                    },
                    Ue = (e, u, t, a, r, i) => {
                        let s = -1,
                            o = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === De.LineBreak || c === De.NewLine || c === De.Binding) continue;
                            const E = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = Pe(t, a, r),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (r -= d);
                                    continue;
                                }
                                const _ = E.slice(0, E.length - d) + i,
                                    m = u[l];
                                (o = n().cloneElement(m, m.props, _)), (s = l);
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    d = c.props.children,
                                    _ = Ue(e, d, e.length - 1, a, r, i),
                                    m = _[0],
                                    A = _[1];
                                if (!(m < 0)) {
                                    const e = d.slice(0, m);
                                    (o = n().cloneElement(c, c.props, e, A)), (s = l);
                                    break;
                                }
                                r -= E.length;
                            }
                        }
                        return [s, o];
                    },
                    He = n().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: r,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: s = !1,
                            targetId: o,
                            justifyContent: l = pe.FlexStart,
                            alignContent: c = pe.FlexStart,
                            truncateIdentify: E = '...',
                        }) => {
                            const d = (0, a.useRef)(null),
                                _ = (0, a.useRef)({ height: 0, width: 0 }),
                                m = (0, a.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = m[0],
                                F = m[1],
                                g = (0, a.useMemo)(() => Ie(e, r), [r, e]),
                                B = (0, a.useMemo)(() => {
                                    if (
                                        i &&
                                        A.isTruncated &&
                                        (!r || !Object.values(r).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: { text: e, stringifyKwargs: r ? JSON.stringify(r) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [r, i, o, e, A.isTruncated]),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        (_.current.width = e.contentRect.width),
                                            (_.current.height = e.contentRect.height);
                                        const u = ((e, u, t, a = '...') => {
                                                const n = [...u],
                                                    r = e.current;
                                                if (!r) return [n, !1];
                                                const i = t.height,
                                                    s = t.width,
                                                    o = r.lastElementChild;
                                                if (!Ne(o, i) && Me(o, s) <= 0) return [n, !1];
                                                const l = r.children,
                                                    c = ((e, u) => {
                                                        let t = 0,
                                                            a = e.length - 1;
                                                        for (; a - t >= 0; ) {
                                                            const n = t + Math.ceil(0.5 * (a - t));
                                                            Ne(e[n], u) ? (a = n - 1) : (t = n + 1);
                                                        }
                                                        return t - 1;
                                                    })(l, i);
                                                if (c < 0) return [n, !1];
                                                const E = Ue(l, n, c, s, a.length, a),
                                                    d = E[0],
                                                    _ = E[1];
                                                return _ && (n.splice(d, 1, _), n.splice(d + 1)), [n, !0];
                                            })(d, g, _.current, E),
                                            a = u[0],
                                            n = u[1];
                                        F({ elementList: a, isTruncated: n, isTruncateFinished: !0 }), t && t(n);
                                    },
                                    [t, E, g],
                                ),
                                h = (0, a.useMemo)(() => ({ justifyContent: l, alignContent: c }), [c, l]);
                            return (
                                ((e, u, t = !0) => {
                                    const n = (0, a.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, a.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new ge.Z((e) => n(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [n, t, e]);
                                })(d, p, s),
                                n().createElement(
                                    'div',
                                    {
                                        className: D()(
                                            'ExtendedText_base_71',
                                            u,
                                            'ExtendedText_base__zeroPadding_25',
                                            s && 'ExtendedText_base__isTruncationAvailable_5b',
                                        ),
                                        style: h,
                                    },
                                    n().createElement('div', { className: 'ExtendedText_unTruncated_b8', ref: d }, g),
                                    n().createElement(
                                        Fe,
                                        { tooltipArgs: B },
                                        n().createElement(
                                            'div',
                                            {
                                                className: D()(
                                                    'ExtendedText_truncated_97',
                                                    !A.isTruncateFinished && s && 'ExtendedText_truncated__hide_31',
                                                ),
                                                style: h,
                                            },
                                            A.isTruncateFinished && s ? A.elementList : g,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var Ge = t(3403);
                function We() {
                    return !1;
                }
                console.log;
                var je = t(9174);
                function Ve(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const $e = (e) => (0 === e ? window : window.subViews.get(e));
                function Ye(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function ze(e, u) {
                    for (let n = 0; n < e.length; n++) {
                        const r =
                            ((t = e[n]),
                            (a = void 0),
                            t && 'value' in t && null != (a = t.constructor) && a.name.includes('ArrayItem')
                                ? null == t
                                    ? void 0
                                    : t.value
                                : t);
                        if (u(r, n, e)) return r;
                    }
                    var t, a;
                }
                var qe = t(3946);
                const Xe = 'freeXP',
                    Ke = 'credits',
                    Qe = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: s, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = $e,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = t(u),
                                                        r = a.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const o = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return n.set(l, t), e && t(s(r)), l;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return Ve(e, u);
                                                                                var t = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? Ve(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(e = t()).done;

                                                        )
                                                            r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.primitives([
                                                            'missionId',
                                                            'isVictory',
                                                            'title',
                                                            'subTitle',
                                                            'infoName',
                                                            'infoDescription',
                                                            'vehicleName',
                                                            'playerStatus',
                                                            'isDifficult',
                                                            'isEvent',
                                                        ]),
                                                        progressLevels: e.array('progressLevels'),
                                                        missionProgress: e.object('missionProgress'),
                                                        rewards: e.array('rewards', []),
                                                    },
                                                    t = (0, qe.Om)(() => u.rewards.get(), { equals: We }),
                                                    a = (0, qe.Om)(() => t().length > 0),
                                                    n = (0, qe.Om)(() => ze(t(), (e) => e.name === Xe)),
                                                    r = (0, qe.Om)(() => ze(t(), (e) => e.name === Ke)),
                                                    i = (0, qe.Om)(() =>
                                                        (function (e, u) {
                                                            if (Array.isArray(e)) return e.filter(u);
                                                            const t = [];
                                                            for (let n = 0; n < e.length; n++) {
                                                                var a;
                                                                const r = null == (a = e[n]) ? void 0 : a.value;
                                                                u(r, n, e) && t.push(r);
                                                            }
                                                            return t;
                                                        })(t(), (e) => e.name !== Xe && e.name !== Ke),
                                                    ),
                                                    s = (0, qe.Om)(() => i().length > 0);
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getRewards: t,
                                                        getHasRewards: a,
                                                        getXPReward: n,
                                                        getCreditsReward: r,
                                                        getOtherRewards: i,
                                                        getHasOtherRewards: s,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : o(u),
                                                            n = je.LO.box(a, { equals: We });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, je.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : o(u),
                                                            n = je.LO.box(a, { equals: We });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, je.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = o(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = je.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, je.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                r = Object.entries(n),
                                                                i = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = je.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, je.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            d = { mode: e, model: E, externalModel: s, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && a ? a.controls(d) : u(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    d = (0, a.useState)(e),
                                    _ = d[0],
                                    m = d[1],
                                    A = (0, a.useState)(() => c(e, r, o)),
                                    F = A[0],
                                    g = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? g(c(_, r, o)) : (E.current = !0);
                                    }, [o, _, r]),
                                    (0, a.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    n().createElement(t.Provider, { value: F }, s)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        exit: e.createCallbackNoArgs('onQuit'),
                        continue: e.createCallbackNoArgs('onContinue'),
                    })),
                    Ze = Qe[0],
                    Je = Qe[1],
                    eu = { from: { opacity: 0 }, to: { opacity: 0 }, delay: 0, duration: 0 };
                let uu, tu;
                !(function (e) {
                    (e.VICTORY = 'victory'), (e.DEFEAT = 'defeat'), (e.VICTORY_REWARDS = 'victoryRewards');
                })(uu || (uu = {})),
                    (function (e) {
                        (e.SHUTTER = 'shutter'),
                            (e.FLASH = 'flash'),
                            (e.TITLE_GLOW = 'titleGlow'),
                            (e.TITLE = 'title'),
                            (e.SUB_TITLE = 'subTitle'),
                            (e.PROGRESS_ITEM = 'progressItem'),
                            (e.REWARD_RIBBON = 'rewardRibbon'),
                            (e.REWARD_MAIN = 'rewardMain'),
                            (e.REWARD_TXT = 'rewardTxt'),
                            (e.REWARD_ITEM = 'rewardItem'),
                            (e.REWARD_COUNT_FINISH = 'rewardCountFinish'),
                            (e.IMG = 'img'),
                            (e.FOOTER = 'footer'),
                            (e.BUTTON = 'button');
                    })(tu || (tu = {}));
                const au = 500,
                    nu = 100,
                    ru = {
                        [tu.SHUTTER]: {
                            delay: 500,
                            duration: au,
                            from: { opacity: 1 },
                            to: { opacity: 0 },
                            easingType: G.EaseOut,
                        },
                        [tu.FLASH]: {
                            from: { opacity: 0, transform: 'scale(35, 35)' },
                            to: [
                                { opacity: 1, transform: 'scale(2, 2)', config: { duration: au } },
                                { opacity: 0, transform: 'scale(4, 1)', config: { duration: 4e3 } },
                            ],
                            transformOrigin: '50% 75%',
                            delay: 650,
                            easingType: G.EaseInOut,
                        },
                        [tu.TITLE_GLOW]: {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            delay: 1e3,
                            duration: 1e3,
                            easingType: G.EaseOut,
                        },
                        [tu.TITLE]: {
                            from: { y: 25, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1e3,
                            config: { tension: 180, friction: 12 },
                        },
                        [tu.SUB_TITLE]: {
                            from: { y: -25, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1e3,
                            config: { tension: 180, friction: 12 },
                        },
                        [tu.PROGRESS_ITEM]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1100,
                            config: { tension: 180, friction: 12 },
                        },
                        [tu.REWARD_RIBBON]: Object.assign({}, eu),
                        [tu.REWARD_MAIN]: Object.assign({}, eu),
                        [tu.REWARD_TXT]: Object.assign({}, eu),
                        [tu.REWARD_ITEM]: Object.assign({}, eu),
                        [tu.REWARD_COUNT_FINISH]: Object.assign({}, eu),
                        [tu.FOOTER]: {
                            from: { y: -5, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1900,
                            duration: au,
                            easingType: G.EaseOut,
                        },
                        [tu.IMG]: {
                            from: { x: 20, opacity: 0 },
                            to: { x: 0, opacity: 1 },
                            delay: 2050,
                            duration: 1e3,
                            easingType: G.EaseOutBack,
                        },
                        [tu.BUTTON]: {
                            from: { y: -5, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 2900,
                            duration: au,
                            easingType: G.EaseInOut,
                        },
                    },
                    iu = {
                        [tu.SHUTTER]: {
                            from: { opacity: 1 },
                            to: { opacity: 0 },
                            delay: 500,
                            duration: 600,
                            easingType: G.EaseOut,
                        },
                        [tu.FLASH]: Object.assign({}, eu),
                        [tu.TITLE_GLOW]: {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            delay: 1100,
                            duration: 1800,
                            easingType: G.Linear,
                        },
                        [tu.TITLE]: {
                            from: { opacity: 0, transform: 'scale(1.3, 1.3)' },
                            to: { opacity: 1, transform: 'scale(1, 1)' },
                            transformOrigin: '50% 90%',
                            delay: 700,
                            duration: 1800,
                            easingType: G.EaseInOut,
                        },
                        [tu.SUB_TITLE]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1100,
                            duration: 1200,
                            easingType: G.EaseInOut,
                        },
                        [tu.PROGRESS_ITEM]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1500,
                            duration: 600,
                            easingType: G.EaseOutBack,
                        },
                        [tu.REWARD_RIBBON]: Object.assign({}, eu),
                        [tu.REWARD_MAIN]: Object.assign({}, eu),
                        [tu.REWARD_TXT]: Object.assign({}, eu),
                        [tu.REWARD_ITEM]: Object.assign({}, eu),
                        [tu.REWARD_COUNT_FINISH]: Object.assign({}, eu),
                        [tu.FOOTER]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1700,
                            duration: 1200,
                            easingType: G.EaseInOut,
                        },
                        [tu.IMG]: {
                            from: { x: 20, opacity: 0 },
                            to: { x: 0, opacity: 1 },
                            delay: 1900,
                            duration: 1200,
                            easingType: G.EaseInOut,
                        },
                        [tu.BUTTON]: {
                            from: { y: -5, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 2900,
                            duration: 1200,
                            easingType: G.EaseInOut,
                        },
                    },
                    su = {
                        [tu.SHUTTER]: {
                            delay: 500,
                            duration: au,
                            from: { opacity: 1 },
                            to: { opacity: 0 },
                            easingType: G.EaseOut,
                        },
                        [tu.FLASH]: {
                            from: { opacity: 0, transform: 'scale(35, 35)' },
                            to: [
                                { opacity: 1, transform: 'scale(2, 2)', config: { duration: au } },
                                { opacity: 0, transform: 'scale(4, 1)', config: { duration: 4e3 } },
                            ],
                            transformOrigin: '50% 75%',
                            delay: 650,
                            easingType: G.EaseInOut,
                        },
                        [tu.TITLE_GLOW]: {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            delay: 1e3,
                            duration: 1e3,
                            easingType: G.EaseOut,
                        },
                        [tu.TITLE]: {
                            from: { y: 25, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1e3,
                            config: { tension: 180, friction: 12 },
                        },
                        [tu.SUB_TITLE]: {
                            from: { y: -25, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1e3,
                            config: { tension: 180, friction: 12 },
                        },
                        [tu.PROGRESS_ITEM]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1100,
                            config: { tension: 180, friction: 12 },
                        },
                        [tu.REWARD_RIBBON]: {
                            from: { opacity: 0, transform: 'scale(0.9, 1)' },
                            to: { opacity: 1, transform: 'scale(1, 1)' },
                            delay: 1600,
                            config: { tension: 180, friction: 12 },
                        },
                        [tu.REWARD_MAIN]: {
                            from: { y: -10, opacity: 0, transform: 'scale(1, 1)' },
                            to: { y: 0, opacity: 1, transform: 'scale(1.1, 1.1)' },
                            delay: 1600,
                            config: { tension: 180, friction: 12 },
                        },
                        [tu.REWARD_TXT]: {
                            from: { y: -5, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1850,
                            config: { tension: 180, friction: 12 },
                        },
                        [tu.REWARD_ITEM]: {
                            from: { y: -5, filter: 'brightness(1.5)', opacity: 0 },
                            to: { y: 0, filter: 'brightness(1)', opacity: 1 },
                            delay: 2e3,
                            config: { tension: 180, friction: 12 },
                        },
                        [tu.REWARD_COUNT_FINISH]: {
                            from: { transform: 'scale(1, 1)' },
                            to: { transform: 'scale(0.9, 0.9)' },
                            delay: 3650,
                            config: { tension: 180, friction: 12 },
                        },
                        [tu.FOOTER]: {
                            from: { y: -5, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 2500,
                            duration: au,
                            easingType: G.EaseOut,
                        },
                        [tu.IMG]: {
                            from: { x: 20, opacity: 0 },
                            to: { x: 0, opacity: 1 },
                            delay: 2650,
                            duration: 1e3,
                            easingType: G.EaseOutBack,
                        },
                        [tu.BUTTON]: {
                            from: { y: -5, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 4e3,
                            duration: au,
                            easingType: G.EaseInOut,
                        },
                    };
                let ou;
                !(function (e) {
                    (e.PERSONAL_SCORE = 'personalScore'), (e.MAIN_SCORE = 'mainScore');
                })(ou || (ou = {}));
                const lu = {
                        [ou.PERSONAL_SCORE]: { delay: 0, duration: 700 },
                        [ou.MAIN_SCORE]: { delay: 1600, duration: 1900 },
                    },
                    cu = {
                        [uu.VICTORY]: Object.assign({}, ru),
                        [uu.DEFEAT]: Object.assign({}, iu),
                        [uu.VICTORY_REWARDS]: Object.assign({}, su),
                    },
                    Eu = (e, u = !1, t = !1) =>
                        u ? (t ? cu[uu.VICTORY_REWARDS][e] : cu[uu.VICTORY][e]) : cu[uu.DEFEAT][e],
                    du = R.strings.sm_lobby.battleResult.difficultyInfo,
                    _u = () => {
                        const e = v().mediaSize < C.Small;
                        return n().createElement(
                            'div',
                            { className: 'BattleResultDifficultyInfo_base_c2' },
                            n().createElement(He, {
                                classMix: 'BattleResultDifficultyInfo_text_dc',
                                justifyContent: pe.Center,
                                text: e ? du.extraSmall() : du.smallAndUp(),
                                binding: {
                                    icon: n().createElement('div', { className: 'BattleResultDifficultyInfo_icon_64' }),
                                },
                            }),
                        );
                    };
                let mu;
                !(function (e) {
                    (e.MISSIONS = 'missions'),
                        (e.ASSIST = 'assist'),
                        (e.KILLS = 'kills'),
                        (e.DAMAGE = 'damage'),
                        (e.ARMOR_USE = 'armorUse');
                })(mu || (mu = {}));
                const Au = R.images.story_mode.gui.maps.icons.battleResult.icons,
                    Fu = (0, Ge.Pi)(() => {
                        const e = Je().model,
                            u = v().mediaSize,
                            t = e.missionProgress.get(),
                            a = e.computes.getHasRewards(),
                            r = u >= C.Medium ? Au.large.$dyn(t.icon) : Au.$dyn(t.icon);
                        return n().createElement(
                            se,
                            {
                                contentId: R.views.story_mode.lobby.BattleResultStatTooltip('resId'),
                                args: { stat: mu.MISSIONS },
                            },
                            n().createElement(
                                'div',
                                {
                                    className: D()(
                                        'BattleResultMissionProgress_base_c0',
                                        a && 'BattleResultMissionProgress_base__withRewards_0e',
                                    ),
                                },
                                n().createElement('div', {
                                    className: 'BattleResultMissionProgress_icon_91',
                                    style: { backgroundImage: `url(${r})` },
                                }),
                                n().createElement(
                                    'div',
                                    { className: 'BattleResultMissionProgress_value_1f' },
                                    t.value,
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'BattleResultMissionProgress_slash_85' },
                                    R.strings.sm_lobby.battleResult.slash(),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'BattleResultMissionProgress_total_f2' },
                                    t.total,
                                ),
                                n().createElement(He, {
                                    classMix: 'BattleResultMissionProgress_name_6f',
                                    text: t.name,
                                    justifyContent: pe.Center,
                                }),
                            ),
                        );
                    }),
                    gu = (e) => e,
                    Bu = (e) => ue.Z5.getNumberFormat(Math.floor(e), ue.B3.INTEGRAL),
                    Du = (0, a.memo)(function ({
                        prefix: e = '',
                        currentNumber: u,
                        previousNumber: t = 0,
                        delay: r,
                        duration: i,
                        classNames: s,
                        isFinalBounceAnim: o = !1,
                        isCanceled: l,
                        onStart: c,
                        onRest: E,
                        playSoundOnStart: d,
                        playSoundOnFinish: _,
                    }) {
                        const m = (0, a.useState)(!1),
                            A = m[0],
                            F = m[1],
                            g = (0, a.useState)(!1),
                            B = g[0],
                            p = g[1],
                            h = (0, P.useSpring)({
                                from: { val: t },
                                to: { val: u },
                                delay: r,
                                config: { duration: i, easing: gu },
                                cancel: l,
                                reverse: l,
                                onStart: () => {
                                    (null == s ? void 0 : s.anim) && F(!0), d && d(), c && c();
                                },
                                onRest: () => {
                                    (null == s ? void 0 : s.anim) && F(!1), o && p(!0), _ && _(), E && E();
                                },
                            });
                        return n().createElement(
                            'div',
                            {
                                className: D()(
                                    'NumberAnimation_base_f8',
                                    null == s ? void 0 : s.base,
                                    A && (null == s ? void 0 : s.anim),
                                    B && 'NumberAnimation_base__finalBounce_17',
                                ),
                            },
                            e,
                            l
                                ? Bu(u)
                                : n().createElement(
                                      P.animated.div,
                                      null,
                                      h.val.to((e) => Bu(e)),
                                  ),
                        );
                    });
                let pu;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(pu || (pu = {}));
                const hu = 'tooltip_watched';
                let Cu;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(Cu || (Cu = {}));
                const fu = ['action', 'timeLimit'],
                    bu = () => Date.now(),
                    vu = (e, u) => {
                        const t = ((e, u) => {
                                const t = (0, a.useCallback)(
                                    (t, a = pu.Info, n) => {
                                        n || (n = {}),
                                            Object.keys(n).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: e,
                                                    group: u,
                                                    action: t,
                                                    logLevel: a,
                                                    params: JSON.stringify(n),
                                                });
                                    },
                                    [e, u],
                                );
                                return (e, u, a) => t(e, u, a);
                            })(e, u),
                            n = (0, a.useRef)(new Map()),
                            r = (0, a.useRef)(new Map()),
                            i = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = n.current.get(e);
                                    (void 0 !== u && u > 0) || n.current.set(e, bu());
                                },
                                [n],
                            ),
                            s = (0, a.useCallback)(() => {
                                n.current.clear(), r.current.clear();
                            }, [n, r]),
                            o = (0, a.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== n.current.get(e) &&
                                        void 0 === r.current.get(e) &&
                                        r.current.set(e, bu());
                                },
                                [n, r],
                            ),
                            l = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = n.current.get(e);
                                    if (void 0 === u) return;
                                    const t = r.current.get(e);
                                    if (void 0 === t) return;
                                    r.current.delete(e);
                                    const a = bu() - t;
                                    n.current.set(e, u + a);
                                },
                                [n, r],
                            ),
                            c = (0, a.useCallback)(
                                (e, u = 0, a, i) => {
                                    const s = n.current.get(e);
                                    if (void 0 === s) return;
                                    void 0 !== r.current.get(e) && l(e), n.current.delete(e);
                                    const o = (bu() - s) / 1e3;
                                    o <= u ||
                                        ((i = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(i, o)),
                                        t(e, a, i));
                                },
                                [n, r, t, l],
                            );
                        return [(e) => i(e), (e, u, t, a) => c(e, u, t, a), () => s(), (e) => o(e), (e) => l(e)];
                    };
                let yu, wu, Ru;
                !(function (e) {
                    (e.StoryMode = 'story_mode'), (e.Onboarding = 'onboarding');
                })(yu || (yu = {})),
                    (function (e) {
                        e.Watched = 'watched';
                    })(wu || (wu = {})),
                    (function (e) {
                        (e.MissionSelection = 'mission_selection_window'),
                            (e.MssVehicleTooltip = 'mss_vehicle_tooltip'),
                            (e.Congratulations = 'congratulations_window'),
                            (e.Achievement = 'achievement'),
                            (e.BattleResult = 'battle_result'),
                            (e.BattleResultStatTooltip = 'battle_result_stat_tooltip');
                    })(Ru || (Ru = {}));
                const Tu = 'BattleResultProgress_base_47',
                    Su = 'BattleResultProgress_base__withRewards_cd';
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                const Lu = R.images.story_mode.gui.maps.icons.battleResult.icons,
                    xu = (0, a.memo)(
                        ({
                            icon: e,
                            index: u,
                            isAnimCanceled: t,
                            value: r,
                            name: i,
                            stat: s,
                            isWithRewards: o,
                            isVictory: l,
                            hasRewards: c,
                        }) => {
                            const E = v().mediaSize >= C.Medium ? Lu.large.$dyn(e) : Lu.$dyn(e),
                                d = ((e, u) => {
                                    const t = ((e) => {
                                            const u = vu(e, 'metrics'),
                                                t = u[0],
                                                n = u[1],
                                                r = u[2],
                                                i = u[3],
                                                s = u[4],
                                                o = (0, a.useCallback)(
                                                    (e) => {
                                                        const u = e.action,
                                                            t = e.timeLimit,
                                                            a = e.logLevel;
                                                        n(
                                                            u,
                                                            t,
                                                            a,
                                                            (({
                                                                partnerID: e,
                                                                item: u,
                                                                parentScreen: t,
                                                                itemState: a,
                                                                info: n,
                                                            }) => ({
                                                                item: u,
                                                                partnerID: e || null,
                                                                parent_screen: t || null,
                                                                item_state: a || null,
                                                                additional_info: n || null,
                                                            }))(e),
                                                        );
                                                    },
                                                    [n],
                                                );
                                            return [(e) => t(e), (e) => o(e), () => r(), (e) => i(e), (e) => s(e)];
                                        })(e),
                                        n = t[0],
                                        r = t[1],
                                        i = u.action,
                                        s = u.timeLimit,
                                        o = (function (e, u) {
                                            if (null == e) return {};
                                            var t,
                                                a,
                                                n = {},
                                                r = Object.keys(e);
                                            for (a = 0; a < r.length; a++)
                                                (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                            return n;
                                        })(u, fu);
                                    return (0, a.useMemo)(
                                        () => ({
                                            onShow: () => n(i || hu),
                                            onHide: () => r(Object.assign({ action: i || hu, timeLimit: s || 2 }, o)),
                                        }),
                                        [i, s, o, n, r],
                                    );
                                })(yu.StoryMode, {
                                    action: wu.Watched,
                                    item: Ru.BattleResultStatTooltip,
                                    parentScreen: Ru.BattleResult,
                                    timeLimit: 2,
                                }),
                                _ = Eu(tu.PROGRESS_ITEM, l, c).delay;
                            return n().createElement(
                                se,
                                Ou(
                                    {
                                        contentId: R.views.story_mode.lobby.BattleResultStatTooltip('resId'),
                                        args: { stat: s },
                                    },
                                    d,
                                ),
                                n().createElement(
                                    'div',
                                    { className: D()(Tu, o && Su) },
                                    n().createElement(
                                        j,
                                        Ou(
                                            { isCanceled: t, className: D()(Tu, o && Su) },
                                            Object.assign({}, Eu(tu.PROGRESS_ITEM, l, c), { delay: _ + nu * u }),
                                        ),
                                        n().createElement('div', {
                                            className: 'BattleResultProgress_icon_60',
                                            style: { backgroundImage: `url(${E})` },
                                        }),
                                        n().createElement(
                                            Du,
                                            Ou(
                                                {
                                                    classNames: { base: 'BattleResultProgress_value_fc' },
                                                    currentNumber: r,
                                                },
                                                Object.assign({}, lu[ou.PERSONAL_SCORE], { delay: _ + 150 + nu * u }),
                                                { isCanceled: t },
                                            ),
                                        ),
                                        n().createElement(He, {
                                            classMix: 'BattleResultProgress_name_c2',
                                            text: i,
                                            justifyContent: pe.Center,
                                        }),
                                    ),
                                ),
                            );
                        },
                    );
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Iu = (0, Ge.Pi)(({ isAnimCanceled: e }) => {
                    const u = Je().model,
                        t = u.computes.getHasRewards(),
                        a = u.root.isVictory.get();
                    return n().createElement(
                        n().Fragment,
                        null,
                        n().createElement(
                            j,
                            ku({ isCanceled: e, className: D()(Tu, t && Su) }, Eu(tu.PROGRESS_ITEM, a, t)),
                            n().createElement(Fu, null),
                        ),
                        Ye(u.progressLevels.get(), (u, r) =>
                            n().createElement(
                                xu,
                                ku(
                                    {
                                        key: `${u.icon}_${r}`,
                                        index: r + 1,
                                        isAnimCanceled: e,
                                        isWithRewards: t,
                                        isVictory: a,
                                        hasRewards: t,
                                    },
                                    u,
                                ),
                            ),
                        ),
                    );
                });
                let Nu, Mu, Pu, Uu, Hu, Gu, Wu;
                var ju;
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
                })(Nu || (Nu = {})),
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
                    })(Mu || (Mu = {})),
                    ((ju = Pu || (Pu = {})).Big = 'big'),
                    (ju.Small = 'small'),
                    (ju.Mini = 'mini'),
                    (ju.S600x450 = 's600x450'),
                    (ju.S400x300 = 's400x300'),
                    (ju.S296x222 = 's296x222'),
                    (ju.S232x174 = 's232x174'),
                    (ju.S180x135 = 's180x135'),
                    (ju.S128x100 = 's128x100'),
                    (ju.S80x80 = 's80x80'),
                    (ju.S64x64 = 's64x64'),
                    (ju.S48x48 = 's48x48'),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Uu || (Uu = {})),
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
                    })(Hu || (Hu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Gu || (Gu = {})),
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
                    })(Wu || (Wu = {}));
                class Vu extends n().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? ue.B3.GOLD : ue.B3.INTEGRAL;
                        const u = ue.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Vu.defaultProps = { format: 'integral' };
                const $u = [
                        Nu.Items,
                        Nu.Equipment,
                        Nu.Xp,
                        Nu.XpFactor,
                        Nu.Blueprints,
                        Nu.BlueprintsAny,
                        Nu.Goodies,
                        Nu.Berths,
                        Nu.Slots,
                        Nu.Tokens,
                        Nu.CrewSkins,
                        Nu.CrewBooks,
                        Nu.Customizations,
                        Nu.CreditsFactor,
                        Nu.TankmenXp,
                        Nu.TankmenXpFactor,
                        Nu.FreeXpFactor,
                        Nu.BattleToken,
                        Nu.PremiumUniversal,
                        Nu.NaturalCover,
                        Nu.BpCoin,
                        Nu.BattlePassSelectToken,
                        Nu.BattlaPassFinalAchievement,
                        Nu.BattleBadge,
                        Nu.BonusX5,
                        Nu.CrewBonusX3,
                        Nu.NewYearInvoice,
                        Nu.EpicSelectToken,
                        Nu.Comp7TokenWeeklyReward,
                        Nu.DeluxeGift,
                        Nu.BattleBoosterGift,
                        Nu.OptionalDevice,
                    ],
                    Yu = [Nu.Gold, Nu.Credits, Nu.Crystal, Nu.FreeXp],
                    zu = [Nu.BattlePassPoints, Nu.EquipCoin],
                    qu = [Nu.PremiumPlus, Nu.Premium],
                    Xu = (e, u, t) => {
                        const a = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            a,
                            t,
                        );
                    },
                    Ku = [Pu.Small, Pu.Big],
                    Qu = {
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
                        timer: 'Reward_timer_d3',
                    },
                    Zu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = Pu.Big,
                        special: r,
                        value: i,
                        valueType: s,
                        style: o,
                        className: l,
                        classNames: c,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const _ = ((e, u) => {
                                if (void 0 === u || !Ku.includes(e)) return null;
                                switch (u) {
                                    case Hu.BATTLE_BOOSTER:
                                    case Hu.BATTLE_BOOSTER_REPLACE:
                                        return Gu.BATTLE_BOOSTER;
                                }
                            })(a, r),
                            m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Hu.BATTLE_BOOSTER:
                                        return Wu.BATTLE_BOOSTER;
                                    case Hu.BATTLE_BOOSTER_REPLACE:
                                        return Wu.BATTLE_BOOSTER_REPLACE;
                                    case Hu.BUILT_IN_EQUIPMENT:
                                        return Wu.BUILT_IN_EQUIPMENT;
                                    case Hu.EQUIPMENT_PLUS:
                                        return Wu.EQUIPMENT_PLUS;
                                    case Hu.EQUIPMENT_TROPHY_BASIC:
                                        return Wu.EQUIPMENT_TROPHY_BASIC;
                                    case Hu.EQUIPMENT_TROPHY_UPGRADED:
                                        return Wu.EQUIPMENT_TROPHY_UPGRADED;
                                    case Hu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Wu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Hu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Wu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Hu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Wu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Hu.PROGRESSION_STYLE_UPGRADED_1:
                                        return Wu.PROGRESSION_STYLE_UPGRADED_1;
                                    case Hu.PROGRESSION_STYLE_UPGRADED_2:
                                        return Wu.PROGRESSION_STYLE_UPGRADED_2;
                                    case Hu.PROGRESSION_STYLE_UPGRADED_3:
                                        return Wu.PROGRESSION_STYLE_UPGRADED_3;
                                    case Hu.PROGRESSION_STYLE_UPGRADED_4:
                                        return Wu.PROGRESSION_STYLE_UPGRADED_4;
                                    case Hu.PROGRESSION_STYLE_UPGRADED_5:
                                        return Wu.PROGRESSION_STYLE_UPGRADED_5;
                                    case Hu.PROGRESSION_STYLE_UPGRADED_6:
                                        return Wu.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(r),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Uu.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Uu.CURRENCY:
                                    case Uu.NUMBER:
                                        return n().createElement(Vu, { format: 'integral', value: Number(e) });
                                    case Uu.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(i, s);
                        return n().createElement(
                            'div',
                            { className: D()(Qu.base, Qu[`base__${a}`], l), style: o },
                            n().createElement(
                                Fe,
                                { tooltipArgs: E, className: Qu.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: D()(Qu.image, null == c ? void 0 : c.image) },
                                        _ &&
                                            n().createElement('div', {
                                                className: D()(Qu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            n().createElement('div', {
                                                className: D()(Qu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        m &&
                                            n().createElement('div', {
                                                className: D()(Qu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${m}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: D()(
                                                    Qu.info,
                                                    Qu[`info__${e}`],
                                                    s === Uu.MULTI && Qu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                n().createElement(
                                    Fe,
                                    { tooltipArgs: d },
                                    n().createElement('div', {
                                        className: D()(Qu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Ju = (e) => e.replace(/\s+/g, '').replace(',', '').replace('.', ''),
                    et = (e, u) => {
                        if (void 0 === e) return e;
                        switch (u) {
                            case Uu.MULTI:
                                return e.substring(1);
                            case Uu.CURRENCY:
                            case Uu.NUMBER:
                                return Ju(e);
                            default:
                                return e;
                        }
                    },
                    ut = {
                        base: 'MainReward_base_1f',
                        value: 'MainReward_value_1d',
                        value__freeXP: 'MainReward_value__freeXP_8c',
                        value__credits: 'MainReward_value__credits_ff',
                        icon: 'MainReward_icon_6a',
                    };
                function tt() {
                    return (
                        (tt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        tt.apply(this, arguments)
                    );
                }
                const at = { [Pu.Big]: 80, [Pu.Small]: 48 },
                    nt = (0, Ge.Pi)(
                        ({ icon: e, name: u, index: t, isAnimCanceled: a, iconSize: r, value: i, tooltipArgs: s }) => {
                            const o = Je().model,
                                l = o.root.isVictory.get(),
                                c = o.computes.getHasRewards(),
                                E = Eu(tu.REWARD_MAIN, l, c).delay,
                                d = v().mediaSize >= C.Medium ? 36 : 18;
                            return n().createElement(
                                j,
                                tt({ isCanceled: a, className: ut.base }, Eu(tu.REWARD_COUNT_FINISH, l, c)),
                                n().createElement(
                                    Fe,
                                    { tooltipArgs: s, className: ut.tooltipWrapper },
                                    n().createElement(
                                        'div',
                                        { className: ut.base },
                                        n().createElement(
                                            'div',
                                            { className: ut.value, style: { width: `${String(i).length * d + d}rem` } },
                                            n().createElement(
                                                Du,
                                                tt(
                                                    {
                                                        classNames: { base: D()(ut.value, ut[`value__${u}`]) },
                                                        currentNumber: i,
                                                    },
                                                    Object.assign({}, lu[ou.MAIN_SCORE], { delay: E + 150 + nu * t }),
                                                    { isCanceled: a },
                                                ),
                                            ),
                                        ),
                                        n().createElement('div', {
                                            className: ut.icon,
                                            style: {
                                                backgroundImage: `url(${e})`,
                                                width: `${at[r]}rem`,
                                                height: `${at[r]}rem`,
                                            },
                                        }),
                                    ),
                                ),
                            );
                        },
                    );
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const it = (e, u) => `R.images.gui.maps.icons.quests.bonuses.${u}.${e}`,
                    st = (0, Ge.Pi)(({ isAnimCanceled: e }) => {
                        const u = Je().model,
                            t = u.root.isVictory.get(),
                            r = u.computes.getHasRewards(),
                            i = v().mediaSize >= C.Medium ? Pu.Big : Pu.Small,
                            s = u.computes.getXPReward(),
                            o = u.computes.getCreditsReward(),
                            l = Eu(tu.REWARD_MAIN, t, r).delay,
                            c = Eu(tu.REWARD_ITEM, t, r).delay,
                            E = (0, a.useCallback)(() => {
                                V('gui_hangar_award_random_appear');
                            }, []);
                        return n().createElement(
                            'div',
                            { className: 'BattleResultRewards_base_ae' },
                            n().createElement(
                                j,
                                rt({ isCanceled: e }, Eu(tu.REWARD_RIBBON, t, r)),
                                n().createElement('div', { className: 'BattleResultRewards_ribbon_78' }),
                            ),
                            n().createElement(
                                'div',
                                { className: 'BattleResultRewards_rewards_c2' },
                                n().createElement(
                                    'div',
                                    { className: 'BattleResultRewards_main_69' },
                                    s &&
                                        n().createElement(
                                            j,
                                            rt(
                                                { isCanceled: e },
                                                Object.assign({}, Eu(tu.REWARD_MAIN, t, r), { delay: l }),
                                            ),
                                            n().createElement(nt, {
                                                icon: it(s.icon, i),
                                                name: s.icon,
                                                index: 0,
                                                iconSize: i,
                                                value: parseInt(Ju(s.value)),
                                                isAnimCanceled: e,
                                                tooltipArgs: Xu({ tooltipId: s.tooltipId }, Number(s.tooltipContentId)),
                                            }),
                                        ),
                                    o &&
                                        n().createElement(
                                            j,
                                            rt(
                                                { isCanceled: e },
                                                Object.assign({}, Eu(tu.REWARD_MAIN, t, r), { delay: l + nu }),
                                            ),
                                            n().createElement(nt, {
                                                icon: it(o.icon, i),
                                                name: o.icon,
                                                index: 1,
                                                iconSize: i,
                                                value: parseInt(Ju(o.value)),
                                                isAnimCanceled: e,
                                                tooltipArgs: Xu({ tooltipId: o.tooltipId }, Number(o.tooltipContentId)),
                                            }),
                                        ),
                                ),
                                u.computes.getHasOtherRewards() &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            j,
                                            rt({ isCanceled: e }, Eu(tu.REWARD_TXT, t, r)),
                                            n().createElement(
                                                'div',
                                                { className: 'BattleResultRewards_otherText_4c' },
                                                R.strings.sm_lobby.battleResult.rewards.other(),
                                            ),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: 'BattleResultRewards_other_01' },
                                            Ye(u.computes.getOtherRewards(), (u, a) => {
                                                const s =
                                                    ((o = u.name),
                                                    $u.includes(o)
                                                        ? Uu.MULTI
                                                        : Yu.includes(o)
                                                          ? Uu.CURRENCY
                                                          : zu.includes(o)
                                                            ? Uu.NUMBER
                                                            : qu.includes(o)
                                                              ? Uu.PREMIUM_PLUS
                                                              : Uu.STRING);
                                                var o;
                                                return n().createElement(
                                                    j,
                                                    rt(
                                                        {
                                                            key: `${u.name}${a}`,
                                                            className: 'BattleResultRewards_otherRewards_cc',
                                                        },
                                                        Object.assign({}, Eu(tu.REWARD_ITEM, t, r), {
                                                            delay: c + nu * a,
                                                        }),
                                                        { isCanceled: e, onStart: E },
                                                    ),
                                                    n().createElement(
                                                        Zu,
                                                        rt({}, u, {
                                                            value: et(u.value, s),
                                                            image: it(u.icon, i),
                                                            valueType: s,
                                                            size: i,
                                                            tooltipArgs: Xu(
                                                                { tooltipId: u.tooltipId },
                                                                Number(u.tooltipContentId),
                                                            ),
                                                        }),
                                                    ),
                                                );
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    ot = R.images.story_mode.gui.maps.icons.battleResult.vehicle,
                    lt = R.images.story_mode.gui.maps.icons.battleResult.vehicle.large,
                    ct = (e, u) => e.$dyn(`vehicle_${u}`) || e.$dyn('vehicle'),
                    Et = (0, Ge.Pi)(() => {
                        const e = v().mediaSize,
                            u = Je().model,
                            t = u.root.missionId.get();
                        return n().createElement(
                            'div',
                            {
                                className: D()(
                                    'BattleResultVehicle_base_03',
                                    u.root.isVictory.get() && 'BattleResultVehicle_base__victory_20',
                                ),
                            },
                            n().createElement('div', { className: 'BattleResultVehicle_back_97' }),
                            n().createElement('div', {
                                className: 'BattleResultVehicle_vehicle_19',
                                style: { backgroundImage: `url(${e < C.Large ? ct(ot, t) : ct(lt, t)})` },
                            }),
                            n().createElement('div', { className: 'BattleResultVehicle_fore_23' }),
                        );
                    }),
                    dt = {
                        base: 'BattleResultViewApp_base_15',
                        sparks: 'BattleResultViewApp_sparks_7e',
                        shatter: 'BattleResultViewApp_shatter_a2',
                        back: 'BattleResultViewApp_back_f2',
                        base__victory: 'BattleResultViewApp_base__victory_bd',
                        shadowCenter: 'BattleResultViewApp_shadowCenter_fd',
                        titleGlow: 'BattleResultViewApp_titleGlow_05',
                        flash: 'BattleResultViewApp_flash_bb',
                        container: 'BattleResultViewApp_container_b8',
                        title: 'BattleResultViewApp_title_0e',
                        subTitle: 'BattleResultViewApp_subTitle_7b',
                        close: 'BattleResultViewApp_close_41',
                        buttonWrapper: 'BattleResultViewApp_buttonWrapper_b4',
                        button: 'BattleResultViewApp_button_cf',
                        footer: 'BattleResultViewApp_footer_0e',
                        infoName: 'BattleResultViewApp_infoName_6e',
                        infoDescription: 'BattleResultViewApp_infoDescription_bc',
                        vehicleName: 'BattleResultViewApp_vehicleName_7a',
                        playerStatus: 'BattleResultViewApp_playerStatus_ae',
                        centerBlock: 'BattleResultViewApp_centerBlock_d9',
                        progress: 'BattleResultViewApp_progress_a6',
                    };
                function _t() {
                    return (
                        (_t =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        _t.apply(this, arguments)
                    );
                }
                const mt = R.images.story_mode.gui.maps.icons.common,
                    At = (0, Ge.Pi)(() => {
                        const e = Je(),
                            u = e.controls,
                            t = e.model,
                            r = (0, a.useState)(!1),
                            i = r[0],
                            s = r[1],
                            o = t.root.isVictory.get(),
                            l = t.root.isDifficult.get(),
                            c = t.computes.getHasRewards(),
                            E = t.root.isEvent.get(),
                            d = t.missionProgress.get().value > 0;
                        ae(ee.n.ESCAPE, u.exit);
                        const _ = (0, a.useCallback)(() => {
                                V(o ? 'gui_hangar_award_banner' : 'gui_hangar_award_woosh');
                            }, [o]),
                            m = (0, a.useCallback)(() => {
                                o || V('gui_hangar_award_banner');
                            }, [o]);
                        return n().createElement(
                            'div',
                            { className: D()(dt.base, o && dt.base__victory), onClick: () => s(!0) },
                            n().createElement(M, {
                                backgroundPath: E
                                    ? mt.backgrounds_event_result.$dyn(o ? 'win' : 'loss')
                                    : mt.backgrounds.$num(t.root.missionId.get()),
                                showBlur: !E,
                                showVignette: !E,
                            }),
                            !E &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: dt.back }),
                                    n().createElement('div', { className: dt.sparks }),
                                    n().createElement('div', { className: dt.shadowCenter }),
                                ),
                            ((e, u) => !e || (e && !u))(E, o) &&
                                n().createElement(
                                    j,
                                    _t({ isCanceled: i, className: dt.titleGlow }, Eu(tu.TITLE_GLOW, o, c)),
                                ),
                            n().createElement(
                                j,
                                _t({ isCanceled: i, className: dt.container }, Eu(tu.TITLE, o, c), { onStart: _ }),
                                n().createElement('div', { className: dt.title }, t.root.title.get()),
                            ),
                            n().createElement(
                                j,
                                _t({ isCanceled: i, className: dt.container }, Eu(tu.SUB_TITLE, o, c)),
                                n().createElement('div', { className: dt.subTitle }, t.root.subTitle.get()),
                            ),
                            o && n().createElement(j, _t({ isCanceled: i, className: dt.flash }, Eu(tu.FLASH, o, c))),
                            n().createElement(
                                'div',
                                { className: dt.centerBlock },
                                n().createElement(
                                    'div',
                                    { className: D()(dt.progress, c && dt.progress__withRewards) },
                                    n().createElement(Iu, { isAnimCanceled: i }),
                                ),
                                c && n().createElement(st, { isAnimCanceled: i }),
                            ),
                            n().createElement(
                                j,
                                _t({ isCanceled: i, className: dt.footer }, Eu(tu.FOOTER, o, c)),
                                n().createElement(
                                    'div',
                                    { className: dt.footer },
                                    n().createElement('div', { className: dt.infoName }, t.root.infoName.get()),
                                    n().createElement(
                                        'div',
                                        { className: dt.infoDescription },
                                        t.root.infoDescription.get(),
                                    ),
                                    n().createElement(
                                        j,
                                        _t({ isCanceled: i, className: dt.footer }, Eu(tu.IMG, o, c), { onStart: m }),
                                        n().createElement(Et, null),
                                    ),
                                    n().createElement(He, { classMix: dt.vehicleName, text: t.root.vehicleName.get() }),
                                    n().createElement(He, {
                                        classMix: dt.playerStatus,
                                        text: t.root.playerStatus.get(),
                                    }),
                                    l && d && n().createElement(_u, null),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: dt.close },
                                n().createElement(J, {
                                    caption: R.strings.sm_lobby.battleResult.closeButton(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: u.exit,
                                }),
                            ),
                            n().createElement(
                                j,
                                _t({ isCanceled: i, className: dt.buttonWrapper }, Eu(tu.BUTTON, o, c)),
                                n().createElement(
                                    X,
                                    { type: Y.primary, size: z.medium, mixClass: dt.button, onClick: u.continue },
                                    R.strings.sm_lobby.battleResult.continueButton(),
                                ),
                            ),
                            n().createElement(j, _t({ isCanceled: i, className: dt.shatter }, Eu(tu.SHUTTER, o, c))),
                        );
                    });
                engine.whenReady.then(() => {
                    N().render(
                        n().createElement(Ze, null, n().createElement(k, null, n().createElement(At, null))),
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], r = !0, i = 0; i < u.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, a];
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
        (__webpack_require__.j = 580),
        (() => {
            var e = { 580: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, i, s] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        (n = r[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(6345));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
