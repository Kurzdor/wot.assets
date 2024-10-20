(() => {
    'use strict';
    var __webpack_modules__ = {
            7405: (e, n, t) => {
                var r = t(6483),
                    i = t.n(r),
                    o = t(2372),
                    a = t(6179),
                    _ = t.n(a),
                    s = t(8460),
                    c = t(329);
                (0, a.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: n,
                        size: t,
                        type: r,
                        value: a,
                        discountValue: l,
                        showPlus: d,
                        isEnough: u = !0,
                        stockBackgroundName: v = c.we.Red,
                        className: g,
                        classNames: E,
                    }) =>
                        _().createElement(
                            'span',
                            { className: i()(s.Z.base, s.Z[`base__${t}`], g) },
                            _().createElement(
                                'span',
                                {
                                    className: i()(
                                        s.Z.value,
                                        s.Z[`value__${r}`],
                                        !u && s.Z.value__notEnough,
                                        null == E ? void 0 : E.value,
                                    ),
                                },
                                d && a > 0 && '+',
                                _().createElement(o.A, { value: a, format: r === c.V2.gold ? 'gold' : 'integral' }),
                            ),
                            _().createElement('span', {
                                className: i()(s.Z.icon, s.Z[`icon__${r}-${t}`], null == E ? void 0 : E.icon),
                            }),
                            e &&
                                _().createElement(
                                    'span',
                                    {
                                        className: i()(
                                            s.Z.stock,
                                            l && s.Z.stock__indent,
                                            n && s.Z.stock__interactive,
                                            null == E ? void 0 : E.stock,
                                        ),
                                    },
                                    _().createElement('span', {
                                        className: s.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${v})` },
                                    }),
                                    Boolean(l) && l,
                                ),
                        ),
                );
            },
            329: (e, n, t) => {
                let r, i, o;
                t.d(n, { V2: () => i, we: () => o }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(r || (r = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(i || (i = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(o || (o = {}));
            },
            2372: (e, n, t) => {
                t.d(n, { A: () => a });
                var r = t(6179),
                    i = t.n(r),
                    o = t(9916);
                class a extends i().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = o.B3.GOLD;
                        else e = o.B3.INTEGRAL;
                        const n = o.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== n ? n : null;
                    }
                }
                a.defaultProps = { format: 'integral' };
            },
            527: (e, n, t) => {
                t.r(n),
                    t.d(n, { mouse: () => l, off: () => s, on: () => _, onResize: () => o, onScaleUpdated: () => a });
                var r = t(2472),
                    i = t(1176);
                const o = (0, r.E)('clientResized'),
                    a = (0, r.E)('self.onScaleUpdated'),
                    _ = (e, n) => engine.on(e, n),
                    s = (e, n) => engine.off(e, n),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const l = (function () {
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
                    const o = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const o = `mouse${n}`,
                                        a = c[n]((e) => t([e, 'outside']));
                                    function _(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, _),
                                        r(),
                                        () => {
                                            i &&
                                                (a(),
                                                window.removeEventListener(o, _),
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
                    return Object.assign({}, o, {
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
                        getMouseGlobalPosition: () => a,
                        getSize: () => o,
                        graphicsQuality: () => _,
                        playSound: () => i.G,
                        setRTPC: () => i.E,
                    });
                var r = t(527),
                    i = t(2493);
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const _ = {
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
            2493: (e, n, t) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function i(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                t.d(n, { E: () => i, G: () => r });
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
                t.d(n, { O: () => o });
                var r = t(5959),
                    i = t(514);
                const o = { view: t(7641), client: r, sound: i.ZP };
            },
            514: (e, n, t) => {
                t.d(n, { ZP: () => a });
                var r = t(5959);
                const i = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    o = Object.keys(i).reduce((e, n) => ((e[n] = () => (0, r.playSound)(i[n])), e), {}),
                    a = { play: Object.assign({}, o, { sound: r.playSound }), setRTPC: r.setRTPC };
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => i.W,
                        displayStatusIs: () => T,
                        events: () => o.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => O,
                        freezeTextureBeforeResize: () => w,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => P,
                        getScale: () => p,
                        getSize: () => v,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => C,
                        isFocused: () => y,
                        pxToRem: () => h,
                        remToPx: () => b,
                        resize: () => g,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => m,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => R,
                    });
                var r = t(3722),
                    i = t(6112),
                    o = t(6538),
                    a = t(8566);
                const _ = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, _);
                }
                function l(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function d(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, _);
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function E(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: b(n.x), y: b(n.y) };
                }
                function w() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function m(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function y() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function O() {
                    viewEnv.forceTriggerMouseMove();
                }
                function P() {
                    return viewEnv.getShowingStatus();
                }
                const T = Object.keys(i.W).reduce(
                        (e, n) => ((e[n] = () => viewEnv.getShowingStatus() === i.W[n]), e),
                        {},
                    ),
                    k = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, n, t) => {
                t.d(n, { qP: () => c });
                const r = ['args'];
                const i = 2,
                    o = 16,
                    a = 32,
                    _ = 64,
                    s = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                a = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (n.indexOf(r) >= 0) continue;
                                            t[r] = e[r];
                                        }
                                    return t;
                                })(n, r);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((i = o),
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
                    c = {
                        close(e) {
                            s('popover' === e ? i : a);
                        },
                        minimize() {
                            s(_);
                        },
                        move(e) {
                            s(o, { isMouseEvent: !0, on: e });
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
                    })(i || (i = {}));
            },
            1358: (e, n, t) => {
                t.d(n, { Z: () => o });
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
                        const o = r.O.view.addModelObserver(e, t, i);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = n),
                                  t > 0 && (this._views[t] ? this._views[t].push(o) : (this._views[t] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
                const o = i;
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
            9916: (e, n, t) => {
                t.d(n, { B3: () => s, Z5: () => a.Z5, ry: () => p });
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
                var o = t(1358);
                var a = t(8613);
                let _;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(_ || (_ = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var u = t(5521),
                    v = t(3138);
                const g = ['args'];
                function E(e, n, t, r, i, o, a) {
                    try {
                        var _ = e[o](a),
                            s = _.value;
                    } catch (e) {
                        return void t(e);
                    }
                    _.done ? n(s) : Promise.resolve(s).then(r, i);
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
                                        var o = e.apply(n, t);
                                        function a(e) {
                                            E(o, r, i, a, _, 'next', e);
                                        }
                                        function _(e) {
                                            E(o, r, i, a, _, 'throw', e);
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
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (n.indexOf(r) >= 0) continue;
                                            t[r] = e[r];
                                        }
                                    return t;
                                })(n, g);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    b = () => h(_.CLOSE),
                    m = (e, n) => {
                        e.keyCode === u.n.ESCAPE && n();
                    };
                var y = t(7572);
                const f = i.instance,
                    C = {
                        DataTracker: o.Z,
                        ViewModel: y.Z,
                        ViewEventType: _,
                        NumberFormatType: s,
                        RealFormatType: c,
                        TimeFormatType: l,
                        DateFormatType: d,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => h(_.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => h(_.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, n, t = 0) => {
                            h(_.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: n });
                        },
                        sendShowPopOverEvent: (e, n, t, r, i = R.invalid('resId'), o) => {
                            const a = v.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                c = s.x,
                                l = s.y,
                                d = s.width,
                                u = s.height,
                                g = {
                                    x: v.O.view.pxToRem(c) + a.x,
                                    y: v.O.view.pxToRem(l) + a.y,
                                    width: v.O.view.pxToRem(d),
                                    height: v.O.view.pxToRem(u),
                                };
                            h(_.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: i,
                                direction: n,
                                bbox: w(g),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const n = (n) => m(n, e);
                            return (
                                window.addEventListener('keydown', n), () => window.removeEventListener('keydown', n)
                            );
                        },
                        closeOnEsc: (e) => {
                            m(e, b);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(_.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(_.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(_.POP_OVER),
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
                        ClickOutsideManager: f,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = C;
            },
            8613: (e, n, t) => {
                t.d(n, { Z5: () => r, cy: () => i });
                const r = {
                        getNumberFormat: (e, n) => systemLocale.getNumberFormat(e, n),
                        getRealFormat: (e, n) => systemLocale.getRealFormat(e, n),
                        getTimeFormat: (e, n) => systemLocale.getTimeFormat(e, n),
                        getDateFormat: (e, n) => systemLocale.getDateFormat(e, n),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, n, t) => userLocale.getTimeFormat(e, n, void 0 === t || t),
                        getTimeString: (e, n, t) => userLocale.getTimeString(e, n, void 0 === t || t),
                    };
            },
            8401: (e, n, t) => {
                t(6483), t(7405), t(329), t(6179);
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
                    for (var [n, t, r] = deferred[s], o = !0, a = 0; a < n.length; a++)
                        (!1 & r || i >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](n[a]))
                            ? n.splice(a--, 1)
                            : ((o = !1), r < i && (i = r));
                    if (o) {
                        deferred.splice(s--, 1);
                        var _ = t();
                        void 0 !== _ && (e = _);
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
        (__webpack_require__.j = 745),
        (() => {
            var e = { 745: 0 };
            __webpack_require__.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        i,
                        [o, a, _] = t,
                        s = 0;
                    if (o.some((n) => 0 !== e[n])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (_) var c = _(__webpack_require__);
                    }
                    for (n && n(t); s < o.length; s++)
                        (i = o[s]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(8401));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
