(() => {
    var __webpack_modules__ = {
            768: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => ue });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => E, off: () => d, on: () => _, onResize: () => c, onScaleUpdated: () => l });
                var i = {};
                t.r(i),
                    t.d(i, {
                        events: () => n,
                        getMouseGlobalPosition: () => D,
                        getSize: () => F,
                        graphicsQuality: () => C,
                        playSound: () => A,
                        setRTPC: () => p,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => g, getTextureUrl: () => v });
                var s = {};
                function a(e) {
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
                t.r(s),
                    t.d(s, {
                        addModelObserver: () => L,
                        addPreloadTexture: () => T,
                        children: () => r,
                        displayStatus: () => y,
                        displayStatusIs: () => Q,
                        events: () => f,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => Y,
                        freezeTextureBeforeResize: () => X,
                        getBrowserTexturePath: () => I,
                        getDisplayStatus: () => Z,
                        getScale: () => W,
                        getSize: () => U,
                        getViewGlobalPosition: () => H,
                        isEventHandled: () => $,
                        isFocused: () => j,
                        pxToRem: () => G,
                        remToPx: () => K,
                        resize: () => V,
                        sendEvent: () => M,
                        setAnimateWindow: () => z,
                        setEventHandled: () => q,
                        setInputPaddingsRem: () => O,
                        setSidePaddingsRem: () => R,
                        whenTutorialReady: () => ee,
                    });
                const c = a('clientResized'),
                    l = a('self.onScaleUpdated'),
                    _ = (e, u) => engine.on(e, u),
                    d = (e, u) => engine.off(e, u),
                    m = { down: a('mousedown'), up: a('mouseup'), move: a('mousemove') };
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
                    const i = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const r = `mouse${u}`,
                                        s = m[u]((e) => t([e, 'outside']));
                                    function a(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, a),
                                        n(),
                                        () => {
                                            i &&
                                                (s(),
                                                window.removeEventListener(r, a),
                                                (e.listeners -= 1),
                                                n(),
                                                (i = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
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
                function p(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    h = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    B = Object.keys(h).reduce((e, u) => ((e[u] = () => A(h[u])), e), {}),
                    b = { play: Object.assign({}, B, { sound: A }), setRTPC: p };
                function v(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function g(e, u, t) {
                    return `url(${v(e, u, t)})`;
                }
                const y = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    f = {
                        onTextureFrozen: a('self.onTextureFrozen'),
                        onTextureReady: a('self.onTextureReady'),
                        onDomBuilt: a('self.onDomBuilt'),
                        onLoaded: a('self.onLoaded'),
                        onDisplayChanged: a('self.onShowingStatusChanged'),
                        onFocusUpdated: a('self.onFocusChanged'),
                        children: {
                            onAdded: a('children.onAdded'),
                            onLoaded: a('children.onLoaded'),
                            onRemoved: a('children.onRemoved'),
                            onAttached: a('children.onAttached'),
                            onTextureReady: a('children.onTextureReady'),
                            onRequestPosition: a('children.requestPosition'),
                        },
                    },
                    w = ['args'];
                const k = 2,
                    S = 16,
                    N = 32,
                    x = 64,
                    P = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const i = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        i = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(u, w);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    M = {
                        close(e) {
                            P('popover' === e ? k : N);
                        },
                        minimize() {
                            P(x);
                        },
                        move(e) {
                            P(S, { isMouseEvent: !0, on: e });
                        },
                    };
                function T(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function O(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function I(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function L(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function H(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: K(u.x), y: K(u.y) };
                }
                function X() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function W() {
                    return viewEnv.getScale();
                }
                function G(e) {
                    return viewEnv.pxToRem(e);
                }
                function K(e) {
                    return viewEnv.remToPx(e);
                }
                function z(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function j() {
                    return viewEnv.isFocused();
                }
                function q() {
                    return viewEnv.setEventHandled();
                }
                function $() {
                    return viewEnv.isEventHandled();
                }
                function Y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const Q = Object.keys(y).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === y[u]), e), {}),
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
                            window.isDomBuilt ? e() : f.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ue = { view: s, client: i, sound: b };
            },
            521: (e, u, t) => {
                'use strict';
                let n, i;
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
                    })(i || (i = {}));
            },
            368: () => {
                !(function () {
                    let e,
                        u,
                        t,
                        n,
                        i,
                        r,
                        s,
                        a = -1;
                    document.addEventListener('mousedown', (t) => {
                        document.getSelection().empty(),
                            t.target.select &&
                                -1 === a &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === a && t.target.select && t.target === e && (a = e.selectionStart), a > -1)) {
                                const n = Math.min(Math.max(t.x, u.left), u.right),
                                    i = Math.min(Math.max(t.y, u.top), u.bottom),
                                    r = document.createEvent('MouseEvent');
                                r.initMouseEvent('mousedown', !0, !0, null, 1, n, i, n, i, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(r);
                                const s = e.selectionEnd;
                                s > a ? e.setSelectionRange(a, s, 'forward') : e.setSelectionRange(s, a, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (a = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (t = e.target),
                                (n = e.target.value),
                                (i = t.selectionStart),
                                (r = -1 !== n.lastIndexOf(' ', i) ? n.lastIndexOf(' ', i) + 1 : 0),
                                (s = -1 !== n.indexOf(' ', i) ? n.indexOf(' ', i) : n.length),
                                t.setSelectionRange(r, s, 'forward'));
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
                t.d(u, { Z: () => r });
                var n = t(768);
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
                    addCallback(e, u, t = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, i);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                i.__instance = void 0;
                const r = i;
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
            364: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => r.Z, B3: () => c, Z5: () => s, B0: () => o, SU: () => b, ry: () => D });
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
                const i = n;
                var r = t(358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(521),
                    E = t(768);
                const A = ['args'];
                function p(e, u, t, n, i, r, s) {
                    try {
                        var a = e[r](s),
                            o = a.value;
                    } catch (e) {
                        return void t(e);
                    }
                    a.done ? u(o) : Promise.resolve(o).then(n, i);
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
                                    return new Promise(function (n, i) {
                                        var r = e.apply(u, t);
                                        function s(e) {
                                            p(r, n, i, s, a, 'next', e);
                                        }
                                        function a(e) {
                                            p(r, n, i, s, a, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const i = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        i = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(u, A);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    h = () => C(o.CLOSE),
                    B = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    },
                    b = (e) => {
                        B(e, h);
                    };
                var v = t(572);
                const g = i.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => C(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, i = R.invalid('resId'), r) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                a = t.getBoundingClientRect(),
                                c = a.x,
                                l = a.y,
                                _ = a.width,
                                d = a.height,
                                m = {
                                    x: E.O.view.pxToRem(c) + s.x,
                                    y: E.O.view.pxToRem(l) + s.y,
                                    width: E.O.view.pxToRem(_),
                                    height: E.O.view.pxToRem(d),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: i,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: b,
                        handleViewEvent: C,
                        onBindingsReady: D,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const i = Object.prototype.toString.call(u[n]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < i.length; u++) t[n].push({ value: e(i[u].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: g,
                        SystemLocale: s,
                        UserLocale: a,
                    };
                window.ViewEnvHelper = y;
            },
            270: (e, u, t) => {
                'use strict';
                var n = t(179),
                    i = t.n(n),
                    r = t(493),
                    s = t.n(r);
                var a = t(364);
                const o = [
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
                function c(e) {
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
                const l = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    _ = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            i = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            a = e.onMouseDown,
                            _ = e.onClick,
                            d = e.ignoreShowDelay,
                            m = void 0 !== d && d,
                            E = e.ignoreMouseClick,
                            A = void 0 !== E && E,
                            p = e.decoratorId,
                            F = void 0 === p ? 0 : p,
                            D = e.isEnabled,
                            C = void 0 === D || D,
                            h = e.targetId,
                            B = void 0 === h ? 0 : h,
                            b = e.onShow,
                            v = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    i = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (i[t] = e[t]);
                                return i;
                            })(e, o);
                        const y = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(
                                () =>
                                    B ||
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
                                [B],
                            ),
                            w = (0, n.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (l(t, F, { isMouseEvent: !0, on: !0, arguments: c(i) }, f),
                                    b && b(),
                                    (y.current.isVisible = !0));
                            }, [t, F, i, f, b]),
                            k = (0, n.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        l(t, F, { on: !1 }, f),
                                        y.current.isVisible && v && v(),
                                        (y.current.isVisible = !1);
                                }
                            }, [t, F, f, v]),
                            S = (0, n.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(y.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === C && k();
                            }, [C, k]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return C
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((N = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(w, m ? 100 : 400)),
                                                      r && r(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              k(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === A && k(), null == _ || _(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === A && k(), null == a || a(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : u;
                        var N;
                    },
                    d = ['children'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const E = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                i = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (i[t] = e[t]);
                            return i;
                        })(e, d);
                    return i().createElement(
                        _,
                        m(
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
                };
                var A = t(483),
                    p = t.n(A),
                    F = t(521);
                function D(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const C = {
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
                    h = [
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
                function B() {
                    return (
                        (B =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        B.apply(this, arguments)
                    );
                }
                class b extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && D(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && D(this.props.soundClick);
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
                            s = e.type,
                            a = e.classNames,
                            o = e.onMouseEnter,
                            c = e.onMouseLeave,
                            l = e.onMouseDown,
                            _ = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        i = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(e, h)),
                            m = p()(C.base, C[`base__${s}`], C[`base__${r}`], null == a ? void 0 : a.base),
                            E = p()(C.icon, C[`icon__${s}`], C[`icon__${r}`], null == a ? void 0 : a.icon),
                            A = p()(C.glow, null == a ? void 0 : a.glow),
                            F = p()(C.caption, C[`caption__${s}`], null == a ? void 0 : a.caption),
                            D = p()(C.goto, null == a ? void 0 : a.goto);
                        return i().createElement(
                            'div',
                            B(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(l),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== s && i().createElement('div', { className: C.shine }),
                            i().createElement('div', { className: E }, i().createElement('div', { className: A })),
                            i().createElement('div', { className: F }, u),
                            n && i().createElement('div', { className: D }, n),
                        );
                    }
                }
                let v, g, y, f;
                (b.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(v || (v = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(g || (g = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(y || (y = {}));
                class w extends i().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = a.B3.GOLD;
                        else e = a.B3.INTEGRAL;
                        const u = a.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                (w.defaultProps = { format: 'integral' }),
                    (function (e) {
                        (e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent');
                    })(f || (f = {}));
                const k = {
                        currency: 'CurrencyItem_currency_b6',
                        currency__credits: 'CurrencyItem_currency__credits_eb',
                        currency__gold: 'CurrencyItem_currency__gold_af',
                        currency__crystal: 'CurrencyItem_currency__crystal_fc',
                        currency__freeXP: 'CurrencyItem_currency__freeXP_36',
                    },
                    S = ({ value: e, currencyType: u, isWalletAvailable: t }) => {
                        const r = u === g.gold ? 'gold' : 'integral',
                            s = (0, n.useMemo)(() => {
                                return (
                                    (e = f.backport),
                                    (t = { currency: u }),
                                    {
                                        isEnabled: e !== f.absent,
                                        args: t,
                                        contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                        decoratorId:
                                            e === f.normal
                                                ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                                : void 0,
                                        ignoreShowDelay: e === f.backport,
                                        ignoreMouseClick: !0,
                                    }
                                );
                                var e, t;
                            }, [u]);
                        return i().createElement(
                            _,
                            s,
                            i().createElement(
                                'span',
                                { className: p()(k.currency, k[`currency__${u}`]) },
                                t ? i().createElement(w, { value: e, format: r }) : R.strings.common.common.dashes(),
                            ),
                        );
                    },
                    N = 'CurrencyBalance_base_97',
                    x = ({ credits: e, golds: u, crystals: t, freexp: n, isWalletAvailable: r }) =>
                        i().createElement(
                            'div',
                            { className: N },
                            i().createElement(S, { value: t, currencyType: g.crystal, isWalletAvailable: r }),
                            i().createElement(S, { value: u, currencyType: g.gold, isWalletAvailable: r }),
                            i().createElement(S, { value: e, currencyType: g.credits, isWalletAvailable: r }),
                            i().createElement(S, { value: n, currencyType: g.freeXP, isWalletAvailable: r }),
                        ),
                    P = {
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
                let M, T;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(M || (M = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(T || (T = {}));
                const O = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: s,
                    mixClass: a,
                    soundHover: o,
                    soundClick: c,
                    onMouseEnter: l,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: E,
                    onClick: A,
                }) => {
                    const F = (0, n.useRef)(null),
                        C = (0, n.useState)(t),
                        h = C[0],
                        B = C[1],
                        b = (0, n.useState)(!1),
                        v = b[0],
                        g = b[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                h && null !== F.current && !F.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, n.useEffect)(() => {
                            B(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: F,
                                className: p()(
                                    P.base,
                                    P[`base__${r}`],
                                    s && P.base__disabled,
                                    u && P[`base__${u}`],
                                    h && P.base__focus,
                                    v && P.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== o && D(o), l && l(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    s || (m && m(e), g(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== c && D(c),
                                        d && d(e),
                                        t && (s || (F.current && (F.current.focus(), B(!0)))),
                                        g(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (E && E(e), g(!1));
                                },
                                onClick: function (e) {
                                    s || (A && A(e));
                                },
                            },
                            r !== M.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: P.back }),
                                    i().createElement('span', { className: P.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: p()(P.state, P.state__default) },
                                i().createElement('span', { className: P.stateDisabled }),
                                i().createElement('span', { className: P.stateHighlightHover }),
                                i().createElement('span', { className: P.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: P.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                O.defaultProps = { type: M.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const I = O,
                    L = 'DialogTemplate_base_4d',
                    U = 'DialogTemplate_control_63',
                    V = 'DialogTemplate_controlButton_4f',
                    H = 'DialogTemplate_view_e9',
                    X = 'DialogTemplate_view__show_f2',
                    W = 'DialogTemplate_icon_c9',
                    G = 'DialogTemplate_iconImage_c8',
                    K = 'DialogTemplate_iconOverlay_7b',
                    z = 'DialogTemplate_iconShadow_4b',
                    j = 'DialogTemplate_title_0c',
                    q = 'DialogTemplate_content_8f',
                    $ = 'DialogTemplate_divider_cf',
                    Y = 'DialogTemplate_footer_c8',
                    Z = 'DialogTemplate_buttons_77',
                    Q = 'DialogTemplate_buttons__indent_ba',
                    J = 'DialogTemplate_buttonsItem_6e',
                    ee = 'DialogTemplate_button_13';
                class ue extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.handleAcceptClicked = () => {
                                window.model.onAcceptClicked();
                            }),
                            (this.handleCancelClicked = () => {
                                window.model.onCancelClicked();
                            }),
                            (this.componentDidMount = () => {
                                document.addEventListener('keydown', this.handleKeyDown);
                            }),
                            (this.componentWillUnmount = () => {
                                document.removeEventListener('keydown', this.handleKeyDown);
                            }),
                            (this.handleKeyDown = (e) => {
                                e.keyCode in F.n &&
                                    e.keyCode !== F.n.BACKSPACE &&
                                    e.keyCode !== F.n.DELETE &&
                                    e.preventDefault(),
                                    e.keyCode !== F.n.ENTER ||
                                        window.model.isAcceptDisabled ||
                                        e.altKey ||
                                        window.model.onAcceptClicked();
                            });
                    }
                    render() {
                        const e = window.model,
                            u =
                                !0 === this.props.showPayInfo &&
                                'simple' === this.props.type &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(x, {
                                        credits: e.credits,
                                        golds: e.golds,
                                        crystals: e.crystals,
                                        freexp: e.freexp,
                                    }),
                                    i().createElement('div', { className: $ }),
                                ),
                            t =
                                this.props.buttonAcceptText &&
                                i().createElement(
                                    'div',
                                    { className: J },
                                    i().createElement(
                                        I,
                                        {
                                            size: T.medium,
                                            mixClass: ee,
                                            disabled: this.props.isButtonAcceptDisabled,
                                            onClick: this.handleAcceptClicked,
                                        },
                                        this.props.buttonAcceptText,
                                    ),
                                ),
                            n =
                                this.props.buttonCancelText &&
                                i().createElement(
                                    'div',
                                    { className: J },
                                    i().createElement(
                                        I,
                                        {
                                            type: M.secondary,
                                            size: T.medium,
                                            mixClass: ee,
                                            onClick: this.handleCancelClicked,
                                        },
                                        this.props.buttonCancelText,
                                    ),
                                ),
                            r = i()
                                .Children.toArray(this.props.children)
                                .find((e) => e.key.includes('footer')),
                            s = i()
                                .Children.toArray(this.props.children)
                                .find((e) => e.key.includes('content'));
                        return i().createElement(
                            'div',
                            { className: L },
                            i().createElement(
                                'div',
                                { className: U },
                                u,
                                i().createElement(
                                    'div',
                                    { className: V },
                                    i().createElement(b, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: this.handleCancelClicked,
                                    }),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: p()(H, X) },
                                i().createElement(
                                    'div',
                                    { className: W },
                                    this.props.icon &&
                                        i().createElement('span', {
                                            className: p()(G),
                                            style: { backgroundImage: `url('${this.props.icon}')` },
                                        }),
                                    this.props.iconOverlay &&
                                        i().createElement('span', {
                                            className: p()(K),
                                            style: { backgroundImage: `url('${this.props.iconOverlay}')` },
                                        }),
                                    this.props.iconHighlight &&
                                        i().createElement('span', {
                                            className: z,
                                            style: { backgroundImage: `url('${this.props.iconHighlight}')` },
                                        }),
                                ),
                                i().createElement('h1', { className: j }, this.props.title),
                                i().createElement('div', { className: q }, s || this.props.contentText),
                                i().createElement('div', { className: $ }),
                                r && i().createElement('footer', { className: Y }, r),
                                i().createElement('div', { className: p()(Z, !r && Q) }, t, n),
                            ),
                        );
                    }
                }
                ue.defaultProps = { type: 'simple' };
                const te = {
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
                    },
                    ne = (0, n.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: u,
                            size: t,
                            type: n,
                            value: r,
                            discountValue: s,
                            showPlus: a,
                            isEnough: o = !0,
                            stockBackgroundName: c = y.Red,
                            className: l,
                            classNames: _,
                        }) =>
                            i().createElement(
                                'span',
                                { className: p()(te.base, te[`base__${t}`], l) },
                                i().createElement(
                                    'span',
                                    {
                                        className: p()(
                                            te.value,
                                            te[`value__${n}`],
                                            !o && te.value__notEnough,
                                            null == _ ? void 0 : _.value,
                                        ),
                                    },
                                    a && r > 0 && '+',
                                    i().createElement(w, { value: r, format: n === g.gold ? 'gold' : 'integral' }),
                                ),
                                i().createElement('span', {
                                    className: p()(te.icon, te[`icon__${n}-${t}`], null == _ ? void 0 : _.icon),
                                }),
                                e &&
                                    i().createElement(
                                        'span',
                                        {
                                            className: p()(
                                                te.stock,
                                                s && te.stock__indent,
                                                u && te.stock__interactive,
                                                null == _ ? void 0 : _.stock,
                                            ),
                                        },
                                        i().createElement('span', {
                                            className: te.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                        }),
                                        Boolean(s) && s,
                                    ),
                            ),
                    );
                t(368);
                let ie;
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
                })(ie || (ie = {}));
                const re = {
                    base: 'NumericStepper_base_35',
                    base__small: 'NumericStepper_base__small_11',
                    base__medium: 'NumericStepper_base__medium_9d',
                    base__large: 'NumericStepper_base__large_dc',
                    base__isFocus: 'NumericStepper_base__isFocus_49',
                    base__isDisabled: 'NumericStepper_base__isDisabled_ac',
                    inputContainer: 'NumericStepper_inputContainer_e2',
                    input: 'NumericStepper_input_55',
                    'base__withCurrency-small': 'NumericStepper_base__withCurrency-small_de',
                    'base__withCurrency-medium': 'NumericStepper_base__withCurrency-medium_69',
                    'base__withCurrency-large': 'NumericStepper_base__withCurrency-large_a1',
                    input__disabled: 'NumericStepper_input__disabled_d8',
                    input__credits: 'NumericStepper_input__credits_08',
                    'input__credits-disabled': 'NumericStepper_input__credits-disabled_3f',
                    input__gold: 'NumericStepper_input__gold_14',
                    'input__gold-disabled': 'NumericStepper_input__gold-disabled_c6',
                    input__xp: 'NumericStepper_input__xp_c4',
                    input__eliteXP: 'NumericStepper_input__eliteXP_85',
                    input__freeXP: 'NumericStepper_input__freeXP_06',
                    input__crystal: 'NumericStepper_input__crystal_2e',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_33',
                    'input__eliteXP-disabled': 'NumericStepper_input__eliteXP-disabled_a7',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_8b',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_f8',
                    input__withCurrency: 'NumericStepper_input__withCurrency_3b',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_db',
                    'input__xp-large': 'NumericStepper_input__xp-large_73',
                    'input__eliteXP-medium': 'NumericStepper_input__eliteXP-medium_49',
                    'input__eliteXP-large': 'NumericStepper_input__eliteXP-large_e5',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_2b',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_c9',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_56',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_4e',
                    currency: 'NumericStepper_currency_38',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_66',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_66',
                    'currency__eliteXP-medium': 'NumericStepper_currency__eliteXP-medium_68',
                    'currency__eliteXP-large': 'NumericStepper_currency__eliteXP-large_84',
                    'currency__freeXP-medium': 'NumericStepper_currency__freeXP-medium_79',
                    'currency__freeXP-large': 'NumericStepper_currency__freeXP-large_c7',
                    'currency__crystal-medium': 'NumericStepper_currency__crystal-medium_55',
                    'currency__crystal-large': 'NumericStepper_currency__crystal-large_a4',
                    currencyIcon: 'NumericStepper_currencyIcon_8e',
                    'currencyIcon__credits-small': 'NumericStepper_currencyIcon__credits-small_99',
                    'currencyIcon__credits-medium': 'NumericStepper_currencyIcon__credits-medium_1a',
                    'currencyIcon__credits-large': 'NumericStepper_currencyIcon__credits-large_bc',
                    'currencyIcon__gold-small': 'NumericStepper_currencyIcon__gold-small_2a',
                    'currencyIcon__gold-medium': 'NumericStepper_currencyIcon__gold-medium_f6',
                    'currencyIcon__gold-large': 'NumericStepper_currencyIcon__gold-large_d6',
                    'currencyIcon__crystal-small': 'NumericStepper_currencyIcon__crystal-small_b5',
                    'currencyIcon__crystal-medium': 'NumericStepper_currencyIcon__crystal-medium_ac',
                    'currencyIcon__crystal-large': 'NumericStepper_currencyIcon__crystal-large_2b',
                    'currencyIcon__freeXP-small': 'NumericStepper_currencyIcon__freeXP-small_4d',
                    'currencyIcon__freeXP-medium': 'NumericStepper_currencyIcon__freeXP-medium_85',
                    'currencyIcon__freeXP-large': 'NumericStepper_currencyIcon__freeXP-large_76',
                    'currencyIcon__xp-small': 'NumericStepper_currencyIcon__xp-small_73',
                    'currencyIcon__xp-medium': 'NumericStepper_currencyIcon__xp-medium_ef',
                    'currencyIcon__xp-large': 'NumericStepper_currencyIcon__xp-large_3e',
                    'currencyIcon__eliteXP-small': 'NumericStepper_currencyIcon__eliteXP-small_58',
                    'currencyIcon__eliteXP-medium': 'NumericStepper_currencyIcon__eliteXP-medium_e5',
                    'currencyIcon__eliteXP-large': 'NumericStepper_currencyIcon__eliteXP-large_3f',
                    dummyValue: 'NumericStepper_dummyValue_0c',
                    control: 'NumericStepper_control_ab',
                    buttonIncrement: 'NumericStepper_buttonIncrement_16',
                    buttonDecrement: 'NumericStepper_buttonDecrement_c8',
                    buttonIncrement__small: 'NumericStepper_buttonIncrement__small_f6',
                    buttonDecrement__small: 'NumericStepper_buttonDecrement__small_36',
                    buttonIncrement__medium: 'NumericStepper_buttonIncrement__medium_fd',
                    buttonDecrement__medium: 'NumericStepper_buttonDecrement__medium_d1',
                    buttonIncrement__large: 'NumericStepper_buttonIncrement__large_56',
                    buttonDecrement__large: 'NumericStepper_buttonDecrement__large_63',
                    buttonIncrement__isDisabled: 'NumericStepper_buttonIncrement__isDisabled_68',
                    buttonDecrement__isDisabled: 'NumericStepper_buttonDecrement__isDisabled_d9',
                    'buttonIncrement__isActive-small': 'NumericStepper_buttonIncrement__isActive-small_2a',
                    'buttonIncrement__isActive-medium': 'NumericStepper_buttonIncrement__isActive-medium_c2',
                    'buttonIncrement__isActive-large': 'NumericStepper_buttonIncrement__isActive-large_91',
                    'buttonDecrement__isActive-small': 'NumericStepper_buttonDecrement__isActive-small_21',
                    'buttonDecrement__isActive-medium': 'NumericStepper_buttonDecrement__isActive-medium_a3',
                    'buttonDecrement__isActive-large': 'NumericStepper_buttonDecrement__isActive-large_8b',
                };
                class se extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.timer = null),
                            (this.validationTimer = null),
                            (this.numericalStepper = (0, n.createRef)()),
                            (this.input = (0, n.createRef)()),
                            (this.state = {
                                value: this.props.value,
                                isFocused: this.props.isFocused,
                                activeDecrement: !1,
                                activeIncrement: !1,
                            }),
                            (this.setFocusOnInput = () => {
                                this.props.isDisabled ||
                                    (this.input.current &&
                                        (this.input.current.focus(), this.setState({ isFocused: !0 })));
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
                                this.props.currencyType ? a.Z5.getNumberFormat(e, a.B3.GOLD) : e.toString()),
                            (this.getValidValue = (e) => {
                                const u = Math.min(this.props.maximum, Math.max(this.props.minimum, e)),
                                    t = this.props.stepSize;
                                return Math.round(u / t) * t;
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
                                const u = e === F.n.BACKSPACE,
                                    t = e === F.n.DELETE,
                                    n = this.input.current,
                                    i = n.selectionStart || 0,
                                    r = n.selectionEnd || 0;
                                let s = n.value;
                                const o = Math.max(i, r),
                                    c = o;
                                t && (s = s.substring(0, o) + s.substring(o + 1, s.length)),
                                    u && 1 === i && 1 === s.length && (s = '0');
                                const l = Number(s.trim().replace(/\D/g, '')),
                                    _ = Number.isSafeInteger(l) ? l : Number.MAX_SAFE_INTEGER,
                                    d = this.props.currencyType ? a.Z5.getNumberFormat(_, a.B3.GOLD) : _.toString(),
                                    m = !isNaN(Number(s.replace(' ', '')));
                                n.value = d;
                                const E = new RegExp(/\d/g);
                                let A = 0;
                                for (let e = 0; e < c; e++) {
                                    const u = s[e] || '',
                                        t = d[A] || '';
                                    if (u.match(E) || u === t) {
                                        for (; u !== d[A] && A < d.length; ) A++;
                                        A++;
                                    }
                                }
                                '' === s ? (A = 1) : m || (A = s.length),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(A, A),
                                    this.changeValue(_),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        this.getValidValue(_) !== _ &&
                                            this.state.isFocused &&
                                            (this.changeValue(this.getValidValue(_)),
                                            this.setCursorPosition(0, this.formatValue(_).length));
                                    }, 1e3));
                            }),
                            (this.handleDelete = (e) => {
                                const u = e.keyCode === F.n.BACKSPACE,
                                    t = e.keyCode === F.n.DELETE,
                                    n = e.target,
                                    i = n.selectionStart,
                                    r = n.selectionEnd,
                                    s = n.value,
                                    a = i !== r,
                                    o = new RegExp(/\D/),
                                    c = u && i ? i - 1 : i || 0;
                                if (a) return;
                                let l = c;
                                const _ = o.test(s[c]);
                                if (t && _) for (; o.test(s[l]) && l < s.length; ) l++;
                                if (u && _) for (; o.test(s[l]) && l > 0; ) l--;
                                if (l !== c || (u && _))
                                    return e.preventDefault(), (l = l < 0 ? 0 : l), void this.setCursorPosition(l, l);
                                ((u && 1 === i && 1 === s.length) || t) &&
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
                                        (e.keyCode in F.n &&
                                            e.keyCode !== F.n.BACKSPACE &&
                                            e.keyCode !== F.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case F.n.ARROW_UP:
                                        case F.n.NUM_PLUS:
                                        case F.n.PLUS:
                                            this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment();
                                            break;
                                        case F.n.ARROW_DOWN:
                                        case F.n.NUM_MINUS:
                                        case F.n.MINUS:
                                            this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement();
                                            break;
                                        case F.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case F.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case F.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                this.changeValue(this.props.maximum), this.setCursorPosition(0, e);
                                            }
                                            break;
                                        case F.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case F.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case F.n.BACKSPACE:
                                        case F.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case F.n.ARROW_UP:
                                        case F.n.NUM_PLUS:
                                        case F.n.PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case F.n.ARROW_DOWN:
                                        case F.n.NUM_MINUS:
                                        case F.n.MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in ie || e.preventDefault();
                            }),
                            (this.increment = () => {
                                const e = Math.min(
                                    this.getValidValue(this.state.value) + this.props.stepSize,
                                    this.props.maximum,
                                );
                                this.changeValue(e);
                            }),
                            (this.decrement = () => {
                                const e = Math.max(
                                    this.getValidValue(this.state.value) - this.props.stepSize,
                                    this.props.minimum,
                                );
                                this.changeValue(e);
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
                                this.props.isDisabled || D('highlight');
                            }),
                            (this.playClickSound = () => {
                                this.props.isDisabled || D('play');
                            }),
                            (this.stop = () => {
                                this.timer && clearTimeout(this.timer), (this.timer = null);
                            });
                    }
                    componentDidUpdate(e, u) {
                        const t = this.state,
                            n = t.value,
                            i = t.isFocused;
                        if (n !== u.value && i) {
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
                        e !== this.props.value && this.setState({ value: e }),
                            u !== this.props.isFocused &&
                                (this.setState({ isFocused: u }),
                                u
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput());
                    }
                    get formattedValue() {
                        return this.props.currencyType
                            ? a.Z5.getNumberFormat(this.state.value, a.B3.GOLD)
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
                            r = p()(
                                re.base,
                                re[`base__${t}`],
                                n && re[`base__withCurrency-${t}`],
                                u && re.base__isDisabled,
                                this.state.isFocused && re.base__isFocus,
                            ),
                            s = p()(
                                re.buttonIncrement,
                                re[`buttonIncrement__${t}`],
                                this.buttonIncrementIsDisabled && re.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    re[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            a = p()(
                                re.buttonDecrement,
                                re[`buttonDecrement__${t}`],
                                this.buttonDecrementIsDisabled && re.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    re[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            o = p()(
                                re.input,
                                u && re.input__disabled,
                                n && re.input__withCurrency,
                                n && re[`input__${n}-${t}`],
                                n && re[`input__${n}`],
                                n && u && re[`input__${n}-disabled`],
                            ),
                            c = p()(re.currencyIcon, n && re[`currencyIcon__${n}-${t}`]),
                            l = p()(re.currency, n && re[`currency__${n}`], n && re[`currency__${n}-${t}`]);
                        return i().createElement(
                            'div',
                            {
                                className: r,
                                ref: this.numericalStepper,
                                style: ((_ = this.props.width), _ ? { width: `${_}rem` } : {}),
                            },
                            i().createElement(
                                'div',
                                { className: re.inputContainer },
                                n &&
                                    i().createElement(
                                        'div',
                                        { className: l },
                                        i().createElement('span', { className: re.dummyValue }, this.formattedValue),
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
                                { className: re.control },
                                i().createElement('div', {
                                    className: s,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                i().createElement('div', {
                                    className: a,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.decrementHandleMouseEnter,
                                    onMouseDown: this.decrementHandleMouseDown,
                                }),
                            ),
                        );
                        var _;
                    }
                }
                se.defaultProps = {
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
                const ae = 'CurrencyStepper_base_ed',
                    oe = 'CurrencyStepper_stepper_74',
                    ce = 'CurrencyStepper_currency_81';
                class le extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = {
                                totalPrice: this.props.itemCount * this.props.itemPrice,
                                itemCount: this.props.itemCount,
                                itemMaxCount: this.props.itemMaxCount,
                                itemMinCount: this.props.itemMinCount,
                            }),
                            (this.handleNumericalChange = (e) => {
                                if (
                                    (e > this.props.itemMaxCount && (e = this.props.itemMaxCount),
                                    e < this.props.itemMinCount && (e = this.props.itemMinCount),
                                    this.state.itemCount !== e && 0 !== e)
                                ) {
                                    const u = this.props.itemPrice * e;
                                    this.setState({ totalPrice: u, itemCount: e }),
                                        this.props.onStepperChanged && this.props.onStepperChanged(e);
                                }
                            });
                    }
                    componentWillReceiveProps(e) {
                        (e.itemCount === this.state.itemCount &&
                            e.itemMinCount === this.state.itemMinCount &&
                            e.itemMaxCount === this.state.itemMaxCount) ||
                            this.setState({
                                itemCount: e.itemCount,
                                itemMinCount: e.itemMinCount,
                                itemMaxCount: e.itemMaxCount,
                                totalPrice: e.itemCount * this.props.itemPrice,
                            });
                    }
                    render() {
                        return i().createElement(
                            'div',
                            { className: ae },
                            i().createElement(
                                'div',
                                { className: oe },
                                i().createElement(se, {
                                    isFocused: !1,
                                    maximum: this.state.itemMaxCount,
                                    minimum: this.state.itemMinCount,
                                    value: this.state.itemCount,
                                    size: 'medium',
                                    stepSize: 1,
                                    onChange: this.handleNumericalChange,
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: ce },
                                i().createElement(ne, {
                                    size: 'big',
                                    isDiscount: !1,
                                    value: this.state.totalPrice,
                                    type: this.props.currencyType,
                                }),
                            ),
                        );
                    }
                }
                let _e, de, me, Ee;
                (le.defaultProps = {
                    itemCount: 1,
                    itemMaxCount: 1,
                    itemMinCount: 1,
                    itemPrice: 0,
                    currencyType: 'credits',
                }),
                    (function (e) {
                        (e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH');
                    })(_e || (_e = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(de || (de = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(me || (me = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(Ee || (Ee = {}));
                const Ae = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    pe = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
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
                const De = (e) => {
                        let u = e.id,
                            t = e.isChecked,
                            r = void 0 !== t && t,
                            s = e.isDisabled,
                            a = void 0 !== s && s,
                            o = e.isAlert,
                            c = void 0 !== o && o,
                            l = e.size,
                            _ = void 0 === l ? de.medium : l,
                            d = e.type,
                            m = void 0 === d ? me.primary : d,
                            E = e.soundHover,
                            A = void 0 === E ? 'highlight' : E,
                            F = e.soundClick,
                            C = void 0 === F ? 'play' : F,
                            h = e.onMouseEnter,
                            B = e.onMouseLeave,
                            b = e.onMouseUp,
                            v = e.onMouseDown,
                            g = e.onClick,
                            y = e.onChange,
                            f = e.onFocus,
                            w = e.onBlur,
                            k = e.text,
                            S = e.contentStyles,
                            N = e.children,
                            x = e.alignment,
                            P = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    i = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (i[t] = e[t]);
                                return i;
                            })(e, pe);
                        const M = (0, n.useState)(!1),
                            T = M[0],
                            O = M[1],
                            I = (0, n.useState)(!1),
                            L = (I[0], I[1]),
                            R = (0, n.useCallback)(
                                (e) => {
                                    a || (y && y(), g && g(e));
                                },
                                [a, y, g],
                            ),
                            U = (0, n.useCallback)(
                                (e) => {
                                    const u = e.button === _e.LEFT;
                                    a || (u && O(!0), u && v && v(e), C && D(C));
                                },
                                [a, v, C],
                            ),
                            V = (0, n.useCallback)(
                                (e) => {
                                    a || (O(!1), b && b(e));
                                },
                                [a, b],
                            ),
                            H = (0, n.useCallback)(
                                (e) => {
                                    a || (h && h(e), A && D(A));
                                },
                                [a, h, A],
                            ),
                            X = (0, n.useCallback)(
                                (e) => {
                                    a || (O(!1), B && B(e));
                                },
                                [a, B],
                            ),
                            W = (0, n.useCallback)(
                                (e) => {
                                    a || (L(!0), f && f(e));
                                },
                                [a, f],
                            ),
                            G = (0, n.useCallback)(
                                (e) => {
                                    a || (L(!1), w && w(e));
                                },
                                [a, w],
                            ),
                            K = i().createElement(
                                'div',
                                { className: Ae.label },
                                i().createElement(
                                    'div',
                                    { className: p()(Ae.labelContent, 's-labelContent'), style: S },
                                    k || N,
                                ),
                            );
                        return i().createElement(
                            'div',
                            Fe(
                                {
                                    id: u,
                                    className: p()(Ae.base, Ae[`base__${_}`], Ae[`base__${m}`], {
                                        [Ae.base__checked]: r,
                                        [Ae.base__disabled]: a,
                                        [Ae.base__mouseDown]: T,
                                        [Ae.base__alert]: c,
                                        [Ae.base__center]: x === Ee.Center,
                                        [Ae.base__bottom]: x === Ee.Bottom,
                                    }),
                                    onClick: R,
                                    onMouseEnter: H,
                                    onMouseLeave: X,
                                    onMouseDown: U,
                                    onMouseUp: V,
                                    onFocus: W,
                                    onBlur: G,
                                },
                                P,
                            ),
                            i().createElement(
                                'div',
                                { className: Ae.input },
                                i().createElement('div', { className: Ae.alertOverlay }),
                                i().createElement('div', { className: Ae.inputHoverOverlay }),
                                i().createElement('div', { className: Ae.highlight }),
                            ),
                            i().createElement('div', { className: Ae.checkmark }),
                            ((k || N) && K) || null,
                        );
                    },
                    Ce = 'default_content_d6',
                    he = 'default_currency_73',
                    Be = 'default_content_description_ba',
                    be = 'default_content_description__colorRed_4b';
                t(281);
                let ve;
                function ge(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(ve || (ve = {}));
                (() => {
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
                })();
                let ye;
                !(function (e) {
                    e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace';
                })(ye || (ye = {}));
                class fe extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.dataTracker = new a.Sw()),
                            (this.modelUpdateCallback = 0),
                            (this.state = {
                                isRearm: window.model.isRearm,
                                isAcceptDisabled: window.model.isAcceptDisabled,
                            }),
                            (this.handelReacmChecked = () => {
                                const e = !this.state.isRearm;
                                this.setState({ isRearm: e }), (window.model.isRearm = e), window.model.onSetIsRearm();
                            }),
                            (this.handleNumericalChange = (e) => {
                                window.model.itemCount = e;
                            }),
                            (this.componentDidMount = () => {
                                (this.modelUpdateCallback = this.dataTracker.addCallback('model', () => {
                                    this.setState({ isAcceptDisabled: window.model.isAcceptDisabled }),
                                        this.forceUpdate();
                                })),
                                    window.addEventListener('keydown', a.SU);
                            }),
                            (this.componentWillUnmount = () => {
                                this.dataTracker.clear(),
                                    this.modelUpdateCallback > 0 &&
                                        this.dataTracker.removeCallback(this.modelUpdateCallback),
                                    window.removeEventListener('keydown', a.SU);
                            });
                    }
                    get title() {
                        const e = window.model,
                            u = e.titleBody,
                            t = e.titleArgs;
                        return ge(
                            u,
                            t.reduce((e, { value: { name: u, value: t } }) => ((e[u] = t), e), {}),
                        );
                    }
                    render() {
                        const e = window.model,
                            u =
                                e.specialType === ye.BATTLE_BOOSTER_REPLACE
                                    ? 'R.images.gui.maps.icons.artefact.battleBooster_replace_overlay_medium'
                                    : 'R.images.gui.maps.icons.artefact.battleBooster_overlay_medium',
                            t = e.upperDescription,
                            n = e.lowerDescription,
                            r =
                                t &&
                                n &&
                                i().createElement(
                                    'div',
                                    { className: Be },
                                    i().createElement('span', {
                                        className: be,
                                        dangerouslySetInnerHTML: { __html: t },
                                    }),
                                    i().createElement('span', null, n),
                                ),
                            s = i().createElement(
                                i().Fragment,
                                { key: 'content' },
                                r,
                                i().createElement(
                                    'div',
                                    { className: Ce },
                                    R.strings.menu.boosterBuyWindow.pricePerItem(),
                                    i().createElement(
                                        'div',
                                        { className: he },
                                        i().createElement(
                                            E,
                                            { args: { tooltipId: 'actionPrice' }, isEnabled: e.isDiscount },
                                            i().createElement(
                                                'span',
                                                null,
                                                i().createElement(ne, {
                                                    size: 'small',
                                                    isDiscount: e.isDiscount,
                                                    discountValue: e.discountValue,
                                                    value: e.itemPrice,
                                                    type: e.currencyType,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            a = i().createElement(
                                i().Fragment,
                                { key: 'footer' },
                                i().createElement(le, {
                                    itemCount: e.itemCount,
                                    itemPrice: e.itemPrice,
                                    itemMinCount: e.itemMinCount,
                                    itemMaxCount: e.itemMaxCount,
                                    currencyType: e.currencyType,
                                    onStepperChanged: this.handleNumericalChange,
                                }),
                                i().createElement(De, {
                                    isChecked: this.state.isRearm,
                                    size: 'medium',
                                    type: 'main',
                                    text: R.strings.menu.boosterBuyWindow.rearmCheckboxLabel(),
                                    isDisabled: !1,
                                    onChange: this.handelReacmChecked,
                                }),
                            );
                        return i().createElement(
                            ue,
                            {
                                type: e.dialogType,
                                title: this.title,
                                icon: e.backgroundImg,
                                iconOverlay: u,
                                iconHighlight: 'R.images.gui.maps.icons.artefact.battleBooster_big_highlight',
                                showPayInfo: !0,
                                buttonAcceptText: R.strings.menu.boosterBuyWindow.buyButtonLabel(),
                                buttonCancelText: R.strings.menu.boosterBuyWindow.cancelButtonLabel(),
                                isButtonAcceptDisabled: this.state.isAcceptDisabled,
                            },
                            s,
                            a,
                        );
                    }
                }
                engine.whenReady.then(() => {
                    s().render(i().createElement(fe, null), document.getElementById('root'));
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
                var i = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], r = !0, s = 0; s < u.length; s++)
                        (!1 & n || i >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), n < i && (i = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var a = t();
                        void 0 !== a && (e = a);
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
        (() => {
            var e = { 697: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        i,
                        [r, s, a] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (a) var c = a(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        (i = r[o]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [928], () => __webpack_require__(270));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
