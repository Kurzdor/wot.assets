(() => {
    'use strict';
    var __webpack_modules__ = {
            329: (e, n, t) => {
                let r, i, _;
                t.d(n, { V2: () => i, et: () => r, we: () => _ }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(r || (r = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(i || (i = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(_ || (_ = {}));
            },
            527: (e, n, t) => {
                t.r(n),
                    t.d(n, { mouse: () => l, off: () => s, on: () => o, onResize: () => _, onScaleUpdated: () => a });
                var r = t(472),
                    i = t(176);
                const _ = (0, r.E)('clientResized'),
                    a = (0, r.E)('self.onScaleUpdated'),
                    o = (e, n) => engine.on(e, n),
                    s = (e, n) => engine.off(e, n),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const l = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && (0, i.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, i.R)(!0);
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
                            : (0, i.R)(!1);
                    }
                    const _ = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const _ = `mouse${n}`,
                                        a = c[n]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(_, o),
                                        r(),
                                        () => {
                                            i &&
                                                (a(),
                                                window.removeEventListener(_, o),
                                                (e.listeners -= 1),
                                                r(),
                                                (i = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, _, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
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
            959: (e, n, t) => {
                t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => _,
                        graphicsQuality: () => o,
                        playSound: () => i.G,
                        setRTPC: () => i.E,
                    });
                var r = t(527),
                    i = t(993);
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, n, t) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(n, { R: () => r });
            },
            993: (e, n, t) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function i(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                t.d(n, { E: () => i, G: () => r });
            },
            472: (e, n, t) => {
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
            138: (e, n, t) => {
                t.d(n, { O: () => _ });
                var r = t(959),
                    i = t(514);
                const _ = { view: t(641), client: r, sound: i.ZP };
            },
            514: (e, n, t) => {
                t.d(n, { ZP: () => a });
                var r = t(959);
                const i = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    _ = Object.keys(i).reduce((e, n) => ((e[n] = () => (0, r.playSound)(i[n])), e), {}),
                    a = { play: Object.assign({}, _, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            722: (e, n, t) => {
                function r(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function i(e, n, t) {
                    return `url(${r(e, n, t)})`;
                }
                t.r(n), t.d(n, { getBgUrl: () => i, getTextureUrl: () => r });
            },
            112: (e, n, t) => {
                t.d(n, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, n, t) => {
                t.d(n, { U: () => i });
                var r = t(472);
                const i = {
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
            641: (e, n, t) => {
                t.r(n),
                    t.d(n, {
                        addModelObserver: () => l,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => i.W,
                        displayStatusIs: () => O,
                        events: () => _.U,
                        extraSize: () => P,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => k,
                        getScale: () => b,
                        getSize: () => d,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => f,
                        isFocused: () => p,
                        pxToRem: () => m,
                        remToPx: () => w,
                        resize: () => v,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => R,
                    });
                var r = t(722),
                    i = t(112),
                    _ = t(538),
                    a = t(566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function l(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function g(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: w(n.x), y: w(n.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function m(e) {
                    return viewEnv.pxToRem(e);
                }
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function k() {
                    return viewEnv.getShowingStatus();
                }
                const O = Object.keys(i.W).reduce(
                        (e, n) => ((e[n] = () => viewEnv.getShowingStatus() === i.W[n]), e),
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
                            window.isDomBuilt ? e() : _.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, n, t) => {
                t.d(n, { qP: () => c });
                const r = ['args'];
                const i = 2,
                    _ = 16,
                    a = 32,
                    o = 64,
                    s = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const _ = n.args,
                                a = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        i = {},
                                        _ = Object.keys(e);
                                    for (r = 0; r < _.length; r++) (t = _[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(n, r);
                            return void 0 !== _
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((i = _),
                                              Object.entries(i).map(([e, n]) => {
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
                        var i;
                    },
                    c = {
                        close(e) {
                            s('popover' === e ? i : a);
                        },
                        minimize() {
                            s(o);
                        },
                        move(e) {
                            s(_, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            358: (e, n, t) => {
                t.d(n, { Z: () => _ });
                var r = t(138);
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
                    addCallback(e, n, t = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const _ = r.O.view.addModelObserver(e, t, i);
                        return (
                            _ > 0
                                ? ((this._callbacks[_] = n),
                                  t > 0 && (this._views[t] ? this._views[t].push(_) : (this._views[t] = [_])))
                                : console.error("Can't add callback for model:", e),
                            _
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
                i.__instance = void 0;
                const _ = i;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
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
            596: (e, n, t) => {
                t.d(n, { B3: () => c, Z5: () => a, ry: () => h });
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
                const i = r;
                var _ = t(358);
                const a = {
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
                let v, g;
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
                })(v || (v = {})),
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
                    })(g || (g = {}));
                var E = t(138);
                const b = ['args'];
                function m(e, n, t, r, i, _, a) {
                    try {
                        var o = e[_](a),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? n(s) : Promise.resolve(s).then(r, i);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                    return new Promise(function (r, i) {
                                        var _ = e.apply(n, t);
                                        function a(e) {
                                            m(_, r, i, a, o, 'next', e);
                                        }
                                        function o(e) {
                                            m(_, r, i, a, o, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return n.apply(this, arguments);
                        };
                    })(),
                    p = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                _ = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        i = {},
                                        _ = Object.keys(e);
                                    for (r = 0; r < _.length; r++) (t = _[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(n, b);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, _, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, _));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    y = () => p(s.CLOSE),
                    f = (e, n) => {
                        e.keyCode === v.ESCAPE && n();
                    };
                var C = t(572);
                const k = i.instance,
                    O = {
                        DataTracker: _.Z,
                        ViewModel: C.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => p(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: y,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, n, t = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: n });
                        },
                        sendShowPopOverEvent: (e, n, t, r, i = R.invalid('resId'), _) => {
                            const a = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                c = o.x,
                                l = o.y,
                                u = o.width,
                                d = o.height,
                                v = {
                                    x: E.O.view.pxToRem(c) + a.x,
                                    y: E.O.view.pxToRem(l) + a.y,
                                    width: E.O.view.pxToRem(u),
                                    height: E.O.view.pxToRem(d),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: i,
                                direction: n,
                                bbox: w(v),
                                on: !0,
                                args: _,
                            });
                        },
                        addEscapeListener: (e) => {
                            const n = (n) => f(n, e);
                            return (
                                window.addEventListener('keydown', n), () => window.removeEventListener('keydown', n)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, y);
                        },
                        handleViewEvent: p,
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
                        dumpViewModel: function e(n) {
                            const t = {};
                            if ('object' != typeof n) return n;
                            for (const r in n)
                                if (Object.prototype.hasOwnProperty.call(n, r)) {
                                    const i = Object.prototype.toString.call(n[r]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = n[r];
                                        t[r] = [];
                                        for (let n = 0; n < i.length; n++) t[r].push({ value: e(i[n].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(n[r]))
                                            : (t[r] = n[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: k,
                        SystemLocale: a,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = O;
            },
            458: (e, n, t) => {
                var r = t(179),
                    i = t.n(r),
                    _ = t(483),
                    a = t.n(_),
                    o = t(596);
                const s = ({ format: e, value: n }) => {
                        const t = ((e, n = 'integral') => {
                            let t;
                            t = 'gold' === n ? o.B3.GOLD : o.B3.INTEGRAL;
                            return void 0 === e ? '' : o.Z5.getNumberFormat(e, t);
                        })(n, e);
                        return t ? i().createElement('span', null, t) : null;
                    },
                    c = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                        'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                        'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                        'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__eliteXP: 'Currency_value__eliteXP_62',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    };
                var l = t(329);
                const u = (0, r.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: n,
                            size: t,
                            type: r,
                            value: _,
                            discountValue: o,
                            showPlus: u,
                            isEnough: d = !0,
                            stockBackgroundName: v = l.we.Red,
                            className: g,
                            classNames: E,
                        }) =>
                            i().createElement(
                                'span',
                                { className: a()(c.base, c[`base__${t}`], g) },
                                i().createElement(
                                    'span',
                                    {
                                        className: a()(
                                            c.value,
                                            c[`value__${r}`],
                                            !d && c.value__notEnough,
                                            null == E ? void 0 : E.value,
                                        ),
                                    },
                                    u && _ > 0 && '+',
                                    i().createElement(s, { value: _, format: r === l.V2.gold ? 'gold' : 'integral' }),
                                ),
                                i().createElement('span', {
                                    className: a()(c.icon, c[`icon__${r}-${t}`], null == E ? void 0 : E.icon),
                                }),
                                e &&
                                    i().createElement(
                                        'span',
                                        {
                                            className: a()(
                                                c.stock,
                                                o && c.stock__indent,
                                                n && c.stock__interactive,
                                                null == E ? void 0 : E.stock,
                                            ),
                                        },
                                        i().createElement('span', {
                                            className: c.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${v})` },
                                        }),
                                        Boolean(o) && o,
                                    ),
                            ),
                    ),
                    d = {
                        base: 'CurrencyResolver_base_11',
                        base__insufficient: 'CurrencyResolver_base__insufficient_91',
                        icon: 'CurrencyResolver_icon_12',
                        stock: 'CurrencyResolver_stock_26',
                        icon__small: 'CurrencyResolver_icon__small_31',
                        icon__large: 'CurrencyResolver_icon__large_99',
                        icon__extraLarge: 'CurrencyResolver_icon__extraLarge_ed',
                        icon__big: 'CurrencyResolver_icon__big_94',
                        value: 'CurrencyResolver_value_52',
                        value__small: 'CurrencyResolver_value__small_7b',
                        value__big: 'CurrencyResolver_value__big_6a',
                        value__large: 'CurrencyResolver_value__large_eb',
                        value__extraLarge: 'CurrencyResolver_value__extraLarge_94',
                        value__notEnough: 'CurrencyResolver_value__notEnough_51',
                        stock__indent: 'CurrencyResolver_stock__indent_ef',
                        stock__sizeBig: 'CurrencyResolver_stock__sizeBig_86',
                        stock__sizeLarge: 'CurrencyResolver_stock__sizeLarge_4f',
                        stockBackground: 'CurrencyResolver_stockBackground_b3',
                        stock__interactive: 'CurrencyResolver_stock__interactive_2c',
                    },
                    v = ({
                        isDiscount: e,
                        isInteractiveDiscount: n,
                        size: t,
                        typeCurrency: r,
                        isEnough: _,
                        value: o,
                        discountValue: c,
                        showPlus: v,
                    }) => {
                        const g = a()(d.value, d[`value__${t}`], !_ && d.value__notEnough),
                            E = a()(d.icon, d[`icon__${t}`]),
                            b = a()(
                                d.stock,
                                c && d.stock__indent,
                                t === l.et.big && d.stock__sizeBig,
                                t === l.et.large && d.stock__sizeLarge,
                                n && d.stock__interactive,
                            ),
                            m = v && o > 0 && '+';
                        return r in l.V2
                            ? i().createElement(u, {
                                  size: t,
                                  type: r,
                                  value: o,
                                  isDiscount: e,
                                  isInteractiveDiscount: n,
                                  isEnough: _,
                                  discountValue: o,
                                  showPlus: v,
                              })
                            : i().createElement(
                                  'span',
                                  { className: d.base },
                                  i().createElement(
                                      'span',
                                      { className: g },
                                      m,
                                      i().createElement(s, { value: o, format: 'integral' }),
                                  ),
                                  i().createElement('span', { className: E }),
                                  e &&
                                      i().createElement(
                                          'span',
                                          { className: b },
                                          i().createElement('span', { className: d.stockBackground }),
                                          Boolean(c) && c,
                                      ),
                              );
                    };
                v.defaultProps = { isEnough: !0 };
                i().memo(v);
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
                var i = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [n, t, r] = deferred[s], _ = !0, a = 0; a < n.length; a++)
                        (!1 & r || i >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](n[a]))
                            ? n.splice(a--, 1)
                            : ((_ = !1), r < i && (i = r));
                    if (_) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [n, t, r];
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
        (__webpack_require__.j = 743),
        (() => {
            var e = { 743: 0 };
            __webpack_require__.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        i,
                        [_, a, o] = t,
                        s = 0;
                    if (_.some((n) => 0 !== e[n])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (n && n(t); s < _.length; s++)
                        (i = _[s]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [695], () => __webpack_require__(458));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
