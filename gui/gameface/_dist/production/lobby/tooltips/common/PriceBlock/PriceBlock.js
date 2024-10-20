(() => {
    'use strict';
    var __webpack_modules__ = {
            7405: (e, n, t) => {
                t.d(n, { F: () => u });
                var r = t(6483),
                    i = t.n(r),
                    _ = t(6179),
                    a = t.n(_),
                    o = t(329),
                    s = t(2372),
                    c = t(8460);
                const l = ({
                    isDiscount: e,
                    isInteractiveDiscount: n,
                    size: t,
                    type: r,
                    isEnough: _,
                    value: l,
                    discountValue: u,
                    showPlus: d,
                    stockBackgroundName: v = o.we.Red,
                }) => {
                    const g = i()(c.Z.value, c.Z[`value__${r}`], !_ && c.Z.value__notEnough),
                        E = i()(c.Z.icon, c.Z[`icon__${r}-${t}`]),
                        m = i()(c.Z.stock, u && c.Z.stock__indent, n && c.Z.stock__interactive),
                        b = d && l > 0 && '+',
                        w = i()(c.Z.base, c.Z[`base__${t}`]);
                    return a().createElement(
                        'span',
                        { className: w },
                        a().createElement(
                            'span',
                            { className: g },
                            b,
                            a().createElement(s.A, { value: l, format: r === o.V2.gold ? 'gold' : 'integral' }),
                        ),
                        a().createElement('span', { className: E }),
                        e &&
                            a().createElement(
                                'span',
                                { className: m },
                                a().createElement('span', {
                                    className: c.Z.stockBackground,
                                    style: { backgroundImage: `url(R.images.gui.maps.icons.library.${v})` },
                                }),
                                Boolean(u) && u,
                            ),
                    );
                };
                l.defaultProps = { isEnough: !0 };
                const u = a().memo(l);
            },
            329: (e, n, t) => {
                let r, i, _;
                t.d(n, { V2: () => i, et: () => r, we: () => _ }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(r || (r = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(i || (i = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(_ || (_ = {}));
            },
            2372: (e, n, t) => {
                t.d(n, { A: () => a });
                var r = t(6179),
                    i = t.n(r),
                    _ = t(4179);
                const a = ({ format: e, value: n }) => {
                    const t = ((e, n = 'integral') => {
                        let t;
                        return (
                            (t = 'gold' === n ? _.B3.GOLD : _.B3.INTEGRAL),
                            void 0 === e ? '' : _.Z5.getNumberFormat(e, t)
                        );
                    })(n, e);
                    return t ? i().createElement('span', null, t) : null;
                };
            },
            527: (e, n, t) => {
                t.r(n), t.d(n, { mouse: () => o, onResize: () => _ });
                var r = t(2472),
                    i = t(1176);
                const _ = (0, r.E)('clientResized'),
                    a = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function n() {
                            e.enabled && (0, i.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, i.R)(!0);
                        }
                        function r() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', n),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', n),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, i.R)(!1);
                        }
                        const _ = ['down', 'up', 'move'].reduce(
                            (n, t) => (
                                (n[t] = (function (n) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let i = !0;
                                        const _ = `mouse${n}`,
                                            o = a[n]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(_, s),
                                            r(),
                                            () => {
                                                i &&
                                                    (o(),
                                                    window.removeEventListener(_, s),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (i = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                n
                            ),
                            {},
                        );
                        return Object.assign({}, _, {
                            disable() {
                                (e.enabled = !1), r();
                            },
                            enable() {
                                (e.enabled = !0), r();
                            },
                            enableOutside() {
                                e.enabled && (0, i.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, i.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, n, t) => {
                t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => _,
                        getSize: () => i,
                        graphicsQuality: () => a,
                    });
                var r = t(527);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const a = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, n, t) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(n, { R: () => r });
            },
            2472: (e, n, t) => {
                function r(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                t.d(n, { E: () => r });
            },
            3138: (e, n, t) => {
                t.d(n, { O: () => i });
                var r = t(5959);
                const i = { view: t(7641), client: r };
            },
            3722: (e, n, t) => {
                function r(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function i(e, n, t) {
                    return `url(${r(e, n, t)})`;
                }
                t.r(n), t.d(n, { getBgUrl: () => i, getTextureUrl: () => r });
            },
            6112: (e, n, t) => {
                t.d(n, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, n, t) => {
                t.d(n, { U: () => i });
                var r = t(2472);
                const i = {
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
            7641: (e, n, t) => {
                t.r(n),
                    t.d(n, {
                        addModelObserver: () => l,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => i.W,
                        displayStatusIs: () => O,
                        events: () => _.U,
                        extraSize: () => P,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => k,
                        getScale: () => m,
                        getSize: () => d,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => f,
                        isFocused: () => h,
                        pxToRem: () => b,
                        remToPx: () => w,
                        resize: () => v,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => R,
                    });
                var r = t(3722),
                    i = t(6112),
                    _ = t(6538),
                    a = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function l(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function g(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: w(n.x), y: w(n.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function k() {
                    return viewEnv.getShowingStatus();
                }
                const O = Object.keys(i.W).reduce(
                        (e, n) => ((e[n] = () => viewEnv.getShowingStatus() === i.W[n]), e),
                        {},
                    ),
                    P = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : _.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, n, t) => {
                t.d(n, { qP: () => _ });
                const r = ['args'],
                    i = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const _ = n.args,
                                a = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        i = {},
                                        _ = Object.keys(e);
                                    for (r = 0; r < _.length; r++) (t = _[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(n, r);
                            return void 0 !== _
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((i = _),
                                              Object.entries(i).map(([e, n]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof n) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: n };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: n };
                                                      default:
                                                          return { __Type: t, name: e, string: n.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var i;
                    },
                    _ = {
                        close(e) {
                            i('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            i(64);
                        },
                        move(e) {
                            i(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, n, t) => {
                let r, i;
                t.d(n, { n: () => r }),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD');
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
                    })(i || (i = {}));
            },
            1358: (e, n, t) => {
                t.d(n, { Z: () => _ });
                var r = t(3138);
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
                    addCallback(e, n, t = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const _ = r.O.view.addModelObserver(e, t, i);
                        return (
                            _ > 0
                                ? ((this._callbacks[_] = n),
                                  t > 0 && (this._views[t] ? this._views[t].push(_) : (this._views[t] = [_])))
                                : console.error("Can't add callback for model:", e),
                            _
                        );
                    }
                    removeCallback(e, n = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, n)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, n, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, n);
                        });
                    }
                }
                i.__instance = void 0;
                const _ = i;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            4179: (e, n, t) => {
                t.d(n, { B3: () => l, Z5: () => a, ry: () => p });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: n, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === n) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, n) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: n });
                    }
                    unregister(e, n) {
                        const t = e,
                            r = n;
                        (this.entries = this.entries.filter(({ container: e, callback: n }) => e !== t || n !== r)),
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
                var _ = t(1358);
                const a = {
                        getNumberFormat: (e, n) => systemLocale.getNumberFormat(e, n),
                        getRealFormat: (e, n) => systemLocale.getRealFormat(e, n),
                        getTimeFormat: (e, n) => systemLocale.getTimeFormat(e, n),
                        getDateFormat: (e, n) => systemLocale.getDateFormat(e, n),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, n, t) => userLocale.getTimeFormat(e, n, void 0 === t || t),
                        getTimeString: (e, n, t) => userLocale.getTimeString(e, n, void 0 === t || t),
                    };
                let s;
                var c;
                ((c = s || (s = {}))[(c.UNDEFINED = 0)] = 'UNDEFINED'),
                    (c[(c.TOOLTIP = 1)] = 'TOOLTIP'),
                    (c[(c.POP_OVER = 2)] = 'POP_OVER'),
                    (c[(c.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (c[(c.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (c[(c.MOVE = 16)] = 'MOVE'),
                    (c[(c.CLOSE = 32)] = 'CLOSE'),
                    (c[(c.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    v = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var g = t(5521),
                    E = t(3138);
                const m = ['args'];
                function b(e, n, t, r, i, _, a) {
                    try {
                        var o = e[_](a),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? n(s) : Promise.resolve(s).then(r, i);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
                        var e,
                            n =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var n = this,
                                        t = arguments;
                                    return new Promise(function (r, i) {
                                        var _ = e.apply(n, t);
                                        function a(e) {
                                            b(_, r, i, a, o, 'next', e);
                                        }
                                        function o(e) {
                                            b(_, r, i, a, o, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return n.apply(this, arguments);
                        };
                    })(),
                    h = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                _ = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        i = {},
                                        _ = Object.keys(e);
                                    for (r = 0; r < _.length; r++) (t = _[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(n, m);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, _, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([e, n]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof n) {
                                                      case 'number':
                                                          t.number = n;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = n;
                                                          break;
                                                      default:
                                                          t.string = n.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, _));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    y = () => h(s.CLOSE),
                    f = (e, n) => {
                        e.keyCode === g.n.ESCAPE && n();
                    };
                var C = t(7572);
                const k = i.instance,
                    O = {
                        DataTracker: _.Z,
                        ViewModel: C.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: u,
                        TimeFormatType: d,
                        DateFormatType: v,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: y,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, n, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: n });
                        },
                        sendShowPopOverEvent: (e, n, t, r, i = R.invalid('resId'), _) => {
                            const a = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                c = o.x,
                                l = o.y,
                                u = o.width,
                                d = o.height,
                                v = {
                                    x: E.O.view.pxToRem(c) + a.x,
                                    y: E.O.view.pxToRem(l) + a.y,
                                    width: E.O.view.pxToRem(u),
                                    height: E.O.view.pxToRem(d),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: i,
                                direction: n,
                                bbox: w(v),
                                on: !0,
                                args: _,
                            });
                        },
                        addEscapeListener: (e) => {
                            const n = (n) => f(n, e);
                            return (
                                window.addEventListener('keydown', n), () => window.removeEventListener('keydown', n)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, y);
                        },
                        handleViewEvent: h,
                        onBindingsReady: p,
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
                        dumpViewModel: function e(n) {
                            const t = {};
                            if ('object' != typeof n) return n;
                            for (const r in n)
                                if (Object.prototype.hasOwnProperty.call(n, r)) {
                                    const i = Object.prototype.toString.call(n[r]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = n[r];
                                        t[r] = [];
                                        for (let n = 0; n < i.length; n++) t[r].push({ value: e(i[n].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(n[r]))
                                            : (t[r] = n[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: k,
                        SystemLocale: a,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = O;
            },
            1596: (e, n, t) => {
                t.d(n, { a: () => d });
                var r = t(6179),
                    i = t.n(r),
                    _ = t(6483),
                    a = t.n(_),
                    o = t(2372),
                    s = t(7405),
                    c = t(329),
                    l = t(7443);
                const u = ({
                    isDiscount: e,
                    isInteractiveDiscount: n,
                    size: t,
                    typeCurrency: r,
                    isEnough: _,
                    value: u,
                    discountValue: d,
                    showPlus: v,
                }) => {
                    const g = a()(l.Z.value, l.Z[`value__${t}`], !_ && l.Z.value__notEnough),
                        E = a()(l.Z.icon, l.Z[`icon__${t}`]),
                        m = a()(
                            l.Z.stock,
                            d && l.Z.stock__indent,
                            t === c.et.big && l.Z.stock__sizeBig,
                            t === c.et.large && l.Z.stock__sizeLarge,
                            n && l.Z.stock__interactive,
                        ),
                        b = v && u > 0 && '+';
                    return r in c.V2
                        ? i().createElement(s.F, {
                              size: t,
                              type: r,
                              value: u,
                              isDiscount: e,
                              isInteractiveDiscount: n,
                              isEnough: _,
                              discountValue: u,
                              showPlus: v,
                          })
                        : i().createElement(
                              'span',
                              { className: l.Z.base },
                              i().createElement(
                                  'span',
                                  { className: g },
                                  b,
                                  i().createElement(o.A, { value: u, format: 'integral' }),
                              ),
                              i().createElement('span', { className: E }),
                              e &&
                                  i().createElement(
                                      'span',
                                      { className: m },
                                      i().createElement('span', { className: l.Z.stockBackground }),
                                      Boolean(d) && d,
                                  ),
                          );
                };
                u.defaultProps = { isEnough: !0 };
                const d = i().memo(u);
            },
            9052: (e, n, t) => {
                var r = t(6483),
                    i = t.n(r),
                    _ = t(329),
                    a = t(6179),
                    o = t.n(a),
                    s = t(1596),
                    c = t(8163);
                o().memo(
                    ({
                        price: e,
                        defPrice: n,
                        priceSeparator: t = null,
                        showZero: r = !1,
                        bigSize: l = !1,
                        ignoreDiscount: u = !1,
                        typeCurrency: d,
                    }) => {
                        const v = !u && Boolean(n.length),
                            g = i()(c.Z.price, v && c.Z.price__discount);
                        return o().createElement(
                            'div',
                            { className: c.Z.base },
                            e.map(
                                ({ value: e }, n) =>
                                    (r || Boolean(e.value)) &&
                                    o().createElement(
                                        a.Fragment,
                                        { key: n },
                                        n > 0 && t,
                                        o().createElement(
                                            'div',
                                            { className: g },
                                            o().createElement(s.a, {
                                                key: n,
                                                isDiscount: v,
                                                size: l ? _.et.big : _.et.small,
                                                type: e.name,
                                                value: e.value,
                                                isEnough: e.isEnough,
                                                typeCurrency: d,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    },
                );
            },
            1388: (e, n, t) => {
                t(6179), t(9052);
            },
            8460: (e, n, t) => {
                t.d(n, { Z: () => r });
                const r = {
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
                };
            },
            7443: (e, n, t) => {
                t.d(n, { Z: () => r });
                const r = {
                    base: 'CurrencyResolver_base_11',
                    base__insufficient: 'CurrencyResolver_base__insufficient_91',
                    icon: 'CurrencyResolver_icon_12',
                    stock: 'CurrencyResolver_stock_26',
                    icon__small: 'CurrencyResolver_icon__small_31',
                    icon__large: 'CurrencyResolver_icon__large_99',
                    icon__extraLarge: 'CurrencyResolver_icon__extraLarge_ed',
                    icon__big: 'CurrencyResolver_icon__big_94',
                    value: 'CurrencyResolver_value_52',
                    value__small: 'CurrencyResolver_value__small_7b',
                    value__big: 'CurrencyResolver_value__big_6a',
                    value__large: 'CurrencyResolver_value__large_eb',
                    value__extraLarge: 'CurrencyResolver_value__extraLarge_94',
                    value__notEnough: 'CurrencyResolver_value__notEnough_51',
                    stock__indent: 'CurrencyResolver_stock__indent_ef',
                    stock__sizeBig: 'CurrencyResolver_stock__sizeBig_86',
                    stock__sizeLarge: 'CurrencyResolver_stock__sizeLarge_4f',
                    stockBackground: 'CurrencyResolver_stockBackground_b3',
                    stock__interactive: 'CurrencyResolver_stock__interactive_2c',
                };
            },
            8163: (e, n, t) => {
                t.d(n, { Z: () => r });
                const r = {
                    base: 'PriceResolver_base_19',
                    price: 'PriceResolver_price_4c',
                    price__discount: 'PriceResolver_price__discount_d0',
                };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var n = __webpack_module_cache__[e];
        if (void 0 !== n) return n.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, n, t, r) => {
            if (!n) {
                var i = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [n, t, r] = deferred[s], _ = !0, a = 0; a < n.length; a++)
                        (!1 & r || i >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](n[a]))
                            ? n.splice(a--, 1)
                            : ((_ = !1), r < i && (i = r));
                    if (_) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [n, t, r];
        }),
        (__webpack_require__.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(n, { a: n }), n;
        }),
        (__webpack_require__.d = (e, n) => {
            for (var t in n)
                __webpack_require__.o(n, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 335),
        (() => {
            var e = { 335: 0 };
            __webpack_require__.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        i,
                        [_, a, o] = t,
                        s = 0;
                    if (_.some((n) => 0 !== e[n])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (n && n(t); s < _.length; s++)
                        (i = _[s]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(1388));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
