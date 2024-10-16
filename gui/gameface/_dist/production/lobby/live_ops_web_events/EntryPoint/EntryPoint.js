(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (e, t, n) => {
                n.d(t, { O: () => ne });
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => p, off: () => d, on: () => u, onResize: () => l, onScaleUpdated: () => _ });
                var i = {};
                n.r(i),
                    n.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => E,
                        getSize: () => b,
                        graphicsQuality: () => m,
                        playSound: () => w,
                        setRTPC: () => h,
                    });
                var o = {};
                n.r(o), n.d(o, { getBgUrl: () => T, getTextureUrl: () => O });
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
                        addModelObserver: () => F,
                        addPreloadTexture: () => N,
                        children: () => o,
                        displayStatus: () => k,
                        displayStatusIs: () => J,
                        events: () => P,
                        extraSize: () => ee,
                        forceTriggerMouseMove: () => $,
                        freezeTextureBeforeResize: () => H,
                        getBrowserTexturePath: () => V,
                        getDisplayStatus: () => Q,
                        getScale: () => K,
                        getSize: () => U,
                        getViewGlobalPosition: () => q,
                        isEventHandled: () => X,
                        isFocused: () => Y,
                        pxToRem: () => W,
                        remToPx: () => G,
                        resize: () => j,
                        sendEvent: () => x,
                        setAnimateWindow: () => z,
                        setEventHandled: () => Z,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => B,
                        whenTutorialReady: () => te,
                    });
                const l = s('clientResized'),
                    _ = s('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    d = (e, t) => engine.off(e, t),
                    v = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const p = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function n() {
                        e.enabled && c(!0);
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
                            : c(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const o = `mouse${t}`,
                                        a = v[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, s),
                                        r(),
                                        () => {
                                            i &&
                                                (a(),
                                                window.removeEventListener(o, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (i = !1));
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
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function w(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function h(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    f = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    g = Object.keys(f).reduce((e, t) => ((e[t] = () => w(f[t])), e), {}),
                    y = { play: Object.assign({}, g, { sound: w }), setRTPC: h };
                function O(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function T(e, t, n) {
                    return `url(${O(e, t, n)})`;
                }
                const k = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    P = {
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
                    S = ['args'];
                const M = 2,
                    R = 16,
                    A = 32,
                    C = 64,
                    L = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, S);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    x = {
                        close(e) {
                            L('popover' === e ? M : A);
                        },
                        minimize() {
                            L(C);
                        },
                        move(e) {
                            L(R, { isMouseEvent: !0, on: e });
                        },
                    },
                    I = 15;
                function N(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, I);
                }
                function V(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function F(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, I);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function j(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function q(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: G(t.x), y: G(t.y) };
                }
                function H() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function K() {
                    return viewEnv.getScale();
                }
                function W(e) {
                    return viewEnv.pxToRem(e);
                }
                function G(e) {
                    return viewEnv.remToPx(e);
                }
                function z(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Y() {
                    return viewEnv.isFocused();
                }
                function Z() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function $() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const J = Object.keys(k).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === k[t]), e), {}),
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
                            window.isDomBuilt ? e() : P.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ne = { view: a, client: i, sound: y };
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => o });
                var r = n(768);
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
                    addCallback(e, t, n = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = r.O.view.addModelObserver(e, n, i);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(o) : (this._views[n] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
                i.__instance = void 0;
                const o = i;
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
                n.d(t, { B0: () => s, ry: () => E });
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
                const i = r;
                var o = n(358);
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let d, v;
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
                })(d || (d = {})),
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
                    })(v || (v = {}));
                var p = n(768);
                const w = ['args'];
                function h(e, t, n, r, i, o, a) {
                    try {
                        var s = e[o](a),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(r, i);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        n = arguments;
                                    return new Promise(function (r, i) {
                                        var o = e.apply(t, n);
                                        function a(e) {
                                            h(o, r, i, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(o, r, i, a, s, 'throw', e);
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
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, w);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    f = () => m(s.CLOSE),
                    g = (e, t) => {
                        e.keyCode === d.ESCAPE && t();
                    };
                var y = n(572);
                const O = i.instance,
                    T = {
                        DataTracker: o.Z,
                        ViewModel: y.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: _,
                        DateFormatType: u,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => m(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => m(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            m(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, i = R.invalid('resId'), o) => {
                            const a = p.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                l = c.x,
                                _ = c.y,
                                u = c.width,
                                d = c.height,
                                v = {
                                    x: p.O.view.pxToRem(l) + a.x,
                                    y: p.O.view.pxToRem(_) + a.y,
                                    width: p.O.view.pxToRem(u),
                                    height: p.O.view.pxToRem(d),
                                };
                            m(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: b(v),
                                on: !0,
                                args: o,
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
                        onBindingsReady: E,
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
                                    const i = Object.prototype.toString.call(t[r]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < i.length; t++) n[r].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
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
            613: (e, t, n) => {
                n.d(t, { Z5: () => r, cy: () => i });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            997: (e, t, n) => {
                var r = n(179),
                    i = n.n(r),
                    o = n(493),
                    a = n.n(o),
                    s = n(483),
                    c = n.n(s);
                var l = n(976);
                const _ = [
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
                function u(e) {
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
                const d = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: l.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    v = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            i = e.args,
                            o = e.onMouseEnter,
                            a = e.onMouseLeave,
                            s = e.onMouseDown,
                            c = e.onClick,
                            l = e.ignoreShowDelay,
                            v = void 0 !== l && l,
                            p = e.ignoreMouseClick,
                            w = void 0 !== p && p,
                            h = e.decoratorId,
                            b = void 0 === h ? 0 : h,
                            E = e.isEnabled,
                            m = void 0 === E || E,
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
                            })(e, _);
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
                            S = (0, r.useCallback)(() => {
                                (k.current.isVisible && k.current.timeoutId) ||
                                    (d(n, b, { isMouseEvent: !0, on: !0, arguments: u(i) }, P),
                                    y && y(),
                                    (k.current.isVisible = !0));
                            }, [n, b, i, P, y]),
                            M = (0, r.useCallback)(() => {
                                if (k.current.isVisible || k.current.timeoutId) {
                                    const e = k.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (k.current.timeoutId = 0)),
                                        d(n, b, { on: !1 }, P),
                                        k.current.isVisible && O && O(),
                                        (k.current.isVisible = !1);
                                }
                            }, [n, b, P, O]),
                            A = (0, r.useCallback)((e) => {
                                k.current.isVisible &&
                                    ((k.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (k.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(k.current.prevTarget) && M();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = k.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', A, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', A, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === m && M();
                            }, [m, M]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', M),
                                    () => {
                                        window.removeEventListener('mouseleave', M), M();
                                    }
                                ),
                                [M],
                            );
                        return m
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((C = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((k.current.timeoutId = window.setTimeout(S, v ? 100 : 400)),
                                                      o && o(e),
                                                      C && C(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              M(), null == a || a(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === w && M(), null == c || c(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === w && M(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      T,
                                  ),
                              )
                            : t;
                        var C;
                    };
                let p;
                !(function (e) {
                    (e.PRE_EVENT = 'preEvent'), (e.EVENT_ACTIVE = 'eventActive'), (e.POST_EVENT = 'postEvent');
                })(p || (p = {}));
                function w() {
                    const e = (0, r.useRef)(!0);
                    var t;
                    return (
                        (t = () => {
                            e.current = !1;
                        }),
                        (0, r.useEffect)(t, []),
                        e.current
                    );
                }
                function h() {
                    const e = (0, r.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.clearTimeout(e.current);
                        }),
                        (0, r.useEffect)(() => t, []),
                        (0, r.useMemo)(
                            () => ({
                                run: (t, n) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = 0), t();
                                        }, n));
                                },
                                clear: () => {
                                    window.clearTimeout(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                var b = n(515);
                function E() {
                    return !1;
                }
                console.log;
                var m = n(174),
                    f = n(768);
                function g(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return y(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? y(e, t)
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
                function y(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const O = (e) => (0 === e ? window : window.subViews.get(e));
                const T = ((e, t) => {
                        const n = (0, r.createContext)({});
                        return [
                            function ({ mode: o = 'real', options: a, children: s, mocks: c }) {
                                const l = (0, r.useRef)([]),
                                    _ = (n, r, i) => {
                                        var o;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = O,
                                                context: r = 'model',
                                            } = {}) {
                                                const i = new Map();
                                                function o(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? i.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = i.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const i = n(t),
                                                        o = r.split('.').reduce((e, t) => e[t], i);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? o
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (n, o) => {
                                                        const s = 'string' == typeof o ? `${r}.${o}` : r,
                                                            c = f.O.view.addModelObserver(s, t, !0);
                                                        return i.set(c, n), e && n(a(o)), c;
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
                                                        for (var e, n = g(i.keys()); !(e = n()).done; ) o(e.value, t);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(r),
                                            s =
                                                'real' === n
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (o = null == i ? void 0 : i.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == i ? void 0 : i.getter(e)) : s.readByPath(e),
                                            _ = (e) => l.current.push(e),
                                            u = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            i = m.LO.box(r, { equals: E });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, m.aD)((e) => i.set(e)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            i = m.LO.box(r, { equals: E });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, m.aD)((e) => i.set(e)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = c(t);
                                                        if (Array.isArray(e)) {
                                                            const i = e.reduce(
                                                                (e, t) => ((e[t] = m.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, m.aD)((t) => {
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
                                                                o = Object.entries(i),
                                                                a = o.reduce(
                                                                    (e, [t, n]) => ((e[n] = m.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, m.aD)((e) => {
                                                                            o.forEach(([t, n]) => {
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
                                                cleanup: _,
                                            }),
                                            d = { mode: n, model: u, externalModel: s, cleanup: _ };
                                        return {
                                            model: u,
                                            controls: 'mocks' === n && i ? i.controls(d) : t(d),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    u = (0, r.useRef)(!1),
                                    d = (0, r.useState)(o),
                                    v = d[0],
                                    p = d[1],
                                    w = (0, r.useState)(() => _(o, a, c)),
                                    h = w[0],
                                    b = w[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        u.current ? b(_(v, a, c)) : (u.current = !0);
                                    }, [c, v, a]),
                                    (0, r.useEffect)(() => {
                                        p(o);
                                    }, [o]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [h],
                                    ),
                                    i().createElement(n.Provider, { value: h }, s)
                                );
                            },
                            () => (0, r.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => ({ root: e.object() }),
                        ({ externalModel: e }) => ({ onClick: e.createCallbackNoArgs('onClick') }),
                    ),
                    k = T[0],
                    P = T[1],
                    S = {
                        base: 'App_base_64',
                        base__big: 'App_base__big_aa',
                        flag: 'App_flag_5e',
                        base__firstShow: 'App_base__firstShow_ba',
                        FirstShow: 'App_FirstShow_ba',
                        base__firstShowBig: 'App_base__firstShowBig_0c',
                        bgAppear: 'App_bgAppear_5a',
                        base__preEvent: 'App_base__preEvent_8f',
                        base__eventActive: 'App_base__eventActive_00',
                        base__postEvent: 'App_base__postEvent_cc',
                        flagHover: 'App_flagHover_10',
                        content: 'App_content_bb',
                        calendarIcon: 'App_calendarIcon_d5',
                        blinking: 'App_blinking_68',
                        statusIcon: 'App_statusIcon_29',
                        blinkShape: 'App_blinkShape_2f',
                        blink: 'App_blink_20',
                        blinker: 'App_blinker_0d',
                        shine: 'App_shine_a0',
                        shine__left: 'App_shine__left_72',
                        shine__right: 'App_shine__right_a8',
                        shine__appear: 'App_shine__appear_6c',
                        shineAppear: 'App_shineAppear_76',
                    };
                function M(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const A = {
                        playHighlight() {
                            M('highlight');
                        },
                        playClick() {
                            M('play');
                        },
                        playYes() {
                            M('yes1');
                        },
                    },
                    C = (0, b.Pi)(() => {
                        const e = P(),
                            t = e.model,
                            n = e.controls,
                            o = t.root.get(),
                            a = o.state,
                            s = o.isFirstEntry,
                            l = o.previousState,
                            _ = o.isVisited,
                            u = o.isSmall,
                            d = o.isHighQualityPreset,
                            b = s && l === p.PRE_EVENT && a === p.EVENT_ACTIVE,
                            E = (0, r.useState)(b ? l : a),
                            m = E[0],
                            f = E[1],
                            g = w(),
                            y = h();
                        return (
                            (0, r.useEffect)(() => {
                                b
                                    ? y.run(() => {
                                          f(a);
                                      }, 2e3)
                                    : f(a);
                            }, [y, a, b, f]),
                            i().createElement(
                                v,
                                {
                                    contentId: R.views.lobby.live_ops_web_events.EntryPointTooltip('resId'),
                                    args: { state: m },
                                },
                                i().createElement(
                                    'div',
                                    {
                                        className: c()(
                                            S.base,
                                            S[`base__${m}`],
                                            !u && S.base__big,
                                            u && g && S.base__firstShow,
                                            !u && g && S.base__firstShowBig,
                                        ),
                                        onClick: () => {
                                            n.onClick(), A.playClick();
                                        },
                                        onMouseEnter: () => {
                                            A.playHighlight();
                                        },
                                    },
                                    i().createElement('div', { className: S.flag }),
                                    i().createElement('div', { className: S.flagHover }),
                                    i().createElement(
                                        'div',
                                        { className: S.content },
                                        i().createElement('div', { className: S.calendarIcon }),
                                        i().createElement('div', { className: S.statusIcon }),
                                        d &&
                                            !_ &&
                                            m === p.EVENT_ACTIVE &&
                                            i().createElement(
                                                'div',
                                                { className: S.blinkShape },
                                                i().createElement('div', { className: S.blink }),
                                            ),
                                    ),
                                    i().createElement('div', {
                                        className: c()(S.shine, S.shine__appear, S.shine__left),
                                    }),
                                    i().createElement('div', {
                                        className: c()(S.shine, S.shine__appear, S.shine__right),
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    a().render(i().createElement(k, null, i().createElement(C, null)), document.getElementById('root'));
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
                var i = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, r] = deferred[c], o = !0, a = 0; a < t.length; a++)
                        (!1 & r || i >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((o = !1), r < i && (i = r));
                    if (o) {
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
        (__webpack_require__.j = 526),
        (() => {
            var e = { 526: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        i,
                        [o, a, s] = n,
                        c = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); c < o.length; c++)
                        (i = o[c]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [233], () => __webpack_require__(997));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
