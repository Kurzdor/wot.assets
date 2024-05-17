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
            527: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, { mouse: () => u, off: () => l, on: () => s, onResize: () => i, onScaleUpdated: () => o });
                var r = a(472),
                    n = a(176);
                const i = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, n.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${t}`,
                                        o = c[t]((e) => a([e, 'outside']));
                                    function s(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(a)),
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
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => i,
                        getSize: () => n,
                        graphicsQuality: () => o,
                    });
                var r = a(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, a) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => r });
            },
            472: (e, t, a) => {
                'use strict';
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => r });
            },
            138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => n });
                var r = a(959);
                const n = { view: a(641), client: r };
            },
            722: (e, t, a) => {
                'use strict';
                function r(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function n(e, t, a) {
                    return `url(${r(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => n });
                var r = a(472);
                const n = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => y,
                        events: () => i.U,
                        extraSize: () => M,
                        forceTriggerMouseMove: () => L,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getScale: () => v,
                        getSize: () => _,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => x,
                        isFocused: () => f,
                        pxToRem: () => E,
                        remToPx: () => w,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => O,
                    });
                var r = a(722),
                    n = a(112),
                    i = a(538),
                    o = a(566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, a, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, r);
                }
                function u(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: w(t.x), y: w(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function x() {
                    return viewEnv.isEventHandled();
                }
                function L() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    M = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    O = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => c });
                const r = ['args'];
                const n = 2,
                    i = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(t, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, o, {
                                          arguments:
                                              ((n = i),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? n : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            521: (e, t, a) => {
                'use strict';
                let r, n;
                a.d(t, { n: () => r }),
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
                    })(n || (n = {}));
            },
            358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => i });
                var r = a(138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, a = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = r.O.view.addModelObserver(e, a, n);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(i) : (this._views[a] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const r = this._callbacks[a];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const i = n;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
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
            364: (e, t, a) => {
                'use strict';
                a.d(t, { ry: () => w });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    a();
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
                        const a = e,
                            r = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== r)),
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
                const n = r;
                var i = a(358);
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    };
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = a(521),
                    h = a(138);
                const g = ['args'];
                function v(e, t, a, r, n, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, n);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    w = (function () {
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
                                        a = arguments;
                                    return new Promise(function (r, n) {
                                        var i = e.apply(t, a);
                                        function o(e) {
                                            v(i, r, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            v(i, r, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(t, g);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, i, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    f = () => b(l.CLOSE),
                    p = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var x = a(572);
                const L = n.instance,
                    S = {
                        DataTracker: i.Z,
                        ViewModel: x.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: u,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => b(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => b(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            b(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, r, n = R.invalid('resId'), i) => {
                            const o = h.O.view.getViewGlobalPosition(),
                                s = a.getBoundingClientRect(),
                                c = s.x,
                                u = s.y,
                                d = s.width,
                                _ = s.height,
                                m = {
                                    x: h.O.view.pxToRem(c) + o.x,
                                    y: h.O.view.pxToRem(u) + o.y,
                                    width: h.O.view.pxToRem(d),
                                    height: h.O.view.pxToRem(_),
                                };
                            b(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: E(m),
                                on: !0,
                                args: i,
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
                        handleViewEvent: b,
                        onBindingsReady: w,
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
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const n = Object.prototype.toString.call(t[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[r];
                                        a[r] = [];
                                        for (let t = 0; t < n.length; t++) a[r].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[r] = e(t[r]))
                                            : (a[r] = t[r]);
                                }
                            return a;
                        },
                        ClickOutsideManager: L,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = S;
            },
            998: (e, t, a) => {
                'use strict';
                var r = a(179),
                    n = a.n(r);
                const i = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var o = a(138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function c(e, t, a) {
                    const r = (function (e, t) {
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
                        })(e, a),
                        n = (function (e, t) {
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
                        })(t, a),
                        i = Math.min(r, n);
                    return {
                        extraLarge: i === a.extraLarge.weight,
                        large: i === a.large.weight,
                        medium: i === a.medium.weight,
                        small: i === a.small.weight,
                        extraSmall: i === a.extraSmall.weight,
                        extraLargeWidth: r === a.extraLarge.weight,
                        largeWidth: r === a.large.weight,
                        mediumWidth: r === a.medium.weight,
                        smallWidth: r === a.small.weight,
                        extraSmallWidth: r === a.extraSmall.weight,
                        extraLargeHeight: n === a.extraLarge.weight,
                        largeHeight: n === a.large.weight,
                        mediumHeight: n === a.medium.weight,
                        smallHeight: n === a.small.weight,
                        extraSmallHeight: n === a.extraSmall.weight,
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
                })(l || (l = {}));
                const u = o.O.client.getSize('rem'),
                    d = u.width,
                    _ = u.height,
                    m = Object.assign({ width: d, height: _ }, c(d, _, s)),
                    h = (0, r.createContext)(m),
                    g = ['children'];
                const v = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, g);
                    const n = (0, r.useContext)(h),
                        o = n.extraLarge,
                        s = n.large,
                        l = n.medium,
                        c = n.small,
                        u = n.extraSmall,
                        d = n.extraLargeWidth,
                        _ = n.largeWidth,
                        m = n.mediumWidth,
                        v = n.smallWidth,
                        E = n.extraSmallWidth,
                        w = n.extraLargeHeight,
                        b = n.largeHeight,
                        f = n.mediumHeight,
                        p = n.smallHeight,
                        x = n.extraSmallHeight,
                        L = { extraLarge: w, large: b, medium: f, small: p, extraSmall: x };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && o) return t;
                        if (a.large && s) return t;
                        if (a.medium && l) return t;
                        if (a.small && c) return t;
                        if (a.extraSmall && u) return t;
                    } else {
                        if (a.extraLargeWidth && d) return i(t, a, L);
                        if (a.largeWidth && _) return i(t, a, L);
                        if (a.mediumWidth && m) return i(t, a, L);
                        if (a.smallWidth && v) return i(t, a, L);
                        if (a.extraSmallWidth && E) return i(t, a, L);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && w) return t;
                            if (a.largeHeight && b) return t;
                            if (a.mediumHeight && f) return t;
                            if (a.smallHeight && p) return t;
                            if (a.extraSmallHeight && x) return t;
                        }
                    }
                    return null;
                };
                v.defaultProps = {
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
                (0, r.memo)(v);
                const E = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    w = ({ children: e }) => {
                        const t = (0, r.useContext)(h),
                            a = (0, r.useState)(t),
                            i = a[0],
                            l = a[1],
                            u = (0, r.useCallback)((e, t) => {
                                const a = o.O.view.pxToRem(e),
                                    r = o.O.view.pxToRem(t);
                                l(Object.assign({ width: a, height: r }, c(a, r, s)));
                            }, []),
                            d = (0, r.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                u(e.width, e.height);
                            }, [u]);
                        E(() => {
                            o.O.client.events.on('clientResized', u), o.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', u),
                                        o.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [u, d],
                            );
                        const _ = (0, r.useMemo)(() => Object.assign({}, i), [i]);
                        return n().createElement(h.Provider, { value: _ }, e);
                    };
                var b = a(483),
                    f = a.n(b),
                    p = a(926),
                    x = a.n(p);
                let L, S, y;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(L || (L = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(S || (S = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(y || (y = {}));
                const M = () => {
                        const e = (0, r.useContext)(h),
                            t = e.width,
                            a = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return L.ExtraLarge;
                                    case e.large:
                                        return L.Large;
                                    case e.medium:
                                        return L.Medium;
                                    case e.small:
                                        return L.Small;
                                    case e.extraSmall:
                                        return L.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), L.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return S.ExtraLarge;
                                    case e.largeWidth:
                                        return S.Large;
                                    case e.mediumWidth:
                                        return S.Medium;
                                    case e.smallWidth:
                                        return S.Small;
                                    case e.extraSmallWidth:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return y.ExtraLarge;
                                    case e.largeHeight:
                                        return y.Large;
                                    case e.mediumHeight:
                                        return y.Medium;
                                    case e.smallHeight:
                                        return y.Small;
                                    case e.extraSmallHeight:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: a };
                    },
                    O = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const k = {
                        [S.ExtraSmall]: '',
                        [S.Small]: x().SMALL_WIDTH,
                        [S.Medium]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH}`,
                        [S.Large]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH}`,
                        [S.ExtraLarge]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH} ${x().EXTRA_LARGE_WIDTH}`,
                    },
                    C = {
                        [y.ExtraSmall]: '',
                        [y.Small]: x().SMALL_HEIGHT,
                        [y.Medium]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT}`,
                        [y.Large]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT} ${x().EXTRA_LARGE_HEIGHT}`,
                    },
                    H = {
                        [L.ExtraSmall]: '',
                        [L.Small]: x().SMALL,
                        [L.Medium]: `${x().SMALL} ${x().MEDIUM}`,
                        [L.Large]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE}`,
                        [L.ExtraLarge]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE} ${x().EXTRA_LARGE}`,
                    },
                    A = (e) => {
                        let t = e.children,
                            a = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, O);
                        const i = M(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return n().createElement('div', T({ className: f()(a, k[o], C[s], H[l]) }, r), t);
                    },
                    P = ['children'];
                const D = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, P);
                    return n().createElement(w, null, n().createElement(A, a, t));
                };
                var W = a(493),
                    N = a.n(W);
                function I(e) {
                    engine.call('PlaySound', e);
                }
                const B = {
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
                let U, G;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(U || (U = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(G || (G = {}));
                const F = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: i,
                    disabled: o,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: u,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: h,
                    onClick: g,
                }) => {
                    const v = (0, r.useRef)(null),
                        E = (0, r.useState)(a),
                        w = E[0],
                        b = E[1],
                        p = (0, r.useState)(!1),
                        x = p[0],
                        L = p[1],
                        S = (0, r.useState)(!1),
                        y = S[0],
                        M = S[1],
                        O = (0, r.useCallback)(() => {
                            o || (v.current && (v.current.focus(), b(!0)));
                        }, [o]),
                        T = (0, r.useCallback)(
                            (e) => {
                                w && null !== v.current && !v.current.contains(e.target) && b(!1);
                            },
                            [w],
                        ),
                        k = (0, r.useCallback)(
                            (e) => {
                                o || (g && g(e));
                            },
                            [o, g],
                        ),
                        C = (0, r.useCallback)(
                            (e) => {
                                o || (null !== l && I(l), u && u(e), M(!0));
                            },
                            [o, l, u],
                        ),
                        H = (0, r.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        A = (0, r.useCallback)(
                            (e) => {
                                o || (m && m(e), L(!1));
                            },
                            [o, m],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                o || (null !== c && I(c), _ && _(e), a && O(), L(!0));
                            },
                            [o, c, _, O, a],
                        ),
                        D = (0, r.useCallback)(
                            (e) => {
                                o || (h && h(e), L(!1));
                            },
                            [o, h],
                        ),
                        W = f()(
                            B.base,
                            B[`base__${i}`],
                            {
                                [B.base__disabled]: o,
                                [B[`base__${t}`]]: t,
                                [B.base__focus]: w,
                                [B.base__highlightActive]: x,
                                [B.base__firstHover]: y,
                            },
                            s,
                        ),
                        N = f()(B.state, B.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, r.useEffect)(() => {
                            b(a);
                        }, [a]),
                        n().createElement(
                            'div',
                            {
                                ref: v,
                                className: W,
                                onMouseEnter: C,
                                onMouseMove: H,
                                onMouseUp: A,
                                onMouseDown: P,
                                onMouseLeave: D,
                                onClick: k,
                            },
                            i !== U.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: B.back }),
                                    n().createElement('span', { className: B.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: N },
                                n().createElement('span', { className: B.stateDisabled }),
                                n().createElement('span', { className: B.stateHighlightHover }),
                                n().createElement('span', { className: B.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: B.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                F.defaultProps = { type: U.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const j = (0, r.memo)(F),
                    z = {
                        base: 'TextButton_base_b6',
                        base__right: 'TextButton_base__right_39',
                        icon: 'TextButton_icon_17',
                        icon__back: 'TextButton_icon__back_43',
                        icon__forward: 'TextButton_icon__forward_59',
                        icon__close: 'TextButton_icon__close_53',
                        icon__info: 'TextButton_icon__info_33',
                        glow: 'TextButton_glow_a4',
                        caption: 'TextButton_caption_82',
                        caption__back: 'TextButton_caption__back_b9',
                        caption__forward: 'TextButton_caption__forward_4e',
                        caption__close: 'TextButton_caption__close_36',
                        caption__info: 'TextButton_caption__info_23',
                        goto: 'TextButton_goto_e7',
                        base__left: 'TextButton_base__left_ff',
                        shine: 'TextButton_shine_e2',
                    },
                    V = [
                        'caption',
                        'onClick',
                        'goto',
                        'side',
                        'type',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'soundClick',
                        'soundHover',
                    ];
                function $() {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                }
                class q extends n().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && I(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && I(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            a = e.onClick,
                            r = e.goto,
                            i = e.side,
                            o = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            u = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(e, V)),
                            m = f()(z.base, z[`base__${o}`], z[`base__${i}`], null == s ? void 0 : s.base),
                            h = f()(z.icon, z[`icon__${o}`], z[`icon__${i}`], null == s ? void 0 : s.icon),
                            g = f()(z.glow, null == s ? void 0 : s.glow),
                            v = f()(z.caption, z[`caption__${o}`], null == s ? void 0 : s.caption),
                            E = f()(z.goto, null == s ? void 0 : s.goto);
                        return n().createElement(
                            'div',
                            $(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(u),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                _,
                            ),
                            'info' !== o && n().createElement('div', { className: z.shine }),
                            n().createElement('div', { className: h }, n().createElement('div', { className: g })),
                            n().createElement('div', { className: v }, t),
                            r && n().createElement('div', { className: E }, r),
                        );
                    }
                }
                q.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var K = a(521);
                a(364);
                const Y = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function X(e = K.n.NONE, t = Y, a = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== K.n.NONE)
                            return (
                                window.addEventListener('keydown', r, a),
                                () => {
                                    window.removeEventListener('keydown', r, a);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(r), a && r.stopPropagation();
                            }
                        }
                    }, [t, e, a, n]);
                }
                var Z = a(403);
                function Q() {}
                function J() {
                    return !1;
                }
                console.log;
                var ee = a(174);
                function te(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return ae(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return ae(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ae(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                const re = (e) => (0 === e ? window : window.subViews.get(e));
                const ne = ((e, t) => {
                        const a = (0, r.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: s, children: l, mocks: c }) {
                                const u = (0, r.useRef)([]),
                                    d = (a, r, n) => {
                                        var i;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = re,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, a) => {
                                                        a.forEach((t) => {
                                                            const a = n.get(t);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = a(t),
                                                        i = r.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (a, i) => {
                                                        const l = 'string' == typeof i ? `${r}.${i}` : r,
                                                            c = o.O.view.addModelObserver(l, t, !0);
                                                        return n.set(c, a), e && a(s(i)), c;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const a = s(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, a = te(n.keys()); !(e = a()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            l =
                                                'real' === a
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (i = null == n ? void 0 : n.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === a ? (null == n ? void 0 : n.getter(e)) : l.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            _ = e({
                                                mode: a,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            n = ee.LO.box(r, { equals: J });
                                                        return (
                                                            'real' === a &&
                                                                l.subscribe(
                                                                    (0, ee.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            n = ee.LO.box(r, { equals: J });
                                                        return (
                                                            'real' === a &&
                                                                l.subscribe(
                                                                    (0, ee.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = c(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = ee.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    l.subscribe(
                                                                        (0, ee.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                i = Object.entries(n),
                                                                o = i.reduce(
                                                                    (e, [t, a]) => ((e[a] = ee.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    l.subscribe(
                                                                        (0, ee.aD)((e) => {
                                                                            i.forEach(([t, a]) => {
                                                                                o[a].set(e[t]);
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
                                            m = { mode: a, model: _, externalModel: l, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === a && n ? n.controls(m) : t(m),
                                            externalModel: l,
                                            mode: a,
                                        };
                                    },
                                    _ = (0, r.useRef)(!1),
                                    m = (0, r.useState)(i),
                                    h = m[0],
                                    g = m[1],
                                    v = (0, r.useState)(() => d(i, s, c)),
                                    E = v[0],
                                    w = v[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        _.current ? w(d(h, s, c)) : (_.current = !0);
                                    }, [c, h, s]),
                                    (0, r.useEffect)(() => {
                                        g(i);
                                    }, [i]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            E.externalModel.dispose(), u.current.forEach((e) => e());
                                        },
                                        [E],
                                    ),
                                    n().createElement(a.Provider, { value: E }, l)
                                );
                            },
                            () => (0, r.useContext)(a),
                        ];
                    })(Q, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        confirm: e.createCallbackNoArgs('onLeaveMode'),
                    })),
                    ie = ne[0],
                    oe = ne[1],
                    se = 'App_base_ea',
                    le = 'App_closeButton_b6',
                    ce = 'App_content_3b',
                    ue = 'App_modeIcon_9f',
                    de = 'App_title_eb',
                    _e = 'App_alert_87',
                    me = 'App_alertIcon_53',
                    he = 'App_divider_e3',
                    ge = 'App_actions_c3',
                    ve = 'App_button_3c',
                    Ee = R.strings.winback.winbackLeaveModeDialogView,
                    we = (0, Z.Pi)(() => {
                        const e = oe().controls;
                        var t;
                        return (
                            (t = e.close),
                            X(K.n.ESCAPE, t),
                            n().createElement(
                                'div',
                                { className: se },
                                n().createElement(
                                    'div',
                                    { className: le },
                                    n().createElement(q, {
                                        caption: Ee.buttons.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: e.close,
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: ce },
                                    n().createElement('div', { className: ue }),
                                    n().createElement('div', { className: de }, Ee.title()),
                                    n().createElement(
                                        'div',
                                        { className: _e },
                                        n().createElement('span', { className: me }),
                                        Ee.alert(),
                                    ),
                                    n().createElement('div', { className: he }),
                                    n().createElement(
                                        'div',
                                        { className: ge },
                                        n().createElement(
                                            j,
                                            { size: G.medium, mixClass: ve, type: U.primary, onClick: e.confirm },
                                            Ee.buttons.confirm(),
                                        ),
                                        n().createElement(
                                            j,
                                            { size: G.medium, mixClass: ve, type: U.secondary, onClick: e.close },
                                            Ee.buttons.cancel(),
                                        ),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    N().render(
                        n().createElement(ie, null, n().createElement(D, null, n().createElement(we, null))),
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
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, r) => {
            if (!t) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, a, r] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), r < n && (n = r));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = a();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, a, r];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (__webpack_require__.j = 768),
        (() => {
            var e = { 768: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var r,
                        n,
                        [i, o, s] = a,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(a); l < i.length; l++)
                        (n = i[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(c);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [241], () => __webpack_require__(998));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
