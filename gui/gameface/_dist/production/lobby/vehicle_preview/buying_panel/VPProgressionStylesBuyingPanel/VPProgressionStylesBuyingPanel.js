(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                n.r(t),
                    n.d(t, { mouse: () => d, off: () => o, on: () => l, onResize: () => a, onScaleUpdated: () => s });
                var i = n(472),
                    r = n(176);
                const a = (0, i.E)('clientResized'),
                    s = (0, i.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    c = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        s = c[t]((e) => n([e, 'outside']));
                                    function l(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, l),
                                        i(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(a, l),
                                                (e.listeners -= 1),
                                                i(),
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
                            (e.enabled = !1), i();
                        },
                        enable() {
                            (e.enabled = !0), i();
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
            959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => i,
                        getMouseGlobalPosition: () => s,
                        getSize: () => a,
                        graphicsQuality: () => l,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var i = n(527),
                    r = n(993);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const l = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, n) => {
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => i });
            },
            993: (e, t, n) => {
                function i(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => i });
            },
            472: (e, t, n) => {
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
            138: (e, t, n) => {
                n.d(t, { O: () => a });
                var i = n(959),
                    r = n(514);
                const a = { view: n(641), client: i, sound: r.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => s });
                var i = n(959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, i.playSound)(r[t])), e), {}),
                    s = { play: Object.assign({}, a, { sound: i.playSound }), setRTPC: i.setRTPC };
            },
            722: (e, t, n) => {
                function i(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${i(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => i });
            },
            112: (e, t, n) => {
                n.d(t, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, n) => {
                n.d(t, { U: () => r });
                var i = n(472);
                const r = {
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
            641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => o,
                        children: () => i,
                        displayStatus: () => r.W,
                        displayStatusIs: () => T,
                        events: () => a.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => y,
                        freezeTextureBeforeResize: () => w,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => O,
                        getScale: () => v,
                        getSize: () => h,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => x,
                        isFocused: () => p,
                        pxToRem: () => b,
                        remToPx: () => E,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => S,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => L,
                    });
                var i = n(722),
                    r = n(112),
                    a = n(538),
                    s = n(566);
                const l = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, l);
                }
                function d(e, t, n, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, i);
                }
                function u(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, l);
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function w() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function S() {
                    return viewEnv.setEventHandled();
                }
                function x() {
                    return viewEnv.isEventHandled();
                }
                function y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function O() {
                    return viewEnv.getShowingStatus();
                }
                const T = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
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
                    L = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, n) => {
                n.d(t, { qP: () => c });
                const i = ['args'];
                const r = 2,
                    a = 16,
                    s = 32,
                    l = 64,
                    o = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var i in e)
                                        if ({}.hasOwnProperty.call(e, i)) {
                                            if (t.indexOf(i) >= 0) continue;
                                            n[i] = e[i];
                                        }
                                    return n;
                                })(t, i);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    c = {
                        close(e) {
                            o('popover' === e ? r : s);
                        },
                        minimize() {
                            o(l);
                        },
                        move(e) {
                            o(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var i = n(138);
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
                        const a = i.O.view.addModelObserver(e, n, r);
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
                            const i = this._callbacks[n];
                            void 0 !== i && i(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(976);
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
            976: (e, t, n) => {
                n.d(t, { Sw: () => a.Z, ry: () => b });
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
                const r = i;
                var a = n(358);
                var s = n(613);
                let l;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(l || (l = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let _, h;
                !(function (e) {
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
                })(_ || (_ = {})),
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
                    })(h || (h = {}));
                var m = n(138);
                const g = ['args'];
                function w(e, t, n, i, r, a, s) {
                    try {
                        var l = e[a](s),
                            o = l.value;
                    } catch (e) {
                        return void n(e);
                    }
                    l.done ? t(o) : Promise.resolve(o).then(i, r);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (i, r) {
                                        var a = e.apply(t, n);
                                        function s(e) {
                                            w(a, i, r, s, l, 'next', e);
                                        }
                                        function l(e) {
                                            w(a, i, r, s, l, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var i in e)
                                        if ({}.hasOwnProperty.call(e, i)) {
                                            if (t.indexOf(i) >= 0) continue;
                                            n[i] = e[i];
                                        }
                                    return n;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((i = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    f = () => E(l.CLOSE),
                    p = (e, t) => {
                        e.keyCode === _.ESCAPE && t();
                    };
                var S = n(572);
                const x = r.instance,
                    y = {
                        DataTracker: a.Z,
                        ViewModel: S.Z,
                        ViewEventType: l,
                        NumberFormatType: o,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => E(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => E(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, i, r = R.invalid('resId'), a) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                o = n.getBoundingClientRect(),
                                c = o.x,
                                d = o.y,
                                u = o.width,
                                _ = o.height,
                                h = {
                                    x: m.O.view.pxToRem(c) + s.x,
                                    y: m.O.view.pxToRem(d) + s.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(_),
                                };
                            E(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: v(h),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => p(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, f);
                        },
                        handleViewEvent: E,
                        onBindingsReady: b,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const r = Object.prototype.toString.call(t[i]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[i];
                                        n[i] = [];
                                        for (let t = 0; t < r.length; t++) n[i].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[i] = e(t[i]))
                                            : (n[i] = t[i]);
                                }
                            return n;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = y;
            },
            613: (e, t, n) => {
                n.d(t, { Z5: () => i, cy: () => r });
                const i = {
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
            286: (e, t, n) => {
                var i = n(179),
                    r = n.n(i),
                    a = n(493),
                    s = n.n(a);
                const l = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var o = n(138);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var d;
                function u(e, t, n) {
                    const i = (function (e, t) {
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
                        })(e, n),
                        r = (function (e, t) {
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
                        })(t, n),
                        a = Math.min(i, r);
                    return {
                        extraLarge: a === n.extraLarge.weight,
                        large: a === n.large.weight,
                        medium: a === n.medium.weight,
                        small: a === n.small.weight,
                        extraSmall: a === n.extraSmall.weight,
                        extraLargeWidth: i === n.extraLarge.weight,
                        largeWidth: i === n.large.weight,
                        mediumWidth: i === n.medium.weight,
                        smallWidth: i === n.small.weight,
                        extraSmallWidth: i === n.extraSmall.weight,
                        extraLargeHeight: r === n.extraLarge.weight,
                        largeHeight: r === n.large.weight,
                        mediumHeight: r === n.medium.weight,
                        smallHeight: r === n.small.weight,
                        extraSmallHeight: r === n.extraSmall.weight,
                    };
                }
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
                })(d || (d = {}));
                const _ = o.O.client.getSize('rem'),
                    h = _.width,
                    m = _.height,
                    g = Object.assign({ width: h, height: m }, u(h, m, c)),
                    w = (0, i.createContext)(g),
                    v = ['children'];
                const b = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var i in e)
                                if ({}.hasOwnProperty.call(e, i)) {
                                    if (t.indexOf(i) >= 0) continue;
                                    n[i] = e[i];
                                }
                            return n;
                        })(e, v);
                    const r = (0, i.useContext)(w),
                        a = r.extraLarge,
                        s = r.large,
                        o = r.medium,
                        c = r.small,
                        d = r.extraSmall,
                        u = r.extraLargeWidth,
                        _ = r.largeWidth,
                        h = r.mediumWidth,
                        m = r.smallWidth,
                        g = r.extraSmallWidth,
                        b = r.extraLargeHeight,
                        E = r.largeHeight,
                        f = r.mediumHeight,
                        p = r.smallHeight,
                        S = r.extraSmallHeight,
                        x = { extraLarge: b, large: E, medium: f, small: p, extraSmall: S };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && a) return t;
                        if (n.large && s) return t;
                        if (n.medium && o) return t;
                        if (n.small && c) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && u) return l(t, n, x);
                        if (n.largeWidth && _) return l(t, n, x);
                        if (n.mediumWidth && h) return l(t, n, x);
                        if (n.smallWidth && m) return l(t, n, x);
                        if (n.extraSmallWidth && g) return l(t, n, x);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && b) return t;
                            if (n.largeHeight && E) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && p) return t;
                            if (n.extraSmallHeight && S) return t;
                        }
                    }
                    return null;
                };
                b.defaultProps = {
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
                (0, i.memo)(b);
                const E = (e) => {
                        const t = (0, i.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    f = ({ children: e }) => {
                        const t = (0, i.useContext)(w),
                            n = (0, i.useState)(t),
                            a = n[0],
                            s = n[1],
                            l = (0, i.useCallback)((e, t) => {
                                const n = o.O.view.pxToRem(e),
                                    i = o.O.view.pxToRem(t);
                                s(Object.assign({ width: n, height: i }, u(n, i, c)));
                            }, []),
                            d = (0, i.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                l(e.width, e.height);
                            }, [l]);
                        E(() => {
                            o.O.client.events.on('clientResized', l), o.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, i.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', l),
                                        o.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [l, d],
                            );
                        const _ = (0, i.useMemo)(() => Object.assign({}, a), [a]);
                        return r().createElement(w.Provider, { value: _ }, e);
                    };
                var p = n(483),
                    S = n.n(p);
                function x(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const y = (e) => ({ transitionDelay: e / 20 + 's' }),
                    O = 'SwitcherBullet_base_3d',
                    T = 'SwitcherBullet_container_6e',
                    k = 'SwitcherBullet_base__selected_70',
                    L = 'SwitcherBullet_container__text_b3',
                    P = 'SwitcherBullet_finishedHover_37',
                    C = 'SwitcherBullet_base__finished_dd',
                    M = 'SwitcherBullet_base__hover_2a',
                    N = 'SwitcherBullet_iconSmall_b7',
                    D = 'SwitcherBullet_base__afterCurrent_cd',
                    W = 'SwitcherBullet_iconBig_dc',
                    A = 'SwitcherBullet_base__currentSelected_24',
                    H = 'SwitcherBullet_iconText_11',
                    I = 'SwitcherBullet_iconTextGlow_25',
                    B = 'SwitcherBullet_clickArea_ed',
                    F = 'SwitcherBullet_base__disabled_b9',
                    U = 'SwitcherBullet_disabled_b5',
                    V = 'SwitcherBullet_number_b4',
                    q = 'SwitcherBullet_currentText_f9',
                    j = 'SwitcherBullet_text_37',
                    z = 'SwitcherBullet_texture_1e',
                    K = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: n,
                        previousSelectedIndex: a,
                        onChange: s,
                        currentIndex: l,
                        currentText: o,
                        isDisabled: c = !1,
                        mouseEnterSound: d,
                        clickSound: u,
                    }) => {
                        const _ = t !== n,
                            h = (0, i.useState)(!1),
                            m = h[0],
                            g = h[1],
                            w = (0, i.useCallback)(() => {
                                g(!0), _ && x(d);
                            }, [_, d, g]),
                            v = (0, i.useCallback)(() => {
                                _ && (x(u), s(e));
                            }, [_, u, e, s]),
                            b = (0, i.useCallback)(() => {
                                g(!1);
                            }, [g]),
                            E = l || 0,
                            f = S()(
                                O,
                                t === n && k,
                                t === n && t === E && A,
                                t > E && t !== n && D,
                                t <= E && C,
                                m && M,
                                c && F,
                            ),
                            p = (0, i.useMemo)(
                                () =>
                                    ((e, t, n) =>
                                        e === t
                                            ? y(0)
                                            : e === n
                                              ? y(Math.abs(e - t) - 2)
                                              : (n > t && e > t && e < n) || (n < t && e < t && e > n)
                                                ? y(Math.abs(e - t) - 1)
                                                : void 0)(t, a, n),
                                [t, a, n],
                            ),
                            L = (0, i.useCallback)(
                                () => ((t === n && t === E) || t === n ? 'big' : 'small'),
                                [t, n, E],
                            ),
                            H = (0, i.useMemo)(() => {
                                const e = R.images.gui.maps.icons.components.switcher.numbers,
                                    n = t > E ? 'light' : 'dark';
                                return Object.assign({}, p, {
                                    backgroundImage: `url(${e.$dyn(`number_${t}_${L()}_${n}`)})`,
                                });
                            }, [t, E, p, L]);
                        return r().createElement(
                            'div',
                            { className: f },
                            r().createElement(
                                'div',
                                { className: T, style: p },
                                r().createElement('div', { className: P, style: p }),
                                r().createElement('div', { className: N, style: p }),
                                r().createElement('div', { className: W, style: p }),
                                r().createElement('div', { className: U }),
                                r().createElement('div', { className: V, style: H }),
                                r().createElement('div', {
                                    className: B,
                                    style: p,
                                    onClick: v,
                                    onMouseEnter: w,
                                    onMouseLeave: b,
                                }),
                            ),
                            o && t === l && r().createElement('div', { className: q }, o),
                        );
                    },
                    G = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: n,
                        previousSelectedIndex: a,
                        onChange: s,
                        currentIndex: l = 0,
                        isDisabled: o = !1,
                        mouseEnterSound: c,
                        clickSound: d,
                        styleID: u,
                    }) => {
                        const _ = t === n,
                            h = (0, i.useState)(!1),
                            m = h[0],
                            g = h[1],
                            w = (0, i.useCallback)(() => {
                                g(!0), _ || x(c);
                            }, [_, c, g]),
                            v = (0, i.useCallback)(() => {
                                _ || (x(d), s(e));
                            }, [_, d, e, s]),
                            b = (0, i.useCallback)(() => {
                                g(!1);
                            }, [g]),
                            E = R.strings.vehicle_customization.style_switcher.$dyn(`style_${u}`).$dyn(`level${e}`),
                            f = S()(O, _ && k, _ && t === l && A, t > l && t !== n && D, t <= l && C, m && M, o && F),
                            p = (0, i.useMemo)(
                                () =>
                                    ((e, t, n) =>
                                        e === t
                                            ? y(0)
                                            : e === n
                                              ? y(Math.abs(e - t) - 2)
                                              : (n > t && e > t && e < n) || (n < t && e < t && e > n)
                                                ? y(Math.abs(e - t) - 1)
                                                : void 0)(t, a, n),
                                [t, a, n],
                            ),
                            P = S()(T, L);
                        return r().createElement(
                            'div',
                            { className: f },
                            r().createElement(
                                'div',
                                { className: P, style: p },
                                _ && r().createElement('div', { className: z }),
                                !_ && r().createElement('div', { className: I }),
                                r().createElement('div', { className: H, style: p }),
                                r().createElement('div', { className: j }, E),
                                r().createElement('div', {
                                    className: B,
                                    style: p,
                                    onClick: v,
                                    onMouseEnter: w,
                                    onMouseLeave: b,
                                }),
                            ),
                        );
                    },
                    $ = 'SwitcherSeparator_base_c1',
                    Y = 'SwitcherSeparator_base__isBeforeSelectedBullet_e0',
                    Z = 'SwitcherSeparator_base__notAnimated_58',
                    X = 'SwitcherSeparator_base__scaled_57',
                    Q = 'SwitcherSeparator_base__rightTransformOrigin_16',
                    J = 'SwitcherSeparator_base__leftTransformOrigin_7f',
                    ee = 'SwitcherSeparator_base__transitionTransformOrigin_b2',
                    te = ({ index: e, selectedIndex: t, previousSelectedIndex: n, isAnimated: i = !0 }) => {
                        const a = ((e, t, n) =>
                                e === t + 1 || e === t - 1
                                    ? y(0)
                                    : e === n + 1 || e === n - 1
                                      ? y(Math.abs(n - t) - 2)
                                      : (n > t && e > t && e < n + 1) || (n < t && e < t && e > n - 1)
                                        ? y(Math.abs(e - t) - 1)
                                        : void 0)(e, n, t),
                            s = 1 === Math.abs(e - t),
                            l = 1 === Math.abs(e - n),
                            o = ((e, t, n, i) =>
                                e === n + 1 || (e === t + 1 && !i)
                                    ? Q
                                    : e === n - 1 || (e === t - 1 && !i)
                                      ? J
                                      : void 0)(e, n, t, s),
                            c = S()(
                                $,
                                i && e < t && Y,
                                i && l && s && ee,
                                i && (e === t + 1 || e === t - 1) && X,
                                i && o,
                                !i && Z,
                            );
                        return r().createElement('div', { className: c, style: a });
                    },
                    ne = (e, t, n) => Math.min(Math.max(e, t), n),
                    ie = {
                        base: 'Switcher_base_7a',
                        base__hasCurrentText: 'Switcher_base__hasCurrentText_6f',
                        base__small: 'Switcher_base__small_6a',
                        base__isVisible: 'Switcher_base__isVisible_43',
                    };
                let re;
                !(function (e) {
                    (e[(e.digital = 0)] = 'digital'), (e[(e.text = 1)] = 'text');
                })(re || (re = {}));
                const ae = (e, t) => ('number' == typeof e ? 2 * (e - t) : void 0);
                let se;
                !(function (e) {
                    e.small = 'small';
                })(se || (se = {}));
                const le = ({
                        numberOfBullets: e,
                        selectedNumber: t,
                        onChange: n,
                        currentText: a,
                        currentNumber: s,
                        startNumber: l = 1,
                        isBulletsBeforeCurrentDisabled: o = !1,
                        size: c,
                        mouseEnterSound: d = 'highlight',
                        clickSound: u = 'play',
                        isArabic: _ = !1,
                        hasLightShadows: h = !1,
                        styleID: m = 0,
                        switcherType: g = re.digital,
                    }) => {
                        const w = (0, i.useState)(!1),
                            v = w[0],
                            b = w[1];
                        (0, i.useEffect)(
                            () =>
                                ((e, t) => {
                                    let n;
                                    const i = setTimeout(() => {
                                        n = e();
                                    }, t);
                                    return () => {
                                        'function' == typeof n && n(), clearTimeout(i);
                                    };
                                })(() => b(!0), 0),
                            [],
                        );
                        const E = l + e - 1,
                            f = ne(t, o && s ? s : l, E),
                            p = 'number' == typeof s ? ne(s, l, E) : void 0,
                            x = ae(f, l),
                            y = ae(p, l),
                            O = (0, i.useRef)(x);
                        (0, i.useEffect)(() => {
                            O.current = x;
                        });
                        const T = O.current,
                            k = S()(
                                ie.base,
                                a && void 0 !== y && ie.base__hasCurrentText,
                                c && ie[`base__${c}`],
                                v && ie.base__isVisible,
                            ),
                            L = (0, i.useMemo)(
                                () =>
                                    ((e, t) => {
                                        const n = [];
                                        for (let i = e; i <= t; i++) n.push(i);
                                        return n;
                                    })(l, E),
                                [E, l],
                            ),
                            P = g === re.digital;
                        return r().createElement(
                            'div',
                            { className: k },
                            L.map((e, t) => {
                                const i = 2 * t,
                                    s = !(!o || !y) && i < y;
                                return r().createElement(
                                    r().Fragment,
                                    { key: t },
                                    t > 0 &&
                                        r().createElement(te, {
                                            index: i - 1,
                                            selectedIndex: x,
                                            previousSelectedIndex: T,
                                            isAnimated: P,
                                        }),
                                    P
                                        ? r().createElement(K, {
                                              index: i,
                                              selectedIndex: x,
                                              previousSelectedIndex: T,
                                              numberToDisplay: e,
                                              currentIndex: y,
                                              currentText: a,
                                              onChange: n,
                                              isDisabled: s,
                                              mouseEnterSound: d,
                                              clickSound: u,
                                              isArabic: _,
                                              hasLightShadows: h,
                                          })
                                        : r().createElement(G, {
                                              index: i,
                                              selectedIndex: x,
                                              previousSelectedIndex: T,
                                              numberToDisplay: e,
                                              currentIndex: y,
                                              onChange: n,
                                              isDisabled: s,
                                              mouseEnterSound: d,
                                              clickSound: u,
                                              hasLightShadows: h,
                                              styleID: m,
                                          }),
                                );
                            }),
                        );
                    },
                    oe = (e = 1) => {
                        const t = new Error().stack;
                        let n,
                            i = R.invalid('resId');
                        return (
                            t &&
                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== n &&
                                    window.subViews[n] &&
                                    (i = window.subViews[n].id)),
                            { caller: n, stack: t, resId: i }
                        );
                    },
                    ce = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var de = n(976);
                const ue = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    _e = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    he = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const i = ce(`${e}.${n}`, window);
                                return ue(i) ? t(e, n, i) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    me = (e) => {
                        const t = ((e) => {
                                const t = oe(),
                                    n = t.caller,
                                    i = t.resId,
                                    r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: r, modelPath: _e(r, e || ''), resId: i };
                            })(),
                            n = t.modelPrefix,
                            i = e.split('.');
                        if (i.length > 0) {
                            const e = [i[0]];
                            return (
                                i.reduce((t, i) => {
                                    const r = ce(_e(n, `${t}.${i}`), window);
                                    return ue(r) ? (e.push(r.id), `${t}.${i}.value`) : (e.push(i), `${t}.${i}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    ge = de.Sw.instance;
                let we;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(we || (we = {}));
                const ve = (e = 'model', t = we.Deep) => {
                        const n = (0, i.useState)(0),
                            r = (n[0], n[1]),
                            a = (0, i.useMemo)(() => oe(), []),
                            s = a.caller,
                            l = a.resId,
                            o = (0, i.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                                [s, e],
                            ),
                            c = (0, i.useState)(() =>
                                ((e) => {
                                    const t = ce(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return ue(t) ? t.value : t;
                                })(he(o)),
                            ),
                            d = c[0],
                            u = c[1],
                            _ = (0, i.useRef)(-1);
                        return (
                            E(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? we.Deep : we.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== we.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === we.Deep
                                                ? (e === d && r((e) => e + 1), u(e))
                                                : u(Object.assign([], e));
                                        },
                                        i = me(e);
                                    _.current = ge.addCallback(i, n, l, t === we.Deep);
                                }
                            }),
                            (0, i.useEffect)(() => {
                                if (t !== we.None)
                                    return () => {
                                        ge.removeCallback(_.current, l);
                                    };
                            }, [l, t]),
                            d
                        );
                    },
                    be = {
                        base: 'Content_base_47',
                        base__shown: 'Content_base__shown_3f',
                        content: 'Content_content_54',
                        notification: 'Content_notification_6e',
                        base__small: 'Content_base__small_fa',
                        notificationIcon: 'Content_notificationIcon_f8',
                    },
                    Ee = R.strings.vehicle_preview.buyingPanel.progressionStyles.currentLevel(),
                    fe = () => {
                        const e = ve(),
                            t = e.currentLevel,
                            n = e.selectedLevel,
                            a = e.isReady,
                            s = e.onChange,
                            l = e.numberOfBullets,
                            o = void 0 === l ? 4 : l,
                            c = e.isBulletsBeforeCurrentDisabled,
                            d = e.switcherType,
                            u = e.styleID,
                            _ = (0, i.useContext)(w),
                            h = _.smallHeight || _.extraSmallHeight,
                            m = _.smallWidth || _.extraSmallWidth,
                            g =
                                d === re.text
                                    ? R.strings.vehicle_preview.buyingPanel.progressionStyles.notification.rewind_enable.text()
                                    : R.strings.vehicle_preview.buyingPanel.progressionStyles.notification.text(),
                            v = (0, i.useCallback)((e) => s({ selectedLevel: e }), [s]),
                            b = S()(be.base, h && m && be.base__small, a && be.base__shown),
                            E = S()(be.content, d === re.text && be.content__text);
                        return (
                            (0, i.useEffect)(
                                () =>
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
                                        h && m && viewEnv.setInputArea(176, 50, 400, 150);
                                    }),
                                [h, m],
                            ),
                            r().createElement(
                                'div',
                                { className: b },
                                r().createElement(
                                    'div',
                                    { className: E },
                                    r().createElement('div', { className: be.notification }, g),
                                    r().createElement(le, {
                                        numberOfBullets: o,
                                        currentNumber: t,
                                        selectedNumber: n,
                                        onChange: v,
                                        currentText: systemLocale.toUpperCase(Ee),
                                        clickSound: 'bp_style_reward_view',
                                        isBulletsBeforeCurrentDisabled: c,
                                        switcherType: d,
                                        styleID: u,
                                    }),
                                ),
                            )
                        );
                    },
                    pe = () => r().createElement(f, null, r().createElement(fe, null));
                engine.whenReady.then(() => {
                    s().render(r().createElement(pe, null), document.getElementById('root'));
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
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, n, i] = deferred[o], a = !0, s = 0; s < t.length; s++)
                        (!1 & i || r >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((a = !1), i < r && (r = i));
                    if (a) {
                        deferred.splice(o--, 1);
                        var l = n();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > i; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, n, i];
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
        (__webpack_require__.j = 469),
        (() => {
            var e = { 469: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var i,
                        r,
                        [a, s, l] = n,
                        o = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (i in s) __webpack_require__.o(s, i) && (__webpack_require__.m[i] = s[i]);
                        if (l) var c = l(__webpack_require__);
                    }
                    for (t && t(n); o < a.length; o++)
                        (r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [294], () => __webpack_require__(286));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
