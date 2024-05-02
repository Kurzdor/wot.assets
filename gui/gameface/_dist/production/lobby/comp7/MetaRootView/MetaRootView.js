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
            527: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, { mouse: () => c, off: () => o, on: () => u, onResize: () => s, onScaleUpdated: () => i });
                var n = a(2472),
                    r = a(1176);
                const s = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, r.R)(!1);
                    }
                    const s = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const s = `mouse${t}`,
                                        i = l[t]((e) => a([e, 'outside']));
                                    function u(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, u),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(s, u),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, s, {
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
            5959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => i,
                    });
                var n = a(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => n });
            },
            2472: (e, t, a) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => n });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => r });
                var n = a(5959);
                const r = { view: a(7641), client: n };
            },
            3722: (e, t, a) => {
                'use strict';
                function n(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function r(e, t, a) {
                    return `url(${n(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => r });
                var n = a(2472);
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
            7641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => u,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => s.U,
                        extraSize: () => B,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => F,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => A,
                        isFocused: () => f,
                        pxToRem: () => h,
                        remToPx: () => v,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var n = a(3722),
                    r = a(6112),
                    s = a(6538),
                    i = a(8566);
                function u(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, a, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, n);
                }
                function c(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function A() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    B = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    s = 16,
                    i = 32,
                    u = 64,
                    o = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, n);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, i, {
                                          arguments:
                                              ((r = s),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? r : i);
                        },
                        minimize() {
                            o(u);
                        },
                        move(e) {
                            o(s, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, a) => {
                'use strict';
                let n, r;
                a.d(t, { n: () => n }),
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
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => s });
                var n = a(3138);
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
                    addCallback(e, t, a = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = n.O.view.addModelObserver(e, a, r);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(s) : (this._views[a] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const n = this._callbacks[a];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const s = r;
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
            9916: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Sw: () => s.Z,
                    B3: () => o,
                    Gr: () => l,
                    Z5: () => i.Z5,
                    B0: () => u,
                    c9: () => v,
                    ry: () => h,
                });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    a();
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
                        const a = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== n)),
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
                var s = a(1358);
                var i = a(8613);
                let u;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(u || (u = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = a(5521),
                    _ = a(3138);
                const E = ['args'];
                function g(e, t, a, n, r, s, i) {
                    try {
                        var u = e[s](i),
                            o = u.value;
                    } catch (e) {
                        return void a(e);
                    }
                    u.done ? t(o) : Promise.resolve(o).then(n, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                        a = arguments;
                                    return new Promise(function (n, r) {
                                        var s = e.apply(t, a);
                                        function i(e) {
                                            g(s, n, r, i, u, 'next', e);
                                        }
                                        function u(e) {
                                            g(s, n, r, i, u, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    b = () => v(u.CLOSE),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var C = a(7572);
                const A = r.instance,
                    D = {
                        DataTracker: s.Z,
                        ViewModel: C.Z,
                        ViewEventType: u,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => v(u.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => v(u.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            v(u.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, n, r = R.invalid('resId'), s) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                o = a.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                m = o.height,
                                E = {
                                    x: _.O.view.pxToRem(l) + i.x,
                                    y: _.O.view.pxToRem(c) + i.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            v(u.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: p(E),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, b);
                        },
                        handleViewEvent: v,
                        onBindingsReady: h,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(u.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(u.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(u.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        a[n] = [];
                                        for (let t = 0; t < r.length; t++) a[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[n] = e(t[n]))
                                            : (a[n] = t[n]);
                                }
                            return a;
                        },
                        ClickOutsideManager: A,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = D;
            },
            8613: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => s, Z5: () => n, cy: () => r });
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
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    },
                    s = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            3528: (e, t, a) => {
                'use strict';
                var n = a(6179),
                    r = a.n(n);
                const s = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var i = a(3138);
                const u = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function l(e, t, a) {
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
                        })(e, a),
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
                        })(t, a),
                        s = Math.min(n, r);
                    return {
                        extraLarge: s === a.extraLarge.weight,
                        large: s === a.large.weight,
                        medium: s === a.medium.weight,
                        small: s === a.small.weight,
                        extraSmall: s === a.extraSmall.weight,
                        extraLargeWidth: n === a.extraLarge.weight,
                        largeWidth: n === a.large.weight,
                        mediumWidth: n === a.medium.weight,
                        smallWidth: n === a.small.weight,
                        extraSmallWidth: n === a.extraSmall.weight,
                        extraLargeHeight: r === a.extraLarge.weight,
                        largeHeight: r === a.large.weight,
                        mediumHeight: r === a.medium.weight,
                        smallHeight: r === a.small.weight,
                        extraSmallHeight: r === a.extraSmall.weight,
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
                    d = c.width,
                    m = c.height,
                    _ = Object.assign({ width: d, height: m }, l(d, m, u)),
                    E = (0, n.createContext)(_),
                    g = ['children'];
                const p = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, g);
                    const r = (0, n.useContext)(E),
                        i = r.extraLarge,
                        u = r.large,
                        o = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        d = r.extraLargeWidth,
                        m = r.largeWidth,
                        _ = r.mediumWidth,
                        p = r.smallWidth,
                        h = r.extraSmallWidth,
                        v = r.extraLargeHeight,
                        b = r.largeHeight,
                        f = r.mediumHeight,
                        C = r.smallHeight,
                        A = r.extraSmallHeight,
                        D = { extraLarge: v, large: b, medium: f, small: C, extraSmall: A };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && i) return t;
                        if (a.large && u) return t;
                        if (a.medium && o) return t;
                        if (a.small && l) return t;
                        if (a.extraSmall && c) return t;
                    } else {
                        if (a.extraLargeWidth && d) return s(t, a, D);
                        if (a.largeWidth && m) return s(t, a, D);
                        if (a.mediumWidth && _) return s(t, a, D);
                        if (a.smallWidth && p) return s(t, a, D);
                        if (a.extraSmallWidth && h) return s(t, a, D);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && v) return t;
                            if (a.largeHeight && b) return t;
                            if (a.mediumHeight && f) return t;
                            if (a.smallHeight && C) return t;
                            if (a.extraSmallHeight && A) return t;
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
                (0, n.memo)(p);
                const h = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    v = ({ children: e }) => {
                        const t = (0, n.useContext)(E),
                            a = (0, n.useState)(t),
                            s = a[0],
                            o = a[1],
                            c = (0, n.useCallback)((e, t) => {
                                const a = i.O.view.pxToRem(e),
                                    n = i.O.view.pxToRem(t);
                                o(Object.assign({ width: a, height: n }, l(a, n, u)));
                            }, []),
                            d = (0, n.useCallback)(() => {
                                const e = i.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        h(() => {
                            i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', c),
                                        i.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [c, d],
                            );
                        const m = (0, n.useMemo)(() => Object.assign({}, s), [s]);
                        return r().createElement(E.Provider, { value: m }, e);
                    };
                var b = a(6483),
                    f = a.n(b),
                    C = a(926),
                    A = a.n(C);
                let D, F, w;
                !(function (e) {
                    (e[(e.ExtraSmall = u.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = u.small.width)] = 'Small'),
                        (e[(e.Medium = u.medium.width)] = 'Medium'),
                        (e[(e.Large = u.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = u.extraLarge.width)] = 'ExtraLarge');
                })(D || (D = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = u.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = u.small.width)] = 'Small'),
                            (e[(e.Medium = u.medium.width)] = 'Medium'),
                            (e[(e.Large = u.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = u.extraLarge.width)] = 'ExtraLarge');
                    })(F || (F = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = u.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = u.small.height)] = 'Small'),
                            (e[(e.Medium = u.medium.height)] = 'Medium'),
                            (e[(e.Large = u.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = u.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const B = () => {
                        const e = (0, n.useContext)(E),
                            t = e.width,
                            a = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return D.ExtraLarge;
                                    case e.large:
                                        return D.Large;
                                    case e.medium:
                                        return D.Medium;
                                    case e.small:
                                        return D.Small;
                                    case e.extraSmall:
                                        return D.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), D.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return F.ExtraLarge;
                                    case e.largeWidth:
                                        return F.Large;
                                    case e.mediumWidth:
                                        return F.Medium;
                                    case e.smallWidth:
                                        return F.Small;
                                    case e.extraSmallWidth:
                                        return F.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), F.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
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
                        return { mediaSize: r, mediaWidth: s, mediaHeight: i, remScreenWidth: t, remScreenHeight: a };
                    },
                    y = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const N = {
                        [F.ExtraSmall]: '',
                        [F.Small]: A().SMALL_WIDTH,
                        [F.Medium]: `${A().SMALL_WIDTH} ${A().MEDIUM_WIDTH}`,
                        [F.Large]: `${A().SMALL_WIDTH} ${A().MEDIUM_WIDTH} ${A().LARGE_WIDTH}`,
                        [F.ExtraLarge]: `${A().SMALL_WIDTH} ${A().MEDIUM_WIDTH} ${A().LARGE_WIDTH} ${A().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [w.ExtraSmall]: '',
                        [w.Small]: A().SMALL_HEIGHT,
                        [w.Medium]: `${A().SMALL_HEIGHT} ${A().MEDIUM_HEIGHT}`,
                        [w.Large]: `${A().SMALL_HEIGHT} ${A().MEDIUM_HEIGHT} ${A().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${A().SMALL_HEIGHT} ${A().MEDIUM_HEIGHT} ${A().LARGE_HEIGHT} ${A().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [D.ExtraSmall]: '',
                        [D.Small]: A().SMALL,
                        [D.Medium]: `${A().SMALL} ${A().MEDIUM}`,
                        [D.Large]: `${A().SMALL} ${A().MEDIUM} ${A().LARGE}`,
                        [D.ExtraLarge]: `${A().SMALL} ${A().MEDIUM} ${A().LARGE} ${A().EXTRA_LARGE}`,
                    },
                    x = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, y);
                        const s = B(),
                            i = s.mediaWidth,
                            u = s.mediaHeight,
                            o = s.mediaSize;
                        return r().createElement('div', S({ className: f()(a, N[i], k[u], P[o]) }, n), t);
                    },
                    T = ['children'];
                const I = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, T);
                    return r().createElement(v, null, r().createElement(x, a, t));
                };
                var L = a(493),
                    O = a.n(L);
                function M() {
                    return !1;
                }
                console.log;
                var $ = a(9174);
                function H(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return W(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return W(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function W(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const z = (e) => (0 === e ? window : window.subViews.get(e));
                const U = () => (e, t) => {
                        const a = (0, n.createContext)({});
                        return [
                            function ({ mode: s = 'real', options: u, children: o, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    d = (a, n, r) => {
                                        var s;
                                        const u = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = z,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function s(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, a) => {
                                                        a.forEach((t) => {
                                                            const a = r.get(t);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const u = (e) => {
                                                    const r = a(t),
                                                        s = n.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? s
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, s);
                                                };
                                                return {
                                                    subscribe: (a, s) => {
                                                        const o = 'string' == typeof s ? `${n}.${s}` : n,
                                                            l = i.O.view.addModelObserver(o, t, !0);
                                                        return r.set(l, a), e && a(u(s)), l;
                                                    },
                                                    readByPath: u,
                                                    createCallback: (e, t) => {
                                                        const a = u(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = u(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, a = H(r.keys()); !(e = a()).done; ) s(e.value, t);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(n),
                                            o =
                                                'real' === a
                                                    ? u
                                                    : Object.assign({}, u, {
                                                          readByPath:
                                                              null != (s = null == r ? void 0 : r.getter)
                                                                  ? s
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === a ? (null == r ? void 0 : r.getter(e)) : o.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            m = e({
                                                mode: a,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = $.LO.box(n, { equals: M });
                                                        return (
                                                            'real' === a &&
                                                                o.subscribe(
                                                                    (0, $.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = $.LO.box(n, { equals: M });
                                                        return (
                                                            'real' === a &&
                                                                o.subscribe(
                                                                    (0, $.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = l(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = $.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    o.subscribe(
                                                                        (0, $.aD)((t) => {
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
                                                                s = Object.entries(r),
                                                                i = s.reduce(
                                                                    (e, [t, a]) => ((e[a] = $.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    o.subscribe(
                                                                        (0, $.aD)((e) => {
                                                                            s.forEach(([t, a]) => {
                                                                                i[a].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            _ = { mode: a, model: m, externalModel: o, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === a && r ? r.controls(_) : t(_),
                                            externalModel: o,
                                            mode: a,
                                        };
                                    },
                                    m = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(s),
                                    E = _[0],
                                    g = _[1],
                                    p = (0, n.useState)(() => d(s, u, l)),
                                    h = p[0],
                                    v = p[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        m.current ? v(d(E, u, l)) : (m.current = !0);
                                    }, [l, E, u]),
                                    (0, n.useEffect)(() => {
                                        g(s);
                                    }, [s]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [h],
                                    ),
                                    r().createElement(a.Provider, { value: h }, o)
                                );
                            },
                            () => (0, n.useContext)(a),
                        ];
                    },
                    V = U()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            season: e.primitives(
                                [
                                    'startTimestamp',
                                    'endTimestamp',
                                    'serverTimestamp',
                                    'state',
                                    'name',
                                    'hasTentativeDates',
                                ],
                                'season',
                            ),
                            year: e.primitives(['state'], 'year'),
                        }),
                        ({ externalModel: e }) => ({ pollServerTime: e.createCallbackNoArgs('season.pollServerTime') }),
                    ),
                    G = V[0],
                    q = V[1];
                function j(e) {
                    engine.call('PlaySound', e);
                }
                const Q = {
                        playHighlight() {
                            j('highlight');
                        },
                        playClick() {
                            j('play');
                        },
                        playYes() {
                            j('yes1');
                        },
                    },
                    Y = {
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
                    X = [
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
                function K() {
                    return (
                        (K =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        K.apply(this, arguments)
                    );
                }
                class Z extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && j(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && j(this.props.soundClick);
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
                            a = e.onClick,
                            n = e.goto,
                            s = e.side,
                            i = e.type,
                            u = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(e, X)),
                            _ = f()(Y.base, Y[`base__${i}`], Y[`base__${s}`], null == u ? void 0 : u.base),
                            E = f()(Y.icon, Y[`icon__${i}`], Y[`icon__${s}`], null == u ? void 0 : u.icon),
                            g = f()(Y.glow, null == u ? void 0 : u.glow),
                            p = f()(Y.caption, Y[`caption__${i}`], null == u ? void 0 : u.caption),
                            h = f()(Y.goto, null == u ? void 0 : u.goto);
                        return r().createElement(
                            'div',
                            K(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                m,
                            ),
                            'info' !== i && r().createElement('div', { className: Y.shine }),
                            r().createElement('div', { className: E }, r().createElement('div', { className: g })),
                            r().createElement('div', { className: p }, t),
                            n && r().createElement('div', { className: h }, n),
                        );
                    }
                }
                Z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var J = a(3403),
                    ee = a(5521),
                    te = a(9916);
                const ae = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ne(e = ee.n.NONE, t = ae, a = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== ee.n.NONE)
                            return (
                                window.addEventListener('keydown', n, a),
                                () => {
                                    window.removeEventListener('keydown', n, a);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), t(n), a && n.stopPropagation();
                            }
                        }
                    }, [t, e, a, r]);
                }
                const re = 'page_heading_05',
                    se = 'page_close_a4',
                    ie = ({ onClose: e, className: t }) => {
                        var a;
                        return (
                            (a = e),
                            ne(ee.n.ESCAPE, a),
                            r().createElement(
                                'div',
                                { className: f()(se, t) },
                                r().createElement(Z, {
                                    caption: R.strings.comp7.closeButtonLabel(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: e,
                                }),
                            )
                        );
                    },
                    ue = () => i.O.client.graphicsQuality.isHigh(),
                    oe = () => {
                        const e = B(),
                            t = e.mediaSize,
                            a = e.remScreenHeight,
                            n = t >= D.Medium && a >= w.Large ? 'medium' : 'small';
                        return { size: n, isSmall: 'small' === n, isMedium: 'medium' === n };
                    };
                let le;
                !(function (e) {
                    (e[(e.Progression = 0)] = 'Progression'),
                        (e[(e.RankRewards = 1)] = 'RankRewards'),
                        (e[(e.YearlyRewards = 2)] = 'YearlyRewards'),
                        (e[(e.WeeklyQuests = 3)] = 'WeeklyQuests'),
                        (e[(e.Shop = 4)] = 'Shop'),
                        (e[(e.Leaderboard = 5)] = 'Leaderboard'),
                        (e[(e.YearlyStatistics = 6)] = 'YearlyStatistics');
                })(le || (le = {}));
                const ce = {
                        [le.Progression]: 'progression',
                        [le.RankRewards]: 'rankRewards',
                        [le.WeeklyQuests]: 'weeklyQuests',
                        [le.Leaderboard]: 'leaderboard',
                        [le.YearlyRewards]: 'yearlyRewards',
                        [le.Shop]: 'shop',
                        [le.YearlyStatistics]: 'yearlyStatistics',
                    },
                    de = {
                        TABS: { context: 'model.sidebar' },
                        SCHEDULE: { context: 'model.scheduleInfo' },
                        PROGRESSION_PAGE: { context: 'model.progressionModel' },
                        RANK_REWARDS_PAGE: { context: 'model.rankRewardsModel' },
                        WEEKLY_QUESTS_PAGE: { context: 'model.weeklyQuestsModel' },
                        LEADERBOARD_PAGE: { context: 'model.leaderboardModel' },
                        YEARLY_REWARDS_PAGE: { context: 'model.yearlyRewardsModel' },
                        SHOP_PAGE: { context: 'model.shopModel' },
                        YEARLY_STATISTICS_PAGE: { context: 'model.yearlyStatisticsModel' },
                    };
                var me = a(3946);
                const _e = U()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() },
                                a = e.object('progressionModel.qualificationModel'),
                                n = (0, me.Om)(() => t.root.get().pageViewId === le.Progression && a.get().isActive);
                            return Object.assign({}, t, { computes: { isProgressionInQualification: n } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            openInfoPage: e.createCallbackNoArgs('onInfoPageOpen'),
                            openWhatsNewScreen: e.createCallbackNoArgs('onWhatsNewScreenOpen'),
                        }),
                    ),
                    Ee = _e[0],
                    ge = _e[1];
                function pe(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                const he = pe;
                function ve(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function be(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, n) => t(null == e ? void 0 : e.value, a, n));
                }
                function fe(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const a = [];
                    for (let r = 0; r < e.length; r++) {
                        var n;
                        const s = null == (n = e[r]) ? void 0 : n.value;
                        t(s, r, e) && a.push(s);
                    }
                    return a;
                }
                function Ce(e, t = 0, a = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let n = Math.max(t, 0);
                            const r = Math.min(
                                a,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (n > r) return { done: !0, value: null };
                                    const t = e[n++];
                                    return t ? { value: ve(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function Ae(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        const n = ve(e[a]);
                        if (t(n, a, e)) return n;
                    }
                }
                function De(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        if (t(he(e, a), a, e)) return a;
                    }
                }
                function Fe(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        if (t(he(e, a), a, e)) return a;
                    }
                }
                function we(e, t, a) {
                    if (Array.isArray(e)) return e.reduce(t, a);
                    let n = a;
                    for (let a = 0; a < e.length; a++) {
                        n = t(n, he(e, a), a, e);
                    }
                    return n;
                }
                const Be = R.images.gui.maps.icons.comp7.metaTabs,
                    ye = (e, t) => {
                        const a = ce[e];
                        return t ? `${Be.$dyn(a)}` : `${Be.small.$dyn(a)}`;
                    },
                    Se = U()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() },
                                a = e.array('items'),
                                n = (0, me.Om)(
                                    (e) => [
                                        {
                                            id: 0,
                                            items: be(a.get(), ({ id: t, hasNotification: a }) =>
                                                Object.assign(
                                                    { id: t, icon: ye(t, e) },
                                                    a && { notification: { type: 'dot' } },
                                                ),
                                            ),
                                        },
                                    ],
                                    { equals: M },
                                );
                            return Object.assign({}, t, { computes: { tabs: n } });
                        },
                        ({ externalModel: e }) => ({
                            changeSidebarTab: e.createCallback((e) => ({ tabId: e }), 'onSideBarTabChange'),
                        }),
                    ),
                    Ne = Se[0],
                    ke = Se[1],
                    Re = (e) => {
                        let t,
                            a = null;
                        return (
                            (a = requestAnimationFrame(() => {
                                a = requestAnimationFrame(() => {
                                    (a = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== a && cancelAnimationFrame(a);
                            }
                        );
                    };
                var Pe = a(7030);
                const xe = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    Te = r().forwardRef(function ({ classNames: e, arrowRef: t, size: a = 'medium', className: n }, s) {
                        return r().createElement(
                            'div',
                            { className: f()(xe.base, xe[`base__${a}`], n), ref: s },
                            r().createElement('div', {
                                className: f()(
                                    xe.border,
                                    xe.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            r().createElement('div', {
                                className: f()(
                                    xe.border,
                                    xe.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            r().createElement('div', {
                                className: f()(xe.arrow, null == e ? void 0 : e.arrow),
                                ref: t,
                            }),
                        );
                    }),
                    Ie = {
                        base: 'Tab_base_cd',
                        base__small: 'Tab_base__small_bf',
                        base__medium: 'Tab_base__medium_96',
                        base__active: 'Tab_base__active_7e',
                        highlight: 'Tab_highlight_b6',
                        icon: 'Tab_icon_28',
                        icon__small: 'Tab_icon__small_48',
                        icon__medium: 'Tab_icon__medium_73',
                        notification: 'Tab_notification_86',
                        notification__symbol: 'Tab_notification__symbol_9b',
                        notification__small: 'Tab_notification__small_92',
                        notification__dot: 'Tab_notification__dot_51',
                        notification__medium: 'Tab_notification__medium_e6',
                        notification__large: 'Tab_notification__large_6b',
                    },
                    Le = { mouseEnter: 'highlight', click: 'play' },
                    Oe = r().forwardRef(function (
                        {
                            id: e,
                            isActive: t,
                            className: a,
                            classNames: n,
                            sounds: s = Le,
                            notification: i,
                            icon: u,
                            size: o,
                            additionContent: l,
                            onClick: c,
                            onMouseEnter: d,
                            onMouseLeave: m,
                            WrapperElement: _,
                        },
                        E,
                    ) {
                        const g = (e, a) => {
                                !t && s[a] && j(s[a]);
                            },
                            p = r().createElement(
                                'div',
                                {
                                    className: f()(
                                        Ie.base,
                                        Ie[`base__${o}`],
                                        t && f()(Ie.base__active, null == n ? void 0 : n.activeTab),
                                        a,
                                    ),
                                    onClick: ((e) => () => {
                                        g(0, 'click'), null == c || c(e);
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        g(0, 'mouseEnter'), null == d || d(e);
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        g(0, 'mouseLeave'), null == m || m(e);
                                    })(e),
                                    ref: t ? E : null,
                                },
                                r().createElement('div', {
                                    className: f()(Ie.highlight, null == n ? void 0 : n.highlight),
                                }),
                                'function' == typeof u && o
                                    ? u(o)
                                    : r().createElement('div', {
                                          className: f()(Ie.icon, Ie[`icon__${o}`], null == n ? void 0 : n.icon),
                                          style: { backgroundImage: `url(${u})` },
                                      }),
                                l && l({ id: e, size: o, isActive: t }),
                                i &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: f()(
                                                Ie.notification,
                                                Ie[`notification__${i.type}`],
                                                i.size ? Ie[`notification__${i.size}`] : Ie.notification__medium,
                                                null == n ? void 0 : n.notification,
                                            ),
                                        },
                                        'dot' !== i.type && i.value,
                                    ),
                            );
                        return _ ? r().createElement(_, { key: e, id: e }, p) : p;
                    }),
                    Me = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    },
                    $e = r().memo(function ({
                        active: e,
                        tabs: t,
                        sounds: a,
                        className: s,
                        classNames: u,
                        size: o = 'medium',
                        additionContent: l,
                        onClick: c,
                        onMouseEnter: d,
                        onMouseLeave: m,
                        WrapperElement: _,
                    }) {
                        const E = (0, n.useRef)(null),
                            g = (0, n.useRef)(null),
                            p = (0, n.useRef)(null),
                            h = (0, n.useRef)(null),
                            v = (0, Pe.useSpring)(() => ({
                                marginLeft: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.marginLeft = `${e.value.marginLeft}rem`);
                                },
                            }))[1],
                            b = (0, Pe.useSpring)(() => ({
                                opacity: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1],
                            C = (0, Pe.useSpring)(() => ({
                                position: 0,
                                onChange: (e) => {
                                    const t = g.current;
                                    t &&
                                        (t.style.transform = `translateY(${e.value.position / i.O.view.getScale()}rem)`);
                                },
                                onStart: () => {
                                    v.start({
                                        from: { marginLeft: 12 },
                                        to: { marginLeft: 0 },
                                        config: { duration: 50 },
                                    }),
                                        b.start({ from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: 50 } });
                                },
                                onRest: () => {
                                    v.start({
                                        from: { marginLeft: 0 },
                                        to: { marginLeft: 12 },
                                        config: { duration: 150 },
                                    }),
                                        b.start({
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                            config: { duration: 150 },
                                        });
                                },
                            }))[1],
                            A = (0, n.useCallback)((e) => {
                                if (null !== p.current && null !== h.current) {
                                    e(p.current.getBoundingClientRect().top - h.current.getBoundingClientRect().top);
                                }
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                A((e) => {
                                    C.start({ position: e, config: { duration: 200 } });
                                });
                            }, [C, e, A]),
                            (0, n.useEffect)(
                                () =>
                                    Re(() => {
                                        A((e) => {
                                            C.start({ position: e, immediate: !0 });
                                        });
                                    }),
                                [C, A, o],
                            ),
                            r().createElement(
                                'div',
                                { className: f()(Me.base, s), ref: h },
                                t.map(({ id: t, items: n, title: s, groupClassNames: i }) =>
                                    r().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: f()(Me.group, Me[`group__${o}`], null == i ? void 0 : i.group),
                                        },
                                        s &&
                                            r().createElement(
                                                'div',
                                                { className: f()(Me.title, null == i ? void 0 : i.title) },
                                                s,
                                            ),
                                        n.map(({ id: t, icon: n, notification: s }) =>
                                            r().createElement(Oe, {
                                                key: t,
                                                id: t,
                                                icon: n,
                                                notification: s,
                                                ref: p,
                                                sounds: a,
                                                isActive: e === t,
                                                size: o,
                                                className: null == u ? void 0 : u.tab,
                                                classNames: u,
                                                additionContent: l,
                                                onMouseEnter: d,
                                                onMouseLeave: m,
                                                onClick: c,
                                                WrapperElement: _,
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement(Te, {
                                    arrowRef: E,
                                    ref: g,
                                    size: o,
                                    className: null == u ? void 0 : u.frame,
                                    classNames: u,
                                }),
                            )
                        );
                    }),
                    He = 'Tabs_icon_78',
                    We = 'Tabs_icon__medium_91',
                    ze = [
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
                function Ue(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const Ve = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: te.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    Ge = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            r = e.args,
                            s = e.onMouseEnter,
                            i = e.onMouseLeave,
                            u = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            g = e.isEnabled,
                            p = void 0 === g || g,
                            h = e.targetId,
                            v = void 0 === h ? 0 : h,
                            b = e.onShow,
                            f = e.onHide,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, ze);
                        const A = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, n.useMemo)(
                                () =>
                                    v ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let a,
                                            n = R.invalid('resId');
                                        return (
                                            t &&
                                                ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== a &&
                                                    window.subViews[a] &&
                                                    (n = window.subViews[a].id)),
                                            { caller: a, stack: t, resId: n }
                                        );
                                    })().resId,
                                [v],
                            ),
                            F = (0, n.useCallback)(() => {
                                (A.current.isVisible && A.current.timeoutId) ||
                                    (Ve(a, E, { isMouseEvent: !0, on: !0, arguments: Ue(r) }, D),
                                    b && b(),
                                    (A.current.isVisible = !0));
                            }, [a, E, r, D, b]),
                            w = (0, n.useCallback)(() => {
                                if (A.current.isVisible || A.current.timeoutId) {
                                    const e = A.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (A.current.timeoutId = 0)),
                                        Ve(a, E, { on: !1 }, D),
                                        A.current.isVisible && f && f(),
                                        (A.current.isVisible = !1);
                                }
                            }, [a, E, D, f]),
                            B = (0, n.useCallback)((e) => {
                                A.current.isVisible &&
                                    ((A.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (A.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(A.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = A.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', B, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', B, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === p && w();
                            }, [p, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return p
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((A.current.timeoutId = window.setTimeout(F, c ? 100 : 400)),
                                                      s && s(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              w(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && w(), null == o || o(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && w(), null == u || u(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : t;
                        var y;
                    },
                    qe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function je() {
                    return (
                        (je =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        je.apply(this, arguments)
                    );
                }
                const Qe = R.views.common.tooltip_window.simple_tooltip_content,
                    Ye = (e) => {
                        let t = e.children,
                            a = e.body,
                            s = e.header,
                            i = e.note,
                            u = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, qe);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: a, header: s, note: i, alert: u });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [u, a, s, i, o]);
                        return r().createElement(
                            Ge,
                            je(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? Qe.SimpleTooltipHtmlContent('resId') : Qe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    },
                    Xe = R.strings.comp7.sidebar.tabs.tooltip,
                    Ke = ({ children: e, id: t }) => {
                        const a = ce[t];
                        return r().createElement(Ye, { header: `${Xe.header.$dyn(a)}`, body: `${Xe.body.$dyn(a)}` }, e);
                    },
                    Ze = (0, J.Pi)(({ pageView: e, className: t }) => {
                        const a = ke(),
                            s = a.model,
                            i = a.controls,
                            u = oe(),
                            o = (0, n.useCallback)((e) => i.changeSidebarTab(e), [i]),
                            l = s.computes.tabs(u.isMedium);
                        return r().createElement($e, {
                            tabs: l,
                            onClick: o,
                            active: e,
                            size: u.size,
                            className: t,
                            classNames: { icon: f()(He, u.isMedium && We) },
                            WrapperElement: Ke,
                        });
                    }),
                    Je = 'Spinner_base_87',
                    et = 'Spinner_caption_cf',
                    tt = 'Spinner_gear_c4',
                    at = 'Spinner_logo_bf',
                    nt = ({ message: e, className: t, classNames: a }) =>
                        r().createElement(
                            'div',
                            { className: f()(Je, t) },
                            e && r().createElement('div', { className: f()(et, null == a ? void 0 : a.caption) }, e),
                            r().createElement('div', { className: f()(tt, null == a ? void 0 : a.gear) }),
                            r().createElement('div', { className: f()(at, null == a ? void 0 : a.logo) }),
                        );
                let rt;
                !(function (e) {
                    (e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error');
                })(rt || (rt = {}));
                const st = 'Heading_base_74',
                    it = ({ children: e, className: t }) => r().createElement('div', { className: f()(st, t) }, e),
                    ut = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: 300 } },
                    ot = {
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
                let lt, ct;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(lt || (lt = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(ct || (ct = {}));
                const dt = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: s,
                    disabled: i,
                    mixClass: u,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const p = (0, n.useRef)(null),
                        h = (0, n.useState)(a),
                        v = h[0],
                        b = h[1],
                        C = (0, n.useState)(!1),
                        A = C[0],
                        D = C[1],
                        F = (0, n.useState)(!1),
                        w = F[0],
                        B = F[1],
                        y = (0, n.useCallback)(() => {
                            i || (p.current && (p.current.focus(), b(!0)));
                        }, [i]),
                        S = (0, n.useCallback)(
                            (e) => {
                                v && null !== p.current && !p.current.contains(e.target) && b(!1);
                            },
                            [v],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                i || (g && g(e));
                            },
                            [i, g],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                i || (null !== o && j(o), c && c(e), B(!0));
                            },
                            [i, o, c],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                i || (_ && _(e), D(!1));
                            },
                            [i, _],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                i || (null !== l && j(l), m && m(e), a && y(), D(!0));
                            },
                            [i, l, m, y, a],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                i || (E && E(e), D(!1));
                            },
                            [i, E],
                        ),
                        L = f()(
                            ot.base,
                            ot[`base__${s}`],
                            {
                                [ot.base__disabled]: i,
                                [ot[`base__${t}`]]: t,
                                [ot.base__focus]: v,
                                [ot.base__highlightActive]: A,
                                [ot.base__firstHover]: w,
                            },
                            u,
                        ),
                        O = f()(ot.state, ot.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, n.useEffect)(() => {
                            b(a);
                        }, [a]),
                        r().createElement(
                            'div',
                            {
                                ref: p,
                                className: L,
                                onMouseEnter: k,
                                onMouseMove: P,
                                onMouseUp: x,
                                onMouseDown: T,
                                onMouseLeave: I,
                                onClick: N,
                            },
                            s !== lt.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: ot.back }),
                                    r().createElement('span', { className: ot.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: O },
                                r().createElement('span', { className: ot.stateDisabled }),
                                r().createElement('span', { className: ot.stateHighlightHover }),
                                r().createElement('span', { className: ot.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: ot.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                dt.defaultProps = { type: lt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const mt = (0, n.memo)(dt),
                    _t = (e, t) =>
                        Object.keys(e).length === Object.keys(t).length &&
                        Object.keys(e).every((a) => Object.prototype.hasOwnProperty.call(t, a) && e[a] === t[a]),
                    Et = U()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), items: e.array('items') },
                                a = (0, me.Om)(
                                    (e) => {
                                        const a = pe(t.items.get(), e);
                                        if (!a) throw new Error(`leaderboard item with index ${e} was not found`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: M },
                                ),
                                n = (0, me.Om)(() => {
                                    const e = t.root.get(),
                                        a = e.state,
                                        n = e.leaderboardUpdateTimestamp;
                                    return a !== rt.Initial && n > 0;
                                }),
                                r = (0, me.Om)(() => a(0).rank),
                                s = (0, me.Om)(() => t.root.get().lastBestUserPosition + 1),
                                i = (0, me.Om)((e) => t.root.get().ownSpaID === a(e).spaID),
                                u = (0, me.Om)(() => -1 !== t.root.get().lastBestUserPosition),
                                o = (0, me.Om)(
                                    () => ({ first: a(0).position, last: a(t.items.get().length - 1).position }),
                                    { equals: _t },
                                ),
                                l = (0, me.Om)(() => u() && s() >= o().first && s() <= o().last),
                                c = (0, me.Om)(
                                    (e) => {
                                        const a = Math.ceil(t.root.get().recordsCount / e);
                                        return {
                                            amount: a,
                                            hasPagination: a > 1,
                                            active: Math.floor(o().first / e) + 1,
                                        };
                                    },
                                    { equals: _t },
                                ),
                                d = (0, me.Om)((e) => a(e).position < 3),
                                m = (0, me.Om)(() => -1 === t.root.get().personalPosition);
                            return Object.assign({}, t, {
                                computes: {
                                    leaderboardItem: a,
                                    hasUpdateInfo: n,
                                    firstItemRank: r,
                                    rowsDividerPosition: s,
                                    hasRowsDivider: l,
                                    isPersonalRow: i,
                                    hasPositionIcon: d,
                                    isDefaultPersonalPosition: m,
                                    hasLastBestUserPosition: u,
                                    pages: c,
                                    pagePositions: o,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            refresh: e.createCallbackNoArgs('onRefresh'),
                            getTableRecords: e.createCallback((e, t) => ({ limit: e, offset: t }), 'getTableRecords'),
                        }),
                    ),
                    gt = Et[0],
                    pt = Et[1],
                    ht = 'ErrorState_base_eb',
                    vt = 'ErrorState_titleContainer_ca',
                    bt = 'ErrorState_alertIcon_76',
                    ft = 'ErrorState_title_c1',
                    Ct = 'ErrorState_description_d9',
                    At = 'ErrorState_buttonWrapper_5e',
                    Dt = 'ErrorState_button_23',
                    Ft = R.strings.comp7.leaderboard.error,
                    wt = (0, J.Pi)(({ className: e }) => {
                        const t = pt(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get().isLoading,
                            i = B().mediaSize;
                        return r().createElement(
                            'div',
                            { className: f()(ht, e) },
                            r().createElement(
                                'div',
                                { className: vt },
                                r().createElement('div', { className: bt }),
                                r().createElement('div', { className: ft }, Ft.title()),
                            ),
                            r().createElement('div', { className: Ct }, Ft.description()),
                            r().createElement(
                                'div',
                                { className: At },
                                r().createElement(
                                    mt,
                                    {
                                        type: lt.secondary,
                                        disabled: s,
                                        size: ((u = i), u >= D.Medium ? ct.medium : ct.small),
                                        mixClass: Dt,
                                        onClick: n.refresh,
                                    },
                                    Ft.buttonText(),
                                ),
                            ),
                        );
                        var u;
                    });
                let Bt;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(Bt || (Bt = {}));
                const yt = (e, t, a) => (a < e ? e : a > t ? t : a);
                function St(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Nt(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return Nt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Nt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const kt = [];
                function Rt(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), kt)
                    );
                }
                function Pt(e, t, a, n) {
                    let r,
                        s = !1,
                        i = 0;
                    function u() {
                        r && clearTimeout(r);
                    }
                    function o(...o) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            (i = Date.now()), a.apply(l, o);
                        }
                        s ||
                            (n && !r && d(),
                            u(),
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
                        'boolean' != typeof t && ((n = a), (a = t), (t = void 0)),
                        (o.cancel = function () {
                            u(), (s = !0);
                        }),
                        o
                    );
                }
                let xt;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(xt || (xt = {}));
                const Tt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    It = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: r,
                        getWrapperSize: s,
                        triggerMouseMoveOnUpdate: u = !1,
                    }) => {
                        const o = (e, a) => {
                            const n = t(e),
                                r = n[0],
                                s = n[1];
                            return s <= r ? 0 : yt(r, s, a);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? Tt : c,
                                m = (0, n.useRef)(null),
                                _ = (0, n.useRef)(null),
                                E = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        r = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        s = (e, ...a) => {
                                            for (var n, r = St(t(e).values()); !(n = r()).done; ) (0, n.value)(...a);
                                        };
                                    return (0, n.useMemo)(() => ({ on: a, off: r, trigger: s }), []);
                                })(),
                                g = (function (e, t, a) {
                                    const r = (0, n.useMemo)(() => Pt(a, e), t);
                                    return (0, n.useEffect)(() => r.cancel, [r]), r;
                                })(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, Pe.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (a(t, e), E.trigger('change', e), u && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                h = p[0],
                                v = p[1],
                                b = (0, n.useCallback)(
                                    (e, t, a) => {
                                        var n;
                                        const r = h.scrollPosition.get(),
                                            s = (null != (n = h.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, t * a + s + r);
                                    },
                                    [h.scrollPosition],
                                ),
                                f = (0, n.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            v.start({
                                                scrollPosition: o(n, e),
                                                immediate: t,
                                                reset: a,
                                                config: d.animationConfig,
                                                from: { scrollPosition: o(n, h.scrollPosition.get()) },
                                            });
                                    },
                                    [v, d.animationConfig, h.scrollPosition],
                                ),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            a = _.current;
                                        if (!t || !a) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return s(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, d.step),
                                            r = b(t, e, n);
                                        f(r);
                                    },
                                    [f, b, d.step],
                                ),
                                A = (0, n.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(r(e)),
                                            m.current && E.trigger('mouseWheel', e, h.scrollPosition, t(m.current));
                                    },
                                    [h.scrollPosition, C, E],
                                ),
                                D = ((e, t = []) => {
                                    const a = (0, n.useRef)(),
                                        r = (0, n.useCallback)((...t) => {
                                            a.current && a.current(), (a.current = e(...t));
                                        }, t);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        Re(() => {
                                            const e = m.current;
                                            e &&
                                                (f(o(e, h.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [f, h.scrollPosition.goal],
                                ),
                                F = Rt(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = o(e, h.scrollPosition.goal);
                                    t !== h.scrollPosition.goal && f(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            );
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? s(_.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: A,
                                    applyScroll: f,
                                    applyStepTo: C,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: v,
                                    animationScroll: h,
                                    recalculateContent: F,
                                    events: { on: E.on, off: E.off },
                                }),
                                [h.scrollPosition, f, C, E.off, E.on, F, A, v, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Lt = It({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? xt.Next : xt.Prev),
                    });
                class Ot extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = te.B3.GOLD;
                        else e = te.B3.INTEGRAL;
                        const t = te.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                Ot.defaultProps = { format: 'integral' };
                const Mt = {
                    '--pageContentWidth': '78vw',
                    base: 'CurrentPositionPanel_base_92',
                    base__active: 'CurrentPositionPanel_base__active_8c',
                    cell: 'CurrentPositionPanel_cell_be',
                    cell__order: 'CurrentPositionPanel_cell__order_be',
                    cell__currentPosition: 'CurrentPositionPanel_cell__currentPosition_c5',
                    cell__battles: 'CurrentPositionPanel_cell__battles_8f',
                    cell__score: 'CurrentPositionPanel_cell__score_d2',
                    screwIcon: 'CurrentPositionPanel_screwIcon_8f',
                    screwIcon__left: 'CurrentPositionPanel_screwIcon__left_cb',
                    screwIcon__right: 'CurrentPositionPanel_screwIcon__right_6e',
                };
                let $t;
                !(function (e) {
                    (e.None = 'None'), (e.Active = 'Active');
                })($t || ($t = {}));
                const Ht = R.strings.comp7.leaderboard.currentPosition,
                    Wt = { [$t.None]: 'none', [$t.Active]: 'active' },
                    zt = (0, J.Pi)(({ state: e, height: t, onClick: a, className: n }) => {
                        const s = pt().model.root.get(),
                            i = s.personalPosition,
                            u = s.personalBattlesCount,
                            o = s.personalScore;
                        return r().createElement(
                            'div',
                            {
                                className: f()(Mt.base, Mt[`base__${Wt[e]}`], n),
                                onClick: a,
                                style: { '--height': t ? `${t}rem` : 'auto' },
                            },
                            r().createElement('div', { className: f()(Mt.screwIcon, Mt.screwIcon__left) }),
                            {
                                [$t.None]: r().createElement('div', { className: f()(Mt.cell) }, Ht.none()),
                                [$t.Active]: r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: f()(Mt.cell, Mt.cell__order) }, i + 1),
                                    r().createElement(
                                        'div',
                                        { className: f()(Mt.cell, Mt.cell__currentPosition) },
                                        Ht.body(),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: f()(Mt.cell, Mt.cell__battles) },
                                        r().createElement(Ot, { value: u }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: f()(Mt.cell, Mt.cell__score) },
                                        r().createElement(Ot, { value: o }),
                                    ),
                                ),
                            }[e],
                            r().createElement('div', { className: f()(Mt.screwIcon, Mt.screwIcon__right) }),
                        );
                    });
                function Ut(e, t, a = []) {
                    const r = (0, n.useRef)(0),
                        s = (0, n.useCallback)(() => window.clearInterval(r.current), a || []);
                    (0, n.useEffect)(() => s, [s]);
                    const i = (null != a ? a : []).concat([t]);
                    return [
                        (0, n.useCallback)((a) => {
                            (r.current = window.setInterval(() => e(a, !0), t)), e(a, !1);
                        }, i),
                        s,
                    ];
                }
                const Vt = 'VerticalBar_base_f3',
                    Gt = 'VerticalBar_base__nonActive_42',
                    qt = 'VerticalBar_topButton_d7',
                    jt = 'VerticalBar_bottomButton_06',
                    Qt = 'VerticalBar_track_df',
                    Yt = 'VerticalBar_thumb_32',
                    Xt = 'VerticalBar_rail_43',
                    Kt = 'disable',
                    Zt = () => {},
                    Jt = { pending: !1, offset: 0 },
                    ea = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ta = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    aa = (e, t) => Math.max(20, e.offsetHeight * t),
                    na = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = ea, onDrag: s = Zt }) => {
                        const u = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, n.useState)(Jt),
                            E = _[0],
                            g = _[1],
                            p = (0, n.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [s],
                            ),
                            h = Rt(() => {
                                const t = d.current,
                                    a = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && a)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${aa(a, s)}px`),
                                    (t.style.display = 'flex'),
                                    u.current &&
                                        (1 === s ? u.current.classList.add(Gt) : u.current.classList.remove(Gt)),
                                    s
                                );
                            }),
                            v = Rt(() => {
                                const t = c.current,
                                    a = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && a && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    u = yt(0, 1, s / (r - n)),
                                    m = (t.offsetHeight - aa(t, i)) * u;
                                (a.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return o.current.classList.add(Kt), void l.current.classList.remove(Kt);
                                            if (
                                                ((t = c.current),
                                                (a = d.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(Kt), void l.current.classList.add(Kt);
                                            var t, a;
                                            o.current.classList.remove(Kt), l.current.classList.remove(Kt);
                                        }
                                    })(m);
                            }),
                            b = Rt(() => {
                                ta(e, () => {
                                    h(), v();
                                });
                            });
                        (0, n.useEffect)(() => Re(b)),
                            (0, n.useEffect)(() => {
                                const t = () => {
                                    ta(e, () => {
                                        v();
                                    });
                                };
                                let a = Zt;
                                const n = () => {
                                    a(), (a = Re(b));
                                };
                                return (
                                    e.events.on('recalculateContent', b),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        a(),
                                            e.events.off('recalculateContent', b),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!E.pending) return;
                                const t = i.O.client.events.mouse.up(() => {
                                        p(Jt);
                                    }),
                                    a = i.O.client.events.mouse.move(([t]) => {
                                        ta(e, (a) => {
                                            const n = c.current,
                                                r = d.current,
                                                i = e.getContainerSize();
                                            if (!n || !r || !i) return;
                                            const u = t.screenY - E.offset - n.getBoundingClientRect().y,
                                                o = (u / n.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                s({ type: 'dragging', thumb: r, thumbOffset: u, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    t(), a();
                                };
                            }, [e, E.offset, E.pending, s, p]);
                        const C = Ut((t) => e.applyStepTo(t), m, [e]),
                            A = C[0],
                            D = C[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const F = (e) => {
                            e.target.classList.contains(Kt) || j('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: f()(Vt, t.base), ref: u, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: f()(qt, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Kt) || 0 !== e.button || (j('play'), A(xt.Next));
                                },
                                ref: o,
                                onMouseEnter: F,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: f()(Qt, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if ((j('play'), t.target === n))
                                                p({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        ta(e, (n) => {
                                                            if (!n) return;
                                                            const r = a(e),
                                                                s = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? xt.Prev : xt.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: F,
                                },
                                r().createElement('div', { ref: d, className: f()(Yt, t.thumb) }),
                                r().createElement('div', { className: f()(Xt, t.rail) }),
                            ),
                            r().createElement('div', {
                                className: f()(jt, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Kt) || 0 !== e.button || (j('play'), A(xt.Prev));
                                },
                                onMouseUp: D,
                                ref: l,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    ra = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    sa = ({ className: e, classNames: t, children: a, api: s }) => (
                        (0, n.useEffect)(() => Re(s.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: f()(ra.base, e), ref: s.wrapperRef, onWheel: s.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: f()(ra.content, null == t ? void 0 : t.content), ref: s.contentRef },
                                a,
                            ),
                        )
                    );
                sa.Default = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: s,
                    areaClassName: i,
                    scrollClassName: u,
                    scrollClassNames: o,
                    getStepByRailClick: l,
                    onDrag: c,
                }) => {
                    const d = (0, n.useMemo)(() => {
                            const e = s || {};
                            return Object.assign({}, e, { base: f()(ra.base, e.base) });
                        }, [s]),
                        m = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return r().createElement(
                        'div',
                        { className: f()(ra.defaultScroll, a), onWheel: t.handleMouseWheel },
                        r().createElement(
                            'div',
                            { className: f()(ra.area, i) },
                            r().createElement(sa, { className: u, classNames: o, api: m }, e),
                        ),
                        r().createElement(na, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                    );
                };
                const ia = (e, t) => {
                    const a = [];
                    for (let n = 0; n < e; n++) a.push(t(n));
                    return a;
                };
                let ua, oa;
                !(function (e) {
                    (e[(e.A = 1)] = 'A'),
                        (e[(e.B = 2)] = 'B'),
                        (e[(e.C = 3)] = 'C'),
                        (e[(e.D = 4)] = 'D'),
                        (e[(e.E = 5)] = 'E');
                })(ua || (ua = {})),
                    (function (e) {
                        (e[(e.Achieved = 0)] = 'Achieved'),
                            (e[(e.Current = 1)] = 'Current'),
                            (e[(e.Inactive = 2)] = 'Inactive');
                    })(oa || (oa = {}));
                var la = a(1281);
                let ca;
                function da(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function ma(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function _a(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(ca || (ca = {}));
                const Ea = (e) => e.replace(/&nbsp;/g, ' '),
                    ga = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    pa = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    ha = (e, t, a = ca.left) => e.split(t).reduce(a === ca.left ? ga : pa, []),
                    va = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    ba = ['zh_cn', 'zh_sg', 'zh_tw'],
                    fa = (e, t = ca.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (ba.includes(a)) return va(e);
                        if ('ja' === a) {
                            return (0, la.D4)()
                                .parse(e)
                                .map((e) => Ea(e));
                        }
                        return ((e, t = ca.left) => {
                            let a = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = Ea(e);
                            return ha(r, /( )/, t).forEach((e) => (a = a.concat(ha(e, n, ca.left)))), a;
                        })(e, t);
                    },
                    Ca = R.strings.comp7.division,
                    Aa = { [ua.A]: 'A', [ua.B]: 'B', [ua.C]: 'C', [ua.D]: 'D', [ua.E]: 'E' },
                    Da = (e) => Ca.$dyn(Aa[e]),
                    Fa = (e) => ma(Ca.text(), { division: Da(e) });
                let wa;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(wa || (wa = {}));
                const Ba = {
                        [wa.First]: 'first',
                        [wa.Second]: 'second',
                        [wa.Third]: 'third',
                        [wa.Fourth]: 'fourth',
                        [wa.Fifth]: 'fifth',
                        [wa.Sixth]: 'sixth',
                    },
                    ya = (e) => Ba[e],
                    Sa = [wa.First, wa.Second, wa.Third, wa.Fourth],
                    Na = (e) => Sa.includes(e);
                let ka;
                !(function (e) {
                    (e[(e.x22 = 22)] = 'x22'),
                        (e[(e.x40 = 40)] = 'x40'),
                        (e[(e.x48 = 48)] = 'x48'),
                        (e[(e.x64 = 64)] = 'x64'),
                        (e[(e.x84 = 84)] = 'x84'),
                        (e[(e.x110 = 110)] = 'x110'),
                        (e[(e.x150 = 150)] = 'x150'),
                        (e[(e.x200 = 200)] = 'x200'),
                        (e[(e.x260 = 260)] = 'x260'),
                        (e[(e.x320 = 320)] = 'x320'),
                        (e[(e.x420 = 420)] = 'x420'),
                        (e[(e.x600 = 600)] = 'x600');
                })(ka || (ka = {}));
                const Ra = 'RankEmblem_base_ec',
                    Pa = ({ rank: e, size: t, division: a, seasonName: s, className: i }) => {
                        const u = (0, n.useMemo)(() => {
                            const n = R.images.gui.maps.icons.comp7.ranks.$dyn(s).$num(t),
                                r = Na(e) && void 0 !== a ? `_${Da(a)}` : '';
                            return { backgroundImage: `url(${n.$dyn(`${ya(e)}${r}`)})`, '--imageSize': `${t}rem` };
                        }, [s, t, e, a]);
                        return r().createElement('div', { className: f()(Ra, i), style: u });
                    },
                    xa = {
                        [wa.First]: 'first',
                        [wa.Second]: 'second',
                        [wa.Third]: 'third',
                        [wa.Fourth]: 'fourth',
                        [wa.Fifth]: 'fifth',
                        [wa.Sixth]: 'sixth',
                    },
                    Ta = (e, t) => `${e.$dyn(xa[t])}`,
                    Ia = (e) => Ta(R.strings.comp7.rank, e),
                    La = (e) => ma(R.strings.comp7.rank.text(), { rank: Ia(e) }),
                    Oa = 'RowsDivider_base_0a',
                    Ma = 'RowsDivider_rankText_96',
                    $a = (0, J.Pi)(({ index: e, className: t, onClick: a }) => {
                        const n = pt().model,
                            s = q().model,
                            i = n.computes.leaderboardItem(e).rank;
                        return r().createElement(
                            'div',
                            { className: f()(Oa, t), onClick: a },
                            r().createElement(Pa, { seasonName: s.season.name.get(), rank: i, size: ka.x64 }),
                            r().createElement('div', { className: Ma }, La(i)),
                        );
                    }),
                    Ha = 'Header_base_83',
                    Wa = 'Header_separator_14',
                    za = 'Header_cell_0e',
                    Ua = 'Header_cell__order_7d',
                    Va = 'Header_cell__player_c5',
                    Ga = 'Header_cell__score_3e',
                    qa = R.strings.comp7.leaderboard.table.header,
                    ja = R.strings.comp7.leaderboard.table.tooltip,
                    Qa = () =>
                        r().createElement(
                            'div',
                            { className: Ha },
                            r().createElement(
                                Ye,
                                { header: ja.order.header(), body: ja.order.body() },
                                r().createElement('div', { className: f()(za, Ua) }, qa.order()),
                            ),
                            r().createElement('div', { className: Wa }),
                            r().createElement(
                                Ye,
                                { header: ja.player.header(), body: ja.player.body() },
                                r().createElement('div', { className: f()(za, Va) }, qa.player()),
                            ),
                            r().createElement('div', { className: Wa }),
                            r().createElement(
                                Ye,
                                { header: ja.battlesCount.header(), body: ja.battlesCount.body() },
                                r().createElement('div', { className: f()(za, Ga) }, qa.battlesCount()),
                            ),
                            r().createElement('div', { className: Wa }),
                            r().createElement(
                                Ye,
                                { header: ja.score.header(), body: ja.score.body() },
                                r().createElement('div', { className: f()(za, Ga) }, qa.score()),
                            ),
                        );
                let Ya;
                !(function (e) {
                    (e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220');
                })(Ya || (Ya = {}));
                const Xa = 'TextOverflow_base_3b',
                    Ka = ({ content: e, classMix: t }) => {
                        const a = (0, n.useRef)(null),
                            s = (0, n.useState)(!0),
                            i = s[0],
                            u = s[1];
                        return (
                            (0, n.useEffect)(() =>
                                Re(() => {
                                    const e = a.current;
                                    e && e.offsetWidth >= e.scrollWidth && u(!1);
                                }),
                            ),
                            r().createElement(
                                Ye,
                                { isEnabled: i, body: e },
                                r().createElement('div', { ref: a, className: f()(Xa, t) }, e),
                            )
                        );
                    },
                    Za = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Ja = { [Ya.default]: 'c_24x24', [Ya.x48]: 'c_48x48', [Ya.x80]: 'c_80x80', [Ya.x220]: 'c_220x220' },
                    en = ({ badgeID: e, size: t = Ya.default, className: a }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(Ja[t]);
                        return r().createElement('div', {
                            className: f()(Za.base, Za[`base__${t}`], a),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${e}`)})` },
                        });
                    },
                    tn = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    an = (0, n.memo)(({ tooltipHeaderName: e }) => {
                        const t = (0, n.useMemo)(
                                () => ma(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            a = R.strings.tooltips.anonymizer.teamStats.body();
                        return r().createElement(
                            Ye,
                            { header: t, body: a },
                            r().createElement('div', { className: tn.anonymizedIcon }),
                        );
                    });
                function nn() {
                    return (
                        (nn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        nn.apply(this, arguments)
                    );
                }
                const rn = { [Ya.default]: 'c_64x24', [Ya.x48]: 'c_68x28' },
                    sn = { [Ya.default]: 'c_48x48', [Ya.x48]: 'c_48x48' },
                    un = ({
                        userName: e,
                        clanAbbrev: t = '',
                        igrType: a = 0,
                        badge: s = { badgeID: '' },
                        suffixBadge: i = { badgeID: '' },
                        isInverted: u = !1,
                        isFakeNameVisible: o = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: d = Ya.default,
                        userNameClassName: m = '',
                        clanTagClassName: _ = '',
                    }) => {
                        const E = R.images.gui.maps.icons.library.badges.strips.$dyn(rn[d]),
                            g = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${E.$dyn(`strip_${i.badgeID}`)})` }),
                                [i, E],
                            ),
                            p = R.images.gui.maps.icons.library.badges.$dyn(sn[d]),
                            h = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${p.$dyn(`badge_${i.badgeID}`)})` }),
                                [i, p],
                            ),
                            v = t ? `[${t}]` : '',
                            b = f()(tn.base, tn[`base__${d}`], u && tn.base__inverted),
                            C = f()(tn.userName, m),
                            A = f()(tn.clanTag, _),
                            D = e !== c,
                            F = o ? `${c}${v}` : c,
                            w = Boolean(s.badgeID) && r().createElement(en, nn({ size: d }, s, { key: 'badge' })),
                            B = Date.now(),
                            y = [
                                w,
                                [
                                    r().createElement(
                                        'div',
                                        { className: C, key: 'userName' },
                                        r().createElement(Ka, { content: e, key: B }),
                                    ),
                                    !o && Boolean(v) && r().createElement('div', { className: A, key: 'clanTag' }, v),
                                ],
                                0 !== a && r().createElement('div', { className: tn.igrIcon, key: 'igrType' }),
                                Boolean(i.badgeID) &&
                                    r().createElement(
                                        'div',
                                        { className: tn.suffixBadgeWrapper, key: 'suffixBadge' },
                                        r().createElement('div', { className: tn.suffixBadgeStripe, style: g }),
                                        r().createElement('div', { className: tn.suffixBadge, style: h }),
                                    ),
                                l && D && r().createElement(an, { tooltipHeaderName: F, key: 'anonymizer' }),
                            ];
                        return r().createElement('div', { className: b }, u ? y.reverse() : y);
                    };
                let on;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(on || (on = {}));
                const ln = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: r = 0,
                        args: s,
                        isEnabled: i = !0,
                        onMouseDown: u,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                (0, te.c9)(te.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    Q.playYes();
                            }, [s, t, a, r]),
                            l = (0, n.useCallback)(() => {
                                (0, te.c9)(te.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, r]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    u && u(e), ((e) => e.button === on.RIGHT)(e) && o();
                                },
                                [u, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === i && l();
                            }, [i, l]),
                            i ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    cn = ['children'];
                function dn() {
                    return (
                        (dn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        dn.apply(this, arguments)
                    );
                }
                const mn = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, cn);
                        return r().createElement(
                            ln,
                            dn({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    _n = ({ children: e, isEnabled: t, contextMenuArgs: a }) =>
                        t ? r().createElement(mn, { args: a }, e) : e,
                    En = {
                        base: 'Row_base_fc',
                        base__personal: 'Row_base__personal_1c',
                        order: 'Row_order_30',
                        order__first: 'Row_order__first_53',
                        order__second: 'Row_order__second_cb',
                        order__third: 'Row_order__third_c6',
                        playerContainer: 'Row_playerContainer_9e',
                        player: 'Row_player_f9',
                        clanTag: 'Row_clanTag_73',
                        battles: 'Row_battles_61',
                        score: 'Row_score_55',
                    },
                    gn = R.strings.comp7.leaderboard.table.tooltip,
                    pn = { 0: 'first', 1: 'second', 2: 'third' },
                    hn = (0, J.Pi)(({ index: e, className: t }) => {
                        const a = pt().model,
                            n = a.computes.leaderboardItem(e),
                            s = n.position,
                            i = n.battlesCount,
                            u = n.userName,
                            o = n.clanTag,
                            l = n.clanTagColor,
                            c = n.score,
                            d = n.spaID,
                            m = a.computes.isPersonalRow(e),
                            _ = a.computes.hasPositionIcon(e);
                        return r().createElement(
                            'div',
                            { className: f()(En.base, m && En.base__personal, t), style: { '--clanTagColor': l } },
                            r().createElement(
                                Ye,
                                { header: gn.order.header(), body: gn.order.body() },
                                r().createElement(
                                    'div',
                                    { className: f()(En.order, _ && En[`order__${pn[s]}`]) },
                                    !_ && s + 1,
                                ),
                            ),
                            r().createElement(
                                _n,
                                { contextMenuArgs: { spaID: d, userName: u }, isEnabled: !m },
                                r().createElement(
                                    'div',
                                    { className: En.playerContainer },
                                    r().createElement(
                                        Ye,
                                        { header: gn.player.header(), body: gn.player.body() },
                                        r().createElement(
                                            'div',
                                            { className: En.player },
                                            r().createElement(un, {
                                                userName: u,
                                                clanAbbrev: o,
                                                clanTagClassName: l && En.clanTag,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                Ye,
                                { header: gn.battlesCount.header(), body: gn.battlesCount.body() },
                                r().createElement(
                                    'div',
                                    { className: En.battles },
                                    r().createElement(Ot, { value: i }),
                                ),
                            ),
                            r().createElement(
                                Ye,
                                { header: gn.score.header(), body: gn.score.body() },
                                r().createElement('div', { className: En.score }, r().createElement(Ot, { value: c })),
                            ),
                        );
                    }),
                    vn = 'Leaderboard_base_ec',
                    bn = 'Leaderboard_content_a5',
                    fn = 'Leaderboard_shadowsContainer_bc',
                    Cn = 'Leaderboard_shadowsContainer__bottom_b4',
                    An = 'Leaderboard_shadow_3f',
                    Dn = 'Leaderboard_shadow__left_ee',
                    Fn = 'Leaderboard_shadow__center_37',
                    wn = 'Leaderboard_shadow__right_ee',
                    Bn = 'Leaderboard_area_c7',
                    yn = 'Leaderboard_row_06',
                    Sn = 'Leaderboard_rowsDivider_2c',
                    Nn = { base: 'Leaderboard_bar_69' },
                    kn = (0, J.Pi)(({ limit: e, api: t, rowHeight: a = 0, rowsDividerHeight: n = 0 }) => {
                        const s = pt().model,
                            i = s.computes.hasRowsDivider(),
                            u = s.computes.rowsDividerPosition() % e;
                        return r().createElement(
                            'div',
                            {
                                className: vn,
                                style: { '--rowHeight': a ? `${a}rem` : 'auto', '--rowsDividerHeight': `${n}rem` },
                            },
                            r().createElement(Qa, null),
                            r().createElement(
                                'div',
                                { className: bn },
                                r().createElement(
                                    'div',
                                    { className: fn },
                                    r().createElement('div', { className: f()(An, Dn) }),
                                    r().createElement('div', { className: f()(An, Fn) }),
                                    r().createElement('div', { className: f()(An, wn) }),
                                ),
                                r().createElement(
                                    sa,
                                    { api: t, className: Bn },
                                    ia(s.items.get().length, (e) =>
                                        r().createElement(
                                            r().Fragment,
                                            { key: e },
                                            i && e === u && r().createElement($a, { index: e, className: Sn }),
                                            r().createElement(hn, { className: yn, index: e }),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: f()(fn, Cn) },
                                    r().createElement('div', { className: f()(An, Dn) }),
                                    r().createElement('div', { className: f()(An, Fn) }),
                                    r().createElement('div', { className: f()(An, wn) }),
                                ),
                                r().createElement(na, { api: t, classNames: Nn }),
                            ),
                        );
                    }),
                    Rn = {
                        base: 'Pagination_base_49',
                        pageButton: 'Pagination_pageButton_27',
                        pageButton__active: 'Pagination_pageButton__active_0b',
                        pageButton__inactive: 'Pagination_pageButton__inactive_4c',
                        pageButton__disabled: 'Pagination_pageButton__disabled_e4',
                        pageValue: 'Pagination_pageValue_b2',
                        control: 'Pagination_control_4f',
                        control__active: 'Pagination_control__active_25',
                        control__prev: 'Pagination_control__prev_8e',
                        control__next: 'Pagination_control__next_86',
                    };
                let Pn;
                !(function (e) {
                    (e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled');
                })(Pn || (Pn = {}));
                const xn = R.strings.comp7.pagination,
                    Tn = Math.trunc(4),
                    In = ({ pagesAmount: e, activePage: t, className: a, onPageClick: n, onControlEvent: s }) => {
                        const i = t > 1,
                            u = t < e,
                            o = e < 9 ? e : 9,
                            l = (e) => () => {
                                null == n || n(e);
                            },
                            c = (e) => () => {
                                null == s || s(e);
                            };
                        return r().createElement(
                            'div',
                            { className: f()(Rn.base, a) },
                            r().createElement(
                                'div',
                                {
                                    className: f()(Rn.control, Rn.control__prev, i && Rn.control__active),
                                    onClick: i ? c('prevClick') : void 0,
                                },
                                xn.prev(),
                            ),
                            ia(o, (a) => {
                                const n = ((e, t, a) => {
                                        const n = t > Tn + 1,
                                            r = a > 9 && t + Tn < a;
                                        return a <= 9
                                            ? e + 1
                                            : 0 === e
                                              ? 1
                                              : (1 === e && n) || (7 === e && r)
                                                ? xn.dots()
                                                : 8 === e
                                                  ? a
                                                  : n && !r
                                                    ? a - 8 + e
                                                    : !n && r
                                                      ? e + 1
                                                      : e - Tn + t;
                                    })(a, t, e),
                                    s = ((e, t) =>
                                        Number.isInteger(e) ? (t === e ? Pn.Active : Pn.Inactive) : Pn.Disabled)(n, t);
                                return r().createElement(
                                    'div',
                                    {
                                        key: a,
                                        className: f()(Rn.pageButton, Rn[`pageButton__${s}`]),
                                        onClick: s !== Pn.Disabled && 'number' == typeof n ? l(n) : void 0,
                                    },
                                    r().createElement('div', { className: Rn.pageValue }, n),
                                );
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: f()(Rn.control, Rn.control__next, u && Rn.control__active),
                                    onClick: u ? c('nextClick') : void 0,
                                },
                                xn.next(),
                            ),
                        );
                    },
                    Ln = 'HasRecordsState_base_bb',
                    On = 'HasRecordsState_base__withoutPagination_ad',
                    Mn = 'HasRecordsState_tableContainer_02',
                    $n = 'HasRecordsState_pagination_cb',
                    Hn = {
                        settings: Object.assign({}, Tt, {
                            animationConfig: Object.assign({}, Tt.animationConfig, { round: 1 }),
                        }),
                    },
                    Wn = (0, J.Pi)(
                        ({
                            limit: e,
                            onCurrentRankTabChange: t,
                            positionToScroll: a,
                            onPositionToScrollChange: s,
                            className: u,
                        }) => {
                            const o = pt(),
                                l = o.model,
                                c = o.controls,
                                d = l.root.get(),
                                m = d.personalPosition,
                                _ = d.lastBestUserPosition,
                                E = Lt(Hn),
                                g = E.animationScroll.scrollPosition,
                                p = E.applyScroll,
                                h = E.events,
                                v = E.getBounds,
                                b = l.computes.isDefaultPersonalPosition() ? $t.None : $t.Active,
                                C = l.computes.pages(e),
                                A = l.computes.pagePositions(),
                                D = l.computes.rowsDividerPosition(),
                                F = l.computes.hasRowsDivider(),
                                w = ((e, t) => i.O.view.remToPx(44) * ((e + 1) % t))(_, e);
                            (0, n.useEffect)(
                                () =>
                                    Re(() => {
                                        if (void 0 !== a) {
                                            switch (a.type) {
                                                case 'rank': {
                                                    const e = a.rank === Bt.Fifth ? w : 0;
                                                    p(e);
                                                    break;
                                                }
                                                case 'personalPosition': {
                                                    const t = i.O.view.remToPx(44) * (m % e),
                                                        a = F && m > _ ? t + i.O.view.remToPx(70) : t;
                                                    p(a);
                                                    break;
                                                }
                                                case 'page':
                                                    p(0);
                                            }
                                            s(void 0);
                                        }
                                    }),
                                [p, F, _, e, m, a, w, s],
                            );
                            const B = (0, n.useCallback)(() => {
                                const e = A.first > _ ? Bt.Fifth : Bt.Sixth;
                                t(e);
                            }, [A.first, _, t]);
                            (0, n.useEffect)(() => {
                                B();
                            }, [B]),
                                (0, n.useEffect)(() => {
                                    const e = () => {
                                        if (F && D > A.first) {
                                            const e = v()[1],
                                                a = 0 !== e && g.goal === e && w >= e;
                                            t(g.goal >= w || a ? Bt.Fifth : Bt.Sixth);
                                        } else m >= A.first && m <= A.last ? t(m > _ ? Bt.Fifth : Bt.Sixth) : B();
                                    };
                                    return h.on('change', e), () => h.off('change', e);
                                }, [h, A.first, F, _, A.last, e, m, w, D, g.goal, t, B, v]);
                            const y = (0, n.useCallback)(() => {
                                    b !== $t.None &&
                                        (Q.playYes(),
                                        c.getTableRecords(e, m - (m % e)),
                                        s({ type: 'personalPosition' }));
                                }, [c, e, b, m, s]),
                                S = (0, n.useCallback)(
                                    (t) => {
                                        Q.playYes(), c.getTableRecords(e, (t - 1) * e), s({ type: 'page' });
                                    },
                                    [c, e, s],
                                ),
                                N = (0, n.useCallback)(
                                    (t) => {
                                        Q.playYes();
                                        const a = (() => {
                                            switch (t) {
                                                case 'prevClick':
                                                    return C.active - 1;
                                                case 'nextClick':
                                                    return C.active + 1;
                                                default:
                                                    return 1;
                                            }
                                        })();
                                        c.getTableRecords(e, (a - 1) * e), s({ type: 'page' });
                                    },
                                    [C.active, c, e, s],
                                );
                            return r().createElement(
                                'div',
                                { className: f()(Ln, !C.hasPagination && On, u) },
                                r().createElement(
                                    'div',
                                    { className: Mn },
                                    r().createElement(kn, { limit: e, api: E, rowHeight: 44, rowsDividerHeight: 70 }),
                                ),
                                r().createElement(zt, { state: b, onClick: y, height: 44 }),
                                C.hasPagination &&
                                    r().createElement(In, {
                                        pagesAmount: C.amount,
                                        activePage: C.active,
                                        className: $n,
                                        onPageClick: S,
                                        onControlEvent: N,
                                    }),
                            );
                        },
                    ),
                    zn = R.views.lobby.comp7.tooltips,
                    Un = ['rank', 'divisions', 'from', 'to', 'topPercentage', 'children', 'className'];
                function Vn() {
                    return (
                        (Vn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Vn.apply(this, arguments)
                    );
                }
                const Gn = (e) => {
                        let t = e.rank,
                            a = e.divisions,
                            n = e.from,
                            s = e.to,
                            i = e.topPercentage,
                            u = e.children,
                            o = e.className,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Un);
                        const c = (({ rank: e, topPercentage: t, from: a, to: n, divisions: r = '' }) => {
                            switch (e) {
                                case wa.Sixth:
                                    return { contentId: zn.SixthRankTooltip('resId'), args: { topPercentage: t } };
                                case wa.Fifth:
                                    return { contentId: zn.FifthRankTooltip('resId'), args: { from: a } };
                                default:
                                    return {
                                        contentId: zn.GeneralRankTooltip('resId'),
                                        args: { rank: e, divisions: r, from: a, to: n },
                                    };
                            }
                        })({ rank: t, divisions: a, from: n, to: s, topPercentage: i });
                        return r().createElement(Ge, Vn({}, c, l), r().createElement('div', { className: o }, u));
                    },
                    qn = {
                        '--pageContentWidth': '78vw',
                        base: 'RankTabs_base_c4',
                        line: 'RankTabs_line_0e',
                        line__toRight: 'RankTabs_line__toRight_43',
                        line__toLeft: 'RankTabs_line__toLeft_cd',
                        ranksContainer: 'RankTabs_ranksContainer_86',
                        dividersDot: 'RankTabs_dividersDot_b9',
                        rank: 'RankTabs_rank_6f',
                        rankEmblem: 'RankTabs_rankEmblem_d6',
                        rank__disabled: 'RankTabs_rank__disabled_55',
                        label: 'RankTabs_label_cc',
                        rank__active: 'RankTabs_rank__active_38',
                        rankTabHighlight: 'RankTabs_rankTabHighlight_c1',
                        fadeIn: 'RankTabs_fadeIn_42',
                        fadeInThreeQuarters: 'RankTabs_fadeInThreeQuarters_0c',
                        fadeInHalf: 'RankTabs_fadeInHalf_ca',
                        fadeOut: 'RankTabs_fadeOut_3e',
                        fadeInWithScale: 'RankTabs_fadeInWithScale_d0',
                        slideUp: 'RankTabs_slideUp_d1',
                        scale: 'RankTabs_scale_a5',
                        raysAppearance: 'RankTabs_raysAppearance_39',
                        rotate: 'RankTabs_rotate_b0',
                        'reverse-rotate': 'RankTabs_reverse-rotate_85',
                        glowAppearance: 'RankTabs_glowAppearance_c7',
                        highlightAppearance: 'RankTabs_highlightAppearance_67',
                        blink: 'RankTabs_blink_8a',
                        slideUpIn: 'RankTabs_slideUpIn_c8',
                    };
                let jn;
                !(function (e) {
                    (e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled');
                })(jn || (jn = {}));
                const Qn = ({ tabs: e, seasonName: t, className: a, onTabClick: n }) => {
                        const s = (e) => () => {
                            null == n || n(e);
                        };
                        return r().createElement(
                            'div',
                            { className: f()(qn.base, a) },
                            r().createElement('div', { className: qn.dividersDot }),
                            r().createElement('div', { className: f()(qn.line, qn.line__toRight) }),
                            r().createElement(
                                'div',
                                { className: qn.ranksContainer },
                                e.map(({ rank: e, state: a, args: n = {} }) => {
                                    const i = a !== jn.Disabled;
                                    return r().createElement(
                                        'div',
                                        { className: f()(qn.rank, qn[`rank__${a}`]), key: e },
                                        r().createElement(
                                            Gn,
                                            {
                                                rank: e,
                                                from: null == n ? void 0 : n.from,
                                                topPercentage: null == n ? void 0 : n.topPercentage,
                                                onClick: i ? s(e) : void 0,
                                                onMouseEnter: i ? Q.playHighlight : void 0,
                                            },
                                            r().createElement('div', { className: qn.rankTabHighlight }),
                                            r().createElement(Pa, {
                                                seasonName: t,
                                                rank: e,
                                                size: ka.x64,
                                                className: qn.rankEmblem,
                                            }),
                                        ),
                                        a !== jn.Disabled && r().createElement('div', { className: qn.label }, La(e)),
                                    );
                                }),
                            ),
                            r().createElement('div', { className: f()(qn.line, qn.line__toLeft) }),
                        );
                    },
                    Yn = 'HasRecordsStateContainer_base_ee',
                    Xn = 'HasRecordsStateContainer_content_b4',
                    Kn = ({ rank: e, lastBestUserPosition: t, currentRankTab: a, recordsCount: n }) =>
                        (e === Bt.Sixth && -1 === t) || 0 === n ? jn.Disabled : e === a ? jn.Active : jn.Inactive,
                    Zn = [Bt.Fifth, Bt.Sixth],
                    Jn = (0, J.Pi)(({ className: e }) => {
                        const t = pt(),
                            a = t.model,
                            s = t.controls,
                            i = q().model,
                            u = a.root.get(),
                            o = u.lastBestUserPosition,
                            l = u.recordsCount,
                            c = u.from,
                            d = u.topPercentage,
                            m = a.computes.hasLastBestUserPosition(),
                            _ = a.computes.rowsDividerPosition(),
                            E = (0, n.useState)(a.computes.firstItemRank()),
                            g = E[0],
                            p = E[1],
                            h = (0, n.useState)(),
                            v = h[0],
                            b = h[1],
                            C = Zn.map((e) => ({
                                rank: e,
                                state: Kn({ rank: e, lastBestUserPosition: o, currentRankTab: g, recordsCount: l }),
                                args: { from: c, topPercentage: d },
                            })),
                            A = (0, n.useCallback)(
                                (e) => {
                                    const t = e === Bt.Fifth && m ? _ - (_ % 50) : 0;
                                    Q.playClick(), s.getTableRecords(50, t), b({ type: 'rank', rank: e });
                                },
                                [s, _, m, 50],
                            );
                        return r().createElement(
                            'div',
                            { className: f()(Yn, e) },
                            r().createElement(Qn, { tabs: C, seasonName: i.season.name.get(), onTabClick: A }),
                            r().createElement(Wn, {
                                limit: 50,
                                positionToScroll: v,
                                onCurrentRankTabChange: p,
                                onPositionToScrollChange: b,
                                className: Xn,
                            }),
                        );
                    }),
                    er = 'FormatText_base_d0',
                    tr = ({ binding: e, text: t = '', classMix: a, alignment: s = ca.left, formatWithBrackets: i }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const u = i && e ? da(t, e) : t;
                        return r().createElement(
                            n.Fragment,
                            null,
                            u.split('\n').map((t, i) =>
                                r().createElement(
                                    'div',
                                    { className: f()(er, a), key: `${t}-${i}` },
                                    ((e, t, a) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : fa(e, t))))(
                                        t,
                                        s,
                                        e,
                                    ).map((e, t) => r().createElement(n.Fragment, { key: `${t}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    ar = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    nr = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    rr = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    sr = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    ir = (0, n.memo)(({ text: e, binding: t, classMix: a }) => {
                        const s = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = (0, n.useMemo)(() => t || {}, [t]);
                        let u = nr.exec(e),
                            o = e,
                            l = 0;
                        for (; u; ) {
                            const a = u[0],
                                n = rr.exec(a),
                                c = sr.exec(a),
                                d = u[1];
                            if (n && c) {
                                const e = n[0],
                                    u = e + l++ + e;
                                (o = o.replace(a, `%(${u})`)),
                                    (i[u] = ar[e]
                                        ? r().createElement(
                                              'span',
                                              { className: ar[e] },
                                              r().createElement(tr, { text: d, binding: t }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: s(e) },
                                              r().createElement(tr, { text: d, binding: t }),
                                          ));
                            }
                            u = nr.exec(e);
                        }
                        return r().createElement(tr, { text: o, classMix: a, binding: i });
                    }),
                    ur = {
                        base: 'NoRecordsState_base_9b',
                        imageContainer: 'NoRecordsState_imageContainer_13',
                        image: 'NoRecordsState_image_fe',
                        image__season_first: 'NoRecordsState_image__season_first_5d',
                        image__season_second: 'NoRecordsState_image__season_second_8c',
                        image__season_third: 'NoRecordsState_image__season_third_be',
                        title: 'NoRecordsState_title_f4',
                        subtitle: 'NoRecordsState_subtitle_5b',
                    },
                    or = R.strings.comp7.leaderboard.noRecords,
                    lr = (0, J.Pi)(({ className: e }) => {
                        const t = pt().model.root.get().from,
                            a = q().model;
                        return r().createElement(
                            'div',
                            { className: f()(ur.base, e) },
                            r().createElement(
                                'div',
                                { className: ur.imageContainer },
                                r().createElement('div', {
                                    className: f()(ur.image, ur[`image__season_${a.season.name.get()}`]),
                                }),
                            ),
                            r().createElement('div', { className: ur.title }, or.title()),
                            r().createElement(ir, {
                                text: or.subtitle(),
                                binding: { pointsCount: r().createElement(Ot, { value: t }) },
                                classMix: ur.subtitle,
                            }),
                        );
                    });
                let cr;
                !(function (e) {
                    (e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime');
                })(cr || (cr = {}));
                var dr = a(8613);
                const mr = 60,
                    _r = 3600,
                    Er = 86400,
                    gr = (Date.now(), dr.Ew.getRegionalDateTime),
                    pr = dr.Ew.getFormattedDateTime;
                const hr = (0, n.memo)(({ datetime: e, format: t = cr.ShortDate, isConvertedToLocal: a = !0 }) =>
                        Object.values(cr).includes(t) ? gr(e, t, a) : pr(e, t, a),
                    ),
                    vr = ma(R.strings.comp7.lastUpdateNote.lastBestUserPoints.description(), { count: 15 }),
                    br = 'LastUpdateNote_base_7f',
                    fr = 'LastUpdateNote_infoIcon_5c',
                    Cr = ['timestamp', 'className', 'classNames', 'dateTimeFormat', 'contentId', 'tooltipDescription'];
                function Ar() {
                    return (
                        (Ar =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ar.apply(this, arguments)
                    );
                }
                const Dr = R.strings.comp7.lastUpdateNote,
                    Fr = (e) => {
                        let t = e.timestamp,
                            a = e.className,
                            n = e.classNames,
                            s = e.dateTimeFormat,
                            i = void 0 === s ? cr.ShortTime : s,
                            u = e.contentId,
                            o = void 0 === u ? R.views.lobby.comp7.tooltips.LastUpdateTooltip('resId') : u,
                            l = e.tooltipDescription,
                            c = void 0 === l ? vr : l,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Cr);
                        return r().createElement(
                            'div',
                            { className: f()(br, a) },
                            r().createElement(tr, {
                                text: Dr.info(),
                                binding: { date: r().createElement(hr, { datetime: t, format: i }) },
                            }),
                            r().createElement(
                                Ge,
                                Ar({ ignoreShowDelay: !0, contentId: o, args: { description: c } }, d),
                                r().createElement('div', { className: f()(fr, null == n ? void 0 : n.icon) }),
                            ),
                        );
                    },
                    wr = R.strings.comp7,
                    Br = (e, t) => String(e.$dyn(t)),
                    yr = (e) => Br(wr.seasonName, e),
                    Sr = (e, t) => {
                        let a;
                        const n = setTimeout(() => {
                            a = e();
                        }, t);
                        return () => {
                            'function' == typeof a && a(), clearTimeout(n);
                        };
                    };
                const Nr = ['children'];
                function kr() {
                    return (
                        (kr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        kr.apply(this, arguments)
                    );
                }
                const Rr = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Nr);
                        return r().createElement(
                            Ge,
                            kr(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                a,
                            ),
                            t,
                        );
                    },
                    Pr = (e) => {
                        const t = Math.floor(e);
                        return {
                            totalSecondsLeft: t,
                            seconds: Math.floor(t % 60),
                            minutes: Math.floor(t / 60) % 60,
                            hours: Math.floor((t / 3600) % 24),
                            totalDays: Math.floor(t / 86400),
                        };
                    },
                    xr = R.strings.comp7.season,
                    Tr = (e, t) => ({
                        startDate: r().createElement(hr, { datetime: e, format: cr.ShortDate }),
                        endDate: r().createElement(hr, { datetime: t, format: cr.ShortDate }),
                    }),
                    Ir = (e, t, a) => {
                        const n = t - a,
                            s = ((e, t) => Pr(e - t))(t, a);
                        return n >= 604800
                            ? r().createElement(tr, { text: xr.range(), binding: Tr(e, t) })
                            : n >= Er
                              ? r().createElement(tr, { text: xr.daysLeft(), binding: s })
                              : n >= _r
                                ? r().createElement(tr, { text: xr.hoursLeft(), binding: s })
                                : n >= mr
                                  ? r().createElement(tr, { text: xr.minutesLeft(), binding: s })
                                  : n >= 1
                                    ? r().createElement(tr, { text: xr.secondsLeft(), binding: s })
                                    : void 0;
                    },
                    Lr = 'ActiveSeasonState_base_55',
                    Or = 'ActiveSeasonState_calendarIcon_df',
                    Mr = 'ActiveSeasonState_divider_5b',
                    $r = ({
                        startTimestamp: e,
                        endTimestamp: t,
                        currentTimestamp: a,
                        seasonName: n,
                        tooltipId: s = '',
                        hasSeasonName: i = !0,
                    }) =>
                        r().createElement(
                            Rr,
                            { args: { tooltipId: s }, isEnabled: Boolean(s) },
                            r().createElement(
                                'div',
                                { className: Lr },
                                r().createElement('div', { className: Or }),
                                i &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        yr(n),
                                        r().createElement('div', { className: Mr }),
                                    ),
                                Ir(e, t, a),
                            ),
                        ),
                    Hr = 'ScheduleSubheading_base_f7',
                    Wr = (0, J.Pi)(({ className: e, classNames: t, hasSeasonName: a = !0 }) => {
                        const s = q(),
                            i = s.model,
                            u = s.controls,
                            o = i.season.startTimestamp.get(),
                            l = i.season.endTimestamp.get(),
                            c = i.season.serverTimestamp.get(),
                            d = i.season.name.get();
                        return (
                            (function (e, t, a) {
                                (0, n.useEffect)(() => {
                                    if (!(e >= t))
                                        return Sr(() => {
                                            a();
                                        }, 950);
                                }, [t, a, e]);
                            })(c, l, u.pollServerTime),
                            r().createElement(
                                'div',
                                { className: f()(Hr, e) },
                                c < l
                                    ? r().createElement(
                                          'div',
                                          { className: null == t ? void 0 : t.activeSeasonState },
                                          r().createElement($r, {
                                              startTimestamp: o,
                                              endTimestamp: l,
                                              currentTimestamp: c,
                                              seasonName: d,
                                              tooltipId: i.root.get().tooltipId,
                                              hasSeasonName: a,
                                          }),
                                      )
                                    : r().createElement(ir, {
                                          text: R.strings.comp7.season.over(),
                                          binding: { seasonName: yr(d) },
                                      }),
                            )
                        );
                    }),
                    zr = 'SubheadingContainer_base_a6',
                    Ur = 'SubheadingContainer_updateInfo_9a',
                    Vr = 'SubheadingContainer_updateInfoText_40',
                    Gr = (0, J.Pi)(({ className: e }) => {
                        const t = pt().model,
                            a = t.root.get().leaderboardUpdateTimestamp,
                            n = t.computes.hasUpdateInfo(),
                            s = ma(R.strings.comp7.lastUpdateNote.ratingPositions.description(), { count: 15 });
                        return r().createElement(
                            'div',
                            { className: f()(zr, e) },
                            r().createElement(Wr, null),
                            n &&
                                r().createElement(
                                    'div',
                                    { className: Ur },
                                    r().createElement(Fr, { timestamp: a, className: Vr, tooltipDescription: s }),
                                ),
                        );
                    }),
                    qr = {
                        '--pageContentWidth': '78vw',
                        base: 'LeaderboardPage_base_4a',
                        animationContainer: 'LeaderboardPage_animationContainer_94',
                        subHeading: 'LeaderboardPage_subHeading_ae',
                        content: 'LeaderboardPage_content_46',
                        base__loading: 'LeaderboardPage_base__loading_12',
                        hasRecords: 'LeaderboardPage_hasRecords_9f',
                        error: 'LeaderboardPage_error_7d',
                        noRecords: 'LeaderboardPage_noRecords_6b',
                        spinner: 'LeaderboardPage_spinner_67',
                        fadeIn: 'LeaderboardPage_fadeIn_46',
                        fadeInThreeQuarters: 'LeaderboardPage_fadeInThreeQuarters_98',
                        fadeInHalf: 'LeaderboardPage_fadeInHalf_30',
                        fadeOut: 'LeaderboardPage_fadeOut_e8',
                        fadeInWithScale: 'LeaderboardPage_fadeInWithScale_07',
                        slideUp: 'LeaderboardPage_slideUp_9c',
                        scale: 'LeaderboardPage_scale_5d',
                        raysAppearance: 'LeaderboardPage_raysAppearance_c3',
                        rotate: 'LeaderboardPage_rotate_db',
                        'reverse-rotate': 'LeaderboardPage_reverse-rotate_1d',
                        glowAppearance: 'LeaderboardPage_glowAppearance_4f',
                        highlightAppearance: 'LeaderboardPage_highlightAppearance_23',
                        blink: 'LeaderboardPage_blink_7e',
                        slideUpIn: 'LeaderboardPage_slideUpIn_37',
                    },
                    jr = { [rt.Initial]: 'initial', [rt.Success]: 'success', [rt.Error]: 'error' },
                    Qr = (0, J.Pi)(() => {
                        const e = pt().model,
                            t = e.root.get(),
                            a = t.state,
                            n = t.isLoading,
                            s = (0, Pe.useSpring)(ut);
                        return r().createElement(
                            'div',
                            { className: f()(qr.base, qr[`base__${jr[a]}`], n && qr.base__loading) },
                            r().createElement(it, { className: re }, R.strings.comp7.page.heading.leaderboard()),
                            r().createElement(Gr, { className: qr.subHeading }),
                            r().createElement(
                                Pe.animated.div,
                                { className: qr.animationContainer, style: s },
                                r().createElement(
                                    'div',
                                    { className: qr.content },
                                    (() => {
                                        switch (a) {
                                            case rt.Initial:
                                                return null;
                                            case rt.Success:
                                                return e.items.get().length > 0
                                                    ? r().createElement(Jn, { className: qr.hasRecords })
                                                    : r().createElement(lr, { className: qr.noRecords });
                                            case rt.Error:
                                                return r().createElement(wt, { className: qr.error });
                                            default:
                                                console.error(
                                                    'Unreachable branch: add component for proper leaderboard state',
                                                );
                                        }
                                    })(),
                                ),
                                n &&
                                    r().createElement(nt, {
                                        message: R.strings.comp7.waitingSpinner.message(),
                                        className: qr.spinner,
                                    }),
                            ),
                        );
                    }),
                    Yr = (e) => be(e, (e) => Da(e.name)).join(R.strings.comp7.listSeparator());
                let Xr, Kr, Zr, Jr;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(Xr || (Xr = {})),
                    (function (e) {
                        (e[(e.Base = 0)] = 'Base'),
                            (e[(e.Vehicle = 1)] = 'Vehicle'),
                            (e[(e.Style3d = 2)] = 'Style3d'),
                            (e[(e.Reward = 3)] = 'Reward');
                    })(Kr || (Kr = {})),
                    (function (e) {
                        (e.Locked = 'locked'),
                            (e.ReadyToRestore = 'readyToRestore'),
                            (e.ReadyToPurchase = 'readyToPurchase'),
                            (e.Purchased = 'purchased'),
                            (e.InProgress = 'inProgress');
                    })(Zr || (Zr = {})),
                    (function (e) {
                        (e.Previous = 'previous'), (e.Current = 'current'), (e.Future = 'future');
                    })(Jr || (Jr = {}));
                const es = [wa.Fifth, wa.Sixth],
                    ts = U()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    qualificationModel: e.primitives(
                                        ['isActive', 'battlesCount', 'maxBattlesCount', 'isRatingCalculation'],
                                        'qualificationModel',
                                    ),
                                    isRewardLayerVisible: $.LO.box(!1),
                                    isParallaxPreloaded: $.LO.box(!1),
                                },
                                a = e.array('items'),
                                n = e.array('qualificationModel.battles'),
                                r = (0, me.Om)(
                                    (e) => {
                                        const t = pe(a.get(), e);
                                        if (!t) throw new Error(`item with index ${e} was not found`);
                                        return {
                                            hasRankInactivity: t.hasRankInactivity,
                                            rank: t.rank,
                                            from: t.from,
                                            to: t.to,
                                        };
                                    },
                                    { equals: _t },
                                ),
                                s = (0, me.Om)(
                                    (e) => {
                                        const t = pe(a.get(), e);
                                        if (!t) throw new Error(`item with index ${e} was not found`);
                                        return be(t.divisions, (e) => Object.assign({}, e));
                                    },
                                    { equals: M },
                                ),
                                i = (0, me.Om)(
                                    (e) => {
                                        const t = s(e);
                                        return {
                                            list: Yr(t),
                                            count: t.length,
                                            currentDivisionIndex: De(t, (e) => e.state === oa.Current),
                                        };
                                    },
                                    { equals: _t },
                                ),
                                u = (0, me.Om)(() => {
                                    const e = t.root.get().currentItemIndex,
                                        n = pe(a.get(), e);
                                    if (!n) throw new Error(`current item with currentItemIndex ${e} was not found`);
                                    return n.hasRankInactivity;
                                }),
                                o = (0, me.Om)(
                                    (e) => {
                                        var a;
                                        const n =
                                            ((i = e),
                                            (u = t.root.get().currentItemIndex),
                                            i > u ? Jr.Future : i < u ? Jr.Previous : Jr.Current);
                                        var i, u;
                                        return {
                                            state: n,
                                            division:
                                                null == (a = Ae(s(e), (e) => e.state === oa.Current)) ? void 0 : a.name,
                                            hasInfo: n === Jr.Current && es.includes(r(e).rank),
                                        };
                                    },
                                    { equals: _t },
                                ),
                                l = (0, me.Om)(
                                    (e) => {
                                        const t = pe(n.get(), e);
                                        if (!t) throw new Error(`qualification battle with index ${e} was not found`);
                                        return t;
                                    },
                                    { equals: M },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    item: r,
                                    qualificationBattle: l,
                                    itemsLength: (0, me.Om)(() => a.get().length),
                                    qualificationBattlesLength: (0, me.Om)(() => n.get().length),
                                    rankSettings: o,
                                    hasCurrentItemRankInactivity: u,
                                    divisions: s,
                                    divisionsConfig: i,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = (0, $.aD)((e) => t.isRewardLayerVisible.set(e));
                            return {
                                setIsParallaxPreloaded: (0, $.aD)((e) => t.isParallaxPreloaded.set(e)),
                                setRewardLayerVisible: a,
                                goToRankRewardsPage: e.createCallbackNoArgs('qualificationModel.onRankRewardsPageOpen'),
                            };
                        },
                    ),
                    as = ts[0],
                    ns = ts[1],
                    rs = 'RatingScore_base_bd',
                    ss = 'RatingScore_rating_c9',
                    is = 'RatingScore_score_33',
                    us = 'RatingScore_rankInactivity_17',
                    os = 'RatingScore_rankInactivityCount_31',
                    ls = 'RatingScore_rankInactivityIconContainer_32',
                    cs = 'RatingScore_rankInactivityIcon_05',
                    ds = 'RatingScore_title_e4',
                    ms = ({ currentScore: e, hasRankInactivity: t, rankInactivityCount: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: f()(rs, n) },
                            r().createElement(
                                'div',
                                { className: ss },
                                r().createElement('div', { className: is }, e),
                                t &&
                                    r().createElement(
                                        Ge,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.comp7.tooltips.RankInactivityTooltip('resId'),
                                            args: { rankInactivityCount: a },
                                        },
                                        r().createElement(
                                            'div',
                                            { className: us },
                                            r().createElement('div', { className: os }, a),
                                            r().createElement(
                                                'div',
                                                { className: ls },
                                                r().createElement('div', { className: cs }),
                                            ),
                                        ),
                                    ),
                            ),
                            r().createElement('div', { className: ds }, R.strings.comp7.ratingScore.title()),
                        ),
                    _s = 'ItemFooter_base_0f',
                    Es = 'ItemFooter_background_bf',
                    gs = 'ItemFooter_divider_bb',
                    ps = 'ItemFooter_light_79',
                    hs = 'ItemFooter_footer_e7',
                    vs = 'ItemFooter_rankItemFooter_e6',
                    bs = (0, J.Pi)(({ className: e }) => {
                        const t = ns().model,
                            a = t.root.get(),
                            n = a.currentScore,
                            s = a.rankInactivityCount;
                        return r().createElement(
                            'div',
                            { className: f()(_s, e) },
                            r().createElement('div', { className: Es }),
                            r().createElement('div', { className: gs }),
                            r().createElement('div', { className: ps }),
                            r().createElement(
                                'div',
                                { className: hs },
                                r().createElement(ms, {
                                    currentScore: n,
                                    hasRankInactivity: t.computes.hasCurrentItemRankInactivity(),
                                    rankInactivityCount: s,
                                    className: vs,
                                }),
                            ),
                        );
                    }),
                    fs = [
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_5(),
                            speedX: -0.053,
                            speedY: -0.01,
                        },
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_4(),
                            speedX: -0.037,
                            speedY: -0.0055,
                        },
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_3(),
                            speedX: -0.025,
                            speedY: -0.0016,
                        },
                        { path: R.images.gui.maps.icons.comp7.qualificationParallax.c_2(), speedX: 0, speedY: 0 },
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_1(),
                            speedX: 0.015,
                            speedY: 0.002,
                        },
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_1_1(),
                            speedX: 0.015,
                            speedY: 0.002,
                        },
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_0(),
                            speedX: 0.03,
                            speedY: 0.014,
                        },
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_0_1(),
                            speedX: 0.03,
                            speedY: 0.014,
                        },
                    ],
                    Cs = 'Parallax_base_c9',
                    As = 'Parallax_layer_15',
                    Ds = 'Parallax_shadow_45',
                    Fs = [
                        R.images.gui.maps.icons.comp7.qualificationParallax.c_1_1(),
                        R.images.gui.maps.icons.comp7.qualificationParallax.c_0_1(),
                    ],
                    ws = fs.reduce((e, t) => {
                        const a = Math.abs(t.speedX);
                        return a > e ? a : e;
                    }, 0),
                    Bs = (0, J.Pi)(({ className: e }) => {
                        const t = ns().model,
                            a = B().remScreenWidth,
                            s = (0, n.createRef)(),
                            u = ws * a,
                            o = (0, Pe.useSpring)({
                                to: { opacity: t.isRewardLayerVisible.get() ? 1 : 0 },
                                config: { duration: 300 },
                            }),
                            l = ((e) => {
                                const t = (0, n.useCallback)(
                                        (t) => {
                                            if (!e.current) return;
                                            const a = e.current.getBoundingClientRect(),
                                                n = a.width,
                                                r = a.height;
                                            return (
                                                0 !== t.clientX &&
                                                0 !== t.clientY &&
                                                t.clientX <= n - 2 &&
                                                t.clientY <= r - 2
                                            );
                                        },
                                        [e],
                                    ),
                                    a = (0, Pe.useSpring)(
                                        () => Object.assign({}, i.O.client.getMouseGlobalPosition('px')),
                                        [],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = (e) => {
                                            t(e) && a[1].start({ x: e.clientX, y: e.clientY });
                                        };
                                        return (
                                            document.addEventListener('mousemove', e),
                                            () => {
                                                document.removeEventListener('mousemove', e);
                                            }
                                        );
                                    }, [t, a]),
                                    a
                                );
                            })(s),
                            c = l[0];
                        return r().createElement(
                            'div',
                            { ref: s, className: f()(Cs, e) },
                            fs.map((e, t) =>
                                r().createElement(
                                    Pe.animated.div,
                                    {
                                        key: t,
                                        className: As,
                                        style: Object.assign(
                                            {
                                                width: `${a + 2 * u}rem`,
                                                left: -u + 'rem',
                                                x: c.x.to((t) => t * e.speedX),
                                                y: c.y.to((t) => t * e.speedY),
                                                backgroundImage: `url(${e.path})`,
                                            },
                                            Fs.includes(e.path) && o,
                                        ),
                                    },
                                    3 === t && r().createElement(Pe.animated.div, { className: Ds, style: o }),
                                ),
                            ),
                        );
                    }),
                    ys = 'ParallaxContainer_base_17',
                    Ss = fs.map((e) => e.path),
                    Ns = (0, J.Pi)(({ className: e }) => {
                        const t = ns(),
                            a = t.model,
                            s = t.controls,
                            i = a.isParallaxPreloaded.get(),
                            u = (0, Pe.useSpring)({ to: { opacity: i ? 1 : 0 }, config: { duration: 300 } });
                        return (
                            'success' ===
                                ((e) => {
                                    const t = (0, n.useState)('pending'),
                                        a = t[0],
                                        r = t[1];
                                    return (
                                        (0, n.useLayoutEffect)(() => {
                                            let t = 0,
                                                a = 0;
                                            const n = () => {
                                                t + a === e.length && r(0 === t ? 'success' : 'error');
                                            };
                                            e.forEach((e) => {
                                                const r = new Image();
                                                (r.src = e),
                                                    r.addEventListener('load', () => {
                                                        a++, n();
                                                    }),
                                                    r.addEventListener('error', () => {
                                                        t++, n();
                                                    });
                                            });
                                        }, [e]),
                                        a
                                    );
                                })(Ss) && s.setIsParallaxPreloaded(!0),
                            r().createElement(
                                Pe.animated.div,
                                { className: f()(ys, e), style: u },
                                r().createElement(Bs, null),
                            )
                        );
                    });
                function ks(e, t) {
                    (0, n.useEffect)(
                        () => (window.addEventListener('resize', e), () => window.removeEventListener('resize', e)),
                        t,
                    );
                }
                const Rs = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    Ps = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
                function xs() {
                    const e = (0, n.useRef)(0);
                    return (
                        Ps(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
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
                const Ts = { type: 'idle' };
                function Is(e, t) {
                    const a = e.contentRef,
                        r = e.wrapperRef,
                        s = e.scrollPosition,
                        u = e.clampPosition,
                        o = e.animationScroll,
                        l = e.events,
                        c = (0, n.useState)(Ts),
                        d = c[0],
                        m = c[1],
                        _ = xs(),
                        E = Rt(() => {
                            _.run(() => {
                                const t = e.contentRef.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                t &&
                                    a &&
                                    n &&
                                    (t.style.cursor = n <= a ? 'auto' : 'dragging' === d.type ? 'move' : 'grab');
                            });
                        });
                    return (
                        (0, n.useEffect)(() => {
                            E();
                        }, [d.type, E]),
                        ks(() => {
                            E();
                        }, []),
                        (0, n.useEffect)(() => {
                            if ('dragging' !== d.type) return;
                            const e = i.O.client.events.mouse.move(([e, n]) => {
                                const i = a.current,
                                    l = r.current;
                                if (!i || !l) return;
                                if ('inside' === n && e.clientX < 0) return;
                                const c = 'inside' === n ? e.clientX : e.clientX - l.offsetLeft,
                                    m = d.positionFrom - c,
                                    _ = d.previousScrollPosition + m;
                                s.start(
                                    Object.assign(
                                        { scrollPosition: u(i, _), from: { scrollPosition: o.scrollPosition.get() } },
                                        t && { config: t },
                                    ),
                                );
                            });
                            const n = i.O.client.events.mouse.up(function () {
                                m({ type: 'scrollingToEnd' });
                            });
                            return () => {
                                e(), n();
                            };
                        }, [o.scrollPosition, u, a, d, s, r, t]),
                        (0, n.useEffect)(() => {
                            if ('scrollingToEnd' !== d.type) return;
                            const e = () => {
                                m(Ts);
                            };
                            return o.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e);
                        }, [o.scrollPosition, d.type, l]),
                        (0, n.useEffect)(() => {
                            const e = a.current;
                            if (!e) return;
                            const t = (e) => {
                                m({
                                    type: 'dragging',
                                    positionFrom: e.screenX,
                                    previousScrollPosition: o.scrollPosition.get(),
                                });
                            };
                            return e.addEventListener('mousedown', t), () => e.removeEventListener('mousedown', t);
                        }, [o.scrollPosition, a]),
                        d
                    );
                }
                const Ls = (e, t = 100) => ((i.O.view.pxToRem(i.O.client.getSize('px').width) * t) / 100 - e) / 2,
                    Os = It({
                        getBounds: (e) => {
                            var t, a;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? xt.Next : xt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ms = 'HorizontalBar_base_49',
                    $s = 'HorizontalBar_base__nonActive_82',
                    Hs = 'HorizontalBar_leftButton_5f',
                    Ws = 'HorizontalBar_rightButton_03',
                    zs = 'HorizontalBar_track_0d',
                    Us = 'HorizontalBar_thumb_fd',
                    Vs = 'HorizontalBar_rail_32',
                    Gs = 'disable',
                    qs = { pending: !1, offset: 0 },
                    js = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Qs = () => {},
                    Ys = (e, t) => Math.max(20, e.offsetWidth * t),
                    Xs = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = js, onDrag: s = Qs }) => {
                        const u = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, n.useState)(qs),
                            E = _[0],
                            g = _[1],
                            p = (0, n.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [s],
                            ),
                            h = () => {
                                const t = c.current,
                                    a = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && a && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    u = yt(0, 1, s / (r - n)),
                                    m = (t.offsetWidth - Ys(t, i)) * u;
                                (a.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return o.current.classList.add(Gs), void l.current.classList.remove(Gs);
                                            if (
                                                ((t = c.current),
                                                (a = d.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(Gs), void l.current.classList.add(Gs);
                                            var t, a;
                                            o.current.classList.remove(Gs), l.current.classList.remove(Gs);
                                        }
                                    })(m);
                            },
                            v = Rt(() => {
                                (() => {
                                    const t = d.current,
                                        a = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && a)) return;
                                    const s = Math.min(1, n / r);
                                    (t.style.width = `${Ys(a, s)}px`),
                                        (t.style.display = 'flex'),
                                        u.current &&
                                            (1 === s ? u.current.classList.add($s) : u.current.classList.remove($s));
                                })(),
                                    h();
                            });
                        (0, n.useEffect)(() => Re(v)),
                            (0, n.useEffect)(
                                () =>
                                    Re(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let a = Qs;
                                        const n = () => {
                                            a(), (a = Re(v));
                                        };
                                        return (
                                            e.events.on('recalculateContent', v),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                a(),
                                                    e.events.off('recalculateContent', v),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!E.pending) return;
                                const t = i.O.client.events.mouse.move(([t, a]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!r || !i) return;
                                        const u = c.current,
                                            o = d.current;
                                        if (!u || !o) return;
                                        if ('inside' === a && t.clientX < 0) return;
                                        const l = t.clientX - E.offset - u.getBoundingClientRect().x,
                                            m = (l / u.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            s({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: m });
                                    }),
                                    a = i.O.client.events.mouse.up(() => {
                                        t(), p(qs);
                                    });
                                return () => {
                                    t(), a();
                                };
                            }, [e, E.offset, E.pending, s, p]);
                        const b = Ut((t) => e.applyStepTo(t), m, [e]),
                            C = b[0],
                            A = b[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const D = (e) => {
                            e.target.classList.contains(Gs) || j('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: f()(Ms, t.base), ref: u, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: f()(Hs, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Gs) || 0 !== e.button || (j('play'), C(xt.Next));
                                },
                                onMouseUp: A,
                                ref: o,
                                onMouseEnter: D,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: f()(zs, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if ((j('play'), t.target === n))
                                                p({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = d.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const s = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? xt.Prev : xt.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                r().createElement('div', { ref: d, className: f()(Us, t.thumb) }),
                                r().createElement('div', { className: f()(Vs, t.rail) }),
                            ),
                            r().createElement('div', {
                                className: f()(Ws, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Gs) || 0 !== e.button || (j('play'), C(xt.Prev));
                                },
                                onMouseUp: A,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Ks = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Zs = ({ api: e, className: t, classNames: a, children: s }) => (
                        (0, n.useEffect)(() => Re(e.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: f()(Ks.base, t) },
                            r().createElement(
                                'div',
                                {
                                    className: f()(Ks.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                r().createElement(
                                    'div',
                                    { className: f()(Ks.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    s,
                                ),
                            ),
                        )
                    );
                (Zs.Bar = Xs),
                    (Zs.Default = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: s,
                        areaClassName: i,
                        classNames: u,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, n.useMemo)(() => {
                                const e = s || {};
                                return Object.assign({}, e, { base: f()(Ks.base, e.base) });
                            }, [s]),
                            m = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return r().createElement(
                            'div',
                            { className: f()(Ks.defaultScroll, a), onWheel: t.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: f()(Ks.defaultScrollArea, i) },
                                r().createElement(Zs, { className: o, api: m, classNames: u }, e),
                            ),
                            r().createElement(Xs, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    });
                const Js = 'ProgressionScroll_base_0f',
                    ei = 'ProgressionScroll_areaWrapper_dc',
                    ti = 'ProgressionScroll_areaContent_2f',
                    ai = ({
                        api: e,
                        stuckIndex: t,
                        itemWidth: a,
                        itemsOffset: s = 0,
                        children: u,
                        onStick: o,
                        className: l,
                        areaClassNames: c,
                        barClassNames: d,
                        staticContent: m,
                    }) => {
                        const _ = i.O.view.remToPx(a),
                            E = e.animationScroll,
                            g = e.events,
                            p = e.applyScroll,
                            h = Is(e),
                            v = (0, n.useCallback)(
                                (e) => {
                                    p(t * _, e);
                                },
                                [p, _, t],
                            ),
                            b = (0, n.useCallback)(() => {
                                null == o || o(Math.round(E.scrollPosition.goal / _));
                            }, [o, E.scrollPosition, _]);
                        (0, n.useEffect)(() => (g.on('rest', b), () => g.off('rest', b)), [g, b]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    v({ immediate: !0, reset: !0 });
                                };
                                return (
                                    g.on('resizeHandled', e),
                                    () => {
                                        g.off('resizeHandled', e);
                                    }
                                );
                            }, [v, g]),
                            (0, n.useEffect)(
                                () =>
                                    Re(() => {
                                        'idle' === h.type && E.scrollPosition.idle && v();
                                    }),
                                [E.scrollPosition, h, v],
                            );
                        const C = (0, n.useCallback)(
                            (e) => {
                                'dragEnd' === e.type && p(t * _);
                            },
                            [p, _, t],
                        );
                        return r().createElement(
                            'div',
                            { className: f()(Js, l), style: { '--offset': `${s}rem` } },
                            r().createElement(
                                Zs,
                                {
                                    api: e,
                                    className: null == c ? void 0 : c.base,
                                    classNames: {
                                        wrapper: f()(ei, null == c ? void 0 : c.wrapper),
                                        content: f()(ti, null == c ? void 0 : c.content),
                                    },
                                },
                                u,
                            ),
                            m,
                            r().createElement(Xs, { api: e, onDrag: C, classNames: d }),
                        );
                    },
                    ni = (e, t = 150, a) => {
                        const r = i.O.view.remToPx(e),
                            s = (0, n.useMemo)(
                                () => ({
                                    settings: {
                                        step: { type: 'fixed', value: r, clampedArrowStepTimeout: t },
                                        animationConfig: Object.assign({ frequency: 0.5 }, a),
                                    },
                                }),
                                [a, r, t],
                            );
                        return Os(s);
                    },
                    ri = {
                        '--pageContentWidth': '78vw',
                        base: 'HighlightedRankEmblem_base_e2',
                        highlights: 'HighlightedRankEmblem_highlights_cc',
                        highlights__gold: 'HighlightedRankEmblem_highlights__gold_9f',
                        highlights__silver: 'HighlightedRankEmblem_highlights__silver_f4',
                        highlights__hidden: 'HighlightedRankEmblem_highlights__hidden_10',
                        highlight: 'HighlightedRankEmblem_highlight_72',
                        highlightAppearance: 'HighlightedRankEmblem_highlightAppearance_60',
                        rotate: 'HighlightedRankEmblem_rotate_0f',
                        highlight__second: 'HighlightedRankEmblem_highlight__second_91',
                        base__static: 'HighlightedRankEmblem_base__static_87',
                        rankEmblem: 'HighlightedRankEmblem_rankEmblem_29',
                        fadeIn: 'HighlightedRankEmblem_fadeIn_3a',
                        fadeInThreeQuarters: 'HighlightedRankEmblem_fadeInThreeQuarters_a4',
                        fadeInHalf: 'HighlightedRankEmblem_fadeInHalf_6e',
                        fadeOut: 'HighlightedRankEmblem_fadeOut_48',
                        fadeInWithScale: 'HighlightedRankEmblem_fadeInWithScale_a8',
                        slideUp: 'HighlightedRankEmblem_slideUp_82',
                        scale: 'HighlightedRankEmblem_scale_ec',
                        raysAppearance: 'HighlightedRankEmblem_raysAppearance_a6',
                        'reverse-rotate': 'HighlightedRankEmblem_reverse-rotate_e8',
                        glowAppearance: 'HighlightedRankEmblem_glowAppearance_2a',
                        blink: 'HighlightedRankEmblem_blink_ce',
                        slideUpIn: 'HighlightedRankEmblem_slideUpIn_80',
                    };
                let si, ii;
                !(function (e) {
                    (e.Silver = 'silver'), (e.Gold = 'gold'), (e.Hidden = 'hidden');
                })(si || (si = {})),
                    (function (e) {
                        (e.Dynamic = 'dynamic'), (e.Static = 'static');
                    })(ii || (ii = {}));
                const ui = {
                        [ka.x48]: 64,
                        [ka.x64]: 80,
                        [ka.x110]: 140,
                        [ka.x200]: 260,
                        [ka.x260]: 340,
                        [ka.x320]: 400,
                        [ka.x420]: 550,
                    },
                    oi = ({
                        size: e,
                        rank: t,
                        division: a,
                        type: n = ii.Dynamic,
                        state: s,
                        seasonName: i,
                        classNames: u,
                    }) => {
                        const o = ((e, t) => ({
                            backgroundImage: `url(${R.images.gui.maps.icons.comp7.ranks.$dyn(t).$num(e).$dyn('highlight')})`,
                        }))(e, i);
                        return r().createElement(
                            'div',
                            { className: f()(ri.base, ri[`base__${n}`]) },
                            r().createElement(
                                'div',
                                {
                                    className: f()(
                                        ri.highlights,
                                        ri[`highlights__${s}`],
                                        null == u ? void 0 : u.highlights,
                                    ),
                                    style: { '--highlightsSize': `${ui[e]}rem` },
                                },
                                r().createElement('div', {
                                    className: f()(ri.highlight, ri.highlight__first, null == u ? void 0 : u.highlight),
                                    style: o,
                                }),
                                n === ii.Dynamic &&
                                    r().createElement('div', {
                                        className: f()(
                                            ri.highlight,
                                            ri.highlight__second,
                                            null == u ? void 0 : u.highlight,
                                        ),
                                        style: o,
                                    }),
                            ),
                            r().createElement(Pa, {
                                seasonName: i,
                                size: e,
                                rank: t,
                                division: a,
                                className: f()(ri.rankEmblem, null == u ? void 0 : u.rankEmblem),
                            }),
                        );
                    },
                    li = [wa.Fifth, wa.Sixth],
                    ci = (e, t) => (t ? (li.includes(e) ? si.Gold : si.Silver) : si.Hidden),
                    di = 'RankInfo_base_21',
                    mi = 'RankInfo_highlight_1f',
                    _i = 'RankInfo_formattedText_26',
                    Ei = ({ rank: e, from: t, topPercentage: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: f()(di, n) },
                            r().createElement('div', { className: mi }),
                            r().createElement(ir, {
                                text: String(R.strings.comp7.rankInfo.current.$dyn(ya(e))),
                                binding: { topPercentage: a, fromScore: t },
                                classMix: _i,
                            }),
                        ),
                    gi = 'RankItemDivider_base_c4',
                    pi = () => r().createElement('div', { className: gi }),
                    hi = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let vi, bi;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(vi || (vi = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(bi || (bi = {}));
                const fi = ({ size: e = vi.Default }) => {
                        const t = f()(hi.background, hi[`background__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    Ci = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Ai = ({ size: e }) => {
                        const t = f()(Ci.base, Ci[`base__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    Di = {
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
                    Fi = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: a, baseStyles: n, isComplete: s, withoutBounce: i }) => {
                            const u = f()(
                                    Di.base,
                                    Di[`base__${e}`],
                                    a && Di.base__disabled,
                                    s && Di.base__finished,
                                    i && Di.base__withoutBounce,
                                ),
                                o = !a && !s;
                            return r().createElement(
                                'div',
                                { className: u, style: n, ref: t },
                                r().createElement('div', { className: Di.pattern }),
                                r().createElement('div', { className: Di.gradient }),
                                o && r().createElement(Ai, { size: e }),
                            );
                        },
                    ),
                    wi = ({ size: e, value: t, lineRef: a, disabled: s, onComplete: i }) => {
                        const u = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                o && i && i();
                            }, [o, i]),
                            r().createElement(Fi, { size: e, disabled: s, baseStyles: u, isComplete: o, lineRef: a })
                        );
                    };
                let Bi, yi;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Bi || (Bi = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(yi || (yi = {}));
                const Si = 'ProgressBarDeltaSimple_base_6c',
                    Ni = 'ProgressBarDeltaSimple_delta_99',
                    ki = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: s,
                            size: i,
                            to: u,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = u < s,
                                d = (0, n.useState)(yi.Idle),
                                m = d[0],
                                _ = d[1],
                                E = m === yi.In,
                                g = m === yi.End,
                                p = m === yi.Idle,
                                h = (0, n.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (p && !a) {
                                    return Sr(() => {
                                        h(yi.In);
                                    }, t);
                                }
                            }, [h, a, p, t]),
                                (0, n.useEffect)(() => {
                                    if (E) {
                                        return Sr(() => {
                                            o && o(), h(yi.End);
                                        }, e + t);
                                    }
                                }, [h, E, o, t, e]);
                            const v = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                b = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(s - u)}%`, left: `${c ? u : s}%` }),
                                    [s, c, u],
                                );
                            return g
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: Si, style: f },
                                      r().createElement(
                                          'div',
                                          { style: p ? v : b, className: Ni },
                                          r().createElement(Ai, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    Ri = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: s,
                            disabled: i,
                            isComplete: u,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(Fi, {
                                    size: t,
                                    lineRef: s,
                                    disabled: i,
                                    isComplete: u,
                                    baseStyles: d,
                                }),
                                a >= 0 &&
                                    r().createElement(ki, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: a,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Pi = 'ProgressBarDeltaGrow_base_7e',
                    xi = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Ti = 'ProgressBarDeltaGrow_glow_68',
                    Ii = (e) => (e ? { left: 0 } : { right: 0 }),
                    Li = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Oi = (e) => ({ transitionDuration: `${e}ms` }),
                    Mi = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: s,
                            size: i,
                            to: u,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = u < s,
                                m = (0, n.useState)(Bi.Idle),
                                _ = m[0],
                                E = m[1],
                                g = _ === Bi.End,
                                p = _ === Bi.Idle,
                                h = _ === Bi.Grow,
                                v = _ === Bi.Shrink,
                                b = (0, n.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                C = (0, n.useCallback)(
                                    (e, t) =>
                                        Sr(() => {
                                            b(e);
                                        }, t),
                                    [b],
                                );
                            (0, n.useEffect)(() => {
                                if (!a)
                                    return p
                                        ? C(Bi.Grow, t)
                                        : h
                                          ? C(Bi.Shrink, e)
                                          : v
                                            ? C(Bi.End, e)
                                            : void (g && o && o());
                            }, [C, a, g, h, p, v, o, t, e]);
                            const A = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Oi(e), Ii(d)), [d, e]),
                                D = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Oi(e), Ii(d)), [d, e]),
                                F = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Li(d, s), Oi(e)), [s, d, e]),
                                w = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(u - s)}%` }, Li(d, s), Oi(e)),
                                    [s, d, u, e],
                                );
                            if (g) return null;
                            const B = f()(Pi, c, d && 0 === u && xi);
                            return r().createElement(
                                'div',
                                { style: p ? F : w, className: B },
                                r().createElement(
                                    'div',
                                    { style: v ? D : A, className: Ti },
                                    r().createElement(Ai, { size: i }),
                                ),
                            );
                        },
                    ),
                    $i = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: s,
                            disabled: i,
                            isComplete: u,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < a,
                                m = (0, n.useState)(!1),
                                _ = m[0],
                                E = m[1],
                                g = (0, n.useCallback)(
                                    (e) => {
                                        e === Bi.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                p = (0, n.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                                h = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(Fi, {
                                    size: t,
                                    lineRef: s,
                                    disabled: i,
                                    isComplete: u,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? h : p,
                                }),
                                a >= 0 &&
                                    r().createElement(Mi, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: a,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    Hi = ['onComplete', 'onEndAnimation'];
                function Wi() {
                    return (
                        (Wi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Wi.apply(this, arguments)
                    );
                }
                const zi = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            a = e.onEndAnimation,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Hi);
                        const i = (0, n.useState)(!1),
                            u = i[0],
                            o = i[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === s.to;
                                e !== u && o(e), e && t && t(), a && a();
                            }, [u, t, a, s.to]);
                        switch (s.animationSettings.type) {
                            case bi.Simple:
                                return r().createElement(Ri, Wi({}, s, { onEndAnimation: l, isComplete: u }));
                            case bi.Growing:
                                return r().createElement($i, Wi({}, s, { onEndAnimation: l, isComplete: u }));
                            default:
                                return null;
                        }
                    }),
                    Ui = ['onEndAnimation'];
                function Vi() {
                    return (
                        (Vi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Vi.apply(this, arguments)
                    );
                }
                const Gi = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, Ui);
                    const s = (0, n.useRef)({}),
                        i = (0, n.useCallback)(() => {
                            (s.current.from = void 0), t && t();
                        }, [t]),
                        u = 'number' == typeof s.current.from ? s.current.from : a.from;
                    return (
                        (s.current.from = u),
                        r().createElement(zi, Vi({}, a, { onEndAnimation: i, key: `${u}-${a.to}`, from: u }))
                    );
                });
                function qi() {
                    return (
                        (qi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        qi.apply(this, arguments)
                    );
                }
                const ji = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: a,
                            disabled: n,
                            deltaFrom: s,
                            animationSettings: i,
                            onEndAnimation: u,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (s === t)
                                return r().createElement(wi, {
                                    key: `${s}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: a,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: s,
                                to: t,
                                size: e,
                                lineRef: a,
                                disabled: n,
                                animationSettings: i,
                                onComplete: l,
                                onEndAnimation: u,
                                onChangeAnimationState: o,
                            };
                            return i.withStack
                                ? r().createElement(Gi, c)
                                : r().createElement(zi, qi({ key: `${s}-${t}` }, c));
                        },
                    ),
                    Qi = (e) => ({
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
                    Yi = (e, t, a) => {
                        if ('number' == typeof a) {
                            return (yt(0, t, a) / t) * 100;
                        }
                        return e;
                    },
                    Xi = {
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
                    Ki = {
                        freezed: !1,
                        withStack: !1,
                        type: bi.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Zi = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Xi,
                            size: a = vi.Default,
                            animationSettings: s = Ki,
                            disabled: i = !1,
                            withoutBackground: u = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: d,
                            onEndAnimation: m,
                            onComplete: _,
                        }) => {
                            const E = ((e, t, a) =>
                                (0, n.useMemo)(() => {
                                    const n = (yt(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: Yi(n, t, a) };
                                }, [a, t, e]))(o, e, l);
                            return r().createElement(
                                'div',
                                { className: f()(hi.base, hi[`base__${a}`]), style: Qi(t) },
                                !u && r().createElement(fi, { size: a }),
                                r().createElement(ji, {
                                    size: a,
                                    lineRef: c,
                                    disabled: i,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    animationSettings: s,
                                    onEndAnimation: m,
                                    onChangeAnimationState: d,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    Ji = ({ rank: e, division: t, from: a, to: n, className: s, children: i }) =>
                        r().createElement(
                            Ge,
                            {
                                contentId: R.views.lobby.comp7.tooltips.DivisionTooltip('resId'),
                                args: { rank: e, division: t, from: a, to: n },
                            },
                            r().createElement('div', { className: s }, i),
                        ),
                    eu = 'RankProgressDivisions_base_54',
                    tu = 'RankProgressDivisions_divisionItem_77',
                    au = 'RankProgressDivisions_divisionItem__current_84',
                    nu = 'RankProgressDivisions_highlightContainer_53',
                    ru = 'RankProgressDivisions_radialBack_cc',
                    su = 'RankProgressDivisions_mainBack_38',
                    iu = 'RankProgressDivisions_bottomLine_67',
                    uu = 'RankProgressDivisions_bottomLine__first_bd',
                    ou = 'RankProgressDivisions_bottomLine__second_60',
                    lu = 'RankProgressDivisions_bottomLine__third_08',
                    cu = 'RankProgressDivisions_divisionText_ea',
                    du = 'RankProgressDivisions_note_e1',
                    mu = (0, J.Pi)(({ itemIndex: e, rank: t, from: a, step: n }) => {
                        const s = ns().model.computes.divisions(e);
                        return r().createElement(
                            'div',
                            { className: eu },
                            be(s, (e, s) => {
                                const i = e.state === oa.Current;
                                return r().createElement(
                                    Ji,
                                    {
                                        key: s,
                                        rank: t,
                                        division: e.name,
                                        from: a + n * s,
                                        to: a + n * (s + 1),
                                        className: f()(tu, i && au),
                                    },
                                    i &&
                                        r().createElement(
                                            'div',
                                            { className: nu },
                                            r().createElement('div', { className: ru }),
                                            r().createElement('div', { className: su }),
                                            r().createElement('div', { className: f()(iu, uu) }),
                                            r().createElement('div', { className: f()(iu, ou) }),
                                            r().createElement('div', { className: f()(iu, lu) }),
                                        ),
                                    r().createElement(
                                        'div',
                                        { className: cu },
                                        i &&
                                            r().createElement(
                                                'div',
                                                { className: du },
                                                R.strings.comp7.division.note(),
                                            ),
                                        Da(e.name),
                                    ),
                                );
                            }),
                        );
                    }),
                    _u = {
                        '--pointLineWidth': '1rem',
                        base: 'RankProgressPoints_base_86',
                        point: 'RankProgressPoints_point_f9',
                        base__top: 'RankProgressPoints_base__top_78',
                        base__bottom: 'RankProgressPoints_base__bottom_fc',
                        pointLine: 'RankProgressPoints_pointLine_b3',
                        pointLine__extended: 'RankProgressPoints_pointLine__extended_6b',
                        pointValue: 'RankProgressPoints_pointValue_af',
                        pointValue__next: 'RankProgressPoints_pointValue__next_c5',
                    };
                let Eu;
                !(function (e) {
                    (e.Top = 'top'), (e.Bottom = 'bottom');
                })(Eu || (Eu = {}));
                const gu = (e, t) => {
                        const a = t > 0 ? (100 / t) * e + '%' : '0%';
                        return e === t ? { left: a, transform: `translateX(-${_u['--pointLineWidth']})` } : { left: a };
                    },
                    pu = ({ step: e, divisionsCount: t, from: a, currentDivisionIndex: n, direction: s = Eu.Bottom }) =>
                        r().createElement(
                            'div',
                            { className: f()(_u.base, _u[`base__${s}`]) },
                            ia(t + 1, (s) => {
                                const i = void 0 !== n && s === n + 1,
                                    u = void 0 === a && (s === n || i);
                                return r().createElement(
                                    'div',
                                    { className: _u.point, style: gu(s, t), key: s },
                                    r().createElement('div', {
                                        className: f()(_u.pointLine, u && _u.pointLine__extended),
                                    }),
                                    void 0 !== a &&
                                        r().createElement(
                                            'div',
                                            { className: f()(_u.pointValue, i && _u.pointValue__next) },
                                            a + e * s,
                                        ),
                                );
                            }),
                        ),
                    hu = {
                        '--pageContentWidth': '78vw',
                        base: 'RankProgress_base_97',
                        base__hidden: 'RankProgress_base__hidden_b9',
                        base__inactive: 'RankProgress_base__inactive_49',
                        base__active: 'RankProgress_base__active_a2',
                        progressWrapper: 'RankProgress_progressWrapper_4e',
                    },
                    vu = {
                        freezed: !0,
                        withStack: !1,
                        type: bi.Simple,
                        delta: { duration: 0, delay: 0 },
                        line: { duration: 0, delay: 0 },
                    },
                    bu = (0, J.Pi)(({ rank: e, state: t, itemIndex: a, from: n, to: s, progressState: i }) => {
                        const u = ns().model,
                            o = u.root.get().currentScore,
                            l = u.computes.divisionsConfig(a),
                            c = s - n,
                            d = ((e, t, a) => Math.round((t - e) / a))(n, s, l.count);
                        return r().createElement(
                            'div',
                            { className: f()(hu.base, hu[`base__${i}`]) },
                            r().createElement(mu, { itemIndex: a, rank: e, from: n, step: d }),
                            r().createElement(pu, {
                                step: d,
                                divisionsCount: l.count,
                                direction: Eu.Top,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                            r().createElement(
                                'div',
                                { className: hu.progressWrapper },
                                t === Jr.Current
                                    ? r().createElement(Zi, { maxValue: c, value: o - n, animationSettings: vu })
                                    : r().createElement(Zi, { maxValue: c, value: o < n ? 0 : c, disabled: o < n }),
                            ),
                            r().createElement(pu, {
                                step: d,
                                divisionsCount: l.count,
                                from: n,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                        );
                    }),
                    fu = 'RankStatusDescription_base_07',
                    Cu = ({ text: e, binding: t, className: a }) => {
                        const n = ((e) =>
                            'number' == typeof (null == e ? void 0 : e.pointsCount)
                                ? Object.assign({}, e, { pointsCount: r().createElement(Ot, { value: e.pointsCount }) })
                                : e)(t);
                        return r().createElement(ir, { text: e, binding: n, classMix: f()(fu, a) });
                    },
                    Au = 'AchievedRankStatus_base_70',
                    Du = R.strings.comp7.rankItemStatus.previous,
                    Fu = ({ rank: e, rankState: t, itemIndex: a, from: n, to: s, progressState: i }) => {
                        switch (e) {
                            case wa.First:
                            case wa.Second:
                            case wa.Third:
                            case wa.Fourth:
                                return r().createElement(bu, {
                                    rank: e,
                                    state: t,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: i,
                                });
                            case wa.Fifth:
                                return r().createElement(
                                    'div',
                                    { className: Au },
                                    r().createElement(Cu, { text: Ta(Du.description, e), binding: { fromScore: n } }),
                                );
                            default:
                                return (
                                    console.warn(`Status for rank '${e}' was not mapped to any react component.`), null
                                );
                        }
                    },
                    wu = 'LastUpdate_base_f7',
                    Bu = 'LastUpdate_dataUpdate_90',
                    yu = ({ timestamp: e, isLastBestUserPointsValueLoading: t = !1 }) =>
                        r().createElement(
                            'div',
                            { className: wu },
                            t
                                ? r().createElement(tr, {
                                      text: R.strings.comp7.lastUpdateNote.lastBestUserPoints.update(),
                                      classMix: Bu,
                                  })
                                : r().createElement(Fr, { timestamp: e }),
                        ),
                    Su = (e, t) => e > 0 || t;
                let Nu;
                !(function (e) {
                    (e.Active = 'active'), (e.Inactive = 'inactive'), (e.Hidden = 'hidden');
                })(Nu || (Nu = {}));
                const ku = 'CurrentRankStatus_base_d4',
                    Ru = R.strings.comp7.rankItemStatus.current,
                    Pu = ({
                        rank: e,
                        rankState: t,
                        itemIndex: a,
                        from: s,
                        to: i,
                        progressState: u,
                        topPercentage: o,
                        pointsCount: l,
                        isLastBestUserPointsValueLoading: c,
                        timestamp: d,
                    }) => {
                        const m = { topPercentage: o, pointsCount: l };
                        return (
                            (0, n.useEffect)(() => {
                                u === Nu.Active && j('comp_7_progression_rank_active');
                            }, [u]),
                            r().createElement(
                                'div',
                                { className: ku },
                                (() => {
                                    switch (e) {
                                        case wa.First:
                                        case wa.Second:
                                        case wa.Third:
                                        case wa.Fourth:
                                            return r().createElement(bu, {
                                                rank: e,
                                                state: t,
                                                itemIndex: a,
                                                from: s,
                                                to: i,
                                                progressState: u,
                                            });
                                        case wa.Fifth:
                                        case wa.Sixth:
                                            return r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement(Cu, {
                                                    text: Su(l, c)
                                                        ? Ta(Ru.extendedDescription, e)
                                                        : Ta(Ru.description, e),
                                                    binding: m,
                                                }),
                                                r().createElement(yu, {
                                                    timestamp: d,
                                                    isLastBestUserPointsValueLoading: c,
                                                }),
                                            );
                                        default:
                                            return (
                                                console.warn(
                                                    `Status for rank '${e}' was not mapped to any react component.`,
                                                ),
                                                null
                                            );
                                    }
                                })(),
                            )
                        );
                    },
                    xu = 'FutureRankStatus_base_c2',
                    Tu = 'FutureRankStatus_lock_d0',
                    Iu = R.strings.comp7.rankItemStatus.future,
                    Lu = [wa.Sixth],
                    Ou = ({
                        rank: e,
                        topPercentage: t,
                        from: a,
                        to: s,
                        pointsCount: i,
                        isLastBestUserPointsValueLoading: u,
                        timestamp: o,
                    }) => {
                        const l = (0, n.useMemo)(
                                () =>
                                    e === wa.Sixth
                                        ? { topPercentage: t, pointsCount: i }
                                        : e === wa.Fifth
                                          ? { fromScore: a }
                                          : { fromScore: a, toScore: s },
                                [t, i, a, s, e],
                            ),
                            c = Lu.includes(e) && Su(i, u);
                        return r().createElement(
                            'div',
                            { className: xu },
                            r().createElement('div', { className: Tu }),
                            r().createElement(Cu, {
                                text: Ta(c ? Iu.extendedDescription : Iu.description, e),
                                binding: l,
                            }),
                            c && r().createElement(yu, { timestamp: o, isLastBestUserPointsValueLoading: u }),
                        );
                    },
                    Mu = ({
                        rankState: e,
                        rank: t,
                        itemIndex: a,
                        from: n,
                        to: s,
                        progressState: i,
                        pointsCount: u,
                        isLastBestUserPointsValueLoading: o,
                        topPercentage: l,
                        timestamp: c,
                    }) => {
                        switch (e) {
                            case Jr.Previous:
                                return r().createElement(Fu, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: i,
                                });
                            case Jr.Current:
                                return r().createElement(Pu, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: i,
                                    pointsCount: u,
                                    isLastBestUserPointsValueLoading: o,
                                    topPercentage: l,
                                    timestamp: c,
                                });
                            case Jr.Future:
                                return r().createElement(Ou, {
                                    rank: t,
                                    topPercentage: l,
                                    from: n,
                                    to: s,
                                    pointsCount: u,
                                    isLastBestUserPointsValueLoading: o,
                                    timestamp: c,
                                });
                            default:
                                return console.error(`Unreachable code for state '${e}' in RankStatusResolver.`), null;
                        }
                    };
                let $u;
                !(function (e) {
                    (e.Progress = 'progress'), (e.Text = 'text');
                })($u || ($u = {}));
                const Hu = {
                        '--pageContentWidth': '78vw',
                        base: 'RankItem_base_60',
                        rankEmblem__future: 'RankItem_rankEmblem__future_08',
                        rankDescription: 'RankItem_rankDescription_32',
                        rankDescription__text: 'RankItem_rankDescription__text_90',
                        rankDescription__progress: 'RankItem_rankDescription__progress_e2',
                        rankDescription__viewed: 'RankItem_rankDescription__viewed_6b',
                        rankInfo: 'RankItem_rankInfo_6f',
                        dividerContainer: 'RankItem_dividerContainer_0f',
                        fadeIn: 'RankItem_fadeIn_95',
                        fadeInThreeQuarters: 'RankItem_fadeInThreeQuarters_f1',
                        fadeInHalf: 'RankItem_fadeInHalf_8a',
                        fadeOut: 'RankItem_fadeOut_56',
                        fadeInWithScale: 'RankItem_fadeInWithScale_68',
                        slideUp: 'RankItem_slideUp_74',
                        scale: 'RankItem_scale_6b',
                        raysAppearance: 'RankItem_raysAppearance_a8',
                        rotate: 'RankItem_rotate_da',
                        'reverse-rotate': 'RankItem_reverse-rotate_3e',
                        glowAppearance: 'RankItem_glowAppearance_90',
                        highlightAppearance: 'RankItem_highlightAppearance_5c',
                        blink: 'RankItem_blink_7e',
                        slideUpIn: 'RankItem_slideUpIn_ee',
                    },
                    Wu = (0, J.Pi)(({ itemIndex: e, isViewed: t, hasDivider: a = !0 }) => {
                        const n = ns().model,
                            s = q().model,
                            i = n.root.get(),
                            u = i.topPercentage,
                            o = i.lastBestUserPointsValue,
                            l = i.leaderboardUpdateTimestamp,
                            c = i.isLastBestUserPointsValueLoading,
                            d = B().mediaSize,
                            m = n.computes.item(e),
                            _ = m.rank,
                            E = m.from,
                            g = m.to,
                            p = n.computes.divisionsConfig(e),
                            h = n.computes.rankSettings(e),
                            v = h.state,
                            b = h.division,
                            C = h.hasInfo,
                            A = ((e) => {
                                switch (!0) {
                                    case e >= D.ExtraLarge:
                                        return ka.x420;
                                    case e >= D.Large:
                                        return ka.x320;
                                    case e >= D.Medium:
                                        return ka.x260;
                                    default:
                                        return ka.x200;
                                }
                            })(d),
                            F = ci(_, v === Jr.Current),
                            w = ((e, t) => (t ? (e === Jr.Current ? Nu.Active : Nu.Inactive) : Nu.Hidden))(v, t),
                            y = ((e, t) => {
                                const a = Na(t);
                                switch (e) {
                                    case Jr.Previous:
                                    case Jr.Current:
                                        return a ? $u.Progress : $u.Text;
                                    default:
                                        return $u.Text;
                                }
                            })(v, _);
                        return r().createElement(
                            'div',
                            { className: Hu.base },
                            r().createElement(
                                Gn,
                                { rank: _, from: E, to: g, topPercentage: u, divisions: p.list },
                                r().createElement(oi, {
                                    seasonName: s.season.name.get(),
                                    size: A,
                                    rank: _,
                                    division: b,
                                    state: F,
                                    classNames: { rankEmblem: Hu[`rankEmblem__${v}`] },
                                }),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: f()(
                                        Hu.rankDescription,
                                        Hu[`rankDescription__${y}`],
                                        t && Hu.rankDescription__viewed,
                                    ),
                                },
                                C &&
                                    r().createElement(
                                        'div',
                                        { className: Hu.rankInfo },
                                        r().createElement(Ei, { rank: _, from: E, topPercentage: u }),
                                    ),
                                r().createElement(Mu, {
                                    rankState: v,
                                    rank: _,
                                    itemIndex: e,
                                    from: E,
                                    to: g,
                                    progressState: w,
                                    pointsCount: o,
                                    isLastBestUserPointsValueLoading: c,
                                    topPercentage: u,
                                    timestamp: l,
                                }),
                            ),
                            a &&
                                r().createElement(
                                    'div',
                                    { className: Hu.dividerContainer, style: { '--emblemSize': `${A}rem` } },
                                    r().createElement(pi, null),
                                ),
                        );
                    }),
                    zu = 'RankItemContainer_base_b3',
                    Uu = 'RankItemContainer_title_d5',
                    Vu = 'RankItemContainer_title__active_f0',
                    Gu = (0, J.Pi)(({ itemIndex: e, itemWidth: t, isViewed: a, onMouseDown: n, hasDivider: s }) => {
                        const i = ns().model.computes.item(e);
                        return r().createElement(
                            'div',
                            { className: zu, style: { '--itemWidth': `${t}rem` }, onMouseDown: n },
                            r().createElement('div', { className: f()(Uu, a && Vu) }, La(i.rank)),
                            r().createElement(Wu, { itemIndex: e, isViewed: a, hasDivider: s }),
                        );
                    }),
                    qu = 'Progression_base_97',
                    ju = { base: 'Progression_areaContainer_09', wrapper: 'Progression_areaWrapper_5f' },
                    Qu = { base: 'Progression_bar_4d' },
                    Yu = (0, J.Pi)(({ staticContent: e, className: t }) => {
                        const a = ns().model,
                            s = a.root.get().currentItemIndex,
                            u = a.computes.itemsLength(),
                            o = ((e) => (e >= D.ExtraLarge ? 640 : e >= D.Large ? 500 : e >= D.Medium ? 440 : 400))(
                                B().mediaSize,
                            ),
                            l = Ls(o),
                            c = ni(o),
                            d = (0, n.useState)(s),
                            m = d[0],
                            _ = d[1],
                            E = (0, n.useCallback)(
                                (e) => () => {
                                    Q.playClick(), _(e);
                                },
                                [],
                            );
                        return (
                            (0, n.useLayoutEffect)(() => {
                                c.scrollPosition.start({ scrollPosition: i.O.view.remToPx(s * o), immediate: !0 });
                            }, []),
                            (0, n.useLayoutEffect)(() => {
                                _(s);
                            }, [s]),
                            r().createElement(
                                ai,
                                {
                                    api: c,
                                    stuckIndex: m,
                                    itemWidth: o,
                                    itemsOffset: l,
                                    staticContent: e,
                                    onStick: _,
                                    className: f()(qu, t),
                                    areaClassNames: ju,
                                    barClassNames: Qu,
                                },
                                ia(u, (e) =>
                                    r().createElement(Gu, {
                                        key: e,
                                        itemIndex: e,
                                        isViewed: m === e,
                                        hasDivider: e < u - 1,
                                        itemWidth: o,
                                        onMouseDown: E(e),
                                    }),
                                ),
                            )
                        );
                    }),
                    Xu = R.strings.comp7.qualification,
                    Ku = { hasHtmlContent: !0 },
                    Zu = ({ maxBattlesCount: e, children: t }) =>
                        r().createElement(
                            Ye,
                            {
                                header: Xu.conditionTooltip.header(),
                                body: ma(Xu.conditionTooltip.body(e), { maxBattlesCount: e }),
                                args: Ku,
                            },
                            r().createElement('div', null, t),
                        ),
                    Ju = ({ size: e, seasonName: t, className: a }) => {
                        const n = R.images.gui.maps.icons.comp7.ranks.$dyn(t).$num(e);
                        return r().createElement('div', {
                            className: f()(Ra, a),
                            style: { backgroundImage: `url(${n.$dyn('qualification')})`, '--imageSize': `${e}rem` },
                        });
                    },
                    eo = 'BattlesCounter_base_f1',
                    to = 'BattlesCounter_battlesCount_ef',
                    ao = ({ battlesCount: e, maxBattlesCount: t, className: a }) =>
                        r().createElement(tr, {
                            text: R.strings.comp7.qualification.counter(),
                            binding: {
                                battlesCount: r().createElement('div', { className: to }, e),
                                maxBattlesCount: t,
                            },
                            classMix: f()(eo, a),
                        }),
                    no = {
                        '--pageContentWidth': '78vw',
                        base: 'QualificationBattleItem_base_0d',
                        base__size_234: 'QualificationBattleItem_base__size_234_ab',
                        battleBackground: 'QualificationBattleItem_battleBackground_67',
                        base__inProgress: 'QualificationBattleItem_base__inProgress_2a',
                        blink: 'QualificationBattleItem_blink_3b',
                        fadeIn: 'QualificationBattleItem_fadeIn_c9',
                        fadeInThreeQuarters: 'QualificationBattleItem_fadeInThreeQuarters_20',
                        fadeInHalf: 'QualificationBattleItem_fadeInHalf_89',
                        fadeOut: 'QualificationBattleItem_fadeOut_c3',
                        fadeInWithScale: 'QualificationBattleItem_fadeInWithScale_4f',
                        slideUp: 'QualificationBattleItem_slideUp_1f',
                        scale: 'QualificationBattleItem_scale_37',
                        raysAppearance: 'QualificationBattleItem_raysAppearance_8f',
                        rotate: 'QualificationBattleItem_rotate_2d',
                        'reverse-rotate': 'QualificationBattleItem_reverse-rotate_9d',
                        glowAppearance: 'QualificationBattleItem_glowAppearance_56',
                        highlightAppearance: 'QualificationBattleItem_highlightAppearance_a0',
                        slideUpIn: 'QualificationBattleItem_slideUpIn_be',
                    },
                    ro = { notPlayed: 'notFinished', inProgress: 'notFinished', victory: 'victory', defeat: 'defeat' },
                    so = { x173: 173, x234: 234 },
                    io = ({ className: e, state: t, size: a = 'x173' }) => {
                        const n = so[a],
                            s = R.images.gui.maps.icons.comp7.icons.$dyn(`battle_${ro[t]}`);
                        return r().createElement(
                            'div',
                            { className: f()(no.base, e, no[`base__${t}`], no[`base__size_${n}`]) },
                            r().createElement('div', {
                                className: no.battleBackground,
                                style: { backgroundImage: `url(${s})`, '--imageSize': `${n}rem` },
                            }),
                        );
                    },
                    uo = (0, J.Pi)(({ index: e, className: t }) => {
                        const a = ns().model,
                            n = B().mediaSize,
                            s = a.computes.qualificationBattle(e);
                        return r().createElement(io, {
                            state: s.state,
                            className: t,
                            key: e,
                            size: n >= D.ExtraLarge ? 'x234' : 'x173',
                        });
                    }),
                    oo = 'BattlesProgression_base_a1',
                    lo = 'BattlesProgression_item_73',
                    co = (0, J.Pi)(({ className: e }) => {
                        const t = ns().model;
                        return r().createElement(
                            'div',
                            { className: f()(oo, e) },
                            ia(t.computes.qualificationBattlesLength(), (e) =>
                                r().createElement(uo, { index: e, className: lo, key: e }),
                            ),
                        );
                    }),
                    mo = (e) => {
                        switch (!0) {
                            case e >= D.ExtraLarge:
                                return ka.x600;
                            case e >= D.Large:
                                return ka.x420;
                            case e >= D.Medium:
                                return ka.x260;
                            default:
                                return ka.x200;
                        }
                    },
                    _o = 'Qualification_base_0f',
                    Eo = 'Qualification_content_64',
                    go = 'Qualification_footer_8f',
                    po = 'Qualification_qualificationEmblem_e2',
                    ho = 'Qualification_battlesProgression_51',
                    vo = 'Qualification_counterDescription_20',
                    bo = 'Qualification_ratingCalculationDescription_7a',
                    fo = 'Qualification_timerIcon_35',
                    Co = 'Qualification_conditionContainer_c4',
                    Ao = 'Qualification_condition_23',
                    Do = 'Qualification_rewardsDescription_c2',
                    Fo = 'Qualification_infoIcon_fe',
                    wo = 'Qualification_rewardsButton_db',
                    Bo = 'Qualification_buttonIcon_39',
                    yo = 'Qualification_waiting_de',
                    So = R.strings.comp7.qualification,
                    No = { base: wo, icon: Bo },
                    ko = (0, J.Pi)(({ className: e }) => {
                        const t = ns(),
                            a = t.model,
                            n = t.controls,
                            s = q().model,
                            i = B().mediaSize,
                            u = a.qualificationModel.battlesCount.get(),
                            o = a.qualificationModel.maxBattlesCount.get(),
                            l = a.qualificationModel.isRatingCalculation.get(),
                            c = a.isParallaxPreloaded.get(),
                            d = (0, Pe.useSpring)({
                                from: { opacity: 0 },
                                to: ue() ? { opacity: c ? 1 : 0 } : { opacity: 1 },
                                delay: 300,
                                config: { duration: 300 },
                            });
                        return ue() && !c
                            ? r().createElement('div', { className: yo }, r().createElement(nt, null))
                            : r().createElement(
                                  Pe.animated.div,
                                  { style: d, className: f()(_o, e) },
                                  r().createElement(
                                      'div',
                                      { className: Eo },
                                      r().createElement(Ju, {
                                          size: mo(i),
                                          seasonName: s.season.name.get(),
                                          className: po,
                                      }),
                                      l
                                          ? r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement(ao, { battlesCount: u, maxBattlesCount: o }),
                                                r().createElement(
                                                    Ye,
                                                    { body: R.strings.comp7.qualification.ratingCalculationTooltip() },
                                                    r().createElement(
                                                        'div',
                                                        null,
                                                        r().createElement(tr, {
                                                            text: So.ratingCalculationDescription(),
                                                            binding: {
                                                                timerIcon: r().createElement('div', { className: fo }),
                                                            },
                                                            classMix: bo,
                                                        }),
                                                    ),
                                                ),
                                            )
                                          : r().createElement(ir, {
                                                text: So.counterWithDescription(),
                                                classMix: vo,
                                                binding: {
                                                    counter: r().createElement(ao, {
                                                        battlesCount: u,
                                                        maxBattlesCount: o,
                                                    }),
                                                },
                                            }),
                                      r().createElement(co, { className: ho }),
                                  ),
                                  r().createElement(
                                      'div',
                                      { className: go },
                                      r().createElement(
                                          'div',
                                          { className: Co },
                                          r().createElement(ir, {
                                              text: So.condition(o),
                                              classMix: Ao,
                                              binding: { maxBattlesCount: o },
                                          }),
                                          r().createElement(
                                              Zu,
                                              { maxBattlesCount: o },
                                              r().createElement('div', { className: Fo }),
                                          ),
                                      ),
                                      r().createElement(tr, { text: So.rewardsDescription(), classMix: Do }),
                                      r().createElement(Z, {
                                          caption: So.rewardsButton(),
                                          classNames: No,
                                          onMouseEnter: () => n.setRewardLayerVisible(!0),
                                          onMouseLeave: () => n.setRewardLayerVisible(!1),
                                          onClick: () => n.goToRankRewardsPage(),
                                          soundHover: 'comp_7_rank_rewards_hover',
                                      }),
                                  ),
                              );
                    }),
                    Ro = 'ProgressionPage_base_fa',
                    Po = 'ProgressionPage_parallaxContainer_c4',
                    xo = 'ProgressionPage_contentWrapper_cf',
                    To = 'ProgressionPage_content_4a',
                    Io = 'ProgressionPage_content__progression_c5',
                    Lo = 'ProgressionPage_footer_d1',
                    Oo = R.strings.comp7.page.heading,
                    Mo = (0, J.Pi)(() => {
                        const e = ns().model.qualificationModel.isActive.get(),
                            t = (0, Pe.useSpring)(ut);
                        return r().createElement(
                            'div',
                            { className: Ro },
                            ue() && e && r().createElement(Ns, { className: Po }),
                            r().createElement(it, { className: re }, e ? Oo.qualification() : Oo.progression()),
                            r().createElement(Wr, null),
                            e
                                ? r().createElement('div', { className: xo }, r().createElement(ko, { className: To }))
                                : r().createElement(
                                      Pe.animated.div,
                                      { style: t, className: xo },
                                      r().createElement(Yu, {
                                          className: f()(To, Io),
                                          staticContent: r().createElement(bs, { className: Lo }),
                                      }),
                                  ),
                        );
                    }),
                    $o = U()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    qualification: e.primitives(['isActive'], 'qualificationModel'),
                                },
                                a = e.array('items'),
                                n = (0, me.Om)(() => a.get().length),
                                r = (0, me.Om)(
                                    (e) => {
                                        const t = pe(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return {
                                            hasRewardsReceived: t.hasRewardsReceived,
                                            rank: t.rank,
                                            from: t.from,
                                            to: t.to,
                                        };
                                    },
                                    { equals: M },
                                ),
                                s = (0, me.Om)(
                                    (e) => {
                                        const t = pe(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return be(t.rewards, (e) => Object.assign({}, e));
                                    },
                                    { equals: M },
                                ),
                                i = (0, me.Om)(
                                    (e) => {
                                        const t = pe(s(e), 0);
                                        if (!t)
                                            throw new Error(
                                                `rank rewards item with index ${e} has no any main reward at index: 0`,
                                            );
                                        return t;
                                    },
                                    { equals: M },
                                ),
                                u = (0, me.Om)((e) => [...Ce(s(e), 1)], { equals: M }),
                                o = (0, me.Om)((e) => {
                                    const t = pe(a.get(), e);
                                    if (!t) throw new Error(`item with index ${e} was not found`);
                                    const n = be(t.divisions, (e) => Object.assign({}, e));
                                    return Yr(n);
                                }),
                                l = (0, me.Om)(
                                    (e) => !t.qualification.isActive.get() && e === t.root.get().currentItemIndex,
                                ),
                                c = (0, me.Om)(
                                    () => {
                                        const e = De(a.get(), (e) => !e.hasRewardsReceived);
                                        return {
                                            nextNotAchievedItemIndex: null != e ? e : n(),
                                            hasForceScroll: -1 !== t.root.get().initialItemIndex,
                                        };
                                    },
                                    { equals: _t },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    rankRewardsItemsLength: n,
                                    rankRewardsItem: r,
                                    mainReward: i,
                                    additionalRewards: u,
                                    additionalRewardsCount: (0, me.Om)((e) => u(e).length),
                                    divisionsString: o,
                                    isCurrentRank: l,
                                    scrollingSettings: c,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = e.createCallback((e, t) => ({ rank: e, index: t }), 'onPreviewOpen');
                            return {
                                goToPreview: (0, $.aD)((e, n) => {
                                    const r = t.computes.rankRewardsItem(e).rank;
                                    a(r, n);
                                }),
                            };
                        },
                    ),
                    Ho = $o[0],
                    Wo = $o[1];
                let zo, Uo, Vo, Go, qo, jo, Qo;
                function Yo() {
                    return (
                        (Yo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Yo.apply(this, arguments)
                    );
                }
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
                        (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (e.NewYearFillers = 'ny22Fillers'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearToyFragments = 'ny22ToyFragments'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice');
                })(zo || (zo = {})),
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
                            (e.BattleAchievement = 'dossier_achievement');
                    })(Uo || (Uo = {})),
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
                            (e.S48x48 = 's48x48');
                    })(Vo || (Vo = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Go || (Go = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(qo || (qo = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(jo || (jo = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(Qo || (Qo = {}));
                const Xo = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const n = r().createElement('div', { className: a }, e);
                        if (t.header || t.body) return r().createElement(Ye, t, n);
                        const s = t.contentId;
                        return s ? r().createElement(Ge, Yo({}, t, { contentId: s }), n) : r().createElement(Rr, t, n);
                    },
                    Ko = [
                        zo.Items,
                        zo.Equipment,
                        zo.Xp,
                        zo.XpFactor,
                        zo.Blueprints,
                        zo.BlueprintsAny,
                        zo.Goodies,
                        zo.Berths,
                        zo.Slots,
                        zo.Tokens,
                        zo.CrewSkins,
                        zo.CrewBooks,
                        zo.Customizations,
                        zo.CreditsFactor,
                        zo.TankmenXp,
                        zo.TankmenXpFactor,
                        zo.FreeXpFactor,
                        zo.BattleToken,
                        zo.PremiumUniversal,
                        zo.NaturalCover,
                        zo.BpCoin,
                        zo.BattlePassSelectToken,
                        zo.BattlaPassFinalAchievement,
                        zo.BattleBadge,
                        zo.BonusX5,
                        zo.CrewBonusX3,
                        zo.NewYearFillers,
                        zo.NewYearInvoice,
                        zo.EpicSelectToken,
                        zo.Comp7TokenWeeklyReward,
                        zo.BattleBoosterGift,
                        zo.OptionalDevice,
                        zo.FragmentAntimatter,
                        zo.CosmicLootbox,
                    ],
                    Zo = [zo.Gold, zo.Credits, zo.Crystal, zo.FreeXp],
                    Jo = [zo.BattlePassPoints],
                    el = [zo.PremiumPlus, zo.Premium],
                    tl = ['engravings', 'backgrounds'],
                    al = ['engraving', 'background'],
                    nl = (e, t = Vo.Small) => {
                        const a = e.name,
                            n = e.type,
                            r = e.value,
                            s = e.icon,
                            i = e.item,
                            u = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case Vo.S600x450:
                                        return 'c_600x450';
                                    case Vo.S400x300:
                                        return 'c_400x300';
                                    case Vo.S296x222:
                                        return 'c_296x222';
                                    case Vo.S232x174:
                                        return 'c_232x174';
                                    case Vo.Big:
                                        return 'c_80x80';
                                    case Vo.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${s}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${s}`;
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const n = tl[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            s = r.$dyn(a);
                                        return s ? `${s}` : `${r.$dyn(al[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(u, t, s);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${s}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${s}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${s}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                        }
                    },
                    rl = [Vo.Small, Vo.Big],
                    sl = {
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
                    il = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: n = Vo.Big,
                        special: s,
                        value: i,
                        valueType: u,
                        style: o,
                        className: l,
                        classNames: c,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const _ = ((e, t) => {
                                if (void 0 === t || !rl.includes(e)) return null;
                                switch (t) {
                                    case qo.BATTLE_BOOSTER:
                                    case qo.BATTLE_BOOSTER_REPLACE:
                                        return jo.BATTLE_BOOSTER;
                                }
                            })(n, s),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case qo.BATTLE_BOOSTER:
                                        return Qo.BATTLE_BOOSTER;
                                    case qo.BATTLE_BOOSTER_REPLACE:
                                        return Qo.BATTLE_BOOSTER_REPLACE;
                                    case qo.BUILT_IN_EQUIPMENT:
                                        return Qo.BUILT_IN_EQUIPMENT;
                                    case qo.EQUIPMENT_PLUS:
                                        return Qo.EQUIPMENT_PLUS;
                                    case qo.EQUIPMENT_TROPHY_BASIC:
                                        return Qo.EQUIPMENT_TROPHY_BASIC;
                                    case qo.EQUIPMENT_TROPHY_UPGRADED:
                                        return Qo.EQUIPMENT_TROPHY_UPGRADED;
                                    case qo.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Qo.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case qo.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Qo.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case qo.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Qo.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case qo.PROGRESSION_STYLE_UPGRADED_1:
                                        return Qo.PROGRESSION_STYLE_UPGRADED_1;
                                    case qo.PROGRESSION_STYLE_UPGRADED_2:
                                        return Qo.PROGRESSION_STYLE_UPGRADED_2;
                                    case qo.PROGRESSION_STYLE_UPGRADED_3:
                                        return Qo.PROGRESSION_STYLE_UPGRADED_3;
                                    case qo.PROGRESSION_STYLE_UPGRADED_4:
                                        return Qo.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(s),
                            g = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Go.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Go.CURRENCY:
                                    case Go.NUMBER:
                                        return r().createElement(Ot, { format: 'integral', value: Number(e) });
                                    case Go.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(i, u);
                        return r().createElement(
                            'div',
                            { className: f()(sl.base, sl[`base__${n}`], l), style: o },
                            r().createElement(
                                Xo,
                                { tooltipArgs: d, className: sl.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: f()(sl.image, null == c ? void 0 : c.image) },
                                        _ &&
                                            r().createElement('div', {
                                                className: f()(sl.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            r().createElement('div', {
                                                className: f()(sl.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            r().createElement('div', {
                                                className: f()(sl.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: f()(
                                                    sl.info,
                                                    sl[`info__${e}`],
                                                    u === Go.MULTI && sl.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            a &&
                                r().createElement(
                                    Xo,
                                    { tooltipArgs: m },
                                    r().createElement('div', {
                                        className: f()(sl.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    ul = 'Rewards_base_26',
                    ol = 'Rewards_base__vertical_9f',
                    ll = 'Rewards_reward_7b',
                    cl = 'Rewards_reward__vertical_c6';
                function dl() {
                    return (
                        (dl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        dl.apply(this, arguments)
                    );
                }
                const ml = r().memo(
                        ({
                            data: e,
                            size: t = Vo.Big,
                            isVertical: a = !1,
                            count: s,
                            classMix: i,
                            rewardItemClassMix: u,
                            boxRewardTooltip: o,
                            boxRewardValue: l,
                        }) => {
                            const c = (0, n.useMemo)(
                                    () =>
                                        s && s < e.length ? `R.images.gui.maps.icons.quests.bonuses.${t}.default` : '',
                                    [s, e.length, t],
                                ),
                                d =
                                    l ||
                                    ma(R.strings.tooltips.quests.awards.additional.bottom(), {
                                        count: e.length - (s || 0),
                                    }),
                                m = f()(ul, a && ol, i),
                                _ = f()(ll, a && cl, u);
                            return r().createElement(
                                'div',
                                { className: m },
                                c
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          e
                                              .slice(0, s)
                                              .map((e, a) =>
                                                  r().createElement(
                                                      'div',
                                                      { key: a, className: _ },
                                                      r().createElement(il, dl({ size: t }, e)),
                                                  ),
                                              ),
                                          r().createElement(
                                              'div',
                                              { className: _ },
                                              r().createElement(il, {
                                                  name: 'more',
                                                  image: c,
                                                  size: t,
                                                  value: d,
                                                  tooltipArgs: o,
                                              }),
                                          ),
                                      )
                                    : e.map((e, a) =>
                                          r().createElement(
                                              'div',
                                              { key: a, className: _ },
                                              r().createElement(il, dl({ size: t }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    _l = ['overlayType'];
                const El = (e) => ('vehicles_rent' === e.name ? e.label : e.value),
                    gl = ({ reward: e, rank: t, index: a }) => {
                        const n = e.tooltipId,
                            r = e.tooltipContentId;
                        return ((e, t, a) => {
                            const n = t && { contentId: t };
                            return Object.assign(
                                {
                                    args: e,
                                    isEnabled: Boolean((e && e.tooltipId) || t),
                                    ignoreMouseClick: !0,
                                    ignoreShowDelay: !t,
                                },
                                n,
                                a,
                            );
                        })(
                            Object.assign({ tooltipId: n }, void 0 !== t && { rank: t }, void 0 !== a && { index: a }),
                            Number(r),
                            { ignoreShowDelay: !0 },
                        );
                    },
                    pl = (e, t) => {
                        if ('tankman' === e.name) {
                            const a = R.images.gui.maps.icons.comp7.crew.$dyn(t).$dyn(e.groupName);
                            if (a) return `${a}`;
                        }
                        return nl(e, t);
                    },
                    hl = ({ reward: e, size: t, rank: a, index: n }) => {
                        const r = e.overlayType,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, _l),
                            i = ((e, t) => {
                                if ('dogTagComponents' === e.name) {
                                    if (t === Vo.Big) return Vo.S80x80;
                                    if (t === Vo.Small) return Vo.S48x48;
                                }
                                return t;
                            })(e, t);
                        return Object.assign({}, s, {
                            size: i,
                            image: pl(e, i),
                            value: El(e),
                            valueType:
                                ((u = e.name),
                                Ko.includes(u)
                                    ? Go.MULTI
                                    : Zo.includes(u)
                                      ? Go.CURRENCY
                                      : Jo.includes(u)
                                        ? Go.NUMBER
                                        : el.includes(u)
                                          ? Go.PREMIUM_PLUS
                                          : Go.STRING),
                            special: r,
                            tooltipArgs: gl({ reward: e, rank: a, index: n }),
                            periodicIconTooltipArgs: {
                                header: R.strings.tooltips.periodicReward.header(),
                                body: R.strings.tooltips.periodicReward.comp7.body(),
                            },
                        });
                        var u;
                    },
                    vl = ({ rewards: e, size: t, rank: a, index: n }) =>
                        be(e, (e) => hl({ reward: e, size: t, rank: a, index: n })),
                    bl = (e, t) => (e > t ? t - 1 : void 0),
                    fl = 'AdditionalRewards_reward_16',
                    Cl = 'AdditionalRewards_vehiclesRentBase_d4',
                    Al = 'AdditionalRewards_vehiclesRentLabel_3e',
                    Dl = Vo.Small,
                    Fl = (0, J.Pi)(({ rank: e, itemIndex: t, visibleRewardsCount: a, className: n }) => {
                        const s = Wo().model,
                            i = s.computes.additionalRewards(t),
                            u = s.computes.additionalRewardsCount(t),
                            o = be(i, (t) => {
                                const a = 'vehicles_rent' === t.name;
                                return Object.assign({}, hl({ reward: t, size: Dl, rank: e }), {
                                    className: f()(a && Cl),
                                    classNames: { info: f()(a && Al) },
                                });
                            });
                        return r().createElement(ml, {
                            data: o,
                            size: Dl,
                            count: bl(u, a),
                            rewardItemClassMix: fl,
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { fromIndex: a, rank: e },
                            },
                            classMix: n,
                        });
                    });
                let wl;
                !(function (e) {
                    (e[(e.NotStarted = 0)] = 'NotStarted'),
                        (e[(e.Active = 1)] = 'Active'),
                        (e[(e.OffSeason = 3)] = 'OffSeason'),
                        (e[(e.Finished = 4)] = 'Finished');
                })(wl || (wl = {}));
                const Bl = {
                        base: 'Heading_base_99',
                        tooltipArea: 'Heading_tooltipArea_c9',
                        rankEmblem__inactive: 'Heading_rankEmblem__inactive_8a',
                        lock: 'Heading_lock_a8',
                        description: 'Heading_description_6f',
                        rankName: 'Heading_rankName_05',
                        rankStatus: 'Heading_rankStatus_63',
                    },
                    yl = (0, J.Pi)(({ index: e, rankEmblemSize: t }) => {
                        const a = Wo().model,
                            n = q().model,
                            s = a.root.get().topPercentage,
                            i = a.computes.rankRewardsItem(e),
                            u = i.rank,
                            o = i.from,
                            l = i.to,
                            c = i.hasRewardsReceived,
                            d = a.computes.divisionsString(e),
                            m = a.computes.isCurrentRank(e),
                            _ = ci(u, m);
                        return r().createElement(
                            'div',
                            { className: Bl.base },
                            r().createElement(
                                Gn,
                                {
                                    rank: u,
                                    from: o,
                                    to: l,
                                    topPercentage: s,
                                    divisions: d,
                                    className: Bl.tooltipArea,
                                    ignoreShowDelay: !0,
                                },
                                r().createElement(oi, {
                                    seasonName: n.season.name.get(),
                                    rank: u,
                                    size: t,
                                    type: ii.Static,
                                    state: _,
                                    classNames: { rankEmblem: f()(Bl.rankEmblem, !c && Bl.rankEmblem__inactive) },
                                }),
                                !c && r().createElement('div', { className: Bl.lock }),
                            ),
                            r().createElement(
                                'div',
                                { className: Bl.description },
                                r().createElement('div', { className: Bl.rankName }, La(u)),
                                m &&
                                    r().createElement(
                                        'div',
                                        { className: Bl.rankStatus },
                                        ((e) => {
                                            switch (e) {
                                                case wl.OffSeason:
                                                case wl.Finished:
                                                    return R.strings.comp7.rank.achieved();
                                                case wl.Active:
                                                    return R.strings.comp7.rank.current();
                                                default:
                                                    return '';
                                            }
                                        })(n.year.state.get()),
                                    ),
                            ),
                        );
                    }),
                    Sl =
                        (e, t) =>
                        (...a) => {
                            if (e(...a)) return t(...a);
                        },
                    Nl = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
                    },
                    kl = [
                        'type',
                        'children',
                        'className',
                        'classNames',
                        'disabled',
                        'isVisibleLabel',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function Rl() {
                    return (
                        (Rl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Rl.apply(this, arguments)
                    );
                }
                const Pl = (e) => {
                        let t = e.type,
                            a = e.children,
                            s = e.className,
                            i = e.classNames,
                            u = e.disabled,
                            o = void 0 !== u && u,
                            l = e.isVisibleLabel,
                            c = void 0 !== l && l,
                            d = e.soundHover,
                            m = void 0 === d ? R.sounds.highlight() : d,
                            _ = e.soundClick,
                            E = void 0 === _ ? R.sounds.play() : _,
                            g = e.size,
                            p = void 0 === g ? 'normal' : g,
                            h = e.onClick,
                            v = e.onMouseEnter,
                            b = e.onMouseLeave,
                            C = e.onMouseDown,
                            A = e.onMouseUp,
                            D = e.onFocus,
                            F = e.onBlur,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, kl);
                        const B = (0, n.useState)(!1),
                            y = B[0],
                            S = B[1],
                            N = (0, n.useState)(!1),
                            k = N[0],
                            P = N[1],
                            x = (0, n.useRef)(null),
                            T = () => !1 === o,
                            I = (e) => T() && ((e) => e.button === on.LEFT)(e),
                            L = Sl(T, (e) => {
                                null == h || h(e);
                            }),
                            O = Sl(I, (e) => {
                                S(!0), null == C || C(e), E && j(E);
                            }),
                            M = Sl(I, (e) => {
                                S(!1), null == A || A(e);
                            }),
                            $ = Sl(T, (e) => {
                                P(!0), null == v || v(e), m && j(m);
                            }),
                            H = Sl(T, (e) => {
                                null == D || D(e);
                            }),
                            W = Sl(T, (e) => {
                                null == F || F(e);
                            });
                        return r().createElement(
                            'div',
                            Rl(
                                {
                                    ref: x,
                                    className: f()(
                                        Nl.base,
                                        o && Nl.base__disabled,
                                        c && Nl.base__visibleLabel,
                                        !o && y && Nl.base__mouseDown,
                                        !o && k && Nl.base__hovered,
                                        s,
                                    ),
                                    onClick: L,
                                    onMouseEnter: $,
                                    onMouseLeave: (e) => {
                                        P(!1), S(!1), null == b || b(e);
                                    },
                                    onMouseDown: O,
                                    onMouseUp: M,
                                    onFocus: H,
                                    onBlur: W,
                                },
                                w,
                            ),
                            r().createElement('div', {
                                className: f()(
                                    Nl.icon,
                                    Nl[`icon__${p}`],
                                    Nl[`icon__${t}`],
                                    null == i ? void 0 : i.icon,
                                ),
                            }),
                            a &&
                                r().createElement(
                                    'div',
                                    { className: f()(Nl.label, Nl[`label__${p}`], null == i ? void 0 : i.label) },
                                    a,
                                ),
                        );
                    },
                    xl = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Tl = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Il = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Ll = (e) =>
                        Il
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let a = Tl.length - 1; a >= 0; a--)
                                      for (; e >= Tl[a]; ) (t += xl[a]), (e -= Tl[a]);
                                  return t;
                              })(e),
                    Ol = 'MainReward_base_32',
                    Ml = 'MainReward_imageContainer_37',
                    $l = 'MainReward_highlightContainer_cf',
                    Hl = 'MainReward_highlight_06',
                    Wl = 'MainReward_preview_7a',
                    zl = 'MainReward_info_58',
                    Ul = 'MainReward_title_6d',
                    Vl = 'MainReward_subTitle_e2',
                    Gl = (0, J.Pi)(
                        ({ index: e, rank: t, size: a, hasHighlight: n, onPreviewClick: s, className: i }) => {
                            const u = Wo().model.computes.mainReward(e);
                            return r().createElement(
                                'div',
                                { className: f()(Ol, i) },
                                r().createElement(
                                    'div',
                                    { className: Ml },
                                    n &&
                                        r().createElement(
                                            'div',
                                            { className: $l },
                                            r().createElement('div', { className: Hl }),
                                        ),
                                    r().createElement(il, hl({ reward: u, size: a, rank: t })),
                                    ((e) => 'styleProgress' === e.name)(u) &&
                                        r().createElement(
                                            'div',
                                            { className: Wl },
                                            r().createElement(
                                                Pl,
                                                { type: 'preview', onClick: s },
                                                R.strings.comp7.rewards.preview(),
                                            ),
                                        ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: zl },
                                    r().createElement('div', { className: Ul }, u.label),
                                    r().createElement(ir, {
                                        text: String(R.strings.comp7.rewards.subtitle.$dyn(u.name)),
                                        binding: { vehicleLevel: Ll(10) },
                                        classMix: Vl,
                                    }),
                                ),
                            );
                        },
                    ),
                    ql = 'RankRewardsItem_base_a7',
                    jl = 'RankRewardsItem_mainRewardContainer_e0',
                    Ql = 'RankRewardsItem_rewardsContainer_69',
                    Yl = 'RankRewardsItem_statusContainer_bf',
                    Xl = 'RankRewardsItem_statusContainer__hidden_c8',
                    Kl = 'RankRewardsItem_icon_7d',
                    Zl = (0, J.Pi)(
                        ({
                            itemIndex: e,
                            itemWidth: t,
                            mainRewardSize: a,
                            hasHighlight: n,
                            visibleRewardsCount: s,
                            rankEmblemSize: i,
                            onPreviewClick: u,
                        }) => {
                            const o = Wo().model.computes.rankRewardsItem(e),
                                l = o.rank,
                                c = o.hasRewardsReceived;
                            return r().createElement(
                                'div',
                                { className: ql, style: { '--itemWidth': `${t}rem` } },
                                r().createElement(yl, { index: e, rankEmblemSize: i }),
                                r().createElement(Gl, {
                                    index: e,
                                    rank: l,
                                    size: a,
                                    hasHighlight: n,
                                    onPreviewClick: u,
                                    className: jl,
                                }),
                                r().createElement(
                                    'div',
                                    { className: Ql },
                                    r().createElement(Fl, { itemIndex: e, visibleRewardsCount: s, rank: l }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: f()(Yl, !c && Xl) },
                                    r().createElement('div', { className: Kl }),
                                    R.strings.comp7.rewards.status.achieved(),
                                ),
                            );
                        },
                    ),
                    Jl = (e) => (e >= D.Large ? ka.x110 : e >= D.Medium ? ka.x64 : ka.x48),
                    ec = (e) =>
                        e >= D.ExtraLarge
                            ? Vo.S600x450
                            : e >= D.Large
                              ? Vo.S400x300
                              : e >= D.Medium
                                ? Vo.S296x222
                                : Vo.S232x174,
                    tc = (e) => (e >= F.Medium ? 5 : 4),
                    ac = 'RankRewardsPage_base_fd',
                    nc = 'RankRewardsPage_content_3f',
                    rc = 'RankRewardsPage_scrollContainer_f2',
                    sc = 'RankRewardsPage_areaContainer_9e',
                    ic = 'RankRewardsPage_areaWrapper_fb',
                    uc = 'RankRewardsPage_bar_59',
                    oc = { duration: 700, easing: (e) => Math.pow(e, 4) },
                    lc = (0, J.Pi)(() => {
                        const e = B(),
                            t = e.mediaSize,
                            a = e.mediaWidth,
                            s = Wo(),
                            u = s.model,
                            o = s.controls,
                            l = u.root.get().initialItemIndex,
                            c = u.computes.rankRewardsItemsLength(),
                            d = u.computes.scrollingSettings(),
                            m = d.nextNotAchievedItemIndex,
                            _ = d.hasForceScroll,
                            E = (0, n.useState)(_ ? 'idle' : 'initial'),
                            g = E[0],
                            p = E[1],
                            h = (0, n.useState)(_ ? l : m),
                            v = h[0],
                            b = h[1],
                            f = ((e) =>
                                e >= D.ExtraLarge
                                    ? 600
                                    : e >= D.Large
                                      ? 460
                                      : e >= D.Medium
                                        ? 400
                                        : e >= D.Small
                                          ? 340
                                          : 300)(t),
                            C = c * f,
                            A = ni(f),
                            F = A.scrollPosition,
                            w = A.clampPosition,
                            y = A.contentRef,
                            S = (function () {
                                const e = (0, n.useRef)(!1);
                                return (
                                    (0, n.useEffect)(
                                        () => () => {
                                            e.current = !0;
                                        },
                                        [],
                                    ),
                                    e
                                );
                            })();
                        (0, n.useLayoutEffect)(() => {
                            'idle' === g
                                ? F.start({ scrollPosition: i.O.view.remToPx(l * f), immediate: !0 })
                                : 'initial' === g && F.start({ scrollPosition: i.O.view.remToPx(C), immediate: !0 });
                        }, []),
                            (0, n.useEffect)(
                                () =>
                                    Re(() => {
                                        const e = y.current;
                                        if (e && 'initial' === g) {
                                            const t = w(e, i.O.view.remToPx(m * f)),
                                                a = w(e, i.O.view.remToPx(C));
                                            if (t === a) return void p('idle');
                                            F.start({
                                                scrollPosition: t,
                                                from: { scrollPosition: a },
                                                config: oc,
                                                onStart: () => {
                                                    p('scrolling');
                                                },
                                                onRest: () => {
                                                    S.current || p('idle');
                                                },
                                            });
                                        }
                                    }),
                                [w, y, S, f, m, g, C, F],
                            );
                        const N = (e) => 'idle' === g && e === m,
                            k = (0, Pe.useSpring)(ut);
                        return r().createElement(
                            'div',
                            { className: ac },
                            r().createElement(it, { className: re }, R.strings.comp7.page.heading.rankRewards()),
                            r().createElement(Wr, null),
                            r().createElement(
                                Pe.animated.div,
                                { className: nc, style: k },
                                r().createElement(
                                    ai,
                                    {
                                        api: A,
                                        stuckIndex: v,
                                        itemWidth: f,
                                        itemsOffset: Ls(f),
                                        onStick: b,
                                        className: rc,
                                        areaClassNames: { base: sc, wrapper: ic },
                                        barClassNames: { base: uc },
                                    },
                                    ia(c, (e) =>
                                        r().createElement(Zl, {
                                            key: e,
                                            itemIndex: e,
                                            visibleRewardsCount: tc(a),
                                            rankEmblemSize: Jl(t),
                                            mainRewardSize: ec(t),
                                            itemWidth: f,
                                            hasHighlight: N(e),
                                            onPreviewClick: () => o.goToPreview(e, v),
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                let cc, dc;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(cc || (cc = {})),
                    (function (e) {
                        (e[(e.Initial = 0)] = 'Initial'),
                            (e[(e.Success = 1)] = 'Success'),
                            (e[(e.Error = 2)] = 'Error');
                    })(dc || (dc = {}));
                const mc = [Zr.Locked, Zr.ReadyToPurchase],
                    _c = [Kr.Vehicle, Kr.Style3d],
                    Ec = U()(
                        ({ observableModel: e, mode: t }) => {
                            const a = e.array('rankDiscounts'),
                                n = e.array('products'),
                                r = { root: e.object() },
                                s = (0, me.Om)(
                                    () =>
                                        be(n.get(), (e) =>
                                            Object.assign(
                                                {},
                                                e,
                                                { price: Object.assign({}, e.price) },
                                                'vehicleInfo' in e && { vehicleInfo: Object.assign({}, e.vehicleInfo) },
                                                'reward' in e && { reward: Object.assign({}, e.reward) },
                                            ),
                                        ),
                                    { equals: M },
                                ),
                                i = (0, me.Om)(
                                    (e) => {
                                        const t = pe(s(), e);
                                        if (!t) throw new Error(`product with index ${e} is not found`);
                                        return t;
                                    },
                                    { equals: M },
                                ),
                                u = (0, me.Om)(
                                    () => {
                                        const e = new Set(),
                                            t = we(
                                                s(),
                                                (t, a, n) => {
                                                    const r = a.rank,
                                                        s = t.get(r);
                                                    return void 0 === s
                                                        ? (0 !== n && e.add(n), t.set(r, 1))
                                                        : t.set(r, s + 1);
                                                },
                                                new Map(),
                                            );
                                        return { recordsArray: Array.from(t.entries()), groupIndexesSet: e };
                                    },
                                    { equals: M },
                                ),
                                o = (0, me.Om)(
                                    (e) => {
                                        const t = i(e);
                                        return {
                                            hasDiscount: t.state === Zr.ReadyToPurchase && t.price.discountValue > 0,
                                            isEnough: !mc.includes(t.state) || t.price.isEnough,
                                        };
                                    },
                                    { equals: _t },
                                ),
                                l = (0, me.Om)(() => {
                                    const e = r.root.get().selectedProductId,
                                        t = De(s(), (t) => t.id === e);
                                    if (void 0 === t)
                                        throw new Error(`selectedProductId: ${e} is not found in products array`);
                                    return t;
                                }),
                                c = (0, me.Om)(
                                    () => {
                                        const e = l(),
                                            t = i(e);
                                        if (!t)
                                            throw new Error(
                                                `product with selected index ${e} is not found in products array`,
                                            );
                                        return t;
                                    },
                                    { equals: M },
                                ),
                                d = (0, me.Om)(() => r.root.get().shopState === dc.Success && c().type !== Kr.Reward),
                                m = (0, me.Om)(() => {
                                    const e = c();
                                    return e.type === Kr.Vehicle && e.state !== Zr.ReadyToRestore && e.description;
                                }),
                                _ = (0, me.Om)(() => c().type === Kr.Reward),
                                E = (0, me.Om)(
                                    () => {
                                        const e = c(),
                                            t = e.type === Kr.Vehicle && e.state !== Zr.Purchased;
                                        return {
                                            hasControls: _c.includes(e.type),
                                            hasAddToCompare: e.type === Kr.Vehicle,
                                            hasPreview: t || e.type === Kr.Style3d,
                                        };
                                    },
                                    { equals: _t },
                                ),
                                g = (0, me.Om)(
                                    () =>
                                        be(a.get(), (e) =>
                                            Object.assign({}, e, {
                                                divisions: Yr(be(e.divisions, (e) => Object.assign({}, e))),
                                            }),
                                        ),
                                    { equals: M },
                                ),
                                p = (0, me.Om)(
                                    (e) => {
                                        const t = pe(g(), e);
                                        if (!t) throw new Error(`rank discount with index ${e} is not found`);
                                        return t;
                                    },
                                    { equals: M },
                                );
                            return Object.assign(
                                {},
                                r,
                                {
                                    computes: {
                                        productsLength: (0, me.Om)(() => s().length),
                                        rankDiscountsLength: (0, me.Om)(() => g().length),
                                        product: i,
                                        productsDividersConfig: u,
                                        priceConfig: o,
                                        selectedProductIndex: l,
                                        selectedProduct: c,
                                        hasSceneWrapper: d,
                                        hasVehicleDescription: m,
                                        hasLimitedQuantity: _,
                                        controlsConfig: E,
                                        rankDiscount: p,
                                    },
                                },
                                'mocks' === t && { internal: { rankDiscounts: a, computes: { products: s } } },
                            );
                        },
                        ({ externalModel: e }) => ({
                            markProductSeen: e.createCallback((e) => ({ cd: e }), 'onProductSeen'),
                            selectProduct: e.createCallback((e) => ({ cd: e }), 'onProductSelect'),
                            purchase: e.createCallbackNoArgs('onProductPurchase'),
                            restore: e.createCallbackNoArgs('onProductRestore'),
                            goToHangar: e.createCallbackNoArgs('onGoToHangar'),
                            goToPreview: e.createCallbackNoArgs('onGoToPreview'),
                            goToCustomization: e.createCallbackNoArgs('onGoToCustomization'),
                            addToVehicleCompare: e.createCallbackNoArgs('onAddToVehicleCompare'),
                            mouseOver3dScene: e.createCallback(
                                ({ isOver3dScene: e }) => ({ isOver3dScene: e }),
                                'onMouseOver3dScene',
                            ),
                            moveSpace: e.createCallback(
                                ({ dx: e, dy: t, dz: a }) => ({ dx: e, dy: t, dz: a }),
                                'onMoveSpace',
                            ),
                        }),
                    ),
                    gc = Ec[0],
                    pc = Ec[1],
                    hc = 'SceneWrapper_base_99',
                    vc = 'SceneWrapper_base__down_65',
                    bc = 'SceneWrapper_base__moveSpaceDisabled_fe',
                    fc = ({
                        children: e,
                        moveSpace: t,
                        onMouseOver3dScene: a,
                        onDragStateChange: s,
                        isMoveSpaceEnabled: i = !0,
                    }) => {
                        const u = (0, n.useState)(!1),
                            o = u[0],
                            l = u[1],
                            c = (0, n.useState)({ x: 0, y: 0 }),
                            d = c[0],
                            m = c[1],
                            _ = (0, n.createRef)(),
                            E = (0, n.useCallback)(() => {
                                l(!1), null == s || s(!1);
                            }, [s]);
                        (0, n.useEffect)(
                            () => (
                                window.addEventListener('mouseup', E), () => window.removeEventListener('mouseup', E)
                            ),
                            [E],
                        );
                        const g = (0, n.useCallback)(
                                (e) => {
                                    if (!_.current) return;
                                    const t = _.current.getBoundingClientRect(),
                                        a = t.width,
                                        n = t.height;
                                    return !(
                                        0 === e.clientX ||
                                        0 === e.clientY ||
                                        e.clientX >= a - 1 ||
                                        e.clientY >= n - 1
                                    );
                                },
                                [_],
                            ),
                            p = (0, n.useCallback)(
                                (e) => {
                                    e.preventDefault(),
                                        0 === e.button &&
                                            g(e) &&
                                            i &&
                                            (l(!0), null == s || s(!0), m({ x: e.clientX, y: e.clientY }));
                                },
                                [g, i, s],
                            ),
                            h = (0, n.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), o)) {
                                        if (!g(e)) return;
                                        const a = e.clientX !== d.x ? e.clientX - d.x : 0,
                                            n = e.clientY !== d.y ? e.clientY - d.y : 0;
                                        m({ x: e.clientX, y: e.clientY }), t({ dx: a, dy: n, dz: 0 });
                                    }
                                },
                                [g, o, d.x, d.y, t],
                            ),
                            v = (0, n.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), !i || !g(e))) return;
                                    const a = e.deltaY < 0;
                                    t({ dx: 0, dy: 0, dz: a ? -600 : 600 });
                                },
                                [g, i, t],
                            ),
                            b = (0, n.useCallback)(() => {
                                l(!1), null == s || s(!1);
                            }, [s]),
                            C = (0, n.useCallback)(() => {
                                a({ isOver3dScene: !0 });
                            }, [a]),
                            A = (0, n.useCallback)(() => {
                                a({ isOver3dScene: !1 });
                            }, [a]);
                        return r().createElement(
                            'div',
                            {
                                ref: _,
                                className: f()(hc, o && vc, !i && bc),
                                onMouseDown: p,
                                onMouseMove: h,
                                onMouseUp: b,
                                onWheel: v,
                                onMouseOver: C,
                                onMouseOut: A,
                            },
                            e,
                        );
                    },
                    Cc = 'ErrorState_base_6b',
                    Ac = 'ErrorState_titleContainer_21',
                    Dc = 'ErrorState_alertIcon_2b',
                    Fc = 'ErrorState_title_b3',
                    wc = 'ErrorState_description_81',
                    Bc = R.strings.comp7.dataError,
                    yc = ({ className: e, classNames: t, title: a = Bc.title(), description: n = Bc.description() }) =>
                        r().createElement(
                            'div',
                            { className: f()(Cc, e) },
                            r().createElement(
                                'div',
                                { className: f()(Ac, null == t ? void 0 : t.titleContainer) },
                                r().createElement('div', { className: f()(Dc, null == t ? void 0 : t.alertIcon) }),
                                r().createElement('div', { className: f()(Fc, null == t ? void 0 : t.title) }, a),
                            ),
                            r().createElement('div', { className: f()(wc, null == t ? void 0 : t.description) }, n),
                        ),
                    Sc = 'ShopPage_base_85',
                    Nc = 'ShopPage_sceneWrapper_d8',
                    kc = 'ShopPage_vignette_69',
                    Rc = 'ShopPage_headersWrapper_e8',
                    Pc = 'ShopPage_activeSeasonState_b7',
                    xc = 'ShopPage_contentWrapper_27',
                    Tc = 'ShopPage_rewardImage_ee',
                    Ic = 'ShopPage_rewardHighlight_52',
                    Lc = 'ShopPage_controls_c4',
                    Oc = 'ShopPage_mainContainer_7c',
                    Mc = 'ShopPage_details_1f',
                    $c = 'ShopPage_carousel_e3',
                    Hc = {
                        base: 'CarouselScroll_base_fc',
                        areaWrapper: 'CarouselScroll_areaWrapper_f4',
                        areaWrapper__hasScroll: 'CarouselScroll_areaWrapper__hasScroll_3f',
                        areaContent: 'CarouselScroll_areaContent_2a',
                        arrow: 'CarouselScroll_arrow_e3',
                        arrow__prev: 'CarouselScroll_arrow__prev_ed',
                        arrow__next: 'CarouselScroll_arrow__next_84',
                        arrow__hidden: 'CarouselScroll_arrow__hidden_2a',
                        arrow__prevDisabled: 'CarouselScroll_arrow__prevDisabled_2d',
                        arrow__nextDisabled: 'CarouselScroll_arrow__nextDisabled_93',
                    },
                    Wc = ({ api: e, className: t, classNames: a, children: s }) => {
                        const i = e.events,
                            u = e.getBounds,
                            o = e.getWrapperSize,
                            l = e.getContainerSize,
                            c = e.applyStepTo,
                            d = e.animationScroll.scrollPosition,
                            m = (0, n.useRef)(null),
                            _ = (0, n.useState)('visible'),
                            E = _[0],
                            g = _[1],
                            p = xs();
                        Is(e);
                        const h = Rt(() => {
                                p.run(() => {
                                    const e = u(),
                                        t = e[0],
                                        a = e[1],
                                        n = o(),
                                        r = l();
                                    if (n && r)
                                        return r <= n
                                            ? g('hidden')
                                            : d.goal === t
                                              ? g('prevDisabled')
                                              : d.goal === a
                                                ? g('nextDisabled')
                                                : g('visible');
                                });
                            }),
                            v = Ut((e) => c(e), 150, [c]),
                            b = v[0],
                            C = v[1],
                            A = (0, n.useCallback)(
                                (e) => () => {
                                    const t = e === xt.Next && 'prevDisabled' === E,
                                        a = e === xt.Prev && 'nextDisabled' === E;
                                    t || a || (Q.playClick(), b(e));
                                },
                                [E, b],
                            );
                        return (
                            Rs(() => {
                                h();
                            }),
                            ks(() => {
                                h();
                            }, [h]),
                            (0, n.useEffect)(() => {
                                const e = Pt(200, h);
                                return i.on('change', e), () => i.off('change', e);
                            }, [i, h]),
                            (0, n.useEffect)(
                                () => (
                                    document.addEventListener('mouseup', C, !0),
                                    () => document.removeEventListener('mouseup', C, !0)
                                ),
                                [C],
                            ),
                            r().createElement(
                                'div',
                                { className: f()(Hc.base, t), ref: m },
                                r().createElement(
                                    Zs,
                                    {
                                        api: e,
                                        classNames: {
                                            wrapper: f()(
                                                Hc.areaWrapper,
                                                null == a ? void 0 : a.areaWrapper,
                                                'hidden' !== E && Hc.areaWrapper__hasScroll,
                                            ),
                                            content: f()(Hc.areaContent, null == a ? void 0 : a.areaContent),
                                        },
                                    },
                                    s,
                                ),
                                r().createElement('div', {
                                    className: f()(Hc.arrow, Hc.arrow__prev, Hc[`arrow__${E}`]),
                                    onMouseEnter: 'prevDisabled' === E ? void 0 : Q.playHighlight,
                                    onMouseDown: A(xt.Next),
                                    onMouseUp: C,
                                }),
                                r().createElement('div', {
                                    className: f()(Hc.arrow, Hc.arrow__next, Hc[`arrow__${E}`]),
                                    onMouseEnter: 'nextDisabled' === E ? void 0 : Q.playHighlight,
                                    onMouseDown: A(xt.Prev),
                                    onMouseUp: C,
                                }),
                            )
                        );
                    },
                    zc = {
                        '--pageContentWidth': '78vw',
                        base: 'ProductCard_base_d5',
                        base__selected: 'ProductCard_base__selected_71',
                        background: 'ProductCard_background_bd',
                        backgroundGradient: 'ProductCard_backgroundGradient_92',
                        imageContainer: 'ProductCard_imageContainer_e4',
                        corners: 'ProductCard_corners_b3',
                        discountBackground: 'ProductCard_discountBackground_12',
                        stroke: 'ProductCard_stroke_03',
                        base__purchased: 'ProductCard_base__purchased_7a',
                        corner: 'ProductCard_corner_34',
                        corner__top: 'ProductCard_corner__top_04',
                        corner__bottom: 'ProductCard_corner__bottom_37',
                        corner__left: 'ProductCard_corner__left_fe',
                        corner__right: 'ProductCard_corner__right_9b',
                        container: 'ProductCard_container_57',
                        name: 'ProductCard_name_4d',
                        lock: 'ProductCard_lock_79',
                        bottomString: 'ProductCard_bottomString_e5',
                        notification: 'ProductCard_notification_bc',
                    },
                    Uc = 'ProductCardImage_base_ac',
                    Vc = R.images.gui.maps.icons.comp7.products,
                    Gc = (0, J.Pi)(({ index: e, className: t }) => {
                        const a = pc().model.computes.product(e);
                        return r().createElement('div', {
                            className: f()(Uc, t),
                            style: { backgroundImage: `url('${Vc.$num(a.id)}')` },
                        });
                    }),
                    qc = {
                        base: 'VehicleName_base_3b',
                        base__24x24: 'VehicleName_base__24x24_a7',
                        base__24x24_metal: 'VehicleName_base__24x24_metal_92',
                        base__48x48: 'VehicleName_base__48x48_6a',
                        base__64x64: 'VehicleName_base__64x64_d2',
                        base__83x74: 'VehicleName_base__83x74_ba',
                        vehicleTypeContainer: 'VehicleName_vehicleTypeContainer_f2',
                        base__60x54: 'VehicleName_base__60x54_08',
                        vehicleType: 'VehicleName_vehicleType_c3',
                    };
                let jc;
                !(function (e) {
                    (e.x24 = '24x24'),
                        (e.x24Metal = '24x24_metal'),
                        (e.x48 = '48x48'),
                        (e.x60 = '60x54'),
                        (e.x64 = '64x64'),
                        (e.x80 = '80x80'),
                        (e.x83 = '83x74'),
                        (e.x180 = '180x135');
                })(jc || (jc = {}));
                const Qc = R.images.gui.maps.icons.vehicleTypes,
                    Yc = (e) => {
                        switch (e) {
                            case jc.x80:
                                return Qc.large;
                            case jc.x83:
                                return Qc.big;
                            case jc.x180:
                                return Qc.huge;
                            default:
                                return Qc.$dyn(`c_${e}`);
                        }
                    },
                    Xc = (0, n.memo)(
                        ({
                            name: e,
                            tier: t,
                            type: a,
                            size: n = jc.x24Metal,
                            typeIconFolderPath: s = Yc(n),
                            isPremium: i = !1,
                            className: u,
                            classNames: o,
                        }) => {
                            const l = `${_a(a)}${i ? '_elite' : ''}`;
                            return r().createElement(
                                'div',
                                { className: f()(qc.base, qc[`base__${n}`], u) },
                                r().createElement('div', { className: null == o ? void 0 : o.level }, Ll(t)),
                                r().createElement(
                                    'div',
                                    {
                                        className: f()(
                                            qc.vehicleTypeContainer,
                                            null == o ? void 0 : o.vehicleTypeContainer,
                                        ),
                                    },
                                    r().createElement('div', {
                                        className: f()(qc.vehicleType, null == o ? void 0 : o.type),
                                        style: { backgroundImage: `url(${null == s ? void 0 : s.$dyn(l)})` },
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: f()(qc.shortName, null == o ? void 0 : o.shortName) },
                                    e,
                                ),
                            );
                        },
                    ),
                    Kc = 'ProductCardName_base_23',
                    Zc = 'ProductCardName_nation_68',
                    Jc = 'ProductCardName_style3dContainer_9e',
                    ed = 'ProductCardName_overflowedName_ab',
                    td = 'ProductCardName_style3dDescription_88',
                    ad = R.images.gui.maps.icons.flags.c_20x12,
                    nd = (0, J.Pi)(({ index: e, className: t }) => {
                        const a = pc().model.computes.product(e),
                            n = B().mediaSize;
                        switch (a.type) {
                            case Kr.Vehicle: {
                                const e = a.vehicleInfo,
                                    n = e.name,
                                    s = e.tier,
                                    i = e.type,
                                    u = e.nation,
                                    o = e.isPremium;
                                return r().createElement(
                                    'div',
                                    { className: f()(Kc, t) },
                                    r().createElement('div', {
                                        className: Zc,
                                        style: { backgroundImage: `url('${ad.$dyn(u)}')` },
                                    }),
                                    r().createElement(Xc, { name: n, tier: s, type: i, isPremium: o }),
                                );
                            }
                            case Kr.Style3d: {
                                const e = a.name,
                                    s = a.vehicleInfo,
                                    i = ma(R.strings.comp7.products.style3d(), {
                                        name: ma(R.strings.comp7.quotesWrapper(), { name: e }),
                                    });
                                return r().createElement(
                                    'div',
                                    { className: f()(Kc, Jc, t) },
                                    r().createElement(Ka, { classMix: ed, content: i, key: n }),
                                    r().createElement(tr, {
                                        text: R.strings.comp7.forVehicle(),
                                        binding: { vehicleName: s.name },
                                        classMix: td,
                                    }),
                                );
                            }
                            case Kr.Reward:
                                return r().createElement(tr, { text: a.reward.label, classMix: f()(Kc, t) });
                            default:
                                return console.error(`Provide ProductCardName for ProductType:${a.type}`), null;
                        }
                    }),
                    rd = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    };
                let sd, id, ud;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(sd || (sd = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(id || (id = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(ud || (ud = {}));
                const od = (0, n.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: t,
                            size: a,
                            type: n,
                            value: s,
                            discountValue: i,
                            showPlus: u,
                            isEnough: o = !0,
                            stockBackgroundName: l = ud.Red,
                            className: c,
                            classNames: d,
                        }) =>
                            r().createElement(
                                'span',
                                { className: f()(rd.base, rd[`base__${a}`], c) },
                                r().createElement(
                                    'span',
                                    {
                                        className: f()(
                                            rd.value,
                                            rd[`value__${n}`],
                                            !o && rd.value__notEnough,
                                            null == d ? void 0 : d.value,
                                        ),
                                    },
                                    u && s > 0 && '+',
                                    r().createElement(Ot, { value: s, format: n === id.gold ? 'gold' : 'integral' }),
                                ),
                                r().createElement('span', {
                                    className: f()(rd.icon, rd[`icon__${n}-${a}`], null == d ? void 0 : d.icon),
                                }),
                                e &&
                                    r().createElement(
                                        'span',
                                        {
                                            className: f()(
                                                rd.stock,
                                                i && rd.stock__indent,
                                                t && rd.stock__interactive,
                                                null == d ? void 0 : d.stock,
                                            ),
                                        },
                                        r().createElement('span', {
                                            className: rd.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                        }),
                                        Boolean(i) && i,
                                    ),
                            ),
                    ),
                    ld = {
                        base: 'ProductCardPrice_base_8e',
                        currencyValue: 'ProductCardPrice_currencyValue_87',
                        discount: 'ProductCardPrice_discount_1a',
                        discount__freeXP: 'ProductCardPrice_discount__freeXP_c9',
                        discount__credits: 'ProductCardPrice_discount__credits_f2',
                        discount__gold: 'ProductCardPrice_discount__gold_3d',
                        discount__xp: 'ProductCardPrice_discount__xp_11',
                        discount__crystal: 'ProductCardPrice_discount__crystal_8d',
                        discount__equipCoin: 'ProductCardPrice_discount__equipCoin_7e',
                        discountLine: 'ProductCardPrice_discountLine_c9',
                    },
                    cd = { value: ld.currencyValue },
                    dd = (0, J.Pi)(({ index: e, className: t }) => {
                        const a = pc().model,
                            n = a.computes.product(e).price,
                            s = a.computes.priceConfig(e).hasDiscount;
                        return r().createElement(
                            'div',
                            { className: f()(ld.base, t) },
                            s &&
                                r().createElement(
                                    'div',
                                    { className: f()(ld.discount, ld[`discount__${n.name}`]) },
                                    r().createElement(Ot, { value: n.value }),
                                    r().createElement('div', { className: ld.discountLine }),
                                ),
                            r().createElement(od, {
                                size: sd.small,
                                type: n.name,
                                value: s ? n.discountValue : n.value,
                                classNames: cd,
                            }),
                        );
                    }),
                    md = 'ProductCardPurchased_base_ed',
                    _d = 'ProductCardPurchased_icon_4b',
                    Ed = 'ProductCardPurchased_text_a6',
                    gd = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: f()(md, e) },
                            r().createElement('div', { className: _d }),
                            r().createElement('div', { className: Ed }, R.strings.comp7.products.purchased()),
                        ),
                    pd = 'ProductCardReadyToRestore_base_11',
                    hd = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: f()(pd, e) },
                            r().createElement(tr, { text: R.strings.comp7.products.readyToRestore() }),
                        ),
                    vd = {
                        [Kr.Vehicle]: 'comp_7_shop_carousel_click_tank',
                        [Kr.Style3d]: 'comp_7_shop_carousel_click_style',
                        [Kr.Reward]: 'comp_7_shop_carousel_click_module',
                        [Kr.Base]: '',
                    },
                    bd = (0, J.Pi)(({ index: e, className: t, classNames: a }) => {
                        const n = pc(),
                            s = n.model,
                            i = n.controls,
                            u = s.computes.product(e),
                            o = u.id,
                            l = u.state,
                            c = u.isNew,
                            d = u.rank,
                            m = u.type,
                            _ = s.computes.priceConfig(e).hasDiscount,
                            E = s.computes.selectedProductIndex(),
                            g = e === E;
                        return r().createElement(
                            'div',
                            {
                                className: f()(zc.base, g && zc.base__selected, zc[`base__${l}`], t),
                                onClick: () => {
                                    g || (Q.playClick(), j(vd[m]), i.selectProduct(o), i.markProductSeen(o));
                                },
                            },
                            r().createElement('div', {
                                className: f()(zc.background, null == a ? void 0 : a.background),
                                style: {
                                    backgroundImage: `url(${Ta(R.images.gui.maps.icons.comp7.products.cardsBackgrounds, d)})`,
                                },
                            }),
                            r().createElement(
                                'div',
                                { className: zc.corners },
                                r().createElement('div', {
                                    className: f()(
                                        zc.corner,
                                        zc.corner__top,
                                        zc.corner__left,
                                        null == a ? void 0 : a.corner,
                                    ),
                                }),
                                r().createElement('div', {
                                    className: f()(
                                        zc.corner,
                                        zc.corner__top,
                                        zc.corner__right,
                                        null == a ? void 0 : a.corner,
                                    ),
                                }),
                                r().createElement('div', {
                                    className: f()(
                                        zc.corner,
                                        zc.corner__bottom,
                                        zc.corner__left,
                                        null == a ? void 0 : a.corner,
                                    ),
                                }),
                                r().createElement('div', {
                                    className: f()(
                                        zc.corner,
                                        zc.corner__bottom,
                                        zc.corner__right,
                                        null == a ? void 0 : a.corner,
                                    ),
                                }),
                            ),
                            r().createElement('div', { className: f()(zc.stroke, null == a ? void 0 : a.stroke) }),
                            r().createElement(Gc, {
                                index: e,
                                className: f()(zc.imageContainer, null == a ? void 0 : a.imageContainer),
                            }),
                            r().createElement('div', { className: zc.backgroundGradient }),
                            _ && r().createElement('div', { className: zc.discountBackground }),
                            c &&
                                r().createElement(
                                    'div',
                                    { className: f()(zc.notification, null == a ? void 0 : a.notification) },
                                    R.strings.comp7.products.newLabel(),
                                ),
                            r().createElement(
                                'div',
                                { className: zc.container },
                                r().createElement(nd, { index: e, className: zc.name }),
                                (() => {
                                    switch (l) {
                                        case Zr.ReadyToRestore:
                                            return r().createElement(hd, { className: zc.bottomString });
                                        case Zr.Purchased:
                                            return r().createElement(gd, { className: zc.bottomString });
                                        default:
                                            return r().createElement(dd, { index: e, className: zc.bottomString });
                                    }
                                })(),
                            ),
                            l === Zr.Locked && r().createElement('div', { className: zc.lock }),
                        );
                    }),
                    fd = 'RankSection_base_0d',
                    Cd = 'RankSection_dividerContainer_a1',
                    Ad = 'RankSection_dividerContainer__right_f9',
                    Dd = 'RankSection_verticalDivider_ae',
                    Fd = 'RankSection_centralContainer_74',
                    wd = 'RankSection_rankDescription_49',
                    Bd = 'RankSection_rankImage_90',
                    yd = 'RankSection_rankString_23',
                    Sd = 'RankSection_horizontalDivider_eb',
                    Nd = 'RankSection_peak_d7',
                    kd = 'RankSection_peak__right_26',
                    Rd = 'RankSection_line_e4',
                    Pd = ({ rank: e, seasonName: t, className: a }) =>
                        r().createElement(
                            'div',
                            { className: f()(fd, a) },
                            r().createElement(
                                'div',
                                { className: Cd },
                                r().createElement('div', { className: Dd }),
                                r().createElement(
                                    'div',
                                    { className: Sd },
                                    r().createElement('div', { className: Nd }),
                                    r().createElement('div', { className: Rd }),
                                    r().createElement('div', { className: f()(Nd, kd) }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: Fd },
                                r().createElement(Pa, { rank: e, size: ka.x40, seasonName: t, className: Bd }),
                                r().createElement(tr, {
                                    classMix: wd,
                                    text: R.strings.comp7.products.rankAccess(),
                                    binding: {
                                        rank: r().createElement(
                                            'div',
                                            { className: yd },
                                            ma(R.strings.comp7.quotesWrapper(), { name: Ia(e) }),
                                        ),
                                    },
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: f()(Cd, Ad) },
                                r().createElement('div', { className: Dd }),
                                r().createElement(
                                    'div',
                                    { className: Sd },
                                    r().createElement('div', { className: Nd }),
                                    r().createElement('div', { className: Rd }),
                                    r().createElement('div', { className: f()(Nd, kd) }),
                                ),
                            ),
                        ),
                    xd = 'Carousel_dividersSections_e4',
                    Td = 'Carousel_section_9e',
                    Id = 'Carousel_scrollItem_93',
                    Ld = 'Carousel_scrollItem__group_a1',
                    Od = 'Carousel_selectedHighlight_12',
                    Md = 'Carousel_selectedHighlight__active_9c',
                    $d = 'Carousel_productCard_90',
                    Hd = { areaWrapper: 'Carousel_areaWrapper_d4', areaContent: 'Carousel_areaContent_b4' },
                    Wd = (0, J.Pi)(({ className: e }) => {
                        const t = pc().model,
                            a = q().model,
                            s = B().mediaSize,
                            u = (0, n.useRef)(null),
                            o = t.computes.selectedProductIndex(),
                            l = t.computes.productsDividersConfig(),
                            c = ((e) => (e >= D.Medium ? 180 : e >= D.Small ? 150 : 120))(s),
                            d = ((e) => {
                                const t = (0, n.useMemo)(
                                    () => ({
                                        settings: {
                                            step: { type: 'proportional', factor: 8 },
                                            animationConfig: Object.assign({ tension: 120, friction: 20 }, e),
                                        },
                                    }),
                                    [e],
                                );
                                return Os(t);
                            })(),
                            m = xs(),
                            _ = s >= D.Large ? { width: 260, offset: 20 } : { width: 226, offset: 14 },
                            E = Rt((e) => {
                                m.run(() => {
                                    if (u && u.current) {
                                        const t = u.current.offsetLeft - i.O.view.remToPx(c);
                                        d.applyScroll(t, e);
                                    }
                                });
                            });
                        return (
                            Rs(() => {
                                E();
                            }),
                            ks(() => {
                                E({ immediate: !0, reset: !0 });
                            }, [E]),
                            r().createElement(
                                'div',
                                {
                                    style: {
                                        '--shopOffset': `${c}rem`,
                                        '--itemOffset': `${_.offset}rem`,
                                        '--groupOffset': 2 * _.offset + 'rem',
                                        '--itemWidth': `${_.width}rem`,
                                    },
                                },
                                r().createElement(
                                    Wc,
                                    { api: d, className: e, classNames: Hd },
                                    r().createElement(
                                        'div',
                                        { className: xd },
                                        l.recordsArray.map(([e, t]) =>
                                            r().createElement(
                                                'div',
                                                {
                                                    key: e,
                                                    className: Td,
                                                    style: { width: _.width * t + _.offset * (t - 1) + 'rem' },
                                                },
                                                r().createElement(Pd, { rank: e, seasonName: a.season.name.get() }),
                                            ),
                                        ),
                                    ),
                                    ia(t.computes.productsLength(), (e) =>
                                        r().createElement(
                                            'div',
                                            {
                                                key: e,
                                                className: f()(Id, l.groupIndexesSet.has(e) && Ld),
                                                onMouseEnter: o === e ? void 0 : Q.playHighlight,
                                                ref: o === e ? u : void 0,
                                            },
                                            r().createElement('div', { className: f()(Od, e === o && Md) }),
                                            r().createElement(bd, { index: e, className: $d }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    zd = 'ProductControls_control_a9',
                    Ud = 'ProductControls_label_26',
                    Vd = R.strings.comp7.controls,
                    Gd = { label: Ud },
                    qd = (0, J.Pi)(() => {
                        const e = B().mediaSize,
                            t = pc(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get(),
                            i = s.isVehiclesCompareEnabled,
                            u = s.vehicleCompareTooltipId,
                            o = a.computes.controlsConfig(),
                            l = o.hasAddToCompare,
                            c = o.hasPreview,
                            d = e >= D.Medium ? 'normal' : 'small';
                        return r().createElement(
                            r().Fragment,
                            null,
                            l &&
                                r().createElement(
                                    Rr,
                                    { args: { tooltipId: u }, isEnabled: !i },
                                    r().createElement(
                                        'div',
                                        { className: zd },
                                        r().createElement(
                                            Pl,
                                            {
                                                type: 'compare',
                                                disabled: !i,
                                                onClick: n.addToVehicleCompare,
                                                size: d,
                                                classNames: Gd,
                                            },
                                            Vd.compare(),
                                        ),
                                    ),
                                ),
                            c &&
                                r().createElement(
                                    Pl,
                                    { type: 'preview', onClick: n.goToPreview, size: d, className: zd, classNames: Gd },
                                    Vd.preview(),
                                ),
                        );
                    });
                const jd = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'keyframesNameConfig',
                    'forwardRef',
                    'onClick',
                ];
                function Qd() {
                    return (
                        (Qd =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Qd.apply(this, arguments)
                    );
                }
                const Yd = r().memo(function (e) {
                        let t = e.src,
                            a = e.className,
                            s = e.autoplay,
                            i = e.style,
                            u = e.loop,
                            o = void 0 !== u && u,
                            l = e.keyframesNameConfig,
                            c = e.forwardRef,
                            d = e.onClick,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, jd);
                        const _ = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                if (c && _.current) {
                                    const e = () => {
                                            let e = 0;
                                            const a = (function (e) {
                                                    let t = 0;
                                                    return [
                                                        function a() {
                                                            e(), (t = requestAnimationFrame(a));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(t);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (_.current) {
                                                        const a = _.current,
                                                            n = a.currentTime,
                                                            r = a.duration;
                                                        if (
                                                            (e !== n &&
                                                                (t.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: n, duration: r }),
                                                                ),
                                                                (e = n)),
                                                            _.current.paused)
                                                        )
                                                            return;
                                                        const s = _.current.cohGetKeyframeTimestamps();
                                                        s.forEach((e, a) => {
                                                            n > s[a] - 0.02 &&
                                                                n < s[a] &&
                                                                t.changeKeyframeHandlers.forEach((t) => {
                                                                    const n = Object.keys(null != l ? l : {})[a];
                                                                    return t({
                                                                        time: e,
                                                                        name: `${l ? n : `Point_${a}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                n = a[0],
                                                r = a[1];
                                            return n(), r;
                                        },
                                        t = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: e() },
                                        a = (e) => (
                                            t.changeTimeHandlers.push(e),
                                            () => {
                                                const a = t.changeTimeHandlers,
                                                    n = a.indexOf(e);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : a.splice(n, 1);
                                            }
                                        ),
                                        n = (e) => (
                                            t.changeKeyframeHandlers.push(e),
                                            () => {
                                                const a = t.changeKeyframeHandlers,
                                                    n = a.indexOf(e);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : a.splice(n, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = _.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = _.current) ? void 0 : e.currentTime;
                                        },
                                        i = (e) => {
                                            _.current && (_.current.currentTime = yt(0, _.current.duration, e));
                                        },
                                        u = () => {
                                            var e;
                                            return null == (e = _.current) ? void 0 : e.duration;
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = _.current) ? void 0 : e.play();
                                        },
                                        d = () => {
                                            var e;
                                            return null == (e = _.current) ? void 0 : e.pause();
                                        },
                                        m = () => {
                                            d(), i(0);
                                        },
                                        E = (e) => {
                                            i(e), o();
                                        },
                                        g = (e) => {
                                            i(e), d();
                                        },
                                        p = () => {
                                            (t.changeTimeHandlers = []),
                                                (t.changeKeyframeHandlers = []),
                                                null == t.changeTimeLoop || t.changeTimeLoop();
                                        },
                                        h = (e, t) => {
                                            var a;
                                            return (
                                                null == (a = _.current) || a.addEventListener(e, t),
                                                () => {
                                                    var a;
                                                    return null == (a = _.current)
                                                        ? void 0
                                                        : a.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        v = (e, t) => {
                                            var a;
                                            return (
                                                null == (a = _.current) || a.removeEventListener(e, t),
                                                () => {
                                                    var a;
                                                    return null == (a = _.current)
                                                        ? void 0
                                                        : a.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (c.current = {
                                            on: h,
                                            off: v,
                                            play: o,
                                            pause: d,
                                            stop: m,
                                            cleanup: p,
                                            getCurrentTime: s,
                                            getDuration: u,
                                            getCachedKeyframes: r,
                                            goToAndPlay: E,
                                            goToAndStop: g,
                                            setCurrentTime: i,
                                            domRef: _.current,
                                            onChangeTime: a,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            p(), (c.current = void 0);
                                        }
                                    );
                                }
                            }, [l, c]),
                            (0, n.useEffect)(() => {
                                if (_.current)
                                    return (
                                        s && _.current.play(),
                                        () => {
                                            _.current && _.current.pause();
                                        }
                                    );
                            }, []),
                            r().createElement(
                                'video',
                                Qd(
                                    {
                                        src: t,
                                        className: a,
                                        style: i,
                                        loop: o,
                                        ref: _,
                                        onClick: d,
                                        preload: 'auto',
                                        cohfastseek: 'true',
                                    },
                                    m,
                                ),
                            )
                        );
                    }),
                    Xd = 'RankDiscount_base_4c',
                    Kd = 'RankDiscount_godRays_31',
                    Zd = 'RankDiscount_rank_2c',
                    Jd = 'RankDiscount_disabledRankEmblem_e8',
                    em = 'RankDiscount_lock_73',
                    tm = 'RankDiscount_footer_30',
                    am = 'RankDiscount_rankAccessString_1d',
                    nm = 'RankDiscount_footer__maxRank_bf',
                    rm = 'RankDiscount_valueContainer_db',
                    sm = 'RankDiscount_discountBackground_df',
                    im = (0, J.Pi)(({ index: e }) => {
                        const t = pc().model,
                            a = t.root.get().maxAchievedRank,
                            n = t.computes.rankDiscount(e),
                            s = t.computes.selectedProduct(),
                            i = n.rank === a;
                        return n.rank === s.rank
                            ? r().createElement(
                                  'div',
                                  { className: f()(am) },
                                  r().createElement(tr, { text: R.strings.comp7.products.productAccess() }),
                              )
                            : n.value > 0
                              ? r().createElement(
                                    'div',
                                    { className: rm },
                                    i && r().createElement('div', { className: sm }),
                                    r().createElement(tr, {
                                        text: R.strings.comp7.products.discount(),
                                        binding: { discountPercentage: n.value },
                                    }),
                                )
                              : null;
                    }),
                    um = (0, J.Pi)(({ index: e, className: t }) => {
                        const a = pc().model,
                            n = q().model,
                            s = a.root.get(),
                            i = s.currentRank,
                            u = s.maxAchievedRank,
                            o = a.computes.rankDiscount(e),
                            l = o.rank === u,
                            c = !o.wasUnlocked;
                        return r().createElement(
                            'div',
                            { className: f()(Xd, t) },
                            o.rank === i &&
                                r().createElement(Yd, {
                                    className: Kd,
                                    src: String(R.videos.comp7.godRaysNew_130x130()),
                                    autoplay: !0,
                                    loop: !0,
                                }),
                            r().createElement(
                                Gn,
                                {
                                    rank: o.rank,
                                    from: o.from,
                                    to: o.to,
                                    divisions: o.divisions,
                                    className: Zd,
                                    ignoreShowDelay: !0,
                                },
                                r().createElement(Pa, {
                                    seasonName: n.season.name.get(),
                                    size: ka.x48,
                                    rank: o.rank,
                                    className: f()(c && Jd),
                                }),
                            ),
                            c && r().createElement('div', { className: em }),
                            r().createElement(
                                'div',
                                { className: f()(tm, l && nm) },
                                r().createElement(im, { index: e }),
                            ),
                        );
                    }),
                    om = 'SectionHeading_base_e5',
                    lm = 'SectionHeading_venzel_ab',
                    cm = 'SectionHeading_venzel__right_25',
                    dm = 'SectionHeading_icon_26',
                    mm = 'SectionHeading_line_23',
                    _m = 'SectionHeading_content_e9',
                    Em = ({ className: e, children: t }) => {
                        const a = n.Children.toArray(t).length;
                        return r().createElement(
                            'div',
                            { className: f()(om, e) },
                            0 === a &&
                                r().createElement(
                                    'div',
                                    { className: lm },
                                    r().createElement('div', { className: dm }),
                                    r().createElement('div', { className: mm }),
                                ),
                            a > 0 && r().createElement('div', { className: _m }, t),
                            r().createElement(
                                'div',
                                { className: f()(lm, cm) },
                                r().createElement('div', { className: dm }),
                                r().createElement('div', { className: mm }),
                            ),
                        );
                    },
                    gm = 'DiscountSection_base_53',
                    pm = 'DiscountSection_discounts_7f',
                    hm = 'DiscountSection_rankDiscount_d7',
                    vm = 'DiscountSection_discountDescription_92',
                    bm = (0, J.Pi)(({ className: e }) => {
                        const t = pc().model;
                        return r().createElement(
                            'div',
                            { className: f()(gm, e) },
                            r().createElement(Em, null, R.strings.comp7.products.discountSectionName()),
                            r().createElement(
                                'div',
                                { className: pm },
                                ia(t.computes.rankDiscountsLength(), (e) =>
                                    r().createElement(um, { key: e, index: e, className: hm }),
                                ),
                            ),
                            r().createElement(ir, {
                                text: R.strings.comp7.products.discountDescription(),
                                classMix: vm,
                            }),
                        );
                    }),
                    fm = 'InProgressSection_base_e1',
                    Cm = 'InProgressSection_content_3b',
                    Am = 'InProgressSection_background_cb',
                    Dm = 'InProgressSection_highlight_d1',
                    Fm = 'InProgressSection_state_9f',
                    wm = 'InProgressSection_inProgressString_ae',
                    Bm = 'InProgressSection_inProgressStringIcon_f4',
                    ym = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: f()(fm, e) },
                            r().createElement(Em, null),
                            r().createElement(
                                'div',
                                { className: Cm },
                                r().createElement('div', { className: Am }),
                                r().createElement('div', { className: Dm }),
                                r().createElement(
                                    'div',
                                    { className: Fm },
                                    r().createElement(
                                        'div',
                                        { className: wm },
                                        r().createElement('div', { className: Bm }),
                                        R.strings.comp7.products.inProgress(),
                                    ),
                                ),
                            ),
                            r().createElement(Em, null),
                        ),
                    Sm = ({ name: e, className: t }) =>
                        r().createElement('span', { className: t }, ma(R.strings.comp7.quotesWrapper(), { name: e })),
                    Nm = {
                        base: 'VehicleRole_base_04',
                        base__22x22: 'VehicleRole_base__22x22_d4',
                        iconContainer: 'VehicleRole_iconContainer_0e',
                        icon: 'VehicleRole_icon_61',
                    };
                let km;
                !(function (e) {
                    e.x22 = '22x22';
                })(km || (km = {}));
                const Rm = R.images.gui.maps.icons.roleExp.roles,
                    Pm = R.strings.menu.roleExp,
                    xm = (0, n.memo)(
                        ({
                            role: e,
                            size: t = km.x22,
                            roleIconFolderPath: a = Rm.$dyn(`c_${t}`),
                            className: n,
                            classNames: s,
                        }) => {
                            const i = _a(e);
                            return r().createElement(
                                'div',
                                { className: f()(Nm.base, Nm[`base__${t}`], n) },
                                r().createElement(
                                    'div',
                                    { className: f()(Nm.iconContainer, null == s ? void 0 : s.iconContainer) },
                                    r().createElement('div', {
                                        className: f()(Nm.icon, null == s ? void 0 : s.icon),
                                        style: { backgroundImage: `url(${null == a ? void 0 : a.$dyn(i)})` },
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: f()(Nm.label, null == s ? void 0 : s.label) },
                                    r().createElement(tr, {
                                        text: `${Pm.roleName.$dyn(i)}`,
                                        binding: { groupName: Pm.roleGroupName.$dyn(i) },
                                    }),
                                ),
                            );
                        },
                    ),
                    Tm = 'NationFlag_base_f2',
                    Im = 'NationFlag_nationFlag_3e',
                    Lm = R.images.gui.maps.icons.eventBoards.flagsOverlay,
                    Om = ({ nation: e, className: t }) =>
                        r().createElement(
                            'div',
                            { className: f()(Tm, t) },
                            r().createElement('div', {
                                className: Im,
                                style: { backgroundImage: `url(${Lm.$dyn(e)})` },
                            }),
                            r().createElement('div', {
                                className: Im,
                                style: { backgroundImage: `url(${Lm.$dyn(e)})` },
                            }),
                        ),
                    Mm = 'NameSection_base_7c',
                    $m = 'NameSection_nationFlag_cc',
                    Hm = 'NameSection_vehicleNameContainer_98',
                    Wm = 'NameSection_productName_c6',
                    zm = 'NameSection_style3dSubtitle_33',
                    Um = 'NameSection_style3dSubtitleVehicleText_6a',
                    Vm = 'NameSection_vehicleRole_ea',
                    Gm = 'NameSection_vehicleRoleLabel_9a',
                    qm = 'NameSection_vehicleDescription_80',
                    jm = (e) => (e >= D.Medium ? jc.x64 : jc.x48),
                    Qm = R.strings.comp7.products,
                    Ym = { label: Gm },
                    Xm = (0, J.Pi)(({ className: e }) => {
                        const t = pc().model,
                            a = B().mediaSize,
                            n = t.computes.selectedProduct();
                        switch (n.type) {
                            case Kr.Vehicle: {
                                const s = n.vehicleInfo,
                                    i = s.tier,
                                    u = s.name,
                                    o = s.type,
                                    l = s.isPremium,
                                    c = s.roleKey,
                                    d = s.nation,
                                    m = s.vehicleCD;
                                return r().createElement(
                                    'div',
                                    { className: f()(Mm, e) },
                                    r().createElement(Om, { nation: d, className: $m }),
                                    r().createElement(
                                        'div',
                                        { className: Hm },
                                        r().createElement(
                                            Rr,
                                            { args: { vehicleCD: n.id, tooltipId: 'shopVehicle' } },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(Xc, {
                                                    tier: i,
                                                    name: u,
                                                    type: o,
                                                    isPremium: l,
                                                    size: jm(a),
                                                    className: Wm,
                                                }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        Ge,
                                        {
                                            contentId:
                                                R.views.lobby.ranked.tooltips.RankedBattlesRolesTooltipView('resId'),
                                            args: { vehicleCD: m },
                                        },
                                        r().createElement(
                                            'div',
                                            null,
                                            r().createElement(xm, { role: c, className: Vm, classNames: Ym }),
                                        ),
                                    ),
                                    t.computes.hasVehicleDescription() &&
                                        r().createElement(tr, { text: n.description, classMix: qm }),
                                );
                            }
                            case Kr.Style3d: {
                                const t = n.vehicleInfo,
                                    a = t.tier,
                                    s = t.name,
                                    i = t.type,
                                    u = t.isPremium;
                                return r().createElement(
                                    'div',
                                    { className: f()(Mm, e) },
                                    r().createElement(tr, {
                                        text: Qm.style3d(),
                                        binding: { name: r().createElement(Sm, { name: n.name }) },
                                        classMix: Wm,
                                    }),
                                    r().createElement(tr, {
                                        text: R.strings.comp7.forVehicle(),
                                        binding: {
                                            vehicleName: r().createElement(Xc, {
                                                name: s,
                                                tier: a,
                                                type: i,
                                                isPremium: u,
                                                className: Um,
                                            }),
                                        },
                                        classMix: zm,
                                    }),
                                );
                            }
                            case Kr.Reward:
                                return r().createElement(
                                    'div',
                                    { className: f()(Mm, e) },
                                    r().createElement('div', { className: Wm }, n.reward.label),
                                );
                            default:
                                return console.error(`Provide NameSection case for ProductTypes:${n.type}`), null;
                        }
                    }),
                    Km = {
                        base: 'PriceSection_base_0e',
                        container: 'PriceSection_container_d3',
                        priceContainer: 'PriceSection_priceContainer_eb',
                        price: 'PriceSection_price_07',
                        limitString: 'PriceSection_limitString_58',
                        count: 'PriceSection_count_7e',
                        separator: 'PriceSection_separator_2f',
                        accessContainer: 'PriceSection_accessContainer_d6',
                        rankBackground: 'PriceSection_rankBackground_aa',
                        accessBlock: 'PriceSection_accessBlock_ff',
                        lock: 'PriceSection_lock_1b',
                        accessString: 'PriceSection_accessString_5b',
                        rankString: 'PriceSection_rankString_2a',
                        currencyValue: 'PriceSection_currencyValue_1c',
                        discount: 'PriceSection_discount_9a',
                        discount__freeXP: 'PriceSection_discount__freeXP_53',
                        discount__credits: 'PriceSection_discount__credits_25',
                        discount__gold: 'PriceSection_discount__gold_60',
                        discount__xp: 'PriceSection_discount__xp_4a',
                        discount__crystal: 'PriceSection_discount__crystal_73',
                        discount__equipCoin: 'PriceSection_discount__equipCoin_c7',
                        discountLine: 'PriceSection_discountLine_2e',
                        buttonContainer: 'PriceSection_buttonContainer_31',
                        button: 'PriceSection_button_33',
                    },
                    Zm = R.strings.comp7.products,
                    Jm = (0, J.Pi)(() => {
                        const e = pc(),
                            t = e.model,
                            a = e.controls,
                            n = t.computes.selectedProductIndex(),
                            s = t.computes.selectedProduct(),
                            i = t.computes.priceConfig(n).isEnough,
                            u = () => {
                                j('comp_7_shop_purchase_preview'), a.purchase();
                            };
                        switch (s.state) {
                            case Zr.Locked:
                                return r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: Km.separator }),
                                    r().createElement(
                                        'div',
                                        { className: Km.accessContainer },
                                        r().createElement('div', {
                                            className: Km.rankBackground,
                                            style: {
                                                backgroundImage: `url(${Ta(R.images.gui.maps.icons.comp7.products.accessBackgrounds, s.rank)})`,
                                            },
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: Km.accessBlock },
                                            r().createElement('div', { className: Km.lock }),
                                            r().createElement(tr, {
                                                text: R.strings.comp7.products.message.rankAccess(),
                                                binding: {
                                                    rank: r().createElement(
                                                        'span',
                                                        { className: Km.rankString },
                                                        La(s.rank),
                                                    ),
                                                },
                                                classMix: Km.accessString,
                                            }),
                                        ),
                                    ),
                                );
                            case Zr.ReadyToPurchase:
                                return r().createElement(
                                    Ye,
                                    { isEnabled: !i, body: Zm.message.notEnough() },
                                    r().createElement(
                                        'div',
                                        { className: Km.buttonContainer },
                                        r().createElement(
                                            mt,
                                            { type: 'main', onClick: u, mixClass: Km.button, disabled: !i },
                                            Zm.actions.buy(),
                                        ),
                                    ),
                                );
                            default:
                                return (
                                    console.error(
                                        `ActionsContainer in PriceSection was called for unappropriated state ${s.state}`,
                                    ),
                                    null
                                );
                        }
                    }),
                    e_ = { value: Km.currencyValue },
                    t_ = (0, J.Pi)(({ className: e }) => {
                        const t = pc().model,
                            a = t.computes.selectedProduct(),
                            n = t.computes.selectedProductIndex(),
                            s = t.computes.priceConfig(n),
                            i = s.hasDiscount,
                            u = s.isEnough;
                        return r().createElement(
                            'div',
                            { className: f()(Km.base, e) },
                            r().createElement(Em, null, R.strings.comp7.products.priceSectionName()),
                            r().createElement(
                                'div',
                                { className: Km.container },
                                r().createElement(
                                    'div',
                                    { className: Km.priceContainer },
                                    r().createElement(
                                        'div',
                                        { className: Km.price },
                                        i &&
                                            r().createElement(
                                                'div',
                                                { className: f()(Km.discount, Km[`discount__${a.price.name}`]) },
                                                r().createElement(Ot, { value: a.price.value }),
                                                r().createElement('div', { className: Km.discountLine }),
                                            ),
                                        r().createElement(od, {
                                            size: sd.large,
                                            type: a.price.name,
                                            value: i ? a.price.discountValue : a.price.value,
                                            isEnough: u,
                                            classNames: e_,
                                        }),
                                    ),
                                    t.computes.hasLimitedQuantity() &&
                                        r().createElement(
                                            'div',
                                            { className: Km.limitString },
                                            r().createElement(tr, {
                                                text: R.strings.comp7.products.limitedQuantitySeason(),
                                                binding: {
                                                    count: r().createElement(
                                                        'span',
                                                        { className: Km.count },
                                                        a.limitedQuantity,
                                                    ),
                                                },
                                            }),
                                        ),
                                ),
                                r().createElement(Jm, null),
                            ),
                        );
                    }),
                    a_ = 'PurchasedSection_base_4c',
                    n_ = 'PurchasedSection_content_10',
                    r_ = 'PurchasedSection_state_ae',
                    s_ = 'PurchasedSection_purchasedString_40',
                    i_ = 'PurchasedSection_purchasedStringIcon_00',
                    u_ = 'PurchasedSection_quantityOfferString_eb',
                    o_ = 'PurchasedSection_background_34',
                    l_ = 'PurchasedSection_highlight_37',
                    c_ = 'PurchasedSection_buttonContainer_f7',
                    d_ = 'PurchasedSection_button_fd',
                    m_ = R.strings.comp7.products,
                    __ = (0, J.Pi)(() => {
                        const e = pc(),
                            t = e.model,
                            a = e.controls,
                            n = t.computes.selectedProduct();
                        switch (n.type) {
                            case Kr.Vehicle:
                                return n.canGoToHangar
                                    ? r().createElement(
                                          'div',
                                          { className: c_ },
                                          r().createElement(
                                              mt,
                                              { onClick: a.goToHangar, mixClass: d_ },
                                              m_.actions.toHangar(),
                                          ),
                                      )
                                    : null;
                            case Kr.Style3d: {
                                const e = !n.canGoToCustomization;
                                return r().createElement(
                                    Ye,
                                    {
                                        isEnabled: e,
                                        header: m_.customizationUnavailable.title(),
                                        body: m_.customizationUnavailable.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        { className: c_ },
                                        r().createElement(
                                            mt,
                                            { onClick: a.goToCustomization, mixClass: d_, disabled: e },
                                            m_.actions.toCustomization(),
                                        ),
                                    ),
                                );
                            }
                            default:
                                return null;
                        }
                    }),
                    E_ = R.strings.comp7.products,
                    g_ = (0, J.Pi)(({ className: e }) => {
                        const t = pc().model.computes.selectedProduct();
                        return r().createElement(
                            'div',
                            { className: f()(a_, e) },
                            r().createElement(Em, null),
                            r().createElement(
                                'div',
                                { className: n_ },
                                r().createElement('div', { className: o_ }),
                                r().createElement('div', { className: l_ }),
                                r().createElement(
                                    'div',
                                    { className: r_ },
                                    r().createElement(
                                        'div',
                                        { className: s_ },
                                        r().createElement('div', { className: i_ }),
                                        R.strings.comp7.products.purchased(),
                                    ),
                                    t.type === Kr.Reward &&
                                        r().createElement(
                                            'div',
                                            { className: u_ },
                                            ma(E_.limitedQuantitySeason(), { count: t.limitedQuantity }),
                                        ),
                                ),
                            ),
                            r().createElement(Em, null),
                            r().createElement(__, null),
                        );
                    }),
                    p_ = 'ReadyToRestoreSection_base_47',
                    h_ = 'ReadyToRestoreSection_content_1e',
                    v_ = 'ReadyToRestoreSection_description_91',
                    b_ = 'ReadyToRestoreSection_buttonContainer_81',
                    f_ = 'ReadyToRestoreSection_button_82',
                    C_ = (0, J.Pi)(({ className: e }) => {
                        const t = pc().controls;
                        return r().createElement(
                            'div',
                            { className: f()(p_, e) },
                            r().createElement(Em, null),
                            r().createElement(
                                'div',
                                { className: h_ },
                                r().createElement(
                                    'div',
                                    { className: v_ },
                                    r().createElement(tr, {
                                        text: R.strings.comp7.products.readyToRestoreDescription(),
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: b_ },
                                    r().createElement(
                                        mt,
                                        {
                                            type: 'primary',
                                            onClick: () => {
                                                j('comp_7_shop_purchase_preview'), t.restore();
                                            },
                                            mixClass: f_,
                                        },
                                        R.strings.comp7.products.actions.restore(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    A_ = 'ProductDetails_base_21',
                    D_ = 'ProductDetails_section_4c',
                    F_ = [Zr.Locked, Zr.ReadyToPurchase],
                    w_ = (0, J.Pi)(({ className: e }) => {
                        const t = pc().model.computes.selectedProduct();
                        return r().createElement(
                            'div',
                            { className: f()(A_, e) },
                            r().createElement(Xm, { className: D_ }),
                            F_.includes(t.state) && r().createElement(bm, { className: D_ }),
                            (() => {
                                switch (t.state) {
                                    case Zr.Purchased:
                                        return r().createElement(g_, { className: D_ });
                                    case Zr.InProgress:
                                        return r().createElement(ym, { className: D_ });
                                    case Zr.ReadyToRestore:
                                        return r().createElement(C_, { className: D_ });
                                    default:
                                        return r().createElement(t_, { className: D_ });
                                }
                            })(),
                        );
                    }),
                    B_ = { from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 300 } },
                    y_ = {
                        from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' },
                        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
                        config: { duration: 100 },
                    },
                    S_ = (e) => (e >= D.Large ? Vo.S600x450 : e >= D.Small ? Vo.S400x300 : Vo.S296x222),
                    N_ = (0, J.Pi)(() => {
                        const e = pc().model,
                            t = B().mediaSize,
                            a = (0, Pe.useSpring)(ut),
                            s = e.computes.selectedProduct(),
                            i = e.computes.controlsConfig().hasControls,
                            u = (0, Pe.useSpring)(() => B_),
                            o = u[0],
                            l = u[1],
                            c = (0, Pe.useSpring)(() => y_),
                            d = c[0],
                            m = c[1];
                        return (
                            (0, n.useLayoutEffect)(() => {
                                m.set(y_.from), l.set(B_.from);
                            }, [m, l, s.id, s.state]),
                            (0, n.useEffect)(() => {
                                m.start(Object.assign({}, y_, { delay: 300 })),
                                    l.start(Object.assign({}, B_, { delay: 100 }));
                            }, [m, l, s.id, s.state]),
                            r().createElement(
                                r().Fragment,
                                null,
                                s.type === Kr.Reward &&
                                    r().createElement(
                                        'div',
                                        { className: Tc },
                                        r().createElement('div', { className: Ic }),
                                        r().createElement(
                                            Pe.animated.div,
                                            { style: o },
                                            r().createElement(il, hl({ reward: s.reward, size: S_(t) })),
                                        ),
                                    ),
                                i &&
                                    r().createElement(
                                        Pe.animated.div,
                                        { style: d, className: Lc },
                                        r().createElement(qd, { key: s.id }),
                                    ),
                                r().createElement(
                                    Pe.animated.div,
                                    { style: o, className: Oc },
                                    r().createElement(w_, { className: Mc }),
                                ),
                                r().createElement(
                                    Pe.animated.div,
                                    { style: a },
                                    r().createElement(Wd, { className: $c }),
                                ),
                            )
                        );
                    }),
                    k_ = R.strings.comp7.page.heading,
                    R_ = { activeSeasonState: Pc },
                    P_ = { [dc.Initial]: () => r().createElement('div', null), [dc.Success]: N_, [dc.Error]: yc },
                    x_ = (0, J.Pi)(() => {
                        const e = (0, Pe.useSpring)(ut),
                            t = pc(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get().shopState,
                            i = a.computes.hasSceneWrapper(),
                            u = P_[s];
                        return u
                            ? r().createElement(
                                  'div',
                                  { className: Sc },
                                  i &&
                                      r().createElement(
                                          'div',
                                          { className: Nc },
                                          r().createElement(fc, {
                                              moveSpace: n.moveSpace,
                                              onMouseOver3dScene: n.mouseOver3dScene,
                                          }),
                                      ),
                                  s !== dc.Error && r().createElement('div', { className: kc }),
                                  r().createElement(
                                      'div',
                                      { className: Rc },
                                      r().createElement(it, { className: re }, k_.shop()),
                                      r().createElement(Wr, { classNames: R_ }),
                                  ),
                                  r().createElement(
                                      Pe.animated.div,
                                      { className: xc, style: e },
                                      r().createElement(u, null),
                                  ),
                              )
                            : (console.error('Unreachable code: ShopPage.tsx'), null);
                    });
                let T_, I_;
                !(function (e) {
                    (e.LockedByNoXVehicles = 'lockedByNoXVehicles'),
                        (e.LockedByInactiveSeason = 'lockedByInactiveSeason'),
                        (e.LockedByPreviousQuest = 'lockedByPreviousQuest'),
                        (e.Active = 'active'),
                        (e.Completed = 'completed');
                })(T_ || (T_ = {})),
                    (function (e) {
                        (e.NotStarted = 'notStarted'),
                            (e.Active = 'active'),
                            (e.LastWeek = 'lastWeek'),
                            (e.Finished = 'finished');
                    })(I_ || (I_ = {}));
                const L_ = [T_.LockedByNoXVehicles, T_.LockedByInactiveSeason, T_.LockedByPreviousQuest],
                    O_ = U()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    questCards: e.array('questCards'),
                                    progressPoints: e.array('progressPoints'),
                                },
                                a = (0, me.Om)(
                                    (e) => {
                                        const a = pe(t.questCards.get(), e);
                                        if (!a) throw new Error(`Unexpected card index: ${e}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: M },
                                ),
                                n = (0, me.Om)(
                                    (e, t) => {
                                        const n = a(e).rewards;
                                        return vl({ rewards: n, size: t });
                                    },
                                    { equals: M },
                                ),
                                r = (0, me.Om)(() =>
                                    (function (e, t) {
                                        if (Array.isArray(e)) return e.every(t);
                                        for (let a = 0; a < e.length; a++) if (!t(he(e, a), a, e)) return !1;
                                        return !0;
                                    })(t.questCards.get(), (e) => e.state === T_.Completed),
                                ),
                                s = (0, me.Om)(() => t.root.get().seasonState === I_.LastWeek && r()),
                                i = (0, me.Om)((e) => L_.includes(a(e).state));
                            return Object.assign({}, t, {
                                computes: {
                                    questCardsLength: (0, me.Om)(() => t.questCards.get().length),
                                    questCard: a,
                                    questRewards: n,
                                    isQuestLocked: i,
                                    isQuestsCompletedOnLastWeek: s,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            animationStart: e.createCallbackNoArgs('onAnimationStart'),
                            animationEnd: e.createCallbackNoArgs('onAnimationEnd'),
                        }),
                    ),
                    M_ = O_[0],
                    $_ = O_[1],
                    H_ = 'Progress_base_d5',
                    W_ = 'Progress_counter_3b',
                    z_ = 'Progress_current_fd',
                    U_ = 'Progress_progressBar_d2',
                    V_ = R.strings.comp7.weeklyQuests.card.progress,
                    G_ = ({ current: e, total: t, isDisabled: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: f()(H_, n) },
                            r().createElement(tr, {
                                classMix: W_,
                                text: V_.counter(),
                                binding: {
                                    current: r().createElement(
                                        'div',
                                        { className: z_ },
                                        r().createElement(Ot, { value: e }),
                                    ),
                                    total: r().createElement(Ot, { value: t }),
                                },
                            }),
                            r().createElement(
                                'div',
                                { className: U_ },
                                r().createElement(Zi, { size: vi.Small, value: e, maxValue: t, disabled: a }),
                            ),
                        ),
                    q_ = {
                        base: 'QuestCard_base_27',
                        highlight: 'QuestCard_highlight_08',
                        icon: 'QuestCard_icon_81',
                        base__completed: 'QuestCard_base__completed_e3',
                        base__locked: 'QuestCard_base__locked_e9',
                        content: 'QuestCard_content_36',
                        progress: 'QuestCard_progress_63',
                        description: 'QuestCard_description_ba',
                        reward: 'QuestCard_reward_d5',
                        status: 'QuestCard_status_26',
                    },
                    j_ = {
                        base: 'Status_base_78',
                        base__locked: 'Status_base__locked_1f',
                        icon: 'Status_icon_9c',
                        base__completed: 'Status_base__completed_66',
                        text: 'Status_text_b3',
                    },
                    Q_ = R.strings.comp7.weeklyQuests.card,
                    Y_ = (0, J.Pi)(({ index: e, className: t }) => {
                        const a = $_().model,
                            n = a.computes.questCard(e).state,
                            s = a.computes.isQuestLocked(e);
                        return r().createElement(
                            Ye,
                            {
                                isEnabled: s,
                                header: Q_.statusLockedTooltip.header(),
                                body: String(Q_.statusLockedTooltip.body.$dyn(n)),
                            },
                            r().createElement(
                                'div',
                                { className: f()(j_.base, s ? j_.base__locked : j_[`base__${n}`], t) },
                                r().createElement('div', { className: j_.icon }),
                                r().createElement(
                                    'div',
                                    { className: j_.text },
                                    s ? Q_.status.locked() : Q_.status.$dyn(n),
                                ),
                            ),
                        );
                    }),
                    X_ = (0, J.Pi)(({ index: e }) => {
                        const t = $_().model,
                            a = t.computes.questCard(e),
                            n = a.state,
                            s = a.currentProgress,
                            i = a.totalProgress,
                            u = a.description,
                            o = a.iconKey,
                            l = B().mediaSize > D.Large ? Vo.Big : Vo.Small;
                        return r().createElement(
                            'div',
                            { className: f()(q_.base, q_[`base__${n}`]) },
                            n === T_.Active && r().createElement('div', { className: q_.highlight }),
                            r().createElement('div', {
                                className: q_.icon,
                                style: { backgroundImage: `url(R.images.gui.maps.icons.comp7.weekly_quests.${o})` },
                            }),
                            r().createElement(
                                'div',
                                { className: q_.content },
                                r().createElement(G_, {
                                    current: s,
                                    total: i,
                                    isDisabled: n !== T_.Active,
                                    className: q_.progress,
                                }),
                                r().createElement('div', { className: q_.description }, u),
                                r().createElement(ml, {
                                    data: t.computes.questRewards(e, l),
                                    size: l,
                                    rewardItemClassMix: q_.reward,
                                }),
                            ),
                            r().createElement(Y_, { index: e, className: q_.status }),
                        );
                    }),
                    K_ = 'QuestsList_base_a9',
                    Z_ = 'QuestsList_card_f7',
                    J_ = {
                        base: 'Separator_base_f3',
                        line: 'Separator_line_03',
                        line__top: 'Separator_line__top_ba',
                        line__bottom: 'Separator_line__bottom_95',
                        arrowContainer: 'Separator_arrowContainer_f9',
                        arrow: 'Separator_arrow_3d',
                        base__highlighted: 'Separator_base__highlighted_6a',
                    };
                let eE;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Highlighted = 'highlighted');
                })(eE || (eE = {}));
                const tE = (0, n.memo)(function ({ arrowType: e }) {
                        return e
                            ? r().createElement(
                                  'div',
                                  { className: f()(J_.base, J_[`base__${e}`]) },
                                  r().createElement('div', { className: f()(J_.line, J_.line__top) }),
                                  r().createElement(
                                      'div',
                                      { className: J_.arrowContainer },
                                      r().createElement('div', { className: J_.arrow }),
                                  ),
                                  r().createElement('div', { className: f()(J_.line, J_.line__bottom) }),
                              )
                            : r().createElement('div', { className: J_.line });
                    }),
                    aE = (0, J.Pi)(({ className: e }) => {
                        const t = $_().model.computes;
                        return r().createElement(
                            'div',
                            { className: f()(K_, e) },
                            r().createElement(tE, null),
                            ia(t.questCardsLength(), (e) =>
                                r().createElement(
                                    n.Fragment,
                                    { key: e },
                                    e > 0 &&
                                        r().createElement(tE, {
                                            arrowType: t.isQuestLocked(e) ? eE.Normal : eE.Highlighted,
                                        }),
                                    r().createElement('div', { className: Z_ }, r().createElement(X_, { index: e })),
                                ),
                            ),
                            r().createElement(tE, null),
                        );
                    });
                let nE, rE;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(nE || (nE = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(rE || (rE = {}));
                const sE = () => {},
                    iE = (e = 0, t, a = 0, r = sE) => {
                        const s = (0, n.useState)(e),
                            i = s[0],
                            u = s[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    u(e);
                                    const n = Date.now(),
                                        s = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== a && t <= a ? (u(a), r && r(), clearInterval(s)) : u(t);
                                            },
                                            1e3 * (t || (e > 120 ? mr : 1)),
                                        );
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [e, t, a, r]),
                            i
                        );
                    };
                te.Sw.instance;
                let uE;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(uE || (uE = {}));
                te.Sw.instance;
                const oE = iE,
                    lE = 'Countdown_base_fe',
                    cE = 'Countdown_icon_8b',
                    dE = 'Countdown_description_8d',
                    mE = (e) => e.toString().padStart(2, '0'),
                    _E = (e, t) => {
                        switch (t) {
                            case rE.Description:
                                return ((e, t = !0) =>
                                    e.days > 7 && t
                                        ? da(R.strings.common.duration.days(), { days: e.days })
                                        : e.days >= 1
                                          ? 0 === e.hours
                                              ? da(R.strings.common.duration.days(), { days: e.days })
                                              : `${da(R.strings.common.duration.days(), { days: e.days })} ${da(R.strings.common.duration.hours(), { hours: e.hours })}`
                                          : e.hours >= 1
                                            ? 0 === e.minutes
                                                ? da(R.strings.common.duration.hours(), { hours: e.hours })
                                                : `${da(R.strings.common.duration.hours(), { hours: e.hours })} ${da(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                            : da(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(e);
                            case rE.Short:
                                return `${mE(e.minutes)}:${mE(e.seconds)}`;
                            case rE.Long:
                                return `${mE(e.hours)}:${mE(e.minutes)}:${mE(e.seconds)}`;
                            case rE.Extended:
                                return `${da(R.strings.common.duration.days(), { days: e.days })} | ${mE(e.hours)}:${mE(e.minutes)}:${mE(e.seconds)}`;
                        }
                    },
                    EE = R.images.gui.maps.icons.components.countdown,
                    gE = (e, t) => {
                        const a = 2 === t ? EE.big : EE;
                        switch (e) {
                            case nE.Timer:
                                return a.clock();
                            case nE.Countdown:
                                return a.hourglass();
                            case nE.Cooldown:
                                return a.lock();
                        }
                    },
                    pE = (0, n.memo)(
                        ({
                            duration: e,
                            icon: t = nE.Timer,
                            style: a = rE.Description,
                            onTimeReached: s,
                            className: u = '',
                            classNames: o = {},
                        }) => {
                            const l = a !== rE.Description ? 1 : void 0,
                                c = oE(e, l),
                                d = (() => {
                                    const e = (0, n.useState)(i.O.view.getScale()),
                                        t = e[0],
                                        a = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                a(i.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        t
                                    );
                                })();
                            s && s[c] && s[c]();
                            const m = _E(
                                (function (e = 0) {
                                    let t = e;
                                    const a = Math.trunc(t / Er);
                                    t -= a * Er;
                                    const n = Math.trunc(t / _r);
                                    t -= n * _r;
                                    const r = Math.trunc(t / mr);
                                    return (t -= r * mr), { days: a, hours: n, minutes: r, seconds: t };
                                })(c),
                                a,
                            );
                            return r().createElement(
                                'div',
                                { className: f()(lE, u) },
                                t !== nE.None &&
                                    r().createElement('div', {
                                        className: f()(cE, o.icon),
                                        style: { backgroundImage: `url('${gE(t, d)}')` },
                                    }),
                                r().createElement('div', { className: f()(dE, o.text) }, m),
                            );
                        },
                    ),
                    hE = 'ResetStatus_base_25',
                    vE = 'ResetStatus_text_83',
                    bE = 'ResetStatus_timer_0b',
                    fE = 'ResetStatus_icon_9c',
                    CE = R.strings.comp7.weeklyQuests.resetStatus,
                    AE = { text: bE, icon: fE },
                    DE = (0, J.Pi)(({ className: e }) => {
                        const t = $_().model,
                            a = t.root.get(),
                            n = a.seasonState,
                            s = a.resetTimeLeft;
                        return n === I_.Finished || t.computes.isQuestsCompletedOnLastWeek()
                            ? r().createElement('div', { className: hE }, r().createElement(tr, { text: CE.ended() }))
                            : n === I_.LastWeek
                              ? r().createElement(
                                    'div',
                                    { className: hE },
                                    r().createElement(tr, { text: CE.lastWeek() }),
                                )
                              : r().createElement(
                                    'div',
                                    { className: f()(hE, e) },
                                    r().createElement(tr, {
                                        text: CE.timer(),
                                        binding: { countdown: r().createElement(pE, { duration: s, classNames: AE }) },
                                        classMix: vE,
                                    }),
                                );
                    }),
                    FE = 'TokenPoint_base_fb',
                    wE = 'TokenPoint_tokenValue_b8',
                    BE = 'TokenPoint_tokenValue__hide_6e',
                    yE = 'TokenPoint_tokenIcon_0d',
                    SE = 'TokenPoint_serif_c1',
                    NE = 'TokenPoint_rewards_46',
                    kE = 'TokenPoint_rewards__passed_97',
                    RE = 'TokenPoint_reward_85',
                    PE = Vo.Small,
                    xE = R.strings.tooltips.awardItem.comp7TokenWeeklyReward,
                    TE = (0, J.Pi)(({ tokenValue: e, rewards: t }) => {
                        const a = $_().model.root.get().currentTokenValue;
                        return r().createElement(
                            'div',
                            { className: FE },
                            r().createElement(
                                Ye,
                                { header: xE.header(), body: xE.body(), isEnabled: a !== e },
                                r().createElement(
                                    'div',
                                    { className: f()(wE, a === e && BE) },
                                    e,
                                    r().createElement('div', { className: yE }),
                                ),
                            ),
                            r().createElement('div', { className: SE }),
                            t &&
                                r().createElement(ml, {
                                    data: vl({ rewards: t, size: PE }),
                                    size: PE,
                                    classMix: f()(NE, a >= e && kE),
                                    rewardItemClassMix: RE,
                                }),
                        );
                    }),
                    IE = 'TokenProgress_base_d7',
                    LE = 'TokenProgress_content_8d',
                    OE = 'TokenProgress_progress_7f',
                    ME = 'TokenProgress_progressBar_56',
                    $E = 'TokenProgress_points_75',
                    HE = 'TokenProgress_point_55',
                    WE = 'TokenProgress_currentTokenValue_44',
                    zE = 'TokenProgress_tokenIcon_5e',
                    UE = 'TokenProgress_finalRewards_7d',
                    VE = 'TokenProgress_finalRewards__passed_ac',
                    GE = 'TokenProgress_description_b8',
                    qE = 'TokenProgress_description__done_75',
                    jE = 'TokenProgress_iconDone_8f',
                    QE = (e, t) => ({ left: `${Math.round((100 / e) * t)}%` }),
                    YE = Vo.Big,
                    XE = R.strings.comp7.weeklyQuests.tokenProgress.description,
                    KE = R.strings.tooltips.awardItem.comp7TokenWeeklyReward,
                    ZE = (0, J.Pi)(({ className: e }) => {
                        var t;
                        const a = $_(),
                            s = a.model,
                            i = a.controls,
                            u = s.root.get(),
                            o = u.previousTokenValue,
                            l = u.currentTokenValue,
                            c = s.progressPoints.get(),
                            d = pe(c, c.length - 1),
                            m = null != (t = null == d ? void 0 : d.count) ? t : 0,
                            _ = l === m,
                            E = (0, n.useRef)(Bi.Idle),
                            g = (0, Pe.useSpring)({ from: QE(m, o), to: QE(m, l) });
                        return r().createElement(
                            'div',
                            { className: f()(IE, e) },
                            r().createElement(
                                'div',
                                { className: LE },
                                r().createElement(
                                    'div',
                                    { className: OE },
                                    r().createElement(
                                        'div',
                                        { className: ME },
                                        r().createElement(Zi, {
                                            value: l,
                                            maxValue: m,
                                            deltaFrom: o,
                                            onChangeAnimationState: (e) => {
                                                (E.current = e), e === Bi.Shrink && i.animationStart();
                                            },
                                            onEndAnimation: i.animationEnd,
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: $E },
                                        r().createElement(
                                            'div',
                                            { className: HE },
                                            r().createElement(TE, { tokenValue: 0 }),
                                        ),
                                        be(c, (e, t) =>
                                            r().createElement(
                                                'div',
                                                { key: t, className: HE, style: QE(m, e.count) },
                                                r().createElement(TE, {
                                                    tokenValue: e.count,
                                                    rewards: t === c.length - 1 ? void 0 : e.rewards,
                                                }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        Ye,
                                        { header: KE.header(), body: KE.body() },
                                        r().createElement(
                                            Pe.animated.div,
                                            { className: WE, style: g },
                                            l,
                                            r().createElement('div', { className: zE }),
                                        ),
                                    ),
                                ),
                                d &&
                                    r().createElement(ml, {
                                        data: vl({ rewards: d.rewards, size: YE }),
                                        size: YE,
                                        classMix: f()(UE, l >= m && VE),
                                    }),
                            ),
                            r().createElement(
                                'div',
                                { className: f()(GE, _ && qE) },
                                _
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement('div', { className: jE }),
                                          XE.done(),
                                      )
                                    : XE.normal(),
                            ),
                        );
                    }),
                    JE = 'WeeklyQuestsPage_base_6c',
                    eg = 'WeeklyQuestsPage_content_cc',
                    tg = 'WeeklyQuestsPage_questsList_78',
                    ag = 'WeeklyQuestsPage_progression_25',
                    ng = 'WeeklyQuestsPage_resetStatus_8a',
                    rg = () => {
                        const e = (0, Pe.useSpring)(ut);
                        return r().createElement(
                            'div',
                            { className: JE },
                            r().createElement(it, { className: re }, R.strings.comp7.page.heading.weeklyQuests()),
                            r().createElement(Wr, null),
                            r().createElement(DE, { className: ng }),
                            r().createElement(
                                Pe.animated.div,
                                { className: eg, style: e },
                                r().createElement(aE, { className: tg }),
                                r().createElement(ZE, { className: ag }),
                            ),
                        );
                    };
                let sg, ig, ug, og;
                !(function (e) {
                    (e.Guaranteed = 'guaranteed'),
                        (e.Possible = 'possible'),
                        (e.NotAvailable = 'notAvailable'),
                        (e.Claimed = 'claimed');
                })(sg || (sg = {})),
                    (function (e) {
                        (e.Achieved = 'achieved'), (e.Possible = 'possible'), (e.NotAchieved = 'notAchieved');
                    })(ig || (ig = {})),
                    (function (e) {
                        (e.Achieved = 'achieved'), (e.Possible = 'possible'), (e.NotAchieved = 'notAchieved');
                    })(ug || (ug = {})),
                    (function (e) {
                        (e.First = 'first'), (e.Second = 'second'), (e.Third = 'third');
                    })(og || (og = {}));
                const lg = ['styleProgress'],
                    cg = ['vehicles', 'premiumTank'],
                    dg = [...lg, ...cg],
                    mg = U()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), cards: e.array('cards'), ranks: e.array('ranks') },
                                a = (0, me.Om)(
                                    (e) => {
                                        const a = pe(t.cards.get(), e);
                                        if (!a) throw new Error(`card with index ${e} was not found`);
                                        return { rewardsState: a.rewardsState };
                                    },
                                    { equals: _t },
                                ),
                                n = (0, me.Om)(
                                    (e) => {
                                        const a = pe(t.cards.get(), e);
                                        if (!a) throw new Error(`rewards: card with index ${e} was not found`);
                                        return be(a.rewards, (e) => Object.assign({}, e));
                                    },
                                    { equals: M },
                                ),
                                r = (0, me.Om)(
                                    (e) => {
                                        const a = pe(t.cards.get(), e);
                                        if (!a) throw new Error(`vehicle: card with index ${e} was not found`);
                                        return Object.assign({}, a.vehicle);
                                    },
                                    { equals: M },
                                ),
                                s = (0, me.Om)((e) => {
                                    const a = pe(t.cards.get(), e);
                                    if (!a) throw new Error(`hasVehicleInHangar: card with index ${e} was not found`);
                                    return a.hasVehicleInHangar;
                                }),
                                i = (0, me.Om)(
                                    (e) => {
                                        const a = pe(t.cards.get(), e);
                                        if (!a) throw new Error(`card with index ${e} was not found`);
                                        return be(a.seasonPoints, (e) => Object.assign({}, e));
                                    },
                                    { equals: M },
                                ),
                                u = (0, me.Om)(
                                    (e, t) => {
                                        const a = i(e);
                                        if (!a)
                                            throw new Error(`season points array with card index ${e} was not found`);
                                        const n = pe(a, t);
                                        if (!n)
                                            throw new Error(
                                                `season point with index ${t} in card with index ${e} was not found`,
                                            );
                                        return n;
                                    },
                                    { equals: M },
                                ),
                                o = (0, me.Om)((e) => {
                                    const t = i(e);
                                    if (!t) throw new Error(`season points array with card index ${e} was not found`);
                                    return t.every(({ state: e }) => e === ug.Achieved);
                                }),
                                l = (0, me.Om)((e) =>
                                    we(
                                        t.cards.get(),
                                        (t, a) =>
                                            t + ((e, t) => fe(e, ({ season: e }) => e === t).length)(a.seasonPoints, e),
                                        0,
                                    ),
                                ),
                                c = (0, me.Om)(
                                    () => {
                                        const e = t.cards.get();
                                        return {
                                            possible: Fe(e, (e) => e.rewardsState === sg.Possible),
                                            guaranteed: Fe(e, (e) => e.rewardsState === sg.Guaranteed),
                                        };
                                    },
                                    { equals: _t },
                                ),
                                d = (0, me.Om)(
                                    (e) => {
                                        const t = Ae(n(e), (e) => lg.includes(e.name));
                                        if (!t)
                                            throw new Error(
                                                `card with index ${e} has no any styleProgress in rewards, please change config`,
                                            );
                                        return t;
                                    },
                                    { equals: M },
                                ),
                                m = (0, me.Om)((e) => Ae(n(e), (e) => cg.includes(e.name)), { equals: M }),
                                _ = (0, me.Om)((e) => {
                                    const a = pe(t.ranks.get(), e);
                                    if (!a) throw new Error(`rank with index ${e} was not found`);
                                    return Object.assign({}, a);
                                }),
                                E = (0, me.Om)((e) => Yr(be(_(e).divisions, (e) => Object.assign({}, e))), {
                                    equals: M,
                                }),
                                g = (0, me.Om)(
                                    (e) =>
                                        m(e)
                                            ? fe(n(e), (e) => !dg.includes(e.name))
                                            : fe(n(e), (e) => !lg.includes(e.name)),
                                    { equals: M },
                                ),
                                p = (0, me.Om)(() => {
                                    const e = t.root.get().currentRank,
                                        a = De(t.ranks.get(), (t) => t.rank === e);
                                    if (void 0 === a)
                                        throw new Error(
                                            'currentRankIndex computed is not applicable, there is no currentRank among ranks array',
                                        );
                                    return a;
                                }),
                                h = (0, me.Om)((e) => t.root.get().isQualificationActive || e > p());
                            return Object.assign({}, t, {
                                computes: {
                                    card: a,
                                    seasonPoint: u,
                                    isEnabledCard: o,
                                    mainReward: d,
                                    additionalRewards: g,
                                    bestRewardsCardIndex: c,
                                    seasonPointsCount: l,
                                    additionalRewardsCount: (0, me.Om)((e) => g(e).length),
                                    seasonPointsLength: (0, me.Om)((e) => i(e).length),
                                    isInactiveLegendItem: h,
                                    vehicleReward: m,
                                    vehicle: r,
                                    hasVehicleInHangar: s,
                                    rankItem: _,
                                    divisions: E,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            goToStylePreview: e.createCallback((e) => ({ cardIndex: e }), 'onGoToStylePreview'),
                            goToVehiclePreview: e.createCallback(
                                (e, t) => ({ cd: e, cardIndex: t }),
                                'onGoToVehiclePreview',
                            ),
                            goToSelectionRewards: e.createCallbackNoArgs('onGoToRewardsSelection'),
                        }),
                    ),
                    _g = mg[0],
                    Eg = mg[1];
                const gg = 'AdditionalRewards_reward_e8',
                    pg = Vo.Small,
                    hg = (0, J.Pi)(({ cardIndex: e, visibleRewardsCount: t, className: a, rewardItemClassMix: n }) => {
                        const s = Eg().model,
                            i = s.computes.additionalRewards(e),
                            u = s.computes.additionalRewardsCount(e),
                            o = vl({ rewards: i, size: pg, index: e });
                        return r().createElement(ml, {
                            data: o,
                            size: pg,
                            count: bl(u, t),
                            rewardItemClassMix: f()(gg, n),
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { fromIndex: t, index: e },
                            },
                            classMix: a,
                        });
                    }),
                    vg = {
                        base: 'SeasonPoint_base_a1',
                        base__x24: 'SeasonPoint_base__x24_b6',
                        base__x32: 'SeasonPoint_base__x32_f0',
                        base__x48: 'SeasonPoint_base__x48_8a',
                        base__x62: 'SeasonPoint_base__x62_b1',
                        icon: 'SeasonPoint_icon_b6',
                        base__notAchieved: 'SeasonPoint_base__notAchieved_02',
                    };
                let bg;
                !(function (e) {
                    (e.x24 = 'x24'), (e.x32 = 'x32'), (e.x48 = 'x48'), (e.x62 = 'x62');
                })(bg || (bg = {}));
                const fg = R.images.gui.maps.icons.comp7.icons,
                    Cg = ({ state: e, season: t, className: a, size: n = bg.x48 }) =>
                        r().createElement(
                            'div',
                            { className: f()(vg.base, vg[`base__${n}`], vg[`base__${e}`], a) },
                            r().createElement('div', {
                                className: vg.icon,
                                style: {
                                    backgroundImage:
                                        'notAchieved' === e
                                            ? `url(${fg.$dyn(`season_point_notAchieved_${n}`)})`
                                            : `url(${fg.$dyn(`season_point_${t}_${n}`)})`,
                                },
                            }),
                        );
                function Ag() {
                    return (
                        (Ag =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ag.apply(this, arguments)
                    );
                }
                const Dg = (0, J.Pi)(({ cardIndex: e, pointIndex: t, size: a, className: n, classNames: s }) => {
                        const i = Eg().model.computes.seasonPoint(e, t);
                        return r().createElement(
                            Ge,
                            {
                                contentId: R.views.lobby.comp7.tooltips.SeasonPointTooltip('resId'),
                                args: { state: i.state },
                                ignoreShowDelay: !0,
                            },
                            r().createElement(
                                'div',
                                { className: n },
                                r().createElement(Cg, Ag({}, i, { className: null == s ? void 0 : s.point, size: a })),
                            ),
                        );
                    }),
                    Fg = 'CardSeasonPoints_base_8c',
                    wg = (0, J.Pi)(({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const s = Eg().model;
                        return r().createElement(
                            'div',
                            { className: f()(Fg, a) },
                            ia(s.computes.seasonPointsLength(e), (a) =>
                                r().createElement(Dg, {
                                    cardIndex: e,
                                    pointIndex: a,
                                    size: t,
                                    className: null == n ? void 0 : n.pointWrapper,
                                    classNames: { point: null == n ? void 0 : n.point },
                                    key: a,
                                }),
                            ),
                        );
                    });
                function Bg() {
                    return (
                        (Bg =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Bg.apply(this, arguments)
                    );
                }
                const yg = (e, t, a = !1) => {
                        if (a && 'styleProgress' === e.name) {
                            const t = R.images.gui.maps.icons.comp7.yearlyRewards.$dyn(e.icon);
                            if (t) return `${t}`;
                        }
                        return nl(e, t);
                    },
                    Sg = (0, J.Pi)(({ cardIndex: e, size: t, hasVehicle: a = !1, className: n, classNames: s }) => {
                        const i = Eg().model.computes.mainReward(e),
                            u = Object.assign({}, hl({ reward: i, size: t, index: e }), { image: yg(i, t, a) });
                        return r().createElement(
                            il,
                            Bg({}, u, {
                                className: n,
                                classNames: {
                                    rewardIcon: null == s ? void 0 : s.icon,
                                    image: null == s ? void 0 : s.iconContainer,
                                },
                            }),
                        );
                    }),
                    Ng = {
                        base: 'RewardsStatus_base_49',
                        status: 'RewardsStatus_status_48',
                        venzel: 'RewardsStatus_venzel_80',
                        venzel__right: 'RewardsStatus_venzel__right_b6',
                        icon: 'RewardsStatus_icon_9f',
                        line: 'RewardsStatus_line_d8',
                        base__guaranteed: 'RewardsStatus_base__guaranteed_4f',
                        base__claimed: 'RewardsStatus_base__claimed_0f',
                        base__possible: 'RewardsStatus_base__possible_67',
                        base__notAvailable: 'RewardsStatus_base__notAvailable_b1',
                        statusIcon: 'RewardsStatus_statusIcon_72',
                        description: 'RewardsStatus_description_f6',
                    },
                    kg = R.strings.comp7.yearlyRewards.rewardsState,
                    Rg = ({ rewardsState: e, className: t }) =>
                        r().createElement(
                            Ye,
                            { body: `${kg.tooltip.$dyn(e)}`, isEnabled: e !== sg.Claimed },
                            r().createElement(
                                'div',
                                { className: f()(Ng.base, Ng[`base__${e}`], t) },
                                r().createElement(
                                    'div',
                                    { className: Ng.status },
                                    r().createElement(
                                        'div',
                                        { className: Ng.venzel },
                                        r().createElement('div', { className: Ng.icon }),
                                        r().createElement('div', { className: Ng.line }),
                                    ),
                                    r().createElement('div', { className: Ng.statusIcon }),
                                    r().createElement(
                                        'div',
                                        { className: f()(Ng.venzel, Ng.venzel__right) },
                                        r().createElement('div', { className: Ng.icon }),
                                        r().createElement('div', { className: Ng.line }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Ng.description },
                                    R.strings.comp7.yearlyRewards.rewardsState.$dyn(e),
                                ),
                            ),
                        ),
                    Pg = {
                        base: 'CardContent_base_be',
                        base__withVehicle: 'CardContent_base__withVehicle_b1',
                        base__collapsed: 'CardContent_base__collapsed_a6',
                        bigLock: 'CardContent_bigLock_fb',
                        bigLock__visible: 'CardContent_bigLock__visible_00',
                        lock: 'CardContent_lock_a5',
                        lock__visible: 'CardContent_lock__visible_2e',
                        vehicleImageWrapper: 'CardContent_vehicleImageWrapper_84',
                        base__selected: 'CardContent_base__selected_ce',
                        vehicleImage: 'CardContent_vehicleImage_a2',
                        mainReward: 'CardContent_mainReward_2d',
                        mainRewardWithVehicle: 'CardContent_mainRewardWithVehicle_a1',
                        mainRewardPreview: 'CardContent_mainRewardPreview_a1',
                        mainRewardWithVehiclePreview: 'CardContent_mainRewardWithVehiclePreview_ea',
                        vehiclePreview: 'CardContent_vehiclePreview_af',
                        mainRewardIcon: 'CardContent_mainRewardIcon_e2',
                        rewardImageContainer: 'CardContent_rewardImageContainer_3c',
                        cardInfoContainer: 'CardContent_cardInfoContainer_91',
                        cardInfo: 'CardContent_cardInfo_03',
                        vehicleName: 'CardContent_vehicleName_89',
                        vehicleTypeContainer: 'CardContent_vehicleTypeContainer_29',
                        title: 'CardContent_title_c4',
                        subTitle: 'CardContent_subTitle_83',
                        additionalRewards: 'CardContent_additionalRewards_2a',
                        additionalRewardWithVehicle: 'CardContent_additionalRewardWithVehicle_1a',
                        rewardsStatus: 'CardContent_rewardsStatus_99',
                        seasonPointsContainer: 'CardContent_seasonPointsContainer_fb',
                        seasonPoints: 'CardContent_seasonPoints_41',
                        seasonPointWrapper: 'CardContent_seasonPointWrapper_20',
                        venzel: 'CardContent_venzel_09',
                        venzel__right: 'CardContent_venzel__right_27',
                        peak: 'CardContent_peak_05',
                        lines: 'CardContent_lines_f4',
                        line: 'CardContent_line_ba',
                    },
                    xg = (e, t) => {
                        switch (e) {
                            case 'collapsed':
                                return ((e) => (e >= D.Medium ? bg.x32 : bg.x24))(t);
                            case 'selected':
                                return ((e) => (e >= D.Large ? bg.x62 : e >= D.Medium ? bg.x48 : bg.x32))(t);
                        }
                    },
                    Tg = (e) => (e >= D.Large ? jc.x83 : e >= D.Medium ? jc.x48 : jc.x24Metal),
                    Ig = (e, t) => (t ? 8 : e >= D.Medium ? 5 : 4);
                function Lg() {
                    return (
                        (Lg =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Lg.apply(this, arguments)
                    );
                }
                const Og = { icon: Pg.mainRewardIcon, iconContainer: Pg.rewardImageContainer },
                    Mg = { vehicleTypeContainer: Pg.vehicleTypeContainer },
                    $g = { pointWrapper: Pg.seasonPointWrapper },
                    Hg = (0, J.Pi)(({ cardIndex: e, className: t, cardState: a }) => {
                        var n;
                        const s = B().mediaSize,
                            i = Eg(),
                            u = i.model,
                            o = i.controls,
                            l = u.computes.isEnabledCard(e),
                            c = ((e) => (e >= D.Large ? Vo.S600x450 : e >= D.Medium ? Vo.S400x300 : Vo.S232x174))(s),
                            d = ((e) => (e >= D.Medium ? 'normal' : 'small'))(s),
                            m = ((e) => (e >= D.Small ? R.strings.comp7.rewards.preview() : ''))(s),
                            _ = u.computes.mainReward(e),
                            E = u.computes.card(e).rewardsState,
                            g = u.computes.vehicleReward(e),
                            p = u.computes.hasVehicleInHangar(e),
                            h = void 0 !== g,
                            v = u.computes.vehicle(e),
                            b = null != (n = null == g ? void 0 : g.tooltipId) ? n : '',
                            C = 'selected' === a,
                            A = 'collapsed' === a;
                        return r().createElement(
                            'div',
                            {
                                className: f()(Pg.base, Pg[`base__${a}`], h && Pg.base__withVehicle, t),
                                onClick: A ? Q.playYes : void 0,
                                onMouseEnter: A ? Q.playHighlight : void 0,
                            },
                            r().createElement('div', { className: f()(Pg.bigLock, !l && C && Pg.bigLock__visible) }),
                            h &&
                                r().createElement(
                                    'div',
                                    { className: Pg.vehicleContainer },
                                    r().createElement(
                                        Rr,
                                        { args: { tooltipId: b }, ignoreShowDelay: !0 },
                                        r().createElement(
                                            'div',
                                            { className: Pg.vehicleImageWrapper },
                                            r().createElement('div', { className: Pg.vehicleImage }),
                                        ),
                                    ),
                                    !p &&
                                        r().createElement(
                                            Pl,
                                            {
                                                type: 'preview',
                                                onClick: () => o.goToVehiclePreview(v.vehicleCD, e),
                                                size: d,
                                                className: Pg.vehiclePreview,
                                            },
                                            m,
                                        ),
                                ),
                            r().createElement(
                                'div',
                                { className: Pg.mainReward },
                                r().createElement(Sg, {
                                    cardIndex: e,
                                    size: c,
                                    hasVehicle: h,
                                    className: f()(h && Pg.mainRewardWithVehicle),
                                    classNames: Og,
                                }),
                                r().createElement(
                                    Pl,
                                    {
                                        type: 'preview',
                                        onClick: () => o.goToStylePreview(e),
                                        size: d,
                                        className: f()(h ? Pg.mainRewardWithVehiclePreview : Pg.mainRewardPreview),
                                    },
                                    m,
                                ),
                            ),
                            C &&
                                r().createElement(
                                    'div',
                                    { className: Pg.cardInfoContainer },
                                    r().createElement(
                                        'div',
                                        { className: Pg.cardInfo },
                                        h
                                            ? r().createElement(
                                                  Rr,
                                                  { args: { tooltipId: b }, ignoreShowDelay: !0 },
                                                  r().createElement(
                                                      'div',
                                                      null,
                                                      r().createElement(tr, {
                                                          text: R.strings.comp7.yearlyRewards.title.withVehicle(),
                                                          binding: {
                                                              vehicle: r().createElement(
                                                                  Xc,
                                                                  Lg({}, v, {
                                                                      size: Tg(s),
                                                                      className: Pg.vehicleName,
                                                                      classNames: Mg,
                                                                  }),
                                                              ),
                                                              camouflageName: r().createElement(
                                                                  'div',
                                                                  { className: Pg.title },
                                                                  _.label,
                                                              ),
                                                          },
                                                      }),
                                                  ),
                                              )
                                            : r().createElement('div', { className: Pg.title }, _.label),
                                        r().createElement(ir, {
                                            text: String(R.strings.comp7.yearlyRewards.subtitle.$dyn(_.name)),
                                            classMix: Pg.subTitle,
                                        }),
                                        r().createElement(hg, {
                                            cardIndex: e,
                                            visibleRewardsCount: Ig(s, h),
                                            className: Pg.additionalRewards,
                                            rewardItemClassMix: f()(h && Pg.additionalRewardWithVehicle),
                                        }),
                                        r().createElement(Rg, { rewardsState: E, className: Pg.rewardsStatus }),
                                    ),
                                ),
                            r().createElement(
                                'div',
                                { className: Pg.seasonPointsContainer },
                                C &&
                                    r().createElement(
                                        'div',
                                        { className: Pg.venzel },
                                        r().createElement('div', { className: Pg.peak }),
                                        r().createElement(
                                            'div',
                                            { className: Pg.lines },
                                            r().createElement('div', { className: Pg.line }),
                                            r().createElement('div', { className: Pg.line }),
                                        ),
                                    ),
                                r().createElement(wg, {
                                    cardIndex: e,
                                    size: xg(a, s),
                                    className: Pg.seasonPoints,
                                    classNames: $g,
                                }),
                                C &&
                                    r().createElement(
                                        'div',
                                        { className: f()(Pg.venzel, Pg.venzel__right) },
                                        r().createElement('div', { className: Pg.peak }),
                                        r().createElement(
                                            'div',
                                            { className: Pg.lines },
                                            r().createElement('div', { className: Pg.line }),
                                            r().createElement('div', { className: Pg.line }),
                                        ),
                                    ),
                            ),
                            r().createElement('div', { className: f()(Pg.lock, !l && A && Pg.lock__visible) }),
                        );
                    }),
                    Wg = {
                        base: 'Card_base_4c',
                        cardContent: 'Card_cardContent_83',
                        cardContentInner: 'Card_cardContentInner_b9',
                        cardContentInner__selected: 'Card_cardContentInner__selected_f6',
                    },
                    zg = ({ cardIndex: e, cardState: t, className: a }) =>
                        r().createElement(
                            'div',
                            { className: f()(Wg.base, a) },
                            r().createElement(
                                'div',
                                { className: Wg.cardContent },
                                r().createElement(Hg, {
                                    cardIndex: e,
                                    cardState: t,
                                    className: f()(Wg.cardContentInner, Wg[`cardContentInner__${t}`]),
                                }),
                            ),
                        ),
                    Ug = {
                        '--pageContentWidth': '78vw',
                        base: 'Cards_base_b0',
                        card: 'Cards_card_18',
                        card__collapsed: 'Cards_card__collapsed_9b',
                        card__selected: 'Cards_card__selected_1b',
                        highlight: 'Cards_highlight_28',
                        highlight__visible: 'Cards_highlight__visible_f9',
                        fadeIn: 'Cards_fadeIn_52',
                        divider: 'Cards_divider_06',
                        divider__left: 'Cards_divider__left_c1',
                        divider__right: 'Cards_divider__right_c2',
                        shadow: 'Cards_shadow_39',
                        fadeInThreeQuarters: 'Cards_fadeInThreeQuarters_8d',
                        fadeInHalf: 'Cards_fadeInHalf_bd',
                        fadeOut: 'Cards_fadeOut_55',
                        fadeInWithScale: 'Cards_fadeInWithScale_0c',
                        slideUp: 'Cards_slideUp_39',
                        scale: 'Cards_scale_60',
                        raysAppearance: 'Cards_raysAppearance_32',
                        rotate: 'Cards_rotate_7c',
                        'reverse-rotate': 'Cards_reverse-rotate_67',
                        glowAppearance: 'Cards_glowAppearance_d8',
                        highlightAppearance: 'Cards_highlightAppearance_c3',
                        blink: 'Cards_blink_2e',
                        slideUpIn: 'Cards_slideUpIn_6a',
                    };
                let Vg, Gg;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(Vg || (Vg = {})),
                    (function (e) {
                        (e.Default = 'default'),
                            (e.NotAccruedRewards = 'notAccruedRewards'),
                            (e.RewardsSelectionAvailable = 'rewardsSelectionAvailable'),
                            (e.RewardsReceived = 'rewardsReceived');
                    })(Gg || (Gg = {}));
                const qg = (0, J.Pi)(() => {
                        const e = Eg().model,
                            t = q().model,
                            a = (function () {
                                const e = (0, n.useRef)(0);
                                return (
                                    Ps(() => {
                                        window.clearTimeout(e.current);
                                    }),
                                    (0, n.useMemo)(
                                        () => ({
                                            run: (t, a) => {
                                                window.clearTimeout(e.current),
                                                    (e.current = window.setTimeout(() => {
                                                        t(), (e.current = 0);
                                                    }, a));
                                            },
                                            clear: () => {
                                                window.clearTimeout(e.current), (e.current = 0);
                                            },
                                            get isRunning() {
                                                return 0 !== e.current;
                                            },
                                        }),
                                        [],
                                    )
                                );
                            })(),
                            s = e.root.get(),
                            i = s.hasInitialCardsAnimation,
                            u = s.initialCardIndex,
                            o = t.year.state.get(),
                            l = e.cards.get().length,
                            c = e.computes.bestRewardsCardIndex(),
                            d = c.possible,
                            m = c.guaranteed,
                            _ = l - 1,
                            E = (({ yearState: e, maxIndex: t, initialCardIndex: a, possible: n, guaranteed: r }) =>
                                -1 !== a
                                    ? a
                                    : e === wl.Finished
                                      ? null != r
                                          ? r
                                          : 0
                                      : void 0 !== n
                                        ? yt(0, t, n + 1)
                                        : void 0 !== r
                                          ? yt(0, t, r + 1)
                                          : 0)({
                                yearState: o,
                                maxIndex: _,
                                initialCardIndex: u,
                                possible: d,
                                guaranteed: m,
                            }),
                            g = (0, n.useState)(i),
                            p = g[0],
                            h = g[1],
                            v = (0, n.useState)(i ? _ : E),
                            b = v[0],
                            C = v[1],
                            A = (0, n.useCallback)(() => {
                                a.clear(), h(!1);
                            }, [a]);
                        (0, n.useEffect)(() => {
                            j('comp_7_yearly_reward_slide');
                        }, [b]),
                            (0, n.useEffect)(
                                () =>
                                    Re(() => {
                                        if (!p) return;
                                        if (b === E) return void A();
                                        const e = b === _ ? 800 : 400;
                                        a.run(() => {
                                            p && C((e) => yt(0, _, e - 1));
                                        }, e);
                                    }),
                                [a, p, _, E, b, A],
                            );
                        const D = (0, n.useCallback)(
                            (e) => () => {
                                A(), C(e);
                            },
                            [A],
                        );
                        return r().createElement(
                            'div',
                            { className: Ug.base },
                            ia(l, (e) => {
                                const t = e === b ? 'selected' : 'collapsed';
                                return r().createElement(
                                    'div',
                                    { className: f()(Ug.card, Ug[`card__${t}`]), onClick: D(e), key: e },
                                    r().createElement('div', {
                                        className: f()(Ug.highlight, !p && 'selected' === t && Ug.highlight__visible),
                                    }),
                                    0 === e &&
                                        r().createElement('div', { className: f()(Ug.divider, Ug.divider__left) }),
                                    r().createElement(zg, { cardIndex: e, cardState: t }),
                                    r().createElement('div', { className: Ug.shadow }),
                                    r().createElement('div', { className: f()(Ug.divider, Ug.divider__right) }),
                                );
                            }),
                        );
                    }),
                    jg = (e) => (e >= D.Medium ? ka.x84 : ka.x64),
                    Qg = R.strings.comp7.yearlyRewards,
                    Yg = {
                        '--pageContentWidth': '78vw',
                        base: 'Legend_base_af',
                        inner: 'Legend_inner_35',
                        item: 'Legend_item_27',
                        separator: 'Legend_separator_2b',
                        description: 'Legend_description_f0',
                        rankWrapper: 'Legend_rankWrapper_c3',
                        highlight: 'Legend_highlight_3d',
                        rankEmblem: 'Legend_rankEmblem_5d',
                        rankEmblem__inactive: 'Legend_rankEmblem__inactive_c1',
                        arrow: 'Legend_arrow_c0',
                        pointsCount: 'Legend_pointsCount_23',
                        count: 'Legend_count_e3',
                        seasonPoint: 'Legend_seasonPoint_d8',
                        status: 'Legend_status_c7',
                        rank: 'Legend_rank_56',
                        verticalSeparator: 'Legend_verticalSeparator_d9',
                        seasonPointIcon: 'Legend_seasonPointIcon_be',
                        fadeIn: 'Legend_fadeIn_ae',
                        fadeInThreeQuarters: 'Legend_fadeInThreeQuarters_6e',
                        fadeInHalf: 'Legend_fadeInHalf_b2',
                        fadeOut: 'Legend_fadeOut_60',
                        fadeInWithScale: 'Legend_fadeInWithScale_a7',
                        slideUp: 'Legend_slideUp_57',
                        scale: 'Legend_scale_c6',
                        raysAppearance: 'Legend_raysAppearance_6d',
                        rotate: 'Legend_rotate_c5',
                        'reverse-rotate': 'Legend_reverse-rotate_75',
                        glowAppearance: 'Legend_glowAppearance_f6',
                        highlightAppearance: 'Legend_highlightAppearance_17',
                        blink: 'Legend_blink_fe',
                        slideUpIn: 'Legend_slideUpIn_f1',
                    },
                    Xg = (0, J.Pi)(({ className: e, index: t }) => {
                        const a = Eg().model,
                            n = q().model,
                            s = B().mediaSize,
                            i = a.root.get(),
                            u = i.currentRank,
                            o = i.topPercentage,
                            l = n.season.name.get(),
                            c = a.computes.rankItem(t);
                        return r().createElement(
                            'div',
                            { className: e, key: t },
                            0 !== t && r().createElement('div', { className: Yg.separator }),
                            r().createElement(
                                'div',
                                { className: Yg.rankWrapper },
                                c.rank === u &&
                                    r().createElement(Yd, {
                                        className: Yg.highlight,
                                        src: String(R.videos.comp7.godRaysNew_130x130()),
                                        autoplay: !0,
                                        loop: !0,
                                    }),
                                r().createElement(
                                    Gn,
                                    {
                                        rank: c.rank,
                                        from: c.from,
                                        to: c.to,
                                        topPercentage: o,
                                        divisions: a.computes.divisions(t),
                                        className: Yg.tooltipArea,
                                        ignoreShowDelay: !0,
                                    },
                                    r().createElement(Pa, {
                                        seasonName: l,
                                        rank: c.rank,
                                        size: jg(s),
                                        className: f()(
                                            Yg.rankEmblem,
                                            a.computes.isInactiveLegendItem(t) && Yg.rankEmblem__inactive,
                                        ),
                                    }),
                                ),
                            ),
                        );
                    }),
                    Kg = 'possible',
                    Zg = { state: Kg, ignoreState: !0 },
                    Jg = (0, J.Pi)(({ className: e }) => {
                        const t = Eg().model,
                            a = q().model,
                            n = t.root.get(),
                            s = n.currentRank,
                            i = n.isQualificationActive,
                            u = a.season.name.get(),
                            o = a.year.state.get(),
                            l = t.computes.seasonPointsCount(a.season.name.get()),
                            c = ((e) => {
                                switch (e) {
                                    case wl.Active:
                                        return { rank: Qg.rank.current(), description: Qg.description.current() };
                                    case wl.OffSeason:
                                    case wl.Finished:
                                        return { rank: Qg.rank.achieved(), description: Qg.description.achieved() };
                                    default:
                                        return (
                                            console.error(
                                                `Provide text strings for current/achieved rank for YearState: ${e}`,
                                            ),
                                            { rank: '', description: '' }
                                        );
                                }
                            })(o);
                        return r().createElement(
                            'div',
                            { className: f()(Yg.base, e) },
                            r().createElement(
                                'div',
                                { className: Yg.inner },
                                ia(t.ranks.get().length, (e) =>
                                    r().createElement(Xg, { index: e, key: e, className: Yg.item }),
                                ),
                                r().createElement('div', { className: Yg.arrow }),
                                r().createElement(
                                    'div',
                                    { className: Yg.pointsCount },
                                    r().createElement('div', { className: Yg.count }, l),
                                    r().createElement(
                                        Ge,
                                        {
                                            contentId: R.views.lobby.comp7.tooltips.SeasonPointTooltip('resId'),
                                            args: Zg,
                                            ignoreShowDelay: !0,
                                        },
                                        r().createElement(
                                            'div',
                                            null,
                                            r().createElement(Cg, {
                                                state: Kg,
                                                season: u,
                                                size: bg.x48,
                                                className: Yg.seasonPoint,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: Yg.status },
                                !i &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(tr, {
                                            text: c.rank,
                                            binding: {
                                                rank: r().createElement(
                                                    'div',
                                                    { className: Yg.rank },
                                                    ma(R.strings.comp7.quotesWrapper(), { name: Ia(s) }),
                                                ),
                                            },
                                            classMix: Yg.secondaryText,
                                        }),
                                        r().createElement('div', { className: Yg.verticalSeparator }),
                                    ),
                                r().createElement(tr, {
                                    text: c.description,
                                    binding: {
                                        seasonPointIcon: r().createElement(
                                            Ge,
                                            {
                                                contentId: R.views.lobby.comp7.tooltips.SeasonPointTooltip('resId'),
                                                args: Zg,
                                                ignoreShowDelay: !0,
                                            },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(Cg, {
                                                    state: Kg,
                                                    season: u,
                                                    size: bg.x24,
                                                    className: Yg.seasonPointIcon,
                                                }),
                                            ),
                                        ),
                                    },
                                }),
                            ),
                        );
                    }),
                    ep = 'StatusBanner_base_af',
                    tp = 'StatusBanner_lineWrapper_25',
                    ap = 'StatusBanner_line_81',
                    np = 'StatusBanner_description_46',
                    rp = 'StatusBanner_selectionContainer_88',
                    sp = 'StatusBanner_selectionButton_8d',
                    ip = R.strings.comp7.yearlyRewards.banner,
                    up = (0, J.Pi)(() => {
                        const e = Eg(),
                            t = e.model,
                            a = e.controls;
                        switch (t.root.get().bannerState) {
                            case Gg.NotAccruedRewards:
                                return r().createElement('div', { className: np }, ip.notAccruedRewards());
                            case Gg.RewardsSelectionAvailable:
                                return r().createElement(
                                    'div',
                                    { className: f()(np, rp) },
                                    r().createElement('div', null, ip.rewardsSelectionAvailable()),
                                    r().createElement(
                                        mt,
                                        {
                                            size: 'medium',
                                            onClick: a.goToSelectionRewards,
                                            type: 'primary',
                                            mixClass: sp,
                                        },
                                        ip.selectButtonLabel(),
                                    ),
                                );
                            case Gg.RewardsReceived:
                                return r().createElement('div', { className: np }, ip.rewardsReceived());
                            default:
                                return r().createElement('div', { className: np }, ip.default());
                        }
                    }),
                    op = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: f()(ep, e) },
                            r().createElement('div', { className: tp }, r().createElement('div', { className: ap })),
                            r().createElement('div', { className: np }, r().createElement(up, null)),
                        ),
                    lp = 'YearlyRewardsPage_base_39',
                    cp = 'YearlyRewardsPage_headersWrapper_8e',
                    dp = 'YearlyRewardsPage_contentWrapper_73',
                    mp = 'YearlyRewardsPage_cardsContainer_90',
                    _p = 'YearlyRewardsPage_legend_2b',
                    Ep = 'YearlyRewardsPage_status_27',
                    gp = R.strings.comp7.page.heading,
                    pp = (0, J.Pi)(() => {
                        const e = Eg().model,
                            t = (0, Pe.useSpring)(ut);
                        return r().createElement(
                            'div',
                            { className: lp },
                            r().createElement(
                                'div',
                                { className: cp },
                                r().createElement(it, { className: re }, gp.yearlyRewards()),
                                r().createElement(Wr, null),
                            ),
                            r().createElement(
                                Pe.animated.div,
                                { style: t, className: dp },
                                e.root.get().hasDataError
                                    ? r().createElement(yc, null)
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement('div', { className: mp }, r().createElement(qg, null)),
                                          r().createElement('div', { className: _p }, r().createElement(Jg, null)),
                                          r().createElement('div', { className: Ep }, r().createElement(op, null)),
                                      ),
                            ),
                        );
                    });
                let hp, vp;
                !(function (e) {
                    (e[(e.NotStarted = 0)] = 'NotStarted'),
                        (e[(e.JustStarted = 1)] = 'JustStarted'),
                        (e[(e.Active = 2)] = 'Active'),
                        (e[(e.EndSoon = 3)] = 'EndSoon'),
                        (e[(e.End = 4)] = 'End'),
                        (e[(e.Disabled = 5)] = 'Disabled');
                })(hp || (hp = {})),
                    (function (e) {
                        (e.First = 'first'), (e.Second = 'second'), (e.Third = 'third');
                    })(vp || (vp = {}));
                const bp = U()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), seasonCards: e.array('seasonCards') },
                                a = (0, me.Om)(
                                    (e) => {
                                        const a = pe(t.seasonCards.get(), e);
                                        if (!a) throw new Error(`Unexpected card index: ${e}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: M },
                                ),
                                n = (0, me.Om)((e) => a(e).season, { equals: M }),
                                r = (0, me.Om)((e) => n(e).state),
                                s = (0, me.Om)((e) => r(e) === hp.NotStarted),
                                i = (0, me.Om)((e) => a(e).rank),
                                u = (0, me.Om)((e) => a(e).hasRankReceived);
                            return Object.assign({}, t, {
                                computes: {
                                    seasonCardsLength: (0, me.Om)(() => t.seasonCards.get().length),
                                    seasonCard: a,
                                    seasonState: r,
                                    seasonScheduleInfo: n,
                                    isSeasonNotStarted: s,
                                    rank: i,
                                    hasRankReceived: u,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            goToSeasonStatistics: e.createCallback(
                                (e) => ({ seasonName: e }),
                                'onGoToSeasonStatistics',
                            ),
                        }),
                    ),
                    fp = bp[0],
                    Cp = bp[1],
                    Ap = 'Background_base_8d',
                    Dp = R.images.gui.maps.icons.comp7.backgrounds,
                    Fp = (0, J.Pi)(({ index: e }) => {
                        const t = Cp().model,
                            a = t.computes.seasonScheduleInfo(e).name,
                            n = t.computes.hasRankReceived(e),
                            s = Dp.$dyn(a),
                            i = n ? xa[t.computes.rank(e)] : 'qualification';
                        return r().createElement('div', {
                            className: Ap,
                            style: { backgroundImage: `url(${s.$dyn(i)})` },
                        });
                    }),
                    wp = 'LaceDivider_base_1a',
                    Bp = 'LaceDivider_divider_cf',
                    yp = 'LaceDivider_divider__center_c9',
                    Sp = 'LaceDivider_divider__right_e8',
                    Np = ({ children: e, className: t, classNames: a }) =>
                        r().createElement(
                            'div',
                            { className: f()(wp, t) },
                            r().createElement('div', { className: f()(Bp, null == a ? void 0 : a.divider) }),
                            r().createElement('div', { className: f()(Bp, yp, null == a ? void 0 : a.divider) }),
                            e,
                            r().createElement('div', { className: f()(Bp, yp, null == a ? void 0 : a.divider) }),
                            r().createElement('div', { className: f()(Bp, Sp, null == a ? void 0 : a.divider) }),
                        ),
                    kp = 'CardFooter_base_5d',
                    Rp = 'CardFooter_statisticsAvailability_0b',
                    Pp = 'CardFooter_generationOfStatistics_c0',
                    xp = 'CardFooter_icon_94',
                    Tp = R.strings.comp7.yearlyStatistics,
                    Ip = (0, J.Pi)(({ index: e, className: t }) => {
                        const a = Cp(),
                            n = a.model,
                            s = a.controls,
                            i = n.computes.seasonCard(e).hasStatisticsCalculated,
                            u = n.computes.seasonScheduleInfo(e).name;
                        return r().createElement(
                            'div',
                            { className: f()(kp, t) },
                            i
                                ? r().createElement(
                                      'div',
                                      { onClick: () => s.goToSeasonStatistics(u) },
                                      r().createElement(tr, {
                                          text: Tp.goToSeasonStatistics(),
                                          classMix: Rp,
                                          binding: { icon: r().createElement('div', { className: xp }) },
                                      }),
                                  )
                                : r().createElement(tr, { text: Tp.generationOfStatistics(), classMix: Pp }),
                        );
                    }),
                    Lp = 'RankStatus_base_2c',
                    Op = 'RankStatus_rank_d5',
                    Mp = 'RankStatus_division_94',
                    $p = R.strings.comp7.yearlyStatistics.rankStatus,
                    Hp = (0, J.Pi)(({ index: e }) => {
                        const t = Cp().model.computes.seasonCard(e),
                            a = t.hasRankReceived,
                            n = t.rank,
                            s = t.division;
                        return r().createElement(
                            'div',
                            { className: Lp },
                            a
                                ? r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement(tr, {
                                          classMix: Op,
                                          text: $p.received(),
                                          binding: { rank: Ia(n) },
                                      }),
                                      Na(n) && r().createElement(tr, { classMix: Mp, text: Fa(s) }),
                                  )
                                : r().createElement('div', { className: Op }, $p.notReceived()),
                        );
                    }),
                    Wp = 'SeasonStatus_base_75',
                    zp = R.strings.comp7.yearlyStatistics,
                    Up = (0, J.Pi)(({ index: e }) => {
                        const t = Cp().model.computes.seasonScheduleInfo(e),
                            a = t.endTimestamp,
                            n = t.startTimestamp,
                            s = t.state,
                            i = t.hasTentativeDates;
                        return r().createElement(
                            'div',
                            { className: f()(Wp) },
                            (() => {
                                switch (s) {
                                    case hp.NotStarted:
                                        return r().createElement(
                                            'div',
                                            null,
                                            i
                                                ? zp.seasonDate.$num(e)
                                                : r().createElement(tr, {
                                                      text: R.strings.comp7.season.range(),
                                                      binding: Tr(n, a),
                                                  }),
                                        );
                                    case hp.JustStarted:
                                    case hp.EndSoon:
                                    case hp.Active:
                                        return r().createElement('div', null, zp.seasonStatus.active());
                                    case hp.End:
                                        return r().createElement('div', null, zp.seasonStatus.end());
                                    default:
                                        return console.error(`Unreachable season state ${s}`), null;
                                }
                            })(),
                        );
                    }),
                    Vp = R.strings.comp7,
                    Gp = ({ value: e, isPercentage: t = !1, fractionDigits: a = 2 }) =>
                        -1 === e
                            ? Vp.dash()
                            : ((e, t, a) => {
                                  const n =
                                      Number.isInteger(e) || Number.isInteger(10 * e)
                                          ? te.Z5.getRealFormat(e, te.Gr.WO_ZERO_DIGITS)
                                          : te.Z5.getRealFormat(parseFloat(e.toFixed(a)), te.Gr.FRACTIONAL);
                                  return t ? ma(Vp.percentage(), { percentageValue: n }) : n;
                              })(e, t, a),
                    qp = 'Row_base_de',
                    jp = 'Row_base__percentage_a0',
                    Qp = 'Row_dashes_87',
                    Yp = 'Row_value_97',
                    Xp = ({ text: e, value: t, isPercentage: a = !1 }) =>
                        r().createElement(
                            'div',
                            { className: f()(qp, a && jp) },
                            e,
                            r().createElement('div', { className: Qp }),
                            r().createElement('div', { className: Yp }, Gp({ value: t, isPercentage: a })),
                        ),
                    Kp = 'Table_base_e1',
                    Zp = 'Table_container_51',
                    Jp = R.strings.comp7.yearlyStatistics,
                    eh = (0, J.Pi)(({ index: e }) => {
                        const t = Cp().model.computes.seasonCard(e),
                            a = t.rating,
                            n = t.singleBattlesCount,
                            s = t.singleBattlesWinRate,
                            i = t.superPlatoonBattlesCount,
                            u = t.superPlatoonBattlesWinRate;
                        return r().createElement(
                            'div',
                            { className: f()(Kp) },
                            r().createElement(
                                'div',
                                { className: Zp },
                                r().createElement(Xp, { text: Jp.rating(), value: a }),
                            ),
                            r().createElement(
                                'div',
                                { className: Zp },
                                r().createElement(Xp, { text: Jp.battles(), value: n }),
                                r().createElement(Xp, { text: Jp.wins(), value: s, isPercentage: !0 }),
                            ),
                            r().createElement(
                                'div',
                                { className: Zp },
                                r().createElement(Xp, { text: Jp.superPlatoonBattles(), value: i }),
                                r().createElement(Xp, { text: Jp.wins(), value: u, isPercentage: !0 }),
                            ),
                        );
                    }),
                    th = (e) => {
                        switch (!0) {
                            case e >= D.ExtraLarge:
                                return ka.x420;
                            case e >= D.Large:
                                return ka.x260;
                            case e >= D.Medium:
                                return ka.x200;
                            default:
                                return ka.x150;
                        }
                    },
                    ah = 'SeasonCard_base_ad',
                    nh = 'SeasonCard_name_8e',
                    rh = 'SeasonCard_rankImage_26',
                    sh = 'SeasonCard_cardFooter_e4',
                    ih = 'SeasonCard_glow_54',
                    uh = 'SeasonCard_divider_12',
                    oh = 'SeasonCard_divider__left_33',
                    lh = 'SeasonCard_divider__right_46',
                    ch = 'SeasonCard_laceDivider_68',
                    dh = 'SeasonCard_laceDividerInner_72',
                    mh = 'SeasonCard_laceDividerInner__active_82',
                    _h = R.strings.comp7.yearlyStatistics,
                    Eh = [hp.JustStarted, hp.Active, hp.EndSoon],
                    gh = (0, J.Pi)(({ index: e, className: t }) => {
                        const a = Cp().model,
                            n = a.computes.seasonCard(e),
                            s = n.rank,
                            i = n.division,
                            u = n.hasRankReceived,
                            o = a.computes.seasonScheduleInfo(e),
                            l = o.state,
                            c = o.name,
                            d = B().mediaSize,
                            m = Eh.includes(l);
                        return r().createElement(
                            'div',
                            { className: f()(ah, t) },
                            0 === e && r().createElement('div', { className: f()(uh, oh) }),
                            r().createElement('div', { className: nh }, _h.seasonName.$num(e)),
                            r().createElement(Up, { index: e }),
                            u
                                ? r().createElement(Pa, {
                                      rank: s,
                                      size: th(d),
                                      seasonName: c,
                                      division: i,
                                      className: rh,
                                  })
                                : r().createElement(Ju, { size: th(d), seasonName: c, className: rh }),
                            r().createElement(Hp, { index: e }),
                            r().createElement(eh, { index: e }),
                            r().createElement(Np, { className: ch, classNames: { divider: f()(dh, m && mh) } }),
                            m && r().createElement('div', { className: ih }),
                            l === hp.End && u && r().createElement(Ip, { index: e, className: sh }),
                            r().createElement('div', { className: f()(uh, lh) }),
                        );
                    }),
                    ph = 'YearlyStatisticsPage_base_87',
                    hh = 'YearlyStatisticsPage_heading_4b',
                    vh = 'YearlyStatisticsPage_contentWrapper_24',
                    bh = 'YearlyStatisticsPage_cardWrapper_dd',
                    fh = 'YearlyStatisticsPage_cardWrapper__left_43',
                    Ch = 'YearlyStatisticsPage_cardWrapper__right_8c',
                    Ah = 'YearlyStatisticsPage_cardWrapper__seasonNotStarted_80',
                    Dh = 'YearlyStatisticsPage_seasonCard_b6',
                    Fh = (0, J.Pi)(() => {
                        const e = Cp().model.computes,
                            t = (0, Pe.useSpring)(ut);
                        return r().createElement(
                            'div',
                            { className: ph },
                            r().createElement(
                                'div',
                                { className: hh },
                                r().createElement(
                                    it,
                                    { className: re },
                                    R.strings.comp7.page.heading.yearlyStatistics(),
                                ),
                                r().createElement(Wr, null),
                            ),
                            r().createElement(
                                Pe.animated.div,
                                { style: t, className: vh },
                                ia(e.seasonCardsLength(), (t) =>
                                    r().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: f()(
                                                bh,
                                                0 === t && fh,
                                                t === e.seasonCardsLength() - 1 && Ch,
                                                e.isSeasonNotStarted(t) && Ah,
                                            ),
                                        },
                                        r().createElement(Fp, { index: t }),
                                        r().createElement(gh, { index: t, className: Dh }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    wh = {
                        [le.Progression]: () =>
                            r().createElement(as, { options: de.PROGRESSION_PAGE }, r().createElement(Mo, null)),
                        [le.RankRewards]: () =>
                            r().createElement(Ho, { options: de.RANK_REWARDS_PAGE }, r().createElement(lc, null)),
                        [le.WeeklyQuests]: () =>
                            r().createElement(M_, { options: de.WEEKLY_QUESTS_PAGE }, r().createElement(rg, null)),
                        [le.Leaderboard]: () =>
                            r().createElement(gt, { options: de.LEADERBOARD_PAGE }, r().createElement(Qr, null)),
                        [le.YearlyRewards]: () =>
                            r().createElement(_g, { options: de.YEARLY_REWARDS_PAGE }, r().createElement(pp, null)),
                        [le.Shop]: () => r().createElement(gc, { options: de.SHOP_PAGE }, r().createElement(x_, null)),
                        [le.YearlyStatistics]: () =>
                            r().createElement(fp, { options: de.YEARLY_STATISTICS_PAGE }, r().createElement(Fh, null)),
                    },
                    Bh = ({ pageView: e }) => {
                        const t = wh[e];
                        return t ? r().createElement(t, null) : (console.error('Unreachable code: ViewResolver'), null);
                    },
                    yh = {
                        '--pageContentWidth': '78vw',
                        base: 'App_base_ef',
                        base__qualification: 'App_base__qualification_73',
                        base__progression: 'App_base__progression_3b',
                        base__leaderboard: 'App_base__leaderboard_da',
                        season__first: 'App_season__first_da',
                        season__second: 'App_season__second_0f',
                        season__third: 'App_season__third_86',
                        base__rankRewards: 'App_base__rankRewards_55',
                        base__weeklyQuests: 'App_base__weeklyQuests_58',
                        base__shop: 'App_base__shop_ab',
                        base__yearlyRewards: 'App_base__yearlyRewards_0a',
                        viewContainer: 'App_viewContainer_81',
                        sidebar: 'App_sidebar_95',
                        sidebar__medium: 'App_sidebar__medium_20',
                        info: 'App_info_e9',
                        whatsNewButton: 'App_whatsNewButton_cb',
                        whatsNewIcon: 'App_whatsNewIcon_7b',
                        whatsNewGlow: 'App_whatsNewGlow_0b',
                    },
                    Sh = { base: yh.whatsNewButton, icon: yh.whatsNewIcon, glow: yh.whatsNewGlow },
                    Nh = (0, J.Pi)(() => {
                        const e = ge(),
                            t = e.model,
                            a = e.controls,
                            n = q().model,
                            s = oe(),
                            i = t.root.get().pageViewId,
                            u = t.computes.isProgressionInQualification();
                        return r().createElement(
                            'div',
                            {
                                className: f()(
                                    yh.base,
                                    u && !ue() && yh.base__qualification,
                                    !u && yh[`base__${ce[i]}`],
                                    yh[`season__${n.season.name.get()}`],
                                ),
                            },
                            r().createElement(
                                'div',
                                { className: yh.viewContainer },
                                r().createElement(Bh, { pageView: i }),
                            ),
                            r().createElement(
                                Ne,
                                { options: de.TABS },
                                r().createElement(Ze, {
                                    pageView: i,
                                    className: f()(yh.sidebar, s.isMedium && yh.sidebar__medium),
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: yh.info },
                                r().createElement(Z, {
                                    caption: R.strings.comp7.infoPageButtonLabel(),
                                    type: 'info',
                                    side: 'left',
                                    onClick: a.openInfoPage,
                                }),
                                r().createElement(Z, {
                                    caption: R.strings.comp7.whatsNewButtonLabel(),
                                    type: 'info',
                                    side: 'left',
                                    onClick: a.openWhatsNewScreen,
                                    classNames: Sh,
                                }),
                            ),
                            r().createElement(ie, { onClose: a.close }),
                        );
                    });
                engine.whenReady.then(() => {
                    O().render(
                        r().createElement(
                            I,
                            null,
                            r().createElement(
                                Ee,
                                null,
                                r().createElement(G, { options: de.SCHEDULE }, r().createElement(Nh, null)),
                            ),
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
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, n) => {
            if (!t) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, a, n] = deferred[o], s = !0, i = 0; i < t.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((s = !1), n < r && (r = n));
                    if (s) {
                        deferred.splice(o--, 1);
                        var u = a();
                        void 0 !== u && (e = u);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, a, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (__webpack_require__.j = 992),
        (() => {
            var e = { 992: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var n,
                        r,
                        [s, i, u] = a,
                        o = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (u) var l = u(__webpack_require__);
                    }
                    for (t && t(a); o < s.length; o++)
                        (r = s[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [926], () => __webpack_require__(3528));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
