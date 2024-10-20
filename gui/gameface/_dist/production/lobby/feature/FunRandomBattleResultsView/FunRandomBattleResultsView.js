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
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            5840: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => B });
                var a = {};
                t.r(a),
                    t.d(a, { mouse: () => m, off: () => c, on: () => l, onResize: () => i, onScaleUpdated: () => o });
                var n = {};
                t.r(n),
                    t.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => A,
                        getSize: () => g,
                        graphicsQuality: () => F,
                        playSound: () => _,
                        setRTPC: () => E,
                    });
                var r = t(2472);
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const i = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    l = (e, u) => engine.on(e, u),
                    c = (e, u) => engine.off(e, u),
                    d = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    m = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && s(!1);
                        }
                        function t() {
                            e.enabled && s(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : s(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${u}`,
                                            s = d[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, i),
                                            a(),
                                            () => {
                                                n &&
                                                    (s(),
                                                    window.removeEventListener(r, i),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, n, {
                            disable() {
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
                            },
                            enableOutside() {
                                e.enabled && s(!0);
                            },
                            disableOutside() {
                                e.enabled && s(!1);
                            },
                        });
                    })();
                function _(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function E(e, u) {
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
                    D = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    p = Object.keys(D).reduce((e, u) => ((e[u] = () => _(D[u])), e), {}),
                    f = { play: Object.assign({}, p, { sound: _ }), setRTPC: E },
                    B = { view: t(2031), client: n, sound: f };
            },
            2031: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => A,
                        addPreloadTexture: () => _,
                        children: () => a,
                        displayStatus: () => s,
                        displayStatusIs: () => R,
                        events: () => o,
                        extraSize: () => P,
                        forceTriggerMouseMove: () => y,
                        freezeTextureBeforeResize: () => B,
                        getBrowserTexturePath: () => g,
                        getDisplayStatus: () => N,
                        getScale: () => b,
                        getSize: () => D,
                        getViewGlobalPosition: () => f,
                        isEventHandled: () => T,
                        isFocused: () => w,
                        pxToRem: () => h,
                        remToPx: () => C,
                        resize: () => p,
                        sendEvent: () => d,
                        setAnimateWindow: () => v,
                        setEventHandled: () => S,
                        setInputPaddingsRem: () => E,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => x,
                    });
                var a = {};
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(a), t.d(a, { getBgUrl: () => r, getTextureUrl: () => n });
                const s = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
                var i = t(2472);
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
                    c = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, l);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    d = {
                        close(e) {
                            c('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            c(64);
                        },
                        move(e) {
                            c(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    m = 15;
                function _(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, m);
                }
                function g(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function A(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, m);
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function p(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function f(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function B() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function S() {
                    return viewEnv.setEventHandled();
                }
                function T() {
                    return viewEnv.isEventHandled();
                }
                function y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function N() {
                    return viewEnv.getShowingStatus();
                }
                const R = Object.keys(s).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === s[u]), e), {}),
                    P = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            5521: (e, u, t) => {
                'use strict';
                let a, n;
                t.d(u, { n: () => a }),
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(5840);
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
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, t, n);
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
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
                t.d(u, {
                    B3: () => l,
                    Gr: () => c,
                    Z5: () => s.Z5,
                    lf: () => d,
                    B0: () => i,
                    c9: () => p,
                    ry: () => D,
                });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                var r = t(1358),
                    s = t(8613);
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
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    E = t(5840);
                const g = ['args'];
                function A(e, u, t, a, n, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, n);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function s(e) {
                                            A(r, a, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(r, a, n, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, g);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, u]) => {
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
                        var a;
                    },
                    f = () => p(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var b = t(7572);
                const h = n.instance,
                    C = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => p(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => p(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                m = o.height,
                                _ = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(m),
                                };
                            p(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, f);
                        },
                        handleViewEvent: p,
                        onBindingsReady: D,
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
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = C;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            1061: (e, u, t) => {
                'use strict';
                var a = {};
                t.r(a),
                    t.d(a, {
                        Area: () => dn,
                        Bar: () => on,
                        DefaultScroll: () => cn,
                        Direction: () => Za,
                        defaultSettings: () => Qa,
                        useHorizontalScrollApi: () => en,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => hn, Bar: () => fn, Default: () => bn, useVerticalScrollApi: () => mn });
                var r = t(6179),
                    s = t.n(r);
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
                var o = t(5840);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, u, t) {
                    const a = (function (e, u) {
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
                        n = (function (e, u) {
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
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
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
                })(c || (c = {}));
                const m = o.O.client.getSize('rem'),
                    _ = m.width,
                    E = m.height,
                    g = Object.assign({ width: _, height: E }, d(_, E, l)),
                    A = (0, r.createContext)(g),
                    F = ['children'],
                    D = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, F);
                        const a = (0, r.useContext)(A),
                            n = a.extraLarge,
                            s = a.large,
                            o = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            d = a.extraLargeWidth,
                            m = a.largeWidth,
                            _ = a.mediumWidth,
                            E = a.smallWidth,
                            g = a.extraSmallWidth,
                            D = a.extraLargeHeight,
                            p = a.largeHeight,
                            f = a.mediumHeight,
                            B = a.smallHeight,
                            b = a.extraSmallHeight,
                            h = { extraLarge: D, large: p, medium: f, small: B, extraSmall: b };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && s) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && d) return i(u, t, h);
                            if (t.largeWidth && m) return i(u, t, h);
                            if (t.mediumWidth && _) return i(u, t, h);
                            if (t.smallWidth && E) return i(u, t, h);
                            if (t.extraSmallWidth && g) return i(u, t, h);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && D) return u;
                                if (t.largeHeight && p) return u;
                                if (t.mediumHeight && f) return u;
                                if (t.smallHeight && B) return u;
                                if (t.extraSmallHeight && b) return u;
                            }
                        }
                        return null;
                    };
                (D.defaultProps = {
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
                    (0, r.memo)(D);
                const p = ({ children: e }) => {
                    const u = (0, r.useContext)(A),
                        t = (0, r.useState)(u),
                        a = t[0],
                        n = t[1],
                        i = (0, r.useCallback)((e, u) => {
                            const t = o.O.view.pxToRem(e),
                                a = o.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: a }, d(t, a, l)));
                        }, []),
                        c = (0, r.useCallback)(() => {
                            const e = o.O.client.getSize('px');
                            i(e.width, e.height);
                        }, [i]);
                    ((e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        o.O.client.events.on('clientResized', i), o.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                o.O.client.events.off('clientResized', i),
                                    o.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [i, c],
                        );
                    const m = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                    return s().createElement(A.Provider, { value: m }, e);
                };
                var f = t(6483),
                    B = t.n(f),
                    b = t(926),
                    h = t.n(b);
                let C, v, w;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(C || (C = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const S = () => {
                        const e = (0, r.useContext)(A),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return C.ExtraLarge;
                                    case e.large:
                                        return C.Large;
                                    case e.medium:
                                        return C.Medium;
                                    case e.small:
                                        return C.Small;
                                    case e.extraSmall:
                                        return C.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), C.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case e.largeWidth:
                                        return v.Large;
                                    case e.mediumWidth:
                                        return v.Medium;
                                    case e.smallWidth:
                                        return v.Small;
                                    case e.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return w.ExtraLarge;
                                    case e.largeHeight:
                                        return w.Large;
                                    case e.mediumHeight:
                                        return w.Medium;
                                    case e.smallHeight:
                                        return w.Small;
                                    case e.extraSmallHeight:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function y() {
                    return (
                        (y = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        y.apply(null, arguments)
                    );
                }
                const N = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_WIDTH,
                        [v.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [v.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [w.ExtraSmall]: '',
                        [w.Small]: h().SMALL_HEIGHT,
                        [w.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [w.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [C.ExtraSmall]: '',
                        [C.Small]: h().SMALL,
                        [C.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [C.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [C.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    I = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, T);
                        const n = S(),
                            r = n.mediaWidth,
                            i = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', y({ className: B()(t, N[r], P[i], x[o]) }, a), u);
                    },
                    O = ['children'],
                    k = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, O);
                        return s().createElement(p, null, s().createElement(I, t, u));
                    };
                var M = t(493),
                    L = t.n(M);
                function U(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const H = {
                        playHighlight() {
                            U('highlight');
                        },
                        playClick() {
                            U('play');
                        },
                        playYes() {
                            U('yes1');
                        },
                    },
                    G = {
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
                    $ = [
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
                function W() {
                    return (
                        (W = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        W.apply(null, arguments)
                    );
                }
                class z extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && U(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && U(this.props.soundClick);
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
                            a = e.goto,
                            n = e.side,
                            r = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(e, $)),
                            _ = B()(G.base, G[`base__${r}`], G[`base__${n}`], null == i ? void 0 : i.base),
                            E = B()(G.icon, G[`icon__${r}`], G[`icon__${n}`], null == i ? void 0 : i.icon),
                            g = B()(G.glow, null == i ? void 0 : i.glow),
                            A = B()(G.caption, G[`caption__${r}`], null == i ? void 0 : i.caption),
                            F = B()(G.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            W(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== r && s().createElement('div', { className: G.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: g })),
                            s().createElement('div', { className: A }, u),
                            a && s().createElement('div', { className: F }, a),
                        );
                    }
                }
                z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var q = t(5521),
                    V = t(9916);
                const j = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function X(e = q.n.NONE, u = j, t = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== q.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, a]);
                }
                function Y(e) {
                    X(q.n.ESCAPE, e);
                }
                var K = t(3403);
                const Z = R.images.fun_random.gui.maps.icons.feature.asset_packs,
                    Q = 'undefined',
                    J = (e, u) => ('string' == typeof u ? e.$dyn(u) : u.reduce((e, u) => e.$dyn(u), e)),
                    ee = (e, u) => {
                        var t;
                        const a = u ? 'sub_modes' : 'modes',
                            n = Z.$dyn(a);
                        return null != (t = n.$dyn(e)) ? t : n.$dyn(Q);
                    };
                class ue extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? V.B3.GOLD : V.B3.INTEGRAL;
                        const u = V.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                let te, ae, ne, re, se, ie, oe, le;
                (ue.defaultProps = { format: 'integral' }),
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
                    })(te || (te = {})),
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
                    })(ae || (ae = {})),
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
                    })(ne || (ne = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(re || (re = {})),
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
                    })(se || (se = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ie || (ie = {})),
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
                    })(oe || (oe = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(le || (le = {}));
                const ce = [
                        te.Items,
                        te.Equipment,
                        te.Xp,
                        te.XpFactor,
                        te.Blueprints,
                        te.BlueprintsAny,
                        te.Goodies,
                        te.Berths,
                        te.Slots,
                        te.Tokens,
                        te.CrewSkins,
                        te.CrewBooks,
                        te.Customizations,
                        te.CreditsFactor,
                        te.TankmenXp,
                        te.TankmenXpFactor,
                        te.FreeXpFactor,
                        te.BattleToken,
                        te.PremiumUniversal,
                        te.NaturalCover,
                        te.BpCoin,
                        te.BattlePassSelectToken,
                        te.BattlaPassFinalAchievement,
                        te.BattleBadge,
                        te.BonusX5,
                        te.CrewBonusX3,
                        te.NewYearInvoice,
                        te.EpicSelectToken,
                        te.Comp7TokenWeeklyReward,
                        te.DeluxeGift,
                        te.BattleBoosterGift,
                        te.OptionalDevice,
                    ],
                    de = [te.Gold, te.Credits, te.Crystal, te.FreeXp],
                    me = [te.BattlePassPoints, te.EquipCoin],
                    _e = [te.PremiumPlus, te.Premium],
                    Ee = ['engravings', 'backgrounds'],
                    ge = ['engraving', 'background'],
                    Ae = (e, u = ne.Small) => {
                        const t = e.name,
                            a = e.type,
                            n = e.value,
                            r = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case ne.S600x450:
                                        return 'c_600x450';
                                    case ne.S400x300:
                                        return 'c_400x300';
                                    case ne.S296x222:
                                        return 'c_296x222';
                                    case ne.S232x174:
                                        return 'c_232x174';
                                    case ne.Big:
                                        return 'c_80x80';
                                    case ne.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = Ee[e];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            r = n.$dyn(t);
                                        return r ? `${r}` : `${n.$dyn(ge[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${r}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Fe = (e, u, t) => {
                        const a = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            a,
                            t,
                        );
                    },
                    De = [ne.Small, ne.Big];
                let pe, fe;
                function Be(e) {
                    return e;
                }
                function be() {
                    return !1;
                }
                !(function (e) {
                    (e.Squad = 'squad'),
                        (e.Player = 'player'),
                        (e.Damage = 'damage'),
                        (e.Frag = 'frag'),
                        (e.Xp = 'xp'),
                        (e.Vehicle = 'tank');
                })(pe || (pe = {})),
                    (function (e) {
                        (e.Asc = 'ascending'), (e.Desc = 'descending');
                    })(fe || (fe = {})),
                    console.log;
                var he = t(9174);
                function Ce(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const ve = (e) => (0 === e ? window : window.subViews.get(e));
                const we = function (e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                };
                function Se(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function Te(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) if (u(we(e, t), t, e)) return !0;
                    return !1;
                }
                function ye(e, u) {
                    for (let n = 0; n < e.length; n++) {
                        const r =
                            ((t = e[n]),
                            (a = void 0),
                            t && 'value' in t && null != (a = t.constructor) && a.name.includes('ArrayItem')
                                ? null == t
                                    ? void 0
                                    : t.value
                                : t);
                        if (u(r, n, e)) return r;
                    }
                    var t, a;
                }
                function Ne(e, u) {
                    for (let t = 0; t < e.length; t++) if (u(we(e, t), t, e)) return t;
                }
                var Re = t(3946);
                const Pe = {
                        [pe.Squad]: 'squadHeader',
                        [pe.Frag]: 'fragHeader',
                        [pe.Xp]: 'xpHeader',
                        [pe.Vehicle]: 'tankHeader',
                        [pe.Player]: 'playerHeader',
                        [pe.Damage]: 'damageHeader',
                    },
                    xe = [pe.Squad, pe.Vehicle, pe.Player];
                let Ie;
                !(function (e) {
                    (e[(e.DESCENDING = -1)] = 'DESCENDING'), (e[(e.ASCENDING = 1)] = 'ASCENDING');
                })(Ie || (Ie = {}));
                const Oe = (e) => (u) => (t, a) => e.call(null, t, a) * u,
                    ke =
                        (...e) =>
                        (u, t) => {
                            for (let a = 0; a < e.length; a++) {
                                const n = e[a].call(null, u, t);
                                if (0 !== n) return n;
                            }
                            return 0;
                        },
                    Me = (e, u) => {
                        const t = e.toUpperCase(),
                            a = u.toUpperCase();
                        return t === a ? 0 : t > a ? 1 : -1;
                    },
                    Le = (e) => (u, t) => {
                        const a = u[e],
                            n = t[e];
                        return 'string' == typeof a && 'string' == typeof n
                            ? Me(a, n)
                            : 'number' == typeof a && 'number' == typeof n
                              ? a - n
                              : 0;
                    },
                    Ue = 'lightTank',
                    He = 'mediumTank',
                    Ge = 'heavyTank',
                    $e = 'SPG',
                    We = 'AT-SPG',
                    ze = { [fe.Asc]: Ie.ASCENDING, [fe.Desc]: Ie.DESCENDING },
                    qe = { [Ge]: 4, [He]: 3, [We]: 2, [Ue]: 1, [$e]: 0 },
                    Ve = ({ userNames: e }, { userNames: u }) => Me(e.userName, u.userName),
                    je = (e) => {
                        const u = Le(e);
                        return ({ efficiencyValues: e }, { efficiencyValues: t }) => u(e, t);
                    },
                    Xe = (e) => {
                        const u = Le(e);
                        return ({ vehicle: e }, { vehicle: t }) => u(e, t);
                    },
                    Ye = {
                        [pe.Damage]: Oe(ke(je('damageDealt'), Ve)),
                        [pe.Frag]: Oe(ke(je('kills'), Ve)),
                        [pe.Xp]: Oe(ke(je('earnedXp'), Ve)),
                        [pe.Squad]: Oe(
                            ke(
                                ((e) => {
                                    const u = Le('squadIndex');
                                    return (e, t) => u(e, t);
                                })(),
                                Ve,
                            ),
                        ),
                        [pe.Vehicle]: Oe(
                            (
                                (e, ...u) =>
                                (t, a) => {
                                    for (let n = 0; n < u.length; n++) {
                                        const r = e[n],
                                            s = (0 !== r ? r : Ie.ASCENDING) * u[n].call(null, t, a);
                                        if (0 !== s) return s;
                                    }
                                    return 0;
                                }
                            )(
                                [0, 0, Ie.DESCENDING, Ie.DESCENDING],
                                Xe('tier'),
                                (e, u) =>
                                    ((e, u) => {
                                        const t = qe[e],
                                            a = qe[u];
                                        return t === a ? 0 : t > a ? 1 : -1;
                                    })(e.vehicle.type, u.vehicle.type),
                                Xe('name'),
                                Ve,
                            ),
                        ),
                        [pe.Player]: Oe(Ve),
                    },
                    Ke = (e, u, t) => {
                        const a = ze[t];
                        return Se(e, Be).sort(Ye[u](a));
                    },
                    Ze = 'allies',
                    Qe = 'empty',
                    Je = '1',
                    eu = '2',
                    uu = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: n, mocks: i }) {
                                const l = (0, r.useRef)([]),
                                    c = (e, t, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ve,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
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
                                                    subscribe: (t, r) => {
                                                        const i = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return n.set(l, t), e && t(s(r)), l;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
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
                                                                                    return Ce(e, u);
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
                                                                                          ? Ce(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
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
                                                            !(e = t()).done;

                                                        )
                                                            r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        userStatus: e.object('userStatus'),
                                                        user: e.object('userNames'),
                                                        killer: e.object('userStatus.killer'),
                                                        battleInfo: e.object('battleInfo'),
                                                        efficiency: e.array('efficiency'),
                                                        rewards: e.array('rewards'),
                                                        premiumPlus: e.object('premiumPlus'),
                                                        detailsColumns: e.array('teamStats.shownValueColumns'),
                                                        sortType: e.object('teamStats.sortingColumn'),
                                                        sortDirection: e.object('teamStats.sortingOrder'),
                                                        selectedTeam: he.LO.box(Qe),
                                                        selectedPlayerId: he.LO.box(-1),
                                                        currentTabId: he.LO.box(Je),
                                                        allies: e.array('teamStats.allies'),
                                                        enemies: e.array('teamStats.enemies'),
                                                        progressRewards: e.array('progress.rewards'),
                                                        progress: e.object('progress'),
                                                        animationStatus: he.LO.box(!0),
                                                    },
                                                    t = (0, Re.Om)(() => {
                                                        const e = Te(
                                                                u.allies.get(),
                                                                (e) => void 0 !== e.squadIndex && e.squadIndex > 0,
                                                            ),
                                                            t = Te(
                                                                u.enemies.get(),
                                                                (e) => void 0 !== e.squadIndex && e.squadIndex > 0,
                                                            );
                                                        return e || t;
                                                    }),
                                                    a = (0, Re.Om)(() => {
                                                        const e = u.sortType.get();
                                                        return e !== pe.Squad || t() ? e : pe.Xp;
                                                    }),
                                                    n = (0, Re.Om)(() => {
                                                        const e = ye(u.allies.get(), (e) => e.isPersonal);
                                                        return e ? e.squadIndex : -1;
                                                    }),
                                                    r = (0, Re.Om)(() =>
                                                        Ke(u.enemies.get(), a(), u.sortDirection.get()),
                                                    ),
                                                    s = (0, Re.Om)(() =>
                                                        Ke(u.allies.get(), a(), u.sortDirection.get()),
                                                    ),
                                                    i = (0, Re.Om)(() => {
                                                        const e = u.selectedTeam.get() === Ze,
                                                            t = u.selectedPlayerId.get();
                                                        return ye(
                                                            e ? u.allies.get() : u.enemies.get(),
                                                            (e) => e.playerIndex === t,
                                                        );
                                                    }),
                                                    o = (0, Re.Om)(() => {
                                                        const e = i();
                                                        return (
                                                            !!e &&
                                                            (function (e, u, t) {
                                                                if (Array.isArray(e)) return e.reduce(u, t);
                                                                let a = t;
                                                                for (let t = 0; t < e.length; t++)
                                                                    a = u(a, we(e, t), t, e);
                                                                return a;
                                                            })(
                                                                e.detailedStatistics,
                                                                (e, u) => e + 1 + u.details.length,
                                                                0,
                                                            ) > 23
                                                        );
                                                    }),
                                                    l = (0, Re.Om)(
                                                        () =>
                                                            Se(u.progressRewards.get(), (e) => {
                                                                return {
                                                                    name: e.name,
                                                                    image: Ae(e),
                                                                    value: e.value,
                                                                    special: e.overlayType,
                                                                    valueType:
                                                                        ((u = e.name),
                                                                        ce.includes(u)
                                                                            ? re.MULTI
                                                                            : de.includes(u)
                                                                              ? re.CURRENCY
                                                                              : me.includes(u)
                                                                                ? re.NUMBER
                                                                                : _e.includes(u)
                                                                                  ? re.PREMIUM_PLUS
                                                                                  : re.STRING),
                                                                    tooltipArgs: Fe(
                                                                        { tooltipId: e.tooltipId },
                                                                        Number(e.tooltipContentId),
                                                                    ),
                                                                };
                                                                var u;
                                                            }),
                                                        { equals: be },
                                                    ),
                                                    c = (0, Re.Om)(() => {
                                                        const e = u.progress.get(),
                                                            t = e.maximumPoints,
                                                            a = e.previousPoints,
                                                            n = e.currentPoints,
                                                            r = e.earnedPoints;
                                                        return {
                                                            previous: {
                                                                value: t,
                                                                deltaFrom: a,
                                                                maxValue: t,
                                                                earnedPoints: t - a,
                                                            },
                                                            current: {
                                                                value: n,
                                                                deltaFrom: n - r,
                                                                maxValue: t,
                                                                earnedPoints: r,
                                                            },
                                                            fromZeroToStart: {
                                                                value: n,
                                                                deltaFrom: 0,
                                                                maxValue: t,
                                                                earnedPoints: n,
                                                            },
                                                            withoutAnimation: {
                                                                value: n,
                                                                deltaFrom: n,
                                                                maxValue: t,
                                                                earnedPoints: 0,
                                                            },
                                                        };
                                                    });
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        personalSquadIndex: n,
                                                        enemiesSorted: r,
                                                        alliesSorted: s,
                                                        selectedPlayer: i,
                                                        hasDetailedInfoScroll: o,
                                                        hasSquads: t,
                                                        activeSortingType: a,
                                                        progressionValues: c,
                                                        rewards: l,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            n = he.LO.box(a, { equals: be });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, he.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            n = he.LO.box(a, { equals: be });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, he.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = i(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = he.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, he.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                r = Object.entries(n),
                                                                i = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = he.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, he.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            m = { mode: e, model: d, externalModel: s, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && a ? a.controls(m) : u(m),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    d = (0, r.useRef)(!1),
                                    m = (0, r.useState)(e),
                                    _ = m[0],
                                    E = m[1],
                                    g = (0, r.useState)(() => c(e, a, i)),
                                    A = g[0],
                                    F = g[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        d.current ? F(c(_, a, i)) : (d.current = !0);
                                    }, [i, _, a]),
                                    (0, r.useEffect)(() => {
                                        E(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            A.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [A],
                                    ),
                                    s().createElement(t.Provider, { value: A }, n)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        0,
                        ({
                            externalModel: e,
                            model: {
                                currentTabId: u,
                                sortType: t,
                                sortDirection: a,
                                selectedTeam: n,
                                selectedPlayerId: r,
                                animationStatus: s,
                            },
                        }) =>
                            Object.assign(
                                {
                                    closeWindow: e.createCallbackNoArgs('onClose'),
                                    riseRewards: e.createCallbackNoArgs('premiumPlus.onPremiumXpBonusApplied'),
                                    changeTab: e.createCallback((e) => ({ tabId: e }), 'onTabChanged'),
                                    saveStatsSorting: e.createCallback(
                                        (e, u) => ({ column: e, sortDirection: u }),
                                        'teamStats.onStatsSorted',
                                    ),
                                },
                                (function (e) {
                                    const u = {};
                                    for (const t in e)
                                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                                            const a = e[t];
                                            u[t] = (0, he.aD)(a);
                                        }
                                    return u;
                                })({
                                    updateTeamTableSelectedPlayer: (e, u) => {
                                        n.set(e), r.set(u);
                                    },
                                    updateTeamTableSorting: (e, u) => {
                                        t.set(e), a.set(u);
                                    },
                                    updateCurrentTabId: (e) => {
                                        u.set(e);
                                    },
                                    setAnimationEnabled: (e) => {
                                        s.set(e);
                                    },
                                }),
                            ),
                    ),
                    tu = uu[0],
                    au = uu[1],
                    nu = {
                        base: 'App_base_e5',
                        background: 'App_background_63',
                        background__team: 'App_background__team_b0',
                        bgDarken: 'App_bgDarken_79',
                        bgDarken__personal: 'App_bgDarken__personal_f7',
                        bgGlow: 'App_bgGlow_c4',
                        bgGlow__tie: 'App_bgGlow__tie_f1',
                        bgGlow__win: 'App_bgGlow__win_9d',
                        bgGlow__lose: 'App_bgGlow__lose_a4',
                        closeButton: 'App_closeButton_7f',
                        wrapper: 'App_wrapper_9d',
                        content: 'App_content_90',
                        footer: 'App_footer_35',
                        navigation: 'App_navigation_ee',
                        navigationItem: 'App_navigationItem_19',
                    },
                    ru = {
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
                let su, iu;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(su || (su = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(iu || (iu = {}));
                const ou = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: n,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const A = (0, r.useRef)(null),
                        F = (0, r.useState)(t),
                        D = F[0],
                        p = F[1],
                        f = (0, r.useState)(!1),
                        b = f[0],
                        h = f[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                D && null !== A.current && !A.current.contains(e.target) && p(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [D]),
                        (0, r.useEffect)(() => {
                            p(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: A,
                                className: B()(
                                    ru.base,
                                    ru[`base__${a}`],
                                    n && ru.base__disabled,
                                    u && ru[`base__${u}`],
                                    D && ru.base__focus,
                                    b && ru.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    n || (null !== o && U(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    n || (_ && _(e), h(!1));
                                },
                                onMouseDown: function (e) {
                                    n ||
                                        (null !== l && U(l),
                                        m && m(e),
                                        t && (n || (A.current && (A.current.focus(), p(!0)))),
                                        h(!0));
                                },
                                onMouseLeave: function (e) {
                                    n || (E && E(e), h(!1));
                                },
                                onClick: function (e) {
                                    n || (g && g(e));
                                },
                            },
                            a !== su.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: ru.back }),
                                    s().createElement('span', { className: ru.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: B()(ru.state, ru.state__default) },
                                s().createElement('span', { className: ru.stateDisabled }),
                                s().createElement('span', { className: ru.stateHighlightHover }),
                                s().createElement('span', { className: ru.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: ru.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ou.defaultProps = { type: su.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const lu = ou;
                let cu;
                !(function (e) {
                    (e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime');
                })(cu || (cu = {}));
                var du = t(1281);
                let mu;
                function _u(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(mu || (mu = {}));
                const Eu = (e) => e.replace(/&nbsp;/g, ' '),
                    gu = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Au = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Fu = (e, u, t = mu.left) => e.split(u).reduce(t === mu.left ? gu : Au, []),
                    Du = (() => {
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
                    pu = ['zh_cn', 'zh_sg', 'zh_tw'];
                var fu = t(8613);
                const Bu = (Date.now(), fu.Ew.getRegionalDateTime),
                    bu = fu.Ew.getFormattedDateTime,
                    hu = (0, r.memo)(({ datetime: e, format: u = cu.ShortDate, isConvertedToLocal: t = !0 }) =>
                        Object.values(cu).includes(u) ? Bu(e, u, t) : bu(e, u, t),
                    ),
                    Cu = ({ binding: e, text: u = '', classMix: t, alignment: a = mu.left, formatWithBrackets: n }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const i = n && e ? ((o = e), u.replace(/\{\w+\}/g, (e) => String(o[e.slice(1, -1)]))) : u;
                        var o;
                        return s().createElement(
                            r.Fragment,
                            null,
                            i.split('\n').map((u, n) =>
                                s().createElement(
                                    'div',
                                    { className: B()('FormatText_base_d0', t), key: `${u}-${n}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = mu.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return pu.includes(t)
                                                          ? Du(e)
                                                          : 'ja' === t
                                                            ? (0, du.D4)()
                                                                  .parse(e)
                                                                  .map((e) => Eu(e))
                                                            : ((e, u = mu.left) => {
                                                                  let t = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      n = Eu(e);
                                                                  return (
                                                                      Fu(n, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(Fu(e, a, mu.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, a, e).map((e, u) =>
                                        s().createElement(r.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    };
                let vu;
                !(function (e) {
                    (e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220');
                })(vu || (vu = {}));
                const wu = [
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
                function Su(e) {
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
                const Tu = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: V.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    yu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            g = e.isEnabled,
                            A = void 0 === g || g,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            p = e.onShow,
                            f = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, wu);
                        const b = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, r.useMemo)(
                                () =>
                                    D ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            a = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (a = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: a }
                                        );
                                    })().resId,
                                [D],
                            ),
                            C = (0, r.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (Tu(t, E, { isMouseEvent: !0, on: !0, arguments: Su(a) }, h),
                                    p && p(),
                                    (b.current.isVisible = !0));
                            }, [t, E, a, h, p]),
                            v = (0, r.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        Tu(t, E, { on: !1 }, h),
                                        b.current.isVisible && f && f(),
                                        (b.current.isVisible = !1);
                                }
                            }, [t, E, h, f]),
                            w = (0, r.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(b.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = b.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === A && v();
                            }, [A, v]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            ),
                            A
                                ? (0, r.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((b.current.timeoutId = window.setTimeout(C, c ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  v(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === m && v(), null == o || o(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === m && v(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          B,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    Nu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ru() {
                    return (
                        (Ru = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Ru.apply(null, arguments)
                    );
                }
                const Pu = R.views.common.tooltip_window.simple_tooltip_content,
                    xu = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            n = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Nu);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: a, note: n, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, a, n, o]);
                        return s().createElement(
                            yu,
                            Ru(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? Pu.SimpleTooltipHtmlContent('resId') : Pu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    Iu = (e) => {
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
                    },
                    Ou = ['content', 'classMix', 'className'];
                function ku() {
                    return (
                        (ku = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        ku.apply(null, arguments)
                    );
                }
                const Mu = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            a = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Ou);
                        const i = (0, r.useRef)(null),
                            o = (0, r.useState)(!0),
                            l = o[0],
                            c = o[1];
                        return (
                            (0, r.useEffect)(() =>
                                Iu(() => {
                                    const e = i.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            s().createElement(
                                xu,
                                { isEnabled: l, body: u },
                                s().createElement(
                                    'div',
                                    ku({}, n, { ref: i, className: B()('TextOverflow_base_3b', a, t) }),
                                    u,
                                ),
                            )
                        );
                    },
                    Lu = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Uu = { [vu.default]: 'c_24x24', [vu.x48]: 'c_48x48', [vu.x80]: 'c_80x80', [vu.x220]: 'c_220x220' },
                    Hu = ({ badgeID: e, size: u = vu.default, className: t }) => {
                        const a = R.images.gui.maps.icons.library.badges.$dyn(Uu[u]);
                        return s().createElement('div', {
                            className: B()(Lu.base, Lu[`base__${u}`], t),
                            style: { backgroundImage: `url(${a.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Gu = {
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
                    $u = (0, r.memo)(({ tooltipHeaderName: e }) => {
                        const u = (0, r.useMemo)(
                                () => _u(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return s().createElement(
                            xu,
                            { header: u, body: t },
                            s().createElement('div', { className: Gu.anonymizedIcon }),
                        );
                    });
                function Wu() {
                    return (
                        (Wu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Wu.apply(null, arguments)
                    );
                }
                const zu = { [vu.default]: 'c_64x24', [vu.x48]: 'c_68x28' },
                    qu = { [vu.default]: 'c_48x48', [vu.x48]: 'c_48x48' },
                    Vu = ({
                        userName: e,
                        clanAbbrev: u = '',
                        igrType: t = 0,
                        badge: a = { badgeID: '' },
                        suffixBadge: n = { badgeID: '' },
                        isInverted: i = !1,
                        isFakeNameVisible: o = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: d = vu.default,
                        userNameClassName: m = '',
                        clanTagClassName: _ = '',
                    }) => {
                        const E = R.images.gui.maps.icons.library.badges.strips.$dyn(zu[d]),
                            g = (0, r.useMemo)(
                                () => ({ backgroundImage: `url(${E.$dyn(`strip_${n.badgeID}`)})` }),
                                [n, E],
                            ),
                            A = R.images.gui.maps.icons.library.badges.$dyn(qu[d]),
                            F = (0, r.useMemo)(
                                () => ({ backgroundImage: `url(${A.$dyn(`badge_${n.badgeID}`)})` }),
                                [n, A],
                            ),
                            D = u ? `[${u}]` : '',
                            p = B()(Gu.base, Gu[`base__${d}`], i && Gu.base__inverted),
                            f = B()(Gu.userName, m),
                            b = B()(Gu.clanTag, _),
                            h = e !== c,
                            C = o ? `${c}${D}` : c,
                            v = Boolean(a.badgeID) && s().createElement(Hu, Wu({ size: d }, a, { key: 'badge' })),
                            w = Date.now(),
                            S = [
                                v,
                                [
                                    s().createElement(
                                        'div',
                                        { className: f, key: 'userName' },
                                        s().createElement(Mu, { content: e, key: w }),
                                    ),
                                    !o && Boolean(D) && s().createElement('div', { className: b, key: 'clanTag' }, D),
                                ],
                                0 !== t && s().createElement('div', { className: Gu.igrIcon, key: 'igrType' }),
                                Boolean(n.badgeID) &&
                                    s().createElement(
                                        'div',
                                        { className: Gu.suffixBadgeWrapper, key: 'suffixBadge' },
                                        s().createElement('div', { className: Gu.suffixBadgeStripe, style: g }),
                                        s().createElement('div', { className: Gu.suffixBadge, style: F }),
                                    ),
                                l && h && s().createElement($u, { tooltipHeaderName: C, key: 'anonymizer' }),
                            ];
                        return s().createElement('div', { className: p }, i ? S.reverse() : S);
                    };
                let ju;
                var Xu;
                ((Xu = ju || (ju = {})).Base = '#ced9d9'),
                    (Xu.Killed = '#8c8c7e'),
                    (Xu.Highlighted = '#feab34'),
                    (Xu.KilledHighlighted = '#b58136'),
                    (Xu.TeamKiller = '#09e2ff'),
                    (Xu.KilledTeamKiller = '#0c8fa0'),
                    (Xu.DetailedInfoPlayerBase = '#f2f2f7');
                const Yu = ['isTeamKiller'],
                    Ku = (e) => {
                        let u = e.isTeamKiller,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Yu);
                        return u
                            ? t.isKilled
                                ? ju.KilledTeamKiller
                                : ju.TeamKiller
                            : (({ isPersonal: e, isSameSquad: u, isKilled: t }) =>
                                  e || u ? (t ? ju.KilledHighlighted : ju.Highlighted) : t ? ju.Killed : ju.Base)(t);
                    },
                    Zu = ['isTeamKiller', 'isKilled', 'isPersonal', 'isSameSquad'],
                    Qu = (e) => {
                        let u = e.isTeamKiller,
                            t = e.isKilled,
                            a = e.isPersonal,
                            n = e.isSameSquad,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Zu);
                        const o = Ku({ isTeamKiller: u, isKilled: t, isPersonal: a, isSameSquad: n }),
                            l = (0, r.useMemo)(() => ({ color: o }), [o]);
                        return s().createElement('div', { style: l }, s().createElement(Vu, i));
                    },
                    Ju = 'Footer_top_2c',
                    et = 'Footer_bottom_d1',
                    ut = 'Footer_killer_b8',
                    tt = 'Footer_dot_be',
                    at = (0, K.Pi)(() => {
                        const e = au(),
                            u = e.model,
                            t = e.controls.closeWindow,
                            a = u.currentTabId.get() === eu,
                            n = u.battleInfo.get(),
                            i = n.modeName,
                            o = n.arenaName,
                            l = n.battleStartTime,
                            c = n.battleDuration,
                            d = n.finishReason,
                            m = u.userStatus.get(),
                            _ = m.deathReason,
                            E = m.isLeftBattle,
                            g = u.user.get(),
                            A = u.killer.get(),
                            F = E
                                ? R.strings.battle_results.common.vehicleState.prematureLeave()
                                : R.strings.battle_results.common.vehicleState.alive();
                        return (
                            Y(t),
                            s().createElement(
                                'div',
                                { className: B()('Footer_base_68', a && 'Footer_base__teams_44') },
                                s().createElement(
                                    'div',
                                    { className: 'Footer_left_2f' },
                                    s().createElement(
                                        'div',
                                        { className: Ju },
                                        systemLocale.toUpperCase(i),
                                        s().createElement('div', { className: tt }),
                                        systemLocale.toUpperCase(o),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: et },
                                        s().createElement('div', null, R.strings.fun_battle_results.finish()),
                                        s().createElement(
                                            'div',
                                            { className: 'Footer_accent_a7' },
                                            s().createElement(hu, { datetime: l + c, format: cu.ShortDateTime }),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Footer_button_de' },
                                    s().createElement(
                                        lu,
                                        { type: su.primary, size: iu.medium, onClick: t },
                                        s().createElement(Cu, { text: R.strings.fun_battle_results.continueBtn() }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Footer_right_cd' },
                                    s().createElement('div', { className: Ju }, systemLocale.toUpperCase(d)),
                                    s().createElement(
                                        'div',
                                        { className: et },
                                        !E && g.isKilled
                                            ? s().createElement(
                                                  'div',
                                                  { className: ut },
                                                  R.strings.battle_results.common.vehicleState.$dyn(`dead${_}`),
                                                  A.userName !== g.userName &&
                                                      s().createElement(
                                                          r.Fragment,
                                                          null,
                                                          s().createElement(Cu, {
                                                              text: R.strings.common.common.nbsp(),
                                                          }),
                                                          s().createElement(Qu, A),
                                                      ),
                                              )
                                            : s().createElement('div', { className: ut }, F),
                                        s().createElement('div', { className: tt }),
                                        s().createElement(
                                            'div',
                                            { className: 'Footer_player_5f' },
                                            s().createElement(Qu, g),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    nt = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let rt, st;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(rt || (rt = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(st || (st = {}));
                const it = ({ size: e = rt.Default }) => {
                        const u = B()(nt.background, nt[`background__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    ot = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    lt = ({ size: e }) => {
                        const u = B()(ot.base, ot[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    ct = {
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
                    dt = (0, r.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: n, withoutBounce: r }) => {
                            const i = B()(
                                    ct.base,
                                    ct[`base__${e}`],
                                    t && ct.base__disabled,
                                    n && ct.base__finished,
                                    r && ct.base__withoutBounce,
                                ),
                                o = !t && !n;
                            return s().createElement(
                                'div',
                                { className: i, style: a, ref: u },
                                s().createElement('div', { className: ct.pattern }),
                                s().createElement('div', { className: ct.gradient }),
                                o && s().createElement(lt, { size: e }),
                            );
                        },
                    ),
                    mt = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: n }) => {
                        const i = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, r.useEffect)(() => {
                                o && n && n();
                            }, [o, n]),
                            s().createElement(dt, { size: e, disabled: a, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    },
                    _t = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(a);
                        };
                    };
                let Et, gt;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Et || (Et = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(gt || (gt = {}));
                const At = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < a,
                                d = (0, r.useState)(gt.Idle),
                                m = d[0],
                                _ = d[1],
                                E = m === gt.In,
                                g = m === gt.End,
                                A = m === gt.Idle,
                                F = (0, r.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, r.useEffect)(() => {
                                if (A && !t)
                                    return _t(() => {
                                        F(gt.In);
                                    }, u);
                            }, [F, t, A, u]),
                                (0, r.useEffect)(() => {
                                    if (E)
                                        return _t(() => {
                                            o && o(), F(gt.End);
                                        }, e + u);
                                }, [F, E, o, u, e]);
                            const D = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                p = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                f = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(a - i)}%`, left: `${c ? i : a}%` }),
                                    [a, c, i],
                                );
                            return g
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: f },
                                      s().createElement(
                                          'div',
                                          { style: A ? D : p, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(lt, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    Ft = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(dt, {
                                    size: u,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: i,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    s().createElement(At, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Dt = (e) => (e ? { left: 0 } : { right: 0 }),
                    pt = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    ft = (e) => ({ transitionDuration: `${e}ms` }),
                    Bt = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = i < a,
                                m = (0, r.useState)(Et.Idle),
                                _ = m[0],
                                E = m[1],
                                g = _ === Et.End,
                                A = _ === Et.Idle,
                                F = _ === Et.Grow,
                                D = _ === Et.Shrink,
                                p = (0, r.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                f = (0, r.useCallback)(
                                    (e, u) =>
                                        _t(() => {
                                            p(e);
                                        }, u),
                                    [p],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return A
                                        ? f(Et.Grow, u)
                                        : F
                                          ? f(Et.Shrink, e)
                                          : D
                                            ? f(Et.End, e)
                                            : void (g && o && o());
                            }, [f, t, g, F, A, D, o, u, e]);
                            const b = (0, r.useMemo)(() => Object.assign({ width: '100%' }, ft(e), Dt(d)), [d, e]),
                                h = (0, r.useMemo)(() => Object.assign({ width: '0%' }, ft(e), Dt(d)), [d, e]),
                                C = (0, r.useMemo)(() => Object.assign({ width: '0%' }, pt(d, a), ft(e)), [a, d, e]),
                                v = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - a)}%` }, pt(d, a), ft(e)),
                                    [a, d, i, e],
                                );
                            if (g) return null;
                            const w = B()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                d && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: A ? C : v, className: w },
                                s().createElement(
                                    'div',
                                    { style: D ? h : b, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(lt, { size: n }),
                                ),
                            );
                        },
                    ),
                    bt = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                m = (0, r.useState)(!1),
                                _ = m[0],
                                E = m[1],
                                g = (0, r.useCallback)(
                                    (e) => {
                                        e === Et.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                A = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(dt, {
                                    size: u,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: i,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? F : A,
                                }),
                                t >= 0 &&
                                    s().createElement(Bt, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    ht = ['onComplete', 'onEndAnimation'];
                function Ct() {
                    return (
                        (Ct = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Ct.apply(null, arguments)
                    );
                }
                const vt = (0, r.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, ht);
                        const n = (0, r.useState)(!1),
                            i = n[0],
                            o = n[1],
                            l = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== i && o(e), e && u && u(), t && t();
                            }, [i, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case st.Simple:
                                return s().createElement(Ft, Ct({}, a, { onEndAnimation: l, isComplete: i }));
                            case st.Growing:
                                return s().createElement(bt, Ct({}, a, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    wt = ['onEndAnimation'];
                function St() {
                    return (
                        (St = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        St.apply(null, arguments)
                    );
                }
                const Tt = (0, r.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, wt);
                    const a = (0, r.useRef)({}),
                        n = (0, r.useCallback)(() => {
                            (a.current.from = void 0), u && u();
                        }, [u]),
                        i = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = i),
                        s().createElement(vt, St({}, t, { onEndAnimation: n, key: `${i}-${t.to}`, from: i }))
                    );
                });
                function yt() {
                    return (
                        (yt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        yt.apply(null, arguments)
                    );
                }
                const Nt = (0, r.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: n,
                            animationSettings: r,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (n === u)
                                return s().createElement(mt, {
                                    key: `${n}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: n,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: a,
                                animationSettings: r,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return r.withStack
                                ? s().createElement(Tt, c)
                                : s().createElement(vt, yt({ key: `${n}-${u}` }, c));
                        },
                    ),
                    Rt = (e) => ({
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
                    Pt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    xt = (e, u, t) => ('number' == typeof t ? (Pt(0, u, t) / u) * 100 : e),
                    It = {
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
                    Ot = {
                        freezed: !1,
                        withStack: !1,
                        type: st.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    kt = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = It,
                            size: t = rt.Default,
                            animationSettings: a = Ot,
                            disabled: n = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: d,
                            onEndAnimation: m,
                            onComplete: _,
                        }) => {
                            const E = ((e, u, t) =>
                                (0, r.useMemo)(() => {
                                    const a = (Pt(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: xt(a, u, t) };
                                }, [t, u, e]))(o, e, l);
                            return s().createElement(
                                'div',
                                { className: B()(nt.base, nt[`base__${t}`]), style: Rt(u) },
                                !i && s().createElement(it, { size: t }),
                                s().createElement(Nt, {
                                    size: t,
                                    lineRef: c,
                                    disabled: n,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: m,
                                    onChangeAnimationState: d,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    Mt = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    Lt = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Ut = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ht = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Gt = (0, r.memo)(({ text: e, binding: u, classMix: t }) => {
                        const a = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            n = (0, r.useMemo)(() => u || {}, [u]);
                        let i = Lt.exec(e),
                            o = e,
                            l = 0;
                        for (; i; ) {
                            const t = i[0],
                                r = Ut.exec(t),
                                c = Ht.exec(t),
                                d = i[1];
                            if (r && c) {
                                const e = r[0],
                                    i = e + l++ + e;
                                (o = o.replace(t, `%(${i})`)),
                                    (n[i] = Mt[e]
                                        ? s().createElement(
                                              'span',
                                              { className: Mt[e] },
                                              s().createElement(Cu, { text: d, binding: u }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: a(e) },
                                              s().createElement(Cu, { text: d, binding: u }),
                                          ));
                            }
                            i = Lt.exec(e);
                        }
                        return s().createElement(Cu, { text: o, classMix: t, binding: n });
                    });
                const $t = {
                        freezed: !1,
                        withStack: !1,
                        type: st.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    Wt = ['children'];
                function zt() {
                    return (
                        (zt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        zt.apply(null, arguments)
                    );
                }
                const qt = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, Wt);
                    return s().createElement(
                        yu,
                        zt(
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
                };
                function Vt() {
                    return (
                        (Vt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Vt.apply(null, arguments)
                    );
                }
                const jt = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(xu, u, a);
                        const n = u.contentId;
                        return n ? s().createElement(yu, Vt({}, u, { contentId: n }), a) : s().createElement(qt, u, a);
                    },
                    Xt = {
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
                    Yt = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = ne.Big,
                        special: n,
                        value: r,
                        valueType: i,
                        title: o,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const E = ((e, u) => {
                                if (void 0 === u || !De.includes(e)) return null;
                                switch (u) {
                                    case se.BATTLE_BOOSTER:
                                    case se.BATTLE_BOOSTER_REPLACE:
                                        return ie.BATTLE_BOOSTER;
                                }
                            })(a, n),
                            g = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case se.BATTLE_BOOSTER:
                                        return oe.BATTLE_BOOSTER;
                                    case se.BATTLE_BOOSTER_REPLACE:
                                        return oe.BATTLE_BOOSTER_REPLACE;
                                    case se.BUILT_IN_EQUIPMENT:
                                        return oe.BUILT_IN_EQUIPMENT;
                                    case se.EQUIPMENT_PLUS:
                                        return oe.EQUIPMENT_PLUS;
                                    case se.EQUIPMENT_TROPHY_BASIC:
                                        return oe.EQUIPMENT_TROPHY_BASIC;
                                    case se.EQUIPMENT_TROPHY_UPGRADED:
                                        return oe.EQUIPMENT_TROPHY_UPGRADED;
                                    case se.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case se.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case se.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case se.PROGRESSION_STYLE_UPGRADED_1:
                                        return oe.PROGRESSION_STYLE_UPGRADED_1;
                                    case se.PROGRESSION_STYLE_UPGRADED_2:
                                        return oe.PROGRESSION_STYLE_UPGRADED_2;
                                    case se.PROGRESSION_STYLE_UPGRADED_3:
                                        return oe.PROGRESSION_STYLE_UPGRADED_3;
                                    case se.PROGRESSION_STYLE_UPGRADED_4:
                                        return oe.PROGRESSION_STYLE_UPGRADED_4;
                                    case se.PROGRESSION_STYLE_UPGRADED_5:
                                        return oe.PROGRESSION_STYLE_UPGRADED_5;
                                    case se.PROGRESSION_STYLE_UPGRADED_6:
                                        return oe.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(n),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case re.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case re.CURRENCY:
                                    case re.NUMBER:
                                        return s().createElement(ue, { format: 'integral', value: Number(e) });
                                    case re.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, i);
                        return s().createElement(
                            'div',
                            { className: B()(Xt.base, Xt[`base__${a}`], c), style: l },
                            s().createElement(
                                jt,
                                { tooltipArgs: m, className: Xt.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: B()(Xt.image, null == d ? void 0 : d.image) },
                                        E &&
                                            s().createElement('div', {
                                                className: B()(Xt.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${E}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: B()(Xt.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        g &&
                                            s().createElement('div', {
                                                className: B()(Xt.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${g}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    Xt.info,
                                                    Xt[`info__${e}`],
                                                    i === re.MULTI && Xt.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            A,
                                        ),
                                    o && s().createElement('div', { className: Xt.title }, o),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    jt,
                                    { tooltipArgs: _ },
                                    s().createElement('div', {
                                        className: B()(Xt.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Kt = 'Rewards_checkmark_c6';
                function Zt() {
                    return (
                        (Zt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Zt.apply(null, arguments)
                    );
                }
                const Qt = ({
                        data: e,
                        size: u = ne.Big,
                        count: t,
                        classMix: a,
                        rewardItemClassMix: n,
                        boxRewardTooltip: i,
                        boxRewardValue: o,
                    }) => {
                        const l = (0, r.useMemo)(
                                () => (t && t < e.length ? `R.images.gui.maps.icons.quests.bonuses.${u}.default` : ''),
                                [t, e.length, u],
                            ),
                            c =
                                o ||
                                _u(R.strings.tooltips.quests.awards.additional.bottom(), {
                                    count: e.length - (t || 0),
                                }),
                            d = B()('Rewards_base_86', a),
                            m = B()('Rewards_reward_3c', n);
                        return s().createElement(
                            'div',
                            { className: d },
                            l
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      e
                                          .slice(0, t)
                                          .map((e, t) =>
                                              s().createElement(
                                                  'div',
                                                  { key: t, className: m },
                                                  s().createElement(Yt, Zt({ size: u }, e)),
                                                  s().createElement('div', { className: Kt }),
                                              ),
                                          ),
                                      s().createElement(
                                          'div',
                                          { className: m },
                                          s().createElement(Yt, {
                                              name: 'more',
                                              image: l,
                                              size: u,
                                              value: c,
                                              tooltipArgs: i,
                                              className: 'Rewards_item_cf',
                                              classNames: { image: 'Rewards_image_e9' },
                                          }),
                                          s().createElement('div', { className: Kt }),
                                      ),
                                  )
                                : e.map((e, t) =>
                                      s().createElement(
                                          'div',
                                          { key: t, className: m },
                                          s().createElement(Yt, Zt({ size: u }, e)),
                                          s().createElement('div', { className: Kt }),
                                      ),
                                  ),
                        );
                    },
                    Jt = {
                        base: 'Progress_base_81',
                        title: 'Progress_title_be',
                        description: 'Progress_description_d5',
                        bar: 'Progress_bar_b5',
                        counter: 'Progress_counter_d1',
                        currentCount: 'Progress_currentCount_e3',
                        slash: 'Progress_slash_fe',
                        value: 'Progress_value_4f',
                        footer: 'Progress_footer_bd',
                        rewards: 'Progress_rewards_30',
                        header: 'Progress_header_16',
                        reward: 'Progress_reward_78',
                        infiniteIcon: 'Progress_infiniteIcon_4d',
                    },
                    ea = R.strings.fun_battle_results.progress,
                    ua = (0, K.Pi)(() => {
                        const e = au(),
                            u = e.model,
                            t = e.controls,
                            a = u.progress.get(),
                            n = a.description,
                            i = a.assetsPointer,
                            l = a.currentStage,
                            c = a.maximumStage,
                            d = a.isInUnlimitedProgression,
                            m = a.previousStage,
                            _ = a.earnedPoints,
                            E = ((e, { poFileName: u, assetsPointer: t, isSubMode: a } = {}) => {
                                const n = u ? R.strings.$dyn(u) : R.strings.fun_random;
                                if (!n || 'string' == typeof n) throw Error("Incorrect 'poFileName' argument");
                                const r = a ? 'sub_modes' : 'modes',
                                    s = (t ? n.$dyn(r)[t] : n) || n.$dyn(r)[Q];
                                return e
                                    ? { staticTexts: J(n, e), dynamicTexts: J(s, e) }
                                    : { staticTexts: n, dynamicTexts: s };
                            })(null, { assetsPointer: i }),
                            g = E.dynamicTexts,
                            A = l !== m,
                            F = A ? u.computes.progressionValues().previous : u.computes.progressionValues().current,
                            D = (function () {
                                const e = (0, r.useRef)(!0);
                                var u;
                                return (
                                    (u = () => {
                                        e.current = !1;
                                    }),
                                    (0, r.useEffect)(u, []),
                                    e.current
                                );
                            })(),
                            p = u.animationStatus.get(),
                            f = (0, r.useState)(p ? F : u.computes.progressionValues().withoutAnimation),
                            B = f[0],
                            b = f[1],
                            h = (0, r.useState)(A ? m : l),
                            C = h[0],
                            v = h[1];
                        return (
                            s().useEffect(() => {
                                if ((p && o.O.sound.play.sound('ev_fep_pb_start'), !D))
                                    return (0, he.EH)(() => {
                                        p &&
                                            C === l &&
                                            (b(u.computes.progressionValues().fromZeroToStart),
                                            t.setAnimationEnabled(!1));
                                    });
                            }, [l, u.computes, C, p, D, t]),
                            s().createElement(
                                'div',
                                { className: Jt.base },
                                s().createElement(
                                    'div',
                                    { className: Jt.header },
                                    s().createElement(
                                        'div',
                                        { className: Jt.title },
                                        s().createElement(Gt, {
                                            text: d ? ea.unlimitedProgression.title() : ea.title(),
                                            binding: { modeName: g.userName(), done: p ? C : l, total: d ? '' : c },
                                        }),
                                    ),
                                    s().createElement('div', { className: Jt.description }, n),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Jt.bar },
                                    s().createElement(kt, {
                                        animationSettings: $t,
                                        size: rt.Default,
                                        deltaFrom: B.deltaFrom,
                                        value: B.value,
                                        maxValue: B.maxValue,
                                        onChangeAnimationState: (e) =>
                                            ((e) => {
                                                e === gt.End &&
                                                    (o.O.sound.play.sound('ev_fep_pb_stop'),
                                                    C === l && t.setAnimationEnabled(!1),
                                                    C < l && v(l));
                                            })(e),
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Jt.footer },
                                    s().createElement(
                                        'div',
                                        { className: Jt.counter },
                                        s().createElement('div', { className: Jt.currentCount }, B.value),
                                        s().createElement(
                                            'div',
                                            { className: Jt.slash },
                                            s().createElement(Cu, { text: R.strings.common.common.slash() }),
                                        ),
                                        s().createElement('div', { className: Jt.total }, B.maxValue),
                                    ),
                                    s().createElement(Qt, {
                                        classMix: Jt.rewards,
                                        data: u.computes.rewards(),
                                        size: ne.Small,
                                        count: u.computes.rewards().length > 4 ? 3 : void 0,
                                        boxRewardTooltip: {
                                            contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                            args: { showCount: 4 },
                                        },
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: Jt.value },
                                        _ > 0 ? _u(R.strings.common.plusValue(), { value: _ }) : _,
                                    ),
                                ),
                            )
                        );
                    });
                let ta, aa;
                !(function (e) {
                    (e.Draw = 'tie'), (e.Win = 'win'), (e.Lose = 'lose');
                })(ta || (ta = {})),
                    (function (e) {
                        (e.UNDEFINED = 'undefined'),
                            (e.MUL = 'mul'),
                            (e.ADD = 'add'),
                            (e.SUB = 'sub'),
                            (e.PROCENT = 'procent'),
                            (e.SHOW_NEGATIVE_IMPACT = 'showNegativeImpact');
                    })(aa || (aa = {}));
                const na = {
                        base: 'Profit_base_51',
                        base__big: 'Profit_base__big_52',
                        base__large: 'Profit_base__large_70',
                        icon: 'Profit_icon_75',
                        'icon__tankmenXP-small': 'Profit_icon__tankmenXP-small_3f',
                        'icon__tankmenXP-big': 'Profit_icon__tankmenXP-big_a7',
                        'icon__tankmenXP-large': 'Profit_icon__tankmenXP-large_ef',
                        'icon__credits-small': 'Profit_icon__credits-small_5d',
                        base__small: 'Profit_base__small_4e',
                        'icon__credits-big': 'Profit_icon__credits-big_02',
                        'icon__credits-large': 'Profit_icon__credits-large_6b',
                        'icon__gold-small': 'Profit_icon__gold-small_87',
                        'icon__gold-big': 'Profit_icon__gold-big_d4',
                        'icon__gold-large': 'Profit_icon__gold-large_b8',
                        'icon__crystal-small': 'Profit_icon__crystal-small_8d',
                        'icon__crystal-big': 'Profit_icon__crystal-big_74',
                        'icon__crystal-large': 'Profit_icon__crystal-large_6f',
                        'icon__multyXp-small': 'Profit_icon__multyXp-small_34',
                        'icon__multyFreeXp-small': 'Profit_icon__multyFreeXp-small_cc',
                        'icon__xp-small': 'Profit_icon__xp-small_88',
                        'icon__xp-big': 'Profit_icon__xp-big_7f',
                        'icon__xp-large': 'Profit_icon__xp-large_37',
                        'icon__freeXP-small': 'Profit_icon__freeXP-small_26',
                        'icon__freeXP-big': 'Profit_icon__freeXP-big_36',
                        'icon__freeXP-large': 'Profit_icon__freeXP-large_b0',
                        value: 'Profit_value_c4',
                        value__notEnough: 'Profit_value__notEnough_0f',
                    },
                    ra = (e, u) =>
                        (function (e, u) {
                            for (let t = 0; t < e.length; t++) if (we(e, t) === u) return !0;
                            return !1;
                        })(u, e),
                    sa = ({ type: e, value: u, showPlus: t, size: a, modifiers: n = [] }) =>
                        s().createElement(
                            'span',
                            { className: B()(na.base, na[`base__${a}`]) },
                            s().createElement(
                                'span',
                                {
                                    className: B()(
                                        na.value,
                                        na[`value__${e}`],
                                        (u < 0 || ra(aa.SHOW_NEGATIVE_IMPACT, n)) && na.value__notEnough,
                                    ),
                                },
                                (t || ra(aa.ADD, n)) && u > 0 && '+',
                                ra(aa.MUL, n) && R.strings.common.multiplier(),
                                Number.isInteger(u) ? s().createElement(ue, { value: u }) : u,
                                ra(aa.PROCENT, n) && R.strings.common.common.percent(),
                            ),
                            s().createElement('span', { className: B()(na.icon, na[`icon__${e}-${a}`]) }),
                        ),
                    ia = ({ type: e, value: u }) => {
                        const t = S();
                        return s().createElement(
                            yu,
                            {
                                contentId:
                                    R.views.fun_random.lobby.tooltips.FunRandomBattleResultsEconomicTooltipView(
                                        'resId',
                                    ),
                                args: { currencyType: e },
                            },
                            s().createElement(
                                'div',
                                { className: 'Reward_base_1a' },
                                s().createElement(sa, {
                                    type: e,
                                    value: u,
                                    size: [C.Large, C.ExtraLarge].includes(t.mediaSize) ? 'large' : 'big',
                                }),
                            ),
                        );
                    },
                    oa = { base: 'RewardList_base_bc' },
                    la = (0, K.Pi)(() => {
                        const e = au().model.rewards.get();
                        return s().createElement(
                            'div',
                            { className: oa.base },
                            Se(e, (e, u) =>
                                s().createElement('div', { className: oa.item, key: u }, s().createElement(ia, e)),
                            ),
                        );
                    }),
                    ca = (e = 0, u = 1, t, a, n = !1) => {
                        const s = (0, r.useState)(e),
                            i = s[0],
                            o = s[1];
                        return (
                            (0, r.useEffect)(() => {
                                o(e);
                            }, [e]),
                            (0, r.useEffect)(() => {
                                const r = Date.now(),
                                    s = setInterval(() => {
                                        const u = e + (n ? 1 : -1) * Math.floor((Date.now() - r) / 1e3);
                                        void 0 !== t && (n ? u >= t : u <= t)
                                            ? (o(t), a && a(), clearInterval(s))
                                            : o(u);
                                    }, 1e3 * u);
                                return () => {
                                    clearInterval(s);
                                };
                            }, [e, u, t, a, n]),
                            i
                        );
                    },
                    da = ({
                        className: e,
                        hourFormat: u = R.strings.quests.general.countdown.timer_hrs(),
                        minuteFormat: t = R.strings.quests.general.countdown.timer_min(),
                        roundUpHours: a = !1,
                        startingSeconds: n = 0,
                        refreshRate: r = 1,
                        onFinish: i,
                        targetTime: o,
                        useTimeUpdateHook: l = ca,
                        isCountUp: c = !1,
                    }) => {
                        const d = l(n, r, o, i, c),
                            m = Math.abs(d) < 3600 ? t : u;
                        return s().createElement(
                            'span',
                            { className: e },
                            ((e, u, t) => {
                                const a = u < 0,
                                    n = Math.abs(u),
                                    r = Math.floor(n / 86400).toString(),
                                    s = Math.floor(n / 3600).toString(),
                                    i = Math.floor((n % 3600) / 60).toString(),
                                    o = Math.floor(n % 60).toString(),
                                    l = e
                                        .replace('%D', r.padStart(1, '0'))
                                        .replace('%HH', s.padStart(2, '0'))
                                        .replace('%H', t && Number(i) >= 30 ? (Number(s) + 1).toString() : s)
                                        .replace('%MM', i.padStart(2, '0'))
                                        .replace('%M', i.toString())
                                        .replace('%SS', o.padStart(2, '0'))
                                        .replace('%S', o);
                                return a ? `-${l}` : l;
                            })(m, d, a),
                        );
                    };
                let ma, _a, Ea, ga, Aa;
                var Fa, Da, pa;
                let fa;
                !(function (e) {
                    (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                })(ma || (ma = {})),
                    (function (e) {
                        (e[(e.Equipped = 0)] = 'Equipped'), (e[(e.Locked = 1)] = 'Locked'), (e[(e.Open = 2)] = 'Open');
                    })(_a || (_a = {})),
                    ((pa = Ea || (Ea = {})).Engraving = 'engraving'),
                    (pa.Background = 'background'),
                    (pa.All = 'all'),
                    ((Da = ga || (ga = {})).Dedication = 'dedication'),
                    (Da.Skill = 'skill'),
                    (Da.RankedSkill = 'ranked_skill'),
                    (Da.Triumph = 'triumph'),
                    (Da.Medal = 'triumph_medal'),
                    (Da.Base = 'base'),
                    ((Fa = Aa || (Aa = {})).Dedication = 'dedication'),
                    (Fa.Triumph = 'triumph'),
                    (Fa.Season = 'season'),
                    Aa.Dedication,
                    ga.Dedication,
                    Aa.Triumph,
                    ga.Triumph,
                    Aa.Season,
                    ga.Skill,
                    ga.RankedSkill,
                    (function (e) {
                        (e.NUMBER = 'NUMBER'), (e.PERCENTAGE = 'PERCENTAGE');
                    })(fa || (fa = {})),
                    R.images.gui.maps.icons.dogtags,
                    R.strings.dogtags.component,
                    ma.Engraving,
                    ma.Background,
                    ma.Engraving,
                    ma.Background;
                const Ba = (e, u = fa.NUMBER) => {
                    const t = V.Z5.getRealFormat(e, V.Gr.WO_ZERO_DIGITS).replace(/\s/g, ' ');
                    return u === fa.PERCENTAGE ? `${t} %` : t;
                };
                let ba;
                !(function (e) {
                    (e[(e.NoRestriction = 0)] = 'NoRestriction'),
                        (e[(e.IsApplied = 1)] = 'IsApplied'),
                        (e[(e.InvalidBattleType = 2)] = 'InvalidBattleType'),
                        (e[(e.IsNotVictory = 3)] = 'IsNotVictory'),
                        (e[(e.DeprecatedResults = 4)] = 'DeprecatedResults'),
                        (e[(e.NoVehicle = 5)] = 'NoVehicle'),
                        (e[(e.NoCrew = 6)] = 'NoCrew'),
                        (e[(e.FasterEducationCrewNotActive = 7)] = 'FasterEducationCrewNotActive'),
                        (e[(e.FasterEducationCrewActive = 8)] = 'FasterEducationCrewActive'),
                        (e[(e.NotApplyingError = 9)] = 'NotApplyingError');
                })(ba || (ba = {}));
                const ha = 'Upgrade_icon_32',
                    Ca = 'Upgrade_error_2b';
                let va;
                !(function (e) {
                    (e[(e.IsNotVictory = ba.IsNotVictory)] = 'IsNotVictory'),
                        (e[(e.DeprecatedResults = ba.DeprecatedResults)] = 'DeprecatedResults'),
                        (e[(e.NoVehicle = ba.NoVehicle)] = 'NoVehicle'),
                        (e[(e.NoCrew = ba.NoCrew)] = 'NoCrew'),
                        (e[(e.FasterEducationCrewNotActive = ba.FasterEducationCrewNotActive)] =
                            'FasterEducationCrewNotActive'),
                        (e[(e.FasterEducationCrewActive = ba.FasterEducationCrewActive)] = 'FasterEducationCrewActive');
                })(va || (va = {}));
                const wa = R.strings.fun_battle_results.ribbon,
                    Sa = [ba.IsApplied, ba.NotApplyingError, ba.IsNotVictory],
                    Ta = [ba.IsApplied, ba.NoRestriction],
                    ya = (0, K.Pi)(() => {
                        const e = au(),
                            u = e.model,
                            t = e.controls,
                            a = u.premiumPlus.get(),
                            n = a.nextBonusTime,
                            r = a.xpDiff,
                            i = a.restriction,
                            o = a.bonusMultiplier,
                            l = a.leftBonusCount,
                            c = a.isUndefinedLeftBonusCount,
                            d = !Sa.includes(i),
                            m = Ta.includes(i),
                            _ = i === ba.IsNotVictory,
                            E = i === ba.NoRestriction && (l > 0 || c),
                            g = () => {
                                E && t.riseRewards();
                            };
                        return s().createElement(
                            'div',
                            { className: B()('Upgrade_base_25', E && 'Upgrade_base__column_02') },
                            s().createElement('div', { className: 'Upgrade_highlight_44' }),
                            E &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: 'Upgrade_flash_e0' }),
                                    s().createElement('div', {
                                        className: 'Upgrade_multiplier_81',
                                        style: {
                                            backgroundImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.ribbon.multiplaers.$dyn('x' + String(o))})`,
                                        },
                                    }),
                                ),
                            n > 0 && !_
                                ? s().createElement(
                                      'div',
                                      { className: 'Upgrade_timerWrapper_6a' },
                                      s().createElement('div', { className: 'Upgrade_timerText_27' }, wa.timeLeft()),
                                      s().createElement(
                                          'div',
                                          { className: B()('Upgrade_state_ee', 'Upgrade_state__timer_2d') },
                                          s().createElement('div', { className: B()(ha, 'Upgrade_icon__timer_eb') }),
                                          s().createElement(da, {
                                              startingSeconds: n,
                                              refreshRate: 1,
                                              targetTime: 0,
                                              hourFormat: '%HH:%MM:%SS',
                                              className: 'Upgrade_timer_06',
                                          }),
                                      ),
                                  )
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      (() => {
                                          switch (i) {
                                              case ba.NotApplyingError:
                                                  return s().createElement(
                                                      'div',
                                                      { className: Ca },
                                                      s().createElement('div', {
                                                          className: B()(ha, 'Upgrade_icon__attention_a6'),
                                                      }),
                                                      s().createElement('span', null, wa.errorState()),
                                                  );
                                              case ba.IsApplied:
                                                  return s().createElement(
                                                      s().Fragment,
                                                      null,
                                                      s().createElement('div', { className: 'Upgrade_accepter_0d' }),
                                                      s().createElement(
                                                          'div',
                                                          { className: 'Upgrade_applied_b3' },
                                                          wa.applied(),
                                                      ),
                                                  );
                                              case ba.NoRestriction:
                                                  return s().createElement(
                                                      'div',
                                                      {
                                                          className: B()(
                                                              'Upgrade_button_d7',
                                                              d && 'Upgrade_button__cursor_eb',
                                                          ),
                                                          onClick: g,
                                                      },
                                                      s().createElement(
                                                          'div',
                                                          {
                                                              className: B()(
                                                                  'Upgrade_content_a5',
                                                                  'Upgrade_content__normal_7d',
                                                              ),
                                                          },
                                                          s().createElement(Cu, {
                                                              text: wa.expBonus(),
                                                              classMix: 'Upgrade_defaultState_a0',
                                                              binding: {
                                                                  count: Ba(r),
                                                                  icon: s().createElement('img', {
                                                                      className: 'Upgrade_xpIcon_df',
                                                                      src: 'R.images.gui.maps.icons.library.XpIcon_1',
                                                                      alt: 'bubble',
                                                                  }),
                                                              },
                                                          }),
                                                      ),
                                                  );
                                              default:
                                                  return s().createElement(
                                                      'div',
                                                      { className: Ca },
                                                      s().createElement('div', {
                                                          className: B()(ha, 'Upgrade_icon__information_50'),
                                                      }),
                                                      s().createElement(
                                                          'span',
                                                          null,
                                                          R.strings.fun_battle_results.premiumBonus.$dyn(va[i]),
                                                      ),
                                                  );
                                          }
                                      })(),
                                  ),
                            l >= 0 &&
                                m &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    !E && s().createElement('div', { className: 'Upgrade_devider_63' }),
                                    s().createElement(
                                        'div',
                                        { className: 'Upgrade_usesLeft_a2' },
                                        s().createElement(Cu, {
                                            text: wa.usesLeft(),
                                            binding: {
                                                count: s().createElement(
                                                    'div',
                                                    { className: 'Upgrade_points_73' },
                                                    i === ba.NotApplyingError || c ? R.strings.common.common.dash() : l,
                                                ),
                                            },
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Na = {
                        base: 'Ribbon_base_51',
                        base__upgradable: 'Ribbon_base__upgradable_36',
                        ribbon: 'Ribbon_ribbon_03',
                        ribbon__win: 'Ribbon_ribbon__win_b4',
                        ribbon__prem: 'Ribbon_ribbon__prem_92',
                        ribbon__lose: 'Ribbon_ribbon__lose_0f',
                        ribbon__lose_prem: 'Ribbon_ribbon__lose_prem_97',
                        ribbon__draw: 'Ribbon_ribbon__draw_0e',
                        ribbon__draw_prem: 'Ribbon_ribbon__draw_prem_80',
                        upgrade: 'Ribbon_upgrade_13',
                        icon: 'Ribbon_icon_d4',
                        icon__1: 'Ribbon_icon__1_95',
                        icon__2: 'Ribbon_icon__2_71',
                        icon__3: 'Ribbon_icon__3_28',
                        icon__4: 'Ribbon_icon__4_f2',
                        icon__5: 'Ribbon_icon__5_30',
                    },
                    Ra = (0, K.Pi)(() => {
                        const e = au().model,
                            u = e.battleInfo.get().winStatus,
                            t = e.premiumPlus.get(),
                            a = t.hasPremium,
                            n = t.isXpBonusEnabled,
                            r = u === ta.Win;
                        return s().createElement(
                            'div',
                            { className: B()(Na.base, n && Na.base__upgradable) },
                            s().createElement('div', {
                                className: B()(
                                    Na.ribbon,
                                    r && (a ? Na.ribbon__prem : Na.ribbon__win),
                                    !r && (a ? Na.ribbon__lose_prem : Na.ribbon__lose),
                                ),
                            }),
                            s().createElement(la, null),
                            s().createElement('div', { className: Na.shadow }),
                            n && s().createElement('div', { className: Na.upgrade }, s().createElement(ya, null)),
                        );
                    }),
                    Pa = ({ paramType: e, value: u }) =>
                        s().createElement(
                            yu,
                            {
                                contentId: R.views.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
                                args: { paramType: e },
                            },
                            s().createElement(
                                'div',
                                { className: 'StatItem_base_11' },
                                s().createElement('div', {
                                    className: 'StatItem_statImage_27',
                                    style: {
                                        backgroundImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.stat_list.$dyn(e)})`,
                                    },
                                }),
                                s().createElement('div', { className: 'StatItem_statText_7b' }, u),
                                s().createElement(
                                    'div',
                                    { className: 'StatItem_titleText_ed' },
                                    s().createElement(Cu, {
                                        text: String(R.strings.fun_battle_results.efficiency.$dyn(e)),
                                    }),
                                ),
                            ),
                        ),
                    xa = (0, K.Pi)(() => {
                        const e = au().model.efficiency.get();
                        return s().createElement(
                            'div',
                            { className: 'StatList_base_58' },
                            Se(e, (e, u) =>
                                s().createElement(
                                    'div',
                                    { className: 'StatList_item_0e', key: u },
                                    s().createElement(Pa, e),
                                ),
                            ),
                        );
                    }),
                    Ia = {
                        base: 'PersonalTab_base_09',
                        content: 'PersonalTab_content_1f',
                        header: 'PersonalTab_header_6d',
                        ribbon: 'PersonalTab_ribbon_da',
                        statistics: 'PersonalTab_statistics_7d',
                        progress: 'PersonalTab_progress_ca',
                        title: 'PersonalTab_title_f9',
                    },
                    Oa = R.strings.fun_battle_results.result,
                    ka = (0, K.Pi)(() => {
                        const e = au().model,
                            u = e.battleInfo.get().winStatus,
                            t = e.efficiency.get(),
                            a = e.rewards.get(),
                            n = e.progress.get().hasProgress;
                        return s().createElement(
                            'div',
                            { className: Ia.base },
                            s().createElement(
                                'div',
                                { className: Ia.content },
                                s().createElement(
                                    'div',
                                    { className: B()(Ia.header, Ia[`header__${u}`]) },
                                    s().createElement('div', { className: Ia.title }, Oa.$dyn(u)),
                                ),
                                t.length >= 3 &&
                                    s().createElement('div', { className: Ia.statistics }, s().createElement(xa, null)),
                                a.length > 0 &&
                                    s().createElement('div', { className: Ia.ribbon }, s().createElement(Ra, null)),
                                n && s().createElement('div', { className: Ia.progress }, s().createElement(ua, null)),
                            ),
                        );
                    }),
                    Ma = [];
                function La(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), Ma)
                    );
                }
                const Ua = (0, r.createContext)(null);
                function Ha() {
                    const e = (0, r.useContext)(Ua);
                    if (null === e) throw new Error('You can use tabs hooks only with Tabs component');
                    return e;
                }
                const Ga = {
                    base: 'Switch_base_22',
                    base__inactive: 'Switch_base__inactive_ae',
                    base__active: 'Switch_base__active_17',
                    highlight: 'Switch_highlight_33',
                    border: 'Switch_border_3a',
                    border__left: 'Switch_border__left_b2',
                    border__right: 'Switch_border__right_93',
                    separator: 'Switch_separator_f2',
                    separator__left: 'Switch_separator__left_40',
                    separator__right: 'Switch_separator__right_bf',
                };
                function $a() {
                    return (
                        ($a = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        $a.apply(null, arguments)
                    );
                }
                const Wa = s().forwardRef(function (e, u) {
                        let t = $a(
                            {},
                            ((function (e) {
                                if (null == e) throw new TypeError('Cannot destructure ' + e);
                            })(e),
                            e),
                        );
                        return s().createElement('div', $a({ className: 'Switcher_base_2f', ref: u }, t));
                    }),
                    za = (e) => {
                        const u = e.active,
                            t = e.children,
                            a = e.onActiveChange,
                            n = (0, r.useState)(u),
                            i = n[0],
                            o = n[1],
                            l = La((e) => {
                                null == a || a(e);
                            }),
                            c = (0, r.useMemo)(() => ({ active: i, change: o }), [i]);
                        return (
                            (0, r.useLayoutEffect)(() => {
                                o(u);
                            }, [u]),
                            (0, r.useEffect)(() => {
                                u !== i && a && l(i);
                            }, [i, u, l, a]),
                            s().createElement(Ua.Provider, { value: c }, t)
                        );
                    };
                (za.Switcher = Wa),
                    (za.Switch = ({ tabId: e, children: u }) => {
                        const t = Ha();
                        return s().createElement(
                            'div',
                            {
                                className: B()(
                                    Ga.base,
                                    Ga['base__' + ((n = t.active === e), n ? 'active' : 'inactive')],
                                ),
                                onClick: () => t.change(e),
                            },
                            s().createElement('div', {
                                className: B()(
                                    Ga.separator,
                                    Ga['separator__' + ((a = t.active < e), a ? 'right' : 'left')],
                                ),
                            }),
                            t.active === e &&
                                s().createElement(
                                    r.Fragment,
                                    null,
                                    s().createElement('div', { className: Ga.highlight }),
                                    s().createElement('div', { className: B()(Ga.border, Ga.border__left) }),
                                    s().createElement('div', { className: B()(Ga.border, Ga.border__right) }),
                                ),
                            u,
                        );
                        var a, n;
                    }),
                    (za.Content = ({ children: e }) => {
                        const u = Ha();
                        return s().createElement(r.Fragment, { key: u.active }, e(u.active));
                    });
                const qa = 'LifeStatus_killer_4b',
                    Va = R.strings.battle_results.common.vehicleState,
                    ja = ({ player: e }) => {
                        const u = e.userStatus,
                            t = u.isLeftBattle,
                            a = u.deathReason,
                            n = u.killer,
                            i = e.userNames,
                            o = i.userName,
                            l = i.isKilled,
                            c = t && e.isPersonal ? Va.prematureLeave() : Va.alive();
                        return s().createElement(
                            'div',
                            { className: 'LifeStatus_base_03' },
                            !t && l
                                ? s().createElement(
                                      'div',
                                      { className: qa },
                                      Va.$dyn(`dead${a}`),
                                      n.userName !== o &&
                                          s().createElement(
                                              r.Fragment,
                                              null,
                                              s().createElement(Cu, { text: R.strings.common.common.nbsp() }),
                                              s().createElement(Qu, n),
                                          ),
                                  )
                                : s().createElement('div', { className: qa }, c),
                        );
                    };
                function Xa(e, u, t = []) {
                    const a = (0, r.useRef)(0),
                        n = (0, r.useCallback)(() => window.clearInterval(a.current), t || []);
                    (0, r.useEffect)(() => n, [n]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            (a.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        n,
                    ];
                }
                function Ya(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                var Ka = t(7030);
                let Za;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Za || (Za = {}));
                const Qa = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ja = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: a,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (e, t) => {
                            const a = u(e),
                                n = a[0],
                                r = a[1];
                            return r <= n ? 0 : Pt(n, r, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? Qa : c,
                                m = (0, r.useRef)(null),
                                _ = (0, r.useRef)(null),
                                E = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        a = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (
                                                var a,
                                                    n = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return Ya(e, u);
                                                                    var t = {}.toString.call(e).slice(8, -1);
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
                                                                              ? Ya(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
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
                                                    })(u(e).values());
                                                !(a = n()).done;

                                            )
                                                (0, a.value)(...t);
                                        };
                                    return (0, r.useMemo)(() => ({ on: t, off: a, trigger: n }), []);
                                })(),
                                g = (function (e, u, t) {
                                    const a = (0, r.useMemo)(
                                        () =>
                                            (function (e, u, t, a) {
                                                let n,
                                                    r = !1,
                                                    s = 0;
                                                function i() {
                                                    n && clearTimeout(n);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function d() {
                                                        (s = Date.now()), t.apply(l, o);
                                                    }
                                                    r ||
                                                        (a && !n && d(),
                                                        i(),
                                                        void 0 === a && c > e
                                                            ? d()
                                                            : !0 !== u &&
                                                              (n = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((a = t), (t = u), (u = void 0)),
                                                    (o.cancel = function () {
                                                        i(), (r = !0);
                                                    }),
                                                    o
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                                })(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, Ka.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), E.trigger('change', e), s && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                F = A[0],
                                D = A[1],
                                p = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var a;
                                        const n = F.scrollPosition.get(),
                                            r = (null != (a = F.scrollPosition.goal) ? a : 0) - n;
                                        return i(e, u * t + r + n);
                                    },
                                    [F.scrollPosition],
                                ),
                                f = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const a = m.current;
                                        a &&
                                            D.start({
                                                scrollPosition: i(a, e),
                                                immediate: u,
                                                reset: t,
                                                config: d.animationConfig,
                                                from: { scrollPosition: i(a, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, d.animationConfig, F.scrollPosition],
                                ),
                                B = (0, r.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = _.current;
                                        if (!u || !t) return;
                                        const a = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, d.step),
                                            r = p(u, e, a);
                                        f(r);
                                    },
                                    [f, p, d.step],
                                ),
                                b = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && B(a(e)),
                                            m.current && E.trigger('mouseWheel', e, F.scrollPosition, u(m.current));
                                    },
                                    [F.scrollPosition, B, E],
                                ),
                                h = ((e, u = []) => {
                                    const t = (0, r.useRef)(),
                                        a = (0, r.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        Iu(() => {
                                            const e = m.current;
                                            e &&
                                                (f(i(e, F.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [f, F.scrollPosition.goal],
                                ),
                                C = La(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = i(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && f(u, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            return (
                                (0, r.useEffect)(
                                    () => (
                                        window.addEventListener('resize', h),
                                        () => {
                                            window.removeEventListener('resize', h);
                                        }
                                    ),
                                    [h],
                                ),
                                (0, r.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (_.current ? n(_.current) : void 0),
                                        getContainerSize: () => (m.current ? e(m.current) : void 0),
                                        getBounds: () =>
                                            m.current
                                                ? u(m.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: d.step.clampedArrowStepTimeout,
                                        clampPosition: i,
                                        handleMouseWheel: b,
                                        applyScroll: f,
                                        applyStepTo: B,
                                        contentRef: m,
                                        wrapperRef: _,
                                        scrollPosition: D,
                                        animationScroll: F,
                                        recalculateContent: C,
                                        events: { on: E.on, off: E.off },
                                    }),
                                    [F.scrollPosition, f, B, E.off, E.on, C, b, D, d.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    en = Ja({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Za.Next : Za.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    un = 'HorizontalBar_base__nonActive_82',
                    tn = 'disable',
                    an = { pending: !1, offset: 0 },
                    nn = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    rn = () => {},
                    sn = (e, u) => Math.max(20, e.offsetWidth * u),
                    on = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = nn, onDrag: a = rn }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, r.useState)(an),
                            E = _[0],
                            g = _[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            F = () => {
                                const u = c.current,
                                    t = d.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    o = Pt(0, 1, r / (n - a)),
                                    m = (u.offsetWidth - sn(u, s)) * o;
                                (t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return i.current.classList.add(tn), void l.current.classList.remove(tn);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(tn), void l.current.classList.add(tn);
                                            var u, t;
                                            i.current.classList.remove(tn), l.current.classList.remove(tn);
                                        }
                                    })(m);
                            },
                            D = La(() => {
                                (() => {
                                    const u = d.current,
                                        t = c.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && a && t)) return;
                                    const s = Math.min(1, a / r);
                                    (u.style.width = `${sn(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(un) : n.current.classList.remove(un));
                                })(),
                                    F();
                            });
                        (0, r.useEffect)(() => Iu(D)),
                            (0, r.useEffect)(
                                () =>
                                    Iu(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = rn;
                                        const a = () => {
                                            t(), (t = Iu(D));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const i = c.current,
                                            o = d.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - E.offset - i.getBoundingClientRect().x,
                                            m = (l / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: m });
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        u(), A(an);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, E.offset, E.pending, a, A]);
                        const p = Xa((u) => e.applyStepTo(u), m, [e]),
                            f = p[0],
                            b = p[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const h = (e) => {
                            e.target.classList.contains(tn) || U('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(tn) || 0 !== e.button || (U('play'), f(Za.Next));
                                },
                                onMouseUp: b,
                                ref: i,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const a = d.current;
                                        a &&
                                            0 === u.button &&
                                            (U('play'),
                                            u.target === a
                                                ? A({ pending: !0, offset: u.screenX - a.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const a = d.current,
                                                          n = e.contentRef.current;
                                                      if (!a || !n) return;
                                                      const r = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                  })(u.screenX > a.getBoundingClientRect().x ? Za.Prev : Za.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: d, className: B()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: B()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: B()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(tn) || 0 !== e.button || (U('play'), f(Za.Prev));
                                },
                                onMouseUp: b,
                                ref: l,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    ln = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    cn = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: B()(ln.base, e.base) });
                            }, [a]),
                            m = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: B()(ln.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(ln.defaultScrollArea, n) },
                                s().createElement(dn, { className: o, api: m, classNames: i }, e),
                            ),
                            s().createElement(on, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    dn = ({ api: e, className: u, classNames: t, children: a }) => (
                        (0, r.useEffect)(() => Iu(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(ln.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: B()(ln.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: B()(ln.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (dn.Bar = on), (dn.Default = cn);
                const mn = Ja({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Za.Next : Za.Prev),
                    }),
                    _n = 'VerticalBar_base__nonActive_42',
                    En = 'disable',
                    gn = () => {},
                    An = { pending: !1, offset: 0 },
                    Fn = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Dn = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    pn = (e, u) => Math.max(20, e.offsetHeight * u),
                    fn = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Fn, onDrag: a = gn }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, r.useState)(An),
                            E = _[0],
                            g = _[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            F = La(() => {
                                const u = d.current,
                                    t = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && u && t)) return;
                                const s = Math.min(1, a / r);
                                return (
                                    (u.style.height = `${pn(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(_n) : n.current.classList.remove(_n)),
                                    s
                                );
                            }),
                            D = La(() => {
                                const u = c.current,
                                    t = d.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    o = Pt(0, 1, r / (n - a)),
                                    m = (u.offsetHeight - pn(u, s)) * o;
                                (t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(En), void l.current.classList.remove(En);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(En), void l.current.classList.add(En);
                                            var u, t;
                                            i.current.classList.remove(En), l.current.classList.remove(En);
                                        }
                                    })(m);
                            }),
                            p = La(() => {
                                Dn(e, () => {
                                    F(), D();
                                });
                            });
                        (0, r.useEffect)(() => Iu(p)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    Dn(e, () => {
                                        D();
                                    });
                                };
                                let t = gn;
                                const a = () => {
                                    t(), (t = Iu(p));
                                };
                                return (
                                    e.events.on('recalculateContent', p),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', p),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        A(An);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        Dn(e, (t) => {
                                            const n = c.current,
                                                r = d.current,
                                                s = e.getContainerSize();
                                            if (!n || !r || !s) return;
                                            const i = u.screenY - E.offset - n.getBoundingClientRect().y,
                                                o = (i / n.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, E.offset, E.pending, a, A]);
                        const f = Xa((u) => e.applyStepTo(u), m, [e]),
                            b = f[0],
                            h = f[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const C = (e) => {
                            e.target.classList.contains(En) || U('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(En) || 0 !== e.button || (U('play'), b(Za.Next));
                                },
                                ref: i,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const a = d.current;
                                        var n;
                                        a &&
                                            0 === u.button &&
                                            (U('play'),
                                            u.target === a
                                                ? A({ pending: !0, offset: u.screenY - a.getBoundingClientRect().y })
                                                : ((n = u.screenY > a.getBoundingClientRect().y ? Za.Prev : Za.Next),
                                                  d.current &&
                                                      Dn(e, (u) => {
                                                          if (!u) return;
                                                          const a = t(e),
                                                              r = e.clampPosition(u, u.scrollTop + a * n);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: d, className: B()('VerticalBar_thumb_32', u.thumb) }),
                                s().createElement('div', { className: B()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: B()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(En) || 0 !== e.button || (U('play'), b(Za.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Bn = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    bn = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: B()(Bn.base, e.base) });
                            }, [a]),
                            m = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: B()(Bn.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Bn.area, n) },
                                s().createElement(hn, { className: i, classNames: o, api: m }, e),
                            ),
                            s().createElement(fn, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    hn = ({ className: e, classNames: u, children: t, api: a }) => (
                        (0, r.useEffect)(() => Iu(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(Bn.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Bn.content, null == u ? void 0 : u.content), ref: a.contentRef },
                                t,
                            ),
                        )
                    );
                hn.Default = bn;
                const Cn = { Vertical: n, Horizontal: a },
                    vn = {
                        row: 'StatisticsInfoRow_row_6e',
                        row__subgroup: 'StatisticsInfoRow_row__subgroup_7c',
                        separator: 'StatisticsInfoRow_separator_1b',
                        description: 'StatisticsInfoRow_description_5e',
                        icon: 'StatisticsInfoRow_icon_98',
                    };
                let wn, Sn;
                !(function (e) {
                    (e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time');
                })(wn || (wn = {})),
                    (function (e) {
                        (e.Shots = 'shots'),
                            (e.Hits = 'hits'),
                            (e.ExplosionHits = 'explosionHits'),
                            (e.DamageDealt = 'damageDealt'),
                            (e.SniperDamageDealt = 'sniperDamageDealt'),
                            (e.DirectHitsReceived = 'directHitsReceived'),
                            (e.PiercingsReceived = 'piercingsReceived'),
                            (e.NoDamageDirectHitsReceived = 'noDamageDirectHitsReceived'),
                            (e.ExplosionHitsReceived = 'explosionHitsReceived'),
                            (e.DamageBlockedByArmor = 'damageBlockedByArmor'),
                            (e.TeamHitsDamage = 'teamHitsDamage'),
                            (e.Spotted = 'spotted'),
                            (e.DamagedKilled = 'damagedKilled'),
                            (e.DamageAssisted = 'damageAssisted'),
                            (e.DamageAssistedSelf = 'damageAssistedSelf'),
                            (e.StunDuration = 'stunDuration'),
                            (e.DamageAssistedStun = 'damageAssistedStun'),
                            (e.DamageAssistedStunSelf = 'damageAssistedStunSelf'),
                            (e.StunNum = 'stunNum'),
                            (e.CapturePointsVal = 'capturePointsVal'),
                            (e.Mileage = 'mileage');
                    })(Sn || (Sn = {}));
                const Tn = ({ label: e, value: u, paramValueType: t, isSubgroup: a = !1 }) => {
                        const n = Se(u, (e) =>
                                ((e, u) => {
                                    switch (e) {
                                        case wn.Integer:
                                            return V.Z5.getNumberFormat(u, V.B3.INTEGRAL);
                                        case wn.Float:
                                            return V.Z5.getRealFormat(u, V.Gr.FRACTIONAL);
                                        case wn.Time:
                                            return V.Z5.getTimeFormat(u, V.lf.SHORT_FORMAT);
                                        default:
                                            return u;
                                    }
                                })(t, e),
                            ).join(' / '),
                            r = B()(vn.row, a && vn.row__subgroup);
                        return s().createElement(
                            'div',
                            { className: r },
                            e,
                            s().createElement('span', { className: vn.separator }),
                            s().createElement('span', { className: vn.value }, n),
                        );
                    },
                    yn = { group__last: 'StatisticsInfoGroup_group__last_7a' };
                function Nn() {
                    return (
                        (Nn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Nn.apply(null, arguments)
                    );
                }
                const Rn = ({ item: e }) =>
                        s().createElement(
                            'div',
                            { className: yn.group },
                            s().createElement(Tn, Nn({ isSubgroup: !1 }, e)),
                            e.details.length > 0 &&
                                Se(e.details, (e, u) => s().createElement(Tn, Nn({ key: u, isSubgroup: !0 }, e))),
                        ),
                    Pn = (0, K.Pi)(() => {
                        const e = au().model.computes.selectedPlayer();
                        return s().createElement(
                            'div',
                            { className: 'StatisticsInfoRows_base_cc' },
                            Se(e.detailedStatistics, (e, u) => s().createElement(Rn, { key: u, item: e })),
                        );
                    }),
                    xn = (0, K.Pi)(() => {
                        const e = au().model,
                            u = mn(),
                            t = e.computes.hasDetailedInfoScroll();
                        return s().createElement(
                            'div',
                            { className: 'StatisticsInfo_base_d9' },
                            t
                                ? s().createElement(
                                      Cn.Vertical.Area.Default,
                                      { className: 'StatisticsInfo_content_e4', api: u },
                                      s().createElement(Pn, null),
                                  )
                                : s().createElement(Pn, null),
                        );
                    }),
                    In = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    On = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    kn = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                let Mn;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'), (e[(e.RIGHT = 1)] = 'RIGHT');
                })(Mn || (Mn = {}));
                const Ln = (e, u) => {
                        const t = e.replace(':', '_').replace(/-/g, '_');
                        return {
                            maskImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.team_table.types.$dyn(t)})`,
                            backgroundColor: u,
                        };
                    },
                    Un = (0, r.memo)(
                        ({
                            vehicleLevel: e,
                            vehicleType: u,
                            vehicleShortName: t,
                            userNames: a,
                            isPersonal: n = !1,
                            isSameSquad: r = !1,
                            isIGR: i = !1,
                            alignment: o = Mn.RIGHT,
                        }) => {
                            const l = a.isTeamKiller,
                                c = a.isKilled,
                                d = Ku({ isTeamKiller: l, isKilled: c, isPersonal: n, isSameSquad: r }),
                                m =
                                    ((_ = e),
                                    kn
                                        ? `${_}`
                                        : (function (e) {
                                              let u = '';
                                              for (let t = On.length - 1; t >= 0; t--)
                                                  for (; e >= On[t]; ) (u += In[t]), (e -= On[t]);
                                              return u;
                                          })(_));
                            var _;
                            return s().createElement(
                                'div',
                                { className: 'PlayerVehicleInfo_base_f3', style: { color: d } },
                                s().createElement(
                                    'div',
                                    {
                                        className: B()(
                                            'PlayerVehicleInfo_level_01',
                                            o === Mn.LEFT && 'PlayerVehicleInfo_level__left_b9',
                                        ),
                                    },
                                    m,
                                ),
                                s().createElement('div', { className: 'PlayerVehicleInfo_type_59', style: Ln(u, d) }),
                                s().createElement('div', { className: 'PlayerVehicleInfo_vehicleName_c1' }, t),
                                i && s().createElement('div', { className: 'PlayerVehicleInfo_igr_11' }),
                            );
                        },
                    );
                function Hn() {
                    return (
                        (Hn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Hn.apply(null, arguments)
                    );
                }
                const Gn = R.images.gui.maps.icons.vehicle.c_420x307,
                    $n = (0, K.Pi)(() => {
                        const e = au(),
                            u = e.model,
                            t = e.controls,
                            a = u.computes.personalSquadIndex(),
                            n = u.computes.selectedPlayer(),
                            r = n.userNames,
                            i = n.squadIndex,
                            l = n.isPersonal,
                            c = n.vehicle,
                            d = r.isKilled,
                            m = c.tier,
                            _ = c.type,
                            E = c.name,
                            g = c.techName,
                            A = a === i && a > 0,
                            F = c.tags.indexOf('premiumIGR') > -1,
                            D = () => {
                                o.O.sound.play.sound('play'), t.updateTeamTableSelectedPlayer(Qe, -1);
                            };
                        return (
                            X(q.n.ESCAPE, D),
                            s().createElement(
                                'div',
                                { className: 'DetailedStats_base_2d' },
                                s().createElement(
                                    'div',
                                    { className: 'DetailedStats_header_5e' },
                                    s().createElement('div', {
                                        className: 'DetailedStats_vehicleIcon_ef',
                                        style: (() => {
                                            const e = Gn.$dyn(g.toLowerCase());
                                            return e
                                                ? { backgroundImage: `url(${e})` }
                                                : { backgroundImage: `url(${Gn.default_image()})` };
                                        })(),
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: 'DetailedStats_vehicleInfo_f5' },
                                        s().createElement(
                                            'div',
                                            { className: 'DetailedStats_playerName_3c' },
                                            s().createElement(
                                                Qu,
                                                Hn({}, n.userNames, {
                                                    isTeamKiller: !1,
                                                    isAnonymizerShown: !0,
                                                    isKilled: d,
                                                    isSameSquad: A,
                                                }),
                                            ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: 'DetailedStats_playerSummary_a1' },
                                            s().createElement(Un, {
                                                vehicleLevel: m,
                                                vehicleType: _,
                                                vehicleShortName: E,
                                                userNames: r,
                                                alignment: Mn.LEFT,
                                                isIGR: F,
                                                isPersonal: l,
                                            }),
                                            s().createElement(ja, { player: n }),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: 'DetailedStats_close_53', onClick: D },
                                        s().createElement(
                                            'div',
                                            { className: 'DetailedStats_closeText_f1' },
                                            R.strings.fun_battle_results.closeBtn(),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'DetailedStats_stats_97' },
                                    s().createElement(xn, null),
                                ),
                            )
                        );
                    }),
                    Wn = {
                        base: 'TeamTable_base_65',
                        hidden: 'TeamTable_hidden_1e',
                        head: 'TeamTable_head_11',
                        body: 'TeamTable_body_ac',
                        bodyWrapper: 'TeamTable_bodyWrapper_33',
                        bodyWrapper__shortened: 'TeamTable_bodyWrapper__shortened_9d',
                        content: 'TeamTable_content_41',
                        headRow: 'TeamTable_headRow_a4',
                        bodyRow: 'TeamTable_bodyRow_29',
                        bodyRow__isFirst: 'TeamTable_bodyRow__isFirst_cd',
                        bodyRow__isActive: 'TeamTable_bodyRow__isActive_9d',
                        bodyRow__isKilled: 'TeamTable_bodyRow__isKilled_ed',
                        cell: 'TeamTable_cell_65',
                        headCell: 'TeamTable_headCell_b7',
                        cell__icon3: 'TeamTable_cell__icon3_55',
                        headCell__icon3: 'TeamTable_headCell__icon3_3c',
                        cell__icon2: 'TeamTable_cell__icon2_38',
                        headCell__icon2: 'TeamTable_headCell__icon2_6b',
                        cell__icon1: 'TeamTable_cell__icon1_88',
                        headCell__icon1: 'TeamTable_headCell__icon1_4e',
                        cell__squad: 'TeamTable_cell__squad_6e',
                        headCell__squad: 'TeamTable_headCell__squad_a5',
                        cell__kills: 'TeamTable_cell__kills_0d',
                        cell__xp: 'TeamTable_cell__xp_f2',
                        cell__name: 'TeamTable_cell__name_59',
                        cell__vehicle: 'TeamTable_cell__vehicle_09',
                        headCell__sortDisabled: 'TeamTable_headCell__sortDisabled_bb',
                        headCell__name: 'TeamTable_headCell__name_63',
                        playerName: 'TeamTable_playerName_14',
                        headCell__vehicle: 'TeamTable_headCell__vehicle_fc',
                        name: 'TeamTable_name_8b',
                        headHover: 'TeamTable_headHover_58',
                        headCell__active: 'TeamTable_headCell__active_62',
                        headIcon: 'TeamTable_headIcon_37',
                        headIcon__damage: 'TeamTable_headIcon__damage_c7',
                        headIcon__frag: 'TeamTable_headIcon__frag_54',
                        headIcon__xp: 'TeamTable_headIcon__xp_a6',
                        headIcon__tank: 'TeamTable_headIcon__tank_6b',
                        headIcon__squad: 'TeamTable_headIcon__squad_2c',
                        headDivider: 'TeamTable_headDivider_43',
                        glow: 'TeamTable_glow_19',
                        activeArrow: 'TeamTable_activeArrow_f6',
                        activeArrow__last: 'TeamTable_activeArrow__last_e4',
                    };
                let zn;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(zn || (zn = {}));
                const qn = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: n,
                        isEnabled: s = !0,
                        onMouseDown: i,
                    }) => {
                        const o = (0, r.useCallback)(() => {
                                (0, V.c9)(V.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: n,
                                }),
                                    H.playYes();
                            }, [n, u, t, a]),
                            l = (0, r.useCallback)(() => {
                                (0, V.c9)(V.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === zn.RIGHT)(e) && o();
                                },
                                [i, o],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Vn = ['children'];
                function jn() {
                    return (
                        (jn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        jn.apply(null, arguments)
                    );
                }
                const Xn = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Vn);
                        return s().createElement(
                            qn,
                            jn({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    Yn = ({ squadIndex: e, currentSquadIndex: u }) =>
                        s().createElement(
                            'div',
                            {
                                className: B()(
                                    'TableRendererSquad_base_96',
                                    u === e && 'TableRendererSquad_base__highlighted_a0',
                                ),
                            },
                            e,
                        ),
                    Kn = R.images.gui.maps.icons.vehicle,
                    Zn = (e, u) => {
                        const t = Kn.$dyn(((e, u) => `${e}_${u}`.replace('-', '_'))(u, e));
                        return t ? { backgroundImage: `url(${t})` } : { backgroundImage: `url(${Kn.noImage()})` };
                    },
                    Qn = ({ vehicle: e, userNames: u, isPersonal: t = !1, isSameSquad: a = !1 }) => {
                        const n = u.isKilled,
                            r = e.techName,
                            i = e.name,
                            o = e.tier,
                            l = e.type,
                            c = e.nation,
                            d = e.tags.indexOf('premiumIGR') > -1;
                        return s().createElement(
                            'div',
                            { className: 'TableRendererVehicleInfo_base_1c' },
                            s().createElement('div', {
                                className: B()(
                                    'TableRendererVehicleInfo_vehicleImage_d3',
                                    n && 'TableRendererVehicleInfo_vehicleImage__isKilled_9d',
                                ),
                                style: Zn(r, c),
                            }),
                            s().createElement(Un, {
                                vehicleLevel: o,
                                vehicleType: l,
                                vehicleShortName: i,
                                userNames: u,
                                isPersonal: t,
                                isSameSquad: a,
                                isIGR: d,
                            }),
                        );
                    },
                    Jn = {
                        base: 'ActiveGlow_base_82',
                        base__active: 'ActiveGlow_base__active_ad',
                        activeGlow: 'ActiveGlow_activeGlow_a7',
                        activeGlow__left: 'ActiveGlow_activeGlow__left_34',
                        activeGlow__right: 'ActiveGlow_activeGlow__right_38',
                    },
                    er = 'left',
                    ur = ({ position: e = er, isActive: u = !1 }) =>
                        s().createElement(
                            'div',
                            { className: B()(Jn.base, u && Jn.base__active) },
                            s().createElement('div', { className: B()(Jn.activeGlow, Jn[`activeGlow__${e}`]) }),
                        );
                function tr() {
                    return (
                        (tr = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        tr.apply(null, arguments)
                    );
                }
                const ar = (0, K.Pi)(({ player: e, selected: u, alias: t, first: a = !1 }) => {
                        const n = au(),
                            r = n.model,
                            i = n.controls,
                            l = r.detailsColumns.get(),
                            c = r.selectedPlayerId.get(),
                            d = r.computes.personalSquadIndex(),
                            m = e.userNames,
                            _ = e.squadIndex,
                            E = e.playerIndex,
                            g = e.isPersonal,
                            A = e.databaseID,
                            F = e.vehicle.vehicleCD,
                            D = m.isKilled,
                            p = m.isTeamKiller,
                            f = d === _ && d > 0,
                            b = B()(
                                Wn.bodyRow,
                                u && Wn.bodyRow__isActive,
                                a && Wn.bodyRow__isFirst,
                                D && Wn.bodyRow__isKilled,
                            ),
                            h = Ku({ isTeamKiller: p, isKilled: D, isPersonal: g, isSameSquad: f }),
                            C = B()(Wn.cell, Wn[`cell__icon${0 === l.length ? 3 : l.length}`]),
                            v = Ne(l, (e) => e === pe.Xp),
                            w = Ne(l, (e) => e === pe.Damage),
                            S = Ne(l, (e) => e === pe.Frag);
                        return s().createElement(
                            Xn,
                            { args: { databaseID: A, vehicleCD: F } },
                            s().createElement(
                                'div',
                                {
                                    className: b,
                                    style: { color: h },
                                    onClick: () => {
                                        o.O.sound.play.sound('yes1');
                                        const e = c === E;
                                        i.updateTeamTableSelectedPlayer(e ? Qe : t, e ? -1 : E);
                                    },
                                    onMouseEnter: () => o.O.sound.play.sound('highlight'),
                                },
                                s().createElement(
                                    'div',
                                    { className: B()(Wn.cell, Wn.cell__squad) },
                                    e.squadIndex > 0 &&
                                        s().createElement(Yn, { squadIndex: e.squadIndex, currentSquadIndex: d }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: B()(Wn.cell, Wn.cell__name) },
                                    s().createElement(
                                        'div',
                                        { className: B()(Wn.name, Wn.name) },
                                        s().createElement(
                                            Qu,
                                            tr({}, m, { isAnonymizerShown: g, isPersonal: g, isSameSquad: f }),
                                        ),
                                    ),
                                ),
                                void 0 !== w &&
                                    s().createElement(
                                        'div',
                                        { className: C },
                                        s().createElement(
                                            'div',
                                            { className: Wn.value },
                                            e.efficiencyValues.damageDealt,
                                        ),
                                    ),
                                void 0 !== S &&
                                    s().createElement(
                                        'div',
                                        { className: B()(C, Wn.cell__kills) },
                                        s().createElement('div', { className: Wn.value }, e.efficiencyValues.kills),
                                    ),
                                void 0 !== v &&
                                    s().createElement(
                                        'div',
                                        { className: B()(C, Wn.cell__xp) },
                                        s().createElement('div', { className: Wn.value }, e.efficiencyValues.earnedXp),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: B()(Wn.cell, Wn.cell__vehicle) },
                                    s().createElement(Qn, tr({}, e, { isSameSquad: f })),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Wn.glow },
                                    s().createElement(ur, { position: t === Ze ? 'right' : er, isActive: u }),
                                ),
                            ),
                        );
                    }),
                    nr = (0, K.Pi)(({ alias: e, shortened: u = !1 }) => {
                        const t = au().model,
                            a = t.selectedPlayerId.get(),
                            n = t.selectedTeam.get() === e,
                            r = e === Ze ? t.computes.alliesSorted() : t.computes.enemiesSorted();
                        return s().createElement(
                            'div',
                            { className: Wn.body },
                            s().createElement(
                                'div',
                                { className: B()(Wn.bodyWrapper, u && Wn.bodyWrapper__shortened) },
                                Se(r, (u, t) =>
                                    s().createElement(ar, {
                                        key: t,
                                        player: u,
                                        selected: n && a === u.playerIndex,
                                        alias: e,
                                        isFirst: 0 === t,
                                    }),
                                ),
                            ),
                        );
                    }),
                    rr = (0, K.Pi)(({ alias: e }) => {
                        const u = au().model,
                            t = (e === Ze ? u.allies.get().length : u.enemies.get().length) > 15,
                            a = mn();
                        return s().createElement(
                            'div',
                            { className: Wn.body },
                            t
                                ? s().createElement(
                                      Cn.Vertical.Area.Default,
                                      { className: Wn.content, api: a },
                                      s().createElement(nr, { alias: e }),
                                  )
                                : s().createElement(nr, { alias: e, shortened: !0 }),
                        );
                    }),
                    sr = {
                        base: 'ActiveArrow_base_5b',
                        line: 'ActiveArrow_line_22',
                        arrow: 'ActiveArrow_arrow_80',
                        arrow__top: 'ActiveArrow_arrow__top_54',
                    },
                    ir = (0, r.memo)(({ direction: e }) =>
                        s().createElement(
                            'div',
                            { className: sr.base },
                            s().createElement('div', { className: sr.line }),
                            s().createElement('div', { className: B()(sr.arrow, sr[`arrow__${e}`]) }),
                            s().createElement('div', { className: sr.line }),
                        ),
                    ),
                    or = ({
                        style: e,
                        children: u,
                        onSort: t,
                        sortType: a,
                        tooltip: n,
                        reversed: r = !1,
                        active: i = !1,
                        last: l = !1,
                        sortDisabled: c = !1,
                    }) =>
                        s().createElement(
                            xu,
                            n,
                            s().createElement(
                                'div',
                                {
                                    className: B()(
                                        Wn.headCell,
                                        e,
                                        i && Wn.headCell__active,
                                        r && Wn.headCell__reverse,
                                        c && Wn.headCell__sortDisabled,
                                    ),
                                    onClick: () => {
                                        c || (o.O.sound.play.sound('play'), t(a));
                                    },
                                    onMouseEnter: () => o.O.sound.play.sound('highlight'),
                                },
                                u,
                                i &&
                                    s().createElement(
                                        'div',
                                        { className: B()(Wn.activeArrow, l && Wn.activeArrow__last) },
                                        s().createElement(ir, { direction: r ? 'top' : 'bottom' }),
                                    ),
                            ),
                        ),
                    lr = R.strings.battle_results.team,
                    cr = (e) => {
                        const u = lr.$dyn(Pe[e]);
                        return {
                            header: null == u ? void 0 : u.$dyn('header'),
                            body: null == u ? void 0 : u.$dyn('body'),
                        };
                    },
                    dr = (0, K.Pi)(({ isAllies: e = !0, onSort: u }) => {
                        const t = au().model,
                            a = t.detailsColumns.get(),
                            n = t.sortDirection.get(),
                            r = t.computes.activeSortingType(),
                            i = t.computes.hasSquads(),
                            o = n === fe.Asc;
                        return s().createElement(
                            'div',
                            { className: Wn.head },
                            s().createElement(
                                'div',
                                { className: Wn.headRow },
                                Object.values(pe).map((t, n, l) => {
                                    const c = xe.findIndex((e) => e === t),
                                        d = Ne(a, (e) => e === t);
                                    if (-1 === c && (-1 === d || void 0 === d)) return;
                                    const m = t === pe.Player,
                                        _ = m
                                            ? Wn.headCell__name
                                            : ((e, u) => {
                                                  switch (e) {
                                                      case pe.Vehicle:
                                                          return Wn.headCell__vehicle;
                                                      case pe.Squad:
                                                          return Wn.headCell__squad;
                                                      default:
                                                          return Wn[`headCell__icon${u}`];
                                                  }
                                              })(t, 0 === a.length ? 3 : a.length);
                                    return s().createElement(
                                        or,
                                        {
                                            key: t,
                                            style: _,
                                            active: r === t,
                                            reversed: o,
                                            last: n === l.length - 1,
                                            sortType: t,
                                            onSort: u,
                                            tooltip: cr(t),
                                            sortDisabled: t === pe.Squad && !i,
                                        },
                                        m
                                            ? s().createElement(
                                                  'span',
                                                  { className: Wn.playerName },
                                                  lr.stats.$dyn(e ? 'ownTeam' : 'enemyTeam'),
                                              )
                                            : s().createElement('div', {
                                                  className: B()(Wn.headIcon, Wn[`headIcon__${t}`]),
                                              }),
                                        s().createElement('div', { className: Wn.headHover }),
                                        n < l.length - 1 && s().createElement('div', { className: Wn.headDivider }),
                                    );
                                }),
                            ),
                        );
                    }),
                    mr = (0, K.Pi)(({ onSort: e, alias: u = Ze }) => {
                        const t = au().model.selectedTeam.get(),
                            a = t !== Qe && u !== t;
                        return s().createElement(
                            'div',
                            { className: a ? Wn.hidden : '' },
                            s().createElement(
                                'div',
                                { className: Wn.base },
                                s().createElement(dr, { isAllies: u === Ze, onSort: e }),
                                s().createElement(rr, { alias: u }),
                            ),
                        );
                    }),
                    _r = (0, K.Pi)(() => {
                        const e = au(),
                            u = e.model,
                            t = e.controls,
                            a = u.sortDirection.get(),
                            n = u.computes.activeSortingType(),
                            i = u.selectedTeam.get(),
                            o = i !== Qe,
                            l = i === Ze && u.allies.get().length <= 15,
                            c = (0, r.useCallback)(
                                (e) => {
                                    if (e === n) {
                                        const e = a === fe.Desc ? fe.Asc : fe.Desc;
                                        t.saveStatsSorting(n, e), t.updateTeamTableSorting(n, e);
                                    } else t.saveStatsSorting(e, fe.Desc), t.updateTeamTableSorting(e, fe.Desc);
                                },
                                [a, n, t],
                            );
                        return s().createElement(
                            'div',
                            { className: 'TeamTab_base_d1' },
                            s().createElement(
                                'div',
                                { className: 'TeamTab_teams_3c' },
                                s().createElement(mr, { alias: Ze, onSort: c }),
                                o &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: B()(
                                                'TeamTab_detailsWrapper_83',
                                                l && 'TeamTab_detailsWrapper__extra_4a',
                                            ),
                                        },
                                        s().createElement($n, null),
                                    ),
                                s().createElement(mr, { alias: 'enemies', onSort: c }),
                            ),
                        );
                    }),
                    Er = (0, K.Pi)(() => {
                        const e = au(),
                            u = e.model,
                            t = e.controls,
                            a = t.closeWindow,
                            n = u.battleInfo.get(),
                            r = n.assetsPointer,
                            i = n.winStatus,
                            l = u.currentTabId.get();
                        return (
                            Y(a),
                            s().createElement(
                                'div',
                                { className: nu.base },
                                s().createElement('div', {
                                    className: B()(nu.background, l === eu && nu.background__team),
                                    style: { backgroundImage: `url('${ee(r).library.battle_results_bg()}')` },
                                }),
                                s().createElement('div', {
                                    className: B()(nu.bgDarken, l !== eu && nu.bgDarken__personal),
                                }),
                                l === eu && s().createElement('div', { className: B()(nu.bgGlow, nu[`bgGlow__${i}`]) }),
                                s().createElement(
                                    'div',
                                    { className: nu.closeButton },
                                    s().createElement(z, {
                                        caption: R.strings.fun_battle_results.closeBtn(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: a,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: nu.wrapper },
                                    s().createElement(
                                        'div',
                                        { className: nu.content },
                                        s().createElement(
                                            za,
                                            {
                                                active: l,
                                                onActiveChange: (e) => {
                                                    o.O.sound.play.sound('yes1'),
                                                        t.updateCurrentTabId(e),
                                                        t.changeTab(Number(e));
                                                },
                                            },
                                            s().createElement(
                                                'div',
                                                { className: nu.navigation },
                                                s().createElement(
                                                    za.Switcher,
                                                    null,
                                                    s().createElement(
                                                        za.Switch,
                                                        { tabId: Je },
                                                        s().createElement(
                                                            'div',
                                                            { className: nu.navigationItem },
                                                            R.strings.fun_battle_results.navigation.battleResults(),
                                                        ),
                                                    ),
                                                    s().createElement('div', { className: nu.navigationSeparator }),
                                                    s().createElement(
                                                        za.Switch,
                                                        { tabId: eu },
                                                        s().createElement(
                                                            'div',
                                                            { className: nu.navigationItem },
                                                            R.strings.fun_battle_results.navigation.teamEfficiency(),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            s().createElement(za.Content, null, (e) => {
                                                switch (e) {
                                                    case Je:
                                                        return s().createElement(ka, null);
                                                    case eu:
                                                        return s().createElement(_r, null);
                                                    default:
                                                        return console.error('Unreachable branch in tabs'), null;
                                                }
                                            }),
                                        ),
                                    ),
                                    s().createElement('div', { className: nu.footer }, s().createElement(at, null)),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    L().render(
                        s().createElement(tu, null, s().createElement(k, null, s().createElement(Er, null))),
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], r = !0, s = 0; s < u.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, a];
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
        (__webpack_require__.j = 388),
        (() => {
            var e = { 388: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        (n = r[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(1061));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
