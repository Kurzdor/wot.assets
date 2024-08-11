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
                    a.d(t, { mouse: () => d, off: () => l, on: () => s, onResize: () => i, onScaleUpdated: () => o });
                var n = a(2472),
                    r = a(1176);
                const i = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const d = (function () {
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
                    const i = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        o = c[t]((e) => a([e, 'outside']));
                                    function s(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(i, s),
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
                    return Object.assign({}, i, {
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
                        getMouseGlobalPosition: () => o,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = a(527),
                    r = a(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
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
            2493: (e, t, a) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((a) => {
                        console.error(`setRTPC('${e}', '${t}'): `, a);
                    });
                }
                a.d(t, { E: () => r, G: () => n });
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
                a.d(t, { O: () => i });
                var n = a(5959),
                    r = a(514);
                const i = { view: a(7641), client: n, sound: r.ZP };
            },
            514: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => o });
                var n = a(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, n.playSound)(r[t])), e), {}),
                    o = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => L,
                        events: () => i.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => y,
                        freezeTextureBeforeResize: () => h,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => T,
                        getScale: () => p,
                        getSize: () => _,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => x,
                        isFocused: () => b,
                        pxToRem: () => v,
                        remToPx: () => E,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => w,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => S,
                    });
                var n = a(3722),
                    r = a(6112),
                    i = a(6538),
                    o = a(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, a, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, n);
                }
                function d(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function h() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function v(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function w() {
                    return viewEnv.setEventHandled();
                }
                function x() {
                    return viewEnv.isEventHandled();
                }
                function y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function T() {
                    return viewEnv.getShowingStatus();
                }
                const L = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    k = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => c });
                const n = ['args'];
                const r = 2,
                    i = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, o, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? r : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(i, { isMouseEvent: !0, on: e });
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
                a.d(t, { Z: () => i });
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
                        const i = n.O.view.addModelObserver(e, a, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(i) : (this._views[a] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                const i = r;
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
                a.d(t, { ry: () => v });
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
                var i = a(1358);
                var o = a(8613);
                let s;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = a(5521),
                    m = a(3138);
                const g = ['args'];
                function h(e, t, a, n, r, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(n, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    v = (function () {
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
                                        var i = e.apply(t, a);
                                        function o(e) {
                                            h(i, n, r, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(i, n, r, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    f = () => E(s.CLOSE),
                    b = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var w = a(7572);
                const x = r.instance,
                    y = {
                        DataTracker: i.Z,
                        ViewModel: w.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => E(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => E(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            E(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, n, r = R.invalid('resId'), i) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                l = a.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                g = {
                                    x: m.O.view.pxToRem(c) + o.x,
                                    y: m.O.view.pxToRem(d) + o.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(_),
                                };
                            E(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: p(g),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => b(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, f);
                        },
                        handleViewEvent: E,
                        onBindingsReady: v,
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
                        ClickOutsideManager: x,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, t, a) => {
                'use strict';
                a.d(t, { Z5: () => n, cy: () => r });
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
                    };
            },
            8813: (e, t, a) => {
                'use strict';
                var n = a(6179),
                    r = a.n(n);
                const i = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var o = a(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function c(e, t, a) {
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
                        i = Math.min(n, r);
                    return {
                        extraLarge: i === a.extraLarge.weight,
                        large: i === a.large.weight,
                        medium: i === a.medium.weight,
                        small: i === a.small.weight,
                        extraSmall: i === a.extraSmall.weight,
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
                })(l || (l = {}));
                const d = o.O.client.getSize('rem'),
                    u = d.width,
                    _ = d.height,
                    m = Object.assign({ width: u, height: _ }, c(u, _, s)),
                    g = (0, n.createContext)(m),
                    h = ['children'];
                const p = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, h);
                    const r = (0, n.useContext)(g),
                        o = r.extraLarge,
                        s = r.large,
                        l = r.medium,
                        c = r.small,
                        d = r.extraSmall,
                        u = r.extraLargeWidth,
                        _ = r.largeWidth,
                        m = r.mediumWidth,
                        p = r.smallWidth,
                        v = r.extraSmallWidth,
                        E = r.extraLargeHeight,
                        f = r.largeHeight,
                        b = r.mediumHeight,
                        w = r.smallHeight,
                        x = r.extraSmallHeight,
                        y = { extraLarge: E, large: f, medium: b, small: w, extraSmall: x };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && o) return t;
                        if (a.large && s) return t;
                        if (a.medium && l) return t;
                        if (a.small && c) return t;
                        if (a.extraSmall && d) return t;
                    } else {
                        if (a.extraLargeWidth && u) return i(t, a, y);
                        if (a.largeWidth && _) return i(t, a, y);
                        if (a.mediumWidth && m) return i(t, a, y);
                        if (a.smallWidth && p) return i(t, a, y);
                        if (a.extraSmallWidth && v) return i(t, a, y);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && E) return t;
                            if (a.largeHeight && f) return t;
                            if (a.mediumHeight && b) return t;
                            if (a.smallHeight && w) return t;
                            if (a.extraSmallHeight && x) return t;
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
                const v = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    E = ({ children: e }) => {
                        const t = (0, n.useContext)(g),
                            a = (0, n.useState)(t),
                            i = a[0],
                            l = a[1],
                            d = (0, n.useCallback)((e, t) => {
                                const a = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(t);
                                l(Object.assign({ width: a, height: n }, c(a, n, s)));
                            }, []),
                            u = (0, n.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                d(e.width, e.height);
                            }, [d]);
                        v(() => {
                            o.O.client.events.on('clientResized', d), o.O.client.events.on('self.onScaleUpdated', u);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', d),
                                        o.O.client.events.off('self.onScaleUpdated', u);
                                },
                                [d, u],
                            );
                        const _ = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return r().createElement(g.Provider, { value: _ }, e);
                    };
                var f = a(6483),
                    b = a.n(f),
                    w = a(926),
                    x = a.n(w);
                let y, T, L;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(y || (y = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(T || (T = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(L || (L = {}));
                const k = () => {
                        const e = (0, n.useContext)(g),
                            t = e.width,
                            a = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return y.ExtraLarge;
                                    case e.large:
                                        return y.Large;
                                    case e.medium:
                                        return y.Medium;
                                    case e.small:
                                        return y.Small;
                                    case e.extraSmall:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return T.ExtraLarge;
                                    case e.largeWidth:
                                        return T.Large;
                                    case e.mediumWidth:
                                        return T.Medium;
                                    case e.smallWidth:
                                        return T.Small;
                                    case e.extraSmallWidth:
                                        return T.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), T.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return L.ExtraLarge;
                                    case e.largeHeight:
                                        return L.Large;
                                    case e.mediumHeight:
                                        return L.Medium;
                                    case e.smallHeight:
                                        return L.Small;
                                    case e.extraSmallHeight:
                                        return L.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), L.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: a };
                    },
                    S = ['children', 'className'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const O = {
                        [T.ExtraSmall]: '',
                        [T.Small]: x().SMALL_WIDTH,
                        [T.Medium]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH}`,
                        [T.Large]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH}`,
                        [T.ExtraLarge]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH} ${x().EXTRA_LARGE_WIDTH}`,
                    },
                    A = {
                        [L.ExtraSmall]: '',
                        [L.Small]: x().SMALL_HEIGHT,
                        [L.Medium]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT}`,
                        [L.Large]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT}`,
                        [L.ExtraLarge]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT} ${x().EXTRA_LARGE_HEIGHT}`,
                    },
                    D = {
                        [y.ExtraSmall]: '',
                        [y.Small]: x().SMALL,
                        [y.Medium]: `${x().SMALL} ${x().MEDIUM}`,
                        [y.Large]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE}`,
                        [y.ExtraLarge]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE} ${x().EXTRA_LARGE}`,
                    },
                    C = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, S);
                        const i = k(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return r().createElement('div', M({ className: b()(a, O[o], A[s], D[l]) }, n), t);
                    },
                    H = ['children'];
                const P = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, H);
                    return r().createElement(E, null, r().createElement(C, a, t));
                };
                var N = a(493),
                    W = a.n(N);
                function I(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const B = {
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
                let $, U;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })($ || ($ = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(U || (U = {}));
                const G = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: i,
                    disabled: o,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: d,
                    onMouseMove: u,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: g,
                    onClick: h,
                }) => {
                    const p = (0, n.useRef)(null),
                        v = (0, n.useState)(a),
                        E = v[0],
                        f = v[1],
                        w = (0, n.useState)(!1),
                        x = w[0],
                        y = w[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                E && null !== p.current && !p.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [E]),
                        (0, n.useEffect)(() => {
                            f(a);
                        }, [a]),
                        r().createElement(
                            'div',
                            {
                                ref: p,
                                className: b()(
                                    B.base,
                                    B[`base__${i}`],
                                    o && B.base__disabled,
                                    t && B[`base__${t}`],
                                    E && B.base__focus,
                                    x && B.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== l && I(l), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    u && u(e);
                                },
                                onMouseUp: function (e) {
                                    o || (m && m(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== c && I(c),
                                        _ && _(e),
                                        a && (o || (p.current && (p.current.focus(), f(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (g && g(e), y(!1));
                                },
                                onClick: function (e) {
                                    o || (h && h(e));
                                },
                            },
                            i !== $.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: B.back }),
                                    r().createElement('span', { className: B.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: b()(B.state, B.state__default) },
                                r().createElement('span', { className: B.stateDisabled }),
                                r().createElement('span', { className: B.stateHighlightHover }),
                                r().createElement('span', { className: B.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: B.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                G.defaultProps = { type: $.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const j = G,
                    F = {
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
                    q = [
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
                function z() {
                    return (
                        (z =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        z.apply(this, arguments)
                    );
                }
                class V extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && I(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && I(this.props.soundClick);
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
                            i = e.side,
                            o = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            u = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(e, q)),
                            m = b()(F.base, F[`base__${o}`], F[`base__${i}`], null == s ? void 0 : s.base),
                            g = b()(F.icon, F[`icon__${o}`], F[`icon__${i}`], null == s ? void 0 : s.icon),
                            h = b()(F.glow, null == s ? void 0 : s.glow),
                            p = b()(F.caption, F[`caption__${o}`], null == s ? void 0 : s.caption),
                            v = b()(F.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            z(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(u),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                _,
                            ),
                            'info' !== o && r().createElement('div', { className: F.shine }),
                            r().createElement('div', { className: g }, r().createElement('div', { className: h })),
                            r().createElement('div', { className: p }, t),
                            n && r().createElement('div', { className: v }, n),
                        );
                    }
                }
                V.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var K = a(5521);
                a(9916);
                const Y = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Z(e = K.n.NONE, t = Y, a = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== K.n.NONE)
                            return (
                                window.addEventListener('keydown', n, a),
                                () => {
                                    window.removeEventListener('keydown', n, a);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(n), a && n.stopPropagation();
                            }
                        }
                    }, [t, e, a, r]);
                }
                var X = a(3403);
                let Q, J, ee, te, ae;
                !(function (e) {
                    (e.Click = 'click'), (e.Display = 'display');
                })(Q || (Q = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.DogTags = 'dog_tag_view'),
                            (e.AccountDashboard = 'account_dashboard'),
                            (e.AnimatedDogTag = 'animated_dog_tag'),
                            (e.ConfirmDialog = 'confirm_dialog');
                    })(J || (J = {})),
                    (function (e) {
                        (e.DiscardChanges = 'discard_change_button'),
                            (e.CancelEngraving = 'cancel_engraving_button'),
                            (e.CancelBackground = 'cancel_background_button'),
                            (e.SliderItem = 'slider_item'),
                            (e.ConfirmDogTag = 'confirm_dog_tag_button'),
                            (e.DiscardDogTag = 'discard_dog_tag_button'),
                            (e.ConfirmChanges = 'confirm_button');
                    })(ee || (ee = {})),
                    (function (e) {
                        (e.Lock = 'lock'), (e.Unlock = 'unlock');
                    })(te || (te = {})),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(ae || (ae = {}));
                let ne;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(ne || (ne = {}));
                const re = 'metrics',
                    ie = ({ partnerID: e, item: t, parentScreen: a, itemState: n, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: a || null,
                        item_state: n || null,
                        additional_info: r || null,
                    }),
                    oe = (e, t) => {
                        const a = (0, n.useCallback)(
                            (a, n = ae.Info, r) => {
                                r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: a,
                                            logLevel: n,
                                            params: JSON.stringify(r),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, n) => a(e, t, n);
                    },
                    se =
                        (ee.CancelEngraving,
                        ee.CancelBackground,
                        ee.DiscardChanges,
                        () => {
                            const e = ((e) => {
                                const t = oe(e, re),
                                    a = (0, n.useCallback)(
                                        (e) => {
                                            t(e.action, e.logLevel, ie(e));
                                        },
                                        [t],
                                    );
                                return (e) => a(e);
                            })('dog_tags');
                            return (t) => {
                                e({ action: Q.Click, parentScreen: J.ConfirmDialog, item: t });
                            };
                        });
                var le = a(8664);
                const ce = 'Flame_base_90',
                    de = 'Flame_slides_58',
                    ue = 'Flame_frame_29',
                    _e = (0, n.memo)(({ className: e }) => {
                        const t = (() => {
                            const e = R.images.gui.maps.icons.dogtags.icons.flame;
                            return Array(42)
                                .fill(null)
                                .map((t, a) => {
                                    const n = `flame_${`0${a}`.slice(-2)}`;
                                    return n in e ? e[n]() : e.flame_00();
                                });
                        })();
                        return r().createElement(
                            'div',
                            { className: b()(ce, e), 'data-testid': 'Flame' },
                            r().createElement(
                                'div',
                                { className: de },
                                t.map((e) => r().createElement('img', { key: e, src: e, className: ue })),
                            ),
                        );
                    });
                let me, ge, he, pe, ve;
                !(function (e) {
                    (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                })(me || (me = {})),
                    (function (e) {
                        (e[(e.Equipped = 0)] = 'Equipped'), (e[(e.Locked = 1)] = 'Locked'), (e[(e.Open = 2)] = 'Open');
                    })(ge || (ge = {})),
                    (function (e) {
                        (e.Engraving = 'engraving'), (e.Background = 'background'), (e.All = 'all');
                    })(he || (he = {})),
                    (function (e) {
                        (e.Dedication = 'dedication'),
                            (e.Skill = 'skill'),
                            (e.RankedSkill = 'ranked_skill'),
                            (e.Triumph = 'triumph'),
                            (e.Medal = 'triumph_medal'),
                            (e.Base = 'base');
                    })(pe || (pe = {})),
                    (function (e) {
                        (e.Dedication = 'dedication'), (e.Triumph = 'triumph'), (e.Season = 'season');
                    })(ve || (ve = {}));
                ve.Dedication, pe.Dedication, ve.Triumph, pe.Triumph, ve.Season, pe.Skill, pe.RankedSkill;
                let Ee;
                !(function (e) {
                    (e.NUMBER = 'NUMBER'), (e.PERCENTAGE = 'PERCENTAGE');
                })(Ee || (Ee = {}));
                const fe = R.images.gui.maps.icons.dogtags,
                    be = 'R.images.gui.maps.icons.dogtags',
                    we = R.strings.dogtags.component,
                    xe = 'R.strings.dogtags.component',
                    ye = (e, t, a, n = 0, r = 'big', i = fe, o = we) => {
                        i &&
                            !(r in i) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${r}" does not exist in ${be}`,
                            );
                        const s = r in i ? i[r] : void 0,
                            l = `${t}s`;
                        s &&
                            !(l in s) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${l}" does not exist in ${[be, r].join('.')}`,
                            );
                        const c = s && l in s ? s[l] : void 0,
                            d = `${t}_${e}_${t === he.Engraving ? n : '0'}`;
                        c &&
                            !(d in c) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${d}" does not exist in ${[be, r, l].join('.')}`,
                            );
                        const u = c && d in c ? c[d]() : i.big.backgrounds.background_66_0();
                        o &&
                            !(t in o) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${t}" does not exist in ${xe}`,
                            );
                        const _ = t in o ? o[t] : void 0;
                        _ &&
                            !(a in _) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${a}" does not exist in ${[xe, t].join('.')}`,
                            );
                        const m = _ && a in _ ? _[a] : void 0,
                            g = `c_${e}`;
                        m &&
                            !(g in m) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${g}" does not exist in ${[xe, t, a].join('.')}`,
                            );
                        return { image: u, strings: m && g in m ? m[g] : void 0 };
                    },
                    Te =
                        (me.Engraving,
                        me.Background,
                        me.Engraving,
                        me.Background,
                        {
                            base: 'DogTags_base_4b',
                            base__x400: 'DogTags_base__x400_00',
                            dogtags_top: 'DogTags_dogtags_top_a9',
                            dogtags_bottom: 'DogTags_dogtags_bottom_20',
                            background: 'DogTags_background_e7',
                            playerInfoShadow: 'DogTags_playerInfoShadow_30',
                            name: 'DogTags_name_36',
                            clan: 'DogTags_clan_05',
                            engraving: 'DogTags_engraving_7f',
                            score: 'DogTags_score_ac',
                            shadow: 'DogTags_shadow_03',
                            trackerInfoWrapper: 'DogTags_trackerInfoWrapper_5f',
                            trackerText: 'DogTags_trackerText_a4',
                            trackerValue: 'DogTags_trackerValue_b3',
                            trackerDigit: 'DogTags_trackerDigit_c3',
                            spaceDigit: 'DogTags_spaceDigit_c8',
                            flameAnimation: 'DogTags_flameAnimation_dd',
                            flameAnimation__appear: 'DogTags_flameAnimation__appear_86',
                            flameAnimation__appearActive: 'DogTags_flameAnimation__appearActive_fc',
                            flameAnimation__appearDone: 'DogTags_flameAnimation__appearDone_6b',
                            flameAnimation__enter: 'DogTags_flameAnimation__enter_3b',
                            flameAnimation__enterActive: 'DogTags_flameAnimation__enterActive_7f',
                            flameAnimation__enterDone: 'DogTags_flameAnimation__enterDone_57',
                            flameAnimation__exit: 'DogTags_flameAnimation__exit_57',
                            flameAnimation__exitActive: 'DogTags_flameAnimation__exitActive_0d',
                            flameAnimation__exitDone: 'DogTags_flameAnimation__exitDone_c3',
                        }),
                    Le = R.images.gui.maps.icons.dogtags.big.digits,
                    ke = (e, t = Le) => {
                        const a = `c_${e}`;
                        return a in t
                            ? t[a]()
                            : e in t
                              ? t[e]()
                              : void (
                                    'invalidTestDigit' !== e &&
                                    console.error(
                                        `getDigitUri error at digit: ${e}. No properties "${a}" nor "${e}" exist in R.images.gui.maps.icons.dogtags.big.digits`,
                                    )
                                );
                    },
                    Se = (e) => ({ backgroundImage: `url(${e})` });
                let Me;
                !(function (e) {
                    (e.x300 = 'x300'), (e.x400 = 'x400');
                })(Me || (Me = {}));
                const Oe = R.images.gui.maps.icons.dogtags.big.digits;
                Object.keys(Object.getPrototypeOf(Oe))
                    .filter((e) => '$' !== e[0])
                    .map((e) => Oe[e]())
                    .map((e) => {
                        new Image().src = e;
                    });
                const Ae = (e) => {
                        const t = e.currentTarget.width / e.currentTarget.height;
                        (e.currentTarget.style.width = 16 * t + '%'), (e.currentTarget.style.display = 'flex');
                    },
                    De = {
                        appear: Te.flameAnimation__appear,
                        appearActive: Te.flameAnimation__appearActive,
                        appearDone: Te.flameAnimation__appearDone,
                        enter: Te.flameAnimation__enter,
                        enterActive: Te.flameAnimation__enterActive,
                        enterDone: Te.flameAnimation__enterDone,
                        exit: Te.flameAnimation__exit,
                        exitActive: Te.flameAnimation__exitActive,
                        exitDone: Te.flameAnimation__exitDone,
                    },
                    Re = ({
                        playerName: e,
                        clanTag: t,
                        background: a,
                        engraving: i,
                        isHighlighted: o,
                        size: s = Me.x300,
                    }) => {
                        const l = a.currentGrade,
                            c = i.currentGrade,
                            d = ye(a.id, he.Background, a.purpose || 'default', l || 0, 'big'),
                            u = ye(i.id, he.Engraving, i.purpose || 'dedication', c || 0, 'big'),
                            _ = i.displayableProgress.split(/\[|\]/).reduce((e, t, a) => {
                                const n = a % 2 == 1;
                                return e.push(...(n ? [t] : t.split(''))), e;
                            }, []);
                        const m = u.strings ? u.strings.title() : null,
                            g = Se(d.image),
                            h = Se(u.image),
                            p = ((e) => {
                                const t = (0, n.useRef)(!1);
                                return (
                                    (0, n.useEffect)(() => {
                                        t.current = e;
                                    }),
                                    t.current
                                );
                            })(o);
                        return (
                            (0, n.useEffect)(() => {
                                o && !p ? I(R.sounds.dt_flame_start()) : p && !o && I(R.sounds.dt_flame_stop());
                            }, [o, p]),
                            r().createElement(
                                'div',
                                { className: b()(Te.base, Te[`base__${s}`]) },
                                r().createElement(
                                    le.Z,
                                    {
                                        in: o,
                                        timeout: 400,
                                        className: Te.flameAnimation,
                                        classNames: De,
                                        mountOnEnter: !0,
                                        unmountOnExit: !0,
                                        appear: !0,
                                    },
                                    r().createElement(_e, null),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Te.dogtags_top },
                                    r().createElement('div', { className: Te.background, style: g }),
                                    r().createElement('div', { className: Te.shadow }),
                                    r().createElement('div', { className: Te.playerInfoShadow }),
                                    r().createElement('div', { className: Te.name }, e),
                                    r().createElement('div', { className: Te.clan }, t),
                                    r().createElement('div', { className: Te.engraving, style: h }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Te.dogtags_bottom },
                                    r().createElement(
                                        'div',
                                        { className: Te.trackerInfoWrapper },
                                        r().createElement('div', { className: Te.trackerText }, m),
                                        r().createElement(
                                            'div',
                                            { className: Te.trackerValue },
                                            _.map((e, t) => {
                                                if (' ' === e)
                                                    return r().createElement('div', {
                                                        key: e + t,
                                                        className: Te.spaceDigit,
                                                    });
                                                const a = ke(e, Oe);
                                                return r().createElement('img', {
                                                    key: `${a}-${t}`,
                                                    onLoad: Ae,
                                                    className: Te.trackerDigit,
                                                    src: a,
                                                });
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    };
                function Ce() {
                    return !1;
                }
                console.log;
                var He = a(9174);
                function Pe(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ne(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return Ne(e, t);
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
                function Ne(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const We = (e) => (0 === e ? window : window.subViews.get(e));
                const Ie = ((e, t) => {
                        const a = (0, n.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: s, children: l, mocks: c }) {
                                const d = (0, n.useRef)([]),
                                    u = (a, n, r) => {
                                        var i;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = We,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function i(e, t = 0) {
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
                                                const s = (e) => {
                                                    const r = a(t),
                                                        i = n.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (a, i) => {
                                                        const l = 'string' == typeof i ? `${n}.${i}` : n,
                                                            c = o.O.view.addModelObserver(l, t, !0);
                                                        return r.set(c, a), e && a(s(i)), c;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const a = s(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, a = Pe(r.keys()); !(e = a()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            l =
                                                'real' === a
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (i = null == r ? void 0 : r.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === a ? (null == r ? void 0 : r.getter(e)) : l.readByPath(e),
                                            u = (e) => d.current.push(e),
                                            _ = e({
                                                mode: a,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            r = He.LO.box(n, { equals: Ce });
                                                        return (
                                                            'real' === a &&
                                                                l.subscribe(
                                                                    (0, He.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            r = He.LO.box(n, { equals: Ce });
                                                        return (
                                                            'real' === a &&
                                                                l.subscribe(
                                                                    (0, He.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = c(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = He.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    l.subscribe(
                                                                        (0, He.aD)((t) => {
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
                                                                i = Object.entries(r),
                                                                o = i.reduce(
                                                                    (e, [t, a]) => ((e[a] = He.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    l.subscribe(
                                                                        (0, He.aD)((e) => {
                                                                            i.forEach(([t, a]) => {
                                                                                o[a].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            m = { mode: a, model: _, externalModel: l, cleanup: u };
                                        return {
                                            model: _,
                                            controls: 'mocks' === a && r ? r.controls(m) : t(m),
                                            externalModel: l,
                                            mode: a,
                                        };
                                    },
                                    _ = (0, n.useRef)(!1),
                                    m = (0, n.useState)(i),
                                    g = m[0],
                                    h = m[1],
                                    p = (0, n.useState)(() => u(i, s, c)),
                                    v = p[0],
                                    E = p[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        _.current ? E(u(g, s, c)) : (_.current = !0);
                                    }, [c, g, s]),
                                    (0, n.useEffect)(() => {
                                        h(i);
                                    }, [i]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), d.current.forEach((e) => e());
                                        },
                                        [v],
                                    ),
                                    r().createElement(a.Provider, { value: v }, l)
                                );
                            },
                            () => (0, n.useContext)(a),
                        ];
                    })(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            equippedDogTag: e.object('equippedDogTag'),
                            engraving: e.object('equippedDogTag.engraving'),
                            background: e.object('equippedDogTag.background'),
                        }),
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            confirm: e.createCallbackNoArgs('onConfirm'),
                            onDiscard: e.createCallbackNoArgs('onDiscard'),
                        }),
                    ),
                    Be = Ie[0],
                    $e = Ie[1],
                    Ue = 'App_base_fd',
                    Ge = 'App_close_fa',
                    je = 'App_content_6b',
                    Fe = 'App_container_0f',
                    qe = 'App_dogTag_bc',
                    ze = 'App_container__unavailable_ee',
                    Ve = 'App_lock_be',
                    Ke = 'App_title_5d',
                    Ye = 'App_separator_2e',
                    Ze = 'App_buttons_11',
                    Xe = 'App_button_30',
                    Qe = R.strings.dogtags.customizationConfirmDialog,
                    Je = (0, X.Pi)(() => {
                        const e = $e(),
                            t = e.model,
                            a = e.controls,
                            n = t.equippedDogTag.get(),
                            i = n.playerName,
                            o = n.clanTag,
                            s = t.engraving.get(),
                            l = t.background.get(),
                            c = s.isLocked || l.isLocked,
                            d = se();
                        var u;
                        (u = a.close), Z(K.n.ESCAPE, u);
                        return r().createElement(
                            'div',
                            { className: Ue },
                            r().createElement(
                                'div',
                                { className: Ge },
                                r().createElement(V, {
                                    caption: Qe.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: a.close,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: je },
                                r().createElement(
                                    'div',
                                    { className: b()(Fe, c && ze) },
                                    r().createElement(
                                        'div',
                                        { className: qe },
                                        r().createElement(Re, {
                                            playerName: i,
                                            clanTag: o,
                                            engraving: s,
                                            background: l,
                                            isHighlighted: !1,
                                        }),
                                    ),
                                    r().createElement('div', { className: Ve }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Ke },
                                    c ? Qe.title.unavailable() : Qe.title.available(),
                                ),
                                r().createElement('div', { className: Ye }),
                                r().createElement(
                                    'div',
                                    { className: Ze },
                                    r().createElement(
                                        'div',
                                        { className: Xe },
                                        c
                                            ? r().createElement(
                                                  j,
                                                  { type: $.primary, size: U.medium, onClick: a.close },
                                                  Qe.back(),
                                              )
                                            : r().createElement(
                                                  j,
                                                  {
                                                      type: $.primary,
                                                      size: U.medium,
                                                      onClick: () => {
                                                          d(ee.ConfirmDogTag), a.confirm();
                                                      },
                                                  },
                                                  Qe.equip(),
                                              ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Xe },
                                        r().createElement(
                                            j,
                                            {
                                                type: $.secondary,
                                                size: U.medium,
                                                onClick: () => {
                                                    d(ee.DiscardDogTag), a.onDiscard();
                                                },
                                            },
                                            Qe.discard(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    W().render(
                        r().createElement(Be, null, r().createElement(P, null, r().createElement(Je, null))),
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
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, a, n] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), n < r && (r = n));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = a();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, a, n];
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
        (__webpack_require__.j = 495),
        (() => {
            var e = { 495: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var n,
                        r,
                        [i, o, s] = a,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(a); l < i.length; l++)
                        (r = i[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [994], () => __webpack_require__(8813));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
