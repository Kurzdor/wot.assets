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
                    t.d(u, { mouse: () => c, off: () => o, on: () => i, onResize: () => r, onScaleUpdated: () => s });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
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
                                        s = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, i),
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
                        graphicsQuality: () => s,
                    });
                var n = t(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
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
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => g,
                        getSize: () => E,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => h,
                        isFocused: () => B,
                        pxToRem: () => F,
                        remToPx: () => D,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => w,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    s = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
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
                function g() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    x = {
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
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                s = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
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
                t.d(u, { Sw: () => r.Z, B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => F });
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
                var s = t(8613);
                let i;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    m = t(3138);
                const _ = ['args'];
                function A(e, u, t, n, a, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        function s(e) {
                                            A(r, n, a, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(r, n, a, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
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
                    C = () => D(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var p = t(7572);
                const h = a.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: p.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => D(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => D(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                E = o.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            D(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: g(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, C);
                        },
                        handleViewEvent: D,
                        onBindingsReady: F,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
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
                        ClickOutsideManager: h,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
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
            3945: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => fu,
                        Bar: () => hu,
                        DefaultScroll: () => vu,
                        Direction: () => su,
                        defaultSettings: () => iu,
                        useHorizontalScrollApi: () => lu,
                    });
                var a = {};
                t.r(a), t.d(a, { Area: () => Gu, Bar: () => Hu, Default: () => zu, useVerticalScrollApi: () => xu });
                var r = t(6179),
                    s = t.n(r);
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
                var o = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, u, t) {
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
                })(c || (c = {}));
                const E = o.O.client.getSize('rem'),
                    m = E.width,
                    _ = E.height,
                    A = Object.assign({ width: m, height: _ }, d(m, _, l)),
                    g = (0, r.createContext)(A),
                    F = ['children'];
                const D = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, F);
                    const n = (0, r.useContext)(g),
                        a = n.extraLarge,
                        s = n.large,
                        o = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        E = n.largeWidth,
                        m = n.mediumWidth,
                        _ = n.smallWidth,
                        A = n.extraSmallWidth,
                        D = n.extraLargeHeight,
                        C = n.largeHeight,
                        B = n.mediumHeight,
                        p = n.smallHeight,
                        h = n.extraSmallHeight,
                        b = { extraLarge: D, large: C, medium: B, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && a) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return i(u, t, b);
                        if (t.largeWidth && E) return i(u, t, b);
                        if (t.mediumWidth && m) return i(u, t, b);
                        if (t.smallWidth && _) return i(u, t, b);
                        if (t.extraSmallWidth && A) return i(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && B) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
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
                (0, r.memo)(D);
                const C = (e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    B = ({ children: e }) => {
                        const u = (0, r.useContext)(g),
                            t = (0, r.useState)(u),
                            n = t[0],
                            a = t[1],
                            i = (0, r.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(u);
                                a(Object.assign({ width: t, height: n }, d(t, n, l)));
                            }, []),
                            c = (0, r.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        C(() => {
                            o.O.client.events.on('clientResized', i), o.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', i),
                                        o.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [i, c],
                            );
                        const E = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return s().createElement(g.Provider, { value: E }, e);
                    };
                var p = t(6483),
                    h = t.n(p),
                    b = t(926),
                    v = t.n(b);
                let f, x, w;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(x || (x = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const S = () => {
                        const e = (0, r.useContext)(g),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
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
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return x.ExtraLarge;
                                    case e.largeWidth:
                                        return x.Large;
                                    case e.mediumWidth:
                                        return x.Medium;
                                    case e.smallWidth:
                                        return x.Small;
                                    case e.extraSmallWidth:
                                        return x.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), x.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return w.ExtraLarge;
                                    case e.largeHeight:
                                        return w.Large;
                                    case e.mediumHeight:
                                        return w.Medium;
                                    case e.smallHeight:
                                        return w.Small;
                                    case e.extraSmallHeight:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                const P = {
                        [x.ExtraSmall]: '',
                        [x.Small]: v().SMALL_WIDTH,
                        [x.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [x.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [x.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_HEIGHT,
                        [w.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [w.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [f.ExtraSmall]: '',
                        [f.Small]: v().SMALL,
                        [f.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [f.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [f.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
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
                            })(e, y);
                        const a = S(),
                            r = a.mediaWidth,
                            i = a.mediaHeight,
                            o = a.mediaSize;
                        return s().createElement('div', N({ className: h()(t, P[r], T[i], k[o]) }, n), u);
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
                    return s().createElement(B, null, s().createElement(O, t, u));
                };
                var I = t(493),
                    $ = t.n(I);
                function H(e) {
                    engine.call('PlaySound', e);
                }
                const U = {
                    playHighlight() {
                        H('highlight');
                    },
                    playClick() {
                        H('play');
                    },
                    playYes() {
                        H('yes1');
                    },
                };
                var z = t(3403);
                const G = 'advanced_achievement';
                let W, j, V, q, Y;
                !(function (e) {
                    (e.Click = 'click'), (e.Display = 'display');
                })(W || (W = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'), (e.Catalog = 'catalog');
                    })(j || (j = {})),
                    (function (e) {
                        (e.Mouse = 'mouse'), (e.Esc = 'esc');
                    })(V || (V = {})),
                    (function (e) {
                        (e.AnotherPlayer = 'another_player_click'),
                            (e.TriggerHint = 'trigger_hint'),
                            (e.Close = 'close_button'),
                            (e.Catalog = 'catalog_button'),
                            (e.TankName = 'tank_name_single_achievement'),
                            (e.Breadcrumbs = 'bread_crumb');
                    })(q || (q = {})),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(Y || (Y = {}));
                let X;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(X || (X = {}));
                const Q = 'metrics',
                    K = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    Z = (e, u) => {
                        const t = (0, r.useCallback)(
                            (t, n = Y.Info, a) => {
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
                    J = (e) => {
                        const u = Z(e, Q),
                            t = (0, r.useCallback)(
                                (e) => {
                                    u(e.action, e.logLevel, K(e));
                                },
                                [u],
                            );
                        return (e) => t(e);
                    },
                    ee = () => {
                        const e = J(G);
                        return (u, t) =>
                            e({ action: W.Click, parentScreen: j.Catalog, item: q.Breadcrumbs, itemState: u, info: t });
                    };
                var ue = t(9916);
                class te extends s().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = ue.B3.GOLD;
                        else e = ue.B3.INTEGRAL;
                        const u = ue.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                let ne, ae, re, se, ie, oe, le;
                (te.defaultProps = { format: 'integral' }),
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
                            (e.EquipCoin = 'equipCoin');
                    })(ne || (ne = {})),
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
                    })(ae || (ae = {})),
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
                    })(ie || (ie = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(oe || (oe = {})),
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
                    })(le || (le = {}));
                const ce = [
                        ne.Items,
                        ne.Equipment,
                        ne.Xp,
                        ne.XpFactor,
                        ne.Blueprints,
                        ne.BlueprintsAny,
                        ne.Goodies,
                        ne.Berths,
                        ne.Slots,
                        ne.Tokens,
                        ne.CrewSkins,
                        ne.CrewBooks,
                        ne.Customizations,
                        ne.CreditsFactor,
                        ne.TankmenXp,
                        ne.TankmenXpFactor,
                        ne.FreeXpFactor,
                        ne.BattleToken,
                        ne.PremiumUniversal,
                        ne.NaturalCover,
                        ne.BpCoin,
                        ne.BattlePassSelectToken,
                        ne.BattlaPassFinalAchievement,
                        ne.BattleBadge,
                        ne.BonusX5,
                        ne.CrewBonusX3,
                        ne.NewYearInvoice,
                        ne.EpicSelectToken,
                        ne.Comp7TokenWeeklyReward,
                        ne.DeluxeGift,
                        ne.BattleBoosterGift,
                        ne.OptionalDevice,
                    ],
                    de = [ne.Gold, ne.Credits, ne.Crystal, ne.FreeXp],
                    Ee = [ne.BattlePassPoints, ne.EquipCoin],
                    me = [ne.PremiumPlus, ne.Premium],
                    _e = ['engravings', 'backgrounds'],
                    Ae = ['engraving', 'background'],
                    ge = (e, u = re.Small) => {
                        const t = e.name,
                            n = e.type,
                            a = e.value,
                            r = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
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
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = _e[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            r = a.$dyn(t);
                                        return r ? `${r}` : `${a.$dyn(Ae[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Fe = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    },
                    De = [re.Small, re.Big];
                function Ce() {
                    return !1;
                }
                console.log;
                var Be = t(9174);
                function pe(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return he(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return he(e, u);
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
                function he(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const be = (e) => (0 === e ? window : window.subViews.get(e));
                function ve(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function fe(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const xe = fe;
                function we(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function Se(e, u) {
                    return (function (e, u, t) {
                        const n = [];
                        for (let a = 0; a < e.length; a++) {
                            const r = xe(e, a);
                            u(r, a, e) && n.push(t(r, a, e));
                        }
                        return n;
                    })(e, ve, u);
                }
                const ye = (e, u) => {
                    const t = [];
                    for (let n = 0; n < e; n++) t.push(u(n));
                    return t;
                };
                var Re = t(3946);
                const Ne = (e) => {
                        return Object.assign({}, e, {
                            valueType:
                                ((u = e.name),
                                ce.includes(u)
                                    ? se.MULTI
                                    : de.includes(u)
                                      ? se.CURRENCY
                                      : Ee.includes(u)
                                        ? se.NUMBER
                                        : me.includes(u)
                                          ? se.PREMIUM_PLUS
                                          : se.STRING),
                            tooltipArgs: Fe({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                            isStyleReward: 'style' === e.icon,
                            isCoupledDogTag: 'dogTagComponents' === e.name && 'coupled' === e.purpose,
                        });
                        var u;
                    },
                    Pe = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: a, children: i, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    d = (t, n, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = be,
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
                                                const s = (e) => {
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
                                                        const i = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return a.set(l, t), e && t(s(r)), l;
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
                                                        for (var e, t = pe(a.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            i =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : i.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = Be.LO.box(n, { equals: Ce });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Be.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = Be.LO.box(n, { equals: Ce });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Be.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = Be.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Be.aD)((u) => {
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
                                                                s = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = Be.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Be.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: t, model: E, externalModel: i, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && a ? a.controls(m) : u(m),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    E = (0, r.useRef)(!1),
                                    m = (0, r.useState)(n),
                                    _ = m[0],
                                    A = m[1],
                                    g = (0, r.useState)(() => d(n, a, l)),
                                    F = g[0],
                                    D = g[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        E.current ? D(d(_, a, l)) : (E.current = !0);
                                    }, [l, _, a]),
                                    (0, r.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    s().createElement(t.Provider, { value: F }, i)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    details: e.object('details'),
                                    achievementsList: e.array('achievementsList'),
                                    breadcrumbs: e.array('breadcrumbs'),
                                    rewards: e.array('details.rewards'),
                                    breadcrumbsClickCount: Be.LO.box(0),
                                },
                                t = (0, Re.Om)(() => Se(u.breadcrumbs.get(), (e) => Object.assign({}, e))),
                                n = (0, Re.Om)(
                                    (e) => {
                                        const u = fe(t(), e);
                                        if (u) return u;
                                        throw new Error(`Unexpected breadcrumb index: ${e}`);
                                    },
                                    { equals: Ce },
                                ),
                                a = (0, Re.Om)(() => Se(u.rewards.get(), (e) => Ne(e))),
                                r = (0, Re.Om)(() => u.achievementsList.get().length),
                                s = (0, Re.Om)(
                                    () =>
                                        Se(u.achievementsList.get(), (e) =>
                                            Object.assign({}, e, { isReceived: Boolean(e.receivedDate) }),
                                        ),
                                    { equals: Ce },
                                ),
                                i = (0, Re.Om)((e) => xe(s(), e), { equals: Ce }),
                                o = (0, Re.Om)((e) => {
                                    var t, n;
                                    return Se(
                                        null != (t = null == (n = fe(u.achievementsList.get(), e)) ? void 0 : n.rewards)
                                            ? t
                                            : [],
                                        (e) => Ne(e),
                                    );
                                }),
                                l = (0, Re.Om)(() => 'breadcrumb:' + ye(t().length - 1, (e) => n(e).key).join('|'));
                            return Object.assign({}, u, {
                                computes: {
                                    getBreadcrumbs: t,
                                    getBreadcrumb: n,
                                    breadcrumbsLength: (0, Re.Om)(() => u.breadcrumbs.get().length),
                                    getRewards: a,
                                    getCardListLength: r,
                                    getCardByIndex: i,
                                    getCardRewards: o,
                                    getBreadcrumbsChain: l,
                                    isReceived: (0, Re.Om)(() => Boolean(u.details.get().receivedDate)),
                                    isNeededShowHint: (0, Re.Om)(() => u.root.get().isNeededShowHint),
                                    isHintVisible: (0, Re.Om)(
                                        () => u.root.get().isNeededShowHint && u.breadcrumbsClickCount.get() > 1,
                                    ),
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            increaseBreadcrumbsClickCount: (0, Be.aD)(() =>
                                u.breadcrumbsClickCount.set(u.breadcrumbsClickCount.get() + 1),
                            ),
                            goToBreadcrumb: e.createCallback((e) => ({ achievementId: e }), 'onBreadcrumbClick'),
                            goToCatalog: e.createCallbackNoArgs('onCatalogClick'),
                            showStylePreview: e.createCallback((e) => ({ id: e }), 'onStylePreview'),
                            dogTagPreview: e.createCallback(
                                (e, u) => ({ backgroundId: e, engravingId: u }),
                                'onDogTagPreview',
                            ),
                            goToCard: e.createCallback((e, u) => ({ achievementId: e, category: u }), 'onCardClick'),
                            purchaseVehicle: e.createCallback((e) => ({ intCD: e }), 'onPurchaseVehicleClick'),
                            hintClose: e.createCallbackNoArgs('onHintClose'),
                            hoverCard: e.createCallback(
                                (e, u) => ({ achievementId: e, achievementCategory: u }),
                                'onCardHover',
                            ),
                        }),
                    ),
                    Te = Pe[0],
                    ke = Pe[1],
                    Oe = {
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
                    Le = (e, u) => {
                        const t = (0, r.useRef)();
                        return (
                            (0, r.useEffect)(() => {
                                (u && !u(e)) || (t.current = e);
                            }, [u, e]),
                            t.current
                        );
                    };
                var Me = t(1281);
                let Ie;
                function $e(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function He(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Ie || (Ie = {}));
                const Ue = (e) => e.replace(/&nbsp;/g, ' '),
                    ze = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Ge = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    We = (e, u, t = Ie.left) => e.split(u).reduce(t === Ie.left ? ze : Ge, []),
                    je = (() => {
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
                    Ve = ['zh_cn', 'zh_sg', 'zh_tw'],
                    qe = (e, u = Ie.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Ve.includes(t)) return je(e);
                        if ('ja' === t) {
                            return (0, Me.D4)()
                                .parse(e)
                                .map((e) => Ue(e));
                        }
                        return ((e, u = Ie.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = Ue(e);
                            return We(a, /( )/, u).forEach((e) => (t = t.concat(We(e, n, Ie.left)))), t;
                        })(e, u);
                    };
                var Ye = t(8613);
                Date.now(), Ye.Ew.getRegionalDateTime, Ye.Ew.getFormattedDateTime;
                ue.Sw.instance;
                let Xe;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Xe || (Xe = {}));
                ue.Sw.instance;
                const Qe = Le;
                var Ke = t(7030);
                const Ze = (e) => {
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
                    Je = (e, u, t) => (t < e ? e : t > u ? u : t),
                    eu = [];
                function uu(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), eu)
                    );
                }
                function tu(e, u, t = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, r.useEffect)(() => a, [a]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        a,
                    ];
                }
                function nu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return au(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return au(e, u);
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
                function au(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function ru(e, u, t) {
                    const n = (0, r.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let a,
                                    r = !1,
                                    s = 0;
                                function i() {
                                    a && clearTimeout(a);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function d() {
                                        (s = Date.now()), t.apply(l, o);
                                    }
                                    r ||
                                        (n && !a && d(),
                                        i(),
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
                                    (o.cancel = function () {
                                        i(), (r = !0);
                                    }),
                                    o
                                );
                            })(t, e),
                        u,
                    );
                    return (0, r.useEffect)(() => n.cancel, [n]), n;
                }
                let su;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(su || (su = {}));
                const iu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ou = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                a = n[0],
                                r = n[1];
                            return r <= a ? 0 : Je(a, r, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? iu : c,
                                E = (0, r.useRef)(null),
                                m = (0, r.useRef)(null),
                                _ = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        a = (e, ...t) => {
                                            for (var n, a = nu(u(e).values()); !(n = a()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, r.useMemo)(() => ({ on: t, off: n, trigger: a }), []);
                                })(),
                                A = ru(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Ke.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), _.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                F = g[0],
                                D = g[1],
                                C = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const a = F.scrollPosition.get(),
                                            r = (null != (n = F.scrollPosition.goal) ? n : 0) - a;
                                        return i(e, u * t + r + a);
                                    },
                                    [F.scrollPosition],
                                ),
                                B = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = E.current;
                                        n &&
                                            D.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: d.animationConfig,
                                                from: { scrollPosition: i(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, d.animationConfig, F.scrollPosition],
                                ),
                                p = (0, r.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, d.step),
                                            r = C(u, e, n);
                                        B(r);
                                    },
                                    [B, C, d.step],
                                ),
                                h = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && p(n(e)),
                                            E.current && _.trigger('mouseWheel', e, F.scrollPosition, u(E.current));
                                    },
                                    [F.scrollPosition, p, _],
                                ),
                                b = ((e, u = []) => {
                                    const t = (0, r.useRef)(),
                                        n = (0, r.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        Ze(() => {
                                            const e = E.current;
                                            e &&
                                                (B(i(e, F.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [B, F.scrollPosition.goal],
                                ),
                                v = uu(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = i(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && B(u, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', b),
                                    () => {
                                        window.removeEventListener('resize', b);
                                    }
                                ),
                                [b],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? a(m.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: h,
                                    applyScroll: B,
                                    applyStepTo: p,
                                    contentRef: E,
                                    wrapperRef: m,
                                    scrollPosition: D,
                                    animationScroll: F,
                                    recalculateContent: v,
                                    events: { on: _.on, off: _.off },
                                }),
                                [F.scrollPosition, B, p, _.off, _.on, v, h, D, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    lu = ou({
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
                        getDirection: (e) => (e.deltaY > 1 ? su.Next : su.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    cu = 'HorizontalBar_base_49',
                    du = 'HorizontalBar_base__nonActive_82',
                    Eu = 'HorizontalBar_leftButton_5f',
                    mu = 'HorizontalBar_rightButton_03',
                    _u = 'HorizontalBar_track_0d',
                    Au = 'HorizontalBar_thumb_fd',
                    gu = 'HorizontalBar_rail_32',
                    Fu = 'disable',
                    Du = { pending: !1, offset: 0 },
                    Cu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Bu = () => {},
                    pu = (e, u) => Math.max(20, e.offsetWidth * u),
                    hu = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Cu, onDrag: n = Bu }) => {
                        const a = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, r.useState)(Du),
                            _ = m[0],
                            A = m[1],
                            g = (0, r.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            F = () => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    o = Je(0, 1, r / (a - n)),
                                    E = (u.offsetWidth - pu(u, s)) * o;
                                (t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return i.current.classList.add(Fu), void l.current.classList.remove(Fu);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(Fu), void l.current.classList.add(Fu);
                                            var u, t;
                                            i.current.classList.remove(Fu), l.current.classList.remove(Fu);
                                        }
                                    })(E);
                            },
                            D = uu(() => {
                                (() => {
                                    const u = d.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const s = Math.min(1, n / r);
                                    (u.style.width = `${pu(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        a.current &&
                                            (1 === s ? a.current.classList.add(du) : a.current.classList.remove(du));
                                })(),
                                    F();
                            });
                        (0, r.useEffect)(() => Ze(D)),
                            (0, r.useEffect)(
                                () =>
                                    Ze(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = Bu;
                                        const n = () => {
                                            t(), (t = Ze(D));
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
                            (0, r.useEffect)(() => {
                                if (!_.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var a;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const i = c.current,
                                            o = d.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - _.offset - i.getBoundingClientRect().x,
                                            E = (l / i.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, E),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: E });
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        u(), g(Du);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, _.offset, _.pending, n, g]);
                        const C = tu((u) => e.applyStepTo(u), E, [e]),
                            B = C[0],
                            p = C[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const b = (e) => {
                            e.target.classList.contains(Fu) || H('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(cu, u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(Eu, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Fu) || 0 !== e.button || (H('play'), B(su.Next));
                                },
                                onMouseUp: p,
                                ref: i,
                                onMouseEnter: b,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(_u, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((H('play'), u.target === n))
                                                g({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = d.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? su.Prev : su.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: d, className: h()(Au, u.thumb) }),
                                s().createElement('div', { className: h()(gu, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(mu, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Fu) || 0 !== e.button || (H('play'), B(su.Prev));
                                },
                                onMouseUp: p,
                                ref: l,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    bu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    vu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(bu.base, e.base) });
                            }, [n]),
                            E = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: h()(bu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(bu.defaultScrollArea, a) },
                                s().createElement(fu, { className: o, api: E, classNames: i }, e),
                            ),
                            s().createElement(hu, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    fu = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, r.useEffect)(() => Ze(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(bu.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: h()(bu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: h()(bu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (fu.Bar = hu), (fu.Default = vu);
                const xu = ou({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? su.Next : su.Prev),
                    }),
                    wu = 'VerticalBar_base_f3',
                    Su = 'VerticalBar_base__nonActive_42',
                    yu = 'VerticalBar_topButton_d7',
                    Ru = 'VerticalBar_bottomButton_06',
                    Nu = 'VerticalBar_track_df',
                    Pu = 'VerticalBar_thumb_32',
                    Tu = 'VerticalBar_rail_43',
                    ku = 'disable',
                    Ou = () => {},
                    Lu = { pending: !1, offset: 0 },
                    Mu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Iu = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    $u = (e, u) => Math.max(20, e.offsetHeight * u),
                    Hu = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Mu, onDrag: n = Ou }) => {
                        const a = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, r.useState)(Lu),
                            _ = m[0],
                            A = m[1],
                            g = (0, r.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            F = uu(() => {
                                const u = d.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${$u(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    a.current &&
                                        (1 === s ? a.current.classList.add(Su) : a.current.classList.remove(Su)),
                                    s
                                );
                            }),
                            D = uu(() => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    o = Je(0, 1, r / (a - n)),
                                    E = (u.offsetHeight - $u(u, s)) * o;
                                (t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(ku), void l.current.classList.remove(ku);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(ku), void l.current.classList.add(ku);
                                            var u, t;
                                            i.current.classList.remove(ku), l.current.classList.remove(ku);
                                        }
                                    })(E);
                            }),
                            C = uu(() => {
                                Iu(e, () => {
                                    F(), D();
                                });
                            });
                        (0, r.useEffect)(() => Ze(C)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    Iu(e, () => {
                                        D();
                                    });
                                };
                                let t = Ou;
                                const n = () => {
                                    t(), (t = Ze(C));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!_.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        g(Lu);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        Iu(e, (t) => {
                                            const a = c.current,
                                                r = d.current,
                                                s = e.getContainerSize();
                                            if (!a || !r || !s) return;
                                            const i = u.screenY - _.offset - a.getBoundingClientRect().y,
                                                o = (i / a.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, _.offset, _.pending, n, g]);
                        const B = tu((u) => e.applyStepTo(u), E, [e]),
                            p = B[0],
                            b = B[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const v = (e) => {
                            e.target.classList.contains(ku) || H('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(wu, u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(yu, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ku) || 0 !== e.button || (H('play'), p(su.Next));
                                },
                                ref: i,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(Nu, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((H('play'), u.target === n))
                                                g({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    d.current &&
                                                        Iu(e, (n) => {
                                                            if (!n) return;
                                                            const a = t(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * u);
                                                            e.applyScroll(r);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? su.Prev : su.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: d, className: h()(Pu, u.thumb) }),
                                s().createElement('div', { className: h()(Tu, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(Ru, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ku) || 0 !== e.button || (H('play'), p(su.Prev));
                                },
                                onMouseUp: b,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Uu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    zu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(Uu.base, e.base) });
                            }, [n]),
                            E = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: h()(Uu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(Uu.area, a) },
                                s().createElement(Gu, { className: i, classNames: o, api: E }, e),
                            ),
                            s().createElement(Hu, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Gu = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, r.useEffect)(() => Ze(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(Uu.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(Uu.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Gu.Default = zu;
                const Wu = { Vertical: a, Horizontal: n },
                    ju = {
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
                    Vu = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function qu() {
                    return (
                        (qu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        qu.apply(this, arguments)
                    );
                }
                const Yu = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        a = e.fadeInAnimation,
                        r = e.hide,
                        i = e.maximumNumber,
                        o = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, Vu);
                    const c = n ? null : t,
                        d = 'string' == typeof c;
                    if ((c && !d && c < 0) || 0 === c) return null;
                    const E = c && !d && c > i,
                        m = h()(
                            ju.base,
                            ju[`base__${u}`],
                            a && ju.base__animated,
                            r && ju.base__hidden,
                            !c && ju.base__pattern,
                            n && ju.base__empty,
                            o,
                        );
                    return s().createElement(
                        'div',
                        qu({ className: m }, l),
                        s().createElement('div', { className: ju.bg }),
                        s().createElement('div', { className: ju.pattern }),
                        s().createElement(
                            'div',
                            { className: h()(ju.value, d && ju.value__text) },
                            E ? i : c,
                            E && s().createElement('span', { className: ju.plus }, '+'),
                        ),
                    );
                };
                Yu.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Xu = [
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
                function Qu(e) {
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
                const Ku = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ue.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Zu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            a = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            C = e.onShow,
                            B = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Xu);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, r.useMemo)(
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
                            v = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Ku(t, _, { isMouseEvent: !0, on: !0, arguments: Qu(n) }, b),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, _, n, b, C]),
                            f = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Ku(t, _, { on: !1 }, b),
                                        h.current.isVisible && B && B(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, _, b, B]),
                            x = (0, r.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === g && f();
                            }, [g, f]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            );
                        return g
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      a && a(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              f(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === E && f(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === E && f(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var w;
                    },
                    Ju = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const ut = R.views.common.tooltip_window.simple_tooltip_content,
                    tt = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            a = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Ju);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: a, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, a, o]);
                        return s().createElement(
                            Zu,
                            et(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? ut.SimpleTooltipHtmlContent('resId') : ut.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    nt = 'TextOverflow_base_3b',
                    at = ({ content: e, classMix: u }) => {
                        const t = (0, r.useRef)(null),
                            n = (0, r.useState)(!0),
                            a = n[0],
                            i = n[1];
                        return (
                            (0, r.useEffect)(() =>
                                Ze(() => {
                                    const e = t.current;
                                    e && e.offsetWidth >= e.scrollWidth && i(!1);
                                }),
                            ),
                            s().createElement(
                                tt,
                                { isEnabled: a, body: e },
                                s().createElement('div', { ref: t, className: h()(nt, u) }, e),
                            )
                        );
                    };
                let rt, st, it;
                !(function (e) {
                    (e.Single = 'single'),
                        (e.Cumulative = 'cumulative'),
                        (e.Staged = 'staged'),
                        (e.Subcategory = 'subcategory'),
                        (e.Category = 'Category');
                })(rt || (rt = {})),
                    (function (e) {
                        (e.Top = 'top'), (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(st || (st = {})),
                    (function (e) {
                        (e.Default = ''), (e.PersonalMissions = 'personal_missions');
                    })(it || (it = {}));
                var ot = t(5959);
                let lt, ct, dt, Et, mt, _t;
                !(function (e) {
                    (e.Circular = 'circular'), (e.Shield = 'shield');
                })(lt || (lt = {})),
                    (function (e) {
                        (e.S100x100 = 's100x100'),
                            (e.S128x128 = 's128x128'),
                            (e.S180x180 = 's180x180'),
                            (e.S280x280 = 's280x280'),
                            (e.S360x360 = 's360x360'),
                            (e.S420x420 = 's420x420'),
                            (e.Flexable = 'flexable');
                    })(ct || (ct = {})),
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
                    })(dt || (dt = {})),
                    (function (e) {
                        (e.S100x100 = 's100x100'),
                            (e.S128x128 = 's128x128'),
                            (e.S180x180 = 's180x180'),
                            (e.S280x280 = 's280x280'),
                            (e.S360x360 = 's360x360'),
                            (e.S420x420 = 's420x420'),
                            (e.S480x480 = 's480x480'),
                            (e.Flexable = 'flexable');
                    })(Et || (Et = {})),
                    (function (e) {
                        (e.s52x62 = 's52x62'),
                            (e.s68x72 = 's68x72'),
                            (e.s94x94 = 's94x94'),
                            (e.s144x140 = 's144x140'),
                            (e.s188x176 = 's188x176'),
                            (e.s218x212 = 's218x212'),
                            (e.s250x198 = 's250x198');
                    })(mt || (mt = {})),
                    (function (e) {
                        (e[(e.Default = 0)] = 'Default'),
                            (e[(e.First = 1)] = 'First'),
                            (e[(e.Second = 2)] = 'Second'),
                            (e[(e.Third = 3)] = 'Third');
                    })(_t || (_t = {}));
                const At = (e) => (e >= 90 ? _t.Third : e >= 60 ? _t.Second : e >= 30 ? _t.First : _t.Default),
                    gt = (e, u, t, n = !1) =>
                        e !== rt.Staged || !u || n
                            ? Ue(t)
                            : Ue(
                                  He(R.strings.advanced_achievements.steppedAchievementTitle(), {
                                      achievementName: t,
                                      stage: u,
                                  }),
                              ),
                    Ft = (e, u) => Math.floor((e / u) * 100);
                let Dt;
                !(function (e) {
                    (e.Percentage = 'percentage'), (e.Stepped = 'stepped');
                })(Dt || (Dt = {}));
                const Ct = {
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
                let Bt;
                !(function (e) {
                    (e.Single = 'single'), (e.Cumulative = 'cumulative'), (e.Staged = 'staged');
                })(Bt || (Bt = {}));
                const pt = R.images.gui.maps.icons.advanced_achievements,
                    ht = { [Bt.Single]: lt.Circular, [Bt.Staged]: lt.Circular, [Bt.Cumulative]: lt.Shield },
                    bt = {
                        [ct.S100x100]: dt.s52x44,
                        [ct.S128x128]: dt.s68x56,
                        [ct.S180x180]: dt.s94x80,
                        [ct.S280x280]: dt.s144x116,
                        [ct.S360x360]: dt.s218x176,
                        [ct.S420x420]: dt.s218x176,
                        [ct.Flexable]: dt.s218x176,
                    },
                    vt = {
                        [ct.S100x100]: dt.s54x60,
                        [ct.S128x128]: dt.s68x76,
                        [ct.S180x180]: dt.s94x108,
                        [ct.S280x280]: dt.s148x168,
                        [ct.S360x360]: dt.s192x216,
                        [ct.S420x420]: dt.s228x256,
                        [ct.Flexable]: dt.s228x256,
                    },
                    ft = (e, u, t, n) => {
                        switch (e) {
                            case lt.Shield:
                                return { backgroundImage: `url(${pt.borders.shield.$dyn(`tier_${n}_${u}`)})` };
                            case lt.Circular:
                            default:
                                return {
                                    backgroundImage: `url(${pt.borders.circular.$dyn(t ? `circular_trophy_${u}` : `circular_${u}`)})`,
                                };
                        }
                    },
                    xt = (e, u, t, n) => {
                        switch (e) {
                            case lt.Shield:
                                return { backgroundImage: `url(${pt.backgrounds.shield.$dyn(`${n}_${u}`)})` };
                            case lt.Circular:
                            default:
                                return {
                                    backgroundImage: `url(${pt.backgrounds.circular.$dyn(t ? `trophy_${u}` : `${n}_${u}`)})`,
                                };
                        }
                    },
                    wt = (e, u, t, n, a, r) => {
                        const s = t ? '_trophy' : '',
                            i = e === lt.Shield ? `_tier_${a}` : '',
                            o = ((e) => (e === it.PersonalMissions ? vt : bt))(r),
                            l = o[u],
                            c = ((e, u) => {
                                if (u === ct.S360x360 && e === dt.s218x176) return { width: 188, height: 150 };
                                const t = e.substring(1).split('x');
                                return { width: t[0], height: t[1] };
                            })(l, u),
                            d = c.width,
                            E = c.height,
                            m = pt.icons.$dyn(`${n}${s}${i}_${l}`);
                        return m
                            ? { backgroundImage: `url(${m})`, width: `${d}rem`, height: `${E}rem` }
                            : { width: `${d}rem`, height: `${E}rem` };
                    },
                    St = ({
                        keyName: e,
                        type: u,
                        backgroundName: t,
                        size: n = ct.S180x180,
                        level: a = 0,
                        stage: r = 0,
                        isTrophy: i = !1,
                        iconPosition: o = st.Center,
                        iconSizeMap: l = it.Default,
                        classNames: c,
                    }) => {
                        const d = ht[u] || lt.Circular,
                            E = n === ct.Flexable ? ct.S420x420 : n;
                        return s().createElement(
                            'div',
                            {
                                className: h()(
                                    Ct.base,
                                    Ct[`base__${n}`],
                                    Ct[`base__${d}`],
                                    null == c ? void 0 : c.base,
                                ),
                            },
                            s().createElement('div', {
                                className: h()(Ct.background, null == c ? void 0 : c.background),
                                style: xt(d, E, i, t),
                            }),
                            s().createElement('div', {
                                className: h()(Ct.border, null == c ? void 0 : c.border),
                                style: ft(d, E, i, a),
                            }),
                            s().createElement('div', {
                                className: h()(
                                    Ct.icon,
                                    Ct[`icon__${o}`],
                                    Ct[`icon__${((m = l), m.replace(/_\w/g, (e) => e[1].toUpperCase()))}`],
                                    null == c ? void 0 : c.icon,
                                ),
                                style: wt(d, n, i, e, a, l),
                            }),
                            u === Bt.Staged &&
                                Boolean(r) &&
                                s().createElement(
                                    'div',
                                    {
                                        className: h()(Ct.stage, null == c ? void 0 : c.stage),
                                        lang: R.strings.settings.LANGUAGE_CODE(),
                                    },
                                    r,
                                ),
                        );
                        var m;
                    },
                    yt = {
                        base: 'Category_base_94',
                        base__s100x100: 'Category_base__s100x100_92',
                        base__s128x128: 'Category_base__s128x128_d0',
                        base__s180x180: 'Category_base__s180x180_c5',
                        base__s280x280: 'Category_base__s280x280_36',
                        base__s360x360: 'Category_base__s360x360_a7',
                        base__s420x420: 'Category_base__s420x420_bd',
                        base__flexable: 'Category_base__flexable_b6',
                        background: 'Category_background_16',
                        border: 'Category_border_14',
                        icon: 'Category_icon_69',
                    };
                let Rt, Nt;
                !(function (e) {
                    (e.S100x100 = 's100x100'),
                        (e.S128x128 = 's128x128'),
                        (e.S180x180 = 's180x180'),
                        (e.S280x280 = 's280x280'),
                        (e.S360x360 = 's360x360'),
                        (e.S420x420 = 's420x420'),
                        (e.Flexable = 'flexable');
                })(Rt || (Rt = {})),
                    (function (e) {
                        (e.s54x68 = 's54x68'),
                            (e.s68x82 = 's68x82'),
                            (e.s100x118 = 's100x118'),
                            (e.s156x182 = 's156x182'),
                            (e.s200x236 = 's200x236'),
                            (e.s250x278 = 's250x278');
                    })(Nt || (Nt = {}));
                const Pt = R.images.gui.maps.icons.advanced_achievements,
                    Tt = {
                        [Rt.S100x100]: Nt.s54x68,
                        [Rt.S128x128]: Nt.s68x82,
                        [Rt.S180x180]: Nt.s100x118,
                        [Rt.S280x280]: Nt.s156x182,
                        [Rt.S360x360]: Nt.s200x236,
                        [Rt.S420x420]: Nt.s250x278,
                    },
                    kt = ({
                        keyName: e,
                        backgroundName: u,
                        size: t = Rt.S280x280,
                        level: n = 0,
                        isTrophy: a = !1,
                        classNames: r,
                    }) => {
                        const i = t === Rt.Flexable ? Rt.S420x420 : t;
                        return s().createElement(
                            'div',
                            { className: h()(yt.base, yt[`base__${t}`], null == r ? void 0 : r.base) },
                            s().createElement('div', {
                                className: h()(yt.background, null == r ? void 0 : r.background),
                                style: { backgroundImage: `url(${Pt.backgrounds.category.$dyn(`${u}_${i}`)})` },
                            }),
                            s().createElement('div', {
                                className: h()(yt.border, null == r ? void 0 : r.border),
                                style: {
                                    backgroundImage: `url(${Pt.borders.category.$dyn(a ? `trophy_${i}` : `tier_${n}_${i}`)})`,
                                },
                            }),
                            s().createElement('div', {
                                className: h()(yt.icon, null == r ? void 0 : r.icon),
                                style: { backgroundImage: `url(${Pt.icons.category.$dyn(`${e}_${n}_${Tt[i]}`)})` },
                            }),
                        );
                    },
                    Ot = {
                        base: 'Subcategory_base_7c',
                        base__s100x100: 'Subcategory_base__s100x100_23',
                        base__s128x128: 'Subcategory_base__s128x128_f2',
                        base__s180x180: 'Subcategory_base__s180x180_84',
                        base__s280x280: 'Subcategory_base__s280x280_eb',
                        base__s360x360: 'Subcategory_base__s360x360_dc',
                        base__s420x420: 'Subcategory_base__s420x420_1e',
                        base__s480x480: 'Subcategory_base__s480x480_2a',
                        base__flexable: 'Subcategory_base__flexable_06',
                        background: 'Subcategory_background_68',
                        border: 'Subcategory_border_74',
                        icon: 'Subcategory_icon_17',
                    },
                    Lt = R.images.gui.maps.icons.advanced_achievements,
                    Mt = {
                        [Et.S100x100]: mt.s52x62,
                        [Et.S128x128]: mt.s68x72,
                        [Et.S180x180]: mt.s94x94,
                        [Et.S280x280]: mt.s144x140,
                        [Et.S360x360]: mt.s188x176,
                        [Et.S420x420]: mt.s218x212,
                        [Et.S480x480]: mt.s250x198,
                    },
                    It = ({
                        keyName: e,
                        backgroundName: u,
                        size: t = Et.S280x280,
                        level: n = 0,
                        isTrophy: a = !1,
                        classNames: r,
                    }) => {
                        const i = t === Et.Flexable ? Et.S480x480 : t;
                        return s().createElement(
                            'div',
                            { className: h()(Ot.base, Ot[`base__${t}`], null == r ? void 0 : r.base) },
                            s().createElement('div', {
                                className: h()(Ot.background, null == r ? void 0 : r.background),
                                style: { backgroundImage: `url(${Lt.backgrounds.subcategory.$dyn(`${u}_${i}`)})` },
                            }),
                            s().createElement('div', {
                                className: h()(Ot.border, null == r ? void 0 : r.border),
                                style: {
                                    backgroundImage: `url(${Lt.borders.subcategory.$dyn(a ? `trophy_${i}` : `tier_${n}_${i}`)})`,
                                },
                            }),
                            s().createElement('div', {
                                className: h()(Ot.icon, null == r ? void 0 : r.icon),
                                style: { backgroundImage: `url(${Lt.icons.subcategory.$dyn(`${e}_${n}_${Mt[i]}`)})` },
                            }),
                        );
                    },
                    $t = { [rt.Single]: Bt.Single, [rt.Staged]: Bt.Staged, [rt.Cumulative]: Bt.Cumulative },
                    Ht = ({
                        keyName: e,
                        type: u,
                        backgroundName: t,
                        size: n,
                        level: a,
                        stage: r,
                        isTrophy: i,
                        iconPosition: o,
                        iconSizeMap: l,
                        classNames: c,
                    }) => {
                        switch (u) {
                            case rt.Category:
                                return s().createElement(kt, {
                                    keyName: e,
                                    backgroundName: t,
                                    size: n,
                                    level: a,
                                    isTrophy: i,
                                    classNames: c,
                                });
                            case rt.Subcategory:
                                return s().createElement(It, {
                                    keyName: e,
                                    backgroundName: t,
                                    size: n,
                                    level: a,
                                    isTrophy: i,
                                    classNames: c,
                                });
                            case rt.Single:
                            case rt.Staged:
                            case rt.Cumulative:
                                return s().createElement(St, {
                                    keyName: e,
                                    type: $t[u],
                                    backgroundName: t,
                                    size: n,
                                    level: a,
                                    stage: r,
                                    isTrophy: i,
                                    iconPosition: o,
                                    iconSizeMap: l,
                                    classNames: c,
                                });
                            default:
                                return console.warn(`Unreachable code for type '${u}' in AchievementResolver.`), null;
                        }
                    },
                    Ut = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let zt, Gt;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(zt || (zt = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Gt || (Gt = {}));
                const Wt = ({ size: e = zt.Default }) => {
                        const u = h()(Ut.background, Ut[`background__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    jt = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Vt = ({ size: e }) => {
                        const u = h()(jt.base, jt[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    qt = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    Yt = (0, r.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: a, withoutBounce: r }) => {
                            const i = h()(
                                    qt.base,
                                    qt[`base__${e}`],
                                    t && qt.base__disabled,
                                    a && qt.base__finished,
                                    r && qt.base__withoutBounce,
                                ),
                                o = !t && !a;
                            return s().createElement(
                                'div',
                                { className: i, style: n, ref: u },
                                s().createElement('div', { className: qt.pattern }),
                                s().createElement('div', { className: qt.gradient }),
                                o && s().createElement(Vt, { size: e }),
                            );
                        },
                    ),
                    Xt = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: a }) => {
                        const i = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, r.useEffect)(() => {
                                o && a && a();
                            }, [o, a]),
                            s().createElement(Yt, { size: e, disabled: n, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    },
                    Qt = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let Kt, Zt;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Kt || (Kt = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Zt || (Zt = {}));
                const Jt = 'ProgressBarDeltaSimple_base_6c',
                    en = 'ProgressBarDeltaSimple_delta_99',
                    un = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: a,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < n,
                                d = (0, r.useState)(Zt.Idle),
                                E = d[0],
                                m = d[1],
                                _ = E === Zt.In,
                                A = E === Zt.End,
                                g = E === Zt.Idle,
                                F = (0, r.useCallback)(
                                    (e) => {
                                        m(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, r.useEffect)(() => {
                                if (g && !t) {
                                    return Qt(() => {
                                        F(Zt.In);
                                    }, u);
                                }
                            }, [F, t, g, u]),
                                (0, r.useEffect)(() => {
                                    if (_) {
                                        return Qt(() => {
                                            o && o(), F(Zt.End);
                                        }, e + u);
                                    }
                                }, [F, _, o, u, e]);
                            const D = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(n - i)}%`, left: `${c ? i : n}%` }),
                                    [n, c, i],
                                );
                            return A
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: Jt, style: B },
                                      s().createElement(
                                          'div',
                                          { style: g ? D : C, className: en },
                                          s().createElement(Vt, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    tn = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Yt, {
                                    size: u,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: i,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    s().createElement(un, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    nn = 'ProgressBarDeltaGrow_base_7e',
                    an = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    rn = 'ProgressBarDeltaGrow_glow_68',
                    sn = (e) => (e ? { left: 0 } : { right: 0 }),
                    on = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    ln = (e) => ({ transitionDuration: `${e}ms` }),
                    cn = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: a,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = i < n,
                                E = (0, r.useState)(Kt.Idle),
                                m = E[0],
                                _ = E[1],
                                A = m === Kt.End,
                                g = m === Kt.Idle,
                                F = m === Kt.Grow,
                                D = m === Kt.Shrink,
                                C = (0, r.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                ),
                                B = (0, r.useCallback)(
                                    (e, u) =>
                                        Qt(() => {
                                            C(e);
                                        }, u),
                                    [C],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return g
                                        ? B(Kt.Grow, u)
                                        : F
                                          ? B(Kt.Shrink, e)
                                          : D
                                            ? B(Kt.End, e)
                                            : void (A && o && o());
                            }, [B, t, A, F, g, D, o, u, e]);
                            const p = (0, r.useMemo)(() => Object.assign({ width: '100%' }, ln(e), sn(d)), [d, e]),
                                b = (0, r.useMemo)(() => Object.assign({ width: '0%' }, ln(e), sn(d)), [d, e]),
                                v = (0, r.useMemo)(() => Object.assign({ width: '0%' }, on(d, n), ln(e)), [n, d, e]),
                                f = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - n)}%` }, on(d, n), ln(e)),
                                    [n, d, i, e],
                                );
                            if (A) return null;
                            const x = h()(nn, c, d && 0 === i && an);
                            return s().createElement(
                                'div',
                                { style: g ? v : f, className: x },
                                s().createElement(
                                    'div',
                                    { style: D ? b : p, className: rn },
                                    s().createElement(Vt, { size: a }),
                                ),
                            );
                        },
                    ),
                    dn = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                E = (0, r.useState)(!1),
                                m = E[0],
                                _ = E[1],
                                A = (0, r.useCallback)(
                                    (e) => {
                                        e === Kt.Shrink && _(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                g = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Yt, {
                                    size: u,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: i,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: m ? F : g,
                                }),
                                t >= 0 &&
                                    s().createElement(cn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    En = ['onComplete', 'onEndAnimation'];
                function mn() {
                    return (
                        (mn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        mn.apply(this, arguments)
                    );
                }
                const _n = (0, r.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, En);
                        const a = (0, r.useState)(!1),
                            i = a[0],
                            o = a[1],
                            l = (0, r.useCallback)(() => {
                                const e = 100 === n.to;
                                e !== i && o(e), e && u && u(), t && t();
                            }, [i, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case Gt.Simple:
                                return s().createElement(tn, mn({}, n, { onEndAnimation: l, isComplete: i }));
                            case Gt.Growing:
                                return s().createElement(dn, mn({}, n, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    An = ['onEndAnimation'];
                function gn() {
                    return (
                        (gn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        gn.apply(this, arguments)
                    );
                }
                const Fn = (0, r.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, An);
                    const n = (0, r.useRef)({}),
                        a = (0, r.useCallback)(() => {
                            (n.current.from = void 0), u && u();
                        }, [u]),
                        i = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = i),
                        s().createElement(_n, gn({}, t, { onEndAnimation: a, key: `${i}-${t.to}`, from: i }))
                    );
                });
                function Dn() {
                    return (
                        (Dn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Dn.apply(this, arguments)
                    );
                }
                const Cn = (0, r.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: a,
                            animationSettings: r,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (a === u)
                                return s().createElement(Xt, {
                                    key: `${a}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: a,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: n,
                                animationSettings: r,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return r.withStack
                                ? s().createElement(Fn, c)
                                : s().createElement(_n, Dn({ key: `${a}-${u}` }, c));
                        },
                    ),
                    Bn = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    pn = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (Je(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    hn = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    bn = {
                        freezed: !1,
                        withStack: !1,
                        type: Gt.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    vn = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = hn,
                            size: t = zt.Default,
                            animationSettings: n = bn,
                            disabled: a = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: d,
                            onEndAnimation: E,
                            onComplete: m,
                        }) => {
                            const _ = ((e, u, t) =>
                                (0, r.useMemo)(() => {
                                    const n = (Je(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: pn(n, u, t) };
                                }, [t, u, e]))(o, e, l);
                            return s().createElement(
                                'div',
                                { className: h()(Ut.base, Ut[`base__${t}`]), style: Bn(u) },
                                !i && s().createElement(Wt, { size: t }),
                                s().createElement(Cn, {
                                    size: t,
                                    lineRef: c,
                                    disabled: a,
                                    value: _.value,
                                    deltaFrom: _.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: E,
                                    onChangeAnimationState: d,
                                    onComplete: m,
                                }),
                            );
                        },
                    ),
                    fn = 'Progress_base_37',
                    xn = 'Progress_caption_37',
                    wn = 'Progress_steppedText_6a',
                    Sn = 'Progress_separator_d1',
                    yn = 'Progress_accentText_1c',
                    Rn = ({ progressType: e, currentValue: u, maxValue: t, classNames: n, className: a }) =>
                        s().createElement(
                            'div',
                            { className: h()(fn, a) },
                            s().createElement(vn, { value: u, maxValue: t, size: zt.Small }),
                            s().createElement(
                                'div',
                                { className: h()(xn, null == n ? void 0 : n.caption) },
                                e === Dt.Stepped
                                    ? s().createElement(
                                          'div',
                                          { className: wn },
                                          s().createElement('div', { className: yn }, u),
                                          s().createElement('div', { className: Sn }, '/'),
                                          t,
                                      )
                                    : s().createElement(
                                          'div',
                                          { className: yn },
                                          He(R.strings.common.percentValue(), { value: u }),
                                      ),
                            ),
                        ),
                    Nn = 'ReceivedDate_base_f6',
                    Pn = 'ReceivedDate_iconCheck_90',
                    Tn = ({ receivedDate: e, hasIcon: u = !0, className: t, classNames: n }) =>
                        s().createElement(
                            'div',
                            { className: h()(Nn, t) },
                            u && s().createElement('div', { className: h()(Pn, null == n ? void 0 : n.icon) }),
                            e,
                        ),
                    kn = {
                        base: 'Achievement_base_1c',
                        achievement: 'Achievement_achievement_96',
                        receivedBox: 'Achievement_receivedBox_5b',
                        receivedIcon: 'Achievement_receivedIcon_8c',
                        progressBar: 'Achievement_progressBar_55',
                        progressBarCaption: 'Achievement_progressBarCaption_aa',
                    },
                    On = 'SingleStage_base_29',
                    Ln = ({ stage: e, className: u }) =>
                        s().createElement(
                            'div',
                            { className: h()(On, u), lang: R.strings.settings.LANGUAGE_CODE() },
                            e,
                        ),
                    Mn = {
                        [f.ExtraSmall]: ct.S100x100,
                        [f.Small]: ct.S100x100,
                        [f.Medium]: ct.S100x100,
                        [f.Large]: ct.S128x128,
                        [f.ExtraLarge]: ct.S180x180,
                    },
                    In = (0, z.Pi)(({ cardIndex: e, className: u }) => {
                        const t = ke().model.computes.getCardByIndex(e),
                            n = t.type,
                            a = t.key,
                            r = t.background,
                            i = t.stage,
                            o = t.isTrophy,
                            l = t.isReceived,
                            c = t.receivedDate,
                            d = t.isProgressive,
                            E = t.currentValue,
                            m = t.maxValue,
                            _ = t.isSingleStage,
                            A = t.iconPosition,
                            g = t.iconSizeMap,
                            F = S().mediaSize;
                        return s().createElement(
                            'div',
                            { className: h()(kn.base, u, l && kn.base__received) },
                            s().createElement(
                                'div',
                                { className: kn.achievement },
                                _
                                    ? s().createElement(Ln, { stage: i })
                                    : s().createElement(Ht, {
                                          keyName: a,
                                          backgroundName: r,
                                          type: n,
                                          size: Mn[F],
                                          isTrophy: o,
                                          stage: i,
                                          iconPosition: A,
                                          iconSizeMap: g,
                                          level: At(Ft(E, m)),
                                      }),
                            ),
                            l
                                ? s().createElement(Tn, {
                                      receivedDate: c,
                                      hasIcon: !o,
                                      className: kn.receivedBox,
                                      classNames: { icon: kn.receivedIcon },
                                  })
                                : d &&
                                      s().createElement(Rn, {
                                          progressType: Dt.Stepped,
                                          currentValue: E,
                                          maxValue: m,
                                          className: kn.progressBar,
                                          classNames: { caption: kn.progressBarCaption },
                                      }),
                        );
                    }),
                    $n = {
                        base: 'Card_base_f6',
                        base__single: 'Card_base__single_91',
                        base__received: 'Card_base__received_d3',
                        base__stacked: 'Card_base__stacked_ef',
                        shadowCard: 'Card_shadowCard_65',
                        inner: 'Card_inner_b7',
                        counter: 'Card_counter_ef',
                        glowBox: 'Card_glowBox_6a',
                        glowInner: 'Card_glowInner_fb',
                        glow: 'Card_glow_9b',
                        content: 'Card_content_a7',
                        title: 'Card_title_7b',
                    },
                    Hn = 'FormatText_base_d0',
                    Un = ({ binding: e, text: u = '', classMix: t, alignment: n = Ie.left, formatWithBrackets: a }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const i = a && e ? $e(u, e) : u;
                        return s().createElement(
                            r.Fragment,
                            null,
                            i.split('\n').map((u, a) =>
                                s().createElement(
                                    'div',
                                    { className: h()(Hn, t), key: `${u}-${a}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : qe(e, u))))(
                                        u,
                                        n,
                                        e,
                                    ).map((e, u) => s().createElement(r.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    };
                function zn() {
                    const e = (0, r.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, r.useEffect)(() => u, []),
                        (0, r.useMemo)(
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
                const Gn = (e, u) => window.getComputedStyle(e, null).getPropertyValue(u),
                    Wn = (e, u, t) => {
                        const n = t.getContext('2d');
                        if (!n) return 0;
                        var a;
                        n.font = `${Gn((a = u), 'font-weight')} ${Gn(a, 'font-size')} ${Gn(a, 'font-family')}`;
                        return n.measureText(e).width;
                    },
                    jn = (e) => {
                        if (e.start >= e.end - 1) return e.start;
                        const u = Math.floor((e.start + e.end) / 2),
                            t = e.words.slice(0, u).join(' '),
                            n = Math.ceil(Wn(t, e.element, e.canvas) / e.element.getBoundingClientRect().width);
                        return jn(n <= 1 ? Object.assign({}, e, { start: u }) : Object.assign({}, e, { end: u }));
                    },
                    Vn = 'MultilineOverflow_base_d9',
                    qn = 'MultilineOverflow_base__truncated_a1',
                    Yn = 'MultilineOverflow_text_ce',
                    Xn = 'MultilineOverflow_truncatedContent_da',
                    Qn = 'MultilineOverflow_singleLine_bb',
                    Kn = 'MultilineOverflow_line_51',
                    Zn = ['text', 'lines', 'className', 'onChange'];
                function Jn() {
                    return (
                        (Jn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Jn.apply(this, arguments)
                    );
                }
                const ea = (0, r.forwardRef)(function (e, u) {
                    let t = e.text,
                        n = e.lines,
                        a = e.className,
                        i = e.onChange,
                        o = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, Zn);
                    const l = (0, r.useRef)(null),
                        c = (0, r.useRef)(null),
                        d = (0, r.useState)(!1),
                        E = d[0],
                        m = d[1],
                        _ = (0, r.useState)([]),
                        A = _[0],
                        g = _[1],
                        F = (0, r.useState)(0),
                        D = F[0],
                        C = F[1],
                        B = zn(),
                        p = (0, r.useMemo)(() => document.createElement('canvas'), []),
                        b = (0, r.useCallback)(() => (c.current ? c.current.getBoundingClientRect().height : 0), []),
                        v = (0, r.useCallback)(
                            (e) => {
                                const u = b();
                                return e && u ? Math.round(e.scrollHeight / u) : 0;
                            },
                            [b],
                        ),
                        f = (0, r.useCallback)(() => {
                            if (v(l.current) <= n) return m(!1);
                            m(!0);
                            const e = t.split(' '),
                                u = Array.from(new Array(n)).reduce((u, t, a) => {
                                    if (!l.current) return u;
                                    const r = u.reduce((e, u) => e + u.length, 0),
                                        s = e.slice(r);
                                    if (a === n - 1) return u.push(s), u;
                                    const i = jn({ start: 0, end: s.length, words: s, element: l.current, canvas: p });
                                    return u.push(s.slice(0, i)), u;
                                }, []);
                            g(u);
                        }, [p, v, n, t]),
                        x = (0, r.useCallback)(() => {
                            B.run(() => {
                                C(b() * n), f();
                            });
                        }, [b, n, B, f]);
                    var w, S;
                    return (
                        (0, r.useEffect)(x, [x]),
                        (w = x),
                        (S = [x]),
                        (0, r.useEffect)(
                            () => (window.addEventListener('resize', w), () => window.removeEventListener('resize', w)),
                            S,
                        ),
                        (0, r.useEffect)(() => {
                            null == i || i(E);
                        }, [i, E]),
                        s().createElement(
                            'div',
                            Jn({}, o, { ref: u, className: h()(Vn, a, E && qn) }),
                            s().createElement('div', { ref: l, className: Yn, style: { maxHeight: `${D}rem` } }, t),
                            s().createElement(
                                'div',
                                { className: Xn },
                                A.map((e, u) => s().createElement('div', { key: u, className: Kn }, e.join(' '))),
                            ),
                            s().createElement('div', { ref: c, className: Qn }, R.strings.common.common.dot()),
                        )
                    );
                });
                function ua() {
                    return (
                        (ua =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ua.apply(this, arguments)
                    );
                }
                const ta = (0, r.forwardRef)(function (e, u) {
                        const t = (0, r.useState)(!1),
                            n = t[0],
                            a = t[1];
                        return s().createElement(
                            tt,
                            { isEnabled: n, body: e.text },
                            s().createElement(ea, ua({}, e, { ref: u, onChange: a })),
                        );
                    }),
                    na = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    aa = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const ra = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    sa = (e) =>
                        ra
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = aa.length - 1; t >= 0; t--)
                                      for (; e >= aa[t]; ) (u += na[t]), (e -= aa[t]);
                                  return u;
                              })(e),
                    ia = 'VehicleButton_base_bd',
                    oa = 'VehicleButton_base__received_20',
                    la = 'VehicleButton_icon_86',
                    ca = ({ vehicleName: e, iconName: u, isReceived: t, onClick: n, className: a }) => {
                        const r = u ? R.images.gui.maps.icons.achievements.$dyn(u) : '';
                        return s().createElement(
                            'div',
                            {
                                className: h()(ia, t && oa, a),
                                onClick: () => {
                                    t || (U.playClick(), n());
                                },
                                onMouseEnter: () => U.playHighlight(),
                            },
                            r && s().createElement('div', { className: la, style: { backgroundImage: `url(${r})` } }),
                            e,
                        );
                    },
                    da = 'Description_base_8c',
                    Ea = 'Description_base__received_ab',
                    ma = 'Description_text_9f',
                    _a = R.strings.achievements_page.catalog,
                    Aa = (0, z.Pi)(({ index: e, className: u }) => {
                        var t;
                        const n = ke(),
                            a = n.model,
                            r = n.controls,
                            i = a.computes.getCardByIndex(e),
                            o = i.key,
                            l = i.isReceived,
                            c = i.specificItemName,
                            d = i.specificItemId,
                            E = i.specificItemLevel,
                            m = i.type,
                            _ = i.isSingleStage,
                            A = i.maxValue,
                            g = i.isResearchable,
                            F = (() => {
                                const e = J(G);
                                return () => {
                                    e({ action: W.Display, parentScreen: j.Catalog, item: q.TankName });
                                };
                            })(),
                            D = l && m === rt.Staged && !_;
                        return s().createElement(
                            'div',
                            { className: h()(da, l && Ea, u) },
                            d && g
                                ? s().createElement(Un, {
                                      text: R.strings.advanced_achievements.collectVehicle(),
                                      binding: {
                                          item: s().createElement(ca, {
                                              vehicleName: c,
                                              isReceived: l,
                                              onClick: () => {
                                                  F(), r.purchaseVehicle(d);
                                              },
                                          }),
                                      },
                                  })
                                : s().createElement(ta, {
                                      text: D
                                          ? _a.card.descriptionCompleted()
                                          : He(
                                                null !=
                                                    (t = Ue(R.strings.advanced_achievements.description.$plural(o, A)))
                                                    ? t
                                                    : '',
                                                { maxValue: A, level: sa(E) },
                                            ),
                                      lines: 3,
                                      className: ma,
                                  }),
                        );
                    }),
                    ga = ['children'];
                function Fa() {
                    return (
                        (Fa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Fa.apply(this, arguments)
                    );
                }
                const Da = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, ga);
                    return s().createElement(
                        Zu,
                        Fa(
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
                };
                function Ca() {
                    return (
                        (Ca =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ca.apply(this, arguments)
                    );
                }
                const Ba = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(tt, u, n);
                        const a = u.contentId;
                        return a ? s().createElement(Zu, Ca({}, u, { contentId: a }), n) : s().createElement(Da, u, n);
                    },
                    pa = {
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
                    ha = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = re.Big,
                        special: a,
                        value: r,
                        valueType: i,
                        style: o,
                        className: l,
                        classNames: c,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const m = ((e, u) => {
                                if (void 0 === u || !De.includes(e)) return null;
                                switch (u) {
                                    case ie.BATTLE_BOOSTER:
                                    case ie.BATTLE_BOOSTER_REPLACE:
                                        return oe.BATTLE_BOOSTER;
                                }
                            })(n, a),
                            _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ie.BATTLE_BOOSTER:
                                        return le.BATTLE_BOOSTER;
                                    case ie.BATTLE_BOOSTER_REPLACE:
                                        return le.BATTLE_BOOSTER_REPLACE;
                                    case ie.BUILT_IN_EQUIPMENT:
                                        return le.BUILT_IN_EQUIPMENT;
                                    case ie.EQUIPMENT_PLUS:
                                        return le.EQUIPMENT_PLUS;
                                    case ie.EQUIPMENT_TROPHY_BASIC:
                                        return le.EQUIPMENT_TROPHY_BASIC;
                                    case ie.EQUIPMENT_TROPHY_UPGRADED:
                                        return le.EQUIPMENT_TROPHY_UPGRADED;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return le.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return le.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return le.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ie.PROGRESSION_STYLE_UPGRADED_1:
                                        return le.PROGRESSION_STYLE_UPGRADED_1;
                                    case ie.PROGRESSION_STYLE_UPGRADED_2:
                                        return le.PROGRESSION_STYLE_UPGRADED_2;
                                    case ie.PROGRESSION_STYLE_UPGRADED_3:
                                        return le.PROGRESSION_STYLE_UPGRADED_3;
                                    case ie.PROGRESSION_STYLE_UPGRADED_4:
                                        return le.PROGRESSION_STYLE_UPGRADED_4;
                                    case ie.PROGRESSION_STYLE_UPGRADED_5:
                                        return le.PROGRESSION_STYLE_UPGRADED_5;
                                    case ie.PROGRESSION_STYLE_UPGRADED_6:
                                        return le.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(a),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case se.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case se.CURRENCY:
                                    case se.NUMBER:
                                        return s().createElement(te, { format: 'integral', value: Number(e) });
                                    case se.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, i);
                        return s().createElement(
                            'div',
                            { className: h()(pa.base, pa[`base__${n}`], l), style: o },
                            s().createElement(
                                Ba,
                                { tooltipArgs: d, className: pa.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: h()(pa.image, null == c ? void 0 : c.image) },
                                        m &&
                                            s().createElement('div', {
                                                className: h()(pa.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: h()(pa.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        _ &&
                                            s().createElement('div', {
                                                className: h()(pa.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    pa.info,
                                                    pa[`info__${e}`],
                                                    i === se.MULTI && pa.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    Ba,
                                    { tooltipArgs: E },
                                    s().createElement('div', {
                                        className: h()(pa.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                let ba;
                !(function (e) {
                    (e.S80x80 = 's80x80'), (e.S64x64 = 's64x64'), (e.S48x48 = 's48x48');
                })(ba || (ba = {}));
                const va = { [ba.S48x48]: re.Small, [ba.S64x64]: re.Big, [ba.S80x80]: re.Big },
                    fa = { [ba.S48x48]: re.S48x48, [ba.S64x64]: re.S64x64, [ba.S80x80]: re.S80x80 },
                    xa = {
                        base: 'CommonReward_base_7e',
                        base__s48x48: 'CommonReward_base__s48x48_8b',
                        base__s64x64: 'CommonReward_base__s64x64_96',
                        base__s80x80: 'CommonReward_base__s80x80_94',
                        base__clickable: 'CommonReward_base__clickable_40',
                        reward: 'CommonReward_reward_ff',
                        rewardImage: 'CommonReward_rewardImage_f2',
                        loupe: 'CommonReward_loupe_f0',
                    };
                function wa() {
                    return (
                        (wa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        wa.apply(this, arguments)
                    );
                }
                const Sa = ({ reward: e, size: u, imageSize: t, hasPreview: n, className: a, onClick: r }) =>
                        s().createElement(
                            'div',
                            {
                                className: h()(xa.base, n && xa.base__clickable, xa[`base__${u}`], a),
                                onClick: () => {
                                    n && (null == r || r(), U.playClick());
                                },
                                onMouseEnter: () => n && U.playHighlight(),
                            },
                            s().createElement(
                                ha,
                                wa({}, e, {
                                    image: ge(e, t || va[u]),
                                    className: xa.reward,
                                    classNames: { image: xa.rewardImage },
                                }),
                            ),
                            n && s().createElement('div', { className: xa.loupe }),
                        ),
                    ya = (e, u, t) => ({
                        reward: Object.assign({}, e),
                        hasPreview: e.isStyleReward || e.isCoupledDogTag,
                        size: u,
                        key: t,
                    }),
                    Ra = {
                        base: 'PointsReward_base_02',
                        base__s48x48: 'PointsReward_base__s48x48_33',
                        base__s64x64: 'PointsReward_base__s64x64_46',
                        base__s80x80: 'PointsReward_base__s80x80_76',
                        icon: 'PointsReward_icon_21',
                        label: 'PointsReward_label_0c',
                        iconPlus: 'PointsReward_iconPlus_f3',
                    },
                    Na = R.strings.achievements_page.achievementsPointsTooltip,
                    Pa = ({ points: e, size: u = ba.S64x64, className: t, classNames: n }) =>
                        s().createElement(
                            tt,
                            { header: Na.header(), body: Na.body() },
                            s().createElement(
                                'div',
                                { className: h()(Ra.base, Ra[`base__${u}`], t) },
                                s().createElement('div', { className: h()(Ra.icon, null == n ? void 0 : n.icon) }),
                                s().createElement(
                                    'div',
                                    { className: Ra.label },
                                    s().createElement('div', { className: Ra.iconPlus }),
                                    s().createElement(te, { value: e }),
                                ),
                            ),
                        ),
                    Ta = 'Rewards_base_78',
                    ka = 'Rewards_rewardItem__points_12',
                    Oa = 'Rewards_base__received_a3',
                    La = 'Rewards_rewardItem_9c',
                    Ma = 'Rewards_rewardItem__preview_42';
                function Ia() {
                    return (
                        (Ia =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ia.apply(this, arguments)
                    );
                }
                const $a = {
                        [f.ExtraSmall]: ba.S48x48,
                        [f.Small]: ba.S48x48,
                        [f.Medium]: ba.S48x48,
                        [f.Large]: ba.S64x64,
                        [f.ExtraLarge]: ba.S80x80,
                    },
                    Ha = (0, z.Pi)(({ cardIndex: e, className: u }) => {
                        const t = ke(),
                            n = t.model,
                            a = t.controls,
                            r = n.computes.getCardByIndex(e),
                            i = r.achievementScore,
                            o = r.isReceived,
                            l = n.computes.getCardRewards(e),
                            c = S().mediaSize,
                            d = $a[c];
                        return s().createElement(
                            'div',
                            { className: h()(Ta, o && Oa, u) },
                            we(l, (e, u) => {
                                const t = ya(e, d, u);
                                return e.isCoupledDogTag
                                    ? s().createElement(
                                          Sa,
                                          Ia({}, t, {
                                              onClick: () => a.dogTagPreview(e.backgroundId, e.engravingId),
                                              imageSize: fa[d],
                                              className: h()(La, t.hasPreview && Ma),
                                          }),
                                      )
                                    : s().createElement(
                                          Sa,
                                          Ia({}, t, {
                                              onClick: () => a.showStylePreview(e.id),
                                              className: h()(La, t.hasPreview && Ma),
                                          }),
                                      );
                            }),
                            Boolean(i) && s().createElement(Pa, { className: h()(La, ka), points: i, size: $a[c] }),
                        );
                    }),
                    Ua = R.strings.advanced_achievements;
                var za;
                !(function (e) {
                    (e.Single = 'single'), (e.Stacked = 'stacked');
                })(za || (za = {}));
                const Ga = (0, z.Pi)(({ index: e, className: u }) => {
                        const t = ke(),
                            n = t.model,
                            a = t.controls,
                            r = n.computes.getCardByIndex(e),
                            i = r.type,
                            o = r.key,
                            l = r.isTrophy,
                            c = r.isReceived,
                            d = r.isSingleStage,
                            E = r.id,
                            m = r.stage,
                            _ = r.newItemsCount,
                            A = r.category,
                            g = ((e, u, t) => {
                                if (u) return za.Single;
                                switch (e) {
                                    case rt.Cumulative:
                                        return za.Stacked;
                                    case rt.Staged:
                                        return t ? za.Single : za.Stacked;
                                    case rt.Single:
                                    default:
                                        return za.Single;
                                }
                            })(i, l, d);
                        return s().createElement(
                            'div',
                            {
                                className: h()($n.base, $n[`base__${g}`], c && $n.base__received, u),
                                onClick: () => {
                                    g === za.Stacked && (H(R.sounds.ach_sign()), a.goToCard(E, A));
                                },
                                onMouseEnter: () => {
                                    Boolean(_) && a.hoverCard(E, A), g === za.Stacked && U.playHighlight();
                                },
                            },
                            g === za.Stacked && s().createElement('div', { className: $n.shadowCard }),
                            s().createElement(
                                'div',
                                { className: $n.inner },
                                Boolean(_) &&
                                    s().createElement(
                                        'div',
                                        { className: $n.counter },
                                        s().createElement(Yu, { value: _, isEmpty: 1 === _ }),
                                    ),
                                ot.graphicsQuality.isHigh() &&
                                    Boolean(_) &&
                                    s().createElement(
                                        'div',
                                        { className: $n.glowBox },
                                        s().createElement(
                                            'div',
                                            { className: $n.glowInner },
                                            s().createElement('div', { className: $n.glow }),
                                        ),
                                    ),
                                s().createElement(In, { cardIndex: e }),
                                s().createElement(
                                    'div',
                                    { className: $n.content },
                                    s().createElement(
                                        'div',
                                        { className: $n.title },
                                        s().createElement(at, {
                                            content: d
                                                ? Ue(He(Ua.stepTitle(), { stage: m }))
                                                : gt(i, m, Ua.name.$dyn(o), c),
                                        }),
                                    ),
                                    s().createElement(Aa, { index: e }),
                                ),
                                !l && s().createElement(Ha, { cardIndex: e }),
                            ),
                        );
                    }),
                    Wa = {
                        base: 'CardList_base_35',
                        inner: 'CardList_inner_e4',
                        scrollContent: 'CardList_scrollContent_61',
                        bar: 'CardList_bar_b5',
                        list: 'CardList_list_78',
                        item: 'CardList_item_31',
                    },
                    ja = (0, z.Pi)(({ className: e }) => {
                        const u = ke().model,
                            t = xu();
                        return s().createElement(
                            'div',
                            { className: h()(Wa.base, e) },
                            s().createElement(
                                'div',
                                { className: Wa.inner },
                                s().createElement(
                                    Wu.Vertical.Area,
                                    { api: t, className: Wa.scroll, classNames: { content: Wa.scrollContent } },
                                    s().createElement(
                                        'div',
                                        { className: Wa.list },
                                        ye(u.computes.getCardListLength(), (e) =>
                                            s().createElement(
                                                'div',
                                                { className: Wa.item, key: e },
                                                s().createElement(Ga, { index: e }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            s().createElement(Wu.Vertical.Bar, { api: t, classNames: { base: Wa.bar } }),
                        );
                    }),
                    Va = 'Details_base_0f',
                    qa = 'Details_progress_e7',
                    Ya = 'Details_receivedBox_25',
                    Xa = 'Details_content_f9',
                    Qa = 'Details_title_73',
                    Ka = 'Details_base__received_65',
                    Za = 'Details_description_da',
                    Ja = 'Details_rewards_3f',
                    er = 'Rewards_base_87',
                    ur = 'Rewards_rewardItem_42';
                function tr() {
                    return (
                        (tr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        tr.apply(this, arguments)
                    );
                }
                const nr = {
                        [f.ExtraSmall]: ba.S48x48,
                        [f.Small]: ba.S48x48,
                        [f.Medium]: ba.S48x48,
                        [f.Large]: ba.S64x64,
                        [f.ExtraLarge]: ba.S80x80,
                    },
                    ar = (0, z.Pi)(({ className: e }) => {
                        const u = ke(),
                            t = u.model,
                            n = u.controls,
                            a = t.details.get().achievementScore,
                            r = S().mediaSize,
                            i = nr[r];
                        return s().createElement(
                            'div',
                            { className: h()(er, e) },
                            we(t.computes.getRewards(), (e, u) =>
                                e.isCoupledDogTag
                                    ? s().createElement(
                                          Sa,
                                          tr({}, ya(e, i, u), {
                                              onClick: () => n.dogTagPreview(e.backgroundId, e.engravingId),
                                              imageSize: fa[i],
                                              className: ur,
                                          }),
                                      )
                                    : s().createElement(
                                          Sa,
                                          tr({}, ya(e, i, u), {
                                              onClick: () => n.showStylePreview(e.id),
                                              className: ur,
                                          }),
                                      ),
                            ),
                            s().createElement(Pa, { className: ur, points: a, size: i }),
                        );
                    }),
                    rr = R.strings.advanced_achievements,
                    sr = {
                        [f.ExtraSmall]: ct.S280x280,
                        [f.Small]: ct.S280x280,
                        [f.Medium]: ct.S360x360,
                        [f.Large]: ct.S360x360,
                        [f.ExtraLarge]: ct.S420x420,
                    },
                    ir = (0, z.Pi)(({ className: e }) => {
                        const u = ke().model,
                            t = u.details.get(),
                            n = t.type,
                            a = t.key,
                            r = t.background,
                            i = t.stage,
                            o = t.isTrophy,
                            l = t.progressType,
                            c = t.currentValue,
                            d = t.maxValue,
                            E = t.receivedDate,
                            m = t.iconPosition,
                            _ = t.iconSizeMap,
                            A = t.specificItemLevel,
                            g = u.computes.isReceived,
                            F = S().mediaSize,
                            D = !o && (n === rt.Cumulative || n === rt.Staged);
                        return s().createElement(
                            'div',
                            { className: h()(Va, g() && Ka, e) },
                            s().createElement(Ht, {
                                keyName: a,
                                backgroundName: r,
                                type: n,
                                size: sr[F],
                                isTrophy: o,
                                stage: i,
                                iconPosition: m,
                                iconSizeMap: _,
                                level: At(Ft(c, d)),
                            }),
                            !o &&
                                s().createElement(
                                    'div',
                                    { className: qa },
                                    g()
                                        ? s().createElement(Tn, { receivedDate: E, className: Ya })
                                        : s().createElement(Rn, {
                                              progressType: l,
                                              currentValue: c,
                                              maxValue: l === Dt.Stepped ? d : void 0,
                                          }),
                                ),
                            s().createElement(
                                'div',
                                { className: Xa },
                                s().createElement('div', { className: Qa }, gt(n, i, rr.name.$dyn(a), g())),
                                D && s().createElement(ar, { className: Ja }),
                                s().createElement(
                                    'div',
                                    { className: Za },
                                    Ue(
                                        ((e, u, t, n, a) => {
                                            var r;
                                            return e
                                                ? rr.descriptionOfTrophy()
                                                : u
                                                  ? rr.descriptionOfReceived()
                                                  : null != (r = rr.ditailsDescription.$dyn(t))
                                                    ? r
                                                    : He(rr.description.$plural(t, n), { maxValue: n, level: sa(a) });
                                        })(o, g(), a, d, A),
                                    ),
                                ),
                            ),
                        );
                    }),
                    or = 'Content_base_e4',
                    lr = 'Content_inner_a4',
                    cr = 'Content_details_8f',
                    dr = 'Content_list_20',
                    Er = (0, z.Pi)(({ className: e }) => {
                        var u;
                        const t = ke().model.computes.breadcrumbsLength(),
                            n = null != (u = Qe(t)) ? u : t,
                            a = (0, Ke.useTransition)(t, {
                                from: { x: (n > t ? -60 : 60) + 'rem', opacity: 0 },
                                enter: { x: '0rem', opacity: 1 },
                                leave: { x: (n > t ? 60 : -60) + 'rem', opacity: 0 },
                                immediate: n === t,
                                config: { duration: 400, easing: Oe.easeOutQuad },
                            });
                        return (
                            (0, r.useEffect)(() => {
                                n !== t && H(R.sounds.ach_page_transition());
                            }, [n, t]),
                            s().createElement(
                                'div',
                                { className: h()(or, e) },
                                a((e) =>
                                    s().createElement(
                                        Ke.animated.div,
                                        { className: lr, style: e },
                                        s().createElement(ir, { className: cr }),
                                        s().createElement(ja, { className: dr }),
                                    ),
                                ),
                            )
                        );
                    }),
                    mr = 'Hint_base_37',
                    _r = 'Hint_text_9d',
                    Ar = 'Hint_icon_b3',
                    gr = 'Hint_border_23',
                    Fr = 'Hint_close_ce',
                    Dr = R.strings.achievements_page.catalog,
                    Cr = (0, z.Pi)(({ className: e }) => {
                        const u = ke().controls;
                        return s().createElement(
                            'div',
                            { className: h()(mr, e) },
                            s().createElement(Un, {
                                text: Dr.hintText(),
                                classMix: _r,
                                binding: {
                                    escIcon: s().createElement(
                                        'div',
                                        { className: Ar },
                                        s().createElement('div', { className: gr }),
                                        Dr.hintIcon(),
                                    ),
                                },
                            }),
                            s().createElement('div', {
                                className: Fr,
                                onClick: () => {
                                    u.hintClose(), H(R.sounds.cancelcloseno());
                                },
                                onMouseEnter: U.playHighlight,
                            }),
                        );
                    }),
                    Br = {
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
                    pr = [
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
                function hr() {
                    return (
                        (hr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        hr.apply(this, arguments)
                    );
                }
                class br extends s().PureComponent {
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
                            a = e.side,
                            r = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
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
                                })(e, pr)),
                            m = h()(Br.base, Br[`base__${r}`], Br[`base__${a}`], null == i ? void 0 : i.base),
                            _ = h()(Br.icon, Br[`icon__${r}`], Br[`icon__${a}`], null == i ? void 0 : i.icon),
                            A = h()(Br.glow, null == i ? void 0 : i.glow),
                            g = h()(Br.caption, Br[`caption__${r}`], null == i ? void 0 : i.caption),
                            F = h()(Br.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            hr(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== r && s().createElement('div', { className: Br.shine }),
                            s().createElement('div', { className: _ }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: g }, u),
                            n && s().createElement('div', { className: F }, n),
                        );
                    }
                }
                br.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var vr = t(5521);
                const fr = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function xr(e = vr.n.NONE, u = fr, t = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== vr.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                const wr = {
                    base: 'Breadcrumb_base_24',
                    base__active: 'Breadcrumb_base__active_3b',
                    base__disabled: 'Breadcrumb_base__disabled_b2',
                };
                let Sr;
                !(function (e) {
                    (e.Active = 'active'), (e.Disabled = 'disabled');
                })(Sr || (Sr = {}));
                const yr = ({ state: e = Sr.Active, onClick: u, className: t, children: n }) =>
                        s().createElement(
                            'div',
                            {
                                className: h()(wr.base, wr[`base__${e}`], t),
                                onClick: () => {
                                    e === Sr.Active && (null == u || u());
                                },
                            },
                            n,
                        ),
                    Rr = 'BreadcrumbItem_base_7a',
                    Nr = 'BreadcrumbItem_arrow_a8',
                    Pr = (0, z.Pi)(({ index: e, className: u }) => {
                        const t = ke(),
                            n = t.controls,
                            a = t.model,
                            i = a.computes,
                            o = i.getBreadcrumb(e),
                            l = o.achievementId,
                            c = o.key,
                            d = (() => {
                                const e = (0, r.useState)(viewEnv.getClientSizePx().width),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = () => t(viewEnv.getClientSizePx().width);
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    { currentWidth: u }
                                );
                            })(),
                            E = d.currentWidth,
                            m = ee();
                        return s().createElement(
                            'div',
                            { className: h()(Rr, u) },
                            s().createElement('div', { className: Nr }),
                            s().createElement(
                                yr,
                                {
                                    state: e === i.breadcrumbsLength() - 1 ? Sr.Disabled : Sr.Active,
                                    onClick: () =>
                                        ((e) => {
                                            n.increaseBreadcrumbsClickCount(),
                                                m(a.computes.getBreadcrumbsChain(), V.Mouse),
                                                n.goToBreadcrumb(e);
                                        })(l),
                                },
                                s().createElement(at, {
                                    key: `${e}-${E}-${i.breadcrumbsLength()}`,
                                    content: systemLocale.toUpperCase(Ue(R.strings.advanced_achievements.name.$dyn(c))),
                                }),
                            ),
                        );
                    }),
                    Tr = {
                        base: 'Breadcrumbs_base_bf',
                        rootLink: 'Breadcrumbs_rootLink_0f',
                        score: 'Breadcrumbs_score_ee',
                        scoreIcon: 'Breadcrumbs_scoreIcon_eb',
                        list: 'Breadcrumbs_list_b7',
                        item: 'Breadcrumbs_item_9a',
                        item__last: 'Breadcrumbs_item__last_f1',
                    },
                    kr = R.strings.achievements_page,
                    Or = (0, z.Pi)(({ className: e }) => {
                        const u = ke(),
                            t = u.controls,
                            n = u.model,
                            a = n.root.get(),
                            r = a.achievementScore,
                            i = a.maxAchievementsScore;
                        return s().createElement(
                            'div',
                            { className: h()(Tr.base, e) },
                            s().createElement(
                                Ba,
                                {
                                    className: Tr.hoverWrapper,
                                    tooltipArgs: {
                                        header: He(kr.category.achievementsScore.tooltip.title(), {
                                            value: r,
                                            maxValue: i,
                                        }),
                                        body: kr.category.achievementsScore.tooltip.description(),
                                    },
                                },
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement(
                                        yr,
                                        { className: Tr.rootLink, onClick: t.goToCatalog },
                                        s().createElement(
                                            'div',
                                            { className: Tr.score },
                                            s().createElement('div', { className: Tr.scoreIcon }),
                                            s().createElement(te, { value: r }),
                                        ),
                                        kr.catalog.rootLink(),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: Tr.list },
                                ye(n.computes.breadcrumbsLength(), (e) =>
                                    s().createElement(Pr, {
                                        index: e,
                                        className: h()(
                                            Tr.item,
                                            e === n.computes.breadcrumbsLength() - 1 && Tr.item__last,
                                        ),
                                        key: e,
                                    }),
                                ),
                            ),
                        );
                    }),
                    Lr = { base: 'Navigation_base_bd', breadcrumbs: 'Navigation_breadcrumbs_c1' },
                    Mr = (0, z.Pi)(() => {
                        const e = ke(),
                            u = e.controls,
                            t = e.model,
                            n = t.computes,
                            a = (() => {
                                const e = J(G);
                                return (u, t) => e({ action: W.Click, parentScreen: j.Catalog, item: u, info: t });
                            })(),
                            r = ee();
                        var i;
                        return (
                            (i = () => {
                                if ((n.isNeededShowHint() && u.hintClose(), n.breadcrumbsLength() > 1)) {
                                    const e = n.breadcrumbsLength() - 2;
                                    u.goToBreadcrumb(n.getBreadcrumb(e).achievementId),
                                        r(t.computes.getBreadcrumbsChain(), V.Esc);
                                } else a(q.Close, V.Esc), u.goToCatalog();
                            }),
                            xr(vr.n.ESCAPE, i),
                            s().createElement(
                                'div',
                                { className: Lr.base },
                                s().createElement(Or, { className: Lr.breadcrumbs }),
                                s().createElement(
                                    'div',
                                    { className: Lr.closeButton },
                                    s().createElement(br, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: () => {
                                            a(q.Close, V.Mouse), u.close();
                                        },
                                    }),
                                ),
                            )
                        );
                    }),
                    Ir = 'App_base_62',
                    $r = 'App_base__loaded_08',
                    Hr = 'App_navigation_75',
                    Ur = 'App_wrapper_28',
                    zr = 'App_content_05',
                    Gr = 'App_hint_b5',
                    Wr = (0, z.Pi)(() => {
                        const e = ke().model,
                            u = e.computes.isHintVisible,
                            t = (0, r.useState)(!1),
                            n = t[0],
                            a = t[1],
                            i = (() => {
                                const e = J(G);
                                return (u, t) => e({ action: W.Display, parentScreen: j.Catalog, item: u, info: t });
                            })();
                        var o, l;
                        return (
                            (o = () => {
                                a(!0);
                            }),
                            (0, r.useEffect)(() => {
                                let e = null;
                                return (
                                    (e = requestAnimationFrame(() => {
                                        e = requestAnimationFrame(() => {
                                            (e = null), o();
                                        });
                                    })),
                                    () => {
                                        null !== e && cancelAnimationFrame(e);
                                    }
                                );
                            }, l),
                            (0, r.useEffect)(() => {
                                n && H(R.sounds.ach_to_catalog());
                            }, [n]),
                            (0, r.useEffect)(() => {
                                u() && i(q.TriggerHint, e.computes.getBreadcrumbsChain());
                            }, [i, u, e.computes]),
                            s().createElement(
                                'div',
                                { className: h()(Ir, n && $r) },
                                s().createElement('div', { className: Hr }, s().createElement(Mr, null)),
                                s().createElement(
                                    'div',
                                    { className: Ur },
                                    s().createElement(Er, { className: zr }),
                                    e.computes.isHintVisible() && s().createElement(Cr, { className: Gr }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    $().render(
                        s().createElement(M, null, s().createElement(Te, null, s().createElement(Wr, null))),
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], r = !0, s = 0; s < u.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 637),
        (() => {
            var e = { 637: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        (a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [549], () => __webpack_require__(3945));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
