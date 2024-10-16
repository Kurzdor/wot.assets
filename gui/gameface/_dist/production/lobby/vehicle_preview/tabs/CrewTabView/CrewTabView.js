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
                    t.d(u, { mouse: () => c, off: () => s, on: () => l, onResize: () => r, onScaleUpdated: () => i });
                var n = t(472),
                    a = t(176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    l = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
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
                                        i = o[u]((e) => t([e, 'outside']));
                                    function l(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, l),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, l),
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
            959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => l,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(993);
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
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            993: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
            },
            472: (e, u, t) => {
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
            138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(959),
                    a = t(514);
                const r = { view: t(641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i });
                var n = t(959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(472);
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
            641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => C,
                        getScale: () => g,
                        getSize: () => _,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => b,
                        isFocused: () => p,
                        pxToRem: () => h,
                        remToPx: () => f,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    });
                var n = t(722),
                    a = t(112),
                    r = t(538),
                    i = t(566);
                const l = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, l);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, l);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: f(u.x), y: f(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function C() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    k = {
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
            566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => o });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    l = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
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
                    o = {
                        close(e) {
                            s('popover' === e ? a : i);
                        },
                        minimize() {
                            s(l);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(138);
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
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(976);
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
            976: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => r.Z, B3: () => s, Z5: () => i.Z5, B0: () => l, ry: () => h });
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
                var r = t(358);
                var i = t(613);
                let l;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(l || (l = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let E, _;
                !(function (e) {
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
                })(E || (E = {})),
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
                    })(_ || (_ = {}));
                var m = t(138);
                const A = ['args'];
                function F(e, u, t, n, a, r, i) {
                    try {
                        var l = e[r](i),
                            s = l.value;
                    } catch (e) {
                        return void t(e);
                    }
                    l.done ? u(s) : Promise.resolve(s).then(n, a);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                            F(r, n, a, i, l, 'next', e);
                                        }
                                        function l(e) {
                                            F(r, n, a, i, l, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    f = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
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
                    D = () => f(l.CLOSE),
                    p = (e, u) => {
                        e.keyCode === E.ESCAPE && u();
                    };
                var B = t(572);
                const b = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: l,
                        NumberFormatType: s,
                        RealFormatType: o,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => f(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => f(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            f(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                o = s.x,
                                c = s.y,
                                d = s.width,
                                E = s.height,
                                _ = {
                                    x: m.O.view.pxToRem(o) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            f(l.POP_OVER, {
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
                            p(e, D);
                        },
                        handleViewEvent: f,
                        onBindingsReady: h,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
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
                        ClickOutsideManager: b,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (e, u, t) => {
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
            649: (e, u, t) => {
                'use strict';
                var n = t(138),
                    a = t(179),
                    r = t.n(a);
                const i = [];
                const l = (e) => {
                    (0, a.useEffect)(e, []);
                };
                function s() {
                    const e = (0, a.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, a.useEffect)(() => u, []),
                        (0, a.useMemo)(
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
                const o = (0, a.createContext)(null);
                const c = (e) => {
                        const u = r().useRef(null),
                            t = s(),
                            c = r().useRef(),
                            d = r().useRef(!1),
                            E = r().useCallback(() => {
                                const e = u.current;
                                if (!e) throw new Error('Element is not defined');
                                return (function (e, u) {
                                    if (u.current) {
                                        const t = u.current,
                                            n = t.width,
                                            a = t.height;
                                        if (n === e.offsetWidth && a === e.offsetHeight) return !0;
                                    }
                                    return !1;
                                })(e, c);
                            }, []),
                            _ = (function (e) {
                                const u = (0, a.useRef)(e);
                                return (
                                    (0, a.useLayoutEffect)(() => {
                                        u.current = e;
                                    }),
                                    (0, a.useCallback)((...e) => (0, u.current)(...e), i)
                                );
                            })(() => {
                                t.run(() => {
                                    const t = u.current;
                                    if (!t || !1 === (null == e.needUpdate ? void 0 : e.needUpdate())) return;
                                    const a = E();
                                    if (a && !d.current) return;
                                    const r = {
                                        width: Math.max(1, t.offsetWidth),
                                        height: Math.max(1, t.offsetHeight),
                                    };
                                    (c.current = r),
                                        n.O.view.resize(r.width, r.height),
                                        !1 === a && (null == e.onResize || e.onResize(r));
                                });
                            });
                        l(() =>
                            n.O.view.events.onTextureFrozen(() => {
                                d.current = !0;
                            }),
                        ),
                            l(() =>
                                n.O.view.events.onTextureReady(() => {
                                    d.current && c.current && n.O.view.resize(c.current.width, c.current.height),
                                        (d.current = !1);
                                }),
                            ),
                            l(
                                () => (
                                    window.addEventListener('resize', _), () => window.removeEventListener('resize', _)
                                ),
                            ),
                            r().useEffect(() => {
                                var u;
                                (null == (u = e.autoUpdate) || u) && _();
                            });
                        const m = r().useMemo(
                            () => ({
                                resize: _,
                                equalSize: E,
                                getLastSize: () => c.current,
                                getCurrentSize: () => {
                                    const e = u.current;
                                    return e
                                        ? { width: e.offsetWidth, height: e.offsetHeight }
                                        : { width: 0, height: 0 };
                                },
                                freeze: () => {
                                    (d.current = !0), n.O.view.freezeTextureBeforeResize();
                                },
                                isFrozen: () => d.current,
                            }),
                            [E, _],
                        );
                        return r().createElement(o.Provider, { value: m }, e.children(u, _));
                    },
                    d = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    E = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var _;
                function m(e, u, t) {
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
                })(_ || (_ = {}));
                const A = n.O.client.getSize('rem'),
                    F = A.width,
                    g = A.height,
                    h = Object.assign({ width: F, height: g }, m(F, g, E)),
                    f = (0, a.createContext)(h),
                    D = ['children'];
                const p = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, D);
                    const n = (0, a.useContext)(f),
                        r = n.extraLarge,
                        i = n.large,
                        l = n.medium,
                        s = n.small,
                        o = n.extraSmall,
                        c = n.extraLargeWidth,
                        E = n.largeWidth,
                        _ = n.mediumWidth,
                        m = n.smallWidth,
                        A = n.extraSmallWidth,
                        F = n.extraLargeHeight,
                        g = n.largeHeight,
                        h = n.mediumHeight,
                        p = n.smallHeight,
                        B = n.extraSmallHeight,
                        b = { extraLarge: F, large: g, medium: h, small: p, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && i) return u;
                        if (t.medium && l) return u;
                        if (t.small && s) return u;
                        if (t.extraSmall && o) return u;
                    } else {
                        if (t.extraLargeWidth && c) return d(u, t, b);
                        if (t.largeWidth && E) return d(u, t, b);
                        if (t.mediumWidth && _) return d(u, t, b);
                        if (t.smallWidth && m) return d(u, t, b);
                        if (t.extraSmallWidth && A) return d(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && F) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && B) return u;
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
                (0, a.memo)(p);
                const B = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    b = ({ children: e }) => {
                        const u = (0, a.useContext)(f),
                            t = (0, a.useState)(u),
                            i = t[0],
                            l = t[1],
                            s = (0, a.useCallback)((e, u) => {
                                const t = n.O.view.pxToRem(e),
                                    a = n.O.view.pxToRem(u);
                                l(Object.assign({ width: t, height: a }, m(t, a, E)));
                            }, []),
                            o = (0, a.useCallback)(() => {
                                const e = n.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        B(() => {
                            n.O.client.events.on('clientResized', s), n.O.client.events.on('self.onScaleUpdated', o);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    n.O.client.events.off('clientResized', s),
                                        n.O.client.events.off('self.onScaleUpdated', o);
                                },
                                [s, o],
                            );
                        const c = (0, a.useMemo)(() => Object.assign({}, i), [i]);
                        return r().createElement(f.Provider, { value: c }, e);
                    };
                var v = t(483),
                    C = t.n(v),
                    w = t(926),
                    k = t.n(w);
                let x, y, S;
                !(function (e) {
                    (e[(e.ExtraSmall = E.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = E.small.width)] = 'Small'),
                        (e[(e.Medium = E.medium.width)] = 'Medium'),
                        (e[(e.Large = E.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = E.extraLarge.width)] = 'ExtraLarge');
                })(x || (x = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = E.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = E.small.width)] = 'Small'),
                            (e[(e.Medium = E.medium.width)] = 'Medium'),
                            (e[(e.Large = E.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = E.extraLarge.width)] = 'ExtraLarge');
                    })(y || (y = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = E.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = E.small.height)] = 'Small'),
                            (e[(e.Medium = E.medium.height)] = 'Medium'),
                            (e[(e.Large = E.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = E.extraLarge.height)] = 'ExtraLarge');
                    })(S || (S = {}));
                const L = () => {
                        const e = (0, a.useContext)(f),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return x.ExtraLarge;
                                    case e.large:
                                        return x.Large;
                                    case e.medium:
                                        return x.Medium;
                                    case e.small:
                                        return x.Small;
                                    case e.extraSmall:
                                        return x.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), x.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return y.ExtraLarge;
                                    case e.largeWidth:
                                        return y.Large;
                                    case e.mediumWidth:
                                        return y.Medium;
                                    case e.smallWidth:
                                        return y.Small;
                                    case e.extraSmallWidth:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return S.ExtraLarge;
                                    case e.largeHeight:
                                        return S.Large;
                                    case e.mediumHeight:
                                        return S.Medium;
                                    case e.smallHeight:
                                        return S.Small;
                                    case e.extraSmallHeight:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function O() {
                    return (
                        (O = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        O.apply(null, arguments)
                    );
                }
                const I = {
                        [y.ExtraSmall]: '',
                        [y.Small]: k().SMALL_WIDTH,
                        [y.Medium]: `${k().SMALL_WIDTH} ${k().MEDIUM_WIDTH}`,
                        [y.Large]: `${k().SMALL_WIDTH} ${k().MEDIUM_WIDTH} ${k().LARGE_WIDTH}`,
                        [y.ExtraLarge]: `${k().SMALL_WIDTH} ${k().MEDIUM_WIDTH} ${k().LARGE_WIDTH} ${k().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [S.ExtraSmall]: '',
                        [S.Small]: k().SMALL_HEIGHT,
                        [S.Medium]: `${k().SMALL_HEIGHT} ${k().MEDIUM_HEIGHT}`,
                        [S.Large]: `${k().SMALL_HEIGHT} ${k().MEDIUM_HEIGHT} ${k().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${k().SMALL_HEIGHT} ${k().MEDIUM_HEIGHT} ${k().LARGE_HEIGHT} ${k().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [x.ExtraSmall]: '',
                        [x.Small]: k().SMALL,
                        [x.Medium]: `${k().SMALL} ${k().MEDIUM}`,
                        [x.Large]: `${k().SMALL} ${k().MEDIUM} ${k().LARGE}`,
                        [x.ExtraLarge]: `${k().SMALL} ${k().MEDIUM} ${k().LARGE} ${k().EXTRA_LARGE}`,
                    },
                    P = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, T);
                        const a = L(),
                            i = a.mediaWidth,
                            l = a.mediaHeight,
                            s = a.mediaSize;
                        return r().createElement('div', O({ className: C()(t, I[i], N[l], M[s]) }, n), u);
                    },
                    W = ['children'];
                const H = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, W);
                    return r().createElement(b, null, r().createElement(P, t, u));
                };
                var j = t(493),
                    z = t.n(j);
                var $ = t(403);
                function G() {}
                function U() {
                    return !1;
                }
                console.log;
                var V = t(174);
                function q(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return K(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? K(e, u)
                                          : void 0
                                );
                            }
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
                function K(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Y = (e) => (0 === e ? window : window.subViews.get(e));
                function Z(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                function X(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function J(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function Q(e) {
                    if (0 !== e.length) return Z(e, e.length - 1);
                }
                var ee = t(946);
                const ue = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: l, children: s, mocks: o }) {
                                const c = (0, a.useRef)([]),
                                    d = (t, a, r) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Y,
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
                                                const l = (e) => {
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
                                                    subscribe: (t, i) => {
                                                        const s = 'string' == typeof i ? `${a}.${i}` : a,
                                                            o = n.O.view.addModelObserver(s, u, !0);
                                                        return r.set(o, t), e && t(l(i)), o;
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, u) => {
                                                        const t = l(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = l(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = q(r.keys()); !(e = t()).done; ) i(e.value, u);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(a),
                                            s =
                                                'real' === t
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (i = null == r ? void 0 : r.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : o(e),
                                                            a = V.LO.box(n, { equals: U });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, V.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : o(e),
                                                            a = V.LO.box(n, { equals: U });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, V.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = o(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = V.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, V.aD)((u) => {
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
                                                                    (e, [u, t]) => ((e[t] = V.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, V.aD)((e) => {
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
                                            _ = { mode: t, model: E, externalModel: s, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && r ? r.controls(_) : u(_),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    _ = (0, a.useState)(i),
                                    m = _[0],
                                    A = _[1],
                                    F = (0, a.useState)(() => d(i, l, o)),
                                    g = F[0],
                                    h = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? h(d(m, l, o)) : (E.current = !0);
                                    }, [o, m, l]),
                                    (0, a.useEffect)(() => {
                                        A(i);
                                    }, [i]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            g.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [g],
                                    ),
                                    r().createElement(t.Provider, { value: g }, s)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = Object.assign({}, e.primitives(['isLockedCrew', 'hasDog', 'nation']), {
                                    headerModel: e.primitives(
                                        ['title', 'iconName', 'skillName', 'skillCustomName'],
                                        'headerModel',
                                    ),
                                    tankmen: e.array('tankmen'),
                                }),
                                t = (0, ee.Om)(
                                    () =>
                                        J(u.tankmen.get(), (e) =>
                                            Object.assign({}, e, {
                                                roles: J(e.roles, (e) => e),
                                                skills: {
                                                    majorSkills: J(e.skills.majorSkills, (e) => Object.assign({}, e)),
                                                    bonusSkills: J(e.skills.bonusSkills, (e) => Object.assign({}, e)),
                                                },
                                            }),
                                        ),
                                    { equals: U },
                                );
                            return Object.assign({}, u, { computes: { tankmen: t } });
                        },
                        () => G,
                    ),
                    te = ue[0],
                    ne = ue[1];
                var ae = t(976);
                const re = [
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
                function ie(e) {
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
                const le = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ae.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
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
                            l = e.onMouseDown,
                            s = e.onClick,
                            o = e.ignoreShowDelay,
                            c = void 0 !== o && o,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            g = e.targetId,
                            h = void 0 === g ? 0 : g,
                            f = e.onShow,
                            D = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, re);
                        const B = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(
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
                            v = (0, a.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (le(t, m, { isMouseEvent: !0, on: !0, arguments: ie(n) }, b),
                                    f && f(),
                                    (B.current.isVisible = !0));
                            }, [t, m, n, b, f]),
                            C = (0, a.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        le(t, m, { on: !1 }, b),
                                        B.current.isVisible && D && D(),
                                        (B.current.isVisible = !1);
                                }
                            }, [t, m, b, D]),
                            w = (0, a.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && C();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && C();
                            }, [F, C]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', C),
                                    () => {
                                        window.removeEventListener('mouseleave', C), C();
                                    }
                                ),
                                [C],
                            );
                        return F
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              C(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === E && C(), null == s || s(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === E && C(), null == l || l(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var k;
                    },
                    oe = ['children'];
                function ce() {
                    return (
                        (ce = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ce.apply(null, arguments)
                    );
                }
                const de = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, oe);
                        return r().createElement(
                            se,
                            ce(
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
                    Ee = 'crewPerkGf',
                    _e = 'vehiclePreviewCrewMember',
                    me = 100,
                    Ae = 'new_skill';
                let Fe;
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
                })(Fe || (Fe = {}));
                const ge = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function he() {
                    return (
                        (he = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        he.apply(null, arguments)
                    );
                }
                const fe = R.views.common.tooltip_window.simple_tooltip_content,
                    De = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            i = e.note,
                            l = e.alert,
                            s = e.args,
                            o = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, ge);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: n, note: i, alert: l });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [l, t, n, i, s]);
                        return r().createElement(
                            se,
                            he(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? fe.SimpleTooltipHtmlContent('resId') : fe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                o,
                            ),
                            u,
                        );
                        var d;
                    };
                function pe() {
                    return (
                        (pe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        pe.apply(null, arguments)
                    );
                }
                const Be = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(De, u, n);
                    const a = u.contentId;
                    return a ? r().createElement(se, pe({}, u, { contentId: a }), n) : r().createElement(de, u, n);
                };
                var be = t(45);
                const ve = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
                t(281);
                let Ce;
                function we(e) {
                    return e.replace(/-/g, '_');
                }
                function ke(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Ce || (Ce = {}));
                const xe = (e) => e.replace(/&nbsp;/g, ' '),
                    ye =
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
                        (e) => {
                            return (
                                (u = R.strings.common.percentValue()),
                                (t = { value: e }),
                                u.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]))
                            );
                            var u, t;
                        });
                let Se, Le, Te;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Se || (Se = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Le || (Le = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Te || (Te = {}));
                const Oe = { [Te.NBSP]: Se.NoBreakSymbol, [Te.ZWNBSP]: Se.NoBreakSymbol, [Te.NEW_LINE]: Se.LineBreak },
                    Re = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Ie = {
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
                    Ne = 'renderers_noBreakWrapper_10',
                    Me = 'renderers_lineBreak_b5',
                    Pe = 'renderers_newLine_bd',
                    We = 'renderers_word_f3',
                    He = (e) => ({ color: `#${e}` }),
                    je = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? Ie[n]
                                ? r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: C()(We, Ie[n]) },
                                      e,
                                  )
                                : r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: We, style: He(n) },
                                      e,
                                  )
                            : r().createElement('span', { key: t, 'data-block-type': u.blockType, className: We }, e);
                    },
                    ze = {
                        [Se.Word]: je,
                        [Se.NoBreakSymbol]: je,
                        [Se.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            r().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => r().createElement(r().Fragment, { key: t }, e)),
                            ),
                        [Se.LineBreak]: ({ key: e }) =>
                            r().createElement('span', { key: e, 'data-block-type': Se.LineBreak, className: Me }),
                        [Se.NewLine]: ({ elementList: e, key: u }) =>
                            r().createElement('span', { key: u, 'data-block-type': Se.NewLine, className: Pe }, e),
                        [Se.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            r().createElement(
                                'span',
                                { key: u, 'data-block-type': Se.NoBreakWrapper, className: Ne },
                                e,
                            ),
                    },
                    $e = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const i = `${t}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        u = e.blockType,
                                        t = $e(e, ze[u], i);
                                    n.push(...t);
                                } else n.push(u({ elementList: [a], textBlock: e, key: i }));
                            }),
                            n
                        );
                    },
                    Ge = (e) => {
                        const u = [];
                        return (
                            e.forEach((e, t) => {
                                u.push(
                                    ...((e, u) => {
                                        const t = [],
                                            n = e.blockType,
                                            a = ze[n],
                                            r = $e(e, a, u);
                                        return (
                                            n === Se.NoBreakWrapper
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
                    Ue = (e, u, t, n) => {
                        let a = u.exec(e),
                            r = 0;
                        for (; a; ) r !== a.index && t(e.slice(r, a.index)), n(a), (r = u.lastIndex), (a = u.exec(e));
                        r !== e.length && t(e.slice(r));
                    },
                    Ve = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    qe = (e) => {
                        const u = [];
                        return (
                            Ue(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var t;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? u.push(...((t = e), t.match(Ve) || []))
                                        : u.push(...e.split(''));
                                },
                                (e) => {
                                    u.push(e[0]);
                                },
                            ),
                            u
                        );
                    },
                    Ke = Re
                        ? (e) => {
                              const u = [];
                              return (
                                  Ue(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(...qe(e[0]));
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(e);
                              if (!n) return [e];
                              const a = [];
                              let r = 0;
                              for (; n; ) {
                                  const i = u.justifyContent === Le.FlexEnd ? n.index : t.lastIndex;
                                  a.push(e.slice(r, i)), (r = i), (n = t.exec(e));
                              }
                              return r !== e.length && a.push(e.slice(r)), a;
                          },
                    Ye = (e, u = '', t) => {
                        const n = [];
                        return (
                            Ue(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Se.Word, colorTag: u, childList: Ke(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        a = Oe[t.charAt(0)];
                                    a === Se.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: Se.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: Se.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : n.push({ blockType: a, colorTag: u, childList: [t] });
                                },
                            ),
                            n
                        );
                    },
                    Ze = (e, u, t = '', n) => {
                        const a = [];
                        return (
                            Ue(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...Ye(e, t, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        i = void 0 === u[r] ? e[0] : u[r];
                                    'string' == typeof i || 'number' == typeof i
                                        ? a.push(...Ye(String(i), t, n))
                                        : a.push({ blockType: Se.Binding, colorTag: t, childList: [i] });
                                },
                            ),
                            a
                        );
                    },
                    Xe = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === Se.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: Se.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    Je = (e, u = {}, t) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Se.NoBreakSymbol
                                        ? ((t = !0), u.push(...Xe(u.pop(), e)))
                                        : (t ? u.push(...Xe(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const n = [];
                                return (
                                    Ue(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...Ze(e, u, '', t));
                                        },
                                        (e) => {
                                            n.push(...Ze(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    n
                                );
                            })(xe(e).replace(/&zwnbsp;/g, '\ufeff'), u, t),
                        );
                        return Ge(n);
                    },
                    Qe = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    eu = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    uu = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = eu(e, u),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            i = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / r);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const l = Math.max(t + i, 0);
                        return a < l ? [!1, 0] : [!0, l];
                    },
                    tu = (e, u, t, n, a, i) => {
                        let l = -1,
                            s = null;
                        for (let o = t; o >= 0; o--) {
                            const t = e[o],
                                c = Number(e[o].getAttribute('data-block-type'));
                            if (c === Se.LineBreak || c === Se.NewLine || c === Se.Binding) continue;
                            const d = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = uu(t, n, a),
                                    c = e[0],
                                    E = e[1];
                                if (!c) {
                                    E > 0 && (a -= E);
                                    continue;
                                }
                                const _ = d.slice(0, d.length - E) + i,
                                    m = u[o];
                                (s = r().cloneElement(m, m.props, _)), (l = o);
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[o],
                                    E = c.props.children,
                                    _ = tu(e, E, e.length - 1, n, a, i),
                                    m = _[0],
                                    A = _[1];
                                if (!(m < 0)) {
                                    const e = E.slice(0, m);
                                    (s = r().cloneElement(c, c.props, e, A)), (l = o);
                                    break;
                                }
                                a -= d.length;
                            }
                        }
                        return [l, s];
                    },
                    nu = (e, u, t, n = '...') => {
                        const a = [...u],
                            r = e.current;
                        if (!r) return [a, !1];
                        const i = t.height,
                            l = t.width,
                            s = r.lastElementChild;
                        if (!Qe(s, i) && eu(s, l) <= 0) return [a, !1];
                        const o = r.children,
                            c = ((e, u) => {
                                let t = 0,
                                    n = e.length - 1;
                                for (; n - t >= 0; ) {
                                    const a = t + Math.ceil(0.5 * (n - t));
                                    Qe(e[a], u) ? (n = a - 1) : (t = a + 1);
                                }
                                return t - 1;
                            })(o, i);
                        if (c < 0) return [a, !1];
                        const d = tu(o, a, c, l, n.length, n),
                            E = d[0],
                            _ = d[1];
                        return _ && (a.splice(E, 1, _), a.splice(E + 1)), [a, !0];
                    },
                    au = r().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: n,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: l = !1,
                            customTooltipArgs: s,
                            targetId: o,
                            justifyContent: c = Le.FlexStart,
                            alignContent: d = Le.FlexStart,
                            truncateIdentify: E = '...',
                        }) => {
                            const _ = (0, a.useRef)(null),
                                m = (0, a.useRef)({ height: 0, width: 0 }),
                                A = (0, a.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                F = A[0],
                                g = A[1],
                                h = (0, a.useMemo)(() => Je(e, n, { justifyContent: c }), [n, c, e]),
                                f = (0, a.useMemo)(() => {
                                    if (
                                        i &&
                                        F.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, s, {
                                                stringifyKwargs: n ? JSON.stringify(n) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [n, i, o, e, s, F.isTruncated]),
                                D = (0, a.useCallback)(
                                    (e) => {
                                        (m.current.width = e.contentRect.width),
                                            (m.current.height = e.contentRect.height);
                                        const u = nu(_, h, m.current, E),
                                            n = u[0],
                                            a = u[1];
                                        g({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), t && t(a);
                                    },
                                    [t, E, h],
                                ),
                                p = (0, a.useMemo)(() => ({ justifyContent: c, alignContent: d }), [d, c]);
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
                                        const u = new be.Z((e) => n(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [n, t, e]);
                                })(_, D, l),
                                r().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            ve.base,
                                            u,
                                            ve.base__zeroPadding,
                                            l && ve.base__isTruncationAvailable,
                                        ),
                                        style: p,
                                    },
                                    r().createElement('div', { className: ve.unTruncated, ref: _ }, h),
                                    r().createElement(
                                        Be,
                                        {
                                            tooltipArgs: f,
                                            className: C()(
                                                ve.tooltip,
                                                ve[`tooltip__justify-${c}`],
                                                ve[`tooltip__align-${d}`],
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    ve.truncated,
                                                    !F.isTruncateFinished && l && ve.truncated__hide,
                                                ),
                                                style: p,
                                            },
                                            F.isTruncateFinished && l ? F.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    ru = {
                        base: 'SkillIcon_base_43',
                        base__c_22x22: 'SkillIcon_base__c_22x22_14',
                        base__medium: 'SkillIcon_base__medium_d0',
                        base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                        base__big: 'SkillIcon_base__big_ae',
                        base__c_80x80: 'SkillIcon_base__c_80x80_79',
                        base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                        base__dialogs: 'SkillIcon_base__dialogs_e5',
                    };
                let iu;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(iu || (iu = {}));
                const lu = r().memo(function ({ iconName: e, size: u = iu.c24x24, className: t }) {
                        var n;
                        const a = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(u)) ? void 0 : n.$dyn(e);
                        return r().createElement('div', {
                            style: null !== a ? { backgroundImage: `url(${a})` } : void 0,
                            className: C()(ru.base, ru[`base__${u}`], t),
                        });
                    }),
                    su = 'Header_base_bf',
                    ou = 'Header_title_ea',
                    cu = 'Header_base__noSkill_66',
                    du = 'Header_noCrew_96',
                    Eu = 'Header_skill_3f',
                    _u = (0, $.Pi)(function () {
                        const e = ne().model.headerModel,
                            u = e.skillName.get(),
                            t = e.iconName.get(),
                            n = e.title.get();
                        return r().createElement(
                            de,
                            {
                                isEnabled: Boolean(u) && u !== Ae,
                                args: { tooltipId: Ee, skillName: u, customName: e.skillCustomName.get() },
                            },
                            r().createElement(
                                'div',
                                { className: C()(su, !u && cu) },
                                Boolean(t) &&
                                    r().createElement(lu, {
                                        iconName: e.iconName.get(),
                                        size: iu.c52x52,
                                        className: Eu,
                                    }),
                                n
                                    ? r().createElement(au, { text: n, classMix: ou })
                                    : r().createElement(
                                          'div',
                                          { className: du },
                                          R.strings.tooltips.vehiclePreview.vehiclePanel.info.header.noCrew(),
                                      ),
                            ),
                        );
                    });
                function mu(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let Au;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(Au || (Au = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let Fu;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (e.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (e.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (e.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (e.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (e.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (e.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (e.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (e.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (e.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(Fu || (Fu = {}));
                let gu;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(gu || (gu = {}));
                const hu = 'Dog_base_87',
                    fu = 'Dog_dogIcon_15',
                    Du = 'Dog_name_d5',
                    pu = r().memo(function ({ nation: e }) {
                        const u = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(e);
                        return r().createElement(
                            De,
                            { ignoreMouseClick: !0, header: u.header(), body: u.body() },
                            r().createElement(
                                'div',
                                { className: hu, onClick: () => mu(Fu.RUDY) },
                                r().createElement('div', { className: fu }),
                                r().createElement(
                                    'div',
                                    { className: Du },
                                    R.strings.menu.hangar.crew.rody.dog.$dyn(e).name(),
                                ),
                            ),
                        );
                    }),
                    Bu = {
                        base: 'RoleIcon_base_51',
                        base__small: 'RoleIcon_base__small_68',
                        base__c_14x14: 'RoleIcon_base__c_14x14_8f',
                        base__c_18x18: 'RoleIcon_base__c_18x18_0b',
                        base__c_24x24_new: 'RoleIcon_base__c_24x24_new_fe',
                        base__c_24x24: 'RoleIcon_base__c_24x24_52',
                        base__c_30x30_red: 'RoleIcon_base__c_30x30_red_85',
                        base__c_30x30: 'RoleIcon_base__c_30x30_e9',
                        base__c_40x40: 'RoleIcon_base__c_40x40_99',
                        base__medium: 'RoleIcon_base__medium_5d',
                        base__white: 'RoleIcon_base__white_2a',
                        base__big: 'RoleIcon_base__big_b4',
                    };
                let bu;
                !(function (e) {
                    (e.small = 'small'),
                        (e.c14x14 = 'c_14x14'),
                        (e.c18x18 = 'c_18x18'),
                        (e.c24x24 = 'c_24x24'),
                        (e.c24x24_new = 'c_24x24_new'),
                        (e.c30x30 = 'c_30x30'),
                        (e.c40x40 = 'c_40x40'),
                        (e.c30x30_red = 'c_30x30_red'),
                        (e.medium = 'medium'),
                        (e.white = 'white'),
                        (e.big = 'big');
                })(bu || (bu = {}));
                const vu = r().memo(function ({ role: e, size: u = bu.c30x30, className: t }) {
                        const n = (0, a.useMemo)(() => {
                            try {
                                var t;
                                const n =
                                    null == (t = R.images.gui.maps.icons.tankmen.roles.$dyn(u))
                                        ? void 0
                                        : t.$dyn(we(e));
                                if (!n) throw Error;
                                return { backgroundImage: `url(${n})` };
                            } catch (u) {
                                console.error('Cant find resource in RoleIcon: ', e);
                            }
                        }, [e, u]);
                        return r().createElement('div', { style: n, className: C()(Bu.base, Bu[`base__${u}`], t) });
                    }),
                    Cu = 'EmptySlot_base_33',
                    wu = 'EmptySlot_role_00',
                    ku = 'EmptySlot_roleName_52',
                    xu = r().memo(function ({ roles: e, index: u }) {
                        const t = e[0];
                        return r().createElement(
                            de,
                            { ignoreMouseClick: !0, isEnabled: !0, args: { tooltipId: _e, index: u } },
                            r().createElement(
                                'div',
                                { className: Cu },
                                r().createElement(vu, { role: t, className: wu }),
                                r().createElement('div', { className: ku }, R.strings.item_types.tankman.roles.$dyn(t)),
                            ),
                        );
                    }),
                    yu = {
                        base: 'EfficiencyIndicator_base_34',
                        base__big: 'EfficiencyIndicator_base__big_a1',
                        base__large: 'EfficiencyIndicator_base__large_dc',
                        base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                        percent: 'EfficiencyIndicator_percent_6b',
                        percent__full: 'EfficiencyIndicator_percent__full_30',
                        icon: 'EfficiencyIndicator_icon_da',
                    };
                let Su;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large');
                })(Su || (Su = {}));
                const Lu = (0, a.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: u = -1,
                        className: t,
                        targetId: n = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: a = Su.Normal,
                    }) => {
                        const i = -1 === e,
                            l = i
                                ? { tooltipId: 'crewSkillUntrained' }
                                : { tooltipId: 'skillsEfficiency', skillEfficiency: e, tankmanID: u };
                        return r().createElement(
                            de,
                            { targetId: n, args: l, isEnabled: -1 !== u },
                            r().createElement(
                                'div',
                                { className: C()(yu.base, yu[`base__${a}`], i && yu.base__untrained, t) },
                                i
                                    ? r().createElement('div', { className: yu.icon })
                                    : r().createElement(
                                          'div',
                                          { className: C()(yu.percent, 1 === e && yu.percent__full) },
                                          ye(ae.Z5.getNumberFormat(100 * e, ae.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
                var Tu = t(30);
                const Ou = r().memo(function ({ blinkStyle: e, isEnabled: u, children: t }) {
                    return r().createElement(Tu.animated.div, { style: u && e ? e : void 0 }, t);
                });
                var Ru = t(613);
                Date.now(), Ru.Ew.getRegionalDateTime, Ru.Ew.getFormattedDateTime;
                const Iu = (e, u) => {
                    const t = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            (u && !u(e)) || (t.current = e);
                        }, [u, e]),
                        t.current
                    );
                };
                ae.Sw.instance;
                let Nu;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Nu || (Nu = {}));
                ae.Sw.instance;
                const Mu = Iu,
                    Pu = 'AcceleratedTrainingIcon_base_4f',
                    Wu = 'AcceleratedTrainingIcon_icon_45',
                    Hu = (0, a.memo)(({ classMix: e, targetId: u }) =>
                        r().createElement(
                            De,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                                targetId: u,
                            },
                            r().createElement(
                                'div',
                                { className: C()(Pu, e) },
                                r().createElement('div', { className: Wu }),
                            ),
                        ),
                    );
                let ju, zu, $u, Gu, Uu, Vu, qu;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Default = 'default'),
                        (e.Overlap = 'overlap'),
                        (e.ExtraOverlap = 'extraOverlap');
                })(ju || (ju = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp');
                    })(zu || (zu = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.NoMargins = 'noMargins'),
                            (e.ReducedMargins = 'reducedMargins'),
                            (e.OnlyLearningOverlap = 'onlyLearningOverlap'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap'),
                            (e.ExtraOverlapWithLevel = 'extraOverlapWithLevel'),
                            (e.ExtraOverlapWithEfficiency = 'extraOverlapWithEfficiency'),
                            (e.ExtraOverlapWithLevelAndEfficiency = 'extraOverlapWithLevelAndEfficiency');
                    })($u || ($u = {})),
                    (function (e) {
                        (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                    })(Gu || (Gu = {})),
                    (function (e) {
                        (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                    })(Uu || (Uu = {})),
                    (function (e) {
                        (e.Major = 'major'), (e.Bonus = 'bonus');
                    })(Vu || (Vu = {})),
                    (function (e) {
                        (e.Learned = 'learned'), (e.Learning = 'learning');
                    })(qu || (qu = {}));
                const Ku = (e) => (e.level < me ? qu.Learning : qu.Learned),
                    Yu = (e) =>
                        (function (e, u) {
                            for (let t = e.length - 1; t >= 0; t--) {
                                const n = X(e[t]);
                                if (u(n, t, e)) return n;
                            }
                        })(e, (e) => e.level === me),
                    Zu = ({ name: e, level: u, customName: t, skillType: n, skillIndex: a, tooltipData: r }) => {
                        const i = { targetId: r.targetId, isEnabled: r.isEnabled };
                        return e === Ae
                            ? n === Vu.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: r.tankmanID, skillIndex: a }, r.args),
                                      },
                                      i,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      i,
                                  )
                            : Object.assign(
                                  {
                                      contentId:
                                          R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                              'resId',
                                          ),
                                      args: Object.assign(
                                          {
                                              tooltipId: Ee,
                                              tankmanID: r.tankmanID,
                                              skillName: e,
                                              isBonus: n === Vu.Bonus,
                                              level: u,
                                              customName: t,
                                          },
                                          r.args,
                                      ),
                                  },
                                  i,
                              );
                    },
                    Xu = (e, u) => (e === Uu.c44x44 ? Su.Large : u ? Su.Big : Su.Normal),
                    Ju = (e, u) => {
                        const t = Z(e, u);
                        return null == t ? void 0 : t.name;
                    },
                    Qu = (e, u) => {
                        const t = Z(e, u);
                        return null == t ? void 0 : t.level;
                    },
                    et = 33,
                    ut = 0,
                    tt = !0,
                    nt = 'play';
                const at = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function rt() {
                    return (
                        (rt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        rt.apply(null, arguments)
                    );
                }
                const it = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            n = e.getImageSource,
                            i = e.frameCount,
                            l = e.onAnimate,
                            s = e.frameTime,
                            o = void 0 === s ? et : s,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? ut : c,
                            E = e.lastFrameIndex,
                            _ = void 0 === E ? i - 1 : E,
                            m = e.loop,
                            A = void 0 === m ? tt : m,
                            F = e.state,
                            g = void 0 === F ? nt : F,
                            h = e.onAnimationDone,
                            f = e.onAnimationComplete,
                            D = e.poster,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, at);
                        const B = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = B.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (g) {
                                    case 'play':
                                        return (function () {
                                            const e = ot(d, _, n),
                                                u = lt(d, _),
                                                a = window.setInterval(() => {
                                                    const n = u(),
                                                        r = e.get(n);
                                                    r
                                                        ? (null == l || l(n, r),
                                                          t(r),
                                                          n === _ &&
                                                              (null == f || f(),
                                                              A || (null == h || h(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, o);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && D ? { path: D, x: 0, y: 0 } : n(d),
                                                u = new Image();
                                            u.src = e.path;
                                            const a = () => t(st(e, u));
                                            return (
                                                u.addEventListener('load', a), () => u.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [o, n, d, _, A, l, f, h, D, g]),
                            r().createElement('canvas', rt({}, p, { width: u, height: t, ref: B }))
                        );
                    }),
                    lt = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return (t += 1), t > u && (t = e), n;
                        };
                    },
                    st = (e, u) => Object.assign({}, e, { img: u }),
                    ot = (e, u, t) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= u; r++) {
                            const e = t(r),
                                u = a[e.path];
                            if (u) n.set(r, st(e, u));
                            else {
                                const u = new Image();
                                (a[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, st(e, u));
                            }
                        }
                        return n;
                    };
                function ct(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (n) => {
                        const a = n % t,
                            r = (a % u.columns) * e.width,
                            i = Math.trunc(a / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / t)), x: r, y: i };
                    };
                }
                function dt(e) {
                    return (u) => `${e}${u}`;
                }
                const Et = () => {
                        const e = (0, a.useState)(n.O.view.getScale()),
                            u = e[0],
                            t = e[1];
                        return (
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    t(n.O.view.getScale());
                                };
                                return (
                                    window.addEventListener('resize', e),
                                    () => {
                                        window.removeEventListener('resize', e);
                                    }
                                );
                            }, []),
                            u
                        );
                    },
                    _t = [
                        'width',
                        'height',
                        'getSrcByFrame',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                        'loop',
                        'state',
                        'onAnimationComplete',
                        'revers',
                    ];
                function mt() {
                    return (
                        (mt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        mt.apply(null, arguments)
                    );
                }
                let At;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(At || (At = {}));
                const Ft = (e, u, t) => {
                        const n = new Image();
                        (n.src = t(u)), e.push(n);
                    },
                    gt =
                        ((0, a.memo)((e) => {
                            let u = e.width,
                                t = e.height,
                                n = e.getSrcByFrame,
                                i = e.frameCount,
                                l = e.onAnimate,
                                s = void 0 === l ? () => {} : l,
                                o = e.frameTime,
                                c = void 0 === o ? 33 : o,
                                d = e.initialFrameIndex,
                                E = void 0 === d ? 0 : d,
                                _ = e.loop,
                                m = void 0 === _ || _,
                                A = e.state,
                                F = void 0 === A ? At.Play : A,
                                g = e.onAnimationComplete,
                                h = void 0 === g ? () => {} : g,
                                f = e.revers,
                                D = void 0 !== f && f,
                                p = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, _t);
                            const B = (0, a.useRef)(null);
                            return (
                                (0, a.useEffect)(() => {
                                    const e = B.current;
                                    if (!e) return;
                                    const a = i - 1,
                                        r = e.getContext('2d'),
                                        l = (n) => {
                                            r.clearRect(0, 0, e.width, e.height), r.drawImage(n, 0, 0, u, t);
                                        };
                                    if ('stop' === F) {
                                        const e = n(0),
                                            u = new Image();
                                        u.src = e;
                                        const t = () => l(u);
                                        return u.addEventListener('load', t), () => u.removeEventListener('load', t);
                                    }
                                    const o = ((e, u, t) => {
                                            const n = [];
                                            if (t) for (let t = e; t >= 0; t--) Ft(n, t, u);
                                            else for (let t = 0; t < e; t++) Ft(n, t, u);
                                            return n;
                                        })(i, n, D),
                                        d = ((e, u = 0) => {
                                            let t = u;
                                            return () => {
                                                const u = t;
                                                return (t += 1), t > e && (t = 0), u;
                                            };
                                        })(a, E),
                                        _ = setInterval(() => {
                                            const e = d(),
                                                u = o[e];
                                            l(o[e]), s(e, u), e === a && (h(), m || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [i, c, n, t, E, m, s, h, F, u, D]),
                                r().createElement('canvas', mt({}, p, { width: u, height: t, ref: B }))
                            );
                        }),
                        (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2)),
                    ht = (e) => -(Math.cos(Math.PI * e) - 1) / 2,
                    ft = {
                        base: 'AnimatedLostSkill_base_55',
                        base__c_24x24: 'AnimatedLostSkill_base__c_24x24_d5',
                        base__c_44x44: 'AnimatedLostSkill_base__c_44x44_72',
                        icon: 'AnimatedLostSkill_icon_d4',
                    },
                    Dt = r().memo(function ({ type: e, index: u, totalAmount: t, className: i, size: l }) {
                        const s = (0, a.useState)(At.Stop),
                            o = s[0],
                            c = s[1],
                            d = Et(),
                            E =
                                l === Uu.c44x44
                                    ? ((e) => ({
                                          width: 96,
                                          height: 96,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 2, columns: 21 },
                                          getChunkPath: dt(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                          ),
                                      }))(e)
                                    : ((e) => ({
                                          width: 64,
                                          height: 64,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 1, columns: 24 },
                                          getChunkPath: dt(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                          ),
                                      }))(e),
                            _ = ct(E),
                            m = l === Uu.c44x44 ? 60 : 36,
                            A = (0, Tu.useSpring)(
                                () => ({
                                    from: { x: 0 },
                                    to: { x: n.O.view.remToPx(m) },
                                    config: { duration: 300, easing: gt },
                                    delay: 600 - 100 * u,
                                }),
                                [u, m, d],
                            )[0];
                        return (
                            (0, a.useEffect)(() => {
                                const e = setTimeout(() => c(At.Play), 100 * (t - 1) - 100 * u);
                                return () => clearTimeout(e);
                            }, [u, t]),
                            r().createElement(
                                De,
                                { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                                r().createElement(
                                    Tu.animated.div,
                                    { style: A, className: C()(ft.base, ft[`base__${l}`], i) },
                                    r().createElement(
                                        'div',
                                        { className: ft.icon },
                                        r().createElement(it, {
                                            width: E.width,
                                            height: E.height,
                                            frameCount: E.frameCount,
                                            getImageSource: _,
                                            loop: !1,
                                            state: o,
                                            style: { transform: `scale(${d})` },
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    pt = 'AnimatedNewSkill_base_0f';
                function Bt(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return bt(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? bt(e, u)
                                          : void 0
                                );
                            }
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
                function bt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const vt = new Map();
                let Ct = null;
                const wt = () => {
                        vt.size
                            ? Ct ||
                              (Ct = window.setInterval(() => {
                                  for (var e, u = Bt(vt.values()); !(e = u()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : Ct && (clearInterval(Ct), (Ct = null));
                    },
                    kt = ({ type: e, state: u }) => {
                        const t = ((e, u) => ({
                                width: 24,
                                height: 24,
                                frameCount: 42,
                                chunk: { count: 1, columns: 42, rows: 1 },
                                getChunkPath: dt(`R.images.gui.maps.icons.sequence.new_skill.${e}_${u}_`),
                            }))(e, u),
                            n = ct(t),
                            i = (0, a.useState)(At.Stop),
                            l = i[0],
                            s = i[1];
                        return (
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    s(At.Play);
                                };
                                var u;
                                return (
                                    (u = e),
                                    vt.set(u, u),
                                    wt(),
                                    () =>
                                        ((e) => {
                                            vt.delete(e), wt();
                                        })(e)
                                );
                            }, []),
                            r().createElement(it, {
                                width: t.width,
                                height: t.height,
                                frameCount: t.frameCount,
                                getImageSource: n,
                                loop: !1,
                                state: l,
                                onAnimationDone: () => {
                                    s(At.Stop);
                                },
                                className: pt,
                            })
                        );
                    },
                    xt = ({ size: e, children: u, className: t }) => {
                        const n = Et(),
                            a = e === Uu.c44x44 ? 48 : 26,
                            i = (0, Tu.useSpring)({
                                from: { opacity: 0, marginRight: -a * n },
                                to: [{ marginRight: 0 }, { opacity: 1 }],
                                config: { duration: 400, easing: ht },
                                delay: 800,
                            });
                        return r().createElement(Tu.animated.div, { style: i, className: t }, u);
                    },
                    yt = r().memo(function ({ isEnabled: e, className: u, children: t }) {
                        const n = (0, Tu.useSpring)(() => ({ from: { scale: 1 } })),
                            i = n[0],
                            l = n[1];
                        return (
                            (0, a.useEffect)(() => {
                                e &&
                                    l.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: ht },
                                    });
                            }, [e, l]),
                            r().createElement(Tu.animated.div, { style: e ? i : void 0, className: u }, t)
                        );
                    });
                let St;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale');
                })(St || (St = {}));
                const Lt = r().memo(function ({
                        size: e,
                        skillsSignature: u,
                        animationType: t,
                        className: n,
                        children: a,
                    }) {
                        return t === St.Scale
                            ? r().createElement(yt, { isEnabled: !0, className: n }, a)
                            : t === St.FadeIn
                              ? r().createElement(xt, { size: e, key: u, className: n }, a)
                              : r().createElement('div', { className: n }, a);
                    }),
                    Tt = r().memo(function ({ size: e, className: u, children: t }) {
                        const n = e === Uu.c44x44 ? 48 : 26,
                            a = Et(),
                            i = (0, Tu.useSpring)(
                                () => ({
                                    from: { opacity: 1, marginRight: 0 },
                                    to: [{ opacity: 0 }, { marginRight: -n * a }],
                                    config: { duration: 400, easing: ht },
                                }),
                                [a, n],
                            )[0];
                        return r().createElement(Tu.animated.div, { style: i, className: u }, t);
                    }),
                    Ot = ['className', 'children'];
                const Rt = (e) => {
                    let u = e.className,
                        t = e.children,
                        n = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Ot);
                    return r().createElement(Be, { tooltipArgs: Zu(n), className: u }, t);
                };
                let It;
                !(function (e) {
                    (e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved');
                })(It || (It = {}));
                const Nt = {
                        base: 'Skill_base_1f',
                        base__c_24x24: 'Skill_base__c_24x24_29',
                        base__c_44x44: 'Skill_base__c_44x44_5a',
                        background: 'Skill_background_02',
                        base__borderLightYellow: 'Skill_base__borderLightYellow_09',
                        base__borderYellow: 'Skill_base__borderYellow_3e',
                        base__borderRed: 'Skill_base__borderRed_d2',
                        base__typeBonus: 'Skill_base__typeBonus_23',
                        base__disabled: 'Skill_base__disabled_85',
                        newSkillHighLight: 'Skill_newSkillHighLight_44',
                        icon: 'Skill_icon_b0',
                        disabledOverlay: 'Skill_disabledOverlay_3b',
                    },
                    Mt = { [Uu.c24x24]: iu.c22x22, [Uu.c44x44]: iu.c52x52 },
                    Pt = ({
                        size: e,
                        isIrrelevant: u,
                        efficiencyState: t,
                        type: n,
                        iconName: a,
                        name: i,
                        skillState: l,
                        battleBooster: s,
                        className: o,
                    }) => {
                        const c = s !== It.None,
                            d = ((e, u, t, n, a = gu.Normal) =>
                                e === Ae
                                    ? Gu.LightYellow
                                    : a === gu.Untrained || n
                                      ? u === qu.Learning
                                          ? Gu.Yellow
                                          : Gu.Grey
                                      : a === gu.Low
                                        ? t
                                            ? Gu.Grey
                                            : Gu.Red
                                        : u === qu.Learning
                                          ? Gu.Yellow
                                          : Gu.Grey)(i, l, c, u, t),
                            E = (!c && t === gu.Untrained) || u,
                            _ = a === Ae;
                        return r().createElement(
                            'div',
                            {
                                className: C()(
                                    Nt.base,
                                    Nt[`base__type${ke(n)}`],
                                    Nt[`base__state${ke(l)}`],
                                    Nt[`base__border${ke(d)}`],
                                    Nt[`base__${e}`],
                                    E && Nt.base__disabled,
                                    o,
                                ),
                            },
                            r().createElement('div', {
                                className: Nt.background,
                                style:
                                    n === Vu.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${d}')`,
                                          }
                                        : void 0,
                            }),
                            _ && l === qu.Learned && r().createElement('div', { className: Nt.newSkillHighLight }),
                            r().createElement(lu, { iconName: a, size: Mt[e], className: Nt.icon }),
                            E && r().createElement('div', { className: Nt.disabledOverlay }),
                        );
                    };
                function Wt() {
                    return (
                        (Wt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Wt.apply(null, arguments)
                    );
                }
                const Ht = (e, u) => (e ? St.Scale : u ? St.FadeIn : St.None),
                    jt = ({
                        index: e,
                        skill: u,
                        previousSkill: t,
                        skillState: n,
                        skillType: a,
                        size: i,
                        efficiencyState: l,
                        tooltipData: s,
                        skillsSignature: o,
                        blinkStyle: c,
                        isNewSkillAnimated: d = !1,
                        skillAnimationType: E = zu.None,
                        className: _,
                    }) => {
                        const m = E === zu.Blink || E === zu.SlideOutAndBlink,
                            A = E === zu.SlideOutAndBlink || E === zu.SlideOut,
                            F = E === zu.FadeIn,
                            g = {
                                skillIndex: e,
                                name: u.name,
                                customName: u.customName,
                                level: u.level,
                                tooltipData: s,
                                skillType: a,
                            };
                        return d && u.name === Ae && i === Uu.c24x24
                            ? r().createElement(
                                  Rt,
                                  Wt({}, g, { className: _ }),
                                  r().createElement(kt, { type: a, state: n }),
                              )
                            : r().createElement(
                                  r().Fragment,
                                  null,
                                  t &&
                                      A &&
                                      r().createElement(
                                          Tt,
                                          { size: i, className: _, key: t.name },
                                          r().createElement(
                                              Ou,
                                              { blinkStyle: c, isEnabled: m },
                                              r().createElement(
                                                  Pt,
                                                  Wt({ size: i, type: a, efficiencyState: l, skillState: n }, t),
                                              ),
                                          ),
                                      ),
                                  r().createElement(
                                      Lt,
                                      {
                                          size: i,
                                          skillsSignature: o,
                                          className: _,
                                          animationType: Ht(E === zu.ScaleUp, F),
                                      },
                                      r().createElement(
                                          Rt,
                                          g,
                                          r().createElement(
                                              Ou,
                                              { blinkStyle: c, isEnabled: m },
                                              r().createElement(
                                                  Pt,
                                                  Wt({ size: i, type: a, efficiencyState: l, skillState: n }, u),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    },
                    zt = {
                        base: 'LostLevelAnimation_base_f6',
                        level: 'LostLevelAnimation_level_f0',
                        level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                        level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                        base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                        base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                    },
                    $t = r().memo(function ({ size: e, level: u, withSlideOut: t = !0 }) {
                        const a = (0, Tu.useSpring)({ to: { val: u }, config: { duration: 150 } }),
                            i = (0, Tu.useSpring)(() => ({
                                from: { x: n.O.view.remToPx(-5), opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                config: { duration: 300, easing: gt },
                                delay: 700,
                            }))[0],
                            l = (0, Tu.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [{ opacity: 1 }, { opacity: 0 }],
                                    config: { duration: 150, easing: gt },
                                }),
                                [u],
                            )[0];
                        return r().createElement(
                            'div',
                            { className: C()(zt.base, zt[`base__${e}`]) },
                            r().createElement(
                                Tu.animated.div,
                                { style: t ? i : void 0, className: C()(zt.level, zt.level__skillLost) },
                                a.val.to((e) => ye(Math.floor(e))),
                            ),
                            r().createElement(
                                Tu.animated.div,
                                {
                                    style: t ? Object.assign({}, i, l) : l,
                                    className: C()(zt.level, zt.level__skillBlur),
                                },
                                a.val.to((e) => ye(Math.floor(e))),
                            ),
                        );
                    }),
                    Gt = 'SkillLevel_base_d2',
                    Ut = 'SkillLevel_base__highlighted_e3',
                    Vt = ({ skillLevel: e, isHighlighted: u = !1, className: t }) =>
                        r().createElement(
                            'div',
                            { className: C()(Gt, u && Ut, t) },
                            ye(
                                e > 0 && e < 0.01
                                    ? 0.01
                                    : ((e, u = 2) => {
                                          const t = Math.pow(10, u);
                                          return e % 1 > 0 ? Math.round(e * t) / t : e;
                                      })(e),
                            ),
                        ),
                    qt = ({
                        skillsAmountDiff: e,
                        size: u,
                        skillType: t,
                        wasLearned: n,
                        isAllMajorSkillsLearned: a,
                        skill: i,
                        possibleSkill: l,
                        blinkStyle: s,
                        className: o,
                    }) => {
                        const c = l || i,
                            d = void 0 !== i && void 0 !== l ? l.level - i.level : 0,
                            E = e > 0,
                            _ = e < 0 || d > 0;
                        return !c ||
                            (c.level === me && 0 === d) ||
                            ((null == l ? void 0 : l.level) === me && t === Vu.Bonus && d > 0 && !a)
                            ? null
                            : E || (d < 0 && 0 === e)
                              ? r().createElement($t, { size: u, level: c.level, withSlideOut: E })
                              : r().createElement(
                                    yt,
                                    { isEnabled: Boolean(n) },
                                    r().createElement(
                                        Ou,
                                        { blinkStyle: s, isEnabled: _ },
                                        r().createElement(Vt, { skillLevel: c.level, isHighlighted: _, className: o }),
                                    ),
                                );
                    },
                    Kt = {
                        base: 'Row_base_bb',
                        skill: 'Row_skill_fb',
                        base__c_44x44: 'Row_base__c_44x44_4f',
                        base__c_24x24: 'Row_base__c_24x24_16',
                        base__collapseNoMargins: 'Row_base__collapseNoMargins_13',
                        base__collapseOverlap: 'Row_base__collapseOverlap_2c',
                        base__collapseReducedMargins: 'Row_base__collapseReducedMargins_3b',
                        skill__last: 'Row_skill__last_0a',
                        skill__lastLearnedSkill: 'Row_skill__lastLearnedSkill_6c',
                        base__collapseOnlyLearningOverlap: 'Row_base__collapseOnlyLearningOverlap_19',
                        skill__stateLearning: 'Row_skill__stateLearning_5d',
                        base__collapseExtraOverlap: 'Row_base__collapseExtraOverlap_10',
                        base__collapseExtraOverlapWithLevel: 'Row_base__collapseExtraOverlapWithLevel_90',
                        base__collapseExtraOverlapWithEfficiency: 'Row_base__collapseExtraOverlapWithEfficiency_90',
                        base__collapseExtraOverlapWithLevelAndEfficiency:
                            'Row_base__collapseExtraOverlapWithLevelAndEfficiency_4e',
                        level: 'Row_level_56',
                        acceleratedTrainingIcon: 'Row_acceleratedTrainingIcon_c7',
                        lostSkill: 'Row_lostSkill_32',
                    },
                    Yt = ({
                        skills: e,
                        skillType: u = Vu.Major,
                        possibleSkills: t,
                        isAcceleratedTrainingVisible: n = !1,
                        collapseLayout: a = $u.None,
                        efficiencyState: i,
                        size: l,
                        tooltipData: s,
                        blinkStyle: o,
                        isSkillsEfficiencyLearning: c = !1,
                        isAllMajorSkillsLearned: d = !1,
                        isNewSkillAnimated: E = !1,
                        className: _,
                    }) => {
                        const m = void 0 === t ? e : t,
                            A = Mu(e),
                            F = Mu(m),
                            g = A && Q(A),
                            h = Q(e),
                            f = Yu(m),
                            D = Q(m),
                            p = t ? e.length - t.length : 0,
                            B = i !== gu.Low || c,
                            b = ((e) => J(e, (e) => e.name).join())(m);
                        return r().createElement(
                            'div',
                            { className: C()(Kt.base, Kt[`base__${l}`], Kt[`base__collapse${ke(a)}`], _) },
                            ((e, u, t, n, a) => {
                                if (!n || !u) return J(t, (e, u) => a(e, zu.None, u));
                                const r = new Map(J(u, ({ name: e, level: u }) => [e, u])),
                                    i = new Map(J(e, ({ name: e, level: u }) => [e, u]));
                                let l = !1;
                                return J(t, (s, o) => {
                                    const c = s.name,
                                        d = s.level,
                                        E = c === Ae,
                                        _ = Ju(e, o),
                                        m = E ? Qu(e, o) : i.get(c),
                                        A = E ? Qu(u, o) : r.get(c),
                                        F = Ju(t, o - 1),
                                        g = Ju(n, o),
                                        h = Ju(n, o + 1);
                                    let f = zu.None;
                                    return (
                                        l || c !== h || F === g || E || _ !== Ae
                                            ? E && o === t.length - 1 && l
                                                ? (f = zu.FadeIn)
                                                : (!E && !i.has(c)) || (void 0 === _ && E) || (m !== d && d === me)
                                                  ? (f = zu.Blink)
                                                  : A !== m && (f = zu.ScaleUp)
                                            : ((l = !0), (f = i.has(c) ? zu.SlideOut : zu.SlideOutAndBlink)),
                                        a(s, f, o)
                                    );
                                });
                            })(e, A, m, F, (e, t, n) => {
                                const a = Ku(e);
                                return r().createElement(jt, {
                                    key: n,
                                    index: n,
                                    skill: e,
                                    skillState: a,
                                    skillType: u,
                                    previousSkill: F && Z(F, n),
                                    skillAnimationType: t,
                                    size: l,
                                    skillsSignature: b,
                                    efficiencyState: i,
                                    tooltipData: s,
                                    blinkStyle: o,
                                    isNewSkillAnimated: E,
                                    className: C()(
                                        Kt.skill,
                                        Kt[`skill__state${ke(a)}`],
                                        e === D && Kt.skill__last,
                                        e === f && Kt.skill__lastLearnedSkill,
                                    ),
                                });
                            }),
                            B &&
                                r().createElement(qt, {
                                    skillsAmountDiff: p,
                                    size: l,
                                    wasLearned: g && h && g.level !== h.level,
                                    skillType: u,
                                    isAllMajorSkillsLearned: d,
                                    skill: h,
                                    possibleSkill: D,
                                    blinkStyle: o,
                                    className: Kt.level,
                                }),
                            n &&
                                r().createElement(Hu, {
                                    classMix: Kt.acceleratedTrainingIcon,
                                    targetId: null == s ? void 0 : s.targetId,
                                }),
                            p > 0 &&
                                ((e, u) => {
                                    const t = [];
                                    for (let n = 0; n < e; n++) t.push(u(n));
                                    return t;
                                })(p, (e) =>
                                    r().createElement(Dt, {
                                        key: e,
                                        index: e,
                                        totalAmount: p,
                                        type: u,
                                        className: Kt.lostSkill,
                                        size: l,
                                    }),
                                ),
                        );
                    };
                function Zt() {
                    return (
                        (Zt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Zt.apply(null, arguments)
                    );
                }
                const Xt = ({
                        skills: e,
                        collapseLayout: u = $u.None,
                        skillType: t = Vu.Major,
                        efficiencyState: n,
                        size: a,
                        tooltipData: i,
                        className: l,
                        isAcceleratedTrainingVisible: s,
                    }) => {
                        const o = Q(e),
                            c = Yu(e),
                            d = n !== gu.Low && (null == o ? void 0 : o.level) !== me;
                        return r().createElement(
                            'div',
                            { className: C()(Kt.base, Kt[`base__${a}`], Kt[`base__collapse${ke(u)}`], l) },
                            J(e, (e, u) => {
                                const l = Ku(e);
                                return r().createElement(
                                    Rt,
                                    {
                                        key: u,
                                        skillIndex: u,
                                        name: e.name,
                                        customName: e.customName,
                                        level: e.level,
                                        tooltipData: i,
                                        skillType: t,
                                        className: C()(
                                            Kt.skill,
                                            Kt[`skill__state${ke(l)}`],
                                            e === o && Kt.skill__last,
                                            e === c && Kt.skill__lastLearnedSkill,
                                        ),
                                    },
                                    r().createElement(
                                        Pt,
                                        Zt({ size: a, type: t, efficiencyState: n, skillState: l }, e),
                                    ),
                                );
                            }),
                            d && o && r().createElement(Vt, { skillLevel: o.level, className: Kt.level }),
                            s &&
                                r().createElement(Hu, {
                                    classMix: Kt.acceleratedTrainingIcon,
                                    targetId: null == i ? void 0 : i.targetId,
                                }),
                        );
                    },
                    Jt = {
                        base: 'Skills_base_ec',
                        efficiency: 'Skills_efficiency_d0',
                        base__c_44x44: 'Skills_base__c_44x44_c0',
                        rows: 'Skills_rows_e8',
                        bonusRow: 'Skills_bonusRow_4a',
                    };
                function Qt() {
                    return (
                        (Qt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Qt.apply(null, arguments)
                    );
                }
                const en = ({
                        data: e,
                        dataToCompare: u,
                        classes: t,
                        tankmanID: n = -1,
                        size: a = Uu.c24x24,
                        collapseType: i = ju.None,
                        isSkillTooltipEnabled: l = !1,
                        isAcceleratedTrainingVisible: s = !1,
                        isNewSkillAnimated: o = !1,
                        isEfficiencyVisible: c = !1,
                        isBonusSkillsVisible: d = !0,
                        tooltipsTargetId: E = R.invalid('resId'),
                        tooltipArgs: _,
                        blinkStyle: m,
                        children: A,
                    }) => {
                        const F = e.majorSkills,
                            g = e.bonusSkills,
                            h = e.skillsEfficiency,
                            f = (null == u ? void 0 : u.skillsEfficiency) || h,
                            D = ((e) => (-1 === e ? gu.Untrained : e < 1 ? gu.Low : gu.Normal))(h),
                            p = void 0 !== u && u.skillsEfficiency !== h,
                            B = D !== gu.Normal || c || p,
                            b = null == u ? void 0 : u.majorSkills,
                            v = null == u ? void 0 : u.bonusSkills,
                            w = v || g,
                            k = Q(w),
                            x = d && w.length > 0,
                            y = o || void 0 !== u,
                            S = 6 === (null == b ? void 0 : b.length),
                            L = ((e, u, t, n) => {
                                if (9 !== u) return $u.None;
                                switch (e) {
                                    case ju.Default:
                                        if (t && n) return $u.NoMargins;
                                        break;
                                    case ju.Overlap:
                                        if (t) return n ? $u.Overlap : $u.ReducedMargins;
                                        if (n) return $u.OnlyLearningOverlap;
                                        break;
                                    case ju.ExtraOverlap:
                                        return t && n
                                            ? $u.ExtraOverlapWithLevelAndEfficiency
                                            : t
                                              ? $u.ExtraOverlapWithEfficiency
                                              : n
                                                ? $u.ExtraOverlapWithLevel
                                                : $u.ExtraOverlap;
                                }
                                return $u.None;
                            })(i, w.length, B, D !== gu.Low && void 0 !== k && k.level < me),
                            T = {
                                size: a,
                                efficiencyState: D,
                                tooltipData: { targetId: E, isEnabled: l, tankmanID: n, args: _ },
                            };
                        return r().createElement(
                            'div',
                            { className: C()(Jt.base, Jt[`base__${a}`], null == t ? void 0 : t.base) },
                            B &&
                                r().createElement(
                                    Ou,
                                    { blinkStyle: m, isEnabled: p && y },
                                    r().createElement(Lu, {
                                        efficiencyValue: f,
                                        tankmanID: n,
                                        className: Jt.efficiency,
                                        size: Xu(a, x),
                                        targetId: E,
                                    }),
                                ),
                            A,
                            r().createElement(
                                'div',
                                { className: Jt.rows },
                                y
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(
                                              Yt,
                                              Qt(
                                                  {
                                                      skills: F,
                                                      possibleSkills: b,
                                                      blinkStyle: m,
                                                      isAcceleratedTrainingVisible: s,
                                                      isNewSkillAnimated: o,
                                                      isSkillsEfficiencyLearning: p,
                                                  },
                                                  T,
                                              ),
                                          ),
                                          x &&
                                              r().createElement(
                                                  Yt,
                                                  Qt(
                                                      {
                                                          skills: g,
                                                          skillType: Vu.Bonus,
                                                          possibleSkills: v,
                                                          className: Jt.bonusRow,
                                                          collapseLayout: L,
                                                          blinkStyle: m,
                                                          isNewSkillAnimated: o,
                                                          isAllMajorSkillsLearned: S,
                                                      },
                                                      T,
                                                  ),
                                              ),
                                      )
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(Xt, Qt({ skills: F, isAcceleratedTrainingVisible: s }, T)),
                                          x &&
                                              r().createElement(
                                                  Xt,
                                                  Qt(
                                                      {
                                                          skills: g,
                                                          skillType: Vu.Bonus,
                                                          className: Jt.bonusRow,
                                                          collapseLayout: L,
                                                      },
                                                      T,
                                                  ),
                                              ),
                                      ),
                            ),
                        );
                    },
                    un = {
                        base: 'TankmanIcon_base_f9',
                        base__big: 'TankmanIcon_base__big_98',
                        base__small: 'TankmanIcon_base__small_b2',
                        base__barracks: 'TankmanIcon_base__barracks_62',
                        base__special: 'TankmanIcon_base__special_3f',
                        base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    };
                let tn;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(tn || (tn = {}));
                const nn = (0, a.memo)(function ({ name: e, size: u = tn.c100x60, classMix: t, isSkin: n = !1 }) {
                        let a = R.images.gui.maps.icons.tankmen.icons.$dyn(u);
                        n && (a = a.$dyn('crewSkins'));
                        const i = a.$dyn(we(e));
                        return (
                            i ||
                                console.error(
                                    `Can't find ${we(e)} in R.images.gui.maps.icons.tankmen.icons.${u}${n ? '.crewSkins' : ''}`,
                                ),
                            r().createElement('div', {
                                style: { backgroundImage: `url(${i})` },
                                className: C()(un.base, un[`base__${u}`], t),
                            })
                        );
                    }),
                    an = 'WidgetTankmanIcon_icon_0f',
                    rn = 'WidgetTankmanIcon_icon__small_24',
                    ln = 'WidgetTankmanIcon_icon__cropped_bd',
                    sn = ({ name: e, isSkin: u = !1, isCropped: t = !1, className: n }) => {
                        const a = L().mediaSize < x.Large;
                        return r().createElement(nn, {
                            name: e,
                            size: a && t ? tn.c100x60 : tn.c158x118,
                            isSkin: u,
                            classMix: C()(an, a && t && rn, !a && t && ln, n),
                        });
                    },
                    on = 'Tankman_base_dd',
                    cn = 'Tankman_hitBox_47',
                    dn = 'Tankman_tankmanIcon_f7',
                    En = 'Tankman_block_09',
                    _n = 'Tankman_info_11',
                    mn = 'Tankman_roles_6c',
                    An = 'Tankman_role_b4',
                    Fn = 'Tankman_name_db',
                    gn = 'Tankman_skills_7b',
                    hn = r().memo(({ icon: e, name: u, roles: t, skills: n, index: a }) =>
                        r().createElement(
                            'div',
                            { className: on },
                            r().createElement(
                                de,
                                { ignoreMouseClick: !0, isEnabled: !0, args: { tooltipId: _e, index: a } },
                                r().createElement('div', { className: cn }),
                            ),
                            r().createElement(
                                'div',
                                null,
                                r().createElement(sn, {
                                    name: e,
                                    isCropped: 0 === n.bonusSkills.length,
                                    className: dn,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: En },
                                r().createElement(
                                    'div',
                                    { className: _n },
                                    r().createElement(
                                        'div',
                                        { className: mn },
                                        J(t, (e, u) =>
                                            r().createElement(vu, { key: u, role: e, size: bu.c18x18, className: An }),
                                        ),
                                    ),
                                    r().createElement('div', { className: Fn }, u),
                                ),
                                r().createElement(en, {
                                    isSkillTooltipEnabled: !0,
                                    isNewSkillAnimated: !0,
                                    tankmanID: a,
                                    size: Uu.c24x24,
                                    data: n,
                                    classes: { base: gn },
                                }),
                            ),
                        ),
                    ),
                    fn = 'Tankmen_base_d3',
                    Dn = 'Tankmen_slot_1a',
                    pn = 'Tankmen_slot__withBonusSkills_13',
                    Bn = 'Tankmen_divider_8b';
                function bn() {
                    return (
                        (bn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        bn.apply(null, arguments)
                    );
                }
                const vn = (0, $.Pi)(function ({ className: e }) {
                        const u = ne().model,
                            t = u.computes,
                            n = u.hasDog,
                            a = u.nation;
                        return r().createElement(
                            'div',
                            { className: C()(fn, e) },
                            J(t.tankmen(), (e, u) =>
                                r().createElement(
                                    'div',
                                    { key: u, className: C()(Dn, e.skills.bonusSkills.length > 0 && pn) },
                                    e.icon
                                        ? r().createElement(hn, bn({ index: u }, e))
                                        : r().createElement(xu, bn({ index: u }, e)),
                                    r().createElement('div', { className: Bn }),
                                ),
                            ),
                            n.get() &&
                                r().createElement(
                                    'div',
                                    { className: Dn },
                                    r().createElement(pu, { nation: a.get() }),
                                    r().createElement('div', { className: Bn }),
                                ),
                        );
                    }),
                    Cn = 'CrewTabApp_base_af',
                    wn = 'CrewTabApp_list_5a',
                    kn = 'CrewTabApp_crewLocked_eb',
                    xn = 'CrewTabApp_lockIcon_03',
                    yn = (0, $.Pi)(({ sizerRef: e }) => {
                        const u = ne().model.isLockedCrew,
                            t = (function () {
                                const e = (0, a.useContext)(o);
                                if (!e) throw new Error('ViewSizerContext is not initialized');
                                return e;
                            })(),
                            n = (0, a.useCallback)(
                                () =>
                                    ((e) => {
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
                                    })(() => {
                                        null == t || t.freeze(), null == t || t.resize();
                                    }),
                                [t],
                            );
                        return (
                            (0, a.useEffect)(
                                () => (
                                    n(),
                                    engine.on('clientResized', n),
                                    () => {
                                        engine.off('clientResized', n);
                                    }
                                ),
                                [n],
                            ),
                            r().createElement(
                                'div',
                                { ref: e, className: Cn },
                                r().createElement(_u, null),
                                r().createElement(vn, { className: wn }),
                                u.get() &&
                                    r().createElement(
                                        'div',
                                        { className: kn },
                                        r().createElement('div', { className: xn }),
                                        r().createElement(
                                            'div',
                                            null,
                                            R.strings.vehicle_preview.infoPanel.tab.crewInfo.lockTitle(),
                                        ),
                                    ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    z().render(
                        r().createElement(
                            te,
                            null,
                            r().createElement(
                                H,
                                null,
                                r().createElement(c, { autoUpdate: !0 }, (e) => r().createElement(yn, { sizerRef: e })),
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
                        var l = t();
                        void 0 !== l && (e = l);
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
        (__webpack_require__.j = 906),
        (() => {
            var e = { 906: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, i, l] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (l) var o = l(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(o);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [294], () => __webpack_require__(649));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
