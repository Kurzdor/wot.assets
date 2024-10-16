(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, u, t) => {
                t.r(u),
                    t.d(u, { mouse: () => _, off: () => o, on: () => s, onResize: () => i, onScaleUpdated: () => r });
                var a = t(472),
                    n = t(176);
                const i = (0, a.E)('clientResized'),
                    r = (0, a.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, n.R)(!0);
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
                            : (0, n.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${u}`,
                                        r = l[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        a(),
                                        () => {
                                            n &&
                                                (r(),
                                                window.removeEventListener(i, s),
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
            959: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var a = t(527),
                    n = t(993);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, u, t) => {
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            993: (e, u, t) => {
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function n(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => n, G: () => a });
            },
            472: (e, u, t) => {
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
            138: (e, u, t) => {
                t.d(u, { O: () => i });
                var a = t(959),
                    n = t(514);
                const i = { view: t(641), client: a, sound: n.ZP };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => r });
                var a = t(959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, a.playSound)(n[u])), e), {}),
                    r = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            722: (e, u, t) => {
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            112: (e, u, t) => {
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, u, t) => {
                t.d(u, { U: () => n });
                var a = t(472);
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
            641: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => f,
                        events: () => i.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => _,
                        getDisplayStatus: () => v,
                        getScale: () => D,
                        getSize: () => E,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => b,
                        isFocused: () => p,
                        pxToRem: () => B,
                        remToPx: () => g,
                        resize: () => A,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => T,
                    });
                var a = t(722),
                    n = t(112),
                    i = t(538),
                    r = t(566);
                const s = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function _(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    R = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, u, t) => {
                t.d(u, { qP: () => l });
                const a = ['args'];
                const n = 2,
                    i = 16,
                    r = 32,
                    s = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const i = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? n : r);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            521: (e, u, t) => {
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
            358: (e, u, t) => {
                t.d(u, { Z: () => i });
                var a = t(138);
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
                        const i = a.O.view.addModelObserver(e, t, n);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                const i = n;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
                t.d(u, { Sw: () => i.Z, B3: () => o, Z5: () => r.Z5, B0: () => s, ry: () => D });
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
                var i = t(358);
                var r = t(613);
                let s;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(521),
                    E = t(138);
                const A = ['args'];
                function m(e, u, t, a, n, i, r) {
                    try {
                        var s = e[i](r),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(a, n);
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
                                        var i = e.apply(u, t);
                                        function r(e) {
                                            m(i, a, n, r, s, 'next', e);
                                        }
                                        function s(e) {
                                            m(i, a, n, r, s, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, A);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    g = () => B(s.CLOSE),
                    C = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var p = t(572);
                const h = n.instance,
                    b = {
                        DataTracker: i.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: _,
                        DateFormatType: c,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => B(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => B(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), i) => {
                            const r = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                _ = o.y,
                                c = o.width,
                                d = o.height,
                                A = {
                                    x: E.O.view.pxToRem(l) + r.x,
                                    y: E.O.view.pxToRem(_) + r.y,
                                    width: E.O.view.pxToRem(c),
                                    height: E.O.view.pxToRem(d),
                                };
                            B(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(A),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, g);
                        },
                        handleViewEvent: B,
                        onBindingsReady: D,
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
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = b;
            },
            613: (e, u, t) => {
                t.d(u, { Ew: () => i, Z5: () => a, cy: () => n });
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
                    i = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            744: (e, u, t) => {
                var a = t(179),
                    n = t.n(a);
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
                var r = t(138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function l(e, u, t) {
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
                        i = Math.min(a, n);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
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
                })(o || (o = {}));
                const _ = r.O.client.getSize('rem'),
                    c = _.width,
                    d = _.height,
                    E = Object.assign({ width: c, height: d }, l(c, d, s)),
                    A = (0, a.createContext)(E),
                    m = ['children'];
                const F = (e) => {
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
                        })(e, m);
                    const n = (0, a.useContext)(A),
                        r = n.extraLarge,
                        s = n.large,
                        o = n.medium,
                        l = n.small,
                        _ = n.extraSmall,
                        c = n.extraLargeWidth,
                        d = n.largeWidth,
                        E = n.mediumWidth,
                        F = n.smallWidth,
                        D = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        g = n.largeHeight,
                        C = n.mediumHeight,
                        p = n.smallHeight,
                        h = n.extraSmallHeight,
                        b = { extraLarge: B, large: g, medium: C, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && _) return u;
                    } else {
                        if (t.extraLargeWidth && c) return i(u, t, b);
                        if (t.largeWidth && d) return i(u, t, b);
                        if (t.mediumWidth && E) return i(u, t, b);
                        if (t.smallWidth && F) return i(u, t, b);
                        if (t.extraSmallWidth && D) return i(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                };
                F.defaultProps = {
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
                (0, a.memo)(F);
                const D = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    B = ({ children: e }) => {
                        const u = (0, a.useContext)(A),
                            t = (0, a.useState)(u),
                            i = t[0],
                            o = t[1],
                            _ = (0, a.useCallback)((e, u) => {
                                const t = r.O.view.pxToRem(e),
                                    a = r.O.view.pxToRem(u);
                                o(Object.assign({ width: t, height: a }, l(t, a, s)));
                            }, []),
                            c = (0, a.useCallback)(() => {
                                const e = r.O.client.getSize('px');
                                _(e.width, e.height);
                            }, [_]);
                        D(() => {
                            r.O.client.events.on('clientResized', _), r.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    r.O.client.events.off('clientResized', _),
                                        r.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [_, c],
                            );
                        const d = (0, a.useMemo)(() => Object.assign({}, i), [i]);
                        return n().createElement(A.Provider, { value: d }, e);
                    };
                var g = t(493),
                    C = t.n(g),
                    p = t(483),
                    h = t.n(p);
                function b(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const w = {
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
                    v = [
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
                function f() {
                    return (
                        (f = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        f.apply(null, arguments)
                    );
                }
                class T extends n().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && b(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && b(this.props.soundClick);
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
                            i = e.side,
                            r = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            _ = e.onMouseDown,
                            c = e.onMouseUp,
                            d =
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
                                })(e, v)),
                            E = h()(w.base, w[`base__${r}`], w[`base__${i}`], null == s ? void 0 : s.base),
                            A = h()(w.icon, w[`icon__${r}`], w[`icon__${i}`], null == s ? void 0 : s.icon),
                            m = h()(w.glow, null == s ? void 0 : s.glow),
                            F = h()(w.caption, w[`caption__${r}`], null == s ? void 0 : s.caption),
                            D = h()(w.goto, null == s ? void 0 : s.goto);
                        return n().createElement(
                            'div',
                            f(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(_),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== r && n().createElement('div', { className: w.shine }),
                            n().createElement('div', { className: A }, n().createElement('div', { className: m })),
                            n().createElement('div', { className: F }, u),
                            a && n().createElement('div', { className: D }, a),
                        );
                    }
                }
                T.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var S = t(521),
                    P = t(916);
                const y = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function O(e = S.n.NONE, u = y, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== S.n.NONE)
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
                t(281);
                let x;
                function I(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(x || (x = {}));
                (() => {
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
                })();
                function k(e, u, t) {
                    const n = (0, a.useContext)(A);
                    let i = Object.entries(n).filter(([e, u]) => !0 === u && e in o);
                    return (
                        t && (i = i.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const a = i.map((e) =>
                                h()(
                                    u[((e, u) => e + '__' + u)(t, e[0])],
                                    u[
                                        ((e, u) => {
                                            return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                            var t;
                                        })(t, e[0])
                                    ],
                                ),
                            );
                            return (e[t] = h()(u[t], ...a)), e;
                        }, {})
                    );
                }
                const N = (e = 1) => {
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
                    M = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    L = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    U = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    H = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const a = M(`${e}.${t}`, window);
                                return L(a) ? u(e, t, a) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    G = (e) => {
                        const u = ((e) => {
                                const u = N(),
                                    t = u.caller,
                                    a = u.resId,
                                    n = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: n, modelPath: U(n, e || ''), resId: a };
                            })(),
                            t = u.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((u, a) => {
                                    const n = M(U(t, `${u}.${a}`), window);
                                    return L(n) ? (e.push(n.id), `${u}.${a}.value`) : (e.push(a), `${u}.${a}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    z = P.Sw.instance;
                let W;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(W || (W = {}));
                const $ = (e = 'model', u = W.Deep) => {
                    const t = (0, a.useState)(0),
                        n = (t[0], t[1]),
                        i = (0, a.useMemo)(() => N(), []),
                        r = i.caller,
                        s = i.resId,
                        o = (0, a.useMemo)(
                            () => (window.__feature && window.__feature !== r ? `subViews.${r}.${e}` : e),
                            [r, e],
                        ),
                        l = (0, a.useState)(() =>
                            ((e) => {
                                const u = M(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return L(u) ? u.value : u;
                            })(H(o)),
                        ),
                        _ = l[0],
                        c = l[1],
                        d = (0, a.useRef)(-1);
                    return (
                        D(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? W.Deep : W.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== W.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === W.Deep
                                            ? (e === _ && n((e) => e + 1), c(e))
                                            : c(Object.assign([], e));
                                    },
                                    a = G(e);
                                d.current = z.addCallback(a, t, s, u === W.Deep);
                            }
                        }),
                        (0, a.useEffect)(() => {
                            if (u !== W.None)
                                return () => {
                                    z.removeCallback(d.current, s);
                                };
                        }, [s, u]),
                        _
                    );
                };
                var V = t(613);
                Date.now(), V.Ew.getRegionalDateTime, V.Ew.getFormattedDateTime;
                P.Sw.instance;
                const q = {
                        base: 'Background_base_c0',
                        light: 'Background_light_b9',
                        fadeInThreeQuarters: 'Background_fadeInThreeQuarters_fb',
                        light__gold: 'Background_light__gold_e3',
                        fadeInHalf: 'Background_fadeInHalf_81',
                        rays: 'Background_rays_a7',
                        raysAppearance: 'Background_raysAppearance_a7',
                        rotate: 'Background_rotate_cb',
                        ribbon: 'Background_ribbon_39',
                        fadeIn: 'Background_fadeIn_c8',
                        ribbon__gold: 'Background_ribbon__gold_60',
                        base__extraSmall: 'Background_base__extraSmall_8a',
                        base__additional: 'Background_base__additional_d7',
                        fadeOut: 'Background_fadeOut_f0',
                        fadeInWithScale: 'Background_fadeInWithScale_fd',
                        slideUp: 'Background_slideUp_bb',
                        scale: 'Background_scale_85',
                    },
                    Y = () => {
                        const e = $('model'),
                            u = e.isRibbonGold,
                            t = e.isLightVisible,
                            a = e.mainItemsCount,
                            i = k(['base'], q),
                            r = h()(i.base, a && q.base__additional),
                            s = h()(q.light, u && q.light__gold),
                            o = h()(q.ribbon, u && q.ribbon__gold);
                        return n().createElement(
                            'div',
                            { className: r },
                            t &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: s }),
                                    n().createElement('div', { className: q.rays }),
                                ),
                            n().createElement('div', { className: o }),
                        );
                    },
                    j = {
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
                let X, Q;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(X || (X = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Q || (Q = {}));
                const K = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: i,
                    disabled: r,
                    mixClass: s,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: _,
                    onMouseMove: c,
                    onMouseDown: d,
                    onMouseUp: E,
                    onMouseLeave: A,
                    onClick: m,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        B = D[0],
                        g = D[1],
                        C = (0, a.useState)(!1),
                        p = C[0],
                        w = C[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                B && null !== F.current && !F.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, a.useEffect)(() => {
                            g(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: F,
                                className: h()(
                                    j.base,
                                    j[`base__${i}`],
                                    r && j.base__disabled,
                                    u && j[`base__${u}`],
                                    B && j.base__focus,
                                    p && j.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== o && b(o), _ && _(e));
                                },
                                onMouseMove: function (e) {
                                    c && c(e);
                                },
                                onMouseUp: function (e) {
                                    r || (E && E(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== l && b(l),
                                        d && d(e),
                                        t && (r || (F.current && (F.current.focus(), g(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (A && A(e), w(!1));
                                },
                                onClick: function (e) {
                                    r || (m && m(e));
                                },
                            },
                            i !== X.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: j.back }),
                                    n().createElement('span', { className: j.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: h()(j.state, j.state__default) },
                                n().createElement('span', { className: j.stateDisabled }),
                                n().createElement('span', { className: j.stateHighlightHover }),
                                n().createElement('span', { className: j.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: j.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                K.defaultProps = { type: X.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Z = K,
                    J = 'Footer_base_d7',
                    ee = 'Footer_buttonContainer_dd',
                    ue = 'Footer_button_c6',
                    te = R.strings.awards.multipleAwards.button,
                    ae = () => {
                        const e = $('model'),
                            u = e.hasRewardsOnChoice,
                            t = e.hasVehicleToView,
                            i = $('model', !1),
                            r = i.showHangar,
                            s = i.makeChoice,
                            o = i.onClose,
                            l = (0, a.useCallback)(() => o(), [o]),
                            _ = (0, a.useCallback)(() => s(), [s]),
                            c = (0, a.useCallback)(() => r(), [r]),
                            d = (0, a.useMemo)(() => {
                                const e = [];
                                return (
                                    u && e.push([te.makeChoice(), _]),
                                    t && e.push([te.showHangar(), c]),
                                    u || e.push([te.confirm(), l]),
                                    e
                                );
                            }, [l, _, c, t, u]);
                        return n().createElement(
                            'div',
                            { className: J },
                            d.map(([e, u], t) =>
                                n().createElement(
                                    'div',
                                    { key: t, className: ee },
                                    n().createElement(
                                        Z,
                                        {
                                            type: 0 === t ? X.primary : X.secondary,
                                            size: 'medium',
                                            mixClass: ue,
                                            onClick: u,
                                        },
                                        e,
                                    ),
                                ),
                            ),
                        );
                    },
                    ne = {
                        base: 'Header_base_3d',
                        title: 'Header_title_93',
                        slideUp: 'Header_slideUp_11',
                        title__withIcon: 'Header_title__withIcon_04',
                        base__extraSmall: 'Header_base__extraSmall_b4',
                        base__large: 'Header_base__large_6c',
                        base__small: 'Header_base__small_12',
                        titleIcon: 'Header_titleIcon_da',
                        subTitle: 'Header_subTitle_37',
                        fadeIn: 'Header_fadeIn_e3',
                        fadeInThreeQuarters: 'Header_fadeInThreeQuarters_87',
                        fadeInHalf: 'Header_fadeInHalf_0e',
                        fadeOut: 'Header_fadeOut_ea',
                        fadeInWithScale: 'Header_fadeInWithScale_f2',
                        scale: 'Header_scale_c0',
                        raysAppearance: 'Header_raysAppearance_85',
                        rotate: 'Header_rotate_49',
                    },
                    ie = () => {
                        const e = $('model'),
                            u = e.title,
                            t = e.titleIcon,
                            i = e.subTitle,
                            r = u && systemLocale.toUpperCase(u),
                            s = i && systemLocale.toUpperCase(i),
                            o = k(['base'], ne),
                            l = h()(ne.title, t && ne.title__withIcon),
                            _ = (0, a.useMemo)(() => ({ backgroundImage: t ? `url(${t})` : void 0 }), [t]);
                        return n().createElement(
                            'div',
                            { className: o.base },
                            Boolean(u) &&
                                n().createElement(
                                    'div',
                                    { className: l },
                                    Boolean(t) && n().createElement('div', { className: ne.titleIcon, style: _ }),
                                    r,
                                ),
                            n().createElement('div', { className: ne.subTitle }, s),
                        );
                    };
                let re, se, oe;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'),
                        (e[(e.Days = 1)] = 'Days'),
                        (e[(e.Battles = 2)] = 'Battles'),
                        (e[(e.Wins = 3)] = 'Wins');
                })(re || (re = {})),
                    (function (e) {
                        (e.Min = 'Min'), (e.Middle = 'Middle'), (e.Max = 'Max');
                    })(se || (se = {})),
                    (function (e) {
                        (e.Rent = 'rent'), (e.FromStorage = 'fromStorage');
                    })(oe || (oe = {}));
                const le = (e) => ({ appear: 400 + 150 * e, enter: 600 });
                var _e = t(272);
                let ce, de, Ee, Ae, me, Fe, De, Be;
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
                        (e.EquipCoin = 'equipCoin'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin');
                })(ce || (ce = {})),
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
                    })(de || (de = {})),
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
                    })(Ee || (Ee = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Ae || (Ae = {})),
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
                    })(me || (me = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Fe || (Fe = {})),
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
                    })(De || (De = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(Be || (Be = {}));
                class ge extends n().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = P.B3.GOLD;
                        else e = P.B3.INTEGRAL;
                        const u = P.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                ge.defaultProps = { format: 'integral' };
                const Ce = [
                        ce.Items,
                        ce.Equipment,
                        ce.Xp,
                        ce.XpFactor,
                        ce.Blueprints,
                        ce.BlueprintsAny,
                        ce.Goodies,
                        ce.Berths,
                        ce.Slots,
                        ce.Tokens,
                        ce.CrewSkins,
                        ce.CrewBooks,
                        ce.Customizations,
                        ce.CreditsFactor,
                        ce.TankmenXp,
                        ce.TankmenXpFactor,
                        ce.FreeXpFactor,
                        ce.BattleToken,
                        ce.PremiumUniversal,
                        ce.NaturalCover,
                        ce.BpCoin,
                        ce.BattlePassSelectToken,
                        ce.BattlaPassFinalAchievement,
                        ce.BattleBadge,
                        ce.BonusX5,
                        ce.CrewBonusX3,
                        ce.NewYearInvoice,
                        ce.EpicSelectToken,
                        ce.Comp7TokenWeeklyReward,
                        ce.DeluxeGift,
                        ce.BattleBoosterGift,
                        ce.OptionalDevice,
                    ],
                    pe = [ce.Gold, ce.Credits, ce.Crystal, ce.FreeXp],
                    he = [ce.BattlePassPoints, ce.EquipCoin],
                    be = [ce.PremiumPlus, ce.Premium],
                    we = ['engravings', 'backgrounds'],
                    ve = ['engraving', 'background'],
                    fe = (e, u = Ee.Small) => {
                        const t = e.name,
                            a = e.type,
                            n = e.value,
                            i = e.icon,
                            r = e.item,
                            s = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case Ee.S600x450:
                                        return 'c_600x450';
                                    case Ee.S400x300:
                                        return 'c_400x300';
                                    case Ee.S296x222:
                                        return 'c_296x222';
                                    case Ee.S232x174:
                                        return 'c_232x174';
                                    case Ee.Big:
                                        return 'c_80x80';
                                    case Ee.Small:
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${i}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${i}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = we[e];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            i = n.$dyn(t);
                                        return i ? `${i}` : `${n.$dyn(ve[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, u, i);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${i}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${i}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${o}.${i}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Re = [Ee.Small, Ee.Big],
                    Te = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case Ae.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case Ae.CURRENCY:
                            case Ae.NUMBER:
                                return n().createElement(ge, { format: 'integral', value: Number(e) });
                            case Ae.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    },
                    Se = [
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
                function Pe(e) {
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
                const ye = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: P.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Oe = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            i = e.onMouseEnter,
                            r = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            _ = void 0 !== l && l,
                            c = e.ignoreMouseClick,
                            d = void 0 !== c && c,
                            E = e.decoratorId,
                            A = void 0 === E ? 0 : E,
                            m = e.isEnabled,
                            F = void 0 === m || m,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            g = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Se);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(() => B || N().resId, [B]),
                            w = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (ye(t, A, { isMouseEvent: !0, on: !0, arguments: Pe(n) }, b),
                                    g && g(),
                                    (h.current.isVisible = !0));
                            }, [t, A, n, b, g]),
                            v = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        ye(t, A, { on: !1 }, b),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, A, b, C]),
                            f = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', f, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return F
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((R = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(w, _ ? 100 : 400)),
                                                      i && i(e),
                                                      R && R(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              v(), null == r || r(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && v(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && v(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var R;
                    },
                    xe = ['children'];
                function Ie() {
                    return (
                        (Ie = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Ie.apply(null, arguments)
                    );
                }
                const ke = (e) => {
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
                            })(e, xe);
                        return n().createElement(
                            Oe,
                            Ie(
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
                    Ne = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Me() {
                    return (
                        (Me = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Me.apply(null, arguments)
                    );
                }
                const Le = R.views.common.tooltip_window.simple_tooltip_content,
                    Ue = (e) => {
                        let u = e.children,
                            t = e.body,
                            i = e.header,
                            r = e.note,
                            s = e.alert,
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
                            })(e, Ne);
                        const _ = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: i, note: r, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, i, r, o]);
                        return n().createElement(
                            Oe,
                            Me(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? Le.SimpleTooltipHtmlContent('resId') : Le.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                l,
                            ),
                            u,
                        );
                        var c;
                    };
                function He() {
                    return (
                        (He = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        He.apply(null, arguments)
                    );
                }
                const Ge = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = n().createElement('div', { className: t }, e);
                        if (u.header || u.body) return n().createElement(Ue, u, a);
                        const i = u.contentId;
                        return i ? n().createElement(Oe, He({}, u, { contentId: i }), a) : n().createElement(ke, u, a);
                    },
                    ze = {
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
                    We = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = Ee.Big,
                        special: i,
                        value: r,
                        valueType: s,
                        title: o,
                        style: l,
                        className: _,
                        classNames: c,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const A = ((e, u) => {
                                if (void 0 === u || !Re.includes(e)) return null;
                                switch (u) {
                                    case me.BATTLE_BOOSTER:
                                    case me.BATTLE_BOOSTER_REPLACE:
                                        return Fe.BATTLE_BOOSTER;
                                }
                            })(a, i),
                            m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case me.BATTLE_BOOSTER:
                                        return De.BATTLE_BOOSTER;
                                    case me.BATTLE_BOOSTER_REPLACE:
                                        return De.BATTLE_BOOSTER_REPLACE;
                                    case me.BUILT_IN_EQUIPMENT:
                                        return De.BUILT_IN_EQUIPMENT;
                                    case me.EQUIPMENT_PLUS:
                                        return De.EQUIPMENT_PLUS;
                                    case me.EQUIPMENT_TROPHY_BASIC:
                                        return De.EQUIPMENT_TROPHY_BASIC;
                                    case me.EQUIPMENT_TROPHY_UPGRADED:
                                        return De.EQUIPMENT_TROPHY_UPGRADED;
                                    case me.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return De.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case me.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return De.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case me.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return De.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case me.PROGRESSION_STYLE_UPGRADED_1:
                                        return De.PROGRESSION_STYLE_UPGRADED_1;
                                    case me.PROGRESSION_STYLE_UPGRADED_2:
                                        return De.PROGRESSION_STYLE_UPGRADED_2;
                                    case me.PROGRESSION_STYLE_UPGRADED_3:
                                        return De.PROGRESSION_STYLE_UPGRADED_3;
                                    case me.PROGRESSION_STYLE_UPGRADED_4:
                                        return De.PROGRESSION_STYLE_UPGRADED_4;
                                    case me.PROGRESSION_STYLE_UPGRADED_5:
                                        return De.PROGRESSION_STYLE_UPGRADED_5;
                                    case me.PROGRESSION_STYLE_UPGRADED_6:
                                        return De.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(i),
                            F = Te(r, s);
                        return n().createElement(
                            'div',
                            { className: h()(ze.base, ze[`base__${a}`], _), style: l },
                            n().createElement(
                                Ge,
                                { tooltipArgs: d, className: ze.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: h()(ze.image, null == c ? void 0 : c.image) },
                                        A &&
                                            n().createElement('div', {
                                                className: h()(ze.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${A}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            n().createElement('div', {
                                                className: h()(ze.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        m &&
                                            n().createElement('div', {
                                                className: h()(ze.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${m}_overlay)`,
                                                },
                                            }),
                                    ),
                                    F &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    ze.info,
                                                    ze[`info__${e}`],
                                                    s === Ae.MULTI && ze.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            F,
                                        ),
                                    o && n().createElement('div', { className: ze.title }, o),
                                ),
                            ),
                            t &&
                                n().createElement(
                                    Ge,
                                    { tooltipArgs: E },
                                    n().createElement('div', {
                                        className: h()(ze.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    $e = {
                        base: 'Value_base_de',
                        base__multi: 'Value_base__multi_5c',
                        base__credits: 'Value_base__credits_ce',
                        base__gold: 'Value_base__gold_10',
                        base__crystal: 'Value_base__crystal_4a',
                        base__premiumTank: 'Value_base__premiumTank_a9',
                        base__sizeMin: 'Value_base__sizeMin_ee',
                    },
                    Ve = ({ value: e, name: u, size: t }) => {
                        const a =
                            ((i = u),
                            Ce.includes(i)
                                ? Ae.MULTI
                                : pe.includes(i)
                                  ? Ae.CURRENCY
                                  : he.includes(i)
                                    ? Ae.NUMBER
                                    : be.includes(i)
                                      ? Ae.PREMIUM_PLUS
                                      : Ae.STRING);
                        var i;
                        const r = Te(e, a),
                            s = k(['base'], $e),
                            o = h()(s.base, $e[`base__size${t}`], $e[`base__${u}`], $e[`base__${a}`]);
                        return n().createElement('div', { className: o }, r);
                    },
                    qe = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ye = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const je = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Xe = (e) =>
                        je
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = Ye.length - 1; t >= 0; t--)
                                      for (; e >= Ye[t]; ) (u += qe[t]), (e -= Ye[t]);
                                  return u;
                              })(e),
                    Qe = {
                        base: 'TankName_base_22',
                        typeContainer: 'TankName_typeContainer_a2',
                        base__small: 'TankName_base__small_3e',
                        base__sizeMiddle: 'TankName_base__sizeMiddle_05',
                        base__extraSmall: 'TankName_base__extraSmall_ac',
                        base__smallIcon: 'TankName_base__smallIcon_35',
                        type: 'TankName_type_ce',
                    },
                    Ke = ({ vehicleLevel: e, vehicleType: u, vehicleName: t, size: i, smallIcon: r }) => {
                        const s = Xe(e),
                            o = k(['base'], Qe),
                            l = h()(o.base, Qe[`base__size${i}`], r && Qe.base__smallIcon),
                            _ = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url('${'R.images.gui.maps.icons.vehicleTypes.' + (r ? 'elite' : 'big')}.${`${u.replace('-', '_')}${r ? '' : '_elite'}`}')`,
                                }),
                                [u, r],
                            );
                        return n().createElement(
                            'div',
                            { className: l },
                            s,
                            n().createElement(
                                'div',
                                { className: Qe.typeContainer },
                                n().createElement('div', { className: Qe.type, style: _ }),
                            ),
                            t,
                        );
                    },
                    Ze = {
                        base: 'VehicleName_base_8b',
                        title: 'VehicleName_title_09',
                        typeContainer: 'VehicleName_typeContainer_29',
                        base__small: 'VehicleName_base__small_47',
                        base__sizeMiddle: 'VehicleName_base__sizeMiddle_d5',
                        base__extraSmall: 'VehicleName_base__extraSmall_ae',
                        type: 'VehicleName_type_66',
                        meta: 'VehicleName_meta_27',
                        meta__rent: 'VehicleName_meta__rent_51',
                        meta__fromStorage: 'VehicleName_meta__fromStorage_28',
                        icon: 'VehicleName_icon_ac',
                    },
                    Je = R.strings.awards.multipleAwards,
                    eu = ({
                        vehicleLevel: e,
                        vehicleType: u,
                        userName: t,
                        vehicleRentType: a,
                        vehicleRentValue: i,
                        isFromStorage: r,
                        isVehicleOnChoice: s,
                        size: o,
                    }) => {
                        const l = a !== re.None,
                            _ = r || l,
                            c = r ? oe.FromStorage : oe.Rent,
                            d = ((e, u, t) => {
                                const a = R.strings.awards.multipleAwards;
                                if (e === oe.FromStorage) return a.fromStorage();
                                switch (u) {
                                    case re.Battles:
                                        return I(a.rent.battles(), { value: t });
                                    case re.Days:
                                        return I(a.rent.days(), { value: t });
                                    case re.Wins:
                                        return I(a.rent.wins(), { value: t });
                                }
                            })(c, a, i),
                            E = k(['base'], Ze),
                            A = h()(E.base, Ze[`base__size${o}`]),
                            m = h()(Ze.meta, Ze[`meta__${c}`]);
                        return n().createElement(
                            'div',
                            { className: A },
                            n().createElement(
                                'div',
                                { className: Ze.title },
                                s
                                    ? Je.vehicleOnChoice()
                                    : n().createElement(Ke, {
                                          vehicleLevel: e,
                                          vehicleType: u,
                                          vehicleName: t,
                                          size: o,
                                      }),
                            ),
                            _ &&
                                n().createElement(
                                    'div',
                                    { className: m },
                                    n().createElement('div', { className: Ze.icon }),
                                    d,
                                ),
                        );
                    },
                    uu = {
                        compensationIcon: 'AdditionInform_compensationIcon_d8',
                        compensationIcon__sizeMiddle: 'AdditionInform_compensationIcon__sizeMiddle_2f',
                        compensationIcon__small: 'AdditionInform_compensationIcon__small_35',
                        compensationIcon__extraSmall: 'AdditionInform_compensationIcon__extraSmall_88',
                        compensationIcon__sizeMin: 'AdditionInform_compensationIcon__sizeMin_43',
                        rent: 'AdditionInform_rent_db',
                        title: 'AdditionInform_title_32',
                        title__value: 'AdditionInform_title__value_a3',
                        title__sizeMiddle: 'AdditionInform_title__sizeMiddle_b8',
                        title__small: 'AdditionInform_title__small_e6',
                        title__extraSmall: 'AdditionInform_title__extraSmall_32',
                        title__sizeMin: 'AdditionInform_title__sizeMin_81',
                    };
                function tu() {
                    return (
                        (tu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        tu.apply(null, arguments)
                    );
                }
                const au = ({ showAdditionalInfo: e, reward: u, size: t }) => {
                        const i = e.isRentVehicle,
                            r = e.isMinSize,
                            s = e.isPremiumPlus,
                            o = e.isVehicle,
                            l = u.isCompensation,
                            _ = k(['compensationIcon', 'title'], uu);
                        return n().createElement(
                            a.Fragment,
                            null,
                            l &&
                                n().createElement('div', {
                                    className: h()(_.compensationIcon, uu[`compensationIcon__size${t}`]),
                                }),
                            i && !r && n().createElement('div', { className: uu.rent }),
                            !s &&
                                n().createElement(
                                    'div',
                                    { className: h()(_.title, uu[`title__size${t}`], uu.title__value) },
                                    n().createElement(Ve, tu({}, u, { size: t })),
                                ),
                            o &&
                                !r &&
                                n().createElement(
                                    'div',
                                    { className: h()(_.title, uu[`title__size${t}`]) },
                                    n().createElement(eu, tu({}, u, { size: t })),
                                ),
                        );
                    },
                    nu = {
                        base: 'Reward_base_66',
                        base__sizeMax: 'Reward_base__sizeMax_35',
                        base__small: 'Reward_base__small_fb',
                        base__extraSmall: 'Reward_base__extraSmall_e1',
                        base__sizeMiddle: 'Reward_base__sizeMiddle_b7',
                        base__medium: 'Reward_base__medium_75',
                        base__sizeMin: 'Reward_base__sizeMin_61',
                        equipmentPlus: 'Reward_equipmentPlus_3c',
                        battleBoosterReplace: 'Reward_battleBoosterReplace_f9',
                        battleBooster: 'Reward_battleBooster_64',
                        baseReward: 'Reward_baseReward_6c',
                    },
                    iu = R.views.common.tooltip_window,
                    ru = R.images.gui.maps,
                    su = (e, u) =>
                        u === se.Max
                            ? e
                                ? Ee.S296x222
                                : Ee.S600x450
                            : u === se.Middle
                              ? e
                                  ? Ee.S180x135
                                  : Ee.S296x222
                              : Ee.Big,
                    ou = (e, u) => {
                        const t = Number(e);
                        return ((e, u, t) => {
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
                        })({ tooltipId: u }, t, {
                            decoratorId:
                                t === iu.loot_box_compensation_tooltip.LootBoxVehicleCompensationTooltipContent('resId')
                                    ? iu.tooltip_window.TooltipWindow('resId')
                                    : void 0,
                            ignoreShowDelay: !0,
                        });
                    },
                    lu = ({ reward: e, size: u, onImageError: t }) => {
                        const i = e.name,
                            r = e.isVehicleOnChoice,
                            s = e.icon,
                            o = e.tooltipId,
                            l = e.tooltipContentId,
                            _ = e.vehicleRentType,
                            c = e.overlayType,
                            d = c,
                            E = (0, a.useContext)(A),
                            m = k(['base'], nu),
                            F = u === se.Min,
                            D = E.small || E.extraSmall,
                            B = ['vehicles', 'vehicles_rent'].includes(e.name) || r,
                            g = 'premium_plus' === i,
                            C = B && _ !== re.None,
                            p = u === se.Middle && D,
                            b = (0, a.useMemo)(() => {
                                if (B && s && !F) {
                                    return (p ? ru.shop.vehicles.c_180x135 : ru.shop.vehicles.c_600x450).$dyn(s);
                                }
                                if ('battleToken' === i) {
                                    return (F ? e.iconSmall : e.iconBig).replace('..', 'img://gui');
                                }
                                return 'dossier_achievement' === i
                                    ? F
                                        ? ru.icons.achievement.$dyn(s)
                                        : ru.icons.quests.bonuses.s600x450.$dyn(s)
                                    : 'crewBooks' === i && p
                                      ? ru.icons.crewBooks.books.s360x270.$dyn(s)
                                      : fe(e, F ? Ee.Big : Ee.S600x450);
                            }, [s, F, B, i, e, p]),
                            w = (0, a.useCallback)(
                                (e) => {
                                    !e && t && t();
                                },
                                [t],
                            );
                        var v, f;
                        (v = b),
                            (f = w),
                            (0, a.useEffect)(() => {
                                const e = () => f(!0),
                                    u = () => f(!1),
                                    t = new Image();
                                return (
                                    t.addEventListener('load', e),
                                    t.addEventListener('error', u),
                                    (t.src = v),
                                    () => {
                                        t.removeEventListener('load', e), t.removeEventListener('error', u);
                                    }
                                );
                            }, [v, f]);
                        const R = { isRentVehicle: C, isMinSize: F, isPremiumPlus: g, isVehicle: B };
                        return n().createElement(
                            'div',
                            { className: h()(m.base, nu[`base__size${u}`]) },
                            n().createElement(We, {
                                name: i,
                                size: su(D, u),
                                image: b,
                                special: d,
                                classNames: { overlay: nu[`${c}`] },
                                className: nu.baseReward,
                                tooltipArgs: ou(l, o),
                            }),
                            n().createElement(au, { showAdditionalInfo: R, reward: e, size: u }),
                        );
                    },
                    _u = {
                        base: 'AnimatedReward_base_4a',
                        entering: 'AnimatedReward_entering_22',
                        entered: 'AnimatedReward_entered_44',
                        fadeIn: 'AnimatedReward_fadeIn_38',
                        fadeInThreeQuarters: 'AnimatedReward_fadeInThreeQuarters_f7',
                        fadeInHalf: 'AnimatedReward_fadeInHalf_48',
                        fadeOut: 'AnimatedReward_fadeOut_6c',
                        fadeInWithScale: 'AnimatedReward_fadeInWithScale_7b',
                        slideUp: 'AnimatedReward_slideUp_cb',
                        scale: 'AnimatedReward_scale_0a',
                        raysAppearance: 'AnimatedReward_raysAppearance_24',
                        rotate: 'AnimatedReward_rotate_00',
                    },
                    cu = ({ index: e, reward: u, size: t, onImageError: a, onEntered: i }) =>
                        n().createElement(_e.ZP, { appear: !0, in: !0, timeout: le(e), onEntered: i }, (e) =>
                            n().createElement(
                                'div',
                                { className: h()(_u.base, _u[e]) },
                                n().createElement(lu, { reward: u, size: t, onImageError: a }),
                            ),
                        ),
                    du = {
                        base: 'RewardList_base_ce',
                        mainRewards: 'RewardList_mainRewards_98',
                        additional: 'RewardList_additional_d6',
                        base__small: 'RewardList_base__small_f8',
                        base__extraSmall: 'RewardList_base__extraSmall_7c',
                        base__sizeMiddle: 'RewardList_base__sizeMiddle_cb',
                        base__additional: 'RewardList_base__additional_c0',
                        base__sizeMin: 'RewardList_base__sizeMin_99',
                        base__medium: 'RewardList_base__medium_e2',
                        additionalWrapper: 'RewardList_additionalWrapper_d8',
                        additionalTitle: 'RewardList_additionalTitle_d6',
                        slideUp: 'RewardList_slideUp_e9',
                        fadeIn: 'RewardList_fadeIn_11',
                        fadeInThreeQuarters: 'RewardList_fadeInThreeQuarters_9e',
                        fadeInHalf: 'RewardList_fadeInHalf_17',
                        fadeOut: 'RewardList_fadeOut_a1',
                        fadeInWithScale: 'RewardList_fadeInWithScale_cc',
                        scale: 'RewardList_scale_40',
                        raysAppearance: 'RewardList_raysAppearance_10',
                        rotate: 'RewardList_rotate_51',
                    },
                    Eu = () => {
                        const e = $('model'),
                            u = e.mainItemsCount,
                            t = e.rewards,
                            i = (0, a.useState)(!1),
                            r = i[0],
                            s = i[1],
                            o = u > 0,
                            l = o ? t.items.filter((e, t) => t < u) : t.items,
                            _ = o ? t.items.filter((e, t) => t >= u) : [],
                            c = r ? se.Min : (d = l.length) < 3 ? se.Max : d < 5 ? se.Middle : se.Min;
                        var d;
                        const E = (0, a.useCallback)(() => s(!0), []),
                            A = (0, a.useCallback)(() => {
                                b('gui_random_reward_appear');
                            }, []),
                            m = k(['base'], du),
                            F = h()(m.base, du[`base__size${c}`], u && du.base__additional);
                        return n().createElement(
                            'div',
                            { className: F },
                            n().createElement(
                                'div',
                                { className: du.mainRewards },
                                l.map(({ value: e }, u) =>
                                    n().createElement(cu, {
                                        key: `main${u}`,
                                        index: u,
                                        reward: e,
                                        size: c,
                                        onImageError: E,
                                        onEntered: A,
                                    }),
                                ),
                            ),
                            Boolean(_.length) &&
                                n().createElement(
                                    'div',
                                    { className: du.additional },
                                    n().createElement(
                                        'div',
                                        { className: du.additionalTitle },
                                        R.strings.awards.multipleAwards.additionalTitle(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: du.additionalWrapper },
                                        _.map(({ value: e }, u) =>
                                            n().createElement(cu, {
                                                key: `additional${u}`,
                                                index: u,
                                                reward: e,
                                                size: se.Min,
                                                onEntered: A,
                                            }),
                                        ),
                                    ),
                                ),
                        );
                    },
                    Au = {
                        base: 'App_base_ae',
                        close: 'App_close_f5',
                        base__small: 'App_base__small_a9',
                        base__extraSmall: 'App_base__extraSmall_56',
                        header: 'App_header_83',
                        base__medium: 'App_base__medium_fb',
                        footer: 'App_footer_66',
                        slideUp: 'App_slideUp_24',
                        fadeIn: 'App_fadeIn_da',
                        fadeInThreeQuarters: 'App_fadeInThreeQuarters_18',
                        fadeInHalf: 'App_fadeInHalf_83',
                        fadeOut: 'App_fadeOut_52',
                        fadeInWithScale: 'App_fadeInWithScale_44',
                        scale: 'App_scale_b6',
                        raysAppearance: 'App_raysAppearance_ab',
                        rotate: 'App_rotate_6c',
                    },
                    mu = () => {
                        const e = $('model', !1).onClose;
                        (0, a.useEffect)(() => {
                            b('gui_hangar_award_screen');
                        }, []);
                        const u = (0, a.useCallback)(() => {
                            e();
                        }, [e]);
                        var t;
                        (t = u), O(S.n.ESCAPE, t);
                        const i = k(['base'], Au);
                        return n().createElement(
                            'div',
                            { className: i.base },
                            n().createElement(Y, null),
                            n().createElement('div', { className: Au.header }, n().createElement(ie, null)),
                            n().createElement(
                                'div',
                                { className: Au.close },
                                n().createElement(T, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: u,
                                }),
                            ),
                            n().createElement(Eu, null),
                            n().createElement('div', { className: Au.footer }, n().createElement(ae, null)),
                        );
                    };
                engine.whenReady.then(() => {
                    C().render(
                        n().createElement(B, null, n().createElement(mu, null)),
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
                    for (var [u, t, a] = deferred[o], i = !0, r = 0; r < u.length; r++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[r]))
                            ? u.splice(r--, 1)
                            : ((i = !1), a < n && (n = a));
                    if (i) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
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
        (__webpack_require__.j = 144),
        (() => {
            var e = { 144: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [i, r, s] = t,
                        o = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (a in r) __webpack_require__.o(r, a) && (__webpack_require__.m[a] = r[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < i.length; o++)
                        (n = i[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [379], () => __webpack_require__(744));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
