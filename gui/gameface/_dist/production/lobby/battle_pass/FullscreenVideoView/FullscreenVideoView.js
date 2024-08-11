(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, n, t) => {
                t.r(n),
                    t.d(n, { mouse: () => u, off: () => c, on: () => s, onResize: () => i, onScaleUpdated: () => a });
                var r = t(2472),
                    o = t(1176);
                const i = (0, r.E)('clientResized'),
                    a = (0, r.E)('self.onScaleUpdated'),
                    s = (e, n) => engine.on(e, n),
                    c = (e, n) => engine.off(e, n),
                    l = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && (0, o.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, o.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', n),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', n),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, o.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${n}`,
                                        a = l[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            o &&
                                                (a(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && (0, o.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, o.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, n, t) => {
                t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => o.G,
                        setRTPC: () => o.E,
                    });
                var r = t(527),
                    o = t(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, n, t) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(n, { R: () => r });
            },
            2493: (e, n, t) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function o(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                t.d(n, { E: () => o, G: () => r });
            },
            2472: (e, n, t) => {
                function r(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                t.d(n, { E: () => r });
            },
            3138: (e, n, t) => {
                t.d(n, { O: () => i });
                var r = t(5959),
                    o = t(514);
                const i = { view: t(7641), client: r, sound: o.ZP };
            },
            514: (e, n, t) => {
                t.d(n, { ZP: () => a });
                var r = t(5959);
                const o = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(o).reduce((e, n) => ((e[n] = () => (0, r.playSound)(o[n])), e), {}),
                    a = { play: Object.assign({}, i, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, n, t) => {
                function r(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function o(e, n, t) {
                    return `url(${r(e, n, t)})`;
                }
                t.r(n), t.d(n, { getBgUrl: () => o, getTextureUrl: () => r });
            },
            6112: (e, n, t) => {
                t.d(n, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, n, t) => {
                t.d(n, { U: () => o });
                var r = t(2472);
                const o = {
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
            7641: (e, n, t) => {
                t.r(n),
                    t.d(n, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => o.W,
                        displayStatusIs: () => k,
                        events: () => i.U,
                        extraSize: () => P,
                        forceTriggerMouseMove: () => O,
                        freezeTextureBeforeResize: () => h,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => T,
                        getScale: () => m,
                        getSize: () => _,
                        getViewGlobalPosition: () => f,
                        isEventHandled: () => y,
                        isFocused: () => b,
                        pxToRem: () => E,
                        remToPx: () => w,
                        resize: () => v,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => R,
                    });
                var r = t(3722),
                    o = t(6112),
                    i = t(6538),
                    a = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function u(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function f(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: w(n.x), y: w(n.y) };
                }
                function h() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function y() {
                    return viewEnv.isEventHandled();
                }
                function O() {
                    viewEnv.forceTriggerMouseMove();
                }
                function T() {
                    return viewEnv.getShowingStatus();
                }
                const k = Object.keys(o.W).reduce(
                        (e, n) => ((e[n] = () => viewEnv.getShowingStatus() === o.W[n]), e),
                        {},
                    ),
                    P = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, n, t) => {
                t.d(n, { qP: () => l });
                const r = ['args'];
                const o = 2,
                    i = 16,
                    a = 32,
                    s = 64,
                    c = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                a = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                    return o;
                                })(n, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((o = i),
                                              Object.entries(o).map(([e, n]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof n) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: n };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: n };
                                                      default:
                                                          return { __Type: t, name: e, string: n.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var o;
                    },
                    l = {
                        close(e) {
                            c('popover' === e ? o : a);
                        },
                        minimize() {
                            c(s);
                        },
                        move(e) {
                            c(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, n, t) => {
                let r, o;
                t.d(n, { n: () => r }),
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
                    })(o || (o = {}));
            },
            1358: (e, n, t) => {
                t.d(n, { Z: () => i });
                var r = t(3138);
                class o {
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
                        return window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, n, t = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = r.O.view.addModelObserver(e, t, o);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = n),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, n = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, n)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, n, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, n);
                        });
                    }
                }
                o.__instance = void 0;
                const i = o;
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
            9916: (e, n, t) => {
                t.d(n, { ry: () => E });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: n, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === n) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, n) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: n });
                    }
                    unregister(e, n) {
                        const t = e,
                            r = n;
                        (this.entries = this.entries.filter(({ container: e, callback: n }) => e !== t || n !== r)),
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
                const o = r;
                var i = t(1358);
                var a = t(8613);
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
                var _ = t(5521),
                    v = t(3138);
                const f = ['args'];
                function h(e, n, t, r, o, i, a) {
                    try {
                        var s = e[i](a),
                            c = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? n(c) : Promise.resolve(c).then(r, o);
                }
                const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    E = (function () {
                        var e,
                            n =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var n = this,
                                        t = arguments;
                                    return new Promise(function (r, o) {
                                        var i = e.apply(n, t);
                                        function a(e) {
                                            h(i, r, o, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(i, r, o, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return n.apply(this, arguments);
                        };
                    })(),
                    w = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                    return o;
                                })(n, f);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, n]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof n) {
                                                      case 'number':
                                                          t.number = n;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = n;
                                                          break;
                                                      default:
                                                          t.string = n.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    p = () => w(s.CLOSE),
                    b = (e, n) => {
                        e.keyCode === _.n.ESCAPE && n();
                    };
                var g = t(7572);
                const y = o.instance,
                    O = {
                        DataTracker: i.Z,
                        ViewModel: g.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => w(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => w(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, n, t = 0) => {
                            w(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: n });
                        },
                        sendShowPopOverEvent: (e, n, t, r, o = R.invalid('resId'), i) => {
                            const a = v.O.view.getViewGlobalPosition(),
                                c = t.getBoundingClientRect(),
                                l = c.x,
                                u = c.y,
                                d = c.width,
                                _ = c.height,
                                f = {
                                    x: v.O.view.pxToRem(l) + a.x,
                                    y: v.O.view.pxToRem(u) + a.y,
                                    width: v.O.view.pxToRem(d),
                                    height: v.O.view.pxToRem(_),
                                };
                            w(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: o,
                                direction: n,
                                bbox: m(f),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const n = (n) => b(n, e);
                            return (
                                window.addEventListener('keydown', n), () => window.removeEventListener('keydown', n)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, p);
                        },
                        handleViewEvent: w,
                        onBindingsReady: E,
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
                        dumpViewModel: function e(n) {
                            const t = {};
                            if ('object' != typeof n) return n;
                            for (const r in n)
                                if (Object.prototype.hasOwnProperty.call(n, r)) {
                                    const o = Object.prototype.toString.call(n[r]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = n[r];
                                        t[r] = [];
                                        for (let n = 0; n < o.length; n++) t[r].push({ value: e(o[n].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(n[r]))
                                            : (t[r] = n[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = O;
            },
            8613: (e, n, t) => {
                t.d(n, { Z5: () => r, cy: () => o });
                const r = {
                        getNumberFormat: (e, n) => systemLocale.getNumberFormat(e, n),
                        getRealFormat: (e, n) => systemLocale.getRealFormat(e, n),
                        getTimeFormat: (e, n) => systemLocale.getTimeFormat(e, n),
                        getDateFormat: (e, n) => systemLocale.getDateFormat(e, n),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, n, t) => userLocale.getTimeFormat(e, n, void 0 === t || t),
                        getTimeString: (e, n, t) => userLocale.getTimeString(e, n, void 0 === t || t),
                    };
            },
            237: (e, n, t) => {
                var r = t(6179),
                    o = t.n(r),
                    i = t(493),
                    a = t.n(i);
                var s = t(3138),
                    c = t(6112);
                function l() {}
                function u() {
                    return !1;
                }
                console.log;
                const d = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const v = (0, r.forwardRef)(function (e, n) {
                        let t = e.src,
                            i = e.className,
                            a = e.autoplay,
                            u = void 0 !== a && a,
                            v = e.style,
                            f = e.loop,
                            h = void 0 !== f && f,
                            m = e.isPrebufferKeyframes,
                            E = e.keyframesNameConfig,
                            w = e.onClick,
                            p = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                return o;
                            })(e, d);
                        const b = n,
                            g = (0, r.useRef)(null);
                        var y;
                        return (
                            (y = () =>
                                s.O.view.events.onDisplayChanged((e, n) => {
                                    var t, r;
                                    n === c.W.hidden && (null == (t = g.current) || t.pause()),
                                        n === c.W.shown && (null == (r = g.current) || r.play());
                                })),
                            (0, r.useEffect)(y, []),
                            (0, r.useEffect)(
                                () =>
                                    ((e) => {
                                        let n,
                                            t = null;
                                        return (
                                            (t = requestAnimationFrame(() => {
                                                t = requestAnimationFrame(() => {
                                                    (t = null), (n = e());
                                                });
                                            })),
                                            () => {
                                                'function' == typeof n && n(), null !== t && cancelAnimationFrame(t);
                                            }
                                        );
                                    })(() => {
                                        const e = g.current;
                                        if (!b || !e || !m)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const n = e.cohGetKeyframeTimestamps();
                                        n.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              n.map((n) => {
                                                  null == e || e.cohPrebufferKeyframe(n);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [m, b],
                            ),
                            (0, r.useEffect)(() => {
                                if (b && g.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: l },
                                        n = () => {
                                            let n = 0;
                                            const t = (function (e) {
                                                    let n = 0;
                                                    return [
                                                        function t() {
                                                            e(), (n = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (g.current) {
                                                        const t = g.current,
                                                            r = t.currentTime,
                                                            o = t.duration;
                                                        if (
                                                            (n !== r &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: r, duration: o }),
                                                                ),
                                                                (n = r)),
                                                            g.current.paused || !b || !m)
                                                        )
                                                            return;
                                                        const i = g.current.cohGetKeyframeTimestamps();
                                                        i.forEach((n, t) => {
                                                            r > i[t] - 0.02 &&
                                                                r < i[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const r = Object.keys(null != E ? E : {})[t];
                                                                    return e({
                                                                        time: n,
                                                                        name: `${E ? r : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                r = t[0],
                                                o = t[1];
                                            return r(), o;
                                        };
                                    e.changeTimeLoop = n();
                                    const t = (n) => (
                                            e.changeTimeHandlers.push(n),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    r = t.indexOf(n);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(r, 1);
                                            }
                                        ),
                                        r = (n) => (
                                            e.changeKeyframeHandlers.push(n),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    r = t.indexOf(n);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(r, 1);
                                            }
                                        ),
                                        o = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.currentTime;
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.duration;
                                        },
                                        a = (e) => {
                                            var n, t, r;
                                            g.current &&
                                                (g.current.currentTime =
                                                    ((n = 0),
                                                    (t = g.current.duration),
                                                    (r = e) < n ? n : r > t ? t : r));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.play();
                                        },
                                        c = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.pause();
                                        },
                                        u = () => {
                                            c(), a(0);
                                        },
                                        d = () => {
                                            var e, n;
                                            return null !=
                                                (e = null == (n = g.current) ? void 0 : n.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        _ = (e) => {
                                            a(e), s();
                                        },
                                        v = (e) => {
                                            a(e), c();
                                        },
                                        f = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        h = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = g.current) || t.addEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = g.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        },
                                        w = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = g.current) || t.removeEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = g.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        };
                                    return (
                                        (b.current = {
                                            on: h,
                                            off: w,
                                            play: s,
                                            pause: c,
                                            stop: u,
                                            cleanup: f,
                                            getCurrentTime: o,
                                            getDuration: i,
                                            getCachedKeyframes: d,
                                            goToAndPlay: _,
                                            goToAndStop: v,
                                            setCurrentTime: a,
                                            domRef: g.current,
                                            onChangeTime: t,
                                            onKeyframes: r,
                                        }),
                                        () => {
                                            f(), (b.current = null);
                                        }
                                    );
                                }
                            }, [E, b, m]),
                            (0, r.useEffect)(() => {
                                g.current && u && g.current.play();
                            }, [u, h]),
                            (0, r.useEffect)(() => {
                                if (g.current)
                                    return () => {
                                        g.current && g.current.pause();
                                    };
                            }, []),
                            o().createElement(
                                'video',
                                _({ src: t, className: i, style: v, loop: h, ref: g, onClick: w }, p),
                            )
                        );
                    }),
                    f = (0, r.memo)(v);
                var h = t(5521);
                t(9916);
                const m = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function E(e = h.n.NONE, n = m, t = !1, o = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== h.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!o && s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), n(r), t && r.stopPropagation();
                            }
                        }
                    }, [n, e, t, o]);
                }
                const w = () => {
                    const e = s.O.view.getSize('rem'),
                        n = (0, r.useState)({ height: e.height, width: e.width }),
                        t = n[0],
                        o = n[1];
                    return (
                        (0, r.useEffect)(() => {
                            const e = (e) => {
                                o(e);
                            };
                            return (
                                engine.on('screenResized', e),
                                () => {
                                    engine.off('screenResized', e);
                                }
                            );
                        }, []),
                        t
                    );
                };
                function p(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', n);
                    });
                }
                var b = t(3403),
                    g = t(9174);
                function y(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (!e) return;
                            if ('string' == typeof e) return O(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return O(e, n);
                        })(e)) ||
                        (n && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function O(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const T = (e) => (0 === e ? window : window.subViews.get(e));
                const k = ((e, n) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: a, children: c, mocks: l }) {
                                const d = (0, r.useRef)([]),
                                    _ = (t, r, o) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = T,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function i(e, n = 0) {
                                                    viewEnv.removeDataChangedCallback(e, n)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, n, t) => {
                                                        t.forEach((n) => {
                                                            const t = o.get(n);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const o = t(n),
                                                        i = r.split('.').reduce((e, n) => e[n], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, n) => {
                                                              const t = e[n];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const c = 'string' == typeof i ? `${r}.${i}` : r,
                                                            l = s.O.view.addModelObserver(c, n, !0);
                                                        return o.set(l, t), e && t(a(i)), l;
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, n) => {
                                                        const t = a(n);
                                                        return (...n) => {
                                                            t(e(...n));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const n = a(e);
                                                        return () => {
                                                            n();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = y(o.keys()); !(e = t()).done; ) i(e.value, n);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            c =
                                                'real' === t
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == o ? void 0 : o.getter(e)) : c.readByPath(e),
                                            _ = (e) => d.current.push(e),
                                            v = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: c,
                                                observableModel: {
                                                    array: (e, n) => {
                                                        const r = null != n ? n : l(e),
                                                            o = g.LO.box(r, { equals: u });
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, g.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const r = null != n ? n : l(e),
                                                            o = g.LO.box(r, { equals: u });
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, g.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const r = l(n);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, n) => ((e[n] = g.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    c.subscribe(
                                                                        (0, g.aD)((n) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(n[e]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [n, t]) => ((e[t] = g.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    c.subscribe(
                                                                        (0, g.aD)((e) => {
                                                                            i.forEach(([n, t]) => {
                                                                                a[t].set(e[n]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            f = { mode: t, model: v, externalModel: c, cleanup: _ };
                                        return {
                                            model: v,
                                            controls: 'mocks' === t && o ? o.controls(f) : n(f),
                                            externalModel: c,
                                            mode: t,
                                        };
                                    },
                                    v = (0, r.useRef)(!1),
                                    f = (0, r.useState)(i),
                                    h = f[0],
                                    m = f[1],
                                    E = (0, r.useState)(() => _(i, a, l)),
                                    w = E[0],
                                    p = E[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        v.current ? p(_(h, a, l)) : (v.current = !0);
                                    }, [l, h, a]),
                                    (0, r.useEffect)(() => {
                                        m(i);
                                    }, [i]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            w.externalModel.dispose(), d.current.forEach((e) => e());
                                        },
                                        [w],
                                    ),
                                    o().createElement(t.Provider, { value: w }, c)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const n = { root: e.object() };
                            return Object.assign({}, n);
                        },
                        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
                    ),
                    P = k[0],
                    C = k[1],
                    S = 'FullscreenVideo_base_6b',
                    L = 'FullscreenVideo_video_ae',
                    M = { widescreen: 1.6, hd: 16 / 9 };
                var x;
                !(function (e) {
                    (e.Contain = 'contain'), (e.Cover = 'cover');
                })(x || (x = {}));
                const A = (e, n, t, r) => {
                        const o = ((e) =>
                                'media_ch4' === e
                                    ? { videoAspectRatio: M.hd, fill: x.Contain }
                                    : { videoAspectRatio: M.widescreen, fill: x.Cover })(r.split('.').slice(-1)[0]),
                            i = o.videoAspectRatio,
                            a = o.fill,
                            s = viewEnv.pxToRem(e) * t,
                            c = viewEnv.pxToRem(n) * t,
                            l = s / i,
                            u = c * i,
                            d = c > l;
                        return a === x.Contain
                            ? { width: `${d ? s : u}rem`, height: `${d ? l : c}rem` }
                            : { width: `${d ? u : s}rem`, height: `${d ? c : l}rem` };
                    },
                    N = (0, b.Pi)(() => {
                        const e = C(),
                            n = e.model,
                            t = e.controls,
                            i = n.root.get(),
                            a = i.videoName,
                            c = i.audioName,
                            l = i.isWindowAccessible,
                            u = w(),
                            d = u.width,
                            _ = u.height,
                            v = (() => {
                                const e = (0, r.useState)(s.O.view.getScale()),
                                    n = e[0],
                                    t = e[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = () => {
                                            t(s.O.view.getScale());
                                        };
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    n
                                );
                            })(),
                            m = (0, r.useRef)(null),
                            b = ((e, n) => {
                                let t = e;
                                const r = n.split('.');
                                for (let e = 0; e < r.length; e++) {
                                    if (!t) return '';
                                    if (('string' != typeof t && (t = t.$dyn(r[e])), 'string' == typeof t)) return t;
                                }
                                return '';
                            })(R.videos, a);
                        var g;
                        return (
                            (0, r.useEffect)(() => {
                                const e = m.current;
                                if (!e) return;
                                if (!l) return e.pause();
                                return Boolean(e.getCurrentTime())
                                    ? e.play()
                                    : ((e, n) => {
                                          let t;
                                          const r = setTimeout(() => {
                                              t = e();
                                          }, n);
                                          return () => {
                                              'function' == typeof t && t(), clearTimeout(r);
                                          };
                                      })(() => {
                                          e.play(), p(c);
                                      }, 300);
                            }, [m, l, c]),
                            (0, r.useEffect)(() => {
                                const e = m.current;
                                engine.on('clientMinimized', (n) => {
                                    e && (n ? e.pause() : e.play());
                                });
                            }, [m]),
                            (g = t.close),
                            E(h.n.ESCAPE, g),
                            o().createElement(
                                'div',
                                { className: S },
                                o().createElement(f, {
                                    className: L,
                                    src: b,
                                    onEnded: t.close,
                                    ref: m,
                                    style: A(d, _, v, a),
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    a().render(o().createElement(P, null, o().createElement(N, null)), document.getElementById('root'));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var n = __webpack_module_cache__[e];
        if (void 0 !== n) return n.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, n, t, r) => {
            if (!n) {
                var o = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [n, t, r] = deferred[c], i = !0, a = 0; a < n.length; a++)
                        (!1 & r || o >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](n[a]))
                            ? n.splice(a--, 1)
                            : ((i = !1), r < o && (o = r));
                    if (i) {
                        deferred.splice(c--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > r; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [n, t, r];
        }),
        (__webpack_require__.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(n, { a: n }), n;
        }),
        (__webpack_require__.d = (e, n) => {
            for (var t in n)
                __webpack_require__.o(n, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 694),
        (() => {
            var e = { 694: 0 };
            __webpack_require__.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        o,
                        [i, a, s] = t,
                        c = 0;
                    if (i.some((n) => 0 !== e[n])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (n && n(t); c < i.length; c++)
                        (o = i[c]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(237));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
