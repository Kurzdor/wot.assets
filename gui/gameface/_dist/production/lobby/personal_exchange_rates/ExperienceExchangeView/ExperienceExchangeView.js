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
            768: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => ue });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => E, off: () => m, on: () => d, onResize: () => c, onScaleUpdated: () => l });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => h,
                        getSize: () => D,
                        graphicsQuality: () => g,
                        playSound: () => A,
                        setRTPC: () => F,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => v, getTextureUrl: () => f });
                var i = {};
                function s(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => P,
                        addPreloadTexture: () => T,
                        children: () => a,
                        displayStatus: () => b,
                        displayStatusIs: () => Q,
                        events: () => y,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => Y,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => I,
                        getDisplayStatus: () => Z,
                        getScale: () => z,
                        getSize: () => H,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => q,
                        isFocused: () => j,
                        pxToRem: () => $,
                        remToPx: () => G,
                        resize: () => V,
                        sendEvent: () => O,
                        setAnimateWindow: () => X,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => k,
                        setSidePaddingsRem: () => R,
                        whenTutorialReady: () => ee,
                    });
                const c = s('clientResized'),
                    l = s('self.onScaleUpdated'),
                    d = (e, u) => engine.on(e, u),
                    m = (e, u) => engine.off(e, u),
                    _ = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const E = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && o(!1);
                    }
                    function t() {
                        e.enabled && o(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : o(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        i = _[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && o(!0);
                        },
                        disableOutside() {
                            e.enabled && o(!1);
                        },
                    });
                })();
                function A(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function F(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const g = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    C = Object.keys(p).reduce((e, u) => ((e[u] = () => A(p[u])), e), {}),
                    B = { play: Object.assign({}, C, { sound: A }), setRTPC: F };
                function f(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function v(e, u, t) {
                    return `url(${f(e, u, t)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    y = {
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
                    x = ['args'];
                const w = 2,
                    S = 16,
                    N = 32,
                    M = 64,
                    L = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, x);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    O = {
                        close(e) {
                            L('popover' === e ? w : N);
                        },
                        minimize() {
                            L(M);
                        },
                        move(e) {
                            L(S, { isMouseEvent: !0, on: e });
                        },
                    };
                function T(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function k(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function I(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function P(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function H(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function W(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: G(u.x), y: G(u.y) };
                }
                function U() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function $(e) {
                    return viewEnv.pxToRem(e);
                }
                function G(e) {
                    return viewEnv.remToPx(e);
                }
                function X(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function j() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function q() {
                    return viewEnv.isEventHandled();
                }
                function Y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const Q = Object.keys(b).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === b[u]), e), {}),
                    J = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    ee = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : y.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ue = { view: i, client: r, sound: B };
            },
            521: (e, u, t) => {
                'use strict';
                let n, r;
                t.d(u, { n: () => n }),
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
                    })(r || (r = {}));
            },
            368: () => {
                !(function () {
                    let e,
                        u,
                        t,
                        n,
                        r,
                        a,
                        i,
                        s = -1;
                    document.addEventListener('mousedown', (t) => {
                        document.getSelection().empty(),
                            t.target.select &&
                                -1 === s &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === s && t.target.select && t.target === e && (s = e.selectionStart), s > -1)) {
                                const n = Math.min(Math.max(t.x, u.left), u.right),
                                    r = Math.min(Math.max(t.y, u.top), u.bottom),
                                    a = document.createEvent('MouseEvent');
                                a.initMouseEvent('mousedown', !0, !0, null, 1, n, r, n, r, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(a);
                                const i = e.selectionEnd;
                                i > s ? e.setSelectionRange(s, i, 'forward') : e.setSelectionRange(i, s, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (s = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (t = e.target),
                                (n = e.target.value),
                                (r = t.selectionStart),
                                (a = -1 !== n.lastIndexOf(' ', r) ? n.lastIndexOf(' ', r) + 1 : 0),
                                (i = -1 !== n.indexOf(' ', r) ? n.indexOf(' ', r) : n.length),
                                t.setSelectionRange(a, i, 'forward'));
                        });
                })(),
                    (function () {
                        let e = null;
                        document.addEventListener('mousedown', (u) => {
                            document.getSelection().empty(),
                                0 !== u.button ||
                                    u.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(u.x, u.y));
                        }),
                            document.addEventListener('mousemove', (u) => {
                                if (0 === u.button && !u.target.select && e) {
                                    const t = document.caretPositionFromPoint(u.x, u.y);
                                    if (!t.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, t.offsetNode, t.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            });
                    })();
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(768);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
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
            916: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => a.Z, B3: () => o, Z5: () => i.Z5, B0: () => s, ry: () => D });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                var a = t(358);
                var i = t(613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(521),
                    _ = t(768);
                const E = ['args'];
                function A(e, u, t, n, r, a, i) {
                    try {
                        var s = e[a](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function i(e) {
                                            A(a, n, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(a, n, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => h(s.CLOSE),
                    p = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var C = t(572);
                const B = r.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: C.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: c,
                        TimeFormatType: l,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                c = o.x,
                                l = o.y,
                                d = o.width,
                                m = o.height,
                                E = {
                                    x: _.O.view.pxToRem(c) + i.x,
                                    y: _.O.view.pxToRem(l) + i.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(E),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, g);
                        },
                        handleViewEvent: h,
                        onBindingsReady: D,
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
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = f;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            176: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => kn,
                        Bar: () => Ln,
                        DefaultScroll: () => Tn,
                        Direction: () => Fn,
                        defaultSettings: () => Dn,
                        useHorizontalScrollApi: () => gn,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => Jn, Bar: () => Yn, Default: () => Qn, useVerticalScrollApi: () => In });
                var a = t(179),
                    i = t.n(a);
                const s = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(768);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function d(e, u, t) {
                    const n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        r = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
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
                const m = o.O.client.getSize('rem'),
                    _ = m.width,
                    E = m.height,
                    A = Object.assign({ width: _, height: E }, d(_, E, c)),
                    F = (0, a.createContext)(A),
                    D = ['children'];
                const h = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, D);
                    const n = (0, a.useContext)(F),
                        r = n.extraLarge,
                        i = n.large,
                        o = n.medium,
                        c = n.small,
                        l = n.extraSmall,
                        d = n.extraLargeWidth,
                        m = n.largeWidth,
                        _ = n.mediumWidth,
                        E = n.smallWidth,
                        A = n.extraSmallWidth,
                        h = n.extraLargeHeight,
                        g = n.largeHeight,
                        p = n.mediumHeight,
                        C = n.smallHeight,
                        B = n.extraSmallHeight,
                        f = { extraLarge: h, large: g, medium: p, small: C, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && i) return u;
                        if (t.medium && o) return u;
                        if (t.small && c) return u;
                        if (t.extraSmall && l) return u;
                    } else {
                        if (t.extraLargeWidth && d) return s(u, t, f);
                        if (t.largeWidth && m) return s(u, t, f);
                        if (t.mediumWidth && _) return s(u, t, f);
                        if (t.smallWidth && E) return s(u, t, f);
                        if (t.extraSmallWidth && A) return s(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && h) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                };
                h.defaultProps = {
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
                (0, a.memo)(h);
                const g = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    p = ({ children: e }) => {
                        const u = (0, a.useContext)(F),
                            t = (0, a.useState)(u),
                            n = t[0],
                            r = t[1],
                            s = (0, a.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(u);
                                r(Object.assign({ width: t, height: n }, d(t, n, c)));
                            }, []),
                            l = (0, a.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        g(() => {
                            o.O.client.events.on('clientResized', s), o.O.client.events.on('self.onScaleUpdated', l);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', s),
                                        o.O.client.events.off('self.onScaleUpdated', l);
                                },
                                [s, l],
                            );
                        const m = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return i().createElement(F.Provider, { value: m }, e);
                    };
                var C = t(483),
                    B = t.n(C),
                    f = t(926),
                    v = t.n(f);
                let b, y, x;
                !(function (e) {
                    (e[(e.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = c.small.width)] = 'Small'),
                        (e[(e.Medium = c.medium.width)] = 'Medium'),
                        (e[(e.Large = c.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = c.small.width)] = 'Small'),
                            (e[(e.Medium = c.medium.width)] = 'Medium'),
                            (e[(e.Large = c.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge');
                    })(y || (y = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = c.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = c.small.height)] = 'Small'),
                            (e[(e.Medium = c.medium.height)] = 'Medium'),
                            (e[(e.Large = c.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = c.extraLarge.height)] = 'ExtraLarge');
                    })(x || (x = {}));
                const w = () => {
                        const e = (0, a.useContext)(F),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return b.ExtraLarge;
                                    case e.large:
                                        return b.Large;
                                    case e.medium:
                                        return b.Medium;
                                    case e.small:
                                        return b.Small;
                                    case e.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return y.ExtraLarge;
                                    case e.largeWidth:
                                        return y.Large;
                                    case e.mediumWidth:
                                        return y.Medium;
                                    case e.smallWidth:
                                        return y.Small;
                                    case e.extraSmallWidth:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return x.ExtraLarge;
                                    case e.largeHeight:
                                        return x.Large;
                                    case e.mediumHeight:
                                        return x.Medium;
                                    case e.smallHeight:
                                        return x.Small;
                                    case e.extraSmallHeight:
                                        return x.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), x.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                const M = {
                        [y.ExtraSmall]: '',
                        [y.Small]: v().SMALL_WIDTH,
                        [y.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [y.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [y.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [x.ExtraSmall]: '',
                        [x.Small]: v().SMALL_HEIGHT,
                        [x.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [x.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL,
                        [b.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [b.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [b.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, S);
                        const r = w(),
                            a = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return i().createElement('div', N({ className: B()(t, M[a], L[s], O[o]) }, n), u);
                    },
                    k = ['children'];
                const I = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, k);
                    return i().createElement(p, null, i().createElement(T, t, u));
                };
                var P = t(493),
                    H = t.n(P),
                    V = t(916);
                const W = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            t = 'gold' === u ? V.B3.GOLD : V.B3.INTEGRAL;
                            return void 0 === e ? '' : V.Z5.getNumberFormat(e, t);
                        })(u, e);
                        return t ? i().createElement('span', null, t) : null;
                    },
                    U = {
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
                        'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                        'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                        'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                        'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
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
                        value__eliteXP: 'Currency_value__eliteXP_62',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    };
                let z, $, G;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(z || (z = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })($ || ($ = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(G || (G = {}));
                const X = (0, a.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: u,
                            size: t,
                            type: n,
                            value: r,
                            discountValue: a,
                            showPlus: s,
                            isEnough: o = !0,
                            stockBackgroundName: c = G.Red,
                            className: l,
                            classNames: d,
                        }) =>
                            i().createElement(
                                'span',
                                { className: B()(U.base, U[`base__${t}`], l) },
                                i().createElement(
                                    'span',
                                    {
                                        className: B()(
                                            U.value,
                                            U[`value__${n}`],
                                            !o && U.value__notEnough,
                                            null == d ? void 0 : d.value,
                                        ),
                                    },
                                    s && r > 0 && '+',
                                    i().createElement(W, { value: r, format: n === $.gold ? 'gold' : 'integral' }),
                                ),
                                i().createElement('span', {
                                    className: B()(U.icon, U[`icon__${n}-${t}`], null == d ? void 0 : d.icon),
                                }),
                                e &&
                                    i().createElement(
                                        'span',
                                        {
                                            className: B()(
                                                U.stock,
                                                a && U.stock__indent,
                                                u && U.stock__interactive,
                                                null == d ? void 0 : d.stock,
                                            ),
                                        },
                                        i().createElement('span', {
                                            className: U.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                        }),
                                        Boolean(a) && a,
                                    ),
                            ),
                    ),
                    j = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    K = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    (t = null), (u = e());
                                });
                            })),
                            () => {
                                'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                            }
                        );
                    };
                var q = t(521);
                const Y = (e) => e instanceof HTMLElement,
                    Z = (e) => {
                        e.focus();
                    },
                    Q = (e) => {
                        if (e.keyCode === q.n.TAB) {
                            const u = Array.from(document.body.querySelectorAll('input')).filter(Y);
                            if (!u.length) return;
                            e.preventDefault(), o.O.view.setEventHandled();
                            const t = document.activeElement,
                                n = u[0],
                                r = u[u.length - 1];
                            if (e.shiftKey && t === n) Z(r);
                            else if (e.shiftKey || t !== r) {
                                const n = u.findIndex((e) => e === t),
                                    r = u[n + (e.shiftKey ? -1 : 1)];
                                r && Z(r);
                            } else Z(n);
                        }
                    };
                function J(e) {
                    const u = new KeyboardEvent('keydown', {
                        view: window,
                        bubbles: !0,
                        key: 'Tab',
                        charCode: q.n.TAB,
                        keyCode: q.n.TAB,
                        shiftKey: e,
                    });
                    document.body.dispatchEvent(u);
                }
                var ee = t(515),
                    ue = t(558),
                    te = t(934);
                function ne(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const re = {
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
                    ae = [
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
                function ie() {
                    return (
                        (ie =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ie.apply(this, arguments)
                    );
                }
                class se extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && ne(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && ne(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            r = e.side,
                            a = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            c = e.onMouseLeave,
                            l = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, ae)),
                            _ = B()(re.base, re[`base__${a}`], re[`base__${r}`], null == s ? void 0 : s.base),
                            E = B()(re.icon, re[`icon__${a}`], re[`icon__${r}`], null == s ? void 0 : s.icon),
                            A = B()(re.glow, null == s ? void 0 : s.glow),
                            F = B()(re.caption, re[`caption__${a}`], null == s ? void 0 : s.caption),
                            D = B()(re.goto, null == s ? void 0 : s.goto);
                        return i().createElement(
                            'div',
                            ie(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(l),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== a && i().createElement('div', { className: re.shine }),
                            i().createElement('div', { className: E }, i().createElement('div', { className: A })),
                            i().createElement('div', { className: F }, u),
                            n && i().createElement('div', { className: D }, n),
                        );
                    }
                }
                se.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const oe = [
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
                function ce(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const le = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: V.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    de = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            c = e.ignoreShowDelay,
                            l = void 0 !== c && c,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            h = void 0 === D ? 0 : D,
                            g = e.onShow,
                            p = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, oe);
                        const B = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    h ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [h],
                            ),
                            v = (0, a.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (le(t, E, { isMouseEvent: !0, on: !0, arguments: ce(n) }, f),
                                    g && g(),
                                    (B.current.isVisible = !0));
                            }, [t, E, n, f, g]),
                            b = (0, a.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        le(t, E, { on: !1 }, f),
                                        B.current.isVisible && p && p(),
                                        (B.current.isVisible = !1);
                                }
                            }, [t, E, f, p]),
                            y = (0, a.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', y, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', y, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            );
                        return F
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(v, l ? 100 : 400)),
                                                      r && r(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              b(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === m && b(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === m && b(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : u;
                        var x;
                    },
                    me = ['children'];
                function _e() {
                    return (
                        (_e =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _e.apply(this, arguments)
                    );
                }
                const Ee = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, me);
                        return i().createElement(
                            de,
                            _e(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            u,
                        );
                    },
                    Ae = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const De = R.views.common.tooltip_window.simple_tooltip_content,
                    he = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            s = e.alert,
                            o = e.args,
                            c = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Ae);
                        const l = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: r, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, n, r, o]);
                        return i().createElement(
                            de,
                            Fe(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? De.SimpleTooltipHtmlContent('resId') : De.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                c,
                            ),
                            u,
                        );
                        var d;
                    };
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const pe = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = i().createElement('div', { className: t }, e);
                        if (u.header || u.body) return i().createElement(he, u, n);
                        const r = u.contentId;
                        return r ? i().createElement(de, ge({}, u, { contentId: r }), n) : i().createElement(Ee, u, n);
                    },
                    Ce = 'ExceededMessage_wrapper_0d',
                    Be = 'ExceededMessage_base_1b',
                    fe = 'ExceededMessage_limitIcon_46',
                    ve = 'ExceededMessage_hidden_4b',
                    be = 'ExceededMessage_limitWrapper__enter_0a',
                    ye = 'ExceededMessage_limitWrapper__exit_bc',
                    xe = 'ExceededMessage_restriction_33',
                    we = 'ExceededMessage_restrictionIcon_f1',
                    Se = 'ExceededMessage_restrictionIconGlow_04',
                    Ne = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    Me = { enter: be, exit: ye },
                    Le = ({ className: e, exceeded: u, amountOfPersonalDiscounts: t, onClick: n }) =>
                        i().createElement(
                            ue.Z,
                            { className: B()(e, Ce) },
                            i().createElement(
                                te.Z,
                                { key: String(`${u}${t > 5}`), timeout: 350, classNames: Me },
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    u
                                        ? t > 5
                                            ? i().createElement(
                                                  'div',
                                                  { className: B()(Be) },
                                                  i().createElement(
                                                      'div',
                                                      null,
                                                      R.strings.personal_exchange_rates.common.limitOverExceeded(),
                                                  ),
                                                  i().createElement(se, {
                                                      caption:
                                                          R.strings.personal_exchange_rates.common.limitRestrictions(),
                                                      type: 'close',
                                                      side: 'right',
                                                      onClick: n,
                                                      classNames: { base: xe, icon: we, glow: Se },
                                                  }),
                                              )
                                            : i().createElement(
                                                  pe,
                                                  { tooltipArgs: Ne, className: B()(Be) },
                                                  i().createElement(
                                                      i().Fragment,
                                                      null,
                                                      i().createElement(
                                                          'div',
                                                          null,
                                                          R.strings.personal_exchange_rates.common.limitExceeded(),
                                                      ),
                                                      i().createElement('div', { className: fe }),
                                                  ),
                                              )
                                        : i().createElement(
                                              'div',
                                              { className: B()(Be, ve) },
                                              i().createElement(
                                                  'div',
                                                  null,
                                                  R.strings.personal_exchange_rates.common.limitExceeded(),
                                              ),
                                          ),
                                ),
                            ),
                        );
                let Oe, Te;
                !(function (e) {
                    (e.Limited = 'limited'), (e.Unlimited = 'unlimited');
                })(Oe || (Oe = {})),
                    (function (e) {
                        (e.Coefficient = 'coefficient'),
                            (e.Integer = 'integer'),
                            (e.Temporary = 'temporary'),
                            (e.Limited = 'limited');
                    })(Te || (Te = {}));
                var ke = t(281);
                let Ie;
                function Pe(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function Re(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Ie || (Ie = {}));
                const He = (e) => e.replace(/&nbsp;/g, ' '),
                    Ve = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    We = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Ue = (e, u, t = Ie.left) => e.split(u).reduce(t === Ie.left ? Ve : We, []),
                    ze = (() => {
                        const e = new RegExp(
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                .source +
                                '|' +
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                    .source +
                                '|' +
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source +
                                '|' +
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source,
                            'gum',
                        );
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    $e = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Ge = (e, u = Ie.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if ($e.includes(t)) return ze(e);
                        if ('ja' === t) {
                            return (0, ke.D4)()
                                .parse(e)
                                .map((e) => He(e));
                        }
                        return ((e, u = Ie.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = He(e);
                            return Ue(r, /( )/, u).forEach((e) => (t = t.concat(Ue(e, n, Ie.left)))), t;
                        })(e, u);
                    },
                    Xe = 'DiscountHeader_base_cc',
                    je = 'DiscountHeader_base__asIcon_ec',
                    Ke = 'DiscountHeader_goldIcon_70',
                    qe = 'DiscountHeader_freeXpIcon_09',
                    Ye = 'DiscountHeader_hidden_89',
                    Ze = 'DiscountHeader_left_6a',
                    Qe = () =>
                        i().createElement(
                            'div',
                            { className: B()(Xe, je) },
                            Re(R.strings.common.percentValue(), { value: '' }),
                        ),
                    Je = ({ percent: e }) =>
                        i().createElement(
                            'div',
                            { className: Xe },
                            Re(R.strings.common.plusPercentValue(), { value: e }),
                        ),
                    eu = { [$.gold]: Ke, [$.freeXP]: qe },
                    uu = ({ type: e }) =>
                        i().createElement(
                            'div',
                            { className: B()(Xe, je) },
                            i().createElement('div', { className: eu[e] }),
                        );
                var tu = t(613);
                const nu = 60,
                    ru = 3600,
                    au = 86400;
                Date.now(), tu.Ew.getRegionalDateTime, tu.Ew.getFormattedDateTime;
                const iu = () => {},
                    su = (e = 0, u, t = 0, n = iu) => {
                        const r = (0, a.useState)(e),
                            i = r[0],
                            s = r[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const r = Date.now(),
                                        a = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - r) / 1e3);
                                                null !== t && u <= t ? (s(t), n && n(), clearInterval(a)) : s(u);
                                            },
                                            1e3 * (u || (e > 120 ? nu : 1)),
                                        );
                                    return () => {
                                        clearInterval(a);
                                    };
                                }
                            }, [e, u, t, n]),
                            i
                        );
                    };
                V.Sw.instance;
                let ou;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(ou || (ou = {}));
                V.Sw.instance;
                const cu = su,
                    lu = (e) => e.toString().padStart(2, '0'),
                    du = ({ endDate: e }) => {
                        const u = Math.floor((e.getTime() - Date.now()) / 1e3),
                            t = ((e) => {
                                const u = `${lu(e.hours)}:${lu(e.minutes)}:${lu(e.seconds)}`,
                                    t = `${Pe(R.strings.common.duration.days(), { days: e.days })}`;
                                return e.days ? `${t} ${u}` : u;
                            })(
                                (function (e = 0) {
                                    let u = e;
                                    const t = Math.trunc(u / au);
                                    u -= t * au;
                                    const n = Math.trunc(u / ru);
                                    u -= n * ru;
                                    const r = Math.trunc(u / nu);
                                    return (u -= r * nu), { days: t, hours: n, minutes: r, seconds: u };
                                })(cu(u, 1)),
                            );
                        return i().createElement(
                            'div',
                            { className: Xe },
                            i().createElement('div', { className: Ze }, t),
                            i().createElement('div', { className: Ye }, t.replace(/\d/g, '9')),
                        );
                    },
                    mu = ({ discount: e, type: u }) => {
                        switch (e.format) {
                            case Te.Coefficient:
                                return i().createElement(Qe, null);
                            case Te.Integer:
                                return i().createElement(Je, { percent: e.percent });
                            case Te.Temporary:
                                return i().createElement(du, { endDate: e.endDate });
                            default:
                                return i().createElement(uu, { type: u });
                        }
                    },
                    _u = 'ExchangeRateInfo_base_4c',
                    Eu = 'ExchangeRateInfo_discountBackground_38',
                    Au = 'ExchangeRateInfo_content_2a',
                    Fu = 'ExchangeRateInfo_rateText_99',
                    Du = 'ExchangeRateInfo_equal_70',
                    hu = { [$.gold]: $.credits, [$.freeXP]: $.gold },
                    gu = {
                        [$.gold]: ['goldRateValue', 'resourceRateValue'],
                        [$.freeXP]: ['resourceRateValue', 'goldRateValue'],
                    },
                    pu = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeRateTooltip('resId') },
                    Cu = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    Bu = ({
                        primaryCurrency: e,
                        rate: u,
                        discount: t,
                        additionalInfo: n,
                        className: r,
                        amountOfPersonalDiscounts: a,
                        exceeded: s,
                    }) => {
                        const o = (null == t ? void 0 : t.exchangeRate) || u;
                        let c;
                        return (
                            t && (c = t.type === Oe.Limited ? (a <= 5 ? Cu : void 0) : pu),
                            i().createElement(
                                pe,
                                { tooltipArgs: c },
                                i().createElement(
                                    'div',
                                    { className: r },
                                    i().createElement(
                                        'div',
                                        { className: _u },
                                        t &&
                                            i().createElement(
                                                i().Fragment,
                                                null,
                                                i().createElement('div', { className: Eu }),
                                                i().createElement(mu, {
                                                    discount: Object.assign({}, t, {
                                                        format: s ? Te.Coefficient : t.format,
                                                    }),
                                                    type: e,
                                                }),
                                            ),
                                        i().createElement(
                                            'div',
                                            { className: Au },
                                            s
                                                ? R.strings.personal_exchange_rates.common.combinedDiscount()
                                                : i().createElement(
                                                      i().Fragment,
                                                      null,
                                                      i().createElement(
                                                          'span',
                                                          { className: Fu },
                                                          R.strings.personal_exchange_rates.common.exchangeRate(),
                                                      ),
                                                      i().createElement(X, {
                                                          value: o[gu[e][0]],
                                                          size: 'big',
                                                          type: e,
                                                      }),
                                                      i().createElement('span', { className: Du }, '='),
                                                      i().createElement(X, {
                                                          value: o[gu[e][1]],
                                                          size: 'big',
                                                          type: hu[e],
                                                      }),
                                                  ),
                                        ),
                                        n,
                                    ),
                                ),
                            )
                        );
                    },
                    fu = {
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
                    };
                let vu, bu;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(vu || (vu = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(bu || (bu = {}));
                const yu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: s,
                    soundHover: o,
                    soundClick: c,
                    onMouseEnter: l,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: E,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        h = D[0],
                        g = D[1],
                        p = (0, a.useState)(!1),
                        C = p[0],
                        f = p[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                h && null !== F.current && !F.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, a.useEffect)(() => {
                            g(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: F,
                                className: B()(
                                    fu.base,
                                    fu[`base__${n}`],
                                    r && fu.base__disabled,
                                    u && fu[`base__${u}`],
                                    h && fu.base__focus,
                                    C && fu.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== o && ne(o), l && l(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    r || (_ && _(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== c && ne(c),
                                        m && m(e),
                                        t && (r || (F.current && (F.current.focus(), g(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (E && E(e), f(!1));
                                },
                                onClick: function (e) {
                                    r || (A && A(e));
                                },
                            },
                            n !== vu.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: fu.back }),
                                    i().createElement('span', { className: fu.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: B()(fu.state, fu.state__default) },
                                i().createElement('span', { className: fu.stateDisabled }),
                                i().createElement('span', { className: fu.stateHighlightHover }),
                                i().createElement('span', { className: fu.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: fu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                yu.defaultProps = { type: vu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const xu = yu,
                    wu = 'Footer_base_19',
                    Su = 'Footer_divider_c7',
                    Nu = 'Footer_footerText_9a',
                    Mu = 'Footer_afterExchange_31',
                    Lu = 'Footer_currencyWrapper_44',
                    Ou = 'Footer_alert_6c',
                    Tu = 'Footer_buttons_5b',
                    ku = 'Footer_button_2d',
                    Iu = R.strings.personal_exchange_rates.common,
                    Pu = ({ onExchange: e, onClose: u, disabled: t, currenciesAfterExchange: n }) =>
                        i().createElement(
                            'div',
                            { className: wu },
                            i().createElement('div', { className: Su }),
                            i().createElement('div', { className: Nu }, Iu.afterExchange()),
                            i().createElement(
                                'div',
                                { className: Mu },
                                n.map((e) =>
                                    i().createElement(
                                        'div',
                                        { key: e.currencyType, className: Lu },
                                        i().createElement(X, {
                                            value: Math.max(e.value, 0),
                                            type: e.currencyType,
                                            size: 'big',
                                        }),
                                        e.currencyType === $.gold &&
                                            e.value < 0 &&
                                            i().createElement(
                                                he,
                                                {
                                                    header: R.strings.personal_exchange_rates.tooltip.goldAfterExchange.header(),
                                                    body: R.strings.personal_exchange_rates.tooltip.goldAfterExchange.body(),
                                                },
                                                i().createElement('div', { className: Ou }),
                                            ),
                                    ),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: Tu },
                                i().createElement(
                                    xu,
                                    {
                                        size: bu.medium,
                                        type: 'main',
                                        mixClass: ku,
                                        onClick: e,
                                        disabled: t,
                                        soundClick: 'yes',
                                    },
                                    Iu.exchange(),
                                ),
                                i().createElement(
                                    xu,
                                    { size: bu.medium, type: 'secondary', mixClass: ku, onClick: u, soundClick: 'yes' },
                                    Iu.cancel(),
                                ),
                            ),
                        ),
                    Ru = (e) => {
                        console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                    };
                function Hu(e = q.n.NONE, u = Ru, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== q.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                const Vu = {
                    base: 'Balance_base_3a',
                    currency: 'Balance_currency_0c',
                    icon: 'Balance_icon_ff',
                    icon__crystal: 'Balance_icon__crystal_1e',
                    icon__gold: 'Balance_icon__gold_f2',
                    icon__credits: 'Balance_icon__credits_f1',
                    icon__freeXP: 'Balance_icon__freeXP_31',
                    amount: 'Balance_amount_bb',
                    amount__crystal: 'Balance_amount__crystal_ff',
                    amount__gold: 'Balance_amount__gold_c8',
                    amount__credits: 'Balance_amount__credits_d2',
                };
                function Wu() {}
                function Uu(e) {
                    return e;
                }
                function zu() {
                    return !1;
                }
                console.log;
                var $u = t(174);
                function Gu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Xu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Xu(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Xu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const ju = (e) => (0 === e ? window : window.subViews.get(e));
                const Ku = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: n = 'real', options: r, children: s, mocks: c }) {
                            const l = (0, a.useRef)([]),
                                d = (t, n, r) => {
                                    var a;
                                    const i = (function ({
                                            initializer: e = !0,
                                            rootId: u = 0,
                                            getRoot: t = ju,
                                            context: n = 'model',
                                        } = {}) {
                                            const r = new Map();
                                            function a(e, u = 0) {
                                                viewEnv.removeDataChangedCallback(e, u)
                                                    ? r.delete(e)
                                                    : console.error("Can't remove callback by id:", e);
                                            }
                                            engine.whenReady.then(() => {
                                                engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                    t.forEach((u) => {
                                                        const t = r.get(u);
                                                        void 0 !== t && t(e);
                                                    });
                                                });
                                            });
                                            const i = (e) => {
                                                const r = t(u),
                                                    a = n.split('.').reduce((e, u) => e[u], r);
                                                return 'string' != typeof e || 0 === e.length
                                                    ? a
                                                    : e.split('.').reduce((e, u) => {
                                                          const t = e[u];
                                                          return 'function' == typeof t ? t.bind(e) : t;
                                                      }, a);
                                            };
                                            return {
                                                subscribe: (t, a) => {
                                                    const s = 'string' == typeof a ? `${n}.${a}` : n,
                                                        c = o.O.view.addModelObserver(s, u, !0);
                                                    return r.set(c, t), e && t(i(a)), c;
                                                },
                                                readByPath: i,
                                                createCallback: (e, u) => {
                                                    const t = i(u);
                                                    return (...u) => {
                                                        t(e(...u));
                                                    };
                                                },
                                                createCallbackNoArgs: (e) => {
                                                    const u = i(e);
                                                    return () => {
                                                        u();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var e, t = Gu(r.keys()); !(e = t()).done; ) a(e.value, u);
                                                },
                                                unsubscribe: a,
                                            };
                                        })(n),
                                        s =
                                            'real' === t
                                                ? i
                                                : Object.assign({}, i, {
                                                      readByPath:
                                                          null != (a = null == r ? void 0 : r.getter) ? a : () => {},
                                                  }),
                                        c = (e) =>
                                            'mocks' === t ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                        d = (e) => l.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: c,
                                            externalModel: s,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const n = null != u ? u : c(e),
                                                        r = $u.LO.box(n, { equals: zu });
                                                    return (
                                                        'real' === t &&
                                                            s.subscribe(
                                                                (0, $u.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const n = null != u ? u : c(e),
                                                        r = $u.LO.box(n, { equals: zu });
                                                    return (
                                                        'real' === t &&
                                                            s.subscribe(
                                                                (0, $u.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = c(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = $u.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, $u.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            a = Object.entries(r),
                                                            i = a.reduce(
                                                                (e, [u, t]) => ((e[t] = $u.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, $u.aD)((e) => {
                                                                        a.forEach(([u, t]) => {
                                                                            i[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: d,
                                        }),
                                        _ = { mode: t, model: m, externalModel: s, cleanup: d };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && r ? r.controls(_) : u(_),
                                        externalModel: s,
                                        mode: t,
                                    };
                                },
                                m = (0, a.useRef)(!1),
                                _ = (0, a.useState)(n),
                                E = _[0],
                                A = _[1],
                                F = (0, a.useState)(() => d(n, r, c)),
                                D = F[0],
                                h = F[1];
                            return (
                                (0, a.useEffect)(() => {
                                    m.current ? h(d(E, r, c)) : (m.current = !0);
                                }, [c, E, r]),
                                (0, a.useEffect)(() => {
                                    A(n);
                                }, [n]),
                                (0, a.useEffect)(
                                    () => () => {
                                        D.externalModel.dispose(), l.current.forEach((e) => e());
                                    },
                                    [D],
                                ),
                                i().createElement(t.Provider, { value: D }, s)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
                function qu(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const Yu = qu;
                function Zu(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Qu(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let n = t;
                    for (let t = 0; t < e.length; t++) {
                        n = u(n, Yu(e, t), t, e);
                    }
                    return n;
                }
                const Ju = Ku()(({ observableModel: e, externalModel: u, readByPath: t }) => {
                        const n = () => Qu(t('currencies'), (e, u) => ((e[u.currencyType] = u), e), {}),
                            r = Object.assign({ resources: $u.LO.box(n()) }, e.primitives(['isWalletAvailable']));
                        return (
                            u.subscribe(
                                (0, $u.aD)(() => r.resources.set(n())),
                                'currencies',
                            ),
                            r
                        );
                    }, Wu),
                    et = Ju[0],
                    ut = Ju[1];
                const tt = [$.crystal, $.gold, $.credits, $.freeXP],
                    nt = (0, ee.Pi)(() => {
                        const e = ut().model.resources.get();
                        return i().createElement(
                            'div',
                            { className: Vu.base },
                            tt.map((u) => {
                                const t = e[u];
                                return i().createElement(
                                    'div',
                                    { key: u },
                                    i().createElement(
                                        pe,
                                        { tooltipArgs: t ? { contentId: t.tooltipId } : void 0 },
                                        i().createElement(
                                            'div',
                                            { className: Vu.currency },
                                            i().createElement('div', { className: B()(Vu.icon, Vu[`icon__${u}`]) }),
                                            i().createElement(
                                                'span',
                                                { className: B()(Vu.amount, Vu[`amount__${u}`]) },
                                                t ? i().createElement(W, { value: t.value }) : '---',
                                            ),
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    rt = 'Layout_base_8b',
                    at = 'Layout_pin_d4',
                    it = 'Layout_close_27',
                    st = { context: 'model.balance' },
                    ot = ({ backgroundImage: e, children: u, onClose: t }) => {
                        var n;
                        return (
                            (n = t),
                            Hu(q.n.ESCAPE, n),
                            i().createElement(
                                'div',
                                { className: rt, style: e ? { backgroundImage: `url(${e})` } : {} },
                                i().createElement(
                                    'div',
                                    { className: at },
                                    i().createElement(et, { options: st }, i().createElement(nt, null)),
                                    i().createElement(se, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t,
                                        classNames: { base: it },
                                    }),
                                ),
                                u,
                            )
                        );
                    };
                let ct;
                !(function (e) {
                    (e.credits = 'credits'), (e.gold = 'gold'), (e.crystal = 'crystal'), (e.freeXP = 'freeXP');
                })(ct || (ct = {}));
                var lt = t(946);
                const dt = 'check',
                    mt = 'nation',
                    _t = 'type',
                    Et = 'tier',
                    At = 'name',
                    Ft = 'modernization',
                    Dt = 'combatXp',
                    ht = 'asc',
                    gt = 'desc',
                    pt = ['heavyTank', 'mediumTank', 'lightTank', 'AT-SPG', 'SPG'].reduce(
                        (e, u, t) => ((e[u] = t), e),
                        {},
                    );
                function Ct(e) {
                    var u = (function (e, u) {
                        if ('object' != typeof e || null === e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, u || 'default');
                            if ('object' != typeof n) return n;
                            throw new TypeError('@@toPrimitive must return a primitive value.');
                        }
                        return ('string' === u ? String : Number)(e);
                    })(e, 'string');
                    return 'symbol' == typeof u ? u : String(u);
                }
                const Bt = 2147483647,
                    ft = { field: Dt, direction: gt },
                    vt = Ku()(
                        ({ observableModel: e, externalModel: u, readByPath: t }) => {
                            const n = e.array('balance.currencies'),
                                r = e.primitives(['maxResourceAmountForExchange', 'maxGoldAmountForExchange']);
                            function a() {
                                return ((e) => {
                                    if (e.isDiscountAvailable)
                                        return {
                                            format: e.showFormat,
                                            exchangeRate: e.exchangeRate,
                                            type: e.discountType,
                                            availableAmount: {
                                                gold: e.amountOfDiscount,
                                                resource:
                                                    (e.amountOfDiscount / e.exchangeRate.goldRateValue) *
                                                    e.exchangeRate.resourceRateValue,
                                            },
                                            endDate: new Date(1e3 * e.discountLifetime),
                                            percent: e.discountPercent,
                                        };
                                })(t('discount'));
                            }
                            function i() {
                                return (
                                    (e = t('vehiclesSelection')),
                                    (u = Uu),
                                    Array.isArray(e)
                                        ? e.map(u)
                                        : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n))
                                );
                                var e, u;
                            }
                            const s = Object.assign(
                                    {
                                        goldToExchange: e.primitives(['goldAmountForExchange']).goldAmountForExchange,
                                        freeXpFromExchange: e.primitives(['resourceAmountForExchange'])
                                            .resourceAmountForExchange,
                                        exchangeRate: e.object('exchangeRate'),
                                        discount: $u.LO.box(a()),
                                        vehicles: $u.LO.box(i()),
                                        selectedVehicles: $u.LO.box({}),
                                        sortSettings: $u.LO.box(ft),
                                    },
                                    e.primitives(['amountOfPersonalDiscounts']),
                                ),
                                o = (0, lt.Om)((e) => {
                                    const u = (function (e, u) {
                                        for (let t = 0; t < e.length; t++) {
                                            const n = Zu(e[t]);
                                            if (u(n, t, e)) return n;
                                        }
                                    })(n.get(), (u) => u.currencyType === e);
                                    return u ? u.value : 0;
                                });
                            u.subscribe(
                                (0, $u.aD)(() => s.discount.set(a())),
                                'discount',
                            ),
                                u.subscribe(
                                    (0, $u.aD)(() => s.vehicles.set(i())),
                                    'vehiclesSelection',
                                );
                            const c = (0, lt.Om)(() => {
                                    var e;
                                    const u = null != (e = s.sortSettings.get()) ? e : ft,
                                        t = ((e, u, t) => {
                                            const n = {
                                                [dt]: (e, u) => Number(t(e)) - Number(t(u)),
                                                [mt]: (e, u) => u.nationOrder - e.nationOrder,
                                                [_t]: (e, u) => pt[u.type] - pt[e.type],
                                                [Et]: (e, u) => e.tier - u.tier,
                                                [At]: (e, u) => u.name.localeCompare(e.name),
                                                [Ft]: (e, u) =>
                                                    e.levelOfFieldModernization === u.levelOfFieldModernization
                                                        ? e.tier - u.tier
                                                        : e.levelOfFieldModernization - u.levelOfFieldModernization,
                                                [Dt]: (e, u) => e.amountOfCombatXp - u.amountOfCombatXp,
                                            };
                                            return (t, r) => {
                                                const a = u === ht ? [t, r] : [r, t];
                                                return n[e](...a) || n[Dt](...a) || n[At](...a);
                                            };
                                        })(u.field, u.direction, (e) => E(e.vehicleCD));
                                    return [...s.vehicles.get()].sort(t);
                                }),
                                l = (0, lt.Om)(() => o(ct.gold)),
                                d = (0, lt.Om)(() => o(ct.freeXP)),
                                m = (0, lt.Om)(() => s.vehicles.get().reduce((e, u) => e + u.amountOfCombatXp, 0)),
                                _ = (0, lt.Om)(() =>
                                    Object.values(s.selectedVehicles.get()).reduce(
                                        (e, { amountOfCombatXp: u }) => e + u,
                                        0,
                                    ),
                                ),
                                E = (0, lt.Om)((e) => Boolean(s.selectedVehicles.get()[e])),
                                A = (0, lt.Om)(
                                    () =>
                                        Boolean(s.vehicles.get().length) &&
                                        s.vehicles.get().length === Object.keys(s.selectedVehicles.get()).length,
                                ),
                                F = (0, lt.Om)(() => [
                                    { currencyType: ct.freeXP, value: d() + s.freeXpFromExchange.get() },
                                    { currencyType: ct.gold, value: l() - s.goldToExchange.get() },
                                ]),
                                D = (0, lt.Om)(() => Math.min(Bt, r.maxResourceAmountForExchange.get())),
                                h = (0, lt.Om)(() => Math.min(Bt, r.maxGoldAmountForExchange.get())),
                                g = (0, lt.Om)(() => {
                                    const e = s.discount.get();
                                    return (
                                        !(!e || 'limited' !== e.type) && e.availableAmount.gold < s.goldToExchange.get()
                                    );
                                });
                            return Object.assign({}, s, {
                                computes: {
                                    afterExchange: F,
                                    vehicle: { sorted: c, selected: E, allSelected: A },
                                    xp: { balance: d, maximum: D, allAvailable: m, available: _ },
                                    gold: { balance: l, maximum: h },
                                    exceeded: g,
                                },
                            });
                        },
                        ({ externalModel: e, model: u, cleanup: t }) => {
                            const n = e.createCallback((e) => ({ currency: e }), 'onVehiclesSelected');
                            return (
                                t(
                                    (0, $u.U5)(
                                        () => u.vehicles.get(),
                                        () => {
                                            const e = Object.assign({}, u.selectedVehicles.get()),
                                                t = u.vehicles.get();
                                            Object.keys(e).forEach((u) => {
                                                const n = t.find(({ vehicleCD: e }) => e.toString() === u);
                                                n ? (e[u] = Object.assign({}, n)) : delete e[u];
                                            }),
                                                u.selectedVehicles.set(e),
                                                n(u.computes.xp.available());
                                        },
                                    ),
                                ),
                                {
                                    close: e.createCallbackNoArgs('onClose'),
                                    openAllDiscounts: e.createCallbackNoArgs('onOpenAllDiscountsWindow'),
                                    exchange: e.createCallback(
                                        () => ({
                                            gold: u.goldToExchange.get(),
                                            selectedVehicles: JSON.stringify(
                                                Object.values(u.selectedVehicles.get()).map(({ vehicleCD: e }) => e),
                                            ),
                                        }),
                                        'onExchange',
                                    ),
                                    setGold: e.createCallback(
                                        (e) => ({ gold: Math.min(e, u.computes.gold.maximum()) }),
                                        'onSelectedValueUpdated',
                                    ),
                                    setFreeXp: e.createCallback(
                                        (e) => ({ currency: Math.min(e, u.computes.xp.maximum()) }),
                                        'onSelectedValueUpdated',
                                    ),
                                    toggleVehicleSelect: (0, $u.aD)((e) => {
                                        const t = u.selectedVehicles.get();
                                        if (t[e.vehicleCD]) {
                                            const n = e.vehicleCD,
                                                r =
                                                    (t[n],
                                                    (function (e, u) {
                                                        if (null == e) return {};
                                                        var t,
                                                            n,
                                                            r = {},
                                                            a = Object.keys(e);
                                                        for (n = 0; n < a.length; n++)
                                                            (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                                        return r;
                                                    })(t, [n].map(Ct)));
                                            u.selectedVehicles.set(r);
                                        } else
                                            u.selectedVehicles.set(
                                                Object.assign({}, t, { [e.vehicleCD]: Object.assign({}, e) }),
                                            );
                                        n(u.computes.xp.available());
                                    }),
                                    toggleAllVehicleSelect: (0, $u.aD)(() => {
                                        const e = u.vehicles.get(),
                                            t = Object.keys(u.selectedVehicles.get()).length,
                                            r = t > 0 && t === e.length;
                                        u.selectedVehicles.set(
                                            r
                                                ? {}
                                                : Object.fromEntries(e.map((e) => [e.vehicleCD, Object.assign({}, e)])),
                                        ),
                                            n(u.computes.xp.available());
                                    }),
                                    toggleSort: (0, $u.aD)((e) => {
                                        const t = u.sortSettings.get(),
                                            n = [gt, ht, void 0];
                                        let r;
                                        if ((null == t ? void 0 : t.field) === e) {
                                            const e = n.findIndex((e) => (null == t ? void 0 : t.direction) === e);
                                            r = n[(e + 1) % n.length];
                                        } else r = n[0];
                                        u.sortSettings.set(r ? { field: e, direction: r } : void 0);
                                    }),
                                }
                            );
                        },
                    ),
                    bt = vt[0],
                    yt = vt[1],
                    xt = 'App_base_dc',
                    wt = 'App_rateInfo_9e',
                    St = 'App_additionalInfo_a1',
                    Nt = 'App_additionalInfoText_95',
                    Mt = 'App_table_cb',
                    Lt = 'App_exceeded_a3',
                    Ot = 'FormatText_base_d0',
                    Tt = ({ binding: e, text: u = '', classMix: t, alignment: n = Ie.left, formatWithBrackets: r }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const s = r && e ? Pe(u, e) : u;
                        return i().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((u, r) =>
                                i().createElement(
                                    'div',
                                    { className: B()(Ot, t), key: `${u}-${r}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : Ge(e, u))))(
                                        u,
                                        n,
                                        e,
                                    ).map((e, u) => i().createElement(a.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    };
                function kt(e, u, t, n) {
                    let r,
                        a = !1,
                        i = 0;
                    function s() {
                        r && clearTimeout(r);
                    }
                    function o(...o) {
                        const c = this,
                            l = Date.now() - i;
                        function d() {
                            (i = Date.now()), t.apply(c, o);
                        }
                        a ||
                            (n && !r && d(),
                            s(),
                            void 0 === n && l > e
                                ? d()
                                : !0 !== u &&
                                  (r = setTimeout(
                                      n
                                          ? function () {
                                                r = void 0;
                                            }
                                          : d,
                                      void 0 === n ? e - l : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                        (o.cancel = function () {
                            s(), (a = !0);
                        }),
                        o
                    );
                }
                function It(e, u, t, n = !1) {
                    const r = (0, a.useMemo)(
                        () =>
                            (function (e, u, t) {
                                return void 0 === t ? kt(e, u, !1) : kt(e, t, !1 !== u);
                            })(t, n, e),
                        u,
                    );
                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                }
                const Pt = (e, u = V.B3.INTEGRAL) => V.Z5.getNumberFormat(e, u);
                t(368);
                let Rt;
                !(function (e) {
                    (e[(e.ZERO = 48)] = 'ZERO'),
                        (e[(e.ONE = 49)] = 'ONE'),
                        (e[(e.TWO = 50)] = 'TWO'),
                        (e[(e.THREE = 51)] = 'THREE'),
                        (e[(e.FOUR = 52)] = 'FOUR'),
                        (e[(e.FIVE = 53)] = 'FIVE'),
                        (e[(e.SIX = 54)] = 'SIX'),
                        (e[(e.SEVEN = 55)] = 'SEVEN'),
                        (e[(e.EIGHT = 56)] = 'EIGHT'),
                        (e[(e.NINE = 57)] = 'NINE'),
                        (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                        (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                        (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                        (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                        (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                        (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                        (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                        (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                        (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                        (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9');
                })(Rt || (Rt = {}));
                const Ht = {
                    base: 'NumericStepper_base_98',
                    base__small: 'NumericStepper_base__small_e3',
                    base__medium: 'NumericStepper_base__medium_7f',
                    base__large: 'NumericStepper_base__large_87',
                    base__isFocus: 'NumericStepper_base__isFocus_d0',
                    base__isDisabled: 'NumericStepper_base__isDisabled_06',
                    inputContainer: 'NumericStepper_inputContainer_87',
                    input: 'NumericStepper_input_ef',
                    'base__withCurrency-small': 'NumericStepper_base__withCurrency-small_a3',
                    'base__withCurrency-medium': 'NumericStepper_base__withCurrency-medium_28',
                    'base__withCurrency-large': 'NumericStepper_base__withCurrency-large_2b',
                    input__disabled: 'NumericStepper_input__disabled_83',
                    input__credits: 'NumericStepper_input__credits_d6',
                    'input__credits-disabled': 'NumericStepper_input__credits-disabled_57',
                    input__gold: 'NumericStepper_input__gold_21',
                    'input__gold-disabled': 'NumericStepper_input__gold-disabled_1c',
                    input__xp: 'NumericStepper_input__xp_df',
                    input__freeXP: 'NumericStepper_input__freeXP_53',
                    input__crystal: 'NumericStepper_input__crystal_64',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_4a',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_29',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_52',
                    input__withCurrency: 'NumericStepper_input__withCurrency_81',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_4c',
                    'input__xp-large': 'NumericStepper_input__xp-large_5e',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_ee',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_05',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_ef',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_28',
                    input__error: 'NumericStepper_input__error_d8',
                    currency: 'NumericStepper_currency_31',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_1d',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_e1',
                    'currency__freeXP-medium': 'NumericStepper_currency__freeXP-medium_fa',
                    'currency__freeXP-large': 'NumericStepper_currency__freeXP-large_6d',
                    'currency__crystal-medium': 'NumericStepper_currency__crystal-medium_15',
                    'currency__crystal-large': 'NumericStepper_currency__crystal-large_02',
                    currencyIcon: 'NumericStepper_currencyIcon_5a',
                    'currencyIcon__credits-small': 'NumericStepper_currencyIcon__credits-small_05',
                    'currencyIcon__credits-medium': 'NumericStepper_currencyIcon__credits-medium_ec',
                    'currencyIcon__credits-large': 'NumericStepper_currencyIcon__credits-large_d4',
                    'currencyIcon__gold-small': 'NumericStepper_currencyIcon__gold-small_52',
                    'currencyIcon__gold-medium': 'NumericStepper_currencyIcon__gold-medium_77',
                    'currencyIcon__gold-large': 'NumericStepper_currencyIcon__gold-large_c1',
                    'currencyIcon__crystal-small': 'NumericStepper_currencyIcon__crystal-small_69',
                    'currencyIcon__crystal-medium': 'NumericStepper_currencyIcon__crystal-medium_20',
                    'currencyIcon__crystal-large': 'NumericStepper_currencyIcon__crystal-large_fa',
                    'currencyIcon__freeXP-small': 'NumericStepper_currencyIcon__freeXP-small_5c',
                    'currencyIcon__freeXP-medium': 'NumericStepper_currencyIcon__freeXP-medium_27',
                    'currencyIcon__freeXP-large': 'NumericStepper_currencyIcon__freeXP-large_27',
                    'currencyIcon__xp-small': 'NumericStepper_currencyIcon__xp-small_e9',
                    'currencyIcon__xp-medium': 'NumericStepper_currencyIcon__xp-medium_20',
                    'currencyIcon__xp-large': 'NumericStepper_currencyIcon__xp-large_8e',
                    dummyValue: 'NumericStepper_dummyValue_0c',
                    control: 'NumericStepper_control_b0',
                    buttonIncrement: 'NumericStepper_buttonIncrement_48',
                    buttonDecrement: 'NumericStepper_buttonDecrement_e6',
                    buttonIncrement__small: 'NumericStepper_buttonIncrement__small_a8',
                    buttonDecrement__small: 'NumericStepper_buttonDecrement__small_25',
                    buttonIncrement__medium: 'NumericStepper_buttonIncrement__medium_2e',
                    buttonDecrement__medium: 'NumericStepper_buttonDecrement__medium_b0',
                    buttonIncrement__large: 'NumericStepper_buttonIncrement__large_37',
                    buttonDecrement__large: 'NumericStepper_buttonDecrement__large_f9',
                    buttonIncrement__isDisabled: 'NumericStepper_buttonIncrement__isDisabled_6b',
                    buttonDecrement__isDisabled: 'NumericStepper_buttonDecrement__isDisabled_a3',
                    'buttonIncrement__isActive-small': 'NumericStepper_buttonIncrement__isActive-small_6e',
                    'buttonIncrement__isActive-medium': 'NumericStepper_buttonIncrement__isActive-medium_cd',
                    'buttonIncrement__isActive-large': 'NumericStepper_buttonIncrement__isActive-large_8b',
                    'buttonDecrement__isActive-small': 'NumericStepper_buttonDecrement__isActive-small_a0',
                    'buttonDecrement__isActive-medium': 'NumericStepper_buttonDecrement__isActive-medium_df',
                    'buttonDecrement__isActive-large': 'NumericStepper_buttonDecrement__isActive-large_ac',
                };
                class Vt extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.timer = null),
                            (this.validationTimer = null),
                            (this.numericalStepper = (0, a.createRef)()),
                            (this.input = (0, a.createRef)()),
                            (this.state = {
                                value: this.props.value,
                                isFocused: this.props.isFocused,
                                activeDecrement: !1,
                                activeIncrement: !1,
                            }),
                            (this.setFocusOnInput = () => {
                                this.props.isDisabled ||
                                    (this.input.current &&
                                        (this.input.current.focus(),
                                        this.setState({ isFocused: !0 }),
                                        this.setCursorPosition(
                                            this.formattedValue.length,
                                            this.formattedValue.length,
                                        )));
                            }),
                            (this.blurInput = () => {
                                this.input.current && (this.input.current.blur(), this.setState({ isFocused: !1 }));
                            }),
                            (this.componentDidMount = () => {
                                this.state.isFocused &&
                                    (this.setFocusOnInput(),
                                    setTimeout(() => {
                                        const e = this.formattedValue.length;
                                        this.input.current && this.input.current.setSelectionRange(e, e);
                                    }, 0)),
                                    document.addEventListener('click', this.handleClickOutside),
                                    document.addEventListener('mouseup', this.handleMouseUp);
                            }),
                            (this.componentWillUnmount = () => {
                                this.stop(),
                                    document.removeEventListener('click', this.handleClickOutside),
                                    document.removeEventListener('mouseup', this.handleMouseUp);
                            }),
                            (this.formatValue = (e) =>
                                this.props.currencyType ? V.Z5.getNumberFormat(e, V.B3.GOLD) : e.toString()),
                            (this.getValidValue = (e) => {
                                const u = Math.min(this.props.maximum, Math.max(this.props.minimum, e));
                                return this.props.onValidValue
                                    ? this.props.onValidValue(u)
                                    : Math.round(u / this.props.stepSize) * this.props.stepSize;
                            }),
                            (this.changeValue = (e) => {
                                e !== this.state.value && (this.setState({ value: e }), this.props.onChange(e));
                            }),
                            (this.setCursorPosition = (e, u) => {
                                this.input.current && this.input.current.setSelectionRange(e, u),
                                    setTimeout(() => {
                                        this.input.current && this.input.current.setSelectionRange(e, u);
                                    });
                            }),
                            (this.handleChange = () => {
                                this.props.isDisabled || this.updateInput();
                            }),
                            (this.updateInput = (e = 0) => {
                                const u = e === q.n.BACKSPACE,
                                    t = e === q.n.DELETE,
                                    n = this.input.current,
                                    r = n.selectionStart || 0,
                                    a = n.selectionEnd || 0;
                                let i = n.value;
                                const s = Math.max(r, a),
                                    o = s;
                                t && (i = i.substring(0, s) + i.substring(s + 1, i.length)),
                                    u && 1 === r && 1 === i.length && (i = '0');
                                const c = Number(i.trim().replace(/\D/g, '')),
                                    l = Number.isSafeInteger(c) ? c : Number.MAX_SAFE_INTEGER,
                                    d = this.props.currencyType ? V.Z5.getNumberFormat(l, V.B3.GOLD) : l.toString(),
                                    m = !isNaN(Number(i.replace(' ', '')));
                                n.value = d;
                                const _ = new RegExp(/\d/g);
                                let E = 0;
                                for (let e = 0; e < o; e++) {
                                    const u = i[e] || '',
                                        t = d[E] || '';
                                    if (u.match(_) || u === t) {
                                        for (; u !== d[E] && E < d.length; ) E++;
                                        E++;
                                    }
                                }
                                '' === i ? (E = 1) : m || (E = i.length),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(E, E),
                                    this.changeValue(l),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        this.getValidValue(l) !== l &&
                                            this.state.isFocused &&
                                            (this.changeValue(this.getValidValue(l)),
                                            this.setCursorPosition(0, this.formatValue(l).length));
                                    }, 1e3));
                            }),
                            (this.handleDelete = (e) => {
                                const u = e.keyCode === q.n.BACKSPACE,
                                    t = e.keyCode === q.n.DELETE,
                                    n = e.target,
                                    r = n.selectionStart,
                                    a = n.selectionEnd,
                                    i = n.value,
                                    s = r !== a,
                                    o = new RegExp(/\D/),
                                    c = u && r ? r - 1 : r || 0;
                                if (s) return;
                                let l = c;
                                const d = o.test(i[c]);
                                if (t && d) for (; o.test(i[l]) && l < i.length; ) l++;
                                if (u && d) for (; o.test(i[l]) && l > 0; ) l--;
                                if (l !== c || (u && d))
                                    return e.preventDefault(), (l = l < 0 ? 0 : l), void this.setCursorPosition(l, l);
                                ((u && 1 === r && 1 === i.length) || t) &&
                                    (e.preventDefault(), this.updateInput(e.keyCode));
                            }),
                            (this.handleClickOutside = (e) => {
                                const u = document.activeElement;
                                this.state.isFocused &&
                                    u !== this.input.current &&
                                    null !== this.numericalStepper.current &&
                                    !this.numericalStepper.current.contains(e.target) &&
                                    this.setState({ isFocused: !1 });
                            }),
                            (this.handleBlur = () => {
                                if (this.props.isDisabled) return;
                                const e = this.getValidValue(this.state.value);
                                e !== this.state.value && this.changeValue(e);
                            }),
                            (this.handleWheel = (e) => {
                                if (this.props.isDisabled || !this.state.isFocused) return;
                                e.preventDefault();
                                e.deltaY < 0 ? this.decrement() : this.increment();
                            }),
                            (this.handleMouseUp = () => {
                                this.stop(), this.setState({ activeIncrement: !1, activeDecrement: !1 });
                            }),
                            (this.handleMouseLeave = () => {
                                this.stop();
                            }),
                            (this.incrementHandleMouseEnter = (e) => {
                                this.state.activeIncrement && this.incrementHandleMouseDown(e, !0),
                                    this.buttonIncrementIsDisabled || this.playHoverSound();
                            }),
                            (this.decrementHandleMouseEnter = (e) => {
                                this.state.activeDecrement && this.decrementHandleMouseDown(e, !0),
                                    this.buttonDecrementIsDisabled || this.playHoverSound();
                            }),
                            (this.handleKeyDown = (e) => {
                                if (!this.props.isDisabled) {
                                    switch (
                                        (e.keyCode in q.n &&
                                            e.keyCode !== q.n.BACKSPACE &&
                                            e.keyCode !== q.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case q.n.ARROW_UP:
                                        case q.n.NUM_PLUS:
                                        case q.n.PLUS:
                                            this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment();
                                            break;
                                        case q.n.ARROW_DOWN:
                                        case q.n.NUM_MINUS:
                                        case q.n.MINUS:
                                            this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement();
                                            break;
                                        case q.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case q.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case q.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                this.changeValue(this.props.maximum), this.setCursorPosition(0, e);
                                            }
                                            break;
                                        case q.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case q.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case q.n.BACKSPACE:
                                        case q.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case q.n.ARROW_UP:
                                        case q.n.NUM_PLUS:
                                        case q.n.PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case q.n.ARROW_DOWN:
                                        case q.n.NUM_MINUS:
                                        case q.n.MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in Rt || e.preventDefault();
                            }),
                            (this.increment = () => {
                                const e = this.props.onIncrement ? this.props.onIncrement() : this.props.stepSize,
                                    u = Math.min(this.getValidValue(this.state.value) + e, this.props.maximum);
                                this.changeValue(u);
                            }),
                            (this.decrement = () => {
                                const e = this.props.onDecrement ? this.props.onDecrement() : this.props.stepSize,
                                    u = Math.max(this.getValidValue(this.state.value) - e, this.props.minimum);
                                this.changeValue(u);
                            }),
                            (this.incrementHandleMouseDown = (e, u = !1) => {
                                this.buttonIncrementIsDisabled ||
                                    (e.persist(),
                                    e.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value < this.props.maximum &&
                                        (!u && this.playClickSound(),
                                        (0 === e.button || u) &&
                                            (this.increment(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.incrementHandleMouseDown(e, !0);
                                                },
                                                u ? 50 : 300,
                                            )),
                                            this.setState({ activeIncrement: !0 }))));
                            }),
                            (this.decrementHandleMouseDown = (e, u = !1) => {
                                this.buttonDecrementIsDisabled ||
                                    (e.persist(),
                                    e.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value > this.props.minimum &&
                                        (!u && this.playClickSound(),
                                        (0 === e.button || u) &&
                                            (this.decrement(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.decrementHandleMouseDown(e, !0);
                                                },
                                                u ? 50 : 300,
                                            )),
                                            this.setState({ activeDecrement: !0 }))));
                            }),
                            (this.playHoverSound = () => {
                                this.props.isDisabled || ne('highlight');
                            }),
                            (this.playClickSound = () => {
                                this.props.isDisabled || ne('yes');
                            }),
                            (this.stop = () => {
                                this.timer && clearTimeout(this.timer), (this.timer = null);
                            });
                    }
                    componentDidUpdate(e, u) {
                        const t = this.state,
                            n = t.value,
                            r = t.isFocused;
                        if (n !== u.value && r) {
                            const e = this.formattedValue.length,
                                u = this.input.current && this.input.current.selectionStart,
                                t = this.input.current && this.input.current.selectionEnd,
                                n = u === t ? e : u || 0;
                            0 === u && t === e
                                ? this.input.current && this.input.current.setSelectionRange(e, e)
                                : this.input.current && this.input.current.setSelectionRange(n, e);
                        }
                    }
                    componentWillReceiveProps({ value: e, isFocused: u }) {
                        this.setState({ value: e }),
                            u !== this.props.isFocused &&
                                (this.setState({ isFocused: u }),
                                u
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput());
                    }
                    get formattedValue() {
                        return this.props.currencyType
                            ? V.Z5.getNumberFormat(this.state.value, V.B3.GOLD)
                            : this.state.value.toString();
                    }
                    get buttonIncrementIsDisabled() {
                        return this.state.value >= this.props.maximum || this.props.isDisabled;
                    }
                    get buttonDecrementIsDisabled() {
                        return this.state.value <= this.props.minimum || this.props.isDisabled;
                    }
                    render() {
                        const e = this.props,
                            u = e.isDisabled,
                            t = e.size,
                            n = e.currencyType,
                            r = B()(
                                Ht.base,
                                Ht[`base__${t}`],
                                n && Ht[`base__withCurrency-${t}`],
                                u && Ht.base__isDisabled,
                                this.state.isFocused && Ht.base__isFocus,
                            ),
                            a = B()(
                                Ht.buttonIncrement,
                                Ht[`buttonIncrement__${t}`],
                                this.buttonIncrementIsDisabled && Ht.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    Ht[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            s = B()(
                                Ht.buttonDecrement,
                                Ht[`buttonDecrement__${t}`],
                                this.buttonDecrementIsDisabled && Ht.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    Ht[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            o = B()(
                                Ht.input,
                                u && Ht.input__disabled,
                                n && Ht.input__withCurrency,
                                n && Ht[`input__${n}-${t}`],
                                n && Ht[`input__${n}`],
                                !1 === this.props.isValid && Ht.input__error,
                                n && u && Ht[`input__${n}-disabled`],
                            ),
                            c = B()(Ht.currencyIcon, n && Ht[`currencyIcon__${n}-${t}`]),
                            l = B()(Ht.currency, n && Ht[`currency__${n}`], n && Ht[`currency__${n}-${t}`]);
                        return i().createElement(
                            'div',
                            {
                                className: r,
                                ref: this.numericalStepper,
                                style: ((d = this.props.width), d ? { width: `${d}rem` } : {}),
                            },
                            i().createElement(
                                'div',
                                { className: Ht.inputContainer },
                                n &&
                                    i().createElement(
                                        'div',
                                        { className: l },
                                        i().createElement('span', { className: Ht.dummyValue }, this.formattedValue),
                                        i().createElement('span', { className: c }),
                                    ),
                                i().createElement('input', {
                                    ref: this.input,
                                    className: o,
                                    type: 'text',
                                    value: this.formattedValue,
                                    disabled: u,
                                    onWheel: this.handleWheel,
                                    onChange: this.handleChange,
                                    onKeyPress: this.allowOnlyNumbers,
                                    onKeyDown: this.handleKeyDown,
                                    onKeyUp: this.handleKeyUp,
                                    onBlur: this.handleBlur,
                                    onFocus: this.setFocusOnInput,
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: Ht.control },
                                i().createElement('div', {
                                    className: a,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                i().createElement('div', {
                                    className: s,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.decrementHandleMouseEnter,
                                    onMouseDown: this.decrementHandleMouseDown,
                                }),
                            ),
                        );
                        var d;
                    }
                }
                Vt.defaultProps = {
                    value: 1,
                    stepSize: 1,
                    minimum: 0,
                    maximum: 0,
                    size: 'medium',
                    isFocused: !0,
                    isDisabled: !1,
                    onChange: () => null,
                    onKeyDown: () => null,
                };
                const Wt = 'CurrencyStepper_base_8f',
                    Ut = 'CurrencyStepper_label_9b',
                    zt = 'CurrencyStepper_limit_7c',
                    $t = 'CurrencyStepper_limitIcon_bf',
                    Gt = 'CurrencyStepper_limit__exceeded_5d',
                    Xt = 'CurrencyStepper_limit__right_08',
                    jt = 'CurrencyStepper_limitWrapper__enter_90',
                    Kt = 'CurrencyStepper_limitWrapper__exit_15',
                    qt = 'CurrencyStepper_restriction_67',
                    Yt = 'CurrencyStepper_restrictionIcon_6f',
                    Zt = 'CurrencyStepper_restrictionIconGlow_02',
                    Qt = ['label', 'limit', 'limitPosition', 'onLimitClick', 'onChange'];
                function Jt() {
                    return (
                        (Jt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Jt.apply(this, arguments)
                    );
                }
                const en = R.strings.personal_exchange_rates.common,
                    un = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    tn = { enter: jt, exit: Kt },
                    nn = (e) => {
                        let u = e.label,
                            t = e.limit,
                            n = e.limitPosition,
                            r = e.onLimitClick,
                            s = e.onChange,
                            o = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Qt);
                        const c = t && o.value > t,
                            l = (0, a.useState)(!1)[1],
                            d = It(
                                (e) => {
                                    s(e), K(() => l((e) => !e));
                                },
                                [s],
                                1e3,
                            );
                        return i().createElement(
                            'div',
                            { className: Wt },
                            u && i().createElement('div', { className: Ut }, u),
                            i().createElement(Vt, Jt({ size: 'large', width: 210, onChange: d }, o)),
                            t &&
                                !r &&
                                i().createElement(
                                    ue.Z,
                                    { component: i().Fragment },
                                    i().createElement(
                                        te.Z,
                                        { key: String(c), timeout: 250, classNames: tn },
                                        i().createElement(
                                            pe,
                                            { tooltipArgs: un, className: B()(zt, 'right' === n && Xt, c && Gt) },
                                            i().createElement(
                                                i().Fragment,
                                                null,
                                                c
                                                    ? i().createElement(Tt, { text: en.limitExceeded() })
                                                    : i().createElement(Tt, {
                                                          text: en.limit(),
                                                          binding: { value: Pt(t) },
                                                      }),
                                                i().createElement('div', { className: $t }),
                                            ),
                                        ),
                                    ),
                                ),
                            r &&
                                i().createElement(
                                    'div',
                                    { className: B()(zt, 'right' === n && Xt) },
                                    i().createElement(se, {
                                        caption: en.limitRestrictions(),
                                        type: 'close',
                                        side: 'left',
                                        onClick: r,
                                        classNames: { base: qt, icon: Yt, glow: Zt },
                                    }),
                                ),
                        );
                    },
                    rn = 'Inputs_base_3a',
                    an = R.strings.personal_exchange_rates.experienceExchange,
                    sn = (0, ee.Pi)(() => {
                        const e = yt(),
                            u = e.model,
                            t = e.controls,
                            n = 0 === u.computes.gold.maximum();
                        return i().createElement(
                            'div',
                            { className: rn, key: String(n) },
                            i().createElement(nn, {
                                currencyType: $.freeXP,
                                label: an.received(),
                                maximum: u.computes.xp.maximum(),
                                stepSize: 1,
                                onChange: t.setFreeXp,
                                value: u.freeXpFromExchange.get(),
                                onValidValue: (e) => e,
                                onIncrement: () => (t.setGold(u.goldToExchange.get() + 1), 0),
                                onDecrement: () => (t.setGold(u.goldToExchange.get() - 1), 0),
                                isDisabled: n,
                                isFocused: !0,
                            }),
                            i().createElement(nn, {
                                currencyType: $.gold,
                                label: an.paid(),
                                maximum: u.computes.gold.maximum(),
                                stepSize: 1,
                                onChange: t.setGold,
                                value: u.goldToExchange.get(),
                                onValidValue: (e) => e,
                                isValid: u.computes.afterExchange()[1].value >= 0,
                                onIncrement: () => (t.setGold(u.goldToExchange.get() + 1), 0),
                                onDecrement: () => (t.setGold(u.goldToExchange.get() - 1), 0),
                                isDisabled: n,
                                isFocused: !1,
                            }),
                        );
                    }),
                    on = (e, u, t) => (t < e ? e : t > u ? u : t),
                    cn = [];
                function ln(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), cn)
                    );
                }
                function dn(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const i = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, i),
                        r,
                    ];
                }
                function mn(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return _n(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return _n(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function _n(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const En = () => {
                    const e = (0, a.useMemo)(() => ({}), []),
                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                        t = (e, t) => {
                            u(e).set(t, t);
                        },
                        n = (e, t) => {
                            u(e).delete(t);
                        },
                        r = (e, ...t) => {
                            for (var n, r = mn(u(e).values()); !(n = r()).done; ) {
                                (0, n.value)(...t);
                            }
                        };
                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                };
                var An = t(30);
                let Fn;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Fn || (Fn = {}));
                const Dn = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    hn = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const s = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : on(r, a, t);
                        };
                        return (c = {}) => {
                            const l = c.settings,
                                d = void 0 === l ? Dn : l,
                                m = (0, a.useRef)(null),
                                _ = (0, a.useRef)(null),
                                E = En(),
                                A = (function (e, u, t) {
                                    const n = (0, a.useMemo)(() => kt(t, e), u);
                                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                                })(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, An.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), E.trigger('change', e), i && A());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                D = F[0],
                                h = F[1],
                                g = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            a = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return s(e, u * t + a + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            h.start({
                                                scrollPosition: s(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: d.animationConfig,
                                                from: { scrollPosition: s(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [h, d.animationConfig, D.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = _.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, d.step),
                                            a = g(u, e, n);
                                        p(a);
                                    },
                                    [p, g, d.step],
                                ),
                                B = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(n(e)),
                                            m.current && E.trigger('mouseWheel', e, D.scrollPosition, u(m.current));
                                    },
                                    [D.scrollPosition, C, E],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        K(() => {
                                            const e = m.current;
                                            e &&
                                                (p(s(e, D.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [p, D.scrollPosition.goal],
                                ),
                                v = ln(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = s(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && p(u, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? u(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: B,
                                    applyScroll: p,
                                    applyStepTo: C,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: h,
                                    animationScroll: D,
                                    recalculateContent: v,
                                    events: { on: E.on, off: E.off },
                                }),
                                [D.scrollPosition, p, C, E.off, E.on, v, B, h, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    gn = hn({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Fn.Next : Fn.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    pn = 'HorizontalBar_base_49',
                    Cn = 'HorizontalBar_base__nonActive_82',
                    Bn = 'HorizontalBar_leftButton_5f',
                    fn = 'HorizontalBar_rightButton_03',
                    vn = 'HorizontalBar_track_0d',
                    bn = 'HorizontalBar_thumb_fd',
                    yn = 'HorizontalBar_rail_32',
                    xn = 'disable',
                    wn = { pending: !1, offset: 0 },
                    Sn = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Nn = () => {},
                    Mn = (e, u) => Math.max(20, e.offsetWidth * u),
                    Ln = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Sn, onDrag: n = Nn }) => {
                        const r = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, a.useState)(wn),
                            E = _[0],
                            A = _[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            D = () => {
                                const u = l.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    o = on(0, 1, a / (r - n)),
                                    m = (u.offsetWidth - Mn(u, i)) * o;
                                (t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && c.current && l.current && d.current) {
                                            if (0 === e)
                                                return s.current.classList.add(xn), void c.current.classList.remove(xn);
                                            if (
                                                ((u = l.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(xn), void c.current.classList.add(xn);
                                            var u, t;
                                            s.current.classList.remove(xn), c.current.classList.remove(xn);
                                        }
                                    })(m);
                            },
                            h = ln(() => {
                                (() => {
                                    const u = d.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const i = Math.min(1, n / a);
                                    (u.style.width = `${Mn(t, i)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === i ? r.current.classList.add(Cn) : r.current.classList.remove(Cn));
                                })(),
                                    D();
                            });
                        (0, a.useEffect)(() => K(h)),
                            (0, a.useEffect)(
                                () =>
                                    K(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = Nn;
                                        const n = () => {
                                            t(), (t = K(h));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', h),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!E.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!a || !i) return;
                                        const s = l.current,
                                            o = d.current;
                                        if (!s || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const c = u.clientX - E.offset - s.getBoundingClientRect().x,
                                            m = (c / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: c, contentOffset: m });
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        u(), F(wn);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, E.offset, E.pending, n, F]);
                        const g = dn((u) => e.applyStepTo(u), m, [e]),
                            p = g[0],
                            C = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const f = (e) => {
                            e.target.classList.contains(xn) || ne('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: B()(pn, u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: B()(Bn, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xn) || 0 !== e.button || (ne('play'), p(Fn.Next));
                                },
                                onMouseUp: C,
                                ref: s,
                                onMouseEnter: f,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: B()(vn, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((ne('play'), u.target === n))
                                                F({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = d.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Fn.Prev : Fn.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                i().createElement('div', { ref: d, className: B()(bn, u.thumb) }),
                                i().createElement('div', { className: B()(yn, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: B()(fn, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xn) || 0 !== e.button || (ne('play'), p(Fn.Prev));
                                },
                                onMouseUp: C,
                                ref: c,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    On = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Tn = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: s,
                        scrollClassName: o,
                        getStepByRailClick: c,
                        onDrag: l,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: B()(On.base, e.base) });
                            }, [n]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: B()(On.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: B()(On.defaultScrollArea, r) },
                                i().createElement(kn, { className: o, api: m, classNames: s }, e),
                            ),
                            i().createElement(Ln, { getStepByRailClick: c, api: u, onDrag: l, classNames: d }),
                        );
                    },
                    kn = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => K(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: B()(On.base, u) },
                            i().createElement(
                                'div',
                                {
                                    className: B()(On.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: B()(On.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (kn.Bar = Ln), (kn.Default = Tn);
                const In = hn({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Fn.Next : Fn.Prev),
                    }),
                    Pn = 'VerticalBar_base_f3',
                    Rn = 'VerticalBar_base__nonActive_42',
                    Hn = 'VerticalBar_topButton_d7',
                    Vn = 'VerticalBar_bottomButton_06',
                    Wn = 'VerticalBar_track_df',
                    Un = 'VerticalBar_thumb_32',
                    zn = 'VerticalBar_rail_43',
                    $n = 'disable',
                    Gn = () => {},
                    Xn = { pending: !1, offset: 0 },
                    jn = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Kn = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    qn = (e, u) => Math.max(20, e.offsetHeight * u),
                    Yn = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = jn, onDrag: n = Gn }) => {
                        const r = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, a.useState)(Xn),
                            E = _[0],
                            A = _[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            D = ln(() => {
                                const u = d.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const i = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${qn(t, i)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 === i ? r.current.classList.add(Rn) : r.current.classList.remove(Rn)),
                                    i
                                );
                            }),
                            h = ln(() => {
                                const u = l.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    o = on(0, 1, a / (r - n)),
                                    m = (u.offsetHeight - qn(u, i)) * o;
                                (t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && c.current && l.current && d.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add($n), void c.current.classList.remove($n);
                                            if (
                                                ((u = l.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove($n), void c.current.classList.add($n);
                                            var u, t;
                                            s.current.classList.remove($n), c.current.classList.remove($n);
                                        }
                                    })(m);
                            }),
                            g = ln(() => {
                                Kn(e, () => {
                                    D(), h();
                                });
                            });
                        (0, a.useEffect)(() => K(g)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    Kn(e, () => {
                                        h();
                                    });
                                };
                                let t = Gn;
                                const n = () => {
                                    t(), (t = K(g));
                                };
                                return (
                                    e.events.on('recalculateContent', g),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', g),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!E.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        F(Xn);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        Kn(e, (t) => {
                                            const r = l.current,
                                                a = d.current,
                                                i = e.getContainerSize();
                                            if (!r || !a || !i) return;
                                            const s = u.screenY - E.offset - r.getBoundingClientRect().y,
                                                o = (s / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, E.offset, E.pending, n, F]);
                        const p = dn((u) => e.applyStepTo(u), m, [e]),
                            C = p[0],
                            f = p[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const v = (e) => {
                            e.target.classList.contains($n) || ne('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: B()(Pn, u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: B()(Hn, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains($n) || 0 !== e.button || (ne('play'), C(Fn.Next));
                                },
                                ref: s,
                                onMouseEnter: v,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: B()(Wn, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((ne('play'), u.target === n))
                                                F({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    d.current &&
                                                        Kn(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Fn.Prev : Fn.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                i().createElement('div', { ref: d, className: B()(Un, u.thumb) }),
                                i().createElement('div', { className: B()(zn, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: B()(Vn, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains($n) || 0 !== e.button || (ne('play'), C(Fn.Prev));
                                },
                                onMouseUp: f,
                                ref: c,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Zn = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Qn = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: s,
                        scrollClassNames: o,
                        getStepByRailClick: c,
                        onDrag: l,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: B()(Zn.base, e.base) });
                            }, [n]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: B()(Zn.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: B()(Zn.area, r) },
                                i().createElement(Jn, { className: s, classNames: o, api: m }, e),
                            ),
                            i().createElement(Yn, { getStepByRailClick: c, api: u, onDrag: l, classNames: d }),
                        );
                    },
                    Jn = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => K(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: B()(Zn.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: B()(Zn.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Jn.Default = Qn;
                const er = { Vertical: r, Horizontal: n },
                    ur = ({
                        startRowIndex: e,
                        cellHeight: u,
                        paddingTop: t,
                        paddingBottom: n,
                        amount: r,
                        itemsAmountPerRow: a,
                        visibleRowsAmount: i,
                    }) => {
                        const s = Math.ceil(r / a) * u,
                            o = i * u,
                            c = e * u;
                        return { paddingTop: `${c + t}rem`, paddingBottom: `${Math.max(s - c - o, 0) + n}rem` };
                    },
                    tr = (e) => {
                        const u = e.className,
                            t = e.children,
                            n = e.itemsAmountPerRow,
                            r = e.visibleRowsAmount,
                            a = e.startRowIndex,
                            s = e.amount,
                            o = a * n,
                            c = Math.min(r * n, s - o);
                        return i().createElement(
                            'div',
                            { className: u, style: ur(e) },
                            ((e, u) => {
                                const t = [];
                                for (let n = 0; n < e; n++) t.push(u(n));
                                return t;
                            })(c, (e) => t(o + e)),
                        );
                    },
                    nr = 'VirtualGrid_base_52',
                    rr = ({
                        amount: e,
                        cellWidth: u,
                        cellHeight: t,
                        children: n,
                        api: r,
                        classNames: s,
                        preloadedRows: c = 1,
                        paddingTop: l = 0,
                        paddingBottom: d = 0,
                    }) => {
                        const m = r.scrollApi,
                            _ = (0, a.useRef)(0),
                            E = (0, a.useState)(0),
                            A = E[0],
                            F = E[1],
                            D = (0, a.useState)(null),
                            h = D[0],
                            g = D[1],
                            p = (0, a.useState)(null),
                            C = p[0],
                            f = p[1];
                        return (
                            (0, a.useEffect)(() => {
                                const u = (u) => {
                                    if (!h) return;
                                    const n = Math.floor((o.O.view.pxToRem(u.value.scrollPosition) - l) / t + 1),
                                        a = Math.ceil(e / h),
                                        i = Math.max(0, Math.min(n - c, a));
                                    F(i), r.startRowIndexChanged(i);
                                };
                                return m.events.on('change', u), () => m.events.off('change', u);
                            }, [r, m, t, l, h, e, c]),
                            (0, a.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                n = m.contentRef.current.getBoundingClientRect(),
                                                a =
                                                    o.O.view.pxToRem(n.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                i = Math.floor(a / u),
                                                s = Math.ceil(o.O.view.pxToRem(n.height) / t) + 2 * c;
                                            (_.current = i), g(i), f(s), r.layoutCalculated(i, s);
                                        }
                                    },
                                    n = () => {
                                        const u = _.current;
                                        e(), r.scrollToIndex(A * u);
                                    };
                                return (
                                    m.events.on('recalculateContent', e),
                                    m.events.on('resizeHandled', n),
                                    () => {
                                        m.events.off('recalculateContent', e), m.events.off('resizeHandled', n);
                                    }
                                );
                            }, [r, m, t, u, c, A]),
                            (0, a.useEffect)(() => {
                                const e = (e, u = !0) => {
                                    h && m.applyScroll(Math.floor(e / h) * t + l, { immediate: u });
                                };
                                return r.events.on('scrollToIndex', e), () => r.events.off('scrollToIndex', e);
                            }, [r, t, h, l, m]),
                            i().createElement(
                                er.Vertical.Default,
                                {
                                    api: m,
                                    className: null == s ? void 0 : s.scroll,
                                    areaClassName: null == s ? void 0 : s.areaClassName,
                                    scrollClassName: null == s ? void 0 : s.scrollClassName,
                                    scrollClassNames: {
                                        content: null == s ? void 0 : s.content,
                                        wrapper: null == s ? void 0 : s.wrapper,
                                    },
                                },
                                null !== h &&
                                    null !== C &&
                                    i().createElement(
                                        tr,
                                        {
                                            className: B()(nr, null == s ? void 0 : s.inner),
                                            paddingBottom: d,
                                            paddingTop: l,
                                            amount: e,
                                            itemsAmountPerRow: h,
                                            visibleRowsAmount: C,
                                            startRowIndex: A,
                                            cellHeight: t,
                                        },
                                        n,
                                    ),
                            )
                        );
                    },
                    ar = 'Checkbox_base_91',
                    ir = 'Checkbox_base__disabled_ae',
                    sr = 'Checkbox_input_c5',
                    or = 'Checkbox_checkmark_dc',
                    cr = 'Checkbox_base__checked_39',
                    lr = ({ value: e = !1, onChange: u, disabled: t, clickSound: n }) =>
                        i().createElement(
                            'div',
                            {
                                className: B()(ar, e && cr, t && ir),
                                onClick: u,
                                onMouseEnter: () => {
                                    ne('highlight');
                                },
                                onMouseDown: () => {
                                    n && ne('play');
                                },
                            },
                            i().createElement('div', { className: e ? or : sr }),
                        ),
                    dr = {
                        base: 'SortToggleButton_base_df',
                        base__disabled: 'SortToggleButton_base__disabled_b6',
                        background: 'SortToggleButton_background_ce',
                        background__selected: 'SortToggleButton_background__selected_d0',
                        base__selected: 'SortToggleButton_base__selected_00',
                        background__hover: 'SortToggleButton_background__hover_58',
                        icon: 'SortToggleButton_icon_02',
                        icon__check: 'SortToggleButton_icon__check_36',
                        icon__nation: 'SortToggleButton_icon__nation_ea',
                        icon__type: 'SortToggleButton_icon__type_26',
                        icon__tier: 'SortToggleButton_icon__tier_bb',
                        icon__name: 'SortToggleButton_icon__name_f6',
                        icon__modernization: 'SortToggleButton_icon__modernization_53',
                        icon__combatXp: 'SortToggleButton_icon__combatXp_36',
                    },
                    mr = (0, ee.Pi)(({ sortField: e }) => {
                        var u;
                        const t = yt(),
                            n = t.model,
                            r = t.controls,
                            a = 0 === n.vehicles.get().length,
                            s = (null == (u = n.sortSettings.get()) ? void 0 : u.field) === e && !a;
                        return i().createElement(
                            'div',
                            {
                                className: B()(dr.base, s && dr.base__selected, a && dr.base__disabled),
                                onClick: () => {
                                    ne('yes'), r.toggleSort(e);
                                },
                                onMouseEnter: () => {
                                    ne('highlight');
                                },
                                onMouseDown: (e) => {
                                    (1 !== e.button && 2 !== e.button) || ne('yes');
                                },
                            },
                            !a &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', {
                                        className: B()(dr.background, dr.background__selected),
                                    }),
                                    i().createElement('div', { className: B()(dr.background, dr.background__hover) }),
                                ),
                            i().createElement('div', { className: B()(dr.icon, dr[`icon__${e}`]) }),
                        );
                    }),
                    _r = 'ControlsPanel_base_a4',
                    Er = 'ControlsPanel_separator_6f',
                    Ar = 'ControlsPanel_checkboxContainer_b3',
                    Fr = 'ControlsPanel_checkboxWrapper_42',
                    Dr = (0, ee.Pi)(() => {
                        const e = yt(),
                            u = e.model,
                            t = e.controls,
                            n = (0, a.useCallback)(() => t.toggleAllVehicleSelect(), [t]);
                        return i().createElement(
                            'div',
                            { className: _r },
                            i().createElement(
                                'div',
                                { className: Ar },
                                i().createElement(
                                    he,
                                    { body: R.strings.personal_exchange_rates.experienceExchange.sortBy.vehicle() },
                                    i().createElement('div', null, i().createElement(mr, { sortField: dt })),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Fr },
                                    i().createElement(lr, {
                                        onChange: n,
                                        value: u.computes.vehicle.allSelected(),
                                        disabled: !u.vehicles.get().length,
                                        clickSound: !0,
                                    }),
                                ),
                            ),
                            i().createElement('div', { className: Er }),
                            i().createElement(
                                he,
                                { body: R.strings.personal_exchange_rates.experienceExchange.sortBy.nation() },
                                i().createElement('div', null, i().createElement(mr, { sortField: mt })),
                            ),
                            i().createElement('div', { className: Er }),
                            i().createElement(
                                he,
                                { body: R.strings.personal_exchange_rates.experienceExchange.sortBy.type() },
                                i().createElement('div', null, i().createElement(mr, { sortField: _t })),
                            ),
                            i().createElement('div', { className: Er }),
                            i().createElement(
                                he,
                                { body: R.strings.personal_exchange_rates.experienceExchange.sortBy.level() },
                                i().createElement('div', null, i().createElement(mr, { sortField: Et })),
                            ),
                            i().createElement('div', { className: Er }),
                            i().createElement(
                                he,
                                { body: R.strings.personal_exchange_rates.experienceExchange.sortBy.name() },
                                i().createElement('div', null, i().createElement(mr, { sortField: At })),
                            ),
                            i().createElement('div', { className: Er }),
                            i().createElement(
                                he,
                                {
                                    body: R.strings.personal_exchange_rates.experienceExchange.sortBy.modernizationLevel(),
                                },
                                i().createElement('div', null, i().createElement(mr, { sortField: Ft })),
                            ),
                            i().createElement('div', { className: Er }),
                            i().createElement(
                                he,
                                { body: R.strings.personal_exchange_rates.experienceExchange.sortBy.xp() },
                                i().createElement('div', null, i().createElement(mr, { sortField: Dt })),
                            ),
                        );
                    }),
                    hr = 'VehicleItemWrapper_base_7e',
                    gr = 'VehicleItemWrapper_base__withContent_aa',
                    pr = 'VehicleItemWrapper_background_70',
                    Cr = ({ children: e, className: u }) =>
                        i().createElement(
                            'div',
                            { className: B()(hr, e && gr, u) },
                            i().createElement('div', { className: pr }),
                            e,
                        ),
                    Br = 'VehicleItem_base_07',
                    fr = 'VehicleItem_checkboxContainer_50',
                    vr = 'VehicleItem_nationContainer_ba',
                    br = 'VehicleItem_base__selected_bb',
                    yr = 'VehicleItem_nation_d2',
                    xr = 'VehicleItem_typeContainer_4e',
                    wr = 'VehicleItem_type_2f',
                    Sr = 'VehicleItem_tierContainer_df',
                    Nr = 'VehicleItem_tier_36',
                    Mr = 'VehicleItem_vehicleInfoContainer_ce',
                    Lr = 'VehicleItem_vehicleIcon_0e',
                    Or = 'VehicleItem_vehicleName_15',
                    Tr = 'VehicleItem_modernizationContainer_0b',
                    kr = 'VehicleItem_modernization_61',
                    Ir = 'VehicleItem_modernizationBadge_97',
                    Pr = 'VehicleItem_combatXp_3e',
                    Rr = (e) => ({ backgroundImage: `url(R.images.gui.maps.icons.${e})` }),
                    Hr = (0, ee.Pi)(({ index: e, small: u }) => {
                        const t = yt(),
                            n = t.model,
                            r = t.controls,
                            a = n.computes.vehicle.sorted()[e],
                            s = n.computes.vehicle.selected(a.vehicleCD);
                        return i().createElement(
                            Cr,
                            null,
                            i().createElement(
                                'div',
                                {
                                    className: B()(Br, s && br),
                                    onClick: () => {
                                        ne('play'), r.toggleVehicleSelect(a);
                                    },
                                    onMouseEnter: () => {
                                        ne('highlight');
                                    },
                                },
                                i().createElement('div', { className: fr }, i().createElement(lr, { value: s })),
                                i().createElement(
                                    'div',
                                    { className: vr },
                                    i().createElement('div', {
                                        className: yr,
                                        style: Rr(`filters.nations.${a.nation}`),
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: xr },
                                    i().createElement('div', {
                                        className: wr,
                                        style: Rr(`vehicleTypes.c_44x44.${((o = a.type), o.replace('-', '_'))}_elite`),
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Sr },
                                    i().createElement('div', {
                                        className: Nr,
                                        style: Rr(`personalExchangeRates.expExchange.item.lvl${a.tier}`),
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Mr },
                                    i().createElement('div', {
                                        className: Lr,
                                        style: Rr(`vehicle${u ? '.small' : ''}.${a.nation}_${a.techName}`),
                                    }),
                                    i().createElement('div', { className: Or }, a.name),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Tr },
                                    i().createElement(
                                        'div',
                                        {
                                            className: kr,
                                            style:
                                                a.levelOfFieldModernization || a.tier >= 6
                                                    ? Rr(
                                                          `personalExchangeRates.expExchange.item.mod${a.levelOfFieldModernization || (a.tier >= 6 ? 'Available' : '')}`,
                                                      )
                                                    : {},
                                        },
                                        a.isFieldModernizationComplited && i().createElement('div', { className: Ir }),
                                    ),
                                ),
                                i().createElement('div', { className: Pr }, Pt(a.amountOfCombatXp)),
                            ),
                        );
                        var o;
                    }),
                    Vr = 'VehiclesList_base_7a',
                    Wr = 'VehiclesList_lipTop_d4',
                    Ur = 'VehiclesList_lipBottom_f9',
                    zr = 'VehiclesList_itemsContainer_b5',
                    $r = 'VehiclesList_scroll_44',
                    Gr = { [x.ExtraSmall]: 5, [x.Small]: 5, [x.Medium]: 5, [x.Large]: 8, [x.ExtraLarge]: 8 },
                    Xr = 39,
                    jr = 62,
                    Kr = (0, ee.Pi)(() => {
                        const e = yt().model,
                            u = (() => {
                                const e = er.Vertical.useVerticalScrollApi(),
                                    u = En(),
                                    t = (0, a.useCallback)((e, t = !0) => u.trigger('scrollToIndex', e, t), [u]),
                                    n = (0, a.useCallback)((e, t) => u.trigger('layoutCalculated', e, t), [u]),
                                    r = (0, a.useCallback)((e) => u.trigger('startRowIndexChanged', e), [u]);
                                return (0, a.useMemo)(
                                    () => ({
                                        scrollToIndex: t,
                                        layoutCalculated: n,
                                        startRowIndexChanged: r,
                                        scrollApi: e,
                                        events: { off: u.off, on: u.on },
                                    }),
                                    [t, n, r, e, u.off, u.on],
                                );
                            })(),
                            t = w().mediaHeight,
                            n = e.computes.vehicle.sorted().length,
                            r = t < x.Medium;
                        return i().createElement(
                            'div',
                            { className: Vr },
                            i().createElement(Dr, null),
                            i().createElement(
                                'div',
                                { className: zr },
                                i().createElement('div', { className: Wr }),
                                i().createElement(
                                    rr,
                                    {
                                        amount: Math.max(n, Gr[t]),
                                        cellWidth: 500,
                                        cellHeight: r ? Xr : jr,
                                        paddingTop: 5,
                                        classNames: { scroll: $r },
                                        api: u,
                                    },
                                    (e) =>
                                        e < n
                                            ? i().createElement(Hr, { key: e, index: e, small: r })
                                            : i().createElement(Cr, { key: e }),
                                ),
                                i().createElement('div', { className: Ur }),
                            ),
                        );
                    }),
                    qr = (0, ee.Pi)(() => {
                        const e = yt(),
                            u = e.model,
                            t = e.controls;
                        return (
                            j(
                                () => (
                                    K(() => {
                                        J(!1),
                                            K(() => {
                                                J(!0);
                                            });
                                    }),
                                    document.body.addEventListener('keydown', Q),
                                    () => {
                                        document.body.removeEventListener('keydown', Q);
                                    }
                                ),
                            ),
                            j(() => {
                                t.toggleAllVehicleSelect();
                            }),
                            i().createElement(
                                ot,
                                { onClose: t.close },
                                i().createElement(
                                    'div',
                                    { className: xt },
                                    i().createElement(Bu, {
                                        primaryCurrency: $.freeXP,
                                        rate: u.exchangeRate.get(),
                                        discount: u.discount.get(),
                                        className: wt,
                                        additionalInfo: i().createElement(
                                            'div',
                                            { className: St },
                                            i().createElement(
                                                'span',
                                                { className: Nt },
                                                R.strings.personal_exchange_rates.experienceExchange.available(),
                                            ),
                                            i().createElement(X, {
                                                size: 'small',
                                                type: $.freeXP,
                                                value: u.computes.xp.allAvailable(),
                                            }),
                                        ),
                                        amountOfPersonalDiscounts: u.amountOfPersonalDiscounts.get(),
                                        exceeded: u.computes.exceeded(),
                                    }),
                                    i().createElement('div', { className: Mt }, i().createElement(Kr, null)),
                                    i().createElement(sn, null),
                                    i().createElement(Le, {
                                        className: Lt,
                                        exceeded: u.computes.exceeded(),
                                        amountOfPersonalDiscounts: u.amountOfPersonalDiscounts.get(),
                                        onClick: t.openAllDiscounts,
                                    }),
                                    i().createElement(Pu, {
                                        onClose: t.close,
                                        onExchange: t.exchange,
                                        disabled: !u.goldToExchange.get(),
                                        currenciesAfterExchange: u.computes.afterExchange(),
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        i().createElement(I, null, i().createElement(bt, null, i().createElement(qr, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], a = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 126),
        (() => {
            var e = { 126: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, i, s] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        (r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [674], () => __webpack_require__(176));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
