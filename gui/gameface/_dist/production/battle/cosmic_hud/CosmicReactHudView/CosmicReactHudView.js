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
                    t.d(u, { mouse: () => _, off: () => n, on: () => s, onResize: () => i, onScaleUpdated: () => l });
                var a = t(472),
                    r = t(176);
                const i = (0, a.E)('clientResized'),
                    l = (0, a.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    n = (e, u) => engine.off(e, u),
                    o = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    _ = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const i = `mouse${u}`,
                                            l = o[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            a(),
                                            () => {
                                                r &&
                                                    (l(),
                                                    window.removeEventListener(i, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
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
            959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => l,
                    });
                var a = t(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const l = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, u, t) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            472: (e, u, t) => {
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
            138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var a = t(959);
                const r = { view: t(641), client: a };
            },
            722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => a });
            },
            112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var a = t(472);
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
            641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => y,
                        events: () => i.U,
                        extraSize: () => p,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => d,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => v,
                        getScale: () => m,
                        getSize: () => E,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => f,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => l.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => n,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => P,
                    });
                var a = t(722),
                    r = t(112),
                    i = t(538),
                    l = t(566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function n(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function o(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function _(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function F(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function d() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    p = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    P = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => i });
                const a = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const i = u.args,
                                l = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, l, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, l));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    i = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            521: (e, u, t) => {
                'use strict';
                let a, r;
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
                    })(r || (r = {}));
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => i });
                var a = t(138);
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
                        const i = a.O.view.addModelObserver(e, t, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                r.__instance = void 0;
                const i = r;
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
                t.d(u, { ry: () => B });
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
                const r = a;
                var i = t(358),
                    l = t(613);
                let s;
                var n;
                ((n = s || (s = {}))[(n.UNDEFINED = 0)] = 'UNDEFINED'),
                    (n[(n.TOOLTIP = 1)] = 'TOOLTIP'),
                    (n[(n.POP_OVER = 2)] = 'POP_OVER'),
                    (n[(n.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (n[(n.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (n[(n.MOVE = 16)] = 'MOVE'),
                    (n[(n.CLOSE = 32)] = 'CLOSE'),
                    (n[(n.MINIMIZE = 64)] = 'MINIMIZE');
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(521),
                    F = t(138);
                const d = ['args'];
                function m(e, u, t, a, r, i, l) {
                    try {
                        var s = e[i](l),
                            n = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(n) : Promise.resolve(n).then(a, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (a, r) {
                                        var i = e.apply(u, t);
                                        function l(e) {
                                            m(i, a, r, l, s, 'next', e);
                                        }
                                        function s(e) {
                                            m(i, a, r, l, s, 'throw', e);
                                        }
                                        l(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, d);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((a = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    C = () => g(s.CLOSE),
                    h = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var f = t(572);
                const b = r.instance,
                    v = {
                        DataTracker: i.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: _,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), i) => {
                            const l = F.O.view.getViewGlobalPosition(),
                                n = t.getBoundingClientRect(),
                                o = n.x,
                                _ = n.y,
                                c = n.width,
                                E = n.height,
                                A = {
                                    x: F.O.view.pxToRem(o) + l.x,
                                    y: F.O.view.pxToRem(_) + l.y,
                                    width: F.O.view.pxToRem(c),
                                    height: F.O.view.pxToRem(E),
                                };
                            g(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(A),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, C);
                        },
                        handleViewEvent: g,
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
                                    const r = Object.prototype.toString.call(u[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < r.length; u++) t[a].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: l.Z5,
                        UserLocale: l.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => i, Z5: () => a, cy: () => r });
                const a = {
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
                    i = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            50: (e, u, t) => {
                'use strict';
                var a = t(179),
                    r = t.n(a);
                const i = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var l = t(138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var n;
                function o(e, u, t) {
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
                })(n || (n = {}));
                const _ = l.O.client.getSize('rem'),
                    c = _.width,
                    E = _.height,
                    A = Object.assign({ width: c, height: E }, o(c, E, s)),
                    F = (0, a.createContext)(A),
                    d = ['children'],
                    m = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, d);
                        const r = (0, a.useContext)(F),
                            l = r.extraLarge,
                            s = r.large,
                            n = r.medium,
                            o = r.small,
                            _ = r.extraSmall,
                            c = r.extraLargeWidth,
                            E = r.largeWidth,
                            A = r.mediumWidth,
                            m = r.smallWidth,
                            D = r.extraSmallWidth,
                            B = r.extraLargeHeight,
                            g = r.largeHeight,
                            C = r.mediumHeight,
                            h = r.smallHeight,
                            f = r.extraSmallHeight,
                            b = { extraLarge: B, large: g, medium: C, small: h, extraSmall: f };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && l) return u;
                            if (t.large && s) return u;
                            if (t.medium && n) return u;
                            if (t.small && o) return u;
                            if (t.extraSmall && _) return u;
                        } else {
                            if (t.extraLargeWidth && c) return i(u, t, b);
                            if (t.largeWidth && E) return i(u, t, b);
                            if (t.mediumWidth && A) return i(u, t, b);
                            if (t.smallWidth && m) return i(u, t, b);
                            if (t.extraSmallWidth && D) return i(u, t, b);
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
                                if (t.largeHeight && g) return u;
                                if (t.mediumHeight && C) return u;
                                if (t.smallHeight && h) return u;
                                if (t.extraSmallHeight && f) return u;
                            }
                        }
                        return null;
                    };
                (m.defaultProps = {
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
                    (0, a.memo)(m);
                const D = ({ children: e }) => {
                    const u = (0, a.useContext)(F),
                        t = (0, a.useState)(u),
                        i = t[0],
                        n = t[1],
                        _ = (0, a.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                a = l.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: a }, o(t, a, s)));
                        }, []),
                        c = (0, a.useCallback)(() => {
                            const e = l.O.client.getSize('px');
                            _(e.width, e.height);
                        }, [_]);
                    ((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        l.O.client.events.on('clientResized', _), l.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                l.O.client.events.off('clientResized', _),
                                    l.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [_, c],
                        );
                    const E = (0, a.useMemo)(() => Object.assign({}, i), [i]);
                    return r().createElement(F.Provider, { value: E }, e);
                };
                var B = t(483),
                    g = t.n(B),
                    C = t(926),
                    h = t.n(C);
                let f, b, v;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const y = ['children', 'className'];
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const P = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL_WIDTH,
                        [b.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [b.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_HEIGHT,
                        [v.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [v.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    w = {
                        [f.ExtraSmall]: '',
                        [f.Small]: h().SMALL,
                        [f.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [f.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [f.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let u = e.children,
                            t = e.className,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, y);
                        const l = (() => {
                                const e = (0, a.useContext)(F),
                                    u = e.width,
                                    t = e.height,
                                    r = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return f.ExtraLarge;
                                            case e.large:
                                                return f.Large;
                                            case e.medium:
                                                return f.Medium;
                                            case e.small:
                                                return f.Small;
                                            case e.extraSmall:
                                                return f.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), f.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return b.ExtraLarge;
                                            case e.largeWidth:
                                                return b.Large;
                                            case e.mediumWidth:
                                                return b.Medium;
                                            case e.smallWidth:
                                                return b.Small;
                                            case e.extraSmallWidth:
                                                return b.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), b.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    l = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return v.ExtraLarge;
                                            case e.largeHeight:
                                                return v.Large;
                                            case e.mediumHeight:
                                                return v.Medium;
                                            case e.smallHeight:
                                                return v.Small;
                                            case e.extraSmallHeight:
                                                return v.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), v.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: r,
                                    mediaWidth: i,
                                    mediaHeight: l,
                                    remScreenWidth: u,
                                    remScreenHeight: t,
                                };
                            })(),
                            s = l.mediaWidth,
                            n = l.mediaHeight,
                            o = l.mediaSize;
                        return r().createElement('div', p({ className: g()(t, P[s], S[n], w[o]) }, i), u);
                    },
                    x = ['children'],
                    N = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, x);
                        return r().createElement(D, null, r().createElement(L, t, u));
                    };
                var T = t(493),
                    M = t.n(T);
                const O = 'AbilityPanel_evacuation_54';
                var k = t(282);
                let I;
                function H(e) {
                    return e;
                }
                function W() {
                    return !1;
                }
                !(function (e) {
                    (e.Prebattle = 'prebattle'),
                        (e.Idle = 'idle'),
                        (e.Delivery = 'delivery'),
                        (e.Evacuation = 'evacuation');
                })(I || (I = {})),
                    console.log;
                var U = t(915);
                function j(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const G = (e) => (0 === e ? window : window.subViews.get(e));
                function V(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                var K = t(517);
                const z = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: u, children: i, mocks: s }) {
                                const n = (0, a.useRef)([]),
                                    o = (e, u, t) => {
                                        var a;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = G,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function i(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const r = t(u),
                                                        i = a.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const n = 'string' == typeof i ? `${a}.${i}` : a,
                                                            o = l.O.view.addModelObserver(n, u, !0);
                                                        return r.set(o, t), e && t(s(i)), o;
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
                                                                                    return j(e, u);
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
                                                                                          ? j(e, u)
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
                                                                })(r.keys());
                                                            !(e = t()).done;

                                                        )
                                                            i(e.value, u);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(u),
                                            i =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (a = null == t ? void 0 : t.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === e ? (null == t ? void 0 : t.getter(u)) : i.readByPath(u),
                                            o = (e) => n.current.push(e),
                                            _ = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        reloadTimes: e.primitives(['reloadTimeLeft', 'reloadTime']),
                                                        abilities: e.array('abilities', []),
                                                        messages: e.array('messages', []),
                                                        phase: e.primitives([
                                                            'currentPhaseIdx',
                                                            'phaseCount',
                                                            'currentPhaseType',
                                                            'currentPhaseTimeLeft',
                                                            'currentPhaseDuration',
                                                        ]),
                                                    },
                                                    t = (0, K.computedFn)(() => V(u.abilities.get(), H)),
                                                    a = (0, K.computedFn)(
                                                        (e) =>
                                                            (function (e, u) {
                                                                var t;
                                                                if (!(u >= e.length))
                                                                    return Array.isArray(e)
                                                                        ? e[u]
                                                                        : null == (t = e[u])
                                                                          ? void 0
                                                                          : t.value;
                                                            })(t(), e),
                                                        { equals: W },
                                                    ),
                                                    r = (0, K.computedFn)(() => V(u.messages.get(), H)),
                                                    i = (0, K.computedFn)(() =>
                                                        0 === u.phase.currentPhaseDuration.get()
                                                            ? {
                                                                  currentPhaseIdx: 0,
                                                                  phaseCount: 9,
                                                                  currentPhaseType: I.Idle,
                                                                  currentPhaseTimeLeft: 0,
                                                                  currentPhaseDuration: 60,
                                                              }
                                                            : {
                                                                  currentPhaseIdx: u.phase.currentPhaseIdx.get(),
                                                                  phaseCount: u.phase.phaseCount.get(),
                                                                  currentPhaseType: u.phase.currentPhaseType.get(),
                                                                  currentPhaseTimeLeft:
                                                                      u.phase.currentPhaseTimeLeft.get(),
                                                                  currentPhaseDuration:
                                                                      u.phase.currentPhaseDuration.get(),
                                                              },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getAbilities: t,
                                                        getAbility: a,
                                                        getMessages: r,
                                                        getPhaseData: i,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : s(u),
                                                            r = U.observable.box(a, { equals: W });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, U.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : s(u),
                                                            r = U.observable.box(a, { equals: W });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, U.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = U.observable.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, U.action)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                l = Object.entries(r),
                                                                s = l.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = U.observable.box(a[u], {})), e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, U.action)((e) => {
                                                                            l.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: o,
                                            }),
                                            c = { mode: e, model: _, externalModel: i, cleanup: o };
                                        return {
                                            model: _,
                                            controls: 'mocks' === e && t ? t.controls(c) : {},
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    _ = (0, a.useRef)(!1),
                                    c = (0, a.useState)(e),
                                    E = c[0],
                                    A = c[1],
                                    F = (0, a.useState)(() => o(e, u, s)),
                                    d = F[0],
                                    m = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        _.current ? m(o(E, u, s)) : (_.current = !0);
                                    }, [s, E, u]),
                                    (0, a.useEffect)(() => {
                                        A(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            d.externalModel.dispose(), n.current.forEach((e) => e());
                                        },
                                        [d],
                                    ),
                                    r().createElement(t.Provider, { value: d }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(),
                    q = z[0],
                    $ = z[1];
                let Y;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Shell = 'shell'),
                        (e.Acceleration = 'acceleration'),
                        (e.Shield = 'shield'),
                        (e.Vortex = 'vortex'),
                        (e.Repulsor = 'repulsor'),
                        (e.Jump = 'jump'),
                        (e.Mines = 'mines');
                })(Y || (Y = {}));
                const X = {
                    cff_splash: 'AbilitySlot_cff_splash_92',
                    cff_splash_small: 'AbilitySlot_cff_splash_small_1c',
                    cff_title: 'AbilitySlot_cff_title_34',
                    cff_heading: 'AbilitySlot_cff_heading_c4',
                    cff_heading_small: 'AbilitySlot_cff_heading_small_a7',
                    cff_body: 'AbilitySlot_cff_body_c9',
                    cff_emphasis: 'AbilitySlot_cff_emphasis_c2',
                    cff_emphasis_small: 'AbilitySlot_cff_emphasis_small_7e',
                    cff_body_small: 'AbilitySlot_cff_body_small_5e',
                    cff_player: 'AbilitySlot_cff_player_c6',
                    cff_decorative_title: 'AbilitySlot_cff_decorative_title_7e',
                    cff_decorative_body: 'AbilitySlot_cff_decorative_body_6c',
                    boxImage: 'AbilitySlot_boxImage_97',
                    transparent: 'AbilitySlot_transparent_52',
                    fade_in: 'AbilitySlot_fade_in_f0',
                    fade_from_left: 'AbilitySlot_fade_from_left_86',
                    fade_from_bottom: 'AbilitySlot_fade_from_bottom_d7',
                    fade_out: 'AbilitySlot_fade_out_53',
                    fade_to_left: 'AbilitySlot_fade_to_left_88',
                    fade_to_bottom: 'AbilitySlot_fade_to_bottom_e7',
                    delay_100: 'AbilitySlot_delay_100_be',
                    delay_200: 'AbilitySlot_delay_200_72',
                    delay_300: 'AbilitySlot_delay_300_25',
                    delay_400: 'AbilitySlot_delay_400_f1',
                    delay_500: 'AbilitySlot_delay_500_96',
                    delay_600: 'AbilitySlot_delay_600_9b',
                    delay_700: 'AbilitySlot_delay_700_3e',
                    delay_800: 'AbilitySlot_delay_800_f2',
                    delay_1000: 'AbilitySlot_delay_1000_45',
                    delay_1250: 'AbilitySlot_delay_1250_47',
                    delay_1500: 'AbilitySlot_delay_1500_13',
                    delay_3000: 'AbilitySlot_delay_3000_1a',
                    glitch: 'AbilitySlot_glitch_cc',
                    CFF_MAIN: 'AbilitySlot_CFF_MAIN_1b',
                    CFF_SUPPORT: 'AbilitySlot_CFF_SUPPORT_54',
                    CFF_DONE: 'AbilitySlot_CFF_DONE_11',
                    CFF_PHASE: 'AbilitySlot_CFF_PHASE_06',
                    CFF_IMPORTANT: 'AbilitySlot_CFF_IMPORTANT_f9',
                    CFF_HERO: 'AbilitySlot_CFF_HERO_36',
                    CFF_ATTENTION: 'AbilitySlot_CFF_ATTENTION_77',
                    CFF_BACKGROUND: 'AbilitySlot_CFF_BACKGROUND_be',
                    CFF_MINE: 'AbilitySlot_CFF_MINE_4c',
                    CFF_VORTEX: 'AbilitySlot_CFF_VORTEX_c2',
                    CFF_BARRIER: 'AbilitySlot_CFF_BARRIER_5e',
                    CFF_JUMP: 'AbilitySlot_CFF_JUMP_79',
                    abilitySlot: 'AbilitySlot_abilitySlot_ae',
                    abilitySlot_fill: 'AbilitySlot_abilitySlot_fill_53',
                    abilitySlot__shell: 'AbilitySlot_abilitySlot__shell_55',
                    abilitySlot__ready: 'AbilitySlot_abilitySlot__ready_dd',
                    abilitySlot_effect: 'AbilitySlot_abilitySlot_effect_c1',
                    abilitySlot__acceleration: 'AbilitySlot_abilitySlot__acceleration_a9',
                    abilitySlot__shield: 'AbilitySlot_abilitySlot__shield_36',
                    abilitySlot__vortex: 'AbilitySlot_abilitySlot__vortex_02',
                    abilitySlot__repulsor: 'AbilitySlot_abilitySlot__repulsor_43',
                    abilitySlot__jump: 'AbilitySlot_abilitySlot__jump_65',
                    abilitySlot__overcharge: 'AbilitySlot_abilitySlot__overcharge_52',
                    abilitySlot__mines: 'AbilitySlot_abilitySlot__mines_5b',
                    abilitySlot__rapid_shelling: 'AbilitySlot_abilitySlot__rapid_shelling_d6',
                    ready: 'AbilitySlot_ready_9c',
                    abilitySlot_overlay: 'AbilitySlot_abilitySlot_overlay_94',
                    abilitySlot__active: 'AbilitySlot_abilitySlot__active_4e',
                    flash: 'AbilitySlot_flash_8f',
                    abilitySlot_pattern: 'AbilitySlot_abilitySlot_pattern_90',
                    abilitySlot__none: 'AbilitySlot_abilitySlot__none_b8',
                    abilitySlot_border: 'AbilitySlot_abilitySlot_border_08',
                    abilitySlot_keyBind: 'AbilitySlot_abilitySlot_keyBind_ed',
                    abilitySlot__reloading: 'AbilitySlot_abilitySlot__reloading_28',
                    abilitySlot_icon: 'AbilitySlot_abilitySlot_icon_04',
                    abilitySlot_icon_ready: 'AbilitySlot_abilitySlot_icon_ready_10',
                    abilitySlot_reloading: 'AbilitySlot_abilitySlot_reloading_e2',
                    glitch1: 'AbilitySlot_glitch1_41',
                    glitch2: 'AbilitySlot_glitch2_01',
                    glitch3: 'AbilitySlot_glitch3_65',
                };
                var Z = t(948);
                let J;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(J || (J = {}));
                const Q = (e) => e.replace(/&nbsp;/g, ' '),
                    ee = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ue = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    te = (e, u, t = J.left) => e.split(u).reduce(t === J.left ? ee : ue, []),
                    ae = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    re = ['zh_cn', 'zh_sg', 'zh_tw'];
                t(916);
                var ie = t(613);
                const le = 1e3;
                Date.now(), ie.Ew.getRegionalDateTime, ie.Ew.getFormattedDateTime;
                const se = (0, k.observer)(({ abilityIndex: e }) => {
                        const u = $().model.computes.getAbility(e),
                            t = null == u ? void 0 : u.reloadTime,
                            i = (null == u ? void 0 : u.reloadTimeLeft) || 0,
                            l = (0, a.useState)(i),
                            s = l[0],
                            n = l[1];
                        if (
                            ((0, a.useEffect)(() => {
                                n(Math.ceil(10 * i) / 10);
                                const e = Date.now(),
                                    u = setInterval(() => {
                                        const t = Date.now() - e,
                                            a = i - t / le;
                                        return a <= 0 ? (clearInterval(u), n(0)) : n(Math.ceil(10 * a) / 10);
                                    }, 100);
                                return () => clearInterval(u);
                            }, [i]),
                            0 === s)
                        )
                            return null;
                        const o = s > 0 ? s : t;
                        return r().createElement('div', { className: X.abilitySlot_reloading }, (o || 0).toFixed(1));
                    }),
                    ne = {
                        [Y.None]: X.abilitySlot__none,
                        [Y.Shell]: X.abilitySlot__shell,
                        [Y.Acceleration]: X.abilitySlot__acceleration,
                        [Y.Shield]: X.abilitySlot__shield,
                        [Y.Vortex]: X.abilitySlot__vortex,
                        [Y.Repulsor]: X.abilitySlot__repulsor,
                        [Y.Jump]: X.abilitySlot__jump,
                        [Y.Mines]: X.abilitySlot__mines,
                    },
                    oe = r().memo(({ isActive: e, keyBind: u, reloadTimeLeft: t, type: a, abilityIndex: i }) => {
                        const l = ne[a],
                            s = 0 === t && a !== Y.None,
                            n = t > 0 && a !== Y.None;
                        return r().createElement(
                            'div',
                            {
                                className: g()(
                                    X.abilitySlot,
                                    l,
                                    e && X.abilitySlot__active,
                                    s && X.abilitySlot__ready,
                                    n && X.abilitySlot__reloading,
                                ),
                            },
                            r().createElement(se, { abilityIndex: i }),
                            r().createElement('div', { className: X.abilitySlot_effect }),
                            r().createElement('div', { className: X.abilitySlot_keyBind }, u),
                            r().createElement('div', { className: X.abilitySlot_icon }),
                            r().createElement('div', { className: X.abilitySlot_pattern }),
                            r().createElement('div', { className: X.abilitySlot_fill }),
                            r().createElement('div', { className: X.abilitySlot_border }),
                            r().createElement('div', { className: X.abilitySlot_overlay }),
                            r().createElement('div', { className: X.abilitySlot_disabledOverlay }),
                        );
                    });
                function _e() {
                    return (
                        (_e =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        _e.apply(this, arguments)
                    );
                }
                const ce = (0, k.observer)(({ abilityIndex: e, AbilitySlotComponent: u = oe }) => {
                        const t = $().model,
                            a = t.computes.getAbility(e),
                            i = t.root.get().vehicleOverturned;
                        return void 0 !== a && null != a && a.type
                            ? r().createElement(u, _e({}, a, { abilityIndex: e, vehicleOverturned: i }))
                            : null;
                    }),
                    Ee = ({ className: e }) =>
                        r().createElement(
                            'div',
                            {
                                className: g()('AbilityPanel_base_32', e),
                                'data-bind-class-toggle':
                                    'AbilityPanel_base__evacuation_8c: {{model.isHideOnEvacuation}} === true',
                            },
                            r().createElement('div', { className: g()(O, 'AbilityPanel_evacuation__1_fe') }),
                            r().createElement('div', { className: g()(O, 'AbilityPanel_evacuation__2_6d') }),
                            r().createElement('div', { className: g()(O, 'AbilityPanel_evacuation__3_19') }),
                            r().createElement(
                                'div',
                                { className: 'AbilityPanel_decorationLeft_2d' },
                                R.strings.cosmicDecor.battle.abilityPanel.text_deco(),
                            ),
                            r().createElement(
                                'div',
                                { className: 'AbilityPanel_abilityWrapper_68' },
                                r().createElement(ce, { abilityIndex: 1 }),
                                r().createElement(ce, { abilityIndex: 2 }),
                                r().createElement(ce, { abilityIndex: 3 }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'AbilityPanel_decorationRight_49' },
                                r().createElement('div', { className: 'AbilityPanel_decorationRight_image_9a' }),
                                r().createElement(
                                    'div',
                                    { className: 'AbilityPanel_decorationRight_text_32' },
                                    R.strings.cosmicDecor.battle.abilityPanel.text_deco2(),
                                ),
                            ),
                        ),
                    Ae = 'Aim_side_c1',
                    Fe = 'Aim_side_container_bc',
                    de = (0, k.observer)(() => {
                        const e = $().model,
                            u = e.reloadTimes.reloadTimeLeft.get(),
                            t = (0, a.useState)(u),
                            i = t[0],
                            l = t[1],
                            s = 0 === u,
                            n = e.computes.getAbility(3),
                            o = null == n ? void 0 : n.isActive;
                        (0, a.useEffect)(() => {
                            l(u);
                            const e = Date.now(),
                                t = setInterval(() => {
                                    const a = Date.now() - e,
                                        r = u - a / le;
                                    return r <= 0 ? (clearInterval(t), l(0)) : l(Math.ceil(10 * r) / 10);
                                }, 100);
                            return () => clearInterval(t);
                        }, [u]);
                        const _ = (i > 0 ? i : 10).toFixed(1);
                        return r().createElement(
                            'div',
                            { className: g()(s && 'Crosshair_reloading__ready_9d') },
                            r().createElement(
                                'div',
                                { className: 'Crosshair_crosshair_text_ba' },
                                s
                                    ? r().createElement(
                                          'div',
                                          { className: 'Crosshair_secondsLeft_c4' },
                                          R.strings.cosmicDecor.battle.crosshair.secondsLeft(),
                                      )
                                    : r().createElement(
                                          'div',
                                          { className: 'Crosshair_reloading_text_8d' },
                                          R.strings.cosmicEvent.battle.crosshair.reloading(),
                                          ' ',
                                      ),
                            ),
                            r().createElement('div', { className: g()('Crosshair_reloading_timeLeft_85', o) }, _),
                        );
                    }),
                    me = (0, k.observer)(({ className: e }) => {
                        const u = 1e3 * $().model.reloadTimes.reloadTimeLeft.get(),
                            t = Math.floor(u / 6);
                        return r().createElement(
                            'div',
                            {
                                className: g()('Aim_base_d6', e),
                                style: { '--time': t + 'ms' },
                                'data-bind-style-left': '{{model.aim.posx}}',
                                'data-bind-style-top': '{{model.aim.posy}}',
                                'data-bind-class-toggle': 'Aim_base__ready_38: {{model.reloadTimeLeft}} === 0',
                            },
                            r().createElement('div', {
                                className: g()('Aim_aim_de', e),
                                'data-bind-class-toggle': 'Aim_brackets_b9: {{model.reloadTimeLeft}} === 0',
                            }),
                            r().createElement(
                                'div',
                                { 'data-bind-class-toggle': 'Aim_hexagon__not_ready_82: {{model.reloadTimeLeft}} > 0' },
                                Array(6)
                                    .fill(0)
                                    .map((e, u) =>
                                        r().createElement(
                                            'div',
                                            {
                                                key: u,
                                                className: Fe,
                                                style: { transform: 'rotate(' + 60 * u + 'deg)' },
                                            },
                                            r().createElement('div', {
                                                className: Ae,
                                                style: { animationDelay: t * u + 'ms' },
                                            }),
                                        ),
                                    ),
                            ),
                            r().createElement(
                                'div',
                                { 'data-bind-class-toggle': 'Aim_hexagon_b1: {{model.reloadTimeLeft}} === 0' },
                                Array(6)
                                    .fill(0)
                                    .map((e, u) =>
                                        r().createElement(
                                            'div',
                                            {
                                                key: u,
                                                className: Fe,
                                                style: { transform: 'rotate(' + 60 * u + 'deg)' },
                                            },
                                            r().createElement('div', { className: Ae }),
                                        ),
                                    ),
                            ),
                            r().createElement('div', {
                                'data-bind-if': '{{model.isShotHit}} === true',
                                className: 'Aim_hit_a9',
                            }),
                            r().createElement('div', {
                                'data-bind-if':
                                    'Math.abs({{model.crosshair.posx}} - ({{model.aim.posx}} / {{model.aim.scale}})) < 5\r && Math.abs({{model.crosshair.posy}} - ({{model.aim.posy}} / {{model.aim.scale}})) < 5',
                                'data-bind-class-toggle': 'Aim_ready_26: {{model.reloadTimeLeft}} === 0',
                            }),
                            r().createElement(de, null),
                        );
                    }),
                    De = 'Announcement_announcement_countdown_decoration_9c',
                    Be = r().memo(() =>
                        r().createElement(
                            'div',
                            {
                                className: 'Announcement_base_93',
                                'data-bind-class-toggle':
                                    "Announcement_base__show_cf: {{model.announcementCustomTitle}} !== ''",
                            },
                            r().createElement(
                                'div',
                                { className: 'Announcement_announcement_7c' },
                                r().createElement(
                                    'div',
                                    { className: 'Announcement_decoration_8a' },
                                    r().createElement('div', { className: 'Announcement_dots_ba' }),
                                    r().createElement(
                                        'div',
                                        { className: 'Announcement_decorative_text_4a' },
                                        R.strings.cosmicDecor.battle.announcement.decorative_text(),
                                    ),
                                ),
                                r().createElement('div', {
                                    className: 'Announcement_announcement_title_60',
                                    'data-bind-value': '{{model.announcementCustomTitle}}',
                                    'data-bind-if': "{{model.announcementCustomTitle}} !== ''",
                                }),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: 'Announcement_announcement_countdown_ef',
                                    'data-bind-if': '{{model.announcementSecondsToEvent}} > 0',
                                },
                                r().createElement('div', {
                                    className: g()(De, 'Announcement_announcement_countdown_decoration_left_8d'),
                                }),
                                r().createElement('div', {
                                    'data-bind-value': "String({{model.announcementSecondsToEvent}}).padStart(2, '0')",
                                    className: 'Announcement_announcement_countdown_value_fe',
                                }),
                                r().createElement('div', {
                                    className: g()(De, 'Announcement_announcement_countdown_decoration_right_ad'),
                                }),
                            ),
                        ),
                    ),
                    ge = () =>
                        r().createElement(
                            'div',
                            {
                                className: 'ArenaTimer_base_4c',
                                'data-bind-if': '{{model.arenaTimeLeft}} > 0',
                                'data-bind-class-toggle':
                                    'ArenaTimer_base__almost_over_52: {{model.arenaTimeLeft}} < 30',
                            },
                            r().createElement('div', {
                                className: 'ArenaTimer_value_6a',
                                'data-bind-value':
                                    "String(Math.floor({{model.arenaTimeLeft}}/60)).padStart(2, '0')+':'+String(Math.floor({{model.arenaTimeLeft}}%60)).padStart(2, '0')",
                            }),
                        ),
                    Ce = (0, k.observer)(({ className: e }) =>
                        r().createElement(
                            'div',
                            {
                                className: g()('Crosshair_base_64', e),
                                'data-bind-style-left': "parseFloat({{model.crosshair.posx}})+'rem'",
                                'data-bind-style-top': "parseFloat({{model.crosshair.posy}})+'rem'",
                            },
                            r().createElement('div', {
                                className: 'Crosshair_turret_13',
                                'data-bind-class-toggle': 'Crosshair_turret_reloading_b4: {{model.reloadTimeLeft}} > 0',
                            }),
                        ),
                    ),
                    he = ({ binding: e, text: u = '', classMix: t, alignment: i = J.left, formatWithBrackets: l }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const s = l && e ? ((n = e), u.replace(/\{\w+\}/g, (e) => String(n[e.slice(1, -1)]))) : u;
                        var n;
                        return r().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((u, l) =>
                                r().createElement(
                                    'div',
                                    { className: g()('FormatText_base_d0', t), key: `${u}-${l}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = J.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return re.includes(t)
                                                          ? ae(e)
                                                          : 'ja' === t
                                                            ? (0, Z.loadDefaultJapaneseParser)()
                                                                  .parse(e)
                                                                  .map((e) => Q(e))
                                                            : ((e, u = J.left) => {
                                                                  let t = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = Q(e);
                                                                  return (
                                                                      te(r, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(te(e, a, J.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, i, e).map((e, u) =>
                                        r().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    fe = 'InfoPlate_command_11',
                    be = 'InfoPlate_command_border_54',
                    ve = 'InfoPlate_relative_container_83',
                    ye = (0, k.observer)(({ className: e }) => {
                        const u = $().model,
                            t = u.root.get().isRespawning,
                            a = u.root.get().isHideOnEvacuation;
                        return r().createElement(
                            'div',
                            { className: g()('InfoPlate_base_b3', e, (!t || a) && 'InfoPlate_notDisplayed_6b') },
                            r().createElement(he, {
                                text: R.strings.cosmicEvent.battle.announcement.infoPlate.title(),
                                classMix: 'InfoPlate_base_text_15',
                                binding: {
                                    command: r().createElement(
                                        'span',
                                        { className: ve },
                                        r().createElement(
                                            'div',
                                            { className: g()(be, 'InfoPlate_scaling_container_4f') },
                                            r().createElement(
                                                'div',
                                                { className: fe },
                                                R.strings.cosmicEvent.battle.announcement.infoPlate.command(),
                                            ),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: g()(be, ve) },
                                            r().createElement(
                                                'div',
                                                { className: fe },
                                                R.strings.cosmicEvent.battle.announcement.infoPlate.command(),
                                            ),
                                        ),
                                    ),
                                },
                            }),
                        );
                    });
                let pe;
                !(function (e) {
                    (e.Ram = 'ram'),
                        (e.Shot = 'shot'),
                        (e.AbilityHit = 'abilityHit'),
                        (e.Kill = 'kill'),
                        (e.FragmentHolderKill = 'fragmentHolderKill'),
                        (e.KillAssist = 'killAssist'),
                        (e.AbilityPickup = 'abilityPickup'),
                        (e.FragmentPickup = 'fragmentPickup'),
                        (e.FragmentCarrying = 'fragmentCarrying'),
                        (e.FragmentDelivering = 'fragmentDelivering'),
                        (e.Evacuation = 'evacuation');
                })(pe || (pe = {}));
                function Pe() {
                    return (
                        (Pe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Pe.apply(this, arguments)
                    );
                }
                var Se;
                !(function (e) {
                    (e.UpdateMessages = 'UpdateMessages'), (e.Redraw = 'Redraw');
                })(Se || (Se = {}));
                const we = {
                        displayedMessages: [],
                        messageQueue: [],
                        messages: [],
                        isPolling: !1,
                        lastMessageId: -1,
                        lastMessageReceivedPointer: -1,
                    },
                    Le = (e) => {
                        const u = Date.now();
                        let t = 0;
                        const a = e.displayedMessages
                                .filter((e) => !(u - e.timeOfLeave > 100 + 50 * e.positionIndex))
                                .map((e) => {
                                    const a = u > e.timeOfLeave + 50 * e.positionIndex - 300 ? e.positionIndex : t++;
                                    return Object.assign({}, e, { positionIndex: a });
                                }),
                            r = 4 - t;
                        let i = [...e.messageQueue];
                        const l = Math.min(r, i.length);
                        let s = e.lastMessageId;
                        const n = i
                            .slice(0, l)
                            .map((e) =>
                                Object.assign({}, e, {
                                    timeOfDisplay: u,
                                    timeOfLeave: u + 2300,
                                    positionIndex: t++,
                                    id: ++s,
                                }),
                            );
                        a.push(...n), (i = i.slice(l));
                        const o = i.length > 0 || a.length > 0;
                        return Object.assign({}, e, {
                            isPolling: o,
                            displayedMessages: a,
                            messageQueue: i,
                            lastMessageId: s,
                        });
                    },
                    xe = (e, u) => {
                        if (u.type === Se.UpdateMessages) {
                            const t = u.messages.slice(e.lastMessageReceivedPointer + 1);
                            return Le(
                                Object.assign({}, e, {
                                    lastMessageReceivedPointer: e.lastMessageReceivedPointer + t.length - 1,
                                    messageQueue: [...e.messageQueue, ...t],
                                }),
                            );
                        }
                        return u.type === Se.Redraw ? Le(e) : e;
                    },
                    Ne = {
                        [pe.Kill]: 'Messages_important_message__kill_32',
                        [pe.FragmentHolderKill]: 'Messages_important_message__fragment_holder_kill_b0',
                        [pe.FragmentDelivering]: 'Messages_important_message__fragment_delivering_52',
                        [pe.Evacuation]: 'Messages_important_message__evacuation_4c',
                    },
                    Te = (e) => e in Ne,
                    Me = ({ className: e, type: u, count: t, style: a }) => {
                        if (!Te(u)) return null;
                        const i = (
                            u in R.strings.cosmicEvent.common.scoring ? R.strings.cosmicEvent.common.scoring[u]() : ''
                        ).replace('%(count)', String(t));
                        return r().createElement(
                            'div',
                            { className: g()('Messages_important_message_fc', Ne[u], e), style: a },
                            r().createElement('div', { className: 'Messages_important_message_icon_8a' }),
                            r().createElement(
                                'div',
                                { className: 'Messages_important_message_text_10' },
                                r().createElement('div', { className: 'Messages_important_message_label_0a' }, i),
                            ),
                            r().createElement(
                                'div',
                                { className: 'Messages_important_message_deco_text_90' },
                                r().createElement(
                                    'div',
                                    null,
                                    R.strings.cosmicDecor.battle.messages.decorative_text_top(),
                                ),
                                r().createElement(
                                    'div',
                                    null,
                                    R.strings.cosmicDecor.battle.messages.decorative_text_bottom(),
                                ),
                            ),
                        );
                    },
                    Oe = ({ className: e, positionIndex: u, type: t, count: a, eventPoints: i }) => {
                        const l = { animationDelay: 50 * u + 'ms', '--positionIndex': u },
                            s = (
                                t in R.strings.cosmicEvent.common.scoring
                                    ? R.strings.cosmicEvent.common.scoring[t]()
                                    : ''
                            ).replace('%(count)', String(a));
                        return r().createElement(
                            'div',
                            { className: g()('Messages_message_00', e), style: l },
                            r().createElement('div', { className: 'Messages_message_points_f3' }, i),
                            r().createElement('div', { className: 'Messages_message_label_04' }, s),
                        );
                    },
                    Re = (0, k.observer)(({ className: e }) => {
                        const u = (0, $().model.computes.getMessages)(),
                            t = (0, a.useReducer)(xe, we),
                            i = t[0],
                            l = t[1],
                            s = i.displayedMessages,
                            n = i.isPolling;
                        (0, a.useEffect)(() => {
                            l({ type: Se.UpdateMessages, messages: u });
                        }, [u.length]),
                            (0, a.useEffect)(() => {
                                let e;
                                return (
                                    n &&
                                        (e = setInterval(() => {
                                            l({ type: Se.Redraw });
                                        }, 200)),
                                    () => clearInterval(e)
                                );
                            }, [n]);
                        const o = [...s].reverse().find((e) => Te(e.type));
                        return r().createElement(
                            'div',
                            { className: g()('Messages_base_8f', e) },
                            r().createElement(
                                'div',
                                { className: 'Messages_important_message_slot_0f' },
                                o && r().createElement(Me, Pe({ key: o.id }, o)),
                            ),
                            r().createElement(
                                'div',
                                { className: 'Messages_standard_messages_92' },
                                s.map((e) => r().createElement(Oe, Pe({ key: e.id }, e))),
                            ),
                        );
                    }),
                    ke = 'PlayerList_playerRank_66',
                    Ie = () =>
                        r().createElement(
                            'div',
                            { className: 'PlayerList_base_97' },
                            r().createElement(
                                'div',
                                { className: 'PlayerList_decoration_ed' },
                                r().createElement(
                                    'div',
                                    { className: 'PlayerList_decoration_textTitle_c1' },
                                    R.strings.cosmicDecor.battle.player_list.title_deco(),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'PlayerList_decoration_text_a6' },
                                    R.strings.cosmicDecor.battle.player_list.text_deco(),
                                ),
                                r().createElement('div', { className: 'PlayerList_decoration_line_92' }),
                                r().createElement(
                                    'div',
                                    { className: 'PlayerList_decoration_textSub_8e' },
                                    R.strings.cosmicDecor.battle.player_list.text_deco2(),
                                ),
                                r().createElement('div', { className: 'PlayerList_decoration_square_a3' }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'PlayerList_players_e3' },
                                r().createElement(
                                    'div',
                                    {
                                        className: 'PlayerList_playerEntry_ac',
                                        'data-bind-class-toggle':
                                            'PlayerList_playerEntry__selected_0c: {{player.value.name}} === model.playerName;PlayerList_playerEntry__respawning_4a: {{player.value.isAlive}} === false;',
                                        'data-bind-for': 'index, player: {{model.playerList}}',
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: ke,
                                            'data-bind-class-toggle': '{{player.value.name}} === model.playerName',
                                            'data-bind-if': '{{player.value.isLeader}}',
                                        },
                                        r().createElement('div', {
                                            className: 'PlayerList_playerRank_first_ce',
                                            'data-bind-class-toggle':
                                                'PlayerList_playerRank_first__selected_21: {{player.value.name}} === model.playerName;',
                                        }),
                                    ),
                                    r().createElement('div', {
                                        className: ke,
                                        'data-bind-class-toggle': '{{player.value.name}} === model.playerName',
                                        'data-bind-if': '{{index}} > 0',
                                        'data-bind-value': '{{index}} + 1',
                                    }),
                                    r().createElement('div', {
                                        className: 'PlayerList_playerName_a7',
                                        'data-bind-value': '{{player.value.name}}',
                                    }),
                                    r().createElement('div', {
                                        className: 'PlayerList_playerScore_d6',
                                        'data-bind-value': '{{player.value.score}}',
                                        'data-bind-class-toggle':
                                            'PlayerList_playerScore__selected_69: {{player.value.name}} === model.playerName;',
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: ke },
                                        r().createElement('div', {
                                            className: 'PlayerList_playerRank_lastOffender_72',
                                            'data-bind-if': '{{player.value.isLastOffender}}',
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: 'PlayerList_bottomDecoration_7e' },
                                R.strings.cosmicDecor.battle.player_list
                                    .bottom_text_deco()
                                    .split('\n')
                                    .map((e, u) => r().createElement(r().Fragment, { key: u }, e)),
                            ),
                        ),
                    He = (0, k.observer)(({ className: e }) => {
                        const u = $().model.computes.getPhaseData().currentPhaseType === I.Evacuation;
                        return r().createElement(
                            'div',
                            {
                                className: g()('PoiMarker_base_ee', e),
                                'data-bind-style-left': "parseFloat({{model.poiMarker.posx}})+'rem'",
                                'data-bind-style-top': "parseFloat({{model.poiMarker.posy}})+'rem'",
                                'data-bind-class-toggle':
                                    'PoiMarker_base__visible_52: {{model.showPoiMarker}} && !{{model.poiMarker.isVisible}} && !{{model.isRespawning}}',
                            },
                            u
                                ? r().createElement('div', { className: 'PoiMarker_evacuationIcon_b0' })
                                : r().createElement('div', { className: 'PoiMarker_icon_1b' }),
                            r().createElement('div', {
                                className: 'PoiMarker_distance_f5',
                                'data-bind-value': `String({{model.poiMarker.distance}})+"${R.strings.cosmicEvent.battle.distanceUnit()}"`,
                            }),
                        );
                    }),
                    We = 'VehicleMarkers_vehicleMarker__visible_17',
                    Ue = 'VehicleMarkers_vehicleMarker_fragment_a7',
                    je = ['className'];
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const Ve = (e) => {
                        let u = e.className,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, je);
                        return r().createElement('div', Ge({ className: g()('HighlightLastOffender_base_13', u) }, t));
                    },
                    Ke = ['className'];
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                const qe = (e) => {
                        let u = e.className,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Ke);
                        return r().createElement('div', ze({ className: g()('HighlightLeader_base_86', u) }, t));
                    },
                    $e = () =>
                        r().createElement(
                            'div',
                            { className: 'VehicleMarkers_base_62' },
                            r().createElement(
                                'div',
                                {
                                    className: 'VehicleMarkers_vehicleMarker_26',
                                    'data-bind-style-left': "{{marker.value.posx}}+'rem'",
                                    'data-bind-style-top': "{{marker.value.posy}}+'rem'",
                                    'data-bind-style-transform2d':
                                        "{{marker.value.scale}}*{{marker.value.scale}}+', 0, 0,'+{{marker.value.scale}}*{{marker.value.scale}}+', 0, 0'",
                                    'data-bind-for': 'index, marker: {{model.vehicleMarkers}}',
                                },
                                r().createElement(
                                    'div',
                                    { className: 'VehicleMarkers_vehicleMarker_icons_5d' },
                                    r().createElement(qe, {
                                        className: 'VehicleMarkers_vehicleMarker_leader_50',
                                        'data-bind-if': '{{marker.value.isLeader}}',
                                        'data-bind-class-toggle':
                                            We + ': {{marker.value.isVisible}} && !{{marker.value.isDisabled}}',
                                    }),
                                    r().createElement(Ve, {
                                        className: 'VehicleMarkers_vehicleMarker_offender_4c',
                                        'data-bind-if': '{{marker.value.isLastOffender}}',
                                        'data-bind-class-toggle':
                                            We + ': {{marker.value.isVisible}} && !{{marker.value.isDisabled}}',
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        className: 'VehicleMarkers_vehicleMarker_text_df',
                                        'data-bind-value': '{{marker.value.playerName}}',
                                        'data-bind-class-toggle':
                                            We + ': {{marker.value.isVisible}} && !{{marker.value.isDisabled}}',
                                    },
                                    ' ',
                                ),
                                r().createElement('div', {
                                    className: g()(Ue, 'VehicleMarkers_vehicleMarker_fragment__1_2c'),
                                    'data-bind-class-toggle':
                                        We +
                                        ': {{marker.value.isVisible}} && !{{marker.value.isDisabled}} && {{marker.value.fragmentsCollected}} === 1',
                                }),
                                r().createElement('div', {
                                    className: g()(Ue, 'VehicleMarkers_vehicleMarker_fragment__2_c0'),
                                    'data-bind-class-toggle':
                                        We +
                                        ': {{marker.value.isVisible}} && !{{marker.value.isDisabled}} && {{marker.value.fragmentsCollected}} === 2',
                                }),
                                r().createElement('div', {
                                    className: g()(Ue, 'VehicleMarkers_vehicleMarker_fragment__3_0e'),
                                    'data-bind-class-toggle':
                                        We +
                                        ': {{marker.value.isVisible}} && !{{marker.value.isDisabled}} && {{marker.value.fragmentsCollected}} === 3',
                                }),
                            ),
                        ),
                    Ye = {
                        cff_splash: 'BattleProgressBar_cff_splash_58',
                        cff_splash_small: 'BattleProgressBar_cff_splash_small_95',
                        cff_title: 'BattleProgressBar_cff_title_a7',
                        cff_heading: 'BattleProgressBar_cff_heading_5e',
                        cff_heading_small: 'BattleProgressBar_cff_heading_small_59',
                        cff_body: 'BattleProgressBar_cff_body_23',
                        cff_emphasis: 'BattleProgressBar_cff_emphasis_d8',
                        cff_emphasis_small: 'BattleProgressBar_cff_emphasis_small_01',
                        cff_body_small: 'BattleProgressBar_cff_body_small_1d',
                        cff_player: 'BattleProgressBar_cff_player_71',
                        cff_decorative_title: 'BattleProgressBar_cff_decorative_title_52',
                        cff_decorative_body: 'BattleProgressBar_cff_decorative_body_e4',
                        boxImage: 'BattleProgressBar_boxImage_11',
                        transparent: 'BattleProgressBar_transparent_87',
                        fade_in: 'BattleProgressBar_fade_in_3e',
                        fade_from_left: 'BattleProgressBar_fade_from_left_f6',
                        fade_from_bottom: 'BattleProgressBar_fade_from_bottom_7b',
                        fade_out: 'BattleProgressBar_fade_out_d6',
                        fade_to_left: 'BattleProgressBar_fade_to_left_b8',
                        fade_to_bottom: 'BattleProgressBar_fade_to_bottom_a6',
                        delay_100: 'BattleProgressBar_delay_100_d0',
                        delay_200: 'BattleProgressBar_delay_200_f8',
                        delay_300: 'BattleProgressBar_delay_300_e4',
                        delay_400: 'BattleProgressBar_delay_400_24',
                        delay_500: 'BattleProgressBar_delay_500_da',
                        delay_600: 'BattleProgressBar_delay_600_c0',
                        delay_700: 'BattleProgressBar_delay_700_f0',
                        delay_800: 'BattleProgressBar_delay_800_3b',
                        delay_1000: 'BattleProgressBar_delay_1000_d7',
                        delay_1250: 'BattleProgressBar_delay_1250_08',
                        delay_1500: 'BattleProgressBar_delay_1500_9b',
                        delay_3000: 'BattleProgressBar_delay_3000_39',
                        glitch: 'BattleProgressBar_glitch_be',
                        CFF_MAIN: 'BattleProgressBar_CFF_MAIN_3b',
                        CFF_SUPPORT: 'BattleProgressBar_CFF_SUPPORT_03',
                        CFF_DONE: 'BattleProgressBar_CFF_DONE_a8',
                        CFF_PHASE: 'BattleProgressBar_CFF_PHASE_1a',
                        CFF_IMPORTANT: 'BattleProgressBar_CFF_IMPORTANT_a8',
                        CFF_HERO: 'BattleProgressBar_CFF_HERO_dc',
                        CFF_ATTENTION: 'BattleProgressBar_CFF_ATTENTION_5d',
                        CFF_BACKGROUND: 'BattleProgressBar_CFF_BACKGROUND_0c',
                        CFF_MINE: 'BattleProgressBar_CFF_MINE_9b',
                        CFF_VORTEX: 'BattleProgressBar_CFF_VORTEX_06',
                        CFF_BARRIER: 'BattleProgressBar_CFF_BARRIER_b4',
                        CFF_JUMP: 'BattleProgressBar_CFF_JUMP_97',
                        base: 'BattleProgressBar_base_50',
                        base__invisible: 'BattleProgressBar_base__invisible_fb',
                        base__inactive: 'BattleProgressBar_base__inactive_bd',
                        content: 'BattleProgressBar_content_a8',
                        decorationLeft: 'BattleProgressBar_decorationLeft_63',
                        decorationRight: 'BattleProgressBar_decorationRight_49',
                        phase__linear: 'BattleProgressBar_phase__linear_0c',
                        glitch1: 'BattleProgressBar_glitch1_08',
                        glitch2: 'BattleProgressBar_glitch2_17',
                        glitch3: 'BattleProgressBar_glitch3_be',
                    },
                    Xe = {
                        cff_splash: 'ProgressPhase_cff_splash_c9',
                        cff_splash_small: 'ProgressPhase_cff_splash_small_ad',
                        cff_title: 'ProgressPhase_cff_title_e6',
                        cff_heading: 'ProgressPhase_cff_heading_f9',
                        cff_heading_small: 'ProgressPhase_cff_heading_small_34',
                        cff_body: 'ProgressPhase_cff_body_e0',
                        cff_emphasis: 'ProgressPhase_cff_emphasis_a9',
                        cff_emphasis_small: 'ProgressPhase_cff_emphasis_small_cd',
                        cff_body_small: 'ProgressPhase_cff_body_small_6e',
                        cff_player: 'ProgressPhase_cff_player_6c',
                        cff_decorative_title: 'ProgressPhase_cff_decorative_title_b8',
                        cff_decorative_body: 'ProgressPhase_cff_decorative_body_e4',
                        boxImage: 'ProgressPhase_boxImage_df',
                        transparent: 'ProgressPhase_transparent_9e',
                        fade_in: 'ProgressPhase_fade_in_0e',
                        fade_from_left: 'ProgressPhase_fade_from_left_bc',
                        fade_from_bottom: 'ProgressPhase_fade_from_bottom_83',
                        fade_out: 'ProgressPhase_fade_out_18',
                        fade_to_left: 'ProgressPhase_fade_to_left_79',
                        fade_to_bottom: 'ProgressPhase_fade_to_bottom_6f',
                        delay_100: 'ProgressPhase_delay_100_7f',
                        delay_200: 'ProgressPhase_delay_200_f0',
                        delay_300: 'ProgressPhase_delay_300_a6',
                        delay_400: 'ProgressPhase_delay_400_23',
                        delay_500: 'ProgressPhase_delay_500_67',
                        delay_600: 'ProgressPhase_delay_600_30',
                        delay_700: 'ProgressPhase_delay_700_63',
                        delay_800: 'ProgressPhase_delay_800_29',
                        delay_1000: 'ProgressPhase_delay_1000_ca',
                        delay_1250: 'ProgressPhase_delay_1250_f7',
                        delay_1500: 'ProgressPhase_delay_1500_7b',
                        delay_3000: 'ProgressPhase_delay_3000_ee',
                        glitch: 'ProgressPhase_glitch_bb',
                        CFF_MAIN: 'ProgressPhase_CFF_MAIN_59',
                        CFF_SUPPORT: 'ProgressPhase_CFF_SUPPORT_f4',
                        CFF_DONE: 'ProgressPhase_CFF_DONE_08',
                        CFF_PHASE: 'ProgressPhase_CFF_PHASE_94',
                        CFF_IMPORTANT: 'ProgressPhase_CFF_IMPORTANT_90',
                        CFF_HERO: 'ProgressPhase_CFF_HERO_07',
                        CFF_ATTENTION: 'ProgressPhase_CFF_ATTENTION_b2',
                        CFF_BACKGROUND: 'ProgressPhase_CFF_BACKGROUND_af',
                        CFF_MINE: 'ProgressPhase_CFF_MINE_26',
                        CFF_VORTEX: 'ProgressPhase_CFF_VORTEX_65',
                        CFF_BARRIER: 'ProgressPhase_CFF_BARRIER_53',
                        CFF_JUMP: 'ProgressPhase_CFF_JUMP_a2',
                        base__full: 'ProgressPhase_base__full_da',
                        base__circular: 'ProgressPhase_base__circular_35',
                        base__empty: 'ProgressPhase_base__empty_33',
                        glitch1: 'ProgressPhase_glitch1_c9',
                        glitch2: 'ProgressPhase_glitch2_09',
                        glitch3: 'ProgressPhase_glitch3_18',
                    },
                    Ze = {
                        cff_splash: 'LinearProgressBar_cff_splash_90',
                        cff_splash_small: 'LinearProgressBar_cff_splash_small_2a',
                        cff_title: 'LinearProgressBar_cff_title_f1',
                        cff_heading: 'LinearProgressBar_cff_heading_03',
                        cff_heading_small: 'LinearProgressBar_cff_heading_small_a3',
                        cff_body: 'LinearProgressBar_cff_body_78',
                        cff_emphasis: 'LinearProgressBar_cff_emphasis_3b',
                        cff_emphasis_small: 'LinearProgressBar_cff_emphasis_small_b4',
                        cff_body_small: 'LinearProgressBar_cff_body_small_c1',
                        cff_player: 'LinearProgressBar_cff_player_11',
                        cff_decorative_title: 'LinearProgressBar_cff_decorative_title_6c',
                        cff_decorative_body: 'LinearProgressBar_cff_decorative_body_7d',
                        boxImage: 'LinearProgressBar_boxImage_fb',
                        transparent: 'LinearProgressBar_transparent_e3',
                        fade_in: 'LinearProgressBar_fade_in_00',
                        fade_from_left: 'LinearProgressBar_fade_from_left_54',
                        fade_from_bottom: 'LinearProgressBar_fade_from_bottom_4b',
                        fade_out: 'LinearProgressBar_fade_out_a0',
                        fade_to_left: 'LinearProgressBar_fade_to_left_c5',
                        fade_to_bottom: 'LinearProgressBar_fade_to_bottom_f7',
                        delay_100: 'LinearProgressBar_delay_100_db',
                        delay_200: 'LinearProgressBar_delay_200_07',
                        delay_300: 'LinearProgressBar_delay_300_0f',
                        delay_400: 'LinearProgressBar_delay_400_8c',
                        delay_500: 'LinearProgressBar_delay_500_6e',
                        delay_600: 'LinearProgressBar_delay_600_44',
                        delay_700: 'LinearProgressBar_delay_700_1d',
                        delay_800: 'LinearProgressBar_delay_800_85',
                        delay_1000: 'LinearProgressBar_delay_1000_01',
                        delay_1250: 'LinearProgressBar_delay_1250_61',
                        delay_1500: 'LinearProgressBar_delay_1500_11',
                        delay_3000: 'LinearProgressBar_delay_3000_10',
                        glitch: 'LinearProgressBar_glitch_92',
                        CFF_MAIN: 'LinearProgressBar_CFF_MAIN_76',
                        CFF_SUPPORT: 'LinearProgressBar_CFF_SUPPORT_f9',
                        CFF_DONE: 'LinearProgressBar_CFF_DONE_f2',
                        CFF_PHASE: 'LinearProgressBar_CFF_PHASE_5c',
                        CFF_IMPORTANT: 'LinearProgressBar_CFF_IMPORTANT_ff',
                        CFF_HERO: 'LinearProgressBar_CFF_HERO_63',
                        CFF_ATTENTION: 'LinearProgressBar_CFF_ATTENTION_99',
                        CFF_BACKGROUND: 'LinearProgressBar_CFF_BACKGROUND_e2',
                        CFF_MINE: 'LinearProgressBar_CFF_MINE_e7',
                        CFF_VORTEX: 'LinearProgressBar_CFF_VORTEX_ce',
                        CFF_BARRIER: 'LinearProgressBar_CFF_BARRIER_b0',
                        CFF_JUMP: 'LinearProgressBar_CFF_JUMP_2f',
                        base: 'LinearProgressBar_base_d5',
                        current: 'LinearProgressBar_current_0d',
                        current_overlay: 'LinearProgressBar_current_overlay_16',
                        glitch1: 'LinearProgressBar_glitch1_73',
                        glitch2: 'LinearProgressBar_glitch2_93',
                        glitch3: 'LinearProgressBar_glitch3_b6',
                    },
                    Je = ({ current: e, linearStyle: u, total: t, className: a }) =>
                        r().createElement(
                            'div',
                            { className: g()(Ze.base, e === t && Ze.base__done, a), style: u },
                            r().createElement(
                                'div',
                                { className: Ze.current, style: { width: 0 !== t ? (100 * e) / t + '%' : '0' } },
                                r().createElement('div', { className: Ze.current_overlay }),
                            ),
                        ),
                    Qe = ({ className: e, current: u, total: t, children: a }) => {
                        const i = Math.max(Math.min((u / t) * 360, 360), 0),
                            l = Math.ceil(i / 90);
                        return r().createElement(
                            'div',
                            { className: g()('RadialProgressBar_base_da', e) },
                            r().createElement('div', { className: 'RadialProgressBar_background_89' }),
                            new Array(l).fill(0).map((e, u) => {
                                const t = 90 - Math.min(Math.max(i - 90 * u, 0), 90);
                                return r().createElement(
                                    'div',
                                    { key: u, className: 'RadialProgressBar_arc_9e' },
                                    r().createElement('div', {
                                        className: 'RadialProgressBar_bar_a0',
                                        style: { transform: 'rotate(' + t + 'deg)' },
                                    }),
                                );
                            }),
                            a,
                        );
                    },
                    eu = ({ circular: e, timeLeft: u, duration: t, style: a, className: i }) => {
                        const l = 0 === u,
                            s = u === t,
                            n = u > 0 && u < t,
                            o = g()(
                                Xe.base,
                                e && Xe.base__circular,
                                l && Xe.base__empty,
                                s && Xe.base__full,
                                n && Xe.base__in_progress,
                                i,
                            );
                        return e
                            ? n
                                ? r().createElement(Qe, { current: u, total: t, className: o })
                                : r().createElement('div', { className: o })
                            : r().createElement(Je, { current: u, total: t, linearStyle: a, className: o });
                    },
                    uu = (e, u) => (0 === e ? 'empty' : e === u ? 'full' : 'inProgress'),
                    tu = { none: 0, empty: 6.5, full: 6.5, inProgress: 18 },
                    au = [I.Idle, I.Delivery],
                    ru = (0, k.observer)(() => {
                        const e = $().model.computes.getPhaseData(),
                            u = e.currentPhaseIdx,
                            t = e.currentPhaseDuration,
                            a = e.currentPhaseTimeLeft,
                            i = e.phaseCount,
                            l = e.currentPhaseType,
                            s = au.includes(l),
                            n = r().useState([]),
                            o = n[0],
                            _ = n[1];
                        return (
                            r().useEffect(() => {
                                let e = null;
                                const r = Date.now(),
                                    l = new Array(i).fill(0).map((e, r) => {
                                        const i = r === u;
                                        return {
                                            isPhaseCompleted: r < u,
                                            phaseTimeLeft: i && s ? a : 1,
                                            phaseDuration: i && s ? t : 1,
                                            isCircular: r % 2 != 0,
                                        };
                                    });
                                return (
                                    _(l),
                                    s &&
                                        (e = setInterval(() => {
                                            _((t) => {
                                                var i;
                                                if (0 === (null == (i = t[u]) ? void 0 : i.phaseTimeLeft))
                                                    return e && clearInterval(e), t;
                                                const l = a - Math.floor((Date.now() - r) / le),
                                                    s = t ? [...t] : [];
                                                return (
                                                    s[u] && (s[u] = Object.assign({}, s[u], { phaseTimeLeft: l })), s
                                                );
                                            });
                                        }, le)),
                                    () => {
                                        e && clearInterval(e);
                                    }
                                );
                            }, [u, t, a, i, s]),
                            i > 0
                                ? r().createElement(
                                      'div',
                                      {
                                          className: g()(
                                              Ye.base,
                                              l === I.Evacuation && Ye.base__invisible,
                                              l === I.Prebattle && Ye.base__inactive,
                                          ),
                                      },
                                      r().createElement(
                                          'div',
                                          { className: Ye.content },
                                          r().createElement('div', { className: Ye.decorationLeft }),
                                          o.map(
                                              (
                                                  {
                                                      isPhaseCompleted: e,
                                                      phaseTimeLeft: u,
                                                      phaseDuration: t,
                                                      isCircular: a,
                                                  },
                                                  i,
                                                  l,
                                              ) => {
                                                  const s = {};
                                                  if (!a) {
                                                      const e = l[i - 1],
                                                          u = l[i + 1],
                                                          t =
                                                              e && void 0 !== e.phaseTimeLeft
                                                                  ? uu(e.phaseTimeLeft, e.phaseDuration || 1)
                                                                  : 'none',
                                                          a =
                                                              u && void 0 !== u.phaseTimeLeft
                                                                  ? uu(u.phaseTimeLeft, u.phaseDuration)
                                                                  : 'none',
                                                          r = 62 - tu[t] - tu[a];
                                                      s.width = r + 'rem';
                                                  }
                                                  return (
                                                      e && (u = 0),
                                                      r().createElement(eu, {
                                                          className: g()(Ye.phase, !a && Ye.phase__linear),
                                                          key: i,
                                                          style: s,
                                                          circular: a,
                                                          timeLeft: u,
                                                          duration: t,
                                                      })
                                                  );
                                              },
                                          ),
                                          r().createElement('div', { className: Ye.decorationRight }),
                                      ),
                                  )
                                : null
                        );
                    }),
                    iu = 'FragmentWidget_dot_d3',
                    lu = 'FragmentWidget_dot__full_79',
                    su = (0, k.observer)(({ className: e }) =>
                        r().createElement(
                            'div',
                            {
                                className: g()('FragmentWidget_base_e9', e),
                                'data-bind-class-toggle':
                                    'FragmentWidget_base__visible_89: {{model.fragmentsCollected}} >= 1;',
                            },
                            r().createElement('div', {
                                'data-bind-class-toggle':
                                    'FragmentWidget_count__visible_1e: {{model.fragmentsCollected}} > 1',
                                className: 'FragmentWidget_count_29',
                                'data-bind-value':
                                    "R.strings.cosmicEvent.battle.fragment.multiplier().replace('%(count)',{{model.fragmentsCollected}})",
                            }),
                            r().createElement(
                                'div',
                                { className: 'FragmentWidget_dots_ff' },
                                r().createElement('div', {
                                    className: iu,
                                    'data-bind-class-toggle': lu + ': {{model.fragmentsCollected}} >= 1',
                                }),
                                r().createElement('div', {
                                    className: iu,
                                    'data-bind-class-toggle': lu + ': {{model.fragmentsCollected}} >= 2',
                                }),
                                r().createElement('div', {
                                    className: iu,
                                    'data-bind-class-toggle': lu + ': {{model.fragmentsCollected}} >= 3',
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'FragmentWidget_label_deco_32' },
                                r().createElement(
                                    'div',
                                    { className: 'FragmentWidget_label_deco_text_0c' },
                                    R.strings.cosmicDecor.battle.fragment.currentTask(),
                                ),
                                r().createElement('div', { className: 'FragmentWidget_label_deco_line_e0' }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'FragmentWidget_label_heading_a0' },
                                R.strings.cosmicEvent.battle.fragment.objective(),
                            ),
                        ),
                    ),
                    nu = ['className', 'active'];
                function ou() {
                    return (
                        (ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ou.apply(this, arguments)
                    );
                }
                const _u = (e) => {
                        let u = e.className,
                            t = e.active,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, nu);
                        return r().createElement(
                            'div',
                            ou({}, a, { className: g()('ListenIcon_base_4e', t && 'ListenIcon_base__active_66', u) }),
                            r().createElement('div', { className: 'ListenIcon_circle_inner_2f' }),
                            r().createElement('div', { className: 'ListenIcon_circle_outer_72' }),
                            r().createElement('img', {
                                src: R.images.cosmic_event.gui.maps.icons.progress_route.icon_listen(),
                            }),
                        );
                    },
                    cu = r().memo(() =>
                        r().createElement(
                            'div',
                            {
                                className: 'Announcer_base_86',
                                'data-bind-class-toggle': 'Announcer_base__visible_ad: {{model.isAnnouncerVisible}}',
                            },
                            r().createElement(_u, { active: !0 }),
                            r().createElement(
                                'div',
                                { className: 'Announcer_name_0b' },
                                R.strings.cosmicEvent.announcer.name(),
                            ),
                        ),
                    ),
                    Eu = 'Stripes_stripes_d3',
                    Au = 'Stripes_stripes__visible_7b',
                    Fu = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: g()('Stripes_base_56', e) },
                            r().createElement('div', {
                                className: Eu,
                                'data-bind-class-toggle': Au + ': {{model.isHideOnEvacuation}} === false',
                            }),
                            r().createElement('div', {
                                className: g()(Eu, 'Stripes_stripes__red_7e'),
                                'data-bind-class-toggle': Au + ': {{model.isHideOnEvacuation}} === true',
                            }),
                        ),
                    du = 'CosmicReactHudApp_hideWhenRespawning_7f',
                    mu = 'CosmicReactHudApp_hideWhenTargeting_45',
                    Du = () =>
                        r().createElement(
                            'div',
                            {
                                className: 'CosmicReactHudApp_base_c3',
                                'data-bind-class-toggle':
                                    'CosmicReactHudApp_base__respawning_50: {{model.isRespawning}} === true;CosmicReactHudApp_base__targeting_03: {{model.isTargeting}} === true;CosmicReactHudApp_base__evacuation_d4: {{model.isHideOnEvacuation}} === true;',
                            },
                            r().createElement(Fu, null),
                            r().createElement(He, { className: du }),
                            r().createElement(me, { className: g()(du, mu) }),
                            r().createElement($e, null),
                            r().createElement(Ce, { className: g()(du, mu) }),
                            r().createElement(ru, null),
                            r().createElement(Ie, null),
                            r().createElement(ge, null),
                            r().createElement(Be, null),
                            r().createElement(cu, null),
                            r().createElement(Re, null),
                            r().createElement(Ee, { className: g()(du) }),
                            r().createElement(ye, null),
                            r().createElement(su, null),
                        );
                engine.whenReady.then(() => {
                    document.documentElement.setAttribute('keep-esc-propagation', ''),
                        M().render(
                            r().createElement(N, null, r().createElement(q, null, r().createElement(Du, null))),
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
        return __webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var r = 1 / 0;
                for (n = 0; n < deferred.length; n++) {
                    for (var [u, t, a] = deferred[n], i = !0, l = 0; l < u.length; l++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[l]))
                            ? u.splice(l--, 1)
                            : ((i = !1), a < r && (r = a));
                    if (i) {
                        deferred.splice(n--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var n = deferred.length; n > 0 && deferred[n - 1][2] > a; n--) deferred[n] = deferred[n - 1];
            deferred[n] = [u, t, a];
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
        (() => {
            var e = { 775: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [i, l, s] = t,
                        n = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (a in l) __webpack_require__.o(l, a) && (__webpack_require__.m[a] = l[a]);
                        if (s) var o = s(__webpack_require__);
                    }
                    for (u && u(t); n < i.length; n++)
                        (r = i[n]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(o);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(50));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
