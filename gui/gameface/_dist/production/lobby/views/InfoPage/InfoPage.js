(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, u, t) => {
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => n, onScaleUpdated: () => r });
                var a = t(2472),
                    i = t(1176);
                const n = (0, a.E)('clientResized'),
                    r = (0, a.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, i.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, i.R)(!0);
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
                                : (0, i.R)(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let i = !0;
                                        const n = `mouse${u}`,
                                            r = l[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, s),
                                            a(),
                                            () => {
                                                i &&
                                                    (r(),
                                                    window.removeEventListener(n, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (i = !1));
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
                                e.enabled && (0, i.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, i.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => n,
                        getSize: () => i,
                        graphicsQuality: () => r,
                    });
                var a = t(527);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const r = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2472: (e, u, t) => {
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
            3138: (e, u, t) => {
                t.d(u, { O: () => i });
                var a = t(5959);
                const i = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function i(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => i, getTextureUrl: () => a });
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => i });
                var a = t(2472);
                const i = {
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
            7641: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => i.W,
                        displayStatusIs: () => f,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => h,
                        getScale: () => d,
                        getSize: () => A,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => b,
                        isFocused: () => p,
                        pxToRem: () => B,
                        remToPx: () => _,
                        resize: () => F,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => y,
                    });
                var a = t(3722),
                    i = t(6112),
                    n = t(6538),
                    r = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function D(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: _(u.x), y: _(u.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function d() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function _(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function h() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(i.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === i.W[u]), e),
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
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => n });
                const a = ['args'],
                    i = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        i = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(u, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((i = n),
                                              Object.entries(i).map(([e, u]) => {
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
                        var i;
                    },
                    n = {
                        close(e) {
                            i('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            i(64);
                        },
                        move(e) {
                            i(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                let a, i;
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
                    })(i || (i = {}));
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => n });
                var a = t(3138);
                class i {
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
                        return window.__dataTracker || (window.__dataTracker = new i()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = a.O.view.addModelObserver(e, t, i);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                i.__instance = void 0;
                const n = i;
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
                t.d(u, { B3: () => l, Z5: () => r.Z5, ry: () => _ });
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
                const i = a;
                var n = t(1358),
                    r = t(8613);
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
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(5521),
                    D = t(3138);
                const m = ['args'];
                function d(e, u, t, a, i, n, r) {
                    try {
                        var s = e[n](r),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(a, i);
                }
                const B = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    _ = (function () {
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
                                    return new Promise(function (a, i) {
                                        var n = e.apply(u, t);
                                        function r(e) {
                                            d(n, a, i, r, s, 'next', e);
                                        }
                                        function s(e) {
                                            d(n, a, i, r, s, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const i = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        i = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(u, m);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    p = () => C(s.CLOSE),
                    g = (e, u) => {
                        e.keyCode === F.n.ESCAPE && u();
                    };
                var b = t(7572);
                const v = i.instance,
                    h = {
                        DataTracker: n.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: A,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (e) => C(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => C(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, i = R.invalid('resId'), n) => {
                            const r = D.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                A = o.height,
                                F = {
                                    x: D.O.view.pxToRem(l) + r.x,
                                    y: D.O.view.pxToRem(c) + r.y,
                                    width: D.O.view.pxToRem(E),
                                    height: D.O.view.pxToRem(A),
                                };
                            C(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: i,
                                direction: u,
                                bbox: B(F),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, p);
                        },
                        handleViewEvent: C,
                        onBindingsReady: _,
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
                                    const i = Object.prototype.toString.call(u[a]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < i.length; u++) t[a].push({ value: e(i[u].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = h;
            },
            8613: (e, u, t) => {
                t.d(u, { Ew: () => n, Z5: () => a, cy: () => i });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    n = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            100: (e, u, t) => {
                var a = {};
                t.r(a),
                    t.d(a, {
                        Area: () => V,
                        Bar: () => W,
                        DefaultScroll: () => G,
                        Direction: () => P,
                        defaultSettings: () => S,
                        useHorizontalScrollApi: () => N,
                    });
                var i = {};
                t.r(i), t.d(i, { Area: () => ue, Bar: () => Q, Default: () => ee, useVerticalScrollApi: () => H });
                var n = t(6179),
                    r = t.n(n),
                    s = t(493),
                    o = t.n(s),
                    l = t(6483),
                    c = t.n(l),
                    E = t(1281);
                let A;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(A || (A = {}));
                const F = (e) => e.replace(/&nbsp;/g, ' '),
                    D = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    m = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    d = (e, u, t = A.left) => e.split(u).reduce(t === A.left ? D : m, []),
                    B = (() => {
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
                    _ = ['zh_cn', 'zh_sg', 'zh_tw'],
                    C = ({ binding: e, text: u = '', classMix: t, alignment: a = A.left, formatWithBrackets: i }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const s = i && e ? ((o = e), u.replace(/\{\w+\}/g, (e) => String(o[e.slice(1, -1)]))) : u;
                        var o;
                        return r().createElement(
                            n.Fragment,
                            null,
                            s.split('\n').map((u, i) =>
                                r().createElement(
                                    'div',
                                    { className: c()('FormatText_base_d0', t), key: `${u}-${i}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = A.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return _.includes(t)
                                                          ? B(e)
                                                          : 'ja' === t
                                                            ? (0, E.D4)()
                                                                  .parse(e)
                                                                  .map((e) => F(e))
                                                            : ((e, u = A.left) => {
                                                                  let t = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      i = F(e);
                                                                  return (
                                                                      d(i, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(d(e, a, A.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, a, e).map((e, u) =>
                                        r().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    p = (e) => {
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
                    g = (e, u, t) => (t < e ? e : t > u ? u : t);
                var b = t(3138);
                const v = [];
                function h(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), v)
                    );
                }
                function f(e, u, t = []) {
                    const a = (0, n.useRef)(0),
                        i = (0, n.useCallback)(() => window.clearInterval(a.current), t || []);
                    (0, n.useEffect)(() => i, [i]);
                    const r = (null != t ? t : []).concat([u]);
                    return [
                        (0, n.useCallback)((t) => {
                            (a.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, r),
                        i,
                    ];
                }
                function w(e) {
                    engine.call('PlaySound', e);
                }
                function y(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                var T = t(7030);
                let P;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(P || (P = {}));
                const S = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    k = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: a,
                        getWrapperSize: i,
                        triggerMouseMoveOnUpdate: r = !1,
                    }) => {
                        const s = (e, t) => {
                            const a = u(e),
                                i = a[0],
                                n = a[1];
                            return n <= i ? 0 : g(i, n, t);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                c = void 0 === l ? S : l,
                                E = (0, n.useRef)(null),
                                A = (0, n.useRef)(null),
                                F = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        a = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        i = (e, ...t) => {
                                            for (
                                                var a,
                                                    i = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return y(e, u);
                                                                    var t = Object.prototype.toString
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
                                                                              ? y(e, u)
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
                                                !(a = i()).done;

                                            )
                                                (0, a.value)(...t);
                                        };
                                    return (0, n.useMemo)(() => ({ on: t, off: a, trigger: i }), []);
                                })(),
                                D = (function (e, u, t) {
                                    const a = (0, n.useMemo)(
                                        () =>
                                            (function (e, u, t, a) {
                                                let i,
                                                    n = !1,
                                                    r = 0;
                                                function s() {
                                                    i && clearTimeout(i);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - r;
                                                    function E() {
                                                        (r = Date.now()), t.apply(l, o);
                                                    }
                                                    n ||
                                                        (a && !i && E(),
                                                        s(),
                                                        void 0 === a && c > e
                                                            ? E()
                                                            : !0 !== u &&
                                                              (i = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            i = void 0;
                                                                        }
                                                                      : E,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((a = t), (t = u), (u = void 0)),
                                                    (o.cancel = function () {
                                                        s(), (n = !0);
                                                    }),
                                                    o
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return (0, n.useEffect)(() => a.cancel, [a]), a;
                                })(
                                    () => {
                                        b.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                m = (0, T.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), F.trigger('change', e), r && D());
                                    },
                                    onRest: (e) => F.trigger('rest', e),
                                    onStart: (e) => F.trigger('start', e),
                                    onPause: (e) => F.trigger('pause', e),
                                })),
                                d = m[0],
                                B = m[1],
                                _ = (0, n.useCallback)(
                                    (e, u, t) => {
                                        var a;
                                        const i = d.scrollPosition.get(),
                                            n = (null != (a = d.scrollPosition.goal) ? a : 0) - i;
                                        return s(e, u * t + n + i);
                                    },
                                    [d.scrollPosition],
                                ),
                                C = (0, n.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const a = E.current;
                                        a &&
                                            B.start({
                                                scrollPosition: s(a, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: s(a, d.scrollPosition.get()) },
                                            });
                                    },
                                    [B, c.animationConfig, d.scrollPosition],
                                ),
                                g = (0, n.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = A.current;
                                        if (!u || !t) return;
                                        const a = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return i(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            n = _(u, e, a);
                                        C(n);
                                    },
                                    [C, _, c.step],
                                ),
                                v = (0, n.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && g(a(e)),
                                            E.current && F.trigger('mouseWheel', e, d.scrollPosition, u(E.current));
                                    },
                                    [d.scrollPosition, g, F],
                                ),
                                f = ((e, u = []) => {
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
                                        p(() => {
                                            const e = E.current;
                                            e &&
                                                (C(s(e, d.scrollPosition.goal), { immediate: !0 }),
                                                F.trigger('resizeHandled'));
                                        }),
                                    [C, d.scrollPosition.goal],
                                ),
                                w = h(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = s(e, d.scrollPosition.goal);
                                    u !== d.scrollPosition.goal && C(u, { immediate: !0 }),
                                        F.trigger('recalculateContent');
                                });
                            return (
                                (0, n.useEffect)(
                                    () => (
                                        window.addEventListener('resize', f),
                                        () => {
                                            window.removeEventListener('resize', f);
                                        }
                                    ),
                                    [f],
                                ),
                                (0, n.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (A.current ? i(A.current) : void 0),
                                        getContainerSize: () => (E.current ? e(E.current) : void 0),
                                        getBounds: () =>
                                            E.current
                                                ? u(E.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: s,
                                        handleMouseWheel: v,
                                        applyScroll: C,
                                        applyStepTo: g,
                                        contentRef: E,
                                        wrapperRef: A,
                                        scrollPosition: B,
                                        animationScroll: d,
                                        recalculateContent: w,
                                        events: { on: F.on, off: F.off },
                                    }),
                                    [d.scrollPosition, C, g, F.off, F.on, w, v, B, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    N = k({
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
                        getDirection: (e) => (e.deltaY > 1 ? P.Next : P.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    x = 'HorizontalBar_base__nonActive_82',
                    O = 'disable',
                    M = { pending: !1, offset: 0 },
                    L = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    I = () => {},
                    U = (e, u) => Math.max(20, e.offsetWidth * u),
                    W = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = L, onDrag: a = I }) => {
                        const i = (0, n.useRef)(null),
                            s = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            A = e.stepTimeout || 100,
                            F = (0, n.useState)(M),
                            D = F[0],
                            m = F[1],
                            d = (0, n.useCallback)(
                                (e) => {
                                    m(e),
                                        E.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [a],
                            ),
                            B = () => {
                                const u = l.current,
                                    t = E.current,
                                    a = e.getWrapperSize(),
                                    i = e.getContainerSize();
                                if (!(a && u && t && i)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    r = Math.min(1, a / i),
                                    c = g(0, 1, n / (i - a)),
                                    A = (u.offsetWidth - U(u, r)) * c;
                                (t.style.transform = `translateX(${0 | A}px)`),
                                    ((e) => {
                                        if (s.current && o.current && l.current && E.current) {
                                            if (0 === e)
                                                return s.current.classList.add(O), void o.current.classList.remove(O);
                                            if (
                                                ((u = l.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(O), void o.current.classList.add(O);
                                            var u, t;
                                            s.current.classList.remove(O), o.current.classList.remove(O);
                                        }
                                    })(A);
                            },
                            _ = h(() => {
                                (() => {
                                    const u = E.current,
                                        t = l.current,
                                        a = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && u && a && t)) return;
                                    const r = Math.min(1, a / n);
                                    (u.style.width = `${U(t, r)}px`),
                                        (u.style.display = 'flex'),
                                        i.current &&
                                            (1 === r ? i.current.classList.add(x) : i.current.classList.remove(x));
                                })(),
                                    B();
                            });
                        (0, n.useEffect)(() => p(_)),
                            (0, n.useEffect)(
                                () =>
                                    p(() => {
                                        const u = () => {
                                            B();
                                        };
                                        let t = I;
                                        const a = () => {
                                            t(), (t = p(_));
                                        };
                                        return (
                                            e.events.on('recalculateContent', _),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', _),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!D.pending) return;
                                const u = b.O.client.events.mouse.move(([u, t]) => {
                                        var i;
                                        const n = e.contentRef.current,
                                            r = e.wrapperRef.current;
                                        if (!n || !r) return;
                                        const s = l.current,
                                            o = E.current;
                                        if (!s || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const c = u.clientX - D.offset - s.getBoundingClientRect().x,
                                            A = (c / s.offsetWidth) * (null != (i = e.getContainerSize()) ? i : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, A),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: c, contentOffset: A });
                                    }),
                                    t = b.O.client.events.mouse.up(() => {
                                        u(), d(M);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, D.offset, D.pending, a, d]);
                        const C = f((u) => e.applyStepTo(u), A, [e]),
                            v = C[0],
                            y = C[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', y, !0),
                                () => document.removeEventListener('mouseup', y, !0)
                            ),
                            [y],
                        );
                        const T = (e) => {
                            e.target.classList.contains(O) || w('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: c()('HorizontalBar_base_49', u.base), ref: i, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: c()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(O) || 0 !== e.button || (w('play'), v(P.Next));
                                },
                                onMouseUp: y,
                                ref: s,
                                onMouseEnter: T,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: c()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const a = E.current;
                                        a &&
                                            0 === u.button &&
                                            (w('play'),
                                            u.target === a
                                                ? d({ pending: !0, offset: u.screenX - a.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const a = E.current,
                                                          i = e.contentRef.current;
                                                      if (!a || !i) return;
                                                      const n = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + n * u);
                                                  })(u.screenX > a.getBoundingClientRect().x ? P.Prev : P.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: T,
                                },
                                r().createElement('div', { ref: E, className: c()('HorizontalBar_thumb_fd', u.thumb) }),
                                r().createElement('div', { className: c()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            r().createElement('div', {
                                className: c()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(O) || 0 !== e.button || (w('play'), v(P.Prev));
                                },
                                onMouseUp: y,
                                ref: o,
                                onMouseEnter: T,
                            }),
                        );
                    }),
                    z = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    G = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: i,
                        classNames: s,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: E,
                    }) => {
                        const A = (0, n.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: c()(z.base, e.base) });
                            }, [a]),
                            F = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return r().createElement(
                            'div',
                            { className: c()(z.defaultScroll, t), onWheel: u.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: c()(z.defaultScrollArea, i) },
                                r().createElement(V, { className: o, api: F, classNames: s }, e),
                            ),
                            r().createElement(W, { getStepByRailClick: l, api: u, onDrag: E, classNames: A }),
                        );
                    },
                    V = ({ api: e, className: u, classNames: t, children: a }) => (
                        (0, n.useEffect)(() => p(e.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: c()(z.base, u) },
                            r().createElement(
                                'div',
                                {
                                    className: c()(z.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                r().createElement(
                                    'div',
                                    { className: c()(z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (V.Bar = W), (V.Default = G);
                const H = k({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? P.Next : P.Prev),
                    }),
                    q = 'VerticalBar_base__nonActive_42',
                    Y = 'disable',
                    j = () => {},
                    X = { pending: !1, offset: 0 },
                    K = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Z = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    $ = (e, u) => Math.max(20, e.offsetHeight * u),
                    Q = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = K, onDrag: a = j }) => {
                        const i = (0, n.useRef)(null),
                            s = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            A = e.stepTimeout || 100,
                            F = (0, n.useState)(X),
                            D = F[0],
                            m = F[1],
                            d = (0, n.useCallback)(
                                (e) => {
                                    m(e),
                                        E.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [a],
                            ),
                            B = h(() => {
                                const u = E.current,
                                    t = l.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && n && u && t)) return;
                                const r = Math.min(1, a / n);
                                return (
                                    (u.style.height = `${$(t, r)}px`),
                                    (u.style.display = 'flex'),
                                    i.current && (1 === r ? i.current.classList.add(q) : i.current.classList.remove(q)),
                                    r
                                );
                            }),
                            _ = h(() => {
                                const u = l.current,
                                    t = E.current,
                                    a = e.getWrapperSize(),
                                    i = e.getContainerSize();
                                if (!(a && u && t && i)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    r = Math.min(1, a / i),
                                    c = g(0, 1, n / (i - a)),
                                    A = (u.offsetHeight - $(u, r)) * c;
                                (t.style.transform = `translateY(${0 | A}px)`),
                                    ((e) => {
                                        if (s.current && o.current && l.current && E.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(Y), void o.current.classList.remove(Y);
                                            if (
                                                ((u = l.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(Y), void o.current.classList.add(Y);
                                            var u, t;
                                            s.current.classList.remove(Y), o.current.classList.remove(Y);
                                        }
                                    })(A);
                            }),
                            C = h(() => {
                                Z(e, () => {
                                    B(), _();
                                });
                            });
                        (0, n.useEffect)(() => p(C)),
                            (0, n.useEffect)(() => {
                                const u = () => {
                                    Z(e, () => {
                                        _();
                                    });
                                };
                                let t = j;
                                const a = () => {
                                    t(), (t = p(C));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!D.pending) return;
                                const u = b.O.client.events.mouse.up(() => {
                                        d(X);
                                    }),
                                    t = b.O.client.events.mouse.move(([u]) => {
                                        Z(e, (t) => {
                                            const i = l.current,
                                                n = E.current,
                                                r = e.getContainerSize();
                                            if (!i || !n || !r) return;
                                            const s = u.screenY - D.offset - i.getBoundingClientRect().y,
                                                o = (s / i.offsetHeight) * r;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: n, thumbOffset: s, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, D.offset, D.pending, a, d]);
                        const v = f((u) => e.applyStepTo(u), A, [e]),
                            y = v[0],
                            T = v[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', T, !0),
                                () => document.removeEventListener('mouseup', T, !0)
                            ),
                            [T],
                        );
                        const S = (e) => {
                            e.target.classList.contains(Y) || w('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: c()('VerticalBar_base_f3', u.base), ref: i, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: c()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Y) || 0 !== e.button || (w('play'), y(P.Next));
                                },
                                ref: s,
                                onMouseEnter: S,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: c()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const a = E.current;
                                        var i;
                                        a &&
                                            0 === u.button &&
                                            (w('play'),
                                            u.target === a
                                                ? d({ pending: !0, offset: u.screenY - a.getBoundingClientRect().y })
                                                : ((i = u.screenY > a.getBoundingClientRect().y ? P.Prev : P.Next),
                                                  E.current &&
                                                      Z(e, (u) => {
                                                          if (!u) return;
                                                          const a = t(e),
                                                              n = e.clampPosition(u, u.scrollTop + a * i);
                                                          e.applyScroll(n);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: S,
                                },
                                r().createElement('div', { ref: E, className: c()('VerticalBar_thumb_32', u.thumb) }),
                                r().createElement('div', { className: c()('VerticalBar_rail_43', u.rail) }),
                            ),
                            r().createElement('div', {
                                className: c()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Y) || 0 !== e.button || (w('play'), y(P.Prev));
                                },
                                onMouseUp: T,
                                ref: o,
                                onMouseEnter: S,
                            }),
                        );
                    }),
                    J = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ee = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: i,
                        scrollClassName: s,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: E,
                    }) => {
                        const A = (0, n.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: c()(J.base, e.base) });
                            }, [a]),
                            F = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return r().createElement(
                            'div',
                            { className: c()(J.defaultScroll, t), onWheel: u.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: c()(J.area, i) },
                                r().createElement(ue, { className: s, classNames: o, api: F }, e),
                            ),
                            r().createElement(Q, { getStepByRailClick: l, api: u, onDrag: E, classNames: A }),
                        );
                    },
                    ue = ({ className: e, classNames: u, children: t, api: a }) => (
                        (0, n.useEffect)(() => p(a.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: c()(J.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: c()(J.content, null == u ? void 0 : u.content), ref: a.contentRef },
                                t,
                            ),
                        )
                    );
                ue.Default = ee;
                const te = { Vertical: i, Horizontal: a },
                    ae = {
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
                    ie = [
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
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                class re extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && w(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && w(this.props.soundClick);
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
                            n = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            E = e.onMouseDown,
                            A = e.onMouseUp,
                            F =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        i = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(e, ie)),
                            D = c()(ae.base, ae[`base__${n}`], ae[`base__${i}`], null == s ? void 0 : s.base),
                            m = c()(ae.icon, ae[`icon__${n}`], ae[`icon__${i}`], null == s ? void 0 : s.icon),
                            d = c()(ae.glow, null == s ? void 0 : s.glow),
                            B = c()(ae.caption, ae[`caption__${n}`], null == s ? void 0 : s.caption),
                            _ = c()(ae.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            ne(
                                {
                                    className: D,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                F,
                            ),
                            'info' !== n && r().createElement('div', { className: ae.shine }),
                            r().createElement('div', { className: m }, r().createElement('div', { className: d })),
                            r().createElement('div', { className: B }, u),
                            a && r().createElement('div', { className: _ }, a),
                        );
                    }
                }
                re.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var se = t(5521),
                    oe = t(9916);
                const le = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ce(e = se.n.NONE, u = le, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== se.n.NONE)
                            return (
                                window.addEventListener('keydown', i, t),
                                () => {
                                    window.removeEventListener('keydown', i, t);
                                }
                            );
                        function i(i) {
                            if (i.keyCode === e) {
                                if (!a && b.O.view.isEventHandled()) return;
                                b.O.view.setEventHandled(), u(i), t && i.stopPropagation();
                            }
                        }
                    }, [u, e, t, a]);
                }
                var Ee = t(3403);
                function Ae() {
                    return !1;
                }
                console.log;
                var Fe = t(9174);
                function De(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const me = (e) => (0 === e ? window : window.subViews.get(e));
                function de(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                function Be(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                var _e = t(3946);
                const Ce = R.strings.battle_royale_infopage.button,
                    pe = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: i, mocks: s }) {
                                const o = (0, n.useRef)([]),
                                    l = (e, t, a) => {
                                        var i;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = me,
                                                context: a = 'model',
                                            } = {}) {
                                                const i = new Map();
                                                function n(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? i.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = i.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const r = (e) => {
                                                    const i = t(u),
                                                        n = a.split('.').reduce((e, u) => e[u], i);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const s = 'string' == typeof n ? `${a}.${n}` : a,
                                                            o = b.O.view.addModelObserver(s, u, !0);
                                                        return i.set(o, t), e && t(r(n)), o;
                                                    },
                                                    readByPath: r,
                                                    createCallback: (e, u) => {
                                                        const t = r(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = r(e);
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
                                                                                    return De(e, u);
                                                                                var t = Object.prototype.toString
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
                                                                                          ? De(e, u)
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
                                                                })(i.keys());
                                                            !(e = t()).done;

                                                        )
                                                            n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(t),
                                            r =
                                                'real' === e
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : r.readByPath(u),
                                            l = (e) => o.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        sh: {
                                                            types: e.array('modesSH.battleTypes'),
                                                            modes: e.array('modesSH.battleModes'),
                                                        },
                                                        bp: e.array('modesBP'),
                                                    },
                                                    t = (0, _e.Om)((e) => {
                                                        const t = de(u.sh.types.get(), e);
                                                        if (!t) throw Error('battleType is undefined');
                                                        return t;
                                                    }),
                                                    a = (0, _e.Om)(
                                                        () => {
                                                            var e;
                                                            const t =
                                                                null ==
                                                                (e = de(
                                                                    Be(u.bp.get(), (e) => e),
                                                                    0,
                                                                ))
                                                                    ? void 0
                                                                    : e.tableRows;
                                                            if (!t) throw Error('Tables of BP are undefined');
                                                            return t;
                                                        },
                                                        { equals: Ae },
                                                    ),
                                                    i = (0, _e.Om)(() => {
                                                        const e = u.root.get().isModeSelector;
                                                        return {
                                                            side: e ? 'left' : 'right',
                                                            type: e ? 'back' : 'close',
                                                            caption: e ? Ce.back() : Ce.close(),
                                                        };
                                                    });
                                                return Object.assign({}, u, {
                                                    computes: { battleTypeSH: t, tableRowsBP: a, buttonSettings: i },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: r,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : s(u),
                                                            i = Fe.LO.box(a, { equals: Ae });
                                                        return (
                                                            'real' === e &&
                                                                r.subscribe(
                                                                    (0, Fe.aD)((e) => i.set(e)),
                                                                    u,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : s(u),
                                                            i = Fe.LO.box(a, { equals: Ae });
                                                        return (
                                                            'real' === e &&
                                                                r.subscribe(
                                                                    (0, Fe.aD)((e) => i.set(e)),
                                                                    u,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(u)) {
                                                            const i = u.reduce(
                                                                (e, u) => ((e[u] = Fe.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    r.subscribe(
                                                                        (0, Fe.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                i[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                        {
                                                            const i = u,
                                                                n = Object.entries(i),
                                                                s = n.reduce(
                                                                    (e, [u, t]) => ((e[t] = Fe.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    r.subscribe(
                                                                        (0, Fe.aD)((e) => {
                                                                            n.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            E = { mode: e, model: c, externalModel: r, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && a ? a.controls(E) : u(E),
                                            externalModel: r,
                                            mode: e,
                                        };
                                    },
                                    c = (0, n.useRef)(!1),
                                    E = (0, n.useState)(e),
                                    A = E[0],
                                    F = E[1],
                                    D = (0, n.useState)(() => l(e, a, s)),
                                    m = D[0],
                                    d = D[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        c.current ? d(l(A, a, s)) : (c.current = !0);
                                    }, [s, A, a]),
                                    (0, n.useEffect)(() => {
                                        F(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            m.externalModel.dispose(), o.current.forEach((e) => e());
                                        },
                                        [m],
                                    ),
                                    r().createElement(t.Provider, { value: m }, i)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        openVideo: e.createCallbackNoArgs('onOpenVideo'),
                        сloseWindow: e.createCallbackNoArgs('onClose'),
                    })),
                    ge = pe[0],
                    be = pe[1],
                    ve = R.strings.battle_royale_infopage,
                    he = {
                        title: ve.mosaic.title(),
                        mosaic: [
                            {
                                imagePath: 'R.images.battle_royale.gui.maps.infopage.mosaic.general',
                                title: ve.mosaic.info1.title(),
                                subtitle: ve.mosaic.info1.subtitle(),
                            },
                            {
                                imagePath: 'R.images.battle_royale.gui.maps.infopage.mosaic.economic',
                                title: ve.mosaic.info2.title(),
                                subtitle: ve.mosaic.info2.subtitle(),
                            },
                            {
                                imagePath: 'R.images.battle_royale.gui.maps.infopage.mosaic.progression',
                                title: ve.mosaic.info3.title(),
                                subtitle: ve.mosaic.info3.subtitle(),
                            },
                            {
                                imagePath: 'R.images.battle_royale.gui.maps.infopage.mosaic.respawn',
                                title: ve.mosaic.info4.title(),
                                subtitle: ve.mosaic.info4.subtitle(),
                            },
                        ],
                    },
                    fe = {
                        title: ve.maps.title(),
                        subtitle: ve.maps.subtitle(),
                        images: [
                            {
                                imagePath: 'R.images.battle_royale.gui.maps.infopage.maps.arzagir',
                                title: ve.maps.map1.title(),
                            },
                            {
                                imagePath: 'R.images.battle_royale.gui.maps.infopage.maps.zone',
                                title: ve.maps.map2.title(),
                            },
                            {
                                imagePath: 'R.images.battle_royale.gui.maps.infopage.maps.firnulfir',
                                title: ve.maps.map3.title(),
                            },
                        ],
                    },
                    we = {
                        title: ve.generalDescription.title(),
                        subtitle: ve.generalDescription.subtitle(),
                        accent: ve.generalDescription.accent(),
                    },
                    ye = {
                        title: ve.towerBlock.title(),
                        subtitle: ve.towerBlock.subtitle(),
                        loots: [
                            {
                                imagePath: 'R.images.battle_royale.gui.maps.infopage.tower.euipment',
                                title: ve.towerBlock.ammunition.title(),
                                subtitle: ve.towerBlock.ammunition.subtitle(),
                            },
                            {
                                imagePath: 'R.images.battle_royale.gui.maps.infopage.tower.ammunition',
                                title: ve.towerBlock.euipment.title(),
                                subtitle: ve.towerBlock.euipment.subtitle(),
                            },
                            {
                                imagePath: 'R.images.battle_royale.gui.maps.infopage.tower.cargo',
                                title: ve.towerBlock.cargo.title(),
                                subtitle: ve.towerBlock.cargo.subtitle(),
                            },
                            {
                                imagePath: 'R.images.battle_royale.gui.maps.infopage.tower.trophies',
                                title: ve.towerBlock.trophies.title(),
                                subtitle: ve.towerBlock.trophies.subtitle(),
                            },
                        ],
                    },
                    Te = {
                        title: ve.zones.title(),
                        subtitle: ve.zones.subtitle(),
                        images: [
                            {
                                imagePath: 'R.images.battle_royale.gui.maps.infopage.zones.yellowZone',
                                title: ve.zones.zoneYellow.title(),
                                subtitle: ve.zones.zoneYellow.subtitle(),
                            },
                            {
                                imagePath: 'R.images.battle_royale.gui.maps.infopage.zones.redZone',
                                title: ve.zones.zoneRed.title(),
                                subtitle: ve.zones.zoneRed.subtitle(),
                            },
                        ],
                    },
                    Pe = {
                        title: ve.sectorDetails.title(),
                        textBlock: [{ text: ve.sectorDetails.subtitle() }],
                        imagePath: 'R.images.battle_royale.gui.maps.infopage.sector',
                    },
                    Se = {
                        title: ve.radarDetails.title(),
                        textBlock: [{ text: ve.radarDetails.text1() }, { text: ve.radarDetails.text2() }],
                        imagePath: 'R.images.battle_royale.gui.maps.infopage.radar',
                    },
                    ke = {
                        title: ve.progressionDetails.title(),
                        textBlock: [
                            { text: ve.progressionDetails.subtitle() },
                            { subtitle: ve.progressionDetails.title2(), text: ve.progressionDetails.subtitle2() },
                        ],
                        imagePath: 'R.images.battle_royale.gui.maps.infopage.progression',
                    },
                    Ne = {
                        title: ve.battleTasksDetails.title(),
                        textBlock: [{ text: ve.battleTasksDetails.subtitle() }],
                        imagePath: 'R.images.battle_royale.gui.maps.infopage.battleTasks',
                    },
                    Re = {
                        title: ve.shopDetails.title(),
                        textBlock: [{ text: ve.shopDetails.text1() }, { text: ve.shopDetails.text2() }],
                        imagePath: 'R.images.battle_royale.gui.maps.infopage.shop',
                    },
                    xe = { title: ve.articleBP.title(), subtitle: ve.articleBP.subtitle() },
                    Oe = {
                        title: ve.pointsBPDetailsSettings.title(),
                        textBlock: [{ text: ve.pointsBPDetailsSettings.subtitle() }],
                        imagePath: 'R.images.battle_royale.gui.maps.infopage.pointsBP',
                    },
                    Me = {
                        title: ve.respawn.title(),
                        textBlock: [
                            { text: ve.respawn.text() },
                            { subtitle: ve.respawn.block1.title(), text: ve.respawn.block1.subtitle() },
                            { subtitle: ve.respawn.block2.title(), text: ve.respawn.block2.subtitle() },
                        ],
                        imagePath: 'R.images.battle_royale.gui.maps.infopage.respawn',
                    },
                    Le = { title: ve.tableBPDetailsSettings.title(), subtitle: ve.tableBPDetailsSettings.subtitle() },
                    Ie = { title: ve.pointsSHDetailsSettings.title(), subtitle: ve.pointsSHDetailsSettings.subtitle() },
                    Ue = {
                        title: ve.marauders.title(),
                        textBlock: [{ text: ve.marauders.text() }],
                        imagePath: 'R.images.battle_royale.gui.maps.infopage.marauders',
                    },
                    We = {
                        base: 'App_base_5d',
                        container: 'App_container_b5',
                        divider: 'App_divider_ec',
                        alignCenter: 'App_alignCenter_62',
                        titleStyling: 'App_titleStyling_15',
                        textStyle: 'App_textStyle_00',
                        footer: 'App_footer_07',
                        defaultVertical: 'App_defaultVertical_5c',
                        closeButton: 'App_closeButton_86',
                        closeButton__right: 'App_closeButton__right_0c',
                        closeButton__left: 'App_closeButton__left_24',
                        frame: 'App_frame_12',
                        respawnTitle: 'App_respawnTitle_af',
                        maraudersTitle: 'App_maraudersTitle_ce',
                        maraudersContainer: 'App_maraudersContainer_b0',
                        respawnContainer: 'App_respawnContainer_f8',
                        map: 'App_map_b2',
                        respawn: 'App_respawn_3f',
                        marauder: 'App_marauder_50',
                        progression: 'App_progression_7c',
                        shop: 'App_shop_b1',
                        zone: 'App_zone_82',
                        radar: 'App_radar_e7',
                        sector: 'App_sector_9a',
                        battleTask: 'App_battleTask_c0',
                        pointsBattleTask: 'App_pointsBattleTask_5b',
                        indentBPTable: 'App_indentBPTable_cc',
                    },
                    ze = {
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
                    Ge = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Ve = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    He = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    qe = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const a = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = (0, n.useMemo)(() => u || {}, [u]);
                        let s = Ge.exec(e),
                            o = e,
                            l = 0;
                        for (; s; ) {
                            const t = s[0],
                                n = Ve.exec(t),
                                c = He.exec(t),
                                E = s[1];
                            if (n && c) {
                                const e = n[0],
                                    s = e + l++ + e;
                                (o = o.replace(t, `%(${s})`)),
                                    (i[s] = ze[e]
                                        ? r().createElement(
                                              'span',
                                              { className: ze[e] },
                                              r().createElement(C, { text: E, binding: u }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: a(e) },
                                              r().createElement(C, { text: E, binding: u }),
                                          ));
                            }
                            s = Ge.exec(e);
                        }
                        return r().createElement(C, { text: o, classMix: t, binding: i });
                    }),
                    Ye = {
                        base: 'Article_base_c8',
                        title: 'Article_title_02',
                        head: 'Article_head_51',
                        images: 'Article_images_c8',
                        imageContainer: 'Article_imageContainer_6a',
                        images__mapStyle: 'Article_images__mapStyle_21',
                        text: 'Article_text_53',
                        accent: 'Article_accent_0a',
                    },
                    je = ({ description: e, classNames: u, mapsStyle: t }) =>
                        r().createElement(
                            'div',
                            { className: c()(Ye.base, null == u ? void 0 : u.alignCenter) },
                            r().createElement(
                                'div',
                                { className: Ye.head },
                                r().createElement('div', { className: Ye.title }, e.title),
                                r().createElement(
                                    'div',
                                    { className: Ye.subtitle },
                                    r().createElement(qe, {
                                        classMix: null == u ? void 0 : u.alignCenter,
                                        text: e.subtitle,
                                    }),
                                ),
                                e.accent && r().createElement('div', { className: Ye.accent }, e.accent),
                            ),
                            e.images &&
                                r().createElement(
                                    'div',
                                    { className: c()(Ye.images, t && Ye.images__mapStyle) },
                                    e.images.map(({ imagePath: e, title: t, subtitle: a }, i) =>
                                        r().createElement(
                                            'div',
                                            { className: Ye.imageContainer, key: i },
                                            r().createElement('img', {
                                                className: c()(Ye.image, null == u ? void 0 : u.image),
                                                src: e,
                                                alt: t,
                                            }),
                                            r().createElement('div', { className: Ye.text }, t),
                                            a &&
                                                r().createElement(
                                                    'div',
                                                    { className: Ye.subtitle },
                                                    r().createElement(qe, { text: a }),
                                                ),
                                        ),
                                    ),
                                ),
                        ),
                    Xe = ({ description: e, reverse: u, smallImage: t, classNames: a, className: i }) =>
                        r().createElement(
                            'div',
                            {
                                className: c()(
                                    'Details_base_78',
                                    u && 'Details_base__reverse_07',
                                    t && 'Details_base__noIndent_52',
                                    i,
                                ),
                            },
                            r().createElement(
                                'div',
                                { className: 'Details_description_55' },
                                r().createElement(
                                    'div',
                                    { className: c()('Details_title_51', null == a ? void 0 : a.titleStyling) },
                                    r().createElement(C, { text: e.title }),
                                ),
                                e.textBlock.map(({ subtitle: e, text: u }, t) =>
                                    r().createElement(
                                        'div',
                                        { className: 'Details_textBlock_bb', key: t },
                                        e &&
                                            r().createElement(
                                                'div',
                                                { className: 'Details_subtitle_76' },
                                                r().createElement(qe, { text: e }),
                                            ),
                                        u && r().createElement(qe, { text: u }),
                                    ),
                                ),
                            ),
                            r().createElement('div', { className: 'Details_devider_b0' }),
                            r().createElement('img', {
                                className: c()(!t && 'Details_image_ad', null == a ? void 0 : a.image),
                                src: e.imagePath,
                                alt: e.title,
                            }),
                        );
                let Ke;
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
                })(Ke || (Ke = {}));
                var Ze = t(8613);
                Date.now();
                const $e = Ze.Ew.getRegionalDateTime,
                    Qe = Ze.Ew.getFormattedDateTime,
                    Je = (0, n.memo)(({ datetime: e, format: u = Ke.ShortDate, isConvertedToLocal: t = !0 }) =>
                        Object.values(Ke).includes(u) ? $e(e, u, t) : Qe(e, u, t),
                    ),
                    eu = (0, Ee.Pi)(({ title: e, subtitle: u }) => {
                        const t = be(),
                            a = t.controls,
                            i = t.model,
                            n = a.openVideo,
                            s = i.root.get(),
                            o = s.startDate,
                            l = s.endDate;
                        return r().createElement(
                            'div',
                            { className: 'Header_base_b7' },
                            r().createElement(
                                'div',
                                { className: 'Header_header_57' },
                                r().createElement('div', { className: 'Header_title_2a' }, e),
                                r().createElement(
                                    'div',
                                    { className: 'Header_subtitle_ce' },
                                    r().createElement(C, {
                                        text: u,
                                        binding: {
                                            startDate: r().createElement(Je, { datetime: o, format: Ke.ShortDate }),
                                            endDate: r().createElement(Je, { datetime: l, format: Ke.ShortDate }),
                                        },
                                    }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                {
                                    onClick: () => {
                                        w('play'), n();
                                    },
                                    onMouseEnter: () => w('highlight'),
                                    className: 'Header_container_bf',
                                },
                                r().createElement('div', { className: 'Header_preview_7c' }),
                                r().createElement('div', { className: 'Header_video_7e' }),
                            ),
                        );
                    }),
                    uu = ({ description: e }) =>
                        r().createElement(
                            'div',
                            { className: 'Mosaic_base_6b' },
                            r().createElement('div', { className: 'Mosaic_title_31' }, e.title),
                            r().createElement(
                                'div',
                                { className: 'Mosaic_container_c3' },
                                e.mosaic.map(({ imagePath: e, title: u, subtitle: t }, a) =>
                                    r().createElement(
                                        'div',
                                        { className: 'Mosaic_item_c8', key: a },
                                        r().createElement('img', { className: 'Mosaic_image_67', src: e, alt: u }),
                                        r().createElement(
                                            'div',
                                            { className: 'Mosaic_description_e2' },
                                            r().createElement(
                                                'div',
                                                { className: 'Mosaic_itemTitle_b9' },
                                                r().createElement(C, { text: u }),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: 'Mosaic_itemSubtitle_76' },
                                                r().createElement(qe, { text: t }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    tu = {
                        base: 'TableBP_base_37',
                        row: 'TableBP_row_49',
                        border: 'TableBP_border_7b',
                        cell__inFirstRow: 'TableBP_cell__inFirstRow_46',
                        cell: 'TableBP_cell_a9',
                        cell__text: 'TableBP_cell__text_ab',
                        cell__inSecondCell: 'TableBP_cell__inSecondCell_83',
                        points: 'TableBP_points_e1',
                        dash: 'TableBP_dash_20',
                    },
                    au = 'points',
                    iu = 'text',
                    nu = (0, Ee.Pi)(() => {
                        const e = be().model.computes.tableRowsBP(),
                            u = de(e, 1),
                            t = e.length > 1 ? u && Be(u.cell, (e) => e) : null;
                        return r().createElement(
                            'div',
                            { className: tu.base },
                            Be(e, (e, u) =>
                                r().createElement(
                                    'div',
                                    { className: tu.row, key: u },
                                    Be(e.cell, ({ text: e, points: a }, i) => {
                                        const n = t && t[i].text;
                                        return r().createElement(
                                            'div',
                                            {
                                                key: i,
                                                className: c()(
                                                    tu.cell,
                                                    n && tu.cell__text,
                                                    0 === u && tu.cell__inFirstRow,
                                                    1 === i && tu.cell__inSecondCell,
                                                ),
                                            },
                                            (() => {
                                                switch (
                                                    ((e, u, t) => (!e && !u && t > 0 ? 'none' : e ? au : iu))(a, e, u)
                                                ) {
                                                    case au:
                                                        return r().createElement('div', { className: tu.points }, a);
                                                    case iu:
                                                        return r().createElement('div', { className: tu.text }, e);
                                                    default:
                                                        return r().createElement(
                                                            'div',
                                                            { className: tu.dash },
                                                            R.strings.common.common.dash(),
                                                        );
                                                }
                                            })(),
                                            r().createElement('div', { className: c()(n && tu.border) }),
                                        );
                                    }),
                                ),
                            ),
                        );
                    }),
                    ru = ({ type: e, rewards: u }) =>
                        r().createElement(
                            'div',
                            { className: 'Column_base_b3' },
                            r().createElement('div', { className: 'Column_battleType_ba' }, e),
                            Be(u, ({ place: e, points: u }, t) =>
                                r().createElement(
                                    'div',
                                    { key: t, className: 'Column_cell_71' },
                                    r().createElement('div', { className: 'Column_place_69' }, e),
                                    u
                                        ? r().createElement(
                                              'div',
                                              { className: 'Column_pointContainer_a2' },
                                              r().createElement('div', { className: 'Column_point_33' }, u),
                                              r().createElement('div', { className: 'Column_reward_00' }),
                                          )
                                        : r().createElement(
                                              'div',
                                              { className: 'Column_dash_29' },
                                              R.strings.common.common.dash(),
                                          ),
                                ),
                            ),
                        ),
                    su = (0, Ee.Pi)(() => {
                        const e = be().model;
                        return r().createElement(
                            'div',
                            { className: 'TableSH_base_5b' },
                            Be(e.sh.modes.get(), (u, t) =>
                                r().createElement(ru, { key: t, rewards: u, type: e.computes.battleTypeSH(t) }),
                            ),
                        );
                    }),
                    ou = {
                        base: 'TowerBlock_base_da',
                        title: 'TowerBlock_title_8a',
                        head: 'TowerBlock_head_28',
                        lootsContainer: 'TowerBlock_lootsContainer_ec',
                        description: 'TowerBlock_description_89',
                        descriptionTitle: 'TowerBlock_descriptionTitle_7c',
                        image: 'TowerBlock_image_77',
                    },
                    lu = ({ description: e }) =>
                        r().createElement(
                            'div',
                            { className: ou.base },
                            r().createElement(
                                'div',
                                { className: ou.head },
                                r().createElement('div', { className: ou.title }, e.title),
                                r().createElement('div', { className: ou.subtitle }, e.subtitle),
                            ),
                            r().createElement(
                                'div',
                                { className: ou.loots },
                                e.loots.map(({ imagePath: e, title: u, subtitle: t }, a) =>
                                    r().createElement(
                                        'div',
                                        { className: ou.lootsContainer, key: u + a },
                                        r().createElement('img', { className: ou.image, src: e, alt: u }),
                                        r().createElement(
                                            'div',
                                            { className: ou.description },
                                            r().createElement('div', { className: ou.descriptionTitle }, u),
                                            r().createElement(
                                                'div',
                                                { className: ou.descriptionSubtitle },
                                                r().createElement(qe, { text: t }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                let cu, Eu, Au, Fu, Du, mu, du;
                var Bu, _u, Cu, pu;
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
                })(cu || (cu = {})),
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
                    })(Eu || (Eu = {})),
                    ((pu = Au || (Au = {})).Big = 'big'),
                    (pu.Small = 'small'),
                    (pu.Mini = 'mini'),
                    (pu.S600x450 = 's600x450'),
                    (pu.S400x300 = 's400x300'),
                    (pu.S296x222 = 's296x222'),
                    (pu.S232x174 = 's232x174'),
                    (pu.S180x135 = 's180x135'),
                    (pu.S128x100 = 's128x100'),
                    (pu.S80x80 = 's80x80'),
                    (pu.S64x64 = 's64x64'),
                    (pu.S48x48 = 's48x48'),
                    ((Cu = Fu || (Fu = {})).MULTI = 'multi'),
                    (Cu.CURRENCY = 'currency'),
                    (Cu.PREMIUM_PLUS = 'premium_plus'),
                    (Cu.NUMBER = 'number'),
                    (Cu.STRING = 'string'),
                    ((_u = Du || (Du = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (_u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (_u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (_u.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (_u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (_u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (_u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (_u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (_u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (_u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (_u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (_u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (_u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    (_u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                    (_u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                    ((mu || (mu = {})).BATTLE_BOOSTER = 'battleBooster'),
                    ((Bu = du || (du = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (Bu.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (Bu.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (Bu.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (Bu.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (Bu.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (Bu.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (Bu.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (Bu.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (Bu.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (Bu.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (Bu.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (Bu.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    (Bu.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                    (Bu.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                class gu extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? oe.B3.GOLD : oe.B3.INTEGRAL;
                        const u = oe.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                let bu, vu, hu, fu, wu, yu, Tu;
                var Pu, Su, ku;
                (gu.defaultProps = { format: 'integral' }),
                    cu.Items,
                    cu.Equipment,
                    cu.Xp,
                    cu.XpFactor,
                    cu.Blueprints,
                    cu.BlueprintsAny,
                    cu.Goodies,
                    cu.Berths,
                    cu.Slots,
                    cu.Tokens,
                    cu.CrewSkins,
                    cu.CrewBooks,
                    cu.Customizations,
                    cu.CreditsFactor,
                    cu.TankmenXp,
                    cu.TankmenXpFactor,
                    cu.FreeXpFactor,
                    cu.BattleToken,
                    cu.PremiumUniversal,
                    cu.NaturalCover,
                    cu.BpCoin,
                    cu.BattlePassSelectToken,
                    cu.BattlaPassFinalAchievement,
                    cu.BattleBadge,
                    cu.BonusX5,
                    cu.CrewBonusX3,
                    cu.NewYearInvoice,
                    cu.EpicSelectToken,
                    cu.Comp7TokenWeeklyReward,
                    cu.DeluxeGift,
                    cu.BattleBoosterGift,
                    cu.OptionalDevice,
                    cu.Gold,
                    cu.Credits,
                    cu.Crystal,
                    cu.FreeXp,
                    cu.BattlePassPoints,
                    cu.EquipCoin,
                    cu.PremiumPlus,
                    cu.Premium,
                    Au.Small,
                    Au.Big,
                    ((ku = bu || (bu = {})).Active = 'active'),
                    (ku.Paused = 'paused'),
                    (ku.Completed = 'completed'),
                    (ku.NotStarted = 'notStarted'),
                    (function (e) {
                        (e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman');
                    })(vu || (vu = {})),
                    (function (e) {
                        (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(hu || (hu = {})),
                    (function (e) {
                        (e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen');
                    })(fu || (fu = {})),
                    ((Su = wu || (wu = {})).AwaitSeason = 'awaitSeason'),
                    (Su.Bought = 'bought'),
                    (Su.Free = 'free'),
                    (Su.Completed = 'completed'),
                    (Su.CompletedRightNow = 'completedRightNow'),
                    (Su.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                    (Su.NoVehiclesBase = 'noVehiclesBase'),
                    (Su.ChapterNotChosen = 'chapterNotChosen'),
                    (function (e) {
                        (e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay');
                    })(yu || (yu = {})),
                    ((Pu = Tu || (Tu = {})).style = 'style'),
                    (Pu.tankman = 'tankman'),
                    Tu.style,
                    Tu.tankman;
                const Nu = R.strings.battle_royale_vehicles,
                    Ru = 'light',
                    xu = 'medium',
                    Ou = 'heavy',
                    Mu = 'ussr',
                    Lu = 'germany',
                    Iu = 'britain',
                    Uu = 'france',
                    Wu = 'china',
                    zu = 'poland',
                    Gu = 'sweden',
                    Vu = [Mu, Lu, 'usa', Iu, Uu, Wu, zu, Gu],
                    Hu = [
                        {
                            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.repairKit',
                            title: Nu.abilities.repairKit(),
                            description: Nu.abilities.repairKitDescription(),
                        },
                        {
                            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.recoveryKit',
                            title: Nu.abilities.recoveryKit(),
                            description: Nu.abilities.recoveryKitDescription(),
                        },
                    ],
                    qu = {
                        [Mu]: {
                            name: Nu.tanks.ussr.title(),
                            description: Nu.tanks.ussr.description(),
                            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.ussr',
                            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.ussr',
                            abilities: [
                                ...Hu,
                                {
                                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.minefield',
                                    title: Nu.abilities.minefield(),
                                    description: Nu.abilities.minefieldDescription(),
                                },
                                {
                                    imagePath:
                                        'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.recoveryZone',
                                    title: Nu.abilities.recoveryZone(),
                                    description: Nu.abilities.recoveryZoneDescription(),
                                },
                            ],
                            vehicleType: Ou,
                        },
                        [Lu]: {
                            name: Nu.tanks.germany.title(),
                            description: Nu.tanks.germany.description(),
                            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.germany',
                            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.germany',
                            abilities: [
                                ...Hu,
                                {
                                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.nitro',
                                    title: Nu.abilities.nitro(),
                                    description: Nu.abilities.nitroDescription(),
                                },
                                {
                                    imagePath:
                                        'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.recoveryDot',
                                    title: Nu.abilities.recoveryDot(),
                                    description: Nu.abilities.recoveryDotDescription(),
                                },
                            ],
                            vehicleType: Ou,
                        },
                        usa: {
                            name: Nu.tanks.usa.title(),
                            description: Nu.tanks.usa.description(),
                            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.usa',
                            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.usa',
                            abilities: [
                                ...Hu,
                                {
                                    imagePath:
                                        'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.extremeConcentration',
                                    title: Nu.abilities.extremeConcentration(),
                                    description: Nu.abilities.extremeConcentrationDescription(),
                                },
                                {
                                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.trap',
                                    title: Nu.abilities.trap(),
                                    description: Nu.abilities.trapDescription(),
                                },
                            ],
                            vehicleType: xu,
                        },
                        [Iu]: {
                            name: Nu.tanks.britain.title(),
                            description: Nu.tanks.britain.description(),
                            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.britain',
                            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.britain',
                            abilities: [
                                ...Hu,
                                {
                                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.rustCloud',
                                    title: Nu.abilities.rustCloud(),
                                    description: Nu.abilities.rustCloudDescription(),
                                },
                                {
                                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.berserk',
                                    title: Nu.abilities.berserk(),
                                    description: Nu.abilities.berserkDescription(),
                                },
                            ],
                            vehicleType: xu,
                        },
                        [Uu]: {
                            name: Nu.tanks.france.title(),
                            description: Nu.tanks.france.description(),
                            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.france',
                            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.france',
                            abilities: [
                                ...Hu,
                                {
                                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.airstrike',
                                    title: Nu.abilities.airstrike(),
                                    description: Nu.abilities.airstrikeDescription(),
                                },
                                {
                                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.brander',
                                    title: Nu.abilities.brander(),
                                    description: Nu.abilities.branderDescription(),
                                },
                            ],
                            vehicleType: Ru,
                            hasCN360Image: !0,
                        },
                        [Wu]: {
                            name: Nu.tanks.china.title(),
                            description: Nu.tanks.china.description(),
                            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.china',
                            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.china',
                            abilities: [
                                ...Hu,
                                {
                                    imagePath:
                                        'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.corrodingShot',
                                    title: Nu.abilities.corrodingShot(),
                                    description: Nu.abilities.corrodingShotDescription(),
                                },
                                {
                                    imagePath:
                                        'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.clingBrander',
                                    title: Nu.abilities.clingBrander(),
                                    description: Nu.abilities.clingBranderDescription(),
                                },
                            ],
                            vehicleType: Ru,
                        },
                        [zu]: {
                            name: Nu.tanks.poland.title(),
                            description: Nu.tanks.poland.description(),
                            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.poland',
                            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.poland',
                            abilities: [
                                ...Hu,
                                {
                                    imagePath:
                                        'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.thunderStrike',
                                    title: Nu.abilities.thunderStrike(),
                                    description: Nu.abilities.thunderStrikeDescription(),
                                },
                                {
                                    imagePath:
                                        'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.shotPassion',
                                    title: Nu.abilities.shotPassion(),
                                    description: Nu.abilities.shotPassionDescription(),
                                },
                            ],
                            vehicleType: xu,
                        },
                        [Gu]: {
                            name: Nu.tanks.sweden.title(),
                            description: Nu.tanks.sweden.description(),
                            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.sweden',
                            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.sweden',
                            abilities: [
                                ...Hu,
                                {
                                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.fireCircle',
                                    title: Nu.abilities.fireCircle(),
                                    description: Nu.abilities.fireCircleDescription(),
                                },
                                {
                                    imagePath:
                                        'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.adaptationHealthRestore',
                                    title: Nu.abilities.adaptationHealthRestore(),
                                    description: Nu.abilities.adaptationHealthRestoreDescription(),
                                },
                            ],
                            vehicleType: Ou,
                        },
                    },
                    Yu = {
                        header: 'Vehicles_header_44',
                        tab: 'Vehicles_tab_9a',
                        tabGlow: 'Vehicles_tabGlow_26',
                        tabGlow__upper: 'Vehicles_tabGlow__upper_b4',
                        tabGlow__bottom: 'Vehicles_tabGlow__bottom_85',
                        tab__active: 'Vehicles_tab__active_43',
                        tabTitle: 'Vehicles_tabTitle_f9',
                        body: 'Vehicles_body_e5',
                        description: 'Vehicles_description_fd',
                        text: 'Vehicles_text_56',
                        subtitle: 'Vehicles_subtitle_6a',
                        title: 'Vehicles_title_a1',
                        titleText: 'Vehicles_titleText_50',
                        container: 'Vehicles_container_eb',
                        abilitiesItem: 'Vehicles_abilitiesItem_7e',
                        abilitiesImage: 'Vehicles_abilitiesImage_5b',
                        abilitiesTitle: 'Vehicles_abilitiesTitle_92',
                        abilitiesSubtitle: 'Vehicles_abilitiesSubtitle_7e',
                        tabImage: 'Vehicles_tabImage_6a',
                        image: 'Vehicles_image_40',
                        type: 'Vehicles_type_b9',
                    },
                    ju = [];
                for (var Xu = 0, Ku = Object.entries(qu); Xu < Ku.length; Xu++) {
                    const e = Ku[Xu][1];
                    ju.push(e.imagePath);
                }
                const Zu = () => {
                        const e = (0, n.useState)(0),
                            u = e[0],
                            t = e[1];
                        var a;
                        return (
                            (a = () => {
                                ju.map((e) => {
                                    new Image().src = e;
                                });
                            }),
                            (0, n.useEffect)(a, []),
                            r().createElement(
                                'div',
                                { className: Yu.base },
                                r().createElement(
                                    'div',
                                    { className: Yu.header },
                                    Vu.map((e, a) =>
                                        r().createElement(
                                            'div',
                                            {
                                                className: c()(Yu.tab, u === a && Yu.tab__active),
                                                key: a,
                                                onClick: () => (t(a), void w('yes1')),
                                            },
                                            r().createElement('img', {
                                                className: Yu.tabImage,
                                                src: qu[e].tabImagePath,
                                                alt: qu[e].name,
                                            }),
                                            r().createElement('div', { className: Yu.tabTitle }, qu[e].name),
                                            r().createElement('div', { className: c()(Yu.tabGlow, Yu.tabGlow__upper) }),
                                            r().createElement('div', {
                                                className: c()(Yu.tabGlow, Yu.tabGlow__bottom),
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Yu.body },
                                    r().createElement(
                                        'div',
                                        { className: Yu.description },
                                        r().createElement('img', {
                                            className: Yu.image,
                                            src: qu[Vu[u]].imagePath,
                                            alt: qu[Vu[u]].name,
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: Yu.text },
                                            r().createElement(
                                                'div',
                                                { className: Yu.title },
                                                r().createElement('img', {
                                                    className: Yu.type,
                                                    src: `R.images.battle_royale.gui.maps.infopage.vehicles.vehicleTypes.${qu[Vu[u]].vehicleType}`,
                                                }),
                                                r().createElement('div', { className: Yu.titleText }, qu[Vu[u]].name),
                                            ),
                                            r().createElement('div', { className: Yu.subtitle }, qu[Vu[u]].description),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Yu.container },
                                        qu[Vu[u]].abilities.map((e) =>
                                            r().createElement(
                                                'div',
                                                { key: e.title, className: Yu.abilitiesItem },
                                                r().createElement('img', {
                                                    className: Yu.abilitiesImage,
                                                    src: e.imagePath,
                                                    alt: e.title,
                                                }),
                                                r().createElement(
                                                    'div',
                                                    { className: Yu.abilitiesText },
                                                    r().createElement('div', { className: Yu.abilitiesTitle }, e.title),
                                                    r().createElement(
                                                        'div',
                                                        { className: Yu.abilitiesSubtitle },
                                                        r().createElement(qe, { text: e.description }),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    $u = (0, Ee.Pi)(() => {
                        const e = be(),
                            u = e.model,
                            t = e.controls,
                            a = u.computes.buttonSettings(),
                            i = a.type,
                            n = a.caption,
                            s = a.side,
                            o = t.сloseWindow,
                            l = H();
                        var E;
                        return (
                            (E = o),
                            ce(se.n.ESCAPE, E),
                            r().createElement(
                                'div',
                                { className: We.base },
                                r().createElement(
                                    'div',
                                    { className: c()(We.closeButton, We[`closeButton__${s}`]) },
                                    r().createElement(re, { caption: n, type: i, side: s, onClick: o }),
                                ),
                                r().createElement(
                                    te.Vertical.Area.Default,
                                    { className: We.defaultVertical, api: l },
                                    r().createElement(
                                        'div',
                                        { className: We.container },
                                        r().createElement(eu, { title: ve.title(), subtitle: ve.subtitle() }),
                                        r().createElement(uu, { description: he }),
                                        r().createElement('div', { className: We.divider }),
                                        r().createElement(je, {
                                            description: fe,
                                            classNames: { alignCenter: We.alignCenter, image: We.map },
                                            mapsStyle: !0,
                                        }),
                                        r().createElement('div', { className: We.divider }),
                                        r().createElement(je, {
                                            description: we,
                                            classNames: { alignCenter: We.alignCenter },
                                        }),
                                        r().createElement(Zu, null),
                                        r().createElement(Xe, {
                                            description: Me,
                                            className: We.respawnContainer,
                                            classNames: { titleStyling: We.respawnTitle, image: We.respawn },
                                        }),
                                        r().createElement('div', { className: We.divider }),
                                        r().createElement(lu, { description: ye }),
                                        r().createElement(Xe, {
                                            description: Ue,
                                            className: We.maraudersContainer,
                                            classNames: { titleStyling: We.maraudersTitle, image: We.marauder },
                                            reverse: !0,
                                        }),
                                        r().createElement('div', { className: We.divider }),
                                        r().createElement(je, { description: Te, classNames: { image: We.zone } }),
                                        r().createElement('div', { className: We.divider }),
                                        r().createElement(Xe, {
                                            description: Pe,
                                            classNames: { image: We.sector },
                                            reverse: !0,
                                        }),
                                        r().createElement('div', { className: We.divider }),
                                        r().createElement(Xe, { description: Se, classNames: { image: We.radar } }),
                                        u.sh.modes.get().length > 0 &&
                                            r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement('div', { className: We.divider }),
                                                r().createElement(Xe, {
                                                    description: ke,
                                                    classNames: { image: We.progression },
                                                }),
                                                r().createElement(Xe, {
                                                    description: Ne,
                                                    smallImage: !0,
                                                    classNames: { titleStyling: We.titleStyling, image: We.battleTask },
                                                    reverse: !0,
                                                }),
                                                r().createElement(je, {
                                                    description: Ie,
                                                    classNames: { alignCenter: We.indentBPTable },
                                                }),
                                                r().createElement(su, null),
                                            ),
                                        r().createElement('div', { className: We.divider }),
                                        r().createElement(Xe, { description: Re, classNames: { image: We.shop } }),
                                        r().createElement('div', { className: We.divider }),
                                        u.bp.get().length > 0 &&
                                            r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement(je, { description: xe }),
                                                r().createElement(Xe, {
                                                    description: Oe,
                                                    classNames: {
                                                        titleStyling: We.titleStyling,
                                                        image: We.pointsBattleTask,
                                                    },
                                                    smallImage: !0,
                                                    reverse: !0,
                                                }),
                                                r().createElement('div', { className: We.divider }),
                                                r().createElement(je, {
                                                    description: Le,
                                                    classNames: { alignCenter: We.indentBPTable },
                                                }),
                                                r().createElement(nu, null),
                                                r().createElement('div', { className: We.divider }),
                                            ),
                                        r().createElement(
                                            'div',
                                            { className: We.footer },
                                            r().createElement(C, { text: ve.footer() }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    o().render(
                        r().createElement(ge, null, r().createElement($u, null)),
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
                var i = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], n = !0, r = 0; r < u.length; r++)
                        (!1 & a || i >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[r]))
                            ? u.splice(r--, 1)
                            : ((n = !1), a < i && (i = a));
                    if (n) {
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
        (__webpack_require__.j = 454),
        (() => {
            var e = { 454: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        i,
                        [n, r, s] = t,
                        o = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in r) __webpack_require__.o(r, a) && (__webpack_require__.m[a] = r[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < n.length; o++)
                        (i = n[o]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(100));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
