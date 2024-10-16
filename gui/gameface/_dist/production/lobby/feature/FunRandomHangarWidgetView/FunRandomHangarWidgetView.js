(() => {
    'use strict';
    var __webpack_modules__ = {
            2472: (u, e, t) => {
                function n(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => n });
            },
            5840: (u, e, t) => {
                t.d(e, { O: () => p });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => D, off: () => A, on: () => E, onResize: () => o, onScaleUpdated: () => s });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => C,
                        getSize: () => B,
                        graphicsQuality: () => d,
                        playSound: () => l,
                        setRTPC: () => c,
                    });
                var r = t(2472);
                function i(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                const o = (0, r.E)('clientResized'),
                    s = (0, r.E)('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    A = (u, e) => engine.off(u, e),
                    F = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    D = (function () {
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
                                            i = F[e]((u) => t([u, 'outside']));
                                        function o(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, o),
                                            n(),
                                            () => {
                                                a &&
                                                    (i(),
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
                function l(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function c(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function B(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const d = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    m = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    _ = Object.keys(m).reduce((u, e) => ((u[e] = () => l(m[e])), u), {}),
                    g = { play: Object.assign({}, _, { sound: l }), setRTPC: c },
                    p = { view: t(2031), client: a, sound: g };
            },
            2031: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => C,
                        addPreloadTexture: () => l,
                        children: () => n,
                        displayStatus: () => i,
                        displayStatusIs: () => S,
                        events: () => s,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => T,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => B,
                        getDisplayStatus: () => x,
                        getScale: () => b,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => y,
                        isFocused: () => w,
                        pxToRem: () => v,
                        remToPx: () => f,
                        resize: () => _,
                        sendEvent: () => F,
                        setAnimateWindow: () => h,
                        setEventHandled: () => P,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => k,
                    });
                var n = {};
                function a(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function r(u, e, t) {
                    return `url(${a(u, e, t)})`;
                }
                t.r(n), t.d(n, { getBgUrl: () => r, getTextureUrl: () => a });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
                var o = t(2472);
                const s = {
                        onTextureFrozen: (0, o.E)('self.onTextureFrozen'),
                        onTextureReady: (0, o.E)('self.onTextureReady'),
                        onDomBuilt: (0, o.E)('self.onDomBuilt'),
                        onLoaded: (0, o.E)('self.onLoaded'),
                        onDisplayChanged: (0, o.E)('self.onShowingStatusChanged'),
                        onFocusUpdated: (0, o.E)('self.onFocusChanged'),
                        children: {
                            onAdded: (0, o.E)('children.onAdded'),
                            onLoaded: (0, o.E)('children.onLoaded'),
                            onRemoved: (0, o.E)('children.onRemoved'),
                            onAttached: (0, o.E)('children.onAttached'),
                            onTextureReady: (0, o.E)('children.onTextureReady'),
                            onRequestPosition: (0, o.E)('children.requestPosition'),
                        },
                    },
                    E = ['args'],
                    A = (u, e) => {
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
                                })(e, E);
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
                    F = {
                        close(u) {
                            A('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            A(64);
                        },
                        move(u) {
                            A(16, { isMouseEvent: !0, on: u });
                        },
                    },
                    D = 15;
                function l(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, D);
                }
                function B(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function C(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function d(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, D);
                }
                function m(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function g(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: f(e.x), y: f(e.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function v(u) {
                    return viewEnv.pxToRem(u);
                }
                function f(u) {
                    return viewEnv.remToPx(u);
                }
                function h(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function P() {
                    return viewEnv.setEventHandled();
                }
                function y() {
                    return viewEnv.isEventHandled();
                }
                function T() {
                    viewEnv.forceTriggerMouseMove();
                }
                function x() {
                    return viewEnv.getShowingStatus();
                }
                const S = Object.keys(i).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === i[e]), u), {}),
                    O = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    k = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : s.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            5521: (u, e, t) => {
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
            1358: (u, e, t) => {
                t.d(e, { Z: () => r });
                var n = t(5840);
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
            9916: (u, e, t) => {
                t.d(e, { B0: () => o, ry: () => m });
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
                var r = t(1358),
                    i = t(8613);
                let o;
                var s;
                ((s = o || (o = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    A = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    D = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var l = t(5521),
                    c = t(5840);
                const B = ['args'];
                function C(u, e, t, n, a, r, i) {
                    try {
                        var o = u[r](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(n, a);
                }
                const d = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
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
                                        function i(u) {
                                            C(r, n, a, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            C(r, n, a, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    _ = (u, e) => {
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
                                })(e, B);
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
                    g = () => _(o.CLOSE),
                    p = (u, e) => {
                        u.keyCode === l.n.ESCAPE && e();
                    };
                var b = t(7572);
                const v = a.instance,
                    f = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: E,
                        RealFormatType: A,
                        TimeFormatType: F,
                        DateFormatType: D,
                        makeGlobalBoundingBox: d,
                        sendMoveEvent: (u) => _(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => _(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            _(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), r) => {
                            const i = c.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                E = s.x,
                                A = s.y,
                                F = s.width,
                                D = s.height,
                                l = {
                                    x: c.O.view.pxToRem(E) + i.x,
                                    y: c.O.view.pxToRem(A) + i.y,
                                    width: c.O.view.pxToRem(F),
                                    height: c.O.view.pxToRem(D),
                                };
                            _(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: d(l),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => p(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            p(u, g);
                        },
                        handleViewEvent: _,
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
                        ClickOutsideManager: v,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (u, e, t) => {
                t.d(e, { Z5: () => n, cy: () => a });
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
                    };
            },
            5089: (u, e, t) => {
                var n = t(6179),
                    a = t.n(n),
                    r = t(493),
                    i = t.n(r),
                    o = t(6483),
                    s = t.n(o),
                    E = t(5840),
                    A = t(3403);
                const F = R.images.fun_random.gui.maps.icons.feature.asset_packs,
                    D = 'undefined',
                    l = (u, e) => ('string' == typeof e ? u.$dyn(e) : e.reduce((u, e) => u.$dyn(e), u)),
                    c = (u, e) => {
                        var t;
                        const n = e ? 'sub_modes' : 'modes',
                            a = F.$dyn(n);
                        return null != (t = a.$dyn(u)) ? t : a.$dyn(D);
                    };
                var B = t(9916);
                const C = [
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
                function d(u) {
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
                const m = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: B.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    _ = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            E = u.ignoreShowDelay,
                            A = void 0 !== E && E,
                            F = u.ignoreMouseClick,
                            D = void 0 !== F && F,
                            l = u.decoratorId,
                            c = void 0 === l ? 0 : l,
                            B = u.isEnabled,
                            _ = void 0 === B || B,
                            g = u.targetId,
                            p = void 0 === g ? 0 : g,
                            b = u.onShow,
                            v = u.onHide,
                            f = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, C);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, n.useMemo)(
                                () =>
                                    p ||
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
                                [p],
                            ),
                            P = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (m(t, c, { isMouseEvent: !0, on: !0, arguments: d(a) }, w),
                                    b && b(),
                                    (h.current.isVisible = !0));
                            }, [t, c, a, w, b]),
                            y = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        m(t, c, { on: !1 }, w),
                                        h.current.isVisible && v && v(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, c, w, v]),
                            T = (0, n.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const u = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', T, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', T, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === _ && y();
                            }, [_, y]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            ),
                            _
                                ? (0, n.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((x = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(P, A ? 100 : 400)),
                                                          r && r(u),
                                                          x && x(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  y(), null == i || i(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === D && y(), null == s || s(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === D && y(), null == o || o(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          f,
                                      ),
                                  )
                                : e
                        );
                        var x;
                    },
                    g = {
                        base: 'ModifierDomainIcon_base_74',
                        image: 'ModifierDomainIcon_image_62',
                        iconOut: 'ModifierDomainIcon_iconOut_c6',
                        image__big: 'ModifierDomainIcon_image__big_3c',
                        image__large: 'ModifierDomainIcon_image__large_f1',
                        iconHover: 'ModifierDomainIcon_iconHover_69',
                    };
                let p;
                !(function (u) {
                    (u.small = 'small'), (u.big = 'big'), (u.large = 'large');
                })(p || (p = {}));
                const b = (u, e) => {
                        const t = e === p.large ? '80x80' : '64x64';
                        return {
                            backgroundImage: `url(${R.images.battle_modifiers.gui.maps.icons.feature.domains.$dyn(`c_${t}`).$dyn(u)})`,
                        };
                    },
                    v = ({ modifiersDomain: u, subModeId: e, className: t, size: n = p.small }) => {
                        const r = e ? { modifiersDomain: u, subModeId: e } : { modifiersDomain: u };
                        return a().createElement(
                            'div',
                            { className: g.base },
                            a().createElement(
                                _,
                                {
                                    contentId:
                                        R.views.battle_modifiers.lobby.tooltips.ModifiersDomainTooltipView('resId'),
                                    args: r,
                                },
                                a().createElement('div', {
                                    className: s()(g.image, g[`image__${n}`], t),
                                    style: b(u, n),
                                }),
                            ),
                        );
                    };
                var f = t(9762),
                    h = t(6457);
                let w, P, y;
                !(function (u) {
                    (u.DISABLED = 'disabled'),
                        (u.ACTIVE_FINAL = 'activeFinal'),
                        (u.ACTIVE_RESETTABLE = 'activeResettable'),
                        (u.COMPLETED_FINAL = 'completedFinal'),
                        (u.COMPLETED_RESETTABLE = 'completedResettable'),
                        (u.ACTIVE_INFINITE_RESETTABLE = 'activeInfiniteResettable'),
                        (u.ACTIVE_INFINITE_FINAL = 'activeInfiniteFinal');
                })(w || (w = {})),
                    (function (u) {
                        (u.Init = 'init'),
                            (u.Active = 'active'),
                            (u.NonActive = 'nonActive'),
                            (u.UpdateState = 'updateState');
                    })(P || (P = {})),
                    (function (u) {
                        (u.CheckDataUpdate = 'checkDataUpdate'),
                            (u.UpdateStageData = 'updateStageData'),
                            (u.SwitchState = 'switchState');
                    })(y || (y = {}));
                const T = [w.ACTIVE_RESETTABLE, w.ACTIVE_FINAL],
                    x = [w.ACTIVE_INFINITE_RESETTABLE, w.ACTIVE_INFINITE_FINAL],
                    S = (u) => T.includes(u) || x.includes(u),
                    O = (u) => S(u.status),
                    k = (u) => !S(u.status),
                    I = (u, e) => u.status !== e.status && N(u, e),
                    M = (u, e) => T.includes(u.status) && x.includes(e.status),
                    L = (u) => !u.crossProgressionEnabled || x.includes(u.status),
                    N = (u, e) =>
                        e.stage === u.stage &&
                        e.currentPoints === u.currentPoints &&
                        e.maximumPoints === u.maximumPoints &&
                        0 === u.earnedPoints,
                    W = (u, e) =>
                        S(e.status) &&
                        ((1 === e.stage && 0 === e.currentPoints) ||
                            (e.stage === u.stage && u.maximumPoints !== e.maximumPoints) ||
                            (M(u, e) && e.stage !== u.stage && u.currentPoints === u.maximumPoints)),
                    U = (u, e) =>
                        e.stage === u.stage &&
                        e.currentPoints === u.currentPoints &&
                        e.maximumPoints === u.maximumPoints &&
                        0 !== u.earnedPoints,
                    z = (u, e) =>
                        (e.stage === u.stage || u.crossProgressionEnabled) &&
                        e.currentPoints !== u.currentPoints &&
                        e.maximumPoints === u.maximumPoints,
                    V = (u, e) => M(u, e) || (L(u) && e.stage > u.stage && u.currentPoints < u.maximumPoints),
                    $ = (u, e) => L(u) && e.stage > u.stage && u.currentPoints === u.maximumPoints,
                    j = (u, e) => e.stage < u.stage && u.currentPoints > 0,
                    G = (u, e) => e.stage < u.stage && 0 === u.currentPoints,
                    q = (u, e) => u.status !== e.status && S(e.status),
                    K = (u) => {
                        u.isSoundEnabled && 0 !== u.earnedPoints && E.O.sound.play.sound('ev_fep_progress_bar');
                    };
                function H() {
                    return !1;
                }
                console.log;
                var Y = t(9174);
                function Z(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const X = (u) => (0 === u ? window : window.subViews.get(u)),
                    Q = ((u, e) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: r, children: i, mocks: o }) {
                                const s = (0, n.useRef)([]),
                                    A = (u, t, n) => {
                                        var a;
                                        const r = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = X,
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
                                                const i = (u) => {
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
                                                            s = E.O.view.addModelObserver(o, e, !0);
                                                        return a.set(s, t), u && t(i(r)), s;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (u, e) => {
                                                        const t = i(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = i(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var u,
                                                                t = (function (u, e) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            u[Symbol.iterator]) ||
                                                                        u['@@iterator'];
                                                                    if (t) return (t = t.call(u)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(u) ||
                                                                        (t = (function (u, e) {
                                                                            if (u) {
                                                                                if ('string' == typeof u)
                                                                                    return Z(u, e);
                                                                                var t = {}.toString
                                                                                    .call(u)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        u.constructor &&
                                                                                        (t = u.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(u)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? Z(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(u = t()).done;

                                                        )
                                                            r(u.value, e);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            i =
                                                'real' === u
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === u ? (null == n ? void 0 : n.getter(e)) : i.readByPath(e),
                                            A = (u) => s.current.push(u),
                                            F = (({ observableModel: u }) =>
                                                Object.assign({}, u.primitives(['activeModeResName']), {
                                                    progressionState: u.object('progressionState'),
                                                    currentProgressionStage: u.object('currentProgressionStage'),
                                                    modifiersDomains: u.array('modifiersDomains', []),
                                                }))({
                                                mode: u,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : o(e),
                                                            a = Y.LO.box(n, { equals: H });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, Y.aD)((u) => a.set(u)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : o(e),
                                                            a = Y.LO.box(n, { equals: H });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, Y.aD)((u) => a.set(u)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = o(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (u, e) => ((u[e] = Y.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, Y.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                o = r.reduce(
                                                                    (u, [e, t]) => ((u[t] = Y.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, Y.aD)((u) => {
                                                                            r.forEach(([e, t]) => {
                                                                                o[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: A,
                                            }),
                                            D = { mode: u, model: F, externalModel: i, cleanup: A };
                                        return {
                                            model: F,
                                            controls: 'mocks' === u && n ? n.controls(D) : e(D),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    F = (0, n.useRef)(!1),
                                    D = (0, n.useState)(u),
                                    l = D[0],
                                    c = D[1],
                                    B = (0, n.useState)(() => A(u, r, o)),
                                    C = B[0],
                                    d = B[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        F.current ? d(A(l, r, o)) : (F.current = !0);
                                    }, [o, l, r]),
                                    (0, n.useEffect)(() => {
                                        c(u);
                                    }, [u]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            C.externalModel.dispose(), s.current.forEach((u) => u());
                                        },
                                        [C],
                                    ),
                                    a().createElement(t.Provider, { value: C }, i)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, ({ externalModel: u }) => ({ showInfo: u.createCallbackNoArgs('onShowInfo') })),
                    J = Q[0],
                    uu = Q[1],
                    eu = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let tu, nu;
                !(function (u) {
                    (u.Small = 'small'), (u.Medium = 'medium'), (u.Default = 'medium');
                })(tu || (tu = {})),
                    (function (u) {
                        (u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing');
                    })(nu || (nu = {}));
                const au = ({ size: u = tu.Default }) => {
                        const e = s()(eu.background, eu[`background__${u}`]);
                        return a().createElement('div', { className: e });
                    },
                    ru = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    iu = ({ size: u }) => {
                        const e = s()(ru.base, ru[`base__${u}`]);
                        return a().createElement('div', { className: e });
                    },
                    ou = {
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
                    su = (0, n.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: n, isComplete: r, withoutBounce: i }) => {
                            const o = s()(
                                    ou.base,
                                    ou[`base__${u}`],
                                    t && ou.base__disabled,
                                    r && ou.base__finished,
                                    i && ou.base__withoutBounce,
                                ),
                                E = !t && !r;
                            return a().createElement(
                                'div',
                                { className: o, style: n, ref: e },
                                a().createElement('div', { className: ou.pattern }),
                                a().createElement('div', { className: ou.gradient }),
                                E && a().createElement(iu, { size: u }),
                            );
                        },
                    ),
                    Eu = ({ size: u, value: e, lineRef: t, disabled: r, onComplete: i }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            s = 100 === e;
                        return (
                            (0, n.useEffect)(() => {
                                s && i && i();
                            }, [s, i]),
                            a().createElement(su, { size: u, disabled: r, baseStyles: o, isComplete: s, lineRef: t })
                        );
                    },
                    Au = (u, e) => {
                        let t;
                        const n = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let Fu, Du;
                !(function (u) {
                    (u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End');
                })(Fu || (Fu = {})),
                    (function (u) {
                        (u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End');
                    })(Du || (Du = {}));
                const lu = (0, n.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: r,
                            size: i,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: E,
                        }) => {
                            const A = o < r,
                                F = (0, n.useState)(Du.Idle),
                                D = F[0],
                                l = F[1],
                                c = D === Du.In,
                                B = D === Du.End,
                                C = D === Du.Idle,
                                d = (0, n.useCallback)(
                                    (u) => {
                                        l(u), E && E(u);
                                    },
                                    [E],
                                );
                            (0, n.useEffect)(() => {
                                if (C && !t)
                                    return Au(() => {
                                        d(Du.In);
                                    }, e);
                            }, [d, t, C, e]),
                                (0, n.useEffect)(() => {
                                    if (c)
                                        return Au(() => {
                                            s && s(), d(Du.End);
                                        }, u + e);
                                }, [d, c, s, e, u]);
                            const m = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [A ? 'left' : 'right']: '0',
                                    }),
                                    [A, e, u],
                                ),
                                _ = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [A ? 'left' : 'right']: '0',
                                    }),
                                    [A, e, u],
                                ),
                                g = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${A ? o : r}%` }),
                                    [r, A, o],
                                );
                            return B
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: g },
                                      a().createElement(
                                          'div',
                                          { style: C ? m : _, className: 'ProgressBarDeltaSimple_delta_99' },
                                          a().createElement(iu, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    cu = (0, n.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onChangeAnimationState: E,
                            onEndAnimation: A,
                        }) => {
                            const F = (0, n.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, u],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(su, {
                                    size: e,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: o,
                                    baseStyles: F,
                                }),
                                t >= 0 &&
                                    a().createElement(lu, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: e,
                                        to: u,
                                        onChangeAnimationState: E,
                                        onEndAnimation: A,
                                    }),
                            );
                        },
                    ),
                    Bu = (u) => (u ? { left: 0 } : { right: 0 }),
                    Cu = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    du = (u) => ({ transitionDuration: `${u}ms` }),
                    mu = (0, n.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: r,
                            size: i,
                            to: o,
                            onEndAnimation: E,
                            onChangeAnimationState: A,
                            className: F,
                        }) => {
                            const D = o < r,
                                l = (0, n.useState)(Fu.Idle),
                                c = l[0],
                                B = l[1],
                                C = c === Fu.End,
                                d = c === Fu.Idle,
                                m = c === Fu.Grow,
                                _ = c === Fu.Shrink,
                                g = (0, n.useCallback)(
                                    (u) => {
                                        B(u), A && A(u);
                                    },
                                    [A],
                                ),
                                p = (0, n.useCallback)(
                                    (u, e) =>
                                        Au(() => {
                                            g(u);
                                        }, e),
                                    [g],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return d
                                        ? p(Fu.Grow, e)
                                        : m
                                          ? p(Fu.Shrink, u)
                                          : _
                                            ? p(Fu.End, u)
                                            : void (C && E && E());
                            }, [p, t, C, m, d, _, E, e, u]);
                            const b = (0, n.useMemo)(() => Object.assign({ width: '100%' }, du(u), Bu(D)), [D, u]),
                                v = (0, n.useMemo)(() => Object.assign({ width: '0%' }, du(u), Bu(D)), [D, u]),
                                f = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Cu(D, r), du(u)), [r, D, u]),
                                h = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, Cu(D, r), du(u)),
                                    [r, D, o, u],
                                );
                            if (C) return null;
                            const w = s()(
                                'ProgressBarDeltaGrow_base_7e',
                                F,
                                D && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return a().createElement(
                                'div',
                                { style: d ? f : h, className: w },
                                a().createElement(
                                    'div',
                                    { style: _ ? v : b, className: 'ProgressBarDeltaGrow_glow_68' },
                                    a().createElement(iu, { size: i }),
                                ),
                            );
                        },
                    ),
                    _u = (0, n.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onEndAnimation: E,
                            onChangeAnimationState: A,
                        }) => {
                            const F = u < t,
                                D = (0, n.useState)(!1),
                                l = D[0],
                                c = D[1],
                                B = (0, n.useCallback)(
                                    (u) => {
                                        u === Fu.Shrink && c(!0), A && A(u);
                                    },
                                    [A],
                                ),
                                C = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                d = (0, n.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, u],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(su, {
                                    size: e,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: o,
                                    withoutBounce: F && 0 === u,
                                    baseStyles: l ? d : C,
                                }),
                                t >= 0 &&
                                    a().createElement(mu, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: B,
                                        freezed: s.freezed,
                                        onEndAnimation: E,
                                        from: t,
                                        size: e,
                                        to: u,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    gu = ['onComplete', 'onEndAnimation'];
                function pu() {
                    return (
                        (pu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        pu.apply(null, arguments)
                    );
                }
                const bu = (0, n.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, gu);
                        const i = (0, n.useState)(!1),
                            o = i[0],
                            s = i[1],
                            E = (0, n.useCallback)(() => {
                                const u = 100 === r.to;
                                u !== o && s(u), u && e && e(), t && t();
                            }, [o, e, t, r.to]);
                        switch (r.animationSettings.type) {
                            case nu.Simple:
                                return a().createElement(cu, pu({}, r, { onEndAnimation: E, isComplete: o }));
                            case nu.Growing:
                                return a().createElement(_u, pu({}, r, { onEndAnimation: E, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    vu = ['onEndAnimation'];
                function fu() {
                    return (
                        (fu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        fu.apply(null, arguments)
                    );
                }
                const hu = (0, n.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, vu);
                    const r = (0, n.useRef)({}),
                        i = (0, n.useCallback)(() => {
                            (r.current.from = void 0), e && e();
                        }, [e]),
                        o = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = o),
                        a().createElement(bu, fu({}, t, { onEndAnimation: i, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function wu() {
                    return (
                        (wu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        wu.apply(null, arguments)
                    );
                }
                const Pu = (0, n.memo)(
                        ({
                            size: u,
                            value: e,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: s,
                            onComplete: E,
                        }) => {
                            if (r === e)
                                return a().createElement(Eu, {
                                    key: `${r}-${e}`,
                                    size: u,
                                    value: e,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: E,
                                });
                            const A = {
                                from: r,
                                to: e,
                                size: u,
                                lineRef: t,
                                disabled: n,
                                animationSettings: i,
                                onComplete: E,
                                onEndAnimation: o,
                                onChangeAnimationState: s,
                            };
                            return i.withStack
                                ? a().createElement(hu, A)
                                : a().createElement(bu, wu({ key: `${r}-${e}` }, A));
                        },
                    ),
                    yu = (u) => ({
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
                    Tu = (u, e, t) => (t < u ? u : t > e ? e : t),
                    xu = (u, e, t) => ('number' == typeof t ? (Tu(0, e, t) / e) * 100 : u),
                    Su = {
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
                    Ou = {
                        freezed: !1,
                        withStack: !1,
                        type: nu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ku = (0, n.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = Su,
                            size: t = tu.Default,
                            animationSettings: r = Ou,
                            disabled: i = !1,
                            withoutBackground: o = !1,
                            value: E,
                            deltaFrom: A,
                            lineRef: F,
                            onChangeAnimationState: D,
                            onEndAnimation: l,
                            onComplete: c,
                        }) => {
                            const B = ((u, e, t) =>
                                (0, n.useMemo)(() => {
                                    const n = (Tu(0, e, u) / e) * 100;
                                    return { value: n, deltaFrom: xu(n, e, t) };
                                }, [t, e, u]))(E, u, A);
                            return a().createElement(
                                'div',
                                { className: s()(eu.base, eu[`base__${t}`]), style: yu(e) },
                                !o && a().createElement(au, { size: t }),
                                a().createElement(Pu, {
                                    size: t,
                                    lineRef: F,
                                    disabled: i,
                                    value: B.value,
                                    deltaFrom: B.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: l,
                                    onChangeAnimationState: D,
                                    onComplete: c,
                                }),
                            );
                        },
                    );
                var Iu = t(9459);
                const Ru = {
                    base: 'Status_base_a8',
                    base__completedResettable: 'Status_base__completedResettable_61',
                    base__completedFinal: 'Status_base__completedFinal_81',
                    progress: 'Status_progress_f1',
                    base__disabled: 'Status_base__disabled_e2',
                    progressLevel: 'Status_progressLevel_9a',
                    progressBar: 'Status_progressBar_68',
                    statusIcon: 'Status_statusIcon_bf',
                    infiniteIcon: 'Status_infiniteIcon_3b',
                    fadeInWithScale: 'Status_fadeInWithScale_9b',
                    slideDown: 'Status_slideDown_d6',
                };
                var Mu = t(1281);
                let Lu;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(Lu || (Lu = {}));
                const Nu = (u) => u.replace(/&nbsp;/g, ' '),
                    Wu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Uu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    zu = (u, e, t = Lu.left) => u.split(e).reduce(t === Lu.left ? Wu : Uu, []),
                    Vu = (() => {
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
                    $u = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ju = ({ binding: u, text: e = '', classMix: t, alignment: r = Lu.left, formatWithBrackets: i }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const o = i && u ? ((E = u), e.replace(/\{\w+\}/g, (u) => String(E[u.slice(1, -1)]))) : e;
                        var E;
                        return a().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((e, i) =>
                                a().createElement(
                                    'div',
                                    { className: s()('FormatText_base_d0', t), key: `${e}-${i}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                            t && u in t
                                                ? t[u]
                                                : ((u, e = Lu.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return $u.includes(t)
                                                          ? Vu(u)
                                                          : 'ja' === t
                                                            ? (0, Mu.D4)()
                                                                  .parse(u)
                                                                  .map((u) => Nu(u))
                                                            : ((u, e = Lu.left) => {
                                                                  let t = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      a = Nu(u);
                                                                  return (
                                                                      zu(a, /( )/, e).forEach(
                                                                          (u) => (t = t.concat(zu(u, n, Lu.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(u, e);
                                                  })(u, e),
                                        ))(e, r, u).map((u, e) =>
                                        a().createElement(n.Fragment, { key: `${e}-${u}` }, u),
                                    ),
                                ),
                            ),
                        );
                    },
                    Gu = {
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
                    qu = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Ku = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Hu = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Yu = (0, n.memo)(({ text: u, binding: e, classMix: t }) => {
                        const r = (0, n.useCallback)((u) => ({ color: `#${u}` }), []),
                            i = (0, n.useMemo)(() => e || {}, [e]);
                        let o = qu.exec(u),
                            s = u,
                            E = 0;
                        for (; o; ) {
                            const t = o[0],
                                n = Ku.exec(t),
                                A = Hu.exec(t),
                                F = o[1];
                            if (n && A) {
                                const u = n[0],
                                    o = u + E++ + u;
                                (s = s.replace(t, `%(${o})`)),
                                    (i[o] = Gu[u]
                                        ? a().createElement(
                                              'span',
                                              { className: Gu[u] },
                                              a().createElement(ju, { text: F, binding: e }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: r(u) },
                                              a().createElement(ju, { text: F, binding: e }),
                                          ));
                            }
                            o = qu.exec(u);
                        }
                        return a().createElement(ju, { text: s, classMix: t, binding: i });
                    }),
                    Zu = (0, A.Pi)(({ className: u, onStatusUpdate: e }) => {
                        const t = uu().model,
                            r = t.progressionState.get(),
                            i = r.status,
                            o = r.currentStage,
                            E = t.currentProgressionStage.get(),
                            A = E.currentPoints,
                            F = E.maximumPoints,
                            D = a().useMemo(() => {
                                return (
                                    (u = {
                                        status: i,
                                        stage: o,
                                        currentPoints: A,
                                        maximumPoints: F,
                                        earnedPoints: 0,
                                        isSoundEnabled: !1,
                                        crossProgressionEnabled: !0,
                                    }),
                                    (t = e),
                                    (0, f.C)(
                                        {
                                            preserveActionOrder: !0,
                                            id: 'widget-fsm',
                                            initial: P.Init,
                                            context: u,
                                            states: {
                                                [P.Init]: { always: { target: P.UpdateState } },
                                                [P.UpdateState]: {
                                                    always: [
                                                        { target: P.Active, cond: O },
                                                        { target: P.NonActive, cond: k },
                                                    ],
                                                },
                                                [P.Active]: {
                                                    on: {
                                                        [y.CheckDataUpdate]: [
                                                            {
                                                                target: P.Active,
                                                                actions: [
                                                                    (0, h.lW)((u, e) => ({
                                                                        type: y.SwitchState,
                                                                        status: e.status,
                                                                    })),
                                                                ],
                                                                cond: I,
                                                            },
                                                            { target: P.Active, cond: N },
                                                            {
                                                                target: P.UpdateState,
                                                                actions: [
                                                                    (0, h.f0)({
                                                                        status: (u, e) => e.status,
                                                                        stage: (u, e) => e.stage,
                                                                        currentPoints: (u, e) => e.currentPoints,
                                                                        maximumPoints: (u, e) => e.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    }),
                                                                    () => {},
                                                                ],
                                                                cond: W,
                                                            },
                                                            {
                                                                target: P.Active,
                                                                actions: [
                                                                    (0, h.lW)((u) => ({
                                                                        type: y.UpdateStageData,
                                                                        stage: u.stage,
                                                                        currentPoints: u.maximumPoints,
                                                                        maximumPoints: u.maximumPoints,
                                                                        earnedPoints: u.maximumPoints - u.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: V,
                                                            },
                                                            {
                                                                target: P.Active,
                                                                actions: [
                                                                    (0, h.lW)((u, e) => ({
                                                                        type: y.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    () => {},
                                                                    (0, h.lW)(
                                                                        (u, e) => ({
                                                                            type: y.UpdateStageData,
                                                                            stage: e.stage,
                                                                            currentPoints: e.currentPoints,
                                                                            maximumPoints: e.maximumPoints,
                                                                            earnedPoints: e.currentPoints,
                                                                        }),
                                                                        { delay: 300 },
                                                                    ),
                                                                ],
                                                                cond: $,
                                                            },
                                                            {
                                                                target: P.Active,
                                                                actions: [
                                                                    (0, h.lW)((u, e) => ({
                                                                        type: y.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.currentPoints,
                                                                        maximumPoints: u.maximumPoints,
                                                                        earnedPoints: e.currentPoints - u.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: z,
                                                            },
                                                            {
                                                                target: P.Active,
                                                                actions: [
                                                                    (0, h.lW)((u) => ({
                                                                        type: y.UpdateStageData,
                                                                        stage: u.stage,
                                                                        currentPoints: u.currentPoints,
                                                                        maximumPoints: u.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    (0, h.lW)((u, e) => ({
                                                                        type: y.SwitchState,
                                                                        status: e.status,
                                                                    })),
                                                                ],
                                                                cond: U,
                                                            },
                                                            {
                                                                target: P.Active,
                                                                actions: [
                                                                    (0, h.lW)((u) => ({
                                                                        type: y.UpdateStageData,
                                                                        stage: u.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: u.maximumPoints,
                                                                        earnedPoints: -u.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: j,
                                                            },
                                                            {
                                                                target: P.Active,
                                                                actions: [
                                                                    (0, h.lW)((u, e) => ({
                                                                        type: y.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: e.currentPoints - e.maximumPoints,
                                                                    })),
                                                                    () => {},
                                                                ],
                                                                cond: G,
                                                            },
                                                        ],
                                                        [y.UpdateStageData]: {
                                                            target: P.Active,
                                                            actions: [
                                                                (0, h.f0)({
                                                                    stage: (u, e) => e.stage,
                                                                    currentPoints: (u, e) => e.currentPoints,
                                                                    maximumPoints: (u, e) => e.maximumPoints,
                                                                    earnedPoints: (u, e) => e.earnedPoints,
                                                                }),
                                                                K,
                                                            ],
                                                        },
                                                        [y.SwitchState]: {
                                                            target: P.UpdateState,
                                                            actions: [
                                                                (u, e) => t(e.status),
                                                                (0, h.f0)({ status: (u, e) => e.status }),
                                                            ],
                                                        },
                                                    },
                                                },
                                                [P.NonActive]: {
                                                    on: {
                                                        [y.CheckDataUpdate]: {
                                                            target: P.UpdateState,
                                                            actions: [
                                                                (0, h.f0)({
                                                                    status: (u, e) => e.status,
                                                                    stage: (u, e) => e.stage,
                                                                    currentPoints: (u, e) => e.currentPoints,
                                                                    maximumPoints: (u, e) => e.maximumPoints,
                                                                    earnedPoints: 0,
                                                                }),
                                                                () => {},
                                                            ],
                                                            cond: q,
                                                        },
                                                        [y.SwitchState]: {
                                                            target: P.UpdateState,
                                                            actions: (0, h.f0)({ status: (u, e) => e.status }),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            guards: {
                                                hasActiveStatus: O,
                                                hasNonActiveStatus: k,
                                                isSwitchToInfinite: M,
                                                isStatusUpdate: I,
                                                isTaskSwitchingUpdate: W,
                                                isNoUpdate: N,
                                                isUpdateCurrentStageWithZeroEarnPoints: U,
                                                isUpdateCurrentStageWithCurrentPoints: z,
                                                isUpdateToNextStageWithoutFillMax: $,
                                                isUpdateToNextStageWithFillMax: V,
                                                isUpdateToPrevStageWithReset: j,
                                                isUpdateToPrevStageWithoutReset: G,
                                                isUpdateWithActiveSwitch: q,
                                            },
                                        },
                                    )
                                );
                                var u, t;
                            }, []),
                            l = (0, Iu.eO)(D),
                            c = l[0],
                            B = l[1],
                            C = c.context.status === w.DISABLED;
                        (0, n.useEffect)(() => {
                            B({ type: y.CheckDataUpdate, status: i, stage: o, currentPoints: A, maximumPoints: F });
                        }, [i, A, F, o, B]);
                        const d = R.strings.fun_random.widget.steps(),
                            m = (0, n.useCallback)(() => {
                                B({ type: y.CheckDataUpdate, status: i, stage: o, currentPoints: A, maximumPoints: F });
                            }, [A, F, o, i, B]),
                            g =
                                c.context.status === w.ACTIVE_INFINITE_RESETTABLE ||
                                c.context.status === w.ACTIVE_INFINITE_FINAL,
                            p = i === w.DISABLED ? i : c.context.status;
                        return a().createElement(
                            _,
                            {
                                contentId: R.views.fun_random.lobby.tooltips.FunRandomProgressionTooltipView('resId'),
                                isEnabled: !C,
                            },
                            a().createElement(
                                'div',
                                { className: s()(Ru.base, Ru[`base__${p}`], u) },
                                a().createElement('div', { className: Ru.statusIcon }),
                                a().createElement(
                                    'div',
                                    { className: Ru.progress },
                                    a().createElement(
                                        'div',
                                        { className: Ru.progressLevel },
                                        a().createElement(Yu, {
                                            text: d,
                                            binding: {
                                                current: g ? c.context.stage : c.context.currentPoints,
                                                total: g ? '' : c.context.maximumPoints,
                                            },
                                        }),
                                        g && a().createElement('div', { className: Ru.infiniteIcon }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: Ru.progressBar },
                                        a().createElement(ku, {
                                            value: c.context.currentPoints,
                                            maxValue: c.context.maximumPoints,
                                            size: tu.Small,
                                            animationSettings: Ou,
                                            deltaFrom: c.context.currentPoints - c.context.earnedPoints,
                                            onEndAnimation: m,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Xu = {
                        base: 'App_base_59',
                        animContainer: 'App_animContainer_b4',
                        slideDown: 'App_slideDown_0e',
                        base__completedResettable: 'App_base__completedResettable_78',
                        base__completedFinal: 'App_base__completedFinal_76',
                        base__disabled: 'App_base__disabled_e8',
                        backgroundWrapper: 'App_backgroundWrapper_0b',
                        background: 'App_background_75',
                        modifications: 'App_modifications_5f',
                        title: 'App_title_31',
                        status: 'App_status_1c',
                        fadeInWithScale: 'App_fadeInWithScale_72',
                    },
                    Qu = (0, A.Pi)(() => {
                        const u = uu(),
                            e = u.model,
                            t = u.controls,
                            r = e.progressionState.get().status,
                            i = e.modifiersDomains.get(),
                            o = e.activeModeResName.get(),
                            A = ((u, { poFileName: e, assetsPointer: t, isSubMode: n } = {}) => {
                                const a = e ? R.strings.$dyn(e) : R.strings.fun_random;
                                if (!a || 'string' == typeof a) throw Error("Incorrect 'poFileName' argument");
                                const r = n ? 'sub_modes' : 'modes',
                                    i = (t ? a.$dyn(r)[t] : a) || a.$dyn(r)[D];
                                return u
                                    ? { staticTexts: l(a, u), dynamicTexts: l(i, u) }
                                    : { staticTexts: a, dynamicTexts: i };
                            })(null, { assetsPointer: o }),
                            F = A.dynamicTexts.capsUserName(),
                            B = (0, n.useState)(r),
                            C = B[0],
                            d = B[1];
                        var m;
                        return (
                            (m = () => {
                                E.O.view.setSidePaddingsRem({ left: 241, right: 241, top: 0, bottom: 0 });
                            }),
                            (0, n.useEffect)(m, []),
                            (0, n.useEffect)(() => {
                                r !== C && S(r) && d(r);
                            }, [r, C]),
                            a().createElement(
                                'div',
                                { className: s()(Xu.base, Xu[`base__${C}`]) },
                                a().createElement(
                                    'div',
                                    {
                                        className: Xu.animContainer,
                                        onClick: () => {
                                            E.O.sound.play.sound(R.sounds.yes()), t.showInfo();
                                        },
                                        onMouseEnter: E.O.sound.play.highlight,
                                    },
                                    a().createElement(
                                        'div',
                                        { className: Xu.backgroundWrapper },
                                        a().createElement('img', {
                                            className: Xu.background,
                                            src: c(o, !0).hangar_widget.ribbon(),
                                            alt: 'background',
                                        }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: Xu.modifications },
                                        (function (u, e) {
                                            return Array.isArray(u)
                                                ? u.map(e)
                                                : u.map((u, t, n) => e(null == u ? void 0 : u.value, t));
                                        })(i, (u, e) => a().createElement(v, { key: e, modifiersDomain: u })),
                                    ),
                                    a().createElement('div', { className: Xu.title }, F),
                                    a().createElement(Zu, { className: Xu.status, onStatusUpdate: (u) => d(u) }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    i().render(
                        a().createElement(J, null, a().createElement(Qu, null)),
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
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], r = !0, i = 0; i < e.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, n];
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
        (__webpack_require__.j = 808),
        (() => {
            var u = { 808: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var E = o(__webpack_require__);
                    }
                    for (e && e(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(5089));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
