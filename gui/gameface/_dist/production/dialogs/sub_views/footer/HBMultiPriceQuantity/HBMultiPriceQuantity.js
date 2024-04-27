(() => {
    var __webpack_modules__ = {
            3532: (u) => {
                u.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            9887: (u) => {
                u.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            5067: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => G });
                var r = {};
                t.r(r), t.d(r, { mouse: () => c, onResize: () => o });
                var i = {};
                t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => A,
                        getSize: () => E,
                        graphicsQuality: () => F,
                    });
                var n = {};
                t.r(n), t.d(n, { getBgUrl: () => m, getTextureUrl: () => D });
                var a = {};
                function s(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function _(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => x,
                        addPreloadTexture: () => g,
                        children: () => n,
                        displayStatus: () => d,
                        displayStatusIs: () => U,
                        events: () => B,
                        extraSize: () => W,
                        forceTriggerMouseMove: () => I,
                        freezeTextureBeforeResize: () => M,
                        getBrowserTexturePath: () => v,
                        getDisplayStatus: () => k,
                        getScale: () => N,
                        getSize: () => S,
                        getViewGlobalPosition: () => y,
                        isEventHandled: () => R,
                        isFocused: () => T,
                        pxToRem: () => L,
                        remToPx: () => P,
                        resize: () => w,
                        sendEvent: () => p,
                        setAnimateWindow: () => O,
                        setEventHandled: () => H,
                        setInputPaddingsRem: () => b,
                        setSidePaddingsRem: () => f,
                        whenTutorialReady: () => z,
                    });
                const o = s('clientResized'),
                    l = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') },
                    c = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && _(!1);
                        }
                        function t() {
                            u.enabled && _(!0);
                        }
                        function r() {
                            u.enabled
                                ? u.listeners < 1
                                    ? ((u.initialized = !1),
                                      document.body.removeEventListener('mouseenter', e),
                                      document.body.removeEventListener('mouseleave', t))
                                    : u.initialized ||
                                      ((u.initialized = !0),
                                      document.body.addEventListener('mouseenter', e),
                                      document.body.addEventListener('mouseleave', t))
                                : _(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let i = !0;
                                        const n = `mouse${e}`,
                                            a = l[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, s),
                                            r(),
                                            () => {
                                                i &&
                                                    (a(),
                                                    window.removeEventListener(n, s),
                                                    (u.listeners -= 1),
                                                    r(),
                                                    (i = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                (u.enabled = !1), r();
                            },
                            enable() {
                                (u.enabled = !0), r();
                            },
                            enableOutside() {
                                u.enabled && _(!0);
                            },
                            disableOutside() {
                                u.enabled && _(!1);
                            },
                        });
                    })();
                function E(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const F = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function D(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function m(u, e, t) {
                    return `url(${D(u, e, t)})`;
                }
                const d = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
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
                    C = ['args'],
                    h = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const i = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        i = {},
                                        n = Object.keys(u);
                                    for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (i[t] = u[t]);
                                    return i;
                                })(e, C);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    p = {
                        close(u) {
                            h('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            h(64);
                        },
                        move(u) {
                            h(16, { isMouseEvent: !0, on: u });
                        },
                    };
                function g(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function b(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function v(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function x(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function f(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function S(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function w(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function y(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: P(e.x), y: P(e.y) };
                }
                function M() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function N() {
                    return viewEnv.getScale();
                }
                function L(u) {
                    return viewEnv.pxToRem(u);
                }
                function P(u) {
                    return viewEnv.remToPx(u);
                }
                function O(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function T() {
                    return viewEnv.isFocused();
                }
                function H() {
                    return viewEnv.setEventHandled();
                }
                function R() {
                    return viewEnv.isEventHandled();
                }
                function I() {
                    viewEnv.forceTriggerMouseMove();
                }
                function k() {
                    return viewEnv.getShowingStatus();
                }
                const U = Object.keys(d).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === d[e]), u), {}),
                    W = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    z = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : B.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    G = { view: a, client: i };
            },
            5521: (u, e, t) => {
                'use strict';
                let r, i;
                t.d(e, { n: () => r }),
                    (function (u) {
                        (u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9'),
                            (u[(u.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (u[(u.INSERT = 45)] = 'INSERT'),
                            (u[(u.F1 = 112)] = 'F1'),
                            (u[(u.F2 = 113)] = 'F2'),
                            (u[(u.F3 = 114)] = 'F3'),
                            (u[(u.F4 = 115)] = 'F4'),
                            (u[(u.F5 = 116)] = 'F5'),
                            (u[(u.F6 = 117)] = 'F6'),
                            (u[(u.F7 = 118)] = 'F7'),
                            (u[(u.F8 = 119)] = 'F8'),
                            (u[(u.F9 = 120)] = 'F9'),
                            (u[(u.F10 = 121)] = 'F10'),
                            (u[(u.F11 = 122)] = 'F11'),
                            (u[(u.F12 = 123)] = 'F12'),
                            (u[(u.SELECT = 93)] = 'SELECT'),
                            (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (u[(u.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (u[(u.STAR = 106)] = 'STAR'),
                            (u[(u.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (u[(u.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (u[(u.COMMA = 188)] = 'COMMA'),
                            (u[(u.DASH = 189)] = 'DASH'),
                            (u[(u.PERIOD = 190)] = 'PERIOD');
                    })(r || (r = {})),
                    (function (u) {
                        (u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock');
                    })(i || (i = {}));
            },
            3368: () => {
                !(function () {
                    let u,
                        e,
                        t,
                        r,
                        i,
                        n,
                        a,
                        s = -1;
                    document.addEventListener('mousedown', (t) => {
                        document.getSelection().empty(),
                            t.target.select &&
                                -1 === s &&
                                ((u = t.target), (e = u.getBoundingClientRect()), u.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === s && t.target.select && t.target === u && (s = u.selectionStart), s > -1)) {
                                const r = Math.min(Math.max(t.x, e.left), e.right),
                                    i = Math.min(Math.max(t.y, e.top), e.bottom),
                                    n = document.createEvent('MouseEvent');
                                n.initMouseEvent('mousedown', !0, !0, null, 1, r, i, r, i, !1, !1, !1, !1, 0, null),
                                    u.dispatchEvent(n);
                                const a = u.selectionEnd;
                                a > s ? u.setSelectionRange(s, a, 'forward') : u.setSelectionRange(a, s, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (u = null), (s = -1);
                        }),
                        document.addEventListener('dblclick', (u) => {
                            u.target.select &&
                                (document.getSelection().empty(),
                                (t = u.target),
                                (r = u.target.value),
                                (i = t.selectionStart),
                                (n = -1 !== r.lastIndexOf(' ', i) ? r.lastIndexOf(' ', i) + 1 : 0),
                                (a = -1 !== r.indexOf(' ', i) ? r.indexOf(' ', i) : r.length),
                                t.setSelectionRange(n, a, 'forward'));
                        });
                })(),
                    (function () {
                        let u = null;
                        document.addEventListener('mousedown', (e) => {
                            document.getSelection().empty(),
                                0 !== e.button ||
                                    e.target.select ||
                                    u ||
                                    (u = document.caretPositionFromPoint(e.x, e.y));
                        }),
                            document.addEventListener('mousemove', (e) => {
                                if (0 === e.button && !e.target.select && u) {
                                    const t = document.caretPositionFromPoint(e.x, e.y);
                                    if (!t.offsetNode || !u.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(u.offsetNode, u.offset, t.offsetNode, t.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                u = null;
                            });
                    })();
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                var r = t(5067);
                class i {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = r.O.view.addModelObserver(u, t, i);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", u),
                            n
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
                        });
                    }
                }
                i.__instance = void 0;
                const n = i;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(u) {
                        this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data);
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (u, e, t) => {
                'use strict';
                t.d(e, { Sw: () => n.Z, B3: () => l, Z5: () => a, B0: () => _, ry: () => C });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                var n = t(1358);
                const a = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    s = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let _;
                var o;
                ((o = _ || (_ = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(5521),
                    D = t(5067);
                const m = ['args'];
                function d(u, e, t, r, i, n, a) {
                    try {
                        var s = u[n](a),
                            _ = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(_) : Promise.resolve(_).then(r, i);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (r, i) {
                                        var n = u.apply(e, t);
                                        function a(u) {
                                            d(n, r, i, a, s, 'next', u);
                                        }
                                        function s(u) {
                                            d(n, r, i, a, s, 'throw', u);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    h = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const i = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        i = {},
                                        n = Object.keys(u);
                                    for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (i[t] = u[t]);
                                    return i;
                                })(e, m);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    p = () => h(_.CLOSE),
                    g = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var b = t(7572);
                const v = i.instance,
                    x = {
                        DataTracker: n.Z,
                        ViewModel: b.Z,
                        ViewEventType: _,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: A,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => h(_.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => h(_.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            h(_.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, i = R.invalid('resId'), n) => {
                            const a = D.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                o = s.x,
                                l = s.y,
                                c = s.width,
                                E = s.height,
                                A = {
                                    x: D.O.view.pxToRem(o) + a.x,
                                    y: D.O.view.pxToRem(l) + a.y,
                                    width: D.O.view.pxToRem(c),
                                    height: D.O.view.pxToRem(E),
                                };
                            h(_.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: i,
                                direction: e,
                                bbox: B(A),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, p);
                        },
                        handleViewEvent: h,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(_.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(_.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(_.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const i = Object.prototype.toString.call(e[r]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < i.length; e++) t[r].push({ value: u(i[e].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: a,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = x;
            },
            9076: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    i = t.n(r),
                    n = t(493),
                    a = t.n(n);
                let s;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(s || (s = {}));
                const _ = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    o = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    l = (u, e, t = s.left) => u.split(e).reduce(t === s.left ? _ : o, []),
                    c = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    E = ['zh_cn', 'zh_sg', 'zh_tw'];
                let A;
                var F;
                ((F = A || (A = {})).SHORT_DATE = 'short-date'),
                    (F.SHORT_TIME = 'short-time'),
                    (F.SHORT_DATE_TIME = 'short-date-time'),
                    (F.FULL_DATE = 'full-date'),
                    (F.FULL_DATE_TIME = 'full-date-time'),
                    (F.MONTH = 'month'),
                    (F.MONTH_DATE = 'month-date'),
                    (F.DATE_MONTH = 'date-month'),
                    (F.MONTH_YEAR = 'month-year'),
                    (F.WEEK_DAY = 'week-day'),
                    (F.WEEK_DAY_TIME = 'week-day-time'),
                    (F.YEAR = 'year'),
                    (F.DATE_YEAR = 'date-year');
                var D = t(4179);
                function m(u) {
                    engine.call('PlaySound', u);
                }
                Date.now();
                var d = t(5067);
                const B = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            r = R.invalid('resId');
                        return (
                            e &&
                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (r = window.subViews[t].id)),
                            { caller: t, stack: e, resId: r }
                        );
                    },
                    C = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    h = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    p = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    g = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    b = D.Sw.instance;
                let v;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(v || (v = {}));
                const x = (u = 'model', e = v.Deep) => {
                    const t = (0, r.useState)(0),
                        i = (t[0], t[1]),
                        n = (0, r.useMemo)(() => B(), []),
                        a = n.caller,
                        s = n.resId,
                        _ = (0, r.useMemo)(
                            () => (window.__feature && window.__feature !== a ? `subViews.${a}.${u}` : u),
                            [a, u],
                        ),
                        o = (0, r.useState)(() =>
                            ((u) => {
                                const e = C(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return p(e) ? e.value : e;
                            })(
                                ((u) =>
                                    ((u, e) =>
                                        u.split('.').reduce((u, e) => {
                                            const t = C(`${u}.${e}`, window);
                                            return p(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                        }))(u))(_),
                            ),
                        ),
                        l = o[0],
                        c = o[1],
                        E = (0, r.useRef)(-1);
                    return (
                        h(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? v.Deep : v.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== v.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === v.Deep
                                            ? (u === l && i((u) => u + 1), c(u))
                                            : c(Object.assign([], u));
                                    },
                                    r = ((u) => {
                                        const e = ((u) => {
                                                const e = B(),
                                                    t = e.caller,
                                                    r = e.resId,
                                                    i =
                                                        window.__feature && window.__feature !== t && t
                                                            ? `subViews.${t}`
                                                            : '';
                                                return { modelPrefix: i, modelPath: g(i, ''), resId: r };
                                            })(),
                                            t = e.modelPrefix,
                                            r = u.split('.');
                                        if (r.length > 0) {
                                            const u = [r[0]];
                                            return (
                                                r.reduce((e, r) => {
                                                    const i = C(g(t, `${e}.${r}`), window);
                                                    return p(i)
                                                        ? (u.push(i.id), `${e}.${r}.value`)
                                                        : (u.push(r), `${e}.${r}`);
                                                }),
                                                u.reduce((u, e) => u + '.' + e)
                                            );
                                        }
                                        return '';
                                    })(u);
                                E.current = b.addCallback(r, t, s, e === v.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (e !== v.None)
                                return () => {
                                    b.removeCallback(E.current, s);
                                };
                        }, [s, e]),
                        l
                    );
                };
                D.Sw.instance;
                var f = t(6483),
                    S = t.n(f);
                let w, y, M;
                !(function (u) {
                    (u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge');
                })(w || (w = {})),
                    (function (u) {
                        (u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.equipCoin = 'equipCoin');
                    })(y || (y = {})),
                    (function (u) {
                        (u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG');
                    })(M || (M = {}));
                class N extends i().PureComponent {
                    render() {
                        let u;
                        u = 'gold' === this.props.format ? D.B3.GOLD : D.B3.INTEGRAL;
                        const e = D.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                N.defaultProps = { format: 'integral' };
                const L = {
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
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    },
                    P = ({
                        isDiscount: u,
                        isInteractiveDiscount: e,
                        size: t,
                        type: r,
                        isEnough: n,
                        value: a,
                        discountValue: s,
                        showPlus: _,
                        stockBackgroundName: o = M.Red,
                    }) => {
                        const l = S()(L.value, L[`value__${r}`], !n && L.value__notEnough),
                            c = S()(L.icon, L[`icon__${r}-${t}`]),
                            E = S()(L.stock, s && L.stock__indent, e && L.stock__interactive),
                            A = _ && a > 0 && '+',
                            F = S()(L.base, L[`base__${t}`]);
                        return i().createElement(
                            'span',
                            { className: F },
                            i().createElement(
                                'span',
                                { className: l },
                                A,
                                i().createElement(N, { value: a, format: r === y.gold ? 'gold' : 'integral' }),
                            ),
                            i().createElement('span', { className: c }),
                            u &&
                                i().createElement(
                                    'span',
                                    { className: E },
                                    i().createElement('span', {
                                        className: L.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${o})` },
                                    }),
                                    Boolean(s) && s,
                                ),
                        );
                    };
                P.defaultProps = { isEnough: !0 };
                const O = i().memo(P),
                    T = [
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
                function H(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const I = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: D.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    k = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            i = u.args,
                            n = u.onMouseEnter,
                            a = u.onMouseLeave,
                            s = u.onMouseDown,
                            _ = u.onClick,
                            o = u.ignoreShowDelay,
                            l = void 0 !== o && o,
                            c = u.ignoreMouseClick,
                            E = void 0 !== c && c,
                            A = u.decoratorId,
                            F = void 0 === A ? 0 : A,
                            D = u.isEnabled,
                            m = void 0 === D || D,
                            d = u.targetId,
                            C = void 0 === d ? 0 : d,
                            h = u.onShow,
                            p = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    i = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (i[t] = u[t]);
                                return i;
                            })(u, T);
                        const b = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, r.useMemo)(() => C || B().resId, [C]),
                            x = (0, r.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (I(t, F, { isMouseEvent: !0, on: !0, arguments: H(i) }, v),
                                    h && h(),
                                    (b.current.isVisible = !0));
                            }, [t, F, i, v, h]),
                            f = (0, r.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const u = b.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (b.current.timeoutId = 0)),
                                        I(t, F, { on: !1 }, v),
                                        b.current.isVisible && p && p(),
                                        (b.current.isVisible = !1);
                                }
                            }, [t, F, v, p]),
                            S = (0, r.useCallback)((u) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(b.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const u = b.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', S, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', S, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === m && f();
                            }, [m, f]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            ),
                            m
                                ? (0, r.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((b.current.timeoutId = window.setTimeout(x, l ? 100 : 400)),
                                                          n && n(u),
                                                          w && w(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  f(), null == a || a(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === E && f(), null == _ || _(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === E && f(), null == s || s(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          g,
                                      ),
                                  )
                                : e
                        );
                        var w;
                    };
                var U = t(9887),
                    W = t.n(U);
                const z = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    G = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var V;
                function X(u, e, t) {
                    const r = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, t),
                        i = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, t),
                        n = Math.min(r, i);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: i === t.extraLarge.weight,
                        largeHeight: i === t.large.weight,
                        mediumHeight: i === t.medium.weight,
                        smallHeight: i === t.small.weight,
                        extraSmallHeight: i === t.extraSmall.weight,
                    };
                }
                !(function (u) {
                    (u.extraLarge = 'extraLarge'),
                        (u.large = 'large'),
                        (u.medium = 'medium'),
                        (u.small = 'small'),
                        (u.extraSmall = 'extraSmall'),
                        (u.extraLargeWidth = 'extraLargeWidth'),
                        (u.largeWidth = 'largeWidth'),
                        (u.mediumWidth = 'mediumWidth'),
                        (u.smallWidth = 'smallWidth'),
                        (u.extraSmallWidth = 'extraSmallWidth'),
                        (u.extraLargeHeight = 'extraLargeHeight'),
                        (u.largeHeight = 'largeHeight'),
                        (u.mediumHeight = 'mediumHeight'),
                        (u.smallHeight = 'smallHeight'),
                        (u.extraSmallHeight = 'extraSmallHeight');
                })(V || (V = {}));
                const K = d.O.client.getSize('rem'),
                    j = K.width,
                    $ = K.height,
                    q = Object.assign({ width: j, height: $ }, X(j, $, G)),
                    Y = (0, r.createContext)(q),
                    Z = ['children'],
                    Q = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    i = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (i[t] = u[t]);
                                return i;
                            })(u, Z);
                        const i = (0, r.useContext)(Y),
                            n = i.extraLarge,
                            a = i.large,
                            s = i.medium,
                            _ = i.small,
                            o = i.extraSmall,
                            l = i.extraLargeWidth,
                            c = i.largeWidth,
                            E = i.mediumWidth,
                            A = i.smallWidth,
                            F = i.extraSmallWidth,
                            D = i.extraLargeHeight,
                            m = i.largeHeight,
                            d = i.mediumHeight,
                            B = i.smallHeight,
                            C = i.extraSmallHeight,
                            h = { extraLarge: D, large: m, medium: d, small: B, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return e;
                            if (t.large && a) return e;
                            if (t.medium && s) return e;
                            if (t.small && _) return e;
                            if (t.extraSmall && o) return e;
                        } else {
                            if (t.extraLargeWidth && l) return z(e, t, h);
                            if (t.largeWidth && c) return z(e, t, h);
                            if (t.mediumWidth && E) return z(e, t, h);
                            if (t.smallWidth && A) return z(e, t, h);
                            if (t.extraSmallWidth && F) return z(e, t, h);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && D) return e;
                                if (t.largeHeight && m) return e;
                                if (t.mediumHeight && d) return e;
                                if (t.smallHeight && B) return e;
                                if (t.extraSmallHeight && C) return e;
                            }
                        }
                        return null;
                    };
                let J, uu, eu;
                (Q.defaultProps = {
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
                    (0, r.memo)(Q),
                    (0, r.memo)(({ children: u }) => {
                        const e = (0, r.useContext)(Y),
                            t = (0, r.useState)(e),
                            n = t[0],
                            a = t[1],
                            s = (0, r.useCallback)((u, e) => {
                                const t = d.O.view.pxToRem(u),
                                    r = d.O.view.pxToRem(e);
                                a(Object.assign({ width: t, height: r }, X(t, r, G)));
                            }, []);
                        h(() => {
                            engine.on('clientResized', s);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', s), [s]);
                        const _ = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return i().createElement(Y.Provider, { value: _ }, u);
                    }),
                    (function (u) {
                        (u[(u.ExtraSmall = G.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = G.small.width)] = 'Small'),
                            (u[(u.Medium = G.medium.width)] = 'Medium'),
                            (u[(u.Large = G.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = G.extraLarge.width)] = 'ExtraLarge');
                    })(J || (J = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = G.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = G.small.width)] = 'Small'),
                            (u[(u.Medium = G.medium.width)] = 'Medium'),
                            (u[(u.Large = G.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = G.extraLarge.width)] = 'ExtraLarge');
                    })(uu || (uu = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = G.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = G.small.height)] = 'Small'),
                            (u[(u.Medium = G.medium.height)] = 'Medium'),
                            (u[(u.Large = G.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = G.extraLarge.height)] = 'ExtraLarge');
                    })(eu || (eu = {}));
                const tu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    ru = (u) => u.includes('_') && ((u) => tu.includes(u))(u.split('_').at(-1)),
                    iu = [J.ExtraLarge, J.Large, J.Medium, J.Small, J.ExtraSmall],
                    nu = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if (ru(r)) {
                                const i = r.split('_').slice(0, -1).join('_');
                                if (i in t) return t;
                                const n = iu.indexOf(e),
                                    a = (-1 !== n ? tu.slice(n) : [])
                                        .map((u) => i + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    s = a ? u[a] : void 0;
                                return (t[i] = void 0 !== s ? s : u[i]), t;
                            }
                            const i = u[r];
                            return (
                                void 0 === i ||
                                    ((u, e) => tu.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = i),
                                t
                            );
                        }, {}),
                    au = (u, e = nu) => {
                        const t = (
                            (u, e = nu) =>
                            (t) => {
                                const n = (() => {
                                        const u = (0, r.useContext)(Y),
                                            e = u.width,
                                            t = u.height,
                                            i = ((u) => {
                                                switch (!0) {
                                                    case u.extraLarge:
                                                        return J.ExtraLarge;
                                                    case u.large:
                                                        return J.Large;
                                                    case u.medium:
                                                        return J.Medium;
                                                    case u.small:
                                                        return J.Small;
                                                    case u.extraSmall:
                                                        return J.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            J.ExtraSmall
                                                        );
                                                }
                                            })(u),
                                            n = ((u) => {
                                                switch (!0) {
                                                    case u.extraLargeWidth:
                                                        return uu.ExtraLarge;
                                                    case u.largeWidth:
                                                        return uu.Large;
                                                    case u.mediumWidth:
                                                        return uu.Medium;
                                                    case u.smallWidth:
                                                        return uu.Small;
                                                    case u.extraSmallWidth:
                                                        return uu.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            uu.ExtraSmall
                                                        );
                                                }
                                            })(u),
                                            a = ((u) => {
                                                switch (!0) {
                                                    case u.extraLargeHeight:
                                                        return eu.ExtraLarge;
                                                    case u.largeHeight:
                                                        return eu.Large;
                                                    case u.mediumHeight:
                                                        return eu.Medium;
                                                    case u.smallHeight:
                                                        return eu.Small;
                                                    case u.extraSmallHeight:
                                                        return eu.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            eu.ExtraSmall
                                                        );
                                                }
                                            })(u);
                                        return {
                                            mediaSize: i,
                                            mediaWidth: n,
                                            mediaHeight: a,
                                            remScreenWidth: e,
                                            remScreenHeight: t,
                                        };
                                    })().mediaSize,
                                    a = (0, r.useMemo)(() => e(t, n), [t, n]);
                                return i().createElement(u, a);
                            }
                        )(u, e);
                        return i().memo((e) =>
                            Object.keys(e).some((u) => ru(u) && void 0 !== e[u])
                                ? i().createElement(t, e)
                                : i().createElement(u, e),
                        );
                    },
                    su = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    _u = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function ou() {
                    return (
                        (ou =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        ou.apply(this, arguments)
                    );
                }
                Object.keys(W());
                const lu = {
                        XL: { mt: su.mt__XL, mr: su.mr__XL, mb: su.mb__XL, ml: su.ml__XL },
                        LG: { mt: su.mt__LG, mr: su.mr__LG, mb: su.mb__LG, ml: su.ml__LG },
                        MDp: { mt: su.mt__MDp, mr: su.mr__MDp, mb: su.mb__MDp, ml: su.ml__MDp },
                        MD: { mt: su.mt__MD, mr: su.mr__MD, mb: su.mb__MD, ml: su.ml__MD },
                        SMp: { mt: su.mt__SMp, mr: su.mr__SMp, mb: su.mb__SMp, ml: su.ml__SMp },
                        SM: { mt: su.mt__SM, mr: su.mr__SM, mb: su.mb__SM, ml: su.ml__SM },
                        XS: { mt: su.mt__XS, mr: su.mr__XS, mb: su.mb__XS, ml: su.ml__XS },
                    },
                    cu = (Object.keys(lu), ['mt', 'mr', 'mb', 'ml']),
                    Eu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Au = au((u) => {
                        let e = u.className,
                            t = u.width,
                            n = u.height,
                            a = u.m,
                            s = u.mt,
                            _ = void 0 === s ? a : s,
                            o = u.mr,
                            l = void 0 === o ? a : o,
                            c = u.mb,
                            E = void 0 === c ? a : c,
                            A = u.ml,
                            F = void 0 === A ? a : A,
                            D = u.column,
                            m = u.row,
                            d = u.flexDirection,
                            B = void 0 === d ? (D ? 'column' : m && 'row') || void 0 : d,
                            C = u.flexStart,
                            h = u.center,
                            p = u.flexEnd,
                            g = u.spaceBetween,
                            b = u.spaceAround,
                            v = u.justifyContent,
                            x =
                                void 0 === v
                                    ? (C ? 'flex-start' : h && 'center') ||
                                      (p && 'flex-end') ||
                                      (g && 'space-between') ||
                                      (b && 'space-around') ||
                                      void 0
                                    : v,
                            f = u.alignItems,
                            w = void 0 === f ? (C ? 'flex-start' : h && 'center') || (p && 'flex-end') || void 0 : f,
                            y = u.alignSelf,
                            M = u.wrap,
                            N = u.flexWrap,
                            L = void 0 === N ? (M ? 'wrap' : void 0) : N,
                            P = u.grow,
                            O = u.shrink,
                            T = u.flex,
                            H = void 0 === T ? (P || O ? `${P ? 1 : 0} ${O ? 1 : 0} auto` : void 0) : T,
                            R = u.style,
                            I = u.children,
                            k = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    i = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (i[t] = u[t]);
                                return i;
                            })(u, _u);
                        const U = (0, r.useMemo)(() => {
                                const u = { mt: _, mr: l, mb: E, ml: F },
                                    e = ((u) =>
                                        cu.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(lu[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    r = ((u) =>
                                        cu.reduce((e, t) => {
                                            const r = u[t];
                                            return 'number' == typeof r && (e[Eu[t]] = r + 'rem'), e;
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, R, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: H,
                                        alignSelf: y,
                                        display: B || w ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: L,
                                        justifyContent: x,
                                        alignItems: w,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, n, _, l, E, F, R, H, y, B, L, x, w]),
                            W = U.computedStyle,
                            z = U.computedClassNames;
                        return i().createElement('div', ou({ className: S()(su.base, ...z, e), style: W }, k), I);
                    }),
                    Fu = ({ binding: u, text: e = '', classMix: t, alignment: n = s.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : i().createElement(
                                  r.Fragment,
                                  null,
                                  e.split('\n').map((e, a) =>
                                      i().createElement(
                                          'div',
                                          { className: S()('FormatText_base_d0', t), key: `${e}-${a}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = s.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return E.includes(t)
                                                                ? c(u)
                                                                : ((u, e = s.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          i = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          l(i, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(l(u, r, s.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(u, e);
                                                        })(u, e),
                                              ))(e, n, u).map((u, e) =>
                                              i().createElement(r.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var Du = t(3532),
                    mu = t.n(Du);
                const du = {
                        'paragraph-P10': 'Text_paragraph-P10_2c',
                        'paragraph-P12': 'Text_paragraph-P12_22',
                        'paragraph-P14': 'Text_paragraph-P14_a7',
                        'paragraph-P16': 'Text_paragraph-P16_90',
                        'paragraph-P18': 'Text_paragraph-P18_50',
                        'paragraph-P24': 'Text_paragraph-P24_33',
                        'heading-H14': 'Text_heading-H14_8b',
                        'heading-H15': 'Text_heading-H15_9e',
                        'heading-H18': 'Text_heading-H18_b7',
                        'heading-H20R': 'Text_heading-H20R_f6',
                        'heading-H22': 'Text_heading-H22_27',
                        'heading-H24R': 'Text_heading-H24R_be',
                        'heading-H24': 'Text_heading-H24_0c',
                        'heading-H28': 'Text_heading-H28_78',
                        'heading-H36': 'Text_heading-H36_32',
                        'heading-H56': 'Text_heading-H56_c3',
                        'heading-H73': 'Text_heading-H73_8f',
                        'heading-H144': 'Text_heading-H144_a9',
                        BLACK_REAL: 'Text_BLACK_REAL_30',
                        WHITE_REAL: 'Text_WHITE_REAL_bc',
                        WHITE: 'Text_WHITE_62',
                        WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                        WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                        PAR: 'Text_PAR_15',
                        PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                        PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                        INFO_RED: 'Text_INFO_RED_30',
                        RED: 'Text_RED_66',
                        RED_DARK: 'Text_RED_DARK_d8',
                        YELLOW: 'Text_YELLOW_ed',
                        ORANGE: 'Text_ORANGE_be',
                        CREAM: 'Text_CREAM_57',
                        BROWN: 'Text_BROWN_18',
                        GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                        GREEN: 'Text_GREEN_e3',
                        GREEN_DARK: 'Text_GREEN_DARK_f1',
                        BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                        BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                        CRED: 'Text_CRED_f7',
                        GOLD: 'Text_GOLD_28',
                        BOND: 'Text_BOND_be',
                        PROM: 'Text_PROM_65',
                    },
                    Bu = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                Object.keys(W());
                const hu = Object.keys(mu()),
                    pu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    gu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    bu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    vu =
                        (Object.keys({
                            XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                            LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                            MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                            MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                            SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                            SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                            XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                        }),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': pu,
                            'heading-H36': pu,
                            'heading-H28': gu,
                            'heading-H24': gu,
                            'heading-H24R': gu,
                            'heading-H22': gu,
                            'heading-H20R': gu,
                            'heading-H18': gu,
                            'heading-H15': bu,
                            'heading-H14': bu,
                            'paragraph-P24': gu,
                            'paragraph-P18': gu,
                            'paragraph-P16': gu,
                            'paragraph-P14': bu,
                            'paragraph-P12': bu,
                            'paragraph-P10': bu,
                        }),
                    xu =
                        (Object.keys(vu),
                        (u) =>
                            u
                                ? ((u) => hu.includes(u))(u)
                                    ? { colorClassName: du[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    fu = au((u) => {
                        let e = u.text,
                            t = u.variant,
                            n = u.className,
                            a = u.color,
                            s = u.m,
                            _ = u.mt,
                            o = void 0 === _ ? s : _,
                            l = u.mr,
                            c = void 0 === l ? s : l,
                            E = u.mb,
                            A = void 0 === E ? s : E,
                            F = u.ml,
                            D = void 0 === F ? s : F,
                            m = u.style,
                            d = u.format,
                            B = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    i = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (i[t] = u[t]);
                                return i;
                            })(u, Bu);
                        const C = (0, r.useMemo)(() => {
                                const u = xu(a),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, m, r), colorClassName: e };
                            }, [m, a]),
                            h = C.computedStyle,
                            p = C.colorClassName;
                        return i().createElement(
                            Au,
                            Cu(
                                {
                                    className: S()(du.base, t && du[t], p, n),
                                    style: h,
                                    mt: !0 === o ? vu[t || 'paragraph-P16'].mt : o,
                                    mr: !0 === c ? vu[t || 'paragraph-P16'].mr : c,
                                    mb: !0 === A ? vu[t || 'paragraph-P16'].mb : A,
                                    ml: !0 === D ? vu[t || 'paragraph-P16'].ml : D,
                                },
                                B,
                            ),
                            void 0 !== d ? i().createElement(Fu, Cu({}, d, { text: e })) : e,
                        );
                    }),
                    Su = {
                        base: 'HBCoin_base_d8',
                        label__defence: 'HBCoin_label__defence_a3',
                        label__counterattack: 'HBCoin_label__counterattack_e6',
                        label__offence: 'HBCoin_label__offence_3e',
                        label__counterattackGlow: 'HBCoin_label__counterattackGlow_e3',
                        label__offenceGlow: 'HBCoin_label__offenceGlow_7c',
                        label__defenceGlow: 'HBCoin_label__defenceGlow_78',
                        label: 'HBCoin_label_7f',
                        label__animated: 'HBCoin_label__animated_82',
                        label__notEnough: 'HBCoin_label__notEnough_0e',
                        label__sizeP14: 'HBCoin_label__sizeP14_c0',
                        label__sizeH15: 'HBCoin_label__sizeH15_73',
                        label__sizeH18: 'HBCoin_label__sizeH18_f6',
                        label__sizeH22: 'HBCoin_label__sizeH22_9c',
                        label__sizeH24: 'HBCoin_label__sizeH24_b0',
                        label__sizeH28: 'HBCoin_label__sizeH28_6d',
                        label__sizeH36: 'HBCoin_label__sizeH36_10',
                        label__sizeH42: 'HBCoin_label__sizeH42_4f',
                        label__sizeH56: 'HBCoin_label__sizeH56_88',
                        label__sizeH73: 'HBCoin_label__sizeH73_c1',
                        label__progression: 'HBCoin_label__progression_08',
                        icon: 'HBCoin_icon_27',
                        icon__animated: 'HBCoin_icon__animated_17',
                        icon__size16x16: 'HBCoin_icon__size16x16_6b',
                        icon__size24x24: 'HBCoin_icon__size24x24_35',
                        icon__size32x32: 'HBCoin_icon__size32x32_70',
                        icon__size48x48: 'HBCoin_icon__size48x48_42',
                        icon__size134x134: 'HBCoin_icon__size134x134_4d',
                        stockBg: 'HBCoin_stockBg_25',
                        stockBg__sizeH18: 'HBCoin_stockBg__sizeH18_9b',
                        stockBg__sizeH22: 'HBCoin_stockBg__sizeH22_5a',
                    };
                let wu, yu;
                !(function (u) {
                    (u.P14 = 'P14'),
                        (u.H15 = 'H15'),
                        (u.H18 = 'H18'),
                        (u.H22 = 'H22'),
                        (u.H24 = 'H24'),
                        (u.H28 = 'H28'),
                        (u.H36 = 'H36'),
                        (u.H42 = 'H42'),
                        (u.H56 = 'H56'),
                        (u.H73 = 'H73');
                })(wu || (wu = {})),
                    (function (u) {
                        (u.C16x16 = '16x16'),
                            (u.C24x24 = '24x24'),
                            (u.C32x32 = '32x32'),
                            (u.C48x48 = '48x48'),
                            (u.C134x134 = '134x134');
                    })(yu || (yu = {}));
                const Mu = (0, r.memo)(
                        ({
                            amount: u,
                            type: e,
                            iconSize: t,
                            labelSize: n,
                            isEnough: a = !0,
                            isHighlighted: s = !1,
                            isAmountVisible: _ = !0,
                            isDiscount: o = !1,
                            isAnimated: l = !1,
                            isProgression: c = !1,
                            classMix: E,
                        }) => {
                            const A = D.Z5.getNumberFormat(u, D.B3.GOLD),
                                F = (0, r.useMemo)(
                                    () => ({
                                        backgroundImage: `url('${R.images.historical_battles.gui.maps.icons.hbCoin.$dyn(`c_${t}`).$dyn(e)}')`,
                                    }),
                                    [e, t],
                                ),
                                m = S()(Su.base, E),
                                d = S()(
                                    Su.label,
                                    Su[`label__${e}`],
                                    Su[`label__size${n}`],
                                    s && Su[`label__${e}Glow`],
                                    !a && Su.label__notEnough,
                                    l && Su.label__animated,
                                    c && Su.label__progression,
                                ),
                                B = S()(Su.icon, Su[`icon__size${t}`], l && Su.icon__animated),
                                C = S()(Su.stockBg, Su[`stockBg__size${n}`]);
                            return i().createElement(
                                'div',
                                { className: m },
                                _ && i().createElement(fu, { text: A, className: d }),
                                i().createElement('div', { className: B, style: F }),
                                o && i().createElement('div', { className: C }),
                            );
                        },
                    ),
                    Nu = {
                        base: 'SimplePrice_base_41',
                        oldPrice: 'SimplePrice_oldPrice_bf',
                        oldPrice__small: 'SimplePrice_oldPrice__small_79',
                        line: 'SimplePrice_line_e0',
                    };
                function Lu() {
                    return (
                        (Lu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Lu.apply(this, arguments)
                    );
                }
                let Pu, Ou;
                !(function (u) {
                    (u.Tiny = 'tiny'), (u.Small = 'small'), (u.Big = 'big'), (u.ExtraBig = 'extraBig');
                })(Pu || (Pu = {})),
                    (function (u) {
                        (u.Credits = 'credits'), (u.Gold = 'gold'), (u.Crystal = 'crystal');
                    })(Ou || (Ou = {}));
                const Tu = [Ou.Credits, Ou.Crystal, Ou.Gold],
                    Hu = {
                        [Pu.Tiny]: { iconSize: yu.C16x16, labelSize: wu.P14 },
                        [Pu.Small]: { iconSize: yu.C16x16, labelSize: wu.H18 },
                        [Pu.Big]: { iconSize: yu.C24x24, labelSize: wu.H22 },
                        [Pu.ExtraBig]: { iconSize: yu.C24x24, labelSize: wu.H28 },
                    },
                    Ru = i().memo(
                        ({
                            type: u,
                            discount: e,
                            isEnough: t,
                            isDiscount: n,
                            value: a,
                            oldValue: s,
                            size: _ = Pu.Small,
                        }) => {
                            const o = ((u) => {
                                    switch (u) {
                                        case Pu.Tiny:
                                        case Pu.Small:
                                            return w.small;
                                        case Pu.Big:
                                        case Pu.ExtraBig:
                                            return w.big;
                                    }
                                })(_),
                                l = (0, r.useMemo)(
                                    () => ({
                                        contentId: R.views.historical_battles.lobby.tooltips.HbCoinTooltip('resId'),
                                        args: { coinType: u, itemPrice: a },
                                    }),
                                    [u, a],
                                ),
                                c = u in Tu,
                                E = S()(Nu.oldPrice, Nu[`oldPrice__${_}`]);
                            return i().createElement(
                                'div',
                                { className: Nu.base },
                                n &&
                                    Boolean(s) &&
                                    i().createElement(
                                        'div',
                                        { className: E },
                                        D.Z5.getNumberFormat(s, D.B3.INTEGRAL),
                                        i().createElement('div', { className: Nu.line }),
                                    ),
                                c
                                    ? i().createElement(O, {
                                          size: o,
                                          type: u,
                                          discountValue: e,
                                          isEnough: t,
                                          isDiscount: n,
                                          value: a,
                                      })
                                    : i().createElement(
                                          k,
                                          l,
                                          i().createElement(
                                              'div',
                                              null,
                                              i().createElement(
                                                  Mu,
                                                  Lu({ type: u, amount: a }, Hu[_], { isDiscount: n, isEnough: t }),
                                              ),
                                          ),
                                      ),
                            );
                        },
                    ),
                    Iu = {
                        base: 'MultiPrice_base_a0',
                        plus: 'MultiPrice_plus_cb',
                        plus__tiny: 'MultiPrice_plus__tiny_1a',
                        plus__small: 'MultiPrice_plus__small_5a',
                        plus__big: 'MultiPrice_plus__big_21',
                        item: 'MultiPrice_item_62',
                    };
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                let Uu;
                !(function (u) {
                    (u.Tiny = 'tiny'), (u.Small = 'small'), (u.Big = 'big'), (u.ExtraBig = 'extraBig');
                })(Uu || (Uu = {}));
                const Wu = ({ prices: u, classMix: e, wallet: t, size: n = Uu.Big }) => {
                    const a = (0, r.useCallback)(
                        (u) => {
                            if (!t) return u.isEnough;
                            const e = t.filter((e) => e.value.type === u.type)[0];
                            return !e || e.value.count >= u.value;
                        },
                        [t],
                    );
                    if (!u || 0 === u.length) return null;
                    const s = S()(Iu.base, e),
                        _ = S()(Iu.plus, Iu[`plus__${n}`]);
                    return i().createElement(
                        'div',
                        { className: s },
                        u &&
                            u.map((e, t) => {
                                if (e)
                                    return i().createElement(
                                        'div',
                                        { key: `${e.value.type}_${t}`, className: Iu.item },
                                        i().createElement(Ru, ku({}, e.value, { isEnough: a(e.value), size: n })),
                                        u.length !== t + 1 && i().createElement('div', { className: _ }),
                                    );
                            }),
                    );
                };
                t(3368);
                var zu = t(5521);
                let Gu;
                !(function (u) {
                    (u[(u.ZERO = 48)] = 'ZERO'),
                        (u[(u.ONE = 49)] = 'ONE'),
                        (u[(u.TWO = 50)] = 'TWO'),
                        (u[(u.THREE = 51)] = 'THREE'),
                        (u[(u.FOUR = 52)] = 'FOUR'),
                        (u[(u.FIVE = 53)] = 'FIVE'),
                        (u[(u.SIX = 54)] = 'SIX'),
                        (u[(u.SEVEN = 55)] = 'SEVEN'),
                        (u[(u.EIGHT = 56)] = 'EIGHT'),
                        (u[(u.NINE = 57)] = 'NINE'),
                        (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                        (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                        (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                        (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                        (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                        (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                        (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                        (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                        (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                        (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9');
                })(Gu || (Gu = {}));
                const Vu = {
                    base: 'NumericStepper_base_09',
                    base__small: 'NumericStepper_base__small_46',
                    base__medium: 'NumericStepper_base__medium_7e',
                    base__large: 'NumericStepper_base__large_53',
                    base__isFocus: 'NumericStepper_base__isFocus_fd',
                    base__isDisabled: 'NumericStepper_base__isDisabled_0e',
                    inputContainer: 'NumericStepper_inputContainer_06',
                    input: 'NumericStepper_input_37',
                    'base__withCurrency-small': 'NumericStepper_base__withCurrency-small_42',
                    'base__withCurrency-medium': 'NumericStepper_base__withCurrency-medium_a0',
                    'base__withCurrency-large': 'NumericStepper_base__withCurrency-large_a6',
                    input__disabled: 'NumericStepper_input__disabled_f6',
                    input__credits: 'NumericStepper_input__credits_d7',
                    'input__credits-disabled': 'NumericStepper_input__credits-disabled_95',
                    input__gold: 'NumericStepper_input__gold_37',
                    'input__gold-disabled': 'NumericStepper_input__gold-disabled_f7',
                    input__xp: 'NumericStepper_input__xp_5d',
                    input__freeXP: 'NumericStepper_input__freeXP_1f',
                    input__crystal: 'NumericStepper_input__crystal_e1',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_0e',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_c5',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_5e',
                    input__withCurrency: 'NumericStepper_input__withCurrency_ea',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_81',
                    'input__xp-large': 'NumericStepper_input__xp-large_27',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_50',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_c0',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_b8',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_a3',
                    currency: 'NumericStepper_currency_78',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_39',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_63',
                    'currency__freeXP-medium': 'NumericStepper_currency__freeXP-medium_6f',
                    'currency__freeXP-large': 'NumericStepper_currency__freeXP-large_7d',
                    'currency__crystal-medium': 'NumericStepper_currency__crystal-medium_71',
                    'currency__crystal-large': 'NumericStepper_currency__crystal-large_6c',
                    currencyIcon: 'NumericStepper_currencyIcon_5c',
                    'currencyIcon__credits-small': 'NumericStepper_currencyIcon__credits-small_8e',
                    'currencyIcon__credits-medium': 'NumericStepper_currencyIcon__credits-medium_4b',
                    'currencyIcon__credits-large': 'NumericStepper_currencyIcon__credits-large_7e',
                    'currencyIcon__gold-small': 'NumericStepper_currencyIcon__gold-small_6e',
                    'currencyIcon__gold-medium': 'NumericStepper_currencyIcon__gold-medium_27',
                    'currencyIcon__gold-large': 'NumericStepper_currencyIcon__gold-large_ec',
                    'currencyIcon__crystal-small': 'NumericStepper_currencyIcon__crystal-small_24',
                    'currencyIcon__crystal-medium': 'NumericStepper_currencyIcon__crystal-medium_4b',
                    'currencyIcon__crystal-large': 'NumericStepper_currencyIcon__crystal-large_4e',
                    'currencyIcon__freeXP-small': 'NumericStepper_currencyIcon__freeXP-small_06',
                    'currencyIcon__freeXP-medium': 'NumericStepper_currencyIcon__freeXP-medium_56',
                    'currencyIcon__freeXP-large': 'NumericStepper_currencyIcon__freeXP-large_53',
                    'currencyIcon__xp-small': 'NumericStepper_currencyIcon__xp-small_35',
                    'currencyIcon__xp-medium': 'NumericStepper_currencyIcon__xp-medium_ee',
                    'currencyIcon__xp-large': 'NumericStepper_currencyIcon__xp-large_f2',
                    dummyValue: 'NumericStepper_dummyValue_15',
                    control: 'NumericStepper_control_90',
                    buttonIncrement: 'NumericStepper_buttonIncrement_5c',
                    buttonDecrement: 'NumericStepper_buttonDecrement_4b',
                    buttonIncrement__small: 'NumericStepper_buttonIncrement__small_0d',
                    buttonDecrement__small: 'NumericStepper_buttonDecrement__small_2e',
                    buttonIncrement__medium: 'NumericStepper_buttonIncrement__medium_d2',
                    buttonDecrement__medium: 'NumericStepper_buttonDecrement__medium_ce',
                    buttonIncrement__large: 'NumericStepper_buttonIncrement__large_67',
                    buttonDecrement__large: 'NumericStepper_buttonDecrement__large_de',
                    buttonIncrement__isDisabled: 'NumericStepper_buttonIncrement__isDisabled_07',
                    buttonDecrement__isDisabled: 'NumericStepper_buttonDecrement__isDisabled_a5',
                    'buttonIncrement__isActive-small': 'NumericStepper_buttonIncrement__isActive-small_f5',
                    'buttonIncrement__isActive-medium': 'NumericStepper_buttonIncrement__isActive-medium_7d',
                    'buttonIncrement__isActive-large': 'NumericStepper_buttonIncrement__isActive-large_ec',
                    'buttonDecrement__isActive-small': 'NumericStepper_buttonDecrement__isActive-small_c7',
                    'buttonDecrement__isActive-medium': 'NumericStepper_buttonDecrement__isActive-medium_45',
                    'buttonDecrement__isActive-large': 'NumericStepper_buttonDecrement__isActive-large_2c',
                };
                class Xu extends i().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.timer = null),
                            (this.validationTimer = null),
                            (this.numericalStepper = (0, r.createRef)()),
                            (this.input = (0, r.createRef)()),
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
                                        const u = this.formattedValue.length;
                                        this.input.current && this.input.current.setSelectionRange(u, u);
                                    }, 0)),
                                    document.addEventListener('click', this.handleClickOutside),
                                    document.addEventListener('mouseup', this.handleMouseUp);
                            }),
                            (this.componentWillUnmount = () => {
                                this.stop(),
                                    document.removeEventListener('click', this.handleClickOutside),
                                    document.removeEventListener('mouseup', this.handleMouseUp);
                            }),
                            (this.formatValue = (u) =>
                                this.props.currencyType ? D.Z5.getNumberFormat(u, D.B3.GOLD) : u.toString()),
                            (this.getValidValue = (u) => {
                                const e = Math.min(this.props.maximum, Math.max(this.props.minimum, u)),
                                    t = this.props.stepSize;
                                return Math.round(e / t) * t;
                            }),
                            (this.changeValue = (u) => {
                                u !== this.state.value && (this.setState({ value: u }), this.props.onChange(u));
                            }),
                            (this.setCursorPosition = (u, e) => {
                                this.input.current && this.input.current.setSelectionRange(u, e),
                                    setTimeout(() => {
                                        this.input.current && this.input.current.setSelectionRange(u, e);
                                    });
                            }),
                            (this.handleChange = () => {
                                this.props.isDisabled || this.updateInput();
                            }),
                            (this.updateInput = (u = 0) => {
                                const e = u === zu.n.BACKSPACE,
                                    t = u === zu.n.DELETE,
                                    r = this.input.current,
                                    i = r.selectionStart || 0,
                                    n = r.selectionEnd || 0;
                                let a = r.value;
                                const s = Math.max(i, n),
                                    _ = s;
                                t && (a = a.substring(0, s) + a.substring(s + 1, a.length)),
                                    e && 1 === i && 1 === a.length && (a = '0');
                                const o = Number(a.trim().replace(/\D/g, '')),
                                    l = Number.isSafeInteger(o) ? o : Number.MAX_SAFE_INTEGER,
                                    c = this.props.currencyType ? D.Z5.getNumberFormat(l, D.B3.GOLD) : l.toString();
                                r.value = c;
                                const E = new RegExp(/\d/g);
                                let A = 0;
                                for (let u = 0; u < _; u++) {
                                    const e = a[u] || '',
                                        t = c[A] || '';
                                    if (e.match(E) || e === t) {
                                        for (; e !== c[A] && A < c.length; ) A++;
                                        A++;
                                    }
                                }
                                '' === a && (A = 1),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(A, A),
                                    this.changeValue(l),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        this.getValidValue(l) !== l &&
                                            this.state.isFocused &&
                                            (this.changeValue(this.getValidValue(l)),
                                            this.setCursorPosition(0, this.formatValue(l).length));
                                    }, 1e3));
                            }),
                            (this.handleDelete = (u) => {
                                const e = u.keyCode === zu.n.BACKSPACE,
                                    t = u.keyCode === zu.n.DELETE,
                                    r = u.target,
                                    i = r.selectionStart,
                                    n = r.selectionEnd,
                                    a = r.value,
                                    s = i !== n,
                                    _ = new RegExp(/\D/),
                                    o = e && i ? i - 1 : i || 0;
                                if (s) return;
                                let l = o;
                                const c = _.test(a[o]);
                                if (t && c) for (; _.test(a[l]) && l < a.length; ) l++;
                                if (e && c) for (; _.test(a[l]) && l > 0; ) l--;
                                if (l !== o || (e && c))
                                    return u.preventDefault(), (l = l < 0 ? 0 : l), void this.setCursorPosition(l, l);
                                ((e && 1 === i && 1 === a.length) || t) &&
                                    (u.preventDefault(), this.updateInput(u.keyCode));
                            }),
                            (this.handleClickOutside = (u) => {
                                const e = document.activeElement;
                                this.state.isFocused &&
                                    e !== this.input.current &&
                                    null !== this.numericalStepper.current &&
                                    !this.numericalStepper.current.contains(u.target) &&
                                    this.setState({ isFocused: !1 });
                            }),
                            (this.handleBlur = () => {
                                if ((this.state.isFocused && this.setState({ isFocused: !1 }), this.props.isDisabled))
                                    return;
                                const u = this.getValidValue(this.state.value);
                                u !== this.state.value && this.changeValue(u);
                            }),
                            (this.handleWheel = (u) => {
                                !this.props.isDisabled &&
                                    this.state.isFocused &&
                                    (u.preventDefault(), u.deltaY < 0 ? this.decrement() : this.increment());
                            }),
                            (this.handleMouseUp = () => {
                                this.stop(), this.setState({ activeIncrement: !1, activeDecrement: !1 });
                            }),
                            (this.handleMouseLeave = () => {
                                this.stop();
                            }),
                            (this.incrementHandleMouseEnter = (u) => {
                                this.state.activeIncrement && this.incrementHandleMouseDown(u, !0),
                                    this.buttonIncrementIsDisabled || this.playHoverSound();
                            }),
                            (this.decrementHandleMouseEnter = (u) => {
                                this.state.activeDecrement && this.decrementHandleMouseDown(u, !0),
                                    this.buttonDecrementIsDisabled || this.playHoverSound();
                            }),
                            (this.handleKeyDown = (u) => {
                                if (!this.props.isDisabled) {
                                    switch (
                                        (u.keyCode in zu.n &&
                                            u.keyCode !== zu.n.BACKSPACE &&
                                            u.keyCode !== zu.n.DELETE &&
                                            u.preventDefault(),
                                        u.keyCode)
                                    ) {
                                        case zu.n.ARROW_UP:
                                        case zu.n.NUM_PLUS:
                                            this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment();
                                            break;
                                        case zu.n.ARROW_DOWN:
                                        case zu.n.NUM_MINUS:
                                            this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement();
                                            break;
                                        case zu.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case zu.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case zu.n.ENTER:
                                            if (
                                                (u.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const u = this.formatValue(this.props.maximum).length;
                                                this.changeValue(this.props.maximum), this.setCursorPosition(0, u);
                                            }
                                            break;
                                        case zu.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case zu.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case zu.n.BACKSPACE:
                                        case zu.n.DELETE:
                                            this.handleDelete(u);
                                    }
                                    this.props.onKeyDown(u);
                                }
                            }),
                            (this.handleKeyUp = (u) => {
                                if (!this.props.isDisabled)
                                    switch (u.keyCode) {
                                        case zu.n.ARROW_UP:
                                        case zu.n.NUM_PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case zu.n.ARROW_DOWN:
                                        case zu.n.NUM_MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (u) => {
                                u.which in Gu || u.preventDefault();
                            }),
                            (this.increment = () => {
                                const u = Math.min(
                                    this.getValidValue(this.state.value) + this.props.stepSize,
                                    this.props.maximum,
                                );
                                this.changeValue(u);
                            }),
                            (this.decrement = () => {
                                const u = Math.max(
                                    this.getValidValue(this.state.value) - this.props.stepSize,
                                    this.props.minimum,
                                );
                                this.changeValue(u);
                            }),
                            (this.incrementHandleMouseDown = (u, e = !1) => {
                                this.buttonIncrementIsDisabled ||
                                    (u.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value < this.props.maximum &&
                                        (!e && this.playClickSound(),
                                        (0 === u.button || e) &&
                                            (this.increment(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.incrementHandleMouseDown(u, !0);
                                                },
                                                e ? 50 : 300,
                                            )),
                                            this.setState({ activeIncrement: !0 }))));
                            }),
                            (this.decrementHandleMouseDown = (u, e = !1) => {
                                this.buttonDecrementIsDisabled ||
                                    (u.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value > this.props.minimum &&
                                        (!e && this.playClickSound(),
                                        (0 === u.button || e) &&
                                            (this.decrement(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.decrementHandleMouseDown(u, !0);
                                                },
                                                e ? 50 : 300,
                                            )),
                                            this.setState({ activeDecrement: !0 }))));
                            }),
                            (this.playHoverSound = () => {
                                this.props.isDisabled || m('highlight');
                            }),
                            (this.playClickSound = () => {
                                this.props.isDisabled || m('play');
                            }),
                            (this.stop = () => {
                                this.timer && clearTimeout(this.timer), (this.timer = null);
                            });
                    }
                    componentDidUpdate(u, e) {
                        const t = this.state,
                            r = t.value,
                            i = t.isFocused;
                        if (r !== e.value && i) {
                            const u = this.formattedValue.length,
                                e = this.input.current && this.input.current.selectionStart,
                                t = this.input.current && this.input.current.selectionEnd,
                                r = e === t ? u : e || 0;
                            0 === e && t === u
                                ? this.input.current && this.input.current.setSelectionRange(u, u)
                                : this.input.current && this.input.current.setSelectionRange(r, u);
                        }
                    }
                    componentWillReceiveProps({ value: u, isFocused: e }) {
                        u !== this.props.value && this.setState({ value: u }),
                            e !== this.props.isFocused &&
                                (this.setState({ isFocused: e }),
                                e
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput());
                    }
                    get formattedValue() {
                        return this.props.currencyType
                            ? D.Z5.getNumberFormat(this.state.value, D.B3.GOLD)
                            : this.state.value.toString();
                    }
                    get buttonIncrementIsDisabled() {
                        return this.state.value >= this.props.maximum || this.props.isDisabled;
                    }
                    get buttonDecrementIsDisabled() {
                        return this.state.value <= this.props.minimum || this.props.isDisabled;
                    }
                    render() {
                        const u = this.props,
                            e = u.isDisabled,
                            t = u.size,
                            r = u.currencyType,
                            n = u.classMix,
                            a = S()(
                                Vu.base,
                                Vu[`base__${t}`],
                                r && Vu[`base__withCurrency-${t}`],
                                e && Vu.base__isDisabled,
                                this.state.isFocused && Vu.base__isFocus,
                                n && n.base,
                            ),
                            s = S()(
                                Vu.buttonIncrement,
                                Vu[`buttonIncrement__${t}`],
                                this.buttonIncrementIsDisabled && Vu.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    Vu[`buttonIncrement__isActive-${this.props.size}`],
                                n && n.buttonIncrement,
                            ),
                            _ = S()(
                                Vu.buttonDecrement,
                                Vu[`buttonDecrement__${t}`],
                                this.buttonDecrementIsDisabled && Vu.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    Vu[`buttonDecrement__isActive-${this.props.size}`],
                                n && n.buttonDecrement,
                            ),
                            o = S()(
                                Vu.input,
                                e && Vu.input__disabled,
                                r && Vu.input__withCurrency,
                                r && Vu[`input__${r}-${t}`],
                                r && Vu[`input__${r}`],
                                r && e && Vu[`input__${r}-disabled`],
                                n && n.input,
                            ),
                            l = S()(Vu.currencyIcon, r && Vu[`currencyIcon__${r}-${t}`], n && n.currencyIcon),
                            c = S()(
                                Vu.currency,
                                r && Vu[`currency__${r}`],
                                r && Vu[`currency__${r}-${t}`],
                                n && n.currency,
                            );
                        return i().createElement(
                            'div',
                            {
                                className: a,
                                ref: this.numericalStepper,
                                style: ((E = this.props.width), E ? { width: `${E}rem` } : {}),
                            },
                            i().createElement(
                                'div',
                                { className: Vu.inputContainer },
                                r &&
                                    i().createElement(
                                        'div',
                                        { className: c },
                                        i().createElement('span', { className: Vu.dummyValue }, this.formattedValue),
                                        i().createElement('span', { className: l, style: n && n.currencyIconStyle }),
                                    ),
                                i().createElement('input', {
                                    ref: this.input,
                                    className: o,
                                    type: 'text',
                                    value: this.formattedValue,
                                    disabled: e,
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
                                { className: Vu.control },
                                i().createElement('div', {
                                    className: s,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                i().createElement('div', {
                                    className: _,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.decrementHandleMouseEnter,
                                    onMouseDown: this.decrementHandleMouseDown,
                                }),
                            ),
                        );
                        var E;
                    }
                }
                Xu.defaultProps = {
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
                const Ku = () => {
                    const u = x('model.prices'),
                        e = x('model.focus'),
                        t = e.focusedIndex,
                        n = e.onGotFocus,
                        a = x(),
                        s = a.stepperMaxValue,
                        _ = a.onStepperValueChanged,
                        o = (0, r.useCallback)(
                            (u) => {
                                u < 1 || u > s || _({ value: u });
                            },
                            [_, s],
                        ),
                        l = (0, r.useCallback)(() => {
                            n({ index: 0 });
                        }, [n]),
                        c = Math.min(1, s);
                    return i().createElement(
                        'div',
                        { className: 'HBMultiPriceQuantityApp_base_8c' },
                        i().createElement(Xu, {
                            width: 102,
                            stepSize: 1,
                            maximum: s,
                            minimum: c,
                            size: 'medium',
                            onChange: o,
                            isDisabled: 0 === s,
                            isFocused: 0 === t,
                            onKeyDown: l,
                        }),
                        i().createElement(Wu, { classMix: 'HBMultiPriceQuantityApp_price_1f', prices: u }),
                    );
                };
                engine.whenReady.then(() => {
                    a().render(i().createElement(Ku, null), document.getElementById('root'));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u].call(t.exports, t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var i = 1 / 0;
                for (_ = 0; _ < deferred.length; _++) {
                    for (var [e, t, r] = deferred[_], n = !0, a = 0; a < e.length; a++)
                        (!1 & r || i >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[a]))
                            ? e.splice(a--, 1)
                            : ((n = !1), r < i && (i = r));
                    if (n) {
                        deferred.splice(_--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var _ = deferred.length; _ > 0 && deferred[_ - 1][2] > r; _--) deferred[_] = deferred[_ - 1];
            deferred[_] = [e, t, r];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (() => {
            var u = { 89: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        i,
                        [n, a, s] = t,
                        _ = 0;
                    if (n.some((e) => 0 !== u[e])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (s) var o = s(__webpack_require__);
                    }
                    for (e && e(t); _ < n.length; _++)
                        (i = n[_]), __webpack_require__.o(u, i) && u[i] && u[i][0](), (u[i] = 0);
                    return __webpack_require__.O(o);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9076));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
