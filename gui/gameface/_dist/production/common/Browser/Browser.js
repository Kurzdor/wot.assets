(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                n.r(t),
                    n.d(t, { mouse: () => u, off: () => c, on: () => s, onResize: () => o, onScaleUpdated: () => i });
                var r = n(472),
                    a = n(176);
                const o = (0, r.E)('clientResized'),
                    i = (0, r.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    c = (e, t) => engine.off(e, t),
                    l = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, a.R)(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const o = `mouse${t}`,
                                        i = l[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, s),
                                        r(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(o, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
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
            959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => i,
                    });
                var r = n(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, n) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            472: (e, t, n) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => r });
            },
            138: (e, t, n) => {
                n.d(t, { O: () => a });
                var r = n(959);
                const a = { view: n(641), client: r };
            },
            722: (e, t, n) => {
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function a(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => a, getTextureUrl: () => r });
            },
            112: (e, t, n) => {
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, n) => {
                n.d(t, { U: () => a });
                var r = n(472);
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
            641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => C,
                        events: () => o.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => O,
                        freezeTextureBeforeResize: () => w,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => L,
                        getScale: () => E,
                        getSize: () => _,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => y,
                        isFocused: () => h,
                        pxToRem: () => g,
                        remToPx: () => f,
                        resize: () => v,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => M,
                    });
                var r = n(722),
                    a = n(112),
                    o = n(538),
                    i = n(566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function u(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function w() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function y() {
                    return viewEnv.isEventHandled();
                }
                function O() {
                    viewEnv.forceTriggerMouseMove();
                }
                function L() {
                    return viewEnv.getShowingStatus();
                }
                const C = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    k = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    M = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, n) => {
                n.d(t, { qP: () => l });
                const r = ['args'];
                const a = 2,
                    o = 16,
                    i = 32,
                    s = 64,
                    c = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        a = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                })(t, r);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((a = o),
                                              Object.entries(a).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            c('popover' === e ? a : i);
                        },
                        minimize() {
                            c(s);
                        },
                        move(e) {
                            c(o, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            521: (e, t, n) => {
                let r, a;
                n.d(t, { n: () => r }),
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
            358: (e, t, n) => {
                n.d(t, { Z: () => o });
                var r = n(138);
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
                    addCallback(e, t, n = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = r.O.view.addModelObserver(e, n, a);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(o) : (this._views[n] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const r = this._callbacks[n];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const o = a;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
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
            364: (e, t, n) => {
                n.d(t, { ry: () => f, Sy: () => h });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    n();
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
                        const n = e,
                            r = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== r)),
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
                var o = n(358);
                const i = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                let c;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(c || (c = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var v = n(521),
                    m = n(138);
                const w = ['args'];
                function E(e, t, n, r, a, o, i) {
                    try {
                        var s = e[o](i),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(r, a);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    f = (function () {
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
                                        n = arguments;
                                    return new Promise(function (r, a) {
                                        var o = e.apply(t, n);
                                        function i(e) {
                                            E(o, r, a, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            E(o, r, a, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        a = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                })(t, w);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    h = () => b(c.CLOSE),
                    p = (e, t) => {
                        e.keyCode === v.n.ESCAPE && t();
                    };
                var y = n(572);
                const O = a.instance,
                    L = {
                        DataTracker: o.Z,
                        ViewModel: y.Z,
                        ViewEventType: c,
                        NumberFormatType: l,
                        RealFormatType: u,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => b(c.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => b(c.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            b(c.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, a = R.invalid('resId'), o) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                l = s.x,
                                u = s.y,
                                d = s.width,
                                _ = s.height,
                                v = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(u) + i.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            b(c.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: g(v),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => p(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, h);
                        },
                        handleViewEvent: b,
                        onBindingsReady: f,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(c.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(c.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(c.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const a = Object.prototype.toString.call(t[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < a.length; t++) n[r].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: O,
                        SystemLocale: i,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = L;
            },
            73: (e, t, n) => {
                var r = n(179),
                    a = n.n(r),
                    o = n(493),
                    i = n.n(o);
                let s, c, l;
                !(function (e) {
                    (e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded');
                })(s || (s = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed');
                    })(c || (c = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed');
                    })(l || (l = {}));
                var u = n(138);
                let d;
                !(function (e) {
                    (e.Initialization = 'initialization'),
                        (e.BrowserLoading = 'browserLoading'),
                        (e.PageLoading = 'pageLoading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.PageFailed = 'pageFailed'),
                        (e.TextureFailed = 'textureFailed'),
                        (e.Loaded = 'loaded');
                })(d || (d = {}));
                s.Initialization, c.Initialization;
                const _ = (e) => e > 0,
                    v = (e) => !_(e);
                function m(e, t) {
                    var n;
                    if (v(e)) return void console.warn('Invalid id, should be greater than zero', e);
                    const r = 0 === t.scale ? 1e-5 : null != (n = t.scale) ? n : 1;
                    return u.O.view.getBrowserTexturePath(e, Math.max(t.width, 1), Math.max(t.height, 1), r);
                }
                function w(e, t = {}) {
                    return 'measured' === e.type ? Object.assign({}, e.size, t) : t;
                }
                function E() {}
                function g() {
                    return !1;
                }
                console.log;
                var f = n(174);
                function b(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return h(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function h(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const p = (e) => (0 === e ? window : window.subViews.get(e));
                var y = n(946);
                const O = ((e, t) => {
                        const n = (0, r.createContext)({});
                        return [
                            function ({ mode: o = 'real', options: i, children: s, mocks: c }) {
                                const l = (0, r.useRef)([]),
                                    d = (n, r, a) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = p,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function o(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = a.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const a = n(t),
                                                        o = r.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? o
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (n, o) => {
                                                        const s = 'string' == typeof o ? `${r}.${o}` : r,
                                                            c = u.O.view.addModelObserver(s, t, !0);
                                                        return a.set(c, n), e && n(i(o)), c;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const n = i(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = b(a.keys()); !(e = n()).done; ) o(e.value, t);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(r),
                                            s =
                                                'real' === n
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (o = null == a ? void 0 : a.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            d = (e) => l.current.push(e),
                                            _ = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            a = f.LO.box(r, { equals: g });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, f.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            a = f.LO.box(r, { equals: g });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, f.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = c(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = f.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, f.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                o = Object.entries(a),
                                                                i = o.reduce(
                                                                    (e, [t, n]) => ((e[n] = f.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, f.aD)((e) => {
                                                                            o.forEach(([t, n]) => {
                                                                                i[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            v = { mode: n, model: _, externalModel: s, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === n && a ? a.controls(v) : t(v),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    _ = (0, r.useRef)(!1),
                                    v = (0, r.useState)(o),
                                    m = v[0],
                                    w = v[1],
                                    E = (0, r.useState)(() => d(o, i, c)),
                                    h = E[0],
                                    y = E[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        _.current ? y(d(m, i, c)) : (_.current = !0);
                                    }, [c, m, i]),
                                    (0, r.useEffect)(() => {
                                        w(o);
                                    }, [o]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [h],
                                    ),
                                    a().createElement(n.Provider, { value: h }, s)
                                );
                            },
                            () => (0, r.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = e.object(),
                                n = (0, y.Om)(() =>
                                    (function ({ pageState: e, browserState: t, texState: n }) {
                                        return t === s.Initialization
                                            ? d.Initialization
                                            : t === s.ForceLoading
                                              ? d.ForceLoading
                                              : t === s.Loading
                                                ? d.BrowserLoading
                                                : e === c.Loaded && t === s.Loaded && n === l.Loaded
                                                  ? d.Loaded
                                                  : n === l.Failed
                                                    ? d.TextureFailed
                                                    : e === c.Failed
                                                      ? d.PageFailed
                                                      : d.PageLoading;
                                    })(t.get()),
                                );
                            return { root: t, getState: n };
                        },
                        ({ externalModel: e }) => ({
                            blur: e.createCallbackNoArgs('unfocus'),
                            focus: e.createCallbackNoArgs('focus'),
                            createWebView: e.createCallbackNoArgs('createWebView'),
                        }),
                    ),
                    L = O[0],
                    C = O[1],
                    k = (e) => {
                        (0, r.useEffect)(e, []);
                    };
                var M = n(403),
                    T = n(483),
                    S = n.n(T);
                function P() {
                    const e = (0, r.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, r.useEffect)(() => t, []),
                        (0, r.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
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
                }
                const x = 'BrowserView_base_6b',
                    N = 'BrowserView_texture_17',
                    A = 'Spinner_base_87',
                    F = 'Spinner_caption_cf',
                    B = 'Spinner_gear_c4',
                    D = 'Spinner_logo_bf',
                    I = ({ message: e, className: t, classNames: n }) =>
                        a().createElement(
                            'div',
                            { className: S()(A, t) },
                            e && a().createElement('div', { className: S()(F, null == n ? void 0 : n.caption) }, e),
                            a().createElement('div', { className: S()(B, null == n ? void 0 : n.gear) }),
                            a().createElement('div', { className: S()(D, null == n ? void 0 : n.logo) }),
                        );
                function z(e) {
                    engine.call('PlaySound', e);
                }
                const W = {
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
                    base__firstHover: 'CButton_base__firstHover_d5',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
                let U, j;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(U || (U = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(j || (j = {}));
                const H = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: o,
                    disabled: i,
                    mixClass: s,
                    soundHover: c,
                    soundClick: l,
                    onMouseEnter: u,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: v,
                    onMouseLeave: m,
                    onClick: w,
                }) => {
                    const E = (0, r.useRef)(null),
                        g = (0, r.useState)(n),
                        f = g[0],
                        b = g[1],
                        h = (0, r.useState)(!1),
                        p = h[0],
                        y = h[1],
                        O = (0, r.useState)(!1),
                        L = O[0],
                        C = O[1],
                        k = (0, r.useCallback)(() => {
                            i || (E.current && (E.current.focus(), b(!0)));
                        }, [i]),
                        M = (0, r.useCallback)(
                            (e) => {
                                f && null !== E.current && !E.current.contains(e.target) && b(!1);
                            },
                            [f],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                i || (w && w(e));
                            },
                            [i, w],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                i || (null !== c && z(c), u && u(e), C(!0));
                            },
                            [i, c, u],
                        ),
                        x = (0, r.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        N = (0, r.useCallback)(
                            (e) => {
                                i || (v && v(e), y(!1));
                            },
                            [i, v],
                        ),
                        A = (0, r.useCallback)(
                            (e) => {
                                i || (null !== l && z(l), _ && _(e), n && k(), y(!0));
                            },
                            [i, l, _, k, n],
                        ),
                        F = (0, r.useCallback)(
                            (e) => {
                                i || (m && m(e), y(!1));
                            },
                            [i, m],
                        ),
                        B = S()(
                            W.base,
                            W[`base__${o}`],
                            {
                                [W.base__disabled]: i,
                                [W[`base__${t}`]]: t,
                                [W.base__focus]: f,
                                [W.base__highlightActive]: p,
                                [W.base__firstHover]: L,
                            },
                            s,
                        ),
                        D = S()(W.state, W.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                        (0, r.useEffect)(() => {
                            b(n);
                        }, [n]),
                        a().createElement(
                            'div',
                            {
                                ref: E,
                                className: B,
                                onMouseEnter: P,
                                onMouseMove: x,
                                onMouseUp: N,
                                onMouseDown: A,
                                onMouseLeave: F,
                                onClick: T,
                            },
                            o !== U.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: W.back }),
                                    a().createElement('span', { className: W.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: D },
                                a().createElement('span', { className: W.stateDisabled }),
                                a().createElement('span', { className: W.stateHighlightHover }),
                                a().createElement('span', { className: W.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: W.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                H.defaultProps = { type: U.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const V = (0, r.memo)(H),
                    q = 'Error_base_46',
                    G = 'Error_alertIcon_04',
                    K = 'Error_errorCaption_f2',
                    Y = 'Error_button_cd',
                    Z = ({ errorBtnLabel: e, errorBtnClickHandler: t, errorMessage: n }) =>
                        a().createElement(
                            'div',
                            { className: q },
                            a().createElement('div', { className: G }),
                            a().createElement('div', { className: K }, n),
                            a().createElement(V, { size: j.medium, mixClass: Y, onClick: t }, e),
                        );
                Z.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const $ = 'Waiting_base_c5',
                    X = 'Waiting_blackOverlay_55',
                    Q = ({
                        message: e,
                        isError: t,
                        errorMessage: n,
                        errorBtnLabel: o,
                        errorBtnClickHandler: i,
                        overlayAlpha: s,
                    }) => {
                        const c = a().createRef();
                        return (
                            (0, r.useEffect)(() => {
                                const e = c.current;
                                e && s && (e.style.opacity = s);
                            }, [c, s]),
                            a().createElement(
                                'div',
                                { className: $ },
                                a().createElement('div', { className: X, ref: c }),
                                t
                                    ? a().createElement(Z, {
                                          errorBtnLabel: o,
                                          errorMessage: n,
                                          errorBtnClickHandler: i,
                                      })
                                    : a().createElement(I, { message: e }),
                            )
                        );
                    };
                Q.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                const J = 'DisplayBrowserState_base_e7',
                    ee = 'DisplayBrowserState_error_4e',
                    te = 'DisplayBrowserState_alertIcon_c4',
                    ne = 'DisplayBrowserState_errorCaption_dd',
                    re = ({ waitingText: e, className: t }) =>
                        a().createElement(
                            'div',
                            { className: S()(J, t) },
                            a().createElement(Q, { errorBtnClickHandler: E, message: e }),
                        ),
                    ae = () =>
                        a().createElement(
                            'div',
                            { className: ee },
                            a().createElement('div', { className: te }),
                            a().createElement(
                                'div',
                                { className: ne },
                                R.strings.dialogs.messenger.userInfoNotAvailable.title(),
                            ),
                        ),
                    oe = () =>
                        a().createElement(
                            'div',
                            { className: ee },
                            a().createElement('div', { className: te }),
                            a().createElement(
                                'div',
                                { className: ne },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.title(),
                            ),
                            a().createElement(
                                'div',
                                { className: ne },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.message(),
                            ),
                        );
                function ie(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (function (e) {
                            return e !== d.BrowserLoading && e !== d.PageLoading;
                        })(e) && (t.current = e),
                        t.current
                    );
                }
                function se(e) {
                    const t = (function (e) {
                            const t = (0, r.useRef)(!1);
                            return (
                                (e !== d.Loaded && e !== d.PageFailed && e !== d.TextureFailed) || (t.current = !0),
                                t.current
                            );
                        })(e),
                        n = ie(e);
                    return t ? n : e;
                }
                const ce = ({ viewState: e, waitingText: t, waitingClassName: n }) => {
                        switch (se(e)) {
                            case d.BrowserLoading:
                            case d.PageLoading:
                            case d.ForceLoading:
                                return a().createElement(re, { waitingText: t, className: n });
                            case d.PageFailed:
                                return a().createElement(ae, null);
                            case d.TextureFailed:
                                return a().createElement(oe, null);
                            default:
                                return null;
                        }
                    },
                    le = (e) =>
                        'width' in e && 'height' in e && 'number' == typeof e.width && 'number' == typeof e.height;
                function ue(e) {
                    return null != e ? e : viewEnv.getScale();
                }
                function de(e) {
                    const t = (0, r.useState)(ue(e.scale)),
                        n = t[0],
                        a = t[1],
                        o = (function (e) {
                            return le(e) ? m(e.id, e) : void 0;
                        })(Object.assign({}, e, { scale: n })),
                        i = (0, r.useState)(o),
                        s = i[0],
                        c = i[1],
                        l = (0, r.useRef)(!1),
                        u = 'width' in e ? e.width : 0,
                        d = 'height' in e ? e.height : 0,
                        _ = P();
                    return (
                        (0, r.useEffect)(() => {
                            const t = () => {
                                a(ue(e.scale));
                            };
                            return (
                                window.addEventListener('resize', t),
                                () => {
                                    window.removeEventListener('resize', t);
                                }
                            );
                        }, [e.scale]),
                        (0, r.useEffect)(() => {
                            if (void 0 === o || 0 === u || 0 === d || o === s) return;
                            const e = () => {
                                c(o);
                            };
                            if (!1 === l.current) return (l.current = !0), void e();
                            const t = new Image(),
                                n = () => {
                                    _.run(e);
                                };
                            return (
                                t.addEventListener('load', n),
                                (t.src = o),
                                () => {
                                    t.removeEventListener('load', n), (t.src = '');
                                }
                            );
                        }, [o, s]),
                        s
                    );
                }
                const _e = a().memo(function (e) {
                        const t = e.id,
                            n = e.className,
                            r = e.classNameTexture,
                            o = e.waitingClassName,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            c = e.onMouseWheel,
                            l = e.onMouseMove,
                            u = e.onMouseDown,
                            d = e.onMouseUp,
                            _ = e.renderStateDisplay,
                            v = e.viewState,
                            m = e.statusCode,
                            w = e.waitingText,
                            E = e.scrollSpeed,
                            g = void 0 === E ? 20 : E,
                            f = de(e);
                        return a().createElement(
                            'div',
                            { className: S()(x, n), onMouseEnter: i, onMouseLeave: s },
                            f &&
                                a().createElement('div', {
                                    onWheel: c,
                                    onMouseMove: l,
                                    onMouseDown: u,
                                    onMouseUp: d,
                                    className: S()(x, N, r),
                                    'data-browser-id': t,
                                    'data-browser-scroll-speed': g,
                                    style: { backgroundImage: `url(${f})` },
                                }),
                            'function' == typeof _
                                ? _({ viewState: v, statusCode: m, waitingText: w, waitingClassName: o })
                                : a().createElement(ce, {
                                      viewState: v,
                                      statusCode: m,
                                      waitingText: w,
                                      waitingClassName: o,
                                  }),
                        );
                    }),
                    ve = 'none-ref',
                    me = 'measured',
                    we = { type: 'measuring' };
                function Ee() {
                    const e = (0, r.useRef)(null),
                        t = (0, r.useState)(we),
                        n = t[0],
                        a = t[1],
                        o = ((e, t = []) => {
                            const n = (0, r.useRef)(),
                                a = (0, r.useCallback)((...t) => {
                                    n.current && n.current(), (n.current = e(...t));
                                }, t);
                            return (
                                (0, r.useEffect)(
                                    () => () => {
                                        n.current && n.current();
                                    },
                                    [a],
                                ),
                                a
                            );
                        })(
                            () => (
                                a(we),
                                ((e) => {
                                    let t,
                                        n = null;
                                    return (
                                        (n = requestAnimationFrame(() => {
                                            n = requestAnimationFrame(() => {
                                                (n = null), (t = e());
                                            });
                                        })),
                                        () => {
                                            'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                                        }
                                    );
                                })(() => {
                                    e.current
                                        ? a({
                                              type: me,
                                              size: { width: e.current.offsetWidth, height: e.current.offsetHeight },
                                          })
                                        : a({ type: ve });
                                })
                            ),
                            [],
                        );
                    return (
                        (0, r.useEffect)(
                            () => (
                                window.addEventListener('resize', o), o(), () => window.removeEventListener('resize', o)
                            ),
                            [o],
                        ),
                        [e, n, o]
                    );
                }
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const fe = a().memo(function (e) {
                    const t = Ee(),
                        n = t[0],
                        r = t[1];
                    return a().createElement('div', { ref: n, className: x }, a().createElement(_e, ge({}, e, w(r))));
                });
                function be() {
                    return (
                        (be =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        be.apply(this, arguments)
                    );
                }
                const he = (0, M.Pi)(function (e) {
                        const t = e.defaultWaitingText,
                            n = e.className,
                            o = e.waitingClassName,
                            i = e.isLazy,
                            s = void 0 === i || i,
                            c = e.displayContentWhenLoading,
                            l = void 0 === c || c,
                            u = e.renderStateDisplay,
                            m = e.onMouseEnter,
                            w = e.onMouseLeave,
                            E = e.onMouseMove,
                            g = e.onMouseWheel,
                            f = e.onMouseDown,
                            b = e.onMouseUp,
                            h = C(),
                            p = h.model,
                            y = h.controls,
                            O = p.root.get(),
                            L = O.id,
                            M = O.httpStatusCode,
                            T = O.waitingMessage,
                            S = p.getState(),
                            P = l || S === d.Loaded;
                        k(() => {
                            s && v(L) && y.createWebView();
                        }),
                            (0, r.useEffect)(() => {
                                _(L) && y.focus();
                            }, [L, y]),
                            k(
                                () => (
                                    window.addEventListener('mouseleave', y.blur),
                                    window.addEventListener('mouseover', y.focus),
                                    () => {
                                        window.removeEventListener('mouseleave', y.blur),
                                            window.removeEventListener('mouseover', y.focus);
                                    }
                                ),
                            );
                        const R = (0, r.useMemo)(() => {
                            const e = {
                                onMouseEnter: m,
                                onMouseLeave: w,
                                onMouseMove: E,
                                onMouseWheel: g,
                                onMouseDown: f,
                                onMouseUp: b,
                            };
                            return P
                                ? Object.assign({}, e, {
                                      onMouseEnter: (e) => {
                                          y.focus(), null == m || m(e);
                                      },
                                      onMouseLeave: (e) => {
                                          y.blur(), null == w || w(e);
                                      },
                                  })
                                : e;
                        }, [P, y, f, m, w, E, b, g]);
                        if (v(L)) return null;
                        const x = le(e)
                                ? (function (e, t) {
                                      const n = {};
                                      return (
                                          t.forEach((t) => {
                                              n[t] = e[t];
                                          }),
                                          n
                                      );
                                  })(e, ['width', 'height'])
                                : {},
                            N = T.length > 0 ? T : t;
                        return e.isFullSize
                            ? a().createElement(
                                  fe,
                                  be({}, R, {
                                      id: L,
                                      className: n,
                                      waitingClassName: o,
                                      statusCode: M,
                                      viewState: S,
                                      waitingText: N,
                                      renderStateDisplay: u,
                                  }),
                              )
                            : a().createElement(
                                  _e,
                                  be({}, R, x, {
                                      id: L,
                                      className: n,
                                      waitingClassName: o,
                                      statusCode: M,
                                      viewState: S,
                                      waitingText: N,
                                      renderStateDisplay: u,
                                  }),
                              );
                    }),
                    pe = ['options', 'mocks', 'mode'];
                const ye = (0, r.memo)(function (e) {
                    let t = e.options,
                        n = e.mocks,
                        r = e.mode,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                a = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a;
                        })(e, pe);
                    return a().createElement(L, { options: t, mocks: n, mode: r }, a().createElement(he, o));
                });
                var Oe = n(521),
                    Le = n(364);
                const Ce = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ke(e = Oe.n.NONE, t = Ce, n = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== Oe.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && u.O.view.isEventHandled()) return;
                                u.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                function Me() {
                    !(function (e = Oe.n.ESCAPE) {
                        ke(e, Le.Sy, !0);
                    })(Oe.n.ESCAPE);
                }
                const Te = 'BrowserApp_base_de',
                    Se = {
                        getter: (e) => ({
                            id: 1,
                            httpStatusCode: 200,
                            pageState: c.Failed,
                            browserState: s.Loaded,
                            autoWaitingDisplay: !0,
                            title: 'Mocks',
                        }),
                        controls: () => ({ focus: E, blur: E, createWebView: E }),
                    };
                function Pe() {
                    return (
                        (Pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Pe.apply(this, arguments)
                    );
                }
                const Re = () => {
                    const e = Ee(),
                        t = e[0],
                        n = e[1];
                    return (
                        Me(),
                        a().createElement(
                            'div',
                            { className: Te, ref: t },
                            a().createElement(ye, Pe({}, w(n), { displayContentWhenLoading: !1, mocks: Se })),
                        )
                    );
                };
                engine.whenReady.then(() => {
                    i().render(a().createElement(Re, null), document.getElementById('root'));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var a = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, r] = deferred[c], o = !0, i = 0; i < t.length; i++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((o = !1), r < a && (a = r));
                    if (o) {
                        deferred.splice(c--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > r; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, r];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (__webpack_require__.j = 590),
        (() => {
            var e = { 590: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        a,
                        [o, i, s] = n,
                        c = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); c < o.length; c++)
                        (a = o[c]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [490], () => __webpack_require__(73));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
