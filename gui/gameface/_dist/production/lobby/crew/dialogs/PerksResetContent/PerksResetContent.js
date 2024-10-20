(() => {
    var __webpack_modules__ = {
            7405: (u, e, t) => {
                'use strict';
                t.d(e, { F: () => E });
                var r = t(6483),
                    n = t.n(r),
                    a = t(6179),
                    i = t.n(a),
                    s = t(329),
                    l = t(2372),
                    o = t(8460);
                const c = ({
                    isDiscount: u,
                    isInteractiveDiscount: e,
                    size: t,
                    type: r,
                    isEnough: a,
                    value: c,
                    discountValue: E,
                    showPlus: A,
                    stockBackgroundName: _ = s.we.Red,
                }) => {
                    const F = n()(o.Z.value, o.Z[`value__${r}`], !a && o.Z.value__notEnough),
                        d = n()(o.Z.icon, o.Z[`icon__${r}-${t}`]),
                        m = n()(o.Z.stock, E && o.Z.stock__indent, e && o.Z.stock__interactive),
                        D = A && c > 0 && '+',
                        B = n()(o.Z.base, o.Z[`base__${t}`]);
                    return i().createElement(
                        'span',
                        { className: B },
                        i().createElement(
                            'span',
                            { className: F },
                            D,
                            i().createElement(l.A, { value: c, format: r === s.V2.gold ? 'gold' : 'integral' }),
                        ),
                        i().createElement('span', { className: d }),
                        u &&
                            i().createElement(
                                'span',
                                { className: m },
                                i().createElement('span', {
                                    className: o.Z.stockBackground,
                                    style: { backgroundImage: `url(R.images.gui.maps.icons.library.${_})` },
                                }),
                                Boolean(E) && E,
                            ),
                    );
                };
                c.defaultProps = { isEnough: !0 };
                const E = i().memo(c);
            },
            329: (u, e, t) => {
                'use strict';
                let r, n, a;
                t.d(e, { V2: () => n, we: () => a }),
                    (function (u) {
                        (u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge');
                    })(r || (r = {})),
                    (function (u) {
                        (u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.equipCoin = 'equipCoin');
                    })(n || (n = {})),
                    (function (u) {
                        (u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG');
                    })(a || (a = {}));
            },
            2372: (u, e, t) => {
                'use strict';
                t.d(e, { A: () => i });
                var r = t(6179),
                    n = t.n(r),
                    a = t(4179);
                const i = ({ format: u, value: e }) => {
                    const t = ((u, e = 'integral') => {
                        let t;
                        t = 'gold' === e ? a.B3.GOLD : a.B3.INTEGRAL;
                        return void 0 === u ? '' : a.Z5.getNumberFormat(u, t);
                    })(e, u);
                    return t ? n().createElement('span', null, t) : null;
                };
            },
            3495: (u, e, t) => {
                'use strict';
                t.d(e, { Y: () => E });
                var r = t(3138),
                    n = t(6179),
                    a = t(1043),
                    i = t(5262);
                const s = r.O.client.getSize('rem'),
                    l = s.width,
                    o = s.height,
                    c = Object.assign({ width: l, height: o }, (0, i.T)(l, o, a.j)),
                    E = (0, n.createContext)(c);
            },
            1039: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => c });
                var r = t(6179),
                    n = t.n(r),
                    a = t(6536),
                    i = t(3495),
                    s = t(1043),
                    l = t(5262),
                    o = t(3138);
                const c = (0, r.memo)(({ children: u }) => {
                    const e = (0, r.useContext)(i.Y),
                        t = (0, r.useState)(e),
                        c = t[0],
                        E = t[1],
                        A = (0, r.useCallback)((u, e) => {
                            const t = o.O.view.pxToRem(u),
                                r = o.O.view.pxToRem(e);
                            E(Object.assign({ width: t, height: r }, (0, l.T)(t, r, s.j)));
                        }, []);
                    (0, a.Z)(() => {
                        engine.on('clientResized', A);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', A), [A]);
                    const _ = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return n().createElement(i.Y.Provider, { value: _ }, u);
                });
            },
            6010: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    n = t(7382),
                    a = t(3495);
                const i = ['children'];
                const s = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, i);
                    const s = (0, r.useContext)(a.Y),
                        l = s.extraLarge,
                        o = s.large,
                        c = s.medium,
                        E = s.small,
                        A = s.extraSmall,
                        _ = s.extraLargeWidth,
                        F = s.largeWidth,
                        d = s.mediumWidth,
                        m = s.smallWidth,
                        D = s.extraSmallWidth,
                        B = s.extraLargeHeight,
                        C = s.largeHeight,
                        g = s.mediumHeight,
                        h = s.smallHeight,
                        p = s.extraSmallHeight,
                        b = { extraLarge: B, large: C, medium: g, small: h, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && l) return e;
                        if (t.large && o) return e;
                        if (t.medium && c) return e;
                        if (t.small && E) return e;
                        if (t.extraSmall && A) return e;
                    } else {
                        if (t.extraLargeWidth && _) return (0, n.H)(e, t, b);
                        if (t.largeWidth && F) return (0, n.H)(e, t, b);
                        if (t.mediumWidth && d) return (0, n.H)(e, t, b);
                        if (t.smallWidth && m) return (0, n.H)(e, t, b);
                        if (t.extraSmallWidth && D) return (0, n.H)(e, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && h) return e;
                            if (t.extraSmallHeight && p) return e;
                        }
                    }
                    return null;
                };
                s.defaultProps = {
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
                (0, r.memo)(s);
            },
            7382: (u, e, t) => {
                'use strict';
                t.d(e, { H: () => r });
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
            },
            7739: (u, e, t) => {
                'use strict';
                t.d(e, { YN: () => n.Y, ZN: () => r.Z });
                t(6010);
                var r = t(1039),
                    n = t(3495);
            },
            1043: (u, e, t) => {
                'use strict';
                t.d(e, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (u, e, t) => {
                'use strict';
                var r;
                function n(u, e, t) {
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
                        n = (function (u, e) {
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
                t.d(e, { T: () => n }),
                    (function (u) {
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
                    })(r || (r = {}));
            },
            7078: (u, e, t) => {
                'use strict';
                t.d(e, { t: () => l });
                var r = t(6179),
                    n = t.n(r),
                    a = t(2056);
                const i = ['children'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, i);
                    return n().createElement(
                        a.u,
                        s(
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
                };
            },
            3415: (u, e, t) => {
                'use strict';
                t.d(e, { l: () => o });
                var r = t(6179),
                    n = t.n(r),
                    a = t(7078),
                    i = t(6373),
                    s = t(2056);
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const o = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const r = n().createElement('div', { className: t }, u);
                    if (e.header || e.body) return n().createElement(i.i, e, r);
                    const o = e.contentId,
                        c = e.args,
                        E = null == c ? void 0 : c.contentId;
                    return o || E
                        ? n().createElement(s.u, l({}, e, { contentId: o || E }), r)
                        : n().createElement(a.t, e, r);
                };
            },
            6373: (u, e, t) => {
                'use strict';
                t.d(e, { i: () => o });
                var r = t(2056),
                    n = t(6179),
                    a = t.n(n);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = R.views.common.tooltip_window.simple_tooltip_content,
                    o = (u) => {
                        let e = u.children,
                            t = u.body,
                            o = u.header,
                            c = u.note,
                            E = u.alert,
                            A = u.args,
                            _ = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, i);
                        const F = (0, n.useMemo)(() => {
                            const u = Object.assign({}, A, { body: t, header: o, note: c, alert: E });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [E, t, o, c, A]);
                        return a().createElement(
                            r.u,
                            s(
                                {
                                    contentId:
                                        ((d = null == A ? void 0 : A.hasHtmlContent),
                                        d ? l.SimpleTooltipHtmlContent('resId') : l.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: F,
                                },
                                _,
                            ),
                            e,
                        );
                        var d;
                    };
            },
            2056: (u, e, t) => {
                'use strict';
                t.d(e, { u: () => o });
                var r = t(7902),
                    n = t(4179),
                    a = t(6179);
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
                const l = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    o = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            o = u.onMouseEnter,
                            c = u.onMouseLeave,
                            E = u.onMouseDown,
                            A = u.onClick,
                            _ = u.ignoreShowDelay,
                            F = void 0 !== _ && _,
                            d = u.ignoreMouseClick,
                            m = void 0 !== d && d,
                            D = u.decoratorId,
                            B = void 0 === D ? 0 : D,
                            C = u.isEnabled,
                            g = void 0 === C || C,
                            h = u.targetId,
                            p = void 0 === h ? 0 : h,
                            b = u.onShow,
                            v = u.onHide,
                            f = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, i);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            x = (0, a.useMemo)(() => p || (0, r.F)().resId, [p]),
                            y = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (l(t, B, { isMouseEvent: !0, on: !0, arguments: s(n) }, x),
                                    b && b(),
                                    (w.current.isVisible = !0));
                            }, [t, B, n, x, b]),
                            L = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const u = w.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (w.current.timeoutId = 0)),
                                        l(t, B, { on: !1 }, x),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, B, x, v]),
                            S = (0, a.useCallback)((u) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(w.current.prevTarget) && L();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const u = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && L();
                            }, [g, L]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', L),
                                    () => {
                                        window.removeEventListener('mouseleave', L), L();
                                    }
                                ),
                                [L],
                            );
                        return g
                            ? (0, a.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(y, F ? 100 : 400)),
                                                      o && o(u),
                                                      k && k(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              L(), null == c || c(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === m && L(), null == A || A(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === m && L(), null == E || E(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : e;
                        var k;
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
            3532: (u) => {
                u.exports = {
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
            9887: (u) => {
                u.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            8246: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => s });
                var r = t(3138);
                function n(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return a(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(u, e);
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
                function a(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const i = (u) => (0 === u ? window : window.subViews.get(u));
                function s({ initializer: u = !0, rootId: e = 0, getRoot: t = i, context: a = 'model' } = {}) {
                    const s = new Map();
                    function l(u, e = 0) {
                        viewEnv.removeDataChangedCallback(u, e)
                            ? s.delete(u)
                            : console.error("Can't remove callback by id:", u);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (u, e, t) => {
                            t.forEach((e) => {
                                const t = s.get(e);
                                void 0 !== t && t(u);
                            });
                        });
                    });
                    const o = (u) => {
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
                                l = r.O.view.addModelObserver(i, e, !0);
                            return s.set(l, t), u && t(o(n)), l;
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
                            for (var u, t = n(s.keys()); !(u = t()).done; ) {
                                l(u.value, e);
                            }
                        },
                        unsubscribe: l,
                    };
                }
            },
            3215: (u, e, t) => {
                'use strict';
                t.d(e, { q: () => l });
                var r = t(4598),
                    n = t(9174),
                    a = t(6179),
                    i = t.n(a),
                    s = t(8246);
                const l = () => (u, e) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: o, children: c, mocks: E }) {
                            const A = (0, a.useRef)([]),
                                _ = (t, a, i) => {
                                    var l;
                                    const o = s.U(a),
                                        c =
                                            'real' === t
                                                ? o
                                                : Object.assign({}, o, {
                                                      readByPath:
                                                          null != (l = null == i ? void 0 : i.getter) ? l : () => {},
                                                  }),
                                        E = (u) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(u)) : c.readByPath(u),
                                        _ = (u) => A.current.push(u),
                                        F = u({
                                            mode: t,
                                            readByPath: E,
                                            externalModel: c,
                                            observableModel: {
                                                array: (u, e) => {
                                                    const a = null != e ? e : E(u),
                                                        i = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((u) => i.set(u)),
                                                                u,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (u, e) => {
                                                    const a = null != e ? e : E(u),
                                                        i = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((u) => i.set(u)),
                                                                u,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (u, e) => {
                                                    const r = E(e);
                                                    if (Array.isArray(u)) {
                                                        const a = u.reduce(
                                                            (u, e) => ((u[e] = n.LO.box(r[e], {})), u),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((e) => {
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
                                                            i = Object.entries(a),
                                                            s = i.reduce(
                                                                (u, [e, t]) => ((u[t] = n.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((u) => {
                                                                        i.forEach(([e, t]) => {
                                                                            s[t].set(u[e]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: _,
                                        }),
                                        d = { mode: t, model: F, externalModel: c, cleanup: _ };
                                    return {
                                        model: F,
                                        controls: 'mocks' === t && i ? i.controls(d) : e(d),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                F = (0, a.useRef)(!1),
                                d = (0, a.useState)(l),
                                m = d[0],
                                D = d[1],
                                B = (0, a.useState)(() => _(l, o, E)),
                                C = B[0],
                                g = B[1];
                            return (
                                (0, a.useEffect)(() => {
                                    F.current ? g(_(m, o, E)) : (F.current = !0);
                                }, [E, m, o]),
                                (0, a.useEffect)(() => {
                                    D(l);
                                }, [l]),
                                (0, a.useEffect)(
                                    () => () => {
                                        C.externalModel.dispose(), A.current.forEach((u) => u());
                                    },
                                    [C],
                                ),
                                i().createElement(t.Provider, { value: C }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            527: (u, e, t) => {
                'use strict';
                t.r(e), t.d(e, { mouse: () => s, onResize: () => a });
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    i = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const s = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, n.R)(!0);
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
                            : (0, n.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${e}`,
                                        s = i[e]((u) => t([u, 'outside']));
                                    function l(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, l),
                                        r(),
                                        () => {
                                            n &&
                                                (s(),
                                                window.removeEventListener(a, l),
                                                (u.listeners -= 1),
                                                r(),
                                                (n = !1));
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
                            u.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => i,
                    });
                var r = t(527);
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(u = 'px') {
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
                function r(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => r });
            },
            2472: (u, e, t) => {
                'use strict';
                function r(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => r });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (u, e, t) => {
                'use strict';
                function r(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${r(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
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
            7641: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => f,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => d,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => v,
                        getScale: () => m,
                        getSize: () => A,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    });
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    i = t(8566);
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function o(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function c(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function E(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function F(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function d() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function D(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function C(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    w = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    x = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : a.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => o });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    i = 32,
                    s = 64,
                    l = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([u, e]) => {
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
                        var n;
                    },
                    o = {
                        close(u) {
                            l('popover' === u ? n : i);
                        },
                        minimize() {
                            l(s);
                        },
                        move(u) {
                            l(a, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            4598: (u, e, t) => {
                'use strict';
                function r() {}
                t.d(e, { ZT: () => r, jv: () => a, yR: () => n });
                function n(u) {
                    return u;
                }
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (u, e, t) => {
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
            6536: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                var r = t(6179);
                const n = (u) => {
                    const e = (0, r.useRef)(!1);
                    e.current || (u(), (e.current = !0));
                };
            },
            5415: (u, e, t) => {
                'use strict';
                t.d(e, { Aq: () => l, GS: () => o, cJ: () => i, fd: () => s });
                var r = t(6179),
                    n = t(7739),
                    a = t(1043);
                let i, s, l;
                !(function (u) {
                    (u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = a.j.small.width)] = 'Small'),
                        (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                        (u[(u.Large = a.j.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(i || (i = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.width)] = 'Small'),
                            (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                            (u[(u.Large = a.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(s || (s = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.height)] = 'Small'),
                            (u[(u.Medium = a.j.medium.height)] = 'Medium'),
                            (u[(u.Large = a.j.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(l || (l = {}));
                const o = () => {
                    const u = (0, r.useContext)(n.YN),
                        e = u.width,
                        t = u.height,
                        a = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return i.ExtraLarge;
                                case u.large:
                                    return i.Large;
                                case u.medium:
                                    return i.Medium;
                                case u.small:
                                    return i.Small;
                                case u.extraSmall:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(u),
                        o = ((u) => {
                            switch (!0) {
                                case u.extraLargeWidth:
                                    return s.ExtraLarge;
                                case u.largeWidth:
                                    return s.Large;
                                case u.mediumWidth:
                                    return s.Medium;
                                case u.smallWidth:
                                    return s.Small;
                                case u.extraSmallWidth:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(u),
                        c = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return l.ExtraLarge;
                                case u.largeHeight:
                                    return l.Large;
                                case u.mediumHeight:
                                    return l.Medium;
                                case u.smallHeight:
                                    return l.Small;
                                case u.extraSmallHeight:
                                    return l.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), l.ExtraSmall;
                            }
                        })(u);
                    return { mediaSize: a, mediaWidth: o, mediaHeight: c, remScreenWidth: e, remScreenHeight: t };
                };
            },
            4419: (u, e, t) => {
                'use strict';
                t.d(e, { y: () => a });
                var r = t(8045),
                    n = t(6179);
                const a = (u, e, t = !0) => {
                    const a = (0, n.useCallback)(
                        (u) => {
                            const t = u[0];
                            e && e(t);
                        },
                        [e],
                    );
                    (0, n.useEffect)(() => {
                        if (!u.current || !t) return;
                        const e = new r.Z((u) => a(u));
                        return (
                            e.observe(u.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [a, t, u]);
                };
            },
            5521: (u, e, t) => {
                'use strict';
                let r, n;
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
                    })(n || (n = {}));
            },
            9480: (u, e, t) => {
                'use strict';
                function r(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                t.d(e, { U2: () => r, UI: () => n });
                function n(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, r) => e(null == u ? void 0 : u.value, t, r));
                }
            },
            7727: (u, e, t) => {
                'use strict';
                function r(u) {
                    engine.call('PlaySound', u);
                }
                t.d(e, { $: () => n });
                const n = {
                    playHighlight() {
                        r('highlight');
                    },
                    playClick() {
                        r('play');
                    },
                    playYes() {
                        r('yes1');
                    },
                };
            },
            3649: (u, e, t) => {
                'use strict';
                let r;
                function n(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                t.d(e, { Eg: () => i, Uw: () => _, uF: () => n, v2: () => r, z4: () => a }),
                    (function (u) {
                        (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                    })(r || (r = {}));
                const a = (u) => u.replace(/&nbsp;/g, ' '),
                    i = (u) => u.replace(/&zwnbsp;/g, '\ufeff'),
                    s = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    l = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    o = (u, e, t = r.left) => u.split(e).reduce(t === r.left ? s : l, []),
                    c = (() => {
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
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    A = (u, e = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return E.includes(t)
                            ? c(u)
                            : ((u, e = r.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      i = a(u);
                                  return o(i, /( )/, e).forEach((u) => (t = t.concat(o(u, n, r.left)))), t;
                              })(u, e);
                    },
                    _ = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : A(u, e)));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var r = t(3138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(u, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
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
                t.d(e, { B3: () => o, Z5: () => i, B0: () => l, ry: () => B });
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
                const n = r;
                var a = t(1358);
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
                let l;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(l || (l = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    F = t(3138);
                const d = ['args'];
                function m(u, e, t, r, n, a, i) {
                    try {
                        var s = u[a](i),
                            l = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(l) : Promise.resolve(l).then(r, n);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    B = (function () {
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
                                    return new Promise(function (r, n) {
                                        var a = u.apply(e, t);
                                        function i(u) {
                                            m(a, r, n, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            m(a, r, n, i, s, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, d);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    g = () => C(l.CLOSE),
                    h = (u, e) => {
                        u.keyCode === _.n.ESCAPE && e();
                    };
                var p = t(7572);
                const b = n.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: l,
                        NumberFormatType: o,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: A,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => C(l.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => C(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), a) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                o = s.x,
                                c = s.y,
                                E = s.width,
                                A = s.height,
                                _ = {
                                    x: F.O.view.pxToRem(o) + i.x,
                                    y: F.O.view.pxToRem(c) + i.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(A),
                                };
                            C(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: D(_),
                                on: !0,
                                args: a,
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
                        handleViewEvent: C,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: i,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = v;
            },
            3618: (u, e, t) => {
                'use strict';
                t.d(e, { w: () => _ });
                var r = t(6483),
                    n = t.n(r),
                    a = t(3415),
                    i = t(4419),
                    s = t(6179),
                    l = t.n(s),
                    o = t(6143),
                    c = t(3310),
                    E = t(131),
                    A = t(9053);
                const _ = l().memo(
                    ({
                        text: u,
                        classMix: e,
                        onSizeChanged: t,
                        binding: r,
                        isTooltipEnable: _ = !1,
                        isTruncationAvailable: F = !1,
                        targetId: d,
                        justifyContent: m = A.v2.FlexStart,
                        alignContent: D = A.v2.FlexStart,
                        truncateIdentify: B = A.YA,
                    }) => {
                        const C = (0, s.useRef)(null),
                            g = (0, s.useRef)({ height: 0, width: 0 }),
                            h = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            p = h[0],
                            b = h[1],
                            v = (0, s.useMemo)(() => (0, c.s)(u, r), [r, u]),
                            f = (0, s.useMemo)(() => {
                                if (_ && p.isTruncated)
                                    return {
                                        args: { text: u, stringifyKwargs: r ? JSON.stringify(r) : '' },
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: d,
                                    };
                            }, [r, _, d, u, p.isTruncated]),
                            w = (0, s.useCallback)(
                                (u) => {
                                    (g.current.width = u.contentRect.width), (g.current.height = u.contentRect.height);
                                    const e = (0, E.T)(C, v, g.current, B),
                                        r = e[0],
                                        n = e[1];
                                    b({ elementList: r, isTruncated: n, isTruncateFinished: !0 }), t && t(n);
                                },
                                [t, B, v],
                            ),
                            x = (0, s.useMemo)(() => ({ justifyContent: m, alignContent: D }), [D, m]);
                        return (
                            (0, i.y)(C, w, F),
                            l().createElement(
                                'div',
                                {
                                    className: n()(
                                        o.Z.base,
                                        e,
                                        o.Z.base__zeroPadding,
                                        F && o.Z.base__isTruncationAvailable,
                                    ),
                                    style: x,
                                },
                                l().createElement('div', { className: o.Z.unTruncated, ref: C }, v),
                                l().createElement(
                                    a.l,
                                    { tooltipArgs: f },
                                    l().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                o.Z.truncated,
                                                !p.isTruncateFinished && F && o.Z.truncated__hide,
                                            ),
                                            style: x,
                                        },
                                        p.isTruncateFinished && F ? p.elementList : v,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (u, e, t) => {
                'use strict';
                t.d(e, { s: () => E });
                var r = t(3649),
                    n = t(6799),
                    a = t(6960),
                    i = t(9053);
                const s = (u) => {
                        const e = /[\s\u002d]/g;
                        let t = e.exec(u);
                        if (!t) return [u];
                        const r = [];
                        let n = 0;
                        for (; t; ) r.push(u.slice(n, e.lastIndex)), (n = e.lastIndex), (t = e.exec(u));
                        return n !== u.length && r.push(u.slice(n)), r;
                    },
                    l = (u, e = '') => {
                        const t = [];
                        return (
                            (0, a.Z)(
                                u,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (u) => {
                                    t.push({ blockType: i.kH.Word, colorTag: e, childList: s(u) });
                                },
                                (u) => {
                                    const r = u[0],
                                        n = i.aF[r.charAt(0)];
                                    n === i.kH.LineBreak
                                        ? t.push(
                                              ...((u) => {
                                                  const e = [
                                                      {
                                                          blockType: i.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < u.length - 1; t++)
                                                      e.push({
                                                          blockType: i.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      });
                                                  return e;
                                              })(r),
                                          )
                                        : t.push({ blockType: n, colorTag: e, childList: [r] });
                                },
                            ),
                            t
                        );
                    },
                    o = (u, e, t = '') => {
                        const r = [];
                        return (
                            (0, a.Z)(
                                u,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (u) => {
                                    r.push(...l(u, t));
                                },
                                (u) => {
                                    const n = u[1],
                                        a = void 0 === e[n] ? u[0] : e[n];
                                    'string' == typeof a || 'number' == typeof a
                                        ? r.push(...l(String(a), t))
                                        : r.push({ blockType: i.kH.Binding, colorTag: t, childList: [a] });
                                },
                            ),
                            r
                        );
                    },
                    c = (u, e) => {
                        if (!u) return [e];
                        const t = [],
                            r = Object.assign({}, e, { childList: e.childList.splice(0, 1) });
                        if (u.blockType === i.kH.NoBreakWrapper) u.childList.push(r), t.push(u);
                        else {
                            const e = Object.assign({}, u, { childList: u.childList.splice(-1) });
                            u.childList.length > 0 && t.push(u),
                                t.push({ blockType: i.kH.NoBreakWrapper, colorTag: '', childList: [e, r] });
                        }
                        return e.childList.length > 0 && t.push(e), t;
                    },
                    E = (u, e = {}) => {
                        if (!u) return [];
                        const t = ((u) => {
                            const e = [];
                            let t = !1;
                            return (
                                u.forEach((u) => {
                                    u.blockType === i.kH.NoBreakSymbol
                                        ? ((t = !0), e.push(...c(e.pop(), u)))
                                        : (t ? e.push(...c(e.pop(), u)) : e.push(u), (t = !1));
                                }),
                                e
                            );
                        })(
                            ((u, e) => {
                                const t = [];
                                return (
                                    (0, a.Z)(
                                        u,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (u) => {
                                            t.push(...o(u, e));
                                        },
                                        (u) => {
                                            t.push(...o(u[2], e, u[1]));
                                        },
                                    ),
                                    t
                                );
                            })((0, r.Eg)((0, r.z4)(u)), e),
                        );
                        return (0, n.w)(t);
                    };
            },
            6799: (u, e, t) => {
                'use strict';
                t.d(e, { w: () => i });
                var r = t(597),
                    n = t(9053);
                const a = (u, e, t) => {
                        const i = [];
                        return (
                            u.childList.forEach((s, l) => {
                                const o = `${t}_${l}`;
                                if ((0, n.dz)(s)) {
                                    const u = s,
                                        e = u.blockType,
                                        t = r.IY[e],
                                        n = a(u, t, o);
                                    i.push(...n);
                                } else i.push(e({ elementList: [s], textBlock: u, key: o }));
                            }),
                            i
                        );
                    },
                    i = (u) => {
                        const e = [];
                        return (
                            u.forEach((u, t) => {
                                e.push(
                                    ...((u, e) => {
                                        const t = [],
                                            i = u.blockType,
                                            s = r.IY[i],
                                            l = a(u, s, e);
                                        return (
                                            i === n.kH.NoBreakWrapper
                                                ? t.push(s({ elementList: l, textBlock: u, key: `${e}` }))
                                                : t.push(...l),
                                            t
                                        );
                                    })(u, t),
                                );
                            }),
                            e
                        );
                    };
            },
            6960: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                const r = (u, e, t, r) => {
                    let n = e.exec(u),
                        a = 0;
                    for (; n; ) a !== n.index && t(u.slice(a, n.index)), r(n), (a = e.lastIndex), (n = e.exec(u));
                    a !== u.length && t(u.slice(a));
                };
            },
            131: (u, e, t) => {
                'use strict';
                t.d(e, { T: () => c });
                var r = t(6179),
                    n = t.n(r),
                    a = t(9053);
                const i = (u, e) => !u || u.offsetTop + u.offsetHeight > e,
                    s = (u, e) => u.offsetLeft + u.offsetWidth - e,
                    l = (u, e, t) => {
                        if (!u || !u.textContent) return [!1, 0];
                        if (u.offsetLeft > e) return [!1, 0];
                        const r = s(u, e),
                            n = u.textContent.length,
                            a = u.offsetWidth / n,
                            i = Math.ceil(r / a);
                        if (r > 0) {
                            const r = Math.floor((e - u.offsetLeft) / a);
                            return r >= t ? [!0, t + i] : [!1, r];
                        }
                        const l = Math.max(t + i, 0);
                        return n < l ? [!1, 0] : [!0, l];
                    },
                    o = (u, e, t, r, i, s) => {
                        let c = -1,
                            E = null;
                        for (let A = t; A >= 0; A--) {
                            const t = u[A],
                                _ = Number(u[A].getAttribute(a.bF));
                            if (_ === a.kH.LineBreak || _ === a.kH.NewLine || _ === a.kH.Binding) continue;
                            const F = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const u = l(t, r, i),
                                    a = u[0],
                                    o = u[1];
                                if (!a) {
                                    o > 0 && (i -= o);
                                    continue;
                                }
                                const _ = F.slice(0, F.length - o) + s,
                                    d = e[A];
                                (E = n().cloneElement(d, d.props, _)), (c = A);
                                break;
                            }
                            {
                                const u = t.children,
                                    a = e[A],
                                    l = a.props.children,
                                    _ = o(u, l, u.length - 1, r, i, s),
                                    d = _[0],
                                    m = _[1];
                                if (!(d < 0)) {
                                    const u = l.slice(0, d);
                                    (E = n().cloneElement(a, a.props, u, m)), (c = A);
                                    break;
                                }
                                i -= F.length;
                            }
                        }
                        return [c, E];
                    },
                    c = (u, e, t, r = a.YA) => {
                        const n = [...e],
                            l = u.current;
                        if (!l) return [n, !1];
                        const c = t.height,
                            E = t.width,
                            A = l.lastElementChild;
                        if (!i(A, c) && s(A, E) <= 0) return [n, !1];
                        const _ = l.children,
                            F = ((u, e) => {
                                let t = 0,
                                    r = u.length - 1;
                                for (; r - t >= 0; ) {
                                    const n = t + Math.ceil(0.5 * (r - t));
                                    i(u[n], e) ? (r = n - 1) : (t = n + 1);
                                }
                                return t - 1;
                            })(_, c);
                        if (F < 0) return [n, !1];
                        const d = o(_, n, F, E, r.length, r),
                            m = d[0],
                            D = d[1];
                        return D && (n.splice(m, 1, D), n.splice(m + 1)), [n, !0];
                    };
            },
            9053: (u, e, t) => {
                'use strict';
                let r, n, a;
                t.d(e, { YA: () => s, aF: () => o, bF: () => l, dz: () => i, kH: () => r, v2: () => n }),
                    (function (u) {
                        (u[(u.Word = 0)] = 'Word'),
                            (u[(u.LineBreak = 1)] = 'LineBreak'),
                            (u[(u.NewLine = 2)] = 'NewLine'),
                            (u[(u.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (u[(u.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (u[(u.Binding = 5)] = 'Binding');
                    })(r || (r = {})),
                    (function (u) {
                        (u.FlexStart = 'flex-start'), (u.Center = 'center'), (u.FlexEnd = 'flex-end');
                    })(n || (n = {})),
                    (function (u) {
                        (u.NBSP = ' '), (u.ZWNBSP = '\ufeff'), (u.NEW_LINE = '\n');
                    })(a || (a = {}));
                const i = (u) => void 0 !== u.childList,
                    s = '...',
                    l = 'data-block-type',
                    o = { [a.NBSP]: r.NoBreakSymbol, [a.ZWNBSP]: r.NoBreakSymbol, [a.NEW_LINE]: r.LineBreak };
            },
            597: (u, e, t) => {
                'use strict';
                t.d(e, { IY: () => c });
                var r = t(6179),
                    n = t.n(r),
                    a = t(9053),
                    i = t(9627),
                    s = t(7629);
                const l = (u) => ({ color: `#${u}` }),
                    o = ({ elementList: u, textBlock: e, key: t }) => {
                        const r = e.colorTag;
                        return r
                            ? i.Z[r]
                                ? n().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: i.Z[r] },
                                      u,
                                  )
                                : n().createElement('span', { key: t, 'data-block-type': e.blockType, style: l(r) }, u)
                            : n().createElement('span', { key: t, 'data-block-type': e.blockType }, u);
                    },
                    c = {
                        [a.kH.Word]: o,
                        [a.kH.NoBreakSymbol]: o,
                        [a.kH.Binding]: ({ elementList: u, textBlock: e, key: t }) =>
                            n().createElement(
                                'span',
                                { key: t, 'data-block-type': e.blockType },
                                u.map((u) => n().createElement(n().Fragment, { key: t }, u)),
                            ),
                        [a.kH.LineBreak]: ({ key: u }) =>
                            n().createElement('span', {
                                key: u,
                                'data-block-type': a.kH.LineBreak,
                                className: s.Z.lineBreak,
                            }),
                        [a.kH.NewLine]: ({ elementList: u, key: e }) =>
                            n().createElement(
                                'span',
                                { key: e, 'data-block-type': a.kH.NewLine, className: s.Z.newLine },
                                u,
                            ),
                        [a.kH.NoBreakWrapper]: ({ elementList: u, key: e }) =>
                            n().createElement(
                                'span',
                                { key: e, 'data-block-type': a.kH.NoBreakWrapper, className: s.Z.noBreakWrapper },
                                u,
                            ),
                    };
            },
            5298: (u, e, t) => {
                'use strict';
                t.d(e, { l: () => n });
                var r = t(776);
                const n = (u, e) => ({
                    isEnabled: u !== r.f.absent,
                    args: e,
                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                    decoratorId:
                        u === r.f.normal ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId') : void 0,
                    ignoreShowDelay: u === r.f.backport,
                    ignoreMouseClick: !0,
                });
            },
            8018: (u, e, t) => {
                'use strict';
                t.d(e, { T3: () => a });
                var r = t(3649);
                const n = R.strings.common.percentValue(),
                    a = (u) => (0, r.uF)(n, { value: u });
                let i;
                !(function (u) {
                    (u.Objective = 'objective'), (u.Possessive = 'possessive');
                })(i || (i = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let s;
                !(function (u) {
                    (u.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (u.SHOP_INFO = 'shop_info'),
                        (u.RUDY = 'rudy');
                })(s || (s = {}));
            },
            5490: (u, e, t) => {
                'use strict';
                var r = t(7739),
                    n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    s = t.n(i),
                    l = t(926),
                    o = t.n(l),
                    c = t(5415);
                const E = ['children', 'className'];
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const _ = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: o().SMALL_WIDTH,
                        [c.fd.Medium]: `${o().SMALL_WIDTH} ${o().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${o().SMALL_WIDTH} ${o().MEDIUM_WIDTH} ${o().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${o().SMALL_WIDTH} ${o().MEDIUM_WIDTH} ${o().LARGE_WIDTH} ${o().EXTRA_LARGE_WIDTH}`,
                    },
                    F = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: o().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${o().SMALL_HEIGHT} ${o().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${o().SMALL_HEIGHT} ${o().MEDIUM_HEIGHT} ${o().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${o().SMALL_HEIGHT} ${o().MEDIUM_HEIGHT} ${o().LARGE_HEIGHT} ${o().EXTRA_LARGE_HEIGHT}`,
                    },
                    d = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: o().SMALL,
                        [c.cJ.Medium]: `${o().SMALL} ${o().MEDIUM}`,
                        [c.cJ.Large]: `${o().SMALL} ${o().MEDIUM} ${o().LARGE}`,
                        [c.cJ.ExtraLarge]: `${o().SMALL} ${o().MEDIUM} ${o().LARGE} ${o().EXTRA_LARGE}`,
                    },
                    m = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, E);
                        const n = (0, c.GS)(),
                            i = n.mediaWidth,
                            l = n.mediaHeight,
                            o = n.mediaSize;
                        return a().createElement('div', A({ className: s()(t, _[i], F[l], d[o]) }, r), e);
                    },
                    D = ['children'];
                const B = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, D);
                    return a().createElement(r.ZN, null, a().createElement(m, t, e));
                };
                var C = t(493),
                    g = t.n(C),
                    h = t(3403),
                    p = t(5501);
                let b;
                !(function (u) {
                    (u.New = 'new'),
                        (u.Learned = 'learned'),
                        (u.Learning = 'learning'),
                        (u.Irrelevant = 'irrelevant'),
                        (u.Possible = 'possible');
                })(b || (b = {}));
                var v = t(9480);
                const f = (u, e) => {
                    const t = [];
                    for (let r = 0; r < u; r++) t.push(e(r));
                    return t;
                };
                var w = t(7030),
                    x = t(9887),
                    y = t.n(x);
                const L = ['xl', 'lg', 'md', 'sm', 'xs'],
                    S = (u) => u.includes('_') && ((u) => L.includes(u))(u.split('_').at(-1)),
                    k = [c.cJ.ExtraLarge, c.cJ.Large, c.cJ.Medium, c.cJ.Small, c.cJ.ExtraSmall],
                    T = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if (S(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = k.indexOf(e),
                                    i = (-1 !== a ? L.slice(a) : [])
                                        .map((u) => n + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    s = i ? u[i] : void 0;
                                return (t[n] = void 0 !== s ? s : u[n]), t;
                            }
                            const n = u[r];
                            return (
                                void 0 === n ||
                                    ((u, e) => L.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    M = (u, e = T) => {
                        const t = (
                            (u, e = T) =>
                            (t) => {
                                const r = (0, c.GS)().mediaSize,
                                    i = (0, n.useMemo)(() => e(t, r), [t, r]);
                                return a().createElement(u, i);
                            }
                        )(u, e);
                        return a().memo((e) =>
                            Object.keys(e).some((u) => S(u) && void 0 !== e[u])
                                ? a().createElement(t, e)
                                : a().createElement(u, e),
                        );
                    },
                    O = {
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
                    I = [
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
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        P.apply(this, arguments)
                    );
                }
                Object.keys(y());
                const N = {
                        XL: { mt: O.mt__XL, mr: O.mr__XL, mb: O.mb__XL, ml: O.ml__XL },
                        LG: { mt: O.mt__LG, mr: O.mr__LG, mb: O.mb__LG, ml: O.ml__LG },
                        MDp: { mt: O.mt__MDp, mr: O.mr__MDp, mb: O.mb__MDp, ml: O.ml__MDp },
                        MD: { mt: O.mt__MD, mr: O.mr__MD, mb: O.mb__MD, ml: O.ml__MD },
                        SMp: { mt: O.mt__SMp, mr: O.mr__SMp, mb: O.mb__SMp, ml: O.ml__SMp },
                        SM: { mt: O.mt__SM, mr: O.mr__SM, mb: O.mb__SM, ml: O.ml__SM },
                        XS: { mt: O.mt__XS, mr: O.mr__XS, mb: O.mb__XS, ml: O.ml__XS },
                    },
                    H = (Object.keys(N), ['mt', 'mr', 'mb', 'ml']),
                    W = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    j = M((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            i = u.m,
                            l = u.mt,
                            o = void 0 === l ? i : l,
                            c = u.mr,
                            E = void 0 === c ? i : c,
                            A = u.mb,
                            _ = void 0 === A ? i : A,
                            F = u.ml,
                            d = void 0 === F ? i : F,
                            m = u.column,
                            D = u.row,
                            B = u.flexDirection,
                            C = void 0 === B ? (m ? 'column' : D && 'row') || void 0 : B,
                            g = u.flexStart,
                            h = u.center,
                            p = u.flexEnd,
                            b = u.spaceBetween,
                            v = u.spaceAround,
                            f = u.justifyContent,
                            w =
                                void 0 === f
                                    ? (g ? 'flex-start' : h && 'center') ||
                                      (p && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : f,
                            x = u.alignItems,
                            y = void 0 === x ? (g ? 'flex-start' : h && 'center') || (p && 'flex-end') || void 0 : x,
                            L = u.alignSelf,
                            S = u.wrap,
                            k = u.flexWrap,
                            T = void 0 === k ? (S ? 'wrap' : void 0) : k,
                            R = u.grow,
                            M = u.shrink,
                            j = u.flex,
                            G = void 0 === j ? (R || M ? `${R ? 1 : 0} ${M ? 1 : 0} auto` : void 0) : j,
                            U = u.style,
                            $ = u.children,
                            X = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, I);
                        const z = (0, n.useMemo)(() => {
                                const u = { mt: o, mr: E, mb: _, ml: d },
                                    e = ((u) =>
                                        H.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(N[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    n = ((u) =>
                                        H.reduce((e, t) => {
                                            const r = u[t];
                                            return 'number' == typeof r && (e[W[t]] = r + 'rem'), e;
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, U, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: G,
                                        alignSelf: L,
                                        display: C || y ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: T,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, o, E, _, d, U, G, L, C, T, w, y]),
                            q = z.computedStyle,
                            V = z.computedClassNames;
                        return a().createElement('div', P({ className: s()(O.base, ...V, e), style: q }, X), $);
                    });
                var G = t(3649);
                const U = 'FormatText_base_d0',
                    $ = ({ binding: u, text: e = '', classMix: t, alignment: r = G.v2.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  n.Fragment,
                                  null,
                                  e.split('\n').map((e, i) =>
                                      a().createElement(
                                          'div',
                                          { className: s()(U, t), key: `${e}-${i}` },
                                          (0, G.Uw)(e, r, u).map((u, e) =>
                                              a().createElement(n.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var X = t(3532),
                    z = t.n(X);
                const q = {
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
                    V = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                Object.keys(y());
                const Y = Object.keys(z()),
                    K = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    J = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Q = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    uu = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    eu =
                        (Object.keys(uu),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': K,
                            'heading-H36': K,
                            'heading-H28': J,
                            'heading-H24': J,
                            'heading-H24R': J,
                            'heading-H22': J,
                            'heading-H20R': J,
                            'heading-H18': J,
                            'heading-H15': Q,
                            'heading-H14': Q,
                            'paragraph-P24': J,
                            'paragraph-P18': J,
                            'paragraph-P16': J,
                            'paragraph-P14': Q,
                            'paragraph-P12': Q,
                            'paragraph-P10': Q,
                        }),
                    tu =
                        (Object.keys(eu),
                        (u) =>
                            u
                                ? ((u) => Y.includes(u))(u)
                                    ? { colorClassName: q[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    ru = M((u) => {
                        let e = u.text,
                            t = u.variant,
                            r = u.className,
                            i = u.color,
                            l = u.m,
                            o = u.mt,
                            c = void 0 === o ? l : o,
                            E = u.mr,
                            A = void 0 === E ? l : E,
                            _ = u.mb,
                            F = void 0 === _ ? l : _,
                            d = u.ml,
                            m = void 0 === d ? l : d,
                            D = u.style,
                            B = u.format,
                            C = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, V);
                        const g = (0, n.useMemo)(() => {
                                const u = tu(i),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, r), colorClassName: e };
                            }, [D, i]),
                            h = g.computedStyle,
                            p = g.colorClassName;
                        return a().createElement(
                            j,
                            Z(
                                {
                                    className: s()(q.base, t && q[t], p, r),
                                    style: h,
                                    mt: !0 === c ? eu[t || 'paragraph-P16'].mt : c,
                                    mr: !0 === A ? eu[t || 'paragraph-P16'].mr : A,
                                    mb: !0 === F ? eu[t || 'paragraph-P16'].mb : F,
                                    ml: !0 === m ? eu[t || 'paragraph-P16'].ml : m,
                                },
                                C,
                            ),
                            void 0 !== B ? a().createElement($, Z({}, B, { text: e })) : e,
                        );
                    });
                var nu = t(6373);
                const au = {
                        base: 'RoleLevelIcon_base_e1',
                        realLevel: 'RoleLevelIcon_realLevel_96',
                        base__small: 'RoleLevelIcon_base__small_ce',
                        icon: 'RoleLevelIcon_icon_fa',
                    },
                    iu = (0, n.memo)(({ percentValue: u, skillSize: e, hasSkills: t }) => {
                        const r = t ? R.strings.crew_widget.plusValue() : R.strings.crew_widget.plusSpecValue();
                        return a().createElement(
                            nu.i,
                            {
                                header: R.strings.crew_widget.tooltip.roleLevelIcon.header(),
                                body: R.strings.crew_widget.tooltip.roleLevelIcon.body(),
                            },
                            a().createElement(
                                'div',
                                { className: s()(au.base, au[`base__${e}`]) },
                                a().createElement('div', { className: au.icon }),
                                a().createElement(
                                    'div',
                                    { className: au.realLevel },
                                    a().createElement(ru, {
                                        text: r,
                                        format: { binding: { value: a().createElement(ru, { text: u }) } },
                                    }),
                                ),
                            ),
                        );
                    }),
                    su = (u) => u.skills.length + u.newSkillsAmount + u.possibleSkillsAmount,
                    lu = 'AcceleratedTrainingIcon_base_4f',
                    ou = 'AcceleratedTrainingIcon_icon_45',
                    cu = (0, n.memo)(({ classMix: u }) =>
                        a().createElement(
                            nu.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            },
                            a().createElement(
                                'div',
                                { className: s()(lu, u) },
                                a().createElement('div', { className: ou }),
                            ),
                        ),
                    ),
                    Eu = (u) => -(Math.cos(Math.PI * u) - 1) / 2,
                    Au = {
                        base: 'LastSkillInfo_base_38',
                        realLevel: 'LastSkillInfo_realLevel_78',
                        base__small: 'LastSkillInfo_base__small_c5',
                        possibleLevel: 'LastSkillInfo_possibleLevel_02',
                        acceleratedTrainingIcon: 'LastSkillInfo_acceleratedTrainingIcon_bf',
                        base__big: 'LastSkillInfo_base__big_10',
                    },
                    _u = 0.01,
                    Fu = (0, n.memo)(
                        ({
                            lastSkillLevel: u,
                            lastPossibleSkillLevel: e,
                            showAcceleratedTrainingIcon: t,
                            skillSize: r,
                            blinkStyle: i,
                        }) => {
                            const l = (0, n.useRef)(u),
                                o = (0, w.useSpring)(() => ({ from: { scale: 1 } })),
                                c = o[0],
                                E = o[1];
                            (0, n.useEffect)(() => {
                                e < 0 &&
                                    l.current !== u &&
                                    (E.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: Eu },
                                    }),
                                    (l.current = u));
                            }, [u, e, E]);
                            const A = (0, n.useMemo)(
                                    () =>
                                        0 === e
                                            ? [R.strings.common.percentValue(), e]
                                            : e < _u
                                              ? [R.strings.crew_widget.plusMinValue(), _u]
                                              : [R.strings.crew_widget.plusValue(), e],
                                    [e],
                                ),
                                _ = A[0],
                                F = A[1];
                            return a().createElement(
                                'div',
                                { className: s()(Au.base, Au[`base__${r}`]) },
                                u >= 0 &&
                                    u < 100 &&
                                    a().createElement(
                                        w.animated.div,
                                        { style: c },
                                        a().createElement(
                                            'div',
                                            { className: Au.realLevel },
                                            (0, G.uF)(R.strings.common.percentValue(), {
                                                value: u > 0 && u < _u ? _u : u,
                                            }),
                                        ),
                                    ),
                                e >= 0 &&
                                    e < 100 &&
                                    a().createElement(
                                        w.animated.div,
                                        { className: Au.possibleLevel, style: i },
                                        (0, G.uF)(_, { value: F }),
                                    ),
                                t && a().createElement(cu, { classMix: Au.acceleratedTrainingIcon }),
                            );
                        },
                    );
                var du = t(2056);
                const mu = {
                    base: 'TankmanSkill_base_84',
                    base__big: 'TankmanSkill_base__big_a0',
                    bg: 'TankmanSkill_bg_f9',
                    icon: 'TankmanSkill_icon_1b',
                    icon__irrelevant: 'TankmanSkill_icon__irrelevant_50',
                };
                let Du;
                !(function (u) {
                    (u.Big = 'big'), (u.Small = 'small');
                })(Du || (Du = {}));
                const Bu = a().memo(function ({ icon: u, type: e, size: t }) {
                        const r = (0, n.useMemo)(() => {
                                let u;
                                return (
                                    (u =
                                        e === b.Possible || e === b.New
                                            ? R.images.gui.maps.icons.tankmen.skills.medium.new_skill()
                                            : R.images.gui.maps.icons.crew.$dyn(`${e}SkillFrame_${t}`)),
                                    { backgroundImage: `url(${u})` }
                                );
                            }, [e, t]),
                            i = (0, n.useMemo)(() => {
                                if (!u) return null;
                                return {
                                    backgroundImage: `url(${R.images.gui.maps.icons.tankmen.skills.$dyn(t === Du.Big ? 'c_22x22' : 'small').$dyn(u)})`,
                                };
                            }, [u, t]);
                        return a().createElement(
                            'div',
                            { className: s()(mu.base, mu[`base__${t}`]) },
                            a().createElement('div', { className: mu.bg, style: r }),
                            i && a().createElement('div', { className: s()(mu.icon, mu[`icon__${e}`]), style: i }),
                        );
                    }),
                    Cu = 33,
                    gu = 0,
                    hu = !0,
                    pu = 'play';
                const bu = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function vu() {
                    return (
                        (vu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        vu.apply(this, arguments)
                    );
                }
                const fu = (0, n.memo)(function (u) {
                        let e = u.width,
                            t = u.height,
                            r = u.getImageSource,
                            i = u.frameCount,
                            s = u.onAnimate,
                            l = u.frameTime,
                            o = void 0 === l ? Cu : l,
                            c = u.initialFrameIndex,
                            E = void 0 === c ? gu : c,
                            A = u.lastFrameIndex,
                            _ = void 0 === A ? i - 1 : A,
                            F = u.loop,
                            d = void 0 === F ? hu : F,
                            m = u.state,
                            D = void 0 === m ? pu : m,
                            B = u.onAnimationDone,
                            C = u.onAnimationComplete,
                            g = u.poster,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, bu);
                        const p = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const u = p.current;
                                if (!u) return;
                                const e = u.getContext('2d'),
                                    t = (t) => {
                                        e.clearRect(0, 0, u.width, u.height), e.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const u = yu(E, _, r),
                                                e = wu(E, _),
                                                n = window.setInterval(() => {
                                                    const r = e(),
                                                        a = u.get(r);
                                                    a
                                                        ? (null == s || s(r, a),
                                                          t(a),
                                                          r === _ &&
                                                              (null == C || C(),
                                                              d || (null == B || B(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, o);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const u = 0 === E && g ? { path: g, x: 0, y: 0 } : r(E),
                                                e = new Image();
                                            e.src = u.path;
                                            const n = () => t(xu(u, e));
                                            return (
                                                e.addEventListener('load', n), () => e.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [o, r, E, _, d, s, C, B, g, D]),
                            a().createElement('canvas', vu({}, h, { width: e, height: t, ref: p }))
                        );
                    }),
                    wu = (u, e) => {
                        let t = u;
                        return () => {
                            const r = t;
                            return (t += 1), t > e && (t = u), r;
                        };
                    },
                    xu = (u, e) => Object.assign({}, u, { img: e }),
                    yu = (u, e, t) => {
                        const r = new Map(),
                            n = {};
                        for (let a = u; a <= e; a++) {
                            const u = t(a),
                                e = n[u.path];
                            if (e) r.set(a, xu(u, e));
                            else {
                                const e = new Image();
                                (n[u.path] = e),
                                    (e.src = u.path),
                                    (e.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            u.path,
                                            `(${u.x},${u.y})`,
                                        );
                                    }),
                                    r.set(a, xu(u, e));
                            }
                        }
                        return r;
                    };
                function Lu(u) {
                    return (e) => `${u}${e}`;
                }
                const Su = [
                    'width',
                    'height',
                    'getSrcByFrame',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'loop',
                    'state',
                    'onAnimationComplete',
                    'revers',
                ];
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                let Tu;
                !(function (u) {
                    (u.Play = 'play'), (u.Stop = 'stop');
                })(Tu || (Tu = {}));
                const Ru = (u, e, t) => {
                        const r = new Image();
                        (r.src = t(e)), u.push(r);
                    },
                    Mu =
                        ((0, n.memo)((u) => {
                            let e = u.width,
                                t = u.height,
                                r = u.getSrcByFrame,
                                i = u.frameCount,
                                s = u.onAnimate,
                                l = void 0 === s ? () => {} : s,
                                o = u.frameTime,
                                c = void 0 === o ? 33 : o,
                                E = u.initialFrameIndex,
                                A = void 0 === E ? 0 : E,
                                _ = u.loop,
                                F = void 0 === _ || _,
                                d = u.state,
                                m = void 0 === d ? Tu.Play : d,
                                D = u.onAnimationComplete,
                                B = void 0 === D ? () => {} : D,
                                C = u.revers,
                                g = void 0 !== C && C,
                                h = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(u, Su);
                            const p = (0, n.useRef)(null);
                            return (
                                (0, n.useEffect)(() => {
                                    const u = p.current;
                                    if (!u) return;
                                    const n = i - 1,
                                        a = u.getContext('2d'),
                                        s = (r) => {
                                            a.clearRect(0, 0, u.width, u.height), a.drawImage(r, 0, 0, e, t);
                                        };
                                    if ('stop' === m) {
                                        const u = r(0),
                                            e = new Image();
                                        e.src = u;
                                        const t = () => s(e);
                                        return e.addEventListener('load', t), () => e.removeEventListener('load', t);
                                    }
                                    const o = ((u, e, t) => {
                                            const r = [];
                                            if (t) for (let t = u; t >= 0; t--) Ru(r, t, e);
                                            else for (let t = 0; t < u; t++) Ru(r, t, e);
                                            return r;
                                        })(i, r, g),
                                        E = ((u, e = 0) => {
                                            let t = e;
                                            return () => {
                                                const e = t;
                                                return (t += 1), t > u && (t = 0), e;
                                            };
                                        })(n, A),
                                        _ = setInterval(() => {
                                            const u = E(),
                                                e = o[u];
                                            s(o[u]), l(u, e), u === n && (B(), F || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [i, c, r, t, A, F, l, B, m, e, g]),
                                a().createElement('canvas', ku({}, h, { width: e, height: t, ref: p }))
                            );
                        }),
                        'AnimatedNewSkill_base_6b'),
                    Ou = 'AnimatedNewSkill_base__big_31';
                function Iu(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return Pu(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Pu(u, e);
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
                function Pu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                class Nu {
                    constructor() {
                        (this._intervalID = void 0),
                            (this._observers = void 0),
                            (this._intervalID = null),
                            (this._observers = new Map());
                    }
                    static get instance() {
                        return Nu._instance || (Nu._instance = new Nu()), Nu._instance;
                    }
                    subscribe(u) {
                        this._observers.set(u, u),
                            1 === this._observers.size &&
                                (this._intervalID = window.setInterval(() => {
                                    for (var u, e = Iu(this._observers.values()); !(u = e()).done; ) {
                                        (0, u.value)();
                                    }
                                }, 5e3));
                    }
                    unsubscribe(u) {
                        this._observers.delete(u),
                            0 === this._observers.size &&
                                null !== this._intervalID &&
                                (clearInterval(this._intervalID), (this._intervalID = null));
                    }
                }
                Nu._instance = void 0;
                const Hu = {
                        width: 24,
                        height: 24,
                        frameCount: 42,
                        chunk: { count: 1, columns: 42, rows: 1 },
                        getChunkPath: Lu('R.images.gui.maps.icons.sequence.new_skill.skill_'),
                    },
                    Wu = {
                        width: 14,
                        height: 14,
                        frameCount: 35,
                        chunk: { count: 1, columns: 35, rows: 1 },
                        getChunkPath: Lu('R.images.gui.maps.icons.sequence.new_skill.skill_small_'),
                    },
                    ju = ({ size: u }) => {
                        const e = u === Du.Small ? Wu : Hu,
                            t = (function (u) {
                                const e = u.chunk,
                                    t = e.rows * e.columns;
                                return (r) => {
                                    const n = r % t,
                                        a = (n % e.columns) * u.width,
                                        i = Math.trunc(n / e.columns) * u.height;
                                    return { path: u.getChunkPath(Math.trunc(r / t)), x: a, y: i };
                                };
                            })(e),
                            r = (0, n.useState)(Tu.Stop),
                            i = r[0],
                            l = r[1],
                            o = (0, n.useCallback)(() => {
                                l(Tu.Play);
                            }, [l]),
                            c = (0, n.useCallback)(() => {
                                l(Tu.Stop);
                            }, [l]);
                        return (
                            (0, n.useEffect)(() => (Nu.instance.subscribe(o), () => Nu.instance.unsubscribe(o)), [o]),
                            a().createElement(fu, {
                                width: e.width,
                                height: e.height,
                                frameCount: e.frameCount,
                                getImageSource: t,
                                loop: !1,
                                state: i,
                                onAnimationDone: c,
                                className: s()(Mu, u === Du.Big && Ou),
                            })
                        );
                    },
                    Gu = { base: 'Skill_base_ba', base__big: 'Skill_base__big_eb' };
                function Uu() {
                    return (
                        (Uu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Uu.apply(this, arguments)
                    );
                }
                let $u;
                !(function (u) {
                    (u.Big = 'big'), (u.Small = 'small');
                })($u || ($u = {}));
                const Xu = (0, n.memo)(
                        ({
                            name: u,
                            icon: e,
                            type: t,
                            size: r,
                            marginValue: i,
                            clipWidth: l,
                            tankmanID: o,
                            blinkStyle: c,
                            showNewSkillAnimation: E,
                            isTooltipEnabled: A = !0,
                        }) => {
                            const _ = (0, n.useRef)(''),
                                F = (0, w.useSpring)(() => ({ from: { scale: 1 } })),
                                d = F[0],
                                m = F[1];
                            (0, n.useEffect)(() => {
                                t === b.New &&
                                    _.current === b.Possible &&
                                    m.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: Eu },
                                    }),
                                    (_.current = t);
                            }, [t, m]);
                            const D = (0, n.useCallback)(() => {
                                switch (t) {
                                    case b.Learned:
                                    case b.Learning:
                                    case b.Irrelevant:
                                        return {
                                            contentId:
                                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                    'resId',
                                                ),
                                            args: { tooltipId: 'crewPerkGf', tankmanID: o, skillName: u },
                                        };
                                    case b.New:
                                    case b.Possible:
                                        return {
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                            args: { tankmanID: o },
                                        };
                                }
                            }, [t, u, o]);
                            return a().createElement(
                                du.u,
                                Uu({}, D(), {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: A,
                                    ignoreShowDelay: !0,
                                }),
                                a().createElement(
                                    w.animated.div,
                                    { style: d },
                                    a().createElement(
                                        w.animated.div,
                                        { style: t === b.Possible ? c : void 0 },
                                        a().createElement(
                                            'div',
                                            {
                                                className: s()(Gu.base, Gu[`base__${r}`]),
                                                style: { marginLeft: `${i}rem`, clipPath: `inset(0 ${l}rem 0 0)` },
                                            },
                                            !E || (t !== b.Possible && t !== b.New)
                                                ? a().createElement(Bu, { icon: e, size: r, type: t })
                                                : a().createElement(ju, { size: r }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    zu = 'SkillsList_base_11',
                    qu = 'SkillsList_row_03',
                    Vu = 'SkillsList_possibleLevel_97',
                    Zu = 'SkillsList_possibleLevel__before_6f',
                    Yu = ({
                        tankman: u,
                        showAcceleratedTrainingIcon: e = !1,
                        rowWidth: t = 220,
                        maxBigSkillsInRow: r = 16,
                        blinkStyle: i,
                        isSkillTooltipEnabled: l = !0,
                        showNewSkillAnimation: o = !1,
                    }) => {
                        const c = u.skills,
                            E = c.length,
                            A = su(u),
                            _ = ((u, e, t) => {
                                let r = u > e ? 10 : u;
                                const n = 0 === u ? u : Math.ceil(u / r),
                                    a = n > 1 ? 16 : 24;
                                let i = 2,
                                    s = a;
                                for (; (t - (a + i)) / (s + i) < Math.floor((u - 1) / n); ) i > 0 ? i-- : s--;
                                return (
                                    (r = Math.min(r, 1 + Math.floor((t - a) / (s + i)))),
                                    s !== a && (i = s - a),
                                    [n, r, i, a, s]
                                );
                            })(A, r, t),
                            F = _[0],
                            d = _[1],
                            m = _[2],
                            D = _[3],
                            B = _[4],
                            C = F > 1 ? $u.Small : $u.Big,
                            g = (0, n.useMemo)(
                                () =>
                                    a().createElement(
                                        w.animated.div,
                                        { className: s()(Vu, 0 === E && Zu), style: i },
                                        a().createElement(iu, {
                                            percentValue: u.lastPossibleRoleLevel,
                                            skillSize: C,
                                            hasSkills: u.possibleSkillsAmount > 0 || E > 0,
                                        }),
                                    ),
                                [i, C, E, u.lastPossibleRoleLevel, u.possibleSkillsAmount],
                            );
                        return a().createElement(
                            'div',
                            { className: zu },
                            f(F, (t) => {
                                const r = Math.min(d, A - t * d),
                                    n = t === F - 1;
                                return a().createElement(
                                    'div',
                                    { className: qu, key: `row_${t}` },
                                    u.lastPossibleRoleLevel > 0 && 0 === E && g,
                                    f(r, (e) => {
                                        const n = d * t + e;
                                        let s = '',
                                            A = '',
                                            _ = b.Learned;
                                        if (n < E) {
                                            const u = v.U2(c, n);
                                            u && ((s = u.name), (A = u.icon), (_ = u.type));
                                        } else _ = n < E + u.newSkillsAmount ? b.New : b.Possible;
                                        return a().createElement(Xu, {
                                            name: s,
                                            icon: A,
                                            type: _,
                                            size: C,
                                            marginValue: 0 === e ? 0 : m,
                                            key: n + '_' + s,
                                            clipWidth: e === r - 1 ? 0 : D - B,
                                            tankmanID: u.tankmanID,
                                            blinkStyle: i,
                                            isTooltipEnabled: l,
                                            showNewSkillAnimation: o,
                                        });
                                    }),
                                    n &&
                                        a().createElement(
                                            a().Fragment,
                                            null,
                                            a().createElement(Fu, {
                                                lastSkillLevel: u.possibleSkillsAmount > 0 ? -1 : u.lastSkillLevel,
                                                lastPossibleSkillLevel: u.lastPossibleSkillLevel,
                                                showAcceleratedTrainingIcon: e,
                                                lastPossibleRoleLevel: u.lastPossibleRoleLevel,
                                                skillSize: C,
                                                blinkStyle: i,
                                                hasSkills: u.possibleSkillsAmount > 0 || E > 0,
                                            }),
                                            u.lastPossibleRoleLevel > 0 && E > 0 && g,
                                        ),
                                );
                            }),
                            !F &&
                                a().createElement(
                                    'div',
                                    { className: qu },
                                    u.lastPossibleRoleLevel > 0 && 0 === E && g,
                                    a().createElement(Fu, {
                                        lastSkillLevel: u.possibleSkillsAmount > 0 ? -1 : u.lastSkillLevel,
                                        lastPossibleSkillLevel: u.lastPossibleSkillLevel,
                                        showAcceleratedTrainingIcon: e,
                                        lastPossibleRoleLevel: u.lastPossibleRoleLevel,
                                        skillSize: C,
                                        blinkStyle: i,
                                        hasSkills: u.possibleSkillsAmount > 0 || E > 0,
                                    }),
                                    u.lastPossibleRoleLevel > 0 && E > 0 && g,
                                ),
                        );
                    };
                var Ku = t(3215),
                    Ju = t(4598),
                    Qu = t(3946);
                const ue = (0, Ku.q)()(({ observableModel: u }) => {
                        const e = Object.assign({}, u.primitives(['beforeLastSkillLevel', 'afterLastSkillLevel']), {
                                tankmen: u.array('tankmen', []),
                            }),
                            t = (0, Qu.Om)(() => e.tankmen.get(), { equals: Ju.jv }),
                            r = (0, Qu.Om)(() => (0, v.U2)(t(), 0), { equals: Ju.jv }),
                            n = (0, Qu.Om)(() => (0, v.U2)(t(), 1), { equals: Ju.jv });
                        return Object.assign({}, e, { computes: { getTankmanBefore: r, getTankmanAfter: n } });
                    }, Ju.ZT),
                    ee = ue[0],
                    te = ue[1],
                    re = 'ResetResult_base_6d',
                    ne = 'ResetResult_skillsBefore_8d',
                    ae = 'ResetResult_base__withSkills_2e',
                    ie = 'ResetResult_base__withoutSkills_b4',
                    se = 'ResetResult_labelBefore_57',
                    le = 'ResetResult_skillsAfter_7b',
                    oe = 'ResetResult_labelAfter_17',
                    ce = 'ResetResult_arrow_e7',
                    Ee = 'ResetResult_noNewSkills_88',
                    Ae = (0, h.Pi)(function () {
                        const u = te().model.computes,
                            e = u.getTankmanBefore,
                            t = u.getTankmanAfter,
                            r = e(),
                            n = t(),
                            i = null == n ? void 0 : n.newSkillsAmount,
                            l = s()(re, n && i && ae, n && !i && ie);
                        return a().createElement(
                            'div',
                            { className: l },
                            r &&
                                a().createElement(
                                    'div',
                                    { className: ne },
                                    a().createElement('div', { className: se }, R.strings.dialogs.perksRest.before()),
                                    a().createElement(Yu, { tankman: r, isSkillTooltipEnabled: !1 }),
                                ),
                            n &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: ce }),
                                    a().createElement(
                                        'div',
                                        { className: le },
                                        a().createElement(
                                            'div',
                                            { className: oe },
                                            R.strings.dialogs.perksRest.after(),
                                        ),
                                        i
                                            ? a().createElement(Yu, { tankman: n, isSkillTooltipEnabled: !1 })
                                            : a().createElement(
                                                  'div',
                                                  { className: Ee },
                                                  R.strings.dialogs.perksRest.noNewPerks(),
                                              ),
                                    ),
                                ),
                        );
                    }),
                    _e = 'PerksResetApp_base_e5',
                    Fe = (0, h.Pi)(function () {
                        return a().createElement(
                            'div',
                            { className: _e },
                            a().createElement(p.u, { rootId: R.views.lobby.crew.dialogs.PerksResetContent('resId') }),
                            a().createElement(Ae, null),
                        );
                    });
                engine.whenReady.then(() => {
                    g().render(
                        a().createElement(
                            ee,
                            { options: { rootId: R.views.lobby.crew.dialogs.PerksResetContent('resId') } },
                            a().createElement(B, null, a().createElement(Fe, null)),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            5501: (u, e, t) => {
                'use strict';
                t.d(e, { u: () => z });
                var r = t(6179),
                    n = t.n(r),
                    a = t(3215),
                    i = t(4598),
                    s = t(9480),
                    l = t(3946);
                const o = (0, a.q)()(
                        ({ observableModel: u }) => {
                            const e = { cardsList: u.array('cardsList', []) },
                                t = (0, l.Om)(() => (0, s.UI)(e.cardsList.get(), i.yR), { equals: i.jv });
                            return Object.assign({}, e, { computes: { cards: t } });
                        },
                        ({ externalModel: u }) => ({
                            onCardClick: u.createCallback((u) => ({ index: u }), 'onCardClick'),
                        }),
                    ),
                    c = o[0],
                    E = o[1];
                var A = t(6483),
                    _ = t.n(A),
                    F = t(5415),
                    d = t(3403);
                let m, D;
                !(function (u) {
                    (u.Default = 'default'), (u.Reset = 'reset'), (u.Retrain = 'retrain'), (u.Recruit = 'recruit');
                })(m || (m = {})),
                    (function (u) {
                        (u.Default = ''), (u.Disabled = 'disabled'), (u.Selected = 'selected');
                    })(D || (D = {}));
                var B = t(7727);
                const C = 'CustomComponents_storage_c8',
                    g = 'CustomComponents_storageIcon_2c',
                    h = 'CustomComponents_storageCount_9b',
                    p = (0, r.memo)(({ kwargs: u, cardType: e }) => {
                        if (e === m.Reset) {
                            const e = null == u ? void 0 : u.storageCount;
                            return void 0 === e
                                ? null
                                : n().createElement(
                                      'div',
                                      { className: C },
                                      n().createElement('div', { className: g }),
                                      n().createElement('div', { className: h }, e),
                                  );
                        }
                        return null;
                    });
                var b = t(3618),
                    v = t(9053),
                    f = t(8018);
                const w = {
                        base: 'Description_base_bf',
                        binding: 'Description_binding_da',
                        binding__highLight: 'Description_binding__highLight_95',
                        newSkillIcon: 'Description_newSkillIcon_1b',
                    },
                    x = n().memo(function ({ description: u, cardType: e, kwargs: t, className: r }) {
                        switch (e) {
                            case m.Reset:
                            case m.Retrain:
                            case m.Recruit:
                                return n().createElement(
                                    'div',
                                    { className: _()(w.base, r) },
                                    n().createElement(b.w, {
                                        text: u,
                                        justifyContent: v.v2.Center,
                                        binding: {
                                            value: n().createElement(
                                                'div',
                                                {
                                                    className: _()(
                                                        w.binding,
                                                        (null == t ? void 0 : t.isHighlight) && w.binding__highlight,
                                                    ),
                                                },
                                                (0, f.T3)(null == t ? void 0 : t.value),
                                            ),
                                        },
                                    }),
                                );
                            default:
                                return n().createElement(
                                    'div',
                                    { className: _()(w.base, r) },
                                    n().createElement(b.w, { text: u, justifyContent: v.v2.Center, binding: t }),
                                );
                        }
                    });
                var y = t(7405),
                    L = t(2056),
                    S = t(5298);
                const k = 'Price_base_3c',
                    T = 'Price_base__withPrice_ef';
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const O = ({ cost: u, tooltip: e, index: t, tooltipRootId: r }) => {
                        const a = (0, S.l)(e.type, { index: t });
                        return u.value === u.discountValue && 0 === u.value
                            ? n().createElement('div', { className: k }, R.strings.dialogs.priceCard.price.free())
                            : n().createElement(
                                  'div',
                                  { className: _()(k, T) },
                                  n().createElement(
                                      L.u,
                                      M({}, a, { targetId: r }),
                                      n().createElement('div', null, n().createElement(y.F, u)),
                                  ),
                              );
                    },
                    I = 'Title_base_5e',
                    P = 'Title_base__highLight_1c',
                    N = n().memo(function ({ title: u, cardType: e, kwargs: t, className: r }) {
                        switch (e) {
                            case m.Reset:
                            case m.Retrain:
                            case m.Recruit:
                                return n().createElement(
                                    'div',
                                    { className: _()(I, (null == t ? void 0 : t.isHighlight) && P, r) },
                                    u,
                                );
                            default:
                                return n().createElement('div', { className: _()(I, r) }, u);
                        }
                    }),
                    H = {
                        base: 'PriceCard_base_1c',
                        base__small: 'PriceCard_base__small_b0',
                        base__selected: 'PriceCard_base__selected_e3',
                        base__disabled: 'PriceCard_base__disabled_9c',
                        hover: 'PriceCard_hover_a1',
                        disabled: 'PriceCard_disabled_79',
                        selected: 'PriceCard_selected_df',
                        icon: 'PriceCard_icon_43',
                        title: 'PriceCard_title_98',
                        description: 'PriceCard_description_97',
                        price: 'PriceCard_price_13',
                    };
                let W;
                !(function (u) {
                    (u.Big = 'big'), (u.Small = 'small');
                })(W || (W = {}));
                const j = ({
                        onClick: u,
                        tooltipRootId: e,
                        tooltip: t,
                        index: a,
                        icon: i,
                        size: s = W.Big,
                        title: l,
                        description: o,
                        cardType: c,
                        kwargs: E,
                        price: A,
                        cardState: F,
                        className: d,
                    }) => {
                        const m = F === D.Default,
                            C = (0, r.useState)(!1),
                            g = C[0],
                            h = C[1],
                            b = _()(H.base, H[`base__${s}`], H[`base__${F}`], g && H.base__hover, d),
                            v = (0, r.useMemo)(() => (E ? JSON.parse(E) : {}), [E]),
                            f = (0, r.useCallback)(() => {
                                m && (B.$.playClick(), u(a));
                            }, [a, m, u]),
                            w = (0, r.useCallback)(() => {
                                m && (B.$.playHighlight(), h(!0));
                            }, [m]),
                            y = (0, r.useCallback)(() => m && h(!1), [m]);
                        return n().createElement(
                            'div',
                            { className: b, onClick: f, onMouseEnter: w, onMouseLeave: y },
                            F === D.Disabled && n().createElement('div', { className: H.disabled }),
                            F === D.Selected && n().createElement('div', { className: H.selected }),
                            g && n().createElement('div', { className: H.hover }),
                            n().createElement('div', { className: H.icon, style: { backgroundImage: `url(${i})` } }),
                            n().createElement(N, { title: l, cardType: c, kwargs: v, className: H.title }),
                            n().createElement(x, { description: o, cardType: c, kwargs: v, className: H.description }),
                            n().createElement(
                                'div',
                                { className: H.price },
                                n().createElement(O, { cost: A, tooltip: t, index: a, tooltipRootId: e }),
                            ),
                            n().createElement(p, { cardType: c, kwargs: v }),
                        );
                    },
                    G = 'PriceListApp_base_7d',
                    U = 'PriceListApp_card_6a';
                function $() {
                    return (
                        ($ =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        $.apply(this, arguments)
                    );
                }
                const X = (0, d.Pi)(function ({ rootId: u, className: e }) {
                        const t = E(),
                            r = t.model,
                            a = t.controls,
                            i = (0, F.GS)().mediaWidth;
                        return n().createElement(
                            'div',
                            { className: _()(G, e) },
                            (0, s.UI)(r.computes.cards(), (e, t) =>
                                n().createElement(
                                    j,
                                    $({}, e, {
                                        key: `${t}-${e.cardState}`,
                                        onClick: a.onCardClick,
                                        index: t,
                                        tooltipRootId: u,
                                        size: i > F.cJ.ExtraSmall ? W.Big : W.Small,
                                        className: U,
                                    }),
                                ),
                            ),
                        );
                    }),
                    z = n().memo(function ({
                        rootId: u = R.views.lobby.crew.widgets.PriceList('resId'),
                        className: e,
                    }) {
                        return n().createElement(
                            c,
                            { options: { rootId: u } },
                            n().createElement(X, { rootId: u, className: e }),
                        );
                    });
            },
            776: (u, e, t) => {
                'use strict';
                let r;
                t.d(e, { f: () => r }),
                    (function (u) {
                        (u.backport = 'backport'), (u.normal = 'normal'), (u.absent = 'absent');
                    })(r || (r = {}));
            },
            8460: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
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
            6143: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                const r = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                };
            },
            9627: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                const r = {
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
                };
            },
            7629: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                const r = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
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
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [e, t, r] = deferred[l], a = !0, i = 0; i < e.length; i++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [e, t, r];
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
        (__webpack_require__.j = 410),
        (() => {
            var u = { 410: 0, 897: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [a, i, s] = t,
                        l = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (s) var o = s(__webpack_require__);
                    }
                    for (e && e(t); l < a.length; l++)
                        (n = a[l]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(o);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(5490));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
