(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (e, t, n) => {
                n.d(t, { O: () => $ });
                var o = {};
                n.r(o),
                    n.d(o, { mouse: () => v, off: () => _, on: () => u, onResize: () => d, onScaleUpdated: () => l });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => h,
                        getSize: () => m,
                        graphicsQuality: () => b,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => E, getTextureUrl: () => p });
                var a = {};
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
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => x,
                        addPreloadTexture: () => M,
                        children: () => i,
                        displayStatus: () => f,
                        displayStatusIs: () => G,
                        events: () => g,
                        extraSize: () => Y,
                        forceTriggerMouseMove: () => K,
                        freezeTextureBeforeResize: () => N,
                        getBrowserTexturePath: () => L,
                        getDisplayStatus: () => z,
                        getScale: () => F,
                        getSize: () => A,
                        getViewGlobalPosition: () => I,
                        isEventHandled: () => q,
                        isFocused: () => H,
                        pxToRem: () => B,
                        remToPx: () => U,
                        resize: () => D,
                        sendEvent: () => S,
                        setAnimateWindow: () => j,
                        setEventHandled: () => W,
                        setInputPaddingsRem: () => R,
                        setSidePaddingsRem: () => V,
                        whenTutorialReady: () => X,
                    });
                const d = s('clientResized'),
                    l = s('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    w = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
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
                                    const i = `mouse${t}`,
                                        a = w[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        o(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(i, s),
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
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function p(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function E(e, t, n) {
                    return `url(${p(e, t, n)})`;
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
                const O = 2,
                    k = 16,
                    T = 32,
                    P = 64,
                    C = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, y);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    S = {
                        close(e) {
                            C('popover' === e ? O : T);
                        },
                        minimize() {
                            C(P);
                        },
                        move(e) {
                            C(k, { isMouseEvent: !0, on: e });
                        },
                    };
                function M(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function L(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function x(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function V(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function D(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function I(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: U(t.x), y: U(t.y) };
                }
                function N() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function U(e) {
                    return viewEnv.remToPx(e);
                }
                function j(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function W() {
                    return viewEnv.setEventHandled();
                }
                function q() {
                    return viewEnv.isEventHandled();
                }
                function K() {
                    viewEnv.forceTriggerMouseMove();
                }
                function z() {
                    return viewEnv.getShowingStatus();
                }
                const G = Object.keys(f).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === f[t]), e), {}),
                    Y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    X = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : g.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    $ = { view: a, client: r };
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
                n.d(t, { Z: () => i });
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
                        const i = o.O.view.addModelObserver(e, n, r);
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
                            const o = this._callbacks[n];
                            void 0 !== o && o(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const i = r;
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
                n.d(t, { B0: () => s.B0, ry: () => c.ry, Eu: () => c.Eu, Sy: () => c.Sy });
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
                var i = n(358);
                var a = n(613),
                    s = n(251),
                    c = n(72),
                    d = n(572);
                const l = r.instance,
                    u = {
                        DataTracker: i.Z,
                        ViewModel: d.Z,
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
                        ClickOutsideManager: l,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
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
                n.d(t, { B0: () => o, B3: () => r, Gr: () => i, kH: () => s, lf: () => a }),
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
                    i = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    a = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    s = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            72: (e, t, n) => {
                n.d(t, {
                    Eu: () => l,
                    KE: () => b,
                    Kv: () => c,
                    P3: () => h,
                    SU: () => g,
                    SW: () => v,
                    Sy: () => w,
                    VM: () => y,
                    c9: () => u,
                    ry: () => d,
                    uM: () => p,
                    uk: () => m,
                    wU: () => E,
                    wv: () => _,
                });
                var o = n(521),
                    r = n(67),
                    i = n(251);
                const a = ['args'];
                function s(e, t, n, o, r, i, a) {
                    try {
                        var s = e[i](a),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(o, r);
                }
                const c = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    d = (function () {
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
                                        var i = e.apply(t, n);
                                        function a(e) {
                                            s(i, o, r, a, c, 'next', e);
                                        }
                                        function c(e) {
                                            s(i, o, r, a, c, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    l = () =>
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
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, a);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    _ = (e) => u(i.B0.MOVE, { isMouseEvent: !0, on: e }),
                    w = () => u(i.B0.CLOSE),
                    v = () => u(i.B0.POP_OVER, { on: !1 }),
                    m = (e, t, n = 0) => {
                        u(i.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                    },
                    h = (e, t, n, o, a = R.invalid('resId'), s) => {
                        const d = r.O.view.getViewGlobalPosition(),
                            l = n.getBoundingClientRect(),
                            _ = l.x,
                            w = l.y,
                            v = l.width,
                            m = l.height,
                            h = {
                                x: r.O.view.pxToRem(_) + d.x,
                                y: r.O.view.pxToRem(w) + d.y,
                                width: r.O.view.pxToRem(v),
                                height: r.O.view.pxToRem(m),
                            };
                        u(i.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: o || R.invalid('resId'),
                            targetID: a,
                            direction: t,
                            bbox: c(h),
                            on: !0,
                            args: s,
                        });
                    },
                    b = () => viewEnv.isWindowShownByViewEvent(i.B0.TOOLTIP),
                    p = () => viewEnv.isWindowShownByViewEvent(i.B0.CONTEXT_MENU),
                    E = () => viewEnv.isWindowShownByViewEvent(i.B0.POP_OVER),
                    f = (e, t) => {
                        e.keyCode === o.n.ESCAPE && t();
                    },
                    g = (e) => {
                        f(e, w);
                    },
                    y = (e) => {
                        const t = (t) => f(t, e);
                        return window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t);
                    };
            },
            486: (e, t, n) => {
                var o = n(483),
                    r = n.n(o);
                var i = n(491),
                    a = n(179),
                    s = n.n(a);
                const c = [
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
                const l = (e, t, n = {}, o = 0) => {
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
                    u = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            o = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            u = e.onClick,
                            _ = e.ignoreShowDelay,
                            w = void 0 !== _ && _,
                            v = e.ignoreMouseClick,
                            m = void 0 !== v && v,
                            h = e.decoratorId,
                            b = void 0 === h ? 0 : h,
                            p = e.isEnabled,
                            E = void 0 === p || p,
                            f = e.targetId,
                            g = void 0 === f ? 0 : f,
                            y = e.onShow,
                            O = e.onHide,
                            k = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, c);
                        const T = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            P = (0, a.useMemo)(
                                () =>
                                    g ||
                                    ((e = 1) => {
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
                                    })().resId,
                                [g],
                            ),
                            C = (0, a.useCallback)(() => {
                                (T.current.isVisible && T.current.timeoutId) ||
                                    (l(n, b, { isMouseEvent: !0, on: !0, arguments: d(o) }, P),
                                    y && y(),
                                    (T.current.isVisible = !0));
                            }, [n, b, o, P, y]),
                            S = (0, a.useCallback)(() => {
                                if (T.current.isVisible || T.current.timeoutId) {
                                    const e = T.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (T.current.timeoutId = 0)),
                                        l(n, b, { on: !1 }, P),
                                        T.current.isVisible && O && O(),
                                        (T.current.isVisible = !1);
                                }
                            }, [n, b, P, O]),
                            M = (0, a.useCallback)((e) => {
                                T.current.isVisible &&
                                    ((T.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (T.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(T.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = T.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', M, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', M, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === E && S();
                            }, [E, S]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return E
                            ? (0, a.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((T.current.timeoutId = window.setTimeout(C, w ? 100 : 400)),
                                                      r && r(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && S(), null == u || u(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && S(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      k,
                                  ),
                              )
                            : t;
                        var L;
                    },
                    _ = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function w() {
                    return (
                        (w =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        w.apply(this, arguments)
                    );
                }
                const v = R.views.common.tooltip_window.simple_tooltip_content,
                    m = (e) => {
                        let t = e.children,
                            n = e.body,
                            o = e.header,
                            r = e.note,
                            i = e.alert,
                            c = e.args,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, _);
                        const l = (0, a.useMemo)(() => {
                            const e = Object.assign({}, c, { body: n, header: o, note: r, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, n, o, r, c]);
                        return s().createElement(
                            u,
                            w(
                                {
                                    contentId:
                                        ((m = null == c ? void 0 : c.hasHtmlContent),
                                        m ? v.SimpleTooltipHtmlContent('resId') : v.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                d,
                            ),
                            t,
                        );
                        var m;
                    };
                var h = n(67);
                const b = (e) => {
                    (0, a.useEffect)(e, []);
                };
                function p(e) {
                    engine.call('PlaySound', e);
                }
                const E = {
                        playHighlight() {
                            p('highlight');
                        },
                        playClick() {
                            p('play');
                        },
                        playYes() {
                            p('yes1');
                        },
                    },
                    f = {
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
                var g;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(g || (g = {}));
                const y = ['__left', '__right', '__top', '__bottom'],
                    O = (0, a.forwardRef)(
                        ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: o = {} }, c) => {
                            const d = (0, a.useRef)(null),
                                l = (0, a.useRef)(null),
                                u = (0, a.useRef)(null),
                                _ = (0, a.useState)(window.decorator && window.decorator.directionType),
                                w = _[0],
                                v = _[1],
                                p = (0, a.useCallback)(() => {
                                    E.playClick(), h.O.view.sendEvent.close();
                                }, []),
                                g = (0, a.useCallback)(() => {
                                    E.playHighlight();
                                }, []),
                                O = r()(f.arrow, f[`arrow${y[w]}`]);
                            b(
                                () => (
                                    h.O.client.events.mouse.enableOutside(),
                                    h.O.client.events.mouse.down(([, e]) => {
                                        'outside' === e && (n ? n() : h.O.view.sendEvent.close('popover'));
                                    })
                                ),
                            );
                            const k = (0, a.useCallback)(
                                    (e) => {
                                        let t = e.target;
                                        do {
                                            if (t === d.current || t === u.current) return;
                                            t = t.parentNode;
                                        } while (t);
                                        const o = window.decorator;
                                        if (void 0 !== window.decorator) {
                                            const e = h.O.client.getMouseGlobalPosition(),
                                                t = ![o.boundX, o.boundY, o.boundWidth, o.boundHeight].includes(void 0),
                                                n =
                                                    e.x < o.boundX ||
                                                    e.x > o.boundX + o.boundWidth ||
                                                    e.y > o.boundY + o.boundHeight ||
                                                    e.y < o.boundY;
                                            if (t && !n) return;
                                        }
                                        n ? n() : h.O.view.sendEvent.close('popover');
                                    },
                                    [d, u, n],
                                ),
                                T = (0, a.useCallback)(
                                    () => (
                                        h.O.view.freezeTextureBeforeResize(),
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
                                            if (l.current) {
                                                const e = l.current.scrollWidth,
                                                    t = l.current.scrollHeight;
                                                h.O.view.resize(e, t), v(window.decorator.directionType);
                                            }
                                        })
                                    ),
                                    [],
                                );
                            return (
                                (0, a.useImperativeHandle)(c, () => ({ updateSize: T })),
                                b(() => {
                                    h.O.view.setInputPaddingsRem(58);
                                }),
                                (0, a.useEffect)(() => {
                                    document.addEventListener('mousedown', k, { capture: !0 });
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
                                        !t && e.promise.then(() => T()),
                                        () => {
                                            e.cancel(), document.removeEventListener('mousedown', k);
                                        }
                                    );
                                }, [T, k, t]),
                                s().createElement(
                                    'div',
                                    { className: f.base, ref: l },
                                    s().createElement(
                                        'div',
                                        { className: f.decorator },
                                        s().createElement(
                                            'div',
                                            { className: f.content, ref: d },
                                            e,
                                            window.decorator &&
                                                window.decorator.isCloseBtnVisible &&
                                                s().createElement(
                                                    m,
                                                    { body: R.strings.dialogs.common.error.cancel() },
                                                    s().createElement('div', {
                                                        className: f.closeBtn,
                                                        onClick: p,
                                                        onMouseEnter: g,
                                                        ref: u,
                                                    }),
                                                ),
                                        ),
                                        s().createElement('div', { className: O, style: o.arrow }),
                                    ),
                                )
                            );
                        },
                    );
                var k = n(521);
                const T = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function P(e = k.n.NONE, t = T, n = !1, o = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== k.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!o && h.O.view.isEventHandled()) return;
                                h.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, o]);
                }
                function C() {
                    !(function (e = k.n.ESCAPE) {
                        P(e, i.Sy, !0);
                    })(k.n.ESCAPE);
                }
                const S = /<link.*?>/g,
                    M = /\.\.\//g,
                    L = /<script.*?>/g,
                    x = 'default.css',
                    V = (e) => {
                        const t = e.match(M);
                        return t && t.join('');
                    },
                    A = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const n = t[e];
                            if (!n.href.includes(x)) return n.href;
                        }
                        return '';
                    },
                    D = (e) => {
                        const t = A(),
                            n = V(t);
                        let o,
                            r = e;
                        for (; null !== (o = L.exec(e)); ) {
                            const e = o[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = n + e[2].replace(M, '');
                                r = r.replace(e[2], t);
                            }
                        }
                        return r;
                    },
                    I = 'SubView_base_df',
                    N = 'subViews.onChanged',
                    F = (() => {
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
                    B = (0, a.memo)(({ id: e, fallback: t, onLoadCallback: n, mixClass: o }) => {
                        const c = (0, a.useState)(''),
                            d = c[0],
                            l = c[1],
                            u = (0, a.useMemo)(() => ({ __html: D(d) }), [d]),
                            _ = (0, a.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            w = (0, a.useState)(!1),
                            v = w[0],
                            m = w[1],
                            h = (0, a.useCallback)(
                                (e) => {
                                    e.includes(_) &&
                                        (m(!0), engine.off(N, h), window.subViews.removeChildChangedCallback(_));
                                },
                                [_],
                            ),
                            b = (0, a.useCallback)((e) => {
                                F.add(
                                    () =>
                                        new Promise((t) => {
                                            l(e);
                                            const n = new MutationObserver(() => {
                                                    n.disconnect(), t();
                                                }),
                                                o = document.getElementById('root');
                                            o && n.observe(o, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, a.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    n = t.path;
                                let o;
                                if ((o = n.split('/').pop()))
                                    return (
                                        (o = o.split('.')[0]),
                                        (window.subViews[o] = Object.assign({ id: e }, t)),
                                        engine.on(`subView:inject->${o}`, b),
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
                                                engine.off(`subView:inject->${o}`, b),
                                                console.info(`Sub view ${o} is destroyed: ${n}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(N, h);
                        }, [h, b, e, v]),
                            (0, a.useEffect)(
                                () => () => {
                                    d &&
                                        ((e) => {
                                            const t = V(A());
                                            let n;
                                            for (; null !== (n = S.exec(e)); ) {
                                                const e = n[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const n = t + e[1].replace(M, ''),
                                                        o = document.head.querySelector(`[href="${n}"]`);
                                                    o && document.head.removeChild(o);
                                                }
                                            }
                                        })(d);
                                },
                                [d],
                            );
                        const p = r()(I, o);
                        if (d) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const n = A(),
                                        o = V(n);
                                    for (; null !== (t = S.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(x) && o) {
                                            const t = o + e[1].replace(M, ''),
                                                n = document.createElement('link');
                                            (n.href = t), (n.rel = 'stylesheet'), document.head.appendChild(n);
                                        }
                                    }
                                })(d),
                                n && n(e),
                                s().createElement('div', { className: p, dangerouslySetInnerHTML: u })
                            );
                        }
                        return t ? s().createElement('div', { className: p }, s().createElement(t, null)) : null;
                    });
                var U = n(493),
                    j = n.n(U);
                const H = 'SettingsPopover_base_e3',
                    W = () => {
                        const e = (0, a.useRef)(null),
                            t = (0, a.useCallback)(() => {
                                if (e.current) {
                                    const t = requestAnimationFrame(() => {
                                        e.current && e.current.updateSize();
                                    });
                                    return () => cancelAnimationFrame(t);
                                }
                            }, []);
                        return (
                            C(),
                            s().createElement(
                                O,
                                { ref: e, disableAutoSizeUpdate: !0 },
                                s().createElement(
                                    'div',
                                    { className: H },
                                    s().createElement(B, {
                                        id: R.views.lobby.platoon.subViews.SettingsContent('resId'),
                                        onLoadCallback: t,
                                    }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    j().render(s().createElement(W, null), document.getElementById('root'));
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
                    for (var [t, n, o] = deferred[c], i = !0, a = 0; a < t.length; a++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((i = !1), o < r && (r = o));
                    if (i) {
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
        (__webpack_require__.j = 108),
        (() => {
            var e = { 108: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [i, a, s] = n,
                        c = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in a) __webpack_require__.o(a, o) && (__webpack_require__.m[o] = a[o]);
                        if (s) var d = s(__webpack_require__);
                    }
                    for (t && t(n); c < i.length; c++)
                        (r = i[c]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(d);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(486));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
