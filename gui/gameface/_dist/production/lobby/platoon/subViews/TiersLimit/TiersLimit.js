(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (e, t, n) => {
                n.d(t, { O: () => te });
                var o = {};
                n.r(o),
                    n.d(o, { mouse: () => v, off: () => _, on: () => d, onResize: () => l, onScaleUpdated: () => u });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => b,
                        getSize: () => p,
                        graphicsQuality: () => f,
                        playSound: () => w,
                        setRTPC: () => h,
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
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => A,
                        addPreloadTexture: () => B,
                        children: () => i,
                        displayStatus: () => T,
                        displayStatusIs: () => Q,
                        events: () => C,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => D,
                        getDisplayStatus: () => Z,
                        getScale: () => z,
                        getSize: () => F,
                        getViewGlobalPosition: () => H,
                        isEventHandled: () => Y,
                        isFocused: () => $,
                        pxToRem: () => G,
                        remToPx: () => W,
                        resize: () => j,
                        sendEvent: () => x,
                        setAnimateWindow: () => q,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => V,
                        whenTutorialReady: () => ee,
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
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const f = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    E = Object.keys(g).reduce((e, t) => ((e[t] = () => w(g[t])), e), {}),
                    y = { play: Object.assign({}, E, { sound: w }), setRTPC: h };
                function O(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function k(e, t, n) {
                    return `url(${O(e, t, n)})`;
                }
                const T = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    P = ['args'];
                const S = 2,
                    R = 16,
                    M = 32,
                    L = 64,
                    N = (e, t) => {
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
                                })(t, P);
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
                    x = {
                        close(e) {
                            N('popover' === e ? S : M);
                        },
                        minimize() {
                            N(L);
                        },
                        move(e) {
                            N(R, { isMouseEvent: !0, on: e });
                        },
                    };
                function B(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function D(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function A(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function V(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function j(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function H(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: W(t.x), y: W(t.y) };
                }
                function U() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function G(e) {
                    return viewEnv.pxToRem(e);
                }
                function W(e) {
                    return viewEnv.remToPx(e);
                }
                function q(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function $() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const Q = Object.keys(T).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === T[t]), e), {}),
                    J = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ee = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    te = { view: a, client: r, sound: y };
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
                var o = n(768);
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
                n.d(t, { Sw: () => i.Z, B0: () => s, wU: () => O, ry: () => p, Eu: () => b, SW: () => E, P3: () => y });
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
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    m = n(768);
                const v = ['args'];
                function w(e, t, n, o, r, i, a) {
                    try {
                        var s = e[i](a),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(o, r);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                            w(i, o, r, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            w(i, o, r, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    f = (e, t) => {
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
                                })(t, v);
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
                    g = () => f(s.CLOSE),
                    E = () => f(s.POP_OVER, { on: !1 }),
                    y = (e, t, n, o, r = R.invalid('resId'), i) => {
                        const a = m.O.view.getViewGlobalPosition(),
                            c = n.getBoundingClientRect(),
                            l = c.x,
                            u = c.y,
                            d = c.width,
                            _ = c.height,
                            v = {
                                x: m.O.view.pxToRem(l) + a.x,
                                y: m.O.view.pxToRem(u) + a.y,
                                width: m.O.view.pxToRem(d),
                                height: m.O.view.pxToRem(_),
                            };
                        f(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: o || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: h(v),
                            on: !0,
                            args: i,
                        });
                    },
                    O = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    k = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var T = n(572);
                const C = r.instance,
                    P = {
                        DataTracker: i.Z,
                        ViewModel: T.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => f(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: E,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: y,
                        addEscapeListener: (e) => {
                            const t = (t) => k(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            k(e, g);
                        },
                        handleViewEvent: f,
                        onBindingsReady: p,
                        onLayoutReady: b,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: O,
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
                        ClickOutsideManager: C,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = P;
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
            370: (e, t, n) => {
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
                var _ = n(916);
                const m = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    v = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    w = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const o = u(`${e}.${n}`, window);
                                return m(o) ? t(e, n, o) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    h = (e) => {
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
                    p = _.Sw.instance;
                let b;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(b || (b = {}));
                const f = (e = 'model', t = b.Deep) => {
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
                                        ((t = t ? b.Deep : b.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== b.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === b.Deep
                                                ? (e === v && r((e) => e + 1), f(e))
                                                : f(Object.assign([], e));
                                        },
                                        o = h(e);
                                    g.current = p.addCallback(o, n, s, t === b.Deep);
                                }
                            }),
                            (0, o.useEffect)(() => {
                                if (t !== b.None)
                                    return () => {
                                        p.removeCallback(g.current, s);
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
                            h = e.isEnabled,
                            p = void 0 === h || h,
                            b = e.targetId,
                            f = void 0 === b ? 0 : b,
                            O = e.onShow,
                            k = e.onHide,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, g);
                        const C = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            P = (0, o.useMemo)(() => f || l().resId, [f]),
                            S = (0, o.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (y(n, w, { isMouseEvent: !0, on: !0, arguments: E(r) }, P),
                                    O && O(),
                                    (C.current.isVisible = !0));
                            }, [n, w, r, P, O]),
                            R = (0, o.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        y(n, w, { on: !1 }, P),
                                        C.current.isVisible && k && k(),
                                        (C.current.isVisible = !1);
                                }
                            }, [n, w, P, k]),
                            M = (0, o.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && R();
                                    }, 200)));
                            }, []);
                        (0, o.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', M, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', M, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, o.useEffect)(() => {
                                !1 === p && R();
                            }, [p, R]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', R),
                                    () => {
                                        window.removeEventListener('mouseleave', R), R();
                                    }
                                ),
                                [R],
                            );
                        return p
                            ? (0, o.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((C.current.timeoutId = window.setTimeout(S, d ? 100 : 400)),
                                                      i && i(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              R(), null == a || a(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && R(), null == c || c(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && R(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      T,
                                  ),
                              )
                            : t;
                        var L;
                    };
                let k, T;
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
                    })(T || (T = {}));
                function C(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const P = {
                        playHighlight() {
                            C('highlight');
                        },
                        playClick() {
                            C('play');
                        },
                        playYes() {
                            C('yes1');
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
                        onClick: h,
                    }) => {
                        const p = (0, o.useRef)(null),
                            b = (0, o.useState)(n),
                            f = b[0],
                            g = b[1],
                            E = (0, o.useState)(!1),
                            y = E[0],
                            O = E[1];
                        return (
                            (0, o.useEffect)(() => {
                                function e(e) {
                                    f && null !== p.current && !p.current.contains(e.target) && g(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [f]),
                            (0, o.useEffect)(() => {
                                g(n);
                            }, [n]),
                            r().createElement(
                                'div',
                                {
                                    ref: p,
                                    className: c()(
                                        S.base,
                                        S[`base__${i}`],
                                        a && S.base__disabled,
                                        t && S[`base__${t}`],
                                        f && S.base__focus,
                                        y && S.base__highlightActive,
                                        s,
                                    ),
                                    onMouseEnter: function (e) {
                                        a || (null !== l && C(l), d && d(e));
                                    },
                                    onMouseMove: function (e) {
                                        _ && _(e);
                                    },
                                    onMouseUp: function (e) {
                                        a || (v && v(e), O(!1));
                                    },
                                    onMouseDown: function (e) {
                                        a ||
                                            (null !== u && C(u),
                                            m && m(e),
                                            n && (a || (p.current && (p.current.focus(), g(!0)))),
                                            O(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        a || (w && w(e), O(!1));
                                    },
                                    onClick: function (e) {
                                        a || (h && h(e));
                                    },
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
                                    { className: c()(S.state, S.state__default) },
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
                const L = M,
                    N = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const B = R.views.common.tooltip_window.simple_tooltip_content,
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
                            })(e, N);
                        const u = (0, o.useMemo)(() => {
                            const e = Object.assign({}, c, { body: n, header: i, note: a, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, i, a, c]);
                        return r().createElement(
                            O,
                            x(
                                {
                                    contentId:
                                        ((d = null == c ? void 0 : c.hasHtmlContent),
                                        d ? B.SimpleTooltipHtmlContent('resId') : B.SimpleTooltipContent('resId')),
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
                                        D({ type: k.primary, size: T.small, onClick: l, disabled: !t }, a),
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
                    z = () => {
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
                        const t = z(),
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
                    W = 'SubView_base_df',
                    q = 'subViews.onChanged',
                    $ = (() => {
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
                        h = (0, o.useCallback)(
                            (e) => {
                                e.includes(d) &&
                                    (w(!0), engine.off(q, h), window.subViews.removeChildChangedCallback(d));
                            },
                            [d],
                        ),
                        p = (0, o.useCallback)((e) => {
                            $.add(
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
                                    engine.on(`subView:inject->${o}`, p),
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
                                            engine.off(`subView:inject->${o}`, p),
                                            console.info(`Sub view ${o} is destroyed: ${n}`);
                                    }
                                );
                            console.error("subView: can't get View component name");
                        } else engine.on(q, h);
                    }, [h, p, e, v]),
                        (0, o.useEffect)(
                            () => () => {
                                s &&
                                    ((e) => {
                                        const t = U(z());
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
                    const b = c()(W, i);
                    if (s) {
                        let t;
                        return (
                            (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                            ((e) => {
                                let t;
                                const n = z(),
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
                            r().createElement('div', { className: b, dangerouslySetInnerHTML: u })
                        );
                    }
                    return t ? r().createElement('div', { className: b }, r().createElement(t, null)) : null;
                });
                let K;
                !(function (e) {
                    (e.left = 'left'), (e.top = 'top'), (e.right = 'right'), (e.bottom = 'bottom');
                })(K || (K = {}));
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
                        a = void 0 === i ? T.small : i,
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
                var se = n(768);
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
                function ue() {
                    const e = (0, o.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, o.useEffect)(() => t, []),
                        (0, o.useMemo)(
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
                var de;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(de || (de = {}));
                const _e = ['__left', '__right', '__top', '__bottom'],
                    me =
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
                                    h = (0, o.useCallback)(() => {
                                        P.playHighlight();
                                    }, []),
                                    p = c()(le.arrow, le[`arrow${_e[m]}`]);
                                ce(
                                    () => (
                                        se.O.client.events.mouse.enableOutside(),
                                        se.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (n ? n() : se.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const b = (0, o.useCallback)(
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
                                    f = ue(),
                                    g = (0, o.useCallback)(() => {
                                        const e = l.current;
                                        if (e)
                                            return (
                                                se.O.view.freezeTextureBeforeResize(),
                                                f.run(() => {
                                                    const t = e.scrollWidth,
                                                        n = e.scrollHeight;
                                                    se.O.view.resize(t, n), v(window.decorator.directionType);
                                                })
                                            );
                                    }, [f]);
                                return (
                                    (0, o.useImperativeHandle)(a, () => ({ updateSize: g })),
                                    ce(() => {
                                        se.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, o.useEffect)(() => {
                                        document.addEventListener('mousedown', b, { capture: !0 });
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
                                            !t && e.promise.then(() => g()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', b);
                                            }
                                        );
                                    }, [g, b, t]),
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
                                                            onMouseEnter: h,
                                                            ref: u,
                                                        }),
                                                    ),
                                            ),
                                            r().createElement('div', { className: p, style: i.arrow }),
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
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                const we = (e) => {
                        let t = e.contentId,
                            n = e.decoratorId,
                            i = e.direction,
                            a = void 0 === i ? de.Top : i,
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
                            })(e, me);
                        const w = (0, o.useRef)(null),
                            h = (0, o.useCallback)(() => {
                                if ((0, _.wU)()) return (0, _.SW)();
                                w.current && (0, _.P3)(t, a, w.current, n, s, c);
                            }, [t, a, c, n, s]);
                        return r().createElement(
                            'div',
                            ve(
                                {
                                    ref: w,
                                    onMouseDown:
                                        ((p = u.props.onClick),
                                        (e) => {
                                            m && (h(), l && l(e), p && p(e));
                                        }),
                                },
                                v,
                            ),
                            u,
                        );
                        var p;
                    },
                    he = 'SettingsButton_settingsButtonContainerSimple_48',
                    pe = 'SettingsButton_settingsButton_03',
                    be = ['isPressed', 'hasPopover', 'onClick'];
                function fe() {
                    return (
                        (fe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        fe.apply(this, arguments)
                    );
                }
                const ge = () => {
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
                            c = (0, o.useMemo)(() => ({ type: t ? k.secondary : k.primary, mixClass: he }), [t]),
                            l = r().createElement(
                                A,
                                fe({}, a, { onClick: s, cButtonProps: c }),
                                r().createElement('div', { className: pe }),
                            );
                        return n && a.isEnabled
                            ? r().createElement(
                                  we,
                                  { contentId: R.views.lobby.platoon.SettingsPopover('resId'), direction: de.Top },
                                  l,
                              )
                            : l;
                    },
                    Ee = 'TiersLimit_base_3a',
                    ye = 'TiersLimit_settingsButton_d5',
                    Oe = 'TiersLimit_caption_90',
                    ke = 'TiersLimit_tiersChanged_c9',
                    Te = 'TiersLimit_tiersHighlighted_b6',
                    Ce = 'TiersLimit_resetButton_81',
                    Pe = 'TiersLimit_dangerIconContainer_19',
                    Se = 'TiersLimit_dangerIcon_ca',
                    Re = () => {
                        const e = f(),
                            t = e.tiers,
                            n = e.isExpanded,
                            o = e.isLight,
                            i = e.hasSettingsButton,
                            a = e.hasLookingForCaption,
                            s = e.hasTiersCaption,
                            l = e.hasResetButton,
                            u = c()(n && ke, o && !n && Te);
                        return r().createElement(
                            'div',
                            { className: Ee },
                            i && r().createElement('div', { className: ye }, r().createElement(ge, null)),
                            a && r().createElement('span', { className: Oe }, R.strings.platoon.searching.lookingFor()),
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
                                    { className: Pe },
                                    r().createElement(
                                        O,
                                        { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 },
                                        r().createElement('div', { className: Se }),
                                    ),
                                ),
                        );
                    };
                engine.whenReady.then(() => {
                    a().render(r().createElement(Re, null), document.getElementById('root'));
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(370));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
