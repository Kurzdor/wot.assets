(() => {
    var __webpack_modules__ = {
            8597: (u, e, t) => {
                const a = t(4066),
                    r = {
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
                    },
                    i = (u) => (e, t) => {
                        const r = a.rule({ selector: `:global(.${u}) &` });
                        r.append(e.nodes), r.walkAtRules('include', t), e.replaceWith(r);
                    },
                    l = {
                        mediaSmallWidth: i(r.SMALL_WIDTH),
                        mediaMediumWidth: i(r.MEDIUM_WIDTH),
                        mediaLargeWidth: i(r.LARGE_WIDTH),
                        mediaExtraLargeWidth: i(r.EXTRA_LARGE_WIDTH),
                        mediaSmallHeight: i(r.SMALL_HEIGHT),
                        mediaMediumHeight: i(r.MEDIUM_HEIGHT),
                        mediaLargeHeight: i(r.LARGE_HEIGHT),
                        mediaExtraLargeHeight: i(r.EXTRA_LARGE_HEIGHT),
                        mediaSmall: i(r.SMALL),
                        mediaMedium: i(r.MEDIUM),
                        mediaLarge: i(r.LARGE),
                        mediaExtraLarge: i(r.EXTRA_LARGE),
                    };
                for (const u in l) Object.prototype.hasOwnProperty.call(l, u) && (l[u].type = 'mediaRule');
                u.exports = Object.assign({}, l, { MEDIA_CSS: r });
            },
            5521: (u, e, t) => {
                'use strict';
                let a, r;
                t.d(e, { n: () => a }),
                    (function (u) {
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
                    })(a || (a = {})),
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
                    })(r || (r = {}));
            },
            1358: (u, e, t) => {
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
                t.d(e, { Sw: () => i.Z, B3: () => o, Z5: () => l, B0: () => s, ry: () => d });
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
                var i = t(1358);
                const l = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    n = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let s;
                var E;
                ((E = s || (s = {}))[(E.UNDEFINED = 0)] = 'UNDEFINED'),
                    (E[(E.TOOLTIP = 1)] = 'TOOLTIP'),
                    (E[(E.POP_OVER = 2)] = 'POP_OVER'),
                    (E[(E.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (E[(E.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (E[(E.MOVE = 16)] = 'MOVE'),
                    (E[(E.CLOSE = 32)] = 'CLOSE'),
                    (E[(E.MINIMIZE = 64)] = 'MINIMIZE');
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    A = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var D = t(5521);
                const _ = ['args'];
                function B(u, e, t, a, r, i, l) {
                    try {
                        var n = u[i](l),
                            s = n.value;
                    } catch (u) {
                        return void t(u);
                    }
                    n.done ? e(s) : Promise.resolve(s).then(a, r);
                }
                const C = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    d = (function () {
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
                                        var i = u.apply(e, t);
                                        function l(u) {
                                            B(i, a, r, l, n, 'next', u);
                                        }
                                        function n(u) {
                                            B(i, a, r, l, n, 'throw', u);
                                        }
                                        l(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    m = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        r = {},
                                        i = Object.keys(u);
                                    for (a = 0; a < i.length; a++) (t = i[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, _);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    h = () => m(s.CLOSE),
                    g = (u, e) => {
                        u.keyCode === D.n.ESCAPE && e();
                    };
                var p = t(7572);
                const b = r.instance,
                    v = {
                        DataTracker: i.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: A,
                        TimeFormatType: c,
                        DateFormatType: F,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (u) => m(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => m(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            m(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, r) => {
                            const i = viewEnv.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                n = l.x,
                                E = l.y,
                                o = l.width,
                                A = l.height,
                                c = {
                                    x: viewEnv.pxToRem(n + i.x),
                                    y: viewEnv.pxToRem(E + i.y),
                                    width: viewEnv.pxToRem(o),
                                    height: viewEnv.pxToRem(A),
                                };
                            m(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                direction: e,
                                bbox: C(c),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, h);
                        },
                        handleViewEvent: m,
                        onBindingsReady: d,
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        ClickOutsideManager: b,
                        SystemLocale: l,
                        UserLocale: n,
                    };
                window.ViewEnvHelper = v;
            },
            9667: (u, e, t) => {
                'use strict';
                var a = t(4179),
                    r = t(6179),
                    i = t.n(r);
                const l = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    n = {
                        extraLarge: { weight: 4, width: 2200, height: 1200 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var s;
                function E(u, e, t) {
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
                        i = Math.min(a, r);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
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
                })(s || (s = {}));
                const o = viewEnv.pxToRem(viewEnv.getClientWidth()),
                    A = viewEnv.pxToRem(viewEnv.getClientHeight()),
                    c = Object.assign({ width: o, height: A }, E(o, A, n)),
                    F = (0, r.createContext)(c),
                    D = ['children'],
                    _ = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(u);
                                for (a = 0; a < i.length; a++) (t = i[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, D);
                        const a = (0, r.useContext)(F),
                            i = a.extraLarge,
                            n = a.large,
                            s = a.medium,
                            E = a.small,
                            o = a.extraSmall,
                            A = a.extraLargeWidth,
                            c = a.largeWidth,
                            _ = a.mediumWidth,
                            B = a.smallWidth,
                            C = a.extraSmallWidth,
                            d = a.extraLargeHeight,
                            m = a.largeHeight,
                            h = a.mediumHeight,
                            g = a.smallHeight,
                            p = a.extraSmallHeight,
                            b = { extraLarge: d, large: m, medium: h, small: g, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return e;
                            if (t.large && n) return e;
                            if (t.medium && s) return e;
                            if (t.small && E) return e;
                            if (t.extraSmall && o) return e;
                        } else {
                            if (t.extraLargeWidth && A) return l(e, t, b);
                            if (t.largeWidth && c) return l(e, t, b);
                            if (t.mediumWidth && _) return l(e, t, b);
                            if (t.smallWidth && B) return l(e, t, b);
                            if (t.extraSmallWidth && C) return l(e, t, b);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && d) return e;
                                if (t.largeHeight && m) return e;
                                if (t.mediumHeight && h) return e;
                                if (t.smallHeight && g) return e;
                                if (t.extraSmallHeight && p) return e;
                            }
                        }
                        return null;
                    };
                (_.defaultProps = {
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
                    (0, r.memo)(_);
                const B = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    C = (0, r.memo)(({ children: u }) => {
                        const e = (0, r.useContext)(F),
                            t = (0, r.useState)(e),
                            a = t[0],
                            l = t[1],
                            s = (0, r.useCallback)((u, e) => {
                                const t = viewEnv.pxToRem(u),
                                    a = viewEnv.pxToRem(e);
                                l(Object.assign({ width: t, height: a }, E(t, a, n)));
                            }, []);
                        B(() => {
                            engine.on('clientResized', s);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', s), [s]);
                        const o = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                        return i().createElement(F.Provider, { value: o }, u);
                    });
                var d = t(6483),
                    m = t.n(d),
                    h = t(8597);
                let g, p, b;
                !(function (u) {
                    (u[(u.ExtraSmall = n.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = n.small.width)] = 'Small'),
                        (u[(u.Medium = n.medium.width)] = 'Medium'),
                        (u[(u.Large = n.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = n.extraLarge.width)] = 'ExtraLarge');
                })(g || (g = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = n.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = n.small.width)] = 'Small'),
                            (u[(u.Medium = n.medium.width)] = 'Medium'),
                            (u[(u.Large = n.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = n.extraLarge.width)] = 'ExtraLarge');
                    })(p || (p = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = n.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = n.small.height)] = 'Small'),
                            (u[(u.Medium = n.medium.height)] = 'Medium'),
                            (u[(u.Large = n.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = n.extraLarge.height)] = 'ExtraLarge');
                    })(b || (b = {}));
                const v = () => {
                        const u = (0, r.useContext)(F),
                            e = u.width,
                            t = u.height,
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return g.ExtraLarge;
                                    case u.large:
                                        return g.Large;
                                    case u.medium:
                                        return g.Medium;
                                    case u.small:
                                        return g.Small;
                                    case u.extraSmall:
                                        return g.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), g.ExtraSmall;
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return p.ExtraLarge;
                                    case u.largeWidth:
                                        return p.Large;
                                    case u.mediumWidth:
                                        return p.Medium;
                                    case u.smallWidth:
                                        return p.Small;
                                    case u.extraSmallWidth:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(u),
                            l = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return b.ExtraLarge;
                                    case u.largeHeight:
                                        return b.Large;
                                    case u.mediumHeight:
                                        return b.Medium;
                                    case u.smallHeight:
                                        return b.Small;
                                    case u.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: l, remScreenWidth: e, remScreenHeight: t };
                    },
                    f = ['children', 'className'];
                function w() {
                    return (
                        (w =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        w.apply(this, arguments)
                    );
                }
                const S = {
                        [p.ExtraSmall]: '',
                        [p.Small]: h.MEDIA_CSS.SMALL_WIDTH,
                        [p.Medium]: `${h.MEDIA_CSS.SMALL_WIDTH} ${h.MEDIA_CSS.MEDIUM_WIDTH}`,
                        [p.Large]: `${h.MEDIA_CSS.SMALL_WIDTH} ${h.MEDIA_CSS.MEDIUM_WIDTH} ${h.MEDIA_CSS.LARGE_WIDTH}`,
                        [p.ExtraLarge]: `${h.MEDIA_CSS.SMALL_WIDTH} ${h.MEDIA_CSS.MEDIUM_WIDTH} ${h.MEDIA_CSS.LARGE_WIDTH} ${h.MEDIA_CSS.EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h.MEDIA_CSS.SMALL_HEIGHT,
                        [b.Medium]: `${h.MEDIA_CSS.SMALL_HEIGHT} ${h.MEDIA_CSS.MEDIUM_HEIGHT}`,
                        [b.Large]: `${h.MEDIA_CSS.SMALL_HEIGHT} ${h.MEDIA_CSS.MEDIUM_HEIGHT} ${h.MEDIA_CSS.LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${h.MEDIA_CSS.SMALL_HEIGHT} ${h.MEDIA_CSS.MEDIUM_HEIGHT} ${h.MEDIA_CSS.LARGE_HEIGHT} ${h.MEDIA_CSS.EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [g.ExtraSmall]: '',
                        [g.Small]: h.MEDIA_CSS.SMALL,
                        [g.Medium]: `${h.MEDIA_CSS.SMALL} ${h.MEDIA_CSS.MEDIUM}`,
                        [g.Large]: `${h.MEDIA_CSS.SMALL} ${h.MEDIA_CSS.MEDIUM} ${h.MEDIA_CSS.LARGE}`,
                        [g.ExtraLarge]: `${h.MEDIA_CSS.SMALL} ${h.MEDIA_CSS.MEDIUM} ${h.MEDIA_CSS.LARGE} ${h.MEDIA_CSS.EXTRA_LARGE}`,
                    },
                    M = (u) => {
                        let e = u.children,
                            t = u.className,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(u);
                                for (a = 0; a < i.length; a++) (t = i[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, f);
                        const r = v(),
                            l = r.mediaWidth,
                            n = r.mediaHeight,
                            s = r.mediaSize;
                        return i().createElement('div', w({ className: m()(t, S[l], k[n], L[s]) }, a), e);
                    },
                    x = ['children'],
                    T = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(u);
                                for (a = 0; a < i.length; a++) (t = i[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, x);
                        return i().createElement(C, null, i().createElement(M, t, e));
                    };
                var y = t(493),
                    N = t.n(y),
                    O = t(1281);
                let I;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(I || (I = {}));
                const H = (u) => u.replace(/&nbsp;/g, ' '),
                    P = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    W = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    U = (u, e, t = I.left) => u.split(e).reduce(t === I.left ? P : W, []),
                    V = (() => {
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
                    G = ['zh_cn', 'zh_sg', 'zh_tw'];
                let j;
                var $;
                (($ = j || (j = {})).SHORT_DATE = 'short-date'),
                    ($.SHORT_TIME = 'short-time'),
                    ($.SHORT_DATE_TIME = 'short-date-time'),
                    ($.FULL_DATE = 'full-date'),
                    ($.FULL_DATE_TIME = 'full-date-time'),
                    ($.MONTH = 'month'),
                    ($.MONTH_DATE = 'month-date'),
                    ($.DATE_MONTH = 'date-month'),
                    ($.MONTH_YEAR = 'month-year'),
                    ($.WEEK_DAY = 'week-day'),
                    ($.WEEK_DAY_TIME = 'week-day-time'),
                    ($.YEAR = 'year'),
                    ($.DATE_YEAR = 'date-year');
                const K = (u = 1) => {
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
                    },
                    Y = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    q = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    z = a.Sw.instance;
                let X;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(X || (X = {}));
                const Z = (u = 'model', e = X.Deep) => {
                        const t = (0, r.useState)(0),
                            a = (t[0], t[1]),
                            i = (0, r.useMemo)(() => K(), []),
                            l = i.caller,
                            n = i.resId,
                            s = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== l ? `children.${l}.${u}` : u),
                                [l, u],
                            ),
                            E = (0, r.useState)(() =>
                                ((u) => {
                                    const e = Y(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return q(e) ? e.value : e;
                                })(
                                    ((u) =>
                                        ((u, e) =>
                                            u.split('.').reduce((u, e) => {
                                                const t = Y(`${u}.${e}`, window);
                                                return q(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                            }))(u))(s),
                                ),
                            ),
                            o = E[0],
                            A = E[1],
                            c = (0, r.useRef)(-1);
                        return (
                            B(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? X.Deep : X.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== X.None)
                                ) {
                                    const t = (u) => {
                                            ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                            e === X.Deep
                                                ? (u === o && a((u) => u + 1), A(u))
                                                : A(Object.assign([], u));
                                        },
                                        r = ((u) => {
                                            const e = u.split('.');
                                            if (e.length > 0) {
                                                const u = [e[0]];
                                                return (
                                                    e.reduce((e, t) => {
                                                        const a = Y(`${e}.${t}`, window);
                                                        return q(a)
                                                            ? (u.push(a.id), `${e}.${t}.value`)
                                                            : (u.push(t), `${e}.${t}`);
                                                    }),
                                                    u.reduce((u, e) => u + '.' + e)
                                                );
                                            }
                                            return '';
                                        })(u);
                                    c.current = z.addCallback(r, t, n, e === X.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (e !== X.None)
                                    return () => {
                                        z.removeCallback(c.current, n);
                                    };
                            }, [n, e]),
                            o
                        );
                    },
                    J =
                        (a.Sw.instance,
                        [
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
                        ]);
                function Q(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
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
                    });
                }
                const uu = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    eu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            i = u.onMouseEnter,
                            l = u.onMouseLeave,
                            n = u.onMouseDown,
                            s = u.onClick,
                            E = u.ignoreShowDelay,
                            o = void 0 !== E && E,
                            A = u.ignoreMouseClick,
                            c = void 0 !== A && A,
                            F = u.decoratorId,
                            D = void 0 === F ? 0 : F,
                            _ = u.isEnabled,
                            B = void 0 === _ || _,
                            C = u.onShow,
                            d = u.onHide,
                            m = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(u);
                                for (a = 0; a < i.length; a++) (t = i[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, J);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            g = (0, r.useMemo)(() => K(), []).resId,
                            p = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (uu(t, D, { isMouseEvent: !0, on: !0, arguments: Q(a) }, g),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, D, a, g, C]),
                            b = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        uu(t, D, { on: !1 }, g),
                                        h.current.isVisible && d && d(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, D, g, d]),
                            v = (0, r.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const u = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', v, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', v, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !B && b();
                            }, [B, b]),
                            (0, r.useEffect)(
                                () => (
                                    engine.on('wrapperMouseOut', b),
                                    () => {
                                        engine.off('wrapperMouseOut', b), b();
                                    }
                                ),
                                [b],
                            ),
                            B
                                ? (0, r.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((f = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(p, o ? 100 : 400)),
                                                          i && i(u),
                                                          f && f(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  b(), l && l(e), u && u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !c && b(), s && s(e), u && u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !c && b(), n && n(e), u && u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          m,
                                      ),
                                  )
                                : e
                        );
                        var f;
                    },
                    tu = ['children'];
                function au() {
                    return (
                        (au =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        au.apply(this, arguments)
                    );
                }
                const ru = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(u);
                                for (a = 0; a < i.length; a++) (t = i[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, tu);
                        return i().createElement(
                            eu,
                            au(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            e,
                        );
                    },
                    iu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function lu() {
                    return (
                        (lu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        lu.apply(this, arguments)
                    );
                }
                const nu = R.views.common.tooltip_window.simple_tooltip_content,
                    su = (u) => {
                        let e = u.children,
                            t = u.body,
                            a = u.header,
                            l = u.note,
                            n = u.alert,
                            s = u.args,
                            E = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(u);
                                for (a = 0; a < i.length; a++) (t = i[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, iu);
                        const o = (0, r.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: a, note: l, alert: n });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [n, t, a, l, s]);
                        return i().createElement(
                            eu,
                            lu(
                                {
                                    contentId:
                                        ((A = null == s ? void 0 : s.hasHtmlContent),
                                        A ? nu.SimpleTooltipHtmlContent('resId') : nu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: o,
                                },
                                E,
                            ),
                            e,
                        );
                        var A;
                    };
                function Eu() {
                    return (
                        (Eu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Eu.apply(this, arguments)
                    );
                }
                const ou = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const a = i().createElement('div', { className: t }, u);
                    if (e.header || e.body) return i().createElement(su, e, a);
                    const r = e.contentId;
                    return r ? i().createElement(eu, Eu({}, e, { contentId: r }), a) : i().createElement(ru, e, a);
                };
                var Au = t(8045);
                let cu, Fu, Du;
                !(function (u) {
                    (u[(u.Word = 0)] = 'Word'),
                        (u[(u.LineBreak = 1)] = 'LineBreak'),
                        (u[(u.NewLine = 2)] = 'NewLine'),
                        (u[(u.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (u[(u.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (u[(u.Binding = 5)] = 'Binding');
                })(cu || (cu = {})),
                    (function (u) {
                        (u.FlexStart = 'flex-start'), (u.Center = 'center'), (u.FlexEnd = 'flex-end');
                    })(Fu || (Fu = {})),
                    (function (u) {
                        (u.NBSP = ' '), (u.ZWNBSP = '\ufeff'), (u.NEW_LINE = '\n');
                    })(Du || (Du = {}));
                const _u = { [Du.NBSP]: cu.NoBreakSymbol, [Du.ZWNBSP]: cu.NoBreakSymbol, [Du.NEW_LINE]: cu.LineBreak },
                    Bu = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    Cu = (u) => ({ color: `#${u}` }),
                    du = ({ elementList: u, textBlock: e, key: t }) => {
                        const a = e.colorTag;
                        return a
                            ? Bu[a]
                                ? i().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: Bu[a] },
                                      u,
                                  )
                                : i().createElement('span', { key: t, 'data-block-type': e.blockType, style: Cu(a) }, u)
                            : i().createElement('span', { key: t, 'data-block-type': e.blockType }, u);
                    },
                    mu = {
                        [cu.Word]: du,
                        [cu.NoBreakSymbol]: du,
                        [cu.Binding]: ({ elementList: u, textBlock: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': e.blockType },
                                u.map((u) => i().createElement(i().Fragment, { key: t }, u)),
                            ),
                        [cu.LineBreak]: ({ key: u }) =>
                            i().createElement('span', {
                                key: u,
                                'data-block-type': cu.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [cu.NewLine]: ({ elementList: u, key: e }) =>
                            i().createElement(
                                'span',
                                { key: e, 'data-block-type': cu.NewLine, className: 'renderers_newLine_bd' },
                                u,
                            ),
                        [cu.NoBreakWrapper]: ({ elementList: u, key: e }) =>
                            i().createElement(
                                'span',
                                {
                                    key: e,
                                    'data-block-type': cu.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                u,
                            ),
                    },
                    hu = (u, e, t) => {
                        const a = [];
                        return (
                            u.childList.forEach((r, i) => {
                                const l = `${t}_${i}`;
                                if (((u) => void 0 !== u.childList)(r)) {
                                    const u = r,
                                        e = u.blockType,
                                        t = hu(u, mu[e], l);
                                    a.push(...t);
                                } else a.push(e({ elementList: [r], textBlock: u, key: l }));
                            }),
                            a
                        );
                    },
                    gu = (u, e, t, a) => {
                        let r = e.exec(u),
                            i = 0;
                        for (; r; ) i !== r.index && t(u.slice(i, r.index)), a(r), (i = e.lastIndex), (r = e.exec(u));
                        i !== u.length && t(u.slice(i));
                    },
                    pu = (u) => {
                        const e = /[\s\u002d]/g;
                        let t = e.exec(u);
                        if (!t) return [u];
                        const a = [];
                        let r = 0;
                        for (; t; ) a.push(u.slice(r, e.lastIndex)), (r = e.lastIndex), (t = e.exec(u));
                        return r !== u.length && a.push(u.slice(r)), a;
                    },
                    bu = (u, e = '') => {
                        const t = [];
                        return (
                            gu(
                                u,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (u) => {
                                    t.push({ blockType: cu.Word, colorTag: e, childList: pu(u) });
                                },
                                (u) => {
                                    const a = u[0],
                                        r = _u[a.charAt(0)];
                                    r === cu.LineBreak
                                        ? t.push(
                                              ...((u) => {
                                                  const e = [
                                                      {
                                                          blockType: cu.LineBreak,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < u.length - 1; t++)
                                                      e.push({
                                                          blockType: cu.NewLine,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      });
                                                  return e;
                                              })(a),
                                          )
                                        : t.push({ blockType: r, colorTag: e, childList: [a] });
                                },
                            ),
                            t
                        );
                    },
                    vu = (u, e, t = '') => {
                        const a = [];
                        return (
                            gu(
                                u,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (u) => {
                                    a.push(...bu(u, t));
                                },
                                (u) => {
                                    const r = u[1],
                                        i = void 0 === e[r] ? u[0] : e[r];
                                    'string' == typeof i
                                        ? a.push(...bu(i, t))
                                        : a.push({ blockType: cu.Binding, colorTag: t, childList: [i] });
                                },
                            ),
                            a
                        );
                    },
                    fu = (u, e) => {
                        if (!u) return [e];
                        const t = [],
                            a = Object.assign({}, e, { childList: e.childList.splice(0, 1) });
                        if (u.blockType === cu.NoBreakWrapper) u.childList.push(a), t.push(u);
                        else {
                            const e = Object.assign({}, u, { childList: u.childList.splice(-1) });
                            u.childList.length > 0 && t.push(u),
                                t.push({ blockType: cu.NoBreakWrapper, colorTag: '', childList: [e, a] });
                        }
                        return e.childList.length > 0 && t.push(e), t;
                    },
                    wu = (u, e = {}) => {
                        if (!u) return [];
                        const t = ((u) => {
                            const e = [];
                            let t = !1;
                            return (
                                u.forEach((u) => {
                                    u.blockType === cu.NoBreakSymbol
                                        ? ((t = !0), e.push(...fu(e.pop(), u)))
                                        : (t ? e.push(...fu(e.pop(), u)) : e.push(u), (t = !1));
                                }),
                                e
                            );
                        })(
                            ((u, e) => {
                                const t = [];
                                return (
                                    gu(
                                        u,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (u) => {
                                            t.push(...vu(u, e));
                                        },
                                        (u) => {
                                            t.push(...vu(u[2], e, u[1]));
                                        },
                                    ),
                                    t
                                );
                            })(H(u).replace(/&zwnbsp;/g, '\ufeff'), e),
                        );
                        return ((u) => {
                            const e = [];
                            return (
                                u.forEach((u, t) => {
                                    e.push(
                                        ...((u, e) => {
                                            const t = [],
                                                a = u.blockType,
                                                r = mu[a],
                                                i = hu(u, r, e);
                                            return (
                                                a === cu.NoBreakWrapper
                                                    ? t.push(r({ elementList: i, textBlock: u, key: `${e}` }))
                                                    : t.push(...i),
                                                t
                                            );
                                        })(u, t),
                                    );
                                }),
                                e
                            );
                        })(t);
                    },
                    Su = (u, e) => !u || u.offsetTop + u.offsetHeight > e,
                    ku = (u, e) => u.offsetLeft + u.offsetWidth - e,
                    Lu = (u, e, t) => {
                        if (!u || !u.textContent) return [!1, 0];
                        if (u.offsetLeft > e) return [!1, 0];
                        const a = ku(u, e),
                            r = u.textContent.length,
                            i = u.offsetWidth / r,
                            l = Math.ceil(a / i);
                        if (a > 0) {
                            const a = Math.floor((e - u.offsetLeft) / i);
                            return a >= t ? [!0, t + l] : [!1, a];
                        }
                        const n = Math.max(t + l, 0);
                        return r < n ? [!1, 0] : [!0, n];
                    },
                    Mu = (u, e, t, a, r, l) => {
                        let n = -1,
                            s = null;
                        for (let E = t; E >= 0; E--) {
                            const t = u[E],
                                o = Number(u[E].getAttribute('data-block-type'));
                            if (o === cu.LineBreak || o === cu.NewLine || o === cu.Binding) continue;
                            const A = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const u = Lu(t, a, r),
                                    o = u[0],
                                    c = u[1];
                                if (!o) {
                                    c > 0 && (r -= c);
                                    continue;
                                }
                                const F = A.slice(0, A.length - c) + l,
                                    D = e[E];
                                (s = i().cloneElement(D, D.props, F)), (n = E);
                                break;
                            }
                            {
                                const u = t.children,
                                    o = e[E],
                                    c = o.props.children,
                                    F = Mu(u, c, u.length - 1, a, r, l),
                                    D = F[0],
                                    _ = F[1];
                                if (!(D < 0)) {
                                    const u = c.slice(0, D);
                                    (s = i().cloneElement(o, o.props, u, _)), (n = E);
                                    break;
                                }
                                r -= A.length;
                            }
                        }
                        return [n, s];
                    },
                    xu = i().memo(
                        ({
                            text: u,
                            classMix: e,
                            onSizeChanged: t,
                            binding: a,
                            tooltipArgs: l,
                            isTooltipEnable: n = !1,
                            isTruncationAvailable: s = !1,
                            justifyContent: E = Fu.FlexStart,
                            alignContent: o = Fu.FlexStart,
                            truncateIdentify: A = '...',
                        }) => {
                            const c = (0, r.useRef)(null),
                                F = (0, r.useRef)({ height: 0, width: 0 }),
                                D = (0, r.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                _ = D[0],
                                B = D[1],
                                C = (0, r.useMemo)(() => wu(u, a), [a, u]),
                                d = (0, r.useMemo)(() => (n && _.isTruncated ? l : void 0), [n, l, _.isTruncated]),
                                h = (0, r.useCallback)(
                                    (u) => {
                                        (F.current.width = u.contentRect.width),
                                            (F.current.height = u.contentRect.height);
                                        const e = ((u, e, t, a = '...') => {
                                                const r = [...e],
                                                    i = u.current;
                                                if (!i) return [r, !1];
                                                const l = t.height,
                                                    n = t.width,
                                                    s = i.lastElementChild;
                                                if (!Su(s, l) && ku(s, n) <= 0) return [r, !1];
                                                const E = i.children,
                                                    o = ((u, e) => {
                                                        let t = 0,
                                                            a = u.length - 1;
                                                        for (; a - t >= 0; ) {
                                                            const r = t + Math.ceil(0.5 * (a - t));
                                                            Su(u[r], e) ? (a = r - 1) : (t = r + 1);
                                                        }
                                                        return t - 1;
                                                    })(E, l);
                                                if (o < 0) return [r, !1];
                                                const A = Mu(E, r, o, n, a.length, a),
                                                    c = A[0],
                                                    F = A[1];
                                                return F && (r.splice(c, 1, F), r.splice(c + 1)), [r, !0];
                                            })(c, C, F.current, A),
                                            a = e[0],
                                            r = e[1];
                                        B({ elementList: a, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                    },
                                    [t, A, C],
                                ),
                                g = (0, r.useMemo)(() => ({ justifyContent: E, alignContent: o }), [o, E]);
                            return (
                                ((u, e, t = !0) => {
                                    const a = (0, r.useCallback)(
                                        (u) => {
                                            const t = u[0];
                                            e && e(t);
                                        },
                                        [e],
                                    );
                                    (0, r.useEffect)(() => {
                                        if (!u.current || !t) return;
                                        const e = new Au.Z((u) => a(u));
                                        return (
                                            e.observe(u.current),
                                            () => {
                                                e.disconnect();
                                            }
                                        );
                                    }, [a, t, u]);
                                })(c, h, s),
                                i().createElement(
                                    'div',
                                    {
                                        className: m()(
                                            'ExtendedText_base_71',
                                            e,
                                            'ExtendedText_base__zeroPadding_25',
                                            s && 'ExtendedText_base__isTruncationAvailable_5b',
                                        ),
                                        style: g,
                                    },
                                    i().createElement('div', { className: 'ExtendedText_unTruncated_b8', ref: c }, C),
                                    i().createElement(
                                        ou,
                                        { tooltipArgs: d },
                                        i().createElement(
                                            'div',
                                            {
                                                className: m()(
                                                    'ExtendedText_truncated_97',
                                                    !_.isTruncateFinished && s && 'ExtendedText_truncated__hide_31',
                                                ),
                                                style: g,
                                            },
                                            _.isTruncateFinished && s ? _.elementList : C,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Tu = 'epic_battle';
                let yu, Nu, Ou, Iu, Ru, Hu;
                !(function (u) {
                    (u.HangarView = 'hangar'),
                        (u.SetupView = 'setup_view'),
                        (u.ProgressView = 'progress_view'),
                        (u.RewardsView = 'rewards_view'),
                        (u.RewardsSelectionView = 'rewards_selection_view'),
                        (u.SkillsView = 'skills_view'),
                        (u.AwardsView = 'awards_view'),
                        (u.ContainerView = 'container_view');
                })(yu || (yu = {})),
                    (function (u) {
                        (u.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (u.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (u.BannerPerformance = 'banner_performance_tooltip'),
                            (u.SkillPointsTooltip = 'skill_points_tooltip'),
                            (u.SkillOrderTooltip = 'skill_order_tooltip'),
                            (u.CurrentSkillTooltip = 'current_skill_tooltip'),
                            (u.SkillLevelTab = 'skill_level_tab'),
                            (u.RewardsButton = 'rewards_button'),
                            (u.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (u.RewardTooltip = 'reward_tooltip'),
                            (u.AwardsOkButton = 'awards_ok'),
                            (u.AwardsView = 'awards_view'),
                            (u.RewardsSelectionView = 'rewards_selection_view');
                    })(Nu || (Nu = {})),
                    (function (u) {
                        (u.Click = 'click'), (u.Close = 'close');
                    })(Ou || (Ou = {})),
                    (function (u) {
                        (u.Firesupport = 'firesupport'), (u.Reconnaissance = 'reconnaissance'), (u.Tactics = 'tactics');
                    })(Iu || (Iu = {})),
                    (function (u) {
                        (u.Announce = 'announce'),
                            (u.Active = 'active'),
                            (u.Finished = 'finished'),
                            (u.Frozen = 'frozen');
                    })(Ru || (Ru = {})),
                    (function (u) {
                        (u[(u.NonSet = 0)] = 'NonSet'),
                            (u[(u.Debug = 10)] = 'Debug'),
                            (u[(u.Info = 20)] = 'Info'),
                            (u[(u.Warning = 30)] = 'Warning');
                    })(Hu || (Hu = {}));
                const Pu = 'tooltip_watched';
                let Wu;
                !(function (u) {
                    (u.Click = 'click'), (u.KeyDown = 'keydown');
                })(Wu || (Wu = {}));
                const Uu = 'metrics',
                    Vu = () => Date.now(),
                    Gu = ({ partnerID: u, item: e, parentScreen: t, itemState: a, info: r }) => ({
                        item: e,
                        partnerID: u || null,
                        parent_screen: t || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    ju = (u, e) => {
                        const t = (0, r.useCallback)(
                            (t, a = Hu.Info, r) => {
                                r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: u,
                                            group: e,
                                            action: t,
                                            logLevel: a,
                                            params: JSON.stringify(r),
                                        });
                            },
                            [u, e],
                        );
                        return (u, e, a) => t(u, e, a);
                    },
                    $u = (u) => {
                        const e = ((u, e) => {
                                const t = ju(u, e),
                                    a = (0, r.useRef)(new Map()),
                                    i = (0, r.useRef)(new Map()),
                                    l = (0, r.useCallback)(
                                        (u) => {
                                            if (!u) return;
                                            const e = a.current.get(u);
                                            (void 0 !== e && e > 0) || a.current.set(u, Vu());
                                        },
                                        [a],
                                    ),
                                    n = (0, r.useCallback)(() => {
                                        a.current.clear(), i.current.clear();
                                    }, [a, i]),
                                    s = (0, r.useCallback)(
                                        (u) => {
                                            u &&
                                                void 0 !== a.current.get(u) &&
                                                void 0 === i.current.get(u) &&
                                                i.current.set(u, Vu());
                                        },
                                        [a, i],
                                    ),
                                    E = (0, r.useCallback)(
                                        (u) => {
                                            if (!u) return;
                                            const e = a.current.get(u);
                                            if (void 0 === e) return;
                                            const t = i.current.get(u);
                                            if (void 0 === t) return;
                                            i.current.delete(u);
                                            const r = Vu() - t;
                                            a.current.set(u, e + r);
                                        },
                                        [a, i],
                                    ),
                                    o = (0, r.useCallback)(
                                        (u, e = 0, r, l) => {
                                            const n = a.current.get(u);
                                            if (void 0 === n) return;
                                            void 0 !== i.current.get(u) && E(u), a.current.delete(u);
                                            const s = (Vu() - n) / 1e3;
                                            s <= e ||
                                                ((l = ((u, e) => (void 0 === u && (u = {}), (u.timeSpent = e), u))(
                                                    l,
                                                    s,
                                                )),
                                                t(u, r, l));
                                        },
                                        [a, i, t, E],
                                    );
                                return [
                                    (u) => l(u),
                                    (u, e, t, a) => o(u, e, t, a),
                                    () => n(),
                                    (u) => s(u),
                                    (u) => E(u),
                                ];
                            })(u, Uu),
                            t = e[0],
                            a = e[1],
                            i = e[2],
                            l = e[3],
                            n = e[4],
                            s = (0, r.useCallback)(
                                (u) => {
                                    const e = u.action,
                                        t = u.timeLimit,
                                        r = u.logLevel;
                                    a(e, t, r, Gu(u));
                                },
                                [a],
                            );
                        return [(u) => t(u), (u) => s(u), () => i(), (u) => l(u), (u) => n(u)];
                    },
                    Ku = (u, e, t, a) => {
                        const i = $u(Tu),
                            l = i[0],
                            n = i[1];
                        return [
                            (0, r.useCallback)(() => l(Pu), [l]),
                            (0, r.useCallback)(
                                () => n({ action: Pu, timeLimit: 2, item: u, parentScreen: e, itemState: t, info: a }),
                                [n, u, e, t, a],
                            ),
                        ];
                    },
                    Yu = ['children', 'item', 'parentScreen', 'itemState', 'info'];
                function qu() {
                    return (
                        (qu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        qu.apply(this, arguments)
                    );
                }
                const zu = (0, r.memo)((u) => {
                        let e = u.children,
                            t = u.item,
                            a = u.parentScreen,
                            r = u.itemState,
                            l = u.info,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(u);
                                for (a = 0; a < i.length; a++) (t = i[a]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, Yu);
                        const s = Ku(t, a, r, l),
                            E = s[0],
                            o = s[1];
                        return i().createElement(su, qu({}, n, { onMouseEnter: E, onMouseLeave: o }), e);
                    }),
                    Xu = {
                        base: 'Points_base_51',
                        icon: 'Points_icon_7c',
                        icon__small: 'Points_icon__small_8d',
                        icon__normal: 'Points_icon__normal_9d',
                        label: 'Points_label_db',
                        label__white: 'Points_label__white_d3',
                        label__brown: 'Points_label__brown_c0',
                        label__red: 'Points_label__red_22',
                    };
                let Zu, Ju;
                !(function (u) {
                    (u.White = 'white'), (u.Brown = 'brown'), (u.Red = 'red');
                })(Zu || (Zu = {})),
                    (function (u) {
                        (u.Small = 'small'), (u.Normal = 'normal');
                    })(Ju || (Ju = {}));
                const Qu = (0, r.memo)(
                        ({ value: u, classMix: e, labelColor: t = Zu.Brown, iconSize: a = Ju.Normal }) => {
                            const r = m()(Xu.label, Xu[`label__${t}`]),
                                l = m()(Xu.icon, Xu[`icon__${a}`]);
                            return i().createElement(
                                'div',
                                { className: m()(Xu.base, e) },
                                i().createElement('div', { className: r }, u),
                                i().createElement('div', { className: l }),
                            );
                        },
                    ),
                    ue = R.strings.fl_skills_page.subTitle,
                    ee = (0, r.memo)(({ frontlineState: u, pointsAmount: e }) => {
                        const t = {
                            points: i().createElement(
                                zu,
                                {
                                    item: Nu.SkillPointsTooltip,
                                    parentScreen: yu.SkillsView,
                                    header: R.strings.fl_skills_page.pointsTooltip.header(),
                                    body: R.strings.fl_skills_page.pointsTooltip.body(),
                                },
                                i().createElement(
                                    'div',
                                    { className: 'SkillsSubTitle_points_c8' },
                                    i().createElement(Qu, { value: e }),
                                ),
                            ),
                        };
                        return i().createElement(
                            'div',
                            { className: 'SkillsSubTitle_base_92' },
                            i().createElement(xu, {
                                text: u === Ru.Finished ? ue.finished() : ue.active(),
                                justifyContent: Fu.Center,
                                binding: t,
                            }),
                        );
                    }),
                    te = (0, r.memo)(({ text: u, children: e, classMix: t }) =>
                        i().createElement(
                            'div',
                            { className: m()('PageTitle_base_ef', t) },
                            i().createElement('span', { className: 'PageTitle_title_33' }, u),
                            e,
                        ),
                    );
                let ae;
                !(function (u) {
                    (u.Common = 'common'), (u.Dark = 'dark'), (u.Small = 'small');
                })(ae || (ae = {}));
                const re = R.strings.fl_skills_page.category.uppercase,
                    ie = R.strings.fl_skills_page.category.default,
                    le = (0, r.memo)(({ category: u, iconStyle: e = ae.Small, classMix: t, isUppercase: a = !1 }) => {
                        const l = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url('R.images.frontline.gui.maps.icons.category.${e}.${u}')`,
                                }),
                                [u, e],
                            ),
                            n = (0, r.useMemo)(() => (a ? re : ie), [a]);
                        return i().createElement(
                            'div',
                            { className: m()('CategoryTitle_base_fe', a && 'CategoryTitle_base__uppercase_60', t) },
                            i().createElement('div', { className: 'CategoryTitle_icon_f2', style: l }),
                            i().createElement('div', { className: 'CategoryTitle_title_49' }, n.$dyn(u)),
                        );
                    }),
                    ne = (0, r.memo)(({ label: u, classMix: e }) =>
                        i().createElement(
                            'div',
                            { className: m()('ActivatedLabel_base_b8', e) },
                            i().createElement('div', { className: 'ActivatedLabel_activatedIcon_c6' }),
                            i().createElement('div', { className: 'ActivatedLabel_activated_00' }, u),
                        ),
                    ),
                    se = {
                        base: 'Skill_base_63',
                        base__hovered: 'Skill_base__hovered_c7',
                        base__selected: 'Skill_base__selected_33',
                        activeBg: 'Skill_activeBg_3f',
                        activatedBg: 'Skill_activatedBg_a7',
                        disabledBg: 'Skill_disabledBg_56',
                        icon: 'Skill_icon_c0',
                        info: 'Skill_info_18',
                        base__disabled: 'Skill_base__disabled_a9',
                        title: 'Skill_title_21',
                        activatedLabel: 'Skill_activatedLabel_8c',
                        price: 'Skill_price_91',
                    },
                    Ee = (0, r.memo)(
                        ({
                            id: u,
                            icon: e,
                            name: t,
                            price: a,
                            isActivated: l,
                            isDisabled: n,
                            isSelected: s,
                            canActivateSkills: E,
                            onSelected: o,
                        }) => {
                            const A = (0, r.useState)(!1),
                                c = A[0],
                                F = A[1],
                                D = (0, r.useCallback)(() => o(u), [u, o]),
                                _ = (0, r.useCallback)(() => F(!0), []),
                                B = (0, r.useCallback)(() => F(!1), []),
                                C = (0, r.useMemo)(
                                    () => ({
                                        backgroundImage: `url('R.images.gui.maps.icons.epicBattles.skills.c_176x176.${e}')`,
                                    }),
                                    [e],
                                ),
                                d = m()(
                                    se.base,
                                    c && se.base__hovered,
                                    s && se.base__selected,
                                    l && se.base__activated,
                                    n && se.base__disabled,
                                );
                            return i().createElement(
                                'div',
                                { className: d, onMouseEnter: _, onMouseLeave: B, onClick: D },
                                s &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement('div', { className: se.activeBg }),
                                        i().createElement('div', { className: se.selectedBg }),
                                    ),
                                l && i().createElement('div', { className: se.activatedBg }),
                                n && i().createElement('div', { className: se.disabledBg }),
                                i().createElement('div', { className: se.icon, style: C }),
                                i().createElement(
                                    'div',
                                    { className: se.info },
                                    i().createElement('div', { className: se.title }, t),
                                    l &&
                                        i().createElement(ne, {
                                            label: R.strings.fl_skills_page.item.activated(),
                                            classMix: se.activatedLabel,
                                        }),
                                    E &&
                                        !l &&
                                        i().createElement(Qu, {
                                            value: a,
                                            labelColor: n ? Zu.Red : Zu.Brown,
                                            iconSize: Ju.Small,
                                            classMix: se.points,
                                        }),
                                ),
                            );
                        },
                    );
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                const Ae = ({
                    type: u,
                    onSkillSelected: e,
                    isActive: t,
                    selectedSkillId: a,
                    classMix: l,
                    skills: n,
                    canActivateSkills: s,
                }) => {
                    const E = (0, r.useCallback)((t) => e(t, u), [e, u]);
                    return i().createElement(
                        'div',
                        { className: m()('Category_base_b6', t && 'Category_base__active_fa', l) },
                        i().createElement(le, {
                            category: u,
                            iconStyle: ae.Common,
                            classMix: 'Category_title_42',
                            isUppercase: !0,
                        }),
                        i().createElement(
                            'div',
                            { className: 'Category_skills_f9' },
                            n.map(({ value: u }) =>
                                i().createElement(
                                    Ee,
                                    oe({ key: u.id }, u, {
                                        isSelected: a === u.id,
                                        canActivateSkills: s,
                                        onSelected: E,
                                    }),
                                ),
                            ),
                        ),
                    );
                };
                function ce(u) {
                    engine.call('PlaySound', u);
                }
                const Fe = {
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
                let De, _e;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(De || (De = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(_e || (_e = {}));
                const Be = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: a,
                    disabled: l,
                    mixClass: n,
                    soundHover: s,
                    soundClick: E,
                    onMouseEnter: o,
                    onMouseMove: A,
                    onMouseDown: c,
                    onMouseUp: F,
                    onMouseLeave: D,
                    onClick: _,
                }) => {
                    const B = (0, r.useRef)(null),
                        C = (0, r.useState)(t),
                        d = C[0],
                        h = C[1],
                        g = (0, r.useState)(!1),
                        p = g[0],
                        b = g[1],
                        v = (0, r.useState)(!1),
                        f = v[0],
                        w = v[1],
                        S = (0, r.useCallback)(() => {
                            l || (B.current && (B.current.focus(), h(!0)));
                        }, [l]),
                        k = (0, r.useCallback)(
                            (u) => {
                                d && null !== B.current && !B.current.contains(u.target) && h(!1);
                            },
                            [d],
                        ),
                        L = (0, r.useCallback)(
                            (u) => {
                                l || (_ && _(u));
                            },
                            [l, _],
                        ),
                        M = (0, r.useCallback)(
                            (u) => {
                                l || (null !== s && ce(s), o && o(u), w(!0));
                            },
                            [l, s, o],
                        ),
                        x = (0, r.useCallback)(
                            (u) => {
                                A && A(u);
                            },
                            [A],
                        ),
                        T = (0, r.useCallback)(
                            (u) => {
                                l || (F && F(u), b(!1));
                            },
                            [l, F],
                        ),
                        y = (0, r.useCallback)(
                            (u) => {
                                l || (null !== E && ce(E), c && c(u), t && S(), b(!0));
                            },
                            [l, E, c, S, t],
                        ),
                        N = (0, r.useCallback)(
                            (u) => {
                                l || (D && D(u), b(!1));
                            },
                            [l, D],
                        ),
                        O = m()(
                            Fe.base,
                            Fe[`base__${a}`],
                            {
                                [Fe.base__disabled]: l,
                                [Fe[`base__${e}`]]: e,
                                [Fe.base__focus]: d,
                                [Fe.base__highlightActive]: p,
                                [Fe.base__firstHover]: f,
                            },
                            n,
                        ),
                        I = m()(Fe.state, Fe.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', k),
                                () => {
                                    document.removeEventListener('mousedown', k);
                                }
                            ),
                            [k],
                        ),
                        (0, r.useEffect)(() => {
                            h(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: B,
                                className: O,
                                onMouseEnter: M,
                                onMouseMove: x,
                                onMouseUp: T,
                                onMouseDown: y,
                                onMouseLeave: N,
                                onClick: L,
                            },
                            a !== De.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: Fe.back }),
                                    i().createElement('span', { className: Fe.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: I },
                                i().createElement('span', { className: Fe.stateDisabled }),
                                i().createElement('span', { className: Fe.stateHighlightHover }),
                                i().createElement('span', { className: Fe.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: Fe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                Be.defaultProps = { type: De.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ce = (0, r.memo)(Be),
                    de = ({ binding: u, text: e = '', classMix: t, alignment: a = I.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : i().createElement(
                                  r.Fragment,
                                  null,
                                  e.split('\n').map((e, l) =>
                                      i().createElement(
                                          'div',
                                          { className: m()('FormatText_base_d0', t), key: `${e}-${l}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = I.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return G.includes(t)
                                                                ? V(u)
                                                                : 'ja' === t
                                                                  ? (0, O.D4)().parse(u)
                                                                  : ((u, e = I.left) => {
                                                                        let t = [];
                                                                        const a =
                                                                                /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                            r = H(u);
                                                                        return (
                                                                            U(r, /( )/, e).forEach(
                                                                                (u) => (t = t.concat(U(u, a, I.left))),
                                                                            ),
                                                                            t
                                                                        );
                                                                    })(u, e);
                                                        })(u, e),
                                              ))(e, a, u).map((u, e) =>
                                              i().createElement(r.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                function me() {
                    return (
                        (me =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        me.apply(this, arguments)
                    );
                }
                const he = (0, r.memo)(({ tooltipProps: u, item: e, classMix: t }) => {
                        const a = Ku(e, yu.SkillsView),
                            r = a[0],
                            l = a[1];
                        return i().createElement(
                            'div',
                            { className: m()('InfoIcon_base_ff', t) },
                            i().createElement(
                                eu,
                                me({}, u, { onMouseEnter: r, onMouseLeave: l }),
                                i().createElement('div', { className: 'InfoIcon_icon_bc' }),
                            ),
                        );
                    }),
                    ge = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    pe = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    be = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    ve = (0, r.memo)(({ isActive: u, index: e, onClick: t, children: a, classMix: l }) => {
                        const n = e + 1,
                            s = (0, r.useMemo)(() => {
                                return (
                                    (u = n),
                                    be
                                        ? `${u}`
                                        : (function (u) {
                                              let e = '';
                                              for (let t = pe.length - 1; t >= 0; t--)
                                                  for (; u >= pe[t]; ) (e += ge[t]), (u -= pe[t]);
                                              return e;
                                          })(u)
                                );
                                var u;
                            }, [n]),
                            E = ((u) => {
                                const e = ju('epic_battle', Uu),
                                    t = (0, r.useCallback)(
                                        (u) => {
                                            e(u.action, u.logLevel, Gu(u));
                                        },
                                        [e],
                                    );
                                return (u) => t(u);
                            })(),
                            o = (0, r.useCallback)(() => {
                                t(e),
                                    E({
                                        item: Nu.SkillLevelTab,
                                        action: Ou.Click,
                                        parentScreen: yu.SkillsView,
                                        info: String(n),
                                    });
                            }, [e, n, t, E]);
                        return i().createElement(
                            'div',
                            { className: m()('LevelTab_base_48', u && 'LevelTab_base__active_dc', l), onClick: o },
                            i().createElement('div', { className: 'LevelTab_label_17' }, s),
                            a,
                        );
                    }),
                    fe = {
                        base: 'SkillParam_base_bf',
                        valueWrapper: 'SkillParam_valueWrapper_bd',
                        diff: 'SkillParam_diff_d0',
                        diffValue: 'SkillParam_diffValue_a9',
                        labelWrapper: 'SkillParam_labelWrapper_85',
                        label: 'SkillParam_label_89',
                        progress: 'SkillParam_progress_fd',
                        progressDot: 'SkillParam_progressDot_56',
                        progressValue: 'SkillParam_progressValue_06',
                        progressValueDot: 'SkillParam_progressValueDot_55',
                        progressDelta: 'SkillParam_progressDelta_a3',
                    },
                    we = (u, e = 2) => {
                        let t = Number(u);
                        return t % 1 != 0 && (t = Number(t.toFixed(e))), t;
                    },
                    Se = (u) => {
                        const e = we(u);
                        return isNaN(e) ? u : a.Z5.getNumberFormat(e, a.B3.GOLD);
                    },
                    ke = (0, r.memo)(({ currentParam: u, firstParam: e, lastParam: t }) => {
                        const a = (0, r.useMemo)(() => {
                                const t = we(u.value),
                                    a = we(e.value);
                                if (!isNaN(t) && !isNaN(a)) {
                                    const u = t - a;
                                    return 0 === u ? null : u;
                                }
                                return null;
                            }, [e, u]),
                            l = (0, r.useMemo)(() => we(e.value) < we(t.value), [e, t]),
                            n = (0, r.useMemo)(() => {
                                if (!a) return {};
                                const e =
                                    ((t = u.valueTemplate),
                                    (r = { sign: a < 0 ? '-' : '+', value: Math.abs(a) }),
                                    t.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                        const e = 0 === u.indexOf('%') ? 2 : 1;
                                        return String(r[u.slice(e, -e)]);
                                    }));
                                var t, r;
                                return { diff: i().createElement('div', { className: fe.diffValue }, e) };
                            }, [a, u.valueTemplate]),
                            s = (0, r.useMemo)(() => ({ sign: e.sign, value: Se(e.value) }), [e]),
                            E = (0, r.useMemo)(
                                () => (l ? { width: ((100 * we(e.value)) / we(t.value)).toString() + '%' } : {}),
                                [l, e, t],
                            ),
                            o = (0, r.useMemo)(() => {
                                if (!l) return {};
                                const a = we(e.value);
                                return { width: ((100 * (we(u.value) - a)) / we(t.value)).toString() + '%' };
                            }, [l, e, u, t]);
                        return i().createElement(
                            'div',
                            { className: fe.base },
                            i().createElement(
                                'div',
                                { className: fe.valueWrapper },
                                a &&
                                    i().createElement(xu, {
                                        binding: n,
                                        text: R.strings.fl_skills_page.paramDiff(),
                                        classMix: fe.diff,
                                        alignContent: Fu.FlexEnd,
                                    }),
                                i().createElement(xu, { text: u.valueTemplate, binding: s, classMix: fe.value }),
                            ),
                            i().createElement(
                                'div',
                                { className: fe.labelWrapper },
                                i().createElement('div', { className: fe.label }, e.name),
                                l &&
                                    i().createElement(
                                        'div',
                                        { className: fe.progress },
                                        i().createElement(
                                            'div',
                                            { className: fe.progressValue, style: E },
                                            i().createElement('div', { className: fe.progressValueDot }),
                                        ),
                                        i().createElement('div', { className: fe.progressDelta, style: o }),
                                        i().createElement('div', { className: fe.progressDot }),
                                    ),
                            ),
                        );
                    }),
                    Le = 'Levels_tabsBorder_68',
                    Me = (0, r.memo)(({ levels: u }) => {
                        const e = v().mediaSize,
                            t = u.length - 1,
                            a = (0, r.useState)(0),
                            l = a[0],
                            n = a[1],
                            s = (0, r.useCallback)((u) => n(u), []),
                            E = u[0].value,
                            o = u[u.length - 1].value,
                            A = u[l].value,
                            c = (0, r.useMemo)(() => {
                                const u = e === g.Large || e === g.ExtraLarge ? 90 : 80;
                                return { left: l * u + 'rem' };
                            }, [l, e]);
                        return i().createElement(
                            'div',
                            { className: 'Levels_base_f5' },
                            i().createElement(
                                'div',
                                { className: 'Levels_tabsWrapper_9e' },
                                i().createElement('div', { className: m()(Le, 'Levels_tabsBorder__top_ee') }),
                                i().createElement('div', { className: m()(Le, 'Levels_tabsBorder__bottom_56') }),
                                i().createElement(
                                    'div',
                                    { className: 'Levels_tabsLabel_c3' },
                                    R.strings.fl_skills_page.levelsTabLabel(),
                                ),
                                i().createElement(
                                    'div',
                                    { className: 'Levels_tabs_6f' },
                                    u.map(({ value: u }, e) =>
                                        i().createElement(
                                            ve,
                                            {
                                                key: u.id,
                                                index: e,
                                                isActive: e <= l,
                                                onClick: s,
                                                classMix: 'Levels_tab_d1',
                                            },
                                            e < t &&
                                                i().createElement('div', {
                                                    className: m()(
                                                        'Levels_arrow_13',
                                                        e < l && 'Levels_arrow__active_b0',
                                                    ),
                                                }),
                                        ),
                                    ),
                                    i().createElement('div', { className: 'Levels_caret_87', style: c }),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: 'Levels_params_33' },
                                A.params.map(({ value: u }, e) =>
                                    i().createElement(ke, {
                                        key: u.id,
                                        firstParam: E.params[e].value,
                                        lastParam: o.params[e].value,
                                        currentParam: u,
                                    }),
                                ),
                            ),
                        );
                    }),
                    xe = 'Details_text_5a',
                    Te = {
                        contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                        ignoreShowDelay: !0,
                        ignoreMouseClick: !0,
                        args: { tooltipID: 'epicSkillSlotSetupInfo' },
                    },
                    ye = (0, r.memo)(
                        ({
                            id: u,
                            icon: e,
                            name: t,
                            price: a,
                            isDisabled: l,
                            isActivated: n,
                            category: s,
                            levels: E,
                            shortDescription: o,
                            onActivateClick: A,
                            classMix: c,
                        }) => {
                            const F = (0, r.useMemo)(
                                    () => ({
                                        icon: i().createElement(he, {
                                            tooltipProps: Te,
                                            item: Nu.CurrentSkillTooltip,
                                            classMix: 'Details_tooltipIcon_c6',
                                        }),
                                    }),
                                    [],
                                ),
                                D = (0, r.useMemo)(
                                    () => ({ value: i().createElement(Qu, { value: a, labelColor: Zu.White }) }),
                                    [a],
                                ),
                                _ = (0, r.useMemo)(
                                    () => ({
                                        backgroundImage: `url('R.images.gui.maps.icons.epicBattles.skills.c_176x176.${e}')`,
                                    }),
                                    [e],
                                ),
                                B = (0, r.useCallback)(() => A(u), [u, A]);
                            return i().createElement(
                                'div',
                                { className: m()('Details_base_04', c) },
                                i().createElement('div', { className: 'Details_icon_2a', style: _ }),
                                i().createElement(
                                    'div',
                                    { className: 'Details_description_93' },
                                    i().createElement('div', { className: 'Details_title_24' }, t),
                                    i().createElement(le, { category: s, classMix: 'Details_category_79' }),
                                    i().createElement('div', { className: xe }, o),
                                    i().createElement(de, {
                                        text: R.strings.fl_skills_page.details.info(),
                                        binding: F,
                                        classMix: xe,
                                    }),
                                ),
                                i().createElement(Me, { levels: E, key: u }),
                                i().createElement(
                                    'div',
                                    { className: 'Details_footer_31' },
                                    n
                                        ? i().createElement(ne, {
                                              label: R.strings.fl_skills_page.activate.labelActivated(),
                                              classMix: 'Details_activatedLabel_c2',
                                          })
                                        : i().createElement(
                                              su,
                                              {
                                                  body: R.strings.fl_skills_page.activate.disabledTooltip.body(),
                                                  isEnabled: l,
                                              },
                                              i().createElement(
                                                  'div',
                                                  null,
                                                  i().createElement(
                                                      Ce,
                                                      { onClick: B, type: De.main, size: _e.medium, disabled: l },
                                                      i().createElement(de, {
                                                          text: R.strings.fl_skills_page.activate.label(),
                                                          binding: D,
                                                          classMix: 'Details_activateLabel_d2',
                                                      }),
                                                  ),
                                              ),
                                          ),
                                ),
                            );
                        },
                    );
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const Oe = Iu.Firesupport,
                    Ie = {
                        contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                        ignoreShowDelay: !0,
                        ignoreMouseClick: !0,
                    },
                    Re = () => {
                        const u = Z('model', X.Deep),
                            e = u.onSkillSelect,
                            t = u.onSkillActivate,
                            a = u.selectedSkillId,
                            l = u.pointsAmount,
                            n = u.canActivateSkills,
                            s = u.categories,
                            E = u.frontlineState,
                            o = (0, r.useState)(Oe),
                            A = o[0],
                            c = o[1],
                            F = (0, r.useCallback)(
                                (u, t) => {
                                    e({ id: u }), c(t);
                                },
                                [e],
                            ),
                            D = (0, r.useCallback)((u) => t({ id: u }), [t]),
                            _ = (0, r.useMemo)(() => {
                                const u = s
                                    .map(({ value: u }) => {
                                        const e = u.skills.filter(({ value: u }) => u.id === a);
                                        return e.length ? e[0].value : null;
                                    })
                                    .filter((u) => null !== u);
                                return u.length ? u[0] : null;
                            }, [s, a]),
                            B = (0, r.useMemo)(
                                () => ({
                                    icon: i().createElement(he, {
                                        tooltipProps: Ie,
                                        item: Nu.SkillOrderTooltip,
                                        classMix: 'SkillsViewApp_tooltipIcon_b0',
                                    }),
                                }),
                                [],
                            );
                        return i().createElement(
                            'div',
                            { className: 'SkillsViewApp_base_d5' },
                            i().createElement(
                                te,
                                { text: R.strings.fl_skills_page.title(), classMix: 'SkillsViewApp_pageTitle_36' },
                                i().createElement(ee, { pointsAmount: l, frontlineState: E }),
                            ),
                            i().createElement(
                                'div',
                                { className: 'SkillsViewApp_content_0f' },
                                i().createElement(
                                    'div',
                                    { className: 'SkillsViewApp_wrapper_3c' },
                                    i().createElement(
                                        'div',
                                        { className: 'SkillsViewApp_categories_40' },
                                        s.map(({ value: u }) =>
                                            i().createElement(
                                                Ae,
                                                Ne({ key: u.type }, u, {
                                                    canActivateSkills: n,
                                                    onSkillSelected: F,
                                                    isActive: A === u.type,
                                                    selectedSkillId: a,
                                                    classMix: 'SkillsViewApp_category_29',
                                                }),
                                            ),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: 'SkillsViewApp_footerWrapper_22' },
                                            i().createElement(
                                                'div',
                                                { className: 'SkillsViewApp_footer_0e' },
                                                i().createElement(xu, {
                                                    text: R.strings.fl_skills_page.footer(),
                                                    binding: B,
                                                    classMix: 'SkillsViewApp_footerText_54',
                                                }),
                                                i().createElement('div', { className: 'SkillsViewApp_footerBg_98' }),
                                            ),
                                        ),
                                    ),
                                    _ &&
                                        i().createElement(
                                            'div',
                                            { className: 'SkillsViewApp_detailsWrapper_43' },
                                            i().createElement(
                                                ye,
                                                Ne({}, _, {
                                                    category: A,
                                                    onActivateClick: D,
                                                    classMix: 'SkillsViewApp_details_e8',
                                                }),
                                            ),
                                        ),
                                ),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    N().render(
                        i().createElement(T, null, i().createElement(Re, null)),
                        document.getElementById('root'),
                    );
                });
            },
            2868: () => {},
            4777: () => {},
            9830: () => {},
            209: () => {},
            7414: () => {},
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, a) => {
            if (!e) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, a] = deferred[s], i = !0, l = 0; l < e.length; l++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[l]))
                            ? e.splice(l--, 1)
                            : ((i = !1), a < r && (r = a));
                    if (i) {
                        deferred.splice(s--, 1);
                        var n = t();
                        void 0 !== n && (u = n);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, a];
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
        (__webpack_require__.j = 166),
        (() => {
            var u = { 166: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        r,
                        [i, l, n] = t,
                        s = 0;
                    if (i.some((e) => 0 !== u[e])) {
                        for (a in l) __webpack_require__.o(l, a) && (__webpack_require__.m[a] = l[a]);
                        if (n) var E = n(__webpack_require__);
                    }
                    for (e && e(t); s < i.length; s++)
                        (r = i[s]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9667));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
