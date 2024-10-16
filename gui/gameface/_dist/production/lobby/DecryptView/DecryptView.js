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
                    n.d(t, { mouse: () => u, off: () => l, on: () => o, onResize: () => s, onScaleUpdated: () => i });
                var r = n(2472),
                    a = n(1176);
                const s = (0, r.E)('clientResized'),
                    i = (0, r.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    u = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, a.R)(!0);
                        }
                        function r() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : (0, a.R)(!1);
                        }
                        const s = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const s = `mouse${t}`,
                                            i = c[t]((e) => n([e, 'outside']));
                                        function o(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(s, o),
                                            r(),
                                            () => {
                                                a &&
                                                    (i(),
                                                    window.removeEventListener(s, o),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(n)),
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
                                e.enabled && (0, a.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, a.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => i,
                        getSize: () => s,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var r = n(527),
                    a = n(2493);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            2493: (e, t, n) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => a, G: () => r });
            },
            2472: (e, t, n) => {
                'use strict';
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => r });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => s });
                var r = n(5959),
                    a = n(514);
                const s = { view: n(7641), client: r, sound: a.ZP };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => i });
                var r = n(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, r.playSound)(a[t])), e), {}),
                    i = { play: Object.assign({}, s, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, t, n) => {
                'use strict';
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function a(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => a, getTextureUrl: () => r });
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => a });
                var r = n(2472);
                const a = {
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
            7641: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => O,
                        events: () => s.U,
                        extraSize: () => P,
                        forceTriggerMouseMove: () => R,
                        freezeTextureBeforeResize: () => h,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => T,
                        getScale: () => p,
                        getSize: () => _,
                        getViewGlobalPosition: () => f,
                        isEventHandled: () => y,
                        isFocused: () => w,
                        pxToRem: () => E,
                        remToPx: () => v,
                        resize: () => g,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => S,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => x,
                    });
                var r = n(3722),
                    a = n(6112),
                    s = n(6538),
                    i = n(8566);
                const o = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function u(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function f(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function h() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function S() {
                    return viewEnv.setEventHandled();
                }
                function y() {
                    return viewEnv.isEventHandled();
                }
                function R() {
                    viewEnv.forceTriggerMouseMove();
                }
                function T() {
                    return viewEnv.getShowingStatus();
                }
                const O = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    P = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => s });
                const r = ['args'],
                    a = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, r);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((a = s),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    s = {
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
            5521: (e, t, n) => {
                'use strict';
                let r, a;
                n.d(t, { n: () => r }),
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
                    })(a || (a = {}));
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => s });
                var r = n(3138);
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
                    addCallback(e, t, n = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = r.O.view.addModelObserver(e, n, a);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(s) : (this._views[n] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
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
                            const r = this._callbacks[n];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const s = a;
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
                n.d(t, { B3: () => c, Z5: () => i.Z5, B0: () => o, ry: () => E });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    n();
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
                        const n = e,
                            r = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== r)),
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
                const a = r;
                var s = n(1358),
                    i = n(8613);
                let o;
                var l;
                ((l = o || (o = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
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
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(5521),
                    g = n(3138);
                const f = ['args'];
                function h(e, t, n, r, a, s, i) {
                    try {
                        var o = e[s](i),
                            l = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(r, a);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    E = (function () {
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
                                    return new Promise(function (r, a) {
                                        var s = e.apply(t, n);
                                        function i(e) {
                                            h(s, r, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            h(s, r, a, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, f);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    b = () => v(o.CLOSE),
                    w = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var S = n(7572);
                const y = a.instance,
                    T = {
                        DataTracker: s.Z,
                        ViewModel: S.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: u,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => v(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => v(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, a = R.invalid('resId'), s) => {
                            const i = g.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                u = l.y,
                                d = l.width,
                                m = l.height,
                                _ = {
                                    x: g.O.view.pxToRem(c) + i.x,
                                    y: g.O.view.pxToRem(u) + i.y,
                                    width: g.O.view.pxToRem(d),
                                    height: g.O.view.pxToRem(m),
                                };
                            v(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: p(_),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, b);
                        },
                        handleViewEvent: v,
                        onBindingsReady: E,
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
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const a = Object.prototype.toString.call(t[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < a.length; t++) n[r].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = T;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => r, cy: () => a });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            4766: (e, t, n) => {
                'use strict';
                var r = {};
                n.r(r),
                    n.d(r, {
                        Area: () => Mt,
                        Bar: () => Pt,
                        DefaultScroll: () => Lt,
                        Direction: () => pt,
                        defaultSettings: () => Et,
                        useHorizontalScrollApi: () => bt,
                    });
                var a = {};
                n.r(a), n.d(a, { Area: () => Ft, Bar: () => Ut, Default: () => Wt, useVerticalScrollApi: () => Ct });
                var s = n(6179),
                    i = n.n(s);
                const o = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var l = n(3138);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var u;
                function d(e, t, n) {
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
                        })(e, n),
                        a = (function (e, t) {
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
                        s = Math.min(r, a);
                    return {
                        extraLarge: s === n.extraLarge.weight,
                        large: s === n.large.weight,
                        medium: s === n.medium.weight,
                        small: s === n.small.weight,
                        extraSmall: s === n.extraSmall.weight,
                        extraLargeWidth: r === n.extraLarge.weight,
                        largeWidth: r === n.large.weight,
                        mediumWidth: r === n.medium.weight,
                        smallWidth: r === n.small.weight,
                        extraSmallWidth: r === n.extraSmall.weight,
                        extraLargeHeight: a === n.extraLarge.weight,
                        largeHeight: a === n.large.weight,
                        mediumHeight: a === n.medium.weight,
                        smallHeight: a === n.small.weight,
                        extraSmallHeight: a === n.extraSmall.weight,
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
                })(u || (u = {}));
                const m = l.O.client.getSize('rem'),
                    _ = m.width,
                    g = m.height,
                    f = Object.assign({ width: _, height: g }, d(_, g, c)),
                    h = (0, s.createContext)(f),
                    p = ['children'],
                    E = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, p);
                        const r = (0, s.useContext)(h),
                            a = r.extraLarge,
                            i = r.large,
                            l = r.medium,
                            c = r.small,
                            u = r.extraSmall,
                            d = r.extraLargeWidth,
                            m = r.largeWidth,
                            _ = r.mediumWidth,
                            g = r.smallWidth,
                            f = r.extraSmallWidth,
                            E = r.extraLargeHeight,
                            v = r.largeHeight,
                            b = r.mediumHeight,
                            w = r.smallHeight,
                            S = r.extraSmallHeight,
                            y = { extraLarge: E, large: v, medium: b, small: w, extraSmall: S };
                        if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                            if (n.extraLarge && a) return t;
                            if (n.large && i) return t;
                            if (n.medium && l) return t;
                            if (n.small && c) return t;
                            if (n.extraSmall && u) return t;
                        } else {
                            if (n.extraLargeWidth && d) return o(t, n, y);
                            if (n.largeWidth && m) return o(t, n, y);
                            if (n.mediumWidth && _) return o(t, n, y);
                            if (n.smallWidth && g) return o(t, n, y);
                            if (n.extraSmallWidth && f) return o(t, n, y);
                            if (
                                !(
                                    n.extraLargeWidth ||
                                    n.largeWidth ||
                                    n.mediumWidth ||
                                    n.smallWidth ||
                                    n.extraSmallWidth
                                )
                            ) {
                                if (n.extraLargeHeight && E) return t;
                                if (n.largeHeight && v) return t;
                                if (n.mediumHeight && b) return t;
                                if (n.smallHeight && w) return t;
                                if (n.extraSmallHeight && S) return t;
                            }
                        }
                        return null;
                    };
                (E.defaultProps = {
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
                    (0, s.memo)(E);
                const v = (e) => {
                        const t = (0, s.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    b = ({ children: e }) => {
                        const t = (0, s.useContext)(h),
                            n = (0, s.useState)(t),
                            r = n[0],
                            a = n[1],
                            o = (0, s.useCallback)((e, t) => {
                                const n = l.O.view.pxToRem(e),
                                    r = l.O.view.pxToRem(t);
                                a(Object.assign({ width: n, height: r }, d(n, r, c)));
                            }, []),
                            u = (0, s.useCallback)(() => {
                                const e = l.O.client.getSize('px');
                                o(e.width, e.height);
                            }, [o]);
                        v(() => {
                            l.O.client.events.on('clientResized', o), l.O.client.events.on('self.onScaleUpdated', u);
                        }),
                            (0, s.useEffect)(
                                () => () => {
                                    l.O.client.events.off('clientResized', o),
                                        l.O.client.events.off('self.onScaleUpdated', u);
                                },
                                [o, u],
                            );
                        const m = (0, s.useMemo)(() => Object.assign({}, r), [r]);
                        return i().createElement(h.Provider, { value: m }, e);
                    };
                var w = n(6483),
                    S = n.n(w),
                    y = n(926),
                    T = n.n(y);
                let O, P, x;
                !(function (e) {
                    (e[(e.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = c.small.width)] = 'Small'),
                        (e[(e.Medium = c.medium.width)] = 'Medium'),
                        (e[(e.Large = c.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge');
                })(O || (O = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = c.small.width)] = 'Small'),
                            (e[(e.Medium = c.medium.width)] = 'Medium'),
                            (e[(e.Large = c.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge');
                    })(P || (P = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = c.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = c.small.height)] = 'Small'),
                            (e[(e.Medium = c.medium.height)] = 'Medium'),
                            (e[(e.Large = c.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = c.extraLarge.height)] = 'ExtraLarge');
                    })(x || (x = {}));
                const L = ['children', 'className'];
                function M() {
                    return (
                        (M = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        M.apply(null, arguments)
                    );
                }
                const C = {
                        [P.ExtraSmall]: '',
                        [P.Small]: T().SMALL_WIDTH,
                        [P.Medium]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH}`,
                        [P.Large]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH} ${T().LARGE_WIDTH}`,
                        [P.ExtraLarge]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH} ${T().LARGE_WIDTH} ${T().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [x.ExtraSmall]: '',
                        [x.Small]: T().SMALL_HEIGHT,
                        [x.Medium]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT}`,
                        [x.Large]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT} ${T().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT} ${T().LARGE_HEIGHT} ${T().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [O.ExtraSmall]: '',
                        [O.Small]: T().SMALL,
                        [O.Medium]: `${T().SMALL} ${T().MEDIUM}`,
                        [O.Large]: `${T().SMALL} ${T().MEDIUM} ${T().LARGE}`,
                        [O.ExtraLarge]: `${T().SMALL} ${T().MEDIUM} ${T().LARGE} ${T().EXTRA_LARGE}`,
                    },
                    I = (e) => {
                        let t = e.children,
                            n = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, L);
                        const a = (() => {
                                const e = (0, s.useContext)(h),
                                    t = e.width,
                                    n = e.height,
                                    r = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return O.ExtraLarge;
                                            case e.large:
                                                return O.Large;
                                            case e.medium:
                                                return O.Medium;
                                            case e.small:
                                                return O.Small;
                                            case e.extraSmall:
                                                return O.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), O.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    a = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return P.ExtraLarge;
                                            case e.largeWidth:
                                                return P.Large;
                                            case e.mediumWidth:
                                                return P.Medium;
                                            case e.smallWidth:
                                                return P.Small;
                                            case e.extraSmallWidth:
                                                return P.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), P.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'), x.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: r,
                                    mediaWidth: a,
                                    mediaHeight: i,
                                    remScreenWidth: t,
                                    remScreenHeight: n,
                                };
                            })(),
                            o = a.mediaWidth,
                            l = a.mediaHeight,
                            c = a.mediaSize;
                        return i().createElement('div', M({ className: S()(n, C[o], k[l], N[c]) }, r), t);
                    },
                    D = ['children'],
                    B = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, D);
                        return i().createElement(b, null, i().createElement(I, n, t));
                    };
                var A = n(493),
                    H = n.n(A);
                const U = {
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
                        const t = Math.sqrt,
                            n = Math.pow;
                        return e < 0.5 ? (1 - t(1 - n(2 * e, 2))) / 2 : (t(1 - n(-2 * e + 2, 2)) + 1) / 2;
                    },
                    easeOutBack: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                    bezier: (e, t, n, r) => (a) =>
                        (1 - a) * (1 - a) * (1 - a) * e +
                        3 * (1 - a) * (1 - a) * a * t +
                        3 * (1 - a) * a * a * n +
                        a * a * a * r,
                };
                var G = n(7030);
                const W = { x: 0, y: 0, opacity: 0, transform: 'scale(1) rotate(0deg)' },
                    F = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' };
                let $;
                !(function (e) {
                    (e.Linear = 'linear'),
                        (e.EaseIn = 'easeIn'),
                        (e.EaseOut = 'easeOut'),
                        (e.EaseInOut = 'easeInOut'),
                        (e.EaseOutBack = 'easeOutBack'),
                        (e.EaseOutQuint = 'easeOutQuint'),
                        (e.EaseOutExpo = 'easeOutExpo');
                })($ || ($ = {}));
                const z = {
                        [$.Linear]: U.linear,
                        [$.EaseIn]: U.easeInCubic,
                        [$.EaseOut]: U.easeOutCubic,
                        [$.EaseInOut]: U.easeInOutCubic,
                        [$.EaseOutBack]: U.easeOutBack,
                        [$.EaseOutQuint]: (e) => 1 - Math.pow(1 - e, 5),
                        [$.EaseOutExpo]: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
                    },
                    q = ({
                        children: e,
                        from: t = W,
                        to: n = F,
                        config: r,
                        isCanceled: a = !1,
                        isDisabled: o = !1,
                        duration: l = 250,
                        delay: c = 0,
                        transformOrigin: u = '50% 50%',
                        easingType: d = $.EaseInOut,
                        onRest: m,
                        onStart: _,
                        trigger: g,
                        className: f,
                        isReverse: h = !1,
                    }) => {
                        const p = z[d],
                            E = (0, G.useSpring)(() => t),
                            v = E[0],
                            b = E[1],
                            w = a && !o ? n : Object.assign({}, v, { transformOrigin: u });
                        return (
                            (0, s.useEffect)(() => {
                                b.start({
                                    from: t,
                                    to: n,
                                    delay: c,
                                    immediate: a,
                                    config: r ? Object.assign({}, r) : { duration: l, easing: p },
                                    cancel: a || o,
                                    reverse: h,
                                    onRest: (e) => {
                                        !0 === e.finished && m && m();
                                    },
                                    onStart: () => {
                                        _ && _();
                                    },
                                });
                            }, [b, c, l, p, t, a, m, n, g, o, h, _, r]),
                            i().createElement(G.animated.div, { className: f, style: w }, e)
                        );
                    },
                    V = (e, t, n) => (n < e ? e : n > t ? t : n),
                    Y = (e) => {
                        let t,
                            n = null;
                        return (
                            (n = requestAnimationFrame(() => {
                                n = requestAnimationFrame(() => {
                                    (n = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                            }
                        );
                    };
                var j = n(6112);
                function X() {}
                function Q() {
                    return !1;
                }
                console.log;
                const K = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function Z() {
                    return (
                        (Z = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Z.apply(null, arguments)
                    );
                }
                const J = (0, s.forwardRef)(function (e, t) {
                        let n = e.src,
                            r = e.className,
                            a = e.autoplay,
                            o = void 0 !== a && a,
                            c = e.style,
                            u = e.loop,
                            d = void 0 !== u && u,
                            m = e.isPrebufferKeyframes,
                            _ = e.keyframesNameConfig,
                            g = e.onClick,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, K);
                        const h = t,
                            p = (0, s.useRef)(null);
                        var E;
                        return (
                            (E = () =>
                                l.O.view.events.onDisplayChanged((e, t) => {
                                    var n, r;
                                    t === j.W.hidden && (null == (n = p.current) || n.pause()),
                                        t === j.W.shown && (null == (r = p.current) || r.play());
                                })),
                            (0, s.useEffect)(E, []),
                            (0, s.useEffect)(
                                () =>
                                    Y(() => {
                                        const e = p.current;
                                        if (!h || !e || !m)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [m, h],
                            ),
                            (0, s.useEffect)(() => {
                                if (h && p.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: X },
                                        t = () => {
                                            let t = 0;
                                            const n = (function (n) {
                                                    let r = 0;
                                                    return [
                                                        function n() {
                                                            (() => {
                                                                if (p.current) {
                                                                    const n = p.current,
                                                                        r = n.currentTime,
                                                                        a = n.duration;
                                                                    if (
                                                                        (t !== r &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: r, duration: a }),
                                                                            ),
                                                                            (t = r)),
                                                                        p.current.paused || !h || !m)
                                                                    )
                                                                        return;
                                                                    const s = p.current.cohGetKeyframeTimestamps();
                                                                    s.forEach((t, n) => {
                                                                        r > s[n] - 0.02 &&
                                                                            r < s[n] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const r = Object.keys(
                                                                                    null != _ ? _ : {},
                                                                                )[n];
                                                                                return e({
                                                                                    time: t,
                                                                                    name: `${_ ? r : `Point_${n}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (r = requestAnimationFrame(n));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(r);
                                                        },
                                                    ];
                                                })(),
                                                r = n[0],
                                                a = n[1];
                                            return r(), a;
                                        };
                                    e.changeTimeLoop = t();
                                    const n = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const n = e.changeTimeHandlers,
                                                    r = n.indexOf(t);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : n.splice(r, 1);
                                            }
                                        ),
                                        r = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const n = e.changeKeyframeHandlers,
                                                    r = n.indexOf(t);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : n.splice(r, 1);
                                            }
                                        ),
                                        a = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.currentTime;
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            p.current && (p.current.currentTime = V(0, p.current.duration, e));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.play();
                                        },
                                        l = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.pause();
                                        },
                                        c = () => {
                                            l(), i(0);
                                        },
                                        u = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = p.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            i(e), o();
                                        },
                                        g = (e) => {
                                            i(e), l();
                                        },
                                        f = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        E = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = p.current) || n.addEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = p.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        v = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = p.current) || n.removeEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = p.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (h.current = {
                                            on: E,
                                            off: v,
                                            play: o,
                                            pause: l,
                                            stop: c,
                                            cleanup: f,
                                            getCurrentTime: a,
                                            getDuration: s,
                                            getCachedKeyframes: u,
                                            goToAndPlay: d,
                                            goToAndStop: g,
                                            setCurrentTime: i,
                                            domRef: p.current,
                                            onChangeTime: n,
                                            onKeyframes: r,
                                        }),
                                        () => {
                                            f(), (h.current = null);
                                        }
                                    );
                                }
                            }, [_, h, m]),
                            (0, s.useEffect)(() => {
                                p.current && o && p.current.play();
                            }, [o, d]),
                            (0, s.useEffect)(() => {
                                if (p.current)
                                    return () => {
                                        p.current && p.current.pause();
                                    };
                            }, []),
                            i().createElement(
                                'video',
                                Z({ src: n, className: r, style: c, loop: d, ref: p, onClick: g }, f),
                            )
                        );
                    }),
                    ee = (0, s.memo)(J),
                    te = 1920 / 1080,
                    ne = ({ className: e, hasVideo: t, bgName: n, isPaused: r }) => {
                        const a = (0, s.useState)(1),
                            o = a[0],
                            c = a[1],
                            u = (0, s.useRef)(null),
                            d = () => {
                                const e = l.O.view.getSize('rem');
                                let t = 1;
                                e.width >= e.height * te
                                    ? (t = e.width / 1920)
                                    : e.height >= e.width / te && (t = e.height / 1080),
                                    c(t);
                            };
                        return (
                            v(() => {
                                l.O.client.events.on('screenResized', d),
                                    l.O.client.events.on('self.onScaleUpdated', d);
                            }),
                            (0, s.useEffect)(() => {
                                const e = u.current;
                                if (e) return r ? e.pause() : e.play();
                            }, [r, u]),
                            (0, s.useEffect)(
                                () => (
                                    d(),
                                    () => {
                                        l.O.client.events.off('screenResized', d),
                                            l.O.client.events.off('self.onScaleUpdated', d);
                                    }
                                ),
                                [],
                            ),
                            !t || l.O.client.graphicsQuality.isLow()
                                ? null
                                : i().createElement(
                                      'div',
                                      {
                                          className: S()('VideoBackground_base_ed', e),
                                          style: { transform: `scale(${o})` },
                                      },
                                      i().createElement(ee, {
                                          ref: u,
                                          src: (() => {
                                              if (t) {
                                                  const e = R.videos.halloween.artefacts.$dyn(n);
                                                  if (e) return e;
                                              }
                                              return R.invalid();
                                          })(),
                                          className: 'VideoBackground_video_26',
                                          loop: !0,
                                          autoplay: !0,
                                      }),
                                  )
                        );
                    };
                function re(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const ae = {
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
                let se, ie;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(se || (se = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(ie || (ie = {}));
                const oe = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: r,
                    disabled: a,
                    mixClass: o,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: u,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: g,
                    onClick: f,
                }) => {
                    const h = (0, s.useRef)(null),
                        p = (0, s.useState)(n),
                        E = p[0],
                        v = p[1],
                        b = (0, s.useState)(!1),
                        w = b[0],
                        y = b[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                E && null !== h.current && !h.current.contains(e.target) && v(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [E]),
                        (0, s.useEffect)(() => {
                            v(n);
                        }, [n]),
                        i().createElement(
                            'div',
                            {
                                ref: h,
                                className: S()(
                                    ae.base,
                                    ae[`base__${r}`],
                                    a && ae.base__disabled,
                                    t && ae[`base__${t}`],
                                    E && ae.base__focus,
                                    w && ae.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    a || (null !== l && re(l), u && u(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    a || (_ && _(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    a ||
                                        (null !== c && re(c),
                                        m && m(e),
                                        n && (a || (h.current && (h.current.focus(), v(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    a || (g && g(e), y(!1));
                                },
                                onClick: function (e) {
                                    a || (f && f(e));
                                },
                            },
                            r !== se.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: ae.back }),
                                    i().createElement('span', { className: ae.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: S()(ae.state, ae.state__default) },
                                i().createElement('span', { className: ae.stateDisabled }),
                                i().createElement('span', { className: ae.stateHighlightHover }),
                                i().createElement('span', { className: ae.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: ae.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                oe.defaultProps = { type: se.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const le = oe,
                    ce = {
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
                    ue = [
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
                function de() {
                    return (
                        (de = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        de.apply(null, arguments)
                    );
                }
                class me extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && re(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && re(this.props.soundClick);
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
                            r = e.goto,
                            a = e.side,
                            s = e.type,
                            o = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            u = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(e, ue)),
                            _ = S()(ce.base, ce[`base__${s}`], ce[`base__${a}`], null == o ? void 0 : o.base),
                            g = S()(ce.icon, ce[`icon__${s}`], ce[`icon__${a}`], null == o ? void 0 : o.icon),
                            f = S()(ce.glow, null == o ? void 0 : o.glow),
                            h = S()(ce.caption, ce[`caption__${s}`], null == o ? void 0 : o.caption),
                            p = S()(ce.goto, null == o ? void 0 : o.goto);
                        return i().createElement(
                            'div',
                            de(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(u),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                m,
                            ),
                            'info' !== s && i().createElement('div', { className: ce.shine }),
                            i().createElement('div', { className: g }, i().createElement('div', { className: f })),
                            i().createElement('div', { className: h }, t),
                            r && i().createElement('div', { className: p }, r),
                        );
                    }
                }
                me.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var _e = n(5521),
                    ge = n(9916);
                const fe = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function he(e = _e.n.NONE, t = fe, n = !1, r = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== _e.n.NONE)
                            return (
                                window.addEventListener('keydown', a, n),
                                () => {
                                    window.removeEventListener('keydown', a, n);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!r && l.O.view.isEventHandled()) return;
                                l.O.view.setEventHandled(), t(a), n && a.stopPropagation();
                            }
                        }
                    }, [t, e, n, r]);
                }
                const pe = function (e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                };
                function Ee(e, t) {
                    for (let n = 0; n < e.length; n++) if (pe(e, n) === t) return !0;
                    return !1;
                }
                var ve = n(3403),
                    be = n(9174);
                function we(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const Se = (e) => (0 === e ? window : window.subViews.get(e)),
                    ye = ((e, t) => {
                        const n = (0, s.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: a, mocks: o }) {
                                const c = (0, s.useRef)([]),
                                    u = (e, n, r) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Se,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function s(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = a.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const a = n(t),
                                                        s = r.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? s
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, s);
                                                };
                                                return {
                                                    subscribe: (n, s) => {
                                                        const o = 'string' == typeof s ? `${r}.${s}` : r,
                                                            c = l.O.view.addModelObserver(o, t, !0);
                                                        return a.set(c, n), e && n(i(s)), c;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const n = i(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
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
                                                                                    return we(e, t);
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
                                                                                          ? we(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = n()).done;

                                                        )
                                                            s(e.value, t);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(n),
                                            i =
                                                'real' === e
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            o = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : i.readByPath(t),
                                            u = (e) => c.current.push(e),
                                            d = (({ observableModel: e }) =>
                                                Object.assign({}, e.primitives(['id', 'name', 'index', 'isMuted']), {
                                                    rewards: e.array('rewards'),
                                                    types: e.array('types'),
                                                }))({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const r = null != n ? n : o(t),
                                                            a = be.LO.box(r, { equals: Q });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, be.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const r = null != n ? n : o(t),
                                                            a = be.LO.box(r, { equals: Q });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, be.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const r = o(n);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = be.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, be.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                a[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = t,
                                                                s = Object.entries(a),
                                                                o = s.reduce(
                                                                    (e, [t, n]) => ((e[n] = be.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, be.aD)((e) => {
                                                                            s.forEach(([t, n]) => {
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
                                            m = { mode: e, model: d, externalModel: i, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && r ? r.controls(m) : t(m),
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    m = (0, s.useState)(e),
                                    _ = m[0],
                                    g = m[1],
                                    f = (0, s.useState)(() => u(e, r, o)),
                                    h = f[0],
                                    p = f[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? p(u(_, r, o)) : (d.current = !0);
                                    }, [o, _, r]),
                                    (0, s.useEffect)(() => {
                                        g(e);
                                    }, [e]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [h],
                                    ),
                                    i().createElement(n.Provider, { value: h }, a)
                                );
                            },
                            () => (0, s.useContext)(n),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        affirmation: e.createCallbackNoArgs('onAffirmation'),
                        muted: e.createCallbackNoArgs('onMuted'),
                    })),
                    Re = ye[0],
                    Te = ye[1];
                let Oe, Pe, xe, Le, Me, Ce, ke, Ne;
                var Ie;
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
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin');
                })(Oe || (Oe = {})),
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
                    })(Pe || (Pe = {})),
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
                    })(xe || (xe = {})),
                    ((Ie = Le || (Le = {})).MULTI = 'multi'),
                    (Ie.CURRENCY = 'currency'),
                    (Ie.PREMIUM_PLUS = 'premium_plus'),
                    (Ie.NUMBER = 'number'),
                    (Ie.STRING = 'string'),
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
                    })(Me || (Me = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Ce || (Ce = {})),
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
                    })(ke || (ke = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(Ne || (Ne = {}));
                class De extends i().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? ge.B3.GOLD : ge.B3.INTEGRAL;
                        const t = ge.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                De.defaultProps = { format: 'integral' };
                const Be = [
                        Oe.Items,
                        Oe.Equipment,
                        Oe.Xp,
                        Oe.XpFactor,
                        Oe.Blueprints,
                        Oe.BlueprintsAny,
                        Oe.Goodies,
                        Oe.Berths,
                        Oe.Slots,
                        Oe.Tokens,
                        Oe.CrewSkins,
                        Oe.CrewBooks,
                        Oe.Customizations,
                        Oe.CreditsFactor,
                        Oe.TankmenXp,
                        Oe.TankmenXpFactor,
                        Oe.FreeXpFactor,
                        Oe.BattleToken,
                        Oe.PremiumUniversal,
                        Oe.NaturalCover,
                        Oe.BpCoin,
                        Oe.BattlePassSelectToken,
                        Oe.BattlaPassFinalAchievement,
                        Oe.BattleBadge,
                        Oe.BonusX5,
                        Oe.CrewBonusX3,
                        Oe.NewYearInvoice,
                        Oe.EpicSelectToken,
                        Oe.Comp7TokenWeeklyReward,
                        Oe.DeluxeGift,
                        Oe.BattleBoosterGift,
                        Oe.OptionalDevice,
                    ],
                    Ae = [Oe.Gold, Oe.Credits, Oe.Crystal, Oe.FreeXp],
                    He = [Oe.BattlePassPoints, Oe.EquipCoin],
                    Ue = [Oe.PremiumPlus, Oe.Premium],
                    Ge = (e) =>
                        Be.includes(e)
                            ? Le.MULTI
                            : Ae.includes(e)
                              ? Le.CURRENCY
                              : He.includes(e)
                                ? Le.NUMBER
                                : Ue.includes(e)
                                  ? Le.PREMIUM_PLUS
                                  : Le.STRING,
                    We = ['engravings', 'backgrounds'],
                    Fe = ['engraving', 'background'],
                    $e = [xe.Small, xe.Big],
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
                function qe(e) {
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
                const Ve = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ge.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    Ye = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            u = void 0 !== c && c,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            g = void 0 === _ ? 0 : _,
                            f = e.isEnabled,
                            h = void 0 === f || f,
                            p = e.targetId,
                            E = void 0 === p ? 0 : p,
                            v = e.onShow,
                            b = e.onHide,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, ze);
                        const S = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, s.useMemo)(
                                () =>
                                    E ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            r = R.invalid('resId');
                                        return (
                                            t &&
                                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (r = window.subViews[n].id)),
                                            { caller: n, stack: t, resId: r }
                                        );
                                    })().resId,
                                [E],
                            ),
                            T = (0, s.useCallback)(() => {
                                (S.current.isVisible && S.current.timeoutId) ||
                                    (Ve(n, g, { isMouseEvent: !0, on: !0, arguments: qe(r) }, y),
                                    v && v(),
                                    (S.current.isVisible = !0));
                            }, [n, g, r, y, v]),
                            O = (0, s.useCallback)(() => {
                                if (S.current.isVisible || S.current.timeoutId) {
                                    const e = S.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (S.current.timeoutId = 0)),
                                        Ve(n, g, { on: !1 }, y),
                                        S.current.isVisible && b && b(),
                                        (S.current.isVisible = !1);
                                }
                            }, [n, g, y, b]),
                            P = (0, s.useCallback)((e) => {
                                S.current.isVisible &&
                                    ((S.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (S.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(S.current.prevTarget) && O();
                                    }, 200)));
                            }, []);
                        return (
                            (0, s.useEffect)(() => {
                                const e = S.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', P, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', P, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, s.useEffect)(() => {
                                !1 === h && O();
                            }, [h, O]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', O),
                                    () => {
                                        window.removeEventListener('mouseleave', O), O();
                                    }
                                ),
                                [O],
                            ),
                            h
                                ? (0, s.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((x = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((S.current.timeoutId = window.setTimeout(T, u ? 100 : 400)),
                                                          a && a(e),
                                                          x && x(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  O(), null == i || i(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === m && O(), null == l || l(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === m && O(), null == o || o(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          w,
                                      ),
                                  )
                                : t
                        );
                        var x;
                    },
                    je = ['children'];
                function Xe() {
                    return (
                        (Xe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Xe.apply(null, arguments)
                    );
                }
                const Qe = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, je);
                        return i().createElement(
                            Ye,
                            Xe(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                n,
                            ),
                            t,
                        );
                    },
                    Ke = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ze() {
                    return (
                        (Ze = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Ze.apply(null, arguments)
                    );
                }
                const Je = R.views.common.tooltip_window.simple_tooltip_content,
                    et = (e) => {
                        let t = e.children,
                            n = e.body,
                            r = e.header,
                            a = e.note,
                            o = e.alert,
                            l = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, Ke);
                        const u = (0, s.useMemo)(() => {
                            const e = Object.assign({}, l, { body: n, header: r, note: a, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, n, r, a, l]);
                        return i().createElement(
                            Ye,
                            Ze(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? Je.SimpleTooltipHtmlContent('resId') : Je.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: u,
                                },
                                c,
                            ),
                            t,
                        );
                        var d;
                    };
                function tt() {
                    return (
                        (tt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        tt.apply(null, arguments)
                    );
                }
                const nt = ({ children: e, tooltipArgs: t, className: n }) => {
                        if (!t) return e;
                        const r = i().createElement('div', { className: n }, e);
                        if (t.header || t.body) return i().createElement(et, t, r);
                        const a = t.contentId;
                        return a ? i().createElement(Ye, tt({}, t, { contentId: a }), r) : i().createElement(Qe, t, r);
                    },
                    rt = {
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
                    at = ({
                        name: e,
                        image: t,
                        isPeriodic: n = !1,
                        size: r = xe.Big,
                        special: a,
                        value: s,
                        valueType: o,
                        title: l,
                        style: c,
                        className: u,
                        classNames: d,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const g = ((e, t) => {
                                if (void 0 === t || !$e.includes(e)) return null;
                                switch (t) {
                                    case Me.BATTLE_BOOSTER:
                                    case Me.BATTLE_BOOSTER_REPLACE:
                                        return Ce.BATTLE_BOOSTER;
                                }
                            })(r, a),
                            f = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Me.BATTLE_BOOSTER:
                                        return ke.BATTLE_BOOSTER;
                                    case Me.BATTLE_BOOSTER_REPLACE:
                                        return ke.BATTLE_BOOSTER_REPLACE;
                                    case Me.BUILT_IN_EQUIPMENT:
                                        return ke.BUILT_IN_EQUIPMENT;
                                    case Me.EQUIPMENT_PLUS:
                                        return ke.EQUIPMENT_PLUS;
                                    case Me.EQUIPMENT_TROPHY_BASIC:
                                        return ke.EQUIPMENT_TROPHY_BASIC;
                                    case Me.EQUIPMENT_TROPHY_UPGRADED:
                                        return ke.EQUIPMENT_TROPHY_UPGRADED;
                                    case Me.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ke.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Me.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ke.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Me.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ke.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Me.PROGRESSION_STYLE_UPGRADED_1:
                                        return ke.PROGRESSION_STYLE_UPGRADED_1;
                                    case Me.PROGRESSION_STYLE_UPGRADED_2:
                                        return ke.PROGRESSION_STYLE_UPGRADED_2;
                                    case Me.PROGRESSION_STYLE_UPGRADED_3:
                                        return ke.PROGRESSION_STYLE_UPGRADED_3;
                                    case Me.PROGRESSION_STYLE_UPGRADED_4:
                                        return ke.PROGRESSION_STYLE_UPGRADED_4;
                                    case Me.PROGRESSION_STYLE_UPGRADED_5:
                                        return ke.PROGRESSION_STYLE_UPGRADED_5;
                                    case Me.PROGRESSION_STYLE_UPGRADED_6:
                                        return ke.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(a),
                            h = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Le.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Le.CURRENCY:
                                    case Le.NUMBER:
                                        return i().createElement(De, { format: 'integral', value: Number(e) });
                                    case Le.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return i().createElement(
                            'div',
                            { className: S()(rt.base, rt[`base__${r}`], u), style: c },
                            i().createElement(
                                nt,
                                { tooltipArgs: m, className: rt.tooltipWrapper },
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        'div',
                                        { className: S()(rt.image, null == d ? void 0 : d.image) },
                                        g &&
                                            i().createElement('div', {
                                                className: S()(rt.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${g}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            i().createElement('div', {
                                                className: S()(rt.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        f &&
                                            i().createElement('div', {
                                                className: S()(rt.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${f}_overlay)`,
                                                },
                                            }),
                                    ),
                                    h &&
                                        i().createElement(
                                            'div',
                                            {
                                                className: S()(
                                                    rt.info,
                                                    rt[`info__${e}`],
                                                    o === Le.MULTI && rt.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            h,
                                        ),
                                    l && i().createElement('div', { className: rt.title }, l),
                                ),
                            ),
                            n &&
                                i().createElement(
                                    nt,
                                    { tooltipArgs: _ },
                                    i().createElement('div', {
                                        className: S()(rt.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    st = 'hw_bonus_crew_100',
                    it = (e, t = xe.Small) => {
                        switch (e.name) {
                            case 'hw_artefact_key':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.keys`;
                            case 'vehicles':
                            case 'items':
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                            case 'hw_artefact':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.video`;
                            case st:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.bonus_crew`;
                            case 'tokens':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                        }
                        return ((e, t = xe.Small) => {
                            const n = e.name,
                                r = e.type,
                                a = e.value,
                                s = e.icon,
                                i = e.item,
                                o = e.dogTagType,
                                l = ((e) => {
                                    switch (e) {
                                        case xe.S600x450:
                                            return 'c_600x450';
                                        case xe.S400x300:
                                            return 'c_400x300';
                                        case xe.S296x222:
                                            return 'c_296x222';
                                        case xe.S232x174:
                                            return 'c_232x174';
                                        case xe.Big:
                                            return 'c_80x80';
                                        case xe.Small:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(t);
                            switch (n) {
                                case 'basic':
                                case 'plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${a}`;
                                case 'premium':
                                case 'premium_plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${a}`;
                                case 'items':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}`;
                                case 'blueprints':
                                case 'blueprintsAny':
                                case 'finalBlueprints':
                                    return `R.images.gui.maps.icons.blueprints.fragment.${t}.${s}`;
                                case 'tokens':
                                case 'lootBox':
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
                                    return ((e, t, n) => {
                                        const r = We[e];
                                        if (r) {
                                            const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                                                s = a.$dyn(n);
                                            return s ? `${s}` : `${a.$dyn(Fe[e])}`;
                                        }
                                        return (
                                            console.error(
                                                'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                            ),
                                            ''
                                        );
                                    })(o, t, s);
                                case 'dossier_badge':
                                    return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${s}`;
                                case 'dossier_achievement':
                                    return `R.images.gui.maps.icons.achievement.${l}.${s}`;
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
                                    return `R.images.gui.maps.icons.collectionItems.${l}.${s}`;
                                default:
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}`;
                            }
                        })(e, t);
                    },
                    ot = (e) =>
                        Ge(e.name) === Le.MULTI && e.value.startsWith('x') ? e.value.replace('x', '') : e.value,
                    lt = (e) =>
                        e.name === st
                            ? {
                                  contentId:
                                      R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                          'resId',
                                      ),
                                  header: R.strings.halloween_tooltips.hw_bonus_crew_100.header(),
                                  body: R.strings.halloween_tooltips.hw_bonus_crew_100.body(),
                              }
                            : ((e, t, n) => {
                                  const r = t && { contentId: t };
                                  return Object.assign(
                                      {
                                          args: e,
                                          isEnabled: Boolean((e && e.tooltipId) || t),
                                          ignoreMouseClick: !0,
                                          ignoreShowDelay: !t,
                                      },
                                      r,
                                      void 0,
                                  );
                              })({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                    ct = ['active', 'className', 'classNames', 'children', 'size'];
                function ut() {
                    return (
                        (ut = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        ut.apply(null, arguments)
                    );
                }
                const dt = (0, s.memo)(function (e) {
                        let t = e.active,
                            n = e.className,
                            r = e.classNames,
                            a = e.children,
                            s = e.size,
                            o = void 0 === s ? ie.small : s,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, ct);
                        return i().createElement(
                            'div',
                            { className: S()('ToggleButton_base_35', n, t && 'ToggleButton_base__active_be') },
                            i().createElement(
                                le,
                                ut({}, l, { mixClass: null == r ? void 0 : r.button, type: se.secondary, size: o }),
                                a,
                            ),
                            i().createElement('div', {
                                className: S()('ToggleButton_overlay_20', null == r ? void 0 : r.overlay),
                            }),
                            i().createElement('div', {
                                className: S()('ToggleButton_indicator_52', null == r ? void 0 : r.indicator),
                            }),
                        );
                    }),
                    mt = i().memo(function ({ isActive: e, className: t, onClick: n }) {
                        return i().createElement(
                            'div',
                            { className: S()('Listen_base_09', t) },
                            i().createElement(
                                et,
                                { body: R.strings.halloween_lobby.decrypt.voiceoverTooltip() },
                                i().createElement(
                                    dt,
                                    {
                                        classNames: { button: 'Listen_muteBtn_9b' },
                                        active: e,
                                        onClick: () => {
                                            n();
                                        },
                                    },
                                    i().createElement('div', { className: 'Listen_muteIcon_13' }),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: 'Listen_listenLabel_66' },
                                R.strings.halloween_lobby.decrypt.voiceover(),
                            ),
                        );
                    }),
                    _t = [];
                function gt(e) {
                    const t = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, t.current)(...e), _t)
                    );
                }
                function ft(e, t, n = []) {
                    const r = (0, s.useRef)(0),
                        a = (0, s.useCallback)(() => window.clearInterval(r.current), n || []);
                    (0, s.useEffect)(() => a, [a]);
                    const i = (null != n ? n : []).concat([t]);
                    return [
                        (0, s.useCallback)((n) => {
                            (r.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, i),
                        a,
                    ];
                }
                function ht(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                let pt;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(pt || (pt = {}));
                const Et = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    vt = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: r,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const o = (e, n) => {
                            const r = t(e),
                                a = r[0],
                                s = r[1];
                            return s <= a ? 0 : V(a, s, n);
                        };
                        return (c = {}) => {
                            const u = c.settings,
                                d = void 0 === u ? Et : u,
                                m = (0, s.useRef)(null),
                                _ = (0, s.useRef)(null),
                                g = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        r = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        a = (e, ...n) => {
                                            for (
                                                var r,
                                                    a = (function (e, t) {
                                                        var n =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (n) return (n = n.call(e)).next.bind(n);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (n = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return ht(e, t);
                                                                    var n = {}.toString.call(e).slice(8, -1);
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
                                                                              ? ht(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            n && (e = n);
                                                            var r = 0;
                                                            return function () {
                                                                return r >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[r++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(t(e).values());
                                                !(r = a()).done;

                                            )
                                                (0, r.value)(...n);
                                        };
                                    return (0, s.useMemo)(() => ({ on: n, off: r, trigger: a }), []);
                                })(),
                                f = (function (e, t, n) {
                                    const r = (0, s.useMemo)(
                                        () =>
                                            (function (e, t, n, r) {
                                                let a,
                                                    s = !1,
                                                    i = 0;
                                                function o() {
                                                    a && clearTimeout(a);
                                                }
                                                function l(...l) {
                                                    const c = this,
                                                        u = Date.now() - i;
                                                    function d() {
                                                        (i = Date.now()), n.apply(c, l);
                                                    }
                                                    s ||
                                                        (r && !a && d(),
                                                        o(),
                                                        void 0 === r && u > e
                                                            ? d()
                                                            : !0 !== t &&
                                                              (a = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            a = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === r ? e - u : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((r = n), (n = t), (t = void 0)),
                                                    (l.cancel = function () {
                                                        o(), (s = !0);
                                                    }),
                                                    l
                                                );
                                            })(n, e),
                                        t,
                                    );
                                    return (0, s.useEffect)(() => r.cancel, [r]), r;
                                })(
                                    () => {
                                        l.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                h = (0, G.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (n(t, e), g.trigger('change', e), i && f());
                                    },
                                    onRest: (e) => g.trigger('rest', e),
                                    onStart: (e) => g.trigger('start', e),
                                    onPause: (e) => g.trigger('pause', e),
                                })),
                                p = h[0],
                                E = h[1],
                                v = (0, s.useCallback)(
                                    (e, t, n) => {
                                        var r;
                                        const a = p.scrollPosition.get(),
                                            s = (null != (r = p.scrollPosition.goal) ? r : 0) - a;
                                        return o(e, t * n + s + a);
                                    },
                                    [p.scrollPosition],
                                ),
                                b = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const r = m.current;
                                        r &&
                                            E.start({
                                                scrollPosition: o(r, e),
                                                immediate: t,
                                                reset: n,
                                                config: d.animationConfig,
                                                from: { scrollPosition: o(r, p.scrollPosition.get()) },
                                            });
                                    },
                                    [E, d.animationConfig, p.scrollPosition],
                                ),
                                w = (0, s.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            n = _.current;
                                        if (!t || !n) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return a(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, d.step),
                                            s = v(t, e, r);
                                        b(s);
                                    },
                                    [b, v, d.step],
                                ),
                                S = (0, s.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && w(r(e)),
                                            m.current && g.trigger('mouseWheel', e, p.scrollPosition, t(m.current));
                                    },
                                    [p.scrollPosition, w, g],
                                ),
                                y = ((e, t = []) => {
                                    const n = (0, s.useRef)(),
                                        r = (0, s.useCallback)((...t) => {
                                            n.current && n.current(), (n.current = e(...t));
                                        }, t);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        Y(() => {
                                            const e = m.current;
                                            e &&
                                                (b(o(e, p.scrollPosition.goal), { immediate: !0 }),
                                                g.trigger('resizeHandled'));
                                        }),
                                    [b, p.scrollPosition.goal],
                                ),
                                R = gt(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = o(e, p.scrollPosition.goal);
                                    t !== p.scrollPosition.goal && b(t, { immediate: !0 }),
                                        g.trigger('recalculateContent');
                                });
                            return (
                                (0, s.useEffect)(
                                    () => (
                                        window.addEventListener('resize', y),
                                        () => {
                                            window.removeEventListener('resize', y);
                                        }
                                    ),
                                    [y],
                                ),
                                (0, s.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (_.current ? a(_.current) : void 0),
                                        getContainerSize: () => (m.current ? e(m.current) : void 0),
                                        getBounds: () =>
                                            m.current
                                                ? t(m.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: d.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: S,
                                        applyScroll: b,
                                        applyStepTo: w,
                                        contentRef: m,
                                        wrapperRef: _,
                                        scrollPosition: E,
                                        animationScroll: p,
                                        recalculateContent: R,
                                        events: { on: g.on, off: g.off },
                                    }),
                                    [p.scrollPosition, b, w, g.off, g.on, R, S, E, d.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    bt = vt({
                        getBounds: (e) => {
                            var t, n;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? pt.Next : pt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    wt = 'HorizontalBar_base__nonActive_82',
                    St = 'disable',
                    yt = { pending: !1, offset: 0 },
                    Rt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Tt = () => {},
                    Ot = (e, t) => Math.max(20, e.offsetWidth * t),
                    Pt = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Rt, onDrag: r = Tt }) => {
                        const a = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, s.useState)(yt),
                            g = _[0],
                            f = _[1],
                            h = (0, s.useCallback)(
                                (e) => {
                                    f(e),
                                        d.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [r],
                            ),
                            p = () => {
                                const t = u.current,
                                    n = d.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && t && n && a)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / a),
                                    l = V(0, 1, s / (a - r)),
                                    m = (t.offsetWidth - Ot(t, i)) * l;
                                (n.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && c.current && u.current && d.current) {
                                            if (0 === e)
                                                return o.current.classList.add(St), void c.current.classList.remove(St);
                                            if (
                                                ((t = u.current),
                                                (n = d.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(St), void c.current.classList.add(St);
                                            var t, n;
                                            o.current.classList.remove(St), c.current.classList.remove(St);
                                        }
                                    })(m);
                            },
                            E = gt(() => {
                                (() => {
                                    const t = d.current,
                                        n = u.current,
                                        r = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && r && n)) return;
                                    const i = Math.min(1, r / s);
                                    (t.style.width = `${Ot(n, i)}px`),
                                        (t.style.display = 'flex'),
                                        a.current &&
                                            (1 === i ? a.current.classList.add(wt) : a.current.classList.remove(wt));
                                })(),
                                    p();
                            });
                        (0, s.useEffect)(() => Y(E)),
                            (0, s.useEffect)(
                                () =>
                                    Y(() => {
                                        const t = () => {
                                            p();
                                        };
                                        let n = Tt;
                                        const r = () => {
                                            n(), (n = Y(E));
                                        };
                                        return (
                                            e.events.on('recalculateContent', E),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', E),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!g.pending) return;
                                const t = l.O.client.events.mouse.move(([t, n]) => {
                                        var a;
                                        const s = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!s || !i) return;
                                        const o = u.current,
                                            l = d.current;
                                        if (!o || !l) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const c = t.clientX - g.offset - o.getBoundingClientRect().x,
                                            m = (c / o.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: l, thumbOffset: c, contentOffset: m });
                                    }),
                                    n = l.O.client.events.mouse.up(() => {
                                        t(), h(yt);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, g.offset, g.pending, r, h]);
                        const v = ft((t) => e.applyStepTo(t), m, [e]),
                            b = v[0],
                            w = v[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', w, !0),
                                () => document.removeEventListener('mouseup', w, !0)
                            ),
                            [w],
                        );
                        const y = (e) => {
                            e.target.classList.contains(St) || re('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: S()('HorizontalBar_base_49', t.base), ref: a, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: S()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(St) || 0 !== e.button || (re('play'), b(pt.Next));
                                },
                                onMouseUp: w,
                                ref: o,
                                onMouseEnter: y,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: S()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const r = d.current;
                                        r &&
                                            0 === t.button &&
                                            (re('play'),
                                            t.target === r
                                                ? h({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const r = d.current,
                                                          a = e.contentRef.current;
                                                      if (!r || !a) return;
                                                      const s = n(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                  })(t.screenX > r.getBoundingClientRect().x ? pt.Prev : pt.Next));
                                    },
                                    ref: u,
                                    onMouseEnter: y,
                                },
                                i().createElement('div', { ref: d, className: S()('HorizontalBar_thumb_fd', t.thumb) }),
                                i().createElement('div', { className: S()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            i().createElement('div', {
                                className: S()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(St) || 0 !== e.button || (re('play'), b(pt.Prev));
                                },
                                onMouseUp: w,
                                ref: c,
                                onMouseEnter: y,
                            }),
                        );
                    }),
                    xt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Lt = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: r,
                        areaClassName: a,
                        classNames: o,
                        scrollClassName: l,
                        getStepByRailClick: c,
                        onDrag: u,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: S()(xt.base, e.base) });
                            }, [r]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: S()(xt.defaultScroll, n), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: S()(xt.defaultScrollArea, a) },
                                i().createElement(Mt, { className: l, api: m, classNames: o }, e),
                            ),
                            i().createElement(Pt, { getStepByRailClick: c, api: t, onDrag: u, classNames: d }),
                        );
                    },
                    Mt = ({ api: e, className: t, classNames: n, children: r }) => (
                        (0, s.useEffect)(() => Y(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: S()(xt.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: S()(xt.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: S()(xt.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (Mt.Bar = Pt), (Mt.Default = Lt);
                const Ct = vt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? pt.Next : pt.Prev),
                    }),
                    kt = 'VerticalBar_base__nonActive_42',
                    Nt = 'disable',
                    It = () => {},
                    Dt = { pending: !1, offset: 0 },
                    Bt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    At = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Ht = (e, t) => Math.max(20, e.offsetHeight * t),
                    Ut = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Bt, onDrag: r = It }) => {
                        const a = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, s.useState)(Dt),
                            g = _[0],
                            f = _[1],
                            h = (0, s.useCallback)(
                                (e) => {
                                    f(e),
                                        d.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [r],
                            ),
                            p = gt(() => {
                                const t = d.current,
                                    n = u.current,
                                    r = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(r && s && t && n)) return;
                                const i = Math.min(1, r / s);
                                return (
                                    (t.style.height = `${Ht(n, i)}px`),
                                    (t.style.display = 'flex'),
                                    a.current &&
                                        (1 === i ? a.current.classList.add(kt) : a.current.classList.remove(kt)),
                                    i
                                );
                            }),
                            E = gt(() => {
                                const t = u.current,
                                    n = d.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && t && n && a)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / a),
                                    l = V(0, 1, s / (a - r)),
                                    m = (t.offsetHeight - Ht(t, i)) * l;
                                (n.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && c.current && u.current && d.current) {
                                            if (0 === Math.round(e))
                                                return o.current.classList.add(Nt), void c.current.classList.remove(Nt);
                                            if (
                                                ((t = u.current),
                                                (n = d.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(Nt), void c.current.classList.add(Nt);
                                            var t, n;
                                            o.current.classList.remove(Nt), c.current.classList.remove(Nt);
                                        }
                                    })(m);
                            }),
                            v = gt(() => {
                                At(e, () => {
                                    p(), E();
                                });
                            });
                        (0, s.useEffect)(() => Y(v)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    At(e, () => {
                                        E();
                                    });
                                };
                                let n = It;
                                const r = () => {
                                    n(), (n = Y(v));
                                };
                                return (
                                    e.events.on('recalculateContent', v),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', v),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!g.pending) return;
                                const t = l.O.client.events.mouse.up(() => {
                                        h(Dt);
                                    }),
                                    n = l.O.client.events.mouse.move(([t]) => {
                                        At(e, (n) => {
                                            const a = u.current,
                                                s = d.current,
                                                i = e.getContainerSize();
                                            if (!a || !s || !i) return;
                                            const o = t.screenY - g.offset - a.getBoundingClientRect().y,
                                                l = (o / a.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: l });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, g.offset, g.pending, r, h]);
                        const b = ft((t) => e.applyStepTo(t), m, [e]),
                            w = b[0],
                            y = b[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', y, !0),
                                () => document.removeEventListener('mouseup', y, !0)
                            ),
                            [y],
                        );
                        const R = (e) => {
                            e.target.classList.contains(Nt) || re('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: S()('VerticalBar_base_f3', t.base), ref: a, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: S()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Nt) || 0 !== e.button || (re('play'), w(pt.Next));
                                },
                                ref: o,
                                onMouseEnter: R,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: S()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const r = d.current;
                                        var a;
                                        r &&
                                            0 === t.button &&
                                            (re('play'),
                                            t.target === r
                                                ? h({ pending: !0, offset: t.screenY - r.getBoundingClientRect().y })
                                                : ((a = t.screenY > r.getBoundingClientRect().y ? pt.Prev : pt.Next),
                                                  d.current &&
                                                      At(e, (t) => {
                                                          if (!t) return;
                                                          const r = n(e),
                                                              s = e.clampPosition(t, t.scrollTop + r * a);
                                                          e.applyScroll(s);
                                                      })));
                                    },
                                    ref: u,
                                    onMouseEnter: R,
                                },
                                i().createElement('div', { ref: d, className: S()('VerticalBar_thumb_32', t.thumb) }),
                                i().createElement('div', { className: S()('VerticalBar_rail_43', t.rail) }),
                            ),
                            i().createElement('div', {
                                className: S()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Nt) || 0 !== e.button || (re('play'), w(pt.Prev));
                                },
                                onMouseUp: y,
                                ref: c,
                                onMouseEnter: R,
                            }),
                        );
                    }),
                    Gt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Wt = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: r,
                        areaClassName: a,
                        scrollClassName: o,
                        scrollClassNames: l,
                        getStepByRailClick: c,
                        onDrag: u,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: S()(Gt.base, e.base) });
                            }, [r]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: S()(Gt.defaultScroll, n), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: S()(Gt.area, a) },
                                i().createElement(Ft, { className: o, classNames: l, api: m }, e),
                            ),
                            i().createElement(Ut, { getStepByRailClick: c, api: t, onDrag: u, classNames: d }),
                        );
                    },
                    Ft = ({ className: e, classNames: t, children: n, api: r }) => (
                        (0, s.useEffect)(() => Y(r.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: S()(Gt.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: S()(Gt.content, null == t ? void 0 : t.content), ref: r.contentRef },
                                n,
                            ),
                        )
                    );
                Ft.Default = Wt;
                const $t = { Vertical: a, Horizontal: r };
                function zt() {
                    return (
                        (zt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        zt.apply(null, arguments)
                    );
                }
                const qt = (e) => {
                        const t = e.children,
                            n = e.isScrollActive,
                            r = Ct();
                        return n ? i().createElement($t.Vertical.Area.Default, zt({}, e, { api: r }), t) : t;
                    },
                    Vt = i().memo(function ({ artefactId: e, className: t }) {
                        const n = (0, s.useRef)(null),
                            r = (0, s.useRef)(null),
                            a = (0, s.useState)(!1),
                            o = a[0],
                            l = a[1],
                            c = (0, s.useCallback)(() => {
                                if (r.current && n.current) {
                                    const e = n.current.offsetHeight,
                                        t = r.current.offsetHeight;
                                    l(e < t);
                                }
                            }, []);
                        var u, d;
                        return (
                            (0, s.useEffect)(() => Y(c), [c]),
                            (u = c),
                            (d = []),
                            (0, s.useEffect)(() => {
                                let e = () => {};
                                const t = () => {
                                    e(), (e = Y(u));
                                };
                                return (
                                    window.addEventListener('resize', t),
                                    () => {
                                        e(), window.removeEventListener('resize', t);
                                    }
                                );
                            }, d),
                            i().createElement(
                                'div',
                                { className: S()('Story_base_3e', t) },
                                i().createElement(
                                    'div',
                                    { className: 'Story_scroll_f2', ref: n },
                                    i().createElement(
                                        qt,
                                        { isScrollActive: o, barClassNames: { base: 'Story_bar_f0' } },
                                        i().createElement(
                                            'div',
                                            { className: 'Story_text_00', ref: r },
                                            R.strings.halloween_lobby.meta.story.$dyn(e),
                                        ),
                                    ),
                                ),
                            )
                        );
                    });
                function Yt() {
                    return (
                        (Yt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Yt.apply(null, arguments)
                    );
                }
                const jt = 800,
                    Xt = 120,
                    Qt = 1100,
                    Kt = { from: { opacity: 0, y: -5 } },
                    Zt = (0, ve.Pi)(({ className: e, skipAnim: t }) => {
                        const n = Te(),
                            r = n.model,
                            a = n.controls,
                            s = r.id.get(),
                            o = r.rewards.get();
                        return i().createElement(
                            'div',
                            { className: S()('QuestInfo_base_90', e) },
                            i().createElement('div', { className: 'QuestInfo_bg_5d' }),
                            i().createElement(
                                q,
                                Yt({}, Kt, { duration: jt, delay: 500, isCanceled: t }),
                                i().createElement(
                                    'div',
                                    { className: 'QuestInfo_name_39' },
                                    i().createElement(
                                        'div',
                                        { className: 'QuestInfo_index_d6' },
                                        Ee(r.types.get(), 'final')
                                            ? i().createElement('div', { className: 'QuestInfo_kingReward_13' })
                                            : r.index.get(),
                                    ),
                                    r.name.get(),
                                ),
                            ),
                            i().createElement(
                                q,
                                Yt({}, Kt, { duration: jt, delay: 700, isCanceled: t }),
                                i().createElement(
                                    'div',
                                    { className: 'QuestInfo_status_4a' },
                                    R.strings.halloween_lobby.decrypt.completed(),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: 'QuestInfo_rewards_b3' },
                                ((u = o),
                                (d = (e, n) =>
                                    i().createElement(
                                        'div',
                                        { key: `${e.name}${n}`, className: 'QuestInfo_reward_a6' },
                                        i().createElement(
                                            q,
                                            Yt({}, Kt, {
                                                duration: jt,
                                                delay: Qt + Xt * n,
                                                easingType: $.EaseOutBack,
                                                isCanceled: t,
                                                onStart: () => l.O.sound.play.sound('ev_hw_reward_screen_icon'),
                                            }),
                                            i().createElement(at, {
                                                name: e.name,
                                                value: ot(e),
                                                size: xe.Small,
                                                special: e.overlayType,
                                                image: it(e, xe.Small),
                                                valueType: Ge(e.name),
                                                tooltipArgs: lt(e),
                                            }),
                                        ),
                                    )),
                                Array.isArray(u) ? u.map(d) : u.map((e, t, n) => d(null == e ? void 0 : e.value, t))),
                            ),
                            i().createElement(
                                q,
                                Yt({}, Kt, { duration: jt, delay: Qt + o.length * Xt, isCanceled: t }),
                                Ee(r.types.get(), 'sound') &&
                                    i().createElement(mt, {
                                        className: 'QuestInfo_voiceover_e6',
                                        isActive: !r.isMuted.get(),
                                        onClick: a.muted,
                                    }),
                            ),
                            i().createElement(
                                q,
                                { from: { opacity: 0 }, duration: 1600, delay: Qt + o.length * Xt * 2, isCanceled: t },
                                i().createElement(Vt, {
                                    className: 'QuestInfo_description_e2',
                                    artefactId: ((c = s), c.replace(':', '_').slice(0, -1)),
                                }),
                            ),
                        );
                        var c, u, d;
                    }),
                    Jt = 'DecryptViewApp_background_e6',
                    en = 'final',
                    tn = (0, ve.Pi)(() => {
                        const e = Te(),
                            t = e.model,
                            n = e.controls,
                            r = (0, s.useState)(!1),
                            a = r[0],
                            o = r[1];
                        he(_e.n.ESCAPE, n.affirmation), he(_e.n.ENTER, n.affirmation);
                        const c = t.index.get(),
                            u = Ee(t.types.get(), en),
                            d = Ee(t.types.get(), 'video'),
                            m = `bg_${u ? en : c}`;
                        return i().createElement(
                            'div',
                            { className: S()('DecryptViewApp_base_17'), onClick: () => o(!0) },
                            i().createElement(me, {
                                classNames: { base: 'DecryptViewApp_closeBtn_d1' },
                                caption: R.strings.halloween_lobby.common.close(),
                                type: 'close',
                                side: 'right',
                                onClick: n.affirmation,
                            }),
                            (!d || l.O.client.graphicsQuality.isLow()) &&
                                i().createElement('div', {
                                    className: Jt,
                                    style: {
                                        backgroundImage: `url('${R.images.halloween.gui.maps.icons.backgrounds.$dyn(m)}')`,
                                    },
                                }),
                            i().createElement(
                                'div',
                                { className: Jt },
                                i().createElement(ne, { bgName: m, hasVideo: d }),
                            ),
                            i().createElement('div', { className: 'DecryptViewApp_vignetteBg_42' }),
                            i().createElement(Zt, { className: 'DecryptViewApp_questInfo_db', skipAnim: a }),
                            i().createElement(
                                'div',
                                { className: 'DecryptViewApp_buttons_1b' },
                                i().createElement(
                                    q,
                                    {
                                        from: { opacity: 0, y: 5 },
                                        className: 'DecryptViewApp_button_64',
                                        duration: jt,
                                        delay: Qt + t.rewards.get().length * Xt * 5,
                                        isCanceled: a,
                                    },
                                    i().createElement(
                                        le,
                                        { type: se.primary, size: ie.medium, onClick: n.affirmation, isFocused: !0 },
                                        R.strings.halloween_lobby.decrypt.affirmative(),
                                    ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        i().createElement(B, null, i().createElement(Re, null, i().createElement(tn, null))),
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
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], s = !0, i = 0; i < t.length; i++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((s = !1), r < a && (a = r));
                    if (s) {
                        deferred.splice(l--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, r];
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
        (__webpack_require__.j = 70),
        (() => {
            var e = { 70: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        a,
                        [s, i, o] = n,
                        l = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (t && t(n); l < s.length; l++)
                        (a = s[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(4766));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
