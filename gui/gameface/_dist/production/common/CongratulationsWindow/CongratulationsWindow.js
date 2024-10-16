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
            527: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, { mouse: () => u, off: () => l, on: () => s, onResize: () => i, onScaleUpdated: () => o });
                var a = n(2472),
                    r = n(1176);
                const i = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    u = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : (0, r.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const i = `mouse${t}`,
                                            o = c[t]((e) => n([e, 'outside']));
                                        function s(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            a(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(i, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(n)),
                                t
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
            5959: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => o,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var a = n(527),
                    r = n(2493);
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
            1176: (e, t, n) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2493: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => a });
            },
            2472: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => i });
                var a = n(5959),
                    r = n(514);
                const i = { view: n(7641), client: a, sound: r.ZP };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => o });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    o = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => r });
                var a = n(2472);
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
            7641: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => O,
                        events: () => i.U,
                        extraSize: () => M,
                        forceTriggerMouseMove: () => x,
                        freezeTextureBeforeResize: () => v,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => S,
                        getScale: () => E,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => L,
                        isFocused: () => b,
                        pxToRem: () => w,
                        remToPx: () => f,
                        resize: () => h,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => T,
                    });
                var a = n(3722),
                    r = n(6112),
                    i = n(6538),
                    o = n(8566);
                const s = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function u(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function h(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function v() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function L() {
                    return viewEnv.isEventHandled();
                }
                function x() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const O = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    M = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => i });
                const a = ['args'],
                    r = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
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
            5521: (e, t, n) => {
                'use strict';
                let a, r;
                n.d(t, { n: () => a }),
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
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
                var a = n(3138);
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
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, n, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
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
            9916: (e, t, n) => {
                'use strict';
                n.d(t, { B0: () => s, ry: () => w });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
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
                var i = n(1358),
                    o = n(8613);
                let s;
                var l;
                ((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    h = n(3138);
                const g = ['args'];
                function v(e, t, n, a, r, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(a, r);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    w = (function () {
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
                                        n = arguments;
                                    return new Promise(function (a, r) {
                                        var i = e.apply(t, n);
                                        function o(e) {
                                            v(i, a, r, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            v(i, a, r, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    p = () => f(s.CLOSE),
                    b = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var y = n(7572);
                const L = r.instance,
                    x = {
                        DataTracker: i.Z,
                        ViewModel: y.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: u,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => f(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => f(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, r = R.invalid('resId'), i) => {
                            const o = h.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                u = l.y,
                                d = l.width,
                                _ = l.height,
                                m = {
                                    x: h.O.view.pxToRem(c) + o.x,
                                    y: h.O.view.pxToRem(u) + o.y,
                                    width: h.O.view.pxToRem(d),
                                    height: h.O.view.pxToRem(_),
                                };
                            f(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: E(m),
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
                            b(e, p);
                        },
                        handleViewEvent: f,
                        onBindingsReady: w,
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
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const r = Object.prototype.toString.call(t[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < r.length; t++) n[a].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: L,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = x;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            6498: (e, t, n) => {
                'use strict';
                var a = n(6179),
                    r = n.n(a);
                const i = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var o = n(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function c(e, t, n) {
                    const a = (function (e, t) {
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
                        })(e, n),
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
                        })(t, n),
                        i = Math.min(a, r);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: r === n.extraLarge.weight,
                        largeHeight: r === n.large.weight,
                        mediumHeight: r === n.medium.weight,
                        smallHeight: r === n.small.weight,
                        extraSmallHeight: r === n.extraSmall.weight,
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
                const u = o.O.client.getSize('rem'),
                    d = u.width,
                    _ = u.height,
                    m = Object.assign({ width: d, height: _ }, c(d, _, s)),
                    h = (0, a.createContext)(m),
                    g = ['children'],
                    v = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, g);
                        const r = (0, a.useContext)(h),
                            o = r.extraLarge,
                            s = r.large,
                            l = r.medium,
                            c = r.small,
                            u = r.extraSmall,
                            d = r.extraLargeWidth,
                            _ = r.largeWidth,
                            m = r.mediumWidth,
                            v = r.smallWidth,
                            E = r.extraSmallWidth,
                            w = r.extraLargeHeight,
                            f = r.largeHeight,
                            p = r.mediumHeight,
                            b = r.smallHeight,
                            y = r.extraSmallHeight,
                            L = { extraLarge: w, large: f, medium: p, small: b, extraSmall: y };
                        if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                            if (n.extraLarge && o) return t;
                            if (n.large && s) return t;
                            if (n.medium && l) return t;
                            if (n.small && c) return t;
                            if (n.extraSmall && u) return t;
                        } else {
                            if (n.extraLargeWidth && d) return i(t, n, L);
                            if (n.largeWidth && _) return i(t, n, L);
                            if (n.mediumWidth && m) return i(t, n, L);
                            if (n.smallWidth && v) return i(t, n, L);
                            if (n.extraSmallWidth && E) return i(t, n, L);
                            if (
                                !(
                                    n.extraLargeWidth ||
                                    n.largeWidth ||
                                    n.mediumWidth ||
                                    n.smallWidth ||
                                    n.extraSmallWidth
                                )
                            ) {
                                if (n.extraLargeHeight && w) return t;
                                if (n.largeHeight && f) return t;
                                if (n.mediumHeight && p) return t;
                                if (n.smallHeight && b) return t;
                                if (n.extraSmallHeight && y) return t;
                            }
                        }
                        return null;
                    };
                (v.defaultProps = {
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
                    (0, a.memo)(v);
                const E = ({ children: e }) => {
                    const t = (0, a.useContext)(h),
                        n = (0, a.useState)(t),
                        i = n[0],
                        l = n[1],
                        u = (0, a.useCallback)((e, t) => {
                            const n = o.O.view.pxToRem(e),
                                a = o.O.view.pxToRem(t);
                            l(Object.assign({ width: n, height: a }, c(n, a, s)));
                        }, []),
                        d = (0, a.useCallback)(() => {
                            const e = o.O.client.getSize('px');
                            u(e.width, e.height);
                        }, [u]);
                    ((e) => {
                        const t = (0, a.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        o.O.client.events.on('clientResized', u), o.O.client.events.on('self.onScaleUpdated', d);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                o.O.client.events.off('clientResized', u),
                                    o.O.client.events.off('self.onScaleUpdated', d);
                            },
                            [u, d],
                        );
                    const _ = (0, a.useMemo)(() => Object.assign({}, i), [i]);
                    return r().createElement(h.Provider, { value: _ }, e);
                };
                var w = n(6483),
                    f = n.n(w),
                    p = n(926),
                    b = n.n(p);
                let y, L, x;
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
                    })(L || (L = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(x || (x = {}));
                const S = () => {
                        const e = (0, a.useContext)(h),
                            t = e.width,
                            n = e.height,
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
                                        return L.ExtraLarge;
                                    case e.largeWidth:
                                        return L.Large;
                                    case e.mediumWidth:
                                        return L.Medium;
                                    case e.smallWidth:
                                        return L.Small;
                                    case e.extraSmallWidth:
                                        return L.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), L.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return x.ExtraLarge;
                                    case e.largeHeight:
                                        return x.Large;
                                    case e.mediumHeight:
                                        return x.Medium;
                                    case e.smallHeight:
                                        return x.Small;
                                    case e.extraSmallHeight:
                                        return x.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), x.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: n };
                    },
                    O = ['children', 'className'];
                function M() {
                    return (
                        (M = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        M.apply(null, arguments)
                    );
                }
                const T = {
                        [L.ExtraSmall]: '',
                        [L.Small]: b().SMALL_WIDTH,
                        [L.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [L.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [L.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [x.ExtraSmall]: '',
                        [x.Small]: b().SMALL_HEIGHT,
                        [x.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [x.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    C = {
                        [y.ExtraSmall]: '',
                        [y.Small]: b().SMALL,
                        [y.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [y.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [y.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    H = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, O);
                        const i = S(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return r().createElement('div', M({ className: f()(n, T[o], k[s], C[l]) }, a), t);
                    },
                    A = ['children'],
                    P = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, A);
                        return r().createElement(E, null, r().createElement(H, n, t));
                    };
                var I = n(493),
                    W = n.n(I);
                const D = (0, a.memo)(
                    ({
                        className: e,
                        backgroundPath: t,
                        onLoaded: n,
                        showVignette: a = !0,
                        showBlur: i = !1,
                        grayscaleApplied: o = !1,
                    }) =>
                        r().createElement(
                            'div',
                            {
                                className: f()(
                                    'Background_base_94',
                                    i && 'Background_base__blur_69',
                                    o && 'Background_base__grayscale_1b',
                                    e,
                                ),
                                style: { backgroundImage: `url(${t})` },
                            },
                            a && r().createElement('div', { className: 'Background_vignette_79' }),
                            n &&
                                r().createElement('img', {
                                    className: 'Background_preloader_7d',
                                    onLoad: () => n(),
                                    onError: () => n(),
                                    src: t,
                                    alt: t,
                                }),
                        ),
                );
                var N = n(7030);
                const B = { x: 0, y: 0, opacity: 0, transform: 'scale(1) rotate(0deg)' },
                    G = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' };
                let U;
                !(function (e) {
                    (e.Linear = 'linear'),
                        (e.EaseIn = 'easeIn'),
                        (e.EaseOut = 'easeOut'),
                        (e.EaseInOut = 'easeInOut'),
                        (e.EaseOutBack = 'easeOutBack'),
                        (e.EaseOutQuint = 'easeOutQuint'),
                        (e.EaseOutExpo = 'easeOutExpo');
                })(U || (U = {}));
                const F = {
                        [U.Linear]: (e) => e,
                        [U.EaseIn]: (e) => e * e * e,
                        [U.EaseOut]: (e) => --e * e * e + 1,
                        [U.EaseInOut]: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        [U.EaseOutBack]: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                        [U.EaseOutQuint]: (e) => 1 - Math.pow(1 - e, 5),
                        [U.EaseOutExpo]: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
                    },
                    V = (0, a.memo)(function ({
                        children: e,
                        from: t = B,
                        to: n = G,
                        config: i,
                        isCanceled: o = !1,
                        isDisabled: s = !1,
                        duration: l = 250,
                        delay: c = 0,
                        transformOrigin: u = '50% 50%',
                        easingType: d = U.EaseInOut,
                        onRest: _,
                        onStart: m,
                        trigger: h,
                        className: g,
                        isReverse: v = !1,
                        playSoundOnStart: E,
                        playSoundOnFinish: w,
                    }) {
                        const f = F[d],
                            p = (0, N.useSpring)(() => t),
                            b = p[0],
                            y = p[1],
                            L = o && !s ? n : Object.assign({}, b, { transformOrigin: u });
                        return (
                            (0, a.useEffect)(() => {
                                y.start({
                                    from: t,
                                    to: n,
                                    delay: c,
                                    immediate: o,
                                    config: i ? Object.assign({}, i) : { duration: l, easing: f },
                                    cancel: o || s,
                                    reverse: v,
                                    onRest: (e) => {
                                        !0 === e.finished && (w && w(), _ && _());
                                    },
                                    onStart: () => {
                                        E && E(), m && m();
                                    },
                                });
                            }, [y, c, l, f, t, o, _, n, h, s, v, w, E, m, i]),
                            r().createElement(N.animated.div, { className: g, style: L }, e)
                        );
                    });
                function j(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const $ = {
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
                let z, q;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(z || (z = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(q || (q = {}));
                const K = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: i,
                    disabled: o,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: u,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: h,
                    onClick: g,
                }) => {
                    const v = (0, a.useRef)(null),
                        E = (0, a.useState)(n),
                        w = E[0],
                        p = E[1],
                        b = (0, a.useState)(!1),
                        y = b[0],
                        L = b[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                w && null !== v.current && !v.current.contains(e.target) && p(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [w]),
                        (0, a.useEffect)(() => {
                            p(n);
                        }, [n]),
                        r().createElement(
                            'div',
                            {
                                ref: v,
                                className: f()(
                                    $.base,
                                    $[`base__${i}`],
                                    o && $.base__disabled,
                                    t && $[`base__${t}`],
                                    w && $.base__focus,
                                    y && $.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== l && j(l), u && u(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    o || (m && m(e), L(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== c && j(c),
                                        _ && _(e),
                                        n && (o || (v.current && (v.current.focus(), p(!0)))),
                                        L(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (h && h(e), L(!1));
                                },
                                onClick: function (e) {
                                    o || (g && g(e));
                                },
                            },
                            i !== z.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: $.back }),
                                    r().createElement('span', { className: $.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: f()($.state, $.state__default) },
                                r().createElement('span', { className: $.stateDisabled }),
                                r().createElement('span', { className: $.stateHighlightHover }),
                                r().createElement('span', { className: $.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: $.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                K.defaultProps = { type: z.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Y = K,
                    X = {
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
                    Z = [
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
                        (Q = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Q.apply(null, arguments)
                    );
                }
                class J extends r().PureComponent {
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
                            n = e.onClick,
                            a = e.goto,
                            i = e.side,
                            o = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            u = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(e, Z)),
                            m = f()(X.base, X[`base__${o}`], X[`base__${i}`], null == s ? void 0 : s.base),
                            h = f()(X.icon, X[`icon__${o}`], X[`icon__${i}`], null == s ? void 0 : s.icon),
                            g = f()(X.glow, null == s ? void 0 : s.glow),
                            v = f()(X.caption, X[`caption__${o}`], null == s ? void 0 : s.caption),
                            E = f()(X.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            Q(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(u),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                _,
                            ),
                            'info' !== o && r().createElement('div', { className: X.shine }),
                            r().createElement('div', { className: h }, r().createElement('div', { className: g })),
                            r().createElement('div', { className: v }, t),
                            a && r().createElement('div', { className: E }, a),
                        );
                    }
                }
                J.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var ee = n(9916);
                const te = [
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
                function ne(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const ae = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ee.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    re = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            i = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            u = void 0 !== c && c,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            m = e.decoratorId,
                            h = void 0 === m ? 0 : m,
                            g = e.isEnabled,
                            v = void 0 === g || g,
                            E = e.targetId,
                            w = void 0 === E ? 0 : E,
                            f = e.onShow,
                            p = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, te);
                        const y = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            L = (0, a.useMemo)(
                                () =>
                                    w ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            a = R.invalid('resId');
                                        return (
                                            t &&
                                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (a = window.subViews[n].id)),
                                            { caller: n, stack: t, resId: a }
                                        );
                                    })().resId,
                                [w],
                            ),
                            x = (0, a.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (ae(n, h, { isMouseEvent: !0, on: !0, arguments: ne(r) }, L),
                                    f && f(),
                                    (y.current.isVisible = !0));
                            }, [n, h, r, L, f]),
                            S = (0, a.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        ae(n, h, { on: !1 }, L),
                                        y.current.isVisible && p && p(),
                                        (y.current.isVisible = !1);
                                }
                            }, [n, h, L, p]),
                            O = (0, a.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = y.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', O, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', O, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === v && S();
                            }, [v, S]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            ),
                            v
                                ? (0, a.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((M = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((y.current.timeoutId = window.setTimeout(x, u ? 100 : 400)),
                                                          i && i(e),
                                                          M && M(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  S(), null == o || o(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === _ && S(), null == l || l(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === _ && S(), null == s || s(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : t
                        );
                        var M;
                    };
                let ie;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(ie || (ie = {}));
                const oe = 'tooltip_watched';
                let se;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(se || (se = {}));
                const le = ['action', 'timeLimit'],
                    ce = () => Date.now(),
                    ue = (e, t) => {
                        const n = ((e, t) => {
                                const n = (0, a.useCallback)(
                                    (n, a = ie.Info, r) => {
                                        r || (r = {}),
                                            Object.keys(r).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: e,
                                                    group: t,
                                                    action: n,
                                                    logLevel: a,
                                                    params: JSON.stringify(r),
                                                });
                                    },
                                    [e, t],
                                );
                                return (e, t, a) => n(e, t, a);
                            })(e, t),
                            r = (0, a.useRef)(new Map()),
                            i = (0, a.useRef)(new Map()),
                            o = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    (void 0 !== t && t > 0) || r.current.set(e, ce());
                                },
                                [r],
                            ),
                            s = (0, a.useCallback)(() => {
                                r.current.clear(), i.current.clear();
                            }, [r, i]),
                            l = (0, a.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== r.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, ce());
                                },
                                [r, i],
                            ),
                            c = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    if (void 0 === t) return;
                                    const n = i.current.get(e);
                                    if (void 0 === n) return;
                                    i.current.delete(e);
                                    const a = ce() - n;
                                    r.current.set(e, t + a);
                                },
                                [r, i],
                            ),
                            u = (0, a.useCallback)(
                                (e, t = 0, a, o) => {
                                    const s = r.current.get(e);
                                    if (void 0 === s) return;
                                    void 0 !== i.current.get(e) && c(e), r.current.delete(e);
                                    const l = (ce() - s) / 1e3;
                                    l <= t ||
                                        ((o = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(o, l)),
                                        n(e, a, o));
                                },
                                [r, i, n, c],
                            );
                        return [(e) => o(e), (e, t, n, a) => u(e, t, n, a), () => s(), (e) => l(e), (e) => c(e)];
                    };
                var de = n(5521);
                const _e = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function me(e = de.n.NONE, t = _e, n = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== de.n.NONE)
                            return (
                                window.addEventListener('keydown', a, n),
                                () => {
                                    window.removeEventListener('keydown', a, n);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!r && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(a), n && a.stopPropagation();
                            }
                        }
                    }, [t, e, n, r]);
                }
                var he = n(3403);
                let ge, ve, Ee;
                function we() {
                    return !1;
                }
                !(function (e) {
                    (e.StoryMode = 'story_mode'), (e.Onboarding = 'onboarding');
                })(ge || (ge = {})),
                    (function (e) {
                        e.Watched = 'watched';
                    })(ve || (ve = {})),
                    (function (e) {
                        (e.MissionSelection = 'mission_selection_window'),
                            (e.MssVehicleTooltip = 'mss_vehicle_tooltip'),
                            (e.Congratulations = 'congratulations_window'),
                            (e.Achievement = 'achievement'),
                            (e.BattleResult = 'battle_result'),
                            (e.BattleResultStatTooltip = 'battle_result_stat_tooltip');
                    })(Ee || (Ee = {})),
                    console.log;
                var fe = n(9174);
                function pe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const be = (e) => (0 === e ? window : window.subViews.get(e)),
                    ye = ((e, t) => {
                        const n = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: i, children: s, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    u = (e, n, a) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = be,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = r.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const r = n(t),
                                                        i = a.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const l = 'string' == typeof i ? `${a}.${i}` : a,
                                                            c = o.O.view.addModelObserver(l, t, !0);
                                                        return r.set(c, n), e && n(s(i)), c;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const n = s(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return pe(e, t);
                                                                                var n = {}.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? pe(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
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
                                                            !(e = n()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            s =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (t) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(t)) : s.readByPath(t),
                                            u = (e) => c.current.push(e),
                                            d = (({ observableModel: e }) => e.object())({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const a = null != n ? n : l(t),
                                                            r = fe.LO.box(a, { equals: we });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, fe.aD)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const a = null != n ? n : l(t),
                                                            r = fe.LO.box(a, { equals: we });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, fe.aD)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const a = l(n);
                                                        if (Array.isArray(t)) {
                                                            const r = t.reduce(
                                                                (e, t) => ((e[t] = fe.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, fe.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                r[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = t,
                                                                i = Object.entries(r),
                                                                o = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = fe.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, fe.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                o[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            _ = { mode: e, model: d, externalModel: s, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && a ? a.controls(_) : t(_),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    _ = (0, a.useState)(e),
                                    m = _[0],
                                    h = _[1],
                                    g = (0, a.useState)(() => u(e, i, l)),
                                    v = g[0],
                                    E = g[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? E(u(m, i, l)) : (d.current = !0);
                                    }, [l, m, i]),
                                    (0, a.useEffect)(() => {
                                        h(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [v],
                                    ),
                                    r().createElement(n.Provider, { value: v }, s)
                                );
                            },
                            () => (0, a.useContext)(n),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        loaded: e.createCallbackNoArgs('onLoaded'),
                    })),
                    Le = ye[0],
                    xe = ye[1];
                let Se;
                !(function (e) {
                    (e.RIBBON = 'ribbon'), (e.MEDAL = 'medal');
                })(Se || (Se = {}));
                const Oe = {
                    [Se.RIBBON]: { from: { y: 20 }, to: { y: 0 }, delay: 0, duration: 400 },
                    [Se.MEDAL]: {
                        from: { opacity: 0, transform: 'scale(1.2)' },
                        to: { opacity: 1, transform: 'scale(1)' },
                        delay: 400,
                        duration: 400,
                    },
                };
                function Me() {
                    return (
                        (Me = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Me.apply(null, arguments)
                    );
                }
                const Te = R.images.story_mode.gui.maps.icons.congratulations,
                    ke = (0, he.Pi)(() => {
                        const e = xe(),
                            t = e.model,
                            n = e.controls;
                        ((e) => {
                            const t = (0, a.useCallback)(
                                (t) => {
                                    !t.altKey && e && e();
                                },
                                [e],
                            );
                            me(de.n.ENTER, t, !0);
                        })(n.close),
                            me(de.n.SPACE, n.close),
                            me(de.n.ESCAPE, n.close);
                        const i = t.get(),
                            o = i.medalName,
                            s = ((e, t) => {
                                const n = ((e) => {
                                        const t = ue(e, 'metrics'),
                                            n = t[0],
                                            r = t[1],
                                            i = t[2],
                                            o = t[3],
                                            s = t[4],
                                            l = (0, a.useCallback)(
                                                (e) => {
                                                    const t = e.action,
                                                        n = e.timeLimit,
                                                        a = e.logLevel;
                                                    r(
                                                        t,
                                                        n,
                                                        a,
                                                        (({
                                                            partnerID: e,
                                                            item: t,
                                                            parentScreen: n,
                                                            itemState: a,
                                                            info: r,
                                                        }) => ({
                                                            item: t,
                                                            partnerID: e || null,
                                                            parent_screen: n || null,
                                                            item_state: a || null,
                                                            additional_info: r || null,
                                                        }))(e),
                                                    );
                                                },
                                                [r],
                                            );
                                        return [(e) => n(e), (e) => l(e), () => i(), (e) => o(e), (e) => s(e)];
                                    })(e),
                                    r = n[0],
                                    i = n[1],
                                    o = t.action,
                                    s = t.timeLimit,
                                    l = (function (e, t) {
                                        if (null == e) return {};
                                        var n = {};
                                        for (var a in e)
                                            if ({}.hasOwnProperty.call(e, a)) {
                                                if (t.indexOf(a) >= 0) continue;
                                                n[a] = e[a];
                                            }
                                        return n;
                                    })(t, le);
                                return (0, a.useMemo)(
                                    () => ({
                                        onShow: () => r(o || oe),
                                        onHide: () => i(Object.assign({ action: o || oe, timeLimit: s || 2 }, l)),
                                    }),
                                    [o, s, l, r, i],
                                );
                            })(i.isOnboarding ? ge.Onboarding : ge.StoryMode, {
                                action: ve.Watched,
                                item: Ee.Achievement,
                                parentScreen: Ee.Congratulations,
                                timeLimit: 2,
                                itemState: i.missionId.toString(),
                            }),
                            l = R.strings.sm_common.congratulationsWindow.$dyn(o),
                            c =
                                S().mediaSize >= y.Medium
                                    ? R.images.gui.maps.icons.achievement.c_600x450.$dyn(o)
                                    : R.images.gui.maps.icons.achievement.c_400x300.$dyn(o),
                            u = (0, a.useCallback)(() => {
                                j('gui_hangar_award_item_rollout');
                            }, []),
                            d = (0, a.useCallback)(() => {
                                j('gui_hangar_reward_main_icon');
                            }, []),
                            _ = Te.customBackgrounds.$dyn(o) || Te.background();
                        return r().createElement(
                            'div',
                            { className: 'CongratulationsWindowApp_base_49' },
                            r().createElement(D, { backgroundPath: _, onLoaded: n.loaded }),
                            r().createElement('div', { className: 'CongratulationsWindowApp_headerShining_19' }),
                            r().createElement('div', { className: 'CongratulationsWindowApp_shine_16' }),
                            r().createElement(
                                'div',
                                { className: 'CongratulationsWindowApp_lines_80' },
                                r().createElement('div', { className: 'CongratulationsWindowApp_linesImage_6f' }),
                            ),
                            r().createElement(
                                V,
                                Me({ className: 'CongratulationsWindowApp_ribbon_6d' }, Oe[Se.RIBBON], {
                                    easingType: U.EaseOut,
                                    onStart: u,
                                }),
                                r().createElement('div', { className: 'CongratulationsWindowApp_ribbonImage_aa' }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'CongratulationsWindowApp_subTitle_04' },
                                l.subTitle(),
                            ),
                            r().createElement('div', { className: 'CongratulationsWindowApp_title_dc' }, l.title()),
                            r().createElement(
                                V,
                                Me({ className: 'CongratulationsWindowApp_medal_d6' }, Oe[Se.MEDAL], {
                                    easingType: U.EaseOut,
                                    onStart: d,
                                }),
                                r().createElement(
                                    re,
                                    Me(
                                        {
                                            ignoreMouseClick: !0,
                                            ignoreShowDelay: !0,
                                            contentId: R.views.story_mode.common.MedalTooltip('resId'),
                                        },
                                        s,
                                    ),
                                    r().createElement('div', {
                                        className: 'CongratulationsWindowApp_medalImage_67',
                                        style: { backgroundImage: `url(${c})` },
                                    }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: 'CongratulationsWindowApp_medalName_2d' },
                                l.medalName(),
                            ),
                            r().createElement(
                                'div',
                                { className: 'CongratulationsWindowApp_continueButton_39' },
                                r().createElement(
                                    Y,
                                    { size: q.medium, type: z.primary, onClick: n.close },
                                    R.strings.sm_common.congratulationsWindow.okBtn(),
                                ),
                            ),
                            t.get().isCloseVisible &&
                                r().createElement(
                                    'div',
                                    { className: 'CongratulationsWindowApp_closeBtn_5e' },
                                    r().createElement(J, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: n.close,
                                    }),
                                ),
                        );
                    });
                engine.whenReady.then(() => {
                    W().render(
                        r().createElement(Le, null, r().createElement(P, null, r().createElement(ke, null))),
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
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, a] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), a < r && (r = a));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (__webpack_require__.j = 398),
        (() => {
            var e = { 398: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [i, o, s] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < i.length; l++)
                        (r = i[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(6498));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
