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
            2472: (e, u, t) => {
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
            5840: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => h });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => _, off: () => d, on: () => l, onResize: () => r, onScaleUpdated: () => o });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => A,
                        getSize: () => g,
                        graphicsQuality: () => F,
                        playSound: () => E,
                        setRTPC: () => m,
                    });
                var s = t(2472);
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const r = (0, s.E)('clientResized'),
                    o = (0, s.E)('self.onScaleUpdated'),
                    l = (e, u) => engine.on(e, u),
                    d = (e, u) => engine.off(e, u),
                    c = { down: (0, s.E)('mousedown'), up: (0, s.E)('mouseup'), move: (0, s.E)('mousemove') },
                    _ = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && i(!1);
                        }
                        function t() {
                            e.enabled && i(!0);
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
                                : i(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const s = `mouse${u}`,
                                            i = c[u]((e) => t([e, 'outside']));
                                        function r(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(s, r),
                                            n(),
                                            () => {
                                                a &&
                                                    (i(),
                                                    window.removeEventListener(s, r),
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
                        return Object.assign({}, a, {
                            disable() {
                                (e.enabled = !1), n();
                            },
                            enable() {
                                (e.enabled = !0), n();
                            },
                            enableOutside() {
                                e.enabled && i(!0);
                            },
                            disableOutside() {
                                e.enabled && i(!1);
                            },
                        });
                    })();
                function E(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function m(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
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
                    D = Object.keys(C).reduce((e, u) => ((e[u] = () => E(C[u])), e), {}),
                    p = { play: Object.assign({}, D, { sound: E }), setRTPC: m },
                    h = { view: t(2031), client: a, sound: p };
            },
            2031: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => A,
                        addPreloadTexture: () => E,
                        children: () => n,
                        displayStatus: () => i,
                        displayStatusIs: () => R,
                        events: () => o,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => I,
                        freezeTextureBeforeResize: () => h,
                        getBrowserTexturePath: () => g,
                        getDisplayStatus: () => S,
                        getScale: () => B,
                        getSize: () => C,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => P,
                        isFocused: () => w,
                        pxToRem: () => f,
                        remToPx: () => b,
                        resize: () => D,
                        sendEvent: () => c,
                        setAnimateWindow: () => v,
                        setEventHandled: () => T,
                        setInputPaddingsRem: () => m,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => L,
                    });
                var n = {};
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function s(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(n), t.d(n, { getBgUrl: () => s, getTextureUrl: () => a });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
                var r = t(2472);
                const o = {
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
                    },
                    l = ['args'],
                    d = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, l);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
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
                    },
                    _ = 15;
                function E(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, _);
                }
                function g(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function A(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, _);
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function D(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function p(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: b(u.x), y: b(u.y) };
                }
                function h() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function B() {
                    return viewEnv.getScale();
                }
                function f(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function T() {
                    return viewEnv.setEventHandled();
                }
                function P() {
                    return viewEnv.isEventHandled();
                }
                function I() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const R = Object.keys(i).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === i[u]), e), {}),
                    x = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    L = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            5521: (e, u, t) => {
                'use strict';
                let n, a;
                t.d(u, { n: () => n }),
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => s });
                var n = t(5840);
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
                        const s = n.O.view.addModelObserver(e, t, a);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(s) : (this._views[t] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => s.Z, B3: () => l, Z5: () => i.Z5, B0: () => r, ry: () => C });
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
                var s = t(1358),
                    i = t(8613);
                let r;
                var o;
                ((o = r || (r = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
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
                var E = t(5521),
                    m = t(5840);
                const g = ['args'];
                function A(e, u, t, n, a, s, i) {
                    try {
                        var r = e[s](i),
                            o = r.value;
                    } catch (e) {
                        return void t(e);
                    }
                    r.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                        var s = e.apply(u, t);
                                        function i(e) {
                                            A(s, n, a, i, r, 'next', e);
                                        }
                                        function r(e) {
                                            A(s, n, a, i, r, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    p = () => D(r.CLOSE),
                    h = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var B = t(7572);
                const f = a.instance,
                    b = {
                        DataTracker: s.Z,
                        ViewModel: B.Z,
                        ViewEventType: r,
                        NumberFormatType: l,
                        RealFormatType: d,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(r.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => D(r.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(r.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), s) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                d = o.y,
                                c = o.width,
                                _ = o.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(d) + i.y,
                                    width: m.O.view.pxToRem(c),
                                    height: m.O.view.pxToRem(_),
                                };
                            D(r.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: F(E),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(r.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(r.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(r.POP_OVER),
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
                        ClickOutsideManager: f,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => s, Z5: () => n, cy: () => a });
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
                    s = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            7720: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n), t.d(n, { p: () => xt });
                var a = t(6179),
                    s = t.n(a);
                const i = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var r = t(5840);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function d(e, u, t) {
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
                        s = Math.min(n, a);
                    return {
                        extraLarge: s === t.extraLarge.weight,
                        large: s === t.large.weight,
                        medium: s === t.medium.weight,
                        small: s === t.small.weight,
                        extraSmall: s === t.extraSmall.weight,
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
                })(l || (l = {}));
                const c = r.O.client.getSize('rem'),
                    _ = c.width,
                    E = c.height,
                    m = Object.assign({ width: _, height: E }, d(_, E, o)),
                    g = (0, a.createContext)(m),
                    A = ['children'],
                    F = (e) => {
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
                            })(e, A);
                        const n = (0, a.useContext)(g),
                            s = n.extraLarge,
                            r = n.large,
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
                            f = { extraLarge: C, large: D, medium: p, small: h, extraSmall: B };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && r) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && d) return u;
                        } else {
                            if (t.extraLargeWidth && c) return i(u, t, f);
                            if (t.largeWidth && _) return i(u, t, f);
                            if (t.mediumWidth && E) return i(u, t, f);
                            if (t.smallWidth && m) return i(u, t, f);
                            if (t.extraSmallWidth && F) return i(u, t, f);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && C) return u;
                                if (t.largeHeight && D) return u;
                                if (t.mediumHeight && p) return u;
                                if (t.smallHeight && h) return u;
                                if (t.extraSmallHeight && B) return u;
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
                    const u = (0, a.useContext)(g),
                        t = (0, a.useState)(u),
                        n = t[0],
                        i = t[1],
                        l = (0, a.useCallback)((e, u) => {
                            const t = r.O.view.pxToRem(e),
                                n = r.O.view.pxToRem(u);
                            i(Object.assign({ width: t, height: n }, d(t, n, o)));
                        }, []),
                        c = (0, a.useCallback)(() => {
                            const e = r.O.client.getSize('px');
                            l(e.width, e.height);
                        }, [l]);
                    ((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        r.O.client.events.on('clientResized', l), r.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                r.O.client.events.off('clientResized', l),
                                    r.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [l, c],
                        );
                    const _ = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                    return s().createElement(g.Provider, { value: _ }, e);
                };
                var D = t(6483),
                    p = t.n(D),
                    h = t(926),
                    B = t.n(h);
                let f, b, v;
                !(function (e) {
                    (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const w = () => {
                        const e = (0, a.useContext)(g),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return f.ExtraLarge;
                                    case e.large:
                                        return f.Large;
                                    case e.medium:
                                        return f.Medium;
                                    case e.small:
                                        return f.Small;
                                    case e.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case e.largeWidth:
                                        return b.Large;
                                    case e.mediumWidth:
                                        return b.Medium;
                                    case e.smallWidth:
                                        return b.Small;
                                    case e.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
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
                        return { mediaSize: n, mediaWidth: s, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function P() {
                    return (
                        (P = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        P.apply(null, arguments)
                    );
                }
                const I = {
                        [b.ExtraSmall]: '',
                        [b.Small]: B().SMALL_WIDTH,
                        [b.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [b.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [v.ExtraSmall]: '',
                        [v.Small]: B().SMALL_HEIGHT,
                        [v.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [v.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [f.ExtraSmall]: '',
                        [f.Small]: B().SMALL,
                        [f.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [f.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [f.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    L = (e) => {
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
                        const a = w(),
                            i = a.mediaWidth,
                            r = a.mediaHeight,
                            o = a.mediaSize;
                        return s().createElement('div', P({ className: p()(t, I[i], S[r], x[o]) }, n), u);
                    },
                    y = ['children'],
                    O = (e) => {
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
                            })(e, y);
                        return s().createElement(C, null, s().createElement(L, t, u));
                    };
                var N = t(493),
                    k = t.n(N);
                function M(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const G = {
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
                    H = [
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
                        (U = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        U.apply(null, arguments)
                    );
                }
                class q extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && M(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && M(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            a = e.side,
                            i = e.type,
                            r = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            d = e.onMouseDown,
                            c = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, H)),
                            E = p()(G.base, G[`base__${i}`], G[`base__${a}`], null == r ? void 0 : r.base),
                            m = p()(G.icon, G[`icon__${i}`], G[`icon__${a}`], null == r ? void 0 : r.icon),
                            g = p()(G.glow, null == r ? void 0 : r.glow),
                            A = p()(G.caption, G[`caption__${i}`], null == r ? void 0 : r.caption),
                            F = p()(G.goto, null == r ? void 0 : r.goto);
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
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== i && s().createElement('div', { className: G.shine }),
                            s().createElement('div', { className: m }, s().createElement('div', { className: g })),
                            s().createElement('div', { className: A }, u),
                            n && s().createElement('div', { className: F }, n),
                        );
                    }
                }
                q.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Q = t(5521),
                    $ = t(9916);
                const W = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function V(e = Q.n.NONE, u = W, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== Q.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && r.O.view.isEventHandled()) return;
                                r.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                var z = t(3403),
                    Y = t(7030);
                const j = R.images.fun_random.gui.maps.icons.feature.asset_packs,
                    X = 'undefined',
                    K = (e, u) => ('string' == typeof u ? e.$dyn(u) : u.reduce((e, u) => e.$dyn(u), e)),
                    Z = (e, { poFileName: u, assetsPointer: t, isSubMode: n } = {}) => {
                        const a = u ? R.strings.$dyn(u) : R.strings.fun_random;
                        if (!a || 'string' == typeof a) throw Error("Incorrect 'poFileName' argument");
                        const s = n ? 'sub_modes' : 'modes',
                            i = (t ? a.$dyn(s)[t] : a) || a.$dyn(s)[X];
                        return e
                            ? { staticTexts: K(a, e), dynamicTexts: K(i, e) }
                            : { staticTexts: a, dynamicTexts: i };
                    },
                    J = (e, u) => {
                        var t;
                        const n = u ? 'sub_modes' : 'modes',
                            a = j.$dyn(n);
                        return null != (t = a.$dyn(e)) ? t : a.$dyn(X);
                    },
                    ee = {
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
                            const u = Math.sqrt,
                                t = Math.pow;
                            return e < 0.5 ? (1 - u(1 - t(2 * e, 2))) / 2 : (u(1 - t(-2 * e + 2, 2)) + 1) / 2;
                        },
                        easeOutBack: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                        bezier: (e, u, t, n) => (a) =>
                            (1 - a) * (1 - a) * (1 - a) * e +
                            3 * (1 - a) * (1 - a) * a * u +
                            3 * (1 - a) * a * a * t +
                            a * a * a * n,
                    },
                    ue = (e, u) => {
                        const t = [];
                        for (let n = 0; n < e; n++) t.push(u(n));
                        return t;
                    };
                var te = t(9174),
                    ne = t(3946);
                let ae, se, ie, re, oe, le, de, ce, _e, Ee, me;
                !(function (e) {
                    (e.Inactive = 'inactive'),
                        (e.Active = 'active'),
                        (e.Detached = 'detached'),
                        (e.Detaching = 'detaching'),
                        (e.DetachingActive = 'detaching_active'),
                        (e.Deactivating = 'deactivating'),
                        (e.Activating = 'activating');
                })(ae || (ae = {})),
                    (function (e) {
                        (e.None = 'none'), (e.HidingGlow = 'hiding_glow'), (e.ShowingGlow = 'showing_glow');
                    })(se || (se = {})),
                    (function (e) {
                        (e.EvFepCounterChange = 'ev_fep_counter_change'),
                            (e.EvFepTearOffCard = 'ev_fep_tear_off_card'),
                            (e.EvFepCongratulate = 'ev_fep_congratulate'),
                            (e.EvFepCardStartMove = 'ev_fep_card_start_move'),
                            (e.EvFepCardStopMove = 'ev_fep_card_stop_move'),
                            (e.EvFepCardChange = 'ev_fep_card_change'),
                            (e.EvFepInfStepTransition = 'ev_fep_inf_step_transition'),
                            (e.RtpcExtFepWheelRotation = 'RTPC_ext_fep_wheel_rotation');
                    })(ie || (ie = {})),
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
                            (e.EpicSelectToken = 'epicSelectToken'),
                            (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (e.DeluxeGift = 'deluxe_gift'),
                            (e.BattleBoosterGift = 'battleBooster_gift'),
                            (e.OptionalDevice = 'optionalDevice'),
                            (e.EquipCoin = 'equipCoin'),
                            (e.LootBox = 'lootBox'),
                            (e.BrCoin = 'brcoin');
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
                    })(oe || (oe = {})),
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
                    })(le || (le = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(de || (de = {})),
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
                    })(ce || (ce = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(_e || (_e = {})),
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
                    })(Ee || (Ee = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(me || (me = {}));
                class ge extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? $.B3.GOLD : $.B3.INTEGRAL;
                        const u = $.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                ge.defaultProps = { format: 'integral' };
                const Ae = [
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
                        re.Comp7TokenWeeklyReward,
                        re.DeluxeGift,
                        re.BattleBoosterGift,
                        re.OptionalDevice,
                    ],
                    Fe = [re.Gold, re.Credits, re.Crystal, re.FreeXp],
                    Ce = [re.BattlePassPoints, re.EquipCoin],
                    De = [re.PremiumPlus, re.Premium],
                    pe = ['engravings', 'backgrounds'],
                    he = ['engraving', 'background'],
                    Be = (e, u = le.Small) => {
                        const t = e.name,
                            n = e.type,
                            a = e.value,
                            s = e.icon,
                            i = e.item,
                            r = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case le.S600x450:
                                        return 'c_600x450';
                                    case le.S400x300:
                                        return 'c_400x300';
                                    case le.S296x222:
                                        return 'c_296x222';
                                    case le.S232x174:
                                        return 'c_232x174';
                                    case le.Big:
                                        return 'c_80x80';
                                    case le.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${s}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${s}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = pe[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            s = a.$dyn(t);
                                        return s ? `${s}` : `${a.$dyn(he[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(r, u, s);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${s}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${s}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${s}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    fe = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    },
                    be = [le.Small, le.Big];
                let ve;
                function we(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                !(function (e) {
                    (e.DISABLED = 'disabled'),
                        (e.ACTIVE_FINAL = 'activeFinal'),
                        (e.ACTIVE_RESETTABLE = 'activeResettable'),
                        (e.COMPLETED_FINAL = 'completedFinal'),
                        (e.COMPLETED_RESETTABLE = 'completedResettable'),
                        (e.ACTIVE_INFINITE_RESETTABLE = 'activeInfiniteResettable'),
                        (e.ACTIVE_INFINITE_FINAL = 'activeInfiniteFinal');
                })(ve || (ve = {}));
                const Te = we;
                function Pe(e, u) {
                    for (let t = 0; t < e.length; t++) if (u(Te(e, t), t, e)) return t;
                }
                const Ie = (e, u) => {
                        return (
                            (t = e),
                            (n = (e) => {
                                return {
                                    name: e.name,
                                    image: Be(e, u),
                                    value: e.value,
                                    special: ce[e.overlayType],
                                    valueType:
                                        ((t = e.name),
                                        Ae.includes(t)
                                            ? de.MULTI
                                            : Fe.includes(t)
                                              ? de.CURRENCY
                                              : Ce.includes(t)
                                                ? de.NUMBER
                                                : De.includes(t)
                                                  ? de.PREMIUM_PLUS
                                                  : de.STRING),
                                    tooltipArgs: fe({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                };
                                var t;
                            }),
                            Array.isArray(t) ? t.map(n) : t.map((e, u, t) => n(null == e ? void 0 : e.value))
                        );
                        var t, n;
                    },
                    Se = {
                        [ve.DISABLED]: ve.DISABLED,
                        [ve.ACTIVE_FINAL]: ve.ACTIVE_FINAL,
                        [ve.ACTIVE_RESETTABLE]: ve.ACTIVE_RESETTABLE,
                        [ve.ACTIVE_INFINITE_FINAL]: ve.ACTIVE_FINAL,
                        [ve.ACTIVE_INFINITE_RESETTABLE]: ve.ACTIVE_RESETTABLE,
                        [ve.COMPLETED_FINAL]: ve.ACTIVE_FINAL,
                        [ve.COMPLETED_RESETTABLE]: ve.ACTIVE_RESETTABLE,
                    },
                    Re = (e) => ({
                        isActive: [ve.ACTIVE_FINAL, ve.ACTIVE_RESETTABLE].includes(e),
                        isInfinite: [ve.ACTIVE_INFINITE_FINAL, ve.ACTIVE_INFINITE_RESETTABLE].includes(e),
                        isCompleted: [ve.COMPLETED_FINAL, ve.COMPLETED_RESETTABLE].includes(e),
                        isResettable: [
                            ve.ACTIVE_RESETTABLE,
                            ve.COMPLETED_RESETTABLE,
                            ve.ACTIVE_INFINITE_RESETTABLE,
                        ].includes(e),
                    }),
                    xe = (e, u, t) => Math.min(t, Math.max(u, e)),
                    Le = (e, u, t) => Math.min(u, Math.max(t, e));
                let ye, Oe;
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
                })(ye || (ye = {})),
                    (function (e) {
                        (e[(e.Init = 0)] = 'Init'),
                            (e[(e.Detaching = 1)] = 'Detaching'),
                            (e[(e.Scroll = 2)] = 'Scroll'),
                            (e[(e.Finish = 3)] = 'Finish');
                    })(Oe || (Oe = {}));
                const Ne = [ye.FirstAnimation, ye.ShowProgress, ye.FinalAnimation, ye.Blocked];
                let ke;
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
                })(ke || (ke = {}));
                const Me = [
                        { delay: 100, duration: 400, action: ke.RunCounter },
                        { duration: 300, action: ke.HideGlow },
                    ],
                    Ge = [
                        { delay: 100, duration: 700, action: ke.Detach },
                        { delay: 300, action: ke.DeactivateCurrent },
                        { duration: 300, action: ke.ActivateNext },
                    ],
                    He = [{ duration: 500, action: ke.Scroll }],
                    Ue = [{ action: ke.FinishActivating }],
                    qe = [{ delay: 200, action: ke.Finish }],
                    Qe = [{ duration: 300, action: ke.ShowGlow }],
                    $e = {
                        [ye.Idle]: {},
                        [ye.Scrolling]: { duration: 400, easing: ee.linear },
                        [ye.Dragging]: { duration: 400, easing: ee.easeOutQuint },
                        [ye.InertialMovement]: { duration: 800, easing: ee.linear },
                        [ye.FirstAnimation]: { duration: 1e4, easing: ee.easeInOutQuint },
                        [ye.Normalization]: { duration: 1e3, easing: ee.easeOutQuint },
                        [ye.ShowProgress]: { duration: 500, easing: ee.easeOutQuint },
                        [ye.FinalAnimation]: { duration: 2e3, easing: ee.easeInOutQuint },
                        [ye.Blocked]: { duration: 0 },
                    },
                    We = () => {
                        const e = { rotation: te.LO.box(0), changeTime: te.LO.box(new Date()), filled: te.LO.box(!1) },
                            u = (0, te.aD)((u, t) => {
                                e.rotation.set(u), e.changeTime.set(t), e.filled.set(!0);
                            }),
                            t = (0, te.aD)(() => {
                                e.filled.set(!1);
                            });
                        return Object.assign({}, e, { setRotation: u, clear: t });
                    },
                    Ve = (e, u) => {
                        const t = (e) =>
                                (0, te.aD)((...t) => {
                                    if (u.userActionsAllowed.get()) return e(...t);
                                }),
                            n = (0, te.aD)((u) => {
                                e.state.set(u);
                            }),
                            a = (0, te.aD)(() => {
                                e.rotationStats.prev.clear(),
                                    e.rotationStats.last.setRotation(e.currentRotation.get(), new Date());
                            }),
                            s = (0, te.aD)((u) => {
                                e.rotationStats.prev.setRotation(
                                    e.rotationStats.last.rotation.get(),
                                    e.rotationStats.last.changeTime.get(),
                                ),
                                    e.rotationStats.last.setRotation(u, new Date()),
                                    e.currentRotation.set(u);
                            }),
                            i = (0, te.aD)((t) => {
                                e.targetRotation.set(Le(t, u.minRotation.get(), u.maxRotation.get()));
                            }),
                            o = (0, te.aD)(() => {
                                if (e.progress.finalCard.get() !== e.progress.currentCard.get()) {
                                    n(ye.ShowProgress);
                                    const t = -e.cardRotation.get() * e.progress.currentCard.get();
                                    s(Le(t, u.minRotation.get(), u.maxRotation.get()));
                                } else D[ke.RunCounter](), n(ye.Idle);
                            }),
                            l = (0, te.aD)((t) => {
                                const a = (-e.cardRotation.get() * (t - 1)) / 2,
                                    s = Le(a, u.minRotation.get(), u.maxRotation.get());
                                e.currentRotation.get() === s
                                    ? (c(!0), n(ye.Blocked), r.O.sound.play.sound(ie.EvFepCongratulate))
                                    : (n(ye.FinalAnimation), i(a));
                            }),
                            d = (0, te.aD)((t, a, r, l, d) => {
                                if (
                                    (e.cardsCount.set(t),
                                    e.progress.currentCard.set(a),
                                    e.progress.finalCard.set(r),
                                    e.progress.state.cards.push(
                                        ...ue(t, (e) => {
                                            return (
                                                (u = ((e, u, t) =>
                                                    t
                                                        ? ae.Detached
                                                        : e === u
                                                          ? ae.Active
                                                          : e > u
                                                            ? ae.Detached
                                                            : ae.Inactive)(a, e, d)),
                                                (t = se.None),
                                                { state: te.LO.box(u), animation: te.LO.box(t) }
                                            );
                                            var u, t;
                                        }),
                                    ),
                                    l)
                                )
                                    s(-e.cardRotation.get() * u.maxRightCard.get()),
                                        n(ye.FirstAnimation),
                                        i(-e.cardRotation.get() * a);
                                else if (d) {
                                    const u = (-e.cardRotation.get() * (t - 1)) / 2;
                                    s(u), i(u), c(!0), n(ye.Blocked);
                                } else {
                                    const t = xe(a, u.minLeftCard.get(), u.maxRightCard.get());
                                    s(-e.cardRotation.get() * t),
                                        i(e.currentRotation.get()),
                                        a !== r ? o() : D[ke.RunCounter]();
                                }
                            }),
                            c = (0, te.aD)((u) => {
                                e.assembled.set(u);
                            }),
                            _ = t((t) => {
                                const a = Le(
                                    e.targetRotation.get() - (e.cardRotation.get() * t) / -2,
                                    u.minRotation.get(),
                                    u.maxRotation.get(),
                                );
                                return n(ye.Scrolling), i(a), e.targetRotation.get();
                            }),
                            E = t((u) => {
                                e.dragging.speed.set(u);
                            }),
                            m = t((u) => {
                                e.state.set(ye.Dragging),
                                    e.dragging.lastMousePosition.set(u),
                                    e.dragging.speed.set(0),
                                    e.targetRotation.set(e.currentRotation.get());
                            }),
                            g = t(() => {
                                e.state.set(ye.InertialMovement), e.dragging.lastMousePosition.set(0);
                            }),
                            A = t((t, n) => {
                                e.state.get() === ye.Dragging &&
                                    (e.dragging.speed.set(
                                        (180 * Math.atan((n - e.dragging.lastMousePosition.get()) / t)) / Math.PI,
                                    ),
                                    e.dragging.lastMousePosition.set(n),
                                    e.targetRotation.set(
                                        Le(
                                            e.targetRotation.get() + e.dragging.speed.get(),
                                            u.minRotation.get(),
                                            u.maxRotation.get(),
                                        ),
                                    ));
                            }),
                            F = (0, te.aD)((u, t) => {
                                u >= 0 && u < e.progress.state.cards.length && e.progress.state.cards[u].state.set(t);
                            }),
                            C = (0, te.aD)((u, t) => {
                                u >= 0 &&
                                    u <= e.progress.state.cards.length &&
                                    e.progress.state.cards[u].animation.set(t);
                            }),
                            D = {
                                [ke.RunCounter]: (0, te.aD)(() => {
                                    e.progress.state.runCounter.set(!0);
                                }),
                                [ke.Detach]: (0, te.aD)(() => {
                                    F(e.progress.currentCard.get(), ae.DetachingActive),
                                        e.progress.animation.set(Oe.Detaching);
                                }),
                                [ke.HideGlow]: (0, te.aD)(() => {
                                    C(e.progress.currentCard.get(), se.HidingGlow);
                                }),
                                [ke.DeactivateCurrent]: (0, te.aD)(() => {
                                    F(e.progress.currentCard.get(), ae.Deactivating);
                                }),
                                [ke.ActivateNext]: (0, te.aD)(() => {
                                    const u = e.progress.currentCard.get() + 1;
                                    F(u, ae.Activating), e.progress.currentCard.set(u);
                                }),
                                [ke.ShowGlow]: (0, te.aD)(() => {
                                    C(e.progress.currentCard.get(), se.ShowingGlow);
                                }),
                                [ke.FinishActivating]: (0, te.aD)(() => {
                                    const u = e.progress.currentCard.get() - 1;
                                    F(u, ae.Detached);
                                }),
                                [ke.Scroll]: (0, te.aD)(() => {
                                    if (
                                        (e.progress.animation.set(Oe.Scroll),
                                        e.progress.currentCard.get() > u.minLeftCard.get())
                                    ) {
                                        const t = Le(
                                            -e.cardRotation.get() * e.progress.currentCard.get(),
                                            u.minRotation.get(),
                                            u.maxRotation.get(),
                                        );
                                        i(t);
                                    }
                                }),
                                [ke.Finish]: (0, te.aD)(() => {
                                    e.progress.finalCard.get() < e.cardsCount.get() &&
                                        F(e.progress.finalCard.get(), ae.Active),
                                        e.progress.animation.set(Oe.Finish),
                                        n(ye.Idle);
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
                            setTargetRotation: i,
                            setDraggingSpeed: E,
                            startDragging: m,
                            stopDragging: g,
                            drag: A,
                            progress: D,
                        };
                    };
                function ze() {}
                function Ye() {
                    return !1;
                }
                function je(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                console.log;
                const Xe = (e) => (0 === e ? window : window.subViews.get(e)),
                    Ke = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: i, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    d = (e, t, n) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Xe,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function s(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = a.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const a = t(u),
                                                        s = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? s
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, s);
                                                };
                                                return {
                                                    subscribe: (t, s) => {
                                                        const o = 'string' == typeof s ? `${n}.${s}` : n,
                                                            l = r.O.view.addModelObserver(o, u, !0);
                                                        return a.set(l, t), e && t(i(s)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, u) => {
                                                        const t = i(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = i(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return je(e, u);
                                                                                var t = {}.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? je(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
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
                                                            !(e = t()).done;

                                                        )
                                                            s(e.value, u);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(t),
                                            i =
                                                'real' === e
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : i.readByPath(u),
                                            d = (e) => l.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const u = {
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
                                                    t = (0, ne.Om)(
                                                        (e) => {
                                                            const t = we(u.quests.get(), e);
                                                            if (!t) throw new Error(`Unexpected quest index: ${e}`);
                                                            return Object.assign({}, t);
                                                        },
                                                        { equals: Ye },
                                                    ),
                                                    n = (0, ne.Om)(
                                                        () => {
                                                            const e = we(u.infiniteQuests.get(), 0);
                                                            if (!e) throw new Error('Unexpected quest index: 0');
                                                            return Object.assign({}, e);
                                                        },
                                                        { equals: Ye },
                                                    ),
                                                    a = (0, ne.Om)(
                                                        (e, t, n = !1) => {
                                                            const a = n ? u.infiniteStage.get() : we(u.stages.get(), e);
                                                            if (!a) throw new Error(`Unexpected card index: ${e}`);
                                                            const s = e + 1,
                                                                i = o.cardState(e);
                                                            return Object.assign({}, a, {
                                                                rewards: Ie(a.rewards, t),
                                                                cardNumber: s,
                                                                progressionState: i,
                                                            });
                                                        },
                                                        { equals: Ye },
                                                    ),
                                                    s = (0, ne.Om)(() => {
                                                        const e =
                                                            u.condition.currentPoints.get() ===
                                                            u.condition.maximumPoints.get()
                                                                ? u.stages.get().length
                                                                : 0;
                                                        return Pe(u.stages.get(), (e) => !e.isCompleted) || e;
                                                    }),
                                                    i = (0, ne.Om)(() => {
                                                        const e = we(u.stages.get(), 0);
                                                        if (e && e.maximumPoints > u.condition.prevPoints.get())
                                                            return 0;
                                                        const t = u.stages.get().length - 1;
                                                        return (
                                                            Pe(
                                                                u.stages.get(),
                                                                (e) => e.maximumPoints > u.condition.prevPoints.get(),
                                                            ) || t
                                                        );
                                                    }),
                                                    r = (({ cardRotation: e, displayCardsCount: u }) => ({
                                                        cardRotation: te.LO.box(e),
                                                        displayCardsCount: te.LO.box(u),
                                                        cardsCount: te.LO.box(0),
                                                        state: te.LO.box(ye.Idle),
                                                        currentRotation: te.LO.box(0),
                                                        targetRotation: te.LO.box(0),
                                                        assembled: te.LO.box(!1),
                                                        rotationStats: { prev: We(), last: We() },
                                                        progress: {
                                                            currentCard: te.LO.box(0),
                                                            animation: te.LO.box(Oe.Init),
                                                            finalCard: te.LO.box(0),
                                                            state: { runCounter: te.LO.box(!1), cards: [] },
                                                        },
                                                        dragging: {
                                                            lastMousePosition: te.LO.box(0),
                                                            speed: te.LO.box(0),
                                                        },
                                                    }))({ cardRotation: 10, displayCardsCount: 12 }),
                                                    o = ((e) => {
                                                        const u = (0, te.Fl)(() => (e.cardsCount.get() >= 5 ? 2 : 1)),
                                                            t = (0, te.Fl)(() =>
                                                                e.cardsCount.get() <= 3
                                                                    ? e.cardsCount.get() - 2
                                                                    : e.cardsCount.get() <= 5
                                                                      ? e.cardsCount.get() - 3
                                                                      : e.cardsCount.get() - 1,
                                                            ),
                                                            n = (0, te.Fl)(() =>
                                                                ue(e.cardsCount.get(), (u) => ({
                                                                    key: u,
                                                                    order: e.cardsCount.get() - u - 1,
                                                                })),
                                                            ),
                                                            a = (0, te.Fl)(() =>
                                                                xe(
                                                                    Math.round(
                                                                        (Math.abs(e.currentRotation.get()) /
                                                                            (e.cardRotation.get() *
                                                                                e.cardsCount.get())) *
                                                                            e.cardsCount.get(),
                                                                    ),
                                                                    u.get(),
                                                                    t.get(),
                                                                ),
                                                            ),
                                                            s = (0, te.Fl)(
                                                                () =>
                                                                    Math.max(0, xe(a.get(), u.get(), t.get())) -
                                                                    Math.ceil(e.displayCardsCount.get() / 2),
                                                            ),
                                                            i = (0, te.Fl)(
                                                                () =>
                                                                    Math.min(e.cardsCount.get(), a.get()) +
                                                                    Math.ceil(e.displayCardsCount.get() / 2),
                                                            ),
                                                            r = (0, te.Fl)(() => -e.cardRotation.get() * u.get()),
                                                            o = (0, te.Fl)(() => -e.cardRotation.get() * t.get()),
                                                            l = (0, te.Fl)(() =>
                                                                e.state.get() === ye.FirstAnimation
                                                                    ? Object.assign({}, $e[ye.FirstAnimation], {
                                                                          duration: 150 * e.cardsCount.get(),
                                                                      })
                                                                    : $e[e.state.get()],
                                                            ),
                                                            d = (0, te.Fl)(() => !Ne.includes(e.state.get())),
                                                            c = (0, te.Fl)(() => {
                                                                const t = [];
                                                                t.push(...Me);
                                                                for (
                                                                    let n = e.progress.currentCard.get();
                                                                    n < e.progress.finalCard.get();
                                                                    n++
                                                                ) {
                                                                    const e = n >= u.get();
                                                                    t.push(...Ge), e && t.push(...He), t.push(...Ue);
                                                                }
                                                                return (
                                                                    e.progress.finalCard.get() < e.cardsCount.get() &&
                                                                        t.push(...Qe),
                                                                    t.push(...qe),
                                                                    t
                                                                );
                                                            }),
                                                            _ = (0, ne.Om)((u) =>
                                                                e.progress.state.cards[u]
                                                                    ? {
                                                                          state: e.progress.state.cards[u].state.get(),
                                                                          animation:
                                                                              e.progress.state.cards[u].animation.get(),
                                                                      }
                                                                    : null,
                                                            ),
                                                            E = (0, te.Fl)(() => {
                                                                if (
                                                                    !e.rotationStats.last.filled.get() ||
                                                                    !e.rotationStats.prev.filled.get()
                                                                )
                                                                    return;
                                                                const u =
                                                                        e.rotationStats.last.rotation.get() -
                                                                        e.rotationStats.prev.rotation.get(),
                                                                    t =
                                                                        e.rotationStats.last.changeTime
                                                                            .get()
                                                                            .getTime() -
                                                                        e.rotationStats.prev.changeTime.get().getTime();
                                                                var n, a, s;
                                                                return 0 !== t
                                                                    ? ((a = 0.4),
                                                                      ((s = u / t) < (n = -0.4) ? n : s > a ? a : s) /
                                                                          -0.4)
                                                                    : void 0;
                                                            }),
                                                            m = (0, te.Fl)(() => e.state.get() !== ye.Blocked),
                                                            g = (0, te.Fl)(() => e.cardsCount.get() >= 6),
                                                            A = (0, te.Fl)(() =>
                                                                d.get() && g.get()
                                                                    ? e.state.get() === ye.Dragging
                                                                        ? 'grabbing'
                                                                        : 'grab'
                                                                    : 'default',
                                                            );
                                                        return {
                                                            velocity: E,
                                                            minLeftCard: u,
                                                            maxRightCard: t,
                                                            cardsMap: n,
                                                            currentCard: a,
                                                            minVisibleCard: s,
                                                            maxVisibleCard: i,
                                                            minRotation: r,
                                                            maxRotation: o,
                                                            animationConfig: l,
                                                            userActionsAllowed: d,
                                                            progressSchedule: c,
                                                            cardState: _,
                                                            soundEnabled: m,
                                                            cursor: A,
                                                        };
                                                    })(r),
                                                    l = (0, ne.Om)(
                                                        () =>
                                                            u.condition.prevPoints.get() <
                                                                u.condition.currentPoints.get() &&
                                                            u.condition.currentPoints.get() ===
                                                                u.condition.maximumPoints.get(),
                                                    ),
                                                    d = (0, ne.Om)(() =>
                                                        (!l() &&
                                                            u.condition.currentPoints.get() ===
                                                                u.condition.maximumPoints.get()) ||
                                                        r.progress.animation.get() === Oe.Finish
                                                            ? u.state.get().status
                                                            : Se[u.state.get().status],
                                                    ),
                                                    c = (0, ne.Om)(() => {
                                                        const e = l(),
                                                            u = d(),
                                                            t = Re(u).isCompleted;
                                                        return {
                                                            completedWithAnimation: e && t,
                                                            completedNoAnimation: !e && t,
                                                        };
                                                    });
                                                return Object.assign({}, u, {
                                                    cardsFan: { model: r, computes: o },
                                                    computes: {
                                                        quest: t,
                                                        card: a,
                                                        cardActiveIndex: s,
                                                        progressAnimationStartFrom: i,
                                                        infiniteQuest: n,
                                                        pageStatus: d,
                                                        needChangePage: l,
                                                        finalAnimationStatus: c,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : o(u),
                                                            a = te.LO.box(n, { equals: Ye });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, te.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : o(u),
                                                            a = te.LO.box(n, { equals: Ye });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, te.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = o(t);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (e, u) => ((e[u] = te.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, te.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                a[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = u,
                                                                s = Object.entries(a),
                                                                r = s.reduce(
                                                                    (e, [u, t]) => ((e[t] = te.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, te.aD)((e) => {
                                                                            s.forEach(([u, t]) => {
                                                                                r[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            _ = { mode: e, model: c, externalModel: i, cleanup: d };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && n ? n.controls(_) : u(_),
                                            externalModel: i,
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
                                    s().createElement(t.Provider, { value: A }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e, model: u }) => ({
                        cardsFun: Ve(u.cardsFan.model, u.cardsFan.computes),
                        close: e.createCallbackNoArgs('onClose'),
                        showInfo: e.createCallbackNoArgs('onShowInfo'),
                        onOpenTierList: e.createCallbackNoArgs('onOpenTierList'),
                    })),
                    Ze = Ke[0],
                    Je = Ke[1],
                    eu = {
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
                    uu = [
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
                function tu(e) {
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
                const nu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: $.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    au = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            s = e.onMouseEnter,
                            i = e.onMouseLeave,
                            r = e.onMouseDown,
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
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, uu);
                        const B = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    C ||
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
                                [C],
                            ),
                            b = (0, a.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (nu(t, m, { isMouseEvent: !0, on: !0, arguments: tu(n) }, f),
                                    D && D(),
                                    (B.current.isVisible = !0));
                            }, [t, m, n, f, D]),
                            v = (0, a.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        nu(t, m, { on: !1 }, f),
                                        B.current.isVisible && p && p(),
                                        (B.current.isVisible = !1);
                                }
                            }, [t, m, f, p]),
                            w = (0, a.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && v();
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
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((B.current.timeoutId = window.setTimeout(b, d ? 100 : 400)),
                                                          s && s(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  v(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === _ && v(), null == o || o(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === _ && v(), null == r || r(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var T;
                    },
                    su = ['children'];
                function iu() {
                    return (
                        (iu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        iu.apply(null, arguments)
                    );
                }
                const ru = (e) => {
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
                            })(e, su);
                        return s().createElement(
                            au,
                            iu(
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
                    ou = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function lu() {
                    return (
                        (lu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        lu.apply(null, arguments)
                    );
                }
                const du = R.views.common.tooltip_window.simple_tooltip_content,
                    cu = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            i = e.note,
                            r = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, ou);
                        const d = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: i, alert: r });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [r, t, n, i, o]);
                        return s().createElement(
                            au,
                            lu(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? du.SimpleTooltipHtmlContent('resId') : du.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                l,
                            ),
                            u,
                        );
                        var c;
                    };
                function _u() {
                    return (
                        (_u = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        _u.apply(null, arguments)
                    );
                }
                const Eu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(cu, u, n);
                        const a = u.contentId;
                        return a ? s().createElement(au, _u({}, u, { contentId: a }), n) : s().createElement(ru, u, n);
                    },
                    mu = {
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
                    gu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = le.Big,
                        special: a,
                        value: i,
                        valueType: r,
                        title: o,
                        style: l,
                        className: d,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const m = ((e, u) => {
                                if (void 0 === u || !be.includes(e)) return null;
                                switch (u) {
                                    case ce.BATTLE_BOOSTER:
                                    case ce.BATTLE_BOOSTER_REPLACE:
                                        return _e.BATTLE_BOOSTER;
                                }
                            })(n, a),
                            g = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ce.BATTLE_BOOSTER:
                                        return Ee.BATTLE_BOOSTER;
                                    case ce.BATTLE_BOOSTER_REPLACE:
                                        return Ee.BATTLE_BOOSTER_REPLACE;
                                    case ce.BUILT_IN_EQUIPMENT:
                                        return Ee.BUILT_IN_EQUIPMENT;
                                    case ce.EQUIPMENT_PLUS:
                                        return Ee.EQUIPMENT_PLUS;
                                    case ce.EQUIPMENT_TROPHY_BASIC:
                                        return Ee.EQUIPMENT_TROPHY_BASIC;
                                    case ce.EQUIPMENT_TROPHY_UPGRADED:
                                        return Ee.EQUIPMENT_TROPHY_UPGRADED;
                                    case ce.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Ee.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ce.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Ee.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ce.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Ee.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ce.PROGRESSION_STYLE_UPGRADED_1:
                                        return Ee.PROGRESSION_STYLE_UPGRADED_1;
                                    case ce.PROGRESSION_STYLE_UPGRADED_2:
                                        return Ee.PROGRESSION_STYLE_UPGRADED_2;
                                    case ce.PROGRESSION_STYLE_UPGRADED_3:
                                        return Ee.PROGRESSION_STYLE_UPGRADED_3;
                                    case ce.PROGRESSION_STYLE_UPGRADED_4:
                                        return Ee.PROGRESSION_STYLE_UPGRADED_4;
                                    case ce.PROGRESSION_STYLE_UPGRADED_5:
                                        return Ee.PROGRESSION_STYLE_UPGRADED_5;
                                    case ce.PROGRESSION_STYLE_UPGRADED_6:
                                        return Ee.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(a),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case de.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case de.CURRENCY:
                                    case de.NUMBER:
                                        return s().createElement(ge, { format: 'integral', value: Number(e) });
                                    case de.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(i, r);
                        return s().createElement(
                            'div',
                            { className: p()(mu.base, mu[`base__${n}`], d), style: l },
                            s().createElement(
                                Eu,
                                { tooltipArgs: _, className: mu.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: p()(mu.image, null == c ? void 0 : c.image) },
                                        m &&
                                            s().createElement('div', {
                                                className: p()(mu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: p()(mu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        g &&
                                            s().createElement('div', {
                                                className: p()(mu.overlay, null == c ? void 0 : c.overlay),
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
                                                    mu.info,
                                                    mu[`info__${e}`],
                                                    r === de.MULTI && mu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                    o && s().createElement('div', { className: mu.title }, o),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    Eu,
                                    { tooltipArgs: E },
                                    s().createElement('div', {
                                        className: p()(mu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Au = 'base',
                    Fu = ({ imagesRoot: e, partName: u, rarity: t, size: n }) =>
                        `url(${e.$dyn(u).$dyn(`${t}_${n}_1`)})`,
                    Cu = {
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
                function Du() {
                    return (
                        (Du = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Du.apply(null, arguments)
                    );
                }
                const pu = (0, z.Pi)(({ index: e = 0, state: u, rewardsSize: t, infinite: n, classMix: a }) => {
                        const i = Je().model,
                            r = i.root.get().assetsPointer,
                            o = i.computes.card(e, t, n),
                            l = o.progressionState,
                            d = o.rarity,
                            c = o.cardNumber,
                            _ = o.rewards,
                            E = u || (null == l ? void 0 : l.state),
                            m = J(r).progression.cards,
                            g = Fu({ imagesRoot: m, partName: Au, rarity: d, size: t }),
                            A = String(m.infinity_sign.$dyn(d));
                        return s().createElement(
                            'div',
                            {
                                className: p()(
                                    Cu.base,
                                    Cu[`base__${d}`],
                                    Cu[`base__${t}`],
                                    Cu[`base__${E}`],
                                    null == a ? void 0 : a.content,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: Cu.rewards },
                                ue(4, (e) =>
                                    s().createElement(
                                        'div',
                                        { key: e, className: Cu.rewardSlot },
                                        _.length > e &&
                                            s().createElement(
                                                gu,
                                                Du({}, _[e], {
                                                    size: t,
                                                    className: Cu.reward,
                                                    classNames: {
                                                        info: Cu.rewardInfo,
                                                        image: p()(
                                                            Cu.rewardImage,
                                                            ['lootBox', 'battleToken'].includes(_[e].name) &&
                                                                Cu.rewardImage__battleToken,
                                                        ),
                                                    },
                                                }),
                                            ),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: Cu.cardNumber },
                                n
                                    ? s().createElement('div', {
                                          className: Cu.infinity,
                                          style: { backgroundImage: `url(${A})` },
                                      })
                                    : c,
                            ),
                            s().createElement('div', {
                                className: p()(Cu.pattern, null == a ? void 0 : a.pattern),
                                style: { maskImage: g },
                            }),
                            s().createElement('div', {
                                className: p()(Cu.shadow, null == a ? void 0 : a.shadow),
                                style: { maskImage: g },
                            }),
                        );
                    }),
                    hu = {
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
                    Bu = (0, z.Pi)(({ index: e = 0, state: u, rewardsSize: t, infinite: n, classMix: a }) => {
                        const i = Je().model,
                            r = i.root.get().assetsPointer,
                            o = i.computes.card(e, t, n),
                            l = o.progressionState,
                            d = o.rarity,
                            c = o.maximumPoints,
                            _ = u || (null == l ? void 0 : l.state),
                            E = null == l ? void 0 : l.animation,
                            m = J(r).progression.cards,
                            g = Fu({ imagesRoot: m, partName: 'edge', rarity: d, size: t });
                        return s().createElement(
                            'div',
                            {
                                className: p()(
                                    hu.edge,
                                    hu.base,
                                    hu[`base__${d}`],
                                    hu[`base__animation_${E}`],
                                    t === le.Big && hu.base__big,
                                    hu[`base__${_}`],
                                    null == a ? void 0 : a.edge,
                                ),
                                style: { backgroundImage: g },
                            },
                            s().createElement('div', { className: hu.blinkEdge }),
                            s().createElement(
                                'div',
                                { className: hu.pointsTitle },
                                s().createElement('div', null, R.strings.fun_random.progression.cards.points()),
                            ),
                            s().createElement('div', { className: hu.pointsValue }, s().createElement('div', null, c)),
                            s().createElement('div', {
                                className: p()(hu.pattern, null == a ? void 0 : a.pattern),
                                style: { maskImage: g },
                            }),
                            s().createElement('div', {
                                className: p()(hu.shadow, null == a ? void 0 : a.shadow),
                                style: { maskImage: g },
                            }),
                        );
                    }),
                    fu = (0, z.Pi)(({ index: e = 0, state: u, rewardsSize: t, classMix: n, infinite: i }) => {
                        const o = Je().model,
                            l = o.root.get().assetsPointer,
                            d = o.computes.card(e, t, i),
                            c = d.progressionState,
                            _ = d.rarity,
                            E = u || (null == c ? void 0 : c.state),
                            m = null == c ? void 0 : c.animation,
                            g = J(l).progression.cards,
                            A = Fu({ imagesRoot: g, partName: Au, rarity: _, size: t });
                        return (
                            (0, a.useEffect)(() => {
                                (E !== ae.DetachingActive && E !== ae.Detaching) ||
                                    r.O.sound.play.sound(ie.EvFepTearOffCard);
                            }, [E]),
                            s().createElement(
                                'div',
                                {
                                    className: p()(
                                        eu.base,
                                        eu[`base__${_}`],
                                        eu[`base__animation_${m}`],
                                        t === le.Big && eu.base__big,
                                        eu[`base__${E}`],
                                        null == n ? void 0 : n.base,
                                    ),
                                },
                                s().createElement('div', { className: eu.glow }),
                                s().createElement(Bu, { index: e, state: u, rewardsSize: t, classMix: n, infinite: i }),
                                s().createElement('div', { className: eu.blink }),
                                s().createElement('div', { className: eu.particles }),
                                s().createElement('div', { className: eu.image, style: { backgroundImage: A } }),
                                s().createElement(pu, { index: e, state: u, rewardsSize: t, classMix: n, infinite: i }),
                            )
                        );
                    });
                var bu = t(7006),
                    vu = t(2031);
                const wu = (e) => {
                    (0, a.useEffect)(() => e, []);
                };
                function Tu() {
                    const e = (0, a.useRef)(0);
                    return (
                        wu(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, a.useMemo)(
                            () => ({
                                run: (u, t) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = 0), u();
                                        }, t));
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
                const Pu = [ye.Dragging, ye.ShowProgress, ye.Blocked],
                    Iu = (e, u) => Math.abs(e - u) < 0.2,
                    Su = ({ mediaHeight: e, mediaWidth: u }) => e >= v.Large && u >= b.Small,
                    Ru = (0, z.Pi)(
                        ({
                            children: e,
                            transformRadius: u,
                            cardHeight: t,
                            defaultSelectedElement: n = 0,
                            className: i,
                        }) => {
                            const o = w(),
                                l = o.mediaHeight,
                                d = o.mediaWidth,
                                c = o.remScreenWidth,
                                _ = o.remScreenHeight,
                                E = Je(),
                                m = E.model.cardsFan,
                                g = m.model,
                                A = m.computes,
                                F = E.controls.cardsFun,
                                C = Su({ mediaHeight: l, mediaWidth: d }),
                                D = (({ isAssembled: e, mediaHeight: u, mediaWidth: t }) => {
                                    const n = Su({ mediaHeight: u, mediaWidth: t });
                                    return e ? (!n && u >= v.Medium ? 90 : n ? 60 : 50) : 0;
                                })({ mediaHeight: l, mediaWidth: d, isAssembled: g.assembled.get() }),
                                h = E.model.computes.finalAnimationStatus(),
                                B = h.completedWithAnimation,
                                f = h.completedNoAnimation,
                                b = (({
                                    cardsCount: e,
                                    prevCard: u,
                                    activeCard: t,
                                    isFirstOpen: n,
                                    isBlocked: s,
                                    model: i,
                                    computes: o,
                                    actions: l,
                                }) => {
                                    const d = Tu(),
                                        c = d.run,
                                        _ = d.clear,
                                        E = (() => {
                                            const e = (0, a.useRef)([]);
                                            return (0, a.useMemo)(
                                                () => ({
                                                    runSchedule: (u) => {
                                                        e.current.forEach(clearTimeout), (e.current = []);
                                                        let t = 0;
                                                        u.forEach(({ delay: u, action: n, duration: a }) => {
                                                            var s;
                                                            t += u || 0;
                                                            const i = setTimeout(n, t);
                                                            null == (s = e.current) || s.push(i), (t += a || 0);
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
                                        A = (0, bu.useSpring)(() => ({
                                            rotate: i.currentRotation.get(),
                                            onStart: () => {
                                                l.startRotation(),
                                                    o.soundEnabled.get() && r.O.sound.play.sound(ie.EvFepCardStartMove);
                                            },
                                            onRest: () => {
                                                o.soundEnabled.get() && r.O.sound.play.sound(ie.EvFepCardStopMove);
                                            },
                                            onChange: (e) => {
                                                l.setCurrentRotation(e.value.rotate);
                                            },
                                        }));
                                    wu(() => r.O.sound.play.sound(ie.EvFepCardStopMove));
                                    const F = A[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const a = (0, te.U5)(
                                                    () => o.velocity.get(),
                                                    (e) => {
                                                        void 0 !== e &&
                                                            o.soundEnabled.get() &&
                                                            r.O.sound.setRTPC(ie.RtpcExtFepWheelRotation, Math.abs(e));
                                                    },
                                                ),
                                                d = (0, te.U5)(
                                                    () => i.currentRotation.get(),
                                                    () => {
                                                        if (
                                                            Iu(i.targetRotation.get(), i.currentRotation.get()) &&
                                                            !Pu.includes(i.state.get())
                                                        )
                                                            i.state.get() === ye.FirstAnimation
                                                                ? l.runProgressionAnimation()
                                                                : i.state.get() === ye.FinalAnimation
                                                                  ? (l.setAssembled(!0),
                                                                    l.setState(ye.Blocked),
                                                                    r.O.sound.setRTPC(ie.RtpcExtFepWheelRotation, 0),
                                                                    r.O.sound.play.sound(ie.EvFepCardStopMove),
                                                                    r.O.sound.play.sound(ie.EvFepCongratulate))
                                                                  : l.setState(ye.Idle);
                                                        else if (i.state.get() === ye.InertialMovement) {
                                                            const e = 0.75 * i.dragging.speed.get();
                                                            l.setDraggingSpeed(e),
                                                                l.setTargetRotation(i.targetRotation.get() + e);
                                                        }
                                                        (i.state.get() === ye.Idle ||
                                                            (i.state.get() === ye.ShowProgress &&
                                                                i.progress.animation.get() === Oe.Init)) &&
                                                            F.set({ rotate: i.currentRotation.get() });
                                                    },
                                                ),
                                                E = (0, te.U5)(
                                                    () => i.targetRotation.get(),
                                                    () => {
                                                        i.state.get() !== ye.Idle &&
                                                            F.start({
                                                                rotate: i.targetRotation.get(),
                                                                config: o.animationConfig.get(),
                                                            });
                                                    },
                                                ),
                                                A = (0, te.U5)(
                                                    () => i.state.get(),
                                                    () => {
                                                        i.state.get() === ye.InertialMovement &&
                                                            Iu(i.currentRotation.get(), i.targetRotation.get()) &&
                                                            l.setState(ye.Idle),
                                                            i.state.get() !== ye.Idle ||
                                                            Iu(
                                                                i.currentRotation.get(),
                                                                -i.cardRotation.get() * o.currentCard.get(),
                                                            )
                                                                ? _()
                                                                : c(() => {
                                                                      l.setState(ye.Normalization),
                                                                          l.setTargetRotation(
                                                                              -i.cardRotation.get() *
                                                                                  o.currentCard.get(),
                                                                          );
                                                                  }, 1e3),
                                                            i.state.get() === ye.FirstAnimation &&
                                                                F.set({ rotate: i.currentRotation.get() }),
                                                            i.state.get() === ye.ShowProgress &&
                                                                m(
                                                                    o.progressSchedule
                                                                        .get()
                                                                        .map(
                                                                            ({ delay: e, action: u, duration: t }) => ({
                                                                                delay: e,
                                                                                duration: t,
                                                                                action: l.progress[u],
                                                                            }),
                                                                        ),
                                                                );
                                                    },
                                                ),
                                                C = (0, te.EH)(() => {
                                                    l.initCardsFan(e, u, t, n, s);
                                                });
                                            return () => {
                                                C(), d(), E(), A(), _(), g(), a();
                                            };
                                        }, [t, F, e, _, g, c, n, s, u, m]),
                                        A
                                    );
                                })({
                                    cardsCount: E.model.stages.get().length,
                                    prevCard: E.model.computes.progressAnimationStartFrom(),
                                    activeCard: E.model.computes.cardActiveIndex(),
                                    isFirstOpen: E.model.root.get().isFirstOpen,
                                    isBlocked: f,
                                    model: g,
                                    computes: A,
                                    actions: F,
                                }),
                                T = b[0].rotate,
                                P = b[1];
                            return (
                                (0, a.useEffect)(() => {
                                    const e = (e) => {
                                        const u = e.deltaY > 1 ? 1 : -1;
                                        F.scroll(u);
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
                                                                        F.startDragging((0, vu.pxToRem)(e.screenX));
                                                                    },
                                                                    n = (e) => {
                                                                        if (g.state.get() === ye.Dragging)
                                                                            if (
                                                                                (0, vu.pxToRem)(e.screenX) < 20 ||
                                                                                (0, vu.pxToRem)(e.screenY) < 20 ||
                                                                                (0, vu.pxToRem)(e.screenY) > _ - 20 ||
                                                                                (0, vu.pxToRem)(e.screenX) > c - 20
                                                                            )
                                                                                F.stopDragging();
                                                                            else {
                                                                                const n =
                                                                                    u + t - (0, vu.pxToRem)(e.screenY);
                                                                                F.drag(n, (0, vu.pxToRem)(e.screenX));
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
                                    [F, u, t, g.state, _, c],
                                ),
                                s().createElement(
                                    'div',
                                    {
                                        className: p()(
                                            'CardsFan_base_fa',
                                            i,
                                            C && 'CardsFan_base__big_70',
                                            B && 'CardsFan_base__final_1a',
                                        ),
                                    },
                                    s().createElement(
                                        bu.animated.div,
                                        {
                                            className: 'CardsFan_cardHolder_86',
                                            style: { transformOrigin: `center ${u}rem`, rotate: T },
                                        },
                                        (function (e, u, t) {
                                            const n = [];
                                            for (let a = 0; a < e.length; a++) {
                                                const s = Te(e, a);
                                                u(s, a, e) && n.push(t(s, a, e));
                                            }
                                            return n;
                                        })(
                                            A.cardsMap.get(),
                                            ({ order: e }) =>
                                                e >= A.minVisibleCard.get() && e <= A.maxVisibleCard.get(),
                                            (t) =>
                                                s().createElement(
                                                    'div',
                                                    {
                                                        key: t.key,
                                                        className: p()(
                                                            'CardsFan_card_31',
                                                            t.order === n && 'CardsFan_card__active_02',
                                                        ),
                                                        style: {
                                                            transformOrigin: `center ${u}rem`,
                                                            transform: `rotate(${g.cardRotation.get() * t.order}deg) translateY(${D}%)`,
                                                        },
                                                    },
                                                    e[t.order],
                                                ),
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                function xu() {
                    return (
                        (xu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        xu.apply(null, arguments)
                    );
                }
                const Lu = { cardHeight: 400, transformRadius: 1500, rewardsSize: le.Big },
                    yu = { cardHeight: 261, transformRadius: 990, rewardsSize: le.Small },
                    Ou = (0, z.Pi)(({ className: e }) => {
                        const u = Je(),
                            t = u.model,
                            n = u.controls,
                            i = t.stages.get().length,
                            r = t.computes.finalAnimationStatus().completedWithAnimation,
                            o = t.cardsFan.model.progress.currentCard.get(),
                            l = w(),
                            d = l.mediaHeight,
                            c = l.mediaWidth,
                            _ = d >= v.Large && c >= b.Small ? Lu : yu;
                        return (
                            (0, a.useEffect)(() => {
                                r && n.cardsFun.runFinalAnimation(i);
                            }, [r, i, n.cardsFun]),
                            s().createElement(
                                'div',
                                { className: p()('CardsProgression_base_a3', e) },
                                s().createElement(
                                    Ru,
                                    xu({}, _, { defaultSelectedElement: o, className: 'CardsProgression_cardsFan_3e' }),
                                    ue(i, (e) =>
                                        s().createElement(fu, { key: e, index: e, rewardsSize: _.rewardsSize }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Nu = {
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
                let ku, Mu;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ku || (ku = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Mu || (Mu = {}));
                const Gu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: i,
                    mixClass: r,
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
                        F = (0, a.useState)(t),
                        C = F[0],
                        D = F[1],
                        h = (0, a.useState)(!1),
                        B = h[0],
                        f = h[1];
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
                            D(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: A,
                                className: p()(
                                    Nu.base,
                                    Nu[`base__${n}`],
                                    i && Nu.base__disabled,
                                    u && Nu[`base__${u}`],
                                    C && Nu.base__focus,
                                    B && Nu.base__highlightActive,
                                    r,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== o && M(o), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    c && c(e);
                                },
                                onMouseUp: function (e) {
                                    i || (E && E(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== l && M(l),
                                        _ && _(e),
                                        t && (i || (A.current && (A.current.focus(), D(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (m && m(e), f(!1));
                                },
                                onClick: function (e) {
                                    i || (g && g(e));
                                },
                            },
                            n !== ku.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Nu.back }),
                                    s().createElement('span', { className: Nu.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: p()(Nu.state, Nu.state__default) },
                                s().createElement('span', { className: Nu.stateDisabled }),
                                s().createElement('span', { className: Nu.stateHighlightHover }),
                                s().createElement('span', { className: Nu.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Nu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Gu.defaultProps = { type: ku.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Hu = Gu;
                var Uu = t(1281);
                let qu;
                function Qu(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(qu || (qu = {}));
                const $u = (e) => e.replace(/&nbsp;/g, ' '),
                    Wu = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Vu = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    zu = (e, u, t = qu.left) => e.split(u).reduce(t === qu.left ? Wu : Vu, []),
                    Yu = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    ju = ['zh_cn', 'zh_sg', 'zh_tw'];
                function Xu(e, u, t) {
                    const n = (0, a.useContext)(g);
                    let s = Object.entries(n).filter(([e, u]) => !0 === u && e in l);
                    return (
                        t && (s = s.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const n = s.map((e) =>
                                p()(
                                    u[((e, u) => e + '__' + u)(t, e[0])],
                                    u[
                                        ((e, u) => {
                                            return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                            var t;
                                        })(t, e[0])
                                    ],
                                ),
                            );
                            return (e[t] = p()(u[t], ...n)), e;
                        }, {})
                    );
                }
                let Ku, Zu;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(Ku || (Ku = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(Zu || (Zu = {}));
                var Ju = t(8613);
                const et = 3600;
                Date.now(), Ju.Ew.getRegionalDateTime, Ju.Ew.getFormattedDateTime;
                const ut = () => {};
                let tt;
                $.Sw.instance,
                    (function (e) {
                        (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                    })(tt || (tt = {})),
                    $.Sw.instance;
                const nt = (e = 0, u, t = 0, n = ut) => {
                        const s = (0, a.useState)(e),
                            i = s[0],
                            r = s[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    r(e);
                                    const a = Date.now(),
                                        s = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - a) / 1e3);
                                                null !== t && u <= t ? (r(t), n && n(), clearInterval(s)) : r(u);
                                            },
                                            1e3 * (u || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [e, u, t, n]),
                            i
                        );
                    },
                    at = (e) => e.toString().padStart(2, '0'),
                    st = R.images.gui.maps.icons.components.countdown,
                    it = (e, u) => {
                        const t = 2 === u ? st.big : st;
                        switch (e) {
                            case Ku.Timer:
                                return t.clock();
                            case Ku.Countdown:
                                return t.hourglass();
                            case Ku.Cooldown:
                                return t.lock();
                        }
                    },
                    rt = (0, a.memo)(
                        ({
                            duration: e,
                            icon: u = Ku.Timer,
                            style: t = Zu.Description,
                            onTimeReached: n,
                            className: i = '',
                            classNames: o = {},
                        }) => {
                            const l = t !== Zu.Description ? 1 : void 0,
                                d = nt(e, l),
                                c = (() => {
                                    const e = (0, a.useState)(r.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const e = () => {
                                                t(r.O.view.getScale());
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
                                })();
                            n && n[d] && n[d]();
                            const _ = ((e, u) => {
                                switch (u) {
                                    case Zu.Description:
                                        return ((e, u = !0) =>
                                            e.days > 7 && u
                                                ? Qu(R.strings.common.duration.days(), { days: e.days })
                                                : e.days >= 1
                                                  ? 0 === e.hours
                                                      ? Qu(R.strings.common.duration.days(), { days: e.days })
                                                      : `${Qu(R.strings.common.duration.days(), { days: e.days })} ${Qu(R.strings.common.duration.hours(), { hours: e.hours })}`
                                                  : e.hours >= 1
                                                    ? 0 === e.minutes
                                                        ? Qu(R.strings.common.duration.hours(), { hours: e.hours })
                                                        : `${Qu(R.strings.common.duration.hours(), { hours: e.hours })} ${Qu(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                                    : Qu(R.strings.common.duration.minutes(), {
                                                          minutes: e.minutes || 1,
                                                      }))(e);
                                    case Zu.Short:
                                        return `${at(e.minutes)}:${at(e.seconds)}`;
                                    case Zu.Long:
                                        return `${at(e.hours)}:${at(e.minutes)}:${at(e.seconds)}`;
                                    case Zu.Extended:
                                        return `${Qu(R.strings.common.duration.days(), { days: e.days })} | ${at(e.hours)}:${at(e.minutes)}:${at(e.seconds)}`;
                                }
                            })(
                                (function (e = 0) {
                                    let u = e;
                                    const t = Math.trunc(u / 86400);
                                    u -= 86400 * t;
                                    const n = Math.trunc(u / et);
                                    u -= n * et;
                                    const a = Math.trunc(u / 60);
                                    return (u -= 60 * a), { days: t, hours: n, minutes: a, seconds: u };
                                })(d),
                                t,
                            );
                            return s().createElement(
                                'div',
                                { className: p()('Countdown_base_fe', i) },
                                u !== Ku.None &&
                                    s().createElement('div', {
                                        className: p()('Countdown_icon_8b', o.icon),
                                        style: { backgroundImage: `url('${it(u, c)}')` },
                                    }),
                                s().createElement('div', { className: p()('Countdown_description_8d', o.text) }, _),
                            );
                        },
                    ),
                    ot = ({ binding: e, text: u = '', classMix: t, alignment: n = qu.left, formatWithBrackets: i }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const r = i && e ? Qu(u, e) : u;
                        return s().createElement(
                            a.Fragment,
                            null,
                            r.split('\n').map((u, i) =>
                                s().createElement(
                                    'div',
                                    { className: p()('FormatText_base_d0', t), key: `${u}-${i}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = qu.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return ju.includes(t)
                                                          ? Yu(e)
                                                          : 'ja' === t
                                                            ? (0, Uu.D4)()
                                                                  .parse(e)
                                                                  .map((e) => $u(e))
                                                            : ((e, u = qu.left) => {
                                                                  let t = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      a = $u(e);
                                                                  return (
                                                                      zu(a, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(zu(e, n, qu.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, n, e).map((e, u) =>
                                        s().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    lt = 'Timer_line_d3',
                    dt = 'Timer_point_f4',
                    ct = (0, z.Pi)(({ classNames: e }) => {
                        const u = Je().model,
                            t = u.computes.pageStatus(),
                            n = Re(t),
                            a = n.isResettable,
                            i = n.isInfinite,
                            r = u.computes.finalAnimationStatus().completedWithAnimation,
                            o = u.infiniteCondition.get(),
                            l = { statusTimer: u.condition.statusTimer.get() },
                            d = (i ? o : l).statusTimer,
                            c = a
                                ? R.strings.fun_random.progression.questsList.questsRenewTimerTitle()
                                : R.strings.fun_random.progression.questsList.questsFinishTimerTitle();
                        return s().createElement(
                            'div',
                            { className: p()('Timer_base_77', r && 'Timer_base__hide_e9', e) },
                            s().createElement(
                                'div',
                                { className: 'Timer_titleSeparatorLeft_23' },
                                s().createElement('div', { className: lt }),
                                s().createElement('div', { className: dt }),
                            ),
                            s().createElement(ot, {
                                classMix: 'Timer_questsRenewTimerTitle_4c',
                                text: c,
                                binding: { time: s().createElement(rt, { duration: d }) },
                            }),
                            s().createElement(
                                'div',
                                { className: 'Timer_titleSeparatorRight_6f' },
                                s().createElement('div', { className: dt }),
                                s().createElement('div', { className: lt }),
                            ),
                        );
                    }),
                    _t = {
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
                    Et = (0, z.Pi)(() => {
                        const e = Je(),
                            u = e.model,
                            t = e.controls,
                            n = u.computes.pageStatus(),
                            a = Re(n),
                            i = a.isCompleted,
                            r = a.isResettable,
                            o = u.root.get().assetsPointer,
                            l = Z('progression', { assetsPointer: o }).dynamicTexts,
                            d = !u.computes.needChangePage(),
                            c = Xu(['base'], _t),
                            _ = J(o).battle_type.c_136x136.fun_random();
                        return i
                            ? s().createElement(
                                  'div',
                                  {
                                      className: p()(
                                          c.base,
                                          _t.base__final,
                                          d && _t.base__static,
                                          r && _t.base__resettable,
                                      ),
                                  },
                                  s().createElement(
                                      'div',
                                      { className: _t.container },
                                      s().createElement('div', {
                                          className: _t.icon,
                                          style: { backgroundImage: `url('${_}')` },
                                      }),
                                      s().createElement('div', { className: _t.title }, l.title()),
                                      s().createElement('div', { className: _t.glow }),
                                      s().createElement(
                                          'div',
                                          { className: _t.congrats },
                                          l.complete.congratulations(),
                                      ),
                                      s().createElement('div', { className: _t.congratsSubtitle }, l.complete.title()),
                                      s().createElement(ct, { classNames: _t.timer }),
                                  ),
                                  s().createElement(
                                      Hu,
                                      { mixClass: _t.button, onClick: t.close },
                                      R.strings.fun_random.progression.complete.affirmative(),
                                  ),
                              )
                            : null;
                    }),
                    mt = {
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
                    gt = (0, z.Pi)(({ className: e }) => {
                        const u = Je().model,
                            t = u.computes.pageStatus(),
                            n = u.computes.finalAnimationStatus(),
                            a = n.completedWithAnimation,
                            i = n.completedNoAnimation,
                            r = Re(t).isActive,
                            o = u.root.get().assetsPointer,
                            l = Z('progression', { assetsPointer: o }).dynamicTexts,
                            d = Xu(['base'], mt);
                        return i
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: p()(d.base, a && mt.base__hide, r && mt.base__active, e) },
                                  s().createElement('div', { className: mt.title }, l.title()),
                                  s().createElement(ct, null),
                              );
                    });
                var At = t(8475);
                const Ft = {
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
                    Ct = 'first',
                    Dt = 'second',
                    pt = 'third',
                    ht = 'fourth',
                    Bt = {
                        [ht]: { timeout: 1e3, nextOnEntering: !1 },
                        [pt]: { timeout: 1400, nextOnEntering: !1 },
                        [Dt]: { timeout: 1400, nextOnEntering: !0 },
                        [Ct]: { timeout: 2500, nextOnEntering: !1 },
                    },
                    ft = (0, z.Pi)(({ postfix: e, isDetached: u, nextTrigger: t, isBig: n, isTransitionActive: i }) => {
                        const o = Je().model,
                            l = (0, a.useRef)(!0),
                            d = o.computes.needChangePage(),
                            c = Bt[e],
                            _ = c.timeout,
                            E = c.nextOnEntering,
                            m = e === Ct,
                            g = e === ht,
                            A = n ? le.Big : le.Small,
                            F = u ? ae.Detaching : ae.Inactive;
                        return s().createElement(
                            'div',
                            {
                                className: p()(
                                    Ft.base,
                                    n && Ft.base__big,
                                    Ft[`base__${e}`],
                                    !m && Ft.base__completed,
                                    d && Ft.base__presentment,
                                ),
                                key: e,
                                onAnimationStart: () => {
                                    l.current && !g && (r.O.sound.play.sound(ie.EvFepCardChange), (l.current = !1));
                                },
                            },
                            s().createElement(
                                At.Z,
                                {
                                    onEntered: E ? ze : t,
                                    onEntering: E ? t : ze,
                                    in: i,
                                    timeout: _,
                                    key: e,
                                    className: Ft.cardWrapper,
                                    classNames: { enter: Ft.cardWrapper__enter, enterDone: Ft.cardWrapper__enterDone },
                                },
                                s().createElement(
                                    'div',
                                    { className: Ft.cardWrapper },
                                    s().createElement(fu, {
                                        infinite: !0,
                                        classMix: { content: Ft.content, shadow: Ft.shadow, pattern: Ft.pattern },
                                        state: F,
                                        rewardsSize: A,
                                    }),
                                ),
                            ),
                        );
                    }),
                    bt = [ht, pt, Dt, Ct],
                    vt = ({ startAllowed: e, progressLevelUps: u }) => {
                        const t = Tu(),
                            n = w(),
                            i = n.mediaHeight,
                            o = n.mediaWidth,
                            l = (0, a.useState)(0),
                            d = l[0],
                            c = l[1],
                            _ = (0, a.useState)(!1),
                            E = _[0],
                            m = _[1],
                            g = (0, a.useState)(u),
                            A = g[0],
                            F = g[1],
                            C = i >= v.Medium && o >= b.Small;
                        return (
                            (0, a.useEffect)(
                                () => (
                                    e &&
                                        A > 0 &&
                                        t.run(() => {
                                            c(1), m(!0);
                                        }, 300),
                                    () => {
                                        t.clear();
                                    }
                                ),
                                [e, A, E, t],
                            ),
                            s().createElement(
                                'div',
                                { className: p()('InfiniteCards_base_39', C && 'InfiniteCards_base__big_1a') },
                                bt.map((e, u) =>
                                    s().createElement(ft, {
                                        key: e,
                                        nextTrigger: () =>
                                            ((e) => {
                                                r.O.sound.play.sound(ie.EvFepCardChange),
                                                    0 === e ? (F((e) => e - 1), m(!1), c(0)) : c(bt.length + 1 - e);
                                            })(u),
                                        isTransitionActive: d > bt.length - 1 - u,
                                        postfix: e,
                                        isDetached: E && d > 0 && 'first' === e,
                                        isBig: C,
                                    }),
                                ),
                            )
                        );
                    };
                var wt = t(2558);
                let Tt;
                !(function (e) {
                    (e.Active = 'active'), (e.Completed = 'completed');
                })(Tt || (Tt = {}));
                const Pt = {
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
                    It = ({ mainBonusCount: e, state: u, totalPoints: t, altBonusCount: n }) => {
                        const a = R.strings.fun_random.progression.questsList.quest.progressChangeLabel;
                        return u === Tt.Completed
                            ? [{ labelTemplate: a.pointsEarned(), valueTemplate: null, value: t.toString() }]
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
                    St = (0, z.Pi)(({ className: e, index: u = 0 }) => {
                        const t = Je().model,
                            n = t.computes.quest(u),
                            a = t.cardsFan.computes.cursor,
                            i = w(),
                            r = i.mediaWidth,
                            o = i.remScreenWidth,
                            l = 1 === t.quests.get().length,
                            d = ((e, u, t) => {
                                const n = t >= b.Large ? 64 : 32;
                                return {
                                    backgroundImage: `url(${u === Tt.Completed ? R.images.fun_random.gui.maps.icons.feature.quest.icon_mission_completed() : R.images.gui.maps.icons.missions.icons.$dyn(`c_${n}_${e}_silver`)})`,
                                };
                            })(n.iconKey, n.state, r),
                            c = It(n),
                            _ = c[0],
                            E = c[1],
                            m = o >= 1500 ? 'big' : 'small';
                        return s().createElement(
                            'div',
                            {
                                className: p()(
                                    Pt.base,
                                    Pt[`base__${m}`],
                                    Pt[`base__${n.state}`],
                                    Pt[`base__cursor_${a}`],
                                    l && Pt.base__single_quest,
                                    e,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: Pt.conditionIcon },
                                s().createElement('div', { className: Pt.questIcon, style: d }),
                            ),
                            s().createElement(
                                'div',
                                { className: Pt.questContent },
                                n.totalProgress >= 99
                                    ? s().createElement(
                                          'div',
                                          { className: Pt.questProgress },
                                          R.strings.fun_random.progression.questsList.quest.infinityProgress(),
                                      )
                                    : s().createElement(ot, {
                                          text: R.strings.fun_random.progression.questsList.quest.progressTitle(),
                                          classMix: Pt.questProgress,
                                          binding: {
                                              currentPoints: s().createElement(
                                                  'div',
                                                  { className: Pt.questProgressCurrent },
                                                  n.currentProgress,
                                              ),
                                              totalPoints: n.totalProgress,
                                          },
                                      }),
                                s().createElement('div', { className: Pt.questTitle }, n.description),
                                s().createElement(
                                    'div',
                                    { className: Pt.questPoints },
                                    s().createElement(ot, {
                                        text: _.labelTemplate,
                                        classMix: Pt.questPointTitle,
                                        binding: {
                                            points: _.valueTemplate
                                                ? s().createElement(ot, {
                                                      text: _.valueTemplate,
                                                      classMix: Pt.questPointScore,
                                                      binding: { pointsCount: _.value },
                                                  })
                                                : s().createElement('div', { className: Pt.questPointScore }, _.value),
                                        },
                                    }),
                                    E &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', { className: Pt.questPointBreak }),
                                            s().createElement(ot, {
                                                text: E.labelTemplate,
                                                classMix: Pt.questPointTitle,
                                                binding: {
                                                    points: E.valueTemplate
                                                        ? s().createElement(ot, {
                                                              text: E.valueTemplate,
                                                              classMix: Pt.questPointScore,
                                                              binding: { pointsCount: E.value },
                                                          })
                                                        : s().createElement(
                                                              'div',
                                                              { className: Pt.questPointScore },
                                                              E.value,
                                                          ),
                                                },
                                            }),
                                        ),
                                ),
                            ),
                        );
                    }),
                    Rt = {
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
                    xt = (0, z.Pi)(({ points: e, className: u, delay: t }) => {
                        const n = Je().model.infiniteCondition.get().maximumPoints;
                        return s().createElement(
                            'div',
                            { className: p()(Rt.base, u) },
                            s().createElement(
                                'div',
                                { className: Rt.conditionsPoints },
                                s().createElement(
                                    'div',
                                    { className: Rt.conditionsDescription },
                                    R.strings.fun_random.progression.infinite.pointsEarned(),
                                ),
                                s().createElement(
                                    'div',
                                    { className: p()(Rt.conditionsPointsItem, Rt.conditionsPointsItem__divider) },
                                    s().createElement(ot, {
                                        text: R.strings.fun_random.progression.infinite.steps(),
                                        binding: {
                                            done: s().createElement(
                                                wt.Z,
                                                { className: Rt.currentPoint },
                                                s().createElement(
                                                    At.Z,
                                                    {
                                                        key: `points-${e}`,
                                                        timeout: t,
                                                        onExited: () => {
                                                            r.O.sound.play.sound(ie.EvFepCounterChange);
                                                        },
                                                        classNames: {
                                                            enter: Rt.currentPointItem__enter,
                                                            exit: Rt.currentPointItem__exit,
                                                        },
                                                    },
                                                    s().createElement('div', { className: Rt.currentPointItem }, e),
                                                ),
                                            ),
                                            total: s().createElement('div', { className: Rt.conditionsPointsItem }, n),
                                        },
                                    }),
                                ),
                            ),
                        );
                    }),
                    Lt = 'InfiniteQuest_questPointTitle_40',
                    yt = 'InfiniteQuest_questPointScore_88',
                    Ot = (0, z.Pi)(({ progress: e }) => {
                        const u = Je().model,
                            t = u.root.get().assetsPointer,
                            a = u.computes.infiniteQuest(),
                            i = Z('progression', { assetsPointer: t }).dynamicTexts,
                            r = It(a),
                            o = r[0],
                            l = r[1];
                        return s().createElement(
                            'div',
                            { className: 'InfiniteQuest_base_9e' },
                            s().createElement(
                                'div',
                                { className: 'InfiniteQuest_questContent_fe' },
                                s().createElement(ot, {
                                    text: i.questsList.quest.infinityStageProgress(),
                                    classMix: 'InfiniteQuest_questProgress_e6',
                                    binding: {
                                        currentPoints: s().createElement(
                                            wt.Z,
                                            { className: 'InfiniteQuest_questProgressCurrent_28' },
                                            s().createElement(
                                                At.Z,
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
                                    s().createElement(ot, {
                                        text: o.labelTemplate,
                                        classMix: Lt,
                                        binding: {
                                            points: o.valueTemplate
                                                ? s().createElement(ot, {
                                                      text: o.valueTemplate,
                                                      classMix: yt,
                                                      binding: { pointsCount: o.value },
                                                  })
                                                : s().createElement('div', { className: yt }, o.value),
                                        },
                                    }),
                                    l &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', { className: 'InfiniteQuest_questPointBreak_8a' }),
                                            s().createElement(ot, {
                                                text: l.labelTemplate,
                                                classMix: Lt,
                                                binding: {
                                                    points: l.valueTemplate
                                                        ? s().createElement(ot, {
                                                              text: l.valueTemplate,
                                                              classMix: yt,
                                                              binding: { pointsCount: l.value },
                                                          })
                                                        : s().createElement('div', { className: yt }, l.value),
                                                },
                                            }),
                                        ),
                                ),
                            ),
                        );
                    }),
                    Nt = {
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
                    kt = (0, z.Pi)(() => {
                        const e = Je().model,
                            u = e.root.get().assetsPointer,
                            t = e.computes.needChangePage(),
                            n = e.infiniteCondition.get().title,
                            i = Z('progression', { assetsPointer: u }).dynamicTexts,
                            r = Xu(['base'], Nt),
                            o = (0, a.useState)(!1),
                            l = o[0],
                            d = o[1],
                            c = (0, a.useState)(!t),
                            _ = c[0],
                            E = c[1],
                            m = (0, a.useState)(!t),
                            g = m[0],
                            A = m[1];
                        return s().createElement(
                            'div',
                            {
                                className: p()(r.base, Nt.base__shown),
                                onAnimationEnd: () => {
                                    t && d(!0);
                                },
                            },
                            s().createElement('div', {
                                className: p()(Nt.glow, l && Nt.glow__show),
                                onAnimationEnd: () => E(!0),
                            }),
                            s().createElement('div', { className: Nt.title }, n),
                            g
                                ? s().createElement(
                                      'div',
                                      { className: Nt.mainHeader },
                                      s().createElement(
                                          'div',
                                          { className: p()(Nt.subtitle, Nt.subtitle__main, Nt.subtitle__uppercase) },
                                          i.infinite.infinityStep(),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: p()(Nt.subtitle, Nt.subtitle__main) },
                                          s().createElement(ct, null),
                                      ),
                                  )
                                : s().createElement(
                                      'div',
                                      {
                                          className: p()(Nt.congrats, _ && Nt.congrats__hidden),
                                          onTransitionEnd: () => A(!0),
                                      },
                                      s().createElement(
                                          'div',
                                          { className: Nt.subtitle },
                                          i.infinite.congratulations(),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: p()(Nt.congratsSubtitle, _ && Nt.congratsSubtitle__hidden) },
                                          i.infinite.mainProgressionFinished(),
                                      ),
                                  ),
                        );
                    }),
                    Mt = {
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
                    Gt = (0, z.Pi)(() => {
                        const e = Tu(),
                            u = Je().model,
                            t = u.computes.needChangePage(),
                            n = u.infiniteCondition.get(),
                            i = n.prevCompleteCount,
                            r = n.completeCount,
                            o = n.prevPoints,
                            l = n.currentPoints,
                            d = (0, a.useState)({ previous: o, current: l }),
                            c = d[0],
                            _ = d[1],
                            E = (0, a.useState)(i),
                            m = E[0],
                            g = E[1],
                            A = Xu(['base'], Mt),
                            F = t ? 4100 : 3500,
                            C = c.previous === c.current && m === r;
                        return (
                            (0, a.useEffect)(
                                () => (
                                    _({ previous: o, current: l }),
                                    g(i),
                                    e.run(() => {
                                        _((e) => ({ previous: e.current, current: e.current })), g(r);
                                    }, F),
                                    () => {
                                        e.clear();
                                    }
                                ),
                                [r, e, F, o, l, i],
                            ),
                            s().createElement(
                                'div',
                                { className: A.base },
                                s().createElement(kt, null),
                                s().createElement(
                                    'div',
                                    { className: Mt.content },
                                    s().createElement(vt, { startAllowed: C, progressLevelUps: r - i }),
                                    s().createElement(
                                        'div',
                                        { className: Mt.questContainer },
                                        s().createElement(Ot, { progress: m }),
                                        s().createElement(xt, {
                                            className: Mt.questCondition,
                                            delay: r - i > 0 ? 4400 : 1e3,
                                            points: c.previous,
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Ht = 'CurrentPoints_base_85',
                    Ut = ({ prevPoints: e, currentPoints: u, animate: t, className: n }) => (
                        (0, a.useEffect)(() => {
                            t && e !== u && r.O.sound.play.sound(ie.EvFepCounterChange);
                        }, [t, u, e]),
                        t && e !== u
                            ? s().createElement(
                                  'div',
                                  { className: p()(Ht, n) },
                                  s().createElement('div', { className: 'CurrentPoints_text_63' }, u),
                                  s().createElement('div', { className: 'CurrentPoints_prev_d0' }, e),
                                  s().createElement('div', { className: 'CurrentPoints_current_5c' }, u),
                              )
                            : s().createElement('div', { className: p()(Ht, n) }, e)
                    ),
                    qt = {
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
                    Qt = (0, z.Pi)(({ className: e }) => {
                        const u = Je().model,
                            t = u.root.get().assetsPointer,
                            n = u.condition.prevPoints.get(),
                            a = u.condition.currentPoints.get(),
                            i = u.condition.maximumPoints.get(),
                            r = u.computes.finalAnimationStatus(),
                            o = r.completedWithAnimation,
                            l = r.completedNoAnimation,
                            d = u.cardsFan.model.progress.state.runCounter.get(),
                            c = u.quests.get().length,
                            _ = w().remScreenWidth,
                            E = 1 === c ? 'oneQuest' : 'severalQuests',
                            m = c > 0 ? u.computes.quest(0).state : Tt.Active,
                            g = Z('progression', { assetsPointer: t }).dynamicTexts;
                        return l
                            ? null
                            : s().createElement(
                                  'div',
                                  {
                                      className: p()(
                                          qt.base,
                                          _ >= 1500 && qt.base__bigQuests,
                                          _ <= 1024 && qt.base__minScreen,
                                          o && qt.base__hide,
                                          e,
                                      ),
                                  },
                                  s().createElement(
                                      'div',
                                      { className: p()(qt[E], qt[`${E}__${m}`]) },
                                      s().createElement(
                                          'div',
                                          { className: qt.questsList },
                                          ue(c, (e) =>
                                              s().createElement(St, { key: e, className: qt.quest, index: e }),
                                          ),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: qt.currentProgress },
                                          c > 1
                                              ? s().createElement(ot, {
                                                    text: g.questsList.totalPointsEarned(),
                                                    classMix: qt.currentProgressTitle,
                                                    binding: {
                                                        progressionSteps: s().createElement(ot, {
                                                            text: R.strings.fun_random.progression.steps(),
                                                            classMix: qt.currentProgressPoints,
                                                            binding: {
                                                                done: s().createElement(Ut, {
                                                                    className: qt.currentProgressPointsEarned,
                                                                    prevPoints: n,
                                                                    currentPoints: a,
                                                                    animate: d,
                                                                }),
                                                                total: i,
                                                            },
                                                        }),
                                                    },
                                                })
                                              : s().createElement(
                                                    s().Fragment,
                                                    null,
                                                    s().createElement(
                                                        'div',
                                                        { className: qt.currentProgressTitle },
                                                        g.questsList.totalPointsEarnedStandAloneTitle(),
                                                    ),
                                                    s().createElement(ot, {
                                                        text: R.strings.fun_random.progression.steps(),
                                                        classMix: qt.currentProgressPoints,
                                                        binding: {
                                                            done: s().createElement(Ut, {
                                                                className: qt.currentProgressPointsEarned,
                                                                prevPoints: n,
                                                                currentPoints: a,
                                                                animate: d,
                                                            }),
                                                            total: i,
                                                        },
                                                    }),
                                                ),
                                      ),
                                  ),
                              );
                    }),
                    $t = (e, u) => {
                        const t = J(e).progression.random_rewards;
                        return u >= v.Large
                            ? t.random_rewards_icon_big()
                            : u >= v.Medium
                              ? t.random_rewards_icon_medium()
                              : t.random_rewards_icon_small();
                    },
                    Wt = ({ assetsPointer: e, onClick: u, className: t }) => {
                        const n = w().mediaHeight,
                            a = Z('progression', { assetsPointer: e }).dynamicTexts;
                        return s().createElement(
                            'div',
                            {
                                className: p()('RandomRewardsButton_base_e6', t),
                                onMouseEnter: () => r.O.sound.play.highlight(),
                                onClick: () => {
                                    r.O.sound.play.click(), u();
                                },
                            },
                            s().createElement('div', {
                                className: 'RandomRewardsButton_randomRewardsImage_1a',
                                style: { backgroundImage: `url(${$t(e, n)})` },
                            }),
                            s().createElement(
                                'div',
                                { className: 'RandomRewardsButton_randomRewardsText_d7' },
                                a.cardsFan.listOfRandomRewards(),
                            ),
                        );
                    },
                    Vt = {
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
                    zt = (0, z.Pi)(() => {
                        const e = Je(),
                            u = e.model,
                            t = e.controls,
                            n = u.computes.finalAnimationStatus(),
                            i = n.completedWithAnimation,
                            o = n.completedNoAnimation,
                            l = u.computes.pageStatus(),
                            d = u.computes.needChangePage(),
                            c = u.cardsFan.computes.cursor,
                            _ = u.root.get().assetsPointer,
                            E = Re(l),
                            m = E.isActive,
                            g = E.isInfinite,
                            A = E.isCompleted,
                            F = (0, a.useState)(g && !d),
                            C = F[0],
                            D = F[1],
                            h = (0, a.useState)(!1),
                            B = h[0],
                            f = h[1];
                        var b;
                        (b = t.close),
                            V(Q.n.ESCAPE, b),
                            (0, a.useEffect)(() => {
                                D(g && !d);
                            }, [g, d]);
                        const v = (0, Y.useSpring)(() => ({
                                from: { opacity: 1, transform: 'translateY(0rem)' },
                                config: { duration: 500 },
                                onRest: () => D(!0),
                                onStart: () => {
                                    r.O.sound.play.sound(ie.EvFepInfStepTransition), f(!0);
                                },
                            })),
                            w = v[0],
                            T = v[1];
                        return (
                            (0, a.useEffect)(() => {
                                g && d && T.start({ to: { opacity: 0, transform: 'translateY(20rem)' }, delay: 800 });
                            }, [g, d, T, m]),
                            (0, a.useEffect)(() => {
                                B && (t.cardsFun.setState(ye.Blocked), t.cardsFun.setAssembled(!0));
                            }, [t.cardsFun, B]),
                            s().createElement(
                                'div',
                                {
                                    className: p()(
                                        Vt.base,
                                        Vt[`base__${l}`],
                                        Vt[`base__cursor_${c.get()}`],
                                        A && Vt.base__completed,
                                        i && Vt.base__completedAnimated,
                                    ),
                                },
                                s().createElement('div', {
                                    className: Vt.bg,
                                    style: { backgroundImage: `url('${J(_).library.progression_bg()}')` },
                                }),
                                s().createElement(
                                    'div',
                                    { className: Vt.close },
                                    s().createElement(q, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Vt.info },
                                    s().createElement(q, {
                                        caption: R.strings.menu.viewHeader.aboutBtn.label(),
                                        type: 'info',
                                        side: 'left',
                                        onClick: t.showInfo,
                                    }),
                                ),
                                C
                                    ? s().createElement(Gt, null)
                                    : s().createElement(
                                          'div',
                                          { className: Vt.progressionContainer },
                                          s().createElement(
                                              Y.animated.div,
                                              { style: w, className: Vt.ordinaryProgression },
                                              s().createElement(gt, { className: Vt.header }),
                                              s().createElement(Qt, { className: Vt.questsList }),
                                              s().createElement(
                                                  'div',
                                                  { className: Vt.cardProgressionContainer },
                                                  s().createElement(Ou, { className: Vt.cardProgression }),
                                              ),
                                          ),
                                      ),
                                A &&
                                    s().createElement(
                                        'div',
                                        { className: Vt.completedProgression },
                                        s().createElement(Et, null),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: Vt.fadeBackground },
                                    s().createElement('div', { className: Vt.fadeLeft }),
                                    s().createElement('div', { className: Vt.fadeRight }),
                                ),
                                !o &&
                                    s().createElement(Wt, {
                                        className: Vt.toRandomRewards,
                                        onClick: t.onOpenTierList,
                                        assetsPointer: _,
                                    }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    k().render(
                        s().createElement(Ze, null, s().createElement(O, null, s().createElement(zt, null))),
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], s = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((s = !1), n < a && (a = n));
                    if (s) {
                        deferred.splice(o--, 1);
                        var r = t();
                        void 0 !== r && (e = r);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 314),
        (() => {
            var e = { 314: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [s, i, r] = t,
                        o = 0;
                    if (s.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (r) var l = r(__webpack_require__);
                    }
                    for (u && u(t); o < s.length; o++)
                        (a = s[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7720));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
