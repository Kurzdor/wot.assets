(() => {
    var __webpack_modules__ = {
            373: (u, e, t) => {
                'use strict';
                t.d(e, { i: () => E });
                var r = t(56),
                    a = t(202),
                    n = t.n(a);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    E = (u) => {
                        let e = u.children,
                            t = u.body,
                            E = u.header,
                            l = u.note,
                            A = u.alert,
                            F = u.args,
                            D = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, i);
                        const d = (0, a.useMemo)(() => {
                            const u = Object.assign({}, F, { body: t, header: E, note: l, alert: A });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [A, t, E, l, F]);
                        return n().createElement(
                            r.u,
                            o(
                                {
                                    contentId:
                                        ((c = null == F ? void 0 : F.hasHtmlContent),
                                        c ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                D,
                            ),
                            e,
                        );
                        var c;
                    };
            },
            56: (u, e, t) => {
                'use strict';
                t.d(e, { u: () => E });
                var r = t(902),
                    a = t(179),
                    n = t(202);
                const i = [
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
                function o(u) {
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
                const s = (u, e, t = {}, r = 0) => {
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
                    E = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            E = u.onMouseEnter,
                            l = u.onMouseLeave,
                            A = u.onMouseDown,
                            F = u.onClick,
                            D = u.ignoreShowDelay,
                            d = void 0 !== D && D,
                            c = u.ignoreMouseClick,
                            B = void 0 !== c && c,
                            C = u.decoratorId,
                            m = void 0 === C ? 0 : C,
                            _ = u.isEnabled,
                            g = void 0 === _ || _,
                            h = u.targetId,
                            b = void 0 === h ? 0 : h,
                            p = u.onShow,
                            w = u.onHide,
                            f = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, i);
                        const v = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            x = (0, n.useMemo)(() => b || (0, r.F)().resId, [b]),
                            S = (0, n.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (s(t, m, { isMouseEvent: !0, on: !0, arguments: o(a) }, x),
                                    p && p(),
                                    (v.current.isVisible = !0));
                            }, [t, m, a, x, p]),
                            y = (0, n.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const u = v.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (v.current.timeoutId = 0)),
                                        s(t, m, { on: !1 }, x),
                                        v.current.isVisible && w && w(),
                                        (v.current.isVisible = !1);
                                }
                            }, [t, m, x, w]),
                            L = (0, n.useCallback)((u) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(v.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const u = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', L, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', L, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === g && y();
                            }, [g, y]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            );
                        return g
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(S, d ? 100 : 400)),
                                                      E && E(u),
                                                      T && T(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              y(), null == l || l(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === B && y(), null == F || F(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === B && y(), null == A || A(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : e;
                        var T;
                    };
            },
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
            768: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => eu });
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => d, off: () => F, on: () => A, onResize: () => E, onScaleUpdated: () => l });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => r,
                        getMouseGlobalPosition: () => m,
                        getSize: () => C,
                        graphicsQuality: () => _,
                        playSound: () => c,
                        setRTPC: () => B,
                    });
                var n = {};
                t.r(n), t.d(n, { getBgUrl: () => w, getTextureUrl: () => p });
                var i = {};
                function o(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function s(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => P,
                        children: () => n,
                        displayStatus: () => f,
                        displayStatusIs: () => Q,
                        events: () => v,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => R,
                        getDisplayStatus: () => Z,
                        getScale: () => z,
                        getSize: () => H,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => Y,
                        isFocused: () => q,
                        pxToRem: () => G,
                        remToPx: () => j,
                        resize: () => N,
                        sendEvent: () => M,
                        setAnimateWindow: () => V,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => k,
                        setSidePaddingsRem: () => W,
                        whenTutorialReady: () => uu,
                    });
                const E = o('clientResized'),
                    l = o('self.onScaleUpdated'),
                    A = (u, e) => engine.on(u, e),
                    F = (u, e) => engine.off(u, e),
                    D = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const d = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && s(!1);
                    }
                    function t() {
                        u.enabled && s(!0);
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
                            : s(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const n = `mouse${e}`,
                                        i = D[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, o),
                                        r(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(n, o),
                                                (u.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (u.enabled = !1), r();
                        },
                        enable() {
                            (u.enabled = !0), r();
                        },
                        enableOutside() {
                            u.enabled && s(!0);
                        },
                        disableOutside() {
                            u.enabled && s(!1);
                        },
                    });
                })();
                function c(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function B(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function C(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function m(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const _ = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(g).reduce((u, e) => ((u[e] = () => c(g[e])), u), {}),
                    b = { play: Object.assign({}, h, { sound: c }), setRTPC: B };
                function p(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function w(u, e, t) {
                    return `url(${p(u, e, t)})`;
                }
                const f = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    v = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    x = ['args'];
                const S = 2,
                    y = 16,
                    L = 32,
                    T = 64,
                    O = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(u);
                                    for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, x);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
                                          arguments:
                                              ((r = a),
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
                    M = {
                        close(u) {
                            O('popover' === u ? S : L);
                        },
                        minimize() {
                            O(T);
                        },
                        move(u) {
                            O(y, { isMouseEvent: !0, on: u });
                        },
                    };
                function P(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function k(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function R(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function I(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function W(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function H(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function N(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function U(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: j(e.x), y: j(e.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function G(u) {
                    return viewEnv.pxToRem(u);
                }
                function j(u) {
                    return viewEnv.remToPx(u);
                }
                function V(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const Q = Object.keys(f).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === f[e]), u), {}),
                    J = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    uu = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : v.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    eu = { view: i, client: a, sound: b };
            },
            902: (u, e, t) => {
                'use strict';
                t.d(e, { F: () => r });
                const r = (u = 1) => {
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
                };
            },
            521: (u, e, t) => {
                'use strict';
                let r, a;
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
                            (u[(u.KEY_9 = 57)] = 'KEY_9');
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
                    })(a || (a = {}));
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                var r = t(768);
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
                        const n = r.O.view.addModelObserver(u, t, a);
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
                a.__instance = void 0;
                const n = a;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(179);
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
            179: (u, e, t) => {
                'use strict';
                t.d(e, { B3: () => E, Z5: () => i, B0: () => s, ry: () => m });
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
                const a = r;
                var n = t(358);
                const i = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    o = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let s;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var D = t(521),
                    d = t(768);
                const c = ['args'];
                function B(u, e, t, r, a, n, i) {
                    try {
                        var o = u[n](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(r, a);
                }
                const C = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    m = (function () {
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
                                    return new Promise(function (r, a) {
                                        var n = u.apply(e, t);
                                        function i(u) {
                                            B(n, r, a, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            B(n, r, a, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    _ = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(u);
                                    for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, c);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
                                          arguments:
                                              ((r = a),
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
                    g = () => _(s.CLOSE),
                    h = (u, e) => {
                        u.keyCode === D.n.ESCAPE && e();
                    };
                var b = t(572);
                const p = a.instance,
                    w = {
                        DataTracker: n.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: l,
                        TimeFormatType: A,
                        DateFormatType: F,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (u) => _(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => _(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            _(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, a = R.invalid('resId'), n) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                E = o.x,
                                l = o.y,
                                A = o.width,
                                F = o.height,
                                D = {
                                    x: d.O.view.pxToRem(E) + i.x,
                                    y: d.O.view.pxToRem(l) + i.y,
                                    width: d.O.view.pxToRem(A),
                                    height: d.O.view.pxToRem(F),
                                };
                            _(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: C(D),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => h(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            h(u, g);
                        },
                        handleViewEvent: _,
                        onBindingsReady: m,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const a = Object.prototype.toString.call(e[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < a.length; e++) t[r].push({ value: u(a[e].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = w;
            },
            370: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => C });
                var r = t(483),
                    a = t.n(r),
                    n = t(373),
                    i = t(896),
                    o = t(202),
                    s = t.n(o),
                    E = t(375);
                const l = {
                        [E.U.ExtraLarge]: 'c_600x450',
                        [E.U.Large]: 'c_400x300',
                        [E.U.Medium]: 'c_170x124',
                        [E.U.SmallExtended]: 'c_115x84',
                        [E.U.Small]: 'c_72x72',
                        [E.U.ExtraSmall]: 'c_48x48',
                    },
                    A = {
                        [E.U.ExtraLarge]: 'c_77x176',
                        [E.U.Large]: 'c_53x120',
                        [E.U.Medium]: 'c_23x48',
                        [E.U.SmallExtended]: 'c_16x33',
                        [E.U.Small]: 'c_9x19',
                        [E.U.ExtraSmall]: 'c_6x12',
                    },
                    F = (u) => {
                        const e = u === E.U.MediumExtended ? E.U.Large : u;
                        return R.images.gui.maps.icons.prestige.emblem.$dyn(l[e]);
                    },
                    D = {
                        base: 'PrestigeProgressLabel_base_85',
                        letter: 'PrestigeProgressLabel_letter_e2',
                        base__extraSmall: 'PrestigeProgressLabel_base__extraSmall_06',
                        letter__s1: 'PrestigeProgressLabel_letter__s1_65',
                        base__small: 'PrestigeProgressLabel_base__small_72',
                        letter__s4: 'PrestigeProgressLabel_letter__s4_f4',
                        base__smallExtended: 'PrestigeProgressLabel_base__smallExtended_c9',
                        base__medium: 'PrestigeProgressLabel_base__medium_03',
                        base__mediumExtended: 'PrestigeProgressLabel_base__mediumExtended_9f',
                        base__large: 'PrestigeProgressLabel_base__large_d2',
                        base__extraLarge: 'PrestigeProgressLabel_base__extraLarge_34',
                    },
                    d = ({ label: u, type: e, size: t }) => {
                        const r = e === i.C.ENAMEL ? i.C.GOLD : e,
                            n = t === E.U.MediumExtended ? E.U.Large : t,
                            o = `R.images.gui.maps.icons.prestige.emblemFont.${A[n]}.${r}`;
                        return s().createElement(
                            'div',
                            { className: a()(D.base, D[`base__${t}`]) },
                            u
                                .split('')
                                .map((u, e) =>
                                    s().createElement('div', {
                                        key: e,
                                        className: a()(D.letter, D[`letter__s${u}`]),
                                        style: { backgroundImage: `url(${o}.c_${u})` },
                                    }),
                                ),
                        );
                    },
                    c = {
                        base: 'PrestigeProgressSymbol_base_f8',
                        base__extraSmall: 'PrestigeProgressSymbol_base__extraSmall_05',
                        base__small: 'PrestigeProgressSymbol_base__small_1c',
                        base__smallExtended: 'PrestigeProgressSymbol_base__smallExtended_e0',
                        base__medium: 'PrestigeProgressSymbol_base__medium_24',
                        base__mediumExtended: 'PrestigeProgressSymbol_base__mediumExtended_11',
                        base__large: 'PrestigeProgressSymbol_base__large_3c',
                        base__extraLarge: 'PrestigeProgressSymbol_base__extraLarge_a7',
                        icon: 'PrestigeProgressSymbol_icon_af',
                    },
                    B = R.strings.prestige.tooltip.eliteLevel,
                    C = ({ emblem: u, size: e, showLevel: t = !0, isTooltipEnabled: r = !1 }) => {
                        const o = ((u, e) => {
                            if (u.type === i.C.MAXIMUM) return F(e).$dyn(i.C.MAXIMUM);
                            if (u.type === i.C.UNDEFINED || u.grade < 1) return;
                            const t = u.grade <= 4 ? u.grade : 4;
                            return F(e).$dyn(u.type).$dyn(`c_${t}`);
                        })(u, e);
                        if (!o) return null;
                        const E = t && u.type !== i.C.MAXIMUM;
                        return s().createElement(
                            n.i,
                            { header: B.title(), body: B.body(), isEnabled: r },
                            s().createElement(
                                'div',
                                { className: a()(c.base, c[`base__${e}`]) },
                                s().createElement('div', {
                                    className: c.icon,
                                    style: { backgroundImage: `url(${o})` },
                                }),
                                E && s().createElement(d, { label: u.level.toString(), type: u.type, size: e }),
                            ),
                        );
                    };
            },
            375: (u, e, t) => {
                'use strict';
                let r;
                t.d(e, { U: () => r }),
                    (function (u) {
                        (u.ExtraLarge = 'extraLarge'),
                            (u.Large = 'large'),
                            (u.MediumExtended = 'mediumExtended'),
                            (u.Medium = 'medium'),
                            (u.SmallExtended = 'smallExtended'),
                            (u.Small = 'small'),
                            (u.ExtraSmall = 'extraSmall');
                    })(r || (r = {}));
            },
            162: (u, e, t) => {
                'use strict';
                var r = t(202),
                    a = t.n(r);
                const n = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var i = t(768);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function E(u, e, t) {
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
                        a = (function (u, e) {
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
                        n = Math.min(r, a);
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
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
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
                const l = i.O.client.getSize('rem'),
                    A = l.width,
                    F = l.height,
                    D = Object.assign({ width: A, height: F }, E(A, F, o)),
                    d = (0, r.createContext)(D),
                    c = ['children'];
                const B = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(u);
                            for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, c);
                    const a = (0, r.useContext)(d),
                        i = a.extraLarge,
                        o = a.large,
                        s = a.medium,
                        E = a.small,
                        l = a.extraSmall,
                        A = a.extraLargeWidth,
                        F = a.largeWidth,
                        D = a.mediumWidth,
                        B = a.smallWidth,
                        C = a.extraSmallWidth,
                        m = a.extraLargeHeight,
                        _ = a.largeHeight,
                        g = a.mediumHeight,
                        h = a.smallHeight,
                        b = a.extraSmallHeight,
                        p = { extraLarge: m, large: _, medium: g, small: h, extraSmall: b };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && o) return e;
                        if (t.medium && s) return e;
                        if (t.small && E) return e;
                        if (t.extraSmall && l) return e;
                    } else {
                        if (t.extraLargeWidth && A) return n(e, t, p);
                        if (t.largeWidth && F) return n(e, t, p);
                        if (t.mediumWidth && D) return n(e, t, p);
                        if (t.smallWidth && B) return n(e, t, p);
                        if (t.extraSmallWidth && C) return n(e, t, p);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && m) return e;
                            if (t.largeHeight && _) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && h) return e;
                            if (t.extraSmallHeight && b) return e;
                        }
                    }
                    return null;
                };
                B.defaultProps = {
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
                (0, r.memo)(B);
                const C = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    m = ({ children: u }) => {
                        const e = (0, r.useContext)(d),
                            t = (0, r.useState)(e),
                            n = t[0],
                            s = t[1],
                            l = (0, r.useCallback)((u, e) => {
                                const t = i.O.view.pxToRem(u),
                                    r = i.O.view.pxToRem(e);
                                s(Object.assign({ width: t, height: r }, E(t, r, o)));
                            }, []),
                            A = (0, r.useCallback)(() => {
                                const u = i.O.client.getSize('px');
                                l(u.width, u.height);
                            }, [l]);
                        C(() => {
                            i.O.client.events.on('clientResized', l), i.O.client.events.on('self.onScaleUpdated', A);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', l),
                                        i.O.client.events.off('self.onScaleUpdated', A);
                                },
                                [l, A],
                            );
                        const F = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return a().createElement(d.Provider, { value: F }, u);
                    };
                var _ = t(483),
                    g = t.n(_),
                    h = t(926),
                    b = t.n(h);
                let p, w, f;
                !(function (u) {
                    (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = o.small.width)] = 'Small'),
                        (u[(u.Medium = o.medium.width)] = 'Medium'),
                        (u[(u.Large = o.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(p || (p = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.width)] = 'Small'),
                            (u[(u.Medium = o.medium.width)] = 'Medium'),
                            (u[(u.Large = o.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.height)] = 'Small'),
                            (u[(u.Medium = o.medium.height)] = 'Medium'),
                            (u[(u.Large = o.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(f || (f = {}));
                const v = () => {
                        const u = (0, r.useContext)(d),
                            e = u.width,
                            t = u.height,
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return p.ExtraLarge;
                                    case u.large:
                                        return p.Large;
                                    case u.medium:
                                        return p.Medium;
                                    case u.small:
                                        return p.Small;
                                    case u.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(u),
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case u.largeWidth:
                                        return w.Large;
                                    case u.mediumWidth:
                                        return w.Medium;
                                    case u.smallWidth:
                                        return w.Small;
                                    case u.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return f.ExtraLarge;
                                    case u.largeHeight:
                                        return f.Large;
                                    case u.mediumHeight:
                                        return f.Medium;
                                    case u.smallHeight:
                                        return f.Small;
                                    case u.extraSmallHeight:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const y = {
                        [w.ExtraSmall]: '',
                        [w.Small]: b().SMALL_WIDTH,
                        [w.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [w.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [f.ExtraSmall]: '',
                        [f.Small]: b().SMALL_HEIGHT,
                        [f.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [f.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [p.ExtraSmall]: '',
                        [p.Small]: b().SMALL,
                        [p.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [p.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [p.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    O = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, x);
                        const n = v(),
                            i = n.mediaWidth,
                            o = n.mediaHeight,
                            s = n.mediaSize;
                        return a().createElement('div', S({ className: g()(t, y[i], L[o], T[s]) }, r), e);
                    },
                    M = ['children'];
                const P = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(u);
                            for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, M);
                    return a().createElement(m, null, a().createElement(O, t, e));
                };
                var k = t(493),
                    I = t.n(k);
                const W = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let H, N;
                !(function (u) {
                    (u.Small = 'small'), (u.Medium = 'medium'), (u.Default = 'medium');
                })(H || (H = {})),
                    (function (u) {
                        (u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing');
                    })(N || (N = {}));
                const U = ({ size: u = H.Default }) => {
                        const e = g()(W.background, W[`background__${u}`]);
                        return a().createElement('div', { className: e });
                    },
                    $ = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    z = ({ size: u }) => {
                        const e = g()($.base, $[`base__${u}`]);
                        return a().createElement('div', { className: e });
                    },
                    G = {
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
                    j = (0, r.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: r, isComplete: n, withoutBounce: i }) => {
                            const o = g()(
                                    G.base,
                                    G[`base__${u}`],
                                    t && G.base__disabled,
                                    n && G.base__finished,
                                    i && G.base__withoutBounce,
                                ),
                                s = !t && !n;
                            return a().createElement(
                                'div',
                                { className: o, style: r, ref: e },
                                a().createElement('div', { className: G.pattern }),
                                a().createElement('div', { className: G.gradient }),
                                s && a().createElement(z, { size: u }),
                            );
                        },
                    ),
                    V = ({ size: u, value: e, lineRef: t, disabled: n, onComplete: i }) => {
                        const o = (0, r.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            s = 100 === e;
                        return (
                            (0, r.useEffect)(() => {
                                s && i && i();
                            }, [s, i]),
                            a().createElement(j, { size: u, disabled: n, baseStyles: o, isComplete: s, lineRef: t })
                        );
                    },
                    q = (u, e) => {
                        let t;
                        const r = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(r);
                        };
                    };
                let K, Y;
                !(function (u) {
                    (u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End');
                })(K || (K = {})),
                    (function (u) {
                        (u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End');
                    })(Y || (Y = {}));
                const X = 'ProgressBarDeltaSimple_base_6c',
                    Z = 'ProgressBarDeltaSimple_delta_99',
                    Q = (0, r.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: i,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: E,
                        }) => {
                            const l = o < n,
                                A = (0, r.useState)(Y.Idle),
                                F = A[0],
                                D = A[1],
                                d = F === Y.In,
                                c = F === Y.End,
                                B = F === Y.Idle,
                                C = (0, r.useCallback)(
                                    (u) => {
                                        D(u), E && E(u);
                                    },
                                    [E],
                                );
                            (0, r.useEffect)(() => {
                                if (B && !t) {
                                    return q(() => {
                                        C(Y.In);
                                    }, e);
                                }
                            }, [C, t, B, e]),
                                (0, r.useEffect)(() => {
                                    if (d) {
                                        return q(() => {
                                            s && s(), C(Y.End);
                                        }, u + e);
                                    }
                                }, [C, d, s, e, u]);
                            const m = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, e, u],
                                ),
                                _ = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, e, u],
                                ),
                                g = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(n - o)}%`, left: `${l ? o : n}%` }),
                                    [n, l, o],
                                );
                            return c
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: X, style: g },
                                      a().createElement(
                                          'div',
                                          { style: B ? m : _, className: Z },
                                          a().createElement(z, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    J = (0, r.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onChangeAnimationState: E,
                            onEndAnimation: l,
                        }) => {
                            const A = (0, r.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, u],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(j, {
                                    size: e,
                                    lineRef: n,
                                    disabled: i,
                                    isComplete: o,
                                    baseStyles: A,
                                }),
                                t >= 0 &&
                                    a().createElement(Q, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: e,
                                        to: u,
                                        onChangeAnimationState: E,
                                        onEndAnimation: l,
                                    }),
                            );
                        },
                    ),
                    uu = 'ProgressBarDeltaGrow_base_7e',
                    eu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    tu = 'ProgressBarDeltaGrow_glow_68',
                    ru = (u) => (u ? { left: 0 } : { right: 0 }),
                    au = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    nu = (u) => ({ transitionDuration: `${u}ms` }),
                    iu = (0, r.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: i,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: E,
                            className: l,
                        }) => {
                            const A = o < n,
                                F = (0, r.useState)(K.Idle),
                                D = F[0],
                                d = F[1],
                                c = D === K.End,
                                B = D === K.Idle,
                                C = D === K.Grow,
                                m = D === K.Shrink,
                                _ = (0, r.useCallback)(
                                    (u) => {
                                        d(u), E && E(u);
                                    },
                                    [E],
                                ),
                                h = (0, r.useCallback)(
                                    (u, e) =>
                                        q(() => {
                                            _(u);
                                        }, e),
                                    [_],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return B
                                        ? h(K.Grow, e)
                                        : C
                                          ? h(K.Shrink, u)
                                          : m
                                            ? h(K.End, u)
                                            : void (c && s && s());
                            }, [h, t, c, C, B, m, s, e, u]);
                            const b = (0, r.useMemo)(() => Object.assign({ width: '100%' }, nu(u), ru(A)), [A, u]),
                                p = (0, r.useMemo)(() => Object.assign({ width: '0%' }, nu(u), ru(A)), [A, u]),
                                w = (0, r.useMemo)(() => Object.assign({ width: '0%' }, au(A, n), nu(u)), [n, A, u]),
                                f = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - n)}%` }, au(A, n), nu(u)),
                                    [n, A, o, u],
                                );
                            if (c) return null;
                            const v = g()(uu, l, A && 0 === o && eu);
                            return a().createElement(
                                'div',
                                { style: B ? w : f, className: v },
                                a().createElement(
                                    'div',
                                    { style: m ? p : b, className: tu },
                                    a().createElement(z, { size: i }),
                                ),
                            );
                        },
                    ),
                    ou = (0, r.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onEndAnimation: E,
                            onChangeAnimationState: l,
                        }) => {
                            const A = u < t,
                                F = (0, r.useState)(!1),
                                D = F[0],
                                d = F[1],
                                c = (0, r.useCallback)(
                                    (u) => {
                                        u === K.Shrink && d(!0), l && l(u);
                                    },
                                    [l],
                                ),
                                B = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                C = (0, r.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, u],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(j, {
                                    size: e,
                                    lineRef: n,
                                    disabled: i,
                                    isComplete: o,
                                    withoutBounce: A && 0 === u,
                                    baseStyles: D ? C : B,
                                }),
                                t >= 0 &&
                                    a().createElement(iu, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: c,
                                        freezed: s.freezed,
                                        onEndAnimation: E,
                                        from: t,
                                        size: e,
                                        to: u,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    su = ['onComplete', 'onEndAnimation'];
                function Eu() {
                    return (
                        (Eu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Eu.apply(this, arguments)
                    );
                }
                const lu = (0, r.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, su);
                        const i = (0, r.useState)(!1),
                            o = i[0],
                            s = i[1],
                            E = (0, r.useCallback)(() => {
                                const u = 100 === n.to;
                                u !== o && s(u), u && e && e(), t && t();
                            }, [o, e, t, n.to]);
                        switch (n.animationSettings.type) {
                            case N.Simple:
                                return a().createElement(J, Eu({}, n, { onEndAnimation: E, isComplete: o }));
                            case N.Growing:
                                return a().createElement(ou, Eu({}, n, { onEndAnimation: E, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Au = ['onEndAnimation'];
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                const Du = (0, r.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(u);
                            for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, Au);
                    const n = (0, r.useRef)({}),
                        i = (0, r.useCallback)(() => {
                            (n.current.from = void 0), e && e();
                        }, [e]),
                        o = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = o),
                        a().createElement(lu, Fu({}, t, { onEndAnimation: i, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const cu = (0, r.memo)(
                        ({
                            size: u,
                            value: e,
                            lineRef: t,
                            disabled: r,
                            deltaFrom: n,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: s,
                            onComplete: E,
                        }) => {
                            if (n === e)
                                return a().createElement(V, {
                                    key: `${n}-${e}`,
                                    size: u,
                                    value: e,
                                    lineRef: t,
                                    disabled: r,
                                    onComplete: E,
                                });
                            const l = {
                                from: n,
                                to: e,
                                size: u,
                                lineRef: t,
                                disabled: r,
                                animationSettings: i,
                                onComplete: E,
                                onEndAnimation: o,
                                onChangeAnimationState: s,
                            };
                            return i.withStack
                                ? a().createElement(Du, l)
                                : a().createElement(lu, du({ key: `${n}-${e}` }, l));
                        },
                    ),
                    Bu = (u) => ({
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
                    Cu = (u, e, t) => (t < u ? u : t > e ? e : t),
                    mu = (u, e, t) => {
                        if ('number' == typeof t) {
                            return (Cu(0, e, t) / e) * 100;
                        }
                        return u;
                    },
                    _u = {
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
                    gu = {
                        freezed: !1,
                        withStack: !1,
                        type: N.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    hu = (0, r.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = _u,
                            size: t = H.Default,
                            animationSettings: n = gu,
                            disabled: i = !1,
                            withoutBackground: o = !1,
                            value: s,
                            deltaFrom: E,
                            lineRef: l,
                            onChangeAnimationState: A,
                            onEndAnimation: F,
                            onComplete: D,
                        }) => {
                            const d = ((u, e, t) =>
                                (0, r.useMemo)(() => {
                                    const r = (Cu(0, e, u) / e) * 100;
                                    return { value: r, deltaFrom: mu(r, e, t) };
                                }, [t, e, u]))(s, u, E);
                            return a().createElement(
                                'div',
                                { className: g()(W.base, W[`base__${t}`]), style: Bu(e) },
                                !o && a().createElement(U, { size: t }),
                                a().createElement(cu, {
                                    size: t,
                                    lineRef: l,
                                    disabled: i,
                                    value: d.value,
                                    deltaFrom: d.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: F,
                                    onChangeAnimationState: A,
                                    onComplete: D,
                                }),
                            );
                        },
                    );
                var bu = t(373),
                    pu = t(896),
                    wu = t(179);
                function fu(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const vu = {
                    playHighlight() {
                        fu('highlight');
                    },
                    playClick() {
                        fu('play');
                    },
                    playYes() {
                        fu('yes1');
                    },
                };
                var xu = t(403),
                    Su = t(281);
                let yu;
                function Lu(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(yu || (yu = {}));
                const Tu = (u) => u.replace(/&nbsp;/g, ' '),
                    Ou = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Mu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Pu = (u, e, t = yu.left) => u.split(e).reduce(t === yu.left ? Ou : Mu, []),
                    ku = (() => {
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
                    Ru = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Iu = (u, e = yu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Ru.includes(t)) return ku(u);
                        if ('ja' === t) {
                            return (0, Su.D4)()
                                .parse(u)
                                .map((u) => Tu(u));
                        }
                        return ((u, e = yu.left) => {
                            let t = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = Tu(u);
                            return Pu(a, /( )/, e).forEach((u) => (t = t.concat(Pu(u, r, yu.left)))), t;
                        })(u, e);
                    },
                    Wu = 'FormatText_base_d0',
                    Hu = ({ binding: u, text: e = '', classMix: t, alignment: n = yu.left, formatWithBrackets: i }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const o = i && u ? Lu(e, u) : e;
                        return a().createElement(
                            r.Fragment,
                            null,
                            o.split('\n').map((e, i) =>
                                a().createElement(
                                    'div',
                                    { className: g()(Wu, t), key: `${e}-${i}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : Iu(u, e))))(
                                        e,
                                        n,
                                        u,
                                    ).map((u, e) => a().createElement(r.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    Nu = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    Uu = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    $u = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    zu = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Gu = (0, r.memo)(({ text: u, binding: e, classMix: t }) => {
                        const n = (0, r.useCallback)((u) => ({ color: `#${u}` }), []),
                            i = (0, r.useMemo)(() => e || {}, [e]);
                        let o = Uu.exec(u),
                            s = u,
                            E = 0;
                        for (; o; ) {
                            const t = o[0],
                                r = $u.exec(t),
                                l = zu.exec(t),
                                A = o[1];
                            if (r && l) {
                                const u = r[0],
                                    o = u + E++ + u;
                                (s = s.replace(t, `%(${o})`)),
                                    (i[o] = Nu[u]
                                        ? a().createElement(
                                              'span',
                                              { className: Nu[u] },
                                              a().createElement(Hu, { text: A, binding: e }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: n(u) },
                                              a().createElement(Hu, { text: A, binding: e }),
                                          ));
                            }
                            o = Uu.exec(u);
                        }
                        return a().createElement(Hu, { text: s, classMix: t, binding: i });
                    });
                var ju = t(370),
                    Vu = t(375);
                function qu() {
                    return !1;
                }
                console.log;
                var Ku = t(174);
                function Yu(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return Xu(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Xu(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var r = 0;
                        return function () {
                            return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Xu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const Zu = (u) => (0 === u ? window : window.subViews.get(u));
                const Qu = ((u, e) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: o, children: s, mocks: E }) {
                                const l = (0, r.useRef)([]),
                                    A = (t, r, a) => {
                                        var n;
                                        const o = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = Zu,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function n(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? a.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = a.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const o = (u) => {
                                                    const a = t(e),
                                                        n = r.split('.').reduce((u, e) => u[e], a);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? n
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const s = 'string' == typeof n ? `${r}.${n}` : r,
                                                            E = i.O.view.addModelObserver(s, e, !0);
                                                        return a.set(E, t), u && t(o(n)), E;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (u, e) => {
                                                        const t = o(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = o(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = Yu(a.keys()); !(u = t()).done; ) n(u.value, e);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(r),
                                            s =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            E = (u) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(u)) : s.readByPath(u),
                                            A = (u) => l.current.push(u),
                                            F = u({
                                                mode: t,
                                                readByPath: E,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const r = null != e ? e : E(u),
                                                            a = Ku.LO.box(r, { equals: qu });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Ku.aD)((u) => a.set(u)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const r = null != e ? e : E(u),
                                                            a = Ku.LO.box(r, { equals: qu });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Ku.aD)((u) => a.set(u)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const r = E(e);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (u, e) => ((u[e] = Ku.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Ku.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                a[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = u,
                                                                n = Object.entries(a),
                                                                i = n.reduce(
                                                                    (u, [e, t]) => ((u[t] = Ku.LO.box(r[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Ku.aD)((u) => {
                                                                            n.forEach(([e, t]) => {
                                                                                i[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: A,
                                            }),
                                            D = { mode: t, model: F, externalModel: s, cleanup: A };
                                        return {
                                            model: F,
                                            controls: 'mocks' === t && a ? a.controls(D) : e(D),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    F = (0, r.useRef)(!1),
                                    D = (0, r.useState)(n),
                                    d = D[0],
                                    c = D[1],
                                    B = (0, r.useState)(() => A(n, o, E)),
                                    C = B[0],
                                    m = B[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        F.current ? m(A(d, o, E)) : (F.current = !0);
                                    }, [E, d, o]),
                                    (0, r.useEffect)(() => {
                                        c(n);
                                    }, [n]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            C.externalModel.dispose(), l.current.forEach((u) => u());
                                        },
                                        [C],
                                    ),
                                    a().createElement(t.Provider, { value: C }, s)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) =>
                            Object.assign({}, u.primitives(['currentProgress', 'maxProgress']), {
                                emblem: u.object('emblem'),
                            }),
                        ({ externalModel: u }) => ({ showInfo: u.createCallbackNoArgs('onShowInfo') }),
                    ),
                    Ju = Qu[0],
                    ue = Qu[1],
                    ee = {
                        base: 'App_base_78',
                        emblem: 'App_emblem_fc',
                        infoBlock: 'App_infoBlock_88',
                        title: 'App_title_64',
                        progress: 'App_progress_bd',
                        star: 'App_star_01',
                        description: 'App_description_9c',
                        progressBarWrapper: 'App_progressBarWrapper_90',
                    },
                    te = R.strings.prestige.entryPoint,
                    re = R.strings.prestige.tooltip.eliteLevel,
                    ae = (0, xu.Pi)(() => {
                        const u = ue(),
                            e = u.model,
                            t = u.controls,
                            r = v().mediaSize <= p.Small ? Vu.U.ExtraSmall : Vu.U.Small,
                            n = e.currentProgress.get(),
                            i = e.maxProgress.get(),
                            o = e.emblem.get(),
                            s = o.type === pu.C.MAXIMUM,
                            E = s ? te.max.header() : te.header();
                        return a().createElement(
                            bu.i,
                            { header: re.title(), body: re.body() },
                            a().createElement(
                                'div',
                                {
                                    className: ee.base,
                                    onClick: () => {
                                        t.showInfo(), vu.playClick();
                                    },
                                    onMouseEnter: () => {
                                        vu.playHighlight();
                                    },
                                },
                                a().createElement(
                                    'div',
                                    { className: ee.emblem },
                                    a().createElement(ju.U, { emblem: o, size: r }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: ee.infoBlock },
                                    a().createElement('div', { className: g()(ee.title, s && ee.title__maxLevel) }, E),
                                    s
                                        ? a().createElement(
                                              'div',
                                              { className: g()(ee.description, ee.description__maxLevel) },
                                              te.max.description(),
                                          )
                                        : a().createElement(
                                              a().Fragment,
                                              null,
                                              a().createElement(
                                                  'div',
                                                  { className: ee.progress },
                                                  a().createElement('div', { className: ee.star }),
                                                  a().createElement(
                                                      'div',
                                                      { className: ee.description },
                                                      a().createElement(Gu, {
                                                          text: te.steps(),
                                                          binding: {
                                                              done: wu.Z5.getNumberFormat(n, wu.B3.INTEGRAL),
                                                              total: wu.Z5.getNumberFormat(i, wu.B3.INTEGRAL),
                                                          },
                                                      }),
                                                  ),
                                              ),
                                              a().createElement(
                                                  'div',
                                                  { className: ee.progressBarWrapper },
                                                  a().createElement(hu, { size: H.Small, value: n, maxValue: i }),
                                              ),
                                          ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        a().createElement(Ju, null, a().createElement(P, null, a().createElement(ae, null))),
                        document.getElementById('root'),
                    );
                });
            },
            896: (u, e, t) => {
                'use strict';
                let r;
                t.d(e, { C: () => r }),
                    (function (u) {
                        (u.IRON = 'iron'),
                            (u.BRONZE = 'bronze'),
                            (u.SILVER = 'silver'),
                            (u.GOLD = 'gold'),
                            (u.ENAMEL = 'enamel'),
                            (u.MAXIMUM = 'prestige'),
                            (u.UNDEFINED = 'undefined');
                    })(r || (r = {}));
            },
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
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, r] = deferred[s], n = !0, i = 0; i < e.length; i++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((n = !1), r < a && (a = r));
                    if (n) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, r];
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
        (__webpack_require__.j = 467),
        (() => {
            var u = { 467: 0, 42: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        a,
                        [n, i, o] = t,
                        s = 0;
                    if (n.some((e) => 0 !== u[e])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (o) var E = o(__webpack_require__);
                    }
                    for (e && e(t); s < n.length; s++)
                        (a = n[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [812], () => __webpack_require__(162));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
