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
                    t.d(u, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${u}`,
                                        i = l[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
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
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => i,
                    });
                var n = t(527);
                function a(e = 'px') {
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
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => a });
                var n = t(5959);
                const a = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(2472);
                const a = {
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => p,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => A,
                        getSize: () => E,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => B,
                        isFocused: () => C,
                        pxToRem: () => F,
                        remToPx: () => h,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: h(u.x), y: h(u.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const p = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    o = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                        var a;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? a : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, a;
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
                    })(a || (a = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(3138);
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
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
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
                t.d(u, { Sw: () => r.Z, B0: () => o, ry: () => F });
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
                const a = n;
                var r = t(1358);
                var i = t(8613);
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    m = t(3138);
                const _ = ['args'];
                function g(e, u, t, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, a);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            g(r, n, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(r, n, a, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, _);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    D = () => h(o.CLOSE),
                    C = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var v = t(7572);
                const B = a.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => h(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => h(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                E = s.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            h(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: A(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, D);
                        },
                        handleViewEvent: h,
                        onBindingsReady: F,
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
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            5415: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t.n(n);
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
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function l(e, u, t) {
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
                        a = (function (e, u) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
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
                })(s || (s = {}));
                const c = i.O.client.getSize('rem'),
                    d = c.width,
                    E = c.height,
                    m = Object.assign({ width: d, height: E }, l(d, E, o)),
                    _ = (0, n.createContext)(m),
                    g = ['children'];
                const A = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, g);
                    const a = (0, n.useContext)(_),
                        i = a.extraLarge,
                        o = a.large,
                        s = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        d = a.extraLargeWidth,
                        E = a.largeWidth,
                        m = a.mediumWidth,
                        A = a.smallWidth,
                        F = a.extraSmallWidth,
                        h = a.extraLargeHeight,
                        D = a.largeHeight,
                        C = a.mediumHeight,
                        v = a.smallHeight,
                        B = a.extraSmallHeight,
                        b = { extraLarge: h, large: D, medium: C, small: v, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && o) return u;
                        if (t.medium && s) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return r(u, t, b);
                        if (t.largeWidth && E) return r(u, t, b);
                        if (t.mediumWidth && m) return r(u, t, b);
                        if (t.smallWidth && A) return r(u, t, b);
                        if (t.extraSmallWidth && F) return r(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && h) return u;
                            if (t.largeHeight && D) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && v) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                };
                A.defaultProps = {
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
                (0, n.memo)(A);
                const F = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    h = ({ children: e }) => {
                        const u = (0, n.useContext)(_),
                            t = (0, n.useState)(u),
                            r = t[0],
                            s = t[1],
                            c = (0, n.useCallback)((e, u) => {
                                const t = i.O.view.pxToRem(e),
                                    n = i.O.view.pxToRem(u);
                                s(Object.assign({ width: t, height: n }, l(t, n, o)));
                            }, []),
                            d = (0, n.useCallback)(() => {
                                const e = i.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        F(() => {
                            i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', c),
                                        i.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [c, d],
                            );
                        const E = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(_.Provider, { value: E }, e);
                    };
                var D = t(6483),
                    C = t.n(D),
                    v = t(926),
                    B = t.n(v);
                let b, f, p;
                !(function (e) {
                    (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(p || (p = {}));
                const w = () => {
                        const e = (0, n.useContext)(_),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return b.ExtraLarge;
                                    case e.large:
                                        return b.Large;
                                    case e.medium:
                                        return b.Medium;
                                    case e.small:
                                        return b.Small;
                                    case e.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
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
                                        return p.ExtraLarge;
                                    case e.largeHeight:
                                        return p.Large;
                                    case e.mediumHeight:
                                        return p.Medium;
                                    case e.smallHeight:
                                        return p.Small;
                                    case e.extraSmallHeight:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const S = {
                        [f.ExtraSmall]: '',
                        [f.Small]: B().SMALL_WIDTH,
                        [f.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [f.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [p.ExtraSmall]: '',
                        [p.Small]: B().SMALL_HEIGHT,
                        [p.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [p.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: B().SMALL,
                        [b.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [b.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [b.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    O = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, x);
                        const r = w(),
                            i = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return a().createElement('div', y({ className: C()(t, S[i], k[o], T[s]) }, n), u);
                    },
                    L = ['children'];
                const M = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, L);
                    return a().createElement(h, null, a().createElement(O, t, u));
                };
                var N = t(493),
                    I = t.n(N);
                function H(e) {
                    engine.call('PlaySound', e);
                }
                const P = {
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
                    $ = [
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
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                class U extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && H(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && H(this.props.soundClick);
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
                            i = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, $)),
                            m = C()(P.base, P[`base__${i}`], P[`base__${r}`], null == o ? void 0 : o.base),
                            _ = C()(P.icon, P[`icon__${i}`], P[`icon__${r}`], null == o ? void 0 : o.icon),
                            g = C()(P.glow, null == o ? void 0 : o.glow),
                            A = C()(P.caption, P[`caption__${i}`], null == o ? void 0 : o.caption),
                            F = C()(P.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            W(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== i && a().createElement('div', { className: P.shine }),
                            a().createElement('div', { className: _ }, a().createElement('div', { className: g })),
                            a().createElement('div', { className: A }, u),
                            n && a().createElement('div', { className: F }, n),
                        );
                    }
                }
                function j(e, u, t, n) {
                    let a,
                        r = !1,
                        i = 0;
                    function o() {
                        a && clearTimeout(a);
                    }
                    function s(...s) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            (i = Date.now()), t.apply(l, s);
                        }
                        r ||
                            (n && !a && d(),
                            o(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== u &&
                                  (a = setTimeout(
                                      n
                                          ? function () {
                                                a = void 0;
                                            }
                                          : d,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                        (s.cancel = function () {
                            o(), (r = !0);
                        }),
                        s
                    );
                }
                function G(e, u, t, a = !1) {
                    const r = (0, n.useMemo)(
                        () =>
                            (function (e, u, t) {
                                return void 0 === t ? j(e, u, !1) : j(e, t, !1 !== u);
                            })(t, a, e),
                        u,
                    );
                    return (0, n.useEffect)(() => r.cancel, [r]), r;
                }
                U.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var V = t(5521),
                    q = t(9916);
                const z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function K(e = V.n.NONE, u = z, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== V.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, a]);
                }
                var Y = t(3403),
                    Q = t(7030);
                function X() {}
                function Z(e) {
                    return e;
                }
                function J() {
                    return !1;
                }
                console.log;
                var ee = t(9174);
                function ue(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return te(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return te(e, u);
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
                function te(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const ne = (e) => (0 === e ? window : window.subViews.get(e));
                function ae(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function re(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const ie = re;
                function oe(e, u) {
                    return (function (e, u, t) {
                        const n = [];
                        for (let a = 0; a < e.length; a++) {
                            const r = ie(e, a);
                            u(r, a, e) && n.push(t(r, a, e));
                        }
                        return n;
                    })(e, ae, u);
                }
                var se = t(3946);
                const le = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: s, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    d = (t, n, a) => {
                                        var r;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ne,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = a.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const a = t(u),
                                                        r = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const s = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = i.O.view.addModelObserver(s, u, !0);
                                                        return a.set(l, t), e && t(o(r)), l;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, u) => {
                                                        const t = o(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = o(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = ue(a.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            s =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = ee.LO.box(n, { equals: J });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, ee.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = ee.LO.box(n, { equals: J });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, ee.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = ee.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, ee.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                i = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = ee.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, ee.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: t, model: E, externalModel: s, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && a ? a.controls(m) : u(m),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    m = (0, n.useState)(r),
                                    _ = m[0],
                                    g = m[1],
                                    A = (0, n.useState)(() => d(r, o, l)),
                                    F = A[0],
                                    h = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? h(d(_, o, l)) : (E.current = !0);
                                    }, [l, _, o]),
                                    (0, n.useEffect)(() => {
                                        g(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    a().createElement(t.Provider, { value: F }, s)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = { root: e.object(), dogTags: e.array('dogTags') },
                                t = (0, se.Om)(() => oe(u.dogTags.get(), Z)),
                                n = (0, se.Om)(
                                    (e) => {
                                        const u = re(t(), e);
                                        if (u) return u;
                                        throw new Error(`Unexpected dog tag index: ${e}`);
                                    },
                                    { equals: J },
                                ),
                                a = (0, se.Om)(() => {
                                    const e = u.root.get().initialIndex;
                                    if (e > 0) return e;
                                    const n = t().findIndex((e) => e.isSelected);
                                    return -1 === n ? 0 : n;
                                });
                            return Object.assign({}, u, {
                                computes: {
                                    dogTags: t,
                                    getDogTag: n,
                                    initialDogTagIndex: a,
                                    dogTagsLength: (0, se.Om)(() => u.dogTags.get().length),
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => ({
                            equip: e.createCallback((e) => {
                                const t = u.computes.getDogTag(e);
                                return { background: t.background.id, engraving: t.engraving.id };
                            }, 'onEquip'),
                            goToAchievement: e.createCallback(
                                (e, u, t, n) => ({ achievementId: e, category: u, background: t, engraving: n }),
                                'onGoToAchievement',
                            ),
                            openInfo: e.createCallbackNoArgs('onInfoButtonClick'),
                            playVideo: e.createCallbackNoArgs('onPlayVideo'),
                            close: e.createCallbackNoArgs('onClose'),
                            closeOnboarding: e.createCallbackNoArgs('onOnboardingCloseClick'),
                            hideNewBubble: e.createCallback((e) => {
                                const t = u.computes.getDogTag(e);
                                return { background: t.background.id, engraving: t.engraving.id };
                            }, 'onHideNewBubble'),
                        }),
                    ),
                    ce = le[0],
                    de = le[1],
                    Ee = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    me = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function _e() {
                    return (
                        (_e =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _e.apply(this, arguments)
                    );
                }
                const ge = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        r = e.fadeInAnimation,
                        i = e.hide,
                        o = e.maximumNumber,
                        s = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, me);
                    const c = n ? null : t,
                        d = 'string' == typeof c;
                    if ((c && !d && c < 0) || 0 === c) return null;
                    const E = c && !d && c > o,
                        m = C()(
                            Ee.base,
                            Ee[`base__${u}`],
                            r && Ee.base__animated,
                            i && Ee.base__hidden,
                            !c && Ee.base__pattern,
                            n && Ee.base__empty,
                            s,
                        );
                    return a().createElement(
                        'div',
                        _e({ className: m }, l),
                        a().createElement('div', { className: Ee.bg }),
                        a().createElement('div', { className: Ee.pattern }),
                        a().createElement(
                            'div',
                            { className: C()(Ee.value, d && Ee.value__text) },
                            E ? o : c,
                            E && a().createElement('span', { className: Ee.plus }, '+'),
                        ),
                    );
                };
                ge.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Ae = (e = 1) => {
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
                    Fe = [
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
                function he(e) {
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
                const De = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: q.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Ce = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            g = e.isEnabled,
                            A = void 0 === g || g,
                            F = e.targetId,
                            h = void 0 === F ? 0 : F,
                            D = e.onShow,
                            C = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Fe);
                        const B = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(() => h || Ae().resId, [h]),
                            f = (0, n.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (De(t, _, { isMouseEvent: !0, on: !0, arguments: he(a) }, b),
                                    D && D(),
                                    (B.current.isVisible = !0));
                            }, [t, _, a, b, D]),
                            p = (0, n.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        De(t, _, { on: !1 }, b),
                                        B.current.isVisible && C && C(),
                                        (B.current.isVisible = !1);
                                }
                            }, [t, _, b, C]),
                            w = (0, n.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && p();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === A && p();
                            }, [A, p]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', p),
                                    () => {
                                        window.removeEventListener('mouseleave', p), p();
                                    }
                                ),
                                [p],
                            );
                        return A
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      r && r(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              p(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === E && p(), null == s || s(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === E && p(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : u;
                        var x;
                    },
                    ve = 'DogTag_base_2b',
                    Be = 'DogTag_engraving_eb',
                    be = 'DogTag_background_7f',
                    fe = R.strings.settings.LANGUAGE_CODE(),
                    pe = ['de', 'es', 'fr', 'hu', 'it', 'pl', 'pt_br', 'ru', 'tr', 'uk', 'zh_cn', 'cs'];
                let we;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(we || (we = {}));
                const xe = ({ background: e, engraving: u, size: t = we.Big, grade: n = 0, className: r }) => {
                    const i = pe.includes(fe) ? `_${fe}` : '';
                    return a().createElement(
                        'div',
                        { className: C()(ve, r) },
                        a().createElement('div', {
                            className: be,
                            style: {
                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${t}.backgrounds.background_${e}_0)`,
                            },
                        }),
                        a().createElement('div', {
                            className: Be,
                            style: {
                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${t}.engravings.engraving_${u}_${n}${i})`,
                            },
                        }),
                    );
                };
                let ye, Se, ke, Te, Oe;
                !(function (e) {
                    (e.Click = 'click'), (e.Display = 'display');
                })(ye || (ye = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.DogTags = 'dog_tag_view'),
                            (e.AccountDashboard = 'account_dashboard'),
                            (e.AnimatedDogTag = 'animated_dog_tag'),
                            (e.ConfirmDialog = 'confirm_dialog');
                    })(Se || (Se = {})),
                    (function (e) {
                        (e.DiscardChanges = 'discard_change_button'),
                            (e.CancelEngraving = 'cancel_engraving_button'),
                            (e.CancelBackground = 'cancel_background_button'),
                            (e.SliderItem = 'slider_item'),
                            (e.ConfirmDogTag = 'confirm_dog_tag_button'),
                            (e.DiscardDogTag = 'discard_dog_tag_button'),
                            (e.ConfirmChanges = 'confirm_button');
                    })(ke || (ke = {})),
                    (function (e) {
                        (e.Lock = 'lock'), (e.Unlock = 'unlock');
                    })(Te || (Te = {})),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(Oe || (Oe = {}));
                let Le;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(Le || (Le = {}));
                const Me = 'metrics',
                    Re = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    Ne = (e, u) => {
                        const t = (0, n.useCallback)(
                            (t, n = Oe.Info, a) => {
                                a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(a),
                                        });
                            },
                            [e, u],
                        );
                        return (e, u, n) => t(e, u, n);
                    },
                    Ie =
                        (ke.CancelEngraving,
                        ke.CancelBackground,
                        ke.DiscardChanges,
                        () => {
                            const e = ((e) => {
                                const u = Ne(e, Me),
                                    t = (0, n.useCallback)(
                                        (e) => {
                                            u(e.action, e.logLevel, Re(e));
                                        },
                                        [u],
                                    );
                                return (e) => t(e);
                            })('dog_tags');
                            return (u) => {
                                e({ action: ye.Click, parentScreen: Se.AnimatedDogTag, item: ke.SliderItem, info: u });
                            };
                        }),
                    He = 'Card_base_42',
                    Pe = 'Card_base__current_8c',
                    $e = 'Card_dogTag_34',
                    We = 'Card_base__locked_5a',
                    Ue = 'Card_status_af',
                    je = 'Card_counter_10',
                    Ge = {
                        base: 'Status_base_be',
                        glow: 'Status_glow_5e',
                        icon: 'Status_icon_bd',
                        base__lock: 'Status_base__lock_6d',
                    };
                let Ve;
                !(function (e) {
                    (e.Check = 'check'), (e.Lock = 'lock');
                })(Ve || (Ve = {}));
                const qe = ({ type: e, className: u }) =>
                        a().createElement(
                            'div',
                            { className: C()(Ge.base, Ge[`base__${e}`], u) },
                            a().createElement('div', { className: Ge.glow }),
                            a().createElement('div', { className: Ge.icon }),
                        ),
                    ze = (0, Y.Pi)(({ dogTagIndex: e, isCurrent: u, onClick: t, className: r }) => {
                        const i = de(),
                            o = i.model,
                            s = i.controls,
                            l = o.computes.getDogTag(e),
                            c = l.background,
                            d = l.engraving,
                            E = l.isSelected,
                            m = c.isLocked || d.isLocked,
                            _ = c.isNew || d.isNew,
                            g = Ie();
                        return (
                            (0, n.useEffect)(() => {
                                u && _ && s.hideNewBubble(e);
                            }, [s, e, u, _]),
                            a().createElement(
                                Ce,
                                {
                                    contentId: R.views.lobby.dog_tags.CatalogAnimatedDogTagTooltip('resId'),
                                    args: { backgroundId: c.id, engravingId: d.id },
                                },
                                a().createElement(
                                    'div',
                                    {
                                        className: C()(He, u && Pe, m && We, r),
                                        onClick: () => {
                                            u || (t(e), H(R.sounds.ach_sign()), g(m ? Te.Lock : Te.Unlock));
                                        },
                                        onMouseEnter: () => !u && H(R.sounds.ach_hover()),
                                    },
                                    a().createElement(xe, {
                                        background: c.id,
                                        engraving: d.id,
                                        grade: d.currentGrade,
                                        size: we.Small,
                                        className: $e,
                                    }),
                                    (E || m) && a().createElement(qe, { type: m ? Ve.Lock : Ve.Check, className: Ue }),
                                    _ &&
                                        a().createElement(
                                            'div',
                                            { className: je },
                                            a().createElement(ge, { isEmpty: !0 }),
                                        ),
                                ),
                            )
                        );
                    }),
                    Ke = 'Cards_base_fa',
                    Ye = 'Cards_info_58',
                    Qe = 'Cards_card_c9',
                    Xe = (0, Y.Pi)(({ currentDogTagIndex: e, onCardClick: u, className: t }) => {
                        const n = de().model,
                            r = n.computes.getDogTag(e),
                            i = r.background,
                            o = r.engraving,
                            s = r.isShowInPrebattle;
                        return a().createElement(
                            'div',
                            { className: C()(Ke, t) },
                            !i.isLocked &&
                                !o.isLocked &&
                                s &&
                                a().createElement(
                                    'div',
                                    { className: Ye },
                                    R.strings.dogtags.animatedCustomization.showPersonalInfo(),
                                ),
                            ((e, u) => {
                                const t = [];
                                for (let n = 0; n < e; n++) t.push(u(n));
                                return t;
                            })(n.dogTags.get().length, (t) =>
                                a().createElement(ze, {
                                    key: t,
                                    dogTagIndex: t,
                                    isCurrent: t === e,
                                    className: Qe,
                                    onClick: u,
                                }),
                            ),
                        );
                    }),
                    Ze = {
                        linear: (e) => e,
                        easeInQuad: (e) => e * e,
                        easeOutQuad: (e) => e * (2 - e),
                        easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
                        easeInCubic: (e) => e * e * e,
                        easeOutCubic: (e) => --e * e * e + 1,
                        easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        easeInQuart: (e) => e * e * e * e,
                        easeOutQuart: (e) => 1 - --e * e * e * e,
                        easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                        easeInQuint: (e) => e * e * e * e * e,
                        easeOutQuint: (e) => 1 + --e * e * e * e * e,
                        easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                        easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                        easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                        easeInOutCirc(e) {
                            const u = Math.sqrt,
                                t = Math.pow;
                            return e < 0.5 ? (1 - u(1 - t(2 * e, 2))) / 2 : (u(1 - t(-2 * e + 2, 2)) + 1) / 2;
                        },
                        easeOutBack(e) {
                            const u = 1.70158;
                            return 1 + 2.70158 * Math.pow(e - 1, 3) + u * Math.pow(e - 1, 2);
                        },
                    },
                    Je = (e, u) => {
                        const t = (0, n.useRef)();
                        return (
                            (0, n.useEffect)(() => {
                                (u && !u(e)) || (t.current = e);
                            }, [u, e]),
                            t.current
                        );
                    };
                t(1281);
                let eu;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(eu || (eu = {}));
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
                var uu = t(8613);
                Date.now(), uu.Ew.getRegionalDateTime, uu.Ew.getFormattedDateTime;
                const tu = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    nu = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    au = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    ru = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = tu(`${e}.${t}`, window);
                                return nu(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    iu = (e) => {
                        const u = ((e) => {
                                const u = Ae(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: au(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = tu(au(t, `${u}.${n}`), window);
                                    return nu(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    ou = q.Sw.instance;
                let su;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(su || (su = {}));
                const lu = (e = 'model', u = su.Deep) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            r = (0, n.useMemo)(() => Ae(), []),
                            i = r.caller,
                            o = r.resId,
                            s = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            l = (0, n.useState)(() =>
                                ((e) => {
                                    const u = tu(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return nu(u) ? u.value : u;
                                })(ru(s)),
                            ),
                            c = l[0],
                            d = l[1],
                            E = (0, n.useRef)(-1);
                        return (
                            F(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? su.Deep : su.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== su.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === su.Deep
                                                ? (e === c && a((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        n = iu(e);
                                    E.current = ou.addCallback(n, t, o, u === su.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (u !== su.None)
                                    return () => {
                                        ou.removeCallback(E.current, o);
                                    };
                            }, [o, u]),
                            c
                        );
                    },
                    cu = (q.Sw.instance, Je);
                var du = t(5959);
                const Eu = (e) => {
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
                };
                const mu = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function _u() {
                    return (
                        (_u =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _u.apply(this, arguments)
                    );
                }
                const gu = (0, n.forwardRef)(function (e, u) {
                        let t = e.src,
                            r = e.className,
                            i = e.autoplay,
                            o = void 0 !== i && i,
                            s = e.style,
                            l = e.loop,
                            c = void 0 !== l && l,
                            d = e.isPrebufferKeyframes,
                            E = e.keyframesNameConfig,
                            m = e.onClick,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, mu);
                        const g = u,
                            A = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(
                                () =>
                                    Eu(() => {
                                        const e = A.current;
                                        if (!g || !e || !d)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const u = e.cohGetKeyframeTimestamps();
                                        u.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              u.map((u) => {
                                                  null == e || e.cohPrebufferKeyframe(u);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [d, g],
                            ),
                            (0, n.useEffect)(() => {
                                if (g && A.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: X },
                                        u = () => {
                                            let u = 0;
                                            const t = (function (e) {
                                                    let u = 0;
                                                    return [
                                                        function t() {
                                                            e(), (u = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(u);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (A.current) {
                                                        const t = A.current,
                                                            n = t.currentTime,
                                                            a = t.duration;
                                                        if (
                                                            (u !== n &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: n, duration: a }),
                                                                ),
                                                                (u = n)),
                                                            A.current.paused || !g || !d)
                                                        )
                                                            return;
                                                        const r = A.current.cohGetKeyframeTimestamps();
                                                        r.forEach((u, t) => {
                                                            n > r[t] - 0.02 &&
                                                                n < r[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const n = Object.keys(null != E ? E : {})[t];
                                                                    return e({
                                                                        time: u,
                                                                        name: `${E ? n : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                n = t[0],
                                                a = t[1];
                                            return n(), a;
                                        };
                                    e.changeTimeLoop = u();
                                    const t = (u) => (
                                            e.changeTimeHandlers.push(u),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        n = (u) => (
                                            e.changeKeyframeHandlers.push(u),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        a = () => {
                                            var e;
                                            return null == (e = A.current) ? void 0 : e.currentTime;
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = A.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            var u, t, n;
                                            A.current &&
                                                (A.current.currentTime =
                                                    ((u = 0),
                                                    (t = A.current.duration),
                                                    (n = e) < u ? u : n > t ? t : n));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = A.current) ? void 0 : e.play();
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = A.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            s(), i(0);
                                        },
                                        c = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = A.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        m = (e) => {
                                            i(e), o();
                                        },
                                        _ = (e) => {
                                            i(e), s();
                                        },
                                        F = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        h = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = A.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = A.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        D = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = A.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = A.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        };
                                    return (
                                        (g.current = {
                                            on: h,
                                            off: D,
                                            play: o,
                                            pause: s,
                                            stop: l,
                                            cleanup: F,
                                            getCurrentTime: a,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: m,
                                            goToAndStop: _,
                                            setCurrentTime: i,
                                            domRef: A.current,
                                            onChangeTime: t,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            F(), (g.current = null);
                                        }
                                    );
                                }
                            }, [E, g, d]),
                            (0, n.useEffect)(() => {
                                A.current && o && A.current.play();
                            }, [o, c]),
                            (0, n.useEffect)(() => {
                                if (A.current)
                                    return () => {
                                        A.current && A.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                _u({ src: t, className: r, style: s, loop: c, ref: A, onClick: m }, _),
                            )
                        );
                    }),
                    Au = (0, n.memo)(gu),
                    Fu = {
                        base: 'AnimatedDogTag_base_9e',
                        base__small: 'AnimatedDogTag_base__small_ce',
                        base__medium: 'AnimatedDogTag_base__medium_13',
                        base__large: 'AnimatedDogTag_base__large_04',
                        shadow: 'AnimatedDogTag_shadow_24',
                        backplateBox: 'AnimatedDogTag_backplateBox_a8',
                        backplate: 'AnimatedDogTag_backplate_2d',
                        base__extraSmall: 'AnimatedDogTag_base__extraSmall_64',
                        dogTag: 'AnimatedDogTag_dogTag_34',
                        videoBox: 'AnimatedDogTag_videoBox_10',
                        video: 'AnimatedDogTag_video_e4',
                    },
                    hu = {
                        base: 'Counter_base_29',
                        base__extraSmall: 'Counter_base__extraSmall_f8',
                        text: 'Counter_text_73',
                        base__medium: 'Counter_base__medium_78',
                        base__large: 'Counter_base__large_88',
                        count: 'Counter_count_ee',
                        base__small: 'Counter_base__small_52',
                    };
                let Du;
                !(function (e) {
                    (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
                })(Du || (Du = {}));
                const Cu = ({ engraving: e, count: u, size: t }) => {
                    const n = R.strings.dogtags.component.engraving.coupled.$num(e).counter();
                    return a().createElement(
                        'div',
                        { className: C()(hu.base, hu[`base__${t}`]) },
                        a().createElement('div', { className: hu.text }, n),
                        a().createElement('div', { className: hu.count }, u),
                    );
                };
                let vu, Bu;
                !(function (e) {
                    (e.Static = 'static'),
                        (e.Intro = 'intro'),
                        (e.AutoShowing = 'autoShowing'),
                        (e.Showing = 'showing'),
                        (e.Loop = 'loop'),
                        (e.Hiding = 'hiding');
                })(vu || (vu = {})),
                    (function (e) {
                        (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
                    })(Bu || (Bu = {}));
                const bu = { duration: 500, easing: Ze.easeOutBack },
                    fu = {
                        [Bu.ExtraSmall]: Du.ExtraSmall,
                        [Bu.Small]: Du.Small,
                        [Bu.Medium]: Du.Medium,
                        [Bu.Large]: Du.Large,
                    },
                    pu = { [Bu.ExtraSmall]: 'small', [Bu.Small]: 'big', [Bu.Medium]: 'big', [Bu.Large]: 's500x300' },
                    wu = {
                        vehicle_sparks_1: 'ach_dog_tag_animation_01',
                        vehicle_sparks_2: 'ach_dog_tag_animation_02',
                        vehicle_sparks_3: 'ach_dog_tag_animation_03',
                    },
                    xu = ({
                        background: e,
                        engraving: u,
                        progress: t = 0,
                        animationState: r = vu.Static,
                        animationName: i = '',
                        onAnimationEnd: o,
                        grade: s = 0,
                        showBackplate: l = !0,
                        size: c = Bu.Medium,
                        className: d,
                        isSoundOff: E,
                    }) => {
                        const m = (0, n.useRef)(null),
                            _ = (0, n.useState)([]),
                            g = _[0],
                            A = _[1],
                            F = R.videos.dogtags.$dyn(i);
                        (0, n.useEffect)(() => {
                            const e = m.current;
                            if (e)
                                return Eu(() => {
                                    A(e.getCachedKeyframes());
                                });
                        }, [m]);
                        const h = (0, Q.useSpring)(() => ({ from: { opacity: 0 }, config: bu }), [r]),
                            D = h[0],
                            v = h[1],
                            B = (0, Q.useSpring)(() => ({
                                from: { opacity: 0, transform: 'translateY(-50%)' },
                                config: bu,
                                onRest: () => {
                                    r === vu.Hiding && (null == o || o());
                                },
                            })),
                            b = B[0],
                            f = B[1],
                            p = (0, n.useCallback)(() => {
                                var e;
                                null == (e = m.current) || e.play(),
                                    f.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !1 }),
                                    !E && H(R.sounds.$dyn(wu[i]));
                            }, [i, f, E]);
                        (0, n.useEffect)(
                            () =>
                                Eu(() => {
                                    switch (r) {
                                        case vu.Intro:
                                            return void v.start({ to: { opacity: 1 }, immediate: !1 });
                                        case vu.AutoShowing:
                                            return v.start({ to: { opacity: 1 }, immediate: !1 }), void p();
                                        case vu.Showing:
                                            return void p();
                                        case vu.Loop:
                                            return (
                                                w(),
                                                v.start({ to: { opacity: 1 }, immediate: !0 }),
                                                void f.start({
                                                    to: { opacity: 1, transform: 'translateY(0%)' },
                                                    immediate: !0,
                                                })
                                            );
                                        case vu.Hiding:
                                            return (
                                                v.start({ to: { opacity: 0 } }),
                                                void f.start({
                                                    to: { opacity: 0, transform: 'translateY(-50%)' },
                                                    immediate: !1,
                                                })
                                            );
                                        case vu.Static:
                                            v.start({ to: { opacity: 1 }, immediate: !0 }),
                                                f.start({
                                                    to: { opacity: 1, transform: 'translateY(0%)' },
                                                    immediate: !0,
                                                });
                                    }
                                }),
                            [r, f, v, p],
                        );
                        const w = () => {
                            m.current && (m.current.goToAndPlay(5), H(R.sounds.ach_dog_tag_idle()));
                        };
                        return a().createElement(
                            Q.animated.div,
                            { className: C()(Fu.base, Fu[`base__${c}`], d), style: D },
                            l &&
                                a().createElement(
                                    Q.animated.div,
                                    { className: Fu.backplateBox, style: b },
                                    a().createElement(
                                        'div',
                                        {
                                            className: Fu.backplate,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${pu[c]}.bottom_plates.bottom_plate_${e})`,
                                            },
                                        },
                                        a().createElement(Cu, { engraving: u, count: t, size: fu[c] }),
                                    ),
                                ),
                            a().createElement('div', { className: Fu.shadow }),
                            r !== vu.Static &&
                                du.graphicsQuality.isHigh() &&
                                Boolean(F) &&
                                a().createElement(
                                    'div',
                                    { className: Fu.videoBox },
                                    a().createElement(Au, {
                                        ref: m,
                                        className: Fu.video,
                                        onEnded: w,
                                        isPrebufferKeyframes: Boolean(g.length),
                                        src: F,
                                    }),
                                ),
                            a().createElement(xe, {
                                background: e,
                                engraving: u,
                                grade: s,
                                size: we.Big,
                                className: Fu.dogTag,
                            }),
                        );
                    },
                    yu = 'DogTagInfo_base_03',
                    Su = 'DogTagInfo_infoContainer_35',
                    ku = 'DogTagInfo_dogTagContainer_a1';
                let Tu, Ou, Lu;
                !(function (e) {
                    (e.Single = 'single'),
                        (e.Cumulative = 'cumulative'),
                        (e.Staged = 'staged'),
                        (e.Subcategory = 'subcategory'),
                        (e.Category = 'Category');
                })(Tu || (Tu = {})),
                    (function (e) {
                        (e.Top = 'top'), (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(Ou || (Ou = {})),
                    (function (e) {
                        (e.Default = ''), (e.PersonalMissions = 'personal_missions');
                    })(Lu || (Lu = {}));
                const Mu = {
                    base: 'AdvancedAchievement_base_03',
                    base__s100x100: 'AdvancedAchievement_base__s100x100_52',
                    base__s128x128: 'AdvancedAchievement_base__s128x128_d3',
                    base__s180x180: 'AdvancedAchievement_base__s180x180_10',
                    base__s280x280: 'AdvancedAchievement_base__s280x280_ac',
                    base__s360x360: 'AdvancedAchievement_base__s360x360_c6',
                    base__s420x420: 'AdvancedAchievement_base__s420x420_8a',
                    base__flexable: 'AdvancedAchievement_base__flexable_4f',
                    background: 'AdvancedAchievement_background_cf',
                    border: 'AdvancedAchievement_border_5d',
                    icon: 'AdvancedAchievement_icon_bb',
                    base__shield: 'AdvancedAchievement_base__shield_68',
                    icon__bottom: 'AdvancedAchievement_icon__bottom_57',
                    base__circular: 'AdvancedAchievement_base__circular_2d',
                    icon__top: 'AdvancedAchievement_icon__top_2d',
                    stage: 'AdvancedAchievement_stage_fa',
                };
                let Ru, Nu, Iu, Hu;
                !(function (e) {
                    (e.Circular = 'circular'), (e.Shield = 'shield');
                })(Ru || (Ru = {})),
                    (function (e) {
                        (e.S100x100 = 's100x100'),
                            (e.S128x128 = 's128x128'),
                            (e.S180x180 = 's180x180'),
                            (e.S280x280 = 's280x280'),
                            (e.S360x360 = 's360x360'),
                            (e.S420x420 = 's420x420'),
                            (e.Flexable = 'flexable');
                    })(Nu || (Nu = {})),
                    (function (e) {
                        (e.s52x44 = 's52x44'),
                            (e.s68x56 = 's68x56'),
                            (e.s94x80 = 's94x80'),
                            (e.s144x116 = 's144x116'),
                            (e.s218x176 = 's218x176'),
                            (e.s54x60 = 's54x60'),
                            (e.s68x76 = 's68x76'),
                            (e.s94x108 = 's94x108'),
                            (e.s148x168 = 's148x168'),
                            (e.s192x216 = 's192x216'),
                            (e.s228x256 = 's228x256');
                    })(Iu || (Iu = {})),
                    (function (e) {
                        (e.Single = 'single'), (e.Cumulative = 'cumulative'), (e.Staged = 'staged');
                    })(Hu || (Hu = {}));
                const Pu = R.images.gui.maps.icons.advanced_achievements,
                    $u = { [Hu.Single]: Ru.Circular, [Hu.Staged]: Ru.Circular, [Hu.Cumulative]: Ru.Shield },
                    Wu = {
                        [Nu.S100x100]: Iu.s52x44,
                        [Nu.S128x128]: Iu.s68x56,
                        [Nu.S180x180]: Iu.s94x80,
                        [Nu.S280x280]: Iu.s144x116,
                        [Nu.S360x360]: Iu.s218x176,
                        [Nu.S420x420]: Iu.s218x176,
                        [Nu.Flexable]: Iu.s218x176,
                    },
                    Uu = {
                        [Nu.S100x100]: Iu.s54x60,
                        [Nu.S128x128]: Iu.s68x76,
                        [Nu.S180x180]: Iu.s94x108,
                        [Nu.S280x280]: Iu.s148x168,
                        [Nu.S360x360]: Iu.s192x216,
                        [Nu.S420x420]: Iu.s228x256,
                        [Nu.Flexable]: Iu.s228x256,
                    },
                    ju = (e, u, t, n) => {
                        switch (e) {
                            case Ru.Shield:
                                return { backgroundImage: `url(${Pu.borders.shield.$dyn(`tier_${n}_${u}`)})` };
                            case Ru.Circular:
                            default:
                                return {
                                    backgroundImage: `url(${Pu.borders.circular.$dyn(t ? `circular_trophy_${u}` : `circular_${u}`)})`,
                                };
                        }
                    },
                    Gu = (e, u, t, n) => {
                        switch (e) {
                            case Ru.Shield:
                                return { backgroundImage: `url(${Pu.backgrounds.shield.$dyn(`${n}_${u}`)})` };
                            case Ru.Circular:
                            default:
                                return {
                                    backgroundImage: `url(${Pu.backgrounds.circular.$dyn(t ? `trophy_${u}` : `${n}_${u}`)})`,
                                };
                        }
                    },
                    Vu = (e, u, t, n, a, r) => {
                        const i = t ? '_trophy' : '',
                            o = e === Ru.Shield ? `_tier_${a}` : '',
                            s = ((e) => (e === Lu.PersonalMissions ? Uu : Wu))(r),
                            l = s[u],
                            c = ((e, u) => {
                                if (u === Nu.S360x360 && e === Iu.s218x176) return { width: 188, height: 150 };
                                const t = e.substring(1).split('x');
                                return { width: t[0], height: t[1] };
                            })(l, u),
                            d = c.width,
                            E = c.height,
                            m = Pu.icons.$dyn(`${n}${i}${o}_${l}`);
                        return m
                            ? { backgroundImage: `url(${m})`, width: `${d}rem`, height: `${E}rem` }
                            : { width: `${d}rem`, height: `${E}rem` };
                    },
                    qu = ({
                        keyName: e,
                        type: u,
                        backgroundName: t,
                        size: n = Nu.S180x180,
                        level: r = 0,
                        stage: i = 0,
                        isTrophy: o = !1,
                        iconPosition: s = Ou.Center,
                        iconSizeMap: l = Lu.Default,
                        classNames: c,
                    }) => {
                        const d = $u[u] || Ru.Circular,
                            E = n === Nu.Flexable ? Nu.S420x420 : n;
                        return a().createElement(
                            'div',
                            {
                                className: C()(
                                    Mu.base,
                                    Mu[`base__${n}`],
                                    Mu[`base__${d}`],
                                    null == c ? void 0 : c.base,
                                ),
                            },
                            a().createElement('div', {
                                className: C()(Mu.background, null == c ? void 0 : c.background),
                                style: Gu(d, E, o, t),
                            }),
                            a().createElement('div', {
                                className: C()(Mu.border, null == c ? void 0 : c.border),
                                style: ju(d, E, o, r),
                            }),
                            a().createElement('div', {
                                className: C()(
                                    Mu.icon,
                                    Mu[`icon__${s}`],
                                    Mu[`icon__${((m = l), m.replace(/_\w/g, (e) => e[1].toUpperCase()))}`],
                                    null == c ? void 0 : c.icon,
                                ),
                                style: Vu(d, n, o, e, r, l),
                            }),
                            u === Hu.Staged &&
                                Boolean(i) &&
                                a().createElement(
                                    'div',
                                    {
                                        className: C()(Mu.stage, null == c ? void 0 : c.stage),
                                        lang: R.strings.settings.LANGUAGE_CODE(),
                                    },
                                    i,
                                ),
                        );
                        var m;
                    },
                    zu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ku() {
                    return (
                        (Ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ku.apply(this, arguments)
                    );
                }
                const Yu = R.views.common.tooltip_window.simple_tooltip_content,
                    Qu = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            i = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, zu);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, i, s]);
                        return a().createElement(
                            Ce,
                            Ku(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? Yu.SimpleTooltipHtmlContent('resId') : Yu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function Xu() {
                    const e = (0, n.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useEffect)(() => u, []),
                        (0, n.useMemo)(
                            () => ({
                                run: (u) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                u(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const Zu = (e, u) => window.getComputedStyle(e, null).getPropertyValue(u),
                    Ju = (e, u, t) => {
                        const n = t.getContext('2d');
                        if (!n) return 0;
                        var a;
                        n.font = `${Zu((a = u), 'font-weight')} ${Zu(a, 'font-size')} ${Zu(a, 'font-family')}`;
                        return n.measureText(e).width;
                    },
                    et = (e) => {
                        if (e.start >= e.end - 1) return e.start;
                        const u = Math.floor((e.start + e.end) / 2),
                            t = e.words.slice(0, u).join(' '),
                            n = Math.ceil(Ju(t, e.element, e.canvas) / e.element.getBoundingClientRect().width);
                        return et(n <= 1 ? Object.assign({}, e, { start: u }) : Object.assign({}, e, { end: u }));
                    },
                    ut = 'MultilineOverflow_base_d9',
                    tt = 'MultilineOverflow_base__truncated_a1',
                    nt = 'MultilineOverflow_text_ce',
                    at = 'MultilineOverflow_truncatedContent_da',
                    rt = 'MultilineOverflow_singleLine_bb',
                    it = 'MultilineOverflow_line_51',
                    ot = ['text', 'lines', 'className', 'onChange'];
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const lt = (0, n.forwardRef)(function (e, u) {
                    let t = e.text,
                        r = e.lines,
                        i = e.className,
                        o = e.onChange,
                        s = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, ot);
                    const l = (0, n.useRef)(null),
                        c = (0, n.useRef)(null),
                        d = (0, n.useState)(!1),
                        E = d[0],
                        m = d[1],
                        _ = (0, n.useState)([]),
                        g = _[0],
                        A = _[1],
                        F = (0, n.useState)(0),
                        h = F[0],
                        D = F[1],
                        v = Xu(),
                        B = (0, n.useMemo)(() => document.createElement('canvas'), []),
                        b = (0, n.useCallback)(() => (c.current ? c.current.getBoundingClientRect().height : 0), []),
                        f = (0, n.useCallback)(
                            (e) => {
                                const u = b();
                                return e && u ? Math.round(e.scrollHeight / u) : 0;
                            },
                            [b],
                        ),
                        p = (0, n.useCallback)(() => {
                            if (f(l.current) <= r) return m(!1);
                            m(!0);
                            const e = t.split(' '),
                                u = Array.from(new Array(r)).reduce((u, t, n) => {
                                    if (!l.current) return u;
                                    const a = u.reduce((e, u) => e + u.length, 0),
                                        i = e.slice(a);
                                    if (n === r - 1) return u.push(i), u;
                                    const o = et({ start: 0, end: i.length, words: i, element: l.current, canvas: B });
                                    return u.push(i.slice(0, o)), u;
                                }, []);
                            A(u);
                        }, [B, f, r, t]),
                        w = (0, n.useCallback)(() => {
                            v.run(() => {
                                D(b() * r), p();
                            });
                        }, [b, r, v, p]);
                    var x, y;
                    return (
                        (0, n.useEffect)(w, [w]),
                        (x = w),
                        (y = [w]),
                        (0, n.useEffect)(
                            () => (window.addEventListener('resize', x), () => window.removeEventListener('resize', x)),
                            y,
                        ),
                        (0, n.useEffect)(() => {
                            null == o || o(E);
                        }, [o, E]),
                        a().createElement(
                            'div',
                            st({}, s, { ref: u, className: C()(ut, i, E && tt) }),
                            a().createElement('div', { ref: l, className: nt, style: { maxHeight: `${h}rem` } }, t),
                            a().createElement(
                                'div',
                                { className: at },
                                g.map((e, u) => a().createElement('div', { key: u, className: it }, e.join(' '))),
                            ),
                            a().createElement('div', { ref: c, className: rt }, R.strings.common.common.dot()),
                        )
                    );
                });
                function ct() {
                    return (
                        (ct =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ct.apply(this, arguments)
                    );
                }
                const dt = (0, n.forwardRef)(function (e, u) {
                        const t = (0, n.useState)(!1),
                            r = t[0],
                            i = t[1];
                        return a().createElement(
                            Qu,
                            { isEnabled: r, body: e.text },
                            a().createElement(lt, ct({}, e, { ref: u, onChange: i })),
                        );
                    }),
                    Et = 'AchievementShortcut_base_e6',
                    mt = 'AchievementShortcut_base__received_4a',
                    _t = 'AchievementShortcut_achievement_7e',
                    gt = 'AchievementShortcut_achievementStage_f4',
                    At = R.strings.dogtags.animatedCustomization.achievementShortcut,
                    Ft = ({
                        isReceived: e,
                        keyName: u,
                        type: t,
                        backgroundName: n,
                        stage: r,
                        isTrophy: i,
                        iconPosition: o,
                        onClick: s,
                        className: l,
                    }) => {
                        const c = w().mediaSize;
                        return a().createElement(
                            'div',
                            {
                                className: C()(Et, e && mt, l),
                                onClick: () => {
                                    null == s || s(), H(R.sounds.ach_sign());
                                },
                                onMouseEnter: () => H(R.sounds.ach_hover()),
                            },
                            a().createElement(qu, {
                                keyName: u,
                                backgroundName: n,
                                type: t,
                                size: c < b.ExtraLarge ? Nu.S128x128 : Nu.S180x180,
                                isTrophy: i,
                                iconPosition: o,
                                stage: r,
                                classNames: { base: _t, stage: gt },
                            }),
                            a().createElement(dt, {
                                text:
                                    ((d = At.$dyn(e ? 'available' : 'locked')),
                                    (E = { stage: r }),
                                    d.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(E[e.slice(u, -u)]);
                                    })),
                                lines: 2,
                            }),
                        );
                        var d, E;
                    },
                    ht = 'Info_base_e8',
                    Dt = 'Info_title_11',
                    Ct = 'Info_description_83',
                    vt = 'Info_achievementShortcut_66',
                    Bt = {
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
                let bt, ft;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(bt || (bt = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(ft || (ft = {}));
                const pt = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: _,
                    onClick: g,
                }) => {
                    const A = (0, n.useRef)(null),
                        F = (0, n.useState)(t),
                        h = F[0],
                        D = F[1],
                        v = (0, n.useState)(!1),
                        B = v[0],
                        b = v[1],
                        f = (0, n.useState)(!1),
                        p = f[0],
                        w = f[1],
                        x = (0, n.useCallback)(() => {
                            i || (A.current && (A.current.focus(), D(!0)));
                        }, [i]),
                        y = (0, n.useCallback)(
                            (e) => {
                                h && null !== A.current && !A.current.contains(e.target) && D(!1);
                            },
                            [h],
                        ),
                        S = (0, n.useCallback)(
                            (e) => {
                                i || (g && g(e));
                            },
                            [i, g],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                i || (null !== s && H(s), c && c(e), w(!0));
                            },
                            [i, s, c],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                i || (m && m(e), b(!1));
                            },
                            [i, m],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                i || (null !== l && H(l), E && E(e), t && x(), b(!0));
                            },
                            [i, l, E, x, t],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                i || (_ && _(e), b(!1));
                            },
                            [i, _],
                        ),
                        N = C()(
                            Bt.base,
                            Bt[`base__${r}`],
                            {
                                [Bt.base__disabled]: i,
                                [Bt[`base__${u}`]]: u,
                                [Bt.base__focus]: h,
                                [Bt.base__highlightActive]: B,
                                [Bt.base__firstHover]: p,
                            },
                            o,
                        ),
                        I = C()(Bt.state, Bt.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, n.useEffect)(() => {
                            D(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: A,
                                className: N,
                                onMouseEnter: k,
                                onMouseMove: T,
                                onMouseUp: O,
                                onMouseDown: L,
                                onMouseLeave: M,
                                onClick: S,
                            },
                            r !== bt.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Bt.back }),
                                    a().createElement('span', { className: Bt.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: I },
                                a().createElement('span', { className: Bt.stateDisabled }),
                                a().createElement('span', { className: Bt.stateHighlightHover }),
                                a().createElement('span', { className: Bt.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: Bt.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                pt.defaultProps = { type: bt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const wt = (0, n.memo)(pt),
                    xt = 'Status_base_9b',
                    yt = 'Status_status_ef',
                    St = 'Status_equipText_e2',
                    kt = 'Status_check_00',
                    Tt = 'Status_button_5b',
                    Ot = R.strings.dogtags.animatedCustomization;
                let Lt;
                !(function (e) {
                    (e.Equipped = 'equipped'), (e.Unequipped = 'unequipped'), (e.Locked = 'locked');
                })(Lt || (Lt = {}));
                const Mt = ({ equipState: e, onEquip: u, className: t }) => {
                        const n = (0, Q.useTransition)(e, {
                            initial: { y: '0rem', opacity: 1 },
                            from: { y: '-20rem', opacity: 0 },
                            enter: { y: '0rem', opacity: 1 },
                            leave: { y: '20rem', opacity: 0 },
                            config: { duration: 300, easing: Ze.easeOutCubic },
                        });
                        return a().createElement(
                            'div',
                            { className: C()(xt, t) },
                            n((e, t) =>
                                a().createElement(
                                    Q.animated.div,
                                    { className: yt, style: e },
                                    (() => {
                                        switch (t) {
                                            case Lt.Equipped:
                                                return a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement('div', { className: kt }),
                                                    a().createElement('div', { className: St }, Ot.equipStatus()),
                                                );
                                            case Lt.Unequipped:
                                            case Lt.Locked:
                                                return a().createElement(
                                                    wt,
                                                    {
                                                        size: ft.medium,
                                                        onClick: u,
                                                        disabled: t === Lt.Locked,
                                                        mixClass: Tt,
                                                    },
                                                    Ot.equipButton(),
                                                );
                                        }
                                    })(),
                                ),
                            ),
                        );
                    },
                    Rt = R.strings.dogtags.component.background.coupled,
                    Nt = (e) => {
                        switch (e) {
                            case Tu.Staged:
                                return Hu.Staged;
                            case Tu.Cumulative:
                                return Hu.Cumulative;
                            case Tu.Single:
                            default:
                                return Hu.Single;
                        }
                    },
                    It = (e, u) => (u ? Lt.Locked : e ? Lt.Equipped : Lt.Unequipped),
                    Ht = (0, Y.Pi)(({ dogTagIndex: e, className: u }) => {
                        const t = de(),
                            n = t.model,
                            r = t.controls,
                            i = n.computes.getDogTag(e),
                            o = i.isSelected,
                            s = i.background,
                            l = i.engraving,
                            c = i.requiredAchievement,
                            d = s.id,
                            E = s.isLocked,
                            m = ((e) => Rt.$num(e))(d);
                        return a().createElement(
                            'div',
                            { className: C()(ht, u) },
                            a().createElement('div', { className: Dt }, m.title()),
                            a().createElement('div', { className: Ct }, m.description()),
                            a().createElement(Ft, {
                                isReceived: !E,
                                keyName: c.key,
                                type: Nt(c.type),
                                backgroundName: c.background,
                                stage: c.stage,
                                onClick: () => r.goToAchievement(c.id, c.category, s.id, l.id),
                                className: vt,
                            }),
                            a().createElement(Mt, {
                                equipState: It(o, E),
                                onEquip: () => {
                                    r.equip(e), H(R.sounds.ach_dog_tag_equip());
                                },
                            }),
                        );
                    }),
                    Pt = (e, u, t) =>
                        (0, Q.useTransition)(e, {
                            from: { x: `${u > e ? -t : t}rem`, opacity: 0 },
                            enter: { x: '0rem', opacity: 1 },
                            leave: { x: `${u > e ? t : -t}rem`, opacity: 0 },
                            immediate: u === e,
                            config: { duration: 400, easing: Ze.easeInQuad },
                        }),
                    $t = {
                        [b.ExtraSmall]: Bu.Small,
                        [b.Small]: Bu.Small,
                        [b.Medium]: Bu.Medium,
                        [b.Large]: Bu.Medium,
                        [b.ExtraLarge]: Bu.Large,
                    },
                    Wt = (0, Y.Pi)(({ dogTagIndex: e, className: u }) => {
                        var t;
                        const r = de().model,
                            i = r.root.get().onboardingEnabled,
                            o = null != (t = cu(e)) ? t : e,
                            s = w().mediaSize,
                            l = Pt(e, o, 60),
                            c = Pt(e, o, 90),
                            d = (0, n.useState)(vu.Intro),
                            E = d[0],
                            m = d[1];
                        return (
                            (0, n.useEffect)(() => {
                                i || m(vu.AutoShowing);
                            }, [i]),
                            a().createElement(
                                'div',
                                { className: C()(yu, u) },
                                l((e, u) =>
                                    a().createElement(
                                        Q.animated.div,
                                        { className: Su, style: e },
                                        a().createElement(Ht, { dogTagIndex: u }),
                                    ),
                                ),
                                c((u, t) => {
                                    const n = r.computes.getDogTag(t),
                                        i = n.background,
                                        l = n.engraving,
                                        c = n.animation;
                                    return a().createElement(
                                        Q.animated.div,
                                        { className: ku, style: u },
                                        a().createElement(xu, {
                                            background: i.id,
                                            engraving: l.id,
                                            progress: l.currentProgress,
                                            size: $t[s],
                                            animationState: o !== e ? vu.Hiding : E,
                                            animationName: c,
                                        }),
                                    );
                                }),
                            )
                        );
                    }),
                    Ut = 'Header_base_f8',
                    jt = 'Header_title_5c',
                    Gt = 'Header_infoButton_ed',
                    Vt = 'Header_infoIcon_8b',
                    qt = R.strings.dogtags.animatedCustomization,
                    zt = ({ className: e }) => {
                        const u = de().controls;
                        return a().createElement(
                            'div',
                            { className: C()(Ut, e) },
                            a().createElement('div', { className: jt }, qt.title()),
                            a().createElement(
                                'div',
                                { className: Gt },
                                a().createElement(
                                    Qu,
                                    { body: qt.info.tooltip() },
                                    a().createElement(
                                        wt,
                                        { type: 'ghost', onClick: u.openInfo },
                                        a().createElement('div', { className: Vt }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Kt = 'Onboarding_base_56',
                    Yt = 'Onboarding_header_61',
                    Qt = 'Onboarding_center_c4',
                    Xt = 'Onboarding_closeBtn_61',
                    Zt = 'Onboarding_body_17',
                    Jt = 'Onboarding_overlayReveal_0a',
                    en = 'Onboarding_overlay_30',
                    un = 'Onboarding_playBtnWrapper_84',
                    tn = 'Onboarding_playBtn_1e',
                    nn = 'Onboarding_footer_d2',
                    an = 'Onboarding_pagination_79',
                    rn = 'Onboarding_paginationBtn_e6',
                    on = 'Onboarding_selected_2d',
                    sn = 'Onboarding_replay_39',
                    ln = 'Onboarding_replayIcon_f1',
                    cn = 'Onboarding_overlayInnerWrapper_e7',
                    dn = 'Onboarding_overlayTitle_95',
                    En = 'Onboarding_overlayText_7e',
                    mn = {
                        slideOut: 'Reveal_slideOut_22',
                        slideIn: 'Reveal_slideIn_cb',
                        slideLeftOut: 'Reveal_slideLeftOut_d4',
                        slideLeftIn: 'Reveal_slideLeftIn_be',
                        slideRightOut: 'Reveal_slideRightOut_16',
                        slideRightIn: 'Reveal_slideRightIn_17',
                        fadeOut: 'Reveal_fadeOut_74',
                        fadeIn: 'Reveal_fadeIn_a3',
                        bg_fadeOut: 'Reveal_bg_fadeOut_a9',
                        fadeOutBlur: 'Reveal_fadeOutBlur_b1',
                        bg_fadeIn: 'Reveal_bg_fadeIn_bc',
                        fadeInBlur: 'Reveal_fadeInBlur_66',
                        fadeDownIn: 'Reveal_fadeDownIn_29',
                        fadeInUp: 'Reveal_fadeInUp_fe',
                        fadeDownOut: 'Reveal_fadeDownOut_8a',
                        fadeInDown: 'Reveal_fadeInDown_38',
                    },
                    _n = (0, n.memo)(
                        ({
                            children: e,
                            type: u = 'slide',
                            duration: t = 200,
                            className: r,
                            isOut: i = !1,
                            delayIn: o = '0ms',
                            delayOut: s = '0ms',
                            isDisabled: l = !1,
                            onAnimationComplete: c,
                        }) => {
                            const d = (0, n.useMemo)(
                                    () => ({ animationDelay: i ? s : o, animationDuration: `${t}ms` }),
                                    [i, o, s, t],
                                ),
                                E = C()(mn[`${u}${i ? 'Out' : 'In'}`], r);
                            return l
                                ? a().createElement('div', { className: r }, e)
                                : a().createElement('div', { onAnimationEnd: c, className: E, style: d }, e);
                        },
                    );
                var gn;
                !(function (e) {
                    (e[(e.First = 0)] = 'First'), (e[(e.Second = 1)] = 'Second');
                })(gn || (gn = {}));
                const An = R.strings.dogtags.onboarding.header.title(),
                    Fn = R.strings.dogtags.onboarding.header.close(),
                    hn = R.strings.dogtags.onboarding.overlay.pagination.first(),
                    Dn = R.strings.dogtags.onboarding.overlay.pagination.second(),
                    Cn = R.strings.dogtags.onboarding.overlay.replay(),
                    vn = (0, n.memo)(({ onClose: e }) => {
                        const u = lu('model', su.None).onPlayVideo,
                            t = (0, n.useState)(!1),
                            r = t[0],
                            i = t[1],
                            o = (0, n.useState)(!1),
                            s = o[0],
                            l = o[1],
                            c = (0, n.useState)(gn.First),
                            d = c[0],
                            E = c[1],
                            m = (e) => () => (H(R.sounds.play()), E(e)),
                            _ = (0, n.useCallback)((u) => (d === gn.First ? E(gn.Second) : e(u)), [d, e]),
                            g = (0, n.useCallback)(
                                () => (
                                    H(R.sounds.play()),
                                    d === gn.First
                                        ? (setTimeout(() => i(!0), 500), u({ urlKey: 'onboardingVideo1' }))
                                        : (setTimeout(() => l(!0), 500), u({ urlKey: 'onboardingVideo2' }))
                                ),
                                [d, u],
                            ),
                            A = (0, n.useCallback)(() => H(R.sounds.highlight()), []),
                            F = ((h = r),
                            (D = s),
                            {
                                [gn.First]: {
                                    title: h
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.title()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.title(),
                                    text: h
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.text()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.text(),
                                    button: R.strings.dogtags.onboarding.overlay.button.next(),
                                    background: R.images.gui.maps.icons.dogtags.icons.onboarding_bg_1(),
                                },
                                [gn.Second]: {
                                    title: D
                                        ? R.strings.dogtags.onboarding.overlay.second.postVideo.title()
                                        : R.strings.dogtags.onboarding.overlay.second.preVideo.title(),
                                    text: D
                                        ? R.strings.dogtags.onboarding.overlay.second.postVideo.text()
                                        : R.strings.dogtags.onboarding.overlay.second.preVideo.text(),
                                    button: R.strings.dogtags.onboarding.overlay.button.affirmative(),
                                    background: R.images.gui.maps.icons.dogtags.icons.onboarding_bg_2(),
                                },
                            })[d];
                        var h, D;
                        const v = ((e) => ({ backgroundImage: `url(${e.background})` }))(F),
                            B = C()(rn, d === gn.First && on),
                            b = C()(rn, d === gn.Second && on);
                        return a().createElement(
                            'div',
                            { className: Kt },
                            a().createElement(
                                'div',
                                { className: Yt },
                                a().createElement('div', { className: Qt }, An),
                                a().createElement(
                                    'div',
                                    { className: Xt },
                                    a().createElement(U, {
                                        caption: Fn,
                                        type: 'close',
                                        side: 'right',
                                        onClick: e,
                                        onMouseEnter: A,
                                    }),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: Zt, style: v },
                                a().createElement(
                                    _n,
                                    { type: 'fade', className: Jt },
                                    a().createElement(
                                        'div',
                                        { className: en },
                                        ((!r && d === gn.First) || (!s && d === gn.Second)) &&
                                            a().createElement(
                                                'div',
                                                { className: un, onClick: g, onMouseEnter: A },
                                                a().createElement('div', { className: tn }),
                                            ),
                                        a().createElement(
                                            'div',
                                            { className: cn },
                                            a().createElement('div', { className: dn }, F.title),
                                            a().createElement('div', { className: En }, F.text),
                                            ((d === gn.First && r) || (d === gn.Second && s)) &&
                                                a().createElement(
                                                    wt,
                                                    { type: 'main', size: 'medium', onClick: _, onMouseEnter: A },
                                                    F.button,
                                                ),
                                        ),
                                    ),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: nn },
                                ((d === gn.First && r) || (d === gn.Second && s)) &&
                                    a().createElement(
                                        'div',
                                        { className: sn, onClick: g, onMouseEnter: A },
                                        a().createElement('div', { className: ln }),
                                        Cn,
                                    ),
                                a().createElement(
                                    'div',
                                    { className: an },
                                    a().createElement(
                                        'div',
                                        { className: B, onClick: m(gn.First), onMouseEnter: A },
                                        hn,
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: b, onClick: m(gn.Second), onMouseEnter: A },
                                        Dn,
                                    ),
                                ),
                            ),
                        );
                    }),
                    Bn = 'OnboardingIntro_base_3e',
                    bn = () => {
                        const e = de().controls,
                            u = (0, n.useState)(!1),
                            t = u[0],
                            r = u[1];
                        return (
                            K(V.n.ESCAPE, () => r(!0), !0),
                            a().createElement(
                                _n,
                                {
                                    type: 'fade',
                                    isOut: t,
                                    className: Bn,
                                    duration: 300,
                                    onAnimationComplete: () => {
                                        t && e.closeOnboarding();
                                    },
                                },
                                a().createElement(vn, { onClose: () => r(!0) }),
                            )
                        );
                    },
                    fn = 'App_base_29',
                    pn = 'App_content_b4',
                    wn = 'App_content__blur_03',
                    xn = 'App_backBtnWrapper_70',
                    yn = 'App_header_9d',
                    Sn = 'App_dogTagInfo_41',
                    kn = 'App_cards_8d',
                    Tn = R.strings.dogtags.animatedCustomization.back,
                    On = (0, Y.Pi)(() => {
                        const e = de(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get().onboardingEnabled,
                            i = (0, n.useState)(u.computes.initialDogTagIndex()),
                            o = i[0],
                            s = i[1],
                            l = (0, Q.useSpring)({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                config: { duration: 300 },
                            });
                        var c;
                        (c = t.close), K(V.n.ESCAPE, c);
                        const d = G(
                            (e) => {
                                s(e);
                            },
                            [],
                            400,
                            !0,
                        );
                        return a().createElement(
                            Q.animated.div,
                            { style: l, className: fn },
                            a().createElement(
                                'div',
                                { className: C()(pn, r && wn) },
                                a().createElement(
                                    'div',
                                    { className: xn },
                                    a().createElement(U, {
                                        caption: Tn.button(),
                                        type: 'back',
                                        side: 'left',
                                        onClick: t.close,
                                        goto: Tn.goto(),
                                    }),
                                ),
                                a().createElement(zt, { className: yn }),
                                a().createElement(Wt, { dogTagIndex: o, className: Sn }),
                                a().createElement(Xe, { currentDogTagIndex: o, onCardClick: d, className: kn }),
                            ),
                            r && a().createElement(bn, null),
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        a().createElement(M, null, a().createElement(ce, null, a().createElement(On, null))),
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], r = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
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
        (__webpack_require__.j = 958),
        (() => {
            var e = { 958: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [994], () => __webpack_require__(5415));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
