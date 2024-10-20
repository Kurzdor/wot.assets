(() => {
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var r = t(6483),
                    n = t.n(r),
                    a = t(7727),
                    s = t(6179),
                    i = t.n(s),
                    o = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: c,
                    mixClass: _,
                    soundHover: m,
                    soundClick: d,
                    onMouseEnter: E,
                    onMouseMove: A,
                    onMouseDown: D,
                    onMouseUp: F,
                    onMouseLeave: p,
                    onClick: g,
                }) => {
                    const C = (0, s.useRef)(null),
                        h = (0, s.useState)(t),
                        B = h[0],
                        b = h[1],
                        f = (0, s.useState)(!1),
                        v = f[0],
                        S = f[1],
                        w = (0, s.useState)(!1),
                        x = w[0],
                        y = w[1],
                        M = (0, s.useCallback)(() => {
                            c || (C.current && (C.current.focus(), b(!0)));
                        }, [c]),
                        N = (0, s.useCallback)(
                            (e) => {
                                B && null !== C.current && !C.current.contains(e.target) && b(!1);
                            },
                            [B],
                        ),
                        T = (0, s.useCallback)(
                            (e) => {
                                c || (g && g(e));
                            },
                            [c, g],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                c || (null !== m && (0, a.G)(m), E && E(e), y(!0));
                            },
                            [c, m, E],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                c || (F && F(e), S(!1));
                            },
                            [c, F],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (null !== d && (0, a.G)(d), D && D(e), t && M(), S(!0));
                            },
                            [c, d, D, M, t],
                        ),
                        k = (0, s.useCallback)(
                            (e) => {
                                c || (p && p(e), S(!1));
                            },
                            [c, p],
                        ),
                        H = n()(
                            o.Z.base,
                            o.Z[`base__${r}`],
                            {
                                [o.Z.base__disabled]: c,
                                [o.Z[`base__${u}`]]: u,
                                [o.Z.base__focus]: B,
                                [o.Z.base__highlightActive]: v,
                                [o.Z.base__firstHover]: x,
                            },
                            _,
                        ),
                        U = n()(o.Z.state, o.Z.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', N),
                                () => {
                                    document.removeEventListener('mousedown', N);
                                }
                            ),
                            [N],
                        ),
                        (0, s.useEffect)(() => {
                            b(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: C,
                                className: H,
                                onMouseEnter: L,
                                onMouseMove: P,
                                onMouseUp: I,
                                onMouseDown: O,
                                onMouseLeave: k,
                                onClick: T,
                            },
                            r !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: o.Z.back }),
                                    i().createElement('span', { className: o.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: U },
                                i().createElement('span', { className: o.Z.stateDisabled }),
                                i().createElement('span', { className: o.Z.stateHighlightHover }),
                                i().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _ = (0, s.memo)(c);
            },
            2106: (e, u, t) => {
                'use strict';
                let r, n;
                t.d(u, { L: () => r, q: () => n }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(r || (r = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(n || (n = {}));
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var r = t(6179),
                    n = t.n(r),
                    a = t(6483),
                    s = t.n(a),
                    i = t(3649),
                    o = t(5287);
                const l = ({ binding: e, text: u = '', classMix: t, alignment: a = i.v2.left }) =>
                    null === u
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : n().createElement(
                              r.Fragment,
                              null,
                              u.split('\n').map((u, l) =>
                                  n().createElement(
                                      'div',
                                      { className: s()(o.Z.base, t), key: `${u}-${l}` },
                                      (0, i.Uw)(u, a, e).map((e, u) =>
                                          n().createElement(r.Fragment, { key: `${u}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
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
            3532: (e) => {
                e.exports = {
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
            5167: (e, u, t) => {
                const r = t(3532),
                    n = t(9887);
                e.exports = Object.assign({}, r, n, { colors: r, spacings: n });
            },
            9887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            7044: (e, u, t) => {
                'use strict';
                t(3649), t(728), t(4179);
                Date.now();
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u), t.d(u, { mouse: () => i, onResize: () => a });
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const i = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${u}`,
                                        i = s[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        r(),
                                        () => {
                                            n &&
                                                (i(),
                                                window.removeEventListener(a, o),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => s,
                    });
                var r = t(527);
                function n(e = 'px') {
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
            1176: (e, u, t) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            2472: (e, u, t) => {
                'use strict';
                function r(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => r });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var r = t(2472);
                const n = {
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => v,
                        events: () => a.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => D,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => B,
                        isFocused: () => C,
                        pxToRem: () => F,
                        remToPx: () => p,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => w,
                    });
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    s = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function E(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: p(u.x), y: p(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    S = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? n : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => r });
                const r = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        r = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (r = window.subViews[t].id)),
                        { caller: t, stack: u, resId: r }
                    );
                };
            },
            8071: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => r });
                const r = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
            },
            2344: (e, u, t) => {
                'use strict';
                t.d(u, { DA: () => r.D, tT: () => r.t });
                t(2790), t(3469), t(2133), t(579);
                var r = t(5360);
                t(9056);
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var r = t(6179);
                const n = (e) => {
                    const u = (0, r.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            3469: (e, u, t) => {
                'use strict';
                t(7044), t(6179);
            },
            2133: (e, u, t) => {
                'use strict';
                t(6179);
            },
            5360: (e, u, t) => {
                'use strict';
                t.d(u, { D: () => c, t: () => _ });
                var r = t(7902),
                    n = t(8071),
                    a = t(6536),
                    s = t(4179),
                    i = t(7332),
                    o = t(6179);
                const l = s.Sw.instance;
                let c;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(c || (c = {}));
                const _ = (e = 'model', u = c.Deep) => {
                    const t = (0, o.useState)(0),
                        s = (t[0], t[1]),
                        _ = (0, o.useMemo)(() => (0, r.F)(), []),
                        m = _.caller,
                        d = _.resId,
                        E = (0, o.useMemo)(
                            () => (window.__feature && window.__feature !== m ? `subViews.${m}.${e}` : e),
                            [m, e],
                        ),
                        A = (0, o.useState)(() =>
                            ((e) => {
                                const u = (0, n.M)(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return (0, i.os)(u) ? u.value : u;
                            })((0, i.Gd)(E)),
                        ),
                        D = A[0],
                        F = A[1],
                        p = (0, o.useRef)(-1);
                    return (
                        (0, a.Z)(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? c.Deep : c.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== c.None)
                            ) {
                                const t = (e) => {
                                        (0, i.kJ)(e) && u === c.Deep
                                            ? (e === D && s((e) => e + 1), F(e))
                                            : F(Object.assign([], e));
                                    },
                                    r = (0, i.U0)(e);
                                p.current = l.addCallback(r, t, d, u === c.Deep);
                            }
                        }),
                        (0, o.useEffect)(() => {
                            if (u !== c.None)
                                return () => {
                                    l.removeCallback(p.current, d);
                                };
                        }, [d, u]),
                        D
                    );
                };
            },
            9056: (e, u, t) => {
                'use strict';
                var r = t(4179);
                t(6179);
                r.Sw.instance;
            },
            2790: (e, u, t) => {
                'use strict';
                t(6179);
            },
            579: (e, u, t) => {
                'use strict';
                t(3138), t(6179);
            },
            5521: (e, u, t) => {
                'use strict';
                let r, n;
                t.d(u, { n: () => r }),
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
                    })(n || (n = {}));
            },
            3368: () => {
                !(function () {
                    let e,
                        u,
                        t,
                        r,
                        n,
                        a,
                        s,
                        i = -1;
                    document.addEventListener('mousedown', (t) => {
                        document.getSelection().empty(),
                            t.target.select &&
                                -1 === i &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === i && t.target.select && t.target === e && (i = e.selectionStart), i > -1)) {
                                const r = Math.min(Math.max(t.x, u.left), u.right),
                                    n = Math.min(Math.max(t.y, u.top), u.bottom),
                                    a = document.createEvent('MouseEvent');
                                a.initMouseEvent('mousedown', !0, !0, null, 1, r, n, r, n, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(a);
                                const s = e.selectionEnd;
                                s > i ? e.setSelectionRange(i, s, 'forward') : e.setSelectionRange(s, i, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (i = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (t = e.target),
                                (r = e.target.value),
                                (n = t.selectionStart),
                                (a = -1 !== r.lastIndexOf(' ', n) ? r.lastIndexOf(' ', n) + 1 : 0),
                                (s = -1 !== r.indexOf(' ', n) ? r.indexOf(' ', n) : r.length),
                                t.setSelectionRange(a, s, 'forward'));
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
            7727: (e, u, t) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { G: () => r });
            },
            3649: (e, u, t) => {
                'use strict';
                let r;
                t.d(u, { Uw: () => _, v2: () => r, z4: () => n }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(r || (r = {}));
                const n = (e) => e.replace(/&nbsp;/g, ' '),
                    a = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    s = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    i = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? a : s, []),
                    o = (() => {
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
                    l = ['zh_cn', 'zh_sg', 'zh_tw'],
                    c = (e, u = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return l.includes(t)
                            ? o(e)
                            : ((e, u = r.left) => {
                                  let t = [];
                                  const a =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      s = n(e);
                                  return i(s, /( )/, u).forEach((e) => (t = t.concat(i(e, a, r.left)))), t;
                              })(e, u);
                    },
                    _ = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : c(e, u)));
            },
            728: (e, u, t) => {
                'use strict';
                let r;
                !(function (e) {
                    (e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year');
                })(r || (r = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(3138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, t, n);
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
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
                t.d(u, { Sw: () => a.Z, B3: () => l, Z5: () => s, B0: () => o, ry: () => p, Sy: () => C });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                const n = r;
                var a = t(1358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    E = t(3138);
                const A = ['args'];
                function D(e, u, t, r, n, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(r, n);
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
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            D(a, r, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            D(a, r, n, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, A);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    C = () => g(o.CLOSE),
                    h = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var B = t(7572);
                const b = n.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: B.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: m,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => g(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                _ = i.width,
                                m = i.height,
                                d = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(_),
                                    height: E.O.view.pxToRem(m),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(d),
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
                            h(e, C);
                        },
                        handleViewEvent: g,
                        onBindingsReady: p,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const n = Object.prototype.toString.call(u[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < n.length; u++) t[r].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = f;
            },
            7332: (e, u, t) => {
                'use strict';
                t.d(u, { Gd: () => o, U0: () => l, kJ: () => s, os: () => a });
                var r = t(7902),
                    n = t(8071);
                const a = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    s = (e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name,
                    i = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    o = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const r = (0, n.M)(`${e}.${t}`, window);
                                return a(r) ? u(e, t, r) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    l = (e) => {
                        const u = ((e) => {
                                const u = (0, r.F)(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: i(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            s = e.split('.');
                        if (s.length > 0) {
                            const e = [s[0]];
                            return (
                                s.reduce((u, r) => {
                                    const s = (0, n.M)(i(t, `${u}.${r}`), window);
                                    return a(s) ? (e.push(s.id), `${u}.${r}.value`) : (e.push(r), `${u}.${r}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
            },
            6840: (e, u, t) => {
                'use strict';
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => Te,
                        Bar: () => ye,
                        DefaultScroll: () => Ne,
                        Direction: () => me,
                        defaultSettings: () => de,
                        useHorizontalScrollApi: () => Fe,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => Ke, Bar: () => je, Default: () => qe, useVerticalScrollApi: () => Ae });
                var a = t(6179),
                    s = t.n(a);
                const i = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function _(e, u, t) {
                    const r = (function (e, u) {
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
                        n = (function (e, u) {
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
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
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
                const m = o.O.client.getSize('rem'),
                    d = m.width,
                    E = m.height,
                    A = Object.assign({ width: d, height: E }, _(d, E, l)),
                    D = (0, a.createContext)(A),
                    F = ['children'];
                const p = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, F);
                    const r = (0, a.useContext)(D),
                        n = r.extraLarge,
                        s = r.large,
                        o = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        _ = r.extraLargeWidth,
                        m = r.largeWidth,
                        d = r.mediumWidth,
                        E = r.smallWidth,
                        A = r.extraSmallWidth,
                        p = r.extraLargeHeight,
                        g = r.largeHeight,
                        C = r.mediumHeight,
                        h = r.smallHeight,
                        B = r.extraSmallHeight,
                        b = { extraLarge: p, large: g, medium: C, small: h, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && _) return i(u, t, b);
                        if (t.largeWidth && m) return i(u, t, b);
                        if (t.mediumWidth && d) return i(u, t, b);
                        if (t.smallWidth && E) return i(u, t, b);
                        if (t.extraSmallWidth && A) return i(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && p) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && h) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                };
                p.defaultProps = {
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
                (0, a.memo)(p);
                var g = t(6536);
                const C = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(D),
                        t = (0, a.useState)(u),
                        r = t[0],
                        n = t[1],
                        i = (0, a.useCallback)((e, u) => {
                            const t = o.O.view.pxToRem(e),
                                r = o.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: r }, _(t, r, l)));
                        }, []);
                    (0, g.Z)(() => {
                        engine.on('clientResized', i);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', i), [i]);
                    const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return s().createElement(D.Provider, { value: c }, e);
                });
                var h = t(6483),
                    B = t.n(h),
                    b = t(926),
                    f = t.n(b);
                let v, S, w;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(S || (S = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const x = () => {
                        const e = (0, a.useContext)(D),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return v.ExtraLarge;
                                    case e.large:
                                        return v.Large;
                                    case e.medium:
                                        return v.Medium;
                                    case e.small:
                                        return v.Small;
                                    case e.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return S.ExtraLarge;
                                    case e.largeWidth:
                                        return S.Large;
                                    case e.mediumWidth:
                                        return S.Medium;
                                    case e.smallWidth:
                                        return S.Small;
                                    case e.extraSmallWidth:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return w.ExtraLarge;
                                    case e.largeHeight:
                                        return w.Large;
                                    case e.mediumHeight:
                                        return w.Medium;
                                    case e.smallHeight:
                                        return w.Small;
                                    case e.extraSmallHeight:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const N = {
                        [S.ExtraSmall]: '',
                        [S.Small]: f().SMALL_WIDTH,
                        [S.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [S.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [S.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [w.ExtraSmall]: '',
                        [w.Small]: f().SMALL_HEIGHT,
                        [w.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [w.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [v.ExtraSmall]: '',
                        [v.Small]: f().SMALL,
                        [v.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [v.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [v.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    P = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, y);
                        const n = x(),
                            a = n.mediaWidth,
                            i = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', M({ className: B()(t, N[a], T[i], L[o]) }, r), u);
                    },
                    I = ['children'];
                const O = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, I);
                    return s().createElement(C, null, s().createElement(P, t, u));
                };
                var k = t(493),
                    H = t.n(k),
                    U = t(7727);
                const W = {
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
                    G = [
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
                function V() {
                    return (
                        (V =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        V.apply(this, arguments)
                    );
                }
                class z extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, U.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, U.G)(this.props.soundClick);
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
                            r = e.goto,
                            n = e.side,
                            a = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, G)),
                            d = B()(W.base, W[`base__${a}`], W[`base__${n}`], null == i ? void 0 : i.base),
                            E = B()(W.icon, W[`icon__${a}`], W[`icon__${n}`], null == i ? void 0 : i.icon),
                            A = B()(W.glow, null == i ? void 0 : i.glow),
                            D = B()(W.caption, W[`caption__${a}`], null == i ? void 0 : i.caption),
                            F = B()(W.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            V(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== a && s().createElement('div', { className: W.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: D }, u),
                            r && s().createElement('div', { className: F }, r),
                        );
                    }
                }
                let $;
                (z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.Active = 'active'), (e.NoProgress = 'noProgress'), (e.NoVehicles = 'noVehicles');
                    })($ || ($ = {}));
                var X = t(2344),
                    j = t(5521),
                    Y = t(4179);
                const q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function K(e = j.n.NONE, u = q, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== j.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                const Z = 'resources_well_progress_click_up',
                    Q = 'resources_well_progress_click_down',
                    J = 'bp_highlight';
                var ee = t(8288);
                const ue = 'App_base_a8',
                    te = 'App_close_e1',
                    re = 'App_counter_63',
                    ne = (e, u, t) => (t < e ? e : t > u ? u : t),
                    ae = (e) => {
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
                    };
                function se(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return ie(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ie(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ie(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const oe = [];
                function le(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), oe)
                    );
                }
                function ce(e, u, t) {
                    const r = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, r) {
                                let n,
                                    a = !1,
                                    s = 0;
                                function i() {
                                    n && clearTimeout(n);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function _() {
                                        (s = Date.now()), t.apply(l, o);
                                    }
                                    a ||
                                        (r && !n && _(),
                                        i(),
                                        void 0 === r && c > e
                                            ? _()
                                            : !0 !== u &&
                                              (n = setTimeout(
                                                  r
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : _,
                                                  void 0 === r ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                    (o.cancel = function () {
                                        i(), (a = !0);
                                    }),
                                    o
                                );
                            })(t, e),
                        u,
                    );
                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                }
                var _e = t(7030);
                let me;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(me || (me = {}));
                const de = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ee = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return ne(n, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                _ = void 0 === c ? de : c,
                                m = (0, a.useRef)(null),
                                d = (0, a.useRef)(null),
                                E = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (var r, n = se(u(e).values()); !(r = n()).done; ) (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                A = ce(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, _e.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), E.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                F = D[0],
                                p = D[1],
                                g = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = F.scrollPosition.get(),
                                            a = (null != (r = F.scrollPosition.goal) ? r : 0) - n;
                                        return i(e, u * t + a + n);
                                    },
                                    [F.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = m.current;
                                        r &&
                                            p.start({
                                                scrollPosition: i(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: _.animationConfig,
                                                from: { scrollPosition: i(r, F.scrollPosition.get()) },
                                            });
                                    },
                                    [p, _.animationConfig, F.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = d.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, _.step),
                                            a = g(u, e, r);
                                        C(a);
                                    },
                                    [C, g, _.step],
                                ),
                                B = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && h(r(e)),
                                            m.current && E.trigger('mouseWheel', e, F.scrollPosition, u(m.current));
                                    },
                                    [F.scrollPosition, h, E],
                                ),
                                b = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        ae(() => {
                                            const e = m.current;
                                            e &&
                                                (C(i(e, F.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [C, F.scrollPosition.goal],
                                ),
                                f = le(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = i(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && C(u, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', b),
                                    () => {
                                        window.removeEventListener('resize', b);
                                    }
                                ),
                                [b],
                            );
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? n(d.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? u(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: _.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: B,
                                    applyScroll: C,
                                    applyStepTo: h,
                                    contentRef: m,
                                    wrapperRef: d,
                                    scrollPosition: p,
                                    animationScroll: F,
                                    recalculateContent: f,
                                    events: { on: E.on, off: E.off },
                                }),
                                [F.scrollPosition, C, h, E.off, E.on, f, B, p, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Ae = Ee({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? me.Next : me.Prev),
                    });
                function De(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        n,
                    ];
                }
                const Fe = Ee({
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
                        getDirection: (e) => (e.deltaY > 1 ? me.Next : me.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    pe = 'HorizontalBar_base_49',
                    ge = 'HorizontalBar_base__nonActive_82',
                    Ce = 'HorizontalBar_leftButton_5f',
                    he = 'HorizontalBar_rightButton_03',
                    Be = 'HorizontalBar_track_0d',
                    be = 'HorizontalBar_thumb_fd',
                    fe = 'HorizontalBar_rail_32',
                    ve = 'disable',
                    Se = { pending: !1, offset: 0 },
                    we = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    xe = () => {},
                    Re = (e, u) => Math.max(20, e.offsetWidth * u),
                    ye = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = we, onDrag: r = xe }) => {
                        const n = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, a.useState)(Se),
                            d = m[0],
                            E = m[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            D = () => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    _ = ne(0, 1, a / (n - r)),
                                    m = (u.offsetWidth - Re(u, s)) * _;
                                (t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return i.current.classList.add(ve), void o.current.classList.remove(ve);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(ve), void o.current.classList.add(ve);
                                            var u, t;
                                            i.current.classList.remove(ve), o.current.classList.remove(ve);
                                        }
                                    })(m);
                            },
                            F = le(() => {
                                (() => {
                                    const u = c.current,
                                        t = l.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const s = Math.min(1, r / a);
                                    (u.style.width = `${Re(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(ge) : n.current.classList.remove(ge));
                                })(),
                                    D();
                            });
                        (0, a.useEffect)(() => ae(F)),
                            (0, a.useEffect)(
                                () =>
                                    ae(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = xe;
                                        const r = () => {
                                            t(), (t = ae(F));
                                        };
                                        return (
                                            e.events.on('recalculateContent', F),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', F),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!d.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = l.current,
                                            s = c.current;
                                        if (!n || !a || !s) return;
                                        const i = u.screenX - d.offset - a.getBoundingClientRect().x,
                                            o = (i / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: o });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(Se);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, d.offset, d.pending, r, A]);
                        const p = De((u) => e.applyStepTo(u), _, [e]),
                            g = p[0],
                            C = p[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const h = (e) => {
                            e.target.classList.contains(ve) || (0, U.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()(pe, u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()(Ce, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ve) || 0 !== e.button || ((0, U.G)('play'), g(me.Next));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()(Be, u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        if (r && 0 === u.button)
                                            if (((0, U.G)('play'), u.target === r))
                                                A({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const r = c.current,
                                                        n = e.contentRef.current;
                                                    if (!r || !n) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > r.getBoundingClientRect().x ? me.Prev : me.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: c, className: B()(be, u.thumb) }),
                                s().createElement('div', { className: B()(fe, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: B()(he, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ve) || 0 !== e.button || ((0, U.G)('play'), g(me.Prev));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Me = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ne = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: B()(Me.base, e.base) });
                            }, [r]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: B()(Me.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Me.defaultScrollArea, n) },
                                s().createElement(Te, { className: o, api: m, classNames: i }, e),
                            ),
                            s().createElement(ye, { getStepByRailClick: l, api: u, onDrag: c, classNames: _ }),
                        );
                    },
                    Te = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => ae(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(Me.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: B()(Me.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: B()(Me.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (Te.Bar = ye),
                    (Te.Default = Ne),
                    (Te.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => ae(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(Me.base, u) },
                            s().createElement(
                                'div',
                                { className: B()(Me.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: B()(Me.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    ));
                const Le = 'VerticalBar_base_f3',
                    Pe = 'VerticalBar_base__nonActive_42',
                    Ie = 'VerticalBar_topButton_d7',
                    Oe = 'VerticalBar_bottomButton_06',
                    ke = 'VerticalBar_track_df',
                    He = 'VerticalBar_thumb_32',
                    Ue = 'VerticalBar_rail_43',
                    We = 'disable',
                    Ge = () => {},
                    Ve = { pending: !1, offset: 0 },
                    ze = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    $e = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Xe = (e, u) => Math.max(20, e.offsetHeight * u),
                    je = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = ze, onDrag: r = Ge }) => {
                        const n = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, a.useState)(Ve),
                            d = m[0],
                            E = m[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            D = le(() => {
                                const u = c.current,
                                    t = l.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const s = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${Xe(t, s)}px`),
                                    u.classList.add(He),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(Pe) : n.current.classList.remove(Pe)),
                                    s
                                );
                            }),
                            F = le(() => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    _ = ne(0, 1, a / (n - r)),
                                    m = (u.offsetHeight - Xe(u, s)) * _;
                                (t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return i.current.classList.add(We), void o.current.classList.remove(We);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(We), void o.current.classList.add(We);
                                            var u, t;
                                            i.current.classList.remove(We), o.current.classList.remove(We);
                                        }
                                    })(m);
                            }),
                            p = le(() => {
                                $e(e, () => {
                                    D(), F();
                                });
                            });
                        (0, a.useEffect)(() => ae(p)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    $e(e, () => {
                                        F();
                                    });
                                };
                                let t = Ge;
                                const r = () => {
                                    t(), (t = ae(p));
                                };
                                return (
                                    e.events.on('recalculateContent', p),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', p),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!d.pending) return;
                                const u = (u) => {
                                        $e(e, (t) => {
                                            const n = l.current,
                                                a = c.current,
                                                s = e.getContainerSize();
                                            if (!n || !a || !s) return;
                                            const i = u.screenY - d.offset - n.getBoundingClientRect().y,
                                                o = (i / n.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: o });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(Ve);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, d.offset, d.pending, r, A]);
                        const g = De((u) => e.applyStepTo(u), _, [e]),
                            C = g[0],
                            h = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const b = (e) => {
                            e.target.classList.contains(We) || (0, U.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()(Le, u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()(Ie, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(We) || 0 !== e.button || ((0, U.G)('play'), C(me.Next));
                                },
                                ref: i,
                                onMouseEnter: b,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()(ke, u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        if (r && 0 === u.button)
                                            if (((0, U.G)('play'), u.target === r))
                                                A({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    c.current &&
                                                        $e(e, (r) => {
                                                            if (!r) return;
                                                            const n = t(e),
                                                                a = e.clampPosition(r, r.scrollTop + n * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > r.getBoundingClientRect().y ? me.Prev : me.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: c, className: u.thumb }),
                                s().createElement('div', { className: B()(Ue, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: B()(Oe, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(We) || 0 !== e.button || ((0, U.G)('play'), C(me.Prev));
                                },
                                onMouseUp: h,
                                ref: o,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    Ye = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    qe = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: B()(Ye.base, e.base) });
                            }, [r]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: B()(Ye.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Ye.area, n) },
                                s().createElement(Ke, { className: i, classNames: o, api: m }, e),
                            ),
                            s().createElement(je, { getStepByRailClick: l, api: u, onDrag: c, classNames: _ }),
                        );
                    },
                    Ke = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => ae(r.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(Ye.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Ye.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                Ke.Default = qe;
                const Ze = { Vertical: n, Horizontal: r },
                    Qe = (0, a.createContext)({}),
                    Je = ({ children: e }) => {
                        const u = (0, a.useState)({}),
                            t = u[0],
                            r = u[1],
                            n = (0, a.useState)({}),
                            i = n[0],
                            o = n[1],
                            l = (0, a.useState)({}),
                            c = l[0],
                            _ = l[1],
                            m = (0, a.useState)(0),
                            d = m[0],
                            E = m[1],
                            A = (0, a.useState)(),
                            D = A[0],
                            F = A[1],
                            p = (0, a.useState)(0),
                            g = p[0],
                            C = p[1],
                            h = (0, a.useState)(!1),
                            B = h[0],
                            b = h[1],
                            f = (0, a.useState)(!1),
                            v = f[0],
                            S = f[1];
                        return s().createElement(
                            Qe.Provider,
                            {
                                value: {
                                    progression: d,
                                    setProgression: E,
                                    prevProgression: D,
                                    setPrevProgression: F,
                                    delta: g,
                                    setDelta: C,
                                    resources: t,
                                    setResources: r,
                                    resourcesAnimated: i,
                                    setResourcesAnimated: o,
                                    isAnimationEnabled: B,
                                    setIsAnimationEnabled: b,
                                    isCardAnimationEnabled: v,
                                    setIsCardAnimationEnabled: S,
                                    tabsAnimated: c,
                                    setTabsAnimated: _,
                                },
                            },
                            e,
                        );
                    },
                    eu = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            t = 'gold' === u ? Y.B3.GOLD : Y.B3.INTEGRAL;
                            return void 0 === e ? '' : Y.Z5.getNumberFormat(e, t);
                        })(u, e);
                        return t ? s().createElement('span', null, t) : null;
                    };
                var uu = t(280),
                    tu = t(3649);
                let ru, nu, au, su, iu, ou, lu;
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
                })(ru || (ru = {})),
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
                    })(nu || (nu = {})),
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
                    })(au || (au = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(su || (su = {})),
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
                    })(iu || (iu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ou || (ou = {})),
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
                    })(lu || (lu = {}));
                var cu = t(9887),
                    _u = t.n(cu);
                const mu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    du = (e) => e.includes('_') && ((e) => mu.includes(e))(e.split('_').at(-1)),
                    Eu = [v.ExtraLarge, v.Large, v.Medium, v.Small, v.ExtraSmall],
                    Au = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (du(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = Eu.indexOf(u),
                                    s = (-1 !== a ? mu.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    i = s ? e[s] : void 0;
                                return (t[n] = void 0 !== i ? i : e[n]), t;
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => mu.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    Du = (e, u = Au) => {
                        const t = (
                            (e, u = Au) =>
                            (t) => {
                                const r = x().mediaSize,
                                    n = (0, a.useMemo)(() => u(t, r), [t, r]);
                                return s().createElement(e, n);
                            }
                        )(e, u);
                        return s().memo((u) =>
                            Object.keys(u).some((e) => du(e) && void 0 !== u[e])
                                ? s().createElement(t, u)
                                : s().createElement(e, u),
                        );
                    },
                    Fu = {
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
                    pu = [
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
                function gu() {
                    return (
                        (gu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        gu.apply(this, arguments)
                    );
                }
                Object.keys(_u());
                const Cu = {
                        XL: { mt: Fu.mt__XL, mr: Fu.mr__XL, mb: Fu.mb__XL, ml: Fu.ml__XL },
                        LG: { mt: Fu.mt__LG, mr: Fu.mr__LG, mb: Fu.mb__LG, ml: Fu.ml__LG },
                        MDp: { mt: Fu.mt__MDp, mr: Fu.mr__MDp, mb: Fu.mb__MDp, ml: Fu.ml__MDp },
                        MD: { mt: Fu.mt__MD, mr: Fu.mr__MD, mb: Fu.mb__MD, ml: Fu.ml__MD },
                        SMp: { mt: Fu.mt__SMp, mr: Fu.mr__SMp, mb: Fu.mb__SMp, ml: Fu.ml__SMp },
                        SM: { mt: Fu.mt__SM, mr: Fu.mr__SM, mb: Fu.mb__SM, ml: Fu.ml__SM },
                        XS: { mt: Fu.mt__XS, mr: Fu.mr__XS, mb: Fu.mb__XS, ml: Fu.ml__XS },
                    },
                    hu = (Object.keys(Cu), ['mt', 'mr', 'mb', 'ml']),
                    Bu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    bu = Du((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            n = e.m,
                            i = e.mt,
                            o = void 0 === i ? n : i,
                            l = e.mr,
                            c = void 0 === l ? n : l,
                            _ = e.mb,
                            m = void 0 === _ ? n : _,
                            d = e.ml,
                            E = void 0 === d ? n : d,
                            A = e.column,
                            D = e.row,
                            F = e.flexDirection,
                            p = void 0 === F ? (A ? 'column' : D && 'row') || void 0 : F,
                            g = e.flexStart,
                            C = e.center,
                            h = e.flexEnd,
                            b = e.spaceBetween,
                            f = e.spaceAround,
                            v = e.justifyContent,
                            S =
                                void 0 === v
                                    ? (g ? 'flex-start' : C && 'center') ||
                                      (h && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : v,
                            w = e.alignItems,
                            x = void 0 === w ? (g ? 'flex-start' : C && 'center') || (h && 'flex-end') || void 0 : w,
                            R = e.alignSelf,
                            y = e.wrap,
                            M = e.flexWrap,
                            N = void 0 === M ? (y ? 'wrap' : void 0) : M,
                            T = e.grow,
                            L = e.shrink,
                            P = e.flex,
                            I = void 0 === P ? (T || L ? `${T ? 1 : 0} ${L ? 1 : 0} auto` : void 0) : P,
                            O = e.style,
                            k = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, pu);
                        const U = (0, a.useMemo)(() => {
                                const e = { mt: o, mr: c, mb: m, ml: E },
                                    u = ((e) =>
                                        hu.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(Cu[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        hu.reduce((u, t) => {
                                            const r = e[t];
                                            return 'number' == typeof r && (u[Bu[t]] = r + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: I,
                                        alignSelf: R,
                                        display: p || x ? 'flex' : void 0,
                                        flexDirection: p,
                                        flexWrap: N,
                                        justifyContent: S,
                                        alignItems: x,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, o, c, m, E, O, I, R, p, N, S, x]),
                            W = U.computedStyle,
                            G = U.computedClassNames;
                        return s().createElement('div', gu({ className: B()(Fu.base, ...G, u), style: W }, H), k);
                    });
                var fu = t(3532),
                    vu = t.n(fu);
                const Su = {
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
                    wu = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function xu() {
                    return (
                        (xu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        xu.apply(this, arguments)
                    );
                }
                Object.keys(_u());
                const Ru = Object.keys(vu()),
                    yu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Mu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Nu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Tu = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Lu =
                        (Object.keys(Tu),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': yu,
                            'heading-H36': yu,
                            'heading-H28': Mu,
                            'heading-H24': Mu,
                            'heading-H24R': Mu,
                            'heading-H22': Mu,
                            'heading-H20R': Mu,
                            'heading-H18': Mu,
                            'heading-H15': Nu,
                            'heading-H14': Nu,
                            'paragraph-P24': Mu,
                            'paragraph-P18': Mu,
                            'paragraph-P16': Mu,
                            'paragraph-P14': Nu,
                            'paragraph-P12': Nu,
                            'paragraph-P10': Nu,
                        }),
                    Pu =
                        (Object.keys(Lu),
                        (e) =>
                            e
                                ? ((e) => Ru.includes(e))(e)
                                    ? { colorClassName: Su[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Iu = Du((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            n = e.color,
                            i = e.m,
                            o = e.mt,
                            l = void 0 === o ? i : o,
                            c = e.mr,
                            _ = void 0 === c ? i : c,
                            m = e.mb,
                            d = void 0 === m ? i : m,
                            E = e.ml,
                            A = void 0 === E ? i : E,
                            D = e.style,
                            F = e.format,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, wu);
                        const g = (0, a.useMemo)(() => {
                                const e = Pu(n),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, r), colorClassName: u };
                            }, [D, n]),
                            C = g.computedStyle,
                            h = g.colorClassName;
                        return s().createElement(
                            bu,
                            xu(
                                {
                                    className: B()(Su.base, t && Su[t], h, r),
                                    style: C,
                                    mt: !0 === l ? Lu[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? Lu[t || 'paragraph-P16'].mr : _,
                                    mb: !0 === d ? Lu[t || 'paragraph-P16'].mb : d,
                                    ml: !0 === A ? Lu[t || 'paragraph-P16'].ml : A,
                                },
                                p,
                            ),
                            void 0 !== F ? s().createElement(uu.z, xu({}, F, { text: u })) : u,
                        );
                    });
                var Ou = t(7902);
                const ku = [
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
                function Hu(e) {
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
                const Uu = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Y.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    Wu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            m = void 0 !== _ && _,
                            d = e.decoratorId,
                            E = void 0 === d ? 0 : d,
                            A = e.isEnabled,
                            D = void 0 === A || A,
                            F = e.targetId,
                            p = void 0 === F ? 0 : F,
                            g = e.onShow,
                            C = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ku);
                        const B = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(() => p || (0, Ou.F)().resId, [p]),
                            f = (0, a.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (Uu(t, E, { isMouseEvent: !0, on: !0, arguments: Hu(r) }, b),
                                    g && g(),
                                    (B.current.isVisible = !0));
                            }, [t, E, r, b, g]),
                            v = (0, a.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        Uu(t, E, { on: !1 }, b),
                                        B.current.isVisible && C && C(),
                                        (B.current.isVisible = !1);
                                }
                            }, [t, E, b, C]),
                            S = (0, a.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === D && v();
                            }, [D, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return D
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      n && n(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              v(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === m && v(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === m && v(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      h,
                                  ),
                              )
                            : u;
                        var w;
                    },
                    Gu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Vu() {
                    return (
                        (Vu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Vu.apply(this, arguments)
                    );
                }
                const zu = R.views.common.tooltip_window.simple_tooltip_content,
                    $u = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Gu);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: r, note: n, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, r, n, o]);
                        return s().createElement(
                            Wu,
                            Vu(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? zu.SimpleTooltipHtmlContent('resId') : zu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                var Xu = t(5167);
                const ju = 'intelligence',
                    Yu = ['gold', 'crystal', 'credits', 'freeXP'],
                    qu = (e) => ({
                        backgroundImage: `url(${R.images.gui.maps.icons.blueprints.fragment.special.$dyn(e) || R.images.gui.maps.icons.resourceWell.resourcesLoading.icons.$dyn(e)})`,
                    });
                t(3368);
                let Ku;
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
                })(Ku || (Ku = {}));
                const Zu = {
                    base: 'NumericStepper_base_27',
                    base__small: 'NumericStepper_base__small_c8',
                    base__medium: 'NumericStepper_base__medium_30',
                    base__large: 'NumericStepper_base__large_c2',
                    base__isFocus: 'NumericStepper_base__isFocus_1f',
                    base__isDisabled: 'NumericStepper_base__isDisabled_29',
                    inputContainer: 'NumericStepper_inputContainer_86',
                    input: 'NumericStepper_input_fe',
                    'base__withCurrency-small': 'NumericStepper_base__withCurrency-small_10',
                    'base__withCurrency-medium': 'NumericStepper_base__withCurrency-medium_f9',
                    'base__withCurrency-large': 'NumericStepper_base__withCurrency-large_1b',
                    input__disabled: 'NumericStepper_input__disabled_d0',
                    input__credits: 'NumericStepper_input__credits_fb',
                    'input__credits-disabled': 'NumericStepper_input__credits-disabled_5e',
                    input__gold: 'NumericStepper_input__gold_32',
                    'input__gold-disabled': 'NumericStepper_input__gold-disabled_10',
                    input__xp: 'NumericStepper_input__xp_72',
                    input__freeXP: 'NumericStepper_input__freeXP_86',
                    input__crystal: 'NumericStepper_input__crystal_ff',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_3c',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_c6',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_b6',
                    input__withCurrency: 'NumericStepper_input__withCurrency_59',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_6e',
                    'input__xp-large': 'NumericStepper_input__xp-large_98',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_92',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_3b',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_a8',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_93',
                    currency: 'NumericStepper_currency_80',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_ef',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_81',
                    'currency__freeXP-medium': 'NumericStepper_currency__freeXP-medium_3e',
                    'currency__freeXP-large': 'NumericStepper_currency__freeXP-large_88',
                    'currency__crystal-medium': 'NumericStepper_currency__crystal-medium_c8',
                    'currency__crystal-large': 'NumericStepper_currency__crystal-large_26',
                    currencyIcon: 'NumericStepper_currencyIcon_6f',
                    'currencyIcon__credits-small': 'NumericStepper_currencyIcon__credits-small_fe',
                    'currencyIcon__credits-medium': 'NumericStepper_currencyIcon__credits-medium_05',
                    'currencyIcon__credits-large': 'NumericStepper_currencyIcon__credits-large_13',
                    'currencyIcon__gold-small': 'NumericStepper_currencyIcon__gold-small_99',
                    'currencyIcon__gold-medium': 'NumericStepper_currencyIcon__gold-medium_da',
                    'currencyIcon__gold-large': 'NumericStepper_currencyIcon__gold-large_b4',
                    'currencyIcon__crystal-small': 'NumericStepper_currencyIcon__crystal-small_14',
                    'currencyIcon__crystal-medium': 'NumericStepper_currencyIcon__crystal-medium_8c',
                    'currencyIcon__crystal-large': 'NumericStepper_currencyIcon__crystal-large_57',
                    'currencyIcon__freeXP-small': 'NumericStepper_currencyIcon__freeXP-small_2d',
                    'currencyIcon__freeXP-medium': 'NumericStepper_currencyIcon__freeXP-medium_f3',
                    'currencyIcon__freeXP-large': 'NumericStepper_currencyIcon__freeXP-large_1c',
                    'currencyIcon__xp-small': 'NumericStepper_currencyIcon__xp-small_af',
                    'currencyIcon__xp-medium': 'NumericStepper_currencyIcon__xp-medium_5d',
                    'currencyIcon__xp-large': 'NumericStepper_currencyIcon__xp-large_42',
                    dummyValue: 'NumericStepper_dummyValue_a3',
                    control: 'NumericStepper_control_25',
                    buttonIncrement: 'NumericStepper_buttonIncrement_f6',
                    buttonDecrement: 'NumericStepper_buttonDecrement_10',
                    buttonIncrement__small: 'NumericStepper_buttonIncrement__small_63',
                    buttonDecrement__small: 'NumericStepper_buttonDecrement__small_a1',
                    buttonIncrement__medium: 'NumericStepper_buttonIncrement__medium_aa',
                    buttonDecrement__medium: 'NumericStepper_buttonDecrement__medium_da',
                    buttonIncrement__large: 'NumericStepper_buttonIncrement__large_ab',
                    buttonDecrement__large: 'NumericStepper_buttonDecrement__large_f7',
                    buttonIncrement__isDisabled: 'NumericStepper_buttonIncrement__isDisabled_2c',
                    buttonDecrement__isDisabled: 'NumericStepper_buttonDecrement__isDisabled_b5',
                    'buttonIncrement__isActive-small': 'NumericStepper_buttonIncrement__isActive-small_a0',
                    'buttonIncrement__isActive-medium': 'NumericStepper_buttonIncrement__isActive-medium_ac',
                    'buttonIncrement__isActive-large': 'NumericStepper_buttonIncrement__isActive-large_1f',
                    'buttonDecrement__isActive-small': 'NumericStepper_buttonDecrement__isActive-small_34',
                    'buttonDecrement__isActive-medium': 'NumericStepper_buttonDecrement__isActive-medium_94',
                    'buttonDecrement__isActive-large': 'NumericStepper_buttonDecrement__isActive-large_ed',
                };
                class Qu extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.timer = null),
                            (this.validationTimer = null),
                            (this.numericalStepper = (0, a.createRef)()),
                            (this.input = (0, a.createRef)()),
                            (this.state = {
                                value: this.props.value,
                                prevValue: this.props.value,
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
                            (this.formatValue = (e) => Y.Z5.getNumberFormat(e, Y.B3.GOLD)),
                            (this.getValidValue = (e) => {
                                const u = Math.min(this.props.maximum, Math.max(this.props.minimum, e)),
                                    t = this.props.stepSize;
                                return Math.round(u / t) * t;
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
                                const u = e === j.n.BACKSPACE,
                                    t = e === j.n.DELETE,
                                    r = this.input.current,
                                    n = r.selectionStart || 0,
                                    a = r.selectionEnd || 0;
                                let s = r.value;
                                const i = Math.max(n, a),
                                    o = i;
                                t && (s = s.substring(0, i) + s.substring(i + 1, s.length)),
                                    u && 1 === n && 1 === s.length && (s = '0');
                                const l = Number(s.trim().replace(/\D/g, '')),
                                    c = Number.isSafeInteger(l) ? l : Number.MAX_SAFE_INTEGER,
                                    _ = Y.Z5.getNumberFormat(c, Y.B3.GOLD);
                                r.value = _;
                                const m = new RegExp(/\d/g);
                                let d = 0;
                                for (let e = 0; e < o; e++) {
                                    const u = s[e] || '',
                                        t = _[d] || '';
                                    if (u.match(m) || u === t) {
                                        for (; u !== _[d] && d < _.length; ) d++;
                                        d++;
                                    }
                                }
                                '' === s && (d = 1),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(d, d),
                                    this.changeValue(c),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        const e = this.getValidValue(c);
                                        e > this.state.prevValue && e !== this.props.maximum && (0, U.G)(Z),
                                            e < this.state.prevValue && (0, U.G)(Q),
                                            e !== c &&
                                                this.state.isFocused &&
                                                (this.changeValue(this.getValidValue(c)),
                                                this.setCursorPosition(0, this.formatValue(e).length));
                                    }, 800));
                            }),
                            (this.handleDelete = (e) => {
                                const u = e.keyCode === j.n.BACKSPACE,
                                    t = e.keyCode === j.n.DELETE,
                                    r = e.target,
                                    n = r.selectionStart,
                                    a = r.selectionEnd,
                                    s = r.value,
                                    i = n !== a,
                                    o = new RegExp(/\D/),
                                    l = u && n ? n - 1 : n || 0;
                                if (i) return;
                                let c = l;
                                const _ = o.test(s[l]);
                                if (t && _) for (; o.test(s[c]) && c < s.length; ) c++;
                                if (u && _) for (; o.test(s[c]) && c > 0; ) c--;
                                if (c !== l || (u && _))
                                    return e.preventDefault(), (c = c < 0 ? 0 : c), void this.setCursorPosition(c, c);
                                ((u && 1 === n && 1 === s.length) || t) &&
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
                                        (e.keyCode in j.n &&
                                            e.keyCode !== j.n.BACKSPACE &&
                                            e.keyCode !== j.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case j.n.ARROW_UP:
                                        case j.n.NUM_PLUS:
                                            this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment();
                                            break;
                                        case j.n.ARROW_DOWN:
                                        case j.n.NUM_MINUS:
                                            this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement();
                                            break;
                                        case j.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case j.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case j.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                this.changeValue(this.props.maximum), this.setCursorPosition(0, e);
                                            }
                                            break;
                                        case j.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case j.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case j.n.BACKSPACE:
                                        case j.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case j.n.ARROW_UP:
                                        case j.n.NUM_PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case j.n.ARROW_DOWN:
                                        case j.n.NUM_MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in Ku || e.preventDefault();
                            }),
                            (this.increment = () => {
                                const e = Math.min(
                                    this.getValidValue(this.state.value) + this.props.stepSize,
                                    this.props.maximum,
                                );
                                this.changeValue(e), this.playClickSound(Z);
                            }),
                            (this.decrement = () => {
                                const e = Math.max(
                                    this.getValidValue(this.state.value) - this.props.stepSize,
                                    this.props.minimum,
                                );
                                this.changeValue(e), this.playClickSound(Q);
                            }),
                            (this.incrementHandleMouseDown = (e, u = !1) => {
                                this.buttonIncrementIsDisabled ||
                                    (e.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value < this.props.maximum &&
                                        (0 === e.button || u) &&
                                        (this.increment(),
                                        (this.timer = setTimeout(
                                            () => {
                                                this.incrementHandleMouseDown(e, !0);
                                            },
                                            u ? 50 : 300,
                                        )),
                                        this.setState({ activeIncrement: !0 })));
                            }),
                            (this.decrementHandleMouseDown = (e, u = !1) => {
                                this.buttonDecrementIsDisabled ||
                                    (e.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value > this.props.minimum &&
                                        (0 === e.button || u) &&
                                        (this.decrement(),
                                        (this.timer = setTimeout(
                                            () => {
                                                this.decrementHandleMouseDown(e, !0);
                                            },
                                            u ? 50 : 300,
                                        )),
                                        this.setState({ activeDecrement: !0 })));
                            }),
                            (this.playHoverSound = () => {
                                this.props.isDisabled || (0, U.G)('highlight');
                            }),
                            (this.playClickSound = (e) => {
                                this.props.isDisabled || (0, U.G)(e);
                            }),
                            (this.stop = () => {
                                this.timer && clearTimeout(this.timer), (this.timer = null);
                            });
                    }
                    componentDidUpdate(e, u) {
                        const t = this.state,
                            r = t.value,
                            n = t.isFocused;
                        if (r !== u.value && n) {
                            this.setState({ prevValue: u.value });
                            const e = this.formattedValue.length,
                                t = this.input.current && this.input.current.selectionStart,
                                r = this.input.current && this.input.current.selectionEnd,
                                n = t === r ? e : t || 0;
                            0 === t && r === e
                                ? this.input.current && this.input.current.setSelectionRange(e, e)
                                : this.input.current && this.input.current.setSelectionRange(n, e);
                        }
                    }
                    componentWillReceiveProps({ value: e, isFocused: u }) {
                        e !== this.props.value && this.setState({ value: e }),
                            u !== this.props.isFocused &&
                                (this.setState({ isFocused: u }),
                                u
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput());
                    }
                    get formattedValue() {
                        return Y.Z5.getNumberFormat(this.state.value, Y.B3.GOLD);
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
                            r = e.currencyType,
                            n = B()(
                                Zu.base,
                                Zu[`base__${t}`],
                                r && Zu[`base__withCurrency-${t}`],
                                u && Zu.base__isDisabled,
                                this.state.isFocused && Zu.base__isFocus,
                            ),
                            a = B()(
                                Zu.buttonIncrement,
                                Zu[`buttonIncrement__${t}`],
                                this.buttonIncrementIsDisabled && Zu.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    Zu[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            i = B()(
                                Zu.buttonDecrement,
                                Zu[`buttonDecrement__${t}`],
                                this.buttonDecrementIsDisabled && Zu.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    Zu[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            o = B()(
                                Zu.input,
                                u && Zu.input__disabled,
                                r && Zu.input__withCurrency,
                                r && Zu[`input__${r}-${t}`],
                                r && Zu[`input__${r}`],
                                r && u && Zu[`input__${r}-disabled`],
                            ),
                            l = B()(Zu.currencyIcon, r && Zu[`currencyIcon__${r}-${t}`]),
                            c = B()(Zu.currency, r && Zu[`currency__${r}`], r && Zu[`currency__${r}-${t}`]);
                        return s().createElement(
                            'div',
                            {
                                className: n,
                                ref: this.numericalStepper,
                                style: ((_ = this.props.width), _ ? { width: `${_}rem` } : {}),
                            },
                            s().createElement(
                                'div',
                                { className: Zu.inputContainer },
                                r &&
                                    s().createElement(
                                        'div',
                                        { className: c },
                                        s().createElement('span', { className: Zu.dummyValue }, this.formattedValue),
                                        s().createElement('span', { className: l }),
                                    ),
                                s().createElement('input', {
                                    ref: this.input,
                                    className: o,
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
                            s().createElement(
                                'div',
                                { className: Zu.control },
                                s().createElement('div', {
                                    className: a,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                s().createElement('div', {
                                    className: i,
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
                Qu.defaultProps = {
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
                const Ju = 'ResourceStepper_base_b7',
                    et = ({ limit: e, rate: u, currentValue: t, className: r, type: n, isDisabled: i }) => {
                        const o = (0, a.useContext)(Qe),
                            l = o.setResources,
                            c = o.isCardAnimationEnabled;
                        return s().createElement(
                            'div',
                            { className: B()(Ju, r) },
                            s().createElement(Qu, {
                                width: 140,
                                value: t,
                                minimum: 0,
                                maximum: e,
                                stepSize: u,
                                isFocused: !1,
                                onChange: (t) => {
                                    if (c) return;
                                    const r = { value: t >= e ? e : t, rate: u };
                                    l((e) => Object.assign({}, e, { [n]: r }));
                                },
                                isDisabled: i,
                            }),
                        );
                    },
                    ut = {
                        base: 'ResourcesCard_base_be',
                        base__disabled: 'ResourcesCard_base__disabled_64',
                        base__selected: 'ResourcesCard_base__selected_54',
                        base__first: 'ResourcesCard_base__first_fa',
                        base__last: 'ResourcesCard_base__last_1c',
                        clickArea: 'ResourcesCard_clickArea_2e',
                        clickArea__disabled: 'ResourcesCard_clickArea__disabled_56',
                        count: 'ResourcesCard_count_c4',
                        count__zero: 'ResourcesCard_count__zero_c4',
                        countIcon: 'ResourcesCard_countIcon_d2',
                        imageWrapper: 'ResourcesCard_imageWrapper_7e',
                        imageWrapper__disabled: 'ResourcesCard_imageWrapper__disabled_51',
                        image: 'ResourcesCard_image_d6',
                        image__gold: 'ResourcesCard_image__gold_36',
                        image__credits: 'ResourcesCard_image__credits_19',
                        image__freeXP: 'ResourcesCard_image__freeXP_0e',
                        image__crystal: 'ResourcesCard_image__crystal_64',
                        image__intelligence: 'ResourcesCard_image__intelligence_30',
                        image__ussr: 'ResourcesCard_image__ussr_19',
                        image__germany: 'ResourcesCard_image__germany_e4',
                        image__china: 'ResourcesCard_image__china_ed',
                        image__czech: 'ResourcesCard_image__czech_c5',
                        image__france: 'ResourcesCard_image__france_76',
                        image__italy: 'ResourcesCard_image__italy_55',
                        image__japan: 'ResourcesCard_image__japan_3f',
                        image__poland: 'ResourcesCard_image__poland_f3',
                        image__sweden: 'ResourcesCard_image__sweden_e3',
                        image__uk: 'ResourcesCard_image__uk_62',
                        image__usa: 'ResourcesCard_image__usa_78',
                        image__premium_plus: 'ResourcesCard_image__premium_plus_a8',
                        image__disabled: 'ResourcesCard_image__disabled_8b',
                        base__animated: 'ResourcesCard_base__animated_90',
                        blink: 'ResourcesCard_blink_04',
                        imageDisabled: 'ResourcesCard_imageDisabled_96',
                        imageDisabled__gold: 'ResourcesCard_imageDisabled__gold_bc',
                        imageDisabled__credits: 'ResourcesCard_imageDisabled__credits_64',
                        imageDisabled__freeXP: 'ResourcesCard_imageDisabled__freeXP_28',
                        imageDisabled__crystal: 'ResourcesCard_imageDisabled__crystal_9d',
                        imageDisabled__intelligence: 'ResourcesCard_imageDisabled__intelligence_ea',
                        imageDisabled__ussr: 'ResourcesCard_imageDisabled__ussr_36',
                        imageDisabled__germany: 'ResourcesCard_imageDisabled__germany_b2',
                        imageDisabled__china: 'ResourcesCard_imageDisabled__china_06',
                        imageDisabled__czech: 'ResourcesCard_imageDisabled__czech_1d',
                        imageDisabled__france: 'ResourcesCard_imageDisabled__france_f4',
                        imageDisabled__italy: 'ResourcesCard_imageDisabled__italy_39',
                        imageDisabled__japan: 'ResourcesCard_imageDisabled__japan_e1',
                        imageDisabled__poland: 'ResourcesCard_imageDisabled__poland_fa',
                        imageDisabled__sweden: 'ResourcesCard_imageDisabled__sweden_42',
                        imageDisabled__uk: 'ResourcesCard_imageDisabled__uk_f3',
                        imageDisabled__usa: 'ResourcesCard_imageDisabled__usa_25',
                        imageDisabled__premium_plus: 'ResourcesCard_imageDisabled__premium_plus_6a',
                        title: 'ResourcesCard_title_29',
                        rateText: 'ResourcesCard_rateText_56',
                        rateText__gold: 'ResourcesCard_rateText__gold_fe',
                        rateText__credits: 'ResourcesCard_rateText__credits_93',
                        rateText__min: 'ResourcesCard_rateText__min_b9',
                        rateIcon: 'ResourcesCard_rateIcon_f6',
                        rateIcon__intelligence: 'ResourcesCard_rateIcon__intelligence_94',
                        rateIcon__currency: 'ResourcesCard_rateIcon__currency_8b',
                        icon: 'ResourcesCard_icon_38',
                        icon__limit: 'ResourcesCard_icon__limit_8c',
                        icon__max: 'ResourcesCard_icon__max_44',
                        icon__loaded: 'ResourcesCard_icon__loaded_5d',
                        limitText: 'ResourcesCard_limitText_06',
                        limitText__show: 'ResourcesCard_limitText__show_09',
                        limitText__max: 'ResourcesCard_limitText__max_63',
                        limitText__loaded: 'ResourcesCard_limitText__loaded_c7',
                        stepper: 'ResourcesCard_stepper_80',
                        stepper__disabled: 'ResourcesCard_stepper__disabled_04',
                        fadeOut: 'ResourcesCard_fadeOut_dd',
                        fadeIn: 'ResourcesCard_fadeIn_c0',
                        fadeInWithScale: 'ResourcesCard_fadeInWithScale_9a',
                        slideUp: 'ResourcesCard_slideUp_b1',
                        slideUpCenter: 'ResourcesCard_slideUpCenter_21',
                    },
                    tt = R.strings.resource_well,
                    rt = ({ value: e, index: u, amount: t, currentValue: r }) => {
                        const n = (0, X.tT)('model', X.DA.Shallow).progressionState,
                            i = e.type,
                            o = e.inventoryCount,
                            l = e.rate,
                            c = e.limit,
                            _ = e.tooltipId,
                            m = e.balance,
                            d = (0, a.useContext)(Qe),
                            E = d.setResources,
                            A = d.progression,
                            D = d.delta,
                            F = d.isCardAnimationEnabled,
                            p = d.resourcesAnimated,
                            g = r + m >= c,
                            C = A + D >= 100,
                            h = n === $.NoVehicles,
                            b = c / l < 100,
                            f = 0 === r || C || h || !F,
                            v = Math.min((100 - A - D + Math.round(r / l)) * l, o - (o % l)),
                            S = (0 === o && 0 === r) || m === c || (0 === r && C) || h,
                            w = S,
                            x = C ? r : Math.min(c - m, v),
                            y = {
                                icon: s().createElement('span', {
                                    className: B()(
                                        ut.rateIcon,
                                        Yu.includes(i) && ut.rateIcon__currency,
                                        i === ju && ut.rateIcon__intelligence,
                                    ),
                                    style: qu(i),
                                }),
                                minValue: s().createElement(uu.z, {
                                    classMix: B()(ut.rateText, ut.rateText__min),
                                    text: tt.resourcesLoadingView.resourceRate.minValue(),
                                    binding: { minValue: 1 },
                                }),
                                equals: s().createElement('span', null, '='),
                                rate: s().createElement(eu, { value: l }),
                            },
                            M = {
                                maxValue: s().createElement(eu, { value: c }),
                                iconInfo: s().createElement('div', { className: B()(ut.icon, ut.icon__limit) }),
                                iconMax: s().createElement('div', { className: B()(ut.icon, ut.icon__max) }),
                                iconLoaded: s().createElement('div', { className: B()(ut.icon, ut.icon__loaded) }),
                            },
                            N = (0, a.useMemo)(() => ({ tooltipId: _ }), [_]),
                            T = o - r;
                        (0, a.useEffect)(() => {
                            h && E({ [i]: { value: 0, rate: l } });
                        }, [h, l, E, i]);
                        const L = () => {
                                if (h || F) return;
                                S || (0, U.G)(Z);
                                const e = (({ value: e, rate: u }, t) => {
                                    const r = e - (e % u);
                                    return t > 100 ? { value: r - (t - 100) * u, rate: u } : { value: r, rate: u };
                                })({ value: r + l >= x ? x : r + l, rate: l }, A + D);
                                E((u) => Object.assign({}, u, { [i]: e }));
                            },
                            P = B()(
                                ut.base,
                                0 === u && ut.base__first,
                                u === t - 1 && ut.base__last,
                                Boolean(r) && ut.base__selected,
                                Object.keys(p).includes(i) && F && ut.base__animated,
                                h && ut.base__disabled,
                            ),
                            I = B()(
                                ut.limitText,
                                g && !C && ut.limitText__max,
                                C && ut.limitText__loaded,
                                C && ut.limitText__show,
                            );
                        return s().createElement(
                            'div',
                            {
                                className: P,
                                onMouseEnter: () => {
                                    (0, U.G)(J);
                                },
                            },
                            s().createElement('div', {
                                className: B()(ut.clickArea, C || (h && ut.clickArea__disabled)),
                                onClick: L,
                            }),
                            s().createElement(
                                'div',
                                { className: B()(ut.count, 0 === o && ut.count__zero) },
                                i === ru.PremiumPlus
                                    ? s().createElement(Iu, {
                                          text: tt.resourcesLoadingView.premium(),
                                          format: { binding: { days: T } },
                                          color: 0 === o ? Xu.RED : Xu.GOLD,
                                      })
                                    : s().createElement(
                                          s().Fragment,
                                          null,
                                          s().createElement('div', { className: ut.countIcon }),
                                          s().createElement(eu, { value: T }),
                                      ),
                            ),
                            s().createElement(
                                Wu,
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    args: N,
                                },
                                s().createElement(
                                    'div',
                                    { className: B()(ut.imageWrapper, w && ut.imageWrapper__disabled), onClick: L },
                                    s().createElement('div', {
                                        className: B()(ut.image, ut[`image__${i}`], w && ut.image__disabled),
                                    }),
                                    w &&
                                        s().createElement('div', {
                                            className: B()(ut.imageDisabled, ut[`imageDisabled__${i}`]),
                                        }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: ut.title },
                                ((e) => {
                                    const u = e && R.strings.blueprints.nations.$dyn(e),
                                        t = R.strings.quests.bonusName.$dyn(e);
                                    switch (!0) {
                                        case e === ju:
                                            return R.strings.resource_well.resourcesLoadingView.resourceCard.intelligenceBlueprints();
                                        case Boolean(u):
                                            return u;
                                        case e === ru.PremiumPlus:
                                            return R.strings.resource_well.resourcesLoadingView.resourcesHeader.premiums();
                                        case Boolean(t):
                                            return (0, tu.z4)(R.strings.quests.bonusName.$dyn(e));
                                        default:
                                            console.error('title for reward is not provided');
                                    }
                                })(i),
                            ),
                            s().createElement(uu.z, {
                                classMix: B()(ut.rateText, ut[`rateText__${i}`]),
                                text: tt.resourcesLoadingView.resourceRate.text(),
                                binding: y,
                            }),
                            s().createElement(et, {
                                currentValue: r,
                                limit: x,
                                rate: l,
                                inventoryCount: o,
                                className: B()(ut.stepper, f && ut.stepper__disabled),
                                type: i,
                                isDisabled: S || F,
                                progression: A,
                            }),
                            C &&
                                s().createElement(
                                    $u,
                                    {
                                        header: tt.tooltips.resourcesLoadingView.resourcesLoaded.header(),
                                        body: tt.tooltips.resourcesLoadingView.resourcesLoaded.body(),
                                    },
                                    s().createElement(
                                        'div',
                                        null,
                                        s().createElement(uu.z, {
                                            classMix: I,
                                            text: tt.resourcesLoadingView.resourceRate.resourceLoadedText(),
                                            binding: M,
                                        }),
                                    ),
                                ),
                            b &&
                                !C &&
                                s().createElement(
                                    Wu,
                                    {
                                        contentId: R.views.lobby.resource_well.tooltips.MaxProgressTooltip('resId'),
                                        args: { currentValue: r + m, maxValue: c, type: i },
                                    },
                                    s().createElement(
                                        'div',
                                        null,
                                        s().createElement(uu.z, {
                                            classMix: I,
                                            text:
                                                g && !C
                                                    ? tt.resourcesLoadingView.resourceRate.maxReachedText()
                                                    : tt.resourcesLoadingView.resourceRate.maxText(),
                                            binding: M,
                                        }),
                                    ),
                                ),
                        );
                    },
                    nt = 'ResourcesCards_base_0d',
                    at = 'ResourcesCards_scrollWrapper_b9',
                    st = 'ResourcesCards_scrollBarPosition_79',
                    it = 'ResourcesCards_cardsWrapper_07',
                    ot = ({ resourcesTabs: e, activeTabIndex: u, currentScrollPosition: t, api: r }) => {
                        const n = (0, a.useContext)(Qe).resources,
                            i = r.applyScroll;
                        return (
                            (0, a.useEffect)(
                                () =>
                                    ae(() => {
                                        i(t[u].position);
                                    }),
                                [u, i, t],
                            ),
                            s().createElement(
                                'div',
                                { className: nt },
                                e.map(
                                    ({ value: e }, t) =>
                                        t === u &&
                                        s().createElement(
                                            'div',
                                            { className: at, key: t },
                                            s().createElement(
                                                Ze.Vertical.Area.Default,
                                                { api: r, barClassNames: { base: st } },
                                                s().createElement(
                                                    'div',
                                                    { className: it },
                                                    e.resources.map(({ value: u }, t) => {
                                                        var r;
                                                        return s().createElement(rt, {
                                                            value: u,
                                                            currentValue:
                                                                (null == (r = n[u.type]) ? void 0 : r.value) || 0,
                                                            key: `card_${t}`,
                                                            index: t,
                                                            amount: e.resources.length,
                                                        });
                                                    }),
                                                ),
                                            ),
                                        ),
                                ),
                            )
                        );
                    },
                    lt = {
                        base: 'ResourcesHeaderItem_base_06',
                        base__active: 'ResourcesHeaderItem_base__active_b3',
                        title: 'ResourcesHeaderItem_title_12',
                        image: 'ResourcesHeaderItem_image_91',
                        image__currency: 'ResourcesHeaderItem_image__currency_81',
                        image__blueprints: 'ResourcesHeaderItem_image__blueprints_f1',
                        image__premiums: 'ResourcesHeaderItem_image__premiums_56',
                        base__animated: 'ResourcesHeaderItem_base__animated_54',
                        blink: 'ResourcesHeaderItem_blink_70',
                        deltaPercent: 'ResourcesHeaderItem_deltaPercent_62',
                        deltaPercent__loaded: 'ResourcesHeaderItem_deltaPercent__loaded_a0',
                        glow: 'ResourcesHeaderItem_glow_0e',
                        fadeOut: 'ResourcesHeaderItem_fadeOut_50',
                        fadeIn: 'ResourcesHeaderItem_fadeIn_2d',
                        fadeInWithScale: 'ResourcesHeaderItem_fadeInWithScale_f5',
                        slideUp: 'ResourcesHeaderItem_slideUp_8e',
                        slideUpCenter: 'ResourcesHeaderItem_slideUpCenter_f7',
                    },
                    ct = R.strings.resource_well,
                    _t = ({ type: e, delta: u, activeTabIndex: t, tabIndex: r, onClick: n }) => {
                        const i = (0, a.useContext)(Qe),
                            o = i.isCardAnimationEnabled,
                            l = i.tabsAnimated,
                            c = B()(lt.base, t === r && lt.base__active, l[e] > 0 && t !== r && o && lt.base__animated);
                        return s().createElement(
                            'div',
                            {
                                className: c,
                                onClick: () => {
                                    (0, U.G)('bp_click'), n(r);
                                },
                                onMouseEnter: () => {
                                    (0, U.G)(J);
                                },
                            },
                            s().createElement('div', { className: lt.glow }),
                            s().createElement(
                                'div',
                                { className: lt.title },
                                ct.resourcesLoadingView.resourcesHeader.$dyn(e),
                            ),
                            s().createElement(
                                $u,
                                {
                                    header: ct.tooltips.resourcesLoadingView.header.$dyn(`${e}_title`),
                                    body: ct.tooltips.resourcesLoadingView.header.$dyn(`${e}_description`),
                                },
                                s().createElement('div', { className: B()(lt.image, lt[`image__${e}`]) }),
                            ),
                            s().createElement(uu.z, {
                                classMix: B()(lt.deltaPercent, u > 0 && lt.deltaPercent__loaded),
                                text:
                                    0 === u
                                        ? ct.resourcesLoadingView.counter.current()
                                        : ct.resourcesLoadingView.counter.delta(),
                                binding: { delta: u.toFixed(), current: 0 },
                            }),
                        );
                    },
                    mt = 'ResourcesHeader_base_89',
                    dt = ({ resourcesTabs: e, handleTabClick: u, activeTabIndex: t }) => {
                        const r = (0, a.useContext)(Qe),
                            n = r.resources,
                            i = r.setDelta,
                            o = r.setTabsAnimated,
                            l = ((e) => {
                                const u = {};
                                let t = [];
                                return (
                                    e.map(({ value: e }) => {
                                        e.resources.map(({ value: e }) => {
                                            t.push(e.type);
                                        }),
                                            (u[e.type] = t),
                                            (t = []);
                                    }),
                                    u
                                );
                            })(e),
                            c = ((e, u) => {
                                const t = {};
                                let r = 0;
                                for (var n = 0, a = Object.entries(e); n < a.length; n++) {
                                    const e = a[n],
                                        o = e[0],
                                        l = e[1];
                                    for (var s = 0, i = Object.entries(u); s < i.length; s++) {
                                        const e = i[s],
                                            u = e[0],
                                            t = e[1];
                                        l.includes(u) && (r += t.value / t.rate);
                                    }
                                    (t[o] = r), (r = 0);
                                }
                                return t;
                            })(l, n);
                        i(((e) => Object.values(e).reduce((e, u) => e + u, 0))(c));
                        const _ = (0, a.useCallback)(
                            (e) => {
                                o(c), u(e);
                            },
                            [u, c, o],
                        );
                        return s().createElement(
                            'div',
                            { className: mt },
                            e.map(({ value: e }, u) =>
                                s().createElement(_t, {
                                    type: e.type,
                                    resources: e.resources,
                                    delta: c[e.type] || 0,
                                    activeTabIndex: t,
                                    tabIndex: u,
                                    onClick: _,
                                    key: u,
                                }),
                            ),
                        );
                    },
                    Et = 'Content_base_fe',
                    At = 'Content_header_68',
                    Dt = 'Content_content_24',
                    Ft = 'Content_content__center_d4',
                    pt = [
                        { position: 0, index: 0 },
                        { position: 0, index: 1 },
                        { position: 0, index: 2 },
                    ],
                    gt = ({ resourcesTabs: e }) => {
                        const u = (0, a.useState)(0),
                            t = u[0],
                            r = u[1],
                            n = (0, a.useState)(pt),
                            i = n[0],
                            o = n[1],
                            l = Ae(),
                            c = l.animationScroll.scrollPosition,
                            _ = (0, a.useCallback)(
                                (e) => {
                                    o((e) =>
                                        e.map((e) => (e.index === t ? Object.assign({}, e, { position: c.goal }) : e)),
                                    ),
                                        r(e);
                                },
                                [t, c.goal],
                            ),
                            m = B()(Dt, e[t].value.resources.length <= 5 && Ft);
                        return s().createElement(
                            'div',
                            { className: Et },
                            s().createElement(
                                'div',
                                { className: At },
                                s().createElement(dt, { resourcesTabs: e, handleTabClick: _, activeTabIndex: t }),
                            ),
                            s().createElement(
                                'div',
                                { className: m },
                                s().createElement(ot, {
                                    api: l,
                                    resourcesTabs: e,
                                    activeTabIndex: t,
                                    currentScrollPosition: i,
                                }),
                            ),
                        );
                    };
                let Ct;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Forbidden = 'forbidden'),
                        (e.NoProgress = 'noProgress'),
                        (e.NoVehicles = 'noVehicles');
                })(Ct || (Ct = {}));
                var ht = t(6324);
                const Bt = 'Footer_base_0c',
                    bt = 'Footer_base__alignBottom_a3',
                    ft = 'Footer_background_16';
                var vt = t(3457);
                const St = {
                    base: 'ProgressBar_base_45',
                    base__medium: 'ProgressBar_base__medium_62',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__medium: 'ProgressBar_background__medium_6e',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let wt, xt;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(wt || (wt = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(xt || (xt = {}));
                const Rt = ({ size: e = wt.Default }) =>
                        s().createElement('div', { className: B()(St.background, St[`background__${e}`]) }),
                    yt = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Mt = ({ size: e }) => {
                        const u = B()(yt.base, yt[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    Nt = {
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
                    Tt = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: r, isComplete: n, withoutBounce: a }) => {
                            const i = B()(
                                    Nt.base,
                                    Nt[`base__${e}`],
                                    t && Nt.base__disabled,
                                    n && Nt.base__finished,
                                    a && Nt.base__withoutBounce,
                                ),
                                o = !t && !n;
                            return s().createElement(
                                'div',
                                { className: i, style: r, ref: u },
                                s().createElement('div', { className: Nt.pattern }),
                                s().createElement('div', { className: Nt.gradient }),
                                o && s().createElement(Mt, { size: e }),
                            );
                        },
                    ),
                    Lt = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: n }) => {
                        const i = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                o && n && n();
                            }, [o, n]),
                            s().createElement(Tt, { size: e, disabled: r, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    },
                    Pt = (e, u) => {
                        let t;
                        const r = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(r);
                        };
                    };
                let It, Ot;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(It || (It = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Ot || (Ot = {}));
                const kt = 'ProgressBarDeltaSimple_base_6c',
                    Ht = 'ProgressBarDeltaSimple_delta_99',
                    Ut = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < r,
                                _ = (0, a.useState)(Ot.Idle),
                                m = _[0],
                                d = _[1],
                                E = m === Ot.In,
                                A = m === Ot.End,
                                D = m === Ot.Idle,
                                F = (0, a.useCallback)(
                                    (e) => {
                                        d(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, a.useEffect)(() => {
                                if (D && !t) {
                                    return Pt(() => {
                                        F(Ot.In);
                                    }, u);
                                }
                            }, [F, t, D, u]),
                                (0, a.useEffect)(() => {
                                    if (E) {
                                        return Pt(() => {
                                            o && o(), F(Ot.End);
                                        }, e + u);
                                    }
                                }, [F, E, o, u, e]);
                            const p = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                g = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(r - i)}%`, left: `${c ? i : r}%` }),
                                    [r, c, i],
                                );
                            return A
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: kt, style: C },
                                      s().createElement(
                                          'div',
                                          { style: D ? p : g, className: Ht },
                                          s().createElement(Mt, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    Wt = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const _ = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Tt, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: i,
                                    baseStyles: _,
                                }),
                                t >= 0 &&
                                    s().createElement(Ut, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Gt = 'ProgressBarDeltaGrow_base_7e',
                    Vt = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    zt = 'ProgressBarDeltaGrow_glow_68',
                    $t = (e) => (e ? { left: 0 } : { right: 0 }),
                    Xt = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    jt = (e) => ({ transitionDuration: `${e}ms` }),
                    Yt = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const _ = i < r,
                                m = (0, a.useState)(It.Idle),
                                d = m[0],
                                E = m[1],
                                A = d === It.End,
                                D = d === It.Idle,
                                F = d === It.Grow,
                                p = d === It.Shrink,
                                g = (0, a.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                C = (0, a.useCallback)(
                                    (e, u) =>
                                        Pt(() => {
                                            g(e);
                                        }, u),
                                    [g],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return D
                                        ? C(It.Grow, u)
                                        : F
                                          ? C(It.Shrink, e)
                                          : p
                                            ? C(It.End, e)
                                            : void (A && o && o());
                            }, [C, t, A, F, D, p, o, u, e]);
                            const h = (0, a.useMemo)(() => Object.assign({ width: '100%' }, jt(e), $t(_)), [_, e]),
                                b = (0, a.useMemo)(() => Object.assign({ width: '0%' }, jt(e), $t(_)), [_, e]),
                                f = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Xt(_, r), jt(e)), [r, _, e]),
                                v = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - r)}%` }, Xt(_, r), jt(e)),
                                    [r, _, i, e],
                                );
                            if (A) return null;
                            const S = B()(Gt, c, _ && 0 === i && Vt);
                            return s().createElement(
                                'div',
                                { style: D ? f : v, className: S },
                                s().createElement(
                                    'div',
                                    { style: p ? b : h, className: zt },
                                    s().createElement(Mt, { size: n }),
                                ),
                            );
                        },
                    ),
                    qt = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < t,
                                m = (0, a.useState)(!1),
                                d = m[0],
                                E = m[1],
                                A = (0, a.useCallback)(
                                    (e) => {
                                        e === It.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                D = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Tt, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: i,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: d ? F : D,
                                }),
                                t >= 0 &&
                                    s().createElement(Yt, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    Kt = ['onComplete', 'onEndAnimation'];
                function Zt() {
                    return (
                        (Zt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Zt.apply(this, arguments)
                    );
                }
                const Qt = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Kt);
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            o = n[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== i && o(e), e && u && u(), t && t();
                            }, [i, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case xt.Simple:
                                return s().createElement(Wt, Zt({}, r, { onEndAnimation: l, isComplete: i }));
                            case xt.Growing:
                                return s().createElement(qt, Zt({}, r, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    Jt = ['onEndAnimation'];
                function er() {
                    return (
                        (er =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        er.apply(this, arguments)
                    );
                }
                const ur = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, Jt);
                    const r = (0, a.useRef)({}),
                        n = (0, a.useCallback)(() => {
                            (r.current.from = void 0), u && u();
                        }, [u]),
                        i = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = i),
                        s().createElement(Qt, er({}, t, { onEndAnimation: n, key: `${i}-${t.to}`, from: i }))
                    );
                });
                function tr() {
                    return (
                        (tr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        tr.apply(this, arguments)
                    );
                }
                const rr = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: r,
                            deltaFrom: n,
                            animationSettings: a,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (n === u)
                                return s().createElement(Lt, {
                                    key: `${n}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: r,
                                    onComplete: l,
                                });
                            const c = {
                                from: n,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: r,
                                animationSettings: a,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return a.withStack
                                ? s().createElement(ur, c)
                                : s().createElement(Qt, tr({ key: `${n}-${u}` }, c));
                        },
                    ),
                    nr = (e) => ({
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
                    ar = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (ne(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    sr = {
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
                    ir = {
                        freezed: !1,
                        withStack: !1,
                        type: xt.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    or = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = sr,
                            size: t = wt.Default,
                            animationSettings: r = ir,
                            disabled: n = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: _,
                            onEndAnimation: m,
                            onComplete: d,
                        }) => {
                            const E = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const r = (ne(0, u, e) / u) * 100;
                                    return { value: r, deltaFrom: ar(r, u, t) };
                                }, [t, u, e]))(o, e, l);
                            return s().createElement(
                                'div',
                                { className: B()(St.base, St[`base__${t}`]), style: nr(u) },
                                !i && s().createElement(Rt, { size: t }),
                                s().createElement(rr, {
                                    size: t,
                                    lineRef: c,
                                    disabled: n,
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
                    lr = 'ActiveState_base_44',
                    cr = 'ActiveState_progressionWrapper_a0',
                    _r = 'ActiveState_topLine_b7',
                    mr = 'ActiveState_smallTitle_17',
                    dr = 'ActiveState_progressionBg_5a',
                    Er = 'ActiveState_progressBar_61',
                    Ar = 'ActiveState_percentWrapper_6d',
                    Dr = 'ActiveState_currentPercent_b3',
                    Fr = 'ActiveState_currentPercent__zero_d0',
                    pr = 'ActiveState_deltaPercent_56',
                    gr = 'ActiveState_scaleValueWrapper_16',
                    Cr = 'ActiveState_buttonsBlock_75',
                    hr = 'ActiveState_button_43',
                    Br = 'ActiveState_footerDescr_4d',
                    br = 'ActiveState_buttonReturnBlock_52',
                    fr = 100,
                    vr = R.strings.resource_well,
                    Sr = Object.assign({}, ir, {
                        freezed: !0,
                        withStack: !0,
                        type: xt.Simple,
                        delta: { duration: 500, delay: 0 },
                    }),
                    wr = ir,
                    xr = ({ isSmall: e, loadResources: u, onClose: t }) => {
                        const r = (0, X.tT)('model.vehicleCounter', X.DA.Shallow).isVehicleCountAvailable,
                            n = (0, X.tT)('model', X.DA.Shallow).isLoadingError,
                            i = (0, a.useContext)(Qe),
                            o = i.progression,
                            l = i.prevProgression,
                            c = i.setPrevProgression,
                            _ = i.delta,
                            m = i.setIsCardAnimationEnabled,
                            d = i.setResourcesAnimated,
                            E = i.setTabsAnimated,
                            A = i.setResources,
                            D = (0, a.useState)(Sr),
                            F = D[0],
                            p = D[1],
                            g = Boolean(_);
                        (0, a.useEffect)(() => {
                            o + _ === fr && o !== fr && (0, U.G)('resources_well_progress_click_oneshot');
                        }, [o, _, g]),
                            (0, a.useEffect)(() => {
                                o && void 0 !== l && o > l && p(wr);
                            }, [l, o, F]),
                            (0, a.useEffect)(() => {
                                n && (A({}), p(wr));
                            }, [n, A]);
                        const C = s().createElement(uu.z, {
                                classMix: B()(Dr, 0 === o && Fr),
                                text: vr.resourcesLoadingView.counter.current(),
                                binding: { current: o },
                            }),
                            h = s().createElement(uu.z, {
                                classMix: pr,
                                text: vr.resourcesLoadingView.counter.delta(),
                                binding: { delta: _.toFixed() },
                            }),
                            b = { current: C, delta: h },
                            f = { progressDiff: parseInt(_.toFixed()) },
                            v = s().createElement(uu.z, {
                                text: vr.resourcesLoadingView.counter.currentWithDelta(),
                                binding: b,
                            }),
                            S = (0, a.useCallback)(() => {
                                u();
                            }, [u]),
                            w = (0, a.useCallback)(() => {
                                c(o),
                                    _ || (o !== l && (0, U.G)('resources_well_progress_done_stop')),
                                    p(Sr),
                                    d({}),
                                    E({}),
                                    m(!1);
                            }, [c, o, _, d, E, m, l]);
                        return s().createElement(
                            'div',
                            { className: lr },
                            s().createElement(
                                'div',
                                { className: cr },
                                s().createElement(
                                    'div',
                                    { className: _r },
                                    s().createElement(
                                        'div',
                                        { className: mr },
                                        vr.mainView.footer.activeState.progression.smallTitle.text(),
                                    ),
                                    s().createElement(
                                        Wu,
                                        {
                                            contentId: R.views.lobby.resource_well.tooltips.ProgressTooltip('resId'),
                                            args: f,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: Ar },
                                            0 === _ ? C : 0 === o && 0 !== _ ? h : v,
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: dr },
                                    s().createElement(
                                        'div',
                                        { className: Er },
                                        s().createElement(
                                            Wu,
                                            {
                                                contentId:
                                                    R.views.lobby.resource_well.tooltips.ProgressTooltip('resId'),
                                                args: f,
                                            },
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(or, {
                                                    value: o + _,
                                                    deltaFrom: l,
                                                    maxValue: fr,
                                                    animationSettings: F,
                                                    onEndAnimation: w,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: gr },
                                    s().createElement('span', null, 0, '%'),
                                    s().createElement('span', null, fr, '%'),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: Cr },
                                r
                                    ? s().createElement(
                                          vt.u5,
                                          {
                                              type: vt.L$.main,
                                              size: e ? vt.qE.small : vt.qE.medium,
                                              onClick: S,
                                              mixClass: hr,
                                              disabled: !g,
                                          },
                                          vr.resourcesLoadingView.buttons.load(),
                                      )
                                    : s().createElement(
                                          $u,
                                          { body: vr.tooltips.resourcesLoadingView.buttonDisabled.body() },
                                          s().createElement(
                                              'div',
                                              null,
                                              s().createElement(
                                                  vt.u5,
                                                  {
                                                      type: vt.L$.main,
                                                      size: e ? vt.qE.small : vt.qE.medium,
                                                      mixClass: hr,
                                                      disabled: !0,
                                                  },
                                                  vr.resourcesLoadingView.buttons.load(),
                                              ),
                                          ),
                                      ),
                                s().createElement(
                                    'div',
                                    { className: br },
                                    s().createElement(
                                        vt.u5,
                                        {
                                            type: vt.L$.primary,
                                            size: e ? vt.qE.small : vt.qE.medium,
                                            onClick: t,
                                            mixClass: hr,
                                        },
                                        vr.resourcesLoadingView.buttons.close(),
                                    ),
                                ),
                            ),
                            s().createElement('div', { className: Br }, vr.mainView.footer.description.text()),
                        );
                    },
                    Rr = ({ progressionState: e, onHangarShow: u, loadResources: t, onClose: r }) => {
                        const n = x().mediaSize <= v.Small,
                            a = e === Ct.Active || e === Ct.NoProgress;
                        return s().createElement(
                            'div',
                            { className: B()(Bt, a && bt) },
                            s().createElement('div', { className: ft }),
                            e === Ct.NoVehicles && s().createElement(ht.t, { isSmall: n, onHangarShow: u }),
                            a && s().createElement(xr, { isSmall: n, onClose: r, loadResources: t }),
                        );
                    },
                    yr = 'Header_base_3b',
                    Mr = 'Header_title_10',
                    Nr = 'Header_subtitle_0d',
                    Tr = () =>
                        s().createElement(
                            'div',
                            { className: yr },
                            s().createElement(
                                'div',
                                { className: Mr },
                                R.strings.resource_well.commonTexts.eventTitle(),
                            ),
                            s().createElement(
                                'div',
                                { className: Nr },
                                R.strings.resource_well.resourcesLoadingView.subtitle(),
                            ),
                        ),
                    Lr = () => {
                        const e = (0, X.tT)('model', X.DA.Shallow),
                            u = e.loadResources,
                            t = e.progressionState,
                            r = e.progression,
                            n = e.showHangar,
                            i = e.isLoadingError,
                            o = (0, X.tT)('model.resourcesTabs', X.DA.Deep),
                            l = (0, a.useContext)(Qe),
                            c = l.resources,
                            _ = l.setProgression,
                            m = l.setPrevProgression,
                            d = l.setResources,
                            E = l.prevProgression,
                            A = l.setIsAnimationEnabled,
                            D = l.delta,
                            F = l.setResourcesAnimated,
                            p = l.setIsCardAnimationEnabled;
                        _(r), (0, a.useEffect)(() => m(r), []);
                        const g = R.strings.menu.viewHeader.closeBtn.label(),
                            C = (0, a.useCallback)(() => (0, Y.Sy)(), []);
                        var h;
                        (h = C), K(j.n.ESCAPE, h);
                        const B = (0, a.useCallback)(() => {
                                const e = ((e) => {
                                    const u = {};
                                    for (var t = 0, r = Object.entries(e); t < r.length; t++) {
                                        const e = r[t],
                                            n = e[0],
                                            a = e[1];
                                        a.value > 0 && (u[n] = a.value);
                                    }
                                    return u;
                                })(c);
                                u(e), F(e);
                            }, [c, u, F]),
                            b = (0, a.useCallback)(() => n(), [n]);
                        return (
                            (0, a.useEffect)(() => {
                                d({});
                            }, [r, d]),
                            (0, a.useEffect)(() => {
                                i && (d({}), p(!1), A(!1));
                            }, [i, d, p, A]),
                            (0, a.useEffect)(() => {
                                Boolean(r) && void 0 !== E && r > E && p(!0);
                            }, [E, r, p, t]),
                            (0, a.useEffect)(() => {
                                const e = t === $.NoProgress;
                                ((Boolean(r) && e) || D > 0) &&
                                    (r !== E && (0, U.G)('resources_well_progress_done_start'), A(!0));
                            }, [E, r, A, t, D]),
                            s().createElement(
                                'div',
                                { className: ue },
                                s().createElement('div', { className: re }, s().createElement(ee.M, null)),
                                s().createElement(Tr, null),
                                s().createElement(
                                    'div',
                                    { className: te },
                                    s().createElement(z, { caption: g, type: 'close', side: 'right', onClick: C }),
                                ),
                                s().createElement(gt, { resourcesTabs: o }),
                                s().createElement(Rr, {
                                    onHangarShow: b,
                                    progressionState: t,
                                    onClose: C,
                                    loadResources: B,
                                }),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    H().render(
                        s().createElement(Je, null, s().createElement(O, null, s().createElement(Lr, null))),
                        document.getElementById('root'),
                    );
                });
            },
            6324: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => _ });
                var r = t(3457),
                    n = t(6179),
                    a = t.n(n);
                const s = 'NoVehiclesState_footerTitle_e9',
                    i = 'NoVehiclesState_footerSubtitle_3e',
                    o = 'NoVehiclesState_buttonsBlock_83',
                    l = 'NoVehiclesState_button_86',
                    c = R.strings.resource_well.mainView.footer,
                    _ = ({ isSmall: e, onHangarShow: u }) => {
                        const t = (0, n.useCallback)(() => {
                            u();
                        }, [u]);
                        return a().createElement(
                            a().Fragment,
                            null,
                            a().createElement('div', { className: s }, c.noVehicles.title()),
                            a().createElement('div', { className: i }, c.noVehicles.subTitle()),
                            a().createElement(
                                'div',
                                { className: o },
                                a().createElement(
                                    r.u5,
                                    { type: r.L$.primary, size: e ? r.qE.small : r.qE.medium, onClick: t, mixClass: l },
                                    c.backToHangar.button.text(),
                                ),
                            ),
                        );
                    };
            },
            8288: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => b });
                var r = t(6483),
                    n = t.n(r),
                    a = t(280),
                    s = t(2344),
                    i = t(6179),
                    o = t.n(i),
                    l = t(9953),
                    c = t(4306);
                const _ = 'VehicleCount_base_05',
                    m = 'VehicleCount_text_91',
                    d = 'VehicleCount_text__alert_2f',
                    E = 'VehicleCount_text__finished_4c',
                    A = 'VehicleCount_textCounter_17',
                    D = 'VehicleCount_alertIcon_98',
                    F = 'VehicleCount_counterWrapper_1f',
                    p = 'VehicleCount_counterBg_48',
                    g = 'VehicleCount_counterGlow_f5',
                    C = 'VehicleCount_animations__enter_d7',
                    h = 'VehicleCount_animations__exit_2b',
                    B = { remainTop: 'remainTop', remain: 'remain', noRemains: 'noRemains', noData: 'noData' },
                    b = () => {
                        const e = (0, s.tT)('model.vehicleCounter', s.DA.Shallow),
                            u = e.vehicleCount,
                            t = e.isVehicleCountAvailable,
                            r = e.isTopVehicle,
                            i = u < 20,
                            b = t && u > 0,
                            f =
                                b && r
                                    ? B.remainTop
                                    : b && !r
                                      ? B.remain
                                      : t && 0 === u
                                        ? B.noRemains
                                        : t
                                          ? void 0
                                          : B.noData,
                            v = { enter: C, exit: h },
                            S = {
                                counter: o().createElement(
                                    'div',
                                    { className: F },
                                    i && o().createElement('span', { className: g }),
                                    o().createElement('span', { className: A }, u),
                                ),
                                icon: o().createElement('span', { className: D }),
                            };
                        return o().createElement(
                            'div',
                            { className: _ },
                            o().createElement(
                                l.Z,
                                null,
                                o().createElement(
                                    c.Z,
                                    { key: `state-${B}-${u}`, timeout: 300, classNames: v },
                                    o().createElement(
                                        'div',
                                        null,
                                        (() => {
                                            switch (f) {
                                                case B.remainTop:
                                                    return o().createElement(a.z, {
                                                        classMix: m,
                                                        text: R.strings.resource_well.resourcesLoadingView.remainTopVehicles(),
                                                        binding: S,
                                                    });
                                                case B.remain:
                                                    return o().createElement(a.z, {
                                                        classMix: m,
                                                        text: R.strings.resource_well.resourcesLoadingView.remainVehicles(),
                                                        binding: S,
                                                    });
                                                case B.noRemains:
                                                    return o().createElement(
                                                        o().Fragment,
                                                        null,
                                                        o().createElement('span', { className: p }),
                                                        o().createElement(
                                                            'span',
                                                            { className: n()(m, E) },
                                                            R.strings.resource_well.resourcesLoadingView.noVehiclesRemains(),
                                                        ),
                                                    );
                                                case B.noData:
                                                    return o().createElement(a.z, {
                                                        classMix: n()(m, d),
                                                        text: R.strings.resource_well.resourcesLoadingView.noVehicleData(),
                                                        binding: S,
                                                    });
                                            }
                                        })(),
                                    ),
                                ),
                            ),
                        );
                    };
            },
            6880: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
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
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = { base: 'FormatText_base_d0' };
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
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, r] = deferred[o], a = !0, s = 0; s < u.length; s++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, r];
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
        (__webpack_require__.j = 498),
        (() => {
            var e = { 498: 0, 784: 0, 418: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, s, i] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        (n = a[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [52], () => __webpack_require__(6840));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
