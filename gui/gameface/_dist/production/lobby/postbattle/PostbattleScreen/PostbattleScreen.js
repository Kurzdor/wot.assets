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
                    a.d(t, { mouse: () => c, off: () => l, on: () => u, onResize: () => s, onScaleUpdated: () => i });
                var r = a(472),
                    n = a(176);
                const s = (0, r.E)('clientResized'),
                    i = (0, r.E)('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    o = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, n.R)(!1);
                    }
                    const s = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const s = `mouse${t}`,
                                        i = o[t]((e) => a([e, 'outside']));
                                    function u(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, u),
                                        r(),
                                        () => {
                                            n &&
                                                (i(),
                                                window.removeEventListener(s, u),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
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
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => i,
                        getSize: () => s,
                        graphicsQuality: () => u,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var r = a(527),
                    n = a(993);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const u = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, a) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => r });
            },
            993: (e, t, a) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((a) => {
                        console.error(`setRTPC('${e}', '${t}'): `, a);
                    });
                }
                a.d(t, { E: () => n, G: () => r });
            },
            472: (e, t, a) => {
                'use strict';
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => r });
            },
            138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => s });
                var r = a(959),
                    n = a(514);
                const s = { view: a(641), client: r, sound: n.ZP };
            },
            514: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => i });
                var r = a(959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, r.playSound)(n[t])), e), {}),
                    i = { play: Object.assign({}, s, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            722: (e, t, a) => {
                'use strict';
                function r(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function n(e, t, a) {
                    return `url(${r(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => n });
                var r = a(472);
                const n = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => u,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => B,
                        events: () => s.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => F,
                        getScale: () => g,
                        getSize: () => m,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => C,
                        isFocused: () => f,
                        pxToRem: () => b,
                        remToPx: () => h,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => y,
                    });
                var r = a(722),
                    n = a(112),
                    s = a(538),
                    i = a(566);
                function u(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function o(e, t, a, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, r);
                }
                function c(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function A() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    w = {
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
            566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => o });
                const r = ['args'];
                const n = 2,
                    s = 16,
                    i = 32,
                    u = 64,
                    l = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        s = Object.keys(e);
                                    for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(t, r);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, i, {
                                          arguments:
                                              ((n = s),
                                              Object.entries(n).map(([e, t]) => {
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
                        var n;
                    },
                    o = {
                        close(e) {
                            l('popover' === e ? n : i);
                        },
                        minimize() {
                            l(u);
                        },
                        move(e) {
                            l(s, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            521: (e, t, a) => {
                'use strict';
                let r, n;
                a.d(t, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(n || (n = {}));
            },
            358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => s });
                var r = a(138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, a = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = r.O.view.addModelObserver(e, a, n);
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
                            const r = this._callbacks[a];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const s = n;
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
            916: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Sw: () => s.Z,
                    kH: () => _,
                    B3: () => l,
                    Z5: () => i.Z5,
                    lf: () => c,
                    cy: () => i.cy,
                    B0: () => u,
                    c9: () => h,
                    ry: () => b,
                    Sy: () => v,
                });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    a();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const a = e,
                            r = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== r)),
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
                r.__instance = void 0;
                const n = r;
                var s = a(358);
                var i = a(613);
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = a(521),
                    d = a(138);
                const p = ['args'];
                function E(e, t, a, r, n, s, i) {
                    try {
                        var u = e[s](i),
                            l = u.value;
                    } catch (e) {
                        return void a(e);
                    }
                    u.done ? t(l) : Promise.resolve(l).then(r, n);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                    return new Promise(function (r, n) {
                                        var s = e.apply(t, a);
                                        function i(e) {
                                            E(s, r, n, i, u, 'next', e);
                                        }
                                        function u(e) {
                                            E(s, r, n, i, u, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        s = Object.keys(e);
                                    for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(t, p);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
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
                        var r;
                    },
                    v = () => h(u.CLOSE),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var A = a(572);
                const C = n.instance,
                    D = {
                        DataTracker: s.Z,
                        ViewModel: A.Z,
                        ViewEventType: u,
                        NumberFormatType: l,
                        RealFormatType: o,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => h(u.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => h(u.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            h(u.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, r, n = R.invalid('resId'), s) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                l = a.getBoundingClientRect(),
                                o = l.x,
                                c = l.y,
                                _ = l.width,
                                m = l.height,
                                p = {
                                    x: d.O.view.pxToRem(o) + i.x,
                                    y: d.O.view.pxToRem(c) + i.y,
                                    width: d.O.view.pxToRem(_),
                                    height: d.O.view.pxToRem(m),
                                };
                            h(u.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: g(p),
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
                            f(e, v);
                        },
                        handleViewEvent: h,
                        onBindingsReady: b,
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
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const n = Object.prototype.toString.call(t[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[r];
                                        a[r] = [];
                                        for (let t = 0; t < n.length; t++) a[r].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[r] = e(t[r]))
                                            : (a[r] = t[r]);
                                }
                            return a;
                        },
                        ClickOutsideManager: C,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = D;
            },
            613: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => s, Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    },
                    s = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            73: (e, t, a) => {
                'use strict';
                var r = {};
                a.r(r),
                    a.d(r, {
                        Area: () => as,
                        Bar: () => Jn,
                        DefaultScroll: () => ts,
                        Direction: () => On,
                        defaultSettings: () => Mn,
                        useHorizontalScrollApi: () => Un,
                    });
                var n = {};
                a.r(n), a.d(n, { Area: () => fs, Bar: () => bs, Default: () => vs, useVerticalScrollApi: () => rs });
                var s = a(179),
                    i = a.n(s),
                    u = a(493),
                    l = a.n(u),
                    o = a(916);
                const c = (e = 1) => {
                        const t = new Error().stack;
                        let a,
                            r = R.invalid('resId');
                        return (
                            t &&
                                ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== a &&
                                    window.subViews[a] &&
                                    (r = window.subViews[a].id)),
                            { caller: a, stack: t, resId: r }
                        );
                    },
                    _ = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                a(281);
                let m;
                function d(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function p(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function E(e) {
                    return e.replace(/_\w/g, (e) => e[1].toUpperCase());
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(m || (m = {}));
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
                var g = a(613);
                Date.now(), g.Ew.getRegionalDateTime, g.Ew.getFormattedDateTime;
                function b(e) {
                    return e.toString().padStart(2, '0');
                }
                function h(e) {
                    let t = Math.trunc(e);
                    const a = t % 60;
                    t = (t - a) / 60;
                    const r = t % 60;
                    t = (t - r) / 60;
                    return `${b(t % 24)}:${b(r)}:${b(a)}`;
                }
                var v = a(138);
                const f = (e) => {
                        const t = (0, s.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    A = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    C = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    D = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, a) => {
                                const r = _(`${e}.${a}`, window);
                                return A(r) ? t(e, a, r) : `${e}.${a}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    F = (e) => {
                        const t = ((e) => {
                                const t = c(),
                                    a = t.caller,
                                    r = t.resId,
                                    n = window.__feature && window.__feature !== a && a ? `subViews.${a}` : '';
                                return { modelPrefix: n, modelPath: C(n, e || ''), resId: r };
                            })(),
                            a = t.modelPrefix,
                            r = e.split('.');
                        if (r.length > 0) {
                            const e = [r[0]];
                            return (
                                r.reduce((t, r) => {
                                    const n = _(C(a, `${t}.${r}`), window);
                                    return A(n) ? (e.push(n.id), `${t}.${r}.value`) : (e.push(r), `${t}.${r}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    B = o.Sw.instance;
                let w;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(w || (w = {}));
                const y = (e = 'model', t = w.Deep) => {
                    const a = (0, s.useState)(0),
                        r = (a[0], a[1]),
                        n = (0, s.useMemo)(() => c(), []),
                        i = n.caller,
                        u = n.resId,
                        l = (0, s.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                            [i, e],
                        ),
                        o = (0, s.useState)(() =>
                            ((e) => {
                                const t = _(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return A(t) ? t.value : t;
                            })(D(l)),
                        ),
                        m = o[0],
                        d = o[1],
                        p = (0, s.useRef)(-1);
                    return (
                        f(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? w.Deep : w.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== w.None)
                            ) {
                                const a = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === w.Deep
                                            ? (e === m && r((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    n = F(e);
                                p.current = B.addCallback(n, a, u, t === w.Deep);
                            }
                        }),
                        (0, s.useEffect)(() => {
                            if (t !== w.None)
                                return () => {
                                    B.removeCallback(p.current, u);
                                };
                        }, [u, t]),
                        m
                    );
                };
                o.Sw.instance;
                function S(e) {
                    return e.displayName || e.name || 'Component';
                }
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const N = o.Sw.instance;
                function x(e, t, a) {
                    if (!t && !a) throw new Error('You should define at least one helper function');
                    return function (r) {
                        var n, s;
                        return (
                            (s = n =
                                class extends i().Component {
                                    constructor(r) {
                                        super(r), (this.modelCallbackId = void 0), (this.resId = void 0);
                                        let n = {};
                                        const s = c(),
                                            i = s.caller,
                                            u = s.resId,
                                            l = window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e,
                                            o = _(l, window);
                                        if (
                                            (t &&
                                                ((n = Object.assign({}, n, t(o))),
                                                (this.modelCallbackId = N.addCallback(
                                                    e,
                                                    (e) => {
                                                        this.setState(t(e));
                                                    },
                                                    u,
                                                )),
                                                (this.resId = u)),
                                            a)
                                        ) {
                                            const e = a(o);
                                            for (const t in e)
                                                Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t].bind(o));
                                        }
                                        this.state = n;
                                    }
                                    componentWillUnmount() {
                                        this.modelCallbackId &&
                                            (N.removeCallback(this.modelCallbackId, this.resId),
                                            (this.modelCallbackId = void 0));
                                    }
                                    render() {
                                        return i().createElement(r, T({}, this.props, this.state));
                                    }
                                }),
                            (n.displayName = `WithModel(${S(r)})`),
                            s
                        );
                    };
                }
                const I = (e, t, a) =>
                        t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                            ? (t.extraLargeHeight && a.extraLarge) ||
                              (t.largeHeight && a.large) ||
                              (t.mediumHeight && a.medium) ||
                              (t.smallHeight && a.small) ||
                              (t.extraSmallHeight && a.extraSmall)
                                ? e
                                : null
                            : e,
                    P = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var k;
                function L(e, t, a) {
                    const r = (function (e, t) {
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
                        n = (function (e, t) {
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
                        s = Math.min(r, n);
                    return {
                        extraLarge: s === a.extraLarge.weight,
                        large: s === a.large.weight,
                        medium: s === a.medium.weight,
                        small: s === a.small.weight,
                        extraSmall: s === a.extraSmall.weight,
                        extraLargeWidth: r === a.extraLarge.weight,
                        largeWidth: r === a.large.weight,
                        mediumWidth: r === a.medium.weight,
                        smallWidth: r === a.small.weight,
                        extraSmallWidth: r === a.extraSmall.weight,
                        extraLargeHeight: n === a.extraLarge.weight,
                        largeHeight: n === a.large.weight,
                        mediumHeight: n === a.medium.weight,
                        smallHeight: n === a.small.weight,
                        extraSmallHeight: n === a.extraSmall.weight,
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
                })(k || (k = {}));
                const O = v.O.client.getSize('rem'),
                    M = O.width,
                    H = O.height,
                    U = Object.assign({ width: M, height: H }, L(M, H, P)),
                    W = (0, s.createContext)(U),
                    $ = ['children'];
                const G = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                s = Object.keys(e);
                            for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, $);
                    const r = (0, s.useContext)(W),
                        n = r.extraLarge,
                        i = r.large,
                        u = r.medium,
                        l = r.small,
                        o = r.extraSmall,
                        c = r.extraLargeWidth,
                        _ = r.largeWidth,
                        m = r.mediumWidth,
                        d = r.smallWidth,
                        p = r.extraSmallWidth,
                        E = r.extraLargeHeight,
                        g = r.largeHeight,
                        b = r.mediumHeight,
                        h = r.smallHeight,
                        v = r.extraSmallHeight,
                        f = { extraLarge: E, large: g, medium: b, small: h, extraSmall: v };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && n) return t;
                        if (a.large && i) return t;
                        if (a.medium && u) return t;
                        if (a.small && l) return t;
                        if (a.extraSmall && o) return t;
                    } else {
                        if (a.extraLargeWidth && c) return I(t, a, f);
                        if (a.largeWidth && _) return I(t, a, f);
                        if (a.mediumWidth && m) return I(t, a, f);
                        if (a.smallWidth && d) return I(t, a, f);
                        if (a.extraSmallWidth && p) return I(t, a, f);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && E) return t;
                            if (a.largeHeight && g) return t;
                            if (a.mediumHeight && b) return t;
                            if (a.smallHeight && h) return t;
                            if (a.extraSmallHeight && v) return t;
                        }
                    }
                    return null;
                };
                G.defaultProps = {
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
                (0, s.memo)(G);
                const z = ({ children: e }) => {
                    const t = (0, s.useContext)(W),
                        a = (0, s.useState)(t),
                        r = a[0],
                        n = a[1],
                        u = (0, s.useCallback)((e, t) => {
                            const a = v.O.view.pxToRem(e),
                                r = v.O.view.pxToRem(t);
                            n(Object.assign({ width: a, height: r }, L(a, r, P)));
                        }, []),
                        l = (0, s.useCallback)(() => {
                            const e = v.O.client.getSize('px');
                            u(e.width, e.height);
                        }, [u]);
                    f(() => {
                        v.O.client.events.on('clientResized', u), v.O.client.events.on('self.onScaleUpdated', l);
                    }),
                        (0, s.useEffect)(
                            () => () => {
                                v.O.client.events.off('clientResized', u),
                                    v.O.client.events.off('self.onScaleUpdated', l);
                            },
                            [u, l],
                        );
                    const o = (0, s.useMemo)(() => Object.assign({}, r), [r]);
                    return i().createElement(W.Provider, { value: o }, e);
                };
                var V = a(483),
                    j = a.n(V),
                    q = a(926),
                    K = a.n(q);
                let X, Y, Q;
                !(function (e) {
                    (e[(e.ExtraSmall = P.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = P.small.width)] = 'Small'),
                        (e[(e.Medium = P.medium.width)] = 'Medium'),
                        (e[(e.Large = P.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = P.extraLarge.width)] = 'ExtraLarge');
                })(X || (X = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = P.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = P.small.width)] = 'Small'),
                            (e[(e.Medium = P.medium.width)] = 'Medium'),
                            (e[(e.Large = P.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = P.extraLarge.width)] = 'ExtraLarge');
                    })(Y || (Y = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = P.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = P.small.height)] = 'Small'),
                            (e[(e.Medium = P.medium.height)] = 'Medium'),
                            (e[(e.Large = P.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = P.extraLarge.height)] = 'ExtraLarge');
                    })(Q || (Q = {}));
                const Z = () => {
                        const e = (0, s.useContext)(W),
                            t = e.width,
                            a = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return X.ExtraLarge;
                                    case e.large:
                                        return X.Large;
                                    case e.medium:
                                        return X.Medium;
                                    case e.small:
                                        return X.Small;
                                    case e.extraSmall:
                                        return X.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), X.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Y.ExtraLarge;
                                    case e.largeWidth:
                                        return Y.Large;
                                    case e.mediumWidth:
                                        return Y.Medium;
                                    case e.smallWidth:
                                        return Y.Small;
                                    case e.extraSmallWidth:
                                        return Y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Y.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Q.ExtraLarge;
                                    case e.largeHeight:
                                        return Q.Large;
                                    case e.mediumHeight:
                                        return Q.Medium;
                                    case e.smallHeight:
                                        return Q.Small;
                                    case e.extraSmallHeight:
                                        return Q.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Q.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: a };
                    },
                    J = ['children', 'className'];
                function ee() {
                    return (
                        (ee =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        ee.apply(this, arguments)
                    );
                }
                const te = {
                        [Y.ExtraSmall]: '',
                        [Y.Small]: K().SMALL_WIDTH,
                        [Y.Medium]: `${K().SMALL_WIDTH} ${K().MEDIUM_WIDTH}`,
                        [Y.Large]: `${K().SMALL_WIDTH} ${K().MEDIUM_WIDTH} ${K().LARGE_WIDTH}`,
                        [Y.ExtraLarge]: `${K().SMALL_WIDTH} ${K().MEDIUM_WIDTH} ${K().LARGE_WIDTH} ${K().EXTRA_LARGE_WIDTH}`,
                    },
                    ae = {
                        [Q.ExtraSmall]: '',
                        [Q.Small]: K().SMALL_HEIGHT,
                        [Q.Medium]: `${K().SMALL_HEIGHT} ${K().MEDIUM_HEIGHT}`,
                        [Q.Large]: `${K().SMALL_HEIGHT} ${K().MEDIUM_HEIGHT} ${K().LARGE_HEIGHT}`,
                        [Q.ExtraLarge]: `${K().SMALL_HEIGHT} ${K().MEDIUM_HEIGHT} ${K().LARGE_HEIGHT} ${K().EXTRA_LARGE_HEIGHT}`,
                    },
                    re = {
                        [X.ExtraSmall]: '',
                        [X.Small]: K().SMALL,
                        [X.Medium]: `${K().SMALL} ${K().MEDIUM}`,
                        [X.Large]: `${K().SMALL} ${K().MEDIUM} ${K().LARGE}`,
                        [X.ExtraLarge]: `${K().SMALL} ${K().MEDIUM} ${K().LARGE} ${K().EXTRA_LARGE}`,
                    },
                    ne = (e) => {
                        let t = e.children,
                            a = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, J);
                        const n = Z(),
                            s = n.mediaWidth,
                            u = n.mediaHeight,
                            l = n.mediaSize;
                        return i().createElement('div', ee({ className: j()(a, te[s], ae[u], re[l]) }, r), t);
                    },
                    se = ['children'];
                const ie = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                s = Object.keys(e);
                            for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, se);
                    return i().createElement(z, null, i().createElement(ne, a, t));
                };
                let ue;
                !(function (e) {
                    (e.Idle = 'Idle'),
                        (e.StartIn = 'StartIn'),
                        (e.StartOut = 'StartOut'),
                        (e.FirstIterationInDone = 'FirstIterationInDone');
                })(ue || (ue = {}));
                const le = { state: ue.Idle, setState: (e) => {} },
                    oe = (0, s.createContext)(le),
                    ce = ({ children: e }) => {
                        const t = (0, s.useState)(
                                Object.assign({}, le, {
                                    setState: (e) => {
                                        r(Object.assign({}, a, { state: e }));
                                    },
                                }),
                            ),
                            a = t[0],
                            r = t[1];
                        return i().createElement(oe.Provider, { value: a }, e);
                    },
                    _e = oe,
                    me = 'personalTab',
                    de = 'teamTab',
                    pe = 'questsTab';
                function Ee(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const ge = {
                        playHighlight() {
                            Ee('highlight');
                        },
                        playClick() {
                            Ee('play');
                        },
                        playYes() {
                            Ee('yes1');
                        },
                    },
                    be = {
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
                    he = [
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
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                class fe extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Ee(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Ee(this.props.soundClick);
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
                            r = e.goto,
                            n = e.side,
                            s = e.type,
                            u = e.classNames,
                            l = e.onMouseEnter,
                            o = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        s = Object.keys(e);
                                    for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(e, he)),
                            d = j()(be.base, be[`base__${s}`], be[`base__${n}`], null == u ? void 0 : u.base),
                            p = j()(be.icon, be[`icon__${s}`], be[`icon__${n}`], null == u ? void 0 : u.icon),
                            E = j()(be.glow, null == u ? void 0 : u.glow),
                            g = j()(be.caption, be[`caption__${s}`], null == u ? void 0 : u.caption),
                            b = j()(be.goto, null == u ? void 0 : u.goto);
                        return i().createElement(
                            'div',
                            ve(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(o),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                m,
                            ),
                            'info' !== s && i().createElement('div', { className: be.shine }),
                            i().createElement('div', { className: p }, i().createElement('div', { className: E })),
                            i().createElement('div', { className: g }, t),
                            r && i().createElement('div', { className: b }, r),
                        );
                    }
                }
                let Ae, Ce;
                (fe.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.NONE = 'none'),
                            (e.PLATOON = 'squadHeader'),
                            (e.NAME = 'playerHeader'),
                            (e.DAMAGE_DEALT = 'damageHeader'),
                            (e.KILLS = 'fragHeader'),
                            (e.EARNED_XP = 'xpHeader'),
                            (e.VEHICLE = 'tankHeader'),
                            (e.MEDAL = 'medalHeader');
                    })(Ae || (Ae = {})),
                    (function (e) {
                        (e.Hunter = 'hunter'), (e.Boss = 'boss');
                    })(Ce || (Ce = {}));
                const De = 'Tabs_base_d9',
                    Fe = 'Tabs_base__vertical_c0',
                    Be = 'Tabs_list_0a',
                    we = 'Tabs_list__centered_dc',
                    ye = 'Tabs_wrapper_2d',
                    Se = 'Tabs_wrapper__centered_d8',
                    Te = 'Tabs_wrapper__vertical_a5';
                function Re() {
                    return (
                        (Re =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Re.apply(this, arguments)
                    );
                }
                const Ne = 'tabs-role';
                var xe;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(xe || (xe = {}));
                class Ie extends s.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[xe.TAB]);
                                return t && t.props[xe.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = i().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[Ne] === xe.LIST);
                        if (t < 0) return;
                        const a =
                            this.props.activeKey || this._getFirstTabKey(i().Children.toArray(e[t].props.children));
                        (e[t] = i().cloneElement(e[t], {
                            children: i()
                                .Children.toArray(e[t].props.children)
                                .map((e) => i().cloneElement(e, { key: e.props[xe.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(a);
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const a = i().Children.toArray(this.props.children)[this.tabsListIndex],
                            r = a.props.children.reduce(
                                (e, t, a) => ((e[a] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            n =
                                ((s = this.tabsProps),
                                (u = r),
                                !(
                                    Object.keys(s).length === Object.keys(u).length &&
                                    Object.keys(s).every(
                                        (e) => Object.prototype.hasOwnProperty.call(u, e) && s[e] === u[e],
                                    )
                                ));
                        var s, u;
                        const l = j()(
                                ye,
                                a.props.className,
                                this.props.isTabsCentered && Se,
                                this.props.isVerticalTabs && Te,
                            ),
                            o = j()(Be, this.props.isTabsCentered && we);
                        if (t.activeKey !== this.state.activeKey || n) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[Ne] === xe.CONTENT)
                                        return e.props[xe.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, a) => [this.tabsListIndex, e].includes(a)),
                                n = t[0].props.children,
                                s = n.map((e, t) =>
                                    i().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            r[t],
                                            { key: t, isActive: this.state.activeKey === e.props[xe.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === n.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const a = r[t][xe.TAB];
                                                    this.state.activeKey === a ||
                                                        (r[t].onClick && r[t].onClick(e),
                                                        this.handleSetActiveKey(a),
                                                        this.props.onClickSound && Ee(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    r[t].onMouseEnter && r[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            Ee(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = r),
                                this.setState({
                                    activeElements: [
                                        i().createElement(
                                            'div',
                                            { className: o, key: xe.LIST },
                                            i().createElement('div', Re({}, a.props, { className: l }), s),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = j()(De, this.props.isVerticalTabs && Fe);
                        return i().createElement('div', { className: t }, e);
                    }
                }
                Ie.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const Pe = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                const Le = (e) => {
                        let t = e.children,
                            a = e.className,
                            r = e.activeKey,
                            n = e.onClickSound,
                            s = e.onMouseEnterSound,
                            u = e.isTabsCentered,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, Pe);
                        return i().createElement(
                            'div',
                            ke({ className: a }, l),
                            i().createElement(
                                Ie,
                                { activeKey: r, onClickSound: n, onMouseEnterSound: s, isTabsCentered: u },
                                t,
                            ),
                        );
                    },
                    Oe = {
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
                    Me = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const Ue = (e) => {
                    let t = e.size,
                        a = e.value,
                        r = e.isEmpty,
                        n = e.fadeInAnimation,
                        s = e.hide,
                        u = e.maximumNumber,
                        l = e.className,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                s = Object.keys(e);
                            for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, Me);
                    const c = r ? null : a,
                        _ = 'string' == typeof c;
                    if ((c && !_ && c < 0) || 0 === c) return null;
                    const m = c && !_ && c > u,
                        d = j()(
                            Oe.base,
                            Oe[`base__${t}`],
                            n && Oe.base__animated,
                            s && Oe.base__hidden,
                            !c && Oe.base__pattern,
                            r && Oe.base__empty,
                            l,
                        );
                    return i().createElement(
                        'div',
                        He({ className: d }, o),
                        i().createElement('div', { className: Oe.bg }),
                        i().createElement('div', { className: Oe.pattern }),
                        i().createElement(
                            'div',
                            { className: j()(Oe.value, _ && Oe.value__text) },
                            m ? u : c,
                            m && i().createElement('span', { className: Oe.plus }, '+'),
                        ),
                    );
                };
                Ue.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const We = ({ children: e, component: t, props: a = {} }) =>
                        t ? i().createElement(t, a, e) : e || null,
                    $e = 'Tab_base_dd',
                    Ge = 'Tab_base__first_4a',
                    ze = 'Tab_base__last_96',
                    Ve = 'Tab_base__medium_ec',
                    je = 'Tab_base__active_5d',
                    qe = 'Tab_divider_ca',
                    Ke = 'Tab_divider__show_62',
                    Xe = 'Tab_state_6c',
                    Ye = 'Tab_stateHighlight_1e',
                    Qe = 'Tab_stateBorder_64',
                    Ze = 'Tab_stateBorder__positionLeft_e7',
                    Je = 'Tab_stateBorder__positionRight_db',
                    et = 'Tab_counter_e1',
                    tt = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function at() {
                    return (
                        (at =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        at.apply(this, arguments)
                    );
                }
                const rt = (0, s.memo)((e) => {
                        let t = e.isActive,
                            a = void 0 !== t && t,
                            r = e.isFirst,
                            n = void 0 !== r && r,
                            s = e.isLast,
                            u = void 0 !== s && s,
                            l = e.isMedium,
                            o = void 0 !== l && l,
                            c = e.isNotified,
                            _ = void 0 !== c && c,
                            m = e.children,
                            d = void 0 === m ? 'Tab' : m,
                            p = e.wrapper,
                            E = void 0 === p ? {} : p,
                            g = e.counter,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, tt);
                        return i().createElement(
                            We,
                            E,
                            i().createElement(
                                'div',
                                at({ className: j()($e, { [je]: a }, { [Ge]: n }, { [ze]: u }, { [Ve]: o }) }, b),
                                i().createElement(
                                    'span',
                                    { className: Xe },
                                    i().createElement('span', { className: Ye }),
                                    i().createElement('span', { className: j()(Qe, Ze) }),
                                    i().createElement('span', { className: j()(Qe, Je) }),
                                ),
                                d,
                                !u && !a && i().createElement('span', { className: j()(qe, Ke) }),
                                (Boolean(g) || _) &&
                                    i().createElement(
                                        'div',
                                        { className: et },
                                        i().createElement(Ue, { value: g, isEmpty: _ }),
                                    ),
                            ),
                        );
                    }),
                    nt = [
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
                function st(e) {
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
                const it = (e, t, a = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: o.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                a,
                            ),
                        );
                    },
                    ut = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            i = e.onMouseLeave,
                            u = e.onMouseDown,
                            l = e.onClick,
                            o = e.ignoreShowDelay,
                            _ = void 0 !== o && o,
                            m = e.ignoreMouseClick,
                            d = void 0 !== m && m,
                            p = e.decoratorId,
                            E = void 0 === p ? 0 : p,
                            g = e.isEnabled,
                            b = void 0 === g || g,
                            h = e.targetId,
                            v = void 0 === h ? 0 : h,
                            f = e.onShow,
                            A = e.onHide,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, nt);
                        const D = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            F = (0, s.useMemo)(() => v || c().resId, [v]),
                            B = (0, s.useCallback)(() => {
                                (D.current.isVisible && D.current.timeoutId) ||
                                    (it(a, E, { isMouseEvent: !0, on: !0, arguments: st(r) }, F),
                                    f && f(),
                                    (D.current.isVisible = !0));
                            }, [a, E, r, F, f]),
                            w = (0, s.useCallback)(() => {
                                if (D.current.isVisible || D.current.timeoutId) {
                                    const e = D.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (D.current.timeoutId = 0)),
                                        it(a, E, { on: !1 }, F),
                                        D.current.isVisible && A && A(),
                                        (D.current.isVisible = !1);
                                }
                            }, [a, E, F, A]),
                            y = (0, s.useCallback)((e) => {
                                D.current.isVisible &&
                                    ((D.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (D.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(D.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = D.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', y, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', y, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === b && w();
                            }, [b, w]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return b
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((D.current.timeoutId = window.setTimeout(B, _ ? 100 : 400)),
                                                      n && n(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              w(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === d && w(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === d && w(), null == u || u(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : t;
                        var S;
                    },
                    lt = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                const ct = R.views.common.tooltip_window.simple_tooltip_content,
                    _t = (e) => {
                        let t = e.children,
                            a = e.body,
                            r = e.header,
                            n = e.note,
                            u = e.alert,
                            l = e.args,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, lt);
                        const c = (0, s.useMemo)(() => {
                            const e = Object.assign({}, l, { body: a, header: r, note: n, alert: u });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [u, a, r, n, l]);
                        return i().createElement(
                            ut,
                            ot(
                                {
                                    contentId:
                                        ((_ = null == l ? void 0 : l.hasHtmlContent),
                                        _ ? ct.SimpleTooltipHtmlContent('resId') : ct.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                o,
                            ),
                            t,
                        );
                        var _;
                    },
                    mt = ({ children: e, tooltipProps: t, tabIsDisabled: a = !1 }) =>
                        t && t.description
                            ? i().createElement(_t, { isEnabled: a, header: t.title, body: t.description }, e)
                            : e,
                    dt = { base__disabled: 'TabWrapper_base__disabled_1d' },
                    pt = ['isDisabled', 'tab', 'onChangeCurrentTab'];
                function Et() {
                    return (
                        (Et =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Et.apply(this, arguments)
                    );
                }
                const gt = {
                        [pe]: { description: R.strings.postbattle_screen.tabTooltip.questsTab.disabled.description() },
                    },
                    bt = (e) => {
                        let t = e.isDisabled,
                            a = void 0 !== t && t,
                            r = e.tab,
                            n = e.onChangeCurrentTab,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, pt);
                        const l = R.strings.postbattle_screen.tabName,
                            o = (0, s.useCallback)(
                                (e) => {
                                    a || (u && u.onClick && u.onClick(e), n(r));
                                },
                                [a, n, u, r],
                            ),
                            c = j()(dt.base, a && dt.base__disabled);
                        return i().createElement(
                            mt,
                            { tooltipProps: gt[r], tabIsDisabled: a },
                            i().createElement(
                                'div',
                                { className: c },
                                i().createElement(rt, Et({}, u, { onClick: o }), l.$dyn(r)),
                            ),
                        );
                    },
                    ht = 'TabsHeader_base_78',
                    vt = ({ currentTab: e, onChangeCurrentTab: t }) => {
                        const a = [me, de, pe];
                        return i().createElement(
                            'div',
                            { className: ht },
                            i().createElement(
                                Le,
                                { activeKey: e },
                                i().createElement(
                                    'div',
                                    { 'tabs-role': 'tabs-list' },
                                    a.map((e) =>
                                        i().createElement(bt, { key: e, 'tab-key': e, tab: e, onChangeCurrentTab: t }),
                                    ),
                                ),
                            ),
                        );
                    };
                function ft(e, t, a) {
                    const r = (0, s.useContext)(W);
                    let n = Object.entries(r).filter(([e, t]) => !0 === t && e in k);
                    return (
                        a && (n = n.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const r = n.map((e) =>
                                j()(
                                    t[((e, t) => e + '__' + t)(a, e[0])],
                                    t[
                                        ((e, t) => {
                                            return e + ((a = t)[0].toUpperCase() + a.slice(1));
                                            var a;
                                        })(a, e[0])
                                    ],
                                ),
                            );
                            return (e[a] = j()(t[a], ...r)), e;
                        }, {})
                    );
                }
                let At;
                !(function (e) {
                    (e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220');
                })(At || (At = {}));
                const Ct = (e) => {
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
                    },
                    Dt = 'TextOverflow_base_3b',
                    Ft = ['content', 'classMix', 'className'];
                function Bt() {
                    return (
                        (Bt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Bt.apply(this, arguments)
                    );
                }
                const wt = (e) => {
                        let t = e.content,
                            a = e.classMix,
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, Ft);
                        const u = (0, s.useRef)(null),
                            l = (0, s.useState)(!0),
                            o = l[0],
                            c = l[1];
                        return (
                            (0, s.useEffect)(() =>
                                Ct(() => {
                                    const e = u.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            i().createElement(
                                _t,
                                { isEnabled: o, body: t },
                                i().createElement('div', Bt({}, n, { ref: u, className: j()(Dt, r, a) }), t),
                            )
                        );
                    },
                    yt = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    St = { [At.default]: 'c_24x24', [At.x48]: 'c_48x48', [At.x80]: 'c_80x80', [At.x220]: 'c_220x220' },
                    Tt = ({ badgeID: e, size: t = At.default, className: a }) => {
                        const r = R.images.gui.maps.icons.library.badges.$dyn(St[t]);
                        return i().createElement('div', {
                            className: j()(yt.base, yt[`base__${t}`], a),
                            style: { backgroundImage: `url(${r.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Rt = {
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
                    Nt = (0, s.memo)(({ tooltipHeaderName: e }) => {
                        const t = (0, s.useMemo)(
                                () => p(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            a = R.strings.tooltips.anonymizer.teamStats.body();
                        return i().createElement(
                            _t,
                            { header: t, body: a },
                            i().createElement('div', { className: Rt.anonymizedIcon }),
                        );
                    });
                function xt() {
                    return (
                        (xt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        xt.apply(this, arguments)
                    );
                }
                const It = { [At.default]: 'c_64x24', [At.x48]: 'c_68x28' },
                    Pt = { [At.default]: 'c_48x48', [At.x48]: 'c_48x48' },
                    kt = ({
                        userName: e,
                        clanAbbrev: t = '',
                        igrType: a = 0,
                        badge: r = { badgeID: '' },
                        suffixBadge: n = { badgeID: '' },
                        isInverted: u = !1,
                        isFakeNameVisible: l = !1,
                        isAnonymizerShown: o = !1,
                        hiddenUserName: c = '',
                        size: _ = At.default,
                        userNameClassName: m = '',
                        clanTagClassName: d = '',
                    }) => {
                        const p = R.images.gui.maps.icons.library.badges.strips.$dyn(It[_]),
                            E = (0, s.useMemo)(
                                () => ({ backgroundImage: `url(${p.$dyn(`strip_${n.badgeID}`)})` }),
                                [n, p],
                            ),
                            g = R.images.gui.maps.icons.library.badges.$dyn(Pt[_]),
                            b = (0, s.useMemo)(
                                () => ({ backgroundImage: `url(${g.$dyn(`badge_${n.badgeID}`)})` }),
                                [n, g],
                            ),
                            h = t ? `[${t}]` : '',
                            v = j()(Rt.base, Rt[`base__${_}`], u && Rt.base__inverted),
                            f = j()(Rt.userName, m),
                            A = j()(Rt.clanTag, d),
                            C = e !== c,
                            D = l ? `${c}${h}` : c,
                            F = Boolean(r.badgeID) && i().createElement(Tt, xt({ size: _ }, r, { key: 'badge' })),
                            B = Date.now(),
                            w = [
                                F,
                                [
                                    i().createElement(
                                        'div',
                                        { className: f, key: 'userName' },
                                        i().createElement(wt, { content: e, key: B }),
                                    ),
                                    !l && Boolean(h) && i().createElement('div', { className: A, key: 'clanTag' }, h),
                                ],
                                0 !== a && i().createElement('div', { className: Rt.igrIcon, key: 'igrType' }),
                                Boolean(n.badgeID) &&
                                    i().createElement(
                                        'div',
                                        { className: Rt.suffixBadgeWrapper, key: 'suffixBadge' },
                                        i().createElement('div', { className: Rt.suffixBadgeStripe, style: E }),
                                        i().createElement('div', { className: Rt.suffixBadge, style: b }),
                                    ),
                                o && C && i().createElement(Nt, { tooltipHeaderName: D, key: 'anonymizer' }),
                            ];
                        return i().createElement('div', { className: v }, u ? w.reverse() : w);
                    },
                    Lt = ['isTeamKiller'];
                let Ot;
                !(function (e) {
                    (e.Base = '#ced9d9'),
                        (e.Killed = '#8c8c7e'),
                        (e.Highlighted = '#feab34'),
                        (e.KilledHighlighted = '#b58136'),
                        (e.TeamKiller = '#09e2ff'),
                        (e.KilledTeamKiller = '#0c8fa0'),
                        (e.DetailedInfoPlayerBase = '#f2f2f7');
                })(Ot || (Ot = {}));
                const Mt = ({ isPersonal: e, isSameSquad: t, isKilled: a }) =>
                        e || t ? (a ? Ot.KilledHighlighted : Ot.Highlighted) : a ? Ot.Killed : Ot.Base,
                    Ht = (e) => {
                        let t = e.isTeamKiller,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, Lt);
                        return t ? (a.isKilled ? Ot.KilledTeamKiller : Ot.TeamKiller) : Mt(a);
                    },
                    Ut = ['isTeamKiller', 'isKilled', 'isPersonal', 'isSameSquad'];
                const Wt = (e) => {
                        let t = e.isTeamKiller,
                            a = e.isKilled,
                            r = e.isPersonal,
                            n = e.isSameSquad,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, Ut);
                        const l = Ht({ isTeamKiller: t, isKilled: a, isPersonal: r, isSameSquad: n }),
                            o = (0, s.useMemo)(() => ({ color: l }), [l]);
                        return i().createElement('div', { style: o }, i().createElement(kt, u));
                    },
                    $t = {
                        base: 'LifeStatus_base_91',
                        base__extraSmall: 'LifeStatus_base__extraSmall_a0',
                        base__small: 'LifeStatus_base__small_90',
                        killer: 'LifeStatus_killer_32',
                        killer__bot: 'LifeStatus_killer__bot_8e',
                    };
                function Gt() {
                    return (
                        (Gt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Gt.apply(this, arguments)
                    );
                }
                const zt = R.strings.postbattle_screen.UserStatus.vehicleState.dead,
                    Vt = ({ userName: e, attackReason: t, killer: a }) => {
                        const r = 3 === t || 5 === t || 7 === t,
                            n = a.isPersonal,
                            s = a.isSameSquad,
                            u = a.isBot,
                            l = a.user,
                            o = e === l.userName,
                            c = j()($t.killer, u && $t.killer__bot);
                        return r && o
                            ? zt.self.$num(t)
                            : i().createElement(
                                  i().Fragment,
                                  null,
                                  i().createElement('div', null, zt.$num(t)),
                                  i().createElement(
                                      'div',
                                      { className: c },
                                      u ? null : i().createElement(Wt, Gt({}, l, { isPersonal: n, isSameSquad: s })),
                                  ),
                              );
                    },
                    jt = new Set([0, 1, 2, 3, 5, 7]),
                    qt = ({ userName: e, attackReason: t, killer: a, isLeftBattle: r = !1 }) => {
                        const n = R.strings.postbattle_screen.UserStatus.vehicleState;
                        return r
                            ? n.prematureLeave()
                            : -1 === t
                              ? n.alive()
                              : jt.has(t) && a
                                ? i().createElement(Vt, { userName: e, attackReason: t, killer: a })
                                : n.dead.$num(t);
                    };
                function Kt() {
                    return (
                        (Kt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Kt.apply(this, arguments)
                    );
                }
                const Xt = (e) => {
                        let t = Kt({}, e);
                        const a = ft(['base'], $t);
                        return i().createElement('div', { className: a.base }, i().createElement(qt, t));
                    },
                    Yt = {
                        base: 'UserStatusInfo_base_47',
                        base__small: 'UserStatusInfo_base__small_0b',
                        base__extraSmall: 'UserStatusInfo_base__extraSmall_91',
                        base__medium: 'UserStatusInfo_base__medium_f4',
                        player: 'UserStatusInfo_player_a4',
                        player__extraSmall: 'UserStatusInfo_player__extraSmall_09',
                        player__small: 'UserStatusInfo_player__small_25',
                        clanTag: 'UserStatusInfo_clanTag_77',
                        userName: 'UserStatusInfo_userName_36',
                    };
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                const Zt = () => {
                        const e = y('model.userStatus', w.None),
                            t = e.user,
                            a = e.killer,
                            r = e.isLeftBattle,
                            n = e.attackReason,
                            s = ft(['base', 'player'], Yt);
                        return i().createElement(
                            'div',
                            { className: s.base },
                            i().createElement(
                                'div',
                                { className: s.player },
                                i().createElement(
                                    kt,
                                    Qt({}, t, { userNameClassName: Yt.userName, clanTagClassName: Yt.clanTag }),
                                ),
                            ),
                            i().createElement(Xt, {
                                userName: t.userName,
                                attackReason: n,
                                killer: a,
                                isLeftBattle: r,
                            }),
                        );
                    },
                    Jt = {
                        battleMap: 'MapInfo_battleMap_94',
                        battleMap__extraSmall: 'MapInfo_battleMap__extraSmall_02',
                        battleMap__small: 'MapInfo_battleMap__small_11',
                        battleTime: 'MapInfo_battleTime_4f',
                        battleTime__extraSmall: 'MapInfo_battleTime__extraSmall_6d',
                        battleTime__small: 'MapInfo_battleTime__small_f9',
                        time: 'MapInfo_time_4c',
                        separator: 'MapInfo_separator_df',
                    },
                    ea = (0, s.memo)(({ battleType: e, arenaName: t, battleFinishTime: a }) => {
                        const r = ft(['base', 'battleMap', 'battleTime'], Jt),
                            n = R.strings.arenas.$dyn(`c_${t}`),
                            s = R.strings.postbattle_screen.detailedStats.statistics.battleFinished();
                        return i().createElement(
                            'div',
                            null,
                            i().createElement(
                                'div',
                                { className: r.battleMap },
                                e &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement('span', { className: Jt.cell }, e.toLocaleUpperCase()),
                                        i().createElement('span', { className: Jt.separator }, '•'),
                                    ),
                                n && i().createElement('span', { className: Jt.cell }, n.$dyn('name').toUpperCase()),
                            ),
                            a &&
                                i().createElement(
                                    'div',
                                    { className: r.battleTime },
                                    s,
                                    i().createElement(
                                        'span',
                                        { className: Jt.time },
                                        (function (e, t = ' ', a = 'SHORT_FORMAT', r = 'SHORT_FORMAT') {
                                            return `${o.Z5.getDateFormat(e, o.kH[a])}${t}${o.Z5.getTimeFormat(e, o.lf[r])}`;
                                        })(a),
                                    ),
                                ),
                        );
                    });
                var ta = a(521);
                const aa = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ra(e = ta.n.NONE, t = aa, a = !1, r = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== ta.n.NONE)
                            return (
                                window.addEventListener('keydown', n, a),
                                () => {
                                    window.removeEventListener('keydown', n, a);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && v.O.view.isEventHandled()) return;
                                v.O.view.setEventHandled(), t(n), a && n.stopPropagation();
                            }
                        }
                    }, [t, e, a, r]);
                }
                function na(e, t) {
                    return function (a) {
                        return a in e ? e[a] : void 0 !== t ? t : void 0;
                    };
                }
                const sa = na({ 0: 'tie', 1: 'win', 2: 'lose' });
                na({
                    2: R.strings.postbattle_screen.details.premPlus(),
                    1: R.strings.postbattle_screen.details.prem(),
                    0: R.strings.postbattle_screen.details.noPrem(),
                });
                var ia = a(306);
                const ua = 'right',
                    la = ['children'];
                function oa() {
                    return (
                        (oa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        oa.apply(this, arguments)
                    );
                }
                const ca = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                s = Object.keys(e);
                            for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, la);
                    return i().createElement(
                        ut,
                        oa(
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
                };
                let _a, ma;
                !(function (e) {
                    (e.default = 'default'), (e.big = 'big');
                })(_a || (_a = {})),
                    (function (e) {
                        (e.left = 'left'), (e.right = 'right');
                    })(ma || (ma = {}));
                const da = {
                    base: 'Achievement_base_58',
                    base__big: 'Achievement_base__big_d5',
                    base__extraSmall: 'Achievement_base__extraSmall_54',
                    base__small: 'Achievement_base__small_16',
                };
                const pa = ({ name: e, iconName: t, size: a = _a.default }) => {
                        const r = ft(['base'], da),
                            n = a === _a.big,
                            u = (function (e, t, a) {
                                return 'marksOnGun' === e
                                    ? R.images.gui.maps.icons.marksOnGun.c_95x85.$dyn(t)
                                    : a
                                      ? R.images.gui.maps.icons.achievement.big.$dyn(t)
                                      : R.images.gui.maps.icons.achievement.$dyn(t);
                            })(e, t, n),
                            l = (0, s.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            o = j()(r.base, n && da.base__big);
                        return i().createElement('div', { className: o, style: l });
                    },
                    Ea = {
                        base: 'AchievementsList_base_e6',
                        base__centered: 'AchievementsList_base__centered_47',
                        base__reversed: 'AchievementsList_base__reversed_38',
                        item: 'AchievementsList_item_bf',
                        base__big: 'AchievementsList_base__big_7b',
                        ghost: 'AchievementsList_ghost_7a',
                        base__extraSmall: 'AchievementsList_base__extraSmall_34',
                        base__small: 'AchievementsList_base__small_95',
                        achievementWrapper: 'AchievementsList_achievementWrapper_80',
                        tooltipArea: 'AchievementsList_tooltipArea_92',
                        epicRibbon: 'AchievementsList_epicRibbon_9b',
                        base__medium: 'AchievementsList_base__medium_18',
                        base__large: 'AchievementsList_base__large_4c',
                        base__extraLarge: 'AchievementsList_base__extraLarge_8f',
                    };
                function ga() {
                    return (
                        (ga =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        ga.apply(this, arguments)
                    );
                }
                const ba = ({ achievements: e, position: t = ma.right, size: a = _a.default, isCentered: r = !1 }) => {
                    const n = ft(['base'], Ea),
                        u = a === _a.big,
                        l = j()(n.base, r && Ea.base__centered, t === ma.left && Ea.base__reversed, u && Ea.base__big),
                        o = (0, s.useCallback)(
                            (e) => ({
                                id: 'achievementTooltip',
                                achievementID: e.achievementID,
                                achievementName: e.name,
                                isPersonal: e.isPersonal,
                            }),
                            [],
                        );
                    return i().createElement(
                        'div',
                        { className: l },
                        e.map((e) => {
                            const t = e.value;
                            return i().createElement(
                                'div',
                                { key: t.iconName, className: Ea.item },
                                t.isEpic && i().createElement('div', { className: Ea.epicRibbon }),
                                i().createElement(
                                    'div',
                                    { className: Ea.ghost },
                                    i().createElement(
                                        ca,
                                        { args: o(t) },
                                        i().createElement('div', { className: Ea.tooltipArea }),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Ea.achievementWrapper },
                                    i().createElement(pa, ga({}, t, { size: a })),
                                ),
                            );
                        }),
                    );
                };
                let ha;
                !(function (e) {
                    (e.Show = 'show'),
                        (e.Hidden = 'hidden'),
                        (e.Disabled = 'disabled'),
                        (e.ShowTimer = 'showTimer'),
                        (e.ShowApplied = 'showApplied');
                })(ha || (ha = {}));
                const va = (e) => e.maxBonusCount === e.usedBonusCount,
                    fa = (e, t) =>
                        ((e) => va(e) && 0 === e.restriction)(t)
                            ? ha.ShowTimer
                            : ((e) => e.restriction > 1)(t)
                              ? va(t)
                                  ? ha.ShowTimer
                                  : ha.Disabled
                              : ((e) => 1 === e.restriction)(t)
                                ? ha.ShowApplied
                                : ha.Show,
                    Aa = (e, t) => ((({ isPremiumBought: e }, t) => e && t.isEnabled)(e, t) ? fa(0, t) : ha.Hidden),
                    Ca = 'DiscreteProgressBar_base_e5',
                    Da = ({ fill: e, total: t, reverse: a = !1, children: r }) => {
                        const n = (0, s.useCallback)((e, t) => (0, s.cloneElement)(r(t, e), { key: e }), [r]),
                            u = a ? t - e : e,
                            l = [];
                        for (let e = 0; e < t; e++) l.push(n(e, Boolean(a) !== e < u));
                        return i().createElement('div', { className: Ca }, l);
                    },
                    Fa = 'ExpBonusProgressDot_base_8d',
                    Ba = 'ExpBonusProgressDot_bonusCounter_0c',
                    wa = 'ExpBonusProgressDot_bonusCounterLight_e6',
                    ya = 'ExpBonusProgressDot_base__active_c8',
                    Sa = ({ isActive: e, classNameLight: t, classNameCounter: a }) => {
                        const r = j()(Fa, e && ya),
                            n = j()(wa, t),
                            s = j()(Ba, a);
                        return i().createElement(
                            'div',
                            { className: r },
                            i().createElement('span', { className: s }),
                            i().createElement('span', { className: n }),
                        );
                    },
                    Ta = {
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
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let Ra, Na;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Ra || (Ra = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Na || (Na = {}));
                const xa = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: r,
                    disabled: n,
                    mixClass: u,
                    soundHover: l,
                    soundClick: o,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: d,
                    onMouseLeave: p,
                    onClick: E,
                }) => {
                    const g = (0, s.useRef)(null),
                        b = (0, s.useState)(a),
                        h = b[0],
                        v = b[1],
                        f = (0, s.useState)(!1),
                        A = f[0],
                        C = f[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                h && null !== g.current && !g.current.contains(e.target) && v(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, s.useEffect)(() => {
                            v(a);
                        }, [a]),
                        i().createElement(
                            'div',
                            {
                                ref: g,
                                className: j()(
                                    Ta.base,
                                    Ta[`base__${r}`],
                                    n && Ta.base__disabled,
                                    t && Ta[`base__${t}`],
                                    h && Ta.base__focus,
                                    A && Ta.base__highlightActive,
                                    u,
                                ),
                                onMouseEnter: function (e) {
                                    n || (null !== l && Ee(l), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    n || (d && d(e), C(!1));
                                },
                                onMouseDown: function (e) {
                                    n ||
                                        (null !== o && Ee(o),
                                        m && m(e),
                                        a && (n || (g.current && (g.current.focus(), v(!0)))),
                                        C(!0));
                                },
                                onMouseLeave: function (e) {
                                    n || (p && p(e), C(!1));
                                },
                                onClick: function (e) {
                                    n || (E && E(e));
                                },
                            },
                            r !== Ra.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: Ta.back }),
                                    i().createElement('span', { className: Ta.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: j()(Ta.state, Ta.state__default) },
                                i().createElement('span', { className: Ta.stateDisabled }),
                                i().createElement('span', { className: Ta.stateHighlightHover }),
                                i().createElement('span', { className: Ta.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: Ta.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                xa.defaultProps = { type: Ra.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ia = xa;
                class Pa extends i().Component {
                    constructor(e) {
                        super(e),
                            (this.tickInterval = 0),
                            (this.state = { currentTime: Date.now(), timeLeft: e.duration, timeout: 1 / 0 });
                    }
                    componentWillUnmount() {
                        this.clearTimer();
                    }
                    render() {
                        this.updateTickInterval();
                        return this.buildMessage();
                    }
                    buildMessage() {
                        return this.props.messageFormatter(this.state.timeLeft, this.isActive());
                    }
                    clearTimer() {
                        this.tickInterval && (clearInterval(this.tickInterval), (this.tickInterval = 0));
                    }
                    isActive() {
                        return this.tickInterval > 0;
                    }
                    updateTickInterval() {
                        const e = this.props,
                            t = e.duration,
                            a = e.timeout,
                            r = t > 0 && this.state.timeLeft > 0;
                        this.state.timeout !== a && (this.clearTimer(), this.setState({ timeout: a })),
                            this.isActive() !== r &&
                                (r
                                    ? this.isActive() ||
                                      (this.tickInterval = window.setInterval(() => {
                                          const e = Date.now(),
                                              t = Math.round(0.001 * (e - this.state.currentTime)),
                                              a = this.state.timeLeft - t;
                                          this.setState({ timeLeft: a, currentTime: e });
                                      }, 1e3 * a))
                                    : this.clearTimer());
                    }
                }
                Pa.defaultProps = { timeout: 1, duration: 0 };
                const ka = {
                    animationStart__enter: 'PremiumRewards_animationStart__enter_29',
                    animationStart__done: 'PremiumRewards_animationStart__done_fe',
                    animationStart__active: 'PremiumRewards_animationStart__active_ba',
                    base: 'PremiumRewards_base_d6',
                    timer: 'PremiumRewards_timer_82',
                    rewardsColumn: 'PremiumRewards_rewardsColumn_8a',
                    rewardsColumn__last: 'PremiumRewards_rewardsColumn__last_55',
                    rewardsColumn__extraSmall: 'PremiumRewards_rewardsColumn__extraSmall_12',
                    rewardsColumn__small: 'PremiumRewards_rewardsColumn__small_6d',
                    reward: 'PremiumRewards_reward_14',
                    reward__extraSmall: 'PremiumRewards_reward__extraSmall_fc',
                    reward__small: 'PremiumRewards_reward__small_9e',
                    reward__hidden: 'PremiumRewards_reward__hidden_0c',
                    bonusRewards: 'PremiumRewards_bonusRewards_bb',
                    bonus: 'PremiumRewards_bonus_63',
                    discreteProgressWrapper: 'PremiumRewards_discreteProgressWrapper_1f',
                    discreteProgressWrapper__exit: 'PremiumRewards_discreteProgressWrapper__exit_93',
                    discreteProgress: 'PremiumRewards_discreteProgress_76',
                    discreteProgressLight__active: 'PremiumRewards_discreteProgressLight__active_05',
                    discreteProgressCounter: 'PremiumRewards_discreteProgressCounter_0e',
                    discreteProgressWrapper__enter: 'PremiumRewards_discreteProgressWrapper__enter_0e',
                    discreteProgressWrapper__active: 'PremiumRewards_discreteProgressWrapper__active_1b',
                    discreteProgressWrapper__done: 'PremiumRewards_discreteProgressWrapper__done_6d',
                    titleDiscreteProgress: 'PremiumRewards_titleDiscreteProgress_88',
                    titleDiscreteProgressRecent: 'PremiumRewards_titleDiscreteProgressRecent_29',
                    bonusSparks: 'PremiumRewards_bonusSparks_47',
                    bonusSparks__exit: 'PremiumRewards_bonusSparks__exit_45',
                    bonusSparks__enter: 'PremiumRewards_bonusSparks__enter_24',
                    bonusSparks__active: 'PremiumRewards_bonusSparks__active_bc',
                    bonusSparks__done: 'PremiumRewards_bonusSparks__done_cd',
                    bonusIcon: 'PremiumRewards_bonusIcon_92',
                    bonusIcon__extraSmall: 'PremiumRewards_bonusIcon__extraSmall_70',
                    bonusIcon__small: 'PremiumRewards_bonusIcon__small_17',
                    bonusBorder: 'PremiumRewards_bonusBorder_ac',
                    bonus__basic: 'PremiumRewards_bonus__basic_e2',
                    bonus__premium: 'PremiumRewards_bonus__premium_f0',
                    bonusButton: 'PremiumRewards_bonusButton_1f',
                    buttonMix: 'PremiumRewards_buttonMix_3e',
                    bonusAppliedWrapper: 'PremiumRewards_bonusAppliedWrapper_dc',
                    bonusButtonIcon__exp: 'PremiumRewards_bonusButtonIcon__exp_2c',
                    bonusStatus: 'PremiumRewards_bonusStatus_64',
                    bonusCounter: 'PremiumRewards_bonusCounter_c9',
                    bonusCounter__active: 'PremiumRewards_bonusCounter__active_72',
                    bonusCounterLight: 'PremiumRewards_bonusCounterLight_b2',
                    bonusLightsWrapper: 'PremiumRewards_bonusLightsWrapper_31',
                    bonusLightsContainer: 'PremiumRewards_bonusLightsContainer_07',
                    ignoreEventsWrapper: 'PremiumRewards_ignoreEventsWrapper_34',
                };
                function La(e, t) {
                    return h(t ? e : 0);
                }
                const Oa = ({ nextBonusTime: e }) =>
                        i().createElement(
                            'div',
                            { className: ka.timer },
                            i().createElement(Pa, { duration: e, messageFormatter: La }),
                        ),
                    Ma = (e) => e === ue.FirstIterationInDone || e === ue.StartIn || e === ue.StartOut,
                    Ha = (0, s.memo)(() => {
                        const e = y('model.common.rewards'),
                            t = y('model.common.rewards.expBonus'),
                            a = e.experience,
                            r = e.isPremiumBought,
                            n = t.nextBonusTime,
                            u = t.bonusMultiplier,
                            l = Aa(e, t),
                            c = ft(['bonusIcon'], ka),
                            _ = (0, s.useContext)(_e),
                            m = (0, s.useCallback)(() => {
                                _.setState(ue.FirstIterationInDone);
                            }, [_]),
                            d = (0, s.useCallback)(() => {
                                r && e.onAppliedPremiumBonus();
                            }, [r, e]),
                            p = j()(ka.bonus, ka.bonus__premium),
                            E = (0, s.useMemo)(
                                () => ({
                                    enter: ka.bonusSparks__enter,
                                    enterActive: ka.bonusSparks__active,
                                    enterDone: ka.bonusSparks__done,
                                    exit: ka.bonusSparks__exit,
                                }),
                                [],
                            ),
                            g = R.strings.postbattle_screen.button.bonus(),
                            b = l === ha.Disabled,
                            h = `+ ${o.cy.getNumberFormat(a * (u - 1))}`,
                            v = l === ha.Show || b;
                        return i().createElement(
                            'div',
                            { className: p },
                            i().createElement('div', { className: c.bonusIcon }),
                            i().createElement(
                                ia.Z,
                                { in: Ma(_.state), timeout: 300, onEntered: m, classNames: E },
                                i().createElement('div', { className: ka.bonusSparks }),
                            ),
                            v
                                ? i().createElement(
                                      'div',
                                      { className: ka.bonusBorder },
                                      i().createElement(
                                          ut,
                                          { contentId: R.views.lobby.postbattle.tooltips.ExpBonus('resId') },
                                          i().createElement(
                                              'div',
                                              { className: ka.bonusButton },
                                              i().createElement(
                                                  Ia,
                                                  { type: 'main', mixClass: ka.buttonMix, onClick: d, disabled: b },
                                                  h,
                                                  i().createElement('div', { className: ka.bonusButtonIcon__exp }),
                                                  g,
                                              ),
                                          ),
                                      ),
                                  )
                                : i().createElement(
                                      ut,
                                      { contentId: R.views.lobby.postbattle.tooltips.ExpBonus('resId') },
                                      i().createElement(
                                          'div',
                                          { className: ka.bonusBorder },
                                          i().createElement(
                                              'div',
                                              { className: ka.bonusAppliedWrapper },
                                              l === ha.ShowTimer
                                                  ? i().createElement(Oa, { nextBonusTime: n })
                                                  : i().createElement(
                                                        'div',
                                                        { className: ka.bonusStatus },
                                                        i().createElement(
                                                            'span',
                                                            null,
                                                            R.strings.postbattle_screen.bonus.status(),
                                                        ),
                                                    ),
                                          ),
                                      ),
                                  ),
                        );
                    }),
                    Ua = (e) => e !== ue.Idle,
                    Wa = (0, s.memo)(() => {
                        const e = y('model.common.rewards'),
                            t = y('model.common.rewards.expBonus'),
                            a = Aa(e, t),
                            r = (0, s.useContext)(_e),
                            n = t.maxBonusCount - t.usedBonusCount,
                            u = R.strings.postbattle_screen.discrete.label(),
                            l = (0, s.useMemo)(
                                () => ({
                                    enter: ka.discreteProgressWrapper__enter,
                                    enterActive: ka.discreteProgressWrapper__active,
                                    enterDone: ka.discreteProgressWrapper__done,
                                    exit: ka.discreteProgressWrapper__exit,
                                }),
                                [],
                            );
                        return a === ha.Hidden
                            ? null
                            : i().createElement(
                                  'div',
                                  { className: ka.bonusRewards },
                                  i().createElement(Ha, null),
                                  i().createElement(
                                      ia.Z,
                                      { in: Ua(r.state), timeout: 250, classNames: l },
                                      i().createElement(
                                          'div',
                                          { className: ka.discreteProgressWrapper },
                                          i().createElement(
                                              'div',
                                              { className: ka.titleDiscreteProgress },
                                              u,
                                              ': ',
                                              i().createElement(
                                                  'div',
                                                  { className: ka.titleDiscreteProgressRecent },
                                                  n,
                                              ),
                                          ),
                                          i().createElement(
                                              'div',
                                              { className: ka.discreteProgress },
                                              i().createElement(
                                                  Da,
                                                  { total: t.maxBonusCount, fill: n, reverse: !0 },
                                                  (e, t) =>
                                                      i().createElement(Sa, {
                                                          key: t,
                                                          isActive: e,
                                                          classNameLight: j()(
                                                              ka.discreteProgressLight,
                                                              e && ka.discreteProgressLight__active,
                                                          ),
                                                          classNameCounter: j()(
                                                              ka.discreteProgressCounter,
                                                              e && ka.discreteProgressCounter__active,
                                                          ),
                                                      }),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    }),
                    $a = (e, t = 'integral') => {
                        let a;
                        if ('gold' === t) a = o.B3.GOLD;
                        else a = o.B3.INTEGRAL;
                        return void 0 === e ? '' : o.Z5.getNumberFormat(e, a);
                    },
                    Ga = ({ format: e, value: t }) => {
                        const a = $a(t, e);
                        return a ? i().createElement('span', null, a) : null;
                    },
                    za = {
                        base: 'Currency_base_85',
                        base__small: 'Currency_base__small_22',
                        base__big: 'Currency_base__big_d4',
                        base__left: 'Currency_base__left_90',
                        base__large: 'Currency_base__large_2b',
                        base__negative: 'Currency_base__negative_11',
                        base__empty: 'Currency_base__empty_49',
                        icon: 'Currency_icon_f5',
                        icon__noIcon: 'Currency_icon__noIcon_bc',
                        icon__small: 'Currency_icon__small_f5',
                        icon__credits: 'Currency_icon__credits_6a',
                        icon__gold: 'Currency_icon__gold_a8',
                        icon__crystal: 'Currency_icon__crystal_e0',
                        icon__xp: 'Currency_icon__xp_1e',
                        icon__freeXp: 'Currency_icon__freeXp_8e',
                        icon__big: 'Currency_icon__big_d3',
                        icon__large: 'Currency_icon__large_94',
                        icon__left: 'Currency_icon__left_c3',
                    };
                let Va, ja, qa;
                !(function (e) {
                    (e.LEFT = 'left'), (e.RIGHT = 'right');
                })(Va || (Va = {})),
                    (function (e) {
                        (e.NO_ICON = 'noIcon'), (e.SMALL = 'small'), (e.BIG = 'big'), (e.LARGE = 'large');
                    })(ja || (ja = {})),
                    (function (e) {
                        (e.CREDITS = 'credits'),
                            (e.GOLD = 'gold'),
                            (e.CRYSTAL = 'crystal'),
                            (e.XP = 'xp'),
                            (e.FREE_XP = 'freeXp');
                    })(qa || (qa = {}));
                const Ka = ({ position: e, size: t, type: a, amount: r, withPlus: n, className: s }) => {
                        const u = j()(
                                za.base,
                                s,
                                e && za[`base__${e}`],
                                t && za[`base__${t}`],
                                r && r < 0 && za.base__negative,
                                0 === r && za.base__empty,
                            ),
                            l = j()(za.icon, e && za[`icon__${e}`], t && za[`icon__${t}`], za[`icon__${a}`]);
                        return i().createElement(
                            'div',
                            { className: u },
                            n && r > 0 && i().createElement('span', null, '+'),
                            r && i().createElement(Ga, { value: r }),
                            i().createElement('div', { className: l }),
                        );
                    },
                    Xa = {
                        base: 'DynamicAmount_base_fb',
                        visibleContainer: 'DynamicAmount_visibleContainer_b1',
                        visibleContainer__extraSmall: 'DynamicAmount_visibleContainer__extraSmall_f7',
                        visibleContainer__small: 'DynamicAmount_visibleContainer__small_59',
                        digitBlock: 'DynamicAmount_digitBlock_be',
                        digitBlock__skippedValue: 'DynamicAmount_digitBlock__skippedValue_27',
                        slideVertically: 'DynamicAmount_slideVertically_24',
                        digitsBase: 'DynamicAmount_digitsBase_6f',
                        digits: 'DynamicAmount_digits_52',
                        digits__slideUp: 'DynamicAmount_digits__slideUp_00',
                        digits__slideDown: 'DynamicAmount_digits__slideDown_21',
                        digits__slideLinear: 'DynamicAmount_digits__slideLinear_fd',
                        digits__slideUpDown: 'DynamicAmount_digits__slideUpDown_9a',
                        digitItem: 'DynamicAmount_digitItem_5f',
                        digitItem__korea: 'DynamicAmount_digitItem__korea_30',
                        digitItem__initial: 'DynamicAmount_digitItem__initial_56',
                        digitItem__hidden: 'DynamicAmount_digitItem__hidden_29',
                    },
                    Ya = ({
                        startValue: e,
                        valuesCount: t,
                        isActivated: a,
                        duration: r,
                        startDelay: n = 0,
                        onAnimationEndHandler: u,
                        hideFirstZero: l,
                        isReversed: o,
                        isKorea: c,
                    }) => {
                        const _ = (0, s.useState)(!1),
                            m = _[0],
                            d = _[1],
                            p = (0, s.useRef)(null),
                            E = (0, s.useRef)(0),
                            g = (0, s.useCallback)(() => {
                                E.current && clearTimeout(E.current), (E.current = 0);
                            }, []),
                            b = (0, s.useMemo)(() => {
                                let a = [],
                                    r = t,
                                    n = e;
                                for (; r > 0; ) {
                                    let e = tr.slice(1, tr.length - n);
                                    e.length > r ? ((e = e.slice(e.length - r)), (r = 0)) : ((r -= e.length), (n = 0)),
                                        (a = e.concat(a));
                                }
                                return a.map((t, r) => {
                                    const n = r === a.length - 1,
                                        s = j()(
                                            Xa.digitItem,
                                            c && Xa.digitItem__korea,
                                            n && Xa.digitItem__initial,
                                            l && n && '0' === t && Xa.digitItem__hidden,
                                        );
                                    return i().createElement('div', { key: `${e}-${r}`, className: s }, t);
                                });
                            }, [l, e, t, c]),
                            h = j()(Xa.digits, m && Xa.digits__slideUpDown);
                        let v = '';
                        v = o ? (m ? 'translateY(-100%)' : 'translateY(0)') : m ? 'translateY(0)' : 'translateY(-100%)';
                        const f = (0, s.useMemo)(
                            () => ({
                                animationDuration: `${r}ms`,
                                animationDirection: o ? 'reverse' : 'normal',
                                transform: v,
                            }),
                            [r, o, v],
                        );
                        return (
                            (0, s.useEffect)(() => {
                                g(), a ? (n > 0 ? (E.current = window.setTimeout(() => d(!0), n)) : d(!0)) : d(!1);
                            }, [g, a, n]),
                            (0, s.useEffect)(() => {
                                if (!u) return;
                                const e = p.current;
                                return (
                                    e && e.addEventListener('animationend', u, !1),
                                    () => {
                                        e && e.removeEventListener('animationend', u, !1);
                                    }
                                );
                            }, [p, u]),
                            i().createElement(
                                'div',
                                { className: Xa.digitsBase },
                                i().createElement('div', { className: h, ref: p, style: f }, b),
                            )
                        );
                    };
                function Qa() {
                    return (
                        (Qa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Qa.apply(this, arguments)
                    );
                }
                class Za extends i().Component {
                    constructor(...e) {
                        super(...e),
                            (this.timers = { startDelayTimer: 0, loopAnimationTimer: 0 }),
                            (this.animationElement = null),
                            (this.state = { slideUp: !1, slideDown: !1, slideLinear: !1 }),
                            (this.activateAnimation = (e = !0) => {
                                this.setState({ slideUp: e, slideLinear: !1, slideDown: !1 });
                            }),
                            (this.activateLoopAnimation = (e = !1) => {
                                this.setState({ slideUp: !1, slideLinear: e, slideDown: !e });
                            }),
                            (this.addAnimationEndListener = () => {
                                const e = this.animationElement;
                                e && e.addEventListener('animationend', this.handleAnimationEnd);
                            }),
                            (this.removeAnimationEndListener = () => {
                                const e = this.animationElement;
                                e && e.removeEventListener('animationend', this.handleAnimationEnd);
                            }),
                            (this.setAnimationRef = (e) => {
                                this.removeAnimationEndListener(),
                                    (this.animationElement = e),
                                    this.addAnimationEndListener();
                            }),
                            (this.startAnimation = () => {
                                this.clearTimers();
                                const e = this.props.startDelay;
                                e
                                    ? (this.timers.startDelayTimer = window.setTimeout(this.activateAnimation, e))
                                    : this.activateAnimation();
                            }),
                            (this.handleAnimationEnd = () => {
                                const e = this.props,
                                    t = e.onAnimationEndHandler,
                                    a = e.loopingDuration;
                                this.state.slideDown
                                    ? t && t()
                                    : (a &&
                                          (this.timers.loopAnimationTimer = window.setTimeout(
                                              this.activateLoopAnimation,
                                              a,
                                          )),
                                      this.activateLoopAnimation(!0));
                            });
                    }
                    componentDidMount() {
                        this.props.isActivated && this.startAnimation();
                    }
                    componentWillUnmount() {
                        this.clearTimers(), this.removeAnimationEndListener();
                    }
                    shouldComponentUpdate(e) {
                        const t = e.isActivated;
                        return (
                            t !== this.props.isActivated &&
                                (t
                                    ? this.startAnimation()
                                    : (this.removeAnimationEndListener(), this.activateAnimation(!1))),
                            !0
                        );
                    }
                    clearTimers() {
                        const e = this.timers,
                            t = e.startDelayTimer,
                            a = e.loopAnimationTimer;
                        t && clearTimeout(t), a && clearTimeout(a);
                    }
                    renderCurrentDigits() {
                        const e = this.props,
                            t = e.isReversed,
                            a = e.startValue,
                            r = e.endValue,
                            n = e.hideFirstZero,
                            s = e.isKorea,
                            u = this.state,
                            l = u.slideLinear,
                            o = u.slideDown;
                        let c = [];
                        if (l) c = tr;
                        else {
                            const e = tr.length - 1,
                                n = tr.slice(1, tr.length - a),
                                s = tr.slice(r && e - r, e);
                            c = t ? (o ? tr.concat(n) : s.concat(tr)) : o ? s.concat(tr) : tr.concat(n);
                        }
                        const _ = t ? n && o : n && !o && !l;
                        return c.map((e, t) => {
                            const n = t === c.length - 1,
                                u = j()(
                                    Xa.digitItem,
                                    s && Xa.digitItem__korea,
                                    n && Xa.digitItem__initial,
                                    _ && n && '0' === e && Xa.digitItem__hidden,
                                );
                            return i().createElement('div', { key: `${a}-${r}-${t}`, className: u }, e);
                        });
                    }
                    getAnimationElementStyles() {
                        const e = this.props,
                            t = e.isReversed,
                            a = e.isActivated,
                            r = e.loopPhaseDuration,
                            n = e.upDownPhaseDuration,
                            s = this.state,
                            i = s.slideUp,
                            u = s.slideLinear,
                            l = s.slideDown,
                            o = t ? Xa.digits__slideDown : Xa.digits__slideUp,
                            c = t ? Xa.digits__slideUp : Xa.digits__slideDown;
                        let _;
                        _ = t ? (l ? 'translateY(-100%)' : 'translateY(0)') : l ? 'translateY(0)' : 'translateY(-100%)';
                        return {
                            className: a ? j()(Xa.digits, u && Xa.digits__slideLinear, i && o, l && c) : Xa.digits,
                            style: {
                                animationDuration: `${u ? r : n}ms`,
                                animationDirection: t ? 'reverse' : 'normal',
                                transform: _,
                            },
                        };
                    }
                    render() {
                        const e = this.state.slideLinear,
                            t = this.renderCurrentDigits(),
                            a = this.getAnimationElementStyles();
                        return i().createElement(
                            'div',
                            { className: Xa.digitsBase },
                            i().createElement(
                                'div',
                                Qa({ key: e ? 'slideLinear' : 'slideUpDown', ref: this.setAnimationRef }, a),
                                t,
                            ),
                        );
                    }
                }
                const Ja = ['isComplexAnimation', 'skippedValue'];
                function er() {
                    return (
                        (er =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        er.apply(this, arguments)
                    );
                }
                const tr = '09876543210'.split(''),
                    ar = 700,
                    rr = 1600,
                    nr = 300,
                    sr = 1400;
                class ir extends i().Component {
                    static calcNextDecadeAppearanceDelay(e = 0, t) {
                        const a = ir.maxSpeedUpRange;
                        let r, n;
                        return (
                            0 === e ? ((r = a), (n = t ? r - 10 : 0)) : ((r = t ? a - e : a - (10 - e)), (n = r % 10)),
                            Math.floor((ar * n) / r)
                        );
                    }
                    static addAnimationDurations(e, t = !1) {
                        const a = ir.maxSimpleAnimationRange,
                            r = ir.calcNextDecadeAppearanceDelay;
                        let n = rr;
                        e.forEach((e) => {
                            const s = e,
                                i = s.valuesCount,
                                u = s.startValue,
                                l = s.endValue;
                            if (i && i >= a) {
                                const e = r(u, !0),
                                    a = r(l, !1);
                                (n += e),
                                    (n += a),
                                    (s.isComplexAnimation = !0),
                                    (s.startDelay = t ? a : e),
                                    (s.loopingDuration = n - sr);
                            }
                        });
                        let s = e.length,
                            i = 0;
                        for (; s--; ) {
                            const t = e[s];
                            if (!t.valuesCount) continue;
                            const a = Number(t.startDelay);
                            (t.startDelay = i), t.isComplexAnimation && (i += a);
                        }
                    }
                    calculateBlockItems() {
                        const e = this.props,
                            t = e.fromValue,
                            a = e.toValue,
                            r = e.format,
                            n = e.isReversed,
                            s = $a(t, r).split(''),
                            i = $a(a, r).split(''),
                            u = s.length - i.length,
                            l = u > 0;
                        let o = '',
                            c = '';
                        const _ = (l ? s : i).map((e, t) => {
                            let a = 0,
                                r = 0,
                                n = 0;
                            if (tr.includes(e)) {
                                if (l) (r = Number(e)), t >= u && (n = Number(i[t - u]));
                                else {
                                    n = Number(e);
                                    const a = Math.abs(u);
                                    t >= a && (r = Number(s[t - a]));
                                }
                                (o += r), (c += n), (a = Math.abs(Number(c) - Number(o)) + 1);
                            }
                            return { startValue: r, endValue: n, valuesCount: a, skippedValue: !a && e };
                        });
                        return ir.addAnimationDurations(_, n), _;
                    }
                    renderDigitsBlocks(e) {
                        const t = 'ko' === R.strings.settings.LANGUAGE_CODE(),
                            a = this.props,
                            r = a.onAnimationEnd,
                            n = a.isActivated,
                            s = a.isReversed;
                        return e.map((a, u) => {
                            const l = a.isComplexAnimation,
                                o = a.skippedValue,
                                c = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        s = Object.keys(e);
                                    for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(a, Ja),
                                _ = !1 !== o;
                            let m = null;
                            const d = `${c.endValue}-${u}`;
                            _
                                ? (m = o)
                                : (u === e.length - 1 ? (c.onAnimationEndHandler = r) : (c.hideFirstZero = !0),
                                  (m = l
                                      ? i().createElement(
                                            Za,
                                            er({ key: d }, c, {
                                                isActivated: n,
                                                isReversed: s,
                                                upDownPhaseDuration: ar,
                                                loopPhaseDuration: nr,
                                                isKorea: t,
                                            }),
                                        )
                                      : i().createElement(
                                            Ya,
                                            er({ key: d }, c, {
                                                isActivated: n,
                                                isReversed: s,
                                                duration: rr,
                                                isKorea: t,
                                            }),
                                        )));
                            const p = j()(Xa.digitBlock, _ && Xa.digitBlock__skippedValue),
                                E = ((e, t, a) => {
                                    if (!a) return;
                                    const r = e[e.length - t];
                                    if (!r) return;
                                    const n = r.loopingDuration;
                                    if (!n || !r.isComplexAnimation) return;
                                    return { animationDelay: n - nr + 'ms' };
                                })(e, u, _);
                            return i().createElement('div', { key: u, className: p, style: E }, m);
                        });
                    }
                    render() {
                        const e = this.calculateBlockItems(),
                            t = this.renderDigitsBlocks(e),
                            a = j()(Xa.visibleContainer, Xa[`visibleContainer__${this.props.mediaSize}`]);
                        return i().createElement(
                            'div',
                            { className: Xa.base },
                            i().createElement('div', { className: a }, t),
                        );
                    }
                }
                (ir.maxSpeedUpRange = 20), (ir.maxSimpleAnimationRange = 2 * ir.maxSpeedUpRange);
                const ur = 'DynamicCurrency_base_fb',
                    lr = 'DynamicCurrency_dynamicAmount_79',
                    or = 'DynamicCurrency_currencyContainer_2a',
                    cr = 'DynamicCurrency_currencyContainer__hidden_a9',
                    _r = ['amount', 'withAnimation', 'isAnimationActive', 'fromAmount', 'animationEndHandler'];
                function mr() {
                    return (
                        (mr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        mr.apply(this, arguments)
                    );
                }
                const dr = (e) => {
                    let t = e.amount,
                        a = e.withAnimation,
                        r = e.isAnimationActive,
                        n = void 0 === r || r,
                        u = e.fromAmount,
                        l = void 0 === u ? 0 : u,
                        o = e.animationEndHandler,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                s = Object.keys(e);
                            for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, _r);
                    const _ = (0, s.useContext)(W),
                        m = _.small || _.extraSmall ? 'small' : '',
                        d = (0, s.useMemo)(() => {
                            if (!a || 0 === t) return null;
                            const e = t < 0;
                            return i().createElement(
                                'div',
                                { className: lr },
                                i().createElement(ir, {
                                    isActivated: n,
                                    fromValue: l,
                                    toValue: t,
                                    isReversed: e,
                                    onAnimationEnd: o,
                                    mediaSize: m,
                                }),
                            );
                        }, [t, o, l, n, m, a]),
                        p = c.position,
                        E = c.size,
                        g = c.type,
                        b = j()(za.icon, p && za[`icon__${p}`], E && za[`icon__${E}`], za[`icon__${g}`]),
                        h = Boolean(d),
                        v = j()(or, h && cr);
                    return i().createElement(
                        'div',
                        { className: ur },
                        i().createElement('div', { className: v }, i().createElement(Ka, mr({}, c, { amount: t }))),
                        d,
                        h && i().createElement('div', { className: b }),
                    );
                };
                let pr = !1;
                const Er = ({ value: e, currencyType: t, isHidden: a = !1, isCurrent: r = !1 }) => {
                        const n = ft(['reward'], ka),
                            u = (0, s.useState)(!0),
                            l = u[0],
                            o = u[1],
                            c = (0, s.useRef)(0);
                        (0, s.useEffect)(() => {
                            let t = null;
                            return (
                                0 !== c.current &&
                                    (o(!1),
                                    (pr = !1),
                                    (t = window.setTimeout(() => {
                                        o(!0);
                                    }, 100))),
                                pr && (c.current = e),
                                () => {
                                    'number' == typeof t && clearTimeout(t);
                                }
                            );
                        }, [e]);
                        const _ = (0, s.useCallback)(() => {
                                (c.current = e), (pr = !0);
                            }, [e]),
                            m = ja.LARGE,
                            d = j()(n.reward, r && ka.reward__current, a && ka.reward__hidden),
                            p = r && !pr;
                        return i().createElement(
                            'div',
                            { className: d },
                            r
                                ? i().createElement(dr, {
                                      position: Va.LEFT,
                                      size: m,
                                      type: t,
                                      amount: e,
                                      withAnimation: p,
                                      fromAmount: c.current,
                                      isAnimationActive: l,
                                      animationEndHandler: _,
                                  })
                                : i().createElement(Ka, { position: Va.LEFT, size: m, type: t, amount: e }),
                        );
                    },
                    gr = (0, s.memo)(({ currencyType: e, value: t, isLast: a = !1 }) => {
                        const r = ft(['rewardsColumn'], ka),
                            n = j()(r.rewardsColumn, a && ka.rewardsColumn__last);
                        return i().createElement(
                            'div',
                            { className: n },
                            i().createElement(Er, { isCurrent: !0, value: t, currencyType: e }),
                        );
                    }),
                    br = (0, s.memo)(({ experience: e, credits: t, crystals: a }) => {
                        const r = a > 0;
                        return i().createElement(
                            i().Fragment,
                            null,
                            i().createElement(
                                'div',
                                { className: ka.progressionContent },
                                i().createElement(gr, { value: e, currencyType: qa.XP }),
                            ),
                            i().createElement(gr, { value: t, currencyType: qa.CREDITS, isLast: !r }),
                            r && i().createElement(gr, { value: a, currencyType: qa.CRYSTAL, isLast: !0 }),
                        );
                    }),
                    hr = (0, s.memo)(() => {
                        const e = y('model.common.rewards'),
                            t = y('model.common.rewards.expBonus'),
                            a = e.experience,
                            r = e.credits,
                            n = e.crystals,
                            u = Aa(e, t),
                            l = (0, s.useContext)(_e),
                            o = u !== ha.Hidden;
                        return (
                            o || (l.state === ue.StartIn && l.setState(ue.FirstIterationInDone)),
                            i().createElement(
                                'div',
                                { className: ka.base },
                                i().createElement(br, { experience: a, credits: r, crystals: n }),
                                o && i().createElement(Wa, null),
                            )
                        );
                    });
                let vr;
                !(function (e) {
                    (e[(e.Victory = 1)] = 'Victory'), (e[(e.Defeat = 2)] = 'Defeat'), (e[(e.Draw = 0)] = 'Draw');
                })(vr || (vr = {}));
                const fr = {
                        base: 'RewardTape_base_33',
                        base__defeat: 'RewardTape_base__defeat_2b',
                        base__extraSmall: 'RewardTape_base__extraSmall_28',
                        base__small: 'RewardTape_base__small_90',
                        ribbon: 'RewardTape_ribbon_cf',
                        base__basic: 'RewardTape_base__basic_5b',
                        ribbon__top: 'RewardTape_ribbon__top_11',
                        ribbon__bottom: 'RewardTape_ribbon__bottom_56',
                        tile: 'RewardTape_tile_4c',
                        base__premium: 'RewardTape_base__premium_39',
                        content: 'RewardTape_content_7f',
                        rewards: 'RewardTape_rewards_6f',
                        achievements: 'RewardTape_achievements_0a',
                    },
                    Ar = (0, s.memo)(() => {
                        const e = ft(['base'], fr),
                            t = y('model').accountType,
                            a = y('model.common.generalInfo'),
                            r = y('model.common.rewards.achievements'),
                            n = a.winStatus,
                            u = (0, s.useMemo)(() => r.filter((e) => 'left' === e.value.groupID), [r]),
                            l = (0, s.useMemo)(() => r.filter((e) => e.value.groupID === ua), [r]),
                            o = vr.Defeat === n,
                            c = j()(
                                e.base,
                                fr[`base__${((e) => (0 !== e ? 'premium' : 'basic'))(t)}`],
                                o && fr.base__defeat,
                            ),
                            _ = j()(fr.ribbon, fr.ribbon__top),
                            m = j()(fr.ribbon, fr.ribbon__bottom);
                        return i().createElement(
                            'div',
                            { className: c },
                            i().createElement('div', { className: _ }),
                            i().createElement('div', { className: m }),
                            i().createElement('div', { className: fr.tile }),
                            i().createElement(
                                'div',
                                { className: fr.content },
                                i().createElement(
                                    'div',
                                    { className: fr.achievements },
                                    i().createElement(ba, { achievements: u, position: ma.left, size: _a.big }),
                                ),
                                i().createElement('div', { className: fr.rewards }, i().createElement(hr, null)),
                                i().createElement(
                                    'div',
                                    { className: fr.achievements },
                                    i().createElement(ba, { achievements: l, size: _a.big }),
                                ),
                            ),
                        );
                    }),
                    Cr = 'received',
                    Dr = {
                        base: 'Progression_base_15',
                        reward: 'Progression_reward_12',
                        icon: 'Progression_icon_6c',
                        icon__normal: 'Progression_icon__normal_78',
                        icon__active: 'Progression_icon__active_62',
                        icon__received: 'Progression_icon__received_77',
                        icon__notReceived: 'Progression_icon__notReceived_50',
                        icon__opened: 'Progression_icon__opened_0b',
                        icon__notOpened: 'Progression_icon__notOpened_99',
                        icon__big: 'Progression_icon__big_2b',
                        bgGlow: 'Progression_bgGlow_ad',
                        bgGlow__probMed: 'Progression_bgGlow__probMed_a2',
                        bgGlow__probMax: 'Progression_bgGlow__probMax_fa',
                        bgGlow__received: 'Progression_bgGlow__received_e3',
                    };
                var Fr, Br, wr;
                function yr(e, t, a) {
                    return j()(Dr.icon, Dr[`icon__${e}`], Dr[`icon__${t}`], a && Dr.icon__active);
                }
                !(function (e) {
                    (e.RECEIVED = 'received'), (e.NOT_RECEIVED = 'notReceived');
                })(Fr || (Fr = {})),
                    (function (e) {
                        (e.OPENED = 'opened'), (e.NOT_OPENED = 'notOpened');
                    })(Br || (Br = {})),
                    (function (e) {
                        (e.NORMAL = 'normal'), (e.BIG = 'big');
                    })(wr || (wr = {}));
                const Sr = ({ maxSteps: e, currentStep: t, currentStepState: a }) => {
                        const r = [];
                        for (let n = 0; n < e; ++n) {
                            const s = n === e - 1 ? wr.BIG : wr.NORMAL;
                            let u,
                                l = !1,
                                o = '';
                            n < t
                                ? (u = Fr.RECEIVED)
                                : n > t
                                  ? (u = Fr.NOT_RECEIVED)
                                  : ((l = !0),
                                    (u = a === Cr ? Br.OPENED : Br.NOT_OPENED),
                                    'prob_min' !== a && (o = Dr[`bgGlow__${E(a)}`])),
                                r.push(
                                    i().createElement(
                                        'div',
                                        { className: Dr.reward, key: n },
                                        i().createElement('div', { className: j()(Dr.bgGlow, o) }),
                                        i().createElement('div', { className: yr(s, u, l) }),
                                    ),
                                );
                        }
                        return i().createElement('div', { className: Dr.base }, r);
                    },
                    Tr = {
                        base: 'ProgressiveReward_base_af',
                        glow: 'ProgressiveReward_glow_07',
                        glow__received: 'ProgressiveReward_glow__received_a2',
                        lock: 'ProgressiveReward_lock_96',
                        lock__probMin: 'ProgressiveReward_lock__probMin_ed',
                        lock__probMed: 'ProgressiveReward_lock__probMed_fc',
                        lock__probMax: 'ProgressiveReward_lock__probMax_a9',
                        lock__received: 'ProgressiveReward_lock__received_4c',
                        progression: 'ProgressiveReward_progression_00',
                        progressionLine: 'ProgressiveReward_progressionLine_af',
                        progressionLine__left: 'ProgressiveReward_progressionLine__left_9a',
                        progressionLine__right: 'ProgressiveReward_progressionLine__right_a8',
                        progressionContent: 'ProgressiveReward_progressionContent_d9',
                    },
                    Rr = ({ currentStepState: e, currentStep: t, maxSteps: a }) =>
                        i().createElement(
                            'div',
                            { className: Tr.base },
                            i().createElement('div', { className: j()(Tr.glow, e === Cr && Tr.glow__received) }),
                            i().createElement('div', { className: j()(Tr.lock, Tr[`lock__${E(e)}`]) }),
                            i().createElement(
                                'div',
                                { className: Tr.progression },
                                i().createElement('div', {
                                    className: j()(Tr.progressionLine, Tr.progressionLine__left),
                                }),
                                i().createElement(
                                    ut,
                                    { contentId: R.views.lobby.postbattle.tooltips.ProgressiveReward('resId') },
                                    i().createElement(
                                        'div',
                                        { className: Tr.progressionContent },
                                        i().createElement(Sr, { currentStep: t, maxSteps: a, currentStepState: e }),
                                    ),
                                ),
                                i().createElement('div', {
                                    className: j()(Tr.progressionLine, Tr.progressionLine__right),
                                }),
                            ),
                        ),
                    Nr = (e) => e.replace(':', '_').replace(/-/g, '_'),
                    xr = 'VehicleTitle_base_27',
                    Ir = 'VehicleTitle_name_51',
                    Pr = 'VehicleTitle_type_72',
                    kr = R.images.gui.maps.icons.wtevent.postbattle,
                    Lr = (0, s.memo)(({ localizedName: e, type: t }) => {
                        const a = t ? Nr(t) : null,
                            r = a && kr.$dyn(a),
                            n = (0, s.useMemo)(() => ({ backgroundImage: `url(${r})` }), [r]);
                        return i().createElement(
                            'div',
                            { className: xr },
                            r && i().createElement('div', { className: Pr, style: n }),
                            i().createElement('div', { className: Ir }, e),
                        );
                    }),
                    Or = {
                        base: 'Header_base_39',
                        subTitle: 'Header_subTitle_20',
                        subTitle__extraSmall: 'Header_subTitle__extraSmall_3b',
                        subTitle__small: 'Header_subTitle__small_e2',
                        title: 'Header_title_64',
                        title__extraSmall: 'Header_title__extraSmall_8a',
                        title__small: 'Header_title__small_20',
                        vehicleName: 'Header_vehicleName_dd',
                    },
                    Mr = [1, 10],
                    Hr = R.strings.postbattle_screen.GeneralBattleInfo,
                    Ur = (0, s.memo)(
                        ({
                            winStatus: e,
                            vehicleLevel: t,
                            battleFinishReason: a,
                            isHunter: r,
                            localizedVehicleName: n,
                            vehicleType: s,
                        }) => {
                            const u = ft(['title', 'subTitle'], Or),
                                l = sa(e),
                                o = Hr.winStatus.$dyn(l),
                                c = ((e, t, a) => {
                                    let r = 'c_' + e;
                                    return e in Mr && (r += t), a && (r += 'hunter'), Hr.finishReason.$dyn(r);
                                })(a, l, r);
                            return i().createElement(
                                'div',
                                { className: Or.base },
                                i().createElement('div', { className: u.title }, o),
                                i().createElement('div', { className: u.subTitle }, c),
                                i().createElement(
                                    'div',
                                    { className: Or.vehicleTitle },
                                    i().createElement(Lr, { level: t, localizedName: n, type: s }),
                                ),
                            );
                        },
                    );
                function Wr() {
                    return (
                        (Wr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Wr.apply(this, arguments)
                    );
                }
                const $r = ({ children: e, tooltipArgs: t, className: a }) => {
                    if (!t) return e;
                    const r = i().createElement('div', { className: a }, e);
                    if (t.header || t.body) return i().createElement(_t, t, r);
                    const n = t.contentId;
                    return n ? i().createElement(ut, Wr({}, t, { contentId: n }), r) : i().createElement(ca, t, r);
                };
                let Gr, zr, Vr, jr, qr, Kr, Xr, Yr;
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
                        (e.WtHunterLootbox = 'wt_hunter'),
                        (e.WtBossLootbox = 'wt_boss'),
                        (e.WtProgressPoints = 'stamp'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.WTCommanderClaimable = 'wtCommanderClaimable'),
                        (e.WTCommanderClaimed = 'wtCommanderClaimed');
                })(Gr || (Gr = {})),
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
                    })(zr || (zr = {})),
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
                    })(Vr || (Vr = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(jr || (jr = {})),
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
                    })(qr || (qr = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Kr || (Kr = {})),
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
                    })(Xr || (Xr = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(Yr || (Yr = {}));
                Gr.Items,
                    Gr.Equipment,
                    Gr.Xp,
                    Gr.XpFactor,
                    Gr.Blueprints,
                    Gr.BlueprintsAny,
                    Gr.Goodies,
                    Gr.Berths,
                    Gr.Slots,
                    Gr.Tokens,
                    Gr.CrewSkins,
                    Gr.CrewBooks,
                    Gr.Customizations,
                    Gr.CreditsFactor,
                    Gr.TankmenXp,
                    Gr.TankmenXpFactor,
                    Gr.FreeXpFactor,
                    Gr.BattleToken,
                    Gr.PremiumUniversal,
                    Gr.NaturalCover,
                    Gr.BpCoin,
                    Gr.BattlePassSelectToken,
                    Gr.BattlaPassFinalAchievement,
                    Gr.BattleBadge,
                    Gr.BonusX5,
                    Gr.CrewBonusX3,
                    Gr.NewYearInvoice,
                    Gr.EpicSelectToken,
                    Gr.WtHunterLootbox,
                    Gr.WtBossLootbox,
                    Gr.WtProgressPoints,
                    Gr.Comp7TokenWeeklyReward,
                    Gr.DeluxeGift,
                    Gr.BattleBoosterGift,
                    Gr.OptionalDevice,
                    Gr.Gold,
                    Gr.Credits,
                    Gr.Crystal,
                    Gr.FreeXp,
                    Gr.BattlePassPoints,
                    Gr.EquipCoin,
                    Gr.PremiumPlus,
                    Gr.Premium;
                const Qr = [Vr.Small, Vr.Big],
                    Zr = {
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
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    Jr = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: r = Vr.Big,
                        special: n,
                        value: s,
                        valueType: u,
                        title: l,
                        style: o,
                        className: c,
                        classNames: _,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const p = ((e, t) => {
                                if (void 0 === t || !Qr.includes(e)) return null;
                                switch (t) {
                                    case qr.BATTLE_BOOSTER:
                                    case qr.BATTLE_BOOSTER_REPLACE:
                                        return Kr.BATTLE_BOOSTER;
                                }
                            })(r, n),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case qr.BATTLE_BOOSTER:
                                        return Xr.BATTLE_BOOSTER;
                                    case qr.BATTLE_BOOSTER_REPLACE:
                                        return Xr.BATTLE_BOOSTER_REPLACE;
                                    case qr.BUILT_IN_EQUIPMENT:
                                        return Xr.BUILT_IN_EQUIPMENT;
                                    case qr.EQUIPMENT_PLUS:
                                        return Xr.EQUIPMENT_PLUS;
                                    case qr.EQUIPMENT_TROPHY_BASIC:
                                        return Xr.EQUIPMENT_TROPHY_BASIC;
                                    case qr.EQUIPMENT_TROPHY_UPGRADED:
                                        return Xr.EQUIPMENT_TROPHY_UPGRADED;
                                    case qr.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Xr.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case qr.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Xr.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case qr.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Xr.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case qr.PROGRESSION_STYLE_UPGRADED_1:
                                        return Xr.PROGRESSION_STYLE_UPGRADED_1;
                                    case qr.PROGRESSION_STYLE_UPGRADED_2:
                                        return Xr.PROGRESSION_STYLE_UPGRADED_2;
                                    case qr.PROGRESSION_STYLE_UPGRADED_3:
                                        return Xr.PROGRESSION_STYLE_UPGRADED_3;
                                    case qr.PROGRESSION_STYLE_UPGRADED_4:
                                        return Xr.PROGRESSION_STYLE_UPGRADED_4;
                                    case qr.PROGRESSION_STYLE_UPGRADED_5:
                                        return Xr.PROGRESSION_STYLE_UPGRADED_5;
                                    case qr.PROGRESSION_STYLE_UPGRADED_6:
                                        return Xr.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(n),
                            g = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case jr.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case jr.CURRENCY:
                                    case jr.NUMBER:
                                        return i().createElement(Ga, { format: 'integral', value: Number(e) });
                                    case jr.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, u);
                        return i().createElement(
                            'div',
                            { className: j()(Zr.base, Zr[`base__${r}`], c), style: o },
                            i().createElement(
                                $r,
                                { tooltipArgs: m, className: Zr.tooltipWrapper },
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        'div',
                                        { className: j()(Zr.image, null == _ ? void 0 : _.image) },
                                        p &&
                                            i().createElement('div', {
                                                className: j()(Zr.highlight, null == _ ? void 0 : _.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${p}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            i().createElement('div', {
                                                className: j()(Zr.icon, null == _ ? void 0 : _.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            i().createElement('div', {
                                                className: j()(Zr.overlay, null == _ ? void 0 : _.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        i().createElement(
                                            'div',
                                            {
                                                className: j()(
                                                    Zr.info,
                                                    Zr[`info__${e}`],
                                                    u === jr.MULTI && Zr.info__multi,
                                                    null == _ ? void 0 : _.info,
                                                ),
                                            },
                                            g,
                                        ),
                                    l && i().createElement('div', { className: Zr.title }, l),
                                ),
                            ),
                            a &&
                                i().createElement(
                                    $r,
                                    { tooltipArgs: d },
                                    i().createElement('div', {
                                        className: j()(Zr.timer, null == _ ? void 0 : _.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var en = a(184);
                const tn = {
                        base: 'EventTasksList_base_4d',
                        EventTaskAnimation: 'EventTasksList_EventTaskAnimation_e2',
                        entering: 'EventTasksList_entering_24',
                        entered: 'EventTasksList_entered_d1',
                        wrapper: 'EventTasksList_wrapper_c4',
                        rewardsContainer: 'EventTasksList_rewardsContainer_f5',
                        title: 'EventTasksList_title_c3',
                        background: 'EventTasksList_background_c9',
                    },
                    an = (e) => ({ appear: 800 + 100 * e, enter: 400 }),
                    rn = () => {
                        const e = y('model.widgets.widgets'),
                            t = y('model').eventTooltipCategory,
                            a = (0, s.useCallback)((e) => ({ args: { id: t + ':' + e } }), [t]);
                        return i().createElement(
                            'div',
                            { className: tn.base },
                            e.length > 0 &&
                                i().createElement(
                                    'div',
                                    { className: tn.title },
                                    R.strings.event.postbattle.rewardsTitle(),
                                ),
                            i().createElement(
                                'div',
                                { className: tn.rewardsContainer },
                                e.map(({ value: e }, t) =>
                                    i().createElement(en.ZP, { key: t, in: !0, appear: !0, timeout: an(t) }, (t) => {
                                        const r = j()(tn.EventTaskAnimation, tn[t]);
                                        return i().createElement(
                                            'div',
                                            { className: tn.wrapper },
                                            i().createElement(
                                                'div',
                                                { className: r },
                                                i().createElement('div', { className: tn.background }),
                                                i().createElement(Jr, {
                                                    name: e.name,
                                                    tooltipArgs: a(e.tooltipId),
                                                    value: e.value,
                                                    image:
                                                        ((n = e.name),
                                                        `R.images.gui.maps.icons.wtevent.rewards.small.${n}`),
                                                    valueType: jr.MULTI,
                                                }),
                                            ),
                                        );
                                        var n;
                                    }),
                                ),
                            ),
                        );
                    };
                let nn;
                !(function (e) {
                    (e.DamageAssistedStun = 'damageAssistedStun'),
                        (e.Spotted = 'spotted'),
                        (e.DamageAssisted = 'damageAssisted'),
                        (e.DamageBlockedByArmor = 'damageBlockedByArmor'),
                        (e.CritsCount = 'critsCount'),
                        (e.DamageDealt = 'damageDealt'),
                        (e.Kills = 'kills');
                })(nn || (nn = {}));
                const sn = { lastArgument: null, lastResult: null },
                    un = (e) =>
                        e.reduce(
                            (e, { value: t }) =>
                                ((e, t) =>
                                    t.params.reduce((e, { value: t }) => {
                                        const a = e[t.paramName];
                                        if (!a) return e;
                                        const r = { value: a.value + t.detailedValue };
                                        return Object.assign({}, e, { [t.paramName]: r });
                                    }, e))(e, t),
                            Object.values(nn).reduce((e, t) => Object.assign({}, e, { [t]: { value: 0 } }), {}),
                        ),
                    ln = {
                        base: 'StatsEfficiency_base_49',
                        item: 'StatsEfficiency_item_a5',
                        item__gold: 'StatsEfficiency_item__gold_10',
                        item__silver: 'StatsEfficiency_item__silver_2b',
                        item__bronze: 'StatsEfficiency_item__bronze_a5',
                        iconWrapper: 'StatsEfficiency_iconWrapper_9c',
                        icon: 'StatsEfficiency_icon_27',
                        item__damageAssisted: 'StatsEfficiency_item__damageAssisted_22',
                        item__damageDealt: 'StatsEfficiency_item__damageDealt_15',
                        item__damageBlockedByArmor: 'StatsEfficiency_item__damageBlockedByArmor_d5',
                        item__kills: 'StatsEfficiency_item__kills_9f',
                        count: 'StatsEfficiency_count_3c',
                        title: 'StatsEfficiency_title_b5',
                    },
                    on = ['gold', 'silver', 'bronze'];
                const cn = [nn.Kills, nn.DamageDealt, nn.DamageAssisted, nn.DamageBlockedByArmor],
                    _n = (e, t) => {
                        for (let a = 0; a < e.length; a++) {
                            const r = e[a].value,
                                n = r.paramName,
                                s = r.rank;
                            if (n === t) return s;
                        }
                        return 0;
                    },
                    mn = (0, s.memo)(() => {
                        const e = y('model.common.detailedEfficiency.personalEfficiency'),
                            t = y('model.common.detailedEfficiency.enemies'),
                            a =
                                (((r = t) === sn.lastArgument && null !== sn.lastResult) ||
                                    ((sn.lastArgument = r), (sn.lastResult = un(r))),
                                sn.lastResult);
                        var r;
                        const n = (0, s.useMemo)(
                            () =>
                                Object.entries(a)
                                    .filter(([e]) => cn.includes(e))
                                    .map(([t, { value: a }]) => [
                                        t,
                                        { value: a, rank: _n(e, t), tooltipArgs: { parameter: t } },
                                    ])
                                    .sort(([e], [t]) => cn.indexOf(e) - cn.indexOf(t)),
                            [e, a],
                        );
                        return i().createElement(
                            'div',
                            { className: ln.base },
                            n.map(([e, { value: t, rank: a, tooltipArgs: r }]) => {
                                const n = R.strings.postbattle_screen.common.efficiencyParameter.$dyn(e),
                                    s = o.cy.getNumberFormat(t),
                                    u = j()(
                                        ln.item,
                                        ln[`item__${e}`],
                                        (function (e) {
                                            return e < on.length ? ln[`item__${on[e]}`] : '';
                                        })(a),
                                    );
                                return i().createElement(
                                    ut,
                                    {
                                        key: e,
                                        contentId: R.views.lobby.postbattle.tooltips.PersonalEfficiency('resId'),
                                        args: r,
                                    },
                                    i().createElement(
                                        'div',
                                        { className: u },
                                        i().createElement(
                                            'div',
                                            { className: ln.iconWrapper },
                                            i().createElement('div', { className: ln.icon }),
                                        ),
                                        i().createElement('div', { className: ln.count }, s),
                                        i().createElement('div', { className: ln.title }, n),
                                    ),
                                );
                            }),
                        );
                    }),
                    dn = {
                        footerTransition: 'VehicleImage_footerTransition_c5',
                        base: 'VehicleImage_base_27',
                        base__enter: 'VehicleImage_base__enter_58',
                        vehicleImageContainer: 'VehicleImage_vehicleImageContainer_75',
                        vehicleImageBackground: 'VehicleImage_vehicleImageBackground_e7',
                        vehicleImageForeground: 'VehicleImage_vehicleImageForeground_e1',
                        tankShadow: 'VehicleImage_tankShadow_ab',
                        shadow: 'VehicleImage_shadow_3c',
                        footer: 'VehicleImage_footer_bc',
                        base__exit: 'VehicleImage_base__exit_be',
                        base__active: 'VehicleImage_base__active_54',
                        base__done: 'VehicleImage_base__done_b0',
                        subTitle: 'VehicleImage_subTitle_85',
                        subTitle__extraSmall: 'VehicleImage_subTitle__extraSmall_39',
                        subTitle__small: 'VehicleImage_subTitle__small_b4',
                        title: 'VehicleImage_title_55',
                        title__extraSmall: 'VehicleImage_title__extraSmall_14',
                        title__small: 'VehicleImage_title__small_68',
                        vehicleName: 'VehicleImage_vehicleName_6c',
                        tankShadowWrapper: 'VehicleImage_tankShadowWrapper_fd',
                        vehicleImage: 'VehicleImage_vehicleImage_fe',
                        vehicleImage__extraSmall: 'VehicleImage_vehicleImage__extraSmall_32',
                        vehicleImage__small: 'VehicleImage_vehicleImage__small_38',
                        vehicleImage__medium: 'VehicleImage_vehicleImage__medium_ba',
                        vehicleImage__large: 'VehicleImage_vehicleImage__large_2c',
                        vehicleImageBackground__lose: 'VehicleImage_vehicleImageBackground__lose_e3',
                        vehicleImageBackground__win: 'VehicleImage_vehicleImageBackground__win_db',
                        vehicleImageBackground__tie: 'VehicleImage_vehicleImageBackground__tie_c3',
                        vehicleImageForeground__lose: 'VehicleImage_vehicleImageForeground__lose_33',
                        vehicleImageForeground__win: 'VehicleImage_vehicleImageForeground__win_7c',
                        vehicleImageForeground__tie: 'VehicleImage_vehicleImageForeground__tie_ff',
                        personal: 'VehicleImage_personal_61',
                        arenaInfo: 'VehicleImage_arenaInfo_8c',
                        arenaInfoItem: 'VehicleImage_arenaInfoItem_5b',
                        arenaDate: 'VehicleImage_arenaDate_57',
                    },
                    pn = (0, s.memo)(({ generalInfo: e }) => {
                        const t = e.winStatus,
                            a = e.vehicleIconName,
                            r = e.vehicleLevel,
                            n = (0, s.useContext)(_e),
                            u = ft(['vehicleImage'], dn),
                            l = sa(t),
                            o = R.images.gui.maps.shop.vehicles.c_600x450.$dyn(a),
                            c = j()(dn.vehicleImageBackground, dn[`vehicleImageBackground__${l}`]),
                            _ = j()(dn.vehicleImageForeground, dn[`vehicleImageForeground__${l}`]),
                            m = (0, s.useMemo)(
                                () => ({
                                    enter: dn.base__enter,
                                    enterActive: dn.base__active,
                                    enterDone: dn.base__done,
                                    exit: dn.base__exit,
                                }),
                                [],
                            ),
                            d = ((e) => (e < 4 ? 'small' : e > 7 ? 'big' : 'middle'))(r),
                            p = j()(u.vehicleImage, dn[`vehicleImage__${d}`]),
                            E = (0, s.useMemo)(() => ({ backgroundImage: `url(${o})` }), [o]);
                        return i().createElement(
                            ia.Z,
                            { in: ((g = n.state), g === ue.FirstIterationInDone), timeout: 700, classNames: m },
                            i().createElement(
                                'div',
                                { className: j()(dn.base) },
                                i().createElement(
                                    'div',
                                    { className: dn.vehicleImageContainer },
                                    i().createElement('div', { className: c }),
                                    i().createElement('div', { className: p, style: E }),
                                    i().createElement('div', { className: _ }),
                                ),
                                i().createElement('div', { className: dn.shadow }),
                                i().createElement(
                                    'div',
                                    { className: dn.tankShadowWrapper },
                                    i().createElement('div', { className: dn.tankShadow }),
                                ),
                                i().createElement('div', { className: dn.footer }, i().createElement(mn, null)),
                            ),
                        );
                        var g;
                    }),
                    En = {
                        base: 'PersonalResultTab_base_7a',
                        base__exit: 'PersonalResultTab_base__exit_ee',
                        rewardTapeWrapper: 'PersonalResultTab_rewardTapeWrapper_51',
                        base__enter: 'PersonalResultTab_base__enter_51',
                        blueSun: 'PersonalResultTab_blueSun_04',
                        bottomShadingAdditional: 'PersonalResultTab_bottomShadingAdditional_08',
                        centralAnimationWrapper: 'PersonalResultTab_centralAnimationWrapper_d7',
                        bottomShading: 'PersonalResultTab_bottomShading_dc',
                        base__done: 'PersonalResultTab_base__done_cb',
                        base__active: 'PersonalResultTab_base__active_62',
                        darkFallow: 'PersonalResultTab_darkFallow_d0',
                        vignette: 'PersonalResultTab_vignette_b3',
                        mapInfo: 'PersonalResultTab_mapInfo_01',
                        rewardTape: 'PersonalResultTab_rewardTape_cc',
                        progressiveReward: 'PersonalResultTab_progressiveReward_76',
                        detailsButton: 'PersonalResultTab_detailsButton_bd',
                        eventTasksListWrapper: 'PersonalResultTab_eventTasksListWrapper_01',
                        base__small: 'PersonalResultTab_base__small_85',
                        base__extraSmall: 'PersonalResultTab_base__extraSmall_6e',
                    };
                function gn() {
                    return (
                        (gn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        gn.apply(this, arguments)
                    );
                }
                const bn = x('model.common', (e) => Object.assign({}, e))(({ generalInfo: e, rewards: t }) => {
                    const a = t.progressiveReward,
                        r = vr.Victory === e.winStatus,
                        n = (0, s.useContext)(_e),
                        u = n.setState,
                        l = (() => {
                            const e = (0, s.useContext)(W);
                            return e.extraSmall
                                ? 'extraSmall'
                                : e.small
                                  ? 'small'
                                  : e.medium
                                    ? 'medium'
                                    : e.large || e.extraLarge
                                      ? 'large'
                                      : void 0;
                        })(),
                        o = j()(En.base, En[`base__${l}`]);
                    (0, s.useEffect)(() => {
                        u(ue.Idle);
                    }, [u]),
                        (0, s.useEffect)(
                            () => () => {
                                u(ue.Idle);
                            },
                            [u],
                        );
                    const c = (0, s.useCallback)(() => {
                            n.setState(ue.Idle);
                        }, [n]),
                        _ = (0, s.useMemo)(
                            () => ({
                                enter: En.base__enter,
                                enterActive: En.base__active,
                                enterDone: En.base__done,
                                exit: En.base__exit,
                            }),
                            [],
                        ),
                        m = 'mediumTank' === e.vehicleType;
                    return i().createElement(
                        ia.Z,
                        {
                            in: ((d = n.state), d === ue.FirstIterationInDone),
                            timeout: 700,
                            classNames: _,
                            onExited: c,
                        },
                        i().createElement(
                            'div',
                            { className: o },
                            r && i().createElement('div', { className: En.blueSun }),
                            i().createElement('div', { className: En.darkFallow }),
                            i().createElement('div', { className: En.vignette }),
                            i().createElement(Ur, gn({ isHunter: m }, e)),
                            i().createElement(
                                'div',
                                { className: En.centralAnimationWrapper },
                                i().createElement(pn, { generalInfo: e }),
                                i().createElement(
                                    'div',
                                    { className: En.rewardTapeWrapper },
                                    i().createElement('div', { className: En.rewardTape }, i().createElement(Ar, null)),
                                ),
                                i().createElement(
                                    'div',
                                    { className: En.eventTasksListWrapper },
                                    i().createElement(rn, null),
                                ),
                            ),
                            a.isEnabled &&
                                i().createElement('div', { className: En.progressiveReward }, i().createElement(Rr, a)),
                        ),
                    );
                    var d;
                });
                function hn() {
                    return (
                        (hn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        hn.apply(this, arguments)
                    );
                }
                function vn(e, t, a) {
                    if (!t && !a) throw new Error('You should define at least one helper function');
                    return function (r) {
                        var n, s;
                        return (
                            (s = n =
                                class extends i().Component {
                                    constructor(r) {
                                        super(r);
                                        let n = {};
                                        const s = c().caller,
                                            i = window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e,
                                            u = _(i, window);
                                        if ((t && (n = Object.assign({}, n, t(u))), a)) {
                                            const e = a(u);
                                            for (const t in e)
                                                Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t].bind(u));
                                        }
                                        this.state = n;
                                    }
                                    render() {
                                        return i().createElement(r, hn({}, this.props, this.state));
                                    }
                                }),
                            (n.displayName = `InjectProps(${S(r)})`),
                            s
                        );
                    };
                }
                let fn;
                !(function (e) {
                    (e[(e.DESCENDING = -1)] = 'DESCENDING'), (e[(e.ASCENDING = 1)] = 'ASCENDING');
                })(fn || (fn = {}));
                const An = (e) => (t) => (a, r) => e.call(null, a, r) * t,
                    Cn =
                        (...e) =>
                        (t, a) => {
                            for (let r = 0; r < e.length; r++) {
                                const n = e[r].call(null, t, a);
                                if (0 !== n) return n;
                            }
                            return 0;
                        },
                    Dn = (e, t) => {
                        const a = e.toUpperCase(),
                            r = t.toUpperCase();
                        return a === r ? 0 : a > r ? 1 : -1;
                    },
                    Fn = {
                        base: 'PlayerVehicleInfo_base_06',
                        level__rightAlign: 'PlayerVehicleInfo_level__rightAlign_6a',
                        type: 'PlayerVehicleInfo_type_5d',
                    };
                let Bn;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'), (e[(e.RIGHT = 1)] = 'RIGHT');
                })(Bn || (Bn = {}));
                const wn = (0, s.memo)(
                        ({
                            vehicleType: e,
                            localizedVehicleName: t,
                            user: a,
                            isPersonal: r = !1,
                            isSameSquad: n = !1,
                        }) => {
                            const u = ft(['vehicleName'], Fn),
                                l = a.isTeamKiller,
                                o = a.isKilled,
                                c = Ht({ isTeamKiller: l, isKilled: o, isPersonal: r, isSameSquad: n }),
                                _ = (0, s.useMemo)(() => ({ color: c }), [c]),
                                m = (0, s.useMemo)(() => {
                                    const t = Nr(e);
                                    return {
                                        maskImage: `url(${R.images.gui.maps.icons.wtevent.postbattle.$dyn(t)})`,
                                        backgroundColor: c,
                                    };
                                }, [e, c]);
                            return i().createElement(
                                'div',
                                { className: Fn.base, style: _ },
                                i().createElement('div', { className: Fn.type, style: m }),
                                i().createElement('div', { className: u.vehicleName }, t),
                            );
                        },
                    ),
                    yn = 'EfficiencyAchievements_base_04',
                    Sn = ({ achievements: e }) => {
                        const t = e.filter((e) => e.value.groupID === ua);
                        return i().createElement(
                            'div',
                            { className: yn },
                            i().createElement(ba, { achievements: t, isCentered: !0 }),
                        );
                    },
                    Tn = (e, t, a) => (a < e ? e : a > t ? t : a),
                    Rn = [];
                function Nn(e) {
                    const t = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, t.current)(...e), Rn)
                    );
                }
                function xn(e, t, a = []) {
                    const r = (0, s.useRef)(0),
                        n = (0, s.useCallback)(() => window.clearInterval(r.current), a || []);
                    (0, s.useEffect)(() => n, [n]);
                    const i = (null != a ? a : []).concat([t]);
                    return [
                        (0, s.useCallback)((a) => {
                            (r.current = window.setInterval(() => e(a, !0), t)), e(a, !1);
                        }, i),
                        n,
                    ];
                }
                function In(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Pn(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return Pn(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Pn(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                function kn(e, t, a) {
                    const r = (0, s.useMemo)(
                        () =>
                            (function (e, t, a, r) {
                                let n,
                                    s = !1,
                                    i = 0;
                                function u() {
                                    n && clearTimeout(n);
                                }
                                function l(...l) {
                                    const o = this,
                                        c = Date.now() - i;
                                    function _() {
                                        (i = Date.now()), a.apply(o, l);
                                    }
                                    s ||
                                        (r && !n && _(),
                                        u(),
                                        void 0 === r && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (n = setTimeout(
                                                  r
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : _,
                                                  void 0 === r ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((r = a), (a = t), (t = void 0)),
                                    (l.cancel = function () {
                                        u(), (s = !0);
                                    }),
                                    l
                                );
                            })(a, e),
                        t,
                    );
                    return (0, s.useEffect)(() => r.cancel, [r]), r;
                }
                var Ln = a(30);
                let On;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(On || (On = {}));
                const Mn = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Hn = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const u = (e, a) => {
                            const r = t(e),
                                n = r[0],
                                s = r[1];
                            return s <= n ? 0 : Tn(n, s, a);
                        };
                        return (l = {}) => {
                            const o = l.settings,
                                c = void 0 === o ? Mn : o,
                                _ = (0, s.useRef)(null),
                                m = (0, s.useRef)(null),
                                d = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        r = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        n = (e, ...a) => {
                                            for (var r, n = In(t(e).values()); !(r = n()).done; ) (0, r.value)(...a);
                                        };
                                    return (0, s.useMemo)(() => ({ on: a, off: r, trigger: n }), []);
                                })(),
                                p = kn(
                                    () => {
                                        v.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                E = (0, Ln.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (a(t, e), d.trigger('change', e), i && p());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                g = E[0],
                                b = E[1],
                                h = (0, s.useCallback)(
                                    (e, t, a) => {
                                        var r;
                                        const n = g.scrollPosition.get(),
                                            s = (null != (r = g.scrollPosition.goal) ? r : 0) - n;
                                        return u(e, t * a + s + n);
                                    },
                                    [g.scrollPosition],
                                ),
                                f = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const r = _.current;
                                        r &&
                                            b.start({
                                                scrollPosition: u(r, e),
                                                immediate: t,
                                                reset: a,
                                                config: c.animationConfig,
                                                from: { scrollPosition: u(r, g.scrollPosition.get()) },
                                            });
                                    },
                                    [b, c.animationConfig, g.scrollPosition],
                                ),
                                A = (0, s.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            a = m.current;
                                        if (!t || !a) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return n(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, c.step),
                                            s = h(t, e, r);
                                        f(s);
                                    },
                                    [f, h, c.step],
                                ),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && A(r(e)),
                                            _.current && d.trigger('mouseWheel', e, g.scrollPosition, t(_.current));
                                    },
                                    [g.scrollPosition, A, d],
                                ),
                                D = ((e, t = []) => {
                                    const a = (0, s.useRef)(),
                                        r = (0, s.useCallback)((...t) => {
                                            a.current && a.current(), (a.current = e(...t));
                                        }, t);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        Ct(() => {
                                            const e = _.current;
                                            e &&
                                                (f(u(e, g.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [f, g.scrollPosition.goal],
                                ),
                                F = Nn(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = u(e, g.scrollPosition.goal);
                                    t !== g.scrollPosition.goal && f(t, { immediate: !0 }),
                                        d.trigger('recalculateContent');
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            );
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? n(m.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: u,
                                    handleMouseWheel: C,
                                    applyScroll: f,
                                    applyStepTo: A,
                                    contentRef: _,
                                    wrapperRef: m,
                                    scrollPosition: b,
                                    animationScroll: g,
                                    recalculateContent: F,
                                    events: { on: d.on, off: d.off },
                                }),
                                [g.scrollPosition, f, A, d.off, d.on, F, C, b, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Un = Hn({
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
                        getDirection: (e) => (e.deltaY > 1 ? On.Next : On.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Wn = 'HorizontalBar_base_49',
                    $n = 'HorizontalBar_base__nonActive_82',
                    Gn = 'HorizontalBar_leftButton_5f',
                    zn = 'HorizontalBar_rightButton_03',
                    Vn = 'HorizontalBar_track_0d',
                    jn = 'HorizontalBar_thumb_fd',
                    qn = 'HorizontalBar_rail_32',
                    Kn = 'disable',
                    Xn = { pending: !1, offset: 0 },
                    Yn = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Qn = () => {},
                    Zn = (e, t) => Math.max(20, e.offsetWidth * t),
                    Jn = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Yn, onDrag: r = Qn }) => {
                        const n = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, s.useState)(Xn),
                            d = m[0],
                            p = m[1],
                            E = (0, s.useCallback)(
                                (e) => {
                                    p(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            g = () => {
                                const t = o.current,
                                    a = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && t && a && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    _ = Tn(0, 1, s / (n - r)),
                                    m = (t.offsetWidth - Zn(t, i)) * _;
                                (a.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (u.current && l.current && o.current && c.current) {
                                            if (0 === e)
                                                return u.current.classList.add(Kn), void l.current.classList.remove(Kn);
                                            if (
                                                ((t = o.current),
                                                (a = c.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return u.current.classList.remove(Kn), void l.current.classList.add(Kn);
                                            var t, a;
                                            u.current.classList.remove(Kn), l.current.classList.remove(Kn);
                                        }
                                    })(m);
                            },
                            b = Nn(() => {
                                (() => {
                                    const t = c.current,
                                        a = o.current,
                                        r = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && r && a)) return;
                                    const i = Math.min(1, r / s);
                                    (t.style.width = `${Zn(a, i)}px`),
                                        (t.style.display = 'flex'),
                                        n.current &&
                                            (1 === i ? n.current.classList.add($n) : n.current.classList.remove($n));
                                })(),
                                    g();
                            });
                        (0, s.useEffect)(() => Ct(b)),
                            (0, s.useEffect)(
                                () =>
                                    Ct(() => {
                                        const t = () => {
                                            g();
                                        };
                                        let a = Qn;
                                        const r = () => {
                                            a(), (a = Ct(b));
                                        };
                                        return (
                                            e.events.on('recalculateContent', b),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                a(),
                                                    e.events.off('recalculateContent', b),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!d.pending) return;
                                const t = v.O.client.events.mouse.move(([t, a]) => {
                                        var n;
                                        const s = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!s || !i) return;
                                        const u = o.current,
                                            l = c.current;
                                        if (!u || !l) return;
                                        if ('inside' === a && t.clientX < 0) return;
                                        const _ = t.clientX - d.offset - u.getBoundingClientRect().x,
                                            m = (_ / u.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: l, thumbOffset: _, contentOffset: m });
                                    }),
                                    a = v.O.client.events.mouse.up(() => {
                                        t(), E(Xn);
                                    });
                                return () => {
                                    t(), a();
                                };
                            }, [e, d.offset, d.pending, r, E]);
                        const h = xn((t) => e.applyStepTo(t), _, [e]),
                            f = h[0],
                            A = h[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Kn) || Ee('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: j()(Wn, t.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: j()(Gn, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Kn) || 0 !== e.button || (Ee('play'), f(On.Next));
                                },
                                onMouseUp: A,
                                ref: u,
                                onMouseEnter: C,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: j()(Vn, t.track),
                                    onMouseDown: (t) => {
                                        const r = c.current;
                                        if (r && 0 === t.button)
                                            if ((Ee('play'), t.target === r))
                                                E({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const r = c.current,
                                                        n = e.contentRef.current;
                                                    if (!r || !n) return;
                                                    const s = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > r.getBoundingClientRect().x ? On.Prev : On.Next);
                                            }
                                    },
                                    ref: o,
                                    onMouseEnter: C,
                                },
                                i().createElement('div', { ref: c, className: j()(jn, t.thumb) }),
                                i().createElement('div', { className: j()(qn, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: j()(zn, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Kn) || 0 !== e.button || (Ee('play'), f(On.Prev));
                                },
                                onMouseUp: A,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    es = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ts = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: u,
                        scrollClassName: l,
                        getStepByRailClick: o,
                        onDrag: c,
                    }) => {
                        const _ = (0, s.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: j()(es.base, e.base) });
                            }, [r]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: j()(es.defaultScroll, a), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: j()(es.defaultScrollArea, n) },
                                i().createElement(as, { className: l, api: m, classNames: u }, e),
                            ),
                            i().createElement(Jn, { getStepByRailClick: o, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    as = ({ api: e, className: t, classNames: a, children: r }) => (
                        (0, s.useEffect)(() => Ct(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: j()(es.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: j()(es.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: j()(es.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (as.Bar = Jn), (as.Default = ts);
                const rs = Hn({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? On.Next : On.Prev),
                    }),
                    ns = 'VerticalBar_base_f3',
                    ss = 'VerticalBar_base__nonActive_42',
                    is = 'VerticalBar_topButton_d7',
                    us = 'VerticalBar_bottomButton_06',
                    ls = 'VerticalBar_track_df',
                    os = 'VerticalBar_thumb_32',
                    cs = 'VerticalBar_rail_43',
                    _s = 'disable',
                    ms = () => {},
                    ds = { pending: !1, offset: 0 },
                    ps = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Es = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    gs = (e, t) => Math.max(20, e.offsetHeight * t),
                    bs = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = ps, onDrag: r = ms }) => {
                        const n = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, s.useState)(ds),
                            d = m[0],
                            p = m[1],
                            E = (0, s.useCallback)(
                                (e) => {
                                    p(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            g = Nn(() => {
                                const t = c.current,
                                    a = o.current,
                                    r = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(r && s && t && a)) return;
                                const i = Math.min(1, r / s);
                                return (
                                    (t.style.height = `${gs(a, i)}px`),
                                    (t.style.display = 'flex'),
                                    n.current &&
                                        (1 === i ? n.current.classList.add(ss) : n.current.classList.remove(ss)),
                                    i
                                );
                            }),
                            b = Nn(() => {
                                const t = o.current,
                                    a = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && t && a && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    _ = Tn(0, 1, s / (n - r)),
                                    m = (t.offsetHeight - gs(t, i)) * _;
                                (a.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (u.current && l.current && o.current && c.current) {
                                            if (0 === Math.round(e))
                                                return u.current.classList.add(_s), void l.current.classList.remove(_s);
                                            if (
                                                ((t = o.current),
                                                (a = c.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return u.current.classList.remove(_s), void l.current.classList.add(_s);
                                            var t, a;
                                            u.current.classList.remove(_s), l.current.classList.remove(_s);
                                        }
                                    })(m);
                            }),
                            h = Nn(() => {
                                Es(e, () => {
                                    g(), b();
                                });
                            });
                        (0, s.useEffect)(() => Ct(h)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    Es(e, () => {
                                        b();
                                    });
                                };
                                let a = ms;
                                const r = () => {
                                    a(), (a = Ct(h));
                                };
                                return (
                                    e.events.on('recalculateContent', h),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        a(),
                                            e.events.off('recalculateContent', h),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!d.pending) return;
                                const t = v.O.client.events.mouse.up(() => {
                                        E(ds);
                                    }),
                                    a = v.O.client.events.mouse.move(([t]) => {
                                        Es(e, (a) => {
                                            const n = o.current,
                                                s = c.current,
                                                i = e.getContainerSize();
                                            if (!n || !s || !i) return;
                                            const u = t.screenY - d.offset - n.getBoundingClientRect().y,
                                                l = (u / n.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: s, thumbOffset: u, contentOffset: l });
                                        });
                                    });
                                return () => {
                                    t(), a();
                                };
                            }, [e, d.offset, d.pending, r, E]);
                        const f = xn((t) => e.applyStepTo(t), _, [e]),
                            A = f[0],
                            C = f[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const D = (e) => {
                            e.target.classList.contains(_s) || Ee('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: j()(ns, t.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: j()(is, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_s) || 0 !== e.button || (Ee('play'), A(On.Next));
                                },
                                ref: u,
                                onMouseEnter: D,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: j()(ls, t.track),
                                    onMouseDown: (t) => {
                                        const r = c.current;
                                        if (r && 0 === t.button)
                                            if ((Ee('play'), t.target === r))
                                                E({ pending: !0, offset: t.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        Es(e, (r) => {
                                                            if (!r) return;
                                                            const n = a(e),
                                                                s = e.clampPosition(r, r.scrollTop + n * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > r.getBoundingClientRect().y ? On.Prev : On.Next);
                                            }
                                    },
                                    ref: o,
                                    onMouseEnter: D,
                                },
                                i().createElement('div', { ref: c, className: j()(os, t.thumb) }),
                                i().createElement('div', { className: j()(cs, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: j()(us, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_s) || 0 !== e.button || (Ee('play'), A(On.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    hs = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    vs = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: u,
                        scrollClassNames: l,
                        getStepByRailClick: o,
                        onDrag: c,
                    }) => {
                        const _ = (0, s.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: j()(hs.base, e.base) });
                            }, [r]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: j()(hs.defaultScroll, a), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: j()(hs.area, n) },
                                i().createElement(fs, { className: u, classNames: l, api: m }, e),
                            ),
                            i().createElement(bs, { getStepByRailClick: o, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    fs = ({ className: e, classNames: t, children: a, api: r }) => (
                        (0, s.useEffect)(() => Ct(r.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: j()(hs.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: j()(hs.content, null == t ? void 0 : t.content), ref: r.contentRef },
                                a,
                            ),
                        )
                    );
                fs.Default = vs;
                const As = { Vertical: n, Horizontal: r },
                    Cs = {
                        row: 'StatisticsInfoRow_row_8b',
                        row__extraSmall: 'StatisticsInfoRow_row__extraSmall_92',
                        row__subgroup: 'StatisticsInfoRow_row__subgroup_58',
                        separator: 'StatisticsInfoRow_separator_5f',
                        separator__small: 'StatisticsInfoRow_separator__small_62',
                        description: 'StatisticsInfoRow_description_dd',
                        icon: 'StatisticsInfoRow_icon_82',
                    },
                    Ds = R.strings.postbattle_screen.detailedStats.statistics.battleDuration('resId'),
                    Fs = ({ id: e, attackReason: t, itemType: a, value: r, isSubgroup: n = !1, hasTooltip: s }) => {
                        const u = ft(['row'], Cs),
                            l = R.strings.postbattle_screen.TeamStats.$dyn(e),
                            c = ((e, t, a) => {
                                switch (e) {
                                    case 'integer':
                                        return $a(t, 'integral');
                                    case 'mileage':
                                        return (t / 1e3).toFixed(2);
                                    case 'int_array':
                                        return t.map(({ value: e }) => e).join(' / ');
                                    case 'local_time':
                                        return o.Z5.getTimeFormat(t, o.lf.SHORT_FORMAT);
                                    case 'battle_duration':
                                        return o.cy.getTimeString(Ds, t, !0);
                                    case 'lifetime':
                                        return -1 === a ? ' - ' : o.cy.getTimeString(Ds, t, !0);
                                    default:
                                        return '';
                                }
                            })(a, r, t),
                            _ = j()(u.row, n && Cs.row__subgroup);
                        return i().createElement(
                            'div',
                            { className: _ },
                            s && Boolean(e)
                                ? i().createElement(
                                      _t,
                                      {
                                          header: R.strings.postbattle_screen.TeamStats.tooltip.header.$dyn(e),
                                          body: R.strings.postbattle_screen.TeamStats.tooltip.body.$dyn(e),
                                      },
                                      i().createElement(
                                          'div',
                                          { className: Cs.description },
                                          l,
                                          i().createElement('img', {
                                              src: R.images.gui.maps.icons.postbattle.team_statistics.icon_information(),
                                              className: Cs.icon,
                                              alt: '',
                                          }),
                                      ),
                                  )
                                : l,
                            i().createElement('span', { className: Cs.separator }),
                            i().createElement('span', { className: Cs.value }, c),
                        );
                    },
                    Bs = { group__last: 'StatisticsInfoGroup_group__last_2e' };
                function ws() {
                    return (
                        (ws =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        ws.apply(this, arguments)
                    );
                }
                const ys = ({ group: e, attackReason: t }) =>
                        i().createElement(
                            'div',
                            { className: Bs.group },
                            e.map((e, a) =>
                                i().createElement(Fs, ws({ key: e.id, attackReason: t, isSubgroup: a > 0 }, e)),
                            ),
                        ),
                    Ss = {
                        base: 'StatisticsInfo_base_29',
                        base__extraSmall: 'StatisticsInfo_base__extraSmall_5d',
                        groups: 'StatisticsInfo_groups_85',
                    },
                    Ts = ({ items: e, attackReason: t }) => {
                        const a = ft(['base'], Ss),
                            r = rs(),
                            n = e.map((e) => e.value),
                            u = [];
                        let l = [],
                            o = n[0].blockIdx;
                        for (let e = 0; e < n.length; e++)
                            n[e].blockIdx !== o && (u.push(l), (o = n[e].blockIdx), (l = [])),
                                l.push(n[e]),
                                e === n.length - 1 && u.push(l);
                        return (
                            (0, s.useEffect)(() => {
                                r.applyScroll(0);
                            }, [r, e]),
                            i().createElement(
                                'div',
                                { className: a.base },
                                i().createElement(
                                    As.Vertical.Area.Default,
                                    { api: r, key: Math.random() },
                                    i().createElement(
                                        'div',
                                        { className: Ss.groups },
                                        u.map((e, a) => i().createElement(ys, { key: a, attackReason: t, group: e })),
                                    ),
                                ),
                            )
                        );
                    },
                    Rs = ['isTeamKiller', 'isKilled'];
                const Ns = (e) => {
                        let t = e.isTeamKiller,
                            a = e.isKilled,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, Rs);
                        const n = (({ isTeamKiller: e, isKilled: t }) =>
                                e ? (t ? Ot.KilledTeamKiller : Ot.TeamKiller) : Ot.DetailedInfoPlayerBase)({
                                isTeamKiller: t,
                                isKilled: a,
                            }),
                            u = (0, s.useMemo)(() => ({ color: n }), [n]);
                        return i().createElement('div', { style: u }, i().createElement(kt, r));
                    },
                    xs = {
                        base: 'DetailedStats_base_24',
                        header: 'DetailedStats_header_d3',
                        killedUserBackground: 'DetailedStats_killedUserBackground_ab',
                        vehicleInfo: 'DetailedStats_vehicleInfo_2a',
                        vehicleName: 'DetailedStats_vehicleName_b9',
                        vehicleName__extraSmall: 'DetailedStats_vehicleName__extraSmall_07',
                        vehicleIcon: 'DetailedStats_vehicleIcon_ed',
                        vehicleIcon__extraSmall: 'DetailedStats_vehicleIcon__extraSmall_89',
                        playerSummary: 'DetailedStats_playerSummary_67',
                        playerSummary__extraSmall: 'DetailedStats_playerSummary__extraSmall_1c',
                        close: 'DetailedStats_close_84',
                        closeText: 'DetailedStats_closeText_49',
                        stats: 'DetailedStats_stats_0e',
                        stats__extraSmall: 'DetailedStats_stats__extraSmall_f3',
                        stats__info: 'DetailedStats_stats__info_55',
                        stats__bordered: 'DetailedStats_stats__bordered_a9',
                    };
                function Is() {
                    return (
                        (Is =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Is.apply(this, arguments)
                    );
                }
                const Ps = R.images.gui.maps.icons.vehicle.c_420x307;
                const ks = (0, s.memo)(({ onClose: e, manageMainEscapeListener: t, player: a, killerPlayer: r }) => {
                        (0, s.useEffect)(() => (t ? (t(!1), () => t(!0)) : () => null), [t]), ra(ta.n.ESCAPE, e);
                        const n = a.isPersonal,
                            u = a.isSameSquad,
                            l = a.localizedVehicleName,
                            o = a.user,
                            c = a.details,
                            _ = c.achievements,
                            m = c.attackReason,
                            d = c.statistics,
                            p = a.vehicleName,
                            E = a.vehicleLevel,
                            g = a.vehicleType,
                            b = o.isKilled,
                            h = (0, s.useCallback)(() => ge.playHighlight(), []),
                            v = ft(['vehicleIcon', 'vehicleName', 'playerSummary', 'stats'], xs),
                            f = Ps.$dyn(
                                (function (e) {
                                    return e.split(':')[1].toLowerCase().replace('-', '_');
                                })(p),
                            ),
                            A = (0, s.useMemo)(() => ({ backgroundImage: `url(${f})` }), [f]),
                            C = _.length > 0,
                            D = j()(v.stats, xs.stats__info, !C && xs.stats__bordered),
                            F = n && window.model.userStatus.isLeftBattle;
                        return i().createElement(
                            'div',
                            { className: xs.base },
                            i().createElement(
                                'div',
                                { className: xs.header },
                                b && i().createElement('div', { className: xs.killedUserBackground }),
                                i().createElement('div', { className: v.vehicleIcon, style: A }),
                                i().createElement(
                                    'div',
                                    { className: xs.vehicleInfo },
                                    i().createElement(
                                        'div',
                                        { className: v.vehicleName },
                                        i().createElement(Ns, Is({}, o, { isAnonymizerShown: !0 })),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: v.playerSummary },
                                        i().createElement(wn, {
                                            vehicleLevel: E,
                                            vehicleType: g,
                                            localizedVehicleName: l,
                                            user: o,
                                            isPersonal: n,
                                            isSameSquad: u,
                                            alignment: Bn.LEFT,
                                        }),
                                        i().createElement(Xt, {
                                            userName: o.userName,
                                            attackReason: m,
                                            killer: r,
                                            isLeftBattle: F,
                                        }),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: xs.close, onClick: e, onMouseEnter: h },
                                    i().createElement(
                                        'div',
                                        { className: xs.closeText },
                                        R.strings.postbattle_screen.PostbattleScreenApp.close(),
                                    ),
                                ),
                            ),
                            C && i().createElement(Sn, { achievements: _ }),
                            i().createElement(
                                'div',
                                { className: D },
                                i().createElement(Ts, { attackReason: m, items: d }),
                            ),
                        );
                    }),
                    Ls = 'allies',
                    Os = {
                        base: 'ActiveArrow_base_f7',
                        line: 'ActiveArrow_line_1f',
                        arrow: 'ActiveArrow_arrow_88',
                        arrow__top: 'ActiveArrow_arrow__top_87',
                    },
                    Ms = (0, s.memo)(({ direction: e }) => {
                        const t = j()(Os.arrow, Os[`arrow__${e}`]);
                        return i().createElement(
                            'div',
                            { className: Os.base },
                            i().createElement('div', { className: Os.line }),
                            i().createElement('div', { className: t }),
                            i().createElement('div', { className: Os.line }),
                        );
                    }),
                    Hs = {
                        base: 'TeamTable_base_2f',
                        base__small: 'TeamTable_base__small_ad',
                        base__extraSmall: 'TeamTable_base__extraSmall_14',
                        base__boss: 'TeamTable_base__boss_b2',
                        base__scroll: 'TeamTable_base__scroll_81',
                        hidden: 'TeamTable_hidden_85',
                        head: 'TeamTable_head_6e',
                        head__small: 'TeamTable_head__small_9e',
                        head__extraSmall: 'TeamTable_head__extraSmall_2a',
                        body: 'TeamTable_body_f2',
                        bodyWrapper: 'TeamTable_bodyWrapper_50',
                        headRow: 'TeamTable_headRow_e2',
                        bodyRow: 'TeamTable_bodyRow_c9',
                        bodyRow__isFirst: 'TeamTable_bodyRow__isFirst_ea',
                        bodyRow__isActive: 'TeamTable_bodyRow__isActive_33',
                        bodyRow__isKilled: 'TeamTable_bodyRow__isKilled_81',
                        cell: 'TeamTable_cell_c1',
                        headCell: 'TeamTable_headCell_50',
                        cell__small: 'TeamTable_cell__small_0d',
                        cell__extraSmall: 'TeamTable_cell__extraSmall_30',
                        headCell__small: 'TeamTable_headCell__small_a8',
                        headCell__extraSmall: 'TeamTable_headCell__extraSmall_ca',
                        cell__icon: 'TeamTable_cell__icon_55',
                        headCell__icon: 'TeamTable_headCell__icon_0a',
                        cell__smallIcon: 'TeamTable_cell__smallIcon_85',
                        headCell__smallIcon: 'TeamTable_headCell__smallIcon_d8',
                        cell__name: 'TeamTable_cell__name_c8',
                        cell__vehicle: 'TeamTable_cell__vehicle_06',
                        cell__medal: 'TeamTable_cell__medal_86',
                        cell__squad: 'TeamTable_cell__squad_b3',
                        cell__kills: 'TeamTable_cell__kills_87',
                        cell__xp: 'TeamTable_cell__xp_d5',
                        headCell__name: 'TeamTable_headCell__name_df',
                        headCell__vehicle: 'TeamTable_headCell__vehicle_75',
                        playerName: 'TeamTable_playerName_a0',
                        name: 'TeamTable_name_66',
                        name__small: 'TeamTable_name__small_43',
                        name__extraSmall: 'TeamTable_name__extraSmall_8b',
                        headHover: 'TeamTable_headHover_51',
                        headCell__active: 'TeamTable_headCell__active_82',
                        headIcon: 'TeamTable_headIcon_10',
                        headIcon__damageHeader: 'TeamTable_headIcon__damageHeader_15',
                        headIcon__fragHeader: 'TeamTable_headIcon__fragHeader_67',
                        headIcon__xpHeader: 'TeamTable_headIcon__xpHeader_18',
                        headIcon__tankHeader: 'TeamTable_headIcon__tankHeader_b5',
                        headIcon__medalHeader: 'TeamTable_headIcon__medalHeader_07',
                        headIcon__squadHeader: 'TeamTable_headIcon__squadHeader_96',
                        headDivider: 'TeamTable_headDivider_2c',
                        glow: 'TeamTable_glow_98',
                        activeArrow: 'TeamTable_activeArrow_de',
                    },
                    Us = (0, s.memo)(
                        ({ isCurrent: e, isReverse: t, style: a, children: r, onSort: n, sortType: u, tooltip: l }) => {
                            const o = (0, s.useCallback)(() => {
                                    ge.playClick(), n(u);
                                }, [n, u]),
                                c = (0, s.useCallback)(() => ge.playHighlight(), []),
                                _ = ft(['headCell'], Hs),
                                m = j()(_.headCell, a, e && Hs.headCell__active, t && Hs.headCell__reverse);
                            return i().createElement(
                                _t,
                                l,
                                i().createElement(
                                    'div',
                                    { className: m, onClick: o, onMouseEnter: c },
                                    r,
                                    e &&
                                        i().createElement(
                                            'div',
                                            { className: Hs.activeArrow },
                                            i().createElement(Ms, { direction: t ? 'top' : 'bottom' }),
                                        ),
                                ),
                            );
                        },
                    ),
                    Ws = R.strings.postbattle_screen.TeamTable,
                    $s = i().memo(({ sortType: e, sortDirection: t, onSort: a, teamRole: r }) => {
                        const n = ft(['head'], Hs),
                            u = j()(Hs.headCell__smallIcon),
                            l = 1 === t,
                            o = (0, s.useCallback)((e) => {
                                const t = Ws.$dyn(e);
                                return { header: t.$dyn('header'), body: t.$dyn('body') };
                            }, []),
                            c = r === Ce.Hunter ? Ws.stats.hunterTeam() : Ws.stats.bossTeam(),
                            _ = (0, s.useCallback)(
                                (e) => {
                                    switch (e) {
                                        case Ae.VEHICLE:
                                            return Hs.headCell__vehicle;
                                        case Ae.MEDAL:
                                        case Ae.PLATOON:
                                            return u;
                                        default:
                                            return Hs.headCell__icon;
                                    }
                                },
                                [u],
                            );
                        return i().createElement(
                            'div',
                            { className: n.head },
                            i().createElement(
                                'div',
                                { className: Hs.headRow },
                                Object.values(Ae).map((t, n, s) => {
                                    if (t === Ae.NONE) return null;
                                    if (t === Ae.PLATOON && r === Ce.Boss) return null;
                                    if (t === Ae.MEDAL) return null;
                                    const u = j()(Hs.headIcon, Hs[`headIcon__${t}`]),
                                        m = t === Ae.NAME,
                                        d = m ? Hs.headCell__name : _(t);
                                    return i().createElement(
                                        Us,
                                        {
                                            key: t,
                                            style: d,
                                            isCurrent: e === t,
                                            isReverse: l,
                                            sortType: t,
                                            onSort: a,
                                            tooltip: o(t),
                                        },
                                        m
                                            ? i().createElement('span', { className: Hs.playerName }, c)
                                            : i().createElement('div', { className: u }),
                                        i().createElement('div', { className: Hs.headHover }),
                                        n < s.length - 2 && i().createElement('div', { className: Hs.headDivider }),
                                    );
                                }),
                            ),
                        );
                    });
                let Gs;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Gs || (Gs = {}));
                const zs = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: r = 0,
                        args: n,
                        isEnabled: i = !0,
                        onMouseDown: u,
                    }) => {
                        const l = (0, s.useCallback)(() => {
                                (0, o.c9)(o.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: n,
                                }),
                                    ge.playYes();
                            }, [n, t, a, r]),
                            c = (0, s.useCallback)(() => {
                                (0, o.c9)(o.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, r]),
                            _ = (0, s.useCallback)(
                                (e) => {
                                    u && u(e), ((e) => e.button === Gs.RIGHT)(e) && l();
                                },
                                [u, l],
                            );
                        return (
                            (0, s.useEffect)(() => {
                                !1 === i && c();
                            }, [i, c]),
                            i ? (0, s.cloneElement)(e, { onMouseDown: _ }) : e
                        );
                    },
                    Vs = ['children'];
                function js() {
                    return (
                        (js =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        js.apply(this, arguments)
                    );
                }
                const qs = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, Vs);
                        return i().createElement(
                            zs,
                            js({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Ks = {
                        base: 'TableRendererMedal_base_69',
                        medalContainer: 'TableRendererMedal_medalContainer_18',
                        medalIcon: 'TableRendererMedal_medalIcon_c7',
                        medalCount: 'TableRendererMedal_medalCount_3e',
                        medalCount__extraSmall: 'TableRendererMedal_medalCount__extraSmall_b9',
                        medalCount__small: 'TableRendererMedal_medalCount__small_92',
                    },
                    Xs = (0, s.memo)(({ details: e, isPersonal: t, isSameSquad: a, user: r }) => {
                        const n = e.achievements,
                            u = r.isKilled,
                            l = n.reduce((e, t) => `${e}${R.strings.achievements.$dyn(t.value.name)}\n`, ''),
                            o = ft(['medalCount'], Ks),
                            c = Mt({ isPersonal: t, isSameSquad: a, isKilled: u }),
                            _ = (0, s.useMemo)(() => ({ backgroundColor: c }), [c]);
                        return i().createElement(
                            _t,
                            { body: l },
                            i().createElement(
                                'div',
                                { className: Ks.base },
                                i().createElement(
                                    'div',
                                    { className: Ks.medalContainer },
                                    i().createElement('div', { className: Ks.medalIcon, style: _ }),
                                    n.length > 1 && i().createElement('div', { className: o.medalCount }, n.length),
                                ),
                            ),
                        );
                    }),
                    Ys = {
                        base: 'TableRendererVehicleInfo_base_34',
                        base__small: 'TableRendererVehicleInfo_base__small_68',
                        base__extraSmall: 'TableRendererVehicleInfo_base__extraSmall_14',
                        vehicleImage: 'TableRendererVehicleInfo_vehicleImage_f9',
                        vehicleImage__small: 'TableRendererVehicleInfo_vehicleImage__small_2d',
                        vehicleImage__extraSmall: 'TableRendererVehicleInfo_vehicleImage__extraSmall_21',
                        vehicleImage__isKilled: 'TableRendererVehicleInfo_vehicleImage__isKilled_98',
                    },
                    Qs = R.images.gui.maps.icons.vehicle;
                const Zs = (0, s.memo)(
                        ({
                            vehicleName: e,
                            vehicleLevel: t,
                            vehicleType: a,
                            localizedVehicleName: r,
                            user: n,
                            isPersonal: u = !1,
                            isSameSquad: l = !1,
                        }) => {
                            const o = n.isKilled,
                                c = ft(['vehicleImage', 'base'], Ys),
                                _ = j()(c.base),
                                m = j()(c.vehicleImage, o && Ys.vehicleImage__isKilled),
                                d = (0, s.useMemo)(() => {
                                    const t = Qs.$dyn(
                                        (function (e) {
                                            return e.replace(':', '_').replace('-', '_');
                                        })(e),
                                    );
                                    return { backgroundImage: `url(${t})` };
                                }, [e]);
                            return i().createElement(
                                'div',
                                { className: _ },
                                i().createElement('div', { className: m, style: d }),
                                i().createElement(wn, {
                                    vehicleLevel: t,
                                    vehicleType: a,
                                    localizedVehicleName: r,
                                    user: n,
                                    isPersonal: u,
                                    isSameSquad: l,
                                }),
                            );
                        },
                    ),
                    Js = 'TableRendererSquad_base_46',
                    ei = 'TableRendererSquad_base__highlighted_82',
                    ti = (0, s.memo)(({ squadIdx: e, currentSquadIdx: t }) => {
                        const a = j()(Js, t === e && ei);
                        return i().createElement('div', { className: a }, e);
                    }),
                    ai = {
                        base: 'ActiveGlow_base_b2',
                        base__active: 'ActiveGlow_base__active_25',
                        activeGlow: 'ActiveGlow_activeGlow_7d',
                        activeGlow__left: 'ActiveGlow_activeGlow__left_88',
                        activeGlow__right: 'ActiveGlow_activeGlow__right_87',
                    };
                let ri;
                !(function (e) {
                    (e.RIGHT = 'right'), (e.LEFT = 'left');
                })(ri || (ri = {}));
                const ni = (0, s.memo)(({ position: e = ri.LEFT, isActive: t = !1 }) => {
                    const a = j()(ai.activeGlow, ai[`activeGlow__${e}`]),
                        r = j()(ai.base, t && ai.base__active);
                    return i().createElement('div', { className: r }, i().createElement('div', { className: a }));
                });
                function si() {
                    return (
                        (si =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        si.apply(this, arguments)
                    );
                }
                const ii = i().memo(
                        ({
                            isSelected: e,
                            onSelect: t,
                            currentSquadIdx: a,
                            alias: r,
                            player: n,
                            isFirst: u = !1,
                            teamRole: l,
                        }) => {
                            const o = n.idx,
                                c = n.dbID,
                                _ = n.isPersonal,
                                m = n.isSameSquad,
                                d = n.vehicleCD,
                                p = n.details.achievements,
                                E = n.user,
                                g = E.userName,
                                b = E.isTeamKiller,
                                h = E.clanAbbrev,
                                v = E.isKilled,
                                f = (0, s.useCallback)(() => {
                                    ge.playYes(), t(r, o, c, g);
                                }, [r, t, o, c, g]),
                                A = (0, s.useMemo)(
                                    () => ({ vehicleCD: d, dbID: c, userName: g, clanAbbrev: h }),
                                    [d, c, g, h],
                                ),
                                C = ft(['cell', 'name'], Hs),
                                D = (0, s.useCallback)(() => ge.playHighlight(), []),
                                F = j()(
                                    Hs.bodyRow,
                                    e && Hs.bodyRow__isActive,
                                    u && Hs.bodyRow__isFirst,
                                    v && Hs.bodyRow__isKilled,
                                ),
                                B = Mt({ isPersonal: _, isSameSquad: m, isKilled: v }),
                                w = (0, s.useMemo)(() => ({ color: B }), [B]),
                                y = j()(C.cell, Hs.cell__smallIcon, Hs.cell__squad),
                                S = j()(C.cell, Hs.cell__name),
                                T = j()(C.cell, Hs.cell__icon),
                                R = j()(C.cell, Hs.cell__vehicle),
                                N = j()(C.cell, Hs.cell__smallIcon, Hs.cell__medal),
                                x = j()(T, Hs.cell__kills),
                                I = j()(T, Hs.cell__xp),
                                P = j()(C.name, Hs.name);
                            return i().createElement(
                                qs,
                                { args: A },
                                i().createElement(
                                    'div',
                                    { className: F, style: w, onClick: f, onMouseEnter: D },
                                    l === Ce.Hunter &&
                                        i().createElement(
                                            'div',
                                            { className: y },
                                            n.squadIdx > 0 &&
                                                i().createElement(ti, { squadIdx: n.squadIdx, currentSquadIdx: a }),
                                        ),
                                    i().createElement(
                                        'div',
                                        { className: S },
                                        i().createElement(
                                            'div',
                                            { className: P },
                                            i().createElement(
                                                Wt,
                                                si({}, E, {
                                                    isAnonymizerShown: _,
                                                    isTeamKiller: b,
                                                    isPersonal: _,
                                                    isSameSquad: m,
                                                    isKilled: v,
                                                }),
                                            ),
                                        ),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: T },
                                        i().createElement('div', { className: Hs.value }, n.damageDealt),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: x },
                                        i().createElement('div', { className: Hs.value }, n.kills),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: I },
                                        i().createElement('div', { className: Hs.value }, n.earnedXp),
                                    ),
                                    i().createElement('div', { className: R }, i().createElement(Zs, n)),
                                    i().createElement(
                                        'div',
                                        { className: N },
                                        p.length > 0 && i().createElement(Xs, n),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: Hs.glow },
                                        i().createElement(ni, { position: r === Ls ? ri.RIGHT : ri.LEFT, isActive: e }),
                                    ),
                                ),
                            );
                        },
                    ),
                    ui = ({
                        players: e,
                        squadIndex: t = -1,
                        selectedPlayerIndex: a,
                        hasScroll: r,
                        teamRole: n,
                        alias: s,
                        onSelect: u,
                    }) => {
                        const l = e.map(({ value: e }, r) =>
                                i().createElement(ii, {
                                    key: e.idx,
                                    currentSquadIdx: t,
                                    player: e,
                                    isSelected: a === e.idx,
                                    alias: s,
                                    onSelect: u,
                                    isFirst: 0 === r,
                                    teamRole: n,
                                }),
                            ),
                            o = rs(),
                            c = ft(['body'], Hs),
                            _ = j()(c.body, r && Hs.body__scroll);
                        return i().createElement(
                            'div',
                            { className: _ },
                            r
                                ? i().createElement(
                                      As.Vertical.Area.Default,
                                      { api: o },
                                      i().createElement('div', { className: Hs.bodyWrapper }, l),
                                  )
                                : l,
                        );
                    },
                    li = ['isHidden', 'hasScroll', 'alias', 'sortType', 'sortDirection', 'onSort'];
                function oi() {
                    return (
                        (oi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        oi.apply(this, arguments)
                    );
                }
                const ci = (e) => {
                        let t = e.isHidden,
                            a = e.hasScroll,
                            r = e.alias,
                            n = e.sortType,
                            u = e.sortDirection,
                            l = e.onSort,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, li);
                        const c = (0, s.useContext)(Cl),
                            _ = r === Ls ? c.allies : c.enemies,
                            m = ft(['base'], Hs),
                            d = j()(m.base, a && Hs.base__scroll, _ === Ce.Boss && Hs.base__boss);
                        return i().createElement(
                            'div',
                            { className: t ? Hs.hidden : '' },
                            i().createElement(
                                'div',
                                { className: d },
                                i().createElement($s, {
                                    isAllies: r === Ls,
                                    sortType: n,
                                    sortDirection: u,
                                    onSort: l,
                                    teamRole: _,
                                }),
                                i().createElement(ui, oi({ alias: r, hasScroll: a, teamRole: _ }, o)),
                            ),
                        );
                    },
                    _i = (e, t) => {
                        for (let a = 0; a < t.length; a++) if (t[a].value.user.userName === e) return t[a].value;
                    };
                const mi = ({ value: e }, { value: t }) => Dn(e.user.userName, t.user.userName),
                    di = (e) => {
                        const t = ((e) => (t, a) => {
                            const r = t[e],
                                n = a[e];
                            return 'string' == typeof r && 'string' == typeof n
                                ? Dn(r, n)
                                : 'number' == typeof r && 'number' == typeof n
                                  ? r - n
                                  : 0;
                        })(e);
                        return ({ value: e }, { value: a }) => t(e, a);
                    },
                    pi = {
                        [Ae.DAMAGE_DEALT]: An(Cn(di('damageDealt'), mi)),
                        [Ae.KILLS]: An(Cn(di('kills'), mi)),
                        [Ae.EARNED_XP]: An(Cn(di('earnedXp'), mi)),
                        [Ae.PLATOON]: An(Cn(di('squadIdx'), mi)),
                        [Ae.VEHICLE]: An(di('idx')),
                        [Ae.NAME]: An(mi),
                        [Ae.MEDAL]: An(
                            Cn(
                                ({ value: e }, { value: t }) =>
                                    e.details.achievements.length - t.details.achievements.length,
                                mi,
                            ),
                        ),
                        [Ae.NONE]: An(() => 0),
                    },
                    Ei = (e, t, a) => (e.sort(pi[t](a)), e),
                    gi = {
                        base: 'TeamsResultTab_base_5f',
                        base__small: 'TeamsResultTab_base__small_69',
                        base__extraSmall: 'TeamsResultTab_base__extraSmall_70',
                        teams: 'TeamsResultTab_teams_b3',
                        teams__small: 'TeamsResultTab_teams__small_0b',
                        teams__extraSmall: 'TeamsResultTab_teams__extraSmall_54',
                        teams__scroll: 'TeamsResultTab_teams__scroll_2f',
                        detailsWrapper: 'TeamsResultTab_detailsWrapper_28',
                    },
                    bi = vn('model.team', (e) => Object.assign({}, e))(
                        ({ allies: e, enemies: t, manageMainEscapeListener: a }) => {
                            const r = (0, s.useState)(fn.DESCENDING),
                                n = r[0],
                                u = r[1],
                                l = (0, s.useState)(Ae.EARNED_XP),
                                o = l[0],
                                c = l[1],
                                _ = (0, s.useState)(''),
                                m = _[0],
                                d = _[1],
                                p = (0, s.useState)(-1),
                                E = p[0],
                                g = p[1],
                                b = (0, s.useMemo)(() => {
                                    const e = t.slice();
                                    return Ei(e, o, n);
                                }, [t, n, o]),
                                h = (0, s.useMemo)(() => {
                                    const t = e.slice();
                                    return Ei(t, o, n);
                                }, [e, n, o]),
                                v = (0, s.useCallback)(
                                    (e, t) => {
                                        const a = t === E;
                                        d(a ? '' : e), g(a ? -1 : t);
                                    },
                                    [E],
                                ),
                                f = (0, s.useCallback)(() => {
                                    ge.playClick(), v('', -1);
                                }, [v]),
                                A = (0, s.useCallback)(
                                    (e) => {
                                        e === o ? u(-1 * n) : (c(e), u(fn.DESCENDING));
                                    },
                                    [n, o],
                                ),
                                C = h.length > 15 || b.length > 15,
                                D = m === Ls,
                                F = (0, s.useMemo)(() => {
                                    if (!m) return null;
                                    const r = ((D ? h : b).find(({ value: { idx: e } }) => e === E) || {}).value;
                                    if (!r) return null;
                                    const n = (function ({ allies: e, enemies: t, username: a }) {
                                        return _i(a, t) || _i(a, e);
                                    })({ enemies: t, allies: e, username: r.details.killer.userName });
                                    return i().createElement(
                                        'div',
                                        { className: gi.detailsWrapper },
                                        i().createElement(ks, {
                                            onClose: f,
                                            manageMainEscapeListener: a,
                                            player: r,
                                            killerPlayer: n,
                                        }),
                                    );
                                }, [e, t, m, D, h, b, f, a, E]),
                                B = (0, s.useMemo)(() => {
                                    const e = h.find(({ value: e }) => e.isPersonal);
                                    return e && e.value ? e.value.squadIdx : void 0;
                                }, [h]),
                                w = ft(['base', 'teams'], gi),
                                y = j()(w.teams, C && gi.teams__scroll);
                            return i().createElement(
                                'div',
                                { className: w.base },
                                i().createElement(
                                    'div',
                                    { className: y },
                                    i().createElement(ci, {
                                        alias: Ls,
                                        players: h,
                                        isHidden: Boolean(m) && !D,
                                        squadIndex: B,
                                        selectedPlayerIndex: D ? E : -1,
                                        onSelect: v,
                                        onSort: A,
                                        sortType: o,
                                        sortDirection: n,
                                        hasScroll: h.length > 15,
                                    }),
                                    F,
                                    i().createElement(ci, {
                                        alias: 'enemies',
                                        players: b,
                                        isHidden: Boolean(m) && D,
                                        selectedPlayerIndex: D ? -1 : E,
                                        onSelect: v,
                                        onSort: A,
                                        sortType: o,
                                        sortDirection: n,
                                        hasScroll: b.length > 15,
                                    }),
                                ),
                            );
                        },
                    ),
                    hi = {
                        base: 'PremiumBenefitsSection_base_5f',
                        content: 'PremiumBenefitsSection_content_65',
                        baseGradient: 'PremiumBenefitsSection_baseGradient_60',
                        baseBorder: 'PremiumBenefitsSection_baseBorder_95',
                        totals: 'PremiumBenefitsSection_totals_2c',
                        totals__extraSmall: 'PremiumBenefitsSection_totals__extraSmall_5a',
                        count: 'PremiumBenefitsSection_count_c8',
                        button: 'PremiumBenefitsSection_button_e1',
                        button__extraSmall: 'PremiumBenefitsSection_button__extraSmall_2c',
                        currency: 'PremiumBenefitsSection_currency_cc',
                        premiumIcon: 'PremiumBenefitsSection_premiumIcon_64',
                        premiumIcon__extraSmall: 'PremiumBenefitsSection_premiumIcon__extraSmall_40',
                        contentText: 'PremiumBenefitsSection_contentText_ab',
                        premiumLabelText: 'PremiumBenefitsSection_premiumLabelText_5c',
                        premiumLabelText__extraSmall: 'PremiumBenefitsSection_premiumLabelText__extraSmall_b9',
                        currenciesWrapper: 'PremiumBenefitsSection_currenciesWrapper_e7',
                    },
                    vi = () => {
                        const e = y('model.details.premiumBonuses'),
                            t = e.currencies,
                            a = e.onBuyPremium,
                            r = R.strings.postbattle_screen.detailsStats.buyPremiumBtn(),
                            n = R.strings.postbattle_screen.detailsStats.buyPremiumLabel(),
                            u = R.strings.postbattle_screen.detailsStats.premiumCurrency(),
                            l = R.views.lobby.postbattle.tooltips.PremiumPlus('resId'),
                            o = (0, s.useCallback)(() => {
                                a();
                            }, [a]),
                            c = ft(['totals', 'premiumIcon', 'button', 'premiumLabelText'], hi);
                        return i().createElement(
                            'div',
                            { className: hi.base },
                            i().createElement('div', { className: hi.baseBorder }),
                            i().createElement('div', { className: hi.baseGradient }),
                            i().createElement(
                                'div',
                                { className: hi.content },
                                i().createElement(
                                    'div',
                                    { className: c.totals },
                                    i().createElement(
                                        ut,
                                        { contentId: l },
                                        i().createElement('div', { className: c.premiumIcon }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: hi.contentText },
                                        i().createElement(
                                            _t,
                                            { body: u },
                                            i().createElement('p', { className: c.premiumLabelText }, n),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: hi.currenciesWrapper },
                                            t.map(({ value: e }, t) =>
                                                i().createElement(
                                                    _t,
                                                    { key: t, body: u },
                                                    i().createElement(
                                                        'div',
                                                        { className: hi.count },
                                                        i().createElement('span', null, '+'),
                                                        i().createElement(Ka, {
                                                            type: e.type,
                                                            size: ja.BIG,
                                                            amount: e.amount,
                                                            className: hi.currency,
                                                        }),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                                i().createElement(
                                    ut,
                                    { contentId: l },
                                    i().createElement('button', { className: c.button, onClick: o }, r),
                                ),
                            ),
                        );
                    },
                    fi = 'subgroupTotal',
                    Ai = 'total',
                    Ci = 'credits',
                    Di = {
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
                        'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                        'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                        'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                        'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
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
                        value__eliteXP: 'Currency_value__eliteXP_62',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    };
                let Fi, Bi, wi;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(Fi || (Fi = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(Bi || (Bi = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(wi || (wi = {}));
                const yi = (0, s.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: t,
                            size: a,
                            type: r,
                            value: n,
                            discountValue: s,
                            showPlus: u,
                            isEnough: l = !0,
                            stockBackgroundName: o = wi.Red,
                            className: c,
                            classNames: _,
                        }) =>
                            i().createElement(
                                'span',
                                { className: j()(Di.base, Di[`base__${a}`], c) },
                                i().createElement(
                                    'span',
                                    {
                                        className: j()(
                                            Di.value,
                                            Di[`value__${r}`],
                                            !l && Di.value__notEnough,
                                            null == _ ? void 0 : _.value,
                                        ),
                                    },
                                    u && n > 0 && '+',
                                    i().createElement(Ga, { value: n, format: r === Bi.gold ? 'gold' : 'integral' }),
                                ),
                                i().createElement('span', {
                                    className: j()(Di.icon, Di[`icon__${r}-${a}`], null == _ ? void 0 : _.icon),
                                }),
                                e &&
                                    i().createElement(
                                        'span',
                                        {
                                            className: j()(
                                                Di.stock,
                                                s && Di.stock__indent,
                                                t && Di.stock__interactive,
                                                null == _ ? void 0 : _.stock,
                                            ),
                                        },
                                        i().createElement('span', {
                                            className: Di.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${o})` },
                                        }),
                                        Boolean(s) && s,
                                    ),
                            ),
                    ),
                    Si = {
                        base: 'ReportLine_base_dd',
                        base__separated: 'ReportLine_base__separated_d0',
                        mediaExtraSmall: 'ReportLine_mediaExtraSmall_4e',
                        base__subtotal: 'ReportLine_base__subtotal_bd',
                        base__total: 'ReportLine_base__total_c6',
                        base__tooltip: 'ReportLine_base__tooltip_55',
                        separator: 'ReportLine_separator_45',
                        label: 'ReportLine_label_ba',
                        label__zero: 'ReportLine_label__zero_0c',
                        factor: 'ReportLine_factor_42',
                        factorText: 'ReportLine_factorText_89',
                        value: 'ReportLine_value_2e',
                        value__total: 'ReportLine_value__total_b8',
                        value__zero: 'ReportLine_value__zero_f7',
                        wrapper: 'ReportLine_wrapper_8d',
                        wrapper__double: 'ReportLine_wrapper__double_c0',
                    },
                    Ti = (e) => (((e) => e in Bi)(e) ? e : Bi.credits),
                    Ri = ({
                        isTotal: e,
                        isSubTotal: t,
                        isSeparated: a,
                        isTooltip: r,
                        isAdditionalInfo: n,
                        text: s,
                        factor: u,
                        currency: l,
                        additionalCurrency: o,
                        showCurrencyPlus: c,
                        mediaSize: _,
                        className: m,
                    }) => {
                        const d = ft(['base'], Si),
                            p = j()(
                                d.base,
                                a && Si.base__separated,
                                t && Si.base__subtotal,
                                e && Si.base__total,
                                r && Si.base__tooltip,
                                _ && Si[_],
                                m,
                            ),
                            E = j()(Si.label, n && Si.label__zero),
                            g = Fi.small,
                            b = o ? [o, l] : [l];
                        return i().createElement(
                            'div',
                            { className: p },
                            i().createElement(
                                'div',
                                { className: E },
                                s,
                                u &&
                                    i().createElement(
                                        'span',
                                        { className: Si.factor },
                                        '(',
                                        i().createElement('span', { className: Si.factorText }, u),
                                        ')',
                                    ),
                            ),
                            i().createElement('div', { className: Si.separator }),
                            b.map((e, t) => {
                                const a = t > 0,
                                    r = a && !e,
                                    s = j()(Si.wrapper, a && Si.wrapper__double),
                                    u = j()(Si.value, ((e && 0 === e.amount) || n) && Si.value__zero);
                                if (r)
                                    return i().createElement(
                                        'div',
                                        { key: t, className: s },
                                        i().createElement('div', { className: Si.separator }),
                                    );
                                if (e) {
                                    const r = e.amount >= 0,
                                        n = `${e.type}${e.amount}${t}`;
                                    return i().createElement(
                                        'div',
                                        { key: n, className: s },
                                        a && i().createElement('div', { className: Si.separator }),
                                        i().createElement(
                                            'div',
                                            { className: u },
                                            i().createElement(yi, {
                                                key: n,
                                                isEnough: r,
                                                size: g,
                                                showPlus: c,
                                                type: Ti(e.type),
                                                value: e.amount,
                                            }),
                                        ),
                                    );
                                }
                            }),
                        );
                    },
                    Ni = ({
                        stringID: e,
                        tooltipStringID: t,
                        tags: a,
                        currencies: r,
                        groupType: n,
                        isSeparated: u,
                        className: l,
                    }) => {
                        const o = ((e) => {
                                switch (e) {
                                    case 'creditsGroup':
                                    default:
                                        return [Ci];
                                    case 'crystalsGroup':
                                        return ['crystal'];
                                    case 'xpGroup':
                                        return ['freeXp', 'xp'];
                                }
                            })(n),
                            c = o[0],
                            _ = o[1];
                        let m = null,
                            d = null;
                        r.forEach(({ value: e }) => {
                            e.type === c && (m = e), e.type === _ && (d = e);
                        });
                        const p = a.map((e) => e.value),
                            E = p.includes(Ai),
                            g = p.includes(fi),
                            b = !E && !g && !p.includes('earned'),
                            h = p.includes('earned_record')
                                ? R.strings.postbattle_screen.detailsStats.factors.record()
                                : '',
                            v = (0, s.useContext)(W).extraSmall ? 'mediaExtraSmall' : '',
                            f = Boolean(t !== R.invalid()),
                            A = (0, s.useMemo)(() => ({ isEnabled: f, header: e, body: t }), [f, e, t]);
                        return i().createElement(
                            _t,
                            A,
                            i().createElement(
                                'div',
                                { className: l },
                                i().createElement(Ri, {
                                    text: e,
                                    factor: h,
                                    isTotal: E,
                                    isSubTotal: g,
                                    isSeparated: u,
                                    showCurrencyPlus: b,
                                    currency: m,
                                    additionalCurrency: d,
                                    mediaSize: v,
                                    className: l,
                                }),
                            ),
                        );
                    },
                    xi = {
                        base: 'ReportSubGroup_base_a2',
                        base__extraSmall: 'ReportSubGroup_base__extraSmall_7b',
                        rows: 'ReportSubGroup_rows_49',
                        message: 'ReportSubGroup_message_ce',
                    };
                function Ii() {
                    return (
                        (Ii =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Ii.apply(this, arguments)
                    );
                }
                const Pi = vn('model.details', ({ arenaType: e }) => ({ arenaType: e }))(
                        ({ records: e, type: t, arenaType: a, groupType: r }) => {
                            const n = ft(['base'], xi),
                                s = [];
                            let u = null,
                                l = e.length ? e[0].value.blockIdx : 0;
                            e.forEach((e) => {
                                const t = e.value;
                                if (t.tags.map((e) => e.value).includes(fi))
                                    return void (u = i().createElement(Ni, Ii({ groupType: r }, t)));
                                const a = t.blockIdx > l;
                                a && (l = t.blockIdx),
                                    s.push(
                                        i().createElement(Ni, Ii({ key: t.stringID, isSeparated: a, groupType: r }, t)),
                                    );
                            });
                            const o =
                                2 === a
                                    ? R.strings.postbattle_screen.detailsStats.noRecords.trainingBattle()
                                    : R.strings.postbattle_screen.detailsStats.noRecords.$dyn(t);
                            return i().createElement(
                                'div',
                                { className: n.base },
                                s.length
                                    ? i().createElement('div', { className: xi.rows }, s)
                                    : i().createElement('div', { className: xi.message }, o),
                                u,
                            );
                        },
                    ),
                    ki = 'ReportGroup_base_d0';
                function Li() {
                    return (
                        (Li =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Li.apply(this, arguments)
                    );
                }
                const Oi = ({ groups: e, groupType: t }) => {
                        const a = e.map((e, a) => i().createElement(Pi, Li({ key: a, groupType: t }, e)));
                        return i().createElement('div', { className: ki }, a);
                    },
                    Mi = {
                        title: 'ReportSection_title_91',
                        subTitle: 'ReportSection_subTitle_5e',
                        title__extraSmall: 'ReportSection_title__extraSmall_a6',
                        totalSeparator: 'ReportSection_totalSeparator_03',
                        afterTotalSeparator: 'ReportSection_afterTotalSeparator_a6',
                        afterTotalSeparator__extraSmall: 'ReportSection_afterTotalSeparator__extraSmall_e8',
                    };
                function Hi() {
                    return (
                        (Hi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Hi.apply(this, arguments)
                    );
                }
                const Ui = ({ records: e, type: t }) => {
                        const a = ft(['title', 'afterTotalSeparator'], Mi),
                            r = R.strings.postbattle_screen.detailsStats.sectionTitle.$dyn(t);
                        let n,
                            s = [];
                        const u = [];
                        return (
                            e.forEach(({ value: r }, l) => {
                                const o = 'record' === r.type;
                                if (!o) {
                                    const e = r;
                                    s.push(e);
                                }
                                if (
                                    ((o || l === e.length - 1) &&
                                        s.length &&
                                        (u.push(i().createElement(Oi, { groupType: t, groups: s, key: u.length })),
                                        (s = [])),
                                    o)
                                ) {
                                    const e = r;
                                    e.tags.some((e) => e.value === Ai) &&
                                        (u.push(
                                            i().createElement('div', { className: Mi.totalSeparator, key: u.length }),
                                        ),
                                        (n = a.afterTotalSeparator)),
                                        u.push(
                                            i().createElement(
                                                Ni,
                                                Hi({}, e, { groupType: t, className: n, key: u.length }),
                                            ),
                                        );
                                }
                            }),
                            i().createElement(
                                i().Fragment,
                                null,
                                u.length > 0 && i().createElement('div', { className: a.title }, r),
                                u,
                            )
                        );
                    },
                    Wi = {
                        base: 'FinancialReportTab_base_fe',
                        base__withoutFooter: 'FinancialReportTab_base__withoutFooter_e9',
                        base__extraSmall: 'FinancialReportTab_base__extraSmall_85',
                        report: 'FinancialReportTab_report_7f',
                        report__extraSmall: 'FinancialReportTab_report__extraSmall_70',
                        contentContainer: 'FinancialReportTab_contentContainer_0e',
                        section: 'FinancialReportTab_section_a1',
                        benefits: 'FinancialReportTab_benefits_cc',
                        scrollLip: 'FinancialReportTab_scrollLip_98',
                        scrollLip__extraSmall: 'FinancialReportTab_scrollLip__extraSmall_a6',
                        scrollLip__top: 'FinancialReportTab_scrollLip__top_64',
                        scrollLip__bottom: 'FinancialReportTab_scrollLip__bottom_1a',
                        scrollLip__hide: 'FinancialReportTab_scrollLip__hide_be',
                        footer: 'FinancialReportTab_footer_c3',
                    },
                    $i = vn('model.details', (e) => ({ groups: e.groups, premiumBonuses: e.premiumBonuses }))(
                        ({ groups: e, premiumBonuses: t }) => {
                            const a = ft(['base', 'report', 'scrollLip'], Wi),
                                r = y('model').accountType,
                                n = rs(),
                                s = j()(a.scrollLip, Wi.scrollLip__top),
                                u = j()(a.scrollLip, Wi.scrollLip__bottom),
                                l = 1 === r || 2 === r,
                                o = t.currencies.some(({ value: e }) => e.amount >= 0) && !l,
                                c = j()(a.base, { [Wi.base__withoutFooter]: !o });
                            return i().createElement(
                                'div',
                                { className: c },
                                i().createElement(
                                    'div',
                                    { className: Wi.contentContainer },
                                    i().createElement(
                                        As.Vertical.Area.Default,
                                        { api: n },
                                        i().createElement(
                                            'div',
                                            { className: a.report },
                                            e.map(({ value: e }) =>
                                                i().createElement(
                                                    'div',
                                                    { key: e.type, className: Wi.section },
                                                    i().createElement(Ui, e),
                                                ),
                                            ),
                                        ),
                                    ),
                                    i().createElement('div', { className: s }),
                                    i().createElement('div', { className: u }),
                                ),
                                o && i().createElement('div', { className: Wi.footer }, i().createElement(vi, null)),
                            );
                        },
                    ),
                    Gi = (0, s.createContext)({ width: window.innerWidth, height: window.innerHeight }),
                    zi = {
                        slideOut: 'Reveal_slideOut_2b',
                        slideIn: 'Reveal_slideIn_b7',
                        slideLeftOut: 'Reveal_slideLeftOut_31',
                        slideLeftIn: 'Reveal_slideLeftIn_35',
                        slideRightOut: 'Reveal_slideRightOut_9e',
                        slideRightIn: 'Reveal_slideRightIn_d2',
                        fadeOut: 'Reveal_fadeOut_d7',
                        fadeIn: 'Reveal_fadeIn_7b',
                        bg_fadeOut: 'Reveal_bg_fadeOut_7c',
                        bg_fadeIn: 'Reveal_bg_fadeIn_5a',
                        fadeDownIn: 'Reveal_fadeDownIn_7d',
                        fadeInUp: 'Reveal_fadeInUp_c1',
                        fadeDownOut: 'Reveal_fadeDownOut_3d',
                        fadeInDown: 'Reveal_fadeInDown_26',
                    },
                    Vi = ({ children: e, type: t, className: a, isOut: r, delayIn: n, delayOut: u, isDisabled: l }) => {
                        const o = (0, s.useMemo)(() => ({ animationDelay: r ? u : n }), [r, n, u]);
                        return l
                            ? i().createElement('div', { className: a }, e)
                            : i().createElement(
                                  'div',
                                  { className: j()(zi[`${t}${r ? 'Out' : 'In'}`], a), style: o },
                                  e,
                              );
                    };
                let ji;
                (Vi.defaultProps = { delayIn: '0ms', delayOut: '0ms', isDisabled: !1, isOut: !1, type: 'slide' }),
                    (function (e) {
                        (e[(e.DailyQuests = 0)] = 'DailyQuests'), (e[(e.PremiumQuests = 1)] = 'PremiumQuests');
                    })(ji || (ji = {}));
                ji.DailyQuests, ji.PremiumQuests, ji.DailyQuests, ji.PremiumQuests;
                let qi, Ki, Xi, Yi;
                !(function (e) {
                    (e.Completed = 'done'), (e.Locked = 'notAvailable'), (e.Active = '');
                })(qi || (qi = {})),
                    (function (e) {
                        (e.Big = 'big'), (e.Small = 'small');
                    })(Ki || (Ki = {})),
                    (function (e) {
                        (e.Big = 'big'), (e.Medium = 'medium'), (e.Small = 'small');
                    })(Xi || (Xi = {})),
                    (function (e) {
                        (e.HUGE = 'huge'), (e.BIG = 'big');
                    })(Yi || (Yi = {}));
                const Qi = 'Rewards_base_26',
                    Zi = 'Rewards_base__vertical_9f',
                    Ji = 'Rewards_reward_7b',
                    eu = 'Rewards_reward__vertical_c6';
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const au = i().memo(
                        ({
                            data: e,
                            size: t = Vr.Big,
                            isVertical: a = !1,
                            count: r,
                            classMix: n,
                            rewardItemClassMix: u,
                            boxRewardTooltip: l,
                            boxRewardValue: o,
                            boxRewardClassName: c,
                            boxRewardClassNames: _,
                        }) => {
                            const m = (0, s.useMemo)(
                                    () =>
                                        r && r < e.length ? `R.images.gui.maps.icons.quests.bonuses.${t}.default` : '',
                                    [r, e.length, t],
                                ),
                                d =
                                    o ||
                                    p(R.strings.tooltips.quests.awards.additional.bottom(), {
                                        count: e.length - (r || 0),
                                    }),
                                E = j()(Qi, a && Zi, n),
                                g = j()(Ji, a && eu, u);
                            return i().createElement(
                                'div',
                                { className: E },
                                m
                                    ? i().createElement(
                                          i().Fragment,
                                          null,
                                          e
                                              .slice(0, r)
                                              .map((e, a) =>
                                                  i().createElement(
                                                      'div',
                                                      { key: a, className: g },
                                                      i().createElement(Jr, tu({ size: t }, e)),
                                                  ),
                                              ),
                                          i().createElement(
                                              'div',
                                              { className: g },
                                              i().createElement(Jr, {
                                                  name: 'more',
                                                  image: m,
                                                  size: t,
                                                  value: d,
                                                  tooltipArgs: l,
                                                  className: c,
                                                  classNames: _,
                                              }),
                                          ),
                                      )
                                    : e.map((e, a) =>
                                          i().createElement(
                                              'div',
                                              { key: a, className: g },
                                              i().createElement(Jr, tu({ size: t }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    ru = R.images.gui.maps.icons.missions.icons,
                    nu = {
                        base: 'BattleConditions_base_50',
                        conditionBlockColumn: 'BattleConditions_conditionBlockColumn_fb',
                        conditionBlockRow: 'BattleConditions_conditionBlockRow_9c',
                        condition: 'BattleConditions_condition_63',
                        base__reverse: 'BattleConditions_base__reverse_39',
                        operator: 'BattleConditions_operator_79',
                        base__big: 'BattleConditions_base__big_da',
                        base__huge: 'BattleConditions_base__huge_8d',
                        base__bolded: 'BattleConditions_base__bolded_99',
                        title: 'BattleConditions_title_5d',
                        description: 'BattleConditions_description_3d',
                        base__medium: 'BattleConditions_base__medium_dc',
                        progress: 'BattleConditions_progress_ca',
                        progress__completed: 'BattleConditions_progress__completed_15',
                        progressCurrent: 'BattleConditions_progressCurrent_e1',
                        progressSeparator: 'BattleConditions_progressSeparator_87',
                        progressTotal: 'BattleConditions_progressTotal_03',
                        progressBarWrapper: 'BattleConditions_progressBarWrapper_f3',
                    },
                    su = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let iu, uu;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(iu || (iu = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(uu || (uu = {}));
                const lu = ({ size: e = iu.Default }) => {
                        const t = j()(su.background, su[`background__${e}`]);
                        return i().createElement('div', { className: t });
                    },
                    ou = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    cu = ({ size: e }) => {
                        const t = j()(ou.base, ou[`base__${e}`]);
                        return i().createElement('div', { className: t });
                    },
                    _u = {
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
                    mu = (0, s.memo)(
                        ({ size: e, lineRef: t, disabled: a, baseStyles: r, isComplete: n, withoutBounce: s }) => {
                            const u = j()(
                                    _u.base,
                                    _u[`base__${e}`],
                                    a && _u.base__disabled,
                                    n && _u.base__finished,
                                    s && _u.base__withoutBounce,
                                ),
                                l = !a && !n;
                            return i().createElement(
                                'div',
                                { className: u, style: r, ref: t },
                                i().createElement('div', { className: _u.pattern }),
                                i().createElement('div', { className: _u.gradient }),
                                l && i().createElement(cu, { size: e }),
                            );
                        },
                    ),
                    du = ({ size: e, value: t, lineRef: a, disabled: r, onComplete: n }) => {
                        const u = (0, s.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, s.useEffect)(() => {
                                l && n && n();
                            }, [l, n]),
                            i().createElement(mu, { size: e, disabled: r, baseStyles: u, isComplete: l, lineRef: a })
                        );
                    },
                    pu = (e, t) => {
                        let a;
                        const r = setTimeout(() => {
                            a = e();
                        }, t);
                        return () => {
                            'function' == typeof a && a(), clearTimeout(r);
                        };
                    };
                let Eu, gu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Eu || (Eu = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(gu || (gu = {}));
                const bu = 'ProgressBarDeltaSimple_base_6c',
                    hu = 'ProgressBarDeltaSimple_delta_99',
                    vu = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: r,
                            size: n,
                            to: u,
                            onEndAnimation: l,
                            onChangeAnimationState: o,
                        }) => {
                            const c = u < r,
                                _ = (0, s.useState)(gu.Idle),
                                m = _[0],
                                d = _[1],
                                p = m === gu.In,
                                E = m === gu.End,
                                g = m === gu.Idle,
                                b = (0, s.useCallback)(
                                    (e) => {
                                        d(e), o && o(e);
                                    },
                                    [o],
                                );
                            (0, s.useEffect)(() => {
                                if (g && !a) {
                                    return pu(() => {
                                        b(gu.In);
                                    }, t);
                                }
                            }, [b, a, g, t]),
                                (0, s.useEffect)(() => {
                                    if (p) {
                                        return pu(() => {
                                            l && l(), b(gu.End);
                                        }, e + t);
                                    }
                                }, [b, p, l, t, e]);
                            const h = (0, s.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                v = (0, s.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, s.useMemo)(
                                    () => ({ width: `${Math.abs(r - u)}%`, left: `${c ? u : r}%` }),
                                    [r, c, u],
                                );
                            return E
                                ? null
                                : i().createElement(
                                      'div',
                                      { className: bu, style: f },
                                      i().createElement(
                                          'div',
                                          { style: g ? h : v, className: hu },
                                          i().createElement(cu, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    fu = (0, s.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: r,
                            disabled: n,
                            isComplete: u,
                            animationSettings: l,
                            onChangeAnimationState: o,
                            onEndAnimation: c,
                        }) => {
                            const _ = (0, s.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(mu, {
                                    size: t,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: u,
                                    baseStyles: _,
                                }),
                                a >= 0 &&
                                    i().createElement(vu, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: a,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: o,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Au = 'ProgressBarDeltaGrow_base_7e',
                    Cu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Du = 'ProgressBarDeltaGrow_glow_68',
                    Fu = (e) => (e ? { left: 0 } : { right: 0 }),
                    Bu = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    wu = (e) => ({ transitionDuration: `${e}ms` }),
                    yu = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: r,
                            size: n,
                            to: u,
                            onEndAnimation: l,
                            onChangeAnimationState: o,
                            className: c,
                        }) => {
                            const _ = u < r,
                                m = (0, s.useState)(Eu.Idle),
                                d = m[0],
                                p = m[1],
                                E = d === Eu.End,
                                g = d === Eu.Idle,
                                b = d === Eu.Grow,
                                h = d === Eu.Shrink,
                                v = (0, s.useCallback)(
                                    (e) => {
                                        p(e), o && o(e);
                                    },
                                    [o],
                                ),
                                f = (0, s.useCallback)(
                                    (e, t) =>
                                        pu(() => {
                                            v(e);
                                        }, t),
                                    [v],
                                );
                            (0, s.useEffect)(() => {
                                if (!a)
                                    return g
                                        ? f(Eu.Grow, t)
                                        : b
                                          ? f(Eu.Shrink, e)
                                          : h
                                            ? f(Eu.End, e)
                                            : void (E && l && l());
                            }, [f, a, E, b, g, h, l, t, e]);
                            const A = (0, s.useMemo)(() => Object.assign({ width: '100%' }, wu(e), Fu(_)), [_, e]),
                                C = (0, s.useMemo)(() => Object.assign({ width: '0%' }, wu(e), Fu(_)), [_, e]),
                                D = (0, s.useMemo)(() => Object.assign({ width: '0%' }, Bu(_, r), wu(e)), [r, _, e]),
                                F = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(u - r)}%` }, Bu(_, r), wu(e)),
                                    [r, _, u, e],
                                );
                            if (E) return null;
                            const B = j()(Au, c, _ && 0 === u && Cu);
                            return i().createElement(
                                'div',
                                { style: g ? D : F, className: B },
                                i().createElement(
                                    'div',
                                    { style: h ? C : A, className: Du },
                                    i().createElement(cu, { size: n }),
                                ),
                            );
                        },
                    ),
                    Su = (0, s.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: r,
                            disabled: n,
                            isComplete: u,
                            animationSettings: l,
                            onEndAnimation: o,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < a,
                                m = (0, s.useState)(!1),
                                d = m[0],
                                p = m[1],
                                E = (0, s.useCallback)(
                                    (e) => {
                                        e === Eu.Shrink && p(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                g = (0, s.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                                b = (0, s.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(mu, {
                                    size: t,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: u,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: d ? b : g,
                                }),
                                a >= 0 &&
                                    i().createElement(yu, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: E,
                                        freezed: l.freezed,
                                        onEndAnimation: o,
                                        from: a,
                                        size: t,
                                        to: e,
                                        className: l.delta.className,
                                    }),
                            );
                        },
                    ),
                    Tu = ['onComplete', 'onEndAnimation'];
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const Nu = (0, s.memo)((e) => {
                        let t = e.onComplete,
                            a = e.onEndAnimation,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, Tu);
                        const n = (0, s.useState)(!1),
                            u = n[0],
                            l = n[1],
                            o = (0, s.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== u && l(e), e && t && t(), a && a();
                            }, [u, t, a, r.to]);
                        switch (r.animationSettings.type) {
                            case uu.Simple:
                                return i().createElement(fu, Ru({}, r, { onEndAnimation: o, isComplete: u }));
                            case uu.Growing:
                                return i().createElement(Su, Ru({}, r, { onEndAnimation: o, isComplete: u }));
                            default:
                                return null;
                        }
                    }),
                    xu = ['onEndAnimation'];
                function Iu() {
                    return (
                        (Iu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Iu.apply(this, arguments)
                    );
                }
                const Pu = (0, s.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                s = Object.keys(e);
                            for (r = 0; r < s.length; r++) (a = s[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, xu);
                    const r = (0, s.useRef)({}),
                        n = (0, s.useCallback)(() => {
                            (r.current.from = void 0), t && t();
                        }, [t]),
                        u = 'number' == typeof r.current.from ? r.current.from : a.from;
                    return (
                        (r.current.from = u),
                        i().createElement(Nu, Iu({}, a, { onEndAnimation: n, key: `${u}-${a.to}`, from: u }))
                    );
                });
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Lu = (0, s.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: a,
                            disabled: r,
                            deltaFrom: n,
                            animationSettings: s,
                            onEndAnimation: u,
                            onChangeAnimationState: l,
                            onComplete: o,
                        }) => {
                            if (n === t)
                                return i().createElement(du, {
                                    key: `${n}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: a,
                                    disabled: r,
                                    onComplete: o,
                                });
                            const c = {
                                from: n,
                                to: t,
                                size: e,
                                lineRef: a,
                                disabled: r,
                                animationSettings: s,
                                onComplete: o,
                                onEndAnimation: u,
                                onChangeAnimationState: l,
                            };
                            return s.withStack
                                ? i().createElement(Pu, c)
                                : i().createElement(Nu, ku({ key: `${n}-${t}` }, c));
                        },
                    ),
                    Ou = (e) => ({
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
                    Mu = (e, t, a) => {
                        if ('number' == typeof a) {
                            return (Tn(0, t, a) / t) * 100;
                        }
                        return e;
                    },
                    Hu = {
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
                    Uu = {
                        freezed: !1,
                        withStack: !1,
                        type: uu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Wu = (0, s.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Hu,
                            size: a = iu.Default,
                            animationSettings: r = Uu,
                            disabled: n = !1,
                            withoutBackground: u = !1,
                            value: l,
                            deltaFrom: o,
                            lineRef: c,
                            onChangeAnimationState: _,
                            onEndAnimation: m,
                            onComplete: d,
                        }) => {
                            const p = ((e, t, a) =>
                                (0, s.useMemo)(() => {
                                    const r = (Tn(0, t, e) / t) * 100;
                                    return { value: r, deltaFrom: Mu(r, t, a) };
                                }, [a, t, e]))(l, e, o);
                            return i().createElement(
                                'div',
                                { className: j()(su.base, su[`base__${a}`]), style: Ou(t) },
                                !u && i().createElement(lu, { size: a }),
                                i().createElement(Lu, {
                                    size: a,
                                    lineRef: c,
                                    disabled: n,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: m,
                                    onChangeAnimationState: _,
                                    onComplete: d,
                                }),
                            );
                        },
                    ),
                    $u = () =>
                        Object.assign({}, Uu, {
                            line: { delay: 1e3, duration: 2e3 },
                            delta: { delay: 1e3, duration: 2e3 },
                        }),
                    Gu = ({ conditionData: e, children: t, swapProgress: a, progressInfoStyles: r }) => {
                        const n = e.current,
                            s = e.earned,
                            u = e.total,
                            l = j()(nu.progress, { [nu.progress__completed]: n === u });
                        return i().createElement(
                            'div',
                            { className: nu.condition },
                            t,
                            u > 0 &&
                                (a
                                    ? i().createElement(
                                          i().Fragment,
                                          null,
                                          i().createElement(
                                              'div',
                                              { className: nu.progressBarWrapper },
                                              i().createElement(Wu, {
                                                  size: iu.Small,
                                                  value: n,
                                                  deltaFrom: n - s,
                                                  maxValue: u,
                                                  animationSettings: $u(),
                                              }),
                                          ),
                                          i().createElement(
                                              'div',
                                              { className: l, style: r },
                                              i().createElement('div', { className: nu.progressCurrent }, n),
                                              i().createElement('div', { className: nu.progressSeparator }, '/'),
                                              i().createElement('div', { className: nu.progressTotal }, u),
                                          ),
                                      )
                                    : i().createElement(
                                          i().Fragment,
                                          null,
                                          i().createElement(
                                              'div',
                                              { className: l, style: r },
                                              i().createElement('div', { className: nu.progressCurrent }, n),
                                              i().createElement('div', { className: nu.progressSeparator }, '/'),
                                              i().createElement('div', { className: nu.progressTotal }, u),
                                          ),
                                          i().createElement(
                                              'div',
                                              { className: nu.progressBarWrapper },
                                              i().createElement(Wu, {
                                                  size: iu.Small,
                                                  value: n,
                                                  deltaFrom: n - s,
                                                  maxValue: u,
                                                  animationSettings: $u(),
                                              }),
                                          ),
                                      )),
                        );
                    },
                    zu = ({
                        conditions: e,
                        columns: t,
                        align: a,
                        swapProgress: r,
                        textStyles: n,
                        progressInfoStyles: u,
                        description: l,
                    }) => {
                        const o = (0, s.useMemo)(() => Object.assign({}, n, { textAlign: `${a}` }), [n, a]);
                        return i().createElement(
                            'div',
                            { className: t ? nu.conditionBlockColumn : nu.conditionBlockRow },
                            i().createElement(
                                Gu,
                                { conditionData: e, swapProgress: r, progressInfoStyles: u },
                                i().createElement('div', { className: nu.description, style: o }, l),
                            ),
                        );
                    };
                let Vu, ju;
                !(function (e) {
                    (e.Left = 'left'), (e.Right = 'right'), (e.Center = 'center');
                })(Vu || (Vu = {})),
                    (function (e) {
                        (e.Medium = 'medium'), (e.Big = 'big'), (e.Huge = 'huge');
                    })(ju || (ju = {}));
                const qu = ({
                        conditions: e,
                        columns: t = !1,
                        align: a = Vu.Center,
                        swapProgress: r = !1,
                        textStyles: n,
                        progressInfoStyles: s,
                        missionId: u,
                        size: l,
                        reverse: o,
                        isBold: c = !1,
                        description: _,
                    }) => {
                        const m = j()(nu.base, nu[`base__${l}`], o && nu.base__reverse, c && nu.base__bolded);
                        return i().createElement(
                            'div',
                            { className: m },
                            i().createElement(zu, {
                                conditions: e,
                                columns: t,
                                align: a,
                                swapProgress: r,
                                textStyles: n,
                                progressInfoStyles: s,
                                missionId: u,
                                description: _,
                            }),
                        );
                    },
                    Ku = {
                        base: 'Card_base_06',
                        completed: 'Card_completed_6e',
                        border_anim_bg: 'Card_border_anim_bg_16',
                        'border-anim': 'Card_border-anim_dc',
                        card_icon: 'Card_card_icon_22',
                        status_icon: 'Card_status_icon_b2',
                        border_anim: 'Card_border_anim_aa',
                        decorator: 'Card_decorator_48',
                        premium: 'Card_premium_0b',
                        locked: 'Card_locked_c2',
                        premArrow: 'Card_premArrow_10',
                        premiumLock: 'Card_premiumLock_21',
                        active: 'Card_active_6e',
                        small: 'Card_small_46',
                        completed_final: 'Card_completed_final_6e',
                        completed_anim_bg: 'Card_completed_anim_bg_7d',
                        'bg-blink': 'Card_bg-blink_9f',
                        status_icon_wrapper: 'Card_status_icon_wrapper_6b',
                        'completed-icon': 'Card_completed-icon_2c',
                        battle_conditions_wrapper: 'Card_battle_conditions_wrapper_7a',
                        battle_conditions_inner_wrapper: 'Card_battle_conditions_inner_wrapper_59',
                        battle_conditions_inner_wrapper__no_margin:
                            'Card_battle_conditions_inner_wrapper__no_margin_6f',
                        rewards_wrapper: 'Card_rewards_wrapper_c5',
                        medium: 'Card_medium_c6',
                        rewardBlock_wrapper: 'Card_rewardBlock_wrapper_ee',
                        rewardsText: 'Card_rewardsText_7e',
                        status_shadow: 'Card_status_shadow_92',
                        status_wrapper: 'Card_status_wrapper_d7',
                        reroll_btn: 'Card_reroll_btn_1e',
                        reroll_btn_images: 'Card_reroll_btn_images_d8',
                        reroll_img: 'Card_reroll_img_3c',
                        reroll_img_hover: 'Card_reroll_img_hover_13',
                        reroll_img_disabled: 'Card_reroll_img_disabled_64',
                        reroll_btn__disabled: 'Card_reroll_btn__disabled_c8',
                        quest_bottomText: 'Card_quest_bottomText_f2',
                        quest_bottomText__completed: 'Card_quest_bottomText__completed_71',
                        conditionText: 'Card_conditionText_22',
                    },
                    Xu = { backgroundImage: `url(${ru.check_green()})` },
                    Yu = (e) =>
                        void 0 !== e.items[0]
                            ? d(R.strings.event.postbattle.status(), {
                                  current: e.items[0].value.current,
                                  total: e.items[0].value.total,
                              })
                            : '',
                    Qu = (e, t) => ({
                        backgroundImage: `url('${R.images.gui.maps.icons.wtevent.postbattle[`c_${e}_${t}_silver`]()}')`,
                    }),
                    Zu = ({
                        bonusCondition: e,
                        bonuses: t,
                        postBattleCondition: a,
                        id: r,
                        status: n,
                        isPremium: u = !1,
                        isRerollEnabled: l,
                        canReroll: o,
                        index: c,
                        onReroll: _,
                        onMouseEnterRerollBtn: m,
                        isExiting: d,
                        missionCompletedVisited: p,
                        description: E,
                        maxMissions: g,
                        completedMissions: b,
                    }) => {
                        const h = Z().mediaSize,
                            v = ((e) => (e >= X.Large ? Xi.Big : e >= X.Small ? Xi.Medium : Xi.Small))(h),
                            f = h >= X.Large ? 64 : 32,
                            A = j()(
                                Ku.base,
                                Ku[
                                    `${((e, t) => {
                                        switch (e) {
                                            case qi.Completed:
                                                return t ? 'completed' : 'completed_final';
                                            case qi.Locked:
                                                return 'locked';
                                            case qi.Active:
                                                return 'active';
                                            default:
                                                return '';
                                        }
                                    })(n, !p)}`
                                ],
                                u && Ku.premium,
                            ),
                            C = (0, s.useMemo)(() => ({ __html: Yu(e).replace(/font/g, 'span') }), [e]),
                            D = (0, s.useMemo)(
                                () =>
                                    t.map(({ value: e }) => ({
                                        name: e.item || e.name,
                                        image: `R.images.gui.maps.icons.wtevent.rewards.small.${e.name.replace(/:/g, '_')}`,
                                        tooltipArgs: d ? void 0 : { args: { id: `${r}:${e.index}` } },
                                        value: e.value,
                                        valueType: jr.MULTI,
                                    })),
                                [t, d, r],
                            ),
                            F = (0, s.useMemo)(() => (n === qi.Completed ? 'rewardReceived' : 'reward'), [n]),
                            B = 0 !== e.items.length && a.items.length < 2;
                        return i().createElement(
                            'div',
                            { className: A },
                            i().createElement('div', { className: Ku.decorator }),
                            u &&
                                n === qi.Locked &&
                                i().createElement(
                                    _t,
                                    {
                                        isEnabled: !d,
                                        body: R.strings.quests.premiumQuests.tooltips.locked.body(),
                                        header: R.strings.quests.premiumQuests.tooltips.locked.header(),
                                    },
                                    i().createElement('div', { className: Ku.premiumLock }),
                                ),
                            i().createElement(
                                'div',
                                { className: Ku.border_anim },
                                i().createElement('div', { className: Ku.border_anim_bg }),
                            ),
                            i().createElement('div', { className: j()(Ku.completed_anim_bg) }),
                            u &&
                                2 !== c &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        'div',
                                        { className: j()(Ku.border_anim, Ku.border_anim_left) },
                                        i().createElement('div', { className: Ku.border_anim_bg }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: j()(Ku.border_anim, Ku.border_anim_top_right) },
                                        i().createElement('div', { className: Ku.border_anim_bg }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: j()(Ku.border_anim, Ku.border_anim_bottom_right) },
                                        i().createElement('div', { className: Ku.border_anim_bg }),
                                    ),
                                ),
                            !u &&
                                l &&
                                i().createElement(
                                    ut,
                                    {
                                        contentId: R.views.lobby.missions.RerollTooltipWithCountdown('resId'),
                                        isEnabled: !o && !d,
                                    },
                                    i().createElement(
                                        'div',
                                        {
                                            className: j()(Ku.reroll_btn, { [Ku.reroll_btn__disabled]: !o }),
                                            onClick: o ? _ : null,
                                            onMouseEnter: o ? m : null,
                                            'data-id': r,
                                        },
                                        i().createElement('p', null, R.strings.quests.dailyQuests.body.reroll()),
                                        i().createElement(
                                            'div',
                                            { className: Ku.reroll_btn_images },
                                            i().createElement('div', { className: Ku.reroll_img }),
                                            i().createElement('div', { className: Ku.reroll_img_hover }),
                                            i().createElement('div', { className: Ku.reroll_img_disabled }),
                                        ),
                                    ),
                                ),
                            i().createElement(
                                'div',
                                { className: Ku.battle_conditions_wrapper },
                                B &&
                                    e.items.map(({ value: e }, t) =>
                                        i().createElement(
                                            'div',
                                            { className: Ku.battle_conditions_inner_wrapper, key: t },
                                            i().createElement('div', {
                                                className: Ku.card_icon,
                                                style: Qu(f, e.iconKey),
                                            }),
                                            i().createElement(qu, {
                                                conditions: e,
                                                inlineOperator: !0,
                                                size: v,
                                                missionId: r,
                                                swapProgress: !0,
                                                reverse: !0,
                                                align: Vu.Left,
                                                description: E,
                                            }),
                                        ),
                                    ),
                                0 !== a.items.length &&
                                    a.items.map(({ value: e }, t) =>
                                        i().createElement(
                                            'div',
                                            { className: Ku.battle_conditions_inner_wrapper, key: t },
                                            i().createElement('div', {
                                                className: Ku.card_icon,
                                                style: Qu(f, e.iconKey),
                                            }),
                                            i().createElement(qu, {
                                                conditions: e,
                                                inlineOperator: !0,
                                                size: v,
                                                missionId: r,
                                                swapProgress: !0,
                                                reverse: !0,
                                                align: Vu.Left,
                                                description: E,
                                            }),
                                        ),
                                    ),
                            ),
                            i().createElement(
                                'div',
                                { className: Ku.rewards_wrapper },
                                i().createElement(
                                    'div',
                                    { className: Ku.rewardsText },
                                    R.strings.event.postbattle[F](),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Ku.rewardBlock_wrapper },
                                    i().createElement(au, { size: v === Ki.Small ? Vr.Small : Vr.Big, data: D }),
                                ),
                            ),
                            g > 1 &&
                                i().createElement(
                                    'div',
                                    { className: j()(Ku.quest_bottomText, g === b && Ku.quest_bottomText__completed) },
                                    R.strings.event.progression.completed(),
                                    i().createElement('span', { className: Ku.quest_bottomText__completed }, b),
                                    '/',
                                    g,
                                ),
                            n === qi.Completed
                                ? i().createElement(
                                      i().Fragment,
                                      null,
                                      i().createElement('div', { className: Ku.status_shadow }),
                                      i().createElement(
                                          'div',
                                          { className: Ku.status_icon_wrapper },
                                          i().createElement('div', { className: Ku.status_icon, style: Xu }),
                                      ),
                                  )
                                : i().createElement('div', {
                                      className: Ku.status_wrapper,
                                      dangerouslySetInnerHTML: C,
                                  }),
                        );
                    },
                    Ju = 'Cards_base_b5';
                function el() {
                    return (
                        (el =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        el.apply(this, arguments)
                    );
                }
                const tl = (e, t) => {
                    const a = e.value.status,
                        r = t.value.status;
                    return a === r
                        ? 0
                        : a === qi.Completed && r !== qi.Completed
                          ? -1
                          : a !== qi.Completed && r === qi.Completed
                            ? 1
                            : void 0;
                };
                class al extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { quests: this.props.quests, changingQuests: [] }),
                            (this.timeoutRef = i().createRef()),
                            (this.getChangingCardIds = (e, t) => {
                                const a = [];
                                for (let r = 0; r < e.length; r++)
                                    if (void 0 !== e[r] && void 0 !== t[r]) {
                                        const n = e[r].value,
                                            s = t[r].value;
                                        (n.id !== s.id || (n.status === qi.Completed && s.status !== qi.Completed)) &&
                                            a.push(n.id);
                                    }
                                return a;
                            });
                    }
                    componentDidUpdate(e) {
                        const t = e.quests,
                            a = this.props.quests,
                            r = this.getChangingCardIds(t, a);
                        r.length > 0
                            ? (Ee(R.sounds.dq_screen_quest_reroll()),
                              this.setState({ changingQuests: r }),
                              (this.timeoutRef.current = setTimeout(() => {
                                  this.setState({ quests: a, changingQuests: [] });
                              }, 1500)))
                            : 0 === this.state.changingQuests.length && this.setState({ quests: a });
                    }
                    componentWillUnmount() {
                        null !== this.timeoutRef.current && clearTimeout(this.timeoutRef.current);
                    }
                    render() {
                        const e = this.state,
                            t = e.quests,
                            a = e.changingQuests,
                            r = this.props,
                            n = r.isExiting,
                            s = r.isPremium,
                            u = r.isRerollEnabled,
                            l = r.canReroll,
                            o = r.onReroll,
                            c = r.onMouseEnterRerollBtn,
                            _ = r.missionsCompletedVisited,
                            m = t.length > 0 ? t.length : 3;
                        return i().createElement(
                            'div',
                            { className: Ju },
                            t
                                .slice(0, m)
                                .sort(tl)
                                .map(({ value: e }, t) => {
                                    const r = a.indexOf(e.id) > -1;
                                    return i().createElement(
                                        Vi,
                                        {
                                            key: `${e.id}-${t}`,
                                            isOut: n || r,
                                            type: 'slide',
                                            delayIn: r ? '0ms' : 400 + 100 * t + 'ms',
                                            delayOut: r ? '1000ms' : 100 * (1 + t) + 'ms',
                                        },
                                        i().createElement(
                                            Zu,
                                            el({}, e, {
                                                isPremium: s,
                                                isRerollEnabled: u && e.status === qi.Active,
                                                canReroll: l,
                                                onReroll: o,
                                                onMouseEnterRerollBtn: c,
                                                index: t,
                                                isExiting: n,
                                                missionCompletedVisited: _ ? _[t].value : null,
                                                completedMissions: e.completedMissions || 0,
                                                maxMissions: e.maxMissions || 1,
                                            }),
                                        ),
                                    );
                                }),
                        );
                    }
                }
                al.defaultProps = { isPremium: !1, isRerollEnabled: !1, canReroll: !1 };
                const rl = {
                        base: 'QuestsTab_base_3d',
                        scrollWrapper: 'QuestsTab_scrollWrapper_26',
                        contentWrapper: 'QuestsTab_contentWrapper_b9',
                        content: 'QuestsTab_content_71',
                        base__small: 'QuestsTab_base__small_33',
                        base__extraSmall: 'QuestsTab_base__extraSmall_01',
                        shadowLip: 'QuestsTab_shadowLip_3d',
                    },
                    nl = () => {
                        const e = y('model.events.events'),
                            t = rs(),
                            a = ft(['base'], rl),
                            r = (0, s.useState)(!1)[0],
                            n = (() => {
                                const e = (0, s.useState)({
                                        width: viewEnv.remToPx(window.innerWidth),
                                        height: viewEnv.remToPx(window.innerHeight),
                                    }),
                                    t = e[0],
                                    a = e[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        const e = () => {
                                            const e = window,
                                                t = e.innerWidth,
                                                r = e.innerHeight;
                                            a({ width: viewEnv.remToPx(t), height: viewEnv.remToPx(r) });
                                        };
                                        return (
                                            e(),
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    t
                                );
                            })();
                        return i().createElement(
                            Gi.Provider,
                            { value: n },
                            i().createElement(
                                'div',
                                { className: a.base },
                                i().createElement(
                                    'div',
                                    { className: rl.scrollWrapper },
                                    i().createElement(
                                        As.Vertical.Area.Default,
                                        { api: t },
                                        i().createElement(
                                            'div',
                                            { className: rl.contentWrapper },
                                            i().createElement(
                                                'div',
                                                { className: rl.content },
                                                i().createElement(al, {
                                                    isExiting: !1,
                                                    quests: e,
                                                    isRerollEnabled: !1,
                                                    canReroll: !1,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                r && i().createElement('div', { className: rl.shadowLip }),
                            ),
                        );
                    },
                    sl = {
                        base: 'TabsContent_base_cc',
                        base__tie: 'TabsContent_base__tie_73',
                        base__win: 'TabsContent_base__win_2a',
                        base__lose: 'TabsContent_base__lose_01',
                        contentContainer: 'TabsContent_contentContainer_6c',
                        contentContainer__hidden: 'TabsContent_contentContainer__hidden_4d',
                    },
                    il = ({ winStatus: e, currentTab: t, onClose: a }) => {
                        const r = (0, s.useState)(!1),
                            n = r[0],
                            u = r[1],
                            l = (0, s.useState)(!0),
                            o = l[0],
                            c = l[1],
                            _ = (0, s.useCallback)(() => o && a(), [o, a]);
                        ra(ta.n.ESCAPE, _), n || t !== de || u(!0);
                        const m = j()(sl.contentContainer, t !== de && sl.contentContainer__hidden),
                            d = j()(sl.base, sl[`base__${sa(e)}`]);
                        return i().createElement(
                            'div',
                            { className: d },
                            t === me && i().createElement(bn, null),
                            n &&
                                i().createElement(
                                    'div',
                                    { className: m },
                                    i().createElement(bi, { manageMainEscapeListener: c }),
                                ),
                            'detailsTab' === t && i().createElement($i, null),
                            t === pe && i().createElement(nl, null),
                        );
                    },
                    ul = 'ScreenContent_base_de',
                    ll = 'ScreenContent_bg_ec',
                    ol = 'ScreenContent_bg__top_5c',
                    cl = 'ScreenContent_bg__bottom_8b',
                    _l = 'ScreenContent_bgInner_5c',
                    ml = 'ScreenContent_bgInner__top_b4',
                    dl = 'ScreenContent_bgInner__bottom_c3',
                    pl = 'ScreenContent_bgInner__blurred_41',
                    El = 'ScreenContent_filter_89',
                    gl = 'ScreenContent_filter__shadow_0e',
                    bl = 'ScreenContent_filter__shadowPersonalEfficiency_be',
                    hl = 'ScreenContent_close_09',
                    vl = 'ScreenContent_tabsContentWrapper_64',
                    fl = 'ScreenContent_playerInfo_f8',
                    Al = 'ScreenContent_mapInfo_c8',
                    Cl = (0, s.createContext)({ allies: Ce.Hunter, enemies: Ce.Boss }),
                    Dl = ({ winStatus: e, arenaName: t, onChangeCurrentTab: a, generalInfo: r }) => {
                        const n = (0, s.useContext)(_e),
                            u = (0, s.useState)(me),
                            l = u[0],
                            c = u[1],
                            _ = (0, s.useCallback)(
                                (e) => {
                                    a(e), c(e);
                                },
                                [a],
                            ),
                            m = l === me,
                            d = l === de,
                            p = R.images.gui.maps.icons.map.screen.$dyn(`c_${t}`),
                            E = (0, s.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                            g = m && n.state === ue.FirstIterationInDone,
                            b = j()(ll, ol),
                            h = j()(ll, cl),
                            v = j()(_l, ml, (!m || n.state !== ue.Idle) && pl),
                            f = j()(_l, dl, pl),
                            A = j()(El, !m && gl, g && bl);
                        return i().createElement(
                            'div',
                            { className: ul },
                            i().createElement(
                                'div',
                                { className: b },
                                i().createElement('div', { className: v, style: E }),
                            ),
                            i().createElement(
                                'div',
                                { className: h },
                                i().createElement('div', { className: f, style: E }),
                            ),
                            i().createElement('div', { className: A }),
                            i().createElement(
                                'div',
                                { className: hl },
                                i().createElement(fe, {
                                    caption: R.strings.postbattle_screen.PostbattleScreenApp.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: o.Sy,
                                }),
                            ),
                            i().createElement(vt, { currentTab: l, onChangeCurrentTab: _ }),
                            i().createElement(
                                'div',
                                { className: vl },
                                i().createElement(
                                    Cl.Provider,
                                    {
                                        value:
                                            ((C = r.vehicleType),
                                            'mediumTank' === C
                                                ? { allies: Ce.Hunter, enemies: Ce.Boss }
                                                : { allies: Ce.Boss, enemies: Ce.Hunter }),
                                    },
                                    i().createElement(il, { winStatus: e, currentTab: l, onClose: o.Sy }),
                                ),
                            ),
                            (m || d) &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        'div',
                                        { className: Al },
                                        i().createElement(ea, {
                                            arenaName: r.arenaName,
                                            battleType: r.battleType,
                                            battleFinishTime: r.battleFinishTime,
                                        }),
                                    ),
                                    i().createElement('div', { className: fl }, i().createElement(Zt, null)),
                                ),
                        );
                        var C;
                    },
                    Fl = x('model', (e) => ({
                        winStatus: e.common.generalInfo.winStatus,
                        arenaName: e.common.generalInfo.arenaName,
                        generalInfo: e.common.generalInfo,
                        team: e.team,
                        onChangeCurrentTab: (t) => e.onChangeCurrentTab({ tabId: t }),
                    }))((e) => i().createElement(ce, null, i().createElement(ie, null, i().createElement(Dl, e))));
                window.viewEnv.addPreloadTexture('gui/flash/atlases/components.dds'),
                    engine.whenReady.then(() => {
                        l().render(i().createElement(Fl, null), document.getElementById('root'));
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
        (__webpack_require__.O = (e, t, a, r) => {
            if (!t) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, a, r] = deferred[l], s = !0, i = 0; i < t.length; i++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((s = !1), r < n && (n = r));
                    if (s) {
                        deferred.splice(l--, 1);
                        var u = a();
                        void 0 !== u && (e = u);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, a, r];
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
        (__webpack_require__.j = 290),
        (() => {
            var e = { 290: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var r,
                        n,
                        [s, i, u] = a,
                        l = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (u) var o = u(__webpack_require__);
                    }
                    for (t && t(a); l < s.length; l++)
                        (n = s[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(o);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [813], () => __webpack_require__(73));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
