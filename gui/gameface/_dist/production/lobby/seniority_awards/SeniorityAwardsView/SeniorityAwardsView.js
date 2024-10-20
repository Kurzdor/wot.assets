(() => {
    var __webpack_modules__ = {
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var n = t(2056),
                    r = t(6179),
                    a = t.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            E = e.alert,
                            d = e.args,
                            A = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, s);
                        const F = (0, r.useMemo)(() => {
                            const e = Object.assign({}, d, { body: t, header: l, note: c, alert: E });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [E, t, l, c, d]);
                        return a().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((m = null == d ? void 0 : d.hasHtmlContent),
                                        m ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: F,
                                },
                                A,
                            ),
                            u,
                        );
                        var m;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    r = t(4179),
                    a = t(6179);
                const s = [
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
                function o(e) {
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
                const i = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            E = e.onMouseDown,
                            d = e.onClick,
                            A = e.ignoreShowDelay,
                            F = void 0 !== A && A,
                            m = e.ignoreMouseClick,
                            _ = void 0 !== m && m,
                            D = e.decoratorId,
                            B = void 0 === D ? 0 : D,
                            C = e.isEnabled,
                            g = void 0 === C || C,
                            h = e.targetId,
                            p = void 0 === h ? 0 : h,
                            v = e.onShow,
                            f = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, s);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, a.useMemo)(() => p || (0, n.F)().resId, [p]),
                            R = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(t, B, { isMouseEvent: !0, on: !0, arguments: o(r) }, S),
                                    v && v(),
                                    (w.current.isVisible = !0));
                            }, [t, B, r, S, v]),
                            y = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(t, B, { on: !1 }, S),
                                        w.current.isVisible && f && f(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, B, S, f]),
                            x = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && y();
                            }, [g, y]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            );
                        return g
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(R, F ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              y(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === _ && y(), null == d || d(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === _ && y(), null == E || E(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : u;
                        var T;
                    };
            },
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
            5067: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => Y });
                var n = {};
                t.r(n), t.d(n, { mouse: () => E, onResize: () => l });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => A,
                        getSize: () => d,
                        graphicsQuality: () => F,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => _, getTextureUrl: () => m });
                var s = {};
                function o(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(s),
                    t.d(s, {
                        addModelObserver: () => y,
                        addPreloadTexture: () => w,
                        children: () => a,
                        displayStatus: () => D,
                        displayStatusIs: () => $,
                        events: () => B,
                        extraSize: () => z,
                        forceTriggerMouseMove: () => G,
                        freezeTextureBeforeResize: () => L,
                        getBrowserTexturePath: () => R,
                        getDisplayStatus: () => V,
                        getScale: () => N,
                        getSize: () => T,
                        getViewGlobalPosition: () => M,
                        isEventHandled: () => W,
                        isFocused: () => H,
                        pxToRem: () => k,
                        remToPx: () => O,
                        resize: () => P,
                        sendEvent: () => b,
                        setAnimateWindow: () => I,
                        setEventHandled: () => U,
                        setInputPaddingsRem: () => S,
                        setSidePaddingsRem: () => x,
                        whenTutorialReady: () => j,
                    });
                const l = o('clientResized'),
                    c = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const E = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && i(!1);
                    }
                    function t() {
                        e.enabled && i(!0);
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
                            : i(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        s = c[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(a, o),
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
                            e.enabled && i(!0);
                        },
                        disableOutside() {
                            e.enabled && i(!1);
                        },
                    });
                })();
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const F = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function m(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function _(e, u, t) {
                    return `url(${m(e, u, t)})`;
                }
                const D = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
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
                    C = ['args'];
                const g = 2,
                    h = 16,
                    p = 32,
                    v = 64,
                    f = (e, u) => {
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
                                })(u, C);
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
                    b = {
                        close(e) {
                            f('popover' === e ? g : p);
                        },
                        minimize() {
                            f(v);
                        },
                        move(e) {
                            f(h, { isMouseEvent: !0, on: e });
                        },
                    };
                function w(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function S(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function R(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function y(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function x(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function T(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function P(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function M(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: O(u.x), y: O(u.y) };
                }
                function L() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function N() {
                    return viewEnv.getScale();
                }
                function k(e) {
                    return viewEnv.pxToRem(e);
                }
                function O(e) {
                    return viewEnv.remToPx(e);
                }
                function I(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function U() {
                    return viewEnv.setEventHandled();
                }
                function W() {
                    return viewEnv.isEventHandled();
                }
                function G() {
                    viewEnv.forceTriggerMouseMove();
                }
                function V() {
                    return viewEnv.getShowingStatus();
                }
                const $ = Object.keys(D).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === D[u]), e), {}),
                    z = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    j = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : B.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Y = { view: s, client: r };
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => n });
                const n = (e = 1) => {
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
                };
            },
            5521: (e, u, t) => {
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
            3649: (e, u, t) => {
                'use strict';
                let n;
                function r(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function a(e) {
                    return e.replace(/-/g, '_');
                }
                t.d(u, { BN: () => a, Uw: () => d, uF: () => r, v2: () => n }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(n || (n = {}));
                const s = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    o = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    i = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? s : o, []),
                    l = (() => {
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
                    c = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, u = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return c.includes(t)
                            ? l(e)
                            : ((e, u = n.left) => {
                                  let t = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = e.replace(/&nbsp;/g, ' ');
                                  return i(a, /( )/, u).forEach((e) => (t = t.concat(i(e, r, n.left)))), t;
                              })(e, u);
                    },
                    d = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : E(e, u)));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(5067);
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => l, Z5: () => s, B0: () => i, ry: () => B, Sy: () => g });
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
                var a = t(1358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let i;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    F = t(5067);
                const m = ['args'];
                function _(e, u, t, n, r, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
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
                                        function s(e) {
                                            _(a, n, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            _(a, n, r, s, o, 'throw', e);
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
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, m);
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
                    g = () => C(i.CLOSE),
                    h = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var p = t(7572);
                const v = r.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => C(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => C(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const s = F.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                d = o.height,
                                A = {
                                    x: F.O.view.pxToRem(l) + s.x,
                                    y: F.O.view.pxToRem(c) + s.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(d),
                                };
                            C(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(A),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, g);
                        },
                        handleViewEvent: C,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
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
                        ClickOutsideManager: v,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = f;
            },
            6224: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => rt,
                        Bar: () => ut,
                        DefaultScroll: () => nt,
                        Direction: () => Hu,
                        defaultSettings: () => Uu,
                        useHorizontalScrollApi: () => Gu,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => pt, Bar: () => Ct, Default: () => ht, useVerticalScrollApi: () => at });
                var a = t(6179),
                    s = t.n(a);
                const o = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(5067);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e, u, t) {
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
                })(c || (c = {}));
                const d = i.O.client.getSize('rem'),
                    A = d.width,
                    F = d.height,
                    m = Object.assign({ width: A, height: F }, E(A, F, l)),
                    _ = (0, a.createContext)(m),
                    D = ['children'];
                const B = (e) => {
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
                    const n = (0, a.useContext)(_),
                        r = n.extraLarge,
                        s = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        d = n.largeWidth,
                        A = n.mediumWidth,
                        F = n.smallWidth,
                        m = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        C = n.largeHeight,
                        g = n.mediumHeight,
                        h = n.smallHeight,
                        p = n.extraSmallHeight,
                        v = { extraLarge: B, large: C, medium: g, small: h, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && s) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return o(u, t, v);
                        if (t.largeWidth && d) return o(u, t, v);
                        if (t.mediumWidth && A) return o(u, t, v);
                        if (t.smallWidth && F) return o(u, t, v);
                        if (t.extraSmallWidth && m) return o(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && h) return u;
                            if (t.extraSmallHeight && p) return u;
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
                (0, a.memo)(B);
                const C = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    g = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(_),
                            t = (0, a.useState)(u),
                            n = t[0],
                            r = t[1],
                            o = (0, a.useCallback)((e, u) => {
                                const t = i.O.view.pxToRem(e),
                                    n = i.O.view.pxToRem(u);
                                r(Object.assign({ width: t, height: n }, E(t, n, l)));
                            }, []);
                        C(() => {
                            engine.on('clientResized', o);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', o), [o]);
                        const c = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return s().createElement(_.Provider, { value: c }, e);
                    });
                var h = t(6483),
                    p = t.n(h),
                    v = t(926),
                    f = t.n(v);
                let b, w, S;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(S || (S = {}));
                const y = () => {
                        const e = (0, a.useContext)(_),
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
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return S.ExtraLarge;
                                    case e.largeHeight:
                                        return S.Large;
                                    case e.mediumHeight:
                                        return S.Medium;
                                    case e.smallHeight:
                                        return S.Small;
                                    case e.extraSmallHeight:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const P = {
                        [w.ExtraSmall]: '',
                        [w.Small]: f().SMALL_WIDTH,
                        [w.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [w.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [S.ExtraSmall]: '',
                        [S.Small]: f().SMALL_HEIGHT,
                        [S.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [S.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [b.ExtraSmall]: '',
                        [b.Small]: f().SMALL,
                        [b.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [b.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [b.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    N = (e) => {
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
                            })(e, x);
                        const r = y(),
                            a = r.mediaWidth,
                            o = r.mediaHeight,
                            i = r.mediaSize;
                        return s().createElement('div', T({ className: p()(t, P[a], M[o], L[i]) }, n), u);
                    },
                    k = ['children'];
                const O = (e) => {
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
                    return s().createElement(g, null, s().createElement(N, t, u));
                };
                var I = t(493),
                    H = t.n(I),
                    U = t(9459);
                function W(e) {
                    engine.call('PlaySound', e);
                }
                const G = {
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
                    V = [
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
                function $() {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                }
                class z extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && W(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && W(this.props.soundClick);
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
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
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
                                })(e, V)),
                            A = p()(G.base, G[`base__${a}`], G[`base__${r}`], null == o ? void 0 : o.base),
                            F = p()(G.icon, G[`icon__${a}`], G[`icon__${r}`], null == o ? void 0 : o.icon),
                            m = p()(G.glow, null == o ? void 0 : o.glow),
                            _ = p()(G.caption, G[`caption__${a}`], null == o ? void 0 : o.caption),
                            D = p()(G.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            $(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== a && s().createElement('div', { className: G.shine }),
                            s().createElement('div', { className: F }, s().createElement('div', { className: m })),
                            s().createElement('div', { className: _ }, u),
                            n && s().createElement('div', { className: D }, n),
                        );
                    }
                }
                z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const j = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(n);
                    };
                };
                var Y = t(5521),
                    q = t(4179);
                const X = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function K(e = Y.n.NONE, u = X, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== Y.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                let Q;
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
                })(Q || (Q = {}));
                const Z = (e = {}) => {
                    (0, a.useEffect)(() => {
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
                var J = t(3403);
                let ee;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(ee || (ee = {}));
                let ue;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(ue || (ue = {}));
                const te = 'metrics',
                    ne = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: r }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: r || null,
                    }),
                    re = (e, u) => {
                        const t = (0, a.useCallback)(
                            (t, n = ee.Info, r) => {
                                r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(r),
                                        });
                            },
                            [e, u],
                        );
                        return (e, u, n) => t(e, u, n);
                    };
                let ae, se;
                function oe() {}
                !(function (e) {
                    e.RewardsScreen = 'sa_rewards_screen';
                })(ae || (ae = {})),
                    (function (e) {
                        (e.GoToShopButton = 'goto_shop_button'),
                            (e.ConfirmButton = 'confirm_button'),
                            (e.CloseButton = 'close_button');
                    })(se || (se = {}));
                function ie() {
                    return !1;
                }
                console.log;
                var le = t(9174);
                function ce(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Ee(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Ee(e, u);
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
                function Ee(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const de = (e) => (0 === e ? window : window.subViews.get(e));
                function Ae(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function Fe(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const me = Fe;
                function _e(e, u) {
                    return (function (e, u, t) {
                        const n = [];
                        for (let r = 0; r < e.length; r++) {
                            const a = me(e, r);
                            u(a, r, e) && n.push(t(a, r, e));
                        }
                        return n;
                    })(e, Ae, u);
                }
                var De = t(3946);
                const Be = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: o, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, n, r) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = de,
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
                                                const s = (e) => {
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
                                                        const o = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return r.set(l, t), e && t(s(a)), l;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = ce(r.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : o.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = le.LO.box(n, { equals: ie });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, le.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = le.LO.box(n, { equals: ie });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, le.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = le.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, le.aD)((u) => {
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
                                                                s = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = le.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, le.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            A = { mode: t, model: d, externalModel: o, cleanup: E };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && r ? r.controls(A) : u(A),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    A = (0, a.useState)(n),
                                    F = A[0],
                                    m = A[1],
                                    _ = (0, a.useState)(() => E(n, r, l)),
                                    D = _[0],
                                    B = _[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? B(E(F, r, l)) : (d.current = !0);
                                    }, [l, F, r]),
                                    (0, a.useEffect)(() => {
                                        m(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            D.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [D],
                                    ),
                                    s().createElement(t.Provider, { value: D }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    vehicles: e.array('vehicles', []),
                                    bonuses: e.array('bonuses', []),
                                },
                                t = (0, De.Om)(() => _e(u.bonuses.get(), (e) => Object.assign({}, e))),
                                n = (0, De.Om)(() => {
                                    return (
                                        (e = u.vehicles.get()),
                                        (t = (e) => Object.assign({}, e)),
                                        Array.isArray(e)
                                            ? e.map(t)
                                            : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n))
                                    );
                                    var e, t;
                                });
                            return Object.assign({}, u, {
                                computes: {
                                    getBonuses: t,
                                    getHasVehicles: (0, De.Om)(() => u.vehicles.get().length > 0),
                                    getVehicles: n,
                                    getBonusesLength: (0, De.Om)(() => u.bonuses.get().length),
                                    getIsShopAvailable: (0, De.Om)(() => !u.root.get().isShopOnOpenLocked),
                                    getCoinsCount: (0, De.Om)(() => u.root.get().specialCurrencyCount),
                                    getHasCoins: (0, De.Om)(() => u.root.get().specialCurrencyCount > 0),
                                },
                            });
                        },
                        ({ externalModel: e }) => ({ onOpenBtnClick: e.createCallbackNoArgs('onOpenBtnClick') }),
                    ),
                    Ce = Be[0],
                    ge = Be[1];
                var he = t(9762),
                    pe = t(4734);
                let ve, fe;
                !(function (e) {
                    (e.Vehicles = 'vehicles'), (e.Ribbon = 'ribbon');
                })(ve || (ve = {})),
                    (function (e) {
                        (e.ShowMoreRewards = 'showMoreRewards'), (e.ToVehicles = 'toVehicles');
                    })(fe || (fe = {}));
                const be = {
                        [ve.Vehicles]: {
                            firstEnter: R.sounds.gui_hangar_award_screen(),
                            enter: R.sounds.wdr_tank_screen(),
                            exit: R.sounds.wdr_tank_screen_stop(),
                        },
                        [ve.Ribbon]: {
                            firstEnter: R.sounds.gui_reward_screen_general(),
                            enter: R.sounds.wdr_award_amb(),
                            exit: R.sounds.wdr_award_amb_stop(),
                        },
                    },
                    we = (e) => {
                        W(be[e].exit);
                    };
                var Se = t(5668),
                    Re = t(3649);
                const ye = 'FormatText_base_d0',
                    xe = ({ binding: e, text: u = '', classMix: t, alignment: n = Re.v2.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, r) =>
                                      s().createElement(
                                          'div',
                                          { className: p()(ye, t), key: `${u}-${r}` },
                                          (0, Re.Uw)(u, n, e).map((e, u) =>
                                              s().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Te = 'AnimatedCount_base_7e',
                    Pe = 'AnimatedCount_value_72',
                    Me = ({ goalValue: e, onAnimationEnd: u }) => {
                        const t = (0, a.useState)(1),
                            n = t[0],
                            r = t[1],
                            o = (0, a.useState)(!1),
                            i = o[0],
                            l = o[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (i && n < e)
                                    return j(() => {
                                        r((e) => e + 1), W(R.sounds.gui_hangar_main_icon_counter());
                                    }, 100);
                            }, [e, i, n]),
                            (0, a.useEffect)(() => {
                                u && n === e && u();
                            }, [e, u, n]),
                            s().createElement(
                                'div',
                                { className: Te, onAnimationEnd: () => l(!0) },
                                s().createElement(xe, {
                                    text: R.strings.seniority_awards.rewardsView.sacoin.counter(),
                                    binding: { count: n },
                                    classMix: Pe,
                                }),
                            )
                        );
                    },
                    Le = 'AwardCoin_base_a3',
                    Ne = 'AwardCoin_coin_30',
                    ke = 'AwardCoin_count_2f',
                    Oe = ({ count: e, onAnimationEnd: u }) => {
                        const t = (0, a.useState)(!1),
                            n = t[0],
                            r = t[1];
                        (0, a.useEffect)(() => W(R.sounds.gui_hangar_reward_main_icon()), []);
                        const o = (0, a.useContext)(_),
                            i = o.extraSmall || o.small ? Se.x.Medium : Se.x.Large;
                        return s().createElement(
                            'div',
                            { className: Le },
                            s().createElement(
                                'div',
                                { className: Ne, onAnimationEnd: () => r(!0) },
                                s().createElement(Se.F, { size: i, count: e }),
                            ),
                            n &&
                                s().createElement(
                                    'div',
                                    { className: ke },
                                    s().createElement(Me, { goalValue: e, onAnimationEnd: u }),
                                ),
                        );
                    };
                let Ie, He, Ue, We, Ge, Ve, $e;
                !(function (e) {
                    (e.Items = 'items'),
                        (e.Equipment = 'equipment'),
                        (e.Xp = 'xp'),
                        (e.XpFactor = 'xpFactor'),
                        (e.Blueprints = 'blueprints'),
                        (e.BlueprintsAny = 'blueprintsAny'),
                        (e.Goodies = 'goodies'),
                        (e.Berths = 'berths'),
                        (e.Slots = 'slots'),
                        (e.Tokens = 'tokens'),
                        (e.CrewSkins = 'crewSkins'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.CreditsFactor = 'creditsFactor'),
                        (e.Currency = 'currency'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.SelectableBonus = 'selectableBonus'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (e.NewYearFillers = 'ny22Fillers'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearToyFragments = 'ny22ToyFragments'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.CollectionItem = 'collectionItem'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (e.WtStamp = 'stamp'),
                        (e.WtHunter = 'wt_hunter'),
                        (e.WtHunterCollection = 'hunter_collection'),
                        (e.WtTicket = 'wtevent_ticket'),
                        (e.WtMainPrizeDiscount = 'main_prize_discount');
                })(Ie || (Ie = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement');
                    })(He || (He = {})),
                    (function (e) {
                        (e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S48x48 = 's48x48');
                    })(Ue || (Ue = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(We || (We = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(Ge || (Ge = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Ve || (Ve = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })($e || ($e = {}));
                const ze = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            t = 'gold' === u ? q.B3.GOLD : q.B3.INTEGRAL;
                            return void 0 === e ? '' : q.Z5.getNumberFormat(e, t);
                        })(u, e);
                        return t ? s().createElement('span', null, t) : null;
                    },
                    je = [
                        Ie.Items,
                        Ie.Equipment,
                        Ie.Xp,
                        Ie.XpFactor,
                        Ie.Blueprints,
                        Ie.BlueprintsAny,
                        Ie.Goodies,
                        Ie.Berths,
                        Ie.Slots,
                        Ie.Tokens,
                        Ie.CrewSkins,
                        Ie.CrewBooks,
                        Ie.Customizations,
                        Ie.CreditsFactor,
                        Ie.TankmenXp,
                        Ie.TankmenXpFactor,
                        Ie.FreeXpFactor,
                        Ie.BattleToken,
                        Ie.PremiumUniversal,
                        Ie.NaturalCover,
                        Ie.BpCoin,
                        Ie.BattlePassSelectToken,
                        Ie.BattlaPassFinalAchievement,
                        Ie.BattleBadge,
                        Ie.BonusX5,
                        Ie.CrewBonusX3,
                        Ie.NewYearFillers,
                        Ie.NewYearInvoice,
                        Ie.EpicSelectToken,
                        Ie.Comp7TokenWeeklyReward,
                        Ie.Comp7TokenCouponReward,
                        Ie.BattleBoosterGift,
                        Ie.CosmicLootboxCommon,
                        Ie.CosmicLootboxSilver,
                        Ie.SelectableBonus,
                        Ie.WtStamp,
                        Ie.WtTicket,
                        Ie.WtMainPrizeDiscount,
                        Ie.WtHunter,
                        Ie.WtHunterCollection,
                    ],
                    Ye = [Ie.Gold, Ie.Credits, Ie.Crystal, Ie.FreeXp],
                    qe = [Ie.BattlePassPoints],
                    Xe = [Ie.PremiumPlus, Ie.Premium],
                    Ke = ['engravings', 'backgrounds'],
                    Qe = ['engraving', 'background'],
                    Ze = (e, u = Ue.Small) => {
                        const t = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case Ue.S600x450:
                                        return 'c_600x450';
                                    case Ue.S400x300:
                                        return 'c_400x300';
                                    case Ue.S296x222:
                                        return 'c_296x222';
                                    case Ue.S232x174:
                                        return 'c_232x174';
                                    case Ue.Big:
                                        return 'c_80x80';
                                    case Ue.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case Ue.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case Ue.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = Ke[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(Qe[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Je = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    };
                var eu = t(7030);
                const uu = (e) => --e * e * e + 1;
                var tu = t(2056);
                const nu = ['children'];
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                const au = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, nu);
                    return s().createElement(
                        tu.u,
                        ru(
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
                var su = t(6373);
                function ou() {
                    return (
                        (ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ou.apply(this, arguments)
                    );
                }
                const iu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(su.i, u, n);
                        const r = u.contentId,
                            a = u.args,
                            o = null == a ? void 0 : a.contentId;
                        return r || o
                            ? s().createElement(tu.u, ou({}, u, { contentId: r || o }), n)
                            : s().createElement(au, u, n);
                    },
                    lu = {
                        base: 'SeniorityReward_base_e4',
                        base__withCoins: 'SeniorityReward_base__withCoins_ea',
                        icon: 'SeniorityReward_icon_2a',
                        label: 'SeniorityReward_label_da',
                        base__credits: 'SeniorityReward_base__credits_5b',
                        base__gold: 'SeniorityReward_base__gold_56',
                        base__crystal: 'SeniorityReward_base__crystal_ce',
                        overlay: 'SeniorityReward_overlay_f1',
                    },
                    cu = ({ icon: e, value: u, name: t, tooltipId: n, hasCoins: r, overlayType: a }) => {
                        const o = ((e) => {
                            if (void 0 === e) return null;
                            switch (e) {
                                case Ge.BATTLE_BOOSTER:
                                    return $e.BATTLE_BOOSTER;
                                case Ge.BATTLE_BOOSTER_REPLACE:
                                    return $e.BATTLE_BOOSTER_REPLACE;
                                case Ge.BUILT_IN_EQUIPMENT:
                                    return $e.BUILT_IN_EQUIPMENT;
                                case Ge.EQUIPMENT_PLUS:
                                    return $e.EQUIPMENT_PLUS;
                                case Ge.EQUIPMENT_TROPHY_BASIC:
                                    return $e.EQUIPMENT_TROPHY_BASIC;
                                case Ge.EQUIPMENT_TROPHY_UPGRADED:
                                    return $e.EQUIPMENT_TROPHY_UPGRADED;
                                case Ge.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                    return $e.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                case Ge.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                    return $e.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                case Ge.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                    return $e.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                case Ge.PROGRESSION_STYLE_UPGRADED_1:
                                    return $e.PROGRESSION_STYLE_UPGRADED_1;
                                case Ge.PROGRESSION_STYLE_UPGRADED_2:
                                    return $e.PROGRESSION_STYLE_UPGRADED_2;
                                case Ge.PROGRESSION_STYLE_UPGRADED_3:
                                    return $e.PROGRESSION_STYLE_UPGRADED_3;
                                case Ge.PROGRESSION_STYLE_UPGRADED_4:
                                    return $e.PROGRESSION_STYLE_UPGRADED_4;
                            }
                        })(((e) => ('equipmentModernized' === e ? Ge.EQUIPMENT_MODERNIZED_UPGRADED_1 : e))(a));
                        return s().createElement(
                            iu,
                            { tooltipArgs: Je({ tooltipId: n }) },
                            s().createElement(
                                'div',
                                { className: p()(lu.base, r && lu.base__withCoins, lu[`base__${t}`]) },
                                o &&
                                    r &&
                                    s().createElement('div', {
                                        className: p()(lu.overlay),
                                        style: {
                                            backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.s180x135.${o}_overlay)`,
                                        },
                                    }),
                                s().createElement('div', {
                                    className: lu.icon,
                                    style: { backgroundImage: `url('${e}')` },
                                }),
                                u &&
                                    s().createElement(
                                        'div',
                                        { className: lu.label },
                                        ((e, u) => {
                                            if (void 0 === e) return null;
                                            switch (u) {
                                                case We.MULTI: {
                                                    const u = Number(e);
                                                    return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                                }
                                                case We.CURRENCY:
                                                case We.NUMBER:
                                                    return s().createElement(ze, {
                                                        format: 'integral',
                                                        value: Number(e),
                                                    });
                                                case We.PREMIUM_PLUS: {
                                                    const u = Number(e);
                                                    return isNaN(u) ? e : null;
                                                }
                                                default:
                                                    return e;
                                            }
                                        })(
                                            u,
                                            ((i = t),
                                            je.includes(i)
                                                ? We.MULTI
                                                : Ye.includes(i)
                                                  ? We.CURRENCY
                                                  : qe.includes(i)
                                                    ? We.NUMBER
                                                    : Xe.includes(i)
                                                      ? We.PREMIUM_PLUS
                                                      : We.STRING),
                                        ),
                                    ),
                            ),
                        );
                        var i;
                    },
                    Eu = 'AnimatedReward_base_64',
                    du = 'AnimatedReward_base__withCoins_53',
                    Au = (0, J.Pi)(
                        ({
                            delay: e,
                            duration: u,
                            icon: t,
                            value: n,
                            name: r,
                            tooltipId: a,
                            onRest: o,
                            overlayType: i,
                        }) => {
                            const l = ge().model.computes.getHasCoins(),
                                c = (0, eu.useSpring)({
                                    from: { opacity: 0, transform: l ? 'translateY(30rem)' : 'scale(0.5)' },
                                    to: { opacity: 1, transform: l ? 'translateY(0)' : 'scale(1)' },
                                    delay: e,
                                    config: { duration: u, easing: uu },
                                    onStart: () => W(R.sounds.gui_random_reward_icon()),
                                    onRest: o,
                                });
                            return s().createElement(
                                eu.animated.div,
                                { style: c, className: p()(Eu, l && du) },
                                s().createElement(cu, {
                                    overlayType: i,
                                    icon: t,
                                    value: n,
                                    name: r,
                                    tooltipId: a,
                                    hasCoins: l,
                                }),
                            );
                        },
                    ),
                    Fu = (0, a.createContext)({ rewards: [] }),
                    mu = 'RewardsAnimatedText_base_c4',
                    _u = ({ animatedText: e, duration: u }) => {
                        const t = (0, eu.useSpring)({
                            from: { opacity: 0, transform: 'translateY(30rem)' },
                            to: { opacity: 1, transform: 'translateY(0)' },
                            config: { duration: u, easing: uu },
                        });
                        return s().createElement(eu.animated.div, { style: t, className: mu }, e);
                    },
                    Du = 'Rewards_base_e7',
                    Bu = 'Rewards_base__withCoins_62',
                    Cu = 'Rewards_rewards_c5',
                    gu = (e, u) => {
                        var t;
                        const n = null != (t = e.icon) && t.match(/^\d/) ? `c_${e.icon}` : e.icon,
                            r = u ? Ue.Big : Ue.S400x300;
                        return Ze(Object.assign({}, e, { icon: n }), r);
                    },
                    hu = (0, J.Pi)(({ onAnimationEnd: e }) => {
                        const u = ge().model.computes.getHasCoins(),
                            t = (0, a.useContext)(Fu).rewards,
                            n = R.strings.seniority_awards.rewardsView.subTitle.otherRewards();
                        return s().createElement(
                            'div',
                            { className: p()(Du, u && Bu) },
                            u && s().createElement(_u, { duration: 150, animatedText: n }),
                            s().createElement(
                                'div',
                                { className: Cu },
                                t &&
                                    t.map((n, r) => {
                                        return s().createElement(Au, {
                                            key: n.index,
                                            delay: 150 * (r + 1),
                                            duration: 150,
                                            name: n.name,
                                            icon: gu(n, u),
                                            value: n.value,
                                            tooltipId: n.tooltipId,
                                            onRest: r === t.length - 1 ? e : void 0,
                                            overlayType: ((a = n), null == a ? void 0 : a.overlayType),
                                        });
                                        var a;
                                    }),
                            ),
                        );
                    }),
                    pu = 'Ribbon_base_0f',
                    vu = 'Ribbon_ribbon_33',
                    fu = 'Ribbon_base__withCoins_66',
                    bu = 'Ribbon_rewards_4b',
                    wu = 'Ribbon_awardCoin_1e',
                    Su = 'Ribbon_radialLines_e5',
                    Ru = 'Ribbon_linesWrapper_ca',
                    yu = 'Ribbon_glow_05',
                    xu = (0, J.Pi)(({ onAnimationEnd: e }) => {
                        const u = ge().model,
                            t = u.computes.getCoinsCount(),
                            n = u.computes.getHasCoins(),
                            r = (0, a.useState)(!1),
                            o = r[0],
                            i = r[1],
                            l = (0, a.useState)(!1),
                            c = l[0],
                            E = l[1];
                        return s().createElement(
                            'div',
                            {
                                className: p()(pu, n && fu),
                                onAnimationEnd: () => {
                                    n ? i(!0) : E(!0);
                                },
                            },
                            s().createElement(
                                'div',
                                { className: vu },
                                s().createElement(
                                    'div',
                                    { className: Ru },
                                    s().createElement('div', { className: Su }),
                                ),
                                o &&
                                    s().createElement(
                                        'div',
                                        { className: wu },
                                        s().createElement('div', { className: yu }),
                                        s().createElement(Oe, { count: t, onAnimationEnd: () => E(!0) }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: bu },
                                    c && s().createElement(hu, { onAnimationEnd: e }),
                                ),
                            ),
                        );
                    }),
                    Tu = (e) => {
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
                    Pu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Mu = [];
                function Lu(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Mu)
                    );
                }
                function Nu(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        r,
                    ];
                }
                function ku(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Ou(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Ou(e, u);
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
                function Ou(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function Iu(e, u, t) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    s = 0;
                                function o() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function E() {
                                        (s = Date.now()), t.apply(l, i);
                                    }
                                    a ||
                                        (n && !r && E(),
                                        o(),
                                        void 0 === n && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : E,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (i.cancel = function () {
                                        o(), (a = !0);
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                }
                let Hu;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Hu || (Hu = {}));
                const Uu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Wu = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return Pu(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? Uu : c,
                                d = (0, a.useRef)(null),
                                A = (0, a.useRef)(null),
                                F = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = ku(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                m = Iu(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                _ = (0, eu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), F.trigger('change', e), s && m());
                                    },
                                    onRest: (e) => F.trigger('rest', e),
                                    onStart: (e) => F.trigger('start', e),
                                    onPause: (e) => F.trigger('pause', e),
                                })),
                                D = _[0],
                                B = _[1],
                                C = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            a = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, u * t + a + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                g = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            B.start({
                                                scrollPosition: o(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: o(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [B, E.animationConfig, D.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = A.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            a = C(u, e, n);
                                        g(a);
                                    },
                                    [g, C, E.step],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && h(n(e)),
                                            d.current && F.trigger('mouseWheel', e, D.scrollPosition, u(d.current));
                                    },
                                    [D.scrollPosition, h, F],
                                ),
                                v = ((e, u = []) => {
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
                                        Tu(() => {
                                            const e = d.current;
                                            e &&
                                                (g(o(e, D.scrollPosition.goal), { immediate: !0 }),
                                                F.trigger('resizeHandled'));
                                        }),
                                    [g, D.scrollPosition.goal],
                                ),
                                f = Lu(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = o(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && g(u, { immediate: !0 }),
                                        F.trigger('recalculateContent');
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            );
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (A.current ? r(A.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: p,
                                    applyScroll: g,
                                    applyStepTo: h,
                                    contentRef: d,
                                    wrapperRef: A,
                                    scrollPosition: B,
                                    animationScroll: D,
                                    recalculateContent: f,
                                    events: { on: F.on, off: F.off },
                                }),
                                [D.scrollPosition, g, h, F.off, F.on, f, p, B, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Gu = Wu({
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
                        getDirection: (e) => (e.deltaY > 1 ? Hu.Next : Hu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Vu = 'HorizontalBar_base_49',
                    $u = 'HorizontalBar_base__nonActive_82',
                    zu = 'HorizontalBar_leftButton_5f',
                    ju = 'HorizontalBar_rightButton_03',
                    Yu = 'HorizontalBar_track_0d',
                    qu = 'HorizontalBar_thumb_fd',
                    Xu = 'HorizontalBar_rail_32',
                    Ku = 'disable',
                    Qu = { pending: !1, offset: 0 },
                    Zu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Ju = () => {},
                    et = (e, u) => Math.max(20, e.offsetWidth * u),
                    ut = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Zu, onDrag: n = Ju }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, a.useState)(Qu),
                            A = d[0],
                            F = d[1],
                            m = (0, a.useCallback)(
                                (e) => {
                                    F(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            _ = () => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    E = Pu(0, 1, a / (r - n)),
                                    d = (u.offsetWidth - et(u, s)) * E;
                                (t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(Ku), void i.current.classList.remove(Ku);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(Ku), void i.current.classList.add(Ku);
                                            var u, t;
                                            o.current.classList.remove(Ku), i.current.classList.remove(Ku);
                                        }
                                    })(d);
                            },
                            D = Lu(() => {
                                (() => {
                                    const u = c.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const s = Math.min(1, n / a);
                                    (u.style.width = `${et(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add($u) : r.current.classList.remove($u));
                                })(),
                                    _();
                            });
                        (0, a.useEffect)(() => Tu(D)),
                            (0, a.useEffect)(
                                () =>
                                    Tu(() => {
                                        const u = () => {
                                            _();
                                        };
                                        let t = Ju;
                                        const n = () => {
                                            t(), (t = Tu(D));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = (u) => {
                                        var t;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const a = l.current,
                                            s = c.current;
                                        if (!r || !a || !s) return;
                                        const o = u.screenX - A.offset - a.getBoundingClientRect().x,
                                            i = (o / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), m(Qu);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, A.offset, A.pending, n, m]);
                        const B = Nu((u) => e.applyStepTo(u), E, [e]),
                            C = B[0],
                            g = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', g, !0),
                                () => document.removeEventListener('mouseup', g, !0)
                            ),
                            [g],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Ku) || W('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: p()(Vu, u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: p()(zu, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ku) || 0 !== e.button || (W('play'), C(Hu.Next));
                                },
                                onMouseUp: g,
                                ref: o,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: p()(Yu, u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        if (n && 0 === u.button)
                                            if ((W('play'), u.target === n))
                                                m({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = c.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Hu.Prev : Hu.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: c, className: p()(qu, u.thumb) }),
                                s().createElement('div', { className: p()(Xu, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: p()(ju, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ku) || 0 !== e.button || (W('play'), C(Hu.Prev));
                                },
                                onMouseUp: g,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    tt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    nt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: p()(tt.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: p()(tt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: p()(tt.defaultScrollArea, r) },
                                s().createElement(rt, { className: i, api: d, classNames: o }, e),
                            ),
                            s().createElement(ut, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    rt = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => Tu(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: p()(tt.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: p()(tt.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: p()(tt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (rt.Bar = ut),
                    (rt.Default = nt),
                    (rt.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => Tu(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: p()(tt.base, u) },
                            s().createElement(
                                'div',
                                { className: p()(tt.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: p()(tt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const at = Wu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Hu.Next : Hu.Prev),
                    }),
                    st = 'VerticalBar_base_f3',
                    ot = 'VerticalBar_base__nonActive_42',
                    it = 'VerticalBar_topButton_d7',
                    lt = 'VerticalBar_bottomButton_06',
                    ct = 'VerticalBar_track_df',
                    Et = 'VerticalBar_thumb_32',
                    dt = 'VerticalBar_rail_43',
                    At = 'disable',
                    Ft = () => {},
                    mt = { pending: !1, offset: 0 },
                    _t = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Dt = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Bt = (e, u) => Math.max(20, e.offsetHeight * u),
                    Ct = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = _t, onDrag: n = Ft }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, a.useState)(mt),
                            A = d[0],
                            F = d[1],
                            m = (0, a.useCallback)(
                                (e) => {
                                    F(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            _ = Lu(() => {
                                const u = c.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const s = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${Bt(t, s)}px`),
                                    u.classList.add(Et),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(ot) : r.current.classList.remove(ot)),
                                    s
                                );
                            }),
                            D = Lu(() => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    E = Pu(0, 1, a / (r - n)),
                                    d = (u.offsetHeight - Bt(u, s)) * E;
                                (t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(At), void i.current.classList.remove(At);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(At), void i.current.classList.add(At);
                                            var u, t;
                                            o.current.classList.remove(At), i.current.classList.remove(At);
                                        }
                                    })(d);
                            }),
                            B = Lu(() => {
                                Dt(e, () => {
                                    _(), D();
                                });
                            });
                        (0, a.useEffect)(() => Tu(B)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    Dt(e, () => {
                                        D();
                                    });
                                };
                                let t = Ft;
                                const n = () => {
                                    t(), (t = Tu(B));
                                };
                                return (
                                    e.events.on('recalculateContent', B),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', B),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = (u) => {
                                        Dt(e, (t) => {
                                            const r = l.current,
                                                a = c.current,
                                                s = e.getContainerSize();
                                            if (!r || !a || !s) return;
                                            const o = u.screenY - A.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), m(mt);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, A.offset, A.pending, n, m]);
                        const C = Nu((u) => e.applyStepTo(u), E, [e]),
                            g = C[0],
                            h = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const v = (e) => {
                            e.target.classList.contains(At) || W('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: p()(st, u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: p()(it, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(At) || 0 !== e.button || (W('play'), g(Hu.Next));
                                },
                                ref: o,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: p()(ct, u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        if (n && 0 === u.button)
                                            if ((W('play'), u.target === n))
                                                m({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    c.current &&
                                                        Dt(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Hu.Prev : Hu.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: c, className: u.thumb }),
                                s().createElement('div', { className: p()(dt, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: p()(lt, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(At) || 0 !== e.button || (W('play'), g(Hu.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    gt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ht = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: p()(gt.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: p()(gt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: p()(gt.area, r) },
                                s().createElement(pt, { className: o, classNames: i, api: d }, e),
                            ),
                            s().createElement(Ct, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    pt = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => Tu(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: p()(gt.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: p()(gt.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                pt.Default = ht;
                const vt = { Vertical: r, Horizontal: n },
                    ft = { areaWidth: 0, contentWidth: 0, setAreaWidth: () => oe, setContentWidth: () => oe },
                    bt = (0, a.createContext)(ft),
                    wt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    St = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Rt(e) {
                    let u = '';
                    for (let t = St.length - 1; t >= 0; t--) for (; e >= St[t]; ) (u += wt[t]), (e -= St[t]);
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const yt = 'Vehicle_base_62',
                    xt = 'Vehicle_hoverArea_25',
                    Tt = 'Vehicle_base__big_8c',
                    Pt = 'Vehicle_image_80',
                    Mt = 'Vehicle_vehicleName_a1',
                    Lt = 'Vehicle_nation_88',
                    Nt = 'Vehicle_type_14',
                    kt = 'R.images.gui.maps.icons.seniorityAwards.rewards.vehicles',
                    Ot = ({
                        index: e,
                        name: u,
                        techName: t,
                        type: n,
                        tier: r,
                        isPremium: a,
                        nation: o,
                        vehicleCD: i,
                        onRestAnimation: l,
                        isBig: c = !1,
                        isEnabledSound: E = !0,
                    }) => {
                        const d = (0, Re.BN)(n),
                            A = { backgroundImage: `url(${kt}.${t})` },
                            F = { backgroundImage: `url(${kt}.nations.${o})` },
                            m = { backgroundImage: `url(${kt}.types.${d}${a ? '_elite' : ''})` },
                            _ = { tooltipId: 'TOOLTIP_VEHICLE_REWARD', vehicleCD: i },
                            D = (0, eu.useSpring)({
                                from: { opacity: 0, transform: 'translateX(30rem)' },
                                to: { opacity: 1, transform: 'translateX(0%)' },
                                delay: 1e3 * e,
                                config: { duration: 1e3, easing: uu },
                                onStart: () => E && W(R.sounds.wdr_award_tank()),
                                onRest: () => {
                                    l(e);
                                },
                            }),
                            B = (0, eu.useSpring)({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                delay: 1e3 * e + 500,
                                config: { duration: 500, easing: uu },
                            });
                        return s().createElement(
                            au,
                            { args: _ },
                            s().createElement(
                                'div',
                                { className: p()(yt, c && Tt) },
                                s().createElement('div', { className: xt }),
                                s().createElement(
                                    eu.animated.div,
                                    { style: D },
                                    s().createElement('div', { className: Pt, style: A }),
                                ),
                                s().createElement(
                                    eu.animated.div,
                                    { style: B, className: Mt },
                                    s().createElement('div', { className: Lt, style: F }),
                                    Rt(r),
                                    s().createElement('div', { className: Nt, style: m }),
                                    u,
                                ),
                            ),
                        );
                    },
                    It = 'Vehicles_base_1d',
                    Ht = 'Vehicles_container_d2',
                    Ut = 'Vehicles_scrollWrapper_b0',
                    Wt = 'Vehicles_scrollContent_a4',
                    Gt = 'Vehicles_scrollList_ed',
                    Vt = 'Vehicles_scrollList__disabled_7b',
                    $t = 'Vehicles_scrollLeftButton_28',
                    zt = 'Vehicles_scrollRightButton_4d',
                    jt = 'Vehicles_scrollTrack_bd',
                    Yt = 'Vehicles_item_16',
                    qt = 'Vehicles_item__offset_ab',
                    Xt = 'Vehicles_item__big_85',
                    Kt = 'Vehicles_bar_5d',
                    Qt = 'Vehicles_bar__visible_8b';
                function Zt() {
                    return (
                        (Zt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Zt.apply(this, arguments)
                    );
                }
                let Jt;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Pause = 'pause'),
                        (e.ActiveWithoutScroll = 'activeWithoutScroll'),
                        (e.End = 'end');
                })(Jt || (Jt = {}));
                const en = (0, J.Pi)(
                        ({
                            isVisible: e,
                            isStoppedScrolling: u,
                            onScrollChange: t,
                            onAnimationEnd: n,
                            setMaxScrollPosition: r,
                        }) => {
                            var o, i;
                            const l = ge().model,
                                c = (0, a.useContext)(bt),
                                E = c.setAreaWidth,
                                d = c.areaWidth,
                                A = c.contentWidth,
                                F = c.setContentWidth,
                                m = l.computes.getVehicles(),
                                _ = 1 === m.length,
                                D = Gu(),
                                B = (0, a.useRef)([]),
                                C = (0, a.useRef)(null),
                                g = (null == (o = C.current) ? void 0 : o.offsetWidth) || 0;
                            E(g);
                            const h = (null == (i = D.contentRef.current) ? void 0 : i.offsetWidth) || 0;
                            r(h);
                            const v = (0, a.useState)(Jt.Active),
                                f = v[0],
                                b = v[1],
                                w = f === Jt.Active;
                            (0, a.useEffect)(() => {
                                u && b(Jt.ActiveWithoutScroll);
                            }, [u]);
                            const S = e && f === Jt.End,
                                R = (0, a.useCallback)(() => {
                                    const e = D.animationScroll.scrollPosition.get();
                                    t(e);
                                }, [t, D.animationScroll.scrollPosition]),
                                y = (0, a.useCallback)(
                                    (e) => {
                                        S && D.handleMouseWheel(e);
                                    },
                                    [D, S],
                                ),
                                x = (0, a.useCallback)(() => {
                                    h !== A && F(h), g !== d && E(g);
                                }, [d, h, A, g, E, F]);
                            (0, a.useEffect)(
                                () => (
                                    D.events.on('change', R),
                                    D.events.on('resizeHandled', x),
                                    window.addEventListener('resize', R),
                                    window.addEventListener('wheel', y),
                                    () => {
                                        D.events.off('change', R),
                                            D.events.off('resizeHandled', x),
                                            window.removeEventListener('resize', R),
                                            window.removeEventListener('wheel', y);
                                    }
                                ),
                                [D.events, R, y, x],
                            );
                            const T = (0, a.useCallback)(
                                    (e, u) => {
                                        const t = C.current;
                                        (t ? Math.round(t.getBoundingClientRect().right) : 0) < e &&
                                            (b(Jt.Pause),
                                            D.applyScroll(D.animationScroll.scrollPosition.goal + u),
                                            b(Jt.Active));
                                    },
                                    [D],
                                ),
                                P = (0, a.useCallback)(
                                    (e) => {
                                        if (e + 1 === m.length) b(Jt.End);
                                        else if (w) {
                                            const u = B.current[e],
                                                t = B.current[e + 1];
                                            T(Math.round(t.getBoundingClientRect().right), u.offsetWidth);
                                        }
                                    },
                                    [w, T, m.length],
                                );
                            return (
                                (0, a.useEffect)(() => {
                                    S && (null == n || n());
                                }, [n, S]),
                                s().createElement(
                                    'div',
                                    { className: It },
                                    s().createElement(
                                        'div',
                                        { className: Ht, ref: C },
                                        s().createElement(
                                            'div',
                                            { className: p()(Gt, f !== Jt.End && Vt) },
                                            s().createElement(
                                                vt.Horizontal.Area.SeniorityAwards,
                                                { classNames: { content: Wt, wrapper: Ut }, api: D },
                                                s().createElement(
                                                    eu.SpringContext,
                                                    { pause: f === Jt.Pause },
                                                    m.map((e, u) =>
                                                        s().createElement(
                                                            'div',
                                                            {
                                                                key: e.vehicleCD,
                                                                ref: (e) => (B.current[u] = e),
                                                                className: p()(Yt, qt, _ && Xt),
                                                            },
                                                            s().createElement(
                                                                Ot,
                                                                Zt({}, e, {
                                                                    index: u,
                                                                    onRestAnimation: P,
                                                                    isBig: _,
                                                                    isEnabledSound: w,
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: p()(Kt, f === Jt.End && Qt) },
                                                s().createElement(vt.Horizontal.Bar, {
                                                    api: D,
                                                    classNames: { leftButton: $t, rightButton: zt, track: jt },
                                                }),
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    un = 'Content_base_0b',
                    tn = 'Content_vehicles_a7',
                    nn = 'Content_vehicles__hidden_f1',
                    rn = 'Content_ribbon_90',
                    an = 'Content_ribbon__hidden_90',
                    sn = (0, J.Pi)(
                        ({
                            machineState: e,
                            isFirstEnter: u,
                            isStoppedScrolling: t,
                            onScrollChange: n,
                            onAnimationEnd: r,
                            setMaxScrollPosition: o,
                        }) => {
                            const i = ge().model.computes.getHasVehicles(),
                                l = e === ve.Vehicles && !u,
                                c = e === ve.Ribbon && !u;
                            return (
                                (0, a.useLayoutEffect)(() => {
                                    const t = be[e];
                                    return u && W(t.firstEnter), W(t.enter), () => W(t.exit);
                                }, [u, e]),
                                (0, a.useEffect)(() => {
                                    c && r();
                                }, [c, r]),
                                s().createElement(
                                    'div',
                                    { className: un },
                                    i &&
                                        s().createElement(
                                            'div',
                                            { className: p()(tn, e !== ve.Vehicles && nn) },
                                            s().createElement(en, {
                                                isVisible: e === ve.Vehicles,
                                                isStoppedScrolling: t,
                                                onScrollChange: n,
                                                onAnimationEnd: r,
                                                setMaxScrollPosition: o,
                                            }),
                                        ),
                                    (e === ve.Ribbon || !u) &&
                                        s().createElement(
                                            'div',
                                            { className: p()(rn, l && an) },
                                            s().createElement(xu, { onAnimationEnd: r }),
                                        ),
                                )
                            );
                        },
                    ),
                    on = {
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
                let ln, cn;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ln || (ln = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(cn || (cn = {}));
                const En = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: A,
                    onMouseLeave: F,
                    onClick: m,
                }) => {
                    const _ = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        B = D[0],
                        C = D[1],
                        g = (0, a.useState)(!1),
                        h = g[0],
                        v = g[1],
                        f = (0, a.useState)(!1),
                        b = f[0],
                        w = f[1],
                        S = (0, a.useCallback)(() => {
                            r || (_.current && (_.current.focus(), C(!0)));
                        }, [r]),
                        y = (0, a.useCallback)(
                            (e) => {
                                B && null !== _.current && !_.current.contains(e.target) && C(!1);
                            },
                            [B],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                r || (m && m(e));
                            },
                            [r, m],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                r || (null !== i && W(i), c && c(e), w(!0));
                            },
                            [r, i, c],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                r || (A && A(e), v(!1));
                            },
                            [r, A],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                r || (null !== l && W(l), d && d(e), t && S(), v(!0));
                            },
                            [r, l, d, S, t],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                r || (F && F(e), v(!1));
                            },
                            [r, F],
                        ),
                        k = p()(
                            on.base,
                            on[`base__${n}`],
                            {
                                [on.base__disabled]: r,
                                [on[`base__${u}`]]: u,
                                [on.base__focus]: B,
                                [on.base__highlightActive]: h,
                                [on.base__firstHover]: b,
                            },
                            o,
                        ),
                        O = p()(on.state, on.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, a.useEffect)(() => {
                            C(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: _,
                                className: k,
                                onMouseEnter: T,
                                onMouseMove: P,
                                onMouseUp: M,
                                onMouseDown: L,
                                onMouseLeave: N,
                                onClick: x,
                            },
                            n !== ln.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: on.back }),
                                    s().createElement('span', { className: on.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: O },
                                s().createElement('span', { className: on.stateDisabled }),
                                s().createElement('span', { className: on.stateHighlightHover }),
                                s().createElement('span', { className: on.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: on.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                En.defaultProps = { type: ln.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const dn = (0, a.memo)(En),
                    An = 'Footer_base_0b',
                    Fn = 'Footer_description_ac',
                    mn = 'Footer_buttonHolder_0e',
                    _n = 'Footer_button_d2',
                    Dn = 'Footer_buttonText_0b',
                    Bn = R.strings.seniority_awards.rewardsView,
                    Cn = (0, J.Pi)(({ hasMoreRewards: e, onShowMoreClick: u, onAcceptClick: t }) => {
                        const n = ge().model.computes.getIsShopAvailable(),
                            r = n ? Bn.gotoRewardsBtn() : Bn.applyBtn();
                        return s().createElement(
                            'div',
                            { className: An },
                            e
                                ? s().createElement(
                                      'div',
                                      { className: mn },
                                      s().createElement(
                                          dn,
                                          { size: cn.medium, onClick: u, soundClick: R.sounds.yes1(), mixClass: _n },
                                          s().createElement('div', { className: Dn }, Bn.moreRewardsBtn()),
                                      ),
                                  )
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      n && s().createElement('div', { className: Fn }, Bn.exchangeCoins()),
                                      s().createElement(
                                          'div',
                                          { className: mn },
                                          s().createElement(
                                              dn,
                                              {
                                                  size: cn.medium,
                                                  type: n ? ln.main : ln.primary,
                                                  onClick: t,
                                                  soundClick: R.sounds.yes1(),
                                                  mixClass: _n,
                                                  isFocused: !0,
                                              },
                                              s().createElement('div', { className: Dn }, r),
                                          ),
                                      ),
                                  ),
                        );
                    }),
                    gn = 'FormatGradientText_gradientBox_86',
                    hn = 'FormatGradientText_gradientText_a6',
                    pn = 'FormatGradientText_gradientText__copied_52',
                    vn = (0, a.memo)(({ text: e, binding: u, className: t, classNames: n }) => {
                        const r = ((e, u, t) => {
                                const n =
                                        /(?:%\(|{)\w*(?:_[Gg]radient|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Gg]radient|End)(?:\)s|})?/g,
                                    r = /(?<=(?:_[Gg]radient|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                                    a = u ? Object.assign({}, u) : {};
                                let o = e,
                                    i = n.exec(e);
                                for (; i; ) {
                                    const u = i[0],
                                        l = r.exec(u),
                                        c = i[1];
                                    if (l) {
                                        const e = l[0].replaceAll(')', '');
                                        (o = o.replace(u, `%(${e})`)),
                                            (a[e] = s().createElement(
                                                'div',
                                                { className: gn },
                                                s().createElement(
                                                    'div',
                                                    { className: p()(hn, null == t ? void 0 : t.text) },
                                                    c,
                                                ),
                                                s().createElement(
                                                    'div',
                                                    { className: p()(hn, pn, null == t ? void 0 : t.copiedText) },
                                                    c,
                                                ),
                                            ));
                                    }
                                    i = n.exec(e);
                                }
                                return [o, a];
                            })(e, u, n),
                            a = r[0],
                            o = r[1];
                        return s().createElement(xe, { classMix: t, text: a, binding: o });
                    }),
                    fn = 'Header_base_eb',
                    bn = 'Header_titleBox_72',
                    wn = 'Header_light_f6',
                    Sn = 'Header_line_25',
                    Rn = 'Header_line__inverted_ab',
                    yn = 'Header_square_08',
                    xn = 'Header_title_4c',
                    Tn = 'Header_gradientText_37',
                    Pn = 'Header_gradientText__copied_d8',
                    Mn = 'Header_subTitleBox_01',
                    Ln = 'Header_subTitle_e7',
                    Nn = R.strings.seniority_awards.rewardsView,
                    kn = (0, J.Pi)(() => {
                        const e = ge().model.root.get().category,
                            u = Nn.title();
                        return s().createElement(
                            'div',
                            { className: fn },
                            s().createElement(
                                'div',
                                { className: bn },
                                s().createElement('div', { className: wn }),
                                s().createElement(
                                    'div',
                                    { className: Sn },
                                    s().createElement('div', { className: yn }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: xn },
                                    s().createElement('div', { className: Tn }, u),
                                    s().createElement('div', { className: p()(Tn, Pn) }, u),
                                ),
                                s().createElement(
                                    'div',
                                    { className: p()(Sn, Rn) },
                                    s().createElement('div', { className: yn }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: Mn },
                                s().createElement(vn, { className: Ln, text: Nn.subTitle.$dyn(e) }),
                            ),
                        );
                    }),
                    On = {
                        base: 'App_base_0f',
                        bgWrapper: 'App_bgWrapper_99',
                        background: 'App_background_1f',
                        foreground: 'App_foreground_dd',
                        vignette: 'App_vignette_db',
                        vignette__mid: 'App_vignette__mid_69',
                        vignette__left: 'App_vignette__left_28',
                        vignette__right: 'App_vignette__right_fe',
                        shadow: 'App_shadow_03',
                        base__ribbon: 'App_base__ribbon_86',
                        blackout: 'App_blackout_57',
                        gradient: 'App_gradient_00',
                        textButton: 'App_textButton_51',
                        fadeIn: 'App_fadeIn_c0',
                        textButton__back: 'App_textButton__back_92',
                        textButton__close: 'App_textButton__close_26',
                        goto: 'App_goto_32',
                        header: 'App_header_de',
                        slideUp: 'App_slideUp_a5',
                        footer: 'App_footer_72',
                        fadeOut: 'App_fadeOut_a4',
                        raysAppearance: 'App_raysAppearance_fe',
                        rotate: 'App_rotate_66',
                        fadeInWithScale: 'App_fadeInWithScale_c6',
                        scale: 'App_scale_47',
                    },
                    In = R.strings.seniority_awards.rewardsView;
                let Hn;
                !(function (e) {
                    (e.ShowHeader = 'showHeader'),
                        (e.ShowContent = 'showContent'),
                        (e.ShowFooter = 'showFooter'),
                        (e.Finished = 'finished');
                })(Hn || (Hn = {}));
                const Un = (0, J.Pi)(() => {
                    const e = ge(),
                        u = e.model,
                        t = e.controls,
                        n = u.computes,
                        r = ((e) => {
                            const u = re(e, te),
                                t = (0, a.useCallback)(
                                    (e) => {
                                        u(e.action, e.logLevel, ne(e));
                                    },
                                    [u],
                                );
                            return (e) => t(e);
                        })('seniority_awards_22'),
                        o = (0, a.useState)(0),
                        l = o[0],
                        c = o[1],
                        E = (0, a.useState)(Hn.ShowHeader),
                        d = E[0],
                        A = E[1],
                        F = (0, a.useState)(!1),
                        m = F[0],
                        D = F[1],
                        B = (0, a.useState)(!1),
                        C = B[0],
                        g = B[1],
                        h = (0, a.useState)(0),
                        v = h[0],
                        f = h[1],
                        b = (0, a.useState)(0),
                        w = b[0],
                        S = b[1],
                        R = (0, a.useState)(0),
                        y = R[0],
                        x = R[1],
                        T = n.getHasVehicles(),
                        P = n.getBonuses(),
                        M = n.getHasCoins(),
                        L = (0, a.useContext)(_),
                        N = (0, a.useMemo)(
                            () =>
                                ((e, u, t) => {
                                    const n = t ? 10 : 5;
                                    return (0, he.C)({
                                        id: 'seniority-awards',
                                        initial: e,
                                        context: {
                                            visibleRewards: u.slice(0, n),
                                            rewardWatchedCount: n,
                                            isFirstEnter: !0,
                                        },
                                        states: {
                                            [ve.Vehicles]: { on: { [fe.ShowMoreRewards]: { target: ve.Ribbon } } },
                                            [ve.Ribbon]: {
                                                exit: (0, pe.f0)((e) => ({
                                                    visibleRewards: e.visibleRewards,
                                                    rewardWatchedCount: e.rewardWatchedCount,
                                                    isFirstEnter: !1,
                                                })),
                                                on: {
                                                    [fe.ToVehicles]: {
                                                        target: ve.Vehicles,
                                                        actions: (0, pe.f0)((e) => ({
                                                            visibleRewards: u.slice(0, n),
                                                            rewardWatchedCount: n,
                                                            isRibbonVisited: e.isFirstEnter,
                                                        })),
                                                    },
                                                    [fe.ShowMoreRewards]: {
                                                        target: ve.Ribbon,
                                                        internal: !0,
                                                        actions: (0, pe.f0)((e) => {
                                                            const t = e.rewardWatchedCount + n;
                                                            return {
                                                                visibleRewards: u.slice(e.rewardWatchedCount, t),
                                                                rewardWatchedCount: t,
                                                                isRibbonVisited: e.isFirstEnter,
                                                            };
                                                        }),
                                                        cond: (e) => e.rewardWatchedCount < u.length,
                                                    },
                                                },
                                            },
                                        },
                                    });
                                })(T ? ve.Vehicles : ve.Ribbon, P, M),
                            [P, T, M],
                        ),
                        k = (0, U.eO)(N),
                        O = k[0],
                        I = k[1],
                        H = n.getBonusesLength(),
                        W = L.extraLarge ? 5 : 4,
                        G = n.getVehicles().length > W,
                        V = O.value === ve.Vehicles || O.context.rewardWatchedCount < H,
                        $ = (0, a.useMemo)(() => ({ rewards: O.context.visibleRewards }), [O.context.visibleRewards]),
                        X = (0, a.useCallback)(
                            (e = !1) => {
                                r({
                                    action: e ? ue.KeyDown : ue.Click,
                                    item: se.CloseButton,
                                    parentScreen: ae.RewardsScreen,
                                }),
                                    we(O.value),
                                    (0, q.Sy)();
                            },
                            [r, O.value],
                        ),
                        Q = (0, a.useCallback)(() => {
                            A(Hn.ShowContent), I(fe.ShowMoreRewards);
                        }, [I]),
                        J = (0, a.useCallback)(() => {
                            (d !== Hn.Finished && (g(!0), O.value === ve.Ribbon)) || Q();
                        }, [d, Q, O.value]),
                        ee = (0, a.useCallback)(
                            (e = !1) => {
                                r({
                                    action: e ? ue.KeyDown : ue.Click,
                                    item: n.getIsShopAvailable() ? se.GoToShopButton : se.ConfirmButton,
                                    parentScreen: ae.RewardsScreen,
                                }),
                                    we(O.value),
                                    t.onOpenBtnClick();
                            },
                            [t, n, r, O.value],
                        ),
                        oe = (0, a.useCallback)(() => {
                            V ? J() : X(true);
                        }, [V, J, X]);
                    var ie;
                    (ie = oe), K(Y.n.ESCAPE, ie);
                    const le = (0, a.useCallback)(() => {
                        V ? J() : ee(true);
                    }, [V, J, ee]);
                    Z({ [Y.n.ENTER]: le, [Y.n.SPACE]: le });
                    (0, a.useEffect)(() => {
                        switch (d) {
                            case Hn.ShowHeader:
                                return j(() => A(Hn.ShowContent), 1e3);
                            case Hn.ShowFooter:
                                return j(() => A(Hn.Finished), 800);
                            default:
                                return;
                        }
                    }, [d]);
                    const ce = 0 !== y && G ? `${i.O.view.pxToRem(2 * y)}rem` : '';
                    return s().createElement(
                        'div',
                        { className: p()(On.base, On[`base__${O.value}`]) },
                        s().createElement(
                            'div',
                            { className: On.bgWrapper },
                            s().createElement('div', {
                                className: On.background,
                                style: { width: ce, transform: `translateX(-${i.O.view.pxToRem(l / 5)}rem)` },
                            }),
                            s().createElement('div', {
                                className: On.foreground,
                                style: { width: ce, transform: `translateX(-${i.O.view.pxToRem(l)}rem)` },
                            }),
                            s().createElement('div', {
                                className: p()(On.vignette, On.vignette__left),
                                style: { transform: `translateX(-${i.O.view.pxToRem(l)}rem)` },
                            }),
                            G &&
                                0 !== y &&
                                s().createElement('div', {
                                    className: p()(On.vignette, On.vignette__right),
                                    style: { transform: `translateX(${i.O.view.pxToRem(y - v - l)}rem)` },
                                }),
                            !G && s().createElement('div', { className: p()(On.vignette, On.vignette__right) }),
                            s().createElement('div', { className: On.vignette_mid }),
                        ),
                        s().createElement('div', { className: On.shadow }),
                        s().createElement('div', { className: On.blackout }),
                        s().createElement('div', { className: On.gradient }),
                        m &&
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: p()(On.textButton, On.textButton__close) },
                                    s().createElement(z, {
                                        caption: In.textButton.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: () => X(),
                                    }),
                                ),
                                T &&
                                    s().createElement(
                                        'div',
                                        { className: p()(On.textButton, On.textButton__back) },
                                        s().createElement(z, {
                                            caption: In.textButton.back(),
                                            goto: In.textButton.goto(),
                                            type: 'back',
                                            side: 'left',
                                            onClick: () => I(fe.ToVehicles),
                                            classNames: { goto: On.goto },
                                        }),
                                    ),
                            ),
                        s().createElement('div', { className: On.header }, s().createElement(kn, null)),
                        d !== Hn.ShowHeader &&
                            s().createElement(
                                Fu.Provider,
                                { value: $ },
                                s().createElement(
                                    bt.Provider,
                                    { value: { areaWidth: v, setAreaWidth: f, contentWidth: w, setContentWidth: S } },
                                    s().createElement(sn, {
                                        machineState: O.value,
                                        isFirstEnter: O.context.isFirstEnter,
                                        isStoppedScrolling: C,
                                        onScrollChange: (e) => c(e),
                                        onAnimationEnd: () => {
                                            A(Hn.ShowFooter), D(O.value === ve.Ribbon);
                                        },
                                        setMaxScrollPosition: (e) => x(e),
                                    }),
                                ),
                            ),
                        (d === Hn.ShowFooter || d === Hn.Finished) &&
                            s().createElement(
                                'div',
                                { className: On.footer },
                                s().createElement(Cn, {
                                    hasMoreRewards: V,
                                    onShowMoreClick: Q,
                                    onAcceptClick: () => ee(),
                                }),
                            ),
                    );
                });
                engine.whenReady.then(() => {
                    H().render(
                        s().createElement(O, null, s().createElement(Ce, null, s().createElement(Un, null))),
                        document.getElementById('root'),
                    );
                });
            },
            5668: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => d, x: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6373),
                    s = t(3649),
                    o = t(6179),
                    i = t.n(o);
                const l = {
                        base: 'SeniorityAwardCoin_base_f6',
                        base__large: 'SeniorityAwardCoin_base__large_86',
                        base__medium: 'SeniorityAwardCoin_base__medium_f5',
                        base__small: 'SeniorityAwardCoin_base__small_a5',
                        base__extraSmall: 'SeniorityAwardCoin_base__extraSmall_a1',
                    },
                    c = R.strings.seniority_awards.specialItem;
                let E;
                !(function (e) {
                    (e.Large = 'large'), (e.Medium = 'medium'), (e.Small = 'small'), (e.ExtraSmall = 'extraSmall');
                })(E || (E = {}));
                const d = ({ size: e, count: u, isTooltipEnabled: t = !0 }) => {
                    const n = (0, s.uF)(c.header(), { count: u });
                    return i().createElement(
                        a.i,
                        { header: n, body: c.body(), isEnabled: t },
                        i().createElement('div', { className: r()(l.base, l[`base__${e}`]) }),
                    );
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
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], a = !0, s = 0; s < u.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
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
        (__webpack_require__.j = 300),
        (() => {
            var e = { 300: 0, 589: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [851], () => __webpack_require__(6224));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
