(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                n.r(t),
                    n.d(t, { mouse: () => d, off: () => c, on: () => s, onResize: () => r, onScaleUpdated: () => a });
                var i = n(2472),
                    o = n(1176);
                const r = (0, i.E)('clientResized'),
                    a = (0, i.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    c = (e, t) => engine.off(e, t),
                    l = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, o.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, o.R)(!0);
                    }
                    function i() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, o.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const r = `mouse${t}`,
                                        a = l[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        i(),
                                        () => {
                                            o &&
                                                (a(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                i(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), i();
                        },
                        enable() {
                            (e.enabled = !0), i();
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
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => i,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => o.G,
                        setRTPC: () => o.E,
                    });
                var i = n(527),
                    o = n(2493);
                function r(e = 'px') {
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
            1176: (e, t, n) => {
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => i });
            },
            2493: (e, t, n) => {
                function i(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function o(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => o, G: () => i });
            },
            2472: (e, t, n) => {
                function i(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => i });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => r });
                var i = n(5959),
                    o = n(514);
                const r = { view: n(7641), client: i, sound: o.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => a });
                var i = n(5959);
                const o = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(o).reduce((e, t) => ((e[t] = () => (0, i.playSound)(o[t])), e), {}),
                    a = { play: Object.assign({}, r, { sound: i.playSound }), setRTPC: i.setRTPC };
            },
            3722: (e, t, n) => {
                function i(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function o(e, t, n) {
                    return `url(${i(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => o, getTextureUrl: () => i });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => o });
                var i = n(2472);
                const o = {
                    onTextureFrozen: (0, i.E)('self.onTextureFrozen'),
                    onTextureReady: (0, i.E)('self.onTextureReady'),
                    onDomBuilt: (0, i.E)('self.onDomBuilt'),
                    onLoaded: (0, i.E)('self.onLoaded'),
                    onDisplayChanged: (0, i.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, i.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, i.E)('children.onAdded'),
                        onLoaded: (0, i.E)('children.onLoaded'),
                        onRemoved: (0, i.E)('children.onRemoved'),
                        onAttached: (0, i.E)('children.onAttached'),
                        onTextureReady: (0, i.E)('children.onTextureReady'),
                        onRequestPosition: (0, i.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => i,
                        displayStatus: () => o.W,
                        displayStatusIs: () => k,
                        events: () => r.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => O,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => T,
                        getScale: () => w,
                        getSize: () => u,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => y,
                        isFocused: () => b,
                        pxToRem: () => p,
                        remToPx: () => h,
                        resize: () => v,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => P,
                    });
                var i = n(3722),
                    o = n(6112),
                    r = n(6538),
                    a = n(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, n, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, i);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function w() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function f() {
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
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === o.W[t]), e),
                        {},
                    ),
                    R = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    P = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => l });
                const i = ['args'];
                const o = 2,
                    r = 16,
                    a = 32,
                    s = 64,
                    c = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        o = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, i);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
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
                            c(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
                let i, o;
                n.d(t, { n: () => i }),
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
                    })(i || (i = {})),
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
            1358: (e, t, n) => {
                n.d(t, { Z: () => r });
                var i = n(3138);
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
                    addCallback(e, t, n = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = i.O.view.addModelObserver(e, n, o);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(r) : (this._views[n] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const i = this._callbacks[n];
                            void 0 !== i && i(e, t);
                        });
                    }
                }
                o.__instance = void 0;
                const r = o;
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
                n.d(t, { Gr: () => l, Z5: () => a.Z5, ry: () => p });
                class i {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let i = e.target;
                                    do {
                                        if (i === t) return;
                                        i = i.parentNode;
                                    } while (i);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return i.__instance || (i.__instance = new i()), i.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            i = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== i)),
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
                i.__instance = void 0;
                const o = i;
                var r = n(1358);
                var a = n(8613);
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var u = n(5521),
                    v = n(3138);
                const E = ['args'];
                function m(e, t, n, i, o, r, a) {
                    try {
                        var s = e[r](a),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(i, o);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (i, o) {
                                        var r = e.apply(t, n);
                                        function a(e) {
                                            m(r, i, o, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            m(r, i, o, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        o = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, E);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((i = o),
                                              Object.entries(i).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    g = () => h(s.CLOSE),
                    b = (e, t) => {
                        e.keyCode === u.n.ESCAPE && t();
                    };
                var f = n(7572);
                const y = o.instance,
                    O = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, i, o = R.invalid('resId'), r) => {
                            const a = v.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                l = c.x,
                                d = c.y,
                                _ = c.width,
                                u = c.height,
                                E = {
                                    x: v.O.view.pxToRem(l) + a.x,
                                    y: v.O.view.pxToRem(d) + a.y,
                                    width: v.O.view.pxToRem(_),
                                    height: v.O.view.pxToRem(u),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: w(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => b(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, g);
                        },
                        handleViewEvent: h,
                        onBindingsReady: p,
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
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const o = Object.prototype.toString.call(t[i]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = t[i];
                                        n[i] = [];
                                        for (let t = 0; t < o.length; t++) n[i].push({ value: e(o[t].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[i] = e(t[i]))
                                            : (n[i] = t[i]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = O;
            },
            8613: (e, t, n) => {
                n.d(t, { Z5: () => i, cy: () => o });
                const i = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            412: (e, t, n) => {
                var i = n(6179),
                    o = n.n(i),
                    r = n(493),
                    a = n.n(r),
                    s = n(6483),
                    c = n.n(s),
                    l = n(3138);
                function d() {
                    const e = (0, i.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, i.useEffect)(() => t, []),
                        (0, i.useMemo)(
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
                const _ = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    u = ['children', 'className', 'theme'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const E = o().forwardRef(function (e, t) {
                    let n = e.children,
                        r = e.className,
                        a = e.theme,
                        s = void 0 === a ? 'default' : a,
                        E = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                o = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o;
                        })(e, u);
                    const m = d(),
                        w = o().useRef(null);
                    var p;
                    return (
                        (p = () => {
                            m.run(() => {
                                const e = w.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                l.O.view.resize(t, n);
                                const i = window.getComputedStyle(e);
                                l.O.view.setSidePaddingsRem({
                                    left: parseInt(i.getPropertyValue('padding-left'), 10),
                                    top: parseInt(i.getPropertyValue('padding-top'), 10),
                                    right: parseInt(i.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(i.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, i.useEffect)(p, []),
                        o().createElement(
                            'div',
                            v({}, E, {
                                className: c()(_.base, _[`base__theme-${s}`], r),
                                ref: function (e) {
                                    (w.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                },
                            }),
                            o().createElement('div', { className: _.decorator }, n),
                        )
                    );
                });
                var m = n(9916);
                let w, p, h, g, b;
                !(function (e) {
                    (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                })(w || (w = {})),
                    (function (e) {
                        (e[(e.Equipped = 0)] = 'Equipped'), (e[(e.Locked = 1)] = 'Locked'), (e[(e.Open = 2)] = 'Open');
                    })(p || (p = {})),
                    (function (e) {
                        (e.Engraving = 'engraving'), (e.Background = 'background'), (e.All = 'all');
                    })(h || (h = {})),
                    (function (e) {
                        (e.Dedication = 'dedication'),
                            (e.Skill = 'skill'),
                            (e.RankedSkill = 'ranked_skill'),
                            (e.Triumph = 'triumph'),
                            (e.Medal = 'triumph_medal'),
                            (e.Base = 'base');
                    })(g || (g = {})),
                    (function (e) {
                        (e.Dedication = 'dedication'), (e.Triumph = 'triumph'), (e.Season = 'season');
                    })(b || (b = {}));
                b.Dedication, g.Dedication, b.Triumph, g.Triumph, b.Season, g.Skill, g.RankedSkill;
                let f;
                !(function (e) {
                    (e.NUMBER = 'NUMBER'), (e.PERCENTAGE = 'PERCENTAGE');
                })(f || (f = {}));
                const y = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                    O =
                        (R.images.gui.maps.icons.dogtags,
                        R.strings.dogtags.component,
                        w.Engraving,
                        w.Background,
                        w.Engraving,
                        w.Background,
                        'commonTooltipStyles_base_1f'),
                    T = 'commonTooltipStyles_title_de',
                    k = 'commonTooltipStyles_listHeader_5f',
                    P = 'commonTooltipStyles_headerLevel_bb',
                    S = 'commonTooltipStyles_headerValue_c0',
                    L = 'commonTooltipStyles_separator_6a',
                    M = 'commonTooltipStyles_list_84',
                    C = 'commonTooltipStyles_levelRow_50',
                    N = 'commonTooltipStyles_current_83',
                    A = 'commonTooltipStyles_level_20',
                    x = 'commonTooltipStyles_value_4b',
                    D = 'commonTooltipStyles_next_21',
                    I = R.strings.dogtags.customization.tooltip.level(),
                    F = R.strings.dogtags.customization.tooltip.value(),
                    V = () => {
                        const e = window.model,
                            t = e.currentGrade,
                            n = e.gradeValues,
                            i = e.componentTitle,
                            r = e.progressNumberType;
                        return o().createElement(
                            'div',
                            { className: O },
                            o().createElement('div', { className: T }, i),
                            o().createElement(
                                'div',
                                { className: k },
                                o().createElement('div', { className: P }, I),
                                o().createElement('div', { className: S }, F),
                            ),
                            o().createElement('div', { className: L }),
                            o().createElement(
                                'div',
                                { className: M },
                                n.map((e, n) => {
                                    const i = c()(C, n === t && N, n === t + 1 && D);
                                    return o().createElement(
                                        'div',
                                        { key: `${n}-${e.value}`, className: i },
                                        o().createElement('div', { className: A }, y[n]),
                                        o().createElement(
                                            'div',
                                            { className: x },
                                            ((e, t = f.NUMBER) => {
                                                const n = m.Z5.getRealFormat(e, m.Gr.WO_ZERO_DIGITS).replace(
                                                    /\s/g,
                                                    ' ',
                                                );
                                                return t === f.PERCENTAGE ? `${n} %` : n;
                                            })(e.value, r) || 0,
                                        ),
                                    );
                                }),
                            ),
                        );
                    },
                    U = () => o().createElement(E, null, o().createElement(V, null));
                engine.whenReady.then(() => {
                    a().render(o().createElement(U, null), document.getElementById('root'));
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
        (__webpack_require__.O = (e, t, n, i) => {
            if (!t) {
                var o = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, i] = deferred[c], r = !0, a = 0; a < t.length; a++)
                        (!1 & i || o >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((r = !1), i < o && (o = i));
                    if (r) {
                        deferred.splice(c--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > i; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, i];
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
        (__webpack_require__.j = 561),
        (() => {
            var e = { 561: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var i,
                        o,
                        [r, a, s] = n,
                        c = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (i in a) __webpack_require__.o(a, i) && (__webpack_require__.m[i] = a[i]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); c < r.length; c++)
                        (o = r[c]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [994], () => __webpack_require__(412));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
