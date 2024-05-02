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
                    a.d(t, { mouse: () => d, off: () => l, on: () => s, onResize: () => i, onScaleUpdated: () => o });
                var r = a(472),
                    n = a(176);
                const i = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    d = (function () {
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => y,
                        events: () => i.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => x,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getScale: () => E,
                        getSize: () => _,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => L,
                        isFocused: () => f,
                        pxToRem: () => v,
                        remToPx: () => w,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => M,
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
                function d(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function u(e) {
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
                function E() {
                    return viewEnv.getScale();
                }
                function v(e) {
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
                function L() {
                    return viewEnv.isEventHandled();
                }
                function x() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    O = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    M = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => i });
                const r = ['args'],
                    n = (e, t) => {
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
                    i = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
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
                a.d(t, { ry: () => b });
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
                var c;
                ((c = l || (l = {}))[(c.UNDEFINED = 0)] = 'UNDEFINED'),
                    (c[(c.TOOLTIP = 1)] = 'TOOLTIP'),
                    (c[(c.POP_OVER = 2)] = 'POP_OVER'),
                    (c[(c.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (c[(c.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (c[(c.MOVE = 16)] = 'MOVE'),
                    (c[(c.CLOSE = 32)] = 'CLOSE'),
                    (c[(c.MINIMIZE = 64)] = 'MINIMIZE');
                const d = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var h = a(521),
                    g = a(138);
                const E = ['args'];
                function v(e, t, a, r, n, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, n);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                    f = (e, t) => {
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
                                })(t, E);
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
                    p = () => f(l.CLOSE),
                    L = (e, t) => {
                        e.keyCode === h.n.ESCAPE && t();
                    };
                var x = a(572);
                const S = n.instance,
                    y = {
                        DataTracker: i.Z,
                        ViewModel: x.Z,
                        ViewEventType: l,
                        NumberFormatType: d,
                        RealFormatType: u,
                        TimeFormatType: _,
                        DateFormatType: m,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => f(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => f(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            f(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, r, n = R.invalid('resId'), i) => {
                            const o = g.O.view.getViewGlobalPosition(),
                                s = a.getBoundingClientRect(),
                                c = s.x,
                                d = s.y,
                                u = s.width,
                                _ = s.height,
                                m = {
                                    x: g.O.view.pxToRem(c) + o.x,
                                    y: g.O.view.pxToRem(d) + o.y,
                                    width: g.O.view.pxToRem(u),
                                    height: g.O.view.pxToRem(_),
                                };
                            f(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: w(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => L(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            L(e, p);
                        },
                        handleViewEvent: f,
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
                        ClickOutsideManager: S,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = y;
            },
            504: (e, t, a) => {
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
                const d = o.O.client.getSize('rem'),
                    u = d.width,
                    _ = d.height,
                    m = Object.assign({ width: u, height: _ }, c(u, _, s)),
                    h = (0, r.createContext)(m),
                    g = ['children'],
                    E = (e) => {
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
                            d = n.extraSmall,
                            u = n.extraLargeWidth,
                            _ = n.largeWidth,
                            m = n.mediumWidth,
                            E = n.smallWidth,
                            v = n.extraSmallWidth,
                            w = n.extraLargeHeight,
                            b = n.largeHeight,
                            f = n.mediumHeight,
                            p = n.smallHeight,
                            L = n.extraSmallHeight,
                            x = { extraLarge: w, large: b, medium: f, small: p, extraSmall: L };
                        if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                            if (a.extraLarge && o) return t;
                            if (a.large && s) return t;
                            if (a.medium && l) return t;
                            if (a.small && c) return t;
                            if (a.extraSmall && d) return t;
                        } else {
                            if (a.extraLargeWidth && u) return i(t, a, x);
                            if (a.largeWidth && _) return i(t, a, x);
                            if (a.mediumWidth && m) return i(t, a, x);
                            if (a.smallWidth && E) return i(t, a, x);
                            if (a.extraSmallWidth && v) return i(t, a, x);
                            if (
                                !(
                                    a.extraLargeWidth ||
                                    a.largeWidth ||
                                    a.mediumWidth ||
                                    a.smallWidth ||
                                    a.extraSmallWidth
                                )
                            ) {
                                if (a.extraLargeHeight && w) return t;
                                if (a.largeHeight && b) return t;
                                if (a.mediumHeight && f) return t;
                                if (a.smallHeight && p) return t;
                                if (a.extraSmallHeight && L) return t;
                            }
                        }
                        return null;
                    };
                (E.defaultProps = {
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
                }),
                    (0, r.memo)(E);
                const v = ({ children: e }) => {
                    const t = (0, r.useContext)(h),
                        a = (0, r.useState)(t),
                        i = a[0],
                        l = a[1],
                        d = (0, r.useCallback)((e, t) => {
                            const a = o.O.view.pxToRem(e),
                                r = o.O.view.pxToRem(t);
                            l(Object.assign({ width: a, height: r }, c(a, r, s)));
                        }, []),
                        u = (0, r.useCallback)(() => {
                            const e = o.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    ((e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        o.O.client.events.on('clientResized', d), o.O.client.events.on('self.onScaleUpdated', u);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                o.O.client.events.off('clientResized', d),
                                    o.O.client.events.off('self.onScaleUpdated', u);
                            },
                            [d, u],
                        );
                    const _ = (0, r.useMemo)(() => Object.assign({}, i), [i]);
                    return n().createElement(h.Provider, { value: _ }, e);
                };
                var w = a(483),
                    b = a.n(w),
                    f = a(926),
                    p = a.n(f);
                let L, x, S;
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
                    })(x || (x = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(S || (S = {}));
                const y = ['children', 'className'];
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                }
                const M = {
                        [x.ExtraSmall]: '',
                        [x.Small]: p().SMALL_WIDTH,
                        [x.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [x.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [x.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [S.ExtraSmall]: '',
                        [S.Small]: p().SMALL_HEIGHT,
                        [S.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [S.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [L.ExtraSmall]: '',
                        [L.Small]: p().SMALL,
                        [L.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [L.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [L.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    H = (e) => {
                        let t = e.children,
                            a = e.className,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, y);
                        const o = (() => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'), L.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return x.ExtraLarge;
                                            case e.largeWidth:
                                                return x.Large;
                                            case e.mediumWidth:
                                                return x.Medium;
                                            case e.smallWidth:
                                                return x.Small;
                                            case e.extraSmallWidth:
                                                return x.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), x.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    o = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return S.ExtraLarge;
                                            case e.largeHeight:
                                                return S.Large;
                                            case e.mediumHeight:
                                                return S.Medium;
                                            case e.smallHeight:
                                                return S.Small;
                                            case e.extraSmallHeight:
                                                return S.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), S.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: n,
                                    mediaWidth: i,
                                    mediaHeight: o,
                                    remScreenWidth: t,
                                    remScreenHeight: a,
                                };
                            })(),
                            s = o.mediaWidth,
                            l = o.mediaHeight,
                            c = o.mediaSize;
                        return n().createElement('div', O({ className: b()(a, M[s], T[l], k[c]) }, i), t);
                    },
                    C = ['children'],
                    A = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, C);
                        return n().createElement(v, null, n().createElement(H, a, t));
                    };
                var P = a(493),
                    W = a.n(P);
                function D(e) {
                    engine.call('PlaySound', e);
                }
                const N = {
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
                let I, B;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(I || (I = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(B || (B = {}));
                const G = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: i,
                    disabled: o,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: d,
                    onMouseMove: u,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: h,
                    onClick: g,
                }) => {
                    const E = (0, r.useRef)(null),
                        v = (0, r.useState)(a),
                        w = v[0],
                        f = v[1],
                        p = (0, r.useState)(!1),
                        L = p[0],
                        x = p[1],
                        S = (0, r.useState)(!1),
                        y = S[0],
                        O = S[1],
                        M = (0, r.useCallback)(() => {
                            o || (E.current && (E.current.focus(), f(!0)));
                        }, [o]),
                        T = (0, r.useCallback)(
                            (e) => {
                                w && null !== E.current && !E.current.contains(e.target) && f(!1);
                            },
                            [w],
                        ),
                        k = (0, r.useCallback)(
                            (e) => {
                                o || (g && g(e));
                            },
                            [o, g],
                        ),
                        H = (0, r.useCallback)(
                            (e) => {
                                o || (null !== l && D(l), d && d(e), O(!0));
                            },
                            [o, l, d],
                        ),
                        C = (0, r.useCallback)(
                            (e) => {
                                u && u(e);
                            },
                            [u],
                        ),
                        A = (0, r.useCallback)(
                            (e) => {
                                o || (m && m(e), x(!1));
                            },
                            [o, m],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                o || (null !== c && D(c), _ && _(e), a && M(), x(!0));
                            },
                            [o, c, _, M, a],
                        ),
                        W = (0, r.useCallback)(
                            (e) => {
                                o || (h && h(e), x(!1));
                            },
                            [o, h],
                        ),
                        B = b()(
                            N.base,
                            N[`base__${i}`],
                            {
                                [N.base__disabled]: o,
                                [N[`base__${t}`]]: t,
                                [N.base__focus]: w,
                                [N.base__highlightActive]: L,
                                [N.base__firstHover]: y,
                            },
                            s,
                        ),
                        G = b()(N.state, N.state__default);
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
                            f(a);
                        }, [a]),
                        n().createElement(
                            'div',
                            {
                                ref: E,
                                className: B,
                                onMouseEnter: H,
                                onMouseMove: C,
                                onMouseUp: A,
                                onMouseDown: P,
                                onMouseLeave: W,
                                onClick: k,
                            },
                            i !== I.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: N.back }),
                                    n().createElement('span', { className: N.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: G },
                                n().createElement('span', { className: N.stateDisabled }),
                                n().createElement('span', { className: N.stateHighlightHover }),
                                n().createElement('span', { className: N.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: N.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                G.defaultProps = { type: I.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const U = (0, r.memo)(G);
                var F = a(521);
                a(364);
                const j = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function V(e = F.n.NONE, t = j, a = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== F.n.NONE)
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
                var z = a(403);
                const q = (0, r.memo)(
                        ({ className: e, backgroundPath: t, onLoaded: a, showVignette: r = !0, showBlur: i = !1 }) => {
                            const o = b()('Background_base_94', i && 'Background_base__blur_69', e);
                            return n().createElement(
                                'div',
                                { className: o, style: { backgroundImage: `url(${t})` } },
                                r && n().createElement('div', { className: 'Background_vignette_79' }),
                                a &&
                                    n().createElement('img', {
                                        className: 'Background_preloader_7d',
                                        onLoad: () => a(),
                                        onError: () => a(),
                                        src: t,
                                        alt: t,
                                    }),
                            );
                        },
                    ),
                    $ = 'Lore_glow_68',
                    K = (0, r.memo)(({ className: e, folder: t, text: a }) => {
                        const i = ((e) => {
                                const t = (0, r.useContext)(h);
                                return e
                                    ? t.large || t.extraLarge
                                        ? e.photo_large()
                                        : t.small
                                          ? e.photo_small()
                                          : e.photo_extraSmall()
                                    : null;
                            })(t),
                            o = i ? { backgroundImage: `url(${i})` } : void 0,
                            s = b()('Lore_base_eb', e),
                            l = b()($, 'Lore_glow__top_b7'),
                            c = b()($, 'Lore_glow__bottom_f7');
                        return n().createElement(
                            'div',
                            { className: s },
                            n().createElement(
                                'div',
                                { className: 'Lore_content_63' },
                                n().createElement('div', { className: l }),
                                n().createElement('div', { className: c }),
                                n().createElement('div', { className: 'Lore_line_43' }),
                                n().createElement('div', { className: 'Lore_photos_ba', style: o }),
                                n().createElement('div', { className: 'Lore_text_6e' }, a),
                            ),
                        );
                    });
                function Y() {
                    return !1;
                }
                console.log;
                var X = a(174);
                function Z(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                const Q = (e) => (0 === e ? window : window.subViews.get(e)),
                    J = ((e, t) => {
                        const a = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: i, children: s, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    d = (e, a, r) => {
                                        var n;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = Q,
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
                                                        for (
                                                            var e,
                                                                a = (function (e, t) {
                                                                    var a =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (a) return (a = a.call(e)).next.bind(a);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (a = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return Z(e, t);
                                                                                var a = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === a &&
                                                                                        e.constructor &&
                                                                                        (a = e.constructor.name),
                                                                                    'Map' === a || 'Set' === a
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === a ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                a,
                                                                                            )
                                                                                          ? Z(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        a && (e = a);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(e = a()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(a),
                                            s =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            l = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : s.readByPath(t),
                                            d = (e) => c.current.push(e),
                                            u = (({ observableModel: e }) => e.object())({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (t, a) => {
                                                        const r = null != a ? a : l(t),
                                                            n = X.LO.box(r, { equals: Y });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, X.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (t, a) => {
                                                        const r = null != a ? a : l(t),
                                                            n = X.LO.box(r, { equals: Y });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, X.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (t, a) => {
                                                        const r = l(a);
                                                        if (Array.isArray(t)) {
                                                            const n = t.reduce(
                                                                (e, t) => ((e[t] = X.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, X.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                n[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        a,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = t,
                                                                i = Object.entries(n),
                                                                o = i.reduce(
                                                                    (e, [t, a]) => ((e[a] = X.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, X.aD)((e) => {
                                                                            i.forEach(([t, a]) => {
                                                                                o[a].set(e[t]);
                                                                            });
                                                                        }),
                                                                        a,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            _ = { mode: e, model: u, externalModel: s, cleanup: d };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && r ? r.controls(_) : t(_),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    u = (0, r.useRef)(!1),
                                    _ = (0, r.useState)(e),
                                    m = _[0],
                                    h = _[1],
                                    g = (0, r.useState)(() => d(e, i, l)),
                                    E = g[0],
                                    v = g[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        u.current ? v(d(m, i, l)) : (u.current = !0);
                                    }, [l, m, i]),
                                    (0, r.useEffect)(() => {
                                        h(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            E.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [E],
                                    ),
                                    n().createElement(a.Provider, { value: E }, s)
                                );
                            },
                            () => (0, r.useContext)(a),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        loaded: e.createCallbackNoArgs('onLoaded'),
                    })),
                    ee = J[0],
                    te = J[1],
                    ae = (0, z.Pi)(() => {
                        const e = te().controls,
                            t = (0, r.useCallback)(() => {
                                e.close();
                            }, [e]);
                        ((e) => {
                            const t = (0, r.useCallback)(
                                (t) => {
                                    !t.altKey && e && e();
                                },
                                [e],
                            );
                            V(F.n.ENTER, t, !0);
                        })(t);
                        const a = (0, r.useCallback)(() => t(), [t]),
                            i = R.images.story_mode.gui.maps.icons.epilogue,
                            o = R.strings.sm_battle.epilogue.text();
                        return n().createElement(
                            'div',
                            { className: 'EpilogueWindowApp_base_0c' },
                            n().createElement(q, {
                                backgroundPath: R.images.story_mode.gui.maps.icons.epilogue.background(),
                                onLoaded: e.loaded,
                            }),
                            n().createElement('div', { className: 'EpilogueWindowApp_shining_f3' }),
                            n().createElement(
                                'div',
                                { className: 'EpilogueWindowApp_title_aa' },
                                R.strings.sm_battle.epilogue.title(),
                            ),
                            n().createElement(K, { className: 'EpilogueWindowApp_lore_ce', folder: i, text: o }),
                            n().createElement(
                                'div',
                                { className: 'EpilogueWindowApp_continueButton_57' },
                                n().createElement(
                                    U,
                                    { size: B.medium, type: I.primary, onClick: a },
                                    R.strings.sm_battle.common.continueBtn(),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    W().render(
                        n().createElement(ee, null, n().createElement(A, null, n().createElement(ae, null))),
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
        (__webpack_require__.j = 760),
        (() => {
            var e = { 760: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(504));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
