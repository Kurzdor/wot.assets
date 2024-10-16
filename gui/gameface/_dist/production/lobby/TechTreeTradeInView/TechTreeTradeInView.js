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
            887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            768: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => Q });
                var a = {};
                u.r(a),
                    u.d(a, { mouse: () => E, off: () => m, on: () => _, onResize: () => l, onScaleUpdated: () => c });
                var n = {};
                u.r(n),
                    u.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => A,
                        getSize: () => b,
                        graphicsQuality: () => g,
                        playSound: () => p,
                        setRTPC: () => h,
                    });
                var r = {};
                u.r(r), u.d(r, { getBgUrl: () => F, getTextureUrl: () => f });
                var i = {};
                function s(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.r(i),
                    u.d(i, {
                        addModelObserver: () => L,
                        addPreloadTexture: () => T,
                        children: () => r,
                        displayStatus: () => B,
                        displayStatusIs: () => Y,
                        events: () => y,
                        extraSize: () => K,
                        forceTriggerMouseMove: () => j,
                        freezeTextureBeforeResize: () => H,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => q,
                        getScale: () => V,
                        getSize: () => k,
                        getViewGlobalPosition: () => P,
                        isEventHandled: () => X,
                        isFocused: () => G,
                        pxToRem: () => W,
                        remToPx: () => $,
                        resize: () => O,
                        sendEvent: () => S,
                        setAnimateWindow: () => U,
                        setEventHandled: () => z,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => R,
                        whenTutorialReady: () => Z,
                    });
                const l = s('clientResized'),
                    c = s('self.onScaleUpdated'),
                    _ = (e, t) => engine.on(e, t),
                    m = (e, t) => engine.off(e, t),
                    d = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') },
                    E = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && o(!1);
                        }
                        function u() {
                            e.enabled && o(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', u))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', u))
                                : o(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${t}`,
                                            i = d[t]((e) => u([e, 'outside']));
                                        function s(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            a(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(r, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(u)),
                                t
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
                                e.enabled && o(!0);
                            },
                            disableOutside() {
                                e.enabled && o(!1);
                            },
                        });
                    })();
                function p(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function h(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const g = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    v = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    C = Object.keys(v).reduce((e, t) => ((e[t] = () => p(v[t])), e), {}),
                    D = { play: Object.assign({}, C, { sound: p }), setRTPC: h };
                function f(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function F(e, t, u) {
                    return `url(${f(e, t, u)})`;
                }
                const B = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    y = {
                        onTextureFrozen: s('self.onTextureFrozen'),
                        onTextureReady: s('self.onTextureReady'),
                        onDomBuilt: s('self.onDomBuilt'),
                        onLoaded: s('self.onLoaded'),
                        onDisplayChanged: s('self.onShowingStatusChanged'),
                        onFocusUpdated: s('self.onFocusChanged'),
                        children: {
                            onAdded: s('children.onAdded'),
                            onLoaded: s('children.onLoaded'),
                            onRemoved: s('children.onRemoved'),
                            onAttached: s('children.onAttached'),
                            onTextureReady: s('children.onTextureReady'),
                            onRequestPosition: s('children.requestPosition'),
                        },
                    },
                    w = ['args'],
                    N = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            u[a] = e[a];
                                        }
                                    return u;
                                })(t, w);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    S = {
                        close(e) {
                            N('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            N(64);
                        },
                        move(e) {
                            N(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    x = 15;
                function T(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, x);
                }
                function M(e, t, u, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, a);
                }
                function L(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, x);
                }
                function k(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function O(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function P(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: $(t.x), y: $(t.y) };
                }
                function H() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function V() {
                    return viewEnv.getScale();
                }
                function W(e) {
                    return viewEnv.pxToRem(e);
                }
                function $(e) {
                    return viewEnv.remToPx(e);
                }
                function U(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function G() {
                    return viewEnv.isFocused();
                }
                function z() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function j() {
                    viewEnv.forceTriggerMouseMove();
                }
                function q() {
                    return viewEnv.getShowingStatus();
                }
                const Y = Object.keys(B).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === B[t]), e), {}),
                    K = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    Z = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : y.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Q = { view: i, client: n, sound: D };
            },
            521: (e, t, u) => {
                'use strict';
                let a, n;
                u.d(t, { n: () => a }),
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
            368: () => {
                !(function () {
                    let e,
                        t,
                        u,
                        a,
                        n,
                        r,
                        i,
                        s = -1;
                    document.addEventListener('mousedown', (u) => {
                        document.getSelection().empty(),
                            u.target.select &&
                                -1 === s &&
                                ((e = u.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (u) => {
                            if ((-1 === s && u.target.select && u.target === e && (s = e.selectionStart), s > -1)) {
                                const a = Math.min(Math.max(u.x, t.left), t.right),
                                    n = Math.min(Math.max(u.y, t.top), t.bottom),
                                    r = document.createEvent('MouseEvent');
                                r.initMouseEvent('mousedown', !0, !0, null, 1, a, n, a, n, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(r);
                                const i = e.selectionEnd;
                                i > s ? e.setSelectionRange(s, i, 'forward') : e.setSelectionRange(i, s, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (s = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (u = e.target),
                                (a = e.target.value),
                                (n = u.selectionStart),
                                (r = -1 !== a.lastIndexOf(' ', n) ? a.lastIndexOf(' ', n) + 1 : 0),
                                (i = -1 !== a.indexOf(' ', n) ? a.indexOf(' ', n) : a.length),
                                u.setSelectionRange(r, i, 'forward'));
                        });
                })(),
                    (function () {
                        let e = null;
                        document.addEventListener('mousedown', (t) => {
                            document.getSelection().empty(),
                                0 !== t.button ||
                                    t.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(t.x, t.y));
                        }),
                            document.addEventListener('mousemove', (t) => {
                                if (0 === t.button && !t.target.select && e) {
                                    const u = document.caretPositionFromPoint(t.x, t.y);
                                    if (!u.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, u.offsetNode, u.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            });
                    })();
            },
            358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var a = u(768);
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
                    addCallback(e, t, u = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, u, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const a = this._callbacks[u];
                            void 0 !== a && a(e, t);
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
            916: (e, t, u) => {
                'use strict';
                u.d(t, {
                    c1: () => F,
                    Sw: () => r.Z,
                    B3: () => l,
                    Z5: () => i.Z5,
                    B0: () => s,
                    ry: () => A,
                    Eu: () => g,
                });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    u();
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
                        const u = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== a)),
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
                var r = u(358),
                    i = u(613);
                let s;
                var o;
                ((o = s || (s = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = u(521),
                    E = u(768);
                const p = ['args'];
                function h(e, t, u, a, n, r, i) {
                    try {
                        var s = e[r](i),
                            o = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(o) : Promise.resolve(o).then(a, n);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    A = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(t, u);
                                        function i(e) {
                                            h(r, a, n, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(r, a, n, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    g = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    v = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            u[a] = e[a];
                                        }
                                    return u;
                                })(t, p);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    C = () => v(s.CLOSE),
                    D = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var f = u(572);
                const F = n.instance,
                    B = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: m,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => v(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => v(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            v(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, a, n = R.invalid('resId'), r) => {
                            const i = E.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                m = o.height,
                                d = {
                                    x: E.O.view.pxToRem(l) + i.x,
                                    y: E.O.view.pxToRem(c) + i.y,
                                    width: E.O.view.pxToRem(_),
                                    height: E.O.view.pxToRem(m),
                                };
                            v(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: b(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => D(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, C);
                        },
                        handleViewEvent: v,
                        onBindingsReady: A,
                        onLayoutReady: g,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const n = Object.prototype.toString.call(t[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[a];
                                        u[a] = [];
                                        for (let t = 0; t < n.length; t++) u[a].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[a] = e(t[a]))
                                            : (u[a] = t[a]);
                                }
                            return u;
                        },
                        ClickOutsideManager: F,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = B;
            },
            613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => a, cy: () => n });
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
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            140: (e, t, u) => {
                'use strict';
                var a = {};
                u.r(a),
                    u.d(a, {
                        Area: () => Rt,
                        Bar: () => It,
                        DefaultScroll: () => Lt,
                        Direction: () => Dt,
                        defaultSettings: () => ft,
                        useHorizontalScrollApi: () => Bt,
                    });
                var n = {};
                u.r(n), u.d(n, { Area: () => jt, Bar: () => Gt, Default: () => Xt, useVerticalScrollApi: () => kt });
                var r = u(179),
                    i = u.n(r);
                const s = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var o = u(768);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function _(e, t, u) {
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
                        })(e, u),
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
                        })(t, u),
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: a === u.extraLarge.weight,
                        largeWidth: a === u.large.weight,
                        mediumWidth: a === u.medium.weight,
                        smallWidth: a === u.small.weight,
                        extraSmallWidth: a === u.extraSmall.weight,
                        extraLargeHeight: n === u.extraLarge.weight,
                        largeHeight: n === u.large.weight,
                        mediumHeight: n === u.medium.weight,
                        smallHeight: n === u.small.weight,
                        extraSmallHeight: n === u.extraSmall.weight,
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
                    d = m.width,
                    E = m.height,
                    p = Object.assign({ width: d, height: E }, _(d, E, l)),
                    h = (0, r.createContext)(p),
                    b = ['children'],
                    A = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, b);
                        const a = (0, r.useContext)(h),
                            n = a.extraLarge,
                            i = a.large,
                            o = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            _ = a.extraLargeWidth,
                            m = a.largeWidth,
                            d = a.mediumWidth,
                            E = a.smallWidth,
                            p = a.extraSmallWidth,
                            A = a.extraLargeHeight,
                            g = a.largeHeight,
                            v = a.mediumHeight,
                            C = a.smallHeight,
                            D = a.extraSmallHeight,
                            f = { extraLarge: A, large: g, medium: v, small: C, extraSmall: D };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && n) return t;
                            if (u.large && i) return t;
                            if (u.medium && o) return t;
                            if (u.small && l) return t;
                            if (u.extraSmall && c) return t;
                        } else {
                            if (u.extraLargeWidth && _) return s(t, u, f);
                            if (u.largeWidth && m) return s(t, u, f);
                            if (u.mediumWidth && d) return s(t, u, f);
                            if (u.smallWidth && E) return s(t, u, f);
                            if (u.extraSmallWidth && p) return s(t, u, f);
                            if (
                                !(
                                    u.extraLargeWidth ||
                                    u.largeWidth ||
                                    u.mediumWidth ||
                                    u.smallWidth ||
                                    u.extraSmallWidth
                                )
                            ) {
                                if (u.extraLargeHeight && A) return t;
                                if (u.largeHeight && g) return t;
                                if (u.mediumHeight && v) return t;
                                if (u.smallHeight && C) return t;
                                if (u.extraSmallHeight && D) return t;
                            }
                        }
                        return null;
                    };
                (A.defaultProps = {
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
                    (0, r.memo)(A);
                const g = ({ children: e }) => {
                    const t = (0, r.useContext)(h),
                        u = (0, r.useState)(t),
                        a = u[0],
                        n = u[1],
                        s = (0, r.useCallback)((e, t) => {
                            const u = o.O.view.pxToRem(e),
                                a = o.O.view.pxToRem(t);
                            n(Object.assign({ width: u, height: a }, _(u, a, l)));
                        }, []),
                        c = (0, r.useCallback)(() => {
                            const e = o.O.client.getSize('px');
                            s(e.width, e.height);
                        }, [s]);
                    ((e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        o.O.client.events.on('clientResized', s), o.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                o.O.client.events.off('clientResized', s),
                                    o.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [s, c],
                        );
                    const m = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                    return i().createElement(h.Provider, { value: m }, e);
                };
                var v = u(483),
                    C = u.n(v),
                    D = u(926),
                    f = u.n(D);
                let F, B, y;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(F || (F = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(B || (B = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(y || (y = {}));
                const w = () => {
                        const e = (0, r.useContext)(h),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return F.ExtraLarge;
                                    case e.large:
                                        return F.Large;
                                    case e.medium:
                                        return F.Medium;
                                    case e.small:
                                        return F.Small;
                                    case e.extraSmall:
                                        return F.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), F.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return B.ExtraLarge;
                                    case e.largeWidth:
                                        return B.Large;
                                    case e.mediumWidth:
                                        return B.Medium;
                                    case e.smallWidth:
                                        return B.Small;
                                    case e.extraSmallWidth:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
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
                        return { mediaSize: a, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: u };
                    },
                    N = ['children', 'className'];
                function S() {
                    return (
                        (S = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        S.apply(null, arguments)
                    );
                }
                const x = {
                        [B.ExtraSmall]: '',
                        [B.Small]: f().SMALL_WIDTH,
                        [B.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [B.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [y.ExtraSmall]: '',
                        [y.Small]: f().SMALL_HEIGHT,
                        [y.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [y.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    I = {
                        [F.ExtraSmall]: '',
                        [F.Small]: f().SMALL,
                        [F.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [F.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [F.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    M = (e) => {
                        let t = e.children,
                            u = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, N);
                        const n = w(),
                            r = n.mediaWidth,
                            s = n.mediaHeight,
                            o = n.mediaSize;
                        return i().createElement('div', S({ className: C()(u, x[r], T[s], I[o]) }, a), t);
                    },
                    L = ['children'],
                    k = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, L);
                        return i().createElement(g, null, i().createElement(M, u, t));
                    };
                var O = u(493),
                    P = u.n(O),
                    H = u(515);
                function V(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const W = {
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
                function U() {
                    return (
                        (U = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        U.apply(null, arguments)
                    );
                }
                class G extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && V(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && V(this.props.soundClick);
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
                            a = e.goto,
                            n = e.side,
                            r = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            u[a] = e[a];
                                        }
                                    return u;
                                })(e, $)),
                            d = C()(W.base, W[`base__${r}`], W[`base__${n}`], null == s ? void 0 : s.base),
                            E = C()(W.icon, W[`icon__${r}`], W[`icon__${n}`], null == s ? void 0 : s.icon),
                            p = C()(W.glow, null == s ? void 0 : s.glow),
                            h = C()(W.caption, W[`caption__${r}`], null == s ? void 0 : s.caption),
                            b = C()(W.goto, null == s ? void 0 : s.goto);
                        return i().createElement(
                            'div',
                            U(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                m,
                            ),
                            'info' !== r && i().createElement('div', { className: W.shine }),
                            i().createElement('div', { className: E }, i().createElement('div', { className: p })),
                            i().createElement('div', { className: h }, t),
                            a && i().createElement('div', { className: b }, a),
                        );
                    }
                }
                let z, X, j, q;
                function Y() {}
                function K() {
                    return !1;
                }
                (G.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e[(e.INTRO = 0)] = 'INTRO'),
                            (e[(e.BRANCH_SELECTION = 1)] = 'BRANCH_SELECTION'),
                            (e[(e.SUMMARY = 2)] = 'SUMMARY'),
                            (e[(e.MULTICURRENCY_SELECTION = 3)] = 'MULTICURRENCY_SELECTION'),
                            (e[(e.POST_TRADE = 4)] = 'POST_TRADE');
                    })(z || (z = {})),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(X || (X = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(j || (j = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(q || (q = {})),
                    console.log;
                var Z = u(174);
                function Q(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const J = (e) => (0 === e ? window : window.subViews.get(e)),
                    ee = () => (e, t) => {
                        const u = (0, r.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: n, children: s, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    _ = (u, a, n) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = J,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = n.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const n = u(t),
                                                        r = a.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const s = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = o.O.view.addModelObserver(s, t, !0);
                                                        return n.set(l, u), e && u(i(r)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const u = i(t);
                                                        return (...t) => {
                                                            u(e(...t));
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
                                                                                    return Q(e, t);
                                                                                var u = {}.toString
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
                                                                                          ? Q(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        u && (e = u);
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
                                                            !(e = u()).done;

                                                        )
                                                            r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            s =
                                                'real' === u
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === u ? (null == n ? void 0 : n.getter(e)) : s.readByPath(e),
                                            _ = (e) => c.current.push(e),
                                            m = e({
                                                mode: u,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : l(e),
                                                            n = Z.LO.box(a, { equals: K });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, Z.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : l(e),
                                                            n = Z.LO.box(a, { equals: K });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, Z.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = l(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = Z.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, Z.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                r = Object.entries(n),
                                                                i = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = Z.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, Z.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                i[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            d = { mode: u, model: m, externalModel: s, cleanup: _ };
                                        return {
                                            model: m,
                                            controls: 'mocks' === u && n ? n.controls(d) : t(d),
                                            externalModel: s,
                                            mode: u,
                                        };
                                    },
                                    m = (0, r.useRef)(!1),
                                    d = (0, r.useState)(a),
                                    E = d[0],
                                    p = d[1],
                                    h = (0, r.useState)(() => _(a, n, l)),
                                    b = h[0],
                                    A = h[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        m.current ? A(_(E, n, l)) : (m.current = !0);
                                    }, [l, E, n]),
                                    (0, r.useEffect)(() => {
                                        p(a);
                                    }, [a]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            b.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [b],
                                    ),
                                    i().createElement(u.Provider, { value: b }, s)
                                );
                            },
                            () => (0, r.useContext)(u),
                        ];
                    },
                    te = ee()(
                        ({ observableModel: e }) =>
                            Object.assign(
                                {},
                                e.primitives(['gold', 'credits', 'crystals', 'freeExp', 'equipCoin', 'isWGMAvailable']),
                                {
                                    goldTooltip: e.object('goldTooltip'),
                                    creditsTooltip: e.object('creditsTooltip'),
                                    crystalsTooltip: e.object('crystalsTooltip'),
                                    freeExpTooltip: e.object('freeExpTooltip'),
                                    equipCoinTooltip: e.object('equipCoinTooltip'),
                                },
                            ),
                        Y,
                    ),
                    ue = te[0],
                    ae = te[1];
                var ne = u(916);
                class re extends i().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? ne.B3.GOLD : ne.B3.INTEGRAL;
                        const t = ne.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                re.defaultProps = { format: 'integral' };
                const ie = [
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
                function se(e) {
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
                const oe = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ne.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    le = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            m = void 0 !== _ && _,
                            d = e.decoratorId,
                            E = void 0 === d ? 0 : d,
                            p = e.isEnabled,
                            h = void 0 === p || p,
                            b = e.targetId,
                            A = void 0 === b ? 0 : b,
                            g = e.onShow,
                            v = e.onHide,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, ie);
                        const D = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, r.useMemo)(
                                () =>
                                    A ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            a = R.invalid('resId');
                                        return (
                                            t &&
                                                ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (a = window.subViews[u].id)),
                                            { caller: u, stack: t, resId: a }
                                        );
                                    })().resId,
                                [A],
                            ),
                            F = (0, r.useCallback)(() => {
                                (D.current.isVisible && D.current.timeoutId) ||
                                    (oe(u, E, { isMouseEvent: !0, on: !0, arguments: se(a) }, f),
                                    g && g(),
                                    (D.current.isVisible = !0));
                            }, [u, E, a, f, g]),
                            B = (0, r.useCallback)(() => {
                                if (D.current.isVisible || D.current.timeoutId) {
                                    const e = D.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (D.current.timeoutId = 0)),
                                        oe(u, E, { on: !1 }, f),
                                        D.current.isVisible && v && v(),
                                        (D.current.isVisible = !1);
                                }
                            }, [u, E, f, v]),
                            y = (0, r.useCallback)((e) => {
                                D.current.isVisible &&
                                    ((D.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (D.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(D.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = D.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === h && B();
                            }, [h, B]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        window.removeEventListener('mouseleave', B), B();
                                    }
                                ),
                                [B],
                            ),
                            h
                                ? (0, r.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((D.current.timeoutId = window.setTimeout(F, c ? 100 : 400)),
                                                          n && n(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  B(), null == i || i(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === m && B(), null == o || o(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === m && B(), null == s || s(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : t
                        );
                        var w;
                    };
                let ce;
                !(function (e) {
                    (e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent');
                })(ce || (ce = {}));
                const _e = (0, r.memo)(() =>
                        i().createElement(
                            i().Fragment,
                            null,
                            i().createElement(
                                'span',
                                { className: 'Waiting_waiting_48' },
                                i().createElement('span', { className: 'Waiting_frame1_c0' }, '- '),
                                i().createElement('span', { className: 'Waiting_frame2_bb' }, '- '),
                                i().createElement('span', { className: 'Waiting_frame3_4c' }, '- '),
                            ),
                            i().createElement('span', { className: 'Waiting_alertIcon_9d' }),
                        ),
                    ),
                    me = {
                        base: 'CurrencyItem_base_a5',
                        base__credits: 'CurrencyItem_base__credits_87',
                        base__gold: 'CurrencyItem_base__gold_83',
                        icon: 'CurrencyItem_icon_e3',
                        base__crystal: 'CurrencyItem_base__crystal_0b',
                        base__freeXP: 'CurrencyItem_base__freeXP_a0',
                        base__equipCoin: 'CurrencyItem_base__equipCoin_49',
                    };
                function de() {
                    return (
                        (de = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        de.apply(null, arguments)
                    );
                }
                const Ee = ({ value: e, currencyType: t, isWGMAvailable: u, tooltip: a, tooltipRootId: n }) => {
                        const r = t === j.gold ? 'gold' : 'integral',
                            s =
                                ((l = { currency: t }),
                                {
                                    isEnabled: (o = a.type) !== ce.absent,
                                    args: l,
                                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                    decoratorId:
                                        o === ce.normal
                                            ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                            : void 0,
                                    ignoreShowDelay: o === ce.backport,
                                    ignoreMouseClick: !0,
                                });
                        var o, l;
                        return i().createElement(
                            le,
                            de({}, s, { targetId: n }),
                            i().createElement(
                                'span',
                                { className: C()(me.base, me[`base__${t}`]) },
                                i().createElement('div', { className: me.icon }),
                                u ? i().createElement(re, { value: e, format: r }) : i().createElement(_e, null),
                            ),
                        );
                    },
                    pe = (0, H.Pi)(({ tooltipRootId: e, className: t }) => {
                        const u = ae().model,
                            a = u.isWGMAvailable.get(),
                            n = [
                                [u.crystals.get(), u.crystalsTooltip.get(), j.crystal],
                                [u.gold.get(), u.goldTooltip.get(), j.gold],
                                [u.credits.get(), u.creditsTooltip.get(), j.credits],
                                [u.freeExp.get(), u.freeExpTooltip.get(), j.freeXP],
                                [u.equipCoin.get(), u.equipCoinTooltip.get(), j.equipCoin],
                            ];
                        return i().createElement(
                            'div',
                            { className: C()('MoneyBalanceApp_base_6a', t) },
                            n
                                .filter(([e]) => -1 !== e)
                                .map(([t, u, n]) =>
                                    i().createElement(Ee, {
                                        key: n,
                                        value: t,
                                        currencyType: n,
                                        isWGMAvailable: a,
                                        tooltip: u,
                                        tooltipRootId: e,
                                    }),
                                ),
                        );
                    }),
                    he = i().memo(function ({
                        rootId: e = R.views.dialogs.widgets.MoneyBalance('resId'),
                        className: t,
                    }) {
                        return i().createElement(
                            ue,
                            { options: { rootId: e } },
                            i().createElement(pe, { tooltipRootId: e, className: t }),
                        );
                    }),
                    be = {
                        [z.INTRO]: 'intro',
                        [z.BRANCH_SELECTION]: 'branchSelection',
                        [z.SUMMARY]: 'summary',
                        [z.MULTICURRENCY_SELECTION]: 'multicurrencySelection',
                        [z.POST_TRADE]: 'postTrade',
                    },
                    Ae = {
                        [z.INTRO]: { about: !0, back: !1, close: !1, moneyBalance: !1, exchangeCost: !1 },
                        [z.BRANCH_SELECTION]: { about: !0, back: !1, close: !0, moneyBalance: !0, exchangeCost: !0 },
                        [z.SUMMARY]: { about: !0, back: !0, close: !0, moneyBalance: !0, exchangeCost: !0 },
                        [z.MULTICURRENCY_SELECTION]: {
                            about: !0,
                            back: !0,
                            close: !0,
                            moneyBalance: !0,
                            exchangeCost: !1,
                        },
                        [z.POST_TRADE]: { about: !1, back: !1, close: !0, moneyBalance: !1, exchangeCost: !1 },
                    },
                    ge = (e, t) => {
                        const u = e.$dyn(t);
                        if ('string' == typeof u) return u;
                        throw new Error(`ReadString  ${t} is invalid `);
                    },
                    ve = ['gold', 'freeXP', 'intelligence', 'fragments', 'crystal'],
                    Ce = 'success',
                    De = 'error',
                    fe = 'pending',
                    Fe = ee()(
                        ({ observableModel: e }) => ({ root: e.object(), loadState: Z.LO.box(fe) }),
                        ({ model: e }) => ({ updateLoadState: (0, Z.aD)((t) => e.loadState.set(t)) }),
                    ),
                    Be = Fe[0],
                    ye = Fe[1];
                let we;
                !(function (e) {
                    (e[(e.NO_PRICE = 0)] = 'NO_PRICE'),
                        (e[(e.BASIC_PRICE = 1)] = 'BASIC_PRICE'),
                        (e[(e.COMPOUND_PRICE = 2)] = 'COMPOUND_PRICE'),
                        (e[(e.UPDATING = 3)] = 'UPDATING');
                })(we || (we = {}));
                const Ne = {
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
                let Se, xe;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Se || (Se = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(xe || (xe = {}));
                const Te = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: a,
                    disabled: n,
                    mixClass: s,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: d,
                    onMouseLeave: E,
                    onClick: p,
                }) => {
                    const h = (0, r.useRef)(null),
                        b = (0, r.useState)(u),
                        A = b[0],
                        g = b[1],
                        v = (0, r.useState)(!1),
                        D = v[0],
                        f = v[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                A && null !== h.current && !h.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [A]),
                        (0, r.useEffect)(() => {
                            g(u);
                        }, [u]),
                        i().createElement(
                            'div',
                            {
                                ref: h,
                                className: C()(
                                    Ne.base,
                                    Ne[`base__${a}`],
                                    n && Ne.base__disabled,
                                    t && Ne[`base__${t}`],
                                    A && Ne.base__focus,
                                    D && Ne.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    n || (null !== o && V(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    n || (d && d(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    n ||
                                        (null !== l && V(l),
                                        m && m(e),
                                        u && (n || (h.current && (h.current.focus(), g(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    n || (E && E(e), f(!1));
                                },
                                onClick: function (e) {
                                    n || (p && p(e));
                                },
                            },
                            a !== Se.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: Ne.back }),
                                    i().createElement('span', { className: Ne.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: C()(Ne.state, Ne.state__default) },
                                i().createElement('span', { className: Ne.stateDisabled }),
                                i().createElement('span', { className: Ne.stateHighlightHover }),
                                i().createElement('span', { className: Ne.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: Ne.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Te.defaultProps = { type: Se.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ie = Te,
                    Me = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Le() {
                    return (
                        (Le = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        Le.apply(null, arguments)
                    );
                }
                const Re = R.views.common.tooltip_window.simple_tooltip_content,
                    ke = (e) => {
                        let t = e.children,
                            u = e.body,
                            a = e.header,
                            n = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, Me);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: a, note: n, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, u, a, n, o]);
                        return i().createElement(
                            le,
                            Le(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? Re.SimpleTooltipHtmlContent('resId') : Re.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var _;
                    };
                function Oe(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                const Pe = Oe;
                function He(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Ve(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, a) => t(null == e ? void 0 : e.value, u, a));
                }
                function We(e, t) {
                    for (let u = 0; u < e.length; u++) {
                        const a = He(e[u]);
                        if (t(a, u, e)) return a;
                    }
                }
                function $e(e, t, u) {
                    if (Array.isArray(e)) return e.reduce(t, u);
                    let a = u;
                    for (let u = 0; u < e.length; u++) a = t(a, Pe(e, u), u, e);
                    return a;
                }
                var Ue = u(946);
                const Ge = ee()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    branchesToReceive: e.array('branchSelectionModel.branchesToReceive', []),
                                    footer: Object.assign(
                                        {
                                            price: e.array('mainOverlayModel.footer.price.price'),
                                            defPrice: e.array('mainOverlayModel.footer.price.defPrice'),
                                            discount: e.array('mainOverlayModel.footer.price.discount'),
                                        },
                                        e.primitives(['state'], 'mainOverlayModel.footer'),
                                    ),
                                },
                                u = (0, Ue.Om)(
                                    () => 0 === $e(t.branchesToReceive.get(), (e, t) => e + t.branches.length, 0),
                                ),
                                a = (0, Ue.Om)(() =>
                                    Ve(t.footer.price.get(), (e) =>
                                        ve.includes(e.name)
                                            ? Object.assign({}, e, { type: e.name })
                                            : Object.assign({}, e, { name: 'fragments', type: e.name }),
                                    ).sort((e, t) => ve.indexOf(e.name) - ve.indexOf(t.name)),
                                );
                            return Object.assign({}, t, {
                                computes: { allVehiclesHasBeenResearched: u, sortedResources: a },
                            });
                        },
                        ({ externalModel: e }) => ({
                            switchContent: e.createCallback(
                                (e) => ({ viewType: e }),
                                'mainOverlayModel.onSwitchContent',
                            ),
                            showInfo: e.createCallbackNoArgs('mainOverlayModel.onShowInfo'),
                            confirm: e.createCallbackNoArgs('mainOverlayModel.footer.onConfirm'),
                            postTradeConfirm: e.createCallbackNoArgs('postTradeModel.onConfirm'),
                            introConfirm: e.createCallbackNoArgs('introModel.onContinue'),
                        }),
                    ),
                    ze = Ge[0],
                    Xe = Ge[1],
                    je = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                        'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                        'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                        'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__eliteXP: 'Currency_value__eliteXP_62',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    },
                    qe = (0, r.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: t,
                            size: u,
                            type: a,
                            value: n,
                            discountValue: r,
                            showPlus: s,
                            isEnough: o = !0,
                            stockBackgroundName: l = q.Red,
                            className: c,
                            classNames: _,
                        }) =>
                            i().createElement(
                                'span',
                                { className: C()(je.base, je[`base__${u}`], c) },
                                i().createElement(
                                    'span',
                                    {
                                        className: C()(
                                            je.value,
                                            je[`value__${a}`],
                                            !o && je.value__notEnough,
                                            null == _ ? void 0 : _.value,
                                        ),
                                    },
                                    s && n > 0 && '+',
                                    i().createElement(re, { value: n, format: a === j.gold ? 'gold' : 'integral' }),
                                ),
                                i().createElement('span', {
                                    className: C()(je.icon, je[`icon__${a}-${u}`], null == _ ? void 0 : _.icon),
                                }),
                                e &&
                                    i().createElement(
                                        'span',
                                        {
                                            className: C()(
                                                je.stock,
                                                r && je.stock__indent,
                                                t && je.stock__interactive,
                                                null == _ ? void 0 : _.stock,
                                            ),
                                        },
                                        i().createElement('span', {
                                            className: je.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                        }),
                                        Boolean(r) && r,
                                    ),
                            ),
                    ),
                    Ye = {
                        base: 'Price_base_09',
                        price: 'Price_price_14',
                        value: 'Price_value_15',
                        currency: 'Price_currency_01',
                        icon: 'Price_icon_85',
                        smallValue: 'Price_smallValue_57',
                        stock: 'Price_stock_f9',
                        currencyContainer: 'Price_currencyContainer_65',
                    },
                    Ke = (0, H.Pi)(() => {
                        const e = Xe().model,
                            t = e.footer.defPrice.get(),
                            u = e.root.get().viewType === z.BRANCH_SELECTION,
                            a = Boolean(t.length) && Boolean(e.footer.discount.get().length) && u;
                        return i().createElement(
                            'div',
                            { className: Ye.base },
                            Ve(e.computes.sortedResources(), (e, u) =>
                                i().createElement(
                                    i().Fragment,
                                    { key: u },
                                    0 !== e.value &&
                                        (e.name in j
                                            ? i().createElement(
                                                  'div',
                                                  { className: C()(Ye.price, a && Ye.price__discount) },
                                                  a &&
                                                      i().createElement(
                                                          'span',
                                                          { className: Ye.currency },
                                                          i().createElement(re, {
                                                              value: t[0].value.value,
                                                              format: 'gold',
                                                          }),
                                                      ),
                                                  i().createElement(qe, {
                                                      key: u,
                                                      isDiscount: a,
                                                      size: X.large,
                                                      type: e.name,
                                                      value: e.value,
                                                      isEnough: e.isEnough,
                                                      stockBackgroundName: q.Blue,
                                                      classNames: { value: Ye.smallValue, stock: Ye.stock },
                                                      className: Ye.currencyContainer,
                                                  }),
                                              )
                                            : i().createElement(
                                                  'div',
                                                  { className: Ye.price },
                                                  i().createElement(
                                                      'span',
                                                      { className: Ye.value },
                                                      i().createElement(re, { value: e.value, format: 'gold' }),
                                                  ),
                                                  i().createElement('span', {
                                                      className: Ye.icon,
                                                      style: {
                                                          backgroundImage: `url(R.images.gui.maps.icons.blueprints.fragment.small.${e.type})`,
                                                      },
                                                  }),
                                              )),
                                ),
                            ),
                        );
                    }),
                    Ze = {
                        base: 'Basic_base_74',
                        resources: 'Basic_resources_5f',
                        icon: 'Basic_icon_3b',
                        text: 'Basic_text_6f',
                        bg: 'Basic_bg_8c',
                        devider: 'Basic_devider_57',
                        price: 'Basic_price_52',
                        btn: 'Basic_btn_9d',
                    },
                    Qe = R.strings.tech_tree_trade_in.exchangeCost,
                    Je = { header: Qe.tooltip.header(), body: Qe.tooltip.body() },
                    et = (0, H.Pi)(() => {
                        const e = Xe().controls;
                        return i().createElement(
                            'div',
                            { className: Ze.base },
                            i().createElement('div', { className: Ze.bg }),
                            i().createElement(
                                ke,
                                Je,
                                i().createElement('div', { className: Ze.price }, i().createElement(Ke, null)),
                            ),
                            i().createElement('div', { className: Ze.devider }),
                            i().createElement(
                                'div',
                                { className: Ze.resources },
                                i().createElement('div', { className: Ze.icon }),
                                i().createElement('div', { className: Ze.text }, Qe.resources()),
                            ),
                            i().createElement(
                                'div',
                                { className: Ze.button },
                                i().createElement(
                                    Ie,
                                    { size: xe.medium, type: Se.primary, onClick: e.confirm, mixClass: Ze.btn },
                                    Qe.button(),
                                ),
                            ),
                        );
                    }),
                    tt = { price: 'Compound_price_7d', btn: 'Compound_btn_1d' },
                    ut = (0, H.Pi)(() => {
                        const e = Xe().controls;
                        return i().createElement(
                            i().Fragment,
                            null,
                            i().createElement('div', { className: tt.price }, i().createElement(Ke, null)),
                            i().createElement(
                                'div',
                                { className: tt.button },
                                i().createElement(
                                    Ie,
                                    { size: xe.medium, type: Se.main, onClick: e.confirm, mixClass: tt.btn },
                                    R.strings.tech_tree_trade_in.exchangeCost.confirm(),
                                ),
                            ),
                        );
                    }),
                    at = 'ExchangeCost_bg_6f',
                    nt = 'ExchangeCost_text_5e',
                    rt = R.strings.tech_tree_trade_in.exchangeCost,
                    it = (0, H.Pi)(({ className: e }) => {
                        const t = Xe().model.footer.state.get();
                        return i().createElement(
                            'div',
                            {
                                className: C()(
                                    'ExchangeCost_base_2a',
                                    t === we.BASIC_PRICE && 'ExchangeCost_base__basic_81',
                                    e,
                                ),
                            },
                            i().createElement('div', { className: C()(at, 'ExchangeCost_bg__light_71') }),
                            i().createElement('div', { className: C()(at, 'ExchangeCost_bg__lip_d2') }),
                            (() => {
                                switch (t) {
                                    case we.NO_PRICE:
                                        return i().createElement('div', { className: nt }, rt.preview());
                                    case we.UPDATING:
                                        return i().createElement('div', { className: nt }, rt.updating());
                                    case we.BASIC_PRICE:
                                        return i().createElement(et, null);
                                    case we.COMPOUND_PRICE:
                                        return i().createElement(ut, null);
                                    default:
                                        return console.warn('Unknown ExchangeCost state'), null;
                                }
                            })(),
                        );
                    });
                var st = u(521);
                function ot() {
                    o.O.view.isEventHandled() || o.O.view.setEventHandled();
                }
                function lt(e, t, u = !1) {
                    e === z.INTRO && (u && ot(), t.introConfirm()),
                        e === z.POST_TRADE && (u && ot(), t.postTradeConfirm()),
                        u || o.O.view.sendEvent.close();
                }
                const ct = {
                        base: 'MainOverlay_base_35',
                        navigation: 'MainOverlay_navigation_ad',
                        base__moneyBalance: 'MainOverlay_base__moneyBalance_83',
                        navigation__fill: 'MainOverlay_navigation__fill_8f',
                        base__pending: 'MainOverlay_base__pending_91',
                        base__branchSelection: 'MainOverlay_base__branchSelection_8b',
                        container: 'MainOverlay_container_dc',
                        base__multicurrencySelection: 'MainOverlay_base__multicurrencySelection_8a',
                        base__summary: 'MainOverlay_base__summary_16',
                        about: 'MainOverlay_about_55',
                        topRight: 'MainOverlay_topRight_92',
                        bottom: 'MainOverlay_bottom_29',
                    },
                    _t = (0, H.Pi)(() => {
                        const e = Xe(),
                            t = e.controls,
                            u = e.model,
                            a = ye(),
                            n = u.root.get().viewType,
                            r = be[n],
                            s = ((e, t) => (
                                i().useEffect(() => {
                                    function u(u) {
                                        u.keyCode === st.n.ESCAPE && lt(t, e, !0);
                                    }
                                    return (
                                        window.addEventListener('keydown', u),
                                        () => {
                                            window.removeEventListener('keydown', u);
                                        }
                                    );
                                }, [e, t]),
                                i().useMemo(() => ({ close: (t) => lt(t, e) }), [e])
                            ))(t, n),
                            o = s.close;
                        return i().createElement(
                            'div',
                            {
                                className: C()(
                                    ct.base,
                                    Ae[n].moneyBalance && ct.base__moneyBalance,
                                    ct[`base__${r}`],
                                    ct[`base__${a.model.loadState.get()}`],
                                ),
                            },
                            i().createElement(
                                'div',
                                { className: ct.navigation },
                                i().createElement(
                                    'div',
                                    { className: ct.container },
                                    Ae[n].back &&
                                        i().createElement(G, {
                                            caption: R.strings.menu.viewHeader.backBtn.label(),
                                            goto: ge(R.strings.tech_tree_trade_in.navigation, r),
                                            onClick: () =>
                                                (function (e) {
                                                    switch (e) {
                                                        case z.SUMMARY:
                                                            t.switchContent(z.MULTICURRENCY_SELECTION);
                                                            break;
                                                        case z.MULTICURRENCY_SELECTION:
                                                            t.switchContent(z.BRANCH_SELECTION);
                                                            break;
                                                        default:
                                                            console.error(
                                                                `This page dose not include back button ${e}`,
                                                            );
                                                    }
                                                })(n),
                                            side: 'left',
                                            type: 'back',
                                        }),
                                    Ae[n].about &&
                                        i().createElement(
                                            'div',
                                            { className: ct.about },
                                            i().createElement(G, {
                                                caption: R.strings.menu.viewHeader.aboutBtn.label(),
                                                type: 'info',
                                                onClick: t.showInfo,
                                            }),
                                        ),
                                ),
                                Ae[n].close &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement('div', { className: ct.navigation__fill }),
                                        i().createElement(G, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            onClick: () => o(n),
                                            side: 'right',
                                            type: 'close',
                                        }),
                                    ),
                            ),
                            Ae[n].moneyBalance && i().createElement(he, { className: ct.topRight }),
                            Ae[n].exchangeCost &&
                                !u.computes.allVehiclesHasBeenResearched() &&
                                i().createElement(it, { className: ct.bottom }),
                        );
                    }),
                    mt = (0, r.createContext)(new Set()),
                    dt = ({ title: e, subTitle: t, classNames: u, className: a }) =>
                        i().createElement(
                            'div',
                            { className: C()('Title_base_85', a) },
                            i().createElement(
                                'div',
                                { className: C()('Title_title_72', null == u ? void 0 : u.title) },
                                e,
                            ),
                            t &&
                                i().createElement(
                                    'div',
                                    { className: C()('Title_subtitle_c4', null == u ? void 0 : u.subTitle) },
                                    t,
                                ),
                        ),
                    Et = () =>
                        i().createElement(
                            'div',
                            { className: 'AllResearchedOverlay_base_41' },
                            i().createElement(
                                'div',
                                { className: 'AllResearchedOverlay_content_49' },
                                i().createElement('div', { className: 'AllResearchedOverlay_iconCheck_47' }),
                                i().createElement(
                                    'div',
                                    { className: 'AllResearchedOverlay_label_35' },
                                    R.strings.tech_tree_trade_in.branchSelection.congrats(),
                                ),
                            ),
                        ),
                    pt = (e) => {
                        let t,
                            u = null;
                        return (
                            (u = requestAnimationFrame(() => {
                                u = requestAnimationFrame(() => {
                                    (u = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== u && cancelAnimationFrame(u);
                            }
                        );
                    },
                    ht = (e, t, u) => (u < e ? e : u > t ? t : u),
                    bt = [];
                function At(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), bt)
                    );
                }
                function gt(e, t, u = []) {
                    const a = (0, r.useRef)(0),
                        n = (0, r.useCallback)(() => window.clearInterval(a.current), u || []);
                    (0, r.useEffect)(() => n, [n]);
                    const i = (null != u ? u : []).concat([t]);
                    return [
                        (0, r.useCallback)((u) => {
                            (a.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, i),
                        n,
                    ];
                }
                function vt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                var Ct = u(30);
                let Dt;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Dt || (Dt = {}));
                const ft = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ft = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: a,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const s = (e, u) => {
                            const a = t(e),
                                n = a[0],
                                r = a[1];
                            return r <= n ? 0 : ht(n, r, u);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                _ = void 0 === c ? ft : c,
                                m = (0, r.useRef)(null),
                                d = (0, r.useRef)(null),
                                E = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        a = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        n = (e, ...u) => {
                                            for (
                                                var a,
                                                    n = (function (e, t) {
                                                        var u =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (u) return (u = u.call(e)).next.bind(u);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (u = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return vt(e, t);
                                                                    var u = {}.toString.call(e).slice(8, -1);
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
                                                                              ? vt(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            u && (e = u);
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
                                                    })(t(e).values());
                                                !(a = n()).done;

                                            )
                                                (0, a.value)(...u);
                                        };
                                    return (0, r.useMemo)(() => ({ on: u, off: a, trigger: n }), []);
                                })(),
                                p = (function (e, t, u) {
                                    const a = (0, r.useMemo)(
                                        () =>
                                            (function (e, t, u, a) {
                                                let n,
                                                    r = !1,
                                                    i = 0;
                                                function s() {
                                                    n && clearTimeout(n);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - i;
                                                    function _() {
                                                        (i = Date.now()), u.apply(l, o);
                                                    }
                                                    r ||
                                                        (a && !n && _(),
                                                        s(),
                                                        void 0 === a && c > e
                                                            ? _()
                                                            : !0 !== t &&
                                                              (n = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : _,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((a = u), (u = t), (t = void 0)),
                                                    (o.cancel = function () {
                                                        s(), (r = !0);
                                                    }),
                                                    o
                                                );
                                            })(u, e),
                                        t,
                                    );
                                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                                })(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                h = (0, Ct.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (u(t, e), E.trigger('change', e), i && p());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                b = h[0],
                                A = h[1],
                                g = (0, r.useCallback)(
                                    (e, t, u) => {
                                        var a;
                                        const n = b.scrollPosition.get(),
                                            r = (null != (a = b.scrollPosition.goal) ? a : 0) - n;
                                        return s(e, t * u + r + n);
                                    },
                                    [b.scrollPosition],
                                ),
                                v = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const a = m.current;
                                        a &&
                                            A.start({
                                                scrollPosition: s(a, e),
                                                immediate: t,
                                                reset: u,
                                                config: _.animationConfig,
                                                from: { scrollPosition: s(a, b.scrollPosition.get()) },
                                            });
                                    },
                                    [A, _.animationConfig, b.scrollPosition],
                                ),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            u = d.current;
                                        if (!t || !u) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return n(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, _.step),
                                            r = g(t, e, a);
                                        v(r);
                                    },
                                    [v, g, _.step],
                                ),
                                D = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(a(e)),
                                            m.current && E.trigger('mouseWheel', e, b.scrollPosition, t(m.current));
                                    },
                                    [b.scrollPosition, C, E],
                                ),
                                f = ((e, t = []) => {
                                    const u = (0, r.useRef)(),
                                        a = (0, r.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        pt(() => {
                                            const e = m.current;
                                            e &&
                                                (v(s(e, b.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [v, b.scrollPosition.goal],
                                ),
                                F = At(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = s(e, b.scrollPosition.goal);
                                    t !== b.scrollPosition.goal && v(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            return (
                                (0, r.useEffect)(
                                    () => (
                                        window.addEventListener('resize', f),
                                        () => {
                                            window.removeEventListener('resize', f);
                                        }
                                    ),
                                    [f],
                                ),
                                (0, r.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (d.current ? n(d.current) : void 0),
                                        getContainerSize: () => (m.current ? e(m.current) : void 0),
                                        getBounds: () =>
                                            m.current
                                                ? t(m.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: _.step.clampedArrowStepTimeout,
                                        clampPosition: s,
                                        handleMouseWheel: D,
                                        applyScroll: v,
                                        applyStepTo: C,
                                        contentRef: m,
                                        wrapperRef: d,
                                        scrollPosition: A,
                                        animationScroll: b,
                                        recalculateContent: F,
                                        events: { on: E.on, off: E.off },
                                    }),
                                    [b.scrollPosition, v, C, E.off, E.on, F, D, A, _.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    Bt = Ft({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Dt.Next : Dt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    yt = 'HorizontalBar_base__nonActive_82',
                    wt = 'disable',
                    Nt = { pending: !1, offset: 0 },
                    St = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    xt = () => {},
                    Tt = (e, t) => Math.max(20, e.offsetWidth * t),
                    It = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = St, onDrag: a = xt }) => {
                        const n = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            d = (0, r.useState)(Nt),
                            E = d[0],
                            p = d[1],
                            h = (0, r.useCallback)(
                                (e) => {
                                    p(e),
                                        _.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                },
                                [a],
                            ),
                            b = () => {
                                const t = c.current,
                                    u = _.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && u && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / n),
                                    o = ht(0, 1, r / (n - a)),
                                    m = (t.offsetWidth - Tt(t, i)) * o;
                                (u.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && _.current) {
                                            if (0 === e)
                                                return s.current.classList.add(wt), void l.current.classList.remove(wt);
                                            if (
                                                ((t = c.current),
                                                (u = _.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(wt), void l.current.classList.add(wt);
                                            var t, u;
                                            s.current.classList.remove(wt), l.current.classList.remove(wt);
                                        }
                                    })(m);
                            },
                            A = At(() => {
                                (() => {
                                    const t = _.current,
                                        u = c.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && a && u)) return;
                                    const i = Math.min(1, a / r);
                                    (t.style.width = `${Tt(u, i)}px`),
                                        (t.style.display = 'flex'),
                                        n.current &&
                                            (1 === i ? n.current.classList.add(yt) : n.current.classList.remove(yt));
                                })(),
                                    b();
                            });
                        (0, r.useEffect)(() => pt(A)),
                            (0, r.useEffect)(
                                () =>
                                    pt(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let u = xt;
                                        const a = () => {
                                            u(), (u = pt(A));
                                        };
                                        return (
                                            e.events.on('recalculateContent', A),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', A),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const t = o.O.client.events.mouse.move(([t, u]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!r || !i) return;
                                        const s = c.current,
                                            o = _.current;
                                        if (!s || !o) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - E.offset - s.getBoundingClientRect().x,
                                            m = (l / s.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: m });
                                    }),
                                    u = o.O.client.events.mouse.up(() => {
                                        t(), h(Nt);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, a, h]);
                        const g = gt((t) => e.applyStepTo(t), m, [e]),
                            v = g[0],
                            D = g[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const f = (e) => {
                            e.target.classList.contains(wt) || V('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: C()('HorizontalBar_base_49', t.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: C()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(wt) || 0 !== e.button || (V('play'), v(Dt.Next));
                                },
                                onMouseUp: D,
                                ref: s,
                                onMouseEnter: f,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: C()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const a = _.current;
                                        a &&
                                            0 === t.button &&
                                            (V('play'),
                                            t.target === a
                                                ? h({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const a = _.current,
                                                          n = e.contentRef.current;
                                                      if (!a || !n) return;
                                                      const r = u(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                  })(t.screenX > a.getBoundingClientRect().x ? Dt.Prev : Dt.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                i().createElement('div', { ref: _, className: C()('HorizontalBar_thumb_fd', t.thumb) }),
                                i().createElement('div', { className: C()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            i().createElement('div', {
                                className: C()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(wt) || 0 !== e.button || (V('play'), v(Dt.Prev));
                                },
                                onMouseUp: D,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Mt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Lt = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: n,
                        classNames: s,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: C()(Mt.base, e.base) });
                            }, [a]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: C()(Mt.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: C()(Mt.defaultScrollArea, n) },
                                i().createElement(Rt, { className: o, api: m, classNames: s }, e),
                            ),
                            i().createElement(It, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    Rt = ({ api: e, className: t, classNames: u, children: a }) => (
                        (0, r.useEffect)(() => pt(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: C()(Mt.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: C()(Mt.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: C()(Mt.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (Rt.Bar = It), (Rt.Default = Lt);
                const kt = Ft({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Dt.Next : Dt.Prev),
                    }),
                    Ot = 'VerticalBar_base__nonActive_42',
                    Pt = 'disable',
                    Ht = () => {},
                    Vt = { pending: !1, offset: 0 },
                    Wt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    $t = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Ut = (e, t) => Math.max(20, e.offsetHeight * t),
                    Gt = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Wt, onDrag: a = Ht }) => {
                        const n = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            d = (0, r.useState)(Vt),
                            E = d[0],
                            p = d[1],
                            h = (0, r.useCallback)(
                                (e) => {
                                    p(e),
                                        _.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                },
                                [a],
                            ),
                            b = At(() => {
                                const t = _.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && t && u)) return;
                                const i = Math.min(1, a / r);
                                return (
                                    (t.style.height = `${Ut(u, i)}px`),
                                    (t.style.display = 'flex'),
                                    n.current &&
                                        (1 === i ? n.current.classList.add(Ot) : n.current.classList.remove(Ot)),
                                    i
                                );
                            }),
                            A = At(() => {
                                const t = c.current,
                                    u = _.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && u && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / n),
                                    o = ht(0, 1, r / (n - a)),
                                    m = (t.offsetHeight - Ut(t, i)) * o;
                                (u.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && _.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(Pt), void l.current.classList.remove(Pt);
                                            if (
                                                ((t = c.current),
                                                (u = _.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(Pt), void l.current.classList.add(Pt);
                                            var t, u;
                                            s.current.classList.remove(Pt), l.current.classList.remove(Pt);
                                        }
                                    })(m);
                            }),
                            g = At(() => {
                                $t(e, () => {
                                    b(), A();
                                });
                            });
                        (0, r.useEffect)(() => pt(g)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    $t(e, () => {
                                        A();
                                    });
                                };
                                let u = Ht;
                                const a = () => {
                                    u(), (u = pt(g));
                                };
                                return (
                                    e.events.on('recalculateContent', g),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', g),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const t = o.O.client.events.mouse.up(() => {
                                        h(Vt);
                                    }),
                                    u = o.O.client.events.mouse.move(([t]) => {
                                        $t(e, (u) => {
                                            const n = c.current,
                                                r = _.current,
                                                i = e.getContainerSize();
                                            if (!n || !r || !i) return;
                                            const s = t.screenY - E.offset - n.getBoundingClientRect().y,
                                                o = (s / n.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: s, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, a, h]);
                        const v = gt((t) => e.applyStepTo(t), m, [e]),
                            D = v[0],
                            f = v[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const F = (e) => {
                            e.target.classList.contains(Pt) || V('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: C()('VerticalBar_base_f3', t.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: C()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Pt) || 0 !== e.button || (V('play'), D(Dt.Next));
                                },
                                ref: s,
                                onMouseEnter: F,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: C()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const a = _.current;
                                        var n;
                                        a &&
                                            0 === t.button &&
                                            (V('play'),
                                            t.target === a
                                                ? h({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y })
                                                : ((n = t.screenY > a.getBoundingClientRect().y ? Dt.Prev : Dt.Next),
                                                  _.current &&
                                                      $t(e, (t) => {
                                                          if (!t) return;
                                                          const a = u(e),
                                                              r = e.clampPosition(t, t.scrollTop + a * n);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: F,
                                },
                                i().createElement('div', { ref: _, className: C()('VerticalBar_thumb_32', t.thumb) }),
                                i().createElement('div', { className: C()('VerticalBar_rail_43', t.rail) }),
                            ),
                            i().createElement('div', {
                                className: C()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Pt) || 0 !== e.button || (V('play'), D(Dt.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    zt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Xt = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: s,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: C()(zt.base, e.base) });
                            }, [a]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: C()(zt.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: C()(zt.area, n) },
                                i().createElement(jt, { className: s, classNames: o, api: m }, e),
                            ),
                            i().createElement(Gt, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    jt = ({ className: e, classNames: t, children: u, api: a }) => (
                        (0, r.useEffect)(() => pt(a.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: C()(zt.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: C()(zt.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                u,
                            ),
                        )
                    );
                jt.Default = Xt;
                const qt = { Vertical: n, Horizontal: a },
                    Yt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Kt = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Zt(e) {
                    let t = '';
                    for (let u = Kt.length - 1; u >= 0; u--) for (; e >= Kt[u]; ) (t += Yt[u]), (e -= Kt[u]);
                    return t;
                }
                const Qt = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Jt = ({ levels: e }) =>
                        i().createElement(
                            'div',
                            { className: 'LevelsPanel_base_41' },
                            e.map((t, u) =>
                                i().createElement(
                                    'div',
                                    { className: 'LevelsPanel_levelBlock_ed', key: t },
                                    i().createElement('div', { className: 'LevelsPanel_level_e2' }, Zt(t)),
                                    u !== e.length - 1 &&
                                        i().createElement(
                                            'div',
                                            { className: 'LevelsPanel_separators_37' },
                                            Array.from({ length: 5 }).map((e, t) =>
                                                i().createElement('div', {
                                                    className: 'LevelsPanel_separator_79',
                                                    key: t,
                                                }),
                                            ),
                                        ),
                                ),
                            ),
                        ),
                    eu = 'tradein_branch_change',
                    tu = {
                        base: 'ArrowLine_base_2f',
                        line: 'ArrowLine_line_8b',
                        base__branchGet: 'ArrowLine_base__branchGet_d8',
                        line__fromApplicable: 'ArrowLine_line__fromApplicable_63',
                        base__branchTrade: 'ArrowLine_base__branchTrade_f3',
                        line__toApplicable: 'ArrowLine_line__toApplicable_86',
                        line__highlight: 'ArrowLine_line__highlight_1f',
                        line__gradient: 'ArrowLine_line__gradient_03',
                        base__first: 'ArrowLine_base__first_1f',
                        arrow: 'ArrowLine_arrow_9c',
                        arrowHead: 'ArrowLine_arrowHead_ee',
                        arrowHead__toApplicable: 'ArrowLine_arrowHead__toApplicable_65',
                        arrowHead__highlight: 'ArrowLine_arrowHead__highlight_f0',
                        arrowHead__gradient: 'ArrowLine_arrowHead__gradient_aa',
                    },
                    uu = ({ fromApplicable: e, toApplicable: t, mode: u, selected: a, first: n }) =>
                        i().createElement(
                            'div',
                            { className: C()(tu.base, tu[`base__${u}`], n && tu.base__first) },
                            i().createElement('div', {
                                className: C()(
                                    tu.line,
                                    e && tu.line__fromApplicable,
                                    t && tu.line__toApplicable,
                                    e && a && tu.line__highlight,
                                    t && a && tu.line__gradient,
                                ),
                            }),
                            i().createElement(
                                'svg',
                                { viewBox: '0 0 5 7', className: tu.arrow },
                                i().createElement('path', {
                                    d: 'M5 3.5L0 7L2.52368e-07 0L5 3.5Z',
                                    className: C()(
                                        tu.arrowHead,
                                        t && tu.arrowHead__toApplicable,
                                        e && a && tu.arrowHead__highlight,
                                        t && a && tu.arrowHead__gradient,
                                    ),
                                }),
                            ),
                        ),
                    au = ['children'];
                function nu() {
                    return (
                        (nu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        nu.apply(null, arguments)
                    );
                }
                const ru = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    u[a] = e[a];
                                }
                            return u;
                        })(e, au);
                    return i().createElement(
                        le,
                        nu(
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
                };
                var iu = u(281);
                let su;
                function ou(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function lu(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(su || (su = {}));
                const cu = (e) => e.replace(/&nbsp;/g, ' '),
                    _u = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    mu = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    du = (e, t, u = su.left) => e.split(t).reduce(u === su.left ? _u : mu, []),
                    Eu = (() => {
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
                    pu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    hu = (e, t, u) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            u && e in u
                                ? u[e]
                                : ((e, t = su.left) => {
                                      const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return pu.includes(u)
                                          ? Eu(e)
                                          : 'ja' === u
                                            ? (0, iu.D4)()
                                                  .parse(e)
                                                  .map((e) => cu(e))
                                            : ((e, t = su.left) => {
                                                  let u = [];
                                                  const a =
                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                      n = cu(e);
                                                  return (
                                                      du(n, /( )/, t).forEach((e) => (u = u.concat(du(e, a, su.left)))),
                                                      u
                                                  );
                                              })(e, t);
                                  })(e, t),
                        ),
                    bu = 'branchGet',
                    Au = 'branchTrade',
                    gu = [6, 7, 8, 9, 10],
                    vu = (e, t, u) =>
                        !!u && ((e === bu && !u.unlocked) || (e === Au && u.vehicleLvl >= t && u.unlocked)),
                    Cu = {
                        base: 'VehicleSlot_base_ae',
                        bg: 'VehicleSlot_bg_c2',
                        base__branchGet: 'VehicleSlot_base__branchGet_0b',
                        bg__applicable: 'VehicleSlot_bg__applicable_bb',
                        base__branchGet_hovered: 'VehicleSlot_base__branchGet_hovered_3f',
                        base__branchTrade: 'VehicleSlot_base__branchTrade_22',
                        base__branchTrade_hovered: 'VehicleSlot_base__branchTrade_hovered_88',
                        icon: 'VehicleSlot_icon_02',
                        vehicleName: 'VehicleSlot_vehicleName_83',
                        vehicleLevelBlock: 'VehicleSlot_vehicleLevelBlock_4b',
                        vehicleLevelIcon: 'VehicleSlot_vehicleLevelIcon_77',
                        vehicleLevel: 'VehicleSlot_vehicleLevel_47',
                        iconObtained: 'VehicleSlot_iconObtained_44',
                    },
                    Du = (0, H.Pi)(({ vehicle: e, mode: t, selected: u, minLevelForVehicleToTrade: a }) => {
                        const n = vu(t, a, e);
                        return i().createElement(
                            ru,
                            { args: { id: e.id, tooltipId: 'techtreeVehicle' } },
                            i().createElement(
                                'div',
                                { className: C()(Cu.base, u ? Cu[`base__${t}_hovered`] : Cu[`base__${t}`]) },
                                i().createElement('div', { className: C()(Cu.bg, n && Cu.bg__applicable) }),
                                i().createElement('div', {
                                    style: { backgroundImage: `url('${null == e ? void 0 : e.iconSmall}')` },
                                    className: Cu.icon,
                                }),
                                i().createElement(
                                    'div',
                                    { className: Cu.vehicleLevelBlock },
                                    i().createElement('div', { className: Cu.vehicleLevel }, Zt(e ? e.vehicleLvl : 0)),
                                    i().createElement('div', {
                                        style: {
                                            backgroundImage: `url('R.images.gui.maps.icons.vehicleTypes.c_24x24.${lu(e ? e.vehicleType : '')}')`,
                                        },
                                        className: Cu.vehicleLevelIcon,
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Cu.vehicleName },
                                    null == e ? void 0 : e.vehicleName,
                                ),
                                e.obtained && i().createElement('div', { className: Cu.iconObtained }),
                            ),
                        );
                    }),
                    fu = ee()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives(['selectedBranchToTradeId', 'selectedBranchToReceiveId']),
                                    {
                                        branchesToTrade: e.array('branchesToTrade', []),
                                        branchesToReceive: e.array('branchesToReceive', []),
                                        price: e.object('price'),
                                        selectedNation: Z.LO.box(''),
                                        mode: Z.LO.box(bu),
                                    },
                                ),
                                u = (0, Ue.Om)(() =>
                                    $e(
                                        t.branchesToReceive.get(),
                                        (e, u) =>
                                            We(u.branches, (e) => e.id === t.selectedBranchToReceiveId.get()) || e,
                                        null,
                                    ),
                                ),
                                a = (0, Ue.Om)(() =>
                                    $e(
                                        t.branchesToTrade.get(),
                                        (e, u) => We(u.branches, (e) => e.id === t.selectedBranchToTradeId.get()) || e,
                                        null,
                                    ),
                                ),
                                n = (0, Ue.Om)(() => {
                                    const e = u();
                                    return e ? $e(e.vehiclesList, (e, t) => (t.unlocked ? t.vehicleLvl + 1 : e), 1) : 1;
                                }),
                                r = (0, Ue.Om)(() => {
                                    const e = t.price.get().price;
                                    if (e.length > 0) {
                                        const t = Oe(e, 0);
                                        return t ? t.value : 0;
                                    }
                                    return 0;
                                }),
                                i = (0, Ue.Om)(() =>
                                    t.mode.get() === Au ? t.branchesToTrade.get() : t.branchesToReceive.get(),
                                ),
                                s = (0, Ue.Om)(() => {
                                    const e = t.mode.get() === Au ? a() : u();
                                    return e && e.vehiclesList.length > 0
                                        ? e.vehiclesList[0].value.vehicleNation
                                        : null;
                                }),
                                o = (0, Ue.Om)(
                                    () => 0 === $e(t.branchesToReceive.get(), (e, t) => e + t.branches.length, 0),
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    selectedBranchToGet: u,
                                    selectedBranchToTrade: a,
                                    selectedBranchNation: s,
                                    minLevelForVehicleToTrade: n,
                                    price: r,
                                    workingBranches: i,
                                    allVehiclesHasBeenResearched: o,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const u = (function (e) {
                                const t = {};
                                for (const u in e)
                                    if (Object.prototype.hasOwnProperty.call(e, u)) {
                                        const a = e[u];
                                        t[u] = (0, Z.aD)(a);
                                    }
                                return t;
                            })({
                                selectNation: (e) => t.selectedNation.set(e),
                                changeMode: (e) => {
                                    t.selectedNation.set(''), t.mode.set(e);
                                },
                            });
                            return Object.assign({}, u, {
                                selectBranchToTrade: e.createCallback(
                                    (e) => ({ branchId: e }),
                                    'onSelectBranchToTradeId',
                                ),
                                selectBranchToGet: e.createCallback(
                                    (e) => ({ branchId: e }),
                                    'onSelectBranchToReceiveId',
                                ),
                                close: e.createCallbackNoArgs('onClose'),
                                confirm: e.createCallbackNoArgs('onConfirm'),
                            });
                        },
                    ),
                    Fu = fu[0],
                    Bu = fu[1],
                    yu = (0, H.Pi)(({ branch: e }) => {
                        const t = Bu(),
                            u = t.model,
                            a = t.controls,
                            n = u.mode.get(),
                            r = u.computes.minLevelForVehicleToTrade(),
                            s =
                                (n === Au ? u.selectedBranchToTradeId.get() : u.selectedBranchToReceiveId.get()) ===
                                e.id;
                        function l(e, t) {
                            return e > 0 && e < t.length && vu(n, r, Oe(t, e - 1));
                        }
                        return i().createElement(
                            'div',
                            {
                                className: 'TechTreeBranch_base_c0',
                                onClick: function () {
                                    s ||
                                        (o.O.sound.play.sound(eu),
                                        (n === Au ? a.selectBranchToTrade : a.selectBranchToGet)(e.id));
                                },
                                onMouseEnter: o.O.sound.play.highlight,
                            },
                            Ve(e.vehiclesList, (e, t, u) =>
                                i().createElement(
                                    'div',
                                    { className: 'TechTreeBranch_slot_2c', key: e.vehicleName },
                                    t > 0 &&
                                        i().createElement(uu, {
                                            fromApplicable: l(t, u),
                                            toApplicable: vu(n, r, e),
                                            mode: n,
                                            selected: s,
                                            first: 0 === t,
                                        }),
                                    i().createElement(Du, {
                                        vehicle: e,
                                        mode: n,
                                        selected: s,
                                        minLevelForVehicleToTrade: r,
                                    }),
                                ),
                            ),
                        );
                    }),
                    wu = 'NationBlock_line_79',
                    Nu = ({ nation: e, className: t }) =>
                        i().createElement(
                            'div',
                            { className: C()('NationBlock_base_84', t) },
                            i().createElement(
                                'div',
                                { className: 'NationBlock_heading_cc' },
                                i().createElement('div', { className: wu }),
                                i().createElement(
                                    'div',
                                    { className: 'NationBlock_nationName_79' },
                                    R.strings.tech_tree_trade_in.nations.$dyn(e.nation),
                                ),
                                i().createElement('div', { className: wu }),
                            ),
                            Ve(e.branches, (e) =>
                                i().createElement(
                                    'div',
                                    { className: 'NationBlock_branch_8f', key: e.id.toString() },
                                    i().createElement(yu, { branch: e }),
                                ),
                            ),
                        ),
                    Su = {
                        base: 'NationFlagButton_base_4d',
                        base__disabled: 'NationFlagButton_base__disabled_69',
                        disabled: 'NationFlagButton_disabled_94',
                        flagIcon: 'NationFlagButton_flagIcon_1e',
                        slotIcon: 'NationFlagButton_slotIcon_50',
                        selectedBg: 'NationFlagButton_selectedBg_58',
                        base__branchTrade: 'NationFlagButton_base__branchTrade_ae',
                        counter: 'NationFlagButton_counter_9c',
                        base__selected: 'NationFlagButton_base__selected_a5',
                    },
                    xu = ({ nation: e, count: t, selected: u, mode: a, onClick: n }) => {
                        const r = (function (e, t, u) {
                                const a = R.strings.tech_tree_trade_in.tooltip.branchSelection;
                                let n = null;
                                return (
                                    (n =
                                        t > 0
                                            ? ge(R.strings.tooltips.techTreePage.nations, e)
                                            : u === Au
                                              ? a.researchedNationForTrade()
                                              : a.researchedNationForGet()),
                                    n
                                );
                            })(e, t, a),
                            s = 0 === t;
                        return i().createElement(
                            ke,
                            { body: r, isEnabled: !u },
                            i().createElement(
                                'div',
                                {
                                    className: C()(
                                        Su.base,
                                        Su[`base__${a}`],
                                        u && Su.base__selected,
                                        s && Su.base__disabled,
                                    ),
                                    onClick: function () {
                                        s || o.O.sound.play.click(), t > 0 && n(e);
                                    },
                                    onMouseEnter: function () {
                                        s || o.O.sound.play.highlight();
                                    },
                                },
                                u && i().createElement('div', { className: Su.selectedBg }),
                                i().createElement('div', {
                                    className: Su.flagIcon,
                                    style: {
                                        backgroundImage: `url('${R.images.gui.maps.icons.flags.c_60x40.$dyn(e)}')`,
                                    },
                                }),
                                i().createElement('div', { className: Su.slotIcon }),
                                s
                                    ? i().createElement('div', { className: Su.disabled })
                                    : i().createElement('div', { className: Su.counter }, t),
                            ),
                        );
                    },
                    Tu = (0, H.Pi)(({ onClick: e }) => {
                        const t = Bu().model,
                            u = t.selectedNation.get();
                        return i().createElement(
                            'div',
                            { className: 'NationSelection_base_86' },
                            i().createElement(
                                'div',
                                { className: 'NationSelection_content_f4' },
                                i().createElement('div', { className: 'NationSelection_bg_f3' }),
                                Ve(t.computes.workingBranches(), (a) =>
                                    i().createElement(
                                        'div',
                                        { className: 'NationSelection_nation_4d', key: a.nation },
                                        i().createElement(xu, {
                                            nation: a.nation,
                                            count: a.branches.length,
                                            selected: u === a.nation,
                                            mode: t.mode.get(),
                                            onClick: e,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                function Iu(e, t, u, a, n, r, i) {
                    try {
                        var s = e[r](i),
                            o = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(o) : Promise.resolve(o).then(a, n);
                }
                function Mu(e) {
                    return function () {
                        var t = this,
                            u = arguments;
                        return new Promise(function (a, n) {
                            var r = e.apply(t, u);
                            function i(e) {
                                Iu(r, a, n, i, s, 'next', e);
                            }
                            function s(e) {
                                Iu(r, a, n, i, s, 'throw', e);
                            }
                            i(void 0);
                        });
                    };
                }
                function Lu(e, t, u) {
                    return e.find((e) => e[t] === u);
                }
                const Ru = (0, H.Pi)(() => {
                    const e = Bu(),
                        t = e.model,
                        u = e.controls,
                        a = kt(),
                        n = (0, r.useState)(0),
                        s = n[0],
                        o = n[1],
                        l = (0, r.useRef)([]),
                        c = t.computes.workingBranches();
                    l.current = [];
                    const _ = At((e) => {
                            const t = l.current;
                            let a = null;
                            t.forEach((u, n) => {
                                const r = t[n];
                                r &&
                                    r.nationBlock.offsetHeight > 0 &&
                                    e.value.scrollPosition >= r.nationBlock.offsetTop - 51 &&
                                    (a = u.nation);
                            }),
                                a && u.selectNation(a);
                        }),
                        m = (0, r.useCallback)(
                            (e) => {
                                var t;
                                const n = null == (t = Lu(l.current, 'nation', e)) ? void 0 : t.nationBlock.offsetTop;
                                void 0 !== n && a.applyScroll(n), u.selectNation(e);
                            },
                            [u, a],
                        ),
                        d = (0, r.useCallback)(
                            Mu(function* () {
                                yield (0, ne.Eu)();
                                const e = We(c, (e) => e.branches.length > 0),
                                    n = (function (e, t) {
                                        for (let t = e.length - 1; t >= 0; t--) {
                                            const u = He(e[t]);
                                            if (u.branches.length > 0) return u;
                                        }
                                    })(c),
                                    r = n ? Lu(l.current, 'nation', n.nation) : null,
                                    i = a.getWrapperSize();
                                o(r && i ? i - r.nationBlock.offsetHeight : 0);
                                const s =
                                    t.computes.selectedBranchNation() ||
                                    t.selectedNation.get() ||
                                    (null == e ? void 0 : e.nation);
                                if (s) {
                                    var _;
                                    yield (0, ne.Eu)();
                                    const e =
                                        null == (_ = Lu(l.current, 'nation', s)) ? void 0 : _.nationBlock.offsetTop;
                                    void 0 !== e &&
                                        (a.applyScroll(e - 1), yield (0, ne.Eu)(), a.applyScroll(e), u.selectNation(s));
                                }
                            }),
                            [c, a, t, u],
                        );
                    return (
                        (0, r.useEffect)(
                            () => (
                                a.scrollPosition.stop(),
                                d(),
                                window.addEventListener('resize', d),
                                engine.on('clientResized', d),
                                () => {
                                    window.removeEventListener('resize', d), engine.off('clientResized', d);
                                }
                            ),
                            [d, a],
                        ),
                        (0, r.useEffect)(
                            () => (
                                a.events.on('change', _),
                                () => {
                                    a.events.off('change', _);
                                }
                            ),
                            [a.events, _],
                        ),
                        i().createElement(
                            'div',
                            { className: 'BranchSelectionBlock_base_9d' },
                            i().createElement(
                                'div',
                                { className: 'BranchSelectionBlock_levelsContainer_a3' },
                                i().createElement(Jt, { levels: gu }),
                            ),
                            i().createElement(
                                'div',
                                { className: 'BranchSelectionBlock_vehiclesSelection_13' },
                                i().createElement(Tu, { onClick: m }),
                                i().createElement(
                                    'div',
                                    { className: 'BranchSelectionBlock_scrollContainer_19' },
                                    i().createElement(
                                        qt.Vertical.Default,
                                        {
                                            className: 'BranchSelectionBlock_list_5d',
                                            scrollClassNames: { content: 'BranchSelectionBlock_scrollContent_8a' },
                                            barClassNames: { base: C()('BranchSelectionBlock_bar_34') },
                                            api: a,
                                        },
                                        Ve(
                                            c,
                                            (e) =>
                                                e.branches.length > 0 &&
                                                i().createElement(
                                                    'div',
                                                    {
                                                        ref: (t) => {
                                                            return (
                                                                (u = t),
                                                                (a = e.nation),
                                                                void (
                                                                    u && l.current.push({ nation: a, nationBlock: u })
                                                                )
                                                            );
                                                            var u, a;
                                                        },
                                                        key: e.nation,
                                                    },
                                                    i().createElement(Nu, {
                                                        nation: e,
                                                        className: 'BranchSelectionBlock_nationBlock_cf',
                                                    }),
                                                ),
                                        ),
                                        s > 0 &&
                                            i().createElement('div', {
                                                className: 'BranchSelectionBlock_emptyArea_be',
                                                style: { height: `${s}px` },
                                            }),
                                    ),
                                ),
                            ),
                        )
                    );
                });
                var ku = u(613);
                const Ou = 3600;
                Date.now(), ku.Ew.getRegionalDateTime, ku.Ew.getFormattedDateTime;
                const Pu = () => {};
                let Hu;
                ne.Sw.instance,
                    (function (e) {
                        (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                    })(Hu || (Hu = {})),
                    ne.Sw.instance;
                const Vu = (e, t) => {
                        const u = (0, r.useRef)();
                        return (
                            (0, r.useEffect)(() => {
                                (t && !t(e)) || (u.current = e);
                            }, [t, e]),
                            u.current
                        );
                    },
                    Wu = (e = 0, t, u = 0, a = Pu) => {
                        const n = (0, r.useState)(e),
                            i = n[0],
                            s = n[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const n = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== u && t <= u ? (s(u), a && a(), clearInterval(r)) : s(t);
                                            },
                                            1e3 * (t || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, t, u, a]),
                            i
                        );
                    },
                    $u = 'NotStarted',
                    Uu = 'SelectBranch',
                    Gu = 'TradeStatus',
                    zu = 'TradeStatusInfinite',
                    Xu = (0, r.createContext)({ state: $u, stateID: 0 }),
                    ju = { playedSounds: new Set(), setPlayedSounds: Y },
                    qu = (0, r.createContext)(ju),
                    Yu = ({ children: e }) => {
                        const t = (0, r.useState)(new Set()),
                            u = t[0],
                            a = t[1];
                        return i().createElement(qu.Provider, { value: { playedSounds: u, setPlayedSounds: a } }, e);
                    };
                let Ku, Zu;
                var Qu;
                !(function (e) {
                    (e.B0 = 'b0'),
                        (e.B1 = 'b1'),
                        (e.B2 = 'b2'),
                        (e.B3 = 'b3'),
                        (e.B4 = 'b4'),
                        (e.B5 = 'b5'),
                        (e.B6 = 'b6');
                })(Ku || (Ku = {})),
                    ((Qu = Zu || (Zu = {})).Small = 'small'),
                    (Qu.Medium = 'medium'),
                    (Qu.Big = 'big');
                const Ju = (e) => {
                        const t = (0, r.useState)(!1),
                            u = t[0],
                            a = t[1],
                            n = (0, r.useCallback)(
                                (t) => {
                                    a(t), e && e(t);
                                },
                                [e],
                            );
                        return [u, n];
                    },
                    ea = {
                        base: 'Heading_base_f7',
                        title: 'Heading_title_8c',
                        base__branchGet: 'Heading_base__branchGet_d5',
                        base__branchTrade: 'Heading_base__branchTrade_66',
                        base__active: 'Heading_base__active_df',
                        subtitle: 'Heading_subtitle_c4',
                        subtitle__flash: 'Heading_subtitle__flash_fe',
                        flashSubTitleAnim: 'Heading_flashSubTitleAnim_e4',
                        subtitle__flashNew: 'Heading_subtitle__flashNew_d8',
                        flashSubTitleAnimNew: 'Heading_flashSubTitleAnimNew_2f',
                        base__flash: 'Heading_base__flash_12',
                        base__hovered: 'Heading_base__hovered_61',
                        arrow: 'Heading_arrow_5b',
                        arrow__flash: 'Heading_arrow__flash_07',
                        flashArrowAnimFirst: 'Heading_flashArrowAnimFirst_be',
                        flashArrowAnim: 'Heading_flashArrowAnim_00',
                        arrow__flashArrowNew: 'Heading_arrow__flashArrowNew_8b',
                        flashArrowNewAnimFirst: 'Heading_flashArrowNewAnimFirst_1e',
                        flashArrowNewAnim: 'Heading_flashArrowNewAnim_d1',
                        lights: 'Heading_lights_53',
                        glow: 'Heading_glow_52',
                        highlight: 'Heading_highlight_57',
                        light: 'Heading_light_ce',
                        text: 'Heading_text_3f',
                        slotGlowAnimInfinite: 'Heading_slotGlowAnimInfinite_19',
                        slotLevelAnimInfinite: 'Heading_slotLevelAnimInfinite_ee',
                        slotArrowAnimInfinite: 'Heading_slotArrowAnimInfinite_b2',
                        flashArrowNewAnimFirstExtraLarge: 'Heading_flashArrowNewAnimFirstExtraLarge_48',
                        flashArrowAnimNewExtraLarge: 'Heading_flashArrowAnimNewExtraLarge_43',
                    },
                    ta = R.strings.tech_tree_trade_in.sectionResult,
                    ua = ({ mode: e, active: t, hovered: u }) => {
                        const a = (0, r.useContext)(Xu).state === Uu && e === Au;
                        return (
                            (0, r.useEffect)(() => {
                                a && o.O.sound.play.sound('tradein_branch_arrow_yellow');
                            }, [a]),
                            i().createElement(
                                'div',
                                {
                                    className: C()(
                                        ea.base,
                                        t && ea.base__active,
                                        u && ea.base__hovered,
                                        ea[`base__${e}`],
                                        a && ea.base__flash,
                                    ),
                                },
                                t &&
                                    i().createElement(
                                        'div',
                                        { className: ea.lights },
                                        i().createElement('div', { className: ea.glow }),
                                        i().createElement('div', { className: ea.highlight }),
                                        i().createElement('div', { className: ea.light }),
                                    ),
                                a
                                    ? i().createElement(
                                          i().Fragment,
                                          null,
                                          i().createElement('div', { className: C()(ea.arrow, ea.arrow__flash) }),
                                          i().createElement('div', {
                                              className: C()(ea.arrow, ea.arrow__flashArrowNew),
                                          }),
                                      )
                                    : i().createElement('div', { className: ea.arrow }),
                                i().createElement(
                                    'div',
                                    { className: ea.text },
                                    i().createElement('div', { className: ea.title }, ge(ta.title, e)),
                                    i().createElement(
                                        'div',
                                        { className: C()(ea.subtitle, a && ea.subtitle__flash) },
                                        ge(ta.subtitle, e),
                                    ),
                                    a &&
                                        i().createElement(
                                            'div',
                                            { className: C()(ea.subtitle, ea.subtitle__flashNew) },
                                            ta.subtitle.proceed(),
                                        ),
                                ),
                            )
                        );
                    },
                    aa = {
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
                        bezier: (e, t, u, a) => (n) =>
                            (1 - n) * (1 - n) * (1 - n) * e +
                            3 * (1 - n) * (1 - n) * n * t +
                            3 * (1 - n) * n * n * u +
                            n * n * n * a,
                    },
                    na = {
                        from: { opacity: 1 },
                        to: [{ opacity: 0.99999 }, { opacity: 0 }],
                        delay: 400,
                        reset: !0,
                        cancel: !1,
                        config: { duration: 400, easing: aa.easeInOutCubic },
                    },
                    ra = Object.assign({}, na, { from: { opacity: 0.5 }, to: { opacity: 0.5 } }),
                    ia = {
                        from: { opacity: 0, filter: 'brightness(1)', anim: 0 },
                        to: [
                            { opacity: 0, anim: 1 },
                            { filter: 'brightness(1)', anim: 2 },
                            { opacity: 1, filter: 'brightness(1.4)', anim: 3 },
                            { filter: 'brightness(1.4)', anim: 4 },
                            { opacity: 1, filter: 'brightness(1)', anim: 5 },
                        ],
                        delay: 1200,
                        reset: !0,
                        config: { duration: 400, easing: aa.easeOutQuart },
                    },
                    sa = {
                        from: { opacity: 0, filter: 'brightness(1)' },
                        to: [
                            { opacity: 0 },
                            { filter: 'brightness(1)' },
                            { opacity: 1, filter: 'brightness(1.4)' },
                            { filter: 'brightness(1.4)' },
                            { opacity: 1, filter: 'brightness(1)' },
                        ],
                        delay: 1400,
                        reset: !0,
                        config: { duration: 500, easing: aa.easeOutQuart },
                    },
                    oa = {
                        from: { opacity: 0, anim: 0 },
                        to: [
                            { opacity: 0.8, anim: 1 },
                            { opacity: 0.4, anim: 2 },
                            { opacity: 0.3, anim: 3 },
                        ],
                        reset: !0,
                        delay: 1600,
                        config: { mass: 8, tension: 2500, friction: 280 },
                    },
                    la = {
                        from: { opacity: 0.3 },
                        to: [{ opacity: 0.3 }, { opacity: 0.6 }, { opacity: 0.4 }, { opacity: 0.3 }],
                        loop: { reverse: !1 },
                        delay: 3e3,
                        config: { mass: 8, tension: 2500, friction: 200 },
                    },
                    ca = {
                        from: { opacity: 0 },
                        to: [{ opacity: 0 }, { opacity: 1 }, { opacity: 1 }, { opacity: 0 }],
                        reset: !0,
                        delay: 1600,
                        config: { mass: 5, tension: 2e3, friction: 200 },
                    },
                    _a = {
                        base: 'Item_base_6c',
                        slotFrame: 'Item_slotFrame_b0',
                        slotGlowAnimInfinite: 'Item_slotGlowAnimInfinite_70',
                        bg: 'Item_bg_af',
                        base__branchGet: 'Item_base__branchGet_55',
                        bg__empty: 'Item_bg__empty_b0',
                        base__active: 'Item_base__active_4e',
                        base__branchTrade: 'Item_base__branchTrade_d0',
                        bg__normal: 'Item_bg__normal_be',
                        base__hovered: 'Item_base__hovered_25',
                        container: 'Item_container_23',
                        number: 'Item_number_7b',
                        base__selectBranchAnimation: 'Item_base__selectBranchAnimation_8f',
                        slotLevelAnimInfinite: 'Item_slotLevelAnimInfinite_fc',
                        icon: 'Item_icon_45',
                        base__notApplicable: 'Item_base__notApplicable_74',
                        vehicleName: 'Item_vehicleName_51',
                        vehicleLevelBlock: 'Item_vehicleLevelBlock_e5',
                        vehicleLevelIcon: 'Item_vehicleLevelIcon_73',
                        vehicleLevel: 'Item_vehicleLevel_fb',
                        iconObtained: 'Item_iconObtained_92',
                        iconAnimated: 'Item_iconAnimated_16',
                        iconAnimated__accept: 'Item_iconAnimated__accept_38',
                        iconAnimated__decline: 'Item_iconAnimated__decline_60',
                        hoverSlot: 'Item_hoverSlot_9e',
                        frame: 'Item_frame_c0',
                        frameBg: 'Item_frameBg_df',
                        arrow: 'Item_arrow_e3',
                        arrow__1: 'Item_arrow__1_5a',
                        arrow__2: 'Item_arrow__2_9d',
                        arrow__3: 'Item_arrow__3_20',
                        flashSubTitleAnimNew: 'Item_flashSubTitleAnimNew_bc',
                        flashSubTitleAnim: 'Item_flashSubTitleAnim_2a',
                        flashArrowAnimFirst: 'Item_flashArrowAnimFirst_6d',
                        flashArrowAnim: 'Item_flashArrowAnim_a8',
                        slotArrowAnimInfinite: 'Item_slotArrowAnimInfinite_c4',
                        flashArrowNewAnimFirst: 'Item_flashArrowNewAnimFirst_e8',
                        flashArrowNewAnimFirstExtraLarge: 'Item_flashArrowNewAnimFirstExtraLarge_5c',
                        flashArrowNewAnim: 'Item_flashArrowNewAnim_86',
                        flashArrowAnimNewExtraLarge: 'Item_flashArrowAnimNewExtraLarge_a2',
                        iconHide: 'Item_iconHide_08',
                        show: 'Item_show_2b',
                    },
                    ma = 'normal',
                    da = 'empty',
                    Ea = R.strings.tech_tree_trade_in.sectionResult.item;
                function pa(e) {
                    return e ? ge(R.images.gui.maps.icons.vehicle.c_420x307, e.icon) : '';
                }
                const ha = ({
                        mode: e,
                        state: t,
                        active: u,
                        level: a,
                        vehicle: n,
                        hovered: s,
                        obtainedInTrade: l,
                        applicable: c,
                    }) => {
                        const _ = t === da,
                            m = (n && n.obtained) || l,
                            d = (0, r.useContext)(Xu),
                            E = e === Au,
                            p = d.state === Uu && E,
                            h = (0, Ct.useSpring)(() => ia),
                            b = h[0],
                            A = h[1],
                            g = (0, Ct.useTrail)(3, () => oa),
                            v = g[0],
                            D = g[1],
                            f = (0, Ct.useSpring)(() => ca),
                            F = f[0],
                            B = f[1],
                            y = (0, Ct.useSpring)(() => sa),
                            w = y[0],
                            N = y[1],
                            S = (0, Ct.useSpring)(() => na),
                            x = S[0],
                            T = S[1],
                            I = (() => {
                                const e = (0, r.useContext)(qu);
                                if (null === e) throw new Error('You can use useSound only with resources component');
                                const t = e.playedSounds;
                                return i().useMemo(
                                    () => ({
                                        playOnce: (e) => {
                                            t.has(e) || (o.O.sound.play.sound(e), t.add(e));
                                        },
                                        clean: () => {
                                            t.clear();
                                        },
                                    }),
                                    [t],
                                );
                            })();
                        return (
                            (0, r.useLayoutEffect)(() => {
                                A.stop(!0),
                                    D.stop(!0),
                                    B.stop(!0),
                                    N.stop(!0),
                                    T.stop(!0),
                                    I.clean(),
                                    d.state === Gu
                                        ? (A.set(ia.from),
                                          B.set(ca.from),
                                          D.current.forEach((e) => e.set({ opacity: 0 })),
                                          N.set(sa.from),
                                          T.set({ opacity: c ? 1 : 0.5 }))
                                        : d.state === zu &&
                                          (T.set({ opacity: c ? 0 : 0.5 }),
                                          A.set({ opacity: 1 }),
                                          N.set({ opacity: 1 }),
                                          E &&
                                              (D.current.forEach((e) => e.set({ opacity: 0.2 })),
                                              D.start(() => Object.assign({}, la))));
                            }, [D, T, A, N, B, d.stateID, c, d.state, E, I]),
                            (0, r.useEffect)(() => {
                                d.state === Gu &&
                                    (T.start(c ? na : ra),
                                    m && N.start(sa),
                                    E &&
                                        c &&
                                        (B.start(ca),
                                        D.start((e) =>
                                            Object.assign({}, oa, {
                                                onStart: (t, u) => {
                                                    const a = 1 === u.springs.anim.goal;
                                                    0 === e && a && I.playOnce('tradein_branch_arrows_between');
                                                },
                                                onRest: (t) => {
                                                    2 === e &&
                                                        t.finished &&
                                                        D.start(() => Object.assign({}, la, { onRest: Y, onStart: Y }));
                                                },
                                            }),
                                        )),
                                    m &&
                                        A.start(
                                            Object.assign({}, ia, {
                                                onStart: (e, t) => {
                                                    const u = 3 === t.springs.anim.goal;
                                                    E && u && I.playOnce('tradein_branch_checkmark');
                                                },
                                            }),
                                        ));
                            }, [D, T, A, N, B, E, m, d.state, d.stateID, c, I]),
                            i().createElement(
                                'div',
                                {
                                    className: C()(
                                        _a.base,
                                        _a[`base__${e}`],
                                        u && _a.base__active,
                                        s && !_ && _a.base__hovered,
                                        !c && _a.base__notApplicable,
                                        p && _a.base__selectBranchAnimation,
                                    ),
                                },
                                c &&
                                    E &&
                                    i().createElement(
                                        'div',
                                        { className: _a.frame },
                                        i().createElement(Ct.animated.div, { style: F, className: _a.frameBg }),
                                        v.map((e, t) =>
                                            i().createElement(Ct.animated.div, {
                                                key: t,
                                                style: e,
                                                className: C()(_a.arrow, _a[`arrow__${t + 1}`]),
                                            }),
                                        ),
                                    ),
                                i().createElement(
                                    'div',
                                    { className: _a.container },
                                    i().createElement('div', {
                                        className: C()(_a.bg, _ && _a.bg__empty, c && !_ && _a.bg__normal),
                                    }),
                                    p && i().createElement('div', { className: _a.slotFrame }),
                                    _ && i().createElement('div', { className: _a.number }, Zt(a)),
                                    n &&
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement('div', {
                                                style: { backgroundImage: `url('${pa(n)}')` },
                                                className: _a.icon,
                                            }),
                                            i().createElement(
                                                'div',
                                                { className: _a.vehicleLevelBlock },
                                                i().createElement(
                                                    'div',
                                                    { className: _a.vehicleLevel },
                                                    Zt(n.vehicleLvl),
                                                ),
                                                i().createElement('div', {
                                                    style: {
                                                        backgroundImage: `url('R.images.gui.maps.icons.vehicleTypes.c_24x24.${lu(n.vehicleType)}')`,
                                                    },
                                                    className: _a.vehicleLevelIcon,
                                                }),
                                            ),
                                            i().createElement('div', { className: _a.vehicleName }, n.vehicleName),
                                            n.obtained &&
                                                i().createElement(Ct.animated.div, {
                                                    style: x,
                                                    className: _a.iconObtained,
                                                }),
                                        ),
                                    m &&
                                        c &&
                                        i().createElement(Ct.animated.div, {
                                            style: c && e === Au ? w : b,
                                            className: C()(
                                                _a.iconAnimated,
                                                c && e === Au && _a.iconAnimated__decline,
                                                l && c && e === bu && _a.iconAnimated__accept,
                                            ),
                                        }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: _a.hoverSlot },
                                    (function (e, t = !1, u = !1) {
                                        return ge(t ? (u ? Ea.garage : Ea.researched) : Ea.notApplicable, e);
                                    })(e, c, m),
                                ),
                            )
                        );
                    },
                    ba = {
                        container: 'SlotContainer_container_03',
                        container__lightedEmptyCard: 'SlotContainer_container__lightedEmptyCard_e1',
                        arrow: 'SlotContainer_arrow_21',
                        arrow__branchGet_applicable_applicable_notActive:
                            'SlotContainer_arrow__branchGet_applicable_applicable_notActive_1d',
                        arrow__branchGet_empty_empty_notActive:
                            'SlotContainer_arrow__branchGet_empty_empty_notActive_38',
                        arrow__branchGet_applicable_notApplicable_notActive:
                            'SlotContainer_arrow__branchGet_applicable_notApplicable_notActive_78',
                        arrow__branchGet_notApplicable_applicable_notActive:
                            'SlotContainer_arrow__branchGet_notApplicable_applicable_notActive_aa',
                        arrow__branchTrade_applicable_applicable_notActive:
                            'SlotContainer_arrow__branchTrade_applicable_applicable_notActive_ef',
                        arrow__branchTrade_empty_empty_notActive:
                            'SlotContainer_arrow__branchTrade_empty_empty_notActive_92',
                        arrow__branchTrade_applicable_notApplicable_notActive:
                            'SlotContainer_arrow__branchTrade_applicable_notApplicable_notActive_e7',
                        arrow__branchTrade_notApplicable_applicable_notActive:
                            'SlotContainer_arrow__branchTrade_notApplicable_applicable_notActive_78',
                        arrow__branchGet_applicable_applicable_active:
                            'SlotContainer_arrow__branchGet_applicable_applicable_active_77',
                        arrow__branchGet_empty_empty_active: 'SlotContainer_arrow__branchGet_empty_empty_active_e2',
                        arrow__branchGet_applicable_notApplicable_active:
                            'SlotContainer_arrow__branchGet_applicable_notApplicable_active_f7',
                        arrow__branchGet_notApplicable_applicable_active:
                            'SlotContainer_arrow__branchGet_notApplicable_applicable_active_3e',
                        arrow__branchTrade_applicable_applicable_active:
                            'SlotContainer_arrow__branchTrade_applicable_applicable_active_69',
                        arrow__branchTrade_empty_empty_active: 'SlotContainer_arrow__branchTrade_empty_empty_active_7e',
                        arrow__branchTrade_applicable_notApplicable_active:
                            'SlotContainer_arrow__branchTrade_applicable_notApplicable_active_c9',
                        arrow__branchTrade_notApplicable_applicable_active:
                            'SlotContainer_arrow__branchTrade_notApplicable_applicable_active_c1',
                        arrow__selectBranchAnimation: 'SlotContainer_arrow__selectBranchAnimation_df',
                        slotArrowAnimInfinite: 'SlotContainer_slotArrowAnimInfinite_d5',
                        flashSubTitleAnimNew: 'SlotContainer_flashSubTitleAnimNew_86',
                        flashSubTitleAnim: 'SlotContainer_flashSubTitleAnim_69',
                        flashArrowAnimFirst: 'SlotContainer_flashArrowAnimFirst_5a',
                        flashArrowAnim: 'SlotContainer_flashArrowAnim_02',
                        slotGlowAnimInfinite: 'SlotContainer_slotGlowAnimInfinite_b1',
                        slotLevelAnimInfinite: 'SlotContainer_slotLevelAnimInfinite_e0',
                        flashArrowNewAnimFirst: 'SlotContainer_flashArrowNewAnimFirst_cf',
                        flashArrowNewAnimFirstExtraLarge: 'SlotContainer_flashArrowNewAnimFirstExtraLarge_66',
                        flashArrowNewAnim: 'SlotContainer_flashArrowNewAnim_23',
                        flashArrowAnimNewExtraLarge: 'SlotContainer_flashArrowAnimNewExtraLarge_c4',
                    },
                    Aa = ({
                        children: e,
                        lastSlot: t,
                        branchType: u,
                        from: a,
                        to: n,
                        active: s,
                        lightedEmptyCard: o,
                    }) => {
                        const l = (0, r.useContext)(Xu).state === Uu && u === Au;
                        return i().createElement(
                            i().Fragment,
                            null,
                            i().createElement(
                                'div',
                                { className: C()(ba.container, o && ba.container__lightedEmptyCard) },
                                e,
                            ),
                            !t &&
                                i().createElement('div', {
                                    className: C()(
                                        ba.arrow,
                                        ba[`arrow__${u}_${a}_${n}_${s ? 'active' : 'notActive'}`],
                                        l && ba.arrow__selectBranchAnimation,
                                    ),
                                }),
                        );
                    };
                function ga(e, t, u) {
                    return u === bu && e && t;
                }
                const va = (0, H.Pi)(({ mode: e, active: t, state: u, branch: a, hovered: n, obtainedIndices: r }) => {
                        const s = Bu().model.computes.minLevelForVehicleToTrade();
                        function o(t) {
                            return vu(e, s, t) ? 'applicable' : 'notApplicable';
                        }
                        return i().createElement(
                            'div',
                            { className: 'List_base_2b' },
                            (() => {
                                switch (u) {
                                    case da:
                                        return Array.from({ length: 5 }).map((u, a) =>
                                            i().createElement(
                                                Aa,
                                                {
                                                    lastSlot: 4 === a,
                                                    key: a,
                                                    branchType: e,
                                                    from: da,
                                                    to: da,
                                                    active: t,
                                                    lightedEmptyCard: ga(n, t, e),
                                                },
                                                i().createElement(ha, {
                                                    mode: e,
                                                    state: da,
                                                    active: t,
                                                    level: gu[a],
                                                    hovered: n,
                                                }),
                                            ),
                                        );
                                    case ma:
                                        return (
                                            a &&
                                            Ve(a.vehiclesList, (u, l) =>
                                                i().createElement(
                                                    Aa,
                                                    {
                                                        lastSlot: l === a.vehiclesList.length - 1,
                                                        key: l,
                                                        branchType: e,
                                                        active: t,
                                                        from: o(u),
                                                        to: o(Pe(a.vehiclesList, l + 1)),
                                                    },
                                                    i().createElement(ha, {
                                                        mode: e,
                                                        state: ma,
                                                        active: t,
                                                        level: gu[l],
                                                        vehicle: u,
                                                        hovered: n,
                                                        obtainedInTrade: r && r.some((e) => e === l),
                                                        applicable: vu(e, s, u),
                                                    }),
                                                ),
                                            )
                                        );
                                    default:
                                        return (
                                            console.warn('Unknown TechTreeTradeInView BranchSelection List state'), null
                                        );
                                }
                            })(),
                        );
                    }),
                    Ca = {
                        base: 'Slot_base_6c',
                        base__active: 'Slot_base__active_e1',
                        bg: 'Slot_bg_c1',
                        base__hovered: 'Slot_base__hovered_9a',
                        base__branchGet: 'Slot_base__branchGet_1a',
                        base__branchTrade: 'Slot_base__branchTrade_66',
                        content: 'Slot_content_a7',
                        heading: 'Slot_heading_11',
                        list: 'Slot_list_e8',
                        flag: 'Slot_flag_42',
                    },
                    Da = (0, H.Pi)(({ branchName: e }) => {
                        var t, u;
                        const a = Bu(),
                            n = a.model,
                            s = a.controls,
                            l = n.mode.get(),
                            c = (e) =>
                                e === bu
                                    ? n.computes.selectedBranchToGet()
                                    : e === Au
                                      ? n.computes.selectedBranchToTrade()
                                      : void 0,
                            _ =
                                null == (t = c(Au))
                                    ? void 0
                                    : t.vehiclesList.reduce((e, t, u) => (t.value.obtained && e.push(u), e), []),
                            m = null == (u = c(e)) ? void 0 : u.vehiclesList[0].value.vehicleNation,
                            d = Ju(),
                            E = d[0],
                            p = d[1],
                            h = Ju(),
                            b = h[0],
                            A = h[1],
                            g = (0, r.useState)(!1),
                            v = g[0],
                            D = g[1];
                        return (
                            (0, r.useLayoutEffect)(() => {
                                D(l === e);
                            }, [e, l]),
                            i().createElement(
                                'div',
                                {
                                    className: C()(
                                        Ca.base,
                                        E && Ca.base__hovered,
                                        v && Ca.base__active,
                                        Ca[`base__${e}`],
                                    ),
                                    onMouseEnter: function () {
                                        o.O.sound.play.highlight(), p(!0);
                                    },
                                    onMouseLeave: () => p(!1),
                                    onClick: function () {
                                        v || (o.O.sound.play.sound(eu), s.changeMode(e));
                                    },
                                },
                                i().createElement('div', { className: Ca.bg }),
                                m &&
                                    i().createElement('div', {
                                        className: Ca.flag,
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.crew.flags.$dyn(m)})`,
                                        },
                                    }),
                                i().createElement(
                                    'div',
                                    { className: Ca.content },
                                    i().createElement(
                                        'div',
                                        { className: Ca.heading },
                                        i().createElement(ua, { mode: e, active: v, hovered: E }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: Ca.list, onMouseEnter: () => A(!0), onMouseLeave: () => A(!1) },
                                        i().createElement(va, {
                                            mode: e,
                                            active: v,
                                            state: c(e) ? ma : da,
                                            branch: c(e),
                                            obtainedIndices: _,
                                            hovered: b,
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    fa = (0, H.Pi)(() => {
                        const e = Bu().model,
                            t = e.mode.get(),
                            u = e.computes.selectedBranchToGet(),
                            a = e.computes.selectedBranchToTrade(),
                            n = Vu(u),
                            s = Vu(a),
                            o = n !== u,
                            l = s !== a,
                            c = (0, r.useState)({ state: $u, stateID: Math.random() }),
                            _ = c[0],
                            m = c[1],
                            d = e.computes.selectedBranchToGet() && e.computes.selectedBranchToTrade(),
                            E = (0, r.useContext)(mt);
                        return (
                            (0, r.useEffect)(() => {
                                null === n && null !== u && m({ state: Uu, stateID: Math.random() });
                            }, [n, u]),
                            (0, r.useEffect)(() => {
                                m({ state: $u, stateID: Math.random() });
                            }, [t]),
                            (0, r.useEffect)(() => {
                                d && (l || o) && m({ state: Gu, stateID: Math.random() });
                            }, [d, t, o, l]),
                            (0, r.useEffect)(() => {
                                E.has(z.MULTICURRENCY_SELECTION) && m({ state: zu, stateID: Math.random() });
                            }, [E]),
                            i().createElement(
                                Xu.Provider,
                                { value: _ },
                                i().createElement(
                                    Yu,
                                    null,
                                    i().createElement(
                                        'div',
                                        { className: 'SelectionResult_base_90' },
                                        i().createElement(Da, { branchName: bu, key: bu }),
                                        i().createElement(Da, { branchName: Au, key: Au }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Fa = ({ message: e, className: t, classNames: u }) =>
                        i().createElement(
                            'div',
                            { className: C()('Spinner_base_87', t) },
                            e &&
                                i().createElement(
                                    'div',
                                    { className: C()('Spinner_caption_cf', null == u ? void 0 : u.caption) },
                                    e,
                                ),
                            i().createElement('div', {
                                className: C()('Spinner_gear_c4', null == u ? void 0 : u.gear),
                            }),
                            i().createElement('div', {
                                className: C()('Spinner_logo_bf', null == u ? void 0 : u.logo),
                            }),
                        ),
                    Ba = ({ errorBtnLabel: e, errorBtnClickHandler: t, errorMessage: u }) =>
                        i().createElement(
                            'div',
                            { className: 'Error_base_46' },
                            i().createElement('div', { className: 'Error_alertIcon_04' }),
                            i().createElement('div', { className: 'Error_errorCaption_f2' }, u),
                            i().createElement(Ie, { size: xe.medium, mixClass: 'Error_button_cd', onClick: t }, e),
                        );
                Ba.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const ya = ({
                    message: e,
                    isError: t,
                    errorMessage: u,
                    errorBtnLabel: a,
                    errorBtnClickHandler: n,
                    overlayAlpha: s,
                }) => {
                    const o = i().createRef();
                    return (
                        (0, r.useEffect)(() => {
                            const e = o.current;
                            e && s && (e.style.opacity = s);
                        }, [o, s]),
                        i().createElement(
                            'div',
                            { className: 'Waiting_base_c5' },
                            i().createElement('div', { className: 'Waiting_blackOverlay_55', ref: o }),
                            t
                                ? i().createElement(Ba, { errorBtnLabel: a, errorMessage: u, errorBtnClickHandler: n })
                                : i().createElement(Fa, { message: e }),
                        )
                    );
                };
                ya.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                const wa = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Na(e = st.n.NONE, t = wa, u = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== st.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u, a]);
                }
                const Sa = ({ onClose: e }) => {
                        var t;
                        return (
                            (t = e),
                            Na(st.n.ESCAPE, t),
                            i().createElement(
                                'div',
                                { className: 'Spinner_base_ee' },
                                i().createElement('div', { className: 'Spinner_blur_6b' }),
                                i().createElement(ya, {
                                    errorBtnClickHandler: Y,
                                    message: R.strings.waiting.loading(),
                                    overlayAlpha: '0',
                                }),
                            )
                        );
                    },
                    xa = {
                        base: 'App_base_76',
                        glow: 'App_glow_7e',
                        base__branchTrade: 'App_base__branchTrade_26',
                        base__branchGet: 'App_base__branchGet_0e',
                        title: 'App_title_21',
                        selectionResultBlock: 'App_selectionResultBlock_6e',
                        branchSelectionBlock: 'App_branchSelectionBlock_4b',
                    },
                    Ta = [De, fe],
                    Ia = (0, H.Pi)(() => {
                        const e = Bu().model,
                            t = ye(),
                            u = e.computes.allVehiclesHasBeenResearched();
                        return (
                            ((e, t, u) => {
                                var a;
                                i().useEffect(() => {
                                    if (u) return void t(Ce);
                                    let a = null,
                                        n = 0,
                                        r = 0;
                                    const i = [],
                                        s = () => {
                                            n++, l();
                                        },
                                        o = () => {
                                            r++, l();
                                        },
                                        l = () => {
                                            n + r === e.length &&
                                                (a && clearTimeout(a),
                                                (a = window.setTimeout(() => {
                                                    t(0 === n ? Ce : De);
                                                }, 500)));
                                        };
                                    return (
                                        e.forEach((e) => {
                                            const t = new Image();
                                            (t.src = e),
                                                i.push(t),
                                                t.addEventListener('load', o),
                                                t.addEventListener('error', s);
                                        }),
                                        () => {
                                            i.forEach((e) => {
                                                e.removeEventListener('load', o), e.removeEventListener('error', s);
                                            }),
                                                a && clearTimeout(a);
                                        }
                                    );
                                }, [u, e, t]),
                                    (a = () => t(fe)),
                                    (0, r.useEffect)(() => a, []);
                            })(
                                (function (e) {
                                    const t = [];
                                    return (
                                        e.forEach((e) => {
                                            e.value.branches.forEach((e) => {
                                                e.value.vehiclesList.forEach((e) => {
                                                    t.push(e.value.iconSmall);
                                                });
                                            });
                                        }),
                                        t
                                    );
                                })(e.computes.workingBranches()),
                                t.controls.updateLoadState,
                                u,
                            ),
                            Ta.includes(t.model.loadState.get())
                                ? i().createElement(Sa, { onClose: () => o.O.view.sendEvent.close() })
                                : i().createElement(
                                      'div',
                                      { className: C()(xa.base, xa[`base__${e.mode.get()}`]) },
                                      i().createElement('div', { className: xa.glow }),
                                      i().createElement(
                                          'div',
                                          { className: xa.title },
                                          i().createElement(dt, {
                                              title: R.strings.tech_tree_trade_in.branchSelection.title(),
                                          }),
                                      ),
                                      u
                                          ? i().createElement(Et, null)
                                          : i().createElement(
                                                i().Fragment,
                                                null,
                                                i().createElement(
                                                    'div',
                                                    { className: xa.selectionResultBlock },
                                                    i().createElement(fa, null),
                                                ),
                                                i().createElement(
                                                    'div',
                                                    { className: xa.branchSelectionBlock },
                                                    i().createElement(Ru, null),
                                                ),
                                            ),
                                  )
                        );
                    }),
                    Ma = ee()(
                        ({ observableModel: e }) => ({ root: e.object() }),
                        ({ externalModel: e }) => ({
                            showVideo: e.createCallbackNoArgs('onShowVideo'),
                            continue: e.createCallbackNoArgs('onContinue'),
                        }),
                    ),
                    La = Ma[0],
                    Ra = Ma[1],
                    ka = R.strings.tech_tree_trade_in.introPage,
                    Oa = R.images.tech_tree_trade_in.gui.maps.intro,
                    Pa = [
                        {
                            icon: Oa.section1(),
                            title: ka.content.section1.title(),
                            description: ka.content.section1.description(),
                        },
                        {
                            icon: Oa.section2(),
                            title: ka.content.section2.title(),
                            description: ka.content.section2.description(),
                        },
                        {
                            icon: Oa.section3(),
                            title: ka.content.section3.title(),
                            description: ka.content.section3.description(),
                        },
                    ],
                    Ha = () =>
                        i().createElement(
                            'div',
                            { className: 'Content_base_8d' },
                            Pa.map(({ icon: e, title: t, description: u }, a) =>
                                i().createElement(
                                    'div',
                                    { className: 'Content_section_2a', key: a },
                                    i().createElement('div', {
                                        className: 'Content_icon_f0',
                                        style: { backgroundImage: `url(${e})` },
                                    }),
                                    i().createElement('div', { className: 'Content_title_37' }, t),
                                    i().createElement('div', { className: 'Content_description_d4' }, u),
                                ),
                            ),
                        ),
                    Va = R.strings.tech_tree_trade_in.introPage,
                    Wa = ({ time: e }) =>
                        i().createElement(
                            'div',
                            { className: 'Timer_base_2a' },
                            i().createElement('div', { className: 'Timer_flash_d2' }),
                            i().createElement(
                                'div',
                                { className: 'Timer_content_5b' },
                                i().createElement('div', { className: 'Timer_text_e3' }, Va.timer.text()),
                                i().createElement(
                                    'div',
                                    { className: 'Timer_wrapper_ba' },
                                    i().createElement('div', { className: 'Timer_icon_67' }),
                                ),
                                i().createElement('div', { className: 'Timer_time_7a' }, e),
                            ),
                        ),
                    $a = R.strings.tech_tree_trade_in.introPage,
                    Ua = (0, H.Pi)(() => {
                        const e = Ra(),
                            t = e.model,
                            u = e.controls,
                            a = t.root.get().timeOffer,
                            n = w().mediaHeight,
                            r = ((e, t = !0) =>
                                e.days > 7 && t
                                    ? ou(R.strings.common.duration.days(), { days: e.days })
                                    : e.days >= 1
                                      ? 0 === e.hours
                                          ? ou(R.strings.common.duration.days(), { days: e.days })
                                          : `${ou(R.strings.common.duration.days(), { days: e.days })} ${ou(R.strings.common.duration.hours(), { hours: e.hours })}`
                                      : e.hours >= 1
                                        ? 0 === e.minutes
                                            ? ou(R.strings.common.duration.hours(), { hours: e.hours })
                                            : `${ou(R.strings.common.duration.hours(), { hours: e.hours })} ${ou(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                        : ou(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(
                                (function (e = 0) {
                                    let t = e;
                                    const u = Math.trunc(t / 86400);
                                    t -= 86400 * u;
                                    const a = Math.trunc(t / Ou);
                                    t -= a * Ou;
                                    const n = Math.trunc(t / 60);
                                    return (t -= 60 * n), { days: u, hours: a, minutes: n, seconds: t };
                                })(Wu(a)),
                                !1,
                            );
                        return i().createElement(
                            'div',
                            { className: 'App_base_13' },
                            i().createElement(
                                'div',
                                { className: 'App_container_d0' },
                                i().createElement(Wa, { time: r }),
                                i().createElement(
                                    'div',
                                    { className: 'App_titleContainer_0d' },
                                    i().createElement(dt, {
                                        title: $a.title(),
                                        subTitle: $a.subtitle(),
                                        className: 'App_title_1e',
                                    }),
                                ),
                                i().createElement('div', { className: 'App_content_73' }, i().createElement(Ha, null)),
                            ),
                            i().createElement(
                                'div',
                                { className: 'App_confirmButtonContainer_37' },
                                i().createElement(
                                    Ie,
                                    {
                                        size: n <= y.Small ? xe.small : xe.medium,
                                        mixClass: 'App_confirmButton_69',
                                        onClick: u.continue,
                                    },
                                    $a.button.confirm(),
                                ),
                            ),
                            i().createElement(
                                'div',
                                {
                                    className: 'App_youtubeButton_da',
                                    onMouseEnter: o.O.sound.play.highlight,
                                    onClick: () => {
                                        u.showVideo(), o.O.sound.play.click();
                                    },
                                },
                                i().createElement('div', { className: 'App_youtubeButtonIcon_a9' }),
                                i().createElement(
                                    'div',
                                    { className: 'App_youtubeButtonLabel_ba' },
                                    $a.button.youtube(),
                                ),
                            ),
                        );
                    }),
                    Ga = 'fragments',
                    za = 'freeXP',
                    Xa = 'intelligence',
                    ja = 'crystal',
                    qa = 100;
                function Ya(e, t, u) {
                    return 0 === e || (0 === u && t === qa);
                }
                function Ka({ value: e, rate: t }, u) {
                    const a = e - (e % t);
                    return u > qa ? { value: a - (u - qa) * t, rate: t } : { value: a, rate: t };
                }
                function Za(e, t) {
                    return t >= qa ? 0 : e - (e / 100) * t;
                }
                const Qa = ee()(
                        ({ observableModel: e }) => {
                            const t = { resources: e.array('resources'), baseCurrency: e.object('baseCurrency') },
                                u = (0, Ue.Om)(() =>
                                    Ve(t.resources.get(), (e) => e).sort(
                                        (e, t) => ve.indexOf(e.type) - ve.indexOf(t.type),
                                    ),
                                );
                            return Object.assign({}, t, { computes: { sortedResources: u } });
                        },
                        ({ externalModel: e }) => ({
                            confirm: e.createCallback((e) => ({ selectedResources: e }), 'onConfirm'),
                        }),
                    ),
                    Ja = Qa[0],
                    en = Qa[1],
                    tn = (0, r.createContext)(null);
                function un() {
                    const e = i().useContext(tn);
                    if (null === e) throw new Error('You can use useProgressionContext only with resources component');
                    return e;
                }
                const an = ({ children: e, initializeResources: t }) => {
                        const u = i().useState(t),
                            a = u[0],
                            n = u[1],
                            r = i().useState(0),
                            s = r[0],
                            o = r[1],
                            l = i().useRef(null),
                            c = (function (e) {
                                return Object.values(e).reduce((e, { value: t, rate: u }) => e + Math.round(t / u), 0);
                            })(a);
                        function _(e) {
                            l.current = e;
                        }
                        i().useEffect(() => {
                            o(c);
                        }, [c]);
                        const m = i().useMemo(
                            () => ({
                                delta: s,
                                setDelta: o,
                                resources: a,
                                setResources: n,
                                updateSelectedResource: _,
                                selectedResource: l.current,
                            }),
                            [s, a],
                        );
                        return i().createElement(tn.Provider, { value: m }, e);
                    },
                    nn = (e, t, u, a) => {
                        const n = un(),
                            r = n.setResources,
                            s = n.delta,
                            o = n.resources,
                            l = n.selectedResource,
                            c = o[e].value,
                            _ = s >= qa,
                            m = qa - s < 0 ? 0 : qa - s,
                            d = Math.min((m + Math.round(c / t)) * t, u - (u % t), a * t),
                            E = (0 === u && 0 === c) || 0 == a * t || (0 === c && _),
                            p = _
                                ? (function (e, t, u) {
                                      return t > qa ? (0 === e ? e : e - (t - qa) * u) : e;
                                  })(c, s, t)
                                : d;
                        return (
                            i().useEffect(() => {
                                let u;
                                if (s > 100 && l === e) {
                                    const a = () => {
                                        const u = { value: c >= p ? p : c, rate: t };
                                        r((t) =>
                                            Object.assign({}, t, { [e]: Object.assign({}, u, { type: t[e].type }) }),
                                        );
                                    };
                                    u = setTimeout(() => {
                                        a();
                                    }, 100);
                                }
                                return () => clearTimeout(u);
                            }, [c, s, t, l, r, p, e]),
                            i().useMemo(
                                () => ({
                                    stepperLimit: p,
                                    isResourceStepperDisabled: E,
                                    currentValue: c,
                                    setResources: r,
                                    delta: s,
                                    isResourceLoaded: _,
                                }),
                                [p, E, c, r, s, _],
                            )
                        );
                    },
                    rn = {
                        base: 'LimitContainer_base_93',
                        currentPercent: 'LimitContainer_currentPercent_71',
                        base__activated: 'LimitContainer_base__activated_65',
                        base__reached: 'LimitContainer_base__reached_73',
                        base__maxLimit: 'LimitContainer_base__maxLimit_fd',
                        text: 'LimitContainer_text_51',
                        limitDiscount: 'LimitContainer_limitDiscount_60',
                        slash: 'LimitContainer_slash_24',
                        wrapper: 'LimitContainer_wrapper_b9',
                        infoIcon: 'LimitContainer_infoIcon_79',
                    },
                    sn = R.strings.common.common;
                function on(e, t) {
                    return e === t ? 'reached' : e > 0 ? 'activated' : 'default';
                }
                const ln = ({ limit: e, amount: t }) =>
                        i().createElement(
                            'div',
                            { className: C()(rn.base, rn[`base__${on(t, e)}`], e === qa && rn.base__maxLimit) },
                            i().createElement(
                                'div',
                                { className: rn.currentPercent },
                                i().createElement(
                                    'div',
                                    { className: rn.text },
                                    R.strings.tech_tree_trade_in.multicurrencySelection.limitContainer.text(),
                                ),
                                i().createElement('div', { className: rn.amount }, t),
                                i().createElement('div', { className: rn.percent }, sn.percent()),
                            ),
                            i().createElement(
                                'div',
                                { className: rn.limitDiscount },
                                i().createElement('div', { className: rn.slash }, sn.slash()),
                                i().createElement('div', { className: rn.amount }, e),
                                i().createElement('div', { className: rn.percent }, sn.percent()),
                            ),
                            i().createElement(
                                'div',
                                { className: rn.wrapper },
                                i().createElement('div', { className: rn.infoIcon }),
                            ),
                        ),
                    cn = {
                        base: 'CardContainer_base_7c',
                        base__selected: 'CardContainer_base__selected_c0',
                        balanceContainer: 'CardContainer_balanceContainer_69',
                        icon: 'CardContainer_icon_a6',
                        balance: 'CardContainer_balance_04',
                        base__availableBalance: 'CardContainer_base__availableBalance_df',
                        limitContainer: 'CardContainer_limitContainer_f6',
                    },
                    _n = ({ type: e, balance: t, children: u, limit: a, selected: n, tooltipData: r, onClick: s }) => {
                        const o = un().resources[e],
                            l = o.value,
                            c = o.rate,
                            _ = (l && l / c) < 1 ? 0 : Math.round(l / c);
                        return i().createElement(
                            'div',
                            {
                                className: C()(
                                    cn.base,
                                    cn[`base__${e}`],
                                    n && cn.base__selected,
                                    t > 0 && cn.base__availableBalance,
                                ),
                                onClick: s,
                            },
                            i().createElement(
                                'div',
                                { className: cn.balanceContainer },
                                i().createElement('div', { className: cn.icon }),
                                i().createElement(
                                    'div',
                                    { className: cn.balance },
                                    i().createElement(re, { value: t }),
                                ),
                            ),
                            u,
                            i().createElement(
                                le,
                                {
                                    contentId:
                                        R.views.tech_tree_trade_in.lobby.tooltips.MulticurrencyTooltipView('resId'),
                                    args: Object.assign({ limit: a }, r),
                                },
                                i().createElement(
                                    'div',
                                    { className: cn.limitContainer },
                                    i().createElement(ln, { amount: _, limit: a }),
                                ),
                            ),
                        );
                    },
                    mn = ({ binding: e, text: t = '', classMix: u, alignment: a = su.left, formatWithBrackets: n }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const s = n && e ? ou(t, e) : t;
                        return i().createElement(
                            r.Fragment,
                            null,
                            s.split('\n').map((t, n) =>
                                i().createElement(
                                    'div',
                                    { className: C()('FormatText_base_d0', u), key: `${t}-${n}` },
                                    hu(t, a, e).map((e, t) => i().createElement(r.Fragment, { key: `${t}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    dn = {
                        base: 'CardInfo_base_e0',
                        base__fragments: 'CardInfo_base__fragments_e0',
                        mainInfo: 'CardInfo_mainInfo_cf',
                        imageContainer: 'CardInfo_imageContainer_aa',
                        typeIcon: 'CardInfo_typeIcon_b1',
                        base__disabled: 'CardInfo_base__disabled_ea',
                        imageDisabled: 'CardInfo_imageDisabled_6f',
                        resourceType: 'CardInfo_resourceType_c7',
                        inventorContainer: 'CardInfo_inventorContainer_60',
                        iconWrapper: 'CardInfo_iconWrapper_4d',
                        resourceIcon: 'CardInfo_resourceIcon_a5',
                        base__crystal: 'CardInfo_base__crystal_38',
                        rate: 'CardInfo_rate_51',
                        info: 'CardInfo_info_50',
                        percent: 'CardInfo_percent_e4',
                    },
                    En = R.strings.tech_tree_trade_in.multicurrencySelection.resourceType.tooltip,
                    pn = R.strings.tech_tree_trade_in.multicurrencySelection,
                    hn = R.strings.common.common,
                    bn = R.images.gui.maps.icons.blueprints.fragment,
                    An = R.images.tech_tree_trade_in.gui.maps.multicurrencySelection.resourceType,
                    gn = 'big';
                function vn(e, t, u) {
                    return e === Ga
                        ? u === gn
                            ? bn.s180x135.$dyn(t)
                            : bn.special.$dyn(t)
                        : u === gn
                          ? An.c_185x135.$dyn(e)
                          : An.c_16x16.$dyn(e);
                }
                const Cn = ({ type: e, rate: t, percent: u, disabled: a, classNames: n, icon: r = '' }) =>
                    i().createElement(
                        'div',
                        { className: C()(dn.base, dn[`base__${e}`], a && dn.base__disabled) },
                        i().createElement(
                            ke,
                            {
                                header: ge(En.header, e),
                                body:
                                    e === Ga
                                        ? ou(En.body.fragments(), {
                                              nation: R.strings.tech_tree_trade_in.nations.genetiveCase.$dyn(r),
                                          })
                                        : ge(En.body, e),
                            },
                            i().createElement(
                                'div',
                                { className: dn.mainInfo },
                                i().createElement(
                                    'div',
                                    { className: dn.imageContainer },
                                    i().createElement('div', {
                                        className: dn.typeIcon,
                                        style: { backgroundImage: `url(${vn(e, r, gn)})` },
                                    }),
                                    i().createElement('div', {
                                        className: dn.imageDisabled,
                                        style: { maskImage: `url(${vn(e, r, gn)})` },
                                    }),
                                ),
                                i().createElement('div', { className: dn.resourceType }, pn.resourceType.$dyn(e)),
                            ),
                        ),
                        i().createElement(
                            'div',
                            { className: C()(dn.inventorContainer, null == n ? void 0 : n.inventorContainer) },
                            i().createElement(
                                'div',
                                { className: dn.iconWrapper },
                                i().createElement('div', {
                                    className: dn.resourceIcon,
                                    style: { backgroundImage: `url(${vn(e, r, 'small')})` },
                                }),
                            ),
                            i().createElement(mn, {
                                text: pn.rate.text(),
                                classMix: dn.info,
                                binding: {
                                    rate: i().createElement(
                                        'div',
                                        { className: dn.rate },
                                        i().createElement(re, { value: t }),
                                    ),
                                    percent: i().createElement('div', { className: dn.percent }, u, hn.percent()),
                                },
                            }),
                        ),
                    );
                let Dn;
                u(368),
                    (function (e) {
                        (e[(e.ZERO = 48)] = 'ZERO'),
                            (e[(e.ONE = 49)] = 'ONE'),
                            (e[(e.TWO = 50)] = 'TWO'),
                            (e[(e.THREE = 51)] = 'THREE'),
                            (e[(e.FOUR = 52)] = 'FOUR'),
                            (e[(e.FIVE = 53)] = 'FIVE'),
                            (e[(e.SIX = 54)] = 'SIX'),
                            (e[(e.SEVEN = 55)] = 'SEVEN'),
                            (e[(e.EIGHT = 56)] = 'EIGHT'),
                            (e[(e.NINE = 57)] = 'NINE'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9');
                    })(Dn || (Dn = {}));
                const fn = {
                    base: 'NumericStepper_base_35',
                    base__small: 'NumericStepper_base__small_11',
                    base__medium: 'NumericStepper_base__medium_9d',
                    base__large: 'NumericStepper_base__large_dc',
                    base__isFocus: 'NumericStepper_base__isFocus_49',
                    base__isDisabled: 'NumericStepper_base__isDisabled_ac',
                    inputContainer: 'NumericStepper_inputContainer_e2',
                    input: 'NumericStepper_input_55',
                    'base__withCurrency-small': 'NumericStepper_base__withCurrency-small_de',
                    'base__withCurrency-medium': 'NumericStepper_base__withCurrency-medium_69',
                    'base__withCurrency-large': 'NumericStepper_base__withCurrency-large_a1',
                    input__disabled: 'NumericStepper_input__disabled_d8',
                    input__credits: 'NumericStepper_input__credits_08',
                    'input__credits-disabled': 'NumericStepper_input__credits-disabled_3f',
                    input__gold: 'NumericStepper_input__gold_14',
                    'input__gold-disabled': 'NumericStepper_input__gold-disabled_c6',
                    input__xp: 'NumericStepper_input__xp_c4',
                    input__eliteXP: 'NumericStepper_input__eliteXP_85',
                    input__freeXP: 'NumericStepper_input__freeXP_06',
                    input__crystal: 'NumericStepper_input__crystal_2e',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_33',
                    'input__eliteXP-disabled': 'NumericStepper_input__eliteXP-disabled_a7',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_8b',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_f8',
                    input__withCurrency: 'NumericStepper_input__withCurrency_3b',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_db',
                    'input__xp-large': 'NumericStepper_input__xp-large_73',
                    'input__eliteXP-medium': 'NumericStepper_input__eliteXP-medium_49',
                    'input__eliteXP-large': 'NumericStepper_input__eliteXP-large_e5',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_2b',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_c9',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_56',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_4e',
                    currency: 'NumericStepper_currency_38',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_66',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_66',
                    'currency__eliteXP-medium': 'NumericStepper_currency__eliteXP-medium_68',
                    'currency__eliteXP-large': 'NumericStepper_currency__eliteXP-large_84',
                    'currency__freeXP-medium': 'NumericStepper_currency__freeXP-medium_79',
                    'currency__freeXP-large': 'NumericStepper_currency__freeXP-large_c7',
                    'currency__crystal-medium': 'NumericStepper_currency__crystal-medium_55',
                    'currency__crystal-large': 'NumericStepper_currency__crystal-large_a4',
                    currencyIcon: 'NumericStepper_currencyIcon_8e',
                    'currencyIcon__credits-small': 'NumericStepper_currencyIcon__credits-small_99',
                    'currencyIcon__credits-medium': 'NumericStepper_currencyIcon__credits-medium_1a',
                    'currencyIcon__credits-large': 'NumericStepper_currencyIcon__credits-large_bc',
                    'currencyIcon__gold-small': 'NumericStepper_currencyIcon__gold-small_2a',
                    'currencyIcon__gold-medium': 'NumericStepper_currencyIcon__gold-medium_f6',
                    'currencyIcon__gold-large': 'NumericStepper_currencyIcon__gold-large_d6',
                    'currencyIcon__crystal-small': 'NumericStepper_currencyIcon__crystal-small_b5',
                    'currencyIcon__crystal-medium': 'NumericStepper_currencyIcon__crystal-medium_ac',
                    'currencyIcon__crystal-large': 'NumericStepper_currencyIcon__crystal-large_2b',
                    'currencyIcon__freeXP-small': 'NumericStepper_currencyIcon__freeXP-small_4d',
                    'currencyIcon__freeXP-medium': 'NumericStepper_currencyIcon__freeXP-medium_85',
                    'currencyIcon__freeXP-large': 'NumericStepper_currencyIcon__freeXP-large_76',
                    'currencyIcon__xp-small': 'NumericStepper_currencyIcon__xp-small_73',
                    'currencyIcon__xp-medium': 'NumericStepper_currencyIcon__xp-medium_ef',
                    'currencyIcon__xp-large': 'NumericStepper_currencyIcon__xp-large_3e',
                    'currencyIcon__eliteXP-small': 'NumericStepper_currencyIcon__eliteXP-small_58',
                    'currencyIcon__eliteXP-medium': 'NumericStepper_currencyIcon__eliteXP-medium_e5',
                    'currencyIcon__eliteXP-large': 'NumericStepper_currencyIcon__eliteXP-large_3f',
                    dummyValue: 'NumericStepper_dummyValue_0c',
                    control: 'NumericStepper_control_ab',
                    buttonIncrement: 'NumericStepper_buttonIncrement_16',
                    buttonDecrement: 'NumericStepper_buttonDecrement_c8',
                    buttonIncrement__small: 'NumericStepper_buttonIncrement__small_f6',
                    buttonDecrement__small: 'NumericStepper_buttonDecrement__small_36',
                    buttonIncrement__medium: 'NumericStepper_buttonIncrement__medium_fd',
                    buttonDecrement__medium: 'NumericStepper_buttonDecrement__medium_d1',
                    buttonIncrement__large: 'NumericStepper_buttonIncrement__large_56',
                    buttonDecrement__large: 'NumericStepper_buttonDecrement__large_63',
                    buttonIncrement__isDisabled: 'NumericStepper_buttonIncrement__isDisabled_68',
                    buttonDecrement__isDisabled: 'NumericStepper_buttonDecrement__isDisabled_d9',
                    'buttonIncrement__isActive-small': 'NumericStepper_buttonIncrement__isActive-small_2a',
                    'buttonIncrement__isActive-medium': 'NumericStepper_buttonIncrement__isActive-medium_c2',
                    'buttonIncrement__isActive-large': 'NumericStepper_buttonIncrement__isActive-large_91',
                    'buttonDecrement__isActive-small': 'NumericStepper_buttonDecrement__isActive-small_21',
                    'buttonDecrement__isActive-medium': 'NumericStepper_buttonDecrement__isActive-medium_a3',
                    'buttonDecrement__isActive-large': 'NumericStepper_buttonDecrement__isActive-large_8b',
                };
                class Fn extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.timer = null),
                            (this.validationTimer = null),
                            (this.numericalStepper = (0, r.createRef)()),
                            (this.input = (0, r.createRef)()),
                            (this.state = {
                                value: this.props.value,
                                isFocused: this.props.isFocused,
                                activeDecrement: !1,
                                activeIncrement: !1,
                            }),
                            (this.setFocusOnInput = () => {
                                this.props.isDisabled ||
                                    (this.input.current &&
                                        (this.input.current.focus(), this.setState({ isFocused: !0 })));
                            }),
                            (this.blurInput = () => {
                                this.input.current && (this.input.current.blur(), this.setState({ isFocused: !1 }));
                            }),
                            (this.componentDidMount = () => {
                                this.state.isFocused &&
                                    (this.setFocusOnInput(),
                                    setTimeout(() => {
                                        const e = this.formattedValue.length;
                                        this.input.current && this.input.current.setSelectionRange(e, e);
                                    }, 0)),
                                    document.addEventListener('click', this.handleClickOutside),
                                    document.addEventListener('mouseup', this.handleMouseUp);
                            }),
                            (this.componentWillUnmount = () => {
                                this.stop(),
                                    document.removeEventListener('click', this.handleClickOutside),
                                    document.removeEventListener('mouseup', this.handleMouseUp);
                            }),
                            (this.formatValue = (e) =>
                                this.props.currencyType ? ne.Z5.getNumberFormat(e, ne.B3.GOLD) : e.toString()),
                            (this.getValidValue = (e) => {
                                const t = Math.min(this.props.maximum, Math.max(this.props.minimum, e)),
                                    u = this.props.stepSize;
                                return Math.round(t / u) * u;
                            }),
                            (this.changeValue = (e) => {
                                e !== this.state.value && (this.setState({ value: e }), this.props.onChange(e));
                            }),
                            (this.setCursorPosition = (e, t) => {
                                this.input.current && this.input.current.setSelectionRange(e, t),
                                    setTimeout(() => {
                                        this.input.current && this.input.current.setSelectionRange(e, t);
                                    });
                            }),
                            (this.handleChange = () => {
                                this.props.isDisabled || this.updateInput();
                            }),
                            (this.updateInput = (e = 0) => {
                                const t = e === st.n.BACKSPACE,
                                    u = e === st.n.DELETE,
                                    a = this.input.current,
                                    n = a.selectionStart || 0,
                                    r = a.selectionEnd || 0;
                                let i = a.value;
                                const s = Math.max(n, r),
                                    o = s;
                                u && (i = i.substring(0, s) + i.substring(s + 1, i.length)),
                                    t && 1 === n && 1 === i.length && (i = '0');
                                const l = Number(i.trim().replace(/\D/g, '')),
                                    c = Number.isSafeInteger(l) ? l : Number.MAX_SAFE_INTEGER,
                                    _ = this.props.currencyType ? ne.Z5.getNumberFormat(c, ne.B3.GOLD) : c.toString(),
                                    m = !isNaN(Number(i.replace(' ', '')));
                                a.value = _;
                                const d = new RegExp(/\d/g);
                                let E = 0;
                                for (let e = 0; e < o; e++) {
                                    const t = i[e] || '',
                                        u = _[E] || '';
                                    if (t.match(d) || t === u) {
                                        for (; t !== _[E] && E < _.length; ) E++;
                                        E++;
                                    }
                                }
                                '' === i ? (E = 1) : m || (E = i.length),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(E, E),
                                    this.changeValue(c),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        this.getValidValue(c) !== c &&
                                            this.state.isFocused &&
                                            (this.changeValue(this.getValidValue(c)),
                                            this.setCursorPosition(0, this.formatValue(c).length));
                                    }, 1e3));
                            }),
                            (this.handleDelete = (e) => {
                                const t = e.keyCode === st.n.BACKSPACE,
                                    u = e.keyCode === st.n.DELETE,
                                    a = e.target,
                                    n = a.selectionStart,
                                    r = a.selectionEnd,
                                    i = a.value,
                                    s = n !== r,
                                    o = new RegExp(/\D/),
                                    l = t && n ? n - 1 : n || 0;
                                if (s) return;
                                let c = l;
                                const _ = o.test(i[l]);
                                if (u && _) for (; o.test(i[c]) && c < i.length; ) c++;
                                if (t && _) for (; o.test(i[c]) && c > 0; ) c--;
                                if (c !== l || (t && _))
                                    return e.preventDefault(), (c = c < 0 ? 0 : c), void this.setCursorPosition(c, c);
                                ((t && 1 === n && 1 === i.length) || u) &&
                                    (e.preventDefault(), this.updateInput(e.keyCode));
                            }),
                            (this.handleClickOutside = (e) => {
                                const t = document.activeElement;
                                this.state.isFocused &&
                                    t !== this.input.current &&
                                    null !== this.numericalStepper.current &&
                                    !this.numericalStepper.current.contains(e.target) &&
                                    this.setState({ isFocused: !1 });
                            }),
                            (this.handleBlur = () => {
                                if (this.props.isDisabled) return;
                                const e = this.getValidValue(this.state.value);
                                e !== this.state.value && this.changeValue(e);
                            }),
                            (this.handleWheel = (e) => {
                                !this.props.isDisabled &&
                                    this.state.isFocused &&
                                    (e.preventDefault(), e.deltaY < 0 ? this.decrement() : this.increment());
                            }),
                            (this.handleMouseUp = () => {
                                this.stop(), this.setState({ activeIncrement: !1, activeDecrement: !1 });
                            }),
                            (this.handleMouseLeave = () => {
                                this.stop();
                            }),
                            (this.incrementHandleMouseEnter = (e) => {
                                this.state.activeIncrement && this.incrementHandleMouseDown(e, !0),
                                    this.buttonIncrementIsDisabled || this.playHoverSound();
                            }),
                            (this.decrementHandleMouseEnter = (e) => {
                                this.state.activeDecrement && this.decrementHandleMouseDown(e, !0),
                                    this.buttonDecrementIsDisabled || this.playHoverSound();
                            }),
                            (this.handleKeyDown = (e) => {
                                if (!this.props.isDisabled) {
                                    switch (
                                        (e.keyCode in st.n &&
                                            e.keyCode !== st.n.BACKSPACE &&
                                            e.keyCode !== st.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case st.n.ARROW_UP:
                                        case st.n.NUM_PLUS:
                                        case st.n.PLUS:
                                            this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment();
                                            break;
                                        case st.n.ARROW_DOWN:
                                        case st.n.NUM_MINUS:
                                        case st.n.MINUS:
                                            this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement();
                                            break;
                                        case st.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case st.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case st.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                this.changeValue(this.props.maximum), this.setCursorPosition(0, e);
                                            }
                                            break;
                                        case st.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case st.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case st.n.BACKSPACE:
                                        case st.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case st.n.ARROW_UP:
                                        case st.n.NUM_PLUS:
                                        case st.n.PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case st.n.ARROW_DOWN:
                                        case st.n.NUM_MINUS:
                                        case st.n.MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in Dn || e.preventDefault();
                            }),
                            (this.increment = () => {
                                const e = Math.min(
                                    this.getValidValue(this.state.value) + this.props.stepSize,
                                    this.props.maximum,
                                );
                                this.changeValue(e);
                            }),
                            (this.decrement = () => {
                                const e = Math.max(
                                    this.getValidValue(this.state.value) - this.props.stepSize,
                                    this.props.minimum,
                                );
                                this.changeValue(e);
                            }),
                            (this.incrementHandleMouseDown = (e, t = !1) => {
                                this.buttonIncrementIsDisabled ||
                                    (e.persist(),
                                    e.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value < this.props.maximum &&
                                        (!t && this.playClickSound(),
                                        (0 === e.button || t) &&
                                            (this.increment(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.incrementHandleMouseDown(e, !0);
                                                },
                                                t ? 50 : 300,
                                            )),
                                            this.setState({ activeIncrement: !0 }))));
                            }),
                            (this.decrementHandleMouseDown = (e, t = !1) => {
                                this.buttonDecrementIsDisabled ||
                                    (e.persist(),
                                    e.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value > this.props.minimum &&
                                        (!t && this.playClickSound(),
                                        (0 === e.button || t) &&
                                            (this.decrement(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.decrementHandleMouseDown(e, !0);
                                                },
                                                t ? 50 : 300,
                                            )),
                                            this.setState({ activeDecrement: !0 }))));
                            }),
                            (this.playHoverSound = () => {
                                this.props.isDisabled || V('highlight');
                            }),
                            (this.playClickSound = () => {
                                this.props.isDisabled || V('play');
                            }),
                            (this.stop = () => {
                                this.timer && clearTimeout(this.timer), (this.timer = null);
                            });
                    }
                    componentDidUpdate(e, t) {
                        const u = this.state,
                            a = u.value,
                            n = u.isFocused;
                        if (a !== t.value && n) {
                            const e = this.formattedValue.length,
                                t = this.input.current && this.input.current.selectionStart,
                                u = this.input.current && this.input.current.selectionEnd,
                                a = t === u ? e : t || 0;
                            0 === t && u === e
                                ? this.input.current && this.input.current.setSelectionRange(e, e)
                                : this.input.current && this.input.current.setSelectionRange(a, e);
                        }
                    }
                    componentWillReceiveProps({ value: e, isFocused: t }) {
                        e !== this.props.value && this.setState({ value: e }),
                            t !== this.props.isFocused &&
                                (this.setState({ isFocused: t }),
                                t
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput());
                    }
                    get formattedValue() {
                        return this.props.currencyType
                            ? ne.Z5.getNumberFormat(this.state.value, ne.B3.GOLD)
                            : this.state.value.toString();
                    }
                    get buttonIncrementIsDisabled() {
                        return this.state.value >= this.props.maximum || this.props.isDisabled;
                    }
                    get buttonDecrementIsDisabled() {
                        return this.state.value <= this.props.minimum || this.props.isDisabled;
                    }
                    render() {
                        const e = this.props,
                            t = e.isDisabled,
                            u = e.size,
                            a = e.currencyType,
                            n = C()(
                                fn.base,
                                fn[`base__${u}`],
                                a && fn[`base__withCurrency-${u}`],
                                t && fn.base__isDisabled,
                                this.state.isFocused && fn.base__isFocus,
                            ),
                            r = C()(
                                fn.buttonIncrement,
                                fn[`buttonIncrement__${u}`],
                                this.buttonIncrementIsDisabled && fn.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    fn[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            s = C()(
                                fn.buttonDecrement,
                                fn[`buttonDecrement__${u}`],
                                this.buttonDecrementIsDisabled && fn.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    fn[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            o = C()(
                                fn.input,
                                t && fn.input__disabled,
                                a && fn.input__withCurrency,
                                a && fn[`input__${a}-${u}`],
                                a && fn[`input__${a}`],
                                a && t && fn[`input__${a}-disabled`],
                            ),
                            l = C()(fn.currencyIcon, a && fn[`currencyIcon__${a}-${u}`]),
                            c = C()(fn.currency, a && fn[`currency__${a}`], a && fn[`currency__${a}-${u}`]);
                        return i().createElement(
                            'div',
                            {
                                className: n,
                                ref: this.numericalStepper,
                                style: ((_ = this.props.width), _ ? { width: `${_}rem` } : {}),
                            },
                            i().createElement(
                                'div',
                                { className: fn.inputContainer },
                                a &&
                                    i().createElement(
                                        'div',
                                        { className: c },
                                        i().createElement('span', { className: fn.dummyValue }, this.formattedValue),
                                        i().createElement('span', { className: l }),
                                    ),
                                i().createElement('input', {
                                    ref: this.input,
                                    className: o,
                                    type: 'text',
                                    value: this.formattedValue,
                                    disabled: t,
                                    onWheel: this.handleWheel,
                                    onChange: this.handleChange,
                                    onKeyPress: this.allowOnlyNumbers,
                                    onKeyDown: this.handleKeyDown,
                                    onKeyUp: this.handleKeyUp,
                                    onBlur: this.handleBlur,
                                    onFocus: this.setFocusOnInput,
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: fn.control },
                                i().createElement('div', {
                                    className: r,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                i().createElement('div', {
                                    className: s,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.decrementHandleMouseEnter,
                                    onMouseDown: this.decrementHandleMouseDown,
                                }),
                            ),
                        );
                        var _;
                    }
                }
                Fn.defaultProps = {
                    value: 1,
                    stepSize: 1,
                    minimum: 0,
                    maximum: 0,
                    size: 'medium',
                    isFocused: !0,
                    isDisabled: !1,
                    onChange: () => null,
                    onKeyDown: () => null,
                };
                const Bn = ({
                        limit: e,
                        rate: t,
                        currentValue: u,
                        type: a,
                        isDisabled: n,
                        setDragState: r,
                        selectedNation: s = '',
                    }) => {
                        const o = un(),
                            l = o.setResources,
                            c = o.updateSelectedResource;
                        return i().createElement(
                            'div',
                            { className: 'Stepper_base_a1' },
                            i().createElement(
                                'div',
                                {
                                    className: 'Stepper_stepper_6a',
                                    onClick: function (e) {
                                        e.stopPropagation();
                                    },
                                    onMouseDown: () => r(!0),
                                    onMouseUp: () => r(!1),
                                },
                                i().createElement(Fn, {
                                    width: 140,
                                    value: u,
                                    minimum: 0,
                                    maximum: e,
                                    stepSize: t,
                                    isFocused: !1,
                                    onChange: (u) => {
                                        c(a);
                                        const n = { value: u >= e ? e : u, rate: t };
                                        l((e) => Object.assign({}, e, { [a]: Object.assign({}, n, { type: s }) }));
                                    },
                                    isDisabled: n,
                                }),
                            ),
                        );
                    },
                    yn = ({ type: e, balance: t, rate: u, limit: a, percent: n }) => {
                        const r = i().useRef(!1),
                            s = nn(e, u, t, a),
                            o = s.stepperLimit,
                            l = s.isResourceStepperDisabled,
                            c = s.currentValue,
                            _ = s.setResources,
                            m = s.delta,
                            d = s.isResourceLoaded;
                        return i().createElement(
                            'div',
                            { className: 'BaseCard_base_14' },
                            i().createElement(
                                _n,
                                {
                                    type: e,
                                    balance: t,
                                    limit: a,
                                    selected: c > 0,
                                    onClick: function () {
                                        if (!r.current) {
                                            const t = Ka({ value: c + u >= o ? o : c + u, rate: u }, m);
                                            _((u) => Object.assign({}, u, { [e]: Object.assign({}, t, { type: '' }) }));
                                        }
                                        r.current = !1;
                                    },
                                    tooltipData: {
                                        resourceType: e,
                                        curValue: c,
                                        maxValue: u * a,
                                        isFullPriceReached: d,
                                    },
                                },
                                i().createElement(Cn, {
                                    type: e,
                                    rate: u,
                                    percent: n,
                                    disabled: Ya(t, m, c),
                                    classNames: { inventorContainer: 'BaseCard_inventorContainer_ae' },
                                }),
                                i().createElement(Bn, {
                                    currentValue: c,
                                    limit: o,
                                    rate: u,
                                    type: e,
                                    isDisabled: l,
                                    setDragState: (e) => {
                                        r.current = e;
                                    },
                                }),
                            ),
                        );
                    };
                function wn() {
                    return (
                        (wn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        wn.apply(null, arguments)
                    );
                }
                const Nn = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const a = i().createElement('div', { className: u }, e);
                    if (t.header || t.body) return i().createElement(ke, t, a);
                    const n = t.contentId;
                    return n ? i().createElement(le, wn({}, t, { contentId: n }), a) : i().createElement(ru, t, a);
                };
                let Sn, xn;
                !(function (e) {
                    (e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected');
                })(Sn || (Sn = {})),
                    (function (e) {
                        (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(xn || (xn = {}));
                const Tn = ['content', 'classMix', 'className'];
                function In() {
                    return (
                        (In = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        In.apply(null, arguments)
                    );
                }
                const Mn = (e) => {
                        let t = e.content,
                            u = e.classMix,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, Tn);
                        const s = (0, r.useRef)(null),
                            o = (0, r.useState)(!0),
                            l = o[0],
                            c = o[1];
                        return (
                            (0, r.useEffect)(() =>
                                pt(() => {
                                    const e = s.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            i().createElement(
                                ke,
                                { isEnabled: l, body: t },
                                i().createElement(
                                    'div',
                                    In({}, n, { ref: s, className: C()('TextOverflow_base_3b', a, u) }),
                                    t,
                                ),
                            )
                        );
                    },
                    Ln = {
                        base: 'DropDownControl_base_46',
                        base__extraSmall: 'DropDownControl_base__extraSmall_a3',
                        base__small: 'DropDownControl_base__small_22',
                        base__medium: 'DropDownControl_base__medium_09',
                        base__disabled: 'DropDownControl_base__disabled_37',
                        base__focused: 'DropDownControl_base__focused_63',
                        base__selected: 'DropDownControl_base__selected_46',
                        stateHighlight: 'DropDownControl_stateHighlight_16',
                        base__over: 'DropDownControl_base__over_e7',
                        base__down: 'DropDownControl_base__down_1c',
                        base__open: 'DropDownControl_base__open_e3',
                        label: 'DropDownControl_label_12',
                        label__extraSmall: 'DropDownControl_label__extraSmall_3d',
                        label__small: 'DropDownControl_label__small_e7',
                        label__medium: 'DropDownControl_label__medium_0b',
                        label__placeholder: 'DropDownControl_label__placeholder_98',
                        button: 'DropDownControl_button_cb',
                        button__extraSmall: 'DropDownControl_button__extraSmall_d2',
                        button__small: 'DropDownControl_button__small_b5',
                        button__medium: 'DropDownControl_button__medium_14',
                        gradient: 'DropDownControl_gradient_b5',
                        disabled: 'DropDownControl_disabled_4e',
                        arrow: 'DropDownControl_arrow_de',
                        arrow__extraSmall: 'DropDownControl_arrow__extraSmall_eb',
                        arrow__small: 'DropDownControl_arrow__small_77',
                        arrow__medium: 'DropDownControl_arrow__medium_3d',
                        alert: 'DropDownControl_alert_75',
                        blink: 'DropDownControl_blink_68',
                    };
                let Rn;
                !(function (e) {
                    (e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down');
                })(Rn || (Rn = {}));
                const kn = (0, r.memo)(
                        ({
                            parentId: e,
                            variant: t = Sn.Basic,
                            size: u = xn.Medium,
                            isOpen: a,
                            placeholder: n = R.strings.common.dropdown.placeholder.select(),
                            label: s = '',
                            classMix: o,
                            onClick: l,
                            soundHover: c,
                            soundClick: _,
                            customControl: m,
                        }) => {
                            const d = (0, r.useState)(Rn.Out),
                                E = d[0],
                                p = d[1],
                                h = (0, r.useState)(!1),
                                b = h[0],
                                A = h[1],
                                g = t === Sn.Disabled,
                                v = g || t === Sn.Basic,
                                D = (0, r.useCallback)(() => {
                                    g || (p(Rn.Over), c && V(c));
                                }, [g, c]),
                                f = (0, r.useCallback)(() => p(Rn.Out), []);
                            return (
                                (0, r.useEffect)(() => {
                                    v || A(!1);
                                }, [t, v]),
                                (0, r.useEffect)(() => {
                                    g && f();
                                }, [g, f]),
                                i().createElement(
                                    'div',
                                    {
                                        id: e ? `${e}_control` : void 0,
                                        className: C()(
                                            Ln.base,
                                            a && Ln.base__open,
                                            Ln[`base__${E}`],
                                            (v || !b) && Ln[`base__${t}`],
                                            o,
                                        ),
                                        onMouseEnter: D,
                                        onMouseUp: () => {
                                            !g && p(Rn.Over), !v && A(!0);
                                        },
                                        onMouseDown: () => {
                                            g || (p(Rn.Down), _ && V(_));
                                        },
                                        onMouseLeave: f,
                                        onClick: l,
                                    },
                                    i().createElement('div', { className: Ln.stateHighlight }),
                                    !b && t === Sn.Alert && i().createElement('div', { className: Ln.alert }),
                                    i().createElement(
                                        'div',
                                        { className: C()(Ln.label, Ln[`label__${u}`], !s && Ln.label__placeholder) },
                                        m || i().createElement(Mn, { content: s || n }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: C()(Ln.button, Ln[`button__${u}`]) },
                                        i().createElement('div', { className: C()(Ln.arrow, Ln[`arrow__${u}`]) }),
                                        i().createElement('div', { className: Ln.gradient }),
                                        g && i().createElement('div', { className: Ln.disabled }),
                                    ),
                                )
                            );
                        },
                    ),
                    On = { base: 'VerticalAutoScroll_barBase_93' },
                    Pn = { content: 'VerticalAutoScroll_content_47' },
                    Hn = ({
                        children: e,
                        isEnabled: t = !0,
                        selectedItemId: u,
                        scrollAreaKey: a = 'scrollArea',
                        withCompleteTrigger: n = !1,
                        containerClasses: s,
                    }) => {
                        const o = (0, r.useState)(!1),
                            l = o[0],
                            c = o[1],
                            _ = (0, r.useState)(!1),
                            m = _[0],
                            d = _[1],
                            E = (0, r.useRef)(null),
                            p = (0, r.useRef)(null),
                            h = kt(),
                            b = At(() => {
                                c(!0);
                            }),
                            A = (0, r.useCallback)(() => {
                                c(!1);
                            }, []),
                            g = (0, r.useCallback)(() => {
                                const e = p.current,
                                    t = E.current;
                                if (e && h && t) {
                                    const u = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    n && h.events.on('rest', b), h.applyScroll(u);
                                }
                            }, [b, h, n]);
                        (0, r.useEffect)(
                            () => () => {
                                h.events.off('rest', b);
                            },
                            [b, h.events, n],
                        ),
                            (0, r.useEffect)(() => {
                                if (t && null !== u) return pt(g);
                            }, [a, g, u, t]),
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    const e = h.getContainerSize(),
                                        t = h.getWrapperSize();
                                    e && t && d(e > t);
                                };
                                return (
                                    h.events.on('recalculateContent', e),
                                    () => {
                                        h.events.off('recalculateContent', e);
                                    }
                                );
                            }, [m, h]);
                        const v = {
                                scrollContainerRef: E,
                                selectedItemRef: p,
                                selectedItemId: u,
                                isScrollComplete: l,
                                scrollbarActive: m,
                                onScrollAnimationComplete: A,
                            },
                            D = (0, r.cloneElement)(e, v);
                        return i().createElement(
                            'div',
                            { className: C()('VerticalAutoScroll_base_db', s), ref: E },
                            i().createElement(qt.Vertical.Area, { api: h, key: a, classNames: Pn }, D),
                            i().createElement(qt.Vertical.Bar, { api: h, classNames: On }),
                        );
                    },
                    Vn = {
                        base: 'DropDownItem_base_5e',
                        base__extraSmall: 'DropDownItem_base__extraSmall_5a',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    Wn = ['size', 'classMix', 'onClick', 'itemRenderer'],
                    $n = (0, r.memo)((e) => {
                        let t = e.size,
                            u = e.classMix,
                            a = e.onClick,
                            n = e.itemRenderer,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, Wn);
                        const o = s.id,
                            l = s.isSelected,
                            c = s.isDisabled,
                            _ = s.label,
                            m = s.soundHover,
                            d = s.soundClick,
                            E = (0, r.useCallback)(
                                (e) => {
                                    c || (a && a(e, o));
                                },
                                [o, c, a],
                            ),
                            p = (0, r.useCallback)(() => {
                                c || (m && V(m));
                            }, [c, m]),
                            h = (0, r.useCallback)(() => {
                                c || (d && V(d));
                            }, [c, d]),
                            b = C()(Vn.base, t && Vn[`base__${t}`], l && Vn.base__selected, c && Vn.base__disabled, u);
                        return i().createElement(
                            'div',
                            { className: b, onMouseEnter: p, onMouseDown: h, onClick: E },
                            n ? n(s) : _,
                        );
                    }),
                    Un = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function Gn() {
                    return (
                        (Gn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        Gn.apply(null, arguments)
                    );
                }
                const zn = ({
                        size: e,
                        items: t,
                        selectedIds: u,
                        selectedItemId: a,
                        selectedItemRef: n,
                        onClick: r,
                        parentId: s,
                        soundHover: o,
                        soundClick: l,
                        itemClassMix: c,
                        itemRenderer: _,
                        scrollbarActive: m,
                    }) =>
                        i().createElement(
                            'div',
                            { className: C()(Un.base, m && Un.base__withScroll) },
                            t.map((t) => {
                                const m = `${s}_${t.id}`;
                                return i().createElement(
                                    'div',
                                    { id: s ? m : void 0, key: m, ref: t.id === a ? n : null },
                                    i().createElement(
                                        $n,
                                        Gn({ size: e, soundHover: o, soundClick: l, classMix: c, itemRenderer: _ }, t, {
                                            onClick: r,
                                            isSelected: u.includes(t.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    Xn = {
                        base: 'DropDownList_base_62',
                        base__extraSmall: 'DropDownList_base__extraSmall_60',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                    },
                    jn = ({
                        parentId: e,
                        size: t = xn.Medium,
                        items: u,
                        selectedIds: a,
                        isOpen: n,
                        autoScroll: s,
                        classMix: o,
                        itemClassMix: l,
                        itemRenderer: c,
                        onClick: _,
                        soundHover: m,
                        soundClick: d,
                    }) => {
                        const E = (0, r.useState)(null),
                            p = E[0],
                            h = E[1],
                            b = Vu(n);
                        (0, r.useEffect)(() => {
                            if (n && !b) {
                                const e = ((e, t) => {
                                    if (!t.length) return null;
                                    const u = e.find((e) => t.includes(e.id));
                                    return u ? u.id : null;
                                })(u, a);
                                null !== e && h(e);
                            }
                            n || h(null);
                        }, [n, u, a, b]);
                        const A = e ? `${e}_list` : void 0;
                        return i().createElement(
                            'div',
                            { id: A, className: C()(Xn.base, Xn[`base__${t}`], o) },
                            i().createElement(
                                Hn,
                                { selectedItemId: p, isEnabled: s },
                                i().createElement(zn, {
                                    parentId: e,
                                    items: u,
                                    size: t,
                                    selectedIds: a,
                                    onClick: _,
                                    soundHover: m,
                                    soundClick: d,
                                    itemClassMix: l,
                                    itemRenderer: c,
                                }),
                            ),
                        );
                    },
                    qn = {
                        base: 'PureDropDown_base_fc',
                        base__extraSmall: 'PureDropDown_base__extraSmall_31',
                        base__small: 'PureDropDown_base__small_a6',
                        base__medium: 'PureDropDown_base__medium_05',
                        control__down: 'PureDropDown_control__down_18',
                        list: 'PureDropDown_list_28',
                        list__up: 'PureDropDown_list__up_a1',
                        list__down: 'PureDropDown_list__down_c4',
                        list__under: 'PureDropDown_list__under_64',
                        list__above: 'PureDropDown_list__above_c8',
                    },
                    Yn = (0, r.memo)(
                        ({
                            componentId: e,
                            containerRef: t,
                            items: u,
                            selected: a = [],
                            variant: n = Sn.Basic,
                            size: s = xn.Medium,
                            multiple: o = !1,
                            autoScroll: l = !0,
                            placeholder: c,
                            classMix: _,
                            className: m,
                            controlRenderer: d,
                            itemRenderer: E,
                            open: p,
                            tooltipArgs: h,
                            onChanges: b,
                            onOpen: A,
                            onClose: g,
                            onClick: v,
                            onClickOutside: D,
                            onMouseEnter: f,
                            onMouseDown: F,
                            onMouseUp: B,
                            onMouseLeave: y,
                            soundHover: w = 'highlight',
                            soundClick: N = 'play',
                            soundItemHover: S,
                            soundItemClick: x,
                        }) => {
                            const T = (0, r.useRef)(null),
                                I = (0, r.useRef)(null),
                                M = (0, r.useRef)({ open: !1, listAbove: !1 }),
                                L = (0, r.useState)(!1),
                                R = L[0],
                                k = L[1],
                                O = (0, r.useState)(!1),
                                P = O[0],
                                H = O[1],
                                V = ((e, t) => {
                                    const u = Array.isArray(e) ? e : [e];
                                    return !t && u.length > 1 ? u.slice(0, 1) : u;
                                })(a, o),
                                W = n !== Sn.Disabled,
                                $ = void 0 === p,
                                U = Boolean($ ? R : p),
                                G = At(() => {
                                    M.current.open && ((M.current.open = !1), k(!1), null == g || g());
                                });
                            Na(U ? st.n.ESCAPE : st.n.NONE, G, U);
                            const z = At(() => {
                                null == D || D(), $ && (k(!1), (M.current.open = !1), null == g || g());
                            });
                            (0, r.useEffect)(() => {
                                const e = T.current;
                                if (e && U)
                                    return (
                                        ne.c1.register(e, z),
                                        () => {
                                            ne.c1.unregister(e, z);
                                        }
                                    );
                            }, [U, z]),
                                (0, r.useEffect)(() => {
                                    void 0 !== p && (M.current.open = p);
                                }, [p]);
                            const X = (0, r.useCallback)(() => {
                                if (!T.current || !I.current) return;
                                const e = t && t.current,
                                    u = e ? e.getBoundingClientRect().bottom : window.innerHeight,
                                    a =
                                        T.current.getBoundingClientRect().bottom +
                                            I.current.getBoundingClientRect().height >
                                        u;
                                a !== M.current.listAbove && ((M.current.listAbove = a), H(a));
                            }, [t]);
                            (0, r.useEffect)(() => pt(() => pt(X)), [X, s, u.length]);
                            const j = (0, r.useCallback)(
                                    (e) => {
                                        const t = V.findIndex((t) => t === e) > -1;
                                        let u = [];
                                        (u = o ? (t ? V.filter((t) => t !== e) : [e, ...V]) : t ? [] : [e]),
                                            null == b || b(u);
                                    },
                                    [o, b, V],
                                ),
                                q = (0, r.useCallback)(() => {
                                    $ &&
                                        ((M.current.open = !M.current.open),
                                        k(M.current.open),
                                        M.current.open ? null == A || A() : null == g || g());
                                }, [$, A, g]),
                                Y = (0, r.useCallback)(
                                    (e) => {
                                        W && q(), null == v || v(e);
                                    },
                                    [W, v, q],
                                ),
                                K = (0, r.useCallback)(
                                    (e, t) => {
                                        null == v || v(e, t), j(t), o || q();
                                    },
                                    [v, o, q, j],
                                ),
                                Z = (0, r.useMemo)(
                                    () =>
                                        u
                                            .filter((e) => V.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [u, V],
                                ),
                                Q = (0, r.useMemo)(() => u.filter((e) => V.includes(e.id)), [u, V]),
                                J = d ? d(Q) : void 0;
                            return i().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: T,
                                    className: C()(qn.base, qn[`base__${s}`], m, null == _ ? void 0 : _.base),
                                    onMouseEnter: f,
                                    onMouseUp: B,
                                    onMouseDown: F,
                                    onMouseLeave: y,
                                },
                                i().createElement(
                                    'div',
                                    { className: C()(qn.control, U && qn.control__down) },
                                    i().createElement(
                                        Nn,
                                        { tooltipArgs: h },
                                        i().createElement(kn, {
                                            parentId: e,
                                            size: s,
                                            variant: n,
                                            isOpen: U,
                                            placeholder: c,
                                            label: Z,
                                            classMix: _ && _.control,
                                            onClick: Y,
                                            soundHover: w,
                                            soundClick: N,
                                            customControl: J,
                                        }),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    {
                                        ref: I,
                                        className: C()(
                                            qn.list,
                                            U ? qn.list__down : qn.list__up,
                                            P ? qn.list__above : qn.list__under,
                                        ),
                                    },
                                    i().createElement(jn, {
                                        parentId: e,
                                        size: s,
                                        items: u,
                                        selectedIds: V,
                                        isOpen: U,
                                        autoScroll: l,
                                        classMix: _ && _.list,
                                        itemClassMix: _ && _.item,
                                        itemRenderer: E,
                                        onClick: K,
                                        soundHover: S || w,
                                        soundClick: x || N,
                                    }),
                                ),
                            );
                        },
                    ),
                    Kn = (e) => {
                        if (0 !== e.length) return Zn(e[0]);
                    },
                    Zn = ({ label: e }) =>
                        i().createElement(
                            'div',
                            { className: 'renderers_base_38' },
                            i().createElement('div', {
                                className: 'renderers_icon_26',
                                style: { backgroundImage: `url(${R.images.gui.maps.icons.flags.c_25x17.$dyn(e)})` },
                            }),
                        );
                function Qn(e) {
                    return Ve(e, ({ type: e }) => ({ id: e, label: e }));
                }
                const Jn = ({ nations: e, selectedNation: t, onChange: u }) =>
                    i().createElement(
                        'div',
                        {
                            className: 'Content_base_f3',
                            onClick: function (e) {
                                e.stopPropagation();
                            },
                        },
                        i().createElement(Yn, {
                            items: Qn(e),
                            selected: t,
                            size: xn.Small,
                            className: 'Content_dropDown_41',
                            itemRenderer: Zn,
                            onChanges: u,
                            controlRenderer: Kn,
                        }),
                    );
                function er(e, t, u) {
                    const a = We(e, t);
                    if (!a) throw new Error('Lists nation is not correct');
                    return a[u];
                }
                const tr = (0, H.Pi)(() => {
                        const e = en().model,
                            t = un().delta,
                            u = e.baseCurrency.get(),
                            a = u.amount,
                            n = u.type;
                        return i().createElement(
                            'div',
                            { className: 'BaseCurrency_base_9a' },
                            t > 0 &&
                                i().createElement(
                                    'div',
                                    { className: 'BaseCurrency_strikeout_79' },
                                    i().createElement('div', { className: 'BaseCurrency_amount_13' }, a),
                                    i().createElement('div', { className: 'BaseCurrency_line_ca' }),
                                ),
                            i().createElement(
                                'div',
                                { className: 'BaseCurrency_baseCurrency_19' },
                                i().createElement(qe, {
                                    type: n,
                                    value: Za(a, t),
                                    size: X.large,
                                    classNames: {
                                        value: 'BaseCurrency_currencyValue_5b',
                                        icon: 'BaseCurrency_baseCurrencyIcon_e9',
                                    },
                                }),
                            ),
                        );
                    }),
                    ur = {
                        base: 'Resource_base_b6',
                        amount: 'Resource_amount_11',
                        base__freeXP: 'Resource_base__freeXP_01',
                        base__fragments: 'Resource_base__fragments_80',
                        base__intelligence: 'Resource_base__intelligence_6d',
                        base__crystal: 'Resource_base__crystal_ea',
                        icon: 'Resource_icon_a8',
                    },
                    ar = (e, t) =>
                        e === Ga
                            ? R.images.gui.maps.icons.blueprints.fragment.small.$dyn(t)
                            : R.images.tech_tree_trade_in.gui.maps.multicurrencySelection.resourceType.c_48x48.$dyn(e),
                    nr = ({ resource: e, value: t, subType: u }) =>
                        i().createElement(
                            'div',
                            { className: C()(ur.base, ur[`base__${e}`]) },
                            i().createElement('div', { className: ur.amount }, i().createElement(re, { value: t })),
                            i().createElement('div', {
                                className: ur.icon,
                                style: { backgroundImage: `url(${ar(e, u)})` },
                            }),
                        ),
                    rr = 'ResourceCounter_line_7d',
                    ir = ['rate'],
                    sr = R.strings.tech_tree_trade_in.multicurrencySelection,
                    or = (0, H.Pi)(() => {
                        const e = en(),
                            t = e.model,
                            u = e.controls,
                            a = un(),
                            n = a.delta,
                            r = a.resources,
                            s = t.baseCurrency.get(),
                            o = Object.entries(r);
                        return i().createElement(
                            'div',
                            { className: 'ResourceCounter_base_7c' },
                            i().createElement(
                                'div',
                                { className: 'ResourceCounter_description_6b' },
                                i().createElement('div', { className: C()(rr, 'ResourceCounter_line__left_5d') }),
                                i().createElement('div', { className: 'ResourceCounter_text_1a' }, sr.separator.text()),
                                i().createElement('div', { className: C()(rr, 'ResourceCounter_line__right_2d') }),
                            ),
                            i().createElement(
                                'div',
                                { className: 'ResourceCounter_container_9c' },
                                i().createElement(tr, null),
                                i().createElement(
                                    'div',
                                    { className: 'ResourceCounter_selectedRecourses_f5' },
                                    o.map(([e, { type: t, value: u, rate: a }], n) =>
                                        0 === u || u < a
                                            ? null
                                            : i().createElement(nr, { subType: t, value: u, key: n, resource: e }),
                                    ),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: 'ResourceCounter_button_ca' },
                                i().createElement(
                                    Ie,
                                    {
                                        size: 'medium',
                                        mixClass: 'ResourceCounter_btn_63',
                                        onClick: () =>
                                            u.confirm(
                                                JSON.stringify(
                                                    (function (e, t, u, a) {
                                                        return [
                                                            ...e.map(
                                                                ([e, t]) => (
                                                                    t.rate,
                                                                    [
                                                                        e,
                                                                        (function (e, t) {
                                                                            if (null == e) return {};
                                                                            var u = {};
                                                                            for (var a in e)
                                                                                if ({}.hasOwnProperty.call(e, a)) {
                                                                                    if (t.indexOf(a) >= 0) continue;
                                                                                    u[a] = e[a];
                                                                                }
                                                                            return u;
                                                                        })(t, ir),
                                                                    ]
                                                                ),
                                                            ),
                                                            [t, { type: '', value: Za(u, a) }],
                                                        ];
                                                    })(o, s.type, s.amount, n),
                                                ),
                                            ),
                                    },
                                    sr.button.label(),
                                ),
                            ),
                        );
                    }),
                    lr = {
                        [Ga]: ({ type: e, rate: t, limit: u, percent: a, nations: n }) => {
                            const r = i().useState(() => er(n, (e) => e.isSelected, 'type')),
                                s = r[0],
                                o = r[1],
                                l = i().useRef(!1),
                                c = er(n, (e) => e.type === s, 'amount'),
                                _ = nn(e, t, c, u),
                                m = _.stepperLimit,
                                d = _.isResourceStepperDisabled,
                                E = _.currentValue,
                                p = _.setResources,
                                h = _.delta,
                                b = _.isResourceLoaded;
                            return (
                                i().useEffect(() => {
                                    p((u) => Object.assign({}, u, { [e]: { value: 0, rate: t, type: s } }));
                                }, [t, s, p, e]),
                                i().createElement(
                                    'div',
                                    { className: 'FragmentCard_base_11' },
                                    i().createElement(
                                        _n,
                                        {
                                            type: e,
                                            balance: c,
                                            limit: u,
                                            selected: E > 0,
                                            onClick: () => {
                                                if (!l.current) {
                                                    const u = Ka({ value: E + t >= m ? m : E + t, rate: t }, h);
                                                    p((t) =>
                                                        Object.assign({}, t, {
                                                            [e]: Object.assign({}, u, { type: s }),
                                                        }),
                                                    );
                                                }
                                                l.current = !1;
                                            },
                                            tooltipData: {
                                                resourceType: s,
                                                curValue: E,
                                                maxValue: t * u,
                                                isFullPriceReached: b,
                                            },
                                        },
                                        i().createElement(Jn, {
                                            nations: n,
                                            selectedNation: s,
                                            onChange: (e) => {
                                                o((t) => (e.length > 0 ? e[0] : t));
                                            },
                                        }),
                                        i().createElement(Cn, {
                                            type: e,
                                            icon: s,
                                            rate: t,
                                            percent: a,
                                            disabled: Ya(c, h, E),
                                            classNames: { inventorContainer: 'FragmentCard_inventorContainer_eb' },
                                        }),
                                        i().createElement(Bn, {
                                            currentValue: E,
                                            limit: m,
                                            rate: t,
                                            type: e,
                                            isDisabled: d,
                                            selectedNation: s,
                                            setDragState: (e) => {
                                                l.current = e;
                                            },
                                        }),
                                    ),
                                )
                            );
                        },
                        [ja]: yn,
                        [za]: yn,
                        [Xa]: yn,
                    },
                    cr = (0, H.Pi)(() => {
                        const e = en().model.computes.sortedResources();
                        return i().createElement(
                            an,
                            {
                                initializeResources:
                                    ((t = e),
                                    t.reduce(
                                        (e, { type: t, rate: u }) => ((e[t] = { type: '', value: 0, rate: u }), e),
                                        {},
                                    )),
                            },
                            i().createElement(
                                'div',
                                { className: 'Content_base_c8' },
                                i().createElement(
                                    'div',
                                    { className: 'Content_container_19' },
                                    i().createElement(
                                        'div',
                                        { className: 'Content_resources_a9' },
                                        e.map((e, t) => {
                                            const u = lr[e.type];
                                            return u
                                                ? i().createElement(
                                                      'div',
                                                      { className: 'Content_resourceCard_bc', key: t },
                                                      i().createElement(u, e),
                                                  )
                                                : (console.error('Unknown type for render', e.type), null);
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: 'Content_resourceCounter_d4' },
                                        i().createElement(or, null),
                                    ),
                                ),
                            ),
                        );
                        var t;
                    }),
                    _r = R.strings.tech_tree_trade_in.multicurrencySelection,
                    mr = () =>
                        i().createElement(
                            'div',
                            { className: 'App_base_2b' },
                            i().createElement(dt, { title: _r.title.text(), subTitle: _r.subtitle.text() }),
                            i().createElement('div', { className: 'App_content_3b' }, i().createElement(cr, null)),
                        ),
                    dr = R.strings.tech_tree_trade_in.postTrade,
                    Er = (e, t) => {
                        let u = lu(e);
                        return t && (u += '_elite'), ge(R.images.gui.maps.icons.vehicleTypes.c_48x48, u);
                    },
                    pr = ({ vehicle: e }) => {
                        const t = ((e, t) => {
                            const u = lu(t);
                            return e <= F.Medium
                                ? ge(R.images.gui.maps.shop.vehicles.c_180x135, u)
                                : ge(R.images.gui.maps.shop.vehicles.c_360x270, u);
                        })(w().remScreenWidth, e.icon);
                        return i().createElement(
                            'div',
                            {
                                className: C()(
                                    'Vehicle_base_85',
                                    e.unlocked && !e.obtained && 'Vehicle_base__unlocked_c0',
                                ),
                            },
                            i().createElement(
                                'div',
                                { className: 'Vehicle_iconBlock_71' },
                                e.obtained && i().createElement('div', { className: 'Vehicle_obtainedGlow_99' }),
                                i().createElement('div', {
                                    style: { backgroundImage: `url('${t}')` },
                                    className: 'Vehicle_icon_8b',
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: 'Vehicle_title_84' },
                                Zt(e ? e.vehicleLvl : 0),
                                i().createElement('div', {
                                    style: { backgroundImage: `url('${Er(e.vehicleType, e.isElite)}')` },
                                    className: C()(
                                        'Vehicle_vehicleLevelIcon_c9',
                                        e.isElite && 'Vehicle_vehicleLevelIcon__elite_e1',
                                    ),
                                }),
                                null == e ? void 0 : e.vehicleName,
                            ),
                            e.unlocked &&
                                !e.obtained &&
                                i().createElement('div', { className: 'Vehicle_researched_94' }, dr.researched()),
                            e.obtained && i().createElement('div', { className: 'Vehicle_owned_ea' }, dr.acquired()),
                        );
                    },
                    hr = ee()(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['nation']), {
                                branchToReceive: e.object('branchToReceive'),
                            }),
                        ({ externalModel: e }) => ({ confirm: e.createCallbackNoArgs('onConfirm') }),
                    ),
                    br = hr[0],
                    Ar = hr[1],
                    gr = (0, H.Pi)(() => {
                        const e = Ar().model.branchToReceive.get();
                        return i().createElement(
                            'div',
                            { className: 'VehiclesLine_base_5e' },
                            i().createElement('div', { className: 'VehiclesLine_bg_ab' }),
                            i().createElement(
                                'div',
                                { className: 'VehiclesLine_vehiclesList_ca' },
                                Ve(e.vehiclesList, (e, t) =>
                                    i().createElement(
                                        'div',
                                        { className: 'VehiclesLine_vehicle_3a', key: t },
                                        i().createElement(pr, { vehicle: e }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    vr = 'App_flag_19',
                    Cr = (0, H.Pi)(() => {
                        const e = Ar(),
                            t = e.model,
                            u = e.controls;
                        return (
                            (0, r.useEffect)(() => {
                                o.O.sound.play.sound('gui_reward_screen_general');
                            }, []),
                            i().createElement(
                                'div',
                                { className: 'App_base_f3' },
                                i().createElement('div', { className: 'App_light_c7' }),
                                i().createElement('div', {
                                    className: vr,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.crew.flags.$dyn(t.nation.get())})`,
                                    },
                                }),
                                i().createElement('div', {
                                    className: vr,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.crew.flags.$dyn(t.nation.get())})`,
                                    },
                                }),
                                i().createElement(
                                    'div',
                                    { className: 'App_titleBlock_85' },
                                    i().createElement(dt, {
                                        title: R.strings.tech_tree_trade_in.postTrade.title(),
                                        subTitle: ou(R.strings.tech_tree_trade_in.postTrade.subTitle(), {
                                            nation: R.strings.tech_tree_trade_in.nations.genetiveCase.$dyn(
                                                t.nation.get(),
                                            ),
                                        }),
                                        classNames: { title: 'App_title_d3', subTitle: 'App_subTitle_67' },
                                    }),
                                ),
                                i().createElement('div', { className: 'App_top_53' }),
                                i().createElement('div', { className: 'App_vehicles_c7' }, i().createElement(gr, null)),
                                i().createElement(
                                    'div',
                                    { className: 'App_bottom_d6' },
                                    i().createElement(
                                        Ie,
                                        { size: 'medium', mixClass: 'App_button_9f', onClick: u.confirm },
                                        R.strings.tech_tree_trade_in.postTrade.button.confirm(),
                                    ),
                                ),
                            )
                        );
                    }),
                    Dr = ee()(
                        ({ observableModel: e }) => ({
                            vehicleProperties: e.array('vehicleProperties'),
                            branchToGive: e.object('branchToGive'),
                            branchToReceive: e.object('branchToReceive'),
                            showedDetails: Z.LO.box(!1),
                        }),
                        ({ model: e }) => ({
                            showDetails: (0, Z.aD)(() => {
                                e.showedDetails.set(!e.showedDetails.get());
                            }),
                        }),
                    ),
                    fr = Dr[0],
                    Fr = Dr[1],
                    Br = 'receive',
                    yr = 'tradeIn',
                    wr = 'ShowDetailsButton_line_13',
                    Nr = R.strings.tech_tree_trade_in.summary.button,
                    Sr = (0, H.Pi)(() => {
                        const e = Fr(),
                            t = e.model,
                            u = e.controls,
                            a = t.showedDetails.get(),
                            n = w(),
                            r = i().useRef(!1),
                            s = i().useRef(null);
                        i().useEffect(
                            () => () => {
                                s.current && window.clearTimeout(s.current);
                            },
                            [],
                        );
                        const l = a ? Nr.hideDetails.label() : Nr.showDetails.label(),
                            c = n.mediaSize === F.Large ? xe.medium : xe.small;
                        return i().createElement(
                            'div',
                            {
                                className: C()(
                                    'ShowDetailsButton_base_17',
                                    a && 'ShowDetailsButton_base__showedDetails_b3',
                                ),
                                key: a ? 'show' : 'hide',
                            },
                            i().createElement(
                                'div',
                                { className: 'ShowDetailsButton_container_3a' },
                                i().createElement('div', { className: C()(wr, 'ShowDetailsButton_line__left_52') }),
                                i().createElement(
                                    Ie,
                                    {
                                        type: Se.ghost,
                                        size: c,
                                        onClick: function () {
                                            r.current ||
                                                (o.O.sound.play.sound(
                                                    a
                                                        ? 'tradein_display_information_off'
                                                        : 'tradein_display_information_on',
                                                ),
                                                u.showDetails(),
                                                (r.current = !0),
                                                s.current && window.clearTimeout(s.current),
                                                (s.current = window.setTimeout(() => {
                                                    r.current = !1;
                                                }, 600)));
                                        },
                                        mixClass: 'ShowDetailsButton_btn_0a',
                                    },
                                    i().createElement(
                                        'div',
                                        { className: 'ShowDetailsButton_buttonContainer_9b' },
                                        i().createElement('div', { className: 'ShowDetailsButton_arrow_ae' }),
                                        i().createElement('div', { className: 'ShowDetailsButton_label_6f' }, l),
                                    ),
                                ),
                                i().createElement('div', { className: C()(wr, 'ShowDetailsButton_line__right_72') }),
                            ),
                        );
                    }),
                    xr = 'notTradedResearch',
                    Tr = 'notTradedResearchInventory',
                    Ir = 'tradedResearch',
                    Mr = 'tradedResearchInventory',
                    Lr = {
                        base: 'Info_base_d9',
                        info: 'Info_info_1e',
                        details: 'Info_details_3e',
                        vehicleName: 'Info_vehicleName_e9',
                        level: 'Info_level_0d',
                        wrapper: 'Info_wrapper_d0',
                        levelIcon: 'Info_levelIcon_ee',
                        levelIcon__elite: 'Info_levelIcon__elite_17',
                        status: 'Info_status_fd',
                        icon: 'Info_icon_49',
                        'base__receive-tradedResearchInventory': 'Info_base__receive-tradedResearchInventory_5a',
                        'base__tradeIn-tradedResearchInventory': 'Info_base__tradeIn-tradedResearchInventory_fe',
                        description: 'Info_description_58',
                        'base__receive-tradedResearch': 'Info_base__receive-tradedResearch_f4',
                        'base__tradeIn-tradedResearch': 'Info_base__tradeIn-tradedResearch_dd',
                    },
                    Rr = {
                        [Br]: R.strings.tech_tree_trade_in.summary.branch.receive,
                        [yr]: R.strings.tech_tree_trade_in.summary.branch.tradeIn,
                    },
                    kr = [Mr, Tr],
                    Or = R.images.gui.maps.icons.vehicleTypes,
                    Pr = (e, t) => {
                        const u = lu(t);
                        return e >= F.Medium ? ge(Or.c_48x48, u) : ge(Or.c_24x24, u);
                    },
                    Hr = (e) => {
                        const t = ge(Rr[e.branchType], e.vehicleState),
                            u = w();
                        return i().createElement(
                            'div',
                            {
                                className: C()(
                                    Lr.base,
                                    Lr[`base__${e.branchType}`],
                                    Lr[`base__${e.branchType}-${e.vehicleState}`],
                                ),
                            },
                            i().createElement(
                                'div',
                                { className: Lr.info },
                                i().createElement('div', { className: Lr.vehicleName }, e.vehicleName),
                                i().createElement(
                                    'div',
                                    { className: Lr.details },
                                    i().createElement('div', { className: Lr.level }, Zt(e.vehicleLvl)),
                                    i().createElement(
                                        'div',
                                        { className: Lr.wrapper },
                                        i().createElement('div', {
                                            className: C()(Lr.levelIcon, e.isElite && Lr.levelIcon__elite),
                                            style: {
                                                backgroundImage: `url(${Pr(u.remScreenWidth, e.vehicleType + (e.isElite ? '_elite' : ''))})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: Lr.status },
                                kr.includes(e.vehicleState) && i().createElement('div', { className: Lr.icon }),
                                i().createElement('div', { className: Lr.description }, t),
                            ),
                        );
                    },
                    Vr = {
                        base: 'VehicleSlot_base_c8',
                        bg: 'VehicleSlot_bg_d2',
                        'base__receive-tradedResearch': 'VehicleSlot_base__receive-tradedResearch_eb',
                        'base__receive-tradedResearchInventory': 'VehicleSlot_base__receive-tradedResearchInventory_e8',
                        'base__tradeIn-tradedResearch': 'VehicleSlot_base__tradeIn-tradedResearch_00',
                        'base__tradeIn-tradedResearchInventory': 'VehicleSlot_base__tradeIn-tradedResearchInventory_4c',
                        iconContainer: 'VehicleSlot_iconContainer_3f',
                        icon: 'VehicleSlot_icon_b9',
                    },
                    Wr = (e) =>
                        i().createElement(
                            'div',
                            {
                                className: C()(
                                    Vr.base,
                                    Vr[`base__${e.branchType}`],
                                    Vr[`base__${e.branchType}-${e.vehicleState}`],
                                ),
                            },
                            i().createElement('div', { className: Vr.bg }),
                            i().createElement(Hr, e),
                            i().createElement(
                                'div',
                                { className: Vr.iconContainer },
                                i().createElement('div', {
                                    className: Vr.icon,
                                    style: {
                                        backgroundImage: `url('${ge(R.images.gui.maps.icons.vehicle.c_420x307, e.icon)}')`,
                                    },
                                }),
                            ),
                        ),
                    $r = 'transition',
                    Ur = 'default',
                    Gr = 'trade',
                    zr = 'hide',
                    Xr = { [xr]: $r, [Tr]: $r, [Ir]: Gr, [Mr]: Gr },
                    jr = { [xr]: Ur, [Tr]: Ur, [Ir]: $r, [Mr]: $r },
                    qr = { [Ir]: Xr, [Mr]: Xr, [xr]: jr, [Tr]: jr },
                    Yr = (e, t) => {
                        if (0 === t) return zr;
                        const u = ((e, t) => {
                                var u, a;
                                return {
                                    currentVehicleState: (null == (u = Oe(e, t)) ? void 0 : u.vehicleState) || '',
                                    prevVehicleState: (null == (a = Oe(e, t - 1)) ? void 0 : a.vehicleState) || '',
                                };
                            })(e, t),
                            a = u.currentVehicleState,
                            n = u.prevVehicleState,
                            r = qr[a][n];
                        if ('string' == typeof r) return r;
                        throw new Error(`VehicleState or prevVehicleState ${a} ${n} are not valid`);
                    },
                    Kr = {
                        container: 'Wrapper_container_82',
                        arrowContainer: 'Wrapper_arrowContainer_e3',
                        arrowContainer__hide: 'Wrapper_arrowContainer__hide_5a',
                        arrowPoint: 'Wrapper_arrowPoint_45',
                        cardArrow: 'Wrapper_cardArrow_3c',
                        'cardArrow__receive-transition': 'Wrapper_cardArrow__receive-transition_11',
                        'cardArrow__receive-trade': 'Wrapper_cardArrow__receive-trade_42',
                        'cardArrow__tradein-transition': 'Wrapper_cardArrow__tradein-transition_0e',
                        'cardArrow__tradein-trade': 'Wrapper_cardArrow__tradein-trade_dc',
                    },
                    Zr = [Ir, Mr],
                    Qr = (0, H.Pi)(({ branchType: e, vehicleState: t, children: u, cardArrowMode: a }) => {
                        const n = Fr().model;
                        return i().createElement(
                            i().Fragment,
                            null,
                            a !== zr &&
                                i().createElement('div', { className: C()(Kr.cardArrow, Kr[`cardArrow__${e}-${a}`]) }),
                            i().createElement(
                                'div',
                                { className: Kr.container },
                                e === yr &&
                                    Zr.includes(t) &&
                                    i().createElement(
                                        'div',
                                        {
                                            className: C()(
                                                Kr.arrowContainer,
                                                n.showedDetails.get() && Kr.arrowContainer__hide,
                                            ),
                                        },
                                        i().createElement('div', { className: Kr.arrowPoint }),
                                    ),
                                u,
                            ),
                        );
                    }),
                    Jr = {
                        base: 'VehicleBranch_base_13',
                        bg: 'VehicleBranch_bg_fd',
                        base__hide: 'VehicleBranch_base__hide_7d',
                        base__receive: 'VehicleBranch_base__receive_72',
                        base__tradeIn: 'VehicleBranch_base__tradeIn_d6',
                        flagContainer: 'VehicleBranch_flagContainer_bc',
                        flagIcon: 'VehicleBranch_flagIcon_54',
                        branchType: 'VehicleBranch_branchType_90',
                        vehicleList: 'VehicleBranch_vehicleList_52',
                    };
                function ei() {
                    return (
                        (ei = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        ei.apply(null, arguments)
                    );
                }
                const ti = R.strings.tech_tree_trade_in.summary.branch,
                    ui = (0, H.Pi)(({ branch: e, branchType: t }) => {
                        const u = Fr().model,
                            a = e.nation,
                            n = e.vehiclesList;
                        return i().createElement(
                            'div',
                            { className: C()(Jr.base, Jr[`base__${t}`], u.showedDetails.get() && Jr.base__hide) },
                            i().createElement('div', { className: Jr.bg }),
                            i().createElement('div', { className: Jr.branchType }, ti.title.$dyn(t)),
                            i().createElement(
                                'div',
                                { className: Jr.flagContainer },
                                i().createElement('div', {
                                    className: Jr.flagIcon,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.flags.c_600x450.$dyn(a)})`,
                                    },
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: Jr.vehicleList },
                                Ve(n, (e, u) =>
                                    i().createElement(
                                        Qr,
                                        {
                                            branchType: t,
                                            vehicleState: e.vehicleState,
                                            cardArrowMode: Yr(n, u),
                                            key: u,
                                        },
                                        i().createElement(Wr, ei({}, e, { branchType: t })),
                                    ),
                                ),
                            ),
                        );
                    });
                let ai;
                !(function (e) {
                    (e.Experience = 'experience'),
                        (e.Equipment = 'equipment'),
                        (e.Ammunition = 'ammunition'),
                        (e.Directives = 'directives'),
                        (e.Consumables = 'consumables'),
                        (e.ExteriorElements = 'exteriorElements'),
                        (e.Crew = 'crew'),
                        (e.FieldModification = 'fieldModification'),
                        (e.RentalVehicle = 'rentalVehicle'),
                        (e.Modules = 'modules');
                })(ai || (ai = {}));
                var ni = u(887),
                    ri = u.n(ni);
                const ii = ['xl', 'lg', 'md', 'sm', 'xs'],
                    si = (e) => e.includes('_') && ((e) => ii.includes(e))(e.split('_').at(-1)),
                    oi = [F.ExtraLarge, F.Large, F.Medium, F.Small, F.ExtraSmall],
                    li = (e, t) =>
                        Object.keys(e).reduce((u, a) => {
                            if (a in u) return u;
                            if (si(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in u) return u;
                                const r = oi.indexOf(t),
                                    i = (-1 !== r ? ii.slice(r) : [])
                                        .map((e) => n + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    s = i ? e[i] : void 0;
                                return (u[n] = void 0 !== s ? s : e[n]), u;
                            }
                            const n = e[a];
                            return (
                                void 0 === n ||
                                    ((e, t) => ii.some((u) => void 0 !== t[`${e}_${u}`]))(a, e) ||
                                    (u[a] = n),
                                u
                            );
                        }, {}),
                    ci = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    _i = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function mi() {
                    return (
                        (mi = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        mi.apply(null, arguments)
                    );
                }
                Object.keys(ri());
                const di = {
                        XL: { mt: ci.mt__XL, mr: ci.mr__XL, mb: ci.mb__XL, ml: ci.ml__XL },
                        LG: { mt: ci.mt__LG, mr: ci.mr__LG, mb: ci.mb__LG, ml: ci.ml__LG },
                        MDp: { mt: ci.mt__MDp, mr: ci.mr__MDp, mb: ci.mb__MDp, ml: ci.ml__MDp },
                        MD: { mt: ci.mt__MD, mr: ci.mr__MD, mb: ci.mb__MD, ml: ci.ml__MD },
                        SMp: { mt: ci.mt__SMp, mr: ci.mr__SMp, mb: ci.mb__SMp, ml: ci.ml__SMp },
                        SM: { mt: ci.mt__SM, mr: ci.mr__SM, mb: ci.mb__SM, ml: ci.ml__SM },
                        XS: { mt: ci.mt__XS, mr: ci.mr__XS, mb: ci.mb__XS, ml: ci.ml__XS },
                    },
                    Ei = (Object.keys(di), ['mt', 'mr', 'mb', 'ml']),
                    pi = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    hi = ((e, t = li) => {
                        const u = (
                            (e, t = li) =>
                            (u) => {
                                const a = w().mediaSize,
                                    n = (0, r.useMemo)(() => t(u, a), [u, a]);
                                return i().createElement(e, n);
                            }
                        )(e, t);
                        return i().memo((t) =>
                            Object.keys(t).some((e) => si(e) && void 0 !== t[e])
                                ? i().createElement(u, t)
                                : i().createElement(e, t),
                        );
                    })((e) => {
                        let t = e.className,
                            u = e.width,
                            a = e.height,
                            n = e.m,
                            s = e.mt,
                            o = void 0 === s ? n : s,
                            l = e.mr,
                            c = void 0 === l ? n : l,
                            _ = e.mb,
                            m = void 0 === _ ? n : _,
                            d = e.ml,
                            E = void 0 === d ? n : d,
                            p = e.column,
                            h = e.row,
                            b = e.flexDirection,
                            A = void 0 === b ? (p ? 'column' : h && 'row') || void 0 : b,
                            g = e.flexStart,
                            v = e.center,
                            D = e.flexEnd,
                            f = e.spaceBetween,
                            F = e.spaceAround,
                            B = e.justifyContent,
                            y =
                                void 0 === B
                                    ? (g ? 'flex-start' : v && 'center') ||
                                      (D && 'flex-end') ||
                                      (f && 'space-between') ||
                                      (F && 'space-around') ||
                                      void 0
                                    : B,
                            w = e.alignItems,
                            N = void 0 === w ? (g ? 'flex-start' : v && 'center') || (D && 'flex-end') || void 0 : w,
                            S = e.alignSelf,
                            x = e.wrap,
                            T = e.flexWrap,
                            I = void 0 === T ? (x ? 'wrap' : void 0) : T,
                            M = e.grow,
                            L = e.shrink,
                            R = e.flex,
                            k = void 0 === R ? (M || L ? `${M ? 1 : 0} ${L ? 1 : 0} auto` : void 0) : R,
                            O = e.style,
                            P = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, _i);
                        const V = (0, r.useMemo)(() => {
                                const e = { mt: o, mr: c, mb: m, ml: E },
                                    t = ((e) =>
                                        Ei.reduce((t, u) => {
                                            const a = e[u];
                                            return a && 'number' != typeof a ? t.concat(di[!0 === a ? 'MD' : a][u]) : t;
                                        }, []))(e),
                                    n = ((e) =>
                                        Ei.reduce((t, u) => {
                                            const a = e[u];
                                            return 'number' == typeof a && (t[pi[u]] = a + 'rem'), t;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, n, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: k,
                                        alignSelf: S,
                                        display: A || N ? 'flex' : void 0,
                                        flexDirection: A,
                                        flexWrap: I,
                                        justifyContent: y,
                                        alignItems: N,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, a, o, c, m, E, O, k, S, A, I, y, N]),
                            W = V.computedStyle,
                            $ = V.computedClassNames;
                        return i().createElement('div', mi({ className: C()(ci.base, ...$, t), style: W }, H), P);
                    }),
                    bi = {
                        base: 'Subcategory_base_6a',
                        subCategory: 'Subcategory_subCategory_8a',
                        type: 'Subcategory_type_44',
                        listItem: 'Subcategory_listItem_b7',
                        listItemLabel: 'Subcategory_listItemLabel_da',
                        listItemValue: 'Subcategory_listItemValue_50',
                    },
                    Ai = ({ subcategories: e, categoryType: t }) =>
                        i().createElement(
                            'div',
                            { className: C()(bi.base, bi[`base__${t}`]) },
                            Ve(e, ({ type: e, list: t }, u) =>
                                i().createElement(
                                    hi,
                                    { column: !0, className: bi.subCategory, key: u },
                                    e && i().createElement('div', { className: bi.type }, e),
                                    i().createElement(
                                        hi,
                                        { column: !0 },
                                        Ve(t, (e, t) =>
                                            i().createElement(
                                                'div',
                                                { className: bi.listItem, key: t },
                                                i().createElement('div', { className: bi.listItemLabel }, e.label),
                                                i().createElement('div', { className: bi.listItemValue }, e.amount),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    gi = {
                        base: 'Category_base_73',
                        category: 'Category_category_43',
                        info: 'Category_info_fd',
                        state: 'Category_state_64',
                        type: 'Category_type_42',
                        infoIcon: 'Category_infoIcon_c1',
                        measurements: 'Category_measurements_a0',
                        amount: 'Category_amount_42',
                    },
                    vi = new Set([ai.Crew]),
                    Ci = R.strings.tech_tree_trade_in.summary.vehicleProperties.category,
                    Di = ({ amount: e, categoryType: t, subcategories: u }) =>
                        i().createElement(
                            'div',
                            { className: C()(gi.base, gi[`base__${t}`]) },
                            i().createElement(
                                'div',
                                { className: gi.category },
                                i().createElement(
                                    'div',
                                    { className: gi.info },
                                    i().createElement('div', { className: gi.type }, Ci.$dyn(t)),
                                    vi.has(t) &&
                                        i().createElement(
                                            ke,
                                            { header: Ci.tooltip.header(), body: Ci.tooltip.body() },
                                            i().createElement('div', { className: gi.infoIcon }),
                                        ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: gi.measurements },
                                    e >= 0 && i().createElement('div', { className: gi.amount }, e),
                                ),
                            ),
                            i().createElement(Ai, { subcategories: u, categoryType: t }),
                        ),
                    fi = R.strings.tech_tree_trade_in.summary.vehicleProperties.category,
                    Fi = ({ categoryType: e, subcategories: t }) =>
                        i().createElement(
                            'div',
                            {
                                className: C()(
                                    'CategoryBoxed_base_86',
                                    0 === t.length && 'CategoryBoxed_base__onlyTitle_1c',
                                ),
                            },
                            i().createElement('div', { className: 'CategoryBoxed_title_7f' }, fi.$dyn(e)),
                            t.length > 0 &&
                                i().createElement(
                                    'div',
                                    { className: 'CategoryBoxed_body_8f' },
                                    i().createElement(Ai, { subcategories: t, categoryType: e }),
                                ),
                        ),
                    Bi = {
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
                    yi = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    wi = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ni = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Si = (0, r.memo)(({ text: e, binding: t, classMix: u }) => {
                        const a = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            n = (0, r.useMemo)(() => t || {}, [t]);
                        let s = yi.exec(e),
                            o = e,
                            l = 0;
                        for (; s; ) {
                            const u = s[0],
                                r = wi.exec(u),
                                c = Ni.exec(u),
                                _ = s[1];
                            if (r && c) {
                                const e = r[0],
                                    s = e + l++ + e;
                                (o = o.replace(u, `%(${s})`)),
                                    (n[s] = Bi[e]
                                        ? i().createElement(
                                              'span',
                                              { className: Bi[e] },
                                              i().createElement(mn, { text: _, binding: t }),
                                          )
                                        : i().createElement(
                                              'span',
                                              { style: a(e) },
                                              i().createElement(mn, { text: _, binding: t }),
                                          ));
                            }
                            s = yi.exec(e);
                        }
                        return i().createElement(mn, { text: o, classMix: u, binding: n });
                    }),
                    xi = {
                        base: 'VehicleName_base_ce',
                        vehicleTypeContainer: 'VehicleName_vehicleTypeContainer_81',
                        vehicleType: 'VehicleName_vehicleType_48',
                    },
                    Ti = (0, r.memo)(({ name: e, tier: t, type: u, isPremium: a = !1 }) => {
                        const n = `${lu(u)}${a ? '_elite' : ''}`;
                        return i().createElement(
                            'div',
                            { className: xi.base },
                            i().createElement('div', null, ((r = t), Qt ? `${r}` : Zt(r))),
                            i().createElement(
                                'div',
                                { className: C()(xi.vehicleTypeContainer) },
                                i().createElement('div', {
                                    className: xi.vehicleType,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.$dyn('c_24x24_metal').$dyn(n)})`,
                                    },
                                }),
                            ),
                            i().createElement('div', { className: xi.shortName }, e),
                        );
                        var r;
                    }),
                    Ii = R.strings.tech_tree_trade_in.summary.vehicleProperties.category,
                    Mi = ({ categoryType: e, subcategories: t }) => {
                        const u = Oe(t, 0),
                            a = Oe(t, 1),
                            n = Ve(u ? u.list : [], (e) => e.label),
                            r = n[0],
                            s = n[1],
                            o = n[2],
                            l = a ? Oe(a.list, 0) : void 0;
                        return i().createElement(
                            'div',
                            { className: 'CategoryTransfer_base_09' },
                            i().createElement('div', { className: 'CategoryTransfer_type_83' }, Ii.$dyn(e)),
                            u &&
                                i().createElement(
                                    'div',
                                    { className: 'CategoryTransfer_transferBlock_bf' },
                                    i().createElement(Si, {
                                        text: u.type,
                                        classMix: 'CategoryTransfer_subCategoryType_74',
                                        binding: {
                                            vehicle: i().createElement(Ti, { name: o, tier: parseInt(r), type: s }),
                                        },
                                    }),
                                ),
                            a &&
                                l &&
                                i().createElement(
                                    'div',
                                    { className: 'CategoryTransfer_amountBlock_f1' },
                                    hu(a.type, su.left),
                                    i().createElement(qe, {
                                        size: X.small,
                                        type: l.label,
                                        value: l.amount,
                                        className: 'CategoryTransfer_amountValue_63',
                                        showPlus: l.label === j.credits,
                                    }),
                                ),
                        );
                    },
                    Li =
                        (new Set([Ir, Mr]),
                        { [ai.RentalVehicle]: Fi, [ai.Modules]: Fi, [ai.FieldModification]: Mi, [ai.Experience]: Mi }),
                    Ri = 'PropertySeparator_propertiesSeparator_2c',
                    ki = new Set([ai.RentalVehicle, ai.Modules]),
                    Oi = 'flat',
                    Pi = 'dotted',
                    Hi = ({ currentType: e, nextType: t }) => {
                        const u = (function (e, t) {
                            return void 0 === t || ki.has(e) || (t && ki.has(t))
                                ? 'empty'
                                : e === ai.FieldModification
                                  ? Oi
                                  : Pi;
                        })(e, t);
                        switch (u) {
                            case Oi:
                                return i().createElement('div', {
                                    className: C()(Ri, 'PropertySeparator_propertiesSeparator__flat_3a'),
                                });
                            case Pi:
                                return i().createElement('div', { className: Ri });
                            default:
                                return i().createElement('div', { className: 'PropertySeparator_emptySeparator_80' });
                        }
                    },
                    Vi = R.strings.tech_tree_trade_in.summary.emptyColumn,
                    Wi = (0, H.Pi)(() => {
                        const e = Fr().model,
                            t = e.vehicleProperties.get();
                        return i().createElement(
                            'div',
                            {
                                className: C()(
                                    'VehicleProperties_base_7b',
                                    e.showedDetails.get() && 'VehicleProperties_base__showProperty_2c',
                                ),
                            },
                            i().createElement(
                                'div',
                                { className: 'VehicleProperties_container_43' },
                                Ve(t, ({ properties: e, vehicleState: u }, a) =>
                                    i().createElement(
                                        i().Fragment,
                                        { key: a },
                                        i().createElement(
                                            'div',
                                            { className: 'VehicleProperties_column_2a' },
                                            (() => {
                                                switch (u) {
                                                    case xr:
                                                    case Tr:
                                                        return i().createElement(
                                                            'div',
                                                            { className: 'VehicleProperties_text_62' },
                                                            Vi.$dyn(u),
                                                        );
                                                    case Ir:
                                                    case Mr:
                                                        return i().createElement(
                                                            i().Fragment,
                                                            null,
                                                            Ve(e, (t, u) => {
                                                                var a;
                                                                const n = ((r = t.categoryType), Li[r] || Di);
                                                                var r;
                                                                return i().createElement(
                                                                    i().Fragment,
                                                                    { key: u },
                                                                    i().createElement(n, t),
                                                                    i().createElement(Hi, {
                                                                        currentType: t.categoryType,
                                                                        nextType:
                                                                            null == (a = Oe(e, u + 1))
                                                                                ? void 0
                                                                                : a.categoryType,
                                                                    }),
                                                                );
                                                            }),
                                                        );
                                                    default:
                                                        console.error(`The vehicleState is not correct ${u}`);
                                                }
                                            })(),
                                        ),
                                        a !== t.length - 1 &&
                                            i().createElement('div', { className: 'VehicleProperties_separator_0e' }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    $i = (0, H.Pi)(() => {
                        const e = Fr().model,
                            t = e.showedDetails.get(),
                            u = kt();
                        return i().createElement(
                            'div',
                            { className: C()('Content_base_fb', t && 'Content_base__showDetails_2a') },
                            i().createElement(
                                'div',
                                { className: 'Content_receiveBranch_85' },
                                i().createElement(ui, { branch: e.branchToReceive.get(), branchType: Br }),
                            ),
                            i().createElement(
                                'div',
                                { className: 'Content_giveBranch_f7' },
                                i().createElement(ui, { branch: e.branchToGive.get(), branchType: yr }),
                                i().createElement('div', { className: 'Content_glow_d1' }),
                                i().createElement(
                                    'div',
                                    { className: 'Content_showDetailsButton_d8' },
                                    i().createElement(Sr, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: 'Content_scrollContainer_91' },
                                    i().createElement(
                                        qt.Vertical.Default,
                                        {
                                            api: u,
                                            scrollClassNames: { content: 'Content_scrollContent_00' },
                                            areaClassName: 'Content_scrollAreaContainer_5a',
                                            barClassNames: { base: 'Content_scrollBarPosition_5f' },
                                        },
                                        i().createElement(
                                            'div',
                                            { className: 'Content_properties_1f' },
                                            i().createElement(Wi, null),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Ui = (0, H.Pi)(() => {
                        const e = Fr().model.showedDetails.get();
                        return i().createElement(
                            'div',
                            { className: C()('App_base_d8', e && 'App_base__showDetails_69') },
                            i().createElement('div', { className: 'App_bg_42' }),
                            i().createElement(dt, {
                                title: R.strings.tech_tree_trade_in.summary.title(),
                                subTitle: R.strings.tech_tree_trade_in.summary.subtitle(),
                            }),
                            i().createElement($i, null),
                        );
                    }),
                    Gi = {
                        [z.INTRO]: () =>
                            i().createElement(
                                La,
                                { options: { context: 'model.introModel' } },
                                i().createElement(Ua, null),
                            ),
                        [z.BRANCH_SELECTION]: () =>
                            i().createElement(
                                Fu,
                                { options: { context: 'model.branchSelectionModel' } },
                                i().createElement(Ia, null),
                            ),
                        [z.SUMMARY]: () =>
                            i().createElement(
                                fr,
                                { options: { context: 'model.summaryModel' } },
                                i().createElement(Ui, null),
                            ),
                        [z.POST_TRADE]: () =>
                            i().createElement(
                                br,
                                { options: { context: 'model.postTradeModel' } },
                                i().createElement(Cr, null),
                            ),
                        [z.MULTICURRENCY_SELECTION]: () =>
                            i().createElement(
                                Ja,
                                { options: { context: 'model.multicurrencySelectionModel' } },
                                i().createElement(mr, null),
                            ),
                    },
                    zi = i().memo(({ viewType: e }) => {
                        const t = Gi[e],
                            u = i().useState(new Set())[0];
                        return (
                            i().useEffect(() => {
                                u.add(e);
                            }, [u, e]),
                            t
                                ? i().createElement(
                                      r.Suspense,
                                      { fallback: i().createElement('div', null) },
                                      i().createElement(mt.Provider, { value: u }, i().createElement(t, null)),
                                  )
                                : (console.error('Unknown view type for render', e), null)
                        );
                    }),
                    Xi = (0, H.Pi)(() => {
                        const e = ye().model.root.get().viewType;
                        return i().createElement(
                            'div',
                            { className: 'App_base_8c' },
                            i().createElement(
                                'div',
                                { className: 'App_content_a7' },
                                i().createElement(zi, { viewType: e }),
                                i().createElement(ze, null, i().createElement(_t, null)),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    P().render(
                        i().createElement(
                            k,
                            null,
                            i().createElement(
                                Be,
                                null,
                                i().createElement(
                                    'div',
                                    { className: 'TechTreeTradeInView_base_6e' },
                                    i().createElement(Xi, null),
                                ),
                            ),
                        ),
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
        (__webpack_require__.O = (e, t, u, a) => {
            if (!t) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, a] = deferred[o], r = !0, i = 0; i < t.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, a];
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
        (__webpack_require__.j = 664),
        (() => {
            var e = { 664: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var a,
                        n,
                        [r, i, s] = u,
                        o = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(u); o < r.length; o++)
                        (n = r[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(140));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
