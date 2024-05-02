(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, i) => {
                i.r(t),
                    i.d(t, { mouse: () => _, off: () => l, on: () => s, onResize: () => n, onScaleUpdated: () => o });
                var r = i(2472),
                    a = i(1176);
                const n = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    d = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function i() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', i))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', i))
                            : (0, a.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, i) => (
                            (t[i] = (function (t) {
                                return (i) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const n = `mouse${t}`,
                                        o = d[t]((e) => i([e, 'outside']));
                                    function s(e) {
                                        i([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, s),
                                        r(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(n, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(i)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
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
            5959: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => n,
                        getSize: () => a,
                        graphicsQuality: () => o,
                    });
                var r = i(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, i) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                i.d(t, { R: () => r });
            },
            2472: (e, t, i) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                i.d(t, { E: () => r });
            },
            3138: (e, t, i) => {
                i.d(t, { O: () => a });
                var r = i(5959);
                const a = { view: i(7641), client: r };
            },
            3722: (e, t, i) => {
                function r(e, t, i = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, i);
                }
                function a(e, t, i) {
                    return `url(${r(e, t, i)})`;
                }
                i.r(t), i.d(t, { getBgUrl: () => a, getTextureUrl: () => r });
            },
            6112: (e, t, i) => {
                i.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, i) => {
                i.d(t, { U: () => a });
                var r = i(2472);
                const a = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => y,
                        events: () => n.U,
                        extraSize: () => L,
                        forceTriggerMouseMove: () => O,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => x,
                        getScale: () => v,
                        getSize: () => u,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => S,
                        isFocused: () => b,
                        pxToRem: () => w,
                        remToPx: () => E,
                        resize: () => h,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => k,
                    });
                var r = i(3722),
                    a = i(6112),
                    n = i(6538),
                    o = i(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function d(e, t, i, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, i, r);
                }
                function _(e, t, i) {
                    return viewEnv.addDataChangedCallback(e, t, i);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function h(e, t, i = 'px') {
                    return 'rem' === i ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function S() {
                    return viewEnv.isEventHandled();
                }
                function O() {
                    viewEnv.forceTriggerMouseMove();
                }
                function x() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    L = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, i) => {
                i.d(t, { qP: () => d });
                const r = ['args'];
                const a = 2,
                    n = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        r,
                                        a = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (i = n[r]), t.indexOf(i) >= 0 || (a[i] = e[i]);
                                    return a;
                                })(t, r);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, o, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const i = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: i, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: i, name: e, bool: t };
                                                      default:
                                                          return { __Type: i, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: i, type: e });
                        var a;
                    },
                    d = {
                        close(e) {
                            l('popover' === e ? a : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, i) => {
                let r, a;
                i.d(t, { n: () => r }),
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
                    })(r || (r = {})),
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
            1358: (e, t, i) => {
                i.d(t, { Z: () => n });
                var r = i(3138);
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
                    addCallback(e, t, i = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = r.O.view.addModelObserver(e, i, a);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = t),
                                  i > 0 && (this._views[i] ? this._views[i].push(n) : (this._views[i] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
                        );
                    }
                    removeCallback(e, t = 0) {
                        let i = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((i = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            i || console.error("Can't remove callback by id:", e),
                            i
                        );
                    }
                    _emmitDataChanged(e, t, i) {
                        i.forEach((i) => {
                            const r = this._callbacks[i];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const n = a;
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
            9916: (e, t, i) => {
                i.d(t, { ry: () => w, Eu: () => E });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: i }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    i();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const i = e,
                            r = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== i || t !== r)),
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
                r.__instance = void 0;
                const a = r;
                var n = i(1358);
                var o = i(8613);
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var u = i(5521),
                    h = i(3138);
                const g = ['args'];
                function m(e, t, i, r, a, n, o) {
                    try {
                        var s = e[n](o),
                            l = s.value;
                    } catch (e) {
                        return void i(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, a);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    w = (function () {
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
                                        i = arguments;
                                    return new Promise(function (r, a) {
                                        var n = e.apply(t, i);
                                        function o(e) {
                                            m(n, r, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            m(n, r, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    f = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        r,
                                        a = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (i = n[r]), t.indexOf(i) >= 0 || (a[i] = e[i]);
                                    return a;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, n, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
                                                  const i = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          i.number = t;
                                                          break;
                                                      case 'boolean':
                                                          i.bool = t;
                                                          break;
                                                      default:
                                                          i.string = t.toString();
                                                  }
                                                  return i;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: i, type: e });
                        var r;
                    },
                    b = () => f(s.CLOSE),
                    p = (e, t) => {
                        e.keyCode === u.n.ESCAPE && t();
                    };
                var S = i(7572);
                const O = a.instance,
                    x = {
                        DataTracker: n.Z,
                        ViewModel: S.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: d,
                        TimeFormatType: _,
                        DateFormatType: c,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => f(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => f(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, i = 0) => {
                            f(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: i, args: t });
                        },
                        sendShowPopOverEvent: (e, t, i, r, a = R.invalid('resId'), n) => {
                            const o = h.O.view.getViewGlobalPosition(),
                                l = i.getBoundingClientRect(),
                                d = l.x,
                                _ = l.y,
                                c = l.width,
                                u = l.height,
                                g = {
                                    x: h.O.view.pxToRem(d) + o.x,
                                    y: h.O.view.pxToRem(_) + o.y,
                                    width: h.O.view.pxToRem(c),
                                    height: h.O.view.pxToRem(u),
                                };
                            f(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: v(g),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => p(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, b);
                        },
                        handleViewEvent: f,
                        onBindingsReady: w,
                        onLayoutReady: E,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const i = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const a = Object.prototype.toString.call(t[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[r];
                                        i[r] = [];
                                        for (let t = 0; t < a.length; t++) i[r].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (i[r] = e(t[r]))
                                            : (i[r] = t[r]);
                                }
                            return i;
                        },
                        ClickOutsideManager: O,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = x;
            },
            8613: (e, t, i) => {
                i.d(t, { Z5: () => r, cy: () => a });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, i) => userLocale.getTimeFormat(e, t, void 0 === i || i),
                        getTimeString: (e, t, i) => userLocale.getTimeString(e, t, void 0 === i || i),
                    };
            },
            4894: (e, t, i) => {
                var r = i(6179),
                    a = i.n(r),
                    n = i(6483),
                    o = i.n(n);
                function s(e) {
                    engine.call('PlaySound', e);
                }
                var l = i(9916),
                    d = i(3138),
                    _ = i(5521);
                const c = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function u(e = _.n.NONE, t = c, i = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== _.n.NONE)
                            return (
                                window.addEventListener('keydown', r, i),
                                () => {
                                    window.removeEventListener('keydown', r, i);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && d.O.view.isEventHandled()) return;
                                d.O.view.setEventHandled(), t(r), i && r.stopPropagation();
                            }
                        }
                    }, [t, e, i, a]);
                }
                const h = (e, t, i) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && i.extraLarge) ||
                          (t.largeHeight && i.large) ||
                          (t.mediumHeight && i.medium) ||
                          (t.smallHeight && i.small) ||
                          (t.extraSmallHeight && i.extraSmall)
                            ? e
                            : null
                        : e;
                var g;
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
                })(g || (g = {}));
                const m = d.O.client.getSize('rem'),
                    v = m.width,
                    w = m.height,
                    E = Object.assign(
                        { width: v, height: w },
                        (function (e, t, i) {
                            const r = (function (e, t) {
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
                                })(e, i),
                                a = (function (e, t) {
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
                                })(t, i),
                                n = Math.min(r, a);
                            return {
                                extraLarge: n === i.extraLarge.weight,
                                large: n === i.large.weight,
                                medium: n === i.medium.weight,
                                small: n === i.small.weight,
                                extraSmall: n === i.extraSmall.weight,
                                extraLargeWidth: r === i.extraLarge.weight,
                                largeWidth: r === i.large.weight,
                                mediumWidth: r === i.medium.weight,
                                smallWidth: r === i.small.weight,
                                extraSmallWidth: r === i.extraSmall.weight,
                                extraLargeHeight: a === i.extraLarge.weight,
                                largeHeight: a === i.large.weight,
                                mediumHeight: a === i.medium.weight,
                                smallHeight: a === i.small.weight,
                                extraSmallHeight: a === i.extraSmall.weight,
                            };
                        })(v, w, {
                            extraLarge: { weight: 4, width: 2560, height: 1440 },
                            large: { weight: 3, width: 1920, height: 1080 },
                            medium: { weight: 2, width: 1600, height: 900 },
                            small: { weight: 1, width: 1366, height: 768 },
                            extraSmall: { weight: 0, width: 1024, height: 768 },
                        }),
                    ),
                    f = (0, r.createContext)(E),
                    b = ['children'];
                const p = (e) => {
                    let t = e.children,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var i,
                                r,
                                a = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (i = n[r]), t.indexOf(i) >= 0 || (a[i] = e[i]);
                            return a;
                        })(e, b);
                    const a = (0, r.useContext)(f),
                        n = a.extraLarge,
                        o = a.large,
                        s = a.medium,
                        l = a.small,
                        d = a.extraSmall,
                        _ = a.extraLargeWidth,
                        c = a.largeWidth,
                        u = a.mediumWidth,
                        g = a.smallWidth,
                        m = a.extraSmallWidth,
                        v = a.extraLargeHeight,
                        w = a.largeHeight,
                        E = a.mediumHeight,
                        p = a.smallHeight,
                        S = a.extraSmallHeight,
                        O = { extraLarge: v, large: w, medium: E, small: p, extraSmall: S };
                    if (i.extraLarge || i.large || i.medium || i.small || i.extraSmall) {
                        if (i.extraLarge && n) return t;
                        if (i.large && o) return t;
                        if (i.medium && s) return t;
                        if (i.small && l) return t;
                        if (i.extraSmall && d) return t;
                    } else {
                        if (i.extraLargeWidth && _) return h(t, i, O);
                        if (i.largeWidth && c) return h(t, i, O);
                        if (i.mediumWidth && u) return h(t, i, O);
                        if (i.smallWidth && g) return h(t, i, O);
                        if (i.extraSmallWidth && m) return h(t, i, O);
                        if (
                            !(i.extraLargeWidth || i.largeWidth || i.mediumWidth || i.smallWidth || i.extraSmallWidth)
                        ) {
                            if (i.extraLargeHeight && v) return t;
                            if (i.largeHeight && w) return t;
                            if (i.mediumHeight && E) return t;
                            if (i.smallHeight && p) return t;
                            if (i.extraSmallHeight && S) return t;
                        }
                    }
                    return null;
                };
                p.defaultProps = {
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
                (0, r.memo)(p);
                const S = {
                    base: 'Slider_base_df',
                    base__carousel: 'Slider_base__carousel_de',
                    trackWrapper: 'Slider_trackWrapper_79',
                    track: 'Slider_track_4c',
                    base__withoutAnimation: 'Slider_base__withoutAnimation_14',
                    base__withoutPointer: 'Slider_base__withoutPointer_01',
                    slide: 'Slider_slide_8b',
                    slide__active: 'Slider_slide__active_97',
                    slide__carousel: 'Slider_slide__carousel_0c',
                    slide__beforeActive: 'Slider_slide__beforeActive_35',
                    slide__afterActive: 'Slider_slide__afterActive_1f',
                    slide__beforeActiveLarge: 'Slider_slide__beforeActiveLarge_b1',
                    slide__afterActiveLarge: 'Slider_slide__afterActiveLarge_cb',
                    slide__leftEdge: 'Slider_slide__leftEdge_d8',
                    slide__leftEdgeLarge: 'Slider_slide__leftEdgeLarge_9f',
                    slide__rightEdge: 'Slider_slide__rightEdge_43',
                    slide__rightEdgeLarge: 'Slider_slide__rightEdgeLarge_71',
                    prev: 'Slider_prev_11',
                    next: 'Slider_next_ae',
                    prev__disabled: 'Slider_prev__disabled_5a',
                    next__disabled: 'Slider_next__disabled_ac',
                    counter: 'Slider_counter_55',
                    base__large: 'Slider_base__large_75',
                    counterDivider: 'Slider_counterDivider_0f',
                    fadeOut: 'Slider_fadeOut_15',
                    fadeIn: 'Slider_fadeIn_2e',
                    fadeInWithScale: 'Slider_fadeInWithScale_67',
                    slideUp: 'Slider_slideUp_a7',
                    scale: 'Slider_scale_ce',
                    rotate: 'Slider_rotate_9f',
                };
                function O(e, t, i, r, a, n, o) {
                    try {
                        var s = e[n](o),
                            l = s.value;
                    } catch (e) {
                        return void i(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, a);
                }
                function x(e) {
                    return function () {
                        var t = this,
                            i = arguments;
                        return new Promise(function (r, a) {
                            var n = e.apply(t, i);
                            function o(e) {
                                O(n, r, a, o, s, 'next', e);
                            }
                            function s(e) {
                                O(n, r, a, o, s, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                const y = (0, r.createContext)({});
                (0, r.memo)(
                    ({
                        children: e,
                        arrowsTopPosition: t,
                        carouselMode: i,
                        disabled: n,
                        withCounter: d,
                        onPrevSlide: c,
                        onNextSlide: h,
                    }) => {
                        const g = (0, r.useRef)(null),
                            m = (0, r.useContext)(f),
                            v = m.medium || m.large || m.extraLarge,
                            w = (0, r.useState)(e),
                            E = w[0],
                            b = w[1],
                            p = (0, r.useState)(0),
                            O = p[0],
                            L = p[1],
                            k = (0, r.useState)(0),
                            T = k[0],
                            P = k[1],
                            R = (0, r.useState)(i ? 3 : 1),
                            M = R[0],
                            C = R[1],
                            W = (0, r.useState)(!1),
                            A = W[0],
                            H = W[1],
                            N = (0, r.useState)(!1),
                            D = N[0],
                            F = N[1],
                            U = E.length,
                            I = 1 === M && !i,
                            V = M === U && !i,
                            q = (0, r.useMemo)(() => ({ isAnimationDisabled: A }), [A]),
                            K = (function () {
                                var e = x(function* () {
                                    if (g && g.current) {
                                        H(!0), yield (0, l.Eu)();
                                        const e = viewEnv.getScale();
                                        L(g.current.offsetWidth / e),
                                            P(g.current.querySelector(`.${S.slide__active}`).offsetWidth / e),
                                            setTimeout(() => {
                                                H(!1);
                                            }, 100);
                                    }
                                });
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })();
                        (0, r.useEffect)(() => {
                            const t = [];
                            E.map((i) => {
                                const r = e.find((e) => e.key === i.key);
                                r && t.push(r);
                            }),
                                b(t);
                        }, [e]),
                            (0, r.useEffect)(() => {
                                if (i) {
                                    const e = E.concat();
                                    e.unshift(...e.splice(-2, E.length)), b(e);
                                }
                            }, []),
                            (0, r.useEffect)(
                                () => (
                                    K(),
                                    window.addEventListener('resize', K),
                                    () => {
                                        window.removeEventListener('resize', K);
                                    }
                                ),
                                [],
                            );
                        const z = (0, r.useCallback)(
                                x(function* () {
                                    I ||
                                        D ||
                                        n ||
                                        (i && F(!0),
                                        yield (0, l.Eu)(),
                                        c && c(),
                                        C(M - 1),
                                        i &&
                                            setTimeout(
                                                x(function* () {
                                                    H(!0);
                                                    const e = E.concat();
                                                    e.unshift(e.pop()), b(e), C(M), yield (0, l.Eu)(), H(!1), F(!1);
                                                }),
                                                600,
                                            ),
                                        s('play'),
                                        s('bp_glide_01'));
                                }),
                                [M, C, I, i, c, E, D, n],
                            ),
                            B = (0, r.useCallback)(
                                x(function* () {
                                    V ||
                                        D ||
                                        n ||
                                        (i && F(!0),
                                        yield (0, l.Eu)(),
                                        h && h(),
                                        C(M + 1),
                                        i &&
                                            setTimeout(
                                                x(function* () {
                                                    H(!0);
                                                    const e = E.concat();
                                                    e.push(e.shift()), b(e), C(M), yield (0, l.Eu)(), H(!1), F(!1);
                                                }),
                                                600,
                                            ),
                                        s('play'),
                                        s('bp_glide_01'));
                                }),
                                [M, C, V, i, h, E, D, n],
                            ),
                            j = () => s('highlight');
                        u(_.n.ARROW_LEFT, z), u(_.n.ARROW_RIGHT, B);
                        const G = (0, r.useMemo)(() => (i ? { width: 'auto' } : { width: `${O}rem` }), [O, i]),
                            Y = (0, r.useMemo)(
                                () =>
                                    i
                                        ? { transform: `translateX(${-T * M + O / 2 + T / 2}rem)` }
                                        : { transform: `translateX(-${O * (M - 1)}rem)` },
                                [O, T, M, i],
                            ),
                            Z = (0, r.useMemo)(() => (t ? { top: t } : {}), [t]),
                            X = o()(
                                S.base,
                                v && S.base__large,
                                i && S.base__carousel,
                                i && v && S.base__carouselLarge,
                                A && S.base__withoutAnimation,
                                D && S.base__withoutPointer,
                            ),
                            $ = o()(S.prev, I && S.prev__disabled),
                            Q = o()(S.next, V && S.next__disabled);
                        return a().createElement(
                            'div',
                            { className: X },
                            a().createElement('div', { className: $, onClick: z, onMouseEnter: j, style: Z }),
                            a().createElement('div', { className: Q, onClick: B, onMouseEnter: j, style: Z }),
                            d &&
                                a().createElement(
                                    'div',
                                    { className: S.counter },
                                    M,
                                    a().createElement('div', { className: S.counterDivider }, '/'),
                                    U,
                                ),
                            a().createElement(
                                'div',
                                { className: S.trackWrapper, ref: g },
                                a().createElement(
                                    'div',
                                    { className: S.track, style: Y },
                                    E.map((e, t) => {
                                        const r = t + 2 === M,
                                            n = t === M;
                                        let s;
                                        n ? (s = B) : r && (s = z);
                                        let l = o()(S.slide, v && S.slide__large, t + 1 === M && S.slide__active);
                                        return (
                                            i &&
                                                (l = o()(
                                                    S.slide,
                                                    S.slide__carousel,
                                                    v && S.slide__large,
                                                    t + 1 === M && S.slide__active,
                                                    r && S.slide__beforeActive,
                                                    r && v && S.slide__beforeActiveLarge,
                                                    n && S.slide__afterActive,
                                                    n && v && S.slide__afterActiveLarge,
                                                    t + 2 < M && S.slide__leftEdge,
                                                    t + 2 < M && v && S.slide__leftEdgeLarge,
                                                    t > M && S.slide__rightEdge,
                                                    t > M && v && S.slide__rightEdgeLarge,
                                                )),
                                            a().createElement(
                                                'div',
                                                { className: l, key: `slide-${t}`, style: G, onClick: s },
                                                a().createElement(y.Provider, { value: q }, e),
                                            )
                                        );
                                    }),
                                ),
                            ),
                        );
                    },
                );
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var i = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](i, i.exports, __webpack_require__), i.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, i, r) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, i, r] = deferred[l], n = !0, o = 0; o < t.length; o++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((n = !1), r < a && (a = r));
                    if (n) {
                        deferred.splice(l--, 1);
                        var s = i();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, i, r];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var i in t)
                __webpack_require__.o(t, i) &&
                    !__webpack_require__.o(e, i) &&
                    Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
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
        (__webpack_require__.j = 7146),
        (() => {
            var e = { 7146: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, i) => {
                    var r,
                        a,
                        [n, o, s] = i,
                        l = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var d = s(__webpack_require__);
                    }
                    for (t && t(i); l < n.length; l++)
                        (a = n[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(d);
                },
                i = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(4894));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
