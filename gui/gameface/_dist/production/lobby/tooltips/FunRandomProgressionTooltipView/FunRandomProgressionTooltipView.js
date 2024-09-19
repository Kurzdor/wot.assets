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
                    t.d(n, { mouse: () => c, off: () => l, on: () => E, onResize: () => s, onScaleUpdated: () => i });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => _,
                        getSize: () => d,
                        graphicsQuality: () => B,
                        playSound: () => F,
                        setRTPC: () => D,
                    });
                var a = t(2472);
                function o(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                const s = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    l = (u, e) => engine.off(u, e),
                    A = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    c = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && o(!1);
                        }
                        function t() {
                            u.enabled && o(!0);
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
                                : o(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${e}`,
                                            o = A[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            n(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(a, s),
                                                    (u.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                (u.enabled = !1), n();
                            },
                            enable() {
                                (u.enabled = !0), n();
                            },
                            enableOutside() {
                                u.enabled && o(!0);
                            },
                            disableOutside() {
                                u.enabled && o(!1);
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
                function d(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const B = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    m = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    C = Object.keys(m).reduce((u, e) => ((u[e] = () => F(m[e])), u), {}),
                    g = { play: Object.assign({}, C, { sound: F }), setRTPC: D },
                    p = { view: t(2031), client: r, sound: g };
            },
            2031: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => c,
                        children: () => n,
                        displayStatus: () => o,
                        displayStatusIs: () => y,
                        events: () => i,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => R,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => D,
                        getDisplayStatus: () => P,
                        getScale: () => p,
                        getSize: () => B,
                        getViewGlobalPosition: () => C,
                        isEventHandled: () => T,
                        isFocused: () => f,
                        pxToRem: () => b,
                        remToPx: () => v,
                        resize: () => m,
                        sendEvent: () => A,
                        setAnimateWindow: () => w,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => F,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => O,
                    });
                var n = {};
                function r(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function a(u, e, t) {
                    return `url(${r(u, e, t)})`;
                }
                t.r(n), t.d(n, { getBgUrl: () => a, getTextureUrl: () => r });
                const o = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
                var s = t(2472);
                const i = {
                        onTextureFrozen: (0, s.E)('self.onTextureFrozen'),
                        onTextureReady: (0, s.E)('self.onTextureReady'),
                        onDomBuilt: (0, s.E)('self.onDomBuilt'),
                        onLoaded: (0, s.E)('self.onLoaded'),
                        onDisplayChanged: (0, s.E)('self.onShowingStatusChanged'),
                        onFocusUpdated: (0, s.E)('self.onFocusChanged'),
                        children: {
                            onAdded: (0, s.E)('children.onAdded'),
                            onLoaded: (0, s.E)('children.onLoaded'),
                            onRemoved: (0, s.E)('children.onRemoved'),
                            onAttached: (0, s.E)('children.onAttached'),
                            onTextureReady: (0, s.E)('children.onTextureReady'),
                            onRequestPosition: (0, s.E)('children.requestPosition'),
                        },
                    },
                    E = ['args'],
                    l = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(u);
                                    for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, E);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    A = {
                        close(u) {
                            l('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            l(64);
                        },
                        move(u) {
                            l(16, { isMouseEvent: !0, on: u });
                        },
                    };
                function c(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function F(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function D(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function d(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function _(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function B(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function C(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: v(e.x), y: v(e.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function b(u) {
                    return viewEnv.pxToRem(u);
                }
                function v(u) {
                    return viewEnv.remToPx(u);
                }
                function w(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function T() {
                    return viewEnv.isEventHandled();
                }
                function R() {
                    viewEnv.forceTriggerMouseMove();
                }
                function P() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(o).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === o[e]), u), {}),
                    S = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    O = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : i.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            5521: (u, e, t) => {
                let n, r;
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
                    })(r || (r = {}));
            },
            1358: (u, e, t) => {
                t.d(e, { Z: () => a });
                var n = t(5840);
                class r {
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
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(u, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
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
                t.d(e, { Sw: () => a.Z, B3: () => E, Z5: () => o.Z5, B0: () => s, ry: () => m });
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
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(5521),
                    D = t(5840);
                const d = ['args'];
                function _(u, e, t, n, r, a, o) {
                    try {
                        var s = u[a](o),
                            i = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(i) : Promise.resolve(i).then(n, r);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
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
                                    return new Promise(function (n, r) {
                                        var a = u.apply(e, t);
                                        function o(u) {
                                            _(a, n, r, o, s, 'next', u);
                                        }
                                        function s(u) {
                                            _(a, n, r, o, s, 'throw', u);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(u);
                                    for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, d);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    g = () => C(s.CLOSE),
                    p = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var b = t(7572);
                const v = r.instance,
                    w = {
                        DataTracker: a.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: l,
                        TimeFormatType: A,
                        DateFormatType: c,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => C(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => C(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), a) => {
                            const o = D.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                E = i.x,
                                l = i.y,
                                A = i.width,
                                c = i.height,
                                F = {
                                    x: D.O.view.pxToRem(E) + o.x,
                                    y: D.O.view.pxToRem(l) + o.y,
                                    width: D.O.view.pxToRem(A),
                                    height: D.O.view.pxToRem(c),
                                };
                            C(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: B(F),
                                on: !0,
                                args: a,
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
                        handleViewEvent: C,
                        onBindingsReady: m,
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
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const r = Object.prototype.toString.call(e[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < r.length; e++) t[n].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = w;
            },
            8613: (u, e, t) => {
                t.d(e, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    r = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            9457: (u, e, t) => {
                var n = t(6179),
                    r = t.n(n),
                    a = t(493),
                    o = t.n(a);
                let s;
                !(function (u) {
                    (u.DISABLED = 'disabled'),
                        (u.ACTIVE_FINAL = 'activeFinal'),
                        (u.ACTIVE_RESETTABLE = 'activeResettable'),
                        (u.COMPLETED_FINAL = 'completedFinal'),
                        (u.COMPLETED_RESETTABLE = 'completedResettable'),
                        (u.ACTIVE_INFINITE_RESETTABLE = 'activeInfiniteResettable'),
                        (u.ACTIVE_INFINITE_FINAL = 'activeInfiniteFinal');
                })(s || (s = {}));
                var i = t(3403),
                    E = t(9916);
                const l = ({ format: u, value: e }) => {
                    const t = ((u, e = 'integral') => {
                        let t;
                        return (
                            (t = 'gold' === e ? E.B3.GOLD : E.B3.INTEGRAL),
                            void 0 === u ? '' : E.Z5.getNumberFormat(u, t)
                        );
                    })(e, u);
                    return t ? r().createElement('span', null, t) : null;
                };
                let A, c, F, D, d, _, B, m;
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
                        (u.WtHunterLootbox = 'wt_hunter'),
                        (u.WtBossLootbox = 'wt_boss'),
                        (u.WtProgressPoints = 'stamp'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.DeluxeGift = 'deluxe_gift'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.OptionalDevice = 'optionalDevice'),
                        (u.EquipCoin = 'equipCoin'),
                        (u.WTCommanderClaimable = 'wtCommanderClaimable'),
                        (u.WTCommanderClaimed = 'wtCommanderClaimed');
                })(A || (A = {})),
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
                    })(c || (c = {})),
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
                    })(F || (F = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(D || (D = {})),
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
                    })(d || (d = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(_ || (_ = {})),
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
                    })(B || (B = {})),
                    (function (u) {
                        (u[(u.Engraving = 0)] = 'Engraving'), (u[(u.Background = 1)] = 'Background');
                    })(m || (m = {}));
                const C = [
                        A.Items,
                        A.Equipment,
                        A.Xp,
                        A.XpFactor,
                        A.Blueprints,
                        A.BlueprintsAny,
                        A.Goodies,
                        A.Berths,
                        A.Slots,
                        A.Tokens,
                        A.CrewSkins,
                        A.CrewBooks,
                        A.Customizations,
                        A.CreditsFactor,
                        A.TankmenXp,
                        A.TankmenXpFactor,
                        A.FreeXpFactor,
                        A.BattleToken,
                        A.PremiumUniversal,
                        A.NaturalCover,
                        A.BpCoin,
                        A.BattlePassSelectToken,
                        A.BattlaPassFinalAchievement,
                        A.BattleBadge,
                        A.BonusX5,
                        A.CrewBonusX3,
                        A.NewYearInvoice,
                        A.EpicSelectToken,
                        A.WtHunterLootbox,
                        A.WtBossLootbox,
                        A.WtProgressPoints,
                        A.Comp7TokenWeeklyReward,
                        A.DeluxeGift,
                        A.BattleBoosterGift,
                        A.OptionalDevice,
                    ],
                    g = [A.Gold, A.Credits, A.Crystal, A.FreeXp],
                    p = [A.BattlePassPoints, A.EquipCoin],
                    b = [A.PremiumPlus, A.Premium],
                    v = ['engravings', 'backgrounds'],
                    w = ['engraving', 'background'],
                    f = (u, e = F.Small) => {
                        const t = u.name,
                            n = u.type,
                            r = u.value,
                            a = u.icon,
                            o = u.item,
                            s = u.dogTagType,
                            i = ((u) => {
                                switch (u) {
                                    case F.S600x450:
                                        return 'c_600x450';
                                    case F.S400x300:
                                        return 'c_400x300';
                                    case F.S296x222:
                                        return 'c_296x222';
                                    case F.S232x174:
                                        return 'c_232x174';
                                    case F.Big:
                                        return 'c_80x80';
                                    case F.Small:
                                        return 'c_48x48';
                                    default:
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${n}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${a}`;
                            case 'tokens':
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
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${a}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const n = v[u];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(w[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, e, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${a}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${i}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    h = [F.Small, F.Big];
                function T() {
                    return !1;
                }
                console.log;
                var P = t(9174),
                    y = t(5840);
                function S(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const O = (u) => (0 === u ? window : window.subViews.get(u));
                function I(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, n) => e(null == u ? void 0 : u.value, t, n));
                }
                var x = t(3946);
                const k = ((u, e) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: a, children: o, mocks: s }) {
                                const i = (0, n.useRef)([]),
                                    E = (u, t, n) => {
                                        var r;
                                        const a = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = O,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? r.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = r.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const o = (u) => {
                                                    const r = t(e),
                                                        a = n.split('.').reduce((u, e) => u[e], r);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const s = 'string' == typeof a ? `${n}.${a}` : n,
                                                            i = y.O.view.addModelObserver(s, e, !0);
                                                        return r.set(i, t), u && t(o(a)), i;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (u, e) => {
                                                        const t = o(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = o(u);
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
                                                                                    return S(u, e);
                                                                                var t = Object.prototype.toString
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
                                                                                          ? S(u, e)
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
                                                                })(r.keys());
                                                            !(u = t()).done;

                                                        )
                                                            a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(t),
                                            o =
                                                'real' === u
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === u ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                            E = (u) => i.current.push(u),
                                            l = (({ observableModel: u }) => {
                                                const e = {
                                                        progressionState: u.object('state'),
                                                        currentStage: u.object('currentStage'),
                                                        condition: u.object('condition'),
                                                        rewards: u.array('currentStage.rewards', []),
                                                        assetsPointer: u.object('assetsPointer'),
                                                        isMultipleSubModes: u.object('isMultipleSubModes'),
                                                    },
                                                    t = (0, x.Om)(
                                                        (u) =>
                                                            I(e.rewards.get(), (e) => {
                                                                return {
                                                                    name: e.name,
                                                                    image: f(e, u),
                                                                    value: e.value,
                                                                    special: e.overlayType,
                                                                    valueType:
                                                                        ((t = e.name),
                                                                        C.includes(t)
                                                                            ? D.MULTI
                                                                            : g.includes(t)
                                                                              ? D.CURRENCY
                                                                              : p.includes(t)
                                                                                ? D.NUMBER
                                                                                : b.includes(t)
                                                                                  ? D.PREMIUM_PLUS
                                                                                  : D.STRING),
                                                                };
                                                                var t;
                                                            }),
                                                        { equals: T },
                                                    );
                                                return Object.assign({}, e, { computes: { getRewards: t } });
                                            })({
                                                mode: u,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            r = P.LO.box(n, { equals: T });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, P.aD)((u) => r.set(u)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            r = P.LO.box(n, { equals: T });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, P.aD)((u) => r.set(u)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = s(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (u, e) => ((u[e] = P.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, P.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                a = Object.entries(r),
                                                                s = a.reduce(
                                                                    (u, [e, t]) => ((u[t] = P.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, P.aD)((u) => {
                                                                            a.forEach(([e, t]) => {
                                                                                s[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            A = { mode: u, model: l, externalModel: o, cleanup: E };
                                        return {
                                            model: l,
                                            controls: 'mocks' === u && n ? n.controls(A) : e(A),
                                            externalModel: o,
                                            mode: u,
                                        };
                                    },
                                    l = (0, n.useRef)(!1),
                                    A = (0, n.useState)(u),
                                    c = A[0],
                                    F = A[1],
                                    d = (0, n.useState)(() => E(u, a, s)),
                                    _ = d[0],
                                    B = d[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        l.current ? B(E(c, a, s)) : (l.current = !0);
                                    }, [s, c, a]),
                                    (0, n.useEffect)(() => {
                                        F(u);
                                    }, [u]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            _.externalModel.dispose(), i.current.forEach((u) => u());
                                        },
                                        [_],
                                    ),
                                    r().createElement(t.Provider, { value: _ }, o)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, function () {}),
                    N = k[0],
                    M = k[1];
                var L = t(6483),
                    U = t.n(L);
                const G = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    $ = ['children', 'className', 'theme'];
                function z() {
                    return (
                        (z =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        z.apply(this, arguments)
                    );
                }
                const W = r().forwardRef(function (u, e) {
                    let t = u.children,
                        a = u.className,
                        o = u.theme,
                        s = void 0 === o ? 'default' : o,
                        i = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, $);
                    const E = (function () {
                            const u = (0, n.useRef)(0);
                            var e;
                            return (
                                (e = () => {
                                    window.cancelAnimationFrame(u.current);
                                }),
                                (0, n.useEffect)(() => e, []),
                                (0, n.useMemo)(
                                    () => ({
                                        run: (e) => {
                                            window.cancelAnimationFrame(u.current),
                                                (u.current = window.requestAnimationFrame(() => {
                                                    u.current = window.requestAnimationFrame(() => {
                                                        e(), (u.current = 0);
                                                    });
                                                }));
                                        },
                                        clear: () => {
                                            window.cancelAnimationFrame(u.current), (u.current = 0);
                                        },
                                        get isRunning() {
                                            return 0 !== u.current;
                                        },
                                    }),
                                    [],
                                )
                            );
                        })(),
                        l = r().useRef(null);
                    var A;
                    return (
                        (A = () => {
                            E.run(() => {
                                const u = l.current;
                                if (!u) return;
                                const e = u.scrollWidth,
                                    t = u.scrollHeight;
                                y.O.view.resize(e, t);
                                const n = window.getComputedStyle(u);
                                y.O.view.setSidePaddingsRem({
                                    left: parseInt(n.getPropertyValue('padding-left'), 10),
                                    top: parseInt(n.getPropertyValue('padding-top'), 10),
                                    right: parseInt(n.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(n.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, n.useEffect)(A, []),
                        r().createElement(
                            'div',
                            z({}, i, {
                                className: U()(G.base, G[`base__theme-${s}`], a),
                                ref: function (u) {
                                    (l.current = u), 'function' == typeof e ? e(u) : e && (e.current = u);
                                },
                            }),
                            r().createElement('div', { className: G.decorator }, t),
                        )
                    );
                });
                var q = t(1281);
                let j;
                function V(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(j || (j = {}));
                const Y = (u) => u.replace(/&nbsp;/g, ' '),
                    X = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    H = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Q = (u, e, t = j.left) => u.split(e).reduce(t === j.left ? X : H, []),
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
                    Z = ['zh_cn', 'zh_sg', 'zh_tw'],
                    J = ({ binding: u, text: e = '', classMix: t, alignment: a = j.left, formatWithBrackets: o }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const s = o && u ? V(e, u) : e;
                        return r().createElement(
                            n.Fragment,
                            null,
                            s.split('\n').map((e, o) =>
                                r().createElement(
                                    'div',
                                    { className: U()('FormatText_base_d0', t), key: `${e}-${o}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                            t && u in t
                                                ? t[u]
                                                : ((u, e = j.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return Z.includes(t)
                                                          ? K(u)
                                                          : 'ja' === t
                                                            ? (0, q.D4)()
                                                                  .parse(u)
                                                                  .map((u) => Y(u))
                                                            : ((u, e = j.left) => {
                                                                  let t = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = Y(u);
                                                                  return (
                                                                      Q(r, /( )/, e).forEach(
                                                                          (u) => (t = t.concat(Q(u, n, j.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(u, e);
                                                  })(u, e),
                                        ))(e, a, u).map((u, e) =>
                                        r().createElement(n.Fragment, { key: `${e}-${u}` }, u),
                                    ),
                                ),
                            ),
                        );
                    },
                    uu = {
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
                    eu = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    tu = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    nu = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    ru = (0, n.memo)(({ text: u, binding: e, classMix: t }) => {
                        const a = (0, n.useCallback)((u) => ({ color: `#${u}` }), []),
                            o = (0, n.useMemo)(() => e || {}, [e]);
                        let s = eu.exec(u),
                            i = u,
                            E = 0;
                        for (; s; ) {
                            const t = s[0],
                                n = tu.exec(t),
                                l = nu.exec(t),
                                A = s[1];
                            if (n && l) {
                                const u = n[0],
                                    s = u + E++ + u;
                                (i = i.replace(t, `%(${s})`)),
                                    (o[s] = uu[u]
                                        ? r().createElement(
                                              'span',
                                              { className: uu[u] },
                                              r().createElement(J, { text: A, binding: e }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: a(u) },
                                              r().createElement(J, { text: A, binding: e }),
                                          ));
                            }
                            s = eu.exec(u);
                        }
                        return r().createElement(J, { text: i, classMix: t, binding: o });
                    }),
                    au =
                        (R.images.fun_random.gui.maps.icons.feature.asset_packs,
                        (u, e) => ('string' == typeof e ? u.$dyn(e) : e.reduce((u, e) => u.$dyn(e), u))),
                    ou = (u, { poFileName: e, assetsPointer: t, isSubMode: n } = {}) => {
                        const r = e ? R.strings.$dyn(e) : R.strings.fun_random;
                        if (!r || 'string' == typeof r) throw Error("Incorrect 'poFileName' argument");
                        const a = n ? 'sub_modes' : 'modes',
                            o = (t ? r.$dyn(a)[t] : r) || r.$dyn(a)[void 0];
                        return u
                            ? { staticTexts: au(r, u), dynamicTexts: au(o, u) }
                            : { staticTexts: r, dynamicTexts: o };
                    },
                    su = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let iu, Eu;
                !(function (u) {
                    (u.Small = 'small'), (u.Medium = 'medium'), (u.Default = 'medium');
                })(iu || (iu = {})),
                    (function (u) {
                        (u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing');
                    })(Eu || (Eu = {}));
                const lu = ({ size: u = iu.Default }) => {
                        const e = U()(su.background, su[`background__${u}`]);
                        return r().createElement('div', { className: e });
                    },
                    Au = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    cu = ({ size: u }) => {
                        const e = U()(Au.base, Au[`base__${u}`]);
                        return r().createElement('div', { className: e });
                    },
                    Fu = {
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
                    Du = (0, n.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: n, isComplete: a, withoutBounce: o }) => {
                            const s = U()(
                                    Fu.base,
                                    Fu[`base__${u}`],
                                    t && Fu.base__disabled,
                                    a && Fu.base__finished,
                                    o && Fu.base__withoutBounce,
                                ),
                                i = !t && !a;
                            return r().createElement(
                                'div',
                                { className: s, style: n, ref: e },
                                r().createElement('div', { className: Fu.pattern }),
                                r().createElement('div', { className: Fu.gradient }),
                                i && r().createElement(cu, { size: u }),
                            );
                        },
                    ),
                    du = ({ size: u, value: e, lineRef: t, disabled: a, onComplete: o }) => {
                        const s = (0, n.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            i = 100 === e;
                        return (
                            (0, n.useEffect)(() => {
                                i && o && o();
                            }, [i, o]),
                            r().createElement(Du, { size: u, disabled: a, baseStyles: s, isComplete: i, lineRef: t })
                        );
                    },
                    _u = (u, e) => {
                        let t;
                        const n = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let Bu, mu;
                !(function (u) {
                    (u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End');
                })(Bu || (Bu = {})),
                    (function (u) {
                        (u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End');
                    })(mu || (mu = {}));
                const Cu = (0, n.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: a,
                            size: o,
                            to: s,
                            onEndAnimation: i,
                            onChangeAnimationState: E,
                        }) => {
                            const l = s < a,
                                A = (0, n.useState)(mu.Idle),
                                c = A[0],
                                F = A[1],
                                D = c === mu.In,
                                d = c === mu.End,
                                _ = c === mu.Idle,
                                B = (0, n.useCallback)(
                                    (u) => {
                                        F(u), E && E(u);
                                    },
                                    [E],
                                );
                            (0, n.useEffect)(() => {
                                if (_ && !t)
                                    return _u(() => {
                                        B(mu.In);
                                    }, e);
                            }, [B, t, _, e]),
                                (0, n.useEffect)(() => {
                                    if (D)
                                        return _u(() => {
                                            i && i(), B(mu.End);
                                        }, u + e);
                                }, [B, D, i, e, u]);
                            const m = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, e, u],
                                ),
                                C = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, e, u],
                                ),
                                g = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(a - s)}%`, left: `${l ? s : a}%` }),
                                    [a, l, s],
                                );
                            return d
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: g },
                                      r().createElement(
                                          'div',
                                          { style: _ ? m : C, className: 'ProgressBarDeltaSimple_delta_99' },
                                          r().createElement(cu, { size: o }),
                                      ),
                                  );
                        },
                    ),
                    gu = (0, n.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: a,
                            disabled: o,
                            isComplete: s,
                            animationSettings: i,
                            onChangeAnimationState: E,
                            onEndAnimation: l,
                        }) => {
                            const A = (0, n.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, u],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(Du, {
                                    size: e,
                                    lineRef: a,
                                    disabled: o,
                                    isComplete: s,
                                    baseStyles: A,
                                }),
                                t >= 0 &&
                                    r().createElement(Cu, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: e,
                                        to: u,
                                        onChangeAnimationState: E,
                                        onEndAnimation: l,
                                    }),
                            );
                        },
                    ),
                    pu = (u) => (u ? { left: 0 } : { right: 0 }),
                    bu = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    vu = (u) => ({ transitionDuration: `${u}ms` }),
                    wu = (0, n.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: a,
                            size: o,
                            to: s,
                            onEndAnimation: i,
                            onChangeAnimationState: E,
                            className: l,
                        }) => {
                            const A = s < a,
                                c = (0, n.useState)(Bu.Idle),
                                F = c[0],
                                D = c[1],
                                d = F === Bu.End,
                                _ = F === Bu.Idle,
                                B = F === Bu.Grow,
                                m = F === Bu.Shrink,
                                C = (0, n.useCallback)(
                                    (u) => {
                                        D(u), E && E(u);
                                    },
                                    [E],
                                ),
                                g = (0, n.useCallback)(
                                    (u, e) =>
                                        _u(() => {
                                            C(u);
                                        }, e),
                                    [C],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return _
                                        ? g(Bu.Grow, e)
                                        : B
                                          ? g(Bu.Shrink, u)
                                          : m
                                            ? g(Bu.End, u)
                                            : void (d && i && i());
                            }, [g, t, d, B, _, m, i, e, u]);
                            const p = (0, n.useMemo)(() => Object.assign({ width: '100%' }, vu(u), pu(A)), [A, u]),
                                b = (0, n.useMemo)(() => Object.assign({ width: '0%' }, vu(u), pu(A)), [A, u]),
                                v = (0, n.useMemo)(() => Object.assign({ width: '0%' }, bu(A, a), vu(u)), [a, A, u]),
                                w = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - a)}%` }, bu(A, a), vu(u)),
                                    [a, A, s, u],
                                );
                            if (d) return null;
                            const f = U()(
                                'ProgressBarDeltaGrow_base_7e',
                                l,
                                A && 0 === s && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return r().createElement(
                                'div',
                                { style: _ ? v : w, className: f },
                                r().createElement(
                                    'div',
                                    { style: m ? b : p, className: 'ProgressBarDeltaGrow_glow_68' },
                                    r().createElement(cu, { size: o }),
                                ),
                            );
                        },
                    ),
                    fu = (0, n.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: a,
                            disabled: o,
                            isComplete: s,
                            animationSettings: i,
                            onEndAnimation: E,
                            onChangeAnimationState: l,
                        }) => {
                            const A = u < t,
                                c = (0, n.useState)(!1),
                                F = c[0],
                                D = c[1],
                                d = (0, n.useCallback)(
                                    (u) => {
                                        u === Bu.Shrink && D(!0), l && l(u);
                                    },
                                    [l],
                                ),
                                _ = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                B = (0, n.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, u],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(Du, {
                                    size: e,
                                    lineRef: a,
                                    disabled: o,
                                    isComplete: s,
                                    withoutBounce: A && 0 === u,
                                    baseStyles: F ? B : _,
                                }),
                                t >= 0 &&
                                    r().createElement(wu, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: d,
                                        freezed: i.freezed,
                                        onEndAnimation: E,
                                        from: t,
                                        size: e,
                                        to: u,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    hu = ['onComplete', 'onEndAnimation'];
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const Ru = (0, n.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, hu);
                        const o = (0, n.useState)(!1),
                            s = o[0],
                            i = o[1],
                            E = (0, n.useCallback)(() => {
                                const u = 100 === a.to;
                                u !== s && i(u), u && e && e(), t && t();
                            }, [s, e, t, a.to]);
                        switch (a.animationSettings.type) {
                            case Eu.Simple:
                                return r().createElement(gu, Tu({}, a, { onEndAnimation: E, isComplete: s }));
                            case Eu.Growing:
                                return r().createElement(fu, Tu({}, a, { onEndAnimation: E, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    Pu = ['onEndAnimation'];
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const Su = (0, n.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, Pu);
                    const a = (0, n.useRef)({}),
                        o = (0, n.useCallback)(() => {
                            (a.current.from = void 0), e && e();
                        }, [e]),
                        s = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = s),
                        r().createElement(Ru, yu({}, t, { onEndAnimation: o, key: `${s}-${t.to}`, from: s }))
                    );
                });
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                const Iu = (0, n.memo)(
                        ({
                            size: u,
                            value: e,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: a,
                            animationSettings: o,
                            onEndAnimation: s,
                            onChangeAnimationState: i,
                            onComplete: E,
                        }) => {
                            if (a === e)
                                return r().createElement(du, {
                                    key: `${a}-${e}`,
                                    size: u,
                                    value: e,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: E,
                                });
                            const l = {
                                from: a,
                                to: e,
                                size: u,
                                lineRef: t,
                                disabled: n,
                                animationSettings: o,
                                onComplete: E,
                                onEndAnimation: s,
                                onChangeAnimationState: i,
                            };
                            return o.withStack
                                ? r().createElement(Su, l)
                                : r().createElement(Ru, Ou({ key: `${a}-${e}` }, l));
                        },
                    ),
                    xu = (u) => ({
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
                    ku = (u, e, t) => (t < u ? u : t > e ? e : t),
                    Nu = (u, e, t) => ('number' == typeof t ? (ku(0, e, t) / e) * 100 : u),
                    Mu = {
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
                    Lu = {
                        freezed: !1,
                        withStack: !1,
                        type: Eu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Uu = (0, n.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = Mu,
                            size: t = iu.Default,
                            animationSettings: a = Lu,
                            disabled: o = !1,
                            withoutBackground: s = !1,
                            value: i,
                            deltaFrom: E,
                            lineRef: l,
                            onChangeAnimationState: A,
                            onEndAnimation: c,
                            onComplete: F,
                        }) => {
                            const D = ((u, e, t) =>
                                (0, n.useMemo)(() => {
                                    const n = (ku(0, e, u) / e) * 100;
                                    return { value: n, deltaFrom: Nu(n, e, t) };
                                }, [t, e, u]))(i, u, E);
                            return r().createElement(
                                'div',
                                { className: U()(su.base, su[`base__${t}`]), style: xu(e) },
                                !s && r().createElement(lu, { size: t }),
                                r().createElement(Iu, {
                                    size: t,
                                    lineRef: l,
                                    disabled: o,
                                    value: D.value,
                                    deltaFrom: D.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: c,
                                    onChangeAnimationState: A,
                                    onComplete: F,
                                }),
                            );
                        },
                    ),
                    Gu = R.strings.fun_random,
                    $u = (0, i.Pi)(() => {
                        const u = M().model,
                            e = u.currentStage.get(),
                            t = e.currentPoints,
                            n = e.maximumPoints,
                            a = u.condition.get(),
                            o = a.text,
                            s = a.conditionIcon,
                            i = Gu.progression.$dyn(t > 0 ? 'stepsCurrent' : 'stepsNoProgress');
                        return r().createElement(
                            'div',
                            { className: 'Quest_base_b1' },
                            r().createElement(
                                'div',
                                { className: 'Quest_questIcons_c0' },
                                r().createElement('div', {
                                    className: 'Quest_questIcon_f0',
                                    style:
                                        ((E = s),
                                        {
                                            backgroundImage: `url(${R.images.gui.maps.icons.missions.icons.$dyn(`c_80_${E}_silver`)})`,
                                        }),
                                }),
                            ),
                            r().createElement('div', { className: 'Quest_title_b1' }, o),
                            r().createElement(
                                'div',
                                { className: 'Quest_progress_68' },
                                r().createElement(
                                    'div',
                                    { className: 'Quest_progressValue_c0' },
                                    r().createElement(ru, { text: i, binding: { done: t, total: n } }),
                                ),
                                r().createElement(Uu, { size: iu.Small, value: t, maxValue: n }),
                            ),
                        );
                        var E;
                    }),
                    zu = [
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
                function Wu(u) {
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
                const qu = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: E.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    ju = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            a = u.onMouseEnter,
                            o = u.onMouseLeave,
                            s = u.onMouseDown,
                            i = u.onClick,
                            E = u.ignoreShowDelay,
                            l = void 0 !== E && E,
                            A = u.ignoreMouseClick,
                            c = void 0 !== A && A,
                            F = u.decoratorId,
                            D = void 0 === F ? 0 : F,
                            d = u.isEnabled,
                            _ = void 0 === d || d,
                            B = u.targetId,
                            m = void 0 === B ? 0 : B,
                            C = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, zu);
                        const b = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(
                                () =>
                                    m ||
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
                                [m],
                            ),
                            w = (0, n.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (qu(t, D, { isMouseEvent: !0, on: !0, arguments: Wu(r) }, v),
                                    C && C(),
                                    (b.current.isVisible = !0));
                            }, [t, D, r, v, C]),
                            f = (0, n.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const u = b.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (b.current.timeoutId = 0)),
                                        qu(t, D, { on: !1 }, v),
                                        b.current.isVisible && g && g(),
                                        (b.current.isVisible = !1);
                                }
                            }, [t, D, v, g]),
                            h = (0, n.useCallback)((u) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(b.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const u = b.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', h, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', h, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === _ && f();
                            }, [_, f]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            ),
                            _
                                ? (0, n.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((b.current.timeoutId = window.setTimeout(w, l ? 100 : 400)),
                                                          a && a(u),
                                                          T && T(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  f(), null == o || o(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === c && f(), null == i || i(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === c && f(), null == s || s(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : e
                        );
                        var T;
                    },
                    Vu = ['children'];
                function Yu() {
                    return (
                        (Yu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Yu.apply(this, arguments)
                    );
                }
                const Xu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, Vu);
                        return r().createElement(
                            ju,
                            Yu(
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
                    Hu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Qu() {
                    return (
                        (Qu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Qu.apply(this, arguments)
                    );
                }
                const Ku = R.views.common.tooltip_window.simple_tooltip_content,
                    Zu = (u) => {
                        let e = u.children,
                            t = u.body,
                            a = u.header,
                            o = u.note,
                            s = u.alert,
                            i = u.args,
                            E = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, Hu);
                        const l = (0, n.useMemo)(() => {
                            const u = Object.assign({}, i, { body: t, header: a, note: o, alert: s });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [s, t, a, o, i]);
                        return r().createElement(
                            ju,
                            Qu(
                                {
                                    contentId:
                                        ((A = null == i ? void 0 : i.hasHtmlContent),
                                        A ? Ku.SimpleTooltipHtmlContent('resId') : Ku.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                E,
                            ),
                            e,
                        );
                        var A;
                    };
                function Ju() {
                    return (
                        (Ju =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ju.apply(this, arguments)
                    );
                }
                const ue = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const n = r().createElement('div', { className: t }, u);
                        if (e.header || e.body) return r().createElement(Zu, e, n);
                        const a = e.contentId;
                        return a ? r().createElement(ju, Ju({}, e, { contentId: a }), n) : r().createElement(Xu, e, n);
                    },
                    ee = {
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
                    te = ({
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: n = F.Big,
                        special: a,
                        value: o,
                        valueType: s,
                        title: i,
                        style: E,
                        className: A,
                        classNames: c,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: C,
                    }) => {
                        const g = ((u, e) => {
                                if (void 0 === e || !h.includes(u)) return null;
                                switch (e) {
                                    case d.BATTLE_BOOSTER:
                                    case d.BATTLE_BOOSTER_REPLACE:
                                        return _.BATTLE_BOOSTER;
                                }
                            })(n, a),
                            p = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case d.BATTLE_BOOSTER:
                                        return B.BATTLE_BOOSTER;
                                    case d.BATTLE_BOOSTER_REPLACE:
                                        return B.BATTLE_BOOSTER_REPLACE;
                                    case d.BUILT_IN_EQUIPMENT:
                                        return B.BUILT_IN_EQUIPMENT;
                                    case d.EQUIPMENT_PLUS:
                                        return B.EQUIPMENT_PLUS;
                                    case d.EQUIPMENT_TROPHY_BASIC:
                                        return B.EQUIPMENT_TROPHY_BASIC;
                                    case d.EQUIPMENT_TROPHY_UPGRADED:
                                        return B.EQUIPMENT_TROPHY_UPGRADED;
                                    case d.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return B.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case d.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return B.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case d.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return B.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case d.PROGRESSION_STYLE_UPGRADED_1:
                                        return B.PROGRESSION_STYLE_UPGRADED_1;
                                    case d.PROGRESSION_STYLE_UPGRADED_2:
                                        return B.PROGRESSION_STYLE_UPGRADED_2;
                                    case d.PROGRESSION_STYLE_UPGRADED_3:
                                        return B.PROGRESSION_STYLE_UPGRADED_3;
                                    case d.PROGRESSION_STYLE_UPGRADED_4:
                                        return B.PROGRESSION_STYLE_UPGRADED_4;
                                    case d.PROGRESSION_STYLE_UPGRADED_5:
                                        return B.PROGRESSION_STYLE_UPGRADED_5;
                                    case d.PROGRESSION_STYLE_UPGRADED_6:
                                        return B.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(a),
                            b = ((u, e) => {
                                if (void 0 === u) return null;
                                switch (e) {
                                    case D.MULTI: {
                                        const e = Number(u);
                                        return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                    }
                                    case D.CURRENCY:
                                    case D.NUMBER:
                                        return r().createElement(l, { format: 'integral', value: Number(u) });
                                    case D.PREMIUM_PLUS: {
                                        const e = Number(u);
                                        return isNaN(e) ? u : null;
                                    }
                                    default:
                                        return u;
                                }
                            })(o, s);
                        return r().createElement(
                            'div',
                            { className: U()(ee.base, ee[`base__${n}`], A), style: E },
                            r().createElement(
                                ue,
                                { tooltipArgs: m, className: ee.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: U()(ee.image, null == c ? void 0 : c.image) },
                                        g &&
                                            r().createElement('div', {
                                                className: U()(ee.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            r().createElement('div', {
                                                className: U()(ee.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        p &&
                                            r().createElement('div', {
                                                className: U()(ee.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${p}_overlay)`,
                                                },
                                            }),
                                    ),
                                    b &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: U()(
                                                    ee.info,
                                                    ee[`info__${u}`],
                                                    s === D.MULTI && ee.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            b,
                                        ),
                                    i && r().createElement('div', { className: ee.title }, i),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    ue,
                                    { tooltipArgs: C },
                                    r().createElement('div', {
                                        className: U()(ee.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                const re = r().memo(
                        ({
                            data: u,
                            size: e = F.Big,
                            isVertical: t = !1,
                            count: a,
                            classMix: o,
                            rewardItemClassMix: s,
                            boxRewardTooltip: i,
                            boxRewardValue: E,
                            boxRewardClassName: l,
                            boxRewardClassNames: A,
                        }) => {
                            const c = (0, n.useMemo)(
                                    () =>
                                        a && a < u.length ? `R.images.gui.maps.icons.quests.bonuses.${e}.default` : '',
                                    [a, u.length, e],
                                ),
                                D =
                                    E ||
                                    ((d = R.strings.tooltips.quests.awards.additional.bottom()),
                                    (_ = { count: u.length - (a || 0) }),
                                    d.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                        const e = 0 === u.indexOf('%') ? 2 : 1;
                                        return String(_[u.slice(e, -e)]);
                                    }));
                            var d, _;
                            const B = U()('Rewards_base_26', t && 'Rewards_base__vertical_9f', o),
                                m = U()('Rewards_reward_7b', t && 'Rewards_reward__vertical_c6', s);
                            return r().createElement(
                                'div',
                                { className: B },
                                c
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          u
                                              .slice(0, a)
                                              .map((u, t) =>
                                                  r().createElement(
                                                      'div',
                                                      { key: t, className: m },
                                                      r().createElement(te, ne({ size: e }, u)),
                                                  ),
                                              ),
                                          r().createElement(
                                              'div',
                                              { className: m },
                                              r().createElement(te, {
                                                  name: 'more',
                                                  image: c,
                                                  size: e,
                                                  value: D,
                                                  tooltipArgs: i,
                                                  className: l,
                                                  classNames: A,
                                              }),
                                          ),
                                      )
                                    : u.map((u, t) =>
                                          r().createElement(
                                              'div',
                                              { key: t, className: m },
                                              r().createElement(te, ne({ size: e }, u)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    ae = R.strings.fun_random.metaProgressionTooltip,
                    oe = (0, i.Pi)(() => {
                        const u = M().model,
                            e = u.progressionState.get().status,
                            t = u.rewards.get().length,
                            n = t > 5 ? 4 : 5,
                            a = Math.min(t, 5) >= 3,
                            o = u.computes.getRewards(a ? F.Small : F.Big),
                            i = e === s.ACTIVE_INFINITE_RESETTABLE || e === s.ACTIVE_INFINITE_FINAL,
                            E = I(o, (u) =>
                                Object.assign({}, u, {
                                    image: u.image,
                                    className: U()(
                                        u.className,
                                        U()('Rewards_reward_e5', a && 'Rewards_reward__small_1b'),
                                    ),
                                }),
                            );
                        return r().createElement(
                            'div',
                            { className: 'Rewards_base_12' },
                            r().createElement(
                                'div',
                                { className: 'Rewards_title_bc' },
                                ae.reward.header.$dyn(i ? 'infinite' : 'common'),
                            ),
                            r().createElement(re, {
                                rewardItemClassMix: 'Rewards_rewardBase_c2',
                                size: F.Small,
                                data: E,
                                count: n,
                            }),
                        );
                    });
                let se, ie;
                !(function (u) {
                    (u.Timer = 'timer'), (u.Countdown = 'countdown'), (u.Cooldown = 'cooldown'), (u.None = 'none');
                })(se || (se = {})),
                    (function (u) {
                        (u.Description = 'description'),
                            (u.Short = 'short'),
                            (u.Long = 'long'),
                            (u.Extended = 'extended');
                    })(ie || (ie = {}));
                var Ee = t(8613);
                Date.now(), Ee.Ew.getRegionalDateTime, Ee.Ew.getFormattedDateTime;
                const le = () => {};
                let Ae;
                E.Sw.instance,
                    (function (u) {
                        (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                    })(Ae || (Ae = {})),
                    E.Sw.instance;
                const ce = (u = 0, e, t = 0, r = le) => {
                        const a = (0, n.useState)(u),
                            o = a[0],
                            s = a[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (u > 0) {
                                    s(u);
                                    const n = Date.now(),
                                        a = setInterval(
                                            () => {
                                                const e = u - Math.floor((Date.now() - n) / 1e3);
                                                null !== t && e <= t ? (s(t), r && r(), clearInterval(a)) : s(e);
                                            },
                                            1e3 * (e || (u > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(a);
                                    };
                                }
                            }, [u, e, t, r]),
                            o
                        );
                    },
                    Fe = (u) => u.toString().padStart(2, '0'),
                    De = R.images.gui.maps.icons.components.countdown,
                    de = (u, e) => {
                        const t = 2 === e ? De.big : De;
                        switch (u) {
                            case se.Timer:
                                return t.clock();
                            case se.Countdown:
                                return t.hourglass();
                            case se.Cooldown:
                                return t.lock();
                        }
                    },
                    _e = (0, n.memo)(
                        ({
                            duration: u,
                            icon: e = se.Timer,
                            style: t = ie.Description,
                            onTimeReached: a,
                            className: o = '',
                            classNames: s = {},
                        }) => {
                            const i = t !== ie.Description ? 1 : void 0,
                                E = ce(u, i),
                                l = (() => {
                                    const u = (0, n.useState)(y.O.view.getScale()),
                                        e = u[0],
                                        t = u[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const u = () => {
                                                t(y.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', u),
                                                () => {
                                                    window.removeEventListener('resize', u);
                                                }
                                            );
                                        }, []),
                                        e
                                    );
                                })();
                            a && a[E] && a[E]();
                            const A = ((u, e) => {
                                switch (e) {
                                    case ie.Description:
                                        return ((u, e = !0) =>
                                            u.days > 7 && e
                                                ? V(R.strings.common.duration.days(), { days: u.days })
                                                : u.days >= 1
                                                  ? 0 === u.hours
                                                      ? V(R.strings.common.duration.days(), { days: u.days })
                                                      : `${V(R.strings.common.duration.days(), { days: u.days })} ${V(R.strings.common.duration.hours(), { hours: u.hours })}`
                                                  : u.hours >= 1
                                                    ? 0 === u.minutes
                                                        ? V(R.strings.common.duration.hours(), { hours: u.hours })
                                                        : `${V(R.strings.common.duration.hours(), { hours: u.hours })} ${V(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                                                    : V(R.strings.common.duration.minutes(), {
                                                          minutes: u.minutes || 1,
                                                      }))(u);
                                    case ie.Short:
                                        return `${Fe(u.minutes)}:${Fe(u.seconds)}`;
                                    case ie.Long:
                                        return `${Fe(u.hours)}:${Fe(u.minutes)}:${Fe(u.seconds)}`;
                                    case ie.Extended:
                                        return `${V(R.strings.common.duration.days(), { days: u.days })} | ${Fe(u.hours)}:${Fe(u.minutes)}:${Fe(u.seconds)}`;
                                }
                            })(
                                (function (u = 0) {
                                    let e = u;
                                    const t = Math.trunc(e / 86400);
                                    e -= 86400 * t;
                                    const n = Math.trunc(e / 3600);
                                    e -= 3600 * n;
                                    const r = Math.trunc(e / 60);
                                    return (e -= 60 * r), { days: t, hours: n, minutes: r, seconds: e };
                                })(E),
                                t,
                            );
                            return r().createElement(
                                'div',
                                { className: U()('Countdown_base_fe', o) },
                                e !== se.None &&
                                    r().createElement('div', {
                                        className: U()('Countdown_icon_8b', s.icon),
                                        style: { backgroundImage: `url('${de(e, l)}')` },
                                    }),
                                r().createElement('div', { className: U()('Countdown_description_8d', s.text) }, A),
                            );
                        },
                    ),
                    Be = {
                        base: 'Timer_base_c6',
                        background: 'Timer_background_49',
                        content: 'Timer_content_ea',
                        base__fullMode: 'Timer_base__fullMode_31',
                        countdown: 'Timer_countdown_1d',
                        description: 'Timer_description_05',
                        separator: 'Timer_separator_bb',
                    },
                    me = (0, i.Pi)(({ fullMode: u }) => {
                        const e = M().model,
                            t = e.progressionState.get(),
                            n = t.statusTimer,
                            a = t.status,
                            o = e.isMultipleSubModes.get(),
                            i =
                                a === s.COMPLETED_RESETTABLE
                                    ? R.strings.fun_random.metaProgressionTooltip.timer.untilRelaunch()
                                    : R.strings.fun_random.metaProgressionTooltip.timer.untilFinish();
                        return r().createElement(
                            'div',
                            { className: U()(Be.base, u && Be.base__fullMode) },
                            r().createElement('div', { className: Be.background }),
                            o && r().createElement('div', { className: U()(Be.separator, Be.separator__top) }),
                            r().createElement(
                                'div',
                                { className: Be.content },
                                r().createElement(J, {
                                    text: i,
                                    classMix: Be.description,
                                    binding: {
                                        time: r().createElement(
                                            'div',
                                            { className: Be.countdown },
                                            r().createElement(_e, { duration: n, style: ie.Description }),
                                        ),
                                    },
                                }),
                            ),
                        );
                    }),
                    Ce = {
                        base: 'ActiveModeContent_base_9f',
                        title: 'ActiveModeContent_title_90',
                        description: 'ActiveModeContent_description_31',
                        info: 'ActiveModeContent_info_ff',
                        base__activeFinal: 'ActiveModeContent_base__activeFinal_42',
                        infoDescription: 'ActiveModeContent_infoDescription_3f',
                        notificationIcon: 'ActiveModeContent_notificationIcon_04',
                        infiniteIcon: 'ActiveModeContent_infiniteIcon_0e',
                    },
                    ge = (0, i.Pi)(() => {
                        var u;
                        const e = M().model,
                            t = e.isMultipleSubModes.get(),
                            n = e.progressionState.get(),
                            a = n.currentStage,
                            o = n.maximumStage,
                            i = n.status,
                            E = ou('metaProgressionTooltip', { assetsPointer: e.assetsPointer }).dynamicTexts,
                            l = [s.ACTIVE_INFINITE_RESETTABLE, s.ACTIVE_INFINITE_FINAL].includes(i);
                        return r().createElement(
                            W,
                            null,
                            r().createElement(
                                'div',
                                { className: U()(Ce.base, Ce[`base__${i}`]) },
                                r().createElement(
                                    'div',
                                    { className: Ce.title },
                                    r().createElement(ru, {
                                        text: E.header.active(),
                                        binding: { done: a, total: l ? '' : o },
                                    }),
                                    l && r().createElement('div', { className: Ce.infiniteIcon }),
                                ),
                                r().createElement($u, null),
                                r().createElement(oe, null),
                                t &&
                                    (null == (u = E.reward) ? void 0 : u.tip) &&
                                    r().createElement(
                                        'div',
                                        { className: Ce.info },
                                        r().createElement('div', { className: Ce.notificationIcon }),
                                        r().createElement(
                                            'div',
                                            { className: Ce.infoDescription },
                                            E.reward.tip && E.reward.tip(),
                                        ),
                                    ),
                                r().createElement(me, { fullMode: !0 }),
                            ),
                        );
                    }),
                    pe = {
                        base: 'CompletedModeContent_base_da',
                        noRewardSubTitle: 'CompletedModeContent_noRewardSubTitle_a9',
                        noRewardTitle: 'CompletedModeContent_noRewardTitle_3f',
                        base__completedFinal: 'CompletedModeContent_base__completedFinal_75',
                    },
                    be = (0, i.Pi)(() => {
                        const u = M().model,
                            e = u.progressionState.get().status,
                            t = u.assetsPointer.get(),
                            n = ou('metaProgressionTooltip', { assetsPointer: t }),
                            a = n.staticTexts,
                            o = n.dynamicTexts;
                        return r().createElement(
                            W,
                            null,
                            r().createElement(
                                'div',
                                { className: U()(pe.base, pe[`base__${e}`]) },
                                r().createElement('div', { className: pe.noRewardSubTitle }, o.subheader()),
                                r().createElement('div', { className: pe.noRewardTitle }, a.header.$dyn(e)),
                                r().createElement(me, null),
                            ),
                        );
                    }),
                    ve = (0, i.Pi)(() => {
                        const u = M().model.progressionState.get().status;
                        switch (u) {
                            case s.ACTIVE_FINAL:
                            case s.ACTIVE_RESETTABLE:
                            case s.ACTIVE_INFINITE_RESETTABLE:
                            case s.ACTIVE_INFINITE_FINAL:
                                return r().createElement(ge, null);
                            case s.COMPLETED_FINAL:
                            case s.COMPLETED_RESETTABLE:
                                return r().createElement(be, null);
                            default:
                                return console.error('Unexpected state:', u), null;
                        }
                    });
                engine.whenReady.then(() => {
                    o().render(
                        r().createElement(N, null, r().createElement(ve, null)),
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
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [e, t, n] = deferred[i], a = !0, o = 0; o < e.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
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
        (__webpack_require__.j = 359),
        (() => {
            var u = { 359: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [a, o, s] = t,
                        i = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var E = s(__webpack_require__);
                    }
                    for (e && e(t); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9457));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
