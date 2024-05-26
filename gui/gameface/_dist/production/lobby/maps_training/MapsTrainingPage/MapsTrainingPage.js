(() => {
    var __webpack_modules__ = {
            67: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => K });
                var a = {};
                t.r(a),
                    t.d(a, { mouse: () => d, off: () => E, on: () => _, onResize: () => l, onScaleUpdated: () => c });
                var n = {};
                t.r(n),
                    t.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => F,
                        getSize: () => A,
                        graphicsQuality: () => D,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => B, getTextureUrl: () => p });
                var s = {};
                function o(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(s),
                    t.d(s, {
                        addModelObserver: () => x,
                        addPreloadTexture: () => T,
                        children: () => r,
                        displayStatus: () => C,
                        displayStatusIs: () => j,
                        events: () => g,
                        extraSize: () => q,
                        forceTriggerMouseMove: () => V,
                        freezeTextureBeforeResize: () => L,
                        getBrowserTexturePath: () => R,
                        getDisplayStatus: () => Y,
                        getScale: () => I,
                        getSize: () => P,
                        getViewGlobalPosition: () => O,
                        isEventHandled: () => z,
                        isFocused: () => G,
                        pxToRem: () => U,
                        remToPx: () => H,
                        resize: () => N,
                        sendEvent: () => M,
                        setAnimateWindow: () => $,
                        setEventHandled: () => W,
                        setInputPaddingsRem: () => y,
                        setSidePaddingsRem: () => k,
                        whenTutorialReady: () => X,
                    });
                const l = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    _ = (e, u) => engine.on(e, u),
                    E = (e, u) => engine.off(e, u),
                    m = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && i(!1);
                    }
                    function t() {
                        e.enabled && i(!0);
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
                            : i(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${u}`,
                                        s = m[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        a(),
                                        () => {
                                            n &&
                                                (s(),
                                                window.removeEventListener(r, o),
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
                            e.enabled && i(!0);
                        },
                        disableOutside() {
                            e.enabled && i(!1);
                        },
                    });
                })();
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const D = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function p(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function B(e, u, t) {
                    return `url(${p(e, u, t)})`;
                }
                const C = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    g = {
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
                    h = ['args'];
                const v = 2,
                    b = 16,
                    f = 32,
                    w = 64,
                    S = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, h);
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
                    M = {
                        close(e) {
                            S('popover' === e ? v : f);
                        },
                        minimize() {
                            S(w);
                        },
                        move(e) {
                            S(b, { isMouseEvent: !0, on: e });
                        },
                    };
                function T(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function y(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function R(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function x(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function k(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function N(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function O(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: H(u.x), y: H(u.y) };
                }
                function L() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function I() {
                    return viewEnv.getScale();
                }
                function U(e) {
                    return viewEnv.pxToRem(e);
                }
                function H(e) {
                    return viewEnv.remToPx(e);
                }
                function $(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function G() {
                    return viewEnv.isFocused();
                }
                function W() {
                    return viewEnv.setEventHandled();
                }
                function z() {
                    return viewEnv.isEventHandled();
                }
                function V() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Y() {
                    return viewEnv.getShowingStatus();
                }
                const j = Object.keys(C).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === C[u]), e), {}),
                    q = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    X = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : g.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    K = { view: s, client: n };
            },
            521: (e, u, t) => {
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
            368: () => {
                !(function () {
                    let e,
                        u,
                        t,
                        a,
                        n,
                        r,
                        s,
                        o = -1;
                    document.addEventListener('mousedown', (t) => {
                        document.getSelection().empty(),
                            t.target.select &&
                                -1 === o &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === o && t.target.select && t.target === e && (o = e.selectionStart), o > -1)) {
                                const a = Math.min(Math.max(t.x, u.left), u.right),
                                    n = Math.min(Math.max(t.y, u.top), u.bottom),
                                    r = document.createEvent('MouseEvent');
                                r.initMouseEvent('mousedown', !0, !0, null, 1, a, n, a, n, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(r);
                                const s = e.selectionEnd;
                                s > o ? e.setSelectionRange(o, s, 'forward') : e.setSelectionRange(s, o, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (o = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (t = e.target),
                                (a = e.target.value),
                                (n = t.selectionStart),
                                (r = -1 !== a.lastIndexOf(' ', n) ? a.lastIndexOf(' ', n) + 1 : 0),
                                (s = -1 !== a.indexOf(' ', n) ? a.indexOf(' ', n) : a.length),
                                t.setSelectionRange(r, s, 'forward'));
                        });
                })(),
                    (function () {
                        let e = null;
                        document.addEventListener('mousedown', (u) => {
                            document.getSelection().empty(),
                                0 !== u.button ||
                                    u.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(u.x, u.y));
                        }),
                            document.addEventListener('mousemove', (u) => {
                                if (0 === u.button && !u.target.select && e) {
                                    const t = document.caretPositionFromPoint(u.x, u.y);
                                    if (!t.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, t.offsetNode, t.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            });
                    })();
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(67);
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
            916: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => r.Z, B3: () => i, Z5: () => s.Z5, B0: () => o, ry: () => D });
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
                var r = t(358);
                var s = t(613);
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    m = t(67);
                const d = ['args'];
                function A(e, u, t, a, n, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(a, n);
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
                                            A(r, a, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            A(r, a, n, s, o, 'throw', e);
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
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, d);
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
                    B = () => p(o.CLOSE),
                    C = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var g = t(572);
                const h = n.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: g.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => p(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => p(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                _ = i.width,
                                E = i.height,
                                d = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(E),
                                };
                            p(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, B);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                window.ViewEnvHelper = v;
            },
            613: (e, u, t) => {
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
            766: (e, u, t) => {
                'use strict';
                var a = {};
                t.r(a),
                    t.d(a, {
                        Area: () => Se,
                        Bar: () => be,
                        DefaultScroll: () => we,
                        Direction: () => ie,
                        defaultSettings: () => le,
                        useHorizontalScrollApi: () => _e,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => Ve, Bar: () => Ge, Default: () => ze, useVerticalScrollApi: () => Me });
                var r = t(179),
                    s = t.n(r),
                    o = t(493),
                    i = t.n(o);
                var l = t(281);
                let c;
                function _(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(c || (c = {}));
                const E = (e) => e.replace(/&nbsp;/g, ' '),
                    m = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    d = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    A = (e, u, t = c.left) => e.split(u).reduce(t === c.left ? m : d, []),
                    F = (() => {
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
                    D = ['zh_cn', 'zh_sg', 'zh_tw'],
                    p = (e, u = c.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (D.includes(t)) return F(e);
                        if ('ja' === t) {
                            return (0, l.D4)()
                                .parse(e)
                                .map((e) => E(e));
                        }
                        return ((e, u = c.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = E(e);
                            return A(n, /( )/, u).forEach((e) => (t = t.concat(A(e, a, c.left)))), t;
                        })(e, u);
                    };
                var B = t(916),
                    C = t(613);
                Date.now(), C.Ew.getRegionalDateTime, C.Ew.getFormattedDateTime;
                var g = t(67);
                const h = (e = 1) => {
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
                    },
                    v = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    b = (e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    f = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    w = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    S = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const a = v(`${e}.${t}`, window);
                                return f(a) ? u(e, t, a) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    M = (e) => {
                        const u = ((e) => {
                                const u = h(),
                                    t = u.caller,
                                    a = u.resId,
                                    n = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: n, modelPath: w(n, e || ''), resId: a };
                            })(),
                            t = u.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((u, a) => {
                                    const n = v(w(t, `${u}.${a}`), window);
                                    return f(n) ? (e.push(n.id), `${u}.${a}.value`) : (e.push(a), `${u}.${a}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    T = B.Sw.instance;
                let y;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(y || (y = {}));
                const x = (e = 'model', u = y.Deep) => {
                        const t = (0, r.useState)(0),
                            a = (t[0], t[1]),
                            n = (0, r.useMemo)(() => h(), []),
                            s = n.caller,
                            o = n.resId,
                            i = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                                [s, e],
                            ),
                            l = (0, r.useState)(() =>
                                ((e) => {
                                    const u = v(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return f(u) ? u.value : u;
                                })(S(i)),
                            ),
                            c = l[0],
                            _ = l[1],
                            E = (0, r.useRef)(-1);
                        return (
                            b(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? y.Deep : y.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== y.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === y.Deep
                                                ? (e === c && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        n = M(e);
                                    E.current = T.addCallback(n, t, o, u === y.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (u !== y.None)
                                    return () => {
                                        T.removeCallback(E.current, o);
                                    };
                            }, [o, u]),
                            c
                        );
                    },
                    k =
                        (B.Sw.instance,
                        (e, u, t) =>
                            u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                                ? (u.extraLargeHeight && t.extraLarge) ||
                                  (u.largeHeight && t.large) ||
                                  (u.mediumHeight && t.medium) ||
                                  (u.smallHeight && t.small) ||
                                  (u.extraSmallHeight && t.extraSmall)
                                    ? e
                                    : null
                                : e),
                    P = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var N;
                function O(e, u, t) {
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
                })(N || (N = {}));
                const L = g.O.client.getSize('rem'),
                    I = L.width,
                    U = L.height,
                    H = Object.assign({ width: I, height: U }, O(I, U, P)),
                    $ = (0, r.createContext)(H),
                    G = ['children'];
                const W = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, G);
                    const a = (0, r.useContext)($),
                        n = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        i = a.small,
                        l = a.extraSmall,
                        c = a.extraLargeWidth,
                        _ = a.largeWidth,
                        E = a.mediumWidth,
                        m = a.smallWidth,
                        d = a.extraSmallWidth,
                        A = a.extraLargeHeight,
                        F = a.largeHeight,
                        D = a.mediumHeight,
                        p = a.smallHeight,
                        B = a.extraSmallHeight,
                        C = { extraLarge: A, large: F, medium: D, small: p, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && i) return u;
                        if (t.extraSmall && l) return u;
                    } else {
                        if (t.extraLargeWidth && c) return k(u, t, C);
                        if (t.largeWidth && _) return k(u, t, C);
                        if (t.mediumWidth && E) return k(u, t, C);
                        if (t.smallWidth && m) return k(u, t, C);
                        if (t.extraSmallWidth && d) return k(u, t, C);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && A) return u;
                            if (t.largeHeight && F) return u;
                            if (t.mediumHeight && D) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                };
                W.defaultProps = {
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
                (0, r.memo)(W);
                const z = ({ children: e }) => {
                    const u = (0, r.useContext)($),
                        t = (0, r.useState)(u),
                        a = t[0],
                        n = t[1],
                        o = (0, r.useCallback)((e, u) => {
                            const t = g.O.view.pxToRem(e),
                                a = g.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: a }, O(t, a, P)));
                        }, []),
                        i = (0, r.useCallback)(() => {
                            const e = g.O.client.getSize('px');
                            o(e.width, e.height);
                        }, [o]);
                    b(() => {
                        g.O.client.events.on('clientResized', o), g.O.client.events.on('self.onScaleUpdated', i);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                g.O.client.events.off('clientResized', o),
                                    g.O.client.events.off('self.onScaleUpdated', i);
                            },
                            [o, i],
                        );
                    const l = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                    return s().createElement($.Provider, { value: l }, e);
                };
                t(368);
                var V = t(483),
                    Y = t.n(V);
                function j(e, u, t) {
                    const a = (0, r.useContext)($);
                    let n = Object.entries(a).filter(([e, u]) => !0 === u && e in N);
                    return (
                        t && (n = n.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const a = n.map((e) =>
                                Y()(
                                    u[((e, u) => e + '__' + u)(t, e[0])],
                                    u[
                                        ((e, u) => {
                                            return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                            var t;
                                        })(t, e[0])
                                    ],
                                ),
                            );
                            return (e[t] = Y()(u[t], ...a)), e;
                        }, {})
                    );
                }
                var q = t(521);
                const X = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function K(e = q.n.NONE, u = X, t = !1, a = !1) {
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
                                if (!a && g.O.view.isEventHandled()) return;
                                g.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, a]);
                }
                function Z(e) {
                    engine.call('PlaySound', e);
                }
                const Q = {
                        playHighlight() {
                            Z('highlight');
                        },
                        playClick() {
                            Z('play');
                        },
                        playYes() {
                            Z('yes1');
                        },
                    },
                    J = (e) => {
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
                    ee = (e, u, t) => (t < e ? e : t > u ? u : t),
                    ue = [];
                function te(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), ue)
                    );
                }
                function ae(e, u, t = []) {
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
                function ne(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return re(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return re(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function re(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                function se(e, u, t) {
                    const a = (0, r.useMemo)(
                        () =>
                            (function (e, u, t, a) {
                                let n,
                                    r = !1,
                                    s = 0;
                                function o() {
                                    n && clearTimeout(n);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function _() {
                                        (s = Date.now()), t.apply(l, i);
                                    }
                                    r ||
                                        (a && !n && _(),
                                        o(),
                                        void 0 === a && c > e
                                            ? _()
                                            : !0 !== u &&
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
                                    'boolean' != typeof u && ((a = t), (t = u), (u = void 0)),
                                    (i.cancel = function () {
                                        o(), (r = !0);
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                }
                var oe = t(30);
                let ie;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(ie || (ie = {}));
                const le = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ce = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: a,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, t) => {
                            const a = u(e),
                                n = a[0],
                                r = a[1];
                            return r <= n ? 0 : ee(n, r, t);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? le : l,
                                _ = (0, r.useRef)(null),
                                E = (0, r.useRef)(null),
                                m = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        a = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (var a, n = ne(u(e).values()); !(a = n()).done; ) (0, a.value)(...t);
                                        };
                                    return (0, r.useMemo)(() => ({ on: t, off: a, trigger: n }), []);
                                })(),
                                d = se(
                                    () => {
                                        g.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, oe.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = _.current;
                                        u && (t(u, e), m.trigger('change', e), s && d());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                F = A[0],
                                D = A[1],
                                p = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var a;
                                        const n = F.scrollPosition.get(),
                                            r = (null != (a = F.scrollPosition.goal) ? a : 0) - n;
                                        return o(e, u * t + r + n);
                                    },
                                    [F.scrollPosition],
                                ),
                                B = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const a = _.current;
                                        a &&
                                            D.start({
                                                scrollPosition: o(a, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(a, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, c.animationConfig, F.scrollPosition],
                                ),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        const u = _.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const a = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            r = p(u, e, a);
                                        B(r);
                                    },
                                    [B, p, c.step],
                                ),
                                h = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(a(e)),
                                            _.current && m.trigger('mouseWheel', e, F.scrollPosition, u(_.current));
                                    },
                                    [F.scrollPosition, C, m],
                                ),
                                v = ((e, u = []) => {
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
                                        J(() => {
                                            const e = _.current;
                                            e &&
                                                (B(o(e, F.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [B, F.scrollPosition.goal],
                                ),
                                b = te(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const u = o(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && B(u, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? n(E.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? u(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: h,
                                    applyScroll: B,
                                    applyStepTo: C,
                                    contentRef: _,
                                    wrapperRef: E,
                                    scrollPosition: D,
                                    animationScroll: F,
                                    recalculateContent: b,
                                    events: { on: m.on, off: m.off },
                                }),
                                [F.scrollPosition, B, C, m.off, m.on, b, h, D, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    _e = ce({
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
                        getDirection: (e) => (e.deltaY > 1 ? ie.Next : ie.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ee = 'HorizontalBar_base_49',
                    me = 'HorizontalBar_base__nonActive_82',
                    de = 'HorizontalBar_leftButton_5f',
                    Ae = 'HorizontalBar_rightButton_03',
                    Fe = 'HorizontalBar_track_0d',
                    De = 'HorizontalBar_thumb_fd',
                    pe = 'HorizontalBar_rail_32',
                    Be = 'disable',
                    Ce = { pending: !1, offset: 0 },
                    ge = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    he = () => {},
                    ve = (e, u) => Math.max(20, e.offsetWidth * u),
                    be = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = ge, onDrag: a = he }) => {
                        const n = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, r.useState)(Ce),
                            m = E[0],
                            d = E[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    d(e),
                                        c.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [a],
                            ),
                            F = () => {
                                const u = l.current,
                                    t = c.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    _ = ee(0, 1, r / (n - a)),
                                    E = (u.offsetWidth - ve(u, s)) * _;
                                (t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(Be), void i.current.classList.remove(Be);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(Be), void i.current.classList.add(Be);
                                            var u, t;
                                            o.current.classList.remove(Be), i.current.classList.remove(Be);
                                        }
                                    })(E);
                            },
                            D = te(() => {
                                (() => {
                                    const u = c.current,
                                        t = l.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && a && t)) return;
                                    const s = Math.min(1, a / r);
                                    (u.style.width = `${ve(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(me) : n.current.classList.remove(me));
                                })(),
                                    F();
                            });
                        (0, r.useEffect)(() => J(D)),
                            (0, r.useEffect)(
                                () =>
                                    J(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = he;
                                        const a = () => {
                                            t(), (t = J(D));
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
                                if (!m.pending) return;
                                const u = g.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const o = l.current,
                                            i = c.current;
                                        if (!o || !i) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const _ = u.clientX - m.offset - o.getBoundingClientRect().x,
                                            E = (_ / o.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, E),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: i, thumbOffset: _, contentOffset: E });
                                    }),
                                    t = g.O.client.events.mouse.up(() => {
                                        u(), A(Ce);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, m.offset, m.pending, a, A]);
                        const p = ae((u) => e.applyStepTo(u), _, [e]),
                            B = p[0],
                            C = p[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Be) || Z('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: Y()(Ee, u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: Y()(de, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Be) || 0 !== e.button || (Z('play'), B(ie.Next));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: Y()(Fe, u.track),
                                    onMouseDown: (u) => {
                                        const a = c.current;
                                        if (a && 0 === u.button)
                                            if ((Z('play'), u.target === a))
                                                A({ pending: !0, offset: u.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const a = c.current,
                                                        n = e.contentRef.current;
                                                    if (!a || !n) return;
                                                    const r = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                })(u.screenX > a.getBoundingClientRect().x ? ie.Prev : ie.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: c, className: Y()(De, u.thumb) }),
                                s().createElement('div', { className: Y()(pe, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: Y()(Ae, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Be) || 0 !== e.button || (Z('play'), B(ie.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    fe = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    we = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: Y()(fe.base, e.base) });
                            }, [a]),
                            E = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: Y()(fe.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: Y()(fe.defaultScrollArea, n) },
                                s().createElement(Se, { className: i, api: E, classNames: o }, e),
                            ),
                            s().createElement(be, { getStepByRailClick: l, api: u, onDrag: c, classNames: _ }),
                        );
                    },
                    Se = ({ api: e, className: u, classNames: t, children: a }) => (
                        (0, r.useEffect)(() => J(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: Y()(fe.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: Y()(fe.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: Y()(fe.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (Se.Bar = be), (Se.Default = we);
                const Me = ce({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ie.Next : ie.Prev),
                    }),
                    Te = 'VerticalBar_base_f3',
                    ye = 'VerticalBar_base__nonActive_42',
                    Re = 'VerticalBar_topButton_d7',
                    xe = 'VerticalBar_bottomButton_06',
                    ke = 'VerticalBar_track_df',
                    Pe = 'VerticalBar_thumb_32',
                    Ne = 'VerticalBar_rail_43',
                    Oe = 'disable',
                    Le = () => {},
                    Ie = { pending: !1, offset: 0 },
                    Ue = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    He = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    $e = (e, u) => Math.max(20, e.offsetHeight * u),
                    Ge = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Ue, onDrag: a = Le }) => {
                        const n = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, r.useState)(Ie),
                            m = E[0],
                            d = E[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    d(e),
                                        c.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [a],
                            ),
                            F = te(() => {
                                const u = c.current,
                                    t = l.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && u && t)) return;
                                const s = Math.min(1, a / r);
                                return (
                                    (u.style.height = `${$e(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(ye) : n.current.classList.remove(ye)),
                                    s
                                );
                            }),
                            D = te(() => {
                                const u = l.current,
                                    t = c.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    _ = ee(0, 1, r / (n - a)),
                                    E = (u.offsetHeight - $e(u, s)) * _;
                                (t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === Math.round(e))
                                                return o.current.classList.add(Oe), void i.current.classList.remove(Oe);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(Oe), void i.current.classList.add(Oe);
                                            var u, t;
                                            o.current.classList.remove(Oe), i.current.classList.remove(Oe);
                                        }
                                    })(E);
                            }),
                            p = te(() => {
                                He(e, () => {
                                    F(), D();
                                });
                            });
                        (0, r.useEffect)(() => J(p)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    He(e, () => {
                                        D();
                                    });
                                };
                                let t = Le;
                                const a = () => {
                                    t(), (t = J(p));
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
                                if (!m.pending) return;
                                const u = g.O.client.events.mouse.up(() => {
                                        A(Ie);
                                    }),
                                    t = g.O.client.events.mouse.move(([u]) => {
                                        He(e, (t) => {
                                            const n = l.current,
                                                r = c.current,
                                                s = e.getContainerSize();
                                            if (!n || !r || !s) return;
                                            const o = u.screenY - m.offset - n.getBoundingClientRect().y,
                                                i = (o / n.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, m.offset, m.pending, a, A]);
                        const B = ae((u) => e.applyStepTo(u), _, [e]),
                            C = B[0],
                            h = B[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Oe) || Z('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: Y()(Te, u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: Y()(Re, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Oe) || 0 !== e.button || (Z('play'), C(ie.Next));
                                },
                                ref: o,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: Y()(ke, u.track),
                                    onMouseDown: (u) => {
                                        const a = c.current;
                                        if (a && 0 === u.button)
                                            if ((Z('play'), u.target === a))
                                                A({ pending: !0, offset: u.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    c.current &&
                                                        He(e, (a) => {
                                                            if (!a) return;
                                                            const n = t(e),
                                                                r = e.clampPosition(a, a.scrollTop + n * u);
                                                            e.applyScroll(r);
                                                        });
                                                })(u.screenY > a.getBoundingClientRect().y ? ie.Prev : ie.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: c, className: Y()(Pe, u.thumb) }),
                                s().createElement('div', { className: Y()(Ne, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: Y()(xe, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Oe) || 0 !== e.button || (Z('play'), C(ie.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    We = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ze = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: Y()(We.base, e.base) });
                            }, [a]),
                            E = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: Y()(We.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: Y()(We.area, n) },
                                s().createElement(Ve, { className: o, classNames: i, api: E }, e),
                            ),
                            s().createElement(Ge, { getStepByRailClick: l, api: u, onDrag: c, classNames: _ }),
                        );
                    },
                    Ve = ({ className: e, classNames: u, children: t, api: a }) => (
                        (0, r.useEffect)(() => J(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: Y()(We.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: Y()(We.content, null == u ? void 0 : u.content), ref: a.contentRef },
                                t,
                            ),
                        )
                    );
                Ve.Default = ze;
                const Ye = { Vertical: n, Horizontal: a },
                    je = {
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
                    qe = [
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
                function Xe() {
                    return (
                        (Xe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Xe.apply(this, arguments)
                    );
                }
                class Ke extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Z(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Z(this.props.soundClick);
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
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, qe)),
                            m = Y()(je.base, je[`base__${r}`], je[`base__${n}`], null == o ? void 0 : o.base),
                            d = Y()(je.icon, je[`icon__${r}`], je[`icon__${n}`], null == o ? void 0 : o.icon),
                            A = Y()(je.glow, null == o ? void 0 : o.glow),
                            F = Y()(je.caption, je[`caption__${r}`], null == o ? void 0 : o.caption),
                            D = Y()(je.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            Xe(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== r && s().createElement('div', { className: je.shine }),
                            s().createElement('div', { className: d }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: F }, u),
                            a && s().createElement('div', { className: D }, a),
                        );
                    }
                }
                Ke.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Ze = [
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
                function Qe(e) {
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
                const Je = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: B.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    eu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            E = void 0 !== _ && _,
                            m = e.decoratorId,
                            d = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            p = void 0 === D ? 0 : D,
                            B = e.onShow,
                            C = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Ze);
                        const v = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, r.useMemo)(() => p || h().resId, [p]),
                            f = (0, r.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (Je(t, d, { isMouseEvent: !0, on: !0, arguments: Qe(a) }, b),
                                    B && B(),
                                    (v.current.isVisible = !0));
                            }, [t, d, a, b, B]),
                            w = (0, r.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        Je(t, d, { on: !1 }, b),
                                        v.current.isVisible && C && C(),
                                        (v.current.isVisible = !1);
                                }
                            }, [t, d, b, C]),
                            S = (0, r.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(v.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === F && w();
                            }, [F, w]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return F
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((M = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      n && n(e),
                                                      M && M(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              w(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === E && w(), null == i || i(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === E && w(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : u;
                        var M;
                    },
                    uu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const au = R.views.common.tooltip_window.simple_tooltip_content,
                    nu = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            n = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, uu);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: a, note: n, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, a, n, i]);
                        return s().createElement(
                            eu,
                            tu(
                                {
                                    contentId:
                                        ((_ = null == i ? void 0 : i.hasHtmlContent),
                                        _ ? au.SimpleTooltipHtmlContent('resId') : au.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    },
                    ru = 'MapListEmpty_base_f0',
                    su = 'MapListEmpty_block_21',
                    ou = 'MapListEmpty_title_a3',
                    iu = 'MapListEmpty_description_59',
                    lu = s().memo(({ title: e, description: u, classMix: t }) => {
                        const a = _(R.strings.maps_training.mapSelection.MapListEmpty.text(), { searchTxt: u }),
                            n = Y()(ru, t);
                        return s().createElement(
                            'div',
                            { className: n },
                            s().createElement(
                                'div',
                                { className: su },
                                s().createElement('div', { className: ou }, e),
                                s().createElement('div', { className: iu }, a),
                            ),
                        );
                    }),
                    cu = {
                        base: 'MapCard_base_6c',
                        base__extraSmall: 'MapCard_base__extraSmall_dd',
                        base__small: 'MapCard_base__small_47',
                        base__medium: 'MapCard_base__medium_80',
                        base__disabled: 'MapCard_base__disabled_e9',
                        base__completed: 'MapCard_base__completed_d8',
                        base__hover: 'MapCard_base__hover_80',
                        background: 'MapCard_background_2b',
                        contextShadow: 'MapCard_contextShadow_c4',
                        checkmark: 'MapCard_checkmark_c6',
                        completed: 'MapCard_completed_d8',
                        title: 'MapCard_title_08',
                        title__disabled: 'MapCard_title__disabled_a8',
                        overlayImage: 'MapCard_overlayImage_e9',
                        overlaySaturation: 'MapCard_overlaySaturation_27',
                        overlayHover: 'MapCard_overlayHover_42',
                    },
                    _u = s().memo(({ title: e, image: u, id: t, onClick: a, isEnabled: n, isCompleted: o }) => {
                        const i = j(['base'], cu),
                            l = (0, r.useState)(!1),
                            c = l[0],
                            _ = l[1],
                            E = (0, r.useCallback)(() => {
                                Q.playHighlight(), _(!0);
                            }, []),
                            m = (0, r.useCallback)(() => {
                                _(!1);
                            }, []),
                            d = (0, r.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            A = (0, r.useCallback)(() => {
                                n && (Q.playClick(), a(t));
                            }, [n, a, t]),
                            F = Y()(
                                i.base,
                                o && cu.base__completed,
                                !n && cu.base__disabled,
                                c && n && !o && cu.base__hover,
                            ),
                            D = Y()(cu.overlayHover, !n && cu.overlayHover__disabled),
                            p = Y()(cu.title, !n && cu.title__disabled);
                        return s().createElement(
                            'div',
                            { className: F, onClick: A, onMouseEnter: E, onMouseLeave: m },
                            s().createElement(
                                'div',
                                { className: cu.background, style: d },
                                s().createElement('div', { className: cu.contextShadow }),
                            ),
                            !n && s().createElement('div', { className: cu.overlayImage }),
                            s().createElement('div', { className: p }, e),
                            !n && s().createElement('div', { className: cu.overlaySaturation }),
                            o &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: cu.completed },
                                        R.strings.maps_training.mapSelection.MapCard.completed(),
                                    ),
                                    s().createElement('div', { className: cu.checkmark }),
                                ),
                            n && !o && s().createElement('div', { className: D }),
                        );
                    }),
                    Eu = {
                        base: 'MapGroup_base_74',
                        titleBlock: 'MapGroup_titleBlock_33',
                        titleBlock__extraSmall: 'MapGroup_titleBlock__extraSmall_c2',
                        titleBlock__small: 'MapGroup_titleBlock__small_59',
                        titleBlock__medium: 'MapGroup_titleBlock__medium_35',
                        title: 'MapGroup_title_c9',
                        count: 'MapGroup_count_d8',
                        status: 'MapGroup_status_ac',
                        statusTitle: 'MapGroup_statusTitle_fe',
                        icon: 'MapGroup_icon_1e',
                        icon__extraSmall: 'MapGroup_icon__extraSmall_84',
                        icon__small: 'MapGroup_icon__small_ca',
                        icon__medium: 'MapGroup_icon__medium_52',
                    },
                    mu = s().memo(({ groupTitle: e, count: u, status: t, classMix: a }) => {
                        const n = j(['titleBlock', 'icon'], Eu),
                            r = '(' + u + ')',
                            o = Y()(Eu.base, a);
                        return s().createElement(
                            'div',
                            { className: o },
                            s().createElement(
                                'div',
                                { className: n.titleBlock },
                                s().createElement('div', { className: Eu.title }, e),
                                s().createElement('div', { className: Eu.count }, r),
                            ),
                            t &&
                                s().createElement(
                                    nu,
                                    {
                                        header: R.strings.maps_training.mapSelection.statusTitle.tips.header(),
                                        body: R.strings.maps_training.mapSelection.statusTitle.tips.body(),
                                    },
                                    s().createElement(
                                        'div',
                                        { className: Eu.status },
                                        s().createElement('div', { className: n.icon }),
                                        s().createElement(
                                            'div',
                                            { className: Eu.statusTitle },
                                            R.strings.maps_training.mapSelection.statusTitle.status(),
                                        ),
                                    ),
                                ),
                        );
                    }),
                    du = ['children'];
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                const Fu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, du);
                    return s().createElement(
                        eu,
                        Au(
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
                function Du() {
                    return (
                        (Du =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Du.apply(this, arguments)
                    );
                }
                const pu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(nu, u, a);
                        const n = u.contentId;
                        return n ? s().createElement(eu, Du({}, u, { contentId: n }), a) : s().createElement(Fu, u, a);
                    },
                    Bu = 'default',
                    Cu = 'search',
                    gu = 'email',
                    hu = 'password',
                    vu = 'normal',
                    bu = 'disabled',
                    fu = 'alert',
                    wu = 'error',
                    Su = 'medium',
                    Mu = {
                        [Bu]: '',
                        [gu]: R.strings.common.input.placeholder.email(),
                        [Cu]: R.strings.common.input.placeholder.search(),
                        [hu]: R.strings.common.input.placeholder.password(),
                    },
                    Tu = { [Bu]: 'text', [gu]: 'text', [Cu]: 'text', [hu]: 'password' },
                    yu = { [Bu]: '', [gu]: 'Invalid email', [Cu]: '', [hu]: '' },
                    Ru = R.images.gui.maps.icons.components.input;
                function xu(e, u) {
                    return (
                        u !== gu ||
                        (function (e) {
                            const u = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(u);
                        })(e)
                    );
                }
                const ku = {
                        base: 'InputControl_base_e4',
                        base__focused: 'InputControl_base__focused_99',
                        base__alert: 'InputControl_base__alert_50',
                        base__error: 'InputControl_base__error_a7',
                        base__done: 'InputControl_base__done_f4',
                        base__disabled: 'InputControl_base__disabled_d8',
                        input: 'InputControl_input_45',
                        base__small: 'InputControl_base__small_b4',
                        base__medium: 'InputControl_base__medium_57',
                        base__large: 'InputControl_base__large_2d',
                        base__withIcon: 'InputControl_base__withIcon_4b',
                        input__search: 'InputControl_input__search_80',
                        disabled: 'InputControl_disabled_07',
                        placeholder: 'InputControl_placeholder_ae',
                        placeholder__search: 'InputControl_placeholder__search_4f',
                        icon: 'InputControl_icon_57',
                        icon__search: 'InputControl_icon__search_23',
                        clear: 'InputControl_clear_d1',
                    },
                    Pu = (() => {
                        let e = 0;
                        return (u) => (u ? u + '_' : '') + 'input' + e++;
                    })(),
                    Nu = s().memo(
                        ({
                            componentId: e,
                            value: u = '',
                            type: t = Bu,
                            size: a = Su,
                            variant: n = vu,
                            placeholder: o = '',
                            maxLength: i,
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: _ = !0,
                            iconSource: E,
                            classMix: m,
                            onMouseEnter: d,
                            onMouseLeave: A,
                            onMouseDown: F,
                            onMouseUp: D,
                            onClick: p,
                            onChange: B,
                            onClear: C,
                            onFocus: g,
                            onBlur: h,
                        }) => {
                            const v = (0, r.useState)(!1),
                                b = v[0],
                                f = v[1],
                                w = (0, r.useRef)(null),
                                S = (0, r.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                M = n !== bu,
                                T = (0, r.useCallback)(
                                    (e) => {
                                        M && (f(!0), g && g(e));
                                    },
                                    [M, g],
                                ),
                                y = (0, r.useCallback)(
                                    (e) => {
                                        M && !S.current.mouseOver && (f(!1), h && h(e));
                                    },
                                    [M, h],
                                );
                            (0, r.useEffect)(() => {
                                M && b && _ && w.current && w.current.select();
                            }, [_, b, M]);
                            const R = (0, r.useCallback)(
                                    (e) => {
                                        M && B && B(e.target.value);
                                    },
                                    [M, B],
                                ),
                                x = (0, r.useMemo)(() => Pu(e), [e]);
                            (0, r.useEffect)(() => {
                                engine.on('IMEConfirmComposition', (e) => {
                                    if (M) {
                                        const u = w.current;
                                        u && u.id && u.id === e && B && B(u.value);
                                    }
                                });
                            }, [M, B]);
                            const k = (0, r.useCallback)(
                                    (e) => {
                                        M && ((S.current.mouseOver = !0), d && d(e));
                                    },
                                    [M, d],
                                ),
                                P = (0, r.useCallback)(
                                    (e) => {
                                        M &&
                                            w.current &&
                                            (S.current.mouseDown && w.current.focus(),
                                            (S.current.mouseOver = !1),
                                            A && A(e));
                                    },
                                    [M, A],
                                ),
                                N = (0, r.useCallback)(
                                    (e) => {
                                        M && ((S.current.mouseDown = !0), F && F(e));
                                    },
                                    [M, F],
                                ),
                                O = (0, r.useCallback)(
                                    (e) => {
                                        M && ((S.current.mouseDown = !1), D && D(e));
                                    },
                                    [M, D],
                                ),
                                L = (0, r.useCallback)(
                                    (e) => {
                                        if (M && w.current) {
                                            (!b || (b && e.target !== w.current)) && w.current.focus(), p && p(e);
                                        }
                                    },
                                    [b, M, p],
                                ),
                                I = o || Mu[t],
                                U = Boolean(E),
                                H = Y()(
                                    ku.base,
                                    ku[`base__${a}`],
                                    l && ku[`base__${n}`],
                                    b && ku.base__focused,
                                    U && ku.base__withIcon,
                                    m,
                                ),
                                $ = (0, r.useMemo)(() => (E ? { backgroundImage: `url(${E})` } : null), [E]),
                                G = Y()(ku.input, ku[`input__${t}`]),
                                W = Y()(ku.icon, ku[`icon__${t}`]),
                                z = Y()(ku.placeholder, ku[`placeholder__${t}`]);
                            return s().createElement(
                                'div',
                                {
                                    id: e,
                                    className: H,
                                    onMouseEnter: k,
                                    onMouseDown: N,
                                    onMouseUp: O,
                                    onMouseLeave: P,
                                    onClick: L,
                                },
                                !M && s().createElement('div', { className: ku.disabled }),
                                $ && s().createElement('div', { style: $, className: W }),
                                s().createElement('input', {
                                    id: x,
                                    ref: w,
                                    className: G,
                                    type: Tu[t],
                                    value: u,
                                    onChange: R,
                                    disabled: !M,
                                    onFocus: T,
                                    onBlur: y,
                                    maxLength: i,
                                }),
                                I && !u && !b && s().createElement('div', { className: z }, I),
                                c && s().createElement('div', { className: ku.clear, onClick: C }),
                            );
                        },
                    ),
                    Ou = {
                        base: 'HelperMessage_base_fd',
                        base__shown: 'HelperMessage_base__shown_20',
                        icon: 'HelperMessage_icon_b8',
                        message: 'HelperMessage_message_a2',
                        message__alert: 'HelperMessage_message__alert_23',
                        message__error: 'HelperMessage_message__error_25',
                        message__done: 'HelperMessage_message__done_ea',
                    },
                    Lu = ({ variant: e, show: u = !0, helperText: t, helperIcon: a, classMix: n }) => {
                        const o = (0, r.useMemo)(() => {
                                const u =
                                    a ||
                                    (function (e) {
                                        return e === fu ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return u && { backgroundImage: `url(${u})` };
                            }, [a, e]),
                            i = Y()(Ou.base, u && Ou.base__shown),
                            l = Y()(Ou.message, Ou[`message__${e}`], n);
                        return s().createElement(
                            'div',
                            { className: i },
                            o && s().createElement('div', { className: Ou.icon, style: o }),
                            s().createElement('div', { className: l }, t),
                        );
                    },
                    Iu = {
                        base: 'Input_base_0b',
                        base__small: 'Input_base__small_63',
                        base__medium: 'Input_base__medium_66',
                        base__large: 'Input_base__large_c1',
                        helper: 'Input_helper_e1',
                    },
                    Uu = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'maxLength',
                        'isValidated',
                        'showHelper',
                        'error',
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
                function Hu() {
                    return (
                        (Hu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Hu.apply(this, arguments)
                    );
                }
                const $u = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    Gu = (e) => {
                        let u = e.componentId,
                            t = e.type,
                            a = void 0 === t ? Bu : t,
                            n = e.variant,
                            o = void 0 === n ? vu : n,
                            i = e.size,
                            l = void 0 === i ? Su : i,
                            c = e.value,
                            _ = e.tooltipArgs,
                            E = e.helperText,
                            m = void 0 === E ? '' : E,
                            d = e.maxLength,
                            A = e.isValidated,
                            F = void 0 === A || A,
                            D = e.showHelper,
                            p = void 0 === D || D,
                            B = e.error,
                            C = e.options,
                            g = e.onFocus,
                            h = e.onMouseEnter,
                            v = e.onMouseLeave,
                            b = e.onMouseUp,
                            f = e.onMouseDown,
                            w = e.onChange,
                            S = e.classMix,
                            M = e.controlClassMix,
                            T = e.helperClassMix,
                            y = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Uu);
                        const R = (0, r.useState)(c),
                            x = R[0],
                            k = R[1],
                            P = (0, r.useState)(F),
                            N = P[0],
                            O = P[1],
                            L = (0, r.useMemo)(() => Object.assign({}, $u, C), [C]),
                            I = (0, r.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: c, type: a }),
                            U = (0, r.useCallback)((e) => {
                                e !== I.current.value &&
                                    ((I.current.value = e), (I.current.isChangeHandled = !1), k(e));
                            }, []),
                            H = (0, r.useCallback)(
                                (e) => {
                                    let u = !0;
                                    L.performChangeValidation &&
                                        (u = L.changesValidator ? L.changesValidator(e) : xu(e, I.current.type)),
                                        w && w(e, u);
                                },
                                [w, L],
                            ),
                            $ = (0, r.useCallback)(() => {
                                I.current.debounceTimeout &&
                                    (window.clearTimeout(I.current.debounceTimeout), (I.current.debounceTimeout = 0));
                            }, []),
                            G = (0, r.useCallback)(() => U(''), [U]);
                        (0, r.useEffect)(() => () => $(), [$]);
                        const W = (0, r.useCallback)(
                            (e) => {
                                $(),
                                    L.debounceTime
                                        ? (I.current.debounceTimeout = window.setTimeout(() => {
                                              H(e);
                                          }, L.debounceTime))
                                        : H(e);
                            },
                            [H, $, L.debounceTime],
                        );
                        (0, r.useEffect)(() => {
                            I.current.isChangeHandled ||
                                I.current.value !== x ||
                                (W(I.current.value), (I.current.isChangeHandled = !0));
                        }, [x, W]),
                            (0, r.useEffect)(() => {
                                I.current.isChangeHandled && c !== I.current.value && ((I.current.value = c), k(c)),
                                    (I.current.type = a);
                            }, [c, a]),
                            (0, r.useEffect)(() => {
                                O(F);
                            }, [F, o]);
                        const z = (0, r.useCallback)((e) => h && h(e), [h]),
                            V = (0, r.useCallback)(
                                (e) => {
                                    L.disableHighlightOnFocus && N && O(!1), g && g(e);
                                },
                                [N, g, L.disableHighlightOnFocus],
                            ),
                            j = (0, r.useCallback)((e) => b && b(e), [b]),
                            q = (0, r.useCallback)((e) => f && f(e), [f]),
                            X = (0, r.useCallback)((e) => v && v(e), [v]),
                            K = (0, r.useMemo)(
                                () =>
                                    L.withTypeIcon
                                        ? (function (e, u) {
                                              return e === Cu ? Ru.$dyn(`search_${u}`) : '';
                                          })(a, l)
                                        : '',
                                [a, l, L.withTypeIcon],
                            ),
                            Z = m || yu[a],
                            Q = Boolean(x),
                            J = B ? wu : o,
                            ee = Boolean(B) || N,
                            ue = (0, r.useMemo)(
                                () => ('boolean' == typeof L.withClear ? Q && L.withClear : Q && a === Cu),
                                [a, Q, L],
                            ),
                            te = Y()(Iu.base, Iu[`base__${l}`], Iu[`base__${o}`], S);
                        return s().createElement(
                            'div',
                            { id: u, className: te, onMouseEnter: z, onMouseDown: q, onMouseUp: j, onMouseLeave: X },
                            s().createElement(
                                pu,
                                { tooltipArgs: _ },
                                s().createElement(
                                    Nu,
                                    Hu(
                                        {
                                            componentId: u ? `${u}-inputControl` : void 0,
                                            iconSource: K,
                                            size: l,
                                            type: a,
                                            variant: J,
                                            value: x,
                                            withClear: ue,
                                            highlighted: ee,
                                            selectOnFocus: L.selectOnFocus,
                                            classMix: M,
                                            onFocus: V,
                                            onChange: U,
                                            onClear: G,
                                            maxLength: d,
                                        },
                                        y,
                                    ),
                                ),
                            ),
                            Z &&
                                s().createElement(
                                    'div',
                                    { className: Iu.helper },
                                    s().createElement(Lu, {
                                        variant: J,
                                        show: p && (L.isPermanentHelper || ee),
                                        helperText: B || Z,
                                        helperIcon: L.helperIconSource,
                                        classMix: T,
                                    }),
                                ),
                        );
                    };
                let Wu;
                !(function (e) {
                    (e.Button = 'button'), (e.Slot = 'slot');
                })(Wu || (Wu = {}));
                const zu = {
                        base: 'ToggleButton_base_4d',
                        base__slot: 'ToggleButton_base__slot_4e',
                        base__active: 'ToggleButton_base__active_8d',
                        base__disabled: 'ToggleButton_base__disabled_ab',
                        background: 'ToggleButton_background_f3',
                        content: 'ToggleButton_content_90',
                        overlay: 'ToggleButton_overlay_1d',
                        base__button: 'ToggleButton_base__button_f5',
                        indicator: 'ToggleButton_indicator_c3',
                    },
                    Vu = () => {},
                    Yu = s().memo(
                        ({
                            active: e = !1,
                            className: u,
                            children: t,
                            toggleType: a = Wu.Button,
                            onClick: n,
                            disabled: o,
                            soundClick: i = 'play',
                            soundHover: l = 'highlight',
                            onMouseEnter: c = Vu,
                            onMouseDown: _ = Vu,
                            onMouseUp: E = Vu,
                            onMouseLeave: m = Vu,
                        }) => {
                            const d = (0, r.useCallback)(
                                    (u) => {
                                        o || (Z(i), n && n(u, e));
                                    },
                                    [n, o, e, i],
                                ),
                                A = (0, r.useCallback)(
                                    (e) => {
                                        o || (Z(l), c && c(e));
                                    },
                                    [o, l, c],
                                ),
                                F = (0, r.useCallback)(
                                    (e) => {
                                        o || ((1 !== e.button && 2 !== e.button) || (null !== i && Z(i)), _ && _(e));
                                    },
                                    [_, o, i],
                                ),
                                D = Y()(zu.base, u, zu[`base__${a}`], e && zu.base__active, o && zu.base__disabled);
                            return s().createElement(
                                'div',
                                {
                                    className: D,
                                    onClick: d,
                                    onMouseEnter: A,
                                    onMouseUp: o ? Vu : E,
                                    onMouseDown: F,
                                    onMouseLeave: o ? Vu : m,
                                },
                                s().createElement('div', { className: zu.content }, t),
                                a === Wu.Button && s().createElement('div', { className: zu.background }),
                                s().createElement('div', { className: zu.overlay }),
                                s().createElement('div', { className: zu.indicator }),
                            );
                        },
                    ),
                    ju = {
                        base: 'MapSelect_base_30',
                        close: 'MapSelect_close_03',
                        close__extraSmall: 'MapSelect_close__extraSmall_26',
                        info: 'MapSelect_info_c7',
                        info__extraSmall: 'MapSelect_info__extraSmall_a1',
                        scrollArea: 'MapSelect_scrollArea_20',
                        scrollContent: 'MapSelect_scrollContent_be',
                        scrollContent__extraSmall: 'MapSelect_scrollContent__extraSmall_7e',
                        scrollContent__small: 'MapSelect_scrollContent__small_d0',
                        scrollContent__medium: 'MapSelect_scrollContent__medium_5b',
                        group: 'MapSelect_group_c9',
                        group__extraSmall: 'MapSelect_group__extraSmall_85',
                        group__small: 'MapSelect_group__small_bc',
                        group__medium: 'MapSelect_group__medium_eb',
                        topBlock: 'MapSelect_topBlock_37',
                        topBlock__extraSmall: 'MapSelect_topBlock__extraSmall_6a',
                        topBlock__small: 'MapSelect_topBlock__small_92',
                        topBlock__medium: 'MapSelect_topBlock__medium_0a',
                        title: 'MapSelect_title_54',
                        title__extraSmall: 'MapSelect_title__extraSmall_36',
                        title__small: 'MapSelect_title__small_0f',
                        title__medium: 'MapSelect_title__medium_2e',
                        subtitle: 'MapSelect_subtitle_33',
                        subtitle__extraSmall: 'MapSelect_subtitle__extraSmall_7a',
                        subtitle__small: 'MapSelect_subtitle__small_dd',
                        subtitle__medium: 'MapSelect_subtitle__medium_21',
                        filter: 'MapSelect_filter_1a',
                        filter__extraSmall: 'MapSelect_filter__extraSmall_7a',
                        filter__small: 'MapSelect_filter__small_61',
                        filter__medium: 'MapSelect_filter__medium_ba',
                        line: 'MapSelect_line_b2',
                        line__extraSmall: 'MapSelect_line__extraSmall_7f',
                        line__small: 'MapSelect_line__small_b7',
                        line__medium: 'MapSelect_line__medium_30',
                        endLine: 'MapSelect_endLine_34',
                        maps: 'MapSelect_maps_8a',
                        maps__extraSmall: 'MapSelect_maps__extraSmall_d5',
                        maps__small: 'MapSelect_maps__small_d9',
                        maps__medium: 'MapSelect_maps__medium_49',
                        filterBlock: 'MapSelect_filterBlock_e3',
                        toggle: 'MapSelect_toggle_eb',
                        iconToggle: 'MapSelect_iconToggle_14',
                        input: 'MapSelect_input_77',
                        scrollSensitiveArea: 'MapSelect_scrollSensitiveArea_9b',
                    };
                function qu() {
                    return (
                        (qu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        qu.apply(this, arguments)
                    );
                }
                const Xu = (e, u) => {
                        if (e.value.isEnabled === u.value.isEnabled) {
                            const t = e.value.isCompleted ? 1 : 0,
                                a = u.value.isCompleted ? 1 : 0;
                            return t !== a && e.value.isEnabled
                                ? t > a
                                    ? 1
                                    : -1
                                : ((e, u) => String(e.value.title).localeCompare(String(u.value.title)))(e, u);
                        }
                        return ((e, u) => (e.value.isEnabled < u.value.isEnabled ? 1 : -1))(e, u);
                    },
                    Ku = () => {
                        const e = x('model', y.Shallow),
                            u = e.maps,
                            t = e.groups,
                            a = e.onClose,
                            n = e.onSelect,
                            o = e.incompleteFilter,
                            i = e.titleFilter,
                            l = e.isDataLoaded,
                            c = e.onFilteringChange,
                            _ = e.onInfoClicked,
                            E = j(
                                [
                                    'close',
                                    'info',
                                    'title',
                                    'subtitle',
                                    'topBlock',
                                    'filter',
                                    'maps',
                                    'line',
                                    'endLine',
                                    'group',
                                    'scrollContent',
                                ],
                                ju,
                            ),
                            m = (0, r.useState)(o),
                            d = m[0],
                            A = m[1],
                            F = (0, r.useState)(i || ''),
                            D = F[0],
                            p = F[1],
                            B = Me(),
                            C = (0, r.useCallback)(() => a(), [a]);
                        K(q.n.ESCAPE, C);
                        const g = (0, r.useMemo)(
                                () =>
                                    u
                                        .filter((e) => {
                                            const u = e.value,
                                                t = !d || !u.isCompleted,
                                                a = u.title,
                                                n =
                                                    '' === D ||
                                                    (a &&
                                                        Boolean(
                                                            a.match(
                                                                new RegExp(
                                                                    D.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
                                                                    'i',
                                                                ),
                                                            ),
                                                        ));
                                            return t && n;
                                        })
                                        .sort(Xu),
                                [u, l, d, D],
                            ),
                            h = {};
                        g.forEach(({ value: e }) => {
                            const u = e.groupId;
                            u in h || (h[u] = new Array()), h[u].push(e);
                        });
                        const v = (0, r.useCallback)(() => {
                                Q.playYes(), _();
                            }, [_]),
                            b = (0, r.useCallback)(
                                (e) => {
                                    c({ incompleteFilter: d, titleFilter: D }), n({ id: e });
                                },
                                [D, c, n, d],
                            ),
                            f = (0, r.useCallback)(() => {
                                c({ incompleteFilter: !d, titleFilter: D }), A(!d);
                            }, [D, c, d]),
                            w = (0, r.useCallback)(
                                (e) => {
                                    c({ incompleteFilter: d, titleFilter: e }), p(e);
                                },
                                [c, d],
                            ),
                            S = t.map(({ value: e }, u) =>
                                void 0 === h[e.groupId]
                                    ? null
                                    : s().createElement(
                                          'div',
                                          { key: `${e.groupTitle}${u}` },
                                          s().createElement(mu, {
                                              key: `${e.groupId}${e.groupTitle}`,
                                              count: h[e.groupId].length,
                                              groupTitle: e.groupTitle,
                                              status: e.isGroupDisabled,
                                              classMix: E.group,
                                          }),
                                          s().createElement(
                                              'div',
                                              { className: E.maps },
                                              h[e.groupId].map((e) =>
                                                  s().createElement(
                                                      _u,
                                                      qu({ key: `${e.id}${e.title}`, onClick: b }, e),
                                                  ),
                                              ),
                                          ),
                                      ),
                            );
                        return s().createElement(
                            'div',
                            { className: ju.base },
                            s().createElement(
                                'div',
                                { className: E.close },
                                s().createElement(Ke, {
                                    caption: R.strings.maps_training.mapSelection.closeBtn(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: C,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: E.topBlock },
                                s().createElement(
                                    'div',
                                    { className: E.title },
                                    R.strings.maps_training.mapSelection.title(),
                                ),
                                s().createElement(
                                    'div',
                                    { className: E.subtitle },
                                    R.strings.maps_training.mapSelection.subtitle(),
                                ),
                                s().createElement(
                                    'div',
                                    { className: E.filter },
                                    s().createElement(
                                        'div',
                                        { className: ju.filterBlock },
                                        s().createElement(
                                            nu,
                                            { body: R.strings.maps_training.mapSelection.filters.tip1() },
                                            s().createElement(
                                                Yu,
                                                { active: d, onClick: f, className: ju.toggle },
                                                s().createElement('div', { className: ju.iconToggle }),
                                            ),
                                        ),
                                        s().createElement(Gu, {
                                            type: 'search',
                                            value: i,
                                            onChange: w,
                                            placeholder: R.strings.maps_training.mapSelection.filters.tip2(),
                                            classMix: ju.input,
                                            maxLength: 30,
                                        }),
                                    ),
                                ),
                            ),
                            s().createElement('div', { className: E.line }),
                            s().createElement(
                                'div',
                                { className: ju.scrollArea },
                                s().createElement(
                                    Ye.Vertical.Default,
                                    { api: B, className: ju.scrollSensitiveArea },
                                    s().createElement(
                                        'div',
                                        { className: E.scrollContent },
                                        S,
                                        0 === g.length &&
                                            l &&
                                            s().createElement(lu, {
                                                title: R.strings.maps_training.mapSelection.MapListEmpty.title(),
                                                description: D,
                                            }),
                                    ),
                                ),
                            ),
                            s().createElement('div', { className: E.endLine }),
                            s().createElement(
                                'div',
                                { className: E.info },
                                s().createElement(Ke, {
                                    caption: R.strings.maps_training.mapSelection.TextButton.info(),
                                    type: 'info',
                                    onClick: v,
                                }),
                            ),
                        );
                    },
                    Zu = 'SceneWrapper_base_85',
                    Qu = 'SceneWrapper_grab_cf',
                    Ju = 'SceneWrapper_grab__down_50',
                    et = ({ children: e, onMoveSpace: u }) => {
                        const t = (0, r.useState)(!1),
                            a = t[0],
                            n = t[1],
                            o = (0, r.useRef)(0),
                            i = (0, r.useRef)(0),
                            l = (0, r.createRef)(),
                            c = (0, r.useCallback)(
                                (e) => {
                                    if (!l.current) return;
                                    const u = l.current.getBoundingClientRect(),
                                        t = u.width,
                                        a = u.height;
                                    return !(
                                        0 === e.clientX ||
                                        0 === e.clientY ||
                                        e.clientX >= t - 1 ||
                                        e.clientY >= a - 1
                                    );
                                },
                                [l],
                            ),
                            _ = (0, r.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), !a || !c(e))) return;
                                    const t = e.clientX,
                                        n = e.clientY,
                                        r = t !== o.current ? t - o.current : 0,
                                        s = n !== i.current ? n - i.current : 0;
                                    (0 === r && 0 === s) ||
                                        ((o.current = t), (i.current = n), u({ dx: r, dy: s, dz: 0 }));
                                },
                                [c, a, o, i, u],
                            ),
                            E = (0, r.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), !c(e))) return;
                                    const t = e.deltaY < 0;
                                    u({ dx: 0, dy: 0, dz: t ? -600 : 600 });
                                },
                                [c, u],
                            ),
                            m = (0, r.useCallback)(() => n(!1), [n]);
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', m),
                                () => {
                                    document.removeEventListener('mouseup', m);
                                }
                            ),
                            [m],
                        );
                        const d = (0, r.useCallback)(
                                (e) => {
                                    e.preventDefault(),
                                        0 === e.button &&
                                            c(e) &&
                                            (n(!0), (o.current = e.clientX), (i.current = e.clientY));
                                },
                                [c, n],
                            ),
                            A = (0, r.useCallback)(() => n(!1), [n]),
                            F = Y()(Qu, a && Ju);
                        return s().createElement(
                            'div',
                            { className: Zu },
                            s().createElement('div', {
                                ref: l,
                                className: F,
                                onMouseMove: _,
                                onMouseDown: d,
                                onWheel: E,
                            }),
                            s().createElement('div', { onMouseMove: A }, e),
                        );
                    },
                    ut = {
                        base: 'Tooltip_base_7a',
                        base__left: 'Tooltip_base__left_99',
                        base__small: 'Tooltip_base__small_8a',
                        base__extraSmall: 'Tooltip_base__extraSmall_ca',
                        base__teamPoint: 'Tooltip_base__teamPoint_a6',
                        base__bottom: 'Tooltip_base__bottom_02',
                        base__visible: 'Tooltip_base__visible_57',
                        image: 'Tooltip_image_94',
                    },
                    tt = (0, r.memo)(({ image: e, isLeft: u, isBottom: t, isTeamPoint: a, isVisible: n }) => {
                        const o = (0, r.useMemo)(() => ({ backgroundImage: `url(${e})` }), [e]),
                            i = j(['base'], ut),
                            l = Y()(
                                i.base,
                                ut['base__' + (u ? 'left' : 'right')],
                                a && ut.base__teamPoint,
                                t && ut.base__bottom,
                                n && ut.base__visible,
                            );
                        return s().createElement(
                            'div',
                            { className: l },
                            s().createElement('div', { className: ut.image, style: o }),
                        );
                    }),
                    at = {
                        base: 'Point_base_4d',
                        title: 'Point_title_5c',
                        base__enemyBase: 'Point_base__enemyBase_da',
                        base__main: 'Point_base__main_4a',
                        base__small: 'Point_base__small_23',
                        base__extraSmall: 'Point_base__extraSmall_00',
                        base__left: 'Point_base__left_94',
                        base__hover: 'Point_base__hover_0e',
                        base__point: 'Point_base__point_e3',
                        text: 'Point_text_c0',
                        bullet: 'Point_bullet_67',
                        bulletTeamPointBG: 'Point_bulletTeamPointBG_0e',
                        teamLabel: 'Point_teamLabel_6c',
                        teamLabel__mask: 'Point_teamLabel__mask_98',
                    },
                    nt = (e) => (e / 5.7) * 3.32,
                    rt = (0, r.memo)(
                        ({
                            id: e,
                            isLeft: u,
                            type: t,
                            positionX: a,
                            positionY: n,
                            tooltipImage: o,
                            isSmall: i,
                            isShowTooltip: l,
                            index: c,
                            isHighlighted: _,
                            onPointEvent: E,
                        }) => {
                            const m = (0, r.useRef)(0),
                                d = (0, r.useState)(_),
                                A = d[0],
                                F = d[1],
                                D = x('model.selectedMapModel', y.None).id,
                                p = 'point' !== t,
                                B = !p || Boolean(o),
                                C = (0, r.useRef)(null),
                                g = (0, r.useRef)(!1),
                                h = (0, r.useState)(window.innerHeight),
                                v = h[0],
                                b = h[1],
                                f = (0, r.useCallback)(() => {
                                    !B || (A && m.current) || (Q.playHighlight(), F(!0), E(e, !0));
                                }, [e, A, B, E]),
                                w = (0, r.useCallback)(() => {
                                    if (B && (A || m.current)) {
                                        const u = m.current;
                                        u > 0 && (clearTimeout(u), (m.current = 0)), F(!1), E(e, !1);
                                    }
                                }, [e, A, B, E]),
                                S = (0, r.useCallback)(() => {
                                    m.current = window.setTimeout(f, 100);
                                }, [f]),
                                M = (0, r.useCallback)(() => w(), [w]);
                            (0, r.useEffect)(() => () => clearTimeout(m.current), []),
                                (0, r.useEffect)(() => {
                                    const e = () => b(window.innerHeight);
                                    return (
                                        window.addEventListener('resize', e),
                                        () => window.removeEventListener('resize', e)
                                    );
                                }, []),
                                (0, r.useEffect)(
                                    () =>
                                        J(() => {
                                            if (!C.current) return;
                                            const e = C.current.getBoundingClientRect().bottom;
                                            g.current = e + viewEnv.remToPx(270) > v;
                                        }),
                                    [v],
                                );
                            const T = (0, r.useMemo)(() => {
                                    const e = i ? nt(a) : a;
                                    return { top: `${i ? nt(n) : n}rem`, left: `${e}rem` };
                                }, [a, n, i]),
                                k = p
                                    ? R.strings.maps_training.mapSelection.options.minimapBase()
                                    : R.strings.maps_training.$dyn(`c_${D}`).$dyn(e),
                                P = c + 1,
                                N = j(['base'], at),
                                O = Y()(
                                    N.base,
                                    at[`base__${t}`],
                                    u ? at.base__left : at.base__right,
                                    (A || _) && at.base__hover,
                                ),
                                L = Y()(at.teamLabel, at.teamLabel__mask);
                            return s().createElement(
                                'div',
                                { className: O, style: T, ref: C },
                                p && s().createElement('div', { className: at.bulletTeamPointBG }),
                                s().createElement(
                                    'div',
                                    { onMouseEnter: S, onMouseLeave: M },
                                    s().createElement(
                                        'div',
                                        { className: at.bullet },
                                        p && s().createElement('div', { className: at.teamLabel }, P),
                                        'main' === t && s().createElement('div', { className: L }, P),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: at.title },
                                        k,
                                        l &&
                                            s().createElement(tt, {
                                                image: o,
                                                isLeft: u,
                                                isTeamPoint: p,
                                                isBottom: g.current,
                                                isVisible: A || _,
                                            }),
                                    ),
                                ),
                            );
                        },
                    ),
                    st = {
                        base: 'Minimap_base_4a',
                        scenario: 'Minimap_scenario_ed',
                        bg: 'Minimap_bg_56',
                        base__small: 'Minimap_base__small_0f',
                        base__extraSmall: 'Minimap_base__extraSmall_00',
                    };
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                const it = (e, u) => ({ backgroundImage: `url(${e})`, width: `${u}rem`, height: `${u}rem` }),
                    lt = (0, r.memo)(({ highlightedPoint: e, onPointEvent: u }) => {
                        const t = x('model.selectedMapModel', y.Shallow),
                            a = t.id,
                            n = t.points,
                            o = t.scenarioImage,
                            i = (0, r.useContext)($),
                            l = i.small || i.extraSmall,
                            c = l ? 332 : 570,
                            _ = (0, r.useMemo)(() => it(`img://spaces/${a}/mmap.dds`, c), [a, c]),
                            E = (0, r.useMemo)(() => it(o, c), [o, c]),
                            m = j(['base'], st);
                        return s().createElement(
                            'div',
                            { className: m.base, style: _ },
                            s().createElement('div', { className: st.bg }),
                            s().createElement('div', { className: st.scenario, style: E }),
                            n.map(({ value: t }, a) =>
                                s().createElement(
                                    rt,
                                    ot(
                                        {
                                            key: `point_${t.id}`,
                                            isSmall: l,
                                            index: a,
                                            onPointEvent: u,
                                            isHighlighted: e === t.id,
                                        },
                                        t,
                                    ),
                                ),
                            ),
                        );
                    });
                let ct, _t, Et, mt, dt, At, Ft;
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
                        (e.EquipCoin = 'equipCoin');
                })(ct || (ct = {})),
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
                    })(_t || (_t = {})),
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
                    })(Et || (Et = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(mt || (mt = {})),
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
                    })(dt || (dt = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(At || (At = {})),
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
                    })(Ft || (Ft = {}));
                class Dt extends s().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = B.B3.GOLD;
                        else e = B.B3.INTEGRAL;
                        const u = B.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Dt.defaultProps = { format: 'integral' };
                const pt = [
                        ct.Items,
                        ct.Equipment,
                        ct.Xp,
                        ct.XpFactor,
                        ct.Blueprints,
                        ct.BlueprintsAny,
                        ct.Goodies,
                        ct.Berths,
                        ct.Slots,
                        ct.Tokens,
                        ct.CrewSkins,
                        ct.CrewBooks,
                        ct.Customizations,
                        ct.CreditsFactor,
                        ct.TankmenXp,
                        ct.TankmenXpFactor,
                        ct.FreeXpFactor,
                        ct.BattleToken,
                        ct.PremiumUniversal,
                        ct.NaturalCover,
                        ct.BpCoin,
                        ct.BattlePassSelectToken,
                        ct.BattlaPassFinalAchievement,
                        ct.BattleBadge,
                        ct.BonusX5,
                        ct.CrewBonusX3,
                        ct.NewYearInvoice,
                        ct.EpicSelectToken,
                        ct.Comp7TokenWeeklyReward,
                        ct.DeluxeGift,
                        ct.BattleBoosterGift,
                        ct.OptionalDevice,
                    ],
                    Bt = [ct.Gold, ct.Credits, ct.Crystal, ct.FreeXp],
                    Ct = [ct.BattlePassPoints, ct.EquipCoin],
                    gt = [ct.PremiumPlus, ct.Premium],
                    ht = (e) =>
                        pt.includes(e)
                            ? mt.MULTI
                            : Bt.includes(e)
                              ? mt.CURRENCY
                              : Ct.includes(e)
                                ? mt.NUMBER
                                : gt.includes(e)
                                  ? mt.PREMIUM_PLUS
                                  : mt.STRING,
                    vt = ['engravings', 'backgrounds'],
                    bt = ['engraving', 'background'],
                    ft = (e, u = Et.Small) => {
                        const t = e.name,
                            a = e.type,
                            n = e.value,
                            r = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case Et.S600x450:
                                        return 'c_600x450';
                                    case Et.S400x300:
                                        return 'c_400x300';
                                    case Et.S296x222:
                                        return 'c_296x222';
                                    case Et.S232x174:
                                        return 'c_232x174';
                                    case Et.Big:
                                        return 'c_80x80';
                                    case Et.Small:
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
                                    const a = vt[e];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            r = n.$dyn(t);
                                        return r ? `${r}` : `${n.$dyn(bt[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${r}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${i}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    wt = (e, u, t) => {
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
                    St = [Et.Small, Et.Big],
                    Mt = {
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
                        timer: 'Reward_timer_d3',
                    },
                    Tt = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = Et.Big,
                        special: n,
                        value: r,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const m = ((e, u) => {
                                if (void 0 === u || !St.includes(e)) return null;
                                switch (u) {
                                    case dt.BATTLE_BOOSTER:
                                    case dt.BATTLE_BOOSTER_REPLACE:
                                        return At.BATTLE_BOOSTER;
                                }
                            })(a, n),
                            d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case dt.BATTLE_BOOSTER:
                                        return Ft.BATTLE_BOOSTER;
                                    case dt.BATTLE_BOOSTER_REPLACE:
                                        return Ft.BATTLE_BOOSTER_REPLACE;
                                    case dt.BUILT_IN_EQUIPMENT:
                                        return Ft.BUILT_IN_EQUIPMENT;
                                    case dt.EQUIPMENT_PLUS:
                                        return Ft.EQUIPMENT_PLUS;
                                    case dt.EQUIPMENT_TROPHY_BASIC:
                                        return Ft.EQUIPMENT_TROPHY_BASIC;
                                    case dt.EQUIPMENT_TROPHY_UPGRADED:
                                        return Ft.EQUIPMENT_TROPHY_UPGRADED;
                                    case dt.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Ft.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case dt.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Ft.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case dt.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Ft.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case dt.PROGRESSION_STYLE_UPGRADED_1:
                                        return Ft.PROGRESSION_STYLE_UPGRADED_1;
                                    case dt.PROGRESSION_STYLE_UPGRADED_2:
                                        return Ft.PROGRESSION_STYLE_UPGRADED_2;
                                    case dt.PROGRESSION_STYLE_UPGRADED_3:
                                        return Ft.PROGRESSION_STYLE_UPGRADED_3;
                                    case dt.PROGRESSION_STYLE_UPGRADED_4:
                                        return Ft.PROGRESSION_STYLE_UPGRADED_4;
                                    case dt.PROGRESSION_STYLE_UPGRADED_5:
                                        return Ft.PROGRESSION_STYLE_UPGRADED_5;
                                    case dt.PROGRESSION_STYLE_UPGRADED_6:
                                        return Ft.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(n),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case mt.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case mt.CURRENCY:
                                    case mt.NUMBER:
                                        return s().createElement(Dt, { format: 'integral', value: Number(e) });
                                    case mt.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, o);
                        return s().createElement(
                            'div',
                            { className: Y()(Mt.base, Mt[`base__${a}`], l), style: i },
                            s().createElement(
                                pu,
                                { tooltipArgs: _, className: Mt.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: Y()(Mt.image, null == c ? void 0 : c.image) },
                                        m &&
                                            s().createElement('div', {
                                                className: Y()(Mt.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: Y()(Mt.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        d &&
                                            s().createElement('div', {
                                                className: Y()(Mt.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${d}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: Y()(
                                                    Mt.info,
                                                    Mt[`info__${e}`],
                                                    o === mt.MULTI && Mt.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    pu,
                                    { tooltipArgs: E },
                                    s().createElement('div', {
                                        className: Y()(Mt.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    yt = 'Rewards_base_26',
                    Rt = 'Rewards_base__vertical_9f',
                    xt = 'Rewards_reward_7b',
                    kt = 'Rewards_reward__vertical_c6';
                function Pt() {
                    return (
                        (Pt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Pt.apply(this, arguments)
                    );
                }
                const Nt = s().memo(
                        ({
                            data: e,
                            size: u = Et.Big,
                            isVertical: t = !1,
                            count: a,
                            classMix: n,
                            rewardItemClassMix: o,
                            boxRewardTooltip: i,
                            boxRewardValue: l,
                        }) => {
                            const c = (0, r.useMemo)(
                                    () =>
                                        a && a < e.length ? `R.images.gui.maps.icons.quests.bonuses.${u}.default` : '',
                                    [a, e.length, u],
                                ),
                                _ =
                                    l ||
                                    ((E = R.strings.tooltips.quests.awards.additional.bottom()),
                                    (m = { count: e.length - (a || 0) }),
                                    E.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(m[e.slice(u, -u)]);
                                    }));
                            var E, m;
                            const d = Y()(yt, t && Rt, n),
                                A = Y()(xt, t && kt, o);
                            return s().createElement(
                                'div',
                                { className: d },
                                c
                                    ? s().createElement(
                                          s().Fragment,
                                          null,
                                          e
                                              .slice(0, a)
                                              .map((e, t) =>
                                                  s().createElement(
                                                      'div',
                                                      { key: t, className: A },
                                                      s().createElement(Tt, Pt({ size: u }, e)),
                                                  ),
                                              ),
                                          s().createElement(
                                              'div',
                                              { className: A },
                                              s().createElement(Tt, {
                                                  name: 'more',
                                                  image: c,
                                                  size: u,
                                                  value: _,
                                                  tooltipArgs: i,
                                              }),
                                          ),
                                      )
                                    : e.map((e, t) =>
                                          s().createElement(
                                              'div',
                                              { key: t, className: A },
                                              s().createElement(Tt, Pt({ size: u }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    Ot = 'ScenarioCard_base_a0',
                    Lt = 'ScenarioCard_base__selected_31',
                    It = 'ScenarioCard_card_7d',
                    Ut = 'ScenarioCard_base__completed_05',
                    Ht = 'ScenarioCard_base__hover_5d',
                    $t = 'ScenarioCard_borderShine_5a',
                    Gt = 'ScenarioCard_borderShine__bottom_42',
                    Wt = 'ScenarioCard_selectedOverlay_9b',
                    zt = 'ScenarioCard_shine_00',
                    Vt = 'ScenarioCard_title_70',
                    Yt = 'ScenarioCard_rewards_b2',
                    jt = 'ScenarioCard_base__anim_4f',
                    qt = 'ScenarioCard_completed_15',
                    Xt = 'ScenarioCard_checkmark_13',
                    Kt = s().memo(
                        ({
                            scenarioNum: e,
                            vehicleType: u,
                            isSelected: t,
                            index: a,
                            rewards: n,
                            isComplete: o,
                            isShowCompleteAnimation: i,
                        }) => {
                            const l = x('model', y.None).onScenarioSelect,
                                c = (0, r.useState)(!1),
                                E = c[0],
                                m = c[1],
                                d = (0, r.useCallback)(() => {
                                    Q.playHighlight(), m(!0);
                                }, []),
                                A = (0, r.useCallback)(() => m(!1), []),
                                F = (0, r.useCallback)(() => {
                                    t || (Q.playClick(), l({ id: a }));
                                }, [t, l, a]);
                            (0, r.useEffect)(() => {
                                o && i && Z(R.sounds.mt_anim_scenario_complete());
                            }, [o, i]);
                            const D = (0, r.useMemo)(
                                    () =>
                                        n.map(({ value: e }) => {
                                            const u = e.name,
                                                t = e.value,
                                                a = e.tooltipId;
                                            return {
                                                name: u,
                                                value: t,
                                                image: ft(e),
                                                valueType: ht(u),
                                                tooltipArgs: wt({ tooltipId: a }),
                                            };
                                        }),
                                    [n],
                                ),
                                p = _(R.strings.maps_training.scenarioNum(), { scenario: e }),
                                B = (0, r.useMemo)(() => ({ scenario: a }), [a]);
                            return s().createElement(
                                'div',
                                {
                                    className: Y()(Ot, o && Ut, t && Lt, E && !t && Ht, o && i && jt),
                                    onClick: F,
                                    onMouseEnter: d,
                                    onMouseLeave: A,
                                },
                                s().createElement(
                                    eu,
                                    {
                                        ignoreMouseClick: !0,
                                        ignoreShowDelay: !0,
                                        contentId: R.views.lobby.maps_training.ScenarioTooltip('resId'),
                                        args: B,
                                    },
                                    s().createElement(
                                        'div',
                                        { className: It, lang: R.strings.settings.LANGUAGE_CODE() },
                                        t &&
                                            s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement('div', { className: Wt }),
                                                s().createElement('div', { className: zt }),
                                            ),
                                        s().createElement('div', { className: $t }),
                                        s().createElement('div', { className: Y()($t, Gt) }),
                                        s().createElement('div', { className: Vt }, p),
                                        s().createElement(
                                            'div',
                                            { className: Vt },
                                            R.strings.maps_training.vehicleType.$dyn(u),
                                        ),
                                        o &&
                                            s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement(
                                                    'div',
                                                    { className: qt },
                                                    R.strings.maps_training.mapSelection.options.scenarioCompleted(),
                                                ),
                                                s().createElement('div', { className: Xt }),
                                            ),
                                    ),
                                ),
                                (!o || i) &&
                                    s().createElement(
                                        'div',
                                        { className: Yt },
                                        s().createElement(Nt, { data: D, size: Et.Small }),
                                    ),
                            );
                        },
                    ),
                    Zt = { base: 'Scenarios_base_76' };
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                const Jt = s().memo(() => {
                        const e = x('model.selectedMapModel', y.Shallow),
                            u = e.scenarios,
                            t = e.selectedScenario,
                            a = e.isShowCompleteAnimation,
                            n = j(['base'], Zt);
                        return s().createElement(
                            'div',
                            { className: n.base },
                            u.map(({ value: e }, u) =>
                                s().createElement(
                                    Kt,
                                    Qt(
                                        {
                                            key: `scenario_${e.team}_${e.vehicleType}`,
                                            isSelected: u === t,
                                            index: u,
                                            isShowCompleteAnimation: a && u === t,
                                        },
                                        e,
                                    ),
                                ),
                            ),
                        );
                    }),
                    ea = 'FormatText_base_d0',
                    ua = ({ binding: e, text: u = '', classMix: t, alignment: a = c.left, formatWithBrackets: n }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const o = n && e ? _(u, e) : u;
                        return s().createElement(
                            r.Fragment,
                            null,
                            o.split('\n').map((u, n) =>
                                s().createElement(
                                    'div',
                                    { className: Y()(ea, t), key: `${u}-${n}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : p(e, u))))(
                                        u,
                                        a,
                                        e,
                                    ).map((e, u) => s().createElement(r.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    ta = {
                        base: 'TextKey_base_ea',
                        content: 'TextKey_content_6a',
                        base__highlight: 'TextKey_base__highlight_9f',
                        bullet: 'TextKey_bullet_0f',
                        base__small: 'TextKey_base__small_f5',
                        base__extraSmall: 'TextKey_base__extraSmall_dd',
                    },
                    aa = (0, r.memo)(
                        ({
                            textKey: e,
                            pointId: u,
                            isHighlighted: t,
                            onMouseEnter: a,
                            onMouseLeve: n,
                            value: o,
                            punctuation: i = null,
                        }) => {
                            const l = (0, r.useCallback)(() => a(e, u), [a, u, e]),
                                c = (0, r.useCallback)(() => n(e, u), [n, u, e]),
                                _ = j(['base'], ta),
                                E = Y()(_.base, t && ta.base__highlight);
                            return s().createElement(
                                'div',
                                { className: E },
                                s().createElement(
                                    'div',
                                    { className: ta.content, onMouseEnter: l, onMouseLeave: c },
                                    s().createElement('div', { className: ta.bullet }),
                                    o,
                                ),
                                i,
                            );
                        },
                    ),
                    na = 'Info_base_6b',
                    ra = 'Info_icon_b6',
                    sa = 'Info_text_85',
                    oa = (0, r.memo)(({ id: e, header: u }) =>
                        s().createElement(
                            nu,
                            {
                                header: u,
                                body: R.strings.arenas.$dyn(`c_${e}`).description(),
                                onMouseEnter: Q.playHighlight,
                            },
                            s().createElement(
                                'div',
                                { className: na },
                                s().createElement('div', { className: ra }),
                                s().createElement('div', { className: sa }, R.strings.maps_training.descriptionInfo()),
                            ),
                        ),
                    ),
                    ia = {
                        base: 'ScenarioInfo_base_ab',
                        shadow: 'ScenarioInfo_shadow_e9',
                        baseTitle: 'ScenarioInfo_baseTitle_fc',
                        title: 'ScenarioInfo_title_13',
                        base__small: 'ScenarioInfo_base__small_ef',
                        base__extraSmall: 'ScenarioInfo_base__extraSmall_84',
                        tacticTitle: 'ScenarioInfo_tacticTitle_93',
                        tacticDescr: 'ScenarioInfo_tacticDescr_a7',
                        paragraph: 'ScenarioInfo_paragraph_b5',
                    },
                    la = /<([A-Za-z][A-Za-z0-9_]*)>.*?<\/\1>/g,
                    ca = /(?<=<).*?(?=>)/,
                    _a = /(?<=>).*(?=<)/,
                    Ea = /%\([A-Za-z0-9_]*\)s[.,?!;:] ?/g,
                    ma = /%\([A-Za-z0-9_]*\)(?![sd])/g,
                    da = /[.,?!;:] ?/g,
                    Aa = (0, r.memo)(({ highlightedPoint: e, onKeywordEvent: u }) => {
                        const t = (0, r.useState)(''),
                            a = t[0],
                            n = t[1],
                            o = x('model.selectedMapModel', y.Shallow),
                            i = o.id,
                            l = o.selectedScenario,
                            c = o.points,
                            m = o.scenarios[l].value,
                            d = R.strings.maps_training.$dyn(`c_${i}`),
                            A = d.$dyn(`team${m.team}`),
                            F = A && A.$dyn(m.vehicleType),
                            D = R.strings.arenas.$dyn(`c_${i}`).name(),
                            p = d.upperName(),
                            B = (0, r.useMemo)(() => {
                                const e = m.team,
                                    u = m.scenarioNum,
                                    t = m.vehicleType,
                                    a = _(R.strings.maps_training.baseNum(), { base: e }),
                                    n = _(R.strings.maps_training.scenarioNum(), { scenario: u });
                                return _(R.strings.maps_training.scenario.baseTitle(), {
                                    scenario: n,
                                    vehicle: R.strings.maps_training.vehicleType.$dyn(t),
                                    team: E(a),
                                });
                            }, [m]),
                            C = (0, r.useCallback)(
                                (e, t) => {
                                    Q.playHighlight(), n(e), u(t, !0);
                                },
                                [u],
                            ),
                            g = (0, r.useCallback)(
                                (e, t) => {
                                    n(''), u(t, !1);
                                },
                                [u],
                            ),
                            h = (0, r.useMemo)(() => {
                                let e = (F && F.descr()) || '';
                                e = e.replace(ma, '$&s');
                                const u = {},
                                    t = e.match(la);
                                t &&
                                    t.forEach((t, a) => {
                                        const n = (t.match(ca) || [''])[0],
                                            r = (t.match(_a) || [''])[0],
                                            s = `matched${a}`;
                                        (u[s] = [n, r]), (e = e.replace(t, `%(${s})s`));
                                    });
                                const a = {},
                                    n = e.match(Ea);
                                return (
                                    n &&
                                        n.forEach((u) => {
                                            const t = (u.match(da) || [''])[0],
                                                n = u.slice(2, u.length - 2 - t.length);
                                            (a[n] = t), (e = e.replace(u, u.slice(0, u.length - t.length)));
                                        }),
                                    [e, u, a]
                                );
                            }, [F]),
                            v = h[0],
                            b = h[1],
                            f = h[2],
                            w = (0, r.useMemo)(() => {
                                const u = { p: s().createElement('div', { className: ia.paragraph }) };
                                return (
                                    c.forEach((t) => {
                                        const n = t.value.id;
                                        t.value.textKeys.forEach(({ value: t }) => {
                                            u[t] = s().createElement(aa, {
                                                key: `${l}_${t}`,
                                                value: d && String(d.$dyn(t)),
                                                pointId: n,
                                                textKey: t,
                                                punctuation: f[t],
                                                isHighlighted: a === t || e === n,
                                                onMouseEnter: C,
                                                onMouseLeve: g,
                                            });
                                        });
                                    }),
                                    Object.entries(b).forEach(([t, [n, r]]) => {
                                        u[t] = s().createElement(aa, {
                                            key: `${l}_${t}`,
                                            value: r,
                                            pointId: n,
                                            textKey: t,
                                            punctuation: f[t],
                                            isHighlighted: a === t || e === n,
                                            onMouseEnter: C,
                                            onMouseLeve: g,
                                        });
                                    }),
                                    u
                                );
                            }, [c, b, f, l, a, e, C, g, d]),
                            S = j(['base'], ia);
                        return s().createElement(
                            'div',
                            { className: S.base },
                            s().createElement('div', { className: ia.shadow }),
                            s().createElement('div', { className: ia.baseTitle }, B),
                            s().createElement('div', { className: ia.title }, p),
                            s().createElement('div', { className: ia.tacticTitle }, F && F.title()),
                            s().createElement(
                                'div',
                                { className: ia.tacticDescr },
                                F && s().createElement(ua, { text: v, binding: w }),
                            ),
                            s().createElement(oa, { id: i, header: D }),
                        );
                    }),
                    Fa = {
                        base: 'ScenarioRewards_base_d9',
                        rewards: 'ScenarioRewards_rewards_14',
                        base__small: 'ScenarioRewards_base__small_a7',
                        base__extraSmall: 'ScenarioRewards_base__extraSmall_8e',
                        title: 'ScenarioRewards_title_cf',
                        shine: 'ScenarioRewards_shine_c1',
                        rewardClassMix: 'ScenarioRewards_rewardClassMix_c7',
                    },
                    Da = s().memo(() => {
                        const e = x('model.selectedMapModel.rewards', y.Shallow),
                            u = (0, r.useContext)($),
                            t = u.small || u.extraSmall ? Et.Small : Et.Big,
                            a = (0, r.useMemo)(
                                () =>
                                    e.map(({ value: e }) => {
                                        const u = e.name,
                                            a = e.value,
                                            n = e.tooltipId;
                                        return {
                                            name: u,
                                            image: ft(e, t),
                                            value: a,
                                            valueType: ht(u),
                                            tooltipArgs: wt({ tooltipId: n }),
                                        };
                                    }),
                                [t, e],
                            ),
                            n = j(['base'], Fa);
                        return s().createElement(
                            'div',
                            { className: n.base },
                            e.length > 0 &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Fa.arrow }),
                                    s().createElement(
                                        'div',
                                        { className: Fa.rewards },
                                        s().createElement('div', { className: Fa.shine }),
                                        s().createElement(
                                            'div',
                                            { className: Fa.title },
                                            R.strings.maps_training.mapSelection.options.rewardsTitle(),
                                        ),
                                        s().createElement(Nt, {
                                            data: a,
                                            size: t,
                                            rewardItemClassMix: Fa.rewardClassMix,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    pa = {
                        base: 'VehicleMarker_base_a8',
                        fadeIn: 'VehicleMarker_fadeIn_ab',
                        vehicle: 'VehicleMarker_vehicle_75',
                        vehicle__mediumTank: 'VehicleMarker_vehicle__mediumTank_8c',
                        vehicle__heavyTank: 'VehicleMarker_vehicle__heavyTank_a7',
                        title: 'VehicleMarker_title_fd',
                        base__small: 'VehicleMarker_base__small_7a',
                        base__extraSmall: 'VehicleMarker_base__extraSmall_1a',
                        descr: 'VehicleMarker_descr_43',
                        info: 'VehicleMarker_info_c8',
                    },
                    Ba = s().memo(() => {
                        const e = x('model.vehicleMarker', y.Shallow).top,
                            u = x('model.selectedMapModel'),
                            t = u.vehicleName,
                            a = u.selectedScenario,
                            n = u.scenarios,
                            o = (0, r.useContext)($),
                            i = o.small || o.extraSmall ? 20 : 0,
                            l = (0, r.useMemo)(
                                () => ({ transform: `translate(-50%, ${Math.max(e - i, 0)}rem)` }),
                                [i, e],
                            ),
                            c = n[a].value.vehicleType,
                            _ = j(['base'], pa),
                            E = Y()(pa.vehicle, pa[`vehicle__${c}`]);
                        return s().createElement(
                            'div',
                            { className: _.base, style: l },
                            s().createElement('div', { className: E }),
                            s().createElement('div', { className: pa.title }, t),
                            s().createElement(
                                'div',
                                { className: pa.descr },
                                R.strings.maps_training.vehicleMarker.$dyn(c).descr(),
                                s().createElement(
                                    nu,
                                    {
                                        header: R.strings.maps_training.vehicleMarker.$dyn(c).tooltip.title(),
                                        body: R.strings.maps_training.vehicleMarker.$dyn(c).tooltip.body(),
                                        onMouseEnter: Q.playHighlight,
                                    },
                                    s().createElement('div', { className: pa.info }),
                                ),
                            ),
                        );
                    }),
                    Ca = {
                        base: 'MapOptions_base_5b',
                        back: 'MapOptions_back_6b',
                        base__small: 'MapOptions_base__small_7e',
                        base__extraSmall: 'MapOptions_base__extraSmall_9c',
                        backShadow: 'MapOptions_backShadow_35',
                        leftPanel: 'MapOptions_leftPanel_d2',
                        base__medium: 'MapOptions_base__medium_59',
                        sceneWrapper: 'MapOptions_sceneWrapper_2f',
                        marker: 'MapOptions_marker_bf',
                        rightPanel: 'MapOptions_rightPanel_89',
                        bottomPanel: 'MapOptions_bottomPanel_3f',
                        bottomPanelTitle: 'MapOptions_bottomPanelTitle_eb',
                    },
                    ga = s().memo(() => {
                        const e = x('model', y.None),
                            u = e.onBack,
                            t = e.onBlurRectUpdated,
                            a = e.onMoveSpace,
                            n = (0, r.useState)(''),
                            o = n[0],
                            i = n[1],
                            l = (0, r.useState)(''),
                            c = l[0],
                            _ = l[1],
                            E = (0, r.useCallback)(() => u(), [u]),
                            m = (0, r.useCallback)((e) => a(e), [a]);
                        K(q.n.ESCAPE, E);
                        const d = (0, r.useCallback)((e, u) => i(u ? e : ''), []),
                            A = (0, r.useCallback)((e, u) => _(u ? e : ''), []);
                        (0, r.useEffect)(() => {
                            const e = () => {
                                const e = window.innerHeight;
                                t({ left: 0, top: e - 155, right: window.innerWidth, bottom: e });
                            };
                            return (
                                window.addEventListener('resize', e), e(), () => window.removeEventListener('resize', e)
                            );
                        }, [t]);
                        const F = j(['base'], Ca);
                        return s().createElement(
                            'div',
                            { className: F.base },
                            s().createElement(
                                'div',
                                { className: Ca.back },
                                s().createElement('div', { className: Ca.backShadow }),
                                s().createElement(Ke, {
                                    caption: R.strings.menu.viewHeader.backBtn.label(),
                                    goto: R.strings.maps_training.mapSelection.options.backGoto(),
                                    side: 'left',
                                    type: 'back',
                                    onClick: E,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: Ca.sceneWrapper },
                                s().createElement(et, { onMoveSpace: m }),
                            ),
                            s().createElement('div', { className: Ca.marker }, s().createElement(Ba, null)),
                            s().createElement(
                                'div',
                                { className: Ca.leftPanel },
                                s().createElement(Aa, { highlightedPoint: o, onKeywordEvent: A }),
                            ),
                            s().createElement(
                                'div',
                                { className: Ca.bottomPanel },
                                s().createElement(
                                    'div',
                                    { className: Ca.bottomPanelTitle },
                                    R.strings.maps_training.mapSelection.options.scenariosTitle(),
                                ),
                                s().createElement(Jt, null),
                                s().createElement(Da, null),
                            ),
                            s().createElement(
                                'div',
                                { className: Ca.rightPanel },
                                s().createElement(lt, { onPointEvent: d, highlightedPoint: c }),
                            ),
                        );
                    }),
                    ha = 'MapsTrainingPageApp_base_0d',
                    va = () => {
                        const e = x('model', y.Shallow).isMapSelected;
                        return s().createElement(
                            z,
                            null,
                            s().createElement(
                                'div',
                                { className: ha },
                                e ? s().createElement(ga, null) : s().createElement(Ku, null),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    i().render(s().createElement(va, null), document.getElementById('root'));
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
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, a] = deferred[i], r = !0, s = 0; s < u.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, a];
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
        (__webpack_require__.j = 817),
        (() => {
            var e = { 817: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, s, o] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        (n = r[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [453], () => __webpack_require__(766));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
