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
                var a = n(472),
                    r = n(176);
                const i = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
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
            959: (e, t, n) => {
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
                    r = n(993);
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
            176: (e, t, n) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            993: (e, t, n) => {
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
            472: (e, t, n) => {
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
            138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => i });
                var a = n(959),
                    r = n(514);
                const i = { view: n(641), client: a, sound: r.ZP };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => o });
                var a = n(959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    o = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a });
            },
            112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => r });
                var a = n(472);
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
            641: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => M,
                        events: () => i.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => v,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => y,
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
                        setEventHandled: () => x,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => T,
                    });
                var a = n(722),
                    r = n(112),
                    i = n(538),
                    o = n(566);
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
                function x() {
                    return viewEnv.setEventHandled();
                }
                function L() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const M = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
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
            566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => c });
                const a = ['args'];
                const r = 2,
                    i = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
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
            521: (e, t, n) => {
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
            358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
                var a = n(138);
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
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
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
            364: (e, t, n) => {
                'use strict';
                n.d(t, { ry: () => w });
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
                var i = n(358);
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
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
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(521),
                    h = n(138);
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
                    p = () => f(l.CLOSE),
                    b = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var x = n(572);
                const L = r.instance,
                    S = {
                        DataTracker: i.Z,
                        ViewModel: x.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: u,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => f(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => f(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, r = R.invalid('resId'), i) => {
                            const o = h.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                c = s.x,
                                u = s.y,
                                d = s.width,
                                _ = s.height,
                                m = {
                                    x: h.O.view.pxToRem(c) + o.x,
                                    y: h.O.view.pxToRem(u) + o.y,
                                    width: h.O.view.pxToRem(d),
                                    height: h.O.view.pxToRem(_),
                                };
                            f(l.POP_OVER, {
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
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
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = S;
            },
            998: (e, t, n) => {
                'use strict';
                var a = n(179),
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
                var o = n(138);
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
                    g = ['children'];
                const v = (e) => {
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
                        x = r.extraSmallHeight,
                        L = { extraLarge: w, large: f, medium: p, small: b, extraSmall: x };
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
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && w) return t;
                            if (n.largeHeight && f) return t;
                            if (n.mediumHeight && p) return t;
                            if (n.smallHeight && b) return t;
                            if (n.extraSmallHeight && x) return t;
                        }
                    }
                    return null;
                };
                v.defaultProps = {
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
                (0, a.memo)(v);
                const E = (e) => {
                        const t = (0, a.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    w = ({ children: e }) => {
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
                        E(() => {
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
                var f = n(483),
                    p = n.n(f),
                    b = n(926),
                    x = n.n(b);
                let L, S, y;
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
                    })(S || (S = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(y || (y = {}));
                const M = () => {
                        const e = (0, a.useContext)(h),
                            t = e.width,
                            n = e.height,
                            r = ((e) => {
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
                                        return console.error('Unreachable media context resolution'), L.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return S.ExtraLarge;
                                    case e.largeWidth:
                                        return S.Large;
                                    case e.mediumWidth:
                                        return S.Medium;
                                    case e.smallWidth:
                                        return S.Small;
                                    case e.extraSmallWidth:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
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
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: n };
                    },
                    O = ['children', 'className'];
                function T() {
                    return (
                        (T = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        T.apply(null, arguments)
                    );
                }
                const k = {
                        [S.ExtraSmall]: '',
                        [S.Small]: x().SMALL_WIDTH,
                        [S.Medium]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH}`,
                        [S.Large]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH}`,
                        [S.ExtraLarge]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH} ${x().EXTRA_LARGE_WIDTH}`,
                    },
                    C = {
                        [y.ExtraSmall]: '',
                        [y.Small]: x().SMALL_HEIGHT,
                        [y.Medium]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT}`,
                        [y.Large]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT} ${x().EXTRA_LARGE_HEIGHT}`,
                    },
                    H = {
                        [L.ExtraSmall]: '',
                        [L.Small]: x().SMALL,
                        [L.Medium]: `${x().SMALL} ${x().MEDIUM}`,
                        [L.Large]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE}`,
                        [L.ExtraLarge]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE} ${x().EXTRA_LARGE}`,
                    },
                    A = (e) => {
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
                        const i = M(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return r().createElement('div', T({ className: p()(n, k[o], C[s], H[l]) }, a), t);
                    },
                    P = ['children'];
                const D = (e) => {
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
                        })(e, P);
                    return r().createElement(w, null, r().createElement(A, n, t));
                };
                var W = n(493),
                    N = n.n(W);
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
                let U, G;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(U || (U = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(G || (G = {}));
                const F = ({
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
                        f = E[1],
                        b = (0, a.useState)(!1),
                        x = b[0],
                        L = b[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                w && null !== v.current && !v.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [w]),
                        (0, a.useEffect)(() => {
                            f(n);
                        }, [n]),
                        r().createElement(
                            'div',
                            {
                                ref: v,
                                className: p()(
                                    B.base,
                                    B[`base__${i}`],
                                    o && B.base__disabled,
                                    t && B[`base__${t}`],
                                    w && B.base__focus,
                                    x && B.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== l && I(l), u && u(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    o || (m && m(e), L(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== c && I(c),
                                        _ && _(e),
                                        n && (o || (v.current && (v.current.focus(), f(!0)))),
                                        L(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (h && h(e), L(!1));
                                },
                                onClick: function (e) {
                                    o || (g && g(e));
                                },
                            },
                            i !== U.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: B.back }),
                                    r().createElement('span', { className: B.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: p()(B.state, B.state__default) },
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
                F.defaultProps = { type: U.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const $ = F,
                    j = {
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
                    z = [
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
                function V() {
                    return (
                        (V = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        V.apply(null, arguments)
                    );
                }
                class q extends r().PureComponent {
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
                                })(e, z)),
                            m = p()(j.base, j[`base__${o}`], j[`base__${i}`], null == s ? void 0 : s.base),
                            h = p()(j.icon, j[`icon__${o}`], j[`icon__${i}`], null == s ? void 0 : s.icon),
                            g = p()(j.glow, null == s ? void 0 : s.glow),
                            v = p()(j.caption, j[`caption__${o}`], null == s ? void 0 : s.caption),
                            E = p()(j.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            V(
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
                            'info' !== o && r().createElement('div', { className: j.shine }),
                            r().createElement('div', { className: h }, r().createElement('div', { className: g })),
                            r().createElement('div', { className: v }, t),
                            a && r().createElement('div', { className: E }, a),
                        );
                    }
                }
                q.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var K = n(521);
                n(364);
                const Y = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function X(e = K.n.NONE, t = Y, n = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== K.n.NONE)
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
                var Z = n(403);
                function Q() {}
                function J() {
                    return !1;
                }
                console.log;
                var ee = n(174);
                function te(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return ne(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? ne(e, t)
                                          : void 0
                                );
                            }
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
                function ne(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const ae = (e) => (0 === e ? window : window.subViews.get(e));
                const re = ((e, t) => {
                        const n = (0, a.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: s, children: l, mocks: c }) {
                                const u = (0, a.useRef)([]),
                                    d = (n, a, r) => {
                                        var i;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = ae,
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
                                                        for (var e, n = te(r.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(a),
                                            l =
                                                'real' === n
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (i = null == r ? void 0 : r.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == r ? void 0 : r.getter(e)) : l.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            _ = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : c(e),
                                                            r = ee.LO.box(a, { equals: J });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, ee.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : c(e),
                                                            r = ee.LO.box(a, { equals: J });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, ee.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = c(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = ee.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, ee.aD)((t) => {
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
                                                                    (e, [t, n]) => ((e[n] = ee.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, ee.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                o[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: n, model: _, externalModel: l, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === n && r ? r.controls(m) : t(m),
                                            externalModel: l,
                                            mode: n,
                                        };
                                    },
                                    _ = (0, a.useRef)(!1),
                                    m = (0, a.useState)(i),
                                    h = m[0],
                                    g = m[1],
                                    v = (0, a.useState)(() => d(i, s, c)),
                                    E = v[0],
                                    w = v[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        _.current ? w(d(h, s, c)) : (_.current = !0);
                                    }, [c, h, s]),
                                    (0, a.useEffect)(() => {
                                        g(i);
                                    }, [i]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            E.externalModel.dispose(), u.current.forEach((e) => e());
                                        },
                                        [E],
                                    ),
                                    r().createElement(n.Provider, { value: E }, l)
                                );
                            },
                            () => (0, a.useContext)(n),
                        ];
                    })(Q, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        confirm: e.createCallbackNoArgs('onLeaveMode'),
                    })),
                    ie = re[0],
                    oe = re[1],
                    se = 'App_base_ea',
                    le = 'App_closeButton_b6',
                    ce = 'App_content_3b',
                    ue = 'App_modeIcon_9f',
                    de = 'App_title_eb',
                    _e = 'App_alert_87',
                    me = 'App_alertIcon_53',
                    he = 'App_divider_e3',
                    ge = 'App_actions_c3',
                    ve = 'App_button_3c',
                    Ee = R.strings.winback.winbackLeaveModeDialogView,
                    we = (0, Z.Pi)(() => {
                        const e = oe().controls;
                        var t;
                        return (
                            (t = e.close),
                            X(K.n.ESCAPE, t),
                            r().createElement(
                                'div',
                                { className: se },
                                r().createElement(
                                    'div',
                                    { className: le },
                                    r().createElement(q, {
                                        caption: Ee.buttons.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: e.close,
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: ce },
                                    r().createElement('div', { className: ue }),
                                    r().createElement('div', { className: de }, Ee.title()),
                                    r().createElement(
                                        'div',
                                        { className: _e },
                                        r().createElement('span', { className: me }),
                                        Ee.alert(),
                                    ),
                                    r().createElement('div', { className: he }),
                                    r().createElement(
                                        'div',
                                        { className: ge },
                                        r().createElement(
                                            $,
                                            { size: G.medium, mixClass: ve, type: U.primary, onClick: e.confirm },
                                            Ee.buttons.confirm(),
                                        ),
                                        r().createElement(
                                            $,
                                            { size: G.medium, mixClass: ve, type: U.secondary, onClick: e.close },
                                            Ee.buttons.cancel(),
                                        ),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    N().render(
                        r().createElement(ie, null, r().createElement(D, null, r().createElement(we, null))),
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
        (__webpack_require__.j = 768),
        (() => {
            var e = { 768: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [241], () => __webpack_require__(998));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
