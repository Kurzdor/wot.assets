(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, u, t) => {
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => r, onResize: () => i, onScaleUpdated: () => s });
                var n = t(2472),
                    a = t(1176);
                const i = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    r = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${u}`,
                                        s = l[u]((e) => t([e, 'outside']));
                                    function r(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, r),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(i, r),
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
                    return Object.assign({}, i, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => i,
                        graphicsQuality: () => r,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const r = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
            },
            2472: (e, u, t) => {
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
            3138: (e, u, t) => {
                t.d(u, { O: () => i });
                var n = t(5959),
                    a = t(514);
                const i = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => s });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    s = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => a });
                var n = t(2472);
                const a = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => S,
                        events: () => i.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getScale: () => b,
                        getSize: () => E,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => B,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => g,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var n = t(3722),
                    a = t(6112),
                    i = t(6538),
                    s = t(8566);
                const r = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, r);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function _(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, r);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const S = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    i = 16,
                    s = 32,
                    r = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const i = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((a = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : s);
                        },
                        minimize() {
                            o(r);
                        },
                        move(e) {
                            o(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
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
                t.d(u, { Z: () => i });
                var n = t(3138);
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
                        const i = n.O.view.addModelObserver(e, t, a);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const i = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
                t.d(u, { Sw: () => i.Z, B0: () => r, c9: () => D, ry: () => b });
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
                var i = t(1358);
                var s = t(8613);
                let r;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(r || (r = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    E = t(3138);
                const m = ['args'];
                function A(e, u, t, n, a, i, s) {
                    try {
                        var r = e[i](s),
                            o = r.value;
                    } catch (e) {
                        return void t(e);
                    }
                    r.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                        var i = e.apply(u, t);
                                        function s(e) {
                                            A(i, n, a, s, r, 'next', e);
                                        }
                                        function r(e) {
                                            A(i, n, a, s, r, 'throw', e);
                                        }
                                        s(void 0);
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
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, m);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => D(r.CLOSE),
                    p = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var C = t(7572);
                const h = a.instance,
                    B = {
                        DataTracker: i.Z,
                        ViewModel: C.Z,
                        ViewEventType: r,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(r.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => D(r.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(r.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), i) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                m = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(_),
                                    height: E.O.view.pxToRem(d),
                                };
                            D(r.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, g);
                        },
                        handleViewEvent: D,
                        onBindingsReady: b,
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
                        ClickOutsideManager: h,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = B;
            },
            8613: (e, u, t) => {
                t.d(u, { Ew: () => i, Z5: () => n, cy: () => a });
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
                    i = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            8572: (e, u, t) => {
                var n = t(6179),
                    a = t.n(n),
                    i = t(493),
                    s = t.n(i);
                function r() {
                    return !1;
                }
                console.log;
                var o = t(9174),
                    l = t(3138);
                function c(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return _(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? _(e, u)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function _(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const d = (e) => (0 === e ? window : window.subViews.get(e));
                function E(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function m(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const A = m;
                function F(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function b(e, u) {
                    return (function (e, u, t) {
                        const n = [];
                        for (let a = 0; a < e.length; a++) {
                            const i = A(e, a);
                            u(i, a, e) && n.push(t(i, a, e));
                        }
                        return n;
                    })(e, E, u);
                }
                function D(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let n = t;
                    for (let t = 0; t < e.length; t++) {
                        n = u(n, A(e, t), t, e);
                    }
                    return n;
                }
                var g = t(3946);
                let p;
                !(function (e) {
                    (e.Hangar = 'hangar'),
                        (e.Setup = 'setup'),
                        (e.Compare = 'compare'),
                        (e.Battle = 'battle'),
                        (e.Respawn = 'respawn'),
                        (e.Prebattle = 'prebattle');
                })(p || (p = {}));
                const C = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    h = (e) => e === p.Battle || e === p.Prebattle,
                    B = (e) => h(e) || e === p.Respawn;
                var f = t(6483),
                    v = t.n(f);
                function S(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const w = {
                        playHighlight() {
                            S('highlight');
                        },
                        playClick() {
                            S('play');
                        },
                        playYes() {
                            S('yes1');
                        },
                    },
                    y = {
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
                    x = [
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
                function T() {
                    return (
                        (T = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        T.apply(null, arguments)
                    );
                }
                class I extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && S(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && S(this.props.soundClick);
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
                            i = e.side,
                            s = e.type,
                            r = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            d =
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
                                })(e, x)),
                            E = v()(y.base, y[`base__${s}`], y[`base__${i}`], null == r ? void 0 : r.base),
                            m = v()(y.icon, y[`icon__${s}`], y[`icon__${i}`], null == r ? void 0 : r.icon),
                            A = v()(y.glow, null == r ? void 0 : r.glow),
                            F = v()(y.caption, y[`caption__${s}`], null == r ? void 0 : r.caption),
                            b = v()(y.goto, null == r ? void 0 : r.goto);
                        return a().createElement(
                            'div',
                            T(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== s && a().createElement('div', { className: y.shine }),
                            a().createElement('div', { className: m }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: F }, u),
                            n && a().createElement('div', { className: b }, n),
                        );
                    }
                }
                I.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const k = [];
                var O = t(5521),
                    N = t(9916);
                const L = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function M(e = O.n.NONE, u = L, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== O.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && l.O.view.isEventHandled()) return;
                                l.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, a]);
                }
                const P = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    $ = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var H;
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
                })(H || (H = {}));
                const z = l.O.client.getSize('rem'),
                    G = z.width,
                    W = z.height,
                    j = Object.assign(
                        { width: G, height: W },
                        (function (e, u, t) {
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
                                i = Math.min(n, a);
                            return {
                                extraLarge: i === t.extraLarge.weight,
                                large: i === t.large.weight,
                                medium: i === t.medium.weight,
                                small: i === t.small.weight,
                                extraSmall: i === t.extraSmall.weight,
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
                        })(G, W, $),
                    ),
                    U = (0, n.createContext)(j),
                    V = ['children'];
                const q = (e) => {
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
                        })(e, V);
                    const a = (0, n.useContext)(U),
                        i = a.extraLarge,
                        s = a.large,
                        r = a.medium,
                        o = a.small,
                        l = a.extraSmall,
                        c = a.extraLargeWidth,
                        _ = a.largeWidth,
                        d = a.mediumWidth,
                        E = a.smallWidth,
                        m = a.extraSmallWidth,
                        A = a.extraLargeHeight,
                        F = a.largeHeight,
                        b = a.mediumHeight,
                        D = a.smallHeight,
                        g = a.extraSmallHeight,
                        p = { extraLarge: A, large: F, medium: b, small: D, extraSmall: g };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && s) return u;
                        if (t.medium && r) return u;
                        if (t.small && o) return u;
                        if (t.extraSmall && l) return u;
                    } else {
                        if (t.extraLargeWidth && c) return P(u, t, p);
                        if (t.largeWidth && _) return P(u, t, p);
                        if (t.mediumWidth && d) return P(u, t, p);
                        if (t.smallWidth && E) return P(u, t, p);
                        if (t.extraSmallWidth && m) return P(u, t, p);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && A) return u;
                            if (t.largeHeight && F) return u;
                            if (t.mediumHeight && b) return u;
                            if (t.smallHeight && D) return u;
                            if (t.extraSmallHeight && g) return u;
                        }
                    }
                    return null;
                };
                q.defaultProps = {
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
                (0, n.memo)(q);
                const X = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
                let K;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(K || (K = {}));
                const Y = 'setup-content';
                function Z(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return Q(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? Q(e, u)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Q(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const J = (e, u = []) => {
                        const t = document.getElementById('root');
                        t && (t.style.cursor = e ? 'grabbing' : 'default');
                        for (var n, a = Z(u); !(n = a()).done; ) {
                            const u = n.value,
                                t = document.getElementById(u);
                            t && (t.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    ee = (e, u, t) => {
                        let n = '',
                            a = 8e3;
                        for (var i, s = Z(t); !(i = s()).done; ) {
                            const e = i.value,
                                t = Math.abs(e.centerX - u);
                            t < a && ((n = e.id), (a = t));
                        }
                        return n;
                    },
                    ue = (e, u) => {
                        const t = u.find((u) => u.id === e);
                        return t ? t.centerX : 0;
                    };
                let te, ne;
                !(function (e) {
                    (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                })(te || (te = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(ne || (ne = {}));
                const ae = (e) => `panel-${e}-section`,
                    ie = (e, u) => {
                        const t = ae(e),
                            n = u.filter((e) => e !== t);
                        return { selfId: t, blockOnGrabIds: [Y, ...n] };
                    },
                    se = ({ baseId: e, slotsLength: u, handleSwap: t, setIsExitBlocked: a, syncInitiator: i }) => {
                        const s = ((e, u, t) => {
                                const a = (0, n.useRef)([]),
                                    i = (0, n.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    s = (0, n.useState)({ activeDragId: '', potentialDropId: '' }),
                                    r = s[0],
                                    o = s[1],
                                    l = (0, n.useCallback)((e) => {
                                        i.current.dropId ||
                                            i.current.prevPotentialDropId ||
                                            ((i.current.prevPotentialDropId = e),
                                            o({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    c = (0, n.useCallback)((e, u) => {
                                        if (a.current) {
                                            const t = ee(0, u, a.current);
                                            t !== i.current.prevPotentialDropId &&
                                                ((i.current.prevPotentialDropId = t),
                                                o({ activeDragId: e, potentialDropId: t }));
                                        }
                                    }, []),
                                    _ = (0, n.useCallback)((e, u) => {
                                        if (a.current && u) {
                                            const t = i.current,
                                                n = ee(0, u, a.current);
                                            (t.dropId = n),
                                                (t.dragId = e),
                                                (t.prevPotentialDropId = ''),
                                                o({ activeDragId: e, potentialDropId: '' }),
                                                n !== e && S('cons_equipment_swipe');
                                        }
                                    }, []),
                                    d = (0, n.useCallback)(() => {
                                        const e = i.current,
                                            u = e.dragId,
                                            t = e.dropId,
                                            n = e.prevPotentialDropId;
                                        (u || t || n) &&
                                            ((i.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            o({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    E = (0, n.useCallback)(
                                        (e) => {
                                            const u = i.current.dropId;
                                            u && u !== e ? t(e, u) : d();
                                        },
                                        [d, t],
                                    ),
                                    m = (0, n.useCallback)((e, u) => {
                                        const t = a.current.find((u) => u.id === e);
                                        t && u && (t.centerX = u);
                                    }, []),
                                    A = (0, n.useCallback)(
                                        (e, u) => {
                                            const t = u.dragId,
                                                n = u.currentCenterX;
                                            switch (e) {
                                                case ne.Ready:
                                                    return m(t, n);
                                                case ne.DragStart:
                                                    return l(t);
                                                case ne.Drag:
                                                    return c(t, n);
                                                case ne.Drop:
                                                    return _(t, n);
                                                case ne.DropExit:
                                                    return E(t);
                                                default:
                                                    return void console.warn('Unknown grabber action', e);
                                            }
                                        },
                                        [l, c, _, E, m],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        if (e !== a.current.length) {
                                            const t = new Array(e).fill(null);
                                            a.current = t.map((e, t) => ({ id: `${u}-${t}`, centerX: 0 }));
                                        }
                                    }, [e, u]),
                                    {
                                        dragState: r,
                                        handleGrabberAction: A,
                                        getForceCenterX: (0, n.useCallback)((e) => {
                                            const u = i.current,
                                                t = u.dragId,
                                                n = u.dropId;
                                            return e === t ? ue(n, a.current) : e === n ? ue(t, a.current) : 0;
                                        }, []),
                                        resetDragResults: d,
                                    }
                                );
                            })(u, e, t),
                            r = s.dragState,
                            o = s.handleGrabberAction,
                            l = s.getForceCenterX,
                            c = s.resetDragResults,
                            _ = (0, n.useCallback)(
                                (e, u) => {
                                    if (a)
                                        switch (e) {
                                            case ne.DragStart:
                                            case ne.Drag:
                                                a(!0);
                                                break;
                                            default:
                                                a(!1);
                                        }
                                    o(e, u);
                                },
                                [o, a],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                a && a(!1);
                            }, [a]),
                            (0, n.useEffect)(() => c, [i, c]),
                            { handleGrabberAction: _, dragState: r, getForceCenterX: l }
                        );
                    },
                    re = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: s, children: _, mocks: E }) {
                                const m = (0, n.useRef)([]),
                                    A = (t, n, a) => {
                                        var i;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = d,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, u = 0) {
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
                                                const s = (e) => {
                                                    const a = t(u),
                                                        i = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const r = 'string' == typeof i ? `${n}.${i}` : n,
                                                            o = l.O.view.addModelObserver(r, u, !0);
                                                        return a.set(o, t), e && t(s(i)), o;
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
                                                        for (var e, t = c(a.keys()); !(e = t()).done; ) i(e.value, u);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            _ =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            E = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : _.readByPath(e),
                                            A = (e) => m.current.push(e),
                                            F = e({
                                                mode: t,
                                                readByPath: E,
                                                externalModel: _,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : E(e),
                                                            a = o.LO.box(n, { equals: r });
                                                        return (
                                                            'real' === t &&
                                                                _.subscribe(
                                                                    (0, o.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : E(e),
                                                            a = o.LO.box(n, { equals: r });
                                                        return (
                                                            'real' === t &&
                                                                _.subscribe(
                                                                    (0, o.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = E(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = o.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    _.subscribe(
                                                                        (0, o.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                i = Object.entries(a),
                                                                s = i.reduce(
                                                                    (e, [u, t]) => ((e[t] = o.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    _.subscribe(
                                                                        (0, o.aD)((e) => {
                                                                            i.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: A,
                                            }),
                                            b = { mode: t, model: F, externalModel: _, cleanup: A };
                                        return {
                                            model: F,
                                            controls: 'mocks' === t && a ? a.controls(b) : u(b),
                                            externalModel: _,
                                            mode: t,
                                        };
                                    },
                                    F = (0, n.useRef)(!1),
                                    b = (0, n.useState)(i),
                                    D = b[0],
                                    g = b[1],
                                    p = (0, n.useState)(() => A(i, s, E)),
                                    C = p[0],
                                    h = p[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        F.current ? h(A(D, s, E)) : (F.current = !0);
                                    }, [E, D, s]),
                                    (0, n.useEffect)(() => {
                                        g(i);
                                    }, [i]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            C.externalModel.dispose(), m.current.forEach((e) => e());
                                        },
                                        [C],
                                    ),
                                    a().createElement(t.Provider, { value: C }, _)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                t = (0, g.Om)(() => u.sectionGroups.get().length),
                                n = (0, g.Om)(
                                    (e) => {
                                        const t = m(u.sectionGroups.get(), e);
                                        if (!t) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, t, {
                                            sections: F(t.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: F(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, t.setupSelector, {
                                                states: F(t.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: r },
                                ),
                                a = (0, g.Om)(() => D(u.sectionGroups.get(), (e, u) => e + u.sections.length, 0)),
                                i = (0, g.Om)((e) => n(e).sections.length),
                                s = (0, g.Om)(
                                    (e, u) => {
                                        const t = m(n(e).sections, u);
                                        if (!t) throw Error(`No ammunition section found with index: ${u}`);
                                        return t;
                                    },
                                    { equals: r },
                                ),
                                o = (0, g.Om)((e, u) => s(e, u).slots.length),
                                l = (0, g.Om)(
                                    (e, u) =>
                                        (function (e, u) {
                                            if (Array.isArray(e)) return e.filter(u);
                                            const t = [];
                                            for (let a = 0; a < e.length; a++) {
                                                var n;
                                                const i = null == (n = e[a]) ? void 0 : n.value;
                                                u(i, a, e) && t.push(i);
                                            }
                                            return t;
                                        })(s(e, u).slots, (e) => Boolean(e) && !C(e)).length,
                                ),
                                c = (0, g.Om)((e, u) =>
                                    (function (e, u) {
                                        if (Array.isArray(e)) return e.some(u);
                                        for (let t = 0; t < e.length; t++) if (u(A(e, t), t, e)) return !0;
                                        return !1;
                                    })(s(e, u).slots, (e) => e.intCD > 0),
                                ),
                                _ = (0, g.Om)(
                                    (e, u, t) => {
                                        const n = m(s(e, u).slots, t);
                                        if (!n) throw Error(`No ammunition slot found with index: ${t}`);
                                        return n;
                                    },
                                    { equals: r },
                                ),
                                d = (0, g.Om)((e) => b(n(e).sections, (e) => ae(e.type)), { equals: r }),
                                E = (0, g.Om)(
                                    (e, u, t) => {
                                        const n = _(e, u, t);
                                        if (!n) throw Error(`No ammunition slot found with index: ${t}`);
                                        if (!n.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, n.specializations, {
                                            specializations: F(n.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: r },
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    groups: { length: t, group: n },
                                    sections: { allSectionsLength: a, length: i, section: s, IDs: d },
                                    slots: { length: o, filteredLength: l, slot: _, existFilled: c },
                                    specializations: E,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            sectionSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionSelect',
                            ),
                            dragDropSwap: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onDragDropSwap',
                            ),
                            slotClear: e.createCallback((e) => Object.assign({}, e), 'ammunitionPanel.onSlotClear'),
                            sectionResized: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionResized',
                            ),
                            changeSetupIndex: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onChangeSetupIndex',
                            ),
                            specializationSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSpecializationSelect',
                            ),
                            escKeyDown: e.createCallbackNoArgs('onEscKeyDown'),
                        }),
                    ),
                    oe = re[0],
                    le = re[1],
                    ce = 'App_base_55';
                var _e = t(3403);
                const de = (e) => {
                    (0, n.useEffect)(() => e, []);
                };
                const Ee = (0, n.createContext)(null);
                const me = (e) => {
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
                };
                var Ae = t(1281);
                let Fe;
                function be(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function De(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Fe || (Fe = {}));
                const ge = (e) => e.replace(/&nbsp;/g, ' '),
                    pe = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Ce = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    he = (e, u, t = Fe.left) => e.split(u).reduce(t === Fe.left ? pe : Ce, []),
                    Be = (() => {
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
                    fe = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ve = (e, u = Fe.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (fe.includes(t)) return Be(e);
                        if ('ja' === t) {
                            return (0, Ae.D4)()
                                .parse(e)
                                .map((e) => ge(e));
                        }
                        return ((e, u = Fe.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = ge(e);
                            return he(a, /( )/, u).forEach((e) => (t = t.concat(he(e, n, Fe.left)))), t;
                        })(e, u);
                    };
                function Se(e, u, t) {
                    const a = (0, n.useContext)(U);
                    let i = Object.entries(a).filter(([e, u]) => !0 === u && e in H);
                    return (
                        t && (i = i.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const n = i.map((e) =>
                                v()(u[((e, u) => e + '__' + u)(t, e[0])], u[((e, u) => e + De(u))(t, e[0])]),
                            );
                            return (e[t] = v()(u[t], ...n)), e;
                        }, {})
                    );
                }
                const we = (e, u, t, a = []) => {
                        const i = ((e, u = []) => {
                            const t = (0, n.useRef)(),
                                a = (0, n.useCallback)((...u) => {
                                    t.current && t.current(), (t.current = e(...u));
                                }, u);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        t.current && t.current();
                                    },
                                    [a],
                                ),
                                a
                            );
                        })(
                            () =>
                                me(() =>
                                    me(() => {
                                        if (e.current) {
                                            const t = e.current.getBoundingClientRect(),
                                                n = {
                                                    width: l.O.view.pxToRem(t.width),
                                                    height: l.O.view.pxToRem(t.height),
                                                    offsetX: l.O.view.pxToRem(t.left),
                                                    offsetY: l.O.view.pxToRem(t.top),
                                                };
                                            window.tutorialApi.updateComponents(), u(n);
                                        }
                                    }),
                                ),
                            [u, e],
                        );
                        return (
                            (0, n.useEffect)(() => {
                                i();
                            }, [i, ...a]),
                            (0, n.useEffect)(() => {
                                if (t)
                                    return (
                                        engine.on('clientResized', i),
                                        () => {
                                            engine.off('clientResized', i);
                                        }
                                    );
                            }, [t, i]),
                            i
                        );
                    },
                    ye = {
                        base: 'AmmoPanel_base_8d',
                        base__locked: 'AmmoPanel_base__locked_f8',
                        base__disabled: 'AmmoPanel_base__disabled_13',
                        base__hidden: 'AmmoPanel_base__hidden_14',
                        border: 'AmmoPanel_border_e6',
                        border__hidden: 'AmmoPanel_border__hidden_b1',
                        roleSkillSlot: 'AmmoPanel_roleSkillSlot_20',
                        roleSkillSlot__battle: 'AmmoPanel_roleSkillSlot__battle_b0',
                        roleSkillSlot__small: 'AmmoPanel_roleSkillSlot__small_a1',
                        roleSkillSlot__extraSmall: 'AmmoPanel_roleSkillSlot__extraSmall_a9',
                        roleSkillSlot__prebattle: 'AmmoPanel_roleSkillSlot__prebattle_b5',
                    },
                    xe = 'Border_base_f9',
                    Te = 'Border_border_83',
                    Ie = 'Border_wrapper_17',
                    ke = 'Border_active_e8',
                    Oe = (0, n.memo)(({ slotOffset: e, slotWidth: u, onAnimationEnd: t }) => {
                        const i = (0, n.useRef)(null),
                            s = (0, n.useRef)(!1);
                        (0, n.useEffect)(() => {
                            s.current = !0;
                        }, [e, u]);
                        const r = (0, n.useCallback)(() => {
                            s.current && t(), (s.current = !1);
                        }, [t]);
                        (0, n.useEffect)(() => {
                            const e = i.current;
                            return (
                                e && e.addEventListener('transitionend', r),
                                () => {
                                    e && e.removeEventListener('transitionend', r);
                                }
                            );
                        }, [r]);
                        const o = (0, n.useMemo)(() => ({ left: e }), [e]),
                            l = (0, n.useMemo)(() => ({ width: u }), [u]);
                        return a().createElement(
                            'div',
                            { className: xe },
                            a().createElement(
                                'div',
                                { ref: i, className: Te, style: o },
                                a().createElement(
                                    'div',
                                    { className: Ie },
                                    a().createElement('div', { className: ke, style: l }),
                                ),
                            ),
                        );
                    }),
                    Re = (e, u) => {
                        const t = [];
                        for (let n = 0; n < e; n++) t.push(u(n));
                        return t;
                    },
                    Ne = (e = 1) => {
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
                    },
                    Le = [
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
                function Me(e) {
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
                const Pe = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: N.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    $e = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            r = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            E = e.decoratorId,
                            m = void 0 === E ? 0 : E,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            b = e.targetId,
                            D = void 0 === b ? 0 : b,
                            g = e.onShow,
                            p = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Le);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, n.useMemo)(() => D || Ne().resId, [D]),
                            f = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Pe(t, m, { isMouseEvent: !0, on: !0, arguments: Me(a) }, B),
                                    g && g(),
                                    (h.current.isVisible = !0));
                            }, [t, m, a, B, g]),
                            v = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Pe(t, m, { on: !1 }, B),
                                        h.current.isVisible && p && p(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, m, B, p]),
                            S = (0, n.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return F
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      i && i(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              v(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && v(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && v(), null == r || r(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : u;
                        var w;
                    },
                    He = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ze() {
                    return (
                        (ze = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ze.apply(null, arguments)
                    );
                }
                const Ge = R.views.common.tooltip_window.simple_tooltip_content,
                    We = (e) => {
                        let u = e.children,
                            t = e.body,
                            i = e.header,
                            s = e.note,
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
                            })(e, He);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: i, note: s, alert: r });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [r, t, i, s, o]);
                        return a().createElement(
                            $e,
                            ze(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? Ge.SimpleTooltipHtmlContent('resId') : Ge.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                let je;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(je || (je = {}));
                const Ue = 'SwitchButton_base_23',
                    Ve = 'SwitchButton_base__active_31',
                    qe = 'SwitchButton_base__warning_71',
                    Xe = 'SwitchButton_buttonBack_ce',
                    Ke = 'SwitchButton_buttonBackHovered_45',
                    Ye = 'SwitchButton_base__hovered_b4',
                    Ze = 'SwitchButton_buttonGlow_4c',
                    Qe = 'SwitchButton_buttonIcon_d3',
                    Je = 'SwitchButton_buttonWarning_3f',
                    eu = 'SwitchButton_number_8a',
                    uu = ({ id: e, state: u, currentIndex: t, isHovered: i }) => {
                        const s = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            r = e === t,
                            o = !r && u === je.WARNING;
                        return a().createElement(
                            'div',
                            { className: v()(Ue, { [Ve]: r, [qe]: o, [Ye]: i }) },
                            a().createElement('div', { className: Xe }),
                            a().createElement('div', { className: Ke }),
                            a().createElement('div', { className: Qe }),
                            a().createElement('div', { className: Ze }),
                            a().createElement('div', { className: Je }),
                            a().createElement('div', { style: s, className: eu }),
                        );
                    },
                    tu = 'SwitchEquipment_base_1a',
                    nu = 'SwitchEquipment_base__disabled_73',
                    au = 'SwitchEquipment_cover_b3',
                    iu = ({ onClick: e, totalCount: u, currentIndex: t, states: i, isDisabled: s, groupId: r }) => {
                        const o = (0, n.useRef)(null),
                            l = (0, n.useState)(!1),
                            c = l[0],
                            _ = l[1],
                            d = (t + 1) % u,
                            E = (0, n.useCallback)(() => {
                                s || e({ groupId: r, currentIndex: d });
                            }, [r, s, d, e]),
                            m = (0, n.useCallback)(() => {
                                s || (_(!0), w.playHighlight());
                            }, [s]),
                            F = (0, n.useCallback)(() => {
                                s || _(!1);
                            }, [s]),
                            b = v()(tu, s && nu);
                        return a().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${r}`,
                                className: b,
                                onClick: E,
                                onMouseEnter: m,
                                onMouseLeave: F,
                                ref: o,
                            },
                            Array.from({ length: u }, (e, u) =>
                                a().createElement(uu, { key: u, id: u, state: A(i, u), currentIndex: t, isHovered: c }),
                            ),
                            s && a().createElement('div', { className: au }),
                        );
                    };
                var su = t(2558),
                    ru = t(8934);
                const ou = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    lu = 'up',
                    cu = 'down',
                    _u = ({ children: e, index: u, setSetupSwitching: t, disabled: i = !1 }) => {
                        const s = (0, n.useRef)(1 - u),
                            r = (0, n.useMemo)(() => {
                                const e = ((t = u), (n = s.current), t === n ? '' : t > n ? cu : lu);
                                var t, n;
                                const a = e && De(e);
                                return i ? {} : { enter: ou[`base__enter${a}`], exit: ou[`base__exit${a}`] };
                            }, [u, i]);
                        return (
                            (s.current = u),
                            a().createElement(
                                su.Z,
                                { className: ou.base },
                                a().createElement(
                                    ru.Z,
                                    {
                                        timeout: 300,
                                        key: u,
                                        classNames: r,
                                        onEnter: () => t(!0),
                                        onExited: () => t(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    },
                    du = 'shells',
                    Eu = 'battleAbilities',
                    mu = 'toggleShells',
                    Au = 'toggleCamouflage',
                    Fu = {
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
                    bu = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
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
                const gu = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        i = e.fadeInAnimation,
                        s = e.hide,
                        r = e.maximumNumber,
                        o = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, bu);
                    const c = n ? null : t,
                        _ = 'string' == typeof c;
                    if ((c && !_ && c < 0) || 0 === c) return null;
                    const d = c && !_ && c > r,
                        E = v()(
                            Fu.base,
                            Fu[`base__${u}`],
                            i && Fu.base__animated,
                            s && Fu.base__hidden,
                            !c && Fu.base__pattern,
                            n && Fu.base__empty,
                            o,
                        );
                    return a().createElement(
                        'div',
                        Du({ className: E }, l),
                        a().createElement('div', { className: Fu.bg }),
                        a().createElement('div', { className: Fu.pattern }),
                        a().createElement(
                            'div',
                            { className: v()(Fu.value, _ && Fu.value__text) },
                            d ? r : c,
                            d && a().createElement('span', { className: Fu.plus }, '+'),
                        ),
                    );
                };
                gu.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const pu = 'FormatText_base_d0',
                    Cu = ({ binding: e, text: u = '', classMix: t, alignment: i = Fe.left, formatWithBrackets: s }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const r = s && e ? be(u, e) : u;
                        return a().createElement(
                            n.Fragment,
                            null,
                            r.split('\n').map((u, s) =>
                                a().createElement(
                                    'div',
                                    { className: v()(pu, t), key: `${u}-${s}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : ve(e, u))))(
                                        u,
                                        i,
                                        e,
                                    ).map((e, u) => a().createElement(n.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    hu = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    Bu = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    fu = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    vu = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = hu(`${e}.${t}`, window);
                                return Bu(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    Su = (e) => {
                        const u = ((e) => {
                                const u = Ne(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: fu(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = hu(fu(t, `${u}.${n}`), window);
                                    return Bu(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    wu = N.Sw.instance;
                let yu;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(yu || (yu = {}));
                const xu = (e = 'model', u = yu.Deep) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            i = (0, n.useMemo)(() => Ne(), []),
                            s = i.caller,
                            r = i.resId,
                            o = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                                [s, e],
                            ),
                            l = (0, n.useState)(() =>
                                ((e) => {
                                    const u = hu(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return Bu(u) ? u.value : u;
                                })(vu(o)),
                            ),
                            c = l[0],
                            _ = l[1],
                            d = (0, n.useRef)(-1);
                        return (
                            X(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? yu.Deep : yu.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== yu.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === yu.Deep
                                                ? (e === c && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        n = Su(e);
                                    d.current = wu.addCallback(n, t, r, u === yu.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (u !== yu.None)
                                    return () => {
                                        wu.removeCallback(d.current, r);
                                    };
                            }, [r, u]),
                            c
                        );
                    },
                    Tu = 'visible_change',
                    Iu = Tu,
                    ku = 'TopLabel_base_7f',
                    Ou = 'TopLabel_base__ready_00',
                    Ru = 'TopLabel_text_d0',
                    Nu = 'TopLabel_text__hangar_36',
                    Lu = 'TopLabel_text__shown_25',
                    Mu = 'TopLabel_text__hidden_79',
                    Pu = 'TopLabel_text__truncated_29',
                    $u = (0, n.memo)(({ panelType: e, text: u, parentRef: t, isTruncated: i = !1, show: s = !1 }) => {
                        const r = (0, n.useRef)(!1),
                            o = (0, n.useState)(!1),
                            l = o[0],
                            c = o[1];
                        (0, n.useEffect)(() => {
                            t || (s && !r.current && (r.current = !0), c(s));
                        }, [s, t]);
                        const _ = (0, n.useCallback)(() => {
                                (r.current = !0), c(!0);
                            }, []),
                            d = (0, n.useCallback)(() => {
                                c(!1);
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = t && t.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', _),
                                        e.addEventListener('mouseleave', d),
                                        () => {
                                            e.removeEventListener('mouseenter', _),
                                                e.removeEventListener('mouseleave', d);
                                        }
                                    );
                            }, [t, _, d]),
                            a().createElement(
                                'div',
                                { className: v()(ku, r.current && Ou) },
                                a().createElement(
                                    'div',
                                    { className: v()(Ru, e !== p.Setup && Nu, i && Pu, s && l ? Lu : Mu) },
                                    u,
                                ),
                            )
                        );
                    }),
                    Hu = 'notUsableSection',
                    zu = 'Section_base_8a',
                    Gu = 'Section_label_73',
                    Wu = 'Section_counter_8a',
                    ju = 'Section_configLabel_c9',
                    Uu = 'Section_configText_eb',
                    Vu = 'Section_configVehicleIcon_20';
                let qu;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(qu || (qu = {}));
                const Xu = 'tooltip_watched';
                let Ku;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(Ku || (Ku = {}));
                let Yu, Zu, Qu;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(Yu || (Yu = {})),
                    (function (e) {
                        (e.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (e.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (e.BannerPerformance = 'banner_performance_tooltip'),
                            (e.SkillPointsTooltip = 'skill_points_tooltip'),
                            (e.AbilityLevelsTooltip = 'ability_levels_tooltip'),
                            (e.SkillOrderTooltip = 'skill_order_tooltip'),
                            (e.SkillLevelTab = 'skill_level_tab'),
                            (e.RewardsButton = 'rewards_button'),
                            (e.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (e.RewardTooltip = 'reward_tooltip'),
                            (e.AwardsOkButton = 'awards_ok'),
                            (e.AwardsView = 'awards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view');
                    })(Zu || (Zu = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(Qu || (Qu = {}));
                const Ju = 'metrics',
                    et = () => Date.now(),
                    ut = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    tt = (e, u) => {
                        const t = (0, n.useCallback)(
                            (t, n = qu.Info, a) => {
                                a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(a),
                                        });
                            },
                            [e, u],
                        );
                        return (e, u, n) => t(e, u, n);
                    },
                    nt = (e, u) => {
                        const t = tt(e, u),
                            a = (0, n.useRef)(new Map()),
                            i = (0, n.useRef)(new Map()),
                            s = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    (void 0 !== u && u > 0) || a.current.set(e, et());
                                },
                                [a],
                            ),
                            r = (0, n.useCallback)(() => {
                                a.current.clear(), i.current.clear();
                            }, [a, i]),
                            o = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, et());
                                },
                                [a, i],
                            ),
                            l = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    if (void 0 === u) return;
                                    const t = i.current.get(e);
                                    if (void 0 === t) return;
                                    i.current.delete(e);
                                    const n = et() - t;
                                    a.current.set(e, u + n);
                                },
                                [a, i],
                            ),
                            c = (0, n.useCallback)(
                                (e, u = 0, n, s) => {
                                    const r = a.current.get(e);
                                    if (void 0 === r) return;
                                    void 0 !== i.current.get(e) && l(e), a.current.delete(e);
                                    const o = (et() - r) / 1e3;
                                    o <= u ||
                                        ((s = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(s, o)),
                                        t(e, n, s));
                                },
                                [a, i, t, l],
                            );
                        return [(e) => s(e), (e, u, t, n) => c(e, u, t, n), () => r(), (e) => o(e), (e) => l(e)];
                    },
                    at = (e) => {
                        const u = nt(e, Ju),
                            t = u[0],
                            a = u[1],
                            i = u[2],
                            s = u[3],
                            r = u[4],
                            o = (0, n.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        n = e.logLevel;
                                    a(u, t, n, ut(e));
                                },
                                [a],
                            );
                        return [(e) => t(e), (e) => o(e), () => i(), (e) => s(e), (e) => r(e)];
                    },
                    it = a().memo(function ({ className: e, children: u }) {
                        const t = ((e, u, t, a) => {
                                const i = at('epic_battle'),
                                    s = i[0],
                                    r = i[1];
                                return [
                                    (0, n.useCallback)(() => s(Xu), [s]),
                                    (0, n.useCallback)(
                                        () =>
                                            r({
                                                action: Xu,
                                                timeLimit: 2,
                                                item: e,
                                                parentScreen: u,
                                                itemState: t,
                                                info: a,
                                            }),
                                        [r, e, u, t, a],
                                    ),
                                ];
                            })(Zu.SkillOrderTooltip, Yu.SetupView),
                            i = t[0],
                            s = t[1];
                        return a().createElement(
                            $e,
                            {
                                contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                                onMouseEnter: i,
                                onMouseLeave: s,
                            },
                            a().createElement('div', { className: e }, u),
                        );
                    }),
                    st = 'SlotDivider_base_60',
                    rt = () => a().createElement('div', { className: st }),
                    ot = ({ wrapper: e, children: u, when: t, withProps: n }) =>
                        t ? a().createElement(e, n, u) : a().createElement(a().Fragment, null, u),
                    lt = {
                        base: 'Container_base_9a',
                        base__grabbing: 'Container_base__grabbing_73',
                        base__hangar: 'Container_base__hangar_ab',
                        base__setup: 'Container_base__setup_1c',
                        base__compare: 'Container_base__compare_0b',
                        base__selected: 'Container_base__selected_17',
                        base__dragIn: 'Container_base__dragIn_a6',
                        base__dragInActive: 'Container_base__dragInActive_e5',
                        base__toggle: 'Container_base__toggle_94',
                        base__disabled: 'Container_base__disabled_22',
                    },
                    ct = ({
                        activeDragId: e,
                        slotType: u,
                        isSelected: t,
                        isBorderActive: n,
                        children: i,
                        panelType: s,
                        isDisabled: r,
                        isPotentialDrop: o,
                        onClick: l,
                    }) => {
                        const c = v()(
                            lt.base,
                            !e && lt[`base__${s}`],
                            u && lt[`base__${u}`],
                            t && !o && !n && lt.base__selected,
                            o && lt['base__dragIn' + (t ? 'Active' : '')],
                            r && lt.base__disabled,
                        );
                        return a().createElement('div', { className: c, onClick: l }, i);
                    },
                    _t = {
                        base: 'Bonus_base_dd',
                        base__fitting: 'Bonus_base__fitting_d1',
                        icon: 'Bonus_icon_3b',
                        icon__battleBooster: 'Bonus_icon__battleBooster_66',
                        icon__battleBoosterReplace: 'Bonus_icon__battleBoosterReplace_8d',
                        icon__equipmentPlus: 'Bonus_icon__equipmentPlus_48',
                        icon__builtInEquipment: 'Bonus_icon__builtInEquipment_77',
                        icon__equipmentModernized: 'Bonus_icon__equipmentModernized_76',
                        icon__equipmentTrophyBasic: 'Bonus_icon__equipmentTrophyBasic_a4',
                        icon__equipmentTrophyUpgraded: 'Bonus_icon__equipmentTrophyUpgraded_6d',
                    },
                    dt = a().memo(({ isTemporary: e, overlayType: u, overlaySource: t }) => {
                        const i = v()(_t.base, e && _t.base__fitting),
                            s = v()(_t.icon, _t[`icon__${u}`]),
                            r = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: s, style: r }),
                        );
                    }),
                    Et = {
                        base: 'Level_base_57',
                        base__level1: 'Level_base__level1_c4',
                        base__level2: 'Level_base__level2_9c',
                        base__level3: 'Level_base__level3_39',
                        base__level4: 'Level_base__level4_e3',
                        base__level5: 'Level_base__level5_ea',
                        base__level6: 'Level_base__level6_5d',
                        base__level7: 'Level_base__level7_03',
                        base__level8: 'Level_base__level8_b5',
                        base__level9: 'Level_base__level9_d6',
                        base__level10: 'Level_base__level10_89',
                    },
                    mt = ({ level: e }) => {
                        const u = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            t = v()(Et.base, Et[`base__level${e}`]);
                        return a().createElement('div', { style: u, className: t });
                    },
                    At = 'Inside_image_e5',
                    Ft = 'Inside_image__fitting_11',
                    bt = 'Inside_warning_e4',
                    Dt = 'Inside_change_5a',
                    gt = ({
                        level: e,
                        overlayType: u,
                        isTemporary: t,
                        withAttention: i,
                        imageSource: s,
                        isIncompatible: r,
                    }) => {
                        const o = (0, n.useMemo)(() => {
                                const t = 'equipmentModernized' === u ? `${u}_${e}_overlay` : `${u}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(t);
                            }, [u, e]),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            c = !o && Boolean(u) && e;
                        return a().createElement(
                            'div',
                            null,
                            c && a().createElement(mt, { level: e }),
                            a().createElement('div', { className: v()(At, (t || i) && Ft), style: l }),
                            i && a().createElement('div', { className: bt }),
                            r && a().createElement('div', { className: Dt }),
                            o && a().createElement(dt, { isTemporary: t, overlaySource: o, overlayType: u }),
                        );
                    };
                let pt, Ct, ht;
                !(function (e) {
                    (e[(e.ExtraSmall = $.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = $.small.width)] = 'Small'),
                        (e[(e.Medium = $.medium.width)] = 'Medium'),
                        (e[(e.Large = $.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = $.extraLarge.width)] = 'ExtraLarge');
                })(pt || (pt = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = $.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = $.small.width)] = 'Small'),
                            (e[(e.Medium = $.medium.width)] = 'Medium'),
                            (e[(e.Large = $.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = $.extraLarge.width)] = 'ExtraLarge');
                    })(Ct || (Ct = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = $.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = $.small.height)] = 'Small'),
                            (e[(e.Medium = $.medium.height)] = 'Medium'),
                            (e[(e.Large = $.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = $.extraLarge.height)] = 'ExtraLarge');
                    })(ht || (ht = {}));
                const Bt = () => {
                        const e = (0, n.useContext)(U),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return pt.ExtraLarge;
                                    case e.large:
                                        return pt.Large;
                                    case e.medium:
                                        return pt.Medium;
                                    case e.small:
                                        return pt.Small;
                                    case e.extraSmall:
                                        return pt.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), pt.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Ct.ExtraLarge;
                                    case e.largeWidth:
                                        return Ct.Large;
                                    case e.mediumWidth:
                                        return Ct.Medium;
                                    case e.smallWidth:
                                        return Ct.Small;
                                    case e.extraSmallWidth:
                                        return Ct.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Ct.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return ht.ExtraLarge;
                                    case e.largeHeight:
                                        return ht.Large;
                                    case e.mediumHeight:
                                        return ht.Medium;
                                    case e.smallHeight:
                                        return ht.Small;
                                    case e.extraSmallHeight:
                                        return ht.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ht.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    ft = 'Grabber_base_cf',
                    vt = 'Grabber_base__enabled_b0',
                    St = 'Grabber_base__waitingUpdate_1d',
                    wt = 'Grabber_base__updating_f1',
                    yt = 'Grabber_base__active_71',
                    xt = 'Grabber_base__exit_1f',
                    Tt = 'Grabber_base__showAnimation_d9',
                    It = ({
                        children: e,
                        id: u,
                        containerRef: t,
                        isEnabled: i = !0,
                        onClick: s,
                        forceCenterX: r,
                        isUpdateAvailable: o,
                        handleAction: c,
                        blockOnGrabIds: _ = [],
                    }) => {
                        const d = Bt().mediaSize,
                            E = (0, n.useRef)({
                                actualX: 0,
                                clickCenterOffset: 0,
                                dropCenterX: 0,
                                grabActivationPassed: !1,
                                isDragActive: !1,
                                id: u,
                            }),
                            m = (0, n.useRef)({
                                isValid: !1,
                                startX: 0,
                                startCenterX: 0,
                                minXRestriction: 0,
                                maxXRestriction: 8e3,
                            }),
                            A = (0, n.useRef)(null),
                            F = (0, n.useState)(!1),
                            b = F[0],
                            D = F[1],
                            g = (0, n.useState)(0),
                            p = g[0],
                            C = g[1],
                            h = (function () {
                                const e = (0, n.useRef)(0);
                                return (
                                    de(() => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
                                    (0, n.useMemo)(
                                        () => ({
                                            run: (u) => {
                                                window.cancelAnimationFrame(e.current),
                                                    (e.current = window.requestAnimationFrame(() => {
                                                        e.current = window.requestAnimationFrame(() => {
                                                            u(), (e.current = 0);
                                                        });
                                                    }));
                                            },
                                            clear: () => {
                                                window.cancelAnimationFrame(e.current), (e.current = 0);
                                            },
                                            get isRunning() {
                                                return 0 !== e.current;
                                            },
                                        }),
                                        [],
                                    )
                                );
                            })(),
                            B = 0 !== r && i,
                            f = r ? r - m.current.startCenterX : p;
                        (0, n.useEffect)(() => {
                            if (((m.current.isValid = !1), u))
                                return me(() => {
                                    const e = A.current,
                                        n = t.current;
                                    if (n && e) {
                                        const t = e.getBoundingClientRect(),
                                            a = n.getBoundingClientRect(),
                                            i = t.left + 0.5 * t.width;
                                        (m.current = {
                                            isValid: !0,
                                            minXRestriction: a.left,
                                            maxXRestriction: a.left + a.width,
                                            startX: t.left,
                                            startCenterX: i,
                                        }),
                                            c(ne.Ready, { dragId: u, currentCenterX: i });
                                    }
                                });
                        }, [d]);
                        const S = (0, n.useCallback)(
                                (e) => {
                                    (E.current.isDragActive = e),
                                        D(e),
                                        E.current.grabActivationPassed && !e && J(!1, _);
                                },
                                [_],
                            ),
                            w = (0, n.useCallback)(() => {
                                c(ne.DragStart, { dragId: E.current.id }),
                                    (E.current.grabActivationPassed = !0),
                                    J(!0, _);
                            }, [c, _]),
                            y = (0, n.useCallback)((e) => {
                                const u = E.current,
                                    t = m.current,
                                    n = t.startX,
                                    a = t.startCenterX,
                                    i = t.minXRestriction,
                                    s = t.maxXRestriction,
                                    r = a - n,
                                    o = e - u.clickCenterOffset;
                                u.dropCenterX = ((e, u, t, n) => {
                                    const a = t + u,
                                        i = n - u;
                                    return e < a ? a : e > i ? i : e;
                                })(o, r, i, s);
                            }, []),
                            x = (0, n.useCallback)(
                                (e) => {
                                    const u = E.current,
                                        t = m.current;
                                    0 === e.button &&
                                        !u.isDragActive &&
                                        t.isValid &&
                                        i &&
                                        !o &&
                                        A.current &&
                                        ((u.actualX = e.clientX),
                                        (u.clickCenterOffset = u.actualX - t.startCenterX),
                                        S(!0));
                                },
                                [i, o, S],
                            ),
                            T = (0, n.useCallback)(() => {
                                !s || (i && m.current.isValid) || s();
                            }, [i, s]);
                        M(
                            b ? O.n.ESCAPE : O.n.NONE,
                            (function (e) {
                                const u = (0, n.useRef)(e);
                                return (
                                    (0, n.useLayoutEffect)(() => {
                                        u.current = e;
                                    }),
                                    (0, n.useCallback)((...e) => (0, u.current)(...e), k)
                                );
                            })(() => S(!1)),
                        ),
                            (0, n.useEffect)(() => {
                                i && r && C(0);
                            }, [r, i]);
                        const I = !b && E.current.grabActivationPassed;
                        (0, n.useLayoutEffect)(() => {
                            E.current.id = u;
                        }, [u]),
                            (0, n.useEffect)(() => {
                                if (I) {
                                    const e = E.current;
                                    c(ne.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                        r === e.dropCenterX &&
                                            ((e.grabActivationPassed = !1),
                                            h.run(() => c(ne.DropExit, { dragId: e.id })));
                                }
                            }, [I, h, r, c]),
                            (0, n.useEffect)(() => {
                                if (i && b && E.current.id) {
                                    const e = l.O.client.events.mouse.up(([e, u]) => {
                                            if ('outside' === u) return S(!1);
                                            const t = E.current,
                                                n = e.clientX;
                                            n === t.actualX && 0 === e.button && !E.current.grabActivationPassed
                                                ? s && s()
                                                : E.current.grabActivationPassed && y(n),
                                                E.current.isDragActive && S(!1);
                                        }),
                                        u = l.O.client.events.mouse.move(([e]) => {
                                            const u = E.current;
                                            if ((0 === e.clientX && 0 === e.clientY) || !u.isDragActive) return;
                                            const t = e.clientX,
                                                n = u.grabActivationPassed;
                                            !n && w(),
                                                t !== u.actualX &&
                                                    ((u.actualX = t),
                                                    y(t),
                                                    n && c(ne.Drag, { dragId: u.id, currentCenterX: u.dropCenterX }),
                                                    C(u.dropCenterX - m.current.startCenterX));
                                        });
                                    return () => {
                                        u(), e();
                                    };
                                }
                            }, [w, c, b, i, s, S, y]);
                        const R = i ? v()(ft, vt, b && yt, I && xt, B && St, r && wt) : v()(ft, r && Tt);
                        return a().createElement(
                            'div',
                            {
                                id: u,
                                ref: A,
                                onClick: T,
                                onMouseDown: x,
                                onTransitionEnd: (e) => {
                                    const u = E.current;
                                    e.target === A.current &&
                                        u.grabActivationPassed &&
                                        ((u.grabActivationPassed = !1), h.run(() => c(ne.DropExit, { dragId: u.id })));
                                },
                                className: R,
                                style: { left: f },
                            },
                            e,
                        );
                    };
                let kt;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(kt || (kt = {}));
                const Ot = 'KeyLabel_base_ec',
                    Rt = 'KeyLabel_base__current_c2',
                    Nt = 'KeyLabel_base__next_fa',
                    Lt = ({ text: e, show: u, panelType: t, shellState: n, className: i }) => {
                        if (!e) return null;
                        const s = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return a().createElement(
                            'div',
                            { className: v()(Ot, n === kt.Current && Rt, n === kt.Next && Nt, i) },
                            a().createElement($u, { isTruncated: !0, text: s, show: u, panelType: t }),
                        );
                    },
                    Mt = ['children'];
                function Pt() {
                    return (
                        (Pt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Pt.apply(null, arguments)
                    );
                }
                const $t = (e) => {
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
                            })(e, Mt);
                        return a().createElement(
                            $e,
                            Pt(
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
                    Ht = ({ children: e, slotType: u, slotId: t, panelType: i, isEnabled: s = !0 }) => {
                        const r = (0, n.useMemo)(() => ({ slotType: u, slotId: t }), [u, t]);
                        return a().createElement(
                            $t,
                            {
                                isEnabled: s,
                                args: r,
                                decoratorId: [p.Battle, p.Prebattle].includes(i)
                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                    : 0,
                            },
                            a().createElement('div', null, e),
                        );
                    },
                    zt = 'Close_base_f3',
                    Gt = 'Close_base__invisible_0e',
                    Wt = 'Close_base__shown_a2',
                    jt = 'Close_base__hover_6d',
                    Ut = 'Close_base__down_2b',
                    Vt = (0, n.memo)(
                        ({ id: e, show: u = !0, onClick: t, soundHover: i = 'highlight', soundClick: s = 'play' }) => {
                            const r = (0, n.useState)(!1),
                                o = r[0],
                                l = r[1],
                                c = (0, n.useState)(!1),
                                _ = c[0],
                                d = c[1],
                                E = (0, n.useState)(!1),
                                m = E[0],
                                A = E[1],
                                F = (0, n.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                b = (0, n.useCallback)(() => {
                                    d(!0), i && S(i);
                                }, [i]),
                                D = (0, n.useCallback)(() => {
                                    l(!1), d(!1);
                                }, []),
                                g = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && (l(!0), s && S(s));
                                    },
                                    [u, s],
                                ),
                                p = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && t && t();
                                    },
                                    [u, t],
                                );
                            (0, n.useEffect)(
                                () =>
                                    me(() => {
                                        A(!0);
                                    }),
                                [],
                            );
                            const C = v()(zt, !m && Gt, m && u && Wt, o && Ut, _ && jt);
                            return a().createElement('div', {
                                id: e,
                                onMouseOver: b,
                                onMouseLeave: D,
                                onMouseDown: g,
                                onMouseUp: p,
                                className: C,
                                onClick: F,
                            });
                        },
                    ),
                    qt = 'Slot_base_3a',
                    Xt = 'Slot_label_e6',
                    Kt = 'Slot_close_bb',
                    Yt = 'Slot_disabled_5d',
                    Zt = 'Slot_shadow_a7',
                    Qt = 'Slot_category_2c';
                let Jt;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Jt || (Jt = {}));
                const en = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: i,
                        isEnabled: s = !0,
                        onMouseDown: r,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                (0, N.c9)(N.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    w.playYes();
                            }, [i, u, t, a]),
                            l = (0, n.useCallback)(() => {
                                (0, N.c9)(N.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    r && r(e), ((e) => e.button === Jt.RIGHT)(e) && o();
                                },
                                [r, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    un = ['children'];
                function tn() {
                    return (
                        (tn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        tn.apply(null, arguments)
                    );
                }
                const nn = (e) => {
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
                        })(e, un);
                    return a().createElement(
                        en,
                        tn({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                        u,
                    );
                };
                function an() {
                    const e = (0, n.useRef)(0);
                    return (
                        de(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useMemo)(
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
                const sn = 'select',
                    rn = 'undo',
                    on = 'swap',
                    ln = 'demount',
                    cn = 'demount_from_setup',
                    _n = 'demount_from_setups',
                    dn = 'destroy',
                    En = 1600;
                let mn;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(mn || (mn = {}));
                const An = { [on]: 200, [rn]: 250, [sn]: 250, [dn]: 1400, [ln]: En, [_n]: En, [cn]: En },
                    Fn = 'BackEffects_shine_f6',
                    bn = 'BackEffects_sparks_55',
                    Dn = 'BackEffects_nut_79',
                    gn = 'BackEffects_wrench_5a',
                    pn = { enterActive: 'BackEffects_shine__enterActive_54' },
                    Cn = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    hn = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    Bn = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    fn = [ln, _n],
                    vn = a().memo(({ in: e, actionType: u }) =>
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                                ru.Z,
                                { in: e, timeout: 200, classNames: pn },
                                a().createElement('div', { className: Fn }),
                            ),
                            a().createElement(
                                ru.Z,
                                { in: e, timeout: 400, classNames: Cn },
                                a().createElement('div', { className: bn }),
                            ),
                            fn.includes(u) &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        ru.Z,
                                        { in: e, timeout: 600, classNames: hn },
                                        a().createElement('div', { className: Dn }),
                                    ),
                                    a().createElement(
                                        ru.Z,
                                        { in: e, timeout: 600, classNames: Bn },
                                        a().createElement('div', { className: gn }),
                                    ),
                                ),
                        ),
                    ),
                    Sn = 'ColorMask_base_60',
                    wn = 'ColorMask_base__enterActive_62',
                    yn = ({ inProp: e, maskImage: u }) =>
                        a().createElement(
                            ru.Z,
                            { in: e, timeout: 1200, classNames: { enterActive: wn } },
                            a().createElement('div', { className: Sn, style: { maskImage: `url(${u})` } }),
                        ),
                    xn = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d8',
                        'animation-left': 'SlotTransitions_animation-left_27',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_53',
                        'animation-fade': 'SlotTransitions_animation-fade_ce',
                        base__enterRight: 'SlotTransitions_base__enterRight_bb',
                        'animation-right': 'SlotTransitions_animation-right_31',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_63',
                        base__exitRight: 'SlotTransitions_base__exitRight_b9',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_e9',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_64',
                        'animation-right-long': 'SlotTransitions_animation-right-long_bd',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_5e',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_da',
                        'animation-left-long': 'SlotTransitions_animation-left-long_ec',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_c3',
                        base__exitFade: 'SlotTransitions_base__exitFade_4c',
                        base__enterFade: 'SlotTransitions_base__enterFade_77',
                        base: 'SlotTransitions_base_6d',
                        base__enter: 'SlotTransitions_base__enter_54',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_c7',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_1e',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_0d',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_66',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_7c',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_e4',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_94',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_fd',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_41',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_41',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_19',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_00',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_04',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_1b',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_72',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_fe',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_8a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_5d',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_2c',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_72',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_0f',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_09',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_04',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_52',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_e9',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_8b',
                        'animation-fitting': 'SlotTransitions_animation-fitting_24',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_fc',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_e0',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_d0',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_c9',
                        'animation-destroy': 'SlotTransitions_animation-destroy_12',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_19',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_e3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_8e',
                        'animation-demount': 'SlotTransitions_animation-demount_d8',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_8a',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_10',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_cf',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_57',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_d9',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_4f',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_02',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_c6',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_39',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_97',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_8a',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_28',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_8e',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_0e',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_13',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_01',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_10',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_5b',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_bd',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_52',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_a9',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_7b',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_d3',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_fc',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_97',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_7d',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e5',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_ca',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_c0',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_de',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_bc',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_3d',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_21',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_15',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_56',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_e5',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_f1',
                    },
                    Tn = { enter: xn.base__enter, exit: xn.base__enter },
                    In = (0, _e.Pi)(
                        ({
                            children: e,
                            slotIndex: u,
                            uniqueKey: t,
                            slotType: i,
                            isEmpty: s = !1,
                            imageSource: r,
                            itemInstalledSetupIndex: o,
                        }) => {
                            const l = le().model.lastSlotAction.get(),
                                c = l.leftID,
                                _ = l.rightID,
                                d = l.leftIntCD,
                                E = l.rightIntCD,
                                m = l.actionType,
                                A = l.intCD,
                                F = (0, n.useState)(!0),
                                b = F[0],
                                D = F[1],
                                g = (0, n.useState)(!0),
                                p = g[0],
                                C = g[1],
                                h = (0, n.useState)(r),
                                B = h[0],
                                f = h[1],
                                v = (0, n.useState)(t),
                                S = v[0],
                                w = v[1],
                                y = (0, n.useState)(o),
                                x = y[0],
                                T = y[1],
                                I = an(),
                                k = an(),
                                O = (A === t || A === S) && x !== o && [dn, ln, _n].includes(m),
                                R = -1 === d || -1 === E,
                                N = i ? `base${i[0].toUpperCase() + i.slice(1)}` : 'base',
                                L = An[m] || 0;
                            (0, n.useEffect)(() => {
                                s || f(r);
                            }, [s, r]);
                            const M = (0, n.useCallback)(
                                    (e) => {
                                        const t = Object.assign({}, Tn);
                                        switch (m) {
                                            case on: {
                                                const e = c === u ? mn.RIGHT : mn.LEFT,
                                                    n = _ - c != 1 ? mn.SWAP : '';
                                                (t.enterDone = xn[`${N}__enter${e}${n}`]),
                                                    (t.exit = xn[`${N}__exit${e}${n}`]),
                                                    R &&
                                                        (s
                                                            ? (t.enterDone = xn[`${N}__enter${mn.FADE}`])
                                                            : (t.exit = xn[`${N}__exit${mn.FADE}`]));
                                                break;
                                            }
                                            case dn:
                                                (t.enterDone = xn[`${N}__enter${mn.DESTROY}`]),
                                                    (t.exit = xn[`${N}__exit${mn.DESTROY}`]),
                                                    I.run(() => D(!0), 900),
                                                    C(!0);
                                                break;
                                            case _n:
                                            case ln:
                                                (t.enter = xn[`${N}__enter${mn.DEMOUNT}${mn.FADE}`]),
                                                    (t.exit = xn[`${N}__exit${mn.DEMOUNT}`]),
                                                    I.run(() => D(!0), 900);
                                                break;
                                            case sn:
                                            case rn:
                                                if (i !== du) {
                                                    const e = m === sn ? mn.FITTING : mn.FITTING_REMOVE;
                                                    (t.enter = xn[`${N}__enter${e}`]),
                                                        (t.exit = xn[`${N}__exit${e}`]),
                                                        (t.exitActive = xn[`${N}__exitActive${mn.FITTING}`]);
                                                } else
                                                    (t.enterDone = xn[`${N}__enter${mn.FADE}`]),
                                                        (t.exit = xn[`${N}__exit${mn.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return a().cloneElement(e, { classNames: t, timeout: L });
                                    },
                                    [m, L, c, u, _, N, R, s, I, i],
                                ),
                                P = (0, n.useCallback)(
                                    (e) => {
                                        k.run(() => {
                                            (e.className = ''), e.classList.add(xn.base), w(t), T(o);
                                        }, L);
                                    },
                                    [k, L, t, o],
                                ),
                                $ = (0, n.useCallback)(() => {
                                    D(!1), C(!1);
                                }, []);
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    su.Z,
                                    { component: null, childFactory: M },
                                    a().createElement(
                                        ru.Z,
                                        {
                                            key: t,
                                            timeout: L,
                                            classNames: Tn,
                                            onEntered: P,
                                            onExiting: $,
                                            unmountOnExit: !0,
                                        },
                                        a().createElement('div', { className: xn.base }, e),
                                    ),
                                ),
                                O &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(vn, { in: b, actionType: m }),
                                        a().createElement(yn, { inProp: p, maskImage: B }),
                                    ),
                            );
                        },
                    ),
                    kn = (0, _e.Pi)(
                        ({
                            intCD: e,
                            id: u,
                            itemInstalledSetupIdx: t,
                            isMountedMoreThanOne: i,
                            isInstalled: s,
                            isDisabled: r,
                            imageSource: o,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            contextMenuDisabled: d,
                            isSetupSwitching: E,
                            children: m,
                        }) => {
                            const A = le().model.root.get().vehicleCD,
                                F = (0, n.useState)(!0),
                                b = F[0],
                                D = F[1],
                                g = an();
                            (0, n.useEffect)(() => {
                                D(!1), g.run(() => D(!0), 100);
                            }, [A]);
                            const p = (0, n.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: u,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: t,
                                    itemInstalledSetupSlotIdx: u,
                                    isMountedMoreThanOne: i,
                                }),
                                [e, _, u, t, s, i],
                            );
                            return b
                                ? a().createElement(
                                      In,
                                      {
                                          uniqueKey: e,
                                          isEmpty: l,
                                          slotIndex: c,
                                          slotType: _,
                                          imageSource: o,
                                          itemInstalledSetupIndex: t,
                                      },
                                      a().createElement(
                                          nn,
                                          { isEnabled: !(E || d || r || l), args: p },
                                          a().createElement('div', null, m),
                                      ),
                                  )
                                : a().createElement('div', null, m);
                        },
                    ),
                    On = (0, _e.Pi)(
                        ({
                            slotType: e,
                            slotIndex: u,
                            level: t,
                            isSelected: i,
                            isSetupSwitching: s,
                            isSectionSelected: r,
                            onActiveSlotChanged: o,
                            onSlotSelected: l,
                            onActiveSlotRefChanged: c,
                            onSlotClear: _,
                            panelType: d,
                            isDisabled: E = !1,
                            isBorderActive: m,
                            isIncompatible: A = !1,
                            grabberId: F,
                            containerRef: b,
                            activeDragId: D,
                            handleGrabberAction: g,
                            forceLeftUpdate: C,
                            potentialDropId: f,
                            blockOnGrabIds: v,
                            contextMenuDisabled: S,
                            groupIndex: y,
                            sectionIndex: x,
                        }) => {
                            const T = le().model.computes.slots.slot(y, x, u),
                                I = T.imageSource,
                                k = T.isInstalled,
                                O = T.itemInstalledSetupIdx,
                                R = T.isMountedMoreThanOne,
                                N = T.overlayType,
                                L = T.keyName,
                                M = T.categoryImgSource,
                                P = T.withAttention,
                                $ = T.id,
                                H = T.intCD,
                                z = d === p.Setup,
                                G = !B(d),
                                W = !h(d),
                                j = d === p.Compare,
                                U = z && r && G,
                                V = (0, n.useRef)(!1),
                                q = (0, n.useRef)(null),
                                X = -1 === H;
                            (0, n.useEffect)(() => {
                                if (!V.current && r && i)
                                    return me(() => {
                                        o && o(q, e, $), (V.current = !0);
                                    });
                                V.current = !0;
                            }, [$, r, i, o, e]),
                                (0, n.useEffect)(() => {
                                    i && c(q);
                                }, [i, c]);
                            const K = ((e) => {
                                    const u = (0, n.useRef)(-1),
                                        t = (0, n.useCallback)(
                                            (t) => {
                                                if (-1 === u.current) {
                                                    const n = e(t);
                                                    n &&
                                                        (u.current = window.setTimeout(() => {
                                                            u.current = -1;
                                                        }, n));
                                                }
                                            },
                                            [e],
                                        );
                                    return (0, n.useEffect)(() => () => clearTimeout(u.current), []), t;
                                })((0, n.useCallback)(() => (!i && G && !s && l(e, $), 500), [$, G, i, s, l, e])),
                                Y = (0, n.useCallback)(() => {
                                    E || K('');
                                }, [K, E]),
                                Z = (0, n.useCallback)(() => {
                                    W && !i && !D && !E && w.playHighlight();
                                }, [i, D, E, W]);
                            (0, n.useEffect)(() => {
                                f && w.playHighlight();
                            }, [f]);
                            const Q = (0, n.useCallback)(() => {
                                    null == _ || _($, e);
                                }, [$, _, e]),
                                J = z && !k,
                                ee = Boolean(F && f === F),
                                ue = F && (U || j),
                                te = `${e}-slot-${$}`,
                                ne = M && M.length > 0,
                                ae = ne ? { backgroundImage: `url(${M})` } : {},
                                ie = {
                                    id: F,
                                    containerRef: b,
                                    isEnabled: !X,
                                    onClick: Y,
                                    isUpdateAvailable: Boolean(D),
                                    handleAction: g,
                                    forceCenterX: C,
                                    blockOnGrabIds: v,
                                },
                                se = {
                                    isEmpty: X,
                                    intCD: H,
                                    slotType: e,
                                    slotIndex: u,
                                    imageSource: I,
                                    isDisabled: E,
                                    isInstalled: k,
                                    id: $,
                                    itemInstalledSetupIdx: O,
                                    isMountedMoreThanOne: R,
                                    contextMenuDisabled: S,
                                    isSetupSwitching: s,
                                };
                            return a().createElement(
                                'div',
                                { className: qt, onMouseEnter: Z, id: te },
                                (r || j) &&
                                    !k &&
                                    a().createElement(
                                        'div',
                                        { className: Kt },
                                        a().createElement(Vt, { id: `close-${te}`, show: !D, onClick: Q }),
                                    ),
                                a().createElement(
                                    Ht,
                                    { slotType: e, slotId: $, isEnabled: !D, panelType: d },
                                    a().createElement(
                                        'div',
                                        { ref: q },
                                        a().createElement(
                                            ct,
                                            {
                                                activeDragId: D,
                                                slotType: e,
                                                isSelected: i,
                                                isBorderActive: Boolean(m),
                                                panelType: d,
                                                isDisabled: E,
                                                isPotentialDrop: ee,
                                                onClick: ue ? void 0 : Y,
                                            },
                                            G &&
                                                a().createElement(
                                                    'div',
                                                    { className: Xt },
                                                    a().createElement(Lt, { text: L, show: Boolean(r), panelType: d }),
                                                ),
                                            a().createElement(
                                                ot,
                                                { when: Boolean(ue), wrapper: It, withProps: ie },
                                                a().createElement(
                                                    ot,
                                                    { when: G, wrapper: kn, withProps: se },
                                                    a().createElement(gt, {
                                                        imageSource: I,
                                                        isIncompatible: A,
                                                        overlayType: N,
                                                        level: t,
                                                        isTemporary: J,
                                                        withAttention: P,
                                                    }),
                                                ),
                                            ),
                                            ne &&
                                                a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement('span', { className: Zt }),
                                                    a().createElement('span', { className: Qt, style: ae }),
                                                ),
                                            E && a().createElement('div', { className: Yt }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Rn = 'BattleAbilitySlot_base_74',
                    Nn = 'BattleAbilitySlot_rank_01',
                    Ln = ['rank'];
                const Mn = (e) => {
                        let u = e.rank,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Ln);
                        return a().createElement(
                            'div',
                            { className: Rn },
                            a().createElement(On, t),
                            u && a().createElement('div', { className: Nn, style: { backgroundImage: `url(${u})` } }),
                        );
                    },
                    Pn = {
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
                let $n, Hn;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })($n || ($n = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Hn || (Hn = {}));
                const zn = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: i,
                    disabled: s,
                    mixClass: r,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: E,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const F = (0, n.useRef)(null),
                        b = (0, n.useState)(t),
                        D = b[0],
                        g = b[1],
                        p = (0, n.useState)(!1),
                        C = p[0],
                        h = p[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                D && null !== F.current && !F.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [D]),
                        (0, n.useEffect)(() => {
                            g(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: F,
                                className: v()(
                                    Pn.base,
                                    Pn[`base__${i}`],
                                    s && Pn.base__disabled,
                                    u && Pn[`base__${u}`],
                                    D && Pn.base__focus,
                                    C && Pn.base__highlightActive,
                                    r,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== o && S(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    s || (E && E(e), h(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== l && S(l),
                                        d && d(e),
                                        t && (s || (F.current && (F.current.focus(), g(!0)))),
                                        h(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (m && m(e), h(!1));
                                },
                                onClick: function (e) {
                                    s || (A && A(e));
                                },
                            },
                            i !== $n.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Pn.back }),
                                    a().createElement('span', { className: Pn.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: v()(Pn.state, Pn.state__default) },
                                a().createElement('span', { className: Pn.stateDisabled }),
                                a().createElement('span', { className: Pn.stateHighlightHover }),
                                a().createElement('span', { className: Pn.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: Pn.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                zn.defaultProps = { type: $n.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Gn = zn,
                    Wn = {
                        base: 'Specialization_base_ec',
                        base__tiny: 'Specialization_base__tiny_fe',
                        base__small: 'Specialization_base__small_a3',
                        base__medium: 'Specialization_base__medium_85',
                        base__large: 'Specialization_base__large_07',
                        base__huge: 'Specialization_base__huge_33',
                        base__setup: 'Specialization_base__setup_5e',
                        base__correct: 'Specialization_base__correct_4c',
                        glow: 'Specialization_glow_f0',
                        icon: 'Specialization_icon_3a',
                        icon__tiny: 'Specialization_icon__tiny_05',
                        icon__small: 'Specialization_icon__small_cf',
                        icon__medium: 'Specialization_icon__medium_ed',
                        icon__large: 'Specialization_icon__large_98',
                        icon__huge: 'Specialization_icon__huge_f7',
                        specializationWrapper: 'Specialization_specializationWrapper_bf',
                        specializationButton: 'Specialization_specializationButton_45',
                    },
                    jn = ({
                        name: e,
                        isCorrect: u,
                        isSpecializationActive: t = !0,
                        isDynamic: i,
                        mediaSize: s,
                        isClickable: r,
                        onSpecializationClick: o,
                        index: l,
                    }) => {
                        const c = s !== K.None,
                            _ = (0, n.useCallback)(() => {
                                r && t && o && o(l);
                            }, [l, r, t, o]),
                            d = (0, n.useMemo)(() => {
                                let t = '';
                                c && (t = (s === K.Large || s === K.Huge ? K.Large : K.Medium) + '_');
                                const n = `${t}${e}_${u ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, u, s, c]),
                            E = (0, n.useMemo)(
                                () => ({ spec: e, isDyn: i, isClickable: r, tooltip: 'hangarSlotSpec' }),
                                [e, i, r],
                            );
                        if (!d) return null;
                        const m = v()(
                                `specialization-${e}`,
                                Wn.base,
                                c && Wn[`base__${s}`],
                                t && Wn.base__setup,
                                u && Wn.base__correct,
                            ),
                            A = v()(Wn.icon, c && Wn[`icon__${s}`]),
                            F = c ? '' : Wn.specializationWrapper,
                            b = a().createElement(
                                'div',
                                { key: e, className: m },
                                a().createElement('div', { className: Wn.glow }),
                                a().createElement('div', { className: A, style: d }),
                            );
                        return a().createElement(
                            $t,
                            { args: E },
                            r && t
                                ? a().createElement(
                                      Gn,
                                      { size: Hn.small, type: $n.ghost, mixClass: Wn.specializationButton, onClick: _ },
                                      b,
                                  )
                                : a().createElement('div', { className: F }, b),
                        );
                    },
                    Un = 'Specializations_base_ab';
                function Vn() {
                    return (
                        (Vn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Vn.apply(null, arguments)
                    );
                }
                const qn = ({
                        specializations: e,
                        isSpecializationActive: u = !0,
                        isDynamic: t,
                        mediaSize: n = K.None,
                        activeSpecsMask: i,
                        onSpecializationClick: s,
                    }) =>
                        e.length
                            ? a().createElement(
                                  'div',
                                  { className: Un, key: i },
                                  F(e, (e, i) =>
                                      a().createElement(
                                          jn,
                                          Vn({ index: i, key: e.name }, e, {
                                              isSpecializationActive: u,
                                              isDynamic: t,
                                              mediaSize: n,
                                              onSpecializationClick: s,
                                          }),
                                      ),
                                  ),
                              )
                            : null,
                    Xn = 'OptDeviceSlot_base_14',
                    Kn = 'OptDeviceSlot_specializations_c3',
                    Yn = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function Zn() {
                    return (
                        (Zn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Zn.apply(null, arguments)
                    );
                }
                const Qn = (0, _e.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.activeSpecsMask,
                            s = e.isChangeSetupIndex,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Yn);
                        const o = le(),
                            l = o.controls,
                            c = o.model.computes.specializations(u, t, n),
                            _ = c.specializations.length,
                            d = r.panelType === p.Setup || r.panelType === p.Compare,
                            E = !B(r.panelType),
                            m = c.isDynamic;
                        return a().createElement(
                            'div',
                            { className: v()(Xn, _ && !m && !s && 'specializationsSlot') },
                            E &&
                                a().createElement(
                                    'div',
                                    { className: Kn },
                                    a().createElement(qn, {
                                        specializations: c.specializations,
                                        isDynamic: m,
                                        activeSpecsMask: i,
                                        isSpecializationActive: d,
                                        onSpecializationClick: (e) => {
                                            l.specializationSelect({ slotId: r.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            a().createElement(On, Zn({}, r, { groupIndex: u, sectionIndex: t, slotIndex: n })),
                        );
                    }),
                    Jn = {
                        base: 'ToggleCamouflageSlot_base_17',
                        base__grabbing: 'ToggleCamouflageSlot_base__grabbing_79',
                        base__hangar: 'ToggleCamouflageSlot_base__hangar_e7',
                        base__setup: 'ToggleCamouflageSlot_base__setup_44',
                        base__compare: 'ToggleCamouflageSlot_base__compare_0d',
                        base__selected: 'ToggleCamouflageSlot_base__selected_0c',
                        base__dragIn: 'ToggleCamouflageSlot_base__dragIn_68',
                        base__dragInActive: 'ToggleCamouflageSlot_base__dragInActive_b1',
                        base__toggle: 'ToggleCamouflageSlot_base__toggle_fc',
                        base__disabled: 'ToggleCamouflageSlot_base__disabled_1e',
                        image: 'ToggleCamouflageSlot_image_ee',
                        glow: 'ToggleCamouflageSlot_glow_45',
                        toggle: 'ToggleCamouflageSlot_toggle_c2',
                    },
                    ea = ({ id: e, isSelected: u, isLocked: t, onSlotSelected: i, panelType: s }) => {
                        const r = Au,
                            o = (0, n.useCallback)(() => {
                                i(r, e);
                            }, [e, i, r]),
                            l = v()(Jn.base, Jn[`base__${s}`], t && Jn.base__disabled, u && Jn.base__toggle),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            _ = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            ),
                            d = `toggle-camouflage-slot-${e}`;
                        return a().createElement(
                            Ht,
                            { slotType: r, slotId: e, panelType: s },
                            a().createElement(
                                'div',
                                { id: d, className: l, onClick: o, onMouseEnter: w.playHighlight },
                                u && a().createElement('div', { className: Jn.glow }),
                                a().createElement('div', { className: Jn.image, style: c }),
                                a().createElement('div', { className: Jn.toggle, style: _ }),
                            ),
                        );
                    },
                    ua = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function ta() {
                    return (
                        (ta = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ta.apply(null, arguments)
                    );
                }
                const na = (0, _e.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.sectionType,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, ua);
                        const r = le().model,
                            o = r.computes.slots.slot(u, t, n),
                            l = r.ammunitionPanel.get(),
                            c = l.selectedSection,
                            _ = l.selectedSlot,
                            d = (c === i ? _ : -1) === o.id;
                        switch (i) {
                            case 'optDevices': {
                                const e = o;
                                return a().createElement(
                                    Qn,
                                    ta({}, e, s, { groupIndex: u, sectionIndex: t, slotIndex: n, isSelected: d }),
                                );
                            }
                            case Au: {
                                const e = o;
                                return a().createElement(
                                    ea,
                                    ta({}, s, e, { groupIndex: u, sectionIndex: t, slotIndex: n }),
                                );
                            }
                            case Eu: {
                                const e = o;
                                return a().createElement(
                                    Mn,
                                    ta({}, s, e, { groupIndex: u, sectionIndex: t, slotIndex: n, isSelected: d }),
                                );
                            }
                            default:
                                return a().createElement(
                                    On,
                                    ta({}, s, { isSelected: d, groupIndex: u, sectionIndex: t, slotIndex: n }),
                                );
                        }
                    }),
                    aa = 'Slots_base_27',
                    ia = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function sa() {
                    return (
                        (sa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        sa.apply(null, arguments)
                    );
                }
                const ra = (0, _e.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            i = e.sectionType,
                            s = e.onActiveSlotChanged,
                            r = e.isDisabled,
                            o = e.blockOnGrabIds,
                            l = e.isChangeSetupIndex,
                            c = e.setIsExitBlocked,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, ia);
                        const d = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            m = le(),
                            A = m.model,
                            F = m.controls,
                            b = A.computes.slots.length(u, t),
                            D = A.ammunitionPanel.get(),
                            g = D.selectedSection,
                            p = D.selectedSlot,
                            C = D.syncInitiator,
                            h = (0, n.useCallback)(
                                (e, u) => {
                                    F.dragDropSwap({
                                        sectionType: i,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(u[u.length - 1]),
                                    });
                                },
                                [F, i],
                            ),
                            B = g === i,
                            f = i === Eu,
                            S = B ? p : -1,
                            y = `${i}-${b}slots`,
                            x = se({ baseId: y, slotsLength: b, handleSwap: h, setIsExitBlocked: c, syncInitiator: C }),
                            T = x.handleGrabberAction,
                            I = x.dragState,
                            k = x.getForceCenterX;
                        (0, n.useEffect)(() => {
                            B && -1 !== S && d.current && s(d, g, S);
                        }, [s, B, g, S]);
                        const O = (e, u) => {
                                if ((r || w.playClick(), 'number' != typeof u))
                                    return console.warn('selectedSlot is not a number');
                                F.sectionSelect({ selectedSlot: u, selectedSection: e });
                            },
                            R = (e) => {
                                d.current = e ? e.current : null;
                            },
                            N = (e, u) => {
                                F.slotClear({ slotId: e, sectionType: u });
                            };
                        return a().createElement(
                            'div',
                            { id: y, ref: E, className: v()(aa, i) },
                            Re(b, (e) => {
                                const c = !f && b > 1 ? `${y}-${e}` : '';
                                return a().createElement(
                                    n.Fragment,
                                    { key: `slot ${u}-${t}-${e}` },
                                    e > 0 && a().createElement(rt, null),
                                    a().createElement(
                                        na,
                                        sa(
                                            {
                                                groupIndex: u,
                                                sectionIndex: t,
                                                slotIndex: e,
                                                sectionType: i,
                                                isSectionSelected: B,
                                                isDisabled: r,
                                                contextMenuDisabled: f,
                                                slotType: i,
                                                onActiveSlotChanged: s,
                                                onSlotSelected: O,
                                                onActiveSlotRefChanged: R,
                                                onSlotClear: N,
                                                grabberId: c,
                                                containerRef: E,
                                                forceLeftUpdate: k(c),
                                                activeDragId: I.activeDragId,
                                                handleGrabberAction: T,
                                                potentialDropId: I.potentialDropId,
                                                blockOnGrabIds: o,
                                                isSetupSwitching: l,
                                                isChangeSetupIndex: l,
                                            },
                                            _,
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    oa = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'vehicle',
                        'vehicleType',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function la() {
                    return (
                        (la = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        la.apply(null, arguments)
                    );
                }
                const ca = (0, _e.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            i = e.type,
                            s = e.newItemsCount,
                            r = e.panelType,
                            o = e.sectionsIds,
                            l = e.vehicle,
                            c = e.vehicleType,
                            _ = e.isSetupSwitching,
                            d = e.classMix,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, oa);
                        const m = le().model,
                            A = (0, n.useRef)(null),
                            F = m.ammunitionPanel.get(),
                            b = F.selectedSection,
                            D = F.syncInitiator,
                            g = m.computes.slots.length(u, t),
                            C = m.computes.slots.existFilled(u, t),
                            h = ((e, u) => {
                                const t = xu('tutorialModel.triggers.items').filter((t) => {
                                    if (!t) return !1;
                                    const n = t.value,
                                        a = n.triggers.filter((e) => e.value === u);
                                    return n.componentId === e && a.length > 0;
                                });
                                return 0 === t.length
                                    ? null
                                    : window.tutorialModel.foundComponents.items.some((u) => u.value.componentId === e)
                                      ? {
                                            trigger: t[0].value,
                                            runTrigger: (t) => {
                                                window.tutorialModel.onTriggerActivated({
                                                    componentId: e,
                                                    triggerType: u,
                                                    state: t,
                                                });
                                            },
                                        }
                                      : null;
                            })('AmmunitionPanelBattleAbilities', Iu);
                        (0, n.useEffect)(() => {
                            null == h || h.runTrigger(!0);
                        }, [h]);
                        const B = b === i,
                            f = ie(i, o),
                            S = f.selfId,
                            w = f.blockOnGrabIds,
                            y = ((l && l.length > 0) || (c && c.length > 0)) && r !== p.Battle && r !== p.Respawn,
                            x = (0, n.useMemo)(
                                () => ({
                                    icon: a().createElement('span', {
                                        className: Vu,
                                        style: {
                                            backgroundImage: c
                                                ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(c)})`
                                                : '',
                                        },
                                    }),
                                    vehicle: l,
                                }),
                                [l, c],
                            ),
                            T = g > 0 && r !== p.Compare && r !== p.Battle && r !== p.Respawn,
                            I = R.strings.tank_setup.section.$dyn(i);
                        if ('string' != typeof I)
                            throw new Error(`No top label text for section type ${i} or it's not a string`);
                        return a().createElement(
                            'div',
                            {
                                id: _ ? Hu : S,
                                ref: A,
                                className: v()(
                                    zu,
                                    d,
                                    B && 'sectionSelected',
                                    g > 1 && 'multiSlot',
                                    D >= 0 && C && 'existFilledSlots',
                                ),
                            },
                            y &&
                                a().createElement(
                                    it,
                                    { className: ju },
                                    a().createElement(Cu, {
                                        classMix: Uu,
                                        text: R.strings.tank_setup.categories.reserves.config(),
                                        binding: x,
                                    }),
                                ),
                            T &&
                                a().createElement(
                                    'div',
                                    { className: Gu },
                                    a().createElement($u, { text: I, parentRef: A, show: !B, panelType: r }),
                                ),
                            a().createElement(
                                ra,
                                la(
                                    { groupIndex: u, sectionIndex: t, sectionType: i, panelType: r, blockOnGrabIds: w },
                                    E,
                                ),
                            ),
                            Boolean(s) &&
                                a().createElement(
                                    'div',
                                    { className: Wu },
                                    a().createElement(gu, { value: s, size: 'small', fadeInAnimation: !0 }),
                                ),
                        );
                    }),
                    _a = 'Count_base_e4',
                    da = 'Count_base__zero_64',
                    Ea = ({ count: e }) => {
                        const u = v()(_a, !e && da);
                        return a().createElement('div', { className: u }, e);
                    },
                    ma = {
                        base: 'ShellsSlot_base_05',
                        base__grabbing: 'ShellsSlot_base__grabbing_2f',
                        shell: 'ShellsSlot_shell_ab',
                        shell__grabbing: 'ShellsSlot_shell__grabbing_98',
                        shell__active: 'ShellsSlot_shell__active_7e',
                        shell__potential: 'ShellsSlot_shell__potential_30',
                        label: 'ShellsSlot_label_da',
                        image: 'ShellsSlot_image_3f',
                        infinity: 'ShellsSlot_infinity_19',
                    },
                    Aa = ({
                        id: e,
                        itemInstalledSetupIdx: u,
                        isMountedMoreThanOne: t,
                        imageSource: i,
                        count: s,
                        isInfinity: r,
                        isSelected: o,
                        keyName: l,
                        panelType: c,
                        intCD: _,
                        slotIndex: d,
                        grabberId: E,
                        isSetupSwitching: m,
                        containerRef: A,
                        activeDragId: F,
                        handleGrabberAction: b,
                        forceLeftUpdate: D,
                        potentialDropId: g,
                        blockOnGrabIds: C,
                        shellState: h,
                        isDisabled: f,
                    }) => {
                        const S = !B(c),
                            w = (0, n.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            y = E && E === g,
                            x = E && E === F,
                            T = (0, n.useMemo)(() => {
                                const n = { slotType: du, slotId: e, fieldType: 1, intCD: _ };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: u,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: t,
                                    }),
                                ];
                            }, [_, e, u, t]),
                            I = T[0],
                            k = T[1],
                            O = (0, n.useMemo)(
                                () => ({
                                    id: E,
                                    containerRef: A,
                                    isEnabled: Boolean(E) && o,
                                    isUpdateAvailable: Boolean(F),
                                    handleAction: b,
                                    forceCenterX: D,
                                    blockOnGrabIds: C,
                                }),
                                [F, C, A, D, E, b, o],
                            ),
                            N = (0, n.useMemo)(
                                () => ({ slotIndex: d, uniqueKey: _, slotType: du, imageSource: null }),
                                [_, d],
                            );
                        return a().createElement(
                            nn,
                            { isEnabled: S && !m && !f, args: k },
                            a().createElement(
                                $t,
                                {
                                    args: I,
                                    decoratorId: [p.Battle, p.Prebattle].includes(c)
                                        ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                        : 0,
                                    isEnabled: !F,
                                },
                                a().createElement(
                                    'div',
                                    { id: `shell-slot-${d}`, className: ma.base },
                                    l &&
                                        a().createElement(
                                            'div',
                                            { className: ma.label },
                                            a().createElement(Lt, {
                                                text: l,
                                                show: o || c === p.Battle || c === p.Respawn,
                                                shellState: h,
                                                panelType: c,
                                                className: v()(
                                                    0 === d && ma.topLabel__first,
                                                    2 === d && ma.topLabel__last,
                                                ),
                                            }),
                                        ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: v()(
                                                ma.shell,
                                                !F && S && !f && ma.shell__active,
                                                x && ma.shell__grabbing,
                                                !x && y && ma.shell__potential,
                                            ),
                                        },
                                        a().createElement(
                                            ot,
                                            { when: S, wrapper: It, withProps: O },
                                            a().createElement(
                                                ot,
                                                { when: S, wrapper: In, withProps: N },
                                                a().createElement('div', { className: ma.image, style: w }),
                                                !r && a().createElement(Ea, { count: s }),
                                                r && a().createElement('div', { className: ma.infinity }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Fa = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    ba = ({ id: e, isSelected: u, imageSource: t, onSlotSelected: i, panelType: s }) => {
                        const r = (0, n.useCallback)(() => {
                                !u && i(e);
                            }, [e, u, i]),
                            o = v()(Fa.slot, !u && Fa.slot__active, Fa.slot__compare),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            );
                        return a().createElement(
                            Ht,
                            { slotType: mu, slotId: e, panelType: s },
                            a().createElement(
                                'div',
                                { className: Fa.base },
                                a().createElement(
                                    'div',
                                    { className: o, onClick: r, id: `shell-slot-${e}` },
                                    u && a().createElement('div', { className: Fa.glow }),
                                    a().createElement('div', { className: Fa.image, style: l }),
                                    a().createElement('div', { className: Fa.toggle, style: c }),
                                ),
                            ),
                        );
                    },
                    Da = 'ShellContainer_base_46',
                    ga = 'ShellContainer_base__compressed_13',
                    pa = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                        'panelType',
                    ];
                function Ca() {
                    return (
                        (Ca = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ca.apply(null, arguments)
                    );
                }
                const ha = (0, _e.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.isCompare,
                            s = e.handleSlotSelected,
                            r = e.baseId,
                            o = e.grabber,
                            l = e.panelType,
                            c = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, pa);
                        const _ = o.handleGrabberAction,
                            d = o.dragState,
                            E = o.getForceCenterX,
                            m = le().model,
                            A = m.computes.slots.length(u, t),
                            F = m.computes.slots.slot(u, t, n),
                            b = !i && A > 1 ? `${r}-${F.id}` : '';
                        return C(F)
                            ? null
                            : a().createElement(
                                  'div',
                                  { key: F.id, className: v()(Da, !i && 0 !== n && ga) },
                                  i
                                      ? a().createElement(ba, Ca({}, F, { onSlotSelected: s, panelType: l }))
                                      : a().createElement(
                                            Aa,
                                            Ca(
                                                {},
                                                F,
                                                {
                                                    slotIndex: n,
                                                    grabberId: b,
                                                    forceLeftUpdate: E(b),
                                                    activeDragId: d.activeDragId,
                                                    handleGrabberAction: _,
                                                    potentialDropId: d.potentialDropId,
                                                    panelType: l,
                                                },
                                                c,
                                            ),
                                        ),
                              );
                    }),
                    Ba = 'Shells_base_f9',
                    fa = (0, _e.Pi)(
                        ({
                            panelType: e,
                            onSelected: u,
                            isCompare: t,
                            isSelected: i,
                            syncInitiator: s,
                            blockOnGrabIds: r,
                            isDisabled: o,
                            isSetupSwitching: l,
                            setIsExitBlocked: c,
                            groupIndex: _,
                            sectionIndex: d,
                        }) => {
                            const E = le(),
                                m = E.model,
                                A = E.controls,
                                F = m.computes.slots.length(_, d),
                                b = (0, n.useRef)(!1),
                                D = (0, n.useRef)(null),
                                g = t ? mu : du,
                                C = `${g}-${F}shells`,
                                B = !h(e),
                                f = (0, n.useCallback)(
                                    (e) => {
                                        A.sectionSelect({ selectedSlot: e, selectedSection: g }), B && w.playClick();
                                    },
                                    [A, g, B],
                                ),
                                v = (0, n.useCallback)(() => {
                                    i || t || o || l || f(0);
                                }, [i, t, l, o, f]),
                                S = (0, n.useCallback)(
                                    (e, u) => {
                                        A.dragDropSwap({
                                            sectionType: g,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(u[u.length - 1]),
                                        });
                                    },
                                    [A, g],
                                ),
                                y = se({
                                    baseId: C,
                                    slotsLength: F,
                                    handleSwap: S,
                                    setIsExitBlocked: c,
                                    syncInitiator: s,
                                });
                            return (
                                (0, n.useEffect)(
                                    () =>
                                        me(() => {
                                            b.current = !0;
                                        }),
                                    [],
                                ),
                                (0, n.useEffect)(() => {
                                    if (i && e === p.Setup) {
                                        if (!b.current)
                                            return me(() => {
                                                u();
                                            });
                                        u();
                                    }
                                }, [i, e, u]),
                                a().createElement(
                                    'div',
                                    {
                                        id: C,
                                        ref: D,
                                        className: Ba,
                                        onClick: v,
                                        onMouseEnter: () => {
                                            !o && B && w.playHighlight();
                                        },
                                    },
                                    Re(F, (u) =>
                                        a().createElement(ha, {
                                            key: `${_} ${d} ${u}`,
                                            groupIndex: _,
                                            sectionIndex: d,
                                            slotIndex: u,
                                            isCompare: t,
                                            containerRef: D,
                                            handleSlotSelected: f,
                                            panelType: e,
                                            blockOnGrabIds: r,
                                            isSelected: i,
                                            isDisabled: o,
                                            isSetupSwitching: l,
                                            grabber: y,
                                            baseId: C,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    va = {
                        base: 'ShellsSection_base_08',
                        base__grabbing: 'ShellsSection_base__grabbing_2e',
                        base__hangar: 'ShellsSection_base__hangar_24',
                        base__setup: 'ShellsSection_base__setup_c8',
                        base__compare: 'ShellsSection_base__compare_e3',
                        base__selected: 'ShellsSection_base__selected_fd',
                        base__dragIn: 'ShellsSection_base__dragIn_39',
                        base__dragInActive: 'ShellsSection_base__dragInActive_96',
                        base__toggle: 'ShellsSection_base__toggle_bd',
                        base__disabled: 'ShellsSection_base__disabled_7e',
                        label: 'ShellsSection_label_38',
                        attention: 'ShellsSection_attention_7e',
                        blinking: 'ShellsSection_blinking_57',
                        border: 'ShellsSection_border_0d',
                        border__double: 'ShellsSection_border__double_a1',
                        border__triple: 'ShellsSection_border__triple_f2',
                        counter: 'ShellsSection_counter_74',
                        disabled: 'ShellsSection_disabled_c2',
                    },
                    Sa = [p.Hangar, p.Battle, p.Prebattle, p.Respawn],
                    wa = (0, _e.Pi)(
                        ({
                            type: e,
                            sectionsIds: u,
                            panelType: t,
                            onActiveSlotChanged: i,
                            isDisabled: s,
                            isBorderActive: r,
                            classMix: o,
                            isSetupSwitching: l,
                            setIsExitBlocked: c,
                            newItemsCount: _,
                            groupIndex: d,
                            sectionIndex: E,
                        }) => {
                            const m = le().model,
                                A = m.ammunitionPanel.get(),
                                F = A.ammoNotFull,
                                b = A.selectedSection,
                                D = A.syncInitiator,
                                g = (0, n.useRef)(null),
                                C = t === p.Compare,
                                h = t === p.Prebattle && e === du,
                                B = b === e || h,
                                f = (0, n.useCallback)(() => {
                                    i(g, b, 0);
                                }, [i, b]),
                                S = ie(e, u),
                                w = S.selfId,
                                y = S.blockOnGrabIds,
                                x = ((e) => Sa.includes(e))(t) && !s && F,
                                T = m.computes.slots.filteredLength(d, E),
                                I = !C && t !== p.Battle && t !== p.Respawn;
                            return a().createElement(
                                'div',
                                {
                                    id: l ? Hu : w,
                                    className: v()(
                                        va.base,
                                        o,
                                        va[`base__${t}`],
                                        !r && B && va.base__selected,
                                        C && va.base__compare,
                                        s && va.base__disabled,
                                    ),
                                    ref: g,
                                },
                                x && a().createElement('div', { className: va.attention }),
                                I &&
                                    a().createElement(
                                        'div',
                                        { className: va.label },
                                        a().createElement($u, {
                                            text: R.strings.tank_setup.section.shells(),
                                            parentRef: g,
                                            show: !B,
                                            panelType: t,
                                        }),
                                    ),
                                x &&
                                    a().createElement('div', {
                                        className: v()(
                                            va.border,
                                            2 === T && va.border__double,
                                            3 === T && va.border__triple,
                                        ),
                                    }),
                                a().createElement(fa, {
                                    groupIndex: d,
                                    sectionIndex: E,
                                    panelType: t,
                                    onSelected: f,
                                    isSelected: B,
                                    isCompare: C,
                                    syncInitiator: D,
                                    blockOnGrabIds: y,
                                    isDisabled: s,
                                    isSetupSwitching: l,
                                    setIsExitBlocked: c,
                                }),
                                Boolean(_) &&
                                    a().createElement(
                                        'div',
                                        { className: va.counter },
                                        a().createElement(gu, { value: _, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                s && a().createElement('div', { className: va.disabled }),
                            );
                        },
                    ),
                    ya = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function xa() {
                    return (
                        (xa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        xa.apply(null, arguments)
                    );
                }
                const Ta = (0, _e.Pi)(
                        ({
                            groupIndex: e,
                            panelType: u,
                            isDisabled: t = !1,
                            onActiveSlotChanged: n,
                            isBorderActive: i,
                            isChangeSetupIndex: s,
                            setIsExitBlocked: r,
                        }) => {
                            const o = le().model,
                                l = Se(['section'], ya),
                                c = o.computes.sections.IDs(e),
                                _ = {
                                    panelType: u,
                                    isDisabled: t,
                                    onActiveSlotChanged: n,
                                    isBorderActive: i,
                                    sectionsIds: c,
                                    isChangeSetupIndex: s,
                                    setIsExitBlocked: r,
                                };
                            return a().createElement(
                                'div',
                                { className: ya.base },
                                Re(o.computes.sections.length(e), (t) => {
                                    const n = o.computes.sections.section(e, t);
                                    if (!n.slots || !n.slots.length) return null;
                                    const i = v()(
                                        l.section,
                                        0 !== t && B(u) && ya.section__battle,
                                        0 === t && ya.section__first,
                                    );
                                    if (n.type === du || n.type === mu) {
                                        const u = n;
                                        return a().createElement(
                                            wa,
                                            xa({}, u, _, {
                                                groupIndex: e,
                                                sectionIndex: t,
                                                isSetupSwitching: s,
                                                key: `${n.name}${e}${n.slots.length}`,
                                                classMix: i,
                                            }),
                                        );
                                    }
                                    return a().createElement(
                                        ca,
                                        xa({}, n, _, {
                                            groupIndex: e,
                                            sectionIndex: t,
                                            isSetupSwitching: s,
                                            key: `${n.name}${e}${n.slots.length}`,
                                            classMix: i,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    Ia = 'KeyboardKey_base_57',
                    ka = 'KeyboardKey_back_43',
                    Oa = a().memo(({ text: e }) =>
                        a().createElement('div', { className: Ia }, a().createElement('div', { className: ka }, e)),
                    ),
                    Ra = 'SetupSwitchHotkey_base_4c',
                    Na = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    La = 'SetupSwitchHotkey_plusWrapper_f0',
                    Ma = 'SetupSwitchHotkey_plus_f0',
                    Pa = 'SetupSwitchHotkey_plus__horizontal_e0',
                    $a = 'SetupSwitchHotkey_plus__vertical_5b',
                    Ha = a().memo(({ hotKeys: e }) =>
                        a().createElement(
                            'div',
                            { className: Ra },
                            e.map((e, u) => {
                                if (!e) return null;
                                const t = e.value;
                                return 0 === u
                                    ? a().createElement(Oa, { key: u, text: t })
                                    : a().createElement(
                                          'div',
                                          { key: u, className: Na },
                                          a().createElement(
                                              'div',
                                              { className: La },
                                              a().createElement('div', { className: `${Ma} ${Pa}` }),
                                              a().createElement('div', { className: `${Ma} ${$a}` }),
                                          ),
                                          a().createElement(Oa, { text: t }),
                                      );
                            }),
                        ),
                    ),
                    za = {
                        base: 'Group_base_70',
                        wrapper: 'Group_wrapper_07',
                        switch: 'Group_switch_ff',
                        switch__battle: 'Group_switch__battle_c0',
                        switch__small: 'Group_switch__small_5e',
                        switch__extraSmall: 'Group_switch__extraSmall_ec',
                        prebattleSwitchIndicator: 'Group_prebattleSwitchIndicator_2e',
                        hint: 'Group_hint_99',
                        hint__disabled: 'Group_hint__disabled_6a',
                    };
                function Ga() {
                    return (
                        (Ga = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ga.apply(null, arguments)
                    );
                }
                const Wa = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    ja = (e) => e.setupSelector.hotKeys,
                    Ua = (0, _e.Pi)(
                        ({
                            groupIndex: e,
                            sectionProps: u,
                            isSetupSwitching: t,
                            setSetupSwitching: n,
                            handleSetupSwitching: i,
                        }) => {
                            const s = Se(['switch'], za),
                                r = le().model,
                                o = r.root.get().isDisabled,
                                l = r.computes.groups.group(e);
                            return a().createElement(
                                'div',
                                { key: l.groupId, className: za.base },
                                a().createElement(
                                    'div',
                                    { className: za.wrapper },
                                    a().createElement(
                                        _u,
                                        ((e, u) => ({ index: e.currentIndex, setSetupSwitching: u }))(l, n),
                                        a().createElement(Ta, Ga({}, u, { groupIndex: e, isChangeSetupIndex: t })),
                                    ),
                                    l.setupSelector.isSwitchEnabled &&
                                        a().createElement(
                                            'div',
                                            { className: v()(s.switch, h(u.panelType) && za.switch__battle) },
                                            a().createElement(iu, {
                                                states: l.setupSelector.states,
                                                onClick: i,
                                                totalCount: l.totalCount,
                                                currentIndex: l.currentIndex,
                                                groupId: l.groupId,
                                                isDisabled: u.isDisabled,
                                            }),
                                            l.setupSelector.isPrebattleSwitchDisabled &&
                                                a().createElement(
                                                    We,
                                                    {
                                                        header: Wa.title(),
                                                        body: String(Wa.desc.$dyn(`c_${l.groupId}`)),
                                                    },
                                                    a().createElement('div', {
                                                        className: za.prebattleSwitchIndicator,
                                                    }),
                                                ),
                                        ),
                                ),
                                ((c = l),
                                ((_ = u.panelType) === p.Battle || _ === p.Respawn) &&
                                    c.setupSelector.isSwitchEnabled &&
                                    ja(c) &&
                                    a().createElement(
                                        'div',
                                        { className: v()(za.hint, o && za.hint__disabled) },
                                        a().createElement(Ha, { hotKeys: ja(l) }),
                                    )),
                            );
                            var c, _;
                        },
                    ),
                    Va = 'Groups_base_de',
                    qa = (0, _e.Pi)(
                        ({ sectionProps: e, isSetupSwitching: u, isReady: t, setSetupSwitching: i, children: s }) => {
                            const r = le(),
                                o = r.model,
                                l = r.controls,
                                c = o.vehicleInfo.get(),
                                _ = l.changeSetupIndex,
                                d = null == c ? void 0 : c.vehicleName;
                            (0, n.useEffect)(() => {
                                (e.panelType !== p.Hangar && e.panelType !== p.Setup) || !t || i(!1);
                            }, [t, e.panelType, i]),
                                (0, n.useEffect)(() => {
                                    e.panelType === p.Respawn && i(!1);
                                }, [d, e.panelType, i]);
                            const E = (0, n.useCallback)(
                                (u) => {
                                    e.panelType === p.Respawn && i(!0), _(u);
                                },
                                [_, e.panelType, i],
                            );
                            return a().createElement(
                                'div',
                                { className: Va },
                                Re(o.computes.groups.length(), (t) =>
                                    a().createElement(Ua, {
                                        key: `group-${t}`,
                                        sectionProps: e,
                                        groupIndex: t,
                                        isSetupSwitching: u,
                                        setSetupSwitching: i,
                                        handleSetupSwitching: E,
                                    }),
                                ),
                                s,
                            );
                        },
                    );
                function Xa() {
                    return (
                        (Xa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Xa.apply(null, arguments)
                    );
                }
                const Ka = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(We, u, n);
                        const i = u.contentId;
                        return i ? a().createElement($e, Xa({}, u, { contentId: i }), n) : a().createElement($t, u, n);
                    },
                    Ya = 'RoleSkillSlot_base_c4',
                    Za = 'RoleSkillSlot_icon_79',
                    Qa = ({ roleSkill: e, tooltipId: u, tooltipHeader: t, tooltipBody: i, className: s }) => {
                        const r = (0, n.useMemo)(
                            () => ({
                                args: { tooltipId: u, roleSkill: e, header: t, body: i, hasHtmlContent: !0 },
                                header: t,
                                body: i,
                                ignoreShowDelay: !0,
                            }),
                            [e, t, i, u],
                        );
                        return a().createElement(
                            Ka,
                            { tooltipArgs: r, className: v()(Ya, s) },
                            a().createElement('div', {
                                className: Za,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    Ja = 'SlotGlow_base_40',
                    ei = 'SlotGlow_glow_a9',
                    ui = 'SlotGlow_glow__initialized_8d',
                    ti = 'SlotGlow_glow__shown_f2',
                    ni = 'SlotGlow_glow__hidden_94',
                    ai = (0, n.memo)(({ slotOffset: e, slotWidth: u, isAnimationRunning: t }) => {
                        const i = (0, n.useState)({ offset: e, slotWidth: u }),
                            s = i[0],
                            r = i[1],
                            o = (0, n.useRef)({ initialized: !1, offset: e, slotWidth: u });
                        (0, n.useEffect)(() => {
                            let t = o.current.initialized;
                            !t && e && ((t = !0), r({ offset: e, slotWidth: u })),
                                (o.current = { initialized: t, offset: e, slotWidth: u });
                        }, [e, u]),
                            (0, n.useEffect)(() => {
                                t || r(o.current);
                            }, [t]);
                        const c = (0, n.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${l.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            _ = !t && s.offset === o.current.offset,
                            d = v()(ei, o.current.initialized && ui, _ ? ti : ni);
                        return a().createElement(
                            'div',
                            { className: Ja },
                            a().createElement('div', { className: d, style: c }),
                        );
                    }),
                    ii = (0, _e.Pi)(
                        ({
                            show: e = !0,
                            isReady: u = !0,
                            panelType: t,
                            isDisabled: i = !1,
                            onResize: s,
                            setIsExitBlocked: r,
                        }) => {
                            const o = le(),
                                l = o.model,
                                c = o.controls,
                                _ = l.ammunitionPanel.get(),
                                d = _.isSetupSwitchInProgress,
                                E = _.syncInitiator,
                                m = l.roleSkillSlot.get(),
                                A = (0, n.useState)(!1),
                                F = A[0],
                                b = A[1],
                                D = (0, n.useRef)(!1),
                                g = (0, n.useState)({ slotWidth: 0, slotOffset: 0 }),
                                C = g[0],
                                h = g[1],
                                B = (0, n.useState)(!1),
                                f = B[0],
                                S = B[1],
                                w = (0, n.useRef)(null),
                                y = (0, n.useContext)(Ee),
                                x = (0, n.useRef)({
                                    element: null,
                                    generation: 0,
                                    slotIndex: null,
                                    sectionIndex: null,
                                }),
                                T = (0, n.useCallback)(
                                    (e, u) => {
                                        if (F || d || t !== p.Hangar) return;
                                        const n = u || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                        c.sectionResized(Object.assign({ sectionType: e }, n)),
                                            y && (y.freeze(), y.resize());
                                    },
                                    [F, d, t, c, y],
                                ),
                                I = (0, n.useCallback)(
                                    (e) => {
                                        T('main', e);
                                    },
                                    [T],
                                );
                            we(w, I, !0, [E]), (0, n.useEffect)(() => () => I(), [I]);
                            const k = (0, n.useCallback)(() => {
                                    S(!1);
                                }, []),
                                O = (0, n.useCallback)(() => {
                                    if (x.current.element && w.current) {
                                        const e = x.current.element.getBoundingClientRect(),
                                            u = w.current.getBoundingClientRect();
                                        h({ slotWidth: e.width, slotOffset: e.left - u.left + 0.5 * e.width });
                                    }
                                }, []),
                                R = (0, n.useCallback)(
                                    (e, u, t) => {
                                        if (e.current && w.current) {
                                            const n = ((e, u, t) =>
                                                e !== t.current.slotIndex || u !== t.current.sectionIndex)(t, u, x);
                                            (x.current.element = e.current),
                                                (x.current.slotIndex = t),
                                                (x.current.sectionIndex = u),
                                                D.current && n ? S(!0) : (D.current = !0),
                                                x.current.generation && O();
                                        }
                                    },
                                    [O],
                                ),
                                N = (0, n.useCallback)(
                                    () =>
                                        me(() => {
                                            (x.current.generation += 1), O();
                                        }),
                                    [x, O],
                                );
                            (0, n.useEffect)(() => me(N), [N]),
                                (0, n.useEffect)(
                                    () => (
                                        engine.on('clientResized', N),
                                        () => {
                                            engine.off('clientResized', N);
                                        }
                                    ),
                                    [N],
                                );
                            const L = C.slotWidth,
                                M = C.slotOffset,
                                P = v()(ye.base, !u && ye.base__locked, !e && ye.base__hidden, i && ye.base__disabled),
                                $ = v()(ye.border, !f && ye.border__hidden),
                                H = t === p.Setup || t === p.Compare,
                                z = {
                                    panelType: t,
                                    isDisabled: i,
                                    onActiveSlotChanged: R,
                                    isBorderActive: f,
                                    setIsExitBlocked: r,
                                };
                            (0, n.useEffect)(() => {
                                null == s || s();
                            }, [s, m.roleSkill]);
                            const G = Se(['roleSkillSlot'], ye);
                            return a().createElement(
                                'div',
                                { ref: w, className: P },
                                H &&
                                    a().createElement(ai, {
                                        key: x.current.generation,
                                        slotOffset: M,
                                        slotWidth: L,
                                        isAnimationRunning: f,
                                    }),
                                a().createElement(
                                    qa,
                                    { isSetupSwitching: d || F, sectionProps: z, isReady: u, setSetupSwitching: b },
                                    m.roleSkill &&
                                        a().createElement(Qa, {
                                            roleSkill: m.roleSkill,
                                            tooltipId: m.tooltipId,
                                            tooltipHeader: m.tooltipHeader,
                                            tooltipBody: m.tooltipBody,
                                            className: v()(
                                                ye.roleSkillSlot,
                                                ye[`roleSkillSlot__${t}`],
                                                G.roleSkillSlot,
                                            ),
                                        }),
                                ),
                                H &&
                                    a().createElement(
                                        'div',
                                        { className: $ },
                                        a().createElement(Oe, { slotWidth: L, slotOffset: M, onAnimationEnd: k }),
                                    ),
                            );
                        },
                    ),
                    si = 'Content_base_1a',
                    ri = (0, _e.Pi)(() => {
                        const e = le(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            i = n.isDisabled,
                            s = n.isReady,
                            r = t.escKeyDown;
                        return (
                            M(O.n.ESCAPE, r),
                            a().createElement(
                                'div',
                                { className: si },
                                a().createElement(ii, { panelType: p.Respawn, isDisabled: i, isReady: s }),
                            )
                        );
                    });
                var oi = t(8613);
                Date.now(), oi.Ew.getRegionalDateTime, oi.Ew.getFormattedDateTime;
                N.Sw.instance;
                const li = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ci = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const _i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    di = (e) =>
                        _i
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = ci.length - 1; t >= 0; t--)
                                      for (; e >= ci[t]; ) (u += li[t]), (e -= ci[t]);
                                  return u;
                              })(e),
                    Ei = (e, u) => e.split(',').includes(u),
                    mi = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__extraSmall: 'TankName_type__extraSmall_80',
                        type__medium: 'TankName_type__medium_ff',
                        type__big: 'TankName_type__big_9a',
                        type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                        type__eliteMedium: 'TankName_type__eliteMedium_10',
                        type__eliteBig: 'TankName_type__eliteBig_ac',
                        name: 'TankName_name_56',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let Ai, Fi;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Ai || (Ai = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(Fi || (Fi = {}));
                const bi = ({
                        isElite: e,
                        vehicleName: u,
                        vehicleShortName: t,
                        vehicleType: n,
                        vehicleLvl: i,
                        tags: s = '',
                        size: r = Ai.extraSmall,
                        type: o = Fi.colored,
                        className: l,
                        classNames: c,
                        isShortName: _ = !1,
                    }) => {
                        const d = `${((E = n), E.replace(/-/g, '_'))}${e ? '_elite' : ''}`;
                        var E;
                        const m = R.images.gui.maps.icons.vehicleTypes.big.$dyn(d);
                        return a().createElement(
                            'div',
                            { className: v()(mi.base, mi[`base__size${De(r)}`], mi[`base__type${De(o)}`], l) },
                            a().createElement('div', { className: v()(mi.level, null == c ? void 0 : c.level) }, di(i)),
                            a().createElement('div', {
                                className: v()(
                                    mi.type,
                                    e && mi[`type__elite${De(r)}`],
                                    mi[`type__${r}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: n ? { backgroundImage: `url(${m})` } : void 0,
                            }),
                            Ei(s, 'premiumIGR') && a().createElement('div', { className: mi.premiumIGR }),
                            a().createElement(
                                'div',
                                { className: v()(mi.name, null == c ? void 0 : c.name) },
                                _ ? t : u,
                            ),
                        );
                    },
                    Di = 'Header_base_bc';
                function gi() {
                    return (
                        (gi = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        gi.apply(null, arguments)
                    );
                }
                const pi = () => {
                        const e = xu('model.vehicleInfo');
                        return a().createElement(
                            'div',
                            { className: Di },
                            a().createElement(bi, gi({}, e, { size: Ai.medium, type: Fi.white })),
                        );
                    },
                    Ci = () =>
                        a().createElement(
                            'div',
                            { className: ce },
                            a().createElement(oe, null, a().createElement(pi, null), a().createElement(ri, null)),
                        );
                engine.whenReady.then(() => {
                    s().render(a().createElement(Ci, null), document.getElementById('root'));
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
                    for (var [u, t, n] = deferred[o], i = !0, s = 0; s < u.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
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
        (__webpack_require__.j = 876),
        (() => {
            var e = { 876: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [i, s, r] = t,
                        o = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (r) var l = r(__webpack_require__);
                    }
                    for (u && u(t); o < i.length; o++)
                        (a = i[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [532], () => __webpack_require__(8572));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
