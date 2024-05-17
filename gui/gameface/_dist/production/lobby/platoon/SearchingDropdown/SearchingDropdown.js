(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (e, t, n) => {
                n.d(t, { O: () => X });
                var o = {};
                n.r(o),
                    n.d(o, { mouse: () => v, off: () => _, on: () => u, onResize: () => l, onScaleUpdated: () => d });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => b,
                        getSize: () => w,
                        graphicsQuality: () => p,
                    });
                var a = {};
                n.r(a), n.d(a, { getBgUrl: () => E, getTextureUrl: () => h });
                var i = {};
                function s(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.r(i),
                    n.d(i, {
                        addModelObserver: () => L,
                        addPreloadTexture: () => M,
                        children: () => a,
                        displayStatus: () => f,
                        displayStatusIs: () => K,
                        events: () => g,
                        extraSize: () => $,
                        forceTriggerMouseMove: () => G,
                        freezeTextureBeforeResize: () => V,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => W,
                        getScale: () => A,
                        getSize: () => I,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => q,
                        isFocused: () => U,
                        pxToRem: () => H,
                        remToPx: () => F,
                        resize: () => x,
                        sendEvent: () => P,
                        setAnimateWindow: () => j,
                        setEventHandled: () => z,
                        setInputPaddingsRem: () => R,
                        setSidePaddingsRem: () => B,
                        whenTutorialReady: () => Y,
                    });
                const l = s('clientResized'),
                    d = s('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const v = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function n() {
                        e.enabled && c(!0);
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
                            : c(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        i = m[t]((e) => n([e, 'outside']));
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
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), o();
                        },
                        enable() {
                            (e.enabled = !0), o();
                        },
                        enableOutside() {
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function h(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function E(e, t, n) {
                    return `url(${h(e, t, n)})`;
                }
                const f = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    g = {
                        onTextureFrozen: s('self.onTextureFrozen'),
                        onTextureReady: s('self.onTextureReady'),
                        onDomBuilt: s('self.onDomBuilt'),
                        onLoaded: s('self.onLoaded'),
                        onDisplayChanged: s('self.onShowingStatusChanged'),
                        onFocusUpdated: s('self.onFocusChanged'),
                        children: {
                            onAdded: s('children.onAdded'),
                            onLoaded: s('children.onLoaded'),
                            onRemoved: s('children.onRemoved'),
                            onAttached: s('children.onAttached'),
                            onTextureReady: s('children.onTextureReady'),
                            onRequestPosition: s('children.requestPosition'),
                        },
                    },
                    y = ['args'];
                const k = 2,
                    O = 16,
                    C = 32,
                    T = 64,
                    S = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        a = Object.keys(e);
                                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, y);
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
                    P = {
                        close(e) {
                            S('popover' === e ? k : C);
                        },
                        minimize() {
                            S(T);
                        },
                        move(e) {
                            S(O, { isMouseEvent: !0, on: e });
                        },
                    };
                function M(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function N(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function L(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function I(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function x(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function D(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function V() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function H(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function j(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function z() {
                    return viewEnv.setEventHandled();
                }
                function q() {
                    return viewEnv.isEventHandled();
                }
                function G() {
                    viewEnv.forceTriggerMouseMove();
                }
                function W() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(f).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === f[t]), e), {}),
                    $ = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    Y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : g.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    X = { view: i, client: r };
            },
            521: (e, t, n) => {
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
            358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var o = n(67);
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
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(491);
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
            491: (e, t, n) => {
                n.d(t, { Sw: () => a.Z, B0: () => s.B0, ry: () => c.ry, Eu: () => c.Eu });
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
                var a = n(358);
                var i = n(613),
                    s = n(251),
                    c = n(72),
                    l = n(572);
                const d = r.instance,
                    u = {
                        DataTracker: a.Z,
                        ViewModel: l.Z,
                        ViewEventType: s.B0,
                        NumberFormatType: s.B3,
                        RealFormatType: s.Gr,
                        TimeFormatType: s.lf,
                        DateFormatType: s.kH,
                        makeGlobalBoundingBox: c.Kv,
                        sendMoveEvent: c.wv,
                        sendCloseEvent: c.Sy,
                        sendClosePopOverEvent: c.SW,
                        sendShowContextMenuEvent: c.uk,
                        sendShowPopOverEvent: c.P3,
                        addEscapeListener: c.VM,
                        closeOnEsc: c.SU,
                        handleViewEvent: c.c9,
                        onBindingsReady: c.ry,
                        onLayoutReady: c.Eu,
                        isTooltipShown: c.KE,
                        isContextMenuShown: c.uM,
                        isPopOverShown: c.wU,
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
                        ClickOutsideManager: d,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = u;
            },
            613: (e, t, n) => {
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
            251: (e, t, n) => {
                let o;
                n.d(t, { B0: () => o, B3: () => r, Gr: () => a, kH: () => s, lf: () => i }),
                    (function (e) {
                        (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                            (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                            (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                            (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                            (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                            (e[(e.MOVE = 16)] = 'MOVE'),
                            (e[(e.CLOSE = 32)] = 'CLOSE'),
                            (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                    })(o || (o = {}));
                const r = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    a = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    i = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    s = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            72: (e, t, n) => {
                n.d(t, {
                    Eu: () => d,
                    KE: () => h,
                    Kv: () => c,
                    P3: () => p,
                    SU: () => y,
                    SW: () => v,
                    Sy: () => m,
                    VM: () => k,
                    Vg: () => w,
                    c9: () => u,
                    ry: () => l,
                    uM: () => E,
                    uk: () => b,
                    wU: () => f,
                    wv: () => _,
                });
                var o = n(521),
                    r = n(67),
                    a = n(251);
                const i = ['args'];
                function s(e, t, n, o, r, a, i) {
                    try {
                        var s = e[a](i),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(o, r);
                }
                const c = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    l = (function () {
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
                                            s(a, o, r, i, c, 'next', e);
                                        }
                                        function c(e) {
                                            s(a, o, r, i, c, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    d = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    u = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        a = Object.keys(e);
                                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, i);
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
                    _ = (e) => u(a.B0.MOVE, { isMouseEvent: !0, on: e }),
                    m = () => u(a.B0.CLOSE),
                    v = () => u(a.B0.POP_OVER, { on: !1 }),
                    w = () => u(a.B0.MINIMIZE),
                    b = (e, t, n = 0) => {
                        u(a.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                    },
                    p = (e, t, n, o, i = R.invalid('resId'), s) => {
                        const l = r.O.view.getViewGlobalPosition(),
                            d = n.getBoundingClientRect(),
                            _ = d.x,
                            m = d.y,
                            v = d.width,
                            w = d.height,
                            b = {
                                x: r.O.view.pxToRem(_) + l.x,
                                y: r.O.view.pxToRem(m) + l.y,
                                width: r.O.view.pxToRem(v),
                                height: r.O.view.pxToRem(w),
                            };
                        u(a.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: o || R.invalid('resId'),
                            targetID: i,
                            direction: t,
                            bbox: c(b),
                            on: !0,
                            args: s,
                        });
                    },
                    h = () => viewEnv.isWindowShownByViewEvent(a.B0.TOOLTIP),
                    E = () => viewEnv.isWindowShownByViewEvent(a.B0.CONTEXT_MENU),
                    f = () => viewEnv.isWindowShownByViewEvent(a.B0.POP_OVER),
                    g = (e, t) => {
                        e.keyCode === o.n.ESCAPE && t();
                    },
                    y = (e) => {
                        g(e, m);
                    },
                    k = (e) => {
                        const t = (t) => g(t, e);
                        return window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t);
                    };
            },
            471: (e, t, n) => {
                var o = n(483),
                    r = n.n(o);
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        o = R.invalid('resId');
                    return (
                        t &&
                            ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (o = window.subViews[n].id)),
                        { caller: n, stack: t, resId: o }
                    );
                };
                var i = n(491),
                    s = n(179),
                    c = n.n(s);
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
                const u = (e, t, n = {}, o = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: i.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: o,
                                },
                                n,
                            ),
                        );
                    },
                    _ = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            o = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            v = void 0 !== m && m,
                            w = e.ignoreMouseClick,
                            b = void 0 !== w && w,
                            p = e.decoratorId,
                            h = void 0 === p ? 0 : p,
                            E = e.isEnabled,
                            f = void 0 === E || E,
                            g = e.targetId,
                            y = void 0 === g ? 0 : g,
                            k = e.onShow,
                            O = e.onHide,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    a = Object.keys(e);
                                for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, l);
                        const T = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, s.useMemo)(() => y || a().resId, [y]),
                            P = (0, s.useCallback)(() => {
                                (T.current.isVisible && T.current.timeoutId) ||
                                    (u(n, h, { isMouseEvent: !0, on: !0, arguments: d(o) }, S),
                                    k && k(),
                                    (T.current.isVisible = !0));
                            }, [n, h, o, S, k]),
                            M = (0, s.useCallback)(() => {
                                if (T.current.isVisible || T.current.timeoutId) {
                                    const e = T.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (T.current.timeoutId = 0)),
                                        u(n, h, { on: !1 }, S),
                                        T.current.isVisible && O && O(),
                                        (T.current.isVisible = !1);
                                }
                            }, [n, h, S, O]),
                            R = (0, s.useCallback)((e) => {
                                T.current.isVisible &&
                                    ((T.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (T.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(T.current.prevTarget) && M();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = T.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', R, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', R, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === f && M();
                            }, [f, M]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', M),
                                    () => {
                                        window.removeEventListener('mouseleave', M), M();
                                    }
                                ),
                                [M],
                            );
                        return f
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((N = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((T.current.timeoutId = window.setTimeout(P, v ? 100 : 400)),
                                                      r && r(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              M(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === b && M(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === b && M(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : t;
                        var N;
                    },
                    m = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const w = R.views.common.tooltip_window.simple_tooltip_content,
                    b = (e) => {
                        let t = e.children,
                            n = e.body,
                            o = e.header,
                            r = e.note,
                            a = e.alert,
                            i = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    a = Object.keys(e);
                                for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, m);
                        const d = (0, s.useMemo)(() => {
                            const e = Object.assign({}, i, { body: n, header: o, note: r, alert: a });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [a, n, o, r, i]);
                        return c().createElement(
                            _,
                            v(
                                {
                                    contentId:
                                        ((u = null == i ? void 0 : i.hasHtmlContent),
                                        u ? w.SimpleTooltipHtmlContent('resId') : w.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                l,
                            ),
                            t,
                        );
                        var u;
                    };
                var p = n(67);
                const h = (e) => {
                    (0, s.useEffect)(e, []);
                };
                function E(e) {
                    engine.call('PlaySound', e);
                }
                const f = {
                        playHighlight() {
                            E('highlight');
                        },
                        playClick() {
                            E('play');
                        },
                        playYes() {
                            E('yes1');
                        },
                    },
                    g = {
                        base: 'PopoverDecorator_base_ed',
                        decorator: 'PopoverDecorator_decorator_d3',
                        arrow: 'PopoverDecorator_arrow_8a',
                        arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                        arrow__top: 'PopoverDecorator_arrow__top_6e',
                        arrow__left: 'PopoverDecorator_arrow__left_7a',
                        arrow__right: 'PopoverDecorator_arrow__right_b6',
                        closeBtn: 'PopoverDecorator_closeBtn_32',
                        content: 'PopoverDecorator_content_f0',
                    };
                var y;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(y || (y = {}));
                const k = ['__left', '__right', '__top', '__bottom'],
                    O = (0, s.forwardRef)(
                        ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: o = {} }, a) => {
                            const l = (0, s.useRef)(null),
                                d = (0, s.useRef)(null),
                                u = (0, s.useRef)(null),
                                _ = (0, s.useState)(window.decorator && window.decorator.directionType),
                                m = _[0],
                                v = _[1],
                                w = (0, s.useCallback)(() => {
                                    f.playClick(), p.O.view.sendEvent.close();
                                }, []),
                                E = (0, s.useCallback)(() => {
                                    f.playHighlight();
                                }, []),
                                y = r()(g.arrow, g[`arrow${k[m]}`]);
                            h(
                                () => (
                                    p.O.client.events.mouse.enableOutside(),
                                    p.O.client.events.mouse.down(([, e]) => {
                                        'outside' === e && (n ? n() : p.O.view.sendEvent.close('popover'));
                                    })
                                ),
                            );
                            const O = (0, s.useCallback)(
                                    (e) => {
                                        let t = e.target;
                                        do {
                                            if (t === l.current || t === u.current) return;
                                            t = t.parentNode;
                                        } while (t);
                                        const o = window.decorator;
                                        if (void 0 !== window.decorator) {
                                            const e = p.O.client.getMouseGlobalPosition(),
                                                t = ![o.boundX, o.boundY, o.boundWidth, o.boundHeight].includes(void 0),
                                                n =
                                                    e.x < o.boundX ||
                                                    e.x > o.boundX + o.boundWidth ||
                                                    e.y > o.boundY + o.boundHeight ||
                                                    e.y < o.boundY;
                                            if (t && !n) return;
                                        }
                                        n ? n() : p.O.view.sendEvent.close('popover');
                                    },
                                    [l, u, n],
                                ),
                                C = (0, s.useCallback)(
                                    () => (
                                        p.O.view.freezeTextureBeforeResize(),
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
                                                    'function' == typeof t && t(),
                                                        null !== n && cancelAnimationFrame(n);
                                                }
                                            );
                                        })(() => {
                                            if (d.current) {
                                                const e = d.current.scrollWidth,
                                                    t = d.current.scrollHeight;
                                                p.O.view.resize(e, t), v(window.decorator.directionType);
                                            }
                                        })
                                    ),
                                    [],
                                );
                            return (
                                (0, s.useImperativeHandle)(a, () => ({ updateSize: C })),
                                h(() => {
                                    p.O.view.setInputPaddingsRem(58);
                                }),
                                (0, s.useEffect)(() => {
                                    document.addEventListener('mousedown', O, { capture: !0 });
                                    const e = ((e) => {
                                        let t = !1;
                                        return {
                                            promise: new Promise((n, o) => {
                                                e.then((e) => !t && n(e)).catch((e) => !t && o(e));
                                            }),
                                            cancel() {
                                                t = !0;
                                            },
                                        };
                                    })((0, i.Eu)());
                                    return (
                                        !t && e.promise.then(() => C()),
                                        () => {
                                            e.cancel(), document.removeEventListener('mousedown', O);
                                        }
                                    );
                                }, [C, O, t]),
                                c().createElement(
                                    'div',
                                    { className: g.base, ref: d },
                                    c().createElement(
                                        'div',
                                        { className: g.decorator },
                                        c().createElement(
                                            'div',
                                            { className: g.content, ref: l },
                                            e,
                                            window.decorator &&
                                                window.decorator.isCloseBtnVisible &&
                                                c().createElement(
                                                    b,
                                                    { body: R.strings.dialogs.common.error.cancel() },
                                                    c().createElement('div', {
                                                        className: g.closeBtn,
                                                        onClick: w,
                                                        onMouseEnter: E,
                                                        ref: u,
                                                    }),
                                                ),
                                        ),
                                        c().createElement('div', { className: y, style: o.arrow }),
                                    ),
                                )
                            );
                        },
                    );
                var C = n(521);
                const T = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function S(e = C.n.NONE, t = T, n = !1, o = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== C.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!o && p.O.view.isEventHandled()) return;
                                p.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, o]);
                }
                const P = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    M = (e) => {
                        const t = (0, s.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    N = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    L = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    B = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const o = P(`${e}.${n}`, window);
                                return N(o) ? t(e, n, o) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    I = (e) => {
                        const t = ((e) => {
                                const t = a(),
                                    n = t.caller,
                                    o = t.resId,
                                    r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: r, modelPath: L(r, e || ''), resId: o };
                            })(),
                            n = t.modelPrefix,
                            o = e.split('.');
                        if (o.length > 0) {
                            const e = [o[0]];
                            return (
                                o.reduce((t, o) => {
                                    const r = P(L(n, `${t}.${o}`), window);
                                    return N(r) ? (e.push(r.id), `${t}.${o}.value`) : (e.push(o), `${t}.${o}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    x = i.Sw.instance;
                let D;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(D || (D = {}));
                const V = (e = 'model', t = D.Deep) => {
                    const n = (0, s.useState)(0),
                        o = (n[0], n[1]),
                        r = (0, s.useMemo)(() => a(), []),
                        i = r.caller,
                        c = r.resId,
                        l = (0, s.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                            [i, e],
                        ),
                        d = (0, s.useState)(() =>
                            ((e) => {
                                const t = P(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return N(t) ? t.value : t;
                            })(B(l)),
                        ),
                        u = d[0],
                        _ = d[1],
                        m = (0, s.useRef)(-1);
                    return (
                        M(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? D.Deep : D.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== D.None)
                            ) {
                                const n = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === D.Deep
                                            ? (e === u && o((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    r = I(e);
                                m.current = x.addCallback(r, n, c, t === D.Deep);
                            }
                        }),
                        (0, s.useEffect)(() => {
                            if (t !== D.None)
                                return () => {
                                    x.removeCallback(m.current, c);
                                };
                        }, [c, t]),
                        u
                    );
                };
                var A = n(72),
                    H = n(493),
                    F = n.n(H);
                const j = (e) => ({ backgroundImage: `url('${e}')` }),
                    U = 'BonusInfoIcon_bonusInfoIcon_3d',
                    z = () => {
                        const e = (0, s.useMemo)(() => j(R.images.gui.maps.icons.platoon.common.info()), []);
                        return c().createElement(
                            _,
                            {
                                isEnabled: !0,
                                contentId:
                                    R.views.lobby.premacc.squad_bonus_tooltip_content.SquadBonusTooltipContent('resId'),
                                decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                            },
                            c().createElement('div', { className: U, style: e }),
                        );
                    },
                    q = {
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
                let G, W;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(G || (G = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(W || (W = {}));
                const K = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: o,
                    disabled: a,
                    mixClass: i,
                    soundHover: l,
                    soundClick: d,
                    onMouseEnter: u,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: v,
                    onMouseLeave: w,
                    onClick: b,
                }) => {
                    const p = (0, s.useRef)(null),
                        h = (0, s.useState)(n),
                        f = h[0],
                        g = h[1],
                        y = (0, s.useState)(!1),
                        k = y[0],
                        O = y[1],
                        C = (0, s.useState)(!1),
                        T = C[0],
                        S = C[1],
                        P = (0, s.useCallback)(() => {
                            a || (p.current && (p.current.focus(), g(!0)));
                        }, [a]),
                        M = (0, s.useCallback)(
                            (e) => {
                                f && null !== p.current && !p.current.contains(e.target) && g(!1);
                            },
                            [f],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                a || (b && b(e));
                            },
                            [a, b],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                a || (null !== l && E(l), u && u(e), S(!0));
                            },
                            [a, l, u],
                        ),
                        B = (0, s.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                a || (v && v(e), O(!1));
                            },
                            [a, v],
                        ),
                        x = (0, s.useCallback)(
                            (e) => {
                                a || (null !== d && E(d), m && m(e), n && P(), O(!0));
                            },
                            [a, d, m, P, n],
                        ),
                        D = (0, s.useCallback)(
                            (e) => {
                                a || (w && w(e), O(!1));
                            },
                            [a, w],
                        ),
                        V = r()(
                            q.base,
                            q[`base__${o}`],
                            {
                                [q.base__disabled]: a,
                                [q[`base__${t}`]]: t,
                                [q.base__focus]: f,
                                [q.base__highlightActive]: k,
                                [q.base__firstHover]: T,
                            },
                            i,
                        ),
                        A = r()(q.state, q.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                        (0, s.useEffect)(() => {
                            g(n);
                        }, [n]),
                        c().createElement(
                            'div',
                            {
                                ref: p,
                                className: V,
                                onMouseEnter: L,
                                onMouseMove: B,
                                onMouseUp: I,
                                onMouseDown: x,
                                onMouseLeave: D,
                                onClick: N,
                            },
                            o !== G.ghost &&
                                c().createElement(
                                    c().Fragment,
                                    null,
                                    c().createElement('div', { className: q.back }),
                                    c().createElement('span', { className: q.texture }),
                                ),
                            c().createElement(
                                'span',
                                { className: A },
                                c().createElement('span', { className: q.stateDisabled }),
                                c().createElement('span', { className: q.stateHighlightHover }),
                                c().createElement('span', { className: q.stateHighlightActive }),
                            ),
                            c().createElement(
                                'span',
                                { className: q.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                K.defaultProps = { type: G.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const $ = (0, s.memo)(K);
                function Y() {
                    return (
                        (Y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        Y.apply(this, arguments)
                    );
                }
                const X = (0, s.memo)(
                        ({
                            caption: e,
                            isEnabled: t,
                            description: n,
                            children: o,
                            cButtonProps: r,
                            onClick: a,
                            className: i,
                        }) => {
                            const l = (0, s.useCallback)(() => a(), [a]);
                            return c().createElement(
                                b,
                                { isEnabled: !0, header: e, body: n },
                                c().createElement(
                                    'div',
                                    { className: i },
                                    c().createElement(
                                        $,
                                        Y({ type: G.primary, size: W.small, onClick: l, disabled: !t }, r),
                                        o || e,
                                    ),
                                ),
                            );
                        },
                    ),
                    Z = /<link.*?>/g,
                    Q = /\.\.\//g,
                    J = /<script.*?>/g,
                    ee = 'default.css',
                    te = (e) => {
                        const t = e.match(Q);
                        return t && t.join('');
                    },
                    ne = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const n = t[e];
                            if (!n.href.includes(ee)) return n.href;
                        }
                        return '';
                    },
                    oe = (e) => {
                        const t = ne(),
                            n = te(t);
                        let o,
                            r = e;
                        for (; null !== (o = J.exec(e)); ) {
                            const e = o[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = n + e[2].replace(Q, '');
                                r = r.replace(e[2], t);
                            }
                        }
                        return r;
                    },
                    re = 'SubView_base_df',
                    ae = 'subViews.onChanged',
                    ie = (() => {
                        const e = [];
                        let t = !1;
                        const n = () => {
                            if (!e.length) return void (t = !1);
                            const o = e.shift();
                            o && ((t = !0), o().then(() => n()));
                        };
                        return {
                            add: (o) => {
                                e.push(o), t || n();
                            },
                        };
                    })(),
                    se = (0, s.memo)(({ id: e, fallback: t, onLoadCallback: n, mixClass: o }) => {
                        const a = (0, s.useState)(''),
                            l = a[0],
                            d = a[1],
                            u = (0, s.useMemo)(() => ({ __html: oe(l) }), [l]),
                            _ = (0, s.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            m = (0, s.useState)(!1),
                            v = m[0],
                            w = m[1],
                            b = (0, s.useCallback)(
                                (e) => {
                                    e.includes(_) &&
                                        (w(!0), engine.off(ae, b), window.subViews.removeChildChangedCallback(_));
                                },
                                [_],
                            ),
                            p = (0, s.useCallback)((e) => {
                                ie.add(
                                    () =>
                                        new Promise((t) => {
                                            d(e);
                                            const n = new MutationObserver(() => {
                                                    n.disconnect(), t();
                                                }),
                                                o = document.getElementById('root');
                                            o && n.observe(o, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, s.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    n = t.path;
                                let o;
                                if ((o = n.split('/').pop()))
                                    return (
                                        (o = o.split('.')[0]),
                                        (window.subViews[o] = Object.assign({ id: e }, t)),
                                        engine.on(`subView:inject->${o}`, p),
                                        (({ path: e, name: t }) => {
                                            const n = new XMLHttpRequest();
                                            (n.onreadystatechange = () => {
                                                4 === n.readyState &&
                                                    (200 === n.status
                                                        ? (0, i.Eu)().then(() => {
                                                              console.info(`Sub view ${t} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${t}`,
                                                                      n.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${n.status} - can't get bundle`,
                                                          ));
                                            }),
                                                n.open('GET', e),
                                                n.send();
                                        })({ name: o, path: n }),
                                        () => {
                                            o && window.subViews[o] && delete window.subViews[o],
                                                engine.trigger('subView:destroy', { viewName: o, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${o}`, p),
                                                console.info(`Sub view ${o} is destroyed: ${n}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(ae, b);
                        }, [b, p, e, v]),
                            (0, s.useEffect)(
                                () => () => {
                                    l &&
                                        ((e) => {
                                            const t = te(ne());
                                            let n;
                                            for (; null !== (n = Z.exec(e)); ) {
                                                const e = n[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const n = t + e[1].replace(Q, ''),
                                                        o = document.head.querySelector(`[href="${n}"]`);
                                                    o && document.head.removeChild(o);
                                                }
                                            }
                                        })(l);
                                },
                                [l],
                            );
                        const h = r()(re, o);
                        if (l) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const n = ne(),
                                        o = te(n);
                                    for (; null !== (t = Z.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(ee) && o) {
                                            const t = o + e[1].replace(Q, ''),
                                                n = document.createElement('link');
                                            (n.href = t), (n.rel = 'stylesheet'), document.head.appendChild(n);
                                        }
                                    }
                                })(l),
                                n && n(e),
                                c().createElement('div', { className: h, dangerouslySetInnerHTML: u })
                            );
                        }
                        return t ? c().createElement('div', { className: h }, c().createElement(t, null)) : null;
                    }),
                    ce = 'Header_base_a7',
                    le = 'Header_header_9f',
                    de = 'Header_label_af',
                    ue = 'Header_description_41',
                    _e = 'Header_bonusInfo_3f',
                    me = 'Header_bonusesIcon_7a',
                    ve = 'Header_xp_87',
                    we = 'Header_credits_82',
                    be = ({ description: e, backgroundImage: t }) =>
                        c().createElement(
                            'div',
                            { className: ce, style: j(t) },
                            c().createElement(
                                'div',
                                { className: le },
                                c().createElement(
                                    'div',
                                    null,
                                    c().createElement('span', { className: de }, R.strings.platoon.squad()),
                                    c().createElement('span', { className: ue }, e),
                                ),
                                c().createElement(
                                    'div',
                                    { className: _e },
                                    c().createElement(
                                        'div',
                                        { className: me },
                                        c().createElement('div', { className: ve }),
                                        c().createElement('div', { className: we }),
                                    ),
                                    c().createElement(z, null),
                                ),
                            ),
                            c().createElement(se, { id: R.views.lobby.platoon.subViews.TiersLimit('resId') }),
                        ),
                    pe = 'Separator_base_98',
                    he = 'Separator_base__horizontal_34',
                    Ee = 'Separator_base__vertical_9d',
                    fe = 'Separator_image_5b';
                let ge;
                !(function (e) {
                    (e.left = 'left'), (e.top = 'top'), (e.right = 'right'), (e.bottom = 'bottom');
                })(ge || (ge = {}));
                const ye = ({ position: e }) => {
                        const t = R.images.gui.maps.icons.platoon.common.separator.$dyn(e),
                            n = [ge.right, ge.left].includes(e),
                            o = r()(pe, n ? Ee : he);
                        return c().createElement(
                            'div',
                            { className: o },
                            c().createElement('div', { className: fe, style: j(t) }),
                        );
                    },
                    ke = 'ToggleButton_base_b9',
                    Oe = 'ToggleButton_content_85',
                    Ce = 'ToggleButton_overlay_0a',
                    Te = 'ToggleButton_base__active_68',
                    Se = 'ToggleButton_indicator_85',
                    Pe = ['active', 'className', 'children', 'size'];
                function Me() {
                    return (
                        (Me =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        Me.apply(this, arguments)
                    );
                }
                (0, s.memo)((e) => {
                    let t = e.active,
                        n = e.className,
                        o = e.children,
                        a = e.size,
                        i = void 0 === a ? W.small : a,
                        s = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                o,
                                r = {},
                                a = Object.keys(e);
                            for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, Pe);
                    const l = r()(ke, n, t && Te);
                    return c().createElement(
                        'div',
                        { className: l },
                        c().createElement(
                            $,
                            Me({}, s, { type: 'secondary', size: i }),
                            c().createElement('span', { className: Oe }, o),
                        ),
                        c().createElement('div', { className: Ce }),
                        c().createElement('div', { className: Se }),
                    );
                });
                const Re = 'SearchingContent_base_7f',
                    Ne = 'SearchingContent_bigPlayers_65',
                    Le = 'SearchingContent_caption_86',
                    Be = 'SearchingContent_stateRow_ef',
                    Ie = 'SearchingContent_tableKey_71',
                    xe = 'SearchingContent_icon_08',
                    De = 'SearchingContent_dots_3a',
                    Ve = 'SearchingContent_tableValue_84',
                    Ae = 'SearchingContent_buttonContainer_a0';
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const Fe = () => {
                        const e = V(),
                            t = e.seekers,
                            n = e.estimatedTime,
                            o = V('model.btnCancelSearch'),
                            r = (0, s.useCallback)(() => {
                                o.onClick(), E(R.sounds.gui_platoon_2_cancel_search());
                            }, [o]),
                            a = (0, s.useMemo)(() => ({ type: G.secondary, size: W.small }), []);
                        return c().createElement(
                            'div',
                            { className: Re },
                            c().createElement('div', { className: Ne }, t),
                            c().createElement('span', { className: Le }, R.strings.platoon.searching.playersInQueue()),
                            c().createElement(
                                'div',
                                { className: Be },
                                c().createElement(
                                    'div',
                                    { className: Ie },
                                    c().createElement('div', { className: xe }),
                                    c().createElement('span', null, R.strings.platoon.searching.estimated.caption()),
                                ),
                                c().createElement(
                                    'div',
                                    { className: De },
                                    '..............................................................................',
                                ),
                                c().createElement('span', { className: Ve }, n),
                            ),
                            c().createElement(ye, { position: ge.bottom }),
                            c().createElement(
                                'div',
                                { className: Ae },
                                c().createElement(X, He({}, o, { onClick: r, cButtonProps: a })),
                            ),
                        );
                    },
                    je = 'SearchingDropdown_base_41',
                    Ue = (e) => (e >= 10 ? e.toString() : `0${e}`),
                    ze = (e) => {
                        if (!e) return ' ';
                        const t = ((e) => Math.floor(new Date().getTime() / 1e3) - e)(e);
                        return ((e) => {
                            const t = Math.floor(e / 60),
                                n = e - 60 * t;
                            return `${Ue(t)}:${Ue(n)}`;
                        })(t);
                    };
                window.onload = () => {
                    document.body.style.margin = '0';
                };
                const qe = () => {
                    const e = V(),
                        t = e.searchStartTime,
                        n = e.backgroundImage,
                        o = e.onOutsideClick;
                    window.decorator = { directionType: y.Bottom, isCloseBtnVisible: !1 };
                    const r = (0, s.useState)(ze(t)),
                        a = r[0],
                        i = r[1];
                    (0, s.useEffect)(() =>
                        ((e, t) => {
                            let n;
                            const o = setTimeout(() => {
                                n = e();
                            }, t);
                            return () => {
                                'function' == typeof n && n(), clearTimeout(o);
                            };
                        })(() => i(ze(t)), 1e3),
                    );
                    const l = (0, s.useCallback)(() => {
                        o(), (0, A.Vg)();
                    }, [o]);
                    S(C.n.ESCAPE, () => {
                        p.O.view.setEventHandled(), l();
                    });
                    const d = `${R.strings.platoon.searching.state()} ${a}`;
                    return c().createElement(
                        O,
                        { onOutsideClick: l },
                        c().createElement(
                            'div',
                            { className: je },
                            c().createElement(be, { description: d, backgroundImage: n }),
                            c().createElement(ye, { position: ge.top }),
                            c().createElement(Fe, null),
                        ),
                    );
                };
                engine.whenReady.then(() => {
                    F().render(c().createElement(qe, null), document.getElementById('root'));
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
        (__webpack_require__.j = 884),
        (() => {
            var e = { 884: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(471));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
