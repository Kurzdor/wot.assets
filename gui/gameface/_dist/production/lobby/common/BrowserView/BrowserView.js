(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                n.r(t),
                    n.d(t, { mouse: () => u, off: () => c, on: () => s, onResize: () => a, onScaleUpdated: () => i });
                var o = n(2472),
                    r = n(1176);
                const a = (0, o.E)('clientResized'),
                    i = (0, o.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    c = (e, t) => engine.off(e, t),
                    l = { down: (0, o.E)('mousedown'), up: (0, o.E)('mouseup'), move: (0, o.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function o() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        i = l[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        o(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                o(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (e.enabled = !1), o();
                        },
                        enable() {
                            (e.enabled = !0), o();
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
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => o,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var o = n(527),
                    r = n(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => o });
            },
            2493: (e, t, n) => {
                function o(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => o });
            },
            2472: (e, t, n) => {
                function o(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => o });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => a });
                var o = n(5959),
                    r = n(514);
                const a = { view: n(7641), client: o, sound: r.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => i });
                var o = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, o.playSound)(r[t])), e), {}),
                    i = { play: Object.assign({}, a, { sound: o.playSound }), setRTPC: o.setRTPC };
            },
            3722: (e, t, n) => {
                function o(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${o(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => o });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => o });
                const o = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => r });
                var o = n(2472);
                const r = {
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
                };
            },
            7641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => c,
                        children: () => o,
                        displayStatus: () => r.W,
                        displayStatusIs: () => k,
                        events: () => a.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => M,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => C,
                        getScale: () => h,
                        getSize: () => v,
                        getViewGlobalPosition: () => f,
                        isEventHandled: () => O,
                        isFocused: () => p,
                        pxToRem: () => w,
                        remToPx: () => E,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => L,
                    });
                var o = n(3722),
                    r = n(6112),
                    a = n(6538),
                    i = n(8566);
                const s = 15;
                function c(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function u(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function f(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function M() {
                    viewEnv.forceTriggerMouseMove();
                }
                function C() {
                    return viewEnv.getShowingStatus();
                }
                const k = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    T = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    L = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => l });
                const o = ['args'];
                const r = 2,
                    a = 16,
                    i = 32,
                    s = 64,
                    c = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var o in e)
                                        if ({}.hasOwnProperty.call(e, o)) {
                                            if (t.indexOf(o) >= 0) continue;
                                            n[o] = e[o];
                                        }
                                    return n;
                                })(t, o);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
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
                        var r;
                    },
                    l = {
                        close(e) {
                            c('popover' === e ? r : i);
                        },
                        minimize() {
                            c(s);
                        },
                        move(e) {
                            c(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
                let o, r;
                n.d(t, { n: () => o }),
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
                    })(o || (o = {})),
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
            1358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var o = n(3138);
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
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = o.O.view.addModelObserver(e, n, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(a) : (this._views[n] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                            const o = this._callbacks[n];
                            void 0 !== o && o(e, t);
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
            9916: (e, t, n) => {
                n.d(t, { ry: () => h });
                class o {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let o = e.target;
                                    do {
                                        if (o === t) return;
                                        o = o.parentNode;
                                    } while (o);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return o.__instance || (o.__instance = new o()), o.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            o = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== o)),
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
                o.__instance = void 0;
                const r = o;
                var a = n(1358);
                var i = n(8613);
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(5521),
                    v = n(3138);
                const m = ['args'];
                function f(e, t, n, o, r, a, i) {
                    try {
                        var s = e[a](i),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(o, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                    return new Promise(function (o, r) {
                                        var a = e.apply(t, n);
                                        function i(e) {
                                            f(a, o, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            f(a, o, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    w = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var o in e)
                                        if ({}.hasOwnProperty.call(e, o)) {
                                            if (t.indexOf(o) >= 0) continue;
                                            n[o] = e[o];
                                        }
                                    return n;
                                })(t, m);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    E = () => w(s.CLOSE),
                    b = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var p = n(7572);
                const y = r.instance,
                    O = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => w(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: E,
                        sendClosePopOverEvent: () => w(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            w(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, o, r = R.invalid('resId'), a) => {
                            const i = v.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                l = c.x,
                                u = c.y,
                                d = c.width,
                                _ = c.height,
                                m = {
                                    x: v.O.view.pxToRem(l) + i.x,
                                    y: v.O.view.pxToRem(u) + i.y,
                                    width: v.O.view.pxToRem(d),
                                    height: v.O.view.pxToRem(_),
                                };
                            w(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: g(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => b(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, E);
                        },
                        handleViewEvent: w,
                        onBindingsReady: h,
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
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const o in t)
                                if (Object.prototype.hasOwnProperty.call(t, o)) {
                                    const r = Object.prototype.toString.call(t[o]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[o];
                                        n[o] = [];
                                        for (let t = 0; t < r.length; t++) n[o].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[o] = e(t[o]))
                                            : (n[o] = t[o]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = O;
            },
            8613: (e, t, n) => {
                n.d(t, { Z5: () => o, cy: () => r });
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            8812: (e, t, n) => {
                var o = n(6179),
                    r = n.n(o),
                    a = n(493),
                    i = n.n(a);
                function s() {}
                function c() {
                    return !1;
                }
                console.log;
                var l = n(9174),
                    u = n(3138);
                function d(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return _(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? _(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var o = 0;
                        return function () {
                            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function _(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
                    return o;
                }
                const v = (e) => (0 === e ? window : window.subViews.get(e));
                const m = () => (e, t) => {
                    const n = (0, o.createContext)({});
                    return [
                        function ({ mode: a = 'real', options: i, children: s, mocks: _ }) {
                            const m = (0, o.useRef)([]),
                                f = (n, o, r) => {
                                    var a;
                                    const i = (function ({
                                            initializer: e = !0,
                                            rootId: t = 0,
                                            getRoot: n = v,
                                            context: o = 'model',
                                        } = {}) {
                                            const r = new Map();
                                            function a(e, t = 0) {
                                                viewEnv.removeDataChangedCallback(e, t)
                                                    ? r.delete(e)
                                                    : console.error("Can't remove callback by id:", e);
                                            }
                                            engine.whenReady.then(() => {
                                                engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                    n.forEach((t) => {
                                                        const n = r.get(t);
                                                        void 0 !== n && n(e);
                                                    });
                                                });
                                            });
                                            const i = (e) => {
                                                const r = n(t),
                                                    a = o.split('.').reduce((e, t) => e[t], r);
                                                return 'string' != typeof e || 0 === e.length
                                                    ? a
                                                    : e.split('.').reduce((e, t) => {
                                                          const n = e[t];
                                                          return 'function' == typeof n ? n.bind(e) : n;
                                                      }, a);
                                            };
                                            return {
                                                subscribe: (n, a) => {
                                                    const s = 'string' == typeof a ? `${o}.${a}` : o,
                                                        c = u.O.view.addModelObserver(s, t, !0);
                                                    return r.set(c, n), e && n(i(a)), c;
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
                                                    for (var e, n = d(r.keys()); !(e = n()).done; ) a(e.value, t);
                                                },
                                                unsubscribe: a,
                                            };
                                        })(o),
                                        s =
                                            'real' === n
                                                ? i
                                                : Object.assign({}, i, {
                                                      readByPath:
                                                          null != (a = null == r ? void 0 : r.getter) ? a : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === n ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                        f = (e) => m.current.push(e),
                                        g = e({
                                            mode: n,
                                            readByPath: _,
                                            externalModel: s,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const o = null != t ? t : _(e),
                                                        r = l.LO.box(o, { equals: c });
                                                    return (
                                                        'real' === n &&
                                                            s.subscribe(
                                                                (0, l.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const o = null != t ? t : _(e),
                                                        r = l.LO.box(o, { equals: c });
                                                    return (
                                                        'real' === n &&
                                                            s.subscribe(
                                                                (0, l.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const o = _(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = l.LO.box(o[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, l.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(t[e]);
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
                                                            i = a.reduce(
                                                                (e, [t, n]) => ((e[n] = l.LO.box(o[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, l.aD)((e) => {
                                                                        a.forEach(([t, n]) => {
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
                                            cleanup: f,
                                        }),
                                        h = { mode: n, model: g, externalModel: s, cleanup: f };
                                    return {
                                        model: g,
                                        controls: 'mocks' === n && r ? r.controls(h) : t(h),
                                        externalModel: s,
                                        mode: n,
                                    };
                                },
                                g = (0, o.useRef)(!1),
                                h = (0, o.useState)(a),
                                w = h[0],
                                E = h[1],
                                b = (0, o.useState)(() => f(a, i, _)),
                                p = b[0],
                                y = b[1];
                            return (
                                (0, o.useEffect)(() => {
                                    g.current ? y(f(w, i, _)) : (g.current = !0);
                                }, [_, w, i]),
                                (0, o.useEffect)(() => {
                                    E(a);
                                }, [a]),
                                (0, o.useEffect)(
                                    () => () => {
                                        p.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [p],
                                ),
                                r().createElement(n.Provider, { value: p }, s)
                            );
                        },
                        () => (0, o.useContext)(n),
                    ];
                };
                var f = n(3946);
                let g, h, w, E;
                !(function (e) {
                    (e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded');
                })(g || (g = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed');
                    })(h || (h = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed');
                    })(w || (w = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded');
                    })(E || (E = {}));
                g.Initialization, h.Initialization;
                const b = (e) => e > 0,
                    p = (e) => !b(e),
                    y = 1,
                    O = 1,
                    M = 1e-5,
                    C = 1;
                function k(e, t) {
                    var n;
                    if (p(e)) return void console.warn('Invalid id, should be greater than zero', e);
                    const o = 0 === t.scale ? M : null != (n = t.scale) ? n : C;
                    return u.O.view.getBrowserTexturePath(e, Math.max(t.width, y), Math.max(t.height, O), o);
                }
                const T = m()(
                        ({ observableModel: e }) => {
                            const t = e.object(),
                                n = (0, f.Om)(() =>
                                    (function ({ pageState: e, browserState: t, texState: n }) {
                                        return t === g.Initialization
                                            ? E.Initialization
                                            : t === g.ForceLoading
                                              ? E.ForceLoading
                                              : t === g.Loading
                                                ? E.BrowserLoading
                                                : e === h.Loaded && t === g.Loaded && n === w.Loaded
                                                  ? E.Loaded
                                                  : n === w.Failed
                                                    ? E.TextureFailed
                                                    : e === h.Failed
                                                      ? E.PageFailed
                                                      : E.PageLoading;
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
                    L = T[0],
                    P = T[1],
                    S = (e) => {
                        (0, o.useEffect)(() => e, []);
                    };
                var x = n(3403),
                    N = n(6483),
                    B = n.n(N);
                const A = 0;
                const F = 'BrowserView_base_6b',
                    D = 'BrowserView_texture_17',
                    I = 'Spinner_base_87',
                    U = 'Spinner_caption_cf',
                    z = 'Spinner_gear_c4',
                    W = 'Spinner_logo_bf',
                    H = ({ message: e, className: t, classNames: n }) =>
                        r().createElement(
                            'div',
                            { className: B()(I, t) },
                            e && r().createElement('div', { className: B()(U, null == n ? void 0 : n.caption) }, e),
                            r().createElement('div', { className: B()(z, null == n ? void 0 : n.gear) }),
                            r().createElement('div', { className: B()(W, null == n ? void 0 : n.logo) }),
                        );
                function j(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const V = {
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
                let q, G;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(q || (q = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(G || (G = {}));
                const K = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: i,
                    mixClass: s,
                    soundHover: c,
                    soundClick: l,
                    onMouseEnter: u,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: v,
                    onMouseLeave: m,
                    onClick: f,
                }) => {
                    const g = (0, o.useRef)(null),
                        h = (0, o.useState)(n),
                        w = h[0],
                        E = h[1],
                        b = (0, o.useState)(!1),
                        p = b[0],
                        y = b[1];
                    return (
                        (0, o.useEffect)(() => {
                            function e(e) {
                                w && null !== g.current && !g.current.contains(e.target) && E(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [w]),
                        (0, o.useEffect)(() => {
                            E(n);
                        }, [n]),
                        r().createElement(
                            'div',
                            {
                                ref: g,
                                className: B()(
                                    V.base,
                                    V[`base__${a}`],
                                    i && V.base__disabled,
                                    t && V[`base__${t}`],
                                    w && V.base__focus,
                                    p && V.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== c && j(c), u && u(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    i || (v && v(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== l && j(l),
                                        _ && _(e),
                                        n && (i || (g.current && (g.current.focus(), E(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (m && m(e), y(!1));
                                },
                                onClick: function (e) {
                                    i || (f && f(e));
                                },
                            },
                            a !== q.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: V.back }),
                                    r().createElement('span', { className: V.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: B()(V.state, V.state__default) },
                                r().createElement('span', { className: V.stateDisabled }),
                                r().createElement('span', { className: V.stateHighlightHover }),
                                r().createElement('span', { className: V.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: V.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                K.defaultProps = { type: q.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Y = K,
                    $ = 'Error_base_46',
                    Z = 'Error_alertIcon_04',
                    X = 'Error_errorCaption_f2',
                    Q = 'Error_button_cd',
                    J = ({ errorBtnLabel: e, errorBtnClickHandler: t, errorMessage: n }) =>
                        r().createElement(
                            'div',
                            { className: $ },
                            r().createElement('div', { className: Z }),
                            r().createElement('div', { className: X }, n),
                            r().createElement(Y, { size: G.medium, mixClass: Q, onClick: t }, e),
                        );
                J.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const ee = 'Waiting_base_c5',
                    te = 'Waiting_blackOverlay_55',
                    ne = ({
                        message: e,
                        isError: t,
                        errorMessage: n,
                        errorBtnLabel: a,
                        errorBtnClickHandler: i,
                        overlayAlpha: s,
                    }) => {
                        const c = r().createRef();
                        return (
                            (0, o.useEffect)(() => {
                                const e = c.current;
                                e && s && (e.style.opacity = s);
                            }, [c, s]),
                            r().createElement(
                                'div',
                                { className: ee },
                                r().createElement('div', { className: te, ref: c }),
                                t
                                    ? r().createElement(J, {
                                          errorBtnLabel: a,
                                          errorMessage: n,
                                          errorBtnClickHandler: i,
                                      })
                                    : r().createElement(H, { message: e }),
                            )
                        );
                    };
                ne.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                const oe = 'DisplayBrowserState_base_e7',
                    re = 'DisplayBrowserState_error_4e',
                    ae = 'DisplayBrowserState_alertIcon_c4',
                    ie = 'DisplayBrowserState_errorCaption_dd',
                    se = ({ waitingText: e, className: t }) =>
                        r().createElement(
                            'div',
                            { className: B()(oe, t) },
                            r().createElement(ne, { errorBtnClickHandler: s, message: e }),
                        ),
                    ce = () =>
                        r().createElement(
                            'div',
                            { className: re },
                            r().createElement('div', { className: ae }),
                            r().createElement(
                                'div',
                                { className: ie },
                                R.strings.dialogs.messenger.userInfoNotAvailable.title(),
                            ),
                        ),
                    le = () =>
                        r().createElement(
                            'div',
                            { className: re },
                            r().createElement('div', { className: ae }),
                            r().createElement(
                                'div',
                                { className: ie },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.title(),
                            ),
                            r().createElement(
                                'div',
                                { className: ie },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.message(),
                            ),
                        );
                function ue(e) {
                    const t = (0, o.useRef)(e);
                    return (
                        (function (e) {
                            return e !== E.BrowserLoading && e !== E.PageLoading;
                        })(e) && (t.current = e),
                        t.current
                    );
                }
                function de(e) {
                    const t = (function (e) {
                            const t = (0, o.useRef)(!1);
                            return (
                                (e !== E.Loaded && e !== E.PageFailed && e !== E.TextureFailed) || (t.current = !0),
                                t.current
                            );
                        })(e),
                        n = ue(e);
                    return t ? n : e;
                }
                const _e = ({ viewState: e, waitingText: t, waitingClassName: n }) => {
                        switch (de(e)) {
                            case E.BrowserLoading:
                            case E.PageLoading:
                            case E.ForceLoading:
                                return r().createElement(se, { waitingText: t, className: n });
                            case E.PageFailed:
                                return r().createElement(ce, null);
                            case E.TextureFailed:
                                return r().createElement(le, null);
                            default:
                                return null;
                        }
                    },
                    ve = (e) =>
                        'width' in e && 'height' in e && 'number' == typeof e.width && 'number' == typeof e.height;
                function me(e) {
                    return null != e ? e : viewEnv.getScale();
                }
                function fe(e) {
                    const t = (0, o.useState)(me(e.scale)),
                        n = t[0],
                        r = t[1],
                        a = (function (e) {
                            return ve(e) ? k(e.id, e) : void 0;
                        })(Object.assign({}, e, { scale: n })),
                        i = (0, o.useState)(a),
                        s = i[0],
                        c = i[1],
                        l = (0, o.useRef)(!1),
                        u = 'width' in e ? e.width : 0,
                        d = 'height' in e ? e.height : 0,
                        _ = (function () {
                            const e = (0, o.useRef)(A);
                            return (
                                S(() => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, o.useMemo)(
                                    () => ({
                                        run: (t) => {
                                            window.cancelAnimationFrame(e.current),
                                                (e.current = window.requestAnimationFrame(() => {
                                                    e.current = window.requestAnimationFrame(() => {
                                                        t(), (e.current = A);
                                                    });
                                                }));
                                        },
                                        clear: () => {
                                            window.cancelAnimationFrame(e.current), (e.current = A);
                                        },
                                        get isRunning() {
                                            return e.current !== A;
                                        },
                                    }),
                                    [],
                                )
                            );
                        })();
                    return (
                        (0, o.useEffect)(() => {
                            const t = () => {
                                r(me(e.scale));
                            };
                            return (
                                window.addEventListener('resize', t),
                                () => {
                                    window.removeEventListener('resize', t);
                                }
                            );
                        }, [e.scale]),
                        (0, o.useEffect)(() => {
                            if (void 0 === a || 0 === u || 0 === d || a === s) return;
                            const e = () => {
                                c(a);
                            };
                            if (!1 === l.current) return (l.current = !0), void e();
                            const t = new Image(),
                                n = () => {
                                    _.run(e);
                                };
                            return (
                                t.addEventListener('load', n),
                                (t.src = a),
                                () => {
                                    t.removeEventListener('load', n), (t.src = '');
                                }
                            );
                        }, [a, s]),
                        s
                    );
                }
                const ge = r().memo(function (e) {
                        const t = e.id,
                            n = e.className,
                            o = e.classNameTexture,
                            a = e.waitingClassName,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            c = e.onMouseWheel,
                            l = e.onMouseMove,
                            u = e.onMouseDown,
                            d = e.onMouseUp,
                            _ = e.renderStateDisplay,
                            v = e.viewState,
                            m = e.statusCode,
                            f = e.waitingText,
                            g = e.scrollSpeed,
                            h = void 0 === g ? 20 : g,
                            w = fe(e);
                        return r().createElement(
                            'div',
                            { className: B()(F, n), onMouseEnter: i, onMouseLeave: s },
                            w &&
                                r().createElement('div', {
                                    onWheel: c,
                                    onMouseMove: l,
                                    onMouseDown: u,
                                    onMouseUp: d,
                                    className: B()(F, D, o),
                                    'data-browser-id': t,
                                    'data-browser-scroll-speed': h,
                                    style: { backgroundImage: `url(${w})` },
                                }),
                            'function' == typeof _
                                ? _({ viewState: v, statusCode: m, waitingText: f, waitingClassName: a })
                                : r().createElement(_e, {
                                      viewState: v,
                                      statusCode: m,
                                      waitingText: f,
                                      waitingClassName: a,
                                  }),
                        );
                    }),
                    he = 'none-ref',
                    we = 'measured',
                    Ee = { type: 'measuring' };
                function be() {
                    const e = (0, o.useRef)(null),
                        t = (0, o.useState)(Ee),
                        n = t[0],
                        r = t[1],
                        a = ((e, t = []) => {
                            const n = (0, o.useRef)(),
                                r = (0, o.useCallback)((...t) => {
                                    n.current && n.current(), (n.current = e(...t));
                                }, t);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        n.current && n.current();
                                    },
                                    [r],
                                ),
                                r
                            );
                        })(
                            () => (
                                r(Ee),
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
                                        ? r({
                                              type: we,
                                              size: { width: e.current.offsetWidth, height: e.current.offsetHeight },
                                          })
                                        : r({ type: he });
                                })
                            ),
                            [],
                        );
                    return (
                        (0, o.useEffect)(
                            () => (
                                window.addEventListener('resize', a), a(), () => window.removeEventListener('resize', a)
                            ),
                            [a],
                        ),
                        [e, n, a]
                    );
                }
                function pe() {
                    return (
                        (pe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                  }
                                  return e;
                              }),
                        pe.apply(null, arguments)
                    );
                }
                const ye = r().memo(function (e) {
                    const t = be(),
                        n = t[0],
                        o = t[1];
                    return r().createElement(
                        'div',
                        { ref: n, className: F },
                        r().createElement(
                            ge,
                            pe(
                                {},
                                e,
                                (function (e, t = {}) {
                                    return 'measured' === e.type ? Object.assign({}, e.size, t) : t;
                                })(o),
                            ),
                        ),
                    );
                });
                function Oe() {
                    return (
                        (Oe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                  }
                                  return e;
                              }),
                        Oe.apply(null, arguments)
                    );
                }
                const Me = (0, x.Pi)(function (e) {
                        const t = e.defaultWaitingText,
                            n = e.className,
                            a = e.waitingClassName,
                            i = e.isLazy,
                            s = void 0 === i || i,
                            c = e.displayContentWhenLoading,
                            l = void 0 === c || c,
                            u = e.renderStateDisplay,
                            d = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            v = e.onMouseMove,
                            m = e.onMouseWheel,
                            f = e.onMouseDown,
                            g = e.onMouseUp,
                            h = P(),
                            w = h.model,
                            y = h.controls,
                            O = w.root.get(),
                            M = O.id,
                            C = O.httpStatusCode,
                            k = O.waitingMessage,
                            T = w.getState(),
                            L = l || T === E.Loaded;
                        var S;
                        (S = () => {
                            s && p(M) && y.createWebView();
                        }),
                            (0, o.useEffect)(S, []),
                            (0, o.useEffect)(() => {
                                b(M) && y.focus();
                            }, [M, y]);
                        const x = (0, o.useMemo)(() => {
                            const e = {
                                onMouseEnter: d,
                                onMouseLeave: _,
                                onMouseMove: v,
                                onMouseWheel: m,
                                onMouseDown: f,
                                onMouseUp: g,
                            };
                            return L
                                ? Object.assign({}, e, {
                                      onMouseEnter: (e) => {
                                          y.focus(), null == d || d(e);
                                      },
                                      onMouseLeave: (e) => {
                                          y.blur(), null == _ || _(e);
                                      },
                                  })
                                : e;
                        }, [L, y, f, d, _, v, g, m]);
                        if (p(M)) return null;
                        const N = ve(e)
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
                            R = k.length > 0 ? k : t;
                        return e.isFullSize
                            ? r().createElement(
                                  ye,
                                  Oe({}, x, {
                                      id: M,
                                      className: n,
                                      waitingClassName: a,
                                      statusCode: C,
                                      viewState: T,
                                      waitingText: R,
                                      renderStateDisplay: u,
                                      onMouseEnter: y.focus,
                                      onMouseLeave: y.blur,
                                  }),
                              )
                            : r().createElement(
                                  ge,
                                  Oe({}, x, N, {
                                      id: M,
                                      className: n,
                                      waitingClassName: a,
                                      statusCode: C,
                                      viewState: T,
                                      waitingText: R,
                                      renderStateDisplay: u,
                                      onMouseEnter: y.focus,
                                      onMouseLeave: y.blur,
                                  }),
                              );
                    }),
                    Ce = ['options', 'mocks', 'mode'];
                const ke = (0, o.memo)(function (e) {
                        let t = e.options,
                            n = e.mocks,
                            o = e.mode,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var o in e)
                                    if ({}.hasOwnProperty.call(e, o)) {
                                        if (t.indexOf(o) >= 0) continue;
                                        n[o] = e[o];
                                    }
                                return n;
                            })(e, Ce);
                        return r().createElement(L, { options: t, mocks: n, mode: o }, r().createElement(Me, a));
                    }),
                    Te = m()(
                        ({ observableModel: e }) => {
                            const t = e.object();
                            return { isClosable: (0, f.Om)(() => !0 === t.get().isClosable) };
                        },
                        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
                    ),
                    Le = Te[0],
                    Pe = Te[1],
                    Se = {
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
                    xe = [
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
                function Ne() {
                    return (
                        (Ne = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                  }
                                  return e;
                              }),
                        Ne.apply(null, arguments)
                    );
                }
                class Re extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && j(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && j(this.props.soundClick);
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
                            n = e.onClick,
                            o = e.goto,
                            a = e.side,
                            i = e.type,
                            s = e.classNames,
                            c = e.onMouseEnter,
                            l = e.onMouseLeave,
                            u = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var o in e)
                                        if ({}.hasOwnProperty.call(e, o)) {
                                            if (t.indexOf(o) >= 0) continue;
                                            n[o] = e[o];
                                        }
                                    return n;
                                })(e, xe)),
                            v = B()(Se.base, Se[`base__${i}`], Se[`base__${a}`], null == s ? void 0 : s.base),
                            m = B()(Se.icon, Se[`icon__${i}`], Se[`icon__${a}`], null == s ? void 0 : s.icon),
                            f = B()(Se.glow, null == s ? void 0 : s.glow),
                            g = B()(Se.caption, Se[`caption__${i}`], null == s ? void 0 : s.caption),
                            h = B()(Se.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            Ne(
                                {
                                    className: v,
                                    onMouseEnter: this._onMouseEnter(c),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(u),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                _,
                            ),
                            'info' !== i && r().createElement('div', { className: Se.shine }),
                            r().createElement('div', { className: m }, r().createElement('div', { className: f })),
                            r().createElement('div', { className: g }, t),
                            o && r().createElement('div', { className: h }, o),
                        );
                    }
                }
                Re.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Be = 'Closable_base_e2',
                    Ae = 'Closable_button_01',
                    Fe = (0, x.Pi)(function ({ className: e, classNameButton: t, children: n }) {
                        const o = Pe(),
                            a = o.controls,
                            i = o.model;
                        return r().createElement(
                            'div',
                            { className: B()(Be, e) },
                            n,
                            i.isClosable() &&
                                r().createElement(
                                    'div',
                                    { className: B()(Ae, t) },
                                    r().createElement(Re, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: a.close,
                                    }),
                                ),
                        );
                    }),
                    De = ['children', 'className', 'classNameButton'];
                const Ie = (e) => {
                    let t = e.children,
                        n = e.className,
                        o = e.classNameButton,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var o in e)
                                if ({}.hasOwnProperty.call(e, o)) {
                                    if (t.indexOf(o) >= 0) continue;
                                    n[o] = e[o];
                                }
                            return n;
                        })(e, De);
                    return r().createElement(Le, a, r().createElement(Fe, { className: n, classNameButton: o }, t));
                };
                var Ue = n(5521);
                n(9916);
                const ze = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function We(e = Ue.n.NONE, t = ze, n = !1, r = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== Ue.n.NONE)
                            return (
                                window.addEventListener('keydown', o, n),
                                () => {
                                    window.removeEventListener('keydown', o, n);
                                }
                            );
                        function o(o) {
                            if (o.keyCode === e) {
                                if (!r && u.O.view.isEventHandled()) return;
                                u.O.view.setEventHandled(), t(o), n && o.stopPropagation();
                            }
                        }
                    }, [t, e, n, r]);
                }
                const He = 'App_base_a4',
                    je = 'App_closeButton_34',
                    Ve = m()(s, ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') })),
                    qe = Ve[0],
                    Ge = Ve[1],
                    Ke = 'R.images.gui.maps.icons.development.library.GameFacePattern',
                    Ye = () => {
                        const e = Ge().controls;
                        return (
                            We(Ue.n.ESCAPE, () => e.close()),
                            r().createElement(
                                'div',
                                {
                                    className: He,
                                    style:
                                        ((t = Ke),
                                        void 0 !== t &&
                                        '' !==
                                            ((e, t) => {
                                                let n = e;
                                                const o = t.split('.');
                                                for (let e = 0; e < o.length; e++) {
                                                    if (!n) return '';
                                                    if (
                                                        ('string' != typeof n && (n = n.$dyn(o[e])),
                                                        'string' == typeof n)
                                                    )
                                                        return n;
                                                }
                                                return '';
                                            })(R.images, t.replace('R.images', ''))
                                            ? { backgroundImage: `url(${Ke})` }
                                            : void 0),
                                },
                                r().createElement(
                                    Ie,
                                    { classNameButton: je },
                                    r().createElement(ke, { isFullSize: !0, displayContentWhenLoading: !1 }),
                                ),
                            )
                        );
                        var t;
                    },
                    $e = () => r().createElement(qe, null, r().createElement(Ye, null));
                engine.whenReady.then(() => {
                    i().render(r().createElement($e, null), document.getElementById('root'));
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
        (__webpack_require__.O = (e, t, n, o) => {
            if (!t) {
                var r = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, o] = deferred[c], a = !0, i = 0; i < t.length; i++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), o < r && (r = o));
                    if (a) {
                        deferred.splice(c--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > o; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, o];
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
        (__webpack_require__.j = 194),
        (() => {
            var e = { 194: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [a, i, s] = n,
                        c = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in i) __webpack_require__.o(i, o) && (__webpack_require__.m[o] = i[o]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); c < a.length; c++)
                        (r = a[c]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [127], () => __webpack_require__(8812));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
