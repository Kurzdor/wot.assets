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
            768: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => tu });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => F, off: () => A, on: () => E, onResize: () => l, onScaleUpdated: () => c });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => B,
                        getSize: () => m,
                        graphicsQuality: () => C,
                        playSound: () => _,
                        setRTPC: () => D,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => v, getTextureUrl: () => b });
                var s = {};
                function o(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function i(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(s),
                    t.d(s, {
                        addModelObserver: () => N,
                        addPreloadTexture: () => L,
                        children: () => r,
                        displayStatus: () => w,
                        displayStatusIs: () => J,
                        events: () => f,
                        extraSize: () => uu,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => k,
                        getDisplayStatus: () => Q,
                        getScale: () => V,
                        getSize: () => H,
                        getViewGlobalPosition: () => $,
                        isEventHandled: () => K,
                        isFocused: () => Y,
                        pxToRem: () => z,
                        remToPx: () => q,
                        resize: () => G,
                        sendEvent: () => O,
                        setAnimateWindow: () => j,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => eu,
                    });
                const l = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    A = (u, e) => engine.off(u, e),
                    d = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const F = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && i(!1);
                    }
                    function t() {
                        u.enabled && i(!0);
                    }
                    function n() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : i(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${e}`,
                                        s = d[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, o),
                                                (u.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && i(!0);
                        },
                        disableOutside() {
                            u.enabled && i(!1);
                        },
                    });
                })();
                function _(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function D(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function m(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function B(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(g).reduce((u, e) => ((u[e] = () => _(g[e])), u), {}),
                    p = { play: Object.assign({}, h, { sound: _ }), setRTPC: D };
                function b(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function v(u, e, t) {
                    return `url(${b(u, e, t)})`;
                }
                const w = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    f = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    T = ['args'];
                const x = 2,
                    S = 16,
                    R = 32,
                    M = 64,
                    y = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, T);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([u, e]) => {
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
                        var n;
                    },
                    O = {
                        close(u) {
                            y('popover' === u ? x : R);
                        },
                        minimize() {
                            y(M);
                        },
                        move(u) {
                            y(S, { isMouseEvent: !0, on: u });
                        },
                    },
                    P = 15;
                function L(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function I(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, P);
                }
                function k(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function N(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function U(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, P);
                }
                function H(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function G(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function $(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: q(e.x), y: q(e.y) };
                }
                function W() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function V() {
                    return viewEnv.getScale();
                }
                function z(u) {
                    return viewEnv.pxToRem(u);
                }
                function q(u) {
                    return viewEnv.remToPx(u);
                }
                function j(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function Y() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function K() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const J = Object.keys(w).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === w[e]), u), {}),
                    uu = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    eu = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : f.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    tu = { view: s, client: a, sound: p };
            },
            521: (u, e, t) => {
                'use strict';
                let n, a;
                t.d(e, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(a || (a = {}));
            },
            368: () => {
                !(function () {
                    let u,
                        e,
                        t,
                        n,
                        a,
                        r,
                        s,
                        o = -1;
                    document.addEventListener('mousedown', (t) => {
                        document.getSelection().empty(),
                            t.target.select &&
                                -1 === o &&
                                ((u = t.target), (e = u.getBoundingClientRect()), u.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === o && t.target.select && t.target === u && (o = u.selectionStart), o > -1)) {
                                const n = Math.min(Math.max(t.x, e.left), e.right),
                                    a = Math.min(Math.max(t.y, e.top), e.bottom),
                                    r = document.createEvent('MouseEvent');
                                r.initMouseEvent('mousedown', !0, !0, null, 1, n, a, n, a, !1, !1, !1, !1, 0, null),
                                    u.dispatchEvent(r);
                                const s = u.selectionEnd;
                                s > o ? u.setSelectionRange(o, s, 'forward') : u.setSelectionRange(s, o, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (u = null), (o = -1);
                        }),
                        document.addEventListener('dblclick', (u) => {
                            u.target.select &&
                                (document.getSelection().empty(),
                                (t = u.target),
                                (n = u.target.value),
                                (a = t.selectionStart),
                                (r = -1 !== n.lastIndexOf(' ', a) ? n.lastIndexOf(' ', a) + 1 : 0),
                                (s = -1 !== n.indexOf(' ', a) ? n.indexOf(' ', a) : n.length),
                                t.setSelectionRange(r, s, 'forward'));
                        });
                })(),
                    (function () {
                        let u = null;
                        document.addEventListener('mousedown', (e) => {
                            document.getSelection().empty(),
                                0 !== e.button ||
                                    e.target.select ||
                                    u ||
                                    (u = document.caretPositionFromPoint(e.x, e.y));
                        }),
                            document.addEventListener('mousemove', (e) => {
                                if (0 === e.button && !e.target.select && u) {
                                    const t = document.caretPositionFromPoint(e.x, e.y);
                                    if (!t.offsetNode || !u.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(u.offsetNode, u.offset, t.offsetNode, t.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                u = null;
                            });
                    })();
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var n = t(768);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(u, t, a);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
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
                t.d(e, { B3: () => i, Z5: () => s.Z5, B0: () => o, ry: () => m });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                var r = t(358);
                var s = t(613);
                let o;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(521),
                    d = t(768);
                const F = ['args'];
                function _(u, e, t, n, a, r, s) {
                    try {
                        var o = u[r](s),
                            i = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(i) : Promise.resolve(i).then(n, a);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    m = (function () {
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
                                    return new Promise(function (n, a) {
                                        var r = u.apply(e, t);
                                        function s(u) {
                                            _(r, n, a, s, o, 'next', u);
                                        }
                                        function o(u) {
                                            _(r, n, a, s, o, 'throw', u);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, F);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([u, e]) => {
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
                        var n;
                    },
                    C = () => B(o.CLOSE),
                    g = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var h = t(572);
                const p = a.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => B(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), r) => {
                            const s = d.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                A = i.height,
                                F = {
                                    x: d.O.view.pxToRem(l) + s.x,
                                    y: d.O.view.pxToRem(c) + s.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(A),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: D(F),
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
                        handleViewEvent: B,
                        onBindingsReady: m,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const a = Object.prototype.toString.call(e[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < a.length; e++) t[n].push({ value: u(a[e].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = b;
            },
            613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    a = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            631: (u, e, t) => {
                'use strict';
                var n = t(179),
                    a = t.n(n),
                    r = t(493),
                    s = t.n(r);
                const o = ({ name: u, children: e }) => {
                        const t = (0, n.useState)(!0),
                            r = t[0],
                            s = t[1];
                        return (
                            a().useEffect(() => {
                                const e = ({ viewName: t }) => {
                                    t === u && (s(!1), engine.off('subView:destroy', e));
                                };
                                engine.on('subView:destroy', e);
                            }, [u]),
                            r ? e : null
                        );
                    },
                    i = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u;
                var l = t(768);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var E;
                function A(u, e, t) {
                    const n = (function (u, e) {
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
                        a = (function (u, e) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
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
                const d = l.O.client.getSize('rem'),
                    F = d.width,
                    _ = d.height,
                    D = Object.assign({ width: F, height: _ }, A(F, _, c)),
                    m = (0, n.createContext)(D),
                    B = ['children'];
                const C = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, B);
                    const a = (0, n.useContext)(m),
                        r = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        E = a.extraLargeWidth,
                        A = a.largeWidth,
                        d = a.mediumWidth,
                        F = a.smallWidth,
                        _ = a.extraSmallWidth,
                        D = a.extraLargeHeight,
                        C = a.largeHeight,
                        g = a.mediumHeight,
                        h = a.smallHeight,
                        p = a.extraSmallHeight,
                        b = { extraLarge: D, large: C, medium: g, small: h, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return e;
                        if (t.large && s) return e;
                        if (t.medium && o) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return i(e, t, b);
                        if (t.largeWidth && A) return i(e, t, b);
                        if (t.mediumWidth && d) return i(e, t, b);
                        if (t.smallWidth && F) return i(e, t, b);
                        if (t.extraSmallWidth && _) return i(e, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && h) return e;
                            if (t.extraSmallHeight && p) return e;
                        }
                    }
                    return null;
                };
                C.defaultProps = {
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
                (0, n.memo)(C);
                const g = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    h = ({ children: u }) => {
                        const e = (0, n.useContext)(m),
                            t = (0, n.useState)(e),
                            r = t[0],
                            s = t[1],
                            o = (0, n.useCallback)((u, e) => {
                                const t = l.O.view.pxToRem(u),
                                    n = l.O.view.pxToRem(e);
                                s(Object.assign({ width: t, height: n }, A(t, n, c)));
                            }, []),
                            i = (0, n.useCallback)(() => {
                                const u = l.O.client.getSize('px');
                                o(u.width, u.height);
                            }, [o]);
                        g(() => {
                            l.O.client.events.on('clientResized', o), l.O.client.events.on('self.onScaleUpdated', i);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    l.O.client.events.off('clientResized', o),
                                        l.O.client.events.off('self.onScaleUpdated', i);
                                },
                                [o, i],
                            );
                        const E = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(m.Provider, { value: E }, u);
                    };
                var p = t(483),
                    b = t.n(p),
                    v = t(926),
                    w = t.n(v);
                let f, T, x;
                !(function (u) {
                    (u[(u.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = c.small.width)] = 'Small'),
                        (u[(u.Medium = c.medium.width)] = 'Medium'),
                        (u[(u.Large = c.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = c.small.width)] = 'Small'),
                            (u[(u.Medium = c.medium.width)] = 'Medium'),
                            (u[(u.Large = c.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge');
                    })(T || (T = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = c.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = c.small.height)] = 'Small'),
                            (u[(u.Medium = c.medium.height)] = 'Medium'),
                            (u[(u.Large = c.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = c.extraLarge.height)] = 'ExtraLarge');
                    })(x || (x = {}));
                const S = () => {
                        const u = (0, n.useContext)(m),
                            e = u.width,
                            t = u.height,
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return f.ExtraLarge;
                                    case u.large:
                                        return f.Large;
                                    case u.medium:
                                        return f.Medium;
                                    case u.small:
                                        return f.Small;
                                    case u.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(u),
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return T.ExtraLarge;
                                    case u.largeWidth:
                                        return T.Large;
                                    case u.mediumWidth:
                                        return T.Medium;
                                    case u.smallWidth:
                                        return T.Small;
                                    case u.extraSmallWidth:
                                        return T.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), T.ExtraSmall;
                                }
                            })(u),
                            s = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return x.ExtraLarge;
                                    case u.largeHeight:
                                        return x.Large;
                                    case u.mediumHeight:
                                        return x.Medium;
                                    case u.smallHeight:
                                        return x.Small;
                                    case u.extraSmallHeight:
                                        return x.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), x.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: s, remScreenWidth: e, remScreenHeight: t };
                    },
                    M = ['children', 'className'];
                function y() {
                    return (
                        (y = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        y.apply(null, arguments)
                    );
                }
                const O = {
                        [T.ExtraSmall]: '',
                        [T.Small]: w().SMALL_WIDTH,
                        [T.Medium]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH}`,
                        [T.Large]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH} ${w().LARGE_WIDTH}`,
                        [T.ExtraLarge]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH} ${w().LARGE_WIDTH} ${w().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [x.ExtraSmall]: '',
                        [x.Small]: w().SMALL_HEIGHT,
                        [x.Medium]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT}`,
                        [x.Large]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT} ${w().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT} ${w().LARGE_HEIGHT} ${w().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [f.ExtraSmall]: '',
                        [f.Small]: w().SMALL,
                        [f.Medium]: `${w().SMALL} ${w().MEDIUM}`,
                        [f.Large]: `${w().SMALL} ${w().MEDIUM} ${w().LARGE}`,
                        [f.ExtraLarge]: `${w().SMALL} ${w().MEDIUM} ${w().LARGE} ${w().EXTRA_LARGE}`,
                    },
                    I = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, M);
                        const r = S(),
                            s = r.mediaWidth,
                            o = r.mediaHeight,
                            i = r.mediaSize;
                        return a().createElement('div', y({ className: b()(t, O[s], P[o], L[i]) }, n), e);
                    },
                    k = ['children'];
                const N = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, k);
                    return a().createElement(h, null, a().createElement(I, t, e));
                };
                var U = t(403),
                    H = t(521),
                    G = t(916);
                const $ = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function W(u = H.n.NONE, e = $, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== H.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!a && l.O.view.isEventHandled()) return;
                                l.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t, a]);
                }
                var V = t(281);
                let z;
                function q(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(z || (z = {}));
                const j = (u) => u.replace(/&nbsp;/g, ' '),
                    Y = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    X = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    K = (u, e, t = z.left) => u.split(e).reduce(t === z.left ? Y : X, []),
                    Z = (() => {
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
                    Q = ['zh_cn', 'zh_sg', 'zh_tw'],
                    J = (u, e = z.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Q.includes(t)) return Z(u);
                        if ('ja' === t) {
                            return (0, V.D4)()
                                .parse(u)
                                .map((u) => j(u));
                        }
                        return ((u, e = z.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = j(u);
                            return K(a, /( )/, e).forEach((u) => (t = t.concat(K(u, n, z.left)))), t;
                        })(u, e);
                    };
                function uu(u, e, t) {
                    const a = (0, n.useContext)(m);
                    let r = Object.entries(a).filter(([u, e]) => !0 === e && u in E);
                    return (
                        t && (r = r.filter((u) => t.includes(u[0]))),
                        u.reduce((u, t) => {
                            const n = r.map((u) =>
                                b()(
                                    e[((u, e) => u + '__' + e)(t, u[0])],
                                    e[
                                        ((u, e) => {
                                            return u + ((t = e)[0].toUpperCase() + t.slice(1));
                                            var t;
                                        })(t, u[0])
                                    ],
                                ),
                            );
                            return (u[t] = b()(e[t], ...n)), u;
                        }, {})
                    );
                }
                function eu(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const tu = {
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
                    nu = [
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
                function au() {
                    return (
                        (au = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        au.apply(null, arguments)
                    );
                }
                class ru extends a().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && eu(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && eu(this.props.soundClick);
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                u && u(e), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            n = u.goto,
                            r = u.side,
                            s = u.type,
                            o = u.classNames,
                            i = u.onMouseEnter,
                            l = u.onMouseLeave,
                            c = u.onMouseDown,
                            E = u.onMouseUp,
                            A =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(u, nu)),
                            d = b()(tu.base, tu[`base__${s}`], tu[`base__${r}`], null == o ? void 0 : o.base),
                            F = b()(tu.icon, tu[`icon__${s}`], tu[`icon__${r}`], null == o ? void 0 : o.icon),
                            _ = b()(tu.glow, null == o ? void 0 : o.glow),
                            D = b()(tu.caption, tu[`caption__${s}`], null == o ? void 0 : o.caption),
                            m = b()(tu.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            au(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== s && a().createElement('div', { className: tu.shine }),
                            a().createElement('div', { className: F }, a().createElement('div', { className: _ })),
                            a().createElement('div', { className: D }, e),
                            n && a().createElement('div', { className: m }, n),
                        );
                    }
                }
                ru.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const su = {
                        base: 'CurtainSubViewTemplate_base_a7',
                        base__small: 'CurtainSubViewTemplate_base__small_53',
                        base__extraSmall: 'CurtainSubViewTemplate_base__extraSmall_2d',
                        closeButton: 'CurtainSubViewTemplate_closeButton_40',
                    },
                    ou = (0, n.memo)(
                        ({
                            children: u,
                            onCloseClicked: e,
                            isCloseVisible: t,
                            onEscapePressed: r,
                            escapeHandler: s,
                        }) => {
                            const o = (0, n.useCallback)(() => e(), [e]),
                                i = (0, n.useCallback)(
                                    (u) => {
                                        (s && s()) || (t ? (u.stopImmediatePropagation(), o()) : r());
                                    },
                                    [t, o, r, s],
                                );
                            W(H.n.ESCAPE, i);
                            const l = uu(['base'], su);
                            return a().createElement(
                                'div',
                                { className: l.base },
                                t &&
                                    a().createElement(
                                        'div',
                                        { className: su.closeButton },
                                        a().createElement(ru, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: o,
                                        }),
                                    ),
                                u,
                            );
                        },
                    ),
                    iu = [];
                t(368);
                const lu = [
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
                function cu(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const Eu = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: G.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Au = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            r = u.onMouseEnter,
                            s = u.onMouseLeave,
                            o = u.onMouseDown,
                            i = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            A = void 0 !== E && E,
                            d = u.decoratorId,
                            F = void 0 === d ? 0 : d,
                            _ = u.isEnabled,
                            D = void 0 === _ || _,
                            m = u.targetId,
                            B = void 0 === m ? 0 : m,
                            C = u.onShow,
                            g = u.onHide,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, lu);
                        const p = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(
                                () =>
                                    B ||
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            e &&
                                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: e, resId: n }
                                        );
                                    })().resId,
                                [B],
                            ),
                            v = (0, n.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (Eu(t, F, { isMouseEvent: !0, on: !0, arguments: cu(a) }, b),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, F, a, b, C]),
                            w = (0, n.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        Eu(t, F, { on: !1 }, b),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, F, b, g]),
                            f = (0, n.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const u = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', f, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === D && w();
                            }, [D, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return D
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(u),
                                                      T && T(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              w(), null == s || s(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && w(), null == i || i(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && w(), null == o || o(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      h,
                                  ),
                              )
                            : e;
                        var T;
                    },
                    du = ['children'];
                function Fu() {
                    return (
                        (Fu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Fu.apply(null, arguments)
                    );
                }
                const _u = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, du);
                        return a().createElement(
                            Au,
                            Fu(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            e,
                        );
                    },
                    Du = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function mu() {
                    return (
                        (mu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        mu.apply(null, arguments)
                    );
                }
                const Bu = R.views.common.tooltip_window.simple_tooltip_content,
                    Cu = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            s = u.note,
                            o = u.alert,
                            i = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, Du);
                        const c = (0, n.useMemo)(() => {
                            const u = Object.assign({}, i, { body: t, header: r, note: s, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, r, s, i]);
                        return a().createElement(
                            Au,
                            mu(
                                {
                                    contentId:
                                        ((E = null == i ? void 0 : i.hasHtmlContent),
                                        E ? Bu.SimpleTooltipHtmlContent('resId') : Bu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            e,
                        );
                        var E;
                    };
                function gu() {
                    return (
                        (gu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        gu.apply(null, arguments)
                    );
                }
                const hu = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const n = a().createElement('div', { className: t }, u);
                        if (e.header || e.body) return a().createElement(Cu, e, n);
                        const r = e.contentId;
                        return r ? a().createElement(Au, gu({}, e, { contentId: r }), n) : a().createElement(_u, e, n);
                    },
                    pu = 'default',
                    bu = 'search',
                    vu = 'email',
                    wu = 'password',
                    fu = 'normal',
                    Tu = 'disabled',
                    xu = 'alert',
                    Su = 'error',
                    Ru = 'medium',
                    Mu = 'extraMedium',
                    yu = 'extraLarge',
                    Ou = { [pu]: 'text', [vu]: 'text', [bu]: 'text', [wu]: 'password' },
                    Pu = { [pu]: '', [vu]: 'Invalid email', [bu]: '', [wu]: '' },
                    Lu = R.images.gui.maps.icons.components.input;
                function Iu(u, e) {
                    return (
                        e !== vu ||
                        (function (u) {
                            const e = u.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(e);
                        })(u)
                    );
                }
                const ku = {
                        base: 'InputControl_base_38',
                        base__focused: 'InputControl_base__focused_07',
                        base__alert: 'InputControl_base__alert_e6',
                        base__error: 'InputControl_base__error_34',
                        base__done: 'InputControl_base__done_2e',
                        base__disabled: 'InputControl_base__disabled_96',
                        input: 'InputControl_input_98',
                        base__small: 'InputControl_base__small_78',
                        base__medium: 'InputControl_base__medium_c9',
                        base__large: 'InputControl_base__large_42',
                        base__extraMedium: 'InputControl_base__extraMedium_41',
                        base__extraLarge: 'InputControl_base__extraLarge_a6',
                        base__monoLarge: 'InputControl_base__monoLarge_e8',
                        base__monoSmall: 'InputControl_base__monoSmall_e8',
                        base__withIcon: 'InputControl_base__withIcon_39',
                        input__search: 'InputControl_input__search_a7',
                        disabled: 'InputControl_disabled_e7',
                        placeholder: 'InputControl_placeholder_fe',
                        placeholder__search: 'InputControl_placeholder__search_b4',
                        icon: 'InputControl_icon_78',
                        icon__search: 'InputControl_icon__search_37',
                        clear: 'InputControl_clear_a8',
                    },
                    Nu = a().memo(
                        ({
                            componentId: u,
                            value: e = '',
                            type: t = pu,
                            size: r = Ru,
                            variant: s = fu,
                            placeholder: o = '',
                            highlighted: i,
                            withClear: l,
                            selectOnFocus: c = !0,
                            isFocused: E,
                            iconSource: A,
                            classMix: d,
                            inputClassMix: F,
                            onMouseEnter: _,
                            onMouseLeave: D,
                            onMouseDown: m,
                            onMouseUp: B,
                            onClick: C,
                            onChange: g,
                            onKeyUp: h,
                            onKeyDown: p,
                            onClear: v,
                            onFocus: w,
                            onBlur: f,
                        }) => {
                            const T = (0, n.useState)(E),
                                x = T[0],
                                S = T[1],
                                R = (0, n.useRef)(null),
                                M = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                y = s !== Tu,
                                O = (0, n.useCallback)(
                                    (u) => {
                                        y && (S(!0), w && w(u));
                                    },
                                    [y, w],
                                ),
                                P = (0, n.useCallback)(
                                    (u) => {
                                        y && !M.current.mouseOver && (S(!1), f && f(u));
                                    },
                                    [y, f],
                                );
                            (0, n.useEffect)(() => {
                                y && x && c && R.current && R.current.select(), x && R.current && R.current.focus();
                            }, [c, x, y]);
                            const L = (0, n.useCallback)(
                                    (u) => {
                                        y && g && g(u.target.value);
                                    },
                                    [y, g],
                                ),
                                I = (0, n.useCallback)(
                                    (u) => {
                                        y && h && h(u);
                                    },
                                    [y, h],
                                ),
                                k = (0, n.useCallback)(
                                    (u) => {
                                        y && p && p(u);
                                    },
                                    [y, p],
                                ),
                                N = (0, n.useCallback)(
                                    (u) => {
                                        y && ((M.current.mouseOver = !0), _ && _(u));
                                    },
                                    [y, _],
                                ),
                                U = (0, n.useCallback)(
                                    (u) => {
                                        y &&
                                            R.current &&
                                            (M.current.mouseDown && R.current.focus(),
                                            (M.current.mouseOver = !1),
                                            D && D(u));
                                    },
                                    [y, D],
                                ),
                                H = (0, n.useCallback)(
                                    (u) => {
                                        y && ((M.current.mouseDown = !0), m && m(u));
                                    },
                                    [y, m],
                                ),
                                G = (0, n.useCallback)(
                                    (u) => {
                                        y && ((M.current.mouseDown = !1), B && B(u));
                                    },
                                    [y, B],
                                ),
                                $ = (0, n.useCallback)(
                                    (u) => {
                                        if (y && R.current) {
                                            (!x || (x && u.target !== R.current)) && R.current.focus(), C && C(u);
                                        }
                                    },
                                    [x, y, C],
                                ),
                                W = Boolean(A),
                                V = b()(
                                    ku.base,
                                    ku[`base__${r}`],
                                    i && ku[`base__${s}`],
                                    x && ku.base__focused,
                                    W && ku.base__withIcon,
                                    d,
                                ),
                                z = (0, n.useMemo)(() => (A ? { backgroundImage: `url(${A})` } : null), [A]),
                                q = b()(ku.input, ku[`input__${t}`], F),
                                j = b()(ku.icon, ku[`icon__${t}`]),
                                Y = b()(ku.placeholder, ku[`placeholder__${t}`]);
                            return a().createElement(
                                'div',
                                {
                                    id: u,
                                    className: V,
                                    onMouseEnter: N,
                                    onMouseDown: H,
                                    onMouseUp: G,
                                    onMouseLeave: U,
                                    onClick: $,
                                },
                                !y && a().createElement('div', { className: ku.disabled }),
                                z && a().createElement('div', { style: z, className: j }),
                                a().createElement('input', {
                                    ref: R,
                                    className: q,
                                    type: Ou[t],
                                    value: e,
                                    onChange: L,
                                    onKeyUp: I,
                                    onKeyDown: k,
                                    disabled: !y,
                                    onFocus: O,
                                    onBlur: P,
                                }),
                                o && !e && a().createElement('div', { className: Y }, o),
                                l && a().createElement('div', { className: ku.clear, onClick: v }),
                            );
                        },
                    ),
                    Uu = {
                        base: 'HelperMessage_base_6b',
                        base__shown: 'HelperMessage_base__shown_10',
                        icon: 'HelperMessage_icon_87',
                        message: 'HelperMessage_message_ef',
                        message__alert: 'HelperMessage_message__alert_4a',
                        message__error: 'HelperMessage_message__error_d6',
                        message__done: 'HelperMessage_message__done_2d',
                        base__small: 'HelperMessage_base__small_d9',
                        base__extraSmall: 'HelperMessage_base__extraSmall_50',
                    },
                    Hu = ({ variant: u, show: e = !0, helperText: t, helperIcon: r, classMix: s }) => {
                        const o = (0, n.useMemo)(() => {
                                const e =
                                    r ||
                                    (function (u) {
                                        return u === xu ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(u);
                                return e && { backgroundImage: `url(${e})` };
                            }, [r, u]),
                            i = uu(['base'], Uu),
                            l = b()(i.base, e && Uu.base__shown),
                            c = b()(Uu.message, Uu[`message__${u}`], s);
                        return a().createElement(
                            'div',
                            { className: l },
                            o && a().createElement('div', { className: Uu.icon, style: o }),
                            a().createElement('div', { className: c }, t),
                        );
                    },
                    Gu = {
                        base: 'Input_base_66',
                        base__small: 'Input_base__small_86',
                        base__medium: 'Input_base__medium_f4',
                        base__large: 'Input_base__large_f9',
                        base__extraMedium: 'Input_base__extraMedium_86',
                        base__extraLarge: 'Input_base__extraLarge_ce',
                        helper: 'Input_helper_ef',
                    },
                    $u = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'isValidated',
                        'showHelper',
                        'error',
                        'isFocused',
                        'options',
                        'onFocus',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onChange',
                        'classMix',
                        'controlClassMix',
                        'helperClassMix',
                    ];
                function Wu() {
                    return (
                        (Wu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Wu.apply(null, arguments)
                    );
                }
                const Vu = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    zu = (u) => {
                        let e = u.componentId,
                            t = u.type,
                            r = void 0 === t ? pu : t,
                            s = u.variant,
                            o = void 0 === s ? fu : s,
                            i = u.size,
                            l = void 0 === i ? Ru : i,
                            c = u.value,
                            E = u.tooltipArgs,
                            A = u.helperText,
                            d = void 0 === A ? '' : A,
                            F = u.isValidated,
                            _ = void 0 === F || F,
                            D = u.showHelper,
                            m = void 0 === D || D,
                            B = u.error,
                            C = u.isFocused,
                            g = u.options,
                            h = u.onFocus,
                            p = u.onMouseEnter,
                            v = u.onMouseLeave,
                            w = u.onMouseUp,
                            f = u.onMouseDown,
                            T = u.onChange,
                            x = u.classMix,
                            S = u.controlClassMix,
                            R = u.helperClassMix,
                            M = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, $u);
                        const y = (0, n.useState)(c),
                            O = y[0],
                            P = y[1],
                            L = (0, n.useState)(_),
                            I = L[0],
                            k = L[1],
                            N = (0, n.useMemo)(() => Object.assign({}, Vu, g), [g]),
                            U = (0, n.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: c, type: r }),
                            H = (0, n.useCallback)((u) => {
                                u !== U.current.value &&
                                    ((U.current.value = u), (U.current.isChangeHandled = !1), P(u));
                            }, []),
                            G = (0, n.useCallback)(
                                (u) => {
                                    let e = !0;
                                    N.performChangeValidation &&
                                        (e = N.changesValidator ? N.changesValidator(u) : Iu(u, U.current.type)),
                                        T && T(u, e);
                                },
                                [T, N],
                            ),
                            $ = (0, n.useCallback)(() => {
                                U.current.debounceTimeout &&
                                    (window.clearTimeout(U.current.debounceTimeout), (U.current.debounceTimeout = 0));
                            }, []),
                            W = (0, n.useCallback)(() => H(''), [H]);
                        (0, n.useEffect)(() => () => $(), [$]);
                        const V = (0, n.useCallback)(
                            (u) => {
                                $(),
                                    N.debounceTime
                                        ? (U.current.debounceTimeout = window.setTimeout(() => {
                                              G(u);
                                          }, N.debounceTime))
                                        : G(u);
                            },
                            [G, $, N.debounceTime],
                        );
                        (0, n.useEffect)(() => {
                            U.current.isChangeHandled ||
                                U.current.value !== O ||
                                (V(U.current.value), (U.current.isChangeHandled = !0));
                        }, [O, V]),
                            (0, n.useEffect)(() => {
                                U.current.isChangeHandled && c !== U.current.value && ((U.current.value = c), P(c)),
                                    (U.current.type = r);
                            }, [c, r]),
                            (0, n.useEffect)(() => {
                                k(_);
                            }, [_, o]);
                        const z = (0, n.useCallback)((u) => p && p(u), [p]),
                            q = (0, n.useCallback)(
                                (u) => {
                                    N.disableHighlightOnFocus && I && k(!1), h && h(u);
                                },
                                [I, h, N.disableHighlightOnFocus],
                            ),
                            j = (0, n.useCallback)((u) => w && w(u), [w]),
                            Y = (0, n.useCallback)((u) => f && f(u), [f]),
                            X = (0, n.useCallback)((u) => v && v(u), [v]),
                            K = (0, n.useMemo)(
                                () =>
                                    N.withTypeIcon
                                        ? (function (u, e) {
                                              return u === bu ? Lu.$dyn(`search_${e}`) : '';
                                          })(r, l)
                                        : '',
                                [r, l, N.withTypeIcon],
                            ),
                            Z = d || Pu[r],
                            Q = Boolean(O),
                            J = B ? Su : o,
                            uu = Boolean(B) || I,
                            eu = (0, n.useMemo)(
                                () => ('boolean' == typeof N.withClear ? Q && N.withClear : Q && r === bu),
                                [r, Q, N],
                            ),
                            tu = b()(Gu.base, Gu[`base__${l}`], Gu[`base__${o}`], x);
                        return a().createElement(
                            'div',
                            { id: e, className: tu, onMouseEnter: z, onMouseDown: Y, onMouseUp: j, onMouseLeave: X },
                            a().createElement(
                                hu,
                                { tooltipArgs: E },
                                a().createElement(
                                    Nu,
                                    Wu(
                                        {
                                            componentId: e ? `${e}-inputControl` : void 0,
                                            iconSource: K,
                                            size: l,
                                            type: r,
                                            variant: J,
                                            value: O,
                                            withClear: eu,
                                            highlighted: uu,
                                            selectOnFocus: N.selectOnFocus,
                                            isFocused: C,
                                            classMix: S,
                                            onFocus: q,
                                            onChange: H,
                                            onClear: W,
                                        },
                                        M,
                                    ),
                                ),
                            ),
                            (m || Boolean(B)) &&
                                a().createElement(
                                    'div',
                                    { className: Gu.helper },
                                    a().createElement(Hu, {
                                        variant: J,
                                        show: m && N.isPermanentHelper,
                                        helperText: B || Z,
                                        helperIcon: N.helperIconSource,
                                        classMix: R,
                                    }),
                                ),
                        );
                    };
                var qu = t(613);
                const ju = 24,
                    Yu = 60,
                    Xu = 60 * Yu,
                    Ku = ju * Xu;
                Date.now(), qu.Ew.getRegionalDateTime, qu.Ew.getFormattedDateTime;
                function Zu(u = 0) {
                    let e = u;
                    const t = Math.trunc(e / Ku);
                    e -= t * Ku;
                    const n = Math.trunc(e / Xu);
                    e -= n * Xu;
                    const a = Math.trunc(e / Yu);
                    return (e -= a * Yu), { days: t, hours: n, minutes: a, seconds: e };
                }
                const Qu = (u) =>
                        u.days > 7
                            ? q(R.strings.common.duration.days(), { days: u.days })
                            : u.days >= 1
                              ? 0 === u.hours
                                  ? q(R.strings.common.duration.days(), { days: u.days })
                                  : `${q(R.strings.common.duration.days(), { days: u.days })} ${q(R.strings.common.duration.hours(), { hours: u.hours })}`
                              : u.hours >= 1
                                ? 0 === u.minutes
                                    ? q(R.strings.common.duration.hours(), { hours: u.hours })
                                    : `${q(R.strings.common.duration.hours(), { hours: u.hours })} ${q(R.strings.common.duration.minutes(), { minutes: u.minutes })} ${q(R.strings.common.duration.seconds(), { seconds: u.seconds })}`
                                : u.minutes >= 1
                                  ? 0 === u.minutes
                                      ? q(R.strings.common.duration.seconds(), { seconds: u.seconds })
                                      : 0 === u.seconds
                                        ? `${q(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                                        : `${q(R.strings.common.duration.minutes(), { minutes: u.minutes })} ${q(R.strings.common.duration.seconds(), { seconds: u.seconds })}`
                                  : q(R.strings.common.duration.seconds(), { seconds: u.seconds }),
                    Ju = 'FormatText_base_d0',
                    ue = ({ binding: u, text: e = '', classMix: t, alignment: r = z.left, formatWithBrackets: s }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const o = s && u ? q(e, u) : e;
                        return a().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((e, s) =>
                                a().createElement(
                                    'div',
                                    { className: b()(Ju, t), key: `${e}-${s}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : J(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => a().createElement(n.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    ee = 'FieldError_base_02',
                    te = 'FieldError_base__show_46',
                    ne = ({ isShow: u, text: e, binding: t, className: n }) =>
                        a().createElement(ue, { classMix: b()(ee, n, u && te), text: e || '', binding: t });
                let ae;
                const re = (u, e) => {
                        const t = (0, n.useState)(u),
                            a = t[0],
                            r = t[1],
                            s = e || (u > 2 * Yu ? Yu : 1);
                        return (
                            (0, n.useEffect)(() => {
                                ae = performance.now();
                            }, []),
                            (0, n.useEffect)(() => {
                                (ae = performance.now()), r(u);
                            }, [u]),
                            (0, n.useEffect)(() => {
                                let u;
                                return (
                                    a > 0 &&
                                        (u = setTimeout(() => {
                                            const u = Math.max(Math.trunc((performance.now() - ae) / 1e3), 1),
                                                e = Math.max(a - u, 0);
                                            (ae = performance.now()), r(e);
                                        }, 1e3 * s)),
                                    () => clearTimeout(u)
                                );
                            }, [a, r, s]),
                            a
                        );
                    },
                    se = 'ErrorTimer_inner_57',
                    oe = (0, n.memo)(({ errorMessage: u, errorTime: e, onCleanError: t }) => {
                        const r = re(e, 1),
                            s = r > 0,
                            o = (0, n.useMemo)(
                                () => ({ timer: a().createElement('div', { className: se }, Qu(Zu(r))) }),
                                [r],
                            );
                        return s || t(), a().createElement(ne, { isShow: s, text: u, binding: o });
                    }),
                    ie = 'EmailField_base_7b',
                    le = 'EmailField_name_3d';
                function ce() {
                    return !1;
                }
                console.log;
                var Ee = t(174);
                function Ae(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return de(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? de(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var n = 0;
                        return function () {
                            return n >= u.length ? { done: !0 } : { done: !1, value: u[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function de(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const Fe = (u) => (0 === u ? window : window.subViews.get(u));
                const _e = () => (u, e) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: s, children: o, mocks: i }) {
                                const c = (0, n.useRef)([]),
                                    E = (t, n, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = Fe,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? a.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = a.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const s = (u) => {
                                                    const a = t(e),
                                                        r = n.split('.').reduce((u, e) => u[e], a);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? r
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const o = 'string' == typeof r ? `${n}.${r}` : n,
                                                            i = l.O.view.addModelObserver(o, e, !0);
                                                        return a.set(i, t), u && t(s(r)), i;
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
                                                        for (var u, t = Ae(a.keys()); !(u = t()).done; ) r(u.value, e);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(u)) : o.readByPath(u),
                                            E = (u) => c.current.push(u),
                                            A = u({
                                                mode: t,
                                                readByPath: i,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const n = null != e ? e : i(u),
                                                            a = Ee.LO.box(n, { equals: ce });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Ee.aD)((u) => a.set(u)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const n = null != e ? e : i(u),
                                                            a = Ee.LO.box(n, { equals: ce });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Ee.aD)((u) => a.set(u)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const n = i(e);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (u, e) => ((u[e] = Ee.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Ee.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                a[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = u,
                                                                r = Object.entries(a),
                                                                s = r.reduce(
                                                                    (u, [e, t]) => ((u[t] = Ee.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Ee.aD)((u) => {
                                                                            r.forEach(([e, t]) => {
                                                                                s[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            d = { mode: t, model: A, externalModel: o, cleanup: E };
                                        return {
                                            model: A,
                                            controls: 'mocks' === t && a ? a.controls(d) : e(d),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    A = (0, n.useRef)(!1),
                                    d = (0, n.useState)(r),
                                    F = d[0],
                                    _ = d[1],
                                    D = (0, n.useState)(() => E(r, s, i)),
                                    m = D[0],
                                    B = D[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        A.current ? B(E(F, s, i)) : (A.current = !0);
                                    }, [i, F, s]),
                                    (0, n.useEffect)(() => {
                                        _(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            m.externalModel.dispose(), c.current.forEach((u) => u());
                                        },
                                        [m],
                                    ),
                                    a().createElement(t.Provider, { value: m }, o)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    },
                    De = _e()(
                        ({ observableModel: u }) => ({ root: u.object() }),
                        ({ externalModel: u }) => ({
                            handleErrorTimerExpired: u.createCallbackNoArgs('onErrorTimer'),
                            change: u.createCallback((u) => ({ value: u }), 'onChange'),
                            lostFocus: u.createCallbackNoArgs('onLostFocus'),
                        }),
                    ),
                    me = De[0],
                    Be = De[1];
                function Ce() {
                    return (
                        (Ce = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Ce.apply(null, arguments)
                    );
                }
                const ge = { debounceTime: 0 },
                    he = (0, U.Pi)(({ isErrorVisible: u = !0, isFocused: e = !0, className: t, onFocusChange: r }) => {
                        const s = Be(),
                            o = s.model,
                            i = s.controls,
                            l = o.root.get(),
                            c = l.name,
                            E = l.value,
                            A = l.errorMessage,
                            d = l.errorTime,
                            F = l.placeholder,
                            _ = S().mediaSize,
                            D = (0, n.useRef)(E),
                            m = ((u, e, t) => {
                                const a = (0, n.useRef)(u);
                                return (
                                    (0, n.useEffect)(() => {
                                        a.current !== u && ((a.current = u), u || e());
                                    }, [u, e]),
                                    {
                                        onFocus: (0, n.useCallback)(() => t(!0), [t]),
                                        onBlur: (0, n.useCallback)(() => t(!1), [t]),
                                        isFocused: u,
                                    }
                                );
                            })(e, i.lostFocus, r),
                            B = Boolean(d),
                            C = (function (u) {
                                const e = (0, n.useRef)(u);
                                return (
                                    (0, n.useLayoutEffect)(() => {
                                        e.current = u;
                                    }),
                                    (0, n.useCallback)((...u) => (0, e.current)(...u), iu)
                                );
                            })((u) => {
                                const e = u.trim();
                                e !== D.current && ((D.current = e), i.change(e));
                            });
                        return a().createElement(
                            'div',
                            { className: b()(ie, t) },
                            c && a().createElement('div', { className: le }, c),
                            a().createElement(
                                zu,
                                Ce(
                                    {
                                        key: `field_${e}`,
                                        size: _ < f.Medium ? Mu : yu,
                                        value: D.current,
                                        isValidated: !1,
                                        placeholder: F || '',
                                        onChange: C,
                                        error: B ? '' : A,
                                        variant: B ? Su : fu,
                                        options: ge,
                                    },
                                    m,
                                ),
                            ),
                            B &&
                                u &&
                                a().createElement(oe, {
                                    errorMessage: A,
                                    errorTime: d,
                                    onCleanError: i.handleErrorTimerExpired,
                                }),
                        );
                    }),
                    pe = 'Title_base_eb',
                    be = 'Title_icon_01',
                    ve = 'Title_title_9f',
                    we = 'Title_br_3d',
                    fe = 'Title_subTitle_af',
                    Te = 'Title_subTitleText_a7',
                    xe = 'Title_subTitleIcon_57',
                    Se = ({ title: u, subTitle: e, iconOverlay: t }) =>
                        a().createElement(
                            'div',
                            { className: pe },
                            a().createElement('div', { className: be }, t),
                            a().createElement('div', { className: ve }, u),
                            Boolean(e) &&
                                a().createElement(
                                    'div',
                                    { className: fe },
                                    a().createElement(
                                        Au,
                                        {
                                            contentId:
                                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                    'resId',
                                                ),
                                            decoratorId:
                                                R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                            args: { tooltipId: 'TOOLTIP_SUBTITLE_ID' },
                                        },
                                        a().createElement(
                                            'div',
                                            null,
                                            a().createElement(ue, {
                                                classMix: Te,
                                                text: e || '',
                                                binding: {
                                                    emailIcon: a().createElement('div', { className: xe }),
                                                    br: a().createElement('div', { className: we }),
                                                },
                                            }),
                                        ),
                                    ),
                                ),
                        ),
                    Re = {
                        base: 'WarningMessage_base_b9',
                        fadeIn: 'WarningMessage_fadeIn_76',
                        icon: 'WarningMessage_icon_3e',
                        showIn: 'WarningMessage_showIn_39',
                        showOut: 'WarningMessage_showOut_a8',
                        fadeOut: 'WarningMessage_fadeOut_a2',
                        windowIn: 'WarningMessage_windowIn_c5',
                    },
                    Me = (0, n.memo)(({ text: u, className: e, countDown: t = 0, onCountDownComplete: r }) => {
                        const s = re(t, 1);
                        return (
                            (0, n.useEffect)(() => {
                                t > 0 && 0 === s && r && r();
                            }, [t, s, r]),
                            a().createElement(
                                'div',
                                { className: e },
                                a().createElement(ue, {
                                    classMix: Re.base,
                                    text: u,
                                    binding: {
                                        icon: a().createElement('div', { className: Re.icon }),
                                        time: a().createElement('div', { className: Re.inner }, Qu(Zu(s))),
                                    },
                                }),
                            )
                        );
                    }),
                    ye = (u, e, t) => {
                        const n = (u + e) % t;
                        return n < 0 ? t + n : n;
                    };
                let Oe, Pe, Le, Ie, ke, Ne, Ue, He;
                !(function (u) {
                    (u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.Tankman = 'tankman'),
                        (u.Tankwoman = 'tankwoman'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.DeluxeGift = 'deluxe_gift'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.OptionalDevice = 'optionalDevice'),
                        (u.EquipCoin = 'equipCoin'),
                        (u.LootBox = 'lootBox'),
                        (u.BrCoin = 'brcoin');
                })(Oe || (Oe = {})),
                    (function (u) {
                        (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement'),
                            (u.EquipCoin = 'equipCoin');
                    })(Pe || (Pe = {})),
                    (function (u) {
                        (u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S64x64 = 's64x64'),
                            (u.S48x48 = 's48x48');
                    })(Le || (Le = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(Ie || (Ie = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(ke || (ke = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(Ne || (Ne = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Ue || (Ue = {})),
                    (function (u) {
                        (u[(u.Engraving = 0)] = 'Engraving'), (u[(u.Background = 1)] = 'Background');
                    })(He || (He = {}));
                class Ge extends a().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = G.B3.GOLD;
                        else u = G.B3.INTEGRAL;
                        const e = G.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                Ge.defaultProps = { format: 'integral' };
                const $e = [
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
                    We = [Oe.Gold, Oe.Credits, Oe.Crystal, Oe.FreeXp],
                    Ve = [Oe.BattlePassPoints, Oe.EquipCoin],
                    ze = [Oe.PremiumPlus, Oe.Premium],
                    qe = ['engravings', 'backgrounds'],
                    je = ['engraving', 'background'],
                    Ye = (u, e = Le.Small) => {
                        const t = u.name,
                            n = u.type,
                            a = u.value,
                            r = u.icon,
                            s = u.item,
                            o = u.dogTagType,
                            i = ((u) => {
                                switch (u) {
                                    case Le.S600x450:
                                        return 'c_600x450';
                                    case Le.S400x300:
                                        return 'c_400x300';
                                    case Le.S296x222:
                                        return 'c_296x222';
                                    case Le.S232x174:
                                        return 'c_232x174';
                                    case Le.Big:
                                        return 'c_80x80';
                                    case Le.Small:
                                        return 'c_48x48';
                                    default:
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${r}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === e
                                    ? u.iconBig.replace('..', 'img://gui')
                                    : u.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${r}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const n = qe[u];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(n),
                                            r = a.$dyn(t);
                                        return r ? `${r}` : `${a.$dyn(je[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, e, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    Xe = (u, e, t) => {
                        const n = e && { contentId: e };
                        return Object.assign(
                            {
                                args: u,
                                isEnabled: Boolean((u && u.tooltipId) || e),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !e,
                            },
                            n,
                            t,
                        );
                    },
                    Ke = [Le.Small, Le.Big];
                var Ze = t(946);
                const Qe = _e()(
                        ({ observableModel: u }) => {
                            const e = {
                                    root: u.object(),
                                    bonuses: u.array('bonuses'),
                                    emailErrorMessage: u.primitives(['errorMessage'], 'email').errorMessage,
                                },
                                t = (0, Ze.Om)((u) => {
                                    return (
                                        (t = e.bonuses.get()),
                                        (n = (e) =>
                                            ((u, e) => {
                                                return {
                                                    name: u.name,
                                                    image: Ye(u, Le.Big),
                                                    special: u.overlayType,
                                                    value: u.value,
                                                    valueType:
                                                        ((t = u.name),
                                                        $e.includes(t)
                                                            ? Ie.MULTI
                                                            : We.includes(t)
                                                              ? Ie.CURRENCY
                                                              : Ve.includes(t)
                                                                ? Ie.NUMBER
                                                                : ze.includes(t)
                                                                  ? Ie.PREMIUM_PLUS
                                                                  : Ie.STRING),
                                                    tooltipArgs: Xe({
                                                        tooltipId: 'TOOLTIP_REWARD_ID',
                                                        rewardTooltipID: e ? `${e}:${u.index}` : '',
                                                    }),
                                                };
                                                var t;
                                            })(e, u)),
                                        Array.isArray(t)
                                            ? t.map(n)
                                            : t.map((u, e, t) => n(null == u ? void 0 : u.value, e, t))
                                    );
                                    var t, n;
                                }),
                                n = (0, Ze.Om)(
                                    () => ({ emailFieldIndex: 0, confirmButtonIndex: 1, laterButtonIndex: 2 }),
                                    { equals: Ee.p6.shallow },
                                );
                            return Object.assign({}, e, { computes: { rewards: t, interactiveElementsIndexes: n } });
                        },
                        ({ externalModel: u }) => ({
                            confirm: u.createCallbackNoArgs('onConfirmClicked'),
                            close: u.createCallbackNoArgs('onCloseClicked'),
                            escape: u.createCallbackNoArgs('onEscapePressed'),
                            warningTimer: u.createCallbackNoArgs('onWarningTimer'),
                        }),
                    ),
                    Je = Qe[0],
                    ut = Qe[1];
                let et, tt;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(et || (et = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(tt || (tt = {}));
                const nt = {
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
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: n = Le.Big,
                        special: r,
                        value: s,
                        valueType: o,
                        title: i,
                        style: l,
                        className: c,
                        classNames: E,
                        tooltipArgs: A,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const F = ((u, e) => {
                                if (void 0 === e || !Ke.includes(u)) return null;
                                switch (e) {
                                    case ke.BATTLE_BOOSTER:
                                    case ke.BATTLE_BOOSTER_REPLACE:
                                        return Ne.BATTLE_BOOSTER;
                                }
                            })(n, r),
                            _ = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case ke.BATTLE_BOOSTER:
                                        return Ue.BATTLE_BOOSTER;
                                    case ke.BATTLE_BOOSTER_REPLACE:
                                        return Ue.BATTLE_BOOSTER_REPLACE;
                                    case ke.BUILT_IN_EQUIPMENT:
                                        return Ue.BUILT_IN_EQUIPMENT;
                                    case ke.EQUIPMENT_PLUS:
                                        return Ue.EQUIPMENT_PLUS;
                                    case ke.EQUIPMENT_TROPHY_BASIC:
                                        return Ue.EQUIPMENT_TROPHY_BASIC;
                                    case ke.EQUIPMENT_TROPHY_UPGRADED:
                                        return Ue.EQUIPMENT_TROPHY_UPGRADED;
                                    case ke.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Ue.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ke.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Ue.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ke.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Ue.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ke.PROGRESSION_STYLE_UPGRADED_1:
                                        return Ue.PROGRESSION_STYLE_UPGRADED_1;
                                    case ke.PROGRESSION_STYLE_UPGRADED_2:
                                        return Ue.PROGRESSION_STYLE_UPGRADED_2;
                                    case ke.PROGRESSION_STYLE_UPGRADED_3:
                                        return Ue.PROGRESSION_STYLE_UPGRADED_3;
                                    case ke.PROGRESSION_STYLE_UPGRADED_4:
                                        return Ue.PROGRESSION_STYLE_UPGRADED_4;
                                    case ke.PROGRESSION_STYLE_UPGRADED_5:
                                        return Ue.PROGRESSION_STYLE_UPGRADED_5;
                                    case ke.PROGRESSION_STYLE_UPGRADED_6:
                                        return Ue.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(r),
                            D = ((u, e) => {
                                if (void 0 === u) return null;
                                switch (e) {
                                    case Ie.MULTI: {
                                        const e = Number(u);
                                        return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                    }
                                    case Ie.CURRENCY:
                                    case Ie.NUMBER:
                                        return a().createElement(Ge, { format: 'integral', value: Number(u) });
                                    case Ie.PREMIUM_PLUS: {
                                        const e = Number(u);
                                        return isNaN(e) ? u : null;
                                    }
                                    default:
                                        return u;
                                }
                            })(s, o);
                        return a().createElement(
                            'div',
                            { className: b()(nt.base, nt[`base__${n}`], c), style: l },
                            a().createElement(
                                hu,
                                { tooltipArgs: A, className: nt.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: b()(nt.image, null == E ? void 0 : E.image) },
                                        F &&
                                            a().createElement('div', {
                                                className: b()(nt.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${F}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            a().createElement('div', {
                                                className: b()(nt.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        _ &&
                                            a().createElement('div', {
                                                className: b()(nt.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    D &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    nt.info,
                                                    nt[`info__${u}`],
                                                    o === Ie.MULTI && nt.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            D,
                                        ),
                                    i && a().createElement('div', { className: nt.title }, i),
                                ),
                            ),
                            t &&
                                a().createElement(
                                    hu,
                                    { tooltipArgs: d },
                                    a().createElement('div', {
                                        className: b()(nt.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    rt = 'Rewards_base_26',
                    st = 'Rewards_base__vertical_9f',
                    ot = 'Rewards_reward_7b',
                    it = 'Rewards_reward__vertical_c6';
                function lt() {
                    return (
                        (lt = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        lt.apply(null, arguments)
                    );
                }
                const ct = a().memo(
                        ({
                            data: u,
                            size: e = Le.Big,
                            isVertical: t = !1,
                            count: r,
                            classMix: s,
                            rewardItemClassMix: o,
                            boxRewardTooltip: i,
                            boxRewardValue: l,
                            boxRewardClassName: c,
                            boxRewardClassNames: E,
                        }) => {
                            const A = (0, n.useMemo)(
                                    () =>
                                        r && r < u.length ? `R.images.gui.maps.icons.quests.bonuses.${e}.default` : '',
                                    [r, u.length, e],
                                ),
                                d =
                                    l ||
                                    ((F = R.strings.tooltips.quests.awards.additional.bottom()),
                                    (_ = { count: u.length - (r || 0) }),
                                    F.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                        const e = 0 === u.indexOf('%') ? 2 : 1;
                                        return String(_[u.slice(e, -e)]);
                                    }));
                            var F, _;
                            const D = b()(rt, t && st, s),
                                m = b()(ot, t && it, o);
                            return a().createElement(
                                'div',
                                { className: D },
                                A
                                    ? a().createElement(
                                          a().Fragment,
                                          null,
                                          u
                                              .slice(0, r)
                                              .map((u, t) =>
                                                  a().createElement(
                                                      'div',
                                                      { key: t, className: m },
                                                      a().createElement(at, lt({ size: e }, u)),
                                                  ),
                                              ),
                                          a().createElement(
                                              'div',
                                              { className: m },
                                              a().createElement(at, {
                                                  name: 'more',
                                                  image: A,
                                                  size: e,
                                                  value: d,
                                                  tooltipArgs: i,
                                                  className: c,
                                                  classNames: E,
                                              }),
                                          ),
                                      )
                                    : u.map((u, t) =>
                                          a().createElement(
                                              'div',
                                              { key: t, className: m },
                                              a().createElement(at, lt({ size: e }, u)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    Et = {
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
                    },
                    At = ({
                        children: u,
                        size: e,
                        isFocused: t,
                        type: r,
                        disabled: s,
                        mixClass: o,
                        soundHover: i,
                        soundClick: l,
                        onMouseEnter: c,
                        onMouseDown: E,
                        onMouseUp: A,
                        onMouseLeave: d,
                        onClick: F,
                        onFocusChange: _,
                    }) => {
                        const D = (0, n.useRef)(null),
                            m = (0, n.useState)(!1),
                            B = m[0],
                            C = m[1],
                            g = (0, n.useState)(!1),
                            h = g[0],
                            p = g[1],
                            v = (0, n.useCallback)(() => {
                                s || (D.current && (D.current.focus(), _ && _(!0)));
                            }, [s, _]),
                            w = (0, n.useCallback)(
                                (u) => {
                                    t && null !== D.current && !D.current.contains(u.target) && _ && _(!1);
                                },
                                [t, _],
                            ),
                            f = (0, n.useCallback)(
                                (u) => {
                                    s || (F && F(u));
                                },
                                [s, F],
                            ),
                            T = (0, n.useCallback)(
                                (u) => {
                                    s || (null !== i && eu(i), c && c(u), p(!0));
                                },
                                [s, i, c],
                            ),
                            x = (0, n.useCallback)(
                                (u) => {
                                    s || (A && A(u), C(!1));
                                },
                                [s, A],
                            ),
                            S = (0, n.useCallback)(
                                (u) => {
                                    s || (null !== l && eu(l), E && E(u), t && v(), C(!0));
                                },
                                [s, l, E, v, t],
                            ),
                            M = (0, n.useCallback)(
                                (u) => {
                                    s || (d && d(u), C(!1));
                                },
                                [s, d],
                            ),
                            y = b()(
                                Et.base,
                                Et[`base__${r}`],
                                {
                                    [Et.base__disabled]: s,
                                    [Et[`base__${e}`]]: e,
                                    [Et.base__focus]: t,
                                    [Et.base__highlightActive]: B,
                                    [Et.base__firstHover]: h,
                                },
                                o,
                            ),
                            O = b()(Et.state, Et.state__default);
                        return (
                            (0, n.useEffect)(
                                () => (
                                    document.addEventListener('mousedown', w),
                                    () => {
                                        document.removeEventListener('mousedown', w);
                                    }
                                ),
                                [w],
                            ),
                            a().createElement(
                                'div',
                                {
                                    ref: D,
                                    className: y,
                                    onMouseEnter: T,
                                    onMouseUp: x,
                                    onMouseDown: S,
                                    onMouseLeave: M,
                                    onClick: f,
                                },
                                r !== et.ghost &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: Et.back }),
                                        a().createElement('span', { className: Et.texture }),
                                    ),
                                a().createElement(
                                    'span',
                                    { className: O },
                                    a().createElement('span', { className: Et.stateDisabled }),
                                    a().createElement('span', { className: Et.stateHighlightHover }),
                                    a().createElement('span', { className: Et.stateHighlightActive }),
                                ),
                                a().createElement(
                                    'span',
                                    { className: Et.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    u,
                                ),
                            )
                        );
                    };
                At.defaultProps = { type: et.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const dt = (0, n.memo)(At),
                    Ft = 'Footer_base_b5',
                    _t = 'Footer_rewards_de',
                    Dt = 'Footer_rewardsTitle_88',
                    mt = 'Footer_reward_7c',
                    Bt = 'Footer_button_ac',
                    Ct = (0, U.Pi)(({ onConfirm: u, focusingItems: e }) => {
                        const t = ut(),
                            n = t.model,
                            r = t.controls,
                            s = n.root.get(),
                            o = s.rewardsTitle,
                            i = s.questID,
                            l = s.isConfirmEnabled,
                            c = n.computes.interactiveElementsIndexes(),
                            E = c.confirmButtonIndex,
                            A = c.laterButtonIndex,
                            d = n.computes.rewards(i);
                        return (
                            (e[E].canFocusToken.value = l),
                            a().createElement(
                                'div',
                                { className: Ft },
                                a().createElement(
                                    'div',
                                    { className: _t },
                                    a().createElement('div', { className: Dt }, o),
                                    a().createElement(ct, { data: d, rewardItemClassMix: mt }),
                                ),
                                a().createElement(
                                    dt,
                                    {
                                        mixClass: Bt,
                                        onClick: u,
                                        size: tt.medium,
                                        type: et.main,
                                        isFocused: e[E].isFocused,
                                        onFocusChange: e[E].onFocusChange,
                                        disabled: !l,
                                    },
                                    R.strings.dialogs.accountCompletion.add(),
                                ),
                                a().createElement(
                                    dt,
                                    {
                                        mixClass: Bt,
                                        onClick: r.close,
                                        size: tt.medium,
                                        type: et.ghost,
                                        isFocused: e[A].isFocused,
                                        onFocusChange: e[A].onFocusChange,
                                    },
                                    R.strings.dialogs.accountCompletion.later(),
                                ),
                            )
                        );
                    }),
                    gt = 'AddCredentialsViewApp_base_06',
                    ht = 'AddCredentialsViewApp_spacer_fa',
                    pt = 'AddCredentialsViewApp_content_d1',
                    bt = 'AddCredentialsViewApp_field_a4',
                    vt = 'AddCredentialsViewApp_warningBox_bb',
                    wt = 'AddCredentialsViewApp_warning_06';
                function ft() {
                    return (
                        (ft = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        ft.apply(null, arguments)
                    );
                }
                const Tt = {
                        rootId: R.views.lobby.account_completion.AddCredentialsView('resId'),
                        context: 'model.email',
                    },
                    xt = (0, U.Pi)(() => {
                        const u = ut(),
                            e = u.model,
                            t = u.controls,
                            r = e.root.get(),
                            s = r.title,
                            o = r.subTitle,
                            i = r.isTitleOnly,
                            l = r.warningCountdown,
                            c = r.isConfirmEnabled,
                            E = r.warningText,
                            A = r.isCloseVisible,
                            d = r.isHidden,
                            F = e.emailErrorMessage.get(),
                            _ = ((u = 2) => {
                                const e = (0, n.useState)(0),
                                    t = e[0],
                                    a = e[1],
                                    r = (0, n.useMemo)(() => new Array(u).fill(null).map(() => ({ value: !0 })), [u]),
                                    s = (0, n.useCallback)(
                                        (e) => {
                                            let n = ye(t, e, u);
                                            for (; n !== t; ) {
                                                if (r[n].value) {
                                                    a(n);
                                                    break;
                                                }
                                                n = ye(n, e, u);
                                            }
                                        },
                                        [u, t, r],
                                    ),
                                    o = (0, n.useMemo)(
                                        () =>
                                            r.map((u, e) => ({
                                                canFocusToken: u,
                                                isFocused: e === t,
                                                onFocusChange: (u) => {
                                                    u ? a(e) : t === e && a(-1);
                                                },
                                                dropFocus: () => a(-1),
                                            })),
                                        [r, t],
                                    ),
                                    i = (0, n.useCallback)(
                                        (u) => {
                                            s(u.shiftKey ? -1 : 1);
                                        },
                                        [s],
                                    );
                                return W(H.n.TAB, i), o;
                            })(3),
                            D = e.computes.interactiveElementsIndexes().emailFieldIndex,
                            m = (0, n.useRef)(!0),
                            B = (0, n.useCallback)(() => {
                                c && ((m.current = !0), t.confirm(), _[0].dropFocus());
                            }, [c, t, _]);
                        ((u) => {
                            const e = (0, n.useCallback)(
                                (e) => {
                                    !e.altKey && u && u();
                                },
                                [u],
                            );
                            W(H.n.ENTER, e, !0);
                        })(B);
                        (0, n.useEffect)(() => {
                            m.current && F && ((m.current = !1), _[D].onFocusChange(!0));
                        }, [_, F, D]);
                        const C = '' !== E;
                        return a().createElement(
                            ou,
                            {
                                isCloseVisible: A,
                                onEscapePressed: t.escape,
                                onCloseClicked: t.close,
                                isHidden: d,
                                escapeHandler: () => !!_[D].isFocused && (_[0].dropFocus(), !0),
                            },
                            a().createElement(
                                'div',
                                { className: gt },
                                a().createElement('div', { className: ht }),
                                a().createElement(Se, { title: s, subTitle: o }),
                                !i &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(
                                            'div',
                                            { className: pt },
                                            a().createElement(
                                                me,
                                                { options: Tt },
                                                a().createElement(
                                                    he,
                                                    ft({}, _[D], { className: bt, isErrorVisible: !C }),
                                                ),
                                            ),
                                            a().createElement(
                                                'div',
                                                { className: vt },
                                                Boolean(E) &&
                                                    a().createElement(Me, {
                                                        text: E,
                                                        countDown: l,
                                                        className: wt,
                                                        onCountDownComplete: t.warningTimer,
                                                    }),
                                            ),
                                        ),
                                        a().createElement(Ct, { focusingItems: _, onConfirm: B }),
                                    ),
                            ),
                        );
                    });
                var St;
                ((St = 'AddCredentialsView'),
                (u, e, t) => {
                    engine.whenReady.then(() => {
                        s().render(a().createElement(o, { name: St }, u), e, t);
                    });
                })(
                    a().createElement(
                        Je,
                        { options: { rootId: R.views.lobby.account_completion.AddCredentialsView('resId') } },
                        a().createElement(N, null, a().createElement(xt, null)),
                    ),
                    document.getElementById('root'),
                );
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
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var a = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [e, t, n] = deferred[i], r = !0, s = 0; s < e.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[s]))
                            ? e.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [e, t, n];
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
        (__webpack_require__.j = 33),
        (() => {
            var u = { 33: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, s, o] = t,
                        i = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); i < r.length; i++)
                        (a = r[i]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [235], () => __webpack_require__(631));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
