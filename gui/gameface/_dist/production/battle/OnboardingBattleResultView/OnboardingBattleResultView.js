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
            527: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, { mouse: () => c, off: () => l, on: () => s, onResize: () => i, onScaleUpdated: () => o });
                var a = r(2472),
                    n = r(1176);
                const i = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    d = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function r() {
                            e.enabled && (0, n.R)(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', r))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', r))
                                : (0, n.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const i = `mouse${t}`,
                                            o = d[t]((e) => r([e, 'outside']));
                                        function s(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            a(),
                                            () => {
                                                n &&
                                                    (o(),
                                                    window.removeEventListener(i, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(r)),
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
                                e.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => o,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var a = r(527),
                    n = r(2493);
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
            1176: (e, t, r) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.d(t, { R: () => a });
            },
            2493: (e, t, r) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                r.d(t, { E: () => n, G: () => a });
            },
            2472: (e, t, r) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                r.d(t, { E: () => a });
            },
            3138: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => i });
                var a = r(5959),
                    n = r(514);
                const i = { view: r(7641), client: a, sound: n.ZP };
            },
            514: (e, t, r) => {
                'use strict';
                r.d(t, { ZP: () => o });
                var a = r(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, a.playSound)(n[t])), e), {}),
                    o = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, r) => {
                'use strict';
                function a(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function n(e, t, r) {
                    return `url(${a(e, t, r)})`;
                }
                r.r(t), r.d(t, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (e, t, r) => {
                'use strict';
                r.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, r) => {
                'use strict';
                r.d(t, { U: () => n });
                var a = r(2472);
                const n = {
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
            7641: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => S,
                        events: () => i.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => x,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => y,
                        getScale: () => E,
                        getSize: () => _,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => L,
                        isFocused: () => f,
                        pxToRem: () => v,
                        remToPx: () => w,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => T,
                    });
                var a = r(3722),
                    n = r(6112),
                    i = r(6538),
                    o = r(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function d(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function c(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: w(t.x), y: w(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function v(e) {
                    return viewEnv.pxToRem(e);
                }
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function L() {
                    return viewEnv.isEventHandled();
                }
                function x() {
                    viewEnv.forceTriggerMouseMove();
                }
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const S = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    O = {
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
            8566: (e, t, r) => {
                'use strict';
                r.d(t, { qP: () => i });
                const a = ['args'],
                    n = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                    return n;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, o, {
                                          arguments:
                                              ((n = i),
                                              Object.entries(n).map(([e, t]) => {
                                                  const r = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: r, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: r, name: e, bool: t };
                                                      default:
                                                          return { __Type: r, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    i = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, r) => {
                'use strict';
                let a, n;
                r.d(t, { n: () => a }),
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
                    })(n || (n = {}));
            },
            1358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => i });
                var a = r(3138);
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
                    addCallback(e, t, r = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, r, n);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(i) : (this._views[r] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let r = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((r = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            r || console.error("Can't remove callback by id:", e),
                            r
                        );
                    }
                    _emmitDataChanged(e, t, r) {
                        r.forEach((r) => {
                            const a = this._callbacks[r];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const i = n;
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
            9916: (e, t, r) => {
                'use strict';
                r.d(t, { ry: () => w });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    r();
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
                        const r = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== a)),
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
                const n = a;
                var i = r(1358),
                    o = r(8613);
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
                const d = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = r(5521),
                    h = r(3138);
                const g = ['args'];
                function E(e, t, r, a, n, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void r(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(a, n);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        r = arguments;
                                    return new Promise(function (a, n) {
                                        var i = e.apply(t, r);
                                        function o(e) {
                                            E(i, a, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            E(i, a, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                    return n;
                                })(t, g);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const r = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          r.number = t;
                                                          break;
                                                      case 'boolean':
                                                          r.bool = t;
                                                          break;
                                                      default:
                                                          r.string = t.toString();
                                                  }
                                                  return r;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    f = () => b(s.CLOSE),
                    p = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var L = r(7572);
                const x = n.instance,
                    y = {
                        DataTracker: i.Z,
                        ViewModel: L.Z,
                        ViewEventType: s,
                        NumberFormatType: d,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: _,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => b(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => b(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            b(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, a, n = R.invalid('resId'), i) => {
                            const o = h.O.view.getViewGlobalPosition(),
                                l = r.getBoundingClientRect(),
                                d = l.x,
                                c = l.y,
                                u = l.width,
                                _ = l.height,
                                m = {
                                    x: h.O.view.pxToRem(d) + o.x,
                                    y: h.O.view.pxToRem(c) + o.y,
                                    width: h.O.view.pxToRem(u),
                                    height: h.O.view.pxToRem(_),
                                };
                            b(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: v(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => p(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, f);
                        },
                        handleViewEvent: b,
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
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const n = Object.prototype.toString.call(t[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[a];
                                        r[a] = [];
                                        for (let t = 0; t < n.length; t++) r[a].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[a] = e(t[a]))
                                            : (r[a] = t[a]);
                                }
                            return r;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, t, r) => {
                'use strict';
                r.d(t, { Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
            },
            8176: (e, t, r) => {
                'use strict';
                var a = r(6179),
                    n = r.n(a);
                const i = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                var o = r(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function d(e, t, r) {
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
                        })(e, r),
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
                        })(t, r),
                        i = Math.min(a, n);
                    return {
                        extraLarge: i === r.extraLarge.weight,
                        large: i === r.large.weight,
                        medium: i === r.medium.weight,
                        small: i === r.small.weight,
                        extraSmall: i === r.extraSmall.weight,
                        extraLargeWidth: a === r.extraLarge.weight,
                        largeWidth: a === r.large.weight,
                        mediumWidth: a === r.medium.weight,
                        smallWidth: a === r.small.weight,
                        extraSmallWidth: a === r.extraSmall.weight,
                        extraLargeHeight: n === r.extraLarge.weight,
                        largeHeight: n === r.large.weight,
                        mediumHeight: n === r.medium.weight,
                        smallHeight: n === r.small.weight,
                        extraSmallHeight: n === r.extraSmall.weight,
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
                const c = o.O.client.getSize('rem'),
                    u = c.width,
                    _ = c.height,
                    m = Object.assign({ width: u, height: _ }, d(u, _, s)),
                    h = (0, a.createContext)(m),
                    g = ['children'],
                    E = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n;
                            })(e, g);
                        const n = (0, a.useContext)(h),
                            o = n.extraLarge,
                            s = n.large,
                            l = n.medium,
                            d = n.small,
                            c = n.extraSmall,
                            u = n.extraLargeWidth,
                            _ = n.largeWidth,
                            m = n.mediumWidth,
                            E = n.smallWidth,
                            v = n.extraSmallWidth,
                            w = n.extraLargeHeight,
                            b = n.largeHeight,
                            f = n.mediumHeight,
                            p = n.smallHeight,
                            L = n.extraSmallHeight,
                            x = { extraLarge: w, large: b, medium: f, small: p, extraSmall: L };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && o) return t;
                            if (r.large && s) return t;
                            if (r.medium && l) return t;
                            if (r.small && d) return t;
                            if (r.extraSmall && c) return t;
                        } else {
                            if (r.extraLargeWidth && u) return i(t, r, x);
                            if (r.largeWidth && _) return i(t, r, x);
                            if (r.mediumWidth && m) return i(t, r, x);
                            if (r.smallWidth && E) return i(t, r, x);
                            if (r.extraSmallWidth && v) return i(t, r, x);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && w) return t;
                                if (r.largeHeight && b) return t;
                                if (r.mediumHeight && f) return t;
                                if (r.smallHeight && p) return t;
                                if (r.extraSmallHeight && L) return t;
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
                    (0, a.memo)(E);
                const v = ({ children: e }) => {
                    const t = (0, a.useContext)(h),
                        r = (0, a.useState)(t),
                        i = r[0],
                        l = r[1],
                        c = (0, a.useCallback)((e, t) => {
                            const r = o.O.view.pxToRem(e),
                                a = o.O.view.pxToRem(t);
                            l(Object.assign({ width: r, height: a }, d(r, a, s)));
                        }, []),
                        u = (0, a.useCallback)(() => {
                            const e = o.O.client.getSize('px');
                            c(e.width, e.height);
                        }, [c]);
                    ((e) => {
                        const t = (0, a.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        o.O.client.events.on('clientResized', c), o.O.client.events.on('self.onScaleUpdated', u);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                o.O.client.events.off('clientResized', c),
                                    o.O.client.events.off('self.onScaleUpdated', u);
                            },
                            [c, u],
                        );
                    const _ = (0, a.useMemo)(() => Object.assign({}, i), [i]);
                    return n().createElement(h.Provider, { value: _ }, e);
                };
                var w = r(6483),
                    b = r.n(w),
                    f = r(926),
                    p = r.n(f);
                let L, x, y;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(L || (L = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(x || (x = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(y || (y = {}));
                const S = ['children', 'className'];
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                }
                const T = {
                        [x.ExtraSmall]: '',
                        [x.Small]: p().SMALL_WIDTH,
                        [x.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [x.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [x.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [y.ExtraSmall]: '',
                        [y.Small]: p().SMALL_HEIGHT,
                        [y.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [y.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [L.ExtraSmall]: '',
                        [L.Small]: p().SMALL,
                        [L.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [L.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [L.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    H = (e) => {
                        let t = e.children,
                            r = e.className,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n;
                            })(e, S);
                        const o = (() => {
                                const e = (0, a.useContext)(h),
                                    t = e.width,
                                    r = e.height,
                                    n = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return L.ExtraLarge;
                                            case e.large:
                                                return L.Large;
                                            case e.medium:
                                                return L.Medium;
                                            case e.small:
                                                return L.Small;
                                            case e.extraSmall:
                                                return L.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), L.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'), x.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    o = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return y.ExtraLarge;
                                            case e.largeHeight:
                                                return y.Large;
                                            case e.mediumHeight:
                                                return y.Medium;
                                            case e.smallHeight:
                                                return y.Small;
                                            case e.extraSmallHeight:
                                                return y.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), y.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: n,
                                    mediaWidth: i,
                                    mediaHeight: o,
                                    remScreenWidth: t,
                                    remScreenHeight: r,
                                };
                            })(),
                            s = o.mediaWidth,
                            l = o.mediaHeight,
                            d = o.mediaSize;
                        return n().createElement('div', O({ className: b()(r, T[s], M[l], k[d]) }, i), t);
                    },
                    C = ['children'],
                    A = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n;
                            })(e, C);
                        return n().createElement(v, null, n().createElement(H, r, t));
                    };
                var P = r(493),
                    W = r.n(P);
                function D(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const I = {
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
                let N, B;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(N || (N = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(B || (B = {}));
                const G = ({
                    children: e,
                    size: t,
                    isFocused: r,
                    type: i,
                    disabled: o,
                    mixClass: s,
                    soundHover: l,
                    soundClick: d,
                    onMouseEnter: c,
                    onMouseMove: u,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: h,
                    onClick: g,
                }) => {
                    const E = (0, a.useRef)(null),
                        v = (0, a.useState)(r),
                        w = v[0],
                        f = v[1],
                        p = (0, a.useState)(!1),
                        L = p[0],
                        x = p[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                w && null !== E.current && !E.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [w]),
                        (0, a.useEffect)(() => {
                            f(r);
                        }, [r]),
                        n().createElement(
                            'div',
                            {
                                ref: E,
                                className: b()(
                                    I.base,
                                    I[`base__${i}`],
                                    o && I.base__disabled,
                                    t && I[`base__${t}`],
                                    w && I.base__focus,
                                    L && I.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== l && D(l), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    u && u(e);
                                },
                                onMouseUp: function (e) {
                                    o || (m && m(e), x(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== d && D(d),
                                        _ && _(e),
                                        r && (o || (E.current && (E.current.focus(), f(!0)))),
                                        x(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (h && h(e), x(!1));
                                },
                                onClick: function (e) {
                                    o || (g && g(e));
                                },
                            },
                            i !== N.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: I.back }),
                                    n().createElement('span', { className: I.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: b()(I.state, I.state__default) },
                                n().createElement('span', { className: I.stateDisabled }),
                                n().createElement('span', { className: I.stateHighlightHover }),
                                n().createElement('span', { className: I.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: I.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                G.defaultProps = { type: N.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const U = G;
                var F = r(5521);
                r(9916);
                const j = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function V(e = F.n.NONE, t = j, r = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== F.n.NONE)
                            return (
                                window.addEventListener('keydown', a, r),
                                () => {
                                    window.removeEventListener('keydown', a, r);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(a), r && a.stopPropagation();
                            }
                        }
                    }, [t, e, r, n]);
                }
                var $ = r(3403);
                const z = (0, a.memo)(
                    ({ className: e, backgroundPath: t, onLoaded: r, showVignette: a = !0, showBlur: i = !1 }) =>
                        n().createElement(
                            'div',
                            {
                                className: b()('Background_base_94', i && 'Background_base__blur_69', e),
                                style: { backgroundImage: `url(${t})` },
                            },
                            a && n().createElement('div', { className: 'Background_vignette_79' }),
                            r &&
                                n().createElement('img', {
                                    className: 'Background_preloader_7d',
                                    onLoad: () => r(),
                                    onError: () => r(),
                                    src: t,
                                    alt: t,
                                }),
                        ),
                );
                function q() {
                    return !1;
                }
                console.log;
                var K = r(9174);
                function Y(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const X = (e) => (0 === e ? window : window.subViews.get(e)),
                    Z = ((e, t) => {
                        const r = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: i, children: s, mocks: l }) {
                                const d = (0, a.useRef)([]),
                                    c = (e, r, a) => {
                                        var n;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = X,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = n.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = r(t),
                                                        i = a.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (r, i) => {
                                                        const l = 'string' == typeof i ? `${a}.${i}` : a,
                                                            d = o.O.view.addModelObserver(l, t, !0);
                                                        return n.set(d, r), e && r(s(i)), d;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const r = s(t);
                                                        return (...t) => {
                                                            r(e(...t));
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
                                                                r = (function (e, t) {
                                                                    var r =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (r) return (r = r.call(e)).next.bind(r);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (r = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return Y(e, t);
                                                                                var r = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === r &&
                                                                                        e.constructor &&
                                                                                        (r = e.constructor.name),
                                                                                    'Map' === r || 'Set' === r
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === r ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                r,
                                                                                            )
                                                                                          ? Y(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        r && (e = r);
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
                                                                })(n.keys());
                                                            !(e = r()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            s =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            l = (t) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(t)) : s.readByPath(t),
                                            c = (e) => d.current.push(e),
                                            u = (({ observableModel: e }) => e.primitives(['causeText', 'missionId']))({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const a = null != r ? r : l(t),
                                                            n = K.LO.box(a, { equals: q });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, K.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const a = null != r ? r : l(t),
                                                            n = K.LO.box(a, { equals: q });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, K.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const a = l(r);
                                                        if (Array.isArray(t)) {
                                                            const n = t.reduce(
                                                                (e, t) => ((e[t] = K.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, K.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                n[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = t,
                                                                i = Object.entries(n),
                                                                o = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = K.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, K.aD)((e) => {
                                                                            i.forEach(([t, r]) => {
                                                                                o[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            _ = { mode: e, model: u, externalModel: s, cleanup: c };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && a ? a.controls(_) : t(_),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    u = (0, a.useRef)(!1),
                                    _ = (0, a.useState)(e),
                                    m = _[0],
                                    h = _[1],
                                    g = (0, a.useState)(() => c(e, i, l)),
                                    E = g[0],
                                    v = g[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        u.current ? v(c(m, i, l)) : (u.current = !0);
                                    }, [l, m, i]),
                                    (0, a.useEffect)(() => {
                                        h(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            E.externalModel.dispose(), d.current.forEach((e) => e());
                                        },
                                        [E],
                                    ),
                                    n().createElement(r.Provider, { value: E }, s)
                                );
                            },
                            () => (0, a.useContext)(r),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        continue: e.createCallbackNoArgs('onContinue'),
                        loaded: e.createCallbackNoArgs('onLoaded'),
                    })),
                    Q = Z[0],
                    J = Z[1],
                    ee = (0, $.Pi)(() => {
                        const e = J(),
                            t = e.controls,
                            r = e.model;
                        return (
                            ((e) => {
                                const t = (0, a.useCallback)(
                                    (t) => {
                                        !t.altKey && e && e();
                                    },
                                    [e],
                                );
                                V(F.n.ENTER, t, !0);
                            })(t.continue),
                            n().createElement(
                                'div',
                                { className: 'OnboardingBattleResultViewApp_base_83' },
                                n().createElement(z, {
                                    backgroundPath:
                                        R.images.story_mode.gui.maps.icons.common.backgrounds_onboarding.$num(
                                            r.missionId.get(),
                                        ),
                                    onLoaded: t.loaded,
                                }),
                                n().createElement(
                                    'div',
                                    { className: 'OnboardingBattleResultViewApp_title_e4' },
                                    R.strings.sm_lobby.onboardingBattleResult.titleText(),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'OnboardingBattleResultViewApp_subTitle_ab' },
                                    r.causeText.get(),
                                ),
                                n().createElement(
                                    U,
                                    {
                                        type: N.primary,
                                        size: B.medium,
                                        mixClass: 'OnboardingBattleResultViewApp_button_eb',
                                        onClick: t.continue,
                                    },
                                    R.strings.sm_lobby.onboardingBattleResult.startButton(),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    W().render(
                        n().createElement(Q, null, n().createElement(A, null, n().createElement(ee, null))),
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
        var r = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](r, r.exports, __webpack_require__), r.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, r, a) => {
            if (!t) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, r, a] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), a < n && (n = a));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = r();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, r, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var r in t)
                __webpack_require__.o(t, r) &&
                    !__webpack_require__.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
        (__webpack_require__.j = 106),
        (() => {
            var e = { 106: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var a,
                        n,
                        [i, o, s] = r,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (s) var d = s(__webpack_require__);
                    }
                    for (t && t(r); l < i.length; l++)
                        (n = i[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(8176));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
