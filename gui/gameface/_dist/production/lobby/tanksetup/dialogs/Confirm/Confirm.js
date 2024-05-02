(() => {
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7727),
                    i = t(6179),
                    s = t.n(i),
                    o = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: c,
                    mixClass: _,
                    soundHover: m,
                    soundClick: d,
                    onMouseEnter: E,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: D,
                    onMouseLeave: p,
                    onClick: g,
                }) => {
                    const h = (0, i.useRef)(null),
                        C = (0, i.useState)(t),
                        B = C[0],
                        b = C[1],
                        v = (0, i.useState)(!1),
                        f = v[0],
                        y = v[1],
                        w = (0, i.useState)(!1),
                        x = w[0],
                        k = w[1],
                        S = (0, i.useCallback)(() => {
                            c || (h.current && (h.current.focus(), b(!0)));
                        }, [c]),
                        T = (0, i.useCallback)(
                            (e) => {
                                B && null !== h.current && !h.current.contains(e.target) && b(!1);
                            },
                            [B],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                c || (g && g(e));
                            },
                            [c, g],
                        ),
                        N = (0, i.useCallback)(
                            (e) => {
                                c || (null !== m && (0, r.G)(m), E && E(e), k(!0));
                            },
                            [c, m, E],
                        ),
                        I = (0, i.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        M = (0, i.useCallback)(
                            (e) => {
                                c || (D && D(e), y(!1));
                            },
                            [c, D],
                        ),
                        O = (0, i.useCallback)(
                            (e) => {
                                c || (null !== d && (0, r.G)(d), F && F(e), t && S(), y(!0));
                            },
                            [c, d, F, S, t],
                        ),
                        L = (0, i.useCallback)(
                            (e) => {
                                c || (p && p(e), y(!1));
                            },
                            [c, p],
                        ),
                        H = a()(
                            o.Z.base,
                            o.Z[`base__${n}`],
                            {
                                [o.Z.base__disabled]: c,
                                [o.Z[`base__${u}`]]: u,
                                [o.Z.base__focus]: B,
                                [o.Z.base__highlightActive]: f,
                                [o.Z.base__firstHover]: x,
                            },
                            _,
                        ),
                        W = a()(o.Z.state, o.Z.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, i.useEffect)(() => {
                            b(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: h,
                                className: H,
                                onMouseEnter: N,
                                onMouseMove: I,
                                onMouseUp: M,
                                onMouseDown: O,
                                onMouseLeave: L,
                                onClick: P,
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
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _ = (0, i.memo)(c);
            },
            2106: (e, u, t) => {
                'use strict';
                let n, a;
                t.d(u, { L: () => n, q: () => a }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(n || (n = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(a || (a = {}));
            },
            2262: (e, u, t) => {
                'use strict';
                t.d(u, { XZ: () => d });
                var n = t(6179),
                    a = t.n(n),
                    r = t(6483),
                    i = t.n(r),
                    s = t(7727),
                    o = t(1641),
                    l = t(8844),
                    c = t(4382);
                const _ = [
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
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const d = (e) => {
                    let u = e.id,
                        t = e.isChecked,
                        r = void 0 !== t && t,
                        d = e.isDisabled,
                        E = void 0 !== d && d,
                        A = e.isAlert,
                        F = void 0 !== A && A,
                        D = e.size,
                        p = void 0 === D ? l.yB.medium : D,
                        g = e.type,
                        h = void 0 === g ? l.Rh.primary : g,
                        C = e.soundHover,
                        B = void 0 === C ? 'highlight' : C,
                        b = e.soundClick,
                        v = void 0 === b ? 'play' : b,
                        f = e.onMouseEnter,
                        y = e.onMouseLeave,
                        w = e.onMouseUp,
                        x = e.onMouseDown,
                        k = e.onClick,
                        S = e.onChange,
                        T = e.onFocus,
                        P = e.onBlur,
                        N = e.text,
                        I = e.contentStyles,
                        M = e.children,
                        R = e.alignment,
                        O = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, _);
                    const L = (0, n.useState)(!1),
                        H = L[0],
                        W = L[1],
                        $ = (0, n.useState)(!1),
                        U = ($[0], $[1]),
                        V = (0, n.useCallback)(
                            (e) => {
                                E || (S && S(), k && k(e));
                            },
                            [E, S, k],
                        ),
                        Z = (0, n.useCallback)(
                            (e) => {
                                const u = e.button === o.t.LEFT;
                                E || (u && W(!0), u && x && x(e), v && (0, s.G)(v));
                            },
                            [E, x, v],
                        ),
                        j = (0, n.useCallback)(
                            (e) => {
                                E || (W(!1), w && w(e));
                            },
                            [E, w],
                        ),
                        z = (0, n.useCallback)(
                            (e) => {
                                E || (f && f(e), B && (0, s.G)(B));
                            },
                            [E, f, B],
                        ),
                        q = (0, n.useCallback)(
                            (e) => {
                                E || (W(!1), y && y(e));
                            },
                            [E, y],
                        ),
                        G = (0, n.useCallback)(
                            (e) => {
                                E || (U(!0), T && T(e));
                            },
                            [E, T],
                        ),
                        K = (0, n.useCallback)(
                            (e) => {
                                E || (U(!1), P && P(e));
                            },
                            [E, P],
                        ),
                        X = a().createElement(
                            'div',
                            { className: c.Z.label },
                            a().createElement(
                                'div',
                                { className: i()(c.Z.labelContent, 's-labelContent'), style: I },
                                N || M,
                            ),
                        );
                    return a().createElement(
                        'div',
                        m(
                            {
                                id: u,
                                className: i()(c.Z.base, c.Z[`base__${p}`], c.Z[`base__${h}`], {
                                    [c.Z.base__checked]: r,
                                    [c.Z.base__disabled]: E,
                                    [c.Z.base__mouseDown]: H,
                                    [c.Z.base__alert]: F,
                                    [c.Z.base__center]: R === l.N3.Center,
                                    [c.Z.base__bottom]: R === l.N3.Bottom,
                                }),
                                onClick: V,
                                onMouseEnter: z,
                                onMouseLeave: q,
                                onMouseDown: Z,
                                onMouseUp: j,
                                onFocus: G,
                                onBlur: K,
                            },
                            O,
                        ),
                        a().createElement(
                            'div',
                            { className: c.Z.input },
                            a().createElement('div', { className: c.Z.alertOverlay }),
                            a().createElement('div', { className: c.Z.inputHoverOverlay }),
                            a().createElement('div', { className: c.Z.highlight }),
                        ),
                        a().createElement('div', { className: c.Z.checkmark }),
                        ((N || M) && X) || null,
                    );
                };
            },
            8844: (e, u, t) => {
                'use strict';
                let n, a, r;
                t.d(u, { N3: () => r, Rh: () => a, yB: () => n }),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(n || (n = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(r || (r = {}));
            },
            7405: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => c });
                var n = t(6483),
                    a = t.n(n),
                    r = t(2372),
                    i = t(6179),
                    s = t.n(i),
                    o = t(8460),
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
                        s().createElement(
                            'span',
                            { className: a()(o.Z.base, o.Z[`base__${t}`], E) },
                            s().createElement(
                                'span',
                                {
                                    className: a()(
                                        o.Z.value,
                                        o.Z[`value__${n}`],
                                        !m && o.Z.value__notEnough,
                                        null == A ? void 0 : A.value,
                                    ),
                                },
                                _ && i > 0 && '+',
                                s().createElement(r.A, { value: i, format: n === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            s().createElement('span', {
                                className: a()(o.Z.icon, o.Z[`icon__${n}-${t}`], null == A ? void 0 : A.icon),
                            }),
                            e &&
                                s().createElement(
                                    'span',
                                    {
                                        className: a()(
                                            o.Z.stock,
                                            c && o.Z.stock__indent,
                                            u && o.Z.stock__interactive,
                                            null == A ? void 0 : A.stock,
                                        ),
                                    },
                                    s().createElement('span', {
                                        className: o.Z.stockBackground,
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
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => _ });
                var n = t(3138),
                    a = t(6179),
                    r = t(1043),
                    i = t(5262);
                const s = n.O.client.getSize('rem'),
                    o = s.width,
                    l = s.height,
                    c = Object.assign({ width: o, height: l }, (0, i.T)(o, l, r.j)),
                    _ = (0, a.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t(3138), t(6536), t(6179), t(3495), t(1043), t(5262);
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t(7382),
                    r = t(3495);
                const i = ['children'];
                const s = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, i);
                    const s = (0, n.useContext)(r.Y),
                        o = s.extraLarge,
                        l = s.large,
                        c = s.medium,
                        _ = s.small,
                        m = s.extraSmall,
                        d = s.extraLargeWidth,
                        E = s.largeWidth,
                        A = s.mediumWidth,
                        F = s.smallWidth,
                        D = s.extraSmallWidth,
                        p = s.extraLargeHeight,
                        g = s.largeHeight,
                        h = s.mediumHeight,
                        C = s.smallHeight,
                        B = s.extraSmallHeight,
                        b = { extraLarge: p, large: g, medium: h, small: C, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && _) return u;
                        if (t.extraSmall && m) return u;
                    } else {
                        if (t.extraLargeWidth && d) return (0, a.H)(u, t, b);
                        if (t.largeWidth && E) return (0, a.H)(u, t, b);
                        if (t.mediumWidth && A) return (0, a.H)(u, t, b);
                        if (t.smallWidth && F) return (0, a.H)(u, t, b);
                        if (t.extraSmallWidth && D) return (0, a.H)(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && p) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && B) return u;
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
                (0, n.memo)(s);
            },
            7382: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => n });
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, u, t) => {
                'use strict';
                t(6010), t(1039), t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
                t.d(u, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                'use strict';
                var n;
                function a(e, u, t) {
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
                }
                t.d(u, { T: () => a }),
                    (function (e) {
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
                    })(n || (n = {}));
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var n = t(2056),
                    a = t(6179),
                    r = t.n(a);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            m = e.args,
                            d = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, i);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, m, { body: t, header: l, note: c, alert: _ });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [_, t, l, c, m]);
                        return r().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((A = null == m ? void 0 : m.hasHtmlContent),
                                        A ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                d,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    a = t(9916),
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
                function s(e) {
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
                const o = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
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
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            m = e.onClick,
                            d = e.ignoreShowDelay,
                            E = void 0 !== d && d,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            D = e.decoratorId,
                            p = void 0 === D ? 0 : D,
                            g = e.isEnabled,
                            h = void 0 === g || g,
                            C = e.targetId,
                            B = void 0 === C ? 0 : C,
                            b = e.onShow,
                            v = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, i);
                        const y = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(() => B || (0, n.F)().resId, [B]),
                            x = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (o(t, p, { isMouseEvent: !0, on: !0, arguments: s(a) }, w),
                                    b && b(),
                                    (y.current.isVisible = !0));
                            }, [t, p, a, w, b]),
                            k = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        o(t, p, { on: !1 }, w),
                                        y.current.isVisible && v && v(),
                                        (y.current.isVisible = !1);
                                }
                            }, [t, p, w, v]),
                            S = (0, r.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(y.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === h && k();
                            }, [h, k]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return h
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(x, E ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              k(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === F && k(), null == m || m(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === F && k(), null == _ || _(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : u;
                        var T;
                    };
            },
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => s });
                var n = t(3138);
                function a(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r(e, u);
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
                function r(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: u = 0, getRoot: t = i, context: r = 'model' } = {}) {
                    const s = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = s.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            a = r.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, a);
                    };
                    return {
                        subscribe: (t, a) => {
                            const i = 'string' == typeof a ? `${r}.${a}` : r,
                                o = n.O.view.addModelObserver(i, u, !0);
                            return s.set(o, t), e && t(l(a)), o;
                        },
                        readByPath: l,
                        createCallback: (e, u) => {
                            const t = l(u);
                            return (...u) => {
                                t(e(...u));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const u = l(e);
                            return () => {
                                u();
                            };
                        },
                        dispose: function () {
                            for (var e, t = a(s.keys()); !(e = t()).done; ) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => o });
                var n = t(4598),
                    a = t(9174),
                    r = t(6179),
                    i = t.n(r),
                    s = t(8246);
                const o = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const m = (0, r.useRef)([]),
                                d = (t, r, i) => {
                                    var o;
                                    const l = s.U(r),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == i ? void 0 : i.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        d = (e) => m.current.push(e),
                                        E = e({
                                            mode: t,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const r = null != u ? u : _(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const r = null != u ? u : _(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = _(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = a.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((u) => {
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
                                                            i = Object.entries(r),
                                                            s = i.reduce(
                                                                (e, [u, t]) => ((e[t] = a.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        i.forEach(([u, t]) => {
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
                                            cleanup: d,
                                        }),
                                        A = { mode: t, model: E, externalModel: c, cleanup: d };
                                    return {
                                        model: E,
                                        controls: 'mocks' === t && i ? i.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                A = (0, r.useState)(o),
                                F = A[0],
                                D = A[1],
                                p = (0, r.useState)(() => d(o, l, _)),
                                g = p[0],
                                h = p[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? h(d(F, l, _)) : (E.current = !0);
                                }, [_, F, l]),
                                (0, r.useEffect)(() => {
                                    D(o);
                                }, [o]),
                                (0, r.useEffect)(
                                    () => () => {
                                        g.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [g],
                                ),
                                i().createElement(t.Provider, { value: g }, c)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => r, onScaleUpdated: () => i });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
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
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, s),
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
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => i,
                    });
                var n = t(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
                t.d(u, { O: () => a });
                var n = t(5959);
                const a = { view: t(7641), client: n };
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
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => B,
                        isFocused: () => h,
                        pxToRem: () => D,
                        remToPx: () => p,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => w,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
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
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    w = Promise.all([
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
                    s = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
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
                            o('popover' === e ? a : i);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                function n() {}
                t.d(u, { ZT: () => n, jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
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
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(6179);
                const a = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
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
                        s = -1;
                    document.addEventListener('mousedown', (t) => {
                        document.getSelection().empty(),
                            t.target.select &&
                                -1 === s &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === s && t.target.select && t.target === e && (s = e.selectionStart), s > -1)) {
                                const n = Math.min(Math.max(t.x, u.left), u.right),
                                    a = Math.min(Math.max(t.y, u.top), u.bottom),
                                    r = document.createEvent('MouseEvent');
                                r.initMouseEvent('mousedown', !0, !0, null, 1, n, a, n, a, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(r);
                                const i = e.selectionEnd;
                                i > s ? e.setSelectionRange(s, i, 'forward') : e.setSelectionRange(i, s, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (s = -1);
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
            1641: (e, u, t) => {
                'use strict';
                let n;
                t.d(u, { t: () => n }),
                    (function (e) {
                        (e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH');
                    })(n || (n = {}));
            },
            7727: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { G: () => n });
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
                    B3: () => o,
                    Z5: () => i.Z5,
                    B0: () => s,
                    ry: () => D,
                    Eu: () => p,
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
                let s;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    d = t(3138);
                const E = ['args'];
                function A(e, u, t, n, a, r, i) {
                    try {
                        var s = e[r](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                            A(r, n, a, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(r, n, a, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = () =>
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
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
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
                    h = () => g(s.CLOSE),
                    C = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var B = t(7572);
                const b = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                m = o.height,
                                E = {
                                    x: d.O.view.pxToRem(l) + i.x,
                                    y: d.O.view.pxToRem(c) + i.y,
                                    width: d.O.view.pxToRem(_),
                                    height: d.O.view.pxToRem(m),
                                };
                            g(s.POP_OVER, {
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
                        onBindingsReady: D,
                        onLayoutReady: p,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
            1922: (e, u, t) => {
                'use strict';
                t.d(u, { cJ: () => n });
                t(6483), t(7739), t(6179), t(1960);
                let n;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(n || (n = {}));
            },
            5310: (e, u, t) => {
                'use strict';
                t.d(u, { f: () => _ });
                var n = t(6483),
                    a = t.n(n),
                    r = t(9916),
                    i = t(6179),
                    s = t.n(i),
                    o = t(2558),
                    l = t(8934),
                    c = t(8529);
                const _ = ({ children: e, when: u, canAccept: t }) => {
                    const n = (0, i.useCallback)((e, u) => {
                            (0, r.Eu)().then(() => {
                                (e.className = ''), e.classList.add(c.Z.base), e.classList.add(u);
                            });
                        }, []),
                        _ = (0, i.useCallback)(
                            (e) => {
                                n(e, c.Z.base__enter);
                            },
                            [n],
                        ),
                        m = (0, i.useCallback)(
                            (e) => {
                                n(e, c.Z.base__exit);
                            },
                            [n],
                        );
                    return u
                        ? s().createElement(
                              o.Z,
                              null,
                              s().createElement(
                                  l.Z,
                                  { in: t, timeout: 500, onEnter: _, onExit: m, key: `index-${t}` },
                                  s().createElement('div', { className: a()(c.Z.base, c.Z.base__withAnimation) }, e),
                              ),
                          )
                        : s().createElement('div', { className: c.Z.base }, e);
                };
            },
            8175: (e, u, t) => {
                'use strict';
                t.d(u, { D0: () => p, my: () => D, sF: () => h });
                var n = t(6483),
                    a = t.n(n),
                    r = t(3403),
                    i = t(6179),
                    s = t.n(i),
                    o = t(1922),
                    l = t(3934),
                    c = t(5310),
                    _ = t(5851),
                    m = t(2306),
                    d = t(7198),
                    E = t(5178),
                    A = t(6826),
                    F = t(628);
                let D, p;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(D || (D = {})),
                    (function (e) {
                        (e.Column = 'column'), (e.Row = 'row');
                    })(p || (p = {}));
                const g = R.strings.tank_setup.dealPanel,
                    h = (0, r.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: u = !1,
                            mediaSize: t = o.cJ.Medium,
                            panelType: n = p.Row,
                            priceLabel: r = g.toBePaid(),
                            autoRenewalLabel: D,
                            onAutoRenewalChanged: h,
                            onDealConfirmed: C,
                            onDealCancelled: B,
                        }) => {
                            const b = (0, E.t)(),
                                v = b.model,
                                f = (0, i.useRef)(null),
                                y = t === o.cJ.Tiny || t === o.cJ.Small,
                                w = n === p.Row,
                                x = Boolean(v.totalItemsInStorage.get()),
                                k = Boolean(v.price.get().length),
                                S = y && x && k;
                            return s().createElement(
                                m.h.Provider,
                                { value: b },
                                s().createElement(
                                    'div',
                                    {
                                        className: a()(
                                            F.Z.base,
                                            t && F.Z[`base__${t}`],
                                            e && F.Z.base__renewal,
                                            !w && F.Z.base__dialog,
                                        ),
                                    },
                                    e &&
                                        s().createElement(
                                            'div',
                                            { className: a()(F.Z.renewal, !w && F.Z.renewal__dialog) },
                                            s().createElement(_.Y, { renewType: e, onValueChanged: h, label: D }),
                                        ),
                                    s().createElement(
                                        c.f,
                                        { when: w, canAccept: v.canAccept.get() },
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            x &&
                                                s().createElement(
                                                    'div',
                                                    { className: a()(F.Z.storage, t && F.Z[`storage__${t}`]) },
                                                    !y &&
                                                        s().createElement(
                                                            'div',
                                                            { className: F.Z.from },
                                                            g.fromStorage(),
                                                        ),
                                                    s().createElement(l.K, {
                                                        valueFirst: !0,
                                                        itemsInStorage: v.totalItemsInStorage.get(),
                                                    }),
                                                ),
                                            S && s().createElement('div', { className: F.Z.plus }),
                                            k &&
                                                s().createElement(
                                                    'div',
                                                    { className: a()(F.Z.totalPrice, S && F.Z.totalPrice__mixed) },
                                                    s().createElement(A.M, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: r,
                                                        isHideMessage: y && w,
                                                    }),
                                                ),
                                            u &&
                                                v.canAccept.get() &&
                                                s().createElement(
                                                    'div',
                                                    { className: F.Z.control },
                                                    s().createElement(d.Z, {
                                                        isDisabled: v.isDisabled.get(),
                                                        canCancel: v.canCancel.get(),
                                                        onCancel: () => B && B(),
                                                        onConfirm: () => C && C(),
                                                        confirmButtonRef: f,
                                                    }),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    );
            },
            5851: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => c });
                var n = t(2262),
                    a = t(6373),
                    r = t(3403),
                    i = t(6179),
                    s = t.n(i),
                    o = t(8175),
                    l = t(2306);
                const c = (0, r.Pi)(
                    ({
                        label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: u,
                        renewType: t = o.my.General,
                    }) => {
                        const r = (0, l.o)(),
                            c = r.model,
                            _ = r.controls,
                            m = c.dealPanel.get().isAutoRenewalEnabled,
                            d = (0, i.useCallback)(() => {
                                _.changeAutoRenewal(!m), u && u(!m);
                            }, [_, m, u]),
                            E = (0, i.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal,
                                    u = e.header.$dyn(t),
                                    n = t === o.my.General ? '' : e.body.$dyn(t);
                                return { header: String(u || e.header.general()), body: n ? String(n) : void 0 };
                            }, [t]);
                        return s().createElement(
                            a.i,
                            E,
                            s().createElement(n.XZ, {
                                id: 'renewal-setup-checkbox',
                                isChecked: m,
                                text: e,
                                onChange: d,
                            }),
                        );
                    },
                );
            },
            1957: (e, u, t) => {
                'use strict';
                t.d(u, { p: () => s });
                var n = t(3457),
                    a = t(6179),
                    r = t.n(a),
                    i = t(2527);
                const s = r().memo(({ applyBtnString: e, isDisabled: u, onConfirm: t, confirmButtonRef: a }) =>
                    r().createElement(
                        'div',
                        { ref: a, className: i.Z.base, id: 'deal-panel-confirm' },
                        r().createElement(
                            n.u5,
                            { size: n.qE.medium, disabled: u, onClick: () => t && t() },
                            R.strings.tank_setup.dealPanel.button.$dyn(e),
                        ),
                    ),
                );
            },
            7198: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var n = t(3457),
                    a = t(6373),
                    r = t(7383),
                    i = t(6179),
                    s = t.n(i),
                    o = t(1957),
                    l = t(8099);
                const c = s().memo(
                    ({
                        applyBtnString: e = r.YR,
                        isDisabled: u,
                        canCancel: t,
                        onCancel: i,
                        onConfirm: c,
                        confirmButtonRef: _,
                    }) => {
                        const m = R.strings.tank_setup.dealPanel,
                            d = s().createElement(o.p, {
                                applyBtnString: e,
                                isDisabled: u,
                                onConfirm: c,
                                confirmButtonRef: _,
                            });
                        return s().createElement(
                            'div',
                            { className: l.Z.base },
                            u
                                ? s().createElement(
                                      a.i,
                                      { body: m.tooltip.notEnough() },
                                      s().createElement('div', null, d),
                                  )
                                : d,
                            s().createElement(
                                'div',
                                { id: 'deal-panel-cancel' },
                                s().createElement(
                                    n.u5,
                                    {
                                        size: n.qE.medium,
                                        type: n.L$.secondary,
                                        mixClass: l.Z.button,
                                        disabled: !t,
                                        onClick: i,
                                    },
                                    m.button.cancel(),
                                ),
                            ),
                        );
                    },
                );
            },
            3755: (e, u, t) => {
                'use strict';
                t.d(u, { w: () => l });
                var n = t(3403),
                    a = t(6179),
                    r = t.n(a),
                    i = t(8175),
                    s = t(5178);
                const o = ['parentModelPath'];
                const l = (0, n.Pi)((e) => {
                    let u = e.parentModelPath,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, o);
                    const n = `${u}.dealPanel`;
                    return r().createElement(s.k, { options: { context: n } }, r().createElement(i.sF, t));
                });
            },
            6826: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => c });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6179),
                    i = t.n(r),
                    s = t(8401),
                    o = t(5178),
                    l = t(1523);
                const c = ({ parentId: e, isHideMessage: u, priceLabel: t }) => {
                    const n = (0, o.t)().model;
                    return i().createElement(
                        'div',
                        { id: `${e}-total-price`, className: l.Z.base },
                        i().createElement('div', { className: a()(l.Z.message, u && l.Z.message__hidden) }, t),
                        i().createElement(s.t, {
                            ignoreDiscount: !0,
                            bigSize: !0,
                            price: n.price.get(),
                            defPrice: n.defPrice.get(),
                            discount: n.discount.get(),
                            priceSeparator: i().createElement('div', { className: l.Z.plus }),
                        }),
                    );
                };
            },
            2306: (e, u, t) => {
                'use strict';
                t.d(u, { h: () => a, o: () => r });
                var n = t(6179);
                const a = (0, n.createContext)(null),
                    r = () => {
                        const e = (0, n.useContext)(a);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
            },
            5178: (e, u, t) => {
                'use strict';
                t.d(u, { k: () => a, t: () => r });
                const n = (0, t(3215).q)()(
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
                    a = n[0],
                    r = n[1];
            },
            8401: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => m });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7405),
                    i = t(329),
                    s = t(6179),
                    o = t.n(s);
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
                        return o().createElement(
                            'div',
                            { className: l },
                            e.map(
                                ({ value: e }, u) =>
                                    (n || Boolean(e.value)) &&
                                    o().createElement(
                                        s.Fragment,
                                        { key: u },
                                        u > 0 && t,
                                        o().createElement(
                                            'div',
                                            { className: a()(c, E && _) },
                                            o().createElement(r.F, {
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
                const s = 'Storage_base_53',
                    o = 'Storage_base__reversed_8f',
                    l = 'Storage_icon_6a',
                    c = 'Storage_count_7a',
                    _ = 'Storage_count__zero_54',
                    m = ({ valueFirst: e = !1, itemsInStorage: u }) => {
                        const t = i()(s, e && o),
                            n = i()(c, 0 === u && _);
                        return a().createElement(
                            'div',
                            { className: t },
                            a().createElement('div', { className: l }),
                            a().createElement('div', { className: n }, u),
                        );
                    };
            },
            118: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t.n(n),
                    r = t(493),
                    i = t.n(r);
                const s = 'postProgressionPairModification',
                    o = 'dealPanel';
                var l = t(3138),
                    c = t(5521),
                    _ = t(9916);
                const m = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function d(e = c.n.NONE, u = m, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== c.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && l.O.view.isEventHandled()) return;
                                l.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, a]);
                }
                function E() {
                    !(function (e = c.n.ESCAPE) {
                        d(e, _.Sy, !0);
                    })(c.n.ESCAPE);
                }
                var A = t(3403),
                    F = t(6483),
                    D = t.n(F),
                    p = t(3457),
                    g = t(7727);
                const h = {
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
                    C = [
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
                function B() {
                    return (
                        (B =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        B.apply(this, arguments)
                    );
                }
                class b extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, g.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, g.G)(this.props.soundClick);
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
                            s = e.classNames,
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
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, C)),
                            d = D()(h.base, h[`base__${i}`], h[`base__${r}`], null == s ? void 0 : s.base),
                            E = D()(h.icon, h[`icon__${i}`], h[`icon__${r}`], null == s ? void 0 : s.icon),
                            A = D()(h.glow, null == s ? void 0 : s.glow),
                            F = D()(h.caption, h[`caption__${i}`], null == s ? void 0 : s.caption),
                            p = D()(h.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            B(
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
                            'info' !== i && a().createElement('div', { className: h.shine }),
                            a().createElement('div', { className: E }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: F }, u),
                            n && a().createElement('div', { className: p }, n),
                        );
                    }
                }
                b.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var v = t(6373);
                var f = t(1281);
                let y;
                function w(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(y || (y = {}));
                const x = (e) => e.replace(/&nbsp;/g, ' '),
                    k = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    S = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    T = (e, u, t = y.left) => e.split(u).reduce(t === y.left ? k : S, []),
                    P = (() => {
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
                    N = ['zh_cn', 'zh_sg', 'zh_tw'],
                    I = (e, u = y.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (N.includes(t)) return P(e);
                        if ('ja' === t) {
                            return (0, f.D4)()
                                .parse(e)
                                .map((e) => x(e));
                        }
                        return ((e, u = y.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = x(e);
                            return T(a, /( )/, u).forEach((e) => (t = t.concat(T(e, n, y.left)))), t;
                        })(e, u);
                    };
                var M = t(8613);
                Date.now(), M.Ew.getRegionalDateTime, M.Ew.getFormattedDateTime;
                var O = t(7902);
                const L = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
                var H = t(6536);
                const W = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    $ = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    U = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = L(`${e}.${t}`, window);
                                return W(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    V = (e) => {
                        const u = ((e) => {
                                const u = (0, O.F)(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: $(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = L($(t, `${u}.${n}`), window);
                                    return W(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    Z = _.Sw.instance;
                let j;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(j || (j = {}));
                const z = (e = 'model', u = j.Deep) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            r = (0, n.useMemo)(() => (0, O.F)(), []),
                            i = r.caller,
                            s = r.resId,
                            o = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            l = (0, n.useState)(() =>
                                ((e) => {
                                    const u = L(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return W(u) ? u.value : u;
                                })(U(o)),
                            ),
                            c = l[0],
                            _ = l[1],
                            m = (0, n.useRef)(-1);
                        return (
                            (0, H.Z)(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? j.Deep : j.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== j.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === j.Deep
                                                ? (e === c && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        n = V(e);
                                    m.current = Z.addCallback(n, t, s, u === j.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (u !== j.None)
                                    return () => {
                                        Z.removeCallback(m.current, s);
                                    };
                            }, [s, u]),
                            c
                        );
                    },
                    q = _.Sw.instance,
                    G = (e = 'model', u = !0) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            r = (0, n.useMemo)(() => (0, O.F)(), []),
                            i = r.caller,
                            s = r.resId,
                            o = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `children.${i}.${e}` : e),
                                [i, e],
                            ),
                            l = (0, n.useMemo)(
                                () =>
                                    ((e) => {
                                        const u = L(e, window);
                                        for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                        return u;
                                    })(o),
                                [o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                if (u) {
                                    const u = () => {
                                            a((e) => e + 1);
                                        },
                                        t = q.addCallback(e, u, s);
                                    return () => q.removeCallback(t, s);
                                }
                            }, [e, u, s]),
                            l
                        );
                    };
                var K = t(329),
                    X = t(2056),
                    Y = t(2372);
                let J;
                !(function (e) {
                    (e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent');
                })(J || (J = {}));
                const Q = {
                        currency: 'CurrencyItem_currency_b6',
                        currency__credits: 'CurrencyItem_currency__credits_eb',
                        currency__gold: 'CurrencyItem_currency__gold_af',
                        currency__crystal: 'CurrencyItem_currency__crystal_fc',
                        currency__freeXP: 'CurrencyItem_currency__freeXP_36',
                    },
                    ee = ({ value: e, currencyType: u, isWalletAvailable: t }) => {
                        const r = u === K.V2.gold ? 'gold' : 'integral',
                            i = (0, n.useMemo)(() => {
                                return (
                                    (e = J.backport),
                                    (t = { currency: u }),
                                    {
                                        isEnabled: e !== J.absent,
                                        args: t,
                                        contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                        decoratorId:
                                            e === J.normal
                                                ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                                : void 0,
                                        ignoreShowDelay: e === J.backport,
                                        ignoreMouseClick: !0,
                                    }
                                );
                                var e, t;
                            }, [u]);
                        return a().createElement(
                            X.u,
                            i,
                            a().createElement(
                                'span',
                                { className: D()(Q.currency, Q[`currency__${u}`]) },
                                t ? a().createElement(Y.A, { value: e, format: r }) : R.strings.common.common.dashes(),
                            ),
                        );
                    },
                    ue = 'CurrencyBalance_base_97',
                    te = ({ credits: e, golds: u, crystals: t, freexp: n, isWalletAvailable: r }) =>
                        a().createElement(
                            'div',
                            { className: ue },
                            a().createElement(ee, { value: t, currencyType: K.V2.crystal, isWalletAvailable: r }),
                            a().createElement(ee, { value: u, currencyType: K.V2.gold, isWalletAvailable: r }),
                            a().createElement(ee, { value: e, currencyType: K.V2.credits, isWalletAvailable: r }),
                            a().createElement(ee, { value: n, currencyType: K.V2.freeXP, isWalletAvailable: r }),
                        ),
                    ne = 'DialogTemplate_base_bb',
                    ae = 'DialogTemplate_control_3e',
                    re = 'DialogTemplate_closeButton_2c',
                    ie = 'DialogTemplate_view_78',
                    se = 'DialogTemplate_view__show_51',
                    oe = 'DialogTemplate_content_dc',
                    le = 'DialogTemplate_line_af',
                    ce = 'DialogTemplate_divider_cb',
                    _e = 'DialogTemplate_footer_2b',
                    me = 'DialogTemplate_buttons_f5',
                    de = 'DialogTemplate_buttonWrapper_d9',
                    Ee = 'DialogTemplate_button_f0';
                function Ae() {
                    return (
                        (Ae =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ae.apply(this, arguments)
                    );
                }
                const Fe = ({
                    parentId: e,
                    content: u,
                    footer: t,
                    type: r = 'simple',
                    buttonAccept: i,
                    buttonAcceptText: s,
                    buttonCancel: o,
                    buttonCancelText: _,
                    disabledAcceptTooltipText: m = R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                    showPayInfo: d = !1,
                    isShowTooltip: E = !0,
                }) => {
                    const A = z('model'),
                        F = A.credits,
                        g = A.golds,
                        h = A.crystals,
                        C = A.freexp,
                        B = A.onAcceptClicked,
                        f = A.onCancelClicked,
                        y = A.onExit,
                        w = A.isWalletAvailable,
                        x = (0, n.useCallback)(() => {
                            B();
                        }, [B]),
                        k = (0, n.useCallback)(() => {
                            f();
                        }, [f]),
                        S = (0, n.useCallback)(() => {
                            y();
                        }, [y]),
                        T = (0, n.useCallback)(
                            (e) => {
                                e.keyCode in c.n &&
                                    e.keyCode !== c.n.BACKSPACE &&
                                    e.keyCode !== c.n.DELETE &&
                                    (e.preventDefault(), l.O.view.setEventHandled()),
                                    e.keyCode !== c.n.ENTER || e.altKey || window.model.isAcceptDisabled || i.disabled
                                        ? e.keyCode === c.n.ESCAPE && S()
                                        : x();
                            },
                            [i.disabled, x, S],
                        );
                    (0, n.useEffect)(
                        () => (
                            document.addEventListener('keydown', T), () => document.removeEventListener('keydown', T)
                        ),
                        [T],
                    );
                    const P = D()(le, ce),
                        N =
                            d &&
                            'simple' === r &&
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(te, {
                                    credits: F,
                                    golds: g,
                                    crystals: h,
                                    freexp: C,
                                    isWalletAvailable: w,
                                }),
                                a().createElement('div', { className: le }),
                            ),
                        I =
                            i &&
                            a().createElement(
                                v.i,
                                { body: m || '', isEnabled: Boolean(m) && E && i.disabled },
                                a().createElement(
                                    'div',
                                    { id: `${e}-accept`, className: de },
                                    a().createElement(p.u5, Ae({ onClick: x, mixClass: Ee }, i), s),
                                ),
                            ),
                        M =
                            o &&
                            a().createElement(
                                'div',
                                { id: `${e}-cancel`, className: de },
                                a().createElement(p.u5, Ae({ onClick: k, mixClass: Ee }, o), _),
                            );
                    return a().createElement(
                        'div',
                        { className: ne },
                        a().createElement(
                            'div',
                            { className: ae },
                            N,
                            a().createElement(
                                'div',
                                { id: `${e}-close-button`, className: re },
                                a().createElement(b, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: S,
                                }),
                            ),
                        ),
                        a().createElement(
                            'div',
                            { className: D()(ie, se) },
                            a().createElement('div', { className: oe }, u),
                            a().createElement('div', { className: P }),
                            t && a().createElement('div', { className: _e }, t),
                            a().createElement('div', { className: me }, I, M),
                        ),
                    );
                };
                var De = t(2106);
                const pe = 'confirm-app',
                    ge = { size: De.q.medium },
                    he = { size: De.q.medium, type: De.L.secondary };
                let Ce;
                !(function (e) {
                    (e.Payment = 'payment'), (e.Setup = 'setup'), (e.Modification = 'modification');
                })(Ce || (Ce = {}));
                const Be = (0, n.createContext)(null),
                    be = () => {
                        const e = (0, n.useContext)(Be);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
                var ve = t(3215),
                    fe = t(4598);
                function ye(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                var we = t(3946);
                const xe = (0, ve.q)()(({ observableModel: e }) => {
                        const u = ((e) => {
                                const u = {
                                        root: e.object(),
                                        exchangePanel: e.object('exchangePanel'),
                                        fromItem: e.object('exchangePanel.fromItem'),
                                        toItem: e.object('exchangePanel.toItem'),
                                        exchangeRate: e.object('exchangePanel.exchangeRate'),
                                        lacksMoney: e.object('lacksMoney'),
                                        mainContent: e.object('mainContent'),
                                        confirmedItems: e.array('mainContent.confirmedItems'),
                                        lacksItem: e.array('mainContent.lacksItem'),
                                        needRepairContent: e.object('needRepairContent'),
                                    },
                                    t = (0, we.Om)(
                                        (e) => {
                                            const t = ye(u.confirmedItems.get(), e);
                                            if (!t) throw Error(`No confirmed item found with index: ${e}`);
                                            return Object.assign({}, t);
                                        },
                                        { equals: fe.jv },
                                    ),
                                    n = (0, we.Om)(() => u.confirmedItems.get().length),
                                    a = (0, we.Om)(() => u.lacksItem.get().length),
                                    r = (0, we.Om)(
                                        () => {
                                            const e = t(0);
                                            return (e && ye(e.demountPrice.price, 0)) || null;
                                        },
                                        { equals: fe.jv },
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
                        return Object.assign({}, t, {
                            price: e.array('dealPanel.price'),
                            dealPanel: e.object('dealPanel'),
                            computes: n,
                        });
                    }, fe.ZT),
                    ke = xe[0],
                    Se = xe[1],
                    Te = (e, u) => {
                        const t = [];
                        for (let n = 0; n < e; n++) t.push(u(n));
                        return t;
                    },
                    Pe = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ne = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Ie = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Me = (e) =>
                        Ie
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = Ne.length - 1; t >= 0; t--)
                                      for (; e >= Ne[t]; ) (u += Pe[t]), (e -= Ne[t]);
                                  return u;
                              })(e),
                    Re = {
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
                    Oe = (0, A.Pi)(({ index: e, itemsType: u }) => {
                        const t = be().model;
                        if (!('computes' in t)) return null;
                        const n = t.computes.confirmedItem(e);
                        if (!n || !n.imageSource) return null;
                        const r = n.highlightType,
                            i = n.level,
                            o = n.overlayType,
                            l = n.imageSource,
                            c = u === s;
                        return a().createElement(
                            'div',
                            { className: Re.base },
                            a().createElement('div', { className: D()(Re.highlight, Re[`highlight__${r}`]) }),
                            a().createElement('div', {
                                className: D()(Re.image, c && Re.image__postProgression),
                                style: { backgroundImage: `url(${l})` },
                            }),
                            i && c
                                ? a().createElement('div', { className: Re.postProgressionLevel }, Me(i))
                                : Boolean(i) &&
                                      a().createElement('div', {
                                          style: {
                                              backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${i}`)})`,
                                          },
                                          className: Re.level,
                                      }),
                            a().createElement('div', { className: D()(Re.overlay, Re[`overlay__${o}`]) }),
                        );
                    }),
                    Le = 'Items_base_b1',
                    He = (0, A.Pi)(({ itemsType: e }) => {
                        const u = be().model;
                        return 'computes' in u
                            ? a().createElement(
                                  'div',
                                  { className: Le },
                                  Te(u.computes.confirmedItemsLength(), (u) =>
                                      a().createElement(Oe, { key: u, index: u, itemsType: e }),
                                  ),
                              )
                            : null;
                    });
                var We = t(7405);
                const $e = 'FormatText_base_d0',
                    Ue = ({ binding: e, text: u = '', classMix: t, alignment: r = y.left, formatWithBrackets: i }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const s = i && e ? w(u, e) : u;
                        return a().createElement(
                            n.Fragment,
                            null,
                            s.split('\n').map((u, i) =>
                                a().createElement(
                                    'div',
                                    { className: D()($e, t), key: `${u}-${i}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : I(e, u))))(
                                        u,
                                        r,
                                        e,
                                    ).map((e, u) => a().createElement(n.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    Ve = {
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
                    Ze = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    je = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    ze = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    qe = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = (0, n.useMemo)(() => u || {}, [u]);
                        let s = Ze.exec(e),
                            o = e,
                            l = 0;
                        for (; s; ) {
                            const t = s[0],
                                n = je.exec(t),
                                c = ze.exec(t),
                                _ = s[1];
                            if (n && c) {
                                const e = n[0],
                                    s = e + l++ + e;
                                (o = o.replace(t, `%(${s})`)),
                                    (i[s] = Ve[e]
                                        ? a().createElement(
                                              'span',
                                              { className: Ve[e] },
                                              a().createElement(Ue, { text: _, binding: u }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: r(e) },
                                              a().createElement(Ue, { text: _, binding: u }),
                                          ));
                            }
                            s = Ze.exec(e);
                        }
                        return a().createElement(Ue, { text: o, classMix: t, binding: i });
                    }),
                    Ge = 'Names_base_96',
                    Ke = (0, A.Pi)(() => {
                        const e = be().model;
                        if (!('computes' in e)) return null;
                        const u = e.computes.confirmedItemsLength();
                        return u <= 1
                            ? null
                            : a().createElement(
                                  'div',
                                  { className: Ge },
                                  Te(u, (t) => {
                                      const r = u - 2,
                                          i = e.computes.confirmedItem(t);
                                      if (!i) return null;
                                      let s;
                                      return (
                                          (s =
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
                                                  x(i.name),
                                                  R.strings.common.common.close_quotes(),
                                              ),
                                              s,
                                          )
                                      );
                                  }),
                              );
                    }),
                    Xe = 'DemountKit_base_af',
                    Ye = 'DemountKit_icon_c4',
                    Je = 'DemountKit_value_79',
                    Qe = ({ value: e }) =>
                        a().createElement(
                            'span',
                            { className: Xe },
                            a().createElement('span', { className: Je }, e),
                            a().createElement('span', { className: Ye }),
                        ),
                    eu = 'Description_base_08',
                    uu = 'Description_warning_cf',
                    tu = 'Description_doesNotWork_99',
                    nu = 'Description_demountPairModification_6f',
                    au = 'Description_warningIcon_98',
                    ru = R.strings.tank_setup.dialogs.confirm,
                    iu = (0, A.Pi)(() => {
                        const e = Se().model,
                            u = e.lacksItem.get(),
                            t = e.computes.lacksItemsLength(),
                            r = e.mainContent.get(),
                            i = r.demountPairModification,
                            s = r.itemsType,
                            o = e.computes.confirmedItem(0),
                            l = e.computes.confirmedItemsLength() > 1,
                            c = 'optionalDevice' === s,
                            _ = 'battleBooster' === s && t > 0,
                            m = e.computes.confirmedPrice(),
                            d = t - 1;
                        if (!(l || c || _ || i)) return null;
                        if (!o) return null;
                        const E = ru.warning().replace(`%(devices)s${R.strings.common.common.dot()}`, '%(devices)s'),
                            A = l ? 'items' : o.optItemDescKey;
                        return a().createElement(
                            'div',
                            { className: eu },
                            a().createElement(Ke, null),
                            c &&
                                a().createElement(qe, {
                                    text: String(ru.demount.$dyn(A)),
                                    binding:
                                        c && m
                                            ? {
                                                  demountKit: a().createElement(Qe, { value: 1 }),
                                                  price: a().createElement(We.F, {
                                                      size: K.et.small,
                                                      type: m.name,
                                                      value: m.value,
                                                  }),
                                              }
                                            : {},
                                }),
                            _ &&
                                a().createElement(Ue, {
                                    text: E,
                                    binding: _
                                        ? {
                                              devices:
                                                  ((F = u),
                                                  (D = (e, u) =>
                                                      a().createElement(
                                                          n.Fragment,
                                                          { key: e },
                                                          a().createElement(
                                                              'span',
                                                              null,
                                                              R.strings.common.common.open_quotes(),
                                                              R.strings.artefacts.$dyn(e).name(),
                                                              R.strings.common.common.close_quotes(),
                                                              u === d ? R.strings.common.common.dot() : ', ',
                                                          ),
                                                      )),
                                                  Array.isArray(F)
                                                      ? F.map(D)
                                                      : F.map((e, u, t) => D(null == e ? void 0 : e.value, u, t))),
                                              doesNotWork: a().createElement(
                                                  'span',
                                                  { className: tu },
                                                  ru.doesNotWork(),
                                              ),
                                          }
                                        : {},
                                    classMix: uu,
                                }),
                            i &&
                                a().createElement(
                                    'div',
                                    { className: nu },
                                    a().createElement('div', { className: au }),
                                    ru.item.demountPairModification(),
                                ),
                        );
                        var F, D;
                    }),
                    su = 'DialogContent_base_09',
                    ou = 'DialogContent_list_8e',
                    lu = 'DialogContent_description_c2',
                    cu = 'DialogContent_title_8f',
                    _u = 'DialogContent_vehicleContainer_1c',
                    mu = 'DialogContent_vehicleIcon_e8',
                    du = R.strings.common.common,
                    Eu = (0, A.Pi)(({ name: e, title: u, items: t, description: n }) => {
                        const r = Se().model.root.get().vehicleType,
                            i = r && r.replace(/-/g, '_');
                        return a().createElement(
                            'div',
                            { className: su },
                            t && a().createElement('div', { className: ou }, t),
                            a().createElement(Ue, {
                                text: u,
                                binding: {
                                    vehicle:
                                        i &&
                                        a().createElement(
                                            'div',
                                            { className: _u },
                                            a().createElement('div', {
                                                className: mu,
                                                style: {
                                                    backgroundImage: i
                                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.white.c_36x36.$dyn(i)})`
                                                        : '',
                                                },
                                            }),
                                            a().createElement(
                                                'span',
                                                null,
                                                R.strings.tank_setup.dialogs.confirm.vehicleType.$dyn(i),
                                            ),
                                        ),
                                    name: `${du.open_quotes()}${x(e || '')}${du.close_quotes()}`,
                                },
                                classMix: cu,
                                formatWithBrackets: !0,
                            }),
                            n && a().createElement('div', { className: lu }, n),
                        );
                    });
                var Au = t(8175),
                    Fu = t(3755);
                const Du = 'DialogFooter_base_52',
                    pu = () =>
                        a().createElement(
                            'div',
                            { className: Du },
                            a().createElement(Fu.w, { panelType: Au.D0.Column, parentModelPath: 'model' }),
                        ),
                    gu = R.strings.tank_setup.dialogs.confirm,
                    hu = (0, A.Pi)(({ isPaymentDeal: e, actionType: u }) => {
                        var t;
                        const n = Se().model,
                            r = n.computes.confirmedItemsLength() > 1,
                            i = n.mainContent.get().itemsType,
                            s = n.root.get(),
                            o = s.withRollback,
                            l = s.applyForAllVehiclesByType,
                            c = r ? gu.title.itemsForAllVehiclesByType : gu.title.itemForAllVehiclesByType,
                            _ = r ? gu.title.items : gu.title.item,
                            m = r ? gu.items : gu.item,
                            d = l ? c : _,
                            E = n.dealPanel.get().isDisabled;
                        return a().createElement(Fe, {
                            parentId: pe,
                            buttonAccept: Object.assign({}, ge, { disabled: E }),
                            buttonAcceptText: String(gu.confirm.$dyn(u)),
                            buttonCancel: he,
                            buttonCancelText: o && e ? gu.cancel.withRollback() : String(gu.cancel.$dyn(u)),
                            content: a().createElement(Eu, {
                                name: null == (t = n.computes.confirmedItem(0)) ? void 0 : t.name,
                                title: w(String(d.$dyn(u)), { type: m.$dyn(i) }),
                                items: a().createElement(He, { itemsType: i }),
                                description: a().createElement(iu, null),
                            }),
                            footer: 'battleAbility' !== i && a().createElement(pu, null),
                            showPayInfo: e,
                        });
                    }),
                    Cu = 'default',
                    Bu = 'notRequired';
                var bu = t(9174);
                const vu = ({ fromItem: e, toItem: u, exchangeRate: t }) =>
                        a().createElement(Ue, {
                            text: R.strings.tank_setup.dialogs.goldExchange.default.status(),
                            binding: {
                                gold: a().createElement(We.F, {
                                    key: e.name,
                                    size: K.et.small,
                                    type: K.V2.gold,
                                    value: 1,
                                }),
                                credits: a().createElement(We.F, {
                                    key: u.name,
                                    size: K.et.small,
                                    type: K.V2.credits,
                                    value: t.current,
                                    discountValue: t.discount,
                                    isDiscount: Boolean(t.discount),
                                }),
                            },
                        }),
                    fu = (0, ve.q)()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            needRepairContent: e.object('needRepairContent'),
                        }),
                        fe.ZT,
                    ),
                    yu = fu[0],
                    wu = fu[1],
                    xu = 'Alert_base_42',
                    ku = 'Alert_highlight_f2',
                    Su = 'Alert_highlight__warning_13',
                    Tu = ({ warning: e }) => {
                        const u = D()(ku, e && Su);
                        return a().createElement('div', { className: xu }, a().createElement('div', { className: u }));
                    },
                    Pu = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Nu, Iu;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Nu || (Nu = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Iu || (Iu = {}));
                const Mu = ({ size: e = Nu.Default }) => {
                        const u = D()(Pu.background, Pu[`background__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    Ru = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Ou = ({ size: e }) => {
                        const u = D()(Ru.base, Ru[`base__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    Lu = {
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
                    Hu = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: i }) => {
                            const s = D()(
                                    Lu.base,
                                    Lu[`base__${e}`],
                                    t && Lu.base__disabled,
                                    r && Lu.base__finished,
                                    i && Lu.base__withoutBounce,
                                ),
                                o = !t && !r;
                            return a().createElement(
                                'div',
                                { className: s, style: n, ref: u },
                                a().createElement('div', { className: Lu.pattern }),
                                a().createElement('div', { className: Lu.gradient }),
                                o && a().createElement(Ou, { size: e }),
                            );
                        },
                    ),
                    Wu = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: i }) => {
                        const s = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                o && i && i();
                            }, [o, i]),
                            a().createElement(Hu, { size: e, disabled: r, baseStyles: s, isComplete: o, lineRef: t })
                        );
                    },
                    $u = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let Uu, Vu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Uu || (Uu = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Vu || (Vu = {}));
                const Zu = 'ProgressBarDeltaSimple_base_6c',
                    ju = 'ProgressBarDeltaSimple_delta_99',
                    zu = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: i,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = s < r,
                                _ = (0, n.useState)(Vu.Idle),
                                m = _[0],
                                d = _[1],
                                E = m === Vu.In,
                                A = m === Vu.End,
                                F = m === Vu.Idle,
                                D = (0, n.useCallback)(
                                    (e) => {
                                        d(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (F && !t) {
                                    return $u(() => {
                                        D(Vu.In);
                                    }, u);
                                }
                            }, [D, t, F, u]),
                                (0, n.useEffect)(() => {
                                    if (E) {
                                        return $u(() => {
                                            o && o(), D(Vu.End);
                                        }, e + u);
                                    }
                                }, [D, E, o, u, e]);
                            const p = (0, n.useMemo)(
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
                                    () => ({ width: `${Math.abs(r - s)}%`, left: `${c ? s : r}%` }),
                                    [r, c, s],
                                );
                            return A
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: Zu, style: h },
                                      a().createElement(
                                          'div',
                                          { style: F ? p : g, className: ju },
                                          a().createElement(Ou, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    qu = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const _ = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Hu, {
                                    size: u,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: s,
                                    baseStyles: _,
                                }),
                                t >= 0 &&
                                    a().createElement(zu, {
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
                    Gu = 'ProgressBarDeltaGrow_base_7e',
                    Ku = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Xu = 'ProgressBarDeltaGrow_glow_68',
                    Yu = (e) => (e ? { left: 0 } : { right: 0 }),
                    Ju = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Qu = (e) => ({ transitionDuration: `${e}ms` }),
                    et = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: i,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const _ = s < r,
                                m = (0, n.useState)(Uu.Idle),
                                d = m[0],
                                E = m[1],
                                A = d === Uu.End,
                                F = d === Uu.Idle,
                                p = d === Uu.Grow,
                                g = d === Uu.Shrink,
                                h = (0, n.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                C = (0, n.useCallback)(
                                    (e, u) =>
                                        $u(() => {
                                            h(e);
                                        }, u),
                                    [h],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? C(Uu.Grow, u)
                                        : p
                                          ? C(Uu.Shrink, e)
                                          : g
                                            ? C(Uu.End, e)
                                            : void (A && o && o());
                            }, [C, t, A, p, F, g, o, u, e]);
                            const B = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Qu(e), Yu(_)), [_, e]),
                                b = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Qu(e), Yu(_)), [_, e]),
                                v = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Ju(_, r), Qu(e)), [r, _, e]),
                                f = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - r)}%` }, Ju(_, r), Qu(e)),
                                    [r, _, s, e],
                                );
                            if (A) return null;
                            const y = D()(Gu, c, _ && 0 === s && Ku);
                            return a().createElement(
                                'div',
                                { style: F ? v : f, className: y },
                                a().createElement(
                                    'div',
                                    { style: g ? b : B, className: Xu },
                                    a().createElement(Ou, { size: i }),
                                ),
                            );
                        },
                    ),
                    ut = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < t,
                                m = (0, n.useState)(!1),
                                d = m[0],
                                E = m[1],
                                A = (0, n.useCallback)(
                                    (e) => {
                                        e === Uu.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                F = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Hu, {
                                    size: u,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: s,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: d ? D : F,
                                }),
                                t >= 0 &&
                                    a().createElement(et, {
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
                    tt = ['onComplete', 'onEndAnimation'];
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const at = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, tt);
                        const i = (0, n.useState)(!1),
                            s = i[0],
                            o = i[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== s && o(e), e && u && u(), t && t();
                            }, [s, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case Iu.Simple:
                                return a().createElement(qu, nt({}, r, { onEndAnimation: l, isComplete: s }));
                            case Iu.Growing:
                                return a().createElement(ut, nt({}, r, { onEndAnimation: l, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    rt = ['onEndAnimation'];
                function it() {
                    return (
                        (it =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        it.apply(this, arguments)
                    );
                }
                const st = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, rt);
                    const r = (0, n.useRef)({}),
                        i = (0, n.useCallback)(() => {
                            (r.current.from = void 0), u && u();
                        }, [u]),
                        s = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = s),
                        a().createElement(at, it({}, t, { onEndAnimation: i, key: `${s}-${t.to}`, from: s }))
                    );
                });
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                const lt = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: i,
                            onEndAnimation: s,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (r === u)
                                return a().createElement(Wu, {
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
                                onEndAnimation: s,
                                onChangeAnimationState: o,
                            };
                            return i.withStack
                                ? a().createElement(st, c)
                                : a().createElement(at, ot({ key: `${r}-${u}` }, c));
                        },
                    ),
                    ct = (e) => ({
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
                    _t = (e, u, t) => (t < e ? e : t > u ? u : t),
                    mt = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (_t(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    dt = {
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
                    Et = {
                        freezed: !1,
                        withStack: !1,
                        type: Iu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    At = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = dt,
                            size: t = Nu.Default,
                            animationSettings: r = Et,
                            disabled: i = !1,
                            withoutBackground: s = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: _,
                            onEndAnimation: m,
                            onComplete: d,
                        }) => {
                            const E = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const n = (_t(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: mt(n, u, t) };
                                }, [t, u, e]))(o, e, l);
                            return a().createElement(
                                'div',
                                { className: D()(Pu.base, Pu[`base__${t}`]), style: ct(u) },
                                !s && a().createElement(Mu, { size: t }),
                                a().createElement(lt, {
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
                    Ft = 'Durability_base_8c',
                    Dt = 'Durability_label_02',
                    pt = 'Durability_bar_73',
                    gt = 'Durability_percentage_a7',
                    ht = R.strings.tank_setup.dialogs.needRepair,
                    Ct = ({ value: e }) =>
                        a().createElement(
                            'div',
                            { className: Ft },
                            a().createElement('div', { className: Dt }, ht.durability()),
                            a().createElement(
                                'div',
                                { className: pt },
                                a().createElement(At, { size: Nu.Medium, value: e }),
                            ),
                            a().createElement(Ue, {
                                text: ht.durabilityPercentage(),
                                binding: { value: e },
                                classMix: gt,
                            }),
                        ),
                    Bt = 'RepairHeaderApp_base_b0',
                    bt = 'RepairHeaderApp_durability_69',
                    vt = (0, A.Pi)(() => {
                        const e = wu().model,
                            u = e.needRepairContent.get().repairPercentage,
                            t = e.root.get().bottomContentType;
                        return a().createElement(
                            'div',
                            { className: Bt },
                            a().createElement(Tu, { warning: t === o }),
                            t === o && a().createElement('div', { className: bt }, a().createElement(Ct, { value: u })),
                        );
                    }),
                    ft = () => a().createElement(yu, null, a().createElement(vt, null)),
                    yt = {
                        base: 'ExchangeDialogContent_base_ef',
                        description: 'ExchangeDialogContent_description_6e',
                        status: 'ExchangeDialogContent_status_33',
                        status__notPossible: 'ExchangeDialogContent_status__notPossible_e1',
                        status__notRequired: 'ExchangeDialogContent_status__notRequired_8a',
                        items: 'ExchangeDialogContent_items_72',
                        title: 'ExchangeDialogContent_title_9f',
                        titleCurrency: 'ExchangeDialogContent_titleCurrency_88',
                    },
                    wt = R.strings.tank_setup.dialogs.goldExchange.notRequired.action,
                    xt = R.strings.common.common,
                    kt = (e) => (e === Ce.Modification ? wt.modification() : wt.buy()),
                    St = (0, A.Pi)(
                        ({
                            title: e,
                            titleBinding: u,
                            name: t,
                            exchangeState: n,
                            items: r,
                            actionType: i,
                            description: s,
                            exchangeType: o = zt.Basic,
                        }) => {
                            const l = be().model,
                                c = l.fromItem.get(),
                                _ = l.lacksMoney.get(),
                                m = l.toItem.get(),
                                d = l.exchangeRate.get(),
                                E =
                                    o === zt.Upgrade
                                        ? R.strings.tank_setup.dialogs.exchangeToUpgrade
                                        : R.strings.tank_setup.dialogs.goldExchange,
                                A = w(E.notRequired.title(), { action: kt(i) });
                            return a().createElement(
                                'div',
                                { className: yt.base },
                                o === zt.Repair && a().createElement(ft, null),
                                r && a().createElement('div', { className: yt.items }, r),
                                a().createElement(Ue, {
                                    text: n === Bu ? A : e,
                                    binding: Object.assign(
                                        {
                                            name: t && `${xt.open_quotes()}${x(t)}${xt.close_quotes()}`,
                                            credits: a().createElement(
                                                'div',
                                                { className: yt.titleCurrency },
                                                a().createElement(We.F, {
                                                    key: _.name,
                                                    size: K.et.large,
                                                    type: K.V2.credits,
                                                    value: _.value,
                                                }),
                                            ),
                                        },
                                        u,
                                    ),
                                    formatWithBrackets: Boolean(Object.keys(u || {}).length),
                                    classMix: yt.title,
                                }),
                                s && a().createElement('div', { className: yt.description }, s),
                                a().createElement(
                                    'div',
                                    { className: D()(yt.status, yt[`status__${n}`]) },
                                    n === Cu && a().createElement(vu, { fromItem: c, toItem: m, exchangeRate: d }),
                                    'notPossible' === n &&
                                        a().createElement(Ue, {
                                            text: E.notPossible.status(),
                                            binding: {
                                                gold: a().createElement(We.F, {
                                                    type: K.V2.gold,
                                                    size: K.et.small,
                                                    value: c.value,
                                                }),
                                            },
                                        }),
                                    n === Bu && E.notRequired.status(),
                                ),
                            );
                        },
                    );
                t(3368);
                let Tt;
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
                })(Tt || (Tt = {}));
                const Pt = {
                    base: 'NumericStepper_base_35',
                    base__small: 'NumericStepper_base__small_11',
                    base__medium: 'NumericStepper_base__medium_9d',
                    base__large: 'NumericStepper_base__large_dc',
                    base__isFocus: 'NumericStepper_base__isFocus_49',
                    base__isDisabled: 'NumericStepper_base__isDisabled_ac',
                    inputContainer: 'NumericStepper_inputContainer_e2',
                    input: 'NumericStepper_input_55',
                    'base__withCurrency-small': 'NumericStepper_base__withCurrency-small_de',
                    'base__withCurrency-medium': 'NumericStepper_base__withCurrency-medium_69',
                    'base__withCurrency-large': 'NumericStepper_base__withCurrency-large_a1',
                    input__disabled: 'NumericStepper_input__disabled_d8',
                    input__credits: 'NumericStepper_input__credits_08',
                    'input__credits-disabled': 'NumericStepper_input__credits-disabled_3f',
                    input__gold: 'NumericStepper_input__gold_14',
                    'input__gold-disabled': 'NumericStepper_input__gold-disabled_c6',
                    input__xp: 'NumericStepper_input__xp_c4',
                    input__freeXP: 'NumericStepper_input__freeXP_06',
                    input__crystal: 'NumericStepper_input__crystal_2e',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_33',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_8b',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_f8',
                    input__withCurrency: 'NumericStepper_input__withCurrency_3b',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_db',
                    'input__xp-large': 'NumericStepper_input__xp-large_73',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_2b',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_c9',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_56',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_4e',
                    currency: 'NumericStepper_currency_38',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_66',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_66',
                    'currency__freeXP-medium': 'NumericStepper_currency__freeXP-medium_79',
                    'currency__freeXP-large': 'NumericStepper_currency__freeXP-large_c7',
                    'currency__crystal-medium': 'NumericStepper_currency__crystal-medium_55',
                    'currency__crystal-large': 'NumericStepper_currency__crystal-large_a4',
                    currencyIcon: 'NumericStepper_currencyIcon_8e',
                    'currencyIcon__credits-small': 'NumericStepper_currencyIcon__credits-small_99',
                    'currencyIcon__credits-medium': 'NumericStepper_currencyIcon__credits-medium_1a',
                    'currencyIcon__credits-large': 'NumericStepper_currencyIcon__credits-large_bc',
                    'currencyIcon__gold-small': 'NumericStepper_currencyIcon__gold-small_2a',
                    'currencyIcon__gold-medium': 'NumericStepper_currencyIcon__gold-medium_f6',
                    'currencyIcon__gold-large': 'NumericStepper_currencyIcon__gold-large_d6',
                    'currencyIcon__crystal-small': 'NumericStepper_currencyIcon__crystal-small_b5',
                    'currencyIcon__crystal-medium': 'NumericStepper_currencyIcon__crystal-medium_ac',
                    'currencyIcon__crystal-large': 'NumericStepper_currencyIcon__crystal-large_2b',
                    'currencyIcon__freeXP-small': 'NumericStepper_currencyIcon__freeXP-small_4d',
                    'currencyIcon__freeXP-medium': 'NumericStepper_currencyIcon__freeXP-medium_85',
                    'currencyIcon__freeXP-large': 'NumericStepper_currencyIcon__freeXP-large_76',
                    'currencyIcon__xp-small': 'NumericStepper_currencyIcon__xp-small_73',
                    'currencyIcon__xp-medium': 'NumericStepper_currencyIcon__xp-medium_ef',
                    'currencyIcon__xp-large': 'NumericStepper_currencyIcon__xp-large_3e',
                    dummyValue: 'NumericStepper_dummyValue_0c',
                    control: 'NumericStepper_control_ab',
                    buttonIncrement: 'NumericStepper_buttonIncrement_16',
                    buttonDecrement: 'NumericStepper_buttonDecrement_c8',
                    buttonIncrement__small: 'NumericStepper_buttonIncrement__small_f6',
                    buttonDecrement__small: 'NumericStepper_buttonDecrement__small_36',
                    buttonIncrement__medium: 'NumericStepper_buttonIncrement__medium_fd',
                    buttonDecrement__medium: 'NumericStepper_buttonDecrement__medium_d1',
                    buttonIncrement__large: 'NumericStepper_buttonIncrement__large_56',
                    buttonDecrement__large: 'NumericStepper_buttonDecrement__large_63',
                    buttonIncrement__isDisabled: 'NumericStepper_buttonIncrement__isDisabled_68',
                    buttonDecrement__isDisabled: 'NumericStepper_buttonDecrement__isDisabled_d9',
                    'buttonIncrement__isActive-small': 'NumericStepper_buttonIncrement__isActive-small_2a',
                    'buttonIncrement__isActive-medium': 'NumericStepper_buttonIncrement__isActive-medium_c2',
                    'buttonIncrement__isActive-large': 'NumericStepper_buttonIncrement__isActive-large_91',
                    'buttonDecrement__isActive-small': 'NumericStepper_buttonDecrement__isActive-small_21',
                    'buttonDecrement__isActive-medium': 'NumericStepper_buttonDecrement__isActive-medium_a3',
                    'buttonDecrement__isActive-large': 'NumericStepper_buttonDecrement__isActive-large_8b',
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
                            (this.formatValue = (e) =>
                                this.props.currencyType ? _.Z5.getNumberFormat(e, _.B3.GOLD) : e.toString()),
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
                                const u = e === c.n.BACKSPACE,
                                    t = e === c.n.DELETE,
                                    n = this.input.current,
                                    a = n.selectionStart || 0,
                                    r = n.selectionEnd || 0;
                                let i = n.value;
                                const s = Math.max(a, r),
                                    o = s;
                                t && (i = i.substring(0, s) + i.substring(s + 1, i.length)),
                                    u && 1 === a && 1 === i.length && (i = '0');
                                const l = Number(i.trim().replace(/\D/g, '')),
                                    m = Number.isSafeInteger(l) ? l : Number.MAX_SAFE_INTEGER,
                                    d = this.props.currencyType ? _.Z5.getNumberFormat(m, _.B3.GOLD) : m.toString(),
                                    E = !isNaN(Number(i.replace(' ', '')));
                                n.value = d;
                                const A = new RegExp(/\d/g);
                                let F = 0;
                                for (let e = 0; e < o; e++) {
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
                                const u = e.keyCode === c.n.BACKSPACE,
                                    t = e.keyCode === c.n.DELETE,
                                    n = e.target,
                                    a = n.selectionStart,
                                    r = n.selectionEnd,
                                    i = n.value,
                                    s = a !== r,
                                    o = new RegExp(/\D/),
                                    l = u && a ? a - 1 : a || 0;
                                if (s) return;
                                let _ = l;
                                const m = o.test(i[l]);
                                if (t && m) for (; o.test(i[_]) && _ < i.length; ) _++;
                                if (u && m) for (; o.test(i[_]) && _ > 0; ) _--;
                                if (_ !== l || (u && m))
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
                                        (e.keyCode in c.n &&
                                            e.keyCode !== c.n.BACKSPACE &&
                                            e.keyCode !== c.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case c.n.ARROW_UP:
                                        case c.n.NUM_PLUS:
                                        case c.n.PLUS:
                                            this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment();
                                            break;
                                        case c.n.ARROW_DOWN:
                                        case c.n.NUM_MINUS:
                                        case c.n.MINUS:
                                            this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement();
                                            break;
                                        case c.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case c.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case c.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                this.changeValue(this.props.maximum), this.setCursorPosition(0, e);
                                            }
                                            break;
                                        case c.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case c.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case c.n.BACKSPACE:
                                        case c.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case c.n.ARROW_UP:
                                        case c.n.NUM_PLUS:
                                        case c.n.PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case c.n.ARROW_DOWN:
                                        case c.n.NUM_MINUS:
                                        case c.n.MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in Tt || e.preventDefault();
                            }),
                            (this.increment = () => {
                                const e = Math.min(
                                    this.getValidValue(this.state.value) + this.props.stepSize,
                                    this.props.maximum,
                                );
                                this.changeValue(e);
                            }),
                            (this.decrement = () => {
                                const e = Math.max(
                                    this.getValidValue(this.state.value) - this.props.stepSize,
                                    this.props.minimum,
                                );
                                this.changeValue(e);
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
                                this.props.isDisabled || (0, g.G)('highlight');
                            }),
                            (this.playClickSound = () => {
                                this.props.isDisabled || (0, g.G)('play');
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
                        e !== this.props.value && this.setState({ value: e }),
                            u !== this.props.isFocused &&
                                (this.setState({ isFocused: u }),
                                u
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput());
                    }
                    get formattedValue() {
                        return this.props.currencyType
                            ? _.Z5.getNumberFormat(this.state.value, _.B3.GOLD)
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
                            r = D()(
                                Pt.base,
                                Pt[`base__${t}`],
                                n && Pt[`base__withCurrency-${t}`],
                                u && Pt.base__isDisabled,
                                this.state.isFocused && Pt.base__isFocus,
                            ),
                            i = D()(
                                Pt.buttonIncrement,
                                Pt[`buttonIncrement__${t}`],
                                this.buttonIncrementIsDisabled && Pt.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    Pt[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            s = D()(
                                Pt.buttonDecrement,
                                Pt[`buttonDecrement__${t}`],
                                this.buttonDecrementIsDisabled && Pt.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    Pt[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            o = D()(
                                Pt.input,
                                u && Pt.input__disabled,
                                n && Pt.input__withCurrency,
                                n && Pt[`input__${n}-${t}`],
                                n && Pt[`input__${n}`],
                                n && u && Pt[`input__${n}-disabled`],
                            ),
                            l = D()(Pt.currencyIcon, n && Pt[`currencyIcon__${n}-${t}`]),
                            c = D()(Pt.currency, n && Pt[`currency__${n}`], n && Pt[`currency__${n}-${t}`]);
                        return a().createElement(
                            'div',
                            {
                                className: r,
                                ref: this.numericalStepper,
                                style: ((_ = this.props.width), _ ? { width: `${_}rem` } : {}),
                            },
                            a().createElement(
                                'div',
                                { className: Pt.inputContainer },
                                n &&
                                    a().createElement(
                                        'div',
                                        { className: c },
                                        a().createElement('span', { className: Pt.dummyValue }, this.formattedValue),
                                        a().createElement('span', { className: l }),
                                    ),
                                a().createElement('input', {
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
                            a().createElement(
                                'div',
                                { className: Pt.control },
                                a().createElement('div', {
                                    className: i,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                a().createElement('div', {
                                    className: s,
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
                const It = 'ExchangePanel_base_bd',
                    Mt = 'ExchangePanel_arrow_62',
                    Rt = 'ExchangePanel_arrow__small_30',
                    Ot = ({ goldToChange: e, setGoldToChange: u, isSmall: t = !1 }) => {
                        const r = G('model').golds,
                            i = G('model.exchangePanel', !1),
                            s = i.exchangeRate,
                            o = i.fromItem,
                            l = i.toItem,
                            _ = (0, n.useState)(0),
                            m = _[0],
                            d = _[1],
                            E = (0, n.useCallback)(
                                (e) => {
                                    (o.value = e), (l.value = e * s.current), u(o.value);
                                },
                                [s, o.value, u, l.value],
                            ),
                            A = (0, n.useCallback)(
                                (e) => {
                                    (o.value = e / s.current), (l.value = e), u(o.value);
                                },
                                [s, o.value, u, l.value],
                            ),
                            F = (0, n.useCallback)(
                                (e) => {
                                    let u = m;
                                    e.keyCode === c.n.TAB && (u = e.shiftKey ? (0 === m ? 1 : --u) : 1 === m ? 0 : ++u),
                                        d(u);
                                },
                                [m],
                            ),
                            p = t ? 'small' : 'medium',
                            g = D()(Mt, t && Rt);
                        return a().createElement(
                            'div',
                            { className: It },
                            a().createElement(Nt, {
                                value: e,
                                maximum: r,
                                currencyType: K.V2.gold,
                                onChange: E,
                                width: 170,
                                size: p,
                                isFocused: 0 === m,
                                onKeyDown: F,
                            }),
                            a().createElement('div', { className: g }),
                            a().createElement(Nt, {
                                value: e * s.current,
                                maximum: r * s.current,
                                currencyType: K.V2.credits,
                                stepSize: s.current,
                                onChange: A,
                                width: 170,
                                size: p,
                                isFocused: 1 === m,
                                onKeyDown: F,
                            }),
                        );
                    };
                var Lt = t(5851),
                    Ht = t(2306);
                const Wt = (0, ve.q)()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            needRepairContent: e.object('needRepairContent'),
                            dealPanel: e.object('dealPanel'),
                            exchangePanel: e.object('exchangePanel'),
                            lacksMoney: e.object('lacksMoney'),
                            fromItem: e.object('exchangePanel.fromItem'),
                            toItem: e.object('exchangePanel.toItem'),
                            exchangeRate: e.object('exchangePanel.exchangeRate'),
                        }),
                        ({ externalModel: e }) => ({
                            changeAutoRenewal: e.createCallback(
                                (e) => ({ value: e }),
                                'dealPanel.onAutoRenewalChanged',
                            ),
                        }),
                    ),
                    $t = (Wt[0], Wt[1]),
                    Ut = 'ExchangeDialogFooter_base_45',
                    Vt = 'ExchangeDialogFooter_exchange_11',
                    Zt = 'ExchangeDialogFooter_renewal_e2',
                    jt = (0, A.Pi)(({ goldToChange: e, setGoldToChange: u, exchangeType: t = zt.Basic }) => {
                        const n = $t();
                        return a().createElement(
                            'div',
                            { className: Ut },
                            a().createElement(
                                'div',
                                { className: Vt },
                                a().createElement(Ot, { goldToChange: e, setGoldToChange: u }),
                            ),
                            t === zt.Repair &&
                                a().createElement(
                                    Ht.h.Provider,
                                    { value: n },
                                    a().createElement(
                                        'div',
                                        { className: Zt },
                                        a().createElement(Lt.Y, {
                                            renewType: Au.my.Repair,
                                            label: R.strings.tank_setup.dialogs.needRepair.autoRepair(),
                                        }),
                                    ),
                                ),
                        );
                    });
                let zt;
                !(function (e) {
                    (e.Basic = 'basic'), (e.Repair = 'repair'), (e.Upgrade = 'upgrade');
                })(zt || (zt = {}));
                const qt = R.strings.tank_setup.dialogs,
                    Gt = (0, A.Pi)(
                        ({
                            title: e,
                            titleBinding: u,
                            name: t,
                            actionType: r,
                            withInfo: i = !0,
                            type: s = zt.Basic,
                            withRollback: o = !1,
                            disabledAcceptTooltipText: l = R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                        }) => {
                            const c = (0, n.useState)(0),
                                _ = c[0],
                                m = c[1],
                                d = be().model,
                                E = d.root.get().exchangeState,
                                A = d.lacksMoney.get(),
                                F = d.toItem.get(),
                                D = E === Cu;
                            return (
                                (0, n.useLayoutEffect)(
                                    () =>
                                        (0, bu.EH)(() => {
                                            m(d.fromItem.get().value);
                                        }),
                                    [d],
                                ),
                                a().createElement(Fe, {
                                    parentId: 'exchange-dialog',
                                    content: a().createElement(St, {
                                        title: e,
                                        titleBinding: u,
                                        name: t,
                                        exchangeState: E,
                                        items: i && a().createElement(He, null),
                                        actionType: r,
                                        description: i && a().createElement(Ke, null),
                                        exchangeType: s,
                                    }),
                                    footer:
                                        D &&
                                        a().createElement(jt, { goldToChange: _, setGoldToChange: m, exchangeType: s }),
                                    showPayInfo: !0,
                                    buttonAccept: Object.assign({}, ge, {
                                        type: De.L.main,
                                        disabled: !D || A.value > F.value,
                                    }),
                                    buttonCancel: he,
                                    buttonAcceptText:
                                        s === zt.Upgrade ? qt.exchangeToUpgrade.confirm() : qt.goldExchange.confirm(),
                                    buttonCancelText: o
                                        ? qt.confirm.cancel.withRollback()
                                        : R.strings.dialogs.common.cancel(),
                                    disabledAcceptTooltipText: l,
                                    isShowTooltip: E !== Bu,
                                })
                            );
                        },
                    ),
                    Kt = R.strings.tank_setup.dialogs.goldExchange,
                    Xt = (0, A.Pi)(({ actionType: e, itemsType: u }) => {
                        const t = Se(),
                            n = t.model,
                            r = n.root.get().withRollback,
                            i = n.computes.confirmedItemsLength() > 1,
                            s = i ? Kt.items : Kt.item,
                            o = e === Ce.Modification ? Kt.action.modification() : Kt.action.buy();
                        return a().createElement(
                            Be.Provider,
                            { value: t },
                            a().createElement(Gt, {
                                title: i ? Kt.items.title() : Kt.item.title(),
                                name: n.computes.confirmedItem(0).name,
                                titleBinding: { action: o, type: s.$dyn(u) },
                                actionType: e,
                                withRollback: r,
                            }),
                        );
                    }),
                    Yt = R.strings.tank_setup.dialogs.confirm,
                    Jt = (0, A.Pi)(() => {
                        const e = Se(),
                            u = e.model,
                            t = u.mainContent.get().itemsType,
                            n = u.root.get().bottomContentType,
                            r = u.price.get(),
                            i = u.dealPanel.get().isDisabled,
                            o = Boolean(r.length),
                            l = ((e, u) => (e === s ? Ce.Modification : u ? Ce.Payment : Ce.Setup))(t, o);
                        switch ((E(), n)) {
                            case 'exchangePanel':
                                return a().createElement(Xt, { actionType: l, itemsType: t });
                            case 'saveSlotsContent':
                                return a().createElement(
                                    Be.Provider,
                                    { value: e },
                                    a().createElement(Fe, {
                                        parentId: pe,
                                        buttonAccept: Object.assign({}, ge, { disabled: i }),
                                        buttonAcceptText: Yt.confirm.changeSlots(),
                                        buttonCancel: he,
                                        buttonCancelText: Yt.cancel.changeSlots(),
                                        content: a().createElement(Eu, { title: String(Yt.title.changeSlots.$dyn(t)) }),
                                        showPayInfo: o,
                                    }),
                                );
                            default:
                                return a().createElement(
                                    Be.Provider,
                                    { value: e },
                                    a().createElement(hu, { isPaymentDeal: o, actionType: l }),
                                );
                        }
                    });
                engine.whenReady.then(() => {
                    i().render(
                        a().createElement(ke, null, a().createElement(Jt, null)),
                        document.getElementById('root'),
                    );
                });
            },
            7383: (e, u, t) => {
                'use strict';
                t.d(u, { YR: () => n });
                const n = 'apply';
            },
            6880: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
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
            4382: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
                };
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
            1960: () => {
                'use strict';
            },
            8529: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'Animation_base_ab',
                    base__withAnimation: 'Animation_base__withAnimation_41',
                    'action-show': 'Animation_action-show_f8',
                    base__enter: 'Animation_base__enter_1e',
                    base__exit: 'Animation_base__exit_88',
                    'action-hide': 'Animation_action-hide_44',
                };
            },
            628: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
            },
            2527: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'ConfirmButton_base_75' };
            },
            8099: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'Controls_base_d3', button: 'Controls_button_f8' };
            },
            1523: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'TotalPrice_base_d9',
                    message: 'TotalPrice_message_66',
                    message__hidden: 'TotalPrice_message__hidden_29',
                    plus: 'TotalPrice_plus_f0',
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], r = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 107),
        (() => {
            var e = { 107: 0, 826: 0, 745: 0, 653: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, i, s] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        (a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(118));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
