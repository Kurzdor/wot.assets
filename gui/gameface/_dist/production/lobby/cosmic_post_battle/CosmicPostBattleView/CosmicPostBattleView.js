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
            887: (u) => {
                u.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            527: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, { mouse: () => c, off: () => o, on: () => i, onResize: () => r, onScaleUpdated: () => s });
                var a = t(472),
                    n = t(176);
                const r = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (u, e) => engine.on(u, e),
                    o = (u, e) => engine.off(u, e),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    c = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, n.R)(!0);
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
                                : (0, n.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${e}`,
                                            s = l[e]((u) => t([u, 'outside']));
                                        function i(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, i),
                                            a(),
                                            () => {
                                                n &&
                                                    (s(),
                                                    window.removeEventListener(r, i),
                                                    (u.listeners -= 1),
                                                    a(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                (u.enabled = !1), a();
                            },
                            enable() {
                                (u.enabled = !0), a();
                            },
                            enableOutside() {
                                u.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                u.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => s,
                    });
                var a = t(527);
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (u, e, t) => {
                'use strict';
                function a(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => a });
            },
            472: (u, e, t) => {
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
            138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => n });
                var a = t(959);
                const n = { view: t(641), client: a };
            },
            722: (u, e, t) => {
                'use strict';
                function a(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${a(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
                var a = t(472);
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
            641: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => d,
                        getSize: () => E,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => S,
                    });
                var a = t(722),
                    n = t(112),
                    r = t(538),
                    s = t(566);
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function o(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function c(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function _(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function E(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function A(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function d() {
                    return viewEnv.getScale();
                }
                function D(u) {
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
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    w = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    S = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => r });
                const a = ['args'],
                    n = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                s = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, s, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
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
                        var n;
                    },
                    r = {
                        close(u) {
                            n('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(u) {
                            n(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            521: (u, e, t) => {
                'use strict';
                let a, n;
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
                    })(n || (n = {}));
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var a = t(138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(u, t, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", u),
                            r
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
                n.__instance = void 0;
                const r = n;
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
            916: (u, e, t) => {
                'use strict';
                t.d(e, { B3: () => l, Z5: () => s.Z5, B0: () => i, ry: () => B });
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
                const n = a;
                var r = t(358),
                    s = t(613);
                let i;
                var o;
                ((o = i || (i = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(521),
                    A = t(138);
                const F = ['args'];
                function d(u, e, t, a, n, r, s) {
                    try {
                        var i = u[r](s),
                            o = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(o) : Promise.resolve(o).then(a, n);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    B = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = u.apply(e, t);
                                        function s(u) {
                                            d(r, a, n, s, i, 'next', u);
                                        }
                                        function i(u) {
                                            d(r, a, n, s, i, 'throw', u);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, F);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    g = () => C(i.CLOSE),
                    p = (u, e) => {
                        u.keyCode === m.n.ESCAPE && e();
                    };
                var h = t(572);
                const v = n.instance,
                    f = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => C(i.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => C(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                E = o.height,
                                m = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(_),
                                    height: A.O.view.pxToRem(E),
                                };
                            C(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: D(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => p(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            p(u, g);
                        },
                        handleViewEvent: C,
                        onBindingsReady: B,
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
                                    const n = Object.prototype.toString.call(e[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[a];
                                        t[a] = [];
                                        for (let e = 0; e < n.length; e++) t[a].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = u(e[a]))
                                            : (t[a] = e[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = f;
            },
            613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    n = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            718: (u, e, t) => {
                'use strict';
                var a = t(179),
                    n = t.n(a);
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var s = t(138);
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
                        n = (function (u, e) {
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
                const c = s.O.client.getSize('rem'),
                    _ = c.width,
                    E = c.height,
                    m = Object.assign({ width: _, height: E }, l(_, E, i)),
                    A = (0, a.createContext)(m),
                    F = ['children'],
                    d = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, F);
                        const n = (0, a.useContext)(A),
                            s = n.extraLarge,
                            i = n.large,
                            o = n.medium,
                            l = n.small,
                            c = n.extraSmall,
                            _ = n.extraLargeWidth,
                            E = n.largeWidth,
                            m = n.mediumWidth,
                            d = n.smallWidth,
                            D = n.extraSmallWidth,
                            B = n.extraLargeHeight,
                            C = n.largeHeight,
                            g = n.mediumHeight,
                            p = n.smallHeight,
                            h = n.extraSmallHeight,
                            v = { extraLarge: B, large: C, medium: g, small: p, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return e;
                            if (t.large && i) return e;
                            if (t.medium && o) return e;
                            if (t.small && l) return e;
                            if (t.extraSmall && c) return e;
                        } else {
                            if (t.extraLargeWidth && _) return r(e, t, v);
                            if (t.largeWidth && E) return r(e, t, v);
                            if (t.mediumWidth && m) return r(e, t, v);
                            if (t.smallWidth && d) return r(e, t, v);
                            if (t.extraSmallWidth && D) return r(e, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
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
                (d.defaultProps = {
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
                    (0, a.memo)(d);
                const D = ({ children: u }) => {
                    const e = (0, a.useContext)(A),
                        t = (0, a.useState)(e),
                        r = t[0],
                        o = t[1],
                        c = (0, a.useCallback)((u, e) => {
                            const t = s.O.view.pxToRem(u),
                                a = s.O.view.pxToRem(e);
                            o(Object.assign({ width: t, height: a }, l(t, a, i)));
                        }, []),
                        _ = (0, a.useCallback)(() => {
                            const u = s.O.client.getSize('px');
                            c(u.width, u.height);
                        }, [c]);
                    ((u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    })(() => {
                        s.O.client.events.on('clientResized', c), s.O.client.events.on('self.onScaleUpdated', _);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                s.O.client.events.off('clientResized', c),
                                    s.O.client.events.off('self.onScaleUpdated', _);
                            },
                            [c, _],
                        );
                    const E = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return n().createElement(A.Provider, { value: E }, u);
                };
                var B = t(483),
                    C = t.n(B),
                    g = t(926),
                    p = t.n(g);
                let h, v, f;
                !(function (u) {
                    (u[(u.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = i.small.width)] = 'Small'),
                        (u[(u.Medium = i.medium.width)] = 'Medium'),
                        (u[(u.Large = i.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                })(h || (h = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = i.small.width)] = 'Small'),
                            (u[(u.Medium = i.medium.width)] = 'Medium'),
                            (u[(u.Large = i.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = i.small.height)] = 'Small'),
                            (u[(u.Medium = i.medium.height)] = 'Medium'),
                            (u[(u.Large = i.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge');
                    })(f || (f = {}));
                const b = () => {
                        const u = (0, a.useContext)(A),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return h.ExtraLarge;
                                    case u.large:
                                        return h.Large;
                                    case u.medium:
                                        return h.Medium;
                                    case u.small:
                                        return h.Small;
                                    case u.extraSmall:
                                        return h.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), h.ExtraSmall;
                                }
                            })(u),
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case u.largeWidth:
                                        return v.Large;
                                    case u.mediumWidth:
                                        return v.Medium;
                                    case u.smallWidth:
                                        return v.Small;
                                    case u.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(u),
                            s = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return f.ExtraLarge;
                                    case u.largeHeight:
                                        return f.Large;
                                    case u.mediumHeight:
                                        return f.Medium;
                                    case u.smallHeight:
                                        return f.Small;
                                    case u.extraSmallHeight:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: s, remScreenWidth: e, remScreenHeight: t };
                    },
                    w = ['children', 'className'];
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
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL_WIDTH,
                        [v.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [v.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL_HEIGHT,
                        [f.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [f.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [h.ExtraSmall]: '',
                        [h.Small]: p().SMALL,
                        [h.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [h.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [h.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    P = (u) => {
                        let e = u.children,
                            t = u.className,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, w);
                        const r = b(),
                            s = r.mediaWidth,
                            i = r.mediaHeight,
                            o = r.mediaSize;
                        return n().createElement('div', S({ className: C()(t, y[s], T[i], x[o]) }, a), e);
                    },
                    M = ['children'],
                    N = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, M);
                        return n().createElement(D, null, n().createElement(P, t, e));
                    };
                var O = t(493),
                    L = t.n(O);
                function k(u) {
                    engine.call('PlaySound', u);
                }
                var I = t(282);
                function U(u) {
                    return u;
                }
                function H() {
                    return !1;
                }
                console.log;
                var G = t(915);
                function W(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const j = (u) => (0 === u ? window : window.subViews.get(u));
                function $(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, a) => e(null == u ? void 0 : u.value, t, a));
                }
                var X = t(517);
                const V = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: r, children: i, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    c = (u, t, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = j,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? n.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = n.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const i = (u) => {
                                                    const n = t(e),
                                                        r = a.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? r
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const o = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = s.O.view.addModelObserver(o, e, !0);
                                                        return n.set(l, t), u && t(i(r)), l;
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
                                                        for (
                                                            var u,
                                                                t = (function (u, e) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            u[Symbol.iterator]) ||
                                                                        u['@@iterator'];
                                                                    if (t) return (t = t.call(u)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(u) ||
                                                                        (t = (function (u, e) {
                                                                            if (u) {
                                                                                if ('string' == typeof u)
                                                                                    return W(u, e);
                                                                                var t = Object.prototype.toString
                                                                                    .call(u)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        u.constructor &&
                                                                                        (t = u.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(u)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? W(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(u = t()).done;

                                                        )
                                                            r(u.value, e);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            i =
                                                'real' === u
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === u ? (null == a ? void 0 : a.getter(e)) : i.readByPath(e),
                                            c = (u) => l.current.push(u),
                                            _ = (({ observableModel: u }) => {
                                                const e = {
                                                        root: u.object(),
                                                        announcer: u.object('announcer'),
                                                        primitives: u.primitives([
                                                            'battleOverTimestamp',
                                                            'totalPoints',
                                                            'killAmount',
                                                            'evacuationPosition',
                                                            'fragmentsDelivered',
                                                        ]),
                                                        currentPlayerEntry: u.object('currentPlayerEntry'),
                                                        currentPlayersScore: u.array('currentPlayerEntry.playersScore'),
                                                        playersList: u.array('playersList', []),
                                                        dailyQuests: u.array('dailyQuests', []),
                                                    },
                                                    t = (0, X.computedFn)(() =>
                                                        $(e.playersList.get(), (u) =>
                                                            Object.assign({}, u, {
                                                                playersScore: $(u.playersScore, U),
                                                            }),
                                                        ),
                                                    ),
                                                    a = (0, X.computedFn)(() => {
                                                        const u = e.currentPlayerEntry.get();
                                                        return Object.assign({}, u);
                                                    }),
                                                    n = (0, X.computedFn)(() =>
                                                        $(e.dailyQuests.get(), (u) =>
                                                            Object.assign({}, u, { bonuses: $(u.bonuses, U) }),
                                                        ),
                                                    );
                                                return Object.assign({}, e, {
                                                    computes: {
                                                        getPlayersList: t,
                                                        getCurrentPlayerEntry: a,
                                                        getDailyMissions: n,
                                                    },
                                                });
                                            })({
                                                mode: u,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : o(e),
                                                            n = G.observable.box(a, { equals: H });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, G.action)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : o(e),
                                                            n = G.observable.box(a, { equals: H });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, G.action)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = o(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (u, e) => ((u[e] = G.observable.box(a[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, G.action)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                r = Object.entries(n),
                                                                s = r.reduce(
                                                                    (u, [e, t]) => (
                                                                        (u[t] = G.observable.box(a[e], {})), u
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, G.action)((u) => {
                                                                            r.forEach(([e, t]) => {
                                                                                s[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            E = { mode: u, model: _, externalModel: i, cleanup: c };
                                        return {
                                            model: _,
                                            controls: 'mocks' === u && a ? a.controls(E) : e(E),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    _ = (0, a.useRef)(!1),
                                    E = (0, a.useState)(u),
                                    m = E[0],
                                    A = E[1],
                                    F = (0, a.useState)(() => c(u, r, o)),
                                    d = F[0],
                                    D = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        _.current ? D(c(m, r, o)) : (_.current = !0);
                                    }, [o, m, r]),
                                    (0, a.useEffect)(() => {
                                        A(u);
                                    }, [u]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            d.externalModel.dispose(), l.current.forEach((u) => u());
                                        },
                                        [d],
                                    ),
                                    n().createElement(t.Provider, { value: d }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: u }) => ({ onClose: u.createCallbackNoArgs('onClose') })),
                    q = V[0],
                    Y = V[1],
                    z = {
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
                    K = [
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
                function Q() {
                    return (
                        (Q =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Q.apply(this, arguments)
                    );
                }
                class Z extends n().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && k(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && k(this.props.soundClick);
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
                            r = u.side,
                            s = u.type,
                            i = u.classNames,
                            o = u.onMouseEnter,
                            l = u.onMouseLeave,
                            c = u.onMouseDown,
                            _ = u.onMouseUp,
                            E =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(u, K)),
                            m = C()(z.base, z[`base__${s}`], z[`base__${r}`], null == i ? void 0 : i.base),
                            A = C()(z.icon, z[`icon__${s}`], z[`icon__${r}`], null == i ? void 0 : i.icon),
                            F = C()(z.glow, null == i ? void 0 : i.glow),
                            d = C()(z.caption, z[`caption__${s}`], null == i ? void 0 : i.caption),
                            D = C()(z.goto, null == i ? void 0 : i.goto);
                        return n().createElement(
                            'div',
                            Q(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== s && n().createElement('div', { className: z.shine }),
                            n().createElement('div', { className: A }, n().createElement('div', { className: F })),
                            n().createElement('div', { className: d }, e),
                            a && n().createElement('div', { className: D }, a),
                        );
                    }
                }
                Z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var J = t(521),
                    uu = t(916);
                const eu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function tu(u = J.n.NONE, e = eu, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== J.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === u) {
                                if (!n && s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), e(a), t && a.stopPropagation();
                            }
                        }
                    }, [e, u, t, n]);
                }
                const au = 'Header_header_tab_a0',
                    nu = 'Header_header_tab__active_c2',
                    ru = 'Header_header_glow_3d',
                    su = (0, I.observer)(({ activeTab: u, setActiveTab: e }) => {
                        const t = Y().controls,
                            a = R.strings.cosmicEvent.postBattleScreen,
                            r = R.images.cosmic_event.gui.maps.icons.postBattleView;
                        var s;
                        return (
                            (s = t.onClose),
                            tu(J.n.ESCAPE, s),
                            n().createElement(
                                'div',
                                { className: 'Header_header_fa' },
                                n().createElement(
                                    'div',
                                    {
                                        className: C()(au, u === ot.BattleResults && nu),
                                        onMouseEnter: () => k('highlight'),
                                        onClick: () => {
                                            k('yes1'), e(ot.BattleResults);
                                        },
                                    },
                                    n().createElement('img', { className: ru, src: r.tab_hover() }),
                                    a.tabs.battleResults(),
                                ),
                                n().createElement('div', { className: 'Header_header_splitter_c1' }),
                                n().createElement(
                                    'div',
                                    {
                                        className: C()(au, u === ot.BattleScore && nu),
                                        onMouseEnter: () => k('highlight'),
                                        onClick: () => {
                                            k('yes1'), e(ot.BattleScore);
                                        },
                                    },
                                    n().createElement('img', { className: ru, src: r.tab_hover() }),
                                    a.tabs.battleScore(),
                                ),
                                n().createElement(Z, {
                                    caption: a.close(),
                                    onClick: t.onClose,
                                    classNames: { base: 'Header_header_button_ec' },
                                    side: 'right',
                                    type: 'close',
                                }),
                            )
                        );
                    });
                var iu = t(948);
                let ou;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(ou || (ou = {}));
                const lu = (u) => u.replace(/&nbsp;/g, ' '),
                    cu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    _u = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Eu = (u, e, t = ou.left) => u.split(e).reduce(t === ou.left ? cu : _u, []),
                    mu = (() => {
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
                    Au = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Fu = ({ binding: u, text: e = '', classMix: t, alignment: r = ou.left, formatWithBrackets: s }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const i = s && u ? ((o = u), e.replace(/\{\w+\}/g, (u) => String(o[u.slice(1, -1)]))) : e;
                        var o;
                        return n().createElement(
                            a.Fragment,
                            null,
                            i.split('\n').map((e, s) =>
                                n().createElement(
                                    'div',
                                    { className: C()('FormatText_base_d0', t), key: `${e}-${s}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                            t && u in t
                                                ? t[u]
                                                : ((u, e = ou.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return Au.includes(t)
                                                          ? mu(u)
                                                          : 'ja' === t
                                                            ? (0, iu.loadDefaultJapaneseParser)()
                                                                  .parse(u)
                                                                  .map((u) => lu(u))
                                                            : ((u, e = ou.left) => {
                                                                  let t = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      n = lu(u);
                                                                  return (
                                                                      Eu(n, /( )/, e).forEach(
                                                                          (u) => (t = t.concat(Eu(u, a, ou.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(u, e);
                                                  })(u, e),
                                        ))(e, r, u).map((u, e) =>
                                        n().createElement(a.Fragment, { key: `${e}-${u}` }, u),
                                    ),
                                ),
                            ),
                        );
                    },
                    du = 'TitleDecoration_dot_1d';
                var Du = t(887),
                    Bu = t.n(Du);
                const Cu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    gu = (u) => u.includes('_') && ((u) => Cu.includes(u))(u.split('_').at(-1)),
                    pu = [h.ExtraLarge, h.Large, h.Medium, h.Small, h.ExtraSmall],
                    hu = (u, e) =>
                        Object.keys(u).reduce((t, a) => {
                            const n = String(a);
                            if (n in t) return t;
                            if (gu(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const r = pu.indexOf(e),
                                    s = (-1 !== r ? Cu.slice(r) : [])
                                        .map((u) => a + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    i = s ? u[s] : void 0;
                                return (t[a] = void 0 !== i ? i : u[a]), t;
                            }
                            const r = u[n];
                            return (
                                void 0 === r ||
                                    ((u, e) => Cu.some((t) => void 0 !== e[`${u}_${t}`]))(n, u) ||
                                    (t[n] = r),
                                t
                            );
                        }, {}),
                    vu = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    fu = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function bu() {
                    return (
                        (bu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        bu.apply(this, arguments)
                    );
                }
                Object.keys(Bu());
                const wu = {
                        XL: { mt: vu.mt__XL, mr: vu.mr__XL, mb: vu.mb__XL, ml: vu.ml__XL },
                        LG: { mt: vu.mt__LG, mr: vu.mr__LG, mb: vu.mb__LG, ml: vu.ml__LG },
                        MDp: { mt: vu.mt__MDp, mr: vu.mr__MDp, mb: vu.mb__MDp, ml: vu.ml__MDp },
                        MD: { mt: vu.mt__MD, mr: vu.mr__MD, mb: vu.mb__MD, ml: vu.ml__MD },
                        SMp: { mt: vu.mt__SMp, mr: vu.mr__SMp, mb: vu.mb__SMp, ml: vu.ml__SMp },
                        SM: { mt: vu.mt__SM, mr: vu.mr__SM, mb: vu.mb__SM, ml: vu.ml__SM },
                        XS: { mt: vu.mt__XS, mr: vu.mr__XS, mb: vu.mb__XS, ml: vu.ml__XS },
                    },
                    Su = (Object.keys(wu), ['mt', 'mr', 'mb', 'ml']),
                    yu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Ru = ((u, e = hu) => {
                        const t = (
                            (u, e = hu) =>
                            (t) => {
                                const r = b().mediaSize,
                                    s = (0, a.useMemo)(() => e(t, r), [t, r]);
                                return n().createElement(u, s);
                            }
                        )(u, e);
                        return n().memo((e) =>
                            Object.keys(e).some((u) => gu(String(u)) && void 0 !== e[u])
                                ? n().createElement(t, e)
                                : n().createElement(u, e),
                        );
                    })((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            s = u.m,
                            i = u.mt,
                            o = void 0 === i ? s : i,
                            l = u.mr,
                            c = void 0 === l ? s : l,
                            _ = u.mb,
                            E = void 0 === _ ? s : _,
                            m = u.ml,
                            A = void 0 === m ? s : m,
                            F = u.column,
                            d = u.row,
                            D = u.flexDirection,
                            B = void 0 === D ? (F ? 'column' : d && 'row') || void 0 : D,
                            g = u.flexStart,
                            p = u.center,
                            h = u.flexEnd,
                            v = u.spaceBetween,
                            f = u.spaceAround,
                            b = u.justifyContent,
                            w =
                                void 0 === b
                                    ? (g ? 'flex-start' : p && 'center') ||
                                      (h && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : b,
                            S = u.alignItems,
                            y = void 0 === S ? (g ? 'flex-start' : p && 'center') || (h && 'flex-end') || void 0 : S,
                            R = u.alignSelf,
                            T = u.wrap,
                            x = u.flexWrap,
                            P = void 0 === x ? (T ? 'wrap' : void 0) : x,
                            M = u.grow,
                            N = u.shrink,
                            O = u.flex,
                            L = void 0 === O ? (M || N ? `${M ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : O,
                            k = u.style,
                            I = u.children,
                            U = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, fu);
                        const H = (0, a.useMemo)(() => {
                                const u = { mt: o, mr: c, mb: E, ml: A },
                                    e = ((u) =>
                                        Su.reduce((e, t) => {
                                            const a = u[t];
                                            return a && 'number' != typeof a ? e.concat(wu[!0 === a ? 'MD' : a][t]) : e;
                                        }, []))(u),
                                    a = ((u) =>
                                        Su.reduce((e, t) => {
                                            const a = u[t];
                                            return 'number' == typeof a && (e[yu[t]] = a + 'rem'), e;
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, k, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: L,
                                        alignSelf: R,
                                        display: B || y ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: P,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, o, c, E, A, k, L, R, B, P, w, y]),
                            G = H.computedStyle,
                            W = H.computedClassNames;
                        return n().createElement('div', bu({ className: C()(vu.base, ...W, e), style: G }, U), I);
                    }),
                    Tu = ({ className: u, text: e, children: t }) =>
                        n().createElement(
                            Ru,
                            { column: !0, className: u },
                            n().createElement(
                                Ru,
                                { row: !0 },
                                n().createElement('div', { className: du }),
                                n().createElement('div', { className: du }),
                                n().createElement('div', { className: du }),
                                n().createElement('div', { className: du }),
                                n().createElement('div', { className: 'TitleDecoration_text_ce' }, e),
                                n().createElement('img', {
                                    className: 'TitleDecoration_deco_right_4d',
                                    src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.title_deco(),
                                    alt: '',
                                }),
                            ),
                            t,
                        );
                let xu, Pu, Mu, Nu, Ou, Lu, ku;
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
                })(xu || (xu = {})),
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
                    })(Pu || (Pu = {})),
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
                    })(Mu || (Mu = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(Nu || (Nu = {})),
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
                    })(Ou || (Ou = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(Lu || (Lu = {})),
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
                    })(ku || (ku = {}));
                class Iu extends n().PureComponent {
                    render() {
                        let u;
                        u = 'gold' === this.props.format ? uu.B3.GOLD : uu.B3.INTEGRAL;
                        const e = uu.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                Iu.defaultProps = { format: 'integral' };
                const Uu = [
                        xu.Items,
                        xu.Equipment,
                        xu.Xp,
                        xu.XpFactor,
                        xu.Blueprints,
                        xu.BlueprintsAny,
                        xu.Goodies,
                        xu.Berths,
                        xu.Slots,
                        xu.Tokens,
                        xu.CrewSkins,
                        xu.CrewBooks,
                        xu.Customizations,
                        xu.CreditsFactor,
                        xu.TankmenXp,
                        xu.TankmenXpFactor,
                        xu.FreeXpFactor,
                        xu.BattleToken,
                        xu.PremiumUniversal,
                        xu.NaturalCover,
                        xu.BpCoin,
                        xu.BattlePassSelectToken,
                        xu.BattlaPassFinalAchievement,
                        xu.BattleBadge,
                        xu.BonusX5,
                        xu.CrewBonusX3,
                        xu.NewYearFillers,
                        xu.NewYearInvoice,
                        xu.EpicSelectToken,
                        xu.Comp7TokenWeeklyReward,
                        xu.BattleBoosterGift,
                        xu.OptionalDevice,
                        xu.FragmentAntimatter,
                        xu.CosmicLootbox,
                    ],
                    Hu = [xu.Gold, xu.Credits, xu.Crystal, xu.FreeXp],
                    Gu = [xu.BattlePassPoints],
                    Wu = [xu.PremiumPlus, xu.Premium],
                    ju = ['engravings', 'backgrounds'],
                    $u = ['engraving', 'background'],
                    Xu = (u, e = Mu.Small) => {
                        const t = u.name,
                            a = u.type,
                            n = u.value,
                            r = u.icon,
                            s = u.item,
                            i = u.dogTagType,
                            o = ((u) => {
                                switch (u) {
                                    case Mu.S600x450:
                                        return 'c_600x450';
                                    case Mu.S400x300:
                                        return 'c_400x300';
                                    case Mu.S296x222:
                                        return 'c_296x222';
                                    case Mu.S232x174:
                                        return 'c_232x174';
                                    case Mu.Big:
                                        return 'c_80x80';
                                    case Mu.Small:
                                        return 'c_48x48';
                                    default:
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${r}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${r}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const a = ju[u];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(a),
                                            r = n.$dyn(t);
                                        return r ? `${r}` : `${n.$dyn($u[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, e, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${r}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    Vu = [Mu.Small, Mu.Big],
                    qu = [
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
                function Yu(u) {
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
                const zu = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: uu.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Ku = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            s = u.onMouseLeave,
                            i = u.onMouseDown,
                            o = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = u.ignoreMouseClick,
                            E = void 0 !== _ && _,
                            m = u.decoratorId,
                            A = void 0 === m ? 0 : m,
                            F = u.isEnabled,
                            d = void 0 === F || F,
                            D = u.targetId,
                            B = void 0 === D ? 0 : D,
                            C = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, qu);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
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
                            f = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (zu(t, A, { isMouseEvent: !0, on: !0, arguments: Yu(n) }, v),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, A, n, v, C]),
                            b = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        zu(t, A, { on: !1 }, v),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, A, v, g]),
                            w = (0, a.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const u = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === d && b();
                            }, [d, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            ),
                            d
                                ? (0, a.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                          r && r(u),
                                                          S && S(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  b(), null == s || s(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === E && b(), null == o || o(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === E && b(), null == i || i(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : e
                        );
                        var S;
                    },
                    Qu = ['children'];
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
                const Ju = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, Qu);
                        return n().createElement(
                            Ku,
                            Zu(
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
                    ue = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ee() {
                    return (
                        (ee =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        ee.apply(this, arguments)
                    );
                }
                const te = R.views.common.tooltip_window.simple_tooltip_content,
                    ae = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            s = u.note,
                            i = u.alert,
                            o = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, ue);
                        const c = (0, a.useMemo)(() => {
                            const u = Object.assign({}, o, { body: t, header: r, note: s, alert: i });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [i, t, r, s, o]);
                        return n().createElement(
                            Ku,
                            ee(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? te.SimpleTooltipHtmlContent('resId') : te.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            e,
                        );
                        var _;
                    };
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                const re = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const a = n().createElement('div', { className: t }, u);
                        if (e.header || e.body) return n().createElement(ae, e, a);
                        const r = e.contentId;
                        return r ? n().createElement(Ku, ne({}, e, { contentId: r }), a) : n().createElement(Ju, e, a);
                    },
                    se = {
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
                    ie = ({
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: a = Mu.Big,
                        special: r,
                        value: s,
                        valueType: i,
                        style: o,
                        className: l,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const m = ((u, e) => {
                                if (void 0 === e || !Vu.includes(u)) return null;
                                switch (e) {
                                    case Ou.BATTLE_BOOSTER:
                                    case Ou.BATTLE_BOOSTER_REPLACE:
                                        return Lu.BATTLE_BOOSTER;
                                }
                            })(a, r),
                            A = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case Ou.BATTLE_BOOSTER:
                                        return ku.BATTLE_BOOSTER;
                                    case Ou.BATTLE_BOOSTER_REPLACE:
                                        return ku.BATTLE_BOOSTER_REPLACE;
                                    case Ou.BUILT_IN_EQUIPMENT:
                                        return ku.BUILT_IN_EQUIPMENT;
                                    case Ou.EQUIPMENT_PLUS:
                                        return ku.EQUIPMENT_PLUS;
                                    case Ou.EQUIPMENT_TROPHY_BASIC:
                                        return ku.EQUIPMENT_TROPHY_BASIC;
                                    case Ou.EQUIPMENT_TROPHY_UPGRADED:
                                        return ku.EQUIPMENT_TROPHY_UPGRADED;
                                    case Ou.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ku.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Ou.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ku.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Ou.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ku.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Ou.PROGRESSION_STYLE_UPGRADED_1:
                                        return ku.PROGRESSION_STYLE_UPGRADED_1;
                                    case Ou.PROGRESSION_STYLE_UPGRADED_2:
                                        return ku.PROGRESSION_STYLE_UPGRADED_2;
                                    case Ou.PROGRESSION_STYLE_UPGRADED_3:
                                        return ku.PROGRESSION_STYLE_UPGRADED_3;
                                    case Ou.PROGRESSION_STYLE_UPGRADED_4:
                                        return ku.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            F = ((u, e) => {
                                if (void 0 === u) return null;
                                switch (e) {
                                    case Nu.MULTI: {
                                        const e = Number(u);
                                        return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                    }
                                    case Nu.CURRENCY:
                                    case Nu.NUMBER:
                                        return n().createElement(Iu, { format: 'integral', value: Number(u) });
                                    case Nu.PREMIUM_PLUS: {
                                        const e = Number(u);
                                        return isNaN(e) ? u : null;
                                    }
                                    default:
                                        return u;
                                }
                            })(s, i);
                        return n().createElement(
                            'div',
                            { className: C()(se.base, se[`base__${a}`], l), style: o },
                            n().createElement(
                                re,
                                { tooltipArgs: _, className: se.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: C()(se.image, null == c ? void 0 : c.image) },
                                        m &&
                                            n().createElement('div', {
                                                className: C()(se.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${m}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            n().createElement('div', {
                                                className: C()(se.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        A &&
                                            n().createElement('div', {
                                                className: C()(se.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    F &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    se.info,
                                                    se[`info__${u}`],
                                                    i === Nu.MULTI && se.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            F,
                                        ),
                                ),
                            ),
                            t &&
                                n().createElement(
                                    re,
                                    { tooltipArgs: E },
                                    n().createElement('div', {
                                        className: C()(se.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    oe = ({ current: u, total: e, className: t }) =>
                        n().createElement(
                            'div',
                            { className: C()('ProgressBar_base_86', u === e && 'ProgressBar_base__done_a8', t) },
                            n().createElement(
                                'div',
                                {
                                    className: 'ProgressBar_current_a7',
                                    style: { width: 0 !== e ? (100 * u) / e + '%' : '0' },
                                },
                                n().createElement('div', { className: 'ProgressBar_current_overlay_6c' }),
                            ),
                        );
                function le() {
                    return (
                        (le =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        le.apply(this, arguments)
                    );
                }
                const ce = ({
                        className: u,
                        title: e,
                        description: t,
                        currentProgress: a,
                        totalProgress: r,
                        bonuses: s,
                        includeCompactVariant: i,
                        alwaysShowRewards: o,
                    }) => {
                        const l = a >= r,
                            c = l
                                ? R.images.cosmic_event.gui.maps.icons.missions.icon_done()
                                : R.images.cosmic_event.gui.maps.icons.missions.icon_in_progress(),
                            _ = n().useMemo(
                                () =>
                                    s.map((u) => {
                                        return {
                                            name: u.name,
                                            image: Xu(u, Mu.Big),
                                            value: u.value,
                                            valueType:
                                                ((e = u.name),
                                                Uu.includes(e)
                                                    ? Nu.MULTI
                                                    : Hu.includes(e)
                                                      ? Nu.CURRENCY
                                                      : Gu.includes(e)
                                                        ? Nu.NUMBER
                                                        : Wu.includes(e)
                                                          ? Nu.PREMIUM_PLUS
                                                          : Nu.STRING),
                                        };
                                        var e;
                                    }),
                                [s],
                            );
                        return n().createElement(
                            'div',
                            {
                                className: C()(
                                    'Mission_base_3a',
                                    u,
                                    l && 'Mission_base__done_69',
                                    i && 'Mission_base__withCompactVariant_3d',
                                    o && 'Mission_base__showRewards_d8',
                                ),
                                onMouseEnter: () => k('highlight'),
                            },
                            n().createElement(
                                'div',
                                { className: 'Mission_content_94' },
                                n().createElement('div', { className: 'Mission_title_d6' }, e),
                                n().createElement('div', { className: 'Mission_description_68' }, t),
                                n().createElement(
                                    'div',
                                    { className: 'Mission_progress_54' },
                                    n().createElement(oe, {
                                        className: 'Mission_progress_bar_b3',
                                        current: a,
                                        total: r,
                                    }),
                                    n().createElement('div', { className: 'Mission_progress_values_b6' }, a, ' / ', r),
                                ),
                            ),
                            n().createElement('img', { className: 'Mission_icon_2c', src: c, alt: '' }),
                            n().createElement(
                                'div',
                                { className: 'Mission_rewards_33' },
                                _.map((u, e) =>
                                    n().createElement(
                                        'div',
                                        { className: 'Mission_reward_d0', key: e },
                                        n().createElement(
                                            ie,
                                            le({ size: Mu.Small, className: 'Mission_reward_info_05' }, u),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    _e = (u) => (u < 0.5 ? 8 * Math.pow(u, 3) : 1 - Math.pow(1 - u, 3)),
                    Ee = function (u, e, t = 5e3, n = 0, r = _e, s) {
                        const i = (0, a.useState)(u),
                            o = i[0],
                            l = i[1];
                        return (
                            (0, a.useEffect)(() => {
                                let a;
                                const i = Date.now(),
                                    o = t - n + Math.random() * n * 2;
                                return (
                                    (function n() {
                                        if (!t) return l(e), void (null == s || s());
                                        const c = Date.now() - i,
                                            _ = Math.min(1, c / o),
                                            E = u + (e - u) * r(_);
                                        _ < 1 && c < o
                                            ? (l(E), (a = requestAnimationFrame(n)))
                                            : (l(e), null == s || s());
                                    })(),
                                    () => cancelAnimationFrame(a)
                                );
                            }, [u, e, t, n, r, s]),
                            o
                        );
                    },
                    me = (u) => (u < 0.5 ? 4 * Math.pow(u, 3) : 1 - Math.pow(-2 * u + 2, 3) / 2),
                    Ae = [...[...Array(94).keys()].map((u) => String.fromCharCode(33 + u))],
                    Fe = function (u, e = 5e3, t = 0, n = Ae, r = me) {
                        const s = (0, a.useState)(''),
                            i = s[0],
                            o = s[1];
                        return (
                            (0, a.useEffect)(() => {
                                let a;
                                const r = u,
                                    s = Date.now(),
                                    i = e - t + Math.random() * t * 2,
                                    l = (function (u) {
                                        for (let t = u.length - 1; t > 0; t--) {
                                            const a = Math.floor(Math.random() * (t + 1));
                                            var e = [u[a], u[t]];
                                            (u[t] = e[0]), (u[a] = e[1]);
                                        }
                                        return u;
                                    })([...Array(u.length).keys()]);
                                return (
                                    (function t() {
                                        if (!e) return void o(u);
                                        const c = Date.now() - s,
                                            _ = Math.min(1, c / i),
                                            E = l.slice(0, Math.ceil(_ * l.length)),
                                            m = r
                                                .split('')
                                                .map((u, e) =>
                                                    E.includes(e) ? u : n[Math.floor(Math.random() * n.length)],
                                                )
                                                .join('');
                                        o(m), _ < 1 && c < i ? (a = requestAnimationFrame(t)) : o(u);
                                    })(),
                                    () => cancelAnimationFrame(a)
                                );
                            }, [u, e, t, n, r]),
                            i
                        );
                    };
                let de;
                !(function (u) {
                    (u[(u.FRAGMENTS = 0)] = 'FRAGMENTS'),
                        (u[(u.NEUTRALIZED = 1)] = 'NEUTRALIZED'),
                        (u[(u.EVACUATED = 2)] = 'EVACUATED');
                })(de || (de = {}));
                const De = {
                        [de.FRAGMENTS]: R.images.cosmic_event.gui.maps.icons.postBattleView.icon_fragments(),
                        [de.NEUTRALIZED]: R.images.cosmic_event.gui.maps.icons.postBattleView.icon_neutralized(),
                        [de.EVACUATED]: R.images.cosmic_event.gui.maps.icons.postBattleView.icon_evacuated(),
                    },
                    Be = (0, I.observer)(
                        ({
                            title: u,
                            valueBase: e,
                            value: t,
                            isDeserter: a,
                            animate: r,
                            delayClass: s,
                            noPoints: i,
                            pointsType: o,
                        }) => {
                            const l = Ee(0, t, r ? fe : 0, be),
                                c = a ? R.strings.cosmicEvent.postBattleScreen.battleScore.noPoints() : l.toFixed(0),
                                _ = Fe(u, r ? 1.5 * fe : 0, be, ve),
                                E = i ? R.strings.cosmicEvent.postBattleScreen.battleScore.noPoints() : c;
                            return n().createElement(
                                'div',
                                { className: C()('Stat_stat_46', r && 'Stat_fade_from_bottom_f7', r && s) },
                                n().createElement('img', { className: 'Stat_stat_image_a2', src: De[o] }),
                                n().createElement(Fu, {
                                    text: e,
                                    classMix: 'Stat_stat_value_d0',
                                    binding: { value: E },
                                }),
                                n().createElement('div', { className: 'Stat_stat_title_ce' }, _),
                            );
                        },
                    ),
                    Ce = {
                        cff_splash: 'Points_cff_splash_41',
                        cff_splash_small: 'Points_cff_splash_small_8c',
                        cff_title: 'Points_cff_title_89',
                        cff_heading: 'Points_cff_heading_69',
                        cff_heading_small: 'Points_cff_heading_small_b3',
                        cff_body: 'Points_cff_body_70',
                        cff_emphasis: 'Points_cff_emphasis_a0',
                        cff_emphasis_small: 'Points_cff_emphasis_small_63',
                        cff_body_small: 'Points_cff_body_small_3b',
                        cff_player: 'Points_cff_player_39',
                        cff_decorative_title: 'Points_cff_decorative_title_09',
                        cff_decorative_body: 'Points_cff_decorative_body_90',
                        boxImage: 'Points_boxImage_43',
                        transparent: 'Points_transparent_12',
                        fade_in: 'Points_fade_in_9e',
                        fade_from_left: 'Points_fade_from_left_d5',
                        fade_from_bottom: 'Points_fade_from_bottom_27',
                        fade_out: 'Points_fade_out_ab',
                        fade_to_left: 'Points_fade_to_left_38',
                        fade_to_bottom: 'Points_fade_to_bottom_c4',
                        delay_100: 'Points_delay_100_3e',
                        delay_200: 'Points_delay_200_b6',
                        delay_300: 'Points_delay_300_36',
                        delay_400: 'Points_delay_400_29',
                        delay_500: 'Points_delay_500_ec',
                        delay_600: 'Points_delay_600_8e',
                        delay_700: 'Points_delay_700_cb',
                        delay_800: 'Points_delay_800_e5',
                        delay_1000: 'Points_delay_1000_04',
                        delay_1250: 'Points_delay_1250_78',
                        delay_1500: 'Points_delay_1500_fb',
                        delay_3000: 'Points_delay_3000_0f',
                        glitch: 'Points_glitch_31',
                        CFF_MAIN: 'Points_CFF_MAIN_88',
                        CFF_SUPPORT: 'Points_CFF_SUPPORT_52',
                        CFF_DONE: 'Points_CFF_DONE_f1',
                        CFF_PHASE: 'Points_CFF_PHASE_ac',
                        CFF_IMPORTANT: 'Points_CFF_IMPORTANT_ff',
                        CFF_HERO: 'Points_CFF_HERO_9b',
                        CFF_ATTENTION: 'Points_CFF_ATTENTION_6c',
                        CFF_BACKGROUND: 'Points_CFF_BACKGROUND_e9',
                        CFF_MINE: 'Points_CFF_MINE_3c',
                        CFF_VORTEX: 'Points_CFF_VORTEX_57',
                        CFF_BARRIER: 'Points_CFF_BARRIER_f8',
                        CFF_JUMP: 'Points_CFF_JUMP_b4',
                        points: 'Points_points_b5',
                        points_bg: 'Points_points_bg_6e',
                        glitch_point_a: 'Points_glitch_point_a_cc',
                        glitch_point_b: 'Points_glitch_point_b_c6',
                        points_score: 'Points_points_score_5c',
                        points_value: 'Points_points_value_e4',
                        points_char: 'Points_points_char_fd',
                        points_icon: 'Points_points_icon_1e',
                        points_title: 'Points_points_title_f1',
                        glitch1: 'Points_glitch1_3d',
                        glitch2: 'Points_glitch2_ae',
                        glitch3: 'Points_glitch3_a5',
                    },
                    ge = () => k('ev_cosmic_2024_pbs_score_stop'),
                    pe = (0, I.observer)(({ title: u, value: e, isDeserter: t, animate: r }) => {
                        const s = b().mediaSize,
                            i =
                                R.images.cosmic_event.gui.maps.icons.postBattleView.points_bg[
                                    s >= h.Medium ? 'large' : 'small'
                                ],
                            o = t ? 0 : e,
                            l = Ee(0, o, r ? fe : 0, be, void 0, ge);
                        (0, a.useEffect)(() => {
                            r && k('ev_cosmic_2024_pbs_score_start');
                        }, [r]);
                        const c = `+${l.toFixed(0).padStart(o.toString().length, '0')}`,
                            _ = Fe(u, r ? 1.5 * fe : 0, be, ve);
                        return n().createElement(
                            'div',
                            { className: Ce.points },
                            n().createElement(
                                'div',
                                { className: Ce.points_bg },
                                n().createElement('img', { className: Ce.points_bg_glw, src: i.glow() }),
                                n().createElement('img', { className: Ce.points_bg_sta, src: i.stripes_top_a() }),
                                n().createElement('img', { className: Ce.points_bg_stb, src: i.stripes_top_b() }),
                                n().createElement('img', { className: Ce.points_bg_top, src: i.top() }),
                                n().createElement('img', { className: Ce.points_bg_sba, src: i.stripes_bottom_a() }),
                                n().createElement('img', { className: Ce.points_bg_sbb, src: i.stripes_bottom_b() }),
                                n().createElement('img', { className: Ce.points_bg_btm, src: i.bottom() }),
                            ),
                            n().createElement(
                                'div',
                                { className: Ce.points_score },
                                n().createElement(
                                    'div',
                                    { className: Ce.points_value },
                                    t
                                        ? R.strings.cosmicEvent.postBattleScreen.battleResults.desserter()
                                        : c
                                              .split('')
                                              .map((u, e) =>
                                                  n().createElement('span', { key: e, className: Ce.points_char }, u),
                                              ),
                                ),
                                n().createElement('img', {
                                    className: Ce.points_icon,
                                    src: R.images.cosmic_event.gui.maps.icons.missions.icon_antimatter_48x48(),
                                }),
                            ),
                            n().createElement('div', { className: Ce.points_title }, _),
                        );
                    });
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        he.apply(this, arguments)
                    );
                }
                const ve = [
                        R.strings.cosmicEvent.postBattleScreen.button(),
                        R.strings.cosmicEvent.postBattleScreen.close(),
                        R.strings.cosmicEvent.postBattleScreen.battleResults.antimatter(),
                        R.strings.cosmicEvent.postBattleScreen.battleResults.fragments.title(),
                        R.strings.cosmicEvent.postBattleScreen.battleResults.eliminations.title(),
                        R.strings.cosmicEvent.postBattleScreen.battleResults.evacuation.title(),
                        R.strings.cosmicEvent.postBattleScreen.battleResults.place(),
                        R.strings.cosmicDecor.postBattleScreen.battleResults.decoration(),
                        R.strings.cosmicEvent.postBattleScreen.battleResults.desserter(),
                        R.strings.cosmicEvent.postBattleScreen.battleScore.actions(),
                        R.strings.cosmicEvent.postBattleScreen.battleScore.place(),
                        R.strings.cosmicEvent.postBattleScreen.battleScore.name(),
                        R.strings.cosmicEvent.postBattleScreen.battleScore.noPoints(),
                        R.strings.cosmicDecor.postBattleScreen.battleScore.decoration(),
                        R.strings.cosmicEvent.postBattleScreen.battleScore.scoring.evacuation(),
                        R.strings.cosmicEvent.postBattleScreen.battleScore.scoring.fragmentDelivering(),
                    ]
                        .join('')
                        .split('')
                        .filter((u, e, t) => t.indexOf(u) === e),
                    fe = 2e3,
                    be = 1e3,
                    we = (0, I.observer)(({ animate: u }) => {
                        const e = b().mediaWidth,
                            t = Y().model,
                            r = R.strings.cosmicEvent.postBattleScreen.battleResults,
                            s = R.strings.cosmicDecor.postBattleScreen.battleResults,
                            i = t.computes.getCurrentPlayerEntry(),
                            o = i.isDeserter,
                            l = i.place,
                            c = t.computes.getPlayersList(),
                            _ = t.computes.getDailyMissions() || [],
                            E = Math.max(c.length + 1, 11),
                            m = (0, a.useState)(0),
                            A = m[0],
                            F = m[1],
                            d = t.primitives.evacuationPosition.get();
                        return (
                            (0, a.useEffect)(() => {
                                F(l);
                            }, [l]),
                            n().createElement(
                                'div',
                                { className: 'BattleResults_base_d0' },
                                n().createElement(
                                    'div',
                                    { className: 'BattleResults_title_wrapper_5f' },
                                    n().createElement(Tu, { text: s.decoration() }),
                                    n().createElement('div', { className: 'BattleResults_title_ce' }, r.place()),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'BattleResults_place_b7' },
                                    [...Array(3).keys()].map((u) =>
                                        n().createElement(
                                            'div',
                                            {
                                                key: u,
                                                className: 'BattleResults_place_items_78',
                                                style: {
                                                    transform: `translate(-50%, -${A}em)`,
                                                    transitionDuration: `${Math.max(Math.min(750 * A, 4e3), 2e3)}ms`,
                                                },
                                            },
                                            [...Array(E).keys()].map((u) =>
                                                n().createElement(
                                                    'span',
                                                    { key: u, className: 'BattleResults_place_item_13' },
                                                    u.toString().padStart(E.toString().length, '0'),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'BattleResults_stats_d3' },
                                    n().createElement(Be, {
                                        title: r.fragments.title(),
                                        valueBase: r.fragments.value(),
                                        value: t.primitives.fragmentsDelivered.get(),
                                        isDeserter: o,
                                        animate: u,
                                        delayClass: 'BattleResults_delay_100_50',
                                        pointsType: de.FRAGMENTS,
                                    }),
                                    n().createElement(Be, {
                                        title: r.eliminations.title(),
                                        valueBase: r.eliminations.value(),
                                        value: t.primitives.killAmount.get(),
                                        isDeserter: o,
                                        animate: u,
                                        delayClass: 'BattleResults_delay_400_d4',
                                        pointsType: de.NEUTRALIZED,
                                    }),
                                    n().createElement(Be, {
                                        title: r.evacuation.title(),
                                        valueBase: r.evacuation.value(),
                                        value: d,
                                        isDeserter: o,
                                        noPoints: d < 1,
                                        animate: u,
                                        delayClass: 'BattleResults_delay_700_5b',
                                        pointsType: de.EVACUATED,
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'BattleResults_points_container_22' },
                                    n().createElement(pe, {
                                        title: r.antimatter(),
                                        value: t.primitives.totalPoints.get(),
                                        isDeserter: o,
                                        animate: u,
                                    }),
                                    Boolean(_.length) &&
                                        n().createElement(
                                            'div',
                                            { className: 'BattleResults_missions_56' },
                                            n().createElement(Fu, {
                                                text: r.missions(),
                                                classMix: 'BattleResults_missions_title_ec',
                                                binding: { count: _.length },
                                            }),
                                            n().createElement(
                                                'div',
                                                null,
                                                _.map((u, t) =>
                                                    n().createElement(
                                                        'div',
                                                        { className: 'BattleResults_missions_item_de', key: t },
                                                        n().createElement(
                                                            'div',
                                                            null,
                                                            n().createElement(
                                                                ce,
                                                                he({}, u, {
                                                                    alwaysShowRewards: !0,
                                                                    includeCompactVariant: e < v.Small,
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                ),
                            )
                        );
                    }),
                    Se = 'BattleScore_column_a8',
                    ye = 'BattleScore_row_94',
                    Re = 'BattleScore_row__header_e3',
                    Te = 'BattleScore_cell_22',
                    xe = 'BattleScore_row_bg_f2',
                    Pe = 'BattleScore_row_title_8b',
                    Me = 'BattleScore_row_title__name_76',
                    Ne = 'BattleScore_row_title__icon_b8',
                    Oe = 'BattleScore_icon_c0',
                    Le = 'BattleScore_row_title__line_4e',
                    ke = 'BattleScore_cell__place_45',
                    Ie = 'BattleScore_cell__first_3d',
                    Ue = 'BattleScore_cell__name_c9',
                    He = 'BattleScore_clan_13',
                    Ge = 'BattleScore_name_34',
                    We = 'BattleScore_cell__score_86',
                    je = 'BattleScore_cell__small_99';
                let $e;
                !(function (u) {
                    (u.Ram = 'ram'),
                        (u.Shot = 'shot'),
                        (u.AbilityHit = 'abilityHit'),
                        (u.Kill = 'kill'),
                        (u.FragmentHolderKill = 'fragmentHolderKill'),
                        (u.KillAssist = 'killAssist'),
                        (u.AbilityPickup = 'abilityPickup'),
                        (u.FragmentPickup = 'fragmentPickup'),
                        (u.FragmentCarrying = 'fragmentCarrying'),
                        (u.FragmentDelivering = 'fragmentDelivering'),
                        (u.Evacuation = 'evacuation');
                })($e || ($e = {}));
                const Xe = (0, I.observer)(() => {
                    const u = Y().model,
                        e = R.strings.cosmicEvent.postBattleScreen.battleScore,
                        t = R.strings.cosmicDecor.postBattleScreen.battleScore,
                        r = u.computes.getCurrentPlayerEntry().playerName,
                        s = {
                            [$e.FragmentDelivering]: e.scoring.fragmentDelivering(),
                            [$e.Evacuation]: e.scoring.evacuation(),
                        },
                        i = u.computes.getPlayersList(),
                        o = (0, a.useState)(i.find((u) => u.playerName === r) || i[0]),
                        l = o[0],
                        c = o[1];
                    return n().createElement(
                        'div',
                        { className: 'BattleScore_table_c2' },
                        n().createElement(
                            'div',
                            { className: Se },
                            n().createElement(
                                'div',
                                { className: C()(ye, Re) },
                                n().createElement(
                                    'div',
                                    { className: C()(Pe, 'BattleScore_row_title__place_9c') },
                                    e.place(),
                                ),
                                n().createElement('div', { className: C()(Pe, Me) }, e.name()),
                                n().createElement('div', { className: C()(Pe, Le) }),
                                n().createElement(
                                    'div',
                                    { className: C()(Pe, Ne) },
                                    n().createElement('img', {
                                        className: Oe,
                                        src: R.images.cosmic_event.gui.maps.icons.missions.icon_antimatter_14x14(),
                                    }),
                                ),
                                n().createElement('div', { className: C()(Pe, Le) }),
                            ),
                            i.map((u, t) => {
                                const a = u.place,
                                    s = u.playerName,
                                    i = u.playerClan,
                                    o = u.isDeserter,
                                    _ = u.totalPoints;
                                return n().createElement(
                                    'div',
                                    {
                                        key: t,
                                        className: C()(
                                            ye,
                                            s === r && 'BattleScore_row__player_c8',
                                            l.playerName === s && 'BattleScore_row__selected_d6',
                                        ),
                                        onClick: () => c(u),
                                    },
                                    n().createElement('div', { className: xe }),
                                    n().createElement('div', { className: C()(Te, ke, 1 === a && Ie) }, a),
                                    n().createElement(
                                        'div',
                                        { className: C()(Te, Ue) },
                                        n().createElement('div', { className: Ge }, s),
                                        Boolean(l.playerClan) && n().createElement('div', { className: He }, `[${i}]`),
                                    ),
                                    n().createElement('div', { className: C()(Te, We) }, o ? e.noPoints() : _),
                                );
                            }),
                            n().createElement(Fu, {
                                text: t.decoration(),
                                classMix: 'BattleScore_column_decoration_3b',
                                binding: { br: n().createElement('br', null) },
                            }),
                        ),
                        n().createElement(
                            'div',
                            { className: C()(Se, 'BattleScore_column__details_3c') },
                            n().createElement(
                                'div',
                                { className: C()(ye, Re) },
                                n().createElement('div', { className: C()(Pe, Me) }, e.actions()),
                                n().createElement('div', { className: C()(Pe, Le) }),
                                n().createElement(
                                    'div',
                                    { className: C()(Pe, Ne) },
                                    n().createElement('img', {
                                        className: Oe,
                                        src: R.images.cosmic_event.gui.maps.icons.missions.icon_antimatter_14x14(),
                                    }),
                                ),
                                n().createElement('div', { className: C()(Pe, Le) }),
                            ),
                            n().createElement(
                                'div',
                                { className: C()(ye, 'BattleScore_row__total_77') },
                                n().createElement('div', { className: xe }),
                                n().createElement('div', { className: C()(Te, ke, 1 === l.place && Ie) }, l.place),
                                n().createElement(
                                    'div',
                                    { className: C()(Te, Ue) },
                                    n().createElement('div', { className: Ge }, l.playerName),
                                    Boolean(l.playerClan) &&
                                        n().createElement('div', { className: He }, `[${l.playerClan}]`),
                                ),
                                n().createElement(
                                    'div',
                                    { className: C()(Te, We) },
                                    l.isDeserter ? e.noPoints() : l.totalPoints,
                                ),
                            ),
                            l.playersScore.map((u, t) => {
                                const a = s[u.type] || R.strings.cosmicEvent.common.scoring.$dyn(u.type);
                                return n().createElement(
                                    'div',
                                    { key: t, className: C()(ye, 'BattleScore_row__details_a7') },
                                    n().createElement('div', { className: C()(Te, ke, je) }),
                                    n().createElement(
                                        'div',
                                        { className: C()(Te, Ue, je, 'BattleScore_cell__lowercase_8a') },
                                        a,
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: C()(Te, We, je) },
                                        l.isDeserter ? e.noPoints() : u.eventPoints,
                                    ),
                                );
                            }),
                        ),
                    );
                });
                let Ve;
                !(function (u) {
                    (u.DayMonthNumeric = 'dayMonthNumeric'),
                        (u.DayMonthFull = 'dayMonthFull'),
                        (u.DayMonthFullTime = 'dayMonthFullTime'),
                        (u.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (u.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (u.ShortDate = 'shortDate'),
                        (u.ShortTime = 'ShortTime'),
                        (u.ShortDateTime = 'ShortDateTime'),
                        (u.FullDate = 'fullDate'),
                        (u.FullTime = 'fullTime'),
                        (u.FullDateTime = 'fullDateTime');
                })(Ve || (Ve = {}));
                var qe = t(613);
                Date.now();
                const Ye = qe.Ew.getRegionalDateTime,
                    ze = qe.Ew.getFormattedDateTime,
                    Ke = (0, a.memo)(({ datetime: u, format: e = Ve.ShortDate, isConvertedToLocal: t = !0 }) =>
                        Object.values(Ve).includes(e) ? Ye(u, e, t) : ze(u, e, t),
                    ),
                    Qe = {
                        cff_splash: 'Button_cff_splash_cf',
                        cff_splash_small: 'Button_cff_splash_small_90',
                        cff_title: 'Button_cff_title_ce',
                        cff_heading: 'Button_cff_heading_db',
                        cff_heading_small: 'Button_cff_heading_small_34',
                        cff_body: 'Button_cff_body_57',
                        cff_emphasis: 'Button_cff_emphasis_59',
                        cff_emphasis_small: 'Button_cff_emphasis_small_7e',
                        cff_body_small: 'Button_cff_body_small_de',
                        cff_player: 'Button_cff_player_f0',
                        cff_decorative_title: 'Button_cff_decorative_title_29',
                        cff_decorative_body: 'Button_cff_decorative_body_4b',
                        boxImage: 'Button_boxImage_29',
                        transparent: 'Button_transparent_6f',
                        fade_in: 'Button_fade_in_66',
                        fade_from_left: 'Button_fade_from_left_43',
                        fade_from_bottom: 'Button_fade_from_bottom_0a',
                        fade_out: 'Button_fade_out_be',
                        fade_to_left: 'Button_fade_to_left_78',
                        fade_to_bottom: 'Button_fade_to_bottom_6a',
                        delay_100: 'Button_delay_100_f0',
                        delay_200: 'Button_delay_200_88',
                        delay_300: 'Button_delay_300_14',
                        delay_400: 'Button_delay_400_78',
                        delay_500: 'Button_delay_500_c0',
                        delay_600: 'Button_delay_600_52',
                        delay_700: 'Button_delay_700_80',
                        delay_800: 'Button_delay_800_e9',
                        delay_1000: 'Button_delay_1000_a5',
                        delay_1250: 'Button_delay_1250_5f',
                        delay_1500: 'Button_delay_1500_43',
                        delay_3000: 'Button_delay_3000_ae',
                        glitch: 'Button_glitch_d4',
                        CFF_MAIN: 'Button_CFF_MAIN_c9',
                        CFF_SUPPORT: 'Button_CFF_SUPPORT_bd',
                        CFF_DONE: 'Button_CFF_DONE_8a',
                        CFF_PHASE: 'Button_CFF_PHASE_5d',
                        CFF_IMPORTANT: 'Button_CFF_IMPORTANT_4e',
                        CFF_HERO: 'Button_CFF_HERO_b3',
                        CFF_ATTENTION: 'Button_CFF_ATTENTION_53',
                        CFF_BACKGROUND: 'Button_CFF_BACKGROUND_47',
                        CFF_MINE: 'Button_CFF_MINE_d8',
                        CFF_VORTEX: 'Button_CFF_VORTEX_1d',
                        CFF_BARRIER: 'Button_CFF_BARRIER_b9',
                        CFF_JUMP: 'Button_CFF_JUMP_ef',
                        base: 'Button_base_3d',
                        base__main: 'Button_base__main_27',
                        base__done: 'Button_base__done_03',
                        base__disabled: 'Button_base__disabled_7c',
                        glitch1: 'Button_glitch1_db',
                        glitch2: 'Button_glitch2_aa',
                        glitch3: 'Button_glitch3_a1',
                    },
                    Ze = ['className', 'textVariant', 'color', 'onClick', 'children', 'disabled'];
                function Je() {
                    return (
                        (Je =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Je.apply(this, arguments)
                    );
                }
                const ut = { main: Qe.base__main, done: Qe.base__done, disabled: Qe.base__disabled },
                    et = (u) => {
                        let e = u.className,
                            t = u.textVariant,
                            a = u.color,
                            r = void 0 === a ? 'main' : a,
                            s = u.onClick,
                            i = u.children,
                            o = u.disabled,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, Ze);
                        return n().createElement(
                            Ru,
                            Je({ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }, l, {
                                className: C()(Qe.base, ut[o ? 'disabled' : r], t && Qe[t], e),
                                onClick: s,
                            }),
                            i,
                        );
                    },
                    tt = 'Announcer_text_9d',
                    at = ['className', 'active'];
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const rt = (u) => {
                        let e = u.className,
                            t = u.active,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, at);
                        return n().createElement(
                            'div',
                            nt({}, a, { className: C()('ListenIcon_base_4e', t && 'ListenIcon_base__active_66', e) }),
                            n().createElement('div', { className: 'ListenIcon_circle_inner_2f' }),
                            n().createElement('div', { className: 'ListenIcon_circle_outer_72' }),
                            n().createElement('img', {
                                src: R.images.cosmic_event.gui.maps.icons.progress_route.icon_listen(),
                            }),
                        );
                    },
                    st = ['text', 'time'],
                    it = (0, I.observer)((u) => {
                        let e = u.text,
                            t = u.time,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, st);
                        const s = (0, a.useState)(''),
                            i = s[0],
                            o = s[1],
                            l = Math.max(3e3, t),
                            c = (0, a.useRef)(null),
                            _ = (0, a.useRef)(null),
                            E = (0, a.useState)(!0),
                            m = E[0],
                            A = E[1],
                            F = (function (u, e = 5e3) {
                                const t = (0, a.useState)(''),
                                    n = t[0],
                                    r = t[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        if (!e) return void r(u);
                                        let t,
                                            a = '';
                                        const n = u,
                                            s = n.includes(' ')
                                                ? n.split(' ')
                                                : (function (u, e) {
                                                      const t = [];
                                                      for (let e = 0, a = u.length; e < a; e += 3)
                                                          t.push(u.substring(e, e + 3));
                                                      return t;
                                                  })(n),
                                            i = n.includes(' ') ? ' ' : '',
                                            o = Date.now();
                                        return (
                                            (function u() {
                                                const l = Date.now() - o,
                                                    c = Math.min(1, l / e),
                                                    _ = Math.min(Math.ceil(s.length * c), s.length),
                                                    E = s.slice(0, _).join(i);
                                                c < 1
                                                    ? (E !== a && ((a = E), r(E)), (t = requestAnimationFrame(u)))
                                                    : r(n);
                                            })(),
                                            () => cancelAnimationFrame(t)
                                        );
                                    }, [u, e]),
                                    n
                                );
                            })(i, l),
                            d = () => {
                                o(''), A(!0);
                            };
                        return (
                            (0, a.useEffect)(() => {
                                o(e);
                                const u = setTimeout(d, l + 2e3);
                                return () => clearTimeout(u);
                            }, [e, l]),
                            (0, a.useEffect)(() => {
                                const u = c.current,
                                    e = _.current;
                                if (u && e) {
                                    const t = u.getBoundingClientRect().height,
                                        a = e.getBoundingClientRect().height;
                                    A(!F || !t || t < a);
                                }
                            }, [F]),
                            n().createElement(
                                'div',
                                r,
                                n().createElement(
                                    'div',
                                    { className: C()('Announcer_base_17', i && 'Announcer_base__visible_1b') },
                                    n().createElement('div', { className: 'Announcer_image_91' }),
                                    n().createElement('img', {
                                        className: 'Announcer_close_59',
                                        src: R.images.cosmic_event.gui.maps.icons.announcer.close(),
                                        onClick: d,
                                    }),
                                    n().createElement(
                                        'div',
                                        { className: 'Announcer_name_d8' },
                                        R.strings.cosmicEvent.announcer.name(),
                                        n().createElement(
                                            'div',
                                            { className: 'Announcer_speaker_2a' },
                                            n().createElement(rt, { active: !0 }),
                                        ),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: 'Announcer_text_container_4a', ref: _ },
                                        n().createElement('div', { className: tt }, i),
                                        n().createElement(
                                            'div',
                                            {
                                                ref: c,
                                                className: C()(
                                                    tt,
                                                    'Announcer_text__absolute_70',
                                                    m && 'Announcer_text__oneLiner_b9',
                                                ),
                                            },
                                            F,
                                        ),
                                    ),
                                ),
                            )
                        );
                    });
                let ot;
                !(function (u) {
                    (u.BattleResults = 'BattleResults'), (u.BattleScore = 'BattleScore');
                })(ot || (ot = {}));
                const lt = (0, I.observer)(() => {
                    const u = Y(),
                        e = u.model,
                        t = u.controls,
                        r = e.announcer.get(),
                        s = e.computes.getCurrentPlayerEntry(),
                        i = R.strings.cosmicEvent.postBattleScreen,
                        o = (0, a.useState)(ot.BattleResults),
                        l = o[0],
                        c = o[1],
                        _ = (0, a.useState)(!1),
                        E = _[0],
                        m = _[1];
                    return n().createElement(
                        'div',
                        { className: C()('CosmicPostBattleApp_base_5f') },
                        n().createElement(it, {
                            className: 'CosmicPostBattleApp_announcer_ae',
                            text: r.text,
                            time: r.time,
                        }),
                        n().createElement('div', {
                            className: C()(
                                'CosmicPostBattleApp_overlay_30',
                                l === ot.BattleResults && 'CosmicPostBattleApp_overlay__active_59',
                            ),
                        }),
                        n().createElement(su, {
                            activeTab: l,
                            setActiveTab: (u) => {
                                m(!0), c(u);
                            },
                        }),
                        n().createElement(
                            'div',
                            { className: 'CosmicPostBattleApp_tab_d8' },
                            l === ot.BattleResults
                                ? n().createElement(we, { animate: !E })
                                : n().createElement(Xe, null),
                        ),
                        n().createElement(
                            'div',
                            { className: 'CosmicPostBattleApp_button_container_31' },
                            n().createElement(
                                et,
                                {
                                    className: 'CosmicPostBattleApp_button_26',
                                    onMouseEnter: () => k('highlight'),
                                    onClick: () => {
                                        k('yes1'), t.onClose();
                                    },
                                },
                                i.button(),
                            ),
                        ),
                        n().createElement(
                            'div',
                            { className: 'CosmicPostBattleApp_caption_8c' },
                            n().createElement(Fu, {
                                text: i.captionTitle(),
                                classMix: 'CosmicPostBattleApp_caption_title_50',
                                binding: { nickname: s.playerName },
                            }),
                            n().createElement(Fu, {
                                text: i.captionSubtitle(),
                                classMix: 'CosmicPostBattleApp_caption_subtitle_10',
                                binding: {
                                    timestamp: n().createElement(Ke, {
                                        datetime: e.primitives.battleOverTimestamp.get(),
                                        format: Ve.DayMonthFullTime,
                                    }),
                                },
                            }),
                        ),
                    );
                });
                engine.whenReady.then(() => {
                    L().render(
                        n().createElement(N, null, n().createElement(q, null, n().createElement(lt, null))),
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
        return __webpack_modules__[u].call(t.exports, t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, a) => {
            if (!e) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, a] = deferred[o], r = !0, s = 0; s < e.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[s]))
                            ? e.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
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
        (() => {
            var u = { 564: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        n,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (e && e(t); o < r.length; o++)
                        (n = r[o]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(718));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
