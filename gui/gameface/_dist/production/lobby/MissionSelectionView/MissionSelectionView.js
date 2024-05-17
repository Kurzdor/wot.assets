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
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
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
                        displayStatusIs: () => b,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => p,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => C,
                        isFocused: () => B,
                        pxToRem: () => h,
                        remToPx: () => D,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
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
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function p() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(a.W).reduce(
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
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const n = ['args'],
                    a = (e, u) => {
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
                    r = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
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
                t.d(u, { Sw: () => r.Z, B0: () => o, ry: () => D });
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
                var r = t(1358),
                    i = t(8613);
                let o;
                var s;
                ((s = o || (o = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    _ = t(3138);
                const A = ['args'];
                function F(e, u, t, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, a);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                            F(r, n, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            F(r, n, a, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
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
                                })(u, A);
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
                    B = () => g(o.CLOSE),
                    f = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var C = t(7572);
                const p = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => g(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                E = s.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + i.x,
                                    y: _.O.view.pxToRem(c) + i.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(E),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: h(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => f(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, B);
                        },
                        handleViewEvent: g,
                        onBindingsReady: D,
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
                        ClickOutsideManager: p,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
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
            6415: (e, u, t) => {
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
                    A = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, A);
                        const a = (0, n.useContext)(_),
                            i = a.extraLarge,
                            o = a.large,
                            s = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            d = a.extraLargeWidth,
                            E = a.largeWidth,
                            m = a.mediumWidth,
                            F = a.smallWidth,
                            h = a.extraSmallWidth,
                            D = a.extraLargeHeight,
                            g = a.largeHeight,
                            B = a.mediumHeight,
                            f = a.smallHeight,
                            C = a.extraSmallHeight,
                            p = { extraLarge: D, large: g, medium: B, small: f, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && o) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && d) return r(u, t, p);
                            if (t.largeWidth && E) return r(u, t, p);
                            if (t.mediumWidth && m) return r(u, t, p);
                            if (t.smallWidth && F) return r(u, t, p);
                            if (t.extraSmallWidth && h) return r(u, t, p);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && D) return u;
                                if (t.largeHeight && g) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && f) return u;
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
                    (0, n.memo)(F);
                const h = ({ children: e }) => {
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
                    ((e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
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
                    g = t.n(D),
                    B = t(926),
                    f = t.n(B);
                let C, p, v;
                !(function (e) {
                    (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(C || (C = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(p || (p = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const b = () => {
                        const e = (0, n.useContext)(_),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
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
                                        return p.ExtraLarge;
                                    case e.largeWidth:
                                        return p.Large;
                                    case e.mediumWidth:
                                        return p.Medium;
                                    case e.smallWidth:
                                        return p.Small;
                                    case e.extraSmallWidth:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
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
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    w = ['children', 'className'];
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
                const T = {
                        [p.ExtraSmall]: '',
                        [p.Small]: f().SMALL_WIDTH,
                        [p.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [p.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [p.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [v.ExtraSmall]: '',
                        [v.Small]: f().SMALL_HEIGHT,
                        [v.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [v.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    S = {
                        [C.ExtraSmall]: '',
                        [C.Small]: f().SMALL,
                        [C.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [C.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [C.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    L = (e) => {
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
                            })(e, w);
                        const r = b(),
                            i = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return a().createElement('div', y({ className: g()(t, T[i], k[o], S[s]) }, n), u);
                    },
                    O = ['children'],
                    x = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, O);
                        return a().createElement(h, null, a().createElement(L, t, u));
                    };
                var N = t(493),
                    M = t.n(N);
                function I(e) {
                    engine.call('PlaySound', e);
                }
                const H = {
                        playHighlight() {
                            I('highlight');
                        },
                        playClick() {
                            I('play');
                        },
                        playYes() {
                            I('yes1');
                        },
                    },
                    P = {
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
                    W = [
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
                function U() {
                    return (
                        (U =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        U.apply(this, arguments)
                    );
                }
                class j extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && I(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && I(this.props.soundClick);
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
                                })(e, W)),
                            m = g()(P.base, P[`base__${i}`], P[`base__${r}`], null == o ? void 0 : o.base),
                            _ = g()(P.icon, P[`icon__${i}`], P[`icon__${r}`], null == o ? void 0 : o.icon),
                            A = g()(P.glow, null == o ? void 0 : o.glow),
                            F = g()(P.caption, P[`caption__${i}`], null == o ? void 0 : o.caption),
                            h = g()(P.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            U(
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
                            a().createElement('div', { className: _ }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: F }, u),
                            n && a().createElement('div', { className: h }, n),
                        );
                    }
                }
                j.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var K = t(5521),
                    V = t(9916);
                const G = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function $(e = K.n.NONE, u = G, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== K.n.NONE)
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
                var z = t(3403),
                    q = t(7030);
                let Y;
                !(function (e) {
                    (e[(e.NEWBIES = 0)] = 'NEWBIES'), (e[(e.EVENT = 1)] = 'EVENT');
                })(Y || (Y = {}));
                const Z = (0, n.memo)(
                    ({ className: e, backgroundPath: u, onLoaded: t, showVignette: n = !0, showBlur: r = !1 }) =>
                        a().createElement(
                            'div',
                            {
                                className: g()('Background_base_94', r && 'Background_base__blur_69', e),
                                style: { backgroundImage: `url(${u})` },
                            },
                            n && a().createElement('div', { className: 'Background_vignette_79' }),
                            t &&
                                a().createElement('img', {
                                    className: 'Background_preloader_7d',
                                    onLoad: () => t(),
                                    onError: () => t(),
                                    src: u,
                                    alt: u,
                                }),
                        ),
                );
                function X() {}
                function Q() {
                    return !1;
                }
                console.log;
                var J = t(9174);
                function ee(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const ue = (e) => (0 === e ? window : window.subViews.get(e));
                function te(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var ne = t(3946);
                const ae = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: s }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, t, n) => {
                                        var a;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ue,
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
                                                                                    return ee(e, u);
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
                                                                                          ? ee(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = t()).done;

                                                        )
                                                            r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            o =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : o.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.primitives(['selectedTab', 'isTabsVisible']),
                                                        missions: e.array('missions'),
                                                        selectedMission: e.object('selectedMission'),
                                                        tasks: e.array('tasks'),
                                                    },
                                                    t = (0, ne.Om)(
                                                        () => te(u.tasks.get(), (e) => Object.assign({}, e)),
                                                        { equals: Q },
                                                    ),
                                                    n = (0, ne.Om)(() => {
                                                        const e = u.selectedMission.get(),
                                                            n = t(),
                                                            a = Boolean(n.find(({ isCompletedFirstTime: e }) => e));
                                                        return e.isCompleted && a;
                                                    });
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getIsSelectedMissionCompletedFirstTime: n,
                                                        getTasks: t,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : s(u),
                                                            a = J.LO.box(n, { equals: Q });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, J.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : s(u),
                                                            a = J.LO.box(n, { equals: Q });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, J.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = s(t);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (e, u) => ((e[u] = J.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, J.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                a[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = u,
                                                                r = Object.entries(a),
                                                                i = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = J.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, J.aD)((e) => {
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
                                            E = { mode: e, model: d, externalModel: o, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && n ? n.controls(E) : u(E),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    E = (0, n.useState)(e),
                                    m = E[0],
                                    _ = E[1],
                                    A = (0, n.useState)(() => c(e, r, s)),
                                    F = A[0],
                                    h = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? h(c(m, r, s)) : (d.current = !0);
                                    }, [s, m, r]),
                                    (0, n.useEffect)(() => {
                                        _(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    a().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        exit: e.createCallbackNoArgs('onQuit'),
                        loaded: e.createCallbackNoArgs('onLoaded'),
                        missionSelect: e.createCallback((e) => ({ id: e }), 'onMissionSelect'),
                        changeTab: e.createCallback((e) => ({ id: e }), 'onChangeTab'),
                        selectedMissionTaskUnlocked: e.createCallback(
                            (e) => ({ taskId: e }),
                            'onSelectedMissionTaskUnlocked',
                        ),
                        openAbout: e.createCallbackNoArgs('onAboutClick'),
                    })),
                    re = ae[0],
                    ie = ae[1],
                    oe = (0, n.memo)(function ({ onClick: e }) {
                        return a().createElement(
                            'div',
                            {
                                className: 'AboutButton_base_60',
                                onClick: () => {
                                    H.playClick(), e();
                                },
                            },
                            a().createElement('div', { className: 'AboutButton_icon_d1' }),
                            a().createElement(
                                'div',
                                { className: 'AboutButton_text_77' },
                                R.strings.sm_lobby.missionSelection.about(),
                            ),
                        );
                    }),
                    se = { x: 0, y: 0, opacity: 0, transform: 'scale(1) rotate(0deg)' },
                    le = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' };
                let ce;
                !(function (e) {
                    (e.Linear = 'linear'),
                        (e.EaseIn = 'easeIn'),
                        (e.EaseOut = 'easeOut'),
                        (e.EaseInOut = 'easeInOut'),
                        (e.EaseOutBack = 'easeOutBack'),
                        (e.EaseOutQuint = 'easeOutQuint'),
                        (e.EaseOutExpo = 'easeOutExpo');
                })(ce || (ce = {}));
                const de = {
                        [ce.Linear]: (e) => e,
                        [ce.EaseIn]: (e) => e * e * e,
                        [ce.EaseOut]: (e) => --e * e * e + 1,
                        [ce.EaseInOut]: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        [ce.EaseOutBack]: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                        [ce.EaseOutQuint]: (e) => 1 - Math.pow(1 - e, 5),
                        [ce.EaseOutExpo]: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
                    },
                    Ee = (0, n.memo)(function ({
                        children: e,
                        from: u = se,
                        to: t = le,
                        config: r,
                        isCanceled: i = !1,
                        isDisabled: o = !1,
                        duration: s = 250,
                        delay: l = 0,
                        transformOrigin: c = '50% 50%',
                        easingType: d = ce.EaseInOut,
                        onRest: E,
                        onStart: m,
                        trigger: _,
                        className: A,
                        isReverse: F = !1,
                        playSoundOnStart: h,
                        playSoundOnFinish: D,
                    }) {
                        const g = de[d],
                            B = (0, q.useSpring)(() => u),
                            f = B[0],
                            C = B[1],
                            p = i && !o ? t : Object.assign({}, f, { transformOrigin: c });
                        return (
                            (0, n.useEffect)(() => {
                                C.start({
                                    from: u,
                                    to: t,
                                    delay: l,
                                    immediate: i,
                                    config: r ? Object.assign({}, r) : { duration: s, easing: g },
                                    cancel: i || o,
                                    reverse: F,
                                    onRest: (e) => {
                                        !0 === e.finished && (D && D(), E && E());
                                    },
                                    onStart: () => {
                                        h && h(), m && m();
                                    },
                                });
                            }, [C, l, s, g, u, i, E, t, _, o, F, D, h, m, r]),
                            a().createElement(q.animated.div, { className: A, style: p }, e)
                        );
                    }),
                    me = { x: 0, y: -10, opacity: 0, transform: 'scale(1) rotate(0deg)' },
                    _e = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' },
                    Ae = { x: 0, y: 10, opacity: 0, transform: 'scale(1) rotate(0deg)' };
                let Fe;
                !(function (e) {
                    (e.Linear = 'linear'), (e.EaseIn = 'easeIn'), (e.EaseOut = 'easeOut'), (e.EaseInOut = 'easeInOut');
                })(Fe || (Fe = {}));
                const he = {
                        [Fe.Linear]: (e) => e,
                        [Fe.EaseIn]: (e) => e * e * e,
                        [Fe.EaseOut]: (e) => --e * e * e + 1,
                        [Fe.EaseInOut]: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    },
                    De = (0, n.memo)(function ({
                        children: e,
                        from: u = me,
                        enter: t = _e,
                        leave: r = Ae,
                        isCanceled: i = !1,
                        isTransition: o = !0,
                        duration: s = 500,
                        delay: l = 0,
                        transformOrigin: c = '50% 50%',
                        easingType: d = Fe.EaseInOut,
                        enterOnStart: E,
                        enterOnRest: m,
                        leaveOnStart: _,
                        leaveOnRest: A,
                        enterOnStartSound: F,
                        enterOnRestSound: h,
                        leaveOnStartSound: D,
                        leaveOnRestSound: g,
                        className: B,
                    }) {
                        const f = he[d],
                            C = (0, q.useSpringRef)(),
                            p = (0, q.useTransition)(o, {
                                ref: C,
                                from: i ? t : u,
                                enter: Object.assign({}, t, {
                                    onStart: () => {
                                        o && (F && F(), E && E());
                                    },
                                    onRest: () => {
                                        o && (h && h(), m && m());
                                    },
                                }),
                                leave: Object.assign({}, r, {
                                    onStart: () => {
                                        o || (D && D(), _ && _());
                                    },
                                    onRest: () => {
                                        o || (g && g(), A && A());
                                    },
                                }),
                                delay: l,
                                config: { duration: s, easing: f },
                                immediate: i,
                                exitBeforeEnter: !0,
                                cancel: i,
                            });
                        return (
                            (0, n.useEffect)(() => {
                                C.start();
                            }, [C, o]),
                            p(
                                (u, t) =>
                                    t &&
                                    a().createElement(
                                        q.animated.div,
                                        { className: B, style: Object.assign({}, u, { transformOrigin: c }) },
                                        e,
                                    ),
                            )
                        );
                    }),
                    ge = [
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
                function Be(e) {
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
                const fe = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: V.B0.TOOLTIP,
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
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            h = e.targetId,
                            D = void 0 === h ? 0 : h,
                            g = e.onShow,
                            B = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, ge);
                        const C = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            p = (0, n.useMemo)(
                                () =>
                                    D ||
                                    ((e = 1) => {
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
                                    })().resId,
                                [D],
                            ),
                            v = (0, n.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (fe(t, _, { isMouseEvent: !0, on: !0, arguments: Be(a) }, p),
                                    g && g(),
                                    (C.current.isVisible = !0));
                            }, [t, _, a, p, g]),
                            b = (0, n.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        fe(t, _, { on: !1 }, p),
                                        C.current.isVisible && B && B(),
                                        (C.current.isVisible = !1);
                                }
                            }, [t, _, p, B]),
                            w = (0, n.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(C.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = C.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            ),
                            F
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((C.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          r && r(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  b(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === E && b(), null == s || s(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === E && b(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          f,
                                      ),
                                  )
                                : u
                        );
                        var y;
                    },
                    pe = ['children'];
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
                const be = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, pe);
                        return a().createElement(
                            Ce,
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
                    we = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                const Te = R.views.common.tooltip_window.simple_tooltip_content,
                    ke = (e) => {
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
                            })(e, we);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, i, s]);
                        return a().createElement(
                            Ce,
                            ye(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? Te.SimpleTooltipHtmlContent('resId') : Te.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                const Le = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = a().createElement('div', { className: t }, e);
                    if (u.header || u.body) return a().createElement(ke, u, n);
                    const r = u.contentId;
                    return r ? a().createElement(Ce, Se({}, u, { contentId: r }), n) : a().createElement(be, u, n);
                };
                var Oe = t(8045);
                let xe;
                function Ne(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                t(1281),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(xe || (xe = {}));
                let Me, Ie, Re;
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
                    })(Me || (Me = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Ie || (Ie = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Re || (Re = {}));
                const He = { [Re.NBSP]: Me.NoBreakSymbol, [Re.ZWNBSP]: Me.NoBreakSymbol, [Re.NEW_LINE]: Me.LineBreak },
                    Pe = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    We = {
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
                    Ue = 'renderers_word_f3',
                    je = (e) => ({ color: `#${e}` }),
                    Ke = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? We[n]
                                ? a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: g()(Ue, We[n]) },
                                      e,
                                  )
                                : a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: Ue, style: je(n) },
                                      e,
                                  )
                            : a().createElement('span', { key: t, 'data-block-type': u.blockType, className: Ue }, e);
                    },
                    Ve = {
                        [Me.Word]: Ke,
                        [Me.NoBreakSymbol]: Ke,
                        [Me.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: t }, e)),
                            ),
                        [Me.LineBreak]: ({ key: e }) =>
                            a().createElement('span', {
                                key: e,
                                'data-block-type': Me.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [Me.NewLine]: ({ elementList: e, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': Me.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [Me.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            a().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': Me.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    Ge = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const i = `${t}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        u = e.blockType,
                                        t = Ge(e, Ve[u], i);
                                    n.push(...t);
                                } else n.push(u({ elementList: [a], textBlock: e, key: i }));
                            }),
                            n
                        );
                    },
                    $e = (e, u, t, n) => {
                        let a = u.exec(e),
                            r = 0;
                        for (; a; ) r !== a.index && t(e.slice(r, a.index)), n(a), (r = u.lastIndex), (a = u.exec(e));
                        r !== e.length && t(e.slice(r));
                    },
                    ze = Pe
                        ? (e) => {
                              const u = [];
                              return (
                                  $e(
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
                                                      $e(
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
                              const n = [];
                              let a = 0;
                              for (; t; ) n.push(e.slice(a, u.lastIndex)), (a = u.lastIndex), (t = u.exec(e));
                              return a !== e.length && n.push(e.slice(a)), n;
                          },
                    qe = (e, u = '') => {
                        const t = [];
                        return (
                            $e(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    t.push({ blockType: Me.Word, colorTag: u, childList: ze(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        a = He[n.charAt(0)];
                                    a === Me.LineBreak
                                        ? t.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: Me.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: Me.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(n),
                                          )
                                        : t.push({ blockType: a, colorTag: u, childList: [n] });
                                },
                            ),
                            t
                        );
                    },
                    Ye = (e, u, t = '') => {
                        const n = [];
                        return (
                            $e(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...qe(e, t));
                                },
                                (e) => {
                                    const a = e[1],
                                        r = void 0 === u[a] ? e[0] : u[a];
                                    'string' == typeof r || 'number' == typeof r
                                        ? n.push(...qe(String(r), t))
                                        : n.push({ blockType: Me.Binding, colorTag: t, childList: [r] });
                                },
                            ),
                            n
                        );
                    },
                    Ze = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === Me.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: Me.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    Xe = (e, u = {}) => {
                        if (!e) return [];
                        const t = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Me.NoBreakSymbol
                                        ? ((t = !0), u.push(...Ze(u.pop(), e)))
                                        : (t ? u.push(...Ze(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u) => {
                                const t = [];
                                return (
                                    $e(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            t.push(...Ye(e, u));
                                        },
                                        (e) => {
                                            t.push(...Ye(e[2], u, e[1]));
                                        },
                                    ),
                                    t
                                );
                            })(((n = e), n.replace(/&nbsp;/g, ' ')).replace(/&zwnbsp;/g, '\ufeff'), u),
                        );
                        var n;
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                n = e.blockType,
                                                a = Ve[n],
                                                r = Ge(e, a, u);
                                            return (
                                                n === Me.NoBreakWrapper
                                                    ? t.push(a({ elementList: r, textBlock: e, key: `${u}` }))
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
                    Qe = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    Je = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    eu = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = Je(e, u),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            i = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / r);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const o = Math.max(t + i, 0);
                        return a < o ? [!1, 0] : [!0, o];
                    },
                    uu = (e, u, t, n, r, i) => {
                        let o = -1,
                            s = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Me.LineBreak || c === Me.NewLine || c === Me.Binding) continue;
                            const d = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = eu(t, n, r),
                                    c = e[0],
                                    E = e[1];
                                if (!c) {
                                    E > 0 && (r -= E);
                                    continue;
                                }
                                const m = d.slice(0, d.length - E) + i,
                                    _ = u[l];
                                (s = a().cloneElement(_, _.props, m)), (o = l);
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    E = c.props.children,
                                    m = uu(e, E, e.length - 1, n, r, i),
                                    _ = m[0],
                                    A = m[1];
                                if (!(_ < 0)) {
                                    const e = E.slice(0, _);
                                    (s = a().cloneElement(c, c.props, e, A)), (o = l);
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [o, s];
                    },
                    tu = a().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: r,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: o = !1,
                            targetId: s,
                            justifyContent: l = Ie.FlexStart,
                            alignContent: c = Ie.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const E = (0, n.useRef)(null),
                                m = (0, n.useRef)({ height: 0, width: 0 }),
                                _ = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = _[0],
                                F = _[1],
                                h = (0, n.useMemo)(() => Xe(e, r), [r, e]),
                                D = (0, n.useMemo)(() => {
                                    if (
                                        i &&
                                        A.isTruncated &&
                                        (!r || !Object.values(r).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: { text: e, stringifyKwargs: r ? JSON.stringify(r) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: s,
                                        };
                                }, [r, i, s, e, A.isTruncated]),
                                B = (0, n.useCallback)(
                                    (e) => {
                                        (m.current.width = e.contentRect.width),
                                            (m.current.height = e.contentRect.height);
                                        const u = ((e, u, t, n = '...') => {
                                                const a = [...u],
                                                    r = e.current;
                                                if (!r) return [a, !1];
                                                const i = t.height,
                                                    o = t.width,
                                                    s = r.lastElementChild;
                                                if (!Qe(s, i) && Je(s, o) <= 0) return [a, !1];
                                                const l = r.children,
                                                    c = ((e, u) => {
                                                        let t = 0,
                                                            n = e.length - 1;
                                                        for (; n - t >= 0; ) {
                                                            const a = t + Math.ceil(0.5 * (n - t));
                                                            Qe(e[a], u) ? (n = a - 1) : (t = a + 1);
                                                        }
                                                        return t - 1;
                                                    })(l, i);
                                                if (c < 0) return [a, !1];
                                                const d = uu(l, a, c, o, n.length, n),
                                                    E = d[0],
                                                    m = d[1];
                                                return m && (a.splice(E, 1, m), a.splice(E + 1)), [a, !0];
                                            })(E, h, m.current, d),
                                            n = u[0],
                                            a = u[1];
                                        F({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), t && t(a);
                                    },
                                    [t, d, h],
                                ),
                                f = (0, n.useMemo)(() => ({ justifyContent: l, alignContent: c }), [c, l]);
                            return (
                                ((e, u, t = !0) => {
                                    const a = (0, n.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new Oe.Z((e) => a(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [a, t, e]);
                                })(E, B, o),
                                a().createElement(
                                    'div',
                                    {
                                        className: g()(
                                            'ExtendedText_base_71',
                                            u,
                                            'ExtendedText_base__zeroPadding_25',
                                            o && 'ExtendedText_base__isTruncationAvailable_5b',
                                        ),
                                        style: f,
                                    },
                                    a().createElement('div', { className: 'ExtendedText_unTruncated_b8', ref: E }, h),
                                    a().createElement(
                                        Le,
                                        { tooltipArgs: D },
                                        a().createElement(
                                            'div',
                                            {
                                                className: g()(
                                                    'ExtendedText_truncated_97',
                                                    !A.isTruncateFinished && o && 'ExtendedText_truncated__hide_31',
                                                ),
                                                style: f,
                                            },
                                            A.isTruncateFinished && o ? A.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                let nu;
                !(function (e) {
                    (e.COUNTDOWN = 'countdown'),
                        (e.TITLE = 'title'),
                        (e.SUB_TITLE = 'subTitle'),
                        (e.TASK_SHOWING = 'taskShowing'),
                        (e.TASK_OLD_STATE = 'taskOldState'),
                        (e.TASK_SWITCH_GLOW = 'taskSwitchGlow'),
                        (e.TASK_NEW_STATE = 'taskNewState'),
                        (e.MISSION_STATE = 'missionState'),
                        (e.TASK_UNLOCK_GLOW = 'taskUnlockGlow'),
                        (e.TASK_LOCKED = 'taskLocked'),
                        (e.TASK_UNLOCKED = 'taskUnlocked');
                })(nu || (nu = {}));
                const au = { y: -5, opacity: 0 },
                    ru = { y: 0, opacity: 1 },
                    iu = 350,
                    ou = {
                        [nu.COUNTDOWN]: { from: au, to: ru, delay: 150, duration: iu },
                        [nu.TITLE]: { from: au, to: ru, delay: 200, duration: iu },
                        [nu.SUB_TITLE]: { from: au, to: ru, delay: 350, duration: iu },
                        [nu.TASK_SHOWING]: {
                            from: { x: 80, filter: 'blur(1px) brightness(5)', opacity: 0 },
                            to: { x: 0, filter: 'blur(0px) brightness(1)', opacity: 1 },
                            delay: 650,
                            easingType: ce.EaseOut,
                            duration: 700,
                        },
                        [nu.TASK_OLD_STATE]: {
                            from: { opacity: 1, transform: 'translate(-50%, -50%) scale(1, 1)' },
                            to: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.5, 0.5)' },
                            delay: 1350,
                            duration: 700,
                        },
                        [nu.TASK_NEW_STATE]: {
                            from: { opacity: 0, transform: 'translate(-50%, -50%) scale(2, 2)' },
                            to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1, 1)' },
                            delay: 1500,
                            duration: 700,
                        },
                        [nu.TASK_SWITCH_GLOW]: {
                            from: { opacity: 0, transform: 'translate(-50%, -50%) scale(10, 1.5)' },
                            to: [
                                { opacity: 0.6, transform: 'translate(-50%, -50%) scale(5, 1.2)' },
                                { opacity: 0, transform: 'translate(-50%, -50%) scale(1, 1)' },
                            ],
                            delay: 1350,
                            easingType: ce.Linear,
                            duration: 525,
                        },
                        [nu.MISSION_STATE]: { from: { opacity: 1 }, to: { opacity: 0 }, delay: 1350, duration: iu },
                        [nu.TASK_LOCKED]: {
                            from: { y: 0, opacity: 1 },
                            to: { y: 10, opacity: 0 },
                            delay: 1350,
                            duration: 1050,
                        },
                        [nu.TASK_UNLOCKED]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1700,
                            duration: 1050,
                        },
                        [nu.TASK_UNLOCK_GLOW]: {
                            from: { x: 80, opacity: 0, transform: 'translate(-50%, -50%) scale(5, 1)' },
                            to: [
                                { x: 80, opacity: 0.8, transform: 'translate(-50%, -50%) scale(5, 1)' },
                                { x: 80, opacity: 0, transform: 'translate(-50%, -50%) scale(5, 1)' },
                            ],
                            delay: 1350,
                            easingType: ce.Linear,
                            duration: 525,
                        },
                    };
                var su = t(8613);
                function lu(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / 86400);
                    u -= 86400 * t;
                    const n = Math.trunc(u / 3600);
                    u -= 3600 * n;
                    const a = Math.trunc(u / 60);
                    return (u -= 60 * a), { days: t, hours: n, minutes: a, seconds: u };
                }
                Date.now(), su.Ew.getRegionalDateTime, su.Ew.getFormattedDateTime;
                const cu = () => {};
                let du;
                V.Sw.instance,
                    (function (e) {
                        (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                    })(du || (du = {})),
                    V.Sw.instance;
                const Eu = (e = 0, u, t = 0, a = cu) => {
                        const r = (0, n.useState)(e),
                            i = r[0],
                            o = r[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    o(e);
                                    const n = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== t && u <= t ? (o(t), a && a(), clearInterval(r)) : o(u);
                                            },
                                            1e3 * (u || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, u, t, a]),
                            i
                        );
                    },
                    mu = (e, u, t) => {
                        const n = e.days,
                            a = e.hours,
                            r = e.minutes;
                        return n >= 1
                            ? 0 === a
                                ? Ne(R.strings.sm_lobby.countdown.days(), { days: n })
                                : Ne(R.strings.sm_lobby.countdown.daysHours(), { days: n, hours: a })
                            : u && a < 1 && r < 5
                              ? Ne(R.strings.sm_lobby.countdown.endsSoon(), { minutes: 5 })
                              : 0 === a
                                ? r < 1
                                    ? R.strings.sm_lobby.countdown.lessThanMinute()
                                    : Ne(
                                          t
                                              ? R.strings.sm_lobby.countdown.minutesShort()
                                              : R.strings.sm_lobby.countdown.minutes(),
                                          { minutes: r },
                                      )
                                : 0 === r
                                  ? Ne(R.strings.sm_lobby.countdown.hours(), { hours: a })
                                  : Ne(
                                        t
                                            ? R.strings.sm_lobby.countdown.hoursMinutesShort()
                                            : R.strings.sm_lobby.countdown.hoursMinutes(),
                                        { hours: a, minutes: r },
                                    );
                    },
                    _u = (e, u = !1, t = !1) => {
                        const n = Eu(e, 1);
                        return { timeString: mu(lu(n), u, t), secondsLeft: n, isEndingSoon: n < 300 };
                    },
                    Au = (0, z.Pi)(() => {
                        const e = ie().model.selectedMission.get(),
                            u = _u(e.secondsCountdown, !0, !0),
                            t = u.timeString,
                            n = u.isEndingSoon;
                        return a().createElement(
                            'div',
                            { className: 'Countdown_base_c1' },
                            a().createElement('div', {
                                className: g()('Countdown_bg_d6', n && 'Countdown_bg__endingSoon_99'),
                            }),
                            a().createElement(
                                'div',
                                { className: 'Countdown_timer_8c' },
                                a().createElement('div', { className: 'Countdown_icon_7e' }),
                                a().createElement('div', { className: 'Countdown_text_f0' }, t),
                            ),
                        );
                    });
                let Fu;
                !(function (e) {
                    (e[(e.UNCOMPLETED = 0)] = 'UNCOMPLETED'),
                        (e[(e.COMPLETED = 1)] = 'COMPLETED'),
                        (e[(e.LOCKED = 2)] = 'LOCKED');
                })(Fu || (Fu = {}));
                const hu = 'TaskDescription_base_53',
                    Du = 'TaskDescription_text_48';
                function gu() {
                    return (
                        (gu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        gu.apply(this, arguments)
                    );
                }
                const Bu = R.strings.sm_lobby.missionSelection,
                    fu = (0, n.memo)(function ({
                        taskId: e,
                        missionId: u,
                        taskState: t,
                        isUnlockedFirstTime: n,
                        timeString: r,
                        isShouldPlayAnimation: i,
                        onAnimationFinished: o,
                        isLockRunOut: s,
                    }) {
                        const l = Bu.taskDescription.$num(u),
                            c = l ? l.$num(e) : '',
                            d = t === Fu.LOCKED && !s,
                            E = {
                                timer: a().createElement(
                                    'div',
                                    { className: 'TaskDescription_timer_bd' },
                                    a().createElement('div', { className: 'TaskDescription_clock_9f' }),
                                    a().createElement('div', { className: 'TaskDescription_time_82' }, r),
                                ),
                            };
                        return (n || s) && i
                            ? a().createElement(
                                  a().Fragment,
                                  null,
                                  a().createElement(
                                      Ee,
                                      gu({ className: hu }, ou[nu.TASK_LOCKED]),
                                      a().createElement(tu, {
                                          classMix: Du,
                                          text: Bu.taskDescription.locked(),
                                          binding: E,
                                      }),
                                  ),
                                  a().createElement(
                                      Ee,
                                      gu({ className: hu }, ou[nu.TASK_UNLOCKED], { onRest: o }),
                                      a().createElement(tu, { classMix: Du, text: c, binding: E }),
                                  ),
                              )
                            : a().createElement(
                                  'div',
                                  { className: hu },
                                  a().createElement(tu, {
                                      classMix: g()(Du, !d && 'TaskDescription_text__notLocked_89'),
                                      text: d ? Bu.taskDescription.locked() : c,
                                      isTruncationAvailable: !0,
                                      binding: E,
                                  }),
                              );
                    }),
                    Cu = 'TaskIcon_base_50',
                    pu = 'TaskIcon_glow_30',
                    vu = 'TaskIcon_base__completed_f0',
                    bu = 'TaskIcon_base__locked_0e',
                    wu = 'TaskIcon_base__hover_88',
                    yu = 'TaskIcon_iconBody_aa',
                    Tu = 'TaskIcon_iconGlow_25';
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Su = (0, n.memo)(function ({
                    taskState: e,
                    isCompletedFirstTime: u,
                    isUnlockedFirstTime: t,
                    isHover: n,
                    isShouldPlayAnimation: r,
                    onAnimationFinished: i,
                    onUnlockAnimationStart: o,
                    onCompletionAnimationStart: s,
                    isLockRunOut: l,
                }) {
                    return u && r
                        ? a().createElement(
                              a().Fragment,
                              null,
                              a().createElement(
                                  Ee,
                                  ku({ className: Cu }, ou[nu.TASK_OLD_STATE], { onStart: s }),
                                  a().createElement(
                                      'div',
                                      { className: Cu },
                                      a().createElement('div', { className: pu }),
                                      a().createElement('div', { className: Tu }),
                                      a().createElement('div', { className: yu }),
                                  ),
                              ),
                              a().createElement(
                                  Ee,
                                  ku({ className: Cu }, ou[nu.TASK_NEW_STATE], { onRest: i }),
                                  a().createElement(
                                      'div',
                                      { className: g()(Cu, vu, n && wu) },
                                      a().createElement('div', { className: pu }),
                                      a().createElement('div', { className: Tu }),
                                      a().createElement('div', { className: yu }),
                                  ),
                              ),
                              a().createElement(
                                  Ee,
                                  ku({ className: Cu }, ou[nu.TASK_SWITCH_GLOW]),
                                  a().createElement('div', { className: g()(Tu, 'TaskIcon_iconGlow__switch_62') }),
                              ),
                          )
                        : (t || l) && r
                          ? a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    Ee,
                                    ku({ className: Cu }, ou[nu.TASK_LOCKED], { onStart: o }),
                                    a().createElement(
                                        'div',
                                        { className: g()(Cu, bu) },
                                        a().createElement('div', { className: pu }),
                                        a().createElement('div', { className: Tu }),
                                        a().createElement('div', { className: yu }),
                                    ),
                                ),
                                a().createElement(
                                    Ee,
                                    ku({ className: Cu }, ou[nu.TASK_UNLOCKED], { onRest: i }),
                                    a().createElement(
                                        'div',
                                        { className: g()(Cu, n && wu) },
                                        a().createElement('div', { className: pu }),
                                        a().createElement('div', { className: Tu }),
                                        a().createElement('div', { className: yu }),
                                    ),
                                ),
                                a().createElement(
                                    Ee,
                                    ku({ className: Cu }, ou[nu.TASK_UNLOCK_GLOW]),
                                    a().createElement('div', { className: g()(Tu, 'TaskIcon_iconGlow__unlock_68') }),
                                ),
                            )
                          : a().createElement(
                                'div',
                                { className: g()(Cu, e === Fu.COMPLETED && vu, e === Fu.LOCKED && !l && bu, n && wu) },
                                a().createElement('div', { className: pu }),
                                a().createElement('div', { className: g()(Tu) }),
                                a().createElement('div', { className: g()(yu) }),
                            );
                });
                function Lu() {
                    return (
                        (Lu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Lu.apply(this, arguments)
                    );
                }
                const Ou = (0, n.memo)(function ({
                    index: e,
                    missionId: u,
                    taskId: t,
                    taskState: r,
                    isCompletedFirstTime: i,
                    secondsBeforeUnlock: o,
                    isUnlockedFirstTime: s,
                    onTaskUnlocked: l,
                    animationCounter: c,
                    onAppearanceAnimationStart: d = X,
                    onAppearanceAnimationFinished: E = X,
                    onUnlockAnimationStart: m = X,
                    onCompletionAnimationStart: _ = X,
                    onAnimationFinished: A = X,
                }) {
                    const F = (0, n.useRef)(o),
                        h = (0, n.useState)(i || s),
                        D = h[0],
                        B = h[1],
                        f = (0, n.useState)(!1),
                        C = f[0],
                        p = f[1],
                        v = (0, n.useState)(!1),
                        b = v[0],
                        w = v[1],
                        y = _u(o),
                        T = y.timeString,
                        k = y.secondsLeft;
                    (0, n.useEffect)(() => {
                        0 !== F.current && 0 === k && (B(!0), p(!0), l(t));
                    }, [k, l, t, o]),
                        (0, n.useEffect)(() => {
                            B(!0);
                        }, [c]);
                    const S = (0, n.useCallback)(() => {
                        B(!1), A();
                    }, [A]);
                    return a().createElement(
                        Ee,
                        Lu(
                            { className: 'TaskListItem_base_d6', key: `${u}_${e}` },
                            Object.assign({}, ou[nu.TASK_SHOWING], { delay: 650 + 150 * e }),
                            { onStart: d, onRest: E },
                        ),
                        a().createElement(
                            Ce,
                            { contentId: R.views.story_mode.lobby.TaskTooltip('resId'), args: { taskId: t } },
                            a().createElement(
                                'div',
                                {
                                    className: 'TaskListItem_frame_cb',
                                    onMouseEnter: () => {
                                        H.playHighlight(), w(!0);
                                    },
                                    onMouseLeave: () => {
                                        w(!1);
                                    },
                                },
                                a().createElement('div', {
                                    className: g()('TaskListItem_frameImg_d3', b && 'TaskListItem_frameImg__hover_24'),
                                }),
                                a().createElement(Su, {
                                    taskState: r,
                                    isCompletedFirstTime: i,
                                    isUnlockedFirstTime: s,
                                    isLockRunOut: C,
                                    isHover: b,
                                    isShouldPlayAnimation: D,
                                    onAnimationFinished: S,
                                    onCompletionAnimationStart: _,
                                    onUnlockAnimationStart: m,
                                }),
                                a().createElement(fu, {
                                    taskId: t,
                                    missionId: u,
                                    taskState: r,
                                    isUnlockedFirstTime: s,
                                    isLockRunOut: C,
                                    timeString: T,
                                    isShouldPlayAnimation: D,
                                    onAnimationFinished: S,
                                }),
                            ),
                        ),
                    );
                });
                function xu() {
                    return (
                        (xu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        xu.apply(this, arguments)
                    );
                }
                const Nu = (0, z.Pi)(({ isChanging: e }) => {
                    const u = ie(),
                        t = u.controls,
                        r = u.model,
                        i = (0, n.useRef)(!1),
                        o = (0, n.useRef)(!1),
                        s = r.selectedMission.get(),
                        l = r.computes.getTasks(),
                        c = (0, n.useCallback)(() => {
                            o.current || (I('dq_screen_quest_reroll'), (o.current = !0));
                        }, []),
                        d = (0, n.useCallback)(() => {
                            o.current || (I('dq_screen_premium_missions_complete'), (o.current = !0));
                        }, []),
                        E = (0, n.useCallback)(() => {
                            i.current || (I('dq_widget_slide_in'), (i.current = !0));
                        }, []),
                        m = (0, n.useCallback)(() => {
                            i.current = !1;
                        }, []),
                        _ = (0, n.useCallback)(() => {
                            o.current = !1;
                        }, []);
                    return e && i.current
                        ? null
                        : a().createElement(
                              'div',
                              { className: 'TaskList_base_fb' },
                              l.map((e, u) =>
                                  a().createElement(
                                      Ou,
                                      xu(
                                          {
                                              key: `taskListItem_${e.taskId}_${u}`,
                                              missionId: s.missionId,
                                              index: u,
                                              onTaskUnlocked: t.selectedMissionTaskUnlocked,
                                          },
                                          e,
                                          {
                                              onUnlockAnimationStart: c,
                                              onCompletionAnimationStart: d,
                                              onAnimationFinished: _,
                                              onAppearanceAnimationStart: E,
                                              onAppearanceAnimationFinished: m,
                                          },
                                      ),
                                  ),
                              ),
                          );
                });
                function Mu() {
                    return (
                        (Mu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Mu.apply(this, arguments)
                    );
                }
                const Iu = (0, z.Pi)(({ isChanged: e, durationTasks: u }) => {
                        const t = ie().model,
                            n = t.root.selectedTab.get() === Y.EVENT,
                            r = t.selectedMission.get(),
                            i = r.missionId,
                            o = t.computes.getTasks().length,
                            s = b().mediaSize > C.Large;
                        return a().createElement(
                            'div',
                            { className: g()('MissionInfo_base_ff', o > 1 && 'MissionInfo_base__center_dc') },
                            r.isCountdownVisible &&
                                a().createElement(
                                    Ee,
                                    Mu({ key: n ? 'countdown' : `countdown_${i}` }, ou[nu.COUNTDOWN]),
                                    a().createElement(Au, null),
                                ),
                            a().createElement(
                                Ee,
                                Mu({ key: n ? 'title' : `title_${i}` }, ou[nu.TITLE], {
                                    className: 'MissionInfo_title_af',
                                }),
                                R.strings.sm_lobby.missionSelection.missionName.$num(i),
                            ),
                            a().createElement(
                                Ee,
                                Mu({ key: n ? 'subTitle' : `subTitle_${i}` }, ou[nu.SUB_TITLE]),
                                a().createElement(tu, {
                                    classMix: 'MissionInfo_subTitle_64',
                                    text: R.strings.sm_lobby.missionSelection.missionDescription.$num(i),
                                    isTruncationAvailable: !0,
                                    isTooltipEnable: !0,
                                }),
                            ),
                            a().createElement(
                                'div',
                                { style: { height: (s ? 86 : 76) * o + 'rem' } },
                                a().createElement(
                                    De,
                                    { key: `taskList_${i}`, isTransition: e, duration: u },
                                    a().createElement(Nu, { isChanging: !e }),
                                ),
                            ),
                        );
                    }),
                    Ru = [
                        'src',
                        'className',
                        'autoplay',
                        'style',
                        'loop',
                        'isPrebufferKeyframes',
                        'keyframesNameConfig',
                        'onClick',
                    ];
                function Hu() {
                    return (
                        (Hu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Hu.apply(this, arguments)
                    );
                }
                const Pu = (0, n.forwardRef)(function (e, u) {
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
                            })(e, Ru);
                        const A = u,
                            F = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(
                                () =>
                                    ((e) => {
                                        let u,
                                            t = null;
                                        return (
                                            (t = requestAnimationFrame(() => {
                                                t = requestAnimationFrame(() => {
                                                    (t = null),
                                                        (u = (() => {
                                                            const e = F.current;
                                                            if (!A || !e || !d)
                                                                return void (
                                                                    null != e &&
                                                                    e.cohFastSeek &&
                                                                    (e.cohFastSeek = !1)
                                                                );
                                                            const u = e.cohGetKeyframeTimestamps();
                                                            u.length > 0
                                                                ? ((e.cohFastSeek = !0),
                                                                  u.map((u) => {
                                                                      null == e || e.cohPrebufferKeyframe(u);
                                                                  }))
                                                                : console.warn(
                                                                      "Can't prebuffered keyframes, keyframes was not found",
                                                                  );
                                                        })());
                                                });
                                            })),
                                            () => {
                                                'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                                            }
                                        );
                                    })(),
                                [d, A],
                            ),
                            (0, n.useEffect)(() => {
                                if (A && F.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: X },
                                        u = () => {
                                            let u = 0;
                                            const t = (function (t) {
                                                    let n = 0;
                                                    return [
                                                        function t() {
                                                            (() => {
                                                                if (F.current) {
                                                                    const t = F.current,
                                                                        n = t.currentTime,
                                                                        a = t.duration;
                                                                    if (
                                                                        (u !== n &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: n, duration: a }),
                                                                            ),
                                                                            (u = n)),
                                                                        F.current.paused || !A || !d)
                                                                    )
                                                                        return;
                                                                    const r = F.current.cohGetKeyframeTimestamps();
                                                                    r.forEach((u, t) => {
                                                                        n > r[t] - 0.02 &&
                                                                            n < r[t] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const n = Object.keys(
                                                                                    null != E ? E : {},
                                                                                )[t];
                                                                                return e({
                                                                                    time: u,
                                                                                    name: `${E ? n : `Point_${t}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (n = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(),
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
                                            return null == (e = F.current) ? void 0 : e.currentTime;
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            var u, t;
                                            F.current &&
                                                (F.current.currentTime =
                                                    (0, (u = F.current.duration), (t = e) < 0 ? 0 : t > u ? u : t));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.play();
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            s(), i(0);
                                        },
                                        c = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = F.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        m = (e) => {
                                            i(e), o();
                                        },
                                        _ = (e) => {
                                            i(e), s();
                                        },
                                        h = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        D = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = F.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = F.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        g = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = F.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = F.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        };
                                    return (
                                        (A.current = {
                                            on: D,
                                            off: g,
                                            play: o,
                                            pause: s,
                                            stop: l,
                                            cleanup: h,
                                            getCurrentTime: a,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: m,
                                            goToAndStop: _,
                                            setCurrentTime: i,
                                            domRef: F.current,
                                            onChangeTime: t,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            h(), (A.current = null);
                                        }
                                    );
                                }
                            }, [E, A, d]),
                            (0, n.useEffect)(() => {
                                F.current && o && F.current.play();
                            }, [o, c]),
                            (0, n.useEffect)(() => {
                                if (F.current)
                                    return () => {
                                        F.current && F.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                Hu({ src: t, className: r, style: s, loop: c, ref: F, onClick: m }, _),
                            )
                        );
                    }),
                    Wu = (0, n.memo)(Pu);
                let Uu;
                !(function (e) {
                    (e.UNDEFINED = ''), (e.NORMAL = 'normal'), (e.HARD = 'hard');
                })(Uu || (Uu = {}));
                const ju = {
                        base: 'DifficultyButton_base_d7',
                        backSelected: 'DifficultyButton_backSelected_4c',
                        backHover: 'DifficultyButton_backHover_63',
                        back: 'DifficultyButton_back_ac',
                        backSelected__normal: 'DifficultyButton_backSelected__normal_82',
                        backHover__normal: 'DifficultyButton_backHover__normal_b7',
                        back__normal: 'DifficultyButton_back__normal_0e',
                        backSelected__hard: 'DifficultyButton_backSelected__hard_6c',
                        backHover__hard: 'DifficultyButton_backHover__hard_05',
                        back__hard: 'DifficultyButton_back__hard_bb',
                        base__hover: 'DifficultyButton_base__hover_74',
                        base__selected: 'DifficultyButton_base__selected_10',
                        area: 'DifficultyButton_area_6d',
                        displayName: 'DifficultyButton_displayName_81',
                        video: 'DifficultyButton_video_cd',
                        video__container: 'DifficultyButton_video__container_74',
                        video__static: 'DifficultyButton_video__static_83',
                        video__normal: 'DifficultyButton_video__normal_2b',
                        video__hard: 'DifficultyButton_video__hard_70',
                    },
                    Ku = (0, n.memo)(({ isSelected: e, missionId: u, displayName: t, difficulty: r, onClick: o }) => {
                        const s = (0, n.useState)(!1),
                            l = s[0],
                            c = s[1],
                            d = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const u = d.current;
                                if (u) return e ? u.play() : u.pause();
                            }, [e, d]),
                            a().createElement(
                                Ce,
                                {
                                    contentId: R.views.story_mode.lobby.DifficultyTooltip('resId'),
                                    args: { difficulty: r, isSelected: e },
                                },
                                a().createElement(
                                    'div',
                                    { className: g()(ju.base, e && ju.base__selected, !e && l && ju.base__hover) },
                                    a().createElement('div', { className: g()(ju.back, ju[`back__${r}`]) }),
                                    a().createElement('div', { className: g()(ju.backHover, ju[`backHover__${r}`]) }),
                                    a().createElement('div', {
                                        className: g()(ju.backSelected, ju[`backSelected__${r}`]),
                                    }),
                                    a().createElement(
                                        'div',
                                        { className: g()(ju.video, ju.video__container) },
                                        i.O.client.graphicsQuality.isLow()
                                            ? a().createElement('div', {
                                                  className: g()(ju.video, ju.video__static, ju[`video__${r}`]),
                                              })
                                            : a().createElement(Wu, {
                                                  className: g()(ju.video, ju[`video__${r}`]),
                                                  src: R.videos.story_mode.v_icon_fire(),
                                                  ref: d,
                                                  loop: !0,
                                              }),
                                    ),
                                    a().createElement('div', { className: ju.displayName }, t),
                                    a().createElement('div', {
                                        className: ju.area,
                                        onClick: () => {
                                            e ||
                                                (r === Uu.HARD
                                                    ? I('gui_hangar_sm_difficulty_02')
                                                    : I('gui_hangar_sm_difficulty_01'),
                                                o(u));
                                        },
                                        onMouseEnter: () => {
                                            e || (H.playHighlight(), c(!0));
                                        },
                                        onMouseLeave: () => {
                                            c(!1);
                                        },
                                    }),
                                ),
                            )
                        );
                    }),
                    Vu = {
                        base: 'MissionButton_base_d2',
                        area: 'MissionButton_area_92',
                        base__selected: 'MissionButton_base__selected_d4',
                        backNormal: 'MissionButton_backNormal_d2',
                        backSelected: 'MissionButton_backSelected_c4',
                        swordsShadow: 'MissionButton_swordsShadow_c5',
                        swordsGlow: 'MissionButton_swordsGlow_58',
                        swords: 'MissionButton_swords_fb',
                        hover: 'MissionButton_hover_87',
                        missionId: 'MissionButton_missionId_97',
                        missionState: 'MissionButton_missionState_06',
                        video: 'MissionButton_video_5a',
                        video__static: 'MissionButton_video__static_74',
                    };
                function Gu() {
                    return (
                        (Gu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Gu.apply(this, arguments)
                    );
                }
                const $u = (0, n.memo)(
                        ({
                            isSelected: e,
                            missionId: u,
                            displayName: t,
                            isCompleted: r,
                            isCompletedFirstTime: o,
                            onClick: s,
                        }) => {
                            const l = (0, n.useRef)(null);
                            return (
                                (0, n.useEffect)(() => {
                                    const u = l.current;
                                    if (u) return e ? u.play() : u.pause();
                                }, [e, l]),
                                a().createElement(
                                    'div',
                                    { className: g()(Vu.base, e && Vu.base__selected, r && Vu.base__complete) },
                                    a().createElement('div', {
                                        className: Vu.area,
                                        onClick: () => {
                                            e || (H.playClick(), s(u));
                                        },
                                        onMouseEnter: H.playHighlight,
                                    }),
                                    a().createElement('div', { className: Vu.backNormal }),
                                    a().createElement('div', { className: Vu.backSelected }),
                                    (!r || o) &&
                                        a().createElement(
                                            Ee,
                                            Gu({ className: Vu.missionState }, ou[nu.MISSION_STATE], {
                                                isDisabled: !o,
                                            }),
                                            a().createElement('div', { className: Vu.swordsShadow }),
                                            a().createElement('div', { className: Vu.swordsGlow }),
                                            a().createElement('div', { className: Vu.swords }),
                                        ),
                                    a().createElement(
                                        'div',
                                        { className: Vu.video },
                                        i.O.client.graphicsQuality.isLow()
                                            ? a().createElement('div', { className: g()(Vu.video, Vu.video__static) })
                                            : a().createElement(Wu, {
                                                  className: Vu.video,
                                                  src: R.videos.story_mode.v_icon_fire(),
                                                  ref: l,
                                                  loop: !0,
                                              }),
                                    ),
                                    a().createElement('div', { className: Vu.hover }),
                                    a().createElement('div', { className: Vu.missionId }, t),
                                )
                            );
                        },
                    ),
                    zu = (0, z.Pi)(({ onClick: e, className: u }) => {
                        const t = ie().model,
                            n = t.missions.get(),
                            r = t.selectedMission.get().missionId,
                            i = t.computes.getIsSelectedMissionCompletedFirstTime();
                        return a().createElement(
                            'div',
                            { className: g()('MissionSelector_base_69', u) },
                            te(n, (u, o) => {
                                var s;
                                const l = r === u.missionId,
                                    c =
                                        r ===
                                        (null ==
                                        (s = (function (e, u) {
                                            var t;
                                            if (!(u >= e.length))
                                                return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                                        })(n, o + 1))
                                            ? void 0
                                            : s.missionId);
                                return a().createElement(
                                    a().Fragment,
                                    { key: u.missionId },
                                    t.root.selectedTab.get() === Y.EVENT
                                        ? a().createElement(Ku, {
                                              onClick: e,
                                              isSelected: l,
                                              missionId: u.missionId,
                                              displayName: u.displayName,
                                              difficulty: u.difficulty,
                                          })
                                        : a().createElement($u, {
                                              onClick: e,
                                              isSelected: l,
                                              missionId: u.missionId,
                                              displayName: u.displayName,
                                              isCompleted: u.isCompleted,
                                              isCompletedFirstTime: l && i,
                                          }),
                                    t.root.selectedTab.get() !== Y.EVENT &&
                                        o !== n.length - 1 &&
                                        a().createElement('div', {
                                            className: g()(
                                                'MissionSelector_line_e4',
                                                l && 'MissionSelector_line__left_9c',
                                                c && 'MissionSelector_line__right_dc',
                                                (l || c) && 'MissionSelector_line__selected_ff',
                                            ),
                                        }),
                                );
                            }),
                        );
                    });
                let qu;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(qu || (qu = {}));
                const Yu = 'tooltip_watched';
                let Zu;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(Zu || (Zu = {}));
                const Xu = ['action', 'timeLimit'],
                    Qu = () => Date.now(),
                    Ju = (e, u) => {
                        const t = ((e, u) => {
                                const t = (0, n.useCallback)(
                                    (t, n = qu.Info, a) => {
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
                            })(e, u),
                            a = (0, n.useRef)(new Map()),
                            r = (0, n.useRef)(new Map()),
                            i = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    (void 0 !== u && u > 0) || a.current.set(e, Qu());
                                },
                                [a],
                            ),
                            o = (0, n.useCallback)(() => {
                                a.current.clear(), r.current.clear();
                            }, [a, r]),
                            s = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === r.current.get(e) &&
                                        r.current.set(e, Qu());
                                },
                                [a, r],
                            ),
                            l = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    if (void 0 === u) return;
                                    const t = r.current.get(e);
                                    if (void 0 === t) return;
                                    r.current.delete(e);
                                    const n = Qu() - t;
                                    a.current.set(e, u + n);
                                },
                                [a, r],
                            ),
                            c = (0, n.useCallback)(
                                (e, u = 0, n, i) => {
                                    const o = a.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== r.current.get(e) && l(e), a.current.delete(e);
                                    const s = (Qu() - o) / 1e3;
                                    s <= u ||
                                        ((i = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(i, s)),
                                        t(e, n, i));
                                },
                                [a, r, t, l],
                            );
                        return [(e) => i(e), (e, u, t, n) => c(e, u, t, n), () => o(), (e) => s(e), (e) => l(e)];
                    };
                let et, ut, tt;
                !(function (e) {
                    (e.StoryMode = 'story_mode'), (e.Onboarding = 'onboarding');
                })(et || (et = {})),
                    (function (e) {
                        e.Watched = 'watched';
                    })(ut || (ut = {})),
                    (function (e) {
                        (e.MissionSelection = 'mission_selection_window'),
                            (e.MssVehicleTooltip = 'mss_vehicle_tooltip'),
                            (e.Congratulations = 'congratulations_window'),
                            (e.Achievement = 'achievement'),
                            (e.BattleResult = 'battle_result'),
                            (e.BattleResultStatTooltip = 'battle_result_stat_tooltip');
                    })(tt || (tt = {}));
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const at = ({ className: e }) => {
                        const u = ((e, u) => {
                            const t = ((e) => {
                                    const u = Ju(e, 'metrics'),
                                        t = u[0],
                                        a = u[1],
                                        r = u[2],
                                        i = u[3],
                                        o = u[4],
                                        s = (0, n.useCallback)(
                                            (e) => {
                                                const u = e.action,
                                                    t = e.timeLimit,
                                                    n = e.logLevel;
                                                a(
                                                    u,
                                                    t,
                                                    n,
                                                    (({
                                                        partnerID: e,
                                                        item: u,
                                                        parentScreen: t,
                                                        itemState: n,
                                                        info: a,
                                                    }) => ({
                                                        item: u,
                                                        partnerID: e || null,
                                                        parent_screen: t || null,
                                                        item_state: n || null,
                                                        additional_info: a || null,
                                                    }))(e),
                                                );
                                            },
                                            [a],
                                        );
                                    return [(e) => t(e), (e) => s(e), () => r(), (e) => i(e), (e) => o(e)];
                                })(e),
                                a = t[0],
                                r = t[1],
                                i = u.action,
                                o = u.timeLimit,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, Xu);
                            return (0, n.useMemo)(
                                () => ({
                                    onShow: () => a(i || Yu),
                                    onHide: () => r(Object.assign({ action: i || Yu, timeLimit: o || 2 }, s)),
                                }),
                                [i, o, s, a, r],
                            );
                        })(et.StoryMode, {
                            action: ut.Watched,
                            item: tt.MssVehicleTooltip,
                            parentScreen: tt.MissionSelection,
                            timeLimit: 2,
                        });
                        return a().createElement(
                            'div',
                            { className: g()('MissionVehicle_base_5d', e) },
                            a().createElement(
                                'div',
                                { className: 'MissionVehicle_text_ba' },
                                R.strings.sm_lobby.missionSelection.specialVehicle(),
                            ),
                            a().createElement(
                                Ce,
                                nt(
                                    {
                                        ignoreMouseClick: !0,
                                        ignoreShowDelay: !0,
                                        contentId: R.views.story_mode.lobby.MissionTooltip('resId'),
                                    },
                                    u,
                                ),
                                a().createElement('div', { className: 'MissionVehicle_icon_bb' }),
                            ),
                        );
                    },
                    rt = 'TabItem_tab_ad',
                    it = (0, n.memo)(function ({ tabText: e, isSelected: u, onClick: t }) {
                        return a().createElement(
                            'div',
                            { className: g()('TabItem_base_ba', u && 'TabItem_base__selected_bc') },
                            a().createElement(
                                'div',
                                {
                                    className: rt,
                                    onClick: () => {
                                        u || (H.playClick(), t());
                                    },
                                    onMouseEnter: () => {
                                        u || H.playHighlight();
                                    },
                                },
                                e,
                            ),
                            a().createElement('div', { className: g()(rt, 'TabItem_tab__hoverDecor_4c') }, e),
                        );
                    }),
                    ot = (0, n.memo)(({ selectedTab: e, onChange: u }) =>
                        a().createElement(
                            'div',
                            { className: 'Tabs_base_cb' },
                            a().createElement('div', { className: 'Tabs_line_13' }),
                            a().createElement(it, {
                                tabText: R.strings.sm_lobby.missionSelection.tab.newbies(),
                                onClick: () => u(Y.NEWBIES),
                                isSelected: e === Y.NEWBIES,
                            }),
                            a().createElement(it, {
                                tabText: R.strings.sm_lobby.missionSelection.tab.event(),
                                onClick: () => u(Y.EVENT),
                                isSelected: e === Y.EVENT,
                            }),
                        ),
                    ),
                    st = 'MissionSelectionViewApp_blackScreen_8d',
                    lt = (0, z.Pi)(() => {
                        const e = ie(),
                            u = e.controls,
                            t = e.model,
                            r = (0, n.useState)({ id: void 0, isTab: !1 }),
                            i = r[0],
                            o = r[1],
                            s = t.selectedMission.get(),
                            l = t.root.selectedTab.get(),
                            c = l === Y.EVENT,
                            d = i.isTab ? l : s.missionId,
                            E = (0, q.useSpring)({
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                delay: 100,
                                config: { duration: 200 },
                                reverse: void 0 !== i.id && d !== i.id,
                            });
                        (0, n.useEffect)(() => {
                            i.id !== s.missionId && o({ id: s.missionId, isTab: !1 });
                        }, [s.missionId]);
                        const m = (0, n.useCallback)((e) => {
                                o({ id: e, isTab: !1 });
                            }, []),
                            _ = (0, n.useCallback)((e) => {
                                o({ id: e, isTab: !0 });
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = i.id;
                                if (void 0 === e) return;
                                const t = setTimeout(() => {
                                    i.isTab ? l !== e && u.changeTab(e) : s.missionId !== e && u.missionSelect(e);
                                }, 300);
                                return () => {
                                    clearTimeout(t);
                                };
                            }, [u, i, s.missionId, l]),
                            $(K.n.ESCAPE, u.exit),
                            a().createElement(
                                'div',
                                { className: 'MissionSelectionViewApp_base_fd' },
                                a().createElement('div', { className: st }),
                                a().createElement(Z, {
                                    backgroundPath: R.images.story_mode.gui.maps.icons.common.backgrounds.$num(
                                        s.missionId,
                                    ),
                                    onLoaded: u.loaded,
                                }),
                                a().createElement('div', { className: 'MissionSelectionViewApp_leftSparkles_e6' }),
                                a().createElement('div', { className: 'MissionSelectionViewApp_rightSparkles_84' }),
                                a().createElement('div', { className: 'MissionSelectionViewApp_shadowTop_1a' }),
                                a().createElement('div', { className: 'MissionSelectionViewApp_shadowLeft_62' }),
                                a().createElement('div', { className: 'MissionSelectionViewApp_shadowBottom_9c' }),
                                c && a().createElement('div', { className: 'MissionSelectionViewApp_logo_32' }),
                                a().createElement(q.animated.div, { className: st, style: E }),
                                a().createElement(Iu, { isChanged: d === i.id, durationTasks: 300 }),
                                !c && a().createElement(q.animated.div, { className: st, style: E }),
                                t.root.isTabsVisible.get() &&
                                    a().createElement(
                                        'div',
                                        { className: 'MissionSelectionViewApp_tabs_1b' },
                                        a().createElement(ot, { selectedTab: l, onChange: _ }),
                                    ),
                                a().createElement(
                                    'div',
                                    { className: 'MissionSelectionViewApp_close_5b' },
                                    a().createElement(j, {
                                        caption: R.strings.sm_lobby.missionSelection.exitButton(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: u.exit,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'MissionSelectionViewApp_about_27' },
                                    a().createElement(oe, { onClick: u.openAbout }),
                                ),
                                a().createElement(zu, {
                                    onClick: m,
                                    className: 'MissionSelectionViewApp_missionSelector_47',
                                }),
                                a().createElement(at, { className: 'MissionSelectionViewApp_specialVehicle_40' }),
                                i.isTab && a().createElement(q.animated.div, { className: st, style: E }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    M().render(
                        a().createElement(re, null, a().createElement(x, null, a().createElement(lt, null))),
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
        (__webpack_require__.j = 377),
        (() => {
            var e = { 377: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(6415));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
