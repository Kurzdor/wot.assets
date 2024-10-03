(() => {
    var __webpack_modules__ = {
            926: (u) => {
                u.exports = {
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
            645: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => a,
                        getMouseGlobalPosition: () => B,
                        getSize: () => c,
                        graphicsQuality: () => d,
                        playSound: () => F,
                        setRTPC: () => D,
                    });
                var a = {};
                t.r(a),
                    t.d(a, { mouse: () => A, off: () => o, on: () => E, onResize: () => i, onScaleUpdated: () => s });
                var n = t(472);
                function r(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                const i = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    o = (u, e) => engine.off(u, e),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const A = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && r(!1);
                    }
                    function t() {
                        u.enabled && r(!0);
                    }
                    function a() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : r(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${e}`,
                                        i = l[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        a(),
                                        () => {
                                            n &&
                                                (i(),
                                                window.removeEventListener(r, s),
                                                (u.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (u.enabled = !1), a();
                        },
                        enable() {
                            (u.enabled = !0), a();
                        },
                        enableOutside() {
                            u.enabled && r(!0);
                        },
                        disableOutside() {
                            u.enabled && r(!1);
                        },
                    });
                })();
                function F(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function D(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function c(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function B(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const d = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            472: (u, e, t) => {
                'use strict';
                function a(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => a });
            },
            153: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => N });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => E, getTextureUrl: () => s });
                var n = {};
                t.r(n),
                    t.d(n, {
                        addModelObserver: () => p,
                        addPreloadTexture: () => C,
                        children: () => a,
                        displayStatus: () => o,
                        displayStatusIs: () => I,
                        events: () => A,
                        extraSize: () => W,
                        forceTriggerMouseMove: () => M,
                        freezeTextureBeforeResize: () => x,
                        getBrowserTexturePath: () => h,
                        getDisplayStatus: () => R,
                        getScale: () => S,
                        getSize: () => f,
                        getViewGlobalPosition: () => w,
                        isEventHandled: () => O,
                        isFocused: () => P,
                        pxToRem: () => y,
                        remToPx: () => T,
                        resize: () => v,
                        sendEvent: () => m,
                        setAnimateWindow: () => L,
                        setEventHandled: () => k,
                        setInputPaddingsRem: () => g,
                        setSidePaddingsRem: () => b,
                        whenTutorialReady: () => H,
                    });
                var r = t(645),
                    i = t(514);
                function s(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function E(u, e, t) {
                    return `url(${s(u, e, t)})`;
                }
                const o = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
                var l = t(472);
                const A = {
                        onTextureFrozen: (0, l.E)('self.onTextureFrozen'),
                        onTextureReady: (0, l.E)('self.onTextureReady'),
                        onDomBuilt: (0, l.E)('self.onDomBuilt'),
                        onLoaded: (0, l.E)('self.onLoaded'),
                        onDisplayChanged: (0, l.E)('self.onShowingStatusChanged'),
                        onFocusUpdated: (0, l.E)('self.onFocusChanged'),
                        children: {
                            onAdded: (0, l.E)('children.onAdded'),
                            onLoaded: (0, l.E)('children.onLoaded'),
                            onRemoved: (0, l.E)('children.onRemoved'),
                            onAttached: (0, l.E)('children.onAttached'),
                            onTextureReady: (0, l.E)('children.onTextureReady'),
                            onRequestPosition: (0, l.E)('children.requestPosition'),
                        },
                    },
                    F = ['args'];
                const D = 2,
                    c = 16,
                    B = 32,
                    d = 64,
                    _ = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, F);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    m = {
                        close(u) {
                            _('popover' === u ? D : B);
                        },
                        minimize() {
                            _(d);
                        },
                        move(u) {
                            _(c, { isMouseEvent: !0, on: u });
                        },
                    };
                function C(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function g(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function h(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function p(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function b(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function f(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function w(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: T(e.x), y: T(e.y) };
                }
                function x() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function S() {
                    return viewEnv.getScale();
                }
                function y(u) {
                    return viewEnv.pxToRem(u);
                }
                function T(u) {
                    return viewEnv.remToPx(u);
                }
                function L(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function P() {
                    return viewEnv.isFocused();
                }
                function k() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function M() {
                    viewEnv.forceTriggerMouseMove();
                }
                function R() {
                    return viewEnv.getShowingStatus();
                }
                const I = Object.keys(o).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === o[e]), u), {}),
                    W = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    H = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : A.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    N = { view: n, client: r, sound: i.ZP };
            },
            514: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => s, hY: () => i });
                var a = t(645);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((u, e) => ((u[e] = () => (0, a.playSound)(n[e])), u), {}),
                    i = Object.assign({}, r, { sound: a.playSound }),
                    s = { play: i, setRTPC: a.setRTPC };
            },
            521: (u, e, t) => {
                'use strict';
                let a, n;
                t.d(e, { n: () => a }),
                    (function (u) {
                        (u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9');
                    })(a || (a = {})),
                    (function (u) {
                        (u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock');
                    })(n || (n = {}));
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var a = t(153);
                class n {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(u, t, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", u),
                            r
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const a = this._callbacks[t];
                            void 0 !== a && a(u, e);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
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
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(u) {
                        this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data);
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            916: (u, e, t) => {
                'use strict';
                t.d(e, { B3: () => E, Z5: () => i.Z5, ry: () => _ });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let a = u.target;
                                    do {
                                        if (a === e) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            a = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== a)),
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
                var r = t(358);
                var i = t(613);
                let s;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(521),
                    D = t(153);
                const c = ['args'];
                function B(u, e, t, a, n, r, i) {
                    try {
                        var s = u[r](i),
                            E = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(E) : Promise.resolve(E).then(a, n);
                }
                const d = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    _ = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (a, n) {
                                        var r = u.apply(e, t);
                                        function i(u) {
                                            B(r, a, n, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            B(r, a, n, i, s, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    m = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, c);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    C = () => m(s.CLOSE),
                    g = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var h = t(572);
                const p = n.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: o,
                        TimeFormatType: l,
                        DateFormatType: A,
                        makeGlobalBoundingBox: d,
                        sendMoveEvent: (u) => m(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => m(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            m(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const i = D.O.view.getViewGlobalPosition(),
                                E = t.getBoundingClientRect(),
                                o = E.x,
                                l = E.y,
                                A = E.width,
                                F = E.height,
                                c = {
                                    x: D.O.view.pxToRem(o) + i.x,
                                    y: D.O.view.pxToRem(l) + i.y,
                                    width: D.O.view.pxToRem(A),
                                    height: D.O.view.pxToRem(F),
                                };
                            m(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: d(c),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, C);
                        },
                        handleViewEvent: m,
                        onBindingsReady: _,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const a in e)
                                if (Object.prototype.hasOwnProperty.call(e, a)) {
                                    const n = Object.prototype.toString.call(e[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[a];
                                        t[a] = [];
                                        for (let e = 0; e < n.length; e++) t[a].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = u(e[a]))
                                            : (t[a] = e[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            613: (u, e, t) => {
                'use strict';
                t.d(e, { Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    n = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
            },
            286: (u, e, t) => {
                'use strict';
                var a = t(179),
                    n = t.n(a);
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var i = t(153);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var E;
                function o(u, e, t) {
                    const a = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, t),
                        n = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, t),
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
                !(function (u) {
                    (u.extraLarge = 'extraLarge'),
                        (u.large = 'large'),
                        (u.medium = 'medium'),
                        (u.small = 'small'),
                        (u.extraSmall = 'extraSmall'),
                        (u.extraLargeWidth = 'extraLargeWidth'),
                        (u.largeWidth = 'largeWidth'),
                        (u.mediumWidth = 'mediumWidth'),
                        (u.smallWidth = 'smallWidth'),
                        (u.extraSmallWidth = 'extraSmallWidth'),
                        (u.extraLargeHeight = 'extraLargeHeight'),
                        (u.largeHeight = 'largeHeight'),
                        (u.mediumHeight = 'mediumHeight'),
                        (u.smallHeight = 'smallHeight'),
                        (u.extraSmallHeight = 'extraSmallHeight');
                })(E || (E = {}));
                const l = i.O.client.getSize('rem'),
                    A = l.width,
                    F = l.height,
                    D = Object.assign({ width: A, height: F }, o(A, F, s)),
                    c = (0, a.createContext)(D),
                    B = ['children'];
                const d = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(u);
                            for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, B);
                    const n = (0, a.useContext)(c),
                        i = n.extraLarge,
                        s = n.large,
                        E = n.medium,
                        o = n.small,
                        l = n.extraSmall,
                        A = n.extraLargeWidth,
                        F = n.largeWidth,
                        D = n.mediumWidth,
                        d = n.smallWidth,
                        _ = n.extraSmallWidth,
                        m = n.extraLargeHeight,
                        C = n.largeHeight,
                        g = n.mediumHeight,
                        h = n.smallHeight,
                        p = n.extraSmallHeight,
                        b = { extraLarge: m, large: C, medium: g, small: h, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && s) return e;
                        if (t.medium && E) return e;
                        if (t.small && o) return e;
                        if (t.extraSmall && l) return e;
                    } else {
                        if (t.extraLargeWidth && A) return r(e, t, b);
                        if (t.largeWidth && F) return r(e, t, b);
                        if (t.mediumWidth && D) return r(e, t, b);
                        if (t.smallWidth && d) return r(e, t, b);
                        if (t.extraSmallWidth && _) return r(e, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && m) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && h) return e;
                            if (t.extraSmallHeight && p) return e;
                        }
                    }
                    return null;
                };
                d.defaultProps = {
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
                (0, a.memo)(d);
                const _ = (u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    m = ({ children: u }) => {
                        const e = (0, a.useContext)(c),
                            t = (0, a.useState)(e),
                            r = t[0],
                            E = t[1],
                            l = (0, a.useCallback)((u, e) => {
                                const t = i.O.view.pxToRem(u),
                                    a = i.O.view.pxToRem(e);
                                E(Object.assign({ width: t, height: a }, o(t, a, s)));
                            }, []),
                            A = (0, a.useCallback)(() => {
                                const u = i.O.client.getSize('px');
                                l(u.width, u.height);
                            }, [l]);
                        _(() => {
                            i.O.client.events.on('clientResized', l), i.O.client.events.on('self.onScaleUpdated', A);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', l),
                                        i.O.client.events.off('self.onScaleUpdated', A);
                                },
                                [l, A],
                            );
                        const F = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(c.Provider, { value: F }, u);
                    };
                var C = t(483),
                    g = t.n(C),
                    h = t(926),
                    p = t.n(h);
                let b, f, v;
                !(function (u) {
                    (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = s.small.width)] = 'Small'),
                        (u[(u.Medium = s.medium.width)] = 'Medium'),
                        (u[(u.Large = s.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.width)] = 'Small'),
                            (u[(u.Medium = s.medium.width)] = 'Medium'),
                            (u[(u.Large = s.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(f || (f = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.height)] = 'Small'),
                            (u[(u.Medium = s.medium.height)] = 'Medium'),
                            (u[(u.Large = s.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const w = () => {
                        const u = (0, a.useContext)(c),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return b.ExtraLarge;
                                    case u.large:
                                        return b.Large;
                                    case u.medium:
                                        return b.Medium;
                                    case u.small:
                                        return b.Small;
                                    case u.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u),
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case u.largeWidth:
                                        return f.Large;
                                    case u.mediumWidth:
                                        return f.Medium;
                                    case u.smallWidth:
                                        return f.Small;
                                    case u.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case u.largeHeight:
                                        return v.Large;
                                    case u.mediumHeight:
                                        return v.Medium;
                                    case u.smallHeight:
                                        return v.Small;
                                    case u.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const y = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL_WIDTH,
                        [f.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [f.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL_HEIGHT,
                        [v.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [v.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL,
                        [b.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [b.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [b.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    P = (u) => {
                        let e = u.children,
                            t = u.className,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, x);
                        const r = w(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            E = r.mediaSize;
                        return n().createElement('div', S({ className: g()(t, y[i], T[s], L[E]) }, a), e);
                    },
                    k = ['children'];
                const O = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(u);
                            for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, k);
                    return n().createElement(m, null, n().createElement(P, t, e));
                };
                var M = t(493),
                    I = t.n(M);
                var W = t(514),
                    H = t(281);
                let N;
                function z(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function G(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(N || (N = {}));
                const $ = (u) => u.replace(/&nbsp;/g, ' '),
                    j = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    U = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    V = (u, e, t = N.left) => u.split(e).reduce(t === N.left ? j : U, []),
                    K = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    q = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Y = (u, e = N.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (q.includes(t)) return K(u);
                        if ('ja' === t) {
                            return (0, H.D4)()
                                .parse(u)
                                .map((u) => $(u));
                        }
                        return ((u, e = N.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = $(u);
                            return V(n, /( )/, e).forEach((u) => (t = t.concat(V(u, a, N.left)))), t;
                        })(u, e);
                    };
                var X = t(403);
                function Z() {
                    return !1;
                }
                console.log;
                var Q = t(174);
                function J(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return uu(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return uu(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var a = 0;
                        return function () {
                            return a >= u.length ? { done: !0 } : { done: !1, value: u[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function uu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const eu = (u) => (0 === u ? window : window.subViews.get(u));
                const tu = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: s, children: E, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    A = (t, a, n) => {
                                        var r;
                                        const s = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = eu,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? n.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = n.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const s = (u) => {
                                                    const n = t(e),
                                                        r = a.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? r
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const E = 'string' == typeof r ? `${a}.${r}` : a,
                                                            o = i.O.view.addModelObserver(E, e, !0);
                                                        return n.set(o, t), u && t(s(r)), o;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (u, e) => {
                                                        const t = s(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = s(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = J(n.keys()); !(u = t()).done; ) r(u.value, e);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            E =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(u)) : E.readByPath(u),
                                            A = (u) => l.current.push(u),
                                            F = u({
                                                mode: t,
                                                readByPath: o,
                                                externalModel: E,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const a = null != e ? e : o(u),
                                                            n = Q.LO.box(a, { equals: Z });
                                                        return (
                                                            'real' === t &&
                                                                E.subscribe(
                                                                    (0, Q.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const a = null != e ? e : o(u),
                                                            n = Q.LO.box(a, { equals: Z });
                                                        return (
                                                            'real' === t &&
                                                                E.subscribe(
                                                                    (0, Q.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const a = o(e);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (u, e) => ((u[e] = Q.LO.box(a[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    E.subscribe(
                                                                        (0, Q.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                r = Object.entries(n),
                                                                i = r.reduce(
                                                                    (u, [e, t]) => ((u[t] = Q.LO.box(a[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    E.subscribe(
                                                                        (0, Q.aD)((u) => {
                                                                            r.forEach(([e, t]) => {
                                                                                i[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: A,
                                            }),
                                            D = { mode: t, model: F, externalModel: E, cleanup: A };
                                        return {
                                            model: F,
                                            controls: 'mocks' === t && n ? n.controls(D) : e(D),
                                            externalModel: E,
                                            mode: t,
                                        };
                                    },
                                    F = (0, a.useRef)(!1),
                                    D = (0, a.useState)(r),
                                    c = D[0],
                                    B = D[1],
                                    d = (0, a.useState)(() => A(r, s, o)),
                                    _ = d[0],
                                    m = d[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        F.current ? m(A(c, s, o)) : (F.current = !0);
                                    }, [o, c, s]),
                                    (0, a.useEffect)(() => {
                                        B(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            _.externalModel.dispose(), l.current.forEach((u) => u());
                                        },
                                        [_],
                                    ),
                                    n().createElement(t.Provider, { value: _ }, E)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = {
                                root: u.object(),
                                progressPro: u.object('progressPro'),
                                progressGrind: u.object('progressGrind'),
                            };
                            return Object.assign({}, e);
                        },
                        ({ externalModel: u }) => ({ click: u.createCallbackNoArgs('onClick') }),
                    ),
                    au = tu[0],
                    nu = tu[1];
                var ru = t(916);
                const iu = ({ format: u, value: e }) => {
                        const t = ((u, e = 'integral') => {
                            let t;
                            t = 'gold' === e ? ru.B3.GOLD : ru.B3.INTEGRAL;
                            return void 0 === u ? '' : ru.Z5.getNumberFormat(u, t);
                        })(e, u);
                        return t ? n().createElement('span', null, t) : null;
                    },
                    su = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Eu, ou;
                !(function (u) {
                    (u.Small = 'small'), (u.Medium = 'medium'), (u.Default = 'medium');
                })(Eu || (Eu = {})),
                    (function (u) {
                        (u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing');
                    })(ou || (ou = {}));
                const lu = ({ size: u = Eu.Default }) => {
                        const e = g()(su.background, su[`background__${u}`]);
                        return n().createElement('div', { className: e });
                    },
                    Au = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Fu = ({ size: u }) => {
                        const e = g()(Au.base, Au[`base__${u}`]);
                        return n().createElement('div', { className: e });
                    },
                    Du = {
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
                    cu = (0, a.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: a, isComplete: r, withoutBounce: i }) => {
                            const s = g()(
                                    Du.base,
                                    Du[`base__${u}`],
                                    t && Du.base__disabled,
                                    r && Du.base__finished,
                                    i && Du.base__withoutBounce,
                                ),
                                E = !t && !r;
                            return n().createElement(
                                'div',
                                { className: s, style: a, ref: e },
                                n().createElement('div', { className: Du.pattern }),
                                n().createElement('div', { className: Du.gradient }),
                                E && n().createElement(Fu, { size: u }),
                            );
                        },
                    ),
                    Bu = ({ size: u, value: e, lineRef: t, disabled: r, onComplete: i }) => {
                        const s = (0, a.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            E = 100 === e;
                        return (
                            (0, a.useEffect)(() => {
                                E && i && i();
                            }, [E, i]),
                            n().createElement(cu, { size: u, disabled: r, baseStyles: s, isComplete: E, lineRef: t })
                        );
                    },
                    du = (u, e) => {
                        let t;
                        const a = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(a);
                        };
                    };
                let _u, mu;
                !(function (u) {
                    (u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End');
                })(_u || (_u = {})),
                    (function (u) {
                        (u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End');
                    })(mu || (mu = {}));
                const Cu = 'ProgressBarDeltaSimple_base_6c',
                    gu = 'ProgressBarDeltaSimple_delta_99',
                    hu = (0, a.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: r,
                            size: i,
                            to: s,
                            onEndAnimation: E,
                            onChangeAnimationState: o,
                        }) => {
                            const l = s < r,
                                A = (0, a.useState)(mu.Idle),
                                F = A[0],
                                D = A[1],
                                c = F === mu.In,
                                B = F === mu.End,
                                d = F === mu.Idle,
                                _ = (0, a.useCallback)(
                                    (u) => {
                                        D(u), o && o(u);
                                    },
                                    [o],
                                );
                            (0, a.useEffect)(() => {
                                if (d && !t) {
                                    return du(() => {
                                        _(mu.In);
                                    }, e);
                                }
                            }, [_, t, d, e]),
                                (0, a.useEffect)(() => {
                                    if (c) {
                                        return du(() => {
                                            E && E(), _(mu.End);
                                        }, u + e);
                                    }
                                }, [_, c, E, e, u]);
                            const m = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, e, u],
                                ),
                                C = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, e, u],
                                ),
                                g = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(r - s)}%`, left: `${l ? s : r}%` }),
                                    [r, l, s],
                                );
                            return B
                                ? null
                                : n().createElement(
                                      'div',
                                      { className: Cu, style: g },
                                      n().createElement(
                                          'div',
                                          { style: d ? m : C, className: gu },
                                          n().createElement(Fu, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    pu = (0, a.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: s,
                            animationSettings: E,
                            onChangeAnimationState: o,
                            onEndAnimation: l,
                        }) => {
                            const A = (0, a.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${E.line.duration}ms`,
                                    transitionDelay: `${E.line.delay}ms`,
                                }),
                                [E.line.delay, E.line.duration, u],
                            );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(cu, {
                                    size: e,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: s,
                                    baseStyles: A,
                                }),
                                t >= 0 &&
                                    n().createElement(hu, {
                                        transitionDuration: E.delta.duration,
                                        transitionDelay: E.delta.delay,
                                        freezed: E.freezed,
                                        from: t,
                                        size: e,
                                        to: u,
                                        onChangeAnimationState: o,
                                        onEndAnimation: l,
                                    }),
                            );
                        },
                    ),
                    bu = 'ProgressBarDeltaGrow_base_7e',
                    fu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    vu = 'ProgressBarDeltaGrow_glow_68',
                    wu = (u) => (u ? { left: 0 } : { right: 0 }),
                    xu = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    Su = (u) => ({ transitionDuration: `${u}ms` }),
                    yu = (0, a.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: r,
                            size: i,
                            to: s,
                            onEndAnimation: E,
                            onChangeAnimationState: o,
                            className: l,
                        }) => {
                            const A = s < r,
                                F = (0, a.useState)(_u.Idle),
                                D = F[0],
                                c = F[1],
                                B = D === _u.End,
                                d = D === _u.Idle,
                                _ = D === _u.Grow,
                                m = D === _u.Shrink,
                                C = (0, a.useCallback)(
                                    (u) => {
                                        c(u), o && o(u);
                                    },
                                    [o],
                                ),
                                h = (0, a.useCallback)(
                                    (u, e) =>
                                        du(() => {
                                            C(u);
                                        }, e),
                                    [C],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return d
                                        ? h(_u.Grow, e)
                                        : _
                                          ? h(_u.Shrink, u)
                                          : m
                                            ? h(_u.End, u)
                                            : void (B && E && E());
                            }, [h, t, B, _, d, m, E, e, u]);
                            const p = (0, a.useMemo)(() => Object.assign({ width: '100%' }, Su(u), wu(A)), [A, u]),
                                b = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Su(u), wu(A)), [A, u]),
                                f = (0, a.useMemo)(() => Object.assign({ width: '0%' }, xu(A, r), Su(u)), [r, A, u]),
                                v = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - r)}%` }, xu(A, r), Su(u)),
                                    [r, A, s, u],
                                );
                            if (B) return null;
                            const w = g()(bu, l, A && 0 === s && fu);
                            return n().createElement(
                                'div',
                                { style: d ? f : v, className: w },
                                n().createElement(
                                    'div',
                                    { style: m ? b : p, className: vu },
                                    n().createElement(Fu, { size: i }),
                                ),
                            );
                        },
                    ),
                    Tu = (0, a.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: s,
                            animationSettings: E,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const A = u < t,
                                F = (0, a.useState)(!1),
                                D = F[0],
                                c = F[1],
                                B = (0, a.useCallback)(
                                    (u) => {
                                        u === _u.Shrink && c(!0), l && l(u);
                                    },
                                    [l],
                                ),
                                d = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                _ = (0, a.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${E.line.duration}ms` }),
                                    [E.line.duration, u],
                                );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(cu, {
                                    size: e,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: s,
                                    withoutBounce: A && 0 === u,
                                    baseStyles: D ? _ : d,
                                }),
                                t >= 0 &&
                                    n().createElement(yu, {
                                        transitionDuration: E.delta.duration,
                                        transitionDelay: E.delta.delay,
                                        onChangeAnimationState: B,
                                        freezed: E.freezed,
                                        onEndAnimation: o,
                                        from: t,
                                        size: e,
                                        to: u,
                                        className: E.delta.className,
                                    }),
                            );
                        },
                    ),
                    Lu = ['onComplete', 'onEndAnimation'];
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const ku = (0, a.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, Lu);
                        const i = (0, a.useState)(!1),
                            s = i[0],
                            E = i[1],
                            o = (0, a.useCallback)(() => {
                                const u = 100 === r.to;
                                u !== s && E(u), u && e && e(), t && t();
                            }, [s, e, t, r.to]);
                        switch (r.animationSettings.type) {
                            case ou.Simple:
                                return n().createElement(pu, Pu({}, r, { onEndAnimation: o, isComplete: s }));
                            case ou.Growing:
                                return n().createElement(Tu, Pu({}, r, { onEndAnimation: o, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    Ou = ['onEndAnimation'];
                function Mu() {
                    return (
                        (Mu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Mu.apply(this, arguments)
                    );
                }
                const Ru = (0, a.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(u);
                            for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, Ou);
                    const r = (0, a.useRef)({}),
                        i = (0, a.useCallback)(() => {
                            (r.current.from = void 0), e && e();
                        }, [e]),
                        s = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = s),
                        n().createElement(ku, Mu({}, t, { onEndAnimation: i, key: `${s}-${t.to}`, from: s }))
                    );
                });
                function Iu() {
                    return (
                        (Iu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Iu.apply(this, arguments)
                    );
                }
                const Wu = (0, a.memo)(
                        ({
                            size: u,
                            value: e,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: r,
                            animationSettings: i,
                            onEndAnimation: s,
                            onChangeAnimationState: E,
                            onComplete: o,
                        }) => {
                            if (r === e)
                                return n().createElement(Bu, {
                                    key: `${r}-${e}`,
                                    size: u,
                                    value: e,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: o,
                                });
                            const l = {
                                from: r,
                                to: e,
                                size: u,
                                lineRef: t,
                                disabled: a,
                                animationSettings: i,
                                onComplete: o,
                                onEndAnimation: s,
                                onChangeAnimationState: E,
                            };
                            return i.withStack
                                ? n().createElement(Ru, l)
                                : n().createElement(ku, Iu({ key: `${r}-${e}` }, l));
                        },
                    ),
                    Hu = (u) => ({
                        '--progress-base': `url(${u.bgImageBase})`,
                        '--progress-line-base': u.line.bgColorBase,
                        '--progress-line-disabled': u.line.bgColorDisabled,
                        '--progress-line-finished': u.line.bgColorFinished,
                        '--progress-pattern-base': `url(${u.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${u.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${u.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${u.glow}')`,
                        '--progress-glow-small': `url('${u.glowSmall}')`,
                        '--progress-delta-color': u.delta.color,
                        '--progress-delta-shadow': u.delta.shadow,
                    }),
                    Nu = (u, e, t) => (t < u ? u : t > e ? e : t),
                    zu = (u, e, t) => {
                        if ('number' == typeof t) {
                            return (Nu(0, e, t) / e) * 100;
                        }
                        return u;
                    },
                    Gu = {
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
                    $u = {
                        freezed: !1,
                        withStack: !1,
                        type: ou.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ju = (0, a.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = Gu,
                            size: t = Eu.Default,
                            animationSettings: r = $u,
                            disabled: i = !1,
                            withoutBackground: s = !1,
                            value: E,
                            deltaFrom: o,
                            lineRef: l,
                            onChangeAnimationState: A,
                            onEndAnimation: F,
                            onComplete: D,
                        }) => {
                            const c = ((u, e, t) =>
                                (0, a.useMemo)(() => {
                                    const a = (Nu(0, e, u) / e) * 100;
                                    return { value: a, deltaFrom: zu(a, e, t) };
                                }, [t, e, u]))(E, u, o);
                            return n().createElement(
                                'div',
                                { className: g()(su.base, su[`base__${t}`]), style: Hu(e) },
                                !s && n().createElement(lu, { size: t }),
                                n().createElement(Wu, {
                                    size: t,
                                    lineRef: l,
                                    disabled: i,
                                    value: c.value,
                                    deltaFrom: c.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: F,
                                    onChangeAnimationState: A,
                                    onComplete: D,
                                }),
                            );
                        },
                    ),
                    Uu = {
                        base: 'ProgressionBlock_base_0c',
                        base__thinSmall: 'ProgressionBlock_base__thinSmall_1b',
                        base__thinExtraSmall: 'ProgressionBlock_base__thinExtraSmall_79',
                        base__postProgression: 'ProgressionBlock_base__postProgression_eb',
                        box: 'ProgressionBlock_box_85',
                        box__post: 'ProgressionBlock_box__post_09',
                        text: 'ProgressionBlock_text_3e',
                        text__done: 'ProgressionBlock_text__done_3c',
                        value__active: 'ProgressionBlock_value__active_f9',
                        icon: 'ProgressionBlock_icon_7c',
                        iconImg: 'ProgressionBlock_iconImg_65',
                        iconImg__award: 'ProgressionBlock_iconImg__award_68',
                        iconImg__blocked_damage: 'ProgressionBlock_iconImg__blocked_damage_68',
                        iconImg__damage_block: 'ProgressionBlock_iconImg__damage_block_a0',
                        iconImg__experience: 'ProgressionBlock_iconImg__experience_d5',
                        iconImg__originalXP: 'ProgressionBlock_iconImg__originalXP_41',
                        iconImg__damage: 'ProgressionBlock_iconImg__damage_bb',
                        iconImg__win: 'ProgressionBlock_iconImg__win_b7',
                        iconImg__top: 'ProgressionBlock_iconImg__top_fd',
                        iconImg__top3: 'ProgressionBlock_iconImg__top3_5d',
                        iconImg__battles: 'ProgressionBlock_iconImg__battles_7e',
                        iconImg__kill_vehicles: 'ProgressionBlock_iconImg__kill_vehicles_b3',
                        iconImg__wins: 'ProgressionBlock_iconImg__wins_83',
                        progress: 'ProgressionBlock_progress_f8',
                    },
                    Vu = (0, a.memo)(({ quest: u, size: e, isGrind: t, isQuestDone: a, isPostProgression: r = !1 }) => {
                        const i = u.value.bonusCondition.items[0];
                        let s = u.value.postBattleCondition.items[0];
                        s && !s.value.iconKey && (s = u.value.postBattleCondition.items[1]);
                        const E = i ? i.value : s.value,
                            o = E.current,
                            l = E.total,
                            A = i ? l : 1;
                        let F;
                        return (
                            i && s
                                ? (F = t ? i.value.iconKey : s.value.iconKey)
                                : i
                                  ? (F = i.value.iconKey)
                                  : s && (F = s.value.iconKey),
                            'award' === F && (F = 'damage'),
                            n().createElement(
                                'div',
                                { className: g()(Uu.base, Uu[`base__${e}`], r && Uu.base__postProgression) },
                                n().createElement(
                                    'div',
                                    { className: g()(Uu.box, r && Uu.box__post) },
                                    !a &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement(
                                                'div',
                                                { className: Uu.icon },
                                                n().createElement('div', {
                                                    className: g()(Uu.iconImg, Uu[`iconImg__${F}`]),
                                                }),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: g()(Uu.text, a && Uu.text__done) },
                                                n().createElement(
                                                    'span',
                                                    { className: g()(Uu.value, o > 0 && Uu.value__active) },
                                                    n().createElement(iu, { value: a ? A : o }),
                                                ),
                                                ' / ',
                                                n().createElement(iu, { value: A }),
                                            ),
                                        ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: g()(Uu.progress, r && Uu.progress__postProgression) },
                                    n().createElement(ju, { value: a ? A : o, maxValue: A, size: Eu.Small }),
                                ),
                            )
                        );
                    }),
                    Ku = {
                        base: 'Progression_base_d7',
                        base__big: 'Progression_base__big_b0',
                        box: 'Progression_box_06',
                        separator: 'Progression_separator_d0',
                        base__thinExtraSmall: 'Progression_base__thinExtraSmall_d5',
                    },
                    qu = (0, X.Pi)(({ size: u }) => {
                        const e = nu().model,
                            t = e.progressPro.get(),
                            a = e.progressGrind.get();
                        return n().createElement(
                            'div',
                            { className: g()(Ku.base, Ku[`base__${u}`]) },
                            n().createElement(
                                'div',
                                { className: Ku.box },
                                t.items && t.items.length && n().createElement(Vu, { quest: t.items[0], size: u }),
                                n().createElement(
                                    'div',
                                    { className: Ku.separator },
                                    n().createElement(
                                        'div',
                                        { className: Ku.separatorText },
                                        R.strings.marathon.entryPoint.separatorText(),
                                    ),
                                ),
                                a.items &&
                                    a.items.length &&
                                    n().createElement(Vu, { quest: a.items[0], size: u, isGrind: !0, isQuestDone: !1 }),
                            ),
                        );
                    }),
                    Yu = 'FormatText_base_d0',
                    Xu = ({ binding: u, text: e = '', classMix: t, alignment: r = N.left, formatWithBrackets: i }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const s = i && u ? z(e, u) : e;
                        return n().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((e, i) =>
                                n().createElement(
                                    'div',
                                    { className: g()(Yu, t), key: `${e}-${i}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : Y(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => n().createElement(a.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    Zu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Qu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Ju(u) {
                    let e = '';
                    for (let t = Qu.length - 1; t >= 0; t--) for (; u >= Qu[t]; ) (e += Zu[t]), (u -= Qu[t]);
                    return e;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const ue = {
                        base: 'StageText_base_c6',
                        base__wideSmall: 'StageText_base__wideSmall_20',
                        base__finished: 'StageText_base__finished_ac',
                        base__small: 'StageText_base__small_4c',
                        text: 'StageText_text_0e',
                        text__name: 'StageText_text__name_4d',
                        text__date: 'StageText_text__date_47',
                        text__active: 'StageText_text__active_f8',
                        text__dateActive: 'StageText_text__dateActive_6b',
                        text__activeActive: 'StageText_text__activeActive_91',
                        finishedText: 'StageText_finishedText_c4',
                        finishedText__discount: 'StageText_finishedText__discount_0e',
                        icon: 'StageText_icon_ad',
                        label: 'StageText_label_41',
                        stageWrapper: 'StageText_stageWrapper_5c',
                        stageWrapper__indent: 'StageText_stageWrapper__indent_cc',
                        shadow: 'StageText_shadow_49',
                    },
                    ee = R.strings.marathon.entryPoint,
                    te = (0, X.Pi)(({ isSmall: u, isAllPrizesInHangar: e, size: t }) => {
                        const r = nu().model.root.get(),
                            i = r.state,
                            s = r.discount,
                            E = r.isPremShopURL,
                            o = r.currentPhase,
                            l = 1 === i,
                            A = 3 === i,
                            F = G(ee.discountText(), { discount: s }),
                            D = (0, a.useMemo)(() => new Date(), []),
                            c = (0, a.useMemo)(
                                () => ({
                                    day: n().createElement(
                                        'span',
                                        { className: g()(ue.text__date, ue.text__dateActive) },
                                        D.getDate(),
                                    ),
                                    month: n().createElement(
                                        'span',
                                        { className: ue.text__date },
                                        R.strings.menu.dateTime.months.$num(D.getMonth() + 1),
                                    ),
                                }),
                                [D],
                            ),
                            B = (0, a.useMemo)(
                                () => ({
                                    chapter: n().createElement(
                                        'span',
                                        { className: g()(ue.text, ue.text__active) },
                                        Ju(1),
                                    ),
                                    stage: n().createElement(
                                        'span',
                                        { className: g()(ue.text, ue.text__active) },
                                        Ju(o + 1),
                                    ),
                                    discount: n().createElement(
                                        'span',
                                        { className: g()(ue.finishedText, ue.finishedText__discount) },
                                        F,
                                    ),
                                    vehicleLabel: n().createElement('span', { className: ue.label }),
                                    icon: E && n().createElement('div', { className: ue.icon }),
                                    name: n().createElement(
                                        'span',
                                        { className: g()(ue.text, ue.text__name) },
                                        ee.vehicleName(),
                                    ),
                                    date: n().createElement(Xu, {
                                        classMix: ue.text,
                                        text: R.strings.battle_pass.tooltips.notStarted.date(),
                                        binding: c,
                                    }),
                                }),
                                [o, F, c, E],
                            );
                        return n().createElement(
                            'div',
                            { className: g()(ue.base, ue[`base__${t}`], u && ue.base__small, A && ue.base__finished) },
                            l &&
                                n().createElement(Xu, {
                                    classMix: ue.text,
                                    text: e ? ee.chapterDoneText() : ee.stageText(),
                                    binding: B,
                                }),
                            A &&
                                n().createElement(
                                    'div',
                                    { className: g()(ue.stageWrapper, E && ue.stageWrapper__indent) },
                                    n().createElement(Xu, {
                                        classMix: ue.text,
                                        text:
                                            0 === s
                                                ? ee.finalNoDiscountText.long()
                                                : t === se.ThinExtraSmall
                                                  ? ee.finalDiscountText.short()
                                                  : ee.finalDiscountText.long(),
                                        binding: B,
                                    }),
                                ),
                            n().createElement('div', { className: ue.shadow }),
                        );
                    }),
                    ae = {
                        base: 'SubTitle_base_3e',
                        base__thinExtraSmall: 'SubTitle_base__thinExtraSmall_ab',
                        title: 'SubTitle_title_a9',
                        base__thinSmall: 'SubTitle_base__thinSmall_41',
                        title__discount: 'SubTitle_title__discount_cb',
                        base__finished: 'SubTitle_base__finished_86',
                        purchaseBlockWrapper: 'SubTitle_purchaseBlockWrapper_5b',
                        icon: 'SubTitle_icon_f1',
                        shadow: 'SubTitle_shadow_ee',
                    },
                    ne = (0, a.memo)(
                        ({
                            text: u,
                            time: e,
                            size: t,
                            isMarathonEnding: r = !1,
                            isMarathonFinished: i = !1,
                            isMarathonNotStarted: s = !1,
                        }) => {
                            const E = (0, a.useMemo)(() => ({ time: n().createElement('span', null, e) }), [e]);
                            return n().createElement(
                                'div',
                                {
                                    className: g()(
                                        ae.base,
                                        ae[`base__${t}`],
                                        i && ae.base__finished,
                                        s && ae.base__notStarted,
                                    ),
                                },
                                !r && n().createElement('div', { className: ae.shadow }),
                                n().createElement(
                                    'div',
                                    { className: ae.purchaseBlockWrapper },
                                    n().createElement('div', { className: ae.icon }),
                                    n().createElement(Xu, { classMix: ae.title, text: u, binding: E }),
                                ),
                            );
                        },
                    ),
                    re = {
                        base: 'EntryPointApp_base_25',
                        base__notStarted: 'EntryPointApp_base__notStarted_5b',
                        bgWrapper: 'EntryPointApp_bgWrapper_b2',
                        bg: 'EntryPointApp_bg_27',
                        base__big: 'EntryPointApp_base__big_93',
                        base__wideSmall: 'EntryPointApp_base__wideSmall_89',
                        base__thinSmall: 'EntryPointApp_base__thinSmall_6a',
                        base__thinExtraSmall: 'EntryPointApp_base__thinExtraSmall_8a',
                        stroke: 'EntryPointApp_stroke_fc',
                        bgHighlight: 'EntryPointApp_bgHighlight_73',
                        sparkles: 'EntryPointApp_sparkles_bf',
                        subTitleWrapper: 'EntryPointApp_subTitleWrapper_17',
                        subTitleWrapper__alert: 'EntryPointApp_subTitleWrapper__alert_49',
                        subTitleWrapper__notStarted: 'EntryPointApp_subTitleWrapper__notStarted_22',
                        subTitleWrapper__finished: 'EntryPointApp_subTitleWrapper__finished_d8',
                        discount: 'EntryPointApp_discount_09',
                        discountText: 'EntryPointApp_discountText_2f',
                        discountLight: 'EntryPointApp_discountLight_9d',
                        mainTitleWrapper: 'EntryPointApp_mainTitleWrapper_b1',
                        titleWrapper: 'EntryPointApp_titleWrapper_ba',
                        title: 'EntryPointApp_title_e0',
                        highlight: 'EntryPointApp_highlight_d1',
                        'fade-in': 'EntryPointApp_fade-in_9c',
                        'fade-out': 'EntryPointApp_fade-out_33',
                    },
                    ie = R.strings.marathon.entryPoint;
                let se;
                !(function (u) {
                    (u.Big = 'big'),
                        (u.WideSmall = 'wideSmall'),
                        (u.ThinSmall = 'thinSmall'),
                        (u.ThinExtraSmall = 'thinExtraSmall');
                })(se || (se = {}));
                const Ee = {
                        '302*152': se.Big,
                        '302*114': se.WideSmall,
                        '222*114': se.ThinSmall,
                        '162*114': se.ThinExtraSmall,
                    },
                    oe = (0, X.Pi)(() => {
                        const u = nu(),
                            e = u.controls,
                            t = u.model.root.get(),
                            r = t.discount,
                            i = t.state,
                            s = t.timeTillNextState,
                            E = t.formattedTimeTillNextState,
                            o = t.isVehicleInHangar,
                            l = t.isVehicleStyleInHangar,
                            A = 0 === i,
                            F = 1 === i,
                            D = F && Math.floor(s / 3600) < 24,
                            c = 3 === i,
                            B = F && r > 0,
                            d = o && l,
                            m = E,
                            C = (0, a.useState)(se.Big),
                            h = C[0],
                            p = C[1],
                            b = (u) => {
                                const e = Ee[`${u.width}*${u.height}`];
                                e && p(e);
                            };
                        _(() => b(viewEnv.getViewSizeRem())),
                            (0, a.useEffect)(
                                () => (
                                    engine.on('screenResized', b),
                                    () => {
                                        engine.off('screenResized', b);
                                    }
                                ),
                                [],
                            );
                        const f = h === se.ThinSmall || h === se.ThinExtraSmall,
                            v = (0, a.useCallback)(() => {
                                W.hY.sound(R.sounds.play()), e.click();
                            }, [e]);
                        let w = '';
                        D && (w = ie.untilEndText()), c && (w = ie.finalSaleText()), A && (w = ie.untilStartText());
                        const x = G(ie.activeDiscountText(), { discount: r }),
                            S = n().createElement(
                                'div',
                                {
                                    className: g()(
                                        re.subTitleWrapper,
                                        D && re.subTitleWrapper__alert,
                                        c && re.subTitleWrapper__finished,
                                        A && re.subTitleWrapper__notStarted,
                                    ),
                                },
                                n().createElement(ne, {
                                    text: w,
                                    time: m,
                                    size: h,
                                    isMarathonNotStarted: A,
                                    isMarathonEnding: D,
                                    isMarathonFinished: c,
                                }),
                            ),
                            y = n().createElement(te, { isSmall: f, size: h, isAllPrizesInHangar: d });
                        return n().createElement(
                            'div',
                            {
                                className: g()(re.base, re[`base__${h}`], A && re.base__notStarted),
                                onClick: v,
                                onMouseEnter: () => W.hY.sound(R.sounds.highlight()),
                            },
                            n().createElement(
                                'div',
                                { className: re.bgWrapper },
                                n().createElement('div', { className: re.bg }),
                                n().createElement('div', { className: re.bgHighlight }),
                                B && n().createElement('div', { className: re.sparkles }),
                            ),
                            n().createElement('div', { className: re.stroke }),
                            c && n().createElement('div', { className: re.highlight }),
                            B &&
                                !d &&
                                n().createElement(
                                    'div',
                                    { className: re.discount },
                                    n().createElement('div', { className: re.discountText }, x),
                                    n().createElement('div', { className: re.discountLight }),
                                ),
                            n().createElement(
                                'div',
                                { className: re.mainTitleWrapper },
                                n().createElement(
                                    'div',
                                    { className: re.titleWrapper },
                                    n().createElement('div', { className: re.title }, ie.title()),
                                ),
                                !A && w && S,
                                F && y,
                            ),
                            A && w && S,
                            c && y,
                            F && n().createElement(qu, { size: h }),
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        n().createElement(au, null, n().createElement(O, null, n().createElement(oe, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, a) => {
            if (!e) {
                var n = 1 / 0;
                for (E = 0; E < deferred.length; E++) {
                    for (var [e, t, a] = deferred[E], r = !0, i = 0; i < e.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(E--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var E = deferred.length; E > 0 && deferred[E - 1][2] > a; E--) deferred[E] = deferred[E - 1];
            deferred[E] = [e, t, a];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 264),
        (() => {
            var u = { 264: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        n,
                        [r, i, s] = t,
                        E = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var o = s(__webpack_require__);
                    }
                    for (e && e(t); E < r.length; E++)
                        (n = r[E]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(o);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [639], () => __webpack_require__(286));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
