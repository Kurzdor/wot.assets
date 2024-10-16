(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, u, t) => {
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => i, on: () => s, onResize: () => a, onScaleUpdated: () => o });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    i = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${u}`,
                                            o = l[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            n(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(a, s),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
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
                                e.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, r.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
                function a(e = 'px') {
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
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => n });
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
                t.d(u, { O: () => a });
                var n = t(5959),
                    r = t(514);
                const a = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => o });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    o = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => r });
                var n = t(2472);
                const r = {
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => h,
                        getScale: () => D,
                        getSize: () => _,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => g,
                        isFocused: () => f,
                        pxToRem: () => C,
                        remToPx: () => p,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => k,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    o = t(8566);
                const s = 15;
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: p(u.x), y: p(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function g() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function h() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => a });
                const n = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    a = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                let n, r;
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
                    })(r || (r = {}));
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => a });
                var n = t(3138);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                r.__instance = void 0;
                const a = r;
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
                t.d(u, { c1: () => v, Sw: () => a.Z, B0: () => s, c9: () => B, ry: () => C, Eu: () => p });
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
                const r = n;
                var a = t(1358),
                    o = t(8613);
                let s;
                var i;
                ((i = s || (s = {}))[(i.UNDEFINED = 0)] = 'UNDEFINED'),
                    (i[(i.TOOLTIP = 1)] = 'TOOLTIP'),
                    (i[(i.POP_OVER = 2)] = 'POP_OVER'),
                    (i[(i.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (i[(i.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (i[(i.MOVE = 16)] = 'MOVE'),
                    (i[(i.CLOSE = 32)] = 'CLOSE'),
                    (i[(i.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    m = t(3138);
                const A = ['args'];
                function F(e, u, t, n, r, a, o) {
                    try {
                        var s = e[a](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function o(e) {
                                            F(a, n, r, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(a, n, r, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    f = () => B(s.CLOSE),
                    b = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var g = t(7572);
                const v = r.instance,
                    h = {
                        DataTracker: a.Z,
                        ViewModel: g.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => B(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => B(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                E = i.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            B(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, f);
                        },
                        handleViewEvent: B,
                        onBindingsReady: C,
                        onLayoutReady: p,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = h;
            },
            8613: (e, u, t) => {
                t.d(u, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            3487: (e, u, t) => {
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => lu,
                        Bar: () => ou,
                        DefaultScroll: () => iu,
                        Direction: () => Xe,
                        defaultSettings: () => Ze,
                        useHorizontalScrollApi: () => Je,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => fu, Bar: () => Cu, Default: () => Bu, useVerticalScrollApi: () => cu });
                var a = t(6483),
                    o = t.n(a);
                const s = (e = 1) => {
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
                };
                var i = t(9916),
                    l = t(6179),
                    c = t.n(l);
                const d = [
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
                function E(e) {
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
                const _ = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: i.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    m = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            a = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            c = e.ignoreShowDelay,
                            m = void 0 !== c && c,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            D = e.decoratorId,
                            C = void 0 === D ? 0 : D,
                            p = e.isEnabled,
                            B = void 0 === p || p,
                            f = e.targetId,
                            b = void 0 === f ? 0 : f,
                            g = e.onShow,
                            v = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, d);
                        const w = (0, l.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, l.useMemo)(() => b || s().resId, [b]),
                            k = (0, l.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (_(t, C, { isMouseEvent: !0, on: !0, arguments: E(n) }, y),
                                    g && g(),
                                    (w.current.isVisible = !0));
                            }, [t, C, n, y, g]),
                            N = (0, l.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        _(t, C, { on: !1 }, y),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, C, y, v]),
                            T = (0, l.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && N();
                                    }, 200)));
                            }, []);
                        return (
                            (0, l.useEffect)(() => {
                                const e = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', T, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', T, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, l.useEffect)(() => {
                                !1 === B && N();
                            }, [B, N]),
                            (0, l.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', N),
                                    () => {
                                        window.removeEventListener('mouseleave', N), N();
                                    }
                                ),
                                [N],
                            ),
                            B
                                ? (0, l.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(k, m ? 100 : 400)),
                                                          r && r(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  N(), null == a || a(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === F && N(), null == i || i(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === F && N(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    A = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function F() {
                    return (
                        (F = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        F.apply(null, arguments)
                    );
                }
                const D = R.views.common.tooltip_window.simple_tooltip_content,
                    C = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            a = e.alert,
                            o = e.args,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, A);
                        const i = (0, l.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: r, alert: a });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [a, t, n, r, o]);
                        return c().createElement(
                            m,
                            F(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? D.SimpleTooltipHtmlContent('resId') : D.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: i,
                                },
                                s,
                            ),
                            u,
                        );
                        var d;
                    };
                var p = t(3138);
                const B = ['children'],
                    f = c().createContext(null),
                    b = (e) => {
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
                            })(e, B);
                        return c().createElement(f.Provider, { value: t }, u);
                    };
                function g(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const v = {
                        playHighlight() {
                            g('highlight');
                        },
                        playClick() {
                            g('play');
                        },
                        playYes() {
                            g('yes1');
                        },
                    },
                    h = {
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
                let w, y;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(w || (w = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(y || (y = {}));
                const k = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: a,
                    soundHover: s,
                    soundClick: i,
                    onMouseEnter: d,
                    onMouseMove: E,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: A,
                    onClick: F,
                }) => {
                    const D = (0, l.useRef)(null),
                        C = (0, l.useState)(t),
                        p = C[0],
                        B = C[1],
                        f = (0, l.useState)(!1),
                        b = f[0],
                        v = f[1];
                    return (
                        (0, l.useEffect)(() => {
                            function e(e) {
                                p && null !== D.current && !D.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [p]),
                        (0, l.useEffect)(() => {
                            B(t);
                        }, [t]),
                        c().createElement(
                            'div',
                            {
                                ref: D,
                                className: o()(
                                    h.base,
                                    h[`base__${n}`],
                                    r && h.base__disabled,
                                    u && h[`base__${u}`],
                                    p && h.base__focus,
                                    b && h.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== s && g(s), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    r || (m && m(e), v(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== i && g(i),
                                        _ && _(e),
                                        t && (r || (D.current && (D.current.focus(), B(!0)))),
                                        v(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (A && A(e), v(!1));
                                },
                                onClick: function (e) {
                                    r || (F && F(e));
                                },
                            },
                            n !== w.ghost &&
                                c().createElement(
                                    c().Fragment,
                                    null,
                                    c().createElement('div', { className: h.back }),
                                    c().createElement('span', { className: h.texture }),
                                ),
                            c().createElement(
                                'span',
                                { className: o()(h.state, h.state__default) },
                                c().createElement('span', { className: h.stateDisabled }),
                                c().createElement('span', { className: h.stateHighlightHover }),
                                c().createElement('span', { className: h.stateHighlightActive }),
                            ),
                            c().createElement(
                                'span',
                                { className: h.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                k.defaultProps = { type: w.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const N = k,
                    T = {
                        base: 'Button_base_8d',
                        base__close: 'Button_base__close_b1',
                        base__minimize: 'Button_base__minimize_f7',
                    };
                let S;
                !(function (e) {
                    (e.Minimize = 'minimize'), (e.Close = 'close');
                })(S || (S = {}));
                const x = ({ onClick: e, type: u }) => {
                        const t = (0, l.useCallback)(() => {
                                v.playHighlight();
                            }, []),
                            n = (0, l.useCallback)((e) => e.stopPropagation(), []),
                            r = o()(T.base, T[`base__${u}`]);
                        return c().createElement('div', { className: r, onClick: e, onMouseEnter: t, onMouseDown: n });
                    },
                    P = ({ tooltipHeader: e, tooltipBody: u }) =>
                        c().createElement(
                            C,
                            { isEnabled: !0, header: e, body: u },
                            c().createElement('div', { className: 'Info_base_7b' }),
                        ),
                    M = ({ title: e, infoTooltipHeader: u, infoTooltipBody: t }) =>
                        c().createElement(
                            'div',
                            { className: 'Title_base_44' },
                            e,
                            u && t && c().createElement(P, { tooltipHeader: u, tooltipBody: t }),
                        ),
                    O = ({
                        title: e,
                        showMinimizeBtn: u,
                        onMinimize: t,
                        onClose: n,
                        onReload: r,
                        infoTooltipHeader: a,
                        infoTooltipBody: s,
                    }) => {
                        const i = (0, l.useState)(!1),
                            d = i[0],
                            E = i[1],
                            _ = (0, l.useCallback)((e) => {
                                const u = () => {
                                    p.O.view.sendEvent.move(!1), E(!1), document.removeEventListener('mouseup', u);
                                };
                                0 === e.button &&
                                    (p.O.view.sendEvent.move(!0), E(!0), document.addEventListener('mouseup', u));
                            }, []);
                        return c().createElement(
                            'div',
                            { className: o()('Header_base_ff', d && 'Header_base__grabbing_dc'), onMouseDown: _ },
                            c().createElement(M, { title: e, infoTooltipBody: s, infoTooltipHeader: a }),
                            r &&
                                c().createElement(
                                    N,
                                    {
                                        mixClass: 'Header_reloadButton_19',
                                        onClick: (e) => {
                                            v.playClick(), null == r || r(e);
                                        },
                                    },
                                    c().createElement('div', {
                                        className: o()('Header_icon_6e', 'Header_icon__reload_c2'),
                                    }),
                                ),
                            u &&
                                c().createElement(x, {
                                    type: S.Minimize,
                                    onClick: (e) => {
                                        v.playClick(), t ? t(e) : p.O.view.sendEvent.minimize();
                                    },
                                }),
                            c().createElement(x, {
                                type: S.Close,
                                onClick: (e) => {
                                    v.playClick(), n ? n(e) : p.O.view.sendEvent.close();
                                },
                            }),
                        );
                    },
                    I = c().forwardRef(
                        (
                            {
                                title: e,
                                showMinimizeBtn: u,
                                onClose: t,
                                onReload: n,
                                onMinimize: r,
                                onFocusChange: a,
                                infoTooltipHeader: s,
                                infoTooltipBody: i,
                                className: d,
                                children: E,
                            },
                            _,
                        ) => {
                            const m = (0, l.useRef)(null),
                                A = (0, l.useRef)(null),
                                F = (0, l.useState)(!0),
                                D = F[0],
                                C = F[1],
                                B = (function () {
                                    const e = (0, l.useRef)(0);
                                    var u;
                                    return (
                                        (u = () => {
                                            window.cancelAnimationFrame(e.current);
                                        }),
                                        (0, l.useEffect)(() => u, []),
                                        (0, l.useMemo)(
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
                                f = () => {
                                    B.run(() => {
                                        v();
                                    });
                                },
                                g = () => {
                                    window.requestAnimationFrame(() => {
                                        v();
                                    });
                                },
                                v = () => {
                                    const e = m.current,
                                        u = A.current;
                                    if (!e || !u) return;
                                    const t = p.O.view.pxToRem(e.offsetWidth),
                                        n = p.O.view.pxToRem(e.offsetHeight);
                                    (u.style.width = `${t}rem`), (u.style.height = `${n}rem`);
                                    const r = t + 10 + 26,
                                        a = 28 + n + 5 + 26;
                                    p.O.view.setInputPaddingsRem(13), p.O.view.resize(r, a, 'rem');
                                };
                            var h;
                            return (
                                (h = () => (
                                    f(),
                                    window.addEventListener('resize', g),
                                    () => window.removeEventListener('resize', g)
                                )),
                                (0, l.useEffect)(h, []),
                                (0, l.useEffect)(
                                    () =>
                                        p.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && D
                                                ? (C(!1), null == a || a(!1))
                                                : 'inside' !== e || D || (C(!0), null == a || a(!0));
                                        }),
                                    [D, a],
                                ),
                                c().createElement(
                                    b,
                                    { updateSizes: f },
                                    c().createElement(
                                        'div',
                                        {
                                            className: o()('WindowDecorator_base_6a', d),
                                            style: { '--outer-shadow-width': '13rem' },
                                            ref: _,
                                        },
                                        c().createElement('div', {
                                            className: o()(
                                                'WindowDecorator_frame_b5',
                                                D && 'WindowDecorator_frame__focused_af',
                                            ),
                                        }),
                                        c().createElement(O, {
                                            title: e,
                                            infoTooltipHeader: s,
                                            infoTooltipBody: i,
                                            onClose: t,
                                            onMinimize: r,
                                            onReload: n,
                                            showMinimizeBtn: u,
                                        }),
                                        c().createElement(
                                            'div',
                                            { className: 'WindowDecorator_container_1d', ref: A },
                                            c().createElement('div', {
                                                className: 'WindowDecorator_contentDecorations_be',
                                            }),
                                            c().createElement(
                                                'div',
                                                { className: 'WindowDecorator_content_0b', ref: m },
                                                E,
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var L = t(5521);
                const z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function W(e = L.n.NONE, u = z, t = !1, n = !1) {
                    (0, l.useEffect)(() => {
                        if (e !== L.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && p.O.view.isEventHandled()) return;
                                p.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                const $ = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    H = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    V = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    j = i.Sw.instance;
                let U;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(U || (U = {}));
                const G = (e = 'model', u = U.Deep) => {
                        const t = (0, l.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, l.useMemo)(() => s(), []),
                            a = r.caller,
                            o = r.resId,
                            i = (0, l.useMemo)(
                                () => (window.__feature && window.__feature !== a ? `subViews.${a}.${e}` : e),
                                [a, e],
                            ),
                            c = (0, l.useState)(() =>
                                ((e) => {
                                    const u = $(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return H(u) ? u.value : u;
                                })(
                                    ((e) =>
                                        ((e, u) =>
                                            e.split('.').reduce((e, u) => {
                                                const t = $(`${e}.${u}`, window);
                                                return H(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                            }))(e))(i),
                                ),
                            ),
                            d = c[0],
                            E = c[1],
                            _ = (0, l.useRef)(-1);
                        return (
                            ((e) => {
                                const u = (0, l.useRef)(!1);
                                u.current || (e(), (u.current = !0));
                            })(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? U.Deep : U.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== U.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === U.Deep
                                                ? (e === d && n((e) => e + 1), E(e))
                                                : E(Object.assign([], e));
                                        },
                                        r = ((e) => {
                                            const u = ((e) => {
                                                    const u = s(),
                                                        t = u.caller,
                                                        n = u.resId,
                                                        r =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: r, modelPath: V(r, ''), resId: n };
                                                })(),
                                                t = u.modelPrefix,
                                                n = e.split('.');
                                            if (n.length > 0) {
                                                const e = [n[0]];
                                                return (
                                                    n.reduce((u, n) => {
                                                        const r = $(V(t, `${u}.${n}`), window);
                                                        return H(r)
                                                            ? (e.push(r.id), `${u}.${n}.value`)
                                                            : (e.push(n), `${u}.${n}`);
                                                    }),
                                                    e.reduce((e, u) => e + '.' + u)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    _.current = j.addCallback(r, t, o, u === U.Deep);
                                }
                            }),
                            (0, l.useEffect)(() => {
                                if (u !== U.None)
                                    return () => {
                                        j.removeCallback(_.current, o);
                                    };
                            }, [o, u]),
                            d
                        );
                    },
                    q = (e) => ({ backgroundImage: `url('${e}')` }),
                    K = () => {
                        const e = (0, l.useMemo)(() => q(R.images.gui.maps.icons.platoon.common.info()), []);
                        return c().createElement(
                            m,
                            { isEnabled: !0, contentId: R.views.lobby.premacc.tooltips.SquadBonusTooltip('resId') },
                            c().createElement('div', { className: 'BonusInfoIcon_bonusInfoIcon_3d', style: e }),
                        );
                    };
                function Y() {
                    return (
                        (Y = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Y.apply(null, arguments)
                    );
                }
                const X = (0, l.memo)(
                        ({
                            caption: e,
                            isEnabled: u,
                            description: t,
                            children: n,
                            cButtonProps: r,
                            onClick: a,
                            className: o,
                        }) => {
                            const s = (0, l.useCallback)(() => a(), [a]);
                            return c().createElement(
                                C,
                                { isEnabled: !0, header: e, body: t },
                                c().createElement(
                                    'div',
                                    { className: o },
                                    c().createElement(
                                        N,
                                        Y({ type: w.primary, size: y.small, onClick: s, disabled: !u }, r),
                                        n || e,
                                    ),
                                ),
                            );
                        },
                    ),
                    Z = /<link.*?>/g,
                    Q = /\.\.\//g,
                    J = /<script.*?>/g,
                    ee = 'default.css',
                    ue = (e) => {
                        const u = e.match(Q);
                        return u && u.join('');
                    },
                    te = () => {
                        for (
                            var e = 0, u = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < u.length;
                            e++
                        ) {
                            const t = u[e];
                            if (!t.href.includes(ee)) return t.href;
                        }
                        return '';
                    },
                    ne = (e) => {
                        const u = te(),
                            t = ue(u);
                        let n,
                            r = e;
                        for (; null !== (n = J.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const u = t + e[2].replace(Q, '');
                                r = r.replace(e[2], u);
                            }
                        }
                        return r;
                    },
                    re = () => {
                        const e = [];
                        let u = !1;
                        const t = () => {
                            if (!e.length) return void (u = !1);
                            const n = e.shift();
                            n && ((u = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                e.push(n), u || t();
                            },
                        };
                    },
                    ae = 'subViews.onChanged',
                    oe = 'subView:inject->',
                    se = re(),
                    ie =
                        ((0, l.memo)(({ id: e, fallback: u, onLoadCallback: t, mixClass: n }) => {
                            const r = (0, l.useState)(''),
                                a = r[0],
                                s = r[1],
                                d = (0, l.useMemo)(() => ({ __html: ne(a) }), [a]),
                                E = (0, l.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                                _ = (0, l.useState)(!1),
                                m = _[0],
                                A = _[1],
                                F = (0, l.useCallback)(
                                    (e) => {
                                        e.includes(E) &&
                                            (A(!0), engine.off(ae, F), window.subViews.removeChildChangedCallback(E));
                                    },
                                    [E],
                                ),
                                D = (0, l.useCallback)((e) => {
                                    se.add(
                                        () =>
                                            new Promise((u) => {
                                                s(e);
                                                const t = new MutationObserver(() => {
                                                        t.disconnect(), u();
                                                    }),
                                                    n = document.getElementById('root');
                                                n && t.observe(n, { childList: !0 });
                                            }),
                                    );
                                }, []);
                            (0, l.useEffect)(() => {
                                if (window.subViews.ids().includes(e)) {
                                    const u = window.subViews.get(e),
                                        t = u.path;
                                    let n;
                                    if ((n = t.split('/').pop()))
                                        return (
                                            (n = n.split('.')[0]),
                                            (window.subViews[n] = Object.assign({ id: e }, u)),
                                            engine.on(`${oe}${n}`, D),
                                            (({ path: e, name: u }) => {
                                                const t = new XMLHttpRequest();
                                                (t.onreadystatechange = () => {
                                                    4 === t.readyState &&
                                                        (200 === t.status
                                                            ? (0, i.Eu)().then(() => {
                                                                  console.info(`Sub view ${u} loaded: ${e}`),
                                                                      engine.TriggerEvent(
                                                                          `subView:inject->${u}`,
                                                                          t.responseText,
                                                                      );
                                                              })
                                                            : console.error(
                                                                  `subView: status: ${t.status} - can't get bundle`,
                                                              ));
                                                }),
                                                    t.open('GET', e),
                                                    t.send();
                                            })({ name: n, path: t }),
                                            () => {
                                                n && window.subViews[n] && delete window.subViews[n],
                                                    engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                    window.__dataTracker &&
                                                        window.__dataTracker.clearViewCallbacks &&
                                                        window.__dataTracker.clearViewCallbacks(e),
                                                    engine.off(`${oe}${n}`, D),
                                                    console.info(`Sub view ${n} is destroyed: ${t}`);
                                            }
                                        );
                                    console.error("subView: can't get View component name");
                                } else engine.on(ae, F);
                            }, [F, D, e, m]),
                                (0, l.useEffect)(
                                    () => () => {
                                        a &&
                                            ((e) => {
                                                const u = ue(te());
                                                let t;
                                                for (; null !== (t = Z.exec(e)); ) {
                                                    const e = t[0].match(/href="(.*?)"/);
                                                    if (e) {
                                                        const t = u + e[1].replace(Q, ''),
                                                            n = document.head.querySelector(`[href="${t}"]`);
                                                        n && document.head.removeChild(n);
                                                    }
                                                }
                                            })(a);
                                    },
                                    [a],
                                );
                            const C = o()('SubView_base_df', n);
                            if (a) {
                                let u;
                                return (
                                    (u = document.getElementById('root')) && u.setAttribute('id', 'bugSubView'),
                                    ((e) => {
                                        let u;
                                        const t = te(),
                                            n = ue(t);
                                        for (; null !== (u = Z.exec(e)); ) {
                                            const e = u[0].match(/href="(.*?)"/);
                                            if (e && !e[1].includes(ee) && n) {
                                                const u = n + e[1].replace(Q, ''),
                                                    t = document.createElement('link');
                                                (t.href = u), (t.rel = 'stylesheet'), document.head.appendChild(t);
                                            }
                                        }
                                    })(a),
                                    t && t(e),
                                    c().createElement('div', { className: C, dangerouslySetInnerHTML: d })
                                );
                            }
                            return u ? c().createElement('div', { className: C }, c().createElement(u, null)) : null;
                        }),
                        'Separator_base_98');
                let le;
                !(function (e) {
                    (e.left = 'left'), (e.top = 'top'), (e.right = 'right'), (e.bottom = 'bottom');
                })(le || (le = {}));
                const ce = [le.right, le.left],
                    de = ({ position: e }) => {
                        const u = String(R.images.gui.maps.icons.platoon.common.separator.$dyn(e));
                        return c().createElement(
                            'div',
                            {
                                className: o()(
                                    ie,
                                    ce.includes(e) ? 'Separator_base__vertical_9d' : 'Separator_base__horizontal_34',
                                ),
                            },
                            c().createElement('div', { className: 'Separator_image_5b', style: q(u) }),
                        );
                    },
                    Ee = ['active', 'className', 'children', 'size'];
                function _e() {
                    return (
                        (_e = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        _e.apply(null, arguments)
                    );
                }
                const me = (e) => {
                        let u = e.active,
                            t = e.className,
                            n = e.children,
                            r = e.size,
                            a = void 0 === r ? y.small : r,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Ee);
                        const i = o()('ToggleButton_base_b9', t, u && 'ToggleButton_base__active_68');
                        return c().createElement(
                            'div',
                            { className: i },
                            c().createElement(
                                N,
                                _e({}, s, { type: 'secondary', size: a }),
                                c().createElement('span', { className: 'ToggleButton_content_85' }, n),
                            ),
                            c().createElement('div', { className: 'ToggleButton_overlay_0a' }),
                            c().createElement('div', { className: 'ToggleButton_indicator_85' }),
                        );
                    },
                    Ae = ((0, l.memo)(me), 'Footer_base_d0'),
                    Fe = () => {
                        const e = G('model.btnSwitchReady'),
                            u = e.onClick,
                            t = e.caption,
                            n = e.description,
                            r = e.tooltipHeader,
                            a = e.isRed,
                            s = e.isEnabled,
                            i = G(),
                            d = i.footerMessage,
                            E = i.isFooterMessageGrey,
                            _ = o()('Footer_message_3d', !E && 'Footer_message__alert_64'),
                            m = (0, l.useCallback)(() => u(), [u]),
                            A = a ? w.primaryRed : w.primary;
                        return c().createElement(
                            'div',
                            { className: Ae },
                            c().createElement('div', { className: _ }, d),
                            c().createElement(
                                C,
                                { header: r, body: n },
                                c().createElement(N, { onClick: m, size: y.small, type: A, disabled: !s }, t),
                            ),
                        );
                    };
                var De = t(493),
                    Ce = t.n(De),
                    pe = t(1281);
                let Be;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Be || (Be = {}));
                const fe = (e) => e.replace(/&nbsp;/g, ' '),
                    be = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ge = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ve = (e, u, t = Be.left) => e.split(u).reduce(t === Be.left ? be : ge, []),
                    he = (() => {
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
                    we = ['zh_cn', 'zh_sg', 'zh_tw'];
                var ye = t(8613);
                Date.now(), ye.Ew.getRegionalDateTime, ye.Ew.getFormattedDateTime;
                const ke =
                        (i.Sw.instance,
                        (e, u) => {
                            const t = (0, l.useRef)();
                            return (
                                (0, l.useEffect)(() => {
                                    (u && !u(e)) || (t.current = e);
                                }, [u, e]),
                                t.current
                            );
                        }),
                    Ne = (e, u) => {
                        const t = Array.isArray(e) ? e : [e];
                        return !u && t.length > 1 ? t.slice(0, 1) : t;
                    },
                    Te = ['children'];
                function Se() {
                    return (
                        (Se = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Se.apply(null, arguments)
                    );
                }
                const xe = (e) => {
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
                        })(e, Te);
                    return c().createElement(
                        m,
                        Se(
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
                function Re() {
                    return (
                        (Re = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Re.apply(null, arguments)
                    );
                }
                const Pe = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = c().createElement('div', { className: t }, e);
                        if (u.header || u.body) return c().createElement(C, u, n);
                        const r = u.contentId;
                        return r ? c().createElement(m, Re({}, u, { contentId: r }), n) : c().createElement(xe, u, n);
                    },
                    Me = (e) => {
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
                    Oe = [];
                function Ie(e) {
                    const u = (0, l.useRef)(e);
                    return (
                        (0, l.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, l.useCallback)((...e) => (0, u.current)(...e), Oe)
                    );
                }
                let Le, ze;
                !(function (e) {
                    (e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected');
                })(Le || (Le = {})),
                    (function (e) {
                        (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(ze || (ze = {}));
                const We = ['content', 'classMix', 'className'];
                function $e() {
                    return (
                        ($e = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        $e.apply(null, arguments)
                    );
                }
                const He = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            n = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, We);
                        const a = (0, l.useRef)(null),
                            s = (0, l.useState)(!0),
                            i = s[0],
                            d = s[1];
                        return (
                            (0, l.useEffect)(() =>
                                Me(() => {
                                    const e = a.current;
                                    e && e.offsetWidth >= e.scrollWidth && d(!1);
                                }),
                            ),
                            c().createElement(
                                C,
                                { isEnabled: i, body: u },
                                c().createElement(
                                    'div',
                                    $e({}, r, { ref: a, className: o()('TextOverflow_base_3b', n, t) }),
                                    u,
                                ),
                            )
                        );
                    },
                    Ve = {
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
                let je;
                !(function (e) {
                    (e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down');
                })(je || (je = {}));
                const Ue = (0, l.memo)(
                        ({
                            parentId: e,
                            variant: u = Le.Basic,
                            size: t = ze.Medium,
                            isOpen: n,
                            placeholder: r = R.strings.common.dropdown.placeholder.select(),
                            label: a = '',
                            classMix: s,
                            onClick: i,
                            soundHover: d,
                            soundClick: E,
                            customControl: _,
                        }) => {
                            const m = (0, l.useState)(je.Out),
                                A = m[0],
                                F = m[1],
                                D = (0, l.useState)(!1),
                                C = D[0],
                                p = D[1],
                                B = u === Le.Disabled,
                                f = B || u === Le.Basic,
                                b = (0, l.useCallback)(() => {
                                    B || (F(je.Over), d && g(d));
                                }, [B, d]),
                                v = (0, l.useCallback)(() => F(je.Out), []);
                            return (
                                (0, l.useEffect)(() => {
                                    f || p(!1);
                                }, [u, f]),
                                (0, l.useEffect)(() => {
                                    B && v();
                                }, [B, v]),
                                c().createElement(
                                    'div',
                                    {
                                        id: e ? `${e}_control` : void 0,
                                        className: o()(
                                            Ve.base,
                                            n && Ve.base__open,
                                            Ve[`base__${A}`],
                                            (f || !C) && Ve[`base__${u}`],
                                            s,
                                        ),
                                        onMouseEnter: b,
                                        onMouseUp: () => {
                                            !B && F(je.Over), !f && p(!0);
                                        },
                                        onMouseDown: () => {
                                            B || (F(je.Down), E && g(E));
                                        },
                                        onMouseLeave: v,
                                        onClick: i,
                                    },
                                    c().createElement('div', { className: Ve.stateHighlight }),
                                    !C && u === Le.Alert && c().createElement('div', { className: Ve.alert }),
                                    c().createElement(
                                        'div',
                                        { className: o()(Ve.label, Ve[`label__${t}`], !a && Ve.label__placeholder) },
                                        _ || c().createElement(He, { content: a || r }),
                                    ),
                                    c().createElement(
                                        'div',
                                        { className: o()(Ve.button, Ve[`button__${t}`]) },
                                        c().createElement('div', { className: o()(Ve.arrow, Ve[`arrow__${t}`]) }),
                                        c().createElement('div', { className: Ve.gradient }),
                                        B && c().createElement('div', { className: Ve.disabled }),
                                    ),
                                )
                            );
                        },
                    ),
                    Ge = (e, u, t) => (t < e ? e : t > u ? u : t);
                function qe(e, u, t = []) {
                    const n = (0, l.useRef)(0),
                        r = (0, l.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, l.useEffect)(() => r, [r]);
                    const a = (null != t ? t : []).concat([u]);
                    return [
                        (0, l.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, a),
                        r,
                    ];
                }
                function Ke(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                var Ye = t(7030);
                let Xe;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Xe || (Xe = {}));
                const Ze = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Qe = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const o = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : Ge(r, a, t);
                        };
                        return (s = {}) => {
                            const i = s.settings,
                                c = void 0 === i ? Ze : i,
                                d = (0, l.useRef)(null),
                                E = (0, l.useRef)(null),
                                _ = (() => {
                                    const e = (0, l.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (
                                                var n,
                                                    r = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return Ke(e, u);
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
                                                                              ? Ke(e, u)
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
                                                    })(u(e).values());
                                                !(n = r()).done;

                                            )
                                                (0, n.value)(...t);
                                        };
                                    return (0, l.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                m = (function (e, u, t) {
                                    const n = (0, l.useMemo)(
                                        () =>
                                            (function (e, u, t, n) {
                                                let r,
                                                    a = !1,
                                                    o = 0;
                                                function s() {
                                                    r && clearTimeout(r);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - o;
                                                    function d() {
                                                        (o = Date.now()), t.apply(l, i);
                                                    }
                                                    a ||
                                                        (n && !r && d(),
                                                        s(),
                                                        void 0 === n && c > e
                                                            ? d()
                                                            : !0 !== u &&
                                                              (r = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                                    (i.cancel = function () {
                                                        s(), (a = !0);
                                                    }),
                                                    i
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return (0, l.useEffect)(() => n.cancel, [n]), n;
                                })(
                                    () => {
                                        p.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, Ye.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), _.trigger('change', e), a && m());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                F = A[0],
                                D = A[1],
                                C = (0, l.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = F.scrollPosition.get(),
                                            a = (null != (n = F.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, u * t + a + r);
                                    },
                                    [F.scrollPosition],
                                ),
                                B = (0, l.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            D.start({
                                                scrollPosition: o(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, c.animationConfig, F.scrollPosition],
                                ),
                                f = (0, l.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = C(u, e, n);
                                        B(a);
                                    },
                                    [B, C, c.step],
                                ),
                                b = (0, l.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && f(n(e)),
                                            d.current && _.trigger('mouseWheel', e, F.scrollPosition, u(d.current));
                                    },
                                    [F.scrollPosition, f, _],
                                ),
                                g = ((e, u = []) => {
                                    const t = (0, l.useRef)(),
                                        n = (0, l.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, l.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        Me(() => {
                                            const e = d.current;
                                            e &&
                                                (B(o(e, F.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [B, F.scrollPosition.goal],
                                ),
                                v = Ie(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = o(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && B(u, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            return (
                                (0, l.useEffect)(
                                    () => (
                                        window.addEventListener('resize', g),
                                        () => {
                                            window.removeEventListener('resize', g);
                                        }
                                    ),
                                    [g],
                                ),
                                (0, l.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (E.current ? r(E.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? u(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: b,
                                        applyScroll: B,
                                        applyStepTo: f,
                                        contentRef: d,
                                        wrapperRef: E,
                                        scrollPosition: D,
                                        animationScroll: F,
                                        recalculateContent: v,
                                        events: { on: _.on, off: _.off },
                                    }),
                                    [F.scrollPosition, B, f, _.off, _.on, v, b, D, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    Je = Qe({
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
                        getDirection: (e) => (e.deltaY > 1 ? Xe.Next : Xe.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    eu = 'HorizontalBar_base__nonActive_82',
                    uu = 'disable',
                    tu = { pending: !1, offset: 0 },
                    nu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    ru = () => {},
                    au = (e, u) => Math.max(20, e.offsetWidth * u),
                    ou = (0, l.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = nu, onDrag: n = ru }) => {
                        const r = (0, l.useRef)(null),
                            a = (0, l.useRef)(null),
                            s = (0, l.useRef)(null),
                            i = (0, l.useRef)(null),
                            d = (0, l.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, l.useState)(tu),
                            m = _[0],
                            A = _[1],
                            F = (0, l.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            D = () => {
                                const u = i.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    l = Math.min(1, n / r),
                                    c = Ge(0, 1, o / (r - n)),
                                    E = (u.offsetWidth - au(u, l)) * c;
                                (t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (a.current && s.current && i.current && d.current) {
                                            if (0 === e)
                                                return a.current.classList.add(uu), void s.current.classList.remove(uu);
                                            if (
                                                ((u = i.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return a.current.classList.remove(uu), void s.current.classList.add(uu);
                                            var u, t;
                                            a.current.classList.remove(uu), s.current.classList.remove(uu);
                                        }
                                    })(E);
                            },
                            C = Ie(() => {
                                (() => {
                                    const u = d.current,
                                        t = i.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const o = Math.min(1, n / a);
                                    (u.style.width = `${au(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(eu) : r.current.classList.remove(eu));
                                })(),
                                    D();
                            });
                        (0, l.useEffect)(() => Me(C)),
                            (0, l.useEffect)(
                                () =>
                                    Me(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = ru;
                                        const n = () => {
                                            t(), (t = Me(C));
                                        };
                                        return (
                                            e.events.on('recalculateContent', C),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', C),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, l.useEffect)(() => {
                                if (!m.pending) return;
                                const u = p.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const s = i.current,
                                            l = d.current;
                                        if (!s || !l) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const c = u.clientX - m.offset - s.getBoundingClientRect().x,
                                            E = (c / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, E),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: l, thumbOffset: c, contentOffset: E });
                                    }),
                                    t = p.O.client.events.mouse.up(() => {
                                        u(), F(tu);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, m.offset, m.pending, n, F]);
                        const B = qe((u) => e.applyStepTo(u), E, [e]),
                            f = B[0],
                            b = B[1];
                        (0, l.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const v = (e) => {
                            e.target.classList.contains(uu) || g('highlight');
                        };
                        return c().createElement(
                            'div',
                            { className: o()('HorizontalBar_base_49', u.base), ref: r, onWheel: e.handleMouseWheel },
                            c().createElement('div', {
                                className: o()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(uu) || 0 !== e.button || (g('play'), f(Xe.Next));
                                },
                                onMouseUp: b,
                                ref: a,
                                onMouseEnter: v,
                            }),
                            c().createElement(
                                'div',
                                {
                                    className: o()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        n &&
                                            0 === u.button &&
                                            (g('play'),
                                            u.target === n
                                                ? F({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const n = d.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > n.getBoundingClientRect().x ? Xe.Prev : Xe.Next));
                                    },
                                    ref: i,
                                    onMouseEnter: v,
                                },
                                c().createElement('div', { ref: d, className: o()('HorizontalBar_thumb_fd', u.thumb) }),
                                c().createElement('div', { className: o()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            c().createElement('div', {
                                className: o()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(uu) || 0 !== e.button || (g('play'), f(Xe.Prev));
                                },
                                onMouseUp: b,
                                ref: s,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    su = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    iu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: a,
                        scrollClassName: s,
                        getStepByRailClick: i,
                        onDrag: d,
                    }) => {
                        const E = (0, l.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: o()(su.base, e.base) });
                            }, [n]),
                            _ = (0, l.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return c().createElement(
                            'div',
                            { className: o()(su.defaultScroll, t), onWheel: u.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: o()(su.defaultScrollArea, r) },
                                c().createElement(lu, { className: s, api: _, classNames: a }, e),
                            ),
                            c().createElement(ou, { getStepByRailClick: i, api: u, onDrag: d, classNames: E }),
                        );
                    },
                    lu = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, l.useEffect)(() => Me(e.recalculateContent)),
                        c().createElement(
                            'div',
                            { className: o()(su.base, u) },
                            c().createElement(
                                'div',
                                {
                                    className: o()(su.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                c().createElement(
                                    'div',
                                    { className: o()(su.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (lu.Bar = ou), (lu.Default = iu);
                const cu = Qe({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Xe.Next : Xe.Prev),
                    }),
                    du = 'VerticalBar_base__nonActive_42',
                    Eu = 'disable',
                    _u = () => {},
                    mu = { pending: !1, offset: 0 },
                    Au = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Fu = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Du = (e, u) => Math.max(20, e.offsetHeight * u),
                    Cu = (0, l.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Au, onDrag: n = _u }) => {
                        const r = (0, l.useRef)(null),
                            a = (0, l.useRef)(null),
                            s = (0, l.useRef)(null),
                            i = (0, l.useRef)(null),
                            d = (0, l.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, l.useState)(mu),
                            m = _[0],
                            A = _[1],
                            F = (0, l.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            D = Ie(() => {
                                const u = d.current,
                                    t = i.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${Du(t, o)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(du) : r.current.classList.remove(du)),
                                    o
                                );
                            }),
                            C = Ie(() => {
                                const u = i.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    l = Math.min(1, n / r),
                                    c = Ge(0, 1, o / (r - n)),
                                    E = (u.offsetHeight - Du(u, l)) * c;
                                (t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (a.current && s.current && i.current && d.current) {
                                            if (0 === Math.round(e))
                                                return a.current.classList.add(Eu), void s.current.classList.remove(Eu);
                                            if (
                                                ((u = i.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return a.current.classList.remove(Eu), void s.current.classList.add(Eu);
                                            var u, t;
                                            a.current.classList.remove(Eu), s.current.classList.remove(Eu);
                                        }
                                    })(E);
                            }),
                            B = Ie(() => {
                                Fu(e, () => {
                                    D(), C();
                                });
                            });
                        (0, l.useEffect)(() => Me(B)),
                            (0, l.useEffect)(() => {
                                const u = () => {
                                    Fu(e, () => {
                                        C();
                                    });
                                };
                                let t = _u;
                                const n = () => {
                                    t(), (t = Me(B));
                                };
                                return (
                                    e.events.on('recalculateContent', B),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', B),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, l.useEffect)(() => {
                                if (!m.pending) return;
                                const u = p.O.client.events.mouse.up(() => {
                                        F(mu);
                                    }),
                                    t = p.O.client.events.mouse.move(([u]) => {
                                        Fu(e, (t) => {
                                            const r = i.current,
                                                a = d.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const s = u.screenY - m.offset - r.getBoundingClientRect().y,
                                                l = (s / r.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: l });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, m.offset, m.pending, n, F]);
                        const f = qe((u) => e.applyStepTo(u), E, [e]),
                            b = f[0],
                            v = f[1];
                        (0, l.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Eu) || g('highlight');
                        };
                        return c().createElement(
                            'div',
                            { className: o()('VerticalBar_base_f3', u.base), ref: r, onWheel: e.handleMouseWheel },
                            c().createElement('div', {
                                className: o()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Eu) || 0 !== e.button || (g('play'), b(Xe.Next));
                                },
                                ref: a,
                                onMouseEnter: h,
                            }),
                            c().createElement(
                                'div',
                                {
                                    className: o()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        var r;
                                        n &&
                                            0 === u.button &&
                                            (g('play'),
                                            u.target === n
                                                ? F({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y })
                                                : ((r = u.screenY > n.getBoundingClientRect().y ? Xe.Prev : Xe.Next),
                                                  d.current &&
                                                      Fu(e, (u) => {
                                                          if (!u) return;
                                                          const n = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + n * r);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: i,
                                    onMouseEnter: h,
                                },
                                c().createElement('div', { ref: d, className: o()('VerticalBar_thumb_32', u.thumb) }),
                                c().createElement('div', { className: o()('VerticalBar_rail_43', u.rail) }),
                            ),
                            c().createElement('div', {
                                className: o()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Eu) || 0 !== e.button || (g('play'), b(Xe.Prev));
                                },
                                onMouseUp: v,
                                ref: s,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    pu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Bu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: a,
                        scrollClassNames: s,
                        getStepByRailClick: i,
                        onDrag: d,
                    }) => {
                        const E = (0, l.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: o()(pu.base, e.base) });
                            }, [n]),
                            _ = (0, l.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return c().createElement(
                            'div',
                            { className: o()(pu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: o()(pu.area, r) },
                                c().createElement(fu, { className: a, classNames: s, api: _ }, e),
                            ),
                            c().createElement(Cu, { getStepByRailClick: i, api: u, onDrag: d, classNames: E }),
                        );
                    },
                    fu = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, l.useEffect)(() => Me(n.recalculateContent)),
                        c().createElement(
                            'div',
                            { className: o()(pu.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: o()(pu.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                fu.Default = Bu;
                const bu = { Vertical: r, Horizontal: n },
                    gu = { base: 'VerticalAutoScroll_barBase_93' },
                    vu = { content: 'VerticalAutoScroll_content_47' },
                    hu = ({
                        children: e,
                        isEnabled: u = !0,
                        selectedItemId: t,
                        scrollAreaKey: n = 'scrollArea',
                        withCompleteTrigger: r = !1,
                        containerClasses: a,
                    }) => {
                        const s = (0, l.useState)(!1),
                            i = s[0],
                            d = s[1],
                            E = (0, l.useState)(!1),
                            _ = E[0],
                            m = E[1],
                            A = (0, l.useRef)(null),
                            F = (0, l.useRef)(null),
                            D = cu(),
                            C = Ie(() => {
                                d(!0);
                            }),
                            p = (0, l.useCallback)(() => {
                                d(!1);
                            }, []),
                            B = (0, l.useCallback)(() => {
                                const e = F.current,
                                    u = A.current;
                                if (e && D && u) {
                                    const t = e.offsetTop + 0.5 * (e.offsetHeight - u.offsetHeight);
                                    r && D.events.on('rest', C), D.applyScroll(t);
                                }
                            }, [C, D, r]);
                        (0, l.useEffect)(
                            () => () => {
                                D.events.off('rest', C);
                            },
                            [C, D.events, r],
                        ),
                            (0, l.useEffect)(() => {
                                if (u && null !== t) return Me(B);
                            }, [n, B, t, u]),
                            (0, l.useEffect)(() => {
                                const e = () => {
                                    const e = D.getContainerSize(),
                                        u = D.getWrapperSize();
                                    e && u && m(e > u);
                                };
                                return (
                                    D.events.on('recalculateContent', e),
                                    () => {
                                        D.events.off('recalculateContent', e);
                                    }
                                );
                            }, [_, D]);
                        const f = {
                                scrollContainerRef: A,
                                selectedItemRef: F,
                                selectedItemId: t,
                                isScrollComplete: i,
                                scrollbarActive: _,
                                onScrollAnimationComplete: p,
                            },
                            b = (0, l.cloneElement)(e, f);
                        return c().createElement(
                            'div',
                            { className: o()('VerticalAutoScroll_base_db', a), ref: A },
                            c().createElement(bu.Vertical.Area, { api: D, key: n, classNames: vu }, b),
                            c().createElement(bu.Vertical.Bar, { api: D, classNames: gu }),
                        );
                    },
                    wu = {
                        base: 'DropDownItem_base_5e',
                        base__extraSmall: 'DropDownItem_base__extraSmall_5a',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    yu = ['size', 'classMix', 'onClick', 'itemRenderer'],
                    ku = (0, l.memo)((e) => {
                        let u = e.size,
                            t = e.classMix,
                            n = e.onClick,
                            r = e.itemRenderer,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, yu);
                        const s = a.id,
                            i = a.isSelected,
                            d = a.isDisabled,
                            E = a.label,
                            _ = a.soundHover,
                            m = a.soundClick,
                            A = (0, l.useCallback)(
                                (e) => {
                                    d || (n && n(e, s));
                                },
                                [s, d, n],
                            ),
                            F = (0, l.useCallback)(() => {
                                d || (_ && g(_));
                            }, [d, _]),
                            D = (0, l.useCallback)(() => {
                                d || (m && g(m));
                            }, [d, m]),
                            C = o()(wu.base, u && wu[`base__${u}`], i && wu.base__selected, d && wu.base__disabled, t);
                        return c().createElement(
                            'div',
                            { className: C, onMouseEnter: F, onMouseDown: D, onClick: A },
                            r ? r(a) : E,
                        );
                    }),
                    Nu = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function Tu() {
                    return (
                        (Tu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Tu.apply(null, arguments)
                    );
                }
                const Su = ({
                        size: e,
                        items: u,
                        selectedIds: t,
                        selectedItemId: n,
                        selectedItemRef: r,
                        onClick: a,
                        parentId: s,
                        soundHover: i,
                        soundClick: l,
                        itemClassMix: d,
                        itemRenderer: E,
                        scrollbarActive: _,
                    }) =>
                        c().createElement(
                            'div',
                            { className: o()(Nu.base, _ && Nu.base__withScroll) },
                            u.map((u) => {
                                const o = `${s}_${u.id}`;
                                return c().createElement(
                                    'div',
                                    { id: s ? o : void 0, key: o, ref: u.id === n ? r : null },
                                    c().createElement(
                                        ku,
                                        Tu({ size: e, soundHover: i, soundClick: l, classMix: d, itemRenderer: E }, u, {
                                            onClick: a,
                                            isSelected: t.includes(u.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    xu = {
                        base: 'DropDownList_base_62',
                        base__extraSmall: 'DropDownList_base__extraSmall_60',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                    },
                    Ru = ({
                        parentId: e,
                        size: u = ze.Medium,
                        items: t,
                        selectedIds: n,
                        isOpen: r,
                        autoScroll: a,
                        classMix: s,
                        itemClassMix: i,
                        itemRenderer: d,
                        onClick: E,
                        soundHover: _,
                        soundClick: m,
                    }) => {
                        const A = (0, l.useState)(null),
                            F = A[0],
                            D = A[1],
                            C = ke(r);
                        (0, l.useEffect)(() => {
                            if (r && !C) {
                                const e = ((e, u) => {
                                    if (!u.length) return null;
                                    const t = e.find((e) => u.includes(e.id));
                                    return t ? t.id : null;
                                })(t, n);
                                null !== e && D(e);
                            }
                            r || D(null);
                        }, [r, t, n, C]);
                        const p = e ? `${e}_list` : void 0;
                        return c().createElement(
                            'div',
                            { id: p, className: o()(xu.base, xu[`base__${u}`], s) },
                            c().createElement(
                                hu,
                                { selectedItemId: F, isEnabled: a },
                                c().createElement(Su, {
                                    parentId: e,
                                    items: t,
                                    size: u,
                                    selectedIds: n,
                                    onClick: E,
                                    soundHover: _,
                                    soundClick: m,
                                    itemClassMix: i,
                                    itemRenderer: d,
                                }),
                            ),
                        );
                    },
                    Pu = {
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
                    Mu = (0, l.memo)(
                        ({
                            componentId: e,
                            containerRef: u,
                            items: t,
                            selected: n = [],
                            variant: r = Le.Basic,
                            size: a = ze.Medium,
                            multiple: s = !1,
                            autoScroll: d = !0,
                            placeholder: E,
                            classMix: _,
                            className: m,
                            controlRenderer: A,
                            itemRenderer: F,
                            open: D,
                            tooltipArgs: C,
                            onChanges: p,
                            onOpen: B,
                            onClose: f,
                            onClick: b,
                            onClickOutside: g,
                            onMouseEnter: v,
                            onMouseDown: h,
                            onMouseUp: w,
                            onMouseLeave: y,
                            soundHover: k = 'highlight',
                            soundClick: N = 'play',
                            soundItemHover: T,
                            soundItemClick: S,
                        }) => {
                            const x = (0, l.useRef)(null),
                                R = (0, l.useRef)(null),
                                P = (0, l.useRef)({ open: !1, listAbove: !1 }),
                                M = (0, l.useState)(!1),
                                O = M[0],
                                I = M[1],
                                z = (0, l.useState)(!1),
                                $ = z[0],
                                H = z[1],
                                V = Ne(n, s),
                                j = r !== Le.Disabled,
                                U = void 0 === D,
                                G = Boolean(U ? O : D),
                                q = Ie(() => {
                                    P.current.open && ((P.current.open = !1), I(!1), null == f || f());
                                });
                            W(G ? L.n.ESCAPE : L.n.NONE, q, G);
                            const K = Ie(() => {
                                null == g || g(), U && (I(!1), (P.current.open = !1), null == f || f());
                            });
                            (0, l.useEffect)(() => {
                                const e = x.current;
                                if (e && G)
                                    return (
                                        i.c1.register(e, K),
                                        () => {
                                            i.c1.unregister(e, K);
                                        }
                                    );
                            }, [G, K]),
                                (0, l.useEffect)(() => {
                                    void 0 !== D && (P.current.open = D);
                                }, [D]);
                            const Y = (0, l.useCallback)(() => {
                                if (!x.current || !R.current) return;
                                const e = u && u.current,
                                    t = e ? e.getBoundingClientRect().bottom : window.innerHeight,
                                    n =
                                        x.current.getBoundingClientRect().bottom +
                                            R.current.getBoundingClientRect().height >
                                        t;
                                n !== P.current.listAbove && ((P.current.listAbove = n), H(n));
                            }, [u]);
                            (0, l.useEffect)(() => Me(() => Me(Y)), [Y, a, t.length]);
                            const X = (0, l.useCallback)(
                                    (e) => {
                                        const u = V.findIndex((u) => u === e) > -1;
                                        let t = [];
                                        (t = s ? (u ? V.filter((u) => u !== e) : [e, ...V]) : u ? [] : [e]),
                                            null == p || p(t);
                                    },
                                    [s, p, V],
                                ),
                                Z = (0, l.useCallback)(() => {
                                    U &&
                                        ((P.current.open = !P.current.open),
                                        I(P.current.open),
                                        P.current.open ? null == B || B() : null == f || f());
                                }, [U, B, f]),
                                Q = (0, l.useCallback)(
                                    (e) => {
                                        j && Z(), null == b || b(e);
                                    },
                                    [j, b, Z],
                                ),
                                J = (0, l.useCallback)(
                                    (e, u) => {
                                        null == b || b(e, u), X(u), s || Z();
                                    },
                                    [b, s, Z, X],
                                ),
                                ee = (0, l.useMemo)(
                                    () =>
                                        t
                                            .filter((e) => V.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [t, V],
                                ),
                                ue = (0, l.useMemo)(() => t.filter((e) => V.includes(e.id)), [t, V]),
                                te = A ? A(ue) : void 0;
                            return c().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: x,
                                    className: o()(Pu.base, Pu[`base__${a}`], m, null == _ ? void 0 : _.base),
                                    onMouseEnter: v,
                                    onMouseUp: w,
                                    onMouseDown: h,
                                    onMouseLeave: y,
                                },
                                c().createElement(
                                    'div',
                                    { className: o()(Pu.control, G && Pu.control__down) },
                                    c().createElement(
                                        Pe,
                                        { tooltipArgs: C },
                                        c().createElement(Ue, {
                                            parentId: e,
                                            size: a,
                                            variant: r,
                                            isOpen: G,
                                            placeholder: E,
                                            label: ee,
                                            classMix: _ && _.control,
                                            onClick: Q,
                                            soundHover: k,
                                            soundClick: N,
                                            customControl: te,
                                        }),
                                    ),
                                ),
                                c().createElement(
                                    'div',
                                    {
                                        ref: R,
                                        className: o()(
                                            Pu.list,
                                            G ? Pu.list__down : Pu.list__up,
                                            $ ? Pu.list__above : Pu.list__under,
                                        ),
                                    },
                                    c().createElement(Ru, {
                                        parentId: e,
                                        size: a,
                                        items: t,
                                        selectedIds: V,
                                        isOpen: G,
                                        autoScroll: d,
                                        classMix: _ && _.list,
                                        itemClassMix: _ && _.item,
                                        itemRenderer: F,
                                        onClick: J,
                                        soundHover: T || k,
                                        soundClick: S || N,
                                    }),
                                ),
                            );
                        },
                    ),
                    Ou = ['items', 'selected', 'multiple', 'onChanges'];
                function Iu() {
                    return (
                        (Iu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Iu.apply(null, arguments)
                    );
                }
                const Lu = (e) => {
                        let u = e.items,
                            t = e.selected,
                            n = void 0 === t ? [] : t,
                            r = e.multiple,
                            a = void 0 !== r && r,
                            o = e.onChanges,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Ou);
                        const i = (0, l.useState)(Ne(n, a)),
                            d = i[0],
                            E = i[1],
                            _ = (0, l.useCallback)(
                                (e) => {
                                    E(e), o && o(u.filter((u) => e.includes(u.id)));
                                },
                                [u, o],
                            );
                        return c().createElement(Mu, Iu({ onChanges: _, items: u, selected: d, multiple: a }, s));
                    },
                    zu = ['modelPath', 'pure'];
                function Wu() {
                    return (
                        (Wu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Wu.apply(null, arguments)
                    );
                }
                const $u = (0, l.memo)((e) => {
                        let u = e.modelPath,
                            t = e.pure,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, zu);
                        const r = G(u),
                            a = r.onChange,
                            o = r.multiple,
                            s = G(`${u}.items`),
                            i = G(`${u}.selected`),
                            d = s.map(({ value: e }) => e),
                            E = i.map(({ value: e }) => e),
                            _ = (0, l.useCallback)(
                                (e) => {
                                    const u = e ? e.map(({ id: e }) => e).join(', ') : '';
                                    a({ selectedIds: u });
                                },
                                [a],
                            ),
                            m = (0, l.useCallback)(
                                (e) => {
                                    a({ selectedIds: e ? e.join(', ') : '' });
                                },
                                [a],
                            );
                        return t
                            ? c().createElement(Mu, Wu({ items: d, selected: E, multiple: o, onChanges: m }, n))
                            : c().createElement(Lu, Wu({ items: d, selected: E, multiple: o, onChanges: _ }, n));
                    }),
                    Hu = (e) => {
                        if (0 !== e.length)
                            return (({ label: e, id: u }) =>
                                c().createElement(
                                    C,
                                    {
                                        header: R.strings.halloween_platoon.platoon.difficulty.$dyn(`level_${u}`),
                                        body: R.strings.halloween_platoon.platoon.commander.difficulty_body(),
                                    },
                                    c().createElement(
                                        'div',
                                        { className: 'difficultyControlRenderer_base_5c' },
                                        c().createElement(
                                            'div',
                                            { className: 'difficultyControlRenderer_label_96' },
                                            e,
                                        ),
                                        c().createElement('div', {
                                            className: 'difficultyControlRenderer_icon_16',
                                            style: {
                                                backgroundImage: `url(${R.images.halloween.gui.maps.icons.difficulties.c_12x12.$dyn(`difficulty_icon_grey_${u}`)})`,
                                            },
                                        }),
                                    ),
                                ))(e[0]);
                    },
                    Vu = R.images.halloween.gui.maps.icons.difficulties.c_12x12,
                    ju = (e, u, t) =>
                        u
                            ? Vu.$dyn(`difficulty_icon_grey_${e}`)
                            : t
                              ? Vu.$dyn(`difficulty_icon_highlight_${e}`)
                              : Vu.$dyn(`difficulty_icon_${e}`),
                    Uu = ({ label: e, id: u, isDisabled: t, isSelected: n, showWarningIcon: r }) =>
                        c().createElement(
                            'div',
                            {
                                className: o()(
                                    'difficultyItemRenderer_base_1a',
                                    t && 'difficultyItemRenderer_base__disable_7f',
                                ),
                            },
                            c().createElement(
                                C,
                                {
                                    header: R.strings.halloween_platoon.platoon.difficulty.$dyn(`level_${u}`),
                                    body: R.strings.halloween_platoon.platoon.commander.difficulty_body(),
                                },
                                c().createElement(
                                    'div',
                                    { className: 'difficultyItemRenderer_name_57' },
                                    c().createElement('div', { className: 'difficultyItemRenderer_label_25' }, e),
                                    c().createElement('div', {
                                        className: 'difficultyItemRenderer_icon_1a',
                                        style: { backgroundImage: `url(${ju(u, t, n)})` },
                                    }),
                                ),
                            ),
                            t &&
                                c().createElement(
                                    C,
                                    {
                                        header: R.strings.halloween_platoon.platoon.difficulty.lock_header(),
                                        body: R.strings.halloween_lobby.difficult.tooltip.lockedDescr.$dyn(`level${u}`),
                                    },
                                    c().createElement('div', { className: 'difficultyItemRenderer_iconLock_af' }),
                                ),
                            r &&
                                c().createElement(
                                    C,
                                    {
                                        header: R.strings.halloween_platoon.platoon.difficulty.warning_header(),
                                        body: R.strings.halloween_platoon.platoon.difficulty.warning_body(),
                                    },
                                    c().createElement('div', { className: 'difficultyItemRenderer_iconWarning_4c' }),
                                ),
                        );
                function Gu() {
                    return (
                        (Gu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Gu.apply(null, arguments)
                    );
                }
                const qu = ({ selectionDisabled: e }) => {
                        const u = G('model.btnInviteFriends');
                        return c().createElement(
                            c().Fragment,
                            null,
                            c().createElement(
                                'div',
                                { className: 'CommanderControls_left_37' },
                                c().createElement($u, {
                                    itemRenderer: Uu,
                                    controlRenderer: Hu,
                                    modelPath: 'model.eventDifficulty',
                                    size: ze.ExtraSmall,
                                    pure: !0,
                                    classMix: { item: 'CommanderControls_ddlItem_8a' },
                                    variant: e ? Le.Disabled : Le.Basic,
                                }),
                            ),
                            c().createElement(X, Gu({}, u, { cButtonProps: { type: w.secondary } })),
                        );
                    },
                    Ku = ({ currency: e, amount: u }) => {
                        const t = R.images.gui.maps.icons.platoon.members_window.currencies.$dyn(e),
                            n = (0, l.useMemo)(() => q(t), [t]);
                        return c().createElement(
                            'div',
                            { className: 'Bonus_base_96' },
                            c().createElement('div', { className: 'Bonus_currencyImage_16', style: n }),
                            c().createElement('span', { className: 'Bonus_caption_7e' }, `+${u}%`),
                        );
                    },
                    Yu = () => {
                        const e = G('model.header.bonuses');
                        return 0 === e.length
                            ? null
                            : c().createElement(
                                  'div',
                                  { className: 'Bonuses_base_6f' },
                                  e
                                      .filter((e) => e)
                                      .map(({ value: e }) =>
                                          c().createElement(Ku, {
                                              currency: e.currency,
                                              amount: e.amount,
                                              key: e.currency,
                                          }),
                                      ),
                              );
                    },
                    Xu = (e) => {
                        var u;
                        const t = null == (u = e.meta) ? void 0 : u.tooltipText;
                        return c().createElement(
                            C,
                            { isEnabled: t, body: t },
                            c().createElement('span', null, e.label),
                        );
                    },
                    Zu = () => {
                        const e = G('model.header.memberCountDropdown'),
                            u = e.isDisabled,
                            t = e.tooltipText,
                            n = { body: t };
                        return c().createElement(
                            c().Fragment,
                            null,
                            c().createElement($u, {
                                modelPath: 'model.header.memberCountDropdown',
                                classMix: {
                                    base: 'DropDown_memberCountDropdown_67',
                                    item: 'DropDown_memberCountDropdownItem_f5',
                                },
                                size: ze.Small,
                                itemRenderer: Xu,
                                variant: u ? Le.Disabled : Le.Basic,
                                tooltipArgs: t ? n : void 0,
                                pure: !0,
                            }),
                            c().createElement(
                                'div',
                                { className: 'DropDown_memberCountDescription_8a' },
                                R.strings.comp7.membersWindow.memberCountDropdown.description(),
                            ),
                        );
                    },
                    Qu = ({ binding: e, text: u = '', classMix: t, alignment: n = Be.left, formatWithBrackets: r }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const a = r && e ? ((s = e), u.replace(/\{\w+\}/g, (e) => String(s[e.slice(1, -1)]))) : u;
                        var s;
                        return c().createElement(
                            l.Fragment,
                            null,
                            a.split('\n').map((u, r) =>
                                c().createElement(
                                    'div',
                                    { className: o()('FormatText_base_d0', t), key: `${u}-${r}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = Be.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return we.includes(t)
                                                          ? he(e)
                                                          : 'ja' === t
                                                            ? (0, pe.D4)()
                                                                  .parse(e)
                                                                  .map((e) => fe(e))
                                                            : ((e, u = Be.left) => {
                                                                  let t = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = fe(e);
                                                                  return (
                                                                      ve(r, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(ve(e, n, Be.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, n, e).map((e, u) =>
                                        c().createElement(l.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    Ju = () => {
                        const e = G('model.header.noBonusPlaceholder'),
                            u = e.text,
                            t = e.icon,
                            n = t && q(t);
                        return l.createElement(
                            l.Fragment,
                            null,
                            u &&
                                l.createElement(
                                    'div',
                                    { className: 'NoBonus_textContainer_ef' },
                                    l.createElement(Qu, {
                                        text: u,
                                        classMix: 'NoBonus_textMix_ff',
                                        alignment: Be.right,
                                    }),
                                ),
                            n && l.createElement('div', { style: n, className: 'NoBonus_icon_69' }),
                        );
                    };
                let et;
                !(function (e) {
                    (e.Squad = 'squad'),
                        (e.Event = 'event'),
                        (e.Epic = 'epic'),
                        (e.BattleRoyal = 'battle_royal'),
                        (e.MapBox = 'mapbox'),
                        (e.Comp7 = 'comp7'),
                        (e.FunRandom = 'funRandom');
                })(et || (et = {}));
                function ut() {
                    return (
                        (ut = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ut.apply(null, arguments)
                    );
                }
                const tt = () => {
                    const e = G().prebattleType,
                        u = G('model.header.btnLeavePlatoon'),
                        t = G('model.header.btnMuteAll'),
                        n = G('model.header'),
                        r = n.backgroundImage,
                        a = n.showNoBonusPlaceholder,
                        s = n.showInfoIcon,
                        i = e === et.Comp7,
                        d = (0, l.useCallback)(() => {
                            u.onClick(), g(R.sounds.gui_platoon_2_leave());
                        }, [u]),
                        E = (0, l.useCallback)(() => t.onClick(), [t]);
                    return c().createElement(
                        'div',
                        { className: o()('Header_base_e7', i && 'Header_base__wide_47'), style: q(r) },
                        c().createElement(
                            'div',
                            { className: 'Header_buttons_2e' },
                            c().createElement(
                                'div',
                                { className: 'Header_buttonContainer_c2' },
                                c().createElement(
                                    X,
                                    ut({}, u, {
                                        onClick: d,
                                        cButtonProps: { type: w.secondary },
                                        className: o()(i && 'Header_leavePlatoonButton_27'),
                                    }),
                                ),
                                i &&
                                    c().createElement(
                                        'div',
                                        { className: 'Header_dropdowns_d3' },
                                        c().createElement(Zu, null),
                                    ),
                            ),
                            t.isVisible &&
                                c().createElement(
                                    C,
                                    { header: t.tooltipHeader, body: t.tooltipBody },
                                    c().createElement(
                                        'div',
                                        { className: 'Header_muteButtonContainer_1b' },
                                        c().createElement(
                                            me,
                                            { onClick: E, active: t.isSelected },
                                            c().createElement('div', { className: 'Header_muteIcon_8b' }),
                                        ),
                                    ),
                                ),
                        ),
                        a ? c().createElement(Ju, null) : c().createElement(Yu, null),
                        s && c().createElement(K, null),
                    );
                };
                let nt;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(nt || (nt = {}));
                const rt = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: n = 0,
                        args: r,
                        isEnabled: a = !0,
                        onMouseDown: o,
                    }) => {
                        const s = (0, l.useCallback)(() => {
                                (0, i.c9)(i.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    v.playYes();
                            }, [r, u, t, n]),
                            c = (0, l.useCallback)(() => {
                                (0, i.c9)(i.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, n]),
                            d = (0, l.useCallback)(
                                (e) => {
                                    o && o(e), ((e) => e.button === nt.RIGHT)(e) && s();
                                },
                                [o, s],
                            );
                        return (
                            (0, l.useEffect)(() => {
                                !1 === a && c();
                            }, [a, c]),
                            a ? (0, l.cloneElement)(e, { onMouseDown: d }) : e
                        );
                    },
                    at = ['children'];
                function ot() {
                    return (
                        (ot = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ot.apply(null, arguments)
                    );
                }
                const st = (e) => {
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
                            })(e, at);
                        return c().createElement(
                            rt,
                            ot({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    it = ({ estimatedTime: e }) =>
                        c().createElement(
                            c().Fragment,
                            null,
                            c().createElement('div', null, R.strings.platoon.members.card.searching()),
                            c().createElement('span', null, '(', e, ')'),
                        );
                let lt, ct;
                !(function (e) {
                    (e.Squad = 'squad'),
                        (e.Event = 'event'),
                        (e.Comp7 = 'comp7'),
                        (e.BattleRoyal = 'battle_royal'),
                        (e.Epic = 'epic'),
                        (e.MapBox = 'mapbox');
                })(lt || (lt = {})),
                    (function (e) {
                        (e[(e.None = 0)] = 'None'), (e[(e.ModeOffline = 1)] = 'ModeOffline');
                    })(ct || (ct = {}));
                const dt = ({ slotLabelElements: e }) => {
                        const u = (0, l.useMemo)(() => (e) => ('' === e ? {} : JSON.parse(e)), []);
                        return c().createElement(
                            c().Fragment,
                            null,
                            e.map(({ value: e }, t) =>
                                c().createElement(
                                    'div',
                                    { key: e.content + t, style: u(e.styleJson) },
                                    c().createElement(Qu, { text: e.content, classMix: 'SlotLabel_formattedText_e8' }),
                                ),
                            ),
                        );
                    },
                    Et = {
                        base: 'NoPlayer_base_a3',
                        base__disabled: 'NoPlayer_base__disabled_47',
                        central: 'NoPlayer_central_72',
                        image: 'NoPlayer_image_f5',
                        image__disabled: 'NoPlayer_image__disabled_f1',
                        image__empty: 'NoPlayer_image__empty_a7',
                        image__spinner: 'NoPlayer_image__spinner_f4',
                        spinner: 'NoPlayer_spinner_8b',
                        footer: 'NoPlayer_footer_06',
                    };
                let _t;
                !(function (e) {
                    (e.spinner = 'spinner'), (e.disabled = 'disabled'), (e.empty = 'empty');
                })(_t || (_t = {}));
                const mt = ({ text: e, type: u, slotLabelElements: t }) => {
                        const n = o()(Et.base, u === _t.disabled && Et.base__disabled),
                            r = o()(Et.image, Et[`image__${u}`]);
                        return c().createElement(
                            'div',
                            { className: n },
                            c().createElement(
                                'div',
                                { className: Et.central },
                                c().createElement('div', { className: r }),
                                e,
                            ),
                            c().createElement(
                                'div',
                                { className: Et.footer },
                                t.length > 0 && c().createElement(dt, { slotLabelElements: t }),
                            ),
                        );
                    },
                    At = (e, u, t, n) => {
                        let r = R.images.gui.maps.icons.platoon.members_window.tall_slot.cards;
                        if (n && n !== lt.Squad) {
                            const e = r.$dyn(n.toString());
                            e && (r = e);
                        }
                        let a = null;
                        return (
                            (a = e
                                ? r.$dyn('in_battle')
                                : u
                                  ? t
                                      ? r.$dyn('ready_player')
                                      : r.$dyn('ready')
                                  : t
                                    ? r.$dyn('not_ready_player')
                                    : r.$dyn('not_ready')),
                            a || At(e, u, t)
                        );
                    },
                    Ft = ({ rating: e }) =>
                        c().createElement(
                            'div',
                            { className: 'WTRInfo_wtr_5e' },
                            c().createElement('div', { className: 'WTRInfo_wtrIcon_a9' }),
                            c().createElement('span', { className: 'WTRInfo_wtrValue_80' }, e),
                        ),
                    Dt = (e) => e.replace('-', '_'),
                    Ct = (e, u) =>
                        String(
                            u
                                ? R.images.gui.maps.icons.vehicleTypes.elite.$dyn(Dt(e))
                                : R.images.gui.maps.icons.vehicleTypes.$dyn(Dt(e)),
                        ),
                    pt = (e, u) => String(R.images.gui.maps.icons.vehicle.c_420x307.$dyn(Dt(u).toLowerCase())),
                    Bt = (e, u) =>
                        String(R.images.gui.maps.icons.battleRoyale.vehicles.c_210x153.$dyn(Dt(u).toLowerCase())),
                    ft = () => {
                        const e = R.strings.platoon.members.card.muted.caption(),
                            u = R.strings.platoon.members.card.muted.description();
                        return c().createElement(
                            C,
                            { header: e, body: u },
                            c().createElement('div', { className: 'MutedIcon_base_d2' }),
                        );
                    };
                let bt;
                !(function (e) {
                    (e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220');
                })(bt || (bt = {}));
                const gt = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    vt = { [bt.default]: 'c_24x24', [bt.x48]: 'c_48x48', [bt.x80]: 'c_80x80', [bt.x220]: 'c_220x220' },
                    ht = ({ badgeID: e, size: u = bt.default, className: t }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(vt[u]);
                        return c().createElement('div', {
                            className: o()(gt.base, gt[`base__${u}`], t),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${e}`)})` },
                        });
                    },
                    wt = {
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
                    yt = (0, l.memo)(({ tooltipHeaderName: e }) => {
                        const u = (0, l.useMemo)(() => {
                                return (
                                    (u = R.strings.tooltips.anonymizer.teamStats.header()),
                                    (t = { name: e }),
                                    u.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(t[e.slice(u, -u)]);
                                    })
                                );
                                var u, t;
                            }, [e]),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return c().createElement(
                            C,
                            { header: u, body: t },
                            c().createElement('div', { className: wt.anonymizedIcon }),
                        );
                    });
                function kt() {
                    return (
                        (kt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        kt.apply(null, arguments)
                    );
                }
                const Nt = { [bt.default]: 'c_64x24', [bt.x48]: 'c_68x28' },
                    Tt = { [bt.default]: 'c_48x48', [bt.x48]: 'c_48x48' },
                    St = ({
                        userName: e,
                        clanAbbrev: u = '',
                        igrType: t = 0,
                        badge: n = { badgeID: '' },
                        suffixBadge: r = { badgeID: '' },
                        isInverted: a = !1,
                        isFakeNameVisible: s = !1,
                        isAnonymizerShown: i = !1,
                        hiddenUserName: d = '',
                        size: E = bt.default,
                        userNameClassName: _ = '',
                        clanTagClassName: m = '',
                    }) => {
                        const A = R.images.gui.maps.icons.library.badges.strips.$dyn(Nt[E]),
                            F = (0, l.useMemo)(
                                () => ({ backgroundImage: `url(${A.$dyn(`strip_${r.badgeID}`)})` }),
                                [r, A],
                            ),
                            D = R.images.gui.maps.icons.library.badges.$dyn(Tt[E]),
                            C = (0, l.useMemo)(
                                () => ({ backgroundImage: `url(${D.$dyn(`badge_${r.badgeID}`)})` }),
                                [r, D],
                            ),
                            p = u ? `[${u}]` : '',
                            B = o()(wt.base, wt[`base__${E}`], a && wt.base__inverted),
                            f = o()(wt.userName, _),
                            b = o()(wt.clanTag, m),
                            g = e !== d,
                            v = s ? `${d}${p}` : d,
                            h = Boolean(n.badgeID) && c().createElement(ht, kt({ size: E }, n, { key: 'badge' })),
                            w = Date.now(),
                            y = [
                                h,
                                [
                                    c().createElement(
                                        'div',
                                        { className: f, key: 'userName' },
                                        c().createElement(He, { content: e, key: w }),
                                    ),
                                    !s && Boolean(p) && c().createElement('div', { className: b, key: 'clanTag' }, p),
                                ],
                                0 !== t && c().createElement('div', { className: wt.igrIcon, key: 'igrType' }),
                                Boolean(r.badgeID) &&
                                    c().createElement(
                                        'div',
                                        { className: wt.suffixBadgeWrapper, key: 'suffixBadge' },
                                        c().createElement('div', { className: wt.suffixBadgeStripe, style: F }),
                                        c().createElement('div', { className: wt.suffixBadge, style: C }),
                                    ),
                                i && g && c().createElement(yt, { tooltipHeaderName: v, key: 'anonymizer' }),
                            ];
                        return c().createElement('div', { className: B }, a ? y.reverse() : y);
                    },
                    xt = { badgeID: '' },
                    Rt = ({ name: e, badgeID: u, clanTag: t, color: n }) => {
                        const r = (0, l.useMemo)(() => ({ badgeID: u || '' }), [u]),
                            a = (0, l.useMemo)(() => ({ color: n }), [n]);
                        return c().createElement(
                            'div',
                            { style: a },
                            c().createElement(St, {
                                userName: e,
                                badge: r,
                                suffixBadge: xt,
                                clanAbbrev: t,
                                userNameClassName: 'PlayerName_userName_c9',
                            }),
                        );
                    },
                    Pt = (0, l.memo)(({ src: e, className: u, autoPlay: t = !1, loop: n = !1 }) => {
                        const r = (0, l.useRef)(null);
                        return (
                            (0, l.useEffect)(() => {
                                engine.on('clientMinimized', (e) => {
                                    r.current && (e ? r.current.pause() : r.current.play());
                                });
                            }, []),
                            c().createElement('video', { ref: r, className: u, src: e, autoPlay: t, loop: n })
                        );
                    });
                Pt.displayName = 'Video';
                const Mt = ({ visible: e }) => {
                    const u = o()(
                        'VoiceAnimation_talkingAnimation_c4',
                        e && 'VoiceAnimation_talkingAnimation__visible_18',
                    );
                    return c().createElement(Pt, {
                        src: R.videos.platoon.VoiceChat(),
                        autoPlay: !0,
                        loop: !0,
                        className: u,
                    });
                };
                let Ot;
                !(function (e) {
                    (e.IRON = 'iron'),
                        (e.BRONZE = 'bronze'),
                        (e.SILVER = 'silver'),
                        (e.GOLD = 'gold'),
                        (e.ENAMEL = 'enamel'),
                        (e.MAXIMUM = 'prestige'),
                        (e.UNDEFINED = 'undefined');
                })(Ot || (Ot = {}));
                const It = {
                        base: 'PrestigeProgressTab_base_7c',
                        icon: 'PrestigeProgressTab_icon_0a',
                        base__left: 'PrestigeProgressTab_base__left_55',
                        level: 'PrestigeProgressTab_level_ba',
                        base__right: 'PrestigeProgressTab_base__right_5d',
                        base__iron: 'PrestigeProgressTab_base__iron_03',
                        base__bronze: 'PrestigeProgressTab_base__bronze_b8',
                        base__silver: 'PrestigeProgressTab_base__silver_ef',
                        base__gold: 'PrestigeProgressTab_base__gold_b6',
                        base__enamel: 'PrestigeProgressTab_base__enamel_39',
                    },
                    Lt = R.strings.prestige.tooltip.tab,
                    zt = R.images.gui.maps.icons.prestige.tab,
                    Wt = (e) => {
                        return e.type === Ot.MAXIMUM
                            ? zt.prestige()
                            : zt
                                  .$dyn(e.type)
                                  .$dyn((u = e.level) < 10 ? 'short' : u < 100 ? 'medium' : 'long')
                                  .$dyn(`c_${e.grade}`);
                        var u;
                    },
                    $t = ({ emblem: e, direction: u = 'right', isTooltipEnabled: t = !1 }) =>
                        e.type === Ot.UNDEFINED
                            ? null
                            : c().createElement(
                                  C,
                                  { header: Lt.header(), body: Lt.body(), isEnabled: t },
                                  c().createElement(
                                      'div',
                                      { className: o()(It.base, It[`base__${e.type}`], It[`base__${u}`]) },
                                      c().createElement('div', {
                                          className: It.icon,
                                          style: { backgroundImage: `url(${Wt(e)})` },
                                      }),
                                      e.type !== Ot.MAXIMUM &&
                                          c().createElement('div', { className: It.level }, e.level),
                                  ),
                              ),
                    Ht = {
                        base: 'VehicleDescription_base_39',
                        vehicleType: 'VehicleDescription_vehicleType_fd',
                        vehicleType__elite: 'VehicleDescription_vehicleType__elite_fb',
                        prestigeTab__short: 'VehicleDescription_prestigeTab__short_b0',
                        prestigeTab__medium: 'VehicleDescription_prestigeTab__medium_06',
                        prestigeTab__long: 'VehicleDescription_prestigeTab__long_fe',
                    },
                    Vt = ({
                        type: e,
                        name: u,
                        isPremium: t,
                        isPrestigeAvailable: n,
                        prestigeEmblem: r,
                        className: a,
                    }) => {
                        const s = n && r.type !== Ot.UNDEFINED,
                            i = t || s;
                        return c().createElement(
                            'div',
                            { className: o()(Ht.base, a) },
                            c().createElement('div', {
                                className: o()(Ht.vehicleType, i && Ht.vehicleType__elite),
                                style: q(Ct(e, i)),
                            }),
                            u,
                            s &&
                                c().createElement(
                                    'div',
                                    {
                                        className: o()(
                                            Ht.prestigeTab,
                                            ((l = r),
                                            l.type === Ot.MAXIMUM
                                                ? Ht.prestigeTab__medium
                                                : l.level < 10
                                                  ? Ht.prestigeTab__short
                                                  : l.level < 100
                                                    ? Ht.prestigeTab__medium
                                                    : Ht.prestigeTab__long),
                                        ),
                                    },
                                    c().createElement($t, { emblem: r, isTooltipEnabled: !0 }),
                                ),
                        );
                        var l;
                    },
                    jt = 'Player_flagImage_16';
                function Ut() {
                    return (
                        (Ut = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ut.apply(null, arguments)
                    );
                }
                const Gt = ({ player: e, isInBattle: u, infoText: t, prebattleType: n }) => {
                        const r = o()('Player_readiness_87', e.isReady && !u && 'Player_readiness__isReady_f6'),
                            a = n === lt.BattleRoyal ? Bt : pt,
                            s = e.isReady ? a(e.vehicle.nation, e.vehicle.techName) : '',
                            i = e.isReady
                                ? String(
                                      R.images.gui.maps.icons.platoon.members_window.tall_slot.flags.$dyn(
                                          e.vehicle.nation,
                                      ),
                                  )
                                : '',
                            d = (0, l.useMemo)(
                                () => At(u, e.isReady, e.isCurrentUser, n),
                                [u, e.isReady, e.isCurrentUser, n],
                            ),
                            E = o()(
                                'Player_topping_ca',
                                e.isCommander ? 'Player_topping__isCommander_97' : 'Player_topping__isPlayer_cf',
                            );
                        return c().createElement(
                            'div',
                            { className: 'Player_base_ee', style: q(d) },
                            c().createElement(
                                'div',
                                { className: E },
                                c().createElement('div', { className: 'Player_toppingBack_be' }),
                                e.isPrem && c().createElement('div', { className: 'Player_toppingPremiumIcon_c5' }),
                                c().createElement(Mt, { visible: e.voice.isSpeaking }),
                                c().createElement('div', { className: 'Player_toppingPlayerIcon_04' }),
                            ),
                            !u &&
                                e.isReady &&
                                c().createElement(
                                    c().Fragment,
                                    null,
                                    c().createElement('div', { className: jt, style: q(i) }),
                                    c().createElement('div', { className: 'Player_vehicleImage_de', style: q(s) }),
                                ),
                            e.isIgnored &&
                                c().createElement('div', {
                                    className: jt,
                                    style: q(R.images.gui.maps.icons.platoon.members_window.tall_slot.cards.ignored()),
                                }),
                            c().createElement(
                                'div',
                                { className: 'Player_mutedContainer_d1' },
                                e.voice.isMutedByUser && c().createElement(ft, null),
                            ),
                            c().createElement(
                                'div',
                                { className: 'Player_name_26' },
                                c().createElement(Rt, e.commonData),
                            ),
                            '' !== e.commonData.rating && c().createElement(Ft, { rating: e.commonData.rating }),
                            c().createElement(
                                'div',
                                { className: 'Player_footer_6f' },
                                e.isReady && !u
                                    ? c().createElement(
                                          Vt,
                                          Ut({}, e.vehicle, {
                                              isPrestigeAvailable: e.isPrestigeAvailable,
                                              prestigeEmblem: e.prestigeEmblem,
                                          }),
                                      )
                                    : t,
                            ),
                            c().createElement('div', { className: r }),
                        );
                    },
                    qt = (e) => {
                        const u = (0, l.useMemo)(
                            () =>
                                e.isEmpty
                                    ? ((e) =>
                                          e.isDisabled
                                              ? {
                                                    text: R.strings.platoon.members.card.disabled(),
                                                    type: _t.disabled,
                                                    slotLabelElements: e.slotLabelElements,
                                                }
                                              : e.isSearching
                                                ? {
                                                      text: c().createElement(it, { estimatedTime: e.estimatedTime }),
                                                      type: _t.spinner,
                                                      slotLabelElements: e.slotLabelElements,
                                                  }
                                                : {
                                                      text: R.strings.platoon.members.card.empty(),
                                                      type: _t.empty,
                                                      slotLabelElements: e.slotLabelElements,
                                                  })(e)
                                    : {
                                          isInBattle: e.isInBattle,
                                          player: e.player,
                                          infoText: e.infoText,
                                          prebattleType: e.prebattleType,
                                      },
                            [e],
                        );
                        return (0, l.useMemo)(() => (e) => void 0 !== e.isInBattle, [])(u)
                            ? c().createElement(Gt, u)
                            : c().createElement(mt, u);
                    };
                var Kt = t(8045);
                const Yt = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
                let Xt, Zt, Qt;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Xt || (Xt = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Zt || (Zt = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Qt || (Qt = {}));
                const Jt = { [Qt.NBSP]: Xt.NoBreakSymbol, [Qt.ZWNBSP]: Xt.NoBreakSymbol, [Qt.NEW_LINE]: Xt.LineBreak },
                    en = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    un = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    tn = 'renderers_word_f3',
                    nn = (e) => ({ color: `#${e}` }),
                    rn = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? un[n]
                                ? c().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: o()(tn, un[n]) },
                                      e,
                                  )
                                : c().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: tn, style: nn(n) },
                                      e,
                                  )
                            : c().createElement('span', { key: t, 'data-block-type': u.blockType, className: tn }, e);
                    },
                    an = {
                        [Xt.Word]: rn,
                        [Xt.NoBreakSymbol]: rn,
                        [Xt.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            c().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => c().createElement(c().Fragment, { key: t }, e)),
                            ),
                        [Xt.LineBreak]: ({ key: e }) =>
                            c().createElement('span', {
                                key: e,
                                'data-block-type': Xt.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [Xt.NewLine]: ({ elementList: e, key: u }) =>
                            c().createElement(
                                'span',
                                { key: u, 'data-block-type': Xt.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [Xt.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            c().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': Xt.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    on = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, a) => {
                                const o = `${t}_${a}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        u = e.blockType,
                                        t = on(e, an[u], o);
                                    n.push(...t);
                                } else n.push(u({ elementList: [r], textBlock: e, key: o }));
                            }),
                            n
                        );
                    },
                    sn = (e, u, t, n) => {
                        let r = u.exec(e),
                            a = 0;
                        for (; r; ) a !== r.index && t(e.slice(a, r.index)), n(r), (a = u.lastIndex), (r = u.exec(e));
                        a !== e.length && t(e.slice(a));
                    },
                    ln = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    cn = en
                        ? (e) => {
                              const u = [];
                              return (
                                  sn(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(
                                              ...((e) => {
                                                  const u = [];
                                                  return (
                                                      sn(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var t;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? u.push(...((t = e), t.match(ln) || []))
                                                                  : u.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              u.push(e[0]);
                                                          },
                                                      ),
                                                      u
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(e);
                              if (!n) return [e];
                              const r = [];
                              let a = 0;
                              for (; n; ) {
                                  const o = u.justifyContent === Zt.FlexEnd ? n.index : t.lastIndex;
                                  r.push(e.slice(a, o)), (a = o), (n = t.exec(e));
                              }
                              return a !== e.length && r.push(e.slice(a)), r;
                          },
                    dn = (e, u = '', t) => {
                        const n = [];
                        return (
                            sn(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Xt.Word, colorTag: u, childList: cn(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        r = Jt[t.charAt(0)];
                                    r === Xt.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: Xt.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: Xt.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : n.push({ blockType: r, colorTag: u, childList: [t] });
                                },
                            ),
                            n
                        );
                    },
                    En = (e, u, t = '', n) => {
                        const r = [];
                        return (
                            sn(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...dn(e, t, n));
                                },
                                (e) => {
                                    const a = e[1],
                                        o = void 0 === u[a] ? e[0] : u[a];
                                    'string' == typeof o || 'number' == typeof o
                                        ? r.push(...dn(String(o), t, n))
                                        : r.push({ blockType: Xt.Binding, colorTag: t, childList: [o] });
                                },
                            ),
                            r
                        );
                    },
                    _n = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === Xt.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: Xt.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    mn = (e, u = {}, t) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Xt.NoBreakSymbol
                                        ? ((t = !0), u.push(..._n(u.pop(), e)))
                                        : (t ? u.push(..._n(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const n = [];
                                return (
                                    sn(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...En(e, u, '', t));
                                        },
                                        (e) => {
                                            n.push(...En(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    n
                                );
                            })(fe(e).replace(/&zwnbsp;/g, '\ufeff'), u, t),
                        );
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                n = e.blockType,
                                                r = an[n],
                                                a = on(e, r, u);
                                            return (
                                                n === Xt.NoBreakWrapper
                                                    ? t.push(r({ elementList: a, textBlock: e, key: `${u}` }))
                                                    : t.push(...a),
                                                t
                                            );
                                        })(e, t),
                                    );
                                }),
                                u
                            );
                        })(n);
                    },
                    An = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    Fn = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    Dn = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = Fn(e, u),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            o = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / a);
                            return n >= t ? [!0, t + o] : [!1, n];
                        }
                        const s = Math.max(t + o, 0);
                        return r < s ? [!1, 0] : [!0, s];
                    },
                    Cn = (e, u, t, n, r, a) => {
                        let o = -1,
                            s = null;
                        for (let i = t; i >= 0; i--) {
                            const t = e[i],
                                l = Number(e[i].getAttribute('data-block-type'));
                            if (l === Xt.LineBreak || l === Xt.NewLine || l === Xt.Binding) continue;
                            const d = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = Dn(t, n, r),
                                    l = e[0],
                                    E = e[1];
                                if (!l) {
                                    E > 0 && (r -= E);
                                    continue;
                                }
                                const _ = d.slice(0, d.length - E) + a,
                                    m = u[i];
                                (s = c().cloneElement(m, m.props, _)), (o = i);
                                break;
                            }
                            {
                                const e = t.children,
                                    l = u[i],
                                    E = l.props.children,
                                    _ = Cn(e, E, e.length - 1, n, r, a),
                                    m = _[0],
                                    A = _[1];
                                if (!(m < 0)) {
                                    const e = E.slice(0, m);
                                    (s = c().cloneElement(l, l.props, e, A)), (o = i);
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [o, s];
                    },
                    pn = c().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: n,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: a = !1,
                            customTooltipArgs: s,
                            targetId: i,
                            justifyContent: d = Zt.FlexStart,
                            alignContent: E = Zt.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const m = (0, l.useRef)(null),
                                A = (0, l.useRef)({ height: 0, width: 0 }),
                                F = (0, l.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                D = F[0],
                                C = F[1],
                                p = (0, l.useMemo)(() => mn(e, n, { justifyContent: d }), [n, d, e]),
                                B = (0, l.useMemo)(() => {
                                    if (
                                        r &&
                                        D.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, s, {
                                                stringifyKwargs: n ? JSON.stringify(n) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: i,
                                        };
                                }, [n, r, i, e, s, D.isTruncated]),
                                f = (0, l.useCallback)(
                                    (e) => {
                                        (A.current.width = e.contentRect.width),
                                            (A.current.height = e.contentRect.height);
                                        const u = ((e, u, t, n = '...') => {
                                                const r = [...u],
                                                    a = e.current;
                                                if (!a) return [r, !1];
                                                const o = t.height,
                                                    s = t.width,
                                                    i = a.lastElementChild;
                                                if (!An(i, o) && Fn(i, s) <= 0) return [r, !1];
                                                const l = a.children,
                                                    c = ((e, u) => {
                                                        let t = 0,
                                                            n = e.length - 1;
                                                        for (; n - t >= 0; ) {
                                                            const r = t + Math.ceil(0.5 * (n - t));
                                                            An(e[r], u) ? (n = r - 1) : (t = r + 1);
                                                        }
                                                        return t - 1;
                                                    })(l, o);
                                                if (c < 0) return [r, !1];
                                                const d = Cn(l, r, c, s, n.length, n),
                                                    E = d[0],
                                                    _ = d[1];
                                                return _ && (r.splice(E, 1, _), r.splice(E + 1)), [r, !0];
                                            })(m, p, A.current, _),
                                            n = u[0],
                                            r = u[1];
                                        C({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                    },
                                    [t, _, p],
                                ),
                                b = (0, l.useMemo)(() => ({ justifyContent: d, alignContent: E }), [E, d]);
                            return (
                                ((e, u, t = !0) => {
                                    const n = (0, l.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, l.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new Kt.Z((e) => n(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [n, t, e]);
                                })(m, f, a),
                                c().createElement(
                                    'div',
                                    {
                                        className: o()(
                                            Yt.base,
                                            u,
                                            Yt.base__zeroPadding,
                                            a && Yt.base__isTruncationAvailable,
                                        ),
                                        style: b,
                                    },
                                    c().createElement('div', { className: Yt.unTruncated, ref: m }, p),
                                    c().createElement(
                                        Pe,
                                        {
                                            tooltipArgs: B,
                                            className: o()(
                                                Yt.tooltip,
                                                Yt[`tooltip__justify-${d}`],
                                                Yt[`tooltip__align-${E}`],
                                            ),
                                        },
                                        c().createElement(
                                            'div',
                                            {
                                                className: o()(
                                                    Yt.truncated,
                                                    !D.isTruncateFinished && a && Yt.truncated__hide,
                                                ),
                                                style: b,
                                            },
                                            D.isTruncateFinished && a ? D.elementList : p,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Bn = R.images.gui.maps.icons.platoon.members_window.wide_slot,
                    fn = Bn.cards,
                    bn = R.images.halloween.gui.maps.icons.platoon.members_window,
                    gn = R.strings.platoon.members.card,
                    vn = ({ slot: e, player: u }) => {
                        const t = e.isInBattle,
                            n = e.isEmpty,
                            r = e.isDisabled,
                            a = e.errorType,
                            o = u.isReady,
                            s = u.isCurrentUser;
                        return a
                            ? fn.$dyn('error_' + a)
                            : t
                              ? fn.in_battle_wide()
                              : n
                                ? fn.empty_wide()
                                : r
                                  ? fn.disable_wide()
                                  : o
                                    ? s
                                        ? bn.ready_player()
                                        : bn.ready_wide()
                                    : o
                                      ? void 0
                                      : s
                                        ? bn.not_ready_player()
                                        : bn.not_ready_wide();
                    },
                    hn = ({ slot: e, player: u }) => {
                        const t = e.isSearching,
                            n = e.isEmpty,
                            r = e.isDisabled,
                            a = u.isCommander,
                            o = u.isPrem;
                        return t
                            ? Bn.spinner()
                            : r
                              ? Bn.disabled()
                              : n
                                ? Bn.empty()
                                : a
                                  ? o
                                      ? Bn.commander_prem()
                                      : Bn.commander()
                                  : a
                                    ? void 0
                                    : o
                                      ? Bn.member_prem()
                                      : Bn.member();
                    };
                function wn() {
                    return (
                        (wn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        wn.apply(null, arguments)
                    );
                }
                const yn = ({ vehicle: e, isPrestigeAvailable: u, prestigeEmblem: t }) => {
                        const n =
                            ((r = e.nation),
                            (a = e.techName),
                            String(R.images.gui.maps.icons.vehicle.$dyn(`${r}_${Dt(a)}`)));
                        var r, a;
                        return c().createElement(
                            'div',
                            { className: 'Vehicle_base_0d' },
                            c().createElement(
                                Vt,
                                wn({}, e, {
                                    className: 'Vehicle_description_69',
                                    isPrestigeAvailable: u,
                                    prestigeEmblem: t,
                                }),
                            ),
                            c().createElement('div', { className: 'Vehicle_vehicle_2c', style: q(n) }),
                        );
                    },
                    kn = {
                        base: 'WideSlot_base_64',
                        mutedContainer: 'WideSlot_mutedContainer_b9',
                        icon: 'WideSlot_icon_97',
                        memberType: 'WideSlot_memberType_a7',
                        spinner: 'WideSlot_spinner_6a',
                        badge: 'WideSlot_badge_c0',
                        mainContent: 'WideSlot_mainContent_52',
                        mainContent__isEmpty: 'WideSlot_mainContent__isEmpty_94',
                        flag: 'WideSlot_flag_21',
                        detailsContainer: 'WideSlot_detailsContainer_a0',
                        readiness: 'WideSlot_readiness_de',
                        level: 'WideSlot_level_19',
                        level__easy: 'WideSlot_level__easy_78',
                        level__medium: 'WideSlot_level__medium_a5',
                        level__hard: 'WideSlot_level__hard_3e',
                        level__defence: 'WideSlot_level__defence_3b',
                    },
                    Nn = (e) => {
                        const u = e.player;
                        return c().createElement(
                            m,
                            {
                                contentId: R.views.lobby.platoon.WTRTooltip('resId'),
                                isEnabled: '' !== u.commonData.rating,
                                args: { slotId: e.slotId },
                            },
                            c().createElement(
                                'div',
                                { className: kn.base, style: q(vn({ slot: e, player: u })) },
                                c().createElement(
                                    'div',
                                    { className: kn.mutedContainer },
                                    u.voice.isMutedByUser && c().createElement(ft, null),
                                ),
                                c().createElement(
                                    'div',
                                    { className: o()(kn.memberType, e.isDisabled && kn.isDisabled) },
                                    c().createElement(Mt, { visible: u.voice.isSpeaking }),
                                    c().createElement('div', {
                                        style: q(hn({ slot: e, player: u })),
                                        className: o()(kn.icon, e.isSearching && kn.spinner),
                                    }),
                                ),
                                c().createElement(
                                    'div',
                                    { className: o()(kn.mainContent, e.isEmpty && kn.mainContent__isEmpty) },
                                    ((e) =>
                                        e.isSearching
                                            ? `${gn.searching()} (${e.estimatedTime})`
                                            : e.isDisabled
                                              ? gn.disabledVertical()
                                              : e.isEmpty
                                                ? gn.empty()
                                                : c().createElement(Rt, e.player.commonData))(e),
                                ),
                                !e.isEmpty &&
                                    (!u.isReady || e.isInBattle) &&
                                    c().createElement(pn, {
                                        classMix: kn.detailsContainer,
                                        text: e.infoText,
                                        binding: {
                                            level_1: c().createElement(
                                                C,
                                                {
                                                    header: R.strings.halloween_platoon.platoon.difficulty.error_header(),
                                                    body: R.strings.halloween_platoon.platoon.difficulty.error_body_1(),
                                                },
                                                c().createElement('div', { className: o()(kn.level, kn.level__easy) }),
                                            ),
                                            level_2: c().createElement(
                                                C,
                                                {
                                                    header: R.strings.halloween_platoon.platoon.difficulty.error_header(),
                                                    body: R.strings.halloween_platoon.platoon.difficulty.error_body_2(),
                                                },
                                                c().createElement('div', {
                                                    className: o()(kn.level, kn.level__medium),
                                                }),
                                            ),
                                            level_3: c().createElement('div', {
                                                className: o()(kn.level, kn.level__hard),
                                            }),
                                            level_4: c().createElement(
                                                C,
                                                {
                                                    header: R.strings.halloween_platoon.platoon.difficulty.error_header(),
                                                    body: R.strings.halloween_platoon.platoon.difficulty.error_body_2(),
                                                },
                                                c().createElement('div', {
                                                    className: o()(kn.level, kn.level__defence),
                                                }),
                                            ),
                                        },
                                    }),
                                !e.isEmpty &&
                                    !(!u.isReady || e.isInBattle) &&
                                    c().createElement(
                                        'div',
                                        { className: kn.detailsContainer },
                                        c().createElement(yn, {
                                            vehicle: u.vehicle,
                                            isPrestigeAvailable: u.isPrestigeAvailable,
                                            prestigeEmblem: u.prestigeEmblem,
                                        }),
                                    ),
                                u.isReady &&
                                    !e.isInBattle &&
                                    c().createElement('div', {
                                        className: o()(kn.readiness, u.isReady && kn.readiness__isReady),
                                    }),
                            ),
                        );
                    },
                    Tn = { base__short: 'SlotContainer_base__short_e5' };
                function Sn() {
                    return (
                        (Sn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Sn.apply(null, arguments)
                    );
                }
                const xn = ({ slot: e, isHorizontal: u, isShort: t }) => {
                        const n = u ? qt : Nn,
                            r = c().createElement(
                                'div',
                                { className: o()(Tn.base, t && Tn.base__short) },
                                c().createElement(n, Sn({ key: e.slotId }, e)),
                            );
                        return e.player.isCurrentUser || e.isEmpty
                            ? r
                            : c().createElement(st, { args: { userName: e.player.commonData.name }, key: e.slotId }, r);
                    },
                    Rn = () => {
                        const e = G(),
                            u = e.isHorizontal,
                            t = e.isShort,
                            n = G('model.slots');
                        return c().createElement(
                            'div',
                            {
                                className: o()(
                                    'Slots_base_b1',
                                    u && 'Slots_base__isHorizontal_04',
                                    u && t && 'Slots_base__isHorizontal__short_00',
                                ),
                            },
                            n.map((e) =>
                                c().createElement(xn, {
                                    slot: e.value,
                                    isHorizontal: u,
                                    isShort: t,
                                    key: e.value.slotId,
                                }),
                            ),
                        );
                    },
                    Pn = 'subViews.onChanged',
                    Mn = '.html',
                    On = /^coui:\/\/gui\/.*/,
                    In = re(),
                    Ln = (e) => {
                        const u = document.createElement('script');
                        (u.src = e), (u.defer = !0), document.head.appendChild(u);
                    },
                    zn = (0, l.memo)(({ id: e, mixClass: u, children: t }) => {
                        const n = (0, l.useRef)(null),
                            r = (0, l.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            a = (0, l.useState)(!1),
                            s = a[0],
                            i = a[1],
                            d = (0, l.useState)(!0),
                            E = d[0],
                            _ = d[1],
                            m = (0, l.useCallback)(
                                (e) => {
                                    e.includes(r) &&
                                        (i(!0), engine.off(Pn, m), window.subViews.removeChildChangedCallback(r));
                                },
                                [r],
                            ),
                            A = (0, l.useCallback)((e) => {
                                In.add(
                                    () =>
                                        new Promise((u) => {
                                            const t = new MutationObserver(() => {
                                                _(!1), t.disconnect(), u();
                                            });
                                            if (n.current) {
                                                const u = document.getElementById('root');
                                                u && u.setAttribute('id', 'bugSubView'),
                                                    n.current.setAttribute('id', 'root');
                                                const r = document.createElement('link');
                                                (r.href = e.replace(Mn, '.css')),
                                                    (r.rel = 'stylesheet'),
                                                    document.head.appendChild(r),
                                                    On.test(e) &&
                                                        Ln(
                                                            e
                                                                .split('/')
                                                                .slice(0, -3)
                                                                .concat(['vendors.js'])
                                                                .join('/')
                                                                .replace('/production/', '/production/lib/'),
                                                        ),
                                                    Ln(e.replace(Mn, '.js')),
                                                    t.observe(n.current, { childList: !0 });
                                            }
                                        }),
                                );
                            }, []);
                        return (
                            (0, l.useEffect)(() => {
                                if (window.subViews.ids().includes(e)) {
                                    const u = window.subViews.get(e),
                                        t = u.path;
                                    let n = t.split('/').pop();
                                    if (n)
                                        return (
                                            (n = n.split('.')[0]),
                                            (window.subViews[n] = Object.assign({ id: e }, u)),
                                            A(t),
                                            () => {
                                                n && window.subViews[n] && delete window.subViews[n],
                                                    engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                    window.__dataTracker &&
                                                        window.__dataTracker.clearViewCallbacks &&
                                                        window.__dataTracker.clearViewCallbacks(e),
                                                    console.info(`Sub view ${n} is destroyed: ${t}`);
                                            }
                                        );
                                    console.error("subView: can't get View component name");
                                } else engine.on(Pn, m);
                            }, [m, A, e, s]),
                            c().createElement(
                                'div',
                                { className: o()('SubView_base_c6', u) },
                                E && t,
                                c().createElement('div', { ref: n }),
                            )
                        );
                    }),
                    Wn = () => {
                        const e = G(),
                            u = e.canMinimize,
                            t = e.isCommander,
                            n = e.isHorizontal,
                            r = e.isShort,
                            a = e.onClosed,
                            s = e.onMinimized,
                            i = e.onFocusChange,
                            d = e.windowTooltipHeader,
                            E = e.windowTooltipBody,
                            _ = e.rawTitle,
                            m = e.selectedDifficulty,
                            A = e.selectionDisabled,
                            F = (0, l.useCallback)(() => a(), [a]),
                            D = (0, l.useCallback)(() => s(), [s]),
                            p = (0, l.useCallback)(
                                (e) => {
                                    i({ isFocused: e });
                                },
                                [i],
                            );
                        return (
                            W(L.n.ESCAPE, () => F()),
                            c().createElement(
                                I,
                                {
                                    showMinimizeBtn: u,
                                    title: _,
                                    infoTooltipHeader: d,
                                    infoTooltipBody: E,
                                    onClose: F,
                                    onMinimize: D,
                                    onFocusChange: p,
                                },
                                c().createElement(
                                    'div',
                                    {
                                        className: o()(
                                            'MembersWindow_base_85',
                                            n
                                                ? [
                                                      'MembersWindow_base__isHorizontal_14',
                                                      r && 'MembersWindow_base__isHorizontalShort_4c',
                                                  ]
                                                : 'MembersWindow_base__isVertical_08',
                                        ),
                                    },
                                    c().createElement(
                                        'div',
                                        { className: 'MembersWindow_platoon_f0' },
                                        c().createElement(tt, null),
                                        c().createElement(de, { position: le.top }),
                                        c().createElement(Rn, null),
                                        c().createElement(
                                            'div',
                                            { className: 'MembersWindow_commanderControls_86' },
                                            t
                                                ? c().createElement(qu, { selectionDisabled: A })
                                                : c().createElement(
                                                      C,
                                                      {
                                                          header: R.strings.halloween_platoon.platoon.difficulty.$dyn(
                                                              `level_${m}`,
                                                          ),
                                                          body: R.strings.halloween_platoon.platoon.player.difficulty_body(),
                                                      },
                                                      c().createElement(
                                                          'div',
                                                          { className: 'MembersWindow_selectedDifficulty_f1' },
                                                          R.strings.halloween_platoon.platoon.difficulty.$dyn(
                                                              `level_${m}`,
                                                          ),
                                                          c().createElement('div', {
                                                              className: 'MembersWindow_icon_0a',
                                                              style: {
                                                                  backgroundImage: `url('${R.images.halloween.gui.maps.icons.difficulties.c_12x12.$dyn(`difficulty_icon_grey_${m}`)}')`,
                                                              },
                                                          }),
                                                      ),
                                                  ),
                                        ),
                                        c().createElement(de, { position: le.bottom }),
                                        c().createElement(Fe, null),
                                    ),
                                    c().createElement(de, { position: le.left }),
                                    c().createElement(zn, {
                                        id: R.views.lobby.platoon.subViews.Chat('resId'),
                                        mixClass: 'MembersWindow_chatContainer_7c',
                                    }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    Ce().render(c().createElement(Wn, null), document.getElementById('root')),
                        g(R.sounds.gui_platoon_2_created());
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
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], a = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
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
        (__webpack_require__.j = 838),
        (() => {
            var e = { 838: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, o, s] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(3487));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
