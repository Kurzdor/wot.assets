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
                    n.d(t, { mouse: () => u, off: () => l, on: () => i, onResize: () => s, onScaleUpdated: () => o });
                var a = n(2472),
                    r = n(1176);
                const s = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const u = (function () {
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
                    const s = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const s = `mouse${t}`,
                                        o = c[t]((e) => n([e, 'outside']));
                                    function i(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, i),
                                        a(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(s, i),
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
                    return Object.assign({}, s, {
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
                        getSize: () => s,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var a = n(527),
                    r = n(2493);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
                n.d(t, { O: () => s });
                var a = n(5959),
                    r = n(514);
                const s = { view: n(7641), client: a, sound: r.ZP };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => o });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    o = { play: Object.assign({}, s, { sound: a.playSound }), setRTPC: a.setRTPC };
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
                        addModelObserver: () => u,
                        addPreloadTexture: () => i,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => S,
                        events: () => s.U,
                        extraSize: () => N,
                        forceTriggerMouseMove: () => k,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => C,
                        getScale: () => v,
                        getSize: () => m,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => y,
                        isFocused: () => E,
                        pxToRem: () => f,
                        remToPx: () => h,
                        resize: () => g,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => w,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => T,
                    });
                var a = n(3722),
                    r = n(6112),
                    s = n(6538),
                    o = n(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function u(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function _(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function f(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function E() {
                    return viewEnv.isFocused();
                }
                function w() {
                    return viewEnv.setEventHandled();
                }
                function y() {
                    return viewEnv.isEventHandled();
                }
                function k() {
                    viewEnv.forceTriggerMouseMove();
                }
                function C() {
                    return viewEnv.getShowingStatus();
                }
                const S = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    N = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => c });
                const a = ['args'];
                const r = 2,
                    s = 16,
                    o = 32,
                    i = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, a);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((r = s),
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
                    c = {
                        close(e) {
                            l('popover' === e ? r : o);
                        },
                        minimize() {
                            l(i);
                        },
                        move(e) {
                            l(s, { isMouseEvent: !0, on: e });
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
                n.d(t, { Z: () => s });
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
                        const s = a.O.view.addModelObserver(e, n, r);
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
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
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
            9916: (e, t, n) => {
                'use strict';
                n.d(t, { Sw: () => s.Z, Gr: () => u, Z5: () => i.Z5, B0: () => l, lw: () => o, ry: () => h });
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
                var s = n(1358);
                function o(e) {
                    const t = {};
                    if ('object' != typeof e) return e;
                    for (const n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            const a = Object.prototype.toString.call(e[n]);
                            if (a.startsWith('[object CoherentArrayProxy]')) {
                                const a = e[n];
                                t[n] = [];
                                for (let e = 0; e < a.length; e++) t[n].push({ value: o(a[e].value) });
                            } else a.startsWith('[object class BW::WULF::ViewModel') ? (t[n] = o(e[n])) : (t[n] = e[n]);
                        }
                    return t;
                }
                var i = n(8613);
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var g = n(5521),
                    _ = n(3138);
                const p = ['args'];
                function v(e, t, n, a, r, s, o) {
                    try {
                        var i = e[s](o),
                            l = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    i.done ? t(l) : Promise.resolve(l).then(a, r);
                }
                const f = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        n = arguments;
                                    return new Promise(function (a, r) {
                                        var s = e.apply(t, n);
                                        function o(e) {
                                            v(s, a, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            v(s, a, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, p);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    E = () => b(l.CLOSE),
                    w = (e, t) => {
                        e.keyCode === g.n.ESCAPE && t();
                    };
                var y = n(7572);
                const k = r.instance,
                    C = {
                        DataTracker: s.Z,
                        ViewModel: y.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: u,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: f,
                        sendMoveEvent: (e) => b(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: E,
                        sendClosePopOverEvent: () => b(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            b(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, r = R.invalid('resId'), s) => {
                            const o = _.O.view.getViewGlobalPosition(),
                                i = n.getBoundingClientRect(),
                                c = i.x,
                                u = i.y,
                                d = i.width,
                                m = i.height,
                                g = {
                                    x: _.O.view.pxToRem(c) + o.x,
                                    y: _.O.view.pxToRem(u) + o.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            b(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: f(g),
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
                            w(e, E);
                        },
                        handleViewEvent: b,
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
                        dumpViewModel: o,
                        ClickOutsideManager: k,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = C;
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
            2672: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => Qs,
                        Bar: () => Ys,
                        DefaultScroll: () => Zs,
                        Direction: () => Ds,
                        defaultSettings: () => Ms,
                        useHorizontalScrollApi: () => Ps,
                    });
                var r = {};
                n.r(r), n.d(r, { Area: () => fo, Bar: () => _o, Default: () => vo, useVerticalScrollApi: () => Js });
                var s = n(6483),
                    o = n.n(s);
                function i(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const l = {
                    playHighlight() {
                        i('highlight');
                    },
                    playClick() {
                        i('play');
                    },
                    playYes() {
                        i('yes1');
                    },
                };
                var c = n(6179),
                    u = n.n(c);
                const d = {
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
                let m, g;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(m || (m = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(g || (g = {}));
                const _ = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: r,
                    mixClass: s,
                    soundHover: l,
                    soundClick: g,
                    onMouseEnter: _,
                    onMouseMove: p,
                    onMouseDown: v,
                    onMouseUp: f,
                    onMouseLeave: h,
                    onClick: b,
                }) => {
                    const E = (0, c.useRef)(null),
                        w = (0, c.useState)(n),
                        y = w[0],
                        k = w[1],
                        C = (0, c.useState)(!1),
                        S = C[0],
                        N = C[1];
                    return (
                        (0, c.useEffect)(() => {
                            function e(e) {
                                y && null !== E.current && !E.current.contains(e.target) && k(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [y]),
                        (0, c.useEffect)(() => {
                            k(n);
                        }, [n]),
                        u().createElement(
                            'div',
                            {
                                ref: E,
                                className: o()(
                                    d.base,
                                    d[`base__${a}`],
                                    r && d.base__disabled,
                                    t && d[`base__${t}`],
                                    y && d.base__focus,
                                    S && d.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== l && i(l), _ && _(e));
                                },
                                onMouseMove: function (e) {
                                    p && p(e);
                                },
                                onMouseUp: function (e) {
                                    r || (f && f(e), N(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== g && i(g),
                                        v && v(e),
                                        n && (r || (E.current && (E.current.focus(), k(!0)))),
                                        N(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (h && h(e), N(!1));
                                },
                                onClick: function (e) {
                                    r || (b && b(e));
                                },
                            },
                            a !== m.ghost &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: d.back }),
                                    u().createElement('span', { className: d.texture }),
                                ),
                            u().createElement(
                                'span',
                                { className: o()(d.state, d.state__default) },
                                u().createElement('span', { className: d.stateDisabled }),
                                u().createElement('span', { className: d.stateHighlightHover }),
                                u().createElement('span', { className: d.stateHighlightActive }),
                            ),
                            u().createElement(
                                'span',
                                { className: d.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                _.defaultProps = { type: m.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const p = _,
                    v = {
                        base: 'ErrorBoundary_base_46',
                        message: 'ErrorBoundary_message_33',
                        heading: 'ErrorBoundary_heading_ba',
                        button: 'ErrorBoundary_button_74',
                        errorStack: 'ErrorBoundary_errorStack_fe',
                        errorInfo: 'ErrorBoundary_errorInfo_f1',
                    };
                class f extends u().Component {
                    constructor(e) {
                        super(e),
                            (this.clearError = () => {
                                this.setState({ error: void 0 });
                            }),
                            (this.state = { error: void 0 });
                    }
                    static getDerivedStateFromError(e) {
                        return { error: e };
                    }
                    render() {
                        const e = this.state.error,
                            t = this.props,
                            n = t.errorMessage,
                            a = void 0 === n ? R.strings.dogtags.error.message() : n,
                            r = t.retryLabel,
                            s = void 0 === r ? R.strings.dogtags.error.retry() : r;
                        return e
                            ? u().createElement(
                                  'div',
                                  { className: v.base },
                                  u().createElement(
                                      'div',
                                      { className: v.message },
                                      u().createElement('div', { className: v.heading }, a),
                                      u().createElement(p, { mixClass: v.retry, onClick: this.clearError }, s),
                                  ),
                              )
                            : this.props.children;
                    }
                }
                const h = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var b = n(3138);
                const E = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var w;
                function y(e, t, n) {
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
                        s = Math.min(a, r);
                    return {
                        extraLarge: s === n.extraLarge.weight,
                        large: s === n.large.weight,
                        medium: s === n.medium.weight,
                        small: s === n.small.weight,
                        extraSmall: s === n.extraSmall.weight,
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
                })(w || (w = {}));
                const k = b.O.client.getSize('rem'),
                    C = k.width,
                    S = k.height,
                    N = Object.assign({ width: C, height: S }, y(C, S, E)),
                    T = (0, c.createContext)(N),
                    x = ['children'];
                const I = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, x);
                    const a = (0, c.useContext)(T),
                        r = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        i = a.small,
                        l = a.extraSmall,
                        u = a.extraLargeWidth,
                        d = a.largeWidth,
                        m = a.mediumWidth,
                        g = a.smallWidth,
                        _ = a.extraSmallWidth,
                        p = a.extraLargeHeight,
                        v = a.largeHeight,
                        f = a.mediumHeight,
                        b = a.smallHeight,
                        E = a.extraSmallHeight,
                        w = { extraLarge: p, large: v, medium: f, small: b, extraSmall: E };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && r) return t;
                        if (n.large && s) return t;
                        if (n.medium && o) return t;
                        if (n.small && i) return t;
                        if (n.extraSmall && l) return t;
                    } else {
                        if (n.extraLargeWidth && u) return h(t, n, w);
                        if (n.largeWidth && d) return h(t, n, w);
                        if (n.mediumWidth && m) return h(t, n, w);
                        if (n.smallWidth && g) return h(t, n, w);
                        if (n.extraSmallWidth && _) return h(t, n, w);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && p) return t;
                            if (n.largeHeight && v) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && b) return t;
                            if (n.extraSmallHeight && E) return t;
                        }
                    }
                    return null;
                };
                I.defaultProps = {
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
                (0, c.memo)(I);
                const O = (e) => {
                        const t = (0, c.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    L = ({ children: e }) => {
                        const t = (0, c.useContext)(T),
                            n = (0, c.useState)(t),
                            a = n[0],
                            r = n[1],
                            s = (0, c.useCallback)((e, t) => {
                                const n = b.O.view.pxToRem(e),
                                    a = b.O.view.pxToRem(t);
                                r(Object.assign({ width: n, height: a }, y(n, a, E)));
                            }, []),
                            o = (0, c.useCallback)(() => {
                                const e = b.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        O(() => {
                            b.O.client.events.on('clientResized', s), b.O.client.events.on('self.onScaleUpdated', o);
                        }),
                            (0, c.useEffect)(
                                () => () => {
                                    b.O.client.events.off('clientResized', s),
                                        b.O.client.events.off('self.onScaleUpdated', o);
                                },
                                [s, o],
                            );
                        const i = (0, c.useMemo)(() => Object.assign({}, a), [a]);
                        return u().createElement(T.Provider, { value: i }, e);
                    };
                var D = n(926),
                    M = n.n(D);
                let A, P, B;
                !(function (e) {
                    (e[(e.ExtraSmall = E.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = E.small.width)] = 'Small'),
                        (e[(e.Medium = E.medium.width)] = 'Medium'),
                        (e[(e.Large = E.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = E.extraLarge.width)] = 'ExtraLarge');
                })(A || (A = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = E.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = E.small.width)] = 'Small'),
                            (e[(e.Medium = E.medium.width)] = 'Medium'),
                            (e[(e.Large = E.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = E.extraLarge.width)] = 'ExtraLarge');
                    })(P || (P = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = E.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = E.small.height)] = 'Small'),
                            (e[(e.Medium = E.medium.height)] = 'Medium'),
                            (e[(e.Large = E.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = E.extraLarge.height)] = 'ExtraLarge');
                    })(B || (B = {}));
                const H = () => {
                        const e = (0, c.useContext)(T),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return A.ExtraLarge;
                                    case e.large:
                                        return A.Large;
                                    case e.medium:
                                        return A.Medium;
                                    case e.small:
                                        return A.Small;
                                    case e.extraSmall:
                                        return A.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), A.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
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
                                        return console.error('Unreachable media context resolution'), P.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return B.ExtraLarge;
                                    case e.largeHeight:
                                        return B.Large;
                                    case e.mediumHeight:
                                        return B.Medium;
                                    case e.smallHeight:
                                        return B.Small;
                                    case e.extraSmallHeight:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: s, remScreenWidth: t, remScreenHeight: n };
                    },
                    W = ['children', 'className'];
                function $() {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                }
                const z = {
                        [P.ExtraSmall]: '',
                        [P.Small]: M().SMALL_WIDTH,
                        [P.Medium]: `${M().SMALL_WIDTH} ${M().MEDIUM_WIDTH}`,
                        [P.Large]: `${M().SMALL_WIDTH} ${M().MEDIUM_WIDTH} ${M().LARGE_WIDTH}`,
                        [P.ExtraLarge]: `${M().SMALL_WIDTH} ${M().MEDIUM_WIDTH} ${M().LARGE_WIDTH} ${M().EXTRA_LARGE_WIDTH}`,
                    },
                    F = {
                        [B.ExtraSmall]: '',
                        [B.Small]: M().SMALL_HEIGHT,
                        [B.Medium]: `${M().SMALL_HEIGHT} ${M().MEDIUM_HEIGHT}`,
                        [B.Large]: `${M().SMALL_HEIGHT} ${M().MEDIUM_HEIGHT} ${M().LARGE_HEIGHT}`,
                        [B.ExtraLarge]: `${M().SMALL_HEIGHT} ${M().MEDIUM_HEIGHT} ${M().LARGE_HEIGHT} ${M().EXTRA_LARGE_HEIGHT}`,
                    },
                    j = {
                        [A.ExtraSmall]: '',
                        [A.Small]: M().SMALL,
                        [A.Medium]: `${M().SMALL} ${M().MEDIUM}`,
                        [A.Large]: `${M().SMALL} ${M().MEDIUM} ${M().LARGE}`,
                        [A.ExtraLarge]: `${M().SMALL} ${M().MEDIUM} ${M().LARGE} ${M().EXTRA_LARGE}`,
                    },
                    G = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, W);
                        const r = H(),
                            s = r.mediaWidth,
                            i = r.mediaHeight,
                            l = r.mediaSize;
                        return u().createElement('div', $({ className: o()(n, z[s], F[i], j[l]) }, a), t);
                    },
                    V = ['children'];
                const U = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, V);
                    return u().createElement(L, null, u().createElement(G, n, t));
                };
                var q = n(493),
                    K = n.n(q),
                    Y = n(7006);
                const X = {
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
                        (Q =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Q.apply(this, arguments)
                    );
                }
                class J extends u().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && i(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && i(this.props.soundClick);
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
                            r = e.side,
                            s = e.type,
                            i = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onMouseUp,
                            g =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(e, Z)),
                            _ = o()(X.base, X[`base__${s}`], X[`base__${r}`], null == i ? void 0 : i.base),
                            p = o()(X.icon, X[`icon__${s}`], X[`icon__${r}`], null == i ? void 0 : i.icon),
                            v = o()(X.glow, null == i ? void 0 : i.glow),
                            f = o()(X.caption, X[`caption__${s}`], null == i ? void 0 : i.caption),
                            h = o()(X.goto, null == i ? void 0 : i.goto);
                        return u().createElement(
                            'div',
                            Q(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                g,
                            ),
                            'info' !== s && u().createElement('div', { className: X.shine }),
                            u().createElement('div', { className: p }, u().createElement('div', { className: v })),
                            u().createElement('div', { className: f }, t),
                            a && u().createElement('div', { className: h }, a),
                        );
                    }
                }
                J.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const ee = (e, t) => {
                    let n;
                    const a = setTimeout(() => {
                        n = e();
                    }, t);
                    return () => {
                        'function' == typeof n && n(), clearTimeout(a);
                    };
                };
                var te = n(5521),
                    ne = n(9916);
                const ae = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function re(e = te.n.NONE, t = ae, n = !1, a = !1) {
                    (0, c.useEffect)(() => {
                        if (e !== te.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && b.O.view.isEventHandled()) return;
                                b.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                const se = (e = 1) => {
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
                    },
                    oe = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    ie = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    le = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    ce = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const a = oe(`${e}.${n}`, window);
                                return ie(a) ? t(e, n, a) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    ue = (e) => {
                        const t = ((e) => {
                                const t = se(),
                                    n = t.caller,
                                    a = t.resId,
                                    r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: r, modelPath: le(r, e || ''), resId: a };
                            })(),
                            n = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const r = oe(le(n, `${t}.${a}`), window);
                                    return ie(r) ? (e.push(r.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    de = ne.Sw.instance;
                let me;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(me || (me = {}));
                const ge = (e = 'model', t = me.Deep) => {
                    const n = (0, c.useState)(0),
                        a = (n[0], n[1]),
                        r = (0, c.useMemo)(() => se(), []),
                        s = r.caller,
                        o = r.resId,
                        i = (0, c.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        l = (0, c.useState)(() =>
                            ((e) => {
                                const t = oe(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return ie(t) ? t.value : t;
                            })(ce(i)),
                        ),
                        u = l[0],
                        d = l[1],
                        m = (0, c.useRef)(-1);
                    return (
                        O(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? me.Deep : me.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== me.None)
                            ) {
                                const n = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === me.Deep
                                            ? (e === u && a((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    r = ue(e);
                                m.current = de.addCallback(r, n, o, t === me.Deep);
                            }
                        }),
                        (0, c.useEffect)(() => {
                            if (t !== me.None)
                                return () => {
                                    de.removeCallback(m.current, o);
                                };
                        }, [o, t]),
                        u
                    );
                };
                var _e = n(7030);
                const pe = 'Onboarding_base_56',
                    ve = 'Onboarding_header_61',
                    fe = 'Onboarding_center_c4',
                    he = 'Onboarding_closeBtn_61',
                    be = 'Onboarding_body_17',
                    Ee = 'Onboarding_overlayReveal_0a',
                    we = 'Onboarding_overlay_30',
                    ye = 'Onboarding_playBtnWrapper_84',
                    ke = 'Onboarding_playBtn_1e',
                    Ce = 'Onboarding_footer_d2',
                    Se = 'Onboarding_pagination_79',
                    Ne = 'Onboarding_paginationBtn_e6',
                    Te = 'Onboarding_selected_2d',
                    xe = 'Onboarding_replay_39',
                    Ie = 'Onboarding_replayIcon_f1',
                    Oe = 'Onboarding_overlayInnerWrapper_e7',
                    Re = 'Onboarding_overlayTitle_95',
                    Le = 'Onboarding_overlayText_7e',
                    De = {
                        slideOut: 'Reveal_slideOut_22',
                        slideIn: 'Reveal_slideIn_cb',
                        slideLeftOut: 'Reveal_slideLeftOut_d4',
                        slideLeftIn: 'Reveal_slideLeftIn_be',
                        slideRightOut: 'Reveal_slideRightOut_16',
                        slideRightIn: 'Reveal_slideRightIn_17',
                        fadeOut: 'Reveal_fadeOut_74',
                        fadeIn: 'Reveal_fadeIn_a3',
                        bg_fadeOut: 'Reveal_bg_fadeOut_a9',
                        fadeOutBlur: 'Reveal_fadeOutBlur_b1',
                        bg_fadeIn: 'Reveal_bg_fadeIn_bc',
                        fadeInBlur: 'Reveal_fadeInBlur_66',
                        fadeDownIn: 'Reveal_fadeDownIn_29',
                        fadeInUp: 'Reveal_fadeInUp_fe',
                        fadeDownOut: 'Reveal_fadeDownOut_8a',
                        fadeInDown: 'Reveal_fadeInDown_38',
                    },
                    Me = (0, c.memo)(
                        ({
                            children: e,
                            type: t = 'slide',
                            duration: n = 200,
                            className: a,
                            isOut: r = !1,
                            delayIn: s = '0ms',
                            delayOut: i = '0ms',
                            isDisabled: l = !1,
                            onAnimationComplete: d,
                        }) => {
                            const m = (0, c.useMemo)(
                                    () => ({ animationDelay: r ? i : s, animationDuration: `${n}ms` }),
                                    [r, s, i, n],
                                ),
                                g = o()(De[`${t}${r ? 'Out' : 'In'}`], a);
                            return l
                                ? u().createElement('div', { className: a }, e)
                                : u().createElement('div', { onAnimationEnd: d, className: g, style: m }, e);
                        },
                    );
                var Ae;
                !(function (e) {
                    (e[(e.First = 0)] = 'First'), (e[(e.Second = 1)] = 'Second');
                })(Ae || (Ae = {}));
                const Pe = R.strings.dogtags.onboarding.header.title(),
                    Be = R.strings.dogtags.onboarding.header.close(),
                    He = R.strings.dogtags.onboarding.overlay.pagination.first(),
                    We = R.strings.dogtags.onboarding.overlay.pagination.second(),
                    $e = R.strings.dogtags.onboarding.overlay.replay(),
                    ze = (0, c.memo)(({ onClose: e }) => {
                        const t = ge('model', me.None).onPlayVideo,
                            n = (0, c.useState)(!1),
                            a = n[0],
                            r = n[1],
                            s = (0, c.useState)(!1),
                            l = s[0],
                            d = s[1],
                            m = (0, c.useState)(Ae.First),
                            g = m[0],
                            _ = m[1],
                            v = (e) => () => (i(R.sounds.play()), _(e)),
                            f = (0, c.useCallback)((t) => (g === Ae.First ? _(Ae.Second) : e(t)), [g, e]),
                            h = (0, c.useCallback)(
                                () => (
                                    i(R.sounds.play()),
                                    g === Ae.First
                                        ? (setTimeout(() => r(!0), 500), t({ urlKey: 'onboardingVideo1' }))
                                        : (setTimeout(() => d(!0), 500), t({ urlKey: 'onboardingVideo2' }))
                                ),
                                [g, t],
                            ),
                            b = (0, c.useCallback)(() => i(R.sounds.highlight()), []),
                            E = ((w = a),
                            (y = l),
                            {
                                [Ae.First]: {
                                    title: w
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.title()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.title(),
                                    text: w
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.text()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.text(),
                                    button: R.strings.dogtags.onboarding.overlay.button.next(),
                                    background: R.images.gui.maps.icons.dogtags.icons.onboarding_bg_1(),
                                },
                                [Ae.Second]: {
                                    title: y
                                        ? R.strings.dogtags.onboarding.overlay.second.postVideo.title()
                                        : R.strings.dogtags.onboarding.overlay.second.preVideo.title(),
                                    text: y
                                        ? R.strings.dogtags.onboarding.overlay.second.postVideo.text()
                                        : R.strings.dogtags.onboarding.overlay.second.preVideo.text(),
                                    button: R.strings.dogtags.onboarding.overlay.button.affirmative(),
                                    background: R.images.gui.maps.icons.dogtags.icons.onboarding_bg_2(),
                                },
                            })[g];
                        var w, y;
                        const k = ((e) => ({ backgroundImage: `url(${e.background})` }))(E),
                            C = o()(Ne, g === Ae.First && Te),
                            S = o()(Ne, g === Ae.Second && Te);
                        return u().createElement(
                            'div',
                            { className: pe },
                            u().createElement(
                                'div',
                                { className: ve },
                                u().createElement('div', { className: fe }, Pe),
                                u().createElement(
                                    'div',
                                    { className: he },
                                    u().createElement(J, {
                                        caption: Be,
                                        type: 'close',
                                        side: 'right',
                                        onClick: e,
                                        onMouseEnter: b,
                                    }),
                                ),
                            ),
                            u().createElement(
                                'div',
                                { className: be, style: k },
                                u().createElement(
                                    Me,
                                    { type: 'fade', className: Ee },
                                    u().createElement(
                                        'div',
                                        { className: we },
                                        ((!a && g === Ae.First) || (!l && g === Ae.Second)) &&
                                            u().createElement(
                                                'div',
                                                { className: ye, onClick: h, onMouseEnter: b },
                                                u().createElement('div', { className: ke }),
                                            ),
                                        u().createElement(
                                            'div',
                                            { className: Oe },
                                            u().createElement('div', { className: Re }, E.title),
                                            u().createElement('div', { className: Le }, E.text),
                                            ((g === Ae.First && a) || (g === Ae.Second && l)) &&
                                                u().createElement(
                                                    p,
                                                    { type: 'main', size: 'medium', onClick: f, onMouseEnter: b },
                                                    E.button,
                                                ),
                                        ),
                                    ),
                                ),
                            ),
                            u().createElement(
                                'div',
                                { className: Ce },
                                ((g === Ae.First && a) || (g === Ae.Second && l)) &&
                                    u().createElement(
                                        'div',
                                        { className: xe, onClick: h, onMouseEnter: b },
                                        u().createElement('div', { className: Ie }),
                                        $e,
                                    ),
                                u().createElement(
                                    'div',
                                    { className: Se },
                                    u().createElement(
                                        'div',
                                        { className: C, onClick: v(Ae.First), onMouseEnter: b },
                                        He,
                                    ),
                                    u().createElement(
                                        'div',
                                        { className: S, onClick: v(Ae.Second), onMouseEnter: b },
                                        We,
                                    ),
                                ),
                            ),
                        );
                    });
                var Fe = n(8664);
                const je = 'Flame_base_90',
                    Ge = 'Flame_slides_58',
                    Ve = 'Flame_frame_29',
                    Ue = (0, c.memo)(({ className: e }) => {
                        const t = (() => {
                            const e = R.images.gui.maps.icons.dogtags.icons.flame;
                            return Array(42)
                                .fill(null)
                                .map((t, n) => {
                                    const a = `flame_${`0${n}`.slice(-2)}`;
                                    return a in e ? e[a]() : e.flame_00();
                                });
                        })();
                        return u().createElement(
                            'div',
                            { className: o()(je, e), 'data-testid': 'Flame' },
                            u().createElement(
                                'div',
                                { className: Ge },
                                t.map((e) => u().createElement('img', { key: e, src: e, className: Ve })),
                            ),
                        );
                    });
                let qe, Ke, Ye, Xe, Ze;
                !(function (e) {
                    (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                })(qe || (qe = {})),
                    (function (e) {
                        (e[(e.Equipped = 0)] = 'Equipped'), (e[(e.Locked = 1)] = 'Locked'), (e[(e.Open = 2)] = 'Open');
                    })(Ke || (Ke = {})),
                    (function (e) {
                        (e.Engraving = 'engraving'), (e.Background = 'background'), (e.All = 'all');
                    })(Ye || (Ye = {})),
                    (function (e) {
                        (e.Dedication = 'dedication'),
                            (e.Skill = 'skill'),
                            (e.RankedSkill = 'ranked_skill'),
                            (e.Triumph = 'triumph'),
                            (e.Medal = 'triumph_medal'),
                            (e.Base = 'base');
                    })(Xe || (Xe = {})),
                    (function (e) {
                        (e.Dedication = 'dedication'), (e.Triumph = 'triumph'), (e.Season = 'season');
                    })(Ze || (Ze = {}));
                const Qe = {
                        [Ze.Dedication]: [Xe.Dedication],
                        [Ze.Triumph]: [Xe.Triumph],
                        [Ze.Season]: [Xe.Skill, Xe.RankedSkill],
                    },
                    Je = 10;
                let et;
                function tt(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return nt(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return nt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function nt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                !(function (e) {
                    (e.NUMBER = 'NUMBER'), (e.PERCENTAGE = 'PERCENTAGE');
                })(et || (et = {}));
                const at = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                    rt = (e, t) => {
                        const n = e.id;
                        return n === t.background.id || n === t.engraving.id;
                    },
                    st = R.images.gui.maps.icons.dogtags,
                    ot = 'R.images.gui.maps.icons.dogtags',
                    it = R.strings.dogtags.component,
                    lt = 'R.strings.dogtags.component',
                    ct = (e, t, n, a = 0, r = 'big', s = st, o = it) => {
                        s &&
                            !(r in s) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${r}" does not exist in ${ot}`,
                            );
                        const i = r in s ? s[r] : void 0,
                            l = `${t}s`;
                        i &&
                            !(l in i) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${l}" does not exist in ${[ot, r].join('.')}`,
                            );
                        const c = i && l in i ? i[l] : void 0,
                            u = `${t}_${e}_${t === Ye.Engraving ? a : '0'}`;
                        c &&
                            !(u in c) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${u}" does not exist in ${[ot, r, l].join('.')}`,
                            );
                        const d = c && u in c ? c[u]() : s.big.backgrounds.background_66_0();
                        o &&
                            !(t in o) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${t}" does not exist in ${lt}`,
                            );
                        const m = t in o ? o[t] : void 0;
                        m &&
                            !(n in m) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${n}" does not exist in ${[lt, t].join('.')}`,
                            );
                        const g = m && n in m ? m[n] : void 0,
                            _ = `c_${e}`;
                        g &&
                            !(_ in g) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${_}" does not exist in ${[lt, t, n].join('.')}`,
                            );
                        return { image: d, strings: g && _ in g ? g[_] : void 0 };
                    },
                    ut = (e) => e.filter((e) => e.value.items.length > 0),
                    dt = (e, t) => {
                        const n = ((e) => Object.keys(e).filter((t) => e[t]))(t),
                            a = n.reduce((e, t) => (e.push(...Qe[t]), e), []);
                        return ut(
                            e.map((e) => ({
                                value: Object.assign({}, e.value, {
                                    items: e.value.items.filter((e) => a.includes(e.value.purpose)),
                                }),
                            })),
                        );
                    },
                    mt = { [qe.Engraving]: 'engravingGrid', [qe.Background]: 'backgroundGrid' },
                    gt = { [qe.Engraving]: 'engraving', [qe.Background]: 'background' },
                    _t = (e, t) => {
                        for (var n, a = tt(e.values()); !(n = a()).done; ) {
                            for (var r, s = tt(n.value.value.items.values()); !(r = s()).done; ) {
                                const e = r.value;
                                if (e.value.id === t) return e.value;
                            }
                        }
                    },
                    pt = (e) => e.reduce((e, t) => e + t.value.items.length, 0),
                    vt = (e, t = et.NUMBER) => {
                        const n = ne.Z5.getRealFormat(e, ne.Gr.WO_ZERO_DIGITS).replace(/\s/g, ' ');
                        return t === et.PERCENTAGE ? `${n} %` : n;
                    },
                    ft = {
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
                    },
                    ht = R.images.gui.maps.icons.dogtags.big.digits,
                    bt = (e, t = ht) => {
                        const n = `c_${e}`;
                        return n in t
                            ? t[n]()
                            : e in t
                              ? t[e]()
                              : void (
                                    'invalidTestDigit' !== e &&
                                    console.error(
                                        `getDigitUri error at digit: ${e}. No properties "${n}" nor "${e}" exist in R.images.gui.maps.icons.dogtags.big.digits`,
                                    )
                                );
                    },
                    Et = (e) => ({ backgroundImage: `url(${e})` });
                let wt;
                !(function (e) {
                    (e.x300 = 'x300'), (e.x400 = 'x400');
                })(wt || (wt = {}));
                const yt = R.images.gui.maps.icons.dogtags.big.digits;
                Object.keys(Object.getPrototypeOf(yt))
                    .filter((e) => '$' !== e[0])
                    .map((e) => yt[e]())
                    .map((e) => {
                        new Image().src = e;
                    });
                const kt = (e) => {
                        const t = e.currentTarget.width / e.currentTarget.height;
                        (e.currentTarget.style.width = 16 * t + '%'), (e.currentTarget.style.display = 'flex');
                    },
                    Ct = {
                        appear: ft.flameAnimation__appear,
                        appearActive: ft.flameAnimation__appearActive,
                        appearDone: ft.flameAnimation__appearDone,
                        enter: ft.flameAnimation__enter,
                        enterActive: ft.flameAnimation__enterActive,
                        enterDone: ft.flameAnimation__enterDone,
                        exit: ft.flameAnimation__exit,
                        exitActive: ft.flameAnimation__exitActive,
                        exitDone: ft.flameAnimation__exitDone,
                    },
                    St = ({
                        playerName: e,
                        clanTag: t,
                        background: n,
                        engraving: a,
                        isHighlighted: r,
                        size: s = wt.x300,
                    }) => {
                        const l = n.currentGrade,
                            d = a.currentGrade,
                            m = ct(n.id, Ye.Background, n.purpose || 'default', l || 0, 'big'),
                            g = ct(a.id, Ye.Engraving, a.purpose || 'dedication', d || 0, 'big'),
                            _ = a.displayableProgress.split(/\[|\]/).reduce((e, t, n) => {
                                const a = n % 2 == 1;
                                return e.push(...(a ? [t] : t.split(''))), e;
                            }, []);
                        const p = g.strings ? g.strings.title() : null,
                            v = Et(m.image),
                            f = Et(g.image),
                            h = ((e) => {
                                const t = (0, c.useRef)(!1);
                                return (
                                    (0, c.useEffect)(() => {
                                        t.current = e;
                                    }),
                                    t.current
                                );
                            })(r);
                        return (
                            (0, c.useEffect)(() => {
                                r && !h ? i(R.sounds.dt_flame_start()) : h && !r && i(R.sounds.dt_flame_stop());
                            }, [r, h]),
                            u().createElement(
                                'div',
                                { className: o()(ft.base, ft[`base__${s}`]) },
                                u().createElement(
                                    Fe.Z,
                                    {
                                        in: r,
                                        timeout: 400,
                                        className: ft.flameAnimation,
                                        classNames: Ct,
                                        mountOnEnter: !0,
                                        unmountOnExit: !0,
                                        appear: !0,
                                    },
                                    u().createElement(Ue, null),
                                ),
                                u().createElement(
                                    'div',
                                    { className: ft.dogtags_top },
                                    u().createElement('div', { className: ft.background, style: v }),
                                    u().createElement('div', { className: ft.shadow }),
                                    u().createElement('div', { className: ft.playerInfoShadow }),
                                    u().createElement('div', { className: ft.name }, e),
                                    u().createElement('div', { className: ft.clan }, t),
                                    u().createElement('div', { className: ft.engraving, style: f }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: ft.dogtags_bottom },
                                    u().createElement(
                                        'div',
                                        { className: ft.trackerInfoWrapper },
                                        u().createElement('div', { className: ft.trackerText }, p),
                                        u().createElement(
                                            'div',
                                            { className: ft.trackerValue },
                                            _.map((e, t) => {
                                                if (' ' === e)
                                                    return u().createElement('div', {
                                                        key: e + t,
                                                        className: ft.spaceDigit,
                                                    });
                                                const n = bt(e, yt);
                                                return u().createElement('img', {
                                                    key: `${n}-${t}`,
                                                    onLoad: kt,
                                                    className: ft.trackerDigit,
                                                    src: n,
                                                });
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    Nt = {
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
                        easeOutBack(e) {
                            const t = 1.70158;
                            return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                        },
                        bezier: (e, t, n, a) => (r) =>
                            (1 - r) * (1 - r) * (1 - r) * e +
                            3 * (1 - r) * (1 - r) * r * t +
                            3 * (1 - r) * r * r * n +
                            r * r * r * a,
                    };
                let Tt;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(Tt || (Tt = {}));
                let xt;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(xt || (xt = {}));
                const It = 'metrics',
                    Ot = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    Rt = (e, t) => {
                        const n = (0, c.useCallback)(
                            (n, a = Tt.Info, r) => {
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
                    },
                    Lt = (e) => {
                        const t = Rt(e, It),
                            n = (0, c.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, Ot(e));
                                },
                                [t],
                            );
                        return (e) => n(e);
                    },
                    Dt = 'dog_tags';
                let Mt, At, Pt, Bt;
                !(function (e) {
                    (e.Click = 'click'), (e.Display = 'display');
                })(Mt || (Mt = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.DogTags = 'dog_tag_view'),
                            (e.AccountDashboard = 'account_dashboard'),
                            (e.AnimatedDogTag = 'animated_dog_tag'),
                            (e.ConfirmDialog = 'confirm_dialog');
                    })(At || (At = {})),
                    (function (e) {
                        (e.DiscardChanges = 'discard_change_button'),
                            (e.CancelEngraving = 'cancel_engraving_button'),
                            (e.CancelBackground = 'cancel_background_button'),
                            (e.SliderItem = 'slider_item'),
                            (e.ConfirmDogTag = 'confirm_dog_tag_button'),
                            (e.DiscardDogTag = 'discard_dog_tag_button'),
                            (e.ConfirmChanges = 'confirm_button');
                    })(Pt || (Pt = {})),
                    (function (e) {
                        (e.Lock = 'lock'), (e.Unlock = 'unlock');
                    })(Bt || (Bt = {}));
                const Ht = { engraving: Pt.CancelEngraving, background: Pt.CancelBackground, all: Pt.DiscardChanges },
                    Wt = () => {
                        const e = Lt(Dt);
                        return (t) => {
                            e({ action: Mt.Click, parentScreen: At.DogTags, item: Ht[t] });
                        };
                    },
                    $t = {
                        base: 'Customization_base_4e',
                        status: 'Customization_status_c1',
                        checkIcon: 'Customization_checkIcon_bf',
                        allEquipped: 'Customization_allEquipped_ed',
                        buttonsWrapper: 'Customization_buttonsWrapper_6d',
                        buttonWrapper: 'Customization_buttonWrapper_c3',
                        button: 'Customization_button_c3',
                    },
                    zt = ({ text: e, isEquippingDisabled: t, onEquip: n, classNames: a }) =>
                        u().createElement(
                            'div',
                            { className: null == a ? void 0 : a.base },
                            u().createElement(
                                p,
                                {
                                    type: m.primary,
                                    size: g.medium,
                                    mixClass: null == a ? void 0 : a.button,
                                    onClick: () => {
                                        t || (n(), i(R.sounds.ach_dog_tag_equip()));
                                    },
                                    disabled: t,
                                },
                                e,
                            ),
                        ),
                    Ft = 'Selection_base_7b',
                    jt = 'Selection_selection_24',
                    Gt = 'Selection_resetBtn_1b',
                    Vt = R.strings.dogtags.customization,
                    Ut = ({ selectedItems: e, isBackgroundEquipped: t, isEngravingEquipped: n, onItemReset: a }) => {
                        const r = Wt(),
                            s = (e) => () => {
                                i(R.sounds.dt_locked_reset_button()), a(e), r(e);
                            };
                        return u().createElement(
                            'div',
                            { className: Ft },
                            !t &&
                                e.background.isLocked &&
                                u().createElement(
                                    'div',
                                    { className: jt, onClick: s(Ye.Background), onMouseEnter: l.playHighlight },
                                    Vt.pills.background(),
                                    u().createElement('div', { className: Gt }),
                                ),
                            !n &&
                                e.engraving.isLocked &&
                                u().createElement(
                                    'div',
                                    { className: jt, onClick: s(Ye.Engraving), onMouseEnter: l.playHighlight },
                                    Vt.pills.engraving(),
                                    u().createElement('div', { className: Gt }),
                                ),
                        );
                    },
                    qt = R.strings.dogtags.customization;
                let Kt;
                !(function (e) {
                    (e.Equipped = 'equipped'), (e.Unequipped = 'unequipped'), (e.AnimatedEquipped = 'animatedEquipped');
                })(Kt || (Kt = {}));
                const Yt = { base: $t.buttonWrapper, button: $t.button },
                    Xt = (0, c.memo)(
                        ({
                            selectedItems: e,
                            equippedItems: t,
                            onItemReset: n,
                            isAnimatedDogTagSelected: a,
                            onEquip: r,
                        }) => {
                            const s = e.engraving.id === t.engraving.id,
                                i = e.background.id === t.background.id,
                                l = ((e, t, n) => {
                                    switch (!0) {
                                        case e:
                                            return Kt.AnimatedEquipped;
                                        case t && n:
                                            return Kt.Equipped;
                                        default:
                                            return Kt.Unequipped;
                                    }
                                })(a, i, s),
                                c = (0, _e.useTransition)(l, {
                                    initial: { transform: 'translateY(0rem)', opacity: 1 },
                                    from: { transform: 'translateY(-20rem)', opacity: 0 },
                                    enter: { transform: 'translateY(0rem)', opacity: 1 },
                                    leave: { transform: 'translateY(20rem)', opacity: 0 },
                                    config: { duration: 300, easing: Nt.easeOutCubic },
                                }),
                                d = H().mediaSize >= A.Large ? g.medium : g.small,
                                _ = Wt(),
                                v = (() => {
                                    const e = Lt(Dt);
                                    return () => {
                                        e({ action: Mt.Click, parentScreen: At.DogTags, item: Pt.ConfirmChanges });
                                    };
                                })(),
                                f = () => {
                                    n(Ye.Background), n(Ye.Engraving), _(Ye.All);
                                },
                                h = () => {
                                    v(), r();
                                },
                                b = e.engraving.isLocked || e.background.isLocked;
                            return u().createElement(
                                'div',
                                { className: o()($t.base, $t[`base__${l}`]) },
                                c((t, a) =>
                                    u().createElement(
                                        _e.animated.div,
                                        { className: $t.status, style: t },
                                        (() => {
                                            switch (a) {
                                                case Kt.AnimatedEquipped:
                                                    return u().createElement(
                                                        u().Fragment,
                                                        null,
                                                        u().createElement(zt, {
                                                            text: qt.button.equip(),
                                                            isEquippingDisabled: b,
                                                            onEquip: h,
                                                            classNames: Yt,
                                                        }),
                                                        u().createElement(Ut, {
                                                            selectedItems: e,
                                                            isBackgroundEquipped: i,
                                                            isEngravingEquipped: s,
                                                            onItemReset: n,
                                                        }),
                                                    );
                                                case Kt.Equipped:
                                                    return u().createElement(
                                                        'div',
                                                        { className: $t.allEquipped },
                                                        u().createElement('div', { className: $t.checkIcon }),
                                                        qt.equipped(),
                                                    );
                                                case Kt.Unequipped:
                                                    return u().createElement(
                                                        u().Fragment,
                                                        null,
                                                        u().createElement(
                                                            'div',
                                                            { className: $t.buttonsWrapper },
                                                            u().createElement(zt, {
                                                                text: qt.button.equipNew(),
                                                                isEquippingDisabled: b,
                                                                onEquip: h,
                                                                classNames: Yt,
                                                            }),
                                                            u().createElement(
                                                                'div',
                                                                { className: $t.buttonWrapper },
                                                                u().createElement(
                                                                    p,
                                                                    {
                                                                        type: m.secondary,
                                                                        size: d,
                                                                        onClick: f,
                                                                        mixClass: $t.button,
                                                                    },
                                                                    qt.button.discard(),
                                                                ),
                                                            ),
                                                        ),
                                                        u().createElement(Ut, {
                                                            selectedItems: e,
                                                            isBackgroundEquipped: i,
                                                            isEngravingEquipped: s,
                                                            onItemReset: n,
                                                        }),
                                                    );
                                            }
                                        })(),
                                    ),
                                ),
                            );
                        },
                    ),
                    Zt = 'DogtagsInfo_base_68',
                    Qt = 'DogtagsInfo_title_02',
                    Jt = 'DogtagsInfo_progressBarWrapper_48',
                    en = 'DogtagsInfo_currentLevel_14',
                    tn = 'DogtagsInfo_nextLevel_53',
                    nn = 'DogtagsInfo_valuesWrapper_ac',
                    an = 'DogtagsInfo_valuesWrapper_inner_55',
                    rn = 'DogtagsInfo_valuesWrapper__locked_59',
                    sn = 'DogtagsInfo_currentValue_25',
                    on = 'DogtagsInfo_totalValue_47',
                    ln = 'DogtagsInfo_valuesSeparator_db',
                    cn = 'DogtagsInfo_medalInfo_0d',
                    un = 'DogtagsInfo_skillInfo_13',
                    dn = 'DogtagsInfo_skillInfoIcon_f9',
                    mn = 'DogtagsInfo_shieldLevelWrapper_fa',
                    gn = 'DogtagsInfo_single_86',
                    _n = 'DogtagsInfo_currentShieldWrapper_b0',
                    pn = 'DogtagsInfo_nextShieldWrapper_7e',
                    vn = 'DogtagsInfo_currentLevelShield_60',
                    fn = 'DogtagsInfo_currentLevelValue_d5',
                    hn = 'DogtagsInfo_nextLevelValue_d5',
                    bn = 'DogtagsInfo_arrowLock_6a',
                    En = 'DogtagsInfo_nextLevelShield_22',
                    wn = 'DogtagsInfo_infoSeparator_d7',
                    yn = 'DogtagsInfo_lockedText_9d',
                    kn = 'DogtagsInfo_lockedIcon_04',
                    Cn = 'DogtagsInfo_skillDescriptionWrapper_dc',
                    Sn = 'DogtagsInfo_skillDescription_94',
                    Nn = 'DogtagsInfo_skillInfoBorderTop_62',
                    Tn = 'DogtagsInfo_skillInfoBorderBottom_50',
                    xn = (0, c.memo)(({ infoTitle: e, infoText: t, isLocked: n, unlockText: a }) =>
                        u().createElement(
                            'div',
                            { className: Zt },
                            u().createElement('div', { className: Qt }, e),
                            u().createElement('div', { className: cn }, t),
                            n &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: wn }),
                                    u().createElement(
                                        'div',
                                        { className: yn },
                                        u().createElement('div', { className: kn }),
                                        a,
                                    ),
                                ),
                        ),
                    ),
                    In = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let On, Rn;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(On || (On = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Rn || (Rn = {}));
                const Ln = ({ size: e = On.Default }) => {
                        const t = o()(In.background, In[`background__${e}`]);
                        return u().createElement('div', { className: t });
                    },
                    Dn = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Mn = ({ size: e }) => {
                        const t = o()(Dn.base, Dn[`base__${e}`]);
                        return u().createElement('div', { className: t });
                    },
                    An = {
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
                    Pn = (0, c.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: a, isComplete: r, withoutBounce: s }) => {
                            const i = o()(
                                    An.base,
                                    An[`base__${e}`],
                                    n && An.base__disabled,
                                    r && An.base__finished,
                                    s && An.base__withoutBounce,
                                ),
                                l = !n && !r;
                            return u().createElement(
                                'div',
                                { className: i, style: a, ref: t },
                                u().createElement('div', { className: An.pattern }),
                                u().createElement('div', { className: An.gradient }),
                                l && u().createElement(Mn, { size: e }),
                            );
                        },
                    ),
                    Bn = ({ size: e, value: t, lineRef: n, disabled: a, onComplete: r }) => {
                        const s = (0, c.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, c.useEffect)(() => {
                                o && r && r();
                            }, [o, r]),
                            u().createElement(Pn, { size: e, disabled: a, baseStyles: s, isComplete: o, lineRef: n })
                        );
                    };
                let Hn, Wn;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Hn || (Hn = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Wn || (Wn = {}));
                const $n = 'ProgressBarDeltaSimple_base_6c',
                    zn = 'ProgressBarDeltaSimple_delta_99',
                    Fn = (0, c.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: r,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                        }) => {
                            const l = s < a,
                                d = (0, c.useState)(Wn.Idle),
                                m = d[0],
                                g = d[1],
                                _ = m === Wn.In,
                                p = m === Wn.End,
                                v = m === Wn.Idle,
                                f = (0, c.useCallback)(
                                    (e) => {
                                        g(e), i && i(e);
                                    },
                                    [i],
                                );
                            (0, c.useEffect)(() => {
                                if (v && !n) {
                                    return ee(() => {
                                        f(Wn.In);
                                    }, t);
                                }
                            }, [f, n, v, t]),
                                (0, c.useEffect)(() => {
                                    if (_) {
                                        return ee(() => {
                                            o && o(), f(Wn.End);
                                        }, e + t);
                                    }
                                }, [f, _, o, t, e]);
                            const h = (0, c.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, t, e],
                                ),
                                b = (0, c.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, t, e],
                                ),
                                E = (0, c.useMemo)(
                                    () => ({ width: `${Math.abs(a - s)}%`, left: `${l ? s : a}%` }),
                                    [a, l, s],
                                );
                            return p
                                ? null
                                : u().createElement(
                                      'div',
                                      { className: $n, style: E },
                                      u().createElement(
                                          'div',
                                          { style: v ? h : b, className: zn },
                                          u().createElement(Mn, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    jn = (0, c.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: r,
                            isComplete: s,
                            animationSettings: o,
                            onChangeAnimationState: i,
                            onEndAnimation: l,
                        }) => {
                            const d = (0, c.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return u().createElement(
                                u().Fragment,
                                null,
                                u().createElement(Pn, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: s,
                                    baseStyles: d,
                                }),
                                n >= 0 &&
                                    u().createElement(Fn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: i,
                                        onEndAnimation: l,
                                    }),
                            );
                        },
                    ),
                    Gn = 'ProgressBarDeltaGrow_base_7e',
                    Vn = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Un = 'ProgressBarDeltaGrow_glow_68',
                    qn = (e) => (e ? { left: 0 } : { right: 0 }),
                    Kn = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Yn = (e) => ({ transitionDuration: `${e}ms` }),
                    Xn = (0, c.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: r,
                            to: s,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: d,
                        }) => {
                            const m = s < a,
                                g = (0, c.useState)(Hn.Idle),
                                _ = g[0],
                                p = g[1],
                                v = _ === Hn.End,
                                f = _ === Hn.Idle,
                                h = _ === Hn.Grow,
                                b = _ === Hn.Shrink,
                                E = (0, c.useCallback)(
                                    (e) => {
                                        p(e), l && l(e);
                                    },
                                    [l],
                                ),
                                w = (0, c.useCallback)(
                                    (e, t) =>
                                        ee(() => {
                                            E(e);
                                        }, t),
                                    [E],
                                );
                            (0, c.useEffect)(() => {
                                if (!n)
                                    return f
                                        ? w(Hn.Grow, t)
                                        : h
                                          ? w(Hn.Shrink, e)
                                          : b
                                            ? w(Hn.End, e)
                                            : void (v && i && i());
                            }, [w, n, v, h, f, b, i, t, e]);
                            const y = (0, c.useMemo)(() => Object.assign({ width: '100%' }, Yn(e), qn(m)), [m, e]),
                                k = (0, c.useMemo)(() => Object.assign({ width: '0%' }, Yn(e), qn(m)), [m, e]),
                                C = (0, c.useMemo)(() => Object.assign({ width: '0%' }, Kn(m, a), Yn(e)), [a, m, e]),
                                S = (0, c.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - a)}%` }, Kn(m, a), Yn(e)),
                                    [a, m, s, e],
                                );
                            if (v) return null;
                            const N = o()(Gn, d, m && 0 === s && Vn);
                            return u().createElement(
                                'div',
                                { style: f ? C : S, className: N },
                                u().createElement(
                                    'div',
                                    { style: b ? k : y, className: Un },
                                    u().createElement(Mn, { size: r }),
                                ),
                            );
                        },
                    ),
                    Zn = (0, c.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: r,
                            isComplete: s,
                            animationSettings: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const d = e < n,
                                m = (0, c.useState)(!1),
                                g = m[0],
                                _ = m[1],
                                p = (0, c.useCallback)(
                                    (e) => {
                                        e === Hn.Shrink && _(!0), l && l(e);
                                    },
                                    [l],
                                ),
                                v = (0, c.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                f = (0, c.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return u().createElement(
                                u().Fragment,
                                null,
                                u().createElement(Pn, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: s,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: g ? f : v,
                                }),
                                n >= 0 &&
                                    u().createElement(Xn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: p,
                                        freezed: o.freezed,
                                        onEndAnimation: i,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    Qn = ['onComplete', 'onEndAnimation'];
                function Jn() {
                    return (
                        (Jn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Jn.apply(this, arguments)
                    );
                }
                const ea = (0, c.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Qn);
                        const r = (0, c.useState)(!1),
                            s = r[0],
                            o = r[1],
                            i = (0, c.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== s && o(e), e && t && t(), n && n();
                            }, [s, t, n, a.to]);
                        switch (a.animationSettings.type) {
                            case Rn.Simple:
                                return u().createElement(jn, Jn({}, a, { onEndAnimation: i, isComplete: s }));
                            case Rn.Growing:
                                return u().createElement(Zn, Jn({}, a, { onEndAnimation: i, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    ta = ['onEndAnimation'];
                function na() {
                    return (
                        (na =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        na.apply(this, arguments)
                    );
                }
                const aa = (0, c.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, ta);
                    const a = (0, c.useRef)({}),
                        r = (0, c.useCallback)(() => {
                            (a.current.from = void 0), t && t();
                        }, [t]),
                        s = 'number' == typeof a.current.from ? a.current.from : n.from;
                    return (
                        (a.current.from = s),
                        u().createElement(ea, na({}, n, { onEndAnimation: r, key: `${s}-${n.to}`, from: s }))
                    );
                });
                function ra() {
                    return (
                        (ra =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ra.apply(this, arguments)
                    );
                }
                const sa = (0, c.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: a,
                            deltaFrom: r,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (r === t)
                                return u().createElement(Bn, {
                                    key: `${r}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: t,
                                size: e,
                                lineRef: n,
                                disabled: a,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? u().createElement(aa, c)
                                : u().createElement(ea, ra({ key: `${r}-${t}` }, c));
                        },
                    ),
                    oa = (e) => ({
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
                    ia = (e, t, n) => (n < e ? e : n > t ? t : n),
                    la = (e, t, n) => {
                        if ('number' == typeof n) {
                            return (ia(0, t, n) / t) * 100;
                        }
                        return e;
                    },
                    ca = {
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
                    ua = {
                        freezed: !1,
                        withStack: !1,
                        type: Rn.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    da = (0, c.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = ca,
                            size: n = On.Default,
                            animationSettings: a = ua,
                            disabled: r = !1,
                            withoutBackground: s = !1,
                            value: i,
                            deltaFrom: l,
                            lineRef: d,
                            onChangeAnimationState: m,
                            onEndAnimation: g,
                            onComplete: _,
                        }) => {
                            const p = ((e, t, n) =>
                                (0, c.useMemo)(() => {
                                    const a = (ia(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: la(a, t, n) };
                                }, [n, t, e]))(i, e, l);
                            return u().createElement(
                                'div',
                                { className: o()(In.base, In[`base__${n}`]), style: oa(t) },
                                !s && u().createElement(Ln, { size: n }),
                                u().createElement(sa, {
                                    size: n,
                                    lineRef: d,
                                    disabled: r,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: g,
                                    onChangeAnimationState: m,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    ma = [
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
                function ga(e) {
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
                const _a = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ne.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    pa = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            u = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            g = e.decoratorId,
                            _ = void 0 === g ? 0 : g,
                            p = e.isEnabled,
                            v = void 0 === p || p,
                            f = e.targetId,
                            h = void 0 === f ? 0 : f,
                            b = e.onShow,
                            E = e.onHide,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, ma);
                        const y = (0, c.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, c.useMemo)(() => h || se().resId, [h]),
                            C = (0, c.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (_a(n, _, { isMouseEvent: !0, on: !0, arguments: ga(a) }, k),
                                    b && b(),
                                    (y.current.isVisible = !0));
                            }, [n, _, a, k, b]),
                            S = (0, c.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        _a(n, _, { on: !1 }, k),
                                        y.current.isVisible && E && E(),
                                        (y.current.isVisible = !1);
                                }
                            }, [n, _, k, E]),
                            N = (0, c.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, c.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', N, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', N, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, c.useEffect)(() => {
                                !1 === v && S();
                            }, [v, S]),
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return v
                            ? (0, c.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(C, u ? 100 : 400)),
                                                      r && r(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && S(), null == i || i(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && S(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : t;
                        var T;
                    },
                    va = R.strings.dogtags.customization,
                    fa = (0, c.memo)(
                        ({
                            id: e,
                            infoTitle: t,
                            infoText: n,
                            isLocked: a,
                            currentGrade: r,
                            currentProgress: s,
                            currentGradeValue: i,
                            nextGradeValue: l,
                            unlockText: d,
                            progressNumberType: m,
                            isExternalUnlockOnly: g,
                        }) => {
                            const _ = r + 1,
                                p = (0, c.useMemo)(() => ({ componentId: e }), [e]),
                                v = g && !a;
                            return u().createElement(
                                'div',
                                { className: Zt },
                                u().createElement('div', { className: Qt }, t),
                                u().createElement('div', { className: un }, n),
                                a &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: wn }),
                                        u().createElement(
                                            'div',
                                            { className: yn },
                                            u().createElement('div', { className: kn }),
                                            d,
                                        ),
                                    ),
                                u().createElement(
                                    pa,
                                    {
                                        contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                        isEnabled: !a,
                                        args: p,
                                    },
                                    u().createElement(
                                        'div',
                                        null,
                                        (!g || v) &&
                                            u().createElement(
                                                'div',
                                                { className: an },
                                                u().createElement('div', { className: sn }, vt(s)),
                                                _ < Je &&
                                                    u().createElement(
                                                        u().Fragment,
                                                        null,
                                                        u().createElement('div', { className: ln }, '/'),
                                                        u().createElement('div', { className: on }, vt(a ? i : l, m)),
                                                    ),
                                            ),
                                        !a &&
                                            u().createElement(
                                                'div',
                                                { className: Jt },
                                                u().createElement(da, {
                                                    size: On.Medium,
                                                    value: s - i,
                                                    maxValue: l - i,
                                                    animationSettings: ua,
                                                }),
                                            ),
                                        u().createElement(
                                            'div',
                                            { className: o()(nn, a && rn) },
                                            !a &&
                                                u().createElement(
                                                    'div',
                                                    { className: en },
                                                    `${va.currentLevel()} ${at[r]}`,
                                                ),
                                            !a && _ < Je && u().createElement('div', { className: tn }, at[r + 1]),
                                            !a && _ === Je && u().createElement('div', { className: tn }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    ha = (0, c.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: a,
                            currentGrade: r,
                            currentProgress: s,
                            nextGradeValue: i,
                            unlockText: l,
                            isDemoted: d,
                            progressNumberType: m,
                        }) => {
                            const g = R.images.gui.maps.icons.dogtags,
                                _ = r + 1,
                                p = r + 2,
                                v = g.level_shields[`Level_${_}`](),
                                f = (0, c.useMemo)(() => ({ backgroundImage: `url(${v})` }), [v]),
                                h = g.level_shields[`Level_gr_${p <= Je ? p : 1}`](),
                                b = (0, c.useMemo)(() => ({ backgroundImage: `url(${h})` }), [h]),
                                E = t || d,
                                w = o()(mn, _ === Je && gn),
                                y = (0, c.useMemo)(() => ({ componentId: e }), [e]);
                            return u().createElement(
                                'div',
                                { className: Zt },
                                u().createElement('div', { className: Qt }, n),
                                u().createElement('div', { className: un }, a),
                                !E &&
                                    u().createElement(
                                        pa,
                                        {
                                            contentId: R.views.lobby.dog_tags.ThreeMonthsTooltip('resId'),
                                            isEnabled: !0,
                                            args: y,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: Cn },
                                            u().createElement('div', { className: Nn }),
                                            u().createElement(
                                                'div',
                                                { className: Sn },
                                                R.strings.dogtags.customization.skill_info(),
                                                u().createElement('div', { className: dn }),
                                            ),
                                            u().createElement('div', { className: Tn }),
                                        ),
                                    ),
                                E &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: wn }),
                                        u().createElement(
                                            'div',
                                            { className: yn },
                                            u().createElement('div', { className: kn }),
                                            l,
                                        ),
                                    ),
                                !E &&
                                    u().createElement(
                                        pa,
                                        {
                                            contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                            isEnabled: !0,
                                            args: y,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: w },
                                            u().createElement(
                                                'div',
                                                { className: _n },
                                                u().createElement('div', { className: vn, style: f }),
                                                u().createElement('div', { className: fn }, vt(s, m)),
                                            ),
                                            _ < Je &&
                                                u().createElement(
                                                    u().Fragment,
                                                    null,
                                                    u().createElement('div', { className: bn }),
                                                    u().createElement(
                                                        'div',
                                                        { className: pn },
                                                        u().createElement('div', { className: En, style: b }),
                                                        u().createElement('div', { className: hn }, vt(i, m)),
                                                    ),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    ),
                    ba = R.images.gui.maps.icons.dogtags,
                    Ea = (0, c.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: a,
                            currentGrade: r,
                            currentProgress: s,
                            nextGradeValue: i,
                            unlockText: l,
                            progressNumberType: d,
                        }) => {
                            const m = r + 1,
                                g = r + 2,
                                _ = ba.level_shields[`Level_${m}`](),
                                p = (0, c.useMemo)(() => ({ backgroundImage: `url(${_})` }), [_]),
                                v = g < Je ? ba.level_shields[`Level_gr_${g}`]() : '',
                                f = (0, c.useMemo)(() => ({ backgroundImage: `url(${v})` }), [v]),
                                h = o()(mn, { [gn]: 4 === r }),
                                b = (0, c.useMemo)(() => ({ componentId: e }), [e]);
                            return u().createElement(
                                'div',
                                { className: Zt },
                                u().createElement('div', { className: Qt }, n),
                                u().createElement('div', { className: un }, a),
                                t &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: wn }),
                                        u().createElement(
                                            'div',
                                            { className: yn },
                                            u().createElement('div', { className: kn }),
                                            l,
                                        ),
                                    ),
                                !t &&
                                    u().createElement(
                                        pa,
                                        {
                                            contentId: R.views.lobby.dog_tags.TriumphTooltip('resId'),
                                            isEnabled: !0,
                                            args: b,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: h },
                                            u().createElement(
                                                'div',
                                                { className: _n },
                                                u().createElement('div', { className: vn, style: p }),
                                                u().createElement('div', { className: fn }, vt(s, d)),
                                            ),
                                            m < 4 && u().createElement('div', { className: bn }),
                                            m < 4 &&
                                                u().createElement(
                                                    'div',
                                                    { className: pn },
                                                    u().createElement('div', { className: En, style: f }),
                                                    u().createElement('div', { className: hn }, vt(i, d)),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    ),
                    wa = R.images.gui.maps.icons.dogtags,
                    ya = (0, c.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: a,
                            currentGrade: r,
                            currentProgress: s,
                            nextGradeValue: i,
                            unlockText: l,
                            isDemoted: d,
                            progressNumberType: m,
                        }) => {
                            const g = r + 1,
                                _ = r + 2,
                                p = wa.level_shields[`Level_${g}`](),
                                v = (0, c.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                                f = wa.level_shields[`Level_gr_${_ <= Je ? _ : 1}`](),
                                h = (0, c.useMemo)(() => ({ backgroundImage: `url(${f})` }), [f]),
                                b = t || d,
                                E = o()(mn, g === Je && gn),
                                w = (0, c.useMemo)(() => ({ componentId: e }), [e]),
                                y = g < Je;
                            return u().createElement(
                                'div',
                                { className: Zt },
                                u().createElement('div', { className: Qt }, n),
                                u().createElement('div', { className: un }, a),
                                !b &&
                                    u().createElement(
                                        pa,
                                        {
                                            contentId: R.views.lobby.dog_tags.RankedEfficiencyTooltip('resId'),
                                            isEnabled: !0,
                                            args: w,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: Cn },
                                            u().createElement('div', { className: Nn }),
                                            u().createElement(
                                                'div',
                                                { className: Sn },
                                                R.strings.dogtags.customization.ranked_skill_info(),
                                                u().createElement('div', { className: dn }),
                                            ),
                                            u().createElement('div', { className: Tn }),
                                        ),
                                    ),
                                b &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: wn }),
                                        u().createElement(
                                            'div',
                                            { className: yn },
                                            u().createElement('div', { className: kn }),
                                            l,
                                        ),
                                    ),
                                !b &&
                                    u().createElement(
                                        pa,
                                        {
                                            contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                            isEnabled: !0,
                                            args: w,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: E },
                                            u().createElement(
                                                'div',
                                                { className: _n },
                                                u().createElement('div', { className: vn, style: v }),
                                                u().createElement('div', { className: fn }, vt(s, m)),
                                            ),
                                            y &&
                                                u().createElement(
                                                    u().Fragment,
                                                    null,
                                                    u().createElement('div', { className: bn }),
                                                    u().createElement(
                                                        'div',
                                                        { className: pn },
                                                        u().createElement('div', { className: En, style: h }),
                                                        u().createElement('div', { className: hn }, vt(i, m)),
                                                    ),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    );
                function ka() {
                    return (
                        (ka =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ka.apply(this, arguments)
                    );
                }
                const Ca = ({ currentItem: e }) => {
                        const t = e.id,
                            n = e.purpose,
                            a = e.currentGrade,
                            r = e.type,
                            s = e.currentGradeValue,
                            o = ct(t, r, n, a).strings;
                        if (!o) return console.warn(`Component ${t} is missing translation info.`), null;
                        const i = o.description_locked(),
                            l = o.title(),
                            c = o.description(),
                            d = i.replace('{unlock_value}', String(vt(s))),
                            m = {
                                [Xe.Dedication]: fa,
                                [Xe.Skill]: ha,
                                [Xe.RankedSkill]: ya,
                                [Xe.Triumph]: Ea,
                                [Xe.Medal]: xn,
                                [Xe.Base]: xn,
                            },
                            g = { infoTitle: l, infoText: c, unlockText: d },
                            _ = m[n];
                        return _
                            ? u().createElement(_, ka({}, e, g))
                            : (console.warn(
                                  `Invalid component purpose ${n}. Available component purposes ${Object.keys(m).join(', ')}.`,
                              ),
                              null);
                    },
                    Sa = 'FilterBar_base_66',
                    Na = 'FilterBar_purposeGroups_85',
                    Ta = 'FilterBar_buttonWrapper_c2',
                    xa = 'FilterBar_buttonLabelSpacing_6c',
                    Ia = 'FilterBar_bubbleWrapper_27',
                    Oa = 'FilterBar_availableItems_4d',
                    Ra = 'FilterBar_availableItemsCount_a1',
                    La = 'FilterBar_newCount_c9',
                    Da = 'ToggleButton_base_66',
                    Ma = 'ToggleButton_content_2f',
                    Aa = 'ToggleButton_overlay_49',
                    Pa = 'ToggleButton_base__active_c6',
                    Ba = 'ToggleButton_indicator_c1',
                    Ha = ['active', 'className', 'children', 'size'];
                function Wa() {
                    return (
                        (Wa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Wa.apply(this, arguments)
                    );
                }
                const $a = (0, c.memo)((e) => {
                    let t = e.active,
                        n = e.className,
                        a = e.children,
                        r = e.size,
                        s = void 0 === r ? g.small : r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, Ha);
                    const l = o()(Da, n, t && Pa);
                    return u().createElement(
                        'div',
                        { className: l },
                        u().createElement(
                            p,
                            Wa({}, i, { type: 'secondary', size: s }),
                            u().createElement('span', { className: Ma }, a),
                        ),
                        u().createElement('div', { className: Aa }),
                        u().createElement('div', { className: Ba }),
                    );
                });
                let za, Fa, ja, Ga;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(za || (za = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(Fa || (Fa = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(ja || (ja = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(Ga || (Ga = {}));
                const Va = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    Ua = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
                function qa() {
                    return (
                        (qa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        qa.apply(this, arguments)
                    );
                }
                const Ka = (e) => {
                        let t = e.id,
                            n = e.isChecked,
                            a = void 0 !== n && n,
                            r = e.isDisabled,
                            s = void 0 !== r && r,
                            l = e.isAlert,
                            d = void 0 !== l && l,
                            m = e.size,
                            g = void 0 === m ? Fa.medium : m,
                            _ = e.type,
                            p = void 0 === _ ? ja.primary : _,
                            v = e.soundHover,
                            f = void 0 === v ? 'highlight' : v,
                            h = e.soundClick,
                            b = void 0 === h ? 'play' : h,
                            E = e.onMouseEnter,
                            w = e.onMouseLeave,
                            y = e.onMouseUp,
                            k = e.onMouseDown,
                            C = e.onClick,
                            S = e.onChange,
                            N = e.onFocus,
                            T = e.onBlur,
                            x = e.text,
                            I = e.contentStyles,
                            O = e.children,
                            R = e.alignment,
                            L = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Ua);
                        const D = (0, c.useState)(!1),
                            M = D[0],
                            A = D[1],
                            P = (0, c.useState)(!1),
                            B = (P[0], P[1]),
                            H = (0, c.useCallback)(
                                (e) => {
                                    s || (S && S(), C && C(e));
                                },
                                [s, S, C],
                            ),
                            W = (0, c.useCallback)(
                                (e) => {
                                    const t = e.button === za.LEFT;
                                    s || (t && A(!0), t && k && k(e), b && i(b));
                                },
                                [s, k, b],
                            ),
                            $ = (0, c.useCallback)(
                                (e) => {
                                    s || (A(!1), y && y(e));
                                },
                                [s, y],
                            ),
                            z = (0, c.useCallback)(
                                (e) => {
                                    s || (E && E(e), f && i(f));
                                },
                                [s, E, f],
                            ),
                            F = (0, c.useCallback)(
                                (e) => {
                                    s || (A(!1), w && w(e));
                                },
                                [s, w],
                            ),
                            j = (0, c.useCallback)(
                                (e) => {
                                    s || (B(!0), N && N(e));
                                },
                                [s, N],
                            ),
                            G = (0, c.useCallback)(
                                (e) => {
                                    s || (B(!1), T && T(e));
                                },
                                [s, T],
                            ),
                            V = u().createElement(
                                'div',
                                { className: Va.label },
                                u().createElement(
                                    'div',
                                    { className: o()(Va.labelContent, 's-labelContent'), style: I },
                                    x || O,
                                ),
                            );
                        return u().createElement(
                            'div',
                            qa(
                                {
                                    id: t,
                                    className: o()(Va.base, Va[`base__${g}`], Va[`base__${p}`], {
                                        [Va.base__checked]: a,
                                        [Va.base__disabled]: s,
                                        [Va.base__mouseDown]: M,
                                        [Va.base__alert]: d,
                                        [Va.base__center]: R === Ga.Center,
                                        [Va.base__bottom]: R === Ga.Bottom,
                                    }),
                                    onClick: H,
                                    onMouseEnter: z,
                                    onMouseLeave: F,
                                    onMouseDown: W,
                                    onMouseUp: $,
                                    onFocus: j,
                                    onBlur: G,
                                },
                                L,
                            ),
                            u().createElement(
                                'div',
                                { className: Va.input },
                                u().createElement('div', { className: Va.alertOverlay }),
                                u().createElement('div', { className: Va.inputHoverOverlay }),
                                u().createElement('div', { className: Va.highlight }),
                            ),
                            u().createElement('div', { className: Va.checkmark }),
                            ((x || O) && V) || null,
                        );
                    },
                    Ya = {
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
                    Xa = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Za() {
                    return (
                        (Za =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Za.apply(this, arguments)
                    );
                }
                const Qa = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        r = e.fadeInAnimation,
                        s = e.hide,
                        i = e.maximumNumber,
                        l = e.className,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, Xa);
                    const d = a ? null : n,
                        m = 'string' == typeof d;
                    if ((d && !m && d < 0) || 0 === d) return null;
                    const g = d && !m && d > i,
                        _ = o()(
                            Ya.base,
                            Ya[`base__${t}`],
                            r && Ya.base__animated,
                            s && Ya.base__hidden,
                            !d && Ya.base__pattern,
                            a && Ya.base__empty,
                            l,
                        );
                    return u().createElement(
                        'div',
                        Za({ className: _ }, c),
                        u().createElement('div', { className: Ya.bg }),
                        u().createElement('div', { className: Ya.pattern }),
                        u().createElement(
                            'div',
                            { className: o()(Ya.value, m && Ya.value__text) },
                            g ? i : d,
                            g && u().createElement('span', { className: Ya.plus }, '+'),
                        ),
                    );
                };
                Qa.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Ja = R.strings.dogtags.component.purposeGroup,
                    er = (0, c.memo)(
                        ({
                            availablePurposeGroups: e,
                            purposeGroupFilters: t,
                            setPurposeGroupFilters: n,
                            showOnlyAvailableItems: a,
                            setShowOnlyAvailableItems: r,
                            availableItemsCount: s,
                            newEngravingSkillCount: o = 0,
                            newEngravingDedicationCount: i = 0,
                            newEngravingTriumphCount: l = 0,
                        }) => {
                            const d = (0, c.useCallback)(
                                    (e) => () => {
                                        n((t) => Object.assign({}, t, { [e]: !t[e] }));
                                    },
                                    [n],
                                ),
                                m = (0, c.useCallback)(() => r((e) => !e), [r]),
                                g = { [Ze.Dedication]: i, [Ze.Triumph]: l, [Ze.Season]: o };
                            return u().createElement(
                                'div',
                                { className: Sa },
                                e.length > 0 &&
                                    u().createElement(
                                        'div',
                                        { className: Na },
                                        e.map((e) => {
                                            const n = t[e],
                                                a = e in Ja ? Ja[e]() : Ja.dedication(),
                                                r = g[e] || 0;
                                            return u().createElement(
                                                'div',
                                                { className: Ta, key: e },
                                                u().createElement(
                                                    $a,
                                                    { active: n, onClick: d(e) },
                                                    u().createElement('span', { className: xa }, a),
                                                ),
                                                r > 0 &&
                                                    u().createElement(
                                                        'div',
                                                        { className: Ia },
                                                        u().createElement(
                                                            'div',
                                                            { className: La },
                                                            u().createElement(Qa, { value: r }),
                                                        ),
                                                    ),
                                            );
                                        }),
                                    ),
                                u().createElement(
                                    'div',
                                    { className: Oa },
                                    u().createElement(Ka, {
                                        isChecked: a,
                                        size: 'medium',
                                        text: R.strings.dogtags.customization.showAvailable(),
                                        type: 'main',
                                        soundHover: 'highlight',
                                        soundClick: 'play',
                                        onChange: m,
                                    }),
                                    u().createElement('span', { className: Ra }, s),
                                ),
                            );
                        },
                    ),
                    tr = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function nr() {
                    return (
                        (nr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        nr.apply(this, arguments)
                    );
                }
                const ar = R.views.common.tooltip_window.simple_tooltip_content,
                    rr = (e) => {
                        let t = e.children,
                            n = e.body,
                            a = e.header,
                            r = e.note,
                            s = e.alert,
                            o = e.args,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, tr);
                        const l = (0, c.useMemo)(() => {
                            const e = Object.assign({}, o, { body: n, header: a, note: r, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, a, r, o]);
                        return u().createElement(
                            pa,
                            nr(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? ar.SimpleTooltipHtmlContent('resId') : ar.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                i,
                            ),
                            t,
                        );
                        var d;
                    },
                    sr = 'Item_base_13',
                    or = 'Item_mainWrapper_0c',
                    ir = 'Item_base__locked_59',
                    lr = 'Item_hoverWrapper_2e',
                    cr = 'Item_componentImage_03',
                    ur = 'Item_componentImage__engravingBackground_19',
                    dr = 'Item_statusIcon_69',
                    mr = 'Item_statusIcon_check_0c',
                    gr = 'Item_statusIcon_lock_5b',
                    _r = 'Item_statusIcon_selectedLocked_ca',
                    pr = 'Item_levelBadge_13',
                    vr = 'Item_selectedBg_7c',
                    fr = 'Item_base__selected_f0',
                    hr = 'Item_slotBg_3d',
                    br = 'Item_hoverBg_8d',
                    Er = 'Item_hoverInfo_05',
                    wr = 'Item_itemCounter_cb',
                    yr = ['selected', 'isEquipped', 'onNewComponentHover', 'isAnimatedDogTagSelected'];
                const kr = (0, c.memo)((e) => {
                        const t = e.selected,
                            n = e.isEquipped,
                            a = e.onNewComponentHover,
                            r = e.isAnimatedDogTagSelected,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, yr),
                            l = s.id,
                            d = s.type,
                            m = s.isLocked,
                            g = s.currentGrade,
                            _ = s.currentProgress,
                            p = s.progressNumberType,
                            v = s.onClick,
                            f = s.purpose,
                            h = s.isNew,
                            b = g,
                            E = ct(l, d, f, b, 'small'),
                            w = E.image,
                            y = E.strings,
                            k = d === Ye.Engraving,
                            C = (0, c.useCallback)(() => {
                                i(m ? R.sounds.dt_element_locked_click() : R.sounds.dt_element_click()), v(s);
                            }, [m, v, s]),
                            S = (0, c.useCallback)(() => {
                                h && a({ compId: l });
                            }, [l, a, h]),
                            N = (0, c.useCallback)(() => {
                                i(R.sounds.highlight());
                            }, []);
                        if (!y) return console.warn(`Component ${l} is missing translation info.`), null;
                        const T = o()(dr, { [mr]: n && !m && !r, [gr]: !t && m, [_r]: t && m }),
                            x = !m && k;
                        return u().createElement(
                            'div',
                            {
                                className: o()(sr, t && fr, m && ir),
                                onClick: C,
                                onMouseOver: S,
                                onMouseEnter: N,
                                id: 'item-' + l,
                            },
                            u().createElement(
                                'div',
                                { className: or },
                                u().createElement('div', { className: hr }),
                                u().createElement('div', { className: vr }),
                                b >= 0 && x && u().createElement('div', { className: pr }, at[b]),
                                u().createElement(
                                    'div',
                                    { className: o()(cr, k && ur) },
                                    u().createElement('div', {
                                        className: cr,
                                        style: { backgroundImage: `url(${w})` },
                                    }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: lr },
                                    u().createElement('div', { className: br }),
                                    u().createElement(
                                        'div',
                                        { className: Er },
                                        y.title(),
                                        x && u().createElement('span', null, vt(_, p)),
                                    ),
                                ),
                            ),
                            u().createElement('div', { className: T }),
                            h && u().createElement('div', { className: wr }, u().createElement(Qa, { isEmpty: !0 })),
                        );
                    }),
                    Cr = 'Grid_base_2f',
                    Sr = 'Grid_sectionWrapper_fa',
                    Nr = 'Grid_emptyBlock_30',
                    Tr = 'Grid_sectionTitle_79',
                    xr = 'Grid_sectionTitle_text_63',
                    Ir = 'Grid_sectionTitle_unlockedCount_fb',
                    Or = 'Grid_sectionTitle_count_ac',
                    Rr = 'Grid_sectionTitle_infoIcon_d7';
                function Lr() {
                    return (
                        (Lr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Lr.apply(this, arguments)
                    );
                }
                const Dr = (0, c.memo)(
                        ({
                            data: e,
                            onItemSelect: t,
                            onNewComponentHover: n,
                            selectedItems: a,
                            equippedItems: r,
                            isAnimatedDogTagSelected: s,
                        }) =>
                            u().createElement(
                                'div',
                                { className: Cr },
                                e.map((e, o) => {
                                    const i = e.value.items.length,
                                        l = (3 - (i % 3)) % 3,
                                        c = Array.from(Array(l)).map((e, t) =>
                                            u().createElement('div', { key: 'emptyBlock-' + t, className: Nr }),
                                        ),
                                        d = e.value.items.reduce((e, t) => (t.value.isLocked ? e : e + 1), 0),
                                        m = e.value.title ? systemLocale.toUpperCase(e.value.title) : '';
                                    return u().createElement(
                                        'div',
                                        { key: `${e.value.title}-${o}`, className: Sr },
                                        m &&
                                            u().createElement(
                                                'div',
                                                { className: Tr },
                                                u().createElement('div', { className: xr }, m),
                                                u().createElement(
                                                    'div',
                                                    { className: Or },
                                                    '(',
                                                    u().createElement('div', { className: Ir }, d),
                                                    '/',
                                                    i,
                                                    ')',
                                                ),
                                                e.value.tooltipDescription &&
                                                    u().createElement(
                                                        rr,
                                                        {
                                                            header: e.value.tooltipTitle || void 0,
                                                            body: e.value.tooltipDescription,
                                                        },
                                                        u().createElement('div', { className: Rr }),
                                                    ),
                                            ),
                                        e.value.items.map((e) => {
                                            const o = e.value,
                                                i = rt(o, r),
                                                l = rt(o, a);
                                            return u().createElement(
                                                kr,
                                                Lr({ key: o.id }, o, {
                                                    onClick: t,
                                                    selected: l,
                                                    isEquipped: i,
                                                    onNewComponentHover: n,
                                                    isAnimatedDogTagSelected: s,
                                                }),
                                            );
                                        }),
                                        c,
                                    );
                                }),
                            ),
                    ),
                    Mr = 'Tabs_base_d9',
                    Ar = 'Tabs_base__vertical_c0',
                    Pr = 'Tabs_list_0a',
                    Br = 'Tabs_list__centered_dc',
                    Hr = 'Tabs_wrapper_2d',
                    Wr = 'Tabs_wrapper__centered_d8',
                    $r = 'Tabs_wrapper__vertical_a5';
                function zr() {
                    return (
                        (zr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        zr.apply(this, arguments)
                    );
                }
                const Fr = 'tabs-role';
                var jr;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(jr || (jr = {}));
                class Gr extends c.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[jr.TAB]);
                                return t && t.props[jr.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = u().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[Fr] === jr.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(u().Children.toArray(e[t].props.children));
                        (e[t] = u().cloneElement(e[t], {
                            children: u()
                                .Children.toArray(e[t].props.children)
                                .map((e) => u().cloneElement(e, { key: e.props[jr.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(n);
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const n = u().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = n.props.children.reduce(
                                (e, t, n) => ((e[n] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            r =
                                ((s = this.tabsProps),
                                (l = a),
                                !(
                                    Object.keys(s).length === Object.keys(l).length &&
                                    Object.keys(s).every(
                                        (e) => Object.prototype.hasOwnProperty.call(l, e) && s[e] === l[e],
                                    )
                                ));
                        var s, l;
                        const c = o()(
                                Hr,
                                n.props.className,
                                this.props.isTabsCentered && Wr,
                                this.props.isVerticalTabs && $r,
                            ),
                            d = o()(Pr, this.props.isTabsCentered && Br);
                        if (t.activeKey !== this.state.activeKey || r) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[Fr] === jr.CONTENT)
                                        return e.props[jr.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                r = t[0].props.children,
                                s = r.map((e, t) =>
                                    u().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[jr.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === r.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const n = a[t][jr.TAB];
                                                    this.state.activeKey === n ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(n),
                                                        this.props.onClickSound && i(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound && i(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        u().createElement(
                                            'div',
                                            { className: d, key: jr.LIST },
                                            u().createElement('div', zr({}, n.props, { className: c }), s),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = o()(Mr, this.props.isVerticalTabs && Ar);
                        return u().createElement('div', { className: t }, e);
                    }
                }
                Gr.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const Vr = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function Ur() {
                    return (
                        (Ur =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ur.apply(this, arguments)
                    );
                }
                const qr = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = e.activeKey,
                            r = e.onClickSound,
                            s = e.onMouseEnterSound,
                            o = e.isTabsCentered,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Vr);
                        return u().createElement(
                            'div',
                            Ur({ className: n }, i),
                            u().createElement(
                                Gr,
                                { activeKey: a, onClickSound: r, onMouseEnterSound: s, isTabsCentered: o },
                                t,
                            ),
                        );
                    },
                    Kr = ({ children: e, component: t, props: n = {} }) => (t ? u().createElement(t, n, e) : e || null),
                    Yr = 'Tab_base_dd',
                    Xr = 'Tab_base__first_4a',
                    Zr = 'Tab_base__last_96',
                    Qr = 'Tab_base__medium_ec',
                    Jr = 'Tab_base__active_5d',
                    es = 'Tab_divider_ca',
                    ts = 'Tab_divider__show_62',
                    ns = 'Tab_state_6c',
                    as = 'Tab_stateHighlight_1e',
                    rs = 'Tab_stateBorder_64',
                    ss = 'Tab_stateBorder__positionLeft_e7',
                    os = 'Tab_stateBorder__positionRight_db',
                    is = 'Tab_counter_e1',
                    ls = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function cs() {
                    return (
                        (cs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        cs.apply(this, arguments)
                    );
                }
                const us = (0, c.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            a = e.isFirst,
                            r = void 0 !== a && a,
                            s = e.isLast,
                            i = void 0 !== s && s,
                            l = e.isMedium,
                            c = void 0 !== l && l,
                            d = e.isNotified,
                            m = void 0 !== d && d,
                            g = e.children,
                            _ = void 0 === g ? 'Tab' : g,
                            p = e.wrapper,
                            v = void 0 === p ? {} : p,
                            f = e.counter,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, ls);
                        return u().createElement(
                            Kr,
                            v,
                            u().createElement(
                                'div',
                                cs({ className: o()(Yr, { [Jr]: n }, { [Xr]: r }, { [Zr]: i }, { [Qr]: c }) }, h),
                                u().createElement(
                                    'span',
                                    { className: ns },
                                    u().createElement('span', { className: as }),
                                    u().createElement('span', { className: o()(rs, ss) }),
                                    u().createElement('span', { className: o()(rs, os) }),
                                ),
                                _,
                                !i && !n && u().createElement('span', { className: o()(es, ts) }),
                                (Boolean(f) || m) &&
                                    u().createElement(
                                        'div',
                                        { className: is },
                                        u().createElement(Qa, { value: f, isEmpty: m }),
                                    ),
                            ),
                        );
                    }),
                    ds = 'Header_base_eb',
                    ms = 'Header_titleWrapper_ab',
                    gs = 'Header_title_e8',
                    _s = 'Header_infoButtonWrapper_e1',
                    ps = 'Header_infoIcon_8c',
                    vs = Object.keys(qe)
                        .filter((e) => !isNaN(Number(e)))
                        .map((e) => Number(e)),
                    fs = {
                        [qe.Engraving]: R.strings.dogtags.customization.tab.engraving(),
                        [qe.Background]: R.strings.dogtags.customization.tab.background(),
                    },
                    hs = systemLocale.toUpperCase(R.strings.dogtags.customization.mainTitle()),
                    bs = R.strings.dogtags.customization.infoTooltip(),
                    Es = {
                        width: 10 * Math.max(...vs.map((e) => fs[e].length)) + 'rem',
                        padding: '0 5rem',
                        flex: '0 0 150rem',
                        justifyContent: 'center',
                    },
                    ws = (0, c.memo)(({ onTabClick: e, onInfoClick: t }) => {
                        const n = ge('model'),
                            a = n.tab,
                            r = n.newBackgroundComponentCount,
                            s = n.newEngravingComponentCount;
                        return u().createElement(
                            'div',
                            { className: ds },
                            u().createElement(
                                'div',
                                { className: ms },
                                u().createElement('p', { className: gs }, hs),
                                u().createElement(
                                    'div',
                                    { className: _s },
                                    u().createElement(
                                        rr,
                                        { body: bs },
                                        u().createElement(
                                            p,
                                            { type: 'ghost', onClick: t },
                                            u().createElement('div', { className: ps }),
                                        ),
                                    ),
                                ),
                            ),
                            u().createElement(
                                qr,
                                { key: a, activeKey: String(a), onClickSound: R.sounds.dt_tab() },
                                u().createElement(
                                    'div',
                                    { 'tabs-role': jr.LIST },
                                    vs.map((t) => {
                                        const n = { [qe.Engraving]: s, [qe.Background]: r }[t] || 0;
                                        return u().createElement(
                                            us,
                                            {
                                                key: String(t),
                                                'tabs-role': jr.TAB,
                                                'tab-key': String(t),
                                                onClick: e,
                                                style: Es,
                                                counter: n,
                                            },
                                            fs[t],
                                        );
                                    }),
                                ),
                            ),
                        );
                    }),
                    ys = 'NoResults_base_35',
                    ks = 'NoResults_message_41',
                    Cs = 'NoResults_message_icon_a4',
                    Ss = ({ className: e, clearFilters: t }) => {
                        const n = o()(ys, e);
                        return u().createElement(
                            'div',
                            { className: n },
                            u().createElement(
                                'p',
                                { className: ks },
                                u().createElement('img', {
                                    src: R.images.gui.maps.icons.dogtags.icons.alert(),
                                    className: Cs,
                                }),
                                R.strings.dogtags.customization.filter.noResults(),
                            ),
                            u().createElement(
                                p,
                                { type: 'secondary', size: g.medium, onClick: t },
                                R.strings.dogtags.customization.filter.restoreFilter(),
                            ),
                        );
                    },
                    Ns = (e) => {
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
                    },
                    Ts = [];
                function xs(e) {
                    const t = (0, c.useRef)(e);
                    return (
                        (0, c.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, c.useCallback)((...e) => (0, t.current)(...e), Ts)
                    );
                }
                function Is(e, t, n = []) {
                    const a = (0, c.useRef)(0),
                        r = (0, c.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, c.useEffect)(() => r, [r]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, c.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, s),
                        r,
                    ];
                }
                function Os(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Rs(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Rs(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Rs(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function Ls(e, t, n) {
                    const a = (0, c.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let r,
                                    s = !1,
                                    o = 0;
                                function i() {
                                    r && clearTimeout(r);
                                }
                                function l(...l) {
                                    const c = this,
                                        u = Date.now() - o;
                                    function d() {
                                        (o = Date.now()), n.apply(c, l);
                                    }
                                    s ||
                                        (a && !r && d(),
                                        i(),
                                        void 0 === a && u > e
                                            ? d()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  a
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : d,
                                                  void 0 === a ? e - u : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                                    (l.cancel = function () {
                                        i(), (s = !0);
                                    }),
                                    l
                                );
                            })(n, e),
                        t,
                    );
                    return (0, c.useEffect)(() => a.cancel, [a]), a;
                }
                let Ds;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Ds || (Ds = {}));
                const Ms = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    As = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                s = a[1];
                            return s <= r ? 0 : ia(r, s, n);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                u = void 0 === l ? Ms : l,
                                d = (0, c.useRef)(null),
                                m = (0, c.useRef)(null),
                                g = (() => {
                                    const e = (0, c.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        r = (e, ...n) => {
                                            for (var a, r = Os(t(e).values()); !(a = r()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, c.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                                })(),
                                _ = Ls(
                                    () => {
                                        b.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, _e.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), g.trigger('change', e), s && _());
                                    },
                                    onRest: (e) => g.trigger('rest', e),
                                    onStart: (e) => g.trigger('start', e),
                                    onPause: (e) => g.trigger('pause', e),
                                })),
                                v = p[0],
                                f = p[1],
                                h = (0, c.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = v.scrollPosition.get(),
                                            s = (null != (a = v.scrollPosition.goal) ? a : 0) - r;
                                        return o(e, t * n + s + r);
                                    },
                                    [v.scrollPosition],
                                ),
                                E = (0, c.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            f.start({
                                                scrollPosition: o(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: u.animationConfig,
                                                from: { scrollPosition: o(a, v.scrollPosition.get()) },
                                            });
                                    },
                                    [f, u.animationConfig, v.scrollPosition],
                                ),
                                w = (0, c.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            n = m.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, u.step),
                                            s = h(t, e, a);
                                        E(s);
                                    },
                                    [E, h, u.step],
                                ),
                                y = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && w(a(e)),
                                            d.current && g.trigger('mouseWheel', e, v.scrollPosition, t(d.current));
                                    },
                                    [v.scrollPosition, w, g],
                                ),
                                k = ((e, t = []) => {
                                    const n = (0, c.useRef)(),
                                        a = (0, c.useCallback)((...t) => {
                                            n.current && n.current(), (n.current = e(...t));
                                        }, t);
                                    return (
                                        (0, c.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        Ns(() => {
                                            const e = d.current;
                                            e &&
                                                (E(o(e, v.scrollPosition.goal), { immediate: !0 }),
                                                g.trigger('resizeHandled'));
                                        }),
                                    [E, v.scrollPosition.goal],
                                ),
                                C = xs(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, v.scrollPosition.goal);
                                    t !== v.scrollPosition.goal && E(t, { immediate: !0 }),
                                        g.trigger('recalculateContent');
                                });
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', k),
                                    () => {
                                        window.removeEventListener('resize', k);
                                    }
                                ),
                                [k],
                            );
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: u.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: y,
                                    applyScroll: E,
                                    applyStepTo: w,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: f,
                                    animationScroll: v,
                                    recalculateContent: C,
                                    events: { on: g.on, off: g.off },
                                }),
                                [v.scrollPosition, E, w, g.off, g.on, C, y, f, u.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Ps = As({
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
                        getDirection: (e) => (e.deltaY > 1 ? Ds.Next : Ds.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Bs = 'HorizontalBar_base_49',
                    Hs = 'HorizontalBar_base__nonActive_82',
                    Ws = 'HorizontalBar_leftButton_5f',
                    $s = 'HorizontalBar_rightButton_03',
                    zs = 'HorizontalBar_track_0d',
                    Fs = 'HorizontalBar_thumb_fd',
                    js = 'HorizontalBar_rail_32',
                    Gs = 'disable',
                    Vs = { pending: !1, offset: 0 },
                    Us = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    qs = () => {},
                    Ks = (e, t) => Math.max(20, e.offsetWidth * t),
                    Ys = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Us, onDrag: a = qs }) => {
                        const r = (0, c.useRef)(null),
                            s = (0, c.useRef)(null),
                            l = (0, c.useRef)(null),
                            d = (0, c.useRef)(null),
                            m = (0, c.useRef)(null),
                            g = e.stepTimeout || 100,
                            _ = (0, c.useState)(Vs),
                            p = _[0],
                            v = _[1],
                            f = (0, c.useCallback)(
                                (e) => {
                                    v(e),
                                        m.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                },
                                [a],
                            ),
                            h = () => {
                                const t = d.current,
                                    n = m.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / r),
                                    c = ia(0, 1, o / (r - a)),
                                    u = (t.offsetWidth - Ks(t, i)) * c;
                                (n.style.transform = `translateX(${0 | u}px)`),
                                    ((e) => {
                                        if (s.current && l.current && d.current && m.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Gs), void l.current.classList.remove(Gs);
                                            if (
                                                ((t = d.current),
                                                (n = m.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(Gs), void l.current.classList.add(Gs);
                                            var t, n;
                                            s.current.classList.remove(Gs), l.current.classList.remove(Gs);
                                        }
                                    })(u);
                            },
                            E = xs(() => {
                                (() => {
                                    const t = m.current,
                                        n = d.current,
                                        a = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && a && n)) return;
                                    const o = Math.min(1, a / s);
                                    (t.style.width = `${Ks(n, o)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(Hs) : r.current.classList.remove(Hs));
                                })(),
                                    h();
                            });
                        (0, c.useEffect)(() => Ns(E)),
                            (0, c.useEffect)(
                                () =>
                                    Ns(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let n = qs;
                                        const a = () => {
                                            n(), (n = Ns(E));
                                        };
                                        return (
                                            e.events.on('recalculateContent', E),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', E),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, c.useEffect)(() => {
                                if (!p.pending) return;
                                const t = b.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const s = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!s || !o) return;
                                        const i = d.current,
                                            l = m.current;
                                        if (!i || !l) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const c = t.clientX - p.offset - i.getBoundingClientRect().x,
                                            u = (c / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, u),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: l, thumbOffset: c, contentOffset: u });
                                    }),
                                    n = b.O.client.events.mouse.up(() => {
                                        t(), f(Vs);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, p.offset, p.pending, a, f]);
                        const w = Is((t) => e.applyStepTo(t), g, [e]),
                            y = w[0],
                            k = w[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', k, !0),
                                () => document.removeEventListener('mouseup', k, !0)
                            ),
                            [k],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Gs) || i('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: o()(Bs, t.base), ref: r, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: o()(Ws, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Gs) || 0 !== e.button || (i('play'), y(Ds.Next));
                                },
                                onMouseUp: k,
                                ref: s,
                                onMouseEnter: C,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: o()(zs, t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        if (a && 0 === t.button)
                                            if ((i('play'), t.target === a))
                                                f({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = m.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const s = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? Ds.Prev : Ds.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: C,
                                },
                                u().createElement('div', { ref: m, className: o()(Fs, t.thumb) }),
                                u().createElement('div', { className: o()(js, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: o()($s, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Gs) || 0 !== e.button || (i('play'), y(Ds.Prev));
                                },
                                onMouseUp: k,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Xs = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Zs = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: d,
                    }) => {
                        const m = (0, c.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: o()(Xs.base, e.base) });
                            }, [a]),
                            g = (0, c.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: o()(Xs.defaultScroll, n), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: o()(Xs.defaultScrollArea, r) },
                                u().createElement(Qs, { className: i, api: g, classNames: s }, e),
                            ),
                            u().createElement(Ys, { getStepByRailClick: l, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    Qs = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, c.useEffect)(() => Ns(e.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: o()(Xs.base, t) },
                            u().createElement(
                                'div',
                                {
                                    className: o()(Xs.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                u().createElement(
                                    'div',
                                    { className: o()(Xs.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (Qs.Bar = Ys), (Qs.Default = Zs);
                const Js = As({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ds.Next : Ds.Prev),
                    }),
                    eo = 'VerticalBar_base_f3',
                    to = 'VerticalBar_base__nonActive_42',
                    no = 'VerticalBar_topButton_d7',
                    ao = 'VerticalBar_bottomButton_06',
                    ro = 'VerticalBar_track_df',
                    so = 'VerticalBar_thumb_32',
                    oo = 'VerticalBar_rail_43',
                    io = 'disable',
                    lo = () => {},
                    co = { pending: !1, offset: 0 },
                    uo = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    mo = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    go = (e, t) => Math.max(20, e.offsetHeight * t),
                    _o = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = uo, onDrag: a = lo }) => {
                        const r = (0, c.useRef)(null),
                            s = (0, c.useRef)(null),
                            l = (0, c.useRef)(null),
                            d = (0, c.useRef)(null),
                            m = (0, c.useRef)(null),
                            g = e.stepTimeout || 100,
                            _ = (0, c.useState)(co),
                            p = _[0],
                            v = _[1],
                            f = (0, c.useCallback)(
                                (e) => {
                                    v(e),
                                        m.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                },
                                [a],
                            ),
                            h = xs(() => {
                                const t = m.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && s && t && n)) return;
                                const o = Math.min(1, a / s);
                                return (
                                    (t.style.height = `${go(n, o)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(to) : r.current.classList.remove(to)),
                                    o
                                );
                            }),
                            E = xs(() => {
                                const t = d.current,
                                    n = m.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / r),
                                    c = ia(0, 1, o / (r - a)),
                                    u = (t.offsetHeight - go(t, i)) * c;
                                (n.style.transform = `translateY(${0 | u}px)`),
                                    ((e) => {
                                        if (s.current && l.current && d.current && m.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(io), void l.current.classList.remove(io);
                                            if (
                                                ((t = d.current),
                                                (n = m.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(io), void l.current.classList.add(io);
                                            var t, n;
                                            s.current.classList.remove(io), l.current.classList.remove(io);
                                        }
                                    })(u);
                            }),
                            w = xs(() => {
                                mo(e, () => {
                                    h(), E();
                                });
                            });
                        (0, c.useEffect)(() => Ns(w)),
                            (0, c.useEffect)(() => {
                                const t = () => {
                                    mo(e, () => {
                                        E();
                                    });
                                };
                                let n = lo;
                                const a = () => {
                                    n(), (n = Ns(w));
                                };
                                return (
                                    e.events.on('recalculateContent', w),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', w),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, c.useEffect)(() => {
                                if (!p.pending) return;
                                const t = b.O.client.events.mouse.up(() => {
                                        f(co);
                                    }),
                                    n = b.O.client.events.mouse.move(([t]) => {
                                        mo(e, (n) => {
                                            const r = d.current,
                                                s = m.current,
                                                o = e.getContainerSize();
                                            if (!r || !s || !o) return;
                                            const i = t.screenY - p.offset - r.getBoundingClientRect().y,
                                                l = (i / r.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: l });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, p.offset, p.pending, a, f]);
                        const y = Is((t) => e.applyStepTo(t), g, [e]),
                            k = y[0],
                            C = y[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const S = (e) => {
                            e.target.classList.contains(io) || i('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: o()(eo, t.base), ref: r, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: o()(no, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(io) || 0 !== e.button || (i('play'), k(Ds.Next));
                                },
                                ref: s,
                                onMouseEnter: S,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: o()(ro, t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        if (a && 0 === t.button)
                                            if ((i('play'), t.target === a))
                                                f({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    m.current &&
                                                        mo(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                s = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? Ds.Prev : Ds.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: S,
                                },
                                u().createElement('div', { ref: m, className: o()(so, t.thumb) }),
                                u().createElement('div', { className: o()(oo, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: o()(ao, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(io) || 0 !== e.button || (i('play'), k(Ds.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: S,
                            }),
                        );
                    }),
                    po = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    vo = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: d,
                    }) => {
                        const m = (0, c.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: o()(po.base, e.base) });
                            }, [a]),
                            g = (0, c.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: o()(po.defaultScroll, n), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: o()(po.area, r) },
                                u().createElement(fo, { className: s, classNames: i, api: g }, e),
                            ),
                            u().createElement(_o, { getStepByRailClick: l, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    fo = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, c.useEffect)(() => Ns(a.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: o()(po.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: o()(po.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                fo.Default = vo;
                const ho = { Vertical: r, Horizontal: a },
                    bo = (e, t) => {
                        const n = t.split('.'),
                            a = n[0];
                        if (!e || 'object' != typeof e)
                            return console.warn(`Reference "${JSON.stringify(e, null, 2)}" is not a valid object.`), !1;
                        if (!a) return console.warn(`Invalid key "${a}" in path ${t}.`), !1;
                        if (!(a in e))
                            return (
                                console.warn(`Key "${a}" was not found in reference "${JSON.stringify(e, null, 2)}".`),
                                !1
                            );
                        const r = n.slice(1);
                        return 0 === r.length || bo(e[a], r.join('.'));
                    },
                    Eo = [
                        'model.equippedDogTag',
                        'model.equippedDogTag.background',
                        'model.equippedDogTag.engraving',
                        'model.engravingGrid',
                        'model.backgroundGrid',
                    ];
                Eo.forEach((e) => bo(window, e));
                const wo = () => (
                        ge(Eo[0]),
                        ge(Eo[1]),
                        ge(Eo[2]),
                        ge(Eo[3]),
                        ge(Eo[4]),
                        ((e, t = !0) => {
                            if (!bo(window, e)) throw Error(`Path "${e}" does not exist.`);
                            const n = ge(e, t ? me.Deep : me.None);
                            return 'object' == typeof n && null !== n
                                ? (0, ne.lw)(n)
                                : (t &&
                                      console.warn(
                                          `Tracking of primitive value ${String(n)} in ${e} is not supported.`,
                                      ),
                                  n);
                        })('model')
                    ),
                    yo = 'Router_base_17',
                    ko = 'Router_innerWrapper_d8',
                    Co = 'Router_gridWrapper_c2',
                    So = 'Router_infoWrapper_95',
                    No = 'Router_dogtagsInfoWrapper_b7',
                    To = 'Router_scrollContainer_f2',
                    xo = 'Router_scrollBar_c1',
                    Io = 'Router_scrollAreaContainer_3e',
                    Oo = 'Router_customizationWrapper_05',
                    Ro = 'Router_scrollAreaWrapper_93',
                    Lo = 'Router_scrollAreaWrapper_bottomMask_63',
                    Do = 'Router_gridTitle_a2',
                    Mo = 'Router_subNavigation_b2',
                    Ao = 'Router_topDivider_23',
                    Po = 'Router_gridBottomSeparator_13',
                    Bo = 'Router_alertMessage_ad',
                    Ho = 'Router_alertIcon_84',
                    Wo = { dedication: !0, season: !0, triumph: !0 },
                    $o = {
                        [qe.Engraving]: R.strings.dogtags.customization.tab.engraving(),
                        [qe.Background]: R.strings.dogtags.customization.tab.background(),
                    },
                    zo = () => {
                        const e = wo(),
                            t = Js(),
                            n = Js(),
                            a = H().mediaSize,
                            r = e.onUpdateSelectedDT,
                            s = e.onEquip,
                            i = e.onNewComponentHover,
                            l = e.tab,
                            d = e.equippedDogTag,
                            m = d.playerName,
                            g = d.clanTag,
                            _ = d.engraving.id,
                            p = d.background.id,
                            v = e.engravingGrid,
                            f = e.backgroundGrid,
                            h = e.newEngravingSkillCount,
                            b = e.newEngravingDedicationCount,
                            E = e.newEngravingTriumphCount,
                            w = e.isAnimatedDogTagSelected,
                            y = (0, c.useState)({ background: p, engraving: _ }),
                            k = y[0],
                            C = y[1],
                            S = {
                                background: _t(f, k.background) || f[0].value.items[0].value,
                                engraving: _t(v, k.engraving) || v[0].value.items[0].value,
                            },
                            N = {
                                engraving: _t(v, _) || v[0].value.items[0].value,
                                background: _t(f, p) || f[0].value.items[0].value,
                            },
                            T = (0, c.useState)(Wo),
                            x = T[0],
                            I = T[1],
                            O = (0, c.useState)(!1),
                            L = O[0],
                            D = O[1],
                            M = (0, c.useState)(!0),
                            P = M[0],
                            B = M[1],
                            W = ((e, t) => e[gt[t]])(S, l),
                            $ = $o[l],
                            z = ((e, t) => e[mt[t]])({ backgroundGrid: f, engravingGrid: v }, l),
                            F = l === qe.Engraving ? dt(z, x) : z,
                            j = ut(
                                F.map((e) => ({
                                    value: Object.assign({}, e.value, {
                                        items: e.value.items.filter((e) => !e.value.isLocked),
                                    }),
                                })),
                            );
                        const G = pt(j),
                            V =
                                l === qe.Engraving
                                    ? ((e) =>
                                          [Ze.Dedication, Ze.Season, Ze.Triumph].filter((t) => {
                                              for (let n = 0; n < e.length; n++) {
                                                  const a = e[n].value.items[0];
                                                  if (a && Qe[t].includes(a.value.purpose)) return !0;
                                              }
                                              return !1;
                                          }))(z)
                                    : [],
                            U = (0, c.useMemo)(() => ({ gridData: L ? j : F, totalItems: pt(F) }), [j, F, L]),
                            q = U.gridData,
                            K = U.totalItems,
                            Y = (0, c.useCallback)((e) => {
                                C(
                                    (t) => (
                                        r(Object.assign({}, t, { [e.type]: e.id })),
                                        Object.assign({}, t, { [e.type]: e.id })
                                    ),
                                );
                            }, []),
                            X = (0, c.useCallback)(
                                (e) => {
                                    C(
                                        (t) => (
                                            r(Object.assign({}, t, { [e]: N[e].id })),
                                            Object.assign({}, t, { [e]: N[e].id })
                                        ),
                                    );
                                },
                                [N],
                            ),
                            Z = xs(() => {
                                const e = t.getBounds()[1],
                                    n = t.animationScroll.scrollPosition.get();
                                B(n < e);
                            });
                        (0, c.useEffect)(
                            () => (
                                t.events.on('change', Z),
                                t.events.on('recalculateContent', Z),
                                () => {
                                    t.events.off('change', Z), t.events.off('recalculateContent', Z);
                                }
                            ),
                            [t.events, Z],
                        ),
                            (0, c.useEffect)(() => {
                                const e = () => {
                                    n.applyScroll(0);
                                };
                                return (
                                    n.events.on('recalculateContent', e),
                                    () => {
                                        n.events.off('recalculateContent', e);
                                    }
                                );
                            }, []);
                        const Q = (0, c.useCallback)(() => {
                                I({ dedication: !0, season: !0, triumph: !0 }), D(!1);
                            }, []),
                            J = ((e) => {
                                const t = e.background,
                                    n = e.engraving,
                                    a = t.currentGrade + 1,
                                    r = n.currentGrade + 1;
                                return (n.purpose === Xe.Triumph && 4 === r) || r === Je || a === Je;
                            })(S);
                        return u().createElement(
                            'div',
                            { className: yo },
                            u().createElement(
                                'div',
                                { className: ko },
                                u().createElement(
                                    'div',
                                    { className: Co },
                                    u().createElement(
                                        'div',
                                        { className: Mo },
                                        u().createElement('div', { className: Do }, systemLocale.toUpperCase($)),
                                        u().createElement(er, {
                                            newEngravingSkillCount: h,
                                            newEngravingDedicationCount: b,
                                            newEngravingTriumphCount: E,
                                            availablePurposeGroups: V,
                                            setPurposeGroupFilters: I,
                                            purposeGroupFilters: x,
                                            showOnlyAvailableItems: L,
                                            setShowOnlyAvailableItems: D,
                                            availableItemsCount: G,
                                        }),
                                        u().createElement('div', { className: Ao }),
                                    ),
                                    q.length > 0
                                        ? u().createElement(
                                              'div',
                                              { className: o()(Ro, P && Lo) },
                                              u().createElement(
                                                  ho.Vertical.Area.Default,
                                                  { api: t },
                                                  u().createElement(Dr, {
                                                      data: q,
                                                      count: K,
                                                      onItemSelect: Y,
                                                      onNewComponentHover: i,
                                                      selectedItems: S,
                                                      equippedItems: N,
                                                      isAnimatedDogTagSelected: w,
                                                  }),
                                              ),
                                          )
                                        : u().createElement(Ss, { clearFilters: Q }),
                                    u().createElement('div', { className: Po }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: So },
                                    u().createElement(St, {
                                        playerName: m,
                                        clanTag: g,
                                        background: S.background,
                                        engraving: S.engraving,
                                        isHighlighted: J,
                                        size: a >= A.Large ? wt.x400 : wt.x300,
                                    }),
                                    u().createElement(
                                        'div',
                                        { className: No },
                                        u().createElement(
                                            ho.Vertical.Area.Default,
                                            { api: n, className: To, barClassNames: { base: xo }, areaClassName: Io },
                                            u().createElement(Ca, { currentItem: W }),
                                        ),
                                    ),
                                    (S.engraving.isDeprecated || S.background.isDeprecated) &&
                                        u().createElement(
                                            'div',
                                            { className: Bo },
                                            u().createElement('div', { className: Ho }),
                                            R.strings.dogtags.customization.deprecated(),
                                        ),
                                    u().createElement(
                                        'div',
                                        { className: Oo },
                                        u().createElement(Xt, {
                                            selectedItems: S,
                                            equippedItems: N,
                                            onItemReset: X,
                                            isAnimatedDogTagSelected: w,
                                            onEquip: s,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Fo = 300,
                    jo = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: Fo } },
                    Go = {
                        from: { opacity: 0 },
                        enter: { opacity: 1, delay: 300 },
                        leave: { opacity: 0 },
                        config: { duration: Fo },
                    },
                    Vo = 'DogTagsApp_base_c2',
                    Uo = 'DogTagsApp_base__topView_03',
                    qo = 'DogTagsApp_dogTags_30',
                    Ko = 'DogTagsApp_dogTags__blur_6c',
                    Yo = 'DogTagsApp_onboardingWrapper_b7',
                    Xo = 'DogTagsApp_customizationWrapper_95',
                    Zo = 'DogTagsApp_routerReveal_45',
                    Qo = 'DogTagsApp_backBtnWrapper_85',
                    Jo = 'DogTagsApp_closeBtnWrapper_69',
                    ei = R.strings.dogtags.customization.button,
                    ti = R.strings.dogtags.onboarding.header.close(),
                    ni = () => {
                        const e = ge('model', me.Shallow),
                            t = e.onTabSelect,
                            n = e.onboardingEnabled,
                            a = e.onOnboardingCloseClick,
                            r = e.onInfoButtonClick,
                            s = e.isTopView,
                            i = e.onExit,
                            l = (0, c.useState)(null),
                            d = l[0],
                            m = l[1],
                            g = (0, c.useState)(n),
                            _ = g[0],
                            p = g[1],
                            v = (0, c.useCallback)((e) => {
                                const t = Number(e.currentTarget.getAttribute('tab-key'));
                                m(t);
                            }, []);
                        (0, c.useEffect)(() => {
                            if (null !== d)
                                return ee(() => {
                                    m(null), t({ newTab: d });
                                }, Fo);
                        }, [d, t]);
                        const f = (0, _e.useSpring)(jo),
                            h = (0, _e.useTransition)(
                                _,
                                Object.assign({}, Go, { leave: Object.assign({}, Go.leave, { onRest: () => a() }) }),
                            ),
                            b = (0, c.useCallback)(() => {
                                r();
                            }, [r]),
                            E = (0, c.useCallback)(() => {
                                p(!1);
                            }, []),
                            w = (0, c.useCallback)(() => {
                                _ ? p(!1) : i();
                            }, [i, _]);
                        var y;
                        return (
                            (y = w),
                            re(te.n.ESCAPE, y),
                            u().createElement(
                                'div',
                                { className: o()(Vo, s && Uo) },
                                u().createElement(
                                    Y.animated.div,
                                    { className: o()(qo, _ && Ko), style: f },
                                    s
                                        ? u().createElement(
                                              'div',
                                              { className: Qo },
                                              u().createElement(J, {
                                                  caption: ei.backDashboard_glow(),
                                                  type: 'back',
                                                  side: 'left',
                                                  onClick: w,
                                                  goto: ei.backDashboard_gray(),
                                              }),
                                          )
                                        : u().createElement(
                                              'div',
                                              { className: Jo },
                                              u().createElement(J, {
                                                  caption: ti,
                                                  type: 'close',
                                                  side: 'right',
                                                  onClick: w,
                                              }),
                                          ),
                                    u().createElement(
                                        'div',
                                        { className: Xo },
                                        u().createElement(ws, { onTabClick: v, onInfoClick: b }),
                                        u().createElement(
                                            Me,
                                            { className: Zo, type: 'slide', isOut: null !== d, duration: Fo },
                                            u().createElement(zo, null),
                                        ),
                                    ),
                                ),
                                h(
                                    (e, t) =>
                                        t &&
                                        u().createElement(
                                            Y.animated.div,
                                            { className: Yo, style: e },
                                            u().createElement(ze, { onClose: E }),
                                        ),
                                ),
                            )
                        );
                    };
                (window.onload = () => {
                    document.body.setAttribute('style', 'margin: 0;');
                }),
                    engine.whenReady.then(() => {
                        K().render(
                            u().createElement(U, null, u().createElement(f, null, u().createElement(ni, null))),
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
                    for (var [t, n, a] = deferred[l], s = !0, o = 0; o < t.length; o++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((s = !1), a < r && (r = a));
                    if (s) {
                        deferred.splice(l--, 1);
                        var i = n();
                        void 0 !== i && (e = i);
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
        (__webpack_require__.j = 589),
        (() => {
            var e = { 589: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [s, o, i] = n,
                        l = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (i) var c = i(__webpack_require__);
                    }
                    for (t && t(n); l < s.length; l++)
                        (r = s[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [994], () => __webpack_require__(2672));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
