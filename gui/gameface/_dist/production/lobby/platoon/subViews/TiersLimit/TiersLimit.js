(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (e, t, n) => {
                n.d(t, { O: () => X });
                var o = {};
                n.r(o),
                    n.d(o, { mouse: () => v, off: () => _, on: () => d, onResize: () => l, onScaleUpdated: () => u });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => p,
                        getSize: () => w,
                        graphicsQuality: () => b,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => f, getTextureUrl: () => h });
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
                        addModelObserver: () => B,
                        addPreloadTexture: () => M,
                        children: () => i,
                        displayStatus: () => g,
                        displayStatusIs: () => K,
                        events: () => E,
                        extraSize: () => $,
                        forceTriggerMouseMove: () => z,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => L,
                        getDisplayStatus: () => q,
                        getScale: () => V,
                        getSize: () => x,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => G,
                        isFocused: () => U,
                        pxToRem: () => F,
                        remToPx: () => j,
                        resize: () => I,
                        sendEvent: () => S,
                        setAnimateWindow: () => H,
                        setEventHandled: () => W,
                        setInputPaddingsRem: () => R,
                        setSidePaddingsRem: () => N,
                        whenTutorialReady: () => Y,
                    });
                const l = s('clientResized'),
                    u = s('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
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
                                    const i = `mouse${t}`,
                                        a = m[t]((e) => n([e, 'outside']));
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
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function h(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function f(e, t, n) {
                    return `url(${h(e, t, n)})`;
                }
                const g = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    E = {
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
                    C = 32,
                    T = 64,
                    P = (e, t) => {
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
                            P('popover' === e ? O : C);
                        },
                        minimize() {
                            P(T);
                        },
                        move(e) {
                            P(k, { isMouseEvent: !0, on: e });
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
                function B(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function I(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function D(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: j(t.x), y: j(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function V() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function j(e) {
                    return viewEnv.remToPx(e);
                }
                function H(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function W() {
                    return viewEnv.setEventHandled();
                }
                function G() {
                    return viewEnv.isEventHandled();
                }
                function z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function q() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(g).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === g[t]), e), {}),
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
                            window.isDomBuilt ? e() : E.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    X = { view: a, client: r };
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
                n.d(t, {
                    Sw: () => i.Z,
                    B0: () => s.B0,
                    wU: () => c.wU,
                    ry: () => c.ry,
                    Eu: () => c.Eu,
                    SW: () => c.SW,
                    P3: () => c.P3,
                });
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
                    l = n(572);
                const u = r.instance,
                    d = {
                        DataTracker: i.Z,
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
                        ClickOutsideManager: u,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = d;
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
                    Eu: () => u,
                    KE: () => b,
                    Kv: () => c,
                    P3: () => p,
                    SU: () => E,
                    SW: () => v,
                    Sy: () => m,
                    VM: () => y,
                    c9: () => d,
                    ry: () => l,
                    uM: () => h,
                    uk: () => w,
                    wU: () => f,
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
                    u = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    d = (e, t) => {
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
                    _ = (e) => d(i.B0.MOVE, { isMouseEvent: !0, on: e }),
                    m = () => d(i.B0.CLOSE),
                    v = () => d(i.B0.POP_OVER, { on: !1 }),
                    w = (e, t, n = 0) => {
                        d(i.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                    },
                    p = (e, t, n, o, a = R.invalid('resId'), s) => {
                        const l = r.O.view.getViewGlobalPosition(),
                            u = n.getBoundingClientRect(),
                            _ = u.x,
                            m = u.y,
                            v = u.width,
                            w = u.height,
                            p = {
                                x: r.O.view.pxToRem(_) + l.x,
                                y: r.O.view.pxToRem(m) + l.y,
                                width: r.O.view.pxToRem(v),
                                height: r.O.view.pxToRem(w),
                            };
                        d(i.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: o || R.invalid('resId'),
                            targetID: a,
                            direction: t,
                            bbox: c(p),
                            on: !0,
                            args: s,
                        });
                    },
                    b = () => viewEnv.isWindowShownByViewEvent(i.B0.TOOLTIP),
                    h = () => viewEnv.isWindowShownByViewEvent(i.B0.CONTEXT_MENU),
                    f = () => viewEnv.isWindowShownByViewEvent(i.B0.POP_OVER),
                    g = (e, t) => {
                        e.keyCode === o.n.ESCAPE && t();
                    },
                    E = (e) => {
                        g(e, m);
                    },
                    y = (e) => {
                        const t = (t) => g(t, e);
                        return window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t);
                    };
            },
            204: (e, t, n) => {
                var o = n(179),
                    r = n.n(o),
                    i = n(493),
                    a = n.n(i),
                    s = n(483),
                    c = n.n(s);
                const l = (e = 1) => {
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
                    },
                    u = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    d = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    };
                var _ = n(491);
                const m = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    v = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    w = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const o = u(`${e}.${n}`, window);
                                return m(o) ? t(e, n, o) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    p = (e) => {
                        const t = ((e) => {
                                const t = l(),
                                    n = t.caller,
                                    o = t.resId,
                                    r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: r, modelPath: v(r, e || ''), resId: o };
                            })(),
                            n = t.modelPrefix,
                            o = e.split('.');
                        if (o.length > 0) {
                            const e = [o[0]];
                            return (
                                o.reduce((t, o) => {
                                    const r = u(v(n, `${t}.${o}`), window);
                                    return m(r) ? (e.push(r.id), `${t}.${o}.value`) : (e.push(o), `${t}.${o}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    b = _.Sw.instance;
                let h;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(h || (h = {}));
                const f = (e = 'model', t = h.Deep) => {
                        const n = (0, o.useState)(0),
                            r = (n[0], n[1]),
                            i = (0, o.useMemo)(() => l(), []),
                            a = i.caller,
                            s = i.resId,
                            c = (0, o.useMemo)(
                                () => (window.__feature && window.__feature !== a ? `subViews.${a}.${e}` : e),
                                [a, e],
                            ),
                            _ = (0, o.useState)(() =>
                                ((e) => {
                                    const t = u(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return m(t) ? t.value : t;
                                })(w(c)),
                            ),
                            v = _[0],
                            f = _[1],
                            g = (0, o.useRef)(-1);
                        return (
                            d(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? h.Deep : h.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== h.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === h.Deep
                                                ? (e === v && r((e) => e + 1), f(e))
                                                : f(Object.assign([], e));
                                        },
                                        o = p(e);
                                    g.current = b.addCallback(o, n, s, t === h.Deep);
                                }
                            }),
                            (0, o.useEffect)(() => {
                                if (t !== h.None)
                                    return () => {
                                        b.removeCallback(g.current, s);
                                    };
                            }, [s, t]),
                            v
                        );
                    },
                    g = [
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
                function E(e) {
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
                const y = (e, t, n = {}, o = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: o,
                                },
                                n,
                            ),
                        );
                    },
                    O = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            i = e.onMouseEnter,
                            a = e.onMouseLeave,
                            s = e.onMouseDown,
                            c = e.onClick,
                            u = e.ignoreShowDelay,
                            d = void 0 !== u && u,
                            _ = e.ignoreMouseClick,
                            m = void 0 !== _ && _,
                            v = e.decoratorId,
                            w = void 0 === v ? 0 : v,
                            p = e.isEnabled,
                            b = void 0 === p || p,
                            h = e.targetId,
                            f = void 0 === h ? 0 : h,
                            O = e.onShow,
                            k = e.onHide,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, g);
                        const T = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            P = (0, o.useMemo)(() => f || l().resId, [f]),
                            S = (0, o.useCallback)(() => {
                                (T.current.isVisible && T.current.timeoutId) ||
                                    (y(n, w, { isMouseEvent: !0, on: !0, arguments: E(r) }, P),
                                    O && O(),
                                    (T.current.isVisible = !0));
                            }, [n, w, r, P, O]),
                            M = (0, o.useCallback)(() => {
                                if (T.current.isVisible || T.current.timeoutId) {
                                    const e = T.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (T.current.timeoutId = 0)),
                                        y(n, w, { on: !1 }, P),
                                        T.current.isVisible && k && k(),
                                        (T.current.isVisible = !1);
                                }
                            }, [n, w, P, k]),
                            R = (0, o.useCallback)((e) => {
                                T.current.isVisible &&
                                    ((T.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (T.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(T.current.prevTarget) && M();
                                    }, 200)));
                            }, []);
                        (0, o.useEffect)(() => {
                            const e = T.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', R, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', R, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, o.useEffect)(() => {
                                !1 === b && M();
                            }, [b, M]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', M),
                                    () => {
                                        window.removeEventListener('mouseleave', M), M();
                                    }
                                ),
                                [M],
                            );
                        return b
                            ? (0, o.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((T.current.timeoutId = window.setTimeout(S, d ? 100 : 400)),
                                                      i && i(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              M(), null == a || a(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && M(), null == c || c(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && M(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : t;
                        var L;
                    };
                let k, C;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(k || (k = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(C || (C = {}));
                function T(e) {
                    engine.call('PlaySound', e);
                }
                const P = {
                        playHighlight() {
                            T('highlight');
                        },
                        playClick() {
                            T('play');
                        },
                        playYes() {
                            T('yes1');
                        },
                    },
                    S = {
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
                    },
                    M = ({
                        children: e,
                        size: t,
                        isFocused: n,
                        type: i,
                        disabled: a,
                        mixClass: s,
                        soundHover: l,
                        soundClick: u,
                        onMouseEnter: d,
                        onMouseMove: _,
                        onMouseDown: m,
                        onMouseUp: v,
                        onMouseLeave: w,
                        onClick: p,
                    }) => {
                        const b = (0, o.useRef)(null),
                            h = (0, o.useState)(n),
                            f = h[0],
                            g = h[1],
                            E = (0, o.useState)(!1),
                            y = E[0],
                            O = E[1],
                            C = (0, o.useState)(!1),
                            P = C[0],
                            M = C[1],
                            L = (0, o.useCallback)(() => {
                                a || (b.current && (b.current.focus(), g(!0)));
                            }, [a]),
                            B = (0, o.useCallback)(
                                (e) => {
                                    f && null !== b.current && !b.current.contains(e.target) && g(!1);
                                },
                                [f],
                            ),
                            N = (0, o.useCallback)(
                                (e) => {
                                    a || (p && p(e));
                                },
                                [a, p],
                            ),
                            x = (0, o.useCallback)(
                                (e) => {
                                    a || (null !== l && T(l), d && d(e), M(!0));
                                },
                                [a, l, d],
                            ),
                            I = (0, o.useCallback)(
                                (e) => {
                                    _ && _(e);
                                },
                                [_],
                            ),
                            D = (0, o.useCallback)(
                                (e) => {
                                    a || (v && v(e), O(!1));
                                },
                                [a, v],
                            ),
                            A = (0, o.useCallback)(
                                (e) => {
                                    a || (null !== u && T(u), m && m(e), n && L(), O(!0));
                                },
                                [a, u, m, L, n],
                            ),
                            V = (0, o.useCallback)(
                                (e) => {
                                    a || (w && w(e), O(!1));
                                },
                                [a, w],
                            ),
                            F = c()(
                                S.base,
                                S[`base__${i}`],
                                {
                                    [S.base__disabled]: a,
                                    [S[`base__${t}`]]: t,
                                    [S.base__focus]: f,
                                    [S.base__highlightActive]: y,
                                    [S.base__firstHover]: P,
                                },
                                s,
                            ),
                            j = c()(S.state, S.state__default);
                        return (
                            (0, o.useEffect)(
                                () => (
                                    document.addEventListener('mousedown', B),
                                    () => {
                                        document.removeEventListener('mousedown', B);
                                    }
                                ),
                                [B],
                            ),
                            (0, o.useEffect)(() => {
                                g(n);
                            }, [n]),
                            r().createElement(
                                'div',
                                {
                                    ref: b,
                                    className: F,
                                    onMouseEnter: x,
                                    onMouseMove: I,
                                    onMouseUp: D,
                                    onMouseDown: A,
                                    onMouseLeave: V,
                                    onClick: N,
                                },
                                i !== k.ghost &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: S.back }),
                                        r().createElement('span', { className: S.texture }),
                                    ),
                                r().createElement(
                                    'span',
                                    { className: j },
                                    r().createElement('span', { className: S.stateDisabled }),
                                    r().createElement('span', { className: S.stateHighlightHover }),
                                    r().createElement('span', { className: S.stateHighlightActive }),
                                ),
                                r().createElement(
                                    'span',
                                    { className: S.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    };
                M.defaultProps = { type: k.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const L = (0, o.memo)(M),
                    B = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                const x = R.views.common.tooltip_window.simple_tooltip_content,
                    I = (e) => {
                        let t = e.children,
                            n = e.body,
                            i = e.header,
                            a = e.note,
                            s = e.alert,
                            c = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, B);
                        const u = (0, o.useMemo)(() => {
                            const e = Object.assign({}, c, { body: n, header: i, note: a, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, i, a, c]);
                        return r().createElement(
                            O,
                            N(
                                {
                                    contentId:
                                        ((d = null == c ? void 0 : c.hasHtmlContent),
                                        d ? x.SimpleTooltipHtmlContent('resId') : x.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: u,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    };
                function D() {
                    return (
                        (D =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        D.apply(this, arguments)
                    );
                }
                const A = (0, o.memo)(
                        ({
                            caption: e,
                            isEnabled: t,
                            description: n,
                            children: i,
                            cButtonProps: a,
                            onClick: s,
                            className: c,
                        }) => {
                            const l = (0, o.useCallback)(() => s(), [s]);
                            return r().createElement(
                                I,
                                { isEnabled: !0, header: e, body: n },
                                r().createElement(
                                    'div',
                                    { className: c },
                                    r().createElement(
                                        L,
                                        D({ type: k.primary, size: C.small, onClick: l, disabled: !t }, a),
                                        i || e,
                                    ),
                                ),
                            );
                        },
                    ),
                    V = /<link.*?>/g,
                    F = /\.\.\//g,
                    j = /<script.*?>/g,
                    H = 'default.css',
                    U = (e) => {
                        const t = e.match(F);
                        return t && t.join('');
                    },
                    W = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const n = t[e];
                            if (!n.href.includes(H)) return n.href;
                        }
                        return '';
                    },
                    G = (e) => {
                        const t = W(),
                            n = U(t);
                        let o,
                            r = e;
                        for (; null !== (o = j.exec(e)); ) {
                            const e = o[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = n + e[2].replace(F, '');
                                r = r.replace(e[2], t);
                            }
                        }
                        return r;
                    },
                    z = 'SubView_base_df',
                    q = 'subViews.onChanged',
                    K = (() => {
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
                    })();
                (0, o.memo)(({ id: e, fallback: t, onLoadCallback: n, mixClass: i }) => {
                    const a = (0, o.useState)(''),
                        s = a[0],
                        l = a[1],
                        u = (0, o.useMemo)(() => ({ __html: G(s) }), [s]),
                        d = (0, o.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                        m = (0, o.useState)(!1),
                        v = m[0],
                        w = m[1],
                        p = (0, o.useCallback)(
                            (e) => {
                                e.includes(d) &&
                                    (w(!0), engine.off(q, p), window.subViews.removeChildChangedCallback(d));
                            },
                            [d],
                        ),
                        b = (0, o.useCallback)((e) => {
                            K.add(
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
                    (0, o.useEffect)(() => {
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
                                                    ? (0, _.Eu)().then(() => {
                                                          console.info(`Sub view ${t} loaded: ${e}`),
                                                              engine.TriggerEvent(
                                                                  `subView:inject->${t}`,
                                                                  n.responseText,
                                                              );
                                                      })
                                                    : console.error(`subView: status: ${n.status} - can't get bundle`));
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
                        } else engine.on(q, p);
                    }, [p, b, e, v]),
                        (0, o.useEffect)(
                            () => () => {
                                s &&
                                    ((e) => {
                                        const t = U(W());
                                        let n;
                                        for (; null !== (n = V.exec(e)); ) {
                                            const e = n[0].match(/href="(.*?)"/);
                                            if (e) {
                                                const n = t + e[1].replace(F, ''),
                                                    o = document.head.querySelector(`[href="${n}"]`);
                                                o && document.head.removeChild(o);
                                            }
                                        }
                                    })(s);
                            },
                            [s],
                        );
                    const h = c()(z, i);
                    if (s) {
                        let t;
                        return (
                            (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                            ((e) => {
                                let t;
                                const n = W(),
                                    o = U(n);
                                for (; null !== (t = V.exec(e)); ) {
                                    const e = t[0].match(/href="(.*?)"/);
                                    if (e && !e[1].includes(H) && o) {
                                        const t = o + e[1].replace(F, ''),
                                            n = document.createElement('link');
                                        (n.href = t), (n.rel = 'stylesheet'), document.head.appendChild(n);
                                    }
                                }
                            })(s),
                            n && n(e),
                            r().createElement('div', { className: h, dangerouslySetInnerHTML: u })
                        );
                    }
                    return t ? r().createElement('div', { className: h }, r().createElement(t, null)) : null;
                });
                let $;
                !(function (e) {
                    (e.left = 'left'), (e.top = 'top'), (e.right = 'right'), (e.bottom = 'bottom');
                })($ || ($ = {}));
                const Y = 'ToggleButton_base_b9',
                    X = 'ToggleButton_content_85',
                    Z = 'ToggleButton_overlay_0a',
                    Q = 'ToggleButton_base__active_68',
                    J = 'ToggleButton_indicator_85',
                    ee = ['active', 'className', 'children', 'size'];
                function te() {
                    return (
                        (te =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        te.apply(this, arguments)
                    );
                }
                (0, o.memo)((e) => {
                    let t = e.active,
                        n = e.className,
                        o = e.children,
                        i = e.size,
                        a = void 0 === i ? C.small : i,
                        s = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                o,
                                r = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, ee);
                    const l = c()(Y, n, t && Q);
                    return r().createElement(
                        'div',
                        { className: l },
                        r().createElement(
                            L,
                            te({}, s, { type: 'secondary', size: a }),
                            r().createElement('span', { className: X }, o),
                        ),
                        r().createElement('div', { className: Z }),
                        r().createElement('div', { className: J }),
                    );
                });
                const ne = 'ResetSettingsButton_clearFilterButtonContainer_c9',
                    oe = 'ResetSettingsButton_important_1e',
                    re = 'ResetSettingsButton_clearImage_05';
                function ie() {
                    return (
                        (ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        ie.apply(this, arguments)
                    );
                }
                const ae = () => {
                    const e = f('model.btnResetSettings'),
                        t = c()(ne, oe),
                        n = (0, o.useMemo)(() => ({ type: k.ghost, mixClass: t }), [t]);
                    return r().createElement(
                        A,
                        ie({}, e, { cButtonProps: n }),
                        r().createElement('div', { className: re }),
                    );
                };
                var se = n(67);
                const ce = (e) => {
                        (0, o.useEffect)(e, []);
                    },
                    le = {
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
                var ue;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(ue || (ue = {}));
                const de = ['__left', '__right', '__top', '__bottom'],
                    _e =
                        ((0, o.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: i = {} }, a) => {
                                const s = (0, o.useRef)(null),
                                    l = (0, o.useRef)(null),
                                    u = (0, o.useRef)(null),
                                    d = (0, o.useState)(window.decorator && window.decorator.directionType),
                                    m = d[0],
                                    v = d[1],
                                    w = (0, o.useCallback)(() => {
                                        P.playClick(), se.O.view.sendEvent.close();
                                    }, []),
                                    p = (0, o.useCallback)(() => {
                                        P.playHighlight();
                                    }, []),
                                    b = c()(le.arrow, le[`arrow${de[m]}`]);
                                ce(
                                    () => (
                                        se.O.client.events.mouse.enableOutside(),
                                        se.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (n ? n() : se.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const h = (0, o.useCallback)(
                                        (e) => {
                                            let t = e.target;
                                            do {
                                                if (t === s.current || t === u.current) return;
                                                t = t.parentNode;
                                            } while (t);
                                            const o = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = se.O.client.getMouseGlobalPosition(),
                                                    t = ![o.boundX, o.boundY, o.boundWidth, o.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    n =
                                                        e.x < o.boundX ||
                                                        e.x > o.boundX + o.boundWidth ||
                                                        e.y > o.boundY + o.boundHeight ||
                                                        e.y < o.boundY;
                                                if (t && !n) return;
                                            }
                                            n ? n() : se.O.view.sendEvent.close('popover');
                                        },
                                        [s, u, n],
                                    ),
                                    f = (0, o.useCallback)(
                                        () => (
                                            se.O.view.freezeTextureBeforeResize(),
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
                                                    se.O.view.resize(e, t), v(window.decorator.directionType);
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, o.useImperativeHandle)(a, () => ({ updateSize: f })),
                                    ce(() => {
                                        se.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, o.useEffect)(() => {
                                        document.addEventListener('mousedown', h, { capture: !0 });
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
                                        })((0, _.Eu)());
                                        return (
                                            !t && e.promise.then(() => f()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', h);
                                            }
                                        );
                                    }, [f, h, t]),
                                    r().createElement(
                                        'div',
                                        { className: le.base, ref: l },
                                        r().createElement(
                                            'div',
                                            { className: le.decorator },
                                            r().createElement(
                                                'div',
                                                { className: le.content, ref: s },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    r().createElement(
                                                        I,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        r().createElement('div', {
                                                            className: le.closeBtn,
                                                            onClick: w,
                                                            onMouseEnter: p,
                                                            ref: u,
                                                        }),
                                                    ),
                                            ),
                                            r().createElement('div', { className: b, style: i.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        [
                            'contentId',
                            'decoratorId',
                            'direction',
                            'targetId',
                            'args',
                            'onClick',
                            'children',
                            'isEnabled',
                        ]);
                function me() {
                    return (
                        (me =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        me.apply(this, arguments)
                    );
                }
                const ve = (e) => {
                        let t = e.contentId,
                            n = e.decoratorId,
                            i = e.direction,
                            a = void 0 === i ? ue.Top : i,
                            s = e.targetId,
                            c = e.args,
                            l = e.onClick,
                            u = e.children,
                            d = e.isEnabled,
                            m = void 0 === d || d,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, _e);
                        const w = (0, o.useRef)(null),
                            p = (0, o.useCallback)(() => {
                                if ((0, _.wU)()) return (0, _.SW)();
                                w.current && (0, _.P3)(t, a, w.current, n, s, c);
                            }, [t, a, c, n, s]);
                        return r().createElement(
                            'div',
                            me(
                                {
                                    ref: w,
                                    onMouseDown:
                                        ((b = u.props.onClick),
                                        (e) => {
                                            m && (p(), l && l(e), b && b(e));
                                        }),
                                },
                                v,
                            ),
                            u,
                        );
                        var b;
                    },
                    we = 'SettingsButton_settingsButtonContainerSimple_48',
                    pe = 'SettingsButton_settingsButton_03',
                    be = ['isPressed', 'hasPopover', 'onClick'];
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        he.apply(this, arguments)
                    );
                }
                const fe = () => {
                        const e = f('model.btnShowSettings'),
                            t = e.isPressed,
                            n = e.hasPopover,
                            i = e.onClick,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, be),
                            s = (0, o.useCallback)(() => i(), [i]),
                            c = (0, o.useMemo)(() => ({ type: t ? k.secondary : k.primary, mixClass: we }), [t]),
                            l = r().createElement(
                                A,
                                he({}, a, { onClick: s, cButtonProps: c }),
                                r().createElement('div', { className: pe }),
                            );
                        return n && a.isEnabled
                            ? r().createElement(
                                  ve,
                                  { contentId: R.views.lobby.platoon.SettingsPopover('resId'), direction: ue.Top },
                                  l,
                              )
                            : l;
                    },
                    ge = 'TiersLimit_base_3a',
                    Ee = 'TiersLimit_settingsButton_d5',
                    ye = 'TiersLimit_caption_90',
                    Oe = 'TiersLimit_tiersChanged_c9',
                    ke = 'TiersLimit_tiersHighlighted_b6',
                    Ce = 'TiersLimit_resetButton_81',
                    Te = 'TiersLimit_dangerIconContainer_19',
                    Pe = 'TiersLimit_dangerIcon_ca',
                    Se = () => {
                        const e = f(),
                            t = e.tiers,
                            n = e.isExpanded,
                            o = e.isLight,
                            i = e.hasSettingsButton,
                            a = e.hasLookingForCaption,
                            s = e.hasTiersCaption,
                            l = e.hasResetButton,
                            u = c()(n && Oe, o && !n && ke);
                        return r().createElement(
                            'div',
                            { className: ge },
                            i && r().createElement('div', { className: Ee }, r().createElement(fe, null)),
                            a && r().createElement('span', { className: ye }, R.strings.platoon.searching.lookingFor()),
                            r().createElement(
                                'span',
                                { className: u },
                                s && `${R.strings.tank_carousel_filter.popover.label.levels()} `,
                                t,
                            ),
                            l && !n && r().createElement('div', { className: Ce }, r().createElement(ae, null)),
                            n &&
                                r().createElement(
                                    'div',
                                    { className: Te },
                                    r().createElement(
                                        O,
                                        { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 },
                                        r().createElement('div', { className: Pe }),
                                    ),
                                ),
                        );
                    };
                engine.whenReady.then(() => {
                    a().render(r().createElement(Se, null), document.getElementById('root'));
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
        (__webpack_require__.j = 840),
        (() => {
            var e = { 840: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [i, a, s] = n,
                        c = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in a) __webpack_require__.o(a, o) && (__webpack_require__.m[o] = a[o]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); c < i.length; c++)
                        (r = i[c]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(204));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
