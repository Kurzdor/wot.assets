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
            768: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => re });
                var n = {};
                r.r(n),
                    r.d(n, { mouse: () => h, off: () => _, on: () => d, onResize: () => c, onScaleUpdated: () => u });
                var i = {};
                r.r(i),
                    r.d(i, {
                        events: () => n,
                        getMouseGlobalPosition: () => f,
                        getSize: () => v,
                        graphicsQuality: () => E,
                        playSound: () => g,
                        setRTPC: () => w,
                    });
                var a = {};
                r.r(a), r.d(a, { getBgUrl: () => L, getTextureUrl: () => S });
                var o = {};
                function l(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.r(o),
                    r.d(o, {
                        addModelObserver: () => N,
                        addPreloadTexture: () => I,
                        children: () => a,
                        displayStatus: () => y,
                        displayStatusIs: () => J,
                        events: () => O,
                        extraSize: () => ee,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => V,
                        getBrowserTexturePath: () => D,
                        getDisplayStatus: () => Q,
                        getScale: () => j,
                        getSize: () => z,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => X,
                        isFocused: () => K,
                        pxToRem: () => B,
                        remToPx: () => $,
                        resize: () => G,
                        sendEvent: () => A,
                        setAnimateWindow: () => q,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => W,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => te,
                    });
                const c = l('clientResized'),
                    u = l('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: l('mousedown'), up: l('mouseup'), move: l('mousemove') };
                const h = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && s(!1);
                    }
                    function r() {
                        e.enabled && s(!0);
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
                            : s(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const a = `mouse${t}`,
                                        o = m[t]((e) => r([e, 'outside']));
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
                    return Object.assign({}, i, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && s(!0);
                        },
                        disableOutside() {
                            e.enabled && s(!1);
                        },
                    });
                })();
                function g(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function w(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function f(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    b = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    p = Object.keys(b).reduce((e, t) => ((e[t] = () => g(b[t])), e), {}),
                    x = { play: Object.assign({}, p, { sound: g }), setRTPC: w };
                function S(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function L(e, t, r) {
                    return `url(${S(e, t, r)})`;
                }
                const y = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    O = {
                        onTextureFrozen: l('self.onTextureFrozen'),
                        onTextureReady: l('self.onTextureReady'),
                        onDomBuilt: l('self.onDomBuilt'),
                        onLoaded: l('self.onLoaded'),
                        onDisplayChanged: l('self.onShowingStatusChanged'),
                        onFocusUpdated: l('self.onFocusChanged'),
                        children: {
                            onAdded: l('children.onAdded'),
                            onLoaded: l('children.onLoaded'),
                            onRemoved: l('children.onRemoved'),
                            onAttached: l('children.onAttached'),
                            onTextureReady: l('children.onTextureReady'),
                            onRequestPosition: l('children.requestPosition'),
                        },
                    },
                    k = ['args'];
                const T = 2,
                    M = 16,
                    R = 32,
                    P = 64,
                    H = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var r = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            r[n] = e[n];
                                        }
                                    return r;
                                })(t, k);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, a, {
                                          arguments:
                                              ((n = i),
                                              Object.entries(n).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    A = {
                        close(e) {
                            H('popover' === e ? T : R);
                        },
                        minimize() {
                            H(P);
                        },
                        move(e) {
                            H(M, { isMouseEvent: !0, on: e });
                        },
                    },
                    C = 15;
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, C);
                }
                function D(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function N(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, C);
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function G(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function U(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: $(t.x), y: $(t.y) };
                }
                function V() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function j() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function $(e) {
                    return viewEnv.remToPx(e);
                }
                function q(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function K() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const J = Object.keys(y).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === y[t]), e), {}),
                    ee = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    te = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : O.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    re = { view: o, client: i, sound: x };
            },
            521: (e, t, r) => {
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
            358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => a });
                var n = r(768);
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
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
            916: (e, t, r) => {
                'use strict';
                r.d(t, { B0: () => l, ry: () => v });
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
                var a = r(358);
                var o = r(613);
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
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = r(521),
                    m = r(768);
                const h = ['args'];
                function g(e, t, r, n, i, a, o) {
                    try {
                        var l = e[a](o),
                            s = l.value;
                    } catch (e) {
                        return void r(e);
                    }
                    l.done ? t(s) : Promise.resolve(s).then(n, i);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    v = (function () {
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
                    f = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var r = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            r[n] = e[n];
                                        }
                                    return r;
                                })(t, h);
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
                    E = () => f(l.CLOSE),
                    b = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var p = r(572);
                const x = i.instance,
                    S = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: l,
                        NumberFormatType: s,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => f(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: E,
                        sendClosePopOverEvent: () => f(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            f(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, n, i = R.invalid('resId'), a) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                s = r.getBoundingClientRect(),
                                c = s.x,
                                u = s.y,
                                d = s.width,
                                _ = s.height,
                                h = {
                                    x: m.O.view.pxToRem(c) + o.x,
                                    y: m.O.view.pxToRem(u) + o.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            f(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: w(h),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => b(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, E);
                        },
                        handleViewEvent: f,
                        onBindingsReady: v,
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
                        ClickOutsideManager: x,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = S;
            },
            613: (e, t, r) => {
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
            440: (e, t, r) => {
                'use strict';
                var n = r(768),
                    i = r(179),
                    a = r.n(i);
                const o = [];
                const l = (e) => {
                    (0, i.useEffect)(e, []);
                };
                function s() {
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
                const c = (0, i.createContext)(null);
                const u = (e) => {
                        const t = a().useRef(null),
                            r = s(),
                            u = a().useRef(),
                            d = a().useRef(!1),
                            _ = a().useCallback(() => {
                                const e = t.current;
                                if (!e) throw new Error('Element is not defined');
                                return (function (e, t) {
                                    if (t.current) {
                                        const r = t.current,
                                            n = r.width,
                                            i = r.height;
                                        if (n === e.offsetWidth && i === e.offsetHeight) return !0;
                                    }
                                    return !1;
                                })(e, u);
                            }, []),
                            m = (function (e) {
                                const t = (0, i.useRef)(e);
                                return (
                                    (0, i.useLayoutEffect)(() => {
                                        t.current = e;
                                    }),
                                    (0, i.useCallback)((...e) => (0, t.current)(...e), o)
                                );
                            })(() => {
                                r.run(() => {
                                    const r = t.current;
                                    if (!r || !1 === (null == e.needUpdate ? void 0 : e.needUpdate())) return;
                                    const i = _();
                                    if (i && !d.current) return;
                                    const a = {
                                        width: Math.max(1, r.offsetWidth),
                                        height: Math.max(1, r.offsetHeight),
                                    };
                                    (u.current = a),
                                        n.O.view.resize(a.width, a.height),
                                        !1 === i && (null == e.onResize || e.onResize(a));
                                });
                            });
                        l(() =>
                            n.O.view.events.onTextureFrozen(() => {
                                d.current = !0;
                            }),
                        ),
                            l(() =>
                                n.O.view.events.onTextureReady(() => {
                                    d.current && u.current && n.O.view.resize(u.current.width, u.current.height),
                                        (d.current = !1);
                                }),
                            ),
                            l(
                                () => (
                                    window.addEventListener('resize', m), () => window.removeEventListener('resize', m)
                                ),
                            ),
                            a().useEffect(() => {
                                var t;
                                (null == (t = e.autoUpdate) || t) && m();
                            });
                        const h = a().useMemo(
                            () => ({
                                resize: m,
                                equalSize: _,
                                getLastSize: () => u.current,
                                getCurrentSize: () => {
                                    const e = t.current;
                                    return e
                                        ? { width: e.offsetWidth, height: e.offsetHeight }
                                        : { width: 0, height: 0 };
                                },
                                freeze: () => {
                                    (d.current = !0), n.O.view.freezeTextureBeforeResize();
                                },
                                isFrozen: () => d.current,
                            }),
                            [_, m],
                        );
                        return a().createElement(c.Provider, { value: h }, e.children(t, m));
                    },
                    d = (e, t, r) =>
                        t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                            ? (t.extraLargeHeight && r.extraLarge) ||
                              (t.largeHeight && r.large) ||
                              (t.mediumHeight && r.medium) ||
                              (t.smallHeight && r.small) ||
                              (t.extraSmallHeight && r.extraSmall)
                                ? e
                                : null
                            : e,
                    _ = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var m;
                function h(e, t, r) {
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
                })(m || (m = {}));
                const g = n.O.client.getSize('rem'),
                    w = g.width,
                    v = g.height,
                    f = Object.assign({ width: w, height: v }, h(w, v, _)),
                    E = (0, i.createContext)(f),
                    b = ['children'];
                const p = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, b);
                    const n = (0, i.useContext)(E),
                        a = n.extraLarge,
                        o = n.large,
                        l = n.medium,
                        s = n.small,
                        c = n.extraSmall,
                        u = n.extraLargeWidth,
                        _ = n.largeWidth,
                        m = n.mediumWidth,
                        h = n.smallWidth,
                        g = n.extraSmallWidth,
                        w = n.extraLargeHeight,
                        v = n.largeHeight,
                        f = n.mediumHeight,
                        p = n.smallHeight,
                        x = n.extraSmallHeight,
                        S = { extraLarge: w, large: v, medium: f, small: p, extraSmall: x };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && a) return t;
                        if (r.large && o) return t;
                        if (r.medium && l) return t;
                        if (r.small && s) return t;
                        if (r.extraSmall && c) return t;
                    } else {
                        if (r.extraLargeWidth && u) return d(t, r, S);
                        if (r.largeWidth && _) return d(t, r, S);
                        if (r.mediumWidth && m) return d(t, r, S);
                        if (r.smallWidth && h) return d(t, r, S);
                        if (r.extraSmallWidth && g) return d(t, r, S);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && w) return t;
                            if (r.largeHeight && v) return t;
                            if (r.mediumHeight && f) return t;
                            if (r.smallHeight && p) return t;
                            if (r.extraSmallHeight && x) return t;
                        }
                    }
                    return null;
                };
                p.defaultProps = {
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
                (0, i.memo)(p);
                const x = (e) => {
                        const t = (0, i.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    S = ({ children: e }) => {
                        const t = (0, i.useContext)(E),
                            r = (0, i.useState)(t),
                            o = r[0],
                            l = r[1],
                            s = (0, i.useCallback)((e, t) => {
                                const r = n.O.view.pxToRem(e),
                                    i = n.O.view.pxToRem(t);
                                l(Object.assign({ width: r, height: i }, h(r, i, _)));
                            }, []),
                            c = (0, i.useCallback)(() => {
                                const e = n.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        x(() => {
                            n.O.client.events.on('clientResized', s), n.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, i.useEffect)(
                                () => () => {
                                    n.O.client.events.off('clientResized', s),
                                        n.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [s, c],
                            );
                        const u = (0, i.useMemo)(() => Object.assign({}, o), [o]);
                        return a().createElement(E.Provider, { value: u }, e);
                    };
                var L = r(483),
                    y = r.n(L),
                    O = r(926),
                    k = r.n(O);
                let T, M, P;
                !(function (e) {
                    (e[(e.ExtraSmall = _.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = _.small.width)] = 'Small'),
                        (e[(e.Medium = _.medium.width)] = 'Medium'),
                        (e[(e.Large = _.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = _.extraLarge.width)] = 'ExtraLarge');
                })(T || (T = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = _.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = _.small.width)] = 'Small'),
                            (e[(e.Medium = _.medium.width)] = 'Medium'),
                            (e[(e.Large = _.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = _.extraLarge.width)] = 'ExtraLarge');
                    })(M || (M = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = _.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = _.small.height)] = 'Small'),
                            (e[(e.Medium = _.medium.height)] = 'Medium'),
                            (e[(e.Large = _.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = _.extraLarge.height)] = 'ExtraLarge');
                    })(P || (P = {}));
                const H = () => {
                        const e = (0, i.useContext)(E),
                            t = e.width,
                            r = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return T.ExtraLarge;
                                    case e.large:
                                        return T.Large;
                                    case e.medium:
                                        return T.Medium;
                                    case e.small:
                                        return T.Small;
                                    case e.extraSmall:
                                        return T.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), T.ExtraSmall;
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return M.ExtraLarge;
                                    case e.largeWidth:
                                        return M.Large;
                                    case e.mediumWidth:
                                        return M.Medium;
                                    case e.smallWidth:
                                        return M.Small;
                                    case e.extraSmallWidth:
                                        return M.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), M.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return P.ExtraLarge;
                                    case e.largeHeight:
                                        return P.Large;
                                    case e.mediumHeight:
                                        return P.Medium;
                                    case e.smallHeight:
                                        return P.Small;
                                    case e.extraSmallHeight:
                                        return P.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), P.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: o, remScreenWidth: t, remScreenHeight: r };
                    },
                    A = ['children', 'className'];
                function C() {
                    return (
                        (C = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                  }
                                  return e;
                              }),
                        C.apply(null, arguments)
                    );
                }
                const I = {
                        [M.ExtraSmall]: '',
                        [M.Small]: k().SMALL_WIDTH,
                        [M.Medium]: `${k().SMALL_WIDTH} ${k().MEDIUM_WIDTH}`,
                        [M.Large]: `${k().SMALL_WIDTH} ${k().MEDIUM_WIDTH} ${k().LARGE_WIDTH}`,
                        [M.ExtraLarge]: `${k().SMALL_WIDTH} ${k().MEDIUM_WIDTH} ${k().LARGE_WIDTH} ${k().EXTRA_LARGE_WIDTH}`,
                    },
                    W = {
                        [P.ExtraSmall]: '',
                        [P.Small]: k().SMALL_HEIGHT,
                        [P.Medium]: `${k().SMALL_HEIGHT} ${k().MEDIUM_HEIGHT}`,
                        [P.Large]: `${k().SMALL_HEIGHT} ${k().MEDIUM_HEIGHT} ${k().LARGE_HEIGHT}`,
                        [P.ExtraLarge]: `${k().SMALL_HEIGHT} ${k().MEDIUM_HEIGHT} ${k().LARGE_HEIGHT} ${k().EXTRA_LARGE_HEIGHT}`,
                    },
                    D = {
                        [T.ExtraSmall]: '',
                        [T.Small]: k().SMALL,
                        [T.Medium]: `${k().SMALL} ${k().MEDIUM}`,
                        [T.Large]: `${k().SMALL} ${k().MEDIUM} ${k().LARGE}`,
                        [T.ExtraLarge]: `${k().SMALL} ${k().MEDIUM} ${k().LARGE} ${k().EXTRA_LARGE}`,
                    },
                    N = (e) => {
                        let t = e.children,
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        r[n] = e[n];
                                    }
                                return r;
                            })(e, A);
                        const i = H(),
                            o = i.mediaWidth,
                            l = i.mediaHeight,
                            s = i.mediaSize;
                        return a().createElement('div', C({ className: y()(r, I[o], W[l], D[s]) }, n), t);
                    },
                    F = ['children'];
                const z = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, F);
                    return a().createElement(S, null, a().createElement(N, r, t));
                };
                var G = r(493),
                    U = r.n(G);
                var V = r(916);
                const j = [
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
                function B(e) {
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
                const $ = (e, t, r = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: V.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                r,
                            ),
                        );
                    },
                    q = (e) => {
                        let t = e.children,
                            r = e.contentId,
                            n = e.args,
                            a = e.onMouseEnter,
                            o = e.onMouseLeave,
                            l = e.onMouseDown,
                            s = e.onClick,
                            c = e.ignoreShowDelay,
                            u = void 0 !== c && c,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            m = e.decoratorId,
                            h = void 0 === m ? 0 : m,
                            g = e.isEnabled,
                            w = void 0 === g || g,
                            v = e.targetId,
                            f = void 0 === v ? 0 : v,
                            E = e.onShow,
                            b = e.onHide,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        r[n] = e[n];
                                    }
                                return r;
                            })(e, j);
                        const x = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, i.useMemo)(
                                () =>
                                    f ||
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
                                [f],
                            ),
                            L = (0, i.useCallback)(() => {
                                (x.current.isVisible && x.current.timeoutId) ||
                                    ($(r, h, { isMouseEvent: !0, on: !0, arguments: B(n) }, S),
                                    E && E(),
                                    (x.current.isVisible = !0));
                            }, [r, h, n, S, E]),
                            y = (0, i.useCallback)(() => {
                                if (x.current.isVisible || x.current.timeoutId) {
                                    const e = x.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (x.current.timeoutId = 0)),
                                        $(r, h, { on: !1 }, S),
                                        x.current.isVisible && b && b(),
                                        (x.current.isVisible = !1);
                                }
                            }, [r, h, S, b]),
                            O = (0, i.useCallback)((e) => {
                                x.current.isVisible &&
                                    ((x.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (x.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(x.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = x.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', O, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', O, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === w && y();
                            }, [w, y]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            );
                        return w
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((x.current.timeoutId = window.setTimeout(L, u ? 100 : 400)),
                                                      a && a(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              y(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === _ && y(), null == s || s(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === _ && y(), null == l || l(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : t;
                        var k;
                    };
                function K(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const Y = {
                    playHighlight() {
                        K('highlight');
                    },
                    playClick() {
                        K('play');
                    },
                    playYes() {
                        K('yes1');
                    },
                };
                var X = r(403);
                const Z = ['children'];
                function Q() {
                    return (
                        (Q = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                  }
                                  return e;
                              }),
                        Q.apply(null, arguments)
                    );
                }
                const J = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, Z);
                    return a().createElement(
                        q,
                        Q(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            r,
                        ),
                        t,
                    );
                };
                function ee(e, t) {
                    var r;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (r = e[t]) ? void 0 : r.value;
                }
                const te = (e, t, r) => {
                        const n = [];
                        for (let i = e; i <= t; i++) n.push(r(i));
                        return n;
                    },
                    re = {
                        base: 'SkillIcon_base_43',
                        base__c_22x22: 'SkillIcon_base__c_22x22_14',
                        base__medium: 'SkillIcon_base__medium_d0',
                        base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                        base__big: 'SkillIcon_base__big_ae',
                        base__c_80x80: 'SkillIcon_base__c_80x80_79',
                        base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                        base__dialogs: 'SkillIcon_base__dialogs_e5',
                    };
                let ne;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(ne || (ne = {}));
                const ie = a().memo(function ({ iconName: e, size: t = ne.c24x24, className: r }) {
                        var n;
                        const i = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e);
                        return a().createElement('div', {
                            style: null !== i ? { backgroundImage: `url(${i})` } : void 0,
                            className: y()(re.base, re[`base__${t}`], r),
                        });
                    }),
                    ae = {
                        base: 'Skills_base_9c',
                        base__rows2: 'Skills_base__rows2_9e',
                        base__rows3: 'Skills_base__rows3_ae',
                        base__rows4: 'Skills_base__rows4_21',
                        row: 'Skills_row_05',
                        row__big: 'Skills_row__big_35',
                        hitBox: 'Skills_hitBox_7e',
                        hitBox__big: 'Skills_hitBox__big_e6',
                        skill: 'Skills_skill_c2',
                        skill__big: 'Skills_skill__big_7c',
                    },
                    oe = ({ skills: e }) => {
                        const t = e.length,
                            r = Math.ceil(t / 10),
                            n = t <= 30;
                        return a().createElement(
                            'div',
                            { className: y()(ae.base, ae[`base__rows${r}`]) },
                            te(1, r, (i) => {
                                const o = 10 * (i - 1),
                                    l = Math.min(o + 10 - 1, t - 1);
                                return a().createElement(
                                    'div',
                                    { key: i, className: y()(ae.row, r < 3 && ae.row__big) },
                                    te(o, l, (t) => {
                                        const r = ee(e, t);
                                        if (!r) return;
                                        const i = r.iconName,
                                            o = r.level;
                                        return a().createElement(
                                            J,
                                            {
                                                key: `${t}_${i}`,
                                                args: { skillName: i, level: o, tooltipId: 'crewPerkGf' },
                                            },
                                            a().createElement(
                                                'div',
                                                { className: y()(ae.hitBox, n && ae.hitBox__big) },
                                                a().createElement(ie, {
                                                    iconName: i,
                                                    size: ne.c52x52,
                                                    className: y()(ae.skill, n && ae.skill__big),
                                                }),
                                            ),
                                        );
                                    }),
                                );
                            }),
                        );
                    };
                function le(e) {
                    return e;
                }
                function se() {
                    return !1;
                }
                console.log;
                var ce = r(174);
                function ue(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return de(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === r && e.constructor && (r = e.constructor.name),
                                    'Map' === r || 'Set' === r
                                        ? Array.from(e)
                                        : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                          ? de(e, t)
                                          : void 0
                                );
                            }
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
                function de(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const _e = (e) => (0 === e ? window : window.subViews.get(e));
                var me = r(946);
                const he = ((e, t) => {
                        const r = (0, i.createContext)({});
                        return [
                            function ({ mode: o = 'real', options: l, children: s, mocks: c }) {
                                const u = (0, i.useRef)([]),
                                    d = (r, i, a) => {
                                        var o;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = _e,
                                                context: i = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function o(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = a.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const n = r(t),
                                                        a = i.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (r, o) => {
                                                        const s = 'string' == typeof o ? `${i}.${o}` : i,
                                                            c = n.O.view.addModelObserver(s, t, !0);
                                                        return a.set(c, r), e && r(l(o)), c;
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
                                                        for (var e, r = ue(a.keys()); !(e = r()).done; ) o(e.value, t);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(i),
                                            s =
                                                'real' === r
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (o = null == a ? void 0 : a.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === r ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            _ = e({
                                                mode: r,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            i = ce.LO.box(n, { equals: se });
                                                        return (
                                                            'real' === r &&
                                                                s.subscribe(
                                                                    (0, ce.aD)((e) => i.set(e)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            i = ce.LO.box(n, { equals: se });
                                                        return (
                                                            'real' === r &&
                                                                s.subscribe(
                                                                    (0, ce.aD)((e) => i.set(e)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = c(t);
                                                        if (Array.isArray(e)) {
                                                            const i = e.reduce(
                                                                (e, t) => ((e[t] = ce.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    s.subscribe(
                                                                        (0, ce.aD)((t) => {
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
                                                                    (e, [t, r]) => ((e[r] = ce.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    s.subscribe(
                                                                        (0, ce.aD)((e) => {
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
                                                cleanup: d,
                                            }),
                                            m = { mode: r, model: _, externalModel: s, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === r && a ? a.controls(m) : t(m),
                                            externalModel: s,
                                            mode: r,
                                        };
                                    },
                                    _ = (0, i.useRef)(!1),
                                    m = (0, i.useState)(o),
                                    h = m[0],
                                    g = m[1],
                                    w = (0, i.useState)(() => d(o, l, c)),
                                    v = w[0],
                                    f = w[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        _.current ? f(d(h, l, c)) : (_.current = !0);
                                    }, [c, h, l]),
                                    (0, i.useEffect)(() => {
                                        g(o);
                                    }, [o]),
                                    (0, i.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), u.current.forEach((e) => e());
                                        },
                                        [v],
                                    ),
                                    a().createElement(r.Provider, { value: v }, s)
                                );
                            },
                            () => (0, i.useContext)(r),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = { skills: e.array('skills') },
                                r = (0, me.Om)(() => {
                                    return (
                                        (e = t.skills.get()),
                                        (r = le),
                                        Array.isArray(e)
                                            ? e.map(r)
                                            : e.map((e, t, n) => r(null == e ? void 0 : e.value, t, n))
                                    );
                                    var e, r;
                                });
                            return Object.assign({}, t, { computes: { getSkills: r } });
                        },
                        ({ externalModel: e }) => ({
                            click: e.createCallbackNoArgs('onClick'),
                            reset: e.createCallbackNoArgs('onReset'),
                        }),
                    ),
                    ge = he[0],
                    we = he[1],
                    ve = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function fe() {
                    return (
                        (fe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                  }
                                  return e;
                              }),
                        fe.apply(null, arguments)
                    );
                }
                const Ee = R.views.common.tooltip_window.simple_tooltip_content,
                    be = (e) => {
                        let t = e.children,
                            r = e.body,
                            n = e.header,
                            o = e.note,
                            l = e.alert,
                            s = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        r[n] = e[n];
                                    }
                                return r;
                            })(e, ve);
                        const u = (0, i.useMemo)(() => {
                            const e = Object.assign({}, s, { body: r, header: n, note: o, alert: l });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [l, r, n, o, s]);
                        return a().createElement(
                            q,
                            fe(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? Ee.SimpleTooltipHtmlContent('resId') : Ee.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: u,
                                },
                                c,
                            ),
                            t,
                        );
                        var d;
                    },
                    pe = 'EmptyPanel_base_09',
                    xe = 'EmptyPanel_plus_43',
                    Se = 'EmptyPanel_text_71',
                    Le = R.strings.veh_compare.skillsConf,
                    ye = a().memo(() =>
                        a().createElement(
                            be,
                            { header: Le.emptyTooltip.header(), body: Le.emptyTooltip.body() },
                            a().createElement(
                                'div',
                                { className: pe },
                                a().createElement('div', { className: xe }),
                                a().createElement('div', { className: Se }, Le.empty()),
                            ),
                        ),
                    ),
                    Oe = 'CompareSkillsPanelApp_base_73',
                    ke = 'CompareSkillsPanelApp_header_de',
                    Te = 'CompareSkillsPanelApp_infoIcon_3d',
                    Me = 'CompareSkillsPanelApp_content_0e',
                    Re = 'CompareSkillsPanelApp_hitBox_ca',
                    Pe = 'CompareSkillsPanelApp_closeButton_e4',
                    He = (0, X.Pi)(({ sizerRef: e }) => {
                        const t = we(),
                            r = t.model,
                            n = t.controls,
                            o = (function () {
                                const e = (0, i.useContext)(c);
                                if (!e) throw new Error('ViewSizerContext is not initialized');
                                return e;
                            })(),
                            l = r.computes.getSkills(),
                            s = l.length > 0,
                            u = (0, i.useCallback)(
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
                                        null == o || o.freeze(), null == o || o.resize();
                                    }),
                                [o],
                            );
                        return (
                            (0, i.useEffect)(() => {
                                u();
                            }, [u, l.length]),
                            (0, i.useEffect)(
                                () => (
                                    engine.on('clientResized', u),
                                    () => {
                                        engine.off('clientResized', u);
                                    }
                                ),
                                [u],
                            ),
                            a().createElement(
                                'div',
                                { ref: e, className: Oe },
                                a().createElement(
                                    'div',
                                    { className: ke },
                                    a().createElement('div', null, R.strings.veh_compare.skillsConf.header()),
                                    a().createElement(
                                        q,
                                        { contentId: R.views.lobby.crew.tooltips.VehCmpSkillsTooltip('resId') },
                                        a().createElement('div', { className: Te }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Me },
                                    a().createElement(
                                        'div',
                                        { className: Re, onClick: n.click, onMouseEnter: Y.playHighlight },
                                        s ? a().createElement(oe, { skills: l }) : a().createElement(ye, null),
                                    ),
                                    s &&
                                        a().createElement('div', {
                                            className: Pe,
                                            onClick: n.reset,
                                            onMouseEnter: Y.playHighlight,
                                        }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    U().render(
                        a().createElement(
                            ge,
                            null,
                            a().createElement(
                                z,
                                null,
                                a().createElement(u, { autoUpdate: !0 }, (e) => a().createElement(He, { sizerRef: e })),
                            ),
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
        (__webpack_require__.j = 701),
        (() => {
            var e = { 701: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [331], () => __webpack_require__(440));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
