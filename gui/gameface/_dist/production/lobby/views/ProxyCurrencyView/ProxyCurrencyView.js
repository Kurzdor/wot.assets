(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                n.r(t),
                    n.d(t, { mouse: () => d, off: () => c, on: () => s, onResize: () => i, onScaleUpdated: () => a });
                var r = n(2472),
                    o = n(1176);
                const i = (0, r.E)('clientResized'),
                    a = (0, r.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    c = (e, t) => engine.off(e, t),
                    l = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    d = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, o.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, o.R)(!0);
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
                                : (0, o.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const i = `mouse${t}`,
                                            a = l[t]((e) => n([e, 'outside']));
                                        function s(e) {
                                            n([e, 'inside']);
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
                                })(n)),
                                t
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
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => o.G,
                        setRTPC: () => o.E,
                    });
                var r = n(527),
                    o = n(2493);
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
            1176: (e, t, n) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            2493: (e, t, n) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function o(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => o, G: () => r });
            },
            2472: (e, t, n) => {
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
            3138: (e, t, n) => {
                n.d(t, { O: () => i });
                var r = n(5959),
                    o = n(514);
                const i = { view: n(7641), client: r, sound: o.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => a });
                var r = n(5959);
                const o = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(o).reduce((e, t) => ((e[t] = () => (0, r.playSound)(o[t])), e), {}),
                    a = { play: Object.assign({}, i, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, t, n) => {
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function o(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => o, getTextureUrl: () => r });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => o });
                var r = n(2472);
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
            7641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => c,
                        children: () => r,
                        displayStatus: () => o.W,
                        displayStatusIs: () => P,
                        events: () => i.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => T,
                        freezeTextureBeforeResize: () => h,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => k,
                        getScale: () => p,
                        getSize: () => v,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => O,
                        isFocused: () => g,
                        pxToRem: () => b,
                        remToPx: () => m,
                        resize: () => w,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => M,
                    });
                var r = n(3722),
                    o = n(6112),
                    i = n(6538),
                    a = n(8566);
                const s = 15;
                function c(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function d(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function u(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function w(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: m(t.x), y: m(t.y) };
                }
                function h() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function m(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function T() {
                    viewEnv.forceTriggerMouseMove();
                }
                function k() {
                    return viewEnv.getShowingStatus();
                }
                const P = Object.keys(o.W).reduce(
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
                    M = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => i });
                const r = ['args'],
                    o = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((o = i),
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
                    i = {
                        close(e) {
                            o('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            o(64);
                        },
                        move(e) {
                            o(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
                let r, o;
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
                    })(o || (o = {}));
            },
            1358: (e, t, n) => {
                n.d(t, { Z: () => i });
                var r = n(3138);
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
                        const i = r.O.view.addModelObserver(e, n, o);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
            9916: (e, t, n) => {
                n.d(t, { B3: () => l, Z5: () => a.Z5, B0: () => s, ry: () => b });
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
                const o = r;
                var i = n(1358),
                    a = n(8613);
                let s;
                var c;
                ((c = s || (s = {}))[(c.UNDEFINED = 0)] = 'UNDEFINED'),
                    (c[(c.TOOLTIP = 1)] = 'TOOLTIP'),
                    (c[(c.POP_OVER = 2)] = 'POP_OVER'),
                    (c[(c.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (c[(c.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (c[(c.MOVE = 16)] = 'MOVE'),
                    (c[(c.CLOSE = 32)] = 'CLOSE'),
                    (c[(c.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var v = n(5521),
                    w = n(3138);
                const E = ['args'];
                function h(e, t, n, r, o, i, a) {
                    try {
                        var s = e[i](a),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(r, o);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                    return new Promise(function (r, o) {
                                        var i = e.apply(t, n);
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
                            return t.apply(this, arguments);
                        };
                    })(),
                    m = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, E);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    f = () => m(s.CLOSE),
                    g = (e, t) => {
                        e.keyCode === v.n.ESCAPE && t();
                    };
                var y = n(7572);
                const O = o.instance,
                    T = {
                        DataTracker: i.Z,
                        ViewModel: y.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: d,
                        TimeFormatType: u,
                        DateFormatType: _,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => m(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => m(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            m(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, o = R.invalid('resId'), i) => {
                            const a = w.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                l = c.x,
                                d = c.y,
                                u = c.width,
                                _ = c.height,
                                v = {
                                    x: w.O.view.pxToRem(l) + a.x,
                                    y: w.O.view.pxToRem(d) + a.y,
                                    width: w.O.view.pxToRem(u),
                                    height: w.O.view.pxToRem(_),
                                };
                            m(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: p(v),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => g(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, f);
                        },
                        handleViewEvent: m,
                        onBindingsReady: b,
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
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const o = Object.prototype.toString.call(t[r]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < o.length; t++) n[r].push({ value: e(o[t].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: O,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = T;
            },
            8613: (e, t, n) => {
                n.d(t, { Z5: () => r, cy: () => o });
                const r = {
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
            3266: (e, t, n) => {
                var r = n(6179),
                    o = n.n(r),
                    i = n(493),
                    a = n.n(i),
                    s = n(9916);
                class c extends o().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? s.B3.GOLD : s.B3.INTEGRAL;
                        const t = s.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                c.defaultProps = { format: 'integral' };
                const l = [
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
                function d(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const u = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: s.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    _ = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            o = e.args,
                            i = e.onMouseEnter,
                            a = e.onMouseLeave,
                            s = e.onMouseDown,
                            c = e.onClick,
                            _ = e.ignoreShowDelay,
                            v = void 0 !== _ && _,
                            w = e.ignoreMouseClick,
                            E = void 0 !== w && w,
                            h = e.decoratorId,
                            p = void 0 === h ? 0 : h,
                            b = e.isEnabled,
                            m = void 0 === b || b,
                            f = e.targetId,
                            g = void 0 === f ? 0 : f,
                            y = e.onShow,
                            O = e.onHide,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, l);
                        const k = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            P = (0, r.useMemo)(
                                () =>
                                    g ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            r = R.invalid('resId');
                                        return (
                                            t &&
                                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (r = window.subViews[n].id)),
                                            { caller: n, stack: t, resId: r }
                                        );
                                    })().resId,
                                [g],
                            ),
                            M = (0, r.useCallback)(() => {
                                (k.current.isVisible && k.current.timeoutId) ||
                                    (u(n, p, { isMouseEvent: !0, on: !0, arguments: d(o) }, P),
                                    y && y(),
                                    (k.current.isVisible = !0));
                            }, [n, p, o, P, y]),
                            C = (0, r.useCallback)(() => {
                                if (k.current.isVisible || k.current.timeoutId) {
                                    const e = k.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (k.current.timeoutId = 0)),
                                        u(n, p, { on: !1 }, P),
                                        k.current.isVisible && O && O(),
                                        (k.current.isVisible = !1);
                                }
                            }, [n, p, P, O]),
                            S = (0, r.useCallback)((e) => {
                                k.current.isVisible &&
                                    ((k.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (k.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(k.current.prevTarget) && C();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = k.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', S, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', S, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === m && C();
                            }, [m, C]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', C),
                                    () => {
                                        window.removeEventListener('mouseleave', C), C();
                                    }
                                ),
                                [C],
                            ),
                            m
                                ? (0, r.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((L = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((k.current.timeoutId = window.setTimeout(M, v ? 100 : 400)),
                                                          i && i(e),
                                                          L && L(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  C(), null == a || a(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === E && C(), null == c || c(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === E && C(), null == s || s(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          T,
                                      ),
                                  )
                                : t
                        );
                        var L;
                    };
                var v = n(3403);
                function w() {
                    return !1;
                }
                console.log;
                var E = n(9174),
                    h = n(3138);
                function p(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const b = (e) => (0 === e ? window : window.subViews.get(e)),
                    m = ((e, t) => {
                        const n = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: i, children: a, mocks: s }) {
                                const c = (0, r.useRef)([]),
                                    l = (e, n, r) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = b,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = o.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const o = n(t),
                                                        i = r.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const s = 'string' == typeof i ? `${r}.${i}` : r,
                                                            c = h.O.view.addModelObserver(s, t, !0);
                                                        return o.set(c, n), e && n(a(i)), c;
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, t) => {
                                                        const n = a(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = a(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return p(e, t);
                                                                                var n = {}.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? p(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(o.keys());
                                                            !(e = n()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            a =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (o = null == r ? void 0 : r.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : a.readByPath(t),
                                            l = (e) => c.current.push(e),
                                            d = (({ observableModel: e }) => ({ root: e.object() }))({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: a,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const r = null != n ? n : s(t),
                                                            o = E.LO.box(r, { equals: w });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, E.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const r = null != n ? n : s(t),
                                                            o = E.LO.box(r, { equals: w });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, E.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const r = s(n);
                                                        if (Array.isArray(t)) {
                                                            const o = t.reduce(
                                                                (e, t) => ((e[t] = E.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, E.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                o[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = t,
                                                                i = Object.entries(o),
                                                                s = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = E.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, E.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                s[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            u = { mode: e, model: d, externalModel: a, cleanup: l };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && r ? r.controls(u) : t(u),
                                            externalModel: a,
                                            mode: e,
                                        };
                                    },
                                    d = (0, r.useRef)(!1),
                                    u = (0, r.useState)(e),
                                    _ = u[0],
                                    v = u[1],
                                    m = (0, r.useState)(() => l(e, i, s)),
                                    f = m[0],
                                    g = m[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        d.current ? g(l(_, i, s)) : (d.current = !0);
                                    }, [s, _, i]),
                                    (0, r.useEffect)(() => {
                                        v(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    o().createElement(n.Provider, { value: f }, a)
                                );
                            },
                            () => (0, r.useContext)(n),
                        ];
                    })(0, ({ externalModel: e }) => ({ click: e.createCallbackNoArgs('onGotoShopBtnClicked') })),
                    f = m[0],
                    g = m[1],
                    y = (0, v.Pi)(() => {
                        const e = g(),
                            t = e.model,
                            n = e.controls.click,
                            r = t.root.get().balance;
                        return o().createElement(
                            'div',
                            { className: 'App_base_1d' },
                            o().createElement(
                                'div',
                                {
                                    className: 'App_wrapper_f7',
                                    onClick: () => {
                                        var e;
                                        (e = 'play'),
                                            engine.call('PlaySound', e).catch((t) => {
                                                console.error('[lib/sounds.js] playSound(', e, '): ', t);
                                            }),
                                            n();
                                    },
                                },
                                o().createElement(
                                    _,
                                    {
                                        contentId: R.views.battle_royale.lobby.tooltips.BrCoinTooltipView('resId'),
                                        ignoreShowDelay: !0,
                                    },
                                    o().createElement(
                                        'div',
                                        { className: 'App_currency_29' },
                                        o().createElement('div', { className: 'App_icon_9d' }),
                                        o().createElement(
                                            'div',
                                            { className: 'App_value_b4' },
                                            o().createElement(c, { value: r }),
                                        ),
                                    ),
                                ),
                                o().createElement('div', { className: 'App_background_0f' }),
                                o().createElement(
                                    'div',
                                    { className: 'App_link_2e' },
                                    R.strings.battle_royale.proxyPanel.store(),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    a().render(o().createElement(f, null, o().createElement(y, null)), document.getElementById('root'));
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
                var o = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, r] = deferred[c], i = !0, a = 0; a < t.length; a++)
                        (!1 & r || o >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((i = !1), r < o && (o = r));
                    if (i) {
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
        (__webpack_require__.j = 708),
        (() => {
            var e = { 708: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        o,
                        [i, a, s] = n,
                        c = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); c < i.length; c++)
                        (o = i[c]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(3266));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
