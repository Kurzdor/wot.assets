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
            2472: (e, t, u) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            5840: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => h });
                var n = {};
                u.r(n),
                    u.d(n, { mouse: () => _, off: () => d, on: () => l, onResize: () => i, onScaleUpdated: () => o });
                var a = {};
                u.r(a),
                    u.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => A,
                        getSize: () => g,
                        graphicsQuality: () => F,
                        playSound: () => E,
                        setRTPC: () => m,
                    });
                var s = u(2472);
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const i = (0, s.E)('clientResized'),
                    o = (0, s.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    d = (e, t) => engine.off(e, t),
                    c = { down: (0, s.E)('mousedown'), up: (0, s.E)('mouseup'), move: (0, s.E)('mousemove') },
                    _ = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && r(!1);
                        }
                        function u() {
                            e.enabled && r(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', u))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', u))
                                : r(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const s = `mouse${t}`,
                                            r = c[t]((e) => u([e, 'outside']));
                                        function i(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(s, i),
                                            n(),
                                            () => {
                                                a &&
                                                    (r(),
                                                    window.removeEventListener(s, i),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(u)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                (e.enabled = !1), n();
                            },
                            enable() {
                                (e.enabled = !0), n();
                            },
                            enableOutside() {
                                e.enabled && r(!0);
                            },
                            disableOutside() {
                                e.enabled && r(!1);
                            },
                        });
                    })();
                function E(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function m(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const F = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    D = Object.keys(C).reduce((e, t) => ((e[t] = () => E(C[t])), e), {}),
                    p = { play: Object.assign({}, D, { sound: E }), setRTPC: m },
                    h = { view: u(2031), client: a, sound: p };
            },
            2031: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => g,
                        addPreloadTexture: () => _,
                        children: () => n,
                        displayStatus: () => r,
                        displayStatusIs: () => S,
                        events: () => o,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => P,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => m,
                        getDisplayStatus: () => I,
                        getScale: () => h,
                        getSize: () => F,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => T,
                        isFocused: () => v,
                        pxToRem: () => B,
                        remToPx: () => b,
                        resize: () => C,
                        sendEvent: () => c,
                        setAnimateWindow: () => f,
                        setEventHandled: () => w,
                        setInputPaddingsRem: () => E,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => x,
                    });
                var n = {};
                function a(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function s(e, t, u) {
                    return `url(${a(e, t, u)})`;
                }
                u.r(n), u.d(n, { getBgUrl: () => s, getTextureUrl: () => a });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
                var i = u(2472);
                const o = {
                        onTextureFrozen: (0, i.E)('self.onTextureFrozen'),
                        onTextureReady: (0, i.E)('self.onTextureReady'),
                        onDomBuilt: (0, i.E)('self.onDomBuilt'),
                        onLoaded: (0, i.E)('self.onLoaded'),
                        onDisplayChanged: (0, i.E)('self.onShowingStatusChanged'),
                        onFocusUpdated: (0, i.E)('self.onFocusChanged'),
                        children: {
                            onAdded: (0, i.E)('children.onAdded'),
                            onLoaded: (0, i.E)('children.onLoaded'),
                            onRemoved: (0, i.E)('children.onRemoved'),
                            onAttached: (0, i.E)('children.onAttached'),
                            onTextureReady: (0, i.E)('children.onTextureReady'),
                            onRequestPosition: (0, i.E)('children.requestPosition'),
                        },
                    },
                    l = ['args'],
                    d = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (u = s[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, l);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    c = {
                        close(e) {
                            d('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            d(64);
                        },
                        move(e) {
                            d(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function _(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function m(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function g(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function C(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function D(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function w() {
                    return viewEnv.setEventHandled();
                }
                function T() {
                    return viewEnv.isEventHandled();
                }
                function P() {
                    viewEnv.forceTriggerMouseMove();
                }
                function I() {
                    return viewEnv.getShowingStatus();
                }
                const S = Object.keys(r).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r[t]), e), {}),
                    R = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            5521: (e, t, u) => {
                'use strict';
                let n, a;
                u.d(t, { n: () => n }),
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
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => s });
                var n = u(5840);
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
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = n.O.view.addModelObserver(e, u, a);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(s) : (this._views[u] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
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
            9916: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => s.Z, B3: () => l, Z5: () => r.Z5, B0: () => i, ry: () => C });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
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
                        const u = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                var s = u(1358),
                    r = u(8613);
                let i;
                var o;
                ((o = i || (i = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    m = u(5840);
                const g = ['args'];
                function A(e, t, u, n, a, s, r) {
                    try {
                        var i = e[s](r),
                            o = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                        u = arguments;
                                    return new Promise(function (n, a) {
                                        var s = e.apply(t, u);
                                        function r(e) {
                                            A(s, n, a, r, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(s, n, a, r, i, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    D = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (u = s[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    p = () => D(i.CLOSE),
                    h = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var B = u(7572);
                const b = a.instance,
                    f = {
                        DataTracker: s.Z,
                        ViewModel: B.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: d,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => D(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            D(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), s) => {
                            const r = m.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                d = o.y,
                                c = o.width,
                                _ = o.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + r.x,
                                    y: m.O.view.pxToRem(d) + r.y,
                                    width: m.O.view.pxToRem(c),
                                    height: m.O.view.pxToRem(_),
                                };
                            D(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: F(E),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => h(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, p);
                        },
                        handleViewEvent: D,
                        onBindingsReady: C,
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
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < a.length; t++) u[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => s, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    s = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            7720: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n), u.d(n, { p: () => Su });
                var a = u(6179),
                    s = u.n(a);
                const r = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var i = u(5840);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function d(e, t, u) {
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
                        })(e, u),
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
                        })(t, u),
                        s = Math.min(n, a);
                    return {
                        extraLarge: s === u.extraLarge.weight,
                        large: s === u.large.weight,
                        medium: s === u.medium.weight,
                        small: s === u.small.weight,
                        extraSmall: s === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: a === u.extraLarge.weight,
                        largeHeight: a === u.large.weight,
                        mediumHeight: a === u.medium.weight,
                        smallHeight: a === u.small.weight,
                        extraSmallHeight: a === u.extraSmall.weight,
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
                const c = i.O.client.getSize('rem'),
                    _ = c.width,
                    E = c.height,
                    m = Object.assign({ width: _, height: E }, d(_, E, o)),
                    g = (0, a.createContext)(m),
                    A = ['children'],
                    F = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (u = s[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, A);
                        const n = (0, a.useContext)(g),
                            s = n.extraLarge,
                            i = n.large,
                            o = n.medium,
                            l = n.small,
                            d = n.extraSmall,
                            c = n.extraLargeWidth,
                            _ = n.largeWidth,
                            E = n.mediumWidth,
                            m = n.smallWidth,
                            F = n.extraSmallWidth,
                            C = n.extraLargeHeight,
                            D = n.largeHeight,
                            p = n.mediumHeight,
                            h = n.smallHeight,
                            B = n.extraSmallHeight,
                            b = { extraLarge: C, large: D, medium: p, small: h, extraSmall: B };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && s) return t;
                            if (u.large && i) return t;
                            if (u.medium && o) return t;
                            if (u.small && l) return t;
                            if (u.extraSmall && d) return t;
                        } else {
                            if (u.extraLargeWidth && c) return r(t, u, b);
                            if (u.largeWidth && _) return r(t, u, b);
                            if (u.mediumWidth && E) return r(t, u, b);
                            if (u.smallWidth && m) return r(t, u, b);
                            if (u.extraSmallWidth && F) return r(t, u, b);
                            if (
                                !(
                                    u.extraLargeWidth ||
                                    u.largeWidth ||
                                    u.mediumWidth ||
                                    u.smallWidth ||
                                    u.extraSmallWidth
                                )
                            ) {
                                if (u.extraLargeHeight && C) return t;
                                if (u.largeHeight && D) return t;
                                if (u.mediumHeight && p) return t;
                                if (u.smallHeight && h) return t;
                                if (u.extraSmallHeight && B) return t;
                            }
                        }
                        return null;
                    };
                (F.defaultProps = {
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
                    (0, a.memo)(F);
                const C = ({ children: e }) => {
                    const t = (0, a.useContext)(g),
                        u = (0, a.useState)(t),
                        n = u[0],
                        r = u[1],
                        l = (0, a.useCallback)((e, t) => {
                            const u = i.O.view.pxToRem(e),
                                n = i.O.view.pxToRem(t);
                            r(Object.assign({ width: u, height: n }, d(u, n, o)));
                        }, []),
                        c = (0, a.useCallback)(() => {
                            const e = i.O.client.getSize('px');
                            l(e.width, e.height);
                        }, [l]);
                    ((e) => {
                        const t = (0, a.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        i.O.client.events.on('clientResized', l), i.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                i.O.client.events.off('clientResized', l),
                                    i.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [l, c],
                        );
                    const _ = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                    return s().createElement(g.Provider, { value: _ }, e);
                };
                var D = u(6483),
                    p = u.n(D),
                    h = u(926),
                    B = u.n(h);
                let b, f, v;
                !(function (e) {
                    (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const w = () => {
                        const e = (0, a.useContext)(g),
                            t = e.width,
                            u = e.height,
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
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case e.largeWidth:
                                        return f.Large;
                                    case e.mediumWidth:
                                        return f.Medium;
                                    case e.smallWidth:
                                        return f.Small;
                                    case e.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case e.largeHeight:
                                        return v.Large;
                                    case e.mediumHeight:
                                        return v.Medium;
                                    case e.smallHeight:
                                        return v.Small;
                                    case e.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: s, mediaHeight: r, remScreenWidth: t, remScreenHeight: u };
                    },
                    T = ['children', 'className'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const I = {
                        [f.ExtraSmall]: '',
                        [f.Small]: B().SMALL_WIDTH,
                        [f.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [f.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [v.ExtraSmall]: '',
                        [v.Small]: B().SMALL_HEIGHT,
                        [v.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [v.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [b.ExtraSmall]: '',
                        [b.Small]: B().SMALL,
                        [b.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [b.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [b.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (u = s[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, T);
                        const a = w(),
                            r = a.mediaWidth,
                            i = a.mediaHeight,
                            o = a.mediaSize;
                        return s().createElement('div', P({ className: p()(u, I[r], S[i], x[o]) }, n), t);
                    },
                    y = ['children'],
                    O = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (u = s[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, y);
                        return s().createElement(C, null, s().createElement(L, u, t));
                    };
                var N = u(493),
                    k = u.n(N);
                function M(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const H = {
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
                    G = [
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
                function U() {
                    return (
                        (U =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        U.apply(this, arguments)
                    );
                }
                class q extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && M(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && M(this.props.soundClick);
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
                            u = e.onClick,
                            n = e.goto,
                            a = e.side,
                            r = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            d = e.onMouseDown,
                            c = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (u = s[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, G)),
                            E = p()(H.base, H[`base__${r}`], H[`base__${a}`], null == i ? void 0 : i.base),
                            m = p()(H.icon, H[`icon__${r}`], H[`icon__${a}`], null == i ? void 0 : i.icon),
                            g = p()(H.glow, null == i ? void 0 : i.glow),
                            A = p()(H.caption, H[`caption__${r}`], null == i ? void 0 : i.caption),
                            F = p()(H.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            U(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== r && s().createElement('div', { className: H.shine }),
                            s().createElement('div', { className: m }, s().createElement('div', { className: g })),
                            s().createElement('div', { className: A }, t),
                            n && s().createElement('div', { className: F }, n),
                        );
                    }
                }
                q.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Q = u(5521),
                    $ = u(9916);
                const W = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function j(e = Q.n.NONE, t = W, u = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== Q.n.NONE)
                            return (
                                window.addEventListener('keydown', a, u),
                                () => {
                                    window.removeEventListener('keydown', a, u);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), t(a), u && a.stopPropagation();
                            }
                        }
                    }, [t, e, u, n]);
                }
                var V = u(3403),
                    z = u(7030);
                const Y = R.images.fun_random.gui.maps.icons.feature.asset_packs,
                    X = (e, t) => ('string' == typeof t ? e.$dyn(t) : t.reduce((e, t) => e.$dyn(t), e)),
                    K = (e, { poFileName: t, assetsPointer: u, isSubMode: n } = {}) => {
                        const a = t ? R.strings.$dyn(t) : R.strings.fun_random;
                        if (!a || 'string' == typeof a) throw Error("Incorrect 'poFileName' argument");
                        const s = n ? 'sub_modes' : 'modes',
                            r = (u ? a.$dyn(s)[u] : a) || a.$dyn(s)[void 0];
                        return e
                            ? { staticTexts: X(a, e), dynamicTexts: X(r, e) }
                            : { staticTexts: a, dynamicTexts: r };
                    },
                    Z = (e, t) => {
                        var u;
                        const n = t ? 'sub_modes' : 'modes',
                            a = Y.$dyn(n);
                        return null != (u = a.$dyn(e)) ? u : a.$dyn('undefined');
                    },
                    J = {
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
                                u = Math.pow;
                            return e < 0.5 ? (1 - t(1 - u(2 * e, 2))) / 2 : (t(1 - u(-2 * e + 2, 2)) + 1) / 2;
                        },
                        easeOutBack: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                        bezier: (e, t, u, n) => (a) =>
                            (1 - a) * (1 - a) * (1 - a) * e +
                            3 * (1 - a) * (1 - a) * a * t +
                            3 * (1 - a) * a * a * u +
                            a * a * a * n,
                    },
                    ee = (e, t) => {
                        const u = [];
                        for (let n = 0; n < e; n++) u.push(t(n));
                        return u;
                    };
                var te = u(9174),
                    ue = u(3946);
                let ne, ae, se, re, ie, oe, le, de, ce, _e, Ee;
                !(function (e) {
                    (e.Inactive = 'inactive'),
                        (e.Active = 'active'),
                        (e.Detached = 'detached'),
                        (e.Detaching = 'detaching'),
                        (e.DetachingActive = 'detaching_active'),
                        (e.Deactivating = 'deactivating'),
                        (e.Activating = 'activating');
                })(ne || (ne = {})),
                    (function (e) {
                        (e.None = 'none'), (e.HidingGlow = 'hiding_glow'), (e.ShowingGlow = 'showing_glow');
                    })(ae || (ae = {})),
                    (function (e) {
                        (e.EvFepCounterChange = 'ev_fep_counter_change'),
                            (e.EvFepTearOffCard = 'ev_fep_tear_off_card'),
                            (e.EvFepCongratulate = 'ev_fep_congratulate'),
                            (e.EvFepCardStartMove = 'ev_fep_card_start_move'),
                            (e.EvFepCardStopMove = 'ev_fep_card_stop_move'),
                            (e.EvFepCardChange = 'ev_fep_card_change'),
                            (e.EvFepInfStepTransition = 'ev_fep_inf_step_transition'),
                            (e.RtpcExtFepWheelRotation = 'RTPC_ext_fep_wheel_rotation');
                    })(se || (se = {})),
                    (function (e) {
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
                    })(re || (re = {})),
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
                    })(ie || (ie = {})),
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
                    })(oe || (oe = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(le || (le = {})),
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
                    })(de || (de = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ce || (ce = {})),
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
                    })(_e || (_e = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(Ee || (Ee = {}));
                const me = ({ format: e, value: t }) => {
                        const u = ((e, t = 'integral') => {
                            let u;
                            return (
                                (u = 'gold' === t ? $.B3.GOLD : $.B3.INTEGRAL),
                                void 0 === e ? '' : $.Z5.getNumberFormat(e, u)
                            );
                        })(t, e);
                        return u ? s().createElement('span', null, u) : null;
                    },
                    ge = [
                        re.Items,
                        re.Equipment,
                        re.Xp,
                        re.XpFactor,
                        re.Blueprints,
                        re.BlueprintsAny,
                        re.Goodies,
                        re.Berths,
                        re.Slots,
                        re.Tokens,
                        re.CrewSkins,
                        re.CrewBooks,
                        re.Customizations,
                        re.CreditsFactor,
                        re.TankmenXp,
                        re.TankmenXpFactor,
                        re.FreeXpFactor,
                        re.BattleToken,
                        re.PremiumUniversal,
                        re.NaturalCover,
                        re.BpCoin,
                        re.BattlePassSelectToken,
                        re.BattlaPassFinalAchievement,
                        re.BattleBadge,
                        re.BonusX5,
                        re.CrewBonusX3,
                        re.NewYearInvoice,
                        re.EpicSelectToken,
                        re.WtHunterLootbox,
                        re.WtBossLootbox,
                        re.WtProgressPoints,
                        re.Comp7TokenWeeklyReward,
                        re.DeluxeGift,
                        re.BattleBoosterGift,
                        re.OptionalDevice,
                    ],
                    Ae = [re.Gold, re.Credits, re.Crystal, re.FreeXp],
                    Fe = [re.BattlePassPoints, re.EquipCoin],
                    Ce = [re.PremiumPlus, re.Premium],
                    De = ['engravings', 'backgrounds'],
                    pe = ['engraving', 'background'],
                    he = (e, t = oe.Small) => {
                        const u = e.name,
                            n = e.type,
                            a = e.value,
                            s = e.icon,
                            r = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case oe.S600x450:
                                        return 'c_600x450';
                                    case oe.S400x300:
                                        return 'c_400x300';
                                    case oe.S296x222:
                                        return 'c_296x222';
                                    case oe.S232x174:
                                        return 'c_232x174';
                                    case oe.Big:
                                        return 'c_80x80';
                                    case oe.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
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
                                return ((e, t, u) => {
                                    const n = De[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            s = a.$dyn(u);
                                        return s ? `${s}` : `${a.$dyn(pe[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, t, s);
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    Be = (e, t, u) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            u,
                        );
                    },
                    be = [oe.Small, oe.Big];
                let fe;
                function ve(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                !(function (e) {
                    (e.DISABLED = 'disabled'),
                        (e.ACTIVE_FINAL = 'activeFinal'),
                        (e.ACTIVE_RESETTABLE = 'activeResettable'),
                        (e.COMPLETED_FINAL = 'completedFinal'),
                        (e.COMPLETED_RESETTABLE = 'completedResettable'),
                        (e.ACTIVE_INFINITE_RESETTABLE = 'activeInfiniteResettable'),
                        (e.ACTIVE_INFINITE_FINAL = 'activeInfiniteFinal');
                })(fe || (fe = {}));
                const we = ve;
                function Te(e, t) {
                    for (let u = 0; u < e.length; u++) if (t(we(e, u), u, e)) return u;
                }
                const Pe = (e, t) => {
                        return (
                            (u = e),
                            (n = (e) => {
                                return {
                                    name: e.name,
                                    image: he(e, t),
                                    value: e.value,
                                    special: de[e.overlayType],
                                    valueType:
                                        ((u = e.name),
                                        ge.includes(u)
                                            ? le.MULTI
                                            : Ae.includes(u)
                                              ? le.CURRENCY
                                              : Fe.includes(u)
                                                ? le.NUMBER
                                                : Ce.includes(u)
                                                  ? le.PREMIUM_PLUS
                                                  : le.STRING),
                                    tooltipArgs: Be({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                };
                                var u;
                            }),
                            Array.isArray(u) ? u.map(n) : u.map((e, t, u) => n(null == e ? void 0 : e.value))
                        );
                        var u, n;
                    },
                    Ie = {
                        [fe.DISABLED]: fe.DISABLED,
                        [fe.ACTIVE_FINAL]: fe.ACTIVE_FINAL,
                        [fe.ACTIVE_RESETTABLE]: fe.ACTIVE_RESETTABLE,
                        [fe.ACTIVE_INFINITE_FINAL]: fe.ACTIVE_FINAL,
                        [fe.ACTIVE_INFINITE_RESETTABLE]: fe.ACTIVE_RESETTABLE,
                        [fe.COMPLETED_FINAL]: fe.ACTIVE_FINAL,
                        [fe.COMPLETED_RESETTABLE]: fe.ACTIVE_RESETTABLE,
                    },
                    Se = (e) => ({
                        isActive: [fe.ACTIVE_FINAL, fe.ACTIVE_RESETTABLE].includes(e),
                        isInfinite: [fe.ACTIVE_INFINITE_FINAL, fe.ACTIVE_INFINITE_RESETTABLE].includes(e),
                        isCompleted: [fe.COMPLETED_FINAL, fe.COMPLETED_RESETTABLE].includes(e),
                        isResettable: [
                            fe.ACTIVE_RESETTABLE,
                            fe.COMPLETED_RESETTABLE,
                            fe.ACTIVE_INFINITE_RESETTABLE,
                        ].includes(e),
                    }),
                    Re = (e, t, u) => Math.min(u, Math.max(t, e)),
                    xe = (e, t, u) => Math.min(t, Math.max(u, e));
                let Le, ye;
                !(function (e) {
                    (e[(e.Idle = 0)] = 'Idle'),
                        (e[(e.Scrolling = 1)] = 'Scrolling'),
                        (e[(e.Dragging = 2)] = 'Dragging'),
                        (e[(e.InertialMovement = 3)] = 'InertialMovement'),
                        (e[(e.FirstAnimation = 4)] = 'FirstAnimation'),
                        (e[(e.Normalization = 5)] = 'Normalization'),
                        (e[(e.ShowProgress = 6)] = 'ShowProgress'),
                        (e[(e.FinalAnimation = 7)] = 'FinalAnimation'),
                        (e[(e.Blocked = 8)] = 'Blocked');
                })(Le || (Le = {})),
                    (function (e) {
                        (e[(e.Init = 0)] = 'Init'),
                            (e[(e.Detaching = 1)] = 'Detaching'),
                            (e[(e.Scroll = 2)] = 'Scroll'),
                            (e[(e.Finish = 3)] = 'Finish');
                    })(ye || (ye = {}));
                const Oe = [Le.FirstAnimation, Le.ShowProgress, Le.FinalAnimation, Le.Blocked];
                let Ne;
                !(function (e) {
                    (e[(e.RunCounter = 0)] = 'RunCounter'),
                        (e[(e.Detach = 1)] = 'Detach'),
                        (e[(e.HideGlow = 2)] = 'HideGlow'),
                        (e[(e.DeactivateCurrent = 3)] = 'DeactivateCurrent'),
                        (e[(e.ActivateNext = 4)] = 'ActivateNext'),
                        (e[(e.ShowGlow = 5)] = 'ShowGlow'),
                        (e[(e.Scroll = 6)] = 'Scroll'),
                        (e[(e.FinishActivating = 7)] = 'FinishActivating'),
                        (e[(e.Finish = 8)] = 'Finish');
                })(Ne || (Ne = {}));
                const ke = [
                        { delay: 100, duration: 400, action: Ne.RunCounter },
                        { duration: 300, action: Ne.HideGlow },
                    ],
                    Me = [
                        { delay: 100, duration: 700, action: Ne.Detach },
                        { delay: 300, action: Ne.DeactivateCurrent },
                        { duration: 300, action: Ne.ActivateNext },
                    ],
                    He = [{ duration: 500, action: Ne.Scroll }],
                    Ge = [{ action: Ne.FinishActivating }],
                    Ue = [{ delay: 200, action: Ne.Finish }],
                    qe = [{ duration: 300, action: Ne.ShowGlow }],
                    Qe = {
                        [Le.Idle]: {},
                        [Le.Scrolling]: { duration: 400, easing: J.linear },
                        [Le.Dragging]: { duration: 400, easing: J.easeOutQuint },
                        [Le.InertialMovement]: { duration: 800, easing: J.linear },
                        [Le.FirstAnimation]: { duration: 1e4, easing: J.easeInOutQuint },
                        [Le.Normalization]: { duration: 1e3, easing: J.easeOutQuint },
                        [Le.ShowProgress]: { duration: 500, easing: J.easeOutQuint },
                        [Le.FinalAnimation]: { duration: 2e3, easing: J.easeInOutQuint },
                        [Le.Blocked]: { duration: 0 },
                    },
                    $e = () => {
                        const e = { rotation: te.LO.box(0), changeTime: te.LO.box(new Date()), filled: te.LO.box(!1) },
                            t = (0, te.aD)((t, u) => {
                                e.rotation.set(t), e.changeTime.set(u), e.filled.set(!0);
                            }),
                            u = (0, te.aD)(() => {
                                e.filled.set(!1);
                            });
                        return Object.assign({}, e, { setRotation: t, clear: u });
                    },
                    We = (e, t) => {
                        const u = (e) =>
                                (0, te.aD)((...u) => {
                                    if (t.userActionsAllowed.get()) return e(...u);
                                }),
                            n = (0, te.aD)((t) => {
                                e.state.set(t);
                            }),
                            a = (0, te.aD)(() => {
                                e.rotationStats.prev.clear(),
                                    e.rotationStats.last.setRotation(e.currentRotation.get(), new Date());
                            }),
                            s = (0, te.aD)((t) => {
                                e.rotationStats.prev.setRotation(
                                    e.rotationStats.last.rotation.get(),
                                    e.rotationStats.last.changeTime.get(),
                                ),
                                    e.rotationStats.last.setRotation(t, new Date()),
                                    e.currentRotation.set(t);
                            }),
                            r = (0, te.aD)((u) => {
                                e.targetRotation.set(xe(u, t.minRotation.get(), t.maxRotation.get()));
                            }),
                            o = (0, te.aD)(() => {
                                if (e.progress.finalCard.get() !== e.progress.currentCard.get()) {
                                    n(Le.ShowProgress);
                                    const u = -e.cardRotation.get() * e.progress.currentCard.get();
                                    s(xe(u, t.minRotation.get(), t.maxRotation.get()));
                                } else D[Ne.RunCounter](), n(Le.Idle);
                            }),
                            l = (0, te.aD)((u) => {
                                const a = (-e.cardRotation.get() * (u - 1)) / 2,
                                    s = xe(a, t.minRotation.get(), t.maxRotation.get());
                                e.currentRotation.get() === s
                                    ? (c(!0), n(Le.Blocked), i.O.sound.play.sound(se.EvFepCongratulate))
                                    : (n(Le.FinalAnimation), r(a));
                            }),
                            d = (0, te.aD)((u, a, i, l, d) => {
                                if (
                                    (e.cardsCount.set(u),
                                    e.progress.currentCard.set(a),
                                    e.progress.finalCard.set(i),
                                    e.progress.state.cards.push(
                                        ...ee(u, (e) => {
                                            return (
                                                (t = ((e, t, u) =>
                                                    u
                                                        ? ne.Detached
                                                        : e === t
                                                          ? ne.Active
                                                          : e > t
                                                            ? ne.Detached
                                                            : ne.Inactive)(a, e, d)),
                                                (u = ae.None),
                                                { state: te.LO.box(t), animation: te.LO.box(u) }
                                            );
                                            var t, u;
                                        }),
                                    ),
                                    l)
                                )
                                    s(-e.cardRotation.get() * t.maxRightCard.get()),
                                        n(Le.FirstAnimation),
                                        r(-e.cardRotation.get() * a);
                                else if (d) {
                                    const t = (-e.cardRotation.get() * (u - 1)) / 2;
                                    s(t), r(t), c(!0), n(Le.Blocked);
                                } else {
                                    const u = Re(a, t.minLeftCard.get(), t.maxRightCard.get());
                                    s(-e.cardRotation.get() * u),
                                        r(e.currentRotation.get()),
                                        a !== i ? o() : D[Ne.RunCounter]();
                                }
                            }),
                            c = (0, te.aD)((t) => {
                                e.assembled.set(t);
                            }),
                            _ = u((u) => {
                                const a = xe(
                                    e.targetRotation.get() - (e.cardRotation.get() * u) / -2,
                                    t.minRotation.get(),
                                    t.maxRotation.get(),
                                );
                                return n(Le.Scrolling), r(a), e.targetRotation.get();
                            }),
                            E = u((t) => {
                                e.dragging.speed.set(t);
                            }),
                            m = u((t) => {
                                e.state.set(Le.Dragging),
                                    e.dragging.lastMousePosition.set(t),
                                    e.dragging.speed.set(0),
                                    e.targetRotation.set(e.currentRotation.get());
                            }),
                            g = u(() => {
                                e.state.set(Le.InertialMovement), e.dragging.lastMousePosition.set(0);
                            }),
                            A = u((u, n) => {
                                e.state.get() === Le.Dragging &&
                                    (e.dragging.speed.set(
                                        (180 * Math.atan((n - e.dragging.lastMousePosition.get()) / u)) / Math.PI,
                                    ),
                                    e.dragging.lastMousePosition.set(n),
                                    e.targetRotation.set(
                                        xe(
                                            e.targetRotation.get() + e.dragging.speed.get(),
                                            t.minRotation.get(),
                                            t.maxRotation.get(),
                                        ),
                                    ));
                            }),
                            F = (0, te.aD)((t, u) => {
                                t >= 0 && t < e.progress.state.cards.length && e.progress.state.cards[t].state.set(u);
                            }),
                            C = (0, te.aD)((t, u) => {
                                t >= 0 &&
                                    t <= e.progress.state.cards.length &&
                                    e.progress.state.cards[t].animation.set(u);
                            }),
                            D = {
                                [Ne.RunCounter]: (0, te.aD)(() => {
                                    e.progress.state.runCounter.set(!0);
                                }),
                                [Ne.Detach]: (0, te.aD)(() => {
                                    F(e.progress.currentCard.get(), ne.DetachingActive),
                                        e.progress.animation.set(ye.Detaching);
                                }),
                                [Ne.HideGlow]: (0, te.aD)(() => {
                                    C(e.progress.currentCard.get(), ae.HidingGlow);
                                }),
                                [Ne.DeactivateCurrent]: (0, te.aD)(() => {
                                    F(e.progress.currentCard.get(), ne.Deactivating);
                                }),
                                [Ne.ActivateNext]: (0, te.aD)(() => {
                                    const t = e.progress.currentCard.get() + 1;
                                    F(t, ne.Activating), e.progress.currentCard.set(t);
                                }),
                                [Ne.ShowGlow]: (0, te.aD)(() => {
                                    C(e.progress.currentCard.get(), ae.ShowingGlow);
                                }),
                                [Ne.FinishActivating]: (0, te.aD)(() => {
                                    const t = e.progress.currentCard.get() - 1;
                                    F(t, ne.Detached);
                                }),
                                [Ne.Scroll]: (0, te.aD)(() => {
                                    if (
                                        (e.progress.animation.set(ye.Scroll),
                                        e.progress.currentCard.get() > t.minLeftCard.get())
                                    ) {
                                        const u = xe(
                                            -e.cardRotation.get() * e.progress.currentCard.get(),
                                            t.minRotation.get(),
                                            t.maxRotation.get(),
                                        );
                                        r(u);
                                    }
                                }),
                                [Ne.Finish]: (0, te.aD)(() => {
                                    e.progress.finalCard.get() < e.cardsCount.get() &&
                                        F(e.progress.finalCard.get(), ne.Active),
                                        e.progress.animation.set(ye.Finish),
                                        n(Le.Idle);
                                }),
                            };
                        return {
                            initCardsFan: d,
                            startRotation: a,
                            scroll: _,
                            runProgressionAnimation: o,
                            runFinalAnimation: l,
                            setAssembled: c,
                            setState: n,
                            setCurrentRotation: s,
                            setTargetRotation: r,
                            setDraggingSpeed: E,
                            startDragging: m,
                            stopDragging: g,
                            drag: A,
                            progress: D,
                        };
                    };
                function je() {}
                function Ve() {
                    return !1;
                }
                function ze(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                console.log;
                const Ye = (e) => (0 === e ? window : window.subViews.get(e)),
                    Xe = ((e, t) => {
                        const u = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: r, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    d = (e, u, n) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = Ye,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function s(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = a.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const r = (e) => {
                                                    const a = u(t),
                                                        s = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? s
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, s);
                                                };
                                                return {
                                                    subscribe: (u, s) => {
                                                        const o = 'string' == typeof s ? `${n}.${s}` : n,
                                                            l = i.O.view.addModelObserver(o, t, !0);
                                                        return a.set(l, u), e && u(r(s)), l;
                                                    },
                                                    readByPath: r,
                                                    createCallback: (e, t) => {
                                                        const u = r(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = r(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                u = (function (e, t) {
                                                                    var u =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (u) return (u = u.call(e)).next.bind(u);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (u = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return ze(e, t);
                                                                                var u = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === u &&
                                                                                        e.constructor &&
                                                                                        (u = e.constructor.name),
                                                                                    'Map' === u || 'Set' === u
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === u ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                u,
                                                                                            )
                                                                                          ? ze(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        u && (e = u);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = u()).done;

                                                        )
                                                            s(e.value, t);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(u),
                                            r =
                                                'real' === e
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            o = (t) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(t)) : r.readByPath(t),
                                            d = (e) => l.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const t = {
                                                        root: e.object(),
                                                        stages: e.array('stages'),
                                                        state: e.object('state'),
                                                        quests: e.array('condition.conditions', []),
                                                        status: e.object('state.status'),
                                                        condition: e.primitives(
                                                            [
                                                                'currentPoints',
                                                                'prevPoints',
                                                                'maximumPoints',
                                                                'title',
                                                                'text',
                                                                'conditionIcon',
                                                                'statusTimer',
                                                            ],
                                                            'condition',
                                                        ),
                                                        infiniteCondition: e.object('infiniteCondition'),
                                                        infiniteQuests: e.array('infiniteCondition.conditions'),
                                                        infiniteStage: e.object('infiniteStage'),
                                                    },
                                                    u = (0, ue.Om)(
                                                        (e) => {
                                                            const u = ve(t.quests.get(), e);
                                                            if (!u) throw new Error(`Unexpected quest index: ${e}`);
                                                            return Object.assign({}, u);
                                                        },
                                                        { equals: Ve },
                                                    ),
                                                    n = (0, ue.Om)(
                                                        () => {
                                                            const e = ve(t.infiniteQuests.get(), 0);
                                                            if (!e) throw new Error('Unexpected quest index: 0');
                                                            return Object.assign({}, e);
                                                        },
                                                        { equals: Ve },
                                                    ),
                                                    a = (0, ue.Om)(
                                                        (e, u, n = !1) => {
                                                            const a = n ? t.infiniteStage.get() : ve(t.stages.get(), e);
                                                            if (!a) throw new Error(`Unexpected card index: ${e}`);
                                                            const s = e + 1,
                                                                r = o.cardState(e);
                                                            return Object.assign({}, a, {
                                                                rewards: Pe(a.rewards, u),
                                                                cardNumber: s,
                                                                progressionState: r,
                                                            });
                                                        },
                                                        { equals: Ve },
                                                    ),
                                                    s = (0, ue.Om)(() => {
                                                        const e =
                                                            t.condition.currentPoints.get() ===
                                                            t.condition.maximumPoints.get()
                                                                ? t.stages.get().length
                                                                : 0;
                                                        return Te(t.stages.get(), (e) => !e.isCompleted) || e;
                                                    }),
                                                    r = (0, ue.Om)(() => {
                                                        const e = ve(t.stages.get(), 0);
                                                        if (e && e.maximumPoints > t.condition.prevPoints.get())
                                                            return 0;
                                                        const u = t.stages.get().length - 1;
                                                        return (
                                                            Te(
                                                                t.stages.get(),
                                                                (e) => e.maximumPoints > t.condition.prevPoints.get(),
                                                            ) || u
                                                        );
                                                    }),
                                                    i = (({ cardRotation: e, displayCardsCount: t }) => ({
                                                        cardRotation: te.LO.box(e),
                                                        displayCardsCount: te.LO.box(t),
                                                        cardsCount: te.LO.box(0),
                                                        state: te.LO.box(Le.Idle),
                                                        currentRotation: te.LO.box(0),
                                                        targetRotation: te.LO.box(0),
                                                        assembled: te.LO.box(!1),
                                                        rotationStats: { prev: $e(), last: $e() },
                                                        progress: {
                                                            currentCard: te.LO.box(0),
                                                            animation: te.LO.box(ye.Init),
                                                            finalCard: te.LO.box(0),
                                                            state: { runCounter: te.LO.box(!1), cards: [] },
                                                        },
                                                        dragging: {
                                                            lastMousePosition: te.LO.box(0),
                                                            speed: te.LO.box(0),
                                                        },
                                                    }))({ cardRotation: 10, displayCardsCount: 12 }),
                                                    o = ((e) => {
                                                        const t = (0, te.Fl)(() => (e.cardsCount.get() >= 5 ? 2 : 1)),
                                                            u = (0, te.Fl)(() =>
                                                                e.cardsCount.get() <= 3
                                                                    ? e.cardsCount.get() - 2
                                                                    : e.cardsCount.get() <= 5
                                                                      ? e.cardsCount.get() - 3
                                                                      : e.cardsCount.get() - 1,
                                                            ),
                                                            n = (0, te.Fl)(() =>
                                                                ee(e.cardsCount.get(), (t) => ({
                                                                    key: t,
                                                                    order: e.cardsCount.get() - t - 1,
                                                                })),
                                                            ),
                                                            a = (0, te.Fl)(() =>
                                                                Re(
                                                                    Math.round(
                                                                        (Math.abs(e.currentRotation.get()) /
                                                                            (e.cardRotation.get() *
                                                                                e.cardsCount.get())) *
                                                                            e.cardsCount.get(),
                                                                    ),
                                                                    t.get(),
                                                                    u.get(),
                                                                ),
                                                            ),
                                                            s = (0, te.Fl)(
                                                                () =>
                                                                    Math.max(0, Re(a.get(), t.get(), u.get())) -
                                                                    Math.ceil(e.displayCardsCount.get() / 2),
                                                            ),
                                                            r = (0, te.Fl)(
                                                                () =>
                                                                    Math.min(e.cardsCount.get(), a.get()) +
                                                                    Math.ceil(e.displayCardsCount.get() / 2),
                                                            ),
                                                            i = (0, te.Fl)(() => -e.cardRotation.get() * t.get()),
                                                            o = (0, te.Fl)(() => -e.cardRotation.get() * u.get()),
                                                            l = (0, te.Fl)(() =>
                                                                e.state.get() === Le.FirstAnimation
                                                                    ? Object.assign({}, Qe[Le.FirstAnimation], {
                                                                          duration: 150 * e.cardsCount.get(),
                                                                      })
                                                                    : Qe[e.state.get()],
                                                            ),
                                                            d = (0, te.Fl)(() => !Oe.includes(e.state.get())),
                                                            c = (0, te.Fl)(() => {
                                                                const u = [];
                                                                u.push(...ke);
                                                                for (
                                                                    let n = e.progress.currentCard.get();
                                                                    n < e.progress.finalCard.get();
                                                                    n++
                                                                ) {
                                                                    const e = n >= t.get();
                                                                    u.push(...Me), e && u.push(...He), u.push(...Ge);
                                                                }
                                                                return (
                                                                    e.progress.finalCard.get() < e.cardsCount.get() &&
                                                                        u.push(...qe),
                                                                    u.push(...Ue),
                                                                    u
                                                                );
                                                            }),
                                                            _ = (0, ue.Om)((t) =>
                                                                e.progress.state.cards[t]
                                                                    ? {
                                                                          state: e.progress.state.cards[t].state.get(),
                                                                          animation:
                                                                              e.progress.state.cards[t].animation.get(),
                                                                      }
                                                                    : null,
                                                            ),
                                                            E = (0, te.Fl)(() => {
                                                                if (
                                                                    !e.rotationStats.last.filled.get() ||
                                                                    !e.rotationStats.prev.filled.get()
                                                                )
                                                                    return;
                                                                const t =
                                                                        e.rotationStats.last.rotation.get() -
                                                                        e.rotationStats.prev.rotation.get(),
                                                                    u =
                                                                        e.rotationStats.last.changeTime
                                                                            .get()
                                                                            .getTime() -
                                                                        e.rotationStats.prev.changeTime.get().getTime();
                                                                var n, a, s;
                                                                return 0 !== u
                                                                    ? ((a = 0.4),
                                                                      ((s = t / u) < (n = -0.4) ? n : s > a ? a : s) /
                                                                          -0.4)
                                                                    : void 0;
                                                            }),
                                                            m = (0, te.Fl)(() => e.state.get() !== Le.Blocked),
                                                            g = (0, te.Fl)(() => e.cardsCount.get() >= 6),
                                                            A = (0, te.Fl)(() =>
                                                                d.get() && g.get()
                                                                    ? e.state.get() === Le.Dragging
                                                                        ? 'grabbing'
                                                                        : 'grab'
                                                                    : 'default',
                                                            );
                                                        return {
                                                            velocity: E,
                                                            minLeftCard: t,
                                                            maxRightCard: u,
                                                            cardsMap: n,
                                                            currentCard: a,
                                                            minVisibleCard: s,
                                                            maxVisibleCard: r,
                                                            minRotation: i,
                                                            maxRotation: o,
                                                            animationConfig: l,
                                                            userActionsAllowed: d,
                                                            progressSchedule: c,
                                                            cardState: _,
                                                            soundEnabled: m,
                                                            cursor: A,
                                                        };
                                                    })(i),
                                                    l = (0, ue.Om)(
                                                        () =>
                                                            t.condition.prevPoints.get() <
                                                                t.condition.currentPoints.get() &&
                                                            t.condition.currentPoints.get() ===
                                                                t.condition.maximumPoints.get(),
                                                    ),
                                                    d = (0, ue.Om)(() =>
                                                        (!l() &&
                                                            t.condition.currentPoints.get() ===
                                                                t.condition.maximumPoints.get()) ||
                                                        i.progress.animation.get() === ye.Finish
                                                            ? t.state.get().status
                                                            : Ie[t.state.get().status],
                                                    ),
                                                    c = (0, ue.Om)(() => {
                                                        const e = l(),
                                                            t = d(),
                                                            u = Se(t).isCompleted;
                                                        return {
                                                            completedWithAnimation: e && u,
                                                            completedNoAnimation: !e && u,
                                                        };
                                                    });
                                                return Object.assign({}, t, {
                                                    cardsFan: { model: i, computes: o },
                                                    computes: {
                                                        quest: u,
                                                        card: a,
                                                        cardActiveIndex: s,
                                                        progressAnimationStartFrom: r,
                                                        infiniteQuest: n,
                                                        pageStatus: d,
                                                        needChangePage: l,
                                                        finalAnimationStatus: c,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: r,
                                                observableModel: {
                                                    array: (t, u) => {
                                                        const n = null != u ? u : o(t),
                                                            a = te.LO.box(n, { equals: Ve });
                                                        return (
                                                            'real' === e &&
                                                                r.subscribe(
                                                                    (0, te.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, u) => {
                                                        const n = null != u ? u : o(t),
                                                            a = te.LO.box(n, { equals: Ve });
                                                        return (
                                                            'real' === e &&
                                                                r.subscribe(
                                                                    (0, te.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, u) => {
                                                        const n = o(u);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = te.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    r.subscribe(
                                                                        (0, te.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                a[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = t,
                                                                s = Object.entries(a),
                                                                i = s.reduce(
                                                                    (e, [t, u]) => ((e[u] = te.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    r.subscribe(
                                                                        (0, te.aD)((e) => {
                                                                            s.forEach(([t, u]) => {
                                                                                i[u].set(e[t]);
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
                                            _ = { mode: e, model: c, externalModel: r, cleanup: d };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && n ? n.controls(_) : t(_),
                                            externalModel: r,
                                            mode: e,
                                        };
                                    },
                                    c = (0, a.useRef)(!1),
                                    _ = (0, a.useState)(e),
                                    E = _[0],
                                    m = _[1],
                                    g = (0, a.useState)(() => d(e, n, o)),
                                    A = g[0],
                                    F = g[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        c.current ? F(d(E, n, o)) : (c.current = !0);
                                    }, [o, E, n]),
                                    (0, a.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            A.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [A],
                                    ),
                                    s().createElement(u.Provider, { value: A }, r)
                                );
                            },
                            () => (0, a.useContext)(u),
                        ];
                    })(0, ({ externalModel: e, model: t }) => ({
                        cardsFun: We(t.cardsFan.model, t.cardsFan.computes),
                        close: e.createCallbackNoArgs('onClose'),
                        showInfo: e.createCallbackNoArgs('onShowInfo'),
                        onOpenTierList: e.createCallbackNoArgs('onOpenTierList'),
                    })),
                    Ke = Xe[0],
                    Ze = Xe[1],
                    Je = {
                        base: 'Card_base_74',
                        base__big: 'Card_base__big_79',
                        glow: 'Card_glow_c0',
                        base__active: 'Card_base__active_5a',
                        base__animation_hiding_glow: 'Card_base__animation_hiding_glow_89',
                        base__animation_showing_glow: 'Card_base__animation_showing_glow_6b',
                        showGlow: 'Card_showGlow_a5',
                        hideGlow: 'Card_hideGlow_25',
                        particles: 'Card_particles_f2',
                        base__detaching: 'Card_base__detaching_f9',
                        base__detaching_active: 'Card_base__detaching_active_d5',
                        dissolve: 'Card_dissolve_d6',
                        blink: 'Card_blink_00',
                        image: 'Card_image_62',
                        shadow: 'Card_shadow_17',
                        'completed-congrats': 'Card_completed-congrats_46',
                        'completed-glow': 'Card_completed-glow_0d',
                        'card-show': 'Card_card-show_73',
                        'card-show-presentment': 'Card_card-show-presentment_f6',
                        edge: 'Card_edge_8b',
                        'blink-edge': 'Card_blink-edge_8f',
                        'show-down': 'Card_show-down_14',
                        'show-up': 'Card_show-up_9a',
                        show: 'Card_show_40',
                        hide: 'Card_hide_3a',
                        pointFadeOut: 'Card_pointFadeOut_e0',
                        pointFadeIn: 'Card_pointFadeIn_01',
                        first2void: 'Card_first2void_8a',
                        second2firstTranslate: 'Card_second2firstTranslate_f3',
                        second2firstRotate: 'Card_second2firstRotate_22',
                        third2second: 'Card_third2second_a9',
                    },
                    et = [
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
                function tt(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const ut = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: $.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    nt = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            n = e.args,
                            s = e.onMouseEnter,
                            r = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            d = void 0 !== l && l,
                            c = e.ignoreMouseClick,
                            _ = void 0 !== c && c,
                            E = e.decoratorId,
                            m = void 0 === E ? 0 : E,
                            g = e.isEnabled,
                            A = void 0 === g || g,
                            F = e.targetId,
                            C = void 0 === F ? 0 : F,
                            D = e.onShow,
                            p = e.onHide,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (u = s[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, et);
                        const B = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(
                                () =>
                                    C ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            n = R.invalid('resId');
                                        return (
                                            t &&
                                                ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (n = window.subViews[u].id)),
                                            { caller: u, stack: t, resId: n }
                                        );
                                    })().resId,
                                [C],
                            ),
                            f = (0, a.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (ut(u, m, { isMouseEvent: !0, on: !0, arguments: tt(n) }, b),
                                    D && D(),
                                    (B.current.isVisible = !0));
                            }, [u, m, n, b, D]),
                            v = (0, a.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        ut(u, m, { on: !1 }, b),
                                        B.current.isVisible && p && p(),
                                        (B.current.isVisible = !1);
                                }
                            }, [u, m, b, p]),
                            w = (0, a.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
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
                                !1 === A && v();
                            }, [A, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            ),
                            A
                                ? (0, a.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((B.current.timeoutId = window.setTimeout(f, d ? 100 : 400)),
                                                          s && s(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  v(), null == r || r(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === _ && v(), null == o || o(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === _ && v(), null == i || i(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : t
                        );
                        var T;
                    },
                    at = ['children'];
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const rt = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (u = s[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, at);
                        return s().createElement(
                            nt,
                            st(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                u,
                            ),
                            t,
                        );
                    },
                    it = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                const lt = R.views.common.tooltip_window.simple_tooltip_content,
                    dt = (e) => {
                        let t = e.children,
                            u = e.body,
                            n = e.header,
                            r = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (u = s[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, it);
                        const d = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: n, note: r, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, u, n, r, o]);
                        return s().createElement(
                            nt,
                            ot(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? lt.SimpleTooltipHtmlContent('resId') : lt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                l,
                            ),
                            t,
                        );
                        var c;
                    };
                function ct() {
                    return (
                        (ct =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ct.apply(this, arguments)
                    );
                }
                const _t = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const n = s().createElement('div', { className: u }, e);
                        if (t.header || t.body) return s().createElement(dt, t, n);
                        const a = t.contentId;
                        return a ? s().createElement(nt, ct({}, t, { contentId: a }), n) : s().createElement(rt, t, n);
                    },
                    Et = {
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
                    mt = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: n = oe.Big,
                        special: a,
                        value: r,
                        valueType: i,
                        title: o,
                        style: l,
                        className: d,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const m = ((e, t) => {
                                if (void 0 === t || !be.includes(e)) return null;
                                switch (t) {
                                    case de.BATTLE_BOOSTER:
                                    case de.BATTLE_BOOSTER_REPLACE:
                                        return ce.BATTLE_BOOSTER;
                                }
                            })(n, a),
                            g = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case de.BATTLE_BOOSTER:
                                        return _e.BATTLE_BOOSTER;
                                    case de.BATTLE_BOOSTER_REPLACE:
                                        return _e.BATTLE_BOOSTER_REPLACE;
                                    case de.BUILT_IN_EQUIPMENT:
                                        return _e.BUILT_IN_EQUIPMENT;
                                    case de.EQUIPMENT_PLUS:
                                        return _e.EQUIPMENT_PLUS;
                                    case de.EQUIPMENT_TROPHY_BASIC:
                                        return _e.EQUIPMENT_TROPHY_BASIC;
                                    case de.EQUIPMENT_TROPHY_UPGRADED:
                                        return _e.EQUIPMENT_TROPHY_UPGRADED;
                                    case de.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return _e.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case de.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return _e.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case de.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return _e.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case de.PROGRESSION_STYLE_UPGRADED_1:
                                        return _e.PROGRESSION_STYLE_UPGRADED_1;
                                    case de.PROGRESSION_STYLE_UPGRADED_2:
                                        return _e.PROGRESSION_STYLE_UPGRADED_2;
                                    case de.PROGRESSION_STYLE_UPGRADED_3:
                                        return _e.PROGRESSION_STYLE_UPGRADED_3;
                                    case de.PROGRESSION_STYLE_UPGRADED_4:
                                        return _e.PROGRESSION_STYLE_UPGRADED_4;
                                    case de.PROGRESSION_STYLE_UPGRADED_5:
                                        return _e.PROGRESSION_STYLE_UPGRADED_5;
                                    case de.PROGRESSION_STYLE_UPGRADED_6:
                                        return _e.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(a),
                            A = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case le.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case le.CURRENCY:
                                    case le.NUMBER:
                                        return s().createElement(me, { format: 'integral', value: Number(e) });
                                    case le.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, i);
                        return s().createElement(
                            'div',
                            { className: p()(Et.base, Et[`base__${n}`], d), style: l },
                            s().createElement(
                                _t,
                                { tooltipArgs: _, className: Et.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: p()(Et.image, null == c ? void 0 : c.image) },
                                        m &&
                                            s().createElement('div', {
                                                className: p()(Et.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            s().createElement('div', {
                                                className: p()(Et.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        g &&
                                            s().createElement('div', {
                                                className: p()(Et.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: p()(
                                                    Et.info,
                                                    Et[`info__${e}`],
                                                    i === le.MULTI && Et.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                    o && s().createElement('div', { className: Et.title }, o),
                                ),
                            ),
                            u &&
                                s().createElement(
                                    _t,
                                    { tooltipArgs: E },
                                    s().createElement('div', {
                                        className: p()(Et.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    gt = 'base',
                    At = ({ imagesRoot: e, partName: t, rarity: u, size: n }) =>
                        `url(${e.$dyn(t).$dyn(`${u}_${n}_1`)})`,
                    Ft = {
                        base: 'CardContent_base_67',
                        rewards: 'CardContent_rewards_ef',
                        base__big: 'CardContent_base__big_61',
                        rewardSlot: 'CardContent_rewardSlot_e7',
                        reward: 'CardContent_reward_3f',
                        base__detached: 'CardContent_base__detached_05',
                        base__detaching: 'CardContent_base__detaching_52',
                        base__detaching_active: 'CardContent_base__detaching_active_97',
                        base__deactivating: 'CardContent_base__deactivating_ae',
                        base__small: 'CardContent_base__small_8d',
                        rewardInfo: 'CardContent_rewardInfo_14',
                        rewardImage: 'CardContent_rewardImage_f8',
                        rewardImage__battleToken: 'CardContent_rewardImage__battleToken_ee',
                        base__ordinary: 'CardContent_base__ordinary_57',
                        cardNumber: 'CardContent_cardNumber_bc',
                        base__unusual: 'CardContent_base__unusual_a6',
                        base__rare: 'CardContent_base__rare_f8',
                        base__legendary: 'CardContent_base__legendary_a8',
                        base__epic: 'CardContent_base__epic_6c',
                        infinity: 'CardContent_infinity_56',
                        shadow: 'CardContent_shadow_35',
                        base__inactive: 'CardContent_base__inactive_22',
                        pattern: 'CardContent_pattern_13',
                        'completed-congrats': 'CardContent_completed-congrats_1b',
                        'completed-glow': 'CardContent_completed-glow_9a',
                        'card-show': 'CardContent_card-show_d9',
                        'card-show-presentment': 'CardContent_card-show-presentment_a3',
                        edge: 'CardContent_edge_f0',
                        dissolve: 'CardContent_dissolve_a8',
                        'blink-edge': 'CardContent_blink-edge_c8',
                        blink: 'CardContent_blink_31',
                        'show-down': 'CardContent_show-down_ff',
                        'show-up': 'CardContent_show-up_d3',
                        show: 'CardContent_show_c9',
                        hide: 'CardContent_hide_cb',
                        showGlow: 'CardContent_showGlow_60',
                        hideGlow: 'CardContent_hideGlow_96',
                        pointFadeOut: 'CardContent_pointFadeOut_69',
                        pointFadeIn: 'CardContent_pointFadeIn_91',
                        first2void: 'CardContent_first2void_b7',
                        second2firstTranslate: 'CardContent_second2firstTranslate_b5',
                        second2firstRotate: 'CardContent_second2firstRotate_e0',
                        third2second: 'CardContent_third2second_54',
                    };
                function Ct() {
                    return (
                        (Ct =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ct.apply(this, arguments)
                    );
                }
                const Dt = (0, V.Pi)(({ index: e = 0, state: t, rewardsSize: u, infinite: n, classMix: a }) => {
                        const r = Ze().model,
                            i = r.root.get().assetsPointer,
                            o = r.computes.card(e, u, n),
                            l = o.progressionState,
                            d = o.rarity,
                            c = o.cardNumber,
                            _ = o.rewards,
                            E = t || (null == l ? void 0 : l.state),
                            m = Z(i).progression.cards,
                            g = At({ imagesRoot: m, partName: gt, rarity: d, size: u }),
                            A = String(m.infinity_sign.$dyn(d));
                        return s().createElement(
                            'div',
                            {
                                className: p()(
                                    Ft.base,
                                    Ft[`base__${d}`],
                                    Ft[`base__${u}`],
                                    Ft[`base__${E}`],
                                    null == a ? void 0 : a.content,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: Ft.rewards },
                                ee(4, (e) =>
                                    s().createElement(
                                        'div',
                                        { key: e, className: Ft.rewardSlot },
                                        _.length > e &&
                                            s().createElement(
                                                mt,
                                                Ct({}, _[e], {
                                                    size: u,
                                                    className: Ft.reward,
                                                    classNames: {
                                                        info: Ft.rewardInfo,
                                                        image: p()(
                                                            Ft.rewardImage,
                                                            'battleToken' === _[e].name && Ft.rewardImage__battleToken,
                                                        ),
                                                    },
                                                }),
                                            ),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: Ft.cardNumber },
                                n
                                    ? s().createElement('div', {
                                          className: Ft.infinity,
                                          style: { backgroundImage: `url(${A})` },
                                      })
                                    : c,
                            ),
                            s().createElement('div', {
                                className: p()(Ft.pattern, null == a ? void 0 : a.pattern),
                                style: { maskImage: g },
                            }),
                            s().createElement('div', {
                                className: p()(Ft.shadow, null == a ? void 0 : a.shadow),
                                style: { maskImage: g },
                            }),
                        );
                    }),
                    pt = {
                        base: 'CardEdge_base_be',
                        base__active: 'CardEdge_base__active_7b',
                        base__big: 'CardEdge_base__big_b5',
                        base__detached: 'CardEdge_base__detached_e9',
                        base__deactivating: 'CardEdge_base__deactivating_15',
                        base__detaching: 'CardEdge_base__detaching_44',
                        base__detaching_active: 'CardEdge_base__detaching_active_77',
                        edge: 'CardEdge_edge_42',
                        pattern: 'CardEdge_pattern_ff',
                        base__ordinary: 'CardEdge_base__ordinary_1c',
                        pointsTitle: 'CardEdge_pointsTitle_ea',
                        base__unusual: 'CardEdge_base__unusual_75',
                        base__rare: 'CardEdge_base__rare_8f',
                        base__legendary: 'CardEdge_base__legendary_cf',
                        base__epic: 'CardEdge_base__epic_28',
                        pointsValue: 'CardEdge_pointsValue_67',
                        blinkEdge: 'CardEdge_blinkEdge_cc',
                        'blink-edge': 'CardEdge_blink-edge_3e',
                        shadow: 'CardEdge_shadow_8b',
                        base__inactive: 'CardEdge_base__inactive_e8',
                        'completed-congrats': 'CardEdge_completed-congrats_24',
                        'completed-glow': 'CardEdge_completed-glow_85',
                        'card-show': 'CardEdge_card-show_32',
                        'card-show-presentment': 'CardEdge_card-show-presentment_c0',
                        dissolve: 'CardEdge_dissolve_77',
                        blink: 'CardEdge_blink_9c',
                        'show-down': 'CardEdge_show-down_1f',
                        'show-up': 'CardEdge_show-up_48',
                        show: 'CardEdge_show_eb',
                        hide: 'CardEdge_hide_a5',
                        showGlow: 'CardEdge_showGlow_5e',
                        hideGlow: 'CardEdge_hideGlow_71',
                        pointFadeOut: 'CardEdge_pointFadeOut_75',
                        pointFadeIn: 'CardEdge_pointFadeIn_0b',
                        first2void: 'CardEdge_first2void_af',
                        second2firstTranslate: 'CardEdge_second2firstTranslate_79',
                        second2firstRotate: 'CardEdge_second2firstRotate_39',
                        third2second: 'CardEdge_third2second_40',
                    },
                    ht = (0, V.Pi)(({ index: e = 0, state: t, rewardsSize: u, infinite: n, classMix: a }) => {
                        const r = Ze().model,
                            i = r.root.get().assetsPointer,
                            o = r.computes.card(e, u, n),
                            l = o.progressionState,
                            d = o.rarity,
                            c = o.maximumPoints,
                            _ = t || (null == l ? void 0 : l.state),
                            E = null == l ? void 0 : l.animation,
                            m = Z(i).progression.cards,
                            g = At({ imagesRoot: m, partName: 'edge', rarity: d, size: u });
                        return s().createElement(
                            'div',
                            {
                                className: p()(
                                    pt.edge,
                                    pt.base,
                                    pt[`base__${d}`],
                                    pt[`base__animation_${E}`],
                                    u === oe.Big && pt.base__big,
                                    pt[`base__${_}`],
                                    null == a ? void 0 : a.edge,
                                ),
                                style: { backgroundImage: g },
                            },
                            s().createElement('div', { className: pt.blinkEdge }),
                            s().createElement(
                                'div',
                                { className: pt.pointsTitle },
                                s().createElement('div', null, R.strings.fun_random.progression.cards.points()),
                            ),
                            s().createElement('div', { className: pt.pointsValue }, s().createElement('div', null, c)),
                            s().createElement('div', {
                                className: p()(pt.pattern, null == a ? void 0 : a.pattern),
                                style: { maskImage: g },
                            }),
                            s().createElement('div', {
                                className: p()(pt.shadow, null == a ? void 0 : a.shadow),
                                style: { maskImage: g },
                            }),
                        );
                    }),
                    Bt = (0, V.Pi)(({ index: e = 0, state: t, rewardsSize: u, classMix: n, infinite: r }) => {
                        const o = Ze().model,
                            l = o.root.get().assetsPointer,
                            d = o.computes.card(e, u, r),
                            c = d.progressionState,
                            _ = d.rarity,
                            E = t || (null == c ? void 0 : c.state),
                            m = null == c ? void 0 : c.animation,
                            g = Z(l).progression.cards,
                            A = At({ imagesRoot: g, partName: gt, rarity: _, size: u });
                        return (
                            (0, a.useEffect)(() => {
                                (E !== ne.DetachingActive && E !== ne.Detaching) ||
                                    i.O.sound.play.sound(se.EvFepTearOffCard);
                            }, [E]),
                            s().createElement(
                                'div',
                                {
                                    className: p()(
                                        Je.base,
                                        Je[`base__${_}`],
                                        Je[`base__animation_${m}`],
                                        u === oe.Big && Je.base__big,
                                        Je[`base__${E}`],
                                        null == n ? void 0 : n.base,
                                    ),
                                },
                                s().createElement('div', { className: Je.glow }),
                                s().createElement(ht, { index: e, state: t, rewardsSize: u, classMix: n, infinite: r }),
                                s().createElement('div', { className: Je.blink }),
                                s().createElement('div', { className: Je.particles }),
                                s().createElement('div', { className: Je.image, style: { backgroundImage: A } }),
                                s().createElement(Dt, { index: e, state: t, rewardsSize: u, classMix: n, infinite: r }),
                            )
                        );
                    });
                var bt = u(7006),
                    ft = u(2031);
                const vt = (e) => {
                    (0, a.useEffect)(() => e, []);
                };
                function wt() {
                    const e = (0, a.useRef)(0);
                    return (
                        vt(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, a.useMemo)(
                            () => ({
                                run: (t, u) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = 0), t();
                                        }, u));
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
                }
                const Tt = [Le.Dragging, Le.ShowProgress, Le.Blocked],
                    Pt = (e, t) => Math.abs(e - t) < 0.2,
                    It = ({ mediaHeight: e, mediaWidth: t }) => e >= v.Large && t >= f.Small,
                    St = (0, V.Pi)(
                        ({
                            children: e,
                            transformRadius: t,
                            cardHeight: u,
                            defaultSelectedElement: n = 0,
                            className: r,
                        }) => {
                            const o = w(),
                                l = o.mediaHeight,
                                d = o.mediaWidth,
                                c = o.remScreenWidth,
                                _ = o.remScreenHeight,
                                E = Ze(),
                                m = E.model.cardsFan,
                                g = m.model,
                                A = m.computes,
                                F = E.controls.cardsFun,
                                C = It({ mediaHeight: l, mediaWidth: d }),
                                D = (({ isAssembled: e, mediaHeight: t, mediaWidth: u }) => {
                                    const n = It({ mediaHeight: t, mediaWidth: u });
                                    return e ? (!n && t >= v.Medium ? 90 : n ? 60 : 50) : 0;
                                })({ mediaHeight: l, mediaWidth: d, isAssembled: g.assembled.get() }),
                                h = E.model.computes.finalAnimationStatus(),
                                B = h.completedWithAnimation,
                                b = h.completedNoAnimation,
                                f = (({
                                    cardsCount: e,
                                    prevCard: t,
                                    activeCard: u,
                                    isFirstOpen: n,
                                    isBlocked: s,
                                    model: r,
                                    computes: o,
                                    actions: l,
                                }) => {
                                    const d = wt(),
                                        c = d.run,
                                        _ = d.clear,
                                        E = (() => {
                                            const e = (0, a.useRef)([]);
                                            return (0, a.useMemo)(
                                                () => ({
                                                    runSchedule: (t) => {
                                                        e.current.forEach(clearTimeout), (e.current = []);
                                                        let u = 0;
                                                        t.forEach(({ delay: t, action: n, duration: a }) => {
                                                            var s;
                                                            u += t || 0;
                                                            const r = setTimeout(n, u);
                                                            null == (s = e.current) || s.push(r), (u += a || 0);
                                                        });
                                                    },
                                                    clearAll: () => {
                                                        e.current.forEach(clearTimeout), (e.current = []);
                                                    },
                                                }),
                                                [],
                                            );
                                        })(),
                                        m = E.runSchedule,
                                        g = E.clearAll,
                                        A = (0, bt.useSpring)(() => ({
                                            rotate: r.currentRotation.get(),
                                            onStart: () => {
                                                l.startRotation(),
                                                    o.soundEnabled.get() && i.O.sound.play.sound(se.EvFepCardStartMove);
                                            },
                                            onRest: () => {
                                                o.soundEnabled.get() && i.O.sound.play.sound(se.EvFepCardStopMove);
                                            },
                                            onChange: (e) => {
                                                l.setCurrentRotation(e.value.rotate);
                                            },
                                        }));
                                    vt(() => i.O.sound.play.sound(se.EvFepCardStopMove));
                                    const F = A[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const a = (0, te.U5)(
                                                    () => o.velocity.get(),
                                                    (e) => {
                                                        void 0 !== e &&
                                                            o.soundEnabled.get() &&
                                                            i.O.sound.setRTPC(se.RtpcExtFepWheelRotation, Math.abs(e));
                                                    },
                                                ),
                                                d = (0, te.U5)(
                                                    () => r.currentRotation.get(),
                                                    () => {
                                                        if (
                                                            Pt(r.targetRotation.get(), r.currentRotation.get()) &&
                                                            !Tt.includes(r.state.get())
                                                        )
                                                            r.state.get() === Le.FirstAnimation
                                                                ? l.runProgressionAnimation()
                                                                : r.state.get() === Le.FinalAnimation
                                                                  ? (l.setAssembled(!0),
                                                                    l.setState(Le.Blocked),
                                                                    i.O.sound.setRTPC(se.RtpcExtFepWheelRotation, 0),
                                                                    i.O.sound.play.sound(se.EvFepCardStopMove),
                                                                    i.O.sound.play.sound(se.EvFepCongratulate))
                                                                  : l.setState(Le.Idle);
                                                        else if (r.state.get() === Le.InertialMovement) {
                                                            const e = 0.75 * r.dragging.speed.get();
                                                            l.setDraggingSpeed(e),
                                                                l.setTargetRotation(r.targetRotation.get() + e);
                                                        }
                                                        (r.state.get() === Le.Idle ||
                                                            (r.state.get() === Le.ShowProgress &&
                                                                r.progress.animation.get() === ye.Init)) &&
                                                            F.set({ rotate: r.currentRotation.get() });
                                                    },
                                                ),
                                                E = (0, te.U5)(
                                                    () => r.targetRotation.get(),
                                                    () => {
                                                        r.state.get() !== Le.Idle &&
                                                            F.start({
                                                                rotate: r.targetRotation.get(),
                                                                config: o.animationConfig.get(),
                                                            });
                                                    },
                                                ),
                                                A = (0, te.U5)(
                                                    () => r.state.get(),
                                                    () => {
                                                        r.state.get() === Le.InertialMovement &&
                                                            Pt(r.currentRotation.get(), r.targetRotation.get()) &&
                                                            l.setState(Le.Idle),
                                                            r.state.get() !== Le.Idle ||
                                                            Pt(
                                                                r.currentRotation.get(),
                                                                -r.cardRotation.get() * o.currentCard.get(),
                                                            )
                                                                ? _()
                                                                : c(() => {
                                                                      l.setState(Le.Normalization),
                                                                          l.setTargetRotation(
                                                                              -r.cardRotation.get() *
                                                                                  o.currentCard.get(),
                                                                          );
                                                                  }, 1e3),
                                                            r.state.get() === Le.FirstAnimation &&
                                                                F.set({ rotate: r.currentRotation.get() }),
                                                            r.state.get() === Le.ShowProgress &&
                                                                m(
                                                                    o.progressSchedule
                                                                        .get()
                                                                        .map(
                                                                            ({ delay: e, action: t, duration: u }) => ({
                                                                                delay: e,
                                                                                duration: u,
                                                                                action: l.progress[t],
                                                                            }),
                                                                        ),
                                                                );
                                                    },
                                                ),
                                                C = (0, te.EH)(() => {
                                                    l.initCardsFan(e, t, u, n, s);
                                                });
                                            return () => {
                                                C(), d(), E(), A(), _(), g(), a();
                                            };
                                        }, [u, F, e, _, g, c, n, s, t, m]),
                                        A
                                    );
                                })({
                                    cardsCount: E.model.stages.get().length,
                                    prevCard: E.model.computes.progressAnimationStartFrom(),
                                    activeCard: E.model.computes.cardActiveIndex(),
                                    isFirstOpen: E.model.root.get().isFirstOpen,
                                    isBlocked: b,
                                    model: g,
                                    computes: A,
                                    actions: F,
                                }),
                                T = f[0].rotate,
                                P = f[1];
                            return (
                                (0, a.useEffect)(() => {
                                    const e = (e) => {
                                        const t = e.deltaY > 1 ? 1 : -1;
                                        F.scroll(t);
                                    };
                                    return (
                                        document.addEventListener('wheel', e),
                                        function () {
                                            document.removeEventListener('wheel', e);
                                        }
                                    );
                                }, [P, F]),
                                (0, a.useEffect)(
                                    () =>
                                        ((e) => {
                                            let n,
                                                a = null;
                                            return (
                                                (a = requestAnimationFrame(() => {
                                                    a = requestAnimationFrame(() => {
                                                        (a = null),
                                                            (n = (() => {
                                                                const e = (e) => {
                                                                        F.startDragging((0, ft.pxToRem)(e.screenX));
                                                                    },
                                                                    n = (e) => {
                                                                        if (g.state.get() === Le.Dragging)
                                                                            if (
                                                                                (0, ft.pxToRem)(e.screenX) < 20 ||
                                                                                (0, ft.pxToRem)(e.screenY) < 20 ||
                                                                                (0, ft.pxToRem)(e.screenY) > _ - 20 ||
                                                                                (0, ft.pxToRem)(e.screenX) > c - 20
                                                                            )
                                                                                F.stopDragging();
                                                                            else {
                                                                                const n =
                                                                                    t + u - (0, ft.pxToRem)(e.screenY);
                                                                                F.drag(n, (0, ft.pxToRem)(e.screenX));
                                                                            }
                                                                    },
                                                                    a = () => {
                                                                        F.stopDragging();
                                                                    },
                                                                    s = () => {
                                                                        F.stopDragging();
                                                                    };
                                                                return (
                                                                    document.addEventListener('mousedown', e),
                                                                    document.addEventListener('mousemove', n),
                                                                    document.addEventListener('mouseup', a),
                                                                    document.addEventListener('mouseleave', s),
                                                                    function () {
                                                                        document.removeEventListener('mousedown', e),
                                                                            document.removeEventListener(
                                                                                'mousemove',
                                                                                n,
                                                                            ),
                                                                            document.removeEventListener('mouseup', a),
                                                                            document.removeEventListener(
                                                                                'mouseleave',
                                                                                s,
                                                                            );
                                                                    }
                                                                );
                                                            })());
                                                    });
                                                })),
                                                () => {
                                                    'function' == typeof n && n(),
                                                        null !== a && cancelAnimationFrame(a);
                                                }
                                            );
                                        })(),
                                    [F, t, u, g.state, _, c],
                                ),
                                s().createElement(
                                    'div',
                                    {
                                        className: p()(
                                            'CardsFan_base_fa',
                                            r,
                                            C && 'CardsFan_base__big_70',
                                            B && 'CardsFan_base__final_1a',
                                        ),
                                    },
                                    s().createElement(
                                        bt.animated.div,
                                        {
                                            className: 'CardsFan_cardHolder_86',
                                            style: { transformOrigin: `center ${t}rem`, rotate: T },
                                        },
                                        (function (e, t, u) {
                                            const n = [];
                                            for (let a = 0; a < e.length; a++) {
                                                const s = we(e, a);
                                                t(s, a, e) && n.push(u(s, a, e));
                                            }
                                            return n;
                                        })(
                                            A.cardsMap.get(),
                                            ({ order: e }) =>
                                                e >= A.minVisibleCard.get() && e <= A.maxVisibleCard.get(),
                                            (u) =>
                                                s().createElement(
                                                    'div',
                                                    {
                                                        key: u.key,
                                                        className: p()(
                                                            'CardsFan_card_31',
                                                            u.order === n && 'CardsFan_card__active_02',
                                                        ),
                                                        style: {
                                                            transformOrigin: `center ${t}rem`,
                                                            transform: `rotate(${g.cardRotation.get() * u.order}deg) translateY(${D}%)`,
                                                        },
                                                    },
                                                    e[u.order],
                                                ),
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                function Rt() {
                    return (
                        (Rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Rt.apply(this, arguments)
                    );
                }
                const xt = { cardHeight: 400, transformRadius: 1500, rewardsSize: oe.Big },
                    Lt = { cardHeight: 261, transformRadius: 990, rewardsSize: oe.Small },
                    yt = (0, V.Pi)(({ className: e }) => {
                        const t = Ze(),
                            u = t.model,
                            n = t.controls,
                            r = u.stages.get().length,
                            i = u.computes.finalAnimationStatus().completedWithAnimation,
                            o = u.cardsFan.model.progress.currentCard.get(),
                            l = w(),
                            d = l.mediaHeight,
                            c = l.mediaWidth,
                            _ = d >= v.Large && c >= f.Small ? xt : Lt;
                        return (
                            (0, a.useEffect)(() => {
                                i && n.cardsFun.runFinalAnimation(r);
                            }, [i, r, n.cardsFun]),
                            s().createElement(
                                'div',
                                { className: p()('CardsProgression_base_a3', e) },
                                s().createElement(
                                    St,
                                    Rt({}, _, { defaultSelectedElement: o, className: 'CardsProgression_cardsFan_3e' }),
                                    ee(r, (e) =>
                                        s().createElement(Bt, { key: e, index: e, rewardsSize: _.rewardsSize }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Ot = {
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
                let Nt, kt;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Nt || (Nt = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(kt || (kt = {}));
                const Mt = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: r,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: d,
                    onMouseMove: c,
                    onMouseDown: _,
                    onMouseUp: E,
                    onMouseLeave: m,
                    onClick: g,
                }) => {
                    const A = (0, a.useRef)(null),
                        F = (0, a.useState)(u),
                        C = F[0],
                        D = F[1],
                        h = (0, a.useState)(!1),
                        B = h[0],
                        b = h[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                C && null !== A.current && !A.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, a.useEffect)(() => {
                            D(u);
                        }, [u]),
                        s().createElement(
                            'div',
                            {
                                ref: A,
                                className: p()(
                                    Ot.base,
                                    Ot[`base__${n}`],
                                    r && Ot.base__disabled,
                                    t && Ot[`base__${t}`],
                                    C && Ot.base__focus,
                                    B && Ot.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== o && M(o), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    c && c(e);
                                },
                                onMouseUp: function (e) {
                                    r || (E && E(e), b(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== l && M(l),
                                        _ && _(e),
                                        u && (r || (A.current && (A.current.focus(), D(!0)))),
                                        b(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (m && m(e), b(!1));
                                },
                                onClick: function (e) {
                                    r || (g && g(e));
                                },
                            },
                            n !== Nt.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Ot.back }),
                                    s().createElement('span', { className: Ot.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: p()(Ot.state, Ot.state__default) },
                                s().createElement('span', { className: Ot.stateDisabled }),
                                s().createElement('span', { className: Ot.stateHighlightHover }),
                                s().createElement('span', { className: Ot.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Ot.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Mt.defaultProps = { type: Nt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ht = Mt;
                var Gt = u(1281);
                let Ut;
                function qt(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Ut || (Ut = {}));
                const Qt = (e) => e.replace(/&nbsp;/g, ' '),
                    $t = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    Wt = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    jt = (e, t, u = Ut.left) => e.split(t).reduce(u === Ut.left ? $t : Wt, []),
                    Vt = (() => {
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
                    zt = ['zh_cn', 'zh_sg', 'zh_tw'];
                function Yt(e, t, u) {
                    const n = (0, a.useContext)(g);
                    let s = Object.entries(n).filter(([e, t]) => !0 === t && e in l);
                    return (
                        u && (s = s.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const n = s.map((e) =>
                                p()(
                                    t[((e, t) => e + '__' + t)(u, e[0])],
                                    t[
                                        ((e, t) => {
                                            return e + ((u = t)[0].toUpperCase() + u.slice(1));
                                            var u;
                                        })(u, e[0])
                                    ],
                                ),
                            );
                            return (e[u] = p()(t[u], ...n)), e;
                        }, {})
                    );
                }
                let Xt, Kt;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(Xt || (Xt = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(Kt || (Kt = {}));
                var Zt = u(8613);
                Date.now(), Zt.Ew.getRegionalDateTime, Zt.Ew.getFormattedDateTime;
                const Jt = () => {};
                let eu;
                $.Sw.instance,
                    (function (e) {
                        (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                    })(eu || (eu = {})),
                    $.Sw.instance;
                const tu = (e = 0, t, u = 0, n = Jt) => {
                        const s = (0, a.useState)(e),
                            r = s[0],
                            i = s[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    i(e);
                                    const a = Date.now(),
                                        s = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - a) / 1e3);
                                                null !== u && t <= u ? (i(u), n && n(), clearInterval(s)) : i(t);
                                            },
                                            1e3 * (t || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [e, t, u, n]),
                            r
                        );
                    },
                    uu = (e) => e.toString().padStart(2, '0'),
                    nu = R.images.gui.maps.icons.components.countdown,
                    au = (e, t) => {
                        const u = 2 === t ? nu.big : nu;
                        switch (e) {
                            case Xt.Timer:
                                return u.clock();
                            case Xt.Countdown:
                                return u.hourglass();
                            case Xt.Cooldown:
                                return u.lock();
                        }
                    },
                    su = (0, a.memo)(
                        ({
                            duration: e,
                            icon: t = Xt.Timer,
                            style: u = Kt.Description,
                            onTimeReached: n,
                            className: r = '',
                            classNames: o = {},
                        }) => {
                            const l = u !== Kt.Description ? 1 : void 0,
                                d = tu(e, l),
                                c = (() => {
                                    const e = (0, a.useState)(i.O.view.getScale()),
                                        t = e[0],
                                        u = e[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const e = () => {
                                                u(i.O.view.getScale());
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
                            n && n[d] && n[d]();
                            const _ = ((e, t) => {
                                switch (t) {
                                    case Kt.Description:
                                        return ((e, t = !0) =>
                                            e.days > 7 && t
                                                ? qt(R.strings.common.duration.days(), { days: e.days })
                                                : e.days >= 1
                                                  ? 0 === e.hours
                                                      ? qt(R.strings.common.duration.days(), { days: e.days })
                                                      : `${qt(R.strings.common.duration.days(), { days: e.days })} ${qt(R.strings.common.duration.hours(), { hours: e.hours })}`
                                                  : e.hours >= 1
                                                    ? 0 === e.minutes
                                                        ? qt(R.strings.common.duration.hours(), { hours: e.hours })
                                                        : `${qt(R.strings.common.duration.hours(), { hours: e.hours })} ${qt(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                                    : qt(R.strings.common.duration.minutes(), {
                                                          minutes: e.minutes || 1,
                                                      }))(e);
                                    case Kt.Short:
                                        return `${uu(e.minutes)}:${uu(e.seconds)}`;
                                    case Kt.Long:
                                        return `${uu(e.hours)}:${uu(e.minutes)}:${uu(e.seconds)}`;
                                    case Kt.Extended:
                                        return `${qt(R.strings.common.duration.days(), { days: e.days })} | ${uu(e.hours)}:${uu(e.minutes)}:${uu(e.seconds)}`;
                                }
                            })(
                                (function (e = 0) {
                                    let t = e;
                                    const u = Math.trunc(t / 86400);
                                    t -= 86400 * u;
                                    const n = Math.trunc(t / 3600);
                                    t -= 3600 * n;
                                    const a = Math.trunc(t / 60);
                                    return (t -= 60 * a), { days: u, hours: n, minutes: a, seconds: t };
                                })(d),
                                u,
                            );
                            return s().createElement(
                                'div',
                                { className: p()('Countdown_base_fe', r) },
                                t !== Xt.None &&
                                    s().createElement('div', {
                                        className: p()('Countdown_icon_8b', o.icon),
                                        style: { backgroundImage: `url('${au(t, c)}')` },
                                    }),
                                s().createElement('div', { className: p()('Countdown_description_8d', o.text) }, _),
                            );
                        },
                    ),
                    ru = ({ binding: e, text: t = '', classMix: u, alignment: n = Ut.left, formatWithBrackets: r }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const i = r && e ? qt(t, e) : t;
                        return s().createElement(
                            a.Fragment,
                            null,
                            i.split('\n').map((t, r) =>
                                s().createElement(
                                    'div',
                                    { className: p()('FormatText_base_d0', u), key: `${t}-${r}` },
                                    ((e, t, u) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            u && e in u
                                                ? u[e]
                                                : ((e, t = Ut.left) => {
                                                      const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return zt.includes(u)
                                                          ? Vt(e)
                                                          : 'ja' === u
                                                            ? (0, Gt.D4)()
                                                                  .parse(e)
                                                                  .map((e) => Qt(e))
                                                            : ((e, t = Ut.left) => {
                                                                  let u = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      a = Qt(e);
                                                                  return (
                                                                      jt(a, /( )/, t).forEach(
                                                                          (e) => (u = u.concat(jt(e, n, Ut.left))),
                                                                      ),
                                                                      u
                                                                  );
                                                              })(e, t);
                                                  })(e, t),
                                        ))(t, n, e).map((e, t) =>
                                        s().createElement(a.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    iu = 'Timer_line_d3',
                    ou = 'Timer_point_f4',
                    lu = (0, V.Pi)(({ classNames: e }) => {
                        const t = Ze().model,
                            u = t.computes.pageStatus(),
                            n = Se(u),
                            a = n.isResettable,
                            r = n.isInfinite,
                            i = t.computes.finalAnimationStatus().completedWithAnimation,
                            o = t.infiniteCondition.get(),
                            l = { statusTimer: t.condition.statusTimer.get() },
                            d = (r ? o : l).statusTimer,
                            c = a
                                ? R.strings.fun_random.progression.questsList.questsRenewTimerTitle()
                                : R.strings.fun_random.progression.questsList.questsFinishTimerTitle();
                        return s().createElement(
                            'div',
                            { className: p()('Timer_base_77', i && 'Timer_base__hide_e9', e) },
                            s().createElement(
                                'div',
                                { className: 'Timer_titleSeparatorLeft_23' },
                                s().createElement('div', { className: iu }),
                                s().createElement('div', { className: ou }),
                            ),
                            s().createElement(ru, {
                                classMix: 'Timer_questsRenewTimerTitle_4c',
                                text: c,
                                binding: { time: s().createElement(su, { duration: d }) },
                            }),
                            s().createElement(
                                'div',
                                { className: 'Timer_titleSeparatorRight_6f' },
                                s().createElement('div', { className: ou }),
                                s().createElement('div', { className: iu }),
                            ),
                        );
                    }),
                    du = {
                        base: 'CompletedProgression_base_c2',
                        container: 'CompletedProgression_container_ad',
                        base__final: 'CompletedProgression_base__final_14',
                        'show-up': 'CompletedProgression_show-up_ec',
                        base__static: 'CompletedProgression_base__static_32',
                        base__resettable: 'CompletedProgression_base__resettable_5c',
                        base__large: 'CompletedProgression_base__large_40',
                        base__extraLarge: 'CompletedProgression_base__extraLarge_0e',
                        base__medium: 'CompletedProgression_base__medium_a7',
                        icon: 'CompletedProgression_icon_00',
                        glow: 'CompletedProgression_glow_a4',
                        'completed-glow': 'CompletedProgression_completed-glow_84',
                        title: 'CompletedProgression_title_ff',
                        congrats: 'CompletedProgression_congrats_9f',
                        congratsSubtitle: 'CompletedProgression_congratsSubtitle_57',
                        'completed-congrats': 'CompletedProgression_completed-congrats_e7',
                        timer: 'CompletedProgression_timer_68',
                        button: 'CompletedProgression_button_5a',
                        show: 'CompletedProgression_show_16',
                        'card-show': 'CompletedProgression_card-show_e3',
                        'card-show-presentment': 'CompletedProgression_card-show-presentment_ba',
                        edge: 'CompletedProgression_edge_e9',
                        dissolve: 'CompletedProgression_dissolve_8c',
                        'blink-edge': 'CompletedProgression_blink-edge_72',
                        blink: 'CompletedProgression_blink_09',
                        'show-down': 'CompletedProgression_show-down_84',
                        hide: 'CompletedProgression_hide_c2',
                        showGlow: 'CompletedProgression_showGlow_04',
                        hideGlow: 'CompletedProgression_hideGlow_c3',
                        pointFadeOut: 'CompletedProgression_pointFadeOut_aa',
                        pointFadeIn: 'CompletedProgression_pointFadeIn_37',
                        first2void: 'CompletedProgression_first2void_74',
                        second2firstTranslate: 'CompletedProgression_second2firstTranslate_44',
                        second2firstRotate: 'CompletedProgression_second2firstRotate_37',
                        third2second: 'CompletedProgression_third2second_90',
                    },
                    cu = (0, V.Pi)(() => {
                        const e = Ze(),
                            t = e.model,
                            u = e.controls,
                            n = t.computes.pageStatus(),
                            a = Se(n),
                            r = a.isCompleted,
                            i = a.isResettable,
                            o = t.root.get().assetsPointer,
                            l = K('progression', { assetsPointer: o }).dynamicTexts,
                            d = !t.computes.needChangePage(),
                            c = Yt(['base'], du),
                            _ = Z(o).battle_type.c_136x136.fun_random();
                        return r
                            ? s().createElement(
                                  'div',
                                  {
                                      className: p()(
                                          c.base,
                                          du.base__final,
                                          d && du.base__static,
                                          i && du.base__resettable,
                                      ),
                                  },
                                  s().createElement(
                                      'div',
                                      { className: du.container },
                                      s().createElement('div', {
                                          className: du.icon,
                                          style: { backgroundImage: `url('${_}')` },
                                      }),
                                      s().createElement('div', { className: du.title }, l.title()),
                                      s().createElement('div', { className: du.glow }),
                                      s().createElement(
                                          'div',
                                          { className: du.congrats },
                                          l.complete.congratulations(),
                                      ),
                                      s().createElement('div', { className: du.congratsSubtitle }, l.complete.title()),
                                      s().createElement(lu, { classNames: du.timer }),
                                  ),
                                  s().createElement(
                                      Ht,
                                      { mixClass: du.button, onClick: u.close },
                                      R.strings.fun_random.progression.complete.affirmative(),
                                  ),
                              )
                            : null;
                    }),
                    _u = {
                        base: 'Header_base_d2',
                        base__hide: 'Header_base__hide_ef',
                        title: 'Header_title_dd',
                        title__faded: 'Header_title__faded_ff',
                        base__medium: 'Header_base__medium_fd',
                        base__large: 'Header_base__large_30',
                        base__extraLarge: 'Header_base__extraLarge_98',
                        base__active: 'Header_base__active_b3',
                        congratsSubtitle: 'Header_congratsSubtitle_a8',
                        'completed-congrats': 'Header_completed-congrats_69',
                        'completed-glow': 'Header_completed-glow_31',
                        'card-show': 'Header_card-show_89',
                        'card-show-presentment': 'Header_card-show-presentment_72',
                        edge: 'Header_edge_14',
                        dissolve: 'Header_dissolve_ae',
                        'blink-edge': 'Header_blink-edge_de',
                        blink: 'Header_blink_8c',
                        'show-down': 'Header_show-down_f0',
                        'show-up': 'Header_show-up_bd',
                        show: 'Header_show_eb',
                        hide: 'Header_hide_e1',
                        showGlow: 'Header_showGlow_94',
                        hideGlow: 'Header_hideGlow_af',
                        pointFadeOut: 'Header_pointFadeOut_0a',
                        pointFadeIn: 'Header_pointFadeIn_bb',
                        first2void: 'Header_first2void_b4',
                        second2firstTranslate: 'Header_second2firstTranslate_97',
                        second2firstRotate: 'Header_second2firstRotate_49',
                        third2second: 'Header_third2second_49',
                    },
                    Eu = (0, V.Pi)(({ className: e }) => {
                        const t = Ze().model,
                            u = t.computes.pageStatus(),
                            n = t.computes.finalAnimationStatus(),
                            a = n.completedWithAnimation,
                            r = n.completedNoAnimation,
                            i = Se(u).isActive,
                            o = t.root.get().assetsPointer,
                            l = K('progression', { assetsPointer: o }).dynamicTexts,
                            d = Yt(['base'], _u);
                        return r
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: p()(d.base, a && _u.base__hide, i && _u.base__active, e) },
                                  s().createElement('div', { className: _u.title }, l.title()),
                                  s().createElement(lu, null),
                              );
                    });
                var mu = u(8475);
                const gu = {
                        base: 'InfiniteCard_base_b8',
                        'card-show': 'InfiniteCard_card-show_fe',
                        base__first: 'InfiniteCard_base__first_89',
                        base__second: 'InfiniteCard_base__second_68',
                        base__third: 'InfiniteCard_base__third_1c',
                        base__fourth: 'InfiniteCard_base__fourth_c1',
                        show: 'InfiniteCard_show_5a',
                        base__presentment: 'InfiniteCard_base__presentment_64',
                        'card-show-presentment': 'InfiniteCard_card-show-presentment_24',
                        shadow: 'InfiniteCard_shadow_9c',
                        cardWrapper: 'InfiniteCard_cardWrapper_1f',
                        cardWrapper__enter: 'InfiniteCard_cardWrapper__enter_ab',
                        first2void: 'InfiniteCard_first2void_95',
                        cardWrapper__enterDone: 'InfiniteCard_cardWrapper__enterDone_d5',
                        second2firstTranslate: 'InfiniteCard_second2firstTranslate_3d',
                        second2firstRotate: 'InfiniteCard_second2firstRotate_50',
                        third2second: 'InfiniteCard_third2second_38',
                        'completed-congrats': 'InfiniteCard_completed-congrats_d4',
                        'completed-glow': 'InfiniteCard_completed-glow_e5',
                        edge: 'InfiniteCard_edge_75',
                        dissolve: 'InfiniteCard_dissolve_bd',
                        'blink-edge': 'InfiniteCard_blink-edge_df',
                        blink: 'InfiniteCard_blink_4b',
                        'show-down': 'InfiniteCard_show-down_ce',
                        'show-up': 'InfiniteCard_show-up_4b',
                        hide: 'InfiniteCard_hide_b2',
                        showGlow: 'InfiniteCard_showGlow_47',
                        hideGlow: 'InfiniteCard_hideGlow_19',
                        pointFadeOut: 'InfiniteCard_pointFadeOut_50',
                        pointFadeIn: 'InfiniteCard_pointFadeIn_aa',
                    },
                    Au = 'first',
                    Fu = 'second',
                    Cu = 'third',
                    Du = 'fourth',
                    pu = {
                        [Du]: { timeout: 1e3, nextOnEntering: !1 },
                        [Cu]: { timeout: 1400, nextOnEntering: !1 },
                        [Fu]: { timeout: 1400, nextOnEntering: !0 },
                        [Au]: { timeout: 2500, nextOnEntering: !1 },
                    },
                    hu = (0, V.Pi)(({ postfix: e, isDetached: t, nextTrigger: u, isBig: n, isTransitionActive: r }) => {
                        const o = Ze().model,
                            l = (0, a.useRef)(!0),
                            d = o.computes.needChangePage(),
                            c = pu[e],
                            _ = c.timeout,
                            E = c.nextOnEntering,
                            m = e === Au,
                            g = e === Du,
                            A = n ? oe.Big : oe.Small,
                            F = t ? ne.Detaching : ne.Inactive;
                        return s().createElement(
                            'div',
                            {
                                className: p()(
                                    gu.base,
                                    n && gu.base__big,
                                    gu[`base__${e}`],
                                    !m && gu.base__completed,
                                    d && gu.base__presentment,
                                ),
                                key: e,
                                onAnimationStart: () => {
                                    l.current && !g && (i.O.sound.play.sound(se.EvFepCardChange), (l.current = !1));
                                },
                            },
                            s().createElement(
                                mu.Z,
                                {
                                    onEntered: E ? je : u,
                                    onEntering: E ? u : je,
                                    in: r,
                                    timeout: _,
                                    key: e,
                                    className: gu.cardWrapper,
                                    classNames: { enter: gu.cardWrapper__enter, enterDone: gu.cardWrapper__enterDone },
                                },
                                s().createElement(
                                    'div',
                                    { className: gu.cardWrapper },
                                    s().createElement(Bt, {
                                        infinite: !0,
                                        classMix: { content: gu.content, shadow: gu.shadow, pattern: gu.pattern },
                                        state: F,
                                        rewardsSize: A,
                                    }),
                                ),
                            ),
                        );
                    }),
                    Bu = [Du, Cu, Fu, Au],
                    bu = ({ startAllowed: e, progressLevelUps: t }) => {
                        const u = wt(),
                            n = w(),
                            r = n.mediaHeight,
                            o = n.mediaWidth,
                            l = (0, a.useState)(0),
                            d = l[0],
                            c = l[1],
                            _ = (0, a.useState)(!1),
                            E = _[0],
                            m = _[1],
                            g = (0, a.useState)(t),
                            A = g[0],
                            F = g[1],
                            C = r >= v.Medium && o >= f.Small;
                        return (
                            (0, a.useEffect)(
                                () => (
                                    e &&
                                        A > 0 &&
                                        u.run(() => {
                                            c(1), m(!0);
                                        }, 300),
                                    () => {
                                        u.clear();
                                    }
                                ),
                                [e, A, E, u],
                            ),
                            s().createElement(
                                'div',
                                { className: p()('InfiniteCards_base_39', C && 'InfiniteCards_base__big_1a') },
                                Bu.map((e, t) =>
                                    s().createElement(hu, {
                                        key: e,
                                        nextTrigger: () =>
                                            ((e) => {
                                                i.O.sound.play.sound(se.EvFepCardChange),
                                                    0 === e ? (F((e) => e - 1), m(!1), c(0)) : c(Bu.length + 1 - e);
                                            })(t),
                                        isTransitionActive: d > Bu.length - 1 - t,
                                        postfix: e,
                                        isDetached: E && d > 0 && 'first' === e,
                                        isBig: C,
                                    }),
                                ),
                            )
                        );
                    };
                var fu = u(2558);
                let vu;
                !(function (e) {
                    (e.Active = 'active'), (e.Completed = 'completed');
                })(vu || (vu = {}));
                const wu = {
                        base: 'Quest_base_24',
                        base__completed: 'Quest_base__completed_19',
                        base__single_quest: 'Quest_base__single_quest_2b',
                        base__infinite: 'Quest_base__infinite_3e',
                        base__cursor_grab: 'Quest_base__cursor_grab_c0',
                        conditionIcon: 'Quest_conditionIcon_13',
                        questIcon: 'Quest_questIcon_2e',
                        questContent: 'Quest_questContent_01',
                        base__big: 'Quest_base__big_f0',
                        questProgress: 'Quest_questProgress_40',
                        questProgressCurrent: 'Quest_questProgressCurrent_93',
                        questTitle: 'Quest_questTitle_07',
                        questPoints: 'Quest_questPoints_88',
                        questPoint: 'Quest_questPoint_ef',
                        questPointTitle: 'Quest_questPointTitle_e9',
                        questPointScore: 'Quest_questPointScore_dc',
                        questPointBreak: 'Quest_questPointBreak_ae',
                    },
                    Tu = ({ mainBonusCount: e, state: t, totalPoints: u, altBonusCount: n }) => {
                        const a = R.strings.fun_random.progression.questsList.quest.progressChangeLabel;
                        return t === vu.Completed
                            ? [{ labelTemplate: a.pointsEarned(), valueTemplate: null, value: u.toString() }]
                            : n
                              ? [
                                    {
                                        labelTemplate: a.forWin(),
                                        valueTemplate: R.strings.fun_random.progression.questsList.quest.pointsPlus(),
                                        value: e,
                                    },
                                    {
                                        labelTemplate: a.forLoss(),
                                        valueTemplate: R.strings.fun_random.progression.questsList.quest.pointsPlus(),
                                        value: n,
                                    },
                                ]
                              : [
                                    {
                                        labelTemplate: a.forCompletion(),
                                        valueTemplate: R.strings.fun_random.progression.questsList.quest.pointsPlus(),
                                        value: e,
                                    },
                                ];
                    },
                    Pu = (0, V.Pi)(({ className: e, index: t = 0 }) => {
                        const u = Ze().model,
                            n = u.computes.quest(t),
                            a = u.cardsFan.computes.cursor,
                            r = w(),
                            i = r.mediaWidth,
                            o = r.remScreenWidth,
                            l = 1 === u.quests.get().length,
                            d = ((e, t, u) => {
                                const n = u >= f.Large ? 64 : 32;
                                return {
                                    backgroundImage: `url(${t === vu.Completed ? R.images.fun_random.gui.maps.icons.feature.quest.icon_mission_completed() : R.images.gui.maps.icons.missions.icons.$dyn(`c_${n}_${e}_silver`)})`,
                                };
                            })(n.iconKey, n.state, i),
                            c = Tu(n),
                            _ = c[0],
                            E = c[1],
                            m = o >= 1500 ? 'big' : 'small';
                        return s().createElement(
                            'div',
                            {
                                className: p()(
                                    wu.base,
                                    wu[`base__${m}`],
                                    wu[`base__${n.state}`],
                                    wu[`base__cursor_${a}`],
                                    l && wu.base__single_quest,
                                    e,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: wu.conditionIcon },
                                s().createElement('div', { className: wu.questIcon, style: d }),
                            ),
                            s().createElement(
                                'div',
                                { className: wu.questContent },
                                n.totalProgress >= 99
                                    ? s().createElement(
                                          'div',
                                          { className: wu.questProgress },
                                          R.strings.fun_random.progression.questsList.quest.infinityProgress(),
                                      )
                                    : s().createElement(ru, {
                                          text: R.strings.fun_random.progression.questsList.quest.progressTitle(),
                                          classMix: wu.questProgress,
                                          binding: {
                                              currentPoints: s().createElement(
                                                  'div',
                                                  { className: wu.questProgressCurrent },
                                                  n.currentProgress,
                                              ),
                                              totalPoints: n.totalProgress,
                                          },
                                      }),
                                s().createElement('div', { className: wu.questTitle }, n.description),
                                s().createElement(
                                    'div',
                                    { className: wu.questPoints },
                                    s().createElement(ru, {
                                        text: _.labelTemplate,
                                        classMix: wu.questPointTitle,
                                        binding: {
                                            points: _.valueTemplate
                                                ? s().createElement(ru, {
                                                      text: _.valueTemplate,
                                                      classMix: wu.questPointScore,
                                                      binding: { pointsCount: _.value },
                                                  })
                                                : s().createElement('div', { className: wu.questPointScore }, _.value),
                                        },
                                    }),
                                    E &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', { className: wu.questPointBreak }),
                                            s().createElement(ru, {
                                                text: E.labelTemplate,
                                                classMix: wu.questPointTitle,
                                                binding: {
                                                    points: E.valueTemplate
                                                        ? s().createElement(ru, {
                                                              text: E.valueTemplate,
                                                              classMix: wu.questPointScore,
                                                              binding: { pointsCount: E.value },
                                                          })
                                                        : s().createElement(
                                                              'div',
                                                              { className: wu.questPointScore },
                                                              E.value,
                                                          ),
                                                },
                                            }),
                                        ),
                                ),
                            ),
                        );
                    }),
                    Iu = {
                        base: 'InfiniteQuestCondition_base_a3',
                        conditionsDescription: 'InfiniteQuestCondition_conditionsDescription_c8',
                        conditionsPoints: 'InfiniteQuestCondition_conditionsPoints_1c',
                        conditionsPointsItem: 'InfiniteQuestCondition_conditionsPointsItem_64',
                        currentPoint: 'InfiniteQuestCondition_currentPoint_2a',
                        currentPointItem: 'InfiniteQuestCondition_currentPointItem_27',
                        currentPointItem__enter: 'InfiniteQuestCondition_currentPointItem__enter_d5',
                        pointFadeIn: 'InfiniteQuestCondition_pointFadeIn_42',
                        currentPointItem__exit: 'InfiniteQuestCondition_currentPointItem__exit_3a',
                        pointFadeOut: 'InfiniteQuestCondition_pointFadeOut_c1',
                        'completed-congrats': 'InfiniteQuestCondition_completed-congrats_8a',
                        'completed-glow': 'InfiniteQuestCondition_completed-glow_ce',
                        'card-show': 'InfiniteQuestCondition_card-show_07',
                        'card-show-presentment': 'InfiniteQuestCondition_card-show-presentment_3f',
                        edge: 'InfiniteQuestCondition_edge_6a',
                        dissolve: 'InfiniteQuestCondition_dissolve_69',
                        'blink-edge': 'InfiniteQuestCondition_blink-edge_f8',
                        blink: 'InfiniteQuestCondition_blink_8d',
                        'show-down': 'InfiniteQuestCondition_show-down_23',
                        'show-up': 'InfiniteQuestCondition_show-up_37',
                        show: 'InfiniteQuestCondition_show_36',
                        hide: 'InfiniteQuestCondition_hide_cd',
                        showGlow: 'InfiniteQuestCondition_showGlow_c6',
                        hideGlow: 'InfiniteQuestCondition_hideGlow_78',
                        first2void: 'InfiniteQuestCondition_first2void_1f',
                        second2firstTranslate: 'InfiniteQuestCondition_second2firstTranslate_b6',
                        second2firstRotate: 'InfiniteQuestCondition_second2firstRotate_0a',
                        third2second: 'InfiniteQuestCondition_third2second_a5',
                    },
                    Su = (0, V.Pi)(({ points: e, className: t, delay: u }) => {
                        const n = Ze().model.infiniteCondition.get().maximumPoints;
                        return s().createElement(
                            'div',
                            { className: p()(Iu.base, t) },
                            s().createElement(
                                'div',
                                { className: Iu.conditionsPoints },
                                s().createElement(
                                    'div',
                                    { className: Iu.conditionsDescription },
                                    R.strings.fun_random.progression.infinite.pointsEarned(),
                                ),
                                s().createElement(
                                    'div',
                                    { className: p()(Iu.conditionsPointsItem, Iu.conditionsPointsItem__divider) },
                                    s().createElement(ru, {
                                        text: R.strings.fun_random.progression.infinite.steps(),
                                        binding: {
                                            done: s().createElement(
                                                fu.Z,
                                                { className: Iu.currentPoint },
                                                s().createElement(
                                                    mu.Z,
                                                    {
                                                        key: `points-${e}`,
                                                        timeout: u,
                                                        onExited: () => {
                                                            i.O.sound.play.sound(se.EvFepCounterChange);
                                                        },
                                                        classNames: {
                                                            enter: Iu.currentPointItem__enter,
                                                            exit: Iu.currentPointItem__exit,
                                                        },
                                                    },
                                                    s().createElement('div', { className: Iu.currentPointItem }, e),
                                                ),
                                            ),
                                            total: s().createElement('div', { className: Iu.conditionsPointsItem }, n),
                                        },
                                    }),
                                ),
                            ),
                        );
                    }),
                    Ru = 'InfiniteQuest_questPointTitle_40',
                    xu = 'InfiniteQuest_questPointScore_88',
                    Lu = (0, V.Pi)(({ progress: e }) => {
                        const t = Ze().model,
                            u = t.root.get().assetsPointer,
                            a = t.computes.infiniteQuest(),
                            r = K('progression', { assetsPointer: u }).dynamicTexts,
                            i = Tu(a),
                            o = i[0],
                            l = i[1];
                        return s().createElement(
                            'div',
                            { className: 'InfiniteQuest_base_9e' },
                            s().createElement(
                                'div',
                                { className: 'InfiniteQuest_questContent_fe' },
                                s().createElement(ru, {
                                    text: r.questsList.quest.infinityStageProgress(),
                                    classMix: 'InfiniteQuest_questProgress_e6',
                                    binding: {
                                        currentPoints: s().createElement(
                                            fu.Z,
                                            { className: 'InfiniteQuest_questProgressCurrent_28' },
                                            s().createElement(
                                                mu.Z,
                                                {
                                                    key: `progress-${e}`,
                                                    timeout: n.TRANSITION_DELAY,
                                                    classNames: {
                                                        enter: 'InfiniteQuest_questProgressCurrentItem__enter_eb',
                                                        exit: 'InfiniteQuest_questProgressCurrentItem__exit_f3',
                                                    },
                                                },
                                                s().createElement(
                                                    'div',
                                                    { className: 'InfiniteQuest_questProgressCurrentItem_f4' },
                                                    e,
                                                ),
                                            ),
                                        ),
                                        infinitySign: s().createElement('div', {
                                            className: 'InfiniteQuest_infinity_b3',
                                        }),
                                    },
                                }),
                                s().createElement('div', { className: 'InfiniteQuest_questTitle_cd' }, a.description),
                                s().createElement(
                                    'div',
                                    { className: 'InfiniteQuest_questPoints_6e' },
                                    s().createElement(ru, {
                                        text: o.labelTemplate,
                                        classMix: Ru,
                                        binding: {
                                            points: o.valueTemplate
                                                ? s().createElement(ru, {
                                                      text: o.valueTemplate,
                                                      classMix: xu,
                                                      binding: { pointsCount: o.value },
                                                  })
                                                : s().createElement('div', { className: xu }, o.value),
                                        },
                                    }),
                                    l &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', { className: 'InfiniteQuest_questPointBreak_8a' }),
                                            s().createElement(ru, {
                                                text: l.labelTemplate,
                                                classMix: Ru,
                                                binding: {
                                                    points: l.valueTemplate
                                                        ? s().createElement(ru, {
                                                              text: l.valueTemplate,
                                                              classMix: xu,
                                                              binding: { pointsCount: l.value },
                                                          })
                                                        : s().createElement('div', { className: xu }, l.value),
                                                },
                                            }),
                                        ),
                                ),
                            ),
                        );
                    }),
                    yu = {
                        base: 'InfiniteTitle_base_90',
                        base__shown: 'InfiniteTitle_base__shown_67',
                        'show-down': 'InfiniteTitle_show-down_1b',
                        glow: 'InfiniteTitle_glow_b3',
                        glow__show: 'InfiniteTitle_glow__show_5c',
                        show: 'InfiniteTitle_show_47',
                        hide: 'InfiniteTitle_hide_e7',
                        base__medium: 'InfiniteTitle_base__medium_69',
                        base__large: 'InfiniteTitle_base__large_64',
                        base__extraLarge: 'InfiniteTitle_base__extraLarge_78',
                        title: 'InfiniteTitle_title_2c',
                        mainHeader: 'InfiniteTitle_mainHeader_64',
                        congrats: 'InfiniteTitle_congrats_6f',
                        congrats__hidden: 'InfiniteTitle_congrats__hidden_0b',
                        subtitle: 'InfiniteTitle_subtitle_e9',
                        subtitle__uppercase: 'InfiniteTitle_subtitle__uppercase_e0',
                        subtitle__faded: 'InfiniteTitle_subtitle__faded_a3',
                        congratsSubtitle: 'InfiniteTitle_congratsSubtitle_c7',
                        congratsSubtitle__hidden: 'InfiniteTitle_congratsSubtitle__hidden_40',
                        'completed-congrats': 'InfiniteTitle_completed-congrats_f8',
                        'completed-glow': 'InfiniteTitle_completed-glow_25',
                        'card-show': 'InfiniteTitle_card-show_1e',
                        'card-show-presentment': 'InfiniteTitle_card-show-presentment_f8',
                        edge: 'InfiniteTitle_edge_8e',
                        dissolve: 'InfiniteTitle_dissolve_8f',
                        'blink-edge': 'InfiniteTitle_blink-edge_6f',
                        blink: 'InfiniteTitle_blink_82',
                        'show-up': 'InfiniteTitle_show-up_d7',
                        showGlow: 'InfiniteTitle_showGlow_74',
                        hideGlow: 'InfiniteTitle_hideGlow_68',
                        pointFadeOut: 'InfiniteTitle_pointFadeOut_93',
                        pointFadeIn: 'InfiniteTitle_pointFadeIn_a3',
                        first2void: 'InfiniteTitle_first2void_67',
                        second2firstTranslate: 'InfiniteTitle_second2firstTranslate_ea',
                        second2firstRotate: 'InfiniteTitle_second2firstRotate_07',
                        third2second: 'InfiniteTitle_third2second_2e',
                    },
                    Ou = (0, V.Pi)(() => {
                        const e = Ze().model,
                            t = e.root.get().assetsPointer,
                            u = e.computes.needChangePage(),
                            n = e.infiniteCondition.get().title,
                            r = K('progression', { assetsPointer: t }).dynamicTexts,
                            i = Yt(['base'], yu),
                            o = (0, a.useState)(!1),
                            l = o[0],
                            d = o[1],
                            c = (0, a.useState)(!u),
                            _ = c[0],
                            E = c[1],
                            m = (0, a.useState)(!u),
                            g = m[0],
                            A = m[1];
                        return s().createElement(
                            'div',
                            {
                                className: p()(i.base, yu.base__shown),
                                onAnimationEnd: () => {
                                    u && d(!0);
                                },
                            },
                            s().createElement('div', {
                                className: p()(yu.glow, l && yu.glow__show),
                                onAnimationEnd: () => E(!0),
                            }),
                            s().createElement('div', { className: yu.title }, n),
                            g
                                ? s().createElement(
                                      'div',
                                      { className: yu.mainHeader },
                                      s().createElement(
                                          'div',
                                          { className: p()(yu.subtitle, yu.subtitle__main, yu.subtitle__uppercase) },
                                          r.infinite.infinityStep(),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: p()(yu.subtitle, yu.subtitle__main) },
                                          s().createElement(lu, null),
                                      ),
                                  )
                                : s().createElement(
                                      'div',
                                      {
                                          className: p()(yu.congrats, _ && yu.congrats__hidden),
                                          onTransitionEnd: () => A(!0),
                                      },
                                      s().createElement(
                                          'div',
                                          { className: yu.subtitle },
                                          r.infinite.congratulations(),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: p()(yu.congratsSubtitle, _ && yu.congratsSubtitle__hidden) },
                                          r.infinite.mainProgressionFinished(),
                                      ),
                                  ),
                        );
                    }),
                    Nu = {
                        base: 'InfiniteProgression_base_e3',
                        content: 'InfiniteProgression_content_68',
                        questContainer: 'InfiniteProgression_questContainer_fe',
                        'show-up': 'InfiniteProgression_show-up_84',
                        base__medium: 'InfiniteProgression_base__medium_ba',
                        base__large: 'InfiniteProgression_base__large_52',
                        base__extraLarge: 'InfiniteProgression_base__extraLarge_da',
                        questCondition: 'InfiniteProgression_questCondition_b5',
                        'completed-congrats': 'InfiniteProgression_completed-congrats_18',
                        'completed-glow': 'InfiniteProgression_completed-glow_6d',
                        'card-show': 'InfiniteProgression_card-show_fb',
                        'card-show-presentment': 'InfiniteProgression_card-show-presentment_a5',
                        edge: 'InfiniteProgression_edge_10',
                        dissolve: 'InfiniteProgression_dissolve_23',
                        'blink-edge': 'InfiniteProgression_blink-edge_d6',
                        blink: 'InfiniteProgression_blink_b9',
                        'show-down': 'InfiniteProgression_show-down_73',
                        show: 'InfiniteProgression_show_c1',
                        hide: 'InfiniteProgression_hide_87',
                        showGlow: 'InfiniteProgression_showGlow_0f',
                        hideGlow: 'InfiniteProgression_hideGlow_fa',
                        pointFadeOut: 'InfiniteProgression_pointFadeOut_74',
                        pointFadeIn: 'InfiniteProgression_pointFadeIn_07',
                        first2void: 'InfiniteProgression_first2void_92',
                        second2firstTranslate: 'InfiniteProgression_second2firstTranslate_fb',
                        second2firstRotate: 'InfiniteProgression_second2firstRotate_86',
                        third2second: 'InfiniteProgression_third2second_77',
                    },
                    ku = (0, V.Pi)(() => {
                        const e = wt(),
                            t = Ze().model,
                            u = t.computes.needChangePage(),
                            n = t.infiniteCondition.get(),
                            r = n.prevCompleteCount,
                            i = n.completeCount,
                            o = n.prevPoints,
                            l = n.currentPoints,
                            d = (0, a.useState)({ previous: o, current: l }),
                            c = d[0],
                            _ = d[1],
                            E = (0, a.useState)(r),
                            m = E[0],
                            g = E[1],
                            A = Yt(['base'], Nu),
                            F = u ? 4100 : 3500,
                            C = c.previous === c.current && m === i;
                        return (
                            (0, a.useEffect)(
                                () => (
                                    _({ previous: o, current: l }),
                                    g(r),
                                    e.run(() => {
                                        _((e) => ({ previous: e.current, current: e.current })), g(i);
                                    }, F),
                                    () => {
                                        e.clear();
                                    }
                                ),
                                [i, e, F, o, l, r],
                            ),
                            s().createElement(
                                'div',
                                { className: A.base },
                                s().createElement(Ou, null),
                                s().createElement(
                                    'div',
                                    { className: Nu.content },
                                    s().createElement(bu, { startAllowed: C, progressLevelUps: i - r }),
                                    s().createElement(
                                        'div',
                                        { className: Nu.questContainer },
                                        s().createElement(Lu, { progress: m }),
                                        s().createElement(Su, {
                                            className: Nu.questCondition,
                                            delay: i - r > 0 ? 4400 : 1e3,
                                            points: c.previous,
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Mu = 'CurrentPoints_base_85',
                    Hu = ({ prevPoints: e, currentPoints: t, animate: u, className: n }) => (
                        (0, a.useEffect)(() => {
                            u && e !== t && i.O.sound.play.sound(se.EvFepCounterChange);
                        }, [u, t, e]),
                        u && e !== t
                            ? s().createElement(
                                  'div',
                                  { className: p()(Mu, n) },
                                  s().createElement('div', { className: 'CurrentPoints_text_63' }, t),
                                  s().createElement('div', { className: 'CurrentPoints_prev_d0' }, e),
                                  s().createElement('div', { className: 'CurrentPoints_current_5c' }, t),
                              )
                            : s().createElement('div', { className: p()(Mu, n) }, e)
                    ),
                    Gu = {
                        base: 'QuestsList_base_db',
                        base__hide: 'QuestsList_base__hide_e1',
                        toQuestsUpdate: 'QuestsList_toQuestsUpdate_5a',
                        oneQuest: 'QuestsList_oneQuest_a8',
                        oneQuest__completed: 'QuestsList_oneQuest__completed_e1',
                        severalQuests: 'QuestsList_severalQuests_49',
                        questsList: 'QuestsList_questsList_37',
                        quest: 'QuestsList_quest_3a',
                        base__bigQuests: 'QuestsList_base__bigQuests_86',
                        currentProgress: 'QuestsList_currentProgress_db',
                        base__minScreen: 'QuestsList_base__minScreen_22',
                        currentProgressTitle: 'QuestsList_currentProgressTitle_50',
                        currentProgressPoints: 'QuestsList_currentProgressPoints_6a',
                        currentProgressPointsEarned: 'QuestsList_currentProgressPointsEarned_17',
                        'completed-congrats': 'QuestsList_completed-congrats_35',
                        'completed-glow': 'QuestsList_completed-glow_56',
                        'card-show': 'QuestsList_card-show_e9',
                        'card-show-presentment': 'QuestsList_card-show-presentment_98',
                        edge: 'QuestsList_edge_c5',
                        dissolve: 'QuestsList_dissolve_c5',
                        'blink-edge': 'QuestsList_blink-edge_8d',
                        blink: 'QuestsList_blink_22',
                        'show-down': 'QuestsList_show-down_71',
                        'show-up': 'QuestsList_show-up_43',
                        show: 'QuestsList_show_4a',
                        hide: 'QuestsList_hide_fd',
                        showGlow: 'QuestsList_showGlow_33',
                        hideGlow: 'QuestsList_hideGlow_83',
                        pointFadeOut: 'QuestsList_pointFadeOut_94',
                        pointFadeIn: 'QuestsList_pointFadeIn_c0',
                        first2void: 'QuestsList_first2void_29',
                        second2firstTranslate: 'QuestsList_second2firstTranslate_2a',
                        second2firstRotate: 'QuestsList_second2firstRotate_81',
                        third2second: 'QuestsList_third2second_a8',
                    },
                    Uu = (0, V.Pi)(({ className: e }) => {
                        const t = Ze().model,
                            u = t.root.get().assetsPointer,
                            n = t.condition.prevPoints.get(),
                            a = t.condition.currentPoints.get(),
                            r = t.condition.maximumPoints.get(),
                            i = t.computes.finalAnimationStatus(),
                            o = i.completedWithAnimation,
                            l = i.completedNoAnimation,
                            d = t.cardsFan.model.progress.state.runCounter.get(),
                            c = t.quests.get().length,
                            _ = w().remScreenWidth,
                            E = 1 === c ? 'oneQuest' : 'severalQuests',
                            m = c > 0 ? t.computes.quest(0).state : vu.Active,
                            g = K('progression', { assetsPointer: u }).dynamicTexts;
                        return l
                            ? null
                            : s().createElement(
                                  'div',
                                  {
                                      className: p()(
                                          Gu.base,
                                          _ >= 1500 && Gu.base__bigQuests,
                                          _ <= 1024 && Gu.base__minScreen,
                                          o && Gu.base__hide,
                                          e,
                                      ),
                                  },
                                  s().createElement(
                                      'div',
                                      { className: p()(Gu[E], Gu[`${E}__${m}`]) },
                                      s().createElement(
                                          'div',
                                          { className: Gu.questsList },
                                          ee(c, (e) =>
                                              s().createElement(Pu, { key: e, className: Gu.quest, index: e }),
                                          ),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: Gu.currentProgress },
                                          c > 1
                                              ? s().createElement(ru, {
                                                    text: g.questsList.totalPointsEarned(),
                                                    classMix: Gu.currentProgressTitle,
                                                    binding: {
                                                        progressionSteps: s().createElement(ru, {
                                                            text: R.strings.fun_random.progression.steps(),
                                                            classMix: Gu.currentProgressPoints,
                                                            binding: {
                                                                done: s().createElement(Hu, {
                                                                    className: Gu.currentProgressPointsEarned,
                                                                    prevPoints: n,
                                                                    currentPoints: a,
                                                                    animate: d,
                                                                }),
                                                                total: r,
                                                            },
                                                        }),
                                                    },
                                                })
                                              : s().createElement(
                                                    s().Fragment,
                                                    null,
                                                    s().createElement(
                                                        'div',
                                                        { className: Gu.currentProgressTitle },
                                                        g.questsList.totalPointsEarnedStandAloneTitle(),
                                                    ),
                                                    s().createElement(ru, {
                                                        text: R.strings.fun_random.progression.steps(),
                                                        classMix: Gu.currentProgressPoints,
                                                        binding: {
                                                            done: s().createElement(Hu, {
                                                                className: Gu.currentProgressPointsEarned,
                                                                prevPoints: n,
                                                                currentPoints: a,
                                                                animate: d,
                                                            }),
                                                            total: r,
                                                        },
                                                    }),
                                                ),
                                      ),
                                  ),
                              );
                    }),
                    qu = (e, t) => {
                        const u = Z(e).progression.random_rewards;
                        return t >= v.Large
                            ? u.random_rewards_icon_big()
                            : t >= v.Medium
                              ? u.random_rewards_icon_medium()
                              : u.random_rewards_icon_small();
                    },
                    Qu = ({ assetsPointer: e, onClick: t, className: u }) => {
                        const n = w().mediaHeight,
                            a = K('progression', { assetsPointer: e }).dynamicTexts;
                        return s().createElement(
                            'div',
                            {
                                className: p()('RandomRewardsButton_base_e6', u),
                                onMouseEnter: () => i.O.sound.play.highlight(),
                                onClick: () => {
                                    i.O.sound.play.click(), t();
                                },
                            },
                            s().createElement('div', {
                                className: 'RandomRewardsButton_randomRewardsImage_1a',
                                style: { backgroundImage: `url(${qu(e, n)})` },
                            }),
                            s().createElement(
                                'div',
                                { className: 'RandomRewardsButton_randomRewardsText_d7' },
                                a.cardsFan.listOfRandomRewards(),
                            ),
                        );
                    },
                    $u = {
                        base: 'App_base_80',
                        base__cursor_default: 'App_base__cursor_default_d8',
                        base__cursor_grab: 'App_base__cursor_grab_75',
                        base__cursor_grabbing: 'App_base__cursor_grabbing_b5',
                        close: 'App_close_ec',
                        info: 'App_info_30',
                        debugButton: 'App_debugButton_4a',
                        bg: 'App_bg_04',
                        header: 'App_header_2e',
                        progressionContainer: 'App_progressionContainer_9a',
                        base__completed: 'App_base__completed_5b',
                        ordinaryProgression: 'App_ordinaryProgression_be',
                        questsList: 'App_questsList_7c',
                        cardProgressionContainer: 'App_cardProgressionContainer_f2',
                        cardProgression: 'App_cardProgression_0e',
                        base__completedAnimated: 'App_base__completedAnimated_42',
                        fadeBackground: 'App_fadeBackground_35',
                        fadeLeft: 'App_fadeLeft_74',
                        fadeRight: 'App_fadeRight_e0',
                        toRandomRewards: 'App_toRandomRewards_2a',
                        completedProgression: 'App_completedProgression_79',
                        'completed-congrats': 'App_completed-congrats_9b',
                        'completed-glow': 'App_completed-glow_20',
                        'card-show': 'App_card-show_dd',
                        'card-show-presentment': 'App_card-show-presentment_ea',
                        edge: 'App_edge_13',
                        dissolve: 'App_dissolve_0b',
                        'blink-edge': 'App_blink-edge_38',
                        blink: 'App_blink_6d',
                        'show-down': 'App_show-down_5e',
                        'show-up': 'App_show-up_6e',
                        show: 'App_show_1d',
                        hide: 'App_hide_cf',
                        showGlow: 'App_showGlow_cc',
                        hideGlow: 'App_hideGlow_eb',
                        pointFadeOut: 'App_pointFadeOut_ae',
                        pointFadeIn: 'App_pointFadeIn_56',
                        first2void: 'App_first2void_a9',
                        second2firstTranslate: 'App_second2firstTranslate_53',
                        second2firstRotate: 'App_second2firstRotate_23',
                        third2second: 'App_third2second_31',
                    },
                    Wu = (0, V.Pi)(() => {
                        const e = Ze(),
                            t = e.model,
                            u = e.controls,
                            n = t.computes.finalAnimationStatus(),
                            r = n.completedWithAnimation,
                            o = n.completedNoAnimation,
                            l = t.computes.pageStatus(),
                            d = t.computes.needChangePage(),
                            c = t.cardsFan.computes.cursor,
                            _ = t.root.get().assetsPointer,
                            E = Se(l),
                            m = E.isActive,
                            g = E.isInfinite,
                            A = E.isCompleted,
                            F = (0, a.useState)(g && !d),
                            C = F[0],
                            D = F[1],
                            h = (0, a.useState)(!1),
                            B = h[0],
                            b = h[1];
                        var f;
                        (f = u.close),
                            j(Q.n.ESCAPE, f),
                            (0, a.useEffect)(() => {
                                D(g && !d);
                            }, [g, d]);
                        const v = (0, z.useSpring)(() => ({
                                from: { opacity: 1, transform: 'translateY(0rem)' },
                                config: { duration: 500 },
                                onRest: () => D(!0),
                                onStart: () => {
                                    i.O.sound.play.sound(se.EvFepInfStepTransition), b(!0);
                                },
                            })),
                            w = v[0],
                            T = v[1];
                        return (
                            (0, a.useEffect)(() => {
                                g && d && T.start({ to: { opacity: 0, transform: 'translateY(20rem)' }, delay: 800 });
                            }, [g, d, T, m]),
                            (0, a.useEffect)(() => {
                                B && (u.cardsFun.setState(Le.Blocked), u.cardsFun.setAssembled(!0));
                            }, [u.cardsFun, B]),
                            s().createElement(
                                'div',
                                {
                                    className: p()(
                                        $u.base,
                                        $u[`base__${l}`],
                                        $u[`base__cursor_${c.get()}`],
                                        A && $u.base__completed,
                                        r && $u.base__completedAnimated,
                                    ),
                                },
                                s().createElement('div', {
                                    className: $u.bg,
                                    style: { backgroundImage: `url('${Z(_).library.progression_bg()}')` },
                                }),
                                s().createElement(
                                    'div',
                                    { className: $u.close },
                                    s().createElement(q, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: u.close,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: $u.info },
                                    s().createElement(q, {
                                        caption: R.strings.menu.viewHeader.aboutBtn.label(),
                                        type: 'info',
                                        side: 'left',
                                        onClick: u.showInfo,
                                    }),
                                ),
                                C
                                    ? s().createElement(ku, null)
                                    : s().createElement(
                                          'div',
                                          { className: $u.progressionContainer },
                                          s().createElement(
                                              z.animated.div,
                                              { style: w, className: $u.ordinaryProgression },
                                              s().createElement(Eu, { className: $u.header }),
                                              s().createElement(Uu, { className: $u.questsList }),
                                              s().createElement(
                                                  'div',
                                                  { className: $u.cardProgressionContainer },
                                                  s().createElement(yt, { className: $u.cardProgression }),
                                              ),
                                          ),
                                      ),
                                A &&
                                    s().createElement(
                                        'div',
                                        { className: $u.completedProgression },
                                        s().createElement(cu, null),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: $u.fadeBackground },
                                    s().createElement('div', { className: $u.fadeLeft }),
                                    s().createElement('div', { className: $u.fadeRight }),
                                ),
                                !o &&
                                    s().createElement(Qu, {
                                        className: $u.toRandomRewards,
                                        onClick: u.onOpenTierList,
                                        assetsPointer: _,
                                    }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    k().render(
                        s().createElement(Ke, null, s().createElement(O, null, s().createElement(Wu, null))),
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
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](u, u.exports, __webpack_require__), u.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, n] = deferred[o], s = !0, r = 0; r < t.length; r++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[r]))
                            ? t.splice(r--, 1)
                            : ((s = !1), n < a && (a = n));
                    if (s) {
                        deferred.splice(o--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (__webpack_require__.j = 314),
        (() => {
            var e = { 314: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [s, r, i] = u,
                        o = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (n in r) __webpack_require__.o(r, n) && (__webpack_require__.m[n] = r[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(u); o < s.length; o++)
                        (a = s[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7720));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
