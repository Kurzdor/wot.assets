(() => {
    var __webpack_modules__ = {
            7405: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => c });
                var n = t(6483),
                    a = t.n(n),
                    r = t(2372),
                    i = t(6179),
                    o = t.n(i),
                    s = t(8460),
                    l = t(329);
                const c = (0, i.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: n,
                        value: i,
                        discountValue: c,
                        showPlus: _,
                        isEnough: m = !0,
                        stockBackgroundName: d = l.we.Red,
                        className: E,
                        classNames: A,
                    }) =>
                        o().createElement(
                            'span',
                            { className: a()(s.Z.base, s.Z[`base__${t}`], E) },
                            o().createElement(
                                'span',
                                {
                                    className: a()(
                                        s.Z.value,
                                        s.Z[`value__${n}`],
                                        !m && s.Z.value__notEnough,
                                        null == A ? void 0 : A.value,
                                    ),
                                },
                                _ && i > 0 && '+',
                                o().createElement(r.A, { value: i, format: n === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', {
                                className: a()(s.Z.icon, s.Z[`icon__${n}-${t}`], null == A ? void 0 : A.icon),
                            }),
                            e &&
                                o().createElement(
                                    'span',
                                    {
                                        className: a()(
                                            s.Z.stock,
                                            c && s.Z.stock__indent,
                                            u && s.Z.stock__interactive,
                                            null == A ? void 0 : A.stock,
                                        ),
                                    },
                                    o().createElement('span', {
                                        className: s.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${d})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            329: (e, u, t) => {
                'use strict';
                let n, a, r;
                t.d(u, { V2: () => a, et: () => n, we: () => r }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(n || (n = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(r || (r = {}));
            },
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => i });
                var n = t(6179),
                    a = t.n(n),
                    r = t(9916);
                class i extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = r.B3.GOLD;
                        else e = r.B3.INTEGRAL;
                        const u = r.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                i.defaultProps = { format: 'integral' };
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${u}`,
                                        i = l[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
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
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function r(e = 'px') {
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
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(2472);
                const a = {
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => y,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getScale: () => p,
                        getSize: () => d,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => b,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => g,
                        resize: () => E,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => x,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                const o = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function _(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    o = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? a : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, a;
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
                    })(a || (a = {}));
            },
            3368: () => {
                !(function () {
                    let e,
                        u,
                        t,
                        n,
                        a,
                        r,
                        i,
                        o = -1;
                    document.addEventListener('mousedown', (t) => {
                        document.getSelection().empty(),
                            t.target.select &&
                                -1 === o &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === o && t.target.select && t.target === e && (o = e.selectionStart), o > -1)) {
                                const n = Math.min(Math.max(t.x, u.left), u.right),
                                    a = Math.min(Math.max(t.y, u.top), u.bottom),
                                    r = document.createEvent('MouseEvent');
                                r.initMouseEvent('mousedown', !0, !0, null, 1, n, a, n, a, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(r);
                                const i = e.selectionEnd;
                                i > o ? e.setSelectionRange(o, i, 'forward') : e.setSelectionRange(i, o, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (o = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (t = e.target),
                                (n = e.target.value),
                                (a = t.selectionStart),
                                (r = -1 !== n.lastIndexOf(' ', a) ? n.lastIndexOf(' ', a) + 1 : 0),
                                (i = -1 !== n.indexOf(' ', a) ? n.indexOf(' ', a) : n.length),
                                t.setSelectionRange(r, i, 'forward'));
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(3138);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
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
                a.__instance = void 0;
                const r = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, {
                    Sw: () => r.Z,
                    B3: () => s,
                    Z5: () => i.Z5,
                    B0: () => o,
                    ry: () => p,
                    Eu: () => D,
                    Sy: () => h,
                });
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
                const a = n;
                var r = t(1358);
                var i = t(8613);
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
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    d = t(3138);
                const E = ['args'];
                function A(e, u, t, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            A(r, n, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            A(r, n, a, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                    h = () => g(o.CLOSE),
                    C = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var B = t(7572);
                const b = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => g(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                _ = s.width,
                                m = s.height,
                                E = {
                                    x: d.O.view.pxToRem(l) + i.x,
                                    y: d.O.view.pxToRem(c) + i.y,
                                    width: d.O.view.pxToRem(_),
                                    height: d.O.view.pxToRem(m),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: F(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, h);
                        },
                        handleViewEvent: g,
                        onBindingsReady: p,
                        onLayoutReady: D,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
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
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            8401: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => m });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7405),
                    i = t(329),
                    o = t(6179),
                    s = t.n(o);
                const l = 'Price_base_61',
                    c = 'Price_price_1b',
                    _ = 'Price_price__discount_29',
                    m = ({
                        price: e,
                        defPrice: u,
                        priceSeparator: t = null,
                        showZero: n = !1,
                        bigSize: m = !1,
                        ignoreDiscount: d = !1,
                    }) => {
                        const E = !d && Boolean(u.length);
                        return s().createElement(
                            'div',
                            { className: l },
                            e.map(
                                ({ value: e }, u) =>
                                    (n || Boolean(e.value)) &&
                                    s().createElement(
                                        o.Fragment,
                                        { key: u },
                                        u > 0 && t,
                                        s().createElement(
                                            'div',
                                            { className: a()(c, E && _) },
                                            s().createElement(r.F, {
                                                key: u,
                                                isDiscount: E,
                                                size: m ? i.et.big : i.et.small,
                                                type: e.name,
                                                value: e.value,
                                                isEnough: e.isEnough,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    };
            },
            3934: (e, u, t) => {
                'use strict';
                t.d(u, { K: () => m });
                var n = t(6179),
                    a = t.n(n),
                    r = t(6483),
                    i = t.n(r);
                const o = 'Storage_base_53',
                    s = 'Storage_base__reversed_8f',
                    l = 'Storage_icon_6a',
                    c = 'Storage_count_7a',
                    _ = 'Storage_count__zero_54',
                    m = ({ valueFirst: e = !1, itemsInStorage: u }) => {
                        const t = i()(o, e && s),
                            n = i()(c, 0 === u && _);
                        return a().createElement(
                            'div',
                            { className: t },
                            a().createElement('div', { className: l }),
                            a().createElement('div', { className: n }, u),
                        );
                    };
            },
            1385: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t.n(n),
                    r = t(493),
                    i = t.n(r),
                    o = t(3138),
                    s = t(5521),
                    l = t(9916);
                const c = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function _(e = s.n.NONE, u = c, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== s.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, a]);
                }
                function m() {
                    !(function (e = s.n.ESCAPE) {
                        _(e, l.Sy, !0);
                    })(s.n.ESCAPE);
                }
                var d = t(3403);
                let E, A;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(E || (E = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(A || (A = {}));
                const F = 'default',
                    p = 'notRequired';
                var D = t(9174),
                    g = t(6483),
                    h = t.n(g);
                function C(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
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
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    },
                    b = ({
                        children: e,
                        size: u,
                        isFocused: t,
                        type: r,
                        disabled: i,
                        mixClass: o,
                        soundHover: s,
                        soundClick: l,
                        onMouseEnter: c,
                        onMouseMove: _,
                        onMouseDown: m,
                        onMouseUp: d,
                        onMouseLeave: A,
                        onClick: F,
                    }) => {
                        const p = (0, n.useRef)(null),
                            D = (0, n.useState)(t),
                            g = D[0],
                            b = D[1],
                            v = (0, n.useState)(!1),
                            f = v[0],
                            y = v[1];
                        return (
                            (0, n.useEffect)(() => {
                                function e(e) {
                                    g && null !== p.current && !p.current.contains(e.target) && b(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [g]),
                            (0, n.useEffect)(() => {
                                b(t);
                            }, [t]),
                            a().createElement(
                                'div',
                                {
                                    ref: p,
                                    className: h()(
                                        B.base,
                                        B[`base__${r}`],
                                        i && B.base__disabled,
                                        u && B[`base__${u}`],
                                        g && B.base__focus,
                                        f && B.base__highlightActive,
                                        o,
                                    ),
                                    onMouseEnter: function (e) {
                                        i || (null !== s && C(s), c && c(e));
                                    },
                                    onMouseMove: function (e) {
                                        _ && _(e);
                                    },
                                    onMouseUp: function (e) {
                                        i || (d && d(e), y(!1));
                                    },
                                    onMouseDown: function (e) {
                                        i ||
                                            (null !== l && C(l),
                                            m && m(e),
                                            t && (i || (p.current && (p.current.focus(), b(!0)))),
                                            y(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        i || (A && A(e), y(!1));
                                    },
                                    onClick: function (e) {
                                        i || (F && F(e));
                                    },
                                },
                                r !== E.ghost &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: B.back }),
                                        a().createElement('span', { className: B.texture }),
                                    ),
                                a().createElement(
                                    'span',
                                    { className: h()(B.state, B.state__default) },
                                    a().createElement('span', { className: B.stateDisabled }),
                                    a().createElement('span', { className: B.stateHighlightHover }),
                                    a().createElement('span', { className: B.stateHighlightActive }),
                                ),
                                a().createElement(
                                    'span',
                                    { className: B.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    };
                b.defaultProps = { type: E.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const v = b,
                    f = {
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
                    y = [
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
                function w() {
                    return (
                        (w = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        w.apply(null, arguments)
                    );
                }
                class x extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && C(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && C(this.props.soundClick);
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
                            i = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, y)),
                            d = h()(f.base, f[`base__${i}`], f[`base__${r}`], null == o ? void 0 : o.base),
                            E = h()(f.icon, f[`icon__${i}`], f[`icon__${r}`], null == o ? void 0 : o.icon),
                            A = h()(f.glow, null == o ? void 0 : o.glow),
                            F = h()(f.caption, f[`caption__${i}`], null == o ? void 0 : o.caption),
                            p = h()(f.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            w(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== i && a().createElement('div', { className: f.shine }),
                            a().createElement('div', { className: E }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: F }, u),
                            n && a().createElement('div', { className: p }, n),
                        );
                    }
                }
                x.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const S = (e = 1) => {
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
                    },
                    P = [
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
                function k(e) {
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
                const I = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: l.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    N = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            m = void 0 !== _ && _,
                            d = e.decoratorId,
                            E = void 0 === d ? 0 : d,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            p = e.targetId,
                            D = void 0 === p ? 0 : p,
                            g = e.onShow,
                            h = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, P);
                        const B = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(() => D || S().resId, [D]),
                            v = (0, n.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (I(t, E, { isMouseEvent: !0, on: !0, arguments: k(a) }, b),
                                    g && g(),
                                    (B.current.isVisible = !0));
                            }, [t, E, a, b, g]),
                            f = (0, n.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        I(t, E, { on: !1 }, b),
                                        B.current.isVisible && h && h(),
                                        (B.current.isVisible = !1);
                                }
                            }, [t, E, b, h]),
                            y = (0, n.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', y, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', y, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            );
                        return F
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              f(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === m && f(), null == s || s(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === m && f(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : u;
                        var w;
                    },
                    T = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function M() {
                    return (
                        (M = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        M.apply(null, arguments)
                    );
                }
                const O = R.views.common.tooltip_window.simple_tooltip_content,
                    L = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            i = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, T);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, i, s]);
                        return a().createElement(
                            N,
                            M(
                                {
                                    contentId:
                                        ((_ = null == s ? void 0 : s.hasHtmlContent),
                                        _ ? O.SimpleTooltipHtmlContent('resId') : O.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                var H = t(1281);
                let V;
                function U(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(V || (V = {}));
                const $ = (e) => e.replace(/&nbsp;/g, ' '),
                    W = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    z = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    j = (e, u, t = V.left) => e.split(u).reduce(t === V.left ? W : z, []),
                    G = (() => {
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
                    q = ['zh_cn', 'zh_sg', 'zh_tw'],
                    X = (e, u = V.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (q.includes(t)) return G(e);
                        if ('ja' === t) {
                            return (0, H.D4)()
                                .parse(e)
                                .map((e) => $(e));
                        }
                        return ((e, u = V.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = $(e);
                            return j(a, /( )/, u).forEach((e) => (t = t.concat(j(e, n, V.left)))), t;
                        })(e, u);
                    };
                var K = t(8613);
                Date.now(), K.Ew.getRegionalDateTime, K.Ew.getFormattedDateTime;
                const Z = (e, u) => {
                        const t = (0, n.useRef)();
                        return (
                            (0, n.useEffect)(() => {
                                (u && !u(e)) || (t.current = e);
                            }, [u, e]),
                            t.current
                        );
                    },
                    Y = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    Q = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    J = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    ee = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    ue = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = Y(`${e}.${t}`, window);
                                return J(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    te = (e) => {
                        const u = ((e) => {
                                const u = S(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: ee(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = Y(ee(t, `${u}.${n}`), window);
                                    return J(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    ne = l.Sw.instance;
                let ae;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(ae || (ae = {}));
                const re = (e = 'model', u = ae.Deep) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            r = (0, n.useMemo)(() => S(), []),
                            i = r.caller,
                            o = r.resId,
                            s = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            l = (0, n.useState)(() =>
                                ((e) => {
                                    const u = Y(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return J(u) ? u.value : u;
                                })(ue(s)),
                            ),
                            c = l[0],
                            _ = l[1],
                            m = (0, n.useRef)(-1);
                        return (
                            Q(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? ae.Deep : ae.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== ae.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === ae.Deep
                                                ? (e === c && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        n = te(e);
                                    m.current = ne.addCallback(n, t, o, u === ae.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (u !== ae.None)
                                    return () => {
                                        ne.removeCallback(m.current, o);
                                    };
                            }, [o, u]),
                            c
                        );
                    },
                    ie = (l.Sw.instance, Z);
                let oe;
                !(function (e) {
                    (e[(e.Space = 32)] = 'Space'),
                        (e[(e.Enter = 13)] = 'Enter'),
                        (e[(e.A = 65)] = 'A'),
                        (e[(e.B = 66)] = 'B'),
                        (e[(e.C = 67)] = 'C'),
                        (e[(e.D = 68)] = 'D'),
                        (e[(e.E = 69)] = 'E'),
                        (e[(e.F = 70)] = 'F'),
                        (e[(e.G = 71)] = 'G'),
                        (e[(e.H = 72)] = 'H'),
                        (e[(e.I = 73)] = 'I'),
                        (e[(e.J = 74)] = 'J'),
                        (e[(e.K = 75)] = 'K'),
                        (e[(e.L = 76)] = 'L'),
                        (e[(e.M = 77)] = 'M'),
                        (e[(e.N = 78)] = 'N'),
                        (e[(e.O = 79)] = 'O'),
                        (e[(e.P = 80)] = 'P'),
                        (e[(e.Q = 81)] = 'Q'),
                        (e[(e.R = 82)] = 'R'),
                        (e[(e.S = 83)] = 'S'),
                        (e[(e.T = 84)] = 'T'),
                        (e[(e.U = 85)] = 'U'),
                        (e[(e.V = 86)] = 'V'),
                        (e[(e.W = 87)] = 'W'),
                        (e[(e.X = 88)] = 'X'),
                        (e[(e.Y = 89)] = 'Y'),
                        (e[(e.Z = 90)] = 'Z');
                })(oe || (oe = {}));
                const se = (e = {}) => {
                    (0, n.useEffect)(() => {
                        const u = (u) => {
                            if (!u.altKey && !u.ctrlKey && !u.shiftKey) {
                                const t = e[u.keyCode];
                                'function' == typeof t && t(u);
                            }
                        };
                        return (
                            window.addEventListener('keyup', u),
                            () => {
                                window.removeEventListener('keyup', u);
                            }
                        );
                    }, [e]);
                };
                var le = t(329),
                    ce = t(2372);
                let _e;
                !(function (e) {
                    (e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent');
                })(_e || (_e = {}));
                const me = {
                        currency: 'CurrencyItem_currency_b6',
                        currency__credits: 'CurrencyItem_currency__credits_eb',
                        currency__gold: 'CurrencyItem_currency__gold_af',
                        currency__crystal: 'CurrencyItem_currency__crystal_fc',
                        currency__freeXP: 'CurrencyItem_currency__freeXP_36',
                    },
                    de = ({ value: e, currencyType: u, isWalletAvailable: t }) => {
                        const r = u === le.V2.gold ? 'gold' : 'integral',
                            i = (0, n.useMemo)(() => {
                                return (
                                    (e = _e.backport),
                                    (t = { currency: u }),
                                    {
                                        isEnabled: e !== _e.absent,
                                        args: t,
                                        contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                        decoratorId:
                                            e === _e.normal
                                                ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                                : void 0,
                                        ignoreShowDelay: e === _e.backport,
                                        ignoreMouseClick: !0,
                                    }
                                );
                                var e, t;
                            }, [u]);
                        return a().createElement(
                            N,
                            i,
                            a().createElement(
                                'span',
                                { className: h()(me.currency, me[`currency__${u}`]) },
                                t ? a().createElement(ce.A, { value: e, format: r }) : R.strings.common.common.dashes(),
                            ),
                        );
                    },
                    Ee = 'CurrencyBalance_base_97',
                    Ae = ({ credits: e, golds: u, crystals: t, freexp: n, isWalletAvailable: r }) =>
                        a().createElement(
                            'div',
                            { className: Ee },
                            a().createElement(de, { value: t, currencyType: le.V2.crystal, isWalletAvailable: r }),
                            a().createElement(de, { value: u, currencyType: le.V2.gold, isWalletAvailable: r }),
                            a().createElement(de, { value: e, currencyType: le.V2.credits, isWalletAvailable: r }),
                            a().createElement(de, { value: n, currencyType: le.V2.freeXP, isWalletAvailable: r }),
                        ),
                    Fe = 'DialogTemplate_base_bb',
                    pe = 'DialogTemplate_control_3e',
                    De = 'DialogTemplate_closeButton_2c',
                    ge = 'DialogTemplate_view_78',
                    he = 'DialogTemplate_view__show_51',
                    Ce = 'DialogTemplate_content_dc',
                    Be = 'DialogTemplate_line_af',
                    be = 'DialogTemplate_divider_cb',
                    ve = 'DialogTemplate_footer_2b',
                    fe = 'DialogTemplate_buttons_f5',
                    ye = 'DialogTemplate_buttonWrapper_d9',
                    we = 'DialogTemplate_button_f0';
                function xe() {
                    return (
                        (xe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        xe.apply(null, arguments)
                    );
                }
                const Se = ({
                        parentId: e,
                        content: u,
                        footer: t,
                        type: r = 'simple',
                        buttonAccept: i,
                        buttonAcceptText: l,
                        buttonCancel: c,
                        buttonCancelText: _,
                        disabledAcceptTooltipText: m = R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                        showPayInfo: d = !1,
                        isShowTooltip: E = !0,
                    }) => {
                        const A = re('model'),
                            F = A.credits,
                            p = A.golds,
                            D = A.crystals,
                            g = A.freexp,
                            C = A.onAcceptClicked,
                            B = A.onCancelClicked,
                            b = A.onExit,
                            f = A.isWalletAvailable,
                            y = (0, n.useCallback)(() => {
                                C();
                            }, [C]),
                            w = (0, n.useCallback)(() => {
                                B();
                            }, [B]),
                            S = (0, n.useCallback)(() => {
                                b();
                            }, [b]);
                        se({ [s.n.ESCAPE]: S });
                        const P = (0, n.useCallback)(
                            (e) => {
                                e.keyCode in s.n &&
                                    e.keyCode !== s.n.BACKSPACE &&
                                    e.keyCode !== s.n.DELETE &&
                                    (e.preventDefault(), o.O.view.setEventHandled()),
                                    e.keyCode !== s.n.ENTER ||
                                        e.altKey ||
                                        window.model.isAcceptDisabled ||
                                        i.disabled ||
                                        y();
                            },
                            [i.disabled, y],
                        );
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('keydown', P),
                                () => document.removeEventListener('keydown', P)
                            ),
                            [P],
                        );
                        const k = h()(Be, be),
                            I =
                                d &&
                                'simple' === r &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(Ae, {
                                        credits: F,
                                        golds: p,
                                        crystals: D,
                                        freexp: g,
                                        isWalletAvailable: f,
                                    }),
                                    a().createElement('div', { className: Be }),
                                ),
                            N =
                                i &&
                                a().createElement(
                                    L,
                                    { body: m || '', isEnabled: Boolean(m) && E && i.disabled },
                                    a().createElement(
                                        'div',
                                        { id: `${e}-accept`, className: ye },
                                        a().createElement(v, xe({ onClick: y, mixClass: we }, i), l),
                                    ),
                                ),
                            T =
                                c &&
                                a().createElement(
                                    'div',
                                    { id: `${e}-cancel`, className: ye },
                                    a().createElement(v, xe({ onClick: w, mixClass: we }, c), _),
                                );
                        return a().createElement(
                            'div',
                            { className: Fe },
                            a().createElement(
                                'div',
                                { className: pe },
                                I,
                                a().createElement(
                                    'div',
                                    { id: `${e}-close-button`, className: De },
                                    a().createElement(x, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: S,
                                    }),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: h()(ge, he) },
                                a().createElement('div', { className: Ce }, u),
                                a().createElement('div', { className: k }),
                                t && a().createElement('div', { className: ve }, t),
                                a().createElement('div', { className: fe }, N, T),
                                a().createElement('div', { id: 'dialog-template-footer' }),
                            ),
                        );
                    },
                    Pe = (0, n.createContext)(null),
                    ke = () => {
                        const e = (0, n.useContext)(Pe);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    },
                    Ie = { size: A.medium },
                    Ne = { size: A.medium, type: E.secondary },
                    Re = (e, u) => {
                        const t = [];
                        for (let n = 0; n < e; n++) t.push(u(n));
                        return t;
                    },
                    Te = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Me = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Oe = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Le = (e) =>
                        Oe
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = Me.length - 1; t >= 0; t--)
                                      for (; e >= Me[t]; ) (u += Te[t]), (e -= Me[t]);
                                  return u;
                              })(e),
                    He = {
                        base: 'Item_base_2f',
                        highlight: 'Item_highlight_ab',
                        highlight__optionalDevice: 'Item_highlight__optionalDevice_2d',
                        highlight__battleBoosterReplace: 'Item_highlight__battleBoosterReplace_3f',
                        highlight__battleBooster: 'Item_highlight__battleBooster_09',
                        highlight__builtInEquipment: 'Item_highlight__builtInEquipment_21',
                        highlight__battleAbility: 'Item_highlight__battleAbility_2b',
                        highlight__postProgressionModification: 'Item_highlight__postProgressionModification_5e',
                        highlight__equipmentPlus: 'Item_highlight__equipmentPlus_f1',
                        highlight__equipmentTrophyBasic: 'Item_highlight__equipmentTrophyBasic_4b',
                        highlight__equipmentTrophyUpgraded: 'Item_highlight__equipmentTrophyUpgraded_90',
                        highlight__equipmentModernized: 'Item_highlight__equipmentModernized_a2',
                        overlay: 'Item_overlay_ee',
                        overlay__battleBooster: 'Item_overlay__battleBooster_4e',
                        overlay__battleBoosterReplace: 'Item_overlay__battleBoosterReplace_e0',
                        overlay__equipmentPlus: 'Item_overlay__equipmentPlus_a6',
                        overlay__equipmentTrophyBasic: 'Item_overlay__equipmentTrophyBasic_ac',
                        overlay__equipmentTrophyUpgraded: 'Item_overlay__equipmentTrophyUpgraded_32',
                        overlay__equipmentModernized_1: 'Item_overlay__equipmentModernized_1_fd',
                        overlay__equipmentModernized_2: 'Item_overlay__equipmentModernized_2_70',
                        overlay__equipmentModernized_3: 'Item_overlay__equipmentModernized_3_f1',
                        level: 'Item_level_90',
                        postProgressionLevel: 'Item_postProgressionLevel_ad',
                        image: 'Item_image_8d',
                        image__postProgression: 'Item_image__postProgression_ca',
                    },
                    Ve = (0, d.Pi)(({ index: e, itemsType: u }) => {
                        const t = ke().model;
                        if (!('computes' in t)) return null;
                        const n = t.computes.confirmedItem(e);
                        if (!n || !n.imageSource) return null;
                        const r = n.highlightType,
                            i = n.level,
                            o = n.overlayType,
                            s = n.imageSource,
                            l = 'postProgressionPairModification' === u;
                        return a().createElement(
                            'div',
                            { className: He.base },
                            a().createElement('div', { className: h()(He.highlight, He[`highlight__${r}`]) }),
                            a().createElement('div', {
                                className: h()(He.image, l && He.image__postProgression),
                                style: { backgroundImage: `url(${s})` },
                            }),
                            i && l
                                ? a().createElement('div', { className: He.postProgressionLevel }, Le(i))
                                : Boolean(i) &&
                                      a().createElement('div', {
                                          style: {
                                              backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${i}`)})`,
                                          },
                                          className: He.level,
                                      }),
                            a().createElement('div', { className: h()(He.overlay, He[`overlay__${o}`]) }),
                        );
                    }),
                    Ue = 'Items_base_b1',
                    $e = (0, d.Pi)(({ itemsType: e }) => {
                        const u = ke().model;
                        return 'computes' in u
                            ? a().createElement(
                                  'div',
                                  { className: Ue },
                                  Re(u.computes.confirmedItemsLength(), (u) =>
                                      a().createElement(Ve, { key: u, index: u, itemsType: e }),
                                  ),
                              )
                            : null;
                    }),
                    We = 'Names_base_96',
                    ze = (0, d.Pi)(() => {
                        const e = ke().model;
                        if (!('computes' in e)) return null;
                        const u = e.computes.confirmedItemsLength();
                        return u <= 1
                            ? null
                            : a().createElement(
                                  'div',
                                  { className: We },
                                  Re(u, (t) => {
                                      const r = u - 2,
                                          i = e.computes.confirmedItem(t);
                                      if (!i) return null;
                                      let o;
                                      return (
                                          (o =
                                              t < r
                                                  ? a().createElement('span', null, ', ')
                                                  : t === r
                                                    ? a().createElement(
                                                          'span',
                                                          null,
                                                          ' ',
                                                          R.strings.tank_setup.dialogs.confirm.message.lastSeparation(),
                                                      )
                                                    : null),
                                          a().createElement(
                                              n.Fragment,
                                              { key: i.name },
                                              a().createElement(
                                                  'span',
                                                  null,
                                                  R.strings.common.common.open_quotes(),
                                                  $(i.name),
                                                  R.strings.common.common.close_quotes(),
                                              ),
                                              o,
                                          )
                                      );
                                  }),
                              );
                    });
                var je = t(7405);
                const Ge = 'FormatText_base_d0',
                    qe = ({ binding: e, text: u = '', classMix: t, alignment: r = V.left, formatWithBrackets: i }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const o = i && e ? U(u, e) : u;
                        return a().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((u, i) =>
                                a().createElement(
                                    'div',
                                    { className: h()(Ge, t), key: `${u}-${i}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : X(e, u))))(
                                        u,
                                        r,
                                        e,
                                    ).map((e, u) => a().createElement(n.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    Xe = ['children'];
                function Ke() {
                    return (
                        (Ke = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ke.apply(null, arguments)
                    );
                }
                const Ze = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Xe);
                    return a().createElement(
                        N,
                        Ke(
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
                function Ye() {
                    return (
                        (Ye = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ye.apply(null, arguments)
                    );
                }
                const Qe = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = a().createElement('div', { className: t }, e);
                    if (u.header || u.body) return a().createElement(L, u, n);
                    const r = u.contentId;
                    return r ? a().createElement(N, Ye({}, u, { contentId: r }), n) : a().createElement(Ze, u, n);
                };
                let Je, eu;
                !(function (e) {
                    (e.Limited = 'limited'), (e.Unlimited = 'unlimited');
                })(Je || (Je = {})),
                    (function (e) {
                        (e.Coefficient = 'coefficient'),
                            (e.Integer = 'integer'),
                            (e.Temporary = 'temporary'),
                            (e.Limited = 'limited');
                    })(eu || (eu = {}));
                const uu = 'ExchangeRate_base_76',
                    tu = 'ExchangeRate_baseHidden_12',
                    nu = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeRateTooltip('resId') },
                    au = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    ru = ({
                        fromItem: e,
                        toItem: u,
                        defaultRate: t,
                        discount: r,
                        amountOfPersonalDiscounts: i,
                        discountRate: o,
                    }) => {
                        const s = r.isDiscountAvailable && 'limited' === r.discountType && r.amountOfDiscount < e.value;
                        let l;
                        r && r.isDiscountAvailable && (l = r.discountType === Je.Limited ? (i <= 5 ? au : void 0) : nu);
                        const c = (0, n.useMemo)(
                            () => ({
                                gold: a().createElement(je.F, {
                                    key: e.name,
                                    size: le.et.small,
                                    type: le.V2.gold,
                                    value: 1,
                                }),
                                credits: a().createElement(je.F, {
                                    key: u.name,
                                    size: le.et.small,
                                    type: le.V2.credits,
                                    value: r.isDiscountAvailable ? o.resourceRateValue : t,
                                    isDiscount: r.isDiscountAvailable,
                                }),
                            }),
                            [t, o.resourceRateValue, r.isDiscountAvailable, e.name, u.name],
                        );
                        return a().createElement(
                            'div',
                            { className: h()(uu, s && tu) },
                            a().createElement(
                                Qe,
                                { tooltipArgs: l },
                                a().createElement(qe, {
                                    text: R.strings.tank_setup.dialogs.goldExchange.default.status(),
                                    binding: c,
                                }),
                            ),
                        );
                    };
                let iu;
                function ou() {}
                !(function (e) {
                    (e.Payment = 'payment'), (e.Setup = 'setup'), (e.Modification = 'modification');
                })(iu || (iu = {}));
                function su() {
                    return !1;
                }
                console.log;
                function lu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return cu(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? cu(e, u)
                                          : void 0
                                );
                            }
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
                function cu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const _u = (e) => (0 === e ? window : window.subViews.get(e));
                const mu = () => (e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: i, children: s, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    _ = (t, n, a) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = _u,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = a.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const a = t(u),
                                                        r = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const s = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = o.O.view.addModelObserver(s, u, !0);
                                                        return a.set(l, t), e && t(i(r)), l;
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
                                                        for (var e, t = lu(a.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            s =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            _ = (e) => c.current.push(e),
                                            m = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = D.LO.box(n, { equals: su });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, D.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = D.LO.box(n, { equals: su });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, D.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = D.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, D.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                i = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = D.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, D.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
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
                                                cleanup: _,
                                            }),
                                            d = { mode: t, model: m, externalModel: s, cleanup: _ };
                                        return {
                                            model: m,
                                            controls: 'mocks' === t && a ? a.controls(d) : u(d),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    m = (0, n.useRef)(!1),
                                    d = (0, n.useState)(r),
                                    E = d[0],
                                    A = d[1],
                                    F = (0, n.useState)(() => _(r, i, l)),
                                    p = F[0],
                                    g = F[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        m.current ? g(_(E, i, l)) : (m.current = !0);
                                    }, [l, E, i]),
                                    (0, n.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            p.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [p],
                                    ),
                                    a().createElement(t.Provider, { value: p }, s)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    },
                    du = mu()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            needRepairContent: e.object('needRepairContent'),
                        }),
                        ou,
                    ),
                    Eu = du[0],
                    Au = du[1],
                    Fu = 'dealPanel',
                    pu = 'Alert_base_42',
                    Du = 'Alert_highlight_f2',
                    gu = 'Alert_highlight__warning_13',
                    hu = ({ warning: e }) => {
                        const u = h()(Du, e && gu);
                        return a().createElement('div', { className: pu }, a().createElement('div', { className: u }));
                    },
                    Cu = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Bu, bu;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Bu || (Bu = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(bu || (bu = {}));
                const vu = ({ size: e = Bu.Default }) => {
                        const u = h()(Cu.background, Cu[`background__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    fu = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    yu = ({ size: e }) => {
                        const u = h()(fu.base, fu[`base__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    wu = {
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
                    xu = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: i }) => {
                            const o = h()(
                                    wu.base,
                                    wu[`base__${e}`],
                                    t && wu.base__disabled,
                                    r && wu.base__finished,
                                    i && wu.base__withoutBounce,
                                ),
                                s = !t && !r;
                            return a().createElement(
                                'div',
                                { className: o, style: n, ref: u },
                                a().createElement('div', { className: wu.pattern }),
                                a().createElement('div', { className: wu.gradient }),
                                s && a().createElement(yu, { size: e }),
                            );
                        },
                    ),
                    Su = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: i }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            s = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                s && i && i();
                            }, [s, i]),
                            a().createElement(xu, { size: e, disabled: r, baseStyles: o, isComplete: s, lineRef: t })
                        );
                    },
                    Pu = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let ku, Iu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(ku || (ku = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Iu || (Iu = {}));
                const Nu = 'ProgressBarDeltaSimple_base_6c',
                    Ru = 'ProgressBarDeltaSimple_delta_99',
                    Tu = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: i,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < r,
                                _ = (0, n.useState)(Iu.Idle),
                                m = _[0],
                                d = _[1],
                                E = m === Iu.In,
                                A = m === Iu.End,
                                F = m === Iu.Idle,
                                p = (0, n.useCallback)(
                                    (e) => {
                                        d(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (F && !t) {
                                    return Pu(() => {
                                        p(Iu.In);
                                    }, u);
                                }
                            }, [p, t, F, u]),
                                (0, n.useEffect)(() => {
                                    if (E) {
                                        return Pu(() => {
                                            s && s(), p(Iu.End);
                                        }, e + u);
                                    }
                                }, [p, E, s, u, e]);
                            const D = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                g = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                h = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${c ? o : r}%` }),
                                    [r, c, o],
                                );
                            return A
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: Nu, style: h },
                                      a().createElement(
                                          'div',
                                          { style: F ? D : g, className: Ru },
                                          a().createElement(yu, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    Mu = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const _ = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(xu, {
                                    size: u,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: o,
                                    baseStyles: _,
                                }),
                                t >= 0 &&
                                    a().createElement(Tu, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Ou = 'ProgressBarDeltaGrow_base_7e',
                    Lu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Hu = 'ProgressBarDeltaGrow_glow_68',
                    Vu = (e) => (e ? { left: 0 } : { right: 0 }),
                    Uu = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    $u = (e) => ({ transitionDuration: `${e}ms` }),
                    Wu = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: i,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const _ = o < r,
                                m = (0, n.useState)(ku.Idle),
                                d = m[0],
                                E = m[1],
                                A = d === ku.End,
                                F = d === ku.Idle,
                                p = d === ku.Grow,
                                D = d === ku.Shrink,
                                g = (0, n.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                C = (0, n.useCallback)(
                                    (e, u) =>
                                        Pu(() => {
                                            g(e);
                                        }, u),
                                    [g],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? C(ku.Grow, u)
                                        : p
                                          ? C(ku.Shrink, e)
                                          : D
                                            ? C(ku.End, e)
                                            : void (A && s && s());
                            }, [C, t, A, p, F, D, s, u, e]);
                            const B = (0, n.useMemo)(() => Object.assign({ width: '100%' }, $u(e), Vu(_)), [_, e]),
                                b = (0, n.useMemo)(() => Object.assign({ width: '0%' }, $u(e), Vu(_)), [_, e]),
                                v = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Uu(_, r), $u(e)), [r, _, e]),
                                f = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, Uu(_, r), $u(e)),
                                    [r, _, o, e],
                                );
                            if (A) return null;
                            const y = h()(Ou, c, _ && 0 === o && Lu);
                            return a().createElement(
                                'div',
                                { style: F ? v : f, className: y },
                                a().createElement(
                                    'div',
                                    { style: D ? b : B, className: Hu },
                                    a().createElement(yu, { size: i }),
                                ),
                            );
                        },
                    ),
                    zu = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < t,
                                m = (0, n.useState)(!1),
                                d = m[0],
                                E = m[1],
                                A = (0, n.useCallback)(
                                    (e) => {
                                        e === ku.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                F = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                p = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(xu, {
                                    size: u,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: o,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: d ? p : F,
                                }),
                                t >= 0 &&
                                    a().createElement(Wu, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: s.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    ju = ['onComplete', 'onEndAnimation'];
                function Gu() {
                    return (
                        (Gu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Gu.apply(null, arguments)
                    );
                }
                const qu = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, ju);
                        const i = (0, n.useState)(!1),
                            o = i[0],
                            s = i[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== o && s(e), e && u && u(), t && t();
                            }, [o, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case bu.Simple:
                                return a().createElement(Mu, Gu({}, r, { onEndAnimation: l, isComplete: o }));
                            case bu.Growing:
                                return a().createElement(zu, Gu({}, r, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Xu = ['onEndAnimation'];
                function Ku() {
                    return (
                        (Ku = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ku.apply(null, arguments)
                    );
                }
                const Zu = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Xu);
                    const r = (0, n.useRef)({}),
                        i = (0, n.useCallback)(() => {
                            (r.current.from = void 0), u && u();
                        }, [u]),
                        o = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = o),
                        a().createElement(qu, Ku({}, t, { onEndAnimation: i, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function Yu() {
                    return (
                        (Yu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Yu.apply(null, arguments)
                    );
                }
                const Qu = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: s,
                            onComplete: l,
                        }) => {
                            if (r === u)
                                return a().createElement(Su, {
                                    key: `${r}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: n,
                                animationSettings: i,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: s,
                            };
                            return i.withStack
                                ? a().createElement(Zu, c)
                                : a().createElement(qu, Yu({ key: `${r}-${u}` }, c));
                        },
                    ),
                    Ju = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    et = (e, u, t) => (t < e ? e : t > u ? u : t),
                    ut = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (et(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    tt = {
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
                    nt = {
                        freezed: !1,
                        withStack: !1,
                        type: bu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    at = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = tt,
                            size: t = Bu.Default,
                            animationSettings: r = nt,
                            disabled: i = !1,
                            withoutBackground: o = !1,
                            value: s,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: _,
                            onEndAnimation: m,
                            onComplete: d,
                        }) => {
                            const E = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const n = (et(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: ut(n, u, t) };
                                }, [t, u, e]))(s, e, l);
                            return a().createElement(
                                'div',
                                { className: h()(Cu.base, Cu[`base__${t}`]), style: Ju(u) },
                                !o && a().createElement(vu, { size: t }),
                                a().createElement(Qu, {
                                    size: t,
                                    lineRef: c,
                                    disabled: i,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: m,
                                    onChangeAnimationState: _,
                                    onComplete: d,
                                }),
                            );
                        },
                    ),
                    rt = 'Durability_base_8c',
                    it = 'Durability_label_02',
                    ot = 'Durability_bar_73',
                    st = 'Durability_percentage_a7',
                    lt = R.strings.tank_setup.dialogs.needRepair,
                    ct = ({ value: e }) =>
                        a().createElement(
                            'div',
                            { className: rt },
                            a().createElement('div', { className: it }, lt.durability()),
                            a().createElement(
                                'div',
                                { className: ot },
                                a().createElement(at, { size: Bu.Medium, value: e }),
                            ),
                            a().createElement(qe, {
                                text: lt.durabilityPercentage(),
                                binding: { value: e },
                                classMix: st,
                            }),
                        ),
                    _t = 'RepairHeaderApp_base_b0',
                    mt = 'RepairHeaderApp_durability_69',
                    dt = (0, d.Pi)(() => {
                        const e = Au().model,
                            u = e.needRepairContent.get().repairPercentage,
                            t = e.root.get().bottomContentType;
                        return a().createElement(
                            'div',
                            { className: _t },
                            a().createElement(hu, { warning: t === Fu }),
                            t === Fu &&
                                a().createElement('div', { className: mt }, a().createElement(ct, { value: u })),
                        );
                    }),
                    Et = () => a().createElement(Eu, null, a().createElement(dt, null)),
                    At = {
                        base: 'ExchangeDialogContent_base_ef',
                        description: 'ExchangeDialogContent_description_6e',
                        status: 'ExchangeDialogContent_status_33',
                        status__notPossible: 'ExchangeDialogContent_status__notPossible_e1',
                        status__notRequired: 'ExchangeDialogContent_status__notRequired_8a',
                        items: 'ExchangeDialogContent_items_72',
                        title: 'ExchangeDialogContent_title_9f',
                        titleCurrency: 'ExchangeDialogContent_titleCurrency_88',
                    },
                    Ft = R.strings.tank_setup.dialogs.goldExchange.notRequired.action,
                    pt = R.strings.common.common,
                    Dt = (e) => (e === iu.Modification ? Ft.modification() : Ft.buy()),
                    gt = (0, d.Pi)(
                        ({
                            title: e,
                            titleBinding: u,
                            name: t,
                            exchangeState: n,
                            items: r,
                            actionType: i,
                            description: o,
                            exchangeType: s = Ea.Basic,
                        }) => {
                            const l = ke().model,
                                c = l.fromItem.get(),
                                _ = l.lacksMoney.get(),
                                m = l.toItem.get(),
                                d = l.exchangeRate.get(),
                                E =
                                    s === Ea.Upgrade
                                        ? R.strings.tank_setup.dialogs.exchangeToUpgrade
                                        : R.strings.tank_setup.dialogs.goldExchange,
                                A = U(E.notRequired.title(), { action: Dt(i) });
                            return a().createElement(
                                'div',
                                { className: At.base },
                                s === Ea.Repair && a().createElement(Et, null),
                                r && a().createElement('div', { className: At.items }, r),
                                a().createElement(qe, {
                                    text: n === p ? A : e,
                                    binding: Object.assign(
                                        {
                                            name: t && `${pt.open_quotes()}${$(t)}${pt.close_quotes()}`,
                                            credits: a().createElement(
                                                'div',
                                                { className: At.titleCurrency },
                                                a().createElement(je.F, {
                                                    key: _.name,
                                                    size: le.et.large,
                                                    type: le.V2.credits,
                                                    value: _.value,
                                                }),
                                            ),
                                        },
                                        u,
                                    ),
                                    formatWithBrackets: Boolean(Object.keys(u || {}).length),
                                    classMix: At.title,
                                }),
                                o && a().createElement('div', { className: At.description }, o),
                                a().createElement(
                                    'div',
                                    { className: h()(At.status, At[`status__${n}`]) },
                                    n === F &&
                                        a().createElement(ru, {
                                            fromItem: c,
                                            toItem: m,
                                            defaultRate: d.default,
                                            discount: l.discount.get(),
                                            discountRate: l.discountRate.get(),
                                            amountOfPersonalDiscounts: d.amountOfPersonalDiscounts,
                                        }),
                                    'notPossible' === n &&
                                        a().createElement(qe, {
                                            text: E.notPossible.status(),
                                            binding: {
                                                gold: a().createElement(je.F, {
                                                    type: le.V2.gold,
                                                    size: le.et.small,
                                                    value: c.value,
                                                }),
                                            },
                                        }),
                                    n === p && E.notRequired.status(),
                                ),
                            );
                        },
                    ),
                    ht = (e) => {
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
                    },
                    Ct = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    Bt = (e) => e instanceof HTMLElement,
                    bt = (e) => {
                        e.focus();
                    },
                    vt = (e) => {
                        if (e.keyCode === s.n.TAB) {
                            const u = Array.from(document.body.querySelectorAll('input')).filter(Bt);
                            if (!u.length) return;
                            e.preventDefault(), o.O.view.setEventHandled();
                            const t = document.activeElement,
                                n = u[0],
                                a = u[u.length - 1];
                            if (e.shiftKey && t === n) bt(a);
                            else if (e.shiftKey || t !== a) {
                                const n = u.findIndex((e) => e === t),
                                    a = u[n + (e.shiftKey ? -1 : 1)];
                                a && bt(a);
                            } else bt(n);
                        }
                    };
                function ft(e) {
                    const u = new KeyboardEvent('keydown', {
                        view: window,
                        bubbles: !0,
                        key: 'Tab',
                        charCode: s.n.TAB,
                        keyCode: s.n.TAB,
                        shiftKey: e,
                    });
                    document.body.dispatchEvent(u);
                }
                function yt(e, u, t, n) {
                    let a,
                        r = !1,
                        i = 0;
                    function o() {
                        a && clearTimeout(a);
                    }
                    function s(...s) {
                        const l = this,
                            c = Date.now() - i;
                        function _() {
                            (i = Date.now()), t.apply(l, s);
                        }
                        r ||
                            (n && !a && _(),
                            o(),
                            void 0 === n && c > e
                                ? _()
                                : !0 !== u &&
                                  (a = setTimeout(
                                      n
                                          ? function () {
                                                a = void 0;
                                            }
                                          : _,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                        (s.cancel = function () {
                            o(), (r = !0);
                        }),
                        s
                    );
                }
                function wt(e, u, t, a = !1) {
                    const r = (0, n.useMemo)(
                        () =>
                            (function (e, u, t) {
                                return void 0 === t ? yt(e, u, !1) : yt(e, t, !1 !== u);
                            })(t, a, e),
                        u,
                    );
                    return (0, n.useEffect)(() => r.cancel, [r]), r;
                }
                var xt = t(2558),
                    St = t(8934);
                const Pt = (e, u = l.B3.INTEGRAL) => l.Z5.getNumberFormat(e, u);
                t(3368);
                let kt;
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
                })(kt || (kt = {}));
                const It = {
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
                class Nt extends a().PureComponent {
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
                                this.props.currencyType ? l.Z5.getNumberFormat(e, l.B3.GOLD) : e.toString()),
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
                                const u = e === s.n.BACKSPACE,
                                    t = e === s.n.DELETE,
                                    n = this.input.current,
                                    a = n.selectionStart || 0,
                                    r = n.selectionEnd || 0;
                                let i = n.value;
                                const o = Math.max(a, r),
                                    c = o;
                                t && (i = i.substring(0, o) + i.substring(o + 1, i.length)),
                                    u && 1 === a && 1 === i.length && (i = '0');
                                const _ = Number(i.trim().replace(/\D/g, '')),
                                    m = Number.isSafeInteger(_) ? _ : Number.MAX_SAFE_INTEGER,
                                    d = this.props.currencyType ? l.Z5.getNumberFormat(m, l.B3.GOLD) : m.toString(),
                                    E = !isNaN(Number(i.replace(' ', '')));
                                n.value = d;
                                const A = new RegExp(/\d/g);
                                let F = 0;
                                for (let e = 0; e < c; e++) {
                                    const u = i[e] || '',
                                        t = d[F] || '';
                                    if (u.match(A) || u === t) {
                                        for (; u !== d[F] && F < d.length; ) F++;
                                        F++;
                                    }
                                }
                                '' === i ? (F = 1) : E || (F = i.length),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(F, F),
                                    this.changeValue(m),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        this.getValidValue(m) !== m &&
                                            this.state.isFocused &&
                                            (this.changeValue(this.getValidValue(m)),
                                            this.setCursorPosition(0, this.formatValue(m).length));
                                    }, 1e3));
                            }),
                            (this.handleDelete = (e) => {
                                const u = e.keyCode === s.n.BACKSPACE,
                                    t = e.keyCode === s.n.DELETE,
                                    n = e.target,
                                    a = n.selectionStart,
                                    r = n.selectionEnd,
                                    i = n.value,
                                    o = a !== r,
                                    l = new RegExp(/\D/),
                                    c = u && a ? a - 1 : a || 0;
                                if (o) return;
                                let _ = c;
                                const m = l.test(i[c]);
                                if (t && m) for (; l.test(i[_]) && _ < i.length; ) _++;
                                if (u && m) for (; l.test(i[_]) && _ > 0; ) _--;
                                if (_ !== c || (u && m))
                                    return e.preventDefault(), (_ = _ < 0 ? 0 : _), void this.setCursorPosition(_, _);
                                ((u && 1 === a && 1 === i.length) || t) &&
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
                                        (e.keyCode in s.n &&
                                            e.keyCode !== s.n.BACKSPACE &&
                                            e.keyCode !== s.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case s.n.ARROW_UP:
                                        case s.n.NUM_PLUS:
                                        case s.n.PLUS:
                                            this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment();
                                            break;
                                        case s.n.ARROW_DOWN:
                                        case s.n.NUM_MINUS:
                                        case s.n.MINUS:
                                            this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement();
                                            break;
                                        case s.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case s.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case s.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                this.changeValue(this.props.maximum), this.setCursorPosition(0, e);
                                            }
                                            break;
                                        case s.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case s.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case s.n.BACKSPACE:
                                        case s.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case s.n.ARROW_UP:
                                        case s.n.NUM_PLUS:
                                        case s.n.PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case s.n.ARROW_DOWN:
                                        case s.n.NUM_MINUS:
                                        case s.n.MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in kt || e.preventDefault();
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
                                this.props.isDisabled || C('highlight');
                            }),
                            (this.playClickSound = () => {
                                this.props.isDisabled || C('yes');
                            }),
                            (this.stop = () => {
                                this.timer && clearTimeout(this.timer), (this.timer = null);
                            });
                    }
                    componentDidUpdate(e, u) {
                        const t = this.state,
                            n = t.value,
                            a = t.isFocused;
                        if (n !== u.value && a) {
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
                            ? l.Z5.getNumberFormat(this.state.value, l.B3.GOLD)
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
                            r = h()(
                                It.base,
                                It[`base__${t}`],
                                n && It[`base__withCurrency-${t}`],
                                u && It.base__isDisabled,
                                this.state.isFocused && It.base__isFocus,
                            ),
                            i = h()(
                                It.buttonIncrement,
                                It[`buttonIncrement__${t}`],
                                this.buttonIncrementIsDisabled && It.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    It[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            o = h()(
                                It.buttonDecrement,
                                It[`buttonDecrement__${t}`],
                                this.buttonDecrementIsDisabled && It.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    It[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            s = h()(
                                It.input,
                                u && It.input__disabled,
                                n && It.input__withCurrency,
                                n && It[`input__${n}-${t}`],
                                n && It[`input__${n}`],
                                !1 === this.props.isValid && It.input__error,
                                n && u && It[`input__${n}-disabled`],
                            ),
                            l = h()(It.currencyIcon, n && It[`currencyIcon__${n}-${t}`]),
                            c = h()(It.currency, n && It[`currency__${n}`], n && It[`currency__${n}-${t}`]);
                        return a().createElement(
                            'div',
                            {
                                className: r,
                                ref: this.numericalStepper,
                                style: ((_ = this.props.width), _ ? { width: `${_}rem` } : {}),
                            },
                            a().createElement(
                                'div',
                                { className: It.inputContainer },
                                n &&
                                    a().createElement(
                                        'div',
                                        { className: c },
                                        a().createElement('span', { className: It.dummyValue }, this.formattedValue),
                                        a().createElement('span', { className: l }),
                                    ),
                                a().createElement('input', {
                                    ref: this.input,
                                    className: s,
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
                            a().createElement(
                                'div',
                                { className: It.control },
                                a().createElement('div', {
                                    className: i,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                a().createElement('div', {
                                    className: o,
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
                Nt.defaultProps = {
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
                const Rt = 'CurrencyStepper_base_8f',
                    Tt = 'CurrencyStepper_label_9b',
                    Mt = 'CurrencyStepper_limit_7c',
                    Ot = 'CurrencyStepper_limitIcon_bf',
                    Lt = 'CurrencyStepper_limit__exceeded_5d',
                    Ht = 'CurrencyStepper_limit__right_08',
                    Vt = 'CurrencyStepper_limitWrapper__enter_90',
                    Ut = 'CurrencyStepper_limitWrapper__exit_15',
                    $t = 'CurrencyStepper_restriction_67',
                    Wt = 'CurrencyStepper_restrictionIcon_6f',
                    zt = 'CurrencyStepper_restrictionIconGlow_02',
                    jt = ['label', 'limit', 'limitPosition', 'onLimitClick', 'onChange'];
                function Gt() {
                    return (
                        (Gt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Gt.apply(null, arguments)
                    );
                }
                const qt = R.strings.personal_exchange_rates.common,
                    Xt = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    Kt = { enter: Vt, exit: Ut },
                    Zt = (e) => {
                        let u = e.label,
                            t = e.limit,
                            r = e.limitPosition,
                            i = e.onLimitClick,
                            o = e.onChange,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, jt);
                        const l = t && s.value > t,
                            c = (0, n.useState)(!1)[1],
                            _ = wt(
                                (e) => {
                                    o(e), ht(() => c((e) => !e));
                                },
                                [o],
                                1e3,
                            );
                        return a().createElement(
                            'div',
                            { className: Rt },
                            u && a().createElement('div', { className: Tt }, u),
                            a().createElement(Nt, Gt({ size: 'large', width: 210, onChange: _ }, s)),
                            t &&
                                !i &&
                                a().createElement(
                                    xt.Z,
                                    { component: a().Fragment },
                                    a().createElement(
                                        St.Z,
                                        { key: String(l), timeout: 250, classNames: Kt },
                                        a().createElement(
                                            Qe,
                                            { tooltipArgs: Xt, className: h()(Mt, 'right' === r && Ht, l && Lt) },
                                            a().createElement(
                                                a().Fragment,
                                                null,
                                                l
                                                    ? a().createElement(qe, { text: qt.limitExceeded() })
                                                    : a().createElement(qe, {
                                                          text: qt.limit(),
                                                          binding: { value: Pt(t) },
                                                      }),
                                                a().createElement('div', { className: Ot }),
                                            ),
                                        ),
                                    ),
                                ),
                            i &&
                                a().createElement(
                                    'div',
                                    { className: h()(Mt, 'right' === r && Ht) },
                                    a().createElement(x, {
                                        caption: qt.limitRestrictions(),
                                        type: 'close',
                                        side: 'left',
                                        onClick: i,
                                        classNames: { base: $t, icon: Wt, glow: zt },
                                    }),
                                ),
                        );
                    },
                    Yt = 'ExceededMessage_wrapper_0d',
                    Qt = 'ExceededMessage_base_1b',
                    Jt = 'ExceededMessage_limitIcon_46',
                    en = 'ExceededMessage_hidden_4b',
                    un = 'ExceededMessage_limitWrapper__enter_0a',
                    tn = 'ExceededMessage_limitWrapper__exit_bc',
                    nn = 'ExceededMessage_restriction_33',
                    an = 'ExceededMessage_restrictionIcon_f1',
                    rn = 'ExceededMessage_restrictionIconGlow_04',
                    on = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    sn = { enter: un, exit: tn },
                    ln = ({ className: e, exceeded: u, amountOfPersonalDiscounts: t, onClick: n }) =>
                        a().createElement(
                            xt.Z,
                            { className: h()(e, Yt) },
                            a().createElement(
                                St.Z,
                                { key: String(`${u}${t > 5}`), timeout: 350, classNames: sn },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    u
                                        ? t > 5
                                            ? a().createElement(
                                                  'div',
                                                  { className: h()(Qt) },
                                                  a().createElement(
                                                      'div',
                                                      null,
                                                      R.strings.personal_exchange_rates.common.limitOverExceeded(),
                                                  ),
                                                  a().createElement(x, {
                                                      caption:
                                                          R.strings.personal_exchange_rates.common.limitRestrictions(),
                                                      type: 'close',
                                                      side: 'right',
                                                      onClick: n,
                                                      classNames: { base: nn, icon: an, glow: rn },
                                                  }),
                                              )
                                            : a().createElement(
                                                  Qe,
                                                  { tooltipArgs: on, className: h()(Qt) },
                                                  a().createElement(
                                                      a().Fragment,
                                                      null,
                                                      a().createElement(
                                                          'div',
                                                          null,
                                                          R.strings.personal_exchange_rates.common.limitExceeded(),
                                                      ),
                                                      a().createElement('div', { className: Jt }),
                                                  ),
                                              )
                                        : a().createElement(
                                              'div',
                                              { className: h()(Qt, en) },
                                              a().createElement(
                                                  'div',
                                                  null,
                                                  R.strings.personal_exchange_rates.common.limitExceeded(),
                                              ),
                                          ),
                                ),
                            ),
                        ),
                    cn = 'ExchangePanel_base_bd',
                    _n = 'ExchangePanel_arrow_62',
                    mn = 'ExchangePanel_arrow__small_30',
                    dn = 'ExchangePanel_excluded_02';
                var En = t(3946);
                const An = mu()(
                        ({ observableModel: e, externalModel: u, readByPath: t }) => {
                            function n() {
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
                                })(t('exchangePanel.exchangeRate.discount'));
                            }
                            const a = Object.assign(
                                {
                                    discount: D.LO.box(n()),
                                    exchangeRate: e.object('exchangePanel.exchangeRate'),
                                    fromItem: e.object('exchangePanel.fromItem'),
                                    toItem: e.object('exchangePanel.toItem'),
                                },
                                e.primitives({ golds: 'goldBalance', credits: 'creditBalance' }),
                            );
                            u.subscribe(
                                (0, D.aD)(() => a.discount.set(n())),
                                'exchangePanel.exchangeRate.discount',
                            );
                            const r = (0, En.Om)(() => a.exchangeRate.get().maxGoldAmountForExchange),
                                i = (0, En.Om)(() => {
                                    const e = a.discount.get();
                                    return (
                                        !(!e || 'limited' !== e.type) && e.availableAmount.gold < a.fromItem.get().value
                                    );
                                });
                            return Object.assign({}, a, { computes: { maximumGold: r, exceeded: i } });
                        },
                        ({ externalModel: e, model: u }) => ({
                            openAllDiscounts: e.createCallbackNoArgs(
                                'exchangePanel.exchangeRate.onOpenAllDiscountsWindow',
                            ),
                            setGold: e.createCallback(
                                (e) => ({ gold: Math.min(e, u.computes.maximumGold()) }),
                                'exchangePanel.exchangeRate.onSelectedValueUpdated',
                            ),
                            setCredits: e.createCallback(
                                (e) => ({ currency: Math.min(e, u.exchangeRate.get().maxResourceAmountForExchange) }),
                                'exchangePanel.exchangeRate.onSelectedValueUpdated',
                            ),
                        }),
                    ),
                    Fn = An[0],
                    pn = An[1],
                    Dn = (0, d.Pi)(({ setGoldToChange: e, isSmall: u = !1 }) => {
                        Ct(
                            () => (
                                ht(() => {
                                    ft(!1),
                                        ht(() => {
                                            ft(!0);
                                        });
                                }),
                                document.body.addEventListener('keydown', vt),
                                () => {
                                    document.body.removeEventListener('keydown', vt);
                                }
                            ),
                        );
                        const t = (0, n.useState)(null),
                            i = t[0],
                            o = t[1],
                            s = pn(),
                            l = s.model,
                            c = s.controls,
                            _ = l.fromItem.get().value,
                            m = l.computes.maximumGold(),
                            d = ie(m),
                            E = 0 === m,
                            A = u ? 'small' : 'medium';
                        return (
                            a().useEffect(() => {
                                d && d !== m && c.setGold(_);
                            }, [m, _]),
                            a().useEffect(() => {
                                e(_);
                            }, [e, _]),
                            Ct(() => {
                                o(document.querySelector('#dialog-template-footer'));
                            }),
                            a().createElement(
                                'div',
                                { className: cn },
                                a().createElement(Zt, {
                                    value: l.fromItem.get().value,
                                    maximum: m,
                                    currencyType: le.V2.gold,
                                    onChange: c.setGold,
                                    width: 170,
                                    size: A,
                                    onValidValue: (e) => e,
                                    onIncrement: () => (c.setGold(l.fromItem.get().value + 1), 0),
                                    onDecrement: () => (c.setGold(l.fromItem.get().value - 1), 0),
                                    isDisabled: E,
                                    isFocused: !1,
                                }),
                                a().createElement('div', { className: h()(_n, u && mn) }),
                                a().createElement(Zt, {
                                    value: l.toItem.get().value,
                                    maximum: l.exchangeRate.get().maxResourceAmountForExchange,
                                    currencyType: le.V2.credits,
                                    onChange: c.setCredits,
                                    width: 170,
                                    limitPosition: 'right',
                                    size: A,
                                    onValidValue: (e) => e,
                                    onIncrement: () => (c.setGold(l.fromItem.get().value + 1), 0),
                                    onDecrement: () => (c.setGold(l.fromItem.get().value - 1), 0),
                                    isDisabled: E,
                                    isFocused: !0,
                                }),
                                i &&
                                    (0, r.createPortal)(
                                        a().createElement(ln, {
                                            className: dn,
                                            exceeded: l.computes.exceeded(),
                                            amountOfPersonalDiscounts: l.exchangeRate.get().amountOfPersonalDiscounts,
                                            onClick: c.openAllDiscounts,
                                        }),
                                        i,
                                    ),
                            )
                        );
                    }),
                    gn = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e;
                var hn;
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
                })(hn || (hn = {}));
                const Cn = o.O.client.getSize('rem'),
                    Bn = Cn.width,
                    bn = Cn.height,
                    vn = Object.assign(
                        { width: Bn, height: bn },
                        (function (e, u, t) {
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
                                a = (function (e, u) {
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
                                r = Math.min(n, a);
                            return {
                                extraLarge: r === t.extraLarge.weight,
                                large: r === t.large.weight,
                                medium: r === t.medium.weight,
                                small: r === t.small.weight,
                                extraSmall: r === t.extraSmall.weight,
                                extraLargeWidth: n === t.extraLarge.weight,
                                largeWidth: n === t.large.weight,
                                mediumWidth: n === t.medium.weight,
                                smallWidth: n === t.small.weight,
                                extraSmallWidth: n === t.extraSmall.weight,
                                extraLargeHeight: a === t.extraLarge.weight,
                                largeHeight: a === t.large.weight,
                                mediumHeight: a === t.medium.weight,
                                smallHeight: a === t.small.weight,
                                extraSmallHeight: a === t.extraSmall.weight,
                            };
                        })(Bn, bn, {
                            extraLarge: { weight: 4, width: 2560, height: 1440 },
                            large: { weight: 3, width: 1920, height: 1080 },
                            medium: { weight: 2, width: 1600, height: 900 },
                            small: { weight: 1, width: 1366, height: 768 },
                            extraSmall: { weight: 0, width: 1024, height: 768 },
                        }),
                    ),
                    fn = (0, n.createContext)(vn),
                    yn = ['children'];
                const wn = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, yn);
                    const a = (0, n.useContext)(fn),
                        r = a.extraLarge,
                        i = a.large,
                        o = a.medium,
                        s = a.small,
                        l = a.extraSmall,
                        c = a.extraLargeWidth,
                        _ = a.largeWidth,
                        m = a.mediumWidth,
                        d = a.smallWidth,
                        E = a.extraSmallWidth,
                        A = a.extraLargeHeight,
                        F = a.largeHeight,
                        p = a.mediumHeight,
                        D = a.smallHeight,
                        g = a.extraSmallHeight,
                        h = { extraLarge: A, large: F, medium: p, small: D, extraSmall: g };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && i) return u;
                        if (t.medium && o) return u;
                        if (t.small && s) return u;
                        if (t.extraSmall && l) return u;
                    } else {
                        if (t.extraLargeWidth && c) return gn(u, t, h);
                        if (t.largeWidth && _) return gn(u, t, h);
                        if (t.mediumWidth && m) return gn(u, t, h);
                        if (t.smallWidth && d) return gn(u, t, h);
                        if (t.extraSmallWidth && E) return gn(u, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && A) return u;
                            if (t.largeHeight && F) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && D) return u;
                            if (t.extraSmallHeight && g) return u;
                        }
                    }
                    return null;
                };
                wn.defaultProps = {
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
                (0, n.memo)(wn);
                let xn;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(xn || (xn = {}));
                var Sn = t(3934);
                const Pn = 'Animation_base_ab',
                    kn = 'Animation_base__withAnimation_41',
                    In = 'Animation_base__enter_1e',
                    Nn = 'Animation_base__exit_88',
                    Rn = ({ children: e, when: u, canAccept: t }) => {
                        const r = (0, n.useCallback)((e, u) => {
                                (0, l.Eu)().then(() => {
                                    (e.className = ''), e.classList.add(Pn), e.classList.add(u);
                                });
                            }, []),
                            i = (0, n.useCallback)(
                                (e) => {
                                    r(e, In);
                                },
                                [r],
                            ),
                            o = (0, n.useCallback)(
                                (e) => {
                                    r(e, Nn);
                                },
                                [r],
                            );
                        return u
                            ? a().createElement(
                                  xt.Z,
                                  null,
                                  a().createElement(
                                      St.Z,
                                      { in: t, timeout: 500, onEnter: i, onExit: o, key: `index-${t}` },
                                      a().createElement('div', { className: h()(Pn, kn) }, e),
                                  ),
                              )
                            : a().createElement('div', { className: Pn }, e);
                    };
                let Tn, Mn, On, Ln;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Tn || (Tn = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(Mn || (Mn = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(On || (On = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(Ln || (Ln = {}));
                const Hn = {
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
                    Vn = [
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
                function Un() {
                    return (
                        (Un = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Un.apply(null, arguments)
                    );
                }
                const $n = (e) => {
                        let u = e.id,
                            t = e.isChecked,
                            r = void 0 !== t && t,
                            i = e.isDisabled,
                            o = void 0 !== i && i,
                            s = e.isAlert,
                            l = void 0 !== s && s,
                            c = e.size,
                            _ = void 0 === c ? Mn.medium : c,
                            m = e.type,
                            d = void 0 === m ? On.primary : m,
                            E = e.soundHover,
                            A = void 0 === E ? 'highlight' : E,
                            F = e.soundClick,
                            p = void 0 === F ? 'play' : F,
                            D = e.onMouseEnter,
                            g = e.onMouseLeave,
                            B = e.onMouseUp,
                            b = e.onMouseDown,
                            v = e.onClick,
                            f = e.onChange,
                            y = e.onFocus,
                            w = e.onBlur,
                            x = e.text,
                            S = e.contentStyles,
                            P = e.children,
                            k = e.alignment,
                            I = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Vn);
                        const N = (0, n.useState)(!1),
                            R = N[0],
                            T = N[1],
                            M = (0, n.useState)(!1),
                            O = (M[0], M[1]),
                            L = (0, n.useCallback)(
                                (e) => {
                                    o || (f && f(), v && v(e));
                                },
                                [o, f, v],
                            ),
                            H = (0, n.useCallback)(
                                (e) => {
                                    const u = e.button === Tn.LEFT;
                                    o || (u && T(!0), u && b && b(e), p && C(p));
                                },
                                [o, b, p],
                            ),
                            V = (0, n.useCallback)(
                                (e) => {
                                    o || (T(!1), B && B(e));
                                },
                                [o, B],
                            ),
                            U = (0, n.useCallback)(
                                (e) => {
                                    o || (D && D(e), A && C(A));
                                },
                                [o, D, A],
                            ),
                            $ = (0, n.useCallback)(
                                (e) => {
                                    o || (T(!1), g && g(e));
                                },
                                [o, g],
                            ),
                            W = (0, n.useCallback)(
                                (e) => {
                                    o || (O(!0), y && y(e));
                                },
                                [o, y],
                            ),
                            z = (0, n.useCallback)(
                                (e) => {
                                    o || (O(!1), w && w(e));
                                },
                                [o, w],
                            ),
                            j = a().createElement(
                                'div',
                                { className: Hn.label },
                                a().createElement(
                                    'div',
                                    { className: h()(Hn.labelContent, 's-labelContent'), style: S },
                                    x || P,
                                ),
                            );
                        return a().createElement(
                            'div',
                            Un(
                                {
                                    id: u,
                                    className: h()(Hn.base, Hn[`base__${_}`], Hn[`base__${d}`], {
                                        [Hn.base__checked]: r,
                                        [Hn.base__disabled]: o,
                                        [Hn.base__mouseDown]: R,
                                        [Hn.base__alert]: l,
                                        [Hn.base__center]: k === Ln.Center,
                                        [Hn.base__bottom]: k === Ln.Bottom,
                                    }),
                                    onClick: L,
                                    onMouseEnter: U,
                                    onMouseLeave: $,
                                    onMouseDown: H,
                                    onMouseUp: V,
                                    onFocus: W,
                                    onBlur: z,
                                },
                                I,
                            ),
                            a().createElement(
                                'div',
                                { className: Hn.input },
                                a().createElement('div', { className: Hn.alertOverlay }),
                                a().createElement('div', { className: Hn.inputHoverOverlay }),
                                a().createElement('div', { className: Hn.highlight }),
                            ),
                            a().createElement('div', { className: Hn.checkmark }),
                            ((x || P) && j) || null,
                        );
                    },
                    Wn = (0, n.createContext)(null),
                    zn = (0, d.Pi)(
                        ({
                            label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                            onValueChanged: u,
                            renewType: t = ra.General,
                        }) => {
                            const r = (() => {
                                    const e = (0, n.useContext)(Wn);
                                    if (!e)
                                        throw Error(
                                            'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                                        );
                                    return e;
                                })(),
                                i = r.model,
                                o = r.controls,
                                s = i.dealPanel.get().isAutoRenewalEnabled,
                                l = (0, n.useCallback)(() => {
                                    o.changeAutoRenewal(!s), u && u(!s);
                                }, [o, s, u]),
                                c = (0, n.useMemo)(() => {
                                    const e = R.strings.tank_setup.tooltip.autoRenewal,
                                        u = e.header.$dyn(t),
                                        n = t === ra.General ? '' : e.body.$dyn(t);
                                    return { header: String(u || e.header.general()), body: n ? String(n) : void 0 };
                                }, [t]);
                            return a().createElement(
                                L,
                                c,
                                a().createElement($n, {
                                    id: 'renewal-setup-checkbox',
                                    isChecked: s,
                                    text: e,
                                    onChange: l,
                                }),
                            );
                        },
                    ),
                    jn = 'ConfirmButton_base_75',
                    Gn = a().memo(({ applyBtnString: e, isDisabled: u, onConfirm: t, confirmButtonRef: n }) =>
                        a().createElement(
                            'div',
                            { ref: n, className: jn, id: 'deal-panel-confirm' },
                            a().createElement(
                                v,
                                { size: A.medium, disabled: u, onClick: () => t && t() },
                                R.strings.tank_setup.dealPanel.button.$dyn(e),
                            ),
                        ),
                    ),
                    qn = 'Controls_base_d3',
                    Xn = 'Controls_button_f8',
                    Kn = a().memo(
                        ({
                            applyBtnString: e = 'apply',
                            isDisabled: u,
                            canCancel: t,
                            onCancel: n,
                            onConfirm: r,
                            confirmButtonRef: i,
                        }) => {
                            const o = R.strings.tank_setup.dealPanel,
                                s = a().createElement(Gn, {
                                    applyBtnString: e,
                                    isDisabled: u,
                                    onConfirm: r,
                                    confirmButtonRef: i,
                                });
                            return a().createElement(
                                'div',
                                { className: qn },
                                u
                                    ? a().createElement(
                                          L,
                                          { body: o.tooltip.notEnough() },
                                          a().createElement('div', null, s),
                                      )
                                    : s,
                                a().createElement(
                                    'div',
                                    { id: 'deal-panel-cancel' },
                                    a().createElement(
                                        v,
                                        { size: A.medium, type: E.secondary, mixClass: Xn, disabled: !t, onClick: n },
                                        o.button.cancel(),
                                    ),
                                ),
                            );
                        },
                    ),
                    Zn = mu()(
                        ({ observableModel: e }) =>
                            Object.assign(
                                {},
                                e.primitives(['totalItemsInStorage', 'isDisabled', 'canAccept', 'canCancel']),
                                {
                                    root: e.object(),
                                    dealPanel: e.object(),
                                    price: e.array('price'),
                                    defPrice: e.array('defPrice'),
                                    discount: e.array('discount'),
                                },
                            ),
                        ({ externalModel: e }) => ({
                            changeAutoRenewal: e.createCallback((e) => ({ value: e }), 'onAutoRenewalChanged'),
                        }),
                    ),
                    Yn = (Zn[0], Zn[1]);
                var Qn = t(8401);
                const Jn = 'TotalPrice_base_d9',
                    ea = 'TotalPrice_message_66',
                    ua = 'TotalPrice_message__hidden_29',
                    ta = 'TotalPrice_plus_f0',
                    na = ({ parentId: e, isHideMessage: u, priceLabel: t }) => {
                        const n = Yn().model;
                        return a().createElement(
                            'div',
                            { id: `${e}-total-price`, className: Jn },
                            a().createElement('div', { className: h()(ea, u && ua) }, t),
                            a().createElement(Qn.t, {
                                ignoreDiscount: !0,
                                bigSize: !0,
                                price: n.price.get(),
                                defPrice: n.defPrice.get(),
                                discount: n.discount.get(),
                                priceSeparator: a().createElement('div', { className: ta }),
                            }),
                        );
                    },
                    aa = {
                        base: 'App_base_44',
                        base__tiny: 'App_base__tiny_5e',
                        base__small: 'App_base__small_1d',
                        base__medium: 'App_base__medium_2a',
                        base__large: 'App_base__large_8d',
                        base__huge: 'App_base__huge_6d',
                        base__dialog: 'App_base__dialog_fa',
                        storage: 'App_storage_d5',
                        storage__medium: 'App_storage__medium_51',
                        storage__large: 'App_storage__large_8a',
                        storage__huge: 'App_storage__huge_b6',
                        from: 'App_from_a4',
                        plus: 'App_plus_04',
                        renewal: 'App_renewal_06',
                        renewal__dialog: 'App_renewal__dialog_ba',
                        control: 'App_control_fc',
                        totalPrice: 'App_totalPrice_87',
                        totalPrice__mixed: 'App_totalPrice__mixed_cc',
                    };
                let ra, ia;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(ra || (ra = {})),
                    (function (e) {
                        (e.Column = 'column'), (e.Row = 'row');
                    })(ia || (ia = {}));
                const oa = R.strings.tank_setup.dealPanel,
                    sa =
                        ((0, d.Pi)(
                            ({
                                renewalType: e,
                                withConfirmation: u = !1,
                                mediaSize: t = xn.Medium,
                                panelType: r = ia.Row,
                                priceLabel: i = oa.toBePaid(),
                                autoRenewalLabel: o,
                                onAutoRenewalChanged: s,
                                onDealConfirmed: l,
                                onDealCancelled: c,
                            }) => {
                                const _ = Yn(),
                                    m = _.model,
                                    d = (0, n.useRef)(null),
                                    E = t === xn.Tiny || t === xn.Small,
                                    A = r === ia.Row,
                                    F = Boolean(m.totalItemsInStorage.get()),
                                    p = Boolean(m.price.get().length),
                                    D = E && F && p;
                                return a().createElement(
                                    Wn.Provider,
                                    { value: _ },
                                    a().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                aa.base,
                                                t && aa[`base__${t}`],
                                                e && aa.base__renewal,
                                                !A && aa.base__dialog,
                                            ),
                                        },
                                        e &&
                                            a().createElement(
                                                'div',
                                                { className: h()(aa.renewal, !A && aa.renewal__dialog) },
                                                a().createElement(zn, { renewType: e, onValueChanged: s, label: o }),
                                            ),
                                        a().createElement(
                                            Rn,
                                            { when: A, canAccept: m.canAccept.get() },
                                            a().createElement(
                                                a().Fragment,
                                                null,
                                                F &&
                                                    a().createElement(
                                                        'div',
                                                        { className: h()(aa.storage, t && aa[`storage__${t}`]) },
                                                        !E &&
                                                            a().createElement(
                                                                'div',
                                                                { className: aa.from },
                                                                oa.fromStorage(),
                                                            ),
                                                        a().createElement(Sn.K, {
                                                            valueFirst: !0,
                                                            itemsInStorage: m.totalItemsInStorage.get(),
                                                        }),
                                                    ),
                                                D && a().createElement('div', { className: aa.plus }),
                                                p &&
                                                    a().createElement(
                                                        'div',
                                                        { className: h()(aa.totalPrice, D && aa.totalPrice__mixed) },
                                                        a().createElement(na, {
                                                            parentId: 'deal-panel',
                                                            priceLabel: i,
                                                            isHideMessage: E && A,
                                                        }),
                                                    ),
                                                u &&
                                                    m.canAccept.get() &&
                                                    a().createElement(
                                                        'div',
                                                        { className: aa.control },
                                                        a().createElement(Kn, {
                                                            isDisabled: m.isDisabled.get(),
                                                            canCancel: m.canCancel.get(),
                                                            onCancel: () => c && c(),
                                                            onConfirm: () => l && l(),
                                                            confirmButtonRef: d,
                                                        }),
                                                    ),
                                            ),
                                        ),
                                    ),
                                );
                            },
                        ),
                        mu()(
                            ({ observableModel: e }) => ({
                                root: e.object(),
                                needRepairContent: e.object('needRepairContent'),
                                dealPanel: e.object('dealPanel'),
                                exchangePanel: e.object('exchangePanel'),
                                lacksMoney: e.object('lacksMoney'),
                                fromItem: e.object('exchangePanel.fromItem'),
                                toItem: e.object('exchangePanel.toItem'),
                                exchangeRate: e.object('exchangePanel.exchangeRate'),
                                discount: e.object('exchangePanel.exchangeRate.discount'),
                                discountRate: e.object('exchangePanel.exchangeRate.discount.exchangeRate'),
                            }),
                            ({ externalModel: e }) => ({
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'dealPanel.onAutoRenewalChanged',
                                ),
                            }),
                        )),
                    la = (sa[0], sa[1]),
                    ca = 'ExchangeDialogFooter_base_45',
                    _a = 'ExchangeDialogFooter_exchange_11',
                    ma = 'ExchangeDialogFooter_renewal_e2',
                    da = (0, d.Pi)(({ goldToChange: e, setGoldToChange: u, exchangeType: t = Ea.Basic }) => {
                        const n = la();
                        return a().createElement(
                            'div',
                            { className: ca },
                            a().createElement(
                                'div',
                                { className: _a },
                                a().createElement(
                                    Fn,
                                    null,
                                    a().createElement(Dn, { goldToChange: e, setGoldToChange: u }),
                                ),
                            ),
                            t === Ea.Repair &&
                                a().createElement(
                                    Wn.Provider,
                                    { value: n },
                                    a().createElement(
                                        'div',
                                        { className: ma },
                                        a().createElement(zn, {
                                            renewType: ra.Repair,
                                            label: R.strings.tank_setup.dialogs.needRepair.autoRepair(),
                                        }),
                                    ),
                                ),
                        );
                    });
                let Ea;
                !(function (e) {
                    (e.Basic = 'basic'), (e.Repair = 'repair'), (e.Upgrade = 'upgrade');
                })(Ea || (Ea = {}));
                const Aa = R.strings.tank_setup.dialogs,
                    Fa = (0, d.Pi)(
                        ({
                            title: e,
                            titleBinding: u,
                            name: t,
                            actionType: r,
                            withInfo: i = !0,
                            type: o = Ea.Basic,
                            withRollback: s = !1,
                            disabledAcceptTooltipText: l = R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                        }) => {
                            const c = (0, n.useState)(0),
                                _ = c[0],
                                m = c[1],
                                d = ke().model,
                                A = d.root.get().exchangeState,
                                g = d.lacksMoney.get(),
                                h = d.toItem.get(),
                                C = A === F;
                            return (
                                (0, n.useLayoutEffect)(
                                    () =>
                                        (0, D.EH)(() => {
                                            m(d.fromItem.get().value);
                                        }),
                                    [d],
                                ),
                                a().createElement(Se, {
                                    parentId: 'exchange-dialog',
                                    content: a().createElement(gt, {
                                        title: e,
                                        titleBinding: u,
                                        name: t,
                                        exchangeState: A,
                                        items: i && a().createElement($e, null),
                                        actionType: r,
                                        description: i && a().createElement(ze, null),
                                        exchangeType: o,
                                    }),
                                    footer:
                                        C &&
                                        a().createElement(da, { goldToChange: _, setGoldToChange: m, exchangeType: o }),
                                    showPayInfo: !0,
                                    buttonAccept: Object.assign({}, Ie, {
                                        type: E.main,
                                        disabled: !C || g.value > h.value,
                                    }),
                                    buttonCancel: Ne,
                                    buttonAcceptText:
                                        o === Ea.Upgrade ? Aa.exchangeToUpgrade.confirm() : Aa.goldExchange.confirm(),
                                    buttonCancelText: s
                                        ? Aa.confirm.cancel.withRollback()
                                        : R.strings.dialogs.common.cancel(),
                                    disabledAcceptTooltipText: l,
                                    isShowTooltip: A !== p,
                                })
                            );
                        },
                    );
                function pa(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const Da = mu()(({ observableModel: e }) => {
                        const u = ((e) => {
                                const u = {
                                        root: e.object(),
                                        exchangePanel: e.object('exchangePanel'),
                                        fromItem: e.object('exchangePanel.fromItem'),
                                        toItem: e.object('exchangePanel.toItem'),
                                        exchangeRate: e.object('exchangePanel.exchangeRate'),
                                        discount: e.object('exchangePanel.exchangeRate.discount'),
                                        discountRate: e.object('exchangePanel.exchangeRate.discount.exchangeRate'),
                                        lacksMoney: e.object('lacksMoney'),
                                        mainContent: e.object('mainContent'),
                                        confirmedItems: e.array('mainContent.confirmedItems'),
                                        lacksItem: e.array('mainContent.lacksItem'),
                                        needRepairContent: e.object('needRepairContent'),
                                    },
                                    t = (0, En.Om)(
                                        (e) => {
                                            const t = pa(u.confirmedItems.get(), e);
                                            if (!t) throw Error(`No confirmed item found with index: ${e}`);
                                            return Object.assign({}, t);
                                        },
                                        { equals: su },
                                    ),
                                    n = (0, En.Om)(() => u.confirmedItems.get().length),
                                    a = (0, En.Om)(() => u.lacksItem.get().length),
                                    r = (0, En.Om)(
                                        () => {
                                            const e = t(0);
                                            return (e && pa(e.demountPrice.price, 0)) || null;
                                        },
                                        { equals: su },
                                    );
                                return {
                                    model: u,
                                    computes: {
                                        confirmedItemsLength: n,
                                        lacksItemsLength: a,
                                        confirmedPrice: r,
                                        confirmedItem: t,
                                    },
                                };
                            })(e),
                            t = u.model,
                            n = u.computes;
                        return Object.assign({}, t, { computes: n });
                    }, ou),
                    ga = Da[0],
                    ha = Da[1],
                    Ca = R.strings.tank_setup.dialogs.exchangeToUpgrade,
                    Ba = (0, d.Pi)(() => {
                        var e;
                        const u = ha(),
                            t = u.model,
                            n = t.computes.confirmedItemsLength() > 1;
                        return (
                            m(),
                            a().createElement(
                                Pe.Provider,
                                { value: u },
                                a().createElement(Fa, {
                                    title: n ? Ca.item.title() : Ca.items.title(),
                                    name: null == (e = t.computes.confirmedItem(0)) ? void 0 : e.name,
                                    type: Ea.Upgrade,
                                    disabledAcceptTooltipText: null,
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    i().render(
                        a().createElement(ga, null, a().createElement(Ba, null)),
                        document.getElementById('root'),
                    );
                });
            },
            8460: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], r = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
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
        (__webpack_require__.j = 993),
        (() => {
            var e = { 993: 0, 745: 0, 653: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(1385));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
