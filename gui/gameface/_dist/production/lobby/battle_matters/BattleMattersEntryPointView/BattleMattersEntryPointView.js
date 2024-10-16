(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (e, t, n) => {
                n.d(t, { O: () => ne });
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => p, off: () => _, on: () => u, onResize: () => c, onScaleUpdated: () => d });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => w,
                        getSize: () => g,
                        graphicsQuality: () => h,
                        playSound: () => v,
                        setRTPC: () => b,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => k, getTextureUrl: () => O });
                var a = {};
                function s(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => F,
                        addPreloadTexture: () => I,
                        children: () => i,
                        displayStatus: () => P,
                        displayStatusIs: () => J,
                        events: () => C,
                        extraSize: () => ee,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => B,
                        getDisplayStatus: () => Q,
                        getScale: () => $,
                        getSize: () => V,
                        getViewGlobalPosition: () => G,
                        isEventHandled: () => Z,
                        isFocused: () => H,
                        pxToRem: () => q,
                        remToPx: () => W,
                        resize: () => j,
                        sendEvent: () => D,
                        setAnimateWindow: () => K,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => N,
                        setSidePaddingsRem: () => z,
                        whenTutorialReady: () => te,
                    });
                const c = s('clientResized'),
                    d = s('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const p = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function n() {
                        e.enabled && l(!0);
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
                            : l(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${t}`,
                                        a = m[t]((e) => n([e, 'outside']));
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
                    return Object.assign({}, o, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function v(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function b(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const h = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    f = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    E = Object.keys(f).reduce((e, t) => ((e[t] = () => v(f[t])), e), {}),
                    y = { play: Object.assign({}, E, { sound: v }), setRTPC: b };
                function O(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function k(e, t, n) {
                    return `url(${O(e, t, n)})`;
                }
                const P = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    C = {
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
                    T = ['args'];
                const S = 2,
                    M = 16,
                    R = 32,
                    A = 64,
                    L = (e, t) => {
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
                                })(t, T);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    D = {
                        close(e) {
                            L('popover' === e ? S : R);
                        },
                        minimize() {
                            L(A);
                        },
                        move(e) {
                            L(M, { isMouseEvent: !0, on: e });
                        },
                    },
                    x = 15;
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, x);
                }
                function B(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function F(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function z(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, x);
                }
                function V(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function j(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function G(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: W(t.x), y: W(t.y) };
                }
                function U() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function $() {
                    return viewEnv.getScale();
                }
                function q(e) {
                    return viewEnv.pxToRem(e);
                }
                function W(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const J = Object.keys(P).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === P[t]), e), {}),
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
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ne = { view: a, client: o, sound: y };
            },
            521: (e, t, n) => {
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
            358: (e, t, n) => {
                n.d(t, { Z: () => i });
                var r = n(768);
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
            916: (e, t, n) => {
                n.d(t, { B0: () => s, ry: () => g });
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
                var i = n(358);
                var a = n(613);
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    m = n(768);
                const p = ['args'];
                function v(e, t, n, r, o, i, a) {
                    try {
                        var s = e[i](a),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, o);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                            v(i, r, o, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            v(i, r, o, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    w = (e, t) => {
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
                                })(t, p);
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
                    h = () => w(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var E = n(572);
                const y = o.instance,
                    O = {
                        DataTracker: i.Z,
                        ViewModel: E.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => w(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => w(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            w(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, o = R.invalid('resId'), i) => {
                            const a = m.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                p = {
                                    x: m.O.view.pxToRem(c) + a.x,
                                    y: m.O.view.pxToRem(d) + a.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(_),
                                };
                            w(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: b(p),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, h);
                        },
                        handleViewEvent: w,
                        onBindingsReady: g,
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
                        ClickOutsideManager: y,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = O;
            },
            613: (e, t, n) => {
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
            194: (e, t, n) => {
                var r = n(179),
                    o = n.n(r),
                    i = n(493),
                    a = n.n(i);
                let s;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.HasToken = 1)] = 'HasToken'), (e[(e.Error = 2)] = 'Error');
                })(s || (s = {}));
                function l() {
                    return !1;
                }
                console.log;
                var c = n(174),
                    d = n(768);
                function u(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return _(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? _(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function _(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const m = (e) => (0 === e ? window : window.subViews.get(e));
                var p = n(946);
                const v = ((e, t) => {
                        const n = (0, r.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: a, children: s, mocks: _ }) {
                                const p = (0, r.useRef)([]),
                                    v = (n, r, o) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = m,
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
                                                            l = d.O.view.addModelObserver(s, t, !0);
                                                        return o.set(l, n), e && n(a(i)), l;
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
                                                        for (var e, n = u(o.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            s =
                                                'real' === n
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            _ = (e) =>
                                                'mocks' === n ? (null == o ? void 0 : o.getter(e)) : s.readByPath(e),
                                            v = (e) => p.current.push(e),
                                            b = e({
                                                mode: n,
                                                readByPath: _,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : _(e),
                                                            o = c.LO.box(r, { equals: l });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, c.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : _(e),
                                                            o = c.LO.box(r, { equals: l });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, c.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = _(t);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, t) => ((e[t] = c.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, c.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = c.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, c.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                a[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: v,
                                            }),
                                            g = { mode: n, model: b, externalModel: s, cleanup: v };
                                        return {
                                            model: b,
                                            controls: 'mocks' === n && o ? o.controls(g) : t(g),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    b = (0, r.useRef)(!1),
                                    g = (0, r.useState)(i),
                                    w = g[0],
                                    h = g[1],
                                    f = (0, r.useState)(() => v(i, a, _)),
                                    E = f[0],
                                    y = f[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        b.current ? y(v(w, a, _)) : (b.current = !0);
                                    }, [_, w, a]),
                                    (0, r.useEffect)(() => {
                                        h(i);
                                    }, [i]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            E.externalModel.dispose(), p.current.forEach((e) => e());
                                        },
                                        [E],
                                    ),
                                    o().createElement(n.Provider, { value: E }, s)
                                );
                            },
                            () => (0, r.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() };
                            return Object.assign({}, t, {
                                computes: {
                                    hasProgress: (0, p.Om)(() => {
                                        const e = t.root.get(),
                                            n = e.maxProgress,
                                            r = e.state,
                                            o = e.isCompleted;
                                        return n > 0 && r !== s.Error && !o;
                                    }),
                                },
                            });
                        },
                        ({ externalModel: e }) => ({ onClick: e.createCallbackNoArgs('onClick') }),
                    ),
                    b = v[0],
                    g = v[1];
                var w = n(483),
                    h = n.n(w);
                const f = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let E, y;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(E || (E = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(y || (y = {}));
                const O = ({ size: e = E.Default }) => {
                        const t = h()(f.background, f[`background__${e}`]);
                        return o().createElement('div', { className: t });
                    },
                    k = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    P = ({ size: e }) => {
                        const t = h()(k.base, k[`base__${e}`]);
                        return o().createElement('div', { className: t });
                    },
                    C = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    T = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: r, isComplete: i, withoutBounce: a }) => {
                            const s = h()(
                                    C.base,
                                    C[`base__${e}`],
                                    n && C.base__disabled,
                                    i && C.base__finished,
                                    a && C.base__withoutBounce,
                                ),
                                l = !n && !i;
                            return o().createElement(
                                'div',
                                { className: s, style: r, ref: t },
                                o().createElement('div', { className: C.pattern }),
                                o().createElement('div', { className: C.gradient }),
                                l && o().createElement(P, { size: e }),
                            );
                        },
                    ),
                    S = ({ size: e, value: t, lineRef: n, disabled: i, onComplete: a }) => {
                        const s = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                l && a && a();
                            }, [l, a]),
                            o().createElement(T, { size: e, disabled: i, baseStyles: s, isComplete: l, lineRef: n })
                        );
                    },
                    M = (e, t) => {
                        let n;
                        const r = setTimeout(() => {
                            n = e();
                        }, t);
                        return () => {
                            'function' == typeof n && n(), clearTimeout(r);
                        };
                    };
                let A, L;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(A || (A = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(L || (L = {}));
                const D = 'ProgressBarDeltaSimple_base_6c',
                    x = 'ProgressBarDeltaSimple_delta_99',
                    I = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: i,
                            size: a,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = s < i,
                                u = (0, r.useState)(L.Idle),
                                _ = u[0],
                                m = u[1],
                                p = _ === L.In,
                                v = _ === L.End,
                                b = _ === L.Idle,
                                g = (0, r.useCallback)(
                                    (e) => {
                                        m(e), c && c(e);
                                    },
                                    [c],
                                );
                            (0, r.useEffect)(() => {
                                if (b && !n) {
                                    return M(() => {
                                        g(L.In);
                                    }, t);
                                }
                            }, [g, n, b, t]),
                                (0, r.useEffect)(() => {
                                    if (p) {
                                        return M(() => {
                                            l && l(), g(L.End);
                                        }, e + t);
                                    }
                                }, [g, p, l, t, e]);
                            const w = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                h = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                f = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(i - s)}%`, left: `${d ? s : i}%` }),
                                    [i, d, s],
                                );
                            return v
                                ? null
                                : o().createElement(
                                      'div',
                                      { className: D, style: f },
                                      o().createElement(
                                          'div',
                                          { style: b ? w : h, className: x },
                                          o().createElement(P, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    N = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: i,
                            disabled: a,
                            isComplete: s,
                            animationSettings: l,
                            onChangeAnimationState: c,
                            onEndAnimation: d,
                        }) => {
                            const u = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(T, {
                                    size: t,
                                    lineRef: i,
                                    disabled: a,
                                    isComplete: s,
                                    baseStyles: u,
                                }),
                                n >= 0 &&
                                    o().createElement(I, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: c,
                                        onEndAnimation: d,
                                    }),
                            );
                        },
                    ),
                    B = 'ProgressBarDeltaGrow_base_7e',
                    F = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    z = 'ProgressBarDeltaGrow_glow_68',
                    V = (e) => (e ? { left: 0 } : { right: 0 }),
                    j = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    G = (e) => ({ transitionDuration: `${e}ms` }),
                    U = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: i,
                            size: a,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: d,
                        }) => {
                            const u = s < i,
                                _ = (0, r.useState)(A.Idle),
                                m = _[0],
                                p = _[1],
                                v = m === A.End,
                                b = m === A.Idle,
                                g = m === A.Grow,
                                w = m === A.Shrink,
                                f = (0, r.useCallback)(
                                    (e) => {
                                        p(e), c && c(e);
                                    },
                                    [c],
                                ),
                                E = (0, r.useCallback)(
                                    (e, t) =>
                                        M(() => {
                                            f(e);
                                        }, t),
                                    [f],
                                );
                            (0, r.useEffect)(() => {
                                if (!n)
                                    return b
                                        ? E(A.Grow, t)
                                        : g
                                          ? E(A.Shrink, e)
                                          : w
                                            ? E(A.End, e)
                                            : void (v && l && l());
                            }, [E, n, v, g, b, w, l, t, e]);
                            const y = (0, r.useMemo)(() => Object.assign({ width: '100%' }, G(e), V(u)), [u, e]),
                                O = (0, r.useMemo)(() => Object.assign({ width: '0%' }, G(e), V(u)), [u, e]),
                                k = (0, r.useMemo)(() => Object.assign({ width: '0%' }, j(u, i), G(e)), [i, u, e]),
                                C = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - i)}%` }, j(u, i), G(e)),
                                    [i, u, s, e],
                                );
                            if (v) return null;
                            const T = h()(B, d, u && 0 === s && F);
                            return o().createElement(
                                'div',
                                { style: b ? k : C, className: T },
                                o().createElement(
                                    'div',
                                    { style: w ? O : y, className: z },
                                    o().createElement(P, { size: a }),
                                ),
                            );
                        },
                    ),
                    $ = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: i,
                            disabled: a,
                            isComplete: s,
                            animationSettings: l,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                        }) => {
                            const u = e < n,
                                _ = (0, r.useState)(!1),
                                m = _[0],
                                p = _[1],
                                v = (0, r.useCallback)(
                                    (e) => {
                                        e === A.Shrink && p(!0), d && d(e);
                                    },
                                    [d],
                                ),
                                b = (0, r.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                g = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(T, {
                                    size: t,
                                    lineRef: i,
                                    disabled: a,
                                    isComplete: s,
                                    withoutBounce: u && 0 === e,
                                    baseStyles: m ? g : b,
                                }),
                                n >= 0 &&
                                    o().createElement(U, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: v,
                                        freezed: l.freezed,
                                        onEndAnimation: c,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: l.delta.className,
                                    }),
                            );
                        },
                    ),
                    q = ['onComplete', 'onEndAnimation'];
                function W() {
                    return (
                        (W = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        W.apply(null, arguments)
                    );
                }
                const K = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, q);
                        const a = (0, r.useState)(!1),
                            s = a[0],
                            l = a[1],
                            c = (0, r.useCallback)(() => {
                                const e = 100 === i.to;
                                e !== s && l(e), e && t && t(), n && n();
                            }, [s, t, n, i.to]);
                        switch (i.animationSettings.type) {
                            case y.Simple:
                                return o().createElement(N, W({}, i, { onEndAnimation: c, isComplete: s }));
                            case y.Growing:
                                return o().createElement($, W({}, i, { onEndAnimation: c, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    H = ['onEndAnimation'];
                function Y() {
                    return (
                        (Y = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Y.apply(null, arguments)
                    );
                }
                const Z = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, H);
                    const i = (0, r.useRef)({}),
                        a = (0, r.useCallback)(() => {
                            (i.current.from = void 0), t && t();
                        }, [t]),
                        s = 'number' == typeof i.current.from ? i.current.from : n.from;
                    return (
                        (i.current.from = s),
                        o().createElement(K, Y({}, n, { onEndAnimation: a, key: `${s}-${n.to}`, from: s }))
                    );
                });
                function X() {
                    return (
                        (X = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        X.apply(null, arguments)
                    );
                }
                const Q = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: r,
                            deltaFrom: i,
                            animationSettings: a,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (i === t)
                                return o().createElement(S, {
                                    key: `${i}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: r,
                                    onComplete: c,
                                });
                            const d = {
                                from: i,
                                to: t,
                                size: e,
                                lineRef: n,
                                disabled: r,
                                animationSettings: a,
                                onComplete: c,
                                onEndAnimation: s,
                                onChangeAnimationState: l,
                            };
                            return a.withStack
                                ? o().createElement(Z, d)
                                : o().createElement(K, X({ key: `${i}-${t}` }, d));
                        },
                    ),
                    J = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    ee = (e, t, n) => (n < e ? e : n > t ? t : n),
                    te = (e, t, n) => {
                        if ('number' == typeof n) {
                            return (ee(0, t, n) / t) * 100;
                        }
                        return e;
                    },
                    ne = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    re = {
                        freezed: !1,
                        withStack: !1,
                        type: y.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    oe = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = ne,
                            size: n = E.Default,
                            animationSettings: i = re,
                            disabled: a = !1,
                            withoutBackground: s = !1,
                            value: l,
                            deltaFrom: c,
                            lineRef: d,
                            onChangeAnimationState: u,
                            onEndAnimation: _,
                            onComplete: m,
                        }) => {
                            const p = ((e, t, n) =>
                                (0, r.useMemo)(() => {
                                    const r = (ee(0, t, e) / t) * 100;
                                    return { value: r, deltaFrom: te(r, t, n) };
                                }, [n, t, e]))(l, e, c);
                            return o().createElement(
                                'div',
                                { className: h()(f.base, f[`base__${n}`]), style: J(t) },
                                !s && o().createElement(O, { size: n }),
                                o().createElement(Q, {
                                    size: n,
                                    lineRef: d,
                                    disabled: a,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: i,
                                    onEndAnimation: _,
                                    onChangeAnimationState: u,
                                    onComplete: m,
                                }),
                            );
                        },
                    );
                var ie = n(916);
                const ae = [
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
                function se(e) {
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
                const le = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ie.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    ce = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            o = e.args,
                            i = e.onMouseEnter,
                            a = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            d = void 0 !== c && c,
                            u = e.ignoreMouseClick,
                            _ = void 0 !== u && u,
                            m = e.decoratorId,
                            p = void 0 === m ? 0 : m,
                            v = e.isEnabled,
                            b = void 0 === v || v,
                            g = e.targetId,
                            w = void 0 === g ? 0 : g,
                            h = e.onShow,
                            f = e.onHide,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, ae);
                        const y = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            O = (0, r.useMemo)(
                                () =>
                                    w ||
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
                                [w],
                            ),
                            k = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (le(n, p, { isMouseEvent: !0, on: !0, arguments: se(o) }, O),
                                    h && h(),
                                    (y.current.isVisible = !0));
                            }, [n, p, o, O, h]),
                            P = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        le(n, p, { on: !1 }, O),
                                        y.current.isVisible && f && f(),
                                        (y.current.isVisible = !1);
                                }
                            }, [n, p, O, f]),
                            C = (0, r.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && P();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', C, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', C, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === b && P();
                            }, [b, P]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', P),
                                    () => {
                                        window.removeEventListener('mouseleave', P), P();
                                    }
                                ),
                                [P],
                            );
                        return b
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(k, d ? 100 : 400)),
                                                      i && i(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              P(), null == a || a(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === _ && P(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === _ && P(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      E,
                                  ),
                              )
                            : t;
                        var T;
                    };
                function de(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const ue = {
                    playHighlight() {
                        de('highlight');
                    },
                    playClick() {
                        de('play');
                    },
                    playYes() {
                        de('yes1');
                    },
                };
                var _e = n(403);
                const me = 'App_base_a7',
                    pe = 'App_base__disabled_00',
                    ve = 'App_bg_c0',
                    be = 'App_hover_ba',
                    ge = 'App_icon_b7',
                    we = 'App_icon__logo_43',
                    he = 'App_icon__done_58',
                    fe = 'App_icon__token_1e',
                    Ee = 'App_icon__error_f7',
                    ye = 'App_level_e6',
                    Oe = 'App_progress_ad',
                    ke = 'App_blinkContainer_69',
                    Pe = 'App_shine_ed',
                    Ce = 'App_shine__left_b4',
                    Te = 'App_shine__right_db',
                    Se = 'App_shine__appear_4e',
                    Me = 'App_blink_c1',
                    Re = 'Level_base_5f',
                    Ae = 'Level_mask_e6',
                    Le = ({ value: e }) =>
                        o().createElement('div', { className: Re }, e, o().createElement('div', { className: Ae }, e)),
                    De = (0, _e.Pi)(() => {
                        const e = g(),
                            t = e.controls,
                            n = e.model,
                            r = n.root.get(),
                            i = r.state,
                            a = r.questNumber,
                            l = r.isCompleted,
                            c = r.currentProgress,
                            d = r.maxProgress,
                            u = h()(me, i === s.Error && pe);
                        return o().createElement(
                            ce,
                            { contentId: R.views.lobby.battle_matters.tooltips.BattleMattersEntryTooltipView('resId') },
                            o().createElement(
                                'div',
                                {
                                    className: u,
                                    id: 'battle-matters-entry-point',
                                    onClick: () => {
                                        t.onClick(), ue.playClick();
                                    },
                                    onMouseEnter: () => {
                                        ue.playHighlight();
                                    },
                                },
                                o().createElement('div', { className: ve }),
                                o().createElement('div', { className: be }),
                                o().createElement('div', { className: h()(ge, we) }),
                                l
                                    ? o().createElement('div', { className: h()(ge, he) })
                                    : o().createElement('div', { className: ye }, o().createElement(Le, { value: a })),
                                n.computes.hasProgress() &&
                                    o().createElement(
                                        'div',
                                        { className: Oe },
                                        o().createElement(oe, { size: E.Small, value: c, maxValue: d }),
                                    ),
                                i !== s.Error &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: h()(Pe, Se, Ce) }),
                                        o().createElement('div', { className: h()(Pe, Se, Te) }),
                                    ),
                                i === s.HasToken &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: h()(ge, fe) }),
                                        o().createElement('div', { className: h()(Pe, Ce) }),
                                        o().createElement('div', { className: h()(Pe, Te) }),
                                        o().createElement(
                                            'div',
                                            { className: ke },
                                            o().createElement('div', { className: Me }),
                                        ),
                                    ),
                                i === s.Error && o().createElement('div', { className: h()(ge, Ee) }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    a().render(
                        o().createElement(b, null, o().createElement(De, null)),
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
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var o = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], i = !0, a = 0; a < t.length; a++)
                        (!1 & r || o >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((i = !1), r < o && (o = r));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, r];
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
        (__webpack_require__.j = 642),
        (() => {
            var e = { 642: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        o,
                        [i, a, s] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < i.length; l++)
                        (o = i[l]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [965], () => __webpack_require__(194));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
