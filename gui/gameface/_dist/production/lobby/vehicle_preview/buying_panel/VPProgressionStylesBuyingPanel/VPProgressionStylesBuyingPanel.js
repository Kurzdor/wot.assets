(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, i) => {
                i.r(t),
                    i.d(t, { mouse: () => d, off: () => o, on: () => l, onResize: () => a, onScaleUpdated: () => s });
                var n = i(472),
                    r = i(176);
                const a = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    c = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function i() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', i))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', i))
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, i) => (
                            (t[i] = (function (t) {
                                return (i) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        s = c[t]((e) => i([e, 'outside']));
                                    function l(e) {
                                        i([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, l),
                                        n(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(a, l),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(i)),
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
                            e.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            959: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    });
                var n = i(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, i) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                i.d(t, { R: () => n });
            },
            472: (e, t, i) => {
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                i.d(t, { E: () => n });
            },
            138: (e, t, i) => {
                i.d(t, { O: () => r });
                var n = i(959);
                const r = { view: i(641), client: n };
            },
            722: (e, t, i) => {
                function n(e, t, i = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, i);
                }
                function r(e, t, i) {
                    return `url(${n(e, t, i)})`;
                }
                i.r(t), i.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            112: (e, t, i) => {
                i.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, i) => {
                i.d(t, { U: () => r });
                var n = i(472);
                const r = {
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
            641: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => O,
                        events: () => a.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => x,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => y,
                        getScale: () => w,
                        getSize: () => _,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => S,
                        isFocused: () => f,
                        pxToRem: () => v,
                        remToPx: () => b,
                        resize: () => h,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => E,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => k,
                    });
                var n = i(722),
                    r = i(112),
                    a = i(538),
                    s = i(566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, i, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, i, n);
                }
                function d(e, t, i) {
                    return viewEnv.addDataChangedCallback(e, t, i);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function h(e, t, i = 'px') {
                    return 'rem' === i ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function w() {
                    return viewEnv.getScale();
                }
                function v(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function E(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function S() {
                    return viewEnv.isEventHandled();
                }
                function x() {
                    viewEnv.forceTriggerMouseMove();
                }
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const O = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
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
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, i) => {
                i.d(t, { qP: () => c });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    s = 32,
                    l = 64,
                    o = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
                                    return r;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, s, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
                                                  const i = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: i, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: i, name: e, bool: t };
                                                      default:
                                                          return { __Type: i, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: i, type: e });
                        var r;
                    },
                    c = {
                        close(e) {
                            o('popover' === e ? r : s);
                        },
                        minimize() {
                            o(l);
                        },
                        move(e) {
                            o(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            358: (e, t, i) => {
                i.d(t, { Z: () => a });
                var n = i(138);
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
                    addCallback(e, t, i = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, i, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  i > 0 && (this._views[i] ? this._views[i].push(a) : (this._views[i] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, t = 0) {
                        let i = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((i = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            i || console.error("Can't remove callback by id:", e),
                            i
                        );
                    }
                    _emmitDataChanged(e, t, i) {
                        i.forEach((i) => {
                            const n = this._callbacks[i];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
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
            976: (e, t, i) => {
                i.d(t, { Sw: () => a.Z, ry: () => b });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: i }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    i();
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
                        const i = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== i || t !== n)),
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
                const r = n;
                var a = i(358);
                var s = i(613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let _, h;
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
                })(_ || (_ = {})),
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
                    })(h || (h = {}));
                var m = i(138);
                const g = ['args'];
                function w(e, t, i, n, r, a, s) {
                    try {
                        var l = e[a](s),
                            o = l.value;
                    } catch (e) {
                        return void i(e);
                    }
                    l.done ? t(o) : Promise.resolve(o).then(n, r);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                        i = arguments;
                                    return new Promise(function (n, r) {
                                        var a = e.apply(t, i);
                                        function s(e) {
                                            w(a, n, r, s, l, 'next', e);
                                        }
                                        function l(e) {
                                            w(a, n, r, s, l, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const i = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          i.number = t;
                                                          break;
                                                      case 'boolean':
                                                          i.bool = t;
                                                          break;
                                                      default:
                                                          i.string = t.toString();
                                                  }
                                                  return i;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: i, type: e });
                        var n;
                    },
                    f = () => E(l.CLOSE),
                    p = (e, t) => {
                        e.keyCode === _.ESCAPE && t();
                    };
                var S = i(572);
                const x = r.instance,
                    y = {
                        DataTracker: a.Z,
                        ViewModel: S.Z,
                        ViewEventType: l,
                        NumberFormatType: o,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => E(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => E(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, i = 0) => {
                            E(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: i, args: t });
                        },
                        sendShowPopOverEvent: (e, t, i, n, r = R.invalid('resId'), a) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                o = i.getBoundingClientRect(),
                                c = o.x,
                                d = o.y,
                                u = o.width,
                                _ = o.height,
                                h = {
                                    x: m.O.view.pxToRem(c) + s.x,
                                    y: m.O.view.pxToRem(d) + s.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(_),
                                };
                            E(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: v(h),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => p(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, f);
                        },
                        handleViewEvent: E,
                        onBindingsReady: b,
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
                            const i = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        i[n] = [];
                                        for (let t = 0; t < r.length; t++) i[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (i[n] = e(t[n]))
                                            : (i[n] = t[n]);
                                }
                            return i;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = y;
            },
            613: (e, t, i) => {
                i.d(t, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, i) => userLocale.getTimeFormat(e, t, void 0 === i || i),
                        getTimeString: (e, t, i) => userLocale.getTimeString(e, t, void 0 === i || i),
                    };
            },
            286: (e, t, i) => {
                var n = i(179),
                    r = i.n(n),
                    a = i(493),
                    s = i.n(a);
                const l = (e, t, i) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && i.extraLarge) ||
                          (t.largeHeight && i.large) ||
                          (t.mediumHeight && i.medium) ||
                          (t.smallHeight && i.small) ||
                          (t.extraSmallHeight && i.extraSmall)
                            ? e
                            : null
                        : e;
                var o = i(138);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var d;
                function u(e, t, i) {
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
                        })(e, i),
                        r = (function (e, t) {
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
                        })(t, i),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === i.extraLarge.weight,
                        large: a === i.large.weight,
                        medium: a === i.medium.weight,
                        small: a === i.small.weight,
                        extraSmall: a === i.extraSmall.weight,
                        extraLargeWidth: n === i.extraLarge.weight,
                        largeWidth: n === i.large.weight,
                        mediumWidth: n === i.medium.weight,
                        smallWidth: n === i.small.weight,
                        extraSmallWidth: n === i.extraSmall.weight,
                        extraLargeHeight: r === i.extraLarge.weight,
                        largeHeight: r === i.large.weight,
                        mediumHeight: r === i.medium.weight,
                        smallHeight: r === i.small.weight,
                        extraSmallHeight: r === i.extraSmall.weight,
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
                })(d || (d = {}));
                const _ = o.O.client.getSize('rem'),
                    h = _.width,
                    m = _.height,
                    g = Object.assign({ width: h, height: m }, u(h, m, c)),
                    w = (0, n.createContext)(g),
                    v = ['children'];
                const b = (e) => {
                    let t = e.children,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var i,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
                            return r;
                        })(e, v);
                    const r = (0, n.useContext)(w),
                        a = r.extraLarge,
                        s = r.large,
                        o = r.medium,
                        c = r.small,
                        d = r.extraSmall,
                        u = r.extraLargeWidth,
                        _ = r.largeWidth,
                        h = r.mediumWidth,
                        m = r.smallWidth,
                        g = r.extraSmallWidth,
                        b = r.extraLargeHeight,
                        E = r.largeHeight,
                        f = r.mediumHeight,
                        p = r.smallHeight,
                        S = r.extraSmallHeight,
                        x = { extraLarge: b, large: E, medium: f, small: p, extraSmall: S };
                    if (i.extraLarge || i.large || i.medium || i.small || i.extraSmall) {
                        if (i.extraLarge && a) return t;
                        if (i.large && s) return t;
                        if (i.medium && o) return t;
                        if (i.small && c) return t;
                        if (i.extraSmall && d) return t;
                    } else {
                        if (i.extraLargeWidth && u) return l(t, i, x);
                        if (i.largeWidth && _) return l(t, i, x);
                        if (i.mediumWidth && h) return l(t, i, x);
                        if (i.smallWidth && m) return l(t, i, x);
                        if (i.extraSmallWidth && g) return l(t, i, x);
                        if (
                            !(i.extraLargeWidth || i.largeWidth || i.mediumWidth || i.smallWidth || i.extraSmallWidth)
                        ) {
                            if (i.extraLargeHeight && b) return t;
                            if (i.largeHeight && E) return t;
                            if (i.mediumHeight && f) return t;
                            if (i.smallHeight && p) return t;
                            if (i.extraSmallHeight && S) return t;
                        }
                    }
                    return null;
                };
                b.defaultProps = {
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
                (0, n.memo)(b);
                const E = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    f = ({ children: e }) => {
                        const t = (0, n.useContext)(w),
                            i = (0, n.useState)(t),
                            a = i[0],
                            s = i[1],
                            l = (0, n.useCallback)((e, t) => {
                                const i = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(t);
                                s(Object.assign({ width: i, height: n }, u(i, n, c)));
                            }, []),
                            d = (0, n.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                l(e.width, e.height);
                            }, [l]);
                        E(() => {
                            o.O.client.events.on('clientResized', l), o.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', l),
                                        o.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [l, d],
                            );
                        const _ = (0, n.useMemo)(() => Object.assign({}, a), [a]);
                        return r().createElement(w.Provider, { value: _ }, e);
                    };
                var p = i(483),
                    S = i.n(p);
                function x(e) {
                    engine.call('PlaySound', e);
                }
                const y = (e) => ({ transitionDelay: e / 20 + 's' }),
                    O = 'SwitcherBullet_base_3d',
                    T = 'SwitcherBullet_container_6e',
                    k = 'SwitcherBullet_base__selected_70',
                    L = 'SwitcherBullet_container__text_b3',
                    C = 'SwitcherBullet_finishedHover_37',
                    P = 'SwitcherBullet_base__finished_dd',
                    M = 'SwitcherBullet_base__hover_2a',
                    N = 'SwitcherBullet_iconSmall_b7',
                    D = 'SwitcherBullet_base__afterCurrent_cd',
                    W = 'SwitcherBullet_iconBig_dc',
                    A = 'SwitcherBullet_base__currentSelected_24',
                    H = 'SwitcherBullet_iconText_11',
                    I = 'SwitcherBullet_iconTextGlow_25',
                    B = 'SwitcherBullet_clickArea_ed',
                    F = 'SwitcherBullet_base__disabled_b9',
                    U = 'SwitcherBullet_disabled_b5',
                    V = 'SwitcherBullet_number_b4',
                    q = 'SwitcherBullet_currentText_f9',
                    j = 'SwitcherBullet_text_37',
                    z = 'SwitcherBullet_texture_1e',
                    K = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: i,
                        previousSelectedIndex: a,
                        onChange: s,
                        currentIndex: l,
                        currentText: o,
                        isDisabled: c = !1,
                        mouseEnterSound: d,
                        clickSound: u,
                    }) => {
                        const _ = t !== i,
                            h = (0, n.useState)(!1),
                            m = h[0],
                            g = h[1],
                            w = (0, n.useCallback)(() => {
                                g(!0), _ && x(d);
                            }, [_, d, g]),
                            v = (0, n.useCallback)(() => {
                                _ && (x(u), s(e));
                            }, [_, u, e, s]),
                            b = (0, n.useCallback)(() => {
                                g(!1);
                            }, [g]),
                            E = l || 0,
                            f = S()(
                                O,
                                t === i && k,
                                t === i && t === E && A,
                                t > E && t !== i && D,
                                t <= E && P,
                                m && M,
                                c && F,
                            ),
                            p = (0, n.useMemo)(
                                () =>
                                    ((e, t, i) =>
                                        e === t
                                            ? y(0)
                                            : e === i
                                              ? y(Math.abs(e - t) - 2)
                                              : (i > t && e > t && e < i) || (i < t && e < t && e > i)
                                                ? y(Math.abs(e - t) - 1)
                                                : void 0)(t, a, i),
                                [t, a, i],
                            ),
                            L = (0, n.useCallback)(
                                () => ((t === i && t === E) || t === i ? 'big' : 'small'),
                                [t, i, E],
                            ),
                            H = (0, n.useMemo)(() => {
                                const e = R.images.gui.maps.icons.components.switcher.numbers,
                                    i = t > E ? 'light' : 'dark';
                                return Object.assign({}, p, {
                                    backgroundImage: `url(${e.$dyn(`number_${t}_${L()}_${i}`)})`,
                                });
                            }, [t, E, p, L]);
                        return r().createElement(
                            'div',
                            { className: f },
                            r().createElement(
                                'div',
                                { className: T, style: p },
                                r().createElement('div', { className: C, style: p }),
                                r().createElement('div', { className: N, style: p }),
                                r().createElement('div', { className: W, style: p }),
                                r().createElement('div', { className: U }),
                                r().createElement('div', { className: V, style: H }),
                                r().createElement('div', {
                                    className: B,
                                    style: p,
                                    onClick: v,
                                    onMouseEnter: w,
                                    onMouseLeave: b,
                                }),
                            ),
                            o && t === l && r().createElement('div', { className: q }, o),
                        );
                    },
                    G = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: i,
                        previousSelectedIndex: a,
                        onChange: s,
                        currentIndex: l = 0,
                        isDisabled: o = !1,
                        mouseEnterSound: c,
                        clickSound: d,
                        styleID: u,
                    }) => {
                        const _ = t === i,
                            h = (0, n.useState)(!1),
                            m = h[0],
                            g = h[1],
                            w = (0, n.useCallback)(() => {
                                g(!0), _ || x(c);
                            }, [_, c, g]),
                            v = (0, n.useCallback)(() => {
                                _ || (x(d), s(e));
                            }, [_, d, e, s]),
                            b = (0, n.useCallback)(() => {
                                g(!1);
                            }, [g]),
                            E = R.strings.vehicle_customization.style_switcher.$dyn(`style_${u}`).$dyn(`level${e}`),
                            f = S()(O, _ && k, _ && t === l && A, t > l && t !== i && D, t <= l && P, m && M, o && F),
                            p = (0, n.useMemo)(
                                () =>
                                    ((e, t, i) =>
                                        e === t
                                            ? y(0)
                                            : e === i
                                              ? y(Math.abs(e - t) - 2)
                                              : (i > t && e > t && e < i) || (i < t && e < t && e > i)
                                                ? y(Math.abs(e - t) - 1)
                                                : void 0)(t, a, i),
                                [t, a, i],
                            ),
                            C = S()(T, L);
                        return r().createElement(
                            'div',
                            { className: f },
                            r().createElement(
                                'div',
                                { className: C, style: p },
                                _ && r().createElement('div', { className: z }),
                                !_ && r().createElement('div', { className: I }),
                                r().createElement('div', { className: H, style: p }),
                                r().createElement('div', { className: j }, E),
                                r().createElement('div', {
                                    className: B,
                                    style: p,
                                    onClick: v,
                                    onMouseEnter: w,
                                    onMouseLeave: b,
                                }),
                            ),
                        );
                    },
                    $ = 'SwitcherSeparator_base_c1',
                    Y = 'SwitcherSeparator_base__isBeforeSelectedBullet_e0',
                    Z = 'SwitcherSeparator_base__notAnimated_58',
                    X = 'SwitcherSeparator_base__scaled_57',
                    Q = 'SwitcherSeparator_base__rightTransformOrigin_16',
                    J = 'SwitcherSeparator_base__leftTransformOrigin_7f',
                    ee = 'SwitcherSeparator_base__transitionTransformOrigin_b2',
                    te = ({ index: e, selectedIndex: t, previousSelectedIndex: i, isAnimated: n = !0 }) => {
                        const a = ((e, t, i) =>
                                e === t + 1 || e === t - 1
                                    ? y(0)
                                    : e === i + 1 || e === i - 1
                                      ? y(Math.abs(i - t) - 2)
                                      : (i > t && e > t && e < i + 1) || (i < t && e < t && e > i - 1)
                                        ? y(Math.abs(e - t) - 1)
                                        : void 0)(e, i, t),
                            s = 1 === Math.abs(e - t),
                            l = 1 === Math.abs(e - i),
                            o = ((e, t, i, n) =>
                                e === i + 1 || (e === t + 1 && !n)
                                    ? Q
                                    : e === i - 1 || (e === t - 1 && !n)
                                      ? J
                                      : void 0)(e, i, t, s),
                            c = S()(
                                $,
                                n && e < t && Y,
                                n && l && s && ee,
                                n && (e === t + 1 || e === t - 1) && X,
                                n && o,
                                !n && Z,
                            );
                        return r().createElement('div', { className: c, style: a });
                    },
                    ie = (e, t, i) => Math.min(Math.max(e, t), i),
                    ne = {
                        base: 'Switcher_base_7a',
                        base__hasCurrentText: 'Switcher_base__hasCurrentText_6f',
                        base__small: 'Switcher_base__small_6a',
                        base__isVisible: 'Switcher_base__isVisible_43',
                    };
                let re;
                !(function (e) {
                    (e[(e.digital = 0)] = 'digital'), (e[(e.text = 1)] = 'text');
                })(re || (re = {}));
                const ae = (e, t) => ('number' == typeof e ? 2 * (e - t) : void 0);
                let se;
                !(function (e) {
                    e.small = 'small';
                })(se || (se = {}));
                const le = ({
                        numberOfBullets: e,
                        selectedNumber: t,
                        onChange: i,
                        currentText: a,
                        currentNumber: s,
                        startNumber: l = 1,
                        isBulletsBeforeCurrentDisabled: o = !1,
                        size: c,
                        mouseEnterSound: d = 'highlight',
                        clickSound: u = 'play',
                        isArabic: _ = !1,
                        hasLightShadows: h = !1,
                        styleID: m = 0,
                        switcherType: g = re.digital,
                    }) => {
                        const w = (0, n.useState)(!1),
                            v = w[0],
                            b = w[1];
                        (0, n.useEffect)(
                            () =>
                                ((e, t) => {
                                    let i;
                                    const n = setTimeout(() => {
                                        i = e();
                                    }, t);
                                    return () => {
                                        'function' == typeof i && i(), clearTimeout(n);
                                    };
                                })(() => b(!0), 0),
                            [],
                        );
                        const E = l + e - 1,
                            f = ie(t, o && s ? s : l, E),
                            p = 'number' == typeof s ? ie(s, l, E) : void 0,
                            x = ae(f, l),
                            y = ae(p, l),
                            O = (0, n.useRef)(x);
                        (0, n.useEffect)(() => {
                            O.current = x;
                        });
                        const T = O.current,
                            k = S()(
                                ne.base,
                                a && void 0 !== y && ne.base__hasCurrentText,
                                c && ne[`base__${c}`],
                                v && ne.base__isVisible,
                            ),
                            L = (0, n.useMemo)(
                                () =>
                                    ((e, t) => {
                                        const i = [];
                                        for (let n = e; n <= t; n++) i.push(n);
                                        return i;
                                    })(l, E),
                                [E, l],
                            ),
                            C = g === re.digital;
                        return r().createElement(
                            'div',
                            { className: k },
                            L.map((e, t) => {
                                const n = 2 * t,
                                    s = !(!o || !y) && n < y;
                                return r().createElement(
                                    r().Fragment,
                                    { key: t },
                                    t > 0 &&
                                        r().createElement(te, {
                                            index: n - 1,
                                            selectedIndex: x,
                                            previousSelectedIndex: T,
                                            isAnimated: C,
                                        }),
                                    C
                                        ? r().createElement(K, {
                                              index: n,
                                              selectedIndex: x,
                                              previousSelectedIndex: T,
                                              numberToDisplay: e,
                                              currentIndex: y,
                                              currentText: a,
                                              onChange: i,
                                              isDisabled: s,
                                              mouseEnterSound: d,
                                              clickSound: u,
                                              isArabic: _,
                                              hasLightShadows: h,
                                          })
                                        : r().createElement(G, {
                                              index: n,
                                              selectedIndex: x,
                                              previousSelectedIndex: T,
                                              numberToDisplay: e,
                                              currentIndex: y,
                                              onChange: i,
                                              isDisabled: s,
                                              mouseEnterSound: d,
                                              clickSound: u,
                                              hasLightShadows: h,
                                              styleID: m,
                                          }),
                                );
                            }),
                        );
                    },
                    oe = (e = 1) => {
                        const t = new Error().stack;
                        let i,
                            n = R.invalid('resId');
                        return (
                            t &&
                                ((i = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== i &&
                                    window.subViews[i] &&
                                    (n = window.subViews[i].id)),
                            { caller: i, stack: t, resId: n }
                        );
                    },
                    ce = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var de = i(976);
                const ue = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    _e = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    he = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, i) => {
                                const n = ce(`${e}.${i}`, window);
                                return ue(n) ? t(e, i, n) : `${e}.${i}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    me = (e) => {
                        const t = ((e) => {
                                const t = oe(),
                                    i = t.caller,
                                    n = t.resId,
                                    r = window.__feature && window.__feature !== i && i ? `subViews.${i}` : '';
                                return { modelPrefix: r, modelPath: _e(r, e || ''), resId: n };
                            })(),
                            i = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const r = ce(_e(i, `${t}.${n}`), window);
                                    return ue(r) ? (e.push(r.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    ge = de.Sw.instance;
                let we;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(we || (we = {}));
                const ve = (e = 'model', t = we.Deep) => {
                        const i = (0, n.useState)(0),
                            r = (i[0], i[1]),
                            a = (0, n.useMemo)(() => oe(), []),
                            s = a.caller,
                            l = a.resId,
                            o = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                                [s, e],
                            ),
                            c = (0, n.useState)(() =>
                                ((e) => {
                                    const t = ce(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return ue(t) ? t.value : t;
                                })(he(o)),
                            ),
                            d = c[0],
                            u = c[1],
                            _ = (0, n.useRef)(-1);
                        return (
                            E(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? we.Deep : we.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== we.None)
                                ) {
                                    const i = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === we.Deep
                                                ? (e === d && r((e) => e + 1), u(e))
                                                : u(Object.assign([], e));
                                        },
                                        n = me(e);
                                    _.current = ge.addCallback(n, i, l, t === we.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (t !== we.None)
                                    return () => {
                                        ge.removeCallback(_.current, l);
                                    };
                            }, [l, t]),
                            d
                        );
                    },
                    be = {
                        base: 'Content_base_47',
                        base__shown: 'Content_base__shown_3f',
                        content: 'Content_content_54',
                        notification: 'Content_notification_6e',
                        base__small: 'Content_base__small_fa',
                        notificationIcon: 'Content_notificationIcon_f8',
                    },
                    Ee = R.strings.vehicle_preview.buyingPanel.progressionStyles.currentLevel(),
                    fe = () => {
                        const e = ve(),
                            t = e.currentLevel,
                            i = e.selectedLevel,
                            a = e.isReady,
                            s = e.onChange,
                            l = e.numberOfBullets,
                            o = void 0 === l ? 4 : l,
                            c = e.isBulletsBeforeCurrentDisabled,
                            d = e.switcherType,
                            u = e.styleID,
                            _ = (0, n.useContext)(w),
                            h = _.smallHeight || _.extraSmallHeight,
                            m = _.smallWidth || _.extraSmallWidth,
                            g =
                                d === re.text
                                    ? R.strings.vehicle_preview.buyingPanel.progressionStyles.notification.rewind_enable.text()
                                    : R.strings.vehicle_preview.buyingPanel.progressionStyles.notification.text(),
                            v = (0, n.useCallback)((e) => s({ selectedLevel: e }), [s]),
                            b = S()(be.base, h && m && be.base__small, a && be.base__shown),
                            E = S()(be.content, d === re.text && be.content__text);
                        return (
                            (0, n.useEffect)(
                                () =>
                                    ((e) => {
                                        let t,
                                            i = null;
                                        return (
                                            (i = requestAnimationFrame(() => {
                                                i = requestAnimationFrame(() => {
                                                    (i = null), (t = e());
                                                });
                                            })),
                                            () => {
                                                'function' == typeof t && t(), null !== i && cancelAnimationFrame(i);
                                            }
                                        );
                                    })(() => {
                                        h && m && viewEnv.setInputArea(176, 50, 400, 150);
                                    }),
                                [h, m],
                            ),
                            r().createElement(
                                'div',
                                { className: b },
                                r().createElement(
                                    'div',
                                    { className: E },
                                    r().createElement('div', { className: be.notification }, g),
                                    r().createElement(le, {
                                        numberOfBullets: o,
                                        currentNumber: t,
                                        selectedNumber: i,
                                        onChange: v,
                                        currentText: systemLocale.toUpperCase(Ee),
                                        clickSound: 'bp_style_reward_view',
                                        isBulletsBeforeCurrentDisabled: c,
                                        switcherType: d,
                                        styleID: u,
                                    }),
                                ),
                            )
                        );
                    },
                    pe = () => r().createElement(f, null, r().createElement(fe, null));
                engine.whenReady.then(() => {
                    s().render(r().createElement(pe, null), document.getElementById('root'));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var i = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](i, i.exports, __webpack_require__), i.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, i, n) => {
            if (!t) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, i, n] = deferred[o], a = !0, s = 0; s < t.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(o--, 1);
                        var l = i();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, i, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var i in t)
                __webpack_require__.o(t, i) &&
                    !__webpack_require__.o(e, i) &&
                    Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
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
        (__webpack_require__.j = 469),
        (() => {
            var e = { 469: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, i) => {
                    var n,
                        r,
                        [a, s, l] = i,
                        o = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (l) var c = l(__webpack_require__);
                    }
                    for (t && t(i); o < a.length; o++)
                        (r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                i = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [294], () => __webpack_require__(286));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
