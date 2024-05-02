(() => {
    'use strict';
    var __webpack_modules__ = {
            329: (e, n, t) => {
                let r, i, a;
                t.d(n, { V2: () => i, et: () => r, we: () => a }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(r || (r = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(i || (i = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(a || (a = {}));
            },
            67: (e, n, t) => {
                t.d(n, { O: () => Z });
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => g, off: () => d, on: () => u, onResize: () => c, onScaleUpdated: () => l });
                var i = {};
                t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => E,
                        getSize: () => m,
                        graphicsQuality: () => p,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => b, getTextureUrl: () => w });
                var o = {};
                function _(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(o),
                    t.d(o, {
                        addModelObserver: () => S,
                        addPreloadTexture: () => L,
                        children: () => a,
                        displayStatus: () => h,
                        displayStatusIs: () => H,
                        events: () => y,
                        extraSize: () => Y,
                        forceTriggerMouseMove: () => W,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => j,
                        getScale: () => q,
                        getSize: () => A,
                        getViewGlobalPosition: () => B,
                        isEventHandled: () => G,
                        isFocused: () => U,
                        pxToRem: () => V,
                        remToPx: () => z,
                        resize: () => D,
                        sendEvent: () => R,
                        setAnimateWindow: () => I,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => x,
                        setSidePaddingsRem: () => N,
                        whenTutorialReady: () => X,
                    });
                const c = _('clientResized'),
                    l = _('self.onScaleUpdated'),
                    u = (e, n) => engine.on(e, n),
                    d = (e, n) => engine.off(e, n),
                    v = { down: _('mousedown'), up: _('mouseup'), move: _('mousemove') };
                const g = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && s(!1);
                    }
                    function t() {
                        e.enabled && s(!0);
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
                            : s(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const a = `mouse${n}`,
                                        o = v[n]((e) => t([e, 'outside']));
                                    function _(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, _),
                                        r(),
                                        () => {
                                            i &&
                                                (o(),
                                                window.removeEventListener(a, _),
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
                    return Object.assign({}, i, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && s(!0);
                        },
                        disableOutside() {
                            e.enabled && s(!1);
                        },
                    });
                })();
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function w(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function b(e, n, t) {
                    return `url(${w(e, n, t)})`;
                }
                const h = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    y = {
                        onTextureFrozen: _('self.onTextureFrozen'),
                        onTextureReady: _('self.onTextureReady'),
                        onDomBuilt: _('self.onDomBuilt'),
                        onLoaded: _('self.onLoaded'),
                        onDisplayChanged: _('self.onShowingStatusChanged'),
                        onFocusUpdated: _('self.onFocusChanged'),
                        children: {
                            onAdded: _('children.onAdded'),
                            onLoaded: _('children.onLoaded'),
                            onRemoved: _('children.onRemoved'),
                            onAttached: _('children.onAttached'),
                            onTextureReady: _('children.onTextureReady'),
                            onRequestPosition: _('children.requestPosition'),
                        },
                    },
                    f = ['args'];
                const C = 2,
                    k = 16,
                    O = 32,
                    P = 64,
                    T = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                a = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        i = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(n, f);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([e, n]) => {
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
                        var r;
                    },
                    R = {
                        close(e) {
                            T('popover' === e ? C : O);
                        },
                        minimize() {
                            T(P);
                        },
                        move(e) {
                            T(k, { isMouseEvent: !0, on: e });
                        },
                    };
                function L(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function x(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function M(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function S(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function D(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function B(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: z(n.x), y: z(n.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function V(e) {
                    return viewEnv.pxToRem(e);
                }
                function z(e) {
                    return viewEnv.remToPx(e);
                }
                function I(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function G() {
                    return viewEnv.isEventHandled();
                }
                function W() {
                    viewEnv.forceTriggerMouseMove();
                }
                function j() {
                    return viewEnv.getShowingStatus();
                }
                const H = Object.keys(h).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === h[n]), e), {}),
                    Y = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    X = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : y.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Z = { view: o, client: i };
            },
            521: (e, n, t) => {
                let r, i;
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
                    })(i || (i = {}));
            },
            358: (e, n, t) => {
                t.d(n, { Z: () => a });
                var r = t(67);
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
                        const a = r.O.view.addModelObserver(e, t, i);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = n),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                const a = i;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(916);
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
            916: (e, n, t) => {
                t.d(n, { B3: () => s, Z5: () => o.Z5, ry: () => p });
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
                var a = t(358);
                var o = t(613);
                let _;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(_ || (_ = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(521),
                    v = t(67);
                const g = ['args'];
                function m(e, n, t, r, i, a, o) {
                    try {
                        var _ = e[a](o),
                            s = _.value;
                    } catch (e) {
                        return void t(e);
                    }
                    _.done ? n(s) : Promise.resolve(s).then(r, i);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                        var a = e.apply(n, t);
                                        function o(e) {
                                            m(a, r, i, o, _, 'next', e);
                                        }
                                        function _(e) {
                                            m(a, r, i, o, _, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return n.apply(this, arguments);
                        };
                    })(),
                    w = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                a = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        i = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(n, g);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    b = () => w(_.CLOSE),
                    h = (e, n) => {
                        e.keyCode === d.n.ESCAPE && n();
                    };
                var y = t(572);
                const f = i.instance,
                    C = {
                        DataTracker: a.Z,
                        ViewModel: y.Z,
                        ViewEventType: _,
                        NumberFormatType: s,
                        RealFormatType: c,
                        TimeFormatType: l,
                        DateFormatType: u,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => w(_.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => w(_.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, n, t = 0) => {
                            w(_.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: n });
                        },
                        sendShowPopOverEvent: (e, n, t, r, i = R.invalid('resId'), a) => {
                            const o = v.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                c = s.x,
                                l = s.y,
                                u = s.width,
                                d = s.height,
                                g = {
                                    x: v.O.view.pxToRem(c) + o.x,
                                    y: v.O.view.pxToRem(l) + o.y,
                                    width: v.O.view.pxToRem(u),
                                    height: v.O.view.pxToRem(d),
                                };
                            w(_.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: i,
                                direction: n,
                                bbox: E(g),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const n = (n) => h(n, e);
                            return (
                                window.addEventListener('keydown', n), () => window.removeEventListener('keydown', n)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, b);
                        },
                        handleViewEvent: w,
                        onBindingsReady: p,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(_.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(_.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(_.POP_OVER),
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
                        ClickOutsideManager: f,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = C;
            },
            613: (e, n, t) => {
                t.d(n, { Z5: () => r, cy: () => i });
                const r = {
                        getNumberFormat: (e, n) => systemLocale.getNumberFormat(e, n),
                        getRealFormat: (e, n) => systemLocale.getRealFormat(e, n),
                        getTimeFormat: (e, n) => systemLocale.getTimeFormat(e, n),
                        getDateFormat: (e, n) => systemLocale.getDateFormat(e, n),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, n, t) => userLocale.getTimeFormat(e, n, void 0 === t || t),
                        getTimeString: (e, n, t) => userLocale.getTimeString(e, n, void 0 === t || t),
                    };
            },
            458: (e, n, t) => {
                t.d(n, { a: () => g });
                var r = t(179),
                    i = t.n(r),
                    a = t(483),
                    o = t.n(a),
                    _ = t(916);
                class s extends i().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = _.B3.GOLD;
                        else e = _.B3.INTEGRAL;
                        const n = _.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== n ? n : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
                const c = {
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
                            value: a,
                            discountValue: _,
                            showPlus: u,
                            isEnough: d = !0,
                            stockBackgroundName: v = l.we.Red,
                            className: g,
                            classNames: m,
                        }) =>
                            i().createElement(
                                'span',
                                { className: o()(c.base, c[`base__${t}`], g) },
                                i().createElement(
                                    'span',
                                    {
                                        className: o()(
                                            c.value,
                                            c[`value__${r}`],
                                            !d && c.value__notEnough,
                                            null == m ? void 0 : m.value,
                                        ),
                                    },
                                    u && a > 0 && '+',
                                    i().createElement(s, { value: a, format: r === l.V2.gold ? 'gold' : 'integral' }),
                                ),
                                i().createElement('span', {
                                    className: o()(c.icon, c[`icon__${r}-${t}`], null == m ? void 0 : m.icon),
                                }),
                                e &&
                                    i().createElement(
                                        'span',
                                        {
                                            className: o()(
                                                c.stock,
                                                _ && c.stock__indent,
                                                n && c.stock__interactive,
                                                null == m ? void 0 : m.stock,
                                            ),
                                        },
                                        i().createElement('span', {
                                            className: c.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${v})` },
                                        }),
                                        Boolean(_) && _,
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
                        isEnough: a,
                        value: _,
                        discountValue: c,
                        showPlus: v,
                    }) => {
                        const g = o()(d.value, d[`value__${t}`], !a && d.value__notEnough),
                            m = o()(d.icon, d[`icon__${t}`]),
                            E = o()(
                                d.stock,
                                c && d.stock__indent,
                                t === l.et.big && d.stock__sizeBig,
                                t === l.et.large && d.stock__sizeLarge,
                                n && d.stock__interactive,
                            ),
                            p = v && _ > 0 && '+';
                        return r in l.V2
                            ? i().createElement(u, {
                                  size: t,
                                  type: r,
                                  value: _,
                                  isDiscount: e,
                                  isInteractiveDiscount: n,
                                  isEnough: a,
                                  discountValue: _,
                                  showPlus: v,
                              })
                            : i().createElement(
                                  'span',
                                  { className: d.base },
                                  i().createElement(
                                      'span',
                                      { className: g },
                                      p,
                                      i().createElement(s, { value: _, format: 'integral' }),
                                  ),
                                  i().createElement('span', { className: m }),
                                  e &&
                                      i().createElement(
                                          'span',
                                          { className: E },
                                          i().createElement('span', { className: d.stockBackground }),
                                          Boolean(c) && c,
                                      ),
                              );
                    };
                v.defaultProps = { isEnough: !0 };
                const g = i().memo(v);
            },
            851: (e, n, t) => {
                var r = t(483),
                    i = t.n(r),
                    a = t(329),
                    o = t(179),
                    _ = t.n(o),
                    s = t(458);
                const c = 'PriceResolver_base_19',
                    l = 'PriceResolver_price_4c',
                    u = 'PriceResolver_price__discount_d0';
                _().memo(
                    ({
                        price: e,
                        defPrice: n,
                        priceSeparator: t = null,
                        showZero: r = !1,
                        bigSize: d = !1,
                        ignoreDiscount: v = !1,
                        typeCurrency: g,
                    }) => {
                        const m = !v && Boolean(n.length),
                            E = i()(l, m && u);
                        return _().createElement(
                            'div',
                            { className: c },
                            e.map(
                                ({ value: e }, n) =>
                                    (r || Boolean(e.value)) &&
                                    _().createElement(
                                        o.Fragment,
                                        { key: n },
                                        n > 0 && t,
                                        _().createElement(
                                            'div',
                                            { className: E },
                                            _().createElement(s.a, {
                                                key: n,
                                                isDiscount: m,
                                                size: d ? a.et.big : a.et.small,
                                                type: e.name,
                                                value: e.value,
                                                isEnough: e.isEnough,
                                                typeCurrency: g,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    },
                );
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
                    for (var [n, t, r] = deferred[s], a = !0, o = 0; o < n.length; o++)
                        (!1 & r || i >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](n[o]))
                            ? n.splice(o--, 1)
                            : ((a = !1), r < i && (i = r));
                    if (a) {
                        deferred.splice(s--, 1);
                        var _ = t();
                        void 0 !== _ && (e = _);
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
        (__webpack_require__.j = 766),
        (() => {
            var e = { 766: 0, 743: 0 };
            __webpack_require__.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        i,
                        [a, o, _] = t,
                        s = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (_) var c = _(__webpack_require__);
                    }
                    for (n && n(t); s < a.length; s++)
                        (i = a[s]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [695], () => __webpack_require__(851));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
