(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                n.r(t),
                    n.d(t, { mouse: () => d, off: () => c, on: () => s, onResize: () => o, onScaleUpdated: () => a });
                var r = n(2472),
                    i = n(1176);
                const o = (0, r.E)('clientResized'),
                    a = (0, r.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    c = (e, t) => engine.off(e, t),
                    _ = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, i.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, i.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, i.R)(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const o = `mouse${t}`,
                                        a = _[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, s),
                                        r(),
                                        () => {
                                            i &&
                                                (a(),
                                                window.removeEventListener(o, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (i = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
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
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => o,
                        graphicsQuality: () => s,
                        playSound: () => i.G,
                        setRTPC: () => i.E,
                    });
                var r = n(527),
                    i = n(2493);
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            2493: (e, t, n) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function i(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => i, G: () => r });
            },
            2472: (e, t, n) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => r });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => o });
                var r = n(5959),
                    i = n(514);
                const o = { view: n(7641), client: r, sound: i.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => a });
                var r = n(5959);
                const i = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    o = Object.keys(i).reduce((e, t) => ((e[t] = () => (0, r.playSound)(i[t])), e), {}),
                    a = { play: Object.assign({}, o, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, t, n) => {
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function i(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => i, getTextureUrl: () => r });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => i });
                var r = n(2472);
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
            7641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => i.W,
                        displayStatusIs: () => P,
                        events: () => o.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => O,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => _,
                        getDisplayStatus: () => T,
                        getScale: () => h,
                        getSize: () => u,
                        getViewGlobalPosition: () => w,
                        isEventHandled: () => y,
                        isFocused: () => b,
                        pxToRem: () => p,
                        remToPx: () => m,
                        resize: () => v,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => l,
                        whenTutorialReady: () => R,
                    });
                var r = n(3722),
                    i = n(6112),
                    o = n(6538),
                    a = n(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function _(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function w(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: m(t.x), y: m(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function m(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function y() {
                    return viewEnv.isEventHandled();
                }
                function O() {
                    viewEnv.forceTriggerMouseMove();
                }
                function T() {
                    return viewEnv.getShowingStatus();
                }
                const P = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
                        {},
                    ),
                    k = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => _ });
                const r = ['args'];
                const i = 2,
                    o = 16,
                    a = 32,
                    s = 64,
                    c = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                    return i;
                                })(t, r);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((i = o),
                                              Object.entries(i).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    _ = {
                        close(e) {
                            c('popover' === e ? i : a);
                        },
                        minimize() {
                            c(s);
                        },
                        move(e) {
                            c(o, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
                let r, i;
                n.d(t, { n: () => r }),
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
            1358: (e, t, n) => {
                n.d(t, { Z: () => o });
                var r = n(3138);
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
                    addCallback(e, t, n = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = r.O.view.addModelObserver(e, n, i);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(o) : (this._views[n] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const r = this._callbacks[n];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                i.__instance = void 0;
                const o = i;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7491);
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
            7491: (e, t, n) => {
                n.d(t, { Sw: () => o.Z, ry: () => c.ry });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    n();
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
                        const n = e,
                            r = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== r)),
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
                var o = n(1358);
                var a = n(8613),
                    s = n(4251),
                    c = n(8072),
                    _ = n(7572);
                const d = i.instance,
                    l = {
                        DataTracker: o.Z,
                        ViewModel: _.Z,
                        ViewEventType: s.B0,
                        NumberFormatType: s.B3,
                        RealFormatType: s.Gr,
                        TimeFormatType: s.lf,
                        DateFormatType: s.kH,
                        makeGlobalBoundingBox: c.Kv,
                        sendMoveEvent: c.wv,
                        sendCloseEvent: c.Sy,
                        sendClosePopOverEvent: c.SW,
                        sendShowContextMenuEvent: c.uk,
                        sendShowPopOverEvent: c.P3,
                        addEscapeListener: c.VM,
                        closeOnEsc: c.SU,
                        handleViewEvent: c.c9,
                        onBindingsReady: c.ry,
                        onLayoutReady: c.Eu,
                        isTooltipShown: c.KE,
                        isContextMenuShown: c.uM,
                        isPopOverShown: c.wU,
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const i = Object.prototype.toString.call(t[r]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < i.length; t++) n[r].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: d,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = l;
            },
            8613: (e, t, n) => {
                n.d(t, { Z5: () => r, cy: () => i });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            4251: (e, t, n) => {
                let r;
                n.d(t, { B0: () => r, B3: () => i, Gr: () => o, kH: () => s, lf: () => a }),
                    (function (e) {
                        (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                            (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                            (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                            (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                            (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                            (e[(e.MOVE = 16)] = 'MOVE'),
                            (e[(e.CLOSE = 32)] = 'CLOSE'),
                            (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                    })(r || (r = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    a = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    s = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            8072: (e, t, n) => {
                n.d(t, {
                    Eu: () => d,
                    KE: () => p,
                    Kv: () => c,
                    P3: () => h,
                    SU: () => g,
                    SW: () => w,
                    Sy: () => v,
                    VM: () => y,
                    c9: () => l,
                    ry: () => _,
                    uM: () => m,
                    uk: () => E,
                    wU: () => f,
                    wv: () => u,
                });
                var r = n(5521),
                    i = n(3138),
                    o = n(4251);
                const a = ['args'];
                function s(e, t, n, r, i, o, a) {
                    try {
                        var s = e[o](a),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(r, i);
                }
                const c = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    _ = (function () {
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
                                        n = arguments;
                                    return new Promise(function (r, i) {
                                        var o = e.apply(t, n);
                                        function a(e) {
                                            s(o, r, i, a, c, 'next', e);
                                        }
                                        function c(e) {
                                            s(o, r, i, a, c, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    d = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                    return i;
                                })(t, a);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    u = (e) => l(o.B0.MOVE, { isMouseEvent: !0, on: e }),
                    v = () => l(o.B0.CLOSE),
                    w = () => l(o.B0.POP_OVER, { on: !1 }),
                    E = (e, t, n = 0) => {
                        l(o.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                    },
                    h = (e, t, n, r, a = R.invalid('resId'), s) => {
                        const _ = i.O.view.getViewGlobalPosition(),
                            d = n.getBoundingClientRect(),
                            u = d.x,
                            v = d.y,
                            w = d.width,
                            E = d.height,
                            h = {
                                x: i.O.view.pxToRem(u) + _.x,
                                y: i.O.view.pxToRem(v) + _.y,
                                width: i.O.view.pxToRem(w),
                                height: i.O.view.pxToRem(E),
                            };
                        l(o.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: r || R.invalid('resId'),
                            targetID: a,
                            direction: t,
                            bbox: c(h),
                            on: !0,
                            args: s,
                        });
                    },
                    p = () => viewEnv.isWindowShownByViewEvent(o.B0.TOOLTIP),
                    m = () => viewEnv.isWindowShownByViewEvent(o.B0.CONTEXT_MENU),
                    f = () => viewEnv.isWindowShownByViewEvent(o.B0.POP_OVER),
                    b = (e, t) => {
                        e.keyCode === r.n.ESCAPE && t();
                    },
                    g = (e) => {
                        b(e, v);
                    },
                    y = (e) => {
                        const t = (t) => b(t, e);
                        return window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t);
                    };
            },
            6111: (e, t, n) => {
                var r = n(6179),
                    i = n.n(r),
                    o = n(493),
                    a = n.n(o),
                    s = n(6483),
                    c = n.n(s),
                    _ = n(3138);
                function d() {
                    const e = (0, r.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, r.useEffect)(() => t, []),
                        (0, r.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const l = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    u = ['children', 'className', 'theme'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const w = i().forwardRef(function (e, t) {
                        let n = e.children,
                            o = e.className,
                            a = e.theme,
                            s = void 0 === a ? 'default' : a,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, u);
                        const E = d(),
                            h = i().useRef(null);
                        var p;
                        return (
                            (p = () => {
                                E.run(() => {
                                    const e = h.current;
                                    if (!e) return;
                                    const t = e.scrollWidth,
                                        n = e.scrollHeight;
                                    _.O.view.resize(t, n);
                                    const r = window.getComputedStyle(e);
                                    _.O.view.setSidePaddingsRem({
                                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, r.useEffect)(p, []),
                            i().createElement(
                                'div',
                                v({}, w, {
                                    className: c()(l.base, l[`base__theme-${s}`], o),
                                    ref: function (e) {
                                        (h.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                    },
                                }),
                                i().createElement('div', { className: l.decorator }, n),
                            )
                        );
                    }),
                    E = (e = 1) => {
                        const t = new Error().stack;
                        let n,
                            r = R.invalid('resId');
                        return (
                            t &&
                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== n &&
                                    window.subViews[n] &&
                                    (r = window.subViews[n].id)),
                            { caller: n, stack: t, resId: r }
                        );
                    },
                    h = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    p = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    };
                var m = n(7491);
                const f = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    b = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    g = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const r = h(`${e}.${n}`, window);
                                return f(r) ? t(e, n, r) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    y = (e) => {
                        const t = ((e) => {
                                const t = E(),
                                    n = t.caller,
                                    r = t.resId,
                                    i = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: i, modelPath: b(i, e || ''), resId: r };
                            })(),
                            n = t.modelPrefix,
                            r = e.split('.');
                        if (r.length > 0) {
                            const e = [r[0]];
                            return (
                                r.reduce((t, r) => {
                                    const i = h(b(n, `${t}.${r}`), window);
                                    return f(i) ? (e.push(i.id), `${t}.${r}.value`) : (e.push(r), `${t}.${r}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    O = m.Sw.instance;
                let T;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(T || (T = {}));
                const P = (e = 'model', t = T.Deep) => {
                        const n = (0, r.useState)(0),
                            i = (n[0], n[1]),
                            o = (0, r.useMemo)(() => E(), []),
                            a = o.caller,
                            s = o.resId,
                            c = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== a ? `subViews.${a}.${e}` : e),
                                [a, e],
                            ),
                            _ = (0, r.useState)(() =>
                                ((e) => {
                                    const t = h(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return f(t) ? t.value : t;
                                })(g(c)),
                            ),
                            d = _[0],
                            l = _[1],
                            u = (0, r.useRef)(-1);
                        return (
                            p(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? T.Deep : T.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== T.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === T.Deep
                                                ? (e === d && i((e) => e + 1), l(e))
                                                : l(Object.assign([], e));
                                        },
                                        r = y(e);
                                    u.current = O.addCallback(r, n, s, t === T.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (t !== T.None)
                                    return () => {
                                        O.removeCallback(u.current, s);
                                    };
                            }, [s, t]),
                            d
                        );
                    },
                    k = 'Content_base_12',
                    S = 'Content_base__description_7a',
                    C = 'Content_base__info_48',
                    M = 'Content_title_4f',
                    L = 'Content_title__description_c5',
                    N = 'Content_title__info_0a',
                    x = 'Content_description_1a',
                    A = 'Content_infoWrapper_78',
                    D = 'Content_divider_3f',
                    F = 'Content_icon_98',
                    U = 'Content_text_a4',
                    V = () => {
                        const e = P('model', T.None),
                            t = e.title,
                            n = e.description,
                            r = e.info,
                            o = c()(k, n && S, r && C),
                            a = c()(M, n && L, r && N);
                        return i().createElement(
                            'div',
                            { className: o },
                            i().createElement('div', { className: a }, t),
                            n && i().createElement('div', { className: x }, n),
                            r &&
                                i().createElement(
                                    'div',
                                    { className: A },
                                    i().createElement('div', { className: D }),
                                    i().createElement('div', { className: F }),
                                    i().createElement('div', { className: U }, r),
                                ),
                        );
                    },
                    B = () => i().createElement(w, null, i().createElement(V, null));
                engine.whenReady.then(() => {
                    a().render(i().createElement(B, null), document.getElementById('root'));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var i = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, r] = deferred[c], o = !0, a = 0; a < t.length; a++)
                        (!1 & r || i >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((o = !1), r < i && (i = r));
                    if (o) {
                        deferred.splice(c--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > r; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, r];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (__webpack_require__.j = 793),
        (() => {
            var e = { 793: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        i,
                        [o, a, s] = n,
                        c = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (s) var _ = s(__webpack_require__);
                    }
                    for (t && t(n); c < o.length; c++)
                        (i = o[c]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(_);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [107], () => __webpack_require__(6111));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
