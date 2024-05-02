(() => {
    var __webpack_modules__ = {
            926: (u) => {
                u.exports = {
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
            527: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, { mouse: () => o, off: () => l, on: () => s, onResize: () => i, onScaleUpdated: () => n });
                var a = t(2472),
                    r = t(1176);
                const i = (0, a.E)('clientResized'),
                    n = (0, a.E)('self.onScaleUpdated'),
                    s = (u, e) => engine.on(u, e),
                    l = (u, e) => engine.off(u, e),
                    E = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    o = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, r.R)(!0);
                        }
                        function a() {
                            u.enabled
                                ? u.listeners < 1
                                    ? ((u.initialized = !1),
                                      document.body.removeEventListener('mouseenter', e),
                                      document.body.removeEventListener('mouseleave', t))
                                    : u.initialized ||
                                      ((u.initialized = !0),
                                      document.body.addEventListener('mouseenter', e),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, r.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let r = !0;
                                        const i = `mouse${e}`,
                                            n = E[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            a(),
                                            () => {
                                                r &&
                                                    (n(),
                                                    window.removeEventListener(i, s),
                                                    (u.listeners -= 1),
                                                    a(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                (u.enabled = !1), a();
                            },
                            enable() {
                                (u.enabled = !0), a();
                            },
                            enableOutside() {
                                u.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                u.enabled && (0, r.R)(!1);
                            },
                        });
                    })();
            },
            5959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => a,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => n,
                    });
                var a = t(527);
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const n = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function a(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => a });
            },
            2472: (u, e, t) => {
                'use strict';
                function a(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => a });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => r });
                var a = t(5959);
                const r = { view: t(7641), client: a };
            },
            3722: (u, e, t) => {
                'use strict';
                function a(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function r(u, e, t) {
                    return `url(${a(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => r, getTextureUrl: () => a });
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => r });
                var a = t(2472);
                const r = {
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
            7641: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => o,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => b,
                        events: () => i.U,
                        extraSize: () => p,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => E,
                        getDisplayStatus: () => f,
                        getScale: () => D,
                        getSize: () => F,
                        getViewGlobalPosition: () => c,
                        isEventHandled: () => v,
                        isFocused: () => h,
                        pxToRem: () => B,
                        remToPx: () => m,
                        resize: () => d,
                        sendEvent: () => n.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => x,
                    });
                var a = t(3722),
                    r = t(6112),
                    i = t(6538),
                    n = t(8566);
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function E(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function o(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function A(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function c(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: m(e.x), y: m(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function B(u) {
                    return viewEnv.pxToRem(u);
                }
                function m(u) {
                    return viewEnv.remToPx(u);
                }
                function C(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(r.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
                        {},
                    ),
                    p = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    x = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : i.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => i });
                const a = ['args'],
                    r = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const i = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        r = {},
                                        i = Object.keys(u);
                                    for (a = 0; a < i.length; a++) (t = i[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    i = {
                        close(u) {
                            r('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(u) {
                            r(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
                'use strict';
                let a, r;
                t.d(e, { n: () => a }),
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
                    })(a || (a = {})),
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
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => i });
                var a = t(3138);
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
                    addCallback(u, e, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(u, t, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", u),
                            i
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const a = this._callbacks[t];
                            void 0 !== a && a(u, e);
                        });
                    }
                }
                r.__instance = void 0;
                const i = r;
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
            9916: (u, e, t) => {
                'use strict';
                t.d(e, { Sw: () => i.Z, ry: () => m, Eu: () => C });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let a = u.target;
                                    do {
                                        if (a === e) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            a = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== a)),
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
                const r = a;
                var i = t(1358),
                    n = t(8613);
                let s;
                var l;
                ((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    c = t(3138);
                const _ = ['args'];
                function D(u, e, t, a, r, i, n) {
                    try {
                        var s = u[i](n),
                            l = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(l) : Promise.resolve(l).then(a, r);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    m = (function () {
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
                                        t = arguments;
                                    return new Promise(function (a, r) {
                                        var i = u.apply(e, t);
                                        function n(u) {
                                            D(i, a, r, n, s, 'next', u);
                                        }
                                        function s(u) {
                                            D(i, a, r, n, s, 'throw', u);
                                        }
                                        n(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    h = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        r = {},
                                        i = Object.keys(u);
                                    for (a = 0; a < i.length; a++) (t = i[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, _);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    g = () => h(s.CLOSE),
                    v = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var w = t(7572);
                const f = r.instance,
                    b = {
                        DataTracker: i.Z,
                        ViewModel: w.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: o,
                        TimeFormatType: A,
                        DateFormatType: F,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => h(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, r = R.invalid('resId'), i) => {
                            const n = c.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                E = l.x,
                                o = l.y,
                                A = l.width,
                                F = l.height,
                                d = {
                                    x: c.O.view.pxToRem(E) + n.x,
                                    y: c.O.view.pxToRem(o) + n.y,
                                    width: c.O.view.pxToRem(A),
                                    height: c.O.view.pxToRem(F),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: B(d),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => v(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            v(u, g);
                        },
                        handleViewEvent: h,
                        onBindingsReady: m,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const a in e)
                                if (Object.prototype.hasOwnProperty.call(e, a)) {
                                    const r = Object.prototype.toString.call(e[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[a];
                                        t[a] = [];
                                        for (let e = 0; e < r.length; e++) t[a].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = u(e[a]))
                                            : (t[a] = e[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: n.Z5,
                        UserLocale: n.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (u, e, t) => {
                'use strict';
                t.d(e, { Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    r = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
            },
            9264: (u, e, t) => {
                'use strict';
                var a = t(6179),
                    r = t.n(a),
                    i = t(493),
                    n = t.n(i);
                const s = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            a = R.invalid('resId');
                        return (
                            e &&
                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (a = window.subViews[t].id)),
                            { caller: t, stack: e, resId: a }
                        );
                    },
                    l = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    E = (u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    };
                var o = t(9916);
                const A = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    F = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    d = o.Sw.instance;
                let c;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(c || (c = {}));
                const _ = (u = 'model', e = c.Deep) => {
                    const t = (0, a.useState)(0),
                        r = (t[0], t[1]),
                        i = (0, a.useMemo)(() => s(), []),
                        n = i.caller,
                        o = i.resId,
                        _ = (0, a.useMemo)(
                            () => (window.__feature && window.__feature !== n ? `subViews.${n}.${u}` : u),
                            [n, u],
                        ),
                        D = (0, a.useState)(() =>
                            ((u) => {
                                const e = l(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return A(e) ? e.value : e;
                            })(
                                ((u) =>
                                    ((u, e) =>
                                        u.split('.').reduce((u, e) => {
                                            const t = l(`${u}.${e}`, window);
                                            return A(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                        }))(u))(_),
                            ),
                        ),
                        B = D[0],
                        m = D[1],
                        C = (0, a.useRef)(-1);
                    return (
                        E(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? c.Deep : c.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== c.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === c.Deep
                                            ? (u === B && r((u) => u + 1), m(u))
                                            : m(Object.assign([], u));
                                    },
                                    a = ((u) => {
                                        const e = ((u) => {
                                                const e = s(),
                                                    t = e.caller,
                                                    a = e.resId,
                                                    r =
                                                        window.__feature && window.__feature !== t && t
                                                            ? `subViews.${t}`
                                                            : '';
                                                return { modelPrefix: r, modelPath: F(r, ''), resId: a };
                                            })(),
                                            t = e.modelPrefix,
                                            a = u.split('.');
                                        if (a.length > 0) {
                                            const u = [a[0]];
                                            return (
                                                a.reduce((e, a) => {
                                                    const r = l(F(t, `${e}.${a}`), window);
                                                    return A(r)
                                                        ? (u.push(r.id), `${e}.${a}.value`)
                                                        : (u.push(a), `${e}.${a}`);
                                                }),
                                                u.reduce((u, e) => u + '.' + e)
                                            );
                                        }
                                        return '';
                                    })(u);
                                C.current = d.addCallback(a, t, o, e === c.Deep);
                            }
                        }),
                        (0, a.useEffect)(() => {
                            if (e !== c.None)
                                return () => {
                                    d.removeCallback(C.current, o);
                                };
                        }, [o, e]),
                        B
                    );
                };
                var D = t(6483),
                    B = t.n(D);
                function m(u) {
                    engine.call('PlaySound', u);
                }
                const C = {
                        playHighlight() {
                            m('highlight');
                        },
                        playClick() {
                            m('play');
                        },
                        playYes() {
                            m('yes1');
                        },
                    },
                    h = {
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
                let g, v;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(g || (g = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(v || (v = {}));
                const w = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: i,
                    disabled: n,
                    mixClass: s,
                    soundHover: l,
                    soundClick: E,
                    onMouseEnter: o,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: d,
                    onMouseLeave: c,
                    onClick: _,
                }) => {
                    const D = (0, a.useRef)(null),
                        C = (0, a.useState)(t),
                        v = C[0],
                        w = C[1],
                        f = (0, a.useState)(!1),
                        b = f[0],
                        p = f[1],
                        x = (0, a.useState)(!1),
                        L = x[0],
                        S = x[1],
                        y = (0, a.useCallback)(() => {
                            n || (D.current && (D.current.focus(), w(!0)));
                        }, [n]),
                        k = (0, a.useCallback)(
                            (u) => {
                                v && null !== D.current && !D.current.contains(u.target) && w(!1);
                            },
                            [v],
                        ),
                        T = (0, a.useCallback)(
                            (u) => {
                                n || (_ && _(u));
                            },
                            [n, _],
                        ),
                        M = (0, a.useCallback)(
                            (u) => {
                                n || (null !== l && m(l), o && o(u), S(!0));
                            },
                            [n, l, o],
                        ),
                        O = (0, a.useCallback)(
                            (u) => {
                                A && A(u);
                            },
                            [A],
                        ),
                        H = (0, a.useCallback)(
                            (u) => {
                                n || (d && d(u), p(!1));
                            },
                            [n, d],
                        ),
                        P = (0, a.useCallback)(
                            (u) => {
                                n || (null !== E && m(E), F && F(u), t && y(), p(!0));
                            },
                            [n, E, F, y, t],
                        ),
                        W = (0, a.useCallback)(
                            (u) => {
                                n || (c && c(u), p(!1));
                            },
                            [n, c],
                        ),
                        N = B()(
                            h.base,
                            h[`base__${i}`],
                            {
                                [h.base__disabled]: n,
                                [h[`base__${e}`]]: e,
                                [h.base__focus]: v,
                                [h.base__highlightActive]: b,
                                [h.base__firstHover]: L,
                            },
                            s,
                        ),
                        I = B()(h.state, h.state__default);
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
                            w(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: D,
                                className: N,
                                onMouseEnter: M,
                                onMouseMove: O,
                                onMouseUp: H,
                                onMouseDown: P,
                                onMouseLeave: W,
                                onClick: T,
                            },
                            i !== g.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: h.back }),
                                    r().createElement('span', { className: h.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: I },
                                r().createElement('span', { className: h.stateDisabled }),
                                r().createElement('span', { className: h.stateHighlightHover }),
                                r().createElement('span', { className: h.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: h.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                w.defaultProps = { type: g.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const f = (0, a.memo)(w);
                var b = t(3138),
                    p = t(5521);
                const x = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function L(u = p.n.NONE, e = x, t = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== p.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === u) {
                                if (!r && b.O.view.isEventHandled()) return;
                                b.O.view.setEventHandled(), e(a), t && a.stopPropagation();
                            }
                        }
                    }, [e, u, t, r]);
                }
                const S = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    y = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var k;
                function T(u, e, t) {
                    const a = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, t),
                        r = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, t),
                        i = Math.min(a, r);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
                    };
                }
                !(function (u) {
                    (u.extraLarge = 'extraLarge'),
                        (u.large = 'large'),
                        (u.medium = 'medium'),
                        (u.small = 'small'),
                        (u.extraSmall = 'extraSmall'),
                        (u.extraLargeWidth = 'extraLargeWidth'),
                        (u.largeWidth = 'largeWidth'),
                        (u.mediumWidth = 'mediumWidth'),
                        (u.smallWidth = 'smallWidth'),
                        (u.extraSmallWidth = 'extraSmallWidth'),
                        (u.extraLargeHeight = 'extraLargeHeight'),
                        (u.largeHeight = 'largeHeight'),
                        (u.mediumHeight = 'mediumHeight'),
                        (u.smallHeight = 'smallHeight'),
                        (u.extraSmallHeight = 'extraSmallHeight');
                })(k || (k = {}));
                const M = b.O.client.getSize('rem'),
                    O = M.width,
                    H = M.height,
                    P = Object.assign({ width: O, height: H }, T(O, H, y)),
                    W = (0, a.createContext)(P),
                    N = ['children'],
                    I = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(u);
                                for (a = 0; a < i.length; a++) (t = i[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, N);
                        const r = (0, a.useContext)(W),
                            i = r.extraLarge,
                            n = r.large,
                            s = r.medium,
                            l = r.small,
                            E = r.extraSmall,
                            o = r.extraLargeWidth,
                            A = r.largeWidth,
                            F = r.mediumWidth,
                            d = r.smallWidth,
                            c = r.extraSmallWidth,
                            _ = r.extraLargeHeight,
                            D = r.largeHeight,
                            B = r.mediumHeight,
                            m = r.smallHeight,
                            C = r.extraSmallHeight,
                            h = { extraLarge: _, large: D, medium: B, small: m, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return e;
                            if (t.large && n) return e;
                            if (t.medium && s) return e;
                            if (t.small && l) return e;
                            if (t.extraSmall && E) return e;
                        } else {
                            if (t.extraLargeWidth && o) return S(e, t, h);
                            if (t.largeWidth && A) return S(e, t, h);
                            if (t.mediumWidth && F) return S(e, t, h);
                            if (t.smallWidth && d) return S(e, t, h);
                            if (t.extraSmallWidth && c) return S(e, t, h);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && _) return e;
                                if (t.largeHeight && D) return e;
                                if (t.mediumHeight && B) return e;
                                if (t.smallHeight && m) return e;
                                if (t.extraSmallHeight && C) return e;
                            }
                        }
                        return null;
                    };
                (I.defaultProps = {
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
                    (0, a.memo)(I);
                const G = ({ children: u }) => {
                    const e = (0, a.useContext)(W),
                        t = (0, a.useState)(e),
                        i = t[0],
                        n = t[1],
                        s = (0, a.useCallback)((u, e) => {
                            const t = b.O.view.pxToRem(u),
                                a = b.O.view.pxToRem(e);
                            n(Object.assign({ width: t, height: a }, T(t, a, y)));
                        }, []),
                        l = (0, a.useCallback)(() => {
                            const u = b.O.client.getSize('px');
                            s(u.width, u.height);
                        }, [s]);
                    E(() => {
                        b.O.client.events.on('clientResized', s), b.O.client.events.on('self.onScaleUpdated', l);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                b.O.client.events.off('clientResized', s),
                                    b.O.client.events.off('self.onScaleUpdated', l);
                            },
                            [s, l],
                        );
                    const o = (0, a.useMemo)(() => Object.assign({}, i), [i]);
                    return r().createElement(W.Provider, { value: o }, u);
                };
                let U, V, $;
                !(function (u) {
                    (u[(u.ExtraSmall = y.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = y.small.width)] = 'Small'),
                        (u[(u.Medium = y.medium.width)] = 'Medium'),
                        (u[(u.Large = y.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = y.extraLarge.width)] = 'ExtraLarge');
                })(U || (U = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = y.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = y.small.width)] = 'Small'),
                            (u[(u.Medium = y.medium.width)] = 'Medium'),
                            (u[(u.Large = y.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = y.extraLarge.width)] = 'ExtraLarge');
                    })(V || (V = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = y.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = y.small.height)] = 'Small'),
                            (u[(u.Medium = y.medium.height)] = 'Medium'),
                            (u[(u.Large = y.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = y.extraLarge.height)] = 'ExtraLarge');
                    })($ || ($ = {}));
                const z = () => {
                    const u = (0, a.useContext)(W),
                        e = u.width,
                        t = u.height,
                        r = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return U.ExtraLarge;
                                case u.large:
                                    return U.Large;
                                case u.medium:
                                    return U.Medium;
                                case u.small:
                                    return U.Small;
                                case u.extraSmall:
                                    return U.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), U.ExtraSmall;
                            }
                        })(u),
                        i = ((u) => {
                            switch (!0) {
                                case u.extraLargeWidth:
                                    return V.ExtraLarge;
                                case u.largeWidth:
                                    return V.Large;
                                case u.mediumWidth:
                                    return V.Medium;
                                case u.smallWidth:
                                    return V.Small;
                                case u.extraSmallWidth:
                                    return V.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), V.ExtraSmall;
                            }
                        })(u),
                        n = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return $.ExtraLarge;
                                case u.largeHeight:
                                    return $.Large;
                                case u.mediumHeight:
                                    return $.Medium;
                                case u.smallHeight:
                                    return $.Small;
                                case u.extraSmallHeight:
                                    return $.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), $.ExtraSmall;
                            }
                        })(u);
                    return { mediaSize: r, mediaWidth: i, mediaHeight: n, remScreenWidth: e, remScreenHeight: t };
                };
                let j;
                t(1281),
                    (function (u) {
                        (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                    })(j || (j = {}));
                const q =
                        (new RegExp(
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
                        'DescriptionBlock_base_74'),
                    K = ({ icon: u, title: e, descr: t }) => {
                        const i = (0, a.useCallback)((u) => {
                            u.stopPropagation();
                        }, []);
                        return r().createElement(
                            'div',
                            { className: q, onClick: i },
                            r().createElement('div', { className: 'DescriptionBlock_title_41' }, e),
                            r().createElement('div', {
                                className: 'DescriptionBlock_icon_bc',
                                style: { backgroundImage: `url(${u})` },
                            }),
                            r().createElement(
                                'div',
                                { className: 'DescriptionBlock_description_cf' },
                                t && t.replace(/&nbsp;/g, ' '),
                            ),
                        );
                    },
                    Y = {
                        base: 'Slider_base_31',
                        base__carousel: 'Slider_base__carousel_7b',
                        trackWrapper: 'Slider_trackWrapper_70',
                        track: 'Slider_track_6d',
                        base__withoutAnimation: 'Slider_base__withoutAnimation_51',
                        base__withoutPointer: 'Slider_base__withoutPointer_2b',
                        slide: 'Slider_slide_aa',
                        slide__active: 'Slider_slide__active_ef',
                        slide__carousel: 'Slider_slide__carousel_05',
                        slide__beforeActive: 'Slider_slide__beforeActive_06',
                        slide__afterActive: 'Slider_slide__afterActive_fb',
                        slide__beforeActiveLarge: 'Slider_slide__beforeActiveLarge_e2',
                        slide__afterActiveLarge: 'Slider_slide__afterActiveLarge_f6',
                        slide__leftEdge: 'Slider_slide__leftEdge_62',
                        slide__leftEdgeLarge: 'Slider_slide__leftEdgeLarge_d9',
                        slide__rightEdge: 'Slider_slide__rightEdge_2e',
                        slide__rightEdgeLarge: 'Slider_slide__rightEdgeLarge_e2',
                        prev: 'Slider_prev_0e',
                        next: 'Slider_next_fd',
                        prev__disabled: 'Slider_prev__disabled_82',
                        next__disabled: 'Slider_next__disabled_6d',
                        counter: 'Slider_counter_3a',
                        base__large: 'Slider_base__large_74',
                        counter__disabled: 'Slider_counter__disabled_26',
                        counterDivider: 'Slider_counterDivider_26',
                    };
                function X(u, e, t, a, r, i, n) {
                    try {
                        var s = u[i](n),
                            l = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(l) : Promise.resolve(l).then(a, r);
                }
                function Z(u) {
                    return function () {
                        var e = this,
                            t = arguments;
                        return new Promise(function (a, r) {
                            var i = u.apply(e, t);
                            function n(u) {
                                X(i, a, r, n, s, 'next', u);
                            }
                            function s(u) {
                                X(i, a, r, n, s, 'throw', u);
                            }
                            n(void 0);
                        });
                    };
                }
                const Q = (0, a.createContext)({}),
                    J = (0, a.memo)(
                        ({
                            children: u,
                            arrowsTopPosition: e,
                            carouselMode: t,
                            disabled: i,
                            withCounter: n,
                            onPrevSlide: s,
                            onNextSlide: l,
                        }) => {
                            const E = (0, a.useRef)(null),
                                A = (0, a.useContext)(W),
                                F = A.medium || A.large || A.extraLarge,
                                d = (0, a.useState)(u),
                                c = d[0],
                                _ = d[1],
                                D = (0, a.useState)(0),
                                C = D[0],
                                h = D[1],
                                g = (0, a.useState)(0),
                                v = g[0],
                                w = g[1],
                                f = (0, a.useState)(t ? 3 : 1),
                                b = f[0],
                                x = f[1],
                                S = (0, a.useState)(!1),
                                y = S[0],
                                k = S[1],
                                T = (0, a.useState)(!1),
                                M = T[0],
                                O = T[1],
                                H = c.length,
                                R = 1 === b && !t,
                                P = b === H && !t,
                                N = 1 !== H,
                                I = (0, a.useMemo)(() => ({ isAnimationDisabled: y }), [y]),
                                G = (function () {
                                    var u = Z(function* () {
                                        if (E && E.current) {
                                            k(!0), yield (0, o.Eu)();
                                            const u = viewEnv.getScale();
                                            h(E.current.offsetWidth / u),
                                                w(E.current.querySelector(`.${Y.slide__active}`).offsetWidth / u),
                                                setTimeout(() => {
                                                    k(!1);
                                                }, 100);
                                        }
                                    });
                                    return function () {
                                        return u.apply(this, arguments);
                                    };
                                })();
                            (0, a.useEffect)(() => {
                                const e = [];
                                c.map((t) => {
                                    const a = u.find((u) => u.key === t.key);
                                    a && e.push(a);
                                }),
                                    _(e);
                            }, [u]),
                                (0, a.useEffect)(() => {
                                    if (t) {
                                        const u = c.concat();
                                        u.unshift(...u.splice(-2, c.length)), _(u);
                                    }
                                }, []),
                                (0, a.useEffect)(
                                    () => (
                                        G(),
                                        window.addEventListener('resize', G),
                                        () => {
                                            window.removeEventListener('resize', G);
                                        }
                                    ),
                                    [],
                                );
                            const U = (0, a.useCallback)(
                                    Z(function* () {
                                        R ||
                                            M ||
                                            i ||
                                            (t && O(!0),
                                            yield (0, o.Eu)(),
                                            s && s(),
                                            x(b - 1),
                                            t &&
                                                setTimeout(
                                                    Z(function* () {
                                                        k(!0);
                                                        const u = c.concat();
                                                        u.unshift(u.pop()), _(u), x(b), yield (0, o.Eu)(), k(!1), O(!1);
                                                    }),
                                                    600,
                                                ),
                                            m('play'),
                                            m('bp_glide_01'));
                                    }),
                                    [b, x, R, t, s, c, M, i],
                                ),
                                V = (0, a.useCallback)(
                                    Z(function* () {
                                        P ||
                                            M ||
                                            i ||
                                            (t && O(!0),
                                            yield (0, o.Eu)(),
                                            l && l(),
                                            x(b + 1),
                                            t &&
                                                setTimeout(
                                                    Z(function* () {
                                                        k(!0);
                                                        const u = c.concat();
                                                        u.push(u.shift()), _(u), x(b), yield (0, o.Eu)(), k(!1), O(!1);
                                                    }),
                                                    600,
                                                ),
                                            m('play'),
                                            m('bp_glide_01'));
                                    }),
                                    [b, x, P, t, l, c, M, i],
                                ),
                                $ = () => m('highlight');
                            L(p.n.ARROW_LEFT, U), L(p.n.ARROW_RIGHT, V);
                            const z = (0, a.useMemo)(() => (t ? { width: 'auto' } : { width: `${C}rem` }), [C, t]),
                                j = (0, a.useMemo)(
                                    () =>
                                        t
                                            ? { transform: `translateX(${-v * b + C / 2 + v / 2}rem)` }
                                            : { transform: `translateX(-${C * (b - 1)}rem)` },
                                    [C, v, b, t],
                                ),
                                q = (0, a.useMemo)(() => (e ? { top: e } : {}), [e]),
                                K = B()(
                                    Y.base,
                                    F && Y.base__large,
                                    t && Y.base__carousel,
                                    t && F && Y.base__carouselLarge,
                                    y && Y.base__withoutAnimation,
                                    M && Y.base__withoutPointer,
                                ),
                                X = B()(Y.prev, R && Y.prev__disabled),
                                J = B()(Y.next, P && Y.next__disabled),
                                uu = B()(Y.counter, !N && Y.counter__disabled);
                            return r().createElement(
                                'div',
                                { className: K },
                                N && r().createElement('div', { className: X, onClick: U, onMouseEnter: $, style: q }),
                                N && r().createElement('div', { className: J, onClick: V, onMouseEnter: $, style: q }),
                                n &&
                                    r().createElement(
                                        'div',
                                        { className: uu },
                                        b,
                                        r().createElement('div', { className: Y.counterDivider }, '/'),
                                        H,
                                    ),
                                r().createElement(
                                    'div',
                                    { className: Y.trackWrapper, ref: E },
                                    r().createElement(
                                        'div',
                                        { className: Y.track, style: j },
                                        c.map((u, e) => {
                                            const a = e + 2 === b,
                                                i = e === b;
                                            let n;
                                            i ? (n = V) : a && (n = U);
                                            let s = B()(Y.slide, F && Y.slide__large, e + 1 === b && Y.slide__active);
                                            return (
                                                t &&
                                                    (s = B()(
                                                        Y.slide,
                                                        Y.slide__carousel,
                                                        F && Y.slide__large,
                                                        e + 1 === b && Y.slide__active,
                                                        a && Y.slide__beforeActive,
                                                        a && F && Y.slide__beforeActiveLarge,
                                                        i && Y.slide__afterActive,
                                                        i && F && Y.slide__afterActiveLarge,
                                                        e + 2 < b && Y.slide__leftEdge,
                                                        e + 2 < b && F && Y.slide__leftEdgeLarge,
                                                        e > b && Y.slide__rightEdge,
                                                        e > b && F && Y.slide__rightEdgeLarge,
                                                    )),
                                                r().createElement(
                                                    'div',
                                                    { className: s, key: `slide-${e}`, style: z, onClick: n },
                                                    r().createElement(Q.Provider, { value: I }, u),
                                                )
                                            );
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    uu = '220rem',
                    eu = '300rem',
                    tu = { [U.ExtraSmall]: uu, [U.Small]: uu, [U.Medium]: '250rem', [U.Large]: eu, [U.ExtraLarge]: eu },
                    au = ({
                        title: u,
                        about: e,
                        buttonLabel: t,
                        slides: i,
                        onClose: n,
                        onVideo: s,
                        onViewLoaded: l,
                        backgroundLink: E = '',
                        isBlurred: o = !1,
                        classNames: A,
                    }) => {
                        const F = (0, a.useState)(!1),
                            d = F[0],
                            c = F[1],
                            _ = (0, a.useState)(!1),
                            D = _[0],
                            h = _[1],
                            w = z(),
                            b = w.mediaSize,
                            x = w.mediaWidth,
                            S = w.mediaHeight,
                            y = tu[b],
                            k = S >= $.Medium && x <= V.Small,
                            T = S <= $.Small ? v.small : v.medium,
                            M = B()(
                                'IntroView_base_b9',
                                k && 'IntroView_base__high_98',
                                d && 'IntroView_base__video_bb',
                            );
                        (0, a.useEffect)(
                            () =>
                                ((u) => {
                                    let e,
                                        t = null;
                                    return (
                                        (t = requestAnimationFrame(() => {
                                            t = requestAnimationFrame(() => {
                                                (t = null), (e = void (D || (l(), h(!0))));
                                            });
                                        })),
                                        () => {
                                            'function' == typeof e && e(), null !== t && cancelAnimationFrame(t);
                                        }
                                    );
                                })(),
                            [D, l],
                        );
                        const O = (0, a.useCallback)(() => {
                            n();
                        }, [n]);
                        var H;
                        return (
                            (0, a.useEffect)(() => {
                                if (d)
                                    return ((u, e) => {
                                        let t;
                                        const a = setTimeout(() => {
                                            s(), (t = void c(!1));
                                        }, 1e3);
                                        return () => {
                                            'function' == typeof t && t(), clearTimeout(a);
                                        };
                                    })();
                            }, [d, s]),
                            (H = O),
                            L(p.n.ESCAPE, H),
                            r().createElement(
                                'div',
                                { className: M, style: { backgroundImage: `url(${E})` } },
                                o &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', {
                                            className: 'IntroView_bg_d1',
                                            style: { backgroundImage: `url(${E})` },
                                        }),
                                        r().createElement('div', {
                                            className: B()('IntroView_shadow_d5', null == A ? void 0 : A.shadow),
                                        }),
                                    ),
                                r().createElement('span', { className: 'IntroView_title_6a' }, u),
                                r().createElement(
                                    'div',
                                    {
                                        className: 'IntroView_video_c4',
                                        onClick: () => {
                                            m('play'), c(!0);
                                        },
                                        onMouseEnter: C.playHighlight,
                                    },
                                    r().createElement('div', { className: 'IntroView_videoIcon_b2' }),
                                    r().createElement('div', { className: 'IntroView_videoText_0b' }, e),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'IntroView_content_cc' },
                                    r().createElement(
                                        J,
                                        { arrowsTopPosition: y, withCounter: !0 },
                                        i.map(
                                            ({ value: u }, e) =>
                                                u &&
                                                r().createElement(K, {
                                                    icon: u.icon,
                                                    title: u.title,
                                                    descr: u.description,
                                                    key: e,
                                                }),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'IntroView_bottomContainer_1f' },
                                    r().createElement(
                                        'div',
                                        { className: 'IntroView_buttonWrapper_bb' },
                                        r().createElement(
                                            f,
                                            { type: g.primary, size: T, mixClass: 'IntroView_close_2d', onClick: O },
                                            t,
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    ru = { shadow: 'App_shadow_33' },
                    iu = () => {
                        const u = _('model', c.None),
                            e = u.title,
                            t = u.about,
                            a = u.buttonLabel,
                            i = u.slides,
                            n = u.onClose,
                            s = u.onVideo,
                            l = u.onViewLoaded;
                        return r().createElement(au, {
                            title: e,
                            about: t,
                            buttonLabel: a,
                            slides: i,
                            onClose: n,
                            onVideo: s,
                            onViewLoaded: l,
                            backgroundLink: 'R.images.battle_royale.gui.maps.intro.chapter_common',
                            isBlurred: !0,
                            classNames: ru,
                        });
                    };
                var nu = t(926),
                    su = t.n(nu);
                const lu = ['children', 'className'];
                function Eu() {
                    return (
                        (Eu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Eu.apply(this, arguments)
                    );
                }
                const ou = {
                        [V.ExtraSmall]: '',
                        [V.Small]: su().SMALL_WIDTH,
                        [V.Medium]: `${su().SMALL_WIDTH} ${su().MEDIUM_WIDTH}`,
                        [V.Large]: `${su().SMALL_WIDTH} ${su().MEDIUM_WIDTH} ${su().LARGE_WIDTH}`,
                        [V.ExtraLarge]: `${su().SMALL_WIDTH} ${su().MEDIUM_WIDTH} ${su().LARGE_WIDTH} ${su().EXTRA_LARGE_WIDTH}`,
                    },
                    Au = {
                        [$.ExtraSmall]: '',
                        [$.Small]: su().SMALL_HEIGHT,
                        [$.Medium]: `${su().SMALL_HEIGHT} ${su().MEDIUM_HEIGHT}`,
                        [$.Large]: `${su().SMALL_HEIGHT} ${su().MEDIUM_HEIGHT} ${su().LARGE_HEIGHT}`,
                        [$.ExtraLarge]: `${su().SMALL_HEIGHT} ${su().MEDIUM_HEIGHT} ${su().LARGE_HEIGHT} ${su().EXTRA_LARGE_HEIGHT}`,
                    },
                    Fu = {
                        [U.ExtraSmall]: '',
                        [U.Small]: su().SMALL,
                        [U.Medium]: `${su().SMALL} ${su().MEDIUM}`,
                        [U.Large]: `${su().SMALL} ${su().MEDIUM} ${su().LARGE}`,
                        [U.ExtraLarge]: `${su().SMALL} ${su().MEDIUM} ${su().LARGE} ${su().EXTRA_LARGE}`,
                    },
                    du = (u) => {
                        let e = u.children,
                            t = u.className,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(u);
                                for (a = 0; a < i.length; a++) (t = i[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, lu);
                        const i = z(),
                            n = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return r().createElement('div', Eu({ className: B()(t, ou[n], Au[s], Fu[l]) }, a), e);
                    },
                    cu = ['children'],
                    _u = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(u);
                                for (a = 0; a < i.length; a++) (t = i[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, cu);
                        return r().createElement(G, null, r().createElement(du, t, e));
                    };
                engine.whenReady.then(() => {
                    n().render(
                        r().createElement(_u, null, r().createElement(iu, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, a) => {
            if (!e) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [e, t, a] = deferred[l], i = !0, n = 0; n < e.length; n++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[n]))
                            ? e.splice(n--, 1)
                            : ((i = !1), a < r && (r = a));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [e, t, a];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
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
        (__webpack_require__.j = 801),
        (() => {
            var u = { 801: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        r,
                        [i, n, s] = t,
                        l = 0;
                    if (i.some((e) => 0 !== u[e])) {
                        for (a in n) __webpack_require__.o(n, a) && (__webpack_require__.m[a] = n[a]);
                        if (s) var E = s(__webpack_require__);
                    }
                    for (e && e(t); l < i.length; l++)
                        (r = i[l]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9264));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
