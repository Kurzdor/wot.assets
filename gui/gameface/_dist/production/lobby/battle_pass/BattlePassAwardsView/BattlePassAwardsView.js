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
                    t.d(e, { mouse: () => E, off: () => o, on: () => i, onResize: () => n, onScaleUpdated: () => s });
                var a = t(2472),
                    r = t(1176);
                const n = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (u, e) => engine.on(u, e),
                    o = (u, e) => engine.off(u, e),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const E = (function () {
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
                    const n = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let r = !0;
                                    const n = `mouse${e}`,
                                        s = l[e]((u) => t([u, 'outside']));
                                    function i(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, i),
                                        a(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(n, i),
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
                    return Object.assign({}, n, {
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
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    });
                var a = t(527);
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
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
                        addModelObserver: () => E,
                        addPreloadTexture: () => i,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => v,
                        events: () => n.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => D,
                        getSize: () => A,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => m,
                        remToPx: () => B,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => T,
                    });
                var a = t(3722),
                    r = t(6112),
                    n = t(6538),
                    s = t(8566);
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function o(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function F(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function m(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function C(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(r.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
                        {},
                    ),
                    f = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    T = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : n.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => l });
                const a = ['args'];
                const r = 2,
                    n = 16,
                    s = 32,
                    i = 64,
                    o = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                s = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(u);
                                    for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, s, {
                                          arguments:
                                              ((r = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    l = {
                        close(u) {
                            o('popover' === u ? r : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(u) {
                            o(n, { isMouseEvent: !0, on: u });
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
                t.d(e, { Z: () => n });
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
                        const n = a.O.view.addModelObserver(u, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", u),
                            n
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
                const n = r;
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
                t.d(e, { B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => m });
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
                var n = t(1358);
                var s = t(8613);
                let i;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    d = t(3138);
                const F = ['args'];
                function _(u, e, t, a, r, n, s) {
                    try {
                        var i = u[n](s),
                            o = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(o) : Promise.resolve(o).then(a, r);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
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
                                        var n = u.apply(e, t);
                                        function s(u) {
                                            _(n, a, r, s, i, 'next', u);
                                        }
                                        function i(u) {
                                            _(n, a, r, s, i, 'throw', u);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(u);
                                    for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    C = () => B(i.CLOSE),
                    g = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var p = t(7572);
                const h = r.instance,
                    w = {
                        DataTracker: n.Z,
                        ViewModel: p.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: E,
                        DateFormatType: c,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => B(i.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, r = R.invalid('resId'), n) => {
                            const s = d.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                E = o.y,
                                c = o.width,
                                A = o.height,
                                F = {
                                    x: d.O.view.pxToRem(l) + s.x,
                                    y: d.O.view.pxToRem(E) + s.y,
                                    width: d.O.view.pxToRem(c),
                                    height: d.O.view.pxToRem(A),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: D(F),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, C);
                        },
                        handleViewEvent: B,
                        onBindingsReady: m,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
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
                        ClickOutsideManager: h,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = w;
            },
            8613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => n, Z5: () => a, cy: () => r });
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
                    },
                    n = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            2769: (u, e, t) => {
                'use strict';
                var a = t(6179),
                    r = t.n(a);
                const n = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var s = t(3138);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function l(u, e, t) {
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
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
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
                })(o || (o = {}));
                const E = s.O.client.getSize('rem'),
                    c = E.width,
                    A = E.height,
                    d = Object.assign({ width: c, height: A }, l(c, A, i)),
                    F = (0, a.createContext)(d),
                    _ = ['children'];
                const D = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(u);
                            for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, _);
                    const r = (0, a.useContext)(F),
                        s = r.extraLarge,
                        i = r.large,
                        o = r.medium,
                        l = r.small,
                        E = r.extraSmall,
                        c = r.extraLargeWidth,
                        A = r.largeWidth,
                        d = r.mediumWidth,
                        D = r.smallWidth,
                        m = r.extraSmallWidth,
                        B = r.extraLargeHeight,
                        C = r.largeHeight,
                        g = r.mediumHeight,
                        p = r.smallHeight,
                        h = r.extraSmallHeight,
                        w = { extraLarge: B, large: C, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return e;
                        if (t.large && i) return e;
                        if (t.medium && o) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && E) return e;
                    } else {
                        if (t.extraLargeWidth && c) return n(e, t, w);
                        if (t.largeWidth && A) return n(e, t, w);
                        if (t.mediumWidth && d) return n(e, t, w);
                        if (t.smallWidth && D) return n(e, t, w);
                        if (t.extraSmallWidth && m) return n(e, t, w);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && p) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                };
                D.defaultProps = {
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
                (0, a.memo)(D);
                const m = (u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    B = ({ children: u }) => {
                        const e = (0, a.useContext)(F),
                            t = (0, a.useState)(e),
                            n = t[0],
                            o = t[1],
                            E = (0, a.useCallback)((u, e) => {
                                const t = s.O.view.pxToRem(u),
                                    a = s.O.view.pxToRem(e);
                                o(Object.assign({ width: t, height: a }, l(t, a, i)));
                            }, []),
                            c = (0, a.useCallback)(() => {
                                const u = s.O.client.getSize('px');
                                E(u.width, u.height);
                            }, [E]);
                        m(() => {
                            s.O.client.events.on('clientResized', E), s.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    s.O.client.events.off('clientResized', E),
                                        s.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [E, c],
                            );
                        const A = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return r().createElement(F.Provider, { value: A }, u);
                    };
                var C = t(6483),
                    g = t.n(C),
                    p = t(926),
                    h = t.n(p);
                let w, b, v;
                !(function (u) {
                    (u[(u.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = i.small.width)] = 'Small'),
                        (u[(u.Medium = i.medium.width)] = 'Medium'),
                        (u[(u.Large = i.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                })(w || (w = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = i.small.width)] = 'Small'),
                            (u[(u.Medium = i.medium.width)] = 'Medium'),
                            (u[(u.Large = i.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = i.small.height)] = 'Small'),
                            (u[(u.Medium = i.medium.height)] = 'Medium'),
                            (u[(u.Large = i.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const f = () => {
                        const u = (0, a.useContext)(F),
                            e = u.width,
                            t = u.height,
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return w.ExtraLarge;
                                    case u.large:
                                        return w.Large;
                                    case u.medium:
                                        return w.Medium;
                                    case u.small:
                                        return w.Small;
                                    case u.extraSmall:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(u),
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case u.largeWidth:
                                        return b.Large;
                                    case u.mediumWidth:
                                        return b.Medium;
                                    case u.smallWidth:
                                        return b.Small;
                                    case u.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u),
                            s = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case u.largeHeight:
                                        return v.Large;
                                    case u.mediumHeight:
                                        return v.Medium;
                                    case u.smallHeight:
                                        return v.Small;
                                    case u.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: e, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const y = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL_WIDTH,
                        [b.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [b.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_HEIGHT,
                        [v.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [v.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [w.ExtraSmall]: '',
                        [w.Small]: h().SMALL,
                        [w.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [w.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [w.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    x = (u) => {
                        let e = u.children,
                            t = u.className,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(u);
                                for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, T);
                        const n = f(),
                            s = n.mediaWidth,
                            i = n.mediaHeight,
                            o = n.mediaSize;
                        return r().createElement('div', S({ className: g()(t, y[s], L[i], P[o]) }, a), e);
                    },
                    O = ['children'];
                const M = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(u);
                            for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, O);
                    return r().createElement(B, null, r().createElement(x, t, e));
                };
                var k = t(493),
                    N = t.n(k);
                let I;
                !(function (u) {
                    (u.BUY_BATTLE_PASS = 'buyBattlePassReason'),
                        (u.BUY_BATTLE_PASS_LEVELS = 'buyBattlePassLevelsReason'),
                        (u.BUY_MULTIPLE_BATTLE_PASS = 'buyMultipleBattlePassReason'),
                        (u.BUY_BATTLE_PASS_WITH_LEVELS = 'buyBattlePassWithLevelsReason'),
                        (u.STYLE_UPGRADE = 'styleUpgradeReason'),
                        (u.DEFAULT = 'defaultReason');
                })(I || (I = {}));
                function U(u) {
                    return u;
                }
                function H() {
                    return !1;
                }
                console.log;
                var G = t(9174);
                function W(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return $(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return $(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var a = 0;
                        return function () {
                            return a >= u.length ? { done: !0 } : { done: !1, value: u[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function $(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const V = (u) => (0 === u ? window : window.subViews.get(u));
                function Y(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, a) => e(null == u ? void 0 : u.value, t, a));
                }
                var q = t(3946);
                const z = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: i, children: o, mocks: l }) {
                                const E = (0, a.useRef)([]),
                                    c = (t, a, r) => {
                                        var n;
                                        const i = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = V,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? r.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = r.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const i = (u) => {
                                                    const r = t(e),
                                                        n = a.split('.').reduce((u, e) => u[e], r);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? n
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const o = 'string' == typeof n ? `${a}.${n}` : a,
                                                            l = s.O.view.addModelObserver(o, e, !0);
                                                        return r.set(l, t), u && t(i(n)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (u, e) => {
                                                        const t = i(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = i(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = W(r.keys()); !(u = t()).done; ) n(u.value, e);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(a),
                                            o =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            l = (u) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(u)) : o.readByPath(u),
                                            c = (u) => E.current.push(u),
                                            A = u({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const a = null != e ? e : l(u),
                                                            r = G.LO.box(a, { equals: H });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, G.aD)((u) => r.set(u)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const a = null != e ? e : l(u),
                                                            r = G.LO.box(a, { equals: H });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, G.aD)((u) => r.set(u)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const a = l(e);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (u, e) => ((u[e] = G.LO.box(a[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, G.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                n = Object.entries(r),
                                                                s = n.reduce(
                                                                    (u, [e, t]) => ((u[t] = G.LO.box(a[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, G.aD)((u) => {
                                                                            n.forEach(([e, t]) => {
                                                                                s[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            d = { mode: t, model: A, externalModel: o, cleanup: c };
                                        return {
                                            model: A,
                                            controls: 'mocks' === t && r ? r.controls(d) : e(d),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    A = (0, a.useRef)(!1),
                                    d = (0, a.useState)(n),
                                    F = d[0],
                                    _ = d[1],
                                    D = (0, a.useState)(() => c(n, i, l)),
                                    m = D[0],
                                    B = D[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        A.current ? B(c(F, i, l)) : (A.current = !0);
                                    }, [l, F, i]),
                                    (0, a.useEffect)(() => {
                                        _(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            m.externalModel.dispose(), E.current.forEach((u) => u());
                                        },
                                        [m],
                                    ),
                                    r().createElement(t.Provider, { value: m }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = {
                                    root: u.object(),
                                    mainRewards: u.array('mainRewards.items'),
                                    additionalRewards: u.array('additionalRewards.items'),
                                    packageRewards: u.array('packageRewards.items'),
                                    canToOpenAdditionView: G.LO.box(!1),
                                },
                                t = (0, q.Om)(() => e.root.get().reason === I.BUY_BATTLE_PASS),
                                a = (0, q.Om)(() => e.root.get().reason === I.BUY_BATTLE_PASS_WITH_LEVELS),
                                r = (0, q.Om)(() => e.root.get().reason === I.BUY_MULTIPLE_BATTLE_PASS),
                                n = (0, q.Om)(() => t() || r() || a()),
                                s = (0, q.Om)(() => e.root.get().reason === I.STYLE_UPGRADE),
                                i = (0, q.Om)(
                                    () =>
                                        n() && !e.canToOpenAdditionView.get()
                                            ? Y(e.packageRewards.get(), U)
                                            : Y(e.additionalRewards.get(), U),
                                    { equals: H },
                                ),
                                o = (0, q.Om)(() => i().length),
                                l = (0, q.Om)(() => o() > 0),
                                E = (0, q.Om)(() => Y(e.mainRewards.get(), U), { equals: H }),
                                c = (0, q.Om)(() => {
                                    const u = E();
                                    if (1 === u.length) return u;
                                    const e = [...u],
                                        t = e[0];
                                    return (e[0] = e[1]), (e[1] = t), e;
                                }),
                                A = (0, q.Om)(() => (e.root.get().isFinalReward ? c() : E())),
                                d = (0, q.Om)(() => A().length),
                                F = (0, q.Om)(() => {
                                    const u = e.root.get().isFinalReward;
                                    return 1 === d() || u;
                                }),
                                _ = (0, q.Om)(() => {
                                    const u = e.root.get().isFinalReward;
                                    return (2 !== A().length && u) || n() || s();
                                });
                            return Object.assign({}, e, {
                                computes: {
                                    isReasonBuy: t,
                                    isReasonBuyWithLevels: a,
                                    isMultiplePurchase: r,
                                    isReasonBuyCurrently: n,
                                    isReasonStyleUpgrade: s,
                                    getAdditionalRewards: i,
                                    getAdditionalRewardsLength: o,
                                    hasAdditionalRewards: l,
                                    getRewards: A,
                                    getRewardsLength: d,
                                    hasBigSizeReward: F,
                                    getFinalRewards: c,
                                    hasGlowAnimation: _,
                                },
                            });
                        },
                        ({ model: u, externalModel: e }) => ({
                            enableToOpenAdditionView: (0, G.aD)(() => {
                                u.canToOpenAdditionView.set(!0);
                            }),
                            buy: e.createCallbackNoArgs('onBuyClick'),
                            close: e.createCallbackNoArgs('onClose'),
                        }),
                    ),
                    j = z[0],
                    X = z[1];
                function K(u) {
                    engine.call('PlaySound', u);
                }
                const Q = {
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
                    Z = [
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
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        J.apply(this, arguments)
                    );
                }
                class uu extends r().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && K(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && K(this.props.soundClick);
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                u && u(e), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            a = u.goto,
                            n = u.side,
                            s = u.type,
                            i = u.classNames,
                            o = u.onMouseEnter,
                            l = u.onMouseLeave,
                            E = u.onMouseDown,
                            c = u.onMouseUp,
                            A =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(u);
                                    for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(u, Z)),
                            d = g()(Q.base, Q[`base__${s}`], Q[`base__${n}`], null == i ? void 0 : i.base),
                            F = g()(Q.icon, Q[`icon__${s}`], Q[`icon__${n}`], null == i ? void 0 : i.icon),
                            _ = g()(Q.glow, null == i ? void 0 : i.glow),
                            D = g()(Q.caption, Q[`caption__${s}`], null == i ? void 0 : i.caption),
                            m = g()(Q.goto, null == i ? void 0 : i.goto);
                        return r().createElement(
                            'div',
                            J(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== s && r().createElement('div', { className: Q.shine }),
                            r().createElement('div', { className: F }, r().createElement('div', { className: _ })),
                            r().createElement('div', { className: D }, e),
                            a && r().createElement('div', { className: m }, a),
                        );
                    }
                }
                uu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var eu = t(5521),
                    tu = t(9916);
                const au = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ru(u = eu.n.NONE, e = au, t = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== eu.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === u) {
                                if (!r && s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), e(a), t && a.stopPropagation();
                            }
                        }
                    }, [e, u, t, r]);
                }
                var nu = t(1281);
                let su;
                function iu(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function ou(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(su || (su = {}));
                const lu = (u) => u.replace(/&nbsp;/g, ' '),
                    Eu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    cu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Au = (u, e, t = su.left) => u.split(e).reduce(t === su.left ? Eu : cu, []),
                    du = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    Fu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _u = (u, e = su.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Fu.includes(t)) return du(u);
                        if ('ja' === t) {
                            return (0, nu.D4)()
                                .parse(u)
                                .map((u) => lu(u));
                        }
                        return ((u, e = su.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = lu(u);
                            return Au(r, /( )/, e).forEach((u) => (t = t.concat(Au(u, a, su.left)))), t;
                        })(u, e);
                    };
                var Du = t(3403);
                let mu, Bu, Cu, gu;
                !(function (u) {
                    (u.Micro = 'micro'), (u.Small = 'small'), (u.Medium = 'medium');
                })(mu || (mu = {})),
                    (function (u) {
                        (u.ACTIVE = 'active'), (u.COMPLETED = 'completed'), (u.NOT_CHOSEN = 'notChosen');
                    })(Bu || (Bu = {})),
                    (function (u) {
                        (u.AwaitSeason = 'awaitSeason'),
                            (u.Bought = 'bought'),
                            (u.Free = 'free'),
                            (u.Completed = 'completed'),
                            (u.CompletedRightNow = 'completedRightNow'),
                            (u.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (u.NoVehiclesBase = 'noVehiclesBase'),
                            (u.ChapterNotChosen = 'chapterNotChosen');
                    })(Cu || (Cu = {})),
                    (function (u) {
                        (u.None = ''),
                            (u.ShowLevel = 'show'),
                            (u.HideLevel = 'hide'),
                            (u.HideLevelWithDelay = 'hideWithDelay');
                    })(gu || (gu = {}));
                const pu = [114, 124, 10021],
                    hu = (u, e, t = '') => {
                        const a = t.length > 0 ? `_${t}` : t,
                            r = u.$dyn(`c_${e}${a}`),
                            n = String(e).slice(-1),
                            s = u.$dyn(`default_${n}${a}`);
                        return r || s;
                    },
                    wu = (u) => {
                        const e = R.images.gui.maps.icons.battlePass.backgrounds;
                        return u
                            ? { backgroundImage: `url(${hu(e.chapter, u)})` }
                            : { backgroundImage: `url(${e.$dyn('common')})` };
                    };
                var bu = t(801);
                let vu, fu, Tu, Ru, Su, yu, Lu;
                !(function (u) {
                    (u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (u.NewYearFillers = 'ny22Fillers'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearToyFragments = 'ny22ToyFragments'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.OptionalDevice = 'optionalDevice');
                })(vu || (vu = {})),
                    (function (u) {
                        (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement');
                    })(fu || (fu = {})),
                    (function (u) {
                        (u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S48x48 = 's48x48');
                    })(Tu || (Tu = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(Ru || (Ru = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(Su || (Su = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(yu || (yu = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(Lu || (Lu = {}));
                class Pu extends r().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = tu.B3.GOLD;
                        else u = tu.B3.INTEGRAL;
                        const e = tu.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                Pu.defaultProps = { format: 'integral' };
                const xu = [
                        vu.Items,
                        vu.Equipment,
                        vu.Xp,
                        vu.XpFactor,
                        vu.Blueprints,
                        vu.BlueprintsAny,
                        vu.Goodies,
                        vu.Berths,
                        vu.Slots,
                        vu.Tokens,
                        vu.CrewSkins,
                        vu.CrewBooks,
                        vu.Customizations,
                        vu.CreditsFactor,
                        vu.TankmenXp,
                        vu.TankmenXpFactor,
                        vu.FreeXpFactor,
                        vu.BattleToken,
                        vu.PremiumUniversal,
                        vu.NaturalCover,
                        vu.BpCoin,
                        vu.BattlePassSelectToken,
                        vu.BattlaPassFinalAchievement,
                        vu.BattleBadge,
                        vu.BonusX5,
                        vu.CrewBonusX3,
                        vu.NewYearFillers,
                        vu.NewYearInvoice,
                        vu.EpicSelectToken,
                        vu.Comp7TokenWeeklyReward,
                        vu.BattleBoosterGift,
                        vu.OptionalDevice,
                        vu.FragmentAntimatter,
                        vu.CosmicLootbox,
                    ],
                    Ou = [vu.Gold, vu.Credits, vu.Crystal, vu.FreeXp],
                    Mu = [vu.BattlePassPoints],
                    ku = [vu.PremiumPlus, vu.Premium],
                    Nu = ['engravings', 'backgrounds'],
                    Iu = ['engraving', 'background'],
                    Uu = (u, e = Tu.Small) => {
                        const t = u.name,
                            a = u.type,
                            r = u.value,
                            n = u.icon,
                            s = u.item,
                            i = u.dogTagType,
                            o = ((u) => {
                                switch (u) {
                                    case Tu.S600x450:
                                        return 'c_600x450';
                                    case Tu.S400x300:
                                        return 'c_400x300';
                                    case Tu.S296x222:
                                        return 'c_296x222';
                                    case Tu.S232x174:
                                        return 'c_232x174';
                                    case Tu.Big:
                                        return 'c_80x80';
                                    case Tu.Small:
                                        return 'c_48x48';
                                    default:
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${n}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === e
                                    ? u.iconBig.replace('..', 'img://gui')
                                    : u.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${n}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${n}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const a = Nu[u];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(a),
                                            n = r.$dyn(t);
                                        return n ? `${n}` : `${r.$dyn(Iu[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, e, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${n}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${n}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    Hu = [Tu.Small, Tu.Big],
                    Gu = [
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
                function Wu(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const $u = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: tu.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Vu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            n = u.onMouseEnter,
                            s = u.onMouseLeave,
                            i = u.onMouseDown,
                            o = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            d = u.decoratorId,
                            F = void 0 === d ? 0 : d,
                            _ = u.isEnabled,
                            D = void 0 === _ || _,
                            m = u.targetId,
                            B = void 0 === m ? 0 : m,
                            C = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(u);
                                for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, Gu);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, a.useMemo)(
                                () =>
                                    B ||
                                    ((u = 1) => {
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
                                    })().resId,
                                [B],
                            ),
                            b = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    ($u(t, F, { isMouseEvent: !0, on: !0, arguments: Wu(r) }, w),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, F, r, w, C]),
                            v = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        $u(t, F, { on: !1 }, w),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, F, w, g]),
                            f = (0, a.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const u = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', f, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === D && v();
                            }, [D, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return D
                            ? (0, a.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(b, E ? 100 : 400)),
                                                      n && n(u),
                                                      T && T(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              v(), null == s || s(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && v(), null == o || o(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && v(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var T;
                    },
                    Yu = ['children'];
                function qu() {
                    return (
                        (qu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        qu.apply(this, arguments)
                    );
                }
                const zu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(u);
                                for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, Yu);
                        return r().createElement(
                            Vu,
                            qu(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            e,
                        );
                    },
                    ju = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const Ku = R.views.common.tooltip_window.simple_tooltip_content,
                    Qu = (u) => {
                        let e = u.children,
                            t = u.body,
                            n = u.header,
                            s = u.note,
                            i = u.alert,
                            o = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(u);
                                for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, ju);
                        const E = (0, a.useMemo)(() => {
                            const u = Object.assign({}, o, { body: t, header: n, note: s, alert: i });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [i, t, n, s, o]);
                        return r().createElement(
                            Vu,
                            Xu(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? Ku.SimpleTooltipHtmlContent('resId') : Ku.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    };
                function Zu() {
                    return (
                        (Zu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Zu.apply(this, arguments)
                    );
                }
                const Ju = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const a = r().createElement('div', { className: t }, u);
                        if (e.header || e.body) return r().createElement(Qu, e, a);
                        const n = e.contentId;
                        return n ? r().createElement(Vu, Zu({}, e, { contentId: n }), a) : r().createElement(zu, e, a);
                    },
                    ue = {
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
                    ee = ({
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: a = Tu.Big,
                        special: n,
                        value: s,
                        valueType: i,
                        style: o,
                        className: l,
                        classNames: E,
                        tooltipArgs: c,
                        periodicIconTooltipArgs: A,
                    }) => {
                        const d = ((u, e) => {
                                if (void 0 === e || !Hu.includes(u)) return null;
                                switch (e) {
                                    case Su.BATTLE_BOOSTER:
                                    case Su.BATTLE_BOOSTER_REPLACE:
                                        return yu.BATTLE_BOOSTER;
                                }
                            })(a, n),
                            F = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case Su.BATTLE_BOOSTER:
                                        return Lu.BATTLE_BOOSTER;
                                    case Su.BATTLE_BOOSTER_REPLACE:
                                        return Lu.BATTLE_BOOSTER_REPLACE;
                                    case Su.BUILT_IN_EQUIPMENT:
                                        return Lu.BUILT_IN_EQUIPMENT;
                                    case Su.EQUIPMENT_PLUS:
                                        return Lu.EQUIPMENT_PLUS;
                                    case Su.EQUIPMENT_TROPHY_BASIC:
                                        return Lu.EQUIPMENT_TROPHY_BASIC;
                                    case Su.EQUIPMENT_TROPHY_UPGRADED:
                                        return Lu.EQUIPMENT_TROPHY_UPGRADED;
                                    case Su.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Lu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Su.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Lu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Su.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Lu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Su.PROGRESSION_STYLE_UPGRADED_1:
                                        return Lu.PROGRESSION_STYLE_UPGRADED_1;
                                    case Su.PROGRESSION_STYLE_UPGRADED_2:
                                        return Lu.PROGRESSION_STYLE_UPGRADED_2;
                                    case Su.PROGRESSION_STYLE_UPGRADED_3:
                                        return Lu.PROGRESSION_STYLE_UPGRADED_3;
                                    case Su.PROGRESSION_STYLE_UPGRADED_4:
                                        return Lu.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            _ = ((u, e) => {
                                if (void 0 === u) return null;
                                switch (e) {
                                    case Ru.MULTI: {
                                        const e = Number(u);
                                        return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                    }
                                    case Ru.CURRENCY:
                                    case Ru.NUMBER:
                                        return r().createElement(Pu, { format: 'integral', value: Number(u) });
                                    case Ru.PREMIUM_PLUS: {
                                        const e = Number(u);
                                        return isNaN(e) ? u : null;
                                    }
                                    default:
                                        return u;
                                }
                            })(s, i);
                        return r().createElement(
                            'div',
                            { className: g()(ue.base, ue[`base__${a}`], l), style: o },
                            r().createElement(
                                Ju,
                                { tooltipArgs: c, className: ue.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: g()(ue.image, null == E ? void 0 : E.image) },
                                        d &&
                                            r().createElement('div', {
                                                className: g()(ue.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${d}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            r().createElement('div', {
                                                className: g()(ue.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        F &&
                                            r().createElement('div', {
                                                className: g()(ue.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${F}_overlay)`,
                                                },
                                            }),
                                    ),
                                    _ &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: g()(
                                                    ue.info,
                                                    ue[`info__${u}`],
                                                    i === Ru.MULTI && ue.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            _,
                                        ),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    Ju,
                                    { tooltipArgs: A },
                                    r().createElement('div', {
                                        className: g()(ue.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var te = t(7030);
                let ae, re;
                !(function (u) {
                    (u.Active = 'active'),
                        (u.Paused = 'paused'),
                        (u.Completed = 'completed'),
                        (u.NotStarted = 'notStarted');
                })(ae || (ae = {})),
                    (function (u) {
                        (u.style = 'style'), (u.tankman = 'tankman');
                    })(re || (re = {}));
                re.style, re.tankman;
                var ne = t(8613);
                Date.now(), ne.Ew.getRegionalDateTime, ne.Ew.getFormattedDateTime;
                const se = (u) => Math.sqrt(1 - Math.pow(u - 1, 2)),
                    ie = (u, e) => {
                        if ('equipmentTrophyBasic' === e) {
                            const e = `trophyBasic${u.charAt(0).toUpperCase()}${u.slice(1)}`;
                            return { backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(e)})` };
                        }
                        return { backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(`${u}`)})` };
                    },
                    oe = 'AdditionalRewards_base_95',
                    le = 'AdditionalRewards_title_d2',
                    Ee = 'AdditionalRewards_title__updateAnimation_d7',
                    ce = 'AdditionalRewards_reward_18',
                    Ae = 'AdditionalRewards_rewardsList_52',
                    de = R.strings.battle_pass.battlePassAwardsView,
                    Fe = (0, Du.Pi)(({ rewards: u, pageNumber: e, className: t }) => {
                        const a = X().model.canToOpenAdditionView.get(),
                            n = f().mediaSize >= w.Large ? Tu.Big : Tu.Small,
                            s = 1 === e ? 1600 - (a ? 800 : 0) : 100,
                            i = (0, te.useTransition)(u, {
                                from: { opacity: 0, y: '20rem' },
                                enter: { opacity: 1, y: '0rem' },
                                trail: 100,
                                config: { duration: 300, easing: se },
                                onStart: () => K('bp_reward'),
                                delay: s,
                            });
                        return r().createElement(
                            'div',
                            { className: g()(oe, t) },
                            r().createElement('div', { className: g()(le, a && Ee) }, de.additionalRewards.subText()),
                            r().createElement(
                                'div',
                                { className: Ae },
                                i((u, e) => {
                                    const t = e.item || e.name,
                                        a = Uu(e, n),
                                        s =
                                            ((i = e.name),
                                            xu.includes(i)
                                                ? Ru.MULTI
                                                : Ou.includes(i)
                                                  ? Ru.CURRENCY
                                                  : Mu.includes(i)
                                                    ? Ru.NUMBER
                                                    : ku.includes(i)
                                                      ? Ru.PREMIUM_PLUS
                                                      : Ru.STRING);
                                    var i;
                                    const o = ((u, e, t) => {
                                        const a = e && { contentId: e };
                                        return Object.assign(
                                            {
                                                args: u,
                                                isEnabled: Boolean((u && u.tooltipId) || e),
                                                ignoreMouseClick: !0,
                                                ignoreShowDelay: !e,
                                            },
                                            a,
                                            t,
                                        );
                                    })({ tooltipId: e.tooltipId }, Number(e.tooltipContentId), { ignoreShowDelay: !0 });
                                    return r().createElement(
                                        te.animated.div,
                                        { className: ce, style: u },
                                        r().createElement(ee, {
                                            name: t,
                                            image: a,
                                            special: e.overlayType,
                                            value: e.value,
                                            valueType: s,
                                            size: n,
                                            tooltipArgs: o,
                                        }),
                                    );
                                }),
                            ),
                        );
                    }),
                    _e = {
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
                let De, me;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(De || (De = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(me || (me = {}));
                const Be = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: n,
                    disabled: s,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: c,
                    onMouseDown: A,
                    onMouseUp: d,
                    onMouseLeave: F,
                    onClick: _,
                }) => {
                    const D = (0, a.useRef)(null),
                        m = (0, a.useState)(t),
                        B = m[0],
                        C = m[1],
                        p = (0, a.useState)(!1),
                        h = p[0],
                        w = p[1],
                        b = (0, a.useState)(!1),
                        v = b[0],
                        f = b[1],
                        T = (0, a.useCallback)(() => {
                            s || (D.current && (D.current.focus(), C(!0)));
                        }, [s]),
                        S = (0, a.useCallback)(
                            (u) => {
                                B && null !== D.current && !D.current.contains(u.target) && C(!1);
                            },
                            [B],
                        ),
                        y = (0, a.useCallback)(
                            (u) => {
                                s || (_ && _(u));
                            },
                            [s, _],
                        ),
                        L = (0, a.useCallback)(
                            (u) => {
                                s || (null !== o && K(o), E && E(u), f(!0));
                            },
                            [s, o, E],
                        ),
                        P = (0, a.useCallback)(
                            (u) => {
                                c && c(u);
                            },
                            [c],
                        ),
                        x = (0, a.useCallback)(
                            (u) => {
                                s || (d && d(u), w(!1));
                            },
                            [s, d],
                        ),
                        O = (0, a.useCallback)(
                            (u) => {
                                s || (null !== l && K(l), A && A(u), t && T(), w(!0));
                            },
                            [s, l, A, T, t],
                        ),
                        M = (0, a.useCallback)(
                            (u) => {
                                s || (F && F(u), w(!1));
                            },
                            [s, F],
                        ),
                        k = g()(
                            _e.base,
                            _e[`base__${n}`],
                            {
                                [_e.base__disabled]: s,
                                [_e[`base__${e}`]]: e,
                                [_e.base__focus]: B,
                                [_e.base__highlightActive]: h,
                                [_e.base__firstHover]: v,
                            },
                            i,
                        ),
                        N = g()(_e.state, _e.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, a.useEffect)(() => {
                            C(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: D,
                                className: k,
                                onMouseEnter: L,
                                onMouseMove: P,
                                onMouseUp: x,
                                onMouseDown: O,
                                onMouseLeave: M,
                                onClick: y,
                            },
                            n !== De.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: _e.back }),
                                    r().createElement('span', { className: _e.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: N },
                                r().createElement('span', { className: _e.stateDisabled }),
                                r().createElement('span', { className: _e.stateHighlightHover }),
                                r().createElement('span', { className: _e.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: _e.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                Be.defaultProps = { type: De.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ce = (0, a.memo)(Be);
                let ge;
                !(function (u) {
                    (u[(u.Space = 32)] = 'Space'),
                        (u[(u.Enter = 13)] = 'Enter'),
                        (u[(u.A = 65)] = 'A'),
                        (u[(u.B = 66)] = 'B'),
                        (u[(u.C = 67)] = 'C'),
                        (u[(u.D = 68)] = 'D'),
                        (u[(u.E = 69)] = 'E'),
                        (u[(u.F = 70)] = 'F'),
                        (u[(u.G = 71)] = 'G'),
                        (u[(u.H = 72)] = 'H'),
                        (u[(u.I = 73)] = 'I'),
                        (u[(u.J = 74)] = 'J'),
                        (u[(u.K = 75)] = 'K'),
                        (u[(u.L = 76)] = 'L'),
                        (u[(u.M = 77)] = 'M'),
                        (u[(u.N = 78)] = 'N'),
                        (u[(u.O = 79)] = 'O'),
                        (u[(u.P = 80)] = 'P'),
                        (u[(u.Q = 81)] = 'Q'),
                        (u[(u.R = 82)] = 'R'),
                        (u[(u.S = 83)] = 'S'),
                        (u[(u.T = 84)] = 'T'),
                        (u[(u.U = 85)] = 'U'),
                        (u[(u.V = 86)] = 'V'),
                        (u[(u.W = 87)] = 'W'),
                        (u[(u.X = 88)] = 'X'),
                        (u[(u.Y = 89)] = 'Y'),
                        (u[(u.Z = 90)] = 'Z');
                })(ge || (ge = {}));
                const pe = (u = {}) => {
                        (0, a.useEffect)(() => {
                            const e = (e) => {
                                if (!e.altKey && !e.ctrlKey && !e.shiftKey) {
                                    const t = u[e.keyCode];
                                    'function' == typeof t && t(e);
                                }
                            };
                            return (
                                window.addEventListener('keyup', e),
                                () => {
                                    window.removeEventListener('keyup', e);
                                }
                            );
                        }, [u]);
                    },
                    he = 'Banner_base_54',
                    we = 'Banner_content_cd',
                    be = 'Banner_icon_44',
                    ve = 'Banner_description_54',
                    fe = 'Banner_title_17',
                    Te = 'Banner_text_86',
                    Re = 'Banner_buttonContainer_74',
                    Se = 'Banner_buttonWrapper_8d',
                    ye = 'Banner_buttonGlow_e9',
                    Le = R.strings.battle_pass.battlePassAwardsView.footer,
                    Pe = (0, Du.Pi)(({ className: u, parentRef: e }) => {
                        const t = X(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get(),
                            i = s.seasonStopped,
                            o = s.currentLevel;
                        pe({ [eu.n.ENTER]: n.buy, [eu.n.SPACE]: n.buy });
                        const l = f().mediaSize >= w.Medium;
                        return r().createElement(
                            'div',
                            { ref: e, className: g()(he, u) },
                            r().createElement(
                                'div',
                                { className: we },
                                r().createElement('div', { className: be }),
                                r().createElement(
                                    'div',
                                    { className: ve },
                                    r().createElement('div', { className: fe }, Le.bpTitle()),
                                    r().createElement(
                                        'div',
                                        { className: Te },
                                        o >= 45 ? Le.bpLastStagesTitle() : Le.bpInProgressTitle(),
                                    ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: Re },
                                r().createElement('div', { className: ye }),
                                r().createElement(
                                    'div',
                                    { className: Se },
                                    r().createElement(
                                        Ce,
                                        { disabled: i, type: De.main, size: l ? me.medium : me.small, onClick: n.buy },
                                        Le.bpButtonTitle(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    xe = 'Footer_base_a9',
                    Oe = 'Footer_title_79',
                    Me = 'Footer_title__highlight_36',
                    ke = 'Footer_buttonContainer_64',
                    Ne = R.strings.battle_pass.battlePassAwardsView,
                    Ie = (0, Du.Pi)(({ button: u, className: e }) => {
                        const t = X().model,
                            a = f().mediaSize,
                            n = t.root.get(),
                            s = n.reason,
                            i = n.chapterID,
                            o = n.isBaseStyleLevel,
                            l = t.computes.isReasonBuyCurrently(),
                            E = ((u, e, t) => {
                                switch (u) {
                                    case I.BUY_BATTLE_PASS:
                                        return ou(Ne.mainReward.bpBuyAwardsCaption(), {
                                            chapter: R.strings.battle_pass.chapter.fullName.$num(e),
                                        });
                                    case I.BUY_BATTLE_PASS_WITH_LEVELS:
                                        return ou(Ne.mainReward.bpBuyWithLevels(), {
                                            chapter: R.strings.battle_pass.chapter.fullName.$num(e),
                                        });
                                    case I.BUY_MULTIPLE_BATTLE_PASS:
                                        return Ne.footer.allChaptersText();
                                    case I.STYLE_UPGRADE:
                                        return t ? Ne.footer.bpDescriptionGotStyle() : '';
                                    default:
                                        return '';
                                }
                            })(s, i, o),
                            c = a >= w.Medium;
                        return r().createElement(
                            'div',
                            { className: g()(xe, e) },
                            Boolean(E.length) && r().createElement('div', { className: g()(Oe, l && Me) }, E),
                            r().createElement(
                                'div',
                                { className: ke },
                                r().createElement(
                                    Ce,
                                    { type: De.primary, size: c ? me.medium : me.small, onClick: u.onClick },
                                    u.text,
                                ),
                            ),
                        );
                    }),
                    Ue = (u, e) => {
                        const t = e.postfix ? `_${e.postfix}` : '';
                        return ((u) => {
                            const e = u.path.$dyn(`${u.name}_${u.id}`),
                                t = u.path.$dyn('default');
                            return e || t;
                        })(u).$dyn(`${e.name}${t}`);
                    };
                let He;
                !(function (u) {
                    (u.Season = 'season'), (u.Chapter = 'chapter');
                })(He || (He = {}));
                const Ge = 'ChapterLogo_base_46',
                    We = (0, Du.Pi)(() => {
                        const u = X().model,
                            e = u.root.get().chapterID,
                            t = f().mediaSize < w.Medium,
                            a = s.O.view.getScale(),
                            n = () => (2 !== a && t ? '_medium' : ''),
                            i = (() => {
                                if (u.computes.isMultiplePurchase())
                                    return {
                                        backgroundImage: `url(R.images.gui.maps.icons.battlePass.rewards.bp_icon_triple${n()})`,
                                    };
                                const t = {
                                        path: R.images.gui.maps.icons.battlePass.rewards.chapterLogo,
                                        name: He.Chapter,
                                        id: e,
                                    },
                                    a = { name: 'bp_icon', postfix: `${n().slice(1)}` };
                                return { backgroundImage: `url(${Ue(t, a)})` };
                            })();
                        return r().createElement('div', { className: Ge, style: i });
                    }),
                    $e = 'Glow_base_92',
                    Ve = 'Glow_glow_02',
                    Ye = ({ className: u }) =>
                        r().createElement(
                            'div',
                            { className: g()($e, u) },
                            r().createElement('img', {
                                className: Ve,
                                src: 'swf://gui/flash/animations/battlePass/rays.swf',
                                alt: '',
                            }),
                        );
                let qe, ze, je;
                !(function (u) {
                    (u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge');
                })(qe || (qe = {})),
                    (function (u) {
                        (u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.equipCoin = 'equipCoin');
                    })(ze || (ze = {})),
                    (function (u) {
                        (u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG');
                    })(je || (je = {}));
                const Xe = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ke = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Qe = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Ze = (u) =>
                        Qe
                            ? `${u}`
                            : (function (u) {
                                  let e = '';
                                  for (let t = Ke.length - 1; t >= 0; t--)
                                      for (; u >= Ke[t]; ) (e += Xe[t]), (u -= Ke[t]);
                                  return e;
                              })(u),
                    Je = { base: 'TankName_base_d5', base__wide: 'TankName_base__wide_c6', type: 'TankName_type_4d' },
                    ut = (u, e) => ({
                        backgroundImage: `url(${`R.images.gui.maps.icons.vehicleTypes.big.${`${u.replace('-', '_')}${e ? '_elite' : ''}`}`})`,
                    }),
                    et = ({ isElite: u, vehicleName: e, vehicleType: t, vehicleLvl: a, isWide: n }) =>
                        r().createElement(
                            'div',
                            { className: g()(Je.base, n && Je.base__wide) },
                            r().createElement('div', { className: Je.level }, Ze(a)),
                            r().createElement('div', { className: Je.type, style: ut(t, u) }),
                            r().createElement('div', { className: Je.name }, e),
                        ),
                    tt = 'FormatText_base_d0',
                    at = ({ binding: u, text: e = '', classMix: t, alignment: n = su.left, formatWithBrackets: s }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const i = s && u ? iu(e, u) : e;
                        return r().createElement(
                            a.Fragment,
                            null,
                            i.split('\n').map((e, s) =>
                                r().createElement(
                                    'div',
                                    { className: g()(tt, t), key: `${e}-${s}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : _u(u, e))))(
                                        e,
                                        n,
                                        u,
                                    ).map((u, e) => r().createElement(a.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    rt = R.strings.battle_pass,
                    nt = ({ type: u, value: e }) => {
                        switch (u) {
                            case vu.BattlaPassFinalAchievement:
                                return r().createElement(at, {
                                    text: rt.battlePassAwardsView.mainReward.reward(),
                                    binding: { name: e },
                                });
                            case vu.TmanToken:
                                return r().createElement(at, {
                                    text: rt.battlePassAwardsView.mainReward.commander(),
                                    binding: { name: e },
                                });
                            case vu.Gold:
                            case vu.Credits:
                            case vu.Crystal:
                                return r().createElement(Pu, { format: 'integral', value: Number(e) });
                            default:
                                return r().createElement(r().Fragment, null, lu(e));
                        }
                    },
                    st = {
                        base: 'Title_base_24',
                        title: 'Title_title_20',
                        base__wide: 'Title_base__wide_bd',
                        base__credits: 'Title_base__credits_d6',
                        base__gold: 'Title_base__gold_e5',
                        base__crystal: 'Title_base__crystal_94',
                        subtitle: 'Title_subtitle_47',
                    },
                    it = R.strings.battle_pass,
                    ot = ({ reward: u, size: e, className: t }) => {
                        const a = u.name,
                            n = u.userName,
                            s = u.vehicleLvl,
                            i = u.vehicleName,
                            o = u.vehicleType,
                            l = u.isElite,
                            E = u.isCollectionEntity,
                            c = a === vu.Vehicles;
                        return r().createElement(
                            'div',
                            { className: g()(st.base, st[`base__${e}`], st[`base__${a}`], t) },
                            r().createElement(
                                'div',
                                { className: st.title },
                                c && s && i && o
                                    ? r().createElement(et, {
                                          vehicleLvl: s,
                                          vehicleName: i,
                                          vehicleType: o,
                                          isElite: l || !1,
                                          isWide: e === ct.Wide,
                                      })
                                    : r().createElement(nt, { type: a, value: n }),
                            ),
                            E && r().createElement('div', { className: st.subtitle }, it.common.collectionText()),
                        );
                    },
                    lt = {
                        base: 'Reward_base_14',
                        imageWrapper: 'Reward_imageWrapper_5a',
                        image: 'Reward_image_2d',
                        fadeInWithScale: 'Reward_fadeInWithScale_c5',
                        base__updateAnimation: 'Reward_base__updateAnimation_df',
                        base__wide: 'Reward_base__wide_fa',
                        base__small: 'Reward_base__small_e4',
                        title: 'Reward_title_3d',
                        fadeIn: 'Reward_fadeIn_f4',
                        count: 'Reward_count_22',
                        fadeOut: 'Reward_fadeOut_ee',
                        slideUp: 'Reward_slideUp_3e',
                        scale: 'Reward_scale_38',
                        rotate: 'Reward_rotate_4f',
                    },
                    Et = R.strings.battle_pass;
                let ct;
                !(function (u) {
                    (u.Normal = 'normal'), (u.Wide = 'wide'), (u.Small = 'small');
                })(ct || (ct = {}));
                const At = [vu.BattlaPassFinalAchievement, vu.TmanToken, vu.Vehicles],
                    dt = [
                        ze.credits,
                        ze.gold,
                        ze.crystal,
                        ze.xp,
                        ze.freeXP,
                        ze.equipCoin,
                        vu.BattlaPassFinalAchievement,
                        vu.TmanToken,
                        vu.Vehicles,
                        vu.PremiumPlus,
                    ],
                    Ft = (0, Du.Pi)(({ reward: u, rewardListIndex: e }) => {
                        const t = X().model,
                            a = t.canToOpenAdditionView.get(),
                            n = t.computes.hasBigSizeReward(),
                            s = t.computes.getRewardsLength(),
                            i = u.bigIcon,
                            o = u.overlayType,
                            l = u.tooltipContentId,
                            E = u.tooltipId,
                            c = u.name,
                            A = u.userName,
                            d = u.value,
                            F = ((_ = c), !dt.includes(_) && Number(d) > 1);
                        var _;
                        const D = ((u) => At.includes(u))(c) || (A && A.length > 0),
                            m = () => (n ? (1 === s || 1 === e ? ct.Wide : ct.Small) : ct.Normal);
                        return r().createElement(
                            'div',
                            { className: g()(lt.base, lt[`base__${m()}`], a && lt.base__updateAnimation) },
                            r().createElement(
                                Vu,
                                { ignoreShowDelay: !0, contentId: Number(l), args: { tooltipId: E } },
                                r().createElement(
                                    'div',
                                    { className: lt.imageWrapper },
                                    r().createElement('div', { className: lt.image, style: ie(i, o) }),
                                    F &&
                                        r().createElement(
                                            'div',
                                            { className: lt.count },
                                            ou(Et.common.multiplier(), { multiplier: d }),
                                        ),
                                ),
                            ),
                            D && r().createElement(ot, { reward: u, size: m(), className: lt.title }),
                        );
                    }),
                    _t = 'Rewards_base_05',
                    Dt = 'Rewards_base__updateSize_5b',
                    mt = (0, Du.Pi)(() => {
                        const u = X().model,
                            e = u.canToOpenAdditionView.get(),
                            t = u.computes.getRewards();
                        return r().createElement(
                            'div',
                            { className: g()(_t, e && Dt) },
                            t.map((u, e) =>
                                r().createElement(Ft, { reward: u, key: `reward-${e}`, rewardListIndex: e }),
                            ),
                        );
                    }),
                    Bt = 'Ribbon_base_e0',
                    Ct = 'Ribbon_base__indentWide_6b',
                    gt = (0, Du.Pi)(() => {
                        const u = X().model,
                            e = u.root.get(),
                            t = e.isBattlePassPurchased,
                            a = e.chapterID,
                            n = u.computes.hasBigSizeReward(),
                            s = u.computes.isReasonBuyCurrently(),
                            i = n || s,
                            o = ((u) => {
                                switch (u) {
                                    case w.ExtraSmall:
                                    case w.Small:
                                        return 'small';
                                    case w.Medium:
                                        return 'medium';
                                    default:
                                        return 'large';
                                }
                            })(f().mediaSize),
                            l = (() => {
                                const u = {
                                    path: R.images.gui.maps.icons.battlePass.logo.ribbon,
                                    name: He.Chapter,
                                    id: a,
                                };
                                return {
                                    backgroundImage: `url(${Ue(u, { name: 'ribbon', postfix: `${o}${t ? '_with_bp' : ''}` })})`,
                                };
                            })();
                        return r().createElement('div', { className: g()(Bt, i && Ct), style: l });
                    }),
                    pt = 'MainRewards_base_ad',
                    ht = 'MainRewards_glow_61',
                    wt = 'MainRewards_rays_20',
                    bt = (0, Du.Pi)(({ className: u }) => {
                        const e = X().model,
                            t = e.canToOpenAdditionView.get(),
                            n = e.computes.isReasonBuyCurrently(),
                            s = e.computes.hasGlowAnimation(),
                            i = (0, a.useState)(!1),
                            o = i[0],
                            l = i[1],
                            E = (0, te.useSpring)({
                                from: { contentOpacity: 1 },
                                contentOpacity: t ? 1 : 0,
                                config: { duration: 400 },
                                onResolve: () => {
                                    t && l(!0);
                                },
                            }).contentOpacity;
                        return r().createElement(
                            'div',
                            { className: g()(pt, u) },
                            s && !t && r().createElement(Ye, { className: ht }),
                            r().createElement(gt, null),
                            r().createElement('div', { className: wt }),
                            n && !o
                                ? r().createElement(
                                      te.animated.div,
                                      { style: { opacity: E.to({ output: [1, 0] }) } },
                                      r().createElement(We, null),
                                  )
                                : r().createElement(mt, null),
                        );
                    }),
                    vt = 'RewardsApp_base_94',
                    ft = 'RewardsApp_saturate_be',
                    Tt = 'RewardsApp_overlay_88',
                    Rt = 'RewardsApp_overlay__common_ff',
                    St = 'RewardsApp_main_72',
                    yt = 'RewardsApp_close_c1',
                    Lt = 'RewardsApp_content_59',
                    Pt = 'RewardsApp_header_6c',
                    xt = 'RewardsApp_rewards_62',
                    Ot = 'RewardsApp_rewards__additionalCentring_f7',
                    Mt = 'RewardsApp_additionalRewards_ba',
                    kt = 'RewardsApp_additionalRewards__diffTop_ff',
                    Nt = 'RewardsApp_additionalRewards__slideTop_da',
                    It = 'RewardsApp_base__buyWithLevels_ae',
                    Ut = 'RewardsApp_additionalRewards__animateSlide_6c',
                    Ht = 'RewardsApp_additionalRewards__indentS_b4',
                    Gt = 'RewardsApp_mainRewards_18',
                    Wt = 'RewardsApp_mainRewards__slideTop_ed',
                    $t = 'RewardsApp_mainRewards__animateSlide_a7',
                    Vt = 'RewardsApp_footer_1f',
                    Yt = 'RewardsApp_footer__hide_82',
                    qt = 'RewardsApp_banner_25',
                    zt = 'RewardsApp_banner__showPreparation_5c',
                    jt = R.strings.battle_pass,
                    Xt = (u) =>
                        u
                            ? ou(jt.battlePassAwardsView.header.bpTitle(), {
                                  chapter: jt.chapter.fullNameUppercased.$num(u),
                              })
                            : jt.battlePassAwardsView.header.bpTitleWithoutChapter(),
                    Kt = (u, e) => {
                        switch (u) {
                            case I.BUY_BATTLE_PASS:
                            case I.BUY_MULTIPLE_BATTLE_PASS:
                            case I.BUY_BATTLE_PASS_WITH_LEVELS:
                                return jt.battlePassAwardsView.header.bpTitleWithoutChapter();
                            case I.BUY_BATTLE_PASS_LEVELS:
                            case I.STYLE_UPGRADE:
                            case I.DEFAULT:
                                return Xt(e);
                        }
                        return console.warn('Unknown title reason: ', u), Xt(e);
                    },
                    Qt = (u, e, t) => {
                        switch (u) {
                            case I.BUY_BATTLE_PASS:
                            case I.BUY_MULTIPLE_BATTLE_PASS:
                            case I.BUY_BATTLE_PASS_WITH_LEVELS:
                                return jt.battlePassAwardsView.header.bpBoughtText();
                            case I.BUY_BATTLE_PASS_LEVELS:
                                return e
                                    ? jt.battlePassAwardsView.header.bpFinalLevelText()
                                    : jt.battlePassAwardsView.header.bpLevelsText();
                            case I.STYLE_UPGRADE:
                                return t
                                    ? jt.battlePassAwardsView.header.styleReceivedText()
                                    : jt.battlePassAwardsView.header.styleUpgradedText();
                            case I.DEFAULT:
                                return e
                                    ? jt.battlePassAwardsView.header.bpFinalLevelText()
                                    : jt.battlePassAwardsView.header.bpLevelsText();
                        }
                        return console.warn('Unknown status reason: ', u), '';
                    },
                    Zt = (u, e, t, a, r, n) => {
                        const s = ((u, e, t) =>
                            t
                                ? jt.battlePassAwardsView.additionalRewards.seeMoreButtonText()
                                : u
                                  ? ou(jt.battlePassAwardsView.additionalRewards.bpRemainLevelsAwardsText(), {
                                        remainingAwardsCount: e,
                                    })
                                  : jt.battlePassAwardsView.additionalRewards.button())(
                            r,
                            e > a * (t + 1) ? 10 : e - a * t,
                            u,
                        );
                        return { onClick: n, text: s };
                    },
                    Jt = (0, Du.Pi)(() => {
                        const u = X(),
                            e = u.model,
                            t = u.controls,
                            n = e.root.get(),
                            i = n.reason,
                            o = n.chapterID,
                            l = n.isFinalReward,
                            E = n.isBaseStyleLevel,
                            c = n.isNeedToShowOffer,
                            A = n.isBattlePassPurchased,
                            d = e.canToOpenAdditionView.get(),
                            F = e.computes.getAdditionalRewards(),
                            _ = e.computes.getAdditionalRewardsLength(),
                            D = e.computes.hasAdditionalRewards(),
                            m = e.computes.isReasonBuyCurrently(),
                            B = e.computes.isReasonBuyWithLevels(),
                            C = e.computes.isReasonStyleUpgrade(),
                            p = e.computes.hasBigSizeReward(),
                            h = e.computes.getRewards().length > 0,
                            w = (0, a.useState)(1),
                            b = w[0],
                            v = w[1],
                            f = (0, a.useState)(0),
                            T = f[0],
                            S = f[1],
                            y = (0, a.useState)(!1),
                            L = y[0],
                            P = y[1],
                            x = m && h && !d,
                            O = `${s.O.view.pxToRem(T)}rem`;
                        var M;
                        (M = t.close), ru(eu.n.ESCAPE, M);
                        const k = { title: Kt(i, o), subtitle: Qt(i, l, E) },
                            N = F.slice(10 * (b - 1), 10 * b),
                            I = N.length,
                            U = Math.ceil(_ / 10),
                            H = b < U,
                            G = U > 1,
                            W = c && !C && !H,
                            $ = W && G,
                            V = !W || $,
                            Y = (0, a.useRef)(null),
                            q = () => {
                                ((u) => {
                                    let e,
                                        t = null;
                                    t = requestAnimationFrame(() => {
                                        t = requestAnimationFrame(() => {
                                            (t = null), (e = u());
                                        });
                                    });
                                })(() => {
                                    Y && Y.current && S(Y.current.offsetHeight);
                                });
                            };
                        (0, a.useEffect)(() => {
                            q(), P(!1);
                        }, [W, $]),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    q(), P(!0);
                                };
                                return (
                                    window.addEventListener('resize', u),
                                    () => {
                                        window.removeEventListener('resize', u);
                                    }
                                );
                            }, []);
                        const z = Zt(x, _, b, I, H, () => {
                                x ? t.enableToOpenAdditionView() : H ? v(b + 1) : t.close();
                            }),
                            j = p && D,
                            K = {
                                backgroundImage: pu.includes(o)
                                    ? `url(${hu(R.images.gui.maps.icons.battlePass.backgrounds.purchase_confirmation, o)})`
                                    : wu(o).backgroundImage,
                                '--banner-height': O,
                            };
                        return r().createElement(
                            'div',
                            { className: g()(vt, B && d && It), style: K },
                            !A && r().createElement('div', { className: ft }),
                            r().createElement('div', { className: g()(Tt, !o && Rt) }),
                            r().createElement(
                                'div',
                                { className: St },
                                r().createElement(
                                    'div',
                                    { className: yt },
                                    r().createElement(uu, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Lt },
                                    r().createElement(
                                        'div',
                                        { className: Pt },
                                        r().createElement(bu.h, { title: k.title, status: k.subtitle }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: g()(xt, j && Ot) },
                                        r().createElement(bt, { className: g()(Gt, $ && Wt, $ && !L && $t) }),
                                        D &&
                                            r().createElement(Fe, {
                                                rewards: N,
                                                pageNumber: b,
                                                className: g()(Mt, p && Ht, d && kt, $ && Nt, $ && !L && Ut),
                                            }),
                                    ),
                                ),
                                V && r().createElement(Ie, { button: z, className: g()(Vt, $ && Yt) }),
                                W && r().createElement(Pe, { className: g()(qt, G && zt), parentRef: Y }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    N().render(
                        r().createElement(j, null, r().createElement(M, null, r().createElement(Jt, null))),
                        document.getElementById('root'),
                    );
                });
            },
            801: (u, e, t) => {
                'use strict';
                t.d(e, { h: () => l });
                var a = t(6179),
                    r = t.n(a);
                const n = 'Header_base_a0',
                    s = 'Header_title_09',
                    i = 'Header_status_74',
                    o = 'Header_subtitle_3a',
                    l = ({ title: u, status: e, subtitle: t }) =>
                        r().createElement(
                            'div',
                            { className: n },
                            r().createElement('div', { className: s }, u),
                            r().createElement('div', { className: i }, e),
                            t && r().createElement('div', { className: o }, t),
                        );
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, a] = deferred[o], n = !0, s = 0; s < e.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[s]))
                            ? e.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, a];
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
        (__webpack_require__.j = 1981),
        (() => {
            var u = { 1981: 0, 2286: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        r,
                        [n, s, i] = t,
                        o = 0;
                    if (n.some((e) => 0 !== u[e])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (e && e(t); o < n.length; o++)
                        (r = n[o]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(2769));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
