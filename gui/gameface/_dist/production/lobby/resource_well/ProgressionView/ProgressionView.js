(() => {
    var __webpack_modules__ = {
            3457: (u, e, t) => {
                'use strict';
                t.d(e, { L$: () => l.L, qE: () => l.q, u5: () => c });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7727),
                    i = t(6179),
                    s = t.n(i),
                    o = t(6880),
                    l = t(2106);
                const E = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: n,
                    disabled: E,
                    mixClass: c,
                    soundHover: A,
                    soundClick: F,
                    onMouseEnter: m,
                    onMouseMove: D,
                    onMouseDown: _,
                    onMouseUp: d,
                    onMouseLeave: C,
                    onClick: B,
                }) => {
                    const g = (0, i.useRef)(null),
                        h = (0, i.useState)(t),
                        v = h[0],
                        b = h[1],
                        w = (0, i.useState)(!1),
                        p = w[0],
                        f = w[1],
                        S = (0, i.useState)(!1),
                        T = S[0],
                        L = S[1],
                        x = (0, i.useCallback)(() => {
                            E || (g.current && (g.current.focus(), b(!0)));
                        }, [E]),
                        y = (0, i.useCallback)(
                            (u) => {
                                v && null !== g.current && !g.current.contains(u.target) && b(!1);
                            },
                            [v],
                        ),
                        k = (0, i.useCallback)(
                            (u) => {
                                E || (B && B(u));
                            },
                            [E, B],
                        ),
                        M = (0, i.useCallback)(
                            (u) => {
                                E || (null !== A && (0, r.G)(A), m && m(u), L(!0));
                            },
                            [E, A, m],
                        ),
                        N = (0, i.useCallback)(
                            (u) => {
                                D && D(u);
                            },
                            [D],
                        ),
                        O = (0, i.useCallback)(
                            (u) => {
                                E || (d && d(u), f(!1));
                            },
                            [E, d],
                        ),
                        P = (0, i.useCallback)(
                            (u) => {
                                E || (null !== F && (0, r.G)(F), _ && _(u), t && x(), f(!0));
                            },
                            [E, F, _, x, t],
                        ),
                        I = (0, i.useCallback)(
                            (u) => {
                                E || (C && C(u), f(!1));
                            },
                            [E, C],
                        ),
                        H = a()(
                            o.Z.base,
                            o.Z[`base__${n}`],
                            {
                                [o.Z.base__disabled]: E,
                                [o.Z[`base__${e}`]]: e,
                                [o.Z.base__focus]: v,
                                [o.Z.base__highlightActive]: p,
                                [o.Z.base__firstHover]: T,
                            },
                            c,
                        ),
                        W = a()(o.Z.state, o.Z.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, i.useEffect)(() => {
                            b(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: g,
                                className: H,
                                onMouseEnter: M,
                                onMouseMove: N,
                                onMouseUp: O,
                                onMouseDown: P,
                                onMouseLeave: I,
                                onClick: k,
                            },
                            n !== l.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: o.Z.back }),
                                    s().createElement('span', { className: o.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: W },
                                s().createElement('span', { className: o.Z.stateDisabled }),
                                s().createElement('span', { className: o.Z.stateHighlightHover }),
                                s().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                E.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const c = (0, i.memo)(E);
            },
            2106: (u, e, t) => {
                'use strict';
                let n, a;
                t.d(e, { L: () => n, q: () => a }),
                    (function (u) {
                        (u.main = 'main'),
                            (u.primary = 'primary'),
                            (u.primaryGreen = 'primaryGreen'),
                            (u.primaryRed = 'primaryRed'),
                            (u.secondary = 'secondary'),
                            (u.ghost = 'ghost');
                    })(n || (n = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(a || (a = {}));
            },
            2372: (u, e, t) => {
                'use strict';
                t.d(e, { A: () => i });
                var n = t(6179),
                    a = t.n(n),
                    r = t(4179);
                const i = ({ format: u, value: e }) => {
                    const t = ((u, e = 'integral') => {
                        let t;
                        t = 'gold' === e ? r.B3.GOLD : r.B3.INTEGRAL;
                        return void 0 === u ? '' : r.Z5.getNumberFormat(u, t);
                    })(e, u);
                    return t ? a().createElement('span', null, t) : null;
                };
            },
            6373: (u, e, t) => {
                'use strict';
                t.d(e, { i: () => l });
                var n = t(2056),
                    a = t(6179),
                    r = t.n(a);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (u) => {
                        let e = u.children,
                            t = u.body,
                            l = u.header,
                            E = u.note,
                            c = u.alert,
                            A = u.args,
                            F = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, i);
                        const m = (0, a.useMemo)(() => {
                            const u = Object.assign({}, A, { body: t, header: l, note: E, alert: c });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [c, t, l, E, A]);
                        return r().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((D = null == A ? void 0 : A.hasHtmlContent),
                                        D ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: m,
                                },
                                F,
                            ),
                            e,
                        );
                        var D;
                    };
            },
            2056: (u, e, t) => {
                'use strict';
                t.d(e, { u: () => l });
                var n = t(7902),
                    a = t(4179),
                    r = t(6179);
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
                function s(u) {
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
                const o = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    l = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            l = u.onMouseEnter,
                            E = u.onMouseLeave,
                            c = u.onMouseDown,
                            A = u.onClick,
                            F = u.ignoreShowDelay,
                            m = void 0 !== F && F,
                            D = u.ignoreMouseClick,
                            _ = void 0 !== D && D,
                            d = u.decoratorId,
                            C = void 0 === d ? 0 : d,
                            B = u.isEnabled,
                            g = void 0 === B || B,
                            h = u.targetId,
                            v = void 0 === h ? 0 : h,
                            b = u.onShow,
                            w = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, i);
                        const f = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, r.useMemo)(() => v || (0, n.F)().resId, [v]),
                            T = (0, r.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (o(t, C, { isMouseEvent: !0, on: !0, arguments: s(a) }, S),
                                    b && b(),
                                    (f.current.isVisible = !0));
                            }, [t, C, a, S, b]),
                            L = (0, r.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const u = f.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (f.current.timeoutId = 0)),
                                        o(t, C, { on: !1 }, S),
                                        f.current.isVisible && w && w(),
                                        (f.current.isVisible = !1);
                                }
                            }, [t, C, S, w]),
                            x = (0, r.useCallback)((u) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(f.current.prevTarget) && L();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const u = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === g && L();
                            }, [g, L]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', L),
                                    () => {
                                        window.removeEventListener('mouseleave', L), L();
                                    }
                                ),
                                [L],
                            );
                        return g
                            ? (0, r.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(T, m ? 100 : 400)),
                                                      l && l(u),
                                                      y && y(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              L(), null == E || E(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === _ && L(), null == A || A(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === _ && L(), null == c || c(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var y;
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
            527: (u, e, t) => {
                'use strict';
                t.r(e), t.d(e, { mouse: () => s, onResize: () => r });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const s = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${e}`,
                                        s = i[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, o),
                                                (u.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => i,
                    });
                var n = t(527);
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2472: (u, e, t) => {
                'use strict';
                function n(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => n });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => a });
                var n = t(5959);
                const a = { view: t(7641), client: n };
            },
            3722: (u, e, t) => {
                'use strict';
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function a(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => a });
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
            7641: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => p,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => w,
                        getScale: () => _,
                        getSize: () => A,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => v,
                        isFocused: () => g,
                        pxToRem: () => d,
                        remToPx: () => C,
                        resize: () => F,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => S,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function o(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function m(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: C(e.x), y: C(e.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function d(u) {
                    return viewEnv.pxToRem(u);
                }
                function C(u) {
                    return viewEnv.remToPx(u);
                }
                function B(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const p = Object.keys(a.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === a.W[e]), u),
                        {},
                    ),
                    f = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    S = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    s = 64,
                    o = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    l = {
                        close(u) {
                            o('popover' === u ? a : i);
                        },
                        minimize() {
                            o(s);
                        },
                        move(u) {
                            o(r, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            7902: (u, e, t) => {
                'use strict';
                t.d(e, { F: () => n });
                const n = (u = 1) => {
                    const e = new Error().stack;
                    let t,
                        n = R.invalid('resId');
                    return (
                        e &&
                            ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id)),
                        { caller: t, stack: e, resId: n }
                    );
                };
            },
            5521: (u, e, t) => {
                'use strict';
                let n, a;
                t.d(e, { n: () => n }),
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
                    })(n || (n = {})),
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
            7727: (u, e, t) => {
                'use strict';
                function n(u) {
                    engine.call('PlaySound', u);
                }
                t.d(e, { G: () => n });
            },
            3649: (u, e, t) => {
                'use strict';
                let n;
                function a(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function r(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                function i(u) {
                    return u.replace(/-/g, '_');
                }
                t.d(e, { BN: () => i, Uw: () => F, WU: () => a, uF: () => r, v2: () => n }),
                    (function (u) {
                        (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                    })(n || (n = {}));
                const s = (u, e, t) => {
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
                    l = (u, e, t = n.left) => u.split(e).reduce(t === n.left ? s : o, []),
                    E = (() => {
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
                    c = ['zh_cn', 'zh_sg', 'zh_tw'],
                    A = (u, e = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return c.includes(t)
                            ? E(u)
                            : ((u, e = n.left) => {
                                  let t = [];
                                  const a =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = u.replace(/&nbsp;/g, ' ');
                                  return l(r, /( )/, e).forEach((u) => (t = t.concat(l(u, a, n.left)))), t;
                              })(u, e);
                    },
                    F = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : A(u, e)));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var n = t(3138);
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
                        const r = n.O.view.addModelObserver(u, t, a);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
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
                t.d(e, { Sw: () => r.Z, B3: () => l, Z5: () => i, B0: () => o, ry: () => C });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                const i = {
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
                let o;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(5521),
                    m = t(3138);
                const D = ['args'];
                function _(u, e, t, n, a, r, i) {
                    try {
                        var s = u[r](i),
                            o = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(o) : Promise.resolve(o).then(n, a);
                }
                const d = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
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
                                    return new Promise(function (n, a) {
                                        var r = u.apply(e, t);
                                        function i(u) {
                                            _(r, n, a, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            _(r, n, a, i, s, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, D);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    g = () => B(o.CLOSE),
                    h = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var v = t(7572);
                const b = a.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: E,
                        TimeFormatType: c,
                        DateFormatType: A,
                        makeGlobalBoundingBox: d,
                        sendMoveEvent: (u) => B(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), r) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                E = s.y,
                                c = s.width,
                                A = s.height,
                                F = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(E) + i.y,
                                    width: m.O.view.pxToRem(c),
                                    height: m.O.view.pxToRem(A),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: d(F),
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
                            h(u, g);
                        },
                        handleViewEvent: B,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const a = Object.prototype.toString.call(e[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < a.length; e++) t[n].push({ value: u(a[e].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: i,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = w;
            },
            4448: (u, e, t) => {
                'use strict';
                var n = t(6179),
                    a = t.n(n);
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var i = t(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function l(u, e, t) {
                    const n = (function (u, e) {
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
                })(o || (o = {}));
                const E = i.O.client.getSize('rem'),
                    c = E.width,
                    A = E.height,
                    F = Object.assign({ width: c, height: A }, l(c, A, s)),
                    m = (0, n.createContext)(F),
                    D = ['children'];
                const _ = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, D);
                    const a = (0, n.useContext)(m),
                        i = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        l = a.small,
                        E = a.extraSmall,
                        c = a.extraLargeWidth,
                        A = a.largeWidth,
                        F = a.mediumWidth,
                        _ = a.smallWidth,
                        d = a.extraSmallWidth,
                        C = a.extraLargeHeight,
                        B = a.largeHeight,
                        g = a.mediumHeight,
                        h = a.smallHeight,
                        v = a.extraSmallHeight,
                        b = { extraLarge: C, large: B, medium: g, small: h, extraSmall: v };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && s) return e;
                        if (t.medium && o) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && E) return e;
                    } else {
                        if (t.extraLargeWidth && c) return r(e, t, b);
                        if (t.largeWidth && A) return r(e, t, b);
                        if (t.mediumWidth && F) return r(e, t, b);
                        if (t.smallWidth && _) return r(e, t, b);
                        if (t.extraSmallWidth && d) return r(e, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return e;
                            if (t.largeHeight && B) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && h) return e;
                            if (t.extraSmallHeight && v) return e;
                        }
                    }
                    return null;
                };
                _.defaultProps = {
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
                (0, n.memo)(_);
                const d = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    C = (0, n.memo)(({ children: u }) => {
                        const e = (0, n.useContext)(m),
                            t = (0, n.useState)(e),
                            r = t[0],
                            o = t[1],
                            E = (0, n.useCallback)((u, e) => {
                                const t = i.O.view.pxToRem(u),
                                    n = i.O.view.pxToRem(e);
                                o(Object.assign({ width: t, height: n }, l(t, n, s)));
                            }, []);
                        d(() => {
                            engine.on('clientResized', E);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', E), [E]);
                        const c = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(m.Provider, { value: c }, u);
                    });
                var B = t(6483),
                    g = t.n(B),
                    h = t(926),
                    v = t.n(h);
                let b, w, p;
                !(function (u) {
                    (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = s.small.width)] = 'Small'),
                        (u[(u.Medium = s.medium.width)] = 'Medium'),
                        (u[(u.Large = s.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.width)] = 'Small'),
                            (u[(u.Medium = s.medium.width)] = 'Medium'),
                            (u[(u.Large = s.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.height)] = 'Small'),
                            (u[(u.Medium = s.medium.height)] = 'Medium'),
                            (u[(u.Large = s.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(p || (p = {}));
                const f = () => {
                        const u = (0, n.useContext)(m),
                            e = u.width,
                            t = u.height,
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return b.ExtraLarge;
                                    case u.large:
                                        return b.Large;
                                    case u.medium:
                                        return b.Medium;
                                    case u.small:
                                        return b.Small;
                                    case u.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u),
                            r = ((u) => {
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
                                        return p.ExtraLarge;
                                    case u.largeHeight:
                                        return p.Large;
                                    case u.mediumHeight:
                                        return p.Medium;
                                    case u.smallHeight:
                                        return p.Small;
                                    case u.extraSmallHeight:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const L = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_WIDTH,
                        [w.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [w.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [p.ExtraSmall]: '',
                        [p.Small]: v().SMALL_HEIGHT,
                        [p.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [p.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    y = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL,
                        [b.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [b.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [b.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    k = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, S);
                        const r = f(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return a().createElement('div', T({ className: g()(t, L[i], x[s], y[o]) }, n), e);
                    },
                    M = ['children'];
                const N = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, M);
                    return a().createElement(C, null, a().createElement(k, t, e));
                };
                var O = t(493),
                    P = t.n(O),
                    I = t(7727);
                const H = {
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
                    W = [
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
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        $.apply(this, arguments)
                    );
                }
                class U extends a().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, I.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, I.G)(this.props.soundClick);
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
                            n = u.goto,
                            r = u.side,
                            i = u.type,
                            s = u.classNames,
                            o = u.onMouseEnter,
                            l = u.onMouseLeave,
                            E = u.onMouseDown,
                            c = u.onMouseUp,
                            A =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(u, W)),
                            F = g()(H.base, H[`base__${i}`], H[`base__${r}`], null == s ? void 0 : s.base),
                            m = g()(H.icon, H[`icon__${i}`], H[`icon__${r}`], null == s ? void 0 : s.icon),
                            D = g()(H.glow, null == s ? void 0 : s.glow),
                            _ = g()(H.caption, H[`caption__${i}`], null == s ? void 0 : s.caption),
                            d = g()(H.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            $(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== i && a().createElement('div', { className: H.shine }),
                            a().createElement('div', { className: m }, a().createElement('div', { className: D })),
                            a().createElement('div', { className: _ }, e),
                            n && a().createElement('div', { className: d }, n),
                        );
                    }
                }
                U.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var G = t(5521),
                    V = t(4179);
                const z = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function j(u = G.n.NONE, e = z, t = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== G.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t]);
                }
                var q = t(7902);
                const K = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    Y = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    Z = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    X = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = K(`${u}.${t}`, window);
                                return Y(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    Q = (u) => {
                        const e = ((u) => {
                                const e = (0, q.F)(),
                                    t = e.caller,
                                    n = e.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: Z(a, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const a = K(Z(t, `${e}.${n}`), window);
                                    return Y(a) ? (u.push(a.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    J = V.Sw.instance;
                let uu;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(uu || (uu = {}));
                const eu = (u = 'model', e = uu.Deep) => {
                    const t = (0, n.useState)(0),
                        a = (t[0], t[1]),
                        r = (0, n.useMemo)(() => (0, q.F)(), []),
                        i = r.caller,
                        s = r.resId,
                        o = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${u}` : u),
                            [i, u],
                        ),
                        l = (0, n.useState)(() =>
                            ((u) => {
                                const e = K(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return Y(e) ? e.value : e;
                            })(X(o)),
                        ),
                        E = l[0],
                        c = l[1],
                        A = (0, n.useRef)(-1);
                    return (
                        d(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? uu.Deep : uu.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== uu.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === uu.Deep
                                            ? (u === E && a((u) => u + 1), c(u))
                                            : c(Object.assign([], u));
                                    },
                                    n = Q(u);
                                A.current = J.addCallback(n, t, s, e === uu.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (e !== uu.None)
                                return () => {
                                    J.removeCallback(A.current, s);
                                };
                        }, [s, e]),
                        E
                    );
                };
                let tu;
                !(function (u) {
                    (u.mainScreen = 'mainScreen'), (u.entryPointTooltip = 'entryPointTooltip');
                })(tu || (tu = {}));
                const nu = 'App_base_97',
                    au = 'App_animationBg_5b',
                    ru = 'App_additionalBg_ab',
                    iu = 'App_aboutButton_6c',
                    su = 'App_close_f4';
                var ou = t(3649);
                const lu = 'FormatText_base_d0',
                    Eu = ({ binding: u, text: e = '', classMix: t, alignment: r = ou.v2.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  n.Fragment,
                                  null,
                                  e.split('\n').map((e, i) =>
                                      a().createElement(
                                          'div',
                                          { className: g()(lu, t), key: `${e}-${i}` },
                                          (0, ou.Uw)(e, r, u).map((u, e) =>
                                              a().createElement(n.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var cu = t(2372);
                const Au = 'EventInfo_base_7d',
                    Fu = 'EventInfo_title_d4',
                    mu = 'EventInfo_description_c5',
                    Du = R.strings.resource_well,
                    _u = ({ styleTanksCount: u, withoutStyleTanksCount: e }) =>
                        a().createElement(
                            'div',
                            { className: Au },
                            a().createElement('div', { className: Fu }, Du.commonTexts.eventTitle()),
                            a().createElement(Eu, {
                                classMix: mu,
                                text: Du.eventInfo.description(),
                                binding: {
                                    styleTanksCount: a().createElement(cu.A, { format: 'integral', value: u }),
                                    withoutStyleTanksCount: a().createElement(cu.A, { format: 'integral', value: e }),
                                },
                            }),
                        );
                let du;
                !(function (u) {
                    (u.Active = 'active'),
                        (u.Forbidden = 'forbidden'),
                        (u.NoProgress = 'noProgress'),
                        (u.NoVehicles = 'noVehicles');
                })(du || (du = {}));
                var Cu = t(6324);
                const Bu = {
                    base: 'Footer_base_41',
                    base__active: 'Footer_base__active_91',
                    topLip: 'Footer_topLip_1c',
                    topLightline: 'Footer_topLightline_24',
                };
                var gu = t(3457);
                const hu = {
                    base: 'ProgressBar_base_45',
                    base__medium: 'ProgressBar_base__medium_62',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__medium: 'ProgressBar_background__medium_6e',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let vu, bu;
                !(function (u) {
                    (u.Small = 'small'), (u.Medium = 'medium'), (u.Big = 'big'), (u.Default = 'big');
                })(vu || (vu = {})),
                    (function (u) {
                        (u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing');
                    })(bu || (bu = {}));
                const wu = ({ size: u = vu.Default }) =>
                        a().createElement('div', { className: g()(hu.background, hu[`background__${u}`]) }),
                    pu = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    fu = ({ size: u }) => {
                        const e = g()(pu.base, pu[`base__${u}`]);
                        return a().createElement('div', { className: e });
                    },
                    Su = {
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
                    Tu = (0, n.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: n, isComplete: r, withoutBounce: i }) => {
                            const s = g()(
                                    Su.base,
                                    Su[`base__${u}`],
                                    t && Su.base__disabled,
                                    r && Su.base__finished,
                                    i && Su.base__withoutBounce,
                                ),
                                o = !t && !r;
                            return a().createElement(
                                'div',
                                { className: s, style: n, ref: e },
                                a().createElement('div', { className: Su.pattern }),
                                a().createElement('div', { className: Su.gradient }),
                                o && a().createElement(fu, { size: u }),
                            );
                        },
                    ),
                    Lu = ({ size: u, value: e, lineRef: t, disabled: r, onComplete: i }) => {
                        const s = (0, n.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            o = 100 === e;
                        return (
                            (0, n.useEffect)(() => {
                                o && i && i();
                            }, [o, i]),
                            a().createElement(Tu, { size: u, disabled: r, baseStyles: s, isComplete: o, lineRef: t })
                        );
                    },
                    xu = (u, e) => {
                        let t;
                        const n = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let yu, ku;
                !(function (u) {
                    (u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End');
                })(yu || (yu = {})),
                    (function (u) {
                        (u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End');
                    })(ku || (ku = {}));
                const Mu = 'ProgressBarDeltaSimple_base_6c',
                    Nu = 'ProgressBarDeltaSimple_delta_99',
                    Ru = (0, n.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: r,
                            size: i,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const E = s < r,
                                c = (0, n.useState)(ku.Idle),
                                A = c[0],
                                F = c[1],
                                m = A === ku.In,
                                D = A === ku.End,
                                _ = A === ku.Idle,
                                d = (0, n.useCallback)(
                                    (u) => {
                                        F(u), l && l(u);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (_ && !t) {
                                    return xu(() => {
                                        d(ku.In);
                                    }, e);
                                }
                            }, [d, t, _, e]),
                                (0, n.useEffect)(() => {
                                    if (m) {
                                        return xu(() => {
                                            o && o(), d(ku.End);
                                        }, u + e);
                                    }
                                }, [d, m, o, e, u]);
                            const C = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [E ? 'left' : 'right']: '0',
                                    }),
                                    [E, e, u],
                                ),
                                B = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [E ? 'left' : 'right']: '0',
                                    }),
                                    [E, e, u],
                                ),
                                g = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(r - s)}%`, left: `${E ? s : r}%` }),
                                    [r, E, s],
                                );
                            return D
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: Mu, style: g },
                                      a().createElement(
                                          'div',
                                          { style: _ ? C : B, className: Nu },
                                          a().createElement(fu, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    Ou = (0, n.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: E,
                        }) => {
                            const c = (0, n.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, u],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Tu, {
                                    size: e,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: s,
                                    baseStyles: c,
                                }),
                                t >= 0 &&
                                    a().createElement(Ru, {
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
                    Pu = 'ProgressBarDeltaGrow_base_7e',
                    Iu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Hu = 'ProgressBarDeltaGrow_glow_68',
                    Wu = (u) => (u ? { left: 0 } : { right: 0 }),
                    $u = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    Uu = (u) => ({ transitionDuration: `${u}ms` }),
                    Gu = (0, n.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: r,
                            size: i,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: E,
                        }) => {
                            const c = s < r,
                                A = (0, n.useState)(yu.Idle),
                                F = A[0],
                                m = A[1],
                                D = F === yu.End,
                                _ = F === yu.Idle,
                                d = F === yu.Grow,
                                C = F === yu.Shrink,
                                B = (0, n.useCallback)(
                                    (u) => {
                                        m(u), l && l(u);
                                    },
                                    [l],
                                ),
                                h = (0, n.useCallback)(
                                    (u, e) =>
                                        xu(() => {
                                            B(u);
                                        }, e),
                                    [B],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return _
                                        ? h(yu.Grow, e)
                                        : d
                                          ? h(yu.Shrink, u)
                                          : C
                                            ? h(yu.End, u)
                                            : void (D && o && o());
                            }, [h, t, D, d, _, C, o, e, u]);
                            const v = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Uu(u), Wu(c)), [c, u]),
                                b = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Uu(u), Wu(c)), [c, u]),
                                w = (0, n.useMemo)(() => Object.assign({ width: '0%' }, $u(c, r), Uu(u)), [r, c, u]),
                                p = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - r)}%` }, $u(c, r), Uu(u)),
                                    [r, c, s, u],
                                );
                            if (D) return null;
                            const f = g()(Pu, E, c && 0 === s && Iu);
                            return a().createElement(
                                'div',
                                { style: _ ? w : p, className: f },
                                a().createElement(
                                    'div',
                                    { style: C ? b : v, className: Hu },
                                    a().createElement(fu, { size: i }),
                                ),
                            );
                        },
                    ),
                    Vu = (0, n.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: E,
                        }) => {
                            const c = u < t,
                                A = (0, n.useState)(!1),
                                F = A[0],
                                m = A[1],
                                D = (0, n.useCallback)(
                                    (u) => {
                                        u === yu.Shrink && m(!0), E && E(u);
                                    },
                                    [E],
                                ),
                                _ = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                d = (0, n.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, u],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Tu, {
                                    size: e,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: s,
                                    withoutBounce: c && 0 === u,
                                    baseStyles: F ? d : _,
                                }),
                                t >= 0 &&
                                    a().createElement(Gu, {
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
                    zu = ['onComplete', 'onEndAnimation'];
                function ju() {
                    return (
                        (ju =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ju.apply(this, arguments)
                    );
                }
                const qu = (0, n.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, zu);
                        const i = (0, n.useState)(!1),
                            s = i[0],
                            o = i[1],
                            l = (0, n.useCallback)(() => {
                                const u = 100 === r.to;
                                u !== s && o(u), u && e && e(), t && t();
                            }, [s, e, t, r.to]);
                        switch (r.animationSettings.type) {
                            case bu.Simple:
                                return a().createElement(Ou, ju({}, r, { onEndAnimation: l, isComplete: s }));
                            case bu.Growing:
                                return a().createElement(Vu, ju({}, r, { onEndAnimation: l, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    Ku = ['onEndAnimation'];
                function Yu() {
                    return (
                        (Yu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Yu.apply(this, arguments)
                    );
                }
                const Zu = (0, n.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, Ku);
                    const r = (0, n.useRef)({}),
                        i = (0, n.useCallback)(() => {
                            (r.current.from = void 0), e && e();
                        }, [e]),
                        s = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = s),
                        a().createElement(qu, Yu({}, t, { onEndAnimation: i, key: `${s}-${t.to}`, from: s }))
                    );
                });
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const Qu = (0, n.memo)(
                        ({
                            size: u,
                            value: e,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: i,
                            onEndAnimation: s,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (r === e)
                                return a().createElement(Lu, {
                                    key: `${r}-${e}`,
                                    size: u,
                                    value: e,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const E = {
                                from: r,
                                to: e,
                                size: u,
                                lineRef: t,
                                disabled: n,
                                animationSettings: i,
                                onComplete: l,
                                onEndAnimation: s,
                                onChangeAnimationState: o,
                            };
                            return i.withStack
                                ? a().createElement(Zu, E)
                                : a().createElement(qu, Xu({ key: `${r}-${e}` }, E));
                        },
                    ),
                    Ju = (u) => ({
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
                    ue = (u, e, t) => (t < u ? u : t > e ? e : t),
                    ee = (u, e, t) => {
                        if ('number' == typeof t) {
                            return (ue(0, e, t) / e) * 100;
                        }
                        return u;
                    },
                    te = {
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
                    ne = {
                        freezed: !1,
                        withStack: !1,
                        type: bu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ae = (0, n.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = te,
                            size: t = vu.Default,
                            animationSettings: r = ne,
                            disabled: i = !1,
                            withoutBackground: s = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: E,
                            onChangeAnimationState: c,
                            onEndAnimation: A,
                            onComplete: F,
                        }) => {
                            const m = ((u, e, t) =>
                                (0, n.useMemo)(() => {
                                    const n = (ue(0, e, u) / e) * 100;
                                    return { value: n, deltaFrom: ee(n, e, t) };
                                }, [t, e, u]))(o, u, l);
                            return a().createElement(
                                'div',
                                { className: g()(hu.base, hu[`base__${t}`]), style: Ju(e) },
                                !s && a().createElement(wu, { size: t }),
                                a().createElement(Qu, {
                                    size: t,
                                    lineRef: E,
                                    disabled: i,
                                    value: m.value,
                                    deltaFrom: m.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: A,
                                    onChangeAnimationState: c,
                                    onComplete: F,
                                }),
                            );
                        },
                    );
                var re = t(2056);
                const ie = 'ActiveState_progressionWrapper_b9',
                    se = 'ActiveState_topLine_57',
                    oe = 'ActiveState_smallTitle_06',
                    le = 'ActiveState_progressionBg_a2',
                    Ee = 'ActiveState_progressBar_24',
                    ce = 'ActiveState_minValue_aa',
                    Ae = 'ActiveState_scaleValueWrapper_91',
                    Fe = 'ActiveState_percentWrapper_80',
                    me = 'ActiveState_activePercent_53',
                    De = 'ActiveState_buttonsBlock_1b',
                    _e = 'ActiveState_activeState_78',
                    de = 'ActiveState_button_b9',
                    Ce = 'ActiveState_footerDescr_d4',
                    Be = 'ActiveState_buttonReturnBlock_f3',
                    ge = 'ActiveState_iconInfo_54',
                    he = 'ActiveState_iconInfoEmpty_b8',
                    ve = R.strings.resource_well.mainView.footer,
                    be = ({ progression: u, isSmall: e, onResourcesContribute: t, onResourcesReturn: r }) => {
                        const i = (0, n.useCallback)(() => t(), [t]),
                            s = (0, n.useCallback)(() => r(), [r]);
                        return a().createElement(
                            'div',
                            { className: _e },
                            a().createElement(
                                'div',
                                { className: ie },
                                a().createElement(
                                    'div',
                                    { className: se },
                                    a().createElement(
                                        'div',
                                        { className: oe },
                                        ve.activeState.progression.smallTitle.text(),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: Fe },
                                        a().createElement(
                                            re.u,
                                            {
                                                contentId:
                                                    R.views.lobby.resource_well.tooltips.ProgressTooltip('resId'),
                                            },
                                            a().createElement('div', { className: me }, `${u}%`),
                                        ),
                                    ),
                                ),
                                a().createElement(
                                    re.u,
                                    { contentId: R.views.lobby.resource_well.tooltips.ProgressTooltip('resId') },
                                    a().createElement(
                                        'div',
                                        { className: le },
                                        a().createElement(
                                            'div',
                                            { className: Ee },
                                            a().createElement(ae, { value: u, maxValue: 100 }),
                                        ),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Ae },
                                    a().createElement('div', { className: ce }, '0%'),
                                    a().createElement('div', null, '100%'),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: De },
                                a().createElement('div', { className: he }),
                                a().createElement(
                                    gu.u5,
                                    {
                                        type: gu.L$.main,
                                        size: e ? gu.qE.small : gu.qE.medium,
                                        onClick: i,
                                        mixClass: de,
                                    },
                                    ve.buttonChoose.text(),
                                ),
                                a().createElement(
                                    re.u,
                                    { contentId: R.views.lobby.resource_well.tooltips.RefundResourcesTooltip('resId') },
                                    a().createElement(
                                        'div',
                                        { className: Be },
                                        a().createElement(
                                            gu.u5,
                                            {
                                                type: gu.L$.ghost,
                                                size: e ? gu.qE.small : gu.qE.medium,
                                                onClick: s,
                                                mixClass: de,
                                            },
                                            ve.activeState.buttonReturn.text(),
                                        ),
                                        a().createElement('div', { className: ge }),
                                    ),
                                ),
                            ),
                            a().createElement('div', { className: Ce }, ve.description.text()),
                        );
                    },
                    we = 'Forbidden_footerTitle_8a',
                    pe = 'Forbidden_footerSubtitle_f8',
                    fe = 'Forbidden_buttonsBlock_64',
                    Se = 'Forbidden_button_b5',
                    Te = R.strings.resource_well.mainView.footer,
                    Le = ({ isSmall: u, onHangarShow: e }) => {
                        const t = (0, n.useCallback)(() => {
                            e();
                        }, [e]);
                        return a().createElement(
                            a().Fragment,
                            null,
                            a().createElement('div', { className: we }, Te.forbidden.title()),
                            a().createElement('div', { className: pe }, Te.forbidden.subTitle()),
                            a().createElement(
                                'div',
                                { className: fe },
                                a().createElement(
                                    gu.u5,
                                    {
                                        type: gu.L$.primary,
                                        size: u ? gu.qE.small : gu.qE.medium,
                                        onClick: t,
                                        mixClass: Se,
                                    },
                                    Te.backToHangar.button.text(),
                                ),
                            ),
                        );
                    },
                    xe = 'NoProgress_footerTitle_57',
                    ye = 'NoProgress_buttonsBlock_bb',
                    ke = 'NoProgress_button_46',
                    Me = 'NoProgress_footerDescr_5f',
                    Ne = R.strings.resource_well.mainView.footer,
                    Re = ({ isSmall: u, onResourcesContribute: e, vehicleName: t }) => {
                        const r = (0, n.useCallback)(() => e(), [e]);
                        return a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(Eu, {
                                classMix: xe,
                                text: Ne.noProgress.title(),
                                binding: { vehicleName: t },
                            }),
                            a().createElement(
                                'div',
                                { className: ye },
                                a().createElement(
                                    gu.u5,
                                    {
                                        type: gu.L$.main,
                                        size: u ? gu.qE.small : gu.qE.medium,
                                        onClick: r,
                                        mixClass: ke,
                                    },
                                    Ne.buttonChoose.text(),
                                ),
                            ),
                            a().createElement('div', { className: Me }, Ne.description.text()),
                        );
                    },
                    Oe = ({
                        onResourcesContribute: u,
                        onResourcesReturn: e,
                        progression: t,
                        onHangarShow: n,
                        progressionState: r,
                        vehicleName: i,
                    }) => {
                        const s = f().mediaSize,
                            o = s === b.Small || s === b.ExtraSmall,
                            l = g()(Bu.base, Bu[`base__${r}`]);
                        return a().createElement(
                            'div',
                            { className: l },
                            a().createElement('div', { className: Bu.topLip }),
                            a().createElement('div', { className: Bu.topLightline }),
                            (() => {
                                switch (r) {
                                    case du.Active:
                                        return a().createElement(be, {
                                            isSmall: o,
                                            onResourcesReturn: e,
                                            onResourcesContribute: u,
                                            progression: t,
                                        });
                                    case du.NoVehicles:
                                        return a().createElement(Cu.t, { isSmall: o, onHangarShow: n });
                                    case du.NoProgress:
                                        return a().createElement(Re, {
                                            isSmall: o,
                                            onResourcesContribute: u,
                                            vehicleName: i,
                                        });
                                    default:
                                        return a().createElement(Le, { isSmall: o, onHangarShow: n });
                                }
                            })(),
                        );
                    },
                    Pe = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    Ie = [
                        'label',
                        'isVisibleLabel',
                        'autofocus',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        He.apply(this, arguments)
                    );
                }
                let We;
                !(function (u) {
                    (u.SMALL = 'small'), (u.NORMAL = 'normal');
                })(We || (We = {}));
                const $e = (0, n.memo)((u) => {
                    let e = u.label,
                        t = u.isVisibleLabel,
                        r = void 0 !== t && t,
                        i = u.autofocus,
                        s = void 0 !== i && i,
                        o = u.soundHover,
                        l = void 0 === o ? 'highlight' : o,
                        E = u.soundClick,
                        c = void 0 === E ? 'play' : E,
                        A = u.size,
                        F = void 0 === A ? We.NORMAL : A,
                        m = u.onClick,
                        D = u.onMouseEnter,
                        _ = u.onMouseLeave,
                        d = u.onMouseDown,
                        C = u.onMouseUp,
                        B = u.onFocus,
                        h = u.onBlur,
                        v = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, Ie);
                    const b = (0, n.useState)(!1),
                        w = b[0],
                        p = b[1],
                        f = (0, n.useState)(!1),
                        S = f[0],
                        T = f[1],
                        L = (0, n.useState)(s),
                        x = L[0],
                        y = L[1],
                        k = (0, n.useRef)(null),
                        M = (0, n.useCallback)(() => {
                            k.current && (k.current.focus(), y(!0));
                        }, []),
                        N = (0, n.useCallback)(
                            (u) => {
                                x && null !== k.current && !k.current.contains(u.target) && y(!1);
                            },
                            [x],
                        );
                    (0, n.useEffect)(
                        () => (
                            document.addEventListener('mousedown', N),
                            () => {
                                document.removeEventListener('mousedown', N);
                            }
                        ),
                        [N],
                    ),
                        (0, n.useEffect)(() => {
                            y(s);
                        }, [s]);
                    const R = (0, n.useCallback)(
                            (u) => {
                                m && m(u);
                            },
                            [m],
                        ),
                        O = (0, n.useCallback)(
                            (u) => {
                                p(!0), d && d(u), c && (0, I.G)(c), s && M();
                            },
                            [s, d, M, c],
                        ),
                        P = (0, n.useCallback)(
                            (u) => {
                                p(!1), C && C(u);
                            },
                            [C],
                        ),
                        H = (0, n.useCallback)(
                            (u) => {
                                D && D(u), l && (0, I.G)(l), T(!0);
                            },
                            [D, l],
                        ),
                        W = (0, n.useCallback)(
                            (u) => {
                                p(!1), T(!1), _ && _(u);
                            },
                            [_],
                        ),
                        $ = (0, n.useCallback)(
                            (u) => {
                                y(!0), B && B(u);
                            },
                            [B],
                        ),
                        U = (0, n.useCallback)(
                            (u) => {
                                y(!1), h && h(u);
                            },
                            [h],
                        ),
                        G = g()(
                            Pe.base,
                            r && Pe.base__visibleLabel,
                            w && Pe.base__mouseDown,
                            S && Pe.base__hovered,
                            x && Pe.base__focused,
                        ),
                        V = g()(Pe.icon, Pe[`icon__${F}`]);
                    return a().createElement(
                        'div',
                        He(
                            {
                                ref: k,
                                className: G,
                                onClick: R,
                                onMouseEnter: H,
                                onMouseLeave: W,
                                onMouseDown: O,
                                onMouseUp: P,
                                onFocus: $,
                                onBlur: U,
                            },
                            v,
                        ),
                        a().createElement('div', { className: V }),
                        a().createElement('div', { className: Pe.label }, e),
                    );
                });
                var Ue = t(9356),
                    Ge = t(3371);
                const Ve = 'Tank_base_3c',
                    ze = 'Tank_tankWrapper_15',
                    je = 'Tank_tankWrapper__withStyle_e9',
                    qe = 'Tank_base__active_3b',
                    Ke = 'Tank_tankWrapper__withoutStyle_cf',
                    Ye = 'Tank_label_de',
                    Ze = 'Tank_tankLight_e1',
                    Xe = 'Tank_tankLight__withStyle_1b',
                    Qe = 'Tank_tankLight__withoutStyle_f5',
                    Je = 'Tank_tankInfoWrapper_60',
                    ut = 'Tank_dustAnimation_89',
                    et = 'Tank_dustAnimation__withStyle_47',
                    tt = 'Tank_dustAnimation__withoutStyle_83',
                    nt = 'Tank_particles_48',
                    at = 'Tank_particles__parts_ee',
                    rt = 'Tank_particles__dust_38',
                    it = 'Tank_tankInfo_7a',
                    st = 'Tank_base__top_e1',
                    ot = 'Tank_tankInfoShadow_84',
                    lt = 'Tank_info_17',
                    Et = 'Tank_preview_7a',
                    ct = 'Tank_vehicleInfo_3d',
                    At = 'Tank_vehicleInfo__disabled_8b',
                    Ft = 'Tank_styleInfo_42',
                    mt = 'Tank_infoWrapper_90',
                    Dt = 'Tank_infoText_5e',
                    _t = 'Tank_infoIcon_a3',
                    dt = 'Tank_tanksLeft_e2',
                    Ct = 'Tank_lockIcon_a0',
                    Bt = 'Tank_textInfoWrapper_b1',
                    gt = 'Tank_tanksLeftBlockedText_d4',
                    ht = 'Tank_tanksLeftText_d8',
                    vt = ({ vehiclesLeftCount: u, showCounterGlow: e }) =>
                        a().createElement(
                            'div',
                            { className: dt },
                            a().createElement(Ge.A, {
                                vehiclesLeftCount: u,
                                showCounterGlow: e,
                                usagePlace: tu.mainScreen,
                            }),
                        ),
                    bt = R.strings.resource_well,
                    wt = ({ vehiclesLeftCount: u }) =>
                        a().createElement(
                            'div',
                            { className: dt },
                            a().createElement(Ge.A, {
                                isError: !0,
                                vehiclesLeftCount: u,
                                showCounterGlow: !1,
                                usagePlace: tu.mainScreen,
                            }),
                            a().createElement('div', { className: ht }, bt.eventInfo.withoutStyle.tanksLeftText()),
                        ),
                    pt = R.strings.resource_well,
                    ft = ({ vehiclesLeftCount: u, showCounterGlow: e }) =>
                        a().createElement(
                            'div',
                            { className: dt },
                            a().createElement(Ge.A, {
                                vehiclesLeftCount: u,
                                showCounterGlow: e,
                                usagePlace: tu.mainScreen,
                            }),
                            a().createElement('div', { className: ht }, pt.eventInfo.withoutStyle.tanksLeftText()),
                        ),
                    St = R.strings.resource_well,
                    Tt = ({ regularRewardVehiclesCount: u }) =>
                        a().createElement(
                            'div',
                            { className: dt },
                            a().createElement('div', { className: Ct }),
                            a().createElement(
                                'div',
                                { className: Bt },
                                a().createElement(Eu, {
                                    classMix: gt,
                                    text: St.eventInfo.withoutStyle.blocked.textInfo(),
                                    binding: {
                                        regularRewardVehiclesCount: a().createElement(cu.A, {
                                            format: 'integral',
                                            value: u,
                                        }),
                                    },
                                }),
                            ),
                        ),
                    Lt = R.strings.resource_well,
                    xt = ({ vehiclesLeftCount: u, showCounterGlow: e }) =>
                        a().createElement(
                            'div',
                            { className: dt },
                            a().createElement(Ge.A, {
                                vehiclesLeftCount: u,
                                showCounterGlow: e,
                                usagePlace: tu.mainScreen,
                            }),
                            a().createElement('div', { className: ht }, Lt.eventInfo.top.tanksLeftText()),
                        ),
                    yt = R.strings.resource_well,
                    kt = ({
                        reward: { vehicleInfo: u, isEnabled: e, vehiclesLeftCount: t, isCountAvailable: r, isTop: i },
                        onPreview: s,
                        regularRewardVehiclesCount: o,
                    }) => {
                        const l = Boolean(e && t),
                            E = g()(Ve, l && qe, i && st),
                            c = g()(ze, i ? je : Ke),
                            A = g()(Ze, i ? Xe : Qe),
                            F = g()(ut, i ? et : tt),
                            m = g()(ct, 0 === t && At),
                            D = t <= 1e4,
                            _ = (0, n.useCallback)(() => s({ isStyled: i }), [i, s]),
                            d = a().createElement('div', { className: Ye }, yt.mainView.preview.label());
                        return a().createElement(
                            'div',
                            { className: E },
                            a().createElement(
                                'div',
                                { className: c },
                                l &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: A }),
                                        a().createElement(
                                            'div',
                                            { className: F },
                                            a().createElement('img', {
                                                className: g()(nt, rt),
                                                src: 'swf://gui/flash/animations/resourceWell/DustAni_dust.swf',
                                            }),
                                            a().createElement('img', {
                                                className: g()(nt, at),
                                                src: 'swf://gui/flash/animations/resourceWell/DustAni_parts.swf',
                                            }),
                                        ),
                                    ),
                            ),
                            a().createElement(
                                'div',
                                { className: Je },
                                a().createElement(
                                    'div',
                                    { className: it },
                                    a().createElement('div', { className: ot }),
                                    a().createElement(
                                        'div',
                                        { className: lt },
                                        a().createElement(
                                            'div',
                                            { className: Et },
                                            a().createElement($e, { onClick: _, size: We.NORMAL, label: d }),
                                        ),
                                        a().createElement(Ue.e, {
                                            vehicleInfo: u,
                                            theme: Ue.b.Progression,
                                            className: m,
                                        }),
                                        a().createElement(
                                            'div',
                                            { className: Ft },
                                            i
                                                ? a().createElement(
                                                      re.u,
                                                      {
                                                          contentId:
                                                              R.views.lobby.resource_well.tooltips.SerialNumberTooltip(
                                                                  'resId',
                                                              ),
                                                      },
                                                      a().createElement(
                                                          'div',
                                                          { className: mt },
                                                          a().createElement(
                                                              'div',
                                                              { className: Dt },
                                                              yt.eventInfo.top.styleText(),
                                                          ),
                                                          a().createElement('div', { className: _t }),
                                                      ),
                                                  )
                                                : a().createElement(
                                                      'div',
                                                      { className: Dt },
                                                      yt.eventInfo.withoutStyle.styleText(),
                                                  ),
                                        ),
                                        r
                                            ? i && l
                                                ? a().createElement(xt, { vehiclesLeftCount: t, showCounterGlow: D })
                                                : !i && l
                                                  ? a().createElement(ft, { vehiclesLeftCount: t, showCounterGlow: D })
                                                  : i || e
                                                    ? a().createElement(vt, {
                                                          vehiclesLeftCount: t,
                                                          showCounterGlow: D,
                                                      })
                                                    : a().createElement(Tt, { regularRewardVehiclesCount: o })
                                            : a().createElement(wt, { vehiclesLeftCount: t }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Mt = 'Tanks_base_82',
                    Nt = ({ onPreview: u, rewards: e, regularRewardVehiclesCount: t }) =>
                        a().createElement(
                            'div',
                            { className: Mt },
                            e.map(({ value: e }, n) =>
                                a().createElement(kt, {
                                    key: n,
                                    reward: e,
                                    onPreview: u,
                                    regularRewardVehiclesCount: t,
                                }),
                            ),
                        );
                var Rt = t(6373);
                let Ot;
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
                })(Ot || (Ot = {}));
                const Pt = 1e3,
                    It = 60,
                    Ht = 3600,
                    Wt = 86400;
                Date.now();
                const $t = () => {},
                    Ut = (u = 0, e, t = 0, a = $t) => {
                        const r = (0, n.useState)(u),
                            i = r[0],
                            s = r[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (u > 0) {
                                    s(u);
                                    const n = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const e = u - Math.floor((Date.now() - n) / Pt);
                                                null !== t && e <= t ? (s(t), a && a(), clearInterval(r)) : s(e);
                                            },
                                            (e || (u > 120 ? It : 1)) * Pt,
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [u, e, t, a]),
                            i
                        );
                    },
                    Gt = (V.Sw.instance, Ut),
                    Vt = 'TimerEntryPointTooltip_base_5a',
                    zt = 'TimerEntryPointTooltip_text_17',
                    jt = 'TimerEntryPointTooltip_lastUntil_25',
                    qt = 'TimerEntryPointTooltip_leftTime_d7',
                    Kt = R.strings.resource_well,
                    Yt = ({ isEventEndingSoon: u, leftTime: e, untilTime: t, beforeEventTime: n, startDate: r }) =>
                        a().createElement(
                            'div',
                            { className: Vt },
                            u
                                ? a().createElement(
                                      a().Fragment,
                                      null,
                                      a().createElement(
                                          'div',
                                          { className: zt },
                                          Kt.tooltips.entryPoint.timer.leftTime(),
                                      ),
                                      a().createElement('div', { className: qt }, e),
                                  )
                                : a().createElement(
                                      a().Fragment,
                                      null,
                                      a().createElement(
                                          'div',
                                          { className: zt },
                                          r
                                              ? Kt.tooltips.entryPoint.timer.timeToStart()
                                              : Kt.tooltips.entryPoint.timer.lastUntil(),
                                      ),
                                      a().createElement('div', { className: jt }, r ? n : t),
                                  ),
                        ),
                    Zt = 'TimerMainScreen_shineWrapper_3c',
                    Xt = 'TimerMainScreen_shineBg_77',
                    Qt = 'TimerMainScreen_content_24',
                    Jt = 'TimerMainScreen_text_9c',
                    un = 'TimerMainScreen_time_98',
                    en = 'TimerMainScreen_content__daysLeft_35',
                    tn = 'TimerMainScreen_content__endingSoon_f0',
                    nn = R.strings.resource_well,
                    an = ({ isEventEndingSoon: u, leftTime: e, untilTime: t, showShine: n = !0 }) => {
                        const r = g()(Qt, u ? tn : en);
                        return a().createElement(
                            a().Fragment,
                            null,
                            n &&
                                a().createElement(
                                    'div',
                                    { className: Zt },
                                    a().createElement('div', { className: Xt }),
                                ),
                            a().createElement(
                                'div',
                                { className: r },
                                a().createElement(
                                    'div',
                                    { className: Jt },
                                    u ? nn.mainView.timer.leftTime() : nn.mainView.timer.lastUntil(),
                                ),
                                a().createElement('div', { className: un }, u ? e : t),
                            ),
                        );
                    },
                    rn = { base: 'Timer_base_ca', base__entryPointTooltip: 'Timer_base__entryPointTooltip_1d' },
                    sn = R.strings.resource_well,
                    on = (u) =>
                        (0, ou.uF)(sn.mainView.timer.dayEnd(), {
                            day: u.getDate(),
                            month: R.strings.menu.dateTime.months.$num(u.getMonth() + 1),
                            time: `${u.getHours()}:${u.getMinutes() < 10 ? `0${u.getMinutes()}` : u.getMinutes()}`,
                        }),
                    ln = (u) =>
                        ((u, e = !0) =>
                            u.days > 7 && e
                                ? (0, ou.WU)(R.strings.common.duration.days(), { days: u.days })
                                : u.days >= 1
                                  ? 0 === u.hours
                                      ? (0, ou.WU)(R.strings.common.duration.days(), { days: u.days })
                                      : (0, ou.WU)(R.strings.common.duration.days(), { days: u.days + 1 })
                                  : u.hours >= 1
                                    ? 0 === u.minutes
                                        ? (0, ou.WU)(R.strings.common.duration.hours(), { hours: u.hours })
                                        : (0, ou.WU)(R.strings.common.duration.hours(), { hours: u.hours + 1 })
                                    : (0, ou.WU)(R.strings.common.duration.minutes(), { minutes: u.minutes || 1 }))(
                            (function (u = 0) {
                                let e = u;
                                const t = Math.trunc(e / Wt);
                                e -= t * Wt;
                                const n = Math.trunc(e / Ht);
                                e -= n * Ht;
                                const a = Math.trunc(e / It);
                                return (e -= a * It), { days: t, hours: n, minutes: a, seconds: e };
                            })(u),
                            !1,
                        ),
                    En = ({
                        usagePlace: u,
                        endDate: e = 0,
                        isEventEndingSoon: t = !1,
                        timeLeft: n = 0,
                        showShine: r = !1,
                        startDate: i = 0,
                    }) => {
                        const s = Gt(n),
                            o = e * Pt,
                            l = i * Pt,
                            E = (0, ou.uF)(sn.tooltips.mainView.timer.leftTime(), { leftTime: ln(s) });
                        return a().createElement(
                            Rt.i,
                            { body: E },
                            a().createElement(
                                'div',
                                { className: g()(rn.base, rn[`base__${u}`]) },
                                u === tu.entryPointTooltip
                                    ? a().createElement(Yt, {
                                          isEventEndingSoon: t,
                                          leftTime: ln(s),
                                          untilTime: on(new Date(o)),
                                          beforeEventTime: on(new Date(l)),
                                          startDate: i,
                                      })
                                    : a().createElement(an, {
                                          isEventEndingSoon: t,
                                          showShine: r && t,
                                          leftTime: ln(s),
                                          untilTime: on(new Date(o)),
                                      }),
                            ),
                        );
                    },
                    cn = () => {
                        const u = eu('model', uu.Shallow),
                            e = u.onClose,
                            t = u.endDate,
                            r = u.regularRewardVehiclesCount,
                            i = u.topRewardPlayersCount,
                            s = u.onPreview,
                            o = u.onAboutClick,
                            l = u.onResourcesContribute,
                            E = u.onResourcesReturn,
                            c = u.onHangarShow,
                            A = u.timeLeft,
                            F = u.progressionState,
                            m = u.isEventEndingSoon,
                            D = u.progression,
                            _ = u.vehicleName,
                            d = eu('model.rewards', uu.Shallow),
                            C = (0, n.useCallback)(() => o(), [o]),
                            B = (0, n.useCallback)(() => e(), [e]);
                        var g;
                        return (
                            (g = B),
                            j(G.n.ESCAPE, g),
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    'div',
                                    { className: nu },
                                    a().createElement('div', { className: ru }),
                                    a().createElement(
                                        'div',
                                        { className: iu },
                                        a().createElement(U, {
                                            caption: R.strings.resource_well.commonTexts.aboutButton(),
                                            type: 'info',
                                            onClick: C,
                                        }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: su },
                                        a().createElement(U, {
                                            caption: R.strings.resource_well.commonTexts.closeBtn(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: B,
                                        }),
                                    ),
                                    a().createElement(En, {
                                        endDate: t,
                                        isEventEndingSoon: m,
                                        timeLeft: A,
                                        usagePlace: tu.mainScreen,
                                        showShine: !0,
                                    }),
                                    a().createElement(_u, { styleTanksCount: i, withoutStyleTanksCount: r }),
                                    a().createElement(Nt, { onPreview: s, regularRewardVehiclesCount: r, rewards: d }),
                                    a().createElement(Oe, {
                                        progressionState: F,
                                        onResourcesContribute: l,
                                        onResourcesReturn: E,
                                        onHangarShow: c,
                                        progression: D,
                                        vehicleName: _,
                                    }),
                                ),
                                a().createElement('div', { className: au }),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    P().render(
                        a().createElement(N, null, a().createElement(cn, null)),
                        document.getElementById('root'),
                    );
                });
            },
            3371: (u, e, t) => {
                'use strict';
                t.d(e, { A: () => E });
                var n = t(6483),
                    a = t.n(n),
                    r = t(2372),
                    i = t(6373),
                    s = t(6179),
                    o = t.n(s);
                const l = {
                        base: 'Counter_base_8c',
                        base__entryPointTooltip: 'Counter_base__entryPointTooltip_2f',
                        counterGlow: 'Counter_counterGlow_ae',
                        base__mainScreen: 'Counter_base__mainScreen_aa',
                        counterBg: 'Counter_counterBg_d9',
                        counterNumber: 'Counter_counterNumber_8b',
                        counterNumber__less: 'Counter_counterNumber__less_8b',
                        tanksOverText: 'Counter_tanksOverText_72',
                        errorWrapper: 'Counter_errorWrapper_a2',
                        alertIcon: 'Counter_alertIcon_cf',
                        errorLines: 'Counter_errorLines_6e',
                    },
                    E = ({ vehiclesLeftCount: u, showCounterGlow: e, usagePlace: t, isError: n = !1 }) => {
                        const s = Boolean(u),
                            E = a()(l.counterNumber, u <= 1e4 && l.counterNumber__less),
                            c = a()(l.base, l[`base__${t}`]);
                        return o().createElement(
                            'div',
                            { className: c },
                            e && s && o().createElement('div', { className: l.counterGlow }),
                            n
                                ? o().createElement(
                                      'div',
                                      { className: l.counterBg },
                                      o().createElement(
                                          i.i,
                                          {
                                              ignoreMouseClick: !0,
                                              body: R.strings.resource_well.tooltips.counter.error.text(),
                                          },
                                          o().createElement(
                                              'div',
                                              { className: l.errorWrapper },
                                              o().createElement('div', { className: l.alertIcon }),
                                              o().createElement('div', { className: l.errorLines }, '------'),
                                          ),
                                      ),
                                  )
                                : o().createElement(
                                      'div',
                                      { className: l.counterBg },
                                      s
                                          ? o().createElement(
                                                i.i,
                                                {
                                                    ignoreMouseClick: !0,
                                                    body: R.strings.resource_well.tooltips.counter.warning.text(),
                                                },
                                                o().createElement(
                                                    'div',
                                                    { className: E },
                                                    o().createElement(r.A, { format: 'integral', value: u }),
                                                ),
                                            )
                                          : o().createElement(
                                                'div',
                                                { className: l.tanksOverText },
                                                R.strings.resource_well.eventInfo.tanksOver(),
                                            ),
                                  ),
                        );
                    };
            },
            6324: (u, e, t) => {
                'use strict';
                t.d(e, { t: () => c });
                var n = t(3457),
                    a = t(6179),
                    r = t.n(a);
                const i = 'NoVehiclesState_footerTitle_e9',
                    s = 'NoVehiclesState_footerSubtitle_3e',
                    o = 'NoVehiclesState_buttonsBlock_83',
                    l = 'NoVehiclesState_button_86',
                    E = R.strings.resource_well.mainView.footer,
                    c = ({ isSmall: u, onHangarShow: e }) => {
                        const t = (0, a.useCallback)(() => {
                            e();
                        }, [e]);
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement('div', { className: i }, E.noVehicles.title()),
                            r().createElement('div', { className: s }, E.noVehicles.subTitle()),
                            r().createElement(
                                'div',
                                { className: o },
                                r().createElement(
                                    n.u5,
                                    { type: n.L$.primary, size: u ? n.qE.small : n.qE.medium, onClick: t, mixClass: l },
                                    E.backToHangar.button.text(),
                                ),
                            ),
                        );
                    };
            },
            9356: (u, e, t) => {
                'use strict';
                t.d(e, { b: () => A, e: () => F });
                var n = t(6483),
                    a = t.n(n);
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    i = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function s(u) {
                    let e = '';
                    for (let t = i.length - 1; t >= 0; t--) for (; u >= i[t]; ) (e += r[t]), (u -= i[t]);
                    return e;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                var o = t(3649),
                    l = t(6179),
                    E = t.n(l);
                const c = {
                    base: 'VehicleInfo_base_28',
                    base__intro: 'VehicleInfo_base__intro_e5',
                    base__progression: 'VehicleInfo_base__progression_85',
                    type: 'VehicleInfo_type_e7',
                    base__award: 'VehicleInfo_base__award_e7',
                    ico: 'VehicleInfo_ico_c9',
                };
                let A;
                !(function (u) {
                    (u.Intro = 'intro'), (u.Award = 'award'), (u.Progression = 'progression');
                })(A || (A = {}));
                const F = ({ vehicleInfo: u, theme: e, className: t }) => {
                    const n = u.vehicleLvl,
                        r = u.vehicleName,
                        i = u.vehicleType,
                        l = u.isElite;
                    return E().createElement(
                        'div',
                        { className: a()(c.base, c[`base__${e}`], t) },
                        s(n),
                        E().createElement(
                            'div',
                            { className: c.type, lang: R.strings.settings.LANGUAGE_CODE() },
                            E().createElement('div', {
                                className: c.ico,
                                style: (() => {
                                    const u = (0, o.BN)(i);
                                    return {
                                        backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${u}${l ? '_elite' : ''}`)})`,
                                    };
                                })(),
                            }),
                        ),
                        r,
                    );
                };
            },
            6880: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                const n = {
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
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, n] = deferred[o], r = !0, i = 0; i < e.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, n];
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
        (__webpack_require__.j = 328),
        (() => {
            var u = { 328: 0, 21: 0, 784: 0, 434: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, i, s] = t,
                        o = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (e && e(t); o < r.length; o++)
                        (a = r[o]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [52], () => __webpack_require__(4448));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
