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
                        displayStatusIs: () => b,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => g,
                        getSize: () => m,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => B,
                        isFocused: () => p,
                        pxToRem: () => F,
                        remToPx: () => h,
                        resize: () => E,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => k,
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
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: h(u.x), y: h(u.y) };
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
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function D() {
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
                    k = Promise.all([
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
                var m = t(5521),
                    E = t(3138);
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
                    f = () => h(i.CLOSE),
                    p = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var C = t(7572);
                const B = a.instance,
                    D = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => h(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => h(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                m = o.height,
                                _ = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(m),
                                };
                            h(i.POP_OVER, {
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
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, f);
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
                        ClickOutsideManager: B,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = D;
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
            2771: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => Bn,
                        Bar: () => fn,
                        DefaultScroll: () => Cn,
                        Direction: () => tn,
                        defaultSettings: () => nn,
                        useHorizontalScrollApi: () => rn,
                    });
                var a = {};
                t.r(a), t.d(a, { Area: () => Wn, Bar: () => In, Default: () => Pn, useVerticalScrollApi: () => Dn });
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
                const m = o.O.client.getSize('rem'),
                    E = m.width,
                    _ = m.height,
                    A = Object.assign({ width: E, height: _ }, d(E, _, l)),
                    g = (0, r.createContext)(A),
                    F = ['children'];
                const h = (e) => {
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
                        m = n.largeWidth,
                        E = n.mediumWidth,
                        _ = n.smallWidth,
                        A = n.extraSmallWidth,
                        h = n.extraLargeHeight,
                        f = n.largeHeight,
                        p = n.mediumHeight,
                        C = n.smallHeight,
                        B = n.extraSmallHeight,
                        D = { extraLarge: h, large: f, medium: p, small: C, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && a) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return i(u, t, D);
                        if (t.largeWidth && m) return i(u, t, D);
                        if (t.mediumWidth && E) return i(u, t, D);
                        if (t.smallWidth && _) return i(u, t, D);
                        if (t.extraSmallWidth && A) return i(u, t, D);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && h) return u;
                            if (t.largeHeight && f) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                };
                h.defaultProps = {
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
                (0, r.memo)(h);
                const f = (e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    p = ({ children: e }) => {
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
                        f(() => {
                            o.O.client.events.on('clientResized', i), o.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', i),
                                        o.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [i, c],
                            );
                        const m = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return s().createElement(g.Provider, { value: m }, e);
                    };
                var C = t(6483),
                    B = t.n(C),
                    D = t(926),
                    v = t.n(D);
                let b, w, k;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
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
                    })(k || (k = {}));
                const y = () => {
                        const e = (0, r.useContext)(g),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
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
                            a = ((e) => {
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
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return k.ExtraLarge;
                                    case e.largeHeight:
                                        return k.Large;
                                    case e.mediumHeight:
                                        return k.Medium;
                                    case e.smallHeight:
                                        return k.Small;
                                    case e.extraSmallHeight:
                                        return k.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), k.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
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
                        [k.ExtraSmall]: '',
                        [k.Small]: v().SMALL_HEIGHT,
                        [k.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [k.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [k.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL,
                        [b.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [b.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [b.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    M = (e) => {
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
                        const a = y(),
                            r = a.mediaWidth,
                            i = a.mediaHeight,
                            o = a.mediaSize;
                        return s().createElement('div', S({ className: B()(t, T[r], L[i], N[o]) }, n), u);
                    },
                    O = ['children'];
                const I = (e) => {
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
                    return s().createElement(p, null, s().createElement(M, t, u));
                };
                var H = t(493),
                    P = t.n(H),
                    W = t(5521),
                    z = t(9916);
                const G = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function j(e = W.n.NONE, u = G, t = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== W.n.NONE)
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
                var U = t(3403);
                const V = [
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
                function $(e) {
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
                const Y = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: z.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    q = (e) => {
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
                            m = void 0 !== d && d,
                            E = e.decoratorId,
                            _ = void 0 === E ? 0 : E,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            h = void 0 === F ? 0 : F,
                            f = e.onShow,
                            p = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, V);
                        const B = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, r.useMemo)(
                                () =>
                                    h ||
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
                                [h],
                            ),
                            v = (0, r.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (Y(t, _, { isMouseEvent: !0, on: !0, arguments: $(n) }, D),
                                    f && f(),
                                    (B.current.isVisible = !0));
                            }, [t, _, n, D, f]),
                            b = (0, r.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        Y(t, _, { on: !1 }, D),
                                        B.current.isVisible && p && p(),
                                        (B.current.isVisible = !1);
                                }
                            }, [t, _, D, p]),
                            w = (0, r.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === g && b();
                            }, [g, b]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            );
                        return g
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      a && a(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              b(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === m && b(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === m && b(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : u;
                        var k;
                    },
                    K = ['children'];
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                const Z = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, K);
                        return s().createElement(
                            q,
                            X(
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
                    J = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Q() {
                    return (
                        (Q =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Q.apply(this, arguments)
                    );
                }
                const ee = R.views.common.tooltip_window.simple_tooltip_content,
                    ue = (e) => {
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
                            })(e, J);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: a, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, a, o]);
                        return s().createElement(
                            q,
                            Q(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? ee.SimpleTooltipHtmlContent('resId') : ee.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function te() {
                    return (
                        (te =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        te.apply(this, arguments)
                    );
                }
                const ne = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = s().createElement('div', { className: t }, e);
                    if (u.header || u.body) return s().createElement(ue, u, n);
                    const a = u.contentId;
                    return a ? s().createElement(q, te({}, u, { contentId: a }), n) : s().createElement(Z, u, n);
                };
                var ae = t(8045);
                const re = 'ExtendedText_base_71',
                    se = 'ExtendedText_base__zeroPadding_25',
                    ie = 'ExtendedText_base__isTruncationAvailable_5b',
                    oe = 'ExtendedText_truncated_97',
                    le = 'ExtendedText_truncated__hide_31',
                    ce = 'ExtendedText_unTruncated_b8';
                t(1281);
                let de;
                function me(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function Ee(e) {
                    return e.replace(/-/g, '_');
                }
                function _e(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(de || (de = {}));
                const Ae = (e) => e.replace(/&nbsp;/g, ' '),
                    ge =
                        ((() => {
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
                        })(),
                        (e) => me(R.strings.common.percentValue(), { value: e }));
                let Fe, he, fe;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Fe || (Fe = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(he || (he = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(fe || (fe = {}));
                const pe = { [fe.NBSP]: Fe.NoBreakSymbol, [fe.ZWNBSP]: Fe.NoBreakSymbol, [fe.NEW_LINE]: Fe.LineBreak },
                    Ce = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Be = {
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
                    De = 'renderers_noBreakWrapper_10',
                    ve = 'renderers_lineBreak_b5',
                    be = 'renderers_newLine_bd',
                    we = 'renderers_word_f3',
                    ke = (e) => ({ color: `#${e}` }),
                    ye = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? Be[n]
                                ? s().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: B()(we, Be[n]) },
                                      e,
                                  )
                                : s().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: we, style: ke(n) },
                                      e,
                                  )
                            : s().createElement('span', { key: t, 'data-block-type': u.blockType, className: we }, e);
                    },
                    xe = {
                        [Fe.Word]: ye,
                        [Fe.NoBreakSymbol]: ye,
                        [Fe.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            s().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => s().createElement(s().Fragment, { key: t }, e)),
                            ),
                        [Fe.LineBreak]: ({ key: e }) =>
                            s().createElement('span', { key: e, 'data-block-type': Fe.LineBreak, className: ve }),
                        [Fe.NewLine]: ({ elementList: e, key: u }) =>
                            s().createElement('span', { key: u, 'data-block-type': Fe.NewLine, className: be }, e),
                        [Fe.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            s().createElement(
                                'span',
                                { key: u, 'data-block-type': Fe.NoBreakWrapper, className: De },
                                e,
                            ),
                    },
                    Se = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const s = `${t}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        u = e.blockType,
                                        t = Se(e, xe[u], s);
                                    n.push(...t);
                                } else n.push(u({ elementList: [a], textBlock: e, key: s }));
                            }),
                            n
                        );
                    },
                    Te = (e) => {
                        const u = [];
                        return (
                            e.forEach((e, t) => {
                                u.push(
                                    ...((e, u) => {
                                        const t = [],
                                            n = e.blockType,
                                            a = xe[n],
                                            r = Se(e, a, u);
                                        return (
                                            n === Fe.NoBreakWrapper
                                                ? t.push(a({ elementList: r, textBlock: e, key: `${u}` }))
                                                : t.push(...r),
                                            t
                                        );
                                    })(e, t),
                                );
                            }),
                            u
                        );
                    },
                    Le = (e, u, t, n) => {
                        let a = u.exec(e),
                            r = 0;
                        for (; a; ) r !== a.index && t(e.slice(r, a.index)), n(a), (r = u.lastIndex), (a = u.exec(e));
                        r !== e.length && t(e.slice(r));
                    },
                    Ne = Ce
                        ? (e) => {
                              const u = [];
                              return (
                                  Le(
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
                                                      Le(
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
                    Me = (e, u = '') => {
                        const t = [];
                        return (
                            Le(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    t.push({ blockType: Fe.Word, colorTag: u, childList: Ne(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        a = pe[n.charAt(0)];
                                    a === Fe.LineBreak
                                        ? t.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: Fe.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: Fe.NewLine,
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
                    Re = (e, u, t = '') => {
                        const n = [];
                        return (
                            Le(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...Me(e, t));
                                },
                                (e) => {
                                    const a = e[1],
                                        r = void 0 === u[a] ? e[0] : u[a];
                                    'string' == typeof r || 'number' == typeof r
                                        ? n.push(...Me(String(r), t))
                                        : n.push({ blockType: Fe.Binding, colorTag: t, childList: [r] });
                                },
                            ),
                            n
                        );
                    },
                    Oe = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === Fe.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: Fe.NoBreakWrapper, colorTag: '', childList: [u, n] });
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
                                    e.blockType === Fe.NoBreakSymbol
                                        ? ((t = !0), u.push(...Oe(u.pop(), e)))
                                        : (t ? u.push(...Oe(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u) => {
                                const t = [];
                                return (
                                    Le(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            t.push(...Re(e, u));
                                        },
                                        (e) => {
                                            t.push(...Re(e[2], u, e[1]));
                                        },
                                    ),
                                    t
                                );
                            })(Ae(e).replace(/&zwnbsp;/g, '\ufeff'), u),
                        );
                        return Te(t);
                    },
                    He = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    Pe = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    We = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = Pe(e, u),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            s = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / r);
                            return n >= t ? [!0, t + s] : [!1, n];
                        }
                        const i = Math.max(t + s, 0);
                        return a < i ? [!1, 0] : [!0, i];
                    },
                    ze = (e, u, t, n, a, r) => {
                        let i = -1,
                            o = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Fe.LineBreak || c === Fe.NewLine || c === Fe.Binding) continue;
                            const d = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = We(t, n, a),
                                    c = e[0],
                                    m = e[1];
                                if (!c) {
                                    m > 0 && (a -= m);
                                    continue;
                                }
                                const E = d.slice(0, d.length - m) + r,
                                    _ = u[l];
                                (o = s().cloneElement(_, _.props, E)), (i = l);
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    m = c.props.children,
                                    E = ze(e, m, e.length - 1, n, a, r),
                                    _ = E[0],
                                    A = E[1];
                                if (!(_ < 0)) {
                                    const e = m.slice(0, _);
                                    (o = s().cloneElement(c, c.props, e, A)), (i = l);
                                    break;
                                }
                                a -= d.length;
                            }
                        }
                        return [i, o];
                    },
                    Ge = (e, u, t, n = '...') => {
                        const a = [...u],
                            r = e.current;
                        if (!r) return [a, !1];
                        const s = t.height,
                            i = t.width,
                            o = r.lastElementChild;
                        if (!He(o, s) && Pe(o, i) <= 0) return [a, !1];
                        const l = r.children,
                            c = ((e, u) => {
                                let t = 0,
                                    n = e.length - 1;
                                for (; n - t >= 0; ) {
                                    const a = t + Math.ceil(0.5 * (n - t));
                                    He(e[a], u) ? (n = a - 1) : (t = a + 1);
                                }
                                return t - 1;
                            })(l, s);
                        if (c < 0) return [a, !1];
                        const d = ze(l, a, c, i, n.length, n),
                            m = d[0],
                            E = d[1];
                        return E && (a.splice(m, 1, E), a.splice(m + 1)), [a, !0];
                    },
                    je = s().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: n,
                            isTooltipEnable: a = !1,
                            isTruncationAvailable: i = !1,
                            targetId: o,
                            justifyContent: l = he.FlexStart,
                            alignContent: c = he.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const m = (0, r.useRef)(null),
                                E = (0, r.useRef)({ height: 0, width: 0 }),
                                _ = (0, r.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = _[0],
                                g = _[1],
                                F = (0, r.useMemo)(() => Ie(e, n), [n, e]),
                                h = (0, r.useMemo)(() => {
                                    if (
                                        a &&
                                        A.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: { text: e, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [n, a, o, e, A.isTruncated]),
                                f = (0, r.useCallback)(
                                    (e) => {
                                        (E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height);
                                        const u = Ge(m, F, E.current, d),
                                            n = u[0],
                                            a = u[1];
                                        g({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), t && t(a);
                                    },
                                    [t, d, F],
                                ),
                                p = (0, r.useMemo)(() => ({ justifyContent: l, alignContent: c }), [c, l]);
                            return (
                                ((e, u, t = !0) => {
                                    const n = (0, r.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, r.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new ae.Z((e) => n(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [n, t, e]);
                                })(m, f, i),
                                s().createElement(
                                    'div',
                                    { className: B()(re, u, se, i && ie), style: p },
                                    s().createElement('div', { className: ce, ref: m }, F),
                                    s().createElement(
                                        ne,
                                        { tooltipArgs: h },
                                        s().createElement(
                                            'div',
                                            { className: B()(oe, !A.isTruncateFinished && i && le), style: p },
                                            A.isTruncateFinished && i ? A.elementList : F,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Ue = {
                        base: 'ListHeader_base_ad',
                        title: 'ListHeader_title_a8',
                        base__memberChange: 'ListHeader_base__memberChange_c2',
                        base__tankChange: 'ListHeader_base__tankChange_fb',
                        base__personalData: 'ListHeader_base__personalData_aa',
                    };
                let Ve;
                !(function (e) {
                    (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(Ve || (Ve = {}));
                const $e = ({ title: e, theme: u = Ve.Barracks, className: t, children: n }) =>
                    s().createElement(
                        'div',
                        { className: B()(Ue.base, Ue[`base__${u}`], t) },
                        s().createElement('div', { className: Ue.title }, e),
                        n,
                    );
                function Ye(e) {
                    engine.call('PlaySound', e);
                }
                const qe = {
                        playHighlight() {
                            Ye('highlight');
                        },
                        playClick() {
                            Ye('play');
                        },
                        playYes() {
                            Ye('yes1');
                        },
                    },
                    Ke = {
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
                    Xe = [
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
                function Ze() {
                    return (
                        (Ze =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ze.apply(this, arguments)
                    );
                }
                class Je extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Ye(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Ye(this.props.soundClick);
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
                            m =
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
                                })(e, Xe)),
                            E = B()(Ke.base, Ke[`base__${r}`], Ke[`base__${a}`], null == i ? void 0 : i.base),
                            _ = B()(Ke.icon, Ke[`icon__${r}`], Ke[`icon__${a}`], null == i ? void 0 : i.icon),
                            A = B()(Ke.glow, null == i ? void 0 : i.glow),
                            g = B()(Ke.caption, Ke[`caption__${r}`], null == i ? void 0 : i.caption),
                            F = B()(Ke.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            Ze(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== r && s().createElement('div', { className: Ke.shine }),
                            s().createElement('div', { className: _ }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: g }, u),
                            n && s().createElement('div', { className: F }, n),
                        );
                    }
                }
                Je.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Qe = ({ onClick: e }) =>
                        s().createElement(Je, {
                            onClick: e,
                            caption: R.strings.crew.common.navigation.aboutCrew(),
                            type: 'info',
                        }),
                    eu = 'common_close_0e',
                    uu = ({ onClick: e, label: u = R.strings.menu.viewHeader.closeBtn.label() }) =>
                        s().createElement(Je, {
                            onClick: e,
                            classNames: { base: eu },
                            caption: u,
                            type: 'close',
                            side: 'right',
                        }),
                    tu = 'TopButtons_base_ef',
                    nu = 'TopButtons_leftButtons_9e',
                    au = 'TopButtons_rightButtons_33',
                    ru = s().memo(function ({
                        backButtonLabel: e,
                        closeButtonLabel: u = R.strings.menu.viewHeader.closeBtn.label(),
                        onBackClick: t,
                        onAboutClick: n,
                        onCloseClick: a,
                        className: r,
                        classNames: i,
                    }) {
                        return s().createElement(
                            'div',
                            { className: B()(tu, r) },
                            e &&
                                t &&
                                s().createElement(
                                    'div',
                                    { className: B()(nu, null == i ? void 0 : i.leftButtons) },
                                    s().createElement(Je, { onClick: t, caption: e, type: 'back' }),
                                ),
                            s().createElement(
                                'div',
                                { className: B()(au, null == i ? void 0 : i.rightButtons) },
                                n && s().createElement(Qe, { onClick: n }),
                                a && s().createElement(uu, { onClick: a, label: u }),
                            ),
                        );
                    });
                function su() {
                    return !1;
                }
                console.log;
                var iu = t(9174);
                function ou(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return lu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return lu(e, u);
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
                function lu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const cu = (e) => (0 === e ? window : window.subViews.get(e));
                function du(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                var mu = t(3946);
                const Eu = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: a, children: i, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    d = (t, n, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = cu,
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
                                                        for (var e, t = ou(a.keys()); !(e = t()).done; ) r(e.value, u);
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
                                            m = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = iu.LO.box(n, { equals: su });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, iu.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = iu.LO.box(n, { equals: su });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, iu.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = iu.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, iu.aD)((u) => {
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
                                                                    (e, [u, t]) => ((e[t] = iu.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, iu.aD)((e) => {
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
                                            E = { mode: t, model: m, externalModel: i, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === t && a ? a.controls(E) : u(E),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    m = (0, r.useRef)(!1),
                                    E = (0, r.useState)(n),
                                    _ = E[0],
                                    A = E[1],
                                    g = (0, r.useState)(() => d(n, a, l)),
                                    F = g[0],
                                    h = g[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        m.current ? h(d(_, a, l)) : (m.current = !0);
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
                            const u = e.primitives(['itemsAmount', 'itemsOffset']),
                                t = e.array('tankmanList'),
                                n = (0, mu.Om)((e) => {
                                    const n = e - u.itemsOffset.get(),
                                        a = t.get();
                                    if (n >= 0 && n < a.length) return du(a, n);
                                });
                            return Object.assign({ tankmanList: t }, u, { computes: { getTankman: n } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            confirm: e.createCallbackNoArgs('onConfirm'),
                            loadCards: e.createCallback((e, u) => ({ limit: e, offset: u }), 'onLoadCards'),
                        }),
                    ),
                    _u = Eu[0],
                    Au = Eu[1],
                    gu = {
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
                let Fu, hu;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Fu || (Fu = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(hu || (hu = {}));
                const fu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: a,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: E,
                    onMouseLeave: _,
                    onClick: A,
                }) => {
                    const g = (0, r.useRef)(null),
                        F = (0, r.useState)(t),
                        h = F[0],
                        f = F[1],
                        p = (0, r.useState)(!1),
                        C = p[0],
                        D = p[1],
                        v = (0, r.useState)(!1),
                        b = v[0],
                        w = v[1],
                        k = (0, r.useCallback)(() => {
                            a || (g.current && (g.current.focus(), f(!0)));
                        }, [a]),
                        y = (0, r.useCallback)(
                            (e) => {
                                h && null !== g.current && !g.current.contains(e.target) && f(!1);
                            },
                            [h],
                        ),
                        x = (0, r.useCallback)(
                            (e) => {
                                a || (A && A(e));
                            },
                            [a, A],
                        ),
                        S = (0, r.useCallback)(
                            (e) => {
                                a || (null !== o && Ye(o), c && c(e), w(!0));
                            },
                            [a, o, c],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        L = (0, r.useCallback)(
                            (e) => {
                                a || (E && E(e), D(!1));
                            },
                            [a, E],
                        ),
                        N = (0, r.useCallback)(
                            (e) => {
                                a || (null !== l && Ye(l), m && m(e), t && k(), D(!0));
                            },
                            [a, l, m, k, t],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                a || (_ && _(e), D(!1));
                            },
                            [a, _],
                        ),
                        O = B()(
                            gu.base,
                            gu[`base__${n}`],
                            {
                                [gu.base__disabled]: a,
                                [gu[`base__${u}`]]: u,
                                [gu.base__focus]: h,
                                [gu.base__highlightActive]: C,
                                [gu.base__firstHover]: b,
                            },
                            i,
                        ),
                        I = B()(gu.state, gu.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, r.useEffect)(() => {
                            f(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: g,
                                className: O,
                                onMouseEnter: S,
                                onMouseMove: T,
                                onMouseUp: L,
                                onMouseDown: N,
                                onMouseLeave: M,
                                onClick: x,
                            },
                            n !== Fu.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: gu.back }),
                                    s().createElement('span', { className: gu.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: I },
                                s().createElement('span', { className: gu.stateDisabled }),
                                s().createElement('span', { className: gu.stateHighlightHover }),
                                s().createElement('span', { className: gu.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: gu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                fu.defaultProps = { type: Fu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const pu = (0, r.memo)(fu);
                let Cu, Bu, Du, vu, bu;
                !(function (e) {
                    (e.Any = 'any'),
                        (e.Commander = 'commander'),
                        (e.Radioman = 'radioman'),
                        (e.Driver = 'driver'),
                        (e.Gunner = 'gunner'),
                        (e.Loader = 'loader');
                })(Cu || (Cu = {})),
                    (function (e) {
                        (e.InBarracks = 'in_barracks'), (e.InTank = 'in_tank'), (e.Dismissed = 'dismissed');
                    })(Bu || (Bu = {})),
                    (function (e) {
                        (e.Tankman = 'tankman'), (e.Recruit = 'recruit'), (e.Dismissed = 'dismissed');
                    })(Du || (Du = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled');
                    })(vu || (vu = {})),
                    (function (e) {
                        (e.IsLockCrew = 'isLockCrew'), (e.TankmanHasRole = 'tankmanHasRole');
                    })(bu || (bu = {}));
                let wu;
                !(function (e) {
                    (e.BlackReal = 'blackReal'),
                        (e.WhiteReal = 'whiteReal'),
                        (e.White = 'white'),
                        (e.WhiteOrange = 'whiteOrange'),
                        (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Par = 'par'),
                        (e.ParSecondary = 'parSecondary'),
                        (e.ParTertiary = 'parTertiary'),
                        (e.Red = 'red'),
                        (e.RedDark = 'redDark'),
                        (e.Yellow = 'yellow'),
                        (e.Orange = 'orange'),
                        (e.Cream = 'cream'),
                        (e.Brown = 'brown'),
                        (e.GreenBright = 'greenBright'),
                        (e.Green = 'green'),
                        (e.GreenDark = 'greenDark'),
                        (e.BlueBooster = 'blueBooster'),
                        (e.BlueTeamkiller = 'blueTeamkiller'),
                        (e.Cred = 'cred'),
                        (e.Gold = 'gold'),
                        (e.Bond = 'bond'),
                        (e.Prom = 'prom');
                })(wu || (wu = {}));
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let ku;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(ku || (ku = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let yu;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(yu || (yu = {}));
                let xu;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(xu || (xu = {}));
                const Su = (e) => (-1 === e ? xu.Untrained : e < 1 ? xu.Low : xu.Normal);
                function Tu(e, u, t, n) {
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
                }
                function Lu(e, u, t, n = !1) {
                    const a = (0, r.useMemo)(
                        () =>
                            (function (e, u, t) {
                                return void 0 === t ? Tu(e, u, !1) : Tu(e, t, !1 !== u);
                            })(t, n, e),
                        u,
                    );
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                }
                const Nu = {
                    base: 'TankmanIcon_base_f9',
                    base__big: 'TankmanIcon_base__big_98',
                    base__small: 'TankmanIcon_base__small_b2',
                    base__barracks: 'TankmanIcon_base__barracks_62',
                    base__special: 'TankmanIcon_base__special_3f',
                    base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                };
                let Mu;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(Mu || (Mu = {}));
                const Ru = ({ name: e, size: u = Mu.c100x60, classMix: t, isSkin: n = !1 }) => {
                        const a = (0, r.useMemo)(() => {
                            try {
                                let t = R.images.gui.maps.icons.tankmen.icons.$dyn(u);
                                n && (t = t.$dyn('crewSkins'));
                                const a = t.$dyn(Ee(e));
                                if (!a) throw Error;
                                return { backgroundImage: `url(${a})` };
                            } catch (u) {
                                console.error('Cant find resource in TankmanIcon: ', e);
                            }
                        }, [e, u, n]);
                        return s().createElement('div', { style: a, className: B()(Nu.base, Nu[`base__${u}`], t) });
                    },
                    Ou = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Iu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Hu = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Pu = (e) =>
                        Hu
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = Iu.length - 1; t >= 0; t--)
                                      for (; e >= Iu[t]; ) (u += Ou[t]), (e -= Iu[t]);
                                  return u;
                              })(e),
                    Wu = (e, u) => e.split(',').includes(u),
                    zu = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__extraSmall: 'TankName_type__extraSmall_80',
                        type__medium: 'TankName_type__medium_ff',
                        type__big: 'TankName_type__big_9a',
                        type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                        type__eliteMedium: 'TankName_type__eliteMedium_10',
                        type__eliteBig: 'TankName_type__eliteBig_ac',
                        name: 'TankName_name_56',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let Gu, ju;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Gu || (Gu = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(ju || (ju = {}));
                const Uu = ({
                        isElite: e,
                        vehicleName: u,
                        vehicleShortName: t,
                        vehicleType: n,
                        vehicleLvl: a,
                        tags: r = '',
                        size: i = Gu.extraSmall,
                        type: o = ju.colored,
                        className: l,
                        classNames: c,
                        isShortName: d = !1,
                    }) => {
                        const m = `${Ee(n)}${e ? '_elite' : ''}`,
                            E = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return s().createElement(
                            'div',
                            { className: B()(zu.base, zu[`base__size${_e(i)}`], zu[`base__type${_e(o)}`], l) },
                            s().createElement('div', { className: B()(zu.level, null == c ? void 0 : c.level) }, Pu(a)),
                            s().createElement('div', {
                                className: B()(
                                    zu.type,
                                    e && zu[`type__elite${_e(i)}`],
                                    zu[`type__${i}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: { backgroundImage: `url(${E})` },
                            }),
                            Wu(r, 'premiumIGR') && s().createElement('div', { className: zu.premiumIGR }),
                            s().createElement(
                                'div',
                                { className: B()(zu.name, null == c ? void 0 : c.name) },
                                d ? t : u,
                            ),
                        );
                    },
                    Vu = 'Content_base_48',
                    $u = 'Content_name_7b',
                    Yu = 'Content_specializationInfo_ac',
                    qu = 'Content_recruitLabel_17';
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
                const Xu = ({ fullUserName: e, isRecruit: u, tankmanVehicleInfo: t, className: n }) =>
                    s().createElement(
                        'div',
                        { className: B()(Vu, n) },
                        s().createElement('div', { className: $u }, e),
                        s().createElement(
                            'div',
                            { className: Yu },
                            u
                                ? s().createElement('div', { className: qu }, R.strings.crew.tankman.recruit())
                                : s().createElement(Uu, Ku({}, t, { type: ju.whiteSpanish, isShortName: !0 })),
                        ),
                    );
                var Zu = t(8613);
                const Ju = 60,
                    Qu = 3600,
                    et = 86400;
                Date.now(), Zu.Ew.getRegionalDateTime, Zu.Ew.getFormattedDateTime;
                const ut = (0, r.memo)(({ duration: e }) => {
                        const u =
                            e >= 0
                                ? (t = (function (e = 0) {
                                      let u = e;
                                      const t = Math.trunc(u / et);
                                      u -= t * et;
                                      const n = Math.trunc(u / Qu);
                                      u -= n * Qu;
                                      const a = Math.trunc(u / Ju);
                                      return (u -= a * Ju), { days: t, hours: n, minutes: a, seconds: u };
                                  })(e)).days > 0
                                    ? me(R.strings.common.duration.days(), { days: t.days })
                                    : t.hours > 0
                                      ? me(R.strings.common.duration.hours(), { hours: t.hours })
                                      : t.minutes > 0
                                        ? me(R.strings.common.duration.minutes(), { minutes: t.minutes })
                                        : me(R.strings.common.duration.seconds(), { seconds: t.seconds })
                                : R.strings.common.duration.unlimited();
                        var t;
                        return s().createElement('span', null, u);
                    }),
                    tt = () => {},
                    nt = (e = 0, u, t = 0, n = tt) => {
                        const a = (0, r.useState)(e),
                            s = a[0],
                            i = a[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e > 0) {
                                    i(e);
                                    const a = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - a) / 1e3);
                                                null !== t && u <= t ? (i(t), n && n(), clearInterval(r)) : i(u);
                                            },
                                            1e3 * (u || (e > 120 ? Ju : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, u, t, n]),
                            s
                        );
                    };
                z.Sw.instance;
                let at;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(at || (at = {}));
                z.Sw.instance;
                const rt = nt,
                    st = 'DismissedCountdown_base_12',
                    it = 'DismissedCountdown_icon_e6',
                    ot = 'DismissedCountdown_label_92',
                    lt = s().memo(function ({ duration: e, className: u }) {
                        const t = rt(e, 1);
                        return s().createElement(
                            'div',
                            { className: B()(st, u) },
                            s().createElement('div', { className: it }),
                            s().createElement('div', { className: ot }, s().createElement(ut, { duration: t })),
                        );
                    }),
                    ct = 'Location_base_4d',
                    dt = 'Location_duration_5d',
                    mt = 'Location_icon_eb',
                    Et = s().memo(function ({ location: e, className: u, timeToDismiss: t }) {
                        return s().createElement(
                            'div',
                            { className: B()(ct, u) },
                            e === Bu.Dismissed && s().createElement(lt, { className: dt, duration: t }),
                            e !== Bu.InBarracks &&
                                s().createElement('div', {
                                    className: mt,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.location.${e})`,
                                    },
                                }),
                        );
                    });
                let _t, At;
                !(function (e) {
                    (e.Default = 'default'), (e.Selected = 'selected'), (e.InBattle = 'in_battle');
                })(_t || (_t = {})),
                    (function (e) {
                        (e.White = 'white'), (e.Red = 'red');
                    })(At || (At = {}));
                const gt = 'Role_base_68',
                    Ft = s().memo(function ({ role: e, className: u, roleIconColor: t = At.White }) {
                        return s().createElement('div', {
                            className: B()(gt, u),
                            style: { backgroundImage: `url(R.images.gui.maps.icons.tankmen.roles.opaque.${t}.${e})` },
                        });
                    }),
                    ht = (e, u) => {
                        const t = [];
                        for (let n = 0; n < e; n++) t.push(u(n));
                        return t;
                    },
                    ft = 'EfficiencyIndicator_base_34',
                    pt = 'EfficiencyIndicator_percent_6b',
                    Ct = 'EfficiencyIndicator_percent__full_30',
                    Bt = 'EfficiencyIndicator_icon_da',
                    Dt = (0, r.memo)(({ efficiencyValue: e, tankmanID: u = -1, className: t }) => {
                        const n = -1 === e,
                            a = n
                                ? { tooltipId: 'crewSkillUntrained' }
                                : { tooltipId: 'skillsEfficiency', tankmanID: u };
                        return s().createElement(
                            Z,
                            { targetId: R.views.lobby.crew.widgets.CrewWidget('resId'), args: a, isEnabled: -1 !== u },
                            s().createElement(
                                'div',
                                { className: B()(ft, t) },
                                n
                                    ? s().createElement('div', { className: Bt })
                                    : s().createElement(
                                          'div',
                                          { className: B()(pt, 1 === e && Ct) },
                                          ge(z.Z5.getNumberFormat(100 * e, z.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    });
                let vt;
                !(function (e) {
                    (e.New = 'new'),
                        (e.Learned = 'learned'),
                        (e.Learning = 'learning'),
                        (e.Irrelevant = 'irrelevant'),
                        (e.Possible = 'possible');
                })(vt || (vt = {}));
                const bt = {
                    base: 'SkillIcon_base_43',
                    base__small: 'SkillIcon_base__small_d0',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let wt;
                !(function (e) {
                    (e.c14x14 = 'small'),
                        (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c180x135 = 'dialogs');
                })(wt || (wt = {}));
                const kt = s().memo(function ({ iconName: e, size: u = wt.c24x24, className: t }) {
                        var n;
                        return s().createElement('div', {
                            style: {
                                backgroundImage: `url(${null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(u)) ? void 0 : n.$dyn(e)})`,
                            },
                            className: B()(bt.base, bt[`base__${u}`], t),
                        });
                    }),
                    yt = {
                        base: 'TankmanSkill_base_84',
                        base__big: 'TankmanSkill_base__big_a0',
                        background: 'TankmanSkill_background_e5',
                        background__grey: 'TankmanSkill_background__grey_49',
                        background__lightYellow: 'TankmanSkill_background__lightYellow_9f',
                        background__yellow: 'TankmanSkill_background__yellow_e2',
                        background__red: 'TankmanSkill_background__red_ca',
                        container: 'TankmanSkill_container_84',
                        disabledIcon: 'TankmanSkill_disabledIcon_25',
                        disabled: 'TankmanSkill_disabled_ba',
                    };
                let xt;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(xt || (xt = {}));
                const St = { [xt.Big]: wt.c22x22, [xt.Small]: wt.c14x14 };
                var Tt;
                !(function (e) {
                    (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                })(Tt || (Tt = {}));
                const Lt = (e, u, t) =>
                        e === vt.Possible || e === vt.New
                            ? Tt.LightYellow
                            : e === vt.Irrelevant
                              ? Tt.Grey
                              : -1 === u
                                ? e === vt.Learning
                                    ? Tt.Yellow
                                    : Tt.Grey
                                : u < 1
                                  ? t
                                      ? Tt.Grey
                                      : Tt.Red
                                  : e === vt.Learning
                                    ? Tt.Yellow
                                    : Tt.Grey,
                    Nt = s().memo(function ({ icon: e, type: u, size: t, efficiency: n = 1, hasInstruction: a = !1 }) {
                        const r = (!a && -1 === n) || u === vt.Irrelevant;
                        return s().createElement(
                            'div',
                            { className: B()(yt.base, yt[`base__${t}`]) },
                            s().createElement('div', {
                                className: B()(yt.background, yt[`background__${Lt(u, n, a)}`]),
                            }),
                            e &&
                                s().createElement(
                                    'div',
                                    { className: yt.container },
                                    s().createElement(kt, {
                                        iconName: e,
                                        size: St[t],
                                        className: B()(r && yt.disabledIcon),
                                    }),
                                    r && s().createElement('div', { className: yt.disabled }),
                                ),
                        );
                    }),
                    Mt = 'Skill_base_a9',
                    Rt = 'Skill_skillLevel_85',
                    Ot = ({ icon: e, type: u, isLevelVisible: t, skillLevel: n, efficiency: a, className: r }) =>
                        s().createElement(
                            'div',
                            { className: B()(Mt, r) },
                            s().createElement(Nt, { icon: e, size: xt.Big, type: u, efficiency: a }),
                            t && s().createElement('div', { className: Rt }, ge(n)),
                        ),
                    It = {
                        base: 'Skills_base_d8',
                        skillsEfficiencyWrapper: 'Skills_skillsEfficiencyWrapper_13',
                        skillsEfficiencyWrapper__singleRow: 'Skills_skillsEfficiencyWrapper__singleRow_c9',
                        skillsEfficiency: 'Skills_skillsEfficiency_10',
                        skillsList: 'Skills_skillsList_85',
                        skillsRow: 'Skills_skillsRow_e6',
                        skill: 'Skills_skill_8e',
                        skill__last: 'Skills_skill__last_8c',
                        skill__collapsed: 'Skills_skill__collapsed_b9',
                        skill__extraCollapsed: 'Skills_skill__extraCollapsed_8a',
                    };
                let Ht;
                !(function (e) {
                    (e.Default = 'default'), (e.Collapsed = 'collapsed'), (e.ExtraCollapsed = 'extraCollapsed');
                })(Ht || (Ht = {}));
                const Pt = ({ lastSkillLevel: e, efficiencyValue: u, skills: t, className: n }) => {
                        const a = Su(u),
                            r = a !== xu.Normal,
                            i = e < 100 && -1 !== e,
                            o = ((e, u, t) => {
                                const n = e ? 8 : 9;
                                let a = Ht.Default,
                                    r = 2,
                                    s = u;
                                return (
                                    u <= n
                                        ? (r = 1)
                                        : u > n && u <= 2 * n
                                          ? (s = n)
                                          : ((s = 14), (a = e && t && u >= 27 ? Ht.ExtraCollapsed : Ht.Collapsed)),
                                    [r, s, a]
                                );
                            })(r, t.length, i),
                            l = o[0],
                            c = o[1],
                            d = o[2];
                        return s().createElement(
                            'div',
                            { className: B()(It.base, n) },
                            r &&
                                s().createElement(
                                    'div',
                                    {
                                        className: B()(
                                            It.skillsEfficiencyWrapper,
                                            1 === l && It.skillsEfficiencyWrapper__singleRow,
                                        ),
                                    },
                                    s().createElement(Dt, { efficiencyValue: u, className: It.skillsEfficiency }),
                                ),
                            s().createElement(
                                'div',
                                { className: It.skillsList },
                                ht(l, (n) =>
                                    s().createElement(
                                        'div',
                                        { key: n, className: It.skillsRow },
                                        ht(Math.min(c, t.length - n * c), (r) => {
                                            const o = r + n * c,
                                                l = o + 1 === t.length,
                                                m = o + 1 === c * (n + 1) || l,
                                                E = du(t, o);
                                            return s().createElement(Ot, {
                                                key: o,
                                                type: E.type,
                                                icon: E.icon,
                                                isLevelVisible: l && i && a !== xu.Low,
                                                className: B()(It.skill, It[`skill__${d}`], m && It.skill__last),
                                                skillLevel: e,
                                                efficiency: u,
                                            });
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Wt = 'ThemeHelper_base_39',
                    zt = 'ThemeHelper_disabledContent_20',
                    Gt = 'ThemeHelper_disabledIcon_95',
                    jt = 'ThemeHelper_disabledTitle_57',
                    Ut = s().memo(function ({ isDisabled: e, className: u, disableReason: t, disableIcon: n }) {
                        return s().createElement(
                            'div',
                            { className: B()(Wt, u) },
                            e &&
                                s().createElement(
                                    'div',
                                    { className: zt },
                                    n &&
                                        s().createElement('div', {
                                            className: Gt,
                                            style: { backgroundImage: `url(${n})` },
                                        }),
                                    s().createElement('div', { className: jt }, t),
                                ),
                        );
                    }),
                    Vt = {
                        base: 'TankmanCard_base_dd',
                        base__hovered: 'TankmanCard_base__hovered_96',
                        base__selected: 'TankmanCard_base__selected_24',
                        base__disabled: 'TankmanCard_base__disabled_1f',
                        themeHelper: 'TankmanCard_themeHelper_78',
                        locationIcon: 'TankmanCard_locationIcon_26',
                        crewRole: 'TankmanCard_crewRole_2e',
                        iconWrapper: 'TankmanCard_iconWrapper_a3',
                        base__isCollapsedOnHover: 'TankmanCard_base__isCollapsedOnHover_5e',
                        flag: 'TankmanCard_flag_78',
                        icon: 'TankmanCard_icon_a5',
                        separatorWrapper: 'TankmanCard_separatorWrapper_fe',
                        separator: 'TankmanCard_separator_73',
                        separator__top: 'TankmanCard_separator__top_72',
                        content: 'TankmanCard_content_0c',
                        skills: 'TankmanCard_skills_ef',
                        helperLayer: 'TankmanCard_helperLayer_09',
                        helperLayer__error: 'TankmanCard_helperLayer__error_2a',
                    },
                    $t = ({
                        tankman: e,
                        isCollapsedOnHover: u = !1,
                        isTooltipEnabled: t = !0,
                        className: n,
                        onClick: a,
                        onMouseDown: i,
                        children: o,
                    }) => {
                        var l, c;
                        const d = e.tankmanKind === Du.Recruit,
                            m = e.cardState === vu.Selected,
                            E = e.cardState === vu.Disabled,
                            _ = ((e, u, t = 150) => {
                                const n = (0, r.useState)(e),
                                    a = n[0],
                                    s = n[1],
                                    i = Lu((e) => s(e), u, t);
                                return {
                                    isHovered: a,
                                    handleMouseEnter: (0, r.useCallback)(() => i(!0), [i]),
                                    handleMouseLeave: (0, r.useCallback)(() => i(!1), [i]),
                                };
                            })(!1, []),
                            A = _.isHovered,
                            g = _.handleMouseEnter,
                            F = _.handleMouseLeave,
                            h = (0, r.useMemo)(() => {
                                if (e.recruitGlowImage && d) return { backgroundImage: `url(${e.recruitGlowImage})` };
                            }, [e.recruitGlowImage, d]);
                        return (
                            (0, r.useEffect)(() => {
                                !A || m || E || (qe.playHighlight(), u && Ye(yu.SHOP_INFO));
                            }, [A, m, E, u]),
                            s().createElement(
                                'div',
                                {
                                    className: B()(
                                        Vt.base,
                                        n,
                                        A && Vt.base__hovered,
                                        u && !E && Vt.base__isCollapsedOnHover,
                                        Vt[`base__${e.cardState}`],
                                    ),
                                    onMouseEnter: () => {
                                        g();
                                    },
                                    onMouseLeave: F,
                                    onMouseDown: i,
                                },
                                s().createElement(Ut, {
                                    isDisabled: E,
                                    disableReason: null != (l = e.disableReason) ? l : void 0,
                                    disableIcon: null != (c = e.disableIcon) ? c : void 0,
                                    className: Vt.themeHelper,
                                }),
                                e.role !== Cu.Any &&
                                    s().createElement(Ft, {
                                        role: e.role,
                                        roleIconColor: e.hasRolePenalty ? At.Red : At.White,
                                        className: Vt.crewRole,
                                    }),
                                s().createElement(Et, {
                                    className: Vt.locationIcon,
                                    location: e.location,
                                    timeToDismiss: e.timeToDismiss,
                                }),
                                s().createElement(
                                    'div',
                                    { className: Vt.iconWrapper, style: h },
                                    e.nation &&
                                        s().createElement('div', {
                                            className: Vt.flag,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.nations.${e.nation})`,
                                            },
                                        }),
                                    s().createElement(Ru, {
                                        name: e.iconName,
                                        size: Mu.c158x118,
                                        classMix: Vt.icon,
                                        isSkin: e.isInSkin,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Vt.separatorWrapper },
                                    s().createElement('div', { className: B()(Vt.separator, Vt.separator__top) }),
                                    s().createElement('div', { className: Vt.separator }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Vt.content },
                                    s().createElement(Xu, {
                                        fullUserName: e.fullUserName,
                                        isRecruit: d,
                                        tankmanVehicleInfo: e.tankmanVehicleInfo,
                                    }),
                                    s().createElement(Pt, {
                                        skills: e.skills,
                                        lastSkillLevel: e.lastSkillLevel,
                                        efficiencyValue: e.skillsEfficiency,
                                        className: Vt.skills,
                                    }),
                                ),
                                s().createElement(
                                    Z,
                                    {
                                        args: {
                                            tooltipId: d ? 'tankmanNotRecruited' : 'tankman',
                                            targetId: d ? e.recruitID : e.tankmanID,
                                        },
                                        isEnabled: t,
                                        ignoreShowDelay: !1,
                                    },
                                    s().createElement('div', {
                                        className: B()(
                                            Vt.helperLayer,
                                            Su(e.skillsEfficiency) === xu.Untrained && !m && Vt.helperLayer__error,
                                        ),
                                        onClick: () => {
                                            E || m || !a || (a(), qe.playClick());
                                        },
                                    }),
                                ),
                                !E && (null == o ? void 0 : o(A)),
                            )
                        );
                    },
                    Yt = (e) => {
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
                    qt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Kt = [];
                function Xt(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), Kt)
                    );
                }
                function Zt(e, u, t = []) {
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
                function Jt(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Qt(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Qt(e, u);
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
                function Qt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const en = () => {
                    const e = (0, r.useMemo)(() => ({}), []),
                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                        t = (e, t) => {
                            u(e).set(t, t);
                        },
                        n = (e, t) => {
                            u(e).delete(t);
                        },
                        a = (e, ...t) => {
                            for (var n, a = Jt(u(e).values()); !(n = a()).done; ) {
                                (0, n.value)(...t);
                            }
                        };
                    return (0, r.useMemo)(() => ({ on: t, off: n, trigger: a }), []);
                };
                var un = t(7030);
                let tn;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(tn || (tn = {}));
                const nn = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    an = ({
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
                            return r <= a ? 0 : qt(a, r, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? nn : c,
                                m = (0, r.useRef)(null),
                                E = (0, r.useRef)(null),
                                _ = en(),
                                A = (function (e, u, t) {
                                    const n = (0, r.useMemo)(() => Tu(t, e), u);
                                    return (0, r.useEffect)(() => n.cancel, [n]), n;
                                })(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, un.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), _.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                F = g[0],
                                h = g[1],
                                f = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const a = F.scrollPosition.get(),
                                            r = (null != (n = F.scrollPosition.goal) ? n : 0) - a;
                                        return i(e, u * t + r + a);
                                    },
                                    [F.scrollPosition],
                                ),
                                p = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            h.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: d.animationConfig,
                                                from: { scrollPosition: i(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [h, d.animationConfig, F.scrollPosition],
                                ),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, d.step),
                                            r = f(u, e, n);
                                        p(r);
                                    },
                                    [p, f, d.step],
                                ),
                                B = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(n(e)),
                                            m.current && _.trigger('mouseWheel', e, F.scrollPosition, u(m.current));
                                    },
                                    [F.scrollPosition, C, _],
                                ),
                                D = ((e, u = []) => {
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
                                        Yt(() => {
                                            const e = m.current;
                                            e &&
                                                (p(i(e, F.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [p, F.scrollPosition.goal],
                                ),
                                v = Xt(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = i(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && p(u, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? a(E.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? u(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: B,
                                    applyScroll: p,
                                    applyStepTo: C,
                                    contentRef: m,
                                    wrapperRef: E,
                                    scrollPosition: h,
                                    animationScroll: F,
                                    recalculateContent: v,
                                    events: { on: _.on, off: _.off },
                                }),
                                [F.scrollPosition, p, C, _.off, _.on, v, B, h, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    rn = an({
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
                        getDirection: (e) => (e.deltaY > 1 ? tn.Next : tn.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    sn = 'HorizontalBar_base_49',
                    on = 'HorizontalBar_base__nonActive_82',
                    ln = 'HorizontalBar_leftButton_5f',
                    cn = 'HorizontalBar_rightButton_03',
                    dn = 'HorizontalBar_track_0d',
                    mn = 'HorizontalBar_thumb_fd',
                    En = 'HorizontalBar_rail_32',
                    _n = 'disable',
                    An = { pending: !1, offset: 0 },
                    gn = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Fn = () => {},
                    hn = (e, u) => Math.max(20, e.offsetWidth * u),
                    fn = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = gn, onDrag: n = Fn }) => {
                        const a = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            E = (0, r.useState)(An),
                            _ = E[0],
                            A = E[1],
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
                                    o = qt(0, 1, r / (a - n)),
                                    m = (u.offsetWidth - hn(u, s)) * o;
                                (t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return i.current.classList.add(_n), void l.current.classList.remove(_n);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(_n), void l.current.classList.add(_n);
                                            var u, t;
                                            i.current.classList.remove(_n), l.current.classList.remove(_n);
                                        }
                                    })(m);
                            },
                            h = Xt(() => {
                                (() => {
                                    const u = d.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const s = Math.min(1, n / r);
                                    (u.style.width = `${hn(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        a.current &&
                                            (1 === s ? a.current.classList.add(on) : a.current.classList.remove(on));
                                })(),
                                    F();
                            });
                        (0, r.useEffect)(() => Yt(h)),
                            (0, r.useEffect)(
                                () =>
                                    Yt(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = Fn;
                                        const n = () => {
                                            t(), (t = Yt(h));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', h),
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
                                            m = (l / i.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: m });
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        u(), g(An);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, _.offset, _.pending, n, g]);
                        const f = Zt((u) => e.applyStepTo(u), m, [e]),
                            p = f[0],
                            C = f[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const D = (e) => {
                            e.target.classList.contains(_n) || Ye('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()(sn, u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()(ln, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_n) || 0 !== e.button || (Ye('play'), p(tn.Next));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: D,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()(dn, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((Ye('play'), u.target === n))
                                                g({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = d.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? tn.Prev : tn.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                s().createElement('div', { ref: d, className: B()(mn, u.thumb) }),
                                s().createElement('div', { className: B()(En, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: B()(cn, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_n) || 0 !== e.button || (Ye('play'), p(tn.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    pn = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Cn = ({
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
                                return Object.assign({}, e, { base: B()(pn.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: B()(pn.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(pn.defaultScrollArea, a) },
                                s().createElement(Bn, { className: o, api: m, classNames: i }, e),
                            ),
                            s().createElement(fn, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Bn = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, r.useEffect)(() => Yt(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(pn.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: B()(pn.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: B()(pn.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (Bn.Bar = fn), (Bn.Default = Cn);
                const Dn = an({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? tn.Next : tn.Prev),
                    }),
                    vn = 'VerticalBar_base_f3',
                    bn = 'VerticalBar_base__nonActive_42',
                    wn = 'VerticalBar_topButton_d7',
                    kn = 'VerticalBar_bottomButton_06',
                    yn = 'VerticalBar_track_df',
                    xn = 'VerticalBar_thumb_32',
                    Sn = 'VerticalBar_rail_43',
                    Tn = 'disable',
                    Ln = () => {},
                    Nn = { pending: !1, offset: 0 },
                    Mn = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Rn = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    On = (e, u) => Math.max(20, e.offsetHeight * u),
                    In = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Mn, onDrag: n = Ln }) => {
                        const a = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            E = (0, r.useState)(Nn),
                            _ = E[0],
                            A = E[1],
                            g = (0, r.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            F = Xt(() => {
                                const u = d.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${On(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    a.current &&
                                        (1 === s ? a.current.classList.add(bn) : a.current.classList.remove(bn)),
                                    s
                                );
                            }),
                            h = Xt(() => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    o = qt(0, 1, r / (a - n)),
                                    m = (u.offsetHeight - On(u, s)) * o;
                                (t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(Tn), void l.current.classList.remove(Tn);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(Tn), void l.current.classList.add(Tn);
                                            var u, t;
                                            i.current.classList.remove(Tn), l.current.classList.remove(Tn);
                                        }
                                    })(m);
                            }),
                            f = Xt(() => {
                                Rn(e, () => {
                                    F(), h();
                                });
                            });
                        (0, r.useEffect)(() => Yt(f)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    Rn(e, () => {
                                        h();
                                    });
                                };
                                let t = Ln;
                                const n = () => {
                                    t(), (t = Yt(f));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!_.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        g(Nn);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        Rn(e, (t) => {
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
                        const p = Zt((u) => e.applyStepTo(u), m, [e]),
                            C = p[0],
                            D = p[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Tn) || Ye('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()(vn, u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()(wn, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Tn) || 0 !== e.button || (Ye('play'), C(tn.Next));
                                },
                                ref: i,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()(yn, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((Ye('play'), u.target === n))
                                                g({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    d.current &&
                                                        Rn(e, (n) => {
                                                            if (!n) return;
                                                            const a = t(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * u);
                                                            e.applyScroll(r);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? tn.Prev : tn.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: d, className: B()(xn, u.thumb) }),
                                s().createElement('div', { className: B()(Sn, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: B()(kn, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Tn) || 0 !== e.button || (Ye('play'), C(tn.Prev));
                                },
                                onMouseUp: D,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Hn = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Pn = ({
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
                                return Object.assign({}, e, { base: B()(Hn.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: B()(Hn.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Hn.area, a) },
                                s().createElement(Wn, { className: i, classNames: o, api: m }, e),
                            ),
                            s().createElement(In, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Wn = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, r.useEffect)(() => Yt(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(Hn.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Hn.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Wn.Default = Pn;
                const zn = { Vertical: a, Horizontal: n },
                    Gn = ({
                        startRowIndex: e,
                        cellHeight: u,
                        paddingTop: t,
                        paddingBottom: n,
                        amount: a,
                        itemsAmountPerRow: r,
                        visibleRowsAmount: s,
                    }) => {
                        const i = Math.ceil(a / r) * u,
                            o = s * u,
                            l = e * u;
                        return { paddingTop: `${l + t}rem`, paddingBottom: `${Math.max(i - l - o, 0) + n}rem` };
                    },
                    jn = (e) => {
                        const u = e.className,
                            t = e.children,
                            n = e.itemsAmountPerRow,
                            a = e.visibleRowsAmount,
                            r = e.startRowIndex,
                            i = e.amount,
                            o = r * n,
                            l = Math.min(a * n, i - o);
                        return s().createElement(
                            'div',
                            { className: u, style: Gn(e) },
                            ht(l, (e) => t(o + e)),
                        );
                    },
                    Un = 'VirtualGrid_base_52',
                    Vn = ({
                        amount: e,
                        cellWidth: u,
                        cellHeight: t,
                        children: n,
                        api: a,
                        classNames: i,
                        preloadedRows: l = 1,
                        paddingTop: c = 0,
                        paddingBottom: d = 0,
                    }) => {
                        const m = a.scrollApi,
                            E = (0, r.useRef)(0),
                            _ = (0, r.useState)(0),
                            A = _[0],
                            g = _[1],
                            F = (0, r.useState)(null),
                            h = F[0],
                            f = F[1],
                            p = (0, r.useState)(null),
                            C = p[0],
                            D = p[1];
                        return (
                            (0, r.useEffect)(() => {
                                const u = (u) => {
                                    if (!h) return;
                                    const n = Math.floor((o.O.view.pxToRem(u.value.scrollPosition) - c) / t),
                                        r = Math.ceil(e / h),
                                        s = Math.max(0, Math.min(n - l, r));
                                    g(s), a.startRowIndexChanged(s);
                                };
                                return m.events.on('change', u), () => m.events.off('change', u);
                            }, [a, m, t, c, h, e, l]),
                            (0, r.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                n = m.contentRef.current.getBoundingClientRect(),
                                                r =
                                                    o.O.view.pxToRem(n.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                s = Math.floor(r / u),
                                                i = Math.ceil(o.O.view.pxToRem(n.height) / t) + 2 * l;
                                            (E.current = s), f(s), D(i), a.layoutCalculated(s, i);
                                        }
                                    },
                                    n = () => {
                                        const u = E.current;
                                        e(), a.scrollToIndex(A * u);
                                    };
                                return (
                                    m.events.on('recalculateContent', e),
                                    m.events.on('resizeHandled', n),
                                    () => {
                                        m.events.off('recalculateContent', e), m.events.off('resizeHandled', n);
                                    }
                                );
                            }, [a, m, t, u, l, A]),
                            (0, r.useEffect)(() => {
                                const e = (e, u = !0) => {
                                    h && m.applyScroll(Math.floor((e + 1) / h) * t + c, { immediate: u });
                                };
                                return a.events.on('scrollToIndex', e), () => a.events.off('scrollToIndex', e);
                            }, [a, t, h, c, m]),
                            s().createElement(
                                zn.Vertical.Default,
                                {
                                    api: m,
                                    className: null == i ? void 0 : i.scroll,
                                    areaClassName: null == i ? void 0 : i.areaClassName,
                                    scrollClassName: null == i ? void 0 : i.scrollClassName,
                                    scrollClassNames: {
                                        content: null == i ? void 0 : i.content,
                                        wrapper: null == i ? void 0 : i.wrapper,
                                    },
                                },
                                null !== h &&
                                    null !== C &&
                                    s().createElement(
                                        jn,
                                        {
                                            className: B()(Un, null == i ? void 0 : i.inner),
                                            paddingBottom: d,
                                            paddingTop: c,
                                            amount: e,
                                            itemsAmountPerRow: h,
                                            visibleRowsAmount: C,
                                            startRowIndex: A,
                                            cellHeight: t,
                                        },
                                        n,
                                    ),
                            )
                        );
                    },
                    $n = 'VirtualGridWithFade_scrollAreaFade_94',
                    Yn = ['api', 'children', 'classNames'];
                function qn() {
                    return (
                        (qn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        qn.apply(this, arguments)
                    );
                }
                const Kn = (e) => {
                        let u = e.api,
                            t = e.children,
                            n = e.classNames,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Yn);
                        const i = (0, r.useState)(!0),
                            o = i[0],
                            l = i[1],
                            c = u.scrollApi;
                        return (
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    const e = c.getBounds()[1];
                                    l(Math.abs(e - c.animationScroll.scrollPosition.goal) > 0.1);
                                };
                                return (
                                    c.events.on('change', e),
                                    c.events.on('recalculateContent', e),
                                    () => {
                                        c.events.off('change', e), c.events.off('recalculateContent', e);
                                    }
                                );
                            }, [c]),
                            s().createElement(
                                Vn,
                                qn(
                                    {
                                        api: u,
                                        classNames: Object.assign({}, n, {
                                            scrollClassName: B()(null == n ? void 0 : n.scrollClassName, o && $n),
                                        }),
                                    },
                                    a,
                                ),
                                t,
                            )
                        );
                    },
                    Xn = 'TankmanVirtualList_grid_41',
                    Zn = ({
                        amount: e,
                        paddingTop: u = 11,
                        paddingBottom: t = 11,
                        api: n,
                        classNames: a,
                        children: r,
                    }) =>
                        s().createElement(
                            Kn,
                            {
                                amount: e,
                                classNames: Object.assign({}, a, { content: B()(Xn, null == a ? void 0 : a.content) }),
                                cellWidth: 318,
                                cellHeight: 265,
                                paddingTop: u,
                                paddingBottom: t,
                                api: n,
                            },
                            r,
                        ),
                    Jn = ({ className: e }) => s().createElement('div', { className: B()(Vt.base, e) }),
                    Qn = 'JunkTankmanCard_base_f0',
                    ea = (0, U.Pi)(({ index: e, onLazyLoad: u }) => {
                        const t = Au().model.computes.getTankman(e);
                        return (
                            (0, r.useEffect)(() => {
                                t || u();
                            }, [u, t]),
                            t
                                ? s().createElement($t, { tankman: t, className: Qn })
                                : s().createElement(Jn, { className: Qn })
                        );
                    }),
                    ua = 'JunkTankmanList_base_8c',
                    ta = 'JunkTankmanList_gridWrapper_11',
                    na = 'JunkTankmanList_grid_3d',
                    aa = 'JunkTankmanList_gridInner_d2',
                    ra = 'JunkTankmanList_confirmButtonSection_ea',
                    sa = 'JunkTankmanList_confirmButtonDivider_50',
                    ia = 'JunkTankmanList_confirmButton_1c',
                    oa = (0, U.Pi)(() => {
                        const e = Au(),
                            u = e.model,
                            t = e.controls,
                            n = (() => {
                                const e = zn.Vertical.useVerticalScrollApi(),
                                    u = en(),
                                    t = (0, r.useCallback)((e, t = !0) => u.trigger('scrollToIndex', e, t), [u]),
                                    n = (0, r.useCallback)((e, t) => u.trigger('layoutCalculated', e, t), [u]),
                                    a = (0, r.useCallback)((e) => u.trigger('startRowIndexChanged', e), [u]);
                                return (0, r.useMemo)(
                                    () => ({
                                        scrollToIndex: t,
                                        layoutCalculated: n,
                                        startRowIndexChanged: a,
                                        scrollApi: e,
                                        events: { off: u.off, on: u.on },
                                    }),
                                    [t, n, a, e, u.off, u.on],
                                );
                            })(),
                            a = ((e, u) => {
                                const t = (0, r.useRef)([0, 0]),
                                    n = (0, r.useRef)(0),
                                    a = (0, r.useRef)([0, !0]);
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = (e, u) => {
                                                t.current = [e, u];
                                            },
                                            r = (e) => {
                                                n.current = e;
                                            },
                                            s = (e) => {
                                                const u = a.current[0];
                                                a.current = [e.value.scrollPosition, u < e.value.scrollPosition];
                                            };
                                        return (
                                            u.scrollApi.events.on('change', s),
                                            u.events.on('layoutCalculated', e),
                                            u.events.on('startRowIndexChanged', r),
                                            () => {
                                                u.scrollApi.events.off('change', s),
                                                    u.events.off('layoutCalculated', e),
                                                    u.events.off('startRowIndexChanged', r);
                                            }
                                        );
                                    }, [u]),
                                    Lu(
                                        () => {
                                            const u = t.current,
                                                r = u[0],
                                                s = u[1],
                                                i = n.current * r,
                                                o = r * s;
                                            e(2 * o, a.current[1] ? i : Math.max(i - 1 * o, 0));
                                        },
                                        [],
                                        10,
                                    )
                                );
                            })(t.loadCards, n);
                        return s().createElement(
                            'div',
                            { className: ua },
                            s().createElement(
                                'div',
                                { className: ta },
                                s().createElement(
                                    Zn,
                                    {
                                        amount: u.itemsAmount.get(),
                                        api: n,
                                        classNames: { scroll: na, inner: aa },
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                    },
                                    (e) => s().createElement(ea, { key: e, index: e, onLazyLoad: a }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ra },
                                    s().createElement('div', { className: sa }),
                                    s().createElement(
                                        pu,
                                        { size: hu.medium, type: Fu.primary, onClick: t.confirm, mixClass: ia },
                                        R.strings.crew.junkTankmen.confirmButton.title(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    la = 'JunkTankmenApp_base_a5',
                    ca = 'JunkTankmenApp_closeButton_8b',
                    da = 'JunkTankmenApp_content_62',
                    ma = 'JunkTankmenApp_content__ready_9a',
                    Ea = 'JunkTankmenApp_header_9d',
                    _a = 'JunkTankmenApp_description_e5',
                    Aa = (0, U.Pi)(() => {
                        const e = Au().controls,
                            u = (0, r.useState)(!1),
                            t = u[0],
                            n = u[1];
                        var a;
                        return (
                            (a = e.close),
                            j(W.n.ESCAPE, a),
                            ((e, u) => {
                                (0, r.useEffect)(() => {
                                    let u = null;
                                    return (
                                        (u = requestAnimationFrame(() => {
                                            u = requestAnimationFrame(() => {
                                                (u = null), e();
                                            });
                                        })),
                                        () => {
                                            null !== u && cancelAnimationFrame(u);
                                        }
                                    );
                                }, u);
                            })(() => requestAnimationFrame(() => n(!0)), []),
                            s().createElement(
                                'div',
                                { className: la },
                                s().createElement(ru, { onCloseClick: e.close, className: ca }),
                                s().createElement(
                                    'div',
                                    { className: B()(da, t && ma) },
                                    s().createElement(
                                        $e,
                                        { title: R.strings.crew.junkTankmen.title(), className: Ea },
                                        s().createElement(je, {
                                            text: R.strings.crew.junkTankmen.description(),
                                            justifyContent: he.Center,
                                            classMix: _a,
                                        }),
                                    ),
                                    s().createElement(oa, null),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    P().render(
                        s().createElement(_u, null, s().createElement(I, null, s().createElement(Aa, null))),
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
        (__webpack_require__.j = 533),
        (() => {
            var e = { 533: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(2771));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
