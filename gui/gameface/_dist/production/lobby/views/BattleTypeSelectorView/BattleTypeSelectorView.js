(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                n.r(t),
                    n.d(t, { mouse: () => d, off: () => l, on: () => s, onResize: () => a, onScaleUpdated: () => i });
                var o = n(2472),
                    r = n(1176);
                const a = (0, o.E)('clientResized'),
                    i = (0, o.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, o.E)('mousedown'), up: (0, o.E)('mouseup'), move: (0, o.E)('mousemove') },
                    d = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${t}`,
                                            i = c[t]((e) => n([e, 'outside']));
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
                        return Object.assign({}, a, {
                            disable() {
                                (e.enabled = !1), o();
                            },
                            enable() {
                                (e.enabled = !0), o();
                            },
                            enableOutside() {
                                e.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, r.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => o,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => i,
                    });
                var o = n(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => o });
            },
            2472: (e, t, n) => {
                function o(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => o });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => r });
                var o = n(5959);
                const r = { view: n(7641), client: o };
            },
            3722: (e, t, n) => {
                function o(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${o(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => o });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => o });
                const o = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => r });
                var o = n(2472);
                const r = {
                    onTextureFrozen: (0, o.E)('self.onTextureFrozen'),
                    onTextureReady: (0, o.E)('self.onTextureReady'),
                    onDomBuilt: (0, o.E)('self.onDomBuilt'),
                    onLoaded: (0, o.E)('self.onLoaded'),
                    onDisplayChanged: (0, o.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, o.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, o.E)('children.onAdded'),
                        onLoaded: (0, o.E)('children.onLoaded'),
                        onRemoved: (0, o.E)('children.onRemoved'),
                        onAttached: (0, o.E)('children.onAttached'),
                        onTextureReady: (0, o.E)('children.onTextureReady'),
                        onRequestPosition: (0, o.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => o,
                        displayStatus: () => r.W,
                        displayStatusIs: () => P,
                        events: () => a.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => T,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => O,
                        getScale: () => w,
                        getSize: () => _,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => y,
                        isFocused: () => g,
                        pxToRem: () => p,
                        remToPx: () => h,
                        resize: () => v,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => E,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => S,
                    });
                var o = n(3722),
                    r = n(6112),
                    a = n(6538),
                    i = n(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function b() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function w() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function E(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function y() {
                    return viewEnv.isEventHandled();
                }
                function T() {
                    viewEnv.forceTriggerMouseMove();
                }
                function O() {
                    return viewEnv.getShowingStatus();
                }
                const P = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    k = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => a });
                const o = ['args'],
                    r = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        a = Object.keys(e);
                                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, o);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = a),
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
                    a = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
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
            1358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var o = n(3138);
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
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            9916: (e, t, n) => {
                n.d(t, { Sw: () => a.Z, B0: () => s, ry: () => h });
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
                var a = n(1358),
                    i = n(8613);
                let s;
                var l;
                ((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var v = n(5521),
                    m = n(3138);
                const b = ['args'];
                function w(e, t, n, o, r, a, i) {
                    try {
                        var s = e[a](i),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(o, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                            w(a, o, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            w(a, o, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
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
                                })(t, b);
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
                    g = () => E(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === v.n.ESCAPE && t();
                    };
                var y = n(7572);
                const T = r.instance,
                    O = {
                        DataTracker: a.Z,
                        ViewModel: y.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: u,
                        DateFormatType: _,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => E(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => E(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, o, r = R.invalid('resId'), a) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                v = {
                                    x: m.O.view.pxToRem(c) + i.x,
                                    y: m.O.view.pxToRem(d) + i.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(_),
                                };
                            E(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: p(v),
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
                            f(e, g);
                        },
                        handleViewEvent: E,
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
                        ClickOutsideManager: T,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = O;
            },
            8613: (e, t, n) => {
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
            9189: (e, t, n) => {
                var o = n(6179),
                    r = n.n(o),
                    a = n(493),
                    i = n.n(a);
                let s, l;
                !(function (e) {
                    (e.Solo = 'solo'), (e.RandomPlatoon = 'randomPlatoon'), (e.Platoon = 'platoon');
                })(s || (s = {})),
                    (function (e) {
                        (e.None = 'none'), (e.FirstShow = 'firstShow'), (e.IdleBlink = 'idleBlink');
                    })(l || (l = {}));
                const c = (e = 1) => {
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
                    d = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var u = n(9916);
                const _ = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    v = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    m = u.Sw.instance;
                let b;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(b || (b = {}));
                const w = (e = 'model', t = b.Deep) => {
                    const n = (0, o.useState)(0),
                        r = (n[0], n[1]),
                        a = (0, o.useMemo)(() => c(), []),
                        i = a.caller,
                        s = a.resId,
                        l = (0, o.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                            [i, e],
                        ),
                        u = (0, o.useState)(() =>
                            ((e) => {
                                const t = d(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return _(t) ? t.value : t;
                            })(
                                ((e) =>
                                    ((e, t) =>
                                        e.split('.').reduce((e, t) => {
                                            const n = d(`${e}.${t}`, window);
                                            return _(n) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                        }))(e))(l),
                            ),
                        ),
                        w = u[0],
                        p = u[1],
                        h = (0, o.useRef)(-1);
                    return (
                        ((e) => {
                            const t = (0, o.useRef)(!1);
                            t.current || (e(), (t.current = !0));
                        })(() => {
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
                                            ? (e === w && r((e) => e + 1), p(e))
                                            : p(Object.assign([], e));
                                    },
                                    o = ((e) => {
                                        const t = ((e) => {
                                                const t = c(),
                                                    n = t.caller,
                                                    o = t.resId,
                                                    r =
                                                        window.__feature && window.__feature !== n && n
                                                            ? `subViews.${n}`
                                                            : '';
                                                return { modelPrefix: r, modelPath: v(r, ''), resId: o };
                                            })(),
                                            n = t.modelPrefix,
                                            o = e.split('.');
                                        if (o.length > 0) {
                                            const e = [o[0]];
                                            return (
                                                o.reduce((t, o) => {
                                                    const r = d(v(n, `${t}.${o}`), window);
                                                    return _(r)
                                                        ? (e.push(r.id), `${t}.${o}.value`)
                                                        : (e.push(o), `${t}.${o}`);
                                                }),
                                                e.reduce((e, t) => e + '.' + t)
                                            );
                                        }
                                        return '';
                                    })(e);
                                h.current = m.addCallback(o, n, s, t === b.Deep);
                            }
                        }),
                        (0, o.useEffect)(() => {
                            if (t !== b.None)
                                return () => {
                                    m.removeCallback(h.current, s);
                                };
                        }, [s, t]),
                        w
                    );
                };
                var p = n(3403);
                function h() {
                    return !1;
                }
                console.log;
                var E = n(9174),
                    g = n(3138);
                function f(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                    return o;
                }
                const y = (e) => (0 === e ? window : window.subViews.get(e)),
                    T = 'short',
                    O = 'full',
                    P = 'none',
                    k = ((e, t) => {
                        const n = (0, o.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: i, mocks: s }) {
                                const l = (0, o.useRef)([]),
                                    c = (e, n, o) => {
                                        var r;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = y,
                                                context: o = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = r.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const r = n(t),
                                                        a = o.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (n, a) => {
                                                        const s = 'string' == typeof a ? `${o}.${a}` : o,
                                                            l = g.O.view.addModelObserver(s, t, !0);
                                                        return r.set(l, n), e && n(i(a)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const n = i(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return f(e, t);
                                                                                var n = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? f(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var o = 0;
                                                                        return function () {
                                                                            return o >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[o++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(e = n()).done;

                                                        )
                                                            a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            i =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (r = null == o ? void 0 : o.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == o ? void 0 : o.getter(t)) : i.readByPath(t),
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) =>
                                                Object.assign(
                                                    {},
                                                    e.primitives(['selectedTab', 'animationState', 'isHintShown']),
                                                    { tabsAnimationType: E.LO.box(P), wasHintHidden: E.LO.box(!0) },
                                                ))({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const o = null != n ? n : s(t),
                                                            r = E.LO.box(o, { equals: h });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, E.aD)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const o = null != n ? n : s(t),
                                                            r = E.LO.box(o, { equals: h });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, E.aD)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const o = s(n);
                                                        if (Array.isArray(t)) {
                                                            const r = t.reduce(
                                                                (e, t) => ((e[t] = E.LO.box(o[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, E.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                r[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = t,
                                                                a = Object.entries(r),
                                                                s = a.reduce(
                                                                    (e, [t, n]) => ((e[n] = E.LO.box(o[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, E.aD)((e) => {
                                                                            a.forEach(([t, n]) => {
                                                                                s[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            u = { mode: e, model: d, externalModel: i, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && o ? o.controls(u) : t(u),
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    d = (0, o.useRef)(!1),
                                    u = (0, o.useState)(e),
                                    _ = u[0],
                                    v = u[1],
                                    m = (0, o.useState)(() => c(e, a, s)),
                                    b = m[0],
                                    w = m[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        d.current ? w(c(_, a, s)) : (d.current = !0);
                                    }, [s, _, a]),
                                    (0, o.useEffect)(() => {
                                        v(e);
                                    }, [e]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            b.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [b],
                                    ),
                                    r().createElement(n.Provider, { value: b }, i)
                                );
                            },
                            () => (0, o.useContext)(n),
                        ];
                    })(0, ({ model: e, externalModel: t, cleanup: n }) => {
                        const o = (0, E.aD)((t) => e.wasHintHidden.set(t)),
                            r = (0, E.aD)((t) => e.tabsAnimationType.set(t));
                        return (
                            n(
                                (0, E.EH)(() => {
                                    const t = e.isHintShown.get();
                                    if (t) return o(!t), void (e.animationState.get() === l.FirstShow && r(T));
                                    r(
                                        (() => {
                                            const t = e.animationState.get();
                                            return s.Solo !== e.selectedTab.get() || t === l.None
                                                ? P
                                                : t === l.FirstShow && e.wasHintHidden.get() !== e.isHintShown.get()
                                                  ? O
                                                  : T;
                                        })(),
                                    );
                                }),
                            ),
                            { select: t.createCallback((e) => ({ tabId: e }), 'onSelectTab'), updateStateHint: o }
                        );
                    }),
                    S = k[0],
                    M = k[1];
                var C = n(6483),
                    x = n.n(C);
                const L = [
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
                function A(e) {
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
                const I = (e, t, n = {}, o = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: u.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: o,
                                },
                                n,
                            ),
                        );
                    },
                    N = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            d = e.ignoreShowDelay,
                            u = void 0 !== d && d,
                            _ = e.ignoreMouseClick,
                            v = void 0 !== _ && _,
                            m = e.decoratorId,
                            b = void 0 === m ? 0 : m,
                            w = e.isEnabled,
                            p = void 0 === w || w,
                            h = e.targetId,
                            E = void 0 === h ? 0 : h,
                            g = e.onShow,
                            f = e.onHide,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    a = Object.keys(e);
                                for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, L);
                        const T = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            O = (0, o.useMemo)(() => E || c().resId, [E]),
                            P = (0, o.useCallback)(() => {
                                (T.current.isVisible && T.current.timeoutId) ||
                                    (I(n, b, { isMouseEvent: !0, on: !0, arguments: A(r) }, O),
                                    g && g(),
                                    (T.current.isVisible = !0));
                            }, [n, b, r, O, g]),
                            k = (0, o.useCallback)(() => {
                                if (T.current.isVisible || T.current.timeoutId) {
                                    const e = T.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (T.current.timeoutId = 0)),
                                        I(n, b, { on: !1 }, O),
                                        T.current.isVisible && f && f(),
                                        (T.current.isVisible = !1);
                                }
                            }, [n, b, O, f]),
                            S = (0, o.useCallback)((e) => {
                                T.current.isVisible &&
                                    ((T.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (T.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(T.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        return (
                            (0, o.useEffect)(() => {
                                const e = T.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', S, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', S, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, o.useEffect)(() => {
                                !1 === p && k();
                            }, [p, k]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            ),
                            p
                                ? (0, o.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((M = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((T.current.timeoutId = window.setTimeout(P, u ? 100 : 400)),
                                                          a && a(e),
                                                          M && M(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  k(), null == i || i(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === v && k(), null == l || l(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === v && k(), null == s || s(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          y,
                                      ),
                                  )
                                : t
                        );
                        var M;
                    };
                var D = n(7030);
                const F = (0, o.createContext)(null);
                function B() {
                    const e = (0, o.useContext)(F);
                    if (null === e) throw new Error('You can use tabs hooks only with Tabs component');
                    return e;
                }
                const V = [s.Solo, s.RandomPlatoon, s.Platoon],
                    H = {
                        list: V,
                        getId: (e) => {
                            const t = V.indexOf(e);
                            if (-1 === t) throw new Error('Selected tab does not exist');
                            return t;
                        },
                        isSelected: (e, t) => t === V[e],
                    },
                    j = {
                        base: 'Platoon_base_52',
                        icon: 'Platoon_icon_e9',
                        text: 'Platoon_text_e7',
                        base__selected: 'Platoon_base__selected_98',
                        container: 'Platoon_container_2a',
                        bonus: 'Platoon_bonus_3d',
                        bonus__hide: 'Platoon_bonus__hide_ac',
                        bonus__show: 'Platoon_bonus__show_57',
                        bonus__randomPlatoonAnimate: 'Platoon_bonus__randomPlatoonAnimate_8c',
                        'snow-bonus': 'Platoon_snow-bonus_5c',
                        'light-bonus': 'Platoon_light-bonus_dc',
                        bonus__platoonAnimate: 'Platoon_bonus__platoonAnimate_5b',
                        blinkWrapper: 'Platoon_blinkWrapper_89',
                        iconBlink: 'Platoon_iconBlink_c4',
                        textContainer: 'Platoon_textContainer_30',
                        textBlink: 'Platoon_textBlink_d5',
                    },
                    U = R.strings.battle_royale.battleTypeSelector.tab,
                    W = R.images.battle_royale.gui.maps.battleTypeSelector.battleType,
                    q = R.images.battle_royale.gui.maps.battleTypeSelector.masks,
                    z = {
                        short: { randomPlatoon: 0, platoon: 380 },
                        full: { solo: 0, randomPlatoon: 330, platoon: 585 },
                    },
                    K = {
                        short: { randomPlatoon: 0, platoon: 300 },
                        full: { solo: 0, randomPlatoon: 240, platoon: 530 },
                    },
                    G = {
                        short: {
                            icon: { randomPlatoon: 480, platoon: 380 },
                            text: { randomPlatoon: 480, platoon: 380 },
                        },
                        full: {
                            icon: { solo: 200, randomPlatoon: 340, platoon: 270 },
                            text: { solo: 370, randomPlatoon: 340, platoon: 270 },
                        },
                    },
                    $ = { from: { transform: 'translate(-105rem, -105rem) rotate(140deg)' } },
                    Y = { from: { maskPosition: '-25rem 0rem' } },
                    Z = { to: { opacity: '1' }, loop: !0, config: { duration: 1e4 } },
                    X = { to: { opacity: '1' }, delay: 400, config: { duration: 2e3 } },
                    Q = (0, p.Pi)(({ type: e, hasBonus: t = !1 }) => {
                        const n = r().useState(!1),
                            o = n[0],
                            a = n[1],
                            i = B(),
                            c = M(),
                            d = c.model,
                            u = c.controls,
                            _ = ((e, t) => {
                                const n = e.$dyn(t);
                                if ('string' == typeof n) return n;
                                throw new Error(`ReadString  ${t} is invalid `);
                            })(U, e),
                            v = (0, D.useSpring)(() => Object.assign({}, Y)),
                            m = v[0],
                            b = v[1],
                            w = (0, D.useSpring)(() => Object.assign({}, $)),
                            p = w[0],
                            h = w[1],
                            g = (0, D.useSpring)(() => ({
                                from: { opacity: '0' },
                                onStart: () => {
                                    b.start(() =>
                                        Object.assign({}, Y, {
                                            to: { maskPosition: '155rem 0rem' },
                                            config: { duration: G[d.tabsAnimationType.get()].text[e] },
                                            delay: z[d.tabsAnimationType.get()][e],
                                        }),
                                    ),
                                        h.start(() =>
                                            Object.assign({}, $, {
                                                to: { transform: 'translate(105rem, 105rem) rotate(140deg)' },
                                                config: { duration: G[d.tabsAnimationType.get()].icon[e] },
                                                delay: K[d.tabsAnimationType.get()][e],
                                            }),
                                        );
                                },
                                onRest: () => {
                                    d.tabsAnimationType.get() === O && e === s.Platoon && u.updateStateHint(!1);
                                },
                            }))[1];
                        return (
                            r().useLayoutEffect(
                                () =>
                                    (0, E.EH)(() => {
                                        switch (d.tabsAnimationType.get()) {
                                            case T:
                                                e !== s.Solo && g.start(Z);
                                                break;
                                            case O:
                                                a((t) => e !== s.Solo || t), g.start(X);
                                                break;
                                            default:
                                                g.stop();
                                        }
                                    }),
                                [u, g, d.tabsAnimationType, e],
                            ),
                            r().createElement(
                                N,
                                {
                                    contentId: R.views.battle_royale.lobby.tooltips.TabTooltipView('resId'),
                                    args: { tabId: e },
                                },
                                r().createElement(
                                    'div',
                                    { className: x()(j.base, H.isSelected(i.active, e) && j.base__selected) },
                                    r().createElement(
                                        'div',
                                        { className: j.container },
                                        r().createElement(
                                            'div',
                                            { className: j.icon, style: { backgroundImage: `url(${W.$dyn(e)})` } },
                                            r().createElement(
                                                'div',
                                                {
                                                    className: j.blinkWrapper,
                                                    style: { maskImage: `url(${q.$dyn(e)})` },
                                                },
                                                r().createElement(D.animated.div, { style: p, className: j.iconBlink }),
                                            ),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: j.textContainer },
                                            r().createElement('div', { className: j.text }, _),
                                            r().createElement(D.animated.div, { style: m, className: j.textBlink }, _),
                                        ),
                                    ),
                                    t &&
                                        r().createElement('div', {
                                            className: x()(
                                                j.bonus,
                                                j[
                                                    'bonus__' +
                                                        ((f = d.wasHintHidden.get()),
                                                        (y = d.animationState.get()),
                                                        f && y !== l.IdleBlink ? 'hide' : 'show')
                                                ],
                                                o && j[`bonus__${e}Animate`],
                                            ),
                                        }),
                                ),
                            )
                        );
                        var f, y;
                    });
                function J(e) {
                    engine.call('PlaySound', e);
                }
                const ee = {
                        base: 'Tab_base_47',
                        base__inactive: 'Tab_base__inactive_a2',
                        base__active: 'Tab_base__active_21',
                        border: 'Tab_border_1f',
                        light: 'Tab_light_71',
                        separator: 'Tab_separator_60',
                        separator__left: 'Tab_separator__left_e6',
                        separator__right: 'Tab_separator__right_34',
                    },
                    te = (e) => {
                        const t = e.currentTabId,
                            n = e.children,
                            o = e.onChangeId,
                            a = r().useMemo(() => ({ active: t, change: o }), [t, o]);
                        return r().createElement(F.Provider, { value: a }, n);
                    };
                (te.HorizontalContainer = (e) =>
                    r().createElement(
                        'div',
                        { className: 'HorizontalContainer_base_8b' },
                        r().createElement('div', { className: 'HorizontalContainer_content_0d' }, e.children),
                    )),
                    (te.Tab = ({ tabId: e, children: t, className: n }) => {
                        const o = B();
                        return r().createElement(
                            'div',
                            {
                                className: x()(
                                    ee.base,
                                    ee['base__' + ((i = o.active === e), i ? 'active' : 'inactive')],
                                    n,
                                ),
                                onClick: () => {
                                    o.change(e), J('play');
                                },
                                onMouseEnter: () => J('highlight'),
                            },
                            r().createElement('div', { className: ee.border }),
                            r().createElement('div', {
                                className: x()(
                                    ee.separator,
                                    ee['separator__' + ((a = o.active < e), a ? 'right' : 'left')],
                                ),
                            }),
                            r().createElement('div', { className: ee.light }),
                            t,
                        );
                        var a, i;
                    });
                const ne = (0, p.Pi)(() => {
                    const e = M(),
                        t = e.controls,
                        n = e.model,
                        o = r().useCallback(
                            (e) => {
                                t.select(H.list[e]);
                            },
                            [t],
                        ),
                        a = ((e, t) => {
                            const n = w('tutorialModel.triggers.items').filter((n) => {
                                if (!n) return !1;
                                const o = n.value,
                                    r = o.triggers.filter((e) => e.value === t);
                                return o.componentId === e && r.length > 0;
                            });
                            return 0 === n.length
                                ? null
                                : window.tutorialModel.foundComponents.items.some((t) => t.value.componentId === e)
                                  ? {
                                        trigger: n[0].value,
                                        runTrigger: (n) => {
                                            window.tutorialModel.onTriggerActivated({
                                                componentId: e,
                                                triggerType: t,
                                                state: n,
                                            });
                                        },
                                    }
                                  : null;
                        })('BattleRoyaleDynamicPlatoonHint', 'visible_change');
                    return (
                        r().useEffect(
                            () =>
                                ((e) => {
                                    let t,
                                        n = null;
                                    return (
                                        (n = requestAnimationFrame(() => {
                                            n = requestAnimationFrame(() => {
                                                (n = null), (t = void (null == a || a.runTrigger(!0)));
                                            });
                                        })),
                                        () => {
                                            'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                                        }
                                    );
                                })(),
                            [a],
                        ),
                        r().createElement(
                            'div',
                            { className: 'App_base_2c' },
                            r().createElement(
                                te,
                                { currentTabId: H.getId(n.selectedTab.get()), onChangeId: o },
                                r().createElement(
                                    te.HorizontalContainer,
                                    null,
                                    r().createElement(te.Tab, { tabId: 0 }, r().createElement(Q, { type: s.Solo })),
                                    r().createElement('div', {
                                        id: 'battleRoyalePlatoonsTabs',
                                        className: 'App_hintContainer_87',
                                    }),
                                    r().createElement(
                                        te.Tab,
                                        { tabId: 1 },
                                        r().createElement(Q, { type: s.RandomPlatoon, hasBonus: !0 }),
                                    ),
                                    r().createElement(
                                        te.Tab,
                                        { tabId: 2 },
                                        r().createElement(Q, { type: s.Platoon, hasBonus: !0 }),
                                    ),
                                ),
                            ),
                        )
                    );
                });
                engine.whenReady.then(() => {
                    i().render(
                        r().createElement(S, null, r().createElement(ne, null)),
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
        (__webpack_require__.O = (e, t, n, o) => {
            if (!t) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, o] = deferred[l], a = !0, i = 0; i < t.length; i++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), o < r && (r = o));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > o; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, o];
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
        (__webpack_require__.j = 59),
        (() => {
            var e = { 59: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [a, i, s] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in i) __webpack_require__.o(i, o) && (__webpack_require__.m[o] = i[o]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < a.length; l++)
                        (r = a[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9189));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
