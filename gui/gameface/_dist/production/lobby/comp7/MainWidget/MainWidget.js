(() => {
    var __webpack_modules__ = {
            926: (e) => {
                e.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            527: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, { mouse: () => d, off: () => s, on: () => l, onResize: () => a, onScaleUpdated: () => o });
                var n = r(2472),
                    i = r(1176);
                const a = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    c = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, i.R)(!1);
                    }
                    function r() {
                        e.enabled && (0, i.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', r))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', r))
                            : (0, i.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const a = `mouse${t}`,
                                        o = c[t]((e) => r([e, 'outside']));
                                    function l(e) {
                                        r([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, l),
                                        n(),
                                        () => {
                                            i &&
                                                (o(),
                                                window.removeEventListener(a, l),
                                                (e.listeners -= 1),
                                                n(),
                                                (i = !1));
                                        }
                                    );
                                };
                            })(r)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
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
            5959: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => l,
                        playSound: () => i.G,
                        setRTPC: () => i.E,
                    });
                var n = r(527),
                    i = r(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const l = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, r) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.d(t, { R: () => n });
            },
            2493: (e, t, r) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function i(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                r.d(t, { E: () => i, G: () => n });
            },
            2472: (e, t, r) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                r.d(t, { E: () => n });
            },
            3138: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => a });
                var n = r(5959),
                    i = r(514);
                const a = { view: r(7641), client: n, sound: i.ZP };
            },
            514: (e, t, r) => {
                'use strict';
                r.d(t, { ZP: () => o });
                var n = r(5959);
                const i = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(i).reduce((e, t) => ((e[t] = () => (0, n.playSound)(i[t])), e), {}),
                    o = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, r) => {
                'use strict';
                function n(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function i(e, t, r) {
                    return `url(${n(e, t, r)})`;
                }
                r.r(t), r.d(t, { getBgUrl: () => i, getTextureUrl: () => n });
            },
            6112: (e, t, r) => {
                'use strict';
                r.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, r) => {
                'use strict';
                r.d(t, { U: () => i });
                var n = r(2472);
                const i = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        children: () => n,
                        displayStatus: () => i.W,
                        displayStatusIs: () => O,
                        events: () => a.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => x,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getScale: () => v,
                        getSize: () => m,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => L,
                        isFocused: () => f,
                        pxToRem: () => E,
                        remToPx: () => w,
                        resize: () => h,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => y,
                    });
                var n = r(3722),
                    i = r(6112),
                    a = r(6538),
                    o = r(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function d(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function h(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function _(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: w(t.x), y: w(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function L() {
                    return viewEnv.isEventHandled();
                }
                function x() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const O = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
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
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, r) => {
                'use strict';
                r.d(t, { qP: () => c });
                const n = ['args'];
                const i = 2,
                    a = 16,
                    o = 32,
                    l = 64,
                    s = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        i = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                    return i;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, o, {
                                          arguments:
                                              ((i = a),
                                              Object.entries(i).map(([e, t]) => {
                                                  const r = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: r, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: r, name: e, bool: t };
                                                      default:
                                                          return { __Type: r, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var i;
                    },
                    c = {
                        close(e) {
                            s('popover' === e ? i : o);
                        },
                        minimize() {
                            s(l);
                        },
                        move(e) {
                            s(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, r) => {
                'use strict';
                let n, i;
                r.d(t, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(i || (i = {}));
            },
            1358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => a });
                var n = r(3138);
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
                    addCallback(e, t, r = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, r, i);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(a) : (this._views[r] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, t = 0) {
                        let r = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((r = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            r || console.error("Can't remove callback by id:", e),
                            r
                        );
                    }
                    _emmitDataChanged(e, t, r) {
                        r.forEach((r) => {
                            const n = this._callbacks[r];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                i.__instance = void 0;
                const a = i;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
            9916: (e, t, r) => {
                'use strict';
                r.d(t, { B0: () => l, ry: () => E });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    r();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const r = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== n)),
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
                const i = n;
                var a = r(1358);
                var o = r(8613);
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
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = r(5521),
                    h = r(3138);
                const _ = ['args'];
                function g(e, t, r, n, i, a, o) {
                    try {
                        var l = e[a](o),
                            s = l.value;
                    } catch (e) {
                        return void r(e);
                    }
                    l.done ? t(s) : Promise.resolve(s).then(n, i);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    E = (function () {
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
                                        r = arguments;
                                    return new Promise(function (n, i) {
                                        var a = e.apply(t, r);
                                        function o(e) {
                                            g(a, n, i, o, l, 'next', e);
                                        }
                                        function l(e) {
                                            g(a, n, i, o, l, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    w = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        i = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                    return i;
                                })(t, _);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, a, {
                                          arguments:
                                              ((n = i),
                                              Object.entries(n).map(([e, t]) => {
                                                  const r = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          r.number = t;
                                                          break;
                                                      case 'boolean':
                                                          r.bool = t;
                                                          break;
                                                      default:
                                                          r.string = t.toString();
                                                  }
                                                  return r;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    b = () => w(l.CLOSE),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var p = r(7572);
                const L = i.instance,
                    x = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: l,
                        NumberFormatType: s,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => w(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => w(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            w(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, n, i = R.invalid('resId'), a) => {
                            const o = h.O.view.getViewGlobalPosition(),
                                s = r.getBoundingClientRect(),
                                c = s.x,
                                d = s.y,
                                u = s.width,
                                m = s.height,
                                _ = {
                                    x: h.O.view.pxToRem(c) + o.x,
                                    y: h.O.view.pxToRem(d) + o.y,
                                    width: h.O.view.pxToRem(u),
                                    height: h.O.view.pxToRem(m),
                                };
                            w(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: v(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, b);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(t) {
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const i = Object.prototype.toString.call(t[n]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[n];
                                        r[n] = [];
                                        for (let t = 0; t < i.length; t++) r[n].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[n] = e(t[n]))
                                            : (r[n] = t[n]);
                                }
                            return r;
                        },
                        ClickOutsideManager: L,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = x;
            },
            8613: (e, t, r) => {
                'use strict';
                r.d(t, { Z5: () => n, cy: () => i });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
            },
            4927: (e, t, r) => {
                'use strict';
                var n = r(6179),
                    i = r.n(n);
                const a = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                var o = r(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function c(e, t, r) {
                    const n = (function (e, t) {
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
                        })(e, r),
                        i = (function (e, t) {
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
                        })(t, r),
                        a = Math.min(n, i);
                    return {
                        extraLarge: a === r.extraLarge.weight,
                        large: a === r.large.weight,
                        medium: a === r.medium.weight,
                        small: a === r.small.weight,
                        extraSmall: a === r.extraSmall.weight,
                        extraLargeWidth: n === r.extraLarge.weight,
                        largeWidth: n === r.large.weight,
                        mediumWidth: n === r.medium.weight,
                        smallWidth: n === r.small.weight,
                        extraSmallWidth: n === r.extraSmall.weight,
                        extraLargeHeight: i === r.extraLarge.weight,
                        largeHeight: i === r.large.weight,
                        mediumHeight: i === r.medium.weight,
                        smallHeight: i === r.small.weight,
                        extraSmallHeight: i === r.extraSmall.weight,
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
                })(s || (s = {}));
                const d = o.O.client.getSize('rem'),
                    u = d.width,
                    m = d.height,
                    h = Object.assign({ width: u, height: m }, c(u, m, l)),
                    _ = (0, n.createContext)(h),
                    g = ['children'];
                const v = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                i = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                            return i;
                        })(e, g);
                    const i = (0, n.useContext)(_),
                        o = i.extraLarge,
                        l = i.large,
                        s = i.medium,
                        c = i.small,
                        d = i.extraSmall,
                        u = i.extraLargeWidth,
                        m = i.largeWidth,
                        h = i.mediumWidth,
                        v = i.smallWidth,
                        E = i.extraSmallWidth,
                        w = i.extraLargeHeight,
                        b = i.largeHeight,
                        f = i.mediumHeight,
                        p = i.smallHeight,
                        L = i.extraSmallHeight,
                        x = { extraLarge: w, large: b, medium: f, small: p, extraSmall: L };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && o) return t;
                        if (r.large && l) return t;
                        if (r.medium && s) return t;
                        if (r.small && c) return t;
                        if (r.extraSmall && d) return t;
                    } else {
                        if (r.extraLargeWidth && u) return a(t, r, x);
                        if (r.largeWidth && m) return a(t, r, x);
                        if (r.mediumWidth && h) return a(t, r, x);
                        if (r.smallWidth && v) return a(t, r, x);
                        if (r.extraSmallWidth && E) return a(t, r, x);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && w) return t;
                            if (r.largeHeight && b) return t;
                            if (r.mediumHeight && f) return t;
                            if (r.smallHeight && p) return t;
                            if (r.extraSmallHeight && L) return t;
                        }
                    }
                    return null;
                };
                v.defaultProps = {
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
                (0, n.memo)(v);
                const E = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    w = ({ children: e }) => {
                        const t = (0, n.useContext)(_),
                            r = (0, n.useState)(t),
                            a = r[0],
                            s = r[1],
                            d = (0, n.useCallback)((e, t) => {
                                const r = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(t);
                                s(Object.assign({ width: r, height: n }, c(r, n, l)));
                            }, []),
                            u = (0, n.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                d(e.width, e.height);
                            }, [d]);
                        E(() => {
                            o.O.client.events.on('clientResized', d), o.O.client.events.on('self.onScaleUpdated', u);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', d),
                                        o.O.client.events.off('self.onScaleUpdated', u);
                                },
                                [d, u],
                            );
                        const m = (0, n.useMemo)(() => Object.assign({}, a), [a]);
                        return i().createElement(_.Provider, { value: m }, e);
                    };
                var b = r(6483),
                    f = r.n(b),
                    p = r(926),
                    L = r.n(p);
                let x, S, O;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(x || (x = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(S || (S = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(O || (O = {}));
                const T = () => {
                        const e = (0, n.useContext)(_),
                            t = e.width,
                            r = e.height,
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return x.ExtraLarge;
                                    case e.large:
                                        return x.Large;
                                    case e.medium:
                                        return x.Medium;
                                    case e.small:
                                        return x.Small;
                                    case e.extraSmall:
                                        return x.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), x.ExtraSmall;
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return S.ExtraLarge;
                                    case e.largeWidth:
                                        return S.Large;
                                    case e.mediumWidth:
                                        return S.Medium;
                                    case e.smallWidth:
                                        return S.Small;
                                    case e.extraSmallWidth:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return O.ExtraLarge;
                                    case e.largeHeight:
                                        return O.Large;
                                    case e.mediumHeight:
                                        return O.Medium;
                                    case e.smallHeight:
                                        return O.Small;
                                    case e.extraSmallHeight:
                                        return O.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), O.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: i, mediaWidth: a, mediaHeight: o, remScreenWidth: t, remScreenHeight: r };
                    },
                    y = ['children', 'className'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const k = {
                        [S.ExtraSmall]: '',
                        [S.Small]: L().SMALL_WIDTH,
                        [S.Medium]: `${L().SMALL_WIDTH} ${L().MEDIUM_WIDTH}`,
                        [S.Large]: `${L().SMALL_WIDTH} ${L().MEDIUM_WIDTH} ${L().LARGE_WIDTH}`,
                        [S.ExtraLarge]: `${L().SMALL_WIDTH} ${L().MEDIUM_WIDTH} ${L().LARGE_WIDTH} ${L().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [O.ExtraSmall]: '',
                        [O.Small]: L().SMALL_HEIGHT,
                        [O.Medium]: `${L().SMALL_HEIGHT} ${L().MEDIUM_HEIGHT}`,
                        [O.Large]: `${L().SMALL_HEIGHT} ${L().MEDIUM_HEIGHT} ${L().LARGE_HEIGHT}`,
                        [O.ExtraLarge]: `${L().SMALL_HEIGHT} ${L().MEDIUM_HEIGHT} ${L().LARGE_HEIGHT} ${L().EXTRA_LARGE_HEIGHT}`,
                    },
                    H = {
                        [x.ExtraSmall]: '',
                        [x.Small]: L().SMALL,
                        [x.Medium]: `${L().SMALL} ${L().MEDIUM}`,
                        [x.Large]: `${L().SMALL} ${L().MEDIUM} ${L().LARGE}`,
                        [x.ExtraLarge]: `${L().SMALL} ${L().MEDIUM} ${L().LARGE} ${L().EXTRA_LARGE}`,
                    },
                    A = (e) => {
                        let t = e.children,
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    i = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                return i;
                            })(e, y);
                        const a = T(),
                            o = a.mediaWidth,
                            l = a.mediaHeight,
                            s = a.mediaSize;
                        return i().createElement('div', M({ className: f()(r, k[o], P[l], H[s]) }, n), t);
                    },
                    I = ['children'];
                const C = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                i = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                            return i;
                        })(e, I);
                    return i().createElement(w, null, i().createElement(A, r, t));
                };
                var W = r(493),
                    D = r.n(W);
                var N = r(9916);
                const G = [
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
                function U(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const r = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                r.number = t;
                                break;
                            case 'boolean':
                                r.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                r.string = t.toString();
                        }
                        return r;
                    });
                }
                const F = (e, t, r = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: N.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                r,
                            ),
                        );
                    },
                    V = (e) => {
                        let t = e.children,
                            r = e.contentId,
                            i = e.args,
                            a = e.onMouseEnter,
                            o = e.onMouseLeave,
                            l = e.onMouseDown,
                            s = e.onClick,
                            c = e.ignoreShowDelay,
                            d = void 0 !== c && c,
                            u = e.ignoreMouseClick,
                            m = void 0 !== u && u,
                            h = e.decoratorId,
                            _ = void 0 === h ? 0 : h,
                            g = e.isEnabled,
                            v = void 0 === g || g,
                            E = e.targetId,
                            w = void 0 === E ? 0 : E,
                            b = e.onShow,
                            f = e.onHide,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    i = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                return i;
                            })(e, G);
                        const L = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            x = (0, n.useMemo)(
                                () =>
                                    w ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let r,
                                            n = R.invalid('resId');
                                        return (
                                            t &&
                                                ((r = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== r &&
                                                    window.subViews[r] &&
                                                    (n = window.subViews[r].id)),
                                            { caller: r, stack: t, resId: n }
                                        );
                                    })().resId,
                                [w],
                            ),
                            S = (0, n.useCallback)(() => {
                                (L.current.isVisible && L.current.timeoutId) ||
                                    (F(r, _, { isMouseEvent: !0, on: !0, arguments: U(i) }, x),
                                    b && b(),
                                    (L.current.isVisible = !0));
                            }, [r, _, i, x, b]),
                            O = (0, n.useCallback)(() => {
                                if (L.current.isVisible || L.current.timeoutId) {
                                    const e = L.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (L.current.timeoutId = 0)),
                                        F(r, _, { on: !1 }, x),
                                        L.current.isVisible && f && f(),
                                        (L.current.isVisible = !1);
                                }
                            }, [r, _, x, f]),
                            T = (0, n.useCallback)((e) => {
                                L.current.isVisible &&
                                    ((L.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (L.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(L.current.prevTarget) && O();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = L.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === v && O();
                            }, [v, O]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', O),
                                    () => {
                                        window.removeEventListener('mouseleave', O), O();
                                    }
                                ),
                                [O],
                            );
                        return v
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((L.current.timeoutId = window.setTimeout(S, d ? 100 : 400)),
                                                      a && a(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              O(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && O(), null == s || s(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && O(), null == l || l(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : t;
                        var y;
                    };
                let j;
                !(function (e) {
                    (e.InProgress = 'inProgress'), (e.Completed = 'completed');
                })(j || (j = {}));
                var B = r(3403),
                    q = r(7030);
                const z = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 100, config: { duration: 300 } };
                function $() {
                    return !1;
                }
                console.log;
                var K = r(9174);
                function Y(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return X(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return X(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function X(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const Z = (e) => (0 === e ? window : window.subViews.get(e));
                const Q = ((e, t) => {
                        const r = (0, n.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: l, children: s, mocks: c }) {
                                const d = (0, n.useRef)([]),
                                    u = (r, n, i) => {
                                        var a;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Z,
                                                context: n = 'model',
                                            } = {}) {
                                                const i = new Map();
                                                function a(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? i.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = i.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const i = r(t),
                                                        a = n.split('.').reduce((e, t) => e[t], i);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (r, a) => {
                                                        const s = 'string' == typeof a ? `${n}.${a}` : n,
                                                            c = o.O.view.addModelObserver(s, t, !0);
                                                        return i.set(c, r), e && r(l(a)), c;
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, t) => {
                                                        const r = l(t);
                                                        return (...t) => {
                                                            r(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = l(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, r = Y(i.keys()); !(e = r()).done; ) a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            s =
                                                'real' === r
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (a = null == i ? void 0 : i.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === r ? (null == i ? void 0 : i.getter(e)) : s.readByPath(e),
                                            u = (e) => d.current.push(e),
                                            m = e({
                                                mode: r,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            i = K.LO.box(n, { equals: $ });
                                                        return (
                                                            'real' === r &&
                                                                s.subscribe(
                                                                    (0, K.aD)((e) => i.set(e)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            i = K.LO.box(n, { equals: $ });
                                                        return (
                                                            'real' === r &&
                                                                s.subscribe(
                                                                    (0, K.aD)((e) => i.set(e)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = c(t);
                                                        if (Array.isArray(e)) {
                                                            const i = e.reduce(
                                                                (e, t) => ((e[t] = K.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    s.subscribe(
                                                                        (0, K.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                i[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                        {
                                                            const i = e,
                                                                a = Object.entries(i),
                                                                o = a.reduce(
                                                                    (e, [t, r]) => ((e[r] = K.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    s.subscribe(
                                                                        (0, K.aD)((e) => {
                                                                            a.forEach(([t, r]) => {
                                                                                o[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            h = { mode: r, model: m, externalModel: s, cleanup: u };
                                        return {
                                            model: m,
                                            controls: 'mocks' === r && i ? i.controls(h) : t(h),
                                            externalModel: s,
                                            mode: r,
                                        };
                                    },
                                    m = (0, n.useRef)(!1),
                                    h = (0, n.useState)(a),
                                    _ = h[0],
                                    g = h[1],
                                    v = (0, n.useState)(() => u(a, l, c)),
                                    E = v[0],
                                    w = v[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        m.current ? w(u(_, l, c)) : (m.current = !0);
                                    }, [c, _, l]),
                                    (0, n.useEffect)(() => {
                                        g(a);
                                    }, [a]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            E.externalModel.dispose(), d.current.forEach((e) => e());
                                        },
                                        [E],
                                    ),
                                    i().createElement(r.Provider, { value: E }, s)
                                );
                            },
                            () => (0, n.useContext)(r),
                        ];
                    })(
                        ({ observableModel: e }) => ({ root: e.object() }),
                        ({ externalModel: e }) => ({ openProgression: e.createCallbackNoArgs('onOpenProgression') }),
                    ),
                    J = Q[0],
                    ee = Q[1],
                    te = 'Label_base_bc',
                    re = 'Label_text_cb',
                    ne = 'Label_text__blend_c9',
                    ie = 'Label_textGlow_c6',
                    ae = 'Label_base__hover_66',
                    oe = 'Label_textWithBlend_5f',
                    le = 'Label_textMask_91',
                    se = ({ level: e, isHovered: t }) =>
                        i().createElement(
                            'div',
                            { className: f()(te, t && ae) },
                            i().createElement('div', { className: f()(re, ie) }, e),
                            i().createElement(
                                'div',
                                { className: oe },
                                i().createElement('div', { className: f()(re, ne) }, e),
                                i().createElement('div', { className: le }),
                            ),
                        ),
                    ce = {
                        base: 'App_base_de',
                        content: 'App_content_da',
                        icon: 'App_icon_8a',
                        icon__completed: 'App_icon__completed_64',
                        highlight: 'App_highlight_ee',
                        flash: 'App_flash_fe',
                        'show-flash': 'App_show-flash_1b',
                        label: 'App_label_4d',
                    },
                    de = (0, B.Pi)(() => {
                        const e = T().mediaSize,
                            t = ee(),
                            r = t.model,
                            a = t.controls,
                            l = r.root.get(),
                            s = l.battleStatus,
                            c = l.currentProgression,
                            d = (0, n.useRef)(null),
                            u = (0, n.useState)(!1),
                            m = u[0],
                            h = u[1],
                            _ = (0, q.useSpring)(z);
                        (0, n.useEffect)(
                            () =>
                                ((e) => {
                                    let t,
                                        r = null;
                                    return (
                                        (r = requestAnimationFrame(() => {
                                            r = requestAnimationFrame(() => {
                                                (r = null), (t = e());
                                            });
                                        })),
                                        () => {
                                            'function' == typeof t && t(), null !== r && cancelAnimationFrame(r);
                                        }
                                    );
                                })(() => {
                                    if (null != d && d.current) {
                                        const e = d.current.getBoundingClientRect(),
                                            t = e.width,
                                            r = e.height,
                                            n = o.O.view.pxToRem((o.O.view.remToPx(300) - t) / 2);
                                        viewEnv.setInputArea(n, 0, o.O.view.pxToRem(t), o.O.view.pxToRem(r));
                                    }
                                }),
                            [e],
                        );
                        return i().createElement(
                            q.animated.div,
                            { className: ce.base, ref: d, style: _ },
                            i().createElement(
                                V,
                                { contentId: R.views.lobby.comp7.tooltips.WidgetTooltipView('resId') },
                                i().createElement(
                                    'div',
                                    {
                                        className: ce.content,
                                        onClick: a.openProgression,
                                        onMouseEnter: () => {
                                            h(!0), o.O.sound.play.sound('comp_7_rank_rewards_hover');
                                        },
                                        onMouseLeave: () => h(!1),
                                        onMouseDown: () => o.O.sound.play.sound('yes1'),
                                    },
                                    i().createElement(
                                        'div',
                                        { className: f()(ce.icon, ce[`icon__${s}`]) },
                                        s === j.InProgress &&
                                            i().createElement(
                                                i().Fragment,
                                                null,
                                                i().createElement('div', { className: ce.highlight }),
                                                i().createElement(
                                                    'div',
                                                    { className: ce.label },
                                                    i().createElement(se, { level: c, isHovered: m }),
                                                ),
                                            ),
                                        i().createElement('div', { className: ce.flash }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ue = 'MainWidget_mediaWrapper_b0';
                engine.whenReady.then(() => {
                    D().render(
                        i().createElement(
                            C,
                            { className: ue },
                            i().createElement(J, null, i().createElement(de, null)),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var r = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](r, r.exports, __webpack_require__), r.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, r, n) => {
            if (!t) {
                var i = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, r, n] = deferred[s], a = !0, o = 0; o < t.length; o++)
                        (!1 & n || i >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((a = !1), n < i && (i = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var l = r();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, r, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var r in t)
                __webpack_require__.o(t, r) &&
                    !__webpack_require__.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
        (__webpack_require__.j = 80),
        (() => {
            var e = { 80: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        i,
                        [a, o, l] = r,
                        s = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (l) var c = l(__webpack_require__);
                    }
                    for (t && t(r); s < a.length; s++)
                        (i = a[s]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(c);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [926], () => __webpack_require__(4927));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
