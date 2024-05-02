(() => {
    var __webpack_modules__ = {
            926: (u) => {
                u.exports = {
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
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = viewEnv.addDataChangedCallback(u, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", u),
                            r
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(u, e);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
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
            596: (u, e, t) => {
                'use strict';
                t.d(e, { kH: () => F, Z5: () => s, lf: () => A, cy: () => i, B0: () => o, ry: () => C });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let a = u.target;
                                    do {
                                        if (a === e) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            a = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== a)),
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
                a.__instance = void 0;
                const r = a;
                var n = t(358);
                const s = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    i = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let o;
                var l;
                ((l = o || (o = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let m, D;
                !(function (u) {
                    (u[(u.ALT = 164)] = 'ALT'),
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
                        (u[(u.KEY_9 = 57)] = 'KEY_9');
                })(m || (m = {})),
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
                    })(D || (D = {}));
                const B = ['args'];
                function d(u, e, t, a, r, n, s) {
                    try {
                        var i = u[n](s),
                            o = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(o) : Promise.resolve(o).then(a, r);
                }
                const _ = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
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
                                    return new Promise(function (a, r) {
                                        var n = u.apply(e, t);
                                        function s(u) {
                                            d(n, a, r, s, i, 'next', u);
                                        }
                                        function i(u) {
                                            d(n, a, r, s, i, 'throw', u);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    g = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(u);
                                    for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, B);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([u, e]) => {
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
                        var a;
                    },
                    p = () => g(o.CLOSE),
                    h = (u, e) => {
                        u.keyCode === m.ESCAPE && e();
                    };
                var b = t(572);
                const v = r.instance,
                    f = {
                        DataTracker: n.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: E,
                        RealFormatType: c,
                        TimeFormatType: A,
                        DateFormatType: F,
                        makeGlobalBoundingBox: _,
                        sendMoveEvent: (u) => g(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, r) => {
                            const n = viewEnv.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                i = s.x,
                                l = s.y,
                                E = s.width,
                                c = s.height,
                                A = {
                                    x: viewEnv.pxToRem(i + n.x),
                                    y: viewEnv.pxToRem(l + n.y),
                                    width: viewEnv.pxToRem(E),
                                    height: viewEnv.pxToRem(c),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                direction: e,
                                bbox: _(A),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => h(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            h(u, p);
                        },
                        handleViewEvent: g,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        onWindowLoaded: () =>
                            new Promise((u) => {
                                engine.on('windowLoaded', u);
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const a in e)
                                if (Object.prototype.hasOwnProperty.call(e, a)) {
                                    const r = Object.prototype.toString.call(e[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[a];
                                        t[a] = [];
                                        for (let e = 0; e < r.length; e++) t[a].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = u(e[a]))
                                            : (t[a] = e[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = f;
            },
            922: (u, e, t) => {
                'use strict';
                var a = t(179),
                    r = t.n(a),
                    n = t(493),
                    s = t.n(n),
                    i = t(483),
                    o = t.n(i);
                let l;
                function E(u) {
                    return u;
                }
                function c() {
                    return !1;
                }
                !(function (u) {
                    (u.Scan = 'scan'),
                        (u.Kill = 'kill'),
                        (u.Pickup = 'pickup'),
                        (u.Ram = 'ram'),
                        (u.Shot = 'shot'),
                        (u.AbilityHit = 'abilityHit');
                })(l || (l = {}));
                var A = t(915);
                function F(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const m = (u) => (0 === u ? window : window.children.get(u));
                function D(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, a) => e(null == u ? void 0 : u.value, t, a));
                }
                var B = t(517);
                const d = [
                        {
                            playerName: 'Jesus',
                            totalPoints: 33,
                            place: 1,
                            playersScore: [{ type: l.Kill, marsPoints: 70 }],
                        },
                        {
                            playerName: 'Moishe',
                            totalPoints: 36,
                            place: 2,
                            playersScore: [
                                { type: l.Shot, marsPoints: 70 },
                                { type: l.Ram, marsPoints: 70 },
                                { type: l.Kill, marsPoints: 70 },
                                { type: l.Scan, marsPoints: 70 },
                                { type: l.Pickup, marsPoints: 70 },
                            ],
                        },
                        {
                            playerName: 'Allah',
                            totalPoints: 386,
                            place: 3,
                            playersScore: [
                                { type: l.Shot, marsPoints: 70 },
                                { type: l.Ram, marsPoints: 70 },
                                { type: l.Kill, marsPoints: 70 },
                                { type: l.Scan, marsPoints: 70 },
                                { type: l.Pickup, marsPoints: 70 },
                            ],
                        },
                        {
                            playerName: 'Buddha',
                            totalPoints: 386,
                            place: 4,
                            playersScore: [
                                { type: l.Shot, marsPoints: 70 },
                                { type: l.Ram, marsPoints: 70 },
                                { type: l.Kill, marsPoints: 70 },
                                { type: l.Scan, marsPoints: 70 },
                                { type: l.Pickup, marsPoints: 70 },
                            ],
                        },
                    ],
                    _ = {
                        killAmount: 23,
                        totalPoints: 2500,
                        pickupAmount: 4,
                        currentPlayerEntry: {
                            playerName: 'Moishe',
                            totalPoints: 36,
                            place: 2,
                            playersScore: [
                                { type: l.Shot, marsPoints: 70 },
                                { type: l.Ram, marsPoints: 70 },
                                { type: l.Kill, marsPoints: 70 },
                                { type: l.Scan, marsPoints: 70 },
                                { type: l.Pickup, marsPoints: 70 },
                            ],
                        },
                    },
                    C = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: n, children: s, mocks: i }) {
                                const o = (0, a.useRef)([]),
                                    l = (u, t, a) => {
                                        const r = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = m,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? r.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = r.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const s = (u) => {
                                                    const r = t(e),
                                                        n = a.split('.').reduce((u, e) => u[e], r);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? n
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const i = 'string' == typeof n ? `${a}.${n}` : a,
                                                            o = viewEnv.addDataChangedCallback(i, e, !0);
                                                        return r.set(o, t), u && t(s(n)), o;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (u, e) => {
                                                        const t = s(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = s(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var u,
                                                                t = (function (u, e) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            u[Symbol.iterator]) ||
                                                                        u['@@iterator'];
                                                                    if (t) return (t = t.call(u)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(u) ||
                                                                        (t = (function (u, e) {
                                                                            if (u) {
                                                                                if ('string' == typeof u)
                                                                                    return F(u, e);
                                                                                var t = Object.prototype.toString
                                                                                    .call(u)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        u.constructor &&
                                                                                        (t = u.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(u)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? F(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(u = t()).done;

                                                        )
                                                            n(u.value, e);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(t),
                                            n = (u) => o.current.push(u),
                                            s = (({ observableModel: u }) => {
                                                const e = u.object(),
                                                    t = new Proxy(e.get(), { get: (u, e) => u[e] || _[e] }),
                                                    a = {
                                                        root: Object.assign({}, e, { get: () => t }),
                                                        primitives: u.primitives([
                                                            'battleOverTimestamp',
                                                            'totalPoints',
                                                            'killAmount',
                                                            'pickupAmount',
                                                        ]),
                                                        currentPlayerEntry: u.object('currentPlayerEntry'),
                                                        currentPlayersScore: u.array('currentPlayerEntry.playersScore'),
                                                        playersList: u.array('playersList', []),
                                                        dailyQuests: u.array('dailyQuests', []),
                                                    },
                                                    r = (0, B.computedFn)(() =>
                                                        a.playersList.get().length
                                                            ? D(a.playersList.get(), (u) =>
                                                                  Object.assign({}, u, {
                                                                      playersScore: D(u.playersScore, E),
                                                                  }),
                                                              )
                                                            : d,
                                                    ),
                                                    n = (0, B.computedFn)(() => D(a.currentPlayersScore.get(), E)),
                                                    s = (0, B.computedFn)(() => {
                                                        const u = a.currentPlayerEntry.get();
                                                        return Object.assign({}, u, { playersScore: n() });
                                                    });
                                                return Object.assign({}, a, {
                                                    currentPlayerName: 'Jesus',
                                                    computes: {
                                                        getPlayersList: r,
                                                        getCurrentPlayersScore: n,
                                                        getCurrentPlayerEntry: s,
                                                    },
                                                });
                                            })({
                                                mode: u,
                                                externalModel: r,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n =
                                                            'mocks' === u
                                                                ? null != (s = null == a ? void 0 : a.getter(e))
                                                                    ? s
                                                                    : []
                                                                : null != t
                                                                  ? t
                                                                  : r.readByPath(e);
                                                        var s;
                                                        const i = A.observable.box(n, { equals: c });
                                                        return (
                                                            'real' === u &&
                                                                r.subscribe(
                                                                    (0, A.action)((u) => i.set(u)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (e, t = r.readByPath(e)) => {
                                                        const n =
                                                            'mocks' === u
                                                                ? null != (s = null == a ? void 0 : a.getter(e))
                                                                    ? s
                                                                    : {}
                                                                : null != t
                                                                  ? t
                                                                  : r.readByPath(e);
                                                        var s;
                                                        const i = A.observable.box(n, { equals: c });
                                                        return (
                                                            'real' === u &&
                                                                r.subscribe(
                                                                    (0, A.action)((u) => i.set(u)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n =
                                                            'mocks' === u
                                                                ? null != (s = null == a ? void 0 : a.getter(t))
                                                                    ? s
                                                                    : {}
                                                                : r.readByPath(t);
                                                        var s;
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (u, e) => ((u[e] = A.observable.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    r.subscribe(
                                                                        (0, A.action)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                s = Object.entries(a),
                                                                i = s.reduce(
                                                                    (u, [e, t]) => (
                                                                        (u[t] = A.observable.box(n[e], {})), u
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    r.subscribe(
                                                                        (0, A.action)((u) => {
                                                                            s.forEach(([e, t]) => {
                                                                                i[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: n,
                                            });
                                        return {
                                            model: s,
                                            controls:
                                                'mocks' === u && a
                                                    ? a.controls({ mode: u, model: s, cleanup: n })
                                                    : e({ mode: u, model: s, externalModel: r, cleanup: n }),
                                            externalModel: r,
                                            mode: u,
                                        };
                                    },
                                    C = (0, a.useRef)(!1),
                                    g = (0, a.useState)(u),
                                    p = g[0],
                                    h = g[1],
                                    b = (0, a.useState)(() => l(u, n, i)),
                                    v = b[0],
                                    f = b[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        C.current ? f(l(p, n, i)) : (C.current = !0);
                                    }, [i, p, n]),
                                    (0, a.useEffect)(() => {
                                        h(u);
                                    }, [u]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), o.current.forEach((u) => u());
                                        },
                                        [v],
                                    ),
                                    r().createElement(t.Provider, { value: v }, s)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: u }) => ({ onClose: u.createCallbackNoArgs('onClose') })),
                    g = C[0],
                    p = C[1];
                var h = t(282);
                const b = 'ArenaScore_tableHeader_0d',
                    v = 'ArenaScore_tableHeader_text_30',
                    f = 'ArenaScore_tableHeader_marsPoints_1e',
                    w = 'ArenaScore_tableHeader_marsPoints_icon_f4',
                    y = 'ArenaScore_textAccent_ec',
                    S = 'ArenaScore_playerTable_marsPoints_a8',
                    M = {
                        [l.AbilityHit]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.abilityHit(),
                        [l.Kill]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.enemyKills(),
                        [l.Pickup]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.abilityPickups(),
                        [l.Ram]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.ramming(),
                        [l.Scan]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.artefactScanning(),
                        [l.Shot]: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.shots(),
                    },
                    T = {
                        players: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.players(),
                        pointsGained: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.pointsGained(),
                        activeActions: R.strings.cosmicEvent.postBattleScreen.arenaScore.activeActions(),
                        battleInfoHeading: R.strings.cosmicEvent.postBattleScreen.battleResults.info.heading(),
                        battleInfoBattleOver: R.strings.cosmicEvent.postBattleScreen.battleResults.info.battleOver(),
                        affirmativeButton: R.strings.cosmicEvent.postBattleScreen.battleResults.button.affirmative(),
                        closeButton: R.strings.cosmicEvent.postBattleScreen.battleResults.button.close(),
                    },
                    x = (0, h.observer)(() => {
                        const u = p().model,
                            e = u.computes.getPlayersList(),
                            t = u.computes.getCurrentPlayerEntry(),
                            n = (0, a.useState)(t),
                            s = n[0],
                            i = n[1];
                        return r().createElement(
                            'div',
                            { className: 'ArenaScore_base_43' },
                            r().createElement(
                                'div',
                                { className: 'ArenaScore_wrapper_9b' },
                                r().createElement(
                                    'div',
                                    { className: 'ArenaScore_playersTable_c5' },
                                    r().createElement(
                                        'div',
                                        { className: b },
                                        r().createElement('div', { className: v }, T.players),
                                        r().createElement(
                                            'div',
                                            { className: f },
                                            r().createElement('img', {
                                                src: R.images.cosmic_event.gui.maps.icons.postBattleView.arenaScoreTab.marsPoints_14_14(),
                                                className: w,
                                            }),
                                        ),
                                    ),
                                    e &&
                                        e.map((u, e) =>
                                            r().createElement(
                                                'div',
                                                {
                                                    className: o()(
                                                        'ArenaScore_playersTable_row_8e',
                                                        u.playerName === t.playerName && 'ArenaScore_currentPlayer_2d',
                                                    ),
                                                    key: e,
                                                    onClick: () => i(u),
                                                },
                                                u.playerName === s.playerName &&
                                                    r().createElement('div', { className: 'ArenaScore_selected_c2' }),
                                                r().createElement(
                                                    'div',
                                                    {
                                                        className: o()(
                                                            'ArenaScore_playersTable_row_place_c8',
                                                            u.place <= 2 && y,
                                                        ),
                                                    },
                                                    u.place,
                                                    u.place <= 3 &&
                                                        r().createElement('img', {
                                                            className: 'ArenaScore_winnerIcon_d4',
                                                            src:
                                                                3 === u.place
                                                                    ? R.images.cosmic_event.gui.maps.icons.postBattleView.arenaScoreTab.c_3_place()
                                                                    : R.images.cosmic_event.gui.maps.icons.postBattleView.arenaScoreTab.c_1_2_place(),
                                                        }),
                                                ),
                                                r().createElement(
                                                    'div',
                                                    {
                                                        className: o()(
                                                            'ArenaScore_playersTable_row_name_0b',
                                                            u.place <= 2 && y,
                                                        ),
                                                    },
                                                    u.playerName,
                                                ),
                                                r().createElement(
                                                    'div',
                                                    { className: o()('ArenaScore_marsPoints_43', e <= 1 && y) },
                                                    u.totalPoints,
                                                ),
                                            ),
                                        ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'ArenaScore_playerTable_94' },
                                    r().createElement(
                                        'div',
                                        { className: 'ArenaScore_playerTable_topHeader_80' },
                                        r().createElement('img', {
                                            className: 'ArenaScore_playerTable_topHeader_img_c1',
                                            src: R.images.cosmic_event.gui.maps.icons.postBattleView.arenaScoreTab.vehicle(),
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: 'ArenaScore_playerTable_topHeader_playersName_bc' },
                                            s.playerName,
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: b },
                                        r().createElement('div', { className: v }, T.activeActions),
                                        r().createElement(
                                            'div',
                                            { className: f },
                                            r().createElement('img', {
                                                src: R.images.cosmic_event.gui.maps.icons.postBattleView.arenaScoreTab.marsPoints_14_14(),
                                                className: w,
                                            }),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: 'ArenaScore_playerTable_wrapper_6a' },
                                        r().createElement(
                                            'div',
                                            { className: o()('ArenaScore_playerTable_topRow_89') },
                                            r().createElement(
                                                'div',
                                                { className: 'ArenaScore_playerTable_topRow_pointsGained_a1' },
                                                'Add text',
                                            ),
                                            r().createElement('div', { className: S }, '34000'),
                                        ),
                                        s.playersScore &&
                                            s.playersScore.map((u, e) =>
                                                r().createElement(
                                                    'div',
                                                    { className: o()('ArenaScore_playerTable_row_1b'), key: e },
                                                    r().createElement(
                                                        'div',
                                                        { className: 'ArenaScore_playerTable_row_category_41' },
                                                        M[u.type],
                                                    ),
                                                    r().createElement(
                                                        'div',
                                                        {
                                                            className: o()(
                                                                S,
                                                                0 === u.marsPoints && 'ArenaScore_faded_8b',
                                                            ),
                                                        },
                                                        u.marsPoints,
                                                    ),
                                                ),
                                            ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    L = 'Footer_flexWrapper_96',
                    k = 'Footer_battleInfo_heading_dd';
                var O = t(948);
                let P;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(P || (P = {}));
                const N = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    H = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    I = (u, e, t = P.left) => u.split(e).reduce(t === P.left ? N : H, []),
                    W = (() => {
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
                    $ = ['zh_cn', 'zh_sg', 'zh_tw'],
                    G = ({ binding: u, text: e = '', classMix: t, alignment: n = P.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  a.Fragment,
                                  null,
                                  e.split('\n').map((e, s) =>
                                      r().createElement(
                                          'div',
                                          { className: o()('FormatText_base_d0', t), key: `${e}-${s}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = P.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return $.includes(t)
                                                                ? W(u)
                                                                : 'ja' === t
                                                                  ? (0, O.loadDefaultJapaneseParser)().parse(u)
                                                                  : ((u, e = P.left) => {
                                                                        let t = [];
                                                                        const a =
                                                                                /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                            r = u.replace(/&nbsp;/g, ' ');
                                                                        return (
                                                                            I(r, /( )/, e).forEach(
                                                                                (u) => (t = t.concat(I(u, a, P.left))),
                                                                            ),
                                                                            t
                                                                        );
                                                                    })(u, e);
                                                        })(u, e),
                                              ))(e, n, u).map((u, e) =>
                                              r().createElement(a.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                let V;
                !(function (u) {
                    (u.SHORT_DATE = 'short-date'),
                        (u.SHORT_TIME = 'short-time'),
                        (u.SHORT_DATE_TIME = 'short-date-time'),
                        (u.FULL_DATE = 'full-date'),
                        (u.FULL_DATE_TIME = 'full-date-time'),
                        (u.MONTH = 'month'),
                        (u.MONTH_DATE = 'month-date'),
                        (u.DATE_MONTH = 'date-month'),
                        (u.MONTH_YEAR = 'month-year'),
                        (u.WEEK_DAY = 'week-day'),
                        (u.WEEK_DAY_TIME = 'week-day-time'),
                        (u.YEAR = 'year'),
                        (u.DATE_YEAR = 'date-year');
                })(V || (V = {}));
                var j = t(596);
                const U = (0, a.memo)(({ datetime: u, format: e = V.SHORT_DATE, localize: t = !0 }) =>
                        ((u, e, t) => {
                            switch (e) {
                                case V.SHORT_DATE:
                                    return t
                                        ? j.Z5.getDateFormat(u, j.kH.SHORT_FORMAT)
                                        : j.cy.getTimeFormat('%d.%m.%y', u, !0);
                                case V.SHORT_TIME:
                                    return t
                                        ? j.Z5.getTimeFormat(u, j.lf.SHORT_FORMAT)
                                        : j.cy.getTimeFormat('%I:%M %p', u, !0);
                                case V.SHORT_DATE_TIME:
                                    return t
                                        ? `${j.Z5.getDateFormat(u, j.kH.SHORT_FORMAT)}, ${j.Z5.getTimeFormat(u, j.lf.SHORT_FORMAT)}`
                                        : j.cy.getTimeFormat('%d.%m.%y, %I:%M %p', u, !0);
                                case V.FULL_DATE:
                                    return t
                                        ? j.Z5.getDateFormat(u, j.kH.LONG_FORMAT)
                                        : j.cy.getTimeFormat('%B %d, %Y', u, !0);
                                case V.FULL_DATE_TIME:
                                    return t
                                        ? `${j.Z5.getDateFormat(u, j.kH.LONG_FORMAT)}, ${j.Z5.getTimeFormat(u, j.lf.SHORT_FORMAT)}`
                                        : j.cy.getTimeFormat('%B %d, %Y, %I:%M %p', u, !0);
                                case V.MONTH:
                                    return j.cy.getTimeFormat('%B', u, !0);
                                case V.MONTH_DATE:
                                    return j.cy.getTimeFormat('%B %e', u, !0);
                                case V.DATE_MONTH:
                                    return j.cy.getTimeFormat('%e %B', u, !0);
                                case V.MONTH_YEAR:
                                    return j.cy.getTimeFormat('%B %Y', u, !0);
                                case V.WEEK_DAY:
                                    return j.cy.getTimeFormat('%A', u, !0);
                                case V.WEEK_DAY_TIME:
                                    return t
                                        ? `${j.cy.getTimeFormat('%A', u, !0)} ${j.Z5.getTimeFormat(u, j.lf.SHORT_FORMAT)}`
                                        : j.cy.getTimeFormat('%A, %I:%M %p', u, !0);
                                case V.YEAR:
                                    return j.cy.getTimeFormat('%Y', u, !0);
                                case V.DATE_YEAR:
                                    return j.cy.getTimeFormat('%d, %Y', u, !0);
                            }
                        })(u, e, t),
                    ),
                    K = {
                        battleInfoHeading: R.strings.cosmicEvent.postBattleScreen.battleResults.info.heading(),
                        battleInfoBattleOver: R.strings.cosmicEvent.postBattleScreen.battleResults.info.battleOver(),
                        affirmativeButton: R.strings.cosmicEvent.postBattleScreen.battleResults.button.affirmative(),
                        closeButton: R.strings.cosmicEvent.postBattleScreen.battleResults.button.close(),
                    },
                    z = (0, h.observer)(() => {
                        const u = p(),
                            e = (u.model, u.controls);
                        return r().createElement(
                            'div',
                            { className: 'Footer_footer_68' },
                            r().createElement(
                                'div',
                                { className: L },
                                r().createElement(
                                    'div',
                                    { className: 'Footer_battleInfo_e5' },
                                    r().createElement('div', { className: k }, K.battleInfoHeading),
                                    r().createElement(G, {
                                        classMix: 'Footer_battleInfo_info_e8',
                                        text: K.battleInfoBattleOver,
                                        binding: {
                                            date: r().createElement(
                                                'span',
                                                { className: k },
                                                r().createElement(U, {
                                                    datetime: 1676573689,
                                                    format: V.SHORT_DATE_TIME,
                                                }),
                                            ),
                                        },
                                    }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: o()(L, 'Footer_affirmativeButton_container_51') },
                                r().createElement(
                                    'div',
                                    { className: 'Footer_affirmativeButton_wrapper_5a' },
                                    r().createElement(
                                        'button',
                                        { className: 'Footer_affirmativeButton_01', onClick: e.onClose },
                                        K.affirmativeButton,
                                        '`p`',
                                    ),
                                ),
                            ),
                            r().createElement('div', { className: L }),
                        );
                    }),
                    Y = [
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
                        'onShow',
                        'onHide',
                    ];
                function q(u) {
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
                const Z = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: j.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    X = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            n = u.onMouseEnter,
                            s = u.onMouseLeave,
                            i = u.onMouseDown,
                            o = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            F = u.decoratorId,
                            m = void 0 === F ? 0 : F,
                            D = u.isEnabled,
                            B = void 0 === D || D,
                            d = u.onShow,
                            _ = u.onHide,
                            C = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(u);
                                for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, Y);
                        const g = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            p = (0, a.useMemo)(
                                () =>
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let t,
                                            a = R.invalid('resId');
                                        return (
                                            e &&
                                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.children[t] &&
                                                    (a = window.children[t].id)),
                                            { caller: t, stack: e, resId: a }
                                        );
                                    })(),
                                [],
                            ),
                            h = p.resId,
                            b = (0, a.useCallback)(() => {
                                (g.current.isVisible && g.current.timeoutId) ||
                                    (Z(t, m, { isMouseEvent: !0, on: !0, arguments: q(r) }, h),
                                    d && d(),
                                    (g.current.isVisible = !0));
                            }, [t, m, r, h, d]),
                            v = (0, a.useCallback)(() => {
                                if (g.current.isVisible || g.current.timeoutId) {
                                    const u = g.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (g.current.timeoutId = 0)),
                                        Z(t, m, { on: !1 }, h),
                                        g.current.isVisible && _ && _(),
                                        (g.current.isVisible = !1);
                                }
                            }, [t, m, h, _]),
                            f = (0, a.useCallback)((u) => {
                                g.current.isVisible &&
                                    ((g.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (g.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(g.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const u = g.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', f, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', f, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !B && v();
                            }, [B, v]),
                            (0, a.useEffect)(
                                () => (
                                    engine.on('wrapperMouseOut', v),
                                    () => {
                                        engine.off('wrapperMouseOut', v), v();
                                    }
                                ),
                                [v],
                            ),
                            B
                                ? (0, a.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((g.current.timeoutId = window.setTimeout(b, E ? 100 : 400)),
                                                          console.log('works'),
                                                          n && n(u),
                                                          w && w(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  v(), s && s(e), u && u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !A && v(), o && o(e), u && u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !A && v(), i && i(e), u && u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : e
                        );
                        var w;
                    },
                    J = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Q() {
                    return (
                        (Q =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Q.apply(this, arguments)
                    );
                }
                const uu = R.views.common.tooltip_window.simple_tooltip_content,
                    eu = (u) => {
                        let e = u.children,
                            t = u.body,
                            n = u.header,
                            s = u.note,
                            i = u.alert,
                            o = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(u);
                                for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, J);
                        const E = (0, a.useMemo)(() => {
                            const u = Object.assign({}, o, { body: t, header: n, note: s, alert: i });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [i, t, n, s, o]);
                        return r().createElement(
                            X,
                            Q(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? uu.SimpleTooltipHtmlContent('resId') : uu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    },
                    tu = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let au, ru;
                !(function (u) {
                    (u.Small = 'small'), (u.Medium = 'medium'), (u.Default = 'medium');
                })(au || (au = {})),
                    (function (u) {
                        (u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing');
                    })(ru || (ru = {}));
                const nu = ({ size: u = au.Default }) => {
                        const e = o()(tu.background, tu[`background__${u}`]);
                        return r().createElement('div', { className: e });
                    },
                    su = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    iu = ({ size: u }) => {
                        const e = o()(su.base, su[`base__${u}`]);
                        return r().createElement('div', { className: e });
                    },
                    ou = {
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
                    lu = (0, a.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: a, isComplete: n, withoutBounce: s }) => {
                            const i = o()(
                                    ou.base,
                                    ou[`base__${u}`],
                                    t && ou.base__disabled,
                                    n && ou.base__finished,
                                    s && ou.base__withoutBounce,
                                ),
                                l = !t && !n;
                            return r().createElement(
                                'div',
                                { className: i, style: a, ref: e },
                                r().createElement('div', { className: ou.pattern }),
                                r().createElement('div', { className: ou.gradient }),
                                l && r().createElement(iu, { size: u }),
                            );
                        },
                    ),
                    Eu = ({ size: u, value: e, lineRef: t, disabled: n, onComplete: s }) => {
                        const i = (0, a.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            o = 100 === e;
                        return (
                            (0, a.useEffect)(() => {
                                o && s && s();
                            }, [o, s]),
                            r().createElement(lu, { size: u, disabled: n, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    },
                    cu = (u, e) => {
                        let t;
                        const a = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(a);
                        };
                    };
                let Au, Fu;
                !(function (u) {
                    (u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End');
                })(Au || (Au = {})),
                    (function (u) {
                        (u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End');
                    })(Fu || (Fu = {}));
                const mu = (0, a.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: s,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const E = i < n,
                                c = (0, a.useState)(Fu.Idle),
                                A = c[0],
                                F = c[1],
                                m = A === Fu.In,
                                D = A === Fu.End,
                                B = A === Fu.Idle,
                                d = (0, a.useCallback)(
                                    (u) => {
                                        F(u), l && l(u);
                                    },
                                    [l],
                                );
                            (0, a.useEffect)(() => {
                                if (B && !t)
                                    return cu(() => {
                                        d(Fu.In);
                                    }, e);
                            }, [d, t, B, e]),
                                (0, a.useEffect)(() => {
                                    if (m)
                                        return cu(() => {
                                            o && o(), d(Fu.End);
                                        }, u + e);
                                }, [d, m, o, e, u]);
                            const _ = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [E ? 'left' : 'right']: '0',
                                    }),
                                    [E, e, u],
                                ),
                                C = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [E ? 'left' : 'right']: '0',
                                    }),
                                    [E, e, u],
                                ),
                                g = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(n - i)}%`, left: `${E ? i : n}%` }),
                                    [n, E, i],
                                );
                            return D
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: g },
                                      r().createElement(
                                          'div',
                                          { style: B ? _ : C, className: 'ProgressBarDeltaSimple_delta_99' },
                                          r().createElement(iu, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    Du = (0, a.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: s,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: E,
                        }) => {
                            const c = (0, a.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, u],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(lu, {
                                    size: e,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: i,
                                    baseStyles: c,
                                }),
                                t >= 0 &&
                                    r().createElement(mu, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: e,
                                        to: u,
                                        onChangeAnimationState: l,
                                        onEndAnimation: E,
                                    }),
                            );
                        },
                    ),
                    Bu = (u) => (u ? { left: 0 } : { right: 0 }),
                    du = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    _u = (u) => ({ transitionDuration: `${u}ms` }),
                    Cu = (0, a.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: s,
                            to: i,
                            onEndAnimation: l,
                            onChangeAnimationState: E,
                            className: c,
                        }) => {
                            const A = i < n,
                                F = (0, a.useState)(Au.Idle),
                                m = F[0],
                                D = F[1],
                                B = m === Au.End,
                                d = m === Au.Idle,
                                _ = m === Au.Grow,
                                C = m === Au.Shrink,
                                g = (0, a.useCallback)(
                                    (u) => {
                                        D(u), E && E(u);
                                    },
                                    [E],
                                ),
                                p = (0, a.useCallback)(
                                    (u, e) =>
                                        cu(() => {
                                            g(u);
                                        }, e),
                                    [g],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return d
                                        ? p(Au.Grow, e)
                                        : _
                                          ? p(Au.Shrink, u)
                                          : C
                                            ? p(Au.End, u)
                                            : void (B && l && l());
                            }, [p, t, B, _, d, C, l, e, u]);
                            const h = (0, a.useMemo)(() => Object.assign({ width: '100%' }, _u(u), Bu(A)), [A, u]),
                                b = (0, a.useMemo)(() => Object.assign({ width: '0%' }, _u(u), Bu(A)), [A, u]),
                                v = (0, a.useMemo)(() => Object.assign({ width: '0%' }, du(A, n), _u(u)), [n, A, u]),
                                f = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - n)}%` }, du(A, n), _u(u)),
                                    [n, A, i, u],
                                );
                            if (B) return null;
                            const w = o()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                A && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return r().createElement(
                                'div',
                                { style: d ? v : f, className: w },
                                r().createElement(
                                    'div',
                                    { style: C ? b : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    r().createElement(iu, { size: s }),
                                ),
                            );
                        },
                    ),
                    gu = (0, a.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: s,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: E,
                        }) => {
                            const c = u < t,
                                A = (0, a.useState)(!1),
                                F = A[0],
                                m = A[1],
                                D = (0, a.useCallback)(
                                    (u) => {
                                        u === Au.Shrink && m(!0), E && E(u);
                                    },
                                    [E],
                                ),
                                B = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                d = (0, a.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, u],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(lu, {
                                    size: e,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: i,
                                    withoutBounce: c && 0 === u,
                                    baseStyles: F ? d : B,
                                }),
                                t >= 0 &&
                                    r().createElement(Cu, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: D,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: e,
                                        to: u,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    pu = ['onComplete', 'onEndAnimation'];
                function hu() {
                    return (
                        (hu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        hu.apply(this, arguments)
                    );
                }
                const bu = (0, a.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(u);
                                for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, pu);
                        const s = (0, a.useState)(!1),
                            i = s[0],
                            o = s[1],
                            l = (0, a.useCallback)(() => {
                                const u = 100 === n.to;
                                u !== i && o(u), u && e && e(), t && t();
                            }, [i, e, t, n.to]);
                        switch (n.animationSettings.type) {
                            case ru.Simple:
                                return r().createElement(Du, hu({}, n, { onEndAnimation: l, isComplete: i }));
                            case ru.Growing:
                                return r().createElement(gu, hu({}, n, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    vu = ['onEndAnimation'];
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const wu = (0, a.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(u);
                            for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, vu);
                    const n = (0, a.useRef)({}),
                        s = (0, a.useCallback)(() => {
                            (n.current.from = void 0), e && e();
                        }, [e]),
                        i = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = i),
                        r().createElement(bu, fu({}, t, { onEndAnimation: s, key: `${i}-${t.to}`, from: i }))
                    );
                });
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const Su = (0, a.memo)(
                        ({
                            size: u,
                            value: e,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: n,
                            animationSettings: s,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (n === e)
                                return r().createElement(Eu, {
                                    key: `${n}-${e}`,
                                    size: u,
                                    value: e,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const E = {
                                from: n,
                                to: e,
                                size: u,
                                lineRef: t,
                                disabled: a,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return s.withStack
                                ? r().createElement(wu, E)
                                : r().createElement(bu, yu({ key: `${n}-${e}` }, E));
                        },
                    ),
                    Mu = (u) => ({
                        '--progress-base': `url(${u.bgImageBase})`,
                        '--progress-line-base': u.line.bgColorBase,
                        '--progress-line-disabled': u.line.bgColorDisabled,
                        '--progress-line-finished': u.line.bgColorFinished,
                        '--progress-pattern-base': `url(${u.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${u.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${u.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${u.glow}')`,
                        '--progress-glow-small': `url('${u.glowSmall}')`,
                        '--progress-delta-color': u.delta.color,
                        '--progress-delta-shadow': u.delta.shadow,
                    }),
                    Tu = (u, e, t) => (t < u ? u : t > e ? e : t),
                    Ru = (u, e, t) => ('number' == typeof t ? (Tu(0, e, t) / e) * 100 : u),
                    xu = {
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
                    Lu = {
                        freezed: !1,
                        withStack: !1,
                        type: ru.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ku = (0, a.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = xu,
                            size: t = au.Default,
                            animationSettings: n = Lu,
                            disabled: s = !1,
                            withoutBackground: i = !1,
                            value: l,
                            deltaFrom: E,
                            lineRef: c,
                            onChangeAnimationState: A,
                            onEndAnimation: F,
                            onComplete: m,
                        }) => {
                            const D = ((u, e, t) =>
                                (0, a.useMemo)(() => {
                                    const a = (Tu(0, e, u) / e) * 100;
                                    return { value: a, deltaFrom: Ru(a, e, t) };
                                }, [t, e, u]))(l, u, E);
                            return r().createElement(
                                'div',
                                { className: o()(tu.base, tu[`base__${t}`]), style: Mu(e) },
                                !i && r().createElement(nu, { size: t }),
                                r().createElement(Su, {
                                    size: t,
                                    lineRef: c,
                                    disabled: s,
                                    value: D.value,
                                    deltaFrom: D.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: F,
                                    onChangeAnimationState: A,
                                    onComplete: m,
                                }),
                            );
                        },
                    ),
                    Ou = 'DailyMissionCard_status_4f',
                    Pu = 'DailyMissionCard_reward_9f',
                    Nu = 'DailyMissionCard_reward_icon_9d',
                    Hu = 'DailyMissionCard_reward_label_c9',
                    Iu = ({
                        description: u,
                        missionIcon:
                            e = R.images.cosmic_event.gui.maps.icons.postBattleView.dailyMissionCard.earnPoints(),
                        progressBarCurrentValue: t,
                        progressBarMaxValue: a = 10,
                        marsPoints: n,
                        moneyGained: s,
                        status: i = t >= a ? 'done' : 'active',
                        className: l,
                        showMarsPoints: E = !0,
                    }) =>
                        r().createElement(
                            'div',
                            { className: o()('DailyMissionCard_wrapper_21', l) },
                            'done' === i &&
                                r().createElement('img', {
                                    src: R.images.cosmic_event.gui.maps.icons.postBattleView.dailyMissionCard.glow(),
                                    className: 'DailyMissionCard_glow_26',
                                }),
                            r().createElement(
                                'div',
                                { className: 'DailyMissionCard_base_5f' },
                                r().createElement(
                                    'div',
                                    { className: 'DailyMissionCard_header_ea' },
                                    r().createElement(
                                        'div',
                                        { className: 'DailyMissionCard_heading_8c' },
                                        R.strings.cosmicEvent.postBattleScreen.dailyMission.heading(),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'DailyMissionCard_body_a0' },
                                    r().createElement('img', { className: 'DailyMissionCard_missionIcon_28', src: e }),
                                    r().createElement('div', { className: 'DailyMissionCard_description_e6' }, u),
                                    r().createElement(
                                        'div',
                                        { className: 'DailyMissionCard_progressBar_c3' },
                                        r().createElement(
                                            'div',
                                            { className: 'DailyMissionCard_progressBar_label_18' },
                                            r().createElement(
                                                'span',
                                                { className: 'DailyMissionCard_progressBar_label_accent_fa' },
                                                t,
                                                ' ',
                                            ),
                                            '/',
                                            ' ',
                                            a,
                                        ),
                                        r().createElement(ku, { size: au.Small, value: t, maxValue: a }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: 'DailyMissionCard_rewards_26' },
                                        E &&
                                            r().createElement(
                                                'div',
                                                { className: Pu },
                                                r().createElement('img', {
                                                    className: Nu,
                                                    src: R.images.cosmic_event.gui.maps.icons.postBattleView.dailyMissionCard.reward_marsPoints(),
                                                }),
                                                r().createElement('div', { className: Hu }, n),
                                            ),
                                        r().createElement(
                                            'div',
                                            { className: Pu },
                                            r().createElement('img', {
                                                className: Nu,
                                                src: R.images.cosmic_event.gui.maps.icons.postBattleView.dailyMissionCard.reward_money(),
                                            }),
                                            r().createElement('div', { className: Hu }, s),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'DailyMissionCard_footer_62' },
                                    r().createElement(
                                        'div',
                                        { className: Ou },
                                        'active' === i
                                            ? r().createElement(
                                                  'div',
                                                  { className: 'DailyMissionCard_status_active_08' },
                                                  R.strings.cosmicEvent.postBattleScreen.dailyMission.status.active(),
                                              )
                                            : r().createElement(
                                                  'div',
                                                  { className: Ou },
                                                  r().createElement('img', {
                                                      className: 'DailyMissionCard_status_done_icon_a2',
                                                      src: R.images.cosmic_event.gui.maps.icons.postBattleView.dailyMissionCard.done_icon(),
                                                  }),
                                                  r().createElement(
                                                      'div',
                                                      { className: 'DailyMissionCard_status_done_c4' },
                                                      R.strings.cosmicEvent.postBattleScreen.dailyMission.status.done(),
                                                  ),
                                              ),
                                    ),
                                ),
                            ),
                        );
                function Wu() {
                    return (
                        (Wu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Wu.apply(this, arguments)
                    );
                }
                const $u = {
                        heading: R.strings.cosmicEvent.postBattleScreen.battleResults.playersPlace(),
                        subheading: R.strings.cosmicEvent.postBattleScreen.battleResults.description(),
                        missionsCompleted: R.strings.cosmicEvent.postBattleScreen.battleResults.missionsCompleted(),
                        battleInfoHeading: R.strings.cosmicEvent.postBattleScreen.battleResults.info.heading(),
                        battleInfoBattleOver: R.strings.cosmicEvent.postBattleScreen.battleResults.info.battleOver(),
                        affirmativeButton: R.strings.cosmicEvent.postBattleScreen.battleResults.button.affirmative(),
                        closeButton: R.strings.cosmicEvent.postBattleScreen.battleResults.button.close(),
                    },
                    Gu = [
                        {
                            description: '++EARN POINTS ADD BE++',
                            missionIcon:
                                R.images.cosmic_event.gui.maps.icons.postBattleView.dailyMissionCard.earnPoints(),
                            marsPoints: 100,
                            moneyGained: 1e4,
                            progressBarCurrentValue: 10,
                            progressBarMaxValue: 10,
                            showMarsPoints: !1,
                        },
                        {
                            description: 'KILL VEHICLS s',
                            missionIcon:
                                R.images.cosmic_event.gui.maps.icons.postBattleView.dailyMissionCard.killVehicles(),
                            marsPoints: 100,
                            moneyGained: 1e4,
                            progressBarCurrentValue: 5,
                            progressBarMaxValue: 10,
                            showMarsPoints: !1,
                        },
                        {
                            description: 'BATLZ TODO BnE fsdfdsf ',
                            missionIcon: R.images.cosmic_event.gui.maps.icons.postBattleView.dailyMissionCard.battles(),
                            marsPoints: 100,
                            moneyGained: 1e4,
                            progressBarCurrentValue: 8,
                            progressBarMaxValue: 10,
                            showMarsPoints: !0,
                        },
                    ],
                    Vu = (0, h.observer)(() => {
                        const u = p(),
                            e = u.model,
                            t = (u.controls, e.root.get()),
                            a = [
                                {
                                    label: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.marsPoints(),
                                    points: t.totalPoints,
                                    icon: R.images.cosmic_event.gui.maps.icons.postBattleView.battleResultsTab.marsPoints_icon(),
                                    tooltipHeader:
                                        R.strings.cosmicEvent.postBattleScreen.arenaScore.tooltip.marsPoints.header(),
                                    tooltipBody:
                                        R.strings.cosmicEvent.postBattleScreen.arenaScore.tooltip.marsPoints.body(),
                                },
                                {
                                    label: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.enemyKills(),
                                    points: t.killAmount,
                                    icon: R.images.cosmic_event.gui.maps.icons.postBattleView.battleResultsTab.enemyKills_icon(),
                                    tooltipHeader:
                                        R.strings.cosmicEvent.postBattleScreen.arenaScore.tooltip.enemyKills.header(),
                                    tooltipBody:
                                        R.strings.cosmicEvent.postBattleScreen.arenaScore.tooltip.enemyKills.body(),
                                },
                                {
                                    label: R.strings.cosmicEvent.postBattleScreen.arenaScore.player.abilityPickups(),
                                    points: t.pickupAmount,
                                    icon: R.images.cosmic_event.gui.maps.icons.postBattleView.battleResultsTab.abilityPickup_icon(),
                                    tooltipHeader:
                                        R.strings.cosmicEvent.postBattleScreen.arenaScore.tooltip.abilityPickups.header(),
                                    tooltipBody:
                                        R.strings.cosmicEvent.postBattleScreen.arenaScore.tooltip.abilityPickups.body(),
                                },
                            ];
                        return r().createElement(
                            'div',
                            { className: 'BattleResults_base_3e' },
                            r().createElement('div', { className: 'BattleResults_colorFill_9a' }),
                            r().createElement(
                                'div',
                                { className: 'BattleResults_wrapper_4b' },
                                r().createElement(G, {
                                    text: $u.heading,
                                    binding: { place: 1 },
                                    classMix: 'BattleResults_heading_63',
                                }),
                                r().createElement('div', { className: 'BattleResults_subheading_50' }, $u.subheading),
                                r().createElement('img', {
                                    className: 'BattleResults_dividerIcon_35',
                                    src: R.images.cosmic_event.gui.maps.icons.postBattleView.battleResultsTab.divider(),
                                }),
                                r().createElement(
                                    'div',
                                    { className: 'BattleResults_achievements_43' },
                                    a.map(({ label: u, points: e, icon: t, tooltipBody: a, tooltipHeader: n }, s) =>
                                        r().createElement(
                                            eu,
                                            { header: n, body: a, key: 'x_' + s },
                                            r().createElement(
                                                'div',
                                                { className: 'BattleResults_achievement_42', key: 'y_' + s },
                                                r().createElement('img', {
                                                    className: 'BattleResults_achievement_icon_0f',
                                                    src: t,
                                                }),
                                                r().createElement(
                                                    'div',
                                                    { className: 'BattleResults_achievement_points_39' },
                                                    e,
                                                ),
                                                r().createElement(
                                                    'div',
                                                    { className: 'BattleResults_achievement_label_9d' },
                                                    u,
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'BattleResults_dailyMissions_df' },
                                    Gu.length > 0
                                        ? Gu.map((u, e) =>
                                              r().createElement(
                                                  Iu,
                                                  Wu({ className: 'BattleResults_dailyMission_af' }, u, { key: e }),
                                              ),
                                          )
                                        : r().createElement(
                                              'div',
                                              { className: 'BattleResults_dailyMissions_completed_71' },
                                              $u.missionsCompleted,
                                          ),
                                ),
                            ),
                        );
                    }),
                    ju = {
                        base: 'CosmicPostBattle_base_00',
                        arenaScore: 'CosmicPostBattle_arenaScore_cb',
                        closeButton: 'CosmicPostBattle_closeButton_67',
                        tabs: 'CosmicPostBattle_tabs_74',
                        tabs_patchWorkDecoration: 'CosmicPostBattle_tabs_patchWorkDecoration_eb',
                        tabs_patchWorkDecoration_right: 'CosmicPostBattle_tabs_patchWorkDecoration_right_a9',
                        tabs_decoration: 'CosmicPostBattle_tabs_decoration_2a',
                        tabContainer: 'CosmicPostBattle_tabContainer_83',
                        tab_inactive: 'CosmicPostBattle_tab_inactive_38',
                        tab_selected: 'CosmicPostBattle_tab_selected_be',
                        tab_text: 'CosmicPostBattle_tab_text_4b',
                        tab_border: 'CosmicPostBattle_tab_border_48',
                        tab_glow: 'CosmicPostBattle_tab_glow_30',
                    };
                function Uu(u) {
                    engine.call('PlaySound', u);
                }
                const Ku = {
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
                    zu = [
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
                function Yu() {
                    return (
                        (Yu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Yu.apply(this, arguments)
                    );
                }
                class qu extends r().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Uu(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Uu(this.props.soundClick);
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                u && u(e), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            a = u.goto,
                            n = u.side,
                            s = u.type,
                            i = u.classNames,
                            l = u.onMouseEnter,
                            E = u.onMouseLeave,
                            c = u.onMouseDown,
                            A = u.onMouseUp,
                            F =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(u);
                                    for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(u, zu)),
                            m = o()(Ku.base, Ku[`base__${s}`], Ku[`base__${n}`], null == i ? void 0 : i.base),
                            D = o()(Ku.icon, Ku[`icon__${s}`], Ku[`icon__${n}`], null == i ? void 0 : i.icon),
                            B = o()(Ku.glow, null == i ? void 0 : i.glow),
                            d = o()(Ku.caption, Ku[`caption__${s}`], null == i ? void 0 : i.caption),
                            _ = o()(Ku.goto, null == i ? void 0 : i.goto);
                        return r().createElement(
                            'div',
                            Yu(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(E),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                F,
                            ),
                            'info' !== s && r().createElement('div', { className: Ku.shine }),
                            r().createElement('div', { className: D }, r().createElement('div', { className: B })),
                            r().createElement('div', { className: d }, e),
                            a && r().createElement('div', { className: _ }, a),
                        );
                    }
                }
                var Zu;
                (qu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (u) {
                        (u.BattleResults = 'Battle'), (u.ArenaScore = 'ArenaScore');
                    })(Zu || (Zu = {}));
                const Xu = { closeButton: R.strings.cosmicEvent.postBattleScreen.battleResults.button.close() },
                    Ju = (0, h.observer)(() => {
                        const u = (0, a.useState)(Zu.BattleResults),
                            e = u[0],
                            t = u[1],
                            n = p(),
                            s = n.model,
                            i = n.controls;
                        return (
                            s.root.get(),
                            r().createElement(
                                'div',
                                { className: o()(ju.base, e === Zu.BattleResults ? ju.battleResults : ju.arenaScore) },
                                e === Zu.BattleResults ? r().createElement(Vu, null) : r().createElement(x, null),
                                r().createElement(z, null),
                                r().createElement(
                                    'div',
                                    { className: ju.closeButton },
                                    r().createElement(qu, {
                                        caption: Xu.closeButton,
                                        onClick: i.onClose,
                                        side: 'right',
                                        type: 'close',
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: ju.tabs },
                                    r().createElement('img', {
                                        className: ju.tabs_patchWorkDecoration,
                                        src: R.images.cosmic_event.gui.maps.icons.postBattleView.tabs.patchwork_decor(),
                                    }),
                                    r().createElement('img', {
                                        className: ju.tabs_decoration,
                                        src: R.images.cosmic_event.gui.maps.icons.postBattleView.tabs.tabs_decor(),
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: ju.tabContainer },
                                        r().createElement(
                                            'div',
                                            {
                                                className: e === Zu.BattleResults ? ju.tab_selected : ju.tab_inactive,
                                                onClick: () => {
                                                    e !== Zu.BattleResults && t(Zu.BattleResults);
                                                },
                                            },
                                            e === Zu.BattleResults &&
                                                r().createElement(
                                                    r().Fragment,
                                                    null,
                                                    r().createElement('div', { className: ju.tab_border }),
                                                    r().createElement('div', { className: ju.tab_glow }),
                                                ),
                                            r().createElement(
                                                'div',
                                                { className: ju.tab_text },
                                                R.strings.cosmicEvent.postBattleScreen.tabs.battleResults(),
                                            ),
                                        ),
                                        r().createElement(
                                            'div',
                                            {
                                                className: e === Zu.ArenaScore ? ju.tab_selected : ju.tab_inactive,
                                                onClick: () => {
                                                    e !== Zu.ArenaScore && t(Zu.ArenaScore);
                                                },
                                            },
                                            e === Zu.ArenaScore &&
                                                r().createElement(
                                                    r().Fragment,
                                                    null,
                                                    r().createElement('div', { className: ju.tab_border }),
                                                    r().createElement('div', { className: ju.tab_glow }),
                                                ),
                                            r().createElement(
                                                'div',
                                                { className: ju.tab_text },
                                                R.strings.cosmicEvent.postBattleScreen.tabs.arenaScore(),
                                            ),
                                        ),
                                    ),
                                    r().createElement('img', {
                                        className: ju.tabs_patchWorkDecoration_right,
                                        src: R.images.cosmic_event.gui.maps.icons.postBattleView.tabs.patchwork_decor(),
                                    }),
                                ),
                            )
                        );
                    }),
                    Qu = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    ue = {
                        extraLarge: { weight: 4, width: 2200, height: 1200 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var ee;
                function te(u, e, t) {
                    const a = (function (u, e) {
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
                        r = (function (u, e) {
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
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
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
                })(ee || (ee = {}));
                const ae = viewEnv.pxToRem(viewEnv.getClientWidth()),
                    re = viewEnv.pxToRem(viewEnv.getClientHeight()),
                    ne = Object.assign({ width: ae, height: re }, te(ae, re, ue)),
                    se = (0, a.createContext)(ne),
                    ie = ['children'],
                    oe = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(u);
                                for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, ie);
                        const r = (0, a.useContext)(se),
                            n = r.extraLarge,
                            s = r.large,
                            i = r.medium,
                            o = r.small,
                            l = r.extraSmall,
                            E = r.extraLargeWidth,
                            c = r.largeWidth,
                            A = r.mediumWidth,
                            F = r.smallWidth,
                            m = r.extraSmallWidth,
                            D = r.extraLargeHeight,
                            B = r.largeHeight,
                            d = r.mediumHeight,
                            _ = r.smallHeight,
                            C = r.extraSmallHeight,
                            g = { extraLarge: D, large: B, medium: d, small: _, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return e;
                            if (t.large && s) return e;
                            if (t.medium && i) return e;
                            if (t.small && o) return e;
                            if (t.extraSmall && l) return e;
                        } else {
                            if (t.extraLargeWidth && E) return Qu(e, t, g);
                            if (t.largeWidth && c) return Qu(e, t, g);
                            if (t.mediumWidth && A) return Qu(e, t, g);
                            if (t.smallWidth && F) return Qu(e, t, g);
                            if (t.extraSmallWidth && m) return Qu(e, t, g);
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
                                if (t.largeHeight && B) return e;
                                if (t.mediumHeight && d) return e;
                                if (t.smallHeight && _) return e;
                                if (t.extraSmallHeight && C) return e;
                            }
                        }
                        return null;
                    };
                (oe.defaultProps = {
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
                    (0, a.memo)(oe);
                const le = (0, a.memo)(({ children: u }) => {
                    const e = (0, a.useContext)(se),
                        t = (0, a.useState)(e),
                        n = t[0],
                        s = t[1],
                        i = (0, a.useCallback)((u, e) => {
                            const t = viewEnv.pxToRem(u),
                                a = viewEnv.pxToRem(e);
                            s(Object.assign({ width: t, height: a }, te(t, a, ue)));
                        }, []);
                    ((u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    })(() => {
                        engine.on('clientResized', i);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', i), [i]);
                    const o = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                    return r().createElement(se.Provider, { value: o }, u);
                });
                var Ee = t(926),
                    ce = t.n(Ee);
                let Ae, Fe, me;
                !(function (u) {
                    (u[(u.ExtraSmall = ue.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = ue.small.width)] = 'Small'),
                        (u[(u.Medium = ue.medium.width)] = 'Medium'),
                        (u[(u.Large = ue.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = ue.extraLarge.width)] = 'ExtraLarge');
                })(Ae || (Ae = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = ue.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = ue.small.width)] = 'Small'),
                            (u[(u.Medium = ue.medium.width)] = 'Medium'),
                            (u[(u.Large = ue.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = ue.extraLarge.width)] = 'ExtraLarge');
                    })(Fe || (Fe = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = ue.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = ue.small.height)] = 'Small'),
                            (u[(u.Medium = ue.medium.height)] = 'Medium'),
                            (u[(u.Large = ue.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = ue.extraLarge.height)] = 'ExtraLarge');
                    })(me || (me = {}));
                const De = ['children', 'className'];
                function Be() {
                    return (
                        (Be =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Be.apply(this, arguments)
                    );
                }
                const de = {
                        [Fe.ExtraSmall]: '',
                        [Fe.Small]: ce().SMALL_WIDTH,
                        [Fe.Medium]: `${ce().SMALL_WIDTH} ${ce().MEDIUM_WIDTH}`,
                        [Fe.Large]: `${ce().SMALL_WIDTH} ${ce().MEDIUM_WIDTH} ${ce().LARGE_WIDTH}`,
                        [Fe.ExtraLarge]: `${ce().SMALL_WIDTH} ${ce().MEDIUM_WIDTH} ${ce().LARGE_WIDTH} ${ce().EXTRA_LARGE_WIDTH}`,
                    },
                    _e = {
                        [me.ExtraSmall]: '',
                        [me.Small]: ce().SMALL_HEIGHT,
                        [me.Medium]: `${ce().SMALL_HEIGHT} ${ce().MEDIUM_HEIGHT}`,
                        [me.Large]: `${ce().SMALL_HEIGHT} ${ce().MEDIUM_HEIGHT} ${ce().LARGE_HEIGHT}`,
                        [me.ExtraLarge]: `${ce().SMALL_HEIGHT} ${ce().MEDIUM_HEIGHT} ${ce().LARGE_HEIGHT} ${ce().EXTRA_LARGE_HEIGHT}`,
                    },
                    Ce = {
                        [Ae.ExtraSmall]: '',
                        [Ae.Small]: ce().SMALL,
                        [Ae.Medium]: `${ce().SMALL} ${ce().MEDIUM}`,
                        [Ae.Large]: `${ce().SMALL} ${ce().MEDIUM} ${ce().LARGE}`,
                        [Ae.ExtraLarge]: `${ce().SMALL} ${ce().MEDIUM} ${ce().LARGE} ${ce().EXTRA_LARGE}`,
                    },
                    ge = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(u);
                                for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, De);
                        const s = (() => {
                                const u = (0, a.useContext)(se),
                                    e = u.width,
                                    t = u.height,
                                    r = ((u) => {
                                        switch (!0) {
                                            case u.extraLarge:
                                                return Ae.ExtraLarge;
                                            case u.large:
                                                return Ae.Large;
                                            case u.medium:
                                                return Ae.Medium;
                                            case u.small:
                                                return Ae.Small;
                                            case u.extraSmall:
                                                return Ae.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), Ae.ExtraSmall
                                                );
                                        }
                                    })(u),
                                    n = ((u) => {
                                        switch (!0) {
                                            case u.extraLargeWidth:
                                                return Fe.ExtraLarge;
                                            case u.largeWidth:
                                                return Fe.Large;
                                            case u.mediumWidth:
                                                return Fe.Medium;
                                            case u.smallWidth:
                                                return Fe.Small;
                                            case u.extraSmallWidth:
                                                return Fe.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), Fe.ExtraSmall
                                                );
                                        }
                                    })(u),
                                    s = ((u) => {
                                        switch (!0) {
                                            case u.extraLargeHeight:
                                                return me.ExtraLarge;
                                            case u.largeHeight:
                                                return me.Large;
                                            case u.mediumHeight:
                                                return me.Medium;
                                            case u.smallHeight:
                                                return me.Small;
                                            case u.extraSmallHeight:
                                                return me.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), me.ExtraSmall
                                                );
                                        }
                                    })(u);
                                return {
                                    mediaSize: r,
                                    mediaWidth: n,
                                    mediaHeight: s,
                                    remScreenWidth: e,
                                    remScreenHeight: t,
                                };
                            })(),
                            i = s.mediaWidth,
                            l = s.mediaHeight,
                            E = s.mediaSize;
                        return r().createElement('div', Be({ className: o()(t, de[i], _e[l], Ce[E]) }, n), e);
                    },
                    pe = ['children'],
                    he = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(u);
                                for (a = 0; a < n.length; a++) (t = n[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, pe);
                        return r().createElement(le, null, r().createElement(ge, t, e));
                    };
                engine.whenReady.then(() => {
                    viewEnv.setFramerateLimited(!1),
                        document.documentElement.setAttribute('keep-esc-propagation', ''),
                        s().render(
                            r().createElement(he, null, r().createElement(g, null, r().createElement(Ju, null))),
                            document.getElementById('root'),
                        );
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
        (__webpack_require__.O = (u, e, t, a) => {
            if (!e) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, a] = deferred[o], n = !0, s = 0; s < e.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[s]))
                            ? e.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, a];
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
        (() => {
            var u = { 765: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        r,
                        [n, s, i] = t,
                        o = 0;
                    if (n.some((e) => 0 !== u[e])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (e && e(t); o < n.length; o++)
                        (r = n[o]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(922));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
